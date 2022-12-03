import React from 'react';
import {useParams} from "react-router-dom";
import Posts from '../../data/posts.json'
import './Blogpost.css'

const Blogpost = () => {
    const {id} = useParams()


    return (
        <>

            <h1>This is post {id}</h1>
            <span className="blogpost-content">
                {
                    Posts[id - 1].content
                }
                <br/>
                </span>

            <div className="blog-date">
                {
                    Posts[id - 1].date
                }
            </div>
        </>
    );
};

export default Blogpost;