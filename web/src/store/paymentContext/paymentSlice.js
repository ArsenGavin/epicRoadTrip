import {
  validatePaymentService,
  cancelPaymentService,
} from "../../services/paymentService";
import {
  cancelPaymentSuccessAction,
  errorPaymentAction,
  loadingPaymentAction,
  validatePaymentSuccessAction
} from "./paymentAction";

export const validatePayment = (cart) => (dispatch) => {
  dispatch(loadingPaymentAction());
  return validatePaymentService(cart).then(
    (data) => {
      if (data.status === 201) {
        dispatch(validatePaymentSuccessAction(data.data.session, "success"));
        return Promise.resolve();
      }
    },
    (error) => {
      dispatch(errorPaymentAction(error.message));
      return Promise.reject();
    }
  );
};

export const cancelPayment = () => (dispatch) => {
  dispatch(loadingPaymentAction());
  return cancelPaymentService().then(
    (data) => {
      dispatch(cancelPaymentSuccessAction(data.isCanceled));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorPaymentAction(error.message));
      return Promise.reject();
    }
  );
};
