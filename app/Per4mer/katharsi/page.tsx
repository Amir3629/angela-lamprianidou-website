'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function KatharsiPage() {
  const katharsiMedia = [
    {
      src: "https://www.youtube.com/watch?v=2qcixgdSbkM",
      alt: "Katharsis Video",
      type: "video" as const,
      title: "Katharsis Video"
    },
    {
      src: "/katharsi_1.jpg",
      alt: "Katharsis",
      type: "image" as const,
      title: "Katharsis"
    },
    {
      src: "/katharsi_2.jpg",
      alt: "Katharsis Performance",
      type: "image" as const,
      title: "Katharsis Performance"
    },
    {
      src: "/katharsi_3.jpg",
      alt: "Katharsis Movement",
      type: "image" as const,
      title: "Katharsis Movement"
    },
    {
      src: "/katharsi_4.jpg",
      alt: "Katharsis Expression",
      type: "image" as const,
      title: "Katharsis Expression"
    }
  ];

  const description = ``;

  const additionalInfo = ``;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={katharsiMedia}
        title="Katharsis"
        photographer="© Photos by Performance"
        imageSize="xlarge"
      />
    </div>
  );
}