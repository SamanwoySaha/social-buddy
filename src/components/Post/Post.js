import React from 'react';
import './Post.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useHistory } from 'react-router-dom';

const Post = ({ post, offDetail }) => {
    const { title, body, id } = post;

    const history = useHistory();
    const handleClick = (postId) => {
        history.push(`/posts/${postId}`);
    }

    return (
        <Card className='post'>
            <CardActionArea onClick={() => handleClick(id)}>
                <CardContent>
                    <Typography className="post-heading" gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className="body-text" variant="body2" color="textSecondary" component="p">
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
                {
                    offDetail && <Button onClick={() => handleClick(id)} className="seeMore-btn" variant="contained" size="small" color="primary">See More</Button>
                }
            </CardActions>
        </Card>
    );
};

export default Post;