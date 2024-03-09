//logic - below
//On submit click, grab input and print out as output list

//tasks to do - below

//add a delete button to each output so that they can be removed
//Need to work out how to add functionality to the dynamic delete buttons
//Don't submit the form when nothing is entered.

let toDoTaskInput = document.getElementById("toDoTaskInput");
console.log(toDoTaskInput);

//define list area for use with deleteAllTasks function
//let deleteAllTheTasks = document.getElementById("toDoList")

//event listener for submitButton
let submitButton = document.getElementById('submitTask');
if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        //stop page from refreshing
        event.preventDefault();
        submitTask();
    });
}

//event listener for deleteAllTasksBtn
let masterDeleteBtn = document.getElementById("deleteAllTasksBtn");
if (masterDeleteBtn) {
    masterDeleteBtn.addEventListener("click", function (event) {
        //stop page from refreshing
        event.preventDefault();
        deleteAllTasks();
    })
}


let count = 0;
console.log(count);

function submitTask() {
    console.log('Submit Task triggered')
    let toDoTask = toDoTaskInput.value;
    //it was failing here onwards for onclick="submitTask()"
    //after using event listener, it works for some reason
    console.log(toDoTask);

    //create new list item
    let listItem = document.createElement("li");
    listItem.id = 'listElement' + count;

    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('singleDeleteBtn')
    deleteButton.addEventListener('click', function (){
        deleteSingleTask(count);
    });

    //capture current value of count
    deleteButton.addEventListener('click',function (currentCount){
        return function() {
            deleteSingleTask(currentCount);
        }
    }(count));

    //Append task + delete button to list item
    listItem.appendChild(document.createTextNode(toDoTask));
    listItem.appendChild(deleteButton);

    //append list item to task list
    document.getElementById("toDoList").appendChild(listItem);
    //let deleteButton = "<button id='deleteBtn' onclick='deleteTask()'>Delete</button>"
    //document.getElementById("toDoList").innerHTML+= '<li id = listElement' + count + '>' + toDoTask + deleteButton + '</li>';

    //reset the form value after submission
    toDoTaskInput.value = "";

    //increase count
    count++;

}

// function deleteTask(index) {
//     let listItem = document.getElementById('listElement' + index);
//     document.getElementById('listElement' + count).innerHTML= "";
//     if (listItem) {
//         listItem.remove();
//         count--;
//     }
    
// }

//Delete button to reset Tasks Area
function deleteAllTasks() {
    console.log('Delete Button Clicked');
    document.getElementById("toDoList").innerHTML = "";
    toDoTaskInput.value= "";
    count = 0;
}

function deleteSingleTask(index) {
    let listItem = document.getElementById('listElement' + index);
    if (listItem) {
        listItem.remove();
        count--;
    }
}

