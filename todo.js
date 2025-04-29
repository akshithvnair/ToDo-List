function addTask(){
    const input = document.getElementById("taskInput");
    const alpha = input.value.trim();
    if (alpha === ""){
        return;
    };
    const added = document.createElement("p");
    added.textContent = alpha;
    const completed = document.createElement("button");
    completed.textContent = "X";
    completed.className = "completed";
    const newDivision = document.createElement("div");
    newDivision.className = "taskContainer";
    completed.onclick = function(){
        newDivision.remove();
    };
    newDivision.appendChild(added);
    newDivision.appendChild(completed);
    document.getElementById("tasks").appendChild(newDivision);
    input.value = "";
}
const inputEnter = document.getElementById("taskInput");
inputEnter.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        addTask();
    }
});

