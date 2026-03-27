console.log("JS working")
document.getElementById('loginForm').addEventListener('submit',async function(e){
    e.preventDefault();            //Normally when a form submits it refreshes the page but we don't want that so we use preventDefault() method
    const email=document.getElementById('email').value 
    const password=document.getElementById('password').value 

    const response=await fetch("http://localhost:5000/login", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
    })
    const data=await response.json();

    alert(data.message);

})

//flow of the code
// 1. Listen for form submission
// 2. Stop page refresh
// 3. Read email and password from input fields
// 4. Send them to backend using fetch()
// 5. Wait for server response
// 6. Show the response message