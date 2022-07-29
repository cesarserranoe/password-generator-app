import { useState } from "react";
var generator = require("generate-password");

export const usePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);
  const [passwordNumbers, setPasswordNumbers] = useState(false);
  const [passwordSymbols, setPasswordSymbols] = useState(false);
  const [passwordUppercase, setPasswordUppercase] = useState(false);

  const getPassword = () => {
    setPassword(
      generator.generate({
        length: passwordLength,
        numbers: passwordNumbers,
        uppercase: passwordUppercase,
        symbols: passwordSymbols,
        exclude: `{}[]"^,.;_'\`~|:-()/<>`,
      })
    );
  };

  const handlePassLength = (value: number) => {
    setPasswordLength(value);
  };

  const handlePassNumber = (value: boolean) => {
    setPasswordNumbers(value);
  };

  const handlePassSymbols = (value: boolean) => {
    setPasswordSymbols(value);
  };

  const handlePassUpperCase = (value: boolean) => {
    setPasswordUppercase(value);
  };

  return {
    password,
    passwordLength,
    passwordNumbers,
    passwordSymbols,
    passwordUppercase,
    getPassword,
    handlePassLength,
    handlePassNumber,
    handlePassSymbols,
    handlePassUpperCase,
  };
};
