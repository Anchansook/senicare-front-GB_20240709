import React, { useEffect } from 'react';
import './Senicare.css';
import Auth from 'src/views/Auth'; // 폴더 아래 index.tsx 있을 경우 그 자체로 인식해서 폴더로 가져올 수 있음
import { Routes, Route } from 'react-router';

function Index() {

  useEffect(() => {
    // TODO : /auth로 경로 이동
  }, []);
  
  return (
    <></>
  )
};

export default function Senicare() {
  return (
    <Routes>
      <Route index element={<></>} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  );
}
