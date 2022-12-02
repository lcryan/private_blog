import React from 'react';
import Posts from '../../data/posts.json'

import {Link} from "react-router-dom";

function Blogposts() {

    const numberOfPosts = Posts.length;

    return (
        <>
            <h3>Here is an overview of all our blogposts (private)</h3>
            <div>
                <p>We currently have {numberOfPosts} blogposts on our page. Feel free to comment.</p>
            </div>


            {
                Posts.map((post) => {
                    return (
                        <ul>
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