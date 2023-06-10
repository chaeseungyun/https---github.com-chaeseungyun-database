import "./CustomerPage.css";
import { ReactComponent as Girl } from "./asset/girl.svg";
import { ReactComponent as User } from "./asset/user.svg";
import { ReactComponent as Rock } from "./asset/rock.svg";
import { ReactComponent as Home } from "./asset/home.svg";
import { Link } from "react-router-dom";

export default function CustomerPage() {
  return (
    <div className="login-box">
      <div className="login-container">
        <Link to='/'>
          <Home className="login-home" />
        </Link>
        <div className="boong-sets">
          <div className="boong-title">붕어빵 마을</div>
          <div className="boong-p">붕어빵 마을에 오신걸을 환영합니다.</div>
        </div>
        <div className="login-mid">
          <form className="login-form">
            <div className="login-input-set1">
              <User className="login-user" />
              <input className="login-input" placeholder="아이디" />
            </div>
            <div className="login-input-set1">
              <Rock className="login-user" />
              <input className="login-input" placeholder="비밀번호" />
            </div>
            <div className="login-button-set">
              <Link to='/find-id-password'>
                <p>아이디/비밀번호 찾기</p>
              </Link>
              <button className="loginpage-buttons">마을 입장</button>
            </div>
          </form>
          <Girl className="girl" />
        </div>
      </div>
    </div>
  );
}
