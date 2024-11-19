import { Route, Routes } from 'react-router';
import './App.css';
import Addworks from './Components/Addworks';
import Auth from './Components/Auth';
import Home from './Components/Home';
import Start from './Components/Start';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/add' element={<Addworks/>} />
      </Routes>
    </div>
  );
}

export default App;
