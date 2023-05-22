
import ReactDOM from 'react-dom/client';
import './components/Button/Button.css'
import MenuBar from './components/MenuBar/MenuBar';
import { AddThietBi } from './components/ThietBi/AddThietBi/AddThietBi';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
      <AddThietBi></AddThietBi>

  </div>
)
