"use strict";__filename="pages/async_bg.js",define(["require","exports"],function(n,e){var t,o,u,i,r,c,l,a,f,s,d,m,v,p,h,g,b,y,w,j,k,q,K,M,V,C;Object.defineProperty(e,"__esModule",{value:true}),e.pn=e.simulateClick=e.f=e.bn=e.p=e.import2=e.Z=e.N=e.toggleReduceMotion=e.toggleDark=e.$$=e.$=e.wn=e.w=e.kn=e.on=e.sn=e.An=e.yn=e.wt=e.dn=e.OnSafari=e.OnEdge=e.OnFirefox=e.OnChrome=void 0,e.OnChrome=!0,e.OnFirefox=!!0,e.OnEdge=!!0,e.OnSafari=!!0,t=navigator.userAgentData,e.dn=(o=t&&(t.brands||t.uaList))?!!o.find(function(n){return n.brand.includes("Edge")||n.brand.includes("Microsoft")}):matchMedia("(-ms-high-contrast)").matches,e.wt=o?(u=o.find(function(n){return n.brand.includes("Chromium")}))?u.version:83:(K=navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/))?75==+K[1]&&matchMedia("(prefers-color-scheme)").matches?81:0|K[1]:998,e.yn=999,e.sn=chrome,e.on=new Promise(function(n){var t;i=new Promise(function(n){t=n}),addEventListener("VimiumC",function o(){e.wt<55&&removeEventListener("VimiumC",o,true),y(t),e.Z(n)},{once:true,capture:true})}),r=4,c=new Map,l=null,a=null,f=null,s=Object.create(null),d=1,m=null,e.kn=-1,v=function(n){var e,t,o;if(m&&(a=0),false!==n){for(e=s[n.i],delete s[n.i],t=n.a,o=0;o<e.length;o++)e[o](t[o]);VApi&&m&&0===Object.keys(s).length&&b()}else alert("Can not send info to the background: not trusted")},p=function(){m=0,console.log("[WARNING] the temp port is disconnected unexpectedly; need to replay messages using VApi"),a&&i.then(function(){var n,e,t,o=a,u=o?Object.keys(s):[];for(n of(a=0,u))e=s[n],(t=o[n])&&e&&(l=t,f=e,h(t.length))})},h=function(n){var t,o,u,i,r;l&&(t=VApi,(o=l.length)>(n||1)?y(h.bind(null,o)):(t&&m&&0===Object.keys(s).length&&b(),0!==n?(u=d++,s[u]=f,f=null,(r=(i=e.sn.extension.getBackgroundPage)&&i())&&r.onPagesReq?r.onPagesReq({i:u,q:l}).then(v):t?t.r[0](38,{i:u,q:l},v):(null==m&&((m=e.sn.runtime.connect({name:"64"})).onMessage.addListener(v),m.onDisconnect.addListener(p)),m&&m.postMessage({H:38,i:u,q:l}),0!==a&&((a||(a=Object.create(null)))[u]=l)),l=null):l=f=null))},e.w=function(n,e){return new Promise(function(t){l||g(),l.push({n:n,q:void 0!==e?e:null}),f.push(t)})},e.wn=g=function(){l||(l=[],f=[],y(h))},b=function(){var n=m;m=null,n&&(n.onDisconnect.removeListener(p),n.onMessage.removeListener(v),n.disconnect())},y=globalThis.queueMicrotask?queueMicrotask:function(n){Promise.resolve().then(n)},e.$=function(n){return document.querySelector(n)},e.$$=function(n,e){var t=(e||document).querySelectorAll(n);return[].slice.call(t)},e.toggleDark=function(n){var e,t=document.head.querySelector("meta[name=color-scheme]"),o=2===n?"light dark":1===n?"dark":"light";t.content!==o&&(t.content=o,(e=document.documentElement.classList).toggle("no-dark",!n),e.toggle("dark",1===n))},e.toggleReduceMotion=function(n){document.documentElement.classList.toggle("less-motion",n)},e.Z=(M=function(){var n,e=V.length;for(n=0;n<e;n++)V[n]();V.length>e?(V.splice(0,e),y(M)):V.length=0},V=[],e.N=function(n,e){7==(r=(r|n)&~(e||0))&&y(M)},function(n,e){V.length<=0&&7===r&&y(M),9===e?V.unshift(n):V.push(e?n.bind(null,e):n)}),e.import2=function(n){return define([n])},e.p=function(n,e){var t=c.get(n);return null!=e&&t&&(t=t.replace(/\$\d/g,function(n){return e[+n[1]-1]})),t},w=function(n,e){return n&&n.split(" ").reduce(function(n,t){return n||(t.includes("=")?t.startsWith(e)?t.slice(e.length+1):n:t)},"")},e.bn=e.sn.i18n.getMessage,j=location.pathname.replace("/pages/","").split(".")[0],k=e.bn("lang1"),e.f=w(e.bn("i18n"),j)||k||"en",Promise.all(e.f.split(",").map(function(n){var e="/i18n/".concat(n,"/").concat("show"===j?"popup":j,".json");return fetch(e).then(function(n){return n.json()}).catch(function(n){return console.log("Can not load the language file:",e,":",n),null})})).then(function(n){var t,o,u=c;for(t of n.reverse())if(t)for(o in t)u.set(o,t[o]);e.N(2)}),C=function(n,e){return new Promise(function(t){var o=t.bind(0,void 0),u=n.call(e),i=function(n){var e=u.next(n);Promise.resolve(e.value).then(e.done?t:i,o)};i()})},globalThis.__awaiter=function(n,e,t,o){return C(o,n)},e.wt>75&&e.sn.storage.local.get("autoDarkMode",function(n){var t=n&&n.autoDarkMode;return(false===t||1===t||0===t)&&e.toggleDark(t?1:0),e.sn.runtime.lastError}),k&&"popup"!==j&&(q=e.bn("v"+j))&&(document.title="Vimium C "+q),"options"===j&&e.on.then(function(){VApi.r[0](38,{i:1,q:[{n:26,q:null}]},function(n){false!==n&&(e.kn=n.a[0])})}),e.simulateClick=function(n,e){var t;return e=e||{ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},t=new MouseEvent("click",{bubbles:true,cancelable:true,composed:!0,view:window,detail:1,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey,button:0,buttons:1,relatedTarget:null}),n.dispatchEvent(t)},e.pn=function(n){return n.shiftKey};"undefined"==typeof VApi&&(globalThis.VApi=void 0)});