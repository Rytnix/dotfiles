"use strict"
;__filename="background/browsing_data_manager.js",define(["require","exports","./store","./browser","./utils","./settings","./completion_utils"],function(t,e,n,r,i,o,u){
var f,a,l,c,s,_,m,v,d,p,T,h;Object.defineProperty(e,"__esModule",{value:true
}),e.oi=e.ui=e.fi=e.ai=e.li=e.ci=e.si=e.omniBlockList=void 0,f=decodeURIComponent,c=-1,s="1",_=null,v=null,
e.omniBlockList=m=null,e.si=function(t){var e,n,r=t.slice(0,5);if("https"===r)e=8;else if("http:"===r)e=7;else{
if(!r.startsWith("ftp"))return null;e=6}return n=t.indexOf("/",e),{
_i:"__proto__"!==(t=t.slice(e,n<0?t.length:n))?t:".__proto__",mi:e}},e.ci={vi:null,di:"",pi:0,vo:0,Ti:null,
hi:function(){var t=r.de.bookmarks;t.onCreated.addListener(e.ci.gi),t.onRemoved.addListener(e.ci.bi),
t.onChanged.addListener(e.ci.bi),t.onMoved.addListener(e.ci.gi),t.onImportBegan.addListener(function(){
r.de.bookmarks.onCreated.removeListener(e.ci.gi)}),t.onImportEnded.addListener(function(){
r.de.bookmarks.onCreated.addListener(e.ci.gi),e.ci.gi()})},xi:function(){n.T.Sn=1,e.ci.vo&&(clearTimeout(e.ci.vo),
e.ci.vo=0),r.de.bookmarks.getTree(e.ci.ki)},ki:function(t){n.T.Cn=[],n.T.jn=[],n.T.Sn=2,u.wi.Zr(2),
t.forEach(e.ci.yi,e.ci),setTimeout(function(){return e.oi.Di(n.T.Cn)},50),e.ci.hi&&(setTimeout(e.ci.hi,0),e.ci.hi=null)
;var r=e.ci.Ti;e.ci.Ti=null,r&&r()},yi:function(t){var r,o,u,f=t.title,a=t.id,l=f||a,c=e.ci.di+"/"+l
;t.children?(n.T.jn.push({yo:a,Li:c,Ri:l}),r=e.ci.di,2<++e.ci.pi&&(e.ci.di=c),t.children.forEach(e.ci.yi,e.ci),
--e.ci.pi,e.ci.di=r):(u=(o=t.url).startsWith("javascript:"),n.T.Cn.push({yo:a,Li:c,Ri:l,t:u?"javascript:":o,
ji:m?e.fi(o,f):1,u:u?"javascript:":o,ko:u?o:null,Ii:u?i.lt(o):null}))},Mi:function(){var t=performance.now()-n.T.Pn
;0===n.T.Sn&&(t>=6e4||t<-5e3?(e.ci.vo=n.T.Pn=0,n.T.Vn=false,e.ci.xi()):(n.T.Cn=[],n.T.jn=[],
e.ci.vo=setTimeout(e.ci.Mi,3e4),u.wi.Zr(2)))},gi:function(){n.T.Pn=performance.now(),
n.T.Sn<2||(e.ci.vo=setTimeout(e.ci.Mi,6e4),n.T.Sn=0)},bi:function(t,r){
for(var i,o,u,f,l,c,s=n.T.Cn,_=s.length,v=r&&r.title,d=0;d<_&&s[d].yo!==t;d++);if(d<_)return o=(i=s[d]).u,u=r&&r.url,
a&&(null==v?o!==i.t||!r:null!=u&&o!==u)&&n.O.has(o)&&e.li.Pi&&e.li.Ui(o)<0&&n.O.delete(o),
void(null!=v?(i.Li=i.Li.slice(0,-i.Ri.length)+(v||i.yo),i.Ri=v||i.yo,u&&(i.u=u,i.t=e.oi.Ei(u,i),e.oi.Oi()),
m&&(i.ji=e.fi(i.u,i.Ri))):(s.splice(d,1),r||e.ci.gi()));if(n.T.jn.find(function(e){return e.yo===t})){
if(null!=v)return e.ci.gi();if(!n.T.Vn&&a){for(c of(f=n.O,l=e.li.Ui,e.li.Pi?s:[]))f.has(o=c.u)&&l(o)<0&&f.delete(o)
;n.T.Vn=true}return e.ci.gi()}}},n.findBookmark=function(t,r){var o,u,f,a,l,c,s;if(2!==n.T.Sn)return o=i.tt(),
e.ci.Ti=o.Lt,e.ci.xi(),o.Ut.then(n.findBookmark.bind(0,t,r))
;if(f=(u=r.includes("/"))?(r+"").replace(/\\\/?|\//g,function(t){return t.length>1?"/":"\n"
}).split("\n").filter(function(t){return t}):[],!r||u&&!f.length)return Promise.resolve(false)
;for(c of(a=u?"/"+f.slice(1).join("/"):"",
l=u?"/"+f[0]+a:"",t?[]:n.T.Cn))if(u&&(c.Li===l||c.Li===a)||c.Ri===r)return Promise.resolve(c)
;for(c of t?n.T.jn:[])if(u&&(c.Li===l||c.Li===a)||c.Ri===r)return Promise.resolve(c);for(c of(s=null,
t?[]:n.T.Cn))if(c.Ri.includes(r)){if(s){s=null;break}s=c}return Promise.resolve(s)},d=function(t){t&&t()},e.li={
Pi:false,Ai:0,Si:null,Bi:function(t){e.li.Si?t&&e.li.Si.push(t):(n.R.Bn=Date.now(),e.li.Si=t?[t]:[],
e.li.Ai||r.de.history.search({text:"",maxResults:2e4,startTime:0},function(t){setTimeout(e.li.Vi,0,t)}))},
Vi:function(t){var i,o,u,f,a;for(e.li.Vi=null,i=0,o=t.length;i<o;i++)(f=(u=t[i]).url).length>2e3&&(f=e.li.Wi(f,u)),
t[i]={t:f,Ri:u.title,qi:u.lastVisitTime,ji:1,u:f};if(m)for(a of t)0===e.fi(a.t,a.Ri)&&(a.ji=0);setTimeout(function(){
setTimeout(function(){var t,r,i,o,u,f,a,l,c=n.R.kn
;for(t=c.length-1;0<t;)for(u=(o=(r=c[t]).t=e.oi.Ei(i=r.u,r)).length>=i.length;0<=--t&&!((a=(f=c[t]).u).length>=i.length)&&i.startsWith(a);)f.u=i.slice(0,a.length),
l=u?a:e.oi.Ei(a,f),f.t=u||l.length<a.length?o.slice(0,l.length):l;e.li.Ci&&setTimeout(function(){
e.li.Ci&&e.li.Ci(n.R.kn)},200)},100),n.R.kn.sort(function(t,e){return t.u>e.u?1:-1}),e.li.Pi=true,
r.de.history.onVisitRemoved.addListener(e.li.Hi),r.de.history.onVisited.addListener(e.li.zi)},100),n.R.kn=t,e.li.Bi=d,
e.li.Si&&e.li.Si.length>0&&setTimeout(function(t){for(var e of t)e()},1,e.li.Si),e.li.Si=null},zi:function(t){
var r,i,o,f,a,l,c,s,_,v=t.url;if(v.length>2e3&&(v=e.li.Wi(v,t)),r=t.lastVisitTime,i=t.title,o=++n.R.In,f=n.R.Nn,
(a=e.li.Ui(v))<0&&n.R.xn++,(o>59||o>10&&Date.now()-n.R.Bn>3e5)&&e.li.Fi(),l=a>=0?n.R.kn[a]:{t:"",Ri:i,qi:r,
ji:m?e.fi(v,i):1,u:v},f&&(s=e.si(v))&&((c=f.get(s._i))?(c.qi=r,a<0&&(c.Gi+=l.ji),
s.mi>6&&(c.Re=8===s.mi?1:0)):f.set(s._i,{qi:r,Gi:l.ji,Re:8===s.mi?1:0})),a>=0)return l.qi=r,void(i&&i!==l.Ri&&(l.Ri=i,
u.wi.Er&&u.wi.Zr(1),m&&(_=e.fi(v,i),l.ji!==_&&(l.ji=_,c&&(c.Gi+=_||-1)))));l.t=e.oi.Ei(v,l),n.R.kn.splice(~a,0,l),
u.wi.Er&&u.wi.Zr(1)},Hi:function(t){var r,i,o,f,a,c,s,_,m;if(l.length=0,r=n.O,u.wi.Zr(1),t.allHistory)return n.R.kn=[],
n.R.Nn=new Map,i=new Set(n.T.Cn.map(function(t){return t.u})),void r.forEach(function(t,e){i.has(e)||r.delete(e)})
;for(s of(o=e.li.Ui,
f=n.R.kn,a=n.R.Nn,t.urls))(_=o(s))>=0&&(a&&f[_].ji&&(m=e.si(s))&&(c=a.get(m._i))&&--c.Gi<=0&&a.delete(m._i),
f.splice(_,1),r.delete(s))},Wi:function(t,e){var n=t.lastIndexOf(":",9),r=n>0&&"://"===t.substr(n,3),o=e.title
;return t=t.slice(0,(r?t.indexOf("/",n+4):n)+320)+"\u2026",o&&o.length>160&&(e.title=i.kt(o,0,160)),t},Fi:function(){
var t=Date.now();if(n.R.xn<=0);else{if(t<n.R.Bn+1e3&&t>=n.R.Bn)return;setTimeout(r.de.history.search,50,{text:"",
maxResults:Math.min(999,n.R.In+10),startTime:t<n.R.Bn?t-3e5:n.R.Bn},e.li.Ji)}return n.R.Bn=t,n.R.xn=n.R.In=0,e.oi.Oi()},
Ci:function(t){var r,i,o,u,f,a,l,c;for(i of(e.li.Ci=null,r=n.R.Nn,t))o=i.qi,u=i.ji,(f=e.si(i.u))&&(l=f.mi,
(c=r.get(a=f._i))?(c.qi<o&&(c.qi=o),c.Gi+=u,l>6&&(c.Re=8===l?1:0)):r.set(a,{qi:o,Gi:u,Re:8===l?1:0}))},Ji:function(t){
var r,i,o,u,f=n.R.kn,a=e.li.Ui;if(!(f.length<=0))for(r of t){if((i=r.url).length>2e3&&(r.url=i=e.li.Wi(i,r)),
(o=a(i))<0)n.R.xn--;else if(!(u=r.title)||u===f[o].Ri)continue;n.R.In--,e.li.zi(r)}},Ui:function(t){
for(var e="",r=n.R.kn,i=r.length-1,o=0,u=0;o<=i;)if((e=r[u=o+i>>>1].u)>t)i=u-1;else{if(e===t)return u;o=u+1}return~o}},
p=function(t,n,i){var o=r.ce();o?o.getRecentlyClosed({
maxResults:Math.min(Math.round(1.2*t),+o.MAX_SESSION_RESULTS||25,25)},function(t){var o,u,f,a,l,c,s;for(a of(o=[],f=0,
t||[]))(l=a.tab)?((c=l.url).length>2e3&&(c=e.li.Wi(c,l)),s=l.title,(n||e.fi(c,s))&&o.push({u:c,Ri:s,
Ki:(u=a.lastModified,u<3e11&&u>-4e10?1e3*u:u),Ni:[l.windowId,l.sessionId]})):f=1;return f?setTimeout(i,0,o):i(o),r.fe()
}):i([])},e.ai=p,e.fi=function(t,e){return v.test(e)||v.test(t)?0:1},e.ui={Qi:function(t){var e,n
;if(m)for(e of t)for(n of m)if(n=n.trim(),e.includes(n)||n.length>9&&e.length+2>=n.length&&n.includes(e))return true
;return false},Xi:function(){var t,r,i,o,u;if(n.T.Cn)for(t of n.T.Cn)t.ji=m?e.fi(t.t,t.Li):1
;if(n.R.kn)for(t of(r=n.R.Nn,
n.R.kn))i=m?e.fi(t.t,t.Ri):1,t.ji!==i&&(t.ji=i,r&&(o=e.si(t.u))&&(u=r.get(o._i))&&(u.Gi+=i||-1))}},e.oi={
Ei:function(t,e){if(t.length>=400||t.lastIndexOf("%")<0)return t;try{return f(t)}catch(t){}
return n.O.get(t)||(e&&l.push(e),t)},Di:function(t){for(var r,i,o=n.O,u=l,a=-1,c=t.length;;)try{
for(;++a<c;)(r=t[a]).t=(i=r.u).length>=400||i.lastIndexOf("%")<0?i:f(i);break}catch(t){r.t=o.get(i)||(u.push(r),i)}
e.oi.Oi()},Oi:function(){0!==l.length&&-1===c&&(c=0,setTimeout(T,17))}},T=function(){var t,e,r,i,o=l.length
;if(!s||c>=o)return l.length=0,c=-1,void(_=null)
;for(o=Math.min(c+32,o),_=_||new TextDecoder(s);c<o;c++)(t=n.O.get(i=(r="string"==typeof(e=l[c]))?e:e.u))?r||(e.t=t):(t=(t=i.replace(/%[a-f\d]{2}(?:%[a-f\d]{2})+/gi,h)).length!==i.length?t:i,
"string"!=typeof e?n.O.set(e.u,e.t=t):n.O.set(e,t));c<l.length?setTimeout(T,4):(l.length=0,c=-1,_=null)},h=function(t){
var e,n,r=new Uint8Array(t.length/3);for(e=1,n=0;e<t.length;e+=3)r[n++]=parseInt(t.substr(e,2),16);return _.decode(r)},
n.Q.omniBlockList=function(t){var r,o=[];for(r of t.split("\n"))r.trim()&&"#"!==r[0]&&o.push(r)
;v=o.length>0?new RegExp(o.map(i.m).join("|"),""):null,e.omniBlockList=m=o.length>0?o:null,
(n.R.kn||n.T.Cn.length)&&setTimeout(e.ui.Xi,100)},o.eo.then(function(){o.Ve("omniBlockList")}),
n.Q.localeEncoding=function(t){var r=!!t&&!(t=t.toLowerCase()).startsWith("utf"),i=s;if((s=r?t:"")!==i){try{
new TextDecoder(s)}catch(t){r=false}r?"1"!==i&&setTimeout(function(){return n.R.kn&&e.oi.Di(n.R.kn),e.oi.Di(n.T.Cn)
},100):(n.O.clear(),l&&(l.length=0)),a!==r&&(l=r?[]:{length:0,push:n.j},a=r,c=-1)}},o.Ve("localeEncoding"),
n.C.Nu=function(t,n,i){switch(n){case"tab":u.wi.Yi(null),r.se.remove(+t,function(){var t=r.fe();return t||u.wi.Yi(null),
i(!t),t});break;case"history":var o=!e.li.Pi||e.li.Ui(t)>=0;r.de.history.deleteUrl({url:t}),o&&u.wi.Zr(1),i(o)}},
n.C.Zi=e.ui.Qi});