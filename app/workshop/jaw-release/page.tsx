import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function JawReleasePage() {
  const jawReleaseMedia = [
    {
      src: "/IMG_4069.JPG",
      alt: "Jaw Release Workshop",
      type: "image" as const,
      title: "Jaw Release Workshop"
    },
    {
      src: "/IMG_8528.jpg",
      alt: "Jaw Release Workshop",
      type: "image" as const,
      title: "Jaw Release Workshop"
    },
    {
      src: "/Jaw Choraogrphie.jgp.jpg",
      alt: "Jaw Release Workshop",
      type: "image" as const,
      title: "Jaw Release Workshop"
    },
    {
      src: "/JAW RELEASE PIC2.jpg",
      alt: "Jaw Release Workshop",
      type: "image" as const,
      title: "Jaw Release Workshop"
    },
    {
      src: "https://vimeo.com/manage/videos/904403735",
      alt: "Jaw Release Workshop Video",
      type: "video" as const,
      title: "Jaw Release Workshop Video"
    },
    {
      src: "https://www.youtube.com/watch?v=PHGGa9Z00hY",
      alt: "Jaw Release Workshop YouTube Video",
      type: "video" as const,
      title: "Jaw Release Workshop YouTube Video"
    }
  ];

  const description = `In this workshop, you are invited to explore the functionality and anatomy of your jaw — the interplay between upper and lower jaw, the layered complexity of this small, often overlooked articulation.
It's not just about muscles, joints, and bones - but about space.
Inner space.
Space where new movements, thoughts, and feelings are allowed to arise.
Space for your being.
Space for communication - with yourself and with others.`;

  const additionalInfo = `Day 1: Arriving - Listening - Making Space
We begin with a first approach to the jaw:
What does it mean to be in a resting-floating state?
"The jaw joint slides forward and backward, up and down - in a small socket of the upper jaw. The ideal distance: 2 millimeters. Then you are in your resting-floating state. A state in which your jaw - and you — are allowed to come to rest." Through targeted breathing techniques, we balance our nervous system.
At the center is the Polyvagal Theory by Dr. Stephen Porges - an invitation to harmonize the vagus nerve through breath, movement, and presence.
I invite you into spaces - both inner and outer.
As a choreographer, I will guide you through movement and imagination to support your physical and mental flexibility.

Day 2: Opening - Connection - Digestion
On the second day, we dive deeper into the connection between pelvis and jaw — the two "gatekeepers" of our body.
Entrance and exit. Nourishment. Digestion. Expression.
We work with partner exercises, deep listening, and conscious contact - everything is welcome, nothing is forced.
Please bring comfortable clothing, food & water - and your openness: be open to receive.

Day 3: Expression - Voice - Integration
On the third day, all elements come together:
Movement, breath, voice.
Your jaw becomes a bridge - between inner and outer worlds, between emotion and expression.

We work with:
• Voice work (toning, simple melodies, intuitive sounds)
• Movement choreographies from dance and somatic practices
• Emotional resonance through sound

Your voice is the expression of your mood.
Sounds that touch. Movement that connects.

We close the workshop with a ritual sequence, where you are invited to explore:
What does your jaw want to tell you?
If you listen, it will lead you directly to your feeling.
"Feel"-ings. Joints. Movement.
A choreography of medicine and dance.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      <MediaGallerySeparated
        mediaItems={jawReleaseMedia}
        title="Jaw Release Workshop"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by [Photographer Name]"
        imageSize="xlarge"
      />
    </div>
  );
}