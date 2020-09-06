import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./PostCard.css";
const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
});

const PostCard = (props) => {
    const classes = useStyles();
    const post = props.postDetails;
    const { userId } = post;
    return (
        <Link className="link" to={"/posts/" + userId}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://source.unsplash.com/random/800x600"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {post.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Box pb={3}>
                    <CardActions>
                        <Link className="link" to={"/posts/" + userId}>
                            <Button
                                variant="contained"
                                size="small"
                                color="primary"
                            >
                                Show more
                            </Button>
                        </Link>
                    </CardActions>
                </Box>
            </Card>
        </Link>
    );
};

export default PostCard;
