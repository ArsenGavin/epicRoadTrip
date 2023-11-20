import axios from "axios";
import { API_URL } from "../utils/constants";
import authHeader from "./authHeaderService";

export const validatePaymentService = async (cart) => {
  return await axios.post(API_URL + "/payment/session", { cart: cart }, { headers: authHeader() });
};

export const cancelPaymentService = async () => {
  return { isCanceled: true };
};
