import React from 'react';
import {Link, useParams} from "react-router-dom";
import Posts from '../../data/posts.json'

const Blogpost = () => {
    const {id} = useParams()




    return (
        <>
            <h1>Post {id}</h1>
            <div className="post"/>
            <p><strong>This is post {id}</strong></p>

        </>
    );
};

export default Blogpost;