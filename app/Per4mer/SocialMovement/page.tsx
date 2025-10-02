import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Image from "next/image";

export default function SocialMovementPage() {
  const socialMovementMedia = [
    {
      src: "https://www.youtube.com/embed/DqG7-sWSphw",
      alt: "Dance as a social movement video",
      type: "video" as const,
      title: "Dance as a social movement"
    },
    {
      src: "https://lamprianidou.com/Per4mer/SocialMovement/ML5D2537.JPG",
      alt: "Dance as a social movement 1",
      type: "image" as const,
      title: "Dance as a social movement"
    },
    {
      src: "https://lamprianidou.com/Per4mer/SocialMovement/Tanz_als_1.jpg",
      alt: "Dance as a social movement 2",
      type: "image" as const,
      title: "Dance as a social movement"
    }
  ];

  const description = `"Dance as a social movement" is a research 
project, that wants to go beyond the original 
attempts to remove the "fourth wall": it goes 
in the search of new techniques of 
improvisation and new methods of mediation 
to break the boundaries between ensemble 
and audience and to transform them. In this 
way, the stage can become a place of social 
movement and encounters.

Angela Lamprianidou has already broken 
the boundaries between Performers and 
Audience in her Choreographic experience 
Tanz Hin Tanz her (player.vimeo.com/video/279447734) 
Now she is interested in arrange dance 
movements as a "break" of work school, 
learning etc – in general institutions: 
A call for dance.`;

  const additionalInfo = `Supported by Fonds Darstellende Künste with funds 
from the Federal Government Commissioner for Culture 
and Media within the program NEUSTART KULTUR`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font font-variation-3 page-bg-overlay media-screen-large" style={{
      backgroundImage: `url('https://lamprianidou.com/Per4mer/SocialMovement/ML5D2537.JPG')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={socialMovementMedia}
        title="Dance as a social movement"
        description={description}
        additionalInfo={additionalInfo}
      />
      
      {/* Logo Images Section */}
      <div className="relative z-10 px-18 pb-48">
        <div className="max-w-4xl">
          <div className="flex justify-center items-center -mt-64">
            <Image
              src="/image copy 5.png"
              alt="Logo"
              width={240}
              height={100}
              className="object-contain h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}