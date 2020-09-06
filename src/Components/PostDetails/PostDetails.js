import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import "./PostDetails.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    mb0: {
        marginBottom: 0,
    },
}));

const PostDetails = () => {
    const [post, setPost] = useState({});
    const { userId } = useParams();
    const [avatar1, setAvatar1] = useState(null);
    const [avatar2, setAvatar2] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/posts/" + userId;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPost(data));

        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((data) => setAvatar1(data.results[0].picture.large));
    }, []);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPost(data));

        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((data) => setAvatar2(data.results[0].picture.large));
    }, []);

    const [comments, setComments] = useState([]);
    useEffect(() => {
        const commentsUrl =
            "https://jsonplaceholder.typicode.com/comments?postId=" + userId;
        fetch(commentsUrl)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, []);
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <Avatar
                        alt="avatar name"
                        src={avatar1}
                        className={classes.large}
                    />
                    <div>
                        <p>
                            <small>Written by: </small>
                            <strong>Intelligent Writer</strong>
                        </p>
                    </div>
                </div>
                <h2>{post.title} </h2>

                <p>{post.body} </p>
                <img
                    style={{ width: "100%" }}
                    src="https://source.unsplash.com/random/800x600"
                    alt=""
                />
                <hr />
                {comments.map((item) => {
                    return (
                        <div className={classes.root}>
                            <Avatar
                                alt="avatar name"
                                src={avatar2}
                                className={classes.large}
                            />
                            <div>
                                <p>
                                    <strong> {item.name}</strong>{" "}
                                </p>
                                <p>
                                    <small> {item.email}</small>{" "}
                                </p>
                                <p>{item.body} </p>
                            </div>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
};

export default PostDetails;
