import React, { useState } from 'react';
import './PostList.css';

const PostList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const posts = [
        { id: 1, title: '이번 연구 주제', description: 'Menu description.' },
        { id: 2, title: '학석사 연계 과정', description: 'Menu description.' },
        { id: 3, title: '이번 연구 주제', description: 'Menu description.' },
        { id: 4, title: '학석사 연계 과정', description: 'Menu description.' },
        { id: 5, title: '이번 연구 주제', description: 'Menu description.' },
        { id: 6, title: '학석사 연계 과정', description: 'Menu description.' },
        { id: 7, title: '이번 연구 주제', description: 'Menu description.' },
        { id: 8, title: '학석사 연계 과정', description: 'Menu description.' },
    ];

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                            placeholder="검색어를 입력하세요."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={() => setSearchTerm(searchTerm)}>Search</button>
                    </div>
                    <div className="post-list">
                        {filteredPosts.map(post => (
                            <div className="post-item" key={post.id}>
                                <i className="icon star"></i>
                                <div className="post-text">
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
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

export default PostList;
