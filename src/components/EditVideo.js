import React, { Component } from "react";
import axios from "axios";
import Modal from "react-awesome-modal";

class EditVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      genre: "",
      description: "",
      error: "",
      errorStatus: false
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      url: this.props.url,
      title: this.props.title,
      genre: this.props.genre,
      description: this.props.description
    });
  }

  openModalForm = () => {
    this.setState({ visible: true });
  };

  closeModalForm = () => {
    this.setState({ visible: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button className="far fa-edit" onClick={() => this.openModalForm()} />
        <Modal
          visible={this.state.visible}
          width="40%"
          height="60%"
          effect="fadeInUp"
          onClickAway={() => this.closeModalForm()}
        >
          <div className="form-popup">
            <form
              onSubmit={event => {
                event.preventDefault();

                let { id, url, title, genre, description } = this.state;

                if (
                  url.includes("https://www.youtube.com/watch?v=") ||
                  url.includes("https://youtu.be/")
                ) {
                  this.setState({ errorStatus: false });

                  if (this.props.list === "favorites") {
                    axios
                      .put(`/api/favorites/${id}`, {
                        url: url,
                        title: title,
                        genre: genre,
                        description: description
                      })
                      .then(() => this.props.getFavorites());
                  } else {
                    axios
                      .put(`/api/watchLater/${id}`, {
                        url: url,
                        title: title,
                        genre: genre,
                        description: description
                      })
                      .then(() => this.props.getWatchLater());
                  }
                } else {
                  this.setState({ error: "Invalid URL", errorStatus: true });
                }

                if (!this.state.errorStatus) {
                  this.closeModalForm();
                }
              }}
              className="video-form"
            >
              <label>
                <span>URL</span>
                <input
                  type="text"
                  name="url"
                  value={this.state.url}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>Title</span>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>Genre</span>
                <input
                  type="text"
                  name="genre"
                  value={this.state.genre}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>Description</span>
                <textarea
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <div className="form-button">
                <button
                  className="far fa-window-close"
                  type="reset"
                  onClick={() => this.closeModalForm()}
                />
                <button className="fas fa-plus" type="submit" />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default EditVideo;
