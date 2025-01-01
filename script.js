function sendEmail(){
    let parms = {
        subject: document.getElementById("subject").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }

        emailjs.send("service_t52s6k3","template_2cfp00t",parms).then(alert("Email Sent!!!"))
}