function passwordValidator(){
    let password = prompt("Enter Password:")

if (password.length < 8){
    console.log("Password must have 8 characters")
    return;
}

if (!/[A-Z]/.test(password)){
    console.log("Passwoord must contain atlest one upper case letter")
    return;
}

if(!/[a-z]/.test(password)){
    console.log("Password must contain atleast one lowercase letter");
    return;
}

if (!/[0-9]/.test(password)){
    console.log("Password must have one num")
    return;
}

console.log("Password is valid")


}
passwordValidator();