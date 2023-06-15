import React, { ChangeEvent, useState } from 'react';
import { Input } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

interface ShowPassProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
  const ShowPass: React.FC<ShowPassProps> = ({ onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? 'password' : 'text');
  };

  return (
    <div>
      <div>
        <label htmlFor="password">Mật khẩu:</label>
      </div>
      <div>
        <Input.Password
          id="password"
          placeholder="Nhập mật khẩu"
          onChange={onChange}
          iconRender={(visible) =>
            visible ? (
              <EyeOutlined onClick={togglePasswordVisibility} />
            ) : (
              <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
            )
          }
          type={inputType}
          style={{ width: '405px', height: '50px' }}
        />
      </div>
    </div>
  );
};

export default ShowPass;
