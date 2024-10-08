import { StateSchema } from "@/app/config/store/stateSchema";

export const getEpisodeState = (state: StateSchema) => state.episode;

export const getEpisodeMetaState = (state: StateSchema) => state.episode.meta;

export const getEpisodeSearchQueryState = (state: StateSchema) =>
  state.episode.meta.searchQuery;
