import React from 'react';
import './EditPost.css';

const EditPost = () => {
    const publishPost = () => {
        alert('게시글이 발행되었습니다.');
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

