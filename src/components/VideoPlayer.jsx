import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";

import { SocketContext } from "../SocketContext";

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px",
//     },
//   },
//   gridContainer: {
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "10px",
//   },
// }));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  //   const classes = useStyles();

  return (
    <Grid container className={"flex justify-center flex-col md:flex-row"}>
      {stream && (
        <Paper className={"p-3 border-2 border-gray-600 m-3"}>
          <Grid item xs={12} md={6} className="min-w-full w-full">
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={"w-[300px] md:w-[550px]"}
            />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={"p-3 border-2 border-gray-600 m-3"}>
          <Grid item xs={12} md={6} className="min-w-full w-full">
            <Typography variant="h5" gutterBottom>
              {call.name}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={"w-[300px] md:w-[550px]"}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
