const UserProfileForm = ({ profile, onUpdateProfile }) => {
  return (
    <div className="space-y-6">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Display Name
        </label>
        <input
          type="text"
          id="name"
          value={profile.name || ''}
          onChange={(e) => onUpdateProfile('name', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-900"
          placeholder="Enter your name"
        />
      </div>

      {/* Bio Input */}
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Bio
        </label>
        <textarea
          id="bio"
          value={profile.bio || ''}
          onChange={(e) => onUpdateProfile('bio', e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-900"
          placeholder="Tell your story..."
        />
      </div>

      {/* Avatar URL Input */}
      <div>
        <label htmlFor="avatarUrl" className="block text-sm font-medium text-gray-700">
          Avatar URL
        </label>
        <input
          type="url"
          id="avatarUrl"
          value={profile.avatarUrl || ''}
          onChange={(e) => onUpdateProfile('avatarUrl', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-900"
          placeholder="https://example.com/your-avatar.jpg"
        />
        {profile.avatarUrl && (
          <div className="mt-2">
            <img
              src={profile.avatarUrl}
              alt="Avatar preview"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              onError={(e) => {
                e.target.src = ''; // Clear the broken image
                onUpdateProfile('avatarUrl', ''); // Clear the URL from state
              }}
            />
          </div>
        )}
      </div>

      <div className="text-sm text-gray-500">
        All changes are automatically saved and will appear in the preview.
      </div>
    </div>
  );
};

export default UserProfileForm;
