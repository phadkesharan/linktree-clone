import React from 'react';

const SocialLinksManager = ({ links, onAddLink, onRemoveLink, onUpdateLink }) => {
  const handleAddLink = () => {
    onAddLink({ title: '', url: '' });
  };

  const handleUpdateLink = (index, field, value) => {
    const updatedLink = {
      ...links[index],
      [field]: value
    };
    onUpdateLink(index, updatedLink);
  };

  return (
    <div className="space-y-6">
      {/* Links List */}
      <div className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-grow space-y-3">
              <input
                type="text"
                value={link.title || ''}
                onChange={(e) => handleUpdateLink(index, 'title', e.target.value)}
                placeholder="Link Title"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-900"
              />
              <input
                type="url"
                value={link.url || ''}
                onChange={(e) => handleUpdateLink(index, 'url', e.target.value)}
                placeholder="URL (https://...)"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-900"
              />
            </div>
            <button
              onClick={() => onRemoveLink(index)}
              className="self-center p-2 text-gray-400 hover:text-red-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Add Link Button */}
      <button
        onClick={handleAddLink}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Add New Link
      </button>

      {/* Help Text */}
      {links.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          <p>No links added yet. Click the button above to add your first link!</p>
        </div>
      )}
    </div>
  );
};

export default SocialLinksManager;
