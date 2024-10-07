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
  getSingleEpisodeRoute,
  getSingleLocationRoute,
} from "@/shared/libs/constants/routes";
// pages
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/notFound";
import { EpisodePage } from "@/pages/episode/ui";
import { SingleEpisodePage } from "@/pages/singleEpisode/ui/SingleEpisodePage/SingleEpisodePage";
import { LocationPage } from "@/pages/location/ui/LocationPage/LocationPage";
import { SingleLocationPage } from "@/pages/singleLocation/ui/SingleLocationPage/SingleLocationPage";
import { CharacterPage } from "@/pages/character/ui";
import { SingleCharacterPage } from "@/pages/singleCharacter/ui/SingleCharacterPage/SingleCharacterPage";

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
        <Route
          element={<SingleLocationPage />}
          path={getSingleLocationRoute(":id")}
        />
        <Route
          element={<SingleEpisodePage />}
          path={getSingleEpisodeRoute(":id")}
        />
      </Route>
    </Routes>
  );
};
