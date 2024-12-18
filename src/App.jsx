import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import {
  About,
  Home,
  Cart,
  Contact,
  Login,
  Register,
  SingleProduct,
} from "./pages";

//loaders

import { loader as HomeLoader } from "./pages/Home";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { ProtectedRoutes } from "./components";

//globalContext
import { useContext } from "react";
import { GlobalContext } from "./context/globalContext";

function App() {
  const { user, authReady } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart />,
        },

        {
          path: "/singleproduct/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
