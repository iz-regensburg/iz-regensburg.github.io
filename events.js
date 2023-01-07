const event_collapsible_headers =  document.querySelectorAll(".event_footer");

event_collapsible_headers.forEach((item)=> item.addEventListener("click",function(){this.parentElement.classList.toggle("event_expanded");}))