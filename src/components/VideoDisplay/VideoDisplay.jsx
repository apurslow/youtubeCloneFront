
const VideoDisplay = (props) => {

    return (
        <>
        {props.videoId &&
            <iframe id="ytplayer" type="text/html" width="640" height="360" allow="fullscreen"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=0&origin=http://example.com`}
            frameBorder="0"></iframe>
        }
        </>
    );
  };
  
  export default VideoDisplay;