import { Reducer } from "redux";
import { CharacterActions } from "../types/characterActions";
import { CharacterActionTypes } from "../actionTypes/characterActionTypes";

const initialState: CharacterStateSchema = {
  characters: [],
  singleCharacter: null,
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

export const characterReducer: Reducer<
  CharacterStateSchema,
  CharacterActions
> = (state = initialState, action) => {
  switch (action.type) {
    case CharacterActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case CharacterActionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    case CharacterActionTypes.SET_CHARACTERS: {
      return { ...state, characters: action.payload };
    }

    case CharacterActionTypes.SET_SINGLE_CHARACTER: {
      return { ...state, singleCharacter: action.payload };
    }

    case CharacterActionTypes.CLEAR_ALL_CHARACTER_META: {
      return { ...state, meta: initialState.meta };
    }

    case CharacterActionTypes.SET_CHARACTER_SEARCH_QUERY: {
      return { ...state, meta: { ...state.meta, searchQuery: action.payload } };
    }

    case CharacterActionTypes.SET_CHARACTER_PAGE: {
      return { ...state, meta: { ...state.meta, currentPage: action.payload } };
    }

    case CharacterActionTypes.SET_CHARACTER_PAGE_FORWARD: {
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

    case CharacterActionTypes.SET_CHARACTER_PAGE_BACK: {
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
