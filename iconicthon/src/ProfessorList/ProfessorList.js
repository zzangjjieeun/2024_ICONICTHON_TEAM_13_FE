import React, { useEffect, useState } from 'react';
import './ProfessorList.css';
import logo from './logo.png';
import profilePic from './profile-pic.png'; // Placeholder profile picture.
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProfessorList() {
    const navigate = useNavigate();
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        // Fetch data from the API using the token from sessionStorage
        const fetchProfessors = async () => {
            try {
                const accessToken = sessionStorage.getItem('accessToken'); // Retrieve token from sessionStorage
                const response = await axios.get('http://3.37.18.18:8080/api/professors', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`, // Set Authorization header
                    },
                });
                setProfessors(response.data.data);
            } catch (error) {
                console.error('Failed to fetch professors:', error);
            }
        };
        fetchProfessors();
    }, []);

    return (
        <div className="professor-list-page">
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <h1>교수님 목록</h1>
            </div>
            <ul className="professor-list">
                {professors.map((professor) => (
                    <li key={professor.id} className="professor-item">
                        <div
                            className="professor-info"
                            onClick={() => navigate(`/professor/${professor.id}`)}
                        >
                            <img src={profilePic} alt="Profile" className="profile-picture" />
                            <div>
                                <p className="professor-name">{professor.name} 교수님</p>
                                <p className="professor-department">{professor.department}</p>
                                <p className="professor-interests">
                                    {professor.interests.length > 0
                                        ? professor.interests.map((interest) => interest.interest).join(', ')
                                        : '관심사 없음'}
                                </p>
                            </div>
                        </div>
                        <button className="subscribe-button">구독중</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProfessorList;
