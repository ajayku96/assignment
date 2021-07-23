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


function xorClac(){
  //find XOR
function findxOR(n)
{
    let mod = n % 4;
    if (mod == 0) return n;
    else if (mod == 1) return 1;
    else if (mod == 2) return n + 1;
    else if (mod == 3) return 0;
}

// XOR or a Pair
function findXOR(l, r)
{
return (findxOR(l - 1) ^ findxOR(r));
}

child = document.getElementById('xOR').children;
output = document.getElementById('output');
output.innerHTML = '';
arr_inputs =  [];

// make an array
for(var i = 1; i < child.length; i++){
  if (child[i].tagName == "INPUT") {
      arr_inputs.push(child[i].value)
  }
}
//Show Results
for(let i=0;i<8;i+=2){
  if(arr_inputs[i] != ''){
  temp = findXOR(arr_inputs[i],arr_inputs[i+1])
  if(temp % 2 == 0){
    let text = document.createElement('p');
    text.innerHTML = 'Even';
    document.getElementById('output').appendChild(text);
  }
  else{
    let text = document.createElement('p');
    text.innerHTML = 'Odd';
    document.getElementById('output').appendChild(text);
  }
  
}
else{
  let text = document.createElement('p');
  text.innerHTML = 'both fields required';
  document.getElementById('output').appendChild(text);
}
}
}


//input fields creation for calculating XOR
function makeInputFields(){
  inputValue = prompt('how many values u want to enter',4);
  let text = document.createElement('h4');
  text.innerHTML = "L - - - - - - - - - R";
  document.getElementById('xOR').appendChild(text);
  for(let i=1;i<=inputValue;i++){
  let input_l = document.createElement('input');
  let input_r = document.createElement('input');
  input_l.setAttribute("id", 'input_l'+i);
  input_l.setAttribute("size", '4');
  input_r.setAttribute("id", 'input_r'+i);
  input_r.setAttribute("size", '4');
  document.getElementById('xOR').appendChild(input_l);
  document.getElementById('xOR').appendChild(input_r);
  }
  document.getElementById('makeInputButton').style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "Calculate XOR";
  button.setAttribute("onclick", 'xorClac()');
  document.getElementById('xOR').appendChild(button);
}