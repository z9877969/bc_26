const PagePaginator = ({ setSearch, query, page }) => {
  const setPrevPage = () => {
    // if (Number(page) <= 1) return;
    setSearch({ query, page: page - 1 });
  };

  const setNextPage = () => {
    setSearch({ query, page: Number(page) + 1 });
  };
  return (
    <div>
      <button onClick={setPrevPage} type="button" disabled={Number(page) <= 1}>
        Prev
      </button>
      <button onClick={setNextPage} type="button">
        Next
      </button>
    </div>
  );
};

export default PagePaginator;
