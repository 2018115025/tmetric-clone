document.getElementById("signup-submit").addEventListener("click", SignupForm)
var error = document.getElementById("error")
var arr = JSON.parse(localStorage.getItem("data")) || []
function SignupForm(){

    var obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    arr.push(obj)
    localStorage.setItem("data", JSON.stringify(arr))
    if(email == "" || password == ""){
        error.innerText = "Do Not Empty!"
        error.style.color = "red"
    }
    else{
        error.innerText = "Signup Successful!"
        error.style.color = "green"
        setTimeout(()=>{
            window.location.href="../html/login.html"
        }, 3000)
    }
}
