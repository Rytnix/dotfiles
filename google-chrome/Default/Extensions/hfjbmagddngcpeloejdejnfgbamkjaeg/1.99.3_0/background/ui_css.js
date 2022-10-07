"use strict"
;__filename="background/ui_css.js",define(["require","exports","./store","./utils","./settings","./ports"],function(n,i,r,t,e,o){
var u,s,f,c,a,l;Object.defineProperty(i,"__esModule",{value:true}),i.ni=i.ii=i.mergeCSS=i.ri=void 0,f=function(n,o){
return-1===n?i.mergeCSS(o,-1):(2===n&&(r.nn=null),(f=0===n&&r._n.get("findCSS"))?(s=null,r.an=a(f),
r.on=o.slice(u.length),void(r.in.c=r._n.get("omniCSS")||"")):void t.$n("vimium-c.css").then(function(t){var o,s,f,a,l
;u.slice(u.indexOf(",")+1),r.bn<54&&(t=t.replace(/user-select\b/g,"-webkit-$&")),
r.bn<62&&(t=t.replace(/#[\da-f]{4}([\da-f]{4})?\b/gi,function(n){
n=5===n.length?"#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4]:n
;var i=parseInt(n.slice(1),16),r=i>>16&255,t=i>>8&255,e=(255&i)/255+""
;return"rgba(".concat(i>>>24,",").concat(r,",").concat(t,",").concat(e.slice(0,4),")")})),
s=(t=(o=c(t)).ui).indexOf("all:"),f=t.lastIndexOf("{",s),a=r.bn>=53?t.indexOf(";",s):t.length,
t=t.slice(0,f+1)+t.slice(s,a+1)+t.slice(t.indexOf("\n",a)+1||t.length),r.bn>64&&true?(s=t.indexOf("display:"),
f=t.lastIndexOf("{",s),t=t.slice(0,f+1)+t.slice(s)):t=t.replace("contents","block"),
r.bn<73&&(t=t.replace("3px 5px","3px 7px")),r.bn<69&&(t=t.replace(".LH{",".LH{box-sizing:border-box;")),
r.Mn&&r.bn<89&&(t=t.replace("forced-colors","-ms-high-contrast")),t=t.replace(/\n/g,""),
r.bn<85&&(t=t.replace(/0\.01|\/\*!DPI\*\/ ?[\d.]+/g,"/*!DPI*/"+(r.bn<48?1:.5))),e.Xe("innerCSS",u+t),
e.Xe("findCSS",(l=o.find).length+"\n"+l),i.mergeCSS(r.pn.userDefinedCss,n)}));var f},i.ri=f,c=function(n){
var i,r,t=n?n.split(/^\/\*\s?#!?([A-Za-z:]+)\s?\*\//m):[""],e={ui:t[0].trim()}
;for(i=1;i<t.length;i+=2)e[r=t[i].toLowerCase()]=(e[r]||"")+t[i+1].trim();return e},a=function(n){
var i=(n=n.slice(n.indexOf("\n")+1)).indexOf("\n")+1,r=n.indexOf("\n",i);return{c:n.slice(0,i-1).replace("  ","\n"),
s:n.slice(i,r).replace("  ","\n"),i:n.slice(r+1)}},l=function(n,t){
var s,f,l,d,S,v,b,g,m,p,C,x=r._n.get("innerCSS"),_=x.indexOf("\n");if(x=_>0?x.slice(0,_):x,f=(s=c(n)).ui?x+"\n"+s.ui:x,
l=s["find:host"],d=s["find:selection"],S=s.find,v=s.omni,b="omniCSS",_=(x=r._n.get("findCSS")).indexOf("\n"),
g=(x=x.slice(0,_+1+ +x.slice(0,_))).indexOf("\n",_+1),m=x.slice(0,g).indexOf("  "),d=d?"  "+d.replace(/\n/g," "):"",
(m>0?x.slice(m,g)!==d:d)&&(x=x.slice(_+1,m=m>0?m:g)+d+x.slice(g),g=m-(_+1)+d.length,_=-1),p=x.indexOf("\n",g+1),
C=x.slice(0,p).indexOf("  ",g),
l=l?"  "+l.replace(/\n/g," "):"",(C>0?x.slice(C,p)!==l:l)&&(x=x.slice(_+1,C>0?C:p)+l+x.slice(p),_=-1),
_<0&&(x=x.length+"\n"+x),S=S?x+"\n"+S:x,x=(r._n.get(b)||"").split("\n",1)[0],v=v?x+"\n"+v:x,-1===t)return{
ui:f.slice(u.length),find:a(S),omni:v};e.Xe("innerCSS",f),e.Xe("findCSS",S),e.Xe(b,v||null),i.ri(0,f),
0!==t&&1!==t&&(o.no(function(n){var t;for(t of n.so)8&t.s.ir&&t.postMessage({N:12,H:r.on,f:32&t.s.ir?i.ni(t.s):void 0})
}),e.Qe({N:47,d:{c:r.in.c}}))},i.mergeCSS=l,i.ii=function(n,i){var e,o,u,s,f,c,a=r.in.t
;!n.o&&r.sn||(o=" ".concat(n.t," "),
s=(u=a&&" ".concat(a," ")).includes(o),e=(e=(f=null!=n.e?n.e:s)?s?a:a+o:u.replace(o," ")).trim().replace(t.qt," "),
false!==n.b?(n.o&&(r.sn=f!==" ".concat(r.pn.vomnibarOptions.styles," ").includes(o)),e!==a&&(r.in.t=e,c={N:47,d:{t:e}},
t.Zn(r.A.slice(0),function(n){return n!==i&&r.A.includes(n)&&n.postMessage(c),1}))):r.in.t=e)},i.ni=function(n){
var i=r.an;return r.bn<86&&n.ye.startsWith("file://")?s||(s={
c:i.c+"\n.icon.file { -webkit-user-select: auto !important; user-select: auto !important; }",s:i.s,i:i.i}):i},
e.eo.then(function(){
u=r.e.qn+","+r.bn+";",r.on=r._n.get("innerCSS")||"",r.on&&!r.on.startsWith(u)?(r._n.set("vomnibarPage_f",""),
i.ri(1,r.on)):i.ri(0,r.on),r.Q.userDefinedCss=i.mergeCSS})});