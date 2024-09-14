export type GetAllCharacterRequest = void;

export interface GetAllCharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };

  results: ICharacter[];
}

export type getSingleCharacterRequest = ICharacter["id"];

export type getSingleCharacterResponse = ICharacter;
