# MyWebApp

A modern React application built with TypeScript, Vite, and Tailwind CSS. Features GitHub API integration, state management with Zustand, and automated deployment via GitHub Actions.

🌐 **Live Demo**: [https://schoi69821.github.io/mywebapp/](https://schoi69821.github.io/mywebapp/)

## ✨ Features

- **React 19** with TypeScript for type-safe development
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for rapid UI development
- **Zustand** for simple and efficient state management
- **React Router** for client-side routing
- **GitHub API Integration** to fetch user profiles and repositories
- **GitHub Actions** for automated CI/CD deployment
- **Responsive Design** that works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/schoi69821/mywebapp.git
cd mywebapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser (for development only)

### 🌐 Access the Live Site

The application is deployed and accessible at:
**https://schoi69821.github.io/mywebapp/**

No need to run any local server - just click the link above!

## 📁 Project Structure

```
mywebapp/
├── src/
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── Dashboard.tsx
│   ├── components/      # Reusable components
│   │   └── Header.tsx
│   ├── stores/          # Zustand stores
│   │   └── authStore.ts
│   ├── services/        # API services
│   │   └── api.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── .github/
│   └── workflows/       # GitHub Actions
│       └── deploy.yml
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Authentication Flow
- Simple authentication system using Zustand for state management
- Login persists across page refreshes using localStorage
- Protected routes that redirect to login when not authenticated

### GitHub Integration
- Search for any GitHub user by username
- View user profile information (avatar, bio, stats)
- Display user's public repositories with details
- Handles API rate limiting and error states

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Adaptive layouts for different screen sizes
- Smooth animations and transitions

## 🛠️ Technologies

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 3.4.0
- **State Management**: Zustand 5.0.6
- **Routing**: React Router DOM 7.6.3
- **HTTP Client**: Axios 1.10.0
- **Deployment**: GitHub Pages via GitHub Actions

## 🚀 Deployment

This project is automatically deployed to GitHub Pages when pushing to the `main` branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `dist` folder

3. Deploy to any static hosting service (Vercel, Netlify, etc.)

### GitHub Actions Workflow

The project includes a GitHub Actions workflow that:
1. Builds the project on every push to `main`
2. Deploys to GitHub Pages automatically
3. Updates the live site at https://schoi69821.github.io/mywebapp/

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**schoi69821**
- GitHub: [@schoi69821](https://github.com/schoi69821)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Tailwind CSS team for the utility-first CSS framework
- All contributors and users of this project