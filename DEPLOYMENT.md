# Deployment Instructions for dokindthings.fund

This guide will help you deploy the Kindness Fund website to your private server at dokindthings.fund.

## GitHub to Gitea Mirror Setup

This repository is configured to automatically mirror changes from GitHub to Gitea using GitHub Actions. To enable this:

1. **Go to your GitHub repository settings**: https://github.com/Jeff-Emmett/kindness-fund-website/settings/secrets/actions

2. **Add the following secrets**:
   - `GITEA_USERNAME`: Your Gitea username (e.g., `jeffemmett`)
   - `GITEA_TOKEN`: Your Gitea API token (the same one you used earlier: `da10d10da546ac78490140871536cf48166d5c92`)

3. **The workflow will automatically**:
   - Trigger on every push to the main/master branch
   - Push all branches and tags to your Gitea instance
   - Can also be manually triggered from the Actions tab

This ensures bidirectional syncing between GitHub and Gitea.

## Prerequisites

- Docker and Docker Compose installed on your server
- Nginx installed and configured
- Domain `dokindthings.fund` pointing to your server's IP address
- SSL certificate (Let's Encrypt recommended)

## Step 1: Clone the Repository

On your server, clone the repository from your Gitea instance:

```bash
git clone https://gitea.jeffemmett.com/jeffemmett/kindness-fund-website.git
cd kindness-fund-website
```

## Step 2: Build and Start the Docker Container

```bash
# Create the external network if it doesn't exist
docker network create web

# Build and start the container
docker compose up -d --build
```

The application will be available on port 3001 locally.

## Step 3: Configure Nginx

Copy the Nginx configuration to your Nginx sites-available directory:

```bash
sudo cp nginx/dokindthings.fund.conf /etc/nginx/sites-available/dokindthings.fund
sudo ln -s /etc/nginx/sites-available/dokindthings.fund /etc/nginx/sites-enabled/
```

## Step 4: Set Up SSL Certificate

If you don't have an SSL certificate yet, use Let's Encrypt:

```bash
sudo certbot --nginx -d dokindthings.fund -d www.dokindthings.fund
```

This will automatically obtain and configure the SSL certificate.

If you already have certificates, update the paths in the Nginx configuration file.

## Step 5: Test and Reload Nginx

Test the Nginx configuration:

```bash
sudo nginx -t
```

If the test passes, reload Nginx:

```bash
sudo systemctl reload nginx
```

## Step 6: Verify Deployment

Visit https://dokindthings.fund in your browser to verify the site is working.

## Updating the Site

To update the site with new changes:

```bash
cd kindness-fund-website
git pull
docker compose down
docker compose up -d --build
```

## Troubleshooting

### Check Docker Container Logs

```bash
docker logs kindness-fund-website
```

### Check Nginx Logs

```bash
sudo tail -f /var/log/nginx/dokindthings.fund.error.log
sudo tail -f /var/log/nginx/dokindthings.fund.access.log
```

### Check Container Status

```bash
docker ps
```

### Rebuild Container

If you need to completely rebuild:

```bash
docker compose down
docker compose build --no-cache
docker compose up -d
```

## Notes

- The application runs on port 3001 internally
- Nginx acts as a reverse proxy, forwarding HTTPS traffic from port 443 to port 3001
- The Docker container will automatically restart unless stopped manually
- Make sure your firewall allows traffic on ports 80 and 443
