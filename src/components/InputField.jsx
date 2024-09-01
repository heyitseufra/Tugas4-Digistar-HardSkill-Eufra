import { useState } from "react";

const InputField = ({ type, placeholder, icon, onInputChange }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const validatePassword = (value) => {
    onInputChange(value);
  };

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className={`input-field`}
        onChange={(e) => type === "password" && validatePassword(e.target.value)}
        required
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === "password" && (
        <i
          onClick={() => setIsPasswordShown(prevState => !prevState)}
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? "visibility" : "visibility_off"}
        </i>
      )}
    </div>
  );
};

export default InputField;