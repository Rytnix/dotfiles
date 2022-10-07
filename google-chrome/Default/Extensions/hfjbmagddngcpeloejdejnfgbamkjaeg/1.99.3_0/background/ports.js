"use strict"
;__filename="background/ports.js",define(["require","exports","./store","./utils","./browser","./exclusions","./i18n"],function(n,r,u,t,o,e,l){
var f,i,c,a,s,v,d,_,b,m,g,p,N,k,I;Object.defineProperty(r,"__esModule",{value:true}),
r.getParentFrame=r.complainNoSession=r.complainLimits=r.no=r.ensuredExitAllGrab=r.showHUDEx=r.showHUD=r.safePost=r.isNotVomnibarPage=r.ensureInnerCSS=r.indexFrame=r.isExtIdAllowed=r.findCPort=r.nr=r.rr=r.OnConnect=r.sendResponse=void 0,
f=function(n,r){if(90!==n.H)u.W[n.H](n,r);else{var t=u.W[n.c](n.a,r,n.i);t!==r&&r.postMessage({N:4,m:n.i,r:t})}},
r.sendResponse=function(n,r,t){var o=u.K.get(n.s.ur);if(o&&o.so.includes(n))try{n.postMessage({N:4,m:r,r:t})}catch(n){}
},r.OnConnect=function(n,r){var t,l,a,_,b,m,g,p,N;if(64&r)s(n,r);else{if(a=(l=(t=v(n)).ye)===u.vomnibarPage_f,r>3||a){
if(999===r)return void(t.ur>=0&&!t.tr&&o.removeTempTab(t.ur,n.sender.tab.windowId,t.ye))
;if(16&r||a)return void c(n,r,a||l===u.e.Wn)}
m=1!=(5&r),void 0!==(b=(_=t.ur)>=0?u.K.get(_):void(_=t.ur=u.getNextFakeTabId()))&&null!==b.or&&m?(p=b.or.er,
N=2===(g=b.or.Sn)?3:1):(g=null===(p=e.lr?e.fr(l,t):null)?0:p?1:2,N=0),t.Sn=g,void 0!==b&&m&&(N|=4&b.ir,32&r&&(N|=128,
b.ir|=128),t.ir=N),4&r?(t.ir|=8&r,n.postMessage({N:1,p:p,f:3&N}),n.postMessage({N:6,d:u.cn})):n.postMessage({N:0,f:N,
c:u.cn,p:p,m:u.G,t:u.y,k:u.H}),n.onDisconnect.addListener(i),n.onMessage.addListener(f),
void 0!==b&&m?(2&r&&(u.rn&&b.cr.s.Sn!==g&&u.M(_,g),b.cr=n),1&r&&!b.ar&&(b.ar=n),b.so.push(n)):(u.K.set(_,{cr:n,
ar:1&r?n:null,so:[n],or:null,ir:0}),0!==g&&u.rn&&u.M(_,g),void 0!==b&&d(b.so))}},i=function(n){
var r,t,o=n.s.ur,e=u.K.get(o);e&&(r=(t=e.so).lastIndexOf(n),n.s.tr?(r===t.length-1?--t.length:r>=0&&t.splice(r,1),
t.length?n===e.cr&&(e.cr=t[0]):u.K.delete(o)):r>=0&&u.K.delete(o))},c=function(n,r,e){if(r>15){
if(e)return n.s.ur<0&&(n.s.ur=4&r?u.getNextFakeTabId():u.I?u.I.s.ur:u.U),n.s.ir|=256,u.A.push(n),
n.onDisconnect.addListener(a),n.onMessage.addListener(f),void(4&r||n.postMessage({N:42,l:u.in,s:t.l(false)}))
}else n.s.ur<0||u.bn<50||0===n.s.tr||o.se.executeScript(n.s.ur,{file:u.e.Xn,frameId:n.s.tr,runAt:"document_start"},o.fe)
;n.disconnect()},a=function(n){var r=u.A,t=r.lastIndexOf(n);t===r.length-1?--r.length:t>=0&&r.splice(t,1)},
s=function(n,r){var t,o;32&r?n.disconnect():(n.s=false,128&r?(t=u.S(null,null))&&t.t?(t.d=null,n.postMessage({N:48,
t:t.t,s:t.s}),n.onMessage.addListener(o=function(n){t&&(clearTimeout(t.i),t.r&&t.r(n)),t=null}),
n.onDisconnect.addListener(function(){o(false)})):n.disconnect():n.onMessage.addListener(f))},v=function(n){
var r=n.sender,u=r.tab;return r.tab=null,n.s={tr:r.frameId||0,Sn:0,ir:0,sr:null!=u&&u.incognito,ur:null!=u?u.id:-3,
ye:r.url}},d=function(n){for(var r of n)if(r.s.tr)try{r.disconnect()}catch(n){}},_=function(n,t,l){var f
;return(n=n||(null===(f=u.K.get(u.U))||void 0===f?void 0:f.ar))&&e.lr&&(t||e.vr)?n.s.ye:new Promise(function(t){
var e=u.bn>48&&n&&n.s.tr?o.le():null;n?(e?e.getFrame:o.tabsGet)(e?{tabId:n.s.ur,frameId:n.s.tr}:n.s.ur,function(u){
var f=u?u.url:"";return!f&&e&&(l.N=3,r.safePost(n,l)),t(f),o.fe()}):o.getCurTab(function(n){
return t(n&&n.length?o.getTabUrl(n[0]):""),o.fe()})})},r.rr=_,b=function(n,t){var o,e
;if(u.I=u.I||(null===(o=u.K.get(u.U))||void 0===o?void 0:o.ar),
"string"!=typeof(e=r.rr(u.I,t,n)))return e.then(function(r){return n.u=r,r&&u.W[n.H](n,u.I),r});n.u=e,u.W[n.H](n,u.I)},
r.nr=b,r.findCPort=function(n){var r=u.K.get(n?n.s.ur:u.U);return r?r.cr:null},r.isExtIdAllowed=function(n){
var r,t,o=null!=n.id?n.id:"unknown_sender",e=n.url,l=n.tab,f=u.Z,i=f.get(o)
;return true!==i&&l&&(t=(r=u.K.get(l.id))?r.dr:null,r&&(null==t||t!==o&&"string"==typeof t)&&(r.dr=null==t?o:2)),
null!=i?i:e===u.vomnibarPage_f||(console.log("%cReceive_ message from an extension/sender not in the allow list: %c%s","background-color:#fffbe5","background-color:#fffbe5;color:red",o),
f.set(o,false),false)},r.indexFrame=function(n,r){var t,o=u.K.get(n);for(t of o?o.so:[])if(t.s.tr===r)return t
;return null},r.ensureInnerCSS=function(n){if(8&n.ir)return null;var r=u.K.get(n.ur);return r&&(r.ir|=4),n.ir|=12,u.on},
r.isNotVomnibarPage=function(n,r){var u=n.s,t=u.ir
;return!(256&t)&&(r||512&t||(console.warn("Receive a request from %can unsafe source page%c (should be vomnibar) :\n %s @ tab %o","color:red","color:auto",u.ye.slice(0,128),u.ur),
u.ir|=512),true)},r.safePost=function(n,r){try{return n.postMessage(r),1}catch(n){return 0}},m=function(n,u){
r.showHUD(u,n)},g=function(n,t){if("string"==typeof n){var o=14===t||15===t
;o&&(n.startsWith(u.e.Gn+"-")&&n.includes("://")&&(n=n.slice(n.indexOf("/",n.indexOf("/")+2)+1)||n),
n=n.length>41?n.slice(0,41)+"\u2026":n&&n+"."),u.I&&!r.safePost(u.I,{N:12,H:r.ensureInnerCSS(u.I.s),k:o&&n?20:t||1,t:n
})&&(u.I=null)}else n.then(m.bind(null,t))},r.showHUD=g,p=function(n,u,t,o,e){if(n){var f=e||l._r(u,o)
;"string"==typeof f?r.safePost(n,{N:12,H:r.ensureInnerCSS(n.s),k:1,d:t,t:f}):f.then(r.showHUDEx.bind(null,n,"NS",t,[]))}
},r.showHUDEx=p,r.ensuredExitAllGrab=function(n){var r,u={N:8};for(r of n.so)4&r.s.ir||(r.s.ir|=4,r.postMessage(u))
;n.ir|=4},r.no=function(n,r){var o,e=t.xt(u.K),l=u.U,f=function(r){var t=u.K.get(r),o=0
;return null!=t&&(o=Math.min(t.so.length,8),n(t)),o};e.length<50?((o=e.indexOf(l))>=0&&(e.splice(o,1),n(u.K.get(l))),
t.Zn(e,f,r)):e.forEach(f)},N=function(n){r.showHUDEx(u.I,"notAllowA",0,[n])},r.complainLimits=N,k=function(){
r.complainLimits("control tab sessions")},r.complainNoSession=k,I=function(n,u,t){
return u&&o.le()?1===t&&true?o.ue(o.le().getFrame,{tabId:n,frameId:u}).then(function(u){var t=u?u.parentFrameId:0
;return t>0?r.indexFrame(n,t):null}):o.ue(o.le().getAllFrames,{tabId:n}).then(function(o){var e,l=false,f=u
;if(!o)return null;do{for(e of(l=false,o))if(e.frameId===f){l=(f=e.parentFrameId)>0;break}}while(l&&0<--t)
;return f>0&&f!==u?r.indexFrame(n,f):null}):Promise.resolve(null)},r.getParentFrame=I});