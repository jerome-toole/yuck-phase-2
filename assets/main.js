(()=>{var e={705:(e,t,i)=>{var s=i(639).Symbol;e.exports=s},239:(e,t,i)=>{var s=i(705),n=i(607),o=i(333),r=s?s.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":r&&r in Object(e)?n(e):o(e)}},561:(e,t,i)=>{var s=i(990),n=/^\s+/;e.exports=function(e){return e?e.slice(0,s(e)+1).replace(n,""):e}},957:(e,t,i)=>{var s="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;e.exports=s},607:(e,t,i)=>{var s=i(705),n=Object.prototype,o=n.hasOwnProperty,r=n.toString,a=s?s.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),i=e[a];try{e[a]=void 0;var s=!0}catch(e){}var n=r.call(e);return s&&(t?e[a]=i:delete e[a]),n}},333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},639:(e,t,i)=>{var s=i(957),n="object"==typeof self&&self&&self.Object===Object&&self,o=s||n||Function("return this")();e.exports=o},990:e=>{var t=/\s/;e.exports=function(e){for(var i=e.length;i--&&t.test(e.charAt(i)););return i}},279:(e,t,i)=>{var s=i(218),n=i(771),o=i(841),r=Math.max,a=Math.min;e.exports=function(e,t,i){var c,l,h,d,u,v,p=0,g=!1,m=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var i=c,s=l;return c=l=void 0,p=t,d=e.apply(s,i)}function b(e){return p=e,u=setTimeout(x,t),g?y(e):d}function E(e){var i=e-v;return void 0===v||i>=t||i<0||m&&e-p>=h}function x(){var e=n();if(E(e))return A(e);u=setTimeout(x,function(e){var i=t-(e-v);return m?a(i,h-(e-p)):i}(e))}function A(e){return u=void 0,f&&c?y(e):(c=l=void 0,d)}function L(){var e=n(),i=E(e);if(c=arguments,l=this,v=e,i){if(void 0===u)return b(v);if(m)return clearTimeout(u),u=setTimeout(x,t),y(v)}return void 0===u&&(u=setTimeout(x,t)),d}return t=o(t)||0,s(i)&&(g=!!i.leading,h=(m="maxWait"in i)?r(o(i.maxWait)||0,t):h,f="trailing"in i?!!i.trailing:f),L.cancel=function(){void 0!==u&&clearTimeout(u),p=0,c=v=l=u=void 0},L.flush=function(){return void 0===u?d:A(n())},L}},218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},448:(e,t,i)=>{var s=i(239),n=i(5);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==s(e)}},771:(e,t,i)=>{var s=i(639);e.exports=function(){return s.Date.now()}},841:(e,t,i)=>{var s=i(561),n=i(218),o=i(448),r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var i=a.test(e);return i||c.test(e)?l(e.slice(2),i?2:8):r.test(e)?NaN:+e}}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";const e=document.querySelectorAll(".animate"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("animate--play"):e.boundingClientRect.top>0&&e.target.classList.remove("animate--play")}))}),{rootMargin:"100% 0px -30px 0px"});e.forEach((e=>{t.observe(e)}));const s=(e,t)=>"".concat(e,"=").concat(t,";");class n{constructor(e){this.el=e,this.bannerEl=this.el.querySelector(".cookie-notice__banner"),this.bannerEl.setAttribute("tabindex",-1),this.acceptButton=this.el.querySelector(".js-cookie-notice-accept"),this.rejectButton=this.el.querySelector(".js-cookie-notice-reject"),this.togglers=document.querySelectorAll(".js-cookie-notice-toggler"),this.prevActiveElement=null,this.cookieLifetime=365,this.cookieName="cookies",this.validCookieValues=["accept","reject"],this.init()}init(){-1===this.validCookieValues.indexOf((e=>{const t="".concat(e,"="),i=document.cookie.split(";");for(let e=0;e<i.length;e+=1){let s=i[e];for(;" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""})(this.cookieName))?this.setActive(!0):(this.prevActiveElement=document.activeElement,this.setActive(!1)),this.acceptButton.addEventListener("click",(()=>{this.setCookieChoice("accept"),this.setActive(!1)})),this.rejectButton.addEventListener("click",(()=>{this.setCookieChoice("reject"),this.setActive(!1)})),this.togglers.forEach((e=>{e.setAttribute("aria-expanded",this.isActive()),e.setAttribute("aria-controls",this.el.id),e.addEventListener("click",this.handleTogglerClick.bind(this))}))}setActive(e){!0===e?(this.prevActiveElement=document.activeElement,this.el.removeAttribute("aria-hidden"),this.bannerEl.focus(),this.togglers.forEach((e=>{e.setAttribute("aria-expanded",!0)}))):(this.prevActiveElement.focus(),this.el.setAttribute("aria-hidden",!0),this.togglers.forEach((e=>{e.setAttribute("aria-expanded",!1)})))}toggleActive(){this.setActive(!this.isActive())}isActive(){return!this.el.hasAttribute("aria-hidden")}setCookieChoice(e){var t,i,n;t=this.cookieName,i=e,n=this.cookieLifetime,document.cookie=s(t,i)+s("expires",(e=>new Date(Date.now()+24*e*60*60*1e3))(n).toUTCString())+s("path","/")+s("SameSite","strict")}handleTogglerClick(){this.toggleActive()}}window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".cookie-notice");e&&new n(e)}));class o{constructor(e){this.revealContainer=e,this.revealButton=this.revealContainer.querySelector(".js-reveal-item"),this.content=this.revealContainer.querySelector(".reveal__content"),this.init()}init(){this.content&&this.revealButton&&(this.revealButton.addEventListener("click",(e=>{e.preventDefault(),this.revealToggle()})),this.revealContainer.addEventListener("reveal-open",this),this.revealContainer.addEventListener("reveal-close",this),this.revealContainer.classList.add("is-enabled"),this.revealClose())}transitionEnded(e){"height"===e.propertyName&&(this.content.removeEventListener("transitionend",this),"false"===this.revealButton.getAttribute("aria-expanded")?this.content.hidden=!0:this.content.style.height=null)}revealOpen(){const{content:e}=this;e.hidden=!1;const t=e.scrollHeight;e.style.height="".concat(t,"px"),e.addEventListener("transitionend",this),this.revealButton.setAttribute("aria-expanded","true"),this.revealContainer.classList.add("is-open")}revealClose(){const{content:e}=this;e.addEventListener("transitionend",this);const t=e.style.transition;e.style.transition="",e.style.height="".concat(0,"px"),e.style.transition=t,this.revealButton.setAttribute("aria-expanded","false"),this.revealContainer.classList.remove("is-open"),this.content.hidden=!0}revealCloseTransition(){const{content:e}=this;e.addEventListener("transitionend",this);const t=e.scrollHeight,i=e.style.transition;e.style.transition="",requestAnimationFrame((()=>{e.style.height="".concat(t,"px"),e.style.transition=i,requestAnimationFrame((()=>{e.style.height="".concat(0,"px")}))})),this.revealButton.setAttribute("aria-expanded","false"),this.revealContainer.classList.remove("is-open")}revealToggle(){"false"===this.revealButton.getAttribute("aria-expanded")?this.revealOpen():this.revealCloseTransition(this.content)}handleEvent(e){switch(e.type){case"transitionend":this.transitionEnded(e);break;case"reveal-open":this.revealOpen(e);break;case"reveal-close":this.revealClose(e)}}}document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".reveal").forEach((e=>{new o(e)}))}));var r=i(279);const a=".menu-item-has-children";class c{constructor(e){this.el=e,this.headerTop=this.el.querySelector(".site-header__top"),this.navigation=this.el.querySelector(".site-header__navigation"),this.menu=this.el.querySelector(".site-header__main-menu"),this.dropdowns=this.el.querySelectorAll(a),this.toggles=this.el.querySelectorAll(".js-site-header-toggle"),this.currentPageAnchors=this.el.querySelectorAll('.current-menu-item > [href*="#"]'),this.burger=this.el.querySelector(".site-header__burger"),this.lastScroll=0,this.init(),this.setHeight(),window.addEventListener("resize",r((()=>{this.setHeight()}),50))}init(){this.isBurgerModeActive()&&this.closeHeader(!0),this.toggles.length>0&&this.toggles.forEach((e=>{e.addEventListener("click",(()=>{this.toggleHeader()}))})),this.currentPageAnchors.length>0&&this.currentPageAnchors.forEach((e=>{e.addEventListener("click",(()=>{this.closeHeader(!0)}))})),this.dropdowns.length>0&&(this.dropdowns.forEach((e=>{const t=e.querySelector("a");c.closeDropdown(e),t.addEventListener("click",(t=>{t.preventDefault(),this.toggleDropdown(e)}))})),document.addEventListener("click",(e=>{this.dropdowns.forEach((t=>{t.contains(e.target)||c.closeDropdown(t)}))})),document.addEventListener("keyup",(e=>{if("Escape"===e.key){const{activeElement:e}=document,t=e.closest(a);t&&(t.querySelector("a").focus(),c.closeDropdown(t))}})))}getHeight(){return this.headerTop.offsetHeight}setHeight(){this.headerHeight=this.getHeight(),document.documentElement.style.setProperty("--site-header--bottom","".concat(this.headerHeight,"px")),this.el.classList.add("site-header--positioned")}toggleHeader(){this.el.classList.contains("is-open")?this.closeHeader():this.openHeader()}openHeader(){let e="";this.menu&&Array.from(this.menu.children).forEach((t=>{const i=t.querySelector("a");c.setTabIndex([i],0),""===e&&(e=i)})),this.el.classList.add("is-open"),document.documentElement.classList.add("no-scroll"),this.toggles.forEach((e=>{e.setAttribute("aria-expanded","true")})),c.setTabIndex(this.toggles,0),this.menu&&e.focus()}closeHeader(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.el.classList.remove("is-open"),document.documentElement.classList.remove("no-scroll"),this.isBurgerModeActive()){if(this.toggles.forEach((e=>{e.setAttribute("aria-expanded","false")})),this.navigation){const e=c.getTabbableItems(this.navigation);c.setTabIndex(e,-1)}!0!==e&&this.burger.focus()}}toggleDropdown(e){e.classList.contains("is-active")?c.closeDropdown(e):this.openDropdown(e)}openDropdown(e){const t=e.querySelector(".sub-menu"),i=c.getTabbableItems(t);this.dropdowns.forEach((t=>{t.contains(e)||c.closeDropdown(t)})),c.setTabIndex(i,0),e.classList.add("is-active"),i.length>0&&i[0].focus()}static closeDropdown(e){const t=e.querySelector(".sub-menu"),i=c.getTabbableItems(t);c.setTabIndex(i,-1),e.classList.remove("is-active")}static setTabIndex(e,t){e.forEach((e=>{e.tabIndex=t}))}static getTabbableItems(e){return e.querySelectorAll("a, button")}isBurgerModeActive(){return e=this.burger,"none"!==window.getComputedStyle(e).getPropertyValue("display");var e}}window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".site-header");new c(e)}));class l{constructor(e){this.videoItem=e,this.play=this.videoItem.querySelector(".js-video-item-play"),this.close=this.videoItem.querySelector(".video-item__video-close"),this.video=this.videoItem.querySelector(".video-item__video"),this.iframe=this.videoItem.querySelector("iframe"),this.init()}init(){this.play.addEventListener("click",(()=>{this.playVideo()})),this.video.addEventListener("click",(e=>{let{target:t}=e;t!==this.iframe&&this.closeVideo()})),document.addEventListener("keydown",(e=>{let{key:t}=e;"Escape"!==t&&this.isVideoPlaying()&&this.closeVideo()}))}playVideo(){this.videoItem.classList.add("video-item--play"),this.iframe.src=this.iframe.getAttribute("data-src"),document.documentElement.classList.add("no-scroll")}closeVideo(){this.videoItem.classList.remove("video-item--play"),this.iframe.src="",document.documentElement.classList.remove("no-scroll")}isVideoPlaying(){return""!==this.iframe.src}}document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".video-item").forEach((e=>{new l(e)}))}))})()})();