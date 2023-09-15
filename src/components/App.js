// import {Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import Navbar from './Navbars';
import HabitDay from "./HabitListDate";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import AddnewHabbit from './HabitAdd';


/*  
  Routes and Route component from react-router-dom package 
  is used to navigate to Detail View and WeekView
*/



// App component
function App() {

  return (
   

      
         
  
    <div className="App">
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<AddnewHabbit/>}/>
        <Route path="/habitweekday" element={<HabitDay />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
 
  );
}

// export App component
export default App;
