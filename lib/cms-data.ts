export interface MediaItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  title?: string;
  caption?: string;
  credit?: string;
}

export interface PageData {
  id: string;
  title: string;
  description: string;
  additionalInfo: string;
  photographer: string;
  imageSize: 'small' | 'medium' | 'large' | 'xlarge';
  mediaItems: MediaItem[];
  lastModified: string;
}

// In-memory storage for demo purposes
// In production, this would be replaced with a database
let pageDataStore: Record<string, PageData> = {};

export const getPageData = (pageId: string): PageData | null => {
  return pageDataStore[pageId] || null;
};

export const savePageData = (pageData: PageData): void => {
  pageDataStore[pageData.id] = {
    ...pageData,
    lastModified: new Date().toISOString()
  };
};

export const getAllPages = (): PageData[] => {
  return Object.values(pageDataStore);
};

// Initialize with some default data for demo
export const initializeDefaultData = () => {
  const defaultPages: PageData[] = [
    {
      id: "piece_peace",
      title: "Piece#Peace",
      description: `is research that goes in search of new peace rituals.
How can dance transform our present time into peace?
People should be encouraged to discover their own thoughts and feelings in dance and thus to find a 
peaceful coexistence, because dance has the power to bring us from thinking to feeling. Now is the 
time to develop new rituals that embody peace and to take those rituals out into the open.
2022 seems to be a turning point in several respects. The war in Ukraine and the effects it has on the 
world give food for thought.
The famous metaphor of the butterfly flapping wings generating repercussions on the other side of 
the world is proving to be more relevant than ever. So what to do in the face of impending upheaval? 
Dance as a catalyst to unleash feelings within us can help provide emotional support to a society that 
has experienced so much fear and panic for the last two years and is now facing other bitter 
challenges.
In Wim Wenders' film "The Sky over Berlin", an actor asks himself the question "Why isn't peace 
permanent?" This sentence is the engine of my research and inspired me to my project.
Isn't it our own thoughts and feelings that play a major role in our view of life? As human beings, 
have we lost access to our body, into the body, and ultimately to experience something through the 
body?
I am convinced that dance can create deep access to one's own feelings, transform emotions and 
have a strengthening effect in a shared experience.
The ritual I want to develop is a combination of emotions that acts as a body-mind mechanism and 
can be fun.
Funded by the Federal Commissioner of the Federal Government for Culture and Media (BKM) in the 
program NEUSTART KULTUR, aid program DIS-TANZEN of the Dachverband Tanz Deutschland

Gefördert durch die Bundesbeauftragte der Bundesregierung für Kultur und Medien (BKM) im 
Programm NEUSTART KULTUR, Hilfsprogramm DIS-TANZEN des Dachverband Tanz Deutschland`,
      additionalInfo: ``,
      photographer: "© Photos by Angela Lamprianidou",
      imageSize: "xlarge",
      mediaItems: [
        {
          src: "/Peace-piece.jpg",
          alt: "Piece#Peace",
          type: "image",
          title: "Piece#Peace"
        }
      ],
      lastModified: new Date().toISOString()
    },
    {
      id: "backtoemotion",
      title: "Back to Emotion",
      description: `"Back to Emotion"
In back to emotion, A. Lamprianidou is proposing a performance which is based on a personal interactive meeting with a one-person audience. Disassociating herself from the distance we're given in a common stage. Because of this the performance will take place not in a theater or on a stage, it will happen in her own flat. This is a big challenge not only for the audience but also for the performer herself.`,
      additionalInfo: `What will happen ? 
Anything or everything ? 
Cava or champagne ? 
Marc Almond or Andrew Williams ? 
Dance me dance you dance we ? 

More information on www.lamprianidou.com 
Reserve your personal entry 
call +4917663459337 
and we clear up date and hour, 
like it should be, no? 
No press allowed, 
no mobile phones.`,
      photographer: "© Photos by Angela Lamprianidou",
      imageSize: "xlarge",
      mediaItems: [
        {
          src: "/backtoemotion-1.jpg",
          alt: "Back to Emotion",
          type: "image",
          title: "Back to Emotion"
        },
        {
          src: "/backtoemotion-2.jpg",
          alt: "Personal Interactive Meeting",
          type: "image",
          title: "Personal Interactive Meeting"
        },
        {
          src: "/backtoemotion-3.jpg",
          alt: "One-Person Audience",
          type: "image",
          title: "One-Person Audience"
        },
        {
          src: "/backtoemotion-4.jpg",
          alt: "Private Flat Performance",
          type: "image",
          title: "Private Flat Performance"
        },
        {
          src: "https://www.youtube.com/watch?v=a3GLyclqvOM",
          alt: "Back to Emotion Video",
          type: "video",
          title: "Back to Emotion Video"
        }
      ],
      lastModified: new Date().toISOString()
    }
  ];

  defaultPages.forEach(page => {
    pageDataStore[page.id] = page;
  });
};

// Initialize default data when module loads
initializeDefaultData();
