// react
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
// routes
import {
  getHomeRoute,
  getSingleCharacterRoute,
  getNotFoundRoute,
  getTestRoute,
} from "@/shared/libs/constants/routes";
// pages
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/notFound";
import { SingleCharacterPage } from "@/pages/singleCharacter/ui/SingleCharacterPage/SingleCharacterPage";
import { TestPage } from "@/pages/test/ui";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = ({}) => {
  return (
    <Routes>
      <Route element={<HomePage />} path={getHomeRoute()} />
      <Route element={<TestPage />} path={getTestRoute()} />
      <Route element={<NotFoundPage />} path={getNotFoundRoute()} />
      <Route
        element={<SingleCharacterPage />}
        path={getSingleCharacterRoute(":id")}
      />
    </Routes>
  );
};
