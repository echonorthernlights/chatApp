import { Button } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";
import Chats from './pages/Chats';
import Home from './pages/Home';
import Login from './pages/Login';
import "./App.css"
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
