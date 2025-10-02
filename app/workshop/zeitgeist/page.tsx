import MediaGallery from "../../../components/MediaGallery";

export default function ZeitgeistPage() {
  const zeitgeistMedia = [
    {
      src: "/zeitgeist_docx.png",
      alt: "Workshop Gegen den Zeitgeist",
      type: "image" as const,
      title: "Workshop Gegen den Zeitgeist"
    }
  ];

  const description = `Gegen den Zeitgeist

Breath, body, voice, word, 


A workshop with Matti Melchinger 
and Angela Lamprianidou 

In the workshop "Against the Zeitgeist" we go into the search 
for truthfulness in communication. How do I transform myself 
before, during and after a crisis, or a pandemic experience 
as we are currently experiencing it, How can we create creative 
potential in a time of supposed perfection through the incompletion. 
Which tools are necessary to be able to reproduce true feelings 
in words and movements in this world ?  
In our daily life and in our artistic enviroment.
 
By combining their two techniques, which have been developed 
over many years of experience, Lamprianidou and Melchinger 
accompany you through this two-day workshop. We go in a search 
of the natural breath, the flowing body, our own voice - the 
direct word into the momentum. We experience the moment as a 
simple yet radical and focused devotional state in our life.

Through the combination of Jaw Release, Linklater Technique, 
Yoga, Choreography and acting exercises, we go through the 
four levels from breath to body to voice.

Angela Lamprianidou (choreographer, dancer, dentist, life&jaw coach) 
and Matti Melchinger (actor, director, lecturer in speech training) 
offer for the first time a mixture of performing arts techniques 
for all people, both in their own lives and on stage want to deal 
with the incomplete against the zeitgeist.`;

  const additionalInfo = `More information:
https://web.archive.org/web/20200821102205/https://www.tanzraumberlin.de/artikel/gegen-den-zeitgeist-in-die-mitte-augenblicke/

PDF: /GegenDenZeitgeistWorkshop.pdf`;

  return (
    <MediaGallery
      mediaItems={zeitgeistMedia}
      title="Workshop Gegen den Zeitgeist"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}