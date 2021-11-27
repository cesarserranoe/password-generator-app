import React, { useState } from "react";
import clipboards from "../Assets/clipboards.svg";
var generator = require("generate-password");

export const PasswordContent = ({
  passwordLength,
  passwordNumbers,
  passwordSymbols,
  passwordUppercase,
  toggleMessageCopy,
}) => {
  const [password, setPassword] = useState("");

  //Generar la contraseña con el paquete de generate-password
  //Se envia por un objeto las opciones
  const generatePassword = () => {
    let newPassword = generator.generate({
      length: passwordLength,
      numbers: passwordNumbers,
      uppercase: passwordUppercase,
      symbols: passwordSymbols,
      exclude: `{}[]"^,.;_'|: `,
    });

    setPassword(newPassword);
  };

  const copyPassword = () => {
    if (window.isSecureContext) {
      toggleMessageCopy();
      let copyPassword = password;
      console.log(window.isSecureContext);
      navigator.clipboard.writeText(copyPassword);
    } else {
      alert("Copia la contraseña manualmente");
    }
  };

  return (
    <div className="password__content">
      <div className="password__show">
        <input
          className="password__generate"
          type="text"
          readOnly="readonly"
          value={password}
        />
      </div>
      <div className="password__buttons">
        <input
          className="password__generateBtn"
          type="button"
          value="Generate"
          /* Genera la contraseña */
          onClick={generatePassword}
        />
        <div className="password__clipboard">
          <img
            src={clipboards}
            alt="clipboard"
            onClick={() => {
              copyPassword();
            }}
          />
        </div>
      </div>
    </div>
  );
};
