import React from "react";

import Grid from "@material-ui/core/Grid";

import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import youtube from "./api/youtube";

const App = () => {
  return (
    <Grid container justify="center" spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
