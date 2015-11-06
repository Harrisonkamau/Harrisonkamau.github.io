

$(document).ready(function(){

	// alert('See me!');
	

	$( "#tabs" ).tabs();
	$("#resizable" ).resizable();
	// $( "#tab1" ).tabs();

	$("#accordion").accordion();
	// $( "#datepicker" ).datepicker();

	
	$("h1").mouseenter(function(){
		$(this).addClass('animated shake');
	})
		  .mouseleave(function(){
		  	$(this).removeClass('animated shake');
		  });

		  //some people represent the event parameter as 'e'
		  //This is a naming shortcut

	$('#contact_form').on('submit', function(e){


		// alert('Hi there. It works');
		//place event handling logic here
		 url = '/';
		 data = $(this).serialize();
		 
		$.post(url, data);
		// alert(Still here?);


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
// alert("Still here?");






