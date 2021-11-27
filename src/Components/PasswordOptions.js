import React from "react";
import { ButtonOption } from "./ButtonOption";

export const PasswordOptions = ({
  passwordLength,
  setPasswordLength,
  setPasswordNumbers,
  setPasswordSymbols,
  setPasswordUppercase,
}) => {
  return (
    <div className="password__options">
      <ButtonOption
        id="Numbers"
        text="Add Numbers"
        state={setPasswordNumbers}
      />
      <ButtonOption
        id="SC"
        text="Add Special Characters"
        state={setPasswordSymbols}
      />
      <ButtonOption
        id="UpperCase"
        text="Add Uppercase Alphabets"
        state={setPasswordUppercase}
      />
      <input
        className="password__range"
        type="range"
        min="1"
        max="20"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
      />
    </div>
  );
};
