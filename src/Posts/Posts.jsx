import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3> All Posts {posts.length}</h3>
            <div className='users'>
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;