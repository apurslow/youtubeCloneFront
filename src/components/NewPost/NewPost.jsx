import axios from 'axios';
import React, { useState} from 'react';
import './NewPost.css';

const NewPost = (props) => {

    const [text, setText] = useState("");

    const addPost = () => {
        axios.post('http://localhost:5000/api/posts/', {
            name: props.user.name,
            text,
            videoId: props.videoId
        })
        .then(res => console.log(res))
        .catch(ex => console.log(ex));
    }

    const onChange = event =>{
      setText(event.target.value);
    }

    const postSubmit = event => {
      event.preventDefault();
      console.log("trigger!")
      addPost();
      setText("");
    }
    return (
        <form id='newPostBox'>
            <label id='newPostPreText' htmlFor="post">Post: </label>
            <textarea  name="post" id="postBox" cols="30" rows="10" onChange={(event => onChange(event))} value={text}></textarea>
            <button id='postButton' onClick={event => postSubmit(event)}>Post</button>
        </form>
    );
  };
  
  export default NewPost;