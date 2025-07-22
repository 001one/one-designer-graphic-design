// components/BackButton.tsx
'use client';

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push('/');
        }
      }}
      className="hover:bg-blue-900 hover:text-white p-4 active:bg-blue-900 rounded-xl  bg-blue-600 cursor-pointer text-white inline-block hover:underline "
    >
      ← Back to posts
    </button>
  );
}
