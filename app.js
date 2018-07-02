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

var budgetController = (function() {

	var x = 23;
	var add = function(a) {
		return x + a;
	}

	return {
		publicTest: function(b) {
			return add(b);
		}
	}

})();


var UIController = (function() {

	// Some codes

})();

// We'll pass the other two modules as arguments to the controller so that 
// this controller knows about the other two and can connect them.
var controller = (function(budgetCtrl, UICtrl) {

	var z = budgetCtrl.publicTest(5);

	return {
		anotherPublic: function() {
			console.log(z);
		}
	}

})(budgetController, UIController);





















