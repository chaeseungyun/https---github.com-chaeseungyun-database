import "./LoginButton.css";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <div className="button-container">
      <span className="quote">붕어빵 마을에 어서오세요</span>
      <Link to="/login">
        <button className="login-button">마을 들어가기(로그인)</button>
      </Link>
      <div className="find-set">
        <Link to='/find-id-password'>
            <span className="id-pw">아이디 / 비밀번호 찾기</span>
        </Link>
        <Link to='/join'>
          <div className="join">
            <span className="join-btn">회원가입</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
