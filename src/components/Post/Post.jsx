import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Posts = (props) => {

    const [posts, setPosts] = useState([]);

    const getComments =  () => {
        axios.get(`http://localhost:5000/api/posts/${props.videoId}`)
            .then((res) => setPosts(res.data))
            .catch(ex => console.log(`There was an error: ${ex}`));
    }

    useEffect(()=>{
        getComments();
    },[props.videoId]);

    return (
      <div>
       {posts && posts.map((post, index) => {
           return(
                <div key={index}>
                    <p>{post.name}</p>
                    <p>{post.text}</p>
                    <p>{post.date}</p>
                </div>
           );
       })}
      </div>
    );
  };
  
  export default Posts;