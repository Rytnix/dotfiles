(self.webpackChunk=self.webpackChunk||[]).push([[1090],{4557:(e,t,n)=>{n.d(t,{B:()=>s});var s,i=n(5114),r=n(95195);!function(e){e.NAME_LENGTH_LIMIT=30,e.CONTENT_LENGTH_LIMIT=1e3;e.validate=(t,n,s)=>{const p=((t,n)=>0===t.trim().length?i.some(n.nameEmpty):t.length>e.NAME_LENGTH_LIMIT?i.some(n.nameTooLong):i.none)(t,s),a=((t,n)=>0===t.trim().length?i.some(n.textEmpty):t.length>e.CONTENT_LENGTH_LIMIT?i.some(n.textTooLong):i.none)(n,s);return i.isNone(p)&&i.isNone(a)?r.F2(void 0):r.t$({nameError:p,contentError:a})}}(s||(s={}))},73310:(e,t,n)=>{n.r(t),n.d(t,{createComponentProxy:()=>W,deserializeCard:()=>H});var s={};n.r(s),n.d(s,{AddToDictButton:()=>d.X,AddedToDictCard:()=>l.S,AuthenticatedFooter:()=>h.S,Card:()=>v.Z,Container:()=>F.W,DefinitionsCard:()=>_.l,FluencyFooter:()=>C.A,FooterText:()=>g.H,IgnoreButton:()=>u.Q,Item:()=>f.c,KnowledgeHubCard:()=>D.i,PositionedCard:()=>c.J,RenderWithStyles:()=>R.L,ReplacementCard:()=>x.X,RowWithIcon:()=>b.O,SimpleFooter:()=>E.z,SimpleMessageCard:()=>y.t,SnippetsCard:()=>w.L,SnippetsCreateBtn:()=>w.O,SnippetsEditor:()=>L.M,SnippetsStopPropagationWrapper:()=>N.q,SuggestionCard:()=>M.Y,SuggestionCardMini:()=>T.O,SynonymsCard:()=>I.x,TakeawayCard:()=>O.q,TextOnlyCard:()=>P.A,UnifiedFunnelAnonymousFooter:()=>S.h,UnknownWordCard:()=>k.$,UpgradeButton:()=>m.Y,VoxReplacementCard:()=>A.W,VoxTextOnlyCard:()=>B.a});var i=n(27378),r=n(74850),p=n(58028),a=n(79517),o=n(90361),c=n(9081),l=n(2134),d=n(41916),u=n(68011),m=n(2041),_=n(13740),h=n(90772),C=n(89634),g=n(38031),E=n(34949),S=n(52504),v=n(46547),f=n(76703),b=n(92309),x=n(62860),y=n(26307),w=n(88434),L=n(71031),N=n(46777),M=n(22777),T=n(89230),I=n(37618),P=n(51135),k=n(61243),A=n(52496),B=n(50624),O=n(14217),D=n(17746),F=n(25691),R=n(41263);const Z=r.Y.create("universal/cs/integration/fluid/iframe-proxy/ComponentProxy");function W(e){return i.createElement(U,{...e})}const U=({children:e,cardKey:t,onUpdate:n,...s})=>{const r=i.useRef({}),[p,a]=i.useState(null),o=i.useMemo((()=>e=>{const t=r.current[e.id];t?t(...e.args):Z.warn(`Skipping Callback ${e.id}`)}),[]);return i.useEffect((()=>{const{callbackRegister:i,card:c,key:l}=G({card:e,key:t},s),d=n({card:c,key:l});return r.current=i,a(d.subscribe(o)),()=>{p&&p.unsubscribe(),a(null)}}),[e]),null},$=(e,t)=>t?e[t]:void 0,q=(e,t,n="root")=>{var r,a;try{const c=Object.entries(t.options.namedObjects).find((([t,n])=>n===e));if(c)return{__type:"namedObject",name:c[0]};if("object"==typeof e&&i.isValidElement(e)){let i;for(const t in s){const n=$(s,t);if(e.type===n){i=t;break}}if(!i)throw new Error(`Cannot find component name for ${e.type.toString()}`);return{__type:"react",props:q(e.props,t,`${n}.[${i}]`),componentName:i}}if(e instanceof Array)return e.map(((e,s)=>q(e,t,`${n}.${s}`)));if(e instanceof HTMLDocument||"object"==typeof e&&(null!==(a=null===(r=null==e?void 0:e.constructor)||void 0===r?void 0:r.toString().indexOf("HTMLDocument"))&&void 0!==a?a:-1)>-1)return{__type:"document"};if("function"==typeof e){const s=`${n}-${o.iy.create()}`;return t.callbackRegister[s]=e,{__type:"callback",id:s}}return(0,p.Kn)(e)?Object.keys(e).reduce(((s,i)=>Object.assign(s,{[i]:q(e[i],t,`${n}.${i}`)})),{}):e}catch(t){return Z.warn(`Card Serialize Error ${t}`),e}},G=(e,t)=>{const n={};return{card:e.card&&q(e.card,{callbackRegister:n,options:t}),key:e.key,callbackRegister:n}};function H(e,t,n,s){return null===e?null:K(e,{emitCallback:t,getIframeOffset:n,options:s})}const K=(e,t,n="root")=>{try{if(!(0,p.Kn)(e))return e instanceof Array?e.map(((e,s)=>K(e,t,`${n}.${s}`))):e;switch(e.__type){case"callback":{const n=e.id;return(...e)=>{t.emitCallback({id:n,args:e})}}case"react":{const r=e.componentName?e.componentName:a.L.getLazyComponentName(e),p=$(s,r);if(!p)throw new Error(`Component ${e.componentName} is not recognized as card component`);const o=K(e.props,t,`${n}.[${e.componentName}]`);return"Container"===e.componentName&&Object.assign(o,{iframeFocusedFieldPosition:t.getIframeOffset()}),i.createElement(p,{...o})}case"document":return document;case"namedObject":{const n=t.options.namedObjects[e.name];if(!n)throw new Error("Cannot find namedObject");return n}default:return(0,p.UI)(((e,s)=>void 0===s?s:K(s,t,`${n}.${e}`)),e)}}catch(t){return Z.error(`Card Deserialize Error ${t}`),e}}},40188:(e,t,n)=>{n.d(t,{C2:()=>w,EH:()=>G,pi:()=>q});var s=n(22764),i=n(88661),r=n(40327),p=n(95300),a=n(18625),o=n(2844),c=n(24209),l=n(85985),d=n(77176),u=n(38194),m=n(93508),_=n(41398),h=n(17343),C=n(32281),g=n(62337),E=n(13116),S=n(24809).v.isRichText,v=n(55073),f=n(10789);function b(){return{items:[],children:new Map}}function x(e,t){return t&&0!==e.length?x(e.slice(1),t.children.get(e[0])||null):t}class y{constructor(e,t){this._root=b(),e.forEach((e=>{const n=e[t];if(!(0,f.HD)(n))throw new Error("Can't search for non-string attributes");n.toLowerCase().split("").reduce(((t,n)=>(t.items.push(e),t.children.has(n)||t.children.set(n,b()),t.children.get(n))),this._root).items.push(e)}))}search(e){const t=[];let n=null,s={node:this._root,depth:0};const i=[];for(;s;){n=x(e.toLowerCase(),s.node),n&&i.push({node:n,depth:s.depth});const r=s.node.children.values();let p=r.next();for(;!p.done;)t.push({node:p.value,depth:s.depth+1}),p=r.next();s=t.shift()||null}return Array.from(i.reduce(((t,n)=>(n.node.items.forEach((s=>{t.has(s)||t.set(s,{start:n.depth,end:n.depth+e.length})})),t)),new Map).entries()).map((([e,t])=>({item:e,range:t})))}}var w,L=n(90361),N=n(75420),M=n(74850),T=n(36991),I=n(84966),P=n(40018),k=n(15646),A=n(77610),B=n(35416),O=n(44586),D=n(14601),F=n(2834),R=n(78674),Z=n(83078),W=n(5114),U=n(34541);!function(e){e.name="name",e.content="content"}(w||(w={}));const $=/\s+$/;function q(e,t,n){if(!t){if(e.deltaChange.isEmpty)return null;{const t=e.deltaChange.delta.ops.slice(0);let s=t.pop();for(;t.length&&s&&!T.s.isInsertString(s);)s=t.pop();if(s&&T.s.isInsertString(s)&&!$.test(s.insert)){const t=e.deltaChange.delta.ops.reduce(((e,t)=>T.s.isInsertString(t)?e+t.insert.length:T.s.isRetain(t)?e+t.retain:e),0);return new RegExp(`^(.*\\s)?${(0,L.hr)(n)}(\\s.*)?$`).test((0,v.l)(e.deltaChange.delta,e.prevText).slice(Math.max(t-n.length-1,0),t+1))?{start:t-n.length,end:t}:null}return null}}{const{effectStartIndex:s,sizeDelta:i}=e.deltaChange.delta.ops.reduce(((e,t)=>(T.s.isRetain(t)?e.index+=t.retain:T.s.isDelete(t)?(e.effectStartIndex=Math.min(e.effectStartIndex,e.index),e.sizeDelta-=t.delete):T.s.isInsertString(t)?(e.effectStartIndex=Math.min(e.effectStartIndex,e.index),e.index+=t.insert.length,e.sizeDelta+=t.insert.length):T.s.isInsertEmbed(t)&&(e.effectStartIndex=Math.min(e.effectStartIndex,e.index),e.index+=1,e.sizeDelta+=1),e)),{index:0,effectStartIndex:1/0,sizeDelta:0});switch(!0){case s<t.start+n.length:case s>t.end:return null;default:return{...t,end:t.end+i}}}}class G{constructor(e,t,n,i,r,g,E,S,v,f,b,x,w,L,T,I,P,k,A=M.Y.create("Snippets")){var B,O;this._snippetsProvider=e,this._textObserver=t,this._replacementService=n,this._geometryProvider=i,this._geometryLayout=r,this._textFieldLayout=g,this._getCurrentTextMap=E,this._controller=S,this._keyDown=v,this._gnar=f,this._checkingService=b,this._selectionSource=x,this._state=w,this._updateSnippetsShortcutPopupCounter=L,this._isCurrentFieldFocused=T,this._events=I,this._alertStateService=P,this._experimentClient=k,this._log=A,this._subs=[],this._insertionRange=new p.X(null),this._activeSnippet=new p.X(null),this._selectionObservable=(0,a.P)((()=>this._selectionSource.data.changes.pipe((0,l.h)((e=>Boolean(e)))))),this._snippetsDataByName=new y([],"name"),this._snippetsDataByContent=new y([],"content"),this._triggerSequence=U.QQ,this._shortcutPopupSessionCounter=0,this._initialShortcutPopupCounter=0,this.addSnippetsTriggerToAlert=e=>({...e,extra_properties:{...e.extra_properties,snippet_trigger:this._triggerSequence}}),this._initialShortcutPopupCounter=null!==(O=null===(B=this._state.get())||void 0===B?void 0:B.page.snippetsShortcutPopupCounter)&&void 0!==O?O:0,this._snippetsModel=(0,o.aj)([this._insertionRange,this._activeSnippet,this._textFieldLayout.rect.behavior,this._snippetsProvider.snippetsAndSettings]).pipe((0,d.U)((([e,t,n,s])=>e?this._getModel("list",s,e,t):null)),(0,u.B)(),(0,m.O)(null)),this._shortcutPopupModel=this._selectionObservable.pipe((0,_.M)(this._snippetsProvider.snippetsAndSettings),(0,d.U)((([e,t])=>this._getModel("shortcutPopup",t,e))));const D=(new Date).getTime();let F=!0;this._subs.push(this._snippetsProvider.snippetsAndSettings.subscribe((e=>{this._triggerSequence=e.triggerSequence,this._snippetsDataByName=new y(e.snippets,"name"),this._snippetsDataByContent=new y(e.snippets,"content"),this._gnar.snippetsListLoaded(e.snippets.length,F?(new Date).getTime()-D:void 0),F=!1}))),this._subs.push((0,c.T)(this._snippetsModel,this._shortcutPopupModel.pipe((0,l.h)((e=>{var t;return"shortcutPopup"===(null===(t=this._currentModel)||void 0===t?void 0:t.mode)||Boolean(e)}))),this._events.pipe((0,_.M)(this._snippetsProvider.snippetsAndSettings),d.U((([{text:e,textRange:t,onCreate:n},s])=>this._getModel("editor",s,t,void 0,e,n)))),this._isCurrentFieldFocused.pipe((0,l.h)((e=>!e)),(0,h.h)(null)),this._snippetsProvider.snippetsEnabled.pipe((0,l.h)((e=>!e)),(0,h.h)(null))).subscribe((e=>{e?this._show(e):this._hide()}))),this._subs.push(this._textObserver.contentChanges.async.pipe((0,_.M)(this._insertionRange.pipe((0,m.O)(null)),this._snippetsProvider.snippetsAndSettings.pipe((0,m.O)(null)))).subscribe((([e,t,n])=>{if(n&&!n.enabled)return;const s=(null==n?void 0:n.triggerSequence)||U.QQ,i=q(e,t,s);this._insertionRange.next(i),n&&t&&null===i&&this._dismiss("edit"),null===t&&i&&(this._gnar.snippetsTriggerSequenceEntered(null!=n,s),n&&this._gnar.snippetsListPresented(s))}))),this._subs.push(this._keyDown.pipe((0,_.M)(this._insertionRange.pipe((0,m.O)(null)),this._snippetsModel,this._selectionObservable.pipe((0,m.O)(null)),this._isCurrentFieldFocused,this._snippetsProvider.snippetsAndSettings)).subscribe((([e,t,n,i,r,p])=>{if(!p.enabled)return;const a=(0,s.O)();if(r&&(e=>e.key.toLowerCase()===p.creationShortcut&&(a.config.systemInfo.os.isMac?e.ctrlKey&&!e.altKey&&!e.metaKey&&!e.shiftKey:e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey))(e)&&(!this._controller.isVisible()||this._controller.isShortcutPopupShown()&&i||this._controller.isEmptySnippetsListShown())){this._gnar.snippetsShortcutUsed();const t=this._getModel("editor",p,i);if(t)return this._updateSnippetsShortcutPopupCounter(-1),this._hide(),this._show(t),void e.preventDefault()}if(e.keyCode===N.VD.Escape)return this._dismiss("esc"),void e.stopPropagation();t&&(e.keyCode!==N.VD.Tab&&e.keyCode!==N.VD.RightArrow&&e.keyCode!==N.VD.Return||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey?e.keyCode!==N.VD.UpArrow&&e.keyCode!==N.VD.DownArrow||(e.preventDefault(),e.stopPropagation(),this._shiftActiveSnippet(e.keyCode===N.VD.UpArrow,n)):t&&n&&n.activeSnippet&&(e.preventDefault(),e.stopPropagation(),this._applySnippet(n.activeSnippet.snippet,t,p.triggerSequence)))}))),this._subs.push(this._textFieldLayout.scroll.behavior.pipe((0,_.M)(this._snippetsModel),(0,l.h)((([e,t])=>!!t))).subscribe((()=>{this._dismiss("scroll")}))),this._subs.push(this._alertStateService.newlyHighlightedAlerts.pipe((0,_.M)(this._snippetsProvider.snippetsEnabled),l.h((([e,t])=>t&&C.S.isSuggestedSnippetAlert(e)))).subscribe((()=>{this._gnar.suggestedSnippetHighlightShow()}))),this._gnar.snippetsFeatureInit()}_applySnippet(e,t,n){const s=this._experimentClient.isGateEnabled(i.K.RtfSnippets)&&S(e.contentDelta),r=s?e.contentDelta:e.content;this._dismiss("apply"),this._gnar.snippetsSnippetApplied(s,t.end-t.start-n.length),this._replacementService.performReplacement(t,r,!1),this._checkingService&&this._checkingService.onSnippetFeedback({kind:I.JE.SNIPPET_ACCEPTED,snippetUuid:e.id})}_selectSnippet(e){this._activeSnippet.next(e)}_getSnippetsForText(e){return[...this._snippetsDataByName.search(e).map((e=>({snippet:e.item,range:e.range,location:w.name}))),...this._snippetsDataByContent.search(e).map((e=>({snippet:e.item,range:e.range,location:w.content})))].reduce(((e,t)=>(e.set.has(t.snippet.id)||e.result.push(t),e.set.add(t.snippet.id),e)),{set:new Set,result:new Array}).result}_shiftActiveSnippet(e,t){var n;if(t&&t.matches.length&&t.activeSnippet){const s=t.activeSnippet.index;s>-1?this._activeSnippet.next((null===(n=t.matches[Math.min(t.matches.length-1,Math.max(s+(e?-1:1),0))])||void 0===n?void 0:n.snippet)||null):this._activeSnippet.next(null)}else this._activeSnippet.next(null)}_dismiss(e){this._insertionRange.next(null),this._activeSnippet.next(null),"apply"!==e&&this._gnar.snippetsListDismissed(e)}_getModel(e,t,n,s,i,r){var p;const a=this._getCurrentTextMap(),o=n&&this._geometryProvider.create(n,a),c=o?this._geometryProvider.getClientRects(o):null,l=null!==(p=c&&c.length&&("list"===e?c[0]:c[c.length-1]))&&void 0!==p?p:null,d=l&&(0,E.Z)(g.UL.setPosition(this._geometryLayout.getApproximateConversionContext().clientToRelative(l),l),this._textFieldLayout.rect.getApproximate().client,this._textFieldLayout.scroll.getApproximate())||"editor"===e&&(u=this._textFieldLayout.rect.getApproximate().client,g.UL.setPosition(u,{height:1,width:1}));var u;if(!d)return null;if("shortcutPopup"===e){if(this._initialShortcutPopupCounter<0||this._initialShortcutPopupCounter>=3)return null;if(0===this._shortcutPopupSessionCounter&&this._updateSnippetsShortcutPopupCounter(this._initialShortcutPopupCounter+1),this._shortcutPopupSessionCounter%3!=0||this._shortcutPopupSessionCounter>6)return this._shortcutPopupSessionCounter++,null;this._shortcutPopupSessionCounter++}const m=n?this._getSnippetsForText(a.getPlainText().substring(n.start+t.triggerSequence.length,n.end)):[],_=n?n.end-n.start-t.triggerSequence.length:0,h=s?m.findIndex((e=>e.snippet.id===s.id)):-1;return{rect:d,matches:m,mode:e,applySnippet:e=>{const s=m.find((t=>t.snippet.id===e));n&&s&&this._applySnippet(s.snippet,n,t.triggerSequence)},selectSnippet:e=>{const t=m.find((t=>t.snippet.id===e));t&&this._selectSnippet(t.snippet)},addSnippet:async(e,t)=>{await this._snippetsProvider.addSnippet(e,t)&&(r&&r(),this._gnar.snippetsInlineSnippetCreated()),this._hide()},activeSnippet:m.length?s&&h>-1?{snippet:s,index:h}:{snippet:m[0].snippet,index:0}:null,matchLength:_,triggerSequence:t.triggerSequence,creationShortcut:t.creationShortcut,content:i||("list"!==e&&n?a.getPlainText().substring(n.start,n.end):"")}}_show(e){this._currentModel=e,this._controller.show(e)}_hide(){this._currentModel=null,this._controller.hide()}static _subscribeToMuteOrUndoMuteButtonClick(e,t,n,s,i){e.add(t.pipe(l.h(s),_.M(n),d.U((([e,t])=>B.nL.hasItems(t)?(0,r.pipe)(t.currentLens.items.get(e.id),W.fold((()=>null),(e=>e.value))):null)),l.h(L.fQ),l.h(A.C.isSuggestedSnippetItem)).subscribe(i))}dispose(){this._subs.forEach((e=>e.unsubscribe()))}initCardActionsProcessing(e,t,n,s){return new O.y((()=>{const i=new D.w;return i.add(e.pipe(l.h(k.lY.isCreateSnippetAction),F.b((()=>{this._gnar.suggestedSnippetCardAccept("assistant")}))).subscribe((({snippetName:e,snippetText:t})=>{this._snippetsProvider.addSnippet(e,t)}))),i.add(e.pipe(l.h(k.lY.isSuggestedSnippetSuccessDismissed)).subscribe((e=>{(0,r.pipe)(t.getById(e.alertId),W.chain(P.bZ.getRawId),W.fold((()=>this._log.error("Tried to acknowledge nonexistent snippet alert from the sidebar",{alertId:e.alertId})),(e=>{var t;return null===(t=this._checkingService)||void 0===t?void 0:t.onAlertAcknowledged(e,I.e3.Sidebar)})))}))),i.add(n.pipe(l.h(A.C.isSuggestedSnippetItem)).subscribe((()=>{this._gnar.suggestedSnippetMiniCardShow()}))),i.add(e.pipe(l.h(k.lY.isAlertCardShow),d.U((e=>e.alertId)),R.b(300)).subscribe((e=>(0,r.pipe)(t.getById(e),W.filter(P.bZ.isSuggestedSnippet),Z.bw((()=>{this._gnar.suggestedSnippetCardLook("assistant")})))))),i.add(e.pipe(l.h(k.lY.isAlertIgnoreAction)).subscribe((e=>(0,r.pipe)(t.getById(e.alertId),W.filter(P.bZ.isSuggestedSnippet),Z.bw((()=>{this._gnar.suggestedSnippetCardDismiss("assistant")})))))),G._subscribeToMuteOrUndoMuteButtonClick(i,e,s,k.lY.isMuteCategoryAction,(()=>{this._gnar.suggestedSnippetCardDeactivate("assistant")})),G._subscribeToMuteOrUndoMuteButtonClick(i,e,s,k.lY.isUndoMuteCategoryAction,(()=>{this._gnar.suggestedSnippetCardUndoDeactivate("assistant")})),()=>i.unsubscribe()}))}}},88434:(e,t,n)=>{n.d(t,{L:()=>v,O:()=>y});var s=n(22764),i=n(92783),r=n(27378),p=n(40188),a=n(20855),o=n(12187),c=n(80584);const l=e=>{const t=(50-(e.range.end-e.range.start))/2-3;return e.location===p.C2.content?{prefix:d(e.snippet.content,e.range.start,t),content:e.snippet.content.slice(e.range.start,e.range.end),suffix:e.snippet.content.slice(e.range.end)}:{content:e.snippet.content}},d=(e,t,n=1/0)=>e.slice(0,t).split(" ").reduceRight(((e,t,s)=>{let i=e.text,r=e.wordsLeft;return r?(i.length+t.length<n&&(i=i?`${t} ${i}`:t||" "),t?r--:i=`${i}`,!r&&s&&(i=`...${i}`),{text:i,wordsLeft:r}):e}),{text:"",wordsLeft:2}).text,u=()=>(0,s.O)().config.systemInfo.os.isMac?"CONTROL":"ALT",m=()=>r.createElement("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M16,8C16,12.418 12.418,16 8,16C3.582,16 0,12.418 0,8C0,3.582 3.582,0 8,0C12.418,0 16,3.582 16,8Z",fill:"#9FA6BF"}),r.createElement("path",{d:"M9.045,9.727C9.093,9.989 9.339,10.169 9.605,10.169L10.443,10.169L10.929,10.1C10.152,11.241 8.802,11.766 7.326,11.534C6.125,11.346 5.093,10.533 4.657,9.397C3.669,6.82 5.551,4.36 8.003,4.36C9.282,4.36 10.403,5.128 11.046,6.031C11.217,6.277 11.554,6.348 11.801,6.177C12.034,6.015 12.102,5.707 11.962,5.465C11.073,4.077 9.475,3.189 7.679,3.309C5.34,3.466 3.447,5.38 3.312,7.721C3.156,10.444 5.316,12.668 8.003,12.668C9.415,12.668 10.678,12.054 11.539,11.059L11.437,11.63L11.437,12.145C11.437,12.411 11.617,12.657 11.878,12.705C12.222,12.767 12.522,12.504 12.522,12.171L12.522,9.084L9.578,9.084C9.246,9.084 8.983,9.384 9.045,9.727Z",fill:"white"})),_=()=>r.createElement("svg",{viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M9.354,4.603L5,0.249L0.646,4.603C0.451,4.798 0.451,5.115 0.646,5.31C0.842,5.505 1.158,5.505 1.354,5.31L5,1.663C5,1.663 8.646,5.31 8.646,5.31C8.842,5.505 9.158,5.505 9.354,5.31C9.549,5.115 9.549,4.798 9.354,4.603Z"})),h=()=>r.createElement("svg",{viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.646,1.183L5,5.536L9.354,1.183C9.549,0.988 9.549,0.671 9.354,0.476C9.158,0.28 8.842,0.28 8.646,0.476L5,4.122C5,4.122 1.354,0.476 1.354,0.476C1.158,0.28 0.842,0.28 0.646,0.476C0.451,0.671 0.451,0.988 0.646,1.183Z"})),C=()=>r.createElement("svg",{viewBox:"0 0 4 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M2,12C0.895,12 0,12.895 0,14C0,15.105 0.895,16 2,16C3.105,16 4,15.105 4,14C4,12.895 3.105,12 2,12ZM2,13C2.552,13 3,13.448 3,14C3,14.552 2.552,15 2,15C1.448,15 1,14.552 1,14C1,13.448 1.448,13 2,13ZM2,6C0.895,6 0,6.895 0,8C0,9.105 0.895,10 2,10C3.105,10 4,9.105 4,8C4,6.895 3.105,6 2,6ZM2,7C2.552,7 3,7.448 3,8C3,8.552 2.552,9 2,9C1.448,9 1,8.552 1,8C1,7.448 1.448,7 2,7ZM2,0C0.895,0 0,0.895 0,2C0,3.105 0.895,4 2,4C3.105,4 4,3.105 4,2C4,0.895 3.105,0 2,0ZM2,1C2.552,1 3,1.448 3,2C3,2.552 2.552,3 2,3C1.448,3 1,2.552 1,2C1,1.448 1.448,1 2,1Z"})),g=()=>r.createElement("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M25.5,16C25.5,10.753 21.247,6.5 16,6.5C10.753,6.5 6.5,10.753 6.5,16C6.5,21.247 10.753,25.5 16,25.5C21.247,25.5 25.5,21.247 25.5,16ZM24.5,16C24.5,20.694 20.694,24.5 16,24.5C11.306,24.5 7.5,20.694 7.5,16C7.5,11.306 11.306,7.5 16,7.5C20.694,7.5 24.5,11.306 24.5,16ZM15.5,15.5L11.5,15.5C11.224,15.5 11,15.724 11,16C11,16.276 11.224,16.5 11.5,16.5L15.5,16.5L15.5,20.5C15.5,20.776 15.724,21 16,21C16.276,21 16.5,20.776 16.5,20.5L16.5,16.5L20.5,16.5C20.776,16.5 21,16.276 21,16C21,15.724 20.776,15.5 20.5,15.5L16.5,15.5L16.5,11.5C16.5,11.224 16.276,11 16,11C15.724,11 15.5,11.224 15.5,11.5L15.5,15.5Z"})),E=()=>r.createElement("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M9,22.5C9,23.881 10.119,25 11.5,25L22.5,25C22.776,25 23,24.776 23,24.5C23,24.224 22.776,24 22.5,24L11.5,24C10.672,24 10,23.328 10,22.5C10,21.672 10.672,21 11.5,21L22.5,21C22.776,21 23,20.776 23,20.5L23,13.5C23,13.224 22.776,13 22.5,13C22.224,13 22,13.224 22,13.5L22,20C22,20 11.5,20 11.5,20C10.937,20 10.418,20.186 10,20.5L10,9.5C10,8.672 10.672,8 11.5,8C11.5,8 16.5,8 16.5,8C16.776,8 17,7.776 17,7.5C17,7.224 16.776,7 16.5,7L11.5,7C10.119,7 9,8.119 9,9.5L9,22.5ZM22.5,22L11.5,22C11.224,22 11,22.224 11,22.5C11,22.776 11.224,23 11.5,23L22.5,23C22.776,23 23,22.776 23,22.5C23,22.224 22.776,22 22.5,22ZM22,7L19.5,7C19.224,7 19,7.224 19,7.5C19,7.776 19.224,8 19.5,8L22,8L22,10.5C22,10.776 22.224,11 22.5,11C22.776,11 23,10.776 23,10.5L23,8L25.5,8C25.776,8 26,7.776 26,7.5C26,7.224 25.776,7 25.5,7L23,7L23,4.5C23,4.224 22.776,4 22.5,4C22.224,4 22,4.224 22,4.5L22,7Z"})),S=()=>r.createElement("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M24.5,23.5C24.776,23.5 25,23.724 25,24C25,24.276 24.776,24.5 24.5,24.5L7.5,24.5C7.224,24.5 7,24.276 7,24C7,23.724 7.224,23.5 7.5,23.5L24.5,23.5Z"}),r.createElement("path",{d:"M20.894,8.354L22.146,9.606C22.732,10.192 22.732,11.142 22.146,11.727L12.374,21.5L9,21.5L9,18.126L18.773,8.354C19.359,7.768 20.308,7.768 20.894,8.354ZM17.666,10.873L10,18.54L10,20.5L11.96,20.5L19.626,12.833L17.666,10.873ZM19.48,9.061L18.373,10.166L20.333,12.126L21.439,11.02C21.635,10.825 21.635,10.508 21.439,10.313L20.187,9.061C19.992,8.865 19.675,8.865 19.48,9.061Z"})),v=e=>{let t=!1;const n=r.useRef(null),[s,p]=r.useState({menuOpen:!1,visibleSnippetsAmount:30});r.useEffect((()=>a()));const a=()=>{const{activeSnippet:i}=e;if(i&&n.current){const e=58,r=n.current,p=r.scrollTop,a=i.index*e,o=Math.max(0,i.index*e-2*e),c=p+e/2<o?o:p-e/2>a?a:p;c!==p&&(t=!0,r.scrollTop=c,setTimeout((()=>{t=!1}),0));const l=(s.visibleSnippetsAmount-1)*e;p+r.offsetHeight>l&&d()}},d=()=>{p((e=>({...e,visibleSnippetsAmount:s.visibleSnippetsAmount+30})))},v=t=>{p((e=>({...e,menuOpen:!1}))),e.onOpenLink(t)};return r.createElement("div",{className:c.snippetsCard},e.matches.length?r.createElement("dl",{ref:n,className:c.snippetsCard__snippets},e.matches.slice(0,s.visibleSnippetsAmount).map((n=>{var s,i;return r.createElement("div",{...(0,o.Sh)(c.snippetsCard__snippet,n.snippet.id===(null===(i=null===(s=e.activeSnippet)||void 0===s?void 0:s.snippet)||void 0===i?void 0:i.id)?c.snippetsCard__snippet_active:null),key:n.snippet.id,onClick:()=>e.applySnippet(n.snippet.id),onMouseEnter:()=>{return s=n.snippet.id,void(t||e.selectSnippet(s));var s}},r.createElement(f,{match:n,triggerSequence:e.triggerSequence}),r.createElement(b,{match:n,content:l(n)}))}))):r.createElement(x,{creationShortcut:e.creationShortcut}),r.createElement("div",{className:c.snippetsCard__footer},r.createElement("div",{className:c["snippetsCard__footer-logo"]},r.createElement(m,null)),r.createElement("div",{className:c["snippetsCard__footer-hints"]},r.createElement("span",{className:c.buttonTip__group},"navigate"," ",r.createElement("span",{className:c.buttonTip},r.createElement(_,null))," ",r.createElement("span",{className:c.buttonTip},r.createElement(h,null))),r.createElement("span",{className:c.buttonTip__group},"select ",r.createElement("span",{className:c.buttonTip},"Enter")),r.createElement("span",{className:c.buttonTip__group},"cancel ",r.createElement("span",{className:c.buttonTip},"Esc"))),r.createElement("span",{...(0,o.Sh)(c["snippetsCard__footer-menuButton"],s.menuOpen?c["snippetsCard__footer-menuButton_active"]:null),onClick:()=>{p((e=>({...e,menuOpen:!s.menuOpen})))}},r.createElement(C,null)),s.menuOpen&&r.createElement("ul",{className:c["snippetsCard__footer-menu"]},r.createElement("li",{className:c["snippetsCard__footer-menuItem"]},r.createElement("a",{target:"_blank",rel:"noreferrer",href:(0,i.Um)().snippetsNew,onClick:()=>{v("new")}},r.createElement("span",{className:c["snippetsCard__footer-menuItem-icon"]},r.createElement(g,null)),r.createElement("span",{className:c["snippetsCard__footer-menuItem-textGroup"]},r.createElement("span",{className:c["snippetsCard__footer-menuItem-text"]},"Create snippet"),r.createElement("span",{className:c["snippetsCard__footer-shortcut"]},r.createElement("span",{className:c.buttonTip},u())," +"," ",r.createElement("span",{className:c.buttonTip},e.creationShortcut.toUpperCase()))))),r.createElement("li",{className:c["snippetsCard__footer-menuItem"]},r.createElement("a",{target:"_blank",rel:"noreferrer",href:(0,i.Um)().snippetsAdmin,onClick:()=>{v("library")}},r.createElement("span",{className:c["snippetsCard__footer-menuItem-icon"]},r.createElement(E,null)),r.createElement("span",{className:c["snippetsCard__footer-menuItem-textGroup"]},r.createElement("span",{className:c["snippetsCard__footer-menuItem-text"]},"Open library")))),r.createElement("li",{className:c["snippetsCard__footer-menuItem"]},r.createElement("a",{target:"_blank",rel:"noreferrer",href:(0,i.Um)().snippetsSettings,onClick:()=>{v("customize")}},r.createElement("span",{className:c["snippetsCard__footer-menuItem-icon"]},r.createElement(S,null)),r.createElement("span",{className:c["snippetsCard__footer-menuItem-textGroup"]},r.createElement("span",{className:c["snippetsCard__footer-menuItem-text"]},"Edit shortcut"),r.createElement("span",{className:c["snippetsCard__footer-shortcut"]},r.createElement("span",{...(0,o.Sh)(c.buttonTip,c["snippetsCard__footer-editShortcut"])},e.triggerSequence))))))))},f=e=>r.createElement("dt",{className:c["snippetsCard__snippet-name"]},r.createElement("span",{...(0,o.Sh)(c["snippetsCard__snippet-logo"],"PERSONAL"===e.match.snippet.hierarchy?c["snippetsCard__snippet-logo-personal"]:c["snippetsCard__snippet-logo-global"])}),r.createElement("span",{className:c["snippetsCard__snippet-name-match"]},e.triggerSequence),e.match.location===p.C2.name?r.createElement(r.Fragment,null,e.match.snippet.name.slice(0,e.match.range.start),r.createElement("span",{className:c["snippetsCard__snippet-name-match"]},e.match.snippet.name.slice(e.match.range.start,e.match.range.end)),e.match.snippet.name.slice(e.match.range.end)):r.createElement(r.Fragment,null,e.match.snippet.name)),b=e=>r.createElement("dd",{className:c["snippetsCard__snippet-content"]},e.match.location===p.C2.content?r.createElement(r.Fragment,null,e.content.prefix,r.createElement("span",{className:c["snippetsCard__snippet-content-match"]},e.content.content),e.content.suffix):r.createElement(r.Fragment,null,e.content.content)),x=e=>r.createElement("div",{className:c.snippetsCard__empty},r.createElement("div",{className:c["snippetsCard__empty-pic"]}),r.createElement("span",{className:c["snippetsCard__empty-title"]},"Your search did not match any snippets"),r.createElement("div",{className:c["snippetsCard__empty-shortcut"]},"To create one, press ",r.createElement("span",{...(0,o.Sh)(c.buttonTip)},u()),"+",r.createElement("span",{...(0,o.Sh)(c.buttonTip)},e.creationShortcut.toUpperCase()))),y=e=>(r.useEffect((()=>{e.onShow()}),[]),r.createElement("div",{className:c.snippetsCreateBtn},r.createElement("span",{className:c.snippetsCreateBtn__logo},r.createElement("svg",{viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M10.97,0C4.912,0 0,4.91 0,10.968C0,17.026 4.912,21.938 10.97,21.938C17.03,21.938 21.94,17.026 21.94,10.968C21.94,4.91 17.03,0 10.97,0ZM17.133,16.713C17.133,17.169 16.748,17.529 16.276,17.443C15.916,17.379 15.696,17.041 15.696,16.677L15.696,15.97L15.821,15.188C14.601,16.595 12.827,17.401 10.965,17.394C7.281,17.394 4.315,14.344 4.528,10.612C4.713,7.402 7.308,4.746 10.514,4.532C12.978,4.366 15.166,5.609 16.384,7.454L16.38,7.454C16.572,7.864 16.484,8.24 16.163,8.464C16.038,8.552 15.889,8.599 15.736,8.599C15.494,8.599 15.267,8.48 15.128,8.282L15.128,8.274C14.246,7.044 12.708,6.007 10.956,6.007C7.593,6.007 5.012,9.377 6.368,12.912C6.965,14.468 8.38,15.582 10.028,15.84C12.051,16.158 13.902,15.462 14.968,13.898L14.302,14.015L13.152,14.015C12.788,14.015 12.45,13.795 12.385,13.435C12.3,12.965 12.66,12.58 13.115,12.58L17.133,12.58L17.133,16.713Z"}))),r.createElement("span",{className:c.snippetsCreateBtn__textGroup},r.createElement("span",{onClick:()=>e.openEditor(),className:c.snippetsCreateBtn__text},"Create a snippet"),r.createElement("span",{onClick:()=>e.openEditor(),className:c.snippetsCreateBtn__shortcut},r.createElement("span",{className:c.buttonTip},u())," +"," ",r.createElement("span",{className:c.buttonTip},e.creationShortcut.toUpperCase()))),r.createElement(a.u,{offset:{vertical:-12},message:"Turn highlighted text into a snippet to use it later.",showDelay:300},r.createElement("span",{className:c.snippetsCreateBtn__tooltip},"?"))))},71031:(e,t,n)=>{n.d(t,{M:()=>l});var s=n(57050),i=n(27378),r=n(80584),p=n(4557),a=n(95195),o=n(5114);const c={nameEmpty:"Name cannot be empty.",nameTooLong:"Snippet names cannot exceed 30 characters.",textEmpty:"Snippet cannot be empty.",textTooLong:"Snippets cannot exceed 1,000 characters."},l=e=>{const[t,n]=i.useState(""),[l,d]=i.useState(e.content),[u,m]=i.useState(""),[_,h]=i.useState(""),C=(t,n)=>{(0,s.zG)(p.B.validate(t,n,c),a.g_((e=>{(0,s.zG)(e.nameError,o.fold((()=>m("")),m)),(0,s.zG)(e.contentError,o.fold((()=>h("")),h))}),(()=>{e.addSnippet(t,n),m(""),h("")})))};return i.createElement("div",{className:r.snippetsEditor,onKeyUp:e=>{"Enter"===e.key&&C(t,l)}},i.createElement("div",{className:r.snippetsEditor__topWrapper},i.createElement("input",{onMouseDown:e=>e.stopPropagation(),onChange:e=>{const t=e.target;n(t.value)},autoFocus:!0,className:r.snippetsEditor__topWrapper_name,placeholder:"New snippet",name:"snippet-name-input"}),u.length?i.createElement("div",{className:r.snippetsEditor__topWrapper_nameError},u):null,i.createElement("textarea",{onMouseDown:e=>e.stopPropagation(),onChange:e=>{const t=e.target;d(t.value)},className:r.snippetsEditor__topWrapper_content,placeholder:"Write a snippet of text that can be used again and again.",value:l,name:"snippet-content-input"}),_.length?i.createElement("div",{className:r.snippetsEditor__topWrapper_contentError},_):null),i.createElement("div",{className:r.snippetsEditor__bottomWrapper},i.createElement("div",{className:r.snippetsEditor__bottomWrapper_logo},i.createElement("svg",{viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M10.97,0C4.912,0 0,4.91 0,10.968C0,17.026 4.912,21.938 10.97,21.938C17.03,21.938 21.94,17.026 21.94,10.968C21.94,4.91 17.03,0 10.97,0ZM17.133,16.713C17.133,17.169 16.748,17.529 16.276,17.443C15.916,17.379 15.696,17.041 15.696,16.677L15.696,15.97L15.821,15.188C14.601,16.595 12.827,17.401 10.965,17.394C7.281,17.394 4.315,14.344 4.528,10.612C4.713,7.402 7.308,4.746 10.514,4.532C12.978,4.366 15.166,5.609 16.384,7.454L16.38,7.454C16.572,7.864 16.484,8.24 16.163,8.464C16.038,8.552 15.889,8.599 15.736,8.599C15.494,8.599 15.267,8.48 15.128,8.282L15.128,8.274C14.246,7.044 12.708,6.007 10.956,6.007C7.593,6.007 5.012,9.377 6.368,12.912C6.965,14.468 8.38,15.582 10.028,15.84C12.051,16.158 13.902,15.462 14.968,13.898L14.302,14.015L13.152,14.015C12.788,14.015 12.45,13.795 12.385,13.435C12.3,12.965 12.66,12.58 13.115,12.58L17.133,12.58L17.133,16.713Z"}))),i.createElement("div",{className:r.snippetsEditor__bottomWrapper_text},"This snippet will be added to your default collection. To use it later, type",i.createElement("span",{className:r.buttonTip},e.triggerSequence)),i.createElement("div",{className:r.snippetsEditor__bottomWrapper_buttons},i.createElement("div",{onClick:()=>e.dismiss(),className:r.snippetsEditor__bottomWrapper_cancelBtn,"data-name":"cancel-snippet-button"},"Cancel"),i.createElement("div",{onClick:()=>C(t,l),className:r.snippetsEditor__bottomWrapper_saveBtn,"data-name":"save-snippet-button"},"Save"))))}},46777:(e,t,n)=>{n.d(t,{q:()=>i});var s=n(27378);const i=e=>s.createElement("div",{onKeyDown:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation()},e.children)},10789:(e,t,n)=>{function s(e){return Number.isFinite(e)||e===Number.NEGATIVE_INFINITY||e===Number.POSITIVE_INFINITY}function i(e){return"string"==typeof e}n.d(t,{HD:()=>i,hj:()=>s})},80584:e=>{e.exports={snippetsEditor:"_1QGZn",snippetsEditor__topWrapper:"_1mxO5",snippetsEditor__topWrapper_name:"_21OqE",snippetsEditor__topWrapper_nameError:"_3WrA4",snippetsEditor__topWrapper_content:"_2Osmi",snippetsEditor__topWrapper_contentError:"_32mdE",snippetsEditor__bottomWrapper:"ans9X",snippetsEditor__bottomWrapper_logo:"c0O33",snippetsEditor__bottomWrapper_text:"_2uzuH",snippetsEditor__bottomWrapper_buttons:"_21hJF",snippetsEditor__bottomWrapper_cancelBtn:"hQBPX",snippetsEditor__bottomWrapper_saveBtn:"_3QPmq",snippetsCreateBtn:"_1P42Q",snippetsCreateBtn__logo:"_2XGoR",snippetsCreateBtn__textGroup:"_2QONg",snippetsCreateBtn__text:"_11-LY",snippetsCreateBtn__shortcut:"_26xGk",snippetsCreateBtn__tooltip:"_2cqo9",snippetsCard:"_3dxQw",snippetsCard__snippets:"pURh0",snippetsCard__snippet:"_1GpcE",snippetsCard__snippet_active:"_1qQiP","snippetsCard__snippet-logo":"_2T6IO","snippetsCard__snippet-logo-personal":"ix5X4","snippetsCard__snippet-logo-global":"qrnjA","snippetsCard__snippet-name":"Q8VGy","snippetsCard__snippet-name-match":"guBYZ","snippetsCard__snippet-content":"_2mZiD","snippetsCard__snippet-content-match":"IniHV",snippetsCard__footer:"_2dtaG","snippetsCard__footer-logo":"_3gH2M","snippetsCard__footer-shortcut":"_1w9po","snippetsCard__footer-hints":"_484sZ","snippetsCard__footer-menuButton":"_1R0o-","snippetsCard__footer-menuButton_active":"_1HAga","snippetsCard__footer-editShortcut":"_2rv26","snippetsCard__footer-menu":"_3mLM-","snippetsCard__footer-menuItem":"_39MWm","snippetsCard__footer-menuItem-text":"_2RRzt","snippetsCard__footer-menuItem-icon":"_31HNb","snippetsCard__footer-menuItem-textGroup":"_1zFr2",snippetsCard__empty:"_1AZ3A","snippetsCard__empty-pic":"_3w1r-","snippetsCard__empty-title":"_3o-c8","snippetsCard__empty-shortcut":"Js6HX",buttonTip:"ImChS",buttonTip__group:"_1-RD5"}}}]);