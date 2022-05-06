import React from "react";
import { ButtonOption } from "./ButtonOption";

interface Props {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
  setPasswordNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordSymbols: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordUppercase: React.Dispatch<React.SetStateAction<boolean>>;
  generatePassword: () => void;
}

export const PasswordOptions = ({
  passwordLength,
  setPasswordLength,
  setPasswordNumbers,
  setPasswordSymbols,
  setPasswordUppercase,
  generatePassword,
}: Props) => {
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
        onChange={(e) => {
          setPasswordLength(parseInt(e.target.value) - 1);
          generatePassword();
        }}
      />
    </div>
  );
};
