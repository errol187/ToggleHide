$(document).ready(function() {
	
	console.log("Doc Ready");

	$(".toggleHide").bind("click", function(e){

		// e.preventDefault();

		$("span").removeClass('show'); // Remove class

		/*********************************************
			
			Toggle hide the specified element
			BAased on the structure of the object hide 
			the next element inline.

		***********************************************/

		// Type of element

		_this = $(this);

		var p = _this.next("span");

		var showPanel = _this[0].checked; // If true toggle class

		if (showPanel){

			console.log("addClass" , _this.next("span"))
			_this.next().next("span").addClass('show');
		} else {
			_this.next().next("span").removeClass('show');
		}

		

		// Add class to showw

		// Animate object

		// Remove class




	});

});