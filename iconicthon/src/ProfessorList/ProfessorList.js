import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfessorList.css';
import logo from './Logo.png';
import { useNavigate } from 'react-router-dom';

function ProfessorList() {
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        const fetchProfessors = async () => {
            try {
                const response = await axios.get('/api/professors', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer your_auth_token', // Replace with actual token
                    }
                });
                if (response.data.code === 200) {
                    setProfessors(response.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch professors:", error);
            }
        };
        
        fetchProfessors();
    }, []);

    return (
        <div className="professor-list-page">
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <h1>구독 목록</h1>
            </div>
            <ul className="professor-list">
                {professors.map(professor => (
                    <li key={professor.id} className="professor-item">
                        <div className="professor-info">
                            <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
                            <div className="professor-details">
                                <h2>{professor.name} 교수님</h2>
                                <p>{professor.department}</p>
                                {professor.interests.length > 0 && (
                                    <p>관심사: {professor.interests.map(interest => interest.interest).join(', ')}</p>
                                )}
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
