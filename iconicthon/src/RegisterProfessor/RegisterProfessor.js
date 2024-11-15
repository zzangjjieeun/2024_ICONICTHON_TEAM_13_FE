import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterProfessor.css';

function RegisterProfessor() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        birthYear: '2024',
        birthMonth: '1',
        birthDate: '1',
        gender: '',
        department: '',
        hobbies: ['', '', ''],
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("hobby")) {
            const index = parseInt(name.slice(-1));
            setFormData(prevState => {
                const updatedHobbies = [...prevState.hobbies];
                updatedHobbies[index] = value;
                return { ...prevState, hobbies: updatedHobbies };
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
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
                userType: 1,  // 교수 사용자 유형
                department: formData.department,
                interests: formData.hobbies.filter(hobby => hobby),  // 빈 취미 제외
            });

            alert(`회원가입이 완료되었습니다. 사용자 ID: ${response.data.data.memberId}`);
            navigate('/login');  // 회원가입 성공 후 로그인 페이지로 이동
        } catch (error) {
            console.error('회원가입 오류:', error);
            alert('회원가입에 실패했습니다.');
        }
    };

    const generateYears = () => Array.from({ length: 125 }, (_, i) => 1900 + i);
    const generateMonths = () => Array.from({ length: 12 }, (_, i) => i + 1);
    const generateDays = () => Array.from({ length: 31 }, (_, i) => i + 1);

    const colleges = {
        "불교대학": ["불교학부", "문화유산학과"],
        "문과대학": ["국어국문문예창작학부", "영어영문학부", "일본학과", "중어중문학과", "철학과", "사학과"],
        "이과대학": ["수학과", "화학과", "통계학과", "물리학과"],
        "법과대학": ["법학과"],
        "사회과학대학": ["정치행정학부", "경제학과", "국제통상학과", "사회언론정보학부", "식품산업관리학과", "광고홍보학과", "사회복지학과"],
        "경찰사법대학": ["경찰행정학부"],
        "경영대학": ["경영학과", "회계학과", "경영정보학과"],
        "공과대학": ["건설환경공학과", "건축공학부", "기계로봇에너지공학과", "산업시스템공학과", "에너지신소재공학과", "전자전기공학부", "정보통신공학과", "화공생물공학과"],
        "사범대학": ["교육학과", "국어교육과", "역사교육과", "지리교육과", "수학교육과", "가정교육과", "체육교육과"],
        "예술대학": ["미술학부", "연극학부", "영화영상학과", "스포츠문화학과", "한국음악과"],
        "미래융합대학": ["융합보안학과", "사회복지상담학과", "글로벌무역학과"],
        "첨단융합대학": ["컴퓨터•AI학부", "시스템반도체학부"],
        "약학대학": ["약학과"],
        "바이오시스템대학": ["바이오환경과학과", "생명과학과", "식품생명공학과", "의생명공학과"]
    };

    const handleCollegeChange = (e) => {
        setFormData({
            ...formData,
            college: e.target.value,
            department: '',
        });
    };


    return (
        <div className="register-professor-container">
            <div className="register-professor">
                <h2>교수님 회원가입</h2>
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
                                <option key={year} value={year}>{year}년</option>
                            ))}
                        </select>
                        <select name="birthMonth" value={formData.birthMonth} onChange={handleChange}>
                            {generateMonths().map((month) => (
                                <option key={month} value={month}>{month}월</option>
                            ))}
                        </select>
                        <select name="birthDate" value={formData.birthDate} onChange={handleChange}>
                            {generateDays().map((day) => (
                                <option key={day} value={day}>{day}일</option>
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

                    <label>단과대학</label>
                    <select name="college" value={formData.college} onChange={handleCollegeChange} required>
                        <option value="">단과대학을 선택하세요</option>
                        {Object.keys(colleges).map((college) => (
                            <option key={college} value={college}>
                                {college}
                            </option>
                        ))}
                    </select>

                    <label>학과</label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        disabled={!formData.college}
                        required
                    >
                        <option value="">학과를 선택하세요</option>
                        {formData.college &&
                            colleges[formData.college].map((dept) => (
                                <option key={dept} value={dept}>
                                    {dept}
                                </option>
                            ))}
                    </select>
                    <label>취미</label>
                    {[0, 1, 2].map((index) => (
                        <input
                            key={index}
                            type="text"
                            name={`hobby${index}`}
                            value={formData.hobbies[index]}
                            onChange={handleChange}
                            placeholder="취미를 입력해주세요"
                        />
                    ))}

                    <button type="submit">회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterProfessor;
