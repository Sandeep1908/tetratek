jQuery(document).ready(function($){$(function(){var lastScrollTop=0,delta=15;$(window).scroll(function(event){var st=$(this).scrollTop();if(Math.abs(lastScrollTop-st)<=delta)
return;if((st>lastScrollTop)&&(lastScrollTop>0)){$("header").css("top","-100px")}else{$("header").css("top","0px")}
lastScrollTop=st});$(window).on("orientationchange",function(event){location.reload()})});$("#menubtn").click(function(e){e.preventDefault();$("#nav > ul").slideToggle(300);$(this).toggleClass("open")});$(".prod_leftbar .prod_cat_arr").click(function(e){e.preventDefault();$(".prod_leftbar").removeClass('prod_leftbar_scroll');$(this).parent().toggleClass("open")});$("#nav > ul > li.menu-item-has-children > a").append("<span class='mob_arr'></span>");$("#nav > ul > li.menu-item-has-children > a > .mob_arr").click(function(e){e.preventDefault();if($(this).parent().hasClass('submenuopen')){$(this).parent().parent().find('.sub-menu').slideUp(400);$(this).parent().removeClass("submenuopen");$(this).parent().parent().find('.sub-menu .sub-menu').hide()}else{$(this).parent().parent().find('.sub-menu').slideDown(400);$(this).parent().addClass("submenuopen");$(this).parent().parent().find('.sub-menu .sub-menu').hide()}});$(".scrollTo").on('click',function(e){e.preventDefault();var target=$(this).attr('href');$('html, body').animate({scrollTop:($(target).offset().top)},1500)});$(".prod_leftbar ul li a").on('click',function(e){e.preventDefault();$(".prod_leftbar").removeClass('prod_leftbar_scroll');$(".prod_leftbar").removeClass('open');var target=$(this).attr('href');$('html, body').animate({scrollTop:($(target).offset().top-400)},1500)});function resize(){var height=$('.proj_slider .proj_block img').width()
$('.proj_slider .proj_block img').css({height:height,})}
setTimeout(function(){resize()},200);$(window).resize(function(){resize()});var $temp=$("<input>");var $url=$(location).attr('href');$('.clipboard').on('click',function(){$("body").append($temp);$temp.val($url).select();document.execCommand("copy");$temp.remove();alert("URL copied!")});setTimeout(function(){var length=$(".product_archive_content").height();$(window).scroll(function(){var scroll=$(this).scrollTop();var height=$('.prod_leftbar').height()+'px';if(scroll<=400){$(".prod_leftbar").addClass('prod_leftbar_scroll');$(".prod_leftbar").css({'position':'absolute','top':'0',})}else if(scroll>=length){$(".prod_leftbar").removeClass('fixed_prod_leftbar');$(".prod_leftbar").css({'position':'absolute','top':'5%',})}else{$(".prod_leftbar").addClass('fixed_prod_leftbar');$(".prod_leftbar").css({'position':'fixed','top':'5%',})}})},200);$(".prod_block_2 .desc  a.prod_desc_btn").click(function(e){e.preventDefault();$(this).parent().parent().find('.desc_inn').slideToggle(300);if($(this).parent().parent().hasClass('open')){$(this).parent().parent().removeClass('open')}else{$(this).parent().parent().addClass('open')}});$(".desc2  a.prod_desc_btn").click(function(e){e.preventDefault();$('.desc2 .desc_inn').hide();$(this).parent().find('.desc_inn').slideToggle(300);$(this).parent().parent().find('.desc2').removeClass('open');if($(this).parent().hasClass('open')){$(this).parent().removeClass('open')}else{$(this).parent().addClass('open')}});$(".desc_inn a.prod_desc2_btn").click(function(e){e.preventDefault();$(this).parent().find('.desc2_inn').slideToggle(300);if($(this).parent().hasClass('open')){$(this).parent().removeClass('open')}else{$(this).parent().addClass('open')}});$('.raq-icon').click(function(){var prodtitle=$(this).attr('data-title');$('.gfield #input_2_28').val(prodtitle)});$('.dl-btn').click(function(){var prodtitle=$(this).attr('data-title');$('.gfield #input_10_14').val(prodtitle);$('.gfield #input_11_14').val(prodtitle);var prodlink=$(this).attr('data-link');$('.gfield #input_10_12').val(prodlink);$('.gfield #input_11_12').val(prodlink)});if($("body").hasClass("page-id-1810")){$('video').get(0).pause();setTimeout(function(){$.fancybox({'type':'inline','href':'#r-video','onClosed':function(){$('video').get(0).pause()},})},5000)}
$('#content .btn-sec .js-hover').hover(function(){$(this).addClass('active');$('.form-modal').hide();$('.form-modal').removeClass('show');let currentTab=$(this).attr('href');$(currentTab).show();$(currentTab).addClass('show')},function(){$(this).removeClass('active');$('.form-modal').hide();$('.form-modal').removeClass('show')});$('#content .form-modal').hover(function(){$(this).addClass('active');$('.form-modal').hide();$('.form-modal').removeClass('show');$(this).show();$(this).addClass('show')},function(){$(this).removeClass('show');$('.form-modal').hide();$('.form-modal').removeClass('show')});$('.btn').click(function(){$('#fancybox-wrap').removeClass('d-bg');$('#fancybox-overlay').removeClass('d-bg')});$(window).bind("load",function(){$(".matchHeight").matchHeight()});var proj_slider=new Swiper('.proj_slider .swiper-container',{slidesPerView:3,loop:!0,spaceBetween:50,centeredSlides:!0,navigation:{nextEl:'.swiper-button-next-proj',prevEl:'.swiper-button-prev-proj',clickable:!0,},breakpoints:{1024:{slidesPerView:3,spaceBetween:30,},768:{slidesPerView:2,spaceBetween:20,centeredSlides:!1,},640:{slidesPerView:1,spaceBetween:20,},320:{slidesPerView:1,spaceBetween:10,}}});$(".history-grid").slick({autoplay:!1,slidesToShow:4,slidesToScroll:1,infinite:!1,swipeToSlide:!0,swipe:!0,dots:!1,arrows:!0,prevArrow:'<i class="slide-arrow prev-arrow">🡠</i>',nextArrow:'<i class="slide-arrow next-arrow">🡢</i>',responsive:[{breakpoint:1366,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:2,dots:!1,slidesToScroll:2}},{breakpoint:568,settings:{slidesToShow:1,dots:!0,arrows:!0,adaptiveHeight:!0,slidesToScroll:1}}]});$(".our-partners").slick({autoplay:!1,slidesToShow:3,slidesToScroll:1,infinite:!1,swipeToSlide:!0,swipe:!0,dots:!1,arrows:!0,responsive:[{breakpoint:1366,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:2,dots:!1,slidesToScroll:2}},{breakpoint:568,settings:{slidesToShow:3,dots:!0,arrows:!1,adaptiveHeight:!0,slidesToScroll:1}}]});var news_slider=new Swiper('.news_slider .swiper-container',{slidesPerView:3,loop:!0,spaceBetween:50,centeredSlides:!0,navigation:{nextEl:'.swiper-button-next-news',prevEl:'.swiper-button-prev-news',clickable:!0,},breakpoints:{1024:{slidesPerView:3,spaceBetween:40,},768:{slidesPerView:2,spaceBetween:30,centeredSlides:!1,},640:{slidesPerView:1,spaceBetween:20,},320:{slidesPerView:1,spaceBetween:10,}}});var single_product=new Swiper('.single-product .swiper-container',{slidesPerView:1,paginationClickable:!0,spaceBetween:0,centeredSlides:!0,pagination:{el:".swiper-pagination",dynamicBullets:!1,clickable:!0},breakpoints:{1024:{slidesPerView:1,spaceBetween:40,},768:{slidesPerView:1,spaceBetween:30,centeredSlides:!1,},640:{slidesPerView:1,spaceBetween:20,},320:{slidesPerView:1,spaceBetween:10,}}});$('.tabs-nav a').click(function(){$('.tabs-nav li').removeClass('active');$(this).parent().addClass('active');let currentTab=$(this).attr('href');$('.tabs-content .sectab').hide();$(currentTab).css('display','flex');return!1});$(".resources .resources-container").slick({autoplay:!1,slidesToShow:4,slidesToScroll:1,infinite:!1,swipeToSlide:!0,swipe:!0,dots:!1,arrows:!0,prevArrow:'<i class="slide-arrow prev-arrow">🡠</i>',nextArrow:'<i class="slide-arrow next-arrow">🡢</i>',responsive:[{breakpoint:1366,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:2,dots:!1,slidesToScroll:2}},{breakpoint:568,settings:{slidesToShow:2,dots:!1,arrows:!0,adaptiveHeight:!0,slidesToScroll:1}}]});$.scrollIt({topOffset:-400})});jQuery(document).on('gform_post_render',function(){jQuery(".gf_readonly input").attr("readonly","readonly")})