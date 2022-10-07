"use strict"
;__filename="background/i18n.js",define(["require","exports","./store","./utils","./browser"],function(n,r,u,t,e){
var i,o,c,f,a,s,l;Object.defineProperty(r,"__esModule",{value:true
}),r.br=r.getI18nJson=r.gr=r.$r=r._r=r.jr=r.kr=r.mr=r.Pr=void 0,r.Pr=1,o=0,r.mr=[],r.kr=function(n){
return e.de.i18n.getMessage(n)},c=function(n,u){if(1===o){var t=i.get(n)
;return null!=u&&t?t.replace(/\$\d/g,function(n){return u[+n[1]-1]}):t||""}
return o||(o=r.getI18nJson("background").then(function(n){i=n,o=1})),o.then(r.jr.bind(null,n,u))},r.jr=c,
f=function(n,u){var t;return u.forEach(function(n,u,t){if(n instanceof Array){var e=n[0]
;t[u]=1===o?i.get(e)||e:r.jr(e).then(function(n){return n||e})}}),u.some(function(n){return n instanceof Promise
})?(t=Promise.all(u),(1===o?t:(o||r.jr("NS")).then(function(){return t})).then(function(u){return r.jr(n,u)})):r.jr(n,u)
},r._r=f,r.$r=function(n,r){return n&&n.split(" ").reduce(function(n,u){
return n||(u.includes("=")?r&&u.startsWith(r)?u.slice(r.length+1):n:u)},"")},a=function(n){var u=r.kr("i18n")
;return r.$r(u,n||"background")||r.kr("lang1")||"en"},r.gr=a,s=function(n){
return t.$n("/i18n/".concat(r.gr(n),"/").concat(n,".json"))},r.getI18nJson=s,l=function(){
var n,u=r.mr,t=["$1","$2","$3","$4"];for(n=0;n<116;n++)u.push(e.de.i18n.getMessage(""+n,t));r.br=null},r.br=l});