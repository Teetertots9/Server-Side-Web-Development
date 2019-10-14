function changeTitle(newTitle){
    document.getElementById("lab3").innerHTML = newTitle;
}

function getValue(){
    console.log(document.getElementById("inputA").value);
    document.getElementById("h").innerHTML = document.getElementById("inputA").value;
}

function getP(){
    for(i = 0; i < 10; i++){
        console.log(document.getElementsByTagName("p")[i]);
    }
}


// Call this function when Add button is clicked
function calcAdd() {
  let numA = 0;
  let numB = 0;
  let answer = 0;
  let answerText = `${numA} + ${numB} = ${answer}`;

  // use getElementById() to get values
  // do addition
  // display anser on page

  // Log to console (useful for debugging)
  console.log(answerText);
  return true;
}

// Implement the other calculator functions
