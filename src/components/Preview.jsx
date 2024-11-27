const Preview = ({ profile, links }) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3">
      <div className="text-center">
        {profile?.avatar && (
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
          />
        )}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{profile?.name || 'Your Name'}</h2>
        <p className="text-lg text-gray-600 mb-8">{profile?.bio || 'Your Bio'}</p>
      </div>

      <div className="space-y-4">
        {links?.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 rounded-lg bg-white border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all duration-200 text-center text-gray-800 text-lg"
          >
            {link.title}
          </a>
        ))}
        {(!links || links.length === 0) && (
          <div className="text-center text-gray-500 py-8 text-lg">
            No links added yet
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
