"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface ContactInfo {
  name: string;
  title: string;
  website: string;
  phone: string;
  email: string;
  address: string;
  vimeo: string;
  additionalInfo: string;
}

interface BioInfo {
  biography: string;
  education: string;
  achievements: string;
  currentWork: string;
  additionalInfo: string;
}

export default function ContactBioManagementPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "Angela Lamprianidou",
    title: "Choreographer & Performer & Teaching",
    website: "https://www.lamprianidou.com",
    phone: "+4917663459337",
    email: "angela@lamprianidou.com",
    address: "Wartburgstrasse 47, Berlin",
    vimeo: "https://vimeo.com/lamprianidou",
    additionalInfo: "Videos will be sent on demand"
  });

  const [bioInfo, setBioInfo] = useState<BioInfo>({
    biography: `Angela Lamprianidou is a Greek choreographer, grown up in Essen
-Germany and later emigrated to Barcelona.
In Barcelona, she studied 4 years, choreography and new techniques 
of interpretation at the "Institut del Teatre Barcelona", in Essen 
dance at "Luis Mijares dance Studio", Arnaldo Alvarez (Pina Bausch Company)
and Ballett with Henrike Guha in Fürth, in Erlangen Dentistry at the 
"Friedrich Alexander University Erlangen-Nürnberg". 

This melange de trois  makes her pieces like conspiracies, 
with a looping logic and a certain tenaciousness, when 
it comes to understanding/appreciating pure form and energy.


Angela lived in Barcelona for 13 years. Her teachers recognised very 
quickly her exceptional ability to focus on staging and choreographing. 
She has received several honours for composition, staging and dance 
history, and has won diverse awards, such as"danse mes a prop 
barcelona, no ballet Ludwigshafen among others. But when she realized 
that competitions are for horses not artists, she stopped competing.. She 
has collaborated with theaters such as the"mercat de les flors,"antic 
teatre,""national teatre of catalonià", and also underground spaces and 
faces.


She presently lives also in Berlin and is a freelancer choreographer –teacher – Doctor 
with a transcendental kidney. She specialises in temporomandibular joint problems. 
https://www.you-are-the-point.de

She is a qualified Yoga teacher and Yoga Coach, certified by 
the "Shrivivek Center of Barcelona".
During her dance education, she studied Klein technique with Barbara Mahler 
and has participated in several workshops of BMC and somatic healing movement.

In 2019 she founded Homεmotion, a place to
expand and create new Visions in Athens Center. 
She is the artistic director of this Artist residency.


 For more information please contact her at angelabrillante@gmail.com`,
    education: `Institut del Teatre Barcelona - Choreography and new techniques of interpretation (4 years)
Luis Mijares dance Studio, Essen - Dance
Friedrich Alexander University Erlangen-Nürnberg - Dentistry
Shrivivek Center of Barcelona - Yoga teacher and Yoga Coach certification`,
    achievements: `Several honours for composition, staging and dance history
Winner of diverse awards including "danse mes a prop barcelona", "no ballet Ludwigshafen"
Collaborations with theaters: "mercat de les flors", "antic teatre", "national teatre of catalonià"
Founded Homεmotion in 2019 - Artist residency in Athens Center`,
    currentWork: `Freelancer choreographer, teacher, and Doctor specializing in temporomandibular joint problems
Artistic director of Homεmotion artist residency
Yoga teacher and coach
Website: https://www.you-are-the-point.de`,
    additionalInfo: `Specializes in Klein technique (studied with Barbara Mahler)
Participated in several workshops of BMC and somatic healing movement
Contact: angelabrillante@gmail.com`
  });

  const [activeTab, setActiveTab] = useState<'contact' | 'bio'>('contact');
  const [isSaving, setIsSaving] = useState(false);

  const handleContactSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // In a real app, this would save to an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Contact information saved successfully!');
  };

  const handleBioSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // In a real app, this would save to an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Biography information saved successfully!');
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
              <h1 className="text-2xl font-bold">Contact & Bio Management</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'contact' 
                  ? 'border-green-400 text-green-400' 
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Contact Information
            </button>
            <button
              onClick={() => setActiveTab('bio')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'bio' 
                  ? 'border-green-400 text-green-400' 
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Biography
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'contact' && (
          <form onSubmit={handleContactSave} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={contactInfo.title}
                    onChange={(e) => setContactInfo({...contactInfo, title: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={contactInfo.website}
                    onChange={(e) => setContactInfo({...contactInfo, website: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Vimeo
                  </label>
                  <input
                    type="url"
                    value={contactInfo.vimeo}
                    onChange={(e) => setContactInfo({...contactInfo, vimeo: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Additional Info
                  </label>
                  <input
                    type="text"
                    value={contactInfo.additionalInfo}
                    onChange={(e) => setContactInfo({...contactInfo, additionalInfo: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-6 py-2 rounded transition-colors"
                >
                  {isSaving ? 'Saving...' : 'Save Contact Information'}
                </button>
              </div>
            </div>
          </form>
        )}

        {activeTab === 'bio' && (
          <form onSubmit={handleBioSave} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h2 className="text-xl font-bold mb-6">Biography</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Main Biography
                  </label>
                  <textarea
                    value={bioInfo.biography}
                    onChange={(e) => setBioInfo({...bioInfo, biography: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-64"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Education
                  </label>
                  <textarea
                    value={bioInfo.education}
                    onChange={(e) => setBioInfo({...bioInfo, education: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-32"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Achievements & Awards
                  </label>
                  <textarea
                    value={bioInfo.achievements}
                    onChange={(e) => setBioInfo({...bioInfo, achievements: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-32"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Current Work
                  </label>
                  <textarea
                    value={bioInfo.currentWork}
                    onChange={(e) => setBioInfo({...bioInfo, currentWork: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-32"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Additional Information
                  </label>
                  <textarea
                    value={bioInfo.additionalInfo}
                    onChange={(e) => setBioInfo({...bioInfo, additionalInfo: e.target.value})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-green-400 h-32"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-6 py-2 rounded transition-colors"
                >
                  {isSaving ? 'Saving...' : 'Save Biography'}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Preview Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
          <h3 className="text-lg font-bold mb-4">Preview</h3>
          <div className="bg-white/5 p-4 rounded text-sm">
            {activeTab === 'contact' ? (
              <div>
                <h4 className="font-bold text-green-400 mb-2">{contactInfo.name}</h4>
                <p className="text-white/80 mb-2">{contactInfo.title}</p>
                <p className="text-white/70 text-xs">
                  Website: {contactInfo.website}<br/>
                  Phone: {contactInfo.phone}<br/>
                  Email: {contactInfo.email}<br/>
                  Address: {contactInfo.address}
                </p>
              </div>
            ) : (
              <div>
                <h4 className="font-bold text-green-400 mb-2">Biography Preview</h4>
                <p className="text-white/80 text-xs whitespace-pre-line">
                  {bioInfo.biography.substring(0, 200)}...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}