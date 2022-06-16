import React, {useEffect, useState, useContext, useRef} from 'react';
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import socketIOClient from 'socket.io-client';
import NewPost from '../NewPost/NewPost';
import './Post.css';


const Posts = (props) => {
    const ENDPOINT = "http://localhost:5000";
    const socket = socketIOClient(ENDPOINT);
    
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [updatePost, setUpdatePost] = useState("");
    const videoId = useRef(props.videoId)


    const getPosts =  async () => {
        console.log(props.videoId)
        const response = await axios.get(`http://localhost:5000/api/posts/${videoId.current}`)
        setPosts(response.data);
            // .then((res) => {
            //     console.log(res.data)
            //     setPosts(res.data)
            // })
            // .catch(ex => console.log(`There was an error: ${ex}`));
    }

    useEffect(()=>{
        videoId.current = props.videoId;
        getPosts();
    },[props.videoId,getPosts]);

    useEffect(()=>{
        socket.on("new-post", () => {
            getPosts();
        });
    },[getPosts]);

    useEffect(()=>{
        socket.on("updated-post", () => {
            getPosts();
        });
    },[getPosts]);

    useEffect(()=>{
        socket.on("deleted-post", () => {
            getPosts();
        });
    },[getPosts]);

    const deletePost = (postId) => {
        axios.delete(`http://localhost:5000/api/posts/${postId}`)
            .then(()=> getPosts())
            .catch(ex => console.log(`There was an error: ${ex}`));
    }

    const showHideEditDiv = (index) => {
        document.getElementById(index).style.display === "block" ?
            document.getElementById(index).style.display = "none":
            document.getElementById(index).style.display = "block"
    }

    const editPost = (postId) => {
        axios.put(`http://localhost:5000/api/posts/${postId}`, {
            name: user.name,
            text: updatePost,
            videoId: videoId.current
        })
        .then(res => console.log(res))
        .catch(ex => console.log(ex));
    }

    return (
      <div>
          <NewPost videoId={props.videoId} user={user}/>
       {posts && posts.map((post, index) => {
           return(
                <div id='thePostBoxes' key={index}>
                    <p id='postName'>{post.name}</p>
                    <p id='postText'>{post.text}</p>
                    <p id='postDate'>{post.date}</p>
                    {user.name === post.name ? 
                        <div>
                            <div id={index} style={{display:"none"}}>
                                <textarea value={updatePost} onChange={(event)=>setUpdatePost(event.target.value)}></textarea>
                                <button onClick={()=> {
                                    editPost(post._id);
                                    showHideEditDiv(index);
                                    }
                                }>Update</button>
                            </div>
                            <button onClick={()=> {
                                showHideEditDiv(index); 
                                setUpdatePost(post.text);
                                }
                            }>Edit</button>
                            <button onClick={()=>
                                 deletePost(post._id)
                            }>Delete</button>
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