var generator = require("generate-password");

interface Props {
  passwordLength: number;
  passwordNumbers: boolean;
  passwordSymbols: boolean;
  passwordUppercase: boolean;
}

export const usePassword = () => {
  const getPassword = ({
    passwordLength,
    passwordNumbers,
    passwordUppercase,
    passwordSymbols,
  }: Props) => {
    return generator.generate({
      length: passwordLength,
      numbers: passwordNumbers,
      uppercase: passwordUppercase,
      symbols: passwordSymbols,
      exclude: `{}[]"^,.;_'|: `,
    });
  };

  return { getPassword };
};
