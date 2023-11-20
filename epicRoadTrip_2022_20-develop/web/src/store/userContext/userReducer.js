import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  AUTH_FACEBOOK_SUCCESS,
  AUTH_GOOGLE_SUCCESS,
  DELETE_USER_SUCCESS,
  LOADING_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_FAVORITE_SELECTED_SUCCESS,
  UPDATE_FAVORITES_SUCCESS,
  ERROR_USER,
} from "../actions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? {
    isLoggedIn: true,
    user,
    token: user.token,
    error: "",
    loading: false,
    isRegistered: false,
    isUpdated: false,
    isDeleted: false,
    favoriteSelected: null,
    favoris: user.favoris
  }
  : {
    isLoggedIn: false,
    user: null,
    token: "",
    error: "",
    loading: false,
    isUpdated: false,
    isRegistered: false,
    isDeleted: false,
    facebookId: "",
    googleId: "",
    favorites: [],
  };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOADING_USER:
    return {
      ...state,
      loading: true,
      error: ""
    };

  case ERROR_USER:
    return {
      ...state,
      loading: false,
      error: action.payload.message
    };

  case LOGIN_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      token: action.payload.token,
      user: action.payload.user,
      isLoggedIn: true,
    };

  case LOGOUT_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      token: action.payload.token,
      user: action.payload.user,
      isLoggedIn: action.payload.isLoggedIn,
    };

  case REGISTER_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      isRegistered: action.payload.isRegistered,
    };

  case UPDATE_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      isUpdated: action.payload.isUpdated,
    };

  case DELETE_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      token: action.payload.token,
      user: action.payload.user,
      isLoggedIn: action.payload.isLoggedIn,
      isDeleted: true,
    };

  case AUTH_FACEBOOK_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      user: action.payload.user,
      token: action.payload.token,
      facebookId: action.payload.user.facebookId,
      isLoggedIn: true,
    };

  case AUTH_GOOGLE_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      token: action.payload.token,
      googleId: action.payload.user.googleId,
      user: action.payload.user,
      isLoggedIn: true,
    };

  case UPDATE_FAVORITE_SELECTED_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      favoriteSelected: action.payload.favoriteSelected
    };

  case UPDATE_FAVORITES_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      favoris: action.payload.favoris
    };

  default:
    return {
      ...state,
    };
  }
}
