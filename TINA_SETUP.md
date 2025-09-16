# Tina CMS Setup Guide

## Quick Setup (5 minutes)

### 1. Create Tina Cloud Account
1. Go to [https://app.tina.io](https://app.tina.io)
2. Sign up with GitHub
3. Click "Create New Project"

### 2. Connect Your Repository
1. Select your GitHub repository: `kr_law`
2. Choose the branch: `main` or `feature/netlify-cms-integration`
3. Set content directory: `content/blog`

### 3. Get Your Keys
After creating the project, you'll see:
- **Client ID**: `NEXT_PUBLIC_TINA_CLIENT_ID`
- **Read Only Token**: `TINA_TOKEN`

### 4. Add to Vercel
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add these variables:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
   TINA_TOKEN=your-read-only-token-here
   ```

### 5. Redeploy
1. Trigger a redeploy in Vercel
2. Visit `yoursite.com/admin` to access the CMS

## How to Use the CMS

### For Content Editors:
1. Go to `krinjurylawfirm.com/admin`
2. Login with your Tina account
3. You'll see all blog posts
4. Click to edit any post
5. Use the visual editor to make changes
6. Click "Save" to publish

### Features:
- ✅ Visual editing
- ✅ Image uploads
- ✅ Rich text editing
- ✅ Preview changes
- ✅ Auto-saves to GitHub
- ✅ Auto-deploys to Vercel

## Troubleshooting

### CMS Not Loading?
- Check environment variables in Vercel
- Ensure Tina project is connected to correct repo

### Can't Save Changes?
- Check GitHub permissions
- Verify Tina token is correct

## Support
- Tina Documentation: https://tina.io/docs
- GitHub Issues: Create issue in your repo