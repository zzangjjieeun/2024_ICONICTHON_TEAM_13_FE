import React from 'react';
import './EditPost.css';

// 이미지 import
import sendmailIcon from './sendmail.png';
import alarmIcon from './alarm.png';
import personalPageIcon from './personal_page.png';
import settingIcon from './setting.png';
import professorImg from './professorimg.png';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
    const publishPost = () => {
        alert('게시글이 발행되었습니다.');
    };
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div>
            <header className="header">
                <img src={logo} alt="로고" className="logo" onClick={handleLogoClick} />
                <div className="icons">
                    <img src={sendmailIcon} alt="메일 보내기" className="icon" />
                    <img src={alarmIcon} alt="알림" className="icon" />
                    <img src={personalPageIcon} alt="개인 페이지" className="icon" />
                    <img src={settingIcon} alt="설정" className="icon" />
                </div>
            </header>

            <main className="container">
                <div className="profile-section">
                    <img src={professorImg} alt="프로필 사진" className="profile-pic" />
                    <h2 className="professor-name">김동국 교수님</h2>
                </div>
                <form className="post-form">
                    <textarea id="content" placeholder="내용을 입력하세요." />
                    <div className="buttons">
                        <button type="button" onClick={publishPost}>발행</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default EditPost;
