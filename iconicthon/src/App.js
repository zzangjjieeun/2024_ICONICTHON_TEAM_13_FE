// App.js
import React, { useState } from "react";
import "./editpost.css";

function App() {
    const [content, setContent] = useState("");

    const publishPost = () => {
        alert("게시글이 발행되었습니다.");
    };

    return (
        <div>
            <header className="header">
                <div className="logo">로고(추가 예정)</div>
                <div className="icons">
                    <img src="sendmail.png" alt="메일 보내기" className="icon" />
                    <img src="alarm.png" alt="알림" className="icon" />
                    <img src="personal_page.png" alt="개인 페이지" className="icon" />
                    <img src="setting.png" alt="설정" className="icon" />
                </div>
            </header>

            <main className="container">
                <div className="profile-section">
                    <img src="professorimg.png" alt="프로필 사진" className="profile-pic" />
                    <h2 className="professor-name">교수</h2>
                </div>
                <form className="post-form" onSubmit={(e) => e.preventDefault()}>
                    <textarea
                        id="content"
                        placeholder="내용을 입력하세요."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="buttons">
                        <button type="button" onClick={publishPost}>
                            발행
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

import React from 'react';
import AddPostPage from './AddPostPage/AddPostPage';

function App() {
    return (
        <div className="App">
            <AddPostPage />
        </div>
    );
}


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import RegisterStudent from './RegisterStudent/RegisterStudent';
import RegisterProfessor from './RegisterProfessor/RegisterProfessor';
import ChatRoomList from './ChatRoomList/ChatRoomList';
import ChatRoom from './ChatRoom/ChatRoom';
import Login from './Login/Login';
import ProfessorPage from './ProfessorPage/ProfessorPage';
import HomePage from './HomePage/HomePage';
import AddPostPage from './AddPostPage/AddPostPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-student" element={<RegisterStudent />} />
                <Route path="/register-professor" element={<RegisterProfessor />} />
                <Route path="/chat-room-list" element={<ChatRoomList />} />
                <Route path="/chat-room" element={<ChatRoom />} />
                <Route path="/login" element={<Login />} />
                <Route path="/professor-page" element={<ProfessorPage />} />
                <Route path="/add-post" element={<AddPostPage />} />
            </Routes>
        </Router>
    );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import RegisterStudent from './RegisterStudent/RegisterStudent';
import RegisterProfessor from './RegisterProfessor/RegisterProfessor';
import ChatRoomList from './ChatRoomList/ChatRoomList';
import ChatRoom from './ChatRoom/ChatRoom';
import Login from './Login/Login';
import ProfessorPage from './ProfessorPage/ProfessorPage';
import HomePage from './HomePage/HomePage';
import AddPostPage from './AddPostPage/AddPostPage';
import EditPostPage from './EditPostPage/EditPostPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-student" element={<RegisterStudent />} />
                <Route path="/register-professor" element={<RegisterProfessor />} />
                <Route path="/chat-room-list" element={<ChatRoomList />} />
                <Route path="/chat-room" element={<ChatRoom />} />
                <Route path="/login" element={<Login />} />
                <Route path="/professor-page" element={<ProfessorPage />} />
                <Route path="/add-post" element={<AddPostPage />} />
                <Route path="/edit-post" element={<EditPostPage />} />
            </Routes>
        </Router>
    );
}

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import RegisterStudent from './RegisterStudent/RegisterStudent';
import RegisterProfessor from './RegisterProfessor/RegisterProfessor';
import ChatRoomList from './ChatRoomList/ChatRoomList';
import ChatRoom from './ChatRoom/ChatRoom';
import Login from './Login/Login';
import ProfessorPage from './ProfessorPage/ProfessorPage';
import HomePage from './HomePage/HomePage';
import AddPostPage from './AddPostPage/AddPostPage';
import EditPostPage from './EditPostPage/EditPostPage';
import ProfessorPostsPage from './ProfessorPostsPage/ProfessorPostsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-student" element={<RegisterStudent />} />
                <Route path="/register-professor" element={<RegisterProfessor />} />
                <Route path="/chat-room-list" element={<ChatRoomList />} />
                <Route path="/chat-room" element={<ChatRoom />} />
                <Route path="/login" element={<Login />} />
                <Route path="/professor-page" element={<ProfessorPage />} />
                <Route path="/add-post" element={<AddPostPage />} />
                <Route path="/edit-post" element={<EditPostPage />} />
                <Route path="/professor-posts" element={<ProfessorPostsPage />} />
            </Routes>
        </Router>
    );
}

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import RegisterStudent from './RegisterStudent/RegisterStudent';
import RegisterProfessor from './RegisterProfessor/RegisterProfessor';
import ChatRoomList from './ChatRoomList/ChatRoomList';
import ChatRoom from './ChatRoom/ChatRoom';
import Login from './Login/Login';
import ProfessorPage from './ProfessorPage/ProfessorPage';
import HomePage from './HomePage/HomePage';
import AddPostPage from './AddPostPage/AddPostPage';
import EditPostPage from './EditPostPage/EditPostPage';
import ProfessorPostsPage from './ProfessorPostsPage/ProfessorPostsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-student" element={<RegisterStudent />} />
                <Route path="/register-professor" element={<RegisterProfessor />} />
                <Route path="/chat-room-list" element={<ChatRoomList />} />
                <Route path="/chat-room" element={<ChatRoom />} />
                <Route path="/login" element={<Login />} />
                <Route path="/professor-page" element={<ProfessorPage />} />
                <Route path="/add-post" element={<AddPostPage />} />
                <Route path="/edit-post" element={<EditPostPage />} />
                <Route path="/professor-posts" element={<ProfessorPostsPage />} />
            </Routes>
        </Router>
    );
}


