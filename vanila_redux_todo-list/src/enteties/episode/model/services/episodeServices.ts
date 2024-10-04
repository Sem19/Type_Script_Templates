import { rickmortyAPIinstanse } from "@/shared/api/rickmortyAPIinstanse";
import {
  GetAllEpisodeRequest,
  getAllEpisodeResponse,
  getSingleEpisodeRequest,
  getSingleEpisodeResponse,
} from "./../types/episodeServicesTypes";

class episodesServices {
  private episodeEndPoint = "/episode";

  async getAllEpisodes({ searchQuery }: GetAllEpisodeRequest) {
    return rickmortyAPIinstanse.get<getAllEpisodeResponse>(
      `${this.episodeEndPoint}?name=${searchQuery}`
    );
  }

  async getSingleEpisode(id: getSingleEpisodeRequest) {
    return rickmortyAPIinstanse.get<getSingleEpisodeResponse>(
      `${this.episodeEndPoint}/${id}`
    );
  }
}

export const episodesService = new episodesServices();
