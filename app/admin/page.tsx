"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface PageInfo {
  id: string;
  title: string;
  path: string;
  category: string;
  description: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // All pages that need CMS management
  const pages: PageInfo[] = [
    // Per4mer pages
    { id: "piece_peace", title: "Piece#Peace", path: "/Per4mer/piece_peace", category: "Per4mer", description: "Research into new peace rituals through dance" },
    { id: "SocialMovement", title: "Social Movement", path: "/Per4mer/SocialMovement", category: "Per4mer", description: "Social movement performance" },
    { id: "homemotion", title: "Home Motion", path: "/homemotion", category: "Per4mer", description: "Home motion performance" },
    { id: "SITz", title: "SITz", path: "/Per4mer/SITz", category: "Per4mer", description: "Sitting performance piece" },
    { id: "TanzhinTanzher", title: "Tanzhin Tanzher", path: "/Per4mer/TanzhinTanzher", category: "Per4mer", description: "Dance performance" },
    { id: "AppointmentOnStage", title: "Appointment on Stage", path: "/Per4mer/AppointmentOnStage", category: "Per4mer", description: "Political freedom performance" },
    { id: "Appointment2", title: "Appointment #2", path: "/Per4mer/Appointment2", category: "Per4mer", description: "Second appointment performance" },
    { id: "alihop", title: "Alihop", path: "/Per4mer/alihop", category: "Per4mer", description: "Alihop performance" },
    { id: "sit", title: "Sit", path: "/Per4mer/sit", category: "Per4mer", description: "Sitting performance" },
    { id: "tongue", title: "Tongue", path: "/Per4mer/tongue", category: "Per4mer", description: "Tongue performance" },
    { id: "thenote", title: "The Note", path: "/Per4mer/thenote", category: "Per4mer", description: "Sound and movement exploration" },
    { id: "elcuerpo", title: "El Cuerpo", path: "/Per4mer/elcuerpo", category: "Per4mer", description: "The other's body performance" },
    { id: "opaeuropa", title: "Opa Europa", path: "/Per4mer/opaeuropa", category: "Per4mer", description: "European performance" },
    { id: "katharsi", title: "Katharsi", path: "/Per4mer/katharsi", category: "Per4mer", description: "Catharsis performance" },
    { id: "time", title: "Time", path: "/Per4mer/time", category: "Per4mer", description: "Time-based performance" },
    { id: "loop", title: "Loop", path: "/Per4mer/loop", category: "Per4mer", description: "Loop performance" },
    { id: "artsit", title: "Art Sit", path: "/Per4mer/artsit", category: "Per4mer", description: "Art sitting performance" },
    { id: "movie", title: "Movie", path: "/Per4mer/movie", category: "Per4mer", description: "Movie performance" },
    { id: "BalletBloody", title: "Ballet Bloody", path: "/Per4mer/BalletBloody", category: "Per4mer", description: "Ballet for bloody beginners" },
    { id: "FromNOWtoNow", title: "From NOW to Now", path: "/Per4mer/FromNOWtoNow", category: "Per4mer", description: "Time-based performance" },
    { id: "backtoemotion", title: "Back to Emotion", path: "/Per4mer/backtoemotion", category: "Per4mer", description: "Personal interactive meeting" },
    
    // Workshop pages
    { id: "jaw-release", title: "Jaw Release", path: "/workshop/jaw-release", category: "Workshop", description: "Jaw release workshop" },
    { id: "raw-man-tick", title: "Raw Man Tick", path: "/workshop/raw-man-tick", category: "Workshop", description: "Raw man tick workshop" },
    { id: "zeitgeist", title: "Zeitgeist", path: "/workshop/zeitgeist", category: "Workshop", description: "Zeitgeist workshop" },
    { id: "life-choreography", title: "Life Choreography", path: "/workshop/life-choreography", category: "Workshop", description: "Life choreography workshop" },
    { id: "expansion", title: "Expansion", path: "/workshop/expansion", category: "Workshop", description: "Expansion workshop" },
    { id: "dance-news", title: "Dance News", path: "/workshop/dance-news", category: "Workshop", description: "Dance news workshop" },
    { id: "flipflop", title: "Flip Flop", path: "/workshop/flipflop", category: "Workshop", description: "Flip flop workshop" },
    { id: "yoga", title: "Yoga", path: "/workshop/yoga", category: "Workshop", description: "Yoga workshop" },
    { id: "composition", title: "Composition", path: "/workshop/composition", category: "Workshop", description: "Composition workshop" },
    { id: "cia", title: "CIA", path: "/workshop/cia", category: "Workshop", description: "CIA workshop" },
    { id: "ta-panta-rei", title: "Ta Panta Rei", path: "/workshop/ta-panta-rei", category: "Workshop", description: "Ta panta rei workshop" },
    
    // Other pages
    { id: "you-are-the-point", title: "You Are The Point", path: "/you-are-the-point", category: "Other", description: "You are the point project" },
    { id: "experiences", title: "Experiences", path: "/experiences", category: "Other", description: "Experiences page" },
    { id: "pure", title: "Pure", path: "/pure", category: "Other", description: "Pure performance" },
    { id: "flirt-in", title: "Flirt In", path: "/flirt-in", category: "Other", description: "Flirt in performance" },
    { id: "hello-its-me", title: "Hello It's Me", path: "/hello-its-me", category: "Other", description: "Hello it's me performance" },
    { id: "news-dates", title: "News & Dates", path: "/news-dates", category: "Other", description: "News and dates page" }
  ];

  const handleLogin = () => {
    setIsAuthenticated(true);
    setError("");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const groupedPages = pages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, PageInfo[]>);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center website-font angela-typography">
        <div className="bg-white border-2 border-black p-8 max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-black mb-6 text-center">
            Admin Access
          </h1>
          <div className="space-y-4">
            <p className="text-gray-700 text-center mb-6">Click the button below to access the admin panel</p>
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
            <button
              onClick={handleLogin}
              className="w-full bg-black hover:bg-gray-800 !text-white font-bold py-3 px-6 transition-all duration-200 border-2 border-black rounded-none hover:shadow-lg"
            >
              Access Admin Panel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black website-font angela-typography">
      {/* Header */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">Angela Lamprianidou - CMS</h1>
            <div className="flex space-x-4">
              <Link 
                href="/" 
                className="bg-black hover:bg-gray-800 !text-white px-6 py-3 transition-all duration-200 border-2 border-black font-bold rounded-none hover:shadow-lg"
              >
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-800 hover:bg-gray-900 !text-white px-6 py-3 transition-all duration-200 border-2 border-gray-800 font-bold rounded-none hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-black">Page Management</h2>
          <p className="text-black text-lg font-medium">
            Select a page to edit its content, images, and videos. Each page can be edited with inline editing tools.
          </p>
        </div>

        {/* Pages by Category */}
        {Object.entries(groupedPages).map(([category, categoryPages]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-black">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPages.map((page) => (
                <div key={page.id} className="bg-white border-2 border-black p-6 hover:bg-gray-50 transition-colors">
                  <h4 className="text-xl font-bold mb-2 text-black">{page.title}</h4>
                  <p className="text-black mb-4 text-sm font-medium">{page.description}</p>
                  <div className="flex space-x-3">
                    <Link 
                      href={page.id === 'news-dates' ? '/admin/edit/news-dates' : `/admin/edit/${page.id}`}
                      className="bg-black hover:bg-gray-800 !text-white px-4 py-2 transition-all duration-200 text-sm border-2 border-black font-bold rounded-none hover:shadow-md"
                    >
                      {page.id === 'news-dates' ? 'Edit News & Dates' : 'Edit Content'}
                    </Link>
                    <Link 
                      href={page.path}
                      target="_blank"
                      className="bg-gray-700 hover:bg-gray-800 !text-white px-4 py-2 transition-all duration-200 text-sm border-2 border-gray-700 font-bold rounded-none hover:shadow-md"
                    >
                      View Page
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Stats */}
        <div className="mt-12 bg-white border-2 border-black p-6">
          <h2 className="text-xl font-bold mb-4 text-black">Quick Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-black">{pages.length}</div>
              <div className="text-black font-medium">Total Pages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">{Object.keys(groupedPages).length}</div>
              <div className="text-black font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">100%</div>
              <div className="text-black font-medium">Editable</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">✓</div>
              <div className="text-black font-medium">CMS Ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
