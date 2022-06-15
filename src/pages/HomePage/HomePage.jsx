
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import SearchBar  from "../../components/SearchBar/SearchBar";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";
import TitleDescription from "../../components/TitleDescription/TitleDescription";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const api = 'AIzaSyCRiz10pGZ397YAmyCOvCQDDuFNJmUFZE0';

  const videoSearch = () => {
    if(search)
      axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${api}`)
      .then(res => setVideoId(res.data.items[0].id.videoId));
  }

  useEffect(() => {
      videoSearch();
  },[search])

  return (
    <div>
      <h1 className="container">Home Page for {user.name}!</h1>
      <SearchBar setSearch={setSearch}/>
      {videoId &&
      <>
      <VideoDisplay 
        width="650"
        height="450"
        videoId={videoId}
      />
      <TitleDescription videoId={videoId} api={api} />
      <NewPost videoId={videoId}/>
      <Post videoId={videoId}/>
      </>
      }
    </div>

    //search bar
    //on search, reveal video, and all comments/postings associated with the video
    //when video is showing, form should show to allow new comment on a video
  );
};

export default HomePage;