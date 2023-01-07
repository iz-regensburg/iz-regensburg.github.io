const collapsible = document.querySelectorAll(".collapsible");

const chevron = document.querySelectorAll(".chevron");

chevron.forEach((item) => item.addEventListener("click",function(){console.log("clicked");item.parentElement.parentElement.classList.toggle("expanded");}));


/*
collapsible.forEach((item) => item.addEventListener("click",function(){console.log("clicked");
this.classList.toggle("expanded");
console.log(collapsible.item.name);

}));



*/