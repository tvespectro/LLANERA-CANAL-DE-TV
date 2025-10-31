
import React, { useEffect, useRef } from 'react';

// Declare videojs on the window object for TypeScript
declare global {
  interface Window {
    videojs: any;
  }
}

const LiveScreen: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Make sure Video.js is available
    if (!videoRef.current) {
      return;
    }
    
    // Ensure we don't initialize the player more than once
    if (playerRef.current) {
        return;
    }

    const videoElement = videoRef.current;
    
    playerRef.current = window.videojs(videoElement, {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      liveui: true,
    }, () => {
      console.log('Player is ready');
    });

    // Cleanup when component unmounts
    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="p-4 bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Canal en Vivo</h1>
      <div data-vjs-player className="w-full max-w-4xl shadow-lg">
        <video
          ref={videoRef}
          id="videoPlayer"
          className="video-js vjs-big-play-centered"
          poster="https://picsum.photos/seed/livetv/1280/720"
        >
          <source src="https://tvspectro.moxapps.shop/live/22OeaFNKyCOwDoFdVOOAwrPDJkx1/index.m3u8" type="application/x-mpegURL" />
        </video>
      </div>
    </div>
  );
};

export default LiveScreen;
