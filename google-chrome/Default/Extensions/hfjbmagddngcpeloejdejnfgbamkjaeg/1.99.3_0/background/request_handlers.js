"use strict"
;__filename="background/request_handlers.js",define(["require","exports","./store","./utils","./browser","./parse_urls","./settings","./ports","./exclusions","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./open_urls","./frame_commands","./tools","./normalize_urls"],function(n,t,u,r,o,e,i,f,l,a,c,s,v,d,m,p,b,g){
var y,k,N,_,P,j;Object.defineProperty(t,"__esModule",{value:true}),y=-1,u.W=[function(n,t){var r=n.handler
;r&&"string"==typeof r&&("focus"===r?(4|t.s.ir||(t.s.ir|=4,t.postMessage({N:8})),
u.W[11]({},t)):"command"===r?v.executeExternalCmd(n,null,t):"tip"===r&&(u.I=f.indexFrame(t.s.ur,0)||t,
f.showHUD(n.tip||"Error: Lack .tip")))},function(n,t){var r,o,e=n.k,l=i.Ne;if(!(e>=0&&e<l.length))return u.I=t,
f.complainLimits(c.jr("notModify",[e]));o=u.w,u.pn[r=l[e]]!==n.v&&(o?o.then(function(){i.Ze(r,n.v)}):i.Ze(r,n.v))
},function(n,t){var u="object"==typeof n;return b.wr.Xr(t.s.sr,u?n.q:"",u?1:n)},function(n,t){var u=e.He(n)
;if(null==n.i)return u;t.postMessage({N:44,i:n.i,s:u})},function(n,t){var i=n.u,l=n.e,a=e.Pe(n);r.jt(),n.e=a,
null==a.p?(u.I=t,
f.showHUD(a.u)):l||i!==a.u?!t||"file://"===a.u.slice(0,7).toLowerCase()&&"file://"!==i.slice(0,7).toLowerCase()?o.tabsUpdate({
url:a.u}):v.sendFgCmd(0,false,{r:1,u:a.u}):(u.I=t,f.showHUD("Here is just root"),n.e={p:null,u:"(just root)"})
},function(n,t){var r,o,i=e.He(n);if(!i||!i.k)return u.I=t,f.showHUD(c.jr("noEngineFound")),
void(n.n&&v.runNextCmdBy(0,n.n));o=n.o||{},r=n.t.trim()&&u.p(n.t.trim(),524288,o.s).trim()||(n.c?u.f(o.s):""),
Promise.resolve(r).then(function(r){
var e=null===r?"It's not allowed to read clipboard":(r=r.trim())?"":c.jr("noSelOrCopied");if(e)return u.I=t,
f.showHUD(e),void(n.n&&v.runNextCmdBy(0,n.n));o.k=null==o.k?i.k:o.k,u.W[7]({u:r,o:o,r:0,
n:v.parseFallbackOptions(n.n)||{}},t)})},function(n,t){var r,e=n.s,i=false!==n.a;u.I=f.findCPort(t),
"number"!=typeof e?o.ce()?(o.ce().restore(e[1],function(){var n=o.fe();return n&&f.showHUD(c.jr("noSessionItem")),n}),
i||((r=t.s.ur)>=0||(r=u.U),r>=0&&o.selectTab(r))):f.complainNoSession():o.selectTab(e,function(n){
return o.fe()?f.showHUD(c.jr("noTabItem")):o.selectWnd(n),o.fe()})},m.openUrlReq,function(n,t){var r,o,e,i
;(o=u.K.get(r=t.s.ur))?t!==(i=o.cr)&&(o.cr=t,u.rn&&(e=t.s.Sn)!==i.s.Sn&&u.M(r,e)):u.rn&&u.M(r,t.s.Sn)},function(n,t){
var r,o,e,i,a,c=t;if((c||(c=f.indexFrame(n.tabId,n.frameId)))&&(o=(r=c.s).ye,!(e=u.K.get(r.ur))||!e.or)){
if(i=l.lr?l.fr(r.ye=t?n.u:n.url,r):null,
r.Sn!==(a=null===i?0:i?1:2))r.Sn=a,u.rn&&e.cr===c&&u.M(r.ur,a);else if(!i||i===l.fr(o,r))return;c.postMessage({N:1,p:i,
f:0})}},function(n,t){var r,o=n.t||0;u.I=t,u.B=o||u.B>0?1:-1,u.x=n.k,v.replaceCmdOptions(n.f||{}),
2!==o?1===o?p.parentFrame():p.nextFrame():(r=u.K.get(t.s.ur))?p.focusFrame(r.cr,r.so.length<=2,n.o?1:2,u.yn):f.safePost(t,{
N:45,l:u.x})},function(n,t){var r,o,e,i=u.K.get(t.s.ur);if(i&&(t.s.ir|=4,i.ir|=4,!(i.so.length<2)))for(o of(r={N:8},
i.so))e=o.s.ir,o.s.ir|=4,4&e||o.postMessage(r)},function(n,t,r){var e,i,l=t.s.ur,a=u.K.get(l),c=n.u
;if(!a||a.so.length<2)return false;for(i of a.so)if(i.s.ye===c){if(e){e=null;break}e=i}return e?(u.x=n.k,_(n,t,e,1),
true):!!o.le()&&(o.le().getAllFrames({tabId:t.s.ur},function(r){var o,e,i=0,a=t.s.tr;for(o of r)if(o.parentFrameId===a){
if(i){i=0;break}i=o.frameId}(e=i&&f.indexFrame(l,i))&&(u.x=n.k,_(n,t,e,1))}),!!r&&t)},function(n,t){p.initHelp(n,t)
},function(n,t){u.K.get(t.s.ur).ir|=4,t.s.ir|=12,t.postMessage({N:12,H:u.on})},function(n,t){var o,i,f,l,a=n.i;if(u.x=0,
null!=n.u)i=n.t,l=n.u,l=(f=(o=n.m)>=42&&o<=64)?e.Me(l,true):l,l=u.p(l,f?1048576:524288,n.o&&n.o.s),v.replaceCmdOptions({
url:l,newtab:null!=i?!!i:!f,keyword:n.o.k}),P(n.f),u.B=1;else{if(true!==n.r)return;if(null==u.yn||"omni"!==u.yn.k){
if(a)return;u.yn=r.vt(),u.B=1}else if(a&&u.yn.v===u.e.Wn)return}u.I=t,p.showVomnibar(a)},function(n,t){
f.isNotVomnibarPage(t,false)||u.C.yu(n.q,n,N.bind(t,0|n.i))},function(n,t){var o,i,l,a,s,v,d,m,b,g,y,k
;if(null!=n.i)return l=n.i,
a=(i=(n.r||"")+"").includes("name")?n.u:"",void Promise.all([/^data:/i.test(l)?Promise.resolve(l):r.v(l||n.u),null]).then(function(n){
var o,e,l,s,v,d,m,b=n[0],g="string"==typeof b,y=g?b:b?b[1]:"";u.I=t,o=y.indexOf(",")+1,
l=(e=y.slice(5,Math.max(5,o)).toLowerCase()).split(";")[0],b&&!l.startsWith("text/")?(s=y.slice(o,o+8),
s=e.includes("base64")?r.lt(s,"atob"):s.slice(0,6),
v=s.startsWith("\x89PNG")?"PNG":s.startsWith("\xff\xd8\xff")?"JPEG":/^GIF8[79]a/.test(s)?"GIF":(l.split("/")[1]||"").toUpperCase()||l,
d=a&&/^(http|ftp|file)/i.test(a)?a:"",m=i.includes("safe")&&"GIF"!==v||i.includes("force"),
p.handleImageUrl(g?b:"",g?null:b[0],m&&"PNG"!==v?9:1,function(n){
f.showHUD(c.jr(n?"imgCopied":"failCopyingImg",[1===n?"HTML":m?"PNG":v]))},a,d,null,false),
r.jt()):b?f.showHUD("",74):f.showHUD(c.jr(0===b?"downloadTimeout":"downloadFail"))});if(o=n.u||n.s||"",d=(s=n.o||{}).s,
m=s.k,
b=(v=null!=n.s&&n.m||0)>=42&&v<=64&&(!d||false!==d.r),g=n.d?false!==s.d:!!s.d)if("string"!=typeof o)for(y=o.length;0<=--y;)b&&(o[y]=e.Me(o[y]+"")),
o[y]=r.st(o[y]+"");else b&&(o=e.Me(o)),o=r.st(o);else"string"==typeof o&&o.length<4&&o.trim()&&" "===o[0]&&(o="")
;k=o&&u.h(o,n.j,d,m),k=n.s&&"object"==typeof n.s?"[".concat(n.s.length,"] ")+n.s.slice(-1)[0]:k,
Promise.resolve(k).then(function(r){u.I=t,f.showHUD(g?r.replace(/%[0-7][\dA-Fa-f]/g,decodeURIComponent):r,n.u?14:15)})
},function(n,t){var o,e,i,f,l,a,c=null!=t?t.s:null;null===c||4&c.ir||(c.ir|=4,(o=u.K.get(c.ur))&&(o.ir|=4)),i=1,
null!=(f=/^\d+|^-\d*/.exec(e=n.k))?(e=e.slice((l=f[0]).length),
i="-"!==l?parseInt(l,10)||1:-1):e.length>6&&e.startsWith("<".concat("c-v-").concat(e[5],">"))&&(e=e[5]+e.slice(7)),
(a=u.D.get(e))||(f=e.match(s.Gt),i=1,a=u.D.get(e=f[f.length-1])),r.jt(),a&&(36===a.Qt&&a.Xt&&u.P(a),n.e&&(u.Dn={
element:r.ot(n.e)}),v.executeCommand(a,i,n.l,t,0,null))},v.waitAndRunKeyReq,function(n,t){switch(u.I=t,n.a){case 1:
return b.yr.Dr(n,t);case 0:return b.yr.Kr(n,t);case 2:return b.yr.Zr(n.u);default:return}
},m.su,v.onConfirmResponse,function(n,t){var r,e,i,l,a,s,v,d;"e"!==n.t?(i=n.s,l=n.u,
s="tab"===(a="history"===(e=n.t)&&null!=i?"session":e)?a:a+" item",v=function(n){
Promise.resolve(c.jr("sugs")).then(function(t){f.showHUD(c.jr(n?"delSug":"notDelSug",[c.$r(t,a[0])||s]))})},
u.I=f.findCPort(t),
"tab"===a&&u.U===i?f.showHUD(c.jr("notRemoveCur")):"session"!==a?u.C.Nu("tab"===a?i:l,a,v):(null===(r=o.ce())||void 0===r?void 0:r.forgetClosedTab)&&(d=i,
o.ce().forgetClosedTab(d[0],d[1]).then(function(){return 1},u.j).then(v))):f.showHUD(c.jr("cannotDelSug"))
},p.openImgReq,function(n,t){u.I=null,m.openJSUrl(n.u,{},function(){u.I=t,f.showHUD(c.jr("jsFail"))})},function(n,t){
var r
;2!==n.c&&4!==n.c?_(n,t,(null===(r=u.K.get(t.s.ur))||void 0===r?void 0:r.ar)||null,n.f):f.getParentFrame(t.s.ur,t.s.tr,1).then(function(r){
var o;_(n,t,r||(null===(o=u.K.get(t.s.ur))||void 0===o?void 0:o.ar)||null,n.f)})},a.ii,function(n,t){
v.replaceCmdOptions({active:true,returnToViewport:true}),u.I=t,u.B=1,p.performFind()},p.framesGoBack,function(){
return c.br&&c.br(),c.mr},function(n,t){t.s.ir|=8},function(n,t){v.replaceCmdOptions({mode:n.c?"caret":"",start:true}),
P(n.f),u.I=t,u.B=1,p.enterVisualMode()},function(n){if(performance.now()-n.r.n<500){var t=n.r.c;t.element=r.ot(n.e),
d.runKeyWithCond(t)}},function(n,t){var r=n.o||{},i=u.p(e.Me(n.u,true),1048576,r.s);i=i!==n.u||r.k?g.$e(i,r.k,0):i,
u.I=t,f.showHUD(i,78),o.downloadFile(i,n.f,n.r||"",n.m<44?function(r){r||u.W[24]({m:37,f:n.f,u:i},t)}:null)
},function(n,t,u){return setTimeout(function(){f.sendResponse(t,u,9)},n),t},function(n){var t=n.v,u=t!==!!t
;f.showHUD(c.jr(u?"useVal":t?"turnOn":"turnOff",[n.k,u?JSON.stringify(t):""]))},function(n,t){
var r=t.s.ur,o=u.K.get(r>=0?r:u.U);u.W[18](n,o?o.cr:null)},function(n,t,u){
return!(false!==t.s&&!t.s.ye.startsWith(location.origin+"/"))&&(j(n.q,n.i,t).then(function(n){t.postMessage(u?{N:4,m:u,
r:n}:n)}),t)},function(n,t){var r=n.u,o=r.indexOf("://")
;r=(r=o>0?r.slice(r.indexOf("/",o+4)+1):r).length>40?r.slice(0,39)+"\u2026":r,u.I=t,f.showHUD(r,78)},function(n,t){
var o=n.t,e=r.st(n.u),i=o&&e?(u.un.actions.find(function(n){return n.startsWith("itemJoin=")})||"").slice(9):""
;i=i?i.includes("\\")?s.Bt('"'===i[0]?i:'"'.concat(i,'"')):r.lt(i):": ",u.W[17]({s:o&&e?o+i+e:e||o,d:false,m:0
},f.findCPort(t))},function(n,t){
null!=n.i?f.showHUDEx(t,"mLocalMarkTask",1,[[n.m?"mJumpTo":"mCreate"],n.i||["mLastMark"]]):f.showHUDEx(t,"mCreateLastMark",1,[])
},function(n){var t=u.S(null,null);if(t&&(clearTimeout(t.i),t.r&&t.r(false)),0===n)return!t},function(){return 0}],
N=function(n,t,o,e,i,l,a,c){var s,v,d,m,p,b=this.s.ye,g=2===n?2:0
;if(1===n&&u.bn>=58)if(b=b.slice(0,b.indexOf("/",b.indexOf("://")+3)+1),
null!=(m=-1!==y?null===(s=u.K.get(y))||void 0===s?void 0:s.ar:null)&&(m.s.ye.startsWith(b)?g=1:y=-1),
g);else for(p of u.K.values())if((d=(v=p.ar)&&v.s)&&d.ye.startsWith(b)){g=1,y=d.ur;break}f.safePost(this,{N:43,a:o,c:c,
i:g,l:t,m:e,r:a,s:i,t:l}),r.jt()},_=function(n,t,r,o){r&&2!==r.s.Sn?r.postMessage({N:7,
H:o||4!==n.c?f.ensureInnerCSS(t.s):null,m:o?5:0,k:o?u.x:0,f:{},c:n.c,n:n.n||0,a:n.a}):(n.a.$forced=1,
v.portSendFgCmd(t,n.c,false,n.a,n.n||0))},P=function(n){n&&("string"==typeof n&&(n=d.parseEmbeddedOptions(n)),
n&&"object"==typeof n&&Object.assign(u.yn,r.gt(n)))},j=function(t,u,r){return k||(k=new Promise(function(t,u){
n(["/background/sync.js"],t,u)}).then(n=>n).then(function(){return i.eo}).then(function(){
return o.import2("/background/page_handlers.js")})),k.then(function(n){return Promise.all(t.map(function(t){
return n.onReq(t,r)}))}).then(function(n){return{i:u,a:n.map(function(n){return void 0!==n?n:null})}})},
globalThis.window&&(window.onPagesReq=function(n){var t;return-3===n.i?((t=u.S(null,null))&&clearTimeout(t.i),
t):j(n.q,n.i,null)})});