// import ac from "./script.js";
// console.log(ac);
const storedData = JSON.parse(localStorage.getItem("allitems"));
const storedList = JSON.parse(localStorage.getItem("finalList0"));
const storedList2 = JSON.parse(localStorage.getItem("finalList1"));

const p1 = JSON.parse(localStorage.getItem("product1"));
const p2 = JSON.parse(localStorage.getItem("product2"));
const p3 = JSON.parse(localStorage.getItem("product3"));
const p4 = JSON.parse(localStorage.getItem("product4"));
const p5 = JSON.parse(localStorage.getItem("product5"));
const p6 = JSON.parse(localStorage.getItem("product6"));
const p7 = JSON.parse(localStorage.getItem("product7"));
const p8 = JSON.parse(localStorage.getItem("product8"));
const p9 = JSON.parse(localStorage.getItem("product9"));
const p10 = JSON.parse(localStorage.getItem("product10"));
const p11 = JSON.parse(localStorage.getItem("product11"));
const p12 = JSON.parse(localStorage.getItem("product12"));
const p13 = JSON.parse(localStorage.getItem("product13"));
const p14 = JSON.parse(localStorage.getItem("product14"));
const p15 = JSON.parse(localStorage.getItem("product15"));

const pHolds = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15]

const ilength = localStorage.getItem("i1");

var productHolder = [
  
];
for(let i = 0; i < ilength; i++) {
  productHolder.push(pHolds[i])
}
console.log("i am holding" , productHolder)

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p6);
console.log(p7);
console.log(p8);
console.log(p9);
console.log(p10);
console.log(p11);
console.log(p12);
console.log(p13);
console.log(p14);
console.log(p15);
//complete all arrays up to 16.

var prodNames = []
for (let i = 1 ; i<16; i++) {
  prodNames.push(`prod${i}`)
}

var quantityList = []
for (let i = 1; i<16; i++) {
  quantityList.push(`fp${i}`)
}

var perItem = []
for (let i = 1; i<16; i++) {
  perItem.push(`toti${i}`)
}


for (let i = 0; i < ilength; i++) {
  var cartTray = document.createElement("tr");

  
  

  cartTray.innerHTML = `<td>
    <div class="media">
      <div class0="d-flex">
        <a href="#">
          <img class="img-fluid rounded box-shadow" src="${productHolder[i].img}" alt="">
        </a>
      </div>
      <div class="media-body">
        <p>${productHolder[i].name}</p>
      </div>
    </div>
  </td>
  <td>
    <h5>${productHolder[i].price}</h5>
  </td>
  <td>
    <div class="d-flex justify-content-center align-items-center">
      <button class="btn-product btn-product-up"> <i class="slicku fas fa-minus"></i>
      </button>
      <input class="form-product" type="number" name="form-product" value="1">
      <button class="btn-product btn-product-down"> <i class="slickd fas fa-plus"></i>
      </button>
    </div>
  </td>
  <td>
    <button style="border:none; background-color: white; padding-left:7px;" type="submit" class="exitItem"><i class="fa fa-trash"></i>
    </button>
  </td>
  <td>
  <span>₦</span>
    <h5 class="totalup">${productHolder[i].price}</h5>
  </td>
  `;
  const cartTable = document.querySelector(".tbody");
  cartTable.appendChild(cartTray);
  
  localStorage.setItem(prodNames[i], productHolder[i].name)

  localStorage.setItem(quantityList[i], document.querySelectorAll(".form-product")[i].value);

  localStorage.setItem(perItem[i], document.querySelectorAll(".totalup")[i].innerHTML);

  

}


const allPlusButtons = document.querySelectorAll(".btn-product-down");
const allMinusButtons = document.querySelectorAll(".btn-product-up");

const everyExitItem = document.querySelectorAll(".exitItem");
let totalAfterUpdate = document.querySelectorAll(".totalup");
let finalTotal = document.querySelector(".finalTotal");
// let formQuantity = ;
var finalTotalInt = 0;
// console.log(parseInt(totalAfterUpdate[0].innerHTML));
console.log()
console.log(totalAfterUpdate[1])

  for(let i = 0; i<totalAfterUpdate.length; i++) {
    finalTotalInt += parseInt(totalAfterUpdate[i].textContent)
    
  }
  
  console.log("x: " + finalTotalInt)
  finalTotal.innerHTML = finalTotalInt; 
  localStorage.setItem("total", JSON.stringify(finalTotalInt))
  

  // localStorage.setItem("total", JSON.stringify(pr.value))// quantity
  
  
