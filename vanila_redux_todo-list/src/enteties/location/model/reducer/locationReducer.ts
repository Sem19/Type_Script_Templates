import { Reducer } from "redux";
import { LocationActionTypes } from "../actionTypes/locationActionTypes";
import { LocationActions } from "../types/locationActions";
import { LocationStateSchema } from "../types/locationTypes";

const initialState: LocationStateSchema = {
  locations: [],
  singleLocation: null,
  error: "",
  isLoading: false,
};

export const locationReducer: Reducer<LocationStateSchema, LocationActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LocationActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case LocationActionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }
    case LocationActionTypes.SET_LOCATIONS: {
      return { ...state, locations: action.payload };
    }
    case LocationActionTypes.SET_SINGLE_LOCATION: {
      return { ...state, singleLocation: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
