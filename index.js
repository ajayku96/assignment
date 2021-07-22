//create new divs
function createDiv(elementName,parentId){
    let div = document.createElement('div');
    div.setAttribute("id", elementName);
    document.getElementById(parentId).appendChild(div);
    }


//function to convert sec to hours mins and seconds
function hoursMinsSeconds()
{
    let seconds = document.getElementById('secInput').value
    let hours    = Math.floor(seconds / (60*60));
      seconds -= hours   * (60*60);
    let minutes  = Math.floor(seconds / (60));
      seconds -= minutes * (60);
    createDiv('timeShow','time');
  document.getElementById('timeShow').innerHTML = ("hours = "+hours+", minutes = "+minutes+", seconds = "+seconds);
}



//Function to show sorted Array
function showSort(){
    const hintArray = ["AXXX","UVVVV","PGGGG","BOOUU"];
    arr = [];
    inputValue = prompt('how many values u want to enter',4);
    for(let i=0;i<inputValue;i++){
        input = prompt('enter string '+(i+1),hintArray[i]);
        if (input === null) {
            return;
        }
        arr.push(input);
    }
    createDiv('entered','string');
    createDiv('sorted','string');
    document.getElementById('entered').innerHTML = "Entered Array : ["+arr+"]";
    document.getElementById('sorted').innerHTML =  "Sorted Array : ["+arr.sort()+"]";
}

