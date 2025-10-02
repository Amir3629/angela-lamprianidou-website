import MediaGallery from "../../../components/MediaGallery";

export default function ArtSitPage() {
  const artSitMedia = [];

  const description = `Installation art SIT

The first feeling of happiness is to shit! Generally on the 0 near the 0, you let things go. To let things go is something very lovely. Sometimes it hurts... But at least you discover, it was the best flush vibration.

So art SIT became an experimental performance. Art Sit can only be exhibited in adequately big bathrooms.

It was in the middle of 1999, as a group of artists came up to me and asked me if I would like to, as they knew my fragy style, to design the toilets of a big factory, during the ARENA dance&theatre festival.

The fabric was big, amazing, offering me totally the spirit and inspiration to say yes to this project. We were nearly 20 different artists, musicians, painters, photographers, etc. So I started to design my part... a very intimate part, that everybody visits every day...

The result of art SIT, surprised me a lot. At the beginning it was just a design for fantastic big bathrooms, but at the end it developed to an experimental performance, where the people who supposed to be the audience got to be performer at the same time. Of course my spirit, a cassette recorder, the design and my music gave them a certain impulse, but I did not helping them by performing myself.`;

  const additionalInfo = `Direction: Angela Lamprianidou
Location: Gossen Hallen, Erlangen

performed 1999 at Arena Festival/Erlangen`;

  return (
    <MediaGallery
      mediaItems={artSitMedia}
      title="Art Sit"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}