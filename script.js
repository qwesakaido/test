function Func1(inputID, errorID){
    let inputElement = document.getElementById(inputID);
    let errorElement = document.getElementById(errorID);

    inputElement.addEventListener("input", function(){
        errorElement.textContent = "";
        inputElement.classList.remove("error-input");
    });
}

Func1("name", "nameError");
Func1("email1", "emailError");
Func1("pass", "passError");

function Func2(){
    let nameV = document.getElementById("name").value;
    let emailV = document.getElementById("email1").value;
    let phoneV = document.getElementById("phone").value;
    let passV = document.getElementById("pass").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");

    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";

    let isValid = true;

    if(!nameV){
        nameError.textContent = "Поле обязательно для заполнения";
        document.getElementById("name").classList.add("error-input");
        isValid = false;
    }

    if(!emailV){
        emailError.textContent = "Поле обязательно для заполнения";
        document.getElementById("email1").classList.add("error-input");
        isValid = false;
    }

    if(!passV){
        passError.textContent = "Поле обязательно для заполнения";
        document.getElementById("pass").classList.add("error-input");
        isValid = false;
    }

    if (isValid) {
        alert("Имя: " + nameV + "\nПочта: " + emailV + "\nТелефон: " + phoneV + "\nПароль: " + passV);
    }
    else{
        return false;
    }

    document.getElementById("name").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pass").value = "";
    
}