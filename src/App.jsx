import { useState } from "react";
import InputField from "./components/InputField";
import SocialLogin from "./components/SocialLogin";
import SuccessPage from "./components/SuccessPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(password)) {
      setIsLoggedIn(true); // Set login status to true on successful login
      setError("");
    } else {
      setError("Password must be at least 8 characters, include a lowercase letter, a number, and a special character.");
    }
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <SuccessPage />
      ) : (
        <div className="login-container">
          <h2 className="form-title">Log in with</h2>
          <SocialLogin />

          <p className="separator">
            <span>or</span>
          </p>

          <form action="#" className="login-form" onSubmit={handleLogin}>
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField
              type="password"
              placeholder="Password"
              icon="lock"
              onInputChange={setPassword}
            />

            <button className="login-button">Log In</button>
            {error && <p className="error-message">{error}</p>} {/* Show error only after login attempt */}
          </form>

          <p className="signup-text">Don&#39;t have an account? <a href="#">Signup now</a></p>
        </div>
      )}
    </div>
  );
};

export default App;