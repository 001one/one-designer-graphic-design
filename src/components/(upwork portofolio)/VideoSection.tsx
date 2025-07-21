// 'use client';

import AutoPlayVideo from './AutoPlayVideo';
import VideoTextBlock from './VideoTextBlock';

interface VideoSectionProps {
  src: string;
  poster?: string;
  text: string;
  reverse?: boolean;
}

export default function VideoSection({ src, poster, text, reverse = false }: VideoSectionProps) {
  return (
   <div
  className={`flex flex-col md:flex-row ${
    reverse ? 'md:flex-row-reverse' : ''
  } items-center gap-6 md:gap-5 px-6 py-12 md:px-20 md:py-16 md:mx-50 shadow-lg mt-20 `}
>
  <div className="w-full md:w-1/2 flex justify-center">
    <AutoPlayVideo src={src} poster={poster} />
  </div>
  <div className="w-full md:w-1/2">
    <VideoTextBlock text={text} />
  </div>
</div>


  );
}

