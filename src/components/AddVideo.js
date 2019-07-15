import React, { Component } from "react";
import axios from "axios";

class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      genre: "",
      description: "",
      error: "",
      errorStatus: false,
      option: "favorites"
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleOption = event => {
    this.setState({ option: event.target.value });
  };

  render() {
    return (
      <div className="form-popup">
        <form
          onSubmit={event => {
            let { url, title, genre, description, option } = this.state;

            if (
              url.includes("https://www.youtube.com/watch?v=") ||
              url.includes("https://youtu.be/")
            ) {
              this.setState({ errorStatus: false });

              if (this.state.option === "favorites") {
                axios.post("/api/favorites", {
                  url: url,
                  title: title,
                  genre: genre,
                  description: description,
                  option: option
                });
              } else {
                axios.post("/api/watchLater", {
                  url: url,
                  title: title,
                  genre: genre,
                  description: description,
                  option: option
                });
              }
            } else {
              this.setState({ error: "Invalid URL", errorStatus: true });
            }

            if (!this.state.errorStatus) {
              this.props.closeModalForm();
            }
          }}
          className="video-form"
        >
          <div className="list-btn">
            <label>
              <input
                type="radio"
                name="list"
                value="favorites"
                defaultChecked
                onChange={this.handleOption}
                className="radio-btn"
              />
              <span>Favorites</span>
            </label>
            <label>
              <input
                type="radio"
                name="list"
                value="watchLater"
                onChange={this.handleOption}
                className="radio-btn"
              />
              <span>Watch Later</span>
            </label>
          </div>
          <label>
            <span>URL</span>
            <input type="text" name="url" onChange={this.handleChange} />
          </label>
          <label>
            <span>Title</span>
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <label>
            <span>Genre</span>
            <input type="text" name="genre" onChange={this.handleChange} />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" onChange={this.handleChange} />
          </label>
          <div className="form-button">
            <button
              className="far fa-window-close"
              type="reset"
              onClick={() => this.props.closeModalForm()}
            />
            <button className="fas fa-plus" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddVideo;
