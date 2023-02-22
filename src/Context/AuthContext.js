import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackEnd from "../API/BackEnd";
import { navigateTo } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "signin":
      return { errorMessage: "", token: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };

    case "sign_out":
      return { token: null, errorMessage: "" };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () =>
  dispatch({ type: "clear_error_message" });

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await BackEnd.post("/signup", { email, password, phone });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      //navigate to mainFLow
      navigateTo("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await BackEnd.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigateTo("TrackList");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Sign In",
      });
    }
  };

const tryLocalSigin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigateTo("TrackList");
  } else {
    navigateTo("loginFlow");
  }
};

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem("token");
    console.log("tokenRemoved");
    dispatch({ type: "sign_out" });
    console.log("SignedOut");
    navigateTo("loginFlow");
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, clearErrorMessage, tryLocalSigin, signout },
  { token: null, errorMessage: "" }
);
