# PowerShell script to create .env file
# Run this in PowerShell: .\create-env.ps1

$envContent = @"
# WhatsApp Configuration
VITE_WHATSAPP_NUMBER=+2349160965661

# EmailJS Configuration (optional - uncomment when ready)
# VITE_EMAILJS_SERVICE_ID=your_service_id
# VITE_EMAILJS_TEMPLATE_ID=your_template_id
# VITE_EMAILJS_PUBLIC_KEY=your_public_key
"@

$envContent | Out-File -FilePath ".env" -Encoding utf8 -NoNewline

Write-Host "✅ .env file created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Content:" -ForegroundColor Cyan
Write-Host $envContent
Write-Host ""
Write-Host "⚠️  Next steps:" -ForegroundColor Yellow
Write-Host "1. Restart your dev server (Ctrl+C then npm run dev)"
Write-Host "2. The WhatsApp number will now work throughout the site"
Write-Host ""
Write-Host "📱 WhatsApp: +2349160965661" -ForegroundColor Green
