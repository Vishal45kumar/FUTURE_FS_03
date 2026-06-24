# 🏥 Medicare - Hospital Management System

A full-stack clinic Management System designed to streamline healthcare operations with dedicated modules for Patients, Doctors, and Admin. The platform enables appointment booking, service management, and real-time system monitoring.

---

## 🌐 Live Demo

- 👨‍⚕️ Patient Frontend: https://medicare-frontend-csbm.onrender.com  
- 🛠️ Admin Panel: https://medicare-admin-lnot.onrender.com  

---

## 🚀 Features

### 👤 Patient
- Register/Login using Clerk Authentication
- Book appointments with doctors
- Book medical services
- View profile and appointment history
- Track appointment status (pending, completed, cancelled)

---

### 🧑‍⚕️ Doctor
- Manage profile details
- View assigned appointments
- Update appointment status:
  - ✅ Completed
  - ❌ Cancelled
  - ⏳ Pending
  - 🔄 Rescheduled

---

### 🛠️ Admin
- Add/Delete Doctors
- Add/Delete Services
- Manage all appointments
- Cancel any appointment
- View dashboard analytics:
  - Total appointments
  - Doctor-wise earnings
  - System overview

---

## Project Structure

```
FUTURE_FS_03/
│
├── admin/                  # Admin dashboard (React + Vite)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .gitignore
│
├── backend/                # Node.js + Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── .gitignore
│
├── Frontend/                # Patient frontend (React + Vite)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

## 🛠️ Tech Stack

### Frontend (User & Admin)
- React.js
- Vite
- CSS / Tailwind

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

### Authentication
- Clerk

### Payments
- Stripe

### Deployment
- Render

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/your-username/FUTURE_FS_03.git
cd hospital-management


---

## 🔧 Backend Setup
cd backend
npm install

Create `.env` file for backend:
CLERK_PUBLISHABLE_KEY=YOUR CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR CLERK_SECRET_KEY
CLOUDINARY_CLOUD_NAME=YOUR CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR CLOUDINARY_API_SECRET
JWT_SECRET=YOUR JWT_SECRET
MONGO_URI=YOUR MONGODB_URL
STRIPE_SECRET_KEY =YOUR STRIPE_SECRET_KEY


Run backend:
npm start


---

## 💻 Frontend Setup
cd Frontend
npm install

Create `.env` file for Frontend:
VITE_CLERK_PUBLISHABLE_KEY=YOUR VITE_CLERK_PUBLISHABLE_KEY

Run FRONTEND:
npm run dev


---

## 🛠️ Admin Panel Setup
cd admin
npm install

Create `.env` file for admin:
VITE_CLERK_PUBLISHABLE_KEY=YOUR VITE_CLERK_PUBLISHABLE_KEY

Run admin:
npm run dev


## 👨‍💻 Author

**Vishal Kumar**
