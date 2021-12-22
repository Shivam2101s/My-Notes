import img from "./logo.png";
import("./index.css");

let heading = document.getElementById("heading")

let head = document.createElement("h1")
head.innerHTML = "My Notes"

let logo = document.createElement("img");
logo.setAttribute("id","logo");
logo.src = img;

heading.append(logo,head);

let inputDiv = document.getElementById("inputDiv");

let textInp = document.createElement("input");
textInp.setAttribute("id", "input")
textInp.type = "text";
textInp.placeholder = "Start writing..."

let submitBtn = document.createElement("button");
submitBtn.setAttribute("id", "submitBtn");
submitBtn.innerHTML = "Submit"
submitBtn.addEventListener("click",appendNote)

inputDiv.append(textInp,submitBtn);

let noteDiv = document.getElementById("noteDiv");

function appendNote() {
    
    let list = document.createElement("li");
    list.innerHTML = input.value;
    if(input.value.length != 0) {
        noteDiv.appendChild(list);
        input.value = null;
    }else {
        alert("Please write something.");
    }
   
    
} 


