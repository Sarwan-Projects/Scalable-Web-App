# Task Manager - Full Stack Web Application

A secure, scalable full-stack web application with JWT-based authentication and CRUD operations for task management.

**Live Demo**: [Coming Soon]  
**Repository**: https://github.com/Sarwan-Projects/Scalable-Web-App

## 🚀 Technology Stack

- **Frontend**: Next.js 15 (React 18), TailwindCSS 3.4
- **Backend**: Node.js, Express.js 4.19
- **Database**: MongoDB Atlas (Cloud)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt password hashing, express-validator
- **Latest Versions**: All dependencies updated to latest stable releases

## 📋 Features

### ✅ Authentication & Security
- User registration with password hashing (bcrypt)
- JWT-based login system
- Protected routes with middleware
- Input validation (client & server side)

### ✅ Dashboard Features
- User profile display (name, email, stats)
- Complete CRUD operations for tasks
- Real-time search by title/description
- Filter tasks by status (pending/completed)
- Task statistics (total, pending, completed)
- Logout functionality

### ✅ Task Management
- Create tasks with title, description, status
- Edit existing tasks
- Delete tasks with confirmation
- View all tasks in responsive card layout
- Status badges (color-coded)

## Project Structure

```
├── backend/          # Express.js API server
│   ├── src/
│   │   ├── config/   # Database configuration
│   │   ├── controllers/  # Request handlers
│   │   ├── middleware/   # Auth middleware
│   │   ├── models/   # Mongoose schemas
│   │   ├── routes/   # API routes
│   │   └── server.js # Entry point
│   └── package.json
├── frontend/         # Next.js application
│   ├── src/
│   │   ├── app/      # Next.js pages
│   │   ├── components/   # React components
│   │   ├── hooks/    # Custom hooks
│   │   └── lib/      # API utilities
│   └── package.json
├── postman/          # API testing
│   └── collection.json
└── SCALABILITY_NOTES.md  # Production scaling guide
```

## Features

### Backend
- ✅ Modular architecture (routes, controllers, models, middleware)
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Protected API routes
- ✅ Task CRUD operations
- ✅ Search and filter functionality
- ✅ User profile management

### Frontend
- ✅ Modern, responsive UI with TailwindCSS
- ✅ Client-side form validation
- ✅ Protected routing
- ✅ Task management dashboard
- ✅ Search and filter UI
- ✅ Create, edit, delete tasks
- ✅ User authentication flow

## 🚀 Quick Setup

### Prerequisites
- Node.js v18+
- npm or yarn

### 1. Clone & Install

```bash
git clone https://github.com/Sarwan-Projects/Scalable-Web-App.git
cd Scalable-Web-App
```

### 2. Backend Setup

```bash
cd backend
npm install
```

**Important:** Replace `<db_password>` in `backend/.env` with your actual MongoDB password:
```env
MONGODB_URI=mongodb+srv://youresbuddies:YOUR_PASSWORD_HERE@cluster1.lwkedfx.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster1
```

Start backend:
```bash
npm run dev
```
✅ Backend runs on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
✅ Frontend runs on `http://localhost:3000`

### 4. Test the App

1. Open `http://localhost:3000`
2. Click "Sign up" and create an account
3. Login and start managing tasks!

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

Import `postman/collection.json` into Postman. Token is automatically saved after login/signup.

## 🔒 Security Features

- bcrypt password hashing (10 salt rounds)
- JWT authentication with expiration
- Protected routes with middleware
- Input validation (client & server)
- CORS configuration
- Error handling

## 📈 Scalability

See `SCALABILITY_NOTES.md` for production scaling strategies.

## 🚀 Deployment on Render

### Deploy Backend

1. **Create Account**: Go to [render.com](https://render.com) and sign up

2. **New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `Scalable-Web-App` repository

3. **Configure Service**:
   - **Name**: `taskmanager-backend`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

4. **Environment Variables** (Add these):
   ```
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://youresbuddies:YOUR_PASSWORD@cluster1.lwkedfx.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster1
   JWT_SECRET=taskmanager_secret_key_2024_sarwan_project_secure
   JWT_EXPIRE=7d
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

5. Click "Create Web Service"

6. **Copy Backend URL**: After deployment, copy the URL (e.g., `https://taskmanager-backend.onrender.com`)

### Deploy Frontend on Vercel

1. **Create Account**: Go to [vercel.com](https://vercel.com) and sign up

2. **Import Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Select `Scalable-Web-App`

3. **Configure Project**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

4. **Environment Variables**:
   ```
   NEXT_PUBLIC_API_URL=https://taskmanager-backend.onrender.com/api
   ```
   (Replace with your actual Render backend URL)

5. Click "Deploy"

6. **Update Backend CORS**:
   - Go back to Render dashboard
   - Update `FRONTEND_URL` environment variable with your Vercel URL
   - Redeploy backend

### ✅ Your App is Live!

- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://taskmanager-backend.onrender.com`

## 🛠️ Local Development

**Backend:**
```bash
cd backend && npm run dev
```

**Frontend:**
```bash
cd frontend && npm run dev
```

## 👤 Author

**Sarwan**
- Email: youres.buddies@gmail.com
- GitHub: [Sarwan-Projects](https://github.com/Sarwan-Projects)

## 📄 License

MIT License

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!
