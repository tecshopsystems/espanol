/*-----------------------------------------------------------------------------------
 /* Styles Switcher
 -----------------------------------------------------------------------------------*/
$(document).ready(function(){
	//Theme COlor alert(22)

	$(document).on('click','#style-switcher .icon-switcher',function(){
		if($('#style-switcher').css('left')== '-270px'){
			$('#style-switcher').animate({
				'left':0
			})
		}
		else{
			$('#style-switcher').animate({
				'left':'-270px'
			})
		}
		
		if($('#style-switcher').css('right')== '-270px'){
			$('#style-switcher').animate({
				'right':0
			})
		}
		else{
			$('#style-switcher').animate({
				'right':'-270px'
			})
		}
		return false;
	});
	
	//Theme COlor

	$(document).on('click','#switcher-theme-custom-color a',function(){
		var cssTheme = $(this).attr('title');
		var cssFolderPath = 'assets/css/theme-color/';
		$('#theme-color').attr('href',cssFolderPath + cssTheme +".css")
		return false;
	});
	//Header Style

	$(document).on('click','#header-style .normal',function(){
		$('#header-style a').removeClass('activeTheme');
		$(this).addClass('activeTheme')
		$('.header').removeClass('fix-header');
		$('.header').removeClass('fix');
		$('body').removeClass('p-top');
	});
	$(document).on('click','#header-style .fixed',function(){
		$('#header-style a').removeClass('activeTheme');
		$(this).addClass('activeTheme');
		$('.header').addClass('fix-header');
		if ($('.header-style').hasClass('fix-header')) {
		$('body').addClass('p-top');
	}
	})
	
	//Footer Style

	$(document).on('click','#footer-style .dark-footer',function(){
		$('#footer-style a').removeClass('activeTheme');
		$(this).addClass('activeTheme')
		$('.footer').removeClass('light-footer');
		
	});
	$(document).on('click','#footer-style .lightfooter',function(){
		$('#footer-style a').removeClass('activeTheme');
		$(this).addClass('activeTheme');
		$('.footer').addClass('light-footer');
	
	})
	
	//Dark Light Color

	$(document).on('click','#switcher-bgcolor .light',function(){
		$('#switcher-bgcolor a').removeClass('activeTheme');
		$(this).addClass('activeTheme')
		$('.wrapper ').removeClass('dark-bg');
	});
	$(document).on('click','#switcher-bgcolor .dark',function(){
		$('#switcher-bgcolor a').removeClass('activeTheme');
		$(this).addClass('activeTheme');
		$('.wrapper ').addClass('dark-bg');
	})
	
	//RTL LTR
	$(document).on('click','#switcher-rtl .ltr',function(){ 
		$('#switcher-rtl a').removeClass('activeTheme');
		$(this).addClass('activeTheme');
		$('html').attr('dir','');
		$('#htmlrtl').remove();
	});
	$(document).on('click','#switcher-rtl .rtl',function(){
		$('#switcher-rtl a').removeClass('activeTheme');
		$(this).addClass('activeTheme');
		$('html').attr('dir','rtl');
		$('<link href="assets/css/bootstrap-rtl.css" rel="stylesheet" type="text/css" id="htmlrtl">').appendTo('html head');
	});
	
	//LAYOUT MODE:
	$(document).on('click','#switcher-layout-mode .wide',function(){
		$('#switcher-layout-mode a').removeClass('activeTheme');
		$(this).addClass('activeTheme');
		$('.wrapper').removeClass('boxed');
	});
	$(document).on('click','#switcher-layout-mode .boxed',function(){
		$('#switcher-layout-mode a').removeClass('activeTheme');
		$(this).addClass('activeTheme');
		$('.wrapper').addClass('boxed');
	});
	
	//LAYOUT MODE:
	$(document).on('click','#switcher-layout-mode .wide',function(){
		$('#switcher-layout-mode a').removeClass('activeTheme');
		$(this).addClass('activeTheme');
		$('.wrapper').removeClass('boxed');
	});
	
	//pattern Skin
	$(document).on('click','#switcher-boxed-layout-bg-pattern a',function(){
		$('body').attr('class','');
		var patternSkin = $(this).attr('title');
		$('body').addClass(patternSkin);
		return false;
		
	});
})