import React, { Component } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";

class WatchLaterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchLaterVideos: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/watchLater")
      .then(response => {
        this.setState({ watchLaterVideos: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: "Unknown Error Occured." });
      });
  }

  render() {
    return (
      <div>
        <div className="video-list">
          {this.state.watchLaterVideos.map(video => (
            <VideoItem
              key={video.id}
              id={video.id}
              url={video.url}
              title={video.title}
              genre={video.genre}
              description={video.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default WatchLaterList;
