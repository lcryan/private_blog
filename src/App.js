import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Blogposts from './pages/blogposts/Blogposts'
import Blogpost from "./pages/blogpost/Blogpost";
import NotFound from "./pages/notFound/NotFound";

import Navigation from "./components/Navigation";

import './App.css';


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/blogposts" element={<Blogposts/>}/>
                <Route path="/blogpost:id" element={<Blogpost/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;


