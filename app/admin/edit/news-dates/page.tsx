"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PlusIcon, TrashIcon, DocumentArrowDownIcon, EyeIcon, PencilIcon } from "@heroicons/react/24/outline";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  details: string;
  link?: string;
  isActive: boolean;
}

interface RegularSession {
  id: string;
  title: string;
  time: string;
  location: string;
  link: string;
  isActive: boolean;
}

interface InternationalSession {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
}

interface ContactInfo {
  email: string;
  description: string;
}

interface NewsDatesData {
  id: string;
  title: string;
  description: string;
  regularSessions: RegularSession[];
  upcomingWorkshops: NewsItem[];
  internationalSessions: InternationalSession[];
  contact: ContactInfo;
  lastModified: string;
}

export default function NewsDatesEditPage() {
  const router = useRouter();
  
  const [pageData, setPageData] = useState<NewsDatesData>({
    id: "news-dates",
    title: "News & Dates",
    description: "Stay updated with Angela's latest performances, workshops, and events",
    regularSessions: [],
    upcomingWorkshops: [],
    internationalSessions: [],
    contact: {
      email: "angelabrillante@gmail.com",
      description: "For more information and bookings, please contact:"
    },
    lastModified: new Date().toISOString()
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);

  // Load page data from storage
  useEffect(() => {
    const existingData = localStorage.getItem('cms-news-dates');
    if (existingData) {
      setPageData(JSON.parse(existingData));
    } else {
      // Create default data based on current page content
      setPageData({
        id: "news-dates",
        title: "News & Dates",
        description: "Stay updated with Angela's latest performances, workshops, and events",
        regularSessions: [
          {
            id: "1",
            title: "Every Monday 12-17:00h 1:1 Sessions",
            time: "12-17:00h",
            location: "Holzmarkt 25, at IKSK",
            link: "https://www.iksk-berlin.de/jawrelease",
            isActive: true
          },
          {
            id: "2",
            title: "Dance expression Mondays 10-11:30",
            time: "10-11:30",
            location: "IKSK holzmarkt 25",
            link: "https://www.iksk-berlin.de/dance-improv-angela",
            isActive: true
          }
        ],
        upcomingWorkshops: [
          {
            id: "1",
            title: "Jaw and Body Release",
            date: "2025-10-09",
            location: "Holzmarkt 25 at IKSK",
            description: "Two-day workshop focusing on jaw and body release techniques",
            details: "9.10.2025 16-18:00h and 12.10.25 14-17:00h",
            link: "https://www.iksk-berlin.de/jaw-release-group",
            isActive: true
          },
          {
            id: "2",
            title: "Flirt In Experience",
            date: "2025-10-18",
            location: "IKSK Holzmarkt 25",
            description: "An evening experience exploring connection and movement",
            details: "18.10.25 20-23:00 pm",
            link: "https://www.iksk-berlin.de/flirt-in",
            isActive: true
          },
          {
            id: "3",
            title: "Tanz Hin Tanz her Participative Performance",
            date: "2025-10-26",
            location: "Willy Brand Saal, John F Kennedy Platz Rathaus Schöneberg",
            description: "Participative performance experience",
            details: "26.10.2025 at Willy Brand Saal, 18-19:30 pm",
            link: "",
            isActive: true
          }
        ],
        internationalSessions: [
          {
            id: "1",
            title: "November and December",
            description: "Online Sessions and Present Sessions and Workshops in Athens Greece. Please be open to reach out for more Information.",
            isActive: true
          }
        ],
        contact: {
          email: "angelabrillante@gmail.com",
          description: "For more information and bookings, please contact:"
        },
        lastModified: new Date().toISOString()
      });
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      localStorage.setItem('cms-news-dates', JSON.stringify(pageData));
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSaving(false);
      alert("News & Dates page saved successfully!");
    } catch (error) {
      setIsSaving(false);
      alert("Error saving page. Please try again.");
    }
  };

  const handleEdit = (field: string) => {
    setIsEditing(field);
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
  };

  const handleFieldChange = (field: keyof NewsDatesData, value: any) => {
    setPageData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNewsItemChange = (index: number, field: keyof NewsItem, value: any) => {
    setPageData(prev => ({
      ...prev,
      upcomingWorkshops: prev.upcomingWorkshops.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleRegularSessionChange = (index: number, field: keyof RegularSession, value: any) => {
    setPageData(prev => ({
      ...prev,
      regularSessions: prev.regularSessions.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleInternationalSessionChange = (index: number, field: keyof InternationalSession, value: any) => {
    setPageData(prev => ({
      ...prev,
      internationalSessions: prev.internationalSessions.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleContactChange = (field: keyof ContactInfo, value: any) => {
    setPageData(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value }
    }));
  };

  const addNewsItem = () => {
    const newItem: NewsItem = {
      id: Date.now().toString(),
      title: "",
      date: "",
      location: "",
      description: "",
      details: "",
      link: "",
      isActive: true
    };
    
    setPageData(prev => ({
      ...prev,
      upcomingWorkshops: [...prev.upcomingWorkshops, newItem]
    }));
  };

  const addRegularSession = () => {
    const newSession: RegularSession = {
      id: Date.now().toString(),
      title: "",
      time: "",
      location: "",
      link: "",
      isActive: true
    };
    
    setPageData(prev => ({
      ...prev,
      regularSessions: [...prev.regularSessions, newSession]
    }));
  };

  const addInternationalSession = () => {
    const newSession: InternationalSession = {
      id: Date.now().toString(),
      title: "",
      description: "",
      isActive: true
    };
    
    setPageData(prev => ({
      ...prev,
      internationalSessions: [...prev.internationalSessions, newSession]
    }));
  };

  const removeNewsItem = (index: number) => {
    setPageData(prev => ({
      ...prev,
      upcomingWorkshops: prev.upcomingWorkshops.filter((_, i) => i !== index)
    }));
  };

  const removeRegularSession = (index: number) => {
    setPageData(prev => ({
      ...prev,
      regularSessions: prev.regularSessions.filter((_, i) => i !== index)
    }));
  };

  const removeInternationalSession = (index: number) => {
    setPageData(prev => ({
      ...prev,
      internationalSessions: prev.internationalSessions.filter((_, i) => i !== index)
    }));
  };

  const toggleNewsItemActive = (index: number) => {
    setPageData(prev => ({
      ...prev,
      upcomingWorkshops: prev.upcomingWorkshops.map((item, i) => 
        i === index ? { ...item, isActive: !item.isActive } : item
      )
    }));
  };

  const toggleRegularSessionActive = (index: number) => {
    setPageData(prev => ({
      ...prev,
      regularSessions: prev.regularSessions.map((item, i) => 
        i === index ? { ...item, isActive: !item.isActive } : item
      )
    }));
  };

  const toggleInternationalSessionActive = (index: number) => {
    setPageData(prev => ({
      ...prev,
      internationalSessions: prev.internationalSessions.map((item, i) => 
        i === index ? { ...item, isActive: !item.isActive } : item
      )
    }));
  };

  return (
    <div className="min-h-screen bg-white text-black website-font angela-typography">
      {/* Header */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-black">News & Dates Management</h1>
              <p className="text-black font-medium">Manage news items, events, and announcements</p>
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
            <h2 className="text-3xl font-bold mb-6 text-black">{pageData.title}</h2>
            <p className="text-lg mb-8 text-gray-700">{pageData.description}</p>
            
            {/* Regular Sessions */}
            {pageData.regularSessions.filter(item => item.isActive).length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-black">Regular Sessions</h3>
                <div className="space-y-4">
                  {pageData.regularSessions.filter(item => item.isActive).map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-black mb-2">{item.title}</h4>
                      <p className="text-gray-700 mb-2">{item.location}</p>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          {item.link}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Workshops */}
            {pageData.upcomingWorkshops.filter(item => item.isActive).length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-black">Upcoming Workshops</h3>
                <div className="space-y-4">
                  {pageData.upcomingWorkshops.filter(item => item.isActive).map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-black mb-2">{item.title}</h4>
                      <p className="text-gray-700 mb-2">{item.date} • {item.location}</p>
                      {item.details && <p className="text-gray-700 mb-2">{item.details}</p>}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          {item.link}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* International Sessions */}
            {pageData.internationalSessions.filter(item => item.isActive).length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-black">International Sessions</h3>
                <div className="space-y-4">
                  {pageData.internationalSessions.filter(item => item.isActive).map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-black mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Contact</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">{pageData.contact.description}</p>
                <a href={`mailto:${pageData.contact.email}`} className="text-blue-600 hover:text-blue-800 font-bold">
                  {pageData.contact.email}
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Edit Mode */
          <div className="space-y-8">
            {/* Page Title & Description */}
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-black">Page Title & Description</h2>
                <button
                  onClick={() => handleEdit('title')}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  <PencilIcon className="w-5 h-5" />
                </button>
              </div>
              {isEditing === 'title' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">Page Title</label>
                    <input
                      type="text"
                      value={pageData.title}
                      onChange={(e) => handleFieldChange('title', e.target.value)}
                      className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                      placeholder="Enter page title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">Page Description</label>
                    <textarea
                      value={pageData.description}
                      onChange={(e) => handleFieldChange('description', e.target.value)}
                      className="w-full h-24 px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                      placeholder="Enter page description"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-600 hover:bg-gray-700 !text-white px-6 py-3 transition-all duration-200 border-2 border-gray-600 font-bold rounded-none hover:shadow-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">{pageData.title}</h3>
                  <p className="text-gray-700">{pageData.description}</p>
                </div>
              )}
            </div>

            {/* Regular Sessions Management */}
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-black">Regular Sessions</h2>
                <button
                  onClick={addRegularSession}
                  className="bg-black hover:bg-gray-800 !text-white px-6 py-3 transition-all duration-200 flex items-center space-x-2 border-2 border-black font-bold rounded-none hover:shadow-lg [&>*]:!text-white"
                >
                  <PlusIcon className="w-4 h-4" />
                  <span>Add Regular Session</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {pageData.regularSessions.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 border-2 border-black">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-black">Regular Session #{index + 1}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => toggleRegularSessionActive(index)}
                          className={`px-4 py-2 text-sm font-bold transition-all duration-200 rounded-none hover:shadow-md ${
                            item.isActive 
                              ? 'bg-gray-700 hover:bg-gray-800 !text-white border border-gray-700' 
                              : 'bg-gray-500 hover:bg-gray-600 !text-white border border-gray-500'
                          }`}
                        >
                          {item.isActive ? 'Active' : 'Inactive'}
                        </button>
                        <button
                          onClick={() => removeRegularSession(index)}
                          className="bg-gray-800 hover:bg-gray-900 !text-white px-4 py-2 text-sm transition-all duration-200 flex items-center space-x-1 border border-gray-800 font-bold rounded-none hover:shadow-md [&>*]:!text-white"
                        >
                          <TrashIcon className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Title</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleRegularSessionChange(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Session title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Time</label>
                        <input
                          type="text"
                          value={item.time}
                          onChange={(e) => handleRegularSessionChange(index, 'time', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="e.g., 12-17:00h"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Location</label>
                        <input
                          type="text"
                          value={item.location}
                          onChange={(e) => handleRegularSessionChange(index, 'location', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Location"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Link</label>
                        <input
                          type="url"
                          value={item.link}
                          onChange={(e) => handleRegularSessionChange(index, 'link', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Workshops Management */}
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-black">Upcoming Workshops</h2>
                <button
                  onClick={addNewsItem}
                  className="bg-black hover:bg-gray-800 !text-white px-6 py-3 transition-all duration-200 flex items-center space-x-2 border-2 border-black font-bold rounded-none hover:shadow-lg [&>*]:!text-white"
                >
                  <PlusIcon className="w-4 h-4" />
                  <span>Add Workshop</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {pageData.upcomingWorkshops.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 border-2 border-black">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-black">Workshop #{index + 1}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => toggleNewsItemActive(index)}
                          className={`px-4 py-2 text-sm font-bold transition-all duration-200 rounded-none hover:shadow-md ${
                            item.isActive 
                              ? 'bg-gray-700 hover:bg-gray-800 !text-white border border-gray-700' 
                              : 'bg-gray-500 hover:bg-gray-600 !text-white border border-gray-500'
                          }`}
                        >
                          {item.isActive ? 'Active' : 'Inactive'}
                        </button>
                        <button
                          onClick={() => removeNewsItem(index)}
                          className="bg-gray-800 hover:bg-gray-900 !text-white px-4 py-2 text-sm transition-all duration-200 flex items-center space-x-1 border border-gray-800 font-bold rounded-none hover:shadow-md [&>*]:!text-white"
                        >
                          <TrashIcon className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Title</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleNewsItemChange(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Workshop title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Date</label>
                        <input
                          type="date"
                          value={item.date}
                          onChange={(e) => handleNewsItemChange(index, 'date', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black focus:outline-none focus:border-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Location</label>
                        <input
                          type="text"
                          value={item.location}
                          onChange={(e) => handleNewsItemChange(index, 'location', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Location"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Link</label>
                        <input
                          type="url"
                          value={item.link || ''}
                          onChange={(e) => handleNewsItemChange(index, 'link', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <label className="block text-sm font-bold mb-2 text-black">Description</label>
                      <textarea
                        value={item.description}
                        onChange={(e) => handleNewsItemChange(index, 'description', e.target.value)}
                        className="w-full h-20 px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                        placeholder="Workshop description"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <label className="block text-sm font-bold mb-2 text-black">Details</label>
                      <textarea
                        value={item.details}
                        onChange={(e) => handleNewsItemChange(index, 'details', e.target.value)}
                        className="w-full h-24 px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                        placeholder="Time details, requirements, etc."
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* International Sessions Management */}
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-black">International Sessions</h2>
                <button
                  onClick={addInternationalSession}
                  className="bg-black hover:bg-gray-800 !text-white px-6 py-3 transition-all duration-200 flex items-center space-x-2 border-2 border-black font-bold rounded-none hover:shadow-lg [&>*]:!text-white"
                >
                  <PlusIcon className="w-4 h-4" />
                  <span>Add International Session</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {pageData.internationalSessions.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 border-2 border-black">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-black">International Session #{index + 1}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => toggleInternationalSessionActive(index)}
                          className={`px-4 py-2 text-sm font-bold transition-all duration-200 rounded-none hover:shadow-md ${
                            item.isActive 
                              ? 'bg-gray-700 hover:bg-gray-800 !text-white border border-gray-700' 
                              : 'bg-gray-500 hover:bg-gray-600 !text-white border border-gray-500'
                          }`}
                        >
                          {item.isActive ? 'Active' : 'Inactive'}
                        </button>
                        <button
                          onClick={() => removeInternationalSession(index)}
                          className="bg-gray-800 hover:bg-gray-900 !text-white px-4 py-2 text-sm transition-all duration-200 flex items-center space-x-1 border border-gray-800 font-bold rounded-none hover:shadow-md [&>*]:!text-white"
                        >
                          <TrashIcon className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Title</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleInternationalSessionChange(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Session title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-black">Description</label>
                        <textarea
                          value={item.description}
                          onChange={(e) => handleInternationalSessionChange(index, 'description', e.target.value)}
                          className="w-full h-24 px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                          placeholder="Session description"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Management */}
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-black">Contact Information</h2>
                <button
                  onClick={() => handleEdit('contact')}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  <PencilIcon className="w-5 h-5" />
                </button>
              </div>
              {isEditing === 'contact' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">Contact Description</label>
                    <textarea
                      value={pageData.contact.description}
                      onChange={(e) => handleContactChange('description', e.target.value)}
                      className="w-full h-20 px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                      placeholder="Contact description"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">Email</label>
                    <input
                      type="email"
                      value={pageData.contact.email}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      className="w-full px-3 py-2 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
                      placeholder="contact@example.com"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-600 hover:bg-gray-700 !text-white px-6 py-3 transition-all duration-200 border-2 border-gray-600 font-bold rounded-none hover:shadow-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 mb-2">{pageData.contact.description}</p>
                  <a href={`mailto:${pageData.contact.email}`} className="text-blue-600 hover:text-blue-800 font-bold">
                    {pageData.contact.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
