import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function BackToEmotionPage() {
  const backToEmotionMedia = [
    {
      src: "https://vimeo.com/158820614",
      alt: "Back to emotion video",
      type: "video" as const,
      title: "back to emotion"
    },
    {
      src: "https://lamprianidou.com/Per4mer/backtoemo/happy11.jpg",
      alt: "Back to emotion performance",
      type: "image" as const,
      title: "back to emotion"
    }
  ];

  const description = `back to emotion

In back to emotion, A. Lamprianidou is proposing a performance which 
is based on a personal interactive meeting with a one-person audience. 
Disassociating herself from the distance we're given in a common stage. 

Because of this the performance will 
take place not in a theater or on a 
stage, it will happen in her own flat. 
This is a big challenge not only 
for the audience but also for 
the performer herself.  
What will happen ? 
Anything or everything ? 
Cava or champagne ? 
Marc Almond or Andrew Williams ? 
Dance me dance you dance we ?`;

  const additionalInfo = `More information on 
www.lamprianidou.com 
Reserve youre personal entry 
call +4917663459337 

and we clear up date and hour, 
like it should be,no¿ 
No press allowed, 
no mobile phones.

External Links:
• Review by Quim Pujol (2009): https://www.tea-tron.com/quimpujol/blog/2009/02/17/back-to-emotion-angela-lamprianidou-1622009-la-casa-de-a-lamprianidou/`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-light-overlay font-variation-4 media-screen-xl" style={{
      backgroundImage: `url('https://lamprianidou.com/Per4mer/backtoemo/happy11.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={backToEmotionMedia}
        title={
          <a
            href="https://lamprianidou.com/Per4mer/backtoemo/back%20to%20emotion%20by%20Angela%20Lamprianidou.pdf"
            target="_blank"
            className="text-green-400 hover:text-green-300 underline"
          >
            back to emotion
          </a>
        }
        description={description}
        additionalInfo={additionalInfo}
        photographer="A.Lamprianidou"
      />
    </div>
  );
}