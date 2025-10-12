# Create .env File - Quick Guide

## Why You Need This

The `.env` file stores your WhatsApp number and other configuration. It's not tracked by Git for security.

## Steps to Create

### Option 1: Using File Explorer (Easiest)

1. Open the project folder: `JetGlide`
2. Right-click in the folder → New → Text Document
3. Name it exactly: `.env` (including the dot at the start)
4. Windows might warn about changing extension - click Yes
5. Open the file with Notepad
6. Copy and paste this:

```
VITE_WHATSAPP_NUMBER=+2349160965661
```

7. Save and close

### Option 2: Using VS Code

1. In VS Code, click File → New File
2. Save it as `.env` in the root folder (same level as `package.json`)
3. Add this content:

```
VITE_WHATSAPP_NUMBER=+2349160965661
```

4. Save the file

### Option 3: Using Command Line

Open PowerShell in the project folder and run:

```powershell
@"
VITE_WHATSAPP_NUMBER=+2349160965661
"@ | Out-File -FilePath .env -Encoding utf8
```

## After Creating

1. **Restart the dev server**:
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again

2. **Verify it works**:
   - Go to the Contact page
   - The WhatsApp number should show: +2349160965661

## What This Does

- The WhatsApp number from `.env` is used throughout the site
- Clicking WhatsApp buttons will open chat with this number
- You can change the number anytime by editing `.env`

## Important Notes

- The file must be named exactly `.env` (with dot)
- It must be in the root folder (same level as `package.json`)
- After creating/editing, always restart the dev server
- This file is automatically ignored by Git (won't be uploaded)

## Current Configuration

```
VITE_WHATSAPP_NUMBER=+2349160965661
```

This is the number from your `.env.example` file that you updated.
