import "./nav.css";
import {ReactComponent as DefaultImage} from './asset/defaultImage.svg';
import LoginButton from './LoginButton.js';
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  if (location.pathname === '/login') return;
  if (location.pathname === '/find-id-password') return;
  if (location.pathname === '/join') return;
  if (location.pathname === '/shop-request') return;
  return (
    <div className="top">
      <Link to='/'>
        <span className="font">붕어빵 마을</span>
      </Link>
      <div className="name-box">
        <DefaultImage  className="default-image"/>
        <span className="name">이름</span>
        <LoginButton />
      </div>
    </div>
  )
}