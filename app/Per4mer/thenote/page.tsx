import MediaGallery from "../../../components/MediaGallery";

export default function TheNotePage() {
  const noteMedia = [
    {
      src: "https://lamprianidou.com/Per4mer/Workshop/TheNote/bild_flyer3.jpg",
      alt: "The note workshop flyer",
      type: "image" as const,
      title: "the note"
    }
  ];

  const description = `the note

Choreographic Experiment

Roll change: the choreographer became the interprete, 4 artists with a different background, the choreographers.

Concept: I gave some video recordings of my rehearsals, to Yianis Kolios, Filmdirector, Xristos K, Painter/ Designer, Pheobe Killdeer, Musician and Singer and Mirjam Dumont Illustrator.

They should create in 15 hours their own choreographies which should have a duracion of 5-10 minutes.

I was only the note, the storry, idear dramaturgy where set up by mirjam, phoebe, yiannis and xristos.

My main question during the concept was:
Can someone out of the dance world do a choreography?

Idear, concept, choreography Angela Lamprianidou

The note crew- dramaturgy & idear
Yiannis Kolios
Xristos Karageorgoudis
Phoebe Killdeer
Mirjam Dumont
Fashions Pia Fischer

With the support of the "Dezentrale Kulturstiftung Schöneberg"

Showing at Showroom Berliini, Charlottenstrasse 95 Berlin Mitte 28.3.2015 20h
https://web.archive.org/web/20150329005045/http://www.showroomberliini.com/events/4586253301

CV von den Künstlern

Yiannis Kolios Gr
studied Graphic Arts & Photography in Thessaloniki and Film direction in Athens. He has worked in various feature and short films and he has directed short movies and videos.

Theme:
"Face/To face" is about the emotional state of a break up. The performer is not actually facing the other but rather her own vulnerabilities. It is a psychological rehearsal that she puts herself through in order to overcome her fears and to remain focused on her decision. Focused on her partner's face she walks on a straight line as if she walks on a tightrope. Being strong and keeping the balance is the only option to reach the goal since there are no second chances neither a safety net under her feet.

Xristos Karageorgoudis:
was born 20th Oct of 79 at Dieffenbachstrasse 1 by a Bohrerin
ID. code Christos Karageorgoudi

Theme:
I am Art-
a full stomach, to be forced to produced.
i am the emptiness-doctrine, of a desperate stomach.
I am you. Arrogant and broken, an existence of believing, some how some where and nowhere!

Mirjam dumont:
Lives and works as an illustrator, graphic designer and photographer in Berlin.

Theme: LEBEN how to become an artist
my project with angela lamprianidou is about relationship of form, material and movement. So i will put the dancer into certain masks and forms - sculpturelike- and let her tell those stories of mask and movement.

Phoebe Killdeer:
is a singer/songwriter based in Berlin from Australian origin. She grew up in South of France and London and is now living in Berlin. She has taken part in various projects, but broke through the scene singing with 'Nouvelle Vague' in 2005. Since then she has released 2 solo albums under 'Phoebe Killdeer and The Short Straws' and working on other collaborations as well as writing compositions for 'laborgras' Dance Company.

A woman well advanced into her pregnancy has lost the enchantment of being pregnant. She feels large and lonely and wants to reconnect with the attractive girl she once was. She moves around the room pretending to not be pregnant, flirting with the world around to reinvigorate her femininity.`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-dark-overlay font-variation-1 media-screen-medium" style={{
      backgroundImage: `url('https://lamprianidou.com/Per4mer/Workshop/TheNote/bild_flyer3.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallery
        mediaItems={noteMedia}
        title={
          <a
            href="https://lamprianidou.com/Per4mer/Workshop/TheNote/the_note2.pdf"
            target="_blank"
            className="text-green-400 hover:text-green-300 underline"
          >
            the note
          </a>
        }
        description={description}
        rightImageSrc="/bottom_right_image.png"
        photographer="Mirjam Dumont"
        disableBackground={true}
      />
    </div>
  );
}