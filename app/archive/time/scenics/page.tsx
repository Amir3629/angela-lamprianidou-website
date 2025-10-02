import MediaGallery from "../../../../components/MediaGallery";

export default function TimeScenicsPage() {
  const timeScenicsMedia = [
    {
      src: "/time_sub_6.gif",
      alt: "Time",
      type: "image" as const,
      title: "Time"
    },
    {
      src: "/time_sub_8.jpg",
      alt: "Time process",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/time_sub_9.jpg",
      alt: "Time plan",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/time_sub_10.jpg",
      alt: "Time lights 1",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/time_sub_11.jpg",
      alt: "Time lights 2",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/time_sub_12.jpg",
      alt: "Time lights 3",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/time_sub_13.jpg",
      alt: "Time lights 4",
      type: "image" as const,
      title: "Time Scenics"
    },
    {
      src: "/time_sub_14.jpg",
      alt: "Time lights 5",
      type: "image" as const,
      title: "Time Scenics"
    }
  ];

  const description = `Time (Scenics)`;

  const additionalInfo = ``;

  return (
    <MediaGallery
      mediaItems={timeScenicsMedia}
      title="Time Scenics"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}