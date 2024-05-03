let icon = document.getElementById("icon");
let password = document.getElementById("password");

icon.onclick = function() {
    if(password.type == "password"){
        password.type = "text";
        icon.src = "img/eye.png";
    }else{
        password.type = "password";
        icon.src = "img/hide.png";
    }
}

function myFunction(){
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
