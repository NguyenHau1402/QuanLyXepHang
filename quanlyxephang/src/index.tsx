
import ReactDOM from 'react-dom/client';
import './components/Button/Button.css'
import MenuBar from './components/MenuBar/MenuBar';
import { AddThietBi } from './components/ThietBi/AddThietBi/AddThietBi';
import { TrangChu } from './pages/TrangChu/TrangChu';
import DSBaoCao from './components/BaoCao/BaoCao';
import { Login } from './pages/Account/Login/Login';
import MyTable from './components/ThietBi/TabThietBi';
import YourComponent from './components/ThietBi/TabThietBi';
import Loggin from './pages/Account/Login/llogin';
import Logout from './components/Logout/Logout';
import ThongTinThietBi from './components/ThietBi/ThongTinThietBi/ThongTinThietBi';
import ThongTinThietBia from './components/ThietBi/ThongTinThietBi/abc';
import { AddDichVu } from './components/DichVu/AddDichVu/AddDichVu';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    
  <AddDichVu></AddDichVu>
  </div>
)
