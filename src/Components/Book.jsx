import { Link } from "react-router-dom";

function Book({ book }) {
  return (
    <Link to={`/Listing/${book.id}`} key={book.id}>
      <div>
        <h2>{book.title}</h2>
        <p>{book.summaries[0]}</p>
      </div>
    </Link>
  );
}

export default Book;
