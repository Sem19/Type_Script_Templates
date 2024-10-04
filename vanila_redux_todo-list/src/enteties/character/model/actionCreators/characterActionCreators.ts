import { CharacterSetSingleCharacterType } from "./../types/characterActions";
import { CharacterActionTypes } from "../actionTypes/characterActionTypes";
import {
  CharacterSetCharactersType,
  CharacterSetErrorType,
  CharacterSetIsLoadingType,
  CharacterClearAllCharacterMetaType,
  CharacterSetCharacterSearchQuery,
} from "../types/characterActions";

const setIsLoading = (
  payload: CharacterSetIsLoadingType["payload"]
): CharacterSetIsLoadingType => {
  return {
    type: CharacterActionTypes.SET_IS_LOADING,
    payload: payload,
  };
};

const setError = (
  payload: CharacterSetErrorType["payload"]
): CharacterSetErrorType => {
  return {
    type: CharacterActionTypes.SET_ERROR,
    payload: payload,
  };
};

const setCharacters = (
  payload: CharacterSetCharactersType["payload"]
): CharacterSetCharactersType => {
  return {
    type: CharacterActionTypes.SET_CHARACTERS,
    payload: payload,
  };
};

const setSingleCharacter = (
  payload: CharacterSetSingleCharacterType["payload"]
): CharacterSetSingleCharacterType => {
  return {
    type: CharacterActionTypes.SET_SINGLE_CHARACTER,
    payload: payload,
  };
};

const clearAllCharacterMeta = (): CharacterClearAllCharacterMetaType => {
  return {
    type: CharacterActionTypes.CLEAR_ALL_CHARACTER_META,
  };
};
const setCharacterSearchQuery = (
  payload: CharacterSetCharacterSearchQuery["payload"]
): CharacterSetCharacterSearchQuery => {
  return {
    type: CharacterActionTypes.SET_CHARACTER_SEARCH_QUERY,
    payload: payload,
  };
};

export const characterActionCreators = {
  setIsLoading,
  setError,
  setCharacters,
  setSingleCharacter,
  clearAllCharacterMeta,
  setCharacterSearchQuery,
};
