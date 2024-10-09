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
  payload: EpisodeStateSchema["meta"]["searchQuery"];
};

export type EpisodeSetEpisodePageType = {
  type: EpisodeActionTypes.SET_EPISODE_PAGE;
  payload: EpisodeStateSchema["meta"]["currentPage"];
};
export type EpisodeSetEpisodePageForwardType = {
  type: EpisodeActionTypes.SET_EPISODE_PAGE_FORWARD;
};

export type EpisodeSetEpisodePageBackType = {
  type: EpisodeActionTypes.SET_EPISODE_PAGE_BACK;
};

export type EpisodeActions =
  | EpisodeSetIsLoadingType
  | EpisodeSetErrorType
  | EpisodeSetEpisodesType
  | EpisodeSetSingleEpisodeType
  | EpisodeClearAllEpisodeMeta
  | EpisodeSetEpisodeSearchQuery
  | EpisodeSetEpisodePageType
  | EpisodeSetEpisodePageForwardType
  | EpisodeSetEpisodePageBackType;
