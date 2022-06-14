import React from 'react';


const VideoDisplay = (props) => {
  
    return (

    <iframe id="ytplayer" type="text/html" width="640" height="360" allow="fullscreen"
    src={`https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com`}
    frameBorder="0"></iframe>
    );
  };
  
  export default VideoDisplay;