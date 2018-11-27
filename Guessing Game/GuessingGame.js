secretNum = 5;
found = false;
while(found != true){
  guess = parseInt(prompt("What's the sectret number?"));
  if(guess > secretNum){
    alert("Too high, try again!");
  } else if( guess < secretNum){
    alert("Too low, try again!");
  } else if (secretNum === guess){
    alert("You got it! The correct number is " + secretNum + "!");
    found = true;
  } else{
    alert("That's invalid. Please type an actual number");
  }
}
