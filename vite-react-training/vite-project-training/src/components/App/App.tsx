import './App.css'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Cats } from '../Cats/Cats';
import Login from '../Login/Login';


function App() {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Cats />} />
        </Routes>
    )
}

export default App