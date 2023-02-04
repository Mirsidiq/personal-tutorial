import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Exams from "../pages/Exams"
import Homeworks from '../pages/Homeworks'
import Fee from '../pages/Fee'
export default function Private() {
  return (
    <div>
         <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/exam' element={<Exams/>}/>
      <Route path='/homework' element={<Homeworks/>}/>
      <Route path='/fee' element={<Fee/>}/>
    </Routes>
    </div>
  )
}
