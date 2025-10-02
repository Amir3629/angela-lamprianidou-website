import MediaGallery from "../../../../components/MediaGallery";

export default function ThenotePage() {
  const noteMedia = [
    {
      src: "/placeholder.jpg",
      alt: "the note",
      type: "image" as const,
      title: "the note"
    }
  ];

  const description = `A work inspired by the relationship between sound and movement, exploring how 
a single note can generate infinite possibilities for physical expression.

The piece investigates the resonance between auditory and kinesthetic experience, 
examining how sound waves translate into movement patterns and how the body 
can become both instrument and interpreter of musical notation.

Through improvisation and structured exploration, "the note" reveals the 
hidden choreography within sound and the musicality inherent in every gesture.`;

  const additionalInfo = `Concept:
An interdisciplinary exploration of sound, movement, and the spaces between them.

Key Elements:
• Sound-movement translation
• Improvisation with musical elements
• Body as instrument and interpreter
• Exploration of rhythm, pitch, and dynamics in movement`;

  return (
    <MediaGallery
      mediaItems={noteMedia}
      title="the note"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}