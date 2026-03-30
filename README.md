# 🚨 Suspicious Login Detection System (Node.js + Nodemailer)

## 📌 Overview

This project detects **suspicious login activity** based on changes in **device and browser**.
If a login attempt is made from a different device or browser, the system automatically sends an **email alert** to the user.

---

## 🎯 Features

* 🔐 Detects login device (Mobile/Desktop)
* 🌐 Detects browser (Chrome, Edge, Firefox, Safari)
* ⚠️ Flags suspicious login attempts
* 📩 Sends real-time email alerts
* 🧠 Stores last login info (in-memory)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Email Service:** Nodemailer (Gmail SMTP)
* **Frontend:** HTML, JavaScript (Fetch API)
* **Security:** Google App Password (with 2FA)

---

## 📂 Project Structure

```
project-folder/
│
├── server.js        # Backend server
├── script.js        # Frontend JS logic
├── index.html       # Login UI
├── .env             # Environment variables (NOT pushed to GitHub)
├── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd <project-folder>
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```
EMAIL=your_email@gmail.com
PASS=your_app_password
```

---

### 🔐 How to get App Password

1. Go to Google Account → Security
2. Enable **2-Step Verification**
3. Go to **App Passwords**
4. Generate password for "Mail"
5. Copy and paste into `.env`

---

### 4️⃣ Run the server

```
node server.js
```

Expected output:

```
🚀 Server running on port 5000
✅ Email server is ready
```

---

### 5️⃣ Run frontend

* Open `index.html` in browser
  OR
* Use VS Code Live Server

---

## 🔄 How It Works

1. User enters email & password on frontend
2. Data is sent to backend (`/login`)
3. Backend extracts:

   * Device type (Mobile/Desktop)
   * Browser (Chrome/Edge/etc.)
4. Compares with last login data
5. If mismatch → ⚠️ Suspicious login detected
6. Sends email alert via Nodemailer

---

## 📩 Email Flow

* **Sender (Fixed):** Your Gmail (from `.env`)
* **Receiver (Dynamic):** User's email input

---

## 🔑 Key Concepts

### ✔️ 2-Step Verification

* Required to enable App Password
* Adds security layer to Gmail

### ✔️ App Password

* 16-digit secure key
* Used instead of Gmail password
* Allows backend to send emails safely

---

## 🧪 Testing

### Normal Login

* Same device + same browser
  → No email sent

### Suspicious Login

* Different browser/device
  → Email alert triggered

---

## ⚠️ Limitations

* Uses in-memory storage (resets on server restart)
* No real authentication (demo purpose)
* No database integration

---

## 🚀 Future Improvements

* Add database (MongoDB / MySQL)
* Track IP address & location
* Add JWT authentication
* Deploy backend (Render / Railway)
* Use professional email services (SendGrid / AWS SES)

---

## 🛡️ Security Notes

* Never commit `.env` file to GitHub
* Do not expose App Password publicly
* Use `.gitignore` to protect sensitive data

---

## 🧠 Learning Outcomes

* Backend API creation with Express
* Handling HTTP requests (POST)
* Using Nodemailer for email automation
* Understanding authentication & security
* Detecting anomalies in user behavior

---

## 👨‍💻 Author

* Navya Sharma

---

## ⭐ Final Note

This project demonstrates a **basic security system** used in real-world applications to detect suspicious activity and notify users instantly.

---
