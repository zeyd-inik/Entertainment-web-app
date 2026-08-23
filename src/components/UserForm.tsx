import { Link } from 'react-router';
import './UserForm.css';

export default function UserForm() {
  return (
    <form className="UserForm">
      <h1 className="title">Login</h1>
      <div className="input_container">
        <input
          type="email"
          name="email"
          placeholder="Email address"
        />
      </div>
      <div className="input_container">
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <Link
        to="/home"
        className="submit"
      >
        Login to your account
      </Link>
      <p className="bottom">
        <span className="text">Don't have account?</span>
        <Link
          className="link"
          to="/signup"
        >
          SignUp
        </Link>
      </p>
    </form>
  );
}
