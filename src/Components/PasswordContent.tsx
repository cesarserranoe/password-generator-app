import clipboards from "../Assets/clipboards.svg";

interface Props {
  password: string;
  generatePassword: () => void;
  toggleMessageCopy: () => void;
}

export const PasswordContent = ({
  password,
  toggleMessageCopy,
  generatePassword,
}: Props) => {
  const copyPassword = () => {
    if (window.isSecureContext) {
      toggleMessageCopy();
      let copyPassword = password;
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
          readOnly={true}
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
