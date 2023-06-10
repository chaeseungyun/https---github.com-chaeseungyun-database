import "./CustomerPage.css";
import { ReactComponent as Home } from "./asset/home.svg";
import { Link } from "react-router-dom";

export default function UserNotFound() {
  return (
    <div className="login-box">
      <div className="login-container">
        <Link to='/'>
          <Home className="login-home" />
        </Link>
        <div className="boong-set">
          <div className="boong-title">붕어빵 마을</div>
        </div>
        <div>
          해당 계정은 존재하지 않습니다.
        </div>
        <Link to='/join'>
          <button type="button" className="result-button">회원가입하러 가기</button>
        </Link>
      </div>
    </div>
  );
}
