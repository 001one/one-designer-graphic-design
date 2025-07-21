'use client';

import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    allVideos.push(videoEl);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Pause all other videos
          allVideos.forEach((vid) => {
            if (vid !== videoEl) {
              vid.pause();
            }
          });

          // Play current
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
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="auto"
      controls={false}
      loop
       className={`rounded-xl object-cover ring-2 ring-gray-300 ${width} ${height} ${className}`}
    />
  );
}
