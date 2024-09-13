import React, { ChangeEvent } from 'react'
import './style.css';

//# 버튼이 존재하는 입력창 컴포넌트

interface Props {
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    value: string; // 입력창 관리
    message: string; // 메시지 관리
    messageError: boolean; // 메시지 에러 관리
    buttonName?: string;

    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
};

export default function InputBox({ 
    label, 
    type, 
    placeholder, 
    value, 
    buttonName, 
    message,
    messageError,
    onChange,
    onButtonClick 
}: Props) {
    return (
        <div className="input-box">
            <div className="label">{label}</div>
            <div className="input-area">
                <input value={value} type={type} placeholder={placeholder} onChange={onChange} />
                {buttonName && <div className={`input-button ${value ? 'active' : 'disable'}`} onClick={onButtonClick}>{buttonName}</div>}
            </div>
            <div className={`message ${messageError ? 'error' : 'primary'}`}>{message}</div>
        </div>
    )
}
