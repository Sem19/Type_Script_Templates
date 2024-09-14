import {
  GetAllEpisodeRequest,
  getAllEpisodeResponse,
} from "./../types/episodeServicesTypes";
import { rickmortyAPIinstanse } from "@/shared/api/rickmortyAPIinstanse";

class episodesServices {
  private episodeEndPoint = "/episode";

  async getAllEpisodes(params: GetAllEpisodeRequest) {
    return rickmortyAPIinstanse.get<getAllEpisodeResponse>(
      this.episodeEndPoint
    );
  }
}

export const episodesService = new episodesServices();
