import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const YouTubeChannel = ({ apiKey, channelId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: apiKey,
              channelId: channelId,
              part: 'snippet',
              maxResults: 10, // Change this as needed
              order: 'date', // You can choose a different order
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [apiKey, channelId]);

  return (
    <div>
      <h1>YouTube Channel Videos</h1>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <YouTube videoId={video.id.videoId} />
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannel;
