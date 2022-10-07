"use strict";__filename="background/browser.js",define(["require","exports","./store","./utils"],function(n,e,r,u){
var t,o,i,f,l,c,a,s,d,v,m,p,g,b;Object.defineProperty(e,"__esModule",{value:true}),
e.import2=e.n=e.s=e.ne=e.removeTempTab=e.downloadFile=e.makeTempWindow_r=e.makeWindow=e.openMultiTabs=e.tabsCreate=e.selectWndIfNeed=e.selectWnd=e.selectTab=e.ee=e.re=e.ue=e.te=e.selectIndexFrom=e.selectFrom=e.getCurWnd=e.oe=e.ie=e.getCurTabs=e.getCurTab=e.isTabMuted=e.getTabUrl=e.getGroupId=e.tabsUpdate=e.tabsGet=e.fe=e.le=e.ce=e.ae=e.se=e.de=void 0,
e.de=chrome,e.se=e.de.tabs,e.ae=e.de.windows,e.ce=function(){return e.de.sessions},e.le=function(){
return e.de.webNavigation},e.fe=function(){return e.de.runtime.lastError},e.tabsGet=e.se.get,e.tabsUpdate=e.se.update,
e.getGroupId=function(n){var e=n.groupId;return-1!==e&&null!=e?e:null},e.getTabUrl=function(n){
return n.url||n.pendingUrl||""},e.isTabMuted=function(n){return n.mutedInfo.muted},e.getCurTab=e.se.query.bind(null,{
active:true,currentWindow:true}),e.getCurTabs=e.se.query.bind(null,{currentWindow:true}),e.ie=e.getCurTabs,
e.oe=function(){return true},e.getCurWnd=function(n,u){var t={populate:n}
;return r.L>=0?e.ae.get(r.L,t,u):e.ae.getCurrent(t,u)},t=function(n){return n[e.selectIndexFrom(n)]},e.selectFrom=t,
e.selectIndexFrom=function(n){for(var e=n.length;0<--e;)if(n[e].active)return e;return 0},e.te=function(n){
return/^(edge-)?extension:/.test(n)?r.e.Gn+"-"+n.slice(n.indexOf("ext")):n},e.ue=function(n){
var r=[].slice.call(arguments,1),t=u.tt(),o=t.Ut,i=t.Lt;return r.push(function(n){var r=e.fe()
;return i(r?void 0:null!=n?n:null),r}),n.apply(void 0,r),o},o=function(n){return n!==r.j?function(){var r=e.fe()
;return n(!r),r}:e.fe},e.re=o,e.ee=function(n){return new Promise(function(e){n(e)})},i=function(n,e){var u=r.$.get(n)
;return 1===u||2===u&&!(!r.Mn&&!e)},f=function(n,r){e.tabsUpdate(n,{active:true},r)},e.selectTab=f,l=function(n){
return n&&e.ae.update(n.windowId,{focused:true}),e.fe()},e.selectWnd=l,c=function(n){n.windowId!==r.L&&e.selectWnd(n)},
e.selectWndIfNeed=c,a=function(n,u,t){var o=n.url;return o?i(o,2===r.F)&&delete n.url:(o=r.newTabUrl_f,
2===r.F&&(-1===t?o.includes("pages/blank.html")&&o.startsWith(location.origin+"/"):!t&&o.startsWith(location.protocol))||i(o,2===r.F)||(n.url=o),
n.url||delete n.url),e.se.create(n,u)},e.tabsCreate=a,s=function(n,r,u,t,o,i,f){var l;o=false!==o,
l=null!=i?e.getGroupId(i):null,o||null==l||delete n.index,l=o&&null!=l&&e.se.group?l:void 0,e.tabsCreate(n,function(u){
var o,i,c,a,s;if(e.fe())return f&&f(),e.fe();for(n.index=u.index,n.windowId=u.windowId,null!=l&&e.se.group({tabIds:u.id,
groupId:l}),f&&f(u),n.active=false,o=null!=n.index,i=t?t.length:1,c=null!=l?function(n){return n&&e.se.group({
tabIds:n.id,groupId:l}),e.fe()
}:e.fe,t.length>1&&(t[0]=n.url),a=0;a<r;a++)for(s=a>0?0:1;s<i;s++)t.length>1&&(n.url=t[s]),o&&++n.index,e.se.create(n,c)
},u)},e.openMultiTabs=s,d=function(n,u,t){var o,f=false!==n.focused
;(u=u?"minimized"===u===f||"popup"===n.type||"normal"===u||"docked"===u?"":u:"")&&!u.includes("fullscreen")&&(n.state=u,
u=""),
n.focused=true,(o=n.url)||null!=n.tabId||(o=n.url=r.newTabUrl_f),"string"==typeof o&&i(o,n.incognito)&&delete n.url,
e.ae.create(n,u||!f||t?function(n){if(t&&t(n),!(u||!f)||!n)return e.fe();var r=f?{}:{focused:false};u&&(r.state=u),
e.ae.update(n.id,r)}:e.fe)},e.makeWindow=d,v=function(n,r,u){e.ae.create({type:"normal",focused:false,incognito:r,
state:"minimized",tabId:n},u)},e.makeTempWindow_r=v,m=function(n,r,t,o){e.ue(e.de.permissions.contains,{
permissions:["downloads"]}).then(function(t){var i,f,l,c;t?(i={url:n},r&&(f=/\.[a-z\d]{1,4}(?=$|[?&])/i,
r=(r="#"===(r=u.lt(r))[0]?r.slice(1):r).replace(/[\r\n]+/g," ").replace(/[/\\?%*:|"<>_]+/g,"_"),f.test(r)||(l=f.exec(n),
r+=l?l[0]:n.includes(".")?"":".bin"),i.filename=r),c=e.ue(e.de.downloads.download,i),o&&c.then(function(){o(true)
})):o&&o(false)})},e.downloadFile=m,p=function(n){e.se.remove(n,e.fe)},e.removeTempTab=p,e.ne=function(n){
return n=n.slice(0,99).toLowerCase(),
1!==r.$.get(n)&&(n.startsWith("about:")?"about:blank"!==n:n.startsWith("chrome:")?!n.startsWith("chrome://downloads"):n.startsWith(r.e.Gn)&&!("string"!=typeof r.e.On?r.e.On.test(n):n.startsWith(r.e.On))||r.Mn&&/^(edge|extension):/.test(n)&&!n.startsWith("edge://downloads"))
},g=function(n,r){var u,t,o=e.de.permissions;u=Promise.all(n.map(function(n){return n&&e.ue(e.de.permissions.contains,n)
})),t=n.map(function(n){return n&&(n.permissions||n.origins)[0]}),u.then(function(n){
var e=false,u=false,i=function(i,c){var a,s,d,v,m=!c;if(c){for(s of(a=c.permissions)||[])(d=t.indexOf(s))>=0&&(n[d]=i,
m=true);for(v of(!a||a.length<=0)&&c.origins||[])if("chrome://*/*"!==v)(d=t.indexOf(v))>=0&&(n[d]=i,
m=true);else for(d=0;d<t.length;d++)(t[d]||"").startsWith("chrome://")&&(n[d]=i,m=true)}
m&&(false===r(n,true)&&(e=u=false),e!==n.includes(false)&&o.onAdded[(e=!e)?"addListener":"removeListener"](f),
u!==n.includes(true)&&o.onRemoved[(u=!u)?"addListener":"removeListener"](l))},f=i.bind(null,true),l=i.bind(null,false)
;n.includes(false)||n.includes(true)?i(true):r(n,false)})},e.s=g,b=function(n){var u,t=location.origin.length
;for(u of r.e.Tn.slice(0,-1))e.se.executeScript(n,{file:u.slice(t),allFrames:true},e.fe)},e.n=b;e.import2=function(e){
return new Promise(function(r,u){n([e],r,u)}).then(n=>n)},r.Y<6&&(r.dn=new Promise(function(n){
var r=e.de.runtime.onInstalled,u=function(e){var t=u;t&&(u=null,n(e),r.removeListener(t))};r.addListener(u),
setTimeout(u,6e3,null)}))});