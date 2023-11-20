import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { STRIPE_KEY } from "../../utils/constants";
import { validatePayment } from "../../store/paymentContext/paymentSlice";
import Loading from "./Loading";
import Error from "./Error";
import { useStyles } from "../../styles/misc/payStyles";
import { createRoadtrip } from "../../store/roadtripContext/roadtripSlice";
import { useTranslation } from "react-i18next";


const stripePromise = loadStripe(STRIPE_KEY);

export default function Pay() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();
  const { isError, loading, isCanceled, id } = useSelector(state => state.payment);
  const { user } = useSelector(state => state.user);
  const { name, steps } = useSelector(state => state.roadtrip);

  const cart = {
    userId: user.id,
    steps: steps
  };

  useEffect(() => {
    if (!user) history.push("/");
  }, [id, isError, loading, isCanceled]);

  const validatePay = async () => {
    dispatch(createRoadtrip({
      name: name,
      steps: steps,
      user: user.id
    }));
    const stripe = await stripePromise;
    dispatch(validatePayment(cart));

    if (id) {
      const result = await stripe.redirectToCheckout({
        sessionId: id,
      });
      if (result.error) {
        return <Error/>;
      }
    }
  };

  if (loading) return <Loading/>;
  if (isError) return <Error/>;

  return (
    <Button
      id="paiement"
      onClick={validatePay}
      variant="contained"
      color="primary"
      disabled={loading}
      className={classes.submit}
    >
      {t("Home.pay")}
    </Button>
  );
}
