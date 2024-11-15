import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChatRoomList from '../ChatRoomList/ChatRoomList';
import './ChatRoom.css';
import logo from './logo.png';

function ChatRoom() {
    const { chatroomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [username, setUsername] = useState('');
    const socketRef = useRef(null);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/'); // 루트 경로로 이동
    };

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username') || `user_${Math.floor(Math.random() * 10000)}`;
        setUsername(storedUsername);

        socketRef.current = new WebSocket("ws://3.37.18.18:8080/chats");

        socketRef.current.onopen = () => {
            console.log('WebSocket 연결이 열렸습니다.');

            socketRef.current.send(
                JSON.stringify({
                    type: 'JOIN',
                    payload: {
                        chatRoomId: chatroomId,
                        username: storedUsername,
                    }
                })
            );
        };

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'TALK') {
                setMessages(prevMessages => [...prevMessages, data.payload]);
            }
        };

        socketRef.current.onclose = () => {
            console.log('WebSocket 연결이 닫혔습니다.');
        };

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, [chatroomId]);

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;

        const newMessage = { chatRoomId: chatroomId, username: username, content: inputMessage };
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setInputMessage('');

        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(
                JSON.stringify({
                    type: 'TALK',
                    payload: newMessage
                })
            );
        }
    };

    return (
        <div className="chatroom-container">
            <header className="header">
                <img src={logo} alt="로고" className="logo" onClick={handleLogoClick} />
            </header>
            <ChatRoomList />
            <div className="chatroom">
                <h2>채팅방: {chatroomId}</h2>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">
                            <strong>{msg.username}</strong>: {msg.content}
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="메시지를 입력하세요..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>전송</button>
                </div>
            </div>
        </div>
    );
}

export default ChatRoom;
