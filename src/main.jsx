import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'

const Lobby=()=>{
  const navigate = useNavigate()

  return <div>Lobby <button onClick={()=>{
    navigate('/newSession')
  }}>Take me to the game</button></div>
}

const router = createBrowserRouter([
  {path:'/:sessionId', element:<App></App>},
  {path:'/lobby', element:<Lobby></Lobby>},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
