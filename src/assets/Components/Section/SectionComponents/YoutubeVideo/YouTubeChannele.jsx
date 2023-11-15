import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyCFkfujxRn79553E8BXZTjXABbUJRZLs0M';
const CHANNEL_ID = 'UCxHoBXkY88Tb8z1Ssj6CWsQ';

const YouTubeChannele = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
// Inside the fetchVideos function
try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
    );
  
    setVideos(response.data.items);
  } catch (error) {
    console.error('Error fetching videos:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
  
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>YouTube Channel Videos</h1>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <iframe
              title={video.snippet.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannele;
