import React, { useState, useEffect } from "react";
import { loginWithEmailAndPassword } from "../../../firebase/firebase";
import { TrangChu } from "../../TrangChu/TrangChu";
import Logoalta from "../../../components/Logo/Logo-MenuBar/Logo";
import Input from "../../../components/Input/Input";
import { Button } from "antd";
import Button1 from "../../../components/Button/Button";
import banner from './Banner/Banner.svg'
import '../Login/Login.css'
import AntdInput from 'antd/lib/input';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import ShowPass from "../../../components/Input/ShowPass";


const Loggin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
    if (storedLoggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    setLoginError("");

    try {
      const success = await loginWithEmailAndPassword(email, password);
      if (success) {
        alert("Đăng nhập thành công");
        localStorage.setItem("isLoggedIn", "true");

        setIsLoggedIn(true);
      } else {
        setLoginError("Sai mật khẩu hoặc tài khoản không tồn tại");
      }
    } catch (error) {
      setLoginError("Đăng nhập thất bại");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <TrangChu />
        </div>
      ) : (
        <div className='background'>
          <div className='leftLogo'>
            <div className="logo-location">
              <Logoalta></Logoalta>
            </div>
            <div className='inputname-location'>
              <Input
                text={''}
                label={'Tên đăng nhập *'}
                placeholder={'Tên của bạn...'}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                style={{
                  width: '392px',
                }}
              />
            </div>
            <div className='inputpass-location'>
              <ShowPass
                onChange={(e) => {
                  setPassword(e.target.value);
                  // Các xử lý khác sau khi thay đổi giá trị mật khẩu
                }}
              />

            </div>
            <div className="forgot-pass">
              <Button type="link" danger>
                Quên mật khẩu?
              </Button>
            </div>
            <div className='button-login'>
              <Button1 type='primary' text='Đăng nhập' onClick={handleLogin}></Button1>
            </div>
          </div>

          <div className='banner'>
            <div className="banner-text1">
              <p>Hệ thống</p>
            </div>
            <div className="banner-text2">
              <p>QUẢN LÝ XẾP HÀNG</p>
            </div>
            <div className='banner-img2'>
              <img alt='banner' src={banner}></img>
            </div>
          </div>

          {loginError && <p>{loginError}</p>}
        </div>
      )}
    </div>
  );
};

export default Loggin;
