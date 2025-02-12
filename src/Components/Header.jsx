import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../App";
import { apiGeneral } from "../Data/api";

function Header() {
  const [apiFetch, setApiFetch] = useContext(ApiContext);
  const [apiData] = useContext(ApiContext);

  function handleDataUpdate() {
    setApiFetch(apiGeneral);
  }

  useEffect(() => {
    console.log(apiFetch);
    console.log(apiData);
  }, [apiFetch, apiData]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Listing" onClick={handleDataUpdate}>
          Listing
        </Link>
        <Link to="/Favourites">Favourites</Link>
      </nav>
    </div>
  );
}

export default Header;
