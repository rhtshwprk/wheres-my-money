import React from "react";

import styles from "./videoembed.module.css";

const VideoEmbed = (props) => {
  return (
    <div className={styles.video}>
      <div className={styles.flex_play}>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="18" height="18" rx="9" fill="#F7D24D" />
          <path
            d="M6.1875 13.2499C6.10462 13.2499 6.02513 13.217 5.96653 13.1584C5.90792 13.0998 5.875 13.0203 5.875 12.9374V6.06245C5.87501 6.00814 5.88917 5.95478 5.91608 5.90762C5.943 5.86045 5.98174 5.82111 6.02849 5.79348C6.07523 5.76585 6.12837 5.75088 6.18267 5.75004C6.23697 5.7492 6.29055 5.76252 6.33812 5.7887L12.5881 9.2262C12.6371 9.25317 12.678 9.29281 12.7064 9.34096C12.7349 9.38911 12.7499 9.44402 12.7499 9.49995C12.7499 9.55588 12.7349 9.61079 12.7064 9.65894C12.678 9.70709 12.6371 9.74672 12.5881 9.7737L6.33812 13.2112C6.29198 13.2366 6.24017 13.2499 6.1875 13.2499Z"
            fill="#5B7E7E"
          />
        </svg>

        <p>Watch Video</p>
      </div>
      <p className={styles.videoTitle}>{props.title}</p>
      <div class={styles.youtubeContainer}>
        <iframe
          title="video"
          src={`${props.link}?rel=0&modestbranding=1&showinfo=0"`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  );
};

export default VideoEmbed;
