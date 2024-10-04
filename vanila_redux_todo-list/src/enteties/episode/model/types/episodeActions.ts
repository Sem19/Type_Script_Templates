import { EpisodeActionTypes } from "./../actionTypes/episodeActionTypes";
import { EpisodeStateSchema } from "./episodeTypes";

export type EpisodeSetIsLoadingType = {
  type: EpisodeActionTypes.SET_IS_LOADING;
  payload: EpisodeStateSchema["isLoading"];
};

export type EpisodeSetErrorType = {
  type: EpisodeActionTypes.SET_ERROR;
  payload: EpisodeStateSchema["error"];
};

export type EpisodeSetEpisodesType = {
  type: EpisodeActionTypes.SET_EPISODES;
  payload: EpisodeStateSchema["episodes"];
};

export type EpisodeSetSingleEpisodeType = {
  type: EpisodeActionTypes.SET_SINGLE_EPISODE;
  payload: EpisodeStateSchema["singleEpisode"];
};

export type EpisodeClearAllEpisodeMeta = {
  type: EpisodeActionTypes.CLEAR_ALL_EPISODE_META;
};
export type EpisodeSetEpisodeSearchQuery = {
  type: EpisodeActionTypes.SET_EPISODE_SEARCH_QUERY;
  payload: EpisodeStateSchema["meta"];
};

export type EpisodeActions =
  | EpisodeSetIsLoadingType
  | EpisodeSetErrorType
  | EpisodeSetEpisodesType
  | EpisodeSetSingleEpisodeType
  | EpisodeClearAllEpisodeMeta
  | EpisodeSetEpisodeSearchQuery;
