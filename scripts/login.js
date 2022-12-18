var data = JSON.parse(localStorage.getItem("data"));
var error = document.getElementById("error")
document.getElementById("login-submit").addEventListener("click", LoginData)

function LoginData(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    data.map((el)=>{
        if(el.email == email && el.password == password){
            error.innerText = "Login Successful!"
            error.style.color = "green"
            setTimeout(()=>{
                window.location.href="../index.html"
            }, 3000)
        }else if(email == "" && password == ""){
            error.innerText = "Do Not Empty!"
            error.style.color = "red"
        }else{
            error.innerText = "Please Enter a Valid Credentials!"
            error.style.color = "red"
           
        }
    })
}