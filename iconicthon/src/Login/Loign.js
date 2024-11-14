import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '', userType: '0' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Login API 호출
            const response = await axios.post('http://3.37.18.18:8080/api/login', {
                email: formData.email,
                password: formData.password,
                userType: parseInt(formData.userType), // userType을 정수형으로 변환
            });

            // 로그인 성공 시 accessToken 확인 및 페이지 이동
            if (response.data.code === 201) {
                const { accessToken, userName } = response.data.data;
                alert(`환영합니다, ${userName}님!`);

                // 필요시 accessToken을 로컬 스토리지 또는 세션 스토리지에 저장
                sessionStorage.setItem('accessToken', accessToken);
                sessionStorage.setItem('username', userName);

                // 메인 페이지 또는 로그인 이후의 페이지로 이동
                navigate('/professor-list'); // '/main' 경로는 예시입니다. 필요한 경로로 변경하세요.
            }
        } catch (error) {
            console.error('로그인 오류:', error);
            // 에러 메시지 출력
            setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일을 입력하세요."
                        required
                    />

                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="비밀번호를 입력하세요."
                        required
                    />

                    <div className="user-type">
                        <label>
                            <input
                                type="radio"
                                name="userType"
                                value="1"
                                checked={formData.userType === '1'}
                                onChange={handleChange}
                            />
                            교수님
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="userType"
                                value="0"
                                checked={formData.userType === '0'}
                                onChange={handleChange}
                            />
                            학생
                        </label>
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit">Sign In</button>
                    <div className="link-container">
                        <span onClick={() => alert("비밀번호 찾기 페이지 준비 중입니다.")} className="link">비밀번호를 잊으셨나요?</span>
                        <span onClick={handleRegisterClick} className="link">회원가입</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
