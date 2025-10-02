import MediaGallery from "../../../components/MediaGallery";

export default function CIAPage() {
  const ciaMedia = [
    {
      src: "/WorkshopCIAMail_1.jpg",
      alt: "Workshop of composition 2009 by Angela Lamprianidou",
      type: "image" as const,
      title: "Workshop CIA"
    }
  ];

  const description = `CIA`;

  const additionalInfo = ``;

  return (
    <MediaGallery
      mediaItems={ciaMedia}
      title="Workshop CIA"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}