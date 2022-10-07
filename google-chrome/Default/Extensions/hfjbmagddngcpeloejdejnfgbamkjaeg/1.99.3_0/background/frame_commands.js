"use strict"
;__filename="background/frame_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./ports","./ui_css","./i18n","./key_mappings","./run_commands","./open_urls","./tools"],function(n,t,e,l,u,i,o,r,f,a,c,s,m){
var d,v,p,g,h,b,y,_;Object.defineProperty(t,"__esModule",{value:true
}),t.focusFrame=t.framesGoNext=t.toggleZoom=t.mainFrame=t.framesGoBack=t.openImgReq=t.captureTab=t.handleImageUrl=t.enterVisualMode=t.showVomnibar=t.initHelp=t.performFind=t.parentFrame=t.nextFrame=void 0,
e.r=function(n,t,i){var o,r,f,a=e.K.get(e.U)||e.I&&e.K.get(e.I.s.ur),s=a?a.cr:e.I;return o=setTimeout(function(){
var n=e.S(o,null);n&&n.r&&n.r(false)},4e4),r=l.tt(),e.S(null,{i:o,t:n,s:t,d:i,r:r.Lt}),s?c.portSendFgCmd(s,18,1,{
u:e.e.Jn,c:"R TEE UI",a:1===n||5===n||9===n?"clipboard-write":"",t:3e3},1):(f=r.Ut,u.getCurWnd(false,function(n){
var t=n?n.id:e.L;u.makeWindow({type:"popup",url:e.e.Jn,focused:true,incognito:false,left:0,top:0,width:100,height:32
},"",function(n){var l,i=n?null:e.S(null,null);n?(l=n.id,f.then(function(){t!==e.L&&u.ae.update(t,{focused:true},u.fe),
u.ae.remove(l,u.fe)}),f=null):i&&i.i===o&&(clearTimeout(i.i),i.r&&i.r(false))})})),r.Ut},d=function(){
var n,l=e.I,u=-1,i=e.K.get(l.s.ur),o=i&&i.so;if(o&&o.length>1){for(u=o.indexOf(l),
n=Math.abs(e.B);n>0;n--)(u+=e.B>0?1:-1)===o.length?u=0:u<0&&(u=o.length-1);l=o[u]}
t.focusFrame(l,0===l.s.tr,l!==e.I&&i&&l!==i.cr?4:3,e.yn)},t.nextFrame=d,v=function(){
var n=e.I.s,l=n.ur>=0&&e.K.get(n.ur)?null:"Vimium C can not access frames in current tab";l&&o.showHUD(l),
o.getParentFrame(n.ur,n.tr,e.B).then(function(n){n?t.focusFrame(n,true,5,e.yn):t.mainFrame()})},t.parentFrame=v,
t.performFind=function(){
var n=e.I.s,t=e.B<0?-e.B:e.B,l=e.yn.index,u=l?"other"===l?t+1:"count"===l?t:l>=0?-1-(0|l):0:0,i=e.yn.highlight,o=!!u||!e.yn.active,f=null
;32&n.ir||(n.ir|=32,f=r.ni(n)),c.sendFgCmd(1,true,c.wrapFallbackOptions({c:u>0?e.B/t:e.B,l:o?1:0,f:f,
m:"number"==typeof i?i>=1?Math.min(0|i,200):0:i?o?100:20:0,n:!!e.yn.normalize,r:true===e.yn.returnToViewport,
s:!u&&t<2&&!!e.yn.selected,p:!!e.yn.postOnEsc,e:!!e.yn.restart,
q:e.yn.query?e.yn.query+"":o||e.yn.last?m.wr.Xr(n.sr,"",u<0?-u:u):""}))},t.initHelp=function(n,t){var i=e.nn||[]
;return Promise.all([u.import2(e.e.HelpDialogJS),null!=i[0]?null:l.$n("help_dialog.html"),null!=i[1]?null:f.getI18nJson("help_dialog")]).then(function(l){
var u,i,o=l[0],r=l[1],f=l[2],s=n.w&&(null===(u=e.K.get(t.s.ur))||void 0===u?void 0:u.ar)||t,m=s.s.ye.startsWith(e.e.Ln),d=n.a||{}
;s.s.ir|=64,e.I=s,i=e.nn||(e.nn=[null,null]),r&&(i[0]=r),f&&(i[1]=f),c.sendFgCmd(17,true,{h:o.nl(m,d.commandNames),
o:e.e.Ln,f:n.f,e:!!d.exitOnClick,c:m&&!!a.Kt||e.pn.showAdvancedCommands})},null)},p=function(n){
var u,i,r,f,a,s,m,d,v,p,g,h,b=e.I,y=e.yn.url;if(null!=y&&true!==y&&"string"!=typeof y&&(y=null,delete e.yn.url),!b){
if(!(b=(null===(u=e.K.get(e.U))||void 0===u?void 0:u.ar)||null))return;e.I=b}if(i=null,null!=y&&e.yn.urlSedKeys){
if((r="string"==typeof y?y:"string"==typeof e.yn.u?e.yn.u:o.rr())&&r instanceof Promise)return void r.then(function(e){
c.overrideCmdOptions({u:e||""},true),t.showVomnibar(n)});i=e.p(r,0,{r:null,k:e.yn.urlSedKeys})}
"bookmark"===e.yn.mode&&c.overrideOption("mode","bookm"),a=b.s.ye,s=!(f=e.vomnibarPage_f).startsWith(e.e.Gn),
m=a.startsWith(e.e.Gn),
d=n||!f.startsWith(location.origin+"/")?e.e.Wn:f,n=n||(s?m||f.startsWith("file:")&&!a.startsWith("file:///")||f.startsWith("http:")&&!/^http:/.test(a)&&!/^http:\/\/localhost[:/]/i.test(f):b.s.sr||m&&!f.startsWith(a.slice(0,a.indexOf("/",a.indexOf("://")+3)+1))),
g=e.yn.trailing_slash,null==(h=c.copyCmdOptions(l.gt({v:(v=n||f===d||b.s.ur<0)?d:f,i:v?null:d,t:v?0:s?2:1,
s:null!=(p=e.yn.trailingSlash)?!!p:null!=g?!!g:null,j:v?"":e.e.Yn,e:!!e.yn.exitOnClick,u:i,url:"string"==typeof y&&i||y,
k:l.l(true)}),e.yn)).icase&&e.un.actions.includes("icase")&&(h.icase=true),c.portSendFgCmd(b,6,true,h,e.B),h.k="omni",
e.yn=h},t.showVomnibar=p,t.enterVisualMode=function(){var n,t,u,i,o,f,s,m,d;t=e.yn.start,
u="string"==typeof(n=e.yn.mode)?n.toLowerCase():"",o=null,f="",s=null,m=null,16&~(i=e.I.s).ir&&(f=e.tn,
32&i.ir||(i.ir|=32,o=r.ni(i)),s=a.Tt,m=a.Ht,i.ir|=16),delete(d=l.zt({m:"caret"===u?3:"line"===u?2:1,f:o,g:m,k:s,
t:!!e.yn.richText,s:null!=t?!!t:null,w:f},e.yn)).mode,delete d.start,delete d.richText,c.sendFgCmd(5,true,d)},
h=function(n,i,o,r,f,a,c,s){var m,d,v,p,h,b,y;if(o)if(d=!(!(1&o)||2===e.F||e.I&&e.I.s.sr||false),!(v=4&o||d)||i){
if(g&&(clearTimeout(g[0]),l.d(g[1]),g=null),(p=v?URL.createObjectURL(i):"")&&(g=[setTimeout(function(){g&&l.d(g[1]),
g=null},4&o?3e4:5e3),p],h=r,r=[1,4,9].includes(o)?function(n){h(n),g&&l.d(p),g&&g[1]===p&&(clearTimeout(g[0]),g=null)
}:h),1&o&&(e.bn<76?Promise.resolve(false):(n||d?Promise.resolve():l.g(i).then(function(t){n=t})).then(function(t){
return e.r(9===o?o:1,{u:d?p:n,t:a,b:1},t)}.bind(0,i))).then(function(t){var e,u,i,o
;t?r(!!t):((u=(e=globalThis.document).createElement("img")).alt=f.replace(l.t(),""),u.src=n,
e.documentElement.appendChild(u),i=e.getSelection(),(o=e.createRange()).selectNode(u),i.removeAllRanges(),i.addRange(o),
e.execCommand("copy"),u.remove(),r(1))}),2&o)return c(n||p),void(1&o||r(1))
;4&o&&(b=(null===(m=e.K.get(e.I?e.I.s.ur:e.U))||void 0===m?void 0:m.ar)||e.I,y=l.tt(),
1&o&&true?setTimeout(y.Lt,300):y.Lt(0),y.Ut.then(function(){u.downloadFile(p,f,b?b.s.ye:null,function(n){var t
;n||((t=globalThis.document.createElement("a")).href=p,t.download=f,t.target="_blank",t.click()),4===o&&r(true)})}))
}else l.$n(n,"blob").then(function(e){t.handleImageUrl(n,e,o,r,f,a,c,s)});else r(1)},t.handleImageUrl=h,b=function(n,i){
var r=e.yn.show,a=!!e.yn.copy,c=e.yn.download,s=a?true===c:false!==c,m=!!e.yn.richText,d=!e.yn.png?Math.min(Math.max(0|e.yn.jpeg,0),100):0,v=n&&n[0],p=!!v&&v.url.startsWith(location.protocol),g=v?v.windowId:e.L,h=v?v.title:"Tab"+(v?v.id:e.U)
;h=(h="title"===e.yn.name?h:l.now().replace(/[-: ]/g,function(n){return" "===n?"_":""})+"-"+h).replace(l.t(),""),
h+=d>0?".jpg":".png",u.se.captureVisibleTab(g,d>0?{format:"jpeg",quality:d}:{format:"png"},function(n){var l
;if(!n)return e.I&&o.showHUD("Can not capture "+(p?"injected extensions":"this tab")),i(0),u.fe();l=function(n){
e.W[24]({t:"pixel=1&",u:n,f:h,a:false,m:37,o:{r:e.yn.reuse,m:e.yn.replace,p:e.yn.position,w:e.yn.window}},e.I)},
t.handleImageUrl(n,null,(r?2:0)|(s?4:0)|(a?1:0),a?function(n){
o.showHUD(f.jr(n?"imgCopied":"failCopyingImg",[1===n?"HTML":d?"JPEG":"PNG"])),i(n)
}:i,h,((m||"")+"").includes("name")?h:"",l)})},t.captureTab=b,t.openImgReq=function(n,t){var u,r,a,m,d,v,p,g,h=n.u
;if(/^<svg[\s>]/i.test(h)){if(!(h=i.me(h)))return e.I=t,void o.showHUD(f.jr("invalidImg"));n.f=n.f||"SVG Image"}
if(!l.mt(h))return e.I=t,void o.showHUD(f.jr("invalidImg"));r=e.e.Qn+"#!image ",n.f&&(r+="download="+l.ct(n.f)+"&"),
false!==n.a&&(r+="auto=once&"),n.t&&(r+=n.t),m=(a=n.o||l.vt()).k,d=null!==(u=a.t)&&void 0!==u?u:!m,
p=(v=a.s?e.p(h,32768,a.s):h)!==h,h=v,c.replaceCmdOptions({opener:true,reuse:null!=a.r?a.r:16&n.m?-2:-1,replace:a.m,
position:a.p,window:a.w}),e.B=1,g=m||p?d?i.$e(h,m,2):i.ge(h.trim().split(l.qt),m,2):h,t&&o.safePost(t,{N:12,
H:o.ensureInnerCSS(e.I.s),k:1,t:" ",d:1e-4
}),s.openUrlWithActions("string"!=typeof g||!d||g.startsWith(location.protocol)&&!g.startsWith(location.origin+"/")?g:r+g,9)
},y=function(n,l,i){var r,a,m,d,v,p,g,h,b,y=!!u.se.goBack
;if(!y&&(i?u.getTabUrl(i):(l.s.tr?e.K.get(l.s.ur).ar:l).s.ye).startsWith(e.e.Gn)&&true)return e.I=l,
o.showHUD(f.jr("noTabHistory")),void c.runNextCmd(0);if(r=c.hasFallbackOptions(n.o)?(c.replaceCmdOptions(n.o),
c.getRunNextCmdBy(0)):u.fe,a=function(n,t){u.se.executeScript(n.id,{code:"history.go(".concat(t,")"),
runAt:"document_start"},r)},m=i?i.id:l.s.ur,d=n.s,v=s.parseReuse(n.o.reuse||0))p=n.o.position,
u.se.duplicate(m,function(e){var l,i,o;if(!e)return r()
;-2===v&&u.selectTab(m),y?((l=c.parseFallbackOptions(n.o)||{}).reuse=0,t.framesGoBack({s:d,o:l},null,e)):a(e,d),
i=e.index--,null!=(o="end"===p?3e4:s.newTabIndex(e,p,false,true))&&o!==i&&u.se.move(e.id,{index:o},u.fe)
});else if(g=d>0?u.se.goForward:u.se.goBack,y||g)for(h=0,b=d>0?d:-d;h<b;h++)g(m,h?u.fe:r);else a(i,d)},t.framesGoBack=y,
_=function(){var n=e.K.get(e.I?e.I.s.ur:e.U),l=n&&n.ar
;l&&l===n.cr&&e.yn.$else&&"string"==typeof e.yn.$else?c.runNextCmd(0):l&&t.focusFrame(l,true,l===n.cr?3:5,e.yn)},
t.mainFrame=_,t.toggleZoom=function(n){u.ue(u.se.getZoom).then(function(t){var l,i,o,r,f,a,c,s,m,d,v;if(t){
if(l=e.B<-4?-e.B:e.B,(e.yn.in||e.yn.out)&&(l=0,e.B=e.yn.in?e.B:-e.B),o=e.yn.level,r=Math,
e.yn.reset)i=1;else if(null!=o&&!isNaN(+o)||l>4)f=r.max(.1,r.min(0|e.yn.min||.25,.9)),
a=r.max(1.1,r.min(0|e.yn.min||5,100)),i=null==o||isNaN(+o)?l>1e3?1:l/(l>49?100:10):1+o*e.B,i=r.max(f,r.min(i,a));else{
for(c=0,
s=9,m=[.25,1/3,.5,2/3,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],d=0,v=0;d<m.length&&(v=Math.abs(m[d]-t))<s;d++)c=d,s=v
;i=m[c+e.B<0?0:r.min(c+e.B,m.length-1)]}Math.abs(i-t)>.005?u.se.setZoom(i,u.re(n)):n(0)}else n(0)})},
t.framesGoNext=function(n,t){var l,u,i,o,r=e.yn.patterns,f=false
;if(r&&r instanceof Array||(r=(r=r&&"string"==typeof r?r:(f=true,
n?e.pn.nextPatterns:e.pn.previousPatterns)).split(",")),f||!e.yn.$fmt){for(u of(l=[],
r))if((u=u&&(u+"").trim())&&l.push(".#[:".includes(u[0])?u:u.toLowerCase()),200===l.length)break;r=l,
f||(c.overrideOption("patterns",r),c.overrideOption("$fmt",1))}i=r.map(function(n){
return Math.max(n.length+12,4*n.length)}),o=Math.max.apply(Math,i),c.sendFgCmd(10,true,c.wrapFallbackOptions({
r:e.yn.noRel?"":t,n:n,match:e.yn.match,clickable:e.yn.clickable,clickableOnHost:e.yn.clickableOnHost,
exclude:e.yn.exclude,excludeOnHost:e.yn.excludeOnHost,evenIf:e.yn.evenIf,scroll:e.yn.scroll,p:r,l:i,m:o>0&&o<99?o:32,
v:false!==e.yn.view,a:!!e.yn.avoidClick}))},t.focusFrame=function(n,t,l,u){n.postMessage({N:7,
H:t?o.ensureInnerCSS(n.s):null,m:l,k:e.x,c:0,f:u&&c.parseFallbackOptions(u)||{}})}});