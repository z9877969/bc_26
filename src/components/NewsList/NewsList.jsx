import PropTypes from "prop-types";
import { Component } from "react";
import s from "./NewsList.module.scss";

class NewsItem extends Component {
  state = {
    isLoading: true,
  };

  loadingImage = () => {
    console.log("LOADED ITEM IMAGE!!");
    this.setState({ isLoading: false });
  };

  render() {
    const { toggleModal, item } = this.props;
    return (
      <li className={s.item} onClick={() => toggleModal(item)}>
        {this.state.isLoading && (
          <h3 style={{ color: "red" }}>Image Loading...</h3>
        )}
        <img
          className={s.img}
          style={{ display: this.state.isLoading ? "none" : "block" }}
          onLoad={this.loadingImage}
          src={item.webformatURL}
          alt=""
        />
      </li>
    );
  }
}

const NewsList = ({ news, toggleModal }) => {
  console.log(document.body.clientHeight);
  return (
    <ul className={s.news}>
      {news.map((item, idx) => (
        // <li key={idx} className={s.item} onClick={() => toggleModal(item)}>
        //   <img className={s.img} src={item.urlToImage} alt="" />
        //   <div className={s.textWrapper}>
        //     <h3 className={s.title}>{item.title}</h3>
        //     <p className={s.author}>{item.author}</p>
        //     <p className={s.date}>{item.publishedAt}</p>
        //     <p className={s.descr}>{item.description}</p>
        //   </div>
        // </li>
        <NewsItem key={item.id} toggleModal={toggleModal} item={item} />
        // <li key={idx} className={s.item} onClick={() => toggleModal(item)}>
        //   <img className={s.img} src={item.webformatURL} alt="" />
        // </li>
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
