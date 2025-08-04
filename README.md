# MERN Stack Registration App

A full-stack application built with MongoDB, Express.js, React, and Node.js (MERN) for managing intern and volunteer registrations. Admins can view a leaderboard of applicants.

---## 📁 Project Structure

```
mern-app/
├── backend/               # Express backend
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   └── server.js          # Main backend server
│
├── frontend/              # React frontend
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # React components
│       │   ├── Register.js
│       │   ├── Admin.js
│       │   └── Home.js
│       └── App.js         # Root React component
│
└── README.md              # Project documentation
```

## 🚀 Features

- Register as Intern or Volunteer
- Admin panel to view applicants
- Leaderboard with real-time updates
- Material UI-based responsive design
- Form validation
- REST API integration with Axios

---

## 🛠 Tech Stack

- **Frontend:** React, Material UI (MUI), Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose

---



## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ravi8345/mern-app.git
cd mern-app
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Start the Backend Server

```bash
cd ../backend
npm start
```

### 5. Start the Frontend Server

```bash
cd ../frontend
npm start
```

---

## 🔒 Environment Variables

Create a `.env` file in the `backend` folder with:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 📌 TODOs

- Authentication for admin
- Form enhancements and error handling

---

## 📄 License

MIT

---

## 👤 Author

**Ravi8345**  
GitHub: [github.com/Ravi8345](https://github.com/Ravi8345)
