let taskInput = document.getElementById("task-input")
let addButton = document.getElementById("add-button")
let taps = document.querySelectorAll("#taps-div div")
let taskList = [];
let mode = 'all'
let filterList = [];

addButton.addEventListener("click", addTask)

for(let i=1; i<taps.length;i++){
    taps[i].addEventListener("click", function(e){filter(e)})
}

function addTask(){
    let task = {
        id : randomID(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task)
    console.log(taskList)
    render()
}

function render(){
    let list = [];
    if(mode == "all"){
        list = taskList
    }else if(mode == "ongoing" || mode == "done"){
        list = filterList
    }

    let resultTML = ''
    for(let i=0; i<list.length;i++){
        if(list[i].isComplete == true){
            resultTML += `<div class="task-area">
            <div class = "drop">${list[i].taskContent}</div>
            <div>
                <button onclick = "toggleComplete('${list[i].id}')">완료</button>
                <button onclick = "toggleDel('${list[i].id}')">삭제</button>
            </div>
        </div>`
        }else{
            resultTML += `<div class="task-area">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick = "toggleComplete('${list[i].id}')">완료</button>
                <button onclick = "toggleDel('${list[i].id}')">삭제</button>
            </div>
        </div>`
        }
        
    }


    document.getElementById("task-board").innerHTML = resultTML
}

function toggleComplete(id){
    for(let i=0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete
        }
    }
    render()
}

function toggleDel(id){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
        }
    }
    render()
}

function filter(e){
    mode = e.target.id
    filterList = []; 
        if(mode == "all"){
            render();
        }else if(mode == "ongoing"){
            for(let i=0; i<taskList.length;i++){
                if(taskList[i].isComplete == false){
                    filterList.push(taskList[i])
                }
            }
            render();
            console.log(filterList)
    }else if(mode == "done"){
        for(let i =0; i<taskList.length; i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i])
            }
        }
        render();
    }
}


function randomID(){
    return '_' + Math.random().toString(36).substr(2, 9);
}