import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';


function App() {

  const url = 'http://localhost:5000';
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));

  useEffect(() => {
    socket.connect();
  }, [])


  return (
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Login></Login>} path="loginpage" />
          <Route element={<Signup></Signup>} path="signup" />
          <Route element={<Chat socket={socket}></Chat>} path="chat" />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
