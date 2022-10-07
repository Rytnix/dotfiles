"use strict"
;__filename="background/eval_urls.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./exclusions"],function(e,r,n,s,u,a,t,c,l){
var i,f,o;Object.defineProperty(r,"__esModule",{value:true}),n.u=function(e,r,l,p){var d,g,b,y,h,m,v,x,$,k,_,w;if(r|=0,
"paste"===e?e+=" .":e.includes("%20")&&!e.includes(" ")&&(e=e.replace(/%20/g," ")),
r<0||!(e=e.trim())||(d=e.search(/[/ ]/))<=0||!/^[a-z][\da-z\-]*(?:\.[a-z][\da-z\-]*)*$/i.test(g=e.slice(0,d).toLowerCase())||/\.(?:css|html?|js)$/i.test(g))return null
;if(!(e=e.slice(d+1).trim()))return null;if(m=/[\s+,\uff0b\uff0c]+/g,1===r)switch(g){case"sum":case"mul":
e=e.replace(m,"sum"===g?" + ":" * "),g="e";break;case"avg":case"average":b=e.split(m),
e="("+b.join(" + ")+") / "+b.length,g="e"}if(1===r)switch(g){case"e":case"exec":case"eval":case"expr":case"calc":
case"m":case"math":return u.import2("/lib/math_parser.js").then(i.bind(0,e));case"error":return[e,3]
}else if(r>=2)switch(g){case"run":return[["run",e],6];case"status":case"state":return r>=3&&f(e),[e,r>=3?4:7]
;case"url-copy":case"search-copy":case"search.copy":case"copy-url":
if((h=a.$e(e,null,1,p))instanceof Promise)return h.then(function(e){var r=e[0]||e[2]||""
;return r=r instanceof Array?r.join(" "):r,Promise.resolve(n.h(r)).then(function(e){return[e,1]})})
;e=(h=5===a.xe&&h instanceof Array?h[0]:h)instanceof Array?h.join(" "):h;case"cp":case"copy":case"clip":
return"string"==typeof(v=n.h(e))?[e,1]:v.then(function(e){return[e,1]})}switch(g){case"urls":return r<1?null:o(e,r)
;case"cd":case"up":if(!(b=(e+"  ").split(" "))[2]){if(r<1)return null
;if("string"!=typeof(h=c.rr()))return h.then(function(s){var u=s&&n.u("cd "+e+" "+(e.includes(" ")?s:". "+s),r,l,p)
;return u?"string"==typeof u?[u,7]:u:[s?"fail in parsing":"No current tab found",3]});b[2]=h}return x="/"===(g=b[0])[0],
d=parseInt(g,10),d=isNaN(d)?"/"===g?1:x?g.replace(/(\.+)|./g,"$1").length+1:-g.replace(/\.(\.+)|./g,"$1").length||-1:d,
($=t.He({u:b[2],p:d,t:null,f:1,a:"."!==b[1]?b[1]:""}))&&$.u||[$?$.e:"No upper path",3];case"parse":case"decode":
(g=e.split(" ",1)[0]).search(/\/|%2f/i)<0?e=e.slice(g.length+1).trimLeft():g="~",b=[e=s.ft(e)],e=a.$e(e,null,0,p),
4!==a.xe&&(y=t.He({u:e}))?""===y.u?b=[g]:(b=y.u.split(" ")).unshift(g):b=b[0].split(s.qt);break;case"sed":
case"substitute":case"sed-p":case"sed.p":case"sed2":return k=e.split(" ",1)[0],e=e.slice(k.length+1).trim(),
_="sed2"===g?e.split(" ",1)[0]:"",[e=(e=e.slice(_.length).trim())&&n.p(e,g.endsWith("p")?32768:0,_?{r:k,k:_
}:/^[@#$-]?[\w\x80-\ufffd]+$|^\.$/.test(k)?{r:null,k:k}:{r:k,k:null}),5];case"u":case"url":case"search":
b=s.ft(e,true).split(s.qt);break;case"paste":if(r>0)return(h=n.f(e))instanceof Promise?h.then(function(e){
return[e?e.trim().replace(s.qt," "):"",5]}):[h?h.trim().replace(s.qt," "):"",5];default:return null}
return l?[b,2]:p&&p>12?null:(w=b[0]&&n.mn.map.has(b[0])?b.shift():null,a.ge(b,w,12===p?0:r,p))},i=function(e,r){
var n,s,u,t;for(a.Ie.test(e)&&(e=e.slice(1,-1)),n=/([\u2070-\u2079\xb2\xb3\xb9]+)|[\xb0\uff0b\u2212\xd7\xf7]|''?/g,
e=(e=(e=e.replace(/\uff0c/g," ")).replace(/deg\b/g,"\xb0").replace(/[\xb0']\s*\d+(\s*)(?=\)|$)/g,function(e,r){
return(e=e.trim())+("'"===e[0]?"''":"'")+r}).replace(n,function(e,r){var n,s,u=""
;if(!r)return"\xb0"===e?"/180*PI+":(n="\uff0b\u2212\xd7\xf7".indexOf(e))>=0?"+-*/"[n]:"/".concat("''"===e?3600:60,"/180*PI+")
;for(s of e)u+=s<"\xba"?s>"\xb3"?1:s<"\xb3"?2:3:s.charCodeAt(0)-8304;return u&&"**"+u
}).replace(/([\d.])rad\b/g,"$1")).replace(/^=+|=+$/g,"").trim(),s=[].reduce.call(e,function(e,r){
return e+("("===r?1:")"===r?-1:0)},0);s<0;s++)e="("+e;for(;s-- >0;)e+=")";if(e){
for(;e&&"("===e[0]&&")"===e.slice(-1);)e=e.slice(1,-1).trim();e=e||"()"}if(u="",
(t=r.MathParser||globalThis.MathParser||{}).evaluate){try{u="function"==typeof(u=t.evaluate("()"!==e?e:"0"))?"":""+u
}catch(e){}t.clean(),t.errormsg&&(t.errormsg="")}return[u,0,e]},f=function(e){
var r,u,a,t,i,f,o,p,d,g,b,y,h,m,v,x,$,k,_=n.U;if(!parseInt(e,10)||(_=parseInt(e,10),e=e.slice(e.search(/[/ ]/)+1)),
r=n.K.get(_||(_=n.U))){for($ of(n.I=r.ar||r.cr,a=(u=e.search(/[/ ]/))>0?e.slice(u+1):"",e=e.toLowerCase(),
u>0&&(e=e.slice(0,u)),e.includes("-")&&e.endsWith("able")&&(e+="d"),a=((t=!!a&&/^silent/i.test(a))?a.slice(7):a).trim(),
i=0,f=function(e){console.log(e),i||c.showHUD(e),i=1},a.includes("%")&&/%[a-f0-9]{2}/i.test(a)&&(a=s.lt(a)),
a&&!a.startsWith("^ ")?(f('"vimium://status" only accepts a list of hooked keys'),
a=""):a&&(o=a.match(/<(?!<)(?:a-)?(?:c-)?(?:m-)?(?:s-)?(?:[a-z]\w+|[^\sA-Z])>|\S/g),
a=o?o.join(" ").replace(/<(\S+)>/g,"$1"):""),g=(d=n.I.s).Sn,b=l.lr?1===g?g:(p=l.fr(d.ye,d))?1:null===p?0:2:0,
h=!!a&&"enable"===e,v={N:1,
p:2===(y="enable"===e?0:"disable"===e?2:"toggle-disabled"===e?2!==g?2===b?null:2:2===b?0:null:"toggle-enabled"===e?0!==g?0===b?null:0:0===b?2:null:"toggle-next"===e?1===g?0:0===g?2===b?null:2:2===b?0:null:"toggle"===e||"next"===e?0!==g?0:2:("reset"!==e&&f('Unknown status action: "'.concat(e,'", so reset')),
null))||h?a:null,f:m=null===y?0:2===y?3:1},x=m?y:0,r.or=m?{Sn:x,er:v.p}:null,r.so))k=$.s,
!m&&l.lr&&1!=(x=null===(p=v.p=l.fr(k.ye,k))?0:p?1:2)&&k.Sn===x||(k.Sn=x,$.postMessage(v));x=r.cr.s.Sn,
t||i||c.showHUDEx(n.I,"newStat",0,[[0!==x||h?2===x?"fullyDisabled":"halfDisabled":"fullyEnabled"]]),
n.rn&&x!==g&&n.M(_,x)}},o=function(e,r){var s,u,t,c,l=e.indexOf(":")+1||e.indexOf(" ")+1
;if(l<=0)return["No search engines given",3]
;if((s=e.slice(0,l-1).split(e.lastIndexOf(" ",l-1)>=0?" ":"|").filter(function(e){return n.mn.map.has(e)
})).length<=0)return["No valid search engines found",3];for(c of(u=e.slice(l).split(" "),t=["openUrls"],
s))t.push(a.ge(u,c,r));return t.some(function(e){return e instanceof Promise})?Promise.all(t).then(function(e){
return[e,6]}):[t,6]}});