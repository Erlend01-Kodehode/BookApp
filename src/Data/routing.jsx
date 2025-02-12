import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import ListingPage from "../Pages/ListingPage";
import DetailsPage from "../Pages/DetailsPage";
import Error404 from "../Pages/Error404";
import FavouritesPage from "../Pages/FavouritesPage";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // Homepage
      },
      {
        path: "/Listing",
        element: <ListingPage />,
        // Map of books fulfilling search criteria
      },
      {
        path: "/Listing/:bookID",
        element: <DetailsPage />,
        // Book Details
      },
      {
        path: "/Favourites",
        element: <FavouritesPage />,
        // Map of Favourites
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
    // Fallback
  },
]);

export default routing;
