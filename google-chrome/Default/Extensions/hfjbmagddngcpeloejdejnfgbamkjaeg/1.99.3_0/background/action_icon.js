"use strict"
;__filename="background/action_icon.js",define(["require","exports","./store","./utils","./i18n","./browser","./ports"],function(n,e,t,i,a,u,o){
var r,l,c,s;Object.defineProperty(e,"__esModule",{value:true}),e.ei=e.ti=void 0,
r=["/icons/enabled.bin","/icons/partial.bin","/icons/disabled.bin"],e.ti=u.de.action||u.de.browserAction,c=function(n){
fetch(r[n]).then(function(n){return n.arrayBuffer()}).then(function(e){
var a,u,o,r=new Uint8ClampedArray(e),c=e.byteLength/5,s=0|Math.sqrt(c/4),f=s+s,b=i.vt()
;for(b[s]=new ImageData(r.subarray(0,c),s,s),b[f]=new ImageData(r.subarray(c),f,f),t.en[n]=b,a=l.get(n),l.delete(n),u=0,
o=a.length;u<o;u++)t.K.has(a[u])&&t.M(a[u],n,true)})},e.ei=function(){var n,e,i=t.rn;i!==!!t.en&&(t.M=i?s:t.j,
n=function(n){var e=n.cr.s;0!==e.Sn&&t.M(e.ur,i?e.Sn:0)},e=function(){return t.rn===i},i?(t.en=[null,null,null],
l=new Map,o.no(n,e)):setTimeout(function(){t.rn||null==t.en||(t.en=null,l=null)},200))},s=function(n,i,a){var o,r,s
;n<0||((o=t.en[i])?(r=e.ti.setIcon,s={tabId:n,imageData:o
},a?r(s,u.fe):r(s)):l.has(i)?l.get(i).push(n):(setTimeout(c,0,i),l.set(i,[n])))},e.ei()});