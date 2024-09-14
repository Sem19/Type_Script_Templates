import { IEpisode } from "./episodeTypes";

export type GetAllEpisodeRequest = void;

export interface getAllEpisodeResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };

  results: IEpisode[];
}
