import MediaGallery from "../../../components/MediaGallery";

export default function FlipFlopPage() {
  const flipFlopMedia = [
    {
      src: "/WorkshopFlipFlopT.jpg",
      alt: "Workshop FlipFlop by Angela Lamprianidou",
      type: "image" as const,
      title: "Workshop of Choreography - Flip Flop for everyone"
    }
  ];

  const description = `Choreography - Flip Flop for everyone

Angela says:  "I dance the way I feel at a given moment. 
If you also would like to experience this sort of dance, 
then we have something in common."  
The aim of this course is to present and  
teach you basic choreographic skills,  
which also include a research tecnique to my own work. 
During the course we will choose a topic  
or let it evolve out of the moment. 
We will discuss questions like: 
 
What does dance mean to you? 
What about composition? 
Presence? 

In addition to the theoretical aspect, 
most of our work will be practical. 
Each course begins with a warm-up phase, 
consisting of contemporary dance and yoga exercises. 
The choreography and compositions skills practised are 
rhythm, space, time, real time and the qualities of movement. 
The course focuses on the topics of dance, space, and motion. 
Participants will learn the basic skills of composition  
and its implementation, including staging and final production. 
They will be thus be encouraged to deepen their understanding 
of the broad spectrum of the performing arts.`;

  const additionalInfo = ``;

  return (
    <MediaGallery
      mediaItems={flipFlopMedia}
      title="Workshop of Choreography - Flip Flop for everyone"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}