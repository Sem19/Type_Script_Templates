interface ICharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharacterStateSchema {
  isLoading: boolean;
  error: string;
  characters: ICharacter[];
  singleCharacter: ICharacter | null;
  meta: {
    searchQuery: string;
  };
}
