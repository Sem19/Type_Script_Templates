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
  type: LocationActionTypes.SET_LOCATION_SEARCH_QUERY;
  payload: LocationStateSchema["meta"]["searchQuery"];
};

export type LocationSetLocationPageType = {
  type: LocationActionTypes.SET_LOCATION_PAGE;
  payload: LocationStateSchema["meta"]["currentPage"];
};

export type LocationSetLocationPageForwardType = {
  type: LocationActionTypes.SET_LOCATION_PAGE_FORWARD;
};

export type LocationSetLocationPageBackType = {
  type: LocationActionTypes.SET_LOCATION_PAGE_BACK;
};

export type LocationActions =
  | LocationSetIsLoadingType
  | LocationSetErrorType
  | LocationSetLocationsType
  | LocationSetSingleLocationsType
  | LocationClearAllLocationMetaType
  | LocationSetLocationSearchQuery
  | LocationSetLocationPageType
  | LocationSetLocationPageForwardType
  | LocationSetLocationPageBackType;
