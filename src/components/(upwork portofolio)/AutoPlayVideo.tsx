'use client';

import { useEffect, useRef, useState } from 'react';

interface AutoPlayYouTubeProps {
  videoId: string;
  className?: string;
  height?: string;
  width?: string;
}

export default function AutoPlayYouTube({
  videoId,
  className = '',
  height = 'h-[500px]',
  width = 'w-full md:w-[500px]',
}: AutoPlayYouTubeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load + visibility logic
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Communicate with YouTube iframe
  useEffect(() => {
    if (!iframeRef.current || typeof window === 'undefined') return;

    const postMessage = (command: string) => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
    };

    if (isVisible) {
      postMessage('playVideo');
    } else {
      postMessage('pauseVideo');
    }
  }, [isVisible]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1`;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl ring-2 ring-gray-300 ${width} ${height} ${className}`}
    >
 <div className="relative w-full h-full">
  <iframe
    ref={iframeRef}
    src={embedUrl}
    className="w-full h-full"
    allow="autoplay"
    allowFullScreen
    title="Autoplay YouTube Video"
  />
  {!isVisible && (
    <div className="absolute inset-0 z-10">
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
    </div>
  )}
</div>


    </div>
  );
}
