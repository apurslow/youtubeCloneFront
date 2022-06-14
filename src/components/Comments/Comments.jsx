import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Comments = (props) => {

    const [comments, setComments] = useState([]);
    const videoId = "1234ABCD";

    const getComments =  () => {
        axios.get(`http://localhost:5000/api/posts/${videoId}`)
            .then((res) => setComments(res.data))
            .catch(ex => console.log(`There was an error: ${ex}`));
    }

    useEffect(()=>{
        getComments();
    },[]);

    return (
      <div>
       {comments && comments.map((comment, index) => {
           return(
                <div key={index}>
                    <p>{comment.name}</p>
                    <p>{comment.text}</p>
                    <p>{comment.date}</p>
                </div>
           );
       })}
      </div>
    );
  };
  
  export default Comments;