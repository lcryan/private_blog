import React from 'react';
import Posts from '../../data/posts.json'
import './Blogposts.css'

import {Link} from "react-router-dom";

function Blogposts() {

    const numberOfPosts = Posts.length;

    return (
        <>
            <div className="blogpost-title">
                <h3>Here is an overview of all our blogposts (private)</h3>
                <p>We currently have {numberOfPosts} blogposts on our page. Feel free to comment.</p>
            </div>

            {
                Posts.map((post) => {
                    return (
                        <ul className="blogpost-list">
                            <li className="post-title" key={post.id}>
                                <Link to={`/blogpost/${post.id}`}>{post.title}</Link>
                            </li>
                        </ul>)
                })
            }

        </>
    );
}

export default Blogposts;