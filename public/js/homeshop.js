var alertlist = document.getElementsByClassName("alert")
var closealertlist = document.getElementsByClassName("close")

console.log("shop.js is working...")


// const eyes = document.getElementsByClassName('.eye')
// const eacheyes = document.getElementsByClassName]('.singleproduct')
let eyeArray = document.getElementsByClassName('eye')
let singleProdsArray = document.getElementsByClassName('singleproduct')


let pageToBlur = document.querySelector(".page-content")
let pageTitle = document.querySelector(".page-title")
let closeSingle = document.querySelectorAll(".closesingle")

for(let i = 0; i < eyeArray.length; i++) {

    eyeArray[i].addEventListener("click", ()=> {
        console.log("eye " + i + " has been clicked.")
        singleProdsArray[i].style.display = 'block'
        pageToBlur.style.filter = 'blur(4px)'
        pageTitle.style.filter = 'blur(4px)'
        document.documentElement.scrollTop = 20;
    })

}
    



// change later to loop over array of all products 
for (let i = 0; i<singleProdsArray.length; i++) {
    closeSingle[i].addEventListener("click", () => {
        console.log("close down is working");
        singleProdsArray[i].style.display = "none"
        // this always holds
        pageToBlur.style.filter = 'blur(0)'
        pageTitle.style.filter = 'blur(0)'
        // document.documentElement.scrollTo = 20;
        })
}



const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

for(let i=0; i<addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", ()=>{
        
    addToCartButtons[i].nextElementSibling.style.display = 'block';
    for(let i = 0; i < closealertlist.length; i++) {
        closealertlist[i].addEventListener('click', ()=> {
        console.log("closealert parent Node... displaying" , closealertlist[i].parentNode)
        closealertlist[i].parentNode.style.display = "none";
        })
    }
})
}



