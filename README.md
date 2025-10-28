# Task Manager - Full Stack Web Application

A secure, scalable full-stack web application with JWT-based authentication and CRUD operations for task management.

**Live Demo**: Deploy on Render (see deployment steps below)

## 🚀 Technology Stack

- **Frontend**: Next.js 15 (React 18), TailwindCSS 3.4
- **Backend**: Node.js, Express.js 4.19
- **Database**: MongoDB Atlas 8.7 with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt password hashing, express-validator

## ✨ Features

- ✅ User registration & login with JWT authentication
- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ Protected routes with middleware
- ✅ User profile display (name, email, stats)
- ✅ Complete CRUD operations for tasks
- ✅ Real-time search by title/description
- ✅ Filter tasks by status (pending/completed)
- ✅ Task statistics dashboard
- ✅ Modern responsive UI with TailwindCSS
- ✅ Input validation (client & server side)
- ✅ Error handling & notifications

## 📁 Project Structure

```
Scalable-Web-App/
├── backend/              # Express.js API
│   ├── src/
│   │   ├── config/      # Database config
│   │   ├── controllers/ # Business logic
│   │   ├── middleware/  # Auth & validation
│   │   ├── models/      # Mongoose schemas
│   │   ├── routes/      # API routes
│   │   └── server.js    # Entry point
│   ├── .env             # Environment variables
│   └── package.json
├── frontend/            # Next.js app
│   ├── src/
│   │   ├── app/        # Pages (login, signup, dashboard)
│   │   ├── components/ # React components
│   │   ├── hooks/      # Custom hooks
│   │   └── lib/        # API utilities
│   ├── .env            # Environment variables
│   └── package.json
├── postman/            # API collection
└── SCALABILITY_NOTES.md
```

## 🚀 Local Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier)

### Steps

**1. Clone Repository:**
```bash
git clone https://github.com/Sarwan-Projects/Scalable-Web-App.git
cd Scalable-Web-App
```

**2. Install Dependencies:**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

**3. Configure Environment Variables:**

Backend `.env` (already created):
```env
PORT=5000
MONGODB_URI=mongodb+srv://youresbuddies:<db_password>@cluster1.lwkedfx.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster1
JWT_SECRET=taskmanager_secret_key_2024_sarwan_project_secure
JWT_EXPIRE=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```
**Replace `<db_password>` with your MongoDB Atlas password**

Frontend `.env` (already created):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**4. Start Development Servers:**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

**5. Access Application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🌐 Deploy to Render

### Step 1: Deploy Backend

1. Go to https://render.com and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `Sarwan-Projects/Scalable-Web-App`
4. Configure:
   - **Name**: `taskmanager-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

5. **Add Environment Variables** (click "Advanced" → "Add Environment Variable"):
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://youresbuddies:YOUR_PASSWORD@cluster1.lwkedfx.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster1
   JWT_SECRET=taskmanager_secret_key_2024_sarwan_project_secure
   JWT_EXPIRE=7d
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.onrender.com
   ```
   **Important**: Replace `YOUR_PASSWORD` with your actual MongoDB password

6. Click **"Create Web Service"**
7. Wait for deployment (2-3 minutes)
8. **Copy your backend URL** (e.g., `https://taskmanager-backend-xxxx.onrender.com`)

### Step 2: Deploy Frontend

1. Click **"New +"** → **"Web Service"** again
2. Connect same GitHub repository
3. Configure:
   - **Name**: `taskmanager-frontend`
   - **Root Directory**: `frontend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

4. **Add Environment Variable**:
   ```
   NEXT_PUBLIC_API_URL=https://taskmanager-backend-xxxx.onrender.com/api
   ```
   **Use your actual backend URL from Step 1**

5. Click **"Create Web Service"**
6. Wait for deployment (3-5 minutes)
7. **Access your live app!**

### Step 3: Update Backend FRONTEND_URL

1. Go back to your backend service on Render
2. Go to "Environment" tab
3. Update `FRONTEND_URL` with your actual frontend URL
4. Save changes (will auto-redeploy)

### Important Notes:
- ⚠️ Free tier sleeps after 15 min inactivity (first request takes ~30 seconds)
- ✅ MongoDB Atlas: Whitelist `0.0.0.0/0` in Network Access for Render
- ✅ Both services will auto-deploy on git push to main branch

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user

### Profile (Protected)
- `GET /api/profile` - Get user profile

### Tasks (Protected)
- `POST /api/tasks` - Create task
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks?search=query` - Search tasks
- `GET /api/tasks?status=pending` - Filter by status
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🧪 Testing with Postman

1. Import `postman/collection.json` into Postman
2. Update `baseUrl` variable to your backend URL
3. Run "Signup" or "Login" request
4. Token is automatically saved for protected routes

## 🔒 Security Features

- bcrypt password hashing (10 salt rounds)
- JWT authentication with 7-day expiration
- Protected routes with middleware
- Input validation (client & server)
- CORS configuration
- MongoDB injection prevention
- XSS protection

## 📈 Scalability

See `SCALABILITY_NOTES.md` for production scaling strategies including:
- Horizontal scaling with load balancers
- Redis caching layer
- Database sharding
- CDN integration
- Microservices architecture

## 👤 Author

**Sarwan**
- Email: youres.buddies@gmail.com
- GitHub: [Sarwan-Projects](https://github.com/Sarwan-Projects)
- Repository: [Scalable-Web-App](https://github.com/Sarwan-Projects/Scalable-Web-App)

## 📄 License

MIT License

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!
