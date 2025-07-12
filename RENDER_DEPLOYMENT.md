# 🚀 Render Deployment Guide for Sunnah Skills

## 📋 Quick Deploy Steps

### 1. **Connect Your Repository to Render**
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Select your repository: `sunnah-skills` (or whatever you named it)
5. Click "Connect"

### 2. **Configure Environment Variables** (Optional - mostly handled by render.yaml)
Render will automatically set up the database connection, but you can add custom variables:
- `NODE_ENV`: `production` (auto-set)
- `DATABASE_URL`: (auto-set from database)

### 3. **Deploy**
- Render will automatically detect the `render.yaml` file
- Click "Apply" to start deployment
- Wait for build and deployment to complete (usually 3-5 minutes)

## 🔧 Configuration Files

### render.yaml (Auto-Configuration)
```yaml
services:
  # Web Service (Your Application)
  - type: web
    name: sunnah-skills-app
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm run db:push; npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase:
          name: sunnah-skills-db
          property: connectionString
    healthCheckPath: /health
    
  # PostgreSQL Database
  - type: pgsql
    name: sunnah-skills-db
    databaseName: sunnah_skills
    user: sunnah_skills_user
```

## 🆓 **Render Free Tier Limits**
- **Web Service**: 750 hours/month (sufficient for most use cases)
- **Database**: 1GB storage, 1M rows
- **Sleep Policy**: Apps sleep after 15 minutes of inactivity
- **Spin-up Time**: ~30 seconds from sleep

## 🏗️ **Build Process**
1. **Build**: `npm install && npm run build`
2. **Database Setup**: `npm run db:push` (creates/updates tables)
3. **Start**: `npm start` (production server)

## 🌐 **Your App URLs**
After deployment:
- **Web App**: `https://sunnah-skills-app.onrender.com`
- **API Health**: `https://sunnah-skills-app.onrender.com/health`
- **Database**: Internal connection via `DATABASE_URL`

## 📊 **Application Features**
- ✅ **Frontend**: React + TypeScript + Vite
- ✅ **Backend**: Node.js + Express + TypeScript
- ✅ **Database**: PostgreSQL with Drizzle ORM
- ✅ **API Endpoints**: Registration, Contact forms
- ✅ **Health Check**: `/health` endpoint for monitoring

## 🔍 **Troubleshooting**

### Common Issues:
1. **Build fails**: Check build logs in Render dashboard
2. **Database connection**: Verify DATABASE_URL is set correctly
3. **App not loading**: Check if app is sleeping (free tier limitation)
4. **Environment variables**: Ensure they're set in Render dashboard

### Monitoring:
- **Logs**: Available in Render dashboard
- **Health Check**: Visit `/health` endpoint
- **Database**: Connect via provided DATABASE_URL

## 🎯 **Post-Deployment**
1. **Test the application**: Visit your Render URL
2. **Check database**: Submit a test registration
3. **Monitor logs**: Watch for any errors
4. **Custom domain**: Add your domain in Render dashboard (optional)

## 📞 **Support**
- **Render Docs**: [render.com/docs](https://render.com/docs)
- **Community**: [community.render.com](https://community.render.com)
- **Status**: [status.render.com](https://status.render.com)

## 🚀 **Alternative Deployment Methods**

### Manual Service Creation (if Blueprint doesn't work):
1. Create Web Service manually
2. Connect repository
3. Set build command: `npm install && npm run build`
4. Set start command: `npm run db:push; npm start`
5. Create PostgreSQL database separately
6. Link database to web service

### Environment Variables for Manual Setup:
```
NODE_ENV=production
DATABASE_URL=<your_postgres_connection_string>
```

## 🎉 **You're Ready to Deploy!**
Your repository is now fully configured for Render deployment. Simply connect it to Render and deploy!