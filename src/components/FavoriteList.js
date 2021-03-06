import React, { Component } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";
import DeleteVideo from "./DeleteVideo";
import EditVideo from "./EditVideo";

class FavoriteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteVideos: [],
      error: "",
      list: "favorites"
    };
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites = () => {
    axios
      .get("/api/favorites")
      .then(response => {
        this.setState({ favoriteVideos: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: "Unknown Error Occured." });
      });
  };

  deleteVideo = videoId => {
    axios.delete(`/api/favorites/${videoId}`).then(results => {
      this.setState({ favoriteVideos: results.data });
    });
  };

  render() {
    return (
      <div>
        <div className="video-list">
          {this.state.favoriteVideos.map((video, index) => (
            <div className="video-item" key={index}>
              <VideoItem
                id={video.id}
                url={video.url}
                title={video.title}
                genre={video.genre}
                description={video.description}
              />
              <div className="modify-btns">
                <EditVideo
                  id={video.id}
                  url={video.url}
                  title={video.title}
                  genre={video.genre}
                  description={video.description}
                  list={this.state.list}
                  getFavorites={this.getFavorites}
                />
                <DeleteVideo id={video.id} deleteVideo={this.deleteVideo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FavoriteList;
