console.log("shop.js is working...")

let eye1 = document.querySelector(".eye1");
let eye2 = document.querySelector(".eye2");
let eye3 = document.querySelector(".eye3");
let eye4 = document.querySelector(".eye4");
let eye5 = document.querySelector(".eye5");
let eye6 = document.querySelector(".eye6");
let eye7 = document.querySelector(".eye7");
let eye8 = document.querySelector(".eye8");
let eye9 = document.querySelector(".eye9");
let eye10 = document.querySelector(".eye10");
let eye11 = document.querySelector(".eye11");
let eye12 = document.querySelector(".eye12");
let eye13 = document.querySelector(".eye13");
let eye14 = document.querySelector(".eye14");
let eye15 = document.querySelector(".eye15");

let eyeArray = [eye1, eye2, eye3, eye4]
let eye1single = document.querySelector('.singleproduct1')
let eye2single = document.querySelector('.singleproduct2')
let eye3single = document.querySelector('.singleproduct3')
let eye4single = document.querySelector('.singleproduct4')
let eye5single = document.querySelector('.singleproduct5')
let eye6single = document.querySelector('.singleproduct6')
let eye7single = document.querySelector('.singleproduct7')
let eye8single = document.querySelector('.singleproduct8')
let eye9single = document.querySelector('.singleproduct9')
let eye10single = document.querySelector('.singleproduct10')
let eye11single = document.querySelector('.singleproduct11')
let eye12single = document.querySelector('.singleproduct12')
let eye13single = document.querySelector('.singleproduct13')
let eye14single = document.querySelector('.singleproduct14')
let eye15single = document.querySelector('.singleproduct15')
let singleProdsArray = [eye1single, eye2single, eye3single, eye4single, eye5single, eye6single, eye7single, eye8single, eye9single, eye10single, eye11single, eye12single, eye13single, eye14single, eye15single];


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
