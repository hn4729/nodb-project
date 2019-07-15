import React from "react";

export default function DeleteVideo(props) {
  return (
    <button
      className="far fa-trash-alt"
      onClick={() => props.deleteVideo(props.id)}
    />
  );
}
