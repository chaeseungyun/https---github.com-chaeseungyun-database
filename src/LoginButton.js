import "./LoginButton.css";
import { ReactComponent as Id } from "./asset/id.svg";
import { ReactComponent as Human } from "./asset/human.svg";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <div className="button-container">
      <span className="quote">여러분의 보안을 지켜드립니다.</span>
      <Link to="/myPage">
        <button className="login-button">마을 들어가기</button>
      </Link>
      <div className="find-set">
        <div className="id-pw">
          <span className="id">아이디</span>
          <span className="pw">비밀번호 찾기</span>
        </div>
        <div className="join">
          <span className="join-btn">회원가입</span>
        </div>
      </div>
    </div>
  );
}
