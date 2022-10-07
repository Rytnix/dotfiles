"use strict"
;__filename="background/run_keys.js",define(["require","exports","./store","./utils","./browser","./ports","./exclusions","./i18n","./key_mappings","./run_commands"],function(n,e,t,r,l,o,u,i,f,a){
var s,c,v,p,y,d,b,k,g,$,m,_,j;Object.defineProperty(e,"__esModule",{value:true}),
e.parseEmbeddedOptions=e.runKeyInSeq=e.parseKeySeq=e.runKeyWithCond=void 0,s=Math.abs,
c=["expect","keys","options","mask"],v=0,p=function(n){var e,t,l=r.vt(),o=[],u=""
;for(e in n)e.includes("$")||(e.startsWith("o.")?e.length>2&&(l[u=e.slice(2)]=n[e]):c.includes(e)||o.push(e))
;for(t of o)l[u=t]=n[t];return u?l:null},y=function(n,i){var f,a,s,c,v,p,y=n.host,d=n.iframe,b=n.fullscreen,k=n.element
;if(void 0===y&&(y=n.host=null!=n.url?n.url:null,delete n.url),"string"==typeof y&&(y=n.host=u.Mt(y)),null!=y){
if(s=void 0,
null!=(a=i.url)||(3===y.t?!["/*","*"].includes(y.v.pathname)||"*"!==y.v.search||"*"!==y.v.hash:2!==y.t||(s=y.v.indexOf("/",y.v.indexOf("://")+3))!==y.v.length-1&&-1!==s)||(a=(c=(null===(f=t.K.get(t.I?t.I.s.ur:t.U))||void 0===f?void 0:f.ar)||t.I)?c.s.ye:null),
null==a&&(a=o.rr(null,true))instanceof Promise)return a.then(function(n){var r
;i.url=n||(t.I?((null===(r=t.K.get(t.I.s.ur))||void 0===r?void 0:r.ar)||t.I).s.ye:""),e.runKeyWithCond(i)}),0
;if(!u.Ft(y,a))return 1}if(null!=d){if(!t.I&&false!==d)return 1;if("string"==typeof d&&(d=n.iframe=u.Mt(d)||true),
"boolean"==typeof d){if(d!==!!(t.I&&t.I.s.tr))return 1}else if(!u.Ft(d,t.I.s.ye))return 1}if(null==b);else{
if(null==i.fullscreen)return l.getCurWnd(false,function(n){return i.fullscreen=!!n&&n.state.includes("fullscreen"),
e.runKeyWithCond(i),l.fe()}),0;if(!!b!==i.fullscreen)return 1}if(k&&"*"!==k&&(v="string"==typeof k?[]:k,
"string"==typeof k&&(n.element=k.split(",").some(function(n){
var e=(n="*"===n[0]?n.slice(1):n).indexOf("#"),t=n.indexOf("."),l=n.length;return n&&v.push({
tag:n.slice(0,e<0?t<0?l:t:t<0?e:Math.min(t,e)),id:e>=0?n.slice(e+1,t>e?t:l):"",
classList:r.ut(t>=0?n.slice(t+1,e>t?e:l):"")}),"*"===n||n.includes(" ")})?(v.length=0,"*"):v),p=i.element,v.length)){
if(null==p)return t.I&&o.safePost(t.I,{N:14,n:performance.now(),c:i}),t.I?0:1;if(!v.some(function(n){
return 0===p?"body"===n.tag&&!n.id&&!n.classList:(!n.tag||p[0]===n.tag)&&(!n.id||p[1]===n.id)&&(!n.classList.length||p[2].length>0&&n.classList.every(function(n){
return p[2].includes(n)}))}))return 1}return 2},d=function(n){var e,t,r,l=n.expect
;return n.$normalized?l:(e=function(n){return n?"string"==typeof n?n.trim().split(/[, ]+/):n instanceof Array?n:[]:[]},
t=[],l&&(l instanceof Array?t=l.map(function(n){return n instanceof Array?{env:n[0],keys:e(n[1]),options:n[2]
}:n&&"object"==typeof n?{env:n.env||n,keys:e(n.keys),options:n.options}:null
}):"object"==typeof l?t=Object.keys(l).map(function(n){var t=l[n],r=t&&"object"==typeof t&&!(t instanceof Array);return{
env:n,keys:e(r?t.keys:t),options:r?t.options:null}
}):"string"==typeof l&&/^[^{].*?[:=]/.test(l)&&(r=l.includes(":")?/:/:/=/,
t=l.split(l.includes(";")?/[;\s]+/g:/[,\s]+/g).map(function(n){return n.split(r)}).map(function(n){
return 2!==n.length?null:{env:n[0].trim(),keys:e(n[1]),options:null}}))),t=t.map(function(n){
return n&&n.env&&"__proto__"!==n.env&&n.keys.length?n:null}),a.overrideOption("expect",t,n),
a.overrideOption("keys",e(n.keys),n),a.overrideOption("$normalized",1,n),t)},b=function(n){
var t=n.startsWith("#")?n.split("+",1)[0]:"";return{tree:e.parseKeySeq(n.slice(t?t.length+1:0)),
options:t.length>1?e.parseEmbeddedOptions(t.slice(1)):null}},k=function(n){
var r,l,u,i,k,g,$,_,j,h,z,A,O,w,x,N,T,K,M,q=s(t.B),I=t.K.get(t.I?t.I.s.ur:t.U);for(u of(t.I||(t.I=I?I.cr:null),
n=n||t.Dn||{},t.Dn=null,l=d(t.yn)))if(u){if("string"==typeof(k=i=u.env)){
if(!f.Wt)return void o.showHUD("No environments have been declared")
;if(void 0===(k=f.Wt.get(k)))return void o.showHUD('No environment named "'.concat(i,'"'))
;if("string"==typeof k&&(k=f.Pt(k,2),f.Wt.set(i,k)),null===k)continue}if(0===(g=y(k,n)))return;if(2===g){r=u;break}}
if($=r?r.keys:t.yn.keys,h=r?"string"==typeof r.env?"[".concat(r.env,"]: "):"(".concat(l.indexOf(r),")"):"",
0===$.length)o.showHUD(h+"Require keys: comma-seperated-string | string[]");else if(q>$.length&&1!==$.length)o.showHUD(h+"Has no such a key");else if((_=$[j=1===$.length?0:t.B>0?q-1:$.length-q])&&("string"==typeof _||"object"==typeof _&&_.tree&&"object"==typeof _.tree&&"number"==typeof _.tree.t)){
if(z=1===$.length?t.B:1,"string"==typeof _){if(null!=(A=t.yn.mask)){
if(!(O=a.fillOptionWithMask(_,A,"",c,z)).ok)return void o.showHUD((O.result?"Too many potential keys":"No key")+" to fill masks")
;A=O.ok>0,_=O.result,z=O.useCount?1:z}_=b(_),A||($[j]=_)}
if(x=_.options,3===(w=_.tree).t||0===w.val.length)return void(3===w.t&&o.showHUD(w.val))
;N=r&&r.options||t.yn.options||(t.yn.$masked?null:p(t.yn)),N=a.concatOptions(N,x),T=v=(v+1)%64||1,
K="<v-runKey:$1>".replace("$1",""+T),w.val.length>1||0!==w.val[0].t?(M={$seq:{keys:w,repeat:z,options:N,cursor:w,
timeout:0,id:K,fallback:a.parseFallbackOptions(t.yn)},$then:K,$else:"-"+K,$retry:-999},a.replaceCmdOptions(M),
t.D.set(K,f.Vt("runKey",M)),e.runKeyInSeq(M.$seq,1,null,n)):m(w.val[0],{keys:w,repeat:z,options:N,cursor:w,timeout:0,
id:K,fallback:null},n)}else o.showHUD(h+"The key is invalid")},e.runKeyWithCond=k,e.parseKeySeq=function(n){
var e,t,l,o,u,i,f=/^([$%][a-z]\+?)*([\d-]\d*\+?)?([$%][a-z]\+?)*((<([acmsv]-){0,4}.\w*(:i)?>|[^#()?:+$%-])+|-)(#[^()?:+]*)?/,a={
t:1,val:[],par:null},s=a;for(t=n.length>1?0:n.length;t<n.length;t++)switch(n[t]){case"(":(e=a).val.push(a={t:1,val:[],
par:a});break;case")":e=a;do{e=e.par}while(2===e.t);a=e;break;case"?":case":":
for(e="?"===n[t]?null:a;e&&2!==e.t;)e=e.par;e&&!e.val.f||(a.par={t:2,val:{cond:a,t:null,f:null},par:(e=a.par)||(s={t:1,
val:[],par:null})
},e?1===e.t?e.val.splice(e.val.indexOf(a),1,a.par):e.val.t===a?e.val.t=a.par:e.val.f=a.par:s.val.push(a.par),e=a.par),
a={t:1,val:[],par:e},"?"===n[t]?e.val.t=a:e.val.f=a;break;case"+":break;default:
for(;t<n.length&&!"()?:+".includes(n[t]);){if(!(l=f.exec(n.slice(t))))return{t:3,
val:"Invalid item to run: "+((o=n.slice(t)).length>12?o.slice(0,11)+"\u2026":o),par:null}
;(i=(u=l[0]).indexOf("#"))>0&&/[#&]#/.test(u.slice(i))&&(u=n.slice(t)),a.val.push({t:0,val:u,par:a}),t+=u.length}t--}
return 1===n.length&&s.val.push({t:0,val:n,par:s}),r.jt(),s},g=function(n,e){var t,r,l=true,o=n
;for(0===o.t&&(o=(r=(t=o.par).val.indexOf(o))<t.val.length-1&&e>0?t.val[r+1]:(l=false,
t));o&&0!==o.t;)if(l&&1===o.t&&o.val.length>0)o=o.val[0];else if(l&&2===o.t)o=o.val.cond;else{if(!o.par){o=null;break}
1===o.par.t?((l=(r=(t=o.par).val.indexOf(o))<t.val.length-1)&&e<0&&(e=1),
o=l?t.val[r+1]:t):o=(l=o===(t=o.par).val.cond)&&(e>0?t.val.t:(e=1,t.val.f))||(l=false,t)}return o},
e.runKeyInSeq=function(n,e,r,l){
var u,f,s=g(n.cursor,e),c=s&&g(s,1),p=s&&g(s,-1),y=!(s&&(c||p)),d=n.fallback,b=t.yn,k=n.id;if(y&&(t.D.delete(k),
clearTimeout(n.timeout||0),"<v-runKey:$1>".replace("$1",""+v)===k&&(v=Math.max(--v,0)),s&&(delete b.$then,
delete b.$else,
d&&(n.options=n.options?Object.assign(d,n.options):d))),s)(u=(c&&b.$then&&("string"==typeof c.val?c.val:c.val.prefix).includes("$l")?1:0)+(p&&b.$else&&("string"==typeof p.val?p.val:p.val.prefix).includes("$l")?2:0))&&(n.cursor===n.keys&&(a.overrideCmdOptions({}),
b=t.yn),1&u&&(b.$then="$l+"+b.$then),2&u&&(b.$else="$l+"+b.$else)),f=y?0:n.timeout=setTimeout(function(){
var n=t.D.get(k),e=n&&n.At;e&&e.$seq&&e.$seq.timeout===f&&t.D.delete(k)},3e4),m(s,n,l);else{
if(d&&(d.$f?d.$f.t=r&&r.t||d.$f.t:d.$f=r,a.runNextCmdBy(e>0?1:0,d,1)))return
;e<0&&r&&r.t&&o.showHUD(i.kr("".concat(r.t)))}},$=function(n){var t,r,l,o,u,i,f,a,s=n.val
;return"string"!=typeof s?s:(r=!!(t=/^([$%][a-zA-Z]\+?|-)+/.exec(s))&&t[0].includes("-"),
l=!t||"+-".includes(t[0].slice(-1)),o=t?t[0].replace(/[+-]/g,"").replace(/%/g,"$"):"",s=t?s.slice(t[0].length):s,
u=(r?-1:1)*((t=/^\d+/.exec(s))&&parseInt(t[0],10)||1),s=t?s.slice(t[0].length):s,
f=(i=(s=l||t||!s.startsWith("+")?s:s.slice(1)).indexOf("#",1))>0?s.slice(0,i):s,a=null,
i>0&&i+1<s.length&&(s=s.slice(i+1),a=e.parseEmbeddedOptions(s)),n.val={prefix:o,count:u,
key:"__proto__"!==f?f:"<v-__proto__>",options:a})},e.parseEmbeddedOptions=function(n){
var e,t,l=/(^|&)#/.exec(n),o=l?n.slice(l.index+l[0].length):"",u=function(n){
return"\\u"+(n.charCodeAt(0)+65536).toString(16).slice(1)},i=function(n){
return/\s/.test(n)?JSON.stringify(n).replace(/\s/g,u):n};return n=(l?n.slice(0,l.index):n).split("&").map(function(n){
var e=n.split("=",1)[0],t=n.slice(e.length);return e+(t?"="+i(r.lt(t.slice(1))):"")}).join(" "),
o&&(n=(n?n+" ":"")+(e=o.split("=",1)[0])+((t=o.slice(e.length))?"="+i(t.slice(1)):"")),f.Pt(n,2)},m=function(n,e,t){
var r=$(n),l=e.cursor===e.keys,o=l||r.prefix.includes("$c"),u=a.concatOptions(e.options,r.options);e.cursor=n,
j(r.key,r.count*(o?e.repeat:1),u,t,null,l)},t.V=function(n,e,r){var l,o,u,i,f
;for(n=n.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,""),o=1,null!=(l=/^\d+|^-\d*/.exec(n))&&(n=n.slice((u=l[0]).length),
o="-"!==u?parseInt(u,10)||1:-1),
n=n.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,""),i=1;(i=n.indexOf("#",i)+1)&&(f=n.slice(0,i-1),
!t.D.has(f)&&!/^[a-z]+(\.[a-z]+)?$/i.test(f)););t.I=e,t.x=0,t.yn=null,j(i?n.slice(0,i-1):n,o,i?n.slice(i):null,null,r)},
_=function(n){for(var e=t.yn;e&&e!==n;)e=e.$o;return e===n},j=function(n,l,u,i,s,c){
var v,p,y,d,b,k=n,g="__proto__"!==n&&t.D.get(n)||!n.includes("<")&&!n.includes(":",1)&&t.D.get(k="<v-".concat(n,">"))||null,$=true
;null==g&&n in f.It&&($=false,
g=f.Vt(n,null)),null!=g?36===g.Qt&&g.Xt&&g.At&&"object"==typeof g.At&&_(g.At)?o.showHUD('"runKey" should not call itself'):("string"==typeof u&&(u=u?e.parseEmbeddedOptions(u):null),
p=(v=t.yn)&&a.parseFallbackOptions(v),y=v&&v.$f,(u&&"object"==typeof u||p||y)&&(d=f.Ct(g),g=$?Object.assign({},g):g,
b=r.vt(),u&&a.copyCmdOptions(b,r.gt(u)),p&&a.copyCmdOptions(b,r.gt(p)),d&&a.copyCmdOptions(b,d),b.$f=y,
u&&"$count"in u?b.$count=u.$count:d&&"$count"in d&&(u&&"count"in u||(b.$count=d.$count)),g.At=b,
f.Ot(g,f.It[36===g.Qt&&g.Xt?"runKey":g.Jt])),r.jt(),c&&36===g.Qt&&g.Xt?setTimeout(function(){t.Dn=i,
a.executeCommand(g,l,t.x,t.I,0,s)
},0):(t.Dn=i,a.executeCommand(g,l,t.x,t.I,0,s))):o.showHUD('"'.concat(/^\w+$/.test(n)?k:n,'" has not been mapped'))},
t.P=function(n){var e,l,o,u,i,s,v,y,k,m,_,j,h,z,A,O,w,x,N,T=f.Ct(n);if(T||(T=n.At=r.vt()),2===T.$normalized)return n.Jt
;for(s=true,
d(i=T),i.$normalized=2,v=1,i.$count&&(v=i.$count,i=T=a.copyCmdOptions(r.vt(),i));i&&0===d(i).length&&i.keys.length>=1;){
if(y=i.keys,s=s&&1===y.length,"string"==typeof(k=y[0])){if(null!=(m=i.mask)){
if(i!==T&&(i=T=a.concatOptions(i,T||r.vt())),!(_=a.fillOptionWithMask(k,m,"",c,1,T)).ok)return;m=_.ok>0,k=_.result,
s=s&&!!_.value&&!_.useCount&&!_.useDict}k=b(k),m||(y[0]=k)}if(!(j=1===k.tree.t?g(k.tree,1):null))return
;if(s=s&&1===k.tree.val.length&&k.tree.val[0]===j,
h=$(j),!(O=(A=t.D.get(z=h.key)||!z.includes("<")&&!z.includes(":",1)&&t.D.get("<v-".concat(z,">"))||null)?A.Jt:z in f.It?z:null))return
;if(!(w=null!=A&&36===A.Qt&&A.Xt)&&!s)return n.Jt=O;if(i!==T&&(T=a.concatOptions(i,T)),
T=T.options?a.copyCmdOptions(r.vt(),T.options):T.$masked?null:p(T),
x=null!==(u=null!==(l=null===(e=h.options)||void 0===e?void 0:e.$count)&&void 0!==l?l:null===(o=k.options)||void 0===o?void 0:o.$count)&&void 0!==u?u:null==T?void 0:T.$count,
(T=!(T=a.concatOptions(a.concatOptions(T,k.options),h.options))||T!==k.options&&T!==h.options?T:a.copyCmdOptions(r.vt(),T))&&("count"in T||null!=x)&&(x=null!=x?parseFloat(x)||1:parseFloat(T.count||1)||1,
delete T.count),
v*=(null!=x?x:1)*h.count,N=A&&f.Ct(A),!w)return(T=a.concatOptions(N,T))&&T===N&&(T=a.copyCmdOptions(r.vt(),T)),
1!==v&&((T||(T=r.vt())).$count=v),Object.assign(n,f.Vt(O,T)),O
;i=!T||void 0===T.keys&&void 0===T.expect&&void 0===T.mask?N||r.vt():T=a.concatOptions(N,T)}}});