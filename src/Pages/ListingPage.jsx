import { useContext } from "react";
import { ApiContext, DataContext } from "../App";

function ListingPage() {
  const [apiData] = useContext(ApiContext);
  const [loading, error] = useContext(DataContext);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && apiData && (
        <>
          <h2>Books</h2>
          <div>{apiData.map((book, id))}</div>
        </>
      )}
    </div>
  );
}

export default ListingPage;
