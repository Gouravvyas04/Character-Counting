var textarea = document.querySelector(".content");
var count = document.querySelector(".count");

textarea.addEventListener("input",function(){
    count.textContent = textarea.value.length;
})