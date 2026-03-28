import { useState } from "react";

const VideoSection = ({ folder }) => {
  const posiblesVideos = [
    `/videos/${folder}/video1.mp4`,
    `/videos/${folder}/video2.mp4`,
    `/videos/${folder}/video3.mp4`,
  ];

  const [videosValidos, setVideosValidos] = useState([]);

  const handleLoaded = (src) => {
    setVideosValidos((prev) => [...prev, src]);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

      {posiblesVideos.map((video, index) => (
        <video
          key={index}
          src={video}
          className="hidden"
          onLoadedData={() => handleLoaded(video)}
          onError={() => {}}
        />
      ))}

      {videosValidos.map((video, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
        >
          <video
            src={video}
            controls
            className="w-full h-56 object-cover"
          />
        </div>
      ))}

    </div>
  );
};

export default VideoSection;