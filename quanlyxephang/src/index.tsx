
import ReactDOM from 'react-dom/client';
import './components/Button/Button.css'
import MenuBar from './components/MenuBar/MenuBar';
import { AddThietBi } from './components/ThietBi/AddThietBi/AddThietBi';
import { TrangChu } from './pages/TrangChu/TrangChu';
import DSBaoCao from './components/BaoCao/BaoCao';
import { Login } from './pages/Account/Login/Login';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <DSBaoCao></DSBaoCao>

  </div>
)
