import { useState } from 'react';

const SocialLinksManager = ({ onSave }) => {
  const [links, setLinks] = useState([{ title: '', url: '' }]);

  const handleAddLink = () => {
    setLinks([...links, { title: '', url: '' }]);
  };

  const handleRemoveLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(links.filter(link => link.title && link.url));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="w-full space-y-4">
        {links.map((link, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors duration-200 w-full"
          >
            <div className="space-y-3 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Link Title
                </label>
                <input
                  type="text"
                  value={link.title}
                  onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="GitHub"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  URL
                </label>
                <input
                  type="url"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="https://github.com/yourusername"
                  required
                />
              </div>
            </div>
            {links.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveLink(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
      
      <div className="space-y-4 w-full">
        <button
          type="button"
          onClick={handleAddLink}
          className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-indigo-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          Add New Link
        </button>
        
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Links
        </button>
      </div>
    </form>
  );
};

export default SocialLinksManager;
