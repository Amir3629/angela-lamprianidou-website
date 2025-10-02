"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface PressItem {
  id: string;
  title: string;
  source: string;
  date: string;
  language: string;
  type: 'review' | 'interview' | 'article' | 'coverage';
  url?: string;
  content: string;
  isActive: boolean;
}

export default function PressManagementPage() {
  const [pressItems, setPressItems] = useState<PressItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<PressItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'review' | 'interview' | 'article' | 'coverage'>('all');

  // Form states
  const [newItem, setNewItem] = useState({
    title: "",
    source: "",
    date: "",
    language: "English",
    type: "review" as const,
    url: "",
    content: "",
    isActive: true
  });

  useEffect(() => {
    loadPressItems();
  }, []);

  const loadPressItems = () => {
    // In a real app, this would fetch from an API
    const mockPressItems: PressItem[] = [
      {
        id: "1",
        title: "Dance as a Social Movement - Review",
        source: "Dance Magazine",
        date: "2022-03-15",
        language: "English",
        type: "review",
        url: "https://example.com/review1",
        content: "A powerful exploration of movement and social change...",
        isActive: true
      },
      {
        id: "2",
        title: "Interview with Angela Lamprianidou",
        source: "Berlin Art Scene",
        date: "2022-01-20",
        language: "German",
        type: "interview",
        url: "https://example.com/interview1",
        content: "In this exclusive interview, Angela discusses her creative process...",
        isActive: true
      },
      {
        id: "3",
        title: "Contemporary Dance in Athens",
        source: "Greek Cultural Review",
        date: "2021-11-10",
        language: "Greek",
        type: "article",
        content: "An overview of the contemporary dance scene in Athens...",
        isActive: true
      },
      {
        id: "4",
        title: "Festival Coverage: Dance Festival Berlin",
        source: "Dance Europe",
        date: "2021-09-05",
        language: "English",
        type: "coverage",
        url: "https://example.com/coverage1",
        content: "Coverage of the Berlin Dance Festival featuring Angela's work...",
        isActive: true
      }
    ];
    setPressItems(mockPressItems);
    setIsLoading(false);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = (pressItems.length + 1).toString();
    const itemToAdd: PressItem = {
      ...newItem,
      id: newId
    };
    setPressItems([...pressItems, itemToAdd]);
    setNewItem({
      title: "",
      source: "",
      date: "",
      language: "English",
      type: "review",
      url: "",
      content: "",
      isActive: true
    });
    setShowAddForm(false);
  };

  const handleEditItem = (item: PressItem) => {
    setEditingItem(item);
    setNewItem({
      title: item.title,
      source: item.source,
      date: item.date,
      language: item.language,
      type: item.type,
      url: item.url || "",
      content: item.content,
      isActive: item.isActive
    });
    setShowAddForm(true);
  };

  const handleUpdateItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setPressItems(pressItems.map(item => 
        item.id === editingItem.id 
          ? { ...item, ...newItem }
          : item
      ));
      setEditingItem(null);
      setNewItem({
        title: "",
        source: "",
        date: "",
        language: "English",
        type: "review",
        url: "",
        content: "",
        isActive: true
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteItem = (id: string) => {
    if (confirm("Are you sure you want to delete this press item?")) {
      setPressItems(pressItems.filter(item => item.id !== id));
    }
  };

  const filteredItems = pressItems.filter(item => 
    filter === 'all' || item.type === filter
  );

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
              <h1 className="text-2xl font-bold">Press Management</h1>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors"
            >
              {showAddForm ? 'Cancel' : 'Add New Press Item'}
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded transition-colors ${
                filter === 'all' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white/20 text-white/70 hover:text-white'
              }`}
            >
              All ({pressItems.length})
            </button>
            <button
              onClick={() => setFilter('review')}
              className={`px-4 py-2 rounded transition-colors ${
                filter === 'review' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white/20 text-white/70 hover:text-white'
              }`}
            >
              Reviews ({pressItems.filter(item => item.type === 'review').length})
            </button>
            <button
              onClick={() => setFilter('interview')}
              className={`px-4 py-2 rounded transition-colors ${
                filter === 'interview' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white/20 text-white/70 hover:text-white'
              }`}
            >
              Interviews ({pressItems.filter(item => item.type === 'interview').length})
            </button>
            <button
              onClick={() => setFilter('article')}
              className={`px-4 py-2 rounded transition-colors ${
                filter === 'article' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white/20 text-white/70 hover:text-white'
              }`}
            >
              Articles ({pressItems.filter(item => item.type === 'article').length})
            </button>
            <button
              onClick={() => setFilter('coverage')}
              className={`px-4 py-2 rounded transition-colors ${
                filter === 'coverage' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white/20 text-white/70 hover:text-white'
              }`}
            >
              Coverage ({pressItems.filter(item => item.type === 'coverage').length})
            </button>
          </div>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl font-bold mb-4">
              {editingItem ? 'Edit Press Item' : 'Add New Press Item'}
            </h2>
            <form onSubmit={editingItem ? handleUpdateItem : handleAddItem} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={newItem.title}
                    onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="Press item title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Source
                  </label>
                  <input
                    type="text"
                    value={newItem.source}
                    onChange={(e) => setNewItem({...newItem, source: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="Magazine, newspaper, website"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={newItem.date}
                    onChange={(e) => setNewItem({...newItem, date: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Language
                  </label>
                  <select
                    value={newItem.language}
                    onChange={(e) => setNewItem({...newItem, language: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white focus:outline-none focus:border-green-400"
                  >
                    <option value="English">English</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Czech">Czech</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Type
                  </label>
                  <select
                    value={newItem.type}
                    onChange={(e) => setNewItem({...newItem, type: e.target.value as any})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white focus:outline-none focus:border-green-400"
                  >
                    <option value="review">Review</option>
                    <option value="interview">Interview</option>
                    <option value="article">Article</option>
                    <option value="coverage">Coverage</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    URL (optional)
                  </label>
                  <input
                    type="url"
                    value={newItem.url}
                    onChange={(e) => setNewItem({...newItem, url: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="https://example.com/article"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Content/Summary
                </label>
                <textarea
                  value={newItem.content}
                  onChange={(e) => setNewItem({...newItem, content: e.target.value})}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-32"
                  placeholder="Brief summary or excerpt from the press item"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={newItem.isActive}
                  onChange={(e) => setNewItem({...newItem, isActive: e.target.checked})}
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
                  {editingItem ? 'Update Press Item' : 'Add Press Item'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingItem(null);
                    setNewItem({
                      title: "",
                      source: "",
                      date: "",
                      language: "English",
                      type: "review",
                      url: "",
                      content: "",
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

      {/* Press Items List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.type === 'review' ? 'bg-blue-600' :
                      item.type === 'interview' ? 'bg-green-600' :
                      item.type === 'article' ? 'bg-purple-600' :
                      'bg-orange-600'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-white/70 text-sm">{item.language}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.isActive ? 'bg-green-600' : 'bg-red-600'
                    }`}>
                      {item.isActive ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-2">{item.source} - {item.date}</p>
                  <p className="text-white/60 text-sm">{item.content.substring(0, 150)}...</p>
                  {item.url && (
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 text-sm underline"
                    >
                      View Original
                    </a>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEditItem(item)}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">
              {filter === 'all' ? 'No press items yet.' : `No ${filter}s yet.`}
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors"
            >
              Add First Press Item
            </button>
          </div>
        )}
      </div>
    </div>
  );
}