import {
  AUTH_FACEBOOK_SUCCESS,
  AUTH_GOOGLE_SUCCESS,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  LOADING_USER,
  LOGOUT_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_FAVORITE_SELECTED_SUCCESS,
  UPDATE_FAVORITES_SUCCESS,
  ERROR_USER,
} from "../actions";

export const loadingUserAction = () => ({
  type: LOADING_USER,
});

export const errorUserAction = (message) => ({
  type: ERROR_USER,
  payload: { message }
});

export const loginUserSuccessAction = (user, token) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { user, token },
});

export const logoutUserSuccessAction = (user, token, isLoggedIn) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: { user, token, isLoggedIn }
});

export const registerUserSuccessAction = (isRegistered) => ({
  type: REGISTER_USER_SUCCESS,
  payload: { isRegistered },
});

export const updateUserSuccessAction = (isUpdated) => ({
  type: UPDATE_USER_SUCCESS,
  payload: { isUpdated },
});

export const deleteUserSuccessAction = (user, token, isLoggedIn) => ({
  type: DELETE_USER_SUCCESS,
  payload: { user, token, isLoggedIn }
});

export const facebookAuthSuccessAction = (user, facebookId, token) => ({
  type: AUTH_FACEBOOK_SUCCESS,
  payload: { user, facebookId, token },
});

export const googleAuthSuccessAction = (user, googleId, token) => ({
  type: AUTH_GOOGLE_SUCCESS,
  payload: { user, googleId, token },
});

export const favoriteChangeSuccess = (favoriteSelected) => ({
  type: UPDATE_FAVORITE_SELECTED_SUCCESS,
  payload: { favoriteSelected },
});

export const favorisSuccess = (favoris) => ({
  type: UPDATE_FAVORITES_SUCCESS,
  payload: { favoris },
});
