function handleFormSubmit() {
    let userName = document.getElementById("userNameInput").value
    let userMail = document.getElementById("userMailInput").value
    let userMessage = document.getElementById("userMessage").value


    if (userName.length < 2) {
        alert("Please Enter a Valid Name")
        
    } else if(!(userMail.includes("@")) || !(userMail.includes("."))) {
     alert("Please Provide a Valid Email Address")   
    }
    else if(!userMessage){
        alert("Please Fill in The Message Area")
    }

}