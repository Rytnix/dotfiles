"use strict"
;__filename="background/settings.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports"],function(e,o,t,a,n,s,c,i){
var r,l,h,u,m,w,p,b,g,d,f,k,v,y;Object.defineProperty(o,"__esModule",{value:true}),
o.Le=o.Ge=o.Ne=o.Je=o.Ye=o.Ke=o.Qe=o.We=o.Ve=o.Xe=o.Ze=o.eo=o.oo=o.to=o.ao=void 0,r=null,l=null,o.ao=0,
o.to=localStorage,o.oo=n.de.storage.local,o.eo=Promise.all([0,n.ee(n.de.runtime.getPlatformInfo).then(function(e){
var o=e.os.toLowerCase(),a=n.de.runtime.PlatformOs,s=o===a.WIN?2:o===a.MAC?0:1;t.e.Un=o,t.in.o=t.cn.o=s,t.gn=s
}),n.ee(o.oo.get.bind(o.oo)).then(function(e){var a,n,s,c,i,r,l,h,u=t.pn;for(a of(Object.assign(u,o.Je),e=e||{},
Object.entries(e)))a[0]in o.Je?u[a[0]]=a[1]:t._n.set(a[0],a[1]+"");if(n=0,o.to)for(n=o.to.length,
s=0;s<n;s++)c=o.to.key(s),
i=o.to.getItem(c),c in o.Je?(l="string"==typeof(r=o.Je[c])?i:false===r||true===r?"true"===i:JSON.parse(i),
u[c]=l):t._n.set(c,i);return h=n+Object.keys(e).length,t.hn=0===h,h})]).then(function(e){
for(var a in 260===t.pn.keyLayout&&(o.ao|=1,w()),o.Ge)o.Ye(o.Ge[a],t.pn[a],t.cn);return t.cn.g=t.pn.grabBackFocus,
t.in.l=t.cn.l,t.Y=2|t.Y,e[2]}),o.eo.then(function(){t.X&&t.X()}),h=function(e,n){var s,c,i;if(t.pn[e]=n,l||(l=a.vt(),
setTimeout(u,0)),s=o.Je[e],o.to.removeItem(e),l[e]=c=n!==s?n:null,t.b(e,c),e in o.Ge&&o.Ye(o.Ge[e],n,t.cn),
i=t.Q[e])return i(n,e)},o.Ze=h,o.Xe=function(e,o){var n=t._n.get(e);(void 0!==n?n:null)!==o&&(l||(l=a.vt(),
setTimeout(u,0)),l[e]=o,null!==o?t._n.set(e,o):t._n.delete(e))},u=function(){var e,t,a=l,n=[];for(e of(l=null,
Object.entries(a)))t=e[0],null===e[1]&&(n.push(t),delete a[t]);o.oo.remove(n),o.oo.set(a)},o.Ve=function(e,o){
return t.Q[e](void 0!==o?o:t.pn[e],e)},o.We=function(e){if(6!==e.N)m(e);else if(null==e.d.length)m(e);else{var o=e.d
;r?o=o.concat(r):a.nt(m.bind(null,e)),r=o,e.d=null}},m=function(e){var o,a,n;if(6===e.N&&!e.d){for(n of(o=r,a=e.d={},
o))a[n]=t.cn[n];r=null}i.no(function(o){for(var t of o.so)t.postMessage(e)})},o.Qe=function(e){
a.Zn(t.A.slice(0),function(o){return t.A.includes(o)&&o.postMessage(e),1})},w=function(){
var e=t._n.get(o.Le[0]),a=t._n.get(o.Le[1]),n=t._n.get(o.Le[2]),s=260
;return void 0!==e||void 0!==a||void 0!==n?(s=null==e?4:"2"===e||"true"===e?1:"1"===e?12:4,
s|=null==a||1===s?0:"2"===a||"true"===a?16:"1"===a?512:0,s|=null==n?0:"2"===n?128:"1"===n?64:0,o.ao|=2):o.ao&=-3,
t.pn.keyLayout=s},p=function(e){var a,n;e<3&&1&o.ao&&(a=t.cn.l,n=w(),o.Ye("l",n,t.cn)!==a&&o.Ve("keyLayout",n))},o.Ke=p,
o.Ye=function(e,o,a){switch(e){case"c":case"n":o=o.toLowerCase().toUpperCase();break;case"l":o=255&o|(512&o&&!t.gn?16:0)
;break;case"d":o=o?" D":""}return a?a[e]=o:o},Object.assign(t.Q,{extAllowList:function(e){var o,a,n,s=t.Z
;if(s.forEach(function(e,o){false!==e&&s.delete(o)}),e)for(a=(o=e.split("\n")).length,
n=/^[\da-z_]/i;0<=--a;)(e=o[a].trim())&&n.test(e)&&s.set(e,true)},grabBackFocus:function(e){t.cn.g=e},
keyLayout:function(e){var a,n,s;if(t.in.l=t.cn.l,o.Qe({N:47,d:{l:t.cn.l}}),1&o.ao&&!(256&e))for(a=2&o.ao,o.ao&=-4,n=0,
s=a?3:0;n<s;n++)o.Xe(o.Le[n],null),t.b(o.Le[n],null)},newTabUrl:function(e){
e=/^\/?pages\/[a-z]+.html\b/i.test(e)?n.de.runtime.getURL(e):n.te(s.$e(e)),t.newTabUrl_f=e,o.Xe("newTabUrl_f",e)},
searchEngines:function(){
t.mn.map.clear(),t.mn.keywords=null,t.mn.rules=c.je("~:"+t.pn.searchUrl+"\n"+t.pn.searchEngines,t.mn.map).reverse()},
searchUrl:function(e){var a=t.mn.map;if(e)c.je("~:"+e,a);else if(a.clear(),a.set("~",{Fe:"~",j:"",
ye:t.pn.searchUrl.split(" ",1)[0]}),t.mn.rules=[],t.newTabUrl_f=t._n.get("newTabUrl_f")||"",t.newTabUrl_f)return
;o.Ve("newTabUrl")},vomnibarPage:function(e){var a=t._n.get("vomnibarPage_f")
;!a||e?((e=e?n.te(e):t.pn.vomnibarPage)===o.Je.vomnibarPage?e=t.e.Wn:e.startsWith("front/")?e=n.de.runtime.getURL(e):(e=s.$e(e),
e=s.ve(e),e=t.bn<50&&!e.startsWith(t.e.Gn)?t.e.Wn:e.replace(":version","".concat(parseFloat(t.e.qn)))),
t.vomnibarPage_f=e,o.Xe("vomnibarPage_f",e)):t.vomnibarPage_f=a}}),o.Je={__proto__:null,allBrowserUrls:false,
autoDarkMode:2,autoReduceMotion:2,
clipSub:"p=^git@([^/:]+):=https://$1/=\ns@^https://(?:www\\.)?google\\.com(?:\\.[^/]+)?/url\\?(?:[^&#]+&)*?url=([^&#]+)@$1@,matched,decodecomp\np@^https://item\\.m\\.jd\\.com/product/(\\d+)\\.html\\b@https://item.jd.com/$1.html@",
exclusionListenHash:true,exclusionOnlyFirstMatch:false,exclusionRules:[{pattern:":https://mail.google.com/",passKeys:""
}],
extAllowList:"# modified versions of X New Tab and PDF Viewer,\n# NewTab Adapter, and Shortcuts Forwarding Tool\nhdnehngglnbnehkfcidabjckinphnief\nnacjakoppgmdcpemlfnfegmlhipddanj\ncglpcedifkgalfdklahhcchnjepcckfn\nclnalilglegcjmlgenoppklmfppddien\n# EdgeTranslate\nbocbaocobfecmglnmeaeppambideimao\nbfdogplmndidlpjfhoijckpakkdjkkil\n# SalaDict\ncdonnmffkdaoajfknoeeecmchibpmkmg\nidghocbbahafpfhjnfhpbfbmpegphmmp",
filterLinkHints:false,grabBackFocus:false,hideHud:false,keyLayout:260,keyboard:[560,33],keyupTime:120,keyMappings:"",
linkHintCharacters:"sadjklewcmpgh",linkHintNumbers:"0123456789",localeEncoding:"gbk",mouseReachable:true,newTabUrl:"",
nextPatterns:"\u4e0b\u4e00\u5c01,\u4e0b\u9875,\u4e0b\u4e00\u9875,\u4e0b\u4e00\u7ae0,\u540e\u4e00\u9875,\u4e0b\u4e00\u5f20,next,more,newer,>,\u203a,\u2192,\xbb,\u226b,>>",
omniBlockList:"",passEsc:"[aria-controls],[role=combobox],#kw.s_ipt",
previousPatterns:"\u4e0a\u4e00\u5c01,\u4e0a\u9875,\u4e0a\u4e00\u9875,\u4e0a\u4e00\u7ae0,\u524d\u4e00\u9875,\u4e0a\u4e00\u5f20,prev,previous,back,older,<,\u2039,\u2190,\xab,\u226a,<<",
regexFindMode:false,scrollStepSize:100,
searchUrl:navigator.language.startsWith("zh")?"https://www.baidu.com/s?ie=utf-8&wd=%s \u767e\u5ea6":"https://www.google.com/search?q=%s Google",
searchEngines:navigator.language.startsWith("zh")?"b|ba|baidu|Baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\nbi: https://www.bing.com/search?q=$s\nbi|bing|Bing|\u5fc5\u5e94: https://cn.bing.com/search?q=%s \\\n  blank=https://cn.bing.com/ \u5fc5\u5e94\ng|go|gg|google|Google|\u8c37\u6b4c: https://www.google.com/search?q=%s\\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\nb.m|bm|map|b.map|bmap|\u5730\u56fe|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\\\n  blank=https://map.baidu.com/\ngd|gaode|\u9ad8\u5fb7\u5730\u56fe: https://www.gaode.com/search?query=%s \\\n  blank=https://www.gaode.com\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps \u8c37\u6b4c\u5730\u56fe\nbili|bilibili|bz|Bili: https://search.bilibili.com/all?keyword=%s \\\n  blank=https://www.bilibili.com/ \u54d4\u54e9\u54d4\u54e9\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\n\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\nb.x|b.xs|bx|bxs|bxueshu: https://xueshu.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://xueshu.baidu.com/ \u767e\u5ea6\u5b66\u672f\ngs|g.s|gscholar|g.x|gx|gxs: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ \u8c37\u6b4c\u5b66\u672f\n\nt|tb|taobao|ali|\u6dd8\u5b9d: https://s.taobao.com/search?ie=utf8&q=%s \\\n  blank=https://www.taobao.com/ \u6dd8\u5b9d\nj|jd|jingdong|\u4eac\u4e1c: https://search.jd.com/Search?enc=utf-8&keyword=%s\\\n  blank=https://jd.com/ \u4eac\u4e1c\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ \u4e9a\u9a6c\u900a\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= \u8ba1\u7b97\u5668\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub \u4ed3\u5e93\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript":"bi: https://cn.bing.com/search?q=$s\nbi|bing: https://www.bing.com/search?q=%s \\\n  blank=https://www.bing.com/ Bing\nb|ba|baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\ng|go|gg|google|Google: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps Google Maps\nb.m|bm|map|b.map|bmap|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\ng.s|gs|gscholar: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ Google Scholar\n\na|ae|ali|alie|aliexp: https://www.aliexpress.com/wholesale?SearchText=%s \\\n  blank=https://www.aliexpress.com/ AliExpress\nj|jd|jb|joy|joybuy: https://www.joybuy.com/search?keywords=%s \\\n  blank=https://www.joybuy.com/ Joybuy\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ Amazon\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= Calculate\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub Repo\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript",
showActionIcon:true,showAdvancedCommands:true,showAdvancedOptions:true,showInIncognito:false,notifyUpdate:true,
smoothScroll:true,vomnibarOptions:{actions:"",maxMatches:10,queryInterval:333,sizes:"77,3,44,0.8",styles:"mono-url"},
userDefinedCss:"",vimSync:null,vomnibarPage:"front/vomnibar.html",waitForEnter:true},o.Ne=["showAdvancedCommands"],
o.Ge={__proto__:null,filterLinkHints:"f",keyLayout:"l",keyboard:"k",keyupTime:"u",linkHintCharacters:"c",
linkHintNumbers:"n",mouseReachable:"e",passEsc:"p",regexFindMode:"r",smoothScroll:"s",scrollStepSize:"t",
waitForEnter:"w"},o.Le=["ignoreKeyboardLayout","ignoreCapsLock","mapModifier"],t.Y<6&&(b=n.de.runtime.getManifest(),
g=location.origin,d=g+"/",f=b.content_scripts[0].js,k=t.e,v=t.$,y=function(e){
return(47===e.charCodeAt(0)?g:e.startsWith(d)?"":d)+e},o.Je.newTabUrl=t.Mn?"edge://newtab":"chrome://newtab",
v.set("about:newtab",1),v.set("about:newtab/",1),v.set("chrome://newtab",1),v.set("chrome://newtab/",1),
t.Mn&&(v.set("edge://newtab",1),v.set("edge://newtab/",1)),v.set("chrome://new-tab-page",2),
v.set("chrome://new-tab-page/",2),k.Kn=Object.keys(b.commands||{}).map(function(e){return"quickNext"===e?"nextTab":e}),
k.qn=b.version,k.En=b.version_name||b.version,k.Ln=y(b.options_page||k.Ln),k.Qn=y(k.Qn),k.Wn=y(o.Je.vomnibarPage),
k.Yn=y(k.Xn),k.An=b.homepage_url||k.An,k.Fn=y(k.Fn),k.Jn=y(k.Jn),f.push("content/injected_end.js"),k.Tn=f.map(y))});