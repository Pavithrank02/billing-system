
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import {About} from './pages/About';
import {Setting} from './pages/Setting';
import {Customer} from './pages/Customer';
import { Dashboard } from './pages/Dashboard';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/setting' element={<Setting />}/>
      <Route path='/customer' element={<Customer />}/>

    </Routes>
    
  );
}

export default App;
