
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
  
  document.getElementById('adivina').addEventListener('click', function() {
    var userInput = document.getElementById('numeroUser').value;
    
    if (userInput == randomNumber) {
        document.getElementById("resultado").innerHTML = "Acertaste!";
    } else {
        document.getElementById("resultado").innerHTML = "Fallaste!";
    }
  });