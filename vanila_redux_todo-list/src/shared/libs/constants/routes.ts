import { routeConfig } from "@/app/config/route";

export const getHomeRoute = () => routeConfig.home;

export const getTestRoute = () => routeConfig.test;

export const getSingleCharacterRoute = (id: number | string) =>
  routeConfig.singleCharacter.replace(":id", id.toString());

export const getNotFoundRoute = () => routeConfig.notFound;
