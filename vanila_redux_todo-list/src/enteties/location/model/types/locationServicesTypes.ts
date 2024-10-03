import { ILocation } from "./locationTypes";

export interface GetAllLocationRequest {
  searchQuery: string;
}

export interface GetAllLocationResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };

  results: ILocation[];
}

export type getSingleLocationRequest = ILocation["id"];
export type getSingleLocationResponse = ILocation;
