import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import { convertUrlsToLinks } from "../../lib/urlUtils";
import Link from "next/link";
import Header from "../../components/Header";

export default function PressPage() {
  const pressMedia = [
    {
      src: "https://lamprianidou.com/Per4mer/press/170613_Exposee_ALamprianidou_Web_2__1.png",
      alt: "Press expose page 1",
      type: "image" as const,
      title: "Press Coverage"
    },
    {
      src: "https://lamprianidou.com/Per4mer/press/170613_Exposee_ALamprianidou_Web_2__2.png",
      alt: "Press expose page 2",
      type: "image" as const,
      title: "Press Coverage"
    },
    {
      src: "https://lamprianidou.com/Per4mer/press/170613_Exposee_ALamprianidou_Web_2__3.png",
      alt: "Press expose page 3",
      type: "image" as const,
      title: "Press Coverage"
    },
    {
      src: "https://lamprianidou.com/Per4mer/press/170613_Exposee_ALamprianidou_Web_2__4.png",
      alt: "Press expose page 4",
      type: "image" as const,
      title: "Press Coverage"
    },
    {
      src: "https://lamprianidou.com/Per4mer/press/170613_Exposee_ALamprianidou_Web_2__5.png",
      alt: "Press expose page 5",
      type: "image" as const,
      title: "Press Coverage"
    },
    {
      src: "https://lamprianidou.com/Per4mer/press/170613_Exposee_ALamprianidou_Web_2__6.png",
      alt: "Press expose page 6",
      type: "image" as const,
      title: "Press Coverage"
    },
    {
      src: "https://lamprianidou.com/Per4mer/press/170613_Exposee_ALamprianidou_Web_2__7.png",
      alt: "Press expose page 7",
      type: "image" as const,
      title: "Press Coverage"
    },
    {
      src: "https://lamprianidou.com/Per4mer/press/170613_Exposee_ALamprianidou_Web_2__8.png",
      alt: "Press expose page 8",
      type: "image" as const,
      title: "Press Coverage"
    }
  ];

  const description = `**2020 Norton portofoilio**
Download PDF: /AngelaLamprianidou_Portfolio.pages

**Press Expose PDF**
Download PDF: /170613_Exposee_ALamprianidou_Web_2.pdf

2008 - 2022 Press about Angela Lamprianidou

**Press Expose PDF**
Download PDF

**Greek press:**
www.int.ert.gr
www.popaganda.gr
www.ladylike.gr

**generelly press about my workshops:**
berliner-woche.de
berlin.de
berlin.de
tagesspiegel.de
www.debop.gr
www.e-pieria.gr
www.olympospress.gr
www.ballhausost.de`;

  const additionalInfo = `Tanz hin Tanz her

https://web.archive.org/web/20210508133512/https://www.freitag.de/autoren/jamal-tuschick/integration-auf-augenhoehe/view

Jamal Tuschick from derFreitag:
"The audience melds with the ensemble, in which professional 
 dancers and fugitives have already merged. I can not distinguish 
 the one from the others and soon the audience no longer from the ensemble. 
 In imitation of a preliminary program all are moving according to the rules 
 which Angela Lamprianidou explains. 
 The Maker of # 187 Dance, Dance - Call for Movement 
 illuminates the structures of integration: 
 what does it mean to integrate - into a society or a situation? 
 By staging the massive spontaneous connection. 
 People who have the choice in this direction behave 
 as if there is no alternative to their participation."
 

 
about appointment (PDF): /appointment.pdf

Appointment, https://web.archive.org/web/20180308081030/http://kink.cz/angela-lamprianidou/



Alihop

https://web.archive.org/web/20110619123353/http://ms.stubnitz.com/content/volle-kraft-spektakel-angela-lamprianidou-alihop-0

Paul Rose: https://web.archive.org/web/20110619123353/http://ms.stubnitz.com/content/volle-kraft-spektakel-angela-lamprianidou-alihop-0

Once again Angela Lamprianidou, the greek-catalan-german artist surprise  
 us with her new performance Alihop. She mixes up political tendencies,  
 sociology of the genders and postmodern flows of the performance-art. 
 While the times are characterized by surprising revolutions,  
 failed wars and ideoligical confusions,  
 the dancetheater of Angela Lamprianidou offers a space of  
 conceptualistic reflection to the public,  
 which invites, to get to know the inner forces which sticks all together 
Alihop offers an original exploration of our centuries-old passage 
through movement - walking, riding, driving or flying.
   
   

SITz

Reviews from performance in Prague 14.2.2012:
"SITz, a dance piece created by the Greek choreographer  
 Angela Lamprianidou places high above the average.   
 Featuring Lamprianidou herself together with Julia Koch  
 and Jana Vrána, SITz was recently presented at Ponec theatre.   
 It is an exceptional project made of physical action and dance:  
 a result of many years of exhausting research on motion.  
 In SITz human motion is transposed into sitting:  
 everything takes place in the sitting or squatting position,  
 on the floor or close to it.  
 Three beautiful women in black and green sports outfits sit on the white dance floor.  
 In the chamber light design of geometric shapes they perform countless sitting poses,  
 some of them dance like, some of them less so. (...)  
 It is not an empty phrase to call SITz a successful deconstruction  
 of the conventions of movement and the conception of contemporary dance. (...)  
 The dance in SITz is fragile and luring but also harsh, painful and, at some moments,  
 deliberately disharmonious. The intermittence of pleasing and awkward movements stresses out  
 the irony and exaggeration contained in the gestures. (...)  

 At Ponec theatre SITz proved that there still are things to be scrutinized about the human body.  

 Veronika Stefanova, radio Wave 
 rozhlas.cz  
 
Anyway, just sitting and watching will do with SITz.  
The show is one to capture your attention in a surprising way.  
It unwinds in a natural rhythm, without unnecessary philosophizing.  
Besides, the choreographer has managed to combine  
her scrutinizing work with the body with the right distance, slapstick elements and vaudeville like humour.  
The movements are accompanied by respective sounds – squeaking and creaking with the mechanical ones,  
the slapping of the buttocks falling to the floor. The dancers become uncoordinated bouncy balls.      
Moreover, the choreography is very coherent visually: the black-green-white style easily engraves in one's mind.  
The white dance floor makes the green shorts and black stockings even more striking.  
The final scream of the dancer leaving the stage in a squatting position  
(no surprise!) is not meant to be desperate.  
It is pushed to the absurd, to the level of humour and game.  
The same applies to the choreography as a whole:  
it is due to this very feature that SITz is a piece worth watching.   

Markéta Faustová, Dance Zone, 23. 2. 2012 
www.tanecnizona.cz/index.php?option=com_content&task=view&id=484&Itemid=42 
 
Interwiev on chez TV: https://www.ceskatelevize.cz/porady/1148499747-sama-doma/212562220600014/
 
  
LeCool Magazine: 
Stop for a moment to think what would happen if you were out having dinner 
 when you suddenly leant over, grabbed your knife and fork like screwdrivers 
 and stuffed them into your mouth as you twisted your neck through 90 degrees. 
You'd almost certainly be marched away in a straightjacket, 
 but this is exactly the kind of madness we always beg for on stage. 
Choreographer Angela Lamprianidou has clearly thought long and hard 
 about conventions and the ways in which the body can tear them down. 
Pure dance still has a lot of life left in it and pieces like Sitz are living proof. 
Its experimental solo and group moves eschew the grotesque (which also has a place, 
 but not here) in favour of intelligent humour (and spectators' knowing smiles).

  
Francisco Estrada from LeCool: 
Interesantísimo si en una importante cena se te ocurriera encorvarte, 
 agarrar los cubiertos como si fueran destornilladores y llevarte los trozos 
 a la boca mientras tuerces el cuello 90 grados. De seguro que saldrías con una 
 camisa de fuerza de tu cita, pero, sobre los escenarios, son esta clase de "locuras" 
 las que siempre pedimos. Para ello, el coreógrafo ha tenido que pensar mucho sobre 
 las convenciones y las posibilidades que el cuerpo le ofrece para destruirlas. 
 Y, con ello, diseñar en el espacio y el tiempo. 
 La danza pura tiene para rato y trabajos como Sitz, de Angela Lamprianidou, 
 nos lo demuestran con movimientos individuales y colectivos con espíritu experimental, 
 aunque evitando lo grotesco (que también mola, pero no es el caso) 
 y priorizando el humor (pero el inteligente; el de las veladas sonrisas cómplices). 
 
Sara Blaylock from thehiddenpeople.com: https://web.archive.org/web/20100807235148/http://thehiddenpeople.com/articlesarticulos/sitz/

I saw an exciting and inventive dance entitled 'SITz' on Thursday, April 29. 
This work, which fuzzed the line between performance art and contemporary dance, 
featured three dancers,enacting the learning of movement. 
Angela Lamprianidou's choreography channeled a proto-human,or perhaps 
post-human,world,where upright movement was an unlearned or forgotten skill. 
They stumbled to stand,combined their bodies to caterpillar walk, 
and at times moved like high functioning robots. 
Though abstract and unconventional,the movements were,for the most part,articulate and 
skillfully executed by SITz's dancers Julia Koch,Mireia de Querol and Lamprianidou. 
The dance was reinforced by a textured soundscape,composed by 
P.Rose and C.Galle of Institut Fátima,which moved from a subtle static 
to literally banging beats to an over-the-top loud waltz.
  
Emma Haro: 
Domingo lluvioso en esta atípica primavera barcelonesa. En el Mercat de les flors se 
estrena SITz el último espectáculo de la coreógrafa y bailarina griega Angela Lamprianidou...
  
  

Tongue

Teatre ovidi montllor en barcelona/Institut del theatre
 
Aleix Vidaldi: 
Three different languages,finnish,greek,czech.Choreographies which 
were representing the rhythm of this very personal tongues. 
An interactive piece with the audience what was full of humor,irony 
and just the dance language unit those three excellent dancers,who were 
feeling like if they would be talking,dancing,playing at home,on stage.



Back To Emotions (es)

Barcelona
 
 
                                         
 
www.tea-tron.com
 
 Quim Pujol, en su faceta de crítico con peluca acaba de decir sobre 
 el trabajo de Angela Lamprianidou, otra performer casera, 
 que se trata de una de las experiencias escénicas más especiales 
 que he vivido en los últimos años. 
 iViva el performer en zapatillas! 
  
  
 www.fuga.es
  
time out magazin barcelona 27.2-3.3.09: https://lamprianidou.com/backtoemo/timeoutbackto.pdf
                                         
                                         
Interview on radio contrabanda
 with Antonio Narváez: https://nosolojazz.contrabanda.org/2008/11/



Sit

Pfalzbaum Theater Ludwigshafen 
 
Ellen Kokoras:
Rarely have I seen anybody with a new and particular body language.The fusion
of movement and facial expression was astounding.Everybody should go see this!



El cuerpo del otro

Barcelona
 
Iris Schabert: 
An excellent composition which was intelligently based on the mixture 
of medical explanation with emotional landscapes.While a voice from
the off commented on reactions of the bodies on stage,the audience were
alternating between sympathetic involvement and rational distance, which
enabled them to experience their own bodies at the same time. 
 
Roger Bernat: 
Sehr sehr gut



Short cuts

Bremen Schwankhalle 
 
Carlos Murias: 
A perplex performance before its perplexities 




Katharsi

Barcelona (Nau Ibanov,Teatre Estudi,Gava American Lake,CvBarceloneta,La caldera.) 
Bremen Outnow Festival
 
Antonio P.Collom: 
As the word,so the show.Two dancers in strong positions. One weak,one strong. Changing
of emotions in a very abstract way.A game with light and shadow over hypocrisy 
 
Agusti Ros: 
I left this performance and I was happy to have lived,shared moments of communication 




Loop


Roberto F.Serafide: 
Loop,by A.Lamprianidou,is a half ironic and half ritual choreographic
cameo about symbolic meaning (but also the symbol's impoverishment)
in circle-based dance.The author achieves this result by composing
a 'solo on spot',where outbalanced 'release' figures alternate with
a self-conscious useof what we'll call an 'hysterical slapstick'. 
And all that on a mesmeric,deliberately non-musical score,which
according to the title,suggests the repetitiveness of all emotional, 
kinetic, conceptual 'event' deferring to the rhetoric of birth, 
dissolution,rebirth.In order to express her ambivalence towards that
concept (a mixture of religious wisdom and satyrical skepticism) 
Lamprianidou 'selects' as the dance's totem,a butterfly shaped 
buckle,situated at the very crossroad of postmodern camp and 
mythical reference,ideally persisting on stage when already 
the dance and its interpreter have left. 




Time

Barcelona 
Erlangen Arena Festival 

Arena Spots:
A per4mance where u were breathing deep 
 and lovely from the beginning to the end 




Art Sit

Erlangen Arena Festival
 
Erlanger Nachrichten:
Even the toilets have been designed by A.Lamprianidou, a
 fantasy world with a fantastic result.Angela says that we have 
 the best feelings on the toilet,which is why she chose to design 
 this artistic surrounding and give it more art-s(h)it.`;

  const renderAdditionalInfo = () => {
  return (
      <div className="space-y-4">
        
        <div>
          <Link href="/Per4mer/tanzhintanzher" className="text-green-400  underline font-semibold">Tanz hin Tanz her</Link>
          <br />
          <a href="https://web.archive.org/web/20210508133512/https://www.freitag.de/autoren/jamal-tuschick/integration-auf-augenhoehe/view" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">Jamal Tuschick from derFreitag:</a>
          <p className="mt-2 italic">"The audience melds with the ensemble, in which professional dancers and fugitives have already merged. I can not distinguish the one from the others and soon the audience no longer from the ensemble. In imitation of a preliminary program all are moving according to the rules which Angela Lamprianidou explains. The Maker of # 187 Dance, Dance - Call for Movement illuminates the structures of integration: what does it mean to integrate - into a society or a situation? By staging the massive spontaneous connection. People who have the choice in this direction behave as if there is no alternative to their participation."</p>
        </div>

        <div>
          <p className="font-semibold">about appointment (PDF)</p>
          <a href="/press_pdf_10.pdf" className="text-green-400  underline">Download PDF</a>
          <br />
          <a href="https://web.archive.org/web/20180308081030/http://kink.cz/angela-lamprianidou/" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">Appointment, www.kink.cz/angela-lamprianidou/</a>
        </div>

        <div>
          <Link href="/Per4mer/alihop" className="text-green-400  underline font-semibold">Alihop</Link>
          <br />
          <a href="https://web.archive.org/web/20110619123353/http://ms.stubnitz.com/content/volle-kraft-spektakel-angela-lamprianidou-alihop-0" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">Paul Rose:</a>
          <p className="mt-2">Once again Angela Lamprianidou, the greek-catalan-german artist surprise us with her new performance Alihop. She mixes up political tendencies, sociology of the genders and postmodern flows of the performance-art. While the times are characterized by surprising revolutions, failed wars and ideoligical confusions, the dancetheater of Angela Lamprianidou offers a space of conceptualistic reflection to the public, which invites, to get to know the inner forces which sticks all together. Alihop offers an original exploration of our centuries-old passage through movement - walking, riding, driving or flying.</p>
        </div>

        <div>
          <Link href="/Per4mer/SITz" className="text-green-400  underline font-semibold">SITz</Link>
          <p className="mt-2">Reviews from performance in Prague 14.2.2012:</p>
          <p className="italic">"SITz, a dance piece created by the Greek choreographer Angela Lamprianidou places high above the average. Featuring Lamprianidou herself together with Julia Koch and Jana Vrána, SITz was recently presented at Ponec theatre. It is an exceptional project made of physical action and dance: a result of many years of exhausting research on motion. In SITz human motion is transposed into sitting: everything takes place in the sitting or squatting position, on the floor or close to it. Three beautiful women in black and green sports outfits sit on the white dance floor. In the chamber light design of geometric shapes they perform countless sitting poses, some of them dance like, some of them less so. (...) It is not an empty phrase to call SITz a successful deconstruction of the conventions of movement and the conception of contemporary dance. (...) The dance in SITz is fragile and luring but also harsh, painful and, at some moments, deliberately disharmonious. The intermittence of pleasing and awkward movements stresses out the irony and exaggeration contained in the gestures. (...) At Ponec theatre SITz proved that there still are things to be scrutinized about the human body."</p>
          <p><a href="http://www.rozhlas.cz/radiowave/waveculture/_zprava/nejeden-tanecni-vecer-tela-v-ohrozeni-a-sitz--1020869" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">Veronika Stefanova, radio Wave www.rozhlas.cz</a></p>
          <p className="mt-2">Anyway, just sitting and watching will do with SITz. The show is one to capture your attention in a surprising way. It unwinds in a natural rhythm, without unnecessary philosophizing. Besides, the choreographer has managed to combine her scrutinizing work with the body with the right distance, slapstick elements and vaudeville like humour. The movements are accompanied by respective sounds – squeaking and creaking with the mechanical ones, the slapping of the buttocks falling to the floor. The dancers become uncoordinated bouncy balls. Moreover, the choreography is very coherent visually: the black-green-white style easily engraves in one's mind. The white dance floor makes the green shorts and black stockings even more striking. The final scream of the dancer leaving the stage in a squatting position (no surprise!) is not meant to be desperate. It is pushed to the absurd, to the level of humour and game. The same applies to the choreography as a whole: it is due to this very feature that SITz is a piece worth watching.</p>
          <p><a href="http://www.tanecnizona.cz/index.php?option=com_content&task=view&id=484&Itemid=42" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">Markéta Faustová, Dance Zone, 23. 2. 2012 www.tanecnizona.cz</a></p>
          <p><a href="http://www.ceskatelevize.cz/ivysilani/1148499747-sama-doma/212562220600014/obsah/187555-pozvanka-do-divadla-ponec-mga-daniela-rehakova-a-jana-vrana/" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">Interwiev on chez TV</a></p>
        </div>

        <div>
          <p className="font-semibold">LeCool Magazine:</p>
          <p>Stop for a moment to think what would happen if you were out having dinner when you suddenly leant over, grabbed your knife and fork like screwdrivers and stuffed them into your mouth as you twisted your neck through 90 degrees. You'd almost certainly be marched away in a straightjacket, but this is exactly the kind of madness we always beg for on stage. Choreographer Angela Lamprianidou has clearly thought long and hard about conventions and the ways in which the body can tear them down. Pure dance still has a lot of life left in it and pieces like Sitz are living proof. Its experimental solo and group moves eschew the grotesque (which also has a place, but not here) in favour of intelligent humour (and spectators' knowing smiles).</p>
          <p>Francisco Estrada from LeCool:</p>
          <p className="italic">Interesantísimo si en una importante cena se te ocurriera encorvarte, agarrar los cubiertos como si fueran destornilladores y llevarte los trozos a la boca mientras tuerces el cuello 90 grados. De seguro que saldrías con una camisa de fuerza de tu cita, pero, sobre los escenarios, son esta clase de "locuras" las que siempre pedimos. La coreógrafa Angela Lamprianidou ha pensado claramente mucho sobre las convenciones y las formas en que el cuerpo puede derribarlas. La danza pura aún tiene mucha vida y piezas como Sitz son prueba viviente.</p>
          <p><a href="https://web.archive.org/web/20100807235148/http://thehiddenpeople.com/articlesarticulos/sitz/" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">Sara Blaylock from thehiddenpeople.com:</a></p>
          <p>I saw an exciting and inventive dance entitled 'SITz' on Thursday, April 29. This work, which fuzzed the line between performance art and contemporary dance, featured three dancers,enacting the learning of movement. Angela Lamprianidou's choreography channeled a proto-human,or perhaps post-human,world,where upright movement was an unlearned or forgotten skill. They stumbled to stand,combined their bodies to caterpillar walk, and at times moved like high functioning robots. Though abstract and unconventional,the movements were,for the most part,articulate and skillfully executed by SITz's dancers Julia Koch,Mireia de Querol and Lamprianidou. The dance was reinforced by a textured soundscape,composed by P.Rose and C.Galle of Institut Fátima,which moved from a subtle static to literally banging beats to an over-the-top loud waltz.</p>
          <p><a href="/press_pdf_11.pdf" className="text-green-400  underline">Emma Haro:</a></p>
          <p>Domingo lluvioso en esta atípica primavera barcelonesa. En el Mercat de les flors se estrena SITz el último espectáculo de la coreógrafa y bailarina griega Angela Lamprianidou...</p>
        </div>

        <div>
          <Link href="/Per4mer/tongue" className="text-green-400  underline font-semibold">Tongue</Link>
          <p>Teatre ovidi montllor en barcelona/Institut del theatre</p>
          <p>Aleix Vidaldi: Three different languages,finnish,greek,czech.Choreographies which were representing the rhythm of this very personal tongues. An interactive piece with the audience what was full of humor,irony and just the dance language unit those three excellent dancers,who were feeling like if they would be talking,dancing,playing at home,on stage.</p>
        </div>

        <div>
          <Link href="/Per4mer/backtoemotion" className="text-green-400  underline font-semibold">Back To Emotions (es)</Link>
          <p>Barcelona</p>
          <a href="http://www.tea-tron.com/quimpujol/blog/2009/02/17/back-to-emotion-angela-lamprianidou-1622009-la-casa-de-a-lamprianidou/" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">www.tea-tron.com</a>
          <p>Quim Pujol, en su faceta de crítico con peluca acaba de decir sobre el trabajo de Angela Lamprianidou, otra performer casera, que se trata de una de las experiencias escénicas más especiales que he vivido en los últimos años. iViva el performer en zapatillas!</p>
          <a href="http://www.fuga.es/2009/02/17/que-fluya-el-deseo-que-corra-la-sangre-el-performer-en-zapatillas/" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">www.fuga.es</a>
          <br />
          <a href="https://lamprianidou.com/backtoemo/timeoutbackto.pdf" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">time out magazin barcelona 27.2-3.3.09</a>
          <br />
          <a href="http://nosolojazz.contrabanda.org/2008/11/" target="_blank" rel="noopener noreferrer" className="text-green-400  underline">Interview on radio contrabanda with Antonio Narváez</a>
        </div>

        <div>
          <Link href="/Per4mer/sit" className="text-green-400  underline font-semibold">Sit</Link>
          <p>Pfalzbaum Theater Ludwigshafen</p>
          <p>Ellen Kokoras: Rarely have I seen anybody with a new and particular body language.The fusion of movement and facial expression was astounding.Everybody should go see this!</p>
        </div>

        <div>
          <Link href="/archive/el-cuerpo-del-otro" className="text-green-400  underline font-semibold">El cuerpo del otro</Link>
          <p>Barcelona</p>
          <p>Iris Schabert: An excellent composition which was intelligently based on the mixture of medical explanation with emotional landscapes.While a voice from the off commented on reactions of the bodies on stage,the audience were alternating between sympathetic involvement and rational distance, which enabled them to experience their own bodies at the same time.</p>
          <p>Roger Bernat: Sehr sehr gut</p>
        </div>

        <div>
          <Link href="/archive/shortcuts" className="text-green-400  underline font-semibold">Short cuts</Link>
          <p>Bremen Schwankhalle</p>
          <p>Carlos Murias: A perplex performance before its perplexities</p>
        </div>

        <div>
          <Link href="/archive/katharsi" className="text-green-400  underline font-semibold">Katharsi</Link>
          <p>Barcelona (Nau Ibanov,Teatre Estudi,Gava American Lake,CvBarceloneta,La caldera.) Bremen Outnow Festival</p>
          <p>Antonio P.Collom: As the word,so the show.Two dancers in strong positions. One weak,one strong. Changing of emotions in a very abstract way.A game with light and shadow over hypocrisy</p>
          <p>Agusti Ros: I left this performance and I was happy to have lived,shared moments of communication</p>
        </div>

        <div>
          <Link href="/archive/loop" className="text-green-400  underline font-semibold">Loop</Link>
          <p>Roberto F.Serafide: Loop,by A.Lamprianidou,is a half ironic and half ritual choreographic cameo about symbolic meaning (but also the symbol's impoverishment) in circle-based dance.The author achieves this result by composing a 'solo on spot',where outbalanced 'release' figures alternate with a self-conscious useof what we'll call an 'hysterical slapstick'. And all that on a mesmeric,deliberately non-musical score,which according to the title,suggests the repetitiveness of all emotional, kinetic, conceptual 'event' deferring to the rhetoric of birth, dissolution,rebirth.In order to express her ambivalence towards that concept (a mixture of religious wisdom and satyrical skepticism) Lamprianidou 'selects' as the dance's totem,a butterfly shaped buckle,situated at the very crossroad of postmodern camp and mythical reference,ideally persisting on stage when already the dance and its interpreter have left.</p>
        </div>

        <div>
          <Link href="/archive/time" className="text-green-400  underline font-semibold">Time</Link>
          <p>Barcelona Erlangen Arena Festival</p>
          <p>Arena Spots: A per4mance where u were breathing deep and lovely from the beginning to the end</p>
          </div>

        <div>
          <Link href="/archive/art-sit" className="text-green-400  underline font-semibold">Art Sit</Link>
          <p>Erlangen Arena Festival</p>
          <p>Erlanger Nachrichten: Even the toilets have been designed by A.Lamprianidou, a fantasy world with a fantastic result.Angela says that we have the best feelings on the toilet,which is why she chose to design this artistic surrounding and give it more art-s(h)it.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small">
      <Header />
      <MediaGallerySeparated
        mediaItems={pressMedia}
        title="2008 - 2022 Press about Angela Lamprianidou"
        description={description}
        additionalInfo={renderAdditionalInfo()}
      />
    </div>
  );
}