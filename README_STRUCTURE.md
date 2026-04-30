# Mental Health App

A full-stack mental health tracking application built with Next.js 16, React 19, and Express.js.

## 📁 Project Structure

```
mental-health-app/
├── frontend/                 # Next.js frontend application
│   ├── app/
│   │   ├── features/mood/   # Mood tracking feature
│   │   │   ├── components/  # React components
│   │   │   ├── hooks/       # Custom React hooks
│   │   │   └── types/       # TypeScript types/JSDoc
│   │   ├── dashboard/       # Dashboard page
│   │   ├── login/           # Login page
│   │   └── layout.jsx       # Root layout
│   ├── lib/                 # Shared utilities
│   ├── public/              # Static assets
│   ├── package.json
│   └── .gitignore
├── backend/                 # Express backend server
│   ├── server.js           # Main server file
│   ├── package.json
│   └── .gitignore
├── .env.example            # Example environment variables
├── .gitignore              # Root .gitignore
└── package.json            # Root package.json for monorepo management
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
```bash
cd mental-health-app
```

2. Install root dependencies (for concurrent task runners):
```bash
npm install
```

3. Install frontend dependencies:
```bash
npm install --workspace=frontend
```

4. Install backend dependencies:
```bash
npm install --workspace=backend
```

### Environment Setup

1. Copy `.env.example` to `.env` (at root level):
```bash
cp .env.example .env
```

2. Update `.env` with your configuration (optional for local development).

### Running the Application

#### Development Mode (Frontend + Backend Together)
```bash
npm run dev
```
This runs both frontend and backend concurrently:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

#### Frontend Only
```bash
npm run dev:frontend
```

#### Backend Only
```bash
npm run dev:backend
```

## 📝 Features

- ✅ User authentication (Login page)
- ✅ Mood tracking (Add/view moods)
- ✅ LocalStorage for data persistence
- ✅ Tailwind CSS styling
- ✅ Responsive design

## 🛠️ Backend API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

(More endpoints can be added as needed)

## 📦 Build & Deploy

### Build Frontend
```bash
npm run build --workspace=frontend
```

### Build Backend
```bash
npm run build --workspace=backend
```

### Production
```bash
npm start
```

## 🔧 Development Notes

- Frontend uses Next.js 16 with App Router
- Backend uses Express 5
- Both use ES modules (`"type": "module"` in package.json)
- Styling with Tailwind CSS v4
- No database configured yet (using localStorage for frontend)

## 📚 Next Steps

- [ ] Connect frontend to backend API
- [ ] Implement database (MongoDB, PostgreSQL, etc.)
- [ ] Add user authentication with JWT
- [ ] Add more mood tracking features
- [ ] Implement analytics/reports

## 📄 License

ISC
