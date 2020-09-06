import React, { useEffect, useState } from 'react';
import './PostDetail.css';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import { Paper } from '@material-ui/core';
import Comment from '../Comment/Comment';
import NoMatch from '../NoMatch/NoMatch';

const PostDetail = () => {
    const { postId } = useParams();

    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }, []);
    
    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setCommentList(data));
    }, []);
    
    const [pictures, setPictures] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=500`)
            .then(res => res.json())
            .then(data => setPictures(data));          
    }, []);

    if(postId >= 1 || postId <= 100){
        return (
            <div className="post-detail">
                <Post post={post} offDetail={false} />
                <Paper elevation={2} className='commentList'>
                    {
                        commentList.map((comment) => <Comment key={comment.id} pictures={pictures} comment={comment} />)
                    }
                </Paper>
            </div>
        );
    }
    else {
        return <NoMatch />
    }
};

export default PostDetail;