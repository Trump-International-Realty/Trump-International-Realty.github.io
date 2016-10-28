$(function() {	
	// Default Value
	$('.input').defaultValue();
	
	// Slider Sale
	$( "#slider-range-sale").slider({
		range: true,
		min: 0,
		max: 20000000,
		step: 500000,
		values: [ 0, 10000000 ],
		slide: function( event, ui ) {
			var low = ui.values[0];
			var high = ui.values[1];
			var search = low+';'+high;
			var lowText = '$'+numberWithCommas(ui.values[0]);
			var highText = '$'+numberWithCommas(ui.values[1]);
			$('#low_amount').html(lowText);
			if(high == '20000000'){
				$('#high_amount').html('No Max');
				$('#property_price_to').val('');			
			}else{
				$('#high_amount').html(highText);
				$('#property_price_to').val(high);			
			}
			$('#property_price_from').val(low);			
		}
	});
	
	// Slider Rent
	$( "#slider-range-rent").slider({
		range: true,
		min: 0,
		max: 50000,
		step: 1000,
		values: [ 0, 20000 ],
		slide: function( event, ui ) {
			var low = ui.values[0];
			var high = ui.values[1];
			var search = low+';'+high;
			var lowText = '$'+numberWithCommas(ui.values[0]);
			var highText = '$'+numberWithCommas(ui.values[1]);
			$('#low_amount-rent').html(lowText);
			if(high == '50000'){
				$('#high_amount-rent').html('No Max');
				$('#property_price_to-rent').val('');			
			}else{
				$('#high_amount-rent').html(highText);
				$('#property_price_to-rent').val(high);			
			}
			$('#property_price_from-rent').val(low);			
		}
	});
	
	// Truncate
    $('.truncate').expander({
		slicePoint: 200
    });
	
	// Truncate
    $('.truncate_medium').expander({
		slicePoint: 400
    });
    
	// Truncate
    $('.truncate_medium_long').expander({
		slicePoint: 600
    });
	
	// Truncate
    $('.truncate_long').expander({
		slicePoint: 800
    });
	
	// ScrollTo
	$('.scrollTo').on('click',function(){
		$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 25}, 500);	
		return false;				
	});
	
	// Trump Building Contact Slider
	$('#trump_contact_button').on('click',function(){
		$('#trump_contact').slideToggle('slow');
		return false;
	});
	
	// Search Type
	$('.search_type').on('change',function(){
		if($(this).val() == '87'){
			$('#search_rent').hide();
			$('#search_sale').show();
			$('#search_select_sale').attr('checked', 'checked');
		} else {
			$('#search_sale').hide();
			$('#search_rent').show();
			$('#search_select_rent').attr('checked', 'checked');
		}
	});
	
	// Show Advanced
	$('.show_advanced').on('click',function(){
		var myAd = $(this).closest('.form_space').find('.advanced_search');
		if($(myAd).is(':visible')){
			$(myAd).slideUp();
			$(this).html('Show Advanced Search');
		}else{
			$(myAd).slideDown();
			$(this).html('Hide Advanced Search');
		}
		return false;
	});
	
	// Dynamic Search 
	$('.dynamic_search').ajaxForm({
		target: '#property_listings',
		beforeSubmit: function(url) {
			$('#property_listings').html('<div style="padding-top: 40px;text-align: center;"><img src="/images/site/ajax-loader.gif" alt="Loading" /></div>');
		},
		success: function(data) {}});

	// Dynamic Sort 
	$('#dynamic_sort').on('change',function(){
		console.log('fire');
		$(this).ajaxSubmit({
			target: '#property_listings',
			beforeSubmit: function(url) {
				$('#property_listings').html('<div style="padding-top: 40px;text-align: center;"><img src="/images/site/ajax-loader.gif" alt="Loading" /></div>');
			},
			success: function(data) {}})
	});

	$('#love_form select').on('change',function(){
		window.location = $(this).val();
	});	
	
	/* Love Button
	$('a#love_button').on('click',function(){
		if($('#footer_love_wrapper').hasClass('fixed')){
			if($('#footer_love_form').is(":visible")){
				$('#footer_love_wrapper').animate({
					bottom: '0'
				},1000,function(){$('#footer_love_form').hide();});
			} else {
				$('#footer_love_wrapper').animate({
					bottom: '245px'
				},1000);
				$('#footer_love_form').show();
			}
		} else {
			if($('#footer_love_form').is(":visible")){
				$('#footer_love_wrapper').css({
					'position' : 'absolute',
					'bottom' : 'auto',
					'top' : '0',
					'left' : '0'
				});
				$('#footer_love a#love_button').css({
					'top' : '-25px'
				});
				$('#footer_love_form').hide();
			} else {
				$('#footer_love_wrapper').css({
					'position' : 'fixed',
					'bottom' : '245px',
					'top' : 'auto',
					'left' : '0'
				});
				$('#footer_love a#love_button').css({
					'top' : '0'
				});
				$('#footer_love_form').show();
			}
		}		
		return false;
	});
	*/
	
	// Initiate Shadowbox	
	Shadowbox.init({
		continuous: true,
		counterType: "default",
		displayNav: true,
		onOpen: SBOpen,
		onChange: SBChange,
		onFinish:function(){ 
			$('#sb-body-inner img').one('click',Shadowbox.next); 
		}
	});
	
	// Nav Menu 
	$('#nav_menu').on('click',function(){
		$('#navigation').toggleClass('visible');
		return false;
	});

	// disable listing, agents & locations navigation links on mobile

	var currwidth = document.documentElement.clientWidth; // window width

	$('.listings-bt').click(function(event){
		if (currwidth < 1025) {
			event.preventDefault();
			$('#navigation ul').removeClass('on');
			$('#navigation ul a').removeClass('on');
			$(this).next('ul').addClass('on');
			$(this).addClass('on');
		}
	});

	$('.agents-bt').click(function(event){
		if (currwidth < 1025) {
			event.preventDefault();
			$('#navigation ul').removeClass('on');
			$('#navigation ul a').removeClass('on');
			$(this).next('ul').addClass('on');
			$(this).addClass('on');
		}
	});

	$('.locations-bt').click(function(event){
		if (currwidth < 1025) {
			event.preventDefault();
			$('#navigation ul').removeClass('on');
			$('#navigation ul a').removeClass('on');
			$(this).next('ul').addClass('on');
			$(this).addClass('on');
		}
	});

	$(window).resize(function () {
        currwidth = document.documentElement.clientWidth; // recalculate window width on resize
    });
		


	// Property Tabs
	$('#property_info_nav li a').on('click',function(){
		$('#property_info_nav li a.active').removeClass('active');
		$(this).addClass('active');
		var space = $(this).attr('href');
		$('#property_tabs').children(':visible').hide();
		$(space).show(0,function(){
			google.maps.event.trigger(map, 'resize'); 
			map_map.setCenter(map_markers[0].getPosition());
		});
		return false;
	});
		
	// Location Tabs
	$('#location_info_nav li a').on('click',function(){
		$('#location_info_nav li a.active').removeClass('active');
		$(this).addClass('active');
		var space = $(this).attr('href');
		$('#location_tabs').children(':visible').hide();
		$(space).show();
		$(space).show(0,function(){
			google.maps.event.trigger(map, 'resize'); 
			map_map.setCenter(map_markers[0].getPosition());
		});
		return false;
	});
		
	// Custom Select Boxes
	$("#sort_button,#search_type,#search_area,#love_location,#love_agent,#love_office,.property_bathrooms_from,.property_bathrooms_to,.property_bedrooms_from,.property_bedrooms_to").selectbox();	
	
	//Love It System			
	$(window).scroll(function(){loveIt();});
	$(window).resize(function(){loveIt();});
				
	loveIt();
	$('#magnify a').on('click',function(){
		if ($('#header_top_form form').is(':visible')){
			$('#header_top_form form').hide("slide", { direction: "right" }, 500);
		} else {
			$('#header_top_form form').show("slide", { direction: "right" }, 500);
		}
		return false;
	});

	// igualate property cards height

	igualate_heights();

	$(window).resize(function(){igualate_heights();});
});
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
};	
function loveIt(){
	var elem = $('#footer_contact');
    if (elem.viewportOffset().top > $(window).height()) {
		$('#footer_love_form').hide();
		$('#footer_love_wrapper').css({
			'position' : 'fixed',
			'bottom' : '0',
			'top' : 'auto',
			'left' : '0'
		});
		$('#footer_love a#love_button').css({
			'top' : '0'
		});
		$('#footer_love_wrapper').addClass('fixed');
		$('#footer_love_wrapper').removeClass('absolute');
    } else {
		$('#footer_love_form').hide();
		$('#footer_love_wrapper').css({
			'position' : 'absolute',
			'bottom' : 'auto',
			'top' : '0',
			'left' : '0'
		});
		$('#footer_love a#love_button').css({
			'top' : '-30px'
		});
		$('#footer_love_wrapper').addClass('absolute');
		$('#footer_love_wrapper').removeClass('fixed');
    }
};
function igualate_heights(){
	var currwidth = document.documentElement.clientWidth;
	var maxheight = 0;
	if (currwidth < 941 && currwidth > 600){
		$( ".property_border" ).each(function() {
			$( this ).attr('style', '');
			var temph = $( this ).outerHeight();
			if (temph > maxheight) {
				maxheight = temph;
			}
		});
		$( ".property_border" ).css('height', maxheight);
	} else {
		$( ".property_border" ).attr('style', '');
	}
}



















