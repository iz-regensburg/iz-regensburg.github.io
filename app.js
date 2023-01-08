const menu_button = document.querySelector(".menu_button");
const lines = document.querySelectorAll(".button_line");
const link_list = document.querySelector(".link_list");
const card = document.querySelectorAll(".card")
const time = document.querySelector(".time");
const donate = document.querySelector(".donate");
const events = document.querySelector(".events");
const home_sec = document.querySelector(".home_sec");


function myfunc(){
    lines[0].classList.toggle("line_1");
    lines[2].classList.toggle("line_3");
    lines[1].classList.toggle("line_2");
    link_list.classList.toggle("active_list");

}

//f(window.outerWidth > 1000) {
    
    card[0].addEventListener("click", function(){window.open("/infos.html","_self");});
    card[1].addEventListener("click", function(){window.open("/donate.html","_self");});
    card[2].addEventListener("click", function(){window.open("/events.html","_self");});
    card[0].addEventListener("mouseover", function(){time.classList.toggle("time_w");});
    card[0].addEventListener("mouseout", function(){time.classList.remove("time_w");});
    card[1].addEventListener("mouseover", function(){donate.classList.toggle("donate_w");});
    card[1].addEventListener("mouseout", function(){donate.classList.remove("donate_w");});
    card[2].addEventListener("mouseover", function(){events.classList.toggle("events_w");});
    card[2].addEventListener("mouseout", function(){events.classList.remove("events_w");});
    
//}


menu_button.addEventListener("click",myfunc);