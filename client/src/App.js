import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import Grid from "@mui/material/Grid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PostList from "./components/PostList";

const App = () => {
  return (
    <>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          ></IconButton>
          <Typography variant="h6" color="secondary" sx={{ flexGrow: 3 }}>
            <a href="http://localhost:3000/posts" color="secondary">
              Blogfy
            </a>
          </Typography>
          <Button color="inherit">{<BorderColorSharpIcon />} yeni yazı</Button>
        </Toolbar>
      </AppBar>
      <Grid item xs={12}>
        <Router>
          <Switch>
            <Route exact path="/posts" component={PostList}></Route>
          </Switch>

          <Redirect from="/" to="/posts" />
        </Router>
      </Grid>
    </>
  );
};

export default App;
