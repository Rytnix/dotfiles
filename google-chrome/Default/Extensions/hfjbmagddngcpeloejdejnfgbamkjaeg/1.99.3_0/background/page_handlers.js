"use strict"
;__filename="background/page_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./key_mappings","./run_commands","./tools","./open_urls","./frame_commands"],function(n,u,r,t,l,e,o,i,c,f,s,a,v,d,m,p){
var _,g,b,k;Object.defineProperty(u,"__esModule",{value:true}),u.onReq=void 0,_=[function(){return[i.Je,r.gn,r.e.Un]
},function(n){var u,t,l;if(r.w)return r.w.then(_[1].bind(null,n,null));for(t in u={},
i.Je)(l=r.pn[t])!==i.Je[t]&&(u[t]=l);return u},function(n){var u,t,l,e,o
;return r.w?r.w.then(_[2].bind(null,n,null)):(l=n.key,
e=null!==(t=null!==(u=n.val)&&void 0!==u?u:i.Je[l])&&void 0!==t?t:null,i.Ze(l,e),(o=r.pn[l])!==e?o:null)},function(n){
var u=i.Ye(n.key,n.val);return u!==n.val?u:null},function(n){i.We({N:6,d:n})},function(n){return r.pn[n.key]
},function(n){r.K.has(n)||l.n(n)},function(){var n,u,t=a.Kt;return!(!(1&r.cn.l)||t||(u=(n=function(n){
return/[^ -\xff]/.test(n.join(""))
})(Object.keys(r.H))?1:0,!(u|=r.G&&n(Object.keys(r.G))?2:0)||!(2&(u|=2&u||!r.G||!n(Object.values(r.G))?0:4))&&4&u))||(t?(function(n){
var u,r,t=n.length>1?n.length+" Errors:\n":"Error: ";for(r of n)u=0,t+=r[0].replace(/%([a-z])/g,function(n,t){return++u,
"c"===t?"":"s"===t||"d"===t?r[u]:JSON.stringify(r[u])}),u+1<r.length&&(t+=" "+r.slice(u+1).map(function(n){
return"object"==typeof n&&n?JSON.stringify(n):n}).join(" ")),t+=".\n";return t})(t):"")},function(n){
var u=c.indexFrame(n[1],0);return u&&u.s&&(u.s.ir|=44),s.mergeCSS(n[0],-1)},function(n){n&&i.Xe("isHC_f",n.hc?"1":null),
s.ri(2)},function(n){return[e.$e(n[0],null,n[1]),e.xe]},function(){d.hr.po()},function(){var n=r.D.get("?"),u="?"
;return n&&7===n.Qt&&n.Xt||r.D.forEach(function(n,r){7===n.Qt&&n.Xt&&(u=u&&u.length<r.length?u:r)}),u},function(n){var u
;return[n=e.$e(n,null,0),null!==(u=r.$.get(n))&&void 0!==u?u:null]},function(n){var u,r,t,l=new Map
;return o.je("k:"+n,l),
null==(u=l.get("k"))?null:(r=e.$e(u.ye,null,-2),[!(t=e.xe>2),t?u.ye:r.replace(/\s+/g,"%20")+(u.Fe&&"k"!==u.Fe?" "+u.Fe:"")])
},function(n){m.su(n)},function(n){var u=null;return n.startsWith("vimium://")&&(u=r.u(n.slice(9),1,true)),
"string"==typeof(u=null!==u?u:e.$e(n,null,-1))&&(u=o.Ue(u,"whole"),u=e.ve(u)),u},function(){return r.o&&r.o()
},function(n){return r.p(n[0],n[1])},function(n){return m.du(n)},function(){
return Promise.all([l.ue(l.getCurTab),r.w]).then(function(n){
var u,e=n[0],o=e&&e[0]||null,c=o?o.id:r.U,s=null!==(u=r.K.get(c))&&void 0!==u?u:null,a=o?l.getTabUrl(o):s&&(s.ar||s.cr).s.ye||"",v=!s||s.cr.s.tr&&!t.Rt.test(s.cr.s.ye)?null:s.cr.s,d=!(s||o&&a&&"loading"===o.status&&/^(ht|s?f)tp/.test(a)),m=k(s),p=!d&&!m,_=p?null:m||!a?m:a.startsWith(location.protocol)&&!a.startsWith(location.origin+"/")?new URL(a).host:null,g=_?r.Z.get(_):null
;return p||null==g||true===g?_=null:s&&(s.dr=-1),{ver:r.e.En,runnable:p,url:a,tabId:c,
frameId:s&&(v||s.ar)?(v||s.ar.s).tr:0,topUrl:v&&v.tr&&s.ar?s.ar.s.ye:null,frameUrl:v&&v.ye,lock:s&&s.or?s.or.Sn:null,
status:v?v.Sn:0,unknownExt:_,exclusions:p?{rules:r.pn.exclusionRules,onlyFirst:r.pn.exclusionOnlyFirstMatch,
matchers:f.Nt(null),defaults:i.Je.exclusionRules}:null,os:r.gn,reduceMotion:r.cn.m}})},function(n){
var u,e,o=n[0],c=n[1],f=r.pn.extAllowList,s=f.split("\n")
;return s.indexOf(c)<0&&(u=s.indexOf("# "+c)+1||s.indexOf("#"+c)+1,s.splice(u?u-1:s.length,u?1:0,c),f=s.join("\n"),
i.Ze("extAllowList",f)),(e=r.K.get(o))&&(e.dr=null),l.ue(l.de.tabs.get,o).then(function(n){var u=t.tt(),r=function(){
return v.runNextOnTabLoaded({},n,u.Lt),l.de.runtime.lastError};return n?l.de.tabs.reload(n.id,r):l.de.tabs.reload(r),
u.Ut})},function(n){var u,t,l=n[1],e=n[2]
;return r.u("status/"+n[0],3),t=(u=c.indexFrame(l,e)||c.indexFrame(l,0))?r.K.get(l).or:null,u&&!t&&r.W[9]({u:u.s.ye},u),
[u?u.s.Sn:0,t?t.Sn:null]},function(n){return f.Nt(n)[0]},function(n,u){return p.initHelp({f:true},u)},function(n){
var u,r,t,e=n.module,o=n.name,i=g[e];return g.hasOwnProperty(e)&&i.includes(o)?(r=n.args,t=(u=l.de[e])[o],
new Promise(function(n){r.push(function(u){var r=l.fe();return n(r?[void 0,r]:[b(u),void 0]),r}),t.apply(u,r)
})):[void 0,{message:"refused"}]},function(n,u){return u.s.ur},function(n){var u,l=t.vt();return n?(u=r._n.get(n),
l[n]=null!=u?u:null):r._n.forEach(function(n,u){l[u]=n}),l},function(n){var u=n.key,r=n.val;u.includes("|")&&i.Xe(u,r)
},function(n,u){var t,l=n.key,e=n.val,o=u&&u.s&&u.s.ur||r.U,i=r.A.find(function(n){return n.s.ur===o})
;i&&i.postMessage({N:47,d:(t={},t[l]=e,t)})},function(){r.pn.vimSync&&r.Q.vimSync(true,"vimSync")}],g={
permissions:["contains","request","remove"],tabs:["update"]},b=function(n){return{
message:n&&n.message?n.message+"":JSON.stringify(n)}},u.onReq=function(n,u){return _[n.n](n.q,u)},k=function(n){
return n&&"string"==typeof n.dr&&true!==r.Z.get(n.dr)?n.dr:null}});