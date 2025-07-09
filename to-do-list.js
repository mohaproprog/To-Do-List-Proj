const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value === ""){
        alert("please Add Any Text");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        saveData();
        span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }inputBox.value ="";
    saveData();
}

listContainer.addEventListener("click",e=>{
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData (){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();












































