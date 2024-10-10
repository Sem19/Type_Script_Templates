import { ResponseMeta } from "@/shared/libs/types/meta";
import { ICharacter } from "./characterTypes";

export interface GetAllCharacterRequest {
  searchQuery: string;
  currentPage: number;
}

export interface GetAllCharacterResponse {
  info: ResponseMeta;

  results: ICharacter[];
}

export type getSingleCharacterRequest = ICharacter["id"];

export type getSingleCharacterResponse = ICharacter;
