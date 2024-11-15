import React from 'react';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';
import alarm from './alarm.png';
import mainimg1 from './mainimg1.png';
import mainimg2 from './mainimg2.png';
import mainimg3 from './mainimg3.png';
import personalPage from './personal_page.png';
import sendMail from './sendmail.png';
import setting from './setting.png';
import logo from './logo.png'; // logo.png 추가

const MainPage = () => {
    const navigate = useNavigate();

    const handleTagRemove = (e) => {
        e.target.closest('.tag').remove();
    };

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" onClick={() => navigate('/')} />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="검색" />
                </div>
                <div className="icons">
                    <img src={sendMail} alt="메일" className="icon" onClick={() => navigate('/chatroomlist')} />
                    <img src={alarm} alt="알림" className="icon" />
                    <img src={personalPage} alt="개인 페이지" className="icon" onClick={() => navigate('/login')} />
                    <img src={setting} alt="설정" className="icon" />
                </div>
            </header>
            <main className="container">
                <h2>오늘의 인기글</h2>
                <div className="popular-images">
                    <a onClick={() => navigate('/postlist')}>
                        <img src={mainimg1} alt="Image 1" className="popular-image" />
                    </a>
                    <a onClick={() => navigate('/postlist')}>
                        <img src={mainimg2} alt="Image 2" className="popular-image" />
                    </a>
                    <a onClick={() => navigate('/postlist')}>
                        <img src={mainimg3} alt="Image 3" className="popular-image" />
                    </a>
                </div>

                <h2>다양한 관심사를 접해보세요!</h2>
                <div className="tags">
                    <div className="tag">
                        운동 <button className="remove-tag" onClick={handleTagRemove}>×</button>
                    </div>
                    <div className="tag">
                        독서 <button className="remove-tag" onClick={handleTagRemove}>×</button>
                    </div>
                    <div className="tag">
                        테니스 <button className="remove-tag" onClick={handleTagRemove}>×</button>
                    </div>
                    <div className="tag">
                        등산 <button className="remove-tag" onClick={handleTagRemove}>×</button>
                    </div>
                    <div className="tag">
                        다른 관심사 더 찾아보기! <button className="remove-tag" onClick={handleTagRemove}>×</button>
                    </div>
                </div>

                <h2>다양한 교수님을 만나보세요!</h2>
                <div className="professors">
                    {[...Array(16)].map((_, i) => (
                        <div
                            key={i}
                            className="professor-card"
                            onClick={() => navigate('/professor-list')}  // 모든 카드가 /professor-list로 이동
                        >
                            교수님 성함<br /><small>Title Description</small>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MainPage;
