# Fix EmailJS Error - Environment Variables Not Loading

## ❌ The Problem

You're getting an error: **"Error sending message. The public key is required."**

This happens because:
- Your credentials are in `.env.example`
- Vite only reads from `.env` (not `.env.example`)
- The environment variables aren't being loaded

## ✅ The Solution

You need to create a `.env` file from your `.env.example`.

### Option 1: Using File Explorer (Easiest)

1. Open the project folder: `JetGlide`
2. Find the file: `.env.example`
3. Right-click on it → **Copy**
4. Right-click in the folder → **Paste**
5. Rename the copy to: `.env` (remove the `.example` part)
6. **Restart your dev server**

### Option 2: Using PowerShell

Open PowerShell in the project folder and run:

```powershell
Copy-Item -Path ".env.example" -Destination ".env"
```

Then restart the dev server.

### Option 3: Using VS Code

1. In VS Code, right-click on `.env.example`
2. Click "Copy"
3. Right-click in the file explorer
4. Click "Paste"
5. Rename the file to `.env`
6. Restart the dev server

### Option 4: Manual Creation

1. Create a new file named `.env` in the root folder
2. Copy this content into it:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_x29lji3
VITE_EMAILJS_TEMPLATE_ID=template_kgt44s5
VITE_EMAILJS_PUBLIC_KEY=CoddUcOgIV1ASGycY

# WhatsApp Configuration
VITE_WHATSAPP_NUMBER=+2349160965661
```

3. Save the file
4. Restart the dev server

## 🔄 After Creating .env File

**IMPORTANT**: You MUST restart the dev server for changes to take effect.

1. Stop the current server (press `Ctrl+C` in the terminal)
2. Start it again: `npm run dev`
3. Go to the Contact page
4. Try sending a message
5. It should work now! ✅

## 🧪 How to Test

1. Go to: `http://localhost:5000/contact`
2. Fill in the contact form:
   - Name: Test User
   - Email: test@example.com
   - Message: Testing EmailJS
3. Click "Send Message"
4. You should see: ✅ "Message Sent!" toast
5. Check your email inbox for the message

## 🔍 Verify Environment Variables Are Loaded

After restarting the server, open the browser console (F12) and type:

```javascript
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
```

If it shows `CoddUcOgIV1ASGycY`, the environment variables are loaded correctly.

If it shows `undefined`, the `.env` file isn't being read.

## ⚠️ Common Mistakes

1. **File named wrong**: Must be exactly `.env` (with the dot at the start)
2. **Forgot to restart**: Environment variables only load when server starts
3. **Wrong location**: `.env` must be in the root folder (same level as `package.json`)
4. **File extension**: Make sure it's `.env` not `.env.txt`

## 📁 Correct File Structure

```
JetGlide/
├── .env                    ← Create this file
├── .env.example            ← Your template (keep this)
├── .gitignore              ← .env is already ignored
├── package.json
├── client/
└── ...
```

## 🎯 Why This Happens

- **Vite** (the build tool) only reads from `.env`
- `.env.example` is just a template for developers
- You need to copy it to `.env` for it to work
- `.env` is gitignored (won't be uploaded to GitHub)

## ✅ After Fix

Once you create `.env` and restart:
- ✅ EmailJS will work
- ✅ Contact form will send emails
- ✅ WhatsApp number will be loaded
- ✅ No more "public key required" error

---

**Quick Fix Command** (PowerShell):
```powershell
Copy-Item .env.example .env; Write-Host "✅ .env file created! Now restart your dev server." -ForegroundColor Green
```
