import MediaGallery from "../../../components/MediaGallery";

export default function CompositionPage() {
  const compositionMedia = [
    {
      src: "/WorkshopAngela201102_1.jpg",
      alt: "Workshop of composition 2011 by Angela Lamprianidou",
      type: "image" as const,
      title: "Workshop of composition"
    }
  ];

  const description = `Composition`;

  const additionalInfo = ``;

  return (
    <MediaGallery
      mediaItems={compositionMedia}
      title="Workshop of composition"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}