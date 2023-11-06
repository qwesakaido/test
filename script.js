function Func1(){
    let nameV = document.getElementById("name").value;
    let emailV = document.getElementById("email1").value;
    let phoneV = document.getElementById("phone").value;
    let passV = document.getElementById("pass").value;

    if (!nameV || !emailV || !passV){
        alert("Поля должны быть заполнены!")
        return false;
    }
    else{
        alert("Имя: " + nameV + "\nПочта: " + emailV + "\nНомер: " + phoneV + "\nПароль: " + passV)
        return true;
    }

    document.getElementById("name").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pass").value = "";
    
}