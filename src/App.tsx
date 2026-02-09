import { useEffect } from "react";
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Token } from "./screens/Token";
import { Ecosystem } from "./screens/Ecosystem";
import { BuyGainr } from "./screens/BuyGainr";

const ScrollToTop = (): null => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);

    return null;
};

const RootLayout = (): JSX.Element => {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "token",
                element: <Token />,
            },
            {
                path: "ecosystem",
                element: <Ecosystem />,
            },
            {
                path: "buy-gainr",
                element: <BuyGainr />,
            },
        ],
    },
]);

export const App = () => {
    return <RouterProvider router={router} />;
};
