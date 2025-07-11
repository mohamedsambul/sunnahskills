# Sunnah Skills - Railway Deployment Guide

## Environment Variables Required:
- DATABASE_URL (automatically provided by Railway PostgreSQL)
- NODE_ENV=production (automatically set by Railway)

## Custom Domain: sunnahskills.com
- Main domain: sunnahskills.com
- www subdomain: www.sunnahskills.com (optional)

## Deployment Commands:
- Build: npm install && npm run build && npm run db:push
- Start: npm start
- Port: Automatically provided by Railway via PORT environment variable

## Database:
- PostgreSQL service on Railway
- Automatic migrations via drizzle-kit push
- Schema defined in shared/schema.ts