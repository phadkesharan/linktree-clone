import { useState } from 'react';
import Preview from './components/Preview';
import UserProfileForm from './components/UserProfileForm';
import SocialLinksManager from './components/SocialLinksManager';

function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    avatarUrl: ''
  });
  const [links, setLinks] = useState([]);

  const handleProfileUpdate = (field, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value
    }));
  };

  const handleAddLink = (newLink) => {
    setLinks(prevLinks => [...prevLinks, newLink]);
  };

  const handleRemoveLink = (index) => {
    setLinks(prevLinks => prevLinks.filter((_, i) => i !== index));
  };

  const handleUpdateLink = (index, updatedLink) => {
    setLinks(prevLinks => {
      const newLinks = [...prevLinks];
      newLinks[index] = updatedLink;
      return newLinks;
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="flex h-screen w-full">
        {/* Editor Section (75%) */}
        <div className="w-3/4 h-full p-8 overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">LinkTree Clone</h1>

            {/* Tabs */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === 'profile'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-white text-purple-500 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('links')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === 'links'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-white text-purple-500 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                Links
              </button>
            </div>

            {/* Active Tab Content */}
            {activeTab === 'profile' ? (
              <UserProfileForm 
                profile={profile} 
                onUpdateProfile={handleProfileUpdate}
              />
            ) : (
              <SocialLinksManager
                links={links}
                onAddLink={handleAddLink}
                onRemoveLink={handleRemoveLink}
                onUpdateLink={handleUpdateLink}
              />
            )}
          </div>
        </div>

        {/* Preview Section (25%) */}
        <div className="w-1/4 h-full border-l border-gray-200 overflow-y-auto">
          <Preview profile={profile} links={links} />
        </div>
      </div>
    </div>
  );
}

export default App;
