$(function(){gsap.registerPlugin(ScrollToPlugin,ScrollTrigger);let e=$(".gallery-holder").width(),t=$(".js-row-academy").width();gsap.timeline({scrollTrigger:{trigger:".academy-space",start:"top 20%",end:"bottom 80%",scrub:.5,toggleActions:"restart none reverse none"},ease:"none"}).to(".js-row-academy",{duration:2,x:-(t-e)});let a=$(".js-row-partners").width();gsap.timeline({scrollTrigger:{trigger:".partners",start:"top 30%",end:"bottom 80%",scrub:.5,toggleActions:"restart none reverse none"},ease:"none"}).to(".js-row-partners",{duration:2,x:-(a-e)}),$(".calendar-item__opener").on("click",function(){$(this).closest(".calendar-item").addClass("active"),$(this).closest(".calendar-row").addClass("opened"),$("html,body").animate({scrollTop:$(".intensive").offset().top+90},500)}),$(".calendar-item__popup .js-popup-close").on("click",function(e){e.preventDefault(),$(this).closest(".calendar-item").removeClass("active"),$(this).closest(".calendar-row").removeClass("opened")}),$(".calendar-item__popup .js-next").on("click",function(e){e.preventDefault(),$(this).closest(".calendar-item").next().addClass("active"),setTimeout(()=>{$(this).closest(".calendar-item").removeClass("active")},150)});let n=document.getElementById("calendar");document.activeElement;document.addEventListener("keydown",function(e){39===e.keyCode&&($(n).find(".active").is(":last-child")&&($(n).find(".active").removeClass("active"),$(n).find(".calendar-row").removeClass("opened")),$(n).find(".active").removeClass("active").next().addClass("active")),37===e.keyCode&&($(n).find(".active").is(":first-child")&&($(n).find(".active").removeClass("active"),$(n).find(".calendar-row").removeClass("opened")),$(n).find(".active").removeClass("active").prev().addClass("active"))}),$(document).mouseup(function(e){var t=$("#calendar");t.is(e.target)||0!==t.has(e.target).length||($(n).find(".active").removeClass("active"),$(n).find(".calendar-row").removeClass("opened"))}),$(window).scrollTop()>0?$(".header").addClass("fixed"):$(".header").removeClass("fixed"),$(window).scroll(function(e){$(window).scrollTop()>0?$(".header").addClass("fixed"):$(".header").removeClass("fixed")}),$(".nav-opener").on("click",function(e){e.preventDefault(),$(".header").toggleClass("nav-active")}),$(".js-mockup-preview").fancybox({infobar:!1,toolbar:!0,baseClass:"mockup-preview",buttons:[],smallBtn:!0,arrows:!1,transitionEffect:"slide",animationEffect:"fade",afterLoad:function(e,t){t.$content.append(`\n\t\t\t\t\t<a href="#" class="btn-close" data-fancybox-close></a>\n\t\t\t\t\t<div class="mockup-preview__image">\n\t\t\t\t\t\t<img src="${t.src}" alt="">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mockup-preview__header">\n\t\t\t\t\t\t<button data-fancybox-prev class="prev"></button>\n\t\t\t\t\t\t<span class="caption">${t.opts.caption}</span>\n\t\t\t\t\t\t<button data-fancybox-next class="next"></button>\n\t\t\t\t\t</div>\n\t\t\t\t`)}}),Inputmask({mask:"+7 999 999 99 99"}).mask(".phone-mask"),$(".card-opener, .card-back").on("click",function(e){e.preventDefault(),$(".card-popup").toggleClass("active")})});