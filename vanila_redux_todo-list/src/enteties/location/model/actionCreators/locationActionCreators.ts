import { LocationSetSingleLocationsType } from "./../types/locationActions";
import { LocationActionTypes } from "../actionTypes/locationActionTypes";
import {
  LocationSetErrorType,
  LocationSetIsLoadingType,
  LocationSetLocationsType,
} from "../types/locationActions";

const setIsLoading = (
  payload: LocationSetIsLoadingType["payload"]
): LocationSetIsLoadingType => {
  return {
    type: LocationActionTypes.SET_IS_LOADING,
    payload: payload,
  };
};

const setError = (
  payload: LocationSetErrorType["payload"]
): LocationSetErrorType => {
  return {
    type: LocationActionTypes.SET_ERROR,
    payload: payload,
  };
};

const setLocations = (
  payload: LocationSetLocationsType["payload"]
): LocationSetLocationsType => {
  return {
    type: LocationActionTypes.SET_LOCATIONS,
    payload: payload,
  };
};

const setSingleLocation = (
  payload: LocationSetSingleLocationsType["payload"]
): LocationSetSingleLocationsType => {
  return {
    type: LocationActionTypes.SET_SINGLE_LOCATION,
    payload: payload,
  };
};

export const locationActionCreators = {
  setIsLoading,
  setError,
  setLocations,
  setSingleLocation,
};
