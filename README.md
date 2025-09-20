# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. Features a beautiful, animated design with dark/light theme support and smooth scrolling navigation.

## ✨ Features

- **Modern Design**: Clean, professional layout with animated background elements
- **Theme Support**: Light, dark, and system theme modes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Sticky navigation with active section highlighting
- **Data-Driven**: Content loaded from YAML configuration for easy updates
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🚀 Tech Stack

- **Frontend**: React 19, Vite 6
- **Styling**: TailwindCSS 4, PostCSS
- **Icons**: Lucide React
- **Markdown**: Marked (for content rendering)
- **Data**: YAML configuration
- **Build Tool**: Vite with SWC for fast compilation

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

## 📁 Project Structure

```
website/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   └── Home.jsx       # Main portfolio component
│   ├── assets/            # Images and static files
│   ├── utils/             # Utility functions
│   ├── dataset.yaml       # Portfolio content data
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # TailwindCSS configuration
└── README.md             # This file
```

## 📝 Configuration

The portfolio content is managed through the `src/dataset.yaml` file. Update this file to customize:

- Personal information (name, title, contact details)
- Professional summary
- Technical skills
- Work experience
- Projects
- Education
- Open source contributions
- Blog posts

### Example YAML Structure

```yaml
name: Your Name
title: Your Title
professional_summary: |
  Your professional summary in markdown format...

technical_skills:
  languages:
    - Python
    - JavaScript
  backend_frameworks_tools:
    - FastAPI
    - React
  # ... more categories

experience:
  - position: Software Developer
    company: Company Name
    period: 2020 - Present
    description: Job description...

# ... more sections
```

## 🎨 Customization

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization
- Edit component styles in `src/components/Home.jsx`

### Theme Colors
The website uses a blue-purple-pink gradient theme. To change colors:
1. Update the gradient classes in the component
2. Modify the background blob colors
3. Adjust the TailwindCSS configuration

### Animations
Custom animations are defined in the component's `<style>` tag:
- `blob`: Floating background elements
- `gradient-shift`: Background gradient animation

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `pnpm build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 🔧 Development

### Adding New Sections
1. Add the section data to `dataset.yaml`
2. Create the corresponding JSX in `Home.jsx`
3. Add navigation link if needed
4. Update the scroll detection logic

### Adding New Features
- Install additional dependencies as needed
- Follow the existing component structure
- Maintain the responsive design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Bundled with [Vite](https://vitejs.dev/)

---

**Note**: This is a personal portfolio template. Feel free to customize it for your own use!


