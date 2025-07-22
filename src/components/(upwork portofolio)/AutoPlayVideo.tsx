'use client';

import { useEffect, useRef, useState } from 'react';

let allVideos: HTMLVideoElement[] = [];

interface AutoPlayVideoProps {
  src: string;
  poster?: string;
  className?: string;
  height?: string;
  width?: string;
}

export default function AutoPlayVideo({
  src,
  poster,
  className = '',
  height = 'h-[500px]',
  width = 'w-full md:w-[500px]',
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true); // Load the video src
          observer.disconnect(); // Only load once
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);

    return () => observer.disconnect();
  }, []);

  // Once video is loaded, add playback logic
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !shouldLoad) return;

    allVideos.push(videoEl);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          allVideos.forEach((vid) => {
            if (vid !== videoEl) vid.pause();
          });
          videoEl.play().catch((err) => console.warn('Autoplay failed:', err));
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
      allVideos = allVideos.filter((vid) => vid !== videoEl);
    };
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      poster={poster || '/poster.png'}
      muted
      playsInline
      loop
      controls={false}
      preload="none"
      className={`rounded-xl object-cover ring-2 ring-gray-300 ${width} ${height} ${className}`}
      {...(shouldLoad ? { src } : {})}
    />
  );
}
