import axios from "axios";
import JwtDecode from "jwt-decode";
import { API_URL } from "../utils/constants";
import authHeader from "./authHeaderService";

export const loginService = async (email, password) => {
  let user = {};
  let token = "";
  await axios
    .post(API_URL + "/users/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.authorization);
        const jwtData = JwtDecode(response.data.authorization);
        localStorage.setItem("user", JSON.stringify(jwtData["user"]));
        user = JwtDecode(response.data.authorization)["user"];
        token = response.data.authorization;
      }
      if (response.status === 500 && response.data === "User does not exist") {
        throw new Error("L'utilisateur n'existe pas");
      }
    });
  return {
    user,
    token,
  };
};

export const logoutService = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return {
    user: null,
    token: "",
    isLoggedIn: false,
  };
};

export const registerService = async (user) => {
  return axios.post(API_URL + "/users", { user })
    .then((response) => {
      return response.status;
    });
};

export const deleteService = async (id) => {
  return axios
    .delete(API_URL + "/users/" + id, {
      headers: authHeader()
    })
    .then((response) => {
      if (response.status === 500 && response.data === "User does not exist") {
        throw new Error("L'utilisateur n'existe pas");
      }
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        user: null,
        token: "",
        isLoggedIn: false,
      };
    });
};

export const updateUserService = async (id, user) => {
  let token = "";
  return axios
    .put(API_URL + "/users/" + id, { query: user }, { headers: authHeader() })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.authorization);
        const jwtData = JwtDecode(response.data.authorization);
        localStorage.setItem("user", JSON.stringify(jwtData["user"]));
        user = JwtDecode(response.data.authorization)["user"];
        token = response.data.authorization;
      }
      return {
        user,
        token,
      };
    });
};


export const facebookAuthService = async (email, name, facebookId) => {
  await axios
    .post(API_URL + "/users/facebook", {
      email,
      name,
      facebookId,
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.authorization);
        const jwtData = JwtDecode(response.data.authorization);
        localStorage.setItem("user", JSON.stringify(jwtData["user"]));
        return {
          user: JwtDecode(response.data.authorization)["user"],
          token: response.data.authorization,
        };
      }
    });
};

export const googleAuthService = async (email, name, googleId) => {
  let user = {};
  let token = "";
  await axios
    .post(API_URL + "/users/google", {
      email,
      name,
      googleId,
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.authorization);
        const jwtData = JwtDecode(response.data.authorization);
        localStorage.setItem("user", JSON.stringify(jwtData["user"]));
        user = JwtDecode(response.data.authorization)["user"];
        token = response.data.authorization;
      }
    });
  return {
    user,
    token,
  };
};

export const updateFavorisService = async (userId, activity, direction) => {
  return await axios
    .put(API_URL + "/users/" + userId + "/favorites",
      { activity, direction },
      { headers: authHeader() }
    );

};


