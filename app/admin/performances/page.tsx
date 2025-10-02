"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Performance {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  videos: string[];
  pdfUrl?: string;
  pressReviews: string[];
  isActive: boolean;
}

export default function PerformancesManagementPage() {
  const [performances, setPerformances] = useState<Performance[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPerformance, setEditingPerformance] = useState<Performance | null>(null);

  // Form states
  const [newPerformance, setNewPerformance] = useState({
    title: "",
    slug: "",
    description: "",
    images: [] as string[],
    videos: [] as string[],
    pdfUrl: "",
    pressReviews: [] as string[],
    isActive: true
  });

  useEffect(() => {
    loadPerformances();
  }, []);

  const loadPerformances = () => {
    // In a real app, this would fetch from an API
    const mockPerformances: Performance[] = [
      {
        id: "1",
        title: "SITz",
        slug: "SITz",
        description: "An exploration of stillness and movement, examining the tension between sitting and standing, rest and action. This work investigates the politics of posture and the social implications of how we position our bodies in space.",
        images: [
          "https://lamprianidou.com/Per4mer/sitz/sitz01.jpg",
          "https://lamprianidou.com/Per4mer/sitz/sitz02.jpg",
          "https://lamprianidou.com/Per4mer/sitz/sitz03.jpg",
          "https://lamprianidou.com/Per4mer/sitz/sitz04.jpg",
          "https://lamprianidou.com/Per4mer/sitz/sitz05.jpg",
          "https://lamprianidou.com/Per4mer/sitz/sitz06.jpg",
          "https://lamprianidou.com/Per4mer/sitz/sitz07.jpg"
        ],
        videos: [],
        pdfUrl: "https://lamprianidou.com/Per4mer/sitz/SITz%20by%20Angela%20Lamprianidou.pdf",
        pressReviews: [
          "Review from Dance Magazine",
          "Critique from Berlin Art Scene"
        ],
        isActive: true
      },
      {
        id: "2",
        title: "alihop",
        slug: "alihop",
        description: "A playful investigation into rhythm, repetition, and the childlike joy of movement. This piece explores how simple gestures can become complex choreographic statements through variation and development.",
        images: [
          "https://lamprianidou.com/Per4mer/alihop/alihop01.jpg",
          "https://lamprianidou.com/Per4mer/alihop/alihop02.jpg",
          "https://lamprianidou.com/Per4mer/alihop/alihop03.jpg",
          "https://lamprianidou.com/Per4mer/alihop/alihop04.jpg",
          "https://lamprianidou.com/Per4mer/alihop/alihop05.jpg",
          "https://lamprianidou.com/Per4mer/alihop/alihop06.jpg"
        ],
        videos: [],
        pressReviews: [],
        isActive: true
      },
      {
        id: "3",
        title: "Ballet for bloody beginners",
        slug: "BalletBloody",
        description: "A raw and honest exploration of ballet technique, stripping away the polished exterior to reveal the physical and emotional challenges of learning classical dance.",
        images: [
          "https://lamprianidou.com/Per4mer/BalletBloody/Ballet_for_bloody_beginners.jpg"
        ],
        videos: [],
        pressReviews: [],
        isActive: true
      }
    ];
    setPerformances(mockPerformances);
    setIsLoading(false);
  };

  const handleAddPerformance = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = (performances.length + 1).toString();
    const performanceToAdd: Performance = {
      ...newPerformance,
      id: newId,
      slug: newPerformance.slug || newPerformance.title.toLowerCase().replace(/\s+/g, '')
    };
    setPerformances([...performances, performanceToAdd]);
    setNewPerformance({
      title: "",
      slug: "",
      description: "",
      images: [],
      videos: [],
      pdfUrl: "",
      pressReviews: [],
      isActive: true
    });
    setShowAddForm(false);
  };

  const handleEditPerformance = (performance: Performance) => {
    setEditingPerformance(performance);
    setNewPerformance({
      title: performance.title,
      slug: performance.slug,
      description: performance.description,
      images: performance.images,
      videos: performance.videos,
      pdfUrl: performance.pdfUrl || "",
      pressReviews: performance.pressReviews,
      isActive: performance.isActive
    });
    setShowAddForm(true);
  };

  const handleUpdatePerformance = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPerformance) {
      setPerformances(performances.map(perf => 
        perf.id === editingPerformance.id 
          ? { ...perf, ...newPerformance }
          : perf
      ));
      setEditingPerformance(null);
      setNewPerformance({
        title: "",
        slug: "",
        description: "",
        images: [],
        videos: [],
        pdfUrl: "",
        pressReviews: [],
        isActive: true
      });
      setShowAddForm(false);
    }
  };

  const handleDeletePerformance = (id: string) => {
    if (confirm("Are you sure you want to delete this performance?")) {
      setPerformances(performances.filter(perf => perf.id !== id));
    }
  };

  const addImage = () => {
    setNewPerformance({
      ...newPerformance,
      images: [...newPerformance.images, ""]
    });
  };

  const updateImage = (index: number, value: string) => {
    const newImages = [...newPerformance.images];
    newImages[index] = value;
    setNewPerformance({ ...newPerformance, images: newImages });
  };

  const removeImage = (index: number) => {
    const newImages = newPerformance.images.filter((_, i) => i !== index);
    setNewPerformance({ ...newPerformance, images: newImages });
  };

  const addPressReview = () => {
    setNewPerformance({
      ...newPerformance,
      pressReviews: [...newPerformance.pressReviews, ""]
    });
  };

  const updatePressReview = (index: number, value: string) => {
    const newReviews = [...newPerformance.pressReviews];
    newReviews[index] = value;
    setNewPerformance({ ...newPerformance, pressReviews: newReviews });
  };

  const removePressReview = (index: number) => {
    const newReviews = newPerformance.pressReviews.filter((_, i) => i !== index);
    setNewPerformance({ ...newPerformance, pressReviews: newReviews });
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
              <h1 className="text-2xl font-bold">Performance Management</h1>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors"
            >
              {showAddForm ? 'Cancel' : 'Add New Performance'}
            </button>
          </div>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl font-bold mb-4">
              {editingPerformance ? 'Edit Performance' : 'Add New Performance'}
            </h2>
            <form onSubmit={editingPerformance ? handleUpdatePerformance : handleAddPerformance} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={newPerformance.title}
                    onChange={(e) => setNewPerformance({...newPerformance, title: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="Performance title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={newPerformance.slug}
                    onChange={(e) => setNewPerformance({...newPerformance, slug: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="url-slug"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  value={newPerformance.description}
                  onChange={(e) => setNewPerformance({...newPerformance, description: e.target.value})}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-32"
                  placeholder="Performance description"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  PDF URL
                </label>
                <input
                  type="url"
                  value={newPerformance.pdfUrl}
                  onChange={(e) => setNewPerformance({...newPerformance, pdfUrl: e.target.value})}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                  placeholder="https://example.com/performance.pdf"
                />
              </div>

              {/* Images */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-white text-sm font-bold">
                    Images
                  </label>
                  <button
                    type="button"
                    onClick={addImage}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors"
                  >
                    Add Image
                  </button>
                </div>
                {newPerformance.images.map((image, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => updateImage(index, e.target.value)}
                      className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                      placeholder="Image URL"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-xs transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Press Reviews */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-white text-sm font-bold">
                    Press Reviews
                  </label>
                  <button
                    type="button"
                    onClick={addPressReview}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors"
                  >
                    Add Review
                  </button>
                </div>
                {newPerformance.pressReviews.map((review, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={review}
                      onChange={(e) => updatePressReview(index, e.target.value)}
                      className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                      placeholder="Press review text"
                    />
                    <button
                      type="button"
                      onClick={() => removePressReview(index)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-xs transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={newPerformance.isActive}
                  onChange={(e) => setNewPerformance({...newPerformance, isActive: e.target.checked})}
                  className="mr-2"
                />
                <label htmlFor="isActive" className="text-white text-sm">
                  Active (visible on website)
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors"
                >
                  {editingPerformance ? 'Update Performance' : 'Add Performance'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingPerformance(null);
                    setNewPerformance({
                      title: "",
                      slug: "",
                      description: "",
                      images: [],
                      videos: [],
                      pdfUrl: "",
                      pressReviews: [],
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

      {/* Performances List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {performances.map((performance) => (
            <div key={performance.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{performance.title}</h3>
                  <p className="text-white/70 text-sm">/{performance.slug}</p>
                  <p className="text-white/60 text-xs mt-2">{performance.description.substring(0, 150)}...</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditPerformance(performance)}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePerformance(performance.id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-white/70">Images:</span> {performance.images.length}
                </div>
                <div>
                  <span className="text-white/70">Reviews:</span> {performance.pressReviews.length}
                </div>
                <div>
                  <span className="text-white/70">PDF:</span> {performance.pdfUrl ? 'Yes' : 'No'}
                </div>
                <div>
                  <span className="text-white/70">Status:</span> 
                  <span className={`ml-1 ${performance.isActive ? 'text-green-400' : 'text-red-400'}`}>
                    {performance.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {performances.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">No performances yet.</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors"
            >
              Add First Performance
            </button>
          </div>
        )}
      </div>
    </div>
  );
}