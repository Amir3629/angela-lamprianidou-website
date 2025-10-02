import MediaGallery from "../../components/MediaGallery";

export default function BioPage() {
  const bioMedia = [
    {
      src: "https://lamprianidou.com/Per4mer/bio/Angela-In.jpg",
      alt: "Angela Lamprianidou",
      type: "image" as const,
      title: "Angela Lamprianidou"
    }
  ];

  const description = `Biography

Angela Lamprianidou is a Greek choreographer, grown up in Essen
-Germany and later emigrated to Barcelona.
In Barcelona, she studied 4 years, choreography and new techniques 
of interpretation at the "Institut del Teatre Barcelona", in Essen 
dance at "Luis Mijares dance Studio", Arnaldo Alvarez (Pina Bausch Company)
and Ballett with Henrike Guha in Fürth, in Erlangen Dentistry at the 
"Friedrich Alexander University Erlangen-Nürnberg". 

This melange de trois  makes her pieces like conspiracies, 
with a looping logic and a certain tenaciousness, when 
it comes to understanding/appreciating pure form and energy.


Angela lived in Barcelona for 13 years. Her teachers recognised very 
quickly her exceptional ability to focus on staging and choreographing. 
She has received several honours for composition, staging and dance 
history, and has won diverse awards, such as"danse mes a prop 
barcelona, no ballet Ludwigshafen among others. But when she realized 
that competitions are for horses not artists, she stopped competing.. She 
has collaborated with theaters such as the"mercat de les flors,"antic 
teatre,""national teatre of catalonià", and also underground spaces and 
faces.


She presently lives also in Berlin and is a freelancer choreographer –teacher – Doctor 
with a transcendental kidney. She specialises in temporomandibular joint problems. 
https://www.you-are-the-point.de
She is a qualified Yoga teacher and Yoga Coach, certified by 
the "Shrivivek Center of Barcelona".
During her dance education, she studied Klein technique with Barbara Mahler 
and has participated in several workshops of BMC and somatic healing movement.

In 2019 she founded Homεmotion, a place to 
expand and create new Visions in Athens Center. 
She is the artistic director of this Artist residency.


 For more information please contact her at angelabrillante@gmail.com`;

  const additionalInfo = ``;

  return (
    <MediaGallery
      mediaItems={bioMedia}
      title="Angela Lamprianidou - Choreographer & Performer"
      description={description}
      additionalInfo={additionalInfo}
      photographer="Brieuc Le Meur"
    />
  );
}