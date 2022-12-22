let add_submit = document.getElementById('add');
let list_input = document.getElementById('name');
let add_task = document.getElementById('output');


function clicked() {
    console.log('hello')
    if(list_input.value.length==0)
    {
        alert('ADD A TASK')
    }
    else
    {
        add_task.innerHTML +=`
        <div id='show'>
        <span id='todo'>
        ${list_input.value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>`;
        let del = document.querySelectorAll(".delete");
        for(var i=0; i<del.length; i++){
            del[i].onclick = function(){
                this.parentNode.remove();
            }
        }

    }
}

function main()
{
add_submit.addEventListener('click', function() {
    clicked();
});
}

main();

























// document.querySelector('#add').onclick = function(){
//     if(document.querySelector('#input input').value.length == 0){
//         alert("Please Enter a Task")
//     }

//     else{
//         document.querySelector('#output').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#input input').value}
//                 </span>
//                 <button class="delete">
            //        <i class="far fa-trash-alt"></i>
            //    </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }