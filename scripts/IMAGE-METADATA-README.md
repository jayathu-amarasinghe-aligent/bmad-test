# Image Metadata Generator

Automatically extracts EXIF metadata (ISO, aperture, shutter speed, camera, lens) from your images and generates `public/data/images.json`.

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
        "location": null
      }
    }
  ]
}
```

## Manual Metadata

After generating, edit `public/data/images.json` to add:
- **location**: "Serengeti National Park, Tanzania"
- **story**: Behind-the-lens narrative
- **timeOfDay**: "dawn" | "midday" | "dusk" | "night"
