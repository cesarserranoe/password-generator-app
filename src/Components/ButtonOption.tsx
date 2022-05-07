import { useState } from "react";

interface Props {
  id: string;
  text: string;
  handle: (value: boolean) => void;
}

export const ButtonOption = ({ id, text, handle }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    isActive ? handle(false) : handle(true);
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
