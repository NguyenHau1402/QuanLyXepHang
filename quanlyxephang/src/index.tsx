
import ReactDOM from 'react-dom/client';
import './components/Button/Button.css'

import { Login } from './pages/Account/Login/Login';
import Sample from './pages/Account/DashBoard/DashBoard';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
   
    <Sample></Sample>
  </div>
)
