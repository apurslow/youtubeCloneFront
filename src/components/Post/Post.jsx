import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import AuthContext from "../../context/AuthContext";

const Posts = (props) => {

    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    const getPosts =  () => {
        axios.get(`http://localhost:5000/api/posts/${props.videoId}`)
            .then((res) => setPosts(res.data))
            .catch(ex => console.log(`There was an error: ${ex}`));
    }

    useEffect(()=>{
        getPosts();
    },[props.videoId]);

    const deletePost = (postId) => {
        axios.delete(`http://localhost:5000/api/posts/${postId}`)
            .then(()=> getPosts())
            .catch(ex => console.log(`There was an error: ${ex}`));
    }

    return (
      <div>
       {posts && posts.map((post, index) => {
           return(
                <div key={index}>
                    <p>{post.name}</p>
                    <p>{post.text}</p>
                    <p>{post.date}</p>
                    {user.name == post.name ? 
                        <div>
                            <button>Edit</button>
                            <button onClick={()=>{
                                 deletePost(post._id)
                            }}>Delete</button>
                        </div> :
                        <div></div>
                    }
                </div>
           );
       })}
      </div>
    );
  };
  
  export default Posts;