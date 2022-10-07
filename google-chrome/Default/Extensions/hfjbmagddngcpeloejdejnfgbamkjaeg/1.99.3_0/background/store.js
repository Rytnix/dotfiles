"use strict";__filename="background/store.js",define(["require","exports"],function(n,e){var t,r,l,o,a,s
;Object.defineProperty(e,"__esModule",{value:true
}),e.e=e.r=e.o=e.a=e.u=e.p=e.f=e.h=e.w=e.b=e.M=e.getNextFakeTabId=e.C=e.j=e.S=e.P=e.V=e.k=e.N=e.B=e.I=e.x=e.y=e.D=e.G=e.H=e.findBookmark=e.O=e.R=e.T=e.q=e.E=e.F=e.J=e.L=e.U=e.z=e.A=e.K=e.Q=e.W=e.X=e.Y=e.Z=e.$=e.nn=e.en=e.tn=e.rn=e.ln=e.on=e.an=e.sn=e.un=e.in=e.mn=e.cn=e.vomnibarPage_f=e.newTabUrl_f=e._n=e.pn=e.fn=e.hn=e.dn=e.gn=e.wn=e.bn=e.Mn=e.OnSafari=e.OnEdge=e.OnFirefox=e.OnChrome=e.IsLimited=e.vn=void 0,
e.vn=1,e.IsLimited=!!0,e.OnChrome=!0,e.OnFirefox=!!0,e.OnEdge=!!0,e.OnSafari=!!0,t=navigator.userAgentData,
e.Mn=(r=t&&(t.brands||t.uaList))?!!r.find(function(n){return n.brand.includes("Edge")||n.brand.includes("Microsoft")
}):matchMedia("(-ms-high-contrast)").matches,e.bn=r?(l=r.find(function(n){return n.brand.includes("Chromium")
}))?l.version:83:(s=navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/))?75==+s[1]&&matchMedia("(prefers-color-scheme)").matches?81:0|s[1]:998,
e.wn=999,e.gn=2,e.hn=false,e.fn=false,e.pn={},e._n=new Map,e.newTabUrl_f="",e.vomnibarPage_f="",e.cn={v:e.bn,d:"",
g:false,m:false},e.mn={map:new Map,rules:[],keywords:null},e.in={v:e.Mn?-e.bn:e.bn,c:"",i:0,l:0,m:null,n:0,s:"",t:""},
e.un={actions:[]},e.sn=false,e.rn=false,e.$=new Map,e.Z=new Map,e.Y=0,e.Q={},e.K=new Map,e.A=[],e.z=new Map,e.U=-1,
e.L=-1,e.J=-1,e.F=1,e.E=null,e.q=null,e.T={Cn:[],jn:[],Sn:0,Pn:0,Vn:false},e.R={kn:null,Nn:new Map,Bn:0,In:0,xn:0},
e.O=new Map,e.H=null,e.G=null,e.y=0,e.x=0,e.I=null,e.B=1,o=null;e.yn=null,e.Dn=null,e.S=function(n,e){
var t=o,r=!n||t&&t.i===n;return o=r?e:t,r?t:null},e.j=function(){},e.C={},a=-4,e.getNextFakeTabId=function(){return a--
},e.M=e.j,e.b=e.j,e.w=null,e.h=function(){return""},e.f=function(){return""},e.p=function(n){return n},e.u=function(){
return null},e.a=null,e.o=null,e.e={Gn:"chrome",Hn:0,
On:e.Mn?/^https:\/\/(ntp|www)\.msn\.\w+\/(edge|spartan)\/ntp\b/:"chrome-search://local-ntp/local-ntp.html",Rn:false,
Tn:null,qn:"",En:"",GitVer:"5067107",Fn:"/lib/injector.js",Jn:"/front/vomnibar-tee.html",
HelpDialogJS:"/background/help_dialog.js",Ln:"pages/options.html",Un:"browser",zn:"",
An:"https://github.com/gdh1995/vimium-c",Kn:null,Qn:"pages/show.html",Wn:"",Xn:"/front/vomnibar.js",Yn:""}});