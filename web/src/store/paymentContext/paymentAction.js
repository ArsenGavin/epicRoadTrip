import {
  CANCEL_PAYMENT_SUCCESS,
  ERROR_PAYMENT,
  LOADING_PAYMENT,
  VALIDATE_PAYMENT_SUCCESS,
} from "../actions";

export const loadingPaymentAction = () => ({
  type: LOADING_PAYMENT,
});

export const errorPaymentAction = (message) => ({
  type: ERROR_PAYMENT,
  payload: { message }
});

export const validatePaymentSuccessAction = (id, message) => ({
  type: VALIDATE_PAYMENT_SUCCESS,
  payload: { id, message },
});

export const cancelPaymentSuccessAction = (isCanceled) => ({
  type: CANCEL_PAYMENT_SUCCESS,
  payload: { isCanceled },
});
