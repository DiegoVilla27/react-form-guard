import { createBrowserRouter } from "react-router-dom";
import RoutesPublic from "./public";

const router = createBrowserRouter([
  ...RoutesPublic,
  {
    path: "/*",
    element: <div>Page not found: 404</div>
  }
]);

export default router;
