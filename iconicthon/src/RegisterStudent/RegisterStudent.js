import React, { useState } from 'react';
import axios from 'axios';
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
        studentNumber: '', // 학번 추가
    });

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
            const response = await axios.post('/api/register/student', {
                studentEmail: formData.email,
                studentPassword: formData.password,
                studentName: formData.name,
                studentBirth: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDate}`,
                studentGender: formData.gender,
                studentNumber: formData.studentNumber,
            });
            alert(`회원가입이 완료되었습니다. 사용자 ID: ${response.data.data.userId}`);
        } catch (error) {
            console.error('회원가입 오류:', error);
            alert('회원가입에 실패했습니다.');
        }
    };

    return (
        <div className="register-student">
            <h2>학생 회원가입</h2>
            <form onSubmit={handleSubmit}>
                {/* 이메일 입력 */}
                <label>이메일</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력하세요."
                    required
                />

                {/* 비밀번호 입력 */}
                <label>비밀번호</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력하세요."
                    required
                />

                {/* 이름 입력 */}
                <label>이름</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요."
                    required
                />

                {/* 학번 입력 */}
                <label>학번</label>
                <input
                    type="text"
                    name="studentNumber"
                    value={formData.studentNumber}
                    onChange={handleChange}
                    placeholder="학번을 입력하세요."
                    required
                />

                {/* 생년월일 선택 */}
                <label>생년월일</label>
                <div className="date-select">
                    <select name="birthYear" value={formData.birthYear} onChange={handleChange}>
                        {/* 연도 옵션 */}
                        <option value="2024">2024년</option>
                        <option value="2023">2023년</option>
                        {/* 연도 추가 */}
                    </select>
                    <select name="birthMonth" value={formData.birthMonth} onChange={handleChange}>
                        {/* 월 옵션 */}
                        <option value="1">1월</option>
                        <option value="2">2월</option>
                        {/* 월 추가 */}
                    </select>
                    <select name="birthDate" value={formData.birthDate} onChange={handleChange}>
                        {/* 일 옵션 */}
                        <option value="1">1일</option>
                        <option value="2">2일</option>
                        {/* 일 추가 */}
                    </select>
                </div>

                {/* 성별 선택 */}
                <label className="gender-label">성별</label>
                <div className="gender-options">
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="1"
                            checked={formData.gender === '1'}
                            onChange={handleChange}
                        />
                        남성
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="0"
                            checked={formData.gender === '0'}
                            onChange={handleChange}
                        />
                        여성
                    </label>
                </div>

                {/* 제출 버튼 */}
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default RegisterStudent;
