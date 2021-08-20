//EVENTS (IS THE CORE OF JS) [it is responsible for actions]

//JQUERY 
$(document).ready(function () {

	$('input').focus(function () {
		$('#firstValue, #secondValue').css("background-color", 'lightblue');
	});
	$('input').blur(function () {
		$('#firstValue, #secondValue').css("background-color", "red");
	});

	$('#del').click(function () {
		$('#platform, #firstValue, #secondValue').html('');
	});

	$('#multi').on({
		focus: function () {
			$('#multi').css("background-color", 'blue')
		},
		blur: function () {
			$('#multi').css("background-color", 'red')
		}
	});

	$('#plus').on({
		focus: function () {
			$('#plus').css("background-color", 'blue')
		},
		blur: function () {
			$('#plus').css("background-color", 'red')
		}
	});

	$('#diff').on({
		focus: function () {
			$('#diff').css("background-color", 'blue')
		},
		blur: function () {
			$('#diff').css("background-color", 'red')
		}
	});

	$('#div').on({
		focus: function () {
			$('#div').css("background-color", 'blue')
		},
		blur: function () {
			$('#div').css("background-color", 'red')
		}
	});



	$('#multi').click(function () {
		var A = $('#firstValue').val();
		var A = parseInt(A);
		var B = $('#secondValue').val();
		var B = parseInt(B);
		var C = A * B;
		$('#platform').html(C);
	})

	$('#plus').click(function () {
		var A = $('#firstValue').val();
		var A = parseInt(A);
		var B = $('#secondValue').val();
		var B = parseInt(B);
		var C = A + B;
		$('#platform').html(C);
	})

	$('#div').click(function () {
		var A = $('#firstValue').val();
		var A = parseInt(A);
		var B = $('#secondValue').val();
		var B = parseInt(B);
		var C = A / B;
		$('#platform').html(C);
	})

	$('#diff').click(function () {
		var A = $('#firstValue').val();
		var A = parseInt(A);
		var B = $('#secondValue').val();
		var B = parseInt(B);
		var C = A - B;
		$('#platform').html(C);
	})

});
//end of  calculator



