# 🎤 GetAIInterview

An AI-powered interview preparation platform built on the MERN stack (MongoDB, Express, React, Node). Users sign in with Google, upload a resume, and practice AI-generated HR/Technical interviews with automated feedback and scoring.

## 🚀 Features

* Google Sign-In authentication
* Resume upload & parsing (PDF)
* AI-generated, adaptive interview questions
* Technical & HR interview modes
* Automated feedback and scoring engine
* Credit-based usage with Razorpay payments
* Interview history & shareable reports

## 🛠️ Tech Stack

**Frontend:** React, Vite, Tailwind CSS, Redux Toolkit, Framer Motion, Firebase Auth
**Backend:** Node.js, Express, MongoDB (Mongoose), JWT auth, Multer, OpenRouter (AI), Razorpay (payments)

## 📁 Project Structure

```
GetAIInterview/
├── client/     # React frontend (Vite)
└── server/     # Express backend API
```

---

## ⚙️ Running this project locally in VS Code

You need two things installed on your computer first: **Node.js** (v18+, get it from nodejs.org) and a way to **run MongoDB** — either a local install, or a free cloud database (recommended, no install needed).

### 1. Open the project

Unzip this folder and open it in VS Code (`File → Open Folder`). You'll use two terminals side by side — one for `server`, one for `client` (VS Code: `Terminal → Split Terminal`).

### 2. Get a MongoDB connection string

This project needs the same kind of connection string you'd paste into MongoDB Compass. You have two options:

**Option A — MongoDB Atlas (free, cloud, easiest, no install):**
1. Create a free account/cluster at https://www.mongodb.com/cloud/atlas/register
2. Click **Connect** on your cluster → **Drivers** (or **Compass**) → copy the connection string. It looks like:
   `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/`
3. Replace `<username>` and `<password>` with your database user's credentials, and add a database name at the end, e.g. `.../getaiinterview?retryWrites=true&w=majority`
4. In Atlas, under **Network Access**, allow your IP (or `0.0.0.0/0` for local testing).

**Option B — Local MongoDB (if you already run MongoDB / Compass locally):**
Just use: `mongodb://127.0.0.1:27017/getaiinterview`

You can test either string by pasting it straight into MongoDB Compass's "Connect" box — if Compass connects, it will work here too.

### 3. Configure the backend (`server`)

```bash
cd server
npm install
```

A `server/.env` file is **already included and pre-filled** — you only need to edit one line. Open `server/.env` and paste your MongoDB connection string (the same kind you'd paste into MongoDB Compass) into `MONGODB_URL`:
- Atlas: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/getaiinterview`
- Local: `mongodb://127.0.0.1:27017/getaiinterview`

Everything else (`JWTSECRET`, `PORT`, `CLIENT_URL`) is already filled in and ready to go. `OPENROUTER_API_KEY` and the Razorpay keys are optional — leave them blank to start (AI question generation and payments just won't work until you add them).

Start the backend:
```bash
npm run dev
```
You should see `Server is running on port 6000` and `Database connected` in the terminal.

### 4. Configure the frontend (`client`)

Open a **second terminal**:
```bash
cd client
npm install
```

A `client/.env` file is also **already included and pre-filled** with `VITE_SERVER_URL=http://localhost:6000`, so the app works out of the box for browsing the UI. Google Sign-In needs your own Firebase key — open `client/.env` and fill in `VITE_FIREBASE_API_KEY` (from Firebase Console → Project settings → General → Web app config) when you're ready to test login.

Start the frontend:
```bash
npm run dev
```
Open the printed URL (usually http://localhost:5173) in your browser.

### 5. You're running locally 🎉

With both terminals running, the React app at `localhost:5173` talks to the Express API at `localhost:6000`, which talks to your MongoDB database — the same one you could open in Compass to inspect the `users`, `interviews`, and `payments` collections as the app runs.

---

## 📚 Notes

* Neither `.env` file is committed to git — never share your real API keys.
* Payment routes return a clear error instead of crashing if Razorpay keys are left blank, so you can develop everything else without a Razorpay account.
* See `server/ADAPTIVE_ENGINE_README.md` and `server/FEEDBACK_ENGINE_README.md` for details on the adaptive question engine and scoring logic.

## 👩‍💻 Author

Ketaki Kahure
* LinkedIn: https://linkedin.com
* GitHub: https://github.com/KetakiKahure
