"use strict"
;__filename="background/main.js",define(["require","exports","./store","./utils","./browser","./settings","./ports","./key_mappings","./run_commands","./normalize_urls","./parse_urls","./exclusions","./ui_css","./eval_urls","./open_urls","./all_commands","./request_handlers","./tools"],function(n,o,e,t,i,u,r,s,c){
var a;Object.defineProperty(o,"__esModule",{value:true}),a=function(n){var o,t=e.K.get(e.U)
;"quickNext"===n&&(n="nextTab"),
(o=s.Et)&&o.get(n)?null==t||4&t.ir||e.U<0?c.executeShortcut(n,t):i.tabsGet(e.U,function(o){
return c.executeShortcut(n,o&&"complete"===o.status?e.K.get(o.id):null),i.fe()}):(o&&null!==o.get(n)&&(o.set(n,null),
console.log("Shortcut %o has not been configured.",n)),
t&&(e.I=t.cr),r.showHUD('Shortcut "'.concat(n,'" has not been configured.')))},e.X=function(){
if(6===e.Y)return e.X?(t.nt(u.eo.then.bind(u.eo,e.X)),void(e.X=null)):(e.H||(u.Ve("keyMappings"),
0===e.gn&&(s.Tt["m-s-c"]=36)),u.Ve("exclusionListenHash"),u.Ve("vomnibarOptions"),u.Ve("autoDarkMode"),
u.Ve("autoReduceMotion"),i.de.runtime.onConnect.addListener(function(n){return r.OnConnect(n,0|n.name)}),
i.de.runtime.onConnectExternal.addListener(function(n){var o,t=n.sender,i=n.name
;if(t&&r.isExtIdAllowed(t)&&i.startsWith("vimium-c.")&&(o=i.split("@")).length>1){
if(o[1]!==e.e.GitVer)return n.postMessage({N:2,t:1}),void n.disconnect();r.OnConnect(n,32|o[0].slice(9))
}else n.disconnect()}),void i.de.extension.isAllowedIncognitoAccess(function(o){e.e.Rn=false===o,setTimeout(function(){
new Promise(function(o,e){n(["/background/others.js"],o,e)}).then(n=>n),setTimeout(function(){new Promise(function(o,e){
n(["/background/browsing_data_manager.js"],o,e)}).then(n=>n),new Promise(function(o,e){
n(["/background/completion_utils.js"],o,e)}).then(n=>n),new Promise(function(o,e){n(["/background/completion.js"],o,e)
}).then(n=>n)},200)},200)}))},i.de.commands.onCommand.addListener(a),u.eo.then(function(){u.Ve("extAllowList"),
i.de.runtime.onMessageExternal.addListener(function(n,o,t){if(r.isExtIdAllowed(o))if("string"!=typeof n){
if("object"==typeof n&&n)switch(n.handler){case"shortcut":var i=n.shortcut;i&&a(i+"");break;case"id":t({name:"Vimium C",
host:location.host,shortcuts:true,injector:e.e.Fn,version:e.e.qn});break;case 99:t({s:n.scripts?e.e.Tn:null,
version:e.e.qn,host:"",h:"@"+e.e.GitVer});break;case"command":c.executeExternalCmd(n,o)}}else c.executeExternalCmd({
command:n},o);else t(false)}),u.Ve("vomnibarPage",null),u.Ve("searchUrl",null)}),
i.se.onReplaced.addListener(function(n,o){var t,i=e.K.get(o);if(i){for(t of(e.K.delete(o),e.K.set(n,i),i.so))t.s.ur=n
;for(t of e.A)t.s.ur===o&&(t.s.ur=n)}}),e.C.yu=function(n,o,t){setTimeout(function(){e.C.yu(n,o,t)},210)},e.Y=4|e.Y,
e.X(),globalThis.onunload=function(n){if(!n||n.isTrusted){for(var o of e.A)o.disconnect();e.K.forEach(function(n){
for(var o of n.so.slice(0))o.disconnect()})}},globalThis.window||(globalThis.onclose=onunload),
e.bn<59||!t.rt("\\p{L}","u",0)?t.$n("words.txt").then(function(n){
e.tn=n.replace(/[\n\r]/g,"").replace(/\\u(\w{4})/g,function(n,o){return String.fromCharCode(+("0x"+o))})}):e.tn=""});