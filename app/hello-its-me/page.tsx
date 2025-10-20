import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";

export default function HelloItsMePage() {
  const helloItsMeMedia = [
    {
      src: "/IMG_7756.jpeg",
      alt: "Hello it's me 1",
      type: "image" as const,
      title: "Hello it's me"
    },
    {
      src: "/IMG_7757.jpeg",
      alt: "Hello it's me 2",
      type: "image" as const,
      title: "Hello it's me"
    },
    {
      src: "/IMG_7758.jpeg",
      alt: "Hello it's me 3",
      type: "image" as const,
      title: "Hello it's me"
    },
    {
      src: "/IMG_7759.jpeg",
      alt: "Hello it's me 4",
      type: "image" as const,
      title: "Hello it's me"
    },
    {
      src: "/IMG_3302.mov",
      alt: "Hello It's Me Video 1",
      type: "video" as const,
      title: "Hello It's Me Video 1"
    },
    {
      src: "/IMG_3156.mov",
      alt: "Hello It's Me Video 2",
      type: "video" as const,
      title: "Hello It's Me Video 2"
    }
  ];

  const description = `"Hello, It's Me" (ta panta rhei) explores the question of how seniors are perceived in our society. In a cross-generational ensemble, people over the age of 70 collaborate to artistically express their experiences and emotions. 

Under the direction of Angela Lamprianidou, a piece is created that presents the older body as an equally valuable and important perspective in dance and performing arts. It challenges society to make space for older individuals, to listen to their voices, and to acknowledge their presence.`;

  const additionalInfo = `The piece invites the audience to overcome generational boundaries and think together 
about an inclusive future where everyone experiences participation and respect.

with : Dorothee Unkelbach, Ingrid Türk, Brigitte Groß,Genoveva Kellnberger.

Unfornatly 2 died so i have to digest and find a way to primier it.

Subventioned by the Dezentrale für Kulturelle Arbeit

Hello it's me – (ta panta rhei) is a piece that especially deals with the perspective of the group in our society affected by ageism. Nevertheless, the piece lives from an intergenerational cast; from inclusion and participation, and consists of senior citizens, amateurs, and old and young professionals.
Especially in dance, the performing arts; which often present virtuosity, i.e. a powerful and healthy body (the able body), old bodies are pushed to the edge and receive no representation. Our piece represents age as a quality.
It builds on a workshop series, also initiated by Lamprianidou and supported, among others, by the Performing Arts Fund: "ta panta rhei – Community Dance" (2022/23), which was specially conceived for senior citizens and, through body work, improvisation and working with inner images, brought into focus the contact with oneself, one's own body, and other bodies.
"Hello it's me" – wants to build upon these experiences of the participants, and together with them artistically develop movement sequences that give expression to their emotions as (among others old) people.
Although they each present themselves individually, their distinct identity does not become tangible: "Hello it's me" – Who is this "I"? – It becomes a you and a we, which directly addresses the audience and is meant to break down its separation from the performers.
In a society we are all together; all affected by ageism – potentially, everyone will become old someday. How can we reimagine care and community together in such a way that everyone participates equally? – Our piece presents approaches to solutions: inclusion becomes something truly experienceable, especially for the participants.
"Hello it's me" (ta panta rhei) deals with the question of how senior citizens are perceived in our society. In an intergenerational ensemble, people over 70 work together to artistically express their experiences and emotions.
Under the direction of Angela Lamprianidou, a piece emerges that presents the older body as an equal and important perspective in dance and the performing arts. It calls on society to create space for older people, to hear their voices, and to recognize their presence.
The piece invites the audience to overcome the separation between generations and to think together about an inclusive future in which everyone experiences participation and respect.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      {/* Title */}
<MediaGallerySeparated
        mediaItems={helloItsMeMedia}
        title="Hello it's me"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Angela Lamprianidou"
        imageSize="xlarge"
      />
    </div>
  );
}