import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PostCard from "../PostCard/PostCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));
const AllPosts = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const postsUrl = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        fetch(postsUrl)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    {posts.map((item) => (
                        <Grid item xs={12} sm={6}>
                            <PostCard postDetails={item} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    );
};

export default AllPosts;

const PotCard = (props) => {
    const postTitle = props.postDetails.title;
    return <h2>{postTitle} </h2>;
};
