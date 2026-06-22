// Java coding for mobile hamburger menu
let burgerBtn = document.querySelector(".burger-icon");
let closeBtn = document.querySelector(".close-icon");
let headerMenu = document.querySelector(".header-menu");

burgerBtn.addEventListener("click", function(){
    headerMenu.classList.remove("menu-close");
    headerMenu.classList.add("menu-open");
    burgerBtn.style.display = "none";
    closeBtn.style.display = "block";
})

closeBtn.addEventListener("click", function(){
    headerMenu.classList.remove("menu-open");
    headerMenu.classList.add("menu-close");
    closeBtn.style.display = "none";
    burgerBtn.style.display = "block"; 
})

// Java coding for header value buttons
let plus_btn = document.querySelector(".plus-amount");
let minus_btn = document.querySelector(".minus-amount");
let amount = document.querySelector(".amount-text").textContent;
let amount_number = Number(amount);

function plus_amount(){
    amount_number += 1
    document.querySelector(".amount-text").textContent = amount_number;
}

function minus_amount(){
    if(amount_number == 0){
        amount_number = 0
    }
    else{
        amount_number -= 1
    }
    document.querySelector(".amount-text").textContent = amount_number;
}

plus_btn.addEventListener("click", function(){
    plus_amount()
})

minus_btn.addEventListener("click", function(){
    minus_amount()
})


let increase_btn = document.querySelector(".increase-amount");
let decrease_btn = document.querySelector(".decrease-amount");
let amount_text = document.querySelector(".amount-txt").textContent;
let amount_txt__number = Number(amount_text);

function increase_amount(){
    amount_txt__number += 1;
    document.querySelector(".amount-txt").textContent = amount_txt__number;
}

function decrease_amount(){
    if(amount_txt__number == 0){
        amount_txt__number = 0;
    }
    else{
        amount_txt__number -= 1
    }
    document.querySelector(".amount-txt").textContent = amount_txt__number;
}

increase_btn.addEventListener("click", function(){
    increase_amount();
})

decrease_btn.addEventListener("click", function(){
    decrease_amount();
})

