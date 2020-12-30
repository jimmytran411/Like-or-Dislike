import React from "react";
import ClassNames from "classnames";

const ReactionButton = (props) => {
  const { isActive, counter, onClick, name } = props;
  let btnClass = ClassNames("btn", {
    "btn-active": isActive,
  });

  return (
    <div>
      <h1>{counter}</h1>
      <button className={btnClass} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default ReactionButton;
