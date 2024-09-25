import { ResponseMeta } from "@/shared/libs/types/meta";
import { IEpisode } from "./episodeTypes";

export type GetAllEpisodeRequest = void;

export interface getAllEpisodeResponse {
  info: ResponseMeta;

  results: IEpisode[];
}
