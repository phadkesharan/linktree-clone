import LinkCard from './LinkCard';

const Preview = ({ profile, links }) => {
  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8">
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          {profile?.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white shadow-lg object-cover"
              onError={(e) => {
                e.target.src = ''; // Clear the broken image
              }}
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold border-2 border-white shadow-lg">
              {profile?.name ? profile.name[0].toUpperCase() : '?'}
            </div>
          )}
          <h1 className="text-2xl font-bold text-white mb-2">
            {profile?.name || 'Your Name'}
          </h1>
          <p className="text-gray-100">
            {profile?.bio || 'Add a bio to tell your story'}
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links && links.length > 0 ? (
            links.map((link, index) => (
              <LinkCard key={index} link={link} />
            ))
          ) : (
            <div className="text-center text-white">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <p className="text-lg">No links added yet</p>
              <p className="text-sm opacity-75">Add some links to get started!</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-white text-sm opacity-75">
          Made with ❤️ using React
        </div>
      </div>
    </div>
  );
};

export default Preview;
