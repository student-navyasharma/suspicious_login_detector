const nodemailer = require('nodemailer')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

// Verify transporter (IMPORTANT DEBUG STEP)
transporter.verify((error, success) => {
    if (error) {
        console.log("❌ Email config error:", error)
    } else {
        console.log("✅ Email server is ready")
    }
})

// Temporary storage
let users = {}

// Test route
app.get('/', (req, res) => {
    res.send('Server is running')
})

// Login route
app.post('/login', (req, res) => {

    const { email, password } = req.body

    console.log("\n--- LOGIN ATTEMPT ---")
    console.log("Email:", email)
    console.log("Password:", password)

    const useragent = req.headers['user-agent']
    console.log("User Agent:", useragent)

    // Device detection
    let device = "Desktop"
    if (useragent.toLowerCase().includes("mobile")) {
        device = "Mobile"
    }

    // Browser detection
    let browser = "Unknown"

    if (useragent.includes("Edg")) browser = "Edge"
    else if (useragent.includes("Chrome")) browser = "Chrome"
    else if (useragent.includes("Firefox")) browser = "Firefox"
    else if (useragent.includes("Safari")) browser = "Safari"

    console.log("Device:", device)
    console.log("Browser:", browser)

    if (users[email]) {

        const lastDevice = users[email].device
        const lastBrowser = users[email].browser

        if (lastDevice !== device || lastBrowser !== browser) {

            console.log("⚠️ Suspicious login detected!")

            const mailOptions = {
                from: `"Security Alert 🚨" <${process.env.EMAIL}>`,
                to: email,
                subject: "Suspicious Login Alert",
                text: `
New login detected!

Device: ${device}
Browser: ${browser}

If this wasn't you, please secure your account immediately.
                `
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("❌ Error sending email:", error)
                } else {
                    console.log("✅ Email sent:", info.response)
                }
            })

        } else {
            console.log("✅ Normal login (same device & browser)")
        }

    } else {
        console.log("🆕 First time user login")
    }

    // Update latest login
    users[email] = {
        device,
        browser
    }

    res.json({ message: "Login processed successfully" })
})

// Start server
app.listen(5000, () => {
    console.log('🚀 Server running on port 5000')
})