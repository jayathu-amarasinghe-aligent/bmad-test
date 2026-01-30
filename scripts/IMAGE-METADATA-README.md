# Image Metadata Generator

Automatically extracts EXIF metadata (ISO, aperture, shutter speed, camera, lens) from your images and generates `public/data/images.json`.

## 🎯 New Feature: Automatic Location Names from GPS!

The script now automatically converts GPS coordinates to location names using reverse geocoding (OpenStreetMap Nominatim API).

Example:
- GPS: `2.3333°S, 34.8333°E` 
- → Location: `Serengeti National Park, Tanzania`

## Setup

1. **Create image directories:**
   ```bash
   mkdir -p public/images/color
   mkdir -p public/images/bw
   ```

2. **Add your images:**
   - Place color photos in `public/images/color/`
   - Place black & white photos in `public/images/bw/`

## Usage

Run the metadata generator:

```bash
npm run generate-metadata
```

This will:
- Scan all images in `public/images/color/` and `public/images/bw/`
- Extract EXIF data (camera, ISO, aperture, shutter speed, lens, GPS)
- **✨ Automatically get location names from GPS coordinates** (reverse geocoding)
- Generate `public/data/images.json` with all metadata

## Output Example

```json
{
  "images": [
    {
      "id": "elephant-savanna-001",
      "filename": "elephant-savanna-001.jpg",
      "category": "color",
      "url": "/images/color/elephant-savanna-001.jpg",
      "width": 1600,
      "height": 1200,
      "alt": "Elephant Savanna 001",
      "metadata": {
        "camera": "Canon EOS R5",
        "iso": 400,
        "aperture": "f/5.6",
        "shutter": "1/1000s",
        "lens": "RF 100-500mm",
        "focalLength": "400mm",
        "dateTaken": "2024-06-15",
        "location": "Serengeti National Park, Tanzania",
        "gps": {
          "latitude": -2.3333,
          "longitude": 34.8333
        }
      }
    }
  ]
}
```

## What Gets Extracted Automatically

### ✅ From EXIF Data:
- **Camera body**: Canon EOS R5, Nikon Z9, Sony A1
- **ISO**: 400, 800, 1600, etc.
- **Aperture**: f/5.6, f/4.0, etc.
- **Shutter speed**: 1/1000s, 1/500s, etc.
- **Lens**: RF 100-500mm, 600mm, etc.
- **Focal length**: 400mm, 600mm, etc.
- **Date taken**: From EXIF DateTimeOriginal
- **GPS coordinates**: Latitude/Longitude
- **✨ Location name**: Automatically from GPS (e.g., "Serengeti National Park, Tanzania")
- **Image dimensions**: Width x Height

### Manual Additions (Optional)

After generating, edit `public/data/images.json` to add or refine:
- **location**: Refine auto-generated location or add if no GPS data
- **story**: Behind-the-lens narrative for lightbox
- **timeOfDay**: "dawn" | "midday" | "dusk" | "night" (for homepage backgrounds)

## Reverse Geocoding Details

**API Used**: OpenStreetMap Nominatim (free, no API key required)

**Rate Limiting**: 1 request per second (built-in delay)

**Caching**: Locations are cached during script execution to avoid duplicate API calls

**Format Priority**:
1. Nature reserve/park name (e.g., "Serengeti National Park")
2. State/region (e.g., "Mara Region")
3. Country (e.g., "Tanzania")

**Example Locations**:
- `Serengeti National Park, Mara Region, Tanzania`
- `Amboseli National Park, Kajiado, Kenya`
- `Ranthambore National Park, Rajasthan, India`

**No GPS?** Location will be `null` and you can manually add it.

## Troubleshooting

### No EXIF data found?
- Some images don't have EXIF metadata (edited/exported without preserving)
- Solution: Use original images or manually add settings

### No location despite GPS data?
- Geocoding API might be temporarily unavailable
- GPS coordinates might be imprecise
- Solution: Script will show GPS coords, manually refine location name

### Script is slow?
- Reverse geocoding requires 1 second per unique location (API rate limit)
- Caching speeds up images from same location
- 20 images from 5 locations ≈ 5-6 seconds for geocoding

## Example Output

When running the script:

```
🔍 Scanning for images...

📸 Processing color images...
  ✓ elephant-001.jpg
    📷 Canon EOS R5
    ⚙️  ISO 400 • f/5.6 • 1/1000s
    🌍 Reverse geocoding GPS: -2.3333, 34.8333
    📍 Location: Serengeti National Park, Tanzania
  ✓ tiger-001.jpg
    📷 Sony A1
    ⚙️  ISO 1600 • f/6.3 • 1/2000s
    🌍 Reverse geocoding GPS: 26.0173, 76.5026
    📍 Location: Ranthambore National Park, Rajasthan, India

✅ Metadata generated successfully!

📁 Output: public/data/images.json
📊 Total images: 20
   • Color: 15
   • B&W: 5
```
