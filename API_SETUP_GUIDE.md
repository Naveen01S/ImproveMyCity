# API Setup Guide for Improve My City

This guide will help you set up all the required API keys and services for your civic engagement app.

## 🔑 Required API Keys

### 1. Supabase (Current Backend) - REQUIRED
**Status**: Already configured in your project
- **Purpose**: Database, Authentication, File Storage
- **Setup**: Already working with your current setup
- **Keys Needed**:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

### 2. Firebase (Authentication) - OPTIONAL
**Purpose**: Alternative authentication system
**Setup Steps**:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing
3. Enable Authentication → Sign-in method → Email/Password
4. Go to Project Settings → General → Your apps
5. Add a web app and copy the config

**Keys to Add**:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Google Maps API - OPTIONAL
**Purpose**: Enhanced location services and mapping
**Setup Steps**:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
4. Go to Credentials → Create Credentials → API Key
5. Restrict the key to your domain for security

**Key to Add**:
```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### 4. Cloudinary (Image Storage) - OPTIONAL
**Purpose**: Enhanced image storage and optimization
**Setup Steps**:
1. Go to [Cloudinary Console](https://console.cloudinary.com/)
2. Sign up for a free account
3. Go to Dashboard → Settings → Upload
4. Create an upload preset named "improve-my-city"
5. Set the preset to "Unsigned" for public uploads

**Keys to Add**:
```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
```

### 5. OpenAI (AI Features) - OPTIONAL
**Purpose**: Enhanced AI responses and form assistance
**Setup Steps**:
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an account and add payment method
3. Go to API Keys → Create new secret key
4. Copy the key (starts with `sk-`)

**Key to Add**:
```env
VITE_OPENAI_API_KEY=sk-your_openai_api_key
```

### 6. MongoDB (Database) - OPTIONAL
**Purpose**: Alternative database system
**Setup Steps**:
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create a database user
4. Get the connection string
5. Set up a backend API to handle MongoDB operations



## 🚀 Quick Setup Instructions

### Step 1: Copy Environment File
```bash
cp env.example .env
```

### Step 2: Add Your API Keys
Edit the `.env` file and add your actual API keys:

```env
# Required - Supabase (already working)
VITE_SUPABASE_URL=your_actual_supabase_url
VITE_SUPABASE_ANON_KEY=your_actual_supabase_key

# Optional - Add as you get them
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
VITE_CLOUDINARY_API_KEY=your_cloudinary_key
VITE_OPENAI_API_KEY=your_openai_key
```

### Step 3: Install Additional Dependencies
```bash
npm install firebase
npm install @google-cloud/firestore
npm install mongodb
```

### Step 4: Test Your Setup
The app will automatically detect which APIs are configured and show their status in the console.

## 🔧 API Status Dashboard

You can check which APIs are working by looking at the browser console or adding this to your app:

```typescript
import { getApiStatus } from './src/lib/config';

console.log('API Status:', getApiStatus());
```

## 💡 Recommended Setup Order

1. **Start with Supabase** (already working)
2. **Add Google Maps** for better location services
3. **Add Cloudinary** for better image handling
4. **Add OpenAI** for enhanced AI features
5. **Add Firebase** if you want alternative auth
6. **Add MongoDB** if you want alternative database

## 🛡️ Security Best Practices

1. **Never commit your `.env` file** to version control
2. **Use environment-specific keys** for development/production
3. **Restrict API keys** to your domain when possible
4. **Use least privilege** - only enable needed APIs
5. **Monitor usage** to avoid unexpected charges

## 🆓 Free Tier Limits

- **Supabase**: 500MB database, 1GB bandwidth
- **Firebase**: 1GB storage, 10GB transfer
- **Google Maps**: $200 free credits monthly
- **Cloudinary**: 25GB storage, 25GB bandwidth
- **OpenAI**: Pay-per-use (very cheap for small apps)
- **MongoDB Atlas**: 512MB storage

## 🆘 Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your domain is whitelisted in API settings
2. **API Key Not Working**: Check if the key is correctly copied
3. **Rate Limiting**: Implement proper error handling and retry logic
4. **Environment Variables**: Make sure they start with `VITE_` for Vite

### Getting Help:
- Check the browser console for error messages
- Verify API keys in respective service dashboards
- Test individual APIs using the provided test functions

## 📞 Support

If you need help setting up any of these APIs, each service has excellent documentation:
- [Supabase Docs](https://supabase.com/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Google Maps Docs](https://developers.google.com/maps/documentation)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [OpenAI Docs](https://platform.openai.com/docs)
- [MongoDB Docs](https://docs.mongodb.com/)

---

**Note**: The app works perfectly with just Supabase! All other APIs are optional enhancements.


