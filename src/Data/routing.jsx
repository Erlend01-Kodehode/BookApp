import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import ListingPage from "../Pages/ListingPage";
import DetailsPage from "../Pages/DetailsPage";
import Error404 from "../Pages/Error404";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/Listing",
        element: <ListingPage />,
      },
      {
        path: "/Listing/:bookID",
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default routing;
