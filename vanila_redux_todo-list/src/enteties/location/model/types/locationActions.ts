import { LocationActionTypes } from "../actionTypes/locationActionTypes";
import { LocationStateSchema } from "./locationTypes";

export type LocationSetIsLoadingType = {
  type: LocationActionTypes.SET_IS_LOADING;
  payload: LocationStateSchema["isLoading"];
};

export type LocationSetErrorType = {
  type: LocationActionTypes.SET_ERROR;
  payload: LocationStateSchema["error"];
};

export type LocationSetLocationsType = {
  type: LocationActionTypes.SET_LOCATIONS;
  payload: LocationStateSchema["locations"];
};

export type LocationSetSingleLocationsType = {
  type: LocationActionTypes.SET_SINGLE_LOCATION;
  payload: LocationStateSchema["singleLocation"];
};

export type LocationClearAllLocationMetaType = {
  type: LocationActionTypes.CLEAR_ALL_LOCATION_META;
};

export type LocationSetLocationSearchQuery = {
  type: LocationActionTypes.SET_LOCATIO_SEARCH_QUERY;
  payload: LocationStateSchema["meta"]["searchQuery"];
};

export type LocationActions =
  | LocationSetIsLoadingType
  | LocationSetErrorType
  | LocationSetLocationsType
  | LocationSetSingleLocationsType
  | LocationClearAllLocationMetaType
  | LocationSetLocationSearchQuery;
