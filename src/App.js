import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./App.css";
import Header from "./components/Header";
import FavoriteList from "./components/FavoriteList";
import WatchLaterList from "./components/WatchLaterList";
import AddVideo from "./components/AddVideo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "favorites",
      visible: false
    };
  }

  changeView = newView => {
    this.setState({ view: newView });
  };

  openModalForm = () => {
    this.setState({ visible: true });
  };

  closeModalForm = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <nav>
          <div className="view-btn">
            <button
              onClick={() => {
                this.setState({ view: "favorites" });
              }}
            >
              Favorite Videos
            </button>
            <button
              onClick={() => {
                this.setState({ view: "later" });
              }}
            >
              Watch Later
            </button>
          </div>
          <button
            className="add-btn fas fa-plus"
            onClick={() => this.openModalForm()}
          />
        </nav>

        <Modal
          visible={this.state.visible}
          width="40%"
          height="60%"
          effect="fadeInUp"
          onClickAway={() => this.closeModalForm()}
        >
          <AddVideo closeModalForm={this.closeModalForm} />
        </Modal>

        {this.state.view === "favorites" ? <FavoriteList /> : null}
        {this.state.view === "later" && (
          <WatchLaterList changeView={this.changeView} />
        )}
      </div>
    );
  }
}

export default App;
