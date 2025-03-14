$outputPath = Join-Path "images" "adventure-bg.jpg"
Write-Host "Downloading adventure-bg.jpg..."
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1200&q=80" -OutFile $outputPath
