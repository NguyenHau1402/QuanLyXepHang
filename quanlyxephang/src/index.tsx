
import ReactDOM from 'react-dom/client';
import './components/Button/Button.css'

import { Login } from './pages/Account/Login/Login';
import Chart from './pages/Account/DashBoard/DashBoard'
import MenuBar from './components/MenuBar/MenuBar';

import ThietBi from './pages/ThietBi/ThietBi';
import Calendar from './components/Calendar/Calendar';
import DatePicker from './components/Calendar/DatePicker';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <ThietBi></ThietBi>
  </div>
)
