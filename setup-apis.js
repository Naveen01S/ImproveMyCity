#!/usr/bin/env node

/**
 * API Setup Script for Improve My City
 * This script helps you set up all the required API keys
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function setupAPIs() {
  console.log('🚀 Welcome to Improve My City API Setup!');
  console.log('This script will help you configure all the API keys for your civic engagement app.\n');

  // Check if .env file exists
  const envPath = path.join(process.cwd(), '.env');
  const envExamplePath = path.join(process.cwd(), 'env.example');
  
  if (!fs.existsSync(envPath)) {
    if (fs.existsSync(envExamplePath)) {
      console.log('📋 Creating .env file from template...');
      fs.copyFileSync(envExamplePath, envPath);
      console.log('✅ .env file created!\n');
    } else {
      console.log('❌ No env.example file found. Please create one first.');
      process.exit(1);
    }
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  let updatedContent = envContent;

  console.log('🔑 Let\'s set up your API keys. Press Enter to skip any optional services.\n');

  // Supabase (Required)
  console.log('📊 SUPABASE (Required - Database & Auth)');
  const supabaseUrl = await question('Supabase URL: ');
  const supabaseKey = await question('Supabase Anon Key: ');
  
  if (supabaseUrl && supabaseKey) {
    updatedContent = updatedContent.replace('your_supabase_url_here', supabaseUrl);
    updatedContent = updatedContent.replace('your_supabase_anon_key_here', supabaseKey);
    console.log('✅ Supabase configured!\n');
  }

  // Firebase (Optional)
  console.log('🔥 FIREBASE (Optional - Alternative Auth)');
  const firebaseApiKey = await question('Firebase API Key (optional): ');
  const firebaseProjectId = await question('Firebase Project ID (optional): ');
  
  if (firebaseApiKey && firebaseProjectId) {
    updatedContent = updatedContent.replace('your_firebase_api_key_here', firebaseApiKey);
    updatedContent = updatedContent.replace('your_project_id', firebaseProjectId);
    updatedContent = updatedContent.replace('your_project_id.firebaseapp.com', `${firebaseProjectId}.firebaseapp.com`);
    updatedContent = updatedContent.replace('your_project_id.appspot.com', `${firebaseProjectId}.appspot.com`);
    console.log('✅ Firebase configured!\n');
  }

  // Google Maps (Optional)
  console.log('🗺️ GOOGLE MAPS (Optional - Location Services)');
  const googleMapsKey = await question('Google Maps API Key (optional): ');
  
  if (googleMapsKey) {
    updatedContent = updatedContent.replace('your_google_maps_api_key_here', googleMapsKey);
    console.log('✅ Google Maps configured!\n');
  }

  // Cloudinary (Optional)
  console.log('☁️ CLOUDINARY (Optional - Image Storage)');
  const cloudinaryName = await question('Cloudinary Cloud Name (optional): ');
  const cloudinaryApiKey = await question('Cloudinary API Key (optional): ');
  
  if (cloudinaryName && cloudinaryApiKey) {
    updatedContent = updatedContent.replace('your_cloudinary_cloud_name', cloudinaryName);
    updatedContent = updatedContent.replace('your_cloudinary_api_key', cloudinaryApiKey);
    console.log('✅ Cloudinary configured!\n');
  }

  // OpenAI (Optional)
  console.log('🤖 OPENAI (Optional - AI Features)');
  const openaiKey = await question('OpenAI API Key (optional): ');
  
  if (openaiKey) {
    updatedContent = updatedContent.replace('your_openai_api_key_here', openaiKey);
    console.log('✅ OpenAI configured!\n');
  }

  // MongoDB (Optional)
  console.log('🍃 MONGODB (Optional - Alternative Database)');
  const mongodbUri = await question('MongoDB URI (optional): ');
  
  if (mongodbUri) {
    updatedContent = updatedContent.replace('mongodb://localhost:27017/improve-my-city', mongodbUri);
    console.log('✅ MongoDB configured!\n');
  }

  // Write updated .env file
  fs.writeFileSync(envPath, updatedContent);
  
  console.log('🎉 Setup complete! Your .env file has been updated.');
  console.log('\n📚 Next steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run dev');
  console.log('3. Check the API Status button in the bottom-right corner');
  console.log('\n📖 For detailed setup instructions, see API_SETUP_GUIDE.md');
  
  rl.close();
}

setupAPIs().catch(console.error);

