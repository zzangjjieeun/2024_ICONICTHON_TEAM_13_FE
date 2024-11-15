import React from 'react';
import './Post.css';
import { FaBell, FaUser, FaCog, FaThumbsUp, FaShareAlt, FaBookmark, FaPlus, FaEdit } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import professorImg from './professorimg.png';
import logo from './logo.png';

const Post = () => {
    const navigate = useNavigate();
    const handleAddPost = () => {
        navigate('/add-post');
    };

    const handleEditPost = () => {
        navigate('/edit');
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div>
            <header className="header">
                <img src={logo} alt="로고" className="logo" onClick={handleLogoClick} />
                <div className="icons">
                    <FaMessage className="icon" title="메시지" />
                    <FaBell className="icon" title="알림" />
                    <FaUser className="icon" title="개인 페이지" />
                    <FaCog className="icon" title="설정" />
                </div>
            </header>

            <main className="container">
                <div className="profile-section">
                    <img src={professorImg} alt="프로필 사진" className="profile-pic" />
                    <h2 className="professor-name">정한솔 교수님</h2>
                </div>
                <div className="post-content">
                    <div className="post-header">
                        <h3 className="post-title">일상의 소소한 행복</h3>
                        <FaPlus className="header-icon" title="추가" onClick={handleAddPost} />
                        <FaEdit className="header-icon" title="수정" onClick={handleEditPost} />
                    </div>
                    <p className="content-text">
                        오늘도 일상 속에서 찾아낸 작은 행복들로 하루가 채워집니다. 아침 일찍 산책을 하며 느낀 신선한 공기,
                        지나가는 바람에 흔들리는 나무의 소리, 그리고 따뜻한 커피 한 잔이 주는 위로. 이런 순간들이
                        쌓여 일상이 더욱 풍요로워지는 것 같습니다. 바쁜 일상 속에서도 잠시 멈춰서 작은 것들에
                        감사하는 시간을 가져보세요. 이런 시간이 우리에게 새로운 활력을 불어넣어 줍니다.
                        하루의 마무리로 노을을 보며 느꼈던 평온함은 아직도 잊을 수가 없네요.
                    </p>
                    <div className="actions">
                        <FaThumbsUp className="action-icon" title="좋아요" />
                        <FaShareAlt className="action-icon" title="공유" />
                        <FaBookmark className="action-icon" title="북마크" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Post;
