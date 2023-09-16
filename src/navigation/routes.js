import { BaseLayout } from "../Layout/BaseLayout";
import { Home } from "../pages/Home/Home";

const routes = [
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
    routeMessage: "Glamour Store",
  },
];

export { routes };
