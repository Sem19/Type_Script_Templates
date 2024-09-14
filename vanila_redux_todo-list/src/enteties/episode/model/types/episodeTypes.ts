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
  episodes: IEpisode[];
  singleEpisode: IEpisode | null;
}
