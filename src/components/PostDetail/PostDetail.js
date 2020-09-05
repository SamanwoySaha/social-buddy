import React, { useEffect, useState } from 'react';
import './PostDetail.css';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Comment from '../Header/Comment/Comment';
import { Paper } from '@material-ui/core';

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
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setCommentList(data));
    }, []);
    
    const [pictures, setPictures] = useState([]);
    const apiKey = '16482482-28c666e38803dfcff5da4bb07';
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => setPictures(data.hits)); 
    }, []);
    // useEffect(() => {
    //     fetch(`https://randomuser.me/api/?results=500&inc=picture`)
    //         .then(res => res.json())
    //         .then(data => setPictures(data.results)); 
    // }, []);
    // console.log(pictures);

    return (
        <div>
            <Post post={post} showDetail={false} />
            <Paper elevation={2} className='commentList'>
                {
                    commentList.map(comment => <Comment key={comment.id} picture={pictures[comment.id]} comment={comment} />)
                }
            </Paper>
        </div>
    );
};

export default PostDetail;