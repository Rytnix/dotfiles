"use strict"
;__filename="background/others.js",define(["require","exports","./store","./browser","./utils","./settings","./i18n","./normalize_urls","./normalize_urls","./open_urls"],function(n,e,o,t,i,r,u,l,c,a){
Object.defineProperty(e,"__esModule",{value:true});var s,f,m,d,g,v,p,b=o.Q.showActionIcon=function(n){
var e=t.de.browserAction;e?(o.rn=n,t.import2("/background/action_icon.js").then(function(n){n.ei()}),
Promise.resolve(u.kr("name")).then(function(o){n||(o+="\n\n"+u.kr("noActiveState")),e.setTitle({title:o})
})):o.Q.showActionIcon=void 0};r.eo.then(function(){o.pn.showActionIcon?b(true):o.M=o.j}),setTimeout(function(){
new Promise(function(e,o){n(["/background/sync.js"],e,o)}).then(n=>n)},100),(function(){function n(){T&&(T.Po=null),
y=M=T=h=null,k&&clearTimeout(k),w&&clearTimeout(w),j=F=S=k=w=0,_="",i.jt()}function e(){var o=Date.now()-j
;if(o>5e3||o<-5e3)return n();k=setTimeout(e,3e4)}function r(){var n,e;if(w=0,(n=T)&&!n.jo)return T=null,
n.Po?((e=Date.now())<j&&(j=e-1e3),f(n.Co,n.Po)):void 0}function s(n,e,r,u,l){var a,s,f,m,g,p,w,P,k,j,D,O,U,V,q,x,z
;if(n.Po){for(T=null,a=e.length>0?e[0]:null,F=u,S=l,M=[],f=new Set,m=" ".concat(o.in.t," ").includes(" type-letter "),
g=0,
p=r?0:1,w=e.length;g<w;g++)k=(P=e[g]).title,D=P.e,U="",V=null!=P.s,q=b&&!(r&&0===g)&&("tab"===D?P.s!==o.U:"history"===D&&!V),
(O=i.at(O=j=P.u,1)).startsWith("file")&&(O=c.pe(O)),
O=O.replace(/%20/g," "),f.has(O)?O=":".concat(g+p," ").concat(O):f.add(O),q&&(U=" ~".concat(g+p,"~")),x={content:O,
description:U=(k||m?(k?k+" <dim>":"<dim>")+(m?"[".concat(P.e[0].toUpperCase(),"] "):"")+(k?"-</dim> <url>":"</dim><url>"):"<url>")+P.textSplit+"</url>"+(U&&"<dim>".concat(U,"</dim>"))
},q&&(x.deletable=true),(q||V)&&(y||(y=new Map),y.has(O)||y.set(O,{Fo:D,Ni:V?P.s:null,ye:j})),M.push(x);h=n.Co,
r?"search"===a.e?(s=((z=a.p)&&"<dim>".concat(i.ht(z)+d,"</dim>"))+"<url>".concat(a.textSplit,"</url>"),C=2,
(a=e[1])&&"math"===a.e&&(M[1].description="".concat(a.textSplit," = <url><match>").concat(a.t,"</match></url>"))):(C=3,
s=M[0].description):1!==C&&(s="<dim>".concat(v,"</dim><url>%s</url>"),C=1),r&&(_=e[0].u,
y&&M.length>0&&_!==M[0].content&&y.set(_,y.get(M[0].content)),M.shift()),s&&t.de.omnibox.setDefaultSuggestion({
description:s}),n.Po(M),i.jt()}else T===n&&(T=null)}function f(n,t){var i,u,l,c;n=O(n),T&&(T.Po=(i=n===T.Co)?t:null,
i)||(n!==h?1===F&&n.startsWith(h)?t([]):(T={Po:t,Co:n,jo:false},w||(u=Date.now(),
(l=o.in.i+j-u)>30&&l<3e3?w=setTimeout(r,l):(T.jo=true,k||(k=setTimeout(e,3e4)),j=u,y=M=null,_="",
c=F<2||!n.startsWith(h)?0:3===F?n.includes(" ")?0:8:S,o.C.yu(n,{o:"omni",t:c,r:D,c:P,f:1},s.bind(null,T))))):M&&t(M))}
function m(n,e,t){return n?":"===n[0]&&/^:([1-9]|1[0-2]) /.test(n)&&(n=n.slice(" "===n[2]?3:4)):n=l.$e(""),
"file://"===n.slice(0,7).toLowerCase()&&(n=i.t().test(n)?l.he("show image "+n,false,0):n),null!=t?o.W[6]({s:t
}):a.openUrlReq({u:n,r:"currentTab"===e?0:"newForegroundTab"===e?-1:-2})}
var d,g,v,p,b,h,_,T,w,y,P,M,k,j,C,F,S,D,O,U=t.de.omnibox;U&&(d=": ",g=false,v="Open: ",
b=!!(p=U.onDeleteSuggestion)&&"function"==typeof p.addListener,h=null,_="",T=null,w=0,y=null,P=128,M=null,k=0,C=0,F=0,
S=0,D=o.bn<60?6:12,O=function(n){if(n=n.trim().replace(i.qt," "),o.un.actions.includes("icase")){
var e=/^:[WBH] /.test(n)?3:0;n=e?n.slice(0,e)+n.slice(e).toLowerCase():n.toLowerCase()}return n},
U.onInputStarted.addListener(function(){if(t.getCurWnd(false,function(n){var e=n&&n.width
;P=e?Math.floor((e-160/devicePixelRatio)/7.72):128}),g||(g=true,Promise.resolve(u.kr("i18n")).then(function(){
"en"!==u.gr()&&Promise.resolve(u.jr("colon")).then(function(n){d=n+u.jr("NS")||d,v=u.jr("OpenC")||v})})),k)return n()}),
U.onInputChanged.addListener(f),U.onInputEntered.addListener(function e(t,i){var u,l,c=T;if(c&&c.Po){
if(c.Po=e.bind(null,t,i),c.jo)return;return w&&clearTimeout(w),r()}return t=O(t),null===h&&t?o.C.yu(t,{o:"omni",t:0,r:3,
c:P,f:1},function(n,e){return e?m(n[0].u,i,n[0].s):m(t,i)
}):(_&&t===h&&(t=_),l=null==(u=null==y?void 0:y.get(t))?void 0:u.Ni,n(),m(u?u.ye:t,i,l))}),b&&p.addListener(function(n){
var e=parseInt(n.slice(n.lastIndexOf("~",n.length-2)+1))-1,t=M&&M[e].content,i=t&&y?y.get(t):null,r=i&&i.Fo;r?o.W[23]({
t:r,s:i.Ni,u:i.ye
},null):console.log("Error: want to delete a suggestion but no related info found (may spend too long before deleting).")
}))})(),s=0,f=false,m=0,d=o.Mn?"edge:":"chrome:",g=o.Mn?"":d+"//newtab/",v=o.Mn?"":d+"//new-tab-page/",p=function(n){
0===n.frameId&&n.url.startsWith(d)&&s&(n.url.startsWith(g)||n.url.startsWith(v)?2:1)&&!m&&t.n(n.tabId)},t.s([{
origins:["chrome://*/*"]},o.bn>79&&!o.Mn?{origins:["chrome://new-tab-page/*"]}:null],function n(e){
if(1&(s=(e[0]?1:0)+(e[1]?2:0))&&!o.pn.allBrowserUrls&&(s^=1),f!==!!s){var i=t.le();if(!i)return false
;i.onCommitted[(f=!f)?"addListener":"removeListener"](p)}m=m||s&&setTimeout(function(){s?t.se.query({url:d+"//*/*"
},function(n){for(var e of(m=0,n||[]))!o.K.has(e.id)&&s&(e.url.startsWith(g)||e.url.startsWith(v)?2:1)&&t.n(e.id)
;return t.fe()}):m=0},120),s&&!o.Q.allBrowserUrls&&(o.Q.allBrowserUrls=n.bind(null,e,false))}),
o.dn&&Promise.all([o.dn,r.eo]).then(function(n){
var e=n[0],c=e&&e.reason,a="install"===c?"":"update"===c&&e.previousVersion||"none";"none"!==a&&setTimeout(function(){
var n,c,s;if(t.se.query({status:"complete"},function(n){var e,i=/^(file|ftps?|https?):/
;for(e of n)i.test(e.url)&&!o.K.has(e.id)&&t.n(e.id)
}),console.log("%cVimium_ C%c has been %cinstalled%c with %o at %c%s%c.","color:red","color:auto","color:#0c85e9","color:auto",e,"color:#0c85e9",i.now(),"color:auto"),
o.e.Rn&&console.log("Sorry, but some commands of Vimium C require the permission to run in incognito mode."),
!a)return n=function(){o.X||o.w?++c<25&&setTimeout(n,200):o.W[21]({u:o.e.Ln+"#commands"})},c=0,void n()
;r.Ve("vomnibarPage"),parseFloat(o.e.qn)<=parseFloat(a)||(o.a?o.a(6e3):o.a=true,r.Ve("newTabUrl"),
o.pn.notifyUpdate&&(s="vimium_c-upgrade-notification",
Promise.all([u.jr("Upgrade"),u.jr("upgradeMsg",[o.e.En]),u.jr("upgradeMsg2"),u.jr("clickForMore")]).then(function(n){
var e,i={type:"basic",iconUrl:location.origin+"/icons/icon128.png",title:"Vimium C "+n[0],message:n[1]+n[2]+"\n\n"+n[3]}
;o.bn<67&&(i.isClickable=true),o.bn>=70&&(i.silent=true),(e=t.de.notifications)&&e.create(s,i,function(n){var i
;if(i=t.fe())return i;s=n||s,e.onClicked.addListener(function n(t){t==t&&(e.clear(t),o.W[21]({u:l.$e("vimium://release")
}),e.onClicked.removeListener(n))})})})))},500)}),setTimeout(function(){globalThis.document.body.innerHTML="",i.jt()
},1e3)});