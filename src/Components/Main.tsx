import { useEffect, useState } from "react";
import { PasswordContent } from "./PasswordContent";
import { PasswordOptions } from "./PasswordOptions";
import githubImage from "../Assets/github.png";
import { usePassword } from "../hooks/passwordGenerate";

export const Main = () => {
  const { getPassword } = usePassword();
  const [password, setPassword] = useState("");
  const [showMessageCopy, setShowMessageCopy] = useState(false);
  //opciones para la contraseña
  const [passwordLength, setPasswordLength] = useState(16);
  const [passwordNumbers, setPasswordNumbers] = useState(false);
  const [passwordSymbols, setPasswordSymbols] = useState(false);
  const [passwordUppercase, setPasswordUppercase] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      generatePassword();
    }, 200);
  }, []);

  const toggleMessageCopy = () => {
    setShowMessageCopy(true);

    setTimeout(() => {
      setShowMessageCopy(false);
    }, 2000);
  };

  const generatePassword = () => {
    setPassword(
      getPassword({
        passwordLength,
        passwordNumbers,
        passwordUppercase,
        passwordSymbols,
      })
    );
  };
  return (
    <main>
      <div className="password">
        {/* Paso de opciones de la contraseña por parámetro */}
        <PasswordContent
          password={password}
          generatePassword={generatePassword}
          toggleMessageCopy={toggleMessageCopy}
        />
        {/* Paso del cambio de estado por parámetro */}
        <PasswordOptions
          setPasswordLength={setPasswordLength}
          setPasswordNumbers={setPasswordNumbers}
          setPasswordSymbols={setPasswordSymbols}
          setPasswordUppercase={setPasswordUppercase}
          generatePassword={generatePassword}
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
