$images = @{
    "hero-bg.jpg" = "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    "destinations-bg.jpg" = "https://images.unsplash.com/photo-1488085061387-422e29b40080"
    "rome.jpg" = "https://images.unsplash.com/photo-1552832230-c0197dd311b5"
    "tokyo.jpg" = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
    "paris.jpg" = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    "santorini.jpg" = "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e"
    "newyork.jpg" = "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9"
    "bali.jpg" = "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
}

foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path "images" $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri "$($image.Value)?w=1200&q=80" -OutFile $outputPath
}
