
import ReactDOM from 'react-dom/client';
import './components/Button/Button.css'
import DatePicker from './components/Calendar/DatePicker';
import Calendar from './components/Calendar/Calendar';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <DatePicker />
   
  </div>
)
