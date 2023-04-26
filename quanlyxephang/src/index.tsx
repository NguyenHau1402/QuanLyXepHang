import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './pages/Account/Login';
import Logoalta from './components/Logo';
import './styles/Logo.css'
import Button1 from './components/Button';
import './styles/Button.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    
    <Logoalta></Logoalta>
    <Button1 text='Đăng nhập'/>
  </div>
)
