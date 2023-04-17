const username = document.querySelector('#username');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const dob = document.querySelector('#dob');
const email = document.querySelector('#email');
const pnumber = document.querySelector('#pnumber');

const submit = document.querySelector('#submit');
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    //username validation
    if(username.value.trim() ==''){
        error(username, 'username can not be empty');
    }
    else if(username.value.trim() =='null'){
        error(username, 'username can be a name');
    } else{
        success(username);
    }
    //password validation
    if(password.value.trim() ==''){
        error(password, 'password can not be empty');
    }
    else if(password.value.length<6){
        error(password, 'Enter minimum 6 character');
    } else{
        success(password);
    }
    //confirm password validation
    if(password.value.trim() ==''){
        error(password, 'comfrim password can not be empty');
    }
    else if(password.value !== cpassword.value){
        error(cpassword, 'password & confrim password should be same');
    } else{
        success(cpassword);
    }
    //date of birth validation
    if(dob.value.trim()==''){
        error(dob, 'Date Of Birth  can not be empty');
    }
    else if(Date(dob.value)> new Date()){
        error(dob, 'Enter your current date of birth');
    } else{
        success(dob);
    }
     //email validation
     if(email.value.trim() == ""){
        error(email, 'email can not be empty');
    }
    else if(email.value.indexOf("@")< 1 || email.value.lastIndexOf(".")< email.value.indexOf("@")+3 || email.value.lastIndexOf(".")>= email.value.length) {
        error(email, 'Enter currect email');
    } else{
        success(email);
    }
     //username validation
     if(pnumber.value.trim() ==''){
        error(pnumber, 'pnumber can not be empty');
    }
    else if(pnumber.value.length < 10){
        error(pnumber, 'Enter the currect 10 digit number');
    } else{
        success(pnumber);
    }


});
function error(element,msg){
    element.style.border= '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';
}
function success(element){
    element.style.border= '3px green solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';

}
let popup= document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

