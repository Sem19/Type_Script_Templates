import { EpisodeActionTypes } from "../actionTypes/episodeActionTypes";
import {
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

export const episodeActionCreators = {
  setIsLoading,
  setError,
  setEpisode,
  setSingleEpisode,
};
