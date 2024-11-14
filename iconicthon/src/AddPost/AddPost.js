import React from 'react';
import './AddPost.css';

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

    return (
        <div>
            <header className="header">
                <div className="logo">로고(추가예정)</div>
                <div className="icons">
                    <img src="sendmail.png" alt="메일 보내기" className="icon" />
                    <img src="alarm.png" alt="알림" className="icon" />
                    <img src="personal_page.png" alt="개인 페이지" className="icon" />
                    <img src="setting.png" alt="설정" className="icon" />
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
                        <img src="upload.png" alt="업로드" />
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
