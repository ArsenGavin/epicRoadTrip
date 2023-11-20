import {
  ADD_ESCALE_SUCCESS,
  ADD_ROADTRIP_ACTIVITY_SUCCESS,
  CREATE_ROADTRIP_SUCCESS,
  ERROR_ROADTRIP,
  GET_DRINK_SUCCESS,
  GET_EAT_SUCCESS,
  GET_ENJOY_SUCCESS,
  GET_RESEARCH_SUCCESS,
  GET_ROADTRIP_SUCCESS,
  GET_SLEEP_SUCCESS,
  GET_TRAVEL_SUCCESS,
  LOADING_ROADTRIP,
  UPDATE_CURRENT_STEP_SUCCESS,
  UPDATE_DEPARTURE_ARRIVAL_SUCCESS,
  UPDATE_DETAILS_DIALOG_SUCCESS,
  UPDATE_FILTER_SUCCESS,
  UPDATE_FILTER_DIALOG_SUCCESS,
  UPDATE_ROADTRIP_NAME_SUCCESS,
  UPDATE_STEP_SUCCESS
} from "../actions";

export const loadingRoadtripAction = () => ({
  type: LOADING_ROADTRIP
});

export const errorRoadtripAction = (message) => ({
  type: ERROR_ROADTRIP,
  payload: { message }
});

export const updateDepartureArrivalSuccessAction = (departure, arrival) => ({
  type: UPDATE_DEPARTURE_ARRIVAL_SUCCESS,
  payload: { departure, arrival }
});

export const updateStepSuccessAction = (steps) => ({
  type: UPDATE_STEP_SUCCESS,
  payload: { steps }
});

export const getDrinkSuccessAction = (drinks) => ({
  type: GET_DRINK_SUCCESS,
  payload: { drinks }
});

export const getSleepSuccessAction = (sleeps) => ({
  type: GET_SLEEP_SUCCESS,
  payload: { sleeps }
});

export const getEatSuccessAction = (eats) => ({
  type: GET_EAT_SUCCESS,
  payload: { eats }
});

export const getTravelSuccessAction = (travels) => ({
  type: GET_TRAVEL_SUCCESS,
  payload: { travels }
});

export const getEnjoySuccessAction = (enjoys) => ({
  type: GET_ENJOY_SUCCESS,
  payload: { enjoys }
});

export const updateDetailsDialogSuccessAction = (activity) => ({
  type: UPDATE_DETAILS_DIALOG_SUCCESS,
  payload: { activity }
});

export const updateFilterDialogSuccessAction = () => ({
  type: UPDATE_FILTER_DIALOG_SUCCESS
});

export const updateCurrentStepSuccessAction = (currentStep) => ({
  type: UPDATE_CURRENT_STEP_SUCCESS,
  payload: { currentStep }
});

export const getResearchSuccessAction = (research) => ({
  type: GET_RESEARCH_SUCCESS,
  payload: { research }
});

export const addEscaleSuccessAction = (steps) => ({
  type: ADD_ESCALE_SUCCESS,
  payload: { steps }
});

export const updateRoadtripNameSuccessAction = (name) => ({
  type: UPDATE_ROADTRIP_NAME_SUCCESS,
  payload: { name }
});

export const addRoadtripActivitySuccessAction = (step) => ({
  type: ADD_ROADTRIP_ACTIVITY_SUCCESS,
  payload: { step }
});

export const createRoadtripSuccessAction = (isCreated) => ({
  type: CREATE_ROADTRIP_SUCCESS,
  payload: { isCreated }
});

export const getRoadtripSuccessAction = (roadtrips) => ({
  type: GET_ROADTRIP_SUCCESS,
  payload: { roadtrips }
});

export const updateFilterAction = (distance, budget, rating, date) => ({
  type: UPDATE_FILTER_SUCCESS,
  payload: { distance, budget, rating, date }
});