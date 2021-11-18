validateForm=()=>{
    let logForm = document.forms["loginform"]; 
    let userName = logForm["username"].value.trim(); 
    let passWord = logForm["password"].value.trim();
    let confirmPassword = logForm ["confirmpassword"].value.trim(); 
    //empty input validations
    if (userName=="" && passWord =="" && confirmPassword=="") {
        alert ("All Fields Required");
        logForm['username'].focus();
        return false;
    }
    else if (userName =="") {
        alert("Please Provide Username");
        logForm['username'].focus(); 
        return false; 
    }
    else if (passWord=="") {
        alert("Please Provide Password")
        logForm['password'].focus();
        return false;
    }
    else if (confirmPassword=="") {
        alert("Please Confirm Password");
        logForm['confirmpassword'].focus();
        return false;
    }
    //character length validations
    if (passWord.length < 6) {
        alert("Please Provide minimum Password of 6 character");
        logForm["password"].focus();
        return false;
    }
    if (userName.length < 6) {
        alert("Please Provide minimum username of 6 character");
        logForm["username"].focus();
        return false;
    }
    //validation for the equality of password and confirm password
    if (passWord!==confirmPassword) {
        alert("Please Confirm the correct password");
        logForm['confirmpassword'].focus();
        return false;
    }
    //validation if the input fields are not empty
    if (userName!=="" && passWord!=="" && confirmPassword!=="" ) {
        alert("Welcome To Your Profile");
        return true;
    }

}
