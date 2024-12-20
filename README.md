# LinkTree Clone

A modern, responsive link-sharing platform built with React and Tailwind CSS. Create your personalized link-sharing page with a clean, mobile-friendly interface.

## 🌐 Live Demo

Visit the live demo at: [https://phadkesharan.github.io/linktree-clone](https://phadkesharan.github.io/linktree-clone)

## 🚀 Features

- **User Profile Management**
  - Customizable name and bio
  - Avatar URL support with live preview
  - Real-time form validation

- **Social Links Management**
  - Add unlimited social media links
  - Dynamic link addition and removal
  - Title and URL for each link
  - Input validation

- **Live Preview**
  - Real-time preview of your link page
  - Mobile-like preview interface
  - Responsive design

## 💻 Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Form Handling**: React Hooks
- **Additional Plugins**: @tailwindcss/forms
- **Deployment**: GitHub Pages

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/phadkesharan/linktree-clone.git
   cd linktree-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 Deployment

The project is configured for GitHub Pages deployment. To deploy your own version:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://your-username.github.io/linktree-clone"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

Your site will be available at `https://your-username.github.io/linktree-clone`

## 📦 Project Structure

```
linktree-clone/
├── src/
│   ├── components/
│   │   ├── UserProfileForm.jsx    # Profile editing component
│   │   ├── SocialLinksManager.jsx # Links management component
│   │   └── Preview.jsx            # Live preview component
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Global styles
│   └── main.jsx                   # Application entry point
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Design Features

- Desktop-first layout with side-by-side editor and preview
- Full-screen width utilization
- Responsive grid system
- Clean, modern UI design
- Mobile-friendly interface

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS with the following configuration:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

## 🚀 Usage

1. **Profile Setup**
   - Click on the "Profile" tab
   - Enter your name, bio, and avatar URL
   - See real-time preview on the right

2. **Managing Links**
   - Switch to the "Links" tab
   - Add your social media links
   - Each link requires a title and URL
   - Remove links using the delete button
   - Preview updates in real-time

## 🔜 Future Enhancements

- Link reordering functionality
- Custom theme support
- Export/share feature
- Backend integration for persistent storage
- Additional customization options
- Social media icons library

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/phadkesharan/linktree-clone/issues).

## 👨‍💻 Author

Phadke Sharan
- GitHub: [@phadkesharan](https://github.com/phadkesharan)

## 🙏 Acknowledgments

- Inspired by LinkTree
- Built with React and Tailwind CSS
- Special thanks to the open-source community
