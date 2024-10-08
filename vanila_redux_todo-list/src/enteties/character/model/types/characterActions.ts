import { ResponseMeta } from "@/shared/libs/types/meta";
import { CharacterActionTypes } from "../actionTypes/characterActionTypes";
import { CharacterStateSchema } from "./characterTypes";

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

export type CharacterSetCharacterPageType = {
  type: CharacterActionTypes.SET_CHARACTER_PAGE;
  payload: CharacterStateSchema["meta"]["currentPage"];
};

export type CharacterSetCharacterPageForwardType = {
  type: CharacterActionTypes.SET_CHARACTER_PAGE_FORWARD;
};

export type CharacterSetCharacterPageBackType = {
  type: CharacterActionTypes.SET_CHARACTER_PAGE_BACK;
};

export type CharacterSetCharacterInfoType = {
  type: CharacterActionTypes.SET_CHARACTER_INFO;
  payload: ResponseMeta;
};

export type CharacterActions =
  | CharacterSetCharactersType
  | CharacterSetErrorType
  | CharacterSetIsLoadingType
  | CharacterSetSingleCharacterType
  | CharacterClearAllCharacterMetaType
  | CharacterSetCharacterSearchQuery
  | CharacterSetCharacterPageType
  | CharacterSetCharacterPageBackType
  | CharacterSetCharacterPageForwardType
  | CharacterSetCharacterInfoType;
