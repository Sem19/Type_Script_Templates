import { routeConfig } from "@/app/config/route";

export const getHomeRoute = () => routeConfig.home;

export const getEpisodeRoute = () => routeConfig.episode;

export const getSingleEpisodeRoute = (id: number | string) =>
  routeConfig.singleEpisode.replace(":id", id.toString());

export const getLocationRoute = () => routeConfig.location;

export const getSingleLocationRoute = (id: number | string) =>
  routeConfig.singleLocation.replace(":id", id.toString());

export const getCharacterRoute = () => routeConfig.character;

export const getSingleCharacterRoute = (id: number | string) =>
  routeConfig.singleCharacter.replace(":id", id.toString());

export const getNotFoundRoute = () => routeConfig.notFound;
