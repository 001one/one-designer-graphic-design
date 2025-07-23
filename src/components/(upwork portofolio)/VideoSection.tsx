// 'use client';


import AutoPlayYouTube from './AutoPlayVideo';
import VideoTextBlock from './VideoTextBlock';

interface VideoSectionProps {
  videoId: string;
  text: string;
  reverse?: boolean;
}

export default function VideoSection({
  videoId,
  text,
  reverse = false,
}: VideoSectionProps) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center gap-6 md:gap-5 px-6 py-12 md:px-20 md:py-16 md:mx-50 shadow-lg mt-20`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <AutoPlayYouTube videoId={videoId} />
      </div>
      <div className="w-full md:w-1/2">
        <VideoTextBlock text={text} />
      </div>
    </div>
  );
}
