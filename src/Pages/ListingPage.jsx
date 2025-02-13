import { useContext, useEffect } from "react";
import { ApiContext, DataContext } from "../App";
import { Link } from "react-router-dom";
import Book from "../Components/Book";

function ListingPage() {
  const [apiData] = useContext(ApiContext);
  const [loading, setLoading, error] = useContext(DataContext);

  // useEffect(() => {
  //   console.log(apiData.results);
  // }, [apiData]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && apiData && (
        <div>
          <h2>Books</h2>
          <div>
            {apiData.results.map((book) => {
              return <Book key={book.id} book={book} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingPage;
