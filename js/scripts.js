//business logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculateCost = function() {
  if(this.size=="small"){
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
    var pizzaOrder = new Pizza($("input#pizzaSize").val(), // Getting pizza size from jquery
                               $("input#toppings:checked")); // Getthing list of toppings
                                                             // only care about the checked count
    $("p#order").text("Your pizza is $" + pizzaOrder.calculateCost() );
});

});
