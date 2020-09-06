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
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const Post = ({ post, offDetail }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/posts/${id}`);
    }
    const { title, body, id } = post;

    return (
        <Card className='post'>
            <CardActionArea onClick={handleClick}>
                <CardContent>
                    <Typography className="post-heading" gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className="body" variant="body2" color="textSecondary" component="p">
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
                    offDetail && <Button onClick={handleClick} className="seeMore-btn" size="small" color="primary">See More</Button>
                }
            </CardActions>
        </Card>
    );
};

export default Post;