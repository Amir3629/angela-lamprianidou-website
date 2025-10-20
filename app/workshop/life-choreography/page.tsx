import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function LifeChoreographyPage() {
  const lifeChoreographyMedia = [
    {
      src: "/ws_lifechoreography.png",
      alt: "Workshop Lifechoreography by Angela Lamprianidou",
      type: "image" as const,
      title: "Workshop Lifechoreography",
      credit: "© Photo by Menelaos Liontos"
    }
  ];

  const description = `Life choreography is an artistic invitation 
to connect the inner space with the outer space.
"The way you breathe (inside), things can happen outside"

Breathing as a vehicle of space.

Choros (GR) means space, what we need so that something grows, expands.`;

  const additionalInfo = `Graphie (GR): The writing, choreography, the written in space.

We write with the whole body and create space, more space, more awareness, more creativity.

The jaw acts as the first point of relaxed communication in these spaces.

According to my jaw release method, which brings all articulations of the body and organs together with the jaw and lets it release old tensions, I invite you to experience the space that you creative people want to implement differently.

In a relaxed state, you plan better and can decide more clearly what is really important to you!

Life choreography is a change, a different approach in life to invite what fulfills you.
Sensing, rhythm, real time improvisation, breathing and other choreographic skills are taught.
I am looking forward to this blend of life, being alive, jaw and creation!

More information:
https://web.archive.org/web/20200821103008/https://www.marameo.de/workshop/jaw-release-workshop-en-2/

Workshop Flyer:
/Flyer_WS_LifeChoreography_marameo_A4-1_3_Ver2.pdf`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      {/* Title */}
<MediaGallerySeparated
        mediaItems={lifeChoreographyMedia}
        title="Life Choreography"
        description={description}
        additionalInfo={additionalInfo}
        photographer=""
        imageSize="xlarge"
      />
    </div>
  );
}