import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import SiteIntro from "../components/AboutSite";

const useStyles = makeStyles({
  root: {
    display: "inline-block",
    minHeight: "50vh",
    minWidth: "88vh",
    alignItems: "center",
    justifyContent: "center",
  },
  trailer: {
    position: "absolute",
    top: "1rem",
    left: "0",
    bottom: "0",
    right: "0",
    width: "85vh",
    height: "50%",
    margin: "auto",
    alignContent: "center",
    justifyContent: "center",
    padding: "10dp",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    margin: "0",
    padding: "0",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    margin: "0",
    paddingBottom: "2rem",
  },
});

function HomepageHeader() {
  const classes = useStyles();
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={classes.title}>{siteConfig.title}</h1>
        <p className={classes.subtitle}>{siteConfig.tagline}</p>
        <iframe
          className={classes.trailer}
          src="https://www.youtube.com/embed/yl4NqNT1L2Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="An Official Site from Mark Chen"
    >
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
