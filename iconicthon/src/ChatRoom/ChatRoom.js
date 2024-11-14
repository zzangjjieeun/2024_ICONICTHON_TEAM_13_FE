import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ChatRoomList from '../ChatRoomList/ChatRoomList';
import './ChatRoom.css';

function ChatRoom() {
    const { chatroomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [username, setUsername] = useState(''); // 사용자 이름 상태 추가
    const socketRef = useRef(null);

    useEffect(() => {
        // localStorage에서 사용자 이름 가져오기
        const storedUsername = sessionStorage.getItem('username') || `user_${Math.floor(Math.random() * 10000)}`;
        setUsername(storedUsername);

        // WebSocket 초기화
        socketRef.current = new WebSocket("ws://3.37.18.18:8080/chats");

        socketRef.current.onopen = () => {
            console.log('WebSocket 연결이 열렸습니다.');

            // 채팅방에 입장하는 JOIN 메시지 전송
            socketRef.current.send(
                JSON.stringify({
                    type: 'JOIN',
                    payload: {
                        chatRoomId: chatroomId,
                        username: storedUsername, // 저장된 사용자 이름 사용
                    }
                })
            );
        };

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'TALK') {
                // 메시지를 수신하면 상태 업데이트
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
        if (inputMessage.trim() === '') return; // 빈 메시지는 전송하지 않음

        // 1. 로컬 상태 업데이트 (먼저 화면에 메시지 표시)
        const newMessage = { chatRoomId: chatroomId, username: username, content: inputMessage };
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setInputMessage(''); // 입력란 초기화

        // 2. WebSocket을 통해 서버로 메시지 전송
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
