"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface BackgroundImage {
  id: string;
  name: string;
  url: string;
  description: string;
  usedOn: string[];
  isActive: boolean;
}

export default function BackgroundsManagementPage() {
  const [backgrounds, setBackgrounds] = useState<BackgroundImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingBackground, setEditingBackground] = useState<BackgroundImage | null>(null);

  // Form states
  const [newBackground, setNewBackground] = useState({
    name: "",
    url: "",
    description: "",
    usedOn: [] as string[],
    isActive: true
  });

  const pageOptions = [
    "Home",
    "Gallery", 
    "Bio",
    "Press",
    "Contact",
    "Collaborations",
    "Archive",
    "Workshop",
    "Homemotion",
    "All Performance Pages"
  ];

  useEffect(() => {
    loadBackgrounds();
  }, []);

  const loadBackgrounds = () => {
    // In a real app, this would fetch from an API
    const mockBackgrounds: BackgroundImage[] = [
      {
        id: "1",
        name: "Main Background",
        url: "/main_bk21.jpg",
        description: "Primary background image used on the home page",
        usedOn: ["Home"],
        isActive: true
      },
      {
        id: "2", 
        name: "Performance Background",
        url: "/chick09_bk.jpg",
        description: "Background image used for all performance pages and other content pages",
        usedOn: ["Gallery", "Bio", "Press", "Contact", "Collaborations", "Archive", "Workshop", "Homemotion", "All Performance Pages"],
        isActive: true
      },
      {
        id: "3",
        name: "Alternative Background",
        url: "/main_bk.jpg", 
        description: "Alternative background image available for future use",
        usedOn: [],
        isActive: false
      }
    ];
    setBackgrounds(mockBackgrounds);
    setIsLoading(false);
  };

  const handleAddBackground = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = (backgrounds.length + 1).toString();
    const backgroundToAdd: BackgroundImage = {
      ...newBackground,
      id: newId
    };
    setBackgrounds([...backgrounds, backgroundToAdd]);
    setNewBackground({
      name: "",
      url: "",
      description: "",
      usedOn: [],
      isActive: true
    });
    setShowAddForm(false);
  };

  const handleEditBackground = (background: BackgroundImage) => {
    setEditingBackground(background);
    setNewBackground({
      name: background.name,
      url: background.url,
      description: background.description,
      usedOn: background.usedOn,
      isActive: background.isActive
    });
    setShowAddForm(true);
  };

  const handleUpdateBackground = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBackground) {
      setBackgrounds(backgrounds.map(bg => 
        bg.id === editingBackground.id 
          ? { ...bg, ...newBackground }
          : bg
      ));
      setEditingBackground(null);
      setNewBackground({
        name: "",
        url: "",
        description: "",
        usedOn: [],
        isActive: true
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteBackground = (id: string) => {
    if (confirm("Are you sure you want to delete this background image?")) {
      setBackgrounds(backgrounds.filter(bg => bg.id !== id));
    }
  };

  const togglePageUsage = (page: string) => {
    const newUsedOn = newBackground.usedOn.includes(page)
      ? newBackground.usedOn.filter(p => p !== page)
      : [...newBackground.usedOn, page];
    setNewBackground({ ...newBackground, usedOn: newUsedOn });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link 
                href="/admin" 
                className="text-white/70 hover:text-white transition-colors"
              >
                ← Back to Admin
              </Link>
              <h1 className="text-2xl font-bold">Background Images Management</h1>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors"
            >
              {showAddForm ? 'Cancel' : 'Add New Background'}
            </button>
          </div>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl font-bold mb-4">
              {editingBackground ? 'Edit Background Image' : 'Add New Background Image'}
            </h2>
            <form onSubmit={editingBackground ? handleUpdateBackground : handleAddBackground} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={newBackground.name}
                    onChange={(e) => setNewBackground({...newBackground, name: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="Background image name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={newBackground.url}
                    onChange={(e) => setNewBackground({...newBackground, url: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="/images/background.jpg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  value={newBackground.description}
                  onChange={(e) => setNewBackground({...newBackground, description: e.target.value})}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-24"
                  placeholder="Description of this background image"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2 mb-4">
                  Used On Pages
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {pageOptions.map((page) => (
                    <label key={page} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={newBackground.usedOn.includes(page)}
                        onChange={() => togglePageUsage(page)}
                        className="rounded"
                      />
                      <span className="text-sm text-white/80">{page}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={newBackground.isActive}
                  onChange={(e) => setNewBackground({...newBackground, isActive: e.target.checked})}
                  className="mr-2"
                />
                <label htmlFor="isActive" className="text-white text-sm">
                  Active (available for use)
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors"
                >
                  {editingBackground ? 'Update Background' : 'Add Background'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingBackground(null);
                    setNewBackground({
                      name: "",
                      url: "",
                      description: "",
                      usedOn: [],
                      isActive: true
                    });
                  }}
                  className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Backgrounds List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backgrounds.map((background) => (
            <div key={background.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="relative mb-4">
                <Image
                  src={background.url}
                  alt={background.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded"
                />
                <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-xs">
                  {background.isActive ? 'ACTIVE' : 'INACTIVE'}
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <h3 className="font-bold text-lg">{background.name}</h3>
                <p className="text-white/70 text-sm">{background.description}</p>
                <p className="text-white/50 text-xs">{background.url}</p>
                
                <div>
                  <h4 className="text-sm font-bold text-white/80 mb-2">Used on:</h4>
                  <div className="flex flex-wrap gap-1">
                    {background.usedOn.map((page) => (
                      <span key={page} className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">
                        {page}
                      </span>
                    ))}
                    {background.usedOn.length === 0 && (
                      <span className="text-white/50 text-xs">Not used on any pages</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditBackground(background)}
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBackground(background.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {backgrounds.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">No background images yet.</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors"
            >
              Add First Background
            </button>
          </div>
        )}
      </div>

      {/* Usage Guide */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
          <h3 className="text-lg font-bold mb-4">Background Usage Guide</h3>
          <div className="text-sm text-white/80 space-y-2">
            <p><strong>Main Background:</strong> Used on the home page for the main landing experience.</p>
            <p><strong>Performance Background:</strong> Used on all performance pages, gallery, bio, press, contact, and other content pages.</p>
            <p><strong>Alternative Backgrounds:</strong> Available for future use or special pages.</p>
            <p className="text-white/60 text-xs mt-4">
              Note: Background images should be high quality, properly sized, and optimized for web use. 
              Recommended dimensions: 1920x1080px or similar aspect ratio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}