# BMAD-site Data Flow Diagram

```excalidraw
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [
    {
      "type": "text",
      "version": 1,
      "id": "title",
      "x": 400,
      "y": 20,
      "width": 400,
      "height": 40,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "fontSize": 24,
      "fontFamily": 1,
      "text": "Image Sync & Build Data Flow",
      "textAlign": "center",
      "verticalAlign": "top"
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "gdrive-source",
      "x": 100,
      "y": 100,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffc9c9",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Google Drive API\n(Photo Source)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "sync-script",
      "x": 350,
      "y": 100,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#b2f2bb",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Sync Script\n(imageSync.ts)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "optimize",
      "x": 600,
      "y": 100,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#a5d8ff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Image Optimizer\n(WebP/AVIF)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "blob-upload",
      "x": 850,
      "y": 100,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#e7f5ff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Vercel Blob\nStorage Upload"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "json-gen",
      "x": 350,
      "y": 240,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffec99",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Generate\nimages.json"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "cdn-urls",
      "x": 850,
      "y": 240,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#e7f5ff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "CDN URLs\nReturned"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "git-commit",
      "x": 350,
      "y": 380,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#d0bfff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Git Commit\nimages.json"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "vercel-detect",
      "x": 600,
      "y": 380,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#e7f5ff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Vercel Detects\nCommit"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "nextjs-build",
      "x": 850,
      "y": 380,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#b2f2bb",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Next.js Build\n(Static Export)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "static-pages",
      "x": 600,
      "y": 520,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#b2f2bb",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Static HTML/CSS/JS\nGenerated"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "deploy",
      "x": 850,
      "y": 520,
      "width": 180,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#e7f5ff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "text": {
        "text": "Deploy to\nEdge Network"
      }
    },
    {
      "type": "arrow",
      "x": 280,
      "y": 135,
      "width": 70,
      "height": 0,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 530,
      "y": 135,
      "width": 70,
      "height": 0,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 780,
      "y": 135,
      "width": 70,
      "height": 0,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 440,
      "y": 170,
      "width": 0,
      "height": 70,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 940,
      "y": 170,
      "width": 0,
      "height": 70,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 530,
      "y": 275,
      "width": 320,
      "height": 0,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2,
      "strokeStyle": "dashed"
    },
    {
      "type": "arrow",
      "x": 440,
      "y": 310,
      "width": 0,
      "height": 70,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 530,
      "y": 415,
      "width": 70,
      "height": 0,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 780,
      "y": 415,
      "width": 70,
      "height": 0,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 940,
      "y": 450,
      "width": 0,
      "height": 70,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "arrow",
      "x": 780,
      "y": 555,
      "width": 70,
      "height": 0,
      "strokeColor": "#1e1e1e",
      "strokeWidth": 2
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-1",
      "x": 290,
      "y": 115,
      "width": 50,
      "height": 20,
      "fontSize": 12,
      "text": "Fetch"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-2",
      "x": 540,
      "y": 115,
      "width": 60,
      "height": 20,
      "fontSize": 12,
      "text": "Download"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-3",
      "x": 790,
      "y": 115,
      "width": 60,
      "height": 20,
      "fontSize": 12,
      "text": "Optimize"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-4",
      "x": 370,
      "y": 185,
      "width": 120,
      "height": 20,
      "fontSize": 12,
      "text": "Generate Metadata"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-5",
      "x": 870,
      "y": 185,
      "width": 100,
      "height": 20,
      "fontSize": 12,
      "text": "Upload & Get URLs"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-6",
      "x": 550,
      "y": 260,
      "width": 100,
      "height": 20,
      "fontSize": 12,
      "text": "Include CDN URLs"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-7",
      "x": 370,
      "y": 325,
      "width": 100,
      "height": 20,
      "fontSize": 12,
      "text": "Commit to Git"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-8",
      "x": 540,
      "y": 395,
      "width": 50,
      "height": 20,
      "fontSize": 12,
      "text": "Trigger"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-9",
      "x": 790,
      "y": 395,
      "width": 50,
      "height": 20,
      "fontSize": 12,
      "text": "Start"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-10",
      "x": 870,
      "y": 465,
      "width": 100,
      "height": 20,
      "fontSize": 12,
      "text": "Read images.json"
    },
    {
      "type": "text",
      "version": 1,
      "id": "label-11",
      "x": 790,
      "y": 535,
      "width": 50,
      "height": 20,
      "fontSize": 12,
      "text": "Deploy"
    }
  ],
  "appState": {
    "gridSize": null,
    "viewBackgroundColor": "#ffffff"
  }
}
```

## Process Flow

### Daily Automated Sync (2 AM UTC)

1. **Fetch**: Sync script queries Google Drive API for new/updated images
2. **Download**: Download full-resolution images to temporary storage
3. **Optimize**: Convert to WebP/AVIF, compress for web delivery
4. **Upload**: Upload optimized images to Vercel Blob Storage
5. **Generate Metadata**: Create `images.json` with CDN URLs, alt text, camera metadata
6. **Commit**: GitHub Actions commits `images.json` to repository
7. **Trigger**: Vercel detects new commit and starts build
8. **Build**: Next.js reads `images.json` and generates static pages
9. **Deploy**: Static HTML/CSS/JS deployed to Vercel Edge Network

### Result
- Zero manual intervention
- New images automatically appear on site within ~5-10 minutes
- All metadata preserved (camera settings, location, behind-the-lens stories)
- SEO-optimized alt text and structured data included
