import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// LAZY
const HomePage = lazy(() => import("../index"));

const HomePageRoutes: RouteObject = {
  path: "/",
  element: <HomePage />
};
export default HomePageRoutes;
