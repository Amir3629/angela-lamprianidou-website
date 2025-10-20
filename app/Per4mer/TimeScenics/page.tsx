'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function TimeScenicsPage() {
  const timeScenicsMedia = [
    {
      src: "/ti_lights1.jpg",
      alt: "Time Scenics Lights 1",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/ti_lights2.jpg",
      alt: "Time Scenics Lights 2", 
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/ti_lights3.jpg",
      alt: "Time Scenics Lights 3",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/ti_lights4.jpg",
      alt: "Time Scenics Lights 4",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/ti_lights5.jpg",
      alt: "Time Scenics Lights 5",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/ti_pln.jpg",
      alt: "Time Scenics Plan",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/ti_proc.jpg",
      alt: "Time Scenics Process",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/Screenshot 2025-10-19 t 03.08.45.png",
      alt: "Time Scenics Screenshot 1",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/Screenshot 2025-10-19 t 03.08.58.png",
      alt: "Time Scenics Screenshot 2",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/Screenshot 2025-10-19 t 03.09.10.png",
      alt: "Time Scenics Screenshot 3",
      type: "image" as const,
      title: "Time Scenics"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={timeScenicsMedia}
        title="Time (Scenics)"
        description=" "
        photographer=""
        imageSize="xlarge"
      />
    </div>
  );
}
