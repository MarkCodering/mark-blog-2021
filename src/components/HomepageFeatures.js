import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { makeStyles } from "@mui/styles";

const IntroList = [
  {
    title: "Computer Science Student",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        I am a computer science student at Tamkang University, Taiwan. I mainly
        concentrates on the development of embedded systems and application
        development with various software stacks. Also, I am really passionate
        about the emerging technologies in the tech domain, like autonomous
        vehicle and quantum computing.
      </>
    ),
  },
  {
    title: "Avionics Engineer",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        I am an avionics engineer at Space Technology Lab. I am primarily
        responsible for the development of the avionics software and hardware
        integration with PCB. Besides, I am in-charge of the data analysis with
        Matlab and Python after the rocket was launched.
      </>
    ),
  },
  {
    title: "Content Creator",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        I am a content creator on YouTube and my blog. I am passionate about
        sharing my experiences as a developer and engineering student. Moreover,
        I would like to deliver a message that you can achieve more than imagine
        with my videos and contents by empower students and learners across the
        globe to use technology.
      </>
    ),
  },
];

const useStyles = makeStyles({
  title: {
    fontSize: "2.5rem",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    fontWeight: "bold",
    padding: "1.5rem",
  },
});

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const fontStyles = useStyles();
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={fontStyles.title}>About Mark...</h1>
        <div className="row">
          {IntroList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
