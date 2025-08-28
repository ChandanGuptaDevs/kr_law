# Domain Migration Guide: kathyrabii.com → krinjurylawfirm.com

## 📋 Complete Step-by-Step Process

### ✅ Code Changes (Already Done)
1. Updated domain references in `/src/app/page.tsx`
2. Created `vercel.json` for redirects and performance
3. Updated `next.config.mjs` with image optimization and redirects
4. Created `robots.txt` for SEO
5. Created `sitemap.xml` for search engines
6. Added `OptimizedImage` component for faster loading

### 🚀 Vercel Dashboard Steps

#### Step 1: Add New Domain to Vercel
1. Log in to Vercel Dashboard
2. Select your project "kr_law"
3. Go to "Settings" → "Domains"
4. Click "Add Domain"
5. Enter: `krinjurylawfirm.com`
6. Click "Add"
7. Also add: `www.krinjurylawfirm.com`

#### Step 2: Configure DNS at GoDaddy

**For krinjurylawfirm.com:**
1. Log in to GoDaddy
2. Go to "My Products" → Find `krinjurylawfirm.com`
3. Click "DNS" or "Manage DNS"
4. Delete all existing A records
5. Add these records:

**A Records (for root domain):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600
```

**CNAME Record (for www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

#### Step 3: Keep Old Domain Active (Important!)
1. In Vercel, keep `kathyrabii.com` and `www.kathyrabii.com` connected
2. Our redirects will automatically send traffic to the new domain
3. This preserves SEO value

### 📊 Google Search Console (Critical for SEO!)

#### Step 1: Add New Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "Domain" type
4. Enter: `krinjurylawfirm.com`
5. Verify ownership via DNS (GoDaddy)

#### Step 2: Change of Address Tool
1. In Search Console, select old property `kathyrabii.com`
2. Go to Settings → "Change of address"
3. Select new site: `krinjurylawfirm.com`
4. Follow verification steps
5. Submit the change

#### Step 3: Submit New Sitemap
1. Select new property `krinjurylawfirm.com`
2. Go to "Sitemaps"
3. Enter: `sitemap.xml`
4. Click "Submit"

### 🔍 SEO Preservation Checklist

- [ ] Update Google My Business listing
- [ ] Update all social media profiles
- [ ] Update email signatures
- [ ] Update business cards/marketing materials
- [ ] Notify important partners/clients
- [ ] Update backlinks (contact websites linking to you)
- [ ] Update paid ad campaigns (Google Ads, etc.)

### 📈 Monitoring After Migration

#### Week 1-2:
- Check Vercel dashboard for redirect metrics
- Monitor Google Search Console for crawl errors
- Test all pages load correctly on new domain
- Verify contact forms work

#### Month 1:
- Check Google rankings haven't dropped
- Monitor traffic in Google Analytics
- Ensure all old URLs redirect properly

### 🔧 Testing Commands

After deployment, test redirects:
```bash
# Test old domain redirects to new
curl -I https://www.kathyrabii.com
# Should show: Location: https://www.krinjurylawfirm.com

# Test specific pages
curl -I https://www.kathyrabii.com/about
# Should show: Location: https://www.krinjurylawfirm.com/about
```

### ⚠️ Important Notes

1. **DO NOT** disconnect old domain for at least 6 months
2. **DO NOT** delete old domain from Vercel
3. **KEEP** paying for old domain renewal (critical!)
4. All redirects are 301 (permanent) for SEO
5. Image caching is set to 1 year for speed

### 🚨 Troubleshooting

**If site doesn't load:**
- Check DNS propagation (can take 24-48 hours)
- Verify DNS settings in GoDaddy
- Check Vercel domain configuration

**If redirects don't work:**
- Clear browser cache
- Test in incognito mode
- Check vercel.json is deployed

**If images load slowly:**
- They should be cached after first load
- Check browser DevTools Network tab
- Verify WebP format is being served

### 📞 Support Contacts

- Vercel Support: https://vercel.com/support
- GoDaddy Support: 1-480-505-8877
- Google Search Console Help: https://support.google.com/webmasters

## ✅ Final Deployment

1. Commit all changes to Git
2. Push to main branch
3. Vercel will auto-deploy
4. Monitor deployment at: https://vercel.com/dashboard

Remember: Domain migration can temporarily affect SEO rankings, but with proper redirects, you should recover within 2-4 weeks.