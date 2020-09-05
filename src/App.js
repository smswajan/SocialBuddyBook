import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import AllPosts from "./Components/AllPosts";
import { Box } from "@material-ui/core";

function App() {
    return (
        <Box bgcolor="#F0F2F5">
            <Header />
            <Box pt={5}>
                <AllPosts />
            </Box>
        </Box>
    );
}

export default App;
