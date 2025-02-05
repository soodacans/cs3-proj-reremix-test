//When the user chooses to exit, this will close the window
function exitGame() {
  // Close the window if allowed by the browser
  // This only works in the code preview. It does not work in the live site due to browser restriction
  if (window.confirm("Are you sure you want to leave?")) {
    window.close();
  } else {
    console.log("Leave canceled.");
  }
}


//When the user chooses to start the game, this will bring them to the apron webpage
function enterGame() {
  window.location.href = 'apronchoice.html'; 
}

//Once the user is done choosing, they will be brought to the dessert webpage to choose
function selectApron(apron) {
// Show dessert options
  window.location.href = 'dessertchoice.html';
}

//Depending on which the user chose, they will be brought to the corresponding webpage
function chooseDessert(dessert) {
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html'; 
  }
}

//After the user chooses a shape, they will be directed to the next webpage to pick a flavor
function selectShape(shape) {
  if (shape === 'square') {
    window.location.href = 'cakeflavor.html';
  } else if (shape === 'heart') {
    window.location.href = 'cakeflavor.html';
  } else if (shape === 'circle') {
    window.location.href = 'cakeflavor.html';
  }
}

//After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectFlavor(flavor) {
  if (flavor === 'vanilla') {
    window.location.href = 'caketoppings.html';
  } else if (flavor === 'strawberry') {
    window.location.href = 'caketoppings.html';
  } else if (flavor === 'chocolate') {
    window.location.href = 'caketoppings.html';
  }
}

//COMMENT
function selectCont(cont) {
  if (cont === 'cup') {
    window.location.href = 'icecreamflavor.html';
  } else if (cont === 'cone') {
    window.location.href = 'icecreamflavor.html';
  }
}

//COMMENT
function selectICFlavor(flavor) {
  if (flavor === 'strawberry') {
    window.location.href = 'icecreamtopping.html';
  } else if (flavor === 'vanilla') {
    window.location.href = 'icecreamtopping.html';
  } else if (flavor === 'chocolate') {
    window.location.href = 'icecreamtopping.html';
  }
}

//COMMENT
function selectICTopping(topping) {
  if (topping === 'cherry') {
    window.location.href = 'finish.html';
  } else if (topping === 'sprinkles') {
    window.location.href = 'finish.html';
  } else if (topping === 'marshmallow') {
    window.location.href = 'finish.html';
  }
}
