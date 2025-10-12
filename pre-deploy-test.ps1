# Pre-Deployment Test Script
# Run this before deploying to production

Write-Host "🚀 JetGlide Pre-Deployment Test" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env file exists
Write-Host "1. Checking .env file..." -ForegroundColor Yellow
if (Test-Path ".env") {
    Write-Host "   ✅ .env file exists" -ForegroundColor Green
} else {
    Write-Host "   ❌ .env file missing! Create it from .env.example" -ForegroundColor Red
    exit 1
}

# Check if node_modules exists
Write-Host ""
Write-Host "2. Checking dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "   ✅ node_modules exists" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  node_modules missing. Running npm install..." -ForegroundColor Yellow
    npm install
}

# Check for @emailjs/browser
Write-Host ""
Write-Host "3. Checking EmailJS package..." -ForegroundColor Yellow
$emailjsExists = Test-Path "node_modules/@emailjs"
if ($emailjsExists) {
    Write-Host "   ✅ @emailjs/browser installed" -ForegroundColor Green
} else {
    Write-Host "   ❌ @emailjs/browser missing! Installing..." -ForegroundColor Red
    npm install @emailjs/browser
}

# Check if owner image exists
Write-Host ""
Write-Host "4. Checking owner image..." -ForegroundColor Yellow
if (Test-Path "attached_assets/stock_images/ogunsakin_timilehin.jpg.JPG") {
    Write-Host "   ✅ Owner image exists" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Owner image not found at expected path" -ForegroundColor Yellow
}

# Test build
Write-Host ""
Write-Host "5. Testing production build..." -ForegroundColor Yellow
Write-Host "   Running: npm run build" -ForegroundColor Gray
$buildResult = npm run build 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "   ❌ Build failed! Check errors above" -ForegroundColor Red
    exit 1
}

# Check if dist folder was created
Write-Host ""
Write-Host "6. Checking build output..." -ForegroundColor Yellow
if (Test-Path "dist") {
    $distSize = (Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
    Write-Host "   ✅ dist folder created ($([math]::Round($distSize, 2)) MB)" -ForegroundColor Green
} else {
    Write-Host "   ❌ dist folder not created!" -ForegroundColor Red
    exit 1
}

# Summary
Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "✅ Pre-Deployment Tests Complete!" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Test the build locally: npm run preview" -ForegroundColor White
Write-Host "2. Set environment variables on your hosting platform:" -ForegroundColor White
Write-Host "   - VITE_EMAILJS_SERVICE_ID=service_x29lji3" -ForegroundColor Gray
Write-Host "   - VITE_EMAILJS_TEMPLATE_ID=template_kgt44s5" -ForegroundColor Gray
Write-Host "   - VITE_EMAILJS_PUBLIC_KEY=CoddUcOgIV1ASGycY" -ForegroundColor Gray
Write-Host "   - VITE_WHATSAPP_NUMBER=+2349160965661" -ForegroundColor Gray
Write-Host "3. Deploy to production!" -ForegroundColor White
Write-Host ""
Write-Host "📚 See DEPLOY_NOW.md for detailed deployment guide" -ForegroundColor Cyan
Write-Host ""
