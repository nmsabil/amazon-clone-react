import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://png2.cleanpng.com/sh/6519b3fa8618c377e301c4ac9204017f/L0KzQYm3WMI1N6dqiZH0aYP2gLBuTfFuaat0hp9sb32wfLFuj71idZJBh9C2cILsfba0lvllbZCyetd7bHnxPbf2jwQuPZM8fqttZUS2Sbe3hMQvOWIASKo6NUa0RYS8UMkxOWU9SqUCMz7zfri=/kisspng-amazon-com-logo-amazon-prime-video-berlin-font-5b7f9de439f0d4.1190815615350901482373.png'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-Mail</h5>
          <input type='text' />
          <h5>Password</h5>
          <input type='password' />
          <button className='login__signInButton'>Sign In</button>
        </form>
        <button className='login__registerButton'>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
