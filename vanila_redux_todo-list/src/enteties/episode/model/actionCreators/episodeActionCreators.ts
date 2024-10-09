import {
  EpisodeSetEpisodePageBackType,
  EpisodeSetEpisodePageForwardType,
  EpisodeSetEpisodePageType,
} from "./../types/episodeActions";
import { EpisodeActionTypes } from "../actionTypes/episodeActionTypes";
import {
  EpisodeClearAllEpisodeMeta,
  EpisodeSetEpisodeSearchQuery,
  EpisodeSetEpisodesType,
  EpisodeSetErrorType,
  EpisodeSetIsLoadingType,
  EpisodeSetSingleEpisodeType,
} from "../types/episodeActions";

const setIsLoading = (
  payload: EpisodeSetIsLoadingType["payload"]
): EpisodeSetIsLoadingType => {
  return {
    type: EpisodeActionTypes.SET_IS_LOADING,
    payload: payload,
  };
};

const setError = (
  payload: EpisodeSetErrorType["payload"]
): EpisodeSetErrorType => {
  return {
    type: EpisodeActionTypes.SET_ERROR,
    payload: payload,
  };
};

const setEpisode = (
  payload: EpisodeSetEpisodesType["payload"]
): EpisodeSetEpisodesType => {
  return {
    type: EpisodeActionTypes.SET_EPISODES,
    payload: payload,
  };
};

const setSingleEpisode = (
  payload: EpisodeSetSingleEpisodeType["payload"]
): EpisodeSetSingleEpisodeType => {
  return {
    type: EpisodeActionTypes.SET_SINGLE_EPISODE,
    payload: payload,
  };
};

const clearAllEpisodeMeta = (): EpisodeClearAllEpisodeMeta => {
  return {
    type: EpisodeActionTypes.CLEAR_ALL_EPISODE_META,
  };
};

const setEpisodeSearchQuery = (
  payload: EpisodeSetEpisodeSearchQuery["payload"]
): EpisodeSetEpisodeSearchQuery => {
  return {
    type: EpisodeActionTypes.SET_EPISODE_SEARCH_QUERY,
    payload: payload,
  };
};

const setEpisodeCurentPage = (
  payload: EpisodeSetEpisodePageType["payload"]
): EpisodeSetEpisodePageType => {
  return {
    type: EpisodeActionTypes.SET_EPISODE_PAGE,
    payload: payload,
  };
};

const setEpisodeForwardPage = (): EpisodeSetEpisodePageForwardType => {
  return {
    type: EpisodeActionTypes.SET_EPISODE_PAGE_FORWARD,
  };
};

const setEpisodeBackPage = (): EpisodeSetEpisodePageBackType => {
  return {
    type: EpisodeActionTypes.SET_EPISODE_PAGE_BACK,
  };
};

export const episodeActionCreators = {
  setIsLoading,
  setError,
  setEpisode,
  setSingleEpisode,
  clearAllEpisodeMeta,
  setEpisodeSearchQuery,
  setEpisodeCurentPage,
  setEpisodeForwardPage,
  setEpisodeBackPage,
};
