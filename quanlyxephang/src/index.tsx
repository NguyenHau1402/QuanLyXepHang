
import ReactDOM from 'react-dom/client';
import './components/Button/Button.css'

import { Login } from './pages/Account/Login/Login';
import Chart from './pages/Account/DashBoard/DashBoard'
import MenuBar from './components/MenuBar/MenuBar';


import Calendar from './components/Calendar/Calendar';
import DatePicker from './components/Calendar/DatePicker';

import DSDichVu from './components/DichVu/DichVu';
import DSCapSo from './components/CapSo/CapSo';
import DSBaoCao from './components/BaoCao/BaoCao';
import { TrangChu } from './pages/TrangChu/TrangChu';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <MenuBar></MenuBar>
  </div>
)
