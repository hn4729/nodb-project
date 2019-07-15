import React, { Component } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";
import EditVideo from "./EditVideo";
import DeleteVideo from "./DeleteVideo";

class WatchLaterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchLaterVideos: [],
      error: "",
      list: "watchLater"
    };
  }

  componentDidMount() {
    this.getWatchLater();
  }

  getWatchLater = () => {
    axios
      .get("/api/watchLater")
      .then(response => {
        this.setState({ watchLaterVideos: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: "Unknown Error Occured." });
      });
  };

  deleteVideo = videoId => {
    axios.delete(`/api/watchLater/${videoId}`).then(results => {
      this.setState({ watchLaterVideos: results.data });
    });
  };

  render() {
    return (
      <div>
        <div className="video-list">
          {this.state.watchLaterVideos.map((video, index) => (
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
                  getWatchLater={this.getWatchLater}
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

export default WatchLaterList;
