"use strict";var VimiumInjector;(function(){var t,n=VimiumInjector,e={id:"",alive:-1,host:"",version:"",cache:null,clickable:void 0,eval:null,reload:null,checkIfEnabled:null,$:null,$h:"",$m:null,$r:null,$g:null,getCommandCount:null,callback:null,destroy:null};if(n)for(t of Object.keys(n))e[t]=n[t];e.alive=-1,e.$g=null,VimiumInjector=e})(),(function(t,n){function e(t,e){var o,c,i,r,a,m,h,p,k,C,$,E,w=VimiumInjector,y=w&&w.clickable,L=w&&w.callback;if(t||(i=e&&e.message,r=s.id||location.host||location.protocol,c=!!(i&&i.lastIndexOf("not exist")>=0&&s.id),false===t?o=": not in the allow list.":!c&&e?o=i?":\n\t".concat(i):": no backend found.":b>3?(o=i?":\n\t".concat(i):": retried but failed (".concat(t,")."),c=false):(setTimeout(l,200*b),b++,c=true),c||(o=o||" (".concat(b," retries)."),console.log("%cVimium C%c: %cfail%c to inject into %c%s%c %s","color:red","color:auto","color:red","color:auto","color:#0c85e9",r,"color:auto",o),L&&w.callback(-1,o))),w&&"function"==typeof w.destroy&&w.destroy(true),a=VimiumInjector={id:g,alive:0,host:u?t?t.host:"":g,version:t?t.version:"",cache:null,clickable:y,eval:null,reload:n(f),checkIfEnabled:null,$:null,$h:t?t.h:"",$m:function(t){VimiumInjector&&VimiumInjector.$r("object"==typeof t?t.t:t)},$r:function(){},$g:null!=v?""===v||"true"===v.toLowerCase():null,getCommandCount:null,callback:L||null,destroy:null},m=document.documentElement,!(t&&m instanceof HTMLHtmlElement))return e;for($ of(p=(h=document.contains(d)?d:(document.head||m).lastChild||document.head).nextSibling,k=h.parentElement,C=[],t.s))(E=document.createElement("script")).type="text/javascript",E.async=false,E.src=$,k.insertBefore(E,p),C.push(E);C.length>0&&(C[C.length-1].onload=function(){this.onload=null;for(var t=C.length;0<=--t;)C[t].remove()}),L&&a.callback(0,"loading")}function o(){removeEventListener("DOMContentLoaded",o,true),!i||h?h(function(){h(function(){setTimeout(l,0)},{timeout:67})},{timeout:330}):setTimeout(l,67)}var c,l,u=!!0,i=!!0,r=u&&"object"==typeof browser&&!("tagName"in browser)?browser:null,a=!!u&&!!(r&&r.runtime&&r.runtime.connect),s=(a?browser:chrome).runtime,d=document.currentScript,f=d.src,m=f.indexOf("://")+3,v=d.dataset.blockFocus,h=i?window.requestIdleCallback:requestIdleCallback,b=1,g=f.slice(m,f.indexOf("/",m));u&&g.indexOf("-")>0&&(g=d.dataset.vimiumId||"vimium-c@gdh1995.cn"),VimiumInjector.id=g=d.dataset.extensionId||g,i&&(h="function"!=typeof h||"tagName"in h?null:h),c=a?function(){s.sendMessage(g,{handler:99,scripts:true}).then(e,function(t){return e(void 0,t)})}:function(){s.sendMessage(g,{handler:99,scripts:true},function(t){var n=s.lastError;return n?e(void 0,n):e(t),n})},l=function(){try{c()}catch(t){console.log("Can not send message to the extension of %o: %s",g,t&&t.message||t+"")}},"loading"!==document.readyState?o():addEventListener("DOMContentLoaded",o,{capture:true,once:true})})(0,function(t){return function(n){function e(){var e=document.documentElement,o=document.head||document.body||e,c=document.createElement("script");o&&(c.type="text/javascript",c.async=false,c.src=t,console.log("%cVimium C%c begins to reload%s.","color:red","color:auto",1===n?" because it has been updated.":""),o.appendChild(c))}var o,c=VimiumInjector;c&&(o=c.clickable,"function"==typeof c.destroy&&c.destroy(true),c.clickable=o),n?setTimeout(e,200):e()}}),(!document.currentScript||"false"!==(document.currentScript.dataset.vimiumHooks||"").toLowerCase())&&null!==VimiumInjector.clickable&&(function(){var t,n,e,o,c,l,u,i,r;VimiumInjector.clickable=VimiumInjector.clickable||new WeakSet,t=EventTarget,true!==(e=(n=t.prototype).addEventListener).vimiumHooked&&(o=HTMLAnchorElement,c=Element,l=n.addEventListener=function addEventListener(t,n){var l,u,i;return"click"===t&&!(this instanceof o)&&n&&this instanceof c&&(l=VimiumInjector)&&l.clickable&&l.clickable.add(this),2===(i=(u=arguments).length)?e.call(this,t,n):3===i?e.call(this,t,n,u[2]):e.apply(this,u)},i=(u=Function.prototype).toString,r=u.toString=function toString(){return i.apply(this===l?e:this===r?i:this,arguments)},l.vimiumHooked=true,t.vimiumRemoveHooks=function(){delete t.vimiumRemoveHooks,n.addEventListener===l&&(n.addEventListener=e),u.toString===r&&(u.toString=i)},l.prototype=r.prototype=void 0)})();