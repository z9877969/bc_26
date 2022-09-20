import { Component, createRef } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalContainer = document.getElementById("modal");

class Modal extends Component {
  state = {
    isLoading: true,
  };
  modalRef = createRef(null);

  componentDidMount() {
    console.log(this.modalRef.current);
    const modalImage = this.modalRef.current;
    window.addEventListener("keydown", this.handleClose);
    // modalImage.addEventListener("load", loadingImage);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleClose);
  }

  handleClose = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  loadingImage = () => {
    console.log("LOADED!!");
    this.setState({ isLoading: false });
  };

  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <div className={s.backdrop} onClick={this.handleClose}>
        {/* <h1 className={s.title}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1> */}
        <>
          {this.state.isLoading && (
            <h1 style={{ color: "white" }}>Image loading...</h1>
          )}
          <img
            // ref={this.modalRef}
            style={{ display: this.state.isLoading ? "none" : "block" }}
            onLoad={this.loadingImage}
            src={largeImageURL}
            alt=""
            className={s.title}
          />
        </>
      </div>,
      modalContainer
    );
  }
}

export default Modal;
