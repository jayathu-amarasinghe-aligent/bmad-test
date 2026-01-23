# BMAD-site System Architecture Diagram

```excalidraw
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [
    {
      "type": "rectangle",
      "version": 1,
      "id": "google-drive",
      "x": 100,
      "y": 100,
      "width": 200,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffc9c9",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Google Drive\n(Image Source)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "github-actions",
      "x": 400,
      "y": 100,
      "width": 200,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#b2f2bb",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "GitHub Actions\n(Sync Workflow)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "vercel-blob",
      "x": 700,
      "y": 100,
      "width": 200,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#a5d8ff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Vercel Blob Storage\n(Image CDN)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "nextjs-app",
      "x": 400,
      "y": 300,
      "width": 200,
      "height": 120,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffec99",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Next.js 16 App\n(Static Site)\n\nApp Router\nServer Components"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "vercel-deploy",
      "x": 700,
      "y": 300,
      "width": 200,
      "height": 120,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#e7f5ff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Vercel Platform\n\nEdge Network\nStatic Hosting"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "ga4",
      "x": 100,
      "y": 500,
      "width": 150,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffd8a8",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Google\nAnalytics 4"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "search-console",
      "x": 300,
      "y": 500,
      "width": 150,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffd8a8",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Google Search\nConsole"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "vercel-analytics",
      "x": 500,
      "y": 500,
      "width": 150,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffd8a8",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Vercel\nAnalytics"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "user",
      "x": 1000,
      "y": 300,
      "width": 150,
      "height": 120,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#d0bfff",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Website\nVisitors\n\n(Browsers)"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-1",
      "x": 300,
      "y": 140,
      "width": 100,
      "height": 0,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-2",
      "x": 600,
      "y": 140,
      "width": 100,
      "height": 0,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-3",
      "x": 500,
      "y": 180,
      "width": 0,
      "height": 120,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-4",
      "x": 600,
      "y": 360,
      "width": 100,
      "height": 0,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-5",
      "x": 900,
      "y": 360,
      "width": 100,
      "height": 0,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-6",
      "x": 800,
      "y": 180,
      "width": 0,
      "height": 120,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-7",
      "x": 175,
      "y": 420,
      "width": 225,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "strokeStyle": "dashed",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-8",
      "x": 375,
      "y": 420,
      "width": 0,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "strokeStyle": "dashed",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-9",
      "x": 575,
      "y": 420,
      "width": 0,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "strokeStyle": "dashed",
      "start": {
        "type": "arrow"
      },
      "end": {
        "type": "arrow"
      }
    }
  ],
  "appState": {
    "gridSize": null,
    "viewBackgroundColor": "#ffffff"
  }
}
```

## Component Descriptions

### Image Pipeline
1. **Google Drive** → **GitHub Actions**: Daily automated sync (2 AM UTC)
2. **GitHub Actions** → **Vercel Blob Storage**: Image optimization (WebP/AVIF) and upload
3. **GitHub Actions** → **Next.js App**: Commits `images.json` metadata to trigger build
4. **Vercel Blob Storage** → **Next.js App**: CDN URLs referenced in static pages

### Deployment Pipeline
5. **Next.js App** → **Vercel Platform**: Static export deployed to Edge Network
6. **Vercel Platform** → **Website Visitors**: Fast global delivery via CDN

### Analytics Integration (Dashed arrows = monitoring)
7. **Next.js App** → **Google Analytics 4**: Event tracking (social clicks, image views)
8. **Next.js App** → **Google Search Console**: SEO monitoring
9. **Next.js App** → **Vercel Analytics**: Core Web Vitals monitoring
