import React from "react";
import ModalVideoPopUp from "./ModalVideoPopUp";

function VideoItem(props) {
  return (
    <div>
      <section>
        <p>{props.title}</p>
        <ModalVideoPopUp url={props.url} />
        <p>{props.genre}</p>
        <p>{props.description}</p>
      </section>
    </div>
  );
}

export default VideoItem;
