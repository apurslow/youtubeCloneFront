import React, { useEffect, useState } from "react";
import axios from "axios";
import './RelatedVideos.css';
const RelatedVideos = (props) => {
  const [relatedArr, setRelatedArr] = useState("");

  const handleClick = (id) => {
      props.setVideoId(id)
  }

  const relatedVideos = async () => {
    let response = await axios
      .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${props.api}`)

      console.log(response.data);

        const vidIDs = response.data.items.map((rv) => {
          return(rv.id.videoId)
        });
        setRelatedArr(vidIDs);
  };

  useEffect(() => {
    setRelatedArr("");
    relatedVideos();
  }, [props.videoId]);

  return (
    <div>
      <table id="relatedVideosTable">
        <thead id="relatedVideosTableHead">
          <tr>
            <th>Related Videos</th>
          </tr>
        </thead>
        <tbody id="relatedVideosTableBody">
          {relatedArr && relatedArr.map((arr, index) => {
              console.log(arr);
              return (
                
                  <td id="buttonWrap" key={index}>
                    <button id="youtubeLinkButton"
                      type="button"
                    onClick={() => handleClick(arr)}
                    >
                      <img
                        id="ytplayerRelated"
                        src={`https://i.ytimg.com/vi/${arr}/default.jpg`}
                        alt="NO IMAGE HERE"
                        frameBorder="0"
                      />
                    </button>
                  </td>
                
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RelatedVideos;
