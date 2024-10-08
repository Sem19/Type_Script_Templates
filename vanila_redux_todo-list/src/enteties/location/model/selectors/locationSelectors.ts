import { StateSchema } from "@/app/config/store/stateSchema";

export const getLocationState = (state: StateSchema) => state.location;

export const getLocationMetaState = (state: StateSchema) => state.location.meta;

export const getLocationSearchQueryState = (state: StateSchema) =>
  state.location.meta.searchQuery;
