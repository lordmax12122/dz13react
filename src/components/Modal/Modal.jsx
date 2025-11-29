import React, { Component } from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

class Modal extends Component {

  state = {
    time: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prev => ({ time:prev.time + 1}))
    }, 1000)
    window.addEventListener("keydown", this.handleEsc);
  };

  componentWillUnmount() {
    clearInterval(this.timer)
  };

  handleEsc = (e) => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    if (!this.props.show) return null;

    return (
      <>
        <Backdrop onClose={this.props.onClose} />

        <div className="modal">
          <p>Таймер: {this.state.time} сек</p>
          <div className="modal-content">

            <ul className="item">
              <li>
                <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="" />
              </li>
              <li>
                <img src="https://www.tierschutzbund.de/fileadmin/_processed_/7/c/csm_schwarzer_Hund_auf_Wiese_c_xkunclova-Shutterstock_01_f2d4be8ef4.jpg" alt="" />
              </li>
              <li>
                <img src="https://www.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg" alt="" />
              </li>
              <li>
                <img src="https://premierpups.com/azure/premierphotos/pups/5-facts-about-the-maltese-dog-we-guarantee-youll-love-637872600356578531.jpg" alt="" />
              </li>
            </ul>

            <button onClick={this.props.onClose}>Закрити</button>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
