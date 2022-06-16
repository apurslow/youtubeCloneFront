
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import SearchBar  from "../../components/SearchBar/SearchBar";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";
import TitleDescription from "../../components/TitleDescription/TitleDescription";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const api = 'AIzaSyDLSV2GMYdeeeoaTK7-qF443k3VXMbBPUY';

  const videoSearch = () => {
    if(search)
      axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${api}`)
      .then(res => setVideoId(res.data.items[0].id.videoId));
  }

  useEffect(() => {
      videoSearch();
  },[search])

  return (
    <div id="=mainContent" align="center">
      <h1 id="homePageTitle" className="container">Home Page for {user.name}!</h1>
      <SearchBar setSearch={setSearch}/>
      {videoId &&
      <>
      <VideoDisplay 
        width="650"
        height="450"
        videoId={videoId}
      />
      <TitleDescription videoId={videoId} api={api} />
      <Post videoId={videoId}/>
      <RelatedVideos videoId={videoId} api={api} setVideoId={setVideoId}/>
      </>
      }
    </div>
  );
};

export default HomePage;