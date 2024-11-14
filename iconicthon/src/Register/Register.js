import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const navigate = useNavigate();

    return (
        <div className="register-page">
            <h2>회원가입</h2>
            <div className="register-buttons">
                <button onClick={() => navigate('/register-student')} className="student-button">학생</button>
                <button onClick={() => navigate('/register-professor')} className="professor-button">교수님</button>
            </div>
        </div>
    );
}

export default Register;
