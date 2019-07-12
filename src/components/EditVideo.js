import React, { Component } from "react";

class EditVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      genre: "",
      description: "",
      error: ""
    };
  }

  openModalForm = () => {
    this.setState({ visible: true });
  };

  closeModalForm = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <button>Edit</button>
      </div>
    );
  }
}

export default EditVideo;
