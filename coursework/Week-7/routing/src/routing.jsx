import { useState, lazy,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
//lazyily loads the html based on the need
const   Dashboard = lazy(() => import('./components/Dashboard'))
const   Landing = lazy(() => import('./components/Landing'))

function App() {

  return (
    <div>
    <BrowserRouter>
      <Topbar />
      <Routes>
        //suspense lets you fall back to the loading symbol until the asynchronous fetch call is made 
        //to the backend
        <Route path="/dashboard" element={<Suspense fallback={"loading..."} ><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"loading..."} ><Landing /></Suspense>}  />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Topbar(){
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => {
        navigate('/');
      }}>
        Landing page
      </button>
      <button onClick={() => {
        navigate('/dashboard');
      }}>
        Dashboard page
      </button>
    </>
  )
}
export default App
