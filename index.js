
const content=document.getElementById("incomplete-text");
const complete=document.getElementById("complete-text");

const btn=document.getElementById("btn")





let clearForm= ()=>{
    inputText.value="";
    completed.value=false;
  }

const newActivity=(el, index)=>{

    if(el.completed===false) {
        return(content.innerHTML += `
       <li id=${index}>
       <input type="checkbox" onClick="clickHander(this)">
        <p> ${el.title}</p>
        <span>Pending</span>
        </li>
        `);
    }
    else{
        return(complete.innerHTML += `
       <li id=${index}>
        <p> ${el.title}</p>
        <span> Completed</span>
        </li>

    `);
}}





let apiTask=[]

let data = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/todos');
 const data= await response.json();

 localStorage.setItem('apiTask', JSON.stringify(data))
      }
      data()

apiTask = JSON.parse(localStorage.getItem("apiTask"));






const inputText=document.getElementById("click");

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    validate();
})

let validate= ()=> {
    if (inputText.value === "") {
    alert(" You have not add the title")
    }

    else {
     addMore();
}
}


const addMore=()=>{
    apiTask.unshift({
    title:inputText.value,
    completed:false
})
localStorage.setItem("apiTask", JSON.stringify(apiTask));
apiTask = JSON.parse(localStorage.getItem("apiTask"));
console.log(apiTask)
addTask()
clearForm()

}




let  addTask=()=>{
    complete.innerHTML=""
    content.innerHTML=""
    apiTask.forEach((el, index)=>{
            newActivity(el, index)
    
        }
        
       ) 
    }


(() => {
    apiTask = JSON.parse(localStorage.getItem("apiTask"));
    addTask();

  })();






let clickHander=(e)=>{

    let editItem = e.parentElement.id;
let itemSplit=apiTask.splice(editItem, 1)

itemSplit[0].completed=true
apiTask.unshift(itemSplit[0])
alert(" Task Completed")
localStorage.setItem("apiTask", JSON.stringify(apiTask));
console.log(apiTask)
addTask()

}

(() => {
    apiTask = JSON.parse(localStorage.getItem("apiTask"));

    addTask();

  })();






    