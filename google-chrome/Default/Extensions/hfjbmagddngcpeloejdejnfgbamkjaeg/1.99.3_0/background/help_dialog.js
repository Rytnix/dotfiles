"use strict"
;__filename="background/help_dialog.js",define(["require","exports","./store","./utils","./browser","./normalize_urls"],function(e,t,n,o,a,r){
var i,s,l,c,u,d,p,g,m,b,v;Object.defineProperty(t,"__esModule",{value:true}),t.nl=t.parseHTML=void 0,i=null,l=new Map,
t.parseHTML=function(e){var t,i=51===n.bn,l=e.indexOf("</style>")+8,c=e.slice(0,l),u=e.slice(l).trim()
;return i&&i&&(c=c.replace(/contain:\s?[\w\s]+/g,"contain: none !important")),u=u.replace(/\$(\w+)/g,function(e,t){var n
;return null!==(n=s.get(t))&&void 0!==n?n:t}),t=o.gt({homePage:n.e.An,version:n.e.En,release:r.$e("vimium://release"),
reviewPage:(n.Mn?"https://microsoftedge.microsoft.com/addons/detail/aibcglbfblnogfjhbcmmpobjhnomhcdo":"https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/$id/reviews").replace("$id",function(){
return a.de.runtime.id}),webStore:s.get(n.Mn?"edgestore":"webstore"),
browserHelp:n.Mn?"https://support.microsoft.com/help/4531783/microsoft-edge-keyboard-shortcuts":"https://support.google.com/chrome/answer/157179"
}),[c,u=u.replace(/\{\{(\w+)}}/g,function(e,n){return t[n]||e})]},c=function(e,a){var r,l,c,u;return s=n.nn[1],
i&&!n.nn[0]||(i=t.parseHTML(n.nn[0]),n.nn[0]=""),r=new Map,l=!e,a=e||!!a,n.D.forEach(function(e,t){var o,a,i
;/^<v-.\w*>/.test(t)||(o=e.Jt,36===e.Qt&&e.Xt&&(o=n.P(e)||o),a=g(o),(i=r.get(a))?i.push([t,e]):r.set(a,[[t,e]]))}),
c=o.gt({title:s.get(e?"cmdList":"help")||"",tip:a&&s.get("tipClickToCopy")||"",
lbPad:a?'\n\t\t<tr><td class="HelpTd TdBottom">&#160;</td></tr>':""}),u=i[1].replace(/\{\{(\w+)}}/g,function(e,t){var n
;return null!==(n=c[t])&&void 0!==n?n:m(t,r,l,a)}),i[0]+u},t.nl=c,u=function(e,t){return e.includes(t)},d=function(e,t){
return e.startsWith(t)},p=function(e,t){return e.endsWith(t)},g=function(e){
return u(e,"Mode")&&u(e,".activate")&&(e=u(e,"ModeTo")?e.replace("ModeTo",""):e.replace("Mode","")),
p(e,"Unhover")?e=e.replace("Unhover","Leave"):p(e,"Goto")?e=e.replace("Goto",""):"clearContentSetting"===e?e="".concat(e,"s"):u(e,"CS")?e=d(e,"clear")?"clearContentSettings":e.replace("CS","ContentSetting"):u(e,"vateUrl")?e=e.replace("vateUrl","vateEditUrl"):p(e,"TabSelection")?e=e.replace("TabSelection","Tabs"):"quickNext"===e?e="nextTab":"newTab"===e?e="createTab":"closeSomeOtherTabs"===e?e="closeOtherTabs":"simBackspace"===e?e="simulateBackspace":"showHUD"===e?e="showTip":"wait"===e&&(e="blank"),
e},m=function(e,t,n,a){var r,i,c=s.get("cmdParams")||" (use *)",u="",d=v[e],p=function(e){
var i,p,g,m,v,T,k,w,$,f=d[e],h=t.get(f);if(n&&!h)return r=e,"continue";if((i=e<d.length-1&&1===d[e+1])&&e++,
g="$"===(p=e<d.length-1?d[e+1]:"a")[0]?(e++,
p.slice(1)):"",m=-2,v="",(T=l.get(f))||(T=[s.get(f).replace("<","&lt;").replace(">","&gt;"),g?c.replace("*",function(){
return g}):" "],l.set(f,T)),h&&h.length>0){for(v='\n\t\t<span class="HelpKey">',k=0;k<h.length;k++){
if(m>42&&k<h.length-1){v+="</span>\n\t<span>+ ".concat(h.length-k," \u2026");break}
m>=0&&(v+='</span> <span class="HelpKey">'),v+=o.ht((w=h[k])[0]),m+=w[0].length+2}v+="</span>\n\t"}$=a?T[0]+T[1]:T[0],
m<=12?u+=b(i,v,$,a?f:""):(u+=b(i,v,"",""),u+=b(i,"",$,a?f:"")),r=e};for(i=0;i<d.length;i++)p(i),i=r;return u},
b=function(e,t,n,o){var a=e?'<tr class="HelpAdv">\n\t':"<tr>\n\t";return n?(a+='<td class="HelpTd HelpKeys">',a+=t,
a+='</td>\n\t<td class="HelpTd HelpCommandInfo">',a+=n,o&&(a+='<span class="HelpCommandName" role="button">(',a+=o,
a+=")</span>\n\t")):(a+='<td class="HelpTd HelpKeys HelpLongKeys" colspan="2">',a+=t),a+"</td>\n</tr>\n"},(v={
__proto__:null,
pageNavigation:["LinkHints.activate",'$button=""/right, touch=false/true/"auto"',"LinkHints.activateOpenInNewTab","LinkHints.activateOpenInNewForegroundTab","LinkHints.activateWithQueue","scrollDown","$keepHover=true|false|auto|never","scrollUp","$keepHover=true|false|auto|never","scrollLeft","scrollRight","scrollToTop","scrollToBottom","scrollToLeft",1,"scrollToRight",1,"scrollPageDown","scrollPageUp","scrollPxDown",1,"scrollPxUp",1,"scrollPxLeft",1,"scrollPxRight",1,"scrollFullPageDown","scrollFullPageUp","scrollSelect",1,'$dir=down|up, position=""|begin|end',"reload","$hard","reloadTab","reloadGivenTab",1,"$hard, bypassCache","zoom","$in, out, reset","zoomIn",1,"zoomOut",1,"zoomReset",1,"toggleViewSource",1,"copyCurrentUrl","$type=url/title/frame, decoded","copyCurrentTitle","switchFocus",'$flash, select=""/all/all-line/start/end',"focusInput",'$keep, select=""/all/all-line/start/end',"LinkHints.activateCopyLinkUrl","LinkHints.activateCopyLinkText","$join:boolean/string","openCopiedUrlInCurrentTab","openCopiedUrlInNewTab","goUp","$trailingSlash=null/true/false","goToRoot","LinkHints.activateCopyImage",1,"$richText=safe","LinkHints.activateDownloadImage",1,"LinkHints.activateOpenImage",1,"$auto=true","LinkHints.activateDownloadLink",1,"LinkHints.activateOpenIncognito",1,"LinkHints.activateFocus","LinkHints.activateHover",1,"$showUrl=true","LinkHints.activateLeave",1,"LinkHints.unhoverLast",1,"LinkHints.activateSearchLinkText","LinkHints.activateEdit","LinkHints.activateSelect","$visual=true, caret, then:{}","LinkHints.click","$direct=true|element|sel|focus|click|sel,focus,click","simulateBackspace","dispatchEvent",1,'$key="key,keyCode,code",init:{}',"goNext","$sed=true, patterns:string, rel:string, noRel, isNext","goPrevious","nextFrame","mainFrame","parentFrame","enterInsertMode","$key:string, unhover, reset","enterVisualMode","enterVisualLineMode","Marks.activateCreate","$swap","Marks.activate","$prefix=true, swap, mapKey","Marks.clearLocal",1,"Marks.clearGlobal",1,"openUrl","$url:string, urls:string[], reuse=newFg/current/newBg/reuse, incognito, window, position","focusOrLaunch",1,"$url:string, prefix"],
vomnibarCommands:["Vomnibar.activate",'$keyword="", url:boolean/string',"Vomnibar.activateInNewTab","$keyword, url","Vomnibar.activateBookmarks","Vomnibar.activateBookmarksInNewTab","Vomnibar.activateHistory","Vomnibar.activateHistoryInNewTab","Vomnibar.activateTabs","Vomnibar.activateEditUrl",1,"Vomnibar.activateEditUrlInNewTab",1,"LinkHints.activateOpenVomnibar","$url, newtab, then:{}","toggleVomnibarStyle",1,"$style=dark, current"],
historyNavigation:["goBack","$reuse=current/newBg/newFg","goForward","reopenTab",1],
findCommands:["enterFindMode","$last, selected=true","performFind","performBackwardsFind","performAnotherFind","clearFindHistory",1],
tabManipulation:["nextTab","previousTab","firstTab","lastTab","createTab","duplicateTab","removeTab",'$keepWindow=""/always, mayClose, goto=""/left/right/previous',"removeRightTab",1,"restoreTab","restoreGivenTab",1,"discardTab",1,"moveTabToNextWindow",1,"$last, position, right=true, tabs","moveTabToNewWindow",1,"$limited=null/true/false","moveTabToIncognito",1,"joinTabs","sortTabs","$sort=recency|createTime","togglePinTab","toggleMuteTab","$all, other","visitPreviousTab","$acrossWindows, onlyActive","closeTabsOnLeft",1,"$$count=0","closeTabsOnRight",1,"$$count=0","closeOtherTabs",1,'$filter=""/url/url+hash/url+title',"moveTabLeft",1,"$group=true","moveTabRight",1,"$group=true","toggleContentSetting",1,"$type=images","enableContentSettingTemp",1,"clearContentSettings",1,"copyWindowInfo",1,'$format="${title}: ${url}", join:true/string, decoded',"captureTab"],
misc:["showHelp","autoCopy","$text: string, url, decoded","autoOpen","searchAs","$copied=true, selected=true","searchInAnother","$keyword, reuse=current/newFg/newBg/reuse","showTip","$text:string","openBookmark","$title, path","addBookmark",1,"$folder:string","toggleStyle",1,"$id/selector:string, css: string","toggleLinkHintCharacters",1,"$value:string","editText",1,"$run:string, dom=false","toggleSwitchTemp",1,"$key:string, [value:any]","passNextKey",1,"$expect:string, normal","debugBackground",1,"reset",1,"runKey",1,"$expect:Envs, keys:KeySequence[]|string","sendToExtension",1,"$id:string, data:any, raw","blank",1]
}).misc.push("closeDownloadBar"),n.Mn&&v.tabManipulation.push("toggleReaderMode",1)});