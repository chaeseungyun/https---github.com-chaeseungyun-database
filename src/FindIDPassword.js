import "./CustomerPage.css";
import { ReactComponent as User } from "./asset/user.svg";
import { ReactComponent as Home } from "./asset/home.svg";
import { ReactComponent as Name } from "./asset/name.svg";
import { ReactComponent as Phone } from "./asset/phone.svg";
import { Link } from "react-router-dom";

export default function FindIDPassword() {
  return (
    <div className="login-box">
      <div className="login-container">
        <Link to='/'>
          <Home className="login-home" />
        </Link>
        <div className="boong-set">
          <div className="boong-title">붕어빵 마을</div>
          <div className="boong-p">붕어빵 마을에 오신걸을 환영합니다.</div>
        </div>
        <div className="find-mid-row">
          <form className="find-form">
            <div className="login-input-set1">
              <Name className="login-user" />
              <input className="login-input" placeholder="이름" />
            </div>
            <div className="login-input-set1">
              <Phone className="login-user" />
              <input className="login-input" placeholder="전화번호" />
            </div>
            <div className="login-button-set">
              <button className="loginpage-button">아이디 찾기</button>
            </div>
          </form>
          <form className="find-form">
            <div className="login-input-set1">
              <User className="login-user" />
              <input className="login-input" placeholder="아이디" />
            </div>
            <div className="login-input-set1">
              <Phone className="login-user" />
              <input className="login-input" placeholder="전화번호" />
            </div>
            <div className="login-button-set">
              <button className="find-password-button">비밀번호 찾기</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
