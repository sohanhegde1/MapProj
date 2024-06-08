import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import './App.css';
import { useEffect, useState } from 'react';
import Signup from './signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <BrowserRouter>
    <div className="App">
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn} setEmail={setEmail}/>}/>
        </Routes>
     
  
    </div>
     </BrowserRouter>
  )
}

export default App