import { useState } from 'react';

const UserProfileForm = ({ onSave }) => {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    avatar: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(profile);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            id="bio"
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            rows="3"
            placeholder="Tell us about yourself"
          />
        </div>
        <div>
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
            Avatar URL
          </label>
          <input
            type="url"
            id="avatar"
            value={profile.avatar}
            onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="https://example.com/avatar.jpg"
          />
          {profile.avatar && (
            <div className="mt-2">
              <img
                src={profile.avatar}
                alt="Avatar preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Continue to Links
        </button>
      </div>
    </form>
  );
};

export default UserProfileForm;
