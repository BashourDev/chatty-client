import React from "react";
import { Typography, AppBar } from "@mui/material";
// import { makeStyles } from "@mui/styles";

import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: "30px 100px",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "600px",
//     border: "2px solid black",

//     [theme.breakpoints.down("xs")]: {
//       width: "90%",
//     },
//   },
//   image: {
//     marginLeft: "15px",
//   },
//   wrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     width: "100%",
//   },
// }));

const App = () => {
  // const classes = useStyles();

  return (
    <div className={"flex flex-col items-center w-full"}>
      <div
        className={
          "rounded-md my-7 mx-24 flex items-center justify-center shadow-md shadow-gray-800 w-full"
        }
      >
        <Typography variant="h2" align="center" className="text-gray-200">
          Chatty
        </Typography>
      </div>

      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
