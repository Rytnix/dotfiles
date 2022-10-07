"use strict";__filename="background/utils.js",define(["require","exports","./store"],function(n,t,e){
var r,o,u,i,c,a,f,s,l,m,p,b,d,g,v;Object.defineProperty(t,"__esModule",{value:true}),
t.t=t.now=t.i=t.c=t.l=t.m=t.d=t.g=t.v=t.$n=t.Zn=t.nt=t.tt=t.et=t.rt=t.ot=t.ut=t.it=t.ct=t.at=t.ft=t.st=t.lt=t.mt=t.pt=t.bt=t.dt=t.gt=t.vt=t.wt=t.ht=t.yt=t.kt=t.jt=t.xt=t.zt=t.Rt=t.qt=void 0,
t.qt=/\s+/g,t.Rt=/^[a-z][\+\-\.\da-z]+:\/\//,t.zt=function(n,t){for(var e in t)void 0!==n[e]||(n[e]=t[e]);return n},
t.xt=function(n){return Array.from(n.keys())},r=/a?/,t.jt=function(){return r.test("")},t.kt=function(n,t,e){
var r=e<n.length&&e>t?n.charCodeAt(e-1):0;return n.slice(t,e+=r>=55296&&r<56320?1:8205===r&&e>t+1?-1:0)},
t.yt=function(n,t,e){var r=t>0&&t<n.length?n.charCodeAt(t):0
;return n.slice(t+=r>=56320&&r<=57343?-1:8205===r&&t<n.length-1&&t<e-1?1:0,e)},o=function(n){function e(n){
var t=n.charCodeAt(0);return 38===t?"&amp;":39===t?"&apos;":t<39?"&quot;":60===t?"&lt;":"&gt;"}var r=/["&'<>]/g
;return t.ht=function(n){return n.replace(r,e)},t.ht(n)},t.ht=o,t.wt=function(n){
return 58===n.charCodeAt(10)&&"javascript"===n.slice(0,10).toLowerCase()
},u=["","",".ac.ad.ae.af.ag.ai.al.am.ao.aq.ar.as.at.au.aw.ax.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bm.bn.bo.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cf.cg.ch.ci.ck.cl.cm.cn.co.cr.cu.cv.cw.cx.cy.cz.de.dj.dk.dm.do.dz.ec.ee.eg.er.es.et.eu.fi.fj.fk.fm.fo.fr.ga.gb.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.me.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.ni.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.py.qa.re.ro.rs.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.ss.st.su.sv.sx.sy.sz.tc.td.tf.tg.th.tj.tk.tl.tm.tn.to.tr.tt.tv.tw.tz.ua.ug.uk.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.ye.yt.za.zm.zw",".aaa.abb.abc.aco.ads.aeg.afl.aig.anz.aol.app.art.aws.axa.bar.bbc.bbt.bcg.bcn.bet.bid.bio.biz.bms.bmw.bnl.bom.boo.bot.box.buy.bzh.cab.cal.cam.car.cat.cba.cbn.cbs.ceb.ceo.cfa.cfd.com.cpa.crs.csc.dad.day.dds.dev.dhl.diy.dnp.dog.dot.dtv.dvr.eat.eco.edu.esq.eus.fan.fit.fly.foo.fox.frl.ftr.fun.fyi.gal.gap.gdn.gea.gle.gmo.gmx.goo.gop.got.gov.hbo.hiv.hkt.hot.how.ibm.ice.icu.ifm.inc.ing.ink.int.ist.itv.iwc.jcb.jcp.jio.jlc.jll.jmp.jnj.jot.joy.kfh.kia.kim.kpn.krd.lat.law.lds.llc.llp.lol.lpl.ltd.man.map.mba.med.men.mil.mit.mlb.mls.mma.moe.moi.mom.mov.msd.mtn.mtr.nab.nba.nec.net.new.nfl.ngo.nhk.now.nra.nrw.ntt.nyc.obi.off.one.ong.onl.ooo.org.ott.ovh.pay.pet.phd.pid.pin.pnc.pro.pru.pub.pwc.qvc.red.ren.ril.rio.rip.run.rwe.sap.sas.sbi.sbs.sca.scb.ses.sew.sex.sfr.ski.sky.soy.spa.srl.srt.stc.tab.tax.tci.tdk.tel.thd.tjx.top.trv.tui.tvs.ubs.uno.uol.ups.vet.vig.vin.vip.wed.win.wme.wow.wtc.wtf.xin.xxx.xyz.you.yun",".aero.arpa.asia.auto.band.beer.chat.city.club.cool.coop.date.fans.fund.game.gift.gold.guru.help.host.info.jobs.life.link.live.loan.love.luxe.mobi.name.news.pics.plus.shop.show.site.sohu.team.tech.wang.wiki.work.yoga.zone",".citic.cloud.email.games.group.local.onion.party.photo.press.rocks.space.store.today.trade.video.world",".center.design.lawyer.market.museum.online.social.studio.travel",".company.fashion.science.website",".engineer.software"],
t.vt=function(){return Object.create(null)},t.gt=function(n){return Object.setPrototypeOf(n,null)},t.dt=function(n,t){
return!t&&/[^a-z]/.test(n)?/^xn--[\x20-\x7f]+/.test(n)||".\u4e2d\u4fe1.\u4e2d\u56fd.\u4e2d\u570b.\u4e2d\u6587\u7f51.\u4f01\u4e1a.\u4f5b\u5c71.\u4fe1\u606f.\u516c\u53f8.\u516c\u76ca.\u5546\u57ce.\u5546\u5e97.\u5546\u6807.\u5728\u7ebf.\u5a31\u4e50.\u5e7f\u4e1c.\u6211\u7231\u4f60.\u624b\u673a.\u62db\u8058.\u653f\u52a1.\u6e38\u620f.\u7f51\u5740.\u7f51\u5e97.\u7f51\u5e97.\u7f51\u7edc.\u8d2d\u7269.\u96c6\u56e2.\u9910\u5385.".includes("."+n+".")?2:0:n&&n.length<u.length&&u[n.length].includes(n)?1:0
},i=function(n){var e=n.toLowerCase().split("."),r=e.length
;return[e,0===t.dt(e[r-1])?1:r>2&&2===e[r-1].length&&1===t.dt(e[r-2])?3:2]},t.bt=i,c=function(n,e){
return!!(6!==e&&/^\d{1,3}(?:\.\d{1,3}){3}$/.test(n)||4!==e&&/^\[[\da-f]{0,4}(?::[\da-f]{0,4}){1,5}(?:(?::[\da-f]{0,4}){1,2}|:\d{0,3}(?:\.\d{0,3}){3})]$/.test(n))&&!!t.mt("http://"+n)
},t.pt=c,t.mt=function(n){try{return new URL(n)}catch(n){return null}},t.lt=function(n,t){if(!n)return"";try{
n=(t?"atob"===t?atob:decodeURI:decodeURIComponent)(n)}catch(n){}return n},a=function(n,e){var r,o,u
;return n.includes("%")?(r=n.replace(/%(2[356f]|3[adf]|40)/gi,"%25$1").replace(/%(?![\da-fA-F]{2})/g,"%25"),
o=(o=t.lt(r,1)).length!==r.length?o:t.at(n,1),
u=!e&&(t.Rt.test(o)?!o.startsWith("vimium:"):o.startsWith("data:")||o.startsWith("about:")),
o=o.replace(u?t.qt:/[\r\n]+|\s$/g,encodeURIComponent)):n},t.st=a,f=function(n,e){
return n=!n.includes("://")&&/%(?:2[36f]|3[adf])/i.test(n)?t.lt(n).trim():n,t.st(n,e)},t.ft=f,s=function(n,e){
return(e?n:encodeURI(n)).replace(/(?:%[\da-f]{2})+/gi,function(n){var e=t.lt(n);return e.length<n.length?t.ct(e):n})},
t.at=s,t.ct=function(n){
return n.replace(e.bn<64||false?/[\x00-\u0390\u03ca-\u4dff\u9fa6-\uffff\s]+/g:new RegExp("[^\\p{L}\\p{N}]+","ug"),encodeURIComponent)
},t.it=function(n){return(n=n.slice(0,8).toLowerCase()).startsWith("http://")?7:"https://"===n?8:0},t.ut=function(n){
return n.trim()?n.trim().split(/[.\s]+/g).sort().filter(function(n){return!!n}):[]},l=function(n){
return n&&[n[0],n[1],t.ut(n[2]||"")]||0},t.ot=l,t.rt=function(n,t,e){try{return new RegExp(n,t)}catch(r){
0===e||console.log("%c/%s/%s","color:#c41a16",n,t,"is not a valid regexp.")}return null},
t.et="undefined"!=typeof URLPattern&&URLPattern?function(n,t){var e,r
;n.endsWith("*")||(r=(e=n.indexOf("://"))>0?n.indexOf("/",e+3):-1,
n+=e>0&&(r===n.length-1||r<0)?(r>0?"":"/")+"*\\?*#*":"");try{return new URLPattern(n)}catch(e){
0===t||console.log("%c/%s/%s","color:#c41a16",n,"is not a valid URLPattern.")}return null}:function(){return null},
m=null,p=function(n){m=n},t.tt=function(){var n=new Promise(p),t=m;return m=null,{Ut:n,Lt:e.bn<49?function(n){
Promise.resolve(n).then(t)}:t}},t.nt=e.bn>70&&true?function(n){queueMicrotask(n)}:function(n){Promise.resolve().then(n)
},t.Zn=function(n,t,e){var r=function(){var u,i,c;for(e&&false===e()&&(o=0),u=0,
i=0;u<128&&i<512&&o>0;)if((c=t(n[--o]))>0)u++,i+=c;else if(c<0)break;o>0&&(n.length=o,setTimeout(r,150))},o=n.length
;o>=50?setTimeout(r,17):n.length>0&&r()},t.$n=function(n,r){var o,u;return o=!r&&n.endsWith(".json"),
n=r||n.includes("/")?n:"/front/"+n,!r||e.bn>=48?fetch(n).then(function(n){return o?n.json().then(function(n){var r,o
;if(t.gt(n),e.bn>=56)return new Map(Object.entries(n));for(o in r=new Map,n)r.set(o,n[o]);return r
}):r?"blob"===r?n.blob():n.arrayBuffer():n.text()}):((u=new XMLHttpRequest).open("GET",n,true),
u.responseType=o?"json":r||"text",new Promise(function(n){u.onload=function(){var e,o,u=this.response
;if("string"==typeof u||r)n(u);else{for(o in t.gt(u),e=new Map,u)e.set(o,u[o]);n(e)}},u.send()}))},b=function(n,r){
var o,u,i,c,a=0;return r=r||1e4,e.bn>65?(u=new AbortController,a=setTimeout(u.abort.bind(u),r),o=(o=fetch(n,{
cache:"force-cache",signal:u.signal})).then(function(n){return n.blob().catch(function(){return 0})},function(){
return null})):(i=new XMLHttpRequest,c=t.tt(),i.open("GET",n,true),i.responseType="blob",i.onload=function(){
c.Lt(i.response)},i.onerror=function(){c.Lt(null)},a=setTimeout(function(){i.onload=i.onerror=null,c.Lt(0),i.abort()
},r),i.send(),o=c.Ut),a&&o.then(function(){clearTimeout(a)}),o.then(function(n){
return n?t.g(n.slice(0,Math.min(16,n.size),n.type)).then(function(t){return[n,t]}):(console.clear(),n)})},t.v=b,
d=function(n){var e=new FileReader,r=t.tt();return e.onload=function(n){r.Lt(n.target.result)},e.readAsDataURL(n),r.Ut}
;t.g=d,t.d=function(n){try{URL.revokeObjectURL(n)}catch(n){}},t.m=function(n){
return n.replace(/[$()*+.?\[\\\]\^{|}]/g,"\\$&")},g="",v=0,t.l=function(n){var t,e=Date.now();if(e-v>8e3){if(!n)return""
;t=new Uint8Array(8),crypto.getRandomValues(t),g=t.reduce(function(n,t){return n+(t<16?"0":"")+t.toString(16)},"")}
return v=e,g},t.c=function(n){if(null!=n&&false!==n){
for(n="string"!=typeof n?"number"==typeof n?[n,.5]:true===n?[.5,.5]:n instanceof Array?n:[+n.x||0,+n.y||0,+n.s||0]:n.trim().split(/[\s,]+/).map(function(n,t){
return"count"===n&&t<2?n:isNaN(+n)?t<2?.5:0:+n});n.length<2;)n.push(.5);for(;n.length<3;)n.push(0)
;var t="count"===n[0]||"count"===n[1];return{x:n[0],y:n[1],n:t?0:1,s:t?+n[2]||.01:0}}},t.i=function(n){var t,e,r,o=""
;for(t=0,e=n.length-1;t<e;t++)(r=n[t]).trimRight()&&n.indexOf(r,t+1)<0&&(o+=r);return o},t.now=function(){
return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")},t.t=function(){
return/\.(?:avif|bmp|gif|icon?|jpe?g|a?png|svg|tiff?|webp)$/i}});