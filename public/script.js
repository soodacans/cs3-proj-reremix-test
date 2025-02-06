// When the user chooses to exit, this will close the window
function exitGame() {
  // Close the window if allowed by the browser
  // This only works in the code preview. It does not work in the live site due to browser restriction
  if (window.confirm("Are you sure you want to leave?")) {
    window.close();
  } else {
    console.log("Leave canceled.");
  }
}

// When the user chooses to start the game, this will bring them to the apron webpage
function enterGame() {
  window.location.href = 'apronchoice.html'; 
}

// Once the user is done choosing, they will be brought to the dessert webpage to choose
function selectApron(apron) {
  // Show dessert options
  window.location.href = 'dessertchoice.html';
}

// Depending on which the user chose, they will be brought to the corresponding webpage
function chooseDessert(dessert) {
  if (dessert === 'cake') {
    localStorage.setItem('cake', dessert)
    window.location.href = 'cake.html';  
  } else if (dessert === 'icecream') {
    localStorage.setItem('icecream', dessert)
    window.location.href = 'icecream.html'; 
  }
}

// CAKE DISPLAY CODE

// If the user chooses cake, they will choose a shape, then they will be directed to the next webpage to pick a flavor
function selectShape(shape) {
  localStorage.setItem('shape', shape)
  window.location.href = 'cakeflavor.html';
}

// After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectFlavor(cakeflavor) {
  localStorage.setItem('cakeflavor', cakeflavor)
  window.location.href = 'caketoppings.html';
}

// After the user picks a topping, they will be directed to the finish page where their final decorated sweet treat will be displayed
function selectTopping(caketopping) {
  localStorage.setItem('caketopping', caketopping)
  window.location.href = 'finish.html';
}

// ICE CREAM

// If the user chooses icecream, they will choose a container, then they will be directed to the next webpage to pick a flavor
function selectCont(cont) {
  localStorage.setItem('container', cont);  // Store container choice
  window.location.href = 'icecreamflavor.html';
}

// After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectICFlavor(flavor) {
  localStorage.setItem('flavor', flavor);  // Store flavor choice
  window.location.href = 'icecreamtopping.html';
}

// After the user picks a topping, they will be directed to the finish page where their final decorated sweet treat will be displayed
function selectICTopping(topping) {
  localStorage.setItem('topping', topping);  // Store topping choice
  window.location.href = 'finish.html';
}

//ICECREAM
// Will use user input from the choices to determine the final ICECREAM img to be displayed 
function displayFinalIcecream(cont, flavor, topping) {
  if (cont === 'cup' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-strawberry-cherry.png?v=1738757020723";
  } else if (cont === 'cup' && flavor === 'strawberry' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-strawberry-sprinkles.png?v=1738757074624";
  } else if (cont === 'cup' && flavor === 'strawberry' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-strawberry-marshmallow.png?v=1738757073832";
  } else if (cont === 'cone' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-strawberry-cherry.png?v=1738757002912";
  } else if (cont === 'cone' && flavor === 'strawberry' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-strawberry-sprinkles.png?v=1738757024869";
  } else if (cont === 'cone' && flavor === 'strawberry' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-strawberry-marshmallow.png?v=1738756990072";
  } // chocolate flavor
  else if (cont === 'cup' && flavor === 'chocolate' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-chocolate-cherry.png?v=1738757006217";
  } else if (cont === 'cup' && flavor === 'chocolate' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-chocolate-sprinkles.png?v=1738757017992";
  } else if (cont === 'cup' && flavor === 'chocolate' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-chocolate-marshmallow.png?v=1738757008904";
  } else if (cont === 'cone' && flavor === 'chocolate' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-chocolate-cherry.png?v=1738756970819";
  } else if (cont === 'cone' && flavor === 'chocolate' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-chocolate-sprinkles.png?v=1738756987378";
  } else if (cont === 'cone' && flavor === 'chocolate' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-chocolate-marshmallow.png?v=1738756986447";
  } //vanilla flavor
  else if (cont === 'cup' && flavor === 'vanilla' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-vanilla-cherry.png?v=1738757033903";
  } else if (cont === 'cup' && flavor === 'vanilla' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-vanilla-sprinkles.png?v=1738757042232";
  } else if (cont === 'cup' && flavor === 'vanilla' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-vanilla-marshmallow.png?v=1738757036954";
  } else if (cont === 'cone' && flavor === 'vanilla' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-vanilla-cherry.png?v=1738756993783";
  } else if (cont === 'cone' && flavor === 'vanilla' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-vanilla-sprinkles.png?v=1738757000263";
  } else if (cont === 'cone' && flavor === 'vanilla' && topping === 'marshmallow') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-vanilla-marshmallow.png?v=1738756996315";
  }
  
}

