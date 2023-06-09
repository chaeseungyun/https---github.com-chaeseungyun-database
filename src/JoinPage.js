import "./CustomerPage.css";
import { ReactComponent as User } from "./asset/user.svg";
import { ReactComponent as Rock } from "./asset/rock.svg";
import { ReactComponent as Home } from "./asset/home.svg";
import { ReactComponent as Name } from "./asset/name.svg";
import { ReactComponent as Phone } from "./asset/phone.svg";
import { ReactComponent as Type } from "./asset/type.svg";
import { ReactComponent as Sex } from "./asset/sex.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function JoinPage() {
  const [type, setType] = useState(true);
  const [sex, setSex] = useState(true);
  const checkType = () => {
    setType(x => !x);
  }
  const checkSex = () => {
    setSex(x => !x);
  }
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
        <div className="find-mid">
          <div className="join-mid">
            <form className="find-form">
              <div className="login-input-set1">
                <User className="login-user" />
                <input className="login-input" placeholder="아이디" />
              </div>
              <div className="login-input-set1">
                <Rock className="login-user" />
                <input className="login-input" placeholder="비밀번호" />
              </div>
              <div className="join-user-type">
                <Type className="login-user" />
                <span>분류</span>
                <input type="radio" value='customer' checked={type} onClick={checkType} />
                <span>손님</span>
                <input type="radio" value='seller' checked={type === false} onClick={checkType} />
                <span>상인</span>
              </div>
            </form>
            <form className="find-form">
              <div className="login-input-set1">
                <Name className="login-user" />
                <input className="login-input" placeholder="이름" />
              </div>
              <div className="login-input-set1">
                <Phone className="login-user" />
                <input className="login-input" placeholder="전화번호" />
              </div>
              <div className="join-user-type">
                <Sex className="login-user" />
                <span>성별</span>
                <input type="radio" value='male' checked={sex} onClick={checkSex} />
                <span>남자</span>
                <input type="radio" value='female' checked={!sex} onClick={checkSex} />
                <span>여자</span>
              </div>
            </form>
          </div>
          <button className="loginpage-button">회원 가입</button>
        </div>
      </div>
    </div>
  );
}
