import {
  ADD_CODE,
  ADD_CONFIRM,
  ADD_PHONENUMBER,
  ADD_ORIGIN_LOCATION,
  ADD_ORIGIN_DESCRIPTION,
  ADD_DESTINATION_LOCATION,
  ADD_DESTINATION_DESCRIPTION,
  ADD_CURRENT_LOCATION
} from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CODE:
      return { ...state, code: action.code };
    case ADD_CONFIRM:
      console.log(action.confirm);
      return { ...state, confirm: action.confirm };
    case ADD_PHONENUMBER:
      // console.log(typeof action.phoneNumber)
      return { ...state, phoneNumber: action.phoneNumber };
    case ADD_ORIGIN_LOCATION:
      return { ...state, originLocation: action.location };
    case ADD_ORIGIN_DESCRIPTION:
      return { ...state, originDescription: action.description };
      case ADD_DESTINATION_LOCATION:
      return { ...state, destinationLocation: action.location };
    case ADD_DESTINATION_DESCRIPTION:
      return { ...state, destinationDescription: action.description };
      case ADD_CURRENT_LOCATION:
        return { ...state, currentLocation: action.location };
     
      default:
      return state;
  }
};
