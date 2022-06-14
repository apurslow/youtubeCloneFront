
import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import SearchBar  from "../../components/SearchBar/SearchBar";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import NewComment from "../../components/NewComment/NewComment";
import Comments from "../../components/Comments/Comments";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="container">Home Page for {user.name}!</h1>
      <SearchBar />
      <VideoDisplay 
        width="650"
        height="450"
        link={`https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"`}/>
      <NewComment />
      <Comments />
    </div>

    //search bar
    //on search, reveal video, and all comments/postings associated with the video
    //when video is showing, form should show to allow new comment on a video
  );
};

export default HomePage;