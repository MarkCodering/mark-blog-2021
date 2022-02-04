import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material/";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Layout from "@theme/Layout";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
	padding: "1rem",
    height: "100vh",
    width: "100vw",
    backgroundImage: `url("/img/theme.jpg")`,
  },
  title: {
    fontSize: "2rem",
    color: "#fff",
    fontWeight: "bold",
    textShadow: "2px 2px #000",
	margin: "0",
	padding: "5%",
  },
  logo: {
    height: "17vh",
    width: "17vh",
    margin: "0",
  },
  button: {
	margin: "0",
	padding: "5%",
  },
});

export default function Contact() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <h1 className={classes.title}>Contact: </h1>
        <Button
          href="409416533@gms.tku.edu.tw"
          classesName={classes.button}
          variant="contained"
          startIcon={<EmailIcon />}
        >
          Email
        </Button>
        <Button
          href="https://www.linkedin.com/in/mark-chen-next/"
          classesName={classes.button}
          variant="contained"
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
      </div>
    </Layout>
  );
}
