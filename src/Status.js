import React, { useState } from "react";
import ReactionButton from "./ReactionButton";

const Status = () => {
  const [state, setState] = useState({
    isLiked: false,
    isDislike: false,
    likeCounter: 99,
    disLikeCounter: 9,
  });

  const [likeCounter, setLikeCounter] = useState(99);
  const [disLikeCounter, setDisLikeCounter] = useState(9);
  const [status, setStatus] = useState("none"); // none | liked | disliked

  const handleDisLikeClick = () => {
    switch (status) {
      case "none":
        setDisLikeCounter(disLikeCounter + 1);
        setStatus("disliked");
        break;
      case "disliked":
        setDisLikeCounter(disLikeCounter - 1);
        setStatus("none");
        break;
      case "liked":
        setDisLikeCounter(disLikeCounter + 1);
        setLikeCounter(likeCounter - 1);
        setStatus("disliked");
        break;
      default:
        throw new Error(`status ${status} not supported`);
    }
  };
  const handleLikeClick = () => {
    switch (status) {
      case "none":
        setLikeCounter(likeCounter + 1);
        setStatus("liked");
        break;
      case "liked":
        setLikeCounter(likeCounter - 1);
        setStatus("none");
        break;
      case "disliked":
        setLikeCounter(likeCounter + 1);
        setDisLikeCounter(disLikeCounter - 1);
        setStatus("liked");
        break;
      default:
        throw new Error(`status ${status} not supported`);
    }
  };

  return (
    <div>
      <ReactionButton
        name="Like"
        counter={likeCounter}
        onClick={handleLikeClick}
        isActive={status === "liked"}
      />
      <ReactionButton
        name="Dislike"
        counter={disLikeCounter}
        onClick={handleDisLikeClick}
        isActive={status === "disliked"}
      />
    </div>
  );
};

export default Status;