//CAKE
// Will use user input from the choices to determine the final CAKE img to be displayed 
function displayFinalCake(shape, cakeflavor, caketopping) {
  if (shape === 'circle' && cakeflavor === 'strawberry' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-STRAWBERRY-STRAWBERRY.png?v=1738758397627";
  } else if (shape === 'circle' && cakeflavor === 'strawberry' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-STRAWBERRY-SPRINKLES.png?v=1738758395593";
  } else if (shape === 'circle' && cakeflavor === 'strawberry' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-STRAWBERRY-CHERRY.png?v=1738758392696";
  } else if (shape === 'square' && cakeflavor === 'strawberry' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-STRAWBERRY-STRAWBERRY%20(1).png?v=1738758526659";
  } else if (shape === 'square' && cakeflavor === 'strawberry' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-STRAWBERRY-SPRINKLES%20(1).png?v=1738758479788";
  } else if (shape === 'square' && cakeflavor === 'strawberry' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-STRAWBERRY-CHERRY.png?v=1738758473975";
  } else if (shape === 'heart' && cakeflavor === 'strawberry' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-STRAWBERRY-STRAWBERRY.png?v=1738758435221";
  } else if (shape === 'heart' && cakeflavor === 'strawberry' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-STRAWBERRY-SPRINKLES.png?v=1738758429807";
  } else if (shape === 'heart' && cakeflavor === 'strawberry' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-STRAWBERRY-CHERRY.png?v=1738758427969";
    
  // chocolate
  } else if (shape === 'circle' && cakeflavor === 'chocolate' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-CHOCOLATE-STRAWBERRY.png?v=1738758388422";
  } else if (shape === 'circle' && cakeflavor === 'chocolate' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-CHOCOLATE-SPRINKLES.png?v=1738758384838";
  } else if (shape === 'circle' && cakeflavor === 'chocolate' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-CHOCOLATE-CHERRY.png?v=1738758383397";
  } else if (shape === 'square' && cakeflavor === 'chocolate' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-CHOCOLATE-STRAWBERRY.png?v=1738758469258";
  } else if (shape === 'square' && cakeflavor === 'chocolate' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-CHOCOLATE-SPRINKLES.png?v=1738758463481";
  } else if (shape === 'square' && cakeflavor === 'chocolate' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-CHOCOLATE-CHERRY.png?v=1738758458422";
  } else if (shape === 'heart' && cakeflavor === 'chocolate' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-CHOCOLATE-STRAWBERRY.png?v=1738758423995";
  } else if (shape === 'heart' && cakeflavor === 'chocolate' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-CHOCOLATE-SPRINKLES.png?v=1738758421988";
  } else if (shape === 'heart' && cakeflavor === 'chocolate' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-CHOCOLATE-CHERRY.png?v=1738758417535";
     
  // vanilla
  } else if (shape === 'circle' && cakeflavor === 'vanilla' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-VANILLA-STRAWBERRY.png?v=1738758409415";
  } else if (shape === 'circle' && cakeflavor === 'vanilla' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-VANILLA-SPRINKLES.png?v=1738758407331";
  } else if (shape === 'circle' && cakeflavor === 'vanilla' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/CIRCLE-VANILLA-CHERRY.png?v=1738758401907";
  } else if (shape === 'square' && cakeflavor === 'vanilla' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-VANILLA-STRAWBERRY.png?v=1738758567638";
  } else if (shape === 'square' && cakeflavor === 'vanilla' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-VANILLA-SPRINKLES.png?v=1738758562713";
  } else if (shape === 'square' && cakeflavor === 'vanilla' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/SQUARE-VANILLA-CHERRY.png?v=1738758556230";
  } else if (shape === 'heart' && cakeflavor === 'vanilla' && caketopping === 'strawberry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-VANILLA-STRAWBERRY.png?v=1738758450337";
  } else if (shape === 'heart' && cakeflavor === 'vanilla' && caketopping === 'sprinkles') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-VANILLA-SPRINKLES.png?v=1738758443061";
  } else if (shape === 'heart' && cakeflavor === 'vanilla' && caketopping === 'cherry') {
    document.getElementById("final-image").src="https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/HEART-VANILLA-CHERRY.png?v=1738758440602";
  }

}

  function whichDessert(dessert) {
    if (dessert === 'cake') {
      let shape = localStorage.getItem("shape");
      let cakeflavor = localStorage.getItem("cakeflavor");
      let caketopping = localStorage.getItem("caketopping");
       if (shape && cakeflavor && caketopping) {
    displayFinalCake(shape, cakeflavor, caketopping);
  } else {
    document.getElementById("final-image").src = "https://via.placeholder.com/300x300.png";
  }
    } else if (dessert === 'icecream') {
      let cont = localStorage.getItem("container");
      let flavor = localStorage.getItem("flavor");
      let topping = localStorage.getItem("topping");
        if (cont && flavor && topping) {
    displayFinalIcecream(cont, flavor, topping);
  } else {
    document.getElementById("final-image").src = "https://via.placeholder.com/300x300.png";
  }
    }
  }
