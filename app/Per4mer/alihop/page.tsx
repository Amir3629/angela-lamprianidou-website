import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function AlihopPage() {
  const alihopMedia = [
    {
      src: "https://vimeo.com/21881790",
      alt: "Alihop performance video 1",
      type: "video" as const,
      title: "Alihop Performance Video 1"
    },
    {
      src: "https://vimeo.com/156945522",
      alt: "Alihop performance video 2",
      type: "video" as const,
      title: "Alihop Performance Video 2"
    },
    {
      src: "https://vimeo.com/156945827",
      alt: "Alihop performance video 3",
      type: "video" as const,
      title: "Alihop Performance Video 3"
    },
    {
      src: "https://lamprianidou.com/Per4mer/alihop/alihop01.jpg",
      alt: "Alihop performance 1",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/alihop/alihop02.jpg",
      alt: "Alihop performance 2",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "/Alihop.jpeg",
      alt: "Alihop",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "/Alihop1.jpeg",
      alt: "Alihop",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/alihop/alihop_bw1.jpg",
      alt: "Alihop performance black and white 1",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/alihop/alihop03.jpg",
      alt: "Alihop performance 3",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/alihop/alihop_bw2.jpg",
      alt: "Alihop performance black and white 2",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/alihop/alihop10.jpg",
      alt: "Alihop performance 4",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/alihop/alihop11.jpg",
      alt: "Alihop performance 5",
      type: "image" as const,
      title: "Alihop Performance"
    }
  ];

  const description = `Alihop

Alihop does not stem from a predetermined topic, 
but arose from the search for dance-related movements. 
Body language led to ideas for certain choreography moves. 
It might be surprising, then, that a piece that started with improvisation 
has ended up with horse riding as its main subject. 

Because dance is always about taming: 
dancers domesticate their bodies; 
choreographers tame dancers. 
And that is what we see in the most popular interpretations of dance, 
from the dance classes in the classic TV series Fame 
to the torturous choreography work in the recent Hollywood movie Black Swan. 

For centuries the techniques of domestication have been inscribed into our bodies. 
The animal - the horse - is the Other, the known Other, the tamed Other. 
Bigger and stronger than man, it lets itself be brought down and tamed. 

The noblest fighter is the knight - caballero in Spanish, Ritter in German 
 - a word that is used also for a man with good manners. The tamed tamer. 
A figure we have known well throughout history, 
from Genghis Khan to General Franco - a man who tried to make himself immortal 
by setting up thousands of statues of him riding a horse. 
The horse as a metaphor has become part of our subconscious: 
one of the classic examples in psychoanalysis is the case of little Hans, the boy who fears horses. 
Freud interpreted this as the son's fear of his father in the struggle for the love of the mother. 

We don't have space to go into other details here, for example the meaning of the whip, 
or the dominatrix in S&M practice, or the fact that George W Bush has never been seen on a horse. 
We should simply take our seat in the theatre and observe the human body taking possession of space 
and each of us will find our own images or thoughts. 

Alihop offers an original exploration of our centuries-old passage 
through movement - walking, riding, driving or flying.`;

  const additionalInfo = `premiere 2011 at the antic teatre barcelona 

lights: Ignasi llorens 
Music: Paul Rose, Schubert 
Choreography and Performance: A.Lamprianidou 
duration: 30min`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-medium-overlay font-variation-4" style={{
      backgroundImage: `url('https://lamprianidou.com/Per4mer/alihop/alihop01.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={alihopMedia}
        title="Alihop"
        description={description}
        additionalInfo={additionalInfo}
        photographer="Dimitris Pikors"
        className="media-screen-large"
      />
    </div>
  );
}