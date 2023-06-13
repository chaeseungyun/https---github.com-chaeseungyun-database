import "./CustomerPage.css";
import { ReactComponent as Girl } from "./asset/girl.svg";
import { ReactComponent as User } from "./asset/user.svg";
import { ReactComponent as Rock } from "./asset/rock.svg";
import { ReactComponent as Home } from "./asset/home.svg";
import { Link, useNavigate } from "react-router-dom";
import { users } from "./api/communityClient";
import { useState } from "react";

export default function CustomerPage() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const idHandle = (e) => {
    setId(e.target.value)
  }
  const passwordHandle = (e) => {
    setPassword(e.target.value)
  }
  const login = async () => {
    try {
    const result = await users.post('/login', {
    user_id: id,
    user_password: password
    });
    console.log(result)
    sessionStorage.setItem('isLogin', true);
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('user_name', result.data[0].user_name)
    sessionStorage.setItem('user_number', result.data[0].user_number)
    sessionStorage.setItem('user_type', result.data[0].user_type)
    navigate('/');
    } catch {
      alert('잘못된 계정정보입니다.')
    }
  }
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
              <input className="login-input" placeholder="아이디" value={id} onChange={idHandle}/>
            </div>
            <div className="login-input-set1">
              <Rock className="login-user" />
              <input className="login-input" placeholder="비밀번호" value={password} onChange={passwordHandle}/>
            </div>
            <div className="login-button-set">
              <Link to='/find-id-password'>
                <p>아이디/비밀번호 찾기</p>
              </Link>
              <button className="loginpage-buttons" type='button' onClick={login}>마을 입장</button>
            </div>
          </form>
          <Girl className="girl" />
        </div>
      </div>
    </div>
  );
}
