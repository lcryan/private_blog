import React from 'react';
import Posts from '../../data/posts.json'

function Blogposts() {

    return (
        <>
            <h3>Here is an overview of all our blogposts</h3>

            {
                Posts.map((post) => {
                    console.log(post.title)
                })
            }

        </>
    );
}

export default Blogposts;