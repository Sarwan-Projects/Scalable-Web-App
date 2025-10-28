# Task Manager - Setup Guide

Complete setup instructions for the Task Manager application.

## Prerequisites

- **Node.js** v18 or higher
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn** package manager
- **Git** for version control

## Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-manager
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**For MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
```

Start the backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create `.env.local` file:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start the frontend:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## MongoDB Setup Options

### Option 1: Local MongoDB

1. Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
   - **Windows**: MongoDB runs as a service automatically
   - **macOS**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

3. Verify MongoDB is running:
```bash
mongosh
```

### Option 2: MongoDB Atlas (Cloud)

1. Create free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create database user with password
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get connection string and update `.env` file

## Testing the Application

### 1. Test Backend API

Visit `http://localhost:5000` - you should see:
```json
{
  "success": true,
  "message": "Task Manager API is running",
  "version": "1.0.0"
}
```

Health check: `http://localhost:5000/api/health`

### 2. Test Frontend

Visit `http://localhost:3000` - you should be redirected to login page

### 3. Create Test Account

1. Go to `http://localhost:3000/signup`
2. Create an account:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
3. You'll be automatically logged in and redirected to dashboard

## Using Postman

1. Import `postman/collection.json` into Postman
2. Update collection variables if needed:
   - `baseUrl`: `http://localhost:5000/api`
3. Run "Signup" or "Login" request
4. Token will be automatically saved
5. Test other endpoints (all protected routes will use the saved token)

## Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
- Ensure MongoDB is running
- Check MONGODB_URI in `.env`
- For Atlas, verify IP whitelist and credentials

**Port Already in Use:**
```
Error: listen EADDRINUSE: address already in use :::5000
```
- Change PORT in `.env` to another port (e.g., 5001)
- Or kill the process using port 5000

### Frontend Issues

**API Connection Error:**
- Verify backend is running on port 5000
- Check NEXT_PUBLIC_API_URL in `.env.local`
- Check browser console for CORS errors

**Module Not Found:**
```bash
npm install
```

### Common Issues

**JWT Token Errors:**
- Ensure JWT_SECRET is set in backend `.env`
- Clear localStorage in browser and login again

**Validation Errors:**
- Check that all required fields are provided
- Verify field length requirements (name: 2-50, password: 6+)

## Development Tips

### Backend Development

- Use `npm run dev` for auto-reload with nodemon
- Check logs in terminal for errors
- MongoDB data persists between restarts

### Frontend Development

- Next.js has hot reload enabled
- Clear browser cache if styles don't update
- Use browser DevTools Network tab to debug API calls

### Database Management

**View MongoDB data:**
```bash
mongosh
use taskmanager
db.users.find()
db.tasks.find()
```

**Clear all data:**
```bash
mongosh
use taskmanager
db.users.deleteMany({})
db.tasks.deleteMany({})
```

## Production Deployment

### Backend

1. Set environment variables:
```env
NODE_ENV=production
MONGODB_URI=<production-mongodb-uri>
JWT_SECRET=<strong-random-secret>
FRONTEND_URL=<production-frontend-url>
```

2. Build and start:
```bash
npm start
```

### Frontend

1. Update `.env.production`:
```env
NEXT_PUBLIC_API_URL=<production-api-url>
```

2. Build:
```bash
npm run build
npm start
```

## Deployment Platforms

### Backend Options
- **Heroku**: Easy deployment with MongoDB Atlas
- **Railway**: Modern platform with free tier
- **Render**: Free tier available
- **AWS EC2**: Full control
- **DigitalOcean**: App Platform or Droplets

### Frontend Options
- **Vercel**: Optimized for Next.js (recommended)
- **Netlify**: Easy deployment
- **AWS Amplify**: Full AWS integration
- **Railway**: Full-stack deployment

### Database
- **MongoDB Atlas**: Managed MongoDB (recommended)
- **AWS DocumentDB**: MongoDB-compatible
- **Self-hosted**: On VPS or cloud instance

## Environment Variables Reference

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/taskmanager |
| JWT_SECRET | Secret key for JWT | random_secret_key_here |
| JWT_EXPIRE | Token expiration time | 7d |
| NODE_ENV | Environment | development/production |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:3000 |

### Frontend (.env.local)
| Variable | Description | Example |
|----------|-------------|---------|
| NEXT_PUBLIC_API_URL | Backend API URL | http://localhost:5000/api |

## Support

For issues or questions:
- Check existing GitHub issues
- Create a new issue with detailed description
- Include error messages and logs

## Author

**Sarwan**
- Email: youres.buddies@gmail.com
- GitHub: [Your GitHub Profile]

## License

MIT License - see LICENSE file for details
