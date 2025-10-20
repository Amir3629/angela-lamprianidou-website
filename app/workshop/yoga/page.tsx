import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function YogaPage() {
  const yogaMedia = [
    {
      src: "/WorkshopYogaT1.jpg",
      alt: "Workshop Yoga by Angela Lamprianidou",
      type: "image" as const,
      title: "Workshop Yoga - Composition - Dance"
    },
    {
      src: "/WorkshopYogaT2.jpg",
      alt: "Workshop Yoga by Angela Lamprianidou",
      type: "image" as const,
      title: "Workshop Yoga - Composition - Dance"
    }
  ];

  const description = `Breathing - the basis of life. 
Giving and receiving. 
Expansion and contraction - within every singular cell. 
Breathing, the awareness of breathing is the base of getting 
to know oneself, is the basis of working with oneself. 
every single cell is breathing, life itself is based upon 
expansion and contraction. 
The more we become aware of this and accept this experience, 
and integrate it into our daily life, 
the more we will live, love and share, 
all about to share one the experience.`;

  const additionalInfo = `A. Lamprianidou will cover three aspects of life: 
The Art of Dance, Choreography and Yoga. 

The class will be a course into yoga-composition. 
After a training with techniques in Kundahlini, Bakti 
and Hatha Yoga and contemporary dance. 
The participants will in a playful way develop a short yoga-composition, 
which includes choreographic skills, like duration rhythm time 

It\`s free to all which wants to share this experience! 
 
Yoga intermedia level is needed, but not a must... 


/YogaCompositionDance.pdf`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      {/* Title */}
<MediaGallerySeparated
        mediaItems={yogaMedia}
        title="Yoga - Composition - Dance"
        description={description}
        additionalInfo={additionalInfo}
        photographer=""
        imageSize="xlarge"
      />
    </div>
  );
}