import MediaGallery from "../../../components/MediaGallery";

export default function DanceNewsPage() {
  const danceNewsMedia = [
    {
      src: "/AngelaLamprianidou-Dancenew01.jpg",
      alt: "Workshop Dancenew(s) by Angela Lamprianidou",
      type: "image" as const,
      title: "Workshop Dance News"
    }
  ];

  const description = `Dance News

does 'new' exist for you? 
 
as a dancer, as an artist,  
as an observer, as a human, 
what does 'new' mean to you?  
 
The aim is to develop a space 
where you will be able to make 
something new and personal to you.  
We will shape and search for this 'new' by using 
somatic choreographic skills and staging  methods.  
Please bring your 'new(s)' with you, on you, 
in you, around you and be ready to explore! 
 
During breathing there is a pause. 
 
A breath pause.  A pause of air. 
 
In this pause there is nothing, 
just emptiness where everything is possible 
this is where the new grows. 
 
We will use natural action such as  
Rudolf Laban's whipping, pulling and running  
between others, while being aware of how our 
breath reacts to those actions 
and what occurs to the outside space. 


This workshop is a melange of an intellect yoga (shri vivek),  
which explores the real need of you and the creation 
during choreography or performance.`;

  const additionalInfo = ``;

  return (
    <MediaGallery
      mediaItems={danceNewsMedia}
      title="Workshop Dance News"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}