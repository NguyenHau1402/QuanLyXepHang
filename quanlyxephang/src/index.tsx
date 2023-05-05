
import ReactDOM from 'react-dom/client';
import './components/Button/Button.css'
import MenuBar from './components/MenuBar/MenuBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    
    <MenuBar></MenuBar>
  </div>
)
