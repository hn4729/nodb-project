import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "../App.css";

class ModalVideoPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    let parseVideoId;

    if (this.props.url.includes("https://www.youtube.com/watch?v")) {
      parseVideoId = this.props.url.replace(
        "https://www.youtube.com/watch?v=",
        ""
      );
    } else {
      parseVideoId = this.props.url.replace("https://youtu.be/", "");
    }

    return (
      <div>
        <div>
          <ModalVideo
            className="modal-video"
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={parseVideoId}
            onClose={() => this.setState({ isOpen: false })}
          />
        </div>
        <button onClick={this.openModal}>OPEN VIDEO</button>
      </div>
    );
  }
}

export default ModalVideoPopUp;
