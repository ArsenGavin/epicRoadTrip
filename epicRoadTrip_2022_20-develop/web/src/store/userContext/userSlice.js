import {
  facebookAuthService,
  googleAuthService,
  updateUserService,
  loginService,
  logoutService,
  registerService,
  deleteService,
  updateFavorisService
} from "../../services/userService";
import {
  updateUserSuccessAction,
  deleteUserSuccessAction,
  facebookAuthSuccessAction,
  googleAuthSuccessAction,
  loadingUserAction,
  loginUserSuccessAction,
  logoutUserSuccessAction,
  registerUserSuccessAction,
  favoriteChangeSuccess,
  favorisSuccess,
  errorUserAction,
} from "./userAction";

export const loginUser = (email, password) => (dispatch) => {
  dispatch(loadingUserAction());
  return loginService(email, password).then(
    (data) => {
      dispatch(loginUserSuccessAction(data.user, data.token));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorUserAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const logoutUser = () => (dispatch) => {
  dispatch(loadingUserAction());
  return logoutService().then((data) => {
    dispatch(logoutUserSuccessAction(data.user, data.token, data.isLoggedIn));
    return Promise.resolve();
  });
};

export const facebookAuthLogin = (email, name, facebookId) => (dispatch) => {
  dispatch(loadingUserAction());
  return facebookAuthService(email, name, facebookId).then(
    (data) => {
      dispatch(
        facebookAuthSuccessAction(data.user, data.user.facebookId, data.token)
      );
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorUserAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const googleAuthLogin = (email, name, googleId) => (dispatch) => {
  dispatch(loadingUserAction());
  return googleAuthService(email, name, googleId).then(
    (data) => {
      dispatch(
        googleAuthSuccessAction(data.user, data.user.googleId, data.token)
      );
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorUserAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const registerUser = (user) => (dispatch) => {
  dispatch(loadingUserAction());
  return registerService(user).then(
    (data) => {
      dispatch(registerUserSuccessAction(data === 201));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorUserAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const updateUser = (id, user) => (dispatch) => {
  dispatch(loadingUserAction());
  return updateUserService(id, user).then(
    (data) => {
      dispatch(updateUserSuccessAction(data === 200));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorUserAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const deleteUser = (id) => (dispatch) => {
  dispatch(loadingUserAction());
  return deleteService(id).then(
    (data) => {
      dispatch(deleteUserSuccessAction(data.user, data.token, data.isLoggedIn));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorUserAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const changeFavoriteSelected = (favorites) => (dispatch) => {
  dispatch(loadingUserAction());
  try {
    dispatch(favoriteChangeSuccess(favorites));
    return Promise.resolve();
  } catch (error) {
    dispatch(errorUserAction(error.message));
    return Promise.reject(error.message);
  }
};

export const updateFavorites = (userId, activity, direction) => (dispatch) => {
  dispatch(loadingUserAction());
  return updateFavorisService(userId, activity, direction).then(
    (data) => {
      let user = JSON.parse(localStorage.getItem("user"));
      user.favoris = data.data;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(favorisSuccess(data.data));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorUserAction(error.message));
      return Promise.reject(error.message);
    }
  );
};
