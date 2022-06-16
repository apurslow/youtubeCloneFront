import axios from 'axios';
import React, { useState} from 'react';

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
        <form>
            <label htmlFor="post">Post: </label>
            <textarea name="post" id="post" cols="30" rows="10" onChange={(event => onChange(event))} value={text}></textarea>
            <button onClick={event => postSubmit(event)}>Post</button>
        </form>
    );
  };
  
  export default NewPost;