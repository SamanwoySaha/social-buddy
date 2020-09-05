import React from 'react';
import './Comment.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Comment = ({ comment, picture }) => {
    const { name, body, email } = comment;
    const {previewURL} = picture || {};
    console.log(previewURL);

    return (
        <div className="comment">
            <Grid container wrap="nowrap" spacing={2} container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>
                    <Avatar alt="user" src={previewURL} />
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