import React from "react";
import { googleAuthLogin } from "../../store/userContext/userSlice";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { useTranslation } from "react-i18next";

export default function ButtonGoogle() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const client_Google_ID =
    "645726852678-43filetdqqe2ra1n6m3ib975mn7jkjk5.apps.googleusercontent.com";
  const responseGoogle = (response) => {
    dispatch(
      googleAuthLogin(
        response.profileObj.email,
        response.profileObj.name,
        response.profileObj.googleId
      )
    );
  };

  const handleError = (e) => {
    console.log(e);
  };

  return (
    <GoogleLogin
      clientId={client_Google_ID}
      onSuccess={responseGoogle}
      onFailure={handleError}
      cookiePolicy={"single_host_origin"}
      buttonText={t("SignUp.Login With Google")}
    />
  );
}
