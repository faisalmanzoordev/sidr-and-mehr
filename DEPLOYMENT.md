# Deployment Guide for SIDR & MEHR

## Quick Deploy to Vercel (Recommended)

Vercel is the recommended platform as it's built by the Next.js team.

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to your Vercel account
vercel login

# Deploy
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **sidr-mehr**
- In which directory is your code located? **.**
- Want to override settings? **N**

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: **.**
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Add Environment Variable:
   - Name: `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - Value: `923237814688`
7. Click "Deploy"

Your site will be live at: `https://sidr-mehr.vercel.app`

### Custom Domain

After deployment:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `sidrmehr.com`)
3. Update DNS records as instructed
4. Vercel handles SSL automatically

---

## Alternative: Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod
```

Add environment variable in Netlify dashboard:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = `923237814688`

---

## Self-Hosting (VPS/Dedicated Server)

### Requirements
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

### Steps

1. **Build the application**
```bash
npm run build
```

2. **Install PM2**
```bash
npm install -g pm2
```

3. **Start the application**
```bash
pm2 start npm --name "sidr-mehr" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx**

Create `/etc/nginx/sites-available/sidrmehr.com`:

```nginx
server {
    listen 80;
    server_name sidrmehr.com www.sidrmehr.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
ln -s /etc/nginx/sites-available/sidrmehr.com /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

5. **SSL with Certbot**
```bash
certbot --nginx -d sidrmehr.com -d www.sidrmehr.com
```

---

## Environment Variables

Ensure these are set in your deployment platform:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=923237814688
```

**Note**: `NEXT_PUBLIC_` prefix makes variables accessible in the browser.

---

## Pre-Deployment Checklist

Before deploying to production:

- [ ] Update product images (replace placeholders)
- [ ] Add real brand logos
- [ ] Verify WhatsApp number is correct
- [ ] Update social media links
- [ ] Test all pages locally
- [ ] Run `npm run build` to check for errors
- [ ] Check responsive design on mobile
- [ ] Verify all links work
- [ ] Test WhatsApp ordering flow
- [ ] Add Google Analytics (optional)
- [ ] Configure domain/SSL
- [ ] Set up email (for future contact form)

---

## Post-Deployment

### Monitoring
- Set up Vercel Analytics (free)
- Add Google Analytics if needed
- Monitor Core Web Vitals

### SEO
- Submit sitemap to Google Search Console
- Verify meta tags are correct
- Check Open Graph previews
- Add Google Business profile

### Performance
- Test with Lighthouse
- Check PageSpeed Insights
- Verify images are optimized
- Monitor loading times

### Updates
```bash
# Make changes locally
git add .
git commit -m "Update description"
git push

# Vercel auto-deploys on push
# Or manually: vercel --prod
```

---

## Rollback

If something goes wrong:

**Vercel**:
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → Promote to Production

**PM2**:
```bash
git checkout previous-commit
npm run build
pm2 restart sidr-mehr
```

---

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: +92 323 7814688

---

## Cost Estimates

**Vercel (Hobby Plan)**: Free
- Perfect for starting out
- 100GB bandwidth/month
- Custom domain
- Automatic SSL
- Serverless functions

**Vercel (Pro Plan)**: $20/month
- Unlimited bandwidth
- Advanced analytics
- Team collaboration

**VPS Self-Hosting**: $5-20/month
- Full control
- Requires server management
- Manual SSL/backups

---

## Performance Expectations

With optimizations:
- **Lighthouse Score**: 90-100
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Total Page Size**: < 500KB (without images)

The website is production-ready and optimized for performance.
