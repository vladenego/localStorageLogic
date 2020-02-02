let todoshka = document.getElementById("todoshka");
let list = document.getElementById("list");
// let data = [];
let DataObj = {};
let localData = JSON.parse(localStorage.getItem('comments')) || []; 
console.log(localData.length);

if(localData.length > 0){
  console.log("localData: " + localData);
  
  // data.push(localData);
}




function renderTask() {
  console.log(localData);

  for (const localDat of localData) {
    let liElement = document.createElement("li");
  liElement.innerHTML = localDat.task;
  list.appendChild(liElement);
     
  }
  
}

renderTask()


function add() {
 
  let liElement = document.createElement("li");
  liElement.innerHTML = todoshka.value;
  list.appendChild(liElement);

 

  DataObj = {
    task: todoshka.value
  }


  // data.push(DataObj);
  localData.push(DataObj)

  
  // console.log("data:" + data);
  
  todoshka.value = "";

  localStorage.setItem('comments', JSON.stringify(localData))

}


