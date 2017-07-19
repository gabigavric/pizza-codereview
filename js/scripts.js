//business logic

function Pizza(size, toppings) {
console.info("received from function " + size);
  this.size = size;
  this.toppings = toppings;
  console.info("This has been set by pizza function "  +this.size);
}

Pizza.prototype.calculateCost = function() {
  console.info("Caluction cost the size is " + this.size);
  if(this.size == "small"){
    return 10 + this.toppings.length;
  }else if(this.size == "medium"){
    return 15 + this.toppings.length;
  }else if(this.size == "large"){
    return 20 + this.toppings.length;
  }
    return 0;
}

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaOrder = new Pizza( // Getting pizza size from jquery
                               $("input#pizzaSize:checked").val(),
                               $("input#toppings:checked")); // Getting list of toppings
                                                             // only care about the checked count
    $("h3#order").text("Your total is $" +pizzaOrder.calculateCost() );
});

});
