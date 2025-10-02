import MediaGallery from "../../../components/MediaGallery";

export default function MoviePage() {
  const movieMedia = [];

  const description = `Movie

Once eyes open, once eyes closed, life is over

What is life? Am I homeless? How I love & how I want to be loved?

These themes, which make reflection to the old greek philosophy, are the main points of this film. In what time are we living, and how do we permit ourselves to be true to our illusions? Are the fears stronger then the will? Is there any difference if you grow up in a foreign country? Life can be over fast, why don't we live it as we want?

Love is a dream, life an illusion.`;

  const additionalInfo = `Production: 1999
Direction: A.Lamprianidou
Camera: Marion Hassler
Assistant: Christine Brandner
Sound: Christine Töls

Interprets: Alekos Angeloukos, Alexis Arafakis, Janis Tiko, Kevin Guana, Andy Morice Müller, Markus Kunze, A.Lamprianidou, Klaus Hedrik, Fernando Fernandez, Abdul Harnidi, Sigve Haug`;

  return (
    <MediaGallery
      mediaItems={movieMedia}
      title="Movie"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}