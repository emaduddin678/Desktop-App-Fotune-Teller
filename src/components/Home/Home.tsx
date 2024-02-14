import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  // Function to toggle full screen using f key
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`
        );
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  const playVideoWithSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // console.log(event.keyCode);
      if (event.key === "F" || event.key === "f") {
        toggleFullScreen();
      } else if (event.key === "M" || event.key === "m") {
        playVideoWithSound();
      } else if (event.key === " ") {
        // Space key
        navigate("/register");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className="full-screen-video">
      <video ref={videoRef} autoPlay loop muted>
        <source src="banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
