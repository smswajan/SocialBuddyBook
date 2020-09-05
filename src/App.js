import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import AllPosts from "./Components/AllPosts/AllPosts";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
    return (
        <Router>
            <Header />

            <Box bgcolor="#F0F2F5" pt={5}>
                <Switch>
                    <Route exact path="/">
                        <AllPosts />
                    </Route>
                    <Route path="/posts/:userId">
                        <PostDetails />
                    </Route>
                </Switch>
            </Box>
        </Router>
    );
}

export default App;
