"use strict"
;__filename="background/tab_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./i18n","./run_commands","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tools"],function(n,e,r,u,t,i,o,f,l,c,a,d,s,v,w){
var m,p,b,I,g,_,x,T,h;Object.defineProperty(e,"__esModule",{value:true
}),e.Gr=e.toggleTabUrl=e.togglePinTab=e.toggleMuteTab=e.removeTab=e.reloadTab=e.moveTabToNextWindow=e.moveTabToNewWindow=e.joinTabs=e.copyWindowInfo=void 0,
m=Math.abs,p=function(){r.I&&s.focusFrame(r.I,false,0)},b=function(n){
return r.yn.end?null:null!=r.yn.position?d.newTabIndex(n,r.yn.position,false,false):null!=r.yn.rightInOld?n.index+(r.yn.rightInOld?0:1):n.index+(false!==r.yn.right?1:0)
},e.copyWindowInfo=function(n){
var e,i=r.yn.filter,o=r.yn.keyword,c=r.yn.decoded,d=null!=c?c:r.yn.decode,s=r.yn.format,w=r.yn.type,p="tab"===w&&(m(r.B)>1||!!i),b=a.eu(r.yn),I={
d:false!==d,s:b,k:o};if("frame"===w&&r.I&&!s)return e=void 0,128&r.I.s.ir?(r.I.postMessage({N:3,H:17,o:I}),e=1):e=f.nr({
H:17,u:"",o:I}),void(1!==e&&(e&&e instanceof Promise?e.then(function(){n(1)}):n(1)));t.se.query("browser"===w?{
windowType:"normal"}:{active:"window"!==w&&!p||void 0,currentWindow:true},function(e){var c,a,m,g,_,x,T,h,y,k,P
;if((!w||"browser"!==w&&"window"!==w&&"tab"!==w&&"string"==typeof w)&&!s)return a="title"===w?e[0].title:w&&"frame"!==w&&"url"!==w?(null===(c=u.mt(t.getTabUrl(e[0])))||void 0===c?void 0:c[w])||"":t.getTabUrl(e[0]),
r.W[17]("title"===w?{s:a,o:I}:{u:a,o:I},r.I),void n(1);m=r.I?r.I.s.sr:2===r.F,g=""+(s||"${title}: ${url}"),
x="json"===(_=r.yn.join)&&!s,p?(T=e.length<2?0:t.selectIndexFrom(e),h=v.getTabRange(T,e.length),
e=e.slice(h[0],h[1])):e=e.filter(function(n){return n.incognito===m}),i&&(y=r.I?r.I.s.ur:r.U,k=e.find(function(n){
return n.id===y}),e=v.vu(k,e,i)),e.length?("browser"===w&&e.sort(function(n,e){
return n.windowId-e.windowId||n.index-e.index}),P=e.map(function(n){return x?{title:n.title,
url:d?u.st(t.getTabUrl(n)):t.getTabUrl(n)}:g.replace(/\$\{([^}]+)}/g,function(e,r){
return r.split("||").reduce(function(e,r){var i
;return e||(d&&"url"===r?u.st(t.getTabUrl(n)):"host"===r?(i=u.mt(t.getTabUrl(n)))&&i.host||"":"__proto__"!==r&&((i=n[r])&&"object"==typeof i?JSON.stringify(i):i||""))
},"")})}),Promise.resolve(r.h(P,_,b,o)).then(function(r){
n(1),f.showHUD("tab"===w&&e.length<2?r:l.jr("copiedWndInfo"),15)})):n(0)})},e.joinTabs=function(n){
var e,u=null!=r.yn.order?r.yn.order:r.yn.sort,i=r.yn.windows,o="current"===i,f="all"===i;e=function(e){var l,c,a,d,s
;l=2===r.F,e=o?e:e.filter(function(n){return n.incognito===l}),c=o?e:e.filter(function(n){return n.id===r.L}),
o||c.length?(a=function(i){var f,l,c,a,d,s,w,p,b,I,g=[],_=function(n){g.push(n)};if(e.sort(function(n,e){
return n.id-e.id}).forEach(function(n){n.tabs.forEach(_)}),g.length)if(f=r.yn.filter,l=i?i.id:r.L,c=g.find(function(n){
return n.id===r.U})||(i?t.selectFrom(i.tabs):g[0]),o&&m(r.B)>1&&g.length>1&&(a=g.findIndex(function(n){
return n.id===c.id}),d=v.getTabRange(a,g.length),g=g.slice(d[0],d[1])),f&&(g=v.vu(c,g,f,s={}),f=s.known?f:null),
g.length){for(I of(g=u?v.hu(g,u):g,p="before"===(w=r.yn.position)||(w+"").startsWith("prev"),
f&&i?w&&"string"==typeof w&&"keep"!==w?"begin"===w||"start"===w?b=i.tabs.filter(function(n){return n.pinned
}).length:"end"!==w?(g.includes(c)&&g.splice(g.indexOf(c),1),p?g.push(c):g.unshift(c),
b=Math.max(0,i.tabs.findIndex(function(n){return n.id===r.U})-g.filter(function(n){
return n.windowId===l&&n.index<c.index}).length)):b=i.tabs.length:b=g.reduce(function(n,e){
return e.windowId===l?Math.min(e.index,n):n},g.length):b=i?i.tabs.length:0,g))t.se.move(I.id,I.windowId!==l?{windowId:l,
index:b++}:{index:b++});for(I of g)I.pinned&&I.windowId!==l&&t.tabsUpdate(I.id,{pinned:true});n(1)}else n(0);else n(0)},
(d=c.length?c[0]:null)&&"popup"===d.type&&d.tabs.length?(s=t.selectFrom(d.tabs).id,d.tabs=d.tabs.filter(function(n){
return n.id!==s}),t.makeWindow({tabId:s,incognito:d.incognito},d.state,function(n){n&&(r.L=n.id,
n.tabs[0]&&(r.U=n.tabs[0].id)),a(n)})):(e=o||!d||f||u&&!i?e:e.filter(function(n){return n.id!==d.id}),a(d))):n(0)},
o?t.getCurWnd(true,function(n){return n?e([n]):t.fe()}):(r.B=1,t.ae.getAll({populate:true,windowTypes:["normal","popup"]
},e))},I=function(n){var u="hasIncog",i=!!r.yn.all,o=function(e){
var u,a,d,s,w,I,g,_,x,T,h,y=e.tabs,k=y.length,P=false!==r.yn.focused,j=t.selectIndexFrom(y),M=y[j]
;if(!i&&k<=1&&(!k||0===M.index&&m(r.B)>1))n(0);else{if(i){
for(d of y)if(null!=t.getGroupId(d))return f.showHUD("Can not keep groups info during this command"),void n(0);a=[0,k]
}else a=1===k?[0,1]:v.getTabRange(j,k);if(s=r.yn.filter,w=y.slice(a[0],a[1]),(w=s?v.vu(M,w,s):w).length){if(!i){
if((I=w.length)>=k&&k>1)return n(0),void f.showHUD(l.jr("moveAllTabs"))
;if(I>30&&c.uu())return void c.nu("moveTabToNewWindow",I).then(o.bind(null,e))
;if(1===k&&0===M.index&&1===m(r.B))return void t.ue(t.se.query,{windowId:e.id,index:1}).then(function(r){
if(!r||!r.length)return n(0),void f.showHUD(l.jr("moveAllTabs"));e.tabs=[e.tabs[0],r[0]],o(e)})}g=M.incognito,
_=w.includes(M)?M:w[0],x=(null!==(u=b(M))&&void 0!==u?u:3e4)<=M.index,T={tabId:_.id,incognito:g,focused:P},
h="normal"===e.type?e.state:"",v.ku(w[x?w.length-1:0],x,y).then(function(u){P||u&&t.selectTab(u.id),
t.makeWindow(T,h,function(i){var o,f,l,c,a,d,s,v;if(i){for(v of(p(),P&&u&&t.selectTab(u.id),o=w.indexOf(_),
f=w.slice(0,o),l=w.slice(o+1),e.incognito&&r.bn<52&&(f=f.filter(c=function(n){return n.incognito===g}),l=l.filter(c)),
d=l.length,s=function(n){return n.id},(a=f.length)&&(t.se.move(f.map(s),{index:0,windowId:i.id},t.fe),
a>1&&t.se.move(w[o].id,{index:a})),d&&t.se.move(l.map(s),{index:a+1,windowId:i.id},t.fe),
w))v.pinned&&t.tabsUpdate(v.id,{pinned:true});n(1)}else n(0)})})}else n(0)}},a=function(i){
var o,a,s,v=t.selectFrom(i.tabs);if(i.incognito&&v.incognito)return n(0),f.showHUD(l.jr(u));if(o=v.id,a={incognito:true
},s=t.getTabUrl(v),v.incognito);else{if(i.incognito)return t.ne(s)?(n(0),f.showHUD(l.jr(u))):e.Gr(v)
;if(t.ne(s))return n(0),f.complainLimits(l.jr("openIncog"));a.url=s}i.tabs=null,t.ae.getAll(function(e){
var u,f,l=false!==r.yn.focused;(e=e.filter(function(n){return n.incognito&&"normal"===n.type})).length?t.se.query({
windowId:d.preferLastWnd(e).id,active:true},function(n){var e=n[0];t.tabsCreate({url:s,windowId:e.windowId,
active:false!==r.yn.active,index:d.newTabIndex(e,r.yn.position,false,false)},c.getRunNextCmdBy(3)),l&&t.selectWnd(e),
t.se.remove(o)}):(u="normal"===i.type?i.state:"",(f=null!=a.url)?r.e.Rn&&(l=true,u=""):a.tabId=o,a.focused=l,
t.makeWindow(a,u,function(e){f||e&&p(),f&&e?c.getRunNextCmdBy(0)(e.tabs&&e.tabs[0]||null):n(!!e)}),f&&t.se.remove(o))})
},s=!!r.yn.incognito
;s&&(r.I?r.I.s.sr:2===r.F)?(f.showHUD(l.jr(u)),n(0)):(i||1!==m(r.B)&&!s?t.ue(t.getCurWnd,true):t.ue(t.getCurWnd,false).then(function(n){
return n&&t.ue(t.se.query,{windowId:n.id,active:true}).then(function(e){return n.tabs=e,e&&e.length?n:void 0})
})).then(function(e){e?(s?a:o)(e):n(0)})},e.moveTabToNewWindow=I,g=function(n,u){var i=n[0];t.ae.getAll(function(n){
var o,f,l,c,a,d,s,w=false===r.yn.minimized||false===r.yn.min,I=false!==r.yn.focused,g=r.yn.filter,_=!!(r.yn.tabs||g),x=n.filter(function(n){
return n.incognito===i.incognito&&"normal"===n.type&&(!w||"minimized"!==n.state)});if(x.length>0){
if(o=x.map(function(n){return n.id}),f=o.indexOf(i.windowId),o.length>=2||f<0)return l=o.indexOf(r.J),
c=r.yn.last&&l>=0?l:f>=0?f+1:0,void t.se.query({
windowId:o[s=((s=(s=((s=(d=(null==(a=r.yn.nextWindow)?1:"boolean"==typeof a?a?1:-1:0|+a||1)*(_?1:r.B))>0?c+d-1:c+d)%o.length+o.length)%o.length)!==f?s:s+(d>0?1:-1))%o.length+o.length)%o.length],
active:true},function(n){var e=n[0],o=b(e),l=null==o||o>e.index,c=null,a=false,d=null,s=function(){var n
;false!==a?(I||a&&t.selectTab(a.id),t.se.move(i.id,{index:null!=o?o:-1,windowId:e.windowId},function(e){
if(t.fe())return u(0),t.selectWnd(i),t.fe();Promise.resolve(n).then(function(){return u(1)}),c=c||[i]
;for(var o=0;o<c.length;o++)c[o].id!==e.id&&t.se.move(c[o].id,{index:e.index+o,windowId:e.windowId},t.fe),
c[o].pinned&&t.se.update(c[o].id,{pinned:true});r.I&&r.I.s.ur===e.id&&p()}),I&&t.selectWnd(e),
n=false!==r.yn.active&&new Promise(function(n){t.selectTab(i.id,n)
}),I&&a&&t.selectTab(a.id)):v.ku(i,!l,d).then(function(n){a=n,s()})}
;_&&(f>=0||r.bn>=52)&&(g||1!==m(r.B))?v.pu(true,0,function(n,e){if(d=n.slice(),i=n[e[1]],n=n.slice(e[0],e[2]),
r.bn<52&&(n=n.filter(function(n){return n.incognito===i.incognito})),g){if(!(n=v.vu(i,n,g)).length)return void u(0)
;i=n.includes(i)?i:n[0]}a=(1!==(c=n).length||!c[0].active)&&null,s()},[],u):f>=0||r.bn>=52?s():(a=null,
t.makeTempWindow_r(i.id,i.incognito,s))})}else x=n.filter(function(n){return n.id===i.windowId})
;_&&m(r.B)>1?e.moveTabToNewWindow(u):v.ku(i,false).then(function(n){I||n&&t.selectTab(n.id),t.makeWindow({tabId:i.id,
incognito:i.incognito,focused:I},1===x.length&&"normal"===x[0].type?x[0].state:"",function(e){e&&(p(),
I&&n&&t.selectTab(n.id)),i.pinned&&e&&e.tabs&&e.tabs[0]&&t.tabsUpdate(e.tabs[0].id,{pinned:true}),u(!!e)})})})},
e.moveTabToNextWindow=g,_=function(n,u,i,o){var f,l,a,d=u[0],s=u[1],w=u[2],p={
bypassCache:true===(r.yn.hard||r.yn.bypassCache)},b=t.se.reload,I=n
;if(m(r.B)<2||r.yn.single)b(n[o?s:d].id,p,c.getRunNextCmdBy(0));else{if(f=n[s],l=r.yn.filter,n=n.slice(d,w),l){
if(!(n=v.vu(f,n,l)).length)return void i(0);f=n.includes(f)?f:n[0]}
if(n.length>20&&c.uu())c.nu("reloadTab",n.length).then(e.reloadTab.bind(null,I,[d,s,w],i));else for(a of(b(f.id,p,c.getRunNextCmdBy(0)),
n))a!==f&&b(a.id,p)}},e.reloadTab=_,x=function(n,u,i){
var o,f,l,a,d,s,p,b,I,g,_,x,y,k,P,j,M=r.yn.highlighted,O=r.yn.goto||(r.yn.left?"left":""),A=(O+"").split(/[\/,;\s]/),N=A.length>1?A[m(r.B)>1?1:0]:O+"",R="near"===N||"reverse"===N||N.startsWith("back"),W=N.startsWith("forw"),$=R?r.B>0:W?r.B<0:"left"===N,z=R?r.B<0:W?r.B>0:"right"===N,C=N.includes("previous"),H=C&&N.includes("only")
;if(u){if(!i||!i.length)return n(0),t.fe();if(f=i.length,l=t.selectIndexFrom(i),a=i[l],d=1,s=l,p=l+1,m(r.B)>1&&f>1){
if(b=0,i[0].pinned!==a.pinned&&!(r.B<0&&i[l-1].pinned))for(;i[b].pinned;)b++
;if((d=(I=v.getTabRange(l,f-b,f))[1]-I[0])>20&&c.uu()&&u<3)return void c.nu("removeTab",d).then(e.removeTab.bind(null,n,2,i))
;d>1&&(s=b+I[0],p=b+I[1])}else if(M){if(_="no-current"===M,(d=(g=i.filter(function(n){return n.highlighted&&n!==a
})).length+1)>1&&(_||d<f)&&t.se.remove(g.map(function(n){return n.id}),t.fe),_)return void n(d>1)
}else if(r.yn.filter&&0===v.vu(a,[a],r.yn.filter).length)return void n(0)
;if(!s&&d>=f&&true!==(null!=r.yn.mayClose?r.yn.mayClose:r.yn.allow_close))u<2?t.getCurTabs(e.removeTab.bind(null,n,3)):t.ae.getAll(T.bind(null,n,a,i));else if(u<2&&(H?(y=v.gu())>=0&&(x=t.ue(t.tabsGet,y)):(z||$&&s>0)&&(x=t.ue(t.se.query,{
windowId:a.windowId,index:$?s-1:s+1}).then(function(n){return n&&n[0]})),x))x.then(function(r){
r&&r.windowId===a.windowId&&t.oe(r)?(t.selectTab(r.id),
t.se.remove(a.id,t.re(n))):t.getCurTabs(e.removeTab.bind(null,n,3))});else{if(k=f,
d>=f);else if(C)k=(P=!H&&p<f&&!r.z.has(i[p].id)?i[p]:i.filter(function(n,e){return(e<s||e>=p)&&r.z.has(n.id)
}).sort(w.pr.bo)[0])?i.indexOf(P):f;else if($||z){
for(j=k=$?s>0?s-1:p:p<f?p:s-1;j>=0&&j<f&&(j<s||j>=p)&&!t.oe(i[j]);)j+=j<s?-1:1;k=j>=0&&j<f?j:k}
k>=0&&k<f&&t.selectTab(i[k].id),h(a,i,s,p,n)}
}else((o=m(r.B)>1||M||C&&!H)?t.getCurTabs:t.getCurTab)(e.removeTab.bind(null,n,o?2:1))},e.removeTab=x,
T=function(n,e,u,i){var o,f,l=false;i=i.filter(function(n){return"normal"===n.type}),
"always"===r.yn.keepWindow?l=!i.length||i.some(function(n){return n.id===e.windowId}):i.length<=1?(l=true,
(f=i[0])&&(f.id!==e.windowId?l=false:f.incognito&&!t.ne(r.newTabUrl_f)&&(o=f.id))):e.incognito||1===(i=i.filter(function(n){
return!n.incognito})).length&&i[0].id===e.windowId&&(o=i[0].id,l=true),l&&t.tabsCreate({index:u.length,url:"",windowId:o
},c.getRunNextCmdBy(3)),h(e,u,0,u.length,l?null:n)},h=function(n,e,u,i,o){var f,l,c,a=Math.max(0,e.indexOf(n))
;t.se.remove(n.id,o?t.re(o):t.fe),l=e.slice(a+1,i),c=e.slice(u,a),r.B<0&&(l=(f=[c,l])[0],c=f[1]),
l.length>0&&t.se.remove(l.map(function(n){return n.id}),t.fe),c.length>0&&t.se.remove(c.map(function(n){return n.id
}),t.fe)},e.toggleMuteTab=function(n){var e,u,i,o;e=r.yn.filter,r.yn.all||e||r.yn.other||r.yn.others?(i=function(i){
var o,l,c=r.yn.other||r.yn.others?r.I?r.I.s.ur:r.U:-1,a=0===i.length||-1!==c&&1===i.length&&i[0].id===c
;if(null!=r.yn.mute)a=!!r.yn.mute;else for(o of i)if(o.id!==c&&!t.isTabMuted(o)){a=true;break}
if(!e||(i=v.vu(u,i,e)).length){for(o of(l={muted:a},i))o.id!==c&&a!==t.isTabMuted(o)&&t.tabsUpdate(o.id,l)
;f.showHUDEx(r.I,a?"mute":"unmute",0,[[-1===c?"All":"Other"]]),n(1)}else n(0)
},(o=v.getNecessaryCurTabInfo(e))?o.then(function(n){u=n,t.se.query({audible:true},i)}):t.se.query({audible:true
},i)):t.getCurTab(function(e){var u=e[0],i=!t.isTabMuted(u),o=null!=r.yn.mute?!!r.yn.mute:i;o===i&&t.tabsUpdate(u.id,{
muted:o}),f.showHUD(l.jr(o?"muted":"unmuted")),n(1)})},e.togglePinTab=function(n,e,u){
var i,o,f,l,a,d,s,w,p=r.yn.filter,b=e[1],I=n[b];if(n=p?v.vu(I,n,p):n,i=!p||n.includes(I)?!I.pinned:!!n.find(function(n){
return!n.pinned}),o={pinned:i},f=i?0:1,l=0,m(r.B)>1&&i)for(;n[l].pinned;)l++
;for(d=l+(a=v.getTabRange(b-l,n.length-l,n.length))[f]-f,
s=l+a[1-f]-f,w=[];d!==s;d+=i?1:-1)(i||n[d].pinned)&&w.push(n[d])
;(s=w.length)?(s<=30||!c.uu()?Promise.resolve(false):c.nu("togglePinTab",s)).then(function(n){n&&(w.length=1)
}).then(function(){var n,e=w.includes(I)?I.id:w[0].id;for(n of w)t.tabsUpdate(n.id,o,n.id===e?t.re(u):t.fe)}):u(0)},
e.toggleTabUrl=function(n,e){var a,s=t.getTabUrl(n[0]),v=r.yn.reader,w=r.yn.keyword
;if(s.startsWith(r.e.Gn))return f.complainLimits(l.jr(v?"noReader":"openExtSrc")),void e(0);v&&w?(a=o.He({u:s
}))&&a.k===w?(c.overrideCmdOptions({keyword:""}),d.openUrlWithActions(a.u,0,true,n)):(s=i.$e(a&&r.yn.parsed?a.u:s,w),
d.openUrlWithActions(s,9,true,n)):v?r.Mn&&u.Rt.test(s)?(s=s.startsWith("read:")?u.lt(s.slice(s.indexOf("?url=")+5)):"read://".concat(new URL(s).origin.replace(/:\/\/|:/g,"_"),"/?url=").concat(u.ct(s)),
d.openUrlWithActions(s,9,true,n)):(f.complainLimits(l.jr("noReader")),
e(0)):(s=s.startsWith("view-source:")?s.slice(12):"view-source:"+s,d.openUrlWithActions(s,9,true,n))},
e.Gr=function(n,e,u,i){var o,f,l,a,d,s,v=n.id,w=1===e;if(e&&t.ce()&&(false!==i||null==t.getGroupId(n)))return o=0,f=-1,
l=function(){var n=t.fe();if(n)return t.ce().restore(null,c.getRunNextCmdBy(0)),f>=0&&t.se.remove(f),f=0,n
;(o+=1)>=5||setTimeout(function(){t.tabsGet(v,l)},50*o*o)},w&&t.tabsCreate({url:"about:blank",active:false,
windowId:n.windowId},function(n){f?f=n.id:t.se.remove(n.id)}),void t.se.remove(v,function(){return t.tabsGet(v,l),t.fe()
});d=t.isTabMuted(n),a=function(n){d!==t.isTabMuted(n)&&t.tabsUpdate(n.id,{muted:d})},s={windowId:n.windowId,
index:n.index,url:t.getTabUrl(n),active:n.active,pinned:n.pinned,openerTabId:n.openerTabId},u&&(s=Object.assign(u,s)),
null!=s.index&&s.index++,t.openMultiTabs(s,1,true,[null],i,n,function(n){n&&a&&a(n),
n?c.runNextOnTabLoaded(r.yn,n):c.runNextCmd(0)}),t.se.remove(v)}});