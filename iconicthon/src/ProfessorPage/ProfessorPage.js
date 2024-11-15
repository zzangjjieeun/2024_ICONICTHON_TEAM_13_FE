import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProfessorPage.css';
import logo from './logo.png';
import profilePic from './profile-pic.png';
import wallpaper from './wall-paper.jpg';
import cat1 from './cat1.jpg';
import cat2 from './cat2.jpg';
import { FaBell, FaUser, FaCog } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import axios from 'axios';

function ProfessorPage() {
    const { id } = useParams(); // URL의 professor ID
    const navigate = useNavigate();
    const [professor, setProfessor] = useState({ name: '', department: '' });

    useEffect(() => {
        const fetchProfessor = async () => {
            try {
                const accessToken = sessionStorage.getItem('accessToken');
                const response = await axios.get(`http://3.37.18.18:8080/api/professors/${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setProfessor(response.data.data);
            } catch (error) {
                console.error('Failed to fetch professor:', error);
            }
        };
        fetchProfessor();
    }, [id]);

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <div className="professor-page">
            <div className="banner" style={{ backgroundImage: `url(${wallpaper})` }}>
                <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')} />
                <div className="banner-icons">
                    <FaMessage className="icon" onClick={() => navigate('/chatroomlist')} />
                    <FaBell className="icon" />
                    <FaUser className="icon" />
                    <FaCog className="icon" />
                </div>
            </div>
            <div className="profile-container">
                <img src={profilePic} alt="Profile" className="profile-picture" />
                <div className="professor-name">{professor.name}</div>
            </div>

            <div className="main-content">
                <div className="section professor-info">
                    <div className="professor-quote-box">
                        <h3>교수님의 한 마디</h3>
                        <p>안녕하세요. 저는 {professor.department} 교수 {professor.name}입니다.</p>
                    </div>
                    <div>
                        <h3>교수님의 소개</h3>
                        <ul>
                            <li>· 서울대학교 공학 학사</li>
                            <li>· 서울대학교 공학 석사</li>
                        </ul>
                    </div>
                </div>

                <div className="section center-section">
                    <input type="text" className="search-input" placeholder="검색어를 입력하세요..." />
                    <div className="header">
                        <h3>즐겨찾는 글</h3>
                        <span onClick={() => navigate('/favorite')}>더 보기 &gt;</span>
                    </div>
                    <div className="post" onClick={() => handlePostClick(1)}>
                        <span className="star-icon">⭐</span>
                        <div className="post-content">
                            <strong>이번 연구 주제</strong>
                        </div>
                    </div>
                    <div className="post" onClick={() => handlePostClick(2)}>
                        <span className="star-icon">⭐</span>
                        <div className="post-content">
                            <strong>학석사 연계 과정</strong>
                        </div>
                    </div>
                    <div className="image-posts">
                        <img src={cat1} alt="Post 3" onClick={() => handlePostClick(3)} />
                        <img src={cat2} alt="Post 4" onClick={() => handlePostClick(4)} />
                    </div>
                </div>

                <div className="section announcements">
                    <h3>오늘의 공지사항</h3>
                    <ul className="announcement-list">
                        <li className="announcement-item">
                            <span className="check-icon">✔️</span> 11월 14일까지 신청하세요.
                        </li>
                        <li className="announcement-item">
                            <span className="check-icon">✔️</span> 기말 프로젝트 주제 제출 마감일 안내
                        </li>
                        <li className="announcement-item">
                            <span className="check-icon">✔️</span> 다음 주 강의 시간 변경
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfessorPage;