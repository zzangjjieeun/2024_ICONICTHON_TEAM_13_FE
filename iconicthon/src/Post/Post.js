import React, { useState } from 'react';
import './Poste.css';

const Post = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const posts = document.querySelectorAll(".post-item");
        posts.forEach(post => {
            const postText = post.textContent.toLowerCase();
            post.style.display = postText.includes(searchTerm.toLowerCase()) ? 'flex' : 'none';
        });
    };

    return (
        <div>
            <header className="header">
                <div className="logo">로고(추가 예정)</div>
                <div className="icons">
                    <img src="sendmail.png" alt="공유" className="icon" />
                    <img src="alarm.png" alt="알림" className="icon" />
                    <img src="personal_page.png" alt="개인 페이지" className="icon" />
                    <img src="setting.png" alt="설정" className="icon" />
                </div>
            </header>

            <main className="container">
                <aside className="sidebar">
                    <i className="icon menu"></i>
                </aside>
                <section className="main-content">
                    <div className="search-bar">
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="검색어를 입력하세요."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className="post-list">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div className="post-item" key={index}>
                                <i className="icon star"></i>
                                <div className="post-text">
                                    <h3>{index % 2 === 0 ? "이번 연구 주제" : "학석사 연계 과정"}</h3>
                                    <p>Menu description.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button>← Previous</button>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>...</span>
                        <span>67</span>
                        <span>68</span>
                        <button>Next →</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Post;
