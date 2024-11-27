import { useState } from 'react';
import UserProfileForm from './components/UserProfileForm';
import SocialLinksManager from './components/SocialLinksManager';
import Preview from './components/Preview';

function App() {
  const [profile, setProfile] = useState(null);
  const [links, setLinks] = useState([]);
  const [activeTab, setActiveTab] = useState('profile');

  const handleProfileSave = (profileData) => {
    setProfile(profileData);
    setActiveTab('links');
  };

  const handleLinksSave = (linksData) => {
    setLinks(linksData);
  };

  const renderEditor = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfileForm onSave={handleProfileSave} />;
      case 'links':
        return <SocialLinksManager onSave={handleLinksSave} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-screen overflow-x-hidden">
      <nav className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-2">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">LinkTree Clone</h1>
            </div>
            <div className="flex space-x-4 items-center">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-2 rounded-lg ${
                  activeTab === 'profile'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('links')}
                className={`px-6 py-2 rounded-lg ${
                  activeTab === 'links'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Links
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="w-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-9/12">
          <div className="bg-white m-1">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Live Preview
              </h2>
              <div className="bg-gray-50 p-4 min-h-[700px] flex items-center justify-center">
                <div className="w-[420px]">
                  <Preview profile={profile} links={links} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/12">
          <div className="bg-white m-1">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {activeTab === 'profile' ? 'Edit Profile' : 'Manage Links'}
              </h2>
              {renderEditor()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
