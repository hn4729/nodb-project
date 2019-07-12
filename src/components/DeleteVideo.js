import React from "react";

export default function DeleteVideo(props) {
  return <button onClick={() => props.deleteVideo(props.id)}>Remove</button>;
}
