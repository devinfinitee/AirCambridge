# Quick Setup Guide for Windows

This guide follows the best practices for running a frontend-only Vite project on Windows.

## Step 1: Install Dependencies

Open PowerShell or Command Prompt in the project directory and run:

```powershell
npm install
```

**If npm install fails:**
- Try: `pnpm install` (if you have pnpm installed)
- Or: `npm install --legacy-peer-deps`
- Make sure you're using PowerShell or Command Prompt (not Git Bash)

## Step 2: Run the Development Server

```powershell
npm run dev
```

This will:
1. Automatically check for dependencies (via the `predev` script)
2. Install them if needed
3. Start the Vite dev server on `http://localhost:5000`
4. Open your browser automatically

## Step 3: Access the Application

The application will be available at:
- **Local:** http://localhost:5000
- **Network:** Your local IP will be shown in the terminal

## Configuration

### Vite Configuration (`vite.config.ts`)
- **Port:** 5000 (configurable in `vite.config.ts`)
- **Auto-open:** Browser opens automatically
- **Root:** `client/` directory

### Environment Variables
If you need environment variables:
1. Copy `.env.example` to `.env`
2. Add your variables with the `VITE_` prefix
3. Access them using `import.meta.env.VITE_YOUR_VAR`

## Troubleshooting

### Port Already in Use
If port 5000 is already in use, edit `vite.config.ts`:
```typescript
server: {
  port: 3000, // Change to any available port
  open: true,
}
```

### Dependencies Not Installing
1. Clear npm cache: `npm cache clean --force`
2. Delete `node_modules` and `package-lock.json`
3. Run `npm install` again

### TypeScript Errors
Run the type checker:
```powershell
npm run check
```

## Building for Production

```powershell
npm run build
```

Output will be in the `dist/` folder.

To preview the production build:
```powershell
npm run preview
```

## Project Structure

```
JetGlide/
├── client/              # Frontend source
│   ├── src/            # React components
│   └── index.html      # Entry point
├── shared/             # Shared types/schemas
├── scripts/            # Build scripts
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript type checking
