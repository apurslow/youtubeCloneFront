
import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <h1 className="container">Home Page for {user.name}!</h1>
    //search bar
    //on search, reveal video, and all comments/postings associated with the video
    //when video is showing, form should show to allow new comment on a video
  );
};

export default HomePage;