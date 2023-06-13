import "./CustomerPage.css";
import { ReactComponent as User } from "./asset/user.svg";
import { ReactComponent as Rock } from "./asset/rock.svg";
import { ReactComponent as Home } from "./asset/home.svg";
import { ReactComponent as Name } from "./asset/name.svg";
import { ReactComponent as Phone } from "./asset/phone.svg";
import { ReactComponent as Type } from "./asset/type.svg";
import { ReactComponent as Sex } from "./asset/sex.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { users } from "./api/communityClient";

export default function JoinPage() {
  const navigate = useNavigate();
  const [type, setType] = useState(true);
  const [sex, setSex] = useState(true);
  const checkType = () => {
    setType(x => !x);
  }
  const checkSex = () => {
    setSex(x => !x);
  }
  const [id, setId] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const idHandle = (e) => {
    setId(e.target.value)
  }
  const passwordHandle = (e) => {
    setPassword(e.target.value)
  }
  const nameHandle = (e) => {
    setName(e.target.value)
  }
  const numberHandle = (e) => {
    setNumber(e.target.value)
  }
  const register =  async () => {
    try {
      const result = await users.post('', 
      {
        user_id: id,
        user_password: password,
        user_type: type ? 1 : 0,
        user_name: name,
        user_phone_number: number,
        user_sex: sex ? 1 : 0,
      });
      navigate('/complete-join')
    }
  catch (e){
    console.log(e)
  }
  }
  return (
    <div className="login-box">
      <div className="login-container">
        <Link to='/'>
          <Home className="login-home" />
        </Link>
        <div className="boong-set">
          <div className="boong-title">붕어빵 마을</div>
          <div className="boong-p">붕어빵 마을에 입주하고 싶으신가요?</div>
        </div>
        <div className="find-mid">
          <div className="join-mid">
            <form className="find-form">
              <div className="login-input-set1">
                <User className="login-user" />
                <input className="login-input" placeholder="아이디" value={id} onChange={idHandle}/>
              </div>
              <div className="login-input-set1">
                <Rock className="login-user" />
                <input className="login-input" placeholder="비밀번호" value={password} onChange={passwordHandle}/>
              </div>
              <div className="join-user-type">
                <Type className="login-users" />
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
                <input className="login-input" placeholder="이름" value={name} onChange={nameHandle}/>
              </div>
              <div className="login-input-set1">
                <Phone className="login-user" />
                <input className="login-input" placeholder="전화번호" value={number} onChange={numberHandle}/>
              </div>
              <div className="join-user-type">
                <Sex className="login-users" />
                <span>성별</span>
                <input type="radio" value='male' checked={sex} onClick={checkSex} />
                <span>남자</span>
                <input type="radio" value='female' checked={!sex} onClick={checkSex} />
                <span>여자</span>
              </div>
            </form>
          </div>
          <button className="loginpage-button" onClick={register}>회원 가입</button>
        </div>
      </div>
    </div>
  );
}
