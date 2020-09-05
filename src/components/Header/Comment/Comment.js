import React from 'react';
import './Comment.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Comment = ({ comment, picture }) => {
    const { name, body, email } = comment;

    return (
        <Grid container wrap="nowrap" spacing={2} container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item>
                <Avatar src={picture} />
            </Grid>
            <Grid item xs>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="subtitle2">{email}</Typography>
                <Typography variant='body1'>{body}</Typography>
            </Grid>
        </Grid>
    );
};

export default Comment;