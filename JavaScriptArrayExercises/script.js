
function returnFirst(arr){
    document.getElementById("h").innerHTML = arr[0];
    console.log(arr[0]);
}

function returnLast(arr){
    document.getElementById("h").innerHTML = arr[arr.length - 1];
    console.log(arr[arr.length - 1]);
}
function checkInput(arr){
if(arr.constructor === Array){
    document.getElementById("h").innerHTML = "true";
    console.log("true");
} else{
    document.getElementById("h").innerHTML = "false";
    console.log("false");
}
}

function getArrayLength(arr){
    document.getElementById("h").innerHTML = arr.length;
}

function displayArray(arr){
    for(i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    document.getElementById("h").innerHTML = arr;
}

function sortArrayStrings(arr){
    arr.sort();
    for(i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    document.getElementById("h").innerHTML = arr;
}

function sortArrayNumbers(arr){
    arr.sort(function(a, b){return a-b});
    for(i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    document.getElementById("h").innerHTML = arr;
}

function getMinAndMax(arr){
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);

console.log(max);
console.log(min);

document.getElementById("h").innerHTML = max + " & " + min;
}

function joinArrayString(arr){
    var str = "";
    for(i = 0; i < arr.length; i++){
        str += arr[i];
    }
    console.log(str);
    document.getElementById("h").innerHTML = str;
}

function displayArrayString(arr){
    var str = "";
    for(i = 0; i < arr.length; i++){
        str += arr[i];
        str += "-";
    }
    console.log(str);
    document.getElementById("h").innerHTML = str;
}

function addOne(arr){
    for(i = 0; i < arr.length; i++){
        arr[i] += 1;
        console.log(arr[i]);
    }
    document.getElementById("h").innerHTML = arr;
}

function returnSum(arr){
    var sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];   
    }
    console.log(sum);
    document.getElementById("h").innerHTML = sum;
}

function filterArray(arr, filter){
    var filtered = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i]> filter){
            console.log(arr[i])
            filtered += arr[i];
        }
    }
    document.getElementById("h").innerHTML = filtered;
}

function findPosition(arr,searchValue){
    var position = 0;
    for(i = 0; i < arr.length; i++){
        if (arr[i] === searchValue) {
            position = i + 1;
            i = arr.length;
        }
    }
    console.log(position);
    document.getElementById("h").innerHTML = position;
}

function getMostCommon(arr){
    var item;
    var mf = 1;
    var m = 0
    for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
document.getElementById("h").innerHTML = item+" ( " +mf +" times ) ";
}

function swapCase(arr){
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<arr.length; x++)
  {
    if(UPPER.indexOf(arr[x]) !== -1)
    {
      result.push(arr[x].toLowerCase());
    }
    else if(LOWER.indexOf(arr[x]) !== -1)
    {
      result.push(arr[x].toUpperCase());
    }
    else 
    {
      result.push(arr[x]);
    }
  }
console.log(result.join(''));
}

function display2D(arr){
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}