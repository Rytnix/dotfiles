"use strict"
;__filename="background/open_urls.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./exclusions","./i18n","./key_mappings","./run_commands","./clipboard","./tools"],function(n,u,r,e,i,t,l,o,f,c,a,s,d,v){
var p,m,w,g,b,y,h,_,I,k,$,P,T,x,U,j,q,z,L,M,N;Object.defineProperty(u,"__esModule",{value:true}),
u.su=u.openUrlReq=u.openUrl=u.goToNextUrl=u.openUrlWithActions=u.openShowPage=u.openJSUrl=u.parseReuse=u.du=u.parseOpenPageUrlOptions=u.preferLastWnd=u.newTabIndex=void 0,
p={current:0,reuse:1,newwnd:2,frame:3,newbg:-2,lastwndfg:-5,lastwnd:-5,lastwndbg:-6,iflastwnd:-7,reuseincurwnd:-3,
lastwndbgbg:-8,lastwndbginactive:-8},u.newTabIndex=function(n,u,r,e){
return"before"===u||"left"===u||"prev"===u||"previous"===u?n.index:"after"===u||"next"===u||"right"===u?n.index+1:"default"===u?void 0:false!==e&&null!=i.getGroupId(n)?"start"===u||"begin"===u?n.index:"end"===u?void 0:n.index+1:"start"===u||"begin"===u?0:"end"===u?r?3e4:void 0:n.index+1
},u.preferLastWnd=function(n){return n.find(function(n){return n.id===r.J})||n[n.length-1]},
u.parseOpenPageUrlOptions=function(n){return{g:n.group,i:n.incognito,m:n.replace,o:n.opener,r:n.reuse,p:n.position,
w:n.window}},m=function(n){
return"boolean"==typeof n?n:n?"force"===n||("reverse"===n?2!==r.F:"same"===n||"keep"===n?2===r.F:null):null},
w=function(n){return"popup"===n||"normal"===n?n:void 0},g=function(n,u,e){var t=function(u){
return!(n&&u.type!==n||null!=e&&u.incognito!==e||"minimized"===u.state)}
;return(r.J<0?Promise.resolve(null):new Promise(function(n){i.ae.get(r.J,function(u){return n(u?t(u)?u:null:(r.J=-1,
null)),i.fe()})})).then(function(n){return n||new Promise(function(n){return i.ae.getAll(function(e){
var i=e.filter(function(n){return t(n)&&n.id!==r.L}),l=i.length>0?i.sort(function(n,u){return u.id-n.id})[0]:null
;l&&r.J<0&&(r.J=l.id),n(l||!u?l:e.find(function(n){return n.id===r.L})||e.find(function(n){return n.focused})||null)})})
})},u.du=function(n,u){n=n.slice(0,128).split("?")[0].replace(/\\/g,"/")
;var e=2===r.gn&&/\/globalroot\/device\/condrv|\bdevice\/condrv\/kernelconnect/.test(n);return e&&(r.I=u||r.I,
o.showHUD(c.jr("harmfulURL"))),e},b=function(n,l,f,c){var d,v,p,m,w=function(n){s.replaceCmdOptions(l),
s.overrideCmdOptions({urls:n,url:null,url_f:null,copied:null,keyword:null},true)};switch(e.jt(),c[1]){case 1:
o.showHUD(c[0],15),s.runNextCmdBy(1,l);break;case 5:case 7:w(null),7===c[1]||l.$p?n=0:s.overrideOption("$p",1),
u.openUrlWithActions(t.$e(c[0]),n,false,f);break;case 4:n>=3&&c[0]&&s.runNextCmdBy(1,l);break;case 6:if(v=r.U,
"openUrls"===(d=c[0])[0]){for(m of(p=[],d.slice(1)))"string"==typeof m||5!==m[1]&&7!==m[1]||(m=t.$e(c[0],null,n)),
"string"!=typeof m?Promise.resolve(m).then(function(u){6===u[1]&&"openUrls"===u[0][0]||b(n,l,f,u)}):p.push(m)
;if(0===p.length)return;return w(p),void(f&&f.length>0?j(f):i.getCurTab(j))}setTimeout(function(){
var n=r.K.get(v),u=e.gt({keys:[d[1]]});r.Dn=null,s.executeCommand(a.Vt("runKey",u),1,0,n?n.cr:null,0,null)},0)}},
y=function(n,u,r){n?s.runNextOnTabLoaded(u,r):s.runNextCmdBy(0,u)},h=function(n,u,e,t,l){var o=function(u){
return y(u,n,u),i.fe()};if(l){if(l.length>0&&l[0].incognito&&i.ne(e))return void i.tabsCreate({url:e},o)
}else if(i.ne(e)&&true!==t)return void i.getCurTab(h.bind(null,n,u,e,true));3===u&&r.I&&r.I.s.tr?s.sendFgCmd(0,false,{
r:1,u:e}):l?i.tabsUpdate(l[0].id,{url:e},o):i.tabsUpdate({url:e},o)},_=function(n,u,r,e,t,l){i.makeWindow({url:n,
focused:u,incognito:r,type:"string"==typeof n||1===n.length?w(e.window):void 0,left:t.left,top:t.top,width:t.width,
height:t.height},null!=t.state?t.state:l&&"minimized"!==l.state?l.state:"",function(n){y(n,e,n&&n.tabs[0])})},
I=function(n,e,t,l,o){var f,c,a=-2!==e,s=l?l.windowId:r.L,d=o.find(function(n){return n.id===s}),v=null!=d&&d.incognito
;!t.window&&2!==e&&(v||(o=o.filter(function(n){return n.incognito&&"normal"===n.type})).length>0)?(f={url:n[0],active:a,
windowId:v?s:u.preferLastWnd(o).id},v&&(f.index=u.newTabIndex(l,t.position,c=true===t.opener,t.group),
c&&(f.openerTabId=l.id)),i.openMultiTabs(f,r.B,true,n,v&&t.group,l,function(n){!v&&a&&i.selectWnd(n),y(n,t,n)
})):_(n,true,true,t,t,d)},u.parseReuse=function(n){
return null==n?-1:"string"!=typeof n?"boolean"==typeof n?n?1:-1:isNaN(+n)?-1:0|n:(n=n.toLowerCase().replace("window","wnd").replace(/-/g,""))in p?p[n]:-1
},k=function(n,u,t){
var l,o,f,c,a,s,d,v,p=u&&u.length>0?i.getTabUrl(u[0]):"",m=[true!==t?false===t?"":t:(/[%$]s/i.exec(n)||["${url_mask}"])[0],r.yn.host_mask||r.yn.host_mark,r.yn.tabid_mask||r.yn.tabId_mask||r.yn.tabid_mark||r.yn.tabId_mark,r.yn.title_mask||r.yn.title_mark,r.yn.id_mask||r.yn.id_mark||r.yn.id_marker],w=[]
;for(l=0;l<m.length;l++)if((f=(o=null!=m[l]?m[l]+"":"")?n.indexOf(o):-1)>=0){for(a of(c=f+o.length,w));
w.push([f,c,0===l?/^[%$]S|^\$\{S:/.test(o)?p:e.ct(p):1===l?new URL(p).host:2===l?p&&""+u[0].id:3===l?p&&""+e.ct(u[0].title):i.de.runtime.id])
}if(w.length){for(v of(s="",d=0,w.sort(function(n,u){return n[0]-u[0]}),w))s=s+n.slice(d,v[0])+v[2],d=v[1]
;n=s+n.slice(d)}return n},$=function(n,e,t,l){var o=m(l.incognito);(e>-4?new Promise(function(n){
i.getCurWnd(false,function(u){return n(u||null),i.fe()})}):g(w(l.window),true,o)).then(function(n){
return n&&new Promise(function(u){i.se.query({active:true,windowId:n.id},function(r){return n.tabs=r,u(n),i.fe()})})
}).then(function(f){var c,a=!!f&&!f.focused&&f.id!==r.L,d=-7===e&&!a
;if(f&&(a||-7===e&&(null==o||f.incognito===!!o)))c=f.tabs&&f.tabs.length>0?i.selectFrom(f.tabs):null,i.openMultiTabs({
url:n[0],active:e>-6||d,windowId:f.id,pinned:!!l.pinned,index:c?u.newTabIndex(c,l.position,false,l.group):void 0
},r.B,!!l.incognito&&"string"==typeof l.incognito,n,l.group,c,function(n){
e>-6?a&&i.selectWnd(n):n&&e>-8&&!d&&i.selectTab(n.id),y(n,l,e>-6&&-2!==e&&n)});else{
if(-7===e&&s.runNextCmdBy(0,l))return;_(n,e>-8,null!=o?!!o:t,l,l,f)}})},P=function(n,e,t,l){
var o,f,c=l&&l[0],a=!!c&&c.incognito||2===r.F,s=-2!==e&&-8!==e,d=2===e||e<-3||!!t.window,v=m(t.incognito),p=null!=v&&"string"==typeof t.incognito
;if(!p&&n.some(i.ne))d=a||d;else if(a)d=false===v||d;else if(v&&e>-4)return void i.ae.getAll(I.bind(null,n,e,t,c))
;d?$(n,e,a,t):(f={url:n[0],active:s,windowId:c?c.windowId:void 0,openerTabId:o=t.opener&&c?c.id:void 0,
pinned:!!t.pinned,index:c?u.newTabIndex(c,t.position,null!=o,t.group):void 0
},i.openMultiTabs(f,r.B,p,n,t.group,c,function(n){s&&n&&i.selectWndIfNeed(n),y(n,t,s&&n)}))},T=function(n,e,t,l,o,c){
var a,d=t?"string"==typeof t?f.Mt(t):"object"==typeof t&&t.t&&t.v?t:null:null,v=2===e||1===e,p=1===e||-3===e,b=p&&o.q||{},h=w(p?b.w:l.window),_=m(p?b.i:l.incognito),I=true===(p?b.g:l.group)
;r.B=1,p?(b.m=null,b.g=I):(s.overrideOption("group",I,l),null!=l.replace&&s.overrideOption("replace",d,l)),
a=e<-3&&d?g(h,-7===e,_):Promise.resolve(!v&&r.L>=0?{id:r.L}:null),Promise.all([a,!I||c?null:new Promise(function(n){
i.getCurTab(function(u){c=u||[],n()})})]).then(function(n){var u=n[0];return d&&(u||v)?new Promise(function(n){
i.se.query(u?{windowId:u.id}:{windowType:h||void 0},function(u){
var t,l,o=null!=_?!_:e>-4?2!==r.F:-2,a=(u||[]).filter(function(n){return f.Ft(d,n.url)&&n.incognito!==o})
;return I&&a.length>0&&c.length>0&&(t=i.getGroupId(c[0]),u&&(a=a.filter(function(n){return i.getGroupId(n)===t}))),
a.sort(function(n,u){var e=r.z.get(u.id),i=r.z.get(n.id);return i?e?e.i-i.i:1:e?-1:u.id-n.id}),
1===e&&(l=a.filter(function(n){return n.windowId===r.L}),a=l.length>0?l:a),n(a.length?a[0]:null),i.fe()})}):null
}).then(function(t){var f,a
;null==t||t.id===r.U&&!p?p?u.su(o):s.runNextCmdBy(0,l)||(c?P([n],e,l,c):i.getCurTab(P.bind(null,[n],e,l))):r.o&&t.url.startsWith(r.e.Qn)?U(p?o.f||{}:l,t):(f=-2!==e&&-8!==e,
a=t.windowId!==r.L&&e>-6,i.tabsUpdate(t.id,{url:n},function(n){return n&&(f&&(i.selectTab(n.id),n.active=true),
a&&i.selectWnd(n)),y(n,p?o.f||{}:l,-2!==e&&e>-6&&n),i.fe()}))})},u.openJSUrl=function(n,u,t,l){
if(/^(void|\(void\))? ?(0|\(0\))?;?$/.test(n.slice(11).trim()))s.runNextCmdBy(1,u);else{if(!t&&r.I){
if(0===l&&(r.I=o.indexFrame(r.I?r.I.s.ur:r.U,0)||r.I),o.safePost(r.I,{N:5,u:n,f:s.parseFallbackOptions(u)}))return
;if(-1!==l)return void s.runNextCmdBy(0,u);r.I=null}var f=function(r){if(-1===r||i.fe()){var l=e.lt(n.slice(11))
;return i.ue(i.se.executeScript,{code:l}).then(function(n){void 0===n&&t&&t(),y(!!n,u,null)}),i.fe()}
s.runNextOnTabLoaded(u,null)};r.bn<71?i.tabsUpdate({url:n},f):f(-1)}},x=function(n,e,t,l){var o,f,c=r.e.Qn
;return!(n.length<c.length+3||!n.startsWith(c))&&(void 0===l?(i.getCurTab(function(r){
return u.openShowPage(n,r&&r.length>0||-2===e?e:-1,t,r&&r[0]||null),i.fe()}),true):(n=n.slice(c.length),
o=l?l.incognito:2===r.F,n.startsWith("#!image ")&&o&&(n="#!image incognito=1&"+n.slice(8).trim()),
r.o=(f=[n,null,0])[1]=function(){return clearTimeout(f[2]),r.o=null,f[0]},f[2]=setTimeout(function(){
f[0]="#!url vimium://error (vimium://show: sorry, the info has expired.)",f[2]=setTimeout(function(){
r.o===f[1]&&(r.o=null),f[0]="",f[1]=null},2e3)},1200),r.B=1,0===e||3===e||o&&(-2===e||-1===e)?o?i.tabsCreate({url:c,
active:-2!==e},function(n){y(n,t,n)}):U(t,l):(t.incognito=false,1===e||-3===e?T(n,e,t.replace,null,{u:c,p:t.prefix,
q:u.parseOpenPageUrlOptions(t),f:s.parseFallbackOptions(t)},l?[l]:void 0):P([c],e,t,l?[l]:void 0)),true))},
u.openShowPage=x,U=function(n,u){var t=r.e.Qn,l=r.bn>=54&&!u.url.split("#",2)[1]?i.de.extension.getViews({tabId:u.id
}):[];l.length>0&&l[0].location.href.startsWith(t)&&l[0].onhashchange?(l[0].onhashchange(),
i.selectTab(u.id)):i.tabsUpdate(u.id,{url:t,active:true}),e.nt(function(){s.runNextOnTabLoaded(n,null)})},j=function(n){
var e,l,o,f,c=r.yn,a=c.urls;if(2!==c.$fmt){if(1!==c.$fmt)for(e=0;e<a.length;e++)a[e]=t.$e(a[e]+"")
;s.overrideOption("$fmt",2)}for(l of a)if(u.du(l))return i.fe()
;f=1===(o=u.parseReuse(c.reuse))||0===o||3===o||-3===o?-1:o,r.yn=null,P(a,f,c,n)},q=function(n,l,o,f){
var c,a,v,p,m,w,g,y,_
;"string"!=typeof n||(n||9!==l?((a=s.fillOptionWithMask(n,r.yn.mask,"value",["url","url_mask","url_mark","value"],r.B)).ok&&(n=a.result,
a.useCount&&(r.B=1)),p=r.yn.url_mark,null==(v=r.yn.url_mask)&&null==p||(n=k(n,f,null!=v?v:p)),o&&(m=d.eu(r.yn),
n=r.p(n,0,m)),
9!==l&&(w=(r.yn.keyword||"")+"",n=(null!==(c=r.yn.testUrl)&&void 0!==c?c:!w)?t.$e(n,w,l):t.ge(n.trim().split(e.qt),w)),
(g=r.yn.goNext)&&n&&"string"==typeof n&&(n=r.p(n,8192),n=u.goToNextUrl(n,r.B,g)[1]),
n="string"==typeof n?t.ve(n):n):n=r.newTabUrl_f),_=u.parseReuse((y=r.yn).reuse),r.yn=null,e.jt(),
"string"!=typeof n?n instanceof Promise?n.then(b.bind(0,l,y,f)):b(l,y,f,n):u.openShowPage(n,_,y)||(e.wt(n)?u.openJSUrl(n,y,null,_):u.du(n)?s.runNextCmdBy(0,y):1===_||-3===_?T(n,_,y.replace,null,{
u:n,p:y.prefix,q:u.parseOpenPageUrlOptions(y),f:s.parseFallbackOptions(y)
},f):0===_||3===_?h(y,_,n):y.replace?T(n,_,y.replace,y,null,f):f?P([n],_,y,f):i.getCurTab(P.bind(null,[n],_,y)))},
u.openUrlWithActions=q,z=function(n,f){var a,d,v,p,m,w,g,b,y,h,_,I,k
;if(null===f)return o.complainLimits("read clipboard"),void s.runNextCmd(0)
;if(!(f=f.trim()))return o.showHUD(c.jr("noCopied")),void s.runNextCmd(0)
;if(v="string"==typeof(d=r.yn.copied)&&d.includes("any"),("urls"===d||v)&&(a=f.split(/[\r\n]+/g)).length>1){
for(g of(p=[],m=v&&r.yn.keyword?r.yn.keyword+"":null,w=false,a))if(g=g.trim()){if(g=t.$e(g,m,0),!(v||t.xe<=2)){
p.length=0,w=true;break}p.push(g)}if(p.length>1)return r.yn=s.copyCmdOptions(e.vt(),r.yn),r.yn.urls=p,r.yn.$fmt=1,
void(n&&n.length>0?j(n):i.getCurTab(j));if(w)return void(s.runNextCmd(0)||o.showHUD("The copied lines are not URLs"))}
t.Ie.test(f)?f=f.slice(1,-1):(null!=(b=r.yn.testUrl)?b:!r.yn.keyword)&&(f=l.Ue(f,b)),
(y=f.indexOf("://")+3)>3&&e.Rt.test(f)&&(h=void 0,_=(f=/^ttps?:/i.test(f)?"h"+f:f).indexOf("/",y)+1||f.length,
I=f.slice(y,_),
f=(k=I.startsWith("0.0.0.0")?7:I.includes(":::")&&(h=/^(\[?::\]?):\d{2,5}$/.exec(I))?h[1].length:0)?f.slice(0,y)+(k>6?"127.0.0.1":"[::1]")+f.slice(y+k):f),
u.openUrlWithActions(f,2,false,n)},u.goToNextUrl=function(n,u,r){var e=false
;return n=n.replace(/\$(?:\{(\d+)[,\/#@](\d*):(\d*)(:-?\d*)?\}|\$)/g,function(n,i,t,l,o){var f,c,a,s,d
;return"$$"===n?"$":(e=true,c=i&&parseInt(i)||1,a=t&&parseInt(t)||0,s=l&&parseInt(l)||0,
(d=o&&parseInt(o.slice(1))||1)<0&&(a=(f=[s,a])[0],s=f[1]),u*=d,c="absolute"!==r?c+u:u>0?a+u-1:u<0?s+u:c,
""+Math.max(a||1,Math.min(c,s?s-1:c)))}),[e,n]},L=function(n){var e,t
;if(r.yn.urls)r.yn.urls instanceof Array&&(n&&n.length>0?j(n):i.getCurTab(j));else{
if((null!=r.yn.url_mask||null!=r.yn.url_mark)&&!n)return i.fe()||void i.getCurTab(u.openUrl)
;(e=r.yn.url)?u.openUrlWithActions(e+"",3,true,n):r.yn.copied?(t=r.f(d.eu(r.yn)))instanceof Promise?t.then(z.bind(null,n)):z(n,t):u.openUrlWithActions(r.yn.url_f||"",9,false,n)
}},u.openUrl=L,M=function(n,i){var f,c,a,d,v,p,w,g,b,y,h,_,I;if(e.gt(n),c=null!=i&&o.isNotVomnibarPage(i,true),
r.I=c?i:o.findCPort(i)||r.I,a=n.u,d=n.n&&s.parseFallbackOptions(n.n)||{},p=((v=n.o||e.vt()).k||"")+"",
w=null!==(f=v.t)&&void 0!==f?f:!p,g=v.s,y=(b=n.m||0)<64?-17&b:b,h=null!=n.f?n.f:45===y,d.group=!c||v.g,
d.incognito=null!=m(v.i)?v.i:45===y||null,
d.replace=v.m,d.position=v.p,d.reuse=null!=v.r?v.r:b?"window"===n.t?2:(16&b?-2:-1)+("last-window"===n.t?-4:0):n.r,
d.window=v.w,a)":"===a[0]&&!c&&/^:[bhtwWBHdso]\s/.test(a)&&(a=n.u=a.slice(2).trim()),_=a,a=w?l.Me(a,h):a,
a=r.p(a,c?h?1048576:524288:w?16384:0,g),I=void 0,h?a=(I=a!==_)?t.$e(a,null,-1):a:(I=!!w||!c&&!p)?(a=w?l.Ue(a,w):a,
a=t.$e(a,p,c?-1:3)):(a=t.ge(a.trim().split(e.qt),p,p&&"~"!==p?-1:0),
I=t._e,a=t._e?t.$e(a,null,a.startsWith("vimium:")?3:0):a),
I&&(2!==t.xe&&1!==t.xe||null==n.h?3===t.xe&&a.startsWith("vimium:")&&!_.startsWith("vimium://")&&(a=t.$e(a,null,t._e||a.startsWith("vimium://run")?3:0)):a=(n.h?"https":"http")+a.slice("s"===a[4]?5:4)),
d.opener=c?false!==v.o:r.un.actions.includes("opener"),d.url_f=a;else{if(false===n.c)return;d.copied=null==n.c||n.c,
d.keyword=p,d.testUrl=v.t,d.sed=g}r.B=1,s.replaceCmdOptions(d),u.openUrl()},u.openUrlReq=M,N=function(n,l){
var o,f,c,a=function(e){var t,l,c,a,v=null!==(t=m(f.i))&&void 0!==t?t:2===r.F&&null;return e=e||[],
null!==v&&(e=e.filter(function(n){return n.incognito===v})),f.g&&o.length>0&&(l=i.getGroupId(o[0]),
e=e.filter(function(n){return i.getGroupId(n)===l})),e.length>0?(c=e.filter(function(n){return n.windowId===r.L}),
void d(c.length>0?c:e)):(a=2===r.F&&i.ne(n.u),
n.f&&s.runNextCmdBy(0,n.f)||(o.length<=0||f.w||2===r.F&&!o[0].incognito?i.makeWindow({url:n.u,type:w(f.w),
incognito:!a&&2===r.F},"",function(n){p(n&&n.tabs&&n.tabs.length>0?n.tabs[0]:null)}):a?i.openMultiTabs({url:n.u,
active:true},1,null,[null],f.g,null,p):i.openMultiTabs({url:n.u,index:u.newTabIndex(o[0],f.p,false,true),
openerTabId:f.o&&o[0]?o[0].id:void 0,windowId:o[0].windowId,active:true},1,null,[null],f.g,o[0],p)),i.fe())
},d=function(u){var e,t,l,o=n.u;n.p&&u.sort(function(n,u){return n.url.length-u.url.length}),
(e=i.selectFrom(u)).url.length>u[0].url.length&&(e=u[0]),
!o.startsWith(r.e.Ln)||r.K.get(e.id)||n.s?r.o&&e.url.startsWith(r.e.Qn)?(U(n.f||{},e),
i.selectWndIfNeed(e)):(t=r.Mn?e.url.replace(/^edge:/,"chrome:"):e.url,l=r.Mn?o.replace(/^edge:/,"chrome:"):o,
i.tabsUpdate(e.id,{url:t.startsWith(l)?void 0:o,active:true},p),i.selectWndIfNeed(e)):(i.tabsCreate({url:o},p),
i.se.remove(e.id))},p=function(u){if(!u)return n.f&&s.runNextCmdBy(0,n.f),i.fe()
;s.runNextOnTabLoaded(n.f||{},u,n.s&&function(){v.yr.Hr(n,u)})},g=t.ve(n.u.split("#",1)[0])
;u.du(g,l)||((null==(f=n.q||(n.q={})).g||g.startsWith(r.e.Ln))&&(f.g=false),c=null!=f.r&&u.parseReuse(f.r)||1,
f.m?T(n.u,3!==c?c:1,f.m,null,n):i.ue(i.getCurTab).then(function(u){return __awaiter(void 0,void 0,void 0,function*(){
var t,l,s,d,v,p,m,b,y;for(b of(o=u,t=[],l=-3===c&&r.L>=0?r.L:void 0,s=g,d=w(f.w)||"normal",
e.Rt.test(g)&&(v=g.indexOf("/")+2,
p=g.indexOf("/",v+1),(m=g.slice(v,p>0?p:void 0))&&m.includes("@")&&(s=g=g.slice(0,v)+m.split("@")[1]+g.slice(p))),
!g.startsWith("file:")&&!g.startsWith("ftp")||g.includes(".",g.lastIndexOf("/")+1)||t.push(s+(n.p?"/*":"/")),
t.push(n.p?s+"*":s),t))if((y=yield i.ue(i.se.query,{url:b,windowType:d,windowId:l}))&&y.length>0)return a(y);a([])})}))
},u.su=N});