import {
  LocationSetLocationPageForwardType,
  LocationSetLocationPageBackType,
} from "./../types/locationActions";
import { LocationActionTypes } from "../actionTypes/locationActionTypes";
import {
  LocationClearAllLocationMetaType,
  LocationSetLocationSearchQuery,
  LocationSetSingleLocationsType,
  LocationSetErrorType,
  LocationSetIsLoadingType,
  LocationSetLocationsType,
  LocationSetLocationPageType,
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

const clearAllLocationMeta = (): LocationClearAllLocationMetaType => {
  return {
    type: LocationActionTypes.CLEAR_ALL_LOCATION_META,
  };
};

const setLocationSearchQuery = (
  payload: LocationSetLocationSearchQuery["payload"]
): LocationSetLocationSearchQuery => {
  return {
    type: LocationActionTypes.SET_LOCATION_SEARCH_QUERY,
    payload: payload,
  };
};

const setLocationPage = (
  payload: LocationSetLocationPageType["payload"]
): LocationSetLocationPageType => {
  return {
    type: LocationActionTypes.SET_LOCATION_PAGE,
    payload: payload,
  };
};

const setLocationPageForward = (): LocationSetLocationPageForwardType => {
  return {
    type: LocationActionTypes.SET_LOCATION_PAGE_FORWARD,
  };
};
const setLocationPageBack = (): LocationSetLocationPageBackType => {
  return {
    type: LocationActionTypes.SET_LOCATION_PAGE_BACK,
  };
};

export const locationActionCreators = {
  setIsLoading,
  setError,
  setLocations,
  setSingleLocation,
  clearAllLocationMeta,
  setLocationSearchQuery,
  setLocationPage,
  setLocationPageForward,
  setLocationPageBack,
};
