import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
import { pageSize } from "../../utils/newsApi";
import s from "./NewsList.module.scss";

const NewsList = ({ news, toggleModal }) => {
  const scrolledElRef = useRef(null);

  useEffect(() => {
    scrolledElRef.current && scrolledElRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, [news]);

  return (
    <ul className={s.news}>
      {news.map((item, idx, arr) => (
        <li
          ref={idx === arr.length - pageSize ? scrolledElRef : null}
          key={idx}
          className={s.item}
          onClick={() => toggleModal(item)}
        >
          <img className={s.img} src={item.urlToImage} alt="" />
          <div className={s.textWrapper}>
            <h3 className={s.title}>{item.title}</h3>
            <p className={s.author}>{item.author}</p>
            <p className={s.date}>{item.publishedAt}</p>
            <p className={s.descr}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default NewsList;
