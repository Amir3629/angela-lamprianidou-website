"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "angela2024") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Admin Access
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Angela Lamprianidou - CMS</h1>
            <div className="flex space-x-4">
              <Link 
                href="/" 
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded transition-colors"
              >
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Management */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h2 className="text-xl font-bold mb-4">Gallery Management</h2>
            <p className="text-white/70 mb-4">
              Manage gallery images, add new photos, update titles and descriptions.
            </p>
            <Link 
              href="/admin/gallery"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors inline-block"
            >
              Manage Gallery
            </Link>
          </div>

          {/* Performance Pages */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h2 className="text-xl font-bold mb-4">Performance Pages</h2>
            <p className="text-white/70 mb-4">
              Update performance descriptions, images, and content for all dance pieces.
            </p>
            <Link 
              href="/admin/performances"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors inline-block"
            >
              Manage Performances
            </Link>
          </div>

          {/* Contact & Bio */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h2 className="text-xl font-bold mb-4">Contact & Bio</h2>
            <p className="text-white/70 mb-4">
              Update contact information, biography, and personal details.
            </p>
            <Link 
              href="/admin/contact-bio"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors inline-block"
            >
              Manage Contact & Bio
            </Link>
          </div>

          {/* Press Content */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h2 className="text-xl font-bold mb-4">Press & Reviews</h2>
            <p className="text-white/70 mb-4">
              Manage press coverage, reviews, and media content.
            </p>
            <Link 
              href="/admin/press"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors inline-block"
            >
              Manage Press
            </Link>
          </div>

          {/* Background Images */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h2 className="text-xl font-bold mb-4">Background Images</h2>
            <p className="text-white/70 mb-4">
              Update background images for different pages and sections.
            </p>
            <Link 
              href="/admin/backgrounds"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors inline-block"
            >
              Manage Backgrounds
            </Link>
          </div>

          {/* Site Settings */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h2 className="text-xl font-bold mb-4">Site Settings</h2>
            <p className="text-white/70 mb-4">
              General site settings, navigation, and global content.
            </p>
            <Link 
              href="/admin/settings"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors inline-block"
            >
              Site Settings
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
          <h2 className="text-xl font-bold mb-4">Quick Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">16</div>
              <div className="text-white/70">Gallery Images</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">20+</div>
              <div className="text-white/70">Performance Pages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">5</div>
              <div className="text-white/70">Main Sections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">3</div>
              <div className="text-white/70">Background Images</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}