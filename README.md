# JetGlide - Frontend Only

This is a fully frontend-only application built with React, Vite, and TailwindCSS.

## Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

If `npm install` fails, try:
```bash
pnpm install
```

Or on Windows (PowerShell):
```powershell
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will automatically:
- Check for dependencies and install them if needed
- Start the Vite development server on `http://localhost:5000`
- Open your default browser

### 3. Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
JetGlide/
├── client/              # Frontend source code
│   ├── src/            # React components and logic
│   └── index.html      # Entry HTML file
├── shared/             # Shared utilities
├── attached_assets/    # Static assets
├── scripts/            # Build and setup scripts
└── package.json        # Dependencies and scripts
```

## Environment Variables

If you need to use environment variables, create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key_here
```

Access them in your code using `import.meta.env.VITE_API_KEY`.

## Troubleshooting

### If npm install fails:
1. Try using PowerShell or Command Prompt (not Git Bash on Windows)
2. Run `npm cache clean --force`
3. Delete `node_modules` and `package-lock.json`, then run `npm install` again

### If the dev server doesn't start:
1. Make sure port 5000 is not in use
2. Check that all dependencies are installed
3. Try running `npm run check` to verify TypeScript compilation

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animations
- **React Query** - Data fetching (if needed for external APIs)
- **Wouter** - Routing
