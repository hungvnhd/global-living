import { useState } from "react";
export default function login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };
  return (
    <div>
      <div className="modalLogin">
        <img className="logoLogin" src="Mockup LOGO1 4.png" alt="logo" />
        <p className="textTitle">
          BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
        </p>
        <form className="formLogin">
          <div className="divLogin">
            <p className="textLogin">Đăng nhập tài khoản</p>
          </div>

          <img className="iconEmail" src="Mail Account.png" />
          <input
            onChange={handleInputEmail}
            className="inputLoginEmail"
            type="text"
            placeholder="Email"
            value={inputEmail}
          />
          <img className="iconBlock" src="Secure.png" />
          <input
            onChange={handleInputPassword}
            className="inputLoginPassword"
            type="text"
            placeholder="Mật khẩu"
            value={inputPassword}
          />
          <button className="btnLogin">Đăng nhập</button>
        </form>
        <button className="btnBackIndex" onClick={() => {}}>
          Trở về trang chủ
        </button>
        <button
          className="btnGoRegister"
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
}
