import React, { Component } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";

class FavoriteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteVideos: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/favorites")
      .then(response => {
        this.setState({ favoriteVideos: response.data });
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
          {this.state.favoriteVideos.map(video => (
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

export default FavoriteList;
