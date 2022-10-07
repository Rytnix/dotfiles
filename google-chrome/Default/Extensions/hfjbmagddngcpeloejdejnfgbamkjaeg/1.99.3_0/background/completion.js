"use strict"
;__filename="background/completion.js",define(["require","exports","./store","./browser","./utils","./normalize_urls","./parse_urls","./completion_utils","./browsing_data_manager"],function(n,r,e,t,u,f,i,o,l){
var a,s,c,_,m,v,d,h,p,w,b,g,y,S,x,k,M,T,R,$,z,j,A,F,B,D,E,I;Object.defineProperty(r,"__esModule",{value:true}),a=0,
s=false,c=false,_=0,m=0,v=0,d=0,h=0,p=[""],w="",b="",g="",y="",S=0,x=false,k=false,M="",T="",R=0,$=true,
z=function(n,r,e,t,u,f){this.e=n,this.u=r,this.t=e,this.title=t,this.r=u(this,f),this.visit=0},j={yu:function(n,r){
if(0!==p.length&&1&R)2===e.T.Sn?j._u():l.ci.Ti=function(){n.o||j._u()};else if(E.wu([],1),r)return;0===e.T.Sn&&l.ci.xi()
},_u:function(){var n,r,t,u,f,i,a,s,c,v,w=p.some(function(n){return 47===n.charCodeAt(0)
}),b=null===(n=o.wi.Su)||void 0===n?void 0:n.Cn,g=o.wi.xu?[]:null,y=b&&b[0]===w?b[1]:e.T.Cn,S=y.length,x=[]
;for(t=0;t<S;t++)if(o.Mu((u=y[t]).t,w?u.Li:u.Ri)&&($||u.ji)){if(null!==g&&g.push(u),
T&&u.u.length<T.length+2&&T===(u.u.endsWith("/")?u.u.slice(0,-1):u.u))continue;x.push([-o.Tu(u.t,u.Ri),t])}
for(a of(g&&(o.wi.xu.Cn=[w,g]),d+=r=x.length,r?(x.sort(o.sortBy0),h>0&&!(6&R)?(x=x.slice(h,h+m),
h=0):r>h+m&&(x.length=h+m)):R^=1,f=[],i=64&_?-.666446:0,x))s=a[0],i&&(s=s<i?s:(s+i)/2),
c=new z("bookm",(u=y[t=a[1]]).u,u.t,w?u.Li:u.Ri,o.get2ndArg,-s),v=32&_&&l.li.Pi?l.li.Ui(u.u):-1,
c.visit=v<0?0:e.R.kn[v].qi,f.push(c),null!==u.ko&&(c.u=u.ko,c.title=o.cutTitle(w?u.Li:u.Ri),
c.textSplit="javascript: \u2026",c.t=u.Ii);E.wu(f,1)}},A={yu:function(n,r){var t,u,f,i,a
;if(!p.length&&1024&_||!(2&R))return E.wu([],2);if(t=p.length>0,e.R.kn){if(t)return void E.wu(A._u(),2)
;(e.R.In>10||e.R.xn>0)&&l.li.Fi()}else if(u=t?function(){n.o||E.wu(A._u(),2)}:null,
t&&(c||l.li.Ai)?(l.li.Ai>0&&clearTimeout(l.li.Ai),l.li.Ai=0,l.li.Bi(u)):(l.li.Ai||(l.li.Ai=setTimeout(function(){
l.li.Ai=0,l.li.Bi(u)},t?200:150)),t&&E.Ru((a=(i=(f=E.$u).length)>0)&&"search"===f[0].t?[f[0]]:[],s&&a,0,0,i,b,S)),
t)return;0===r?o.zu(k,_,A.ju,n):l.ai(h+m,$,A.Au.bind(null,n))},_u:function(){
var n,r,t,u,i,a,s=1===p.length?p[0]:"",c=!!s&&("."===s[0]?/^\.[\da-zA-Z]+$/.test(s):(f.$e(s,null,-2),
f.xe<=2)),_=c?"."===s[0]||f.xe>0?o.Bu.Fu[0]:(o.Bu.Du||o.Bu.Eu(),
o.Bu.Du[0]):null,v=o.wi.xu?[]:null,w=[-1.1,-1.1],b=[],g=o.Mu,y=c&&s.includes("%")&&!/[^\x21-\x7e]|%[^A-F\da-f]/.test(s),S=m+h,x=-1.1,k=0,T=0,j=0
;for(M&&S++,T=S;--T;)w.push(-1.1,-1.1)
;for(S=2*S-2,t=(r=(null===(n=o.wi.Su)||void 0===n?void 0:n.kn)||e.R.kn).length;k<t;k++)if(u=r[k],
(c?_.test(y?u.u:u.t):g(u.t,u.Ri))&&($||u.ji)&&(null!==v&&v.push(u),
j++,(i=c?o.ComputeRecency(u.qi)||1e-16*Math.max(0,u.qi):o.ComputeRelevancy(u.t,u.Ri,u.qi))>x)){
for(T=S-2;0<=T&&w[T]<i;T-=2)w[T+2]=w[T],w[T+3]=w[T+1];w[T+2]=i,w[T+3]=k,x=w[S]}for(v&&(o.wi.xu.kn=v),d+=j,j||(R^=2),
5&R?k=0:(k=2*h,
h=0);k<=S&&!((i=w[k])<=0);k+=2)(u=r[w[k+1]]).u!==M&&((a=new z("history",u.u,y?u.u:u.t,u.Ri,o.get2ndArg,i)).visit=u.qi,
b.push(a));return l.oi.Oi(),b},ju:function(n,r){var e,u,f,i;if(o.wi.Yi(r),!n.o){for(f of(e=new Set,u=0,
r))f.incognito&&o.tabsInNormal||(i=t.getTabUrl(f),e.has(i)||(e.add(i),u++));return A.Iu([],n,e,h,u)}},Au:function(n,r){
var e,t,u;if(!n.o)return e=[],t=new Set,u=-h,r.some(function(n){var r,f=n.u;return!t.has(r=f+"\n"+n.Ri)&&(t.add(r),
t.add(f),++u>0&&e.push(n),e.length>=m)})?A.Ou(e):A.Iu(e,n,t,-u,0)},Iu:function(n,r,e,u,f){(0,t.de.history.search)({
text:"",maxResults:h+m*($?1:2)+f},function(t){if(!r.o){t=t.filter(function(n){var r=n.url
;return r.length>2e3&&(n.url=r=l.li.Wi(r,n)),!e.has(r)&&($||0!==l.fi(n.url,n.title||""))}),
u<0?t.length=Math.min(t.length,m-n.length):u>0&&(t=t.slice(u,u+m));var f=t.map(function(n){return{u:n.url,
Ri:n.title||"",Ki:n.lastVisitTime,Ni:null}});u<0&&(f=n.concat(f)),A.Ou(f)}})},Ou:function(n){n.forEach(A.Qu),h=0,
l.oi.Oi(),E.wu(n,2)},Qu:function(n,r,e){
var t=n.u,u=new z("history",t,l.oi.Ei(t,t),n.Ri||"",o.get2ndArg,(99-r)/100),f=n.Ni;u.visit=n.Ki,f&&(u.s=f,
u.label='<span class="undo">&#8630;</span>'),e[r]=u}},F={yu:function(n,r){
if(1!==p.length||!(16&R)||p[0].lastIndexOf("/",p[0].length-2)>=0)return E.wu([],16);if(l.li.Ci){
if(!e.R.kn)return r>0?E.wu([],16):l.li.Bi(function(){n.o||F.yu(n,0)});l.li.Ci(e.R.kn)}return F._u()},_u:function(){
var n,r,t,f,i,l,a,c,_,v,w,b=e.R.Nn,g=o.Uu,y=16===R&&s?[]:null,S=p[0].replace("/","").toLowerCase(),x=S===p[0],k=[],M="",T=-1.1
;for(r of(o.Zu(3),b.keys()))r.includes(S)&&(n=b.get(r),($||n.Gi>0)&&(t=o.ComputeRelevancy(r,"",n.qi),y?y.push({r:t,d:r,
m:n}):t>T&&(T=t,M=r)))
;if(f=M.length===S.length,M&&!f&&(M.startsWith("www.")||M.startsWith(S)||(i=M.slice(M.indexOf(".")+1)).includes(S)&&(l=void 0,
(l=b.get(i="www."+i))?($||l.Gi>0)&&(M=i,n=l):(l=b.get(i="m."+i))&&($||l.Gi>0)&&($||l.Gi>0)&&(M=i,n=l)),
(a=M.startsWith(S)?0:M.startsWith("www."+S)?4:-1)>=0&&(w=(_=(c=u.bt(M))[0]).length-1,
(v=c[1])>1&&(!(a=M.length-a-S.length-_[w].length-1)||3===v&&a===_[w-1].length+1)&&(f=true))),M)d++,s=!h&&f||s,
k=F.qu(M,n,0,x);else if(y)for(w of(y.sort(F.Cu),(d=y.length)>h+m&&(y.length=h+m),y))k.push(F.qu(w.d,w.m,w.r,x)[0])
;o.Zu(g),E.wu(k,16)},qu:function(n,r,t,f){var i,a,s,c,_,v,d,p,w=r.Re>0,b=""
;return 2===e.T.Sn&&(i=new RegExp("^https?://".concat(u.m(n),"/?$")),a=e.T.Cn.filter(function(n){
return i.test(n.u)&&($||n.ji)}),a.length>0&&(s=a.filter(function(n){return"s"===n.u[4]}),
T=(c=(a=(w=s.length>0)?s:a)[0].u).endsWith("/")?c.slice(0,-1):c,b=a[0].Ri)),_=(w?"https://":"http://")+n+"/",!t&&(M=_,
h>0)?(h--,[]):(v=new z("domain",_,f?n:n+"/","",o.get2ndArg,t||2),p=(d=l.li.Pi?l.li.Ui(_):-1)>0?e.R.kn[d]:null,o.Gu(v),
p&&($||p.ji)&&(v.visit=p.qi,b=b||p.Ri),v.title=o.cutTitle(b,[]),--m,[v])},Cu:function(n,r){return r.r-n.r}},B={
yu:function(n,r){!(4&R)||r&&(!p.length||256&_)?E.wu([],4):o.zu(k,_,B._u,n)},_u:function(n,r){
var f,i,a,s,c,w,b,g,y,S,x,M,T,$,j,A,F,D,I,O,Q,U,Z,q,C,G,H,N,P,W,J,K,L,V,X,Y,nn,rn;if(o.wi.Yi(r),!n.o){if(f=e.U,
i=p.length<=0,a=3&R,c=[],(s=!!(8&_)&&k&&i)&&!(128&_)&&r.length>h&&r.length>v){for(g of(b=new Map,r))b.set(g.id,g)
;for(x=(S=(y=(w=b.get(f))?w.openerTabId:0)?b.get(y):null)?r.indexOf(S):w?r.indexOf(w)-1:0,
M=S?0:v/2|0;1<--M&&x>0&&r[x-1].openerTabId===y;x--);r=x>0?r.slice(x).concat(r.slice(0,x)):r}for(g of(T=[],$=[],
j=/^:[a-z]+/gm.test(p.join("\n")),w=!w&&j?r.filter(function(n){return n.id===f})[0]:w,A=j&&w?t.getGroupId(w):null,
r))!k&&o.tabsInNormal&&g.incognito||(F=t.getTabUrl(g),D=g.text||(g.text=l.oi.Ei(F,g.incognito?"":F)),I=g.title,
j&&(1===p.length&&(D=I=""),g.audible&&(I+=" :audible :audio",I+=t.isTabMuted(g)?" :muted":" :unmuted"),
g.discarded&&(I+=" :discarded"),I+=g.incognito?" :incognito":" :normal",g.pinned&&(I+=" :pinned"),
A&&t.getGroupId(g)===A&&(I+=" :group")),(i||o.Mu(D,I))&&(O=g.windowId,!k&&$.lastIndexOf(O)<0&&$.push(O),T.push(g)))
;if(a&&1===T.length&&T[0].id===f&&(T.length=0),d+=Q=T.length,Q||(R^=4),h>=Q&&!a)return h=0,E.wu(c,4);if($.sort(B.Hu),
U=i?s?B.Pu:B.Wu:o.ComputeWordRelevancy,
Z=s?u.vt():null,q=$.length>1?e.L:0,s)for(g of T)Z[g.id]=(G=(C=g.openerTabId)&&Z[C])?G<5?G+1:5:1
;for(H=32&_?1===e.gn?0:e.bn<62?Date.now()-performance.now():performance.timeOrigin:0,N=0;N<T.length;)P=(g=T[N++]).id,
W=s?Z[P]:1,F=t.getTabUrl(g),J=e.z.get(P),K=new z("tab",F,g.text,g.title,U,s?N:P),
L=q&&g.windowId!==q?"".concat($.indexOf(g.windowId)+1,":"):"",V="",L+=k?g.index+1:N,
f===P?(s||(K.r=i||!/^(?!:[a-z]+)/m.test(p.join("\n"))?1<<31:0),L="(".concat(L,")")):J||(L="**".concat(L,"**")),
!o.tabsInNormal&&g.incognito&&(V+="*"),!!g.discarded&&(V+="~"),g.audible&&(V+=t.isTabMuted(g)?"\u266a":"\u266c"),
K.visit=J?J.t+H:0,K.s=P,K.label="#".concat(L).concat(V&&" "+V),W>1&&(K.level=" level-"+W),c.push(K);if(c.sort(E.Ju),
Y=h+m-(X=c.length),a||Y<0||!i)for(h>0&&!a?(c=c.slice(h,h+m),X=m,h=0):X>h+m&&(c.length=X=h+m),
M=a?0:X;M<X;M++)c[M].r*=8/(M/4+1);else if(h>0){for(rn of(nn=c.slice(0,Y).map(function(n){return Object.assign({},n)}),
nn))rn.label+="[r]";for(X=(c=c.slice(h).concat(nn)).length,M=0;M<X;M++)c[M].r=X-M;h=0}l.oi.Oi(),E.wu(c,4)}},
Hu:function(n,r){return n-r},Wu:function(n,r){var t=e.z.get(r);return t?t.i:4&_?2047+r:-r},Pu:function(n,r){return 1/r}
},D={Ku:0,yu:e.j,Lu:function(n,r,t){var u,i,s,c,_,m,v,d,w,b;if(!(8&R))return E.wu([],8);if(s=(i=p).length>0?i[0]:"",
0===i.length);else{if(!r&&"\\"===s[0]&&"\\"!==s[1])return s.length>1?i[0]=s.slice(1):i.shift(),s=g.slice(1).trimLeft(),
$=!l.omniBlockList||$||l.ui.Qi([s]),h?(h--,E.wu([],8)):(u=D.Vu(s,t),E.wu([u],8));c=e.mn.map.get(s)}if(r){
if(!c)return true}else{if(!c&&!s.startsWith("vimium://"))return 0===a&&i.length<=1&&(a=i.length?o.Yu.Xu()?-2:0:-1),
E.wu([],8);c&&y&&(i.push(y),h=0,g+=" "+y,y="",S&=-5),i.length>1||(a=-1)}if(i.length>1&&c?(i.shift(),
g.length>200&&(i=g.split(" ")).shift()):c&&(i=[]),$=!l.omniBlockList||$&&l.ui.Qi([s]),c?(v=_=(d=f.we(i,c.ye,c.j,[])).ye,
m=d.Oe):(v=_=i.join(" "),m=[]),"~"===s);else if(_.startsWith("vimium://")){if(w=e.u(_.slice(9),1,true),
b=D.nf.bind(D,i,_,v,t||c,m),w instanceof Promise)return w.then(D.rf.bind(D,n,t||c,b))
;if(w instanceof Array)return D.rf(n,t||c,b,w);w&&(_=v=w,m=[])}else _=f.$e(_,null,-2);return u=D.nf(i,_,v,t||c,m),
E.wu([u],8)},rf:function(n,r,e,t){var f,l,s,c,_;if(!n.o){switch(t[1]){case 5:case 7:if(a=7===t[1]&&p.length>1?a:-1,
!(l=t[0]))break
;return y="",(p=((g="\\ "+l).length<201?g:u.kt(g,0,200).trim()).split(" ")).length>1&&(p[1]=i.qe(p[1],p.length>2)),
o.ef(p),D.Lu(n,null,r);case 2:if(o.ef(p=(s=t[0]).length>1||1===s.length&&s[0]?s:p),(c=D.Ku++)>12)break
;if(_=D.Lu(n,true,r),c<=0&&(D.Ku=0),true!==_)return _;break;case 0:t[0]&&(f=D.tf(e(),t))}E.wu(f||[e()],8)}},
nf:function(n,r,e,t,f){var i=new z("search",r,e,(t?t.Fe+": ":"")+n.join(" "),o.get2ndArg,9)
;return n.length>0&&t?(i.t=D.uf(e,f),i.title=o.cutTitle(i.title,[t.Fe.length+2,i.title.length]),
i.textSplit=o.highlight(i.t,f)):(i.t=u.lt(o.shortenUrl(e)),i.title=o.cutTitle(i.title,[]),i.textSplit=u.ht(i.t)),
i.v=c?"":t&&t.j||o.ff(r),i.p=c&&t?t.Fe:"",i},tf:function(n,r){
var e=r[0],t=new z("math","vimium://copy "+e,e,e,o.get2ndArg,9)
;return--t.r,t.title='<match style="text-decoration: none;">'.concat(o.cutTitle(t.title,[]),"<match>"),
t.textSplit=u.ht(r[2]),[n,t]},uf:function(n,r){var e,t,f,i=r.length;if(t=u.lt(r.length>0?n.slice(0,r[0]):n),
(e=u.it(t))&&(t=t.slice(e),e=0),r.length<=0)return t;for(f=r[0];r[e]=t.length,i>++e;)t+=u.lt(n.slice(f,r[e])),f=r[e]
;return f<n.length&&(t+=u.lt(n.slice(f))),t},Vu:function(n,r){
var t=f.$e(n,null,-2),i=4===f.xe,l=new z("search",t,u.lt(o.shortenUrl(t)),"",o.get2ndArg,9)
;return l.title=i?(r&&r.Fe||"~")+": "+o.cutTitle(n,[0,n.length]):o.cutTitle(n,[]),l.textSplit=u.ht(l.t),
l.v=c?"":i&&r&&((r.j||r.ye).startsWith("vimium:")?e.e.Ln:r.j)||o.ff(t),l.p=c&&i?"~":"",l.n=1,l}},E={if:0,of:0,$u:null,
lf:null,Ru:null,yu:function(n){var r,e,t,u;if(E.lf&&(E.lf.o=true),r=E.lf={o:false},E.of=0,e=1,t=-9&(R&=n[0])?n.length:2,
E.$u=[],E.if=t-1,a=h&&-1,n[1]===D){if(u=D.Lu(r),t<3)return;if(u)return void u.then(E.af.bind(null,n,r,e));e=2}
E.af(n,r,e)},af:function(n,r,e){for(o.sf(Date.now()-18144e5),o.Zu(3*p.length||.01),
p.indexOf("__proto__")>=0&&(p=p.join(" ").replace(/(^| )__proto__(?=$| )/g," __proto_").trimLeft().split(" "),o.ef(p)),
o.wi.go($),p.sort(E.cf),o.Bu._f();e<n.length;e++)n[e].yu(r,e-1)},cf:function(n,r){
return r.length-n.length||(n<r?-1:n===r?0:1)},wu:function(n,r){var e=E.$u,t=n.length;if(t>0&&(E.of|=r,
E.$u=0===e.length?n:e.concat(n),8===r&&(s=!0,m-=t,d+=t)),0==--E.if)return e=null,E.mf()},mf:function(){
var n,r,e,t,u,f,i,l,c,_,m,g,y=E.$u;return E.$u=null,y.sort(E.Ju),h>0?(y=y.slice(h,h+v),h=0):y.length>v&&(y.length=v),
o.Bu.vf=o.Bu.Du=null,
p.length>0&&(r=o.shortenUrl(n=p[0]),((e=n.length!==r.length)||n.endsWith("/")&&n.length>1&&!n.endsWith("//"))&&(p[0]=e?r:n.slice(0,-1),
o.Bu.df(p[0]))),
y.forEach(o.Gu),t=y.length>0,u=s&&t,f=d,i=":"===w,c=b,_=S,m=2!=(l=a<0?-2!==a||t||i?0:3:$?p.length<=0||x?0:t?2:i?0:1:0)||i?0:E.of,
g=E.Ru,E.hf(),g(y,u,l,m,f,c,_)},hf:function(){E.lf=E.Ru=null,o.pf(),o.setupQueryTerms(p=[],c=false,0),w=b=g=y=M=T="",
o.Bu.Fu=null,o.Zu(3),o.sf(0),a=E.of=_=m=v=d=0,R=0,S=0,s=false,x=k=false,$=true},wf:function(){var n,r,e=g;if(h=0,y="",
!(0===e.length||(n=(e=e.slice(-5)).lastIndexOf("+"))<0||0!==n&&32!==e.charCodeAt(n-1))){if(e=e.slice(n),
n=g.length-e.length,(r=parseInt(e,10))>=0&&"+"+r===e&&r<=(n>0?100:200))h=r;else if("+"!==e)return;g=g.slice(0,n&&n-1),
y=e,S|=4}},Ju:function(n,r){return r.r-n.r}},I={__proto__:null,bookm:[1,j],domain:[16,F],history:[2,A],
omni:[63,D,F,A,j,B],search:[8,D],tab:[4,B]},e.C.yu=function(n,r,t){var f,a,h,y,M,T,z,j,A,F;n=n.trim(),x=false,
n&&2===e.gn&&(/^[A-Za-z]:[\\/]|^\\\\([\w$%.-]+([\\/]|$))?/.test(n)||"file:"===n.slice(0,5).toLowerCase())&&(":/\\".includes(n[1])&&(n=(":"===n[1]?"":"//")+n.slice(":"===n[1]?0:2).replace(/\\+/g,"/")),
(f=(n=n.replace(/\\/g,"/").toLowerCase()).indexOf("//")+2)>=2&&f<n.length&&"/"!==n[f]&&(a=n.slice(f).split("/",1)[0]).includes("%")&&(h=u.lt(a),
x=h===a,n=n.slice(0,f)+h+n.slice(f+a.length))),w=g=n&&n.replace(u.qt," "),b="",S=0,E.wf(),
p=(n=g)?(n=n.length<201?n:u.kt(n,0,200).trimRight()).split(" "):[],
(y=0|r.c||128)&&(y-=n.replace(/[\u2e80-\u2eff\u2f00-\u2fdf\u3000-\u303f\u31c0-\u31ef\u3200-\u9fbf\uf900-\ufaff\ufe30-\ufe4f\uff00-\uffef]/g,"aa").length-n.length),
y=Math.max(50,Math.min(y,320)),c=!!(1&(_=r.f)),v=m=Math.min(Math.max(3,0|r.r||10),25),d=0,E.Ru=t,M="bomni"===r.o?(_|=64,
I.omni):I[r.o],
z=r.t||63,j=r.e||63,M===I.tab&&(k=!!(2&_)),2===(T=p.length>=1?p[0]:"").length&&":"===T[0]&&(A="b"===(T=T[1])?I.bookm:"h"===T?I.history:"t"===T||"T"===T||"w"===T||"W"===T?(k="t"!==T&&"T"!==T,
_|=0,
_|="T"===T?2048:0,I.tab):"B"===T?(_|=64,I.omni):"H"===T?(_|=256,I.omni):"d"===T?I.domain:"s"===T?I.search:"o"===T?I.omni:null)&&(M=A,
b=p.shift(),
S|=1,g=g.slice(3),j=M[0]),p.length>0&&((T=p[0]).includes("\u3002")||T.includes("\uff1a"))&&!x&&((F=i.qe(T,x=p.length<2))!==T?(p[0]=F,
g=F+g.slice(T.length),
x=x&&!/^[.\u3002]\w+([.\u3002]\w*)?$/.test(T)):x=x&&T.includes("\uff1a")&&!/\uff1a([^\/\d]|\d[^\0-\xff])/.test(T)),
$=!l.omniBlockList||l.ui.Qi(p),R=z&j,s=2===M.length,g&&(S|=2),o.setupQueryTerms(p,c,y),E.yu(M)}});