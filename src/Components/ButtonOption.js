import React, { useState } from "react";

export const ButtonOption = ({ id, text, state }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    isActive ? state(false) : state(true);
  };

  return (
    <input
      id={id}
      className={`password__option ${isActive ? "activated" : null}`}
      type="button"
      value={text}
      onClick={handleToggle}
    />
  );
};
