let empty = "";
let buttons = document.querySelectorAll(".btn");
var input = document.querySelector("input")


Array.from(buttons).forEach((button) => {

   button.addEventListener('click',(e) => {

      console.log(button.innerHTML);

      if(e.target.innerHTML == "="){
         empty = eval(empty);
         input.value = empty;
      }
      else if(e.target.innerHTML == "c"){
         empty = "";
         input.value = empty;
      }
      else{
         empty  = empty + e.target.innerHTML;
         // console.log(e.target.innerHTML);
         input.value = empty;
      }
     

   })

})