let iholder = 0;
// let price = document.querySelector("") 
  for (let i = 0; i < allPlusButtons.length; i++) {
    allPlusButtons[i].addEventListener("click", (event) => {
      if(event.target.parentNode.classList.contains('btn-product')){
      console.log("+ Button is responding master.");    
      var eachTotal =  parseInt(event.target.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.lastChild.previousElementSibling.textContent)
      var currentProductPrice = parseInt(event.target.parentNode.parentNode.parentNode.previousElementSibling.lastChild.previousElementSibling.textContent);
      console.log(currentProductPrice);

      eachTotal += currentProductPrice;
      // localStorage.setItem(perItem[i], eachTotal);
      
      totalAfterUpdate[i].innerHTML = eachTotal;
      console.log(totalAfterUpdate[i].innerHTML);

      console.log(finalTotalInt)
      // From here i addded the current product price being clicked on to the finaltotal: HAHAHAHAH GENIUS>>>>> 
      console.log(currentProductPrice);
      finalTotalInt += currentProductPrice
      console.log(finalTotalInt)
      finalTotal.innerHTML = finalTotalInt;  
      localStorage.setItem("total", JSON.stringify(finalTotalInt))
      console.log(document.querySelectorAll(".form-product")[i].value)  

      localStorage.setItem(quantityList[i], document.querySelectorAll(".form-product")[i].value);
      localStorage.setItem(perItem[i], totalAfterUpdate[i].innerHTML)


        
      }      
    });
  
    // on click navigate the dom to the add total:
  }
  
  for (let i = 0; i< totalAfterUpdate.length; i++) {
    iholder += parseInt(totalAfterUpdate[i].textContent);
    

  }
  console.log(iholder)
  finalTotalInt = iholder;
  console.log(finalTotalInt);




for(let i = 0; i < allMinusButtons.length; i++) {
  allMinusButtons[i].addEventListener("click", (event) => {
    // console.log(event.target.parentNode.classList)
    if(event.target.parentNode.classList.contains('btn-product')){
      console.log("- Button is responding master.");    
      var eachTotal =  parseInt(event.target.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.lastChild.previousElementSibling.textContent)
      var currentProductPrice = parseInt(event.target.parentNode.parentNode.parentNode.previousElementSibling.lastChild.previousElementSibling.textContent);
      console.log(currentProductPrice);
      eachTotal -= currentProductPrice;
      totalAfterUpdate[i].innerHTML = eachTotal;
      console.log(totalAfterUpdate[i].innerHTML);
   
      console.log(eachTotal)
      // localStorage.setItem(perItem[i], eachTotal);
      finalTotalInt -= currentProductPrice
      finalTotal.innerHTML = finalTotalInt;  
      localStorage.setItem("total", JSON.stringify(finalTotalInt))

      console.log(document.querySelectorAll(".form-product")[i].value)  
      localStorage.setItem(quantityList[i], document.querySelectorAll(".form-product")[i].value);
      localStorage.setItem(perItem[i], totalAfterUpdate[i].innerHTML)



      
    }
    
    
  });


}




for (let i = 0; i < everyExitItem.length; i++) {
  everyExitItem[i].addEventListener("click", ()=>{
    
    let multiplesingle = parseInt(totalAfterUpdate[i].textContent);

    finalTotalInt -= multiplesingle
    finalTotal.innerHTML = finalTotalInt
    let toDelete = everyExitItem[i].parentElement.parentElement
    console.log("a" + productHolder[i].name)
    
    console.log("all" , document.querySelectorAll("tr")[i].innerHTML)

    toDelete.remove()
    // console.log(delete productHolder[i])
    
    console.log(localStorage.removeItem(prodNames[i]))
    
    console.log(localStorage.removeItem(quantityList[i]));
  
    console.log(localStorage.removeItem(perItem[i]));
  	

    localStorage.setItem('pp', productHolder)
    localStorage.setItem("total", JSON.stringify(finalTotalInt))
    
   


  

    // finalTotalInt = finalTotalInt - 
  })
  
}



// console.log(document.querySelectorAll(".form-product")[0].value);

// store all items gotten from gridshop in array
// in a loop append the items to carttable

// const before = document.querySelector('.before')

// cartTable.insertBefore(cartTray, before);
// console.log(storedList)
// $(document).ready(function() {
//     cartTable.insertBefore(cartTray, before);

// });
// console.log(storedList2)
// // storedList.forEach((listval)=> {
// //     JSON.parse(listval)
// //     console.log(listval)
// // })
// // const storedData = localStorage['allitems']
// console.log(storedData)
// // console.log(storedList)




// far fa-trash-alt:: trash can for future delete property...