import { rickmortyAPIinstanse } from "@/shared/api/rickmortyAPIinstanse";
import {
  GetAllCharacterRequest,
  GetAllCharacterResponse,
  getSingleCharacterRequest,
  getSingleCharacterResponse,
} from "../types/characterServicesTypes";

class characterServices {
  private characterEndPoint = "/character";

  async getAllCharacters({ searchQuery }: GetAllCharacterRequest) {
    return rickmortyAPIinstanse.get<GetAllCharacterResponse>(
      `${this.characterEndPoint}?name=${searchQuery}`
    );
  }

  async getSingleCharacter(id: getSingleCharacterRequest) {
    return rickmortyAPIinstanse.get<getSingleCharacterResponse>(
      `${this.characterEndPoint}/${id}`
    );
  }
}

export const characterService = new characterServices();
