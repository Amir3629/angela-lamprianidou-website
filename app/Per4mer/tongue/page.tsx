import MediaGallery from "../../../components/MediaGallery";

export default function TonguePage() {
  const tongueMedia = [
    {
      src: "https://lamprianidou.com/Per4mer/tongue/tongue11.jpg",
      alt: "Tongue performance image 1",
      type: "image" as const,
      title: "Tongue Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/tongue/tongue12.jpg",
      alt: "Tongue performance image 2",
      type: "image" as const,
      title: "Tongue Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/tongue/tongue13.jpg",
      alt: "Tongue performance image 3",
      type: "image" as const,
      title: "Tongue Performance"
    },
    {
      src: "/Toung-2.jpeg",
      alt: "Tongue",
      type: "image" as const,
      title: "Tongue Performance"
    },
    {
      src: "/toung.jpeg",
      alt: "Tongue",
      type: "image" as const,
      title: "Tongue Performance"
    },
    {
      src: "/toung1.jpeg",
      alt: "Tongue",
      type: "image" as const,
      title: "Tongue Performance"
    }
  ];

  const tongueDescription = `Tongue

Make it, break it 
Shake it, take it 
Lose it, speak it 
Feel it, hurt it 
Tongue me, 
baby`;

  const additionalInfo = `Direction: Angela Lamprianidou 
Choreography: A.Lamprianidou 

Dancers: Elli Pulkinnen, Jana Vranova, Angela Lamprianidou 

Video: Sakis Kyratzis 
Music: Rosa Amuedo 
Lights: Ignasi Llorens 
Assistent of concept: Sakis Kyratzis 

Technical Details: 
Stage: normal with black wall or screen 
Misc: 2 DVD, 1 CD, 3 wireless micros, 2 projectors 
Duration: 60 min 

performed 2008 at Teatre ovidi montllor en Barcelona 

What is your tongue? Can you feel it? What do you do with it? 
Where do you put it? How many do you know? Does it hurt? 
¿Qué es tu lengua? ¿La puedes sentir? ¿Qué haces con ella? 
¿Dónde la metes? ¿Cuántas conoces? ¿Te duele? 
Tongue me baby tongue me baby. 

1. What is your tongue? 
¿Qué es tu lengua? 
It's the muscle in my mouth. It doesn't have bones. It's red and wet. My teeth imprison it. 
It's part of my body. It's what my mother taught me, it's what I've learned in school, 
on the street, from my neighbours, from my men, from my women. It can break bones. 
It's red, it's blue, it's green, it's black. My mind imprison it. It's part of my body. 

Es el musculo de mi boca. No tiene huesos. Es rojo y mojado. Mis dientes la impresionan. 
Es una parte de mi cuerpo. Es lo que mi madre me enseñó. Es lo que he aprendido en la escuela, 
en la calle, de mis vecinos, de mis hombres, de mis mujeres. Puede romper huesos. 
Es roja, azul, negra, verde. Mi mente la controla. Es una parte de mi cuerpo. 

2. Can you feel it? 
¿La puedes sentir? 
Normally I don't. 
When I bite it, I do. When I burn it, I do. When you kiss it, I do. When you pull it, I do. 
Normally I don't. 
When I examine it, I do. When I'm swearing, I do. When you as me, I do. When I'm learning, I do. 
Normalmente no. 
Cuando la muerdo si. Cuando la quemo si. Cuando me besan si. Cuando me la tiran si. 
Normalmente no. 
Cuando me examinan si. Cuando hablo mal, si. Cuando respondo, si. Cuando aprendo, si.


3. What do you do with it? 
¿Qué haces con ella? 
I taste. I lick. I kiss. I play. I show. I hide. I speak. I flatter. I confess. I swear. I loose. 
Pruebo cosas, chupo cosas, juego, la enseño, la escondo. Hablo, la pierdo, rezo, aprendo. 


4. Where do you put it? 
¿Dónde la pones? 
On my palate. On my fingers. In-between my teeth. On your lips. On your skin. 
In words. On paper. On the screen. In a letter. In space. On the body. 
 Encima de mi paladar. En mis dedos. Entre mis dientes. Encima de mis labios. 
 Encima de tu piel. Encima de un papel, de una pantalla, en una carta, encima de un cuerpo. 


5. How many do you know? 
¿Cuantas conoces? 
Geographic. Hair. Crack. Healthy. Greek, German, Spanish, English, French. 
Nervous, happy, sad, erotic. Angry, racist, offensive, hurtful. ABC. 
 La geografica, la peluda, la rallada, la sana. 
 Griego, alemán, castellano, ingles, francés, catalán, italiano. 
 Nerviosa, felices, triste, erótica, ofensiva, ABC. 

 
6. Does it hurt? 
¿Te duele? 
Yes. Sometimes. No. Sometimes. Yes 
Si. A veces. No. A veces. Si 


 This performance uses the language of dance to explore 
 the relationship between tongue and the body.`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-medium-overlay font-variation-3 media-screen-small" style={{
      backgroundImage: `url('/toung.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallery
        mediaItems={tongueMedia}
        title="Tongue"
        description={tongueDescription}
        additionalInfo={additionalInfo}
        photographer="M.Amueda"
        disableBackground={true}
      />
    </div>
  );
}