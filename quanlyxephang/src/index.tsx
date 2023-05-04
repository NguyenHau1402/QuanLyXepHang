import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './pages/Account/Login';
import Logoalta from './components/Logo';

import Button1 from './components/Button';
import './styles/Button.css'
import Input from './components/Input';
import './styles/Input.css'

import './styles/MenuBar.css'
import Dashboard from './components/MenuBar';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <Dashboard></Dashboard>

  </div>
)
