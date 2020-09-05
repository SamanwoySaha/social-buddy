import React, { useEffect, useState } from 'react';
import './PostDetail.css';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);

    return (
        <div>
            <Post post={post} showDetail={true}/>
        </div>
    );
};

export default PostDetail;