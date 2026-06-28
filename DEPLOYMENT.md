# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed locally
- Repository cloned from GitHub

## Deployment Steps

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Select **Deploy from a branch**
   - Choose branch: `main`
   - Choose folder: `/ (root)`
4. Click **Save**

### 2. Wait for Deployment
- GitHub will automatically build and deploy your site
- You'll see a notification when deployment is complete
- Your site will be available at: `https://yourusername.github.io/Restaurant-project`

### 3. Custom Domain (Optional)
1. In GitHub Pages settings, add your custom domain in the "Custom domain" field
2. Update your domain's DNS settings to point to GitHub Pages
3. GitHub will automatically create a CNAME file

## Project Structure for GitHub Pages

The project is structured correctly for GitHub Pages:
- `index.html` is in the root directory
- All assets are in `assets/` folder
- All pages are in `pages/` folder
- `.nojekyll` file prevents Jekyll processing

## Troubleshooting

### 404 Errors
- Ensure all file paths use relative paths
- Check that file names match exactly (case-sensitive)
- Verify that all linked files exist

### CSS/JS Not Loading
- Check browser console for 404 errors
- Verify relative paths are correct
- Clear browser cache and reload

### Site Not Updating
- Wait a few minutes for GitHub to rebuild
- Check Actions tab for build status
- Clear browser cache completely

## Performance Tips
1. Minimize CSS and JavaScript files
2. Optimize images for web
3. Use CDN for external libraries
4. Enable browser caching

## Security Considerations
1. Never commit sensitive data (API keys, passwords)
2. Use `.gitignore` to exclude sensitive files
3. Review `.gitignore` before committing
4. Use GitHub Secrets for sensitive environment variables

## Monitoring
- Check GitHub Actions for deployment status
- Monitor site performance with Google PageSpeed Insights
- Use Google Analytics for traffic monitoring
- Set up GitHub notifications for deployment failures

## Maintenance
- Regularly update dependencies
- Test all links and functionality
- Keep documentation up to date
- Monitor for broken external links
