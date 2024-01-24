import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './Components/Navbar/Header'
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ResMenu from "./Components/FoodList/ResMenu";
import Cart from "./Components/Cart/Cart";
import { Provider } from "react-redux";
import appStore from "./Store/appStore";


const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {

  const appStyle = {
       width : '100vw',
  }

  return (
    <Provider store={appStore} style={appStyle}>
      <div className="appLayout">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
