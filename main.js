$(document).ready(function() {

	function navScroll(element) {
		$('html, body').stop().animate({
			scrollTop: $(element).offset().top - 40
		}, 600);
	}

	/* HANDLE NAV ELEMENTS */
	$('#title').click(function() {
		navScroll('#homePage');
	});

	$('#shadowsNav').click(function() {
		navScroll('#shadowsPage');
	});

	$('#buttonsNav').click(function() {
		navScroll('#buttonsPage');
	});

	$('#gradientsNav').click(function() {
		navScroll('#gradientsPage');
	});

	$('#opacityNav').click(function() {
		navScroll('#opacityPage');
	});

	$('#roundedNav').click(function() {
		navScroll('#roundedPage');
	});

	$('#columnsNav').click(function() {
		navScroll('#columnsPage');
	});

	$('#inputsNav').click(function() {
		navScroll('#inputsPage');
	});


	/* HANDLE SHADOW ELEMENTS CODE BOX */
	function handleShadowsCode(shadowCode) {
		$('.shadowSelected').hide().removeClass('shadowSelected');
		$(shadowCode).addClass('shadowSelected').fadeIn(300);
	}

	$('#topShadowBox').click(function() {
		handleShadowsCode('#topCode');
	});

	$('#bottomShadowBox').click(function() {
		handleShadowsCode('#bottomCode');
	});

	$('#leftShadowBox').click(function() {
		handleShadowsCode('#leftCode');
	});

	$('#rightShadowBox').click(function() {
		handleShadowsCode('#rightCode');
	});

	$('#entireShadowBox').click(function() {
		handleShadowsCode('#entireBoxCode');
	});

	$('#topInsetShadowBox').click(function() {
		handleShadowsCode('#topInsetCode');
	});

	$('#bottomInsetShadowBox').click(function() {
		handleShadowsCode('#bottomInsetCode');
	});

	$('#leftInsetShadowBox').click(function() {
		handleShadowsCode('#leftInsetCode');
	});

	$('#rightInsetShadowBox').click(function() {
		handleShadowsCode('#rightInsetCode');
	});

	$('#entireInsetShadowBox').click(function() {
		handleShadowsCode('#entireBoxInsetCode');
	});

	/* HANDLE BUTTON CODE */

	function handleButtonCode(buttonCode) {
		$('.buttonSelected').hide().removeClass('buttonSelected');
		$(buttonCode).addClass('buttonSelected').fadeIn(300);
	}

	$('.btn1').click(function() {
		handleButtonCode('#btn1Code');
	});

	$('.btn2').click(function() {
		handleButtonCode('#btn2Code');
	});

	$('.btn3').click(function() {
		handleButtonCode('#btn3Code');
	});

	$('.btn4').click(function() {
		handleButtonCode('#btn4Code');
	});

	$('.btn5').click(function() {
		handleButtonCode('#btn5Code');
	});

	$('.btn6').click(function() {
		handleButtonCode('#btn6Code');
	});

	$('.btn7').click(function() {
		handleButtonCode('#btn7Code');
	});

	$('.btn8').click(function() {
		handleButtonCode('#btn8Code');
	});

	/* HANDLE GRADIENT CODE */

	function handleGradientCode(gradientCode) {
		$('.gradientSelected').hide().removeClass('gradientSelected');
		$(gradientCode).addClass('gradientSelected').fadeIn(300);
	}

	$('#topGradBox').click(function() {
		handleGradientCode('#topGradCode');
	});

	$('#bottomGradBox').click(function() {
		handleGradientCode('#bottomGradCode');
	});

	$('#leftGradBox').click(function() {
		handleGradientCode('#leftGradCode');
	});

	$('#rightGradBox').click(function() {
		handleGradientCode('#rightGradCode');
	});

	$('#circleGradBox').click(function() {
		handleGradientCode('#circleGradCode');
	});

	/* HANDLE OPACITY CODE */

	$('#twentyFivePercentBox, #twentyFiveText').click(function() {
		$('#twentyFiveText').toggleClass('oneHundredPercent');
	});

	$('#fiftyPercentBox, #fiftyText').click(function() {
		$('#fiftyText').toggleClass('oneHundredPercent');
	});

	$('#seventyFivePercentBox, #seventyFiveText').click(function() {
		$('#seventyFiveText').toggleClass('oneHundredPercent');
	});

	$('#oneHundredPercentBox, #oneHundredText').click(function() {
		$('#oneHundredText').toggleClass('oneHundredPercent');
	});
});