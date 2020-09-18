import { auth } from "../firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://png2.cleanpng.com/sh/6519b3fa8618c377e301c4ac9204017f/L0KzQYm3WMI1N6dqiZH0aYP2gLBuTfFuaat0hp9sb32wfLFuj71idZJBh9C2cILsfba0lvllbZCyetd7bHnxPbf2jwQuPZM8fqttZUS2Sbe3hMQvOWIASKo6NUa0RYS8UMkxOWU9SqUCMz7zfri=/kisspng-amazon-com-logo-amazon-prime-video-berlin-font-5b7f9de439f0d4.1190815615350901482373.png'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='login__password'>
            <h5>Password</h5>
            <h5 className='login__forgotPassword'>Forgot your Password</h5>
          </div>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            onClick={signin}
            className='login__signInButton'
          >
            Login In{" "}
          </button>
        </form>

        <button onClick={register} className='login__registerButton'>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
