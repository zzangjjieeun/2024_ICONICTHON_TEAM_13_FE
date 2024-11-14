import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import './RegisterStudent.css';

function RegisterStudent() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        birthYear: '2024',
        birthMonth: '1',
        birthDate: '1',
        gender: '',
    });
    const navigate = useNavigate(); // navigate 함수 생성

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedBirth = `${formData.birthYear.slice(2)}${formData.birthMonth.padStart(2, '0')}${formData.birthDate.padStart(2, '0')}`;

        try {
            const response = await axios.post('http://3.37.18.18:8080/api/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                birth: formattedBirth,
                gender: formData.gender === '남성' ? 0 : 1,
                userType: 0,
                department: "",
            });

            alert(`회원가입이 완료되었습니다. 사용자 ID: ${response.data.data.memberId}`);

            // 회원가입에 성공하면 Login 페이지로 이동
            navigate('/login');
        } catch (error) {
            console.error('회원가입 오류:', error);
            alert('회원가입에 실패했습니다.');
        }
    };

    const generateYears = () => {
        const years = [];
        for (let i = 1900; i <= 2024; i++) {
            years.push(i);
        }
        return years;
    };

    const generateMonths = () => Array.from({ length: 12 }, (_, i) => i + 1);
    const generateDays = () => Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="register-student-container">
            <div className="register-student">
                <h2>학생 회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <label>이메일</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일을 입력하세요."
                        required
                    />

                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="비밀번호를 입력하세요."
                        required
                    />

                    <label>이름</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="이름을 입력하세요."
                        required
                    />

                    <label>생년월일</label>
                    <div className="date-select">
                        <select name="birthYear" value={formData.birthYear} onChange={handleChange}>
                            {generateYears().map((year) => (
                                <option key={year} value={year}>
                                    {year}년
                                </option>
                            ))}
                        </select>
                        <select name="birthMonth" value={formData.birthMonth} onChange={handleChange}>
                            {generateMonths().map((month) => (
                                <option key={month} value={month}>
                                    {month}월
                                </option>
                            ))}
                        </select>
                        <select name="birthDate" value={formData.birthDate} onChange={handleChange}>
                            {generateDays().map((day) => (
                                <option key={day} value={day}>
                                    {day}일
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="gender-container">
                        <label>성별</label>
                        <div className="gender-options">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="남성"
                                    checked={formData.gender === '남성'}
                                    onChange={handleChange}
                                />
                                남성
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="여성"
                                    checked={formData.gender === '여성'}
                                    onChange={handleChange}
                                />
                                여성
                            </label>
                        </div>
                    </div>

                    <button type="submit">회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterStudent;
