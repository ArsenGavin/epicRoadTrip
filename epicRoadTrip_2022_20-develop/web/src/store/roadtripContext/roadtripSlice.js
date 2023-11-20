import {
  addEscaleSuccessAction,
  addRoadtripActivitySuccessAction,
  createRoadtripSuccessAction,
  errorRoadtripAction,
  getDrinkSuccessAction,
  getEatSuccessAction,
  getEnjoySuccessAction,
  getResearchSuccessAction,
  getRoadtripSuccessAction,
  getSleepSuccessAction,
  getTravelSuccessAction,
  loadingRoadtripAction,
  updateCurrentStepSuccessAction,
  updateDepartureArrivalSuccessAction,
  updateDetailsDialogSuccessAction,
  updateFilterAction,
  updateFilterDialogSuccessAction,
  updateRoadtripNameSuccessAction,
  updateStepSuccessAction
} from "./roadtripAction";
import {
  createRoadtripService,
  drinkService,
  eatService,
  enjoyService,
  getRoadtripService,
  sleepService,
  travelService
} from "../../services/roadtripService";

export const updateDepartureArrival = (departure, arrival) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    const history = JSON.parse(localStorage.getItem("research"));
    if (!history) {
      localStorage.setItem("research", JSON.stringify([departure]));
    }
    if (history && history.filter(h => h.name === departure.name).length === 0) {
      localStorage.setItem("research", JSON.stringify([...history, departure]));
    }
    dispatch(updateDepartureArrivalSuccessAction(departure, arrival));
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};

export const updateStep = (steps) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    dispatch(updateStepSuccessAction(steps));
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};

export const getEat = (latitude, longitude, rating, distance) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  return eatService(latitude, longitude, rating, distance).then(
    (data) => {
      dispatch(getEatSuccessAction(data.data.eat));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorRoadtripAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const getSleep = (latitude, longitude, date) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  return sleepService(latitude, longitude, date).then(
    (data) => {
      dispatch(getSleepSuccessAction(data.data.sleep));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorRoadtripAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const getTravel = (name) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  return travelService(name).then(
    (data) => {
      dispatch(getTravelSuccessAction(data.data.travel));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorRoadtripAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const getEnjoy = (latitude, longitude, distance) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  return enjoyService(latitude, longitude, distance).then(
    (data) => {
      dispatch(getEnjoySuccessAction(data.data.enjoy));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorRoadtripAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const getDrink = (latitude, longitude) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  return drinkService(latitude, longitude).then(
    (data) => {
      dispatch(getDrinkSuccessAction(data.data.drink));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorRoadtripAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const updateDetailsDialog = () => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    dispatch(updateDetailsDialogSuccessAction());
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};

export const updateFilterDialog = () => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    dispatch(updateFilterDialogSuccessAction());
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};

export const updateCurrentStep = (step) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    dispatch(updateCurrentStepSuccessAction(step));
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};

export const getResearch = () => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    const research = JSON.parse(localStorage.getItem("research"));
    if (!research) {
      dispatch(getResearchSuccessAction([]));
      return Promise.resolve();
    } else {
      dispatch(getResearchSuccessAction(research));
      return Promise.resolve();
    }
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};


export const addEscale = (steps) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    dispatch(addEscaleSuccessAction(steps));
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};

export const updateRoadtripName = (name) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    dispatch(updateRoadtripNameSuccessAction(name));
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};

export const addRoadtripActivity = (step) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    dispatch(addRoadtripActivitySuccessAction(step));
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};

export const createRoadtrip = (roadtrip) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  return createRoadtripService(roadtrip).then(
    (data) => {
      dispatch(createRoadtripSuccessAction(data.status === 201));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorRoadtripAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const getRoadtrips = (userId) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  return getRoadtripService(userId).then(
    (data) => {
      dispatch(getRoadtripSuccessAction(data.data));
      return Promise.resolve();
    },
    (error) => {
      dispatch(errorRoadtripAction(error.message));
      return Promise.reject(error.message);
    }
  );
};

export const updateFilter = (distance, budget, rating, date) => (dispatch) => {
  dispatch(loadingRoadtripAction());
  try {
    dispatch(updateFilterAction(distance, budget, rating, date));
    return Promise.resolve();
  } catch (error) {
    dispatch(errorRoadtripAction(error.message));
    return Promise.reject(error.message);
  }
};