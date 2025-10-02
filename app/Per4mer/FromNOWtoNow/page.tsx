import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function FromNOWtoNowPage() {
  const fromNowMedia = [
    {
      src: "https://vimeo.com/199875881",
      alt: "From NOW to Now video",
      type: "video" as const,
      title: "From NOW to Now"
    },
    {
      src: "https://lamprianidou.com/Per4mer/FromNowToNow/ml5D2997.jpg",
      alt: "From NOW to Now",
      type: "image" as const,
      title: "From NOW to Now"
    }
  ];

  const description = `From NOW to Now

It begins in the pause —
between inhaling and exhaling.
That fleeting stillness where nothing is held, and nothing is remembered.
Just now.

From Now to Now is an invitation to experience presence through space, body, and perception.
This experimental performance unfolds as a journey — one that guides you through different spaces, both physical and inner. With each shift in environment, your body listens, responds, transforms. You are asked to slow down, to notice what arises when you truly arrive in the moment.

It can take many forms:
– as a one-on-one encounter, where attention becomes intimate and heightened
– as a choreographic experience shared in silence or motion
– or as a workshop, where the now is explored collectively through simple practices of awareness

This work does not seek to entertain or explain — it invites you to feel.
Because you can only feel the now when your senses are clear.
Because being present is not a concept — it's a sensation.
And really —
who isn't longing for the now?`;

  const additionalInfo = `credits: Choreography conept A. Lamprianidou
Colaboration with the Musrara festval Yerusalem 2020
Space in and outdoor possible.100m2 minimum
Premiere: June 2020 Israel Musrara Festival
´cause of covid canxxxxxxcelled
https://www.musraramixfest.org.il/`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-light-overlay media-screen-largest font-variation-1" style={{
      backgroundImage: `url('https://lamprianidou.com/Per4mer/FromNowToNow/ml5D2997.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
        <MediaGallerySeparated
          mediaItems={fromNowMedia}
          title="From NOW to Now"
          description={description}
          additionalInfo={additionalInfo}
        />
    </div>
  );
}