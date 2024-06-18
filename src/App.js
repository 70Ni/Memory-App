import memories from "../src/Images/alf.svg";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";
import useStyles from "./styles";
import { useEffect, useState } from "react";

import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { getPosts, updatePost } from "./actions/posts";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [currentId, setCurrentId] = useState();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/auth" exact Component={Auth}></Route>
          </Routes>
          {/* <Home /> */}
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
