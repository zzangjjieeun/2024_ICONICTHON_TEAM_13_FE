import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import RegisterStudent from './RegisterStudent/RegisterStudent';
import RegisterProfessor from './RegisterProfessor/RegisterProfessor';
import ChatRoomList from './ChatRoomList/ChatRoomList';
import ChatRoom from './ChatRoom/ChatRoom';
import Login from './Login/Loign';
import ProfessorPage from './ProfessorPage/ProfessorPage';
import ProfessorList from './ProfessorList/ProfessorList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/register-professor" element={<RegisterProfessor />} />
        <Route path="/chatroomlist" element={<ChatRoomList fullWidth />} />
        <Route path="/chatroom/:chatroomId" element={<ChatRoom fullWidth />} />
        <Route path="/professor-page" element={<ProfessorPage />} /> 
        <Route path="/professor-list" element={<ProfessorList />} /> 
      </Routes>
    </Router>
  );
}

export default App;