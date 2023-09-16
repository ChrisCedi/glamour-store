import { BaseLayout } from "../Layout/BaseLayout";
import { Home } from "../pages/Home/Home";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";

const routes = [
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
    routeMessage: "Glamour Store",
  },
  {
    path: "/:id",
    layout: BaseLayout,
    component: ProductDetail,
    exact: true,
    routeMessage: "Glamour Store",
  },
];

export { routes };
