import React from 'react';
import './AddPost.css';

// 이미지 import
import sendmailIcon from './sendmail.png';
import alarmIcon from './alarm.png';
import personalPageIcon from './personal_page.png';
import settingIcon from './setting.png';
import uploadIcon from './upload.png';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const saveDraft = () => {
        alert('게시글이 임시저장되었습니다.');
    };

    const publishPost = () => {
        alert('게시글이 발행되었습니다.');
    };

    const handleImageUpload = () => {
        document.getElementById('imageUpload').click();
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
                <form className="post-form">
                    <label htmlFor="title">제목</label>
                    <input type="text" id="title" placeholder="제목을 입력하세요." />

                    <label htmlFor="content">내용</label>
                    <textarea id="content" placeholder="내용을 입력하세요." />

                    <label htmlFor="imageUpload">사진 업로드</label>
                    <div className="upload-icon" onClick={handleImageUpload}>
                        <img src={uploadIcon} alt="업로드" />
                        <input type="file" id="imageUpload" style={{ display: 'none' }} />
                    </div>

                    <div className="buttons">
                        <button type="button" onClick={saveDraft}>임시저장</button>
                        <button type="button" onClick={publishPost}>발행</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default AddPost;
