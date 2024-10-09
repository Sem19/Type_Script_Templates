import { Reducer } from "redux";
import { LocationActionTypes } from "../actionTypes/locationActionTypes";
import { LocationActions } from "../types/locationActions";
import { LocationStateSchema } from "../types/locationTypes";

const initialState: LocationStateSchema = {
  locations: [],
  singleLocation: null,
  error: "",
  isLoading: false,
  meta: {
    searchQuery: "",
    currentPage: 1,
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  },
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
    case LocationActionTypes.CLEAR_ALL_LOCATION_META: {
      return { ...state, meta: initialState.meta };
    }
    case LocationActionTypes.SET_LOCATION_SEARCH_QUERY: {
      return { ...state, meta: { ...state.meta, searchQuery: action.payload } };
    }
    case LocationActionTypes.SET_LOCATION_PAGE: {
      return { ...state, meta: { ...state.meta, currentPage: action.payload } };
    }
    case LocationActionTypes.SET_LOCATION_PAGE_FORWARD: {
      return {
        ...state,
        meta: {
          ...state.meta,
          currentPage:
            state.meta.currentPage !== state.meta.pages
              ? state.meta.currentPage + 1
              : state.meta.currentPage,
        },
      };
    }
    case LocationActionTypes.SET_LOCATION_PAGE_BACK: {
      return {
        ...state,
        meta: {
          ...state.meta,
          currentPage:
            state.meta.currentPage !== 1
              ? state.meta.currentPage - 1
              : state.meta.currentPage,
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};
