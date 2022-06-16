import React, { useEffect, useState } from "react";
import axios from "axios";

const RelatedVideos = (props) => {
  const [relatedArr, setRelatedArr] = useState("");

  //   function handleClick(event, relatedVid) {
  //     event.preventDefault();
  //     props.videoIdSearch(relatedVid);
  //     console.log("hello");
  //   }

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
      <table>
        <thead>
          <tr>
            <th>Related Videos</th>
          </tr>
        </thead>
        <tbody>
          {relatedArr && relatedArr.map((arr, index) => {
              console.log(arr);
              return (
                <tr key={index}>
                  <td>
                    <button
                      type="button"
                    
                    >
                      <img
                        id="ytplayer"
                        src={`https://i.ytimg.com/vi/${arr}/default.jpg`}
                        alt="NO IMAGE HERE"
                        frameBorder="0"
                      />
                    </button>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RelatedVideos;
