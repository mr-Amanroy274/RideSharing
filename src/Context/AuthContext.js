import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackEnd from "../API/BackEnd";
import { navigateTo } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "signin":
      return { ...state, errorMessage: "", userInfo: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };

    case "sign_out":
      return { ...state, token: null, errorMessage: "" };

    case "verify_otp":
      return { ...state, errorMessage: "", OTPInfo: action.payload };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () =>
  dispatch({ type: "clear_error_message" });

const signup =
  (dispatch) =>
  async ({
    phoneNumber,
    firstName,
    lastName,
    dateOfBirth,
    currentAddress,
    isRider,
    profile,
  }) => {
    try {
      const response = await BackEnd.post("/createuser/", {
        phoneNumber,
        firstName,
        lastName,
        dateOfBirth,
        currentAddress,
        isRider,
        profile,
      });
      console.log("Axios response:\n");
      console.log(response.data);
      dispatch({ type: "signin", payload: response.data });
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
  async ({ phoneNumber }) => {
    try {
      const response = await BackEnd.post("/signin", { phoneNumber });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
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

const sendOTP =
  (dispatch) =>
  async ({ phoneNumber }) => {
    try {
      const response = await BackEnd.post("/sendotp", { phoneNumber });
      dispatch({ type: "verify_otp", payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Sign In",
      });
    }
  };

const verifyOTP =
  (dispatch) =>
  async ({ phoneNumber, otp }) => {
    try {
      const response = await BackEnd.post("/verifyotp", { phoneNumber, otp });
      dispatch({ type: "verify_otp", payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Sign In",
      });
    }
  };

const sendRiderInfo = (dispatch) => async (riderInfo) => {
  try {
    const response = await BackEnd.post("/riderinfo", riderInfo, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "verify_otp", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "add_error",

      payload: "Something went wrong with Sign In", 
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    clearErrorMessage,
    tryLocalSigin,
    signout,
    sendOTP,
    verifyOTP,
    sendRiderInfo,
  },
  { token: null, errorMessage: "", userInfo: null, OTPInfo: null }
);



