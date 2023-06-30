
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import {About} from './components/About';
import {Setting} from './components/Setting';
import {Customer} from './components/Customer';
import { Dashboard } from './components/Dashboard';
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
