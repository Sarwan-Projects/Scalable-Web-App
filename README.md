# Task Manager - Full Stack Web Application

A secure, scalable full-stack web application with JWT-based authentication and CRUD operations for task management.

## 🚀 Technology Stack

- **Frontend**: Next.js 15 (React 18), TailwindCSS 3.4
- **Backend**: Node.js, Express.js 4.19
- **Database**: MongoDB 8.7 with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing, express-validator
- **Latest Versions**: All dependencies updated to latest stable releases

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

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

5. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Configure environment variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Profile (Protected)
- `GET /api/profile` - Get user profile

### Tasks (Protected)
- `POST /api/tasks` - Create task
- `GET /api/tasks` - Get all tasks (supports ?search= and ?status= params)
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Testing with Postman

1. Import the collection from `postman/collection.json`
2. The collection includes all API endpoints with examples
3. Token is automatically saved after login/signup
4. All protected routes use the saved token

## User Flow

1. **Sign Up**: Create a new account at `/signup`
2. **Login**: Authenticate at `/login`
3. **Dashboard**: View profile and manage tasks at `/dashboard`
4. **Create Task**: Click "Create Task" button
5. **Search/Filter**: Use search bar and status filter
6. **Edit/Delete**: Use buttons on task cards
7. **Logout**: Click logout to end session

## Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Protected API routes with middleware
- Client-side and server-side validation
- Secure token storage in localStorage
- CORS enabled for cross-origin requests

## Scalability

See `SCALABILITY_NOTES.md` for detailed information on scaling this application for high-traffic production environments.

## Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Next.js hot reload enabled
```

## Production Build

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

## 👤 Author

**Sarwan**
- Email: youres.buddies@gmail.com
- GitHub: [Sarwan-Projects](https://github.com/Sarwan-Projects)
- Repository: [Scalable-Web-App](https://github.com/Sarwan-Projects/Scalable-Web-App)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!
