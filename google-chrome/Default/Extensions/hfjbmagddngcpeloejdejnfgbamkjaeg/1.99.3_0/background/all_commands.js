"use strict"
;__filename="background/all_commands.js",define(["require","exports","./utils","./store","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tab_commands","./tools"],function(n,e,o,t,r,i,u,l,a,f,c,s,d,v,m,p,b,h,y,k){
Object.defineProperty(e,"__esModule",{value:true
}),t.k=[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,2,0,1,0,0,0,0,2,0,1,0,2,2,0,0,1,0,0,1,0,0,1,0,2,1,1,0,0,0,0,0],
t.N=[function(){var n,e=t.yn.for||t.yn.wait,o=t.yn.isError?0:1
;"ready"!==e?((e=e?Math.abs("count"===e||"number"===e?t.B:0|e):d.hasFallbackOptions(t.yn)?Math.abs(t.B):0)&&(e=Math.max(34,e),
(n=null!=(n=t.yn.block)?!!n:e>17&&e<=1e3)&&t.I&&t.I.postMessage({N:16,t:e+50})),
d.runNextCmdBy(t.B>0?o:1-o,t.yn,e)):d.runNextOnTabLoaded({},null,function(){d.runNextCmdBy(o,t.yn,1)})},function(){
var n=t.yn.rel,e=n?(n+"").toLowerCase():"next",o=null!=t.yn.isNext?!!t.yn.isNext:!e.includes("prev")&&!e.includes("before"),r=m.eu(t.yn)
;m.doesNeedToSed(8192,r)?Promise.resolve(a.rr(t.K.get(t.I.s.ur).ar)).then(function(n){
var i=o?t.B:-t.B,u=n&&t.p(n,8192,r),l=u?p.goToNextUrl(u,i,!t.yn.absolute||"absolute"):[false,n],a=l[1];l[0]&&a?(t.B=i,
null==t.yn.reuse&&d.overrideOption("reuse",0),d.overrideCmdOptions({url_f:a,goNext:false}),
p.openUrl()):b.framesGoNext(o,e)}):b.framesGoNext(o,e)},function(){
var n,e,o,r=t.yn.key,i=r&&"string"==typeof r?s.Dt(r).trim():""
;i=i.length>1||1===i.length&&!/[0-9a-z]/i.test(i)&&i===i.toUpperCase()&&i===i.toLowerCase()?i:"",
o=null!==(e=null!==(n=t.yn.hideHUD)&&void 0!==n?n:t.yn.hideHud)&&void 0!==e?e:!i&&t.pn.hideHud,
Promise.resolve(c.jr("globalInsertMode",[i&&": "+(1===i.length?'" '.concat(i,' "'):"<".concat(i,">"))])).then(function(n){
d.sendFgCmd(7,!o,Object.assign({h:o?null:n,k:i||null,i:!!t.yn.insert,p:!!t.yn.passExitKey,r:+!!t.yn.reset,
u:!!t.yn.unhover},d.parseFallbackOptions(t.yn)||{})),o&&"force"!==o&&"always"!==o&&a.showHUD(n,1)})
},b.nextFrame,b.parentFrame,b.performFind,function(n){
var e=(t.yn.key||"")+"",o="darkMode"===e?"d":"reduceMotion"===e?"m":l.Ge[e],r=o?t.cn[o]:0,i=c.jr("quoteA",[e]),u=t.yn.value,f="boolean"==typeof u,s=null,v=""
;o?"boolean"==typeof r?f||(u=null):f||void 0===u?s=f?"notBool":"needVal":typeof u!=typeof r&&(v=JSON.stringify(r),
s="unlikeVal",v=v.length>10?v.slice(0,9)+"\u2026":v):s=e in l.Je?"notFgOpt":"unknownA",
Promise.resolve(i).then(function(e){var r,i,f,m,p,b;if(s)a.showHUD(c.jr(s,[e,v]));else{if(u=l.Ye(o,u),"c"===o||"n"===o){
for(i of(r="",u.replace(/\s/g,"")))r.includes(i)||(r+=i);u=r}for(p of(m=(f=t.K.get(t.I.s.ur)).cr,
f.so))d.portSendFgCmd(p,8,b=p===m,{k:o,n:b?e:"",v:u},1);n(1)}})},function(){
0!==t.I.s.tr||64&t.I.s.ir?(new Promise(function(e,o){n([t.e.HelpDialogJS],e,o)}).then(n=>n),
d.sendFgCmd(17,true,t.yn)):b.initHelp({a:t.yn},t.I)},function(){
var n,e,r,i,u,l,f,c,s,v,m,p,b,h,y,k,w,M,g,x,_,O,I,T=d.copyCmdOptions(o.vt(),t.yn);if(!T.esc){if(n=T.key,
e=(T.type||(n?"keydown":""))+"",
i=T.delay,u=T.xy,l=T.direct,f=T.directOptions,r=(r=T.class)&&"$"===r[0]?r.slice(1):(r&&r[0].toUpperCase()+r.slice(1)||"Keyboard").replace(/event$/i,"")+"Event",
u=/^(Mouse|Pointer|Wheel)/.test(r)&&null==u?[.5,.5]:u,(u=T.xy=o.c(u))&&!u.n&&(u.n=t.B,t.B=1),
T.click)e="click";else if(t.B<0)for(c of"down up;enter leave;start end;over out".split(";"))s=c.split(" "),
e=e.replace(s[0],s[1]);if(!e)return a.showHUD('Require a "type" parameter'),void d.runNextCmd(0)
;for(b of(m=(v=T.init)&&"object"==typeof v?v:T,p={},i=i&&+i>=0?Math.max(0|+i,1):null,
["bubbles","cancelable","composed"]))p[b]=false!==m[b]||false!==T[b];for(y of(h={e:1,class:1,type:1,key:1,return:1,
delay:1,esc:1,click:1,init:1,xy:1,match:1,direct:1,directOptions:1,clickable:1,exclude:1,evenIf:1,scroll:1,typeFilter:1,
textFilter:1,clickableOnHost:1,excludeOnHost:1
},Object.entries(m)))w=y[1],(k=y[0])&&"$"!==k[0]&&!h.hasOwnProperty(k)&&(p[k]=w,m===T&&delete T[k]);M=null,
n&&("object"==typeof n||"string"==typeof n&&(M=/[^\w$]/.exec(n.slice(1))))&&(g="object"==typeof n?n:n.split(M[0])).length>=2&&(!g[1]||+g[1]>=0)&&(M&&!g[0]&&(g[0]=n[0],
g[1]||g.splice(1,1)),O=!(_=/^[a-z]$/i.test(x=g[0]))&&x>="0"&&x<="9"&&1===x.length,
I=g[1]&&0|+g[1]||(_?x.toLowerCase().charCodeAt(0)-97+65:O?x.charCodeAt(0)-48+48:0),p.key="Space"===x?(I=I||32,
" "):"Comma"===x?",":"Slash"===x?"/":"Minus"===x?"-":"$"===x&&x.length>1?x.slice(1):x,
(I="keypress"!==e?I:0)&&null==m.keyCode&&(p.keyCode=+g[1]),I&&null==m.which&&(p.which=+g[1]),
(g.length>=3&&g[2]||null==m.code)&&(p.code=g[2]||(_?"Key"+x.toUpperCase():O?"Digit"+x:x))),T.type=e,T.class=r,T.init=p,
T.delay=i,T.direct=l&&"string"==typeof l?l:"element,hover,scroll,focus",f&&!f.search&&(f.search="doc"),
T.directOptions=f||{search:"doc"},T.e="Can't create \"".concat(r,"#").concat(e,'"')}d.portSendFgCmd(t.I,16,false,T,t.B)
},function(){b.showVomnibar()},b.enterVisualMode,function(n){var e=t.yn.folder||t.yn.path,o=!!t.yn.all
;if(!e||"string"!=typeof e)return a.showHUD('Need "folder" to refer a bookmark folder.'),void n(0)
;t.findBookmark(1,e).then(function(e){
if(!e||null!=e.u)return n(0),void a.showHUD(false===e?'Need valid "folder".':null===e?"The bookmark folder is not found.":"The bookmark is not a folder.")
;(!o&&t.B*t.B<2?r.getCurTab:r.ie)(function i(u){var l,f,c,s,v,m,p;if(!u||!u.length)return n(0),r.fe()
;if(f=u[l=r.selectIndexFrom(u)],c=o?[0,u.length]:h.getTabRange(l,u.length),s=t.yn.filter,v=u,u=u.slice(c[0],c[1]),
!s||(u=h.vu(f,u,s)).length)if((m=u.length)>20&&d.uu())d.nu("addBookmark",m).then(i.bind(0,v));else{
for(p of u)r.de.bookmarks.create({parentId:e.yo,title:p.title,url:r.getTabUrl(p)},r.fe)
;a.showHUD("Added ".concat(m," bookmark").concat(m>1?"s":"",".")),n(1)}else n(0)})})},function(n){
false!==t.yn.copied?(d.overrideCmdOptions({copied:true}),p.openUrl()):n(0)},b.captureTab,function(n){
n(k.Mr.Nr(t.yn,t.I))},function(n){var e=t.I?t.I.s.sr:2===t.F;k.wr.ro(e),a.showHUDEx(t.I,"fhCleared",0,[e?["incog"]:""]),
n(1)},function(n){var e=t.yn.local?t.yn.all?k.yr.Zr("#"):a.nr({H:20,u:"",a:2},true):k.yr.Zr()
;e&&e instanceof Promise?e.then(function(e){e&&n(1)}):n(1)},y.copyWindowInfo,function n(e,o,i){var u,l,a=t.yn.$pure
;null==a&&d.overrideOption("$pure",a=!Object.keys(t.yn).some(function(n){
return"opener"!==n&&"position"!==n&&"evenIncognito"!==n&&"$"!==n[0]
})),a?!(u=e&&e.length>0?e[0]:null)&&t.U>=0&&!r.fe()&&"dedup"!==i?r.ue(r.tabsGet,t.U).then(function(e){
n(e&&[e],0,"dedup")}):(l=true===t.yn.opener,r.openMultiTabs(u?{active:true,windowId:u.windowId,
openerTabId:l?u.id:void 0,index:p.newTabIndex(u,t.yn.position,l,true)}:{active:true
},t.B,t.yn.evenIncognito,[null],true,u,function(n){n&&r.selectWndIfNeed(n),d.getRunNextCmdBy(3)(n)})):p.openUrl(e)
},function(n,e){if(t.bn<54)return a.showHUD(c.jr("noDiscardIfOld",[54])),void e(0);h.pu(true,1,function n(e,o,i,u){
var l,f,s,v,m,p,b,y,k,w=o[0],M=o[1],g=o[2];if(u&&(w=(l=h.getTabRange(M,e.length,0,1))[0],g=l[1]),f=t.yn.filter,s=e,
e=e.slice(w,g),
v=r.selectFrom(e),m=(e=f?h.vu(v,e,f):e).includes(v)?e.length-1:e.length)if(m>20&&d.uu())d.nu("discardTab",m).then(n.bind(null,s,[w,M,g],i));else{
for(k of(b=[],
(y=!(p=e[h.getNearArrIndex(e,v.index+(t.B>0?1:-1),t.B>0)]).discarded)&&(m<2||false!==p.autoDiscardable)&&b.push(r.ue(r.se.discard,p.id)),
e))k===v||k===p||k.discarded||(y=true,false!==k.autoDiscardable&&b.push(r.ue(r.se.discard,k.id)))
;b.length?Promise.all(b).then(function(n){var e=n.filter(function(n){return void 0!==n}),o=e.length>0
;a.showHUD(o?"Discarded ".concat(e.length," tab(s)."):c.jr("discardFail")),i(o)
}):(a.showHUD(y?c.jr("discardFail"):"Discarded."),i(0))}else i(0)},n,e)},function(n){var e,o=t.I?t.I.s.ur:t.U
;if(o<0)return a.complainLimits(c.jr("dupTab")),void n(0);e=false===t.yn.active,r.ue(r.se.duplicate,o).then(function(i){
if(i){if(e&&r.selectTab(o,r.fe),e?n(1):d.runNextOnTabLoaded(t.yn,i),!(t.B<2)){var u=function(n){r.openMultiTabs({
url:r.getTabUrl(n),active:false,windowId:n.windowId,pinned:n.pinned,index:n.index+2,openerTabId:n.id
},t.B-1,true,[null],true,n,null)};t.bn>=52||0===t.F||t.e.Rn?r.tabsGet(o,u):r.getCurWnd(true,function(e){
var i,l=e&&e.tabs.find(function(n){return n.id===o});if(!l||!e.incognito||l.incognito)return l?u(l):r.fe()
;for(i=t.B;0<--i;)r.se.duplicate(o);n(1)})}}else n(0)}),e&&r.selectTab(o,r.fe)},function(n){n.length&&b.framesGoBack({
s:t.B,o:t.yn},null,n[0])},function(n){var e=!!t.yn.absolute,o=t.yn.filter,i=function(i){
var u,l,a,f,c,s,d=t.B,v=r.selectFrom(i),m=i.length;if(!o||(i=h.vu(v,i,o)).length){if(u=i.length,
l=h.getNearArrIndex(i,v.index,d<0),
a=(a=e?d>0?Math.min(u,d)-1:Math.max(0,u+d):Math.abs(d)>2*m?d>0?u-1:0:l+d)>=0?a%u:u+(a%u||-u),
i[0].pinned&&t.yn.noPinned&&!v.pinned&&(d<0||e)){for(f=1;f<u&&i[f].pinned;)f++;if((u-=f)<1)return void n(0)
;e||Math.abs(d)>2*m?a=e?Math.max(f,a):a||f:(a=(a=l-f+d)>=0?a%u:u+(a%u||-u),a+=f)}
(s=!(c=i[a]).active)&&r.selectTab(c.id),n(s)}else n(0)},u=function(e){h.pu(true,1,i,e||[],n,null)}
;e?1!==t.B||o?u():r.ue(r.se.query,{windowId:t.L,index:0}).then(function(n){n&&n[0]&&r.oe(n[0])?i(n):u()
}):1===Math.abs(t.B)?r.ue(r.getCurTab).then(u):u()},function(){var n,e,o
;"frame"!==t.yn.type&&t.I&&t.I.s.tr&&(t.I=(null===(n=t.K.get(t.I.s.ur))||void 0===n?void 0:n.ar)||t.I),e={H:4,u:"",
p:t.B,t:t.yn.trailingSlash,r:t.yn.trailing_slash,s:m.eu(t.yn),e:false!==t.yn.reloadOnRoot},o=a.nr(e),
Promise.resolve(o||"url").then(function(){"object"==typeof e.e&&d.getRunNextCmdBy(2)(null!=e.e.p||void 0)})
},y.joinTabs,b.mainFrame,function(n,e){var o,i,u=r.selectIndexFrom(n)
;n.length>0&&(t.B<0?0===(t.B<-1?u:n[u].index):t.B>1&&u===n.length-1)?e(0):h.pu(true,1,function(o){
for(var u,l,a=r.selectIndexFrom(o),f=o[a],c=f.pinned,s=Math.max(0,Math.min(o.length-1,a+t.B));c!==o[s].pinned;)s-=t.B>0?1:-1
;if(s!==a&&i&&(u=r.getGroupId(f),
(l=r.getGroupId(o[s]))!==u&&(1===Math.abs(t.B)||u!==r.getGroupId(o[t.B>0?s<o.length-1?s+1:s:s&&s-1])))){
for(null!==u&&(a>0&&r.getGroupId(o[a-1])===u||a+1<o.length&&r.getGroupId(o[a+1])===u)&&(s=a,
l=u);0<=(s+=t.B>0?1:-1)&&s<o.length&&r.getGroupId(o[s])===l;);s-=t.B>0?1:-1}
s===a&&f.active?e(0):r.se.move((f.active?f:n[0]).id,{index:o[s].index},r.re(e))
},n,e,(i="ignore"!==(o=t.yn.group)&&false!==o)?function(e){return r.getGroupId(n[0])===r.getGroupId(e)}:null)
},y.moveTabToNewWindow,y.moveTabToNextWindow,function(){p.openUrl()},function(n,e){h.pu(!t.yn.single,0,y.reloadTab,n,e)
},function(n,e){h.pu(false,1,function(n,e,o){r.se.remove(n[e[0]].id,r.re(o))},n,e)},y.removeTab,function(n){
var e=t.yn.other?0:t.B;h.bu(e,function o(i){var u,l,a,f,c,s=i;if(!s||0===s.length)return r.fe();u=r.selectIndexFrom(s),
l=t.yn.noPinned,
a=t.yn.filter,f=s[u],e>0?(++u,s=s.slice(u,u+e)):(l=null!=l?l&&s[0].pinned:u>0&&s[0].pinned&&!s[u-1].pinned,
e<0?s=s.slice(Math.max(u+e,0),u):s.splice(u,1)),l&&(s=s.filter(function(n){return!n.pinned})),a&&(s=h.vu(f,s,a)),
(c=t.yn.mayConfirm)&&s.length>("number"==typeof c?Math.max(c,5):20)&&d.uu()?d.nu("closeSomeOtherTabs",s.length).then(o.bind(null,i)):s.length>0?r.se.remove(s.map(function(n){
return n.id}),r.re(n)):n(0)})},function(n,e){if(n.length<=0)e(0);else{var o=n[0],i=false!==t.yn.group
;t.bn>=52||0===t.F||t.e.Rn||!r.ne(r.getTabUrl(o))?y.Gr(o,void 0,void 0,i):r.ae.get(o.windowId,function(n){
n.incognito&&!o.incognito&&(o.openerTabId=o.windowId=void 0),y.Gr(o,void 0,void 0,i)})}},function(n){
var e,o,i,u,l,f,s,v,m,p=r.ce();if(!p)return n(0),a.complainNoSession();if(e=!!t.yn.one,o=+p.MAX_SESSION_RESULTS||25,
(i=Math.abs(t.B))>o){if(e)return n(0),void a.showHUD(c.jr("indexOOR"));i=o}
if(!e&&i<2&&(t.I?t.I.s.sr:2===t.F)&&!t.yn.incognito)return n(0),a.showHUD(c.jr("notRestoreIfIncog"))
;u=false===t.yn.active,l=true===t.yn.currentWindow,f=t.I?t.I.s.ur:t.U,s=t.L,v=d.getRunNextCmdBy(0),m=function(e){
var o,i,l,a;e&&(e.window||e.tab&&e.tab.windowId!==s&&0===e.tab.index)&&(o=e.window?r.selectFrom(e.window.tabs):e.tab,
(l=/^(file|ftps?|https?)/.test(i=o.url)||i.startsWith(location.origin+"/"))||!i.startsWith(location.protocol)||i.startsWith(location.origin+"/")||(l=!!(a=new URL(i).host)&&true===t.Z.get(a)),
l&&(e.window?Promise.resolve(e.window):r.ue(r.se.query,{windowId:o.windowId,index:1}).then(function(n){
return n&&n.length?null:r.ue(r.ae.get,o.windowId)})).then(function(n){
n&&"popup"!==n.type&&Promise.all([r.ue(r.se.create,{url:"about:blank",windowId:n.id
}),r.ue(r.se.remove,o.id)]).then(function(n){var e=n[0];p.restore(),e&&r.se.remove(e.id)})})),
void 0===e?n(0):u?r.selectTab(f,v):n(1)},__awaiter(void 0,void 0,void 0,function*(){
var t,v=Math.max(1.2*i|0,2),b=false,h=l?function(n){return!!n.tab&&n.tab.windowId>0&&n.tab.windowId===s}:null
;if(l&&i<=Math.min(o,25)&&((t=yield r.ee(p.getRecentlyClosed,{maxResults:i})).some(function(n){
return!(!n.tab||n.tab.windowId>0)})&&(d.overrideOption("currentWindow",false),l=false),b=t.length>i,t=h?t.filter(h):t,
!b&&t.length<i&&v<=Math.min(o,25)&&(t=yield r.ee(p.getRecentlyClosed,{maxResults:v}),t=h?t.filter(h):t)),
(!t||!b&&t.length<i)&&(t=yield r.ee(p.getRecentlyClosed,i<=25&&!l?{maxResults:i}:{}),t=h?t.filter(h):t),
t.length<(e?i:1))return n(0),a.showHUD(c.jr("indexOOR"))
;1===i?r.ue(p.restore,l?t[0].tab.sessionId:null).then(m):Promise.all(t.slice(e?i-1:0,i).map(function(n){
return r.ue(p.restore,(n.tab||n.window).sessionId)})).then(function(n){m(e?n[0]:null)}),u&&r.selectTab(f,r.fe)})
},function(){null==t.yn.$seq?v.runKeyWithCond():v.runKeyInSeq(t.yn.$seq,t.B,t.yn.$f,null)},function(n){
var e,o,l,f=(t.yn.keyword||"")+"",s=u.He({u:r.getTabUrl(n[0])});s&&f?(e=m.eu(t.yn),s.u=t.p(s.u,0,e),
o=i.ge(s.u.split(" "),f,2),d.overrideCmdOptions({url_f:o,reuse:null!=(l=t.yn.reuse)?l:0,opener:true,keyword:""}),
p.openUrl(n)):d.runNextCmd(0)||a.showHUD(c.jr(f?"noQueryFound":"noKw"))},function(n){var e,o,i=t.yn.id,u=t.yn.data
;if(!(i&&"string"==typeof i&&void 0!==u))return a.showHUD('Require a string "id" and message "data"'),void n(0)
;e=Date.now(),o=function(e){e=e&&e.message||e+"",console.log("Can not send message to the extension %o:",i,e),
a.showHUD("Error: "+e),n(0)};try{r.de.runtime.sendMessage(i,t.yn.raw?u:{handler:"message",from:"Vimium C",count:t.B,
keyCode:t.x,data:u},function(t){var i=r.fe();return i?o(i):"string"==typeof t&&Math.abs(Date.now()-e)<1e3&&a.showHUD(t),
i||n(false!==t),i})}catch(n){o(n)}},function(n){var e,o=t.yn.text,r=!!t.yn.silent,i=t.yn.isError
;o||r||null!=i||!t.yn.$f||(o=(e=t.yn.$f)&&e.t?c.kr("".concat(e.t)):"")?(r||a.showHUD(o?o instanceof Promise?o:o+"":c.jr("needText")),
n(null!=i?!!i:!!o)):n(false)},function(n,e){k.Mr.Or(t.yn,t.B,n,e)},y.toggleMuteTab,function(n,e){
h.pu(true,0,y.togglePinTab,n,e)},y.toggleTabUrl,function(n,e){
var o,r=n[0].id,i=((t.yn.style||"")+"").trim(),u=!!t.yn.current;if(!i)return a.showHUD(c.jr("noStyleName")),void e(0)
;for(o of t.A)if(o.s.ur===r)return o.postMessage({N:46,t:i,c:u}),void setTimeout(e,100,1);u||f.ii({t:i,o:1}),
setTimeout(e,100,1)},b.toggleZoom,function(n){
var e,o=!!t.yn.acrossWindows,i=!!t.yn.onlyActive,u=t.yn.filter,l={},f=function(e){var o,l,f,s,d
;if(e.length<2)return i&&a.showHUD("Only found one browser window"),n(0),r.fe();o=t.I?t.I.s.ur:t.U,
f=(l=e.findIndex(function(n){return n.id===o}))>=0?e[l]:null,l>=0&&e.splice(l,1),
!u||(e=h.vu(f,e,u)).length?(s=e.filter(function(n){return t.z.has(n.id)}).sort(k.pr.bo),
(d=(e=i&&0===s.length?e.sort(function(n,e){return e.id-n.id
}):s)[t.B>0?Math.min(t.B,e.length)-1:Math.max(0,e.length+t.B)])?i?r.ae.update(d.windowId,{focused:true
},r.re(n)):c(d.id):n(0)):n(0)},c=function(e){r.selectTab(e,function(e){return e&&r.selectWndIfNeed(e),r.re(n)()})}
;1===t.B&&!i&&-1!==t.U&&(e=h.gu())>=0?Promise.all([r.ue(r.tabsGet,e),h.getNecessaryCurTabInfo(u)]).then(function(n){
var e=n[0],i=n[1];e&&(o||e.windowId===t.L)&&r.oe(e)&&(!u||h.vu(i,[e],u).length>0)?c(e.id):o?r.se.query(l,f):r.ie(f)
}):o||i?r.se.query(i?{active:true}:l,f):r.ie(f)},function(n){var e=t.yn.newWindow
;true!==e&&true?r.ue(r.de.permissions.contains,{permissions:["downloads.shelf","downloads"]}).then(function(o){var i,u
;if(o){i=r.de.downloads.setShelfEnabled,u=void 0;try{i(false),setTimeout(function(){i(true),n(1)},256)}catch(n){
u=(n&&n.message||n)+""}a.showHUD(u?"Can not close the shelf: "+u:"The download bar has been closed"),u&&n(0)
}else false===e&&t.I?(a.showHUD("No permissions to close download bar"),n(0)):t.N[27](n)}):t.N[27](n)},function(){
var n,e,o,r=t.K.get(t.I?t.I.s.ur:t.U),i=!!t.yn.unhover,u=t.yn.suppress;for(n of r?r.so:[])e={r:1,u:i},
n===r.cr&&(o=d.parseFallbackOptions(t.yn))&&Object.assign(e,o),d.portSendFgCmd(n,7,false,e,1)
;(d.hasFallbackOptions(t.yn)?true===u:false!==u)&&r&&r.cr.postMessage({N:16,t:150})},function(n){
var e,o,r,i,u,l,f,c=t.yn.$cache;if(null!=c&&((o=t.T.Cn.find(function(n){return n.yo===c
}))?e=Promise.resolve(o):d.overrideOption("$cache",null)),r=!!e,i=t.B,u=false,!e){
if(!(l=t.yn.path||t.yn.title)||"string"!=typeof l)return a.showHUD("Invalid bookmark "+(t.yn.path?"path":"title")),
void n(0)
;if(!(f=d.fillOptionWithMask(l,t.yn.mask,"name",["path","title","mask","name","value"],i)).ok)return void a.showHUD((f.result?"Too many potential names":"No name")+" to find bookmarks")
;u=f.useCount,e=t.findBookmark(0,f.result)}e.then(function(e){e&&null!=e.u?(r||u||d.overrideOption("$cache",e.yo),
d.overrideCmdOptions({url:e.ko||e.u
},true),t.B=u?1:i,p.openUrl()):(n(0),a.showHUD(false===e?'Need valid "title" or "title".':null===e?"The bookmark node is not found.":"The bookmark is a folder."))
})}]});