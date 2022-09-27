const NewsList = ({ news }) => {
  return (
    <ul>
      {news.map(({ title, url }) => (
        <li>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
