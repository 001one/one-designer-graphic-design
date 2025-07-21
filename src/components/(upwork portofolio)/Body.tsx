"use client";

import React from "react";
import dynamic from "next/dynamic";
import { PortableText } from "@portabletext/react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface YouTubeNode {
  url: string;
}

interface BodyProps {
  blocks: any[];
}

const serializers = {
  types: {
    youTube: ({ value }: { value: YouTubeNode }) => {
      return (
        <div className="relative w-full aspect-video my-4 overflow-hidden rounded-lg shadow">
  <ReactPlayer
    url={value.url}
    width="100%"
    height="100%"
    controls
    // className="absolute top-0 left-0"
  />
</div>

      );
    },
  },
};

export default function Body({ blocks }: BodyProps) {
  return <PortableText value={blocks} components={serializers} />;
}
