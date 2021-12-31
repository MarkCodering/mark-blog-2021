import React from "react";
import { makeStyles } from "@mui/styles";
import "./About.css";

const SiteIntro = [
  {
    title: "About this site",
    text: "This site was designed by a engineer for engineer and tech lover to improve the engineering productivity",
  },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function AboutSite() {
  const classes = useStyles();
  return (
    <div className="Layout">
      {SiteIntro.map((props, idx) => (
        <div key={idx} className={classes.root}>
          <img
            src="img/Logo.png"
            alt="logo"
            className="logo"
            height="100"
            width="100"
            margin="0"
          />
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      ))}
    </div>
  );
}
