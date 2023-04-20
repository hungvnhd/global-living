import { useState } from "react";
export default function Reister() {
  const options = [
    { value: "", text: "Đại lý" },
    { value: "AZGLOBAL", text: "AZGLOBAL" },
    { value: "EURO HOLDINGS", text: "EURO HOLDINGS" },
    { value: "NHÀ ĐẤT THỦ ĐÔ", text: "NHÀ ĐẤT THỦ ĐÔ" },
    { value: "FOUR HOMES", text: "FOUR HOMES" },
    { value: "ĐẤT GỐC", text: "ĐẤT GỐC" },
    { value: "NEW CITY", text: "NEW CITY" },
    { value: "SAIGON CENTER REAL", text: "SAIGON CENTER REAL" },
    { value: "KHÁC", text: "KHÁC" },
  ];
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(options[0].value);
  const handleChangeOptions = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="sign-up__container">
      <div className="sign-up__logo">
        <img src="/img/Mockup LOGO1 4.png" alt="logo" />
      </div>
      <div className="sign-up__header">
        <div>
          <p>BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ</p>
          <p>GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI</p>
        </div>
      </div>
      <div className="sign-up__title">
        <p>Đăng ký CTV/Sale</p>
      </div>
      <div className="sign-up__form-container">
        <form
          action=""
          style={{
            width: "50%",
            margin: "auto",
            border: "2px solid rgba(246, 181, 49, 1)",
            padding: "1%",
          }}
        >
          <p>
            <input
              type="text"
              placeholder="Họ và tên"
              className="sign-up__form-container-input"
            />
          </p>
          <p>
            <input type="email" placeholder="Email" />
          </p>
          <p>
            <input type="text" placeholder="Số điện thoại" />
          </p>
          <p>
            <input type="text" placeholder="Khu vực" />
          </p>
          <p>
            <select
              value={selected}
              onChange={handleChangeOptions}
              className="form-option"
            >
              {options.map((e) => {
                return (
                  <option key={e.value} value={e.value}>
                    {e.text}
                  </option>
                );
              })}
            </select>
          </p>
          <p>
            <input type="password" placeholder="Mật khẩu" />
          </p>
          <button className="form-button">Đăng ký</button>
        </form>
      </div>
      <div className="sign-up__footer">
        <span>Đã có tài khoản?</span>
        <button>Đăng nhập ngay</button>
      </div>
    </div>
  );
}
