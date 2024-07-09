import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// LAZY
const AboutPage = lazy(() => import("../index"));

const AboutPageRoutes: RouteObject = {
  path: "/about",
  element: <AboutPage />
};
export default AboutPageRoutes;
