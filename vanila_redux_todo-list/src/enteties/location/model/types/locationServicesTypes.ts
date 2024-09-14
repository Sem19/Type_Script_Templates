import { ILocation } from "./locationTypes";

export type GetAllLocationRequest = void;

export interface GetAllLocationResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };

  results: ILocation[];
}
