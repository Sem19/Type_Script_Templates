import { rickmortyAPIinstanse } from "@/shared/api/rickmortyAPIinstanse";
import {
  GetAllCharacterRequest,
  GetAllCharacterResponse,
  getSingleCharacterRequest,
  getSingleCharacterResponse,
} from "../types/characterServicesTypes";

class characterServices {
  private characterEndPoint = "/character";

  async getAllCharacters(params: GetAllCharacterRequest) {
    return rickmortyAPIinstanse.get<GetAllCharacterResponse>(
      this.characterEndPoint
    );
  }

  async getSingleCharacter(params: getSingleCharacterRequest) {
    return rickmortyAPIinstanse.get<getSingleCharacterResponse>(
      `${this.characterEndPoint}/${params}`
    );
  }
}

export const characterService = new characterServices();
