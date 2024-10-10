import { CharacterStateSchema } from "@/enteties/character/model/types/characterTypes";
import { EpisodeStateSchema } from "@/enteties/episode/model/types/episodeTypes";
import { LocationStateSchema } from "@/enteties/location/model/types/locationTypes";

export interface StateSchema {
  character: CharacterStateSchema;
  episode: EpisodeStateSchema;
  location: LocationStateSchema;
}
