const NewsList = ({ news = [] }) => {
  return (
    <>
      <h1>NewsList</h1>
      <ul>
        {news.map(({ title, url }) => (
          <li>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsList;
