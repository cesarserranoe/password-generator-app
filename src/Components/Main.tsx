import { PasswordContent } from "./PasswordContent";
import { PasswordOptions } from "./PasswordOptions";
import { usePassword } from "../hooks/usePasswordGenerate";
import { useCopyPassword } from "../hooks/useCopyPassword";
import githubImage from "../Assets/github.png";

export const Main = () => {
  const {
    password,
    passwordLength,
    getPassword,
    handlePassLength,
    handlePassNumber,
    handlePassSymbols,
    handlePassUpperCase,
  } = usePassword();
  const { showMessageCopy, toggleMessageCopy } = useCopyPassword();

  return (
    <main>
      <div className="password">
        {/* Paso de opciones de la contraseña por parámetro */}
        <PasswordContent
          password={password}
          generatePassword={getPassword}
          toggleMessageCopy={toggleMessageCopy}
        />
        {/* Paso del cambio de estado por parámetro */}
        <PasswordOptions
          handlePassLength={handlePassLength}
          handlePassNumbers={handlePassNumber}
          handlePassSymbols={handlePassSymbols}
          handlePassUppercase={handlePassUpperCase}
          generatePassword={getPassword}
          passwordLength={passwordLength}
        />
        <div className="password__showLenght">
          <p className="password__length">Length:</p>
          <p>{passwordLength}</p>
        </div>
        <p className="password__info">
          A password should be 16 characters or more.
        </p>
        <p className="password__info">Created By: César Serrano.</p>
        <div className="password__infoSocial">
          {/* Img credits: https://www.flaticon.es/autores/laisa-islam-ani */}
          <img className="password__infoIMG" src={githubImage} alt="github" />
          <a
            className="password__info"
            href="https://github.com/cesarserranoe/password-generator-app"
            target="blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className={`message ${showMessageCopy ? "is-copy" : null}`}>
        <p className="message__copy ">Copy</p>
      </div>
    </main>
  );
};
