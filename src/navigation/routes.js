import { Home } from "../pages/Home/Home"

const routes = [
    {
        path: "/",
        layout: Home,
        component: Home,
        exact: true,
        routeMessage: "Glamour Store"
    }
];

export {routes};