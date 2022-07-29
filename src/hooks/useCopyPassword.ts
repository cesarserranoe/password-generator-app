import { useState } from "react";

export const useCopyPassword = () => {
  const [showMessageCopy, setShowMessageCopy] = useState(false);

  const toggleMessageCopy = () => {
    setShowMessageCopy(true);

    setTimeout(() => {
      setShowMessageCopy(false);
    }, 2000);
  };

  return {
    showMessageCopy,
    toggleMessageCopy,
  };
};
