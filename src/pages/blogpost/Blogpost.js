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
            {
                Posts[id - 1].content
            }

        </>
    );
};

export default Blogpost;