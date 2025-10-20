"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { PencilIcon, PlusIcon, TrashIcon, DocumentArrowDownIcon, EyeIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { getPageData, savePageData, PageData } from "../../../../lib/cms-data";

interface MediaItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  title?: string;
  caption?: string;
  credit?: string;
}

export default function EditPage() {
  const params = useParams();
  const router = useRouter();
  const pageId = params.pageId as string;
  
  const [pageData, setPageData] = useState<PageData>({
    id: pageId,
    title: "",
    description: "",
    additionalInfo: "",
    photographer: "",
    imageSize: "xlarge",
    mediaItems: [],
    lastModified: new Date().toISOString()
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Load page data from storage
  useEffect(() => {
    const existingData = getPageData(pageId);
    if (existingData) {
      setPageData(existingData);
    } else {
      // Create new page data with proper structure based on pageId
      const getDefaultDataForPage = (pageId: string) => {
        switch (pageId) {
          case "piece_peace":
            return {
              id: pageId,
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
              additionalInfo: "",
              photographer: "",
              imageSize: "xlarge" as const,
              mediaItems: [
                {
                  src: "/Peace-piece.jpg",
                  alt: "Piece#Peace",
                  type: "image" as const,
                  title: "Piece#Peace"
                }
              ],
              lastModified: new Date().toISOString()
            };
          case "backtoemotion":
            return {
              id: pageId,
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
              photographer: "",
              imageSize: "xlarge" as const,
              mediaItems: [
                {
                  src: "/backtoemotion-1.jpg",
                  alt: "Back to Emotion",
                  type: "image" as const,
                  title: "Back to Emotion"
                },
                {
                  src: "/backtoemotion-2.jpg",
                  alt: "Personal Interactive Meeting",
                  type: "image" as const,
                  title: "Personal Interactive Meeting"
                },
                {
                  src: "/backtoemotion-3.jpg",
                  alt: "One-Person Audience",
                  type: "image" as const,
                  title: "One-Person Audience"
                },
                {
                  src: "/backtoemotion-4.jpg",
                  alt: "Private Flat Performance",
                  type: "image" as const,
                  title: "Private Flat Performance"
                },
                {
                  src: "https://www.youtube.com/watch?v=a3GLyclqvOM",
                  alt: "Back to Emotion Video",
                  type: "video" as const,
                  title: "Back to Emotion Video"
                }
              ],
              lastModified: new Date().toISOString()
            };
          default:
            return {
              id: pageId,
              title: pageId.charAt(0).toUpperCase() + pageId.slice(1).replace(/([A-Z])/g, ' $1'),
              description: "Enter the main description text for this page...",
              additionalInfo: "Enter additional information, technical details, credits, etc...",
              photographer: "",
              imageSize: "xlarge" as const,
              mediaItems: [
                {
                  src: "/placeholder.jpg",
                  alt: "Placeholder image",
                  type: "image" as const,
                  title: "Placeholder"
                }
              ],
              lastModified: new Date().toISOString()
            };
        }
      };
      
      setPageData(getDefaultDataForPage(pageId));
    }
  }, [pageId]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      savePageData(pageData);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSaving(false);
      alert("Page saved successfully!");
    } catch (error) {
      setIsSaving(false);
      alert("Error saving page. Please try again.");
    }
  };


  const handleMediaItemChange = (index: number, field: keyof MediaItem, value: any) => {
    setPageData(prev => ({
      ...prev,
      mediaItems: prev.mediaItems.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addMediaItem = () => {
    setPageData(prev => ({
      ...prev,
      mediaItems: [...prev.mediaItems, {
        src: "",
        alt: "",
        type: "image",
        title: ""
      }]
    }));
  };

  const removeMediaItem = (index: number) => {
    setPageData(prev => ({
      ...prev,
      mediaItems: prev.mediaItems.filter((_, i) => i !== index)
    }));
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      return;
    }

    const newMediaItems = [...pageData.mediaItems];
    const draggedItem = newMediaItems[draggedIndex];
    
    // Remove the dragged item
    newMediaItems.splice(draggedIndex, 1);
    
    // Insert it at the new position
    const newIndex = draggedIndex < dropIndex ? dropIndex - 1 : dropIndex;
    newMediaItems.splice(newIndex, 0, draggedItem);

    setPageData(prev => ({
      ...prev,
      mediaItems: newMediaItems
    }));

    setDraggedIndex(null);
  };

  const moveMediaItem = (fromIndex: number, toIndex: number) => {
    const newMediaItems = [...pageData.mediaItems];
    const [movedItem] = newMediaItems.splice(fromIndex, 1);
    newMediaItems.splice(toIndex, 0, movedItem);
    
    setPageData(prev => ({
      ...prev,
      mediaItems: newMediaItems
    }));
  };

  const getPagePath = () => {
    // Map page IDs to their actual paths
    const pathMap: Record<string, string> = {
      "piece_peace": "/Per4mer/piece_peace",
      "SocialMovement": "/Per4mer/SocialMovement",
      "homemotion": "/homemotion",
      "SITz": "/Per4mer/SITz",
      "TanzhinTanzher": "/Per4mer/TanzhinTanzher",
      "AppointmentOnStage": "/Per4mer/AppointmentOnStage",
      "Appointment2": "/Per4mer/Appointment2",
      "alihop": "/Per4mer/alihop",
      "sit": "/Per4mer/sit",
      "tongue": "/Per4mer/tongue",
      "thenote": "/Per4mer/thenote",
      "elcuerpo": "/Per4mer/elcuerpo",
      "opaeuropa": "/Per4mer/opaeuropa",
      "katharsi": "/Per4mer/katharsi",
      "time": "/Per4mer/time",
      "loop": "/Per4mer/loop",
      "artsit": "/Per4mer/artsit",
      "movie": "/Per4mer/movie",
      "BalletBloody": "/Per4mer/BalletBloody",
      "FromNOWtoNow": "/Per4mer/FromNOWtoNow",
      "backtoemotion": "/Per4mer/backtoemotion",
      "jaw-release": "/workshop/jaw-release",
      "raw-man-tick": "/workshop/raw-man-tick",
      "zeitgeist": "/workshop/zeitgeist",
      "life-choreography": "/workshop/life-choreography",
      "expansion": "/workshop/expansion",
      "dance-news": "/workshop/dance-news",
      "flipflop": "/workshop/flipflop",
      "yoga": "/workshop/yoga",
      "composition": "/workshop/composition",
      "cia": "/workshop/cia",
      "ta-panta-rei": "/workshop/ta-panta-rei",
      "you-are-the-point": "/you-are-the-point",
      "experiences": "/experiences",
      "pure": "/pure",
      "flirt-in": "/flirt-in",
      "hello-its-me": "/hello-its-me",
      "news-dates": "/news-dates"
    };
    return pathMap[pageId] || `/${pageId}`;
  };

  return (
    <div className="min-h-screen bg-white text-black website-font angela-typography">
      {/* Header */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-black">Media Management: {pageData.title}</h1>
              <p className="text-black font-medium">Manage images and videos for this page</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="bg-gray-700 hover:bg-gray-800 !text-white px-6 py-3 transition-all duration-200 flex items-center space-x-2 border-2 border-gray-700 font-bold rounded-none hover:shadow-lg [&>*]:!text-white"
              >
                <EyeIcon className="w-4 h-4" />
                <span>{showPreview ? 'Hide Preview' : 'Show Preview'}</span>
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-black hover:bg-gray-800 disabled:bg-gray-400 !text-white px-6 py-3 transition-all duration-200 flex items-center space-x-2 border-2 border-black font-bold rounded-none hover:shadow-lg disabled:shadow-none [&>*]:!text-white"
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
              </button>
              <Link 
                href="/admin"
                className="bg-gray-600 hover:bg-gray-700 !text-white px-6 py-3 transition-all duration-200 border-2 border-gray-600 font-bold rounded-none hover:shadow-lg"
              >
                Back to Pages
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {showPreview ? (
          /* Preview Mode */
          <div className="bg-white text-black border-2 border-black p-8">
            <h2 className="text-3xl font-bold mb-6 text-black">Media Preview</h2>
            <div className="prose max-w-none">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-black">Media Items</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pageData.mediaItems.map((item, index) => (
                    <div key={index} className="border-2 border-black p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-gray-600">#{index + 1}</span>
                        <span className="text-xs text-gray-500">{item.type.toUpperCase()}</span>
                      </div>
                      <div className="aspect-video bg-gray-200 rounded mb-2 flex items-center justify-center">
                        {item.type === 'image' ? (
                          <span className="text-gray-500">Image: {item.title || 'Untitled'}</span>
                        ) : (
                          <span className="text-gray-500">Video: {item.title || 'Untitled'}</span>
                        )}
                      </div>
                      <h4 className="font-bold text-black">{item.title || 'Untitled'}</h4>
                      <p className="text-sm text-gray-600">{item.alt || 'No description'}</p>
                      <p className="text-xs text-gray-500 mt-1">URL: {item.src}</p>
                    </div>
                  ))}
                </div>
                {pageData.mediaItems.length === 0 && (
                  <p className="text-gray-500 italic">No media items added yet.</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Edit Mode - Media Only */
          <div className="space-y-8">
            {/* Media Management Section */}
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-black">Images & Videos</h2>
                  <p className="text-sm text-gray-600 mt-1">Drag items to reorder or use the Move Up/Down buttons</p>
                </div>
                <button
                  onClick={addMediaItem}
                  className="bg-black hover:bg-gray-800 !text-white px-6 py-3 transition-all duration-200 flex items-center space-x-2 border-2 border-black font-bold rounded-none hover:shadow-lg [&>*]:!text-white"
                >
                  <PlusIcon className="w-4 h-4" />
                  <span>Add Media</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {pageData.mediaItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-gray-50 p-4 border-2 border-black transition-all duration-200 ${
                      draggedIndex === index ? 'opacity-50 scale-95' : ''
                    }`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Bars3Icon className="w-5 h-5 text-gray-500 cursor-move" />
                        <span className="text-sm font-bold text-gray-600">Item {index + 1}</span>
                      </div>
                      <div className="flex space-x-2">
                        {index > 0 && (
                          <button
                            onClick={() => moveMediaItem(index, index - 1)}
                            className="bg-gray-600 hover:bg-gray-700 !text-white px-3 py-2 text-sm transition-all duration-200 border border-gray-600 font-bold rounded-none hover:shadow-md"
                          >
                            ↑ Move Up
                          </button>
                        )}
                        {index < pageData.mediaItems.length - 1 && (
                          <button
                            onClick={() => moveMediaItem(index, index + 1)}
                            className="bg-gray-600 hover:bg-gray-700 !text-white px-3 py-2 text-sm transition-all duration-200 border border-gray-600 font-bold rounded-none hover:shadow-md"
                          >
                            ↓ Move Down
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Source URL</label>
                        <input
                          type="text"
                          value={item.src}
                          onChange={(e) => handleMediaItemChange(index, 'src', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Image or video URL"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Type</label>
                        <select
                          value={item.type}
                          onChange={(e) => handleMediaItemChange(index, 'type', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black focus:outline-none focus:border-gray-400"
                        >
                          <option value="image">Image</option>
                          <option value="video">Video</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Title</label>
                        <input
                          type="text"
                          value={item.title || ''}
                          onChange={(e) => handleMediaItemChange(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Media title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Alt Text</label>
                        <input
                          type="text"
                          value={item.alt}
                          onChange={(e) => handleMediaItemChange(index, 'alt', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Alt text for accessibility"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => removeMediaItem(index)}
                        className="bg-gray-800 hover:bg-gray-900 !text-white px-4 py-2 transition-all duration-200 flex items-center space-x-2 border-2 border-gray-800 font-bold rounded-none hover:shadow-md [&>*]:!text-white"
                      >
                        <TrashIcon className="w-4 h-4" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
                
                {pageData.mediaItems.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-lg">No media items added yet.</p>
                    <p className="text-sm">Click "Add Media" to get started.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
