import { Reducer } from "redux";
import { EpisodeActions } from "../types/episodeActions";
import { EpisodeActionTypes } from "../actionTypes/episodeActionTypes";
import { EpisodeStateSchema } from "../types/episodeTypes";

const initialState: EpisodeStateSchema = {
  episodes: [],
  singleEpisode: null,
  error: "",
  pagination: {
    currentPage: 1,
    next: null,
    prev: null,
    count: 0,
    pages: 0,
  },
  isLoading: false,
};

export const episodeReducer: Reducer<EpisodeStateSchema, EpisodeActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case EpisodeActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case EpisodeActionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }
    case EpisodeActionTypes.SET_EPISODES: {
      return { ...state, episodes: action.payload };
    }
    case EpisodeActionTypes.SET_SINGLE_EPISODE: {
      return { ...state, singleEpisode: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
