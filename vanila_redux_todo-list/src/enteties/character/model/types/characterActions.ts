import { CharacterActionTypes } from "../actionTypes/characterActionTypes";

export type CharacterSetIsLoadingType = {
  type: CharacterActionTypes.SET_IS_LOADING;
  payload: CharacterStateSchema["isLoading"];
};

export type CharacterSetErrorType = {
  type: CharacterActionTypes.SET_ERROR;
  payload: CharacterStateSchema["error"];
};

export type CharacterSetCharactersType = {
  type: CharacterActionTypes.SET_CHARACTERS;
  payload: CharacterStateSchema["characters"];
};

export type CharacterSetSingleCharacterType = {
  type: CharacterActionTypes.SET_SINGLE_CHARACTER;
  payload: CharacterStateSchema["singleCharacter"];
};

export type CharacterClearAllCharacterMetaType = {
  type: CharacterActionTypes.CLEAR_ALL_CHARACTER_META;
};
export type CharacterSetCharacterSearchQuery = {
  type: CharacterActionTypes.SET_CHARACTER_SEARCH_QUERY;
  payload: CharacterStateSchema["meta"]["searchQuery"];
};

export type CharacterActions =
  | CharacterSetCharactersType
  | CharacterSetErrorType
  | CharacterSetIsLoadingType
  | CharacterSetSingleCharacterType
  | CharacterClearAllCharacterMetaType
  | CharacterSetCharacterSearchQuery;
