import React from "react";
import "./Contents.css";

const YouTubeVideo = (props) => {
  return (
    <div className="ContentLayout">
      <div className="ContentTitle">
        <h1>{props.title}</h1>
        <h6 className="ContentDescription">{props.descriptions}</h6>
      </div>
      <div className="YouTubeVideos">
        <iframe
          title={props.title}
          width="560"
          height="315"
          src={props.src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const BlogContents = (props) => {
  return (
    <div className="blog-contents">
      <div className="blog-contents-title">
        <h1>{props.title}</h1>
      </div>
      <div className="blog-contents-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default function LatestContents() {
  return (
    <div>
      <YouTubeVideo
        title="YouTube Videos"
        descriptions="Welcome to my YouTube Channel where we learn more about technology while supercharge our productivity with tech-enabled approachs"
        src="https://www.youtube.com/embed/1W5IlvlLdN0"
      />
    </div>
  );
}
