import React from 'react';

import useStyles from '../styles/youtube-thumbnail';
import PlayButton from '../assets/youtube.svg';
import PlayButtonGrey from '../assets/youtube-grey.svg';

function YoutubeThumb() {
  const classes = useStyles();
  const [hover, setHover] = React.useState(false);
  return (
    <a href="https://www.youtube.com/watch?v=ZfJySK4znXE" target="_blank" rel="noopener noreferrer">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={classes.container}
      >
        <img src={hover ? PlayButton : PlayButtonGrey} alt="Play Button" className={classes.playButton} />
      </div>
    </a>
  );
}

export default YoutubeThumb;