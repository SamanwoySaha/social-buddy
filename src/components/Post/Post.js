import React, { useEffect, useState } from 'react';
import './Post.css';
import Comment from '../Header/Comment/Comment';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';

const Post = ({ post, showDetail }) => {
    const { title, body, id } = post;
    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setCommentList(data));
    }, []);
    
    // const [pictures, setPictures] = useState([]);
    // useEffect(() => {
    //     fetch('https://randomuser.me/api/?results=500')
    //         .then(res => res.json())
    //         .then(data => setPictures(data));
    // }, []);

    return (
        <Card className='post'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Link to={`/posts/${id}`}>
                    <Button className="seeMore-btn" size="small" color="primary">See More</Button>
                </Link>
            </CardActions>
            {
                showDetail && commentList.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </Card>
    );
};

export default Post;