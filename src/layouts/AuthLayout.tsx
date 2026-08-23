import './AuthLayout.css';
import LogoIcon from '../assets/logo.svg';
import UserForm from '../components/UserForm';

export default function AuthLayout() {
  return (
    <div className="AuthLayout">
      <img
        src={LogoIcon}
        alt="Logo"
      />
      <UserForm />
    </div>
  );
}
