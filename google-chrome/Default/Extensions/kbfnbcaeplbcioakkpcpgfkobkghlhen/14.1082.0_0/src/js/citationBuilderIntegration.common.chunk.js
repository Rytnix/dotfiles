(self.webpackChunk=self.webpackChunk||[]).push([[3896],{51897:(e,t,n)=>{var a=n(25682),o="chrome-extension://__MSG_@@extension_id__/",i="moz-extension://__MSG_@@extension_id__/",l="safari-web-extension://__MSG_@@extension_id__/",r=self.GR_RESOURCE_ROOT||o,c=self.GR_RESOURCE_ROOT||i,s=self.GR_RESOURCE_ROOT||l;e.exports={__css:a.toString().replace(new RegExp(o,"g"),r).replace(new RegExp(i,"g"),c).replace(new RegExp(l,"g"),s),...a.locals}},20271:(e,t,n)=>{n.d(t,{I:()=>s,O:()=>a});var a,o=n(27378),i=n(41572),l=n(88056),r=n(19429),c=n(35407);!function(e){e.Context=o.createContext(l.Y.invariantContent("AssistantTextResources")),e.holder=r.VF((()=>({setGoalsTooltip:"Set goals to get tailored writing suggestions",proofitTooltip:"Expert writing help"})))}(a||(a={}));const s=c.Pj(c.GG({denali:i.m.holder,assistant:a.holder}))((()=>({denali:{}})))},77697:(e,t,n)=>{n.r(t),n.d(t,{createCitationBuilderViewModel:()=>y});var a=n(57050),o=n(5802),i=n(41966);const l={priority:o.P.Priority.low,timeout:o.P.DefaultTimeout,position:o.P.Position.bottomLeft,viewType:o.P.ViewType.standard};var r;!function(e){e.createFactory=function(){return{citationCopied:i.r.createBuilder().build(l),turnedOff:i.r.createBuilder().build(l),intextCopied:i.r.createBuilder().build(l),feedbackSubmitted:i.r.createBuilder().build(l)}}}(r||(r={}));var c=n(40327),s=n(36596);function d(e){var t,n;if(self.navigator&&self.navigator.clipboard&&self.navigator.clipboard.write){const t=new Blob([e],{type:"text/html"}),n=new Blob([e.replace(/<\/?\w+>/gm,"")],{type:"text/plain"}),a=new ClipboardItem({"text/html":t,"text/plain":n});navigator.clipboard.write([a])}else{const a=document.createElement("div");a.innerHTML=e,a.style.position="fixed",a.style.pointerEvents="none",a.style.opacity="0",document.body.appendChild(a),null===(t=self.getSelection())||void 0===t||t.removeAllRanges();const o=document.createRange();o.selectNode(a),null===(n=self.getSelection())||void 0===n||n.addRange(o),document.execCommand("copy"),document.body.removeChild(a)}}var u=n(83078),m=n(5114);var p=n(24441);const b=(e,t)=>({notify:(n,a,o)=>{a.forEach((({type:a})=>{switch(a){case"notify":n===p._&&t.popActiveView();break;case"closeCard":e()}}))},activeView:t.activeView});var g=n(6312),f=n(70026),v=n(61813),h=n(55415),E=n(38983);function y(e,t,n){let o=[];const i=E.h.create(g.D.State.citeSource),l=()=>i.set(g.D.State.citeSource),p=()=>i.set(g.D.State.citeSourceDisabled),y=new f.A(g.D.View.defaultView,g.D.View.defaultView),C=new v.y(E.h.create([]),r.createFactory(),1,5e3),w=b(l,y),k=((e,t,n,a)=>({domain:e,disablePermanently:t,disableForSession:n,openWindow:a}))(e.domain,(()=>{n.citePopupButtonDisable(n.domain,"permanent",n.sessionId,"citation-builder");o.push({dispose:()=>{e.disableCitationBuilder()},id:"disableOnDispose"}),p(),C.enqueue("turnedOff").subscribe((t=>{"shown"!==t&&(e.disableCitationBuilder(),o=o.filter((({id:e})=>"disableOnDispose"!==e)))}))}),(()=>{n.citePopupButtonDisable(n.domain,"session",n.sessionId,"citation-builder"),p()}),(()=>(n.citePopupButtonClick(n.domain,n.sessionId),i.set(g.D.State.showWindow)))),_=(e=>({citationStyle:e.style,sourceType:e.parsedCitation.view((e=>e.kind)),setCitationStyle:t=>{e.setStyle(t)}}))(t),S=((e,t,n,a)=>({fullCitation:e.fullCitation,copyFullCitation:()=>{(0,c.pipe)(e.fullCitation.get(),m.map(s.GenerationModel.Utils.generatedCitationToRtf),u.bw((e=>{d(e),t.enqueue("citationCopied").subscribe(),n()}))),a.citeCopyButtonClick(e.style.get(),a.domain,a.sessionId,e.parsedCitation.get().kind)},copyInTextCitation:()=>{(0,c.pipe)(e.inTextCitation.get(),m.map((e=>({citation:e,rtf:s.GenerationModel.Utils.generatedCitationToRtf(e)}))),u.bw((({citation:e,rtf:a})=>{d(a),t.enqueue("intextCopied",{params:{citation:e}}).subscribe(),n()}))),a.citeCopyIntextClick(e.style.get(),a.domain,a.sessionId,e.parsedCitation.get().kind)}}))(t,C,l,n),x=((e,t,n,a)=>({domain:e.domain,submitFeedback(o,i,l){e.feedbackSentButtonClick((i||"")+(void 0===l?"":` - ${l}`),"citationBuilder",o),n.enqueue("feedbackSubmitted").subscribe(),a(),t.popActiveView()}}))(n,y,C,l),B=(0,a.zG)(e,h.H6("onboardingSeen","setOnboardingSeen"));return{citation:e.citation,state:i,router:y,header:w,gButton:k,styleTypeSelector:_,citationView:S,feedbackView:x,notificationManager:C,onboarding:B,gnar:n,dispose(){o.forEach((e=>e.dispose()))}}}},6312:(e,t,n)=>{var a;n.d(t,{D:()=>a}),function(e){let t,n,a;!function(e){e.citeSource="citeSource",e.citeSourceDisabled="citeSourceDisabled",e.showWindow="showWindow"}(t=e.State||(e.State={})),function(e){e.Default="Default",e.EditCitation="EditCitation",e.AddMissingInformation="AddMissingInformation",e.Feedback="Feedback"}(n=e.ViewType||(e.ViewType={})),function(e){e.defaultView={type:n.Default,elements:{backButton:!1,styleSelector:!0,feedbackIcon:!0}};const t={backButton:!0,styleSelector:!1,feedbackIcon:!0};e.editView={type:n.EditCitation,elements:t},e.addMissingView={type:n.AddMissingInformation,elements:t};e.feedbackView={type:n.Feedback,elements:{backButton:!0,styleSelector:!1,feedbackIcon:!1}}}(a=e.View||(e.View={}))}(a||(a={}))},81800:(e,t,n)=>{n.r(t),n.d(t,{CitationBuilderView:()=>Ce});var a=n(27378),o=n(6312);const i={title:"Generate citations",subTitle:a.createElement(a.Fragment,null,"You can now automatically generate a citation for the resource you're viewing."),button:"Got it"},l="How do you like this auto-citations tool?",r="Thank you for your feedback!",c=e=>a.createElement(a.Fragment,null,"Hide ",a.createElement("b",null,"Get citation")," button for ",e,"?"),s="Yes, for now",d="Yes, always";var u=n(50790),m=n(26554);const p={citationCopied:()=>a.createElement(g,null),turnedOff:()=>a.createElement(h,null),intextCopied:e=>a.createElement(v,{citation:e.args.params.citation}),feedbackSubmitted:()=>a.createElement(f,null)},b=({children:e})=>a.createElement("div",{className:m.contentWrapper},e),g=()=>a.createElement(b,null,a.createElement(u.DI.Content,null,"Citation copied to clipboard")),f=()=>a.createElement(b,null,a.createElement(u.DI.Content,null,r)),v=({citation:e})=>a.createElement(b,null,a.createElement(u.DI.Content,null,"“",e.result.reduce(((e,t,n)=>{if(40===e.length)return e;const o=e.length+t.value.length>40,i=o?t.value.substring(0,40-e.length):t.value;return{length:Math.min(40,e.length+t.value.length),result:[...e.result,a.createElement("span",{key:n},t.isPlaceholder?a.createElement("b",null,i):t.italicize?a.createElement("i",null,i):a.createElement("span",null,i),o&&a.createElement(a.Fragment,null,"…"))]}}),{length:0,result:[]}).result,"” copied")),h=()=>a.createElement(b,null,a.createElement(u.DI.TitledContent,{title:"Grammarly Citation turned off"},"To turn it back on go to",a.createElement("br",null)," Browser toolbar → Grammarly."));var E=n(47861);const y=({manager:e})=>a.createElement(E.i,{manager:e,theme:{grid:{container:m.container,bottomLeft:m.bottomLeft,bottomRight:m.bottomRight,top:m.top},view:{wrapper:m.notificationWrapper}},views:p});var C=n(57050),w=n(50202),k=n(22249),_=n(53112);const S=({color:e=_.Z.neutral0})=>a.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.431 4h1.138c.16 0 .288.13.288.288 0 1.37 1.68 2.031 2.65 1.063a.294.294 0 0 1 .413-.002l.731.73c.114.115.112.3-.002.415-.968.968-.307 2.649 1.063 2.649.159 0 .288.129.288.288v1.138c0 .16-.13.288-.288.288-1.37 0-2.031 1.68-1.063 2.65.114.113.116.3.002.413l-.73.731a.294.294 0 0 1-.415-.002c-.968-.968-2.649-.307-2.649 1.063 0 .159-.129.288-.288.288H9.43a.288.288 0 0 1-.288-.288c0-1.37-1.68-2.031-2.65-1.063a.293.293 0 0 1-.413.002l-.731-.73a.294.294 0 0 1 .002-.415c.968-.968.307-2.649-1.063-2.649A.288.288 0 0 1 4 10.57V9.43c0-.16.13-.288.288-.288 1.37 0 2.031-1.68 1.063-2.65a.294.294 0 0 1-.002-.413l.73-.731a.294.294 0 0 1 .415.002c.968.968 2.649.307 2.649-1.063 0-.159.129-.288.288-.288ZM10 12.308a2.308 2.308 0 1 0 0-4.616 2.308 2.308 0 0 0 0 4.616Z",fill:e}));var x=n(18813),B=n(1509),F=n(64757),T=n(8125),I=n(5739),D=n(12187),N=n(52238);const G=({viewModel:e,disabled:t})=>{const[n,o]=a.useState(!1),i=()=>o(!1),l=(0,w.N)({processGbuttonBlur:i,processGbuttonHover:()=>o(!0)},600,1200);return a.createElement(I.F.div,{className:N.citationGButtonContainer,...l.handlers,"data-grammarly-part":"citation-button"},!t&&a.createElement("div",{className:N.citationGButtonSettingsContainer},a.createElement(x.L,{name:"disableCitationBuilder",label:a.createElement(P,{onClick:(0,C.ls)(i,l.reset.bind(l)),visible:n}),align:"left",vAlign:"top",appearanceBehavior:"mouseClick",theme:{dropdownList:N.dropdownContainer},showDelay:0},a.createElement(M,{viewModel:e}))),a.createElement("div",{...(0,D.Sh)(t&&N.disabledCitationGButton,N.citationGButton),onClick:t?T.Q1:(0,C.ls)(i,l.reset.bind(l),e.openWindow.bind(e))},a.createElement(k.V,{size:28}),a.createElement("span",null,"Get citation")))},M=({viewModel:e})=>a.createElement(a.Fragment,null,a.createElement(B.Z.Small,{className:N.disableMenuText},c(e.domain)),a.createElement(F.zx.Flat,{name:"thisSessionDisable",onClick:e.disableForSession.bind(e)},s),a.createElement(F.zx.Flat,{name:"thisSessionDisable",onClick:e.disablePermanently.bind(e)},d)),P=({onClick:e,visible:t})=>a.createElement("div",{...(0,D.Sh)(N.citationGButtonSettings,t?N.visible:N.hidden),onClick:e},a.createElement(S,null));var A=n(61922),V=n(5114),R=n(42097);const O=({viewModel:e})=>a.createElement(I.F.div,{className:R.citationContainer},e.fullCitation.view(V.fold((()=>a.createElement("p",{className:R.errorState},"No auto-citation available for this page.")),(t=>a.createElement(a.Fragment,null,a.createElement("div",{className:R.fullCitationPreview},a.createElement(I.F.div,{className:R.fullCitationText},t.result.map(((e,t)=>a.createElement(B.Z,{key:e.value+String(t),styleType:B.Z.Type.Base,nodeType:"span",className:R.citationText},e.italicize?a.createElement("i",null,e.value):e.value))))),a.createElement("div",{className:R.buttonsContainer},a.createElement(F.zx.Group,{sticky:!0,className:R.buttonsGroup},a.createElement(F.zx.Primary,{name:"copyCitation",className:R.copyButton,onClick:e.copyFullCitation.bind(e)},"Copy"),a.createElement(x.L,{name:"citationMenu",label:a.createElement(F.zx.White,{name:"menu",className:R.moreButton},a.createElement(A.JO.EllipsisSmall,{className:R.moreIcon})),align:"right",vAlign:"top",showDelay:0,appearanceBehavior:"mouseClick"},a.createElement(F.zx.Flat,{name:"copyInText",onClick:e.copyInTextCitation.bind(e)},"Copy in-text citation")))))))));var z=n(57635),L=n(24441),H=n(29417),W=n(83412);const Y=({vm:e})=>a.createElement(x.L,{name:"citationBuilderSettings",label:a.createElement(H.l,{size:"small",enableTooltip:!0,className:W.settingsButton}),align:"right",vAlign:"bottom",showDelay:0,closeDelay:0,theme:{dropdownList:W.dropdownContainer},appearanceBehavior:"mouseClick"},a.createElement(M,{viewModel:e.gButton}));var U=n(24606),q=n(80895),J=n(84017),K=n(54210),Z=n(47661);const j=["apa","mla","chicago"],Q=e=>"mla"===e||"apa"===e?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1),X=({vm:e})=>a.createElement(x.L,{name:"styleTypeSelector",label:a.createElement(U.z,{includePadding:!1,kind:"transparent-hoverable",className:Z.selectorButton},a.createElement(q.C,{title:"beta"}),a.createElement("span",{className:Z.selectorButtonLabel},a.createElement(I.F.span,null,e.citationStyle.view(Q))," · ",a.createElement(I.F.span,{className:Z.sourceTypeLabel},e.sourceType)),a.createElement(A.JO.Arrow,null)),align:"right",vAlign:"bottom",appearanceBehavior:"mouseClick",showDelay:0,closeDelay:0},a.createElement("div",{className:Z.dropdownContainer},a.createElement(B.Z.Small,null,"Style"),a.createElement(K.zx.Group,{sticky:!0,className:Z.styleButtonGroup},j.map((t=>a.createElement(K.zx.White,{name:t,key:t,active:e.citationStyle.view((e=>e===t)),className:Z.styleButton,onClick:()=>e.setCitationStyle(J.KC.Style[t])},Q(t)))))));var $=n(1620),ee=n(22679),te=n(3860),ne=n(20855),ae=n(26720),oe=n.n(ae);const ie=({enableTooltip:e=!1,size:t="medium",...n})=>a.createElement(ne.u,{message:"Feedback",showDelay:ee.gk,disabled:!e},a.createElement(te.h,{...n},a.createElement("div",{...(0,D.Sh)("small"===t?oe().feedbackButtonSmallIcon:null,"medium"===t?oe().feedbackButtonMediumIcon:null)})));var le=n(87965),re=n(42103),ce=n(89076);const se=e=>e.router.activeView.view((t=>a.createElement(L.h,{notify:e.header.notify,activeView:t}))),de=({children:e,vm:t})=>a.createElement(le.p,null,a.createElement(re.G.DefaultProvider,null,a.createElement(z.V,{includeContentPadding:!1,dataGrammarlyPart:"citation-window",headerContent:se(t),className:ce.citationBuilderWindow},a.createElement(I.F.div,{className:ce.citationBuilderHeaderActions},a.createElement(ue,{vm:t})),a.createElement("div",{className:ce.citationBuilderWindowContent},e)))),ue=({vm:e})=>a.createElement(I.F.Fragment,null,e.router.activeView.view((t=>a.createElement(a.Fragment,null,t.elements.styleSelector&&a.createElement(X,{vm:e.styleTypeSelector}),t.elements.feedbackIcon&&a.createElement(ie,{size:"small",onClick:()=>e.router.pushActiveView(o.D.View.feedbackView)}),a.createElement(Y,{vm:e}),a.createElement($.P,{className:ce.citationBuilderCloseButton,onClick:()=>e.header.notify("close",[{type:"closeCard"}],{alertRef:V.none}),tooltipMessage:"Close Citation Builder"})))));var me=n(53844);const pe=({viewModel:e})=>a.createElement("div",{style:{paddingTop:"12px"}},a.createElement(me.q5,{withScore:!0,onSubmit:t=>{e.submitFeedback(t.score,t.text,t.domain)},title:a.createElement("span",null,l),hideTextBoxTitle:!0,hideLogo:!0,hideDomainHelpText:!0,showPostSubmitScreen:!1,submitButtonKind:"primary",domain:e.domain}));var be=n(2005),ge=n(53238);const fe=({children:e,viewModel:t})=>{const n=()=>{t.setOnboardingSeen()};return a.useEffect((()=>n),[]),a.createElement(I.F.Fragment,null,t.onboardingSeen.view((t=>a.createElement(be.J,{mainContent:a.createElement(ve,{onClose:n}),isOutsideReferenceElement:!1,backgroundTheme:"dark",placement:"top-start",includeMainContentPadding:!1,style:{zIndex:1,marginLeft:"2px"},headerIcon:"new-magic-badge",onClose:n,size:"medium",distanceFromReferenceElement:16,closeButton:e=>a.createElement($.P,{onClick:e,id:ge.citationOnboardingCloseButton}),show:!t},a.createElement("div",null,e)))))},ve=({onClose:e})=>a.createElement("div",{className:ge.onboardingContent},a.createElement("div",{className:ge.onboardingTitle},i.title),a.createElement("div",null,i.subTitle),a.createElement("div",{className:ge.onboardingGotIt},a.createElement(F.zx.Ghost,{name:"citationBuilderOnboardingGotIt",onClick:e},i.button)));var he=n(90361),Ee=n(22232),ye=n(23398);const Ce=e=>a.createElement("div",{className:ye.citationBuilderMainContainer},a.createElement(I.F.Fragment,null,(e=>{const t=(0,he.hz)((()=>{e.gnar.citePopupButtonShow(e.gnar.domain,e.gnar.sessionId)}));return e.state.view((n=>{switch(n){case o.D.State.citeSource:return t(),a.createElement(fe,{viewModel:e.onboarding},a.createElement(G,{viewModel:e.gButton,disabled:!1}));case o.D.State.citeSourceDisabled:return a.createElement(G,{viewModel:e.gButton,disabled:!0});case o.D.State.showWindow:return a.createElement(de,{vm:e},a.createElement(I.F.div,null,e.router.activeView.view((t=>{switch(t.type){case o.D.ViewType.Default:return a.createElement(O,{viewModel:e.citationView});case o.D.ViewType.Feedback:return a.createElement(pe,{viewModel:e.feedbackView});default:return a.createElement(a.Fragment,null)}}))));default:(0,Ee.vE)(n)}}))})(e.viewModel)),a.createElement(y,{manager:e.viewModel.notificationManager}))},7635:(e,t,n)=>{n.r(t),n.d(t,{CitationBuilderIntegrationLayout:()=>m});var a=n(27378),o=n(20271),i=n(41263),l=n(18505),r=n(2780),c=n(68383),s=n(86620),d=n(33678),u=n(41572);class m{render(e,t,n){const m=(0,o.I)(u.m.getConfig(n.config.systemInfo.os.isMac?"mac":"windows")),p=self.document,b=l.VB.get({monitorAs:"citation-builder"}).inject(r.EM.fromDocument(self.document,"grammarly-citation-builder"),r.zs.appendChild(p.documentElement),c.G7.showWhenLoaded(a.createElement((()=>a.createElement("div",{style:{position:"fixed",bottom:"32px",left:"17px",zIndex:9999,"--rem":16}},a.createElement(d.a.Context.Provider,{value:new s.C},a.createElement(u.m.Context.Provider,{value:m.denali},a.createElement(a.Suspense,{fallback:a.createElement(a.Fragment,null)},a.createElement(i.L,{chunkName:"citationBuilderIntegration"},a.createElement(e,{viewModel:t}))))))),null)));return{dispose:()=>b.dispose()}}}},70026:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(38983);class o{constructor(e,t){this._viewHistory=[],this._startupPlaceHolder=e,this._activeView=a.h.create(this._startupPlaceHolder),this._defaultView=t}get activeView(){return this._activeView.view()}get lastView(){return this._viewHistory[this._viewHistory.length-1]||this._defaultView}pushActiveView(e){const t=this._activeView.get();e.type!==t.type&&(t.type!==this._startupPlaceHolder.type&&this._viewHistory.push(t),this._activeView.set(e))}popActiveView(){const e=this._viewHistory.pop()||this._defaultView;this._activeView.set(e)}replaceActiveView(e){e.type!==this._activeView.get().type&&this._activeView.set(e)}}},86620:(e,t,n)=>{n.d(t,{C:()=>s,U:()=>a});var a,o=n(27378),i=n(29511),l=n(33678),r=n(88056),c=n(95574);!function(e){let t;!function(e){e.isAppleSystem="isAppleSystem"}(t=e.SidebarFlag||(e.SidebarFlag={})),e.Flag={...t,...l.a.Flag},e.Context=o.createContext(r.Y.invariantContent("Environment"))}(a||(a={}));class s{constructor(e=(0,i.O)()){this._flags=new Set,this.actions={openUrl:e=>c.vM((()=>{document.location.href=e.toString()})),openPopup:e=>c.vM((()=>{const t=self.open(e.toString(),void 0,"noreferrer");t&&(t.opener=null)}))},e.config.systemInfo.os.isMac&&this._flags.add(a.Flag.isAppleSystem),this._flags.add(a.Flag.supportsSVGDominantBaseline),this._flags.add(a.Flag.onlyTrustedEvents)}has(e){return this._flags.has(e)}}},57635:(e,t,n)=>{n.d(t,{V:()=>u});var a=n(27378),o=n(22679),i=n(20855),l=n(3860),r=n(29758),c=n(12187),s=n(5739),d=n(12267);const u=({draggableRef:e,headerContent:t,className:n,children:u,includeContentPadding:m,footer:p,dataGrammarlyPart:b="single-card-assistant",onHeightChange:g})=>{const[f,v]=a.useState(0),[h,E]=a.useState(0),[y,C]=a.useState(0),[w,k]=a.useState("visible"),[_,S]=a.useState(null),x=a.useRef(null),B=a.useRef(null),F=a.useRef(null);a.useEffect((()=>{null==g||g(f+h+y)}),[f,h,y]);const T=a.useRef(null);a.useEffect((()=>{var e;return x.current?(null===(e=T.current)||void 0===e||e.disconnect(),T.current=r.N.getResizeObserver((()=>{x.current&&v(x.current.getBoundingClientRect().height)})),T.current.observe(x.current)):v(0),()=>{var e;return null===(e=T.current)||void 0===e?void 0:e.disconnect()}}),[x.current]);const I=a.useRef(null);a.useEffect((()=>{var e;return B.current?(null===(e=I.current)||void 0===e||e.disconnect(),I.current=r.N.getResizeObserver((()=>{B.current&&E(B.current.getBoundingClientRect().height)})),I.current.observe(B.current)):E(0),()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.disconnect()}}),[B.current]);const D=a.useRef(null);return a.useEffect((()=>{var e;return F.current?(null===(e=D.current)||void 0===e||e.disconnect(),D.current=r.N.getResizeObserver((()=>{F.current&&C(F.current.getBoundingClientRect().height)})),D.current.observe(F.current)):C(0),()=>{var e;return null===(e=D.current)||void 0===e?void 0:e.disconnect()}}),[p,F.current]),a.useEffect((()=>{B.current&&(B.current.scrollTop=0)}),[B.current,h]),a.useEffect((()=>{k("hidden"),S(u);const e=self.setTimeout((()=>k("visible")),300);return()=>self.clearTimeout(e)}),[u]),a.createElement("div",{...(0,c.Sh)(d.singleCardAssistant,n),"data-grammarly-part":b},a.createElement("div",{"data-grammarly-part":b+"-header",...(0,c.Sh)(d.singleCardAssistantHeader,e?d.singleCardAssistantHeaderDraggable:null),ref:t=>{x.current=t,null==e||e(t)}},a.createElement(s.F.Fragment,null,t)),a.createElement("div",{"data-grammarly-part":b+"-content",...(0,c.Sh)(d.singleCardAssistantContent,m?d.singleCardAssistantContentWithPadding:null),style:{height:h,overflow:w,transitionProperty:"height",transitionDuration:"300ms"},onTransitionEnd:e=>{"height"===e.propertyName&&k("visible")}},a.createElement("div",{ref:B},_)),p?a.createElement("div",{"data-grammarly-part":b+"-footer",className:d.singleCardAssistantFooter,ref:F,onClick:()=>p.onClick()},a.createElement("div",{className:d.singleCardAssistantFooterText},p.content),a.createElement(i.u,{message:p.tooltip,showDelay:o.gk},a.createElement(l.h,{onClick:()=>p.onClick()},a.createElement("div",{className:d.singleCardAssistantFooterButtonIcon})))):null)}},24441:(e,t,n)=>{n.d(t,{_:()=>u,h:()=>m});var a=n(27378),o=n(6312),i=n(3860),l=n(5114),r=n(12187),c=n(79880),s=n(86068);const d=e=>a.createElement(i.h,{...e},a.createElement("div",{className:s.backIcon})),u="back-button",m=({notify:e,activeView:t})=>a.createElement("div",{...(0,r.Sh)(s.citationBuilderHeader)},a.createElement("div",{className:s.headerContent},t.type===o.D.ViewType.Default&&a.createElement("div",{className:s.logoIcon}),t.elements.backButton&&a.createElement(a.Fragment,null,a.createElement(d,{onClick:()=>e(u,[{type:"notify",userAction:c.nz.Click}],{alertRef:l.none})}),a.createElement("div",{className:s.title},function(e){switch(e.type){case o.D.ViewType.AddMissingInformation:return"Add missing information";case o.D.ViewType.EditCitation:return"Edit citation";case o.D.ViewType.Feedback:return"Provide Feedback";default:return""}}(t)))))},80895:(e,t,n)=>{n.d(t,{C:()=>l});var a=n(27378),o=n(12187),i=n(12935);const l=({kind:e="primary",dataGrammarlyPart:t="ui-kit-badge",title:n,boldTitle:l=!1,className:r,...c})=>a.createElement("div",{"data-grammarly-part":t,...(0,o.Sh)(i.badge,r,"primary"===e?i.badgePrimary:null,"success"===e?i.badgeSuccess:null,"gold"===e?i.badgeGold:null,"error"===e?i.badgeError:null,c.rounded?i.badgeRounded:null,!c.rounded||c.size&&"small"!==c.size?null:i.badgeRoundedSmall,c.rounded&&"medium"===c.size?i.badgeRoundedMedium:null,c.rounded&&"large"===c.size?i.badgeRoundedLarge:null)},a.createElement("div",{...(0,o.Sh)(i.badgeTitle,l?i.badgeTitleBold:null)},n))},29417:(e,t,n)=>{n.d(t,{l:()=>d});var a=n(27378),o=n(22679),i=n(3860),l=n(20855),r=n(12187),c=n(75100),s=n.n(c);const d=({enableTooltip:e=!1,size:t="medium",...n})=>a.createElement(l.u,{message:"Settings",showDelay:o.gk,disabled:!e},a.createElement(i.h,{...n},a.createElement("div",{...(0,r.Sh)("small"===t?s().settingsButtonSmallIcon:null,"medium"===t?s().settingsButtonMediumIcon:null)})))},31944:(e,t,n)=>{n.d(t,{J:()=>r});var a=n(57050),o=n(27378),i=n(12187),l=n(22536);const r=({onChange:e,labelId:t,className:n,checkboxClassName:r,labelClassName:c,checked:s,children:d,disabled:u,dataGrammarlyPart:m="ui-kit-checkbox",tabIndex:p=0})=>{const[b,g]=o.useState(null!=s&&s);o.useEffect((()=>{g(Boolean(s))}),[s]);const f=t=>{t.preventDefault(),t.stopPropagation(),g(!b),null==e||e(!b)};return o.createElement("div",{"data-grammarly-part":m,...(0,i.Sh)(l.checkboxContainer,n)},o.createElement("div",{...(0,i.Sh)(l.checkbox,r,b?l.checkboxChecked:null),role:"checkbox","aria-checked":b,tabIndex:p,"aria-labelledby":t,onKeyDown:e=>{" "===e.key&&f(e)},onClick:u?a.Q1:f},b?o.createElement("div",{className:l.checkboxCheckmark}):null),o.createElement("label",{id:t,onClick:f,className:c},d))}},26315:(e,t,n)=>{n.d(t,{z:()=>s});var a=n(27378),o=n(31542);const i=({children:e,style:t,dataGrammarlyPart:n="ui-kit-iframe",...i})=>{const[l,r]=a.useState(null),c=a.useCallback((e=>{var t,n;let a=null;"contentDocument"in e.target&&(a=null!==(n=null===(t=e.target.contentDocument)||void 0===t?void 0:t.body)&&void 0!==n?n:null),r(a),a&&(a.style.margin="0",a.style.height="100vh")}),[]);return a.createElement("iframe",{...i,style:{border:"none",...t},onLoad:c,srcDoc:"<html><body></body></html>","data-grammarly-part":n},l&&(0,o.createPortal)(e,l))};var l=n(68370),r=n(51897),c=n.n(r);const s=({placeholder:e,onChange:t,ariaLabel:n,className:o})=>{const[r,s]=a.useState("");return a.useEffect((()=>{t(r)}),[r]),a.createElement(i,{dataGrammarlyPart:"ui-kit-textbox",className:o,style:{width:"100%",height:"100%"}},a.createElement(l.b,null,c().__css),a.createElement("div",{role:"textbox",className:c().textBox,contentEditable:!0,onInput:e=>s(e.target.innerText),"data-placeholder":e,"aria-placeholder":e,"aria-label":n}))}},53844:(e,t,n)=>{n.d(t,{q5:()=>b,dK:()=>p});var a=n(27378),o=n(12187),i=n(21420);const l=({options:e,onChange:t=(()=>null),ariaLabel:n,className:l})=>{const r=[],[c,s]=a.useState(null);a.useEffect((()=>{var n;null!==c&&(null===(n=r[c])||void 0===n||n.focus()),t(null!==c?e[c].value:null)}),[c]);const d=null!==c?e[c]:null;return a.createElement("div",{"data-grammarly-part":"ui-kit-radio-group",className:l},a.createElement("div",{className:i.radioGroup,role:"radiogroup","aria-label":n,onKeyDown:t=>{if(" "!==t.key||d){if("ArrowRight"===t.key||"ArrowDown"===t.key){t.preventDefault(),t.stopPropagation();s(((c||0)+1)%e.length)}else if("ArrowLeft"===t.key||"ArrowUp"===t.key){t.preventDefault(),t.stopPropagation();const n=(c||0)-1;s(n<0?e.length-1:n)}}else t.preventDefault(),t.stopPropagation(),s(0)}},e.map(((e,t)=>{const n=(null==d?void 0:d.value)===e.value,l=0===t;return a.createElement("div",{key:e.value,...(0,o.Sh)(i.radioGroupOption,n?i.radioGroupOptionSelected:null),role:"radio",tabIndex:n||l&&!d?0:-1,"aria-checked":n,onClick:e=>{e.preventDefault(),e.stopPropagation(),s(t)},ref:e=>r.push(e)},e.render())}))))};var r,c=n(24606),s=n(26315),d=n(31944),u=n(51217),m=n(44544);function p(e){return"score"in e}!function(e){e.bad="bad",e.ok="ok",e.good="good"}(r||(r={}));const b=({hideLogo:e=!1,align:t="center",fixSubmitButtonOverflowBottomPadding:n=!1,...i})=>{var p;const b=[r.bad,r.ok,r.good],[g,f]=a.useState(null),[v,h]=a.useState(""),[E,y]=a.useState(!1),[C,w]=a.useState(!1);let k;return k=C&&!1!==i.showPostSubmitScreen?a.createElement("div",{"data-grammarly-part":"surveys-feedback-form-thank-you",...(0,o.Sh)(u.feedbackFormContainer,u.feedbackFormContainerAlignCenter)},a.createElement("div",{className:u.feedbackFormSuccessMessageTextContainer},a.createElement("div",{className:u.feedbackFormSuccessMessageIcon}),a.createElement("div",{className:u.feedbackFormSuccessMessageTitle},"Thank you!"),a.createElement("div",{className:u.feedbackFormSuccessMessageSubtitle},"Your feedback helps us improve.")),a.createElement(c.z,{className:u.feedbackFormSubmitButton,kind:"success",type:"submit",onClick:i.onClose},"Done"),n?a.createElement("div",{className:u.feedbackFormSubmitButtonFixOverflowBottomPadding},a.createElement("div",{className:u.feedbackFormSubmitButtonFixOverflowBottomPaddingChild})):null):a.createElement("div",{"data-grammarly-part":"surveys-feedback-form-fields",...(0,o.Sh)(u.feedbackFormContainer,"center"===t?u.feedbackFormContainerAlignCenter:null)},a.createElement("div",{className:u.feedbackFormFields},e?null:a.createElement("div",{className:u.feedbackFormLogo}),i.hideTitle?null:a.createElement("div",{...(0,o.Sh)(u.feedbackFormTitle,i.compactDisplay?u.compact:null)},i.title||a.createElement("span",null,"How do you like ",a.createElement("br",null)," Grammarly?")),i.withScore?a.createElement(a.Fragment,null,a.createElement(l,{ariaLabel:"Feedback Score",options:b.map((e=>({value:e,render(){let t,n;return e===r.bad?(t=m.feedbackFormOptionIconDisheartening,n="I dislike it"):e===r.ok?(t=m.feedbackFormOptionIconNeutral,n="It’s OK"):(t=t=m.feedbackFormOptionIconSmiling,n="I like it"),a.createElement("div",{className:m.feedbackFormOption},a.createElement("div",{...(0,o.Sh)(m.feedbackFormOptionIcon,t)}),a.createElement("div",null,n))}}))),onChange:f,...(0,o.Sh)(u.feedbackFormScore,i.compactDisplay?u.compact:null)}),i.hideTextBoxTitle?null:a.createElement("div",{className:u.feedbackFormTextBoxTitle},"Anything we can improve?")):null,a.createElement(s.z,{onChange:h,placeholder:i.placeholderText||"Your thoughts here",ariaLabel:"Feedback Text",...(0,o.Sh)(u.feedbackFormTextBox,i.compactDisplay?u.compact:null)}),i.domain?a.createElement(a.Fragment,null,i.hideDomainHelpText?null:a.createElement("div",{className:u.feedbackFormShareDomainTitle},"Help improve Grammarly by sharing the domain you’re on:"),a.createElement(d.J,{labelId:"feedback-form-share-domain-checkbox",onChange:y,className:u.feedbackFormShareDomainCheckbox},"Include the domain ",a.createElement("b",null,i.domain)," with my feedback")):null),a.createElement(c.z,{className:u.feedbackFormSubmitButton,kind:null!==(p=i.submitButtonKind)&&void 0!==p?p:"success",type:"submit",disabled:i.withScore?!g:!v,onClick:()=>{var e,t;i.withScore&&g?(null===(e=i.onSubmit)||void 0===e||e.call(i,{score:g,text:v,domain:E?i.domain:void 0}),w(!0)):!i.withScore&&v&&(null===(t=i.onSubmit)||void 0===t||t.call(i,{text:v,domain:E?i.domain:void 0}),w(!0))}},"Submit"),n?a.createElement("div",{className:u.feedbackFormSubmitButtonFixOverflowBottomPadding},a.createElement("div",{className:u.feedbackFormSubmitButtonFixOverflowBottomPaddingChild})):null),a.createElement("div",{style:i.style,"data-grammarly-part":"surveys-feedback-form"},k)}},25682:(e,t,n)=>{var a=n(93476)((function(e){return e[1]}));a.push([e.id,"._380Y1-textBox{font-family:grInter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._380Y1-textBox:empty:before{font-feature-settings:'ss03' on;font-family:grInter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",""]),a.locals={textBox:"_380Y1-textBox"},e.exports=a},23398:e=>{e.exports={citationBuilderMainContainer:"_9DBYz"}},12267:e=>{e.exports={singleCardAssistant:"_29x5a",singleCardAssistantHeader:"eFwvd",singleCardAssistantHeaderDraggable:"_3wYqZ",singleCardAssistantContent:"_1r3xI",singleCardAssistantContentWithPadding:"Jgq6x",singleCardAssistantFooter:"_23i2M",singleCardAssistantFooterText:"mTIL9",singleCardAssistantFooterButtonIcon:"FJI7I",spin:"_2z-hC"}},52238:e=>{e.exports={citationGButtonContainer:"RxGxN",citationGButtonSettings:"_3vwBC",visible:"_3IWfc",hidden:"_3gzHg",citationGButtonSettingsContainer:"_1tBtJ",citationGButton:"bGjU_",disabledCitationGButton:"_3SdFJ",settingsIcon:"_1Csco",disableMenuText:"_2D-wy",dropdownContainer:"_13yWM",spin:"_2Pfa1"}},42097:e=>{e.exports={citationContainer:"NlnT4",errorState:"_3WuK_",fullCitationPreview:"VNiYQ",fullCitationText:"cnmSA",buttonsContainer:"_1-FSO",buttonsGroup:"_14uc7",moreButton:"_3LhGV",moreIcon:"_1Ipzl",copyButton:"_1f50k",citationText:"_2OGV5"}},89076:e=>{e.exports={actions_hovered:"Bw4og",header:"mIo8B",draggableWrapper:"_1nGgR",draggable:"_2Ch-o",headerActions:"_3-GGd",citationBuilderHeaderActions:"_2eNe4",headerActionBtnProofitIcon:"jsMFu",headerActionBtnGoalsIcon:"_3YDXy",logoscore_fadein:"_2xVpz",fadein:"_1ASm3",logoscore_fadeout:"_2jd79",fadeout:"_3h50u",logo_score:"_2IyIe",styleTypeSelectorContainer:"_2rZ-8",citationBuilderCloseButton:"_2cxv7",citationBuilderWindow:"_3q0j4",citationBuilderWindowContent:"_176hq",spin:"_1PrXI"}},86068:e=>{e.exports={actions_hovered:"_26D5B",header:"_28Fzg",citationBuilderHeader:"_2oi8Z",draggableWrapper:"dL87W",draggable:"Hq-0P",headerActions:"_1wbQt",headerActionBtnProofitIcon:"_3EU94",headerActionBtnGoalsIcon:"_2E18U",logoscore_fadein:"_6a2eQ",fadein:"_140p0",logoscore_fadeout:"_31ZjI",fadeout:"_2oJRY",logo_score:"_2ZPbj",logoIcon:"XSeHJ",backIcon:"_2U1Dg",title:"_1Q_TG",headerContent:"_2wNC8",spin:"_3zLJC"}},83412:e=>{e.exports={dropdownContainer:"AIhYK",settingsButton:"aRCR-"}},26554:e=>{e.exports={container:"_2NXqS",baseGrid:"_33Dq3",bottomLeft:"_3_Hz-",bottomRight:"_3pFQm",top:"W4m1t",notificationWrapper:"_1YYiW",contentWrapper:"_2qCRr"}},53238:e=>{e.exports={onboardingContent:"_2jAI-",onboardingTitle:"_2RV7g",onboardingGotIt:"w3YRL",citationOnboardingCloseButton:"_1qMrB"}},47661:e=>{e.exports={selectorButton:"_3jOE9",selectorButtonLabel:"_ovwb",sourceTypeLabel:"k80dp",dropdownContainer:"vSb5Z",styleButtonGroup:"_2VObs",styleButton:"wYzpD"}},12935:e=>{e.exports={badge:"Mora3",badgePrimary:"_1446Q",badgeSuccess:"_2FQ9t",badgeGold:"_3t7g2",badgeError:"_154CZ",badgeRounded:"_2atD_",badgeRoundedSmall:"OxUT1",badgeRoundedMedium:"_1Rehq",badgeRoundedLarge:"_1Mmea",badgeTitle:"_1imRR",badgeTitleBold:"KO4Gs"}},26720:e=>{e.exports={feedbackButtonMediumIcon:"_2yNh3",feedbackButtonSmallIcon:"_3fso6",spin:"_2wMjA"}},75100:e=>{e.exports={settingsButtonMediumIcon:"_1PPTj",settingsButtonSmallIcon:"_20Pta",spin:"_2dlxE"}},22536:e=>{e.exports={checkboxContainer:"_3bj_g",checkbox:"xrB8R",checkboxChecked:"Uhddy",checkboxCheckmark:"_1qI2g",spin:"_3S_a3"}},21420:e=>{e.exports={radioGroup:"_3jZFB",radioGroupOption:"_1Boe7",radioGroupOptionSelected:"_37tnK"}},51217:e=>{e.exports={feedbackFormContainer:"_1M-GI",feedbackFormContainerAlignCenter:"_3QNrK",feedbackFormFields:"Jg_OY",feedbackFormTitle:"nPjzw",feedbackFormTextBoxTitle:"_2yUbL",feedbackFormLogo:"_2C-d7",compact:"_1wDKK",feedbackFormScore:"_3AmBq",feedbackFormTextBox:"FO2oU",feedbackFormShareDomainTitle:"_2UXTO",feedbackFormShareDomainCheckbox:"_3mSXM",feedbackFormSubmitButton:"_32xYR",feedbackFormSubmitButtonFixOverflowBottomPadding:"IJDSA",feedbackFormSubmitButtonFixOverflowBottomPaddingChild:"_3d5Tf",feedbackFormSuccessMessageTextContainer:"_2JO6Z",feedbackFormSuccessMessageIcon:"oVxds",feedbackFormSuccessMessageTitle:"_1MdvM",feedbackFormSuccessMessageSubtitle:"_1EKkw",spin:"_2ycFE"}},44544:e=>{e.exports={feedbackFormOption:"_9K_Q8",feedbackFormOptionIcon:"_259oL",feedbackFormOptionIconDisheartening:"_3NJTM",feedbackFormOptionIconNeutral:"i-5N8",feedbackFormOptionIconSmiling:"_1Dxi9",spin:"_2elyX"}}}]);