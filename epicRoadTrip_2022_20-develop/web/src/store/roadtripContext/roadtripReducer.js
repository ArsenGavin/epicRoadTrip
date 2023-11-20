import update from "immutability-helper";
/* eslint-disable no-case-declarations */
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

const initialState = {
  error: "",
  loading: false,
  departure: null,
  arrival: null,
  steps: [],
  sleeps: [],
  eats: [],
  drinks: [],
  enjoys: [],
  travels: [],
  distance: 2,
  budget: 50,
  rating: 3,
  date: new Date(),
  isFilterOpen: false,
  isDetailsOpen: false,
  currentStep: null,
  research: [],
  name: "My road trip",
  isCreated: false,
  myRoadtrips: []
};

export default function roadtripReducer(state = initialState, action) {
  switch (action.type) {
  case LOADING_ROADTRIP:
    return {
      ...state,
      loading: true,
      error: ""
    };

  case ERROR_ROADTRIP:
    return {
      ...state,
      loading: false,
      error: action.payload.message
    };

  case UPDATE_DEPARTURE_ARRIVAL_SUCCESS:
    return {
      ...state,
      error: "",
      loading: false,
      departure: action.payload.departure,
      arrival: action.payload.arrival
    };

  case UPDATE_STEP_SUCCESS:
    return {
      ...state,
      error: "",
      loading: false,
      steps: state.steps.includes(action.payload.steps)
        ? state.steps.filter(step => step !== action.payload.steps)
        : [...state.steps, action.payload.steps]
    };

  case ADD_ESCALE_SUCCESS:
    return {
      ...state,
      error: "",
      loading: false,
      steps: state.steps.includes(action.payload.steps)
        ? state.steps.filter(step => step !== action.payload.steps)
        : update(state.steps, {$splice : [[state.steps.length-1, 0, action.payload.steps]]})
    };

  case GET_DRINK_SUCCESS:
    return {
      ...state,
      loading: false,
      drinks: state.drinks.length === 0
        ? action.payload.drinks
        : [...state.drinks, action.payload.drinks]
    };

  case GET_EAT_SUCCESS:
    return {
      ...state,
      loading: false,
      eats: state.eats.length === 0
        ? action.payload.eats
        : [...state.eats, action.payload.eats]
    };

  case GET_SLEEP_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      sleeps: state.sleeps.length === 0
        ? action.payload.sleeps
        : [...state.sleeps, action.payload.sleeps]
    };

  case GET_TRAVEL_SUCCESS:
    return {
      ...state,
      loading: false,
      travels: state.sleeps.length === 0
        ? action.payload.travels
        : [...state.travels, action.payload.travels]
    };

  case GET_ENJOY_SUCCESS:
    return {
      ...state,
      loading: false,
      enjoys: state.sleeps.length === 0
        ? action.payload.enjoys
        : [...state.enjoys, action.payload.enjoys]
    };

  case UPDATE_DETAILS_DIALOG_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      isDetailsOpen: !state.isDetailsOpen
    };

  case UPDATE_FILTER_DIALOG_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      isFilterOpen: !state.isFilterOpen
    };

  case UPDATE_CURRENT_STEP_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      currentStep: action.payload.currentStep
    };

  case GET_RESEARCH_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      research: action.payload.research
    };

  case UPDATE_ROADTRIP_NAME_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      name: action.payload.name
    };

  case ADD_ROADTRIP_ACTIVITY_SUCCESS:
    // eslint-disable-next-line no-case-declarations
    const index = state.steps.findIndex(s => s.name === action.payload.step.name);
    return {
      ...state,
      loading: false,
      error: "",
      steps: update(state.steps, {$splice : [[index, 1, action.payload.step]]})
    };

  case CREATE_ROADTRIP_SUCCESS:
    return {
      ...state,
      loading: false,
      isCreated: action.payload.isCreated
    };

  case GET_ROADTRIP_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      myRoadtrips: action.payload.roadtrips
    };

  case UPDATE_FILTER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      distance: action.payload.distance,
      budget: action.payload.budget,
      rating: action.payload.rating,
      date: action.payload.date,
    };

  default:
    return {
      ...state,
    };
  }
}
