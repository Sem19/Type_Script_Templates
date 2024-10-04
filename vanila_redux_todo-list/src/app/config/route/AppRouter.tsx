// react
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
//layouts
import { RootLayout } from "@/app/layouts/root/RootLayout";
// routes
import {
  getHomeRoute,
  getSingleCharacterRoute,
  getNotFoundRoute,
  getEpisodeRoute,
  getLocationRoute,
  getCharacterRoute,
} from "@/shared/libs/constants/routes";
// pages
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/notFound";
import { SingleCharacterPage } from "@/pages/singleCharacter/ui/SingleCharacterPage/SingleCharacterPage";
import { EpisodePage } from "@/pages/episode/ui";
import { LocationPage } from "@/pages/location/ui/LocationPage/LocationPage";
import { CharacterPage } from "@/pages/character/ui";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = ({}) => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<HomePage />} path={getHomeRoute()} />
        <Route element={<EpisodePage />} path={getEpisodeRoute()} />
        <Route element={<CharacterPage />} path={getCharacterRoute()} />
        <Route element={<LocationPage />} path={getLocationRoute()} />
        <Route element={<NotFoundPage />} path={getNotFoundRoute()} />
        <Route
          element={<SingleCharacterPage />}
          path={getSingleCharacterRoute(":id")}
        />
      </Route>
    </Routes>
  );
};
