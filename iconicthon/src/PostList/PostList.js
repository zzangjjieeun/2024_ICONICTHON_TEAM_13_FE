import React, { useState } from 'react';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';
import './PostList.css';
import { FaSearch, FaBell, FaUserCircle, FaCog, FaPlus } from 'react-icons/fa';

function PostList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };

    const posts = [
        {
            id: 1,
            title: '가을 단풍 여행 후기',
            description: '주말에 다녀온 단풍 여행, 사진과 함께 공유합니다.',
            author: '김수진 교수'
        },
        {
            id: 2,
            title: '최근 읽은 책 추천',
            description: '감명 깊었던 책 몇 권을 추천드립니다.',
            author: '이재현 교수'
        },
        {
            id: 3,
            title: '오늘의 커피 한 잔',
            description: '아침에 마신 커피가 유난히 맛있었던 날.',
            author: '박민호 교수'
        },
        {
            id: 4,
            title: '일상의 소소한 행복',
            description: '작은 일상에서 찾은 행복을 나눕니다.',
            author: '정한솔 교수'
        },
        {
            id: 5,
            title: '2024년 사이버 보안 위협',
            description: '최신 사이버 보안 동향과 예방책.',
            author: '한연우 교수'
        },
        {
            id: 6,
            title: '데이터 시각화 기법',
            description: '복잡한 데이터 세트를 효과적으로 시각화하는 방법.',
            author: '권미래 교수'
        },
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePostClick = () => {
        navigate('/post');
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const displayedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="post-list-container">
            <header className="post-list-header">
                <img src={logo} alt="로고" className="logo" onClick={handleLogoClick} />
                <div className="icon-group">
                    <FaBell className="icon" />
                    <FaUserCircle className="icon" />
                    <FaCog className="icon" />
                </div>
            </header>
            <div className="post-list-content">
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <FaPlus className="add-icon" />
                </div>
                <ul className="post-list">
                    {displayedPosts.map(post => (
                        <li key={post.id} className="post-item" onClick={handlePostClick}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <span className="post-author">작성자: {post.author}</span>
                        </li>
                    ))}
                </ul>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages).keys()].map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostList;
