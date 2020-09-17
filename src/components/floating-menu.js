import React from 'react';
import Mute from '../assets/mute.svg';
import Unmute from '../assets/speaker.svg';
import '../styles/floating-menu.css';

function FloatingMenu({ mute, setMute }) {
  
  return (
		<ul className="social-nav model-0" id="model-0">
			<li><img src={!mute ? Unmute : Mute} alt="Mute Icon" onClick={() => setMute(() => !mute)} /></li>
		</ul>
  );
}

export default FloatingMenu;