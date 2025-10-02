import MediaGallery from "../../../components/MediaGallery";

export default function TaPantaReiPage() {
  const taPantaReiMedia = [
    {
      src: "/ta-panta-rei-seniors.mp4",
      alt: "Ta Panta Rei Seniors Workshop Video",
      type: "video" as const,
      title: "Ta Panta Rei"
    },
    {
      src: "/Ta-pandan-rhei1.jpg",
      alt: "Ta Panta Rei Seniors Workshop",
      type: "image" as const,
      title: "Ta Panta Rei"
    },
    {
      src: "/Tapantare.jpg",
      alt: "Ta Panta Rei",
      type: "image" as const,
      title: "Ta Panta Rei"
    },
    {
      src: "/ta-panta-rei-seniorienen-workshop2.jpg",
      alt: "Ta Panta Rei Seniors Workshop",
      type: "image" as const,
      title: "Ta Panta Rei"
    }
  ];

  const description = `Ta Panta Rei - Seniors Workshop`;

  const additionalInfo = ``;

  return (
    <MediaGallery
      mediaItems={taPantaReiMedia}
      title="Ta Panta Rei - Seniors Workshop"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}