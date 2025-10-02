import MediaGallery from "../../../components/MediaGallery";

export default function LoopPage() {
  const loopMedia = [];

  const description = `Loop

Loop pictures the vibrating gravity that surrounds us. The speed of contemporary life is transforming bodies into shaking spasmatic movements, as heard in Janis Christu's music, as to be seen in A.Lamprianidou's performance.

We are in the 21st century and theatre has to become reality and not fiction. I wish that Loop, as it is created in a very plastic character and works as a picture due to her reiteration will penetrate with the critique it contains to the observer.

That's why I wish Loop to get the opportunity to be performed in public areas, so people of all ages can be involved. And if even just a few will get the message and not only professionals, I will be delighted. As far as I'm concerned dance or art in general has a educational effect in life.

Loop can also be presented in supermarkets or open public areas. As we know, dance for herself is a very abstract and ephemera art, I would like to dedicate my piece to all mankind, disregarding age or backgrounds and every in order to feel the motion.`;

  const additionalInfo = `Production: 2005
Choreography: Angela Lamprianidou
Dancer: A.Lamprianidou
Music: Jannis Christu

Technical details:
Lights: 1 spot
In indoor performances loop can be variated to work with 3 hanging spots, changing placement during the performance, so creating another perception and rhythm.
Stage: can be performed at any space, indoor or outdoor, especially museums, galleries, would work perfect as opening act for bigger performances, shows etc.
Misc: CDplayer
Duration: 4-5 min.

performed in 2005
can prolonged to various repetitions, so duration can be with breaks about hours.`;

  return (
    <MediaGallery
      mediaItems={loopMedia}
      title="Loop"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}