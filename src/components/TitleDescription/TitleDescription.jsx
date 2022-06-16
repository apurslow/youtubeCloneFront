import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './TitleDescription.css'

const TitleDescription = ({videoId, api}) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const getTitleDescription =  () => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${api}&part=snippet`)
            .then((res) => {
                setTitle(res.data.items[0].snippet.title)
                setDescription(res.data.items[0].snippet.description)
            })
            .catch(ex => console.log(`There was an error: ${ex}`));
    }

    useEffect(()=>{
        getTitleDescription();
    },[videoId,getTitleDescription]);

    return (
      <div id='title_description_div'>
          <p id='title_description'>{title}</p>
          <p id='title_description_content'>{description}</p>
      </div>
    );
  };
  
  export default TitleDescription;