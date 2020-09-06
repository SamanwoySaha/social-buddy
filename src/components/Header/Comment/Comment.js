import React from 'react';
import './Comment.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Comment = ({ comment, pictures }) => {
    const { name, body, email } = comment;
    const picture = pictures.find(image => image.id === comment.id);
    const {thumbnailUrl} = picture || {};

    return (
        <div className="comment">
            <Grid container wrap="nowrap" spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>
                    <Avatar alt="user" src= {thumbnailUrl} />
                </Grid>
                <Grid item xs>
                    <Typography variant="h5">Name: {name}</Typography>
                    <Typography variant="subtitle1">Email: {email}</Typography>
                    <Typography variant='body1'>{body}</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Comment;