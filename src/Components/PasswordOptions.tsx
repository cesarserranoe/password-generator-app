import React from "react";
import { ButtonOption } from "./ButtonOption";

interface Props {
  passwordLength: number;
  handlePassLength: (value: number) => void;
  handlePassNumbers: (value: boolean) => void;
  handlePassSymbols: (value: boolean) => void;
  handlePassUppercase: (value: boolean) => void;
  generatePassword: () => void;
}

export const PasswordOptions = ({
  passwordLength,
  handlePassLength,
  handlePassNumbers,
  handlePassSymbols,
  handlePassUppercase,
  generatePassword,
}: Props) => {
  return (
    <div className="password__options">
      <ButtonOption
        id="Numbers"
        text="Add Numbers"
        handle={handlePassNumbers}
      />
      <ButtonOption
        id="SC"
        text="Add Special Characters"
        handle={handlePassSymbols}
      />
      <ButtonOption
        id="UpperCase"
        text="Add Uppercase Alphabets"
        handle={handlePassUppercase}
      />
      <input
        className="password__range"
        type="range"
        min="1"
        max="20"
        value={passwordLength}
        onChange={(e) => {
          handlePassLength(parseInt(e.target.value) - 1);
          generatePassword();
        }}
      />
    </div>
  );
};
