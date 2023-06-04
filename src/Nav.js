import "./nav.css";
import {ReactComponent as DefaultImage} from './asset/defaultImage.svg';
import LoginButton from './LoginButton.js';

export default function Nav() {
  return (
    <div className="top">
      <span className="font">붕어빵 마을</span>
      <div className="name-box">
        <DefaultImage  className="default-image"/>
        <span className="name">이름</span>
        <LoginButton />
      </div>
    </div>
  )
}