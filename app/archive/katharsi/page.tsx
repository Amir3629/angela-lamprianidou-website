import MediaGallery from "../../../components/MediaGallery";

export default function KatharsiPage() {
  const katharsiMedia = [];

  const description = `Katharsi

Who could judge? We are constantly judged by others or doubly judged, for we also judge. Silently. Scared by any evidence. And what if we decide to do it in high voice? To show, to exhibit, to face ourselves. Or, as Pasolini dared say, to throw the bowels on the table.

Maybe that way the alien judgement is frustrated, and ours free. Katharsis is hypocrisy. Hipocrite: someone who is not able to accept what he is. And finally, an interpreter, an actor, a mime, an impure. Or so thought the Greeks.`;

  const additionalInfo = `Production: 2005-2006
Direction: Angela Lamprianidou
Choreography: A.Lamprianidou, Susana Vilella
Dancers: A.Lamprianidou, S.Vilella
Coaching: Michelle Swennen
Light&Sound: Paul Rose, Kintxo Salvador
Music: Schubert, G.Christou, Autechre, Anthony and the Johnsons

Technical details:
Lights: 3 floor focus, 1 central spot, 3 wall focus
Stage: min.20x25 ft, possibility to hang a bag from the ceiling
Misc: CDplayer
Duration: 40 min

The performance can be adapted to meet all needs, e.g.duration, enviroment, etc.

performed 2005 at Nau Ibanov, Teatre Estudi, Gava American Lake, CvBarceloneta, La caldera/Barcelona and at the Outnow Festival/Bremen`;

  return (
    <MediaGallery
      mediaItems={katharsiMedia}
      title="Katharsi"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}