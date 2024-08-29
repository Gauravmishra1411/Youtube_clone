import React, { useEffect, useState,useCallback } from "react";
import YOUTUBE_VIDEOS_API from  "../until/Api"
import VedioCar from "./VedioCar";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = useCallback(async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      console.log(`api data`)
      const json = await response.json();
      setVideos(json.items);
      console.log(json.items);  // Log json.items to check if it's correct
    } catch (error) {
      // console.log('Failed to fetch videos:', error);
    }
  }, []);

  useEffect(() => {
    getVideos();
  },[getVideos] );

  //   const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   const json = await data.json();
  //   setVideos(json.items);
  //   console.log(videos)
    
  // };

  return (
    <div className="flex flex-wrap">


      {videos.map((video)=>(
        <Link to={"/watch?v="+video.id}><VedioCar key={video.id} info={video}/>
</Link>
      ))}
    
    </div>
  );
};
 export default VideoContainer
