"use strict"
;__filename="background/parse_urls.js",define(["require","exports","./store","./utils","./normalize_urls"],function(e,u,n,r,t){
var i,f,l,a,s,o;Object.defineProperty(u,"__esModule",{value:true}),u.ke=u.je=u.qe=u.Me=u.Ue=u.Pe=u.He=void 0,
i=function(e){var i,f,l,a,s,o,c,p,g,m,v,_=e.u,d=_.toLowerCase(),$=null,h=false;if(!r.Rt.test(t.be(d)))return r.jt(),null
;if(e.p)return{k:"",s:0,u:null!=(l=u.Pe(e)).p?l.u:_,e:null!=l.p?l.p:l.u};for(i of((f=r.it(d))&&(d=d.slice(f),
_=_.slice(f)),n.mn.rules))if(d.startsWith(i.Te)&&($=_.slice(i.Te.length).match(i.Be)))break
;if(!$||!i)return d.startsWith(a=n.e.Qn)?{k:"vimium://show",u:_=_.slice(a.length).replace(/^#!?/,""),
s:_.startsWith("image")&&_.lastIndexOf("&",_.indexOf(":")+1)+1||_.indexOf(" ")+1}:(r.jt(),null)
;for(g of($.length>1&&!i.Be.global&&$.shift(),
s=i.De,o=0,$.length>1?h=true:s instanceof RegExp?($=(d=$[0]).match(s))?($.shift(),
h=true):$=[d]:" "==s||"+"===s?(!(c=(c=(d=$[0].toLowerCase()).indexOf(":"))>0&&c<d.length?c:0)||r.Rt.test(d)||d.startsWith("file:")||(c=-1!==(p=t.Ee(d,c,d.indexOf(" ")))&&p<=3?c:0),
$=(o=c>0?d.startsWith("data:")?2:1:0)?[$[0]]:$[0].split(s)):$=$[0].split(s),d="",$))d+=" "+(o?g:r.lt(g))
;return d=d.trim().replace(o>1?/\xa0/g:r.qt," "),
m=n.mn.map.get("~"),v=!!d&&m.ye===n.mn.map.get(i.Fe).ye&&!n.mn.map.has(d.split(" ",1)[0]),r.jt(),{k:i.Fe,c:v,u:d,
s:h?d.lastIndexOf(" ")+1:0}},u.He=i,u.Pe=function(e){
var u,i,l,a,s,o,c,p,g,m,v,_,d,$,h,b,x,w,k,z,R,j=e.u,E=j.toLowerCase()
;if(1===e.p&&(u=n.p(j,131072,e.s))!==j&&u&&u!==j+"/"&&u+"/"!==j&&(i=t.$e(u,null,-2),0===t.xe))return{u:i,p:"(sed)"}
;if(!r.Rt.test(t.be(E)))return{u:"This url has no upper paths",p:null};if(l=encodeURIComponent,a="",p=false,m=null,_=0,
d=0,
$=false,(v=j.lastIndexOf("#")+1)&&(a=j.slice(v+ +("!"===j.substr(v,1))),((v=(s=r.lt(a)).lastIndexOf("/"))>0||0===v&&s.length>1)&&($=s!==a,
"/"===(m=(o=(b=/([^&=]+=)([^&\/=]*\/[^&]*)/).exec(s)||/(^|&)([^&\/=]*\/[^&=]*)(?:&|$)/.exec(s))?o[2]:s)||m.includes("://")?m=null:o?$?(s="https://example.com/",
s=encodeURI(s+m).slice(s.length),(v=(a.indexOf(s)+1||a.indexOf(s=l(m))+1)-1)<0&&($=false,v=a.indexOf(s=m)),d=v+s.length,
v<0&&"&"!==o[1]&&((v=a.indexOf(s=o[1]))<0&&($=true,s=l(o[1].slice(0,-1)),v=a.indexOf(s)),
v>=0&&(d=a.indexOf("&",v+=s.length)+1)),
v>=0?_=v:(h=b.exec(a))?(m=r.lt(h[2]),d=(_=h.index+h[1].length)+h[2].length):"&"!==(s=o[1])&&(v=j.length-a.length,
a=s+l(m),j=j.slice(0,v)+a,_=s.length,d=0)):_=o.index+o[1].length:_=0,m&&(_+=v=j.length-a.length,d>0&&(d+=v)))),!m){
if(E.startsWith(n.e.Gn)&&!e.f)return{u:"An extension has no upper-level pages",p:null};a="",
_=j.indexOf("/",j.indexOf("://")+3),E.startsWith("filesystem:")&&(_=j.indexOf("/",_+1)),v=j.indexOf("?",_=_<0?0:_),
d=j.indexOf("#",_),m=j.slice(_,v=(v=d<0?v:v<0?d:v<d?v:d)>0?v:j.length),d=0,$=false}if(v=e.p,c=m.startsWith("/"),
!a&&E.startsWith("file:")){if(m.length<=1||11===j.length&&j.endsWith(":/")){if(!e.f)return{
u:"Here has been the root path",p:null};v=0}p=true,e.f||1===v&&(v=-1)
}else p=!(a||!E.startsWith("ftp"))||(null!=e.t?!!e.t:null!=e.r?!!e.r:m.length>1&&m.endsWith("/")||/\.([a-z]{2,3}|apng|avif|icon|jpeg|tiff|webp)$/i.test(m))
;return w=(x=m.slice(+c,m.length-+m.endsWith("/")).split("/")).length,k=v<0?v+w:v,g=w<=1&&v<=-2&&j.lastIndexOf("#",_)>0,
x.length=v=k>w?w:v>0?k-1:k>0?k:0,m=x.join("/"),(s=e.a||"")&&(m+="/"===s[0]?s:"/"+s),
m=m?("/"===m[0]?"":"/")+m+(!p||m.endsWith("/")?"":"/"):"/",!d&&j.lastIndexOf("git",_-3)>0&&(m=f(j,m)||m),
!d&&/[/.](?:askubuntu|serverfault|stack(?:overflow|exchange)|superuser)\.com$/.test(j.slice(0,_))&&/^\/questions\/\d+$/i.test(m)&&(m="/questions"),
!g||m&&"/"!==m?(s=$?l(m):m,j=j.slice(0,_)+(d?s+j.slice(d):s)):j=j.split("#",1)[0],
(z=n.p(j,64,e.s)||j)!==j&&(R=t.$e(z,null,-2),j=0===t.xe?R:j),{u:j,p:m}},f=function(e,u){
var n,t,i,f=r.mt(e),l=f?f.host:""
;if(l&&/git\b|\bgit/i.test(l)&&/^[\w\-]+(\.\w+)?(:\d{2,5})?$/.test(l)&&((n=u.split("/"))[t=n.length-1]||(t--,n.pop()),
i=n[t],l.startsWith("github."))){
if(3===t)return"pull"===i||"milestone"===i||"commit"===i?u+"s":"tree"===i||"blob"===i?n.slice(0,3).join("/"):null
;if(4===t&&"releases"===n[3]&&("tag"===n[4]||"edit"===n[4]))return n.slice(0,4).join("/")
;if(t>3)return"blob"===n[3]?(n[3]="tree",n.join("/")):null}},l=function(e,n){
return"string"==typeof n&&n.toLowerCase().startsWith("whole")?u.qe(e):a(e)},u.Ue=l,u.Me=function(e){var u,t,i,f,l,a,s,o
;return/^https?:\/\//i.test(e)?(u=e.indexOf("://")+3,t=e.indexOf("/",u),i=e.slice(u,t>0?t:e.length).toLowerCase(),
(f=(n.bn<64||false?/[\s"(),;>}\u2014\u2018\u2019\u201c\u201d\u3002\u300b\u3011\uff08\uff09\uff1b-\uff1e]/:new RegExp("\\p{S}|[^\\P{P}.:\\uff1a%-]","u")).exec(i))?e.slice(0,u+f.index):(l=i.indexOf("%",i.indexOf("@")+1),
(a=i.lastIndexOf(".xn--",l>0?l:void 0)+5)>5&&/^[a-z\d]{2}/.test(i.slice(a))&&!/\.[a-z]/.test(i.slice(a))&&i.lastIndexOf("xn--",a-6)<0&&!/[\x7f-\uffff]/.test(i.slice(0,a-6))&&(s=i.slice(a),
(o=(/^[a-z\d]+/.exec(s)||[""])[0])&&o.length<s.length&&(r.dt(o,true)||"%-".includes(s[o.length])))?e.slice(0,u+a-4)+e.substr(u+a,o.length):e)):e
},a=function(e){var n,i,f,l,a,s,o,c,p=e.indexOf("\uff1a")+1||e.indexOf(":")+1;if(p&&"/"!==e[p]){
if("link"!==(i=e.slice(0,p-1).trim().toLowerCase())&&"\u94fe\u63a5"!==i)return e
;if(f=(n=e.slice(p).trim()).indexOf("\uff1a")+1,
!(p=(p=n.indexOf(":")+1)&&f?Math.min(p,f):p||f)||!r.Rt.test(n.slice(0,p-1)+"://"))return e;if(t.$e(n.slice(p),null,-2),
1!==t.xe)return e}else{if(!p||"/"!==e.substr(p+1,1))return e;n=e}
return a=!!(l=/\s|[^=][\u3002\uff0c\uff1b]([^a-z?&#-]|$)/.exec(n))&&1===l[0].length,
o=/["(\u2018\u201c\u300a\uff08\uff1c]/,
(c=((s=l?n.slice(0,l.index+(a?0:1)):null)||n).includes("#~:text=")?0:7)&&s&&(a?",.;\u3002\uff0c\uff1b".lastIndexOf(s.slice(-1),2)>=0?(n=s.slice(0,-1),
c=3):'")\u2019\u201d\u300b\uff09\uff1e'.includes(s.slice(-1))&&(c=o.test(s.slice(p))?0:(n=s.slice(0,-1),1)):(n=s,c=3)),
4&c&&",.;\u3002\uff0c\uff1b".includes(n.slice(-1))&&(n=n.slice(0,-1)),
2&c&&'")\u2019\u201d\u300b\uff09\uff1e'.includes(n.slice(-1))&&(o.test(n.slice(p))?c=0:n=n.slice(0,-1)),
n&&",.;\u3002\uff0c\uff1b".includes(n[0])&&(n=n.slice(1).trim()),1&c&&n&&o.test(n[0])&&(n=n.slice(1)),
t.$e("javascript:;"),n=u.qe(n,false,true),t.xe<=2&&!n.startsWith("vimium:")?n:e},u.qe=function(e,u,n){
var r,i,f=+e.includes("\u3002")+2*+e.includes("\uff1a");return f||n?(r=e.indexOf("//"),
(r=e.indexOf("/",r>=0?r+2:0))>=0&&r<4?e:(i=r>0?e.slice(0,r):e,
/^(data|javascript)[:\uff1a]/i.test(i)?e:(1&f&&(i=i.replace(/\u3002/g,".")),
2&f&&(i=i.replace("\uff1a",":").replace("\uff1a",":")),r>0&&(i+=e.slice(r)),t.$e(i,null,-2),
t.xe<=2?i:1!==f||!u||/[^.\w\u3002-]/.test(e)?e:e.replace(/\u3002/g,".")))):e},s=function(e,n){
var i,f,l,a,s,c,p,g,m,v,_,d=[],$=t.Se,h=/\s/,b=function(e){
return!!((e=e.trim())&&"__proto__"!==e&&e.length<51)&&(n.set(e,s),true)};for(g of e.replace(/\\\\?\n/g,function(e){
return 3===e.length?"\\\n":""}).split("\n"))if(!((g=g.trim())<"$")){c=0;do{c=g.indexOf(":",c+1)
}while(92===g.charCodeAt(c-1));if(!(c<=0)&&(a=g.slice(0,c).trimRight())&&(i=a.replace(/\\:/g,":").split("|"),
(g=g.slice(c+1).trimLeft())&&(a=g.replace(/\\\s/g,"\\s"),m="",(c=a.search(h))>0?(e=g.slice(c),g=a.slice(0,c),
(c=e.search(/\sblank=/i))>=0&&(v=e.slice(c+7).search(h),m=e.slice(c+7,(v=v>0?c+7+v:0)||void 0),
e=e.slice(0,c)+(v?e.slice(v):"")),
c=e.search(/\sre=/i)):(g=a,e=""),g=g.replace(/\\s/g," ").trim().replace(/([^\\]|^)%(s)/gi,"$1$$$2").replace(/\\%/g,"%"),
s={Fe:"",j:m,ye:g},0!==(i=i.filter(b)).length))){if(-1===c){for($.lastIndex=0;(p=$.exec(g))&&p[0].endsWith("$"););
p&&(c=p.index+1)&&(a=(a=p[2])?/^s:/i.test(a)?"s"===a[0]?"+":" ":a:"s"===p[1]?"+":" ",g=g.replace($,function(e,u){
return"$"+(u||"s")}).toLowerCase(),g=t.$e(g,null,-1),t.xe>2&&(g=g.replace(/%24(%24|s)/g,decodeURIComponent)),c=0,
g=g.replace(/\$[$s]/g,function(e,u){return"$$"===e?(c>0||c--,"$"):(c=c>0?c:c+u+1,e)}),
(f=o(g,c))&&(a.includes("$")?(a=a.replace(t.ze,"(.*)"),l=new RegExp("^"+a,/[a-z]/i.test(a)?"i":"")):l=a.trim()||" ",
d.push({Te:f.Te,Be:f.Be,Fe:i[0].trimRight(),De:l})))}else 47===e.charCodeAt(c+4)?(a=c>1?e.slice(1,c).trim():"",
e=e.slice(c+5),c=e.search(/[^\\]\//)+1,g=e.slice(0,c),e=e.slice(c+1),c=e.search(h),
(_=r.rt(g,c>=0?e.slice(0,c):e))&&(a=u.ke(a),d.push({Te:a,Be:_,Fe:i[0].trimRight(),De:s.ye.lastIndexOf("$S")>=0?" ":"+"
})),e=c>=0?e.slice(c+1):""):e=e.slice(c+4);e=e.trimLeft(),s.Fe=e?r.lt(e):i[i.length-1].trimLeft()}}return d},u.je=s,
o=function(e,n){
return n<1||!r.Rt.test(e)?null:(t=e.slice(0,n-1),(n=Math.max(t.lastIndexOf("?"),t.lastIndexOf("#"))+1)?(f=i=t.slice(n),
t=t.slice(0,t.search(/[#?]/)),(l=i.lastIndexOf("&")+1)&&(f=i.slice(l)),f&&f.indexOf("=")>=1?(i="[#&?]",
e="([^#&]*)"):(f=i,i="#"===e[n-1]?"#":f?"[#?]":"\\?",e="([^#&?]*)")):(i="^([^#?]*)",
(f=e.slice(t.length+2))&&(n=f.search(/[#?]/)+1)&&(f=f.slice(0,n-1)),
e=""),f=f&&r.m(f).replace(/\\\+|%20| /g,"(?:\\+|%20| )"),{Te:t=u.ke(t),Be:new RegExp(i+f+e,/[a-z]/i.test(f)?"i":"")})
;var t,i,f,l},u.ke=function(e){var u=e.slice(0,9).toLowerCase(),n=r.it(u)
;return n?e=e.slice(n):"vimium://"===u&&(e=t.he(e.slice(9),false,-1)),e}});