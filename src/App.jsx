import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import { Button } from 'reactstrap'
import Main from './pages/Main'
import Exams from "./pages/Exams"
import Homeworks from './pages/Homeworks'
import Fee from './pages/Fee'
import Private from './private/Private'
import Spinner from './components/spinner/Spinner'
import Login from './pages/Login'

export default function App() {
  const [access,setAccess]=useState(false)
  console.log(access);
  return (
    <>
    {
      access ? <Private/> : <Login setAccess={setAccess}/>
    }
    </>
  )
}
