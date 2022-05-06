import { useState } from "react";

interface Props {
  id: string;
  text: string;
  state: any;
}

export const ButtonOption = ({ id, text, state }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

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
