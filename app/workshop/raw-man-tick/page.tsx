import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function RawManTickPage() {
  const rawManTickMedia = [
    {
      src: "/RAWPIC_Rawmantik_Pic_2.jpeg",
      alt: "RAW-MAN-TICK Workshop",
      type: "image" as const,
      title: "RAW-MAN-TICK Workshop"
    },
    {
      src: "/RAW_PIC_Workshop_Rawman-tik.jpeg",
      alt: "RAW-MAN-TICK Workshop",
      type: "image" as const,
      title: "RAW-MAN-TICK Workshop"
    },
    {
      src: "/IMG_E4606.jpeg",
      alt: "RAW-MAN-TICK Workshop",
      type: "image" as const,
      title: "RAW-MAN-TICK Workshop"
    },
    {
      src: "/ass1.JPG",
      alt: "RAW-MAN-TICK Workshop",
      type: "image" as const,
      title: "RAW-MAN-TICK Workshop"
    }
  ];

  const description = `En and De Für alle Performer

Die Epoche der Romantik lässt sich vom Ende des 18. bis zum Ende des 19. 
Jahrhunderts zurückverfolgen, wobei die literarische Romantik etwa auf die 
Jahre 1795 bis 1848 zurückgeht. Daher zwischen klassischer Musik, Sturm und 
Drang, Sensibilität, Aufklärung und Biedermeier, Vormärz und Realismus steht 
es.

`;

  const additionalInfo = `Ich lade Sie ein, in diesem Workshop die Fähigkeit zu entdecken, die Empfindlichkeit Ihres Körpers in Bewegung auszudrücken. Sie betreten einen leeren Raum mit einer Feder Ihrer Wahl, Größe und Farbe und treffen einen Partner. Wir fangen als Paare mit romantischer Poesie an, uns um Vis A Vis zu werben. Es gibt 5 Stationen: Romantisches Reden, Spazierengehen, Beobachten und Berühren, was uns zu einem romantischen Tanz führen wird. Einfach romantisch – dieser Workshop ist eine Mischung aus somatischem Empfinden und kreativer Poesie! Bitten Sie um die Hand Madame… ein Walz… oder ein Minouett.

Wir machen eine Drehung und erschaffen einen einfachen Tanz aus unserer Raw-Man-Tick-Geste, auf der Suche nach Worten und Bewegungen, die uns durch diesen Workshop leiten. Dein Körper wird als Leinwand für dich und deinen Partner fungieren, um ein Wort auszudrücken, in welchem ihr die Realität eurer Erfahrung ausdrücken und Realität werden lassen wollt.

EN and De for level of Performers. The epoch of Romanticism can be traced back from the end of the 18th century to the late 19th century, whereby literary romanticism dates approximately to the years 1795 to 1848. Therefore between classical music, Sturm und Drang, sensibility, enlightenment and Biedermeier, Vormärz and realism it stands. I invite you to discover in this workshop the ability to express the sensitivity of your body in motion. You enter into an empty space with a feather of your choice, size and color and meet a partner. We begin as couples with romantic poetry to court each other Vis A Vis. There are 5 stations: romantic talk, walk, watch and touch, which will lead us to a romantic dance. Simply romantic – this workshop is a mélange of somatic sensing and creative poetry! Ask for the hand Madame … a Walz … or a Minouett.

We make the twist and create a simple dance out of our raw-man-tick gestures, as we search for the words and movement to accompany us through this workshop. You will be asked to share your body as a canvas with your partner to relate the one word in which you wish to become the reality of your experience.

Workshop Information: PDF: /Workshop_RAW-MAN-TICK.pdf`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      {/* Title */}
<MediaGallerySeparated
        mediaItems={rawManTickMedia}
        title="RAW-MAN-TICK"
        description={description}
        additionalInfo={additionalInfo}
        photographer=""
        imageSize="xlarge"
      />
    </div>
  );
}