function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_Tvavak","template_i9dt3nn",parms).then(alert("Email Sent!!"))
}