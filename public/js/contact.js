console.log("contact script activated")

let fname;
let lname;
let phone;
let email;
let subject;
let message;
let sendBtn;

sendBtn = document.querySelector(".sendBtn");

sendBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    console.log("send button is responding...")
    fname = document.querySelector("#form_name").value;
    lname = document.querySelector("#form_name1").value;
    phone = document.querySelector("#form_phone").value;
    email = document.querySelector("#form_email").value;
    subject = document.querySelector("#form_subject").value;
    message = document.querySelector("#form_message").value;
    text = message + "\nphone: " + phone +"\n Name: " + fname + " " + lname;



    console.log(email, phone, lname, fname)
    const data = {
        email,
        subject,
        text
      };

      $.post("/contact", data, function() {
        console.log("Server recieved our data in contact post route")
      })
})

