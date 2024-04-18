import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const styles = {
  color: "white",
  margin: "0.5rem",
  textDecoration: "none",
};
export default function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" mr={"auto"} textTransform={"uppercase"}>
            Learndo.
          </Typography>
          <Link style={styles} to={"/"}>
            Home
          </Link>
          <Link style={styles} to={"/"}>
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
