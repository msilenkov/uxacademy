$(function(){gsap.registerPlugin(ScrollToPlugin,ScrollTrigger);let t=$(".gallery-holder").width(),e=$(".js-row-academy").width();gsap.timeline({scrollTrigger:{trigger:".academy-space",start:"top 20%",end:"bottom 80%",scrub:.5,toggleActions:"restart none reverse none"},ease:"none"}).to(".js-row-academy",{duration:2,x:-(e-t)});let a=$(".js-row-partners").width();gsap.timeline({scrollTrigger:{trigger:".partners",start:"top 30%",end:"bottom 80%",scrub:.5,toggleActions:"restart none reverse none"},ease:"none"}).to(".js-row-partners",{duration:2,x:-(a-t)}),$(".calendar-item__opener").on("click",function(){$(this).closest(".calendar-item").addClass("active")}),$(".calendar-item__popup .js-popup-close").on("click",function(t){t.preventDefault(),$(this).closest(".calendar-item").removeClass("active")}),$(".calendar-item__popup .js-next").on("click",function(t){t.preventDefault(),$(this).closest(".calendar-item").next().addClass("active"),setTimeout(()=>{$(this).closest(".calendar-item").removeClass("active")},150)}),$(window).scroll(function(t){$(window).scrollTop()>0?$(".header").addClass("fixed"):$(".header").removeClass("fixed")}),$(".nav-opener").on("click",function(t){t.preventDefault(),$(".header").toggleClass("nav-active")}),$(".js-mockup-preview").fancybox({infobar:!1,toolbar:!0,baseClass:"mockup-preview",buttons:[],smallBtn:!0,arrows:!1,transitionEffect:"slide",animationEffect:"fade",afterLoad:function(t,e){e.$content.append(`\n\t\t\t\t\t<a href="#" class="btn-close" data-fancybox-close></a>\n\t\t\t\t\t<div class="mockup-preview__image">\n\t\t\t\t\t\t<img src="${e.src}" alt="">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mockup-preview__header">\n\t\t\t\t\t\t<button data-fancybox-prev class="prev"></button>\n\t\t\t\t\t\t<span class="caption">${e.opts.caption}</span>\n\t\t\t\t\t\t<button data-fancybox-next class="next"></button>\n\t\t\t\t\t</div>\n\t\t\t\t`)}})});