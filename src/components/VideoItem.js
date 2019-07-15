import React from "react";
import ModalVideoPopUp from "./ModalVideoPopUp";

function VideoItem(props) {
  return (
    <section>
      <p>{props.title}</p>
      <ModalVideoPopUp url={props.url} />
      <p>{props.genre}</p>
      <p className="item">Description</p>
      <p>{props.description}</p>
    </section>
  );
}

export default VideoItem;
