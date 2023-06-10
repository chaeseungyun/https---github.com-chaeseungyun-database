import "./CustomerPage.css";
import { ReactComponent as Home } from "./asset/home.svg";
import { Link } from "react-router-dom";

export default function CompleteFindID() {
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
          당신의 아이디는<span className="result-border">1</span>입니다.
        </div>
        <Link to='/login'>
          <button type="button" className="result-button">로그인하러 가기</button>
        </Link>
      </div>
    </div>
  );
}
