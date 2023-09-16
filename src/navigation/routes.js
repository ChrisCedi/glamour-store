import { BaseLayout } from "../Layout/BaseLayout";
import { Home } from "../pages/Home/Home";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { Summary } from "../pages/Summary/Summary";

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
    routeMessage: "Detalles",
  },
  {
    path: "/summary",
    layout: BaseLayout,
    component: Summary,
    exact: true,
    routeMessage: "Resumen",
  },
];

export { routes };
