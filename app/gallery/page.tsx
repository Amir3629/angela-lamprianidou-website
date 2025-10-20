'use client';

import Link from "next/link";
import Header from "../../components/Header";
import Image from "next/image";

export default function GalleryPage() {
  // Gallery items organized by performance/workshop
  const galleryItems = [
    // Performances/Experiences
    {
      category: "Performances/Experiences",
      items: [
        {
          title: "Pure",
          image: "/gallery/pure.jpg", // Placeholder - need to copy actual image
          link: "/pure"
        },
        {
          title: "Ballet for bloody beginners", 
          image: "/gallery/ballet-bloody.jpg",
          link: "/Per4mer/BalletBloody"
        },
        {
          title: "From NOW to Now",
          image: "/gallery/from-now-to-now.jpg", 
          link: "/Per4mer/FromNOWtoNow"
        },
        {
          title: "Back to Emotion",
          image: "/gallery/back-to-emotion.jpg",
          link: "/Per4mer/backtoemotion"
        },
        {
          title: "Hello it's me",
          image: "/gallery/hello-its-me.jpg",
          link: "/hello-its-me"
        }
      ]
    },
    // Choreographies
    {
      category: "Choreographies",
      items: [
        {
          title: "Tanz hin Tanz her",
          image: "/gallery/tanz-hin-tanz-her.jpg",
          link: "/Per4mer/TanzhinTanzher"
        },
        {
          title: "SITz",
          image: "/gallery/sitz.jpg", 
          link: "/Per4mer/SITz"
        },
        {
          title: "Appointment on stage",
          image: "/gallery/appointment-on-stage.jpg",
          link: "/Per4mer/AppointmentOnStage"
        },
        {
          title: "Appointment # 2",
          image: "/gallery/appointment-2.jpg",
          link: "/Per4mer/appointment"
        },
        {
          title: "Alihop",
          image: "/gallery/alihop.jpg",
          link: "/Per4mer/alihop"
        },
        {
          title: "Tongue",
          image: "/gallery/tongue.jpg",
          link: "/Per4mer/tongue"
        },
        {
          title: "El cuerpo del otro",
          image: "/gallery/el-cuerpo-del-otro.jpg",
          link: "/Per4mer/elcuerpo"
        },
        {
          title: "Sit",
          image: "/gallery/sit.jpg",
          link: "/Per4mer/sit"
        },
        {
          title: "Katharsis",
          image: "/gallery/katharsis.jpg",
          link: "/Per4mer/katharsi"
        },
        {
          title: "Time",
          image: "/gallery/time.jpg",
          link: "/Per4mer/time"
        },
        {
          title: "Opa Europa",
          image: "/gallery/opa-europa.jpg",
          link: "/Per4mer/opaeuropa"
        },
        {
          title: "Loop",
          image: "/gallery/loop.jpg",
          link: "/Per4mer/loop"
        },
        {
          title: "Art Sit",
          image: "/gallery/art-sit.jpg",
          link: "/Per4mer/artsit"
        },
        {
          title: "Movie",
          image: "/gallery/movie.jpg",
          link: "/Per4mer/movie"
        }
      ]
    },
    // Workshops
    {
      category: "Workshops",
      items: [
        {
          title: "Jaw and Body Release",
          image: "/gallery/jaw-release.jpg",
          link: "/workshop/jaw-release"
        },
        {
          title: "You Are the Point",
          image: "/gallery/you-are-point.jpg",
          link: "/workshop/you-are-point"
        },
        {
          title: "RAW-MAN-TICK",
          image: "/gallery/raw-man-tick.jpg",
          link: "/workshop/raw-man-tick"
        },
        {
          title: "Flirt In",
          image: "/gallery/flirt-in.jpg",
          link: "/flirt-in"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white angela-typography">
      <Header />
      
      <div className="pt-20 px-4 md:px-18 pb-10">
        <h1 className="website-text text-2xl md:text-3xl font-bold mb-8 text-black">
          Gallery
        </h1>
        
        <div className="space-y-12">
          {galleryItems.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="website-text text-xl md:text-2xl font-semibold mb-6 text-black border-b border-gray-300 pb-2">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {category.items.map((item, itemIndex) => (
                  <Link 
                    key={itemIndex}
                    href={item.link}
                    className="group block bg-gray-50 rounded-lg overflow-hidden  transition-colors"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="website-text text-sm font-medium text-black  transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}