"use strict"
;__filename="background/key_mappings.js",define(["require","exports","./store","./utils","./settings","./exclusions"],function(e,t,n,a,o,i){
var r,s,c,l,u,m,d,p,v,b,k,f,g,T,w,y,h,L,H,M,x,_,I,U;Object.defineProperty(t,"__esModule",{value:true}),
t.Tt=t.Ht=t.It=t.Ct=t.Vt=t.Ot=t.Bt=t.Pt=t.Dt=t.Kt=t.Et=t.Wt=t.Gt=void 0,t.Gt=r=/<(?!<)(?:.-){0,4}.\w*?(?::i)?>|./g,
t.Et=c,t.Wt=l,u=true,t.Kt=m=null,t.Dt=function(e){return e.length>1?"<escape>"===e?"esc":e.slice(1,-1):e},p=function(e){
return e.length>1?"<".concat(e,">"):e},v=function(e,n){
return e.length<=n?null:e.includes(" $",n)||e.includes(" =",n)?t.Pt(e.slice(n+1),e.includes(" $if={",n)?0:1):e.slice(n+1)
},t.Pt=function(e,n){var o,i,r,s=a.vt(),c=0;for(o of e.split(" ")){if(i=o.indexOf("="),"$#/=_".includes(o[0])){
if(0===i||"__proto__"===o||"$"===o[0]&&!"$if=$key=$desc=$count=$then=$else=$retry=".includes(o.slice(0,i+1))){
(0===n||1===n)&&x("%s option key:",0===i?"Missing":"Unsupported",o);continue}if("#"===o[0]||o.startsWith("//"))break}
i<0?(s[o]=true,c=1):(r=o.slice(i+1),s[o=o.slice(0,i)]="number"==typeof n?2===n?r&&b(r):1:r&&t.Bt(r),c=1)}
return 1===c?1===n?e:s:null},t.Bt=function(e){try{return JSON.parse(e)}catch(e){}return e},b=function(e){var n
;return"false"!==e&&("null"===e?null:"true"===e||((e>="0"?e<":":"-"===e[0])?(n=parseFloat(e))+""===e?n:/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]\d+)?$/.test(e)?isNaN(n)?t.Bt(e):n:e:'{["'.includes(e[0])?t.Bt(e):e))
},k=function(e,n){var i,r,s,c,l,u,m,d=e.At;if(void 0===n&&(n=t.It[e.Jt]),i=n.length<4?null:a.gt(n[3]),
"string"==typeof d&&(d=t.Pt(d)),d){
if(("$count"in d||"count"in d)&&(1===n[2]?delete d.$count:d.$count=null!=d.$count?parseFloat(d.$count)||1:(parseFloat(d.count||1)||1)*(i&&i.$count||1),
delete d.count),d.$if){if(false===w(d))return false;delete d.$if}if(i&&a.zt(d,i),2===n[0]&&!n[1]){if(s=(r=d).mode,c=r.m,
u=r.action,(m=(l=r.characters)&&"string"==typeof l?a.i(o.Ye("c",l)):null)&&m.length<4)return e.Qt=39,e.Xt=1,e.At=a.gt({
text:"Too few characters for LinkHints",isError:true}),e.Yt=1,true;m?r.c=m:"c"in r&&delete r.c,
null!=l&&delete r.characters,"action"in r&&delete r.action,"mode"in r&&delete r.mode,
(s=null!=(s=u?I[u]:s&&"number"!=typeof s?I[s]:null)?s:Math.max(0,0|c))>33&&(s=65===s?r.url?64:s:40===s?r.url?null!=r.join?59:42:null!=r.join?57:s:s>79?s-16:s),
void 0!==r.xy&&(r.xy=a.c(r.xy)),r.direct&&(s&=-17),s!==c&&(r.m=s),s>63&&(e.Yt=1)}}else d=i;return e.At=d,true},t.Ot=k,
f=function(e,n,o){void 0===o&&(o=t.It[e]);var i={Qt:o[0],Xt:o[1],Jt:e,At:n||(o.length<4?null:a.gt(o[3])),Zt:null,Yt:o[2]
};return n&&"object"==typeof n&&!t.Ot(i,o)?null:i},t.Vt=f,g=function(e){var n=e.At;return"string"==typeof n&&(t.Ot(e),
n=e.At),n},t.Ct=g,T=function(e,t){var n
;return e.length>t&&(n=e.indexOf(" $if={",t))>0&&!/ (#|\/\/)/.test(e.slice(t,n+2))},w=function(e){
var t=e&&"object"==typeof e&&e.$if
;return t&&"object"==typeof t?!(!(t.sys&&t.sys!==n.e.Un||!!t.before&&t.before.replace("v","")<=n.e.qn)&&(!t.browser||1&t.browser)):null
},y=function(e){var o,i,r,p,b,k,f,g,y,L,H,M,I,U,C,N,V,$=0,F=0,S=new Map,O=new Map,B=null,P=false,R=a.vt(),D="color:red"
;for(s=d=null,o=e.replace(/\\\\?\n/g,function(e){return 3===e.length?"\\\n":""
}).replace(/[\t ]+/g," ").split("\n");F<o.length&&(!o[F]||"#"===(i=o[F])[0]);F++)i&&"!"===i[1]&&"no-check"===(i=i.slice(2).trim())&&(P=true)
;if(u=!P,F>=o.length||"unmapAll"!==o[F]&&"unmapall"!==o[F])for(s=new Set,r=(g=_.split(" ")).length;0<r;)s.add(g[r-=2]),
S.set(g[r],t.Vt(g[r+1],null));else F++
;for(r=o.length;F<r;F++)if(!((y=o[F].trim())<"$"))switch(U=(H=(L=y.split(" ",3))[0]).length+(M=L.length>1?L[1]:"").length+(I=L.length>2?L[2]:"").length+2,
C=P,H){case"map":case"run":
N="run"===H&&!(I in t.It),p=void 0,P||(!M||M.length>8&&("__proto__"===M||M.includes("<__proto__>"))?x('Unsupported key sequence %c"%s"',D,M||'""','for "'.concat(I||"",'"')):!S.has(M)||s&&s.has(M)||T(y,U)?I?N||(p=t.It[I])?!((b=M.charCodeAt(0))>47&&b<58||45===b)||d&&d.has(M[0])?C=true:x('Invalid key: %c"%s"',D,M,"- a first char can not be '-' or numbers, unless before is `unmap "+M[0]+"`"):x('Command %c"%s"',D,I,"doesn't exist"):x((N?"Lack target when running":"Lack command when mapping")+' %c"%s"',D,M):x('Key %c"%s"',D,M,"has been mapped to",S.get(M).Jt)),
C&&(k=N?t.Vt("runKey",v(' keys="'.concat(I.replace(/"|\\/g,"\\$&"),'"')+y.slice(U),0),p):t.Vt(I,v(y,U),p))&&(S.set(M,k),
s&&s.delete(M));break;case"unmapAll":case"unmapall":S=new Map,O=new Map,B=null,s=d=null,R=a.vt(),$=0,
m&&x("All key mappings is unmapped, but there %s been %c%d error%s%c before this instruction",m.length>1?"have":"has",D,m.length,m.length>1?"s":"","color:auto")
;break;case"mapKey":case"mapkey":
P?i=t.Dt(M):!I||y.length>U&&!/^(#|\/\/|\$if=\{)/.test(y.slice(U).trimLeft())?x("mapKey: need %s source and target keys:",I?"only":"both",y):M.length>1&&!/^<(?!<[^:]|__proto__>)([acms]-){0,4}.\w*(:[a-z])?>$/.test(M)?x("mapKey: a source key should be a single key with an optional mode id:",y):I.length>1&&!/^<(?!<|__proto__>)([a-z]-){0,4}.\w*>$/.test(I)?x("mapKey: a target key should be a single key:",y):(i=t.Dt(M))in R&&R[i]!==t.Dt(I)?d&&d.has(i[0])&&":n"===i.slice(1)?false!==w(v(y,U))&&x("`mapKey %s` and `unmap %s...` can not be used at the same time",M,i[0]):T(y,U)?C=true:x('The key %c"%s"',D,M,"has been mapped to another key:",R[i].length>1?"<".concat(R[i],">"):R[i]):C=true,
C&&false!==w(v(y,U))&&(R[i]=t.Dt(I),$=1);break;case"shortcut":case"command":
P||(I?!(M.startsWith("userCustomized")&&M.length>14)&&n.e.Kn.indexOf(M)<0?x('Shortcut %c"%s"',D,M,"is not a valid name"):O.has(M)&&!T(y,U-1-I.length)?x('Shortcut %c"%s"',D,M,"has been configured"):C=true:x("Lack command name and options in shortcut:",y)),
C&&(f=v(y,U-1-I.length),false!==w(f)&&(i=h(O,M,f))&&x('Shortcut %c"%s"',D,M,i));break;case"env":
P||(I?"__proto__"===M?x('Unsupported env name %c"%s"',D,M):B&&B.has(M)&&!T(y,U-1-I.length)?x('The environment name %c"%s"',D,M,"has been used"):C=true:x("Lack conditions in env declaration:",y)),
C&&(f=v(y,U-1-I.length),false!==w(f)&&(B||(B=new Map)).set(M,f));break;case"unmap":case"unmap!":
!M||I&&"#"!==I[0]?x("unmap: ".concat(I?"only ":"","needs one mapped key:"),y):S.has(M)?(s&&s.delete(M),
S.delete(M)):(b=M.charCodeAt(0))>47&&b<58||45===b?(i=M+":n")in R&&R[i]!=="c-v-"+M?x("`unmap %s...` and `mapKey <%s>` can not be used at the same time",M,i):d&&d.has(M)?"unmap!"!==H&&x('Number prefix: %c"%s"',D,M,"has been unmapped"):((d||(d=new Set)).add(M),
R[i]="c-v-"+M,$=1):"unmap!"!==H&&x('Unmap: %c"%s"',D,M,"has not been mapped");break;default:
x('Unknown mapping command: %c"%s"',D,H,"in",y)}
for(V of n.e.Kn)V.startsWith("user")||O.has(V)||(k=t.Vt(V,null))&&O.set(V,k);n.D=S,t.Et=c=O,t.Wt=l=B,n.G=n.in.m=$?R:null
},h=function(e,n,a){var o,i=1,r=(a=a&&"string"==typeof a?t.Pt(a):a)&&a.command||(i=0,n.startsWith("user")?"":n),s=r?1:0
;return s&&r in t.It&&(i&&delete a.command,
(o=t.Vt(r,a))&&e.set(n,o),s=2),s<1?'requires a "command" option':s>1?"":"gets an unknown command"},L=function(e){
var t,n,a,o,i,r=0
;for(t in e)(n=t.length)>2&&":"===t[n-2]?r|="i"===t[n-1]?2:"n"===t[n-1]?1:4:(i=(o=(a=e[t]).length>1)&&("esc"===a||"c-["===a||(a=a.slice(a.lastIndexOf("-")+1))<"f:"&&a>"f0"),
r|=n>1||o?i?40:8:t.toUpperCase()!==t&&a.toUpperCase()!==a?16:8);return r},H=function(e){
var o,c,l,p,v,b,k,f,g,T,w,h,H,x,_,I,C,N,V,$,F=a.vt(),S=null!==e,O=null!==m;for(S&&(n.H=t.Kt=m=null,y(e)),o=a.xt(n.D),
c=n.G,l=S&&u,p=s?o.filter(function(e){return!s.has(e)}):o,v=p.length,b=s?p.concat(a.xt(s)):o,s=null,
S&&(k=o.join().includes(":i>")?64:0,n.y=c?L(c)|k:k),f=0;f<b.length;f++)if(0!=(w=(T=(g=b[f]).match(r)).length-1)){
for(H=F,x=void 0,_=0;(x=H[t.Dt(T[_])])&&1!==x&&_<w;)_++,H=x
;if(x&&(f>=v||1===x))f>=v?n.D.delete(g):l&&M(T.slice(0,_+1),g);else{for(x&&l&&M(g,x);_<w;)H=H[t.Dt(T[_++])]=a.vt()
;H[t.Dt(T[w])]=1}}else{if((h=t.Dt(g))in F){if(f>=v){n.D.delete(g);continue}l&&M(g,F[h])}F[h]=1}
if(d)for(I of d)I in F&&(F["c-v-"+I]=F[I]);for(F["-"]=2,C=10;0<=--C;)F[C]=2;for(g in d=null,
S&&(m?m.length>1?(console.group(m.length+" Errors in custom Key mappings:"),m.map(function(e){
return console.log.apply(console,e)
}),console.groupEnd()):console.log.apply(console,m[0]):O&&console.log("The new key mappings have no errors")),n.H=F,
N=i._t(),V=function(e){var t,n
;for(t in e)1!==(n=e[t])?t.startsWith("v-")||V(n):(true!==N&&1===F[t]&&!(N&&N.has(t))&&(t.length<2||null==F[t+":i"])||t.startsWith("v-")&&"object"!=typeof F[t])&&delete e[t]
},F)$=F[g],g.startsWith("v-")?1===$&&delete F[g]:"object"==typeof $&&V($);e&&U(e)},M=function(e,t){
var n=[],a=function(e,t){var o,i,r;for(o of Object.entries(t))r=o[1],i=e+p(i=o[0]),1===r?n.push(i):a(i,r)}
;e="string"!=typeof e?e.map(p).join(""):e,t="string"!=typeof t?(a("",t),n.join(", ")):t.slice(e.length),
x('Inactive suffixes: %o under "%s"',t,e)},x=function(){(m||(t.Kt=m=[])).push([].slice.call(arguments,0))},
_="? showHelp <a-c> previousTab <a-s-c> nextTab d scrollPageDown <c-e> scrollDown f LinkHints.activate <f1> simBackspace <s-f1> switchFocus <f2> switchFocus <f8> enterVisualMode G scrollToBottom gf nextFrame gg scrollToTop gi focusInput gn toggleVomnibarStyle gs toggleViewSource gt nextTab gu goUp gF mainFrame gT previousTab gU goToRoot g0 firstTab g$ lastTab h scrollLeft H goBack i enterInsertMode j scrollDown J previousTab K nextTab k scrollUp l scrollRight L goForward <a-m> toggleMuteTab N performBackwardsFind n performFind <a-n> performAnotherFind o Vomnibar.activate <a-p> togglePinTab r reload R reloadGivenTab <a-r> reloadTab <a-s-r> reopenTab t createTab <a-t> createTab u scrollPageUp V enterVisualLineMode v enterVisualMode <a-v> nextTab W moveTabToNextWindow x removeTab X restoreTab yt duplicateTab yy copyCurrentUrl <c-y> scrollUp zH scrollToLeft zL scrollToRight / enterFindMode ` Marks.activate ^ visitPreviousTab [[ goPrevious ]] goNext << moveTabLeft >> moveTabRight b Vomnibar.activateBookmarks ge Vomnibar.activateUrl gE Vomnibar.activateUrlInNewTab m Marks.activateCreate p openCopiedUrlInCurrentTab yf LinkHints.activateCopyLinkUrl B Vomnibar.activateBookmarksInNewTab F LinkHints.activateOpenInNewTab O Vomnibar.activateInNewTab P openCopiedUrlInNewTab T Vomnibar.activateTabs <a-f> LinkHints.activateWithQueue yv LinkHints.activateSelect yi LinkHints.activateCopyImage",
t.It={__proto__:null,"LinkHints.activate":[2,0,0,{m:0}],"LinkHints.activateCopyImage":[2,0,0,{m:36}],
"LinkHints.activateCopyLinkText":[2,0,0,{m:40}],"LinkHints.activateCopyLinkUrl":[2,0,0,{m:42}],
"LinkHints.activateDownloadImage":[2,0,0,{m:35}],"LinkHints.activateDownloadLink":[2,0,0,{m:44}],
"LinkHints.activateEdit":[2,0,1,{m:67}],"LinkHints.activateFocus":[2,0,0,{m:34}],"LinkHints.activateHover":[2,0,0,{m:32,
showUrl:1}],"LinkHints.activateLeave":[2,0,0,{m:33}],"LinkHints.activateMode":[2,0,0,{m:0}],
"LinkHints.activateModeToCopyImage":[2,0,0,{m:36}],"LinkHints.activateModeToCopyLinkText":[2,0,0,{m:40}],
"LinkHints.activateModeToCopyLinkUrl":[2,0,0,{m:42}],"LinkHints.activateModeToDownloadImage":[2,0,0,{m:35}],
"LinkHints.activateModeToDownloadLink":[2,0,0,{m:44}],"LinkHints.activateModeToEdit":[2,0,1,{m:67}],
"LinkHints.activateModeToFocus":[2,0,1,{m:34}],"LinkHints.activateModeToHover":[2,0,0,{m:32,showUrl:1}],
"LinkHints.activateModeToLeave":[2,0,0,{m:33}],"LinkHints.activateModeToOpenImage":[2,0,0,{m:37}],
"LinkHints.activateModeToOpenIncognito":[2,0,0,{m:45}],"LinkHints.activateModeToOpenInNewForegroundTab":[2,0,0,{m:3}],
"LinkHints.activateModeToOpenInNewTab":[2,0,0,{m:2}],"LinkHints.activateModeToOpenVomnibar":[2,0,1,{m:65}],
"LinkHints.activateModeToSearchLinkText":[2,0,0,{m:38}],"LinkHints.activateModeToSelect":[2,0,0,{m:66}],
"LinkHints.activateModeToUnhover":[2,0,0,{m:33}],"LinkHints.activateModeWithQueue":[2,0,0,{m:18}],
"LinkHints.activateOpenImage":[2,0,0,{m:37}],"LinkHints.activateOpenIncognito":[2,0,0,{m:45}],
"LinkHints.activateOpenInNewForegroundTab":[2,0,0,{m:3}],"LinkHints.activateOpenInNewTab":[2,0,0,{m:2}],
"LinkHints.activateOpenVomnibar":[2,0,1,{m:65}],"LinkHints.activateSearchLinkText":[2,0,0,{m:38}],
"LinkHints.activateSelect":[2,0,0,{m:66}],"LinkHints.activateUnhover":[2,0,0,{m:33}],
"LinkHints.activateWithQueue":[2,0,0,{m:18}],"LinkHints.click":[2,0,0,{direct:true,m:0}],
"LinkHints.unhoverLast":[7,0,1,{u:true}],"Marks.activate":[3,0,0],"Marks.activateCreate":[3,0,0,{mode:"create"}],
"Marks.activateCreateMode":[3,0,0,{mode:"create"}],"Marks.activateGoto":[3,0,0],"Marks.activateGotoMode":[3,0,0],
"Marks.clearGlobal":[16,1,1],"Marks.clearLocal":[16,1,1,{local:true}],"Vomnibar.activate":[9,1,0],
"Vomnibar.activateBookmarks":[9,1,1,{mode:"bookm"}],"Vomnibar.activateBookmarksInNewTab":[9,1,1,{mode:"bookm",newtab:1
}],"Vomnibar.activateEditUrl":[9,1,0,{url:true}],"Vomnibar.activateEditUrlInNewTab":[9,1,0,{url:true,newtab:1}],
"Vomnibar.activateHistory":[9,1,1,{mode:"history"}],"Vomnibar.activateHistoryInNewTab":[9,1,1,{mode:"history",newtab:1
}],"Vomnibar.activateInNewTab":[9,1,0,{newtab:1}],"Vomnibar.activateTabs":[9,1,1,{mode:"tab",newtab:1}],
"Vomnibar.activateTabSelection":[9,1,1,{mode:"tab",newtab:1}],"Vomnibar.activateUrl":[9,1,0,{url:true}],
"Vomnibar.activateUrlInNewTab":[9,1,0,{url:true,newtab:1}],addBookmark:[11,1,0],autoCopy:[11,0,1,{copy:true}],
autoOpen:[11,0,1,{o:1}],blank:[0,1,0],clearCS:[14,1,1],clearContentSetting:[14,1,1],clearContentSettings:[14,1,1],
clearFindHistory:[15,1,1],closeDownloadBar:[47,1,1,{all:1}],closeOtherTabs:[33,1,1,{other:true}],
closeSomeOtherTabs:[33,1,0],closeTabsOnLeft:[33,1,0,{$count:-1e6}],closeTabsOnRight:[33,1,0,{$count:1e6}],
captureTab:[13,1,1],copyCurrentTitle:[17,1,1,{type:"title"}],copyCurrentUrl:[17,1,1],copyWindowInfo:[17,1,0,{
type:"window"}],createTab:[18,1,20],debugBackground:[29,1,1,{reuse:1,url:"chrome://extensions/?id=$id",id_mask:"$id",
url_mask:""}],discardTab:[19,1,0],dispatchEvent:[8,1,0],duplicateTab:[20,1,20],editText:[13,0,0],enableCSTemp:[40,1,0,{
incognito:true}],enableContentSettingTemp:[40,1,0,{incognito:true}],enterFindMode:[5,1,1,{active:true,selected:true}],
enterInsertMode:[2,1,1,{insert:true}],enterVisualLineMode:[10,1,1,{mode:"line"}],enterVisualMode:[10,1,1],
firstTab:[22,1,0,{absolute:true}],focusInput:[12,0,0],focusOrLaunch:[29,1,1,{reuse:1}],goBack:[0,0,0,{$count:-1}],
goForward:[0,0,0],goNext:[1,1,0,{sed:true}],goPrevious:[1,1,0,{sed:true,rel:"prev"}],goToRoot:[23,1,0,{}],goUp:[23,1,0,{
$count:-1,type:"frame"}],joinTabs:[24,1,0],lastTab:[22,1,0,{$count:-1,absolute:true}],mainFrame:[25,1,1],
moveTabLeft:[26,1,0,{$count:-1}],moveTabRight:[26,1,0],moveTabToIncognito:[27,1,1,{incognito:true}],
moveTabToNewWindow:[27,1,0],moveTabToNextWindow:[28,1,0],newTab:[18,1,20],nextFrame:[3,1,0],nextTab:[22,1,0],
openBookmark:[49,1,0],openCopiedUrlInCurrentTab:[29,1,1,{reuse:0,copied:true}],openCopiedUrlInNewTab:[29,1,20,{
copied:true}],openUrl:[29,1,20],parentFrame:[4,1,0],passNextKey:[9,0,0],performAnotherFind:[5,1,0,{index:"other"}],
performBackwardsFind:[5,1,0,{$count:-1}],performFind:[5,1,0],previousTab:[22,1,0,{$count:-1}],quickNext:[22,1,0],
reload:[0,0,1,{r:1}],reloadGivenTab:[30,1,0,{single:true}],reloadTab:[30,1,0],removeRightTab:[31,1,0],
removeTab:[32,1,0],reopenTab:[34,1,1],reset:[48,1,1],restoreGivenTab:[35,1,0,{one:true}],restoreTab:[35,1,25],
runKey:[36,1,0],scrollDown:[4,0,0],scrollFullPageDown:[4,0,0,{view:2}],scrollFullPageUp:[4,0,0,{dir:-1,view:2}],
scrollLeft:[4,0,0,{dir:-1,axis:"x"}],scrollPageDown:[4,0,0,{dir:.5,view:2}],scrollPageUp:[4,0,0,{dir:-.5,view:2}],
scrollPxDown:[4,0,0,{view:1}],scrollPxLeft:[4,0,0,{dir:-1,axis:"x",view:1}],scrollPxRight:[4,0,0,{axis:"x",view:1}],
scrollPxUp:[4,0,0,{dir:-1,view:1}],scrollRight:[4,0,0,{axis:"x"}],scrollSelect:[14,0,0],scrollTo:[4,0,0,{dest:"min"}],
scrollToBottom:[4,0,0,{dest:"max"}],scrollToLeft:[4,0,0,{axis:"x",dest:"min"}],scrollToRight:[4,0,0,{axis:"x",dest:"max"
}],scrollToTop:[4,0,0,{dest:"min"}],scrollUp:[4,0,0,{dir:-1}],searchAs:[11,0,1,{s:1,copied:true,selected:true}],
searchInAnother:[37,1,1],sendToExtension:[38,1,0],showHelp:[7,1,1],showHUD:[39,1,1],showTip:[39,1,1],
simBackspace:[12,0,1,{action:"backspace"}],simulateBackspace:[12,0,1,{action:"backspace"}],sortTabs:[24,1,0,{
sort:"recency",windows:"current"}],switchFocus:[12,0,1,{action:"switch"}],toggleCS:[40,1,0],
toggleContentSetting:[40,1,0],toggleLinkHintCharacters:[6,1,1,{key:"linkHintCharacters"}],toggleMuteTab:[41,1,1],
togglePinTab:[42,1,0],toggleStyle:[15,0,1],toggleSwitchTemp:[6,1,1],toggleViewSource:[43,1,1,{opener:true}],
toggleReaderMode:[43,1,1,{reader:true,reuse:0,opener:true}],toggleVomnibarStyle:[44,1,1,{style:"dark"}],
visitPreviousTab:[46,1,0],wait:[0,1,0,{wait:"count"}],zoom:[45,1,0],zoomIn:[45,1,0],zoomOut:[45,1,0,{$count:-1}],
zoomReset:[45,1,0,{reset:true}]},I={__proto__:null,newtab:2,queue:18,"cur-queue":16,"new-active":3,"newtab-active":3,
hover:32,unhover:33,leave:33,focus:34,"download-media":35,"download-image":35,image:37,"open-image":37,media:37,
search:38,"search-text":38,copy:40,"copy-text":40,"copy-list":57,"copy-url":42,"copy-url-list":59,download:44,
incognito:45,"copy-image":36,"edit-url":64,edit:65,"edit-text":65,input:67,"focus-input":67,editable:67,
"focus-editable":67,visual:66,select:66
},t.Ht=["character","word","","lineboundary","line","sentence","paragraphboundary","paragraph","documentboundary"],
t.Tt={l:1,h:0,j:9,k:8,$:7,0:6,"}":15,"{":14,")":11,"(":10,w:5,W:5,e:3,b:2,B:2,G:17,gg:16,o:20,a:-2,g:-2,aw:21,as:25,
ap:26,"a}":26,y:31,Y:32,C:33,"c-s-c":36,p:34,P:35,n:47,N:46,f1:48,"a-f1":48,v:51,V:52,c:53,"/":55,"c-e":62,"c-y":61,
"c-down":62,"c-up":61},U=function(e){var t,a="",i="".concat("#").concat("!")
;if(!m&&u&&(a="".concat(i).concat("no-check","\n")),a){t=n.Q.keyMappings,n.Q.keyMappings=void 0;try{
o.Ze("keyMappings",a+e)}catch(e){}n.Q.keyMappings=t}},2&n.Y&&(H(n.pn.keyMappings),0===n.gn&&(t.Tt["m-s-c"]=36)),
n.Q.keyMappings=function(e){var t,a,i,r,s=n.G,c=n.H;H(e),t=JSON.stringify,a=n.G,i=!!c&&t(n.H)!==t(c),
((r=s?!a||t(s)!==t(a):!!c&&!!a)||i)&&o.We({N:9,m:n.G,t:n.y,k:i?n.H:null}),r&&o.Qe({N:47,d:{m:n.G}})}});