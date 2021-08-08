let form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    //Recuperation of the inputs Data
        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let ConfirmPassword = document.getElementById("password2");
    //Conditions on the Inputs
if(username.value==="" || username.value.length<3 || username.value.length>15){
    username.style.border="2px solid red";
    const error1=document.getElementById("error1").textContent="You must use between 3 and 15 caracters";
}else{
    username.style.border="2px solid fuchsia";
}
const expression =/^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
if(expression.test(email.value)){
    email.style.border="2px solid fuchsia";
}else{
    email.style.border="2px solid red";
    const error2 = document.getElementById("error2").textContent="l'email n'est pas valide";    
}
if(password.value==="" || password.value.length<3 || password.value.length>15){
    password.style.border="2px solid red";
    const error3 = document.getElementById("error3").textContent="You must use between 3 and 15 caracters"
}else{
    password.style.border="2px solid fuchsia";
}
if(ConfirmPassword.value!=password.value || ConfirmPassword.value===""){
    ConfirmPassword.style.border="2px solid red";
    const error4 = document.getElementById("error4").textContent="Les deux mots de passes ne sont pas égaux";
}else{
    ConfirmPassword.style.border="2px solid fuchsia";
}
});
