# Railway Deployment Guide for Sunnah Skills

## 🚀 Quick Railway Deployment

### Fixed Issues:
1. **Database Migration Issue**: Moved `db:push` from build to deploy phase
2. **Environment Variables**: Database operations now happen during deployment when DATABASE_URL is available
3. **Build Process**: Separated build and deployment concerns

### Current Configuration:
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run db:push; npm start`
- **Builder**: Nixpacks
- **Restart Policy**: On failure (max 10 retries)

## 📋 Railway Setup Steps

### 1. Create Railway Project
```bash
# Install Railway CLI (if not already installed)
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your project or create new one
railway link
```

### 2. Set Environment Variables
In your Railway dashboard, set these environment variables:

**Required:**
- `DATABASE_URL`: Your PostgreSQL connection string
- `NODE_ENV`: `production`

**Optional:**
- `PORT`: Railway will set this automatically, default is 5000

### 3. Database Setup
Railway will automatically provision a PostgreSQL database when you:
1. Go to your Railway project dashboard
2. Click "Add Service" → "Database" → "PostgreSQL"
3. The `DATABASE_URL` will be automatically added to your environment variables

### 4. Deploy
```bash
# Deploy from current directory
railway up

# Or deploy specific branch
railway up --branch main
```

## 🔧 Configuration Files

### railway.json
```json
{
  "build": {
    "builder": "nixpacks",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npm run db:push; npm start",
    "restartPolicyType": "on_failure",
    "restartPolicyMaxRetries": 10
  }
}
```

### Environment Variables Template (.env.example)
```env
DATABASE_URL=postgresql://username:password@hostname:port/database_name
PORT=5000
NODE_ENV=production
```

## 🏗️ Build Process
1. **Build Phase**: Frontend and backend assets are compiled
2. **Deploy Phase**: Database schema is pushed, then server starts

## 🗄️ Database Schema
The app uses PostgreSQL with these tables:
- `registrations`: Youth program registrations
- `contacts`: Contact form submissions

Schema is automatically created/updated via `drizzle-kit push` during deployment.

## 🌐 Application Features
- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + Radix UI

## 🔍 Troubleshooting

### Common Issues:
1. **Build fails with DATABASE_URL error**: Database operations moved to deploy phase
2. **Port binding issues**: Railway handles port automatically
3. **Environment variables not available**: Set them in Railway dashboard

### Logs:
```bash
# Check deployment logs
railway logs

# Check specific service logs
railway logs --service=web
```

## 📞 Support
If you encounter any issues:
1. Check Railway deployment logs
2. Verify environment variables are set
3. Ensure DATABASE_URL is correct
4. Contact Railway support if needed

## 🎯 Next Steps After Deployment
1. Test all application features
2. Set up custom domain (optional)
3. Configure production monitoring
4. Set up backup strategies