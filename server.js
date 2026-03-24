const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body

    console.log("Email:", email)
    console.log("Password:", password)

    // Temporary response
    res.json({ message: "Login received successfully" })
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