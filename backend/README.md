# Task Manager Backend API

Express.js REST API with JWT authentication and MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from example:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

4. Start development server:
```bash
npm run dev
```

## API Routes

### Auth Routes (`/api/auth`)
- `POST /signup` - Register user
- `POST /login` - Login user

### Profile Routes (`/api/profile`)
- `GET /` - Get user profile (protected)

### Task Routes (`/api/tasks`)
- `POST /` - Create task (protected)
- `GET /` - Get tasks with optional ?search= and ?status= (protected)
- `PUT /:id` - Update task (protected)
- `DELETE /:id` - Delete task (protected)

## Project Structure

```
src/
├── config/
│   └── database.js       # MongoDB connection
├── controllers/
│   ├── authController.js # Auth logic
│   ├── profileController.js
│   └── taskController.js # Task CRUD logic
├── middleware/
│   └── authMiddleware.js # JWT verification
├── models/
│   ├── User.js          # User schema
│   └── Task.js          # Task schema
├── routes/
│   ├── authRoutes.js
│   ├── profileRoutes.js
│   └── taskRoutes.js
└── server.js            # Entry point
```

## Dependencies

- express - Web framework
- mongoose - MongoDB ODM
- bcryptjs - Password hashing
- jsonwebtoken - JWT generation/verification
- dotenv - Environment variables
- cors - Cross-origin resource sharing
