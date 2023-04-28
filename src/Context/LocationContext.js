import createDataContext from "./createDataContext";
import BackEnd from "../API/BackEnd";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "search_rides":
      return { ...state, availableRides: action.payload };
    case "add_ride":
      return { ...state, recording: true };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const searchRides = (dispatch) => {
  return async ({
    destination,
    origin,
    destinationName,
    destinationPlaceId,
    originName,
    originPlaceId,
    vehicleType,
  }) => {
    try {
      console.log({
        destination,
        origin,
        destinationName,
        destinationPlaceId,
        originName,
        originPlaceId,
        vehicleType,
      });
      const response = await BackEnd.post("/searchRides", {
        destination,
        origin,
        destinationName,
        destinationPlaceId,
        originName,
        originPlaceId,
        vehicleType,
      });
      dispatch({ type: "search_rides", payload: response.data });
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Could not search rides for the given location",
      });
    }
  };
};

const saveRide = (dispatch) => {
  return async ({
    destination,
    origin,
    destinationPlaceId,
    originPlaceId,
    vehicleType,
    destinationName,
    originName,
    date,
    time,
  }) => {
    try {
      console.log({
        destination,
        origin,
        destinationPlaceId,
        originPlaceId,
        vehicleType,
        destinationName,
        originName,
        date,
        time
      });
      const response = await BackEnd.post("/addRide", {
        destination,
        origin,
        destinationPlaceId,
        originPlaceId,
        vehicleType,
        destinationName,
        originName,
        date,
        time,
      });

      console.log(response.data);

      dispatch({ type: "add_ride", payload: response.data });
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Could not add ride",
      });
    }
  };
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { searchRides, saveRide },
  { availableRides: [], recording: false, errorMessage: "" }
);
