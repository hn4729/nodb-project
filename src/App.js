import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import FavoriteList from "./components/FavoriteList";
import WatchLaterList from "./components/WatchLaterList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "favorites"
    };
  }

  changeView = newView => {
    this.setState({ view: newView });
  };

  render() {
    return (
      <div className="App">
        <Header />

        <nav>
          <div>
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
          <button>Add Video</button>
        </nav>

        {this.state.view === "favorites" ? <FavoriteList /> : null}
        {this.state.view === "later" && (
          <WatchLaterList changeView={this.changeView} />
        )}
      </div>
    );
  }
}

export default App;
