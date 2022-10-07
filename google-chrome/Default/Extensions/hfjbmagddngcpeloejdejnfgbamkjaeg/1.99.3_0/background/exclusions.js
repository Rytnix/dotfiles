"use strict"
;__filename="background/exclusions.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./settings","./ports"],function(n,t,u,o,r,e,i,l){
var f,a,c,s,v,m,p,d,$,g;Object.defineProperty(t,"__esModule",{value:true
}),t.$t=t._t=t.fr=t.Nt=t.vr=t.lr=t.Ft=t.Mt=t.St=void 0,t.St=function(n,t){var u,r
;return t=t&&t.replace(/<(\S+)>/g,"$1"),
"^"===n[0]?(u=o.rt(n.startsWith("^$|")?n.slice(3):n,"",0))||console.log("Failed in creating an RegExp from %o",n):"`"===n[0]&&((r=o.et(n.slice(1),0))||console.log("Failed in creating an URLPattern from %o",n)),
u?{t:1,v:u,k:t}:r?{t:3,v:r,k:t}:{t:2,v:n.startsWith(":vimium://")?e.he(n.slice(10),false,-1):n.slice(1),k:t}},
t.Mt=function(n){var t,u,r,i;return"^"===n[0]?(n=n.startsWith("^$|")?n.slice(3):n,
t=".*$".includes(n.slice(-2))?n.endsWith(".*$")?3:n.endsWith(".*")?2:0:0,n=0!==t&&"\\"!==n[n.length-t]?n.slice(0,-t):n,
(u=o.rt(n,""))?{t:1,v:u}:null):"`"===n[0]?(r=o.et(n.slice(1)))?{t:3,v:r
}:null:"localhost"===n||!n.includes("/")&&n.includes(".")&&(!/:(?!\d+$)/.test(n)||o.pt(n,6))?(n=(n=(n=n.toLowerCase()).endsWith("*")?n.slice(0,/^[^\\]\.\*$/.test(n.slice(-3))?-2:-1):n).startsWith(".*")&&!/[(\\[]/.test(n)?"*."+n.slice(2):n,
i=void 0,
(u=o.rt("^https?://"+(n.startsWith("*")&&"."!==n[1]?"[^/]"+n:(i=n.replace(/\./g,"\\.")).startsWith("*")?i.replace("*\\.","(?:[^./]+\\.)*?"):i),"",0))?{
t:1,v:u}:n.includes("*")?null:{t:2,v:"https://"+(n.startsWith(".")?n.slice(1):n)+"/"}):{t:2,
v:(t=(n=(n=(":"===n[0]?n.slice(1):n).replace(/([\/?#])\*$/,"$1")).startsWith("vimium://")?e.he(n.slice(9),false,-1):n).indexOf("://"))>0&&t+3<n.length&&n.indexOf("/",t+3)<0?n+"/":n
}},t.Ft=function(n,t){return 1===n.t?n.v.test(t):2===n.t?t.startsWith(n.v):n.v.test(t)},t.lr=f=false,t.vr=a=false,
c=false,s=[],v=function(n){s=n.map(function(n){return t.St(n.pattern,n.passKeys)})},m=function(n){
return(n?[t.St(n,"")]:s).map(function(n){return{t:n.t,v:1===n.t?n.v.source:2===n.t?n.v:{hash:n.v.hash,
hostname:n.v.hostname,pathname:n.v.pathname,port:n.v.port,protocol:n.v.protocol,search:n.v.search}}})},t.Nt=m,
p=function(n,r){var e,i,l,f,a="";for(i of s)if(1===i.t?i.v.test(n):2===i.t?n.startsWith(i.v):i.v.test(n)){
if(0===(l=i.k).length||"^"===l[0]&&l.length>2||c)return l&&l.trim();a+=l}
return!a&&r.tr&&n.lastIndexOf("://",5)<0&&!o.Rt.test(n)&&null!=(f=null===(e=u.K.get(r.ur))||void 0===e?void 0:e.ar)?t.fr(f.s.ye,f.s):a?a.trim():null
},t.fr=p,d=function(){var n=!r.le()||false?null:function(n){u.W[9](n)};return d=function(){return n},n},t._t=function(){
var n,t,u,o=new Set;for(n of s)if(t=n.k){if("^"===t[0]&&t.length>2)return true;for(u of t.split(" "))o.add(u)}
return o.size?o:null},$=function(n){var o,r,e=s.length>0?null:{N:1,p:null,f:0};n?e||i.We({N:3,H:9
}):(o=null!=u.en||void 0!==u.en&&u.rn,r=s,l.no(function(n){var r,i,l,f=n.cr.s.Sn,a=n.cr.s;for(r of n.so){if(i=null,l=0,
e){if(0===r.s.Sn)continue}else if(l=null===(i=t.fr(r.s.ye,r.s))?0:i?1:2,!i&&r.s.Sn===l)continue
;n.or||(r.postMessage(e||{N:1,p:i,f:0}),r.s.Sn=l)}o&&f!==a.Sn&&u.M(a.ur,a.Sn)},function(){return r===s}))},t.$t=$,
g=function(){var n,o,e=s.length>0,i=e||f?d():null;i&&(f!==e&&(t.lr=f=e,n=r.le().onHistoryStateUpdated,
e?n.addListener(i):n.removeListener(i)),a!==(o=e&&u.pn.exclusionListenHash)&&(t.vr=a=o,
n=r.le().onReferenceFragmentUpdated,o?n.addListener(i):n.removeListener(i)))},u.Q.exclusionRules=function(n){
var o=!s.length,r=u.H;v(n),c=u.pn.exclusionOnlyFirstMatch,g(),setTimeout(function(){setTimeout(t.$t,10,o),
u.H===r&&i.Ve("keyMappings",null)},1)},u.Q.exclusionOnlyFirstMatch=function(n){c=n},u.Q.exclusionListenHash=g,
i.eo.then(function(){v(u.pn.exclusionRules),c=u.pn.exclusionOnlyFirstMatch})});