var finalItemList = [];
var upperindex = 0;
// var finalfinal = [];
var item = {};
var i1 = 0
var all = ['product1', 'product2', 'product3', 'product4','product5', 'product6', 'product7', 'product8','product9','product10', 'product11', 'product12', 'product13', 'product14', 'product15'];
var addcart = (function AddToCart() {
  var count = 0;
  const cardBtn = document.querySelectorAll(".store-item-icon");
  
  cardBtn.forEach((btn) => {

    btn.addEventListener("click", (event) => {
      // console.log("button works");
      // console.log(event.target);
      if (
        event.target.parentNode.parentNode.firstChild.nextSibling.classList.contains(
          "store-item-icon"
        )
      ) {
       
        let fullPath =
          event.target.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode.firstChild.nextElementSibling.firstChild
            .nextElementSibling.src;
        let pos = fullPath.indexOf("images") + 6;
        let partPath = fullPath.slice(pos);
        item.img = `cart-images${partPath}`;
        let productName =
          event.target.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode.lastChild.previousElementSibling.firstChild
            .nextElementSibling.textContent;
        item.name = productName;

        let price =
          event.target.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode.lastChild.previousElementSibling.lastChild.textContent;
        let finalPrice = price.slice(1).trim();
        item.price = finalPrice;
        console.log("the items are:", item);

        localStorage.setItem(all[i1], JSON.stringify(item));

        i1++    
        

        
        
        // console.log("final list item 0:", finalItemList[upperindex]);
        // console.log("final list item 1:", finalItemList[1]);
        // upperindex++;
        // console.log(upperindex);
        // localStorage.setItem("allitems", JSON.stringify(item));
        // console.log(item.img);

        const cartItem = document.createElement("li");

        cartItem.innerHTML = `
     <a href="#" class="image">
      <img src="${item.img}" alt="">
     </a>
     <div class="cart-item-desc">
      <h6><a href="#">${item.name}</a></h6>
      <p>1x - <span>#</span><span class="price">${item.price}</span>
      </p>
     </div>
   `;
        //select cart ul
        const cart = document.querySelector(".cart-list");
        const total = document.querySelector(".total");

        cart.insertBefore(cartItem, total);
        alert("item added to cart");

        showTotals();
        // console.log("outer item: ", item);
      }    
      
      localStorage.setItem("i1", i1);
      
    });
  });
  
  finalItemList.push(item);
  
  // setTimeout(()=> {
  //   console.log("final list item test:", finalItemList);
  // }, 15000)
    

  
  // finalfinal[count] = item;
  
  // setTimeout(function(){
  //   console.log(finalfinal[count])
  // }, 20000)
  
  
  count++;

  // localStorage.setItem("finalList0", JSON.stringify(finalItemList[0]));
  // localStorage.setItem("finalList1", JSON.stringify(finalItemList[1]));

  function showTotals() {
    const total = [];
    const items = document.querySelectorAll(".price");
    items.forEach(function (item) {
      total.push(parseInt(item.textContent));
    });
    console.log(total);

    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);
    console.log(totalMoney);
    document.querySelector(".cart-badge").textContent = total.length;
    document.querySelector(".d-block").textContent = totalMoney;
  }
  // var toRet = item;
  // console.log("local test item", item);
  // return toRet;
 
  

})();


// console.log("x: ", finalfinal);
// setTimeout(()=>{
//   console.log("finalfinalfinal: ", addcart);
// },10000) 

//const cartRender = {
// console.log(finalItm)

export default addcart;

// }


// add items to cart

// const cartBtn = document.querySelector(".store-item-icon");
// cartBtn.addEventListener("click", ()=>{
//     console.log("span clicked")
// })

// function () {

//   cardBtn.forEach(function (btn) {
//     btn.addEventListener("click", (event) => {
//         console.log("button works")
//       console.log(event.target);
//     });
//   });
// };

