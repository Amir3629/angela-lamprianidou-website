import MediaGallery from "../../components/MediaGallery";

export default function ArchivePage() {
  const archiveMedia = [
    {
      src: "/placeholder.jpg",
      alt: "Archive",
      type: "image" as const,
      title: "Archive"
    }
  ];

  const description = `Archive of Angela Lamprianidou's earlier works and performances.

This section contains archived performances and works from earlier periods of Angela's artistic career.`;

  const additionalInfo = `Archive Performances:
• el cuerpo del otro
• time
• loop
• katharsi
• shortcuts
• art sit
• movie

Navigation:
• Bio
• Press
• Contact
• Collaborations

Back to my actual shows`;

  return (
    <MediaGallery
      mediaItems={archiveMedia}
      title="Archive"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}