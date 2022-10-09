const addNewTask=document.querySelector('.tasks');
const addNewTaskBtn=document.querySelector('.btn-add-task');
const taskList=document.querySelector('.tasks-list');


addNewTaskBtn.addEventListener('click',addTask);
taskList.addEventListener('click',taskComplDelete);
document.addEventListener('DOMContentLoaded',readTheLocalStorage);
function taskComplDelete(e){
    const clickedItem=e.target;

    if(clickedItem.classList.contains('task-complated')){
        console.log('check clicked');
        clickedItem.parentElement.classList.toggle('complated-tasks');
    }
    if(clickedItem.classList.contains('task-deleted')){
        console.log('check clicked');
        clickedItem.parentElement.classList.toggle('disappear');
        /*
        clickedItem.parentElement.addEventListener(' transitionend',function(){
            clickedItem.parentElement.remove();
        })*/
    }

}

function addTask(e){
    e.preventDefault();
    makeTaskItem(addNewTask.value);
    localStorageRecord(addNewTask.value);
    addNewTask.value='';


}
function localStorageRecord(addNewTask){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];

    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(addNewTask);
    localStorage.setItem('tasks',JSON.stringify(tasks));

}
function readTheLocalStorage(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];

    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.array.forEach(element => {
        makeTaskItem(element);
    });

}
function makeTaskItem(task){
//creating a div
const divTask=document.createElement('div');
divTask.classList.add('tasks-item');

//creating a li
const taskLi=document.createElement('li');
taskLi.classList.add('task-description');
taskLi.innerText=addNewTask.value;
divTask.appendChild(taskLi);


const complatedBtn=document.createElement('button');
complatedBtn.classList.add('task-btn','task-complated');
complatedBtn.innerHTML='Completed';
divTask.appendChild(complatedBtn);

const deleteTaskbtn=document.createElement('button');
deleteTaskbtn.classList.add('task-deleted','task-btn');
deleteTaskbtn.innerHTML='Delete';
divTask.appendChild(deleteTaskbtn);



taskList.appendChild(divTask);

}
function localStorageDelete(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];

    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

}
