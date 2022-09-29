import { withRouter } from "react-router-dom";
import qs from "query-string";

const PagePaginator = ({ history, location }) => {
  const { query, page } = qs.parse(location.search);

  const handlePrevPage = () => {
    const queryString = qs.stringify({
      query,
      page: Number(page) - 1,
    });
    history.push({ ...location, search: queryString });
  };

  const handleNextPage = () => {
    const queryString = qs.stringify({
      query,
      page: Number(page) + 1,
    });
    history.push({ ...location, search: queryString });
  };

  return (
    <div>
      <button
        onClick={handlePrevPage}
        type="button"
        disabled={Number(page) <= 1}
      >
        Prev
      </button>
      <button onClick={handleNextPage} type="button">
        Next
      </button>
    </div>
  );
};

export default withRouter(PagePaginator);
