document.getElementsByClassName("form").addEventListener('submit',function(reg){
    reg.preventDefault();

    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    const usernameRegex=/^[a-z0-9._]{1-15}$/
    if(!usernameRegex.test(username)){
        displayError("This username dosen't exist. Please use enter a valid username");
        return;
    }
    else(displayError())

    alert('Login successful')
});
