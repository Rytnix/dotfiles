"use strict";"object"==typeof VApi&&VApi&&"function"==typeof VApi.d&&VApi.d(1);var e=e||"",t=t||"",n={g:0,y:function(e){var t,o,i,a,u,l,c,s,f,d,m;return r.T(e),(t=n).I.o=(e.mode||"")+""||"omni",t.I.t=0,t.M(2,!!e.currentWindow),t.M(4,(e.preferTabs||"").includes("new")),t.M(128,"from-start"===e.tree),t.M(8,!!e.tree),t.M(16,null),t.M(32,null),t.M(256,!!e.noTabs),t.M(512,!!e.hiddenTabs),t.M(2048,!!e.incognitoTabs),t.S=e.incognito,t.M(1024,!!e.noSessions),(o=e.engines)instanceof Array&&(o=o.join()),"string"==typeof o&&o&&(o=(o.includes("bookmark")?1:0)+(o.includes("history")?2:0)+(o.includes("tab")?4:0)+(o.includes("search")?8:0)+(o.includes("domain")?16:0)),t.I.e=0|(o||0),t.I.e&&(t.I.o="omni"),t.x=!!e.icase,t.E=!!e.newtab,t.A=e.autoSelect,t.C=e.position,t.R=false===e.searchInput,t.O=null,t.L="start"===e.noSessions,a=e.itemSedKeys||null,t.U="object"==typeof(i=e.sed)&&i||{r:i,k:e.sedKeys||e.sedKey},t.F=a?{r:true,k:a+""}:null,t.K=e.itemKeyword||null,t.$=e.clickLike,t.W=!!e.activeOnCtrl,u=e.url,l=e.keyword,c=e.p,f=devicePixelRatio,d=t.B=f<.98?1/f:1,t.P((e.w*t.V+24*e.z)/f),t.I.r=Math.max(3,Math.min(0|(e.h/d/f-t.D-78)/t.Q,t.G)),t.Z&&t.Z(e.t),t.J.zoom=d>1?d+"":"",t.I.i&&(t.X='" style="background-image: url(&quot;chrome://favicon/size/16@'+(f=1===f?1:f<3?2:f<3.5?3:4)+"x/"),l=(l||"")+"",null==u?t.Y(l&&l+" "):(c?(s=c.s,u=c.u,l||(l=c.k)):null===c?(u=r.ee(u).replace(/\s$/g,"%20"),!l&&/^https?:\/\//i.test(u)&&(t.O=115==(32|u.charCodeAt(4)),u=u.slice(t.O?0:7,u.indexOf("/",8)===u.length-1?-1:void 0))):(m=u.trimRight().length!==u.length,u=r.ee(u,decodeURIComponent),u=(m?u:u.trim()).replace(t.te," ")),!l||c&&c.c?t.Y(u):t.Y(l+" "+u,s=(s||0)+l.length+1,s+u.length))},ne:false,S:null,re:"",oe:"",ie:true,ae:0,ue:null,le:0,ce:Math.min(Math.max(3,0|window.VomnibarMaxPageNum||10),100),se:false,fe:null,C:null,O:null,de:null,me:false,_e:-1,pe:0,ve:0,he:"",ge:false,we:false,ye:0,be:false,ke:0,E:false,A:false,R:false,L:false,$:null,W:false,Te:0,Ie:false,B:1,Me:0,Se:0,xe:null,Ee:null,J:null,Ae:null,Ce:null,He:null,Ne:true,Re:0,Oe:0,Le:null,Ue:null,Fe:null,Ke:null,qe:null,$e:-1,je:0,We:0,Be:0,Pe:0,Ve:0,De:0,ze:1,Qe:998,Ge:false,Ze:2,x:false,Je:null,Xe:0,G:0,Ye:0,et:77,D:80,Q:44,V:.8,tt:"",nt:null,rt:null,ot:{passive:false,capture:true},U:null,F:null,K:null,it:0,at:function(){var e=n;e.we=true,setTimeout(e.ut,0),document.body.addEventListener("wheel",e.lt,e.ot)},ct:function(e){var t=n,r=t.Ee;t.ne=t.we=t.se=t.be=false,t.L=false,t.fe=t.xe=null,t.ye=t.ke=t.ae=0,document.body.removeEventListener("wheel",t.lt,t.ot),t.We>0&&clearTimeout(t.We),window.onkeyup=null,removeEventListener("keyup",t.st,true),e||o&&o.ft({H:10,t:2,o:!t.Ke,k:t.Re}),t.J.cssText="",t.Ae.display="none",t.Le.textContent=r.value="",t.Le.style.height="",t.He.remove("empty"),t.Le.classList.remove("no-favicon"),t.st(0),t.je=requestAnimationFrame(t.Ke?function(){t.je=requestAnimationFrame(t.dt)}:t.dt),t.We=setTimeout(t.dt,t.Ke?35:17)},dt:function(){var e=n;e.je&&cancelAnimationFrame(e.je),e.We&&clearTimeout(e.We),e.je=e.We=0,e.Se&&e.mt()},mt:function(){var e;o&&o._t({N:0}),(e=n).We=e.Se=e.pe=e.ve=e.Pe=e.Ve=e._e=e.ae=e.le=e.Re=e.De=r.pt=0,e.B=1,e.$=e.F=e.K=e.U=e.S=e.ue=e.Ue=e.de=e.O=null,e.I.q=e.oe=e.re=e.he="",e.I.o="omni",e.I.t=0,e.me=e.W=false,e.Ke&&o?setTimeout(e.Ke[0],0):/a?/.test(""),e.Ke=null},Y:function(e,t,r){var o=n;/^\+\d\d?$/.test(e.trim())&&(t=r=0,e=" "+e.trim()),o.re=e,o.ie=o.we=false,o.de=o.O,o.I.q=o.oe=e&&e.trim().replace(o.te," "),o.Se=0,o.dt(),o.ne=true,o.vt(0),o.ht&&o.ht(),o.Ee.value=o.re,t<=r&&o.Ee.setSelectionRange(t,r)},ut:function(e){var t=n;if(!t.we)return t.ye=0,void(t.be=false);t.ye=performance.now(),t.be=false,false!==e?(window.focus(),t.Ee.focus(),t.be&&t.ge||(e=e?0|e:0)<5&&setTimeout(t.ut,33,e+1)):o.ft({H:10,t:2,k:t.Re})},vt:function(e,t){var r=n;if(r.Ue=t||null,e>=0){if(r.fe=null,r.We>0&&clearTimeout(r.We),0===e)return r.gt()}else{if(r.We>0)return;e=r.Ye}r.We=setTimeout(r.wt,e)},yt:function(){var e,t,i,a,u,l,c,s,f=n,d=f.ge,m=f.ke;return f.Ne=false,-1===f.$e?(f.de=f.O,f.se=false,f.Ee.value=f.re,!(e=f.bt.exec(f.re))||f.ue.length&&"search"===f.ue[0].e||f.Ee.setSelectionRange(t=f.re.length-e[0].length,t),void(d||(f.ut(),f.ke=m))):(m&&d&&f.Ee.blur(),(i=f.ue[f.$e]).kt?f.Tt(i,i.kt):(null==i.It&&(i.It=i.u.startsWith("https://")),"history"===i.e||"tab"===i.e||"search"===i.e&&f.I.q.startsWith(":")?(a=!i.t,u=i.u,l=r.Mt(i),s=(c=a||!/[^\x00-\x7f]/.test(i.t))?u:r.ee(u,decodeURIComponent),!c&&s.length===u.length&&u.includes("%")&&(s=i.t,l&&(s=s.lastIndexOf("://",5)<0?(7===l?"http://":"https://")+s:s,s=u.endsWith("/")&&!s.endsWith("/")?s+"/":s)),void o.ft({H:3,i:f.$e,u:s})):(null==i.kt&&(r.Mt(i),i.kt=""),f.Tt(i,i.t),void("math"===i.e&&!m&&f.Ee.select()))))},kt:function(e){var t=e.i,r=e.s,o=n.ue[t];if(o.kt=r?(n.I.o.endsWith("omni")&&!n.he?"":":o ")+r.k+" "+r.u+" ":n.he+o.t,t===n.$e)return n.Tt(o,o.kt)},St:function(){var e,t,r=n;if(!(r.$e<0))return r.Ne?(r.re=r.Ee.value,r.yt()):(e=r.ue[r.$e],t=r.Ee.value.trim(),r.he&&(t=t.slice(r.he.length)),r.Tt(e,t=t===(e.title||e.u)?e.kt||r.he+(e.title===e.t?e.u:e.t):r.he+(e.title&&t===e.u?e.title:t===e.t?e.u:e.t)))},Tt:function(e,t){var r=10*t.length,o=r>innerWidth-84;n.Ee.value!==t&&(n.Ee.value=t,"domain"===e.e&&n.Ee.select()),o&&(n.Ee.scrollLeft=r),n.de=e.It&&t===e.t,n.se=t!==e.kt||e.kt===e.t},xt:function(e){var t=n,r=t.Le.children,o=t.$e;(t.Ne||-1===o)&&(t.re=t.Ee.value),t.$e=e,t.yt(),o>=1&&r[o-1].classList.remove("p"),o>=0&&r[o].classList.remove("s"),e>=1&&r[e-1].classList.add("p"),e>=0&&r[e].classList.add("s")},Et:["space","pageup","pagedown","end","home","left","up","right","down","","","","","insert","delete"],At:["Semicolon","Equal","Comma","Minus","Period","Slash","Backquote","BracketLeft","Backslash","BracketRight","Quote","IntlBackslash"],Ct:{Alt:1,AltGraph:1,Control:1,Meta:1,OS:1,Shift:1},Ht:185,Nt:function(e){var t,r=e.keyCode;return r>31&&r<47?n.Et[r-32]:r<47||91===r||93===r&&0===n.Ze?8===r?"backspace":27===r?"esc":9===r?"tab":13===r?"enter":(r<19?r>15:r>90)&&n.Xe>63&&n.Xe>>6===e.location?"modifier":18===r?"alt":"":93===r&&7?"contextmenu":((t=e.key)?/^F\d/.test(t):r>111&&r<132)?"f"+(t?t.slice(1):r-111):""},Rt:function(e,t){var r=e.keyIdentifier,o=r.startsWith("U+")?parseInt(r.slice(2),16):0;return o<91?o<33?"":t&&o>47&&o<58?")!@#$%^&*("[o-48]:String.fromCharCode(o<65||t?o:o+32):o>n.Ht&&(o-=186)<7||(o-=26)>6&&o<11?";=,-./`[\\]'\\:+<_>?~{|}\"|"[o+12*+t]:""},Ot:function(e){var t,r,o,i=e.shiftKey,a=e.key,u="Dead"===a||"Unidentified"===a,l=e.code;return a?(1&n.Xe||8&n.Xe&&e.altKey||u||a>"~"&&1===a.length?(t=l.slice(0,3),r=a.length<2||u,o=void 0,"Num"!==t&&("Key"!==t&&"Dig"!==t&&"Arr"!==t||(l=l.slice(l<"K"?5:3)),a=1===l.length&&r?!i||l<"0"||l>"9"?l:")!@#$%^&*("[+l]:n.Ct[a]?n.Xe>63&&n.Xe>>6===e.location?"modifier":"Alt"===a?a:"":"Escape"===a?"esc":l.length<2||!r?a.startsWith("Arrow")&&a.slice(5)||a:(o=n.At.indexOf(l))<0?l:";=,-./`[\\]'\\:+<_>?~{|}\"|"[o+12*+i]),a=i&&a.length<2?a:a.toLowerCase()):a=a.length>1||" "===a?n.Nt(e):i?a.toUpperCase():a.toLowerCase(),a):n.Nt(e)||n.Rt(e,+i)},Lt:0,Ut:function(e){var t,r,o,i,a,u=n.Ot(e),l=u;return u&&(r="".concat(e.altKey?"a-":"").concat(e.ctrlKey?"c-":"").concat(e.metaKey?"m-":""),o=u.toLowerCase(),i=u.length>1,a=e.shiftKey&&(i||r&&u.toUpperCase()!==o)?r+"s-":r,l=i||a?a+o:u,n.Je&&(t=(t=n.Je[l+":o"]||n.Je[l])||(!i&&(t=n.Je[o])&&t.length<2&&(r=t.toUpperCase())!==t?a?a+t:u===o?t:r:""))),t?{mapped:true,key:t}:{mapped:false,key:l}},Ft:{space:9,b:10,j:8,k:6,n:8,p:6,"[":1,"]":9,up:10,down:11,tab:6,delete:12},Kt:{tab:8,esc:1,pageup:10,pagedown:11,up:6,down:8,f1:4,f2:5},qt:function(e){var t,i,a,u,l=n,c=e.keyCode,s=l.ge,f=229!==c?l.Ut(e):{mapped:false,key:""},d=f.mapped,m=f.key;if(l.Re=c,!m)return l.Be&&!l.Ct[e.key||""]&&l.st(0),void(l.Oe=!s||93===c&&l.Ze||229===c?0:1);if(m.startsWith("v-"))return o.ft({H:37,k:"<".concat(m,">"),l:c,e:s?[l.Ee.localName,l.Ee.id,l.Ee.className]:["body","",""]}),void(l.Be&&l.st(0));if(t=0,a=m.slice(m.lastIndexOf("-")+1)||m&&"-","a"===(u=m.includes("-",1)?m[0]:"")){if("a-alt"===m||"a-modifier"===m)return l.Be||addEventListener("keyup",l.st,true),l.Be=l.Be||setTimeout(l.st,260,-1),void(l.Be<0&&!e.repeat&&l.st(0));if("down"===a||"up"===a||/^[jknp]$/.test(a))return l.$t(a<"o"&&"k"!==a?8:6);l.Be&&l.st(0)}if(u&&u<"s"&&s){if(!("left"!==a&&"right"!==a||l.Ze&&m.includes("m-")))return t=(m.includes("s-")?a>"r"?71:72:a>"r"?70:66)-64,void(d||u!==(l.Ze?"c":"a")?l.jt(t):(r.Wt(l.jt.bind(0,t,true)),l.Oe=1));if("backspace"===a)return void(u>"a"||!l.Ze&&!m.includes("a-c-")?l.jt(u<"m"?-1:m.includes("s-")?-3:-2):l.Ze<2||m.includes("a-c-")||1===l.ze&&l.Qe<81||0?document.execCommand(m.includes("s-")?"redo":"undo"):l.Oe=1)}if("a"===u||"m"===u){if("f2"===a)return l.$t(s?3:2);if(a>="0"&&a<="9"&&(l.Ze||/[cm]-/.test(m)))return void((i=+a||10)<=l.ue.length&&l.Bt(true,i-1));if(s&&1===a.length&&a>"a"&&a<"g"&&"c"!==a)return l.jt(a.charCodeAt(0)-96);if("a"===u&&"enter"!==a)return void(l.Oe=0)}if("enter"!==a){if("c"===u||"m"===u)if("c"===a)t=l.$e>=0&&"Range"!==getSelection().type&&l.Ee.selectionStart===l.Ee.selectionEnd?m.includes("s")?16:13:0;else if(m.includes("s-"))t="f"===a?11:"b"===a?10:0;else{if("up"===a||"down"===a||"end"===a||"home"===a)return e.preventDefault(),l.Me=e.timeStamp,window.onkeyup=n.Pt,void o._t({N:6,k:m,b:a});"delete"===a||"tab"===a?l.Oe=1:t="["===a?1:"]"===a?9:l.Ft[a]||0}else if("s"===u)t=l.Ft[a]||0;else if(t=l.Kt[a]||0);else{if(a>"f0"&&a<"f:")return void(l.Oe=0);if(!s||"home"!==a&&"end"!==a){if(8===c)return void(s&&(l.Oe=1));if("space"!==a);else if(s){if(!d&&(l.$e>=0||l.ue.length<=1)&&l.Ee.value.endsWith("  "))return l.Bt(true)}else t=2}else t=a>"h"?14:15}if(t)return l.$t(t);s||1!==a.length||isNaN(i=parseInt(a,10))?l.Oe=(s?!(93===c&&l.Ze):m.length>1)?1:0:(i=i||10)<=l.ue.length&&l.Bt(m,i-1)}else"Enter"===e.key||13===c?window.onkeyup=l.Vt.bind(null,m,d):l.Bt(m)},$t:function(e){var t,i,a,u,l,c,s=n;switch(e){case 1:if("Range"!==getSelection().type||!s.ge)return s.ct();(i=s.Ee).setSelectionRange(t="backward"!==i.selectionDirection&&i.selectionEnd<i.value.length?i.selectionStart:i.selectionEnd,t);break;case 2:s.ut();break;case 3:s.ke=1,s.Ee.blur();break;case 4:case 5:s.ge?5===e?s.ut(false):document.execCommand("delete"):s.ut();break;case 6:case 8:return s.We?(s.Ue=function(){s.$e=-1,s.Ne=false,s.$t(e)},void(s.We>0&&s.vt(0,s.Ue))):s.xt(t=((t=s.ue.length+1)+s.$e+(e-6))%t-1);case 9:return s.St();case 10:case 11:return s.Dt(10!==e);case 12:return s.zt();case 13:case 16:return u=(a=s.ue[s.$e]).title,c="math"===(l=a.e),r.Mt(a),u=16!==e||"search"===l||c||u===a.u||u===a.t?"":u,o.ft({H:40,t:c?a.textSplit+" = "+a.t:u,u:c?"":a.u});case 14:case 15:s.Ee.setSelectionRange(t=14===e?0:s.Ee.value.length,t),s.Ee.scrollLeft=t?s.Ee.scrollWidth:0}},jt:function(e,t){var r,o,i,a,u,l,c,s,f,d,m,_,p,v,h,g,w,y,b,k=n.Qe>63?new RegExp("[^\\p{L}\\p{Nd}_]+","u"):/[^\w\u0386-\u03fb\u4e00-\u9fff]+/,T=4===e||e<0,I=T||e>6,M=e>3&&e<8,S=n.Ee,x=/\s+/;if(t||e<-1||T&&S.selectionStart!==S.selectionEnd||getSelection().modify(I?"extend":"move",M?"forward":"backward","word"),r=S.value,o=S.selectionStart,i=S.selectionEnd,c=u=(a="backward"!==S.selectionDirection)?o:i,s=l=a?i:o,e<-1)c=0,s=e<-2?r.length:i;else if(T&&u!==l);else{for(d=n.Qe<90;s>0&&k.test(f=r[s]||"")&&(!I||x.test(f)||(f=r[s-1]||"")&&!x.test(f)&&k.test(f));)d?M?s++:s--:(getSelection().modify(I?"extend":"move",M?"forward":"backward",x.test(f)?"character":"word"),s="backward"!==S.selectionDirection?S.selectionEnd:S.selectionStart);d||(l=s)}c===u&&s===l||(I||(c=s),S.setSelectionRange(s<c?s:c,s<c?c:s,s<c?"backward":"forward")),T&&c!==s&&document.execCommand("delete"),(m=S.scrollWidth)<(_=S.clientWidth)+1||(p=S.scrollLeft,h=(v=getComputedStyle(S)).font,(g=(n.xe||(n.xe=document.createElement("canvas"))).getContext("2d")).font!==h&&(g.font=h),y=g.measureText((w=s+s<r.length)?r.slice(0,s):r.slice(s)).width,(p<4+(b=(w?y+(0|+v.paddingLeft)+(0|+v.paddingRight):m-y)-_)?p<m-_:p>b+_-4&&p>0)&&(S.scrollLeft=Math.min(Math.max(0,p<b+4?b+40:b+_-40),m-_)))},bt:/(?:^|\s)(\+\d{0,2})$/,Dt:function(e){var t,r,o,i,a,u,l,c,s,f=n;if(!f.me){if(t=f.ue.length,r=f.I.r,o=+e||-1,i=(f.Ne||f.$e<0?f.Ee.value:f.re).trimRight(),u=0|((a=f.bt.exec(i))&&a[0]),t>=r)o*=r;else if(u>0&&o<0)o*=u>=r?r:1;else if(t<(t&&"tab"!==f.ue[0].e?r:3))return;l=Math.min(Math.max(0,u+o),f.ce*r-r),o>0&&(l===u||l>=f.le&&f.le>0)||(a&&(i=i.slice(0,-a[0].length)),i=i.trimRight(),u=Math.min(f.Ee.selectionEnd,i.length),l>0&&(i+=" +"+l),c=f.Ee.selectionStart,s=f.Ee.selectionDirection,f.Ee.value=i,f.Ee.setSelectionRange(c,u,s),f.fe=null,f.vt(0))}},Bt:function(e,t){var r,i,a,u,l,c,s,f,d=n,m=null!=t?t:d.$e;if("string"==typeof e&&(e=(e.includes("a-")?1:0)+(e.includes("c-")?2:0)+(e.includes("m-")?4:0)+(e.includes("s-")?8:0)),d._e=null==e?d._e:true===e?d.E?-1:0:14&e&&d.$?d.Qt(e):6&e?8&e?-2:-1:8&e||!d.E?0:-1,-1===m){if(!(r=d.Ee.value.trim()))return;if(d.R&&!e&&!r.includes("://"))try{new URL(r)}catch(e){return}}if(null==t&&d.We){if(!d.se)return d.We>0?d.vt(0,d.Bt):void(d.Ue=d.Bt);m=-1}a=(i=m>=0)?d.ue[m]:{u:d.Ee.value.trim()},u=d._e,c=(l=!i||null==a.s||d.F||d.K?{H:7,f:false,r:u,h:i?null:d.de,u:a.u,o:{i:d.S,s:i?d.F||{r:false,k:""}:d.U,k:d.K,p:d.C,t:!i&&"whole"}}:null)?null:{H:6,a:u>-2,s:a.s},s=function(){o&&(l?n.Gt(l,u):n.Zt(c,"tab"===a.e)),/a?/.test("")},!i&&e&&!0!==e&&1&e&&u>-2&&/^\w+(-\w+)?$/.test(a.u)&&(f=d.ue.filter(function(e){return"domain"===e.e}),l.u=f.length?f[0].u:"www.".concat(a.u,".com")),u>-2||e&&!0!==e&&1&e?(d.Ke=[s,u],d.ct()):s()},Vt:function(e,t,r){var o,i,a=r.keyCode;if(r.isTrusted){if(window.onkeyup=null,i="enter"!==e||t?e:(r.altKey||18===a?1:0)+(r.ctrlKey||17===a?2:0)+(r.metaKey||a>90&&a<94||0?4:0)+(r.shiftKey||16===a?8:0),!(o=n).ne)return;o.Re=0,o.Bt(e,("string"==typeof i?"a-enter"===i:1===i)?!o.$e&&o.Ne?-1:o.$e:null)}},Qt:function(e){var t=n,r=true===t.$?"chrome":t.$+"",o=6&e,i=8&e;return(r.endsWith("2")?r.includes("chro"):r.includes("viva"))?o?i?2:-2:-1:o?!!i!==t.W?-1:-2:2},zt:function(){if(!(n.$e<0||n.We)){var e=n.ue[n.$e],t=e.e;"tab"===t||"history"===t&&null==e.s?(o.ft({H:23,t:t,s:e.s,u:e.u}),n.Jt()):o.ft({H:23,t:"e"})}},Xt:function(e){var t=n,o=e.target;if(e.isTrusted&&!e.button&&o!==t.Ee&&"Range"!==getSelection().type){if(o===t.Ee.parentElement)return t.ut();if(t.We)r.Yt(e,1);else{for(;o&&o.parentElement!==t.Le;)o=o.parentElement;o&&(t.Re=0,r.Yt(e,1),t.Bt(e.altKey|2*e.ctrlKey|4*e.metaKey|8*e.shiftKey,[].indexOf.call(t.Le.children,o)))}}},en:function(e){var t,r,o=e.target,i=HTMLAnchorElement;if(o instanceof i||(o=o.parentElement),o instanceof i&&!o.href){for(t=o;t&&t.parentElement!==n.Le;t=t.parentElement);(r=[].indexOf.call(n.Le.children,t))>=0&&(o.href=n.ue[r].u)}},tn:function(){var e,t,n=this;0===n.selectionStart&&"backward"===n.selectionDirection&&32===(e=n.value).charCodeAt(t=n.selectionEnd-1)&&t!==e.length-1&&((e=e.slice(0,t).trimRight()).includes(" ")||n.setSelectionRange(0,e.length,"backward"))},wt:function(){o&&n.ne&&n.gt()},lt:function(e){var t,o,i,a,u,l;e.ctrlKey||e.metaKey||!e.isTrusted||(t=n,o=e.deltaY,i=Date.now(),a=e.deltaMode,t.ne&&t.Ce.contains(e.target)||(r.Yt(e,1),!e.deltaX&&o&&t.ne&&!t.me&&((i-t.Ve>(a?330:120)||i-t.Ve<-33)&&(t.De=0,t.Pe=0),t.Ve=i,u=t.De+(a?1===a?100*o:300*o:o),(l=Math.abs(u))<300||t.Pe&&i-t.Pe<150&&i-t.Pe>-33?t.De=u:(t.De=l%300*(l>0?1:-1),t.Pe=i,t.Dt(o>0)))))},nn:function(e){var t,r,o,i,a=n,u=a.oe,l=a.Ee.value,c=l.trim(),s=a.ae;if(a.ke=a.ae=0,"/"===l&&a.Ge&&a.Ee.selectionEnd&&!e.isComposing&&(l=a.Ee.value=" /"),c!==(-1===a.$e||a.Ne?u:a.ue[a.$e].t)&&(1!==a.pe||!c.startsWith(u)||c.includes(" /",u.length)&&!/^\/|\s\//.test(c.slice(0,u.length-1))&&(a.I.e?1&a.I.e:"bomni bookmarks".includes(a.I.o)))){if(c||(a.de=a.O=null),(t=a.Ee.selectionStart)&&" "===l[t-1]&&c.length>5&&c.includes(" ")&&c.startsWith(u)&&" "!==l[t-2]&&(s=2),a.me);else if(t>l.length-2){if(l.endsWith(" +")&&!a.We&&c.slice(0,-2).trimRight()===u)return}else(r=a.bt.exec(u))&&c.endsWith(r[0])&&(o=r[0].length,(i=l.slice(0,l.trimRight().length-o)).trim()!==u.slice(0,-o).trimRight()&&(a.Ee.value=i.trimRight(),a.Ee.setSelectionRange(t,t)));a.fe&&(!e||false===e.isComposing)&&(a.fe=null),a.vt(s?0:-1,a.Be?a.st:null)}},rn:function(e){var t,r,i,a=n,u=e.l,l=u.length,c=l>0,s=a.Se,f=a.Le,d=a.Se=Math.ceil(c?l*a.Q+a.D:a.et),m=a.B*devicePixelRatio,_={N:2,h:d*m};a.ne&&(a.le=e.t,a.Te=e.i,a.pe=e.m,a.ve=e.s,a.he=e.r&&e.r+" ",a.ue=u,a.me=l>0&&"search"===u[0].e&&!u[0].n,a.$e=a.me||(null==a.A?e.a:a.A&&c)?0:-1,a.Ne=true,s||(_.m=Math.ceil(a.I.r*a.Q+a.D)*m),d>s&&o._t(_),a.ue.forEach(a.on),a.qe(a.ue,f),s||(a.Ae.display=""),a.in(),a.an("enterkeyhint",a.me?"Search":"Go"),t=a.He,r=f.classList,i="empty",c?t.remove(i):t.add(i),i="no-query",6&e.c?(t.remove(i),r.remove(i)):(t.add(i),r.add(i)),i="no-favicon",a.Te?r.remove(i):r.add(i),c&&(0===a.$e&&f.firstElementChild.classList.add("s"),f.lastElementChild.classList.add("b")),a.Ue===a.st&&(a.st(0),a.Ue=null),d>s?a.un():requestAnimationFrame(function(){d!==s&&o._t(_),n.un()}))},un:function(){var e,t=n;if(t.we||t.at(),!(t.We>0))return t.We=0,t.se=false,(e=t.Ue)?(t.Ue=null,e()):void 0},in:function(){n.fe||n.an("inputmode",n.me||!/[\/:]/.test(n.oe)?"search":"url")},an:function(e,t,r){r&&0===n.g&&(t=chrome.i18n.getMessage(t)||t),n.Ee.getAttribute(e)!==t&&n.Ee.setAttribute(e,t)},ln:function(e){var t=n.tt&&" ".concat(n.tt," "),r=" ".concat(e.t," "),i=!t.includes(r),a=(i?t+e.t:t.replace(r," ")).trim().replace(n.te," ");n.tt=a,n.cn(a),e.c||o.ft({H:27,t:e.t,o:1,e:i})},cn:function(e){var t,r,o,i,a,u,l,c,s,f;for(e=" ".concat(e," "),t=document.documentElement,r=document.body,o=e.includes(" dark "),n.rt&&(n.rt.childElementCount||(n.rt.textContent=o?"\u2600":"\u263d"),n.rt.classList.toggle("toggled",o)),i=e.includes(" mono-url "),n.it=e.includes(" time ")?e.includes(" absolute-num-time ")?1:e.includes(" absolute-time ")?2:3:0,n.M(32,n.it>0),a=document.querySelectorAll("style[id]"),u=0;u<a.length;u++)f=(s=" custom "==(c=" "+(l=a[u]).id+" "))||e.includes(c),l.dataset.media?l.media=f?"":l.dataset.media:l.sheet.disabled=!f,s||r.classList.toggle("has-"+l.id,f),f&&(e=e.replace(c," "));e=e.trim().replace(n.te," "),t.className!==e&&(t.className=e),!!(16&n.I.f)!==i&&(n.M(16,i),n.ne&&!n.ht&&n.Jt(document.hidden))},sn:function(e){var t,o,i,a,u=r.T(e.d),l=u.t;null!=l&&n.tt!==l&&(n.tt=l,n.cn(l)),null!=u.c&&n.fn(u.c),null!=u.n&&(n.G=u.n),null!=u.i&&(n.Ye=u.i),void 0!==u.m&&(n.Je=u.m),null!=u.l&&(n.Xe=u.l),null!=u.s&&(o=+(t=u.s.split(","))[0],i=Math.min,a=Math.max,n.et=a(24,i(o||77,320)),n.D=a(24,i(n.et+((o=+t[1])||3),320)),n.Q=a(14,i((o=+t[2])||44,120)),n.V=a(.3,i((o=t.length>3?+t[3]:0)||.8,.95)))},dn:function(e){var t=n,r=t.ye&&performance.now()-t.ye<120,i="blur"===e.type,a=e.target,u=a===window;e.isTrusted&&o&&(t.be=true,i&&t.Fe&&u&&t.Fe(),u&&t.ne?(t.ye=0,r?t.mn(i):(setTimeout(t.mn,50,null),i?(n.st(0),n.xe=null):(o.ft({H:22,c:"",n:1,i:-1,r:0}),0!==t.g&&o&&setTimeout(function(){o&&!o._n&&o._t({N:9})},50)))):a===t.Ee&&(n.ge=!i)&&(n.ke=0))},mn:function(e){if(n){var t=document,r=t.body.classList;!n.ne||(null!=e?!e:t.hidden||t.hasFocus())?r.remove("transparent"):r.add("transparent")}},ht:function(){var e,t,o,i,a,u,l,c,s,f,d,m,_,p,v=n;if(window.onclick=n.Xt,r.T(v.Ft),r.T(v.Kt),r.T(v.Ct),e=v.Le=document.getElementById("list"),t=v.Qe,o=addEventListener,i=v.Ee=document.getElementById("input"),v.Ce=document.getElementById("bar"),v.He=i.parentElement.classList,e.onmouseover=e.oncontextmenu=v.en,document.getElementById("close").onclick=function(){return n.ct()},o("keydown",v.Pt,true),o("focus",v.dn,true),o("blur",v.dn,true),i.oninput=v.nn,i.onselect=v.tn,i.onpaste=function(){n.ae=1},v.qe=r.pn(document.getElementById("template").innerHTML),t<73&&(a=document.querySelector("style"))&&(a.textContent=a.textContent.replace("0 2px 7px","0 2px 10px").replace("0 0 1.5px","0 0 1px")),(t>84||t<61)&&((a=document.createElement("style")).type="text/css",a.textContent="body::after, #input, .item { border-width: ".concat(t<48?1:.01,"px; }"),document.head.appendChild(a)),i.addEventListener("compositionstart",u=function(e){var t=n.Ee;n.fe="compositionstart"===e.type?[t.selectionStart,t.value.length-t.selectionEnd]:null}),i.addEventListener("compositionend",u),v.nt&&document.head.appendChild(v.nt),v.rt=document.querySelector("#toggle-dark"),v.rt&&(v.rt.onclick=function(e){n.ln({t:"dark",c:e.ctrlKey}),n.Ee.focus()}),v.cn(v.tt),0===v.g)for(l=document.querySelectorAll("[title]"),c=0;c<l.length;c++)s=l[c],(f=chrome.i18n.getMessage(s.title.replace(" ","_")))&&(s.title=f);if(v.ht=v.Z=r.pn=null,!(t>=52||null!=v.Ae.d)){for(d=(document.querySelector("style")||{}).textContent||"",m=/\.([a-z]+)\s?\{(?:[^}]+;)?\s*d\s?:\s*path\r?\s?\(\s?['"](.+?)['"]\s?\)/g,_=Object.create(null);p=m.exec(d);)_[p[1]]=p[2];v.vn=function(e){var t=e.e,n=_[t];return n?"".concat(t,'" d="').concat(n):t}}},fn:function(e){var t=n.nt;if(!e)return t&&t.remove(),void(n.nt=null);t||((t=n.nt=document.querySelector("#custom")||document.createElement("style")).type="text/css",t.id="custom",n.ht||document.head.appendChild(t)),t.textContent=e},vn:function(e){return e.e},Z:function(e){var t,r,o,i,a,u,l=n,c=document.documentElement;l.J=c.style,l.Ae=document.body.style,l.g=e,t=0,a=l.Qe>=58,2===e||(0===e?t=a?2:0:a&&null!=(i=c.dataset.favicons)?t=i&&"true"!==i.toLowerCase()?0:2:a&&(r=chrome.runtime.getManifest)&&(o=r())&&(t=(u=o.permissions||[]).indexOf("<all_urls>")>=0||u.join().includes("://favicon/")?1:0)),l.I.i=t},Pt:function(e){if(e.isTrusted){if(n.Oe=2,window.onkeyup){var t=e.keyCode,i=!e.repeat,a=0;n.Me?(i||(a=e.timeStamp)-n.Me>40||a<n.Me)&&(o._t({N:i?8:7}),n.Me=a):i=t>18||t<16,i&&(window.onkeyup=null)}else n.ne&&n.qt(e);0!==n.Oe&&r.Yt(e,2===n.Oe)}},st:function(e){var t,r,o,i,a=n.Be;if(t=-1!==e&&0!==e&&void 0!==e){if(!("alt"===(r=n.Ut(e).key)||"a-alt"===r))return;e=n.Be>0?-1:0}if(a!==(e=e||0)){if(-1===a!=!!e)for(document.body.classList.toggle("alt",!!e),(e&&!t?addEventListener:removeEventListener)("keyup",n.st,true),o=0,i=e?Math.min(n.Le.childElementCount,10):0;o<i;o++)n.Le.children[o].classList.add("alt-index");a>0&&clearTimeout(a),n.Be=e}},hn:0,P:function(e){n.I.c=Math.floor(((e||innerWidth)/n.B-84)/(16&n.I.f?7.7:4))},M:function(e,t){var r,o=null==t;o&&(t=" ".concat(n.tt," ").includes(e-32?" mono-url ":" time ")),n.I.f!==(r=n.I.f&~e|(t?e:0))&&(n.I.f=r,16!==e||o||n.P())},gn:null,I:{H:16,o:"omni",t:0,c:0,e:0,r:0,f:0,i:0,q:""},te:/\s+/g,gt:function(){var e,t,r,i,a=n,u=a.I,l=0;if(a.We=-1,a.ie){if(a.oe=e=a.Ee.value.trim(),a.fe&&(r=e.length-a.fe[1],e=e.slice(0,t=a.fe[0])+e.slice(t,r).replace(/'/g,"")+e.slice(r)),e=e.replace(a.te," "),a.x&&(e=(i=/^:[WBH] /.test(e)?3:0)?e.slice(0,i)+e.slice(i).toLowerCase():e.toLowerCase()),e===u.q)return a.un();u.t=a.pe<2||!e.startsWith(u.q)?0:3===a.pe?e.includes(" ")?0:8:(l=a.pe,a.ve),u.q=e,a.pe=l,a.P()}else a.ie=true,a.x&&(u.q=u.q.toLowerCase());o.ft(u),1024&u.f&&a.L&&(u.f&=-1025)},X:"",on:function(e){var t;e.r=n.Ie?'\n\t\t\t<span class="relevancy">'.concat(e.r,"</span>"):"",(t=e.label)&&(e.label=' <span class="label">'.concat(t,"</span>")),e.favIcon=(t=n.Te?e.u:"")&&n.X+(0,r.wn)(n.yn(e,t)||"about:blank")+"&quot;);"},yn:function(e,r){var o,i=r.slice(0,11).toLowerCase();return i.startsWith("vimium://")?1!==n.g?chrome.runtime.getURL("/pages/options.html"):location.protocol+"//"+t+"/pages/options.html":r.length>512||"javascript:"===i||i.startsWith("data:")?"":e.v||("history"===e.e||"tab"===e.e)&&r||(i.startsWith("http")||i.lastIndexOf("-",i.indexOf(":")+1||8)>0&&r.lastIndexOf("://",21)>0?(o=r.indexOf("/",r.indexOf("://")+3))>0?r.slice(0,o+1):r+"/":r)},Gt:function(e,t){if(!/^javascript:/i.test(e.u))return o.ft(e),-2!==t||!n.ne||n.oe&&!/^\+\d{0,2}$/.exec(n.oe)?void 0:n.Jt();o._t({N:5,u:e.u})},Zt:function(e,t){o.ft(e),n&&n.ne&&n.Jt(t)},Jt:function(e){var t=function(e){var t=n.$e,r=n.Ne;n.ie=false,n.P(),n.vt(e,function(){var e;!r&&t>=0&&(e=Math.min(t,n.ue.length-1),n.Ne=false,n.$e<0&&n.$e--,n.xt(e)),n.ge||n.ke||n.ut()})};n.ge||getSelection().removeAllRanges(),e?window.onfocus=function(e){window.onfocus=null,e.isTrusted&&o._n&&t(17)}:t(150)},bn:function(e){o&&e.isTrusted&&(n.ne=false,n.We>0&&clearTimeout(n.We),o._t({N:10}))}},r={T:function(e){return Object.setPrototypeOf(e,null)},pn:function(e){var t=e.split(/\{\{(\w+)}}/g);return function(e,o){var i,a,u,l="",c=t.length-1;for(r.pt=0,i=0;i<e.length;i++){for(a=0;a<c;a+=2)l+=t[a],l+="typeIcon"===(u=t[a+1])?n.vn(e[i]):"index"===u?i+1:"altIndex"===u?i>9?"":i<9?i+1:0:"time"===u?n.it?r.kn(e[i].visit):"":e[i][u]||"";l+=t[c]}o.innerHTML=l}},Tn:0,ee:function(e,t){try{e=(t||decodeURI)(e)}catch(e){}return e},In:function(e,t){var o,i,a,u,l;if(2===n.Ze&&e.startsWith("file://")){if((o=e.indexOf("/",7))<0||o===e.length-1)return o<0?e+"/":e;i=7===o?":"===e.charAt(9)?3:"%3a"===e.substr(9,3).toLowerCase()?5:0:0,e=i?e[8].toUpperCase()+":\\"+e.slice(i+8):7===o?e:"\\\\"+e.slice(7),l=(u=(a=/[?#]/.exec(e))?a.index:0)?e.slice(u):"",e=(e=(u?e.slice(0,u):e).replace(/\/\/+/g,"/")).replace(/([^<])\//g,"$1\\"),e=u?e+l:e}return t?e:r.ee(e,decodeURIComponent)},Mt:function(e){var t,n,o=e.u,i=e.t,a=o.slice(0,8).toLowerCase(),u=a.startsWith("http://")?7:"https://"===a?8:0;return u>=o.length&&(u=0),t=!u,8===u&&((n=o.indexOf("/",u))>0?n<o.length:/:\d+\/?$/.test(o))&&(t=true),i?u&&(t&&!i.startsWith(a)&&(i=a+i),o.endsWith("/")&&!a.endsWith("/")&&a.includes("/")&&(i+="/")):i=!t&&u?o.slice(u):o,e.t=r.In(i,!!e.t),(a=e.title)&&(e.title=a.replace(/<\/?match[^>]*?>/g,"").replace(/&(amp|apos|gt|lt|quot);|\u2026/g,r.onHTMLEntity)),u},onHTMLEntity:function(e,t){return"amp"===t?"&":"apos"===t?"'":"quot"===t?'"':"gt"===t?">":"lt"===t?"<":""},wn:function(e){function t(e){var t=e.charCodeAt(0);return 38===t?"&amp;":39===t?"&apos;":t<39?"%22":60===t?"%3C":"%3E"}var n=/["&'<>]/g;return r.wn=function(e){return e.replace(n,t)},r.wn(e)},pt:0,kn:function(e){var t,o,i=Intl.RelativeTimeFormat,a=document.documentElement.lang||navigator.language,u=a.startsWith("zh"),l=u?"zh-CN":a,c=u?"\u521a\u521a":a.startsWith("fr")?"tout \xe0 l'heure":"just now",s=0,f=["second","minute","hour","day","","month","year"];return r.kn=function(e){var a,d,m,_,p,v,h,g,w,y,b,k;if(!e)return"";if(r.pt||(a=new Date,r.pt=+a,s=6e4*a.getTimezoneOffset()),_=(m=(d=parseInt((r.pt-e)/1e3))<0?-d:d)<10?-1:m<45?0:(m/=60)<49.5?1:(m/=60)<22?2:(m/=24)<5?3:m<26?4:m<304?5:6,"+"!==(p=new Date(e-s).toJSON().slice(0,-5).replace("T"," "))[0]&&"-"!==p[0]||(p=p.replace(/^\+?(-?)0+/,"$1")),-1===_)v=c;else if(n.it<3||!i)if(!t&&n.it>1&&(t=(t=new Intl.DateTimeFormat(l,{localeMatcher:"best fit",second:"2-digit",year:"numeric",month:"short",weekday:"long",day:"numeric",hour:"numeric",minute:"2-digit"})).formatToParts?t:1),1===t||n.it<2)v=p,d>0&&"-"!==p[0]?v=_>3?(_>5?v.slice(0,-12):v.slice("0"===v[v.length-14]?-13:-14,-9)).replace("-"," / "):v.slice(_>2?"0"===v[v.length-11]?-10:-11:-8,_?-3:99):p="";else{for(v="",h=t.formatToParts(e),g=0,w=true;g<h.length;g++)("year"===(y=h[g].type)?_<6:"month"===y?_<4:"day"===y?_<3||_>5:"weekday"===y?_<3||_>4:"dayPeriod"===y||"dayperiod"===y||"hour"===y||"minute"===y?_>3:"second"===y?_>0:"literal"!==y)?g+=w&&g+1<h.length&&"literal"===h[g+1].type?1:0:(b=w,k=h[g].value,!(w="literal"===y)&&("weekday"===y||"d"===y[0]&&"e"===y.slice(4,5))&&v&&/[.:-]/.test(v[v.length-1])&&(v=v.slice(0,-1)+" "),(!b||u&&("\u661f"===k[0]||"\u5468"===k[0]))&&!w&&v&&/[^\x00-\x7f]/.test(v[v.length-1])&&(v+=" "),v+=u&&"d"===y[0]&&"e"===y.slice(4,5)?(m=parseInt(p.slice(-8,-6),10))>=12?m>=18?m>=21?"\u591c\u665a":"\u665a\u4e0a":m>=13?"\u4e0b\u5348":"\u4e2d\u5348":m>=6?m>=9?"\u4e0a\u5348":"\u65e9\u4e0a":m>0?"\u51cc\u6668":"\u5348\u591c":k);v=v.trim().replace(/[,.: -]+$/,"")}else o||(o=new i(l,{localeMatcher:"best fit",numeric:"auto",style:"long"})),v=o.format((Math.round(_<5?m:m/365.25+.25)||1)*(d>0?-1:1),f[4===_?3:_]),v=u?v.replace("\u79d2\u949f","\u79d2"):v;return'<span class="time" title="'.concat(p,'">').concat(v,"</span>")},r.kn(e)},Mn:[],Wt:function(e){r.Mn.length||(postMessage(0,"*"),r.Sn&&(addEventListener("message",r.Sn,true),r.Sn=null)),r.Mn.push(e)},Sn:function(){for(var e of r.Mn.splice(0,r.Mn.length))e()},Yt:function(e,t){t&&e.preventDefault(),e.stopImmediatePropagation()}},o={_n:null,_t:null,ft:function(e){try{(o._n||o.xn(20)).postMessage(e)}catch(e){o=null,this._t({N:9})}},En:function(e){var t=e.N;43===t?n.rn(e):44===t?n.kt(e):42===t?n.gn&&n.gn(e):45===t?o._t({N:1,l:e.l}):46===t?n.ln(e):47===t&&n.sn(e)},An:function(e){var t=e.data,r="number"==typeof t?t:t.N;0===r?n.y(t):2===r?n.ut():1===r&&n.ct(1)},Cn:function(){o._n=null},xn:function(t){var n={name:e?"vimium-c."+t+"@5067107":""+t},r=o._n=e?chrome.runtime.connect(e,n):chrome.runtime.connect(n);return r.onDisconnect.addListener(o.Cn),r.onMessage.addListener(o.En),r}};(function(){function i(e){if(e.source===parent){var t=e.data;if(!(t&&3===t.length&&"VimiumC"===t[0]&&"string"==typeof t[1]&&"object"==typeof t[2]))return;l&&r.Yt(e,0),16===t[1].length&&s(t[1],e.ports[0],t[2])}}var a,u,l,c,s,f;if("1.73"===document.documentElement.dataset.version){if(location.pathname.startsWith("/front/")||!(a=document.currentScript));else{if(!a.src.endsWith("/front/vomnibar.js")||/^(ht|s?f)tp/.test(a.src)||/^(ht|s?f)tp/.test(location.origin))return void a.remove();e=new URL(a.src).host,t=e}u=[],l=null===a,c="",s=function(e,t,r){c&&e===c?(c="1",clearTimeout(f),removeEventListener("message",i,true),o._t=t.postMessage.bind(t),t.onmessage=o.An,window.onunload=n.bn,o._t({N:3,o:r?1:0}),r&&n.y(r)):c||u.push([e,t,r])},f=setTimeout(function(){location.href="about:blank"},700),n.gn=function(e){var t,r=e.l,o=e.s;if(n.gn=null,!o)return c="2",u.length=0,removeEventListener("message",i,true),void console.log("%cVimium C: warning: Vomnibar was unexpectedly opened without triggering Vomnibar.activate!!!","color: red; background: lightyellow;");for(t of(n.Qe=Math.abs(r.v||998),n.Ge=r.v<0,r.o||(n.Ht=300),n.Ze=r.o,n.tt=r.t,n.sn({N:47,d:r}),c=o,u))if(t[0]===o)return u.length=0,s(t[0],t[1],t[2])},addEventListener("message",i,true),o.xn(16)}else location.href="about:blank"})();