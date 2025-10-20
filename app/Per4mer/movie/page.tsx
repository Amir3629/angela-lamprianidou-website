import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function MoviePage() {
  const movieMedia = [
    {
      src: "/movie01.jpg",
      alt: "Movie performance 1",
      type: "image" as const,
      title: "Movie"
    },
    {
      src: "/movie02.jpg",
      alt: "Movie performance 2",
      type: "image" as const,
      title: "Movie"
    }
  ];

  const description = `This work

A choreographic work that explores the cinematic qualities of movement and performance. This piece examines the relationship between live performance and recorded media, questioning the boundaries between reality and representation. The work incorporates elements of film and video art, creating a unique intersection between choreography and moving image.`;

  const additionalInfo = `It challenges traditional notions of dance performance by integrating multimedia elements and exploring the performative aspects of cinema.

Through this piece, Angela Lamprianidou investigates how bodies move in space when influenced by the language of cinema, creating a dialogue between the immediacy of live performance and the mediated nature of film.

Production: 2005
Choreography: Angela Lamprianidou
Dancer: A.Lamprianidou
Music: Various
Technical details:
Lights: Variable
Stage: Flexible space
Misc: Video equipment, projection
Duration: Variable`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={movieMedia}
        title="Movie"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Angela Lamprianidou"
        imageSize="xlarge"
      />
    </div>
  );
}