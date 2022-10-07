"use strict"
;__filename="background/run_commands.js",define(["require","exports","./store","./utils","./browser","./ports","./i18n","./key_mappings"],function(n,u,e,t,r,l,i,o){
var f,c,s,a,v,$,m,d,p,y,g,h,_,b,j,T,w,k,C,M,N,O,D,S,q;Object.defineProperty(u,"__esModule",{value:true}),
u.waitAndRunKeyReq=u.runNextOnTabLoaded=u.runNextCmdBy=u.getRunNextCmdBy=u.runNextCmd=u.wrapFallbackOptions=u.parseFallbackOptions=u.hasFallbackOptions=u.executeExternalCmd=u.executeShortcut=u.portSendFgCmd=u.sendFgCmd=u.onConfirmResponse=u.nu=u.uu=u.executeCommand=u.fillOptionWithMask=u.overrideOption=u.overrideCmdOptions=u.concatOptions=u.copyCmdOptions=u.replaceCmdOptions=void 0,
f=Math.abs,c=0,v=1,u.replaceCmdOptions=function(n){e.yn=t.gt(n)},u.copyCmdOptions=function(n,u){
for(var e in u)("$"!==e[0]||"$then=$else=$retry=$f=".includes(e+"=")&&!e.includes("="))&&(void 0!==n[e]||(n[e]=u[e]))
;return n},$=function(n,e){return e&&n?u.copyCmdOptions(u.copyCmdOptions(t.vt(),e),n):n||e||null},u.concatOptions=$,
u.overrideCmdOptions=function(n,u,r){var l=r||e.yn;t.zt(t.gt(n),l),u?delete n.$o:n.$o=l,r||(e.yn=n)},m=function(n,t,r){
(r=r||e.yn)[n]=t;var l=r.$o;null!=l&&u.overrideOption(n,t,l)},u.overrideOption=m,d=function(n,r,l,i,o,f){
var c,s,a,v,$,m,d,p,y,g,h,_,b=-1,j=r,T=true===j||""===j;if(T){for(s=/\$\$|[$%][sS]/g,
a=void 0;(a=s.exec(n))&&"$$"===a[0];);j=a&&a[0]||"$s"}return v=null,m=false,d=!!j&&"string"==typeof j&&n.includes(j),
p=f||e.yn,y=function(){var n,u;if(null!==v||1!==g)return v||""
;if(n=l&&p[l])c=l;else if(1===(u=Object.keys(p).filter(function(n){return"$"!==n[0]&&!i.includes(n)&&true===p[n]
})).length)n=c=u[0];else{if(""!==r)return g=u.length,"";n=""}return b=1,v=n+"",v="$s"===j||"%s"===j?t.ct(v):v},g=1,h=0,
T?((n.includes($="$c")||n.includes($="%c"))&&(b=1,
m=true),n=n.replace(new RegExp("\\$\\{([^}]*)}|\\$\\$"+(m?"|"+t.m($):"")+(d?"|"+t.m(j):""),"g"),function(n,u){var e,r
;return n===j?y():n===$?o+"":u?(b=1,h++,e=true,/^[sS]:/.test(u)&&(e="s"===u[0],u=u.slice(2)),
r="string"==typeof(r="__proto__"===u||"$"===u[0]?"":p[u])?r:r&&"object"==typeof r?JSON.stringify(r):r+"",
e?t.ct(r):r):"$"})):d&&(y(),null!==v&&(n=n.replace(j,function(){return v}))),1!==g?{ok:0,result:g
}:(j&&"string"==typeof j&&(_=f||{},f||u.overrideCmdOptions(_),_.$masked=true,c&&delete _[c]),{ok:b,value:v||"",result:n,
useCount:m,useDict:h})},u.fillOptionWithMask=d,p=function(n){var u,l,i=s;return s=null,i&&(a?(l=(u=t.tt()).Ut,i(n,u.Lt),
l.then(D)):i(n,e.j)),e.Dn=null,n?void 0:r.fe()},y=function(n){u.executeCommand(n,1,e.x,e.I,e.B)},
g=function(n,i,c,v,$,m){var d,g,h,_,j,T,w,k,C,N,O,S,q;if(b(0),s)return s=null,void(e.Dn=null);if(g=o.Ct(n),h=n.Yt,
g&&(d=g.$count)&&(i=i*d||1),1===(i=$||(i>=1e4?9999:i<=-1e4?-9999:0|i||1)));else if(1===h)i=1;else if(h>0&&(i>h||i<-h)){
if(null!=m)i=i<0?-1:1;else if(!($||g&&true===g.confirmed))return e.x=c,e.yn=null,e.I=v,e.B=i,e.Dn=null,
void u.nu(n.Jt,f(i)).then(y.bind(null,n))}else i=i||1;if(null!=m){
if(_=0|m.r,_=Math.max(1,_>=0&&_<100?Math.min(_||6,20):f(_)),m.c&&m.c.i>=_&&(!g||"showTip"!==g.$else))return e.I=v,
l.showHUD("Has run sequential commands for ".concat(_," times")),void(e.Dn=null);j=M(m.c,1,m.u),
g&&((36===n.Qt||j.t)&&n.Xt||u.hasFallbackOptions(g))&&(T={},g?u.overrideCmdOptions(T,false,g):t.gt(T),T.$retry=-_,
T.$f=j,j.t&&n.Xt&&!g.$else&&(T.$else="showTip"),g=T)}if(n.Xt);else{
if(null!=v)return k=4620>>(w=n.Qt)&1||4===w&&!!g&&false===g.keepHover,e.I=v,e.Dn=null,void u.portSendFgCmd(v,w,k,g,i)
;if(C=0,0===(w=n.Qt)?r.se.goBack&&(C=21):11===w&&(C=12),!C)return;n=o.Vt(n.Jt,g,[C,1,n.Yt])}O=e.N[N=n.Qt],
null===(a=n.Zt)&&(a=n.Zt=null!=g&&u.hasFallbackOptions(g)),e.x=c,e.yn=g||(n.At=t.vt()),e.I=v,e.B=i,i=e.k[N],
null==v&&N<11&&N>0||(i<1?(a?(q=(S=t.tt()).Ut,O(S.Lt),q.then(D)):O(e.j),e.Dn=null):(a=n.Zt,s=O,
(i<2||2===i&&f(e.B)<2?r.getCurTab:r.ie)(p)))},u.executeCommand=g,u.uu=function(){return v&&true!==e.yn.confirmed},
h=function(n,r){var l,o,f,a,$,m;return e.I?e.nn&&e.nn[1]?(o=(l=t.tt()).Ut,f=l.Lt,a=e.B,$=e.yn,m=e.I,
b(setTimeout(_,3e3,0)),s=function(n){e.x=0,e.yn=$,e.I=m,e.B=n?a>0?1:-1:a,v=0,f(n),setTimeout(function(){v=1},0)},
Promise.resolve(i.jr("cmdConfirm",[r,e.nn[1].get(n)||"### ".concat(n," ###")])).then(function(n){var u
;((null===(u=e.K.get(e.I.s.ur))||void 0===u?void 0:u.ar)||e.I).postMessage({N:13,c:"",i:c,m:n})}),
o):i.getI18nJson("help_dialog").then(function(t){return e.nn?e.nn[1]=t:e.nn=[null,t],u.nu(n,r)}):(s=null,e.B=e.B>0?1:-1,
Promise.resolve(e.B>0))},u.nu=h,_=function(n){var u=s;s=null,n>1&&u&&u(n<3)},b=function(n){c&&clearTimeout(c),c=n},
j=function(n,e){var t=n.c,r=n.i;r>=-1&&c!==r||(b(0),n.r?_(n.r):u.executeCommand(o.Et.get(t),n.n,0,e,0))},
u.onConfirmResponse=j,T=function(n,t,r){u.portSendFgCmd(e.I,n,t,r,1)},u.sendFgCmd=T,u.portSendFgCmd=function(n,u,e,t,r){
n.postMessage({N:10,H:e?l.ensureInnerCSS(n.s):null,c:u,n:r,a:t})},w=function(n,i){
var f,s,a,v,$,m,d=o.Et.get(n),p=36===d.Qt&&d.Xt;if(p&&e.P(d),b(0),i)return f=i.cr,
b(setTimeout(u.executeShortcut,100,n,null)),f.postMessage({N:13,c:n,i:c,m:""}),void l.ensuredExitAllGrab(i)
;if(s=o.Ct(d),a=p?"runKey":d.Jt,v=d.Qt,$=0,m=d,d.Xt||(0===v?r.se.goBack&&($=21):11===v&&($=12)),
$)m=o.Vt(a,s,[$,1,d.Yt]);else{if(!d.Xt)return;$=d.Qt}
$>10||$<1?u.executeCommand(m,1,0,null,0):s&&s.$noWarn||((s||(d.At=t.vt())).$noWarn=true,
console.log("Error: Command",a,"must run on pages which have run Vimium C"))},u.executeShortcut=w,k=function(n,r,i){
var f,c,s,a,v,$,m=n.command
;(f=(m=m?m+"":"")?o.It[m]:null)&&((i=i||(r.tab?l.indexFrame(r.tab.id,r.frameId||0)||((c=e.K.get(r.tab.id))?c.cr:null):null))||f[1])&&(a=n.key,
v=o.Vt(m,s=n.options||null),$=n.count,v&&($="-"!==$?parseInt($,10)||1:-1,s&&"object"==typeof s?t.gt(s):s=null,
u.executeCommand(v,$,a|=0,i,0)))},u.executeExternalCmd=k,u.hasFallbackOptions=function(n){return!!(n.$then||n.$else)},
u.parseFallbackOptions=function(n){var u=n.$then,e=n.$else;return u||e?{$then:u,$else:e,$retry:n.$retry,$f:n.$f}:null},
C=function(n){var t=u.parseFallbackOptions(e.yn);return t&&Object.assign(n,t),n},u.wrapFallbackOptions=C,
M=function(n,u,e){return{i:(n?n.i:0)+u,t:e&&2!==e?e:n?n.t:0}},N=function(n){return u.runNextCmdBy(n,e.yn)},
u.runNextCmd=N,O=function(n){return u.hasFallbackOptions(e.yn)?function(t){var l=2&n?void 0===t:r.fe(),i=e.yn
;return l?u.runNextCmdBy(0,i):u.runNextOnTabLoaded(i,1&n?t:null),2&n?void 0:l}:2&n?e.j:r.fe},u.getRunNextCmdBy=O,
D=function(n){
"object"==typeof n?u.runNextOnTabLoaded(e.yn,n):"boolean"==typeof n?u.runNextCmdBy(n?1:0,e.yn,null):n<0||u.runNextCmdBy(n?1:0,e.yn,n>1?n:null)
},u.runNextCmdBy=function(n,u,t){var r,i=n?u.$then:u.$else,o=!!i&&"string"==typeof i;return o&&(r={c:u.$f,r:u.$retry,
u:0,w:0},b(setTimeout(function(){
var n=e.K.get(e.U),u=e.I&&e.I.s.ur===e.U&&n&&n.so.indexOf(e.I)>0?e.I:n?2===n.cr.s.Sn&&n.so.filter(function(n){
return 2!==n.s.Sn}).sort(function(n,u){return n.s.tr-u.s.tr})[0]||n.cr:null;n&&l.ensuredExitAllGrab(n),e.V(i,u,r)
},t||50))),o},S=function(n,t,l){var i,o,f,a,v,$=n.$then;($&&"string"==typeof $||l)&&(i=function(t){
var i=Date.now(),m=i<v-500||i-v>=o||f;if(!t||!c)return a=-1,r.fe();if(m||"complete"===t.status){
if(!m&&!e.K.has(t.id)&&(l||t.url.startsWith(location.protocol)))return;b(0),s=null,l&&l(),$&&u.runNextCmdBy(1,n,l?67:0)}
},o=false!==t?1500:500,f=!!$&&/[$%]l/.test($.split("#",1)[0]),a=t?t.id:false!==t?-1:e.U,v=Date.now(),
b(setInterval(function(){r.tabsGet(-1!==a?a:e.U,i)},f?50:100)))},u.runNextOnTabLoaded=S,q=function(n,t){var r=n.f,l={
$then:n.k,$else:null,$retry:r&&r.r,$f:r&&M(r.c,0,r.u)}
;e.I=t,r&&false===r.u?u.runNextOnTabLoaded(l,null):u.runNextCmdBy(1,l,r&&r.w)},u.waitAndRunKeyReq=q});