import axios from "axios";
import { API_URL } from "../utils/constants";
import authHeader from "./authHeaderService";

export const enjoyService = async (latitude, longitude, distance) => {
  return await axios.get(API_URL + `/search/enjoy?latitude=${latitude}&longitude=${longitude}&limit=10&distance=${distance}`);
};

export const eatService = async (latitude, longitude, distance, rating) => {
  return await axios.get(API_URL + `/search/eat?latitude=${latitude}&longitude=${longitude}&limit=10&distance=${distance}&rating=${rating}`);
};

export const drinkService = async (latitude, longitude, distance) => {
  return await axios.get(API_URL + `/search/drink?latitude=${latitude}&longitude=${longitude}&search=bar&radius=${distance}`);
};

export const sleepService = async (latitude, longitude, date) => {
  return await axios.get(API_URL + `/search/sleep?latitude=${latitude}&longitude=${longitude}&checkIn=${date}&limit=10&adults=1&rooms=1&nights=1`);
};

export const travelService = async (name) => {
  return await axios.get(API_URL + `/search/travel?name=${name}`);
};

export const createRoadtripService = async (roadtrip) => {
  return await axios.post(API_URL + "/roadtrips", { roadtrip }, { headers: authHeader() });
};

export const getRoadtripService = async (userId) => {
  return await axios.get(API_URL + `/roadtrips?user=${userId}`, { headers: authHeader() });
};