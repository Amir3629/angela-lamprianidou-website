"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  order: number;
}

export default function GalleryManagementPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);

  // Form states
  const [newImage, setNewImage] = useState({
    src: "",
    alt: "",
    title: "",
    order: 0
  });

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    // In a real app, this would fetch from an API
    const mockImages: GalleryImage[] = [
      { id: "1", src: "/gallery/PHOTO-2025-09-18-08-55-48.jpg", alt: "Gallery Image 1", title: "Performance Moment", order: 1 },
      { id: "2", src: "/gallery/PHOTO-2025-09-18-08-54-54.jpg", alt: "Gallery Image 2", title: "Dance Expression", order: 2 },
      { id: "3", src: "/gallery/PHOTO-2025-09-18-08-53-17.jpg", alt: "Gallery Image 3", title: "Artistic Movement", order: 3 },
      { id: "4", src: "/gallery/PHOTO-2025-09-18-08-52-45.jpg", alt: "Gallery Image 4", title: "Creative Process", order: 4 },
      { id: "5", src: "/gallery/PHOTO-2025-09-18-08-56-28.jpg", alt: "Gallery Image 5", title: "Performance Art", order: 5 },
      { id: "6", src: "/gallery/PHOTO-2025-09-18-08-56-42.jpg", alt: "Gallery Image 6", title: "Movement Study", order: 6 },
      { id: "7", src: "/gallery/PHOTO-2025-09-18-08-57-39.jpg", alt: "Gallery Image 7", title: "Dance Exploration", order: 7 },
      { id: "8", src: "/gallery/PHOTO-2025-09-18-08-57-48.jpg", alt: "Gallery Image 8", title: "Artistic Vision", order: 8 },
      { id: "9", src: "/gallery/PHOTO-2025-09-18-08-57-54.jpg", alt: "Gallery Image 9", title: "Creative Expression", order: 9 },
      { id: "10", src: "/gallery/PHOTO-2025-09-18-09-01-13.jpg", alt: "Gallery Image 10", title: "Performance Documentation", order: 10 },
      { id: "11", src: "/gallery/PHOTO-2025-09-18-09-01-22.jpg", alt: "Gallery Image 11", title: "Dance Artistry", order: 11 },
      { id: "12", src: "/gallery/PHOTO-2025-09-18-09-01-30.jpg", alt: "Gallery Image 12", title: "Movement Art", order: 12 },
      { id: "13", src: "/gallery/PHOTO-2025-09-18-09-01-38.jpg", alt: "Gallery Image 13", title: "Creative Movement", order: 13 },
      { id: "14", src: "/gallery/PHOTO-2025-09-18-09-01-45.jpg", alt: "Gallery Image 14", title: "Performance Art", order: 14 },
      { id: "15", src: "/gallery/PHOTO-2025-09-18-09-01-53.jpg", alt: "Gallery Image 15", title: "Dance Expression", order: 15 },
      { id: "16", src: "/gallery/PHOTO-2025-09-18-09-02-08.jpg", alt: "Gallery Image 16", title: "Artistic Vision", order: 16 }
    ];
    setImages(mockImages);
    setIsLoading(false);
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = (images.length + 1).toString();
    const imageToAdd: GalleryImage = {
      ...newImage,
      id: newId,
      order: images.length + 1
    };
    setImages([...images, imageToAdd]);
    setNewImage({ src: "", alt: "", title: "", order: 0 });
    setShowAddForm(false);
  };

  const handleEditImage = (image: GalleryImage) => {
    setEditingImage(image);
    setNewImage({
      src: image.src,
      alt: image.alt,
      title: image.title,
      order: image.order
    });
    setShowAddForm(true);
  };

  const handleUpdateImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingImage) {
      setImages(images.map(img => 
        img.id === editingImage.id 
          ? { ...img, ...newImage }
          : img
      ));
      setEditingImage(null);
      setNewImage({ src: "", alt: "", title: "", order: 0 });
      setShowAddForm(false);
    }
  };

  const handleDeleteImage = (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  const moveImage = (id: string, direction: 'up' | 'down') => {
    const currentIndex = images.findIndex(img => img.id === id);
    if (currentIndex === -1) return;

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= images.length) return;

    const newImages = [...images];
    [newImages[currentIndex], newImages[newIndex]] = [newImages[newIndex], newImages[currentIndex]];
    
    // Update order numbers
    newImages.forEach((img, index) => {
      img.order = index + 1;
    });
    
    setImages(newImages);
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
              <h1 className="text-2xl font-bold">Gallery Management</h1>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors"
            >
              {showAddForm ? 'Cancel' : 'Add New Image'}
            </button>
          </div>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl font-bold mb-4">
              {editingImage ? 'Edit Image' : 'Add New Image'}
            </h2>
            <form onSubmit={editingImage ? handleUpdateImage : handleAddImage} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={newImage.src}
                  onChange={(e) => setNewImage({...newImage, src: e.target.value})}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                  placeholder="/gallery/image.jpg"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={newImage.alt}
                  onChange={(e) => setNewImage({...newImage, alt: e.target.value})}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                  placeholder="Description for accessibility"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newImage.title}
                  onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                  placeholder="Image title"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Order
                </label>
                <input
                  type="number"
                  value={newImage.order}
                  onChange={(e) => setNewImage({...newImage, order: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                  placeholder="Display order"
                  min="1"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors mr-4"
                >
                  {editingImage ? 'Update Image' : 'Add Image'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingImage(null);
                    setNewImage({ src: "", alt: "", title: "", order: 0 });
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

      {/* Images Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={image.id} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="relative mb-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded"
                />
                <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-xs">
                  #{image.order}
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <h3 className="font-bold text-sm">{image.title}</h3>
                <p className="text-white/70 text-xs">{image.alt}</p>
                <p className="text-white/50 text-xs">{image.src}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleEditImage(image)}
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => moveImage(image.id, 'up')}
                  disabled={index === 0}
                  className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed px-3 py-1 rounded text-xs transition-colors"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveImage(image.id, 'down')}
                  disabled={index === images.length - 1}
                  className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed px-3 py-1 rounded text-xs transition-colors"
                >
                  ↓
                </button>
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">No images in gallery yet.</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors"
            >
              Add First Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}