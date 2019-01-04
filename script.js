$(document).ready(function(){
	$('#nav_curriculum').hide();
	$('#nav_exams').hide();
	$('#nav_curriculum_english').hide();
	$('#nav_curriculum_french').hide();
	$('#nav_margin').css('margin-bottom','20px');
	$('.post').hide();
	$('.footer').hide();
	setTimeout(showpost, 200);
	function showpost() {     
	    $(".post").slideDown(500);
	   	$(".footer").delay(500).slideDown(500);
 	}
	
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-129266614-1', 'auto');
	ga('send', 'pageview');
});

$(window).load(function() {

	$(window).scroll(function (){
		if ($(window).scrollTop() > 120) {
		  $('#nav_stay').addClass('nav-fixed');
		  $('.page').addClass('margin_top');
		}
		if ($(window).scrollTop() < 121) {
		  $('#nav_stay').removeClass('nav-fixed');
		  $('.page').removeClass('margin_top');
		}
	});


	$('#nav_main_1').hover(function(){
		$('#nav_curriculum').slideUp();
		$('#nav_exams').slideUp();
		$('#nav_curriculum_english').slideUp();
		$('#nav_main_3').removeClass('hover_main');
		$('#nav_main_4').removeClass('hover_main');
//		$('#nav_margin').css('margin-bottom','40px');
	});
	$('#nav_main_2').hover(function(){
		$('#nav_curriculum').slideUp();
		$('#nav_exams').slideUp();
		$('#nav_curriculum_english').slideUp();
		$('#nav_main_3').removeClass('hover_main');
		$('#nav_main_4').removeClass('hover_main');
//		$('#nav_margin').css('margin-bottom','40px');
	});
	$('#nav_main_3').hover(function(){
		$('#nav_curriculum').slideDown();
		$('#nav_exams').slideUp().delay(400);
		$('#nav_main_3').addClass('hover_main');
		$('#nav_main_4').removeClass('hover_main');
//		$('#nav_margin').css('margin-bottom','0px');
		$('#home_fix').addClass('home_fix');
	});
	$('#nav_main_4').hover(function(){
		$('#nav_curriculum').slideUp().delay(400);
		$('#nav_exams').slideDown();
		$('#nav_main_4').addClass('hover_main');
		$('#nav_curriculum_english').slideUp();
		$('#nav_main_3').removeClass('hover_main');
//		$('#nav_margin').css('margin-bottom','0px');
		$('#home_fix').addClass('home_fix');
	});
	$('#nav_main_5').hover(function(){
		$('#nav_curriculum').slideUp();
		$('#nav_exams').slideUp();
		$('#nav_curriculum_english').slideUp();
		$('#nav_main_3').removeClass('hover_main');
		$('#nav_main_4').removeClass('hover_main');
//		$('#nav_margin').css('margin-bottom','40px');
	});
	$('#nav_main_6').hover(function(){
		$('#nav_curriculum').slideUp();
		$('#nav_exams').slideUp();
		$('#nav_curriculum_english').slideUp();
		$('#nav_main_3').removeClass('hover_main');
		$('#nav_main_4').removeClass('hover_main');
//		$('#nav_margin').css('margin-bottom','40px');
	});
	$('#nav_main_7').hover(function(){
		$('#nav_curriculum').slideUp();
		$('#nav_exams').slideUp();
		$('#nav_curriculum_english').slideUp();
		$('#nav_main_3').removeClass('hover_main');
		$('#nav_main_4').removeClass('hover_main');
//		$('#nav_margin').css('margin-bottom','40px');
	});
});

	
