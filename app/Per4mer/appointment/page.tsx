import MediaGallery from "../../../components/MediaGallery";

export default function AppointmentPage() {
  const appointmentMedia = [
    {
      src: "/placeholder.jpg",
      alt: "Appointment # 2",
      type: "image" as const,
      title: "Appointment # 2"
    }
  ];

  const description = `Appointment # 2 - A theatrical dance work exploring themes of connection, identity, and performance.`;

  const additionalInfo = `This is the second iteration of the Appointment series, continuing Angela Lamprianidou's exploration of choreographic rendezvous and encounters with oneself and others.

[Content, images, and videos for this section are pending.]`;

  return (
    <MediaGallery
      mediaItems={appointmentMedia}
      title="Appointment # 2"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}