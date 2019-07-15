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
      <div>
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
          className="add-video-form"
        >
          <div>
            <label>
              <input
                type="radio"
                name="list"
                value="favorites"
                defaultChecked
                onChange={this.handleOption}
              />
              Favorites
            </label>
            <label>
              <input
                type="radio"
                name="list"
                value="watchLater"
                onChange={this.handleOption}
              />
              Watch Later
            </label>
          </div>
          <label>
            URL
            <input type="text" name="url" onChange={this.handleChange} />
          </label>
          <label>
            Title
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <label>
            Genre
            <input type="text" name="genre" onChange={this.handleChange} />
          </label>
          <label>
            Description
            <textarea name="description" onChange={this.handleChange} />
          </label>
          <div>
            <button type="reset" onClick={() => this.props.closeModalForm()}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddVideo;
