import React, { useState, useEffect } from 'react';
import './Posts.css';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import PostDetail from '../PostDetail/PostDetail';
import Post from '../Post/Post';

const Posts = () => {
    let {path} = useRouteMatch();
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPostList(data));
    }, []);

    return (
        <div className="posts">
            <Switch>
                <Route exact path={path}>
                {
                    postList.map(post => <Post key={post.id} post={post} offDetail={true}/>)
                }
                </Route>
                <Route path={`${path}/:postId`}>
                    <PostDetail />
                </Route>
            </Switch>
        </div>
    );
};

export default Posts;