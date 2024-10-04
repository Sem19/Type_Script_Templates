import { StateSchema } from "@/app/config/store/stateSchema";

export const getCharacterState = (state: StateSchema) => state.character;

export const getCharacterMetaState = (state: StateSchema) =>
  state.character.meta;

export const getCharacterSearchQueryState = (state: StateSchema) =>
  state.character.meta.searchQuery;
