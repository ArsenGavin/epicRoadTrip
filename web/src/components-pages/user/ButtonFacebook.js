import React from "react";
import { useDispatch } from "react-redux";
import FacebookLogin from "react-facebook-login";
import { facebookAuthLogin } from "../../store/userContext/userSlice";

export default function ButtonFacebook() {
  const dispatch = useDispatch();
  const client_Facebook_ID = "1347427978987005";

  const responseFacebook = (response) => {
    dispatch(facebookAuthLogin(response.email, response.name, response.id));
  };
  return (
    <FacebookLogin
      appId={client_Facebook_ID}
      fields="name,email,picture"
      callback={responseFacebook}
      autoLoad={false}
      icon="fa-facebook"
    />
  );
}
