# 🚀 RCM Auto-Med Testimonial Generator Setup

## ✅ Everything Works with `npm run dev`

Your testimonial generator is now fully integrated and will start automatically when you run the development server.

## 📋 Quick Setup

### 1. Create Environment File
Create a `.env` file in the project root with:

```env
# OpenRouter API Key (Get from: https://openrouter.ai/keys)
VITE_OPENAI_API_KEY=your_openrouter_api_key_here

# MongoDB Connection (Your existing connection)
VITE_MONGODB_URI=mongodb+srv://vicky:vicky123@cluster0.ixqhb.mongodb.net/rcm_auto_med?retryWrites=true&w=majority&appName=Cluster0

# API Configuration
VITE_API_URL=https://www.adambilling.com/api
VITE_DOMAIN=www.adambilling.com
VITE_SERVER_PORT=3000
```

### 2. Start Development Server
```bash
npm run dev
```

That's it! Everything will start automatically:
- ✅ Vite development server (React app)
- ✅ Express API server
- ✅ Testimonial scheduler (cron job)
- ✅ MongoDB connection
- ✅ OpenRouter AI integration

## 🤖 What Happens Automatically

When you run `npm run dev`:

1. **Vite Server** starts on `http://localhost:5173`
2. **API Server** starts on `http://localhost:3000`
3. **Testimonial Scheduler** starts automatically
4. **Initial Generation** runs immediately
5. **Cron Job** schedules daily generation at 2 AM

## 📊 Console Output

You'll see logs like:
```
🚀 Server running on port 3000
📡 API available at http://localhost:3000/api
🌐 CORS enabled for www.adambilling.com
🤖 Starting testimonial scheduler...
✅ Testimonial scheduler started successfully
[2024-01-16T12:00:00.000Z] Testimonial Generator: Starting testimonial generation process...
[2024-01-16T12:00:01.000Z] Testimonial Generator: Connected to MongoDB
[2024-01-16T12:00:05.000Z] Testimonial Generator: Generated 6 testimonials
[2024-01-16T12:00:06.000Z] Testimonial Generator: Testimonials saved to database successfully
```

## 🔧 Available Scripts

```bash
# Start everything (recommended)
npm run dev

# Test testimonial generation manually
npm run test-generation

# Generate testimonials once
npm run generate-testimonials

# Start only the scheduler
npm run start-scheduler
```

## 📁 Core Files Structure

```
src/
├── utils/
│   ├── testimonial-generator/
│   │   ├── scheduler.js          # Cron scheduler
│   │   ├── generateTestimonials.js # AI generation
│   │   └── test-generation.js    # Test script
│   └── db/
│       └── mongodb.js            # Database connection
├── services/
│   └── testimonials.js           # API service
├── components/Pages/Home/
│   └── Testimonials.jsx          # React component
├── config/
│   └── client-env.js             # Environment config
├── server/
│   └── index.js                  # Express server
└── App.jsx                       # Main app
```

## 🎯 Features

- **🔄 Automatic Generation**: Runs daily at 2 AM
- **🧠 AI-Powered**: Uses OpenRouter with GPT-4
- **🗄️ MongoDB Storage**: Saves to your database
- **📱 Dynamic Display**: Updates testimonials component
- **🛡️ Error Handling**: Fallback testimonials if API fails
- **📊 Detailed Logging**: Track all operations
- **🌐 CORS Enabled**: Works with your domain

## 🚨 Troubleshooting

### Missing API Key
If you see: `API key not found or invalid`
- Add your OpenRouter API key to `.env`
- Get it from: https://openrouter.ai/keys

### MongoDB Connection Error
If you see: `MongoDB connection error`
- Check your MongoDB URI in `.env`
- Ensure your IP is whitelisted in MongoDB Atlas

### Port Already in Use
If port 3000 is busy:
- Change `VITE_SERVER_PORT=3001` in `.env`
- Or stop other services using port 3000

## 🎉 Success!

Once running, your testimonials will:
1. Generate automatically every day
2. Display on your website
3. Update dynamically from MongoDB
4. Use AI-generated realistic content
5. Include proper SEO optimization

Just run `npm run dev` and everything works! 🚀 