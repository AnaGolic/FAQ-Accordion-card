document.addEventListener("DOMContentLoaded",(e){
let clickable = document.querySelectorAll(".expand");


[...clickable].forEach(expand) => {
   
    expand.addEventListener('click', (){
      console.log ("clicked");
    this.classlist.toggle("active");
  
});
}
});


