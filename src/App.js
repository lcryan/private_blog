import React, {useState} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Blogposts from './pages/blogposts/Blogposts'
import Blogpost from "./pages/blogpost/Blogpost";
import NotFound from "./pages/notFound/NotFound";

import Navigation from "./components/Navigation";

import './App.css';


function App() {

    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation auth={isAuthenticated} logout={() => toggleIsAuthenticated(false)}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login toggleLogin={() => toggleIsAuthenticated(!isAuthenticated)}/> }/>
                <Route path="/blogposts" element={isAuthenticated ? <Blogposts/> : <Navigate to = "/"/>}/>
                <Route path="/blogpost/:id" element={isAuthenticated ? <Blogpost/> : <Navigate to = "/"/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;


