import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { routes } from "./routes";

export const Navagation =()=>{
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={
                            <>
                                <Helmet>
                                    <title>{route.routeMessage}</title>
                                </Helmet>
                                <route.layout>
                                    <route.component />
                                </route.layout>
                            </>
                        }
                    />
                ))}
            </Routes>
        </Router>
    )
}