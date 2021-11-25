function addToList(){
    var markDoneButton = document.createElement("button");
    var task = document.createElement("li");
    var taskList = document.getElementById("taskList");

    markDoneButton.innerText = "Mark as complete";
    markDoneButton.addEventListener("click", clearTask);
    task.innerText = document.getElementById("task").value + "\t";
    task.appendChild(markDoneButton);
    taskList.appendChild(task);
    document.getElementById("task").value = ""; // clear input field text


     
    //document.getElementById("taskList").appendChild(markDoneButton);
    //task.insertAdjacentElement(1, markDoneButton);
} 

function clearList(){
    var tasks = document.getElementById("taskList");
    while(tasks.hasChildNodes()){
        tasks.removeChild(tasks.firstChild);
    }
}


function clearTask(){
    //this.parentElement.style.backgroundColor = "black";
    this.parentElement.remove();
}
