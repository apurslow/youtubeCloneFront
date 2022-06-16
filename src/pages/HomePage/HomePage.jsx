
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import SearchBar  from "../../components/SearchBar/SearchBar";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import Post from "../../components/Post/Post";
import TitleDescription from "../../components/TitleDescription/TitleDescription";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState(null);
  const [videoId, setVideoId] = useState(null);
<<<<<<< HEAD
  const api = 'AIzaSyDLSV2GMYdeeeoaTK7-qF443k3VXMbBPUY';
=======
  const api = 'AIzaSyDn97ZAkDkv5ptUzvUSW_sFht-C1IlR588';
>>>>>>> 3f9562071c9785b3ef02d46e92c8005bc36cd8d6

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
      <h1 className="container">Home Page for {user.name}!</h1>
      <SearchBar setSearch={setSearch}/>
<<<<<<< HEAD
      
        <VideoDisplay 
        width="650"
        height="450"
        videoId={videoId}
        />
      
      <NewPost videoId={videoId}/>
=======
      {videoId &&
      <>
      <VideoDisplay 
        width="650"
        height="450"
        videoId={videoId}
      />
      <TitleDescription videoId={videoId} api={api} />
>>>>>>> 3f9562071c9785b3ef02d46e92c8005bc36cd8d6
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