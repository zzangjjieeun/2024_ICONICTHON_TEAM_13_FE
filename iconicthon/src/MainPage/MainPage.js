import React from 'react';
import './HomePage.css';

const MainPage = () => {
    const handleTagRemove = (e) => {
        e.target.closest('.tag').remove();
    };

    return (
        <div>
            <header className="header">
                <div className="logo">로고</div>
                <div className="search-bar">
                    <input type="text" placeholder="검색" />
                </div>
                <div className="icons">
                    <img src="sendmail.png" alt="메일" className="icon" />
                    <img src="alarm.png" alt="알림" className="icon" />
                    <img src="personal_page.png" alt="개인 페이지" className="icon" />
                    <img src="setting.png" alt="설정" className="icon" />
                </div>
            </header>
            <main className="container">
                <h2>오늘의 인기글</h2>
                <div className="popular-images">
                    <a href="링크1.html">
                        <img src="mainimg1.png" alt="Image 1" className="popular-image" />
                    </a>
                    <a href="링크2.html">
                        <img src="mainimg2.png" alt="Image 2" className="popular-image" />
                    </a>
                    <a href="링크3.html">
                        <img src="mainimg3.png" alt="Image 3" className="popular-image" />
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
                        <a href={`professor${(i % 4) + 1}.html`} className="professor-card" key={i}>
                            교수님 성함<br /><small>Title Description</small>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MainPage;

