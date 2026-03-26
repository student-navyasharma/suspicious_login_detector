const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())

let users={}

app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body

    console.log("Email:", email)
    console.log("Password:", password)

    // Temporary response
    res.json({ message: "Login received successfully" })

    const useragent=req.headers['user-agent']
    console.log("User Agent:", useragent)

    let device="Desktop"
    if(useragent.toLowerCase().includes("mobile")){
        device="Mobile"
    }
    console.log("Device Type:", device)


   let browser = "Unknown"

// Check specific browsers first
if (useragent.includes("Edg")) browser = "Edge"
else if (useragent.includes("Chrome")) browser = "Chrome"
else if (useragent.includes("Firefox")) browser = "Firefox"
else if (useragent.includes("Safari")) browser = "Safari"

console.log("Browser:", browser)






 if(users[email]){
        const lastDevice=users[email].device
        const lastBrowser=users[email].browser

        if(lastDevice!==device || lastBrowser!==browser){
            console.log("Suspicious login detected for user:", email)
        }else{
            console.log("Login from known device and browser for user:", email)
        }
    }else{
        console.log("New user login detected:", email)
    }

    users[email]={
        device:device,
        browser:browser 
    }
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})





// Import express → used to create backend server
// Import cors → allows frontend and backend to communicate

// Create app → this is our backend server instance

// Use cors → allow requests from frontend (different port)
// Use express.json → allows server to read JSON data sent by frontend

// Create test route "/" → used to check if server is running

// Create POST "/login" route → handles login requests from frontend

// Extract email and password from request body → data sent by frontend

// Print email and password in terminal → for debugging/testing

// Send response back to frontend → confirmation message

// Start server on port 5000 → backend starts running and listens for requests

// This server receives login data from frontend, processes it, and sends a response back




 // Get user-agent string from request headers (info sent automatically by browser)

 // User-agent contains details about user's device, browser, and OS

 // Detect device type (Mobile or Desktop) by checking "mobile" keyword

 // Detect browser (Chrome, Firefox, Safari) by checking keywords in user-agent

 // Print detected device and browser in terminal for verification



 // Edge user-agent also contains "Chrome"
// So we must check "Edg" before "Chrome"
// Otherwise Edge will be wrongly detected as Chrome