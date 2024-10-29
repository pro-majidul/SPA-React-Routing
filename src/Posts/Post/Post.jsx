import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {userId,id ,body, title} = post
    return (
        <div className='flex'>
            <h3>User ID {userId}</h3>
            <p>{title}</p>
            <p >{body}</p>
            <Link to={`/post/${id}`}> Show More</Link>
        </div>
    );
};

export default Post;