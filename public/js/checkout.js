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
    holder.innerHTML = ` <li class="mb-3"><span>${ArrFinalQ[i] + "X"} <span></span>${ArrFinaleName[i]}</span>${" ₦" + ArrFinalPrice[i]}</li>`
    const cartDet = document.querySelector(".cart-detail");
    cartDet.insertBefore(holder, cartDet.childNodes[0])
    // cartDet.appendChild(holder);
    // console.log(singleTotalHolder);

    // console.log(listFather)
    // listFather.appendChild(singleTotalHolder);

}

let today = new Date();
console.log(today);

let dataForRec = document.querySelector(".cart-detail")
//grab html of receipt after render here...
console.log("Table to parse:", dataForRec.outerHTML);
// Hold form values 

let infodiv = dataForRec.outerHTML;
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




dbt = document.querySelector("#customRadio1").checked;
console.log("xxxxxxxxxxx", dbt)

let payButton = document.querySelector(".payaction");
payButton.addEventListener("click", (e)=> {
    e.preventDefault()
    email = document.querySelector("#email").value;
    
    //for text.
    phone = document.querySelector("#phone").value;
    // localStorage.setItem('phone', phone)
    lastName = document.querySelector("#lname").value;
    firstName = document.querySelector("#fname").value;
    dbt = document.querySelector("#customRadio1").checked;
    address = document.querySelector("#address").value;
    address2 = document.querySelector("#address2").value;
    zip = document.querySelector("#zippostalcode").value;
    city = document.querySelector("#towncity").value;
    state = document.querySelector("#statename").value;

    console.log("radio hahaha: " + dbt);
    
    if(dbt) {
        subject = "Testing Maktaris Herbals";
        // text = dbt + " " + phone + " " + " " + lastName + " " + firstName;
    
        //.. Ready html string to parse as text to sendmail options.
        var text = `<div style="height: 100vh; border: 1px solid rgb(41, 216, 41); border-radius: 2px; font-family:Verdana, Geneva, Tahoma, sans-serif; color: grey; font-size: small;">      
        <div style="margin: 8px;">
         <div style="width:auto; height:50px; text-align: center; color: white; font-size: 20px; background-color:greenyellow;"> <p style="margin:0; position: relative; top: 10px;">Thank you for your Order!</p> </div>
         <p>Hi ${firstName}</p>
         <p style="margin-bottom: 1;">Thanks for your order. It’s on-hold until we confirm that payment has been received. In the meantime, here’s a reminder of what you ordered:</p>
         <strong style="font-style: oblique; ">SEND PROOF OF PAYMENT TO THIS WHATSAPP NUMBER:</strong>
         <p style="margin: 0;">+2347039773982</p>
         <h5 style="color: orange;">Our Bank details:</h5>
         <strong style="color: green;">MAKTARIS HERBALS</strong>
         <ul>
             <li>Bank: <strong style="font-size: x-small;">First Bank plc</strong></li>
             <li>Account number: <strong style="font-size: x-small;">2034776995</strong></li>
             <li>Account Name: <strong style="font-size: x-small;">Maktaris signature</strong></li>
             <!--Fetch order date here...-->
             <h3 style="text-decoration: underline;">${today}</h3>
             <h2 style="color: green;text-decoration: underline;">Your Order:</h2>
             <!--Table for product draft should be created from checkout page as an indpendent string... and templated into main html string-->                    
         </ul>
    
         ${infodiv}
    <div>
     <div style="width: 160px; display:inline-flex">
         <h6 style="border: 1px solid green; color: red;">${address} ${zip}, ${city}, ${state}<p>${phone}, ${email}</p></h6>
       
         
         
         
    
         </div>
         <div style="width: 160px; display: inline-flex;">
         <h6 style="border: 1px solid green; color: red;">${address2} ${zip}, ${city}, ${state}<p>${phone}, ${email}</p></h6>
             </div>          
    </div>
        </div>
         <!-- <div style="width: 180px;">
             <h1 style="border: 1px solid green; color: red; position: relative; left: 200px;">Total amount</h1>
         </div> -->
    
    
     </div>`
    
        
        console.log(email, phone, lastName, firstName)
        const data = {
            email,
            subject,
            text
          };
    
          $.post("/product-checkout", data, function() {
            console.log("Server recieved our data")
          })
    } else {
        alert("Please tick direct bank transfer to proceed...")
    }
  
      alert("Order succeeded! payment receipt will be sent to your email shortly")
})

// $('.pay').on('submit', (e) => {
    
// });

