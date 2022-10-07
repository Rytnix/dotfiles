"use strict"
;__filename="background/sync.js",define(["require","exports","./store","./utils","./browser","./settings"],function(n,e,t,i,r,u){
function o(){return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}
var f,l,c,s,a,d,y,v,S,g,p,b,m,O,N,j,J,w,T,_,k,h,x,D,q,M,P;Object.defineProperty(e,"__esModule",{value:true}),f=i.gt({
findModeRawQueryList:1,innerCSS:1,keyboard:1,newTabUrl_f:1,vomnibarPage_f:1}),l=r.de.storage,c="sync.cloud:",a=null,
d=null,y="",v=null,S=null,g=0,p=null,b=function(){return s||(s=l&&l.sync)},m=function(n){O(n,"sync")},O=function(n,e){
var t,r,u;if("sync"===e)if(t=function(n){var e,t,r,u;if(v){
for(e in i.gt(n),v)!(r=(t=e.split(":")[0])===e)&&t in v||j(t,null!=(u=r?v[e]:null)?u.newValue:n[t],n);v=null}},i.gt(n),
v?Object.assign(v,n):v=n,p)p.then(function(){return O({},e)});else for(r in n=v,v=null,n){if(u=n[r],
8===(r.includes(":")?8:j(r,null!=u?u.newValue:null)))return v=n,void b().get(t);delete n[r]}},N=function(){
console.log.apply(console,["[".concat(o(),"]")].concat([].slice.call(arguments)))},j=function(n,e,i){
var r,o,f,l,c,s,a=e&&"object"==typeof e&&e.$_serialize||"";if(n in u.Je&&q(n)){if(o=u.Je[n],a){
if("split"===a&&!i)return 8;if(8===(e=h(n,e,i)))return}null!=e?(f=p?o:t.pn[n],(s="object"!=typeof o)?(c=e,
l=f):(c=JSON.stringify(e),l=JSON.stringify(f)),c!==l&&(c===(f=s?o:JSON.stringify(o))&&(e=o),
p||N("sync.this:","update",n,"string"==typeof e?(e.length>32?e.slice(0,30)+"...":e).replace(/\n/g,"\\n"):e),
J(n,e))):t.pn[n]!=o&&(p||N("sync.this:","reset",n),J(n,o))
}else(r=a||!u.ao?-1:u.Le.indexOf(n))>=0&&t._n.get(n)!==(null!==e?e+"":void 0)&&(u.Xe(n,void 0!==e?e+"":null),u.Ke(r))},
J=function(n,e){y=n,u.Ze(n,e),y="",n in u.Ge&&u.We({N:6,d:[u.Ge[n]]})},w=function(n,e){var t=q(n)?1:u.Le.includes(n)?2:0
;t&&n!==y&&(a||(setTimeout(D,800),a=i.vt()),1===t?a[n]=e:(d||(d=[])).push(n))},T=function(n){
return n.replace(/[<`\u2028\u2029]/g,function(n){return"<"===n?"`l":"`"===n?"`d":"\u2028"===n?"`r":"`n"})},
_=function(n){return n.replace(/"|\\[\\"]/g,function(n){return'"'===n?"`q":'\\"'===n?"`Q":"`S"})},k=function(n){var e={
Q:'\\"',S:"\\\\",d:"`",l:"<",n:"\u2029",q:'"',r:"\u2028"};return n.replace(/`[QSdlnqr]/g,function(n){return e[n[1]]})},
h=function(n,e,t){var i,r,o,f,l="";switch(e.$_serialize){case"split":for(i=e.k,r=e.s,o=0;o<r;o++){
if(!(f=t[n+":"+o])||"string"!=typeof f||!f.startsWith(i))return 8;l+=f.slice(i.length)}break;case"single":
return JSON.parse(k(JSON.stringify(e.d)));default:
return N("Error: can not support the data format in synced settings data:",n,":",e.$_serialize),null}
return"string"==typeof u.Je[n]?l=k(l):(l=k(JSON.stringify(l)),JSON.parse(l.slice(1,-1)))},x=function(n,e,t){
var i,r,o,f,l,c,s,a,d,y,v,g,p,b,m,O;if(e&&!("string"!=typeof e?"object"!=typeof e:e.length<8192/6-40)&&(r="",
!((i=JSON.stringify(e)).length<8192/6-40||(o=function(n){return n.replace(/[^\x00-\xff]/g,function(n){
var e=n.charCodeAt(0);return"\\u"+(e>4095?"":"0")+e.toString(16)})},f=true,l=i.length,
3*((c=(i=T(i)).length)-l)+3*l<8093)))){
if((r=f?t.encode(i):i=o(i)).length<8093)return(f?r.length+4*(c-l):Math.ceil((r.length-c)/5*3+6*(c-l)+(l-(r.length-c)/5-(c-l))))<8093?void 0:i
;for(s=0,a=Date.now().toString(36)+":",d={},i="string"==typeof u.Je[n]?i.slice(1,-1):_(i),f?(S||(S=new TextDecoder),
r=t.encode(i)):r=o(i),y=0,v=r.length;y<v;){if(g=Math.min(y+8134,v),p=void 0,b=0,f){for(;g<v&&128==(192&r[g]);g--);
p=S.decode(r.subarray(y,g))}else p=r.slice(y,g);if(i=p.slice(-6),(b=g<v?i.lastIndexOf("\\"):-1)>0&&b>i.length-2)p+="b",
b=1;else if(b>0&&"u"===i[b+1])for(m=b=i.length-b;m++<6;p+="b");else b=0;if(p=JSON.parse('"'.concat(p,'"')),
b&&((O=p.endsWith("b"))||(g-=b),p=p.slice(0,b>1&&O?b-6:-1)),d[n+":"+s++]=a+p,y=g,s>=13)break}return d[n]={
$_serialize:"split",k:a,s:s},d}},D=function(){var n,e,o,f,l,s,y,v,g=a,p=d,m=[],O=[],j=[],J=i.vt(),T={};if(a=d=null,
g&&t.b===w){
for(e in n=Object.keys(g).length>0?new TextEncoder:null,g)for(s="string"==typeof(l=u.Je[o=e])||"object"==typeof l&&"vimSync"!==o?0:13,
null!=(f=g[o])?(y=x(o,f,n))&&"object"==typeof y?(J[o]=y,s=y[o].s):(T[o]=y?{$_serialize:"single",d:JSON.parse(y)}:f,
O.push(o)):m.push(o);s<13;s++)j.push(o+":"+s);for(o in S=n=null,p&&m.push.apply(m,p),j.push.apply(j,m),
m.length>0&&N(c,"reset",m.join(", ")),j.length>0&&b().remove(j),O.length>0&&(N(c,"update",O.join(", ")),b().set(T)),
v=function(n){b().set(J[n],function(){var e=r.fe()
;return e?N("Failed to update",n,":",e.message||e):N(c,"update (serialized) "+n),e})},J)v(o)}},q=function(n){
return!(n in f)},M=function(n){t.a=null,g&&clearTimeout(g),g=setTimeout(function(){g=0,u.oo.get(function(n){
var e,r,o,f,l,c,s,a,d=u.to;if(d.length){for(N("storage.local: update settings from localStorage"),i.gt(n),e=i.vt(),r=0,
o=d.length;r<o;r++)l=n[f=d.key(r)],f in u.Je?(s=c=t.pn[f],a=l,"object"==typeof u.Je[f]&&(a=JSON.stringify(l),
s=JSON.stringify(c)),s!==a&&u.Ze(f,c)):n[f]!==l&&"i18n_f"!==f&&(e[f]=l);Object.keys(e).length>0&&u.oo.set(e),d.clear()}
})},n)},P=function(n,e){var r,o,f,l;if(i.gt(n),r=n.vimSync||null==t.pn.vimSync&&t.hn,t.Q.vimSync(false,"vimSync"),r){
for(l in n.vimSync||(N(c,"enable vimSync"),n.vimSync=true,b().set({vimSync:true})),o=[],f=u.to,
t.pn)t.pn[l]!==u.Je[l]&&(!(l in n)&&q(l)&&("keyLayout"===l&&2&u.ao||o.push(l)),f&&f.length&&f.removeItem(l))
;for(l of o)j(l,null);for(l in n)l.includes(":")||j(l,n[l],n);M(60),u.Ve("vimSync"),setTimeout(function(){e()},4),
N(c,"download settings")}else e()},t.Q.vimSync=function(n){var e,i,r;if(b()){if(i=(e=b().onChanged)||l.onChanged,
r=e?m:O,!n)return i.removeListener(r),void(t.b=t.j);t.b!==w?(i.addListener(r),t.b=w,M(60)):a&&(N(c,"save immediately"),
D())}},u.eo.then(function(){var n,e=t.pn.vimSync;false===e||!e&&!t.hn?(t.a=(n=true===t.a)?null:M,n&&M(6e3),
t.dn=null):t.dn?(p=t.dn.then(function(n){return t.dn=null,!!n&&"install"===n.reason}).then(function(n){
return new Promise(function(e){b()?b().get(function(i){
var o=r.fe(),f=n&&t.hn&&(o||0===Object.keys(i).length)?function(){u.Ze("keyLayout",2),e()}:e;return o?(t.Q.vimSync=t.j,
f(),N("Error: failed to get storage:",o,"\n\tSo disable syncing temporarily.")):P(i,f),o}):e()})}).then(function(){
t.w=null,p=null}),t.w=Promise.race([p,new Promise(function(n){setTimeout(n,800)})]).then(function(){t.w=null,
t.pn.vimSync&&t.b!==w&&u.Ve("vimSync")})):u.Ve("vimSync")})});