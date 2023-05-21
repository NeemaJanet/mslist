const input=document.getElementById("input");
const addBtn=document.getElementById("add-btn");
let list= document.getElementById('list');

addBtn.addEventListener("click", function(){
    let inputValue= input.value;
    if(inputValue !==""&& inputValue!==" "){
        let listItem=`<li> ${inputValue} </li>`;
        list.innerHTML+=listItem;
        input.value="";   
}
    

})



list.addEventListener("click", (event) => {
  
  const item = event.target;
  list.removeChild(item);
});