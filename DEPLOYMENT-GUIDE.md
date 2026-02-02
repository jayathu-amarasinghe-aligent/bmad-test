# Deploying to Vercel

This guide will walk you through deploying your wildlife photography portfolio to Vercel.

## What is Vercel?

**Vercel** is a cloud platform specifically designed for Next.js applications. It provides:
- ⚡ **Instant deployments** - Push code, get live site in seconds
- 🌍 **Global CDN** - Fast loading worldwide
- 🔄 **Automatic deployments** - Every git push deploys automatically
- 🆓 **Free tier** - Perfect for personal projects
- 📊 **Analytics** - See how your site performs

## Prerequisites

✅ You have:
- A GitHub account (to connect your repository)
- Your project in a Git repository
- Next.js project ready (you already have this!)

## Step 1: Prepare Your Project

### 1.1 Check Your Configuration

Your Next.js configuration is already set up in `next.config.ts`. Let's verify it:

```typescript
// next.config.ts should have:
const nextConfig: NextConfig = {
  output: 'export', // ✅ Static export
  images: {
    unoptimized: true // ✅ Required for static export
  }
};
```

### 1.2 Verify Build Works Locally

Before deploying, make sure your site builds successfully:

```bash
# Build the site
npm run build

# This should create an 'out' folder with your static site
ls out/
```

If the build succeeds, you're ready to deploy! 🚀

---

## Step 2: Push Your Code to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Check your git status
git status

# Add all changes
git add .

# Commit
git commit -m "Prepare for Vercel deployment"

# Push to GitHub
git push origin main
```

---

## Step 3: Deploy to Vercel (3 Options)

### Option A: Deploy via Vercel Website (Easiest - Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Find your repository (BMAD-site)
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `out` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (Optional)
   - Skip for now - not needed for static site
   - Can add later if needed

5. **Deploy!**
   - Click "Deploy"
   - Wait 1-2 minutes ⏱️
   - Your site is live! 🎉

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? bmad-wildlife-photography
# - In which directory is your code located? ./
# - Want to override settings? No

# Wait for deployment...
# You'll get a URL like: https://bmad-wildlife-photography.vercel.app
```

### Option C: Deploy via GitHub Integration (Automatic)

Once connected in Option A, every time you push to GitHub:
- Vercel automatically deploys
- Preview deployments for branches
- Production deployment for main branch

---

## Step 4: Verify Deployment

Once deployed, check:

1. **Visit Your Site**
   - Open the Vercel URL (e.g., `https://your-site.vercel.app`)

2. **Test Key Features**
   - ✅ Home page loads
   - ✅ Color gallery loads images
   - ✅ B&W gallery loads images
   - ✅ Lightbox opens on image click
   - ✅ Navigation works

3. **Check Images**
   - Make sure all images load correctly
   - Check `/images/color/` and `/images/bw/` paths

---

## Step 5: Configure Custom Domain (Optional)

### Using Vercel's Free Domain

You get a free domain like: `your-project.vercel.app`

### Adding Your Own Domain

If you have a custom domain (e.g., `wildlifephotos.com`):

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain

2. **Update DNS Records**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel nameservers

3. **Wait for DNS Propagation** (can take up to 48 hours)

---

## Common Deployment Issues & Fixes

### Issue 1: Build Fails with "Image Optimization Error"

**Error**: `Image Optimization using Next.js' default loader is not compatible with 'output: export'`

**Fix**: Add to `next.config.ts`:
```typescript
images: {
  unoptimized: true
}
```

### Issue 2: Images Don't Load (404)

**Problem**: Images not found at `/images/color/Bear.jpg`

**Fix**:
- Make sure `public/images/` folder is committed to Git
- Vercel serves everything in `public/` at root level
- Check `.gitignore` doesn't exclude images

### Issue 3: Build Exceeds Time Limit

**Problem**: Vercel free tier has 10-minute build limit

**Fix**:
- Large image files might slow build
- Consider optimizing images before committing
- Use smaller image files

### Issue 4: 404 on Direct URL Access

**Problem**: Navigating to `/gallery/color` directly gives 404

**Fix**: Already handled with `output: 'export'` - creates static HTML files

---

## Understanding Vercel Deployments

### Production vs Preview

- **Production**: Deployed from `main` branch → `your-site.vercel.app`
- **Preview**: Deployed from feature branches → `your-site-git-feature.vercel.app`

### Automatic Deployments

Every `git push` triggers:
1. Vercel detects push via GitHub webhook
2. Runs `npm install`
3. Runs `npm run build`
4. Deploys to CDN globally
5. Sends you deployment URL

### Build Logs

View build logs in Vercel dashboard:
- Click on deployment
- See full build output
- Debug errors

---

## Deployment Checklist

Before deploying, verify:

- [ ] `npm run build` works locally
- [ ] All images are in `public/images/`
- [ ] Images committed to Git (check `.gitignore`)
- [ ] `images.json` file committed
- [ ] No sensitive data in code (API keys, passwords)
- [ ] `next.config.ts` has correct export settings

---

## Quick Commands Reference

```bash
# Local development
npm run dev                    # Start dev server

# Build & test locally
npm run build                  # Build static site
npx serve out                  # Serve built site locally

# Deploy to Vercel
vercel                         # Deploy to preview
vercel --prod                  # Deploy to production

# Vercel CLI
vercel login                   # Login
vercel ls                      # List deployments
vercel logs                    # View logs
vercel domains                 # Manage domains
```

---

## Environment Variables (If Needed Later)

If you add API keys or secrets:

1. **In Vercel Dashboard**:
   - Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_API_KEY=your-key`

2. **In Your Code**:
   ```typescript
   const apiKey = process.env.NEXT_PUBLIC_API_KEY;
   ```

3. **For Local Development**:
   ```bash
   # Create .env.local file
   echo "NEXT_PUBLIC_API_KEY=your-key" > .env.local
   ```

---

## Monitoring Your Site

### Vercel Analytics (Free)

Enable in Vercel dashboard:
- Real-time analytics
- Page views
- Performance metrics
- No code changes needed

### Performance

Vercel automatically provides:
- Global CDN (fast worldwide)
- Automatic HTTPS
- Compression (gzip/brotli)
- Edge caching

---

## Updating Your Site

### Method 1: Git Push (Automatic)

```bash
# Make changes
git add .
git commit -m "Update gallery images"
git push origin main

# Vercel automatically deploys! 🚀
```

### Method 2: Manual Deploy

```bash
vercel --prod
```

### Rollback

If something breaks:
1. Go to Vercel dashboard
2. Find previous working deployment
3. Click "Promote to Production"

---

## Cost & Limits

### Vercel Free Tier Includes:

- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Analytics

### Limits:

- ⏱️ 10-minute build timeout
- 💾 4.5 GB output directory size
- 📊 100 GB bandwidth/month

For your photography site, free tier is more than enough! 🎉

---

## Next Steps After Deployment

1. ✅ Share your live URL!
2. 🎨 Add custom domain (optional)
3. 📊 Enable analytics
4. 🔍 Submit to Google Search Console
5. 📱 Test on mobile devices
6. 🚀 Add more images

---

## Getting Help

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Community**: https://github.com/vercel/vercel/discussions

---

## Summary

**To deploy right now:**

1. Make sure code is pushed to GitHub
2. Go to https://vercel.com
3. Sign in with GitHub
4. Import your repository
5. Click "Deploy"
6. Done! 🎉

Your wildlife photography portfolio will be live in ~2 minutes!
