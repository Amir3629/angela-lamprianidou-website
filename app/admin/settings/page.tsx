"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  siteKeywords: string;
  contactEmail: string;
  socialLinks: {
    vimeo: string;
    instagram: string;
    facebook: string;
    twitter: string;
  };
  navigation: {
    showGallery: boolean;
    showWorkshop: boolean;
    showArchive: boolean;
  };
  footerText: string;
  maintenanceMode: boolean;
  analyticsCode: string;
}

export default function SettingsManagementPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteTitle: "Angela Lamprianidou",
    siteDescription: "Choreographer, Performer & Teacher - Contemporary Dance and Movement Art",
    siteKeywords: "dance, choreography, contemporary dance, performance art, movement, Angela Lamprianidou",
    contactEmail: "angela@lamprianidou.com",
    socialLinks: {
      vimeo: "https://vimeo.com/lamprianidou",
      instagram: "",
      facebook: "",
      twitter: ""
    },
    navigation: {
      showGallery: true,
      showWorkshop: true,
      showArchive: true
    },
    footerText: "All rights reserved, including videos",
    maintenanceMode: false,
    analyticsCode: ""
  });

  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'social' | 'navigation' | 'advanced'>('general');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // In a real app, this would save to an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Settings saved successfully!');
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all settings to default values?")) {
      // Reset to default values
      setSettings({
        siteTitle: "Angela Lamprianidou",
        siteDescription: "Choreographer, Performer & Teacher - Contemporary Dance and Movement Art",
        siteKeywords: "dance, choreography, contemporary dance, performance art, movement, Angela Lamprianidou",
        contactEmail: "angela@lamprianidou.com",
        socialLinks: {
          vimeo: "https://vimeo.com/lamprianidou",
          instagram: "",
          facebook: "",
          twitter: ""
        },
        navigation: {
          showGallery: true,
          showWorkshop: true,
          showArchive: true
        },
        footerText: "All rights reserved, including videos",
        maintenanceMode: false,
        analyticsCode: ""
      });
    }
  };

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
              <h1 className="text-2xl font-bold">Site Settings</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('general')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'general' 
                  ? 'border-green-400 text-green-400' 
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'social' 
                  ? 'border-green-400 text-green-400' 
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Social Links
            </button>
            <button
              onClick={() => setActiveTab('navigation')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'navigation' 
                  ? 'border-green-400 text-green-400' 
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Navigation
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'advanced' 
                  ? 'border-green-400 text-green-400' 
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Advanced
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <form onSubmit={handleSave} className="space-y-8">
          {activeTab === 'general' && (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h2 className="text-xl font-bold mb-6">General Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Site Title
                  </label>
                  <input
                    type="text"
                    value={settings.siteTitle}
                    onChange={(e) => setSettings({...settings, siteTitle: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Site Description
                  </label>
                  <textarea
                    value={settings.siteDescription}
                    onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-24"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={settings.siteKeywords}
                    onChange={(e) => setSettings({...settings, siteKeywords: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="dance, choreography, performance art"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Footer Text
                  </label>
                  <input
                    type="text"
                    value={settings.footerText}
                    onChange={(e) => setSettings({...settings, footerText: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h2 className="text-xl font-bold mb-6">Social Media Links</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Vimeo URL
                  </label>
                  <input
                    type="url"
                    value={settings.socialLinks.vimeo}
                    onChange={(e) => setSettings({
                      ...settings, 
                      socialLinks: {...settings.socialLinks, vimeo: e.target.value}
                    })}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="https://vimeo.com/username"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Instagram URL
                  </label>
                  <input
                    type="url"
                    value={settings.socialLinks.instagram}
                    onChange={(e) => setSettings({
                      ...settings, 
                      socialLinks: {...settings.socialLinks, instagram: e.target.value}
                    })}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="https://instagram.com/username"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Facebook URL
                  </label>
                  <input
                    type="url"
                    value={settings.socialLinks.facebook}
                    onChange={(e) => setSettings({
                      ...settings, 
                      socialLinks: {...settings.socialLinks, facebook: e.target.value}
                    })}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="https://facebook.com/username"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Twitter URL
                  </label>
                  <input
                    type="url"
                    value={settings.socialLinks.twitter}
                    onChange={(e) => setSettings({
                      ...settings, 
                      socialLinks: {...settings.socialLinks, twitter: e.target.value}
                    })}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    placeholder="https://twitter.com/username"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'navigation' && (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h2 className="text-xl font-bold mb-6">Navigation Settings</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showGallery"
                    checked={settings.navigation.showGallery}
                    onChange={(e) => setSettings({
                      ...settings,
                      navigation: {...settings.navigation, showGallery: e.target.checked}
                    })}
                    className="mr-3"
                  />
                  <label htmlFor="showGallery" className="text-white">
                    Show Gallery in navigation
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showWorkshop"
                    checked={settings.navigation.showWorkshop}
                    onChange={(e) => setSettings({
                      ...settings,
                      navigation: {...settings.navigation, showWorkshop: e.target.checked}
                    })}
                    className="mr-3"
                  />
                  <label htmlFor="showWorkshop" className="text-white">
                    Show Workshop in navigation
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showArchive"
                    checked={settings.navigation.showArchive}
                    onChange={(e) => setSettings({
                      ...settings,
                      navigation: {...settings.navigation, showArchive: e.target.checked}
                    })}
                    className="mr-3"
                  />
                  <label htmlFor="showArchive" className="text-white">
                    Show Archive in navigation
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'advanced' && (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h2 className="text-xl font-bold mb-6">Advanced Settings</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})}
                    className="mr-3"
                  />
                  <label htmlFor="maintenanceMode" className="text-white">
                    Maintenance Mode (temporarily disable site for visitors)
                  </label>
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Analytics Code (Google Analytics, etc.)
                  </label>
                  <textarea
                    value={settings.analyticsCode}
                    onChange={(e) => setSettings({...settings, analyticsCode: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-32 font-mono text-xs"
                    placeholder="<!-- Google Analytics code here -->"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Save/Reset Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded transition-colors"
            >
              Reset to Defaults
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-6 py-2 rounded transition-colors"
            >
              {isSaving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </form>

        {/* Current Settings Preview */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
          <h3 className="text-lg font-bold mb-4">Current Settings Preview</h3>
          <div className="bg-white/5 p-4 rounded text-sm font-mono">
            <pre className="text-white/80 whitespace-pre-wrap">
              {JSON.stringify(settings, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}