let clickable = document.querySelectorAll(".expand");
let len = clickable.length;

for(let i=0; i < len; i++){

  clickable[i].addEventListener("click", function() {

    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("hidden");

  })

}