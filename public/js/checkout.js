//Parse items data and total before anything
const total = localStorage.getItem("total")
document.querySelector(".ctt").innerHTML += total;

let i1here = localStorage.getItem("i1");




const fproduct1Name = localStorage.getItem("prod1");
const fproduct2Name = localStorage.getItem("prod2");
const fproduct3Name = localStorage.getItem("prod3");
const fproduct4Name = localStorage.getItem("prod4");
const fproduct5Name = localStorage.getItem("prod5");

const ArrFinaleName = [fproduct1Name, fproduct2Name, fproduct3Name, fproduct4Name, fproduct5Name]

//Each product quantity
let pq1 = localStorage.getItem("fp1")
let pq2 = localStorage.getItem("fp2")
let pq3 = localStorage.getItem("fp3")
let pq4 = localStorage.getItem("fp4")
let pq5 = localStorage.getItem("fp5")


const ArrFinalQ = [pq1, pq2, pq3, pq4, pq5]

//each product final price depending on the quantity
let fprice1 = localStorage.getItem("toti1");
let fprice2 = localStorage.getItem("toti2");
let fprice3 = localStorage.getItem("toti3");
let fprice4 = localStorage.getItem("toti4");
let fprice5 = localStorage.getItem("toti5");


const ArrFinalPrice = [fprice1, fprice2, fprice3, fprice4, fprice5]

const buttonEstimation = document.querySelector(".fbt")
for (let i=0; i< i1here; i++) {
    let holder = document.createElement("ul");
    holder.classList.add("list-unstyled");
    // let singleTotalHolder = document.createElement("li");
    // singleTotalHolder.classList.add('mb-3')
    holder.innerHTML = ` <li class="mb-3"><span>${ArrFinalQ[i] + "X"} <span></span>${ArrFinaleName[i]}</span>${"₦" + ArrFinalPrice[i]}</li>`
    const cartDet = document.querySelector(".cart-detail");
    cartDet.insertBefore(holder, cartDet.childNodes[0])
    // cartDet.appendChild(holder);
    // console.log(singleTotalHolder);

    // console.log(listFather)
    // listFather.appendChild(singleTotalHolder);

}

//grab html of receipt after render here...

// Hold form values 

let email;
let phone;
let firstName;
let lastName;
let subject;
let text;
let address;
let address2;
let city;
let state; 
let zip;
let dbt;
let payStack;




let payButton = document.querySelector(".payaction");
payButton.addEventListener("click", (e)=> {
    e.preventDefault()
    email = document.querySelector("#email").value;
    
    //for text.
    phone = document.querySelector("#phone").value;
    // localStorage.setItem('phone', phone)
    lastName = document.querySelector("#lname").value;
    firstName = document.querySelector("#fname").value;
    dbt = document.querySelector("#customRadio1").value;
    console.log("radio hahaha: " + dbt);
    
    
    subject = "Testing Maktaris Herbals";
    text = dbt + " " + phone + " " + " " + lastName + " " + firstName;

    //.. Ready html string to parse as text to sendmail options.
    var receipt = `${phone}`

    
    console.log(email, phone, lastName, firstName)
    const data = {
        email,
        subject,
        text
      };

      $.post("/product-checkout", data, function() {
        console.log("Server recieved our data")
      })
    //   alert("You message as been recieved. You will receive response shortly")
})

// $('.pay').on('submit', (e) => {
    
// });

