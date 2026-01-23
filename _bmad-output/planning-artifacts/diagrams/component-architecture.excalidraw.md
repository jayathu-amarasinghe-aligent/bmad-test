# BMAD-site Component Architecture

```excalidraw
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [
    {
      "type": "rectangle",
      "version": 1,
      "id": "app-layout",
      "x": 400,
      "y": 50,
      "width": 400,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#e7f5ff",
      "fillStyle": "hachure",
      "strokeWidth": 3,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "app/layout.tsx\n(Root Layout - Server Component)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "error-boundary",
      "x": 420,
      "y": 160,
      "width": 360,
      "height": 60,
      "angle": 0,
      "strokeColor": "#c92a2a",
      "backgroundColor": "#ffe3e3",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "ErrorBoundary (Client Component)"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "homepage",
      "x": 150,
      "y": 270,
      "width": 200,
      "height": 100,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#b2f2bb",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "app/page.tsx\n(Homepage)\n\nServer Component"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "gallery-page",
      "x": 450,
      "y": 270,
      "width": 200,
      "height": 100,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#b2f2bb",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "gallery/[category]\n/page.tsx\n\nServer Component"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "about-page",
      "x": 750,
      "y": 270,
      "width": 200,
      "height": 100,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#b2f2bb",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "about/page.tsx\n(About Page)\n\nServer Component"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "time-hero",
      "x": 150,
      "y": 420,
      "width": 200,
      "height": 90,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffec99",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "TimeAdaptive\nHero\n\n'use client'"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "firefly-icon",
      "x": 150,
      "y": 550,
      "width": 200,
      "height": 70,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffec99",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "FireflyIcon\n\n'use client'"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "masonry-gallery",
      "x": 400,
      "y": 420,
      "width": 250,
      "height": 90,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffec99",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "MasonryGallery\n(Infinite Scroll)\n\n'use client'"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "lightbox",
      "x": 400,
      "y": 550,
      "width": 120,
      "height": 90,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffec99",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Image\nLightbox\n\n'use client'"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "metadata-reveal",
      "x": 530,
      "y": 550,
      "width": 120,
      "height": 90,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffec99",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Metadata\nReveal\n\n'use client'"
      }
    },
    {
      "type": "rectangle",
      "version": 1,
      "id": "zustand-stores",
      "x": 750,
      "y": 450,
      "width": 200,
      "height": 160,
      "angle": 0,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#ffc9c9",
      "fillStyle": "hachure",
      "strokeWidth": 2,
      "roughness": 1,
      "opacity": 100,
      "text": {
        "text": "Zustand Stores\n\nuseLightboxStore\nuseGalleryStore\nuseTimeStore"
      }
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-layout-error",
      "x": 600,
      "y": 130,
      "width": 0,
      "height": 30,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-error-homepage",
      "x": 520,
      "y": 220,
      "width": -270,
      "height": 50,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-error-gallery",
      "x": 600,
      "y": 220,
      "width": -50,
      "height": 50,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-error-about",
      "x": 680,
      "y": 220,
      "width": 170,
      "height": 50,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-home-hero",
      "x": 250,
      "y": 370,
      "width": 0,
      "height": 50,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-hero-firefly",
      "x": 250,
      "y": 510,
      "width": 0,
      "height": 40,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-gallery-masonry",
      "x": 550,
      "y": 370,
      "width": -25,
      "height": 50,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-masonry-lightbox",
      "x": 460,
      "y": 510,
      "width": 0,
      "height": 40,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-masonry-metadata",
      "x": 590,
      "y": 510,
      "width": 0,
      "height": 40,
      "angle": 0,
      "strokeColor": "#1e1e1e"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-hero-store",
      "x": 350,
      "y": 465,
      "width": 400,
      "height": 65,
      "angle": 0,
      "strokeColor": "#c92a2a",
      "strokeStyle": "dashed"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-masonry-store",
      "x": 650,
      "y": 465,
      "width": 100,
      "height": 65,
      "angle": 0,
      "strokeColor": "#c92a2a",
      "strokeStyle": "dashed"
    },
    {
      "type": "arrow",
      "version": 1,
      "id": "arrow-lightbox-store",
      "x": 520,
      "y": 595,
      "width": 230,
      "height": -65,
      "angle": 0,
      "strokeColor": "#c92a2a",
      "strokeStyle": "dashed"
    }
  ],
  "appState": {
    "gridSize": null,
    "viewBackgroundColor": "#ffffff"
  }
}
```

## Legend

### Server Components (Green)
- **app/layout.tsx**: Root layout with ErrorBoundary wrapper
- **app/page.tsx**: Homepage with static hero
- **gallery/[category]/page.tsx**: Gallery pages for Color/B&W categories
- **about/page.tsx**: About page (Phase 1C)

### Client Components (Yellow - 'use client')
- **TimeAdaptiveHero**: Time-of-day detection and hero rendering
- **MasonryGallery**: Infinite scroll image grid
- **ImageLightbox**: Full-screen image viewer
- **MetadataReveal**: Behind-the-lens metadata overlay
- **FireflyIcon**: Animated social media icon

### State Management (Red - Zustand)
- **useLightboxStore**: Lightbox open/close, image navigation
- **useGalleryStore**: Infinite scroll pagination
- **useTimeStore**: Time-of-day state (dawn/midday/dusk/night)

### Arrows
- **Solid**: Component rendering hierarchy
- **Dashed Red**: Zustand store connections
