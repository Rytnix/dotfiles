"use strict"
;__filename="background/tools.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./run_commands","./open_urls","./tab_commands"],function(n,t,e,r,o,i,u,a,c,l,f,s,v,d){
var _;Object.defineProperty(t,"__esModule",{value:true}),t.pr=t.hr=t.wr=t.yr=t.Mr=void 0,t.Mr={Cr:function(n,t){
return"vimiumContent|"+n+(t?"|"+t:"")},Ir:function(n,t){var i=o.de.contentSettings;try{i&&i.images.get({
primaryUrl:"https://127.0.0.1/"},o.fe)}catch(n){i=null}
return i?i[n]&&!/^[A-Z]/.test(n)&&i[n].get?!(!t.startsWith("read:")&&r.Rt.test(t)&&!t.startsWith(e.e.Gn))&&(c.complainLimits(f.jr("changeItsCS")),
true):(c.showHUD(f.jr("unknownCS",[n])),true):(c.showHUD("Has not permitted to set contentSettings"),true)},
Tr:function(n,t){var o,u,a,l,s,v,d,_,m,p
;if(n.startsWith("file:"))return(o=e.bn>=56?1:t>1?2:0)?(c.complainLimits(1===o?f.jr("setFileCS",[56]):f.jr("setFolderCS")),
[]):[n.split(/[?#]/,1)[0]];if(n.startsWith("ftp"))return c.complainLimits(f.jr("setFTPCS")),[]
;if(u=n.match(/^([^:]+:\/\/)([^\/]+)/),a=i.Ce.exec(u[2]),l=[(n=u[1])+(s=a[3]+(a[4]||""))+"/*"],
t<2||r.pt(a[3],0))return l;for(a=null,d=(v=r.bt(s))[0],_=v[1],m=Math.min(d.length-_,t-1),
p=0;p<m;p++)s=s.slice(d[p].length+1),l.push(n+s+"/*");return l.push(n+"*."+s+"/*"),
m===d.length-_&&"http://"===n&&l.push("https://*."+s+"/*"),l},Sr:function(n){var t,e,r;for(e of n.so){
if(r=new URL(e.s.ye).host,t&&t!==r)return true;t=r}return false},Lr:function(n,e){var r=o.de.contentSettings[n]
;null==e?(r.clear({scope:"regular"}),r.clear({scope:"incognito_session_only"},o.fe),a.Xe(t.Mr.Cr(n),null)):r.clear({
scope:e?"incognito_session_only":"regular"})},Nr:function(n,r){var o=n.type?""+n.type:"images"
;return!t.Mr.Ir(o,"http://a.cc/")&&(t.Mr.Lr(o,r?r.s.sr:2===e.F),
c.showHUDEx(r,"csCleared",0,[o[0].toUpperCase()+o.slice(1)]),true)},Or:function(n,e,r,o){
var i=n.type?""+n.type:"images",u=r[0];n.incognito?t.Mr.Rr(e,i,u,o):t.Mr.Ar(i,e,u,"reopen"===n.action,o)},
Ar:function(n,r,u,c,l){var f=i.be(u.url);t.Mr.Ir(n,f)?l(0):o.de.contentSettings[n].get({primaryUrl:f,
incognito:u.incognito},function(i){t.Mr.Ur(n,f,r,{scope:u.incognito?"incognito_session_only":"regular",
setting:i&&"allow"===i.setting?"block":"allow"},function(r){var i,f,v;r?l(0):(u.incognito||(i=t.Mr.Cr(n),
"1"!==e._n.get(i)&&a.Xe(i,"1")),v=!o.ce()||e.bn>=70&&(f=e.K.get(u.id))&&f.so.length>1&&t.Mr.Sr(f),
u.incognito||c?d.Gr(u):u.index>0?d.Gr(u,v?0:2):o.getCurWnd(true,function(n){
return n&&"normal"===n.type?d.Gr(u,v?0:n.tabs.length>1?2:1):o.se.reload(s.getRunNextCmdBy(0)),o.fe()}))})})},
Rr:function(n,r,u,a){if(e.e.Rn)return c.complainLimits(f.jr("setIncogCS")),void a(0);var l=i.be(u.url)
;t.Mr.Ir(r,l)?a(0):o.de.contentSettings[r].get({primaryUrl:l,incognito:true},function(e){
return o.fe()?(o.de.contentSettings[r].get({primaryUrl:l},function(e){e&&"allow"===e.setting?a(1):o.ae.create({
type:"normal",incognito:true,focused:false,url:"about:blank"},function(e){var i=e.tabs[0].id
;return t.Mr.Jr(n,r,u,l,e.id,true,function(){o.se.remove(i)})})
}),o.fe()):e&&"allow"===e.setting&&u.incognito?t.Mr.Wr(u):void o.ae.getAll(function(o){var i,a,c
;if((o=o.filter(function(n){return n.incognito&&"normal"===n.type})).length)return i=v.preferLastWnd(o),
e&&"allow"===e.setting?t.Mr.Wr(u,i.id):(a=u.windowId,c=u.incognito&&o.some(function(n){return n.id===a}),
t.Mr.Jr(n,r,u,l,c?void 0:i.id))
;console.log("%cContentSettings_.ensure","color:red","get incognito content settings",e," but can not find an incognito window.")
})})},Jr:function(n,e,r,i,u,a,c){var l=t.Mr.qr.bind(null,r,u,c);return t.Mr.Ur(e,i,n,{scope:"incognito_session_only",
setting:"allow"},a&&u!==r.windowId?function(n){if(n)return l(n);o.ae.get(r.windowId,l)}:l)},Ur:function(n,e,i,u,a){
var c,l=false,f=o.de.contentSettings[n],s=function(){var n=o.fe();return n&&console.log("[%o]",Date.now(),n),l||(--d,
((l=!!n)||0===d)&&setTimeout(a,0,l)),n},v=t.Mr.Tr(e,0|i),d=v.length;if(d<=0)return a(true);for(c of(r.gt(u),
v))f.set(Object.assign({primaryPattern:c},u),s)},qr:function(n,e,r,i){true!==i&&t.Mr.Wr(n,e),r&&r(),
true!==i?e&&o.ae.update(e,{focused:true,state:i?i.state:void 0}):s.runNextCmd(0)},Wr:function(n,t){n.active=true,
"number"==typeof t&&n.windowId!==t&&(n.index=void 0,n.windowId=t),d.Gr(n)}},t.yr={Ze:function(n,r,o,i){
var u,l,f,s=n.l,v=n.n,d=n.u,m=n.s
;s&&0===m[0]&&0===m[1]&&(2===m.length?(u=d.indexOf("#"))>0&&u<d.length-1&&m.push(d.slice(u)):(m[2]||"").length<2&&m.pop()),
l=t.yr.Fr(v,s?d:""),f=JSON.stringify(s?m:{tabId:o,url:d,scroll:m}),r?(e.q||(_.Qr(),e.q=new Map)).set(l,f):a.Xe(l,f),
i&&c.showHUDEx(i,"mNormalMarkTask",1,[["mCreate"],[s?"Local":"Global"],v])},Dr:function(n,r){var o,i=r.s.ur
;n.s?t.yr.Ze(n,r.s.sr,i,r):(r=(null===(o=e.K.get(i))||void 0===o?void 0:o.ar)||r)&&r.postMessage({N:11,n:n.n})},
Kr:function(n,i){var u,a,l,f,d,_,m,p=n.n,g=t.yr.Fr(p,n.u),b=i.s.sr&&(null==e.q?void 0:e.q.get(g))||e._n.get(g),h=n.c
;n.l&&((u=b?JSON.parse(b):null)||(l=void 0,f=void 0,(a=n.o)&&(l=+a.x)>=0&&(f=+a.y)>=0&&(u=[l,f,a.h])),
u)?t.yr.xr(i,2,p,u,h):b?(_=+(d=JSON.parse(b)).tabId,(m={u:d.url,s:d.scroll,t:d.tabId,n:p,p:true,
q:v.parseOpenPageUrlOptions(h),f:s.parseFallbackOptions(h)}).p=false!==h.prefix&&0===m.s[1]&&0===m.s[0]&&!!r.it(m.u),
_>=0&&e.K.has(_)?o.tabsGet(_,t.yr.zr.bind(0,m)):e.W[21](m)):c.showHUDEx(i,"noMark",0,[[n.l?"Local":"Global"],p])},
zr:function(n,r){var i=o.getTabUrl(r).split("#",1)[0];if(i===n.u||n.p&&n.u.startsWith(i))return e.W[6]({s:r.id}),
t.yr.Hr(n,r);e.W[21](n)},Fr:function(n,t){
return t?"vimiumMark|"+u.ke(t.split("#",1)[0])+(t.length>1?"|"+n:""):"vimiumGlobalMark|"+n},xr:function(n,t,e,r,o){
n.postMessage({N:15,l:t,n:e,s:r}),e&&c.showHUDEx(n,"mNormalMarkTask",t?1:2,[["mJumpTo"],[t?"Local":"Global"],e]),
o&&s.runNextCmdBy(1,o)},Hr:function(n,r){var o,i=r.id,u=null===(o=e.K.get(i))||void 0===o?void 0:o.ar
;if(u&&t.yr.xr(u,0,n.n,n.s,n.f),n.t!==i&&n.n)return t.yr.Ze(n,2===e.F,i)},Zr:function(n){var r,o=t.yr.Fr("",n),i=0
;e._n.forEach(function(n,t){t.startsWith(o)&&(i++,a.Xe(t,null))}),(r=e.q)&&r.forEach(function(n,t){
t.startsWith(o)&&(i++,r.delete(t))
}),c.showHUDEx(e.I,"markRemoved",0,[i,["#"===n?"allLocal":n?"Local":"Global"],[1!==i?"have":"has"]])}},t.wr={Br:null,
Er:0,Vr:function(){var n=e._n.get("findModeRawQueryList")||"";t.wr.Br=n?n.split("\n"):[],t.wr.Vr=null},
Xr:function(n,o,i){var u,c,l=t.wr;if(l.Vr&&l.Vr(),u=n?e.E||(_.Qr(),e.E=l.Br.slice(0)):l.Br,
!o)return(u[u.length-(i||1)]||"").replace(/\r/g,"\n");o=o.replace(/\n/g,"\r"),n?l.Yr(o,u,true):(o=r.kt(o,0,99),
(c=l.Yr(o,u))&&a.Xe("findModeRawQueryList",c),e.E&&l.Yr(o,e.E,true))},Yr:function(n,t,e){var r=t.lastIndexOf(n)
;if(r>=0){if(r===t.length-1)return;t.splice(r,1)}else t.length>=50&&t.shift();if(t.push(n),!e)return t.join("\n")},
ro:function(n){n?e.E&&(e.E=[]):(t.wr.Vr=null,t.wr.Br=[],a.Xe("findModeRawQueryList",""))}},_={io:false,Er:0,
Qr:function(){_.io||(o.ae.onRemoved.addListener(_.uo),_.io=true)},uo:function(){_.io&&(_.Er=_.Er||setTimeout(_.co,34))},
co:function(){var n;if(_.Er=0,e.bn>51)for(n of e.K.values())if(n.cr.s.sr)return;o.ae.getAll(function(n){
n.some(function(n){return n.incognito})||_.lo()})},lo:function(){e.E=null,e.q=null,o.ae.onRemoved.removeListener(_.uo),
_.io=false}},t.hr={fo:[1,1],vo:0,do:function(n){var e=t.hr.fo[n];return"object"==typeof e?e.matches:null},
_o:function(n,e){var r,o=2===e,i=t.hr,u=i.fo,a=u[n],c=n?"prefers-color-scheme":"prefers-reduced-motion"
;1===a&&o&&(u[n]=a=matchMedia("(".concat(c,")")).matches?2:0),
o&&2===a?((r=matchMedia("(".concat(c,": ").concat(n?"dark":"reduce",")"))).onchange=i.mo,u[n]=r,
i.vo=i.vo||setInterval(t.hr.po,6e4)):o||"object"!=typeof a||(a.onchange=null,u[n]=2,i.vo>0&&u.every(function(n){
return"object"!=typeof n})&&(clearInterval(i.vo),i.vo=0))},go:function(n,r,o){var i,u,c,f,s=t.hr.fo[n]
;i=n?"dark":"less-motion",
f=a.Ye(c=n?"d":"m",u="object"==typeof s?s.matches:null!=o?o:1===(0===n?e.pn.autoReduceMotion:e.pn.autoDarkMode)),
e.cn[c]!==f&&(e.cn[c]=f,r||a.We({N:6,d:[c]})),l.ii({t:i,
e:u||" ".concat(e.pn.vomnibarOptions.styles," ").includes(" ".concat(i," ")),b:!r})},po:function(){var n,e
;for(e=(n=t.hr.fo).length;0<=--e;)"object"==typeof n[e]&&t.hr.go(e)},mo:function(){t.hr.vo>0&&clearInterval(t.hr.vo),
t.hr.vo=-1;var n=t.hr.fo.indexOf(this);n>=0&&t.hr.go(n)}},t.pr={bo:null,ho:e.j},setTimeout(function(){function n(n){
var t,i,u;n.windowId===e.L?((t=performance.now())-f>666&&(i=c.get(e.U),u=1===e.gn?Date.now():t,i?(i.i=++l,
i.t=u):c.set(e.U,{i:++l,t:u}),l>2037&&o.se.query({},s)),e.U=n.tabId,f=t):o.ae.get(n.windowId,r)}function r(n){
if(n.focused){var t=n.id;t!==e.L&&(e.J=e.L,e.L=t),o.se.query({windowId:t,active:true},function(n){
n&&n.length>0&&t===e.L&&i(n)})}}function i(r){if(!r||0===r.length)return o.fe();var i=r[0],u=i.windowId,a=e.L
;u!==a&&(e.L=u,e.J=a),e.F=i.incognito?2:1,t.pr.ho(),n({tabId:i.id,windowId:u})}var u=e.L,c=e.z,l=1,f=0,s=function(n){
var t=n?n.map(function(n){return[n.id,c.get(n.id)]}).filter(function(n){return n[1]}).sort(function(n,t){
return n[1].i-t[1].i}):[];t.length>1023&&t.splice(0,t.length-1023),t.forEach(function(n,t){return n[1].i=t+2}),
(l=t.length>0?t[t.length-1][1].i:1)>1?e.z=c=new Map(t):(c.forEach(function(n,t){n.i<1026?c.delete(t):n.i-=1024}),l=1024)
};o.se.onActivated.addListener(n),o.ae.onFocusChanged.addListener(function(n){n!==u&&o.se.query({windowId:n,active:true
},i)}),o.getCurTab(function(n){f=performance.now();var t=n&&n[0];if(!t)return o.fe();e.U=t.id,e.L=t.windowId,
e.F=t.incognito?2:1}),t.pr.bo=function(n,t){return c.get(t.id).i-c.get(n.id).i},a.eo.then(function(){
for(var n of["images","plugins","javascript","cookies"])null!=e._n.get(t.Mr.Cr(n))&&o.de.contentSettings&&setTimeout(t.Mr.Lr,100,n)
})},120),e.Q.autoDarkMode=e.Q.autoReduceMotion=function(n,e){var r=e.length>12?0:1
;t.hr._o(r,n="boolean"==typeof n?n?2:0:n),t.hr.go(r,0,2===n?null:n>0)},e.Q.vomnibarOptions=function(n){
var r,o,i,u,c,l,f,s=a.Je.vomnibarOptions,v=e.in,d=true,_=s.actions,m=s.maxMatches,p=s.queryInterval,g=s.styles,b=s.sizes
;n!==s&&n&&"object"==typeof n&&(r=Math.max(3,Math.min(0|n.maxMatches||m,25)),
i=(o=n.actions)?o.replace(/[,\s]+/g," ").trim():"",u=+n.queryInterval,c=((n.sizes||"")+"").trim(),
l=((n.styles||"")+"").trim(),f=Math.max(0,Math.min(u>=0?u:p,1200)),(d=m===r&&p===f&&c===b&&_===i&&g===l)||(m=r,p=f,b=c,
g=l),e.un.actions=i?i.split(" "):[],n.actions=i,n.maxMatches=r,n.queryInterval=f,n.sizes=c,n.styles=l),
e.pn.vomnibarOptions=d?s:n,v.n=m,v.i=p,v.s=b,v.t=g,t.hr.go(0,1),t.hr.go(1,1),a.Qe({N:47,d:{n:m,i:p,s:b,t:v.t}})}});