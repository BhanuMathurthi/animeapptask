import { Link } from "react-router-dom";

export default function AnimePagination({
  animesPerPage,
  totalAnimes,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAnimes / animesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link onClick={() => paginate(number)} className="page-link">
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
