export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationStateSchema {
  isLoading: boolean;
  error: string;
  locations: ILocation[];
  singleLocation: ILocation | null;
  meta: {
    searchQuery: string;
  };
}
