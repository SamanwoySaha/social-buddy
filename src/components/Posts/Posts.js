import React, { useState, useEffect } from 'react';
import './Posts.css';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import PostDetail from '../PostDetail/PostDetail';
import Post from '../Post/Post';

const Posts = () => {
    let { path } = useRouteMatch();
    
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPostList(data));
    }, []);

    function allPosts() {
        return (
            <div>
                <h1 className="post-count">Posts: {postList.length}</h1>
                {
                    postList.map(post => <Post key={post.id} post={post} offDetail={true} />)
                }
            </div>
        );
    }

    return (
        <div className="posts">
            <Switch>
                <Route path={`${path}/:postId`}>
                    <PostDetail />
                </Route>
                <Route path={path}>
                    {allPosts}
                </Route>
            </Switch>
        </div>
    );
};

export default Posts;