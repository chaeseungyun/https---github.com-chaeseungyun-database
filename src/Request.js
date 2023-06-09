import { useState } from "react";
import "./CustomerPage.css";
import { ReactComponent as Home } from "./asset/home.svg";
import { ReactComponent as Location } from "./asset/location.svg";
import { Link } from "react-router-dom";

export default function Request() {
  const [loc, setLoc] = useState('');
  const loctionHandle = (e) => {
    setLoc(e.target.value);
  }
  return (
    <div className="login-box">
      <div className="login-container">
        <Link to='/'>
          <Home className="login-home" />
        </Link>
        <div className="boong-set">
          <div className="boong-title">붕어빵 마을</div>
          <div className="boong-p">새로운 붕어빵 가게를 찾으셨나요?</div>
          <div>함께 지도를 만들어봐요!</div>
        </div>
        <div className="request-mid">
          <div className="request-text">
            <Location className="login-user"/>
            <input type='text' placeholder="주소" className="request-input" value={loc} onChange={loctionHandle}/>
          </div>
          <button className="loginpage-button">등록 요청</button>
        </div>
      </div>
    </div>
  );
}
