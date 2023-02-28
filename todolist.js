let addinput=document.querySelector("#addinput");
let addBtn =document.querySelector(".addbtn")
let itemlist=document.querySelector(".itemList")
addBtn.addEventListener("click",function(e){
  let newList = document.createElement("li")
  newList.className="list-group-item"
  if(addinput.value === ''){
    alert("please add some activity")
  }else{
  let listText=document.createTextNode(addinput.value)
  newList.appendChild(listText);
  itemlist.appendChild(newList)
  
  let newButton=document.createElement("i")
  newButton.className="bi bi-x text-center";
  newButton.style="font-size: 1rem; float:right"
  newList.appendChild(newButton)
    e.preventDefault();

    addinput.value="";}
})
// To delete items from list//
document.addEventListener("click",function(e){
    if(e.target.classList.contains("bi-x")){
    if(confirm("Are you sure the task is Completed??")){
       e.target.parentElement.remove();
    }
    }
    if(e.target.classList.contains("list-group-item")){
      let listitemtext=e.target.firstChild
      listitemtext.style="text-decoration:line-through"
      console.log(listitemtext)
    }
})
//to add effects when clicked in items of list//
