import { ResponseMeta } from "@/shared/libs/types/meta";
import { IEpisode } from "./episodeTypes";

export interface GetAllEpisodeRequest {
  searchQuery: string;
}

export interface getAllEpisodeResponse {
  info: ResponseMeta;
  results: IEpisode[];
}

export type getSingleEpisodeRequest = IEpisode["id"];

export type getSingleEpisodeResponse = IEpisode;
