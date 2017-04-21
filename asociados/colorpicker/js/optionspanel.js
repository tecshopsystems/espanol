jQuery(document).ready(function($) {
	
	$('.options_toggle').bind('click', function() { 
		if($('#t_options').css('left') == '0px'){
			$('#t_options').stop(false, true).animate({left:'-230px'}, 400);
		}else {
			$('#t_options').stop(false, true).animate({left:'0px'}, 400);
		}	
	});

	$(".wideboxed a.wrapboxed").click(function() { 
		$.cookie($('#wrapper').addClass("boxed"));
		return false;
	});
	$(".wideboxed a.wrapwide").click(function() { 
		$.cookie($('#wrapper').removeClass("boxed"));
		return false;
	});
	
	
	$("#stylechanger .color a").click(function() { 
		$("#t-colors").attr("href",'css/theme/'+$(this).attr('data-rel'));
		$.cookie("css",'css/theme/'+$(this).attr('data-rel'), {expires: 365, path: '/'});
		return false;
	});
	
	$(".bgr .color a").click(function() { 
		$("#bodybg").attr("href",'bodybg/'+$(this).attr('data-rel'));
		$.cookie("css",'bodybg/'+$(this).attr('data-rel'), {expires: 365, path: '/'});
		return false;
	});
	
	$('#accent_color').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onChange: function (hsb, hex, rgb) {
			$('#accent_color').val(hex);
			$('#accent_color').css('backgroundColor', '#' + hex);
			accentColorUpdate(hex);
		}
	})
	.bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
	});
	
	$('#bodybg_color').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onChange: function (hsb, hex, rgb) {
			$('#bodybg_color').val(hex);
			$('#bodybg_color').css('backgroundColor', '#' + hex);
			bodybgColorUpdate(hex);
		}
	})
	.bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
	});
	
function accentColorUpdate(hex){

	hex = '#'+hex;

	$('#custom_styles').html('<style>'+
		'.mapmarker,strong ,blockquote, blockquote p,.icons-ul i,.ha-header nav a:hover,.hero-title span,.info h3,.contact-wrap h3,.social-title,.count,.footer i,.copyright a:hover,.team-section .social-icons a:hover,.single-post-nav a:hover, .single-post-nav a:hover:after,.image-slider-nav a:after,.pagenavi .page-numbers,.comment .comment-author a,.blog-section a:hover,button.default,.button.default,#sidebar a:hover, .blog-wrapper a:hover,.widget_tag_cloud .tagcloud a,#searchform input[type="text"]:focus + .submit-search:before ,.simple-pricing-table .column:hover .button,.simple-pricing-table .featured .button { color:'+ hex +'; }' +
		
		'.about-icon , .cta-section,.client-section,button, input[type="submit"], input[type="reset"], input[type="button"],.social-link:hover .social-icon, .portfolio-caption,.effect-3 .share-icon:after ,.ha-header,.section-title:before,.about-box h3 i,.about-box h2,.progress-bar div,.team-section .one:after, .team-section .two:after, .team-section .three:after, .team-section .four:after,.team-section .social-icons a,a.toTop  { background:'+ hex +';}'+

		'	.effect-3 .share-icon,.effect-3 .share-icon { box-shadow: 0 0 0 2px '+ hex +';}'+
		
	    '   .hero-title-holder,.parallax-title{ border-top: 2px solid '+ hex +';}'+
		  
	    '  .ut-rotate-quote .flex-direction-nav a,.image-slider-nav a:hover,.pagenavi .current,.pagenavi .page-numbers:hover,.button.default:hover,.widget_tag_cloud .tagcloud a:hover,.simple-pricing-table .column:hover,.simple-pricing-table .featured,.simple-pricing-table .column:hover .price, .simple-pricing-table .featured .price,.simple-pricing-table .column:hover .footer, .simple-pricing-table .featured .footer  { background-color: '+ hex +';}'+
	    
	    '   #searchform input[type="text"]:focus,.searchfield input[type="text"]:focus, #respond input[type="text"]:focus, #respond input[type="email"]:focus, #respond input[type="url"]:focus,#respond textarea:focus{ border: 1px solid '+ hex +';}'+
	    
	    '	#searchform input[type="text"]:focus + .submit-searchborder-left-color:'+ hex +';}'+
	    '   .counter-section{ border-bottom: 4px solid '+ hex +';}'+
	   
	    
		
		'</style>');
		
		$('#clipboard-text').html(
		'.mapmarker,strong ,blockquote, blockquote p,.icons-ul i,.ha-header nav a:hover,.hero-title span,.info h3,.contact-wrap h3,.social-title,.count,.footer i,.copyright a:hover,.team-section .social-icons a:hover,.single-post-nav a:hover, .single-post-nav a:hover:after,.image-slider-nav a:after,.pagenavi .page-numbers,.comment .comment-author a,.blog-section a:hover,button.default,.button.default,#sidebar a:hover, .blog-wrapper a:hover,.widget_tag_cloud .tagcloud a,#searchform input[type="text"]:focus + .submit-search:before ,.simple-pricing-table .column:hover .button,.simple-pricing-table .featured .button { color:'+ hex +'; }' +
		
		'.about-icon , .cta-section,.client-section,button, input[type="submit"], input[type="reset"], input[type="button"],.social-link:hover .social-icon, .portfolio-caption,.effect-3 .share-icon:after ,.ha-header,.section-title:before,.about-box h3 i,.about-box h2,.progress-bar div,.team-section .one:after, .team-section .two:after, .team-section .three:after, .team-section .four:after,.team-section .social-icons a,a.toTop  { background:'+ hex +';}'+

		'	.effect-3 .share-icon,.effect-3 .share-icon { box-shadow: 0 0 0 2px '+ hex +';}'+
		
	    '   .hero-title-holder,.parallax-title{ border-top: 2px solid '+ hex +';}'+
		  
	    '  .ut-rotate-quote .flex-direction-nav a,.image-slider-nav a:hover,.pagenavi .current,.pagenavi .page-numbers:hover,.button.default:hover,.widget_tag_cloud .tagcloud a:hover,.simple-pricing-table .column:hover,.simple-pricing-table .featured,.simple-pricing-table .column:hover .price, .simple-pricing-table .featured .price,.simple-pricing-table .column:hover .footer, .simple-pricing-table .featured .footer  { background-color: '+ hex +';}'+
	    
	    '   #searchform input[type="text"]:focus,.searchfield input[type="text"]:focus, #respond input[type="text"]:focus, #respond input[type="email"]:focus, #respond input[type="url"]:focus,#respond textarea:focus{ border: 1px solid '+ hex +';}'+
	    
	    '	#searchform input[type="text"]:focus + .submit-searchborder-left-color:'+ hex +';}'+
	    '   .counter-section{ border-bottom: 4px solid '+ hex +';}'
	   
	    
		
		);
}

function bodybgColorUpdate(hex){
	$('body').css('background', '#'+hex);
}
	
	
	
	
});