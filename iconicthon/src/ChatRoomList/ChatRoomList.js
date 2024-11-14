import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatRoomList.css';
import profileImage from './profile-image.png';

function ChatRoomList({ fullWidth }) {
    const [chatRooms, setChatRooms] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const socketRef = useRef(null);
    const username = sessionStorage.getItem('username') || 'Guest';

    useEffect(() => {
        // 초기 더미 채팅방 설정
        const dummyChatRooms = [
            {
                chatroomId: 'abc123',
                chatroomName: '이철 교수님',
                lastMessage: '등산할 사람 모집 중',
                lastUpdated: '2024-11-14T16:31:56',
            },
            {
                chatroomId: 'xyz789',
                chatroomName: '안종석 교수님',
                lastMessage: '학생들이 시험을 너무 못봤네요...',
                lastUpdated: '2024-11-13T15:00:00',
            },
        ];
        setChatRooms(dummyChatRooms);
    }, []);

    const handleChatRoomClick = (chatroomId) => {
        navigate(`/chatroom/${chatroomId}`);
    };

    const formatRelativeTime = (dateTime) => {
        const now = new Date();
        const lastUpdatedDate = new Date(dateTime);
        const diffMs = now - lastUpdatedDate;
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffDays >= 1) return `${diffDays}일 전`;
        if (diffHours >= 1) return `${diffHours}시간 전`;
        if (diffMins >= 1) return `${diffMins}분 전`;
        return '방금 전';
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddChatRoom = () => {
        // WebSocket 연결을 설정하고 + 버튼을 누를 때마다 연결을 시도합니다.
        socketRef.current = new WebSocket("ws://3.37.18.18:8080/chats");

        socketRef.current.onopen = () => {
            console.log('WebSocket 연결이 열렸습니다.');
        };

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'NEW_ID') {
                // 서버로부터 NEW_ID 응답을 받은 경우, chatRoomId를 사용하여 새로운 방에 입장
                const chatRoomId = data.payload.chatRoomId;

                // 채팅방을 만들기 위한 ENTER 메시지를 서버에 전송
                socketRef.current.send(
                    JSON.stringify({
                        type: 'ENTER',
                        payload: {
                            chatRoomId: chatRoomId,
                            username: username, // 실제 사용자 이름으로 대체 가능
                        },
                    })
                );

                // 새 채팅방을 chatRooms에 추가
                const newChatRoom = {
                    chatroomId: chatRoomId.toString(),
                    chatroomName: '새로운 채팅방',
                    lastMessage: data.payload.content,
                    lastUpdated: new Date().toISOString(),
                };
                setChatRooms((prevChatRooms) => [...prevChatRooms, newChatRoom]);
            }
        };

        socketRef.current.onclose = () => {
            console.log('WebSocket 연결이 닫혔습니다.');
        };
    };

    const filteredChatRooms = chatRooms.filter(room =>
        room.chatroomName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`chatroom-list ${fullWidth ? 'full-width' : 'narrowed'}`}>
            <h2>채팅방 목록 - {username}님 환영합니다!</h2>
            <div className="search-container">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="이름을 검색하세요..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="add-chatroom-button" onClick={handleAddChatRoom}>+</button>
            </div>
            <ul>
                {filteredChatRooms.map((chatRoom) => (
                    <li
                        key={chatRoom.chatroomId}
                        className="chatroom-item"
                        onClick={() => handleChatRoomClick(chatRoom.chatroomId)}
                    >
                        <img src={profileImage} alt="Profile" className="profile-image" />
                        <div className="chatroom-info">
                            <h3>{chatRoom.chatroomName}</h3>
                            <p>마지막 메시지: {chatRoom.lastMessage}</p>
                            <p>업데이트: {formatRelativeTime(chatRoom.lastUpdated)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatRoomList;
