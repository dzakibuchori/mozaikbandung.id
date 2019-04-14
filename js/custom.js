/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Search
5. Init Date Picker
6. Init Custom Select
7. Init Gallery
8. Init Rooms Slider
9. Init Discover Slider
10. Init Testimonials Slider


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	setHeader();
	initMenu();
	initSearch();
	initDatePicker();
	initCustomSelect();
	initGallery();
	initRoomsSlider();
	initDiscoverSlider();
	initTestSlider();
	initUmrohPackage()

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		var logoOverlay = $('.logo_overlay');
		var menuOverlay = $('.menu_overlay');

		if($(window).scrollTop() > 290)
		{
			logoOverlay.addClass('scrolled');
			menuOverlay.addClass('scrolled');
		}
		else
		{
			logoOverlay.removeClass('scrolled');
			menuOverlay.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length && $('.hamburger').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');
			var nav_mobile = $('.nav_mobile');
			var buttonHp = $('.button_hp');

			hamburger.on('click', function()
			{
				menu.toggleClass('active');
			});

			nav_mobile.on('click', function()
			{
				menu.toggleClass('active');
			});

			buttonHp.on('click', function()
			{
				menu.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Search

	*/

	function initSearch()
	{
		if($('.search_panel').length)
		{
			var panel = $('.search_panel');
			var btn = $('.search_button');
			var close = $('.search_close');

			btn.on('click', function()
			{
				panel.addClass('active');
			});

			close.on('click', function()
			{
				panel.removeClass('active');
			});
		}
	}

	/* 

	10. Init Umroh Package

	*/

	function initUmrohPackage()
	{
		if($('.umroh-package').length)
		{
			var umrohPackage = $('.umroh-package');
			umrohPackage.on('click', function()
			{
				var alt = $(this).children("img").attr("alt");
				window.open('https://api.whatsapp.com/send?phone=6282129292252&text='+"Assalamu'alaikum"+',%20saya%20mau%20tanya%20tentang%20'+'\"'+alt+'\"');
			});

		}
	}

});