import MediaGallery from "../../../components/MediaGallery";

export default function JawReleasePage() {
  const jawReleaseMedia = [
    {
      src: "/JAW_PIC.jpeg",
      alt: "Jaw and Body Release",
      type: "image" as const,
      title: "Jaw and Body Release",
      credit: "©"
    },
    {
      src: "/C_kathrine_Gervais_Jose.jpg",
      alt: "Jaw and Body Release",
      type: "image" as const,
      title: "Jaw and Body Release",
      credit: "© Kathrine Gervais Jose"
    },
    {
      src: "/IMG_5662.jpeg",
      alt: "Jaw and Body Release",
      type: "image" as const,
      title: "Jaw and Body Release",
      credit: "©"
    },
    {
      src: "/Jaw_Bild.jpg",
      alt: "Jaw and Body Release",
      type: "image" as const,
      title: "Jaw and Body Release",
      credit: "©"
    },
    {
      src: "/C_sakis_kyratzis.jpg",
      alt: "Jaw and Body Release",
      type: "image" as const,
      title: "Jaw and Body Release",
      credit: "© Sakis Kyratzis"
    },
    {
      src: "/JAW_PICC.jpeg",
      alt: "Jaw and Body Release",
      type: "image" as const,
      title: "Jaw and Body Release",
      credit: "©"
    },
    {
      src: "/sanfransico.jpg",
      alt: "Jaw and Body Release San Francisco",
      type: "image" as const,
      title: "Jaw and Body Release",
      credit: "©"
    },
    {
      src: "/workshop-sounding-jaw-wien.jpg",
      alt: "The Sounding Jaw Wien TQW",
      type: "image" as const,
      title: "Jaw and Body Release",
      credit: "©"
    }
  ];

  const description = `Jaw and Body Release

The jaw, the temporomandibular joint, the mouth, the teeth, the muscles in the surrounding 
anatomical fields - they are all connected to all other joints and organs.
The jaw region is - in my experience as a choreographer, dancer, dentist and yoga coach -  
rarely included in a physical training.

The first day of the workshop will focus on the following areas:

Jaw related to hips and repressed emotions.

On the second day: organs teeth and jaw

On both days we practice different breathing techniques, including polyvagal breathing, to 
stabilize the central nervous system.

# In my view, the jaw joint stands as a metaphor for life: Nourishment, Communication, 
Movement: "if you can let go of the jaw, you can surrender"
# Sexual repression can also be closely related to clinging.
# Many people suffer from the consequences of teeth grinding or clenching , and often have 
little knowledge about this joint that affects the whole body: skeleton, muscles, organs and 
emotions.

This workshop will first raise awareness of the temporomandibular joint and examine 
its function from a holistic perspective. This small musculoskeletal system can cause extreme 
discomfort and mood swings. According to my research I can say that "crunchers" need more 
movement and "pressers" need more stability in the body.

Why do people use this joint? To de-stress, to express oneself, to get sexually excited? The 
workshop seeks the connection between inner and outer communication. The entrance to the 
oral cavity is used, among other things, for eating, speaking, singing, sexual arousal. An 
almost constantly active articulation that cries out to be relaxed. Jaw Release is thus a 
melange of Somatic Sensing, dance, breathing, all in conjunction with action and reaction. 
The relaxation of the joint and surrounding muscular groups lead to a palpable toning of your 
being and self.

breathing - thinking - sharing - dancing - aligning - voicing

Jaw Release
is an artistic invitation: communication, voice and body are invited to function as a whole 
unit. After the Jaw Release training, which brings the whole body to relaxation in a holistic 
way, we will explore together performatively and playfully life issues, moods and spaces in 
our body and outside. Vagus breathing will play a special role and Bonding will also be a part 
of the workshop to stabilize the inner bond. 

For all people who want to dance, sing and speak with their whole body, ultimately accept it 
as a whole, and bring a great desire to share that with others.`;

  const additionalInfo = `More:

www.you-are-the-point.de
www.lamprianidou.com

External Links:
• TQW Workshop: The Sounding Jaw - https://www.tqw.at/veranstaltungen/the-sounding-jaw-lamprianidou/`;

  return (
    <MediaGallery
      mediaItems={jawReleaseMedia}
      title="Workshop Jaw and Body Release"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}