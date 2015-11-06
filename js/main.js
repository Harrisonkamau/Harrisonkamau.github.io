// $(document).ready(function(){

	
// 	// $("h1").mouseenter(function(){
// 	// 	$(this).addClass('animated shake');
// 	// })
// 	// 	  .mouseleave(function(){
// 	// 	  	$(this).removeClass('animated shake');
// 	// 	  });

// 		  //some people represent the event parameter as 'e'
// 		  //This is a naming shortcut

// 	$('#contact_form').on('submit', function(e){
// 		// alert('Hi there. It works');
// 		//place event handling logic here
// 		 url = '/';
// 		 data = $(this).serialize();
		 
// 		$.post(url, data);
// 		 // .done(function(){
// 		 // 	alert('You are logged in');
// 		 // }).fail(function(){
// 		 // 	alert('Oops.Something went wrong');
// 		 // });



// 		//prevents the default behvior of the form
// 		e.preventDefault();
// 	});

// 		// validate your form user inputs
// 		$('#contact_form').validate(
// 		{
// 			rules: 
// 			{
// 				name:"required",
// 				email: {
// 					required: true,
// 					email: true

// 				}
// 			},
// 			messages:
// 			{
// 				name: "Please Enter Your Full Names",
// 				email: {
// 					required: "Email cannot be Empty!!",
// 					email: "Please use this format user@somedomain.com"
// 				}
// 			}

		


// 		});









// });







$(document).ready(function(){

	// alert('See me!');

	$( "#tabs" ).tabs();
	$("#resizable" ).resizable();
	// $( "#tab1" ).tabs();

	$("#accordion").accordion();
	$( "#datepicker" ).datepicker();

	// (function() {
 //    // run the currently selected effect
 //    function runEffect() {
 //      // get effect type from
 //      var selectedEffect = $( "#effectTypes" ).val();
 
 //      // most effect types need no options passed by default
 //      var options = {};
 //      // some effects have required parameters
 //      if ( selectedEffect === "scale" ) {
 //        options = { percent: 100 };
 //      } else if ( selectedEffect === "size" ) {
 //        options = { to: { width: 280, height: 185 } };
 //      }
 
 //      // run the effect
 //      $( "#effect" ).show( selectedEffect, options, 500, callback );
 //    };unction callback() {
 //      setTimeout(function() {
 //        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
 //      }, 1000 );
 //    };
 
 //    // set effect from select menu value
 //    $( "#button" ).click(function() {
 //      runEffect();
 //    });
 
 //    $( "#effect" ).hide();
 //  });

	
	// $("h1").mouseenter(function(){
	// 	$(this).addClass('animated shake');
	// })
	// 	  .mouseleave(function(){
	// 	  	$(this).removeClass('animated shake');
	// 	  });

		  //some people represent the event parameter as 'e'
		  //This is a naming shortcut

	$('#contact_form').on('submit', function(e){
		// alert('Hi there. It works');
		//place event handling logic here
		 url = '/';
		 data = $(this).serialize();
		 
		$.post(url, data);
		 // .done(function(){
		 // 	alert('You are logged in');
		 // }).fail(function(){
		 // 	alert('Oops.Something went wrong');
		 // });



		//prevents the default behvior of the form
		e.preventDefault();
	});

		// validate your form user inputs
		$('#contact_form').validate(
		{
			rules: 
			{
				name:"required",
				email: {
					required: true,
					email: true,
					// maxlength: 30

				}
			},
			messages:
			{
				name: "Please Enter Your Full Names",
				email: {
					required: "Email cannot be Empty!!",
					email: "Please use this format user@somedomain.com",
					// maxlength: "Maximum length should be 30"
				}
			},
			highlight: function(element)
				{
					$(element).addClass('error');
				}
		}); //ends validation for inputs
		//in order to use jquery ui we need two things: css and js


		


});







