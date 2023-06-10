import React, { useState, useEffect } from "react";
import { loginWithEmailAndPassword } from "../../../firebase/firebase";
import { TrangChu } from "../../TrangChu/TrangChu";

const Loggin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập từ localStorage khi component được tạo
    const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
    if (storedLoggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    setLoginError(""); // Reset login error

    try {
      const success = await loginWithEmailAndPassword(email, password);
      if (success) {
        // Đăng nhập thành công
        alert("Đăng nhập thành công");

        // Lưu trạng thái đăng nhập vào localStorage
        localStorage.setItem("isLoggedIn", "true");

        setIsLoggedIn(true);
      } else {
        // Đăng nhập thất bại
        setLoginError("Sai mật khẩu hoặc tài khoản không tồn tại");
      }
    } catch (error) {
      // Xảy ra lỗi đăng nhập
      setLoginError("Đăng nhập thất bại");
    }
  };

  const handleLogout = () => {
    // Xóa trạng thái đăng nhập từ localStorage
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
        <>
          <h2>Đăng nhập</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Đăng nhập</button>
          {loginError && <p>{loginError}</p>}
        </>
      )}
    </div>
  );
};

export default Loggin;
