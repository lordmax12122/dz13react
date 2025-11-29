import React, { Component } from "react";
import Modal from "./components/Modal/Modal";
import "./App.css";

class App extends Component {

  state = {
    showModal: false
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.openModal}>
          Відкрити галерею
        </button>

        <Modal 
          show={this.state.showModal} 
          onClose={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
