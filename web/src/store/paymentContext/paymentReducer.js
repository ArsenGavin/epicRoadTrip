import {
  CANCEL_PAYMENT_SUCCESS,
  ERROR_PAYMENT,
  LOADING_PAYMENT,
  VALIDATE_PAYMENT_SUCCESS,
} from "../actions";

const initialState = {
  id: "",
  isError: "",
  isCanceled: false,
  loading: false,
};

export default function paymentReducer(state = initialState, action) {
  switch (action.type) {
  case LOADING_PAYMENT:
    return {
      ...state,
      loading: true,
      isError: ""
    };

  case ERROR_PAYMENT:
    return {
      ...state,
      loading: false,
      isError: action.payload.message
    };

  case VALIDATE_PAYMENT_SUCCESS:
    return {
      ...state,
      isError: "",
      id: action.payload.id,
      isCanceled: false,
      loading: false,
    };

  case CANCEL_PAYMENT_SUCCESS:
    return {
      ...state,
      isError: "",
      id: "",
      isCanceled: true,
      loading: false,
    };

  default:
    return {
      ...state,
    };
  }
}
