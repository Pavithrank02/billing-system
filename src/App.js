
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import {Setting} from './pages/Setting';
import {Customer} from './pages/Customer';
import { Dashboard } from './pages/Dashboard';
import './App.css';
import { Analytics } from './pages/Analytics';
import Invoice from './pages/Invoice';
import { Billing } from './pages/Billing';
import UserTable from './components/UserInfo';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/billing' element={<Invoice />}/>
      <Route path='/setting' element={<Setting />}/>
      <Route path='/customer' element={<Customer />}/>
      <Route path='/analytics' element={<Analytics />}/>
      <Route path='/newquote' element={<Billing />}/>
      <Route path='/user' element={<UserTable />}/>


    </Routes>
    
  );
}

export default App;
