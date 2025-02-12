import { useContext } from "react";
import { ApiContext } from "../App";

function ListingPage() {
  const [apiData] = useContext(ApiContext);
  console.log(apiData);
  return (
    <div>
      <p>Listing</p>
    </div>
  );
}

export default ListingPage;
