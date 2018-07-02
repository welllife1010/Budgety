// BUDGET CONTROLLER
/* --------------------------------------------------------------------------------------------
		MODULES
1. Important aspect of any robust application's architecture;
2. Keep the units of code for a project both cleanly separated and organized;
3. Encapsulated some data into privacy and expose other data publicly.

So basically, modules allow us to break up our code into logical parts which are the modules,
and then make them interact with one another.

Data encapsulation - Allows us to hide the implementation details of a specific module from the
outside scope so that we only expose a public interface which is somethimes called an API.

The secret of the module pattern is that it returns an object containing all of the functions 
that we want to be public.

-------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------

1. UI MODULE
2. DATA MOFULE
3. CONTROLLER MODULE - control the entire app and basically acting as a link between the other two modules.

-------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------

Closure - An inner function has always access to the variables and parameters of its outer function
even after theouter function has returned.

-------------------------------------------------------------------------------------------- */

// BUDGET CONTROLLER - 
var budgetController = (function() {

	// Some code

})();


// UI CONTROLLER - 
var UIController = (function() {

	// Some code

})();


// GLOBAL APP CONTROLLER - 
// We'll pass the other two modules as arguments to the controller so that 
// this controller knows about the other two and can connect them.
// This is the central place where I want to decide, where I want to control
// what happens upon each event, and then delegate these tasks to other controllers.
var controller = (function(budgetCtrl, UICtrl) {

	var ctrlAddItem = function() {
		// 1. Get the field input data
		// 2. Add the item to the budet controller
		// 3. Add the item to the UI
		// 4. Calculate the budget
		// 5. Display the budget on the UI
		console.log("It works!");
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});

})(budgetController, UIController);





























