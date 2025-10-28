# Task Manager Frontend

Next.js 14 application with TailwindCSS for task management.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.example .env.local
```

3. Configure API URL:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Start development server:
```bash
npm run dev
```

Visit `http://localhost:3000`

## Pages

- `/` - Home (redirects to login or dashboard)
- `/login` - User login
- `/signup` - User registration
- `/dashboard` - Task management (protected)

## Components

- `TaskCard` - Individual task display
- `TaskModal` - Create/edit task form

## Features

- JWT authentication
- Protected routing
- Form validation
- Search and filter tasks
- Responsive design
- Modern UI with TailwindCSS

## Build for Production

```bash
npm run build
npm start
```
