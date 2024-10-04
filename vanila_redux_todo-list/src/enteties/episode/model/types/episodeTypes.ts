import { PaginationInfo } from "@/shared/libs/types/meta";

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodeStateSchema {
  isLoading: boolean;
  error: string;
  pagination: PaginationInfo;
  episodes: IEpisode[];
  singleEpisode: IEpisode | null;
  meta: {
    searchQuery: string;
  };
}
