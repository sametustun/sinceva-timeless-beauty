var fh=e=>{throw TypeError(e)};var Xc=(e,t,n)=>t.has(e)||fh("Cannot "+n);var M=(e,t,n)=>(Xc(e,t,"read from private field"),n?n.call(e):t.get(e)),ce=(e,t,n)=>t.has(e)?fh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),J=(e,t,n,a)=>(Xc(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),Xe=(e,t,n)=>(Xc(e,t,"access private method"),n);var fs=(e,t,n,a)=>({set _(i){J(e,t,i,n)},get _(){return M(e,t,a)}});function Hz(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(a,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Bp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Op={exports:{}},Wo={},Kp={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dl=Symbol.for("react.element"),_z=Symbol.for("react.portal"),Gz=Symbol.for("react.fragment"),Uz=Symbol.for("react.strict_mode"),Yz=Symbol.for("react.profiler"),$z=Symbol.for("react.provider"),Vz=Symbol.for("react.context"),qz=Symbol.for("react.forward_ref"),Wz=Symbol.for("react.suspense"),Qz=Symbol.for("react.memo"),Xz=Symbol.for("react.lazy"),hh=Symbol.iterator;function Zz(e){return e===null||typeof e!="object"?null:(e=hh&&e[hh]||e["@@iterator"],typeof e=="function"?e:null)}var Hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_p=Object.assign,Gp={};function mr(e,t,n){this.props=e,this.context=t,this.refs=Gp,this.updater=n||Hp}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Up(){}Up.prototype=mr.prototype;function um(e,t,n){this.props=e,this.context=t,this.refs=Gp,this.updater=n||Hp}var dm=um.prototype=new Up;dm.constructor=um;_p(dm,mr.prototype);dm.isPureReactComponent=!0;var yh=Array.isArray,Yp=Object.prototype.hasOwnProperty,mm={current:null},$p={key:!0,ref:!0,__self:!0,__source:!0};function Vp(e,t,n){var a,i={},l=null,s=null;if(t!=null)for(a in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)Yp.call(t,a)&&!$p.hasOwnProperty(a)&&(i[a]=t[a]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)i[a]===void 0&&(i[a]=o[a]);return{$$typeof:Dl,type:e,key:l,ref:s,props:i,_owner:mm.current}}function Jz(e,t){return{$$typeof:Dl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dl}function ew(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ph=/\/+/g;function Zc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ew(""+e.key):t.toString(36)}function Us(e,t,n,a,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Dl:case _z:s=!0}}if(s)return s=e,i=i(s),e=a===""?"."+Zc(s,0):a,yh(i)?(n="",e!=null&&(n=e.replace(ph,"$&/")+"/"),Us(i,t,n,"",function(u){return u})):i!=null&&(fm(i)&&(i=Jz(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=a===""?".":a+":",yh(e))for(var o=0;o<e.length;o++){l=e[o];var c=a+Zc(l,o);s+=Us(l,t,n,c,i)}else if(c=Zz(e),typeof c=="function")for(e=c.call(e),o=0;!(l=e.next()).done;)l=l.value,c=a+Zc(l,o++),s+=Us(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function hs(e,t,n){if(e==null)return e;var a=[],i=0;return Us(e,a,"","",function(l){return t.call(n,l,i++)}),a}function tw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ut={current:null},Ys={transition:null},nw={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:mm};function qp(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:hs,forEach:function(e,t,n){hs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hs(e,function(){t++}),t},toArray:function(e){return hs(e,function(t){return t})||[]},only:function(e){if(!fm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=mr;ie.Fragment=Gz;ie.Profiler=Yz;ie.PureComponent=um;ie.StrictMode=Uz;ie.Suspense=Wz;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw;ie.act=qp;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=_p({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=mm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)Yp.call(t,c)&&!$p.hasOwnProperty(c)&&(a[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];a.children=o}return{$$typeof:Dl,type:e.type,key:i,ref:l,props:a,_owner:s}};ie.createContext=function(e){return e={$$typeof:Vz,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$z,_context:e},e.Consumer=e};ie.createElement=Vp;ie.createFactory=function(e){var t=Vp.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:qz,render:e}};ie.isValidElement=fm;ie.lazy=function(e){return{$$typeof:Xz,_payload:{_status:-1,_result:e},_init:tw}};ie.memo=function(e,t){return{$$typeof:Qz,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Ys.transition;Ys.transition={};try{e()}finally{Ys.transition=t}};ie.unstable_act=qp;ie.useCallback=function(e,t){return ut.current.useCallback(e,t)};ie.useContext=function(e){return ut.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return ut.current.useDeferredValue(e)};ie.useEffect=function(e,t){return ut.current.useEffect(e,t)};ie.useId=function(){return ut.current.useId()};ie.useImperativeHandle=function(e,t,n){return ut.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return ut.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return ut.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return ut.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return ut.current.useReducer(e,t,n)};ie.useRef=function(e){return ut.current.useRef(e)};ie.useState=function(e){return ut.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return ut.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return ut.current.useTransition()};ie.version="18.3.1";Kp.exports=ie;var f=Kp.exports;const I=Bp(f),hm=Hz({__proto__:null,default:I},[f]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aw=f,iw=Symbol.for("react.element"),rw=Symbol.for("react.fragment"),lw=Object.prototype.hasOwnProperty,sw=aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ow={key:!0,ref:!0,__self:!0,__source:!0};function Wp(e,t,n){var a,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)lw.call(t,a)&&!ow.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:iw,type:e,key:l,ref:s,props:i,_owner:sw.current}}Wo.Fragment=rw;Wo.jsx=Wp;Wo.jsxs=Wp;Op.exports=Wo;var r=Op.exports,Qp={exports:{}},Pt={},Xp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,E){var D=T.length;T.push(E);e:for(;0<D;){var H=D-1>>>1,K=T[H];if(0<i(K,E))T[H]=E,T[D]=K,D=H;else break e}}function n(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var E=T[0],D=T.pop();if(D!==E){T[0]=D;e:for(var H=0,K=T.length,W=K>>>1;H<W;){var q=2*(H+1)-1,le=T[q],de=q+1,Q=T[de];if(0>i(le,D))de<K&&0>i(Q,le)?(T[H]=Q,T[de]=D,H=de):(T[H]=le,T[q]=D,H=q);else if(de<K&&0>i(Q,D))T[H]=Q,T[de]=D,H=de;else break e}}return E}function i(T,E){var D=T.sortIndex-E.sortIndex;return D!==0?D:T.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],u=[],d=1,m=null,h=3,p=!1,x=!1,k=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(T){for(var E=n(u);E!==null;){if(E.callback===null)a(u);else if(E.startTime<=T)a(u),E.sortIndex=E.expirationTime,t(c,E);else break;E=n(u)}}function z(T){if(k=!1,b(T),!x)if(n(c)!==null)x=!0,O(S);else{var E=n(u);E!==null&&V(z,E.startTime-T)}}function S(T,E){x=!1,k&&(k=!1,g(w),w=-1),p=!0;var D=h;try{for(b(E),m=n(c);m!==null&&(!(m.expirationTime>E)||T&&!F());){var H=m.callback;if(typeof H=="function"){m.callback=null,h=m.priorityLevel;var K=H(m.expirationTime<=E);E=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(c)&&a(c),b(E)}else a(c);m=n(c)}if(m!==null)var W=!0;else{var q=n(u);q!==null&&V(z,q.startTime-E),W=!1}return W}finally{m=null,h=D,p=!1}}var C=!1,j=null,w=-1,A=5,P=-1;function F(){return!(e.unstable_now()-P<A)}function N(){if(j!==null){var T=e.unstable_now();P=T;var E=!0;try{E=j(!0,T)}finally{E?B():(C=!1,j=null)}}else C=!1}var B;if(typeof y=="function")B=function(){y(N)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,$=R.port2;R.port1.onmessage=N,B=function(){$.postMessage(null)}}else B=function(){v(N,0)};function O(T){j=T,C||(C=!0,B())}function V(T,E){w=v(function(){T(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,O(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var E=3;break;default:E=h}var D=h;h=E;try{return T()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,E){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=h;h=T;try{return E()}finally{h=D}},e.unstable_scheduleCallback=function(T,E,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=D+K,T={id:d++,callback:E,priorityLevel:T,startTime:D,expirationTime:K,sortIndex:-1},D>H?(T.sortIndex=D,t(u,T),n(c)===null&&T===n(u)&&(k?(g(w),w=-1):k=!0,V(z,D-H))):(T.sortIndex=K,t(c,T),x||p||(x=!0,O(S))),T},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(T){var E=h;return function(){var D=h;h=E;try{return T.apply(this,arguments)}finally{h=D}}}})(Zp);Xp.exports=Zp;var cw=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uw=f,Et=cw;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,Zr={};function di(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Zr[e]=t,e=0;e<t.length;e++)Jp.add(t[e])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,dw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kh={},gh={};function mw(e){return Gu.call(gh,e)?!0:Gu.call(kh,e)?!1:dw.test(e)?gh[e]=!0:(kh[e]=!0,!1)}function fw(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hw(e,t,n,a){if(t===null||typeof t>"u"||fw(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,a,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ym=/[\-:]([a-z])/g;function pm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ym,pm);Qe[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ym,pm);Qe[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ym,pm);Qe[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function km(e,t,n,a){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hw(t,n,i,a)&&(n=null),a||i===null?mw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var Xn=uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),ek=Symbol.for("react.provider"),tk=Symbol.for("react.context"),vm=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),bm=Symbol.for("react.memo"),da=Symbol.for("react.lazy"),nk=Symbol.for("react.offscreen"),vh=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=vh&&e[vh]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Jc;function Dr(e){if(Jc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jc=t&&t[1]||""}return`
`+Jc+e}var eu=!1;function tu(e,t){if(!e||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var a=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){a=u}e.call(t.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=a.stack.split(`
`),s=i.length-1,o=l.length-1;1<=s&&0<=o&&i[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==l[o]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function yw(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=tu(e.type,!1),e;case 11:return e=tu(e.type.render,!1),e;case 1:return e=tu(e.type,!0),e;default:return""}}function Vu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Si:return"Fragment";case wi:return"Portal";case Uu:return"Profiler";case gm:return"StrictMode";case Yu:return"Suspense";case $u:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tk:return(e.displayName||"Context")+".Consumer";case ek:return(e._context.displayName||"Context")+".Provider";case vm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bm:return t=e.displayName||null,t!==null?t:Vu(e.type)||"Memo";case da:t=e._payload,e=e._init;try{return Vu(e(t))}catch{}}return null}function pw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(t);case 8:return t===gm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ma(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ak(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kw(e){var t=ak(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ps(e){e._valueTracker||(e._valueTracker=kw(e))}function ik(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ak(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qu(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bh(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=Ma(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rk(e,t){t=t.checked,t!=null&&km(e,"checked",t,!1)}function Wu(e,t){rk(e,t);var n=Ma(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qu(e,t.type,Ma(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qu(e,t,n){(t!=="number"||co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Ii(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ma(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Ir(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ma(n)}}function lk(e,t){var n=Ma(t.value),a=Ma(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function wh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sk(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sk(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ks,ok=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ks=ks||document.createElement("div"),ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gw=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){gw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function ck(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function uk(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=ck(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var vw=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ju(e,t){if(t){if(vw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ed(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function xm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nd=null,Li=null,Fi=null;function Sh(e){if(e=Fl(e)){if(typeof nd!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ec(t),nd(e.stateNode,e.type,t))}}function dk(e){Li?Fi?Fi.push(e):Fi=[e]:Li=e}function mk(){if(Li){var e=Li,t=Fi;if(Fi=Li=null,Sh(e),t)for(e=0;e<t.length;e++)Sh(t[e])}}function fk(e,t){return e(t)}function hk(){}var nu=!1;function yk(e,t,n){if(nu)return e(t,n);nu=!0;try{return fk(e,t,n)}finally{nu=!1,(Li!==null||Fi!==null)&&(hk(),mk())}}function el(e,t){var n=e.stateNode;if(n===null)return null;var a=ec(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var ad=!1;if(Gn)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){ad=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{ad=!1}function bw(e,t,n,a,i,l,s,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Hr=!1,uo=null,mo=!1,id=null,xw={onError:function(e){Hr=!0,uo=e}};function zw(e,t,n,a,i,l,s,o,c){Hr=!1,uo=null,bw.apply(xw,arguments)}function ww(e,t,n,a,i,l,s,o,c){if(zw.apply(this,arguments),Hr){if(Hr){var u=uo;Hr=!1,uo=null}else throw Error(L(198));mo||(mo=!0,id=u)}}function mi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pk(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ch(e){if(mi(e)!==e)throw Error(L(188))}function Sw(e){var t=e.alternate;if(!t){if(t=mi(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ch(i),e;if(l===a)return Ch(i),t;l=l.sibling}throw Error(L(188))}if(n.return!==a.return)n=i,a=l;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,a=l;break}if(o===a){s=!0,a=i,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,a=i;break}if(o===a){s=!0,a=l,n=i;break}o=o.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==a)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function kk(e){return e=Sw(e),e!==null?gk(e):null}function gk(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gk(e);if(t!==null)return t;e=e.sibling}return null}var vk=Et.unstable_scheduleCallback,jh=Et.unstable_cancelCallback,Cw=Et.unstable_shouldYield,jw=Et.unstable_requestPaint,Le=Et.unstable_now,Nw=Et.unstable_getCurrentPriorityLevel,zm=Et.unstable_ImmediatePriority,bk=Et.unstable_UserBlockingPriority,fo=Et.unstable_NormalPriority,Aw=Et.unstable_LowPriority,xk=Et.unstable_IdlePriority,Qo=null,wn=null;function Ew(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Mw,Tw=Math.log,Pw=Math.LN2;function Mw(e){return e>>>=0,e===0?32:31-(Tw(e)/Pw|0)|0}var gs=64,vs=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?a=Lr(o):(l&=s,l!==0&&(a=Lr(l)))}else s=n&~i,s!==0?a=Lr(s):l!==0&&(a=Lr(l));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-rn(t),i=1<<n,a|=e[n],t&=~i;return a}function Rw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dw(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-rn(l),o=1<<s,c=i[s];c===-1?(!(o&n)||o&a)&&(i[s]=Rw(o,t)):c<=t&&(e.expiredLanes|=o),l&=~o}}function rd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zk(){var e=gs;return gs<<=1,!(gs&4194240)&&(gs=64),e}function au(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Il(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function Iw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rn(n),l=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~l}}function wm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-rn(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var me=0;function wk(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sk,Sm,Ck,jk,Nk,ld=!1,bs=[],wa=null,Sa=null,Ca=null,tl=new Map,nl=new Map,fa=[],Lw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(e,t){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":tl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(t.pointerId)}}function jr(e,t,n,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Fl(t),t!==null&&Sm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fw(e,t,n,a,i){switch(t){case"focusin":return wa=jr(wa,e,t,n,a,i),!0;case"dragenter":return Sa=jr(Sa,e,t,n,a,i),!0;case"mouseover":return Ca=jr(Ca,e,t,n,a,i),!0;case"pointerover":var l=i.pointerId;return tl.set(l,jr(tl.get(l)||null,e,t,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,nl.set(l,jr(nl.get(l)||null,e,t,n,a,i)),!0}return!1}function Ak(e){var t=Ua(e.target);if(t!==null){var n=mi(t);if(n!==null){if(t=n.tag,t===13){if(t=pk(n),t!==null){e.blockedOn=t,Nk(e.priority,function(){Ck(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);td=a,n.target.dispatchEvent(a),td=null}else return t=Fl(n),t!==null&&Sm(t),e.blockedOn=n,!1;t.shift()}return!0}function Ah(e,t,n){$s(e)&&n.delete(t)}function Bw(){ld=!1,wa!==null&&$s(wa)&&(wa=null),Sa!==null&&$s(Sa)&&(Sa=null),Ca!==null&&$s(Ca)&&(Ca=null),tl.forEach(Ah),nl.forEach(Ah)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ld||(ld=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,Bw)))}function al(e){function t(i){return Nr(i,e)}if(0<bs.length){Nr(bs[0],e);for(var n=1;n<bs.length;n++){var a=bs[n];a.blockedOn===e&&(a.blockedOn=null)}}for(wa!==null&&Nr(wa,e),Sa!==null&&Nr(Sa,e),Ca!==null&&Nr(Ca,e),tl.forEach(t),nl.forEach(t),n=0;n<fa.length;n++)a=fa[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<fa.length&&(n=fa[0],n.blockedOn===null);)Ak(n),n.blockedOn===null&&fa.shift()}var Bi=Xn.ReactCurrentBatchConfig,yo=!0;function Ow(e,t,n,a){var i=me,l=Bi.transition;Bi.transition=null;try{me=1,Cm(e,t,n,a)}finally{me=i,Bi.transition=l}}function Kw(e,t,n,a){var i=me,l=Bi.transition;Bi.transition=null;try{me=4,Cm(e,t,n,a)}finally{me=i,Bi.transition=l}}function Cm(e,t,n,a){if(yo){var i=sd(e,t,n,a);if(i===null)fu(e,t,a,po,n),Nh(e,a);else if(Fw(i,e,t,n,a))a.stopPropagation();else if(Nh(e,a),t&4&&-1<Lw.indexOf(e)){for(;i!==null;){var l=Fl(i);if(l!==null&&Sk(l),l=sd(e,t,n,a),l===null&&fu(e,t,a,po,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else fu(e,t,a,null,n)}}var po=null;function sd(e,t,n,a){if(po=null,e=xm(a),e=Ua(e),e!==null)if(t=mi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pk(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function Ek(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nw()){case zm:return 1;case bk:return 4;case fo:case Aw:return 16;case xk:return 536870912;default:return 16}default:return 16}}var ba=null,jm=null,Vs=null;function Tk(){if(Vs)return Vs;var e,t=jm,n=t.length,a,i="value"in ba?ba.value:ba.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===i[l-a];a++);return Vs=i.slice(e,1<a?1-a:void 0)}function qs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xs(){return!0}function Eh(){return!1}function Mt(e){function t(n,a,i,l,s){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xs:Eh,this.isPropagationStopped=Eh,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xs)},persist:function(){},isPersistent:xs}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nm=Mt(fr),Ll=Me({},fr,{view:0,detail:0}),Hw=Mt(Ll),iu,ru,Ar,Xo=Me({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Am,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(iu=e.screenX-Ar.screenX,ru=e.screenY-Ar.screenY):ru=iu=0,Ar=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),Th=Mt(Xo),_w=Me({},Xo,{dataTransfer:0}),Gw=Mt(_w),Uw=Me({},Ll,{relatedTarget:0}),lu=Mt(Uw),Yw=Me({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),$w=Mt(Yw),Vw=Me({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qw=Mt(Vw),Ww=Me({},fr,{data:0}),Ph=Mt(Ww),Qw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zw[e])?!!t[e]:!1}function Am(){return Jw}var e1=Me({},Ll,{key:function(e){if(e.key){var t=Qw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Am,charCode:function(e){return e.type==="keypress"?qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t1=Mt(e1),n1=Me({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Mt(n1),a1=Me({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Am}),i1=Mt(a1),r1=Me({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),l1=Mt(r1),s1=Me({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),o1=Mt(s1),c1=[9,13,27,32],Em=Gn&&"CompositionEvent"in window,_r=null;Gn&&"documentMode"in document&&(_r=document.documentMode);var u1=Gn&&"TextEvent"in window&&!_r,Pk=Gn&&(!Em||_r&&8<_r&&11>=_r),Rh=" ",Dh=!1;function Mk(e,t){switch(e){case"keyup":return c1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rk(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ci=!1;function d1(e,t){switch(e){case"compositionend":return Rk(t);case"keypress":return t.which!==32?null:(Dh=!0,Rh);case"textInput":return e=t.data,e===Rh&&Dh?null:e;default:return null}}function m1(e,t){if(Ci)return e==="compositionend"||!Em&&Mk(e,t)?(e=Tk(),Vs=jm=ba=null,Ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pk&&t.locale!=="ko"?null:t.data;default:return null}}var f1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f1[e.type]:t==="textarea"}function Dk(e,t,n,a){dk(a),t=ko(t,"onChange"),0<t.length&&(n=new Nm("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Gr=null,il=null;function h1(e){Yk(e,0)}function Zo(e){var t=Ai(e);if(ik(t))return e}function y1(e,t){if(e==="change")return t}var Ik=!1;if(Gn){var su;if(Gn){var ou="oninput"in document;if(!ou){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),ou=typeof Lh.oninput=="function"}su=ou}else su=!1;Ik=su&&(!document.documentMode||9<document.documentMode)}function Fh(){Gr&&(Gr.detachEvent("onpropertychange",Lk),il=Gr=null)}function Lk(e){if(e.propertyName==="value"&&Zo(il)){var t=[];Dk(t,il,e,xm(e)),yk(h1,t)}}function p1(e,t,n){e==="focusin"?(Fh(),Gr=t,il=n,Gr.attachEvent("onpropertychange",Lk)):e==="focusout"&&Fh()}function k1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(il)}function g1(e,t){if(e==="click")return Zo(t)}function v1(e,t){if(e==="input"||e==="change")return Zo(t)}function b1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var on=typeof Object.is=="function"?Object.is:b1;function rl(e,t){if(on(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Gu.call(t,i)||!on(e[i],t[i]))return!1}return!0}function Bh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oh(e,t){var n=Bh(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bh(n)}}function Fk(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fk(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bk(){for(var e=window,t=co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=co(e.document)}return t}function Tm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function x1(e){var t=Bk(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fk(n.ownerDocument.documentElement,n)){if(a!==null&&Tm(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(a.start,i);a=a.end===void 0?l:Math.min(a.end,i),!e.extend&&l>a&&(i=a,a=l,l=i),i=Oh(n,l);var s=Oh(n,a);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var z1=Gn&&"documentMode"in document&&11>=document.documentMode,ji=null,od=null,Ur=null,cd=!1;function Kh(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cd||ji==null||ji!==co(a)||(a=ji,"selectionStart"in a&&Tm(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ur&&rl(Ur,a)||(Ur=a,a=ko(od,"onSelect"),0<a.length&&(t=new Nm("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ji)))}function zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ni={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},cu={},Ok={};Gn&&(Ok=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function Jo(e){if(cu[e])return cu[e];if(!Ni[e])return e;var t=Ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ok)return cu[e]=t[n];return e}var Kk=Jo("animationend"),Hk=Jo("animationiteration"),_k=Jo("animationstart"),Gk=Jo("transitionend"),Uk=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fa(e,t){Uk.set(e,t),di(t,[e])}for(var uu=0;uu<Hh.length;uu++){var du=Hh[uu],w1=du.toLowerCase(),S1=du[0].toUpperCase()+du.slice(1);Fa(w1,"on"+S1)}Fa(Kk,"onAnimationEnd");Fa(Hk,"onAnimationIteration");Fa(_k,"onAnimationStart");Fa("dblclick","onDoubleClick");Fa("focusin","onFocus");Fa("focusout","onBlur");Fa(Gk,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function _h(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,ww(a,t,void 0,e),e.currentTarget=null}function Yk(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var s=a.length-1;0<=s;s--){var o=a[s],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==l&&i.isPropagationStopped())break e;_h(i,o,u),l=c}else for(s=0;s<a.length;s++){if(o=a[s],c=o.instance,u=o.currentTarget,o=o.listener,c!==l&&i.isPropagationStopped())break e;_h(i,o,u),l=c}}}if(mo)throw e=id,mo=!1,id=null,e}function ze(e,t){var n=t[hd];n===void 0&&(n=t[hd]=new Set);var a=e+"__bubble";n.has(a)||($k(t,e,2,!1),n.add(a))}function mu(e,t,n){var a=0;t&&(a|=4),$k(n,e,a,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function ll(e){if(!e[ws]){e[ws]=!0,Jp.forEach(function(n){n!=="selectionchange"&&(C1.has(n)||mu(n,!1,e),mu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,mu("selectionchange",!1,t))}}function $k(e,t,n,a){switch(Ek(t)){case 1:var i=Ow;break;case 4:i=Kw;break;default:i=Cm}n=i.bind(null,t,n,e),i=void 0,!ad||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fu(e,t,n,a,i){var l=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var o=a.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Ua(o),s===null)return;if(c=s.tag,c===5||c===6){a=l=s;continue e}o=o.parentNode}}a=a.return}yk(function(){var u=l,d=xm(n),m=[];e:{var h=Uk.get(e);if(h!==void 0){var p=Nm,x=e;switch(e){case"keypress":if(qs(n)===0)break e;case"keydown":case"keyup":p=t1;break;case"focusin":x="focus",p=lu;break;case"focusout":x="blur",p=lu;break;case"beforeblur":case"afterblur":p=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Gw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=i1;break;case Kk:case Hk:case _k:p=$w;break;case Gk:p=l1;break;case"scroll":p=Hw;break;case"wheel":p=o1;break;case"copy":case"cut":case"paste":p=qw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mh}var k=(t&4)!==0,v=!k&&e==="scroll",g=k?h!==null?h+"Capture":null:h;k=[];for(var y=u,b;y!==null;){b=y;var z=b.stateNode;if(b.tag===5&&z!==null&&(b=z,g!==null&&(z=el(y,g),z!=null&&k.push(sl(y,z,b)))),v)break;y=y.return}0<k.length&&(h=new p(h,x,null,n,d),m.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==td&&(x=n.relatedTarget||n.fromElement)&&(Ua(x)||x[Un]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?Ua(x):null,x!==null&&(v=mi(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(k=Th,z="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(k=Mh,z="onPointerLeave",g="onPointerEnter",y="pointer"),v=p==null?h:Ai(p),b=x==null?h:Ai(x),h=new k(z,y+"leave",p,n,d),h.target=v,h.relatedTarget=b,z=null,Ua(d)===u&&(k=new k(g,y+"enter",x,n,d),k.target=b,k.relatedTarget=v,z=k),v=z,p&&x)t:{for(k=p,g=x,y=0,b=k;b;b=vi(b))y++;for(b=0,z=g;z;z=vi(z))b++;for(;0<y-b;)k=vi(k),y--;for(;0<b-y;)g=vi(g),b--;for(;y--;){if(k===g||g!==null&&k===g.alternate)break t;k=vi(k),g=vi(g)}k=null}else k=null;p!==null&&Gh(m,h,p,k,!1),x!==null&&v!==null&&Gh(m,v,x,k,!0)}}e:{if(h=u?Ai(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=y1;else if(Ih(h))if(Ik)S=v1;else{S=k1;var C=p1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=g1);if(S&&(S=S(e,u))){Dk(m,S,n,d);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Qu(h,"number",h.value)}switch(C=u?Ai(u):window,e){case"focusin":(Ih(C)||C.contentEditable==="true")&&(ji=C,od=u,Ur=null);break;case"focusout":Ur=od=ji=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,Kh(m,n,d);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":Kh(m,n,d)}var j;if(Em)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ci?Mk(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Pk&&n.locale!=="ko"&&(Ci||w!=="onCompositionStart"?w==="onCompositionEnd"&&Ci&&(j=Tk()):(ba=d,jm="value"in ba?ba.value:ba.textContent,Ci=!0)),C=ko(u,w),0<C.length&&(w=new Ph(w,e,null,n,d),m.push({event:w,listeners:C}),j?w.data=j:(j=Rk(n),j!==null&&(w.data=j)))),(j=u1?d1(e,n):m1(e,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(d=new Ph("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=j))}Yk(m,t)})}function sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=el(e,n),l!=null&&a.unshift(sl(e,l,i)),l=el(e,t),l!=null&&a.push(sl(e,l,i))),e=e.return}return a}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gh(e,t,n,a,i){for(var l=t._reactName,s=[];n!==null&&n!==a;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===a)break;o.tag===5&&u!==null&&(o=u,i?(c=el(n,l),c!=null&&s.unshift(sl(n,c,o))):i||(c=el(n,l),c!=null&&s.push(sl(n,c,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var j1=/\r\n?/g,N1=/\u0000|\uFFFD/g;function Uh(e){return(typeof e=="string"?e:""+e).replace(j1,`
`).replace(N1,"")}function Ss(e,t,n){if(t=Uh(t),Uh(e)!==t&&n)throw Error(L(425))}function go(){}var ud=null,dd=null;function md(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,A1=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,E1=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(e){return Yh.resolve(null).then(e).catch(T1)}:fd;function T1(e){setTimeout(function(){throw e})}function hu(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),al(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);al(t)}function ja(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),vn="__reactFiber$"+hr,ol="__reactProps$"+hr,Un="__reactContainer$"+hr,hd="__reactEvents$"+hr,P1="__reactListeners$"+hr,M1="__reactHandles$"+hr;function Ua(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$h(e);e!==null;){if(n=e[vn])return n;e=$h(e)}return t}e=n,n=e.parentNode}return null}function Fl(e){return e=e[vn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ai(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ec(e){return e[ol]||null}var yd=[],Ei=-1;function Ba(e){return{current:e}}function we(e){0>Ei||(e.current=yd[Ei],yd[Ei]=null,Ei--)}function ge(e,t){Ei++,yd[Ei]=e.current,e.current=t}var Ra={},nt=Ba(Ra),kt=Ba(!1),ai=Ra;function tr(e,t){var n=e.type.contextTypes;if(!n)return Ra;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function gt(e){return e=e.childContextTypes,e!=null}function vo(){we(kt),we(nt)}function Vh(e,t,n){if(nt.current!==Ra)throw Error(L(168));ge(nt,t),ge(kt,n)}function Vk(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(L(108,pw(e)||"Unknown",i));return Me({},n,a)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ra,ai=nt.current,ge(nt,e),ge(kt,kt.current),!0}function qh(e,t,n){var a=e.stateNode;if(!a)throw Error(L(169));n?(e=Vk(e,t,ai),a.__reactInternalMemoizedMergedChildContext=e,we(kt),we(nt),ge(nt,e)):we(kt),ge(kt,n)}var Fn=null,tc=!1,yu=!1;function qk(e){Fn===null?Fn=[e]:Fn.push(e)}function R1(e){tc=!0,qk(e)}function Oa(){if(!yu&&Fn!==null){yu=!0;var e=0,t=me;try{var n=Fn;for(me=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Fn=null,tc=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(e+1)),vk(zm,Oa),i}finally{me=t,yu=!1}}return null}var Ti=[],Pi=0,xo=null,zo=0,It=[],Lt=0,ii=null,On=1,Kn="";function _a(e,t){Ti[Pi++]=zo,Ti[Pi++]=xo,xo=e,zo=t}function Wk(e,t,n){It[Lt++]=On,It[Lt++]=Kn,It[Lt++]=ii,ii=e;var a=On;e=Kn;var i=32-rn(a)-1;a&=~(1<<i),n+=1;var l=32-rn(t)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,On=1<<32-rn(t)+i|n<<i|a,Kn=l+e}else On=1<<l|n<<i|a,Kn=e}function Pm(e){e.return!==null&&(_a(e,1),Wk(e,1,0))}function Mm(e){for(;e===xo;)xo=Ti[--Pi],Ti[Pi]=null,zo=Ti[--Pi],Ti[Pi]=null;for(;e===ii;)ii=It[--Lt],It[Lt]=null,Kn=It[--Lt],It[Lt]=null,On=It[--Lt],It[Lt]=null}var Nt=null,jt=null,Ce=!1,an=null;function Qk(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,jt=ja(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ii!==null?{id:On,overflow:Kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Nt=e,jt=null,!0):!1;default:return!1}}function pd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kd(e){if(Ce){var t=jt;if(t){var n=t;if(!Wh(e,t)){if(pd(e))throw Error(L(418));t=ja(n.nextSibling);var a=Nt;t&&Wh(e,t)?Qk(a,n):(e.flags=e.flags&-4097|2,Ce=!1,Nt=e)}}else{if(pd(e))throw Error(L(418));e.flags=e.flags&-4097|2,Ce=!1,Nt=e}}}function Qh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function Cs(e){if(e!==Nt)return!1;if(!Ce)return Qh(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!md(e.type,e.memoizedProps)),t&&(t=jt)){if(pd(e))throw Xk(),Error(L(418));for(;t;)Qk(e,t),t=ja(t.nextSibling)}if(Qh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=ja(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=Nt?ja(e.stateNode.nextSibling):null;return!0}function Xk(){for(var e=jt;e;)e=ja(e.nextSibling)}function nr(){jt=Nt=null,Ce=!1}function Rm(e){an===null?an=[e]:an.push(e)}var D1=Xn.ReactCurrentBatchConfig;function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var a=n.stateNode}if(!a)throw Error(L(147,e));var i=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=i.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function js(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xh(e){var t=e._init;return t(e._payload)}function Zk(e){function t(g,y){if(e){var b=g.deletions;b===null?(g.deletions=[y],g.flags|=16):b.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function a(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=Ta(g,y),g.index=0,g.sibling=null,g}function l(g,y,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<y?(g.flags|=2,y):b):(g.flags|=2,y)):(g.flags|=1048576,y)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,y,b,z){return y===null||y.tag!==6?(y=zu(b,g.mode,z),y.return=g,y):(y=i(y,b),y.return=g,y)}function c(g,y,b,z){var S=b.type;return S===Si?d(g,y,b.props.children,z,b.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===da&&Xh(S)===y.type)?(z=i(y,b.props),z.ref=Er(g,y,b),z.return=g,z):(z=to(b.type,b.key,b.props,null,g.mode,z),z.ref=Er(g,y,b),z.return=g,z)}function u(g,y,b,z){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=wu(b,g.mode,z),y.return=g,y):(y=i(y,b.children||[]),y.return=g,y)}function d(g,y,b,z,S){return y===null||y.tag!==7?(y=ti(b,g.mode,z,S),y.return=g,y):(y=i(y,b),y.return=g,y)}function m(g,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return y=zu(""+y,g.mode,b),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ys:return b=to(y.type,y.key,y.props,null,g.mode,b),b.ref=Er(g,null,y),b.return=g,b;case wi:return y=wu(y,g.mode,b),y.return=g,y;case da:var z=y._init;return m(g,z(y._payload),b)}if(Ir(y)||Sr(y))return y=ti(y,g.mode,b,null),y.return=g,y;js(g,y)}return null}function h(g,y,b,z){var S=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return S!==null?null:o(g,y,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ys:return b.key===S?c(g,y,b,z):null;case wi:return b.key===S?u(g,y,b,z):null;case da:return S=b._init,h(g,y,S(b._payload),z)}if(Ir(b)||Sr(b))return S!==null?null:d(g,y,b,z,null);js(g,b)}return null}function p(g,y,b,z,S){if(typeof z=="string"&&z!==""||typeof z=="number")return g=g.get(b)||null,o(y,g,""+z,S);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ys:return g=g.get(z.key===null?b:z.key)||null,c(y,g,z,S);case wi:return g=g.get(z.key===null?b:z.key)||null,u(y,g,z,S);case da:var C=z._init;return p(g,y,b,C(z._payload),S)}if(Ir(z)||Sr(z))return g=g.get(b)||null,d(y,g,z,S,null);js(y,z)}return null}function x(g,y,b,z){for(var S=null,C=null,j=y,w=y=0,A=null;j!==null&&w<b.length;w++){j.index>w?(A=j,j=null):A=j.sibling;var P=h(g,j,b[w],z);if(P===null){j===null&&(j=A);break}e&&j&&P.alternate===null&&t(g,j),y=l(P,y,w),C===null?S=P:C.sibling=P,C=P,j=A}if(w===b.length)return n(g,j),Ce&&_a(g,w),S;if(j===null){for(;w<b.length;w++)j=m(g,b[w],z),j!==null&&(y=l(j,y,w),C===null?S=j:C.sibling=j,C=j);return Ce&&_a(g,w),S}for(j=a(g,j);w<b.length;w++)A=p(j,g,w,b[w],z),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?w:A.key),y=l(A,y,w),C===null?S=A:C.sibling=A,C=A);return e&&j.forEach(function(F){return t(g,F)}),Ce&&_a(g,w),S}function k(g,y,b,z){var S=Sr(b);if(typeof S!="function")throw Error(L(150));if(b=S.call(b),b==null)throw Error(L(151));for(var C=S=null,j=y,w=y=0,A=null,P=b.next();j!==null&&!P.done;w++,P=b.next()){j.index>w?(A=j,j=null):A=j.sibling;var F=h(g,j,P.value,z);if(F===null){j===null&&(j=A);break}e&&j&&F.alternate===null&&t(g,j),y=l(F,y,w),C===null?S=F:C.sibling=F,C=F,j=A}if(P.done)return n(g,j),Ce&&_a(g,w),S;if(j===null){for(;!P.done;w++,P=b.next())P=m(g,P.value,z),P!==null&&(y=l(P,y,w),C===null?S=P:C.sibling=P,C=P);return Ce&&_a(g,w),S}for(j=a(g,j);!P.done;w++,P=b.next())P=p(j,g,w,P.value,z),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?w:P.key),y=l(P,y,w),C===null?S=P:C.sibling=P,C=P);return e&&j.forEach(function(N){return t(g,N)}),Ce&&_a(g,w),S}function v(g,y,b,z){if(typeof b=="object"&&b!==null&&b.type===Si&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ys:e:{for(var S=b.key,C=y;C!==null;){if(C.key===S){if(S=b.type,S===Si){if(C.tag===7){n(g,C.sibling),y=i(C,b.props.children),y.return=g,g=y;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===da&&Xh(S)===C.type){n(g,C.sibling),y=i(C,b.props),y.ref=Er(g,C,b),y.return=g,g=y;break e}n(g,C);break}else t(g,C);C=C.sibling}b.type===Si?(y=ti(b.props.children,g.mode,z,b.key),y.return=g,g=y):(z=to(b.type,b.key,b.props,null,g.mode,z),z.ref=Er(g,y,b),z.return=g,g=z)}return s(g);case wi:e:{for(C=b.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){n(g,y.sibling),y=i(y,b.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=wu(b,g.mode,z),y.return=g,g=y}return s(g);case da:return C=b._init,v(g,y,C(b._payload),z)}if(Ir(b))return x(g,y,b,z);if(Sr(b))return k(g,y,b,z);js(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,b),y.return=g,g=y):(n(g,y),y=zu(b,g.mode,z),y.return=g,g=y),s(g)):n(g,y)}return v}var ar=Zk(!0),Jk=Zk(!1),wo=Ba(null),So=null,Mi=null,Dm=null;function Im(){Dm=Mi=So=null}function Lm(e){var t=wo.current;we(wo),e._currentValue=t}function gd(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Oi(e,t){So=e,Dm=Mi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pt=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(Dm!==e)if(e={context:e,memoizedValue:t,next:null},Mi===null){if(So===null)throw Error(L(308));Mi=e,So.dependencies={lanes:0,firstContext:e}}else Mi=Mi.next=e;return t}var Ya=null;function Fm(e){Ya===null?Ya=[e]:Ya.push(e)}function eg(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,Fm(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yn(e,a)}function Yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ma=!1;function Bm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Na(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,se&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,Yn(e,n)}return i=a.interleaved,i===null?(t.next=t,Fm(a)):(t.next=i.next,i.next=t),a.interleaved=t,Yn(e,n)}function Ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,wm(e,n)}}function Zh(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,a){var i=e.updateQueue;ma=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,s===null?l=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=c))}if(l!==null){var m=i.baseState;s=0,d=u=c=null,o=l;do{var h=o.lane,p=o.eventTime;if((a&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,k=o;switch(h=t,p=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){m=x.call(p,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,h=typeof x=="function"?x.call(p,m,h):x,h==null)break e;m=Me({},m,h);break e;case 2:ma=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,c=m):d=d.next=p,s|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);li|=s,e.lanes=s,e.memoizedState=m}}function Jh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(L(191,i));i.call(a)}}}var Bl={},Sn=Ba(Bl),cl=Ba(Bl),ul=Ba(Bl);function $a(e){if(e===Bl)throw Error(L(174));return e}function Om(e,t){switch(ge(ul,t),ge(cl,e),ge(Sn,Bl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zu(t,e)}we(Sn),ge(Sn,t)}function ir(){we(Sn),we(cl),we(ul)}function ng(e){$a(ul.current);var t=$a(Sn.current),n=Zu(t,e.type);t!==n&&(ge(cl,e),ge(Sn,n))}function Km(e){cl.current===e&&(we(Sn),we(cl))}var Ne=Ba(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pu=[];function Hm(){for(var e=0;e<pu.length;e++)pu[e]._workInProgressVersionPrimary=null;pu.length=0}var Qs=Xn.ReactCurrentDispatcher,ku=Xn.ReactCurrentBatchConfig,ri=0,Pe=null,Ke=null,Ge=null,No=!1,Yr=!1,dl=0,I1=0;function Ze(){throw Error(L(321))}function _m(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!on(e[n],t[n]))return!1;return!0}function Gm(e,t,n,a,i,l){if(ri=l,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qs.current=e===null||e.memoizedState===null?O1:K1,e=n(a,i),Yr){l=0;do{if(Yr=!1,dl=0,25<=l)throw Error(L(301));l+=1,Ge=Ke=null,t.updateQueue=null,Qs.current=H1,e=n(a,i)}while(Yr)}if(Qs.current=Ao,t=Ke!==null&&Ke.next!==null,ri=0,Ge=Ke=Pe=null,No=!1,t)throw Error(L(300));return e}function Um(){var e=dl!==0;return dl=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Pe.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ht(){if(Ke===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Ge===null?Pe.memoizedState:Ge.next;if(t!==null)Ge=t,Ke=e;else{if(e===null)throw Error(L(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ge===null?Pe.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function ml(e,t){return typeof t=="function"?t(e):t}function gu(e){var t=Ht(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var a=Ke,i=a.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}a.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,a=a.baseState;var o=s=null,c=null,u=l;do{var d=u.lane;if((ri&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=m,s=a):c=c.next=m,Pe.lanes|=d,li|=d}u=u.next}while(u!==null&&u!==l);c===null?s=a:c.next=o,on(a,t.memoizedState)||(pt=!0),t.memoizedState=a,t.baseState=s,t.baseQueue=c,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Pe.lanes|=l,li|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vu(e){var t=Ht(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);on(l,t.memoizedState)||(pt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function ag(){}function ig(e,t){var n=Pe,a=Ht(),i=t(),l=!on(a.memoizedState,i);if(l&&(a.memoizedState=i,pt=!0),a=a.queue,Ym(sg.bind(null,n,a,e),[e]),a.getSnapshot!==t||l||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,fl(9,lg.bind(null,n,a,i,t),void 0,null),Ue===null)throw Error(L(349));ri&30||rg(n,t,i)}return i}function rg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lg(e,t,n,a){t.value=n,t.getSnapshot=a,og(t)&&cg(e)}function sg(e,t,n){return n(function(){og(t)&&cg(e)})}function og(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!on(e,n)}catch{return!0}}function cg(e){var t=Yn(e,1);t!==null&&ln(t,e,1,-1)}function ey(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:e},t.queue=e,e=e.dispatch=B1.bind(null,Pe,e),[t.memoizedState,e]}function fl(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function ug(){return Ht().memoizedState}function Xs(e,t,n,a){var i=yn();Pe.flags|=e,i.memoizedState=fl(1|t,n,void 0,a===void 0?null:a)}function nc(e,t,n,a){var i=Ht();a=a===void 0?null:a;var l=void 0;if(Ke!==null){var s=Ke.memoizedState;if(l=s.destroy,a!==null&&_m(a,s.deps)){i.memoizedState=fl(t,n,l,a);return}}Pe.flags|=e,i.memoizedState=fl(1|t,n,l,a)}function ty(e,t){return Xs(8390656,8,e,t)}function Ym(e,t){return nc(2048,8,e,t)}function dg(e,t){return nc(4,2,e,t)}function mg(e,t){return nc(4,4,e,t)}function fg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hg(e,t,n){return n=n!=null?n.concat([e]):null,nc(4,4,fg.bind(null,t,e),n)}function $m(){}function yg(e,t){var n=Ht();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&_m(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function pg(e,t){var n=Ht();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&_m(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function kg(e,t,n){return ri&21?(on(n,t)||(n=zk(),Pe.lanes|=n,li|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=n)}function L1(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var a=ku.transition;ku.transition={};try{e(!1),t()}finally{me=n,ku.transition=a}}function gg(){return Ht().memoizedState}function F1(e,t,n){var a=Ea(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},vg(e))bg(t,n);else if(n=eg(e,t,n,a),n!==null){var i=ct();ln(n,e,a,i),xg(n,t,a)}}function B1(e,t,n){var a=Ea(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(vg(e))bg(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(i.hasEagerState=!0,i.eagerState=o,on(o,s)){var c=t.interleaved;c===null?(i.next=i,Fm(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=eg(e,t,i,a),n!==null&&(i=ct(),ln(n,e,a,i),xg(n,t,a))}}function vg(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function bg(e,t){Yr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xg(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,wm(e,n)}}var Ao={readContext:Kt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},O1={readContext:Kt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:ty,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xs(4194308,4,fg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xs(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=yn();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=F1.bind(null,Pe,e),[a.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:ey,useDebugValue:$m,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=ey(!1),t=e[0];return e=L1.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Pe,i=yn();if(Ce){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ue===null)throw Error(L(349));ri&30||rg(a,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ty(sg.bind(null,a,l,e),[e]),a.flags|=2048,fl(9,lg.bind(null,a,l,n,t),void 0,null),n},useId:function(){var e=yn(),t=Ue.identifierPrefix;if(Ce){var n=Kn,a=On;n=(a&~(1<<32-rn(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=dl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=I1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},K1={readContext:Kt,useCallback:yg,useContext:Kt,useEffect:Ym,useImperativeHandle:hg,useInsertionEffect:dg,useLayoutEffect:mg,useMemo:pg,useReducer:gu,useRef:ug,useState:function(){return gu(ml)},useDebugValue:$m,useDeferredValue:function(e){var t=Ht();return kg(t,Ke.memoizedState,e)},useTransition:function(){var e=gu(ml)[0],t=Ht().memoizedState;return[e,t]},useMutableSource:ag,useSyncExternalStore:ig,useId:gg,unstable_isNewReconciler:!1},H1={readContext:Kt,useCallback:yg,useContext:Kt,useEffect:Ym,useImperativeHandle:hg,useInsertionEffect:dg,useLayoutEffect:mg,useMemo:pg,useReducer:vu,useRef:ug,useState:function(){return vu(ml)},useDebugValue:$m,useDeferredValue:function(e){var t=Ht();return Ke===null?t.memoizedState=e:kg(t,Ke.memoizedState,e)},useTransition:function(){var e=vu(ml)[0],t=Ht().memoizedState;return[e,t]},useMutableSource:ag,useSyncExternalStore:ig,useId:gg,unstable_isNewReconciler:!1};function Zt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vd(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ac={isMounted:function(e){return(e=e._reactInternals)?mi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=ct(),i=Ea(e),l=Hn(a,i);l.payload=t,n!=null&&(l.callback=n),t=Na(e,l,i),t!==null&&(ln(t,e,i,a),Ws(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=ct(),i=Ea(e),l=Hn(a,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Na(e,l,i),t!==null&&(ln(t,e,i,a),Ws(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),a=Ea(e),i=Hn(n,a);i.tag=2,t!=null&&(i.callback=t),t=Na(e,i,a),t!==null&&(ln(t,e,a,n),Ws(t,e,a))}};function ny(e,t,n,a,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,s):t.prototype&&t.prototype.isPureReactComponent?!rl(n,a)||!rl(i,l):!0}function zg(e,t,n){var a=!1,i=Ra,l=t.contextType;return typeof l=="object"&&l!==null?l=Kt(l):(i=gt(t)?ai:nt.current,a=t.contextTypes,l=(a=a!=null)?tr(e,i):Ra),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ac,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ay(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ac.enqueueReplaceState(t,t.state,null)}function bd(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bm(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Kt(l):(l=gt(t)?ai:nt.current,i.context=tr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(vd(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ac.enqueueReplaceState(i,i.state,null),Co(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",a=t;do n+=yw(a),a=a.return;while(a);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function bu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _1=typeof WeakMap=="function"?WeakMap:Map;function wg(e,t,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){To||(To=!0,Pd=a),xd(e,t)},n}function Sg(e,t,n){n=Hn(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){xd(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){xd(e,t),typeof a!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function iy(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new _1;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=nS.bind(null,e,t,n),t.then(e,e))}function ry(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ly(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Hn(-1,1),t.tag=2,Na(n,t,1))),n.lanes|=1),e)}var G1=Xn.ReactCurrentOwner,pt=!1;function st(e,t,n,a){t.child=e===null?Jk(t,null,n,a):ar(t,e.child,n,a)}function sy(e,t,n,a,i){n=n.render;var l=t.ref;return Oi(t,i),a=Gm(e,t,n,a,l,i),n=Um(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$n(e,t,i)):(Ce&&n&&Pm(t),t.flags|=1,st(e,t,a,i),t.child)}function oy(e,t,n,a,i){if(e===null){var l=n.type;return typeof l=="function"&&!ef(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Cg(e,t,l,a,i)):(e=to(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(s,a)&&e.ref===t.ref)return $n(e,t,i)}return t.flags|=1,e=Ta(l,a),e.ref=t.ref,e.return=t,t.child=e}function Cg(e,t,n,a,i){if(e!==null){var l=e.memoizedProps;if(rl(l,a)&&e.ref===t.ref)if(pt=!1,t.pendingProps=a=l,(e.lanes&i)!==0)e.flags&131072&&(pt=!0);else return t.lanes=e.lanes,$n(e,t,i)}return zd(e,t,n,a,i)}function jg(e,t,n){var a=t.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Di,wt),wt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Di,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:n,ge(Di,wt),wt|=a}else l!==null?(a=l.baseLanes|n,t.memoizedState=null):a=n,ge(Di,wt),wt|=a;return st(e,t,i,n),t.child}function Ng(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zd(e,t,n,a,i){var l=gt(n)?ai:nt.current;return l=tr(t,l),Oi(t,i),n=Gm(e,t,n,a,l,i),a=Um(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$n(e,t,i)):(Ce&&a&&Pm(t),t.flags|=1,st(e,t,n,i),t.child)}function cy(e,t,n,a,i){if(gt(n)){var l=!0;bo(t)}else l=!1;if(Oi(t,i),t.stateNode===null)Zs(e,t),zg(t,n,a),bd(t,n,a,i),a=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=gt(n)?ai:nt.current,u=tr(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==a||c!==u)&&ay(t,s,a,u),ma=!1;var h=t.memoizedState;s.state=h,Co(t,a,s,i),c=t.memoizedState,o!==a||h!==c||kt.current||ma?(typeof d=="function"&&(vd(t,n,d,a),c=t.memoizedState),(o=ma||ny(t,n,o,a,h,c,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),s.props=a,s.state=c,s.context=u,a=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,tg(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Zt(t.type,o),s.props=u,m=t.pendingProps,h=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Kt(c):(c=gt(n)?ai:nt.current,c=tr(t,c));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==m||h!==c)&&ay(t,s,a,c),ma=!1,h=t.memoizedState,s.state=h,Co(t,a,s,i);var x=t.memoizedState;o!==m||h!==x||kt.current||ma?(typeof p=="function"&&(vd(t,n,p,a),x=t.memoizedState),(u=ma||ny(t,n,u,a,h,x,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=x),s.props=a,s.state=x,s.context=c,a=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return wd(e,t,n,a,l,i)}function wd(e,t,n,a,i,l){Ng(e,t);var s=(t.flags&128)!==0;if(!a&&!s)return i&&qh(t,n,!1),$n(e,t,l);a=t.stateNode,G1.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&s?(t.child=ar(t,e.child,null,l),t.child=ar(t,null,o,l)):st(e,t,o,l),t.memoizedState=a.state,i&&qh(t,n,!0),t.child}function Ag(e){var t=e.stateNode;t.pendingContext?Vh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vh(e,t.context,!1),Om(e,t.containerInfo)}function uy(e,t,n,a,i){return nr(),Rm(i),t.flags|=256,st(e,t,n,a),t.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Cd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eg(e,t,n){var a=t.pendingProps,i=Ne.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ne,i&1),e===null)return kd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=lc(s,a,0,null),e=ti(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Cd(n),t.memoizedState=Sd,e):Vm(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return U1(e,t,s,a,o,i,n);if(l){l=a.fallback,s=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:a.children};return!(s&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=c,t.deletions=null):(a=Ta(i,c),a.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=Ta(o,l):(l=ti(l,s,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=e.child.memoizedState,s=s===null?Cd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Sd,a}return l=e.child,e=l.sibling,a=Ta(l,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Vm(e,t){return t=lc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ns(e,t,n,a){return a!==null&&Rm(a),ar(t,e.child,null,n),e=Vm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U1(e,t,n,a,i,l,s){if(n)return t.flags&256?(t.flags&=-257,a=bu(Error(L(422))),Ns(e,t,s,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,i=t.mode,a=lc({mode:"visible",children:a.children},i,0,null),l=ti(l,i,s,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,t.mode&1&&ar(t,e.child,null,s),t.child.memoizedState=Cd(s),t.memoizedState=Sd,l);if(!(t.mode&1))return Ns(e,t,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var o=a.dgst;return a=o,l=Error(L(419)),a=bu(l,a,void 0),Ns(e,t,s,a)}if(o=(s&e.childLanes)!==0,pt||o){if(a=Ue,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Yn(e,i),ln(a,e,i,-1))}return Jm(),a=bu(Error(L(421))),Ns(e,t,s,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=aS.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,jt=ja(i.nextSibling),Nt=t,Ce=!0,an=null,e!==null&&(It[Lt++]=On,It[Lt++]=Kn,It[Lt++]=ii,On=e.id,Kn=e.overflow,ii=t),t=Vm(t,a.children),t.flags|=4096,t)}function dy(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),gd(e.return,t,n)}function xu(e,t,n,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=i)}function Tg(e,t,n){var a=t.pendingProps,i=a.revealOrder,l=a.tail;if(st(e,t,a.children,n),a=Ne.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dy(e,n,t);else if(e.tag===19)dy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ge(Ne,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&jo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xu(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xu(t,!0,n,null,l);break;case"together":xu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),li|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Ta(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ta(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y1(e,t,n){switch(t.tag){case 3:Ag(t),nr();break;case 5:ng(t);break;case 1:gt(t.type)&&bo(t);break;case 4:Om(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;ge(wo,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ge(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?Eg(e,t,n):(ge(Ne,Ne.current&1),e=$n(e,t,n),e!==null?e.sibling:null);ge(Ne,Ne.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return Tg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ne,Ne.current),a)break;return null;case 22:case 23:return t.lanes=0,jg(e,t,n)}return $n(e,t,n)}var Pg,jd,Mg,Rg;Pg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jd=function(){};Mg=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,$a(Sn.current);var l=null;switch(n){case"input":i=qu(e,i),a=qu(e,a),l=[];break;case"select":i=Me({},i,{value:void 0}),a=Me({},a,{value:void 0}),l=[];break;case"textarea":i=Xu(e,i),a=Xu(e,a),l=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=go)}Ju(n,a);var s;n=null;for(u in i)if(!a.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in a){var c=a[u];if(o=i!=null?i[u]:void 0,a.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ze("scroll",e),l||o===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Rg=function(e,t,n,a){n!==a&&(t.flags|=4)};function Tr(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function $1(e,t,n){var a=t.pendingProps;switch(Mm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return gt(t.type)&&vo(),Je(t),null;case 3:return a=t.stateNode,ir(),we(kt),we(nt),Hm(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Cs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,an!==null&&(Dd(an),an=null))),jd(e,t),Je(t),null;case 5:Km(t);var i=$a(ul.current);if(n=t.type,e!==null&&t.stateNode!=null)Mg(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(L(166));return Je(t),null}if(e=$a(Sn.current),Cs(t)){a=t.stateNode,n=t.type;var l=t.memoizedProps;switch(a[vn]=t,a[ol]=l,e=(t.mode&1)!==0,n){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(i=0;i<Fr.length;i++)ze(Fr[i],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":bh(a,l),ze("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},ze("invalid",a);break;case"textarea":zh(a,l),ze("invalid",a)}Ju(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?a.textContent!==o&&(l.suppressHydrationWarning!==!0&&Ss(a.textContent,o,e),i=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Ss(a.textContent,o,e),i=["children",""+o]):Zr.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&ze("scroll",a)}switch(n){case"input":ps(a),xh(a,l,!0);break;case"textarea":ps(a),wh(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=go)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sk(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(n,{is:a.is}):(e=s.createElement(n),n==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,n),e[vn]=t,e[ol]=a,Pg(e,t,!1,!1),t.stateNode=e;e:{switch(s=ed(n,a),n){case"dialog":ze("cancel",e),ze("close",e),i=a;break;case"iframe":case"object":case"embed":ze("load",e),i=a;break;case"video":case"audio":for(i=0;i<Fr.length;i++)ze(Fr[i],e);i=a;break;case"source":ze("error",e),i=a;break;case"img":case"image":case"link":ze("error",e),ze("load",e),i=a;break;case"details":ze("toggle",e),i=a;break;case"input":bh(e,a),i=qu(e,a),ze("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=Me({},a,{value:void 0}),ze("invalid",e);break;case"textarea":zh(e,a),i=Xu(e,a),ze("invalid",e);break;default:i=a}Ju(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="style"?uk(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ok(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Jr(e,c):typeof c=="number"&&Jr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Zr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&ze("scroll",e):c!=null&&km(e,l,c,s))}switch(n){case"input":ps(e),xh(e,a,!1);break;case"textarea":ps(e),wh(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Ma(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?Ii(e,!!a.multiple,l,!1):a.defaultValue!=null&&Ii(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Rg(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(L(166));if(n=$a(ul.current),$a(Sn.current),Cs(t)){if(a=t.stateNode,n=t.memoizedProps,a[vn]=t,(l=a.nodeValue!==n)&&(e=Nt,e!==null))switch(e.tag){case 3:Ss(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ss(a.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[vn]=t,t.stateNode=a}return Je(t),null;case 13:if(we(Ne),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&jt!==null&&t.mode&1&&!(t.flags&128))Xk(),nr(),t.flags|=98560,l=!1;else if(l=Cs(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(L(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(L(317));l[vn]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),l=!1}else an!==null&&(Dd(an),an=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?He===0&&(He=3):Jm())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return ir(),jd(e,t),e===null&&ll(t.stateNode.containerInfo),Je(t),null;case 10:return Lm(t.type._context),Je(t),null;case 17:return gt(t.type)&&vo(),Je(t),null;case 19:if(we(Ne),l=t.memoizedState,l===null)return Je(t),null;if(a=(t.flags&128)!==0,s=l.rendering,s===null)if(a)Tr(l,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=jo(e),s!==null){for(t.flags|=128,Tr(l,!1),a=s.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)l=n,e=a,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ne,Ne.current&1|2),t.child}e=e.sibling}l.tail!==null&&Le()>lr&&(t.flags|=128,a=!0,Tr(l,!1),t.lanes=4194304)}else{if(!a)if(e=jo(s),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ce)return Je(t),null}else 2*Le()-l.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,a=!0,Tr(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Le(),t.sibling=null,n=Ne.current,ge(Ne,a?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return Zm(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?wt&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function V1(e,t){switch(Mm(t),t.tag){case 1:return gt(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),we(kt),we(nt),Hm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Km(t),null;case 13:if(we(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ne),null;case 4:return ir(),null;case 10:return Lm(t.type._context),null;case 22:case 23:return Zm(),null;case 24:return null;default:return null}}var As=!1,tt=!1,q1=typeof WeakSet=="function"?WeakSet:Set,_=null;function Ri(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){De(e,t,a)}else n.current=null}function Nd(e,t,n){try{n()}catch(a){De(e,t,a)}}var my=!1;function W1(e,t){if(ud=yo,e=Bk(),Tm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,c=-1,u=0,d=0,m=e,h=null;t:for(;;){for(var p;m!==n||i!==0&&m.nodeType!==3||(o=s+i),m!==l||a!==0&&m.nodeType!==3||(c=s+a),m.nodeType===3&&(s+=m.nodeValue.length),(p=m.firstChild)!==null;)h=m,m=p;for(;;){if(m===e)break t;if(h===n&&++u===i&&(o=s),h===l&&++d===a&&(c=s),(p=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=p}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:e,selectionRange:n},yo=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,v=x.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:Zt(t.type,k),v);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(z){De(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=my,my=!1,x}function $r(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Nd(t,n,l)}i=i.next}while(i!==a)}}function ic(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Ad(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dg(e){var t=e.alternate;t!==null&&(e.alternate=null,Dg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vn],delete t[ol],delete t[hd],delete t[P1],delete t[M1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ig(e){return e.tag===5||e.tag===3||e.tag===4}function fy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ed(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(a!==4&&(e=e.child,e!==null))for(Ed(e,t,n),e=e.sibling;e!==null;)Ed(e,t,n),e=e.sibling}function Td(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Td(e,t,n),e=e.sibling;e!==null;)Td(e,t,n),e=e.sibling}var Ve=null,nn=!1;function la(e,t,n){for(n=n.child;n!==null;)Lg(e,t,n),n=n.sibling}function Lg(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:tt||Ri(n,t);case 6:var a=Ve,i=nn;Ve=null,la(e,t,n),Ve=a,nn=i,Ve!==null&&(nn?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(nn?(e=Ve,n=n.stateNode,e.nodeType===8?hu(e.parentNode,n):e.nodeType===1&&hu(e,n),al(e)):hu(Ve,n.stateNode));break;case 4:a=Ve,i=nn,Ve=n.stateNode.containerInfo,nn=!0,la(e,t,n),Ve=a,nn=i;break;case 0:case 11:case 14:case 15:if(!tt&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Nd(n,t,s),i=i.next}while(i!==a)}la(e,t,n);break;case 1:if(!tt&&(Ri(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(o){De(n,t,o)}la(e,t,n);break;case 21:la(e,t,n);break;case 22:n.mode&1?(tt=(a=tt)||n.memoizedState!==null,la(e,t,n),tt=a):la(e,t,n);break;default:la(e,t,n)}}function hy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new q1),t.forEach(function(a){var i=iS.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ve=o.stateNode,nn=!1;break e;case 3:Ve=o.stateNode.containerInfo,nn=!0;break e;case 4:Ve=o.stateNode.containerInfo,nn=!0;break e}o=o.return}if(Ve===null)throw Error(L(160));Lg(l,s,i),Ve=null,nn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fg(t,e),t=t.sibling}function Fg(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),hn(e),a&4){try{$r(3,e,e.return),ic(3,e)}catch(k){De(e,e.return,k)}try{$r(5,e,e.return)}catch(k){De(e,e.return,k)}}break;case 1:Qt(t,e),hn(e),a&512&&n!==null&&Ri(n,n.return);break;case 5:if(Qt(t,e),hn(e),a&512&&n!==null&&Ri(n,n.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(k){De(e,e.return,k)}}if(a&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&rk(i,l),ed(o,s);var u=ed(o,l);for(s=0;s<c.length;s+=2){var d=c[s],m=c[s+1];d==="style"?uk(i,m):d==="dangerouslySetInnerHTML"?ok(i,m):d==="children"?Jr(i,m):km(i,d,m,u)}switch(o){case"input":Wu(i,l);break;case"textarea":lk(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var p=l.value;p!=null?Ii(i,!!l.multiple,p,!1):h!==!!l.multiple&&(l.defaultValue!=null?Ii(i,!!l.multiple,l.defaultValue,!0):Ii(i,!!l.multiple,l.multiple?[]:"",!1))}i[ol]=l}catch(k){De(e,e.return,k)}}break;case 6:if(Qt(t,e),hn(e),a&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){De(e,e.return,k)}}break;case 3:if(Qt(t,e),hn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{al(t.containerInfo)}catch(k){De(e,e.return,k)}break;case 4:Qt(t,e),hn(e);break;case 13:Qt(t,e),hn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Qm=Le())),a&4&&hy(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||d,Qt(t,e),tt=u):Qt(t,e),hn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(m=_=d;_!==null;){switch(h=_,p=h.child,h.tag){case 0:case 11:case 14:case 15:$r(4,h,h.return);break;case 1:Ri(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){a=h,n=h.return;try{t=a,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){De(a,n,k)}}break;case 5:Ri(h,h.return);break;case 22:if(h.memoizedState!==null){py(m);continue}}p!==null?(p.return=h,_=p):py(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=ck("display",s))}catch(k){De(e,e.return,k)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(k){De(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qt(t,e),hn(e),a&4&&hy(e);break;case 21:break;default:Qt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ig(n)){var a=n;break e}n=n.return}throw Error(L(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Jr(i,""),a.flags&=-33);var l=fy(e);Td(e,l,i);break;case 3:case 4:var s=a.stateNode.containerInfo,o=fy(e);Ed(e,o,s);break;default:throw Error(L(161))}}catch(c){De(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Q1(e,t,n){_=e,Bg(e)}function Bg(e,t,n){for(var a=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||As;if(!s){var o=i.alternate,c=o!==null&&o.memoizedState!==null||tt;o=As;var u=tt;if(As=s,(tt=c)&&!u)for(_=i;_!==null;)s=_,c=s.child,s.tag===22&&s.memoizedState!==null?ky(i):c!==null?(c.return=s,_=c):ky(i);for(;l!==null;)_=l,Bg(l),l=l.sibling;_=i,As=o,tt=u}yy(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):yy(e)}}function yy(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||ic(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!tt)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Zt(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Jh(t,l,a);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jh(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&al(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}tt||t.flags&512&&Ad(t)}catch(h){De(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function py(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function ky(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ic(4,t)}catch(c){De(t,n,c)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(c){De(t,i,c)}}var l=t.return;try{Ad(t)}catch(c){De(t,l,c)}break;case 5:var s=t.return;try{Ad(t)}catch(c){De(t,s,c)}}}catch(c){De(t,t.return,c)}if(t===e){_=null;break}var o=t.sibling;if(o!==null){o.return=t.return,_=o;break}_=t.return}}var X1=Math.ceil,Eo=Xn.ReactCurrentDispatcher,qm=Xn.ReactCurrentOwner,Bt=Xn.ReactCurrentBatchConfig,se=0,Ue=null,Be=null,We=0,wt=0,Di=Ba(0),He=0,hl=null,li=0,rc=0,Wm=0,Vr=null,yt=null,Qm=0,lr=1/0,Ln=null,To=!1,Pd=null,Aa=null,Es=!1,xa=null,Po=0,qr=0,Md=null,Js=-1,eo=0;function ct(){return se&6?Le():Js!==-1?Js:Js=Le()}function Ea(e){return e.mode&1?se&2&&We!==0?We&-We:D1.transition!==null?(eo===0&&(eo=zk()),eo):(e=me,e!==0||(e=window.event,e=e===void 0?16:Ek(e.type)),e):1}function ln(e,t,n,a){if(50<qr)throw qr=0,Md=null,Error(L(185));Il(e,n,a),(!(se&2)||e!==Ue)&&(e===Ue&&(!(se&2)&&(rc|=n),He===4&&ha(e,We)),vt(e,a),n===1&&se===0&&!(t.mode&1)&&(lr=Le()+500,tc&&Oa()))}function vt(e,t){var n=e.callbackNode;Dw(e,t);var a=ho(e,e===Ue?We:0);if(a===0)n!==null&&jh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&jh(n),t===1)e.tag===0?R1(gy.bind(null,e)):qk(gy.bind(null,e)),E1(function(){!(se&6)&&Oa()}),n=null;else{switch(wk(a)){case 1:n=zm;break;case 4:n=bk;break;case 16:n=fo;break;case 536870912:n=xk;break;default:n=fo}n=$g(n,Og.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Og(e,t){if(Js=-1,eo=0,se&6)throw Error(L(327));var n=e.callbackNode;if(Ki()&&e.callbackNode!==n)return null;var a=ho(e,e===Ue?We:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Mo(e,a);else{t=a;var i=se;se|=2;var l=Hg();(Ue!==e||We!==t)&&(Ln=null,lr=Le()+500,ei(e,t));do try{eS();break}catch(o){Kg(e,o)}while(!0);Im(),Eo.current=l,se=i,Be!==null?t=0:(Ue=null,We=0,t=He)}if(t!==0){if(t===2&&(i=rd(e),i!==0&&(a=i,t=Rd(e,i))),t===1)throw n=hl,ei(e,0),ha(e,a),vt(e,Le()),n;if(t===6)ha(e,a);else{if(i=e.current.alternate,!(a&30)&&!Z1(i)&&(t=Mo(e,a),t===2&&(l=rd(e),l!==0&&(a=l,t=Rd(e,l))),t===1))throw n=hl,ei(e,0),ha(e,a),vt(e,Le()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(L(345));case 2:Ga(e,yt,Ln);break;case 3:if(ha(e,a),(a&130023424)===a&&(t=Qm+500-Le(),10<t)){if(ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fd(Ga.bind(null,e,yt,Ln),t);break}Ga(e,yt,Ln);break;case 4:if(ha(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var s=31-rn(a);l=1<<s,s=t[s],s>i&&(i=s),a&=~l}if(a=i,a=Le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*X1(a/1960))-a,10<a){e.timeoutHandle=fd(Ga.bind(null,e,yt,Ln),a);break}Ga(e,yt,Ln);break;case 5:Ga(e,yt,Ln);break;default:throw Error(L(329))}}}return vt(e,Le()),e.callbackNode===n?Og.bind(null,e):null}function Rd(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(ei(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=yt,yt=n,t!==null&&Dd(t)),e}function Dd(e){yt===null?yt=e:yt.push.apply(yt,e)}function Z1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!on(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t){for(t&=~Wm,t&=~rc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),a=1<<n;e[n]=-1,t&=~a}}function gy(e){if(se&6)throw Error(L(327));Ki();var t=ho(e,0);if(!(t&1))return vt(e,Le()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var a=rd(e);a!==0&&(t=a,n=Rd(e,a))}if(n===1)throw n=hl,ei(e,0),ha(e,t),vt(e,Le()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ga(e,yt,Ln),vt(e,Le()),null}function Xm(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(lr=Le()+500,tc&&Oa())}}function si(e){xa!==null&&xa.tag===0&&!(se&6)&&Ki();var t=se;se|=1;var n=Bt.transition,a=me;try{if(Bt.transition=null,me=1,e)return e()}finally{me=a,Bt.transition=n,se=t,!(se&6)&&Oa()}}function Zm(){wt=Di.current,we(Di)}function ei(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,A1(n)),Be!==null)for(n=Be.return;n!==null;){var a=n;switch(Mm(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&vo();break;case 3:ir(),we(kt),we(nt),Hm();break;case 5:Km(a);break;case 4:ir();break;case 13:we(Ne);break;case 19:we(Ne);break;case 10:Lm(a.type._context);break;case 22:case 23:Zm()}n=n.return}if(Ue=e,Be=e=Ta(e.current,null),We=wt=t,He=0,hl=null,Wm=rc=li=0,yt=Vr=null,Ya!==null){for(t=0;t<Ya.length;t++)if(n=Ya[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,a.next=s}n.pending=a}Ya=null}return e}function Kg(e,t){do{var n=Be;try{if(Im(),Qs.current=Ao,No){for(var a=Pe.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}No=!1}if(ri=0,Ge=Ke=Pe=null,Yr=!1,dl=0,qm.current=null,n===null||n.return===null){He=1,hl=t,Be=null;break}e:{var l=e,s=n.return,o=n,c=t;if(t=We,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=o,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ry(s);if(p!==null){p.flags&=-257,ly(p,s,o,l,t),p.mode&1&&iy(l,u,t),t=p,c=u;var x=t.updateQueue;if(x===null){var k=new Set;k.add(c),t.updateQueue=k}else x.add(c);break e}else{if(!(t&1)){iy(l,u,t),Jm();break e}c=Error(L(426))}}else if(Ce&&o.mode&1){var v=ry(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),ly(v,s,o,l,t),Rm(rr(c,o));break e}}l=c=rr(c,o),He!==4&&(He=2),Vr===null?Vr=[l]:Vr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=wg(l,c,t);Zh(l,g);break e;case 1:o=c;var y=l.type,b=l.stateNode;if(!(l.flags&128)&&(typeof y.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Aa===null||!Aa.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t;var z=Sg(l,o,t);Zh(l,z);break e}}l=l.return}while(l!==null)}Gg(n)}catch(S){t=S,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Hg(){var e=Eo.current;return Eo.current=Ao,e===null?Ao:e}function Jm(){(He===0||He===3||He===2)&&(He=4),Ue===null||!(li&268435455)&&!(rc&268435455)||ha(Ue,We)}function Mo(e,t){var n=se;se|=2;var a=Hg();(Ue!==e||We!==t)&&(Ln=null,ei(e,t));do try{J1();break}catch(i){Kg(e,i)}while(!0);if(Im(),se=n,Eo.current=a,Be!==null)throw Error(L(261));return Ue=null,We=0,He}function J1(){for(;Be!==null;)_g(Be)}function eS(){for(;Be!==null&&!Cw();)_g(Be)}function _g(e){var t=Yg(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?Gg(e):Be=t,qm.current=null}function Gg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=V1(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Be=null;return}}else if(n=$1(n,t,wt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);He===0&&(He=5)}function Ga(e,t,n){var a=me,i=Bt.transition;try{Bt.transition=null,me=1,tS(e,t,n,a)}finally{Bt.transition=i,me=a}return null}function tS(e,t,n,a){do Ki();while(xa!==null);if(se&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Iw(e,l),e===Ue&&(Be=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Es||(Es=!0,$g(fo,function(){return Ki(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Bt.transition,Bt.transition=null;var s=me;me=1;var o=se;se|=4,qm.current=null,W1(e,n),Fg(n,e),x1(dd),yo=!!ud,dd=ud=null,e.current=n,Q1(n),jw(),se=o,me=s,Bt.transition=l}else e.current=n;if(Es&&(Es=!1,xa=e,Po=i),l=e.pendingLanes,l===0&&(Aa=null),Ew(n.stateNode),vt(e,Le()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(To)throw To=!1,e=Pd,Pd=null,e;return Po&1&&e.tag!==0&&Ki(),l=e.pendingLanes,l&1?e===Md?qr++:(qr=0,Md=e):qr=0,Oa(),null}function Ki(){if(xa!==null){var e=wk(Po),t=Bt.transition,n=me;try{if(Bt.transition=null,me=16>e?16:e,xa===null)var a=!1;else{if(e=xa,xa=null,Po=0,se&6)throw Error(L(331));var i=se;for(se|=4,_=e.current;_!==null;){var l=_,s=l.child;if(_.flags&16){var o=l.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:$r(8,d,l)}var m=d.child;if(m!==null)m.return=d,_=m;else for(;_!==null;){d=_;var h=d.sibling,p=d.return;if(Dg(d),d===u){_=null;break}if(h!==null){h.return=p,_=h;break}_=p}}}var x=l.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var v=k.sibling;k.sibling=null,k=v}while(k!==null)}}_=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,_=s;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:$r(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,_=g;break e}_=l.return}}var y=e.current;for(_=y;_!==null;){s=_;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,_=b;else e:for(s=y;_!==null;){if(o=_,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ic(9,o)}}catch(S){De(o,o.return,S)}if(o===s){_=null;break e}var z=o.sibling;if(z!==null){z.return=o.return,_=z;break e}_=o.return}}if(se=i,Oa(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Qo,e)}catch{}a=!0}return a}finally{me=n,Bt.transition=t}}return!1}function vy(e,t,n){t=rr(n,t),t=wg(e,t,1),e=Na(e,t,1),t=ct(),e!==null&&(Il(e,1,t),vt(e,t))}function De(e,t,n){if(e.tag===3)vy(e,e,n);else for(;t!==null;){if(t.tag===3){vy(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Aa===null||!Aa.has(a))){e=rr(n,e),e=Sg(t,e,1),t=Na(t,e,1),e=ct(),t!==null&&(Il(t,1,e),vt(t,e));break}}t=t.return}}function nS(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(We&n)===n&&(He===4||He===3&&(We&130023424)===We&&500>Le()-Qm?ei(e,0):Wm|=n),vt(e,t)}function Ug(e,t){t===0&&(e.mode&1?(t=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):t=1);var n=ct();e=Yn(e,t),e!==null&&(Il(e,t,n),vt(e,n))}function aS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ug(e,n)}function iS(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(L(314))}a!==null&&a.delete(t),Ug(e,n)}var Yg;Yg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pt=!1,Y1(e,t,n);pt=!!(e.flags&131072)}else pt=!1,Ce&&t.flags&1048576&&Wk(t,zo,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Zs(e,t),e=t.pendingProps;var i=tr(t,nt.current);Oi(t,n),i=Gm(null,t,a,e,i,n);var l=Um();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(a)?(l=!0,bo(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bm(t),i.updater=ac,t.stateNode=i,i._reactInternals=t,bd(t,a,e,n),t=wd(null,t,a,!0,l,n)):(t.tag=0,Ce&&l&&Pm(t),st(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Zs(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=lS(a),e=Zt(a,e),i){case 0:t=zd(null,t,a,e,n);break e;case 1:t=cy(null,t,a,e,n);break e;case 11:t=sy(null,t,a,e,n);break e;case 14:t=oy(null,t,a,Zt(a.type,e),n);break e}throw Error(L(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Zt(a,i),zd(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Zt(a,i),cy(e,t,a,i,n);case 3:e:{if(Ag(t),e===null)throw Error(L(387));a=t.pendingProps,l=t.memoizedState,i=l.element,tg(e,t),Co(t,a,null,n);var s=t.memoizedState;if(a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=rr(Error(L(423)),t),t=uy(e,t,a,n,i);break e}else if(a!==i){i=rr(Error(L(424)),t),t=uy(e,t,a,n,i);break e}else for(jt=ja(t.stateNode.containerInfo.firstChild),Nt=t,Ce=!0,an=null,n=Jk(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),a===i){t=$n(e,t,n);break e}st(e,t,a,n)}t=t.child}return t;case 5:return ng(t),e===null&&kd(t),a=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,md(a,i)?s=null:l!==null&&md(a,l)&&(t.flags|=32),Ng(e,t),st(e,t,s,n),t.child;case 6:return e===null&&kd(t),null;case 13:return Eg(e,t,n);case 4:return Om(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ar(t,null,a,n):st(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Zt(a,i),sy(e,t,a,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,ge(wo,a._currentValue),a._currentValue=s,l!==null)if(on(l.value,s)){if(l.children===i.children&&!kt.current){t=$n(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var c=o.firstContext;c!==null;){if(c.context===a){if(l.tag===1){c=Hn(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),gd(l.return,n,t),o.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(L(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),gd(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Oi(t,n),i=Kt(i),a=a(i),t.flags|=1,st(e,t,a,n),t.child;case 14:return a=t.type,i=Zt(a,t.pendingProps),i=Zt(a.type,i),oy(e,t,a,i,n);case 15:return Cg(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Zt(a,i),Zs(e,t),t.tag=1,gt(a)?(e=!0,bo(t)):e=!1,Oi(t,n),zg(t,a,i),bd(t,a,i,n),wd(null,t,a,!0,e,n);case 19:return Tg(e,t,n);case 22:return jg(e,t,n)}throw Error(L(156,t.tag))};function $g(e,t){return vk(e,t)}function rS(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,a){return new rS(e,t,n,a)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lS(e){if(typeof e=="function")return ef(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vm)return 11;if(e===bm)return 14}return 2}function Ta(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function to(e,t,n,a,i,l){var s=2;if(a=e,typeof e=="function")ef(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Si:return ti(n.children,i,l,t);case gm:s=8,i|=8;break;case Uu:return e=Ft(12,n,t,i|2),e.elementType=Uu,e.lanes=l,e;case Yu:return e=Ft(13,n,t,i),e.elementType=Yu,e.lanes=l,e;case $u:return e=Ft(19,n,t,i),e.elementType=$u,e.lanes=l,e;case nk:return lc(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ek:s=10;break e;case tk:s=9;break e;case vm:s=11;break e;case bm:s=14;break e;case da:s=16,a=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=Ft(s,n,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function ti(e,t,n,a){return e=Ft(7,e,a,t),e.lanes=n,e}function lc(e,t,n,a){return e=Ft(22,e,a,t),e.elementType=nk,e.lanes=n,e.stateNode={isHidden:!1},e}function zu(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function wu(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sS(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tf(e,t,n,a,i,l,s,o,c){return e=new sS(e,t,n,o,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ft(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(l),e}function oS(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Vg(e){if(!e)return Ra;e=e._reactInternals;e:{if(mi(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(gt(n))return Vk(e,n,t)}return t}function qg(e,t,n,a,i,l,s,o,c){return e=tf(n,a,!0,e,i,l,s,o,c),e.context=Vg(null),n=e.current,a=ct(),i=Ea(n),l=Hn(a,i),l.callback=t??null,Na(n,l,i),e.current.lanes=i,Il(e,i,a),vt(e,a),e}function sc(e,t,n,a){var i=t.current,l=ct(),s=Ea(i);return n=Vg(n),t.context===null?t.context=n:t.pendingContext=n,t=Hn(l,s),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Na(i,t,s),e!==null&&(ln(e,i,s,l),Ws(e,i,s)),s}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function by(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nf(e,t){by(e,t),(e=e.alternate)&&by(e,t)}function cS(){return null}var Wg=typeof reportError=="function"?reportError:function(e){console.error(e)};function af(e){this._internalRoot=e}oc.prototype.render=af.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));sc(e,t,null,null)};oc.prototype.unmount=af.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;si(function(){sc(null,e,null,null)}),t[Un]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jk();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fa.length&&t!==0&&t<fa[n].priority;n++);fa.splice(n,0,e),n===0&&Ak(e)}};function rf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xy(){}function uS(e,t,n,a,i){if(i){if(typeof a=="function"){var l=a;a=function(){var u=Ro(s);l.call(u)}}var s=qg(t,a,e,0,null,!1,!1,"",xy);return e._reactRootContainer=s,e[Un]=s.current,ll(e.nodeType===8?e.parentNode:e),si(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var o=a;a=function(){var u=Ro(c);o.call(u)}}var c=tf(e,0,!1,null,null,!1,!1,"",xy);return e._reactRootContainer=c,e[Un]=c.current,ll(e.nodeType===8?e.parentNode:e),si(function(){sc(t,c,n,a)}),c}function uc(e,t,n,a,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var o=i;i=function(){var c=Ro(s);o.call(c)}}sc(t,s,e,i)}else s=uS(n,t,e,i,a);return Ro(s)}Sk=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(wm(t,n|1),vt(t,Le()),!(se&6)&&(lr=Le()+500,Oa()))}break;case 13:si(function(){var a=Yn(e,1);if(a!==null){var i=ct();ln(a,e,1,i)}}),nf(e,1)}};Sm=function(e){if(e.tag===13){var t=Yn(e,134217728);if(t!==null){var n=ct();ln(t,e,134217728,n)}nf(e,134217728)}};Ck=function(e){if(e.tag===13){var t=Ea(e),n=Yn(e,t);if(n!==null){var a=ct();ln(n,e,t,a)}nf(e,t)}};jk=function(){return me};Nk=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};nd=function(e,t,n){switch(t){case"input":if(Wu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=ec(a);if(!i)throw Error(L(90));ik(a),Wu(a,i)}}}break;case"textarea":lk(e,n);break;case"select":t=n.value,t!=null&&Ii(e,!!n.multiple,t,!1)}};fk=Xm;hk=si;var dS={usingClientEntryPoint:!1,Events:[Fl,Ai,ec,dk,mk,Xm]},Pr={findFiberByHostInstance:Ua,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mS={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kk(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||cS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ts.isDisabled&&Ts.supportsFiber)try{Qo=Ts.inject(mS),wn=Ts}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;Pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(t))throw Error(L(200));return oS(e,t,null,n)};Pt.createRoot=function(e,t){if(!rf(e))throw Error(L(299));var n=!1,a="",i=Wg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tf(e,1,!1,null,null,n,!1,a,i),e[Un]=t.current,ll(e.nodeType===8?e.parentNode:e),new af(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=kk(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return si(e)};Pt.hydrate=function(e,t,n){if(!cc(t))throw Error(L(200));return uc(null,e,t,!0,n)};Pt.hydrateRoot=function(e,t,n){if(!rf(e))throw Error(L(405));var a=n!=null&&n.hydratedSources||null,i=!1,l="",s=Wg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=qg(t,null,e,1,n??null,i,!1,l,s),e[Un]=t.current,ll(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new oc(t)};Pt.render=function(e,t,n){if(!cc(t))throw Error(L(200));return uc(null,e,t,!1,n)};Pt.unmountComponentAtNode=function(e){if(!cc(e))throw Error(L(40));return e._reactRootContainer?(si(function(){uc(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};Pt.unstable_batchedUpdates=Xm;Pt.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!cc(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return uc(e,t,n,!1,a)};Pt.version="18.3.1-next-f1338f8080-20240426";function Qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qg)}catch(e){console.error(e)}}Qg(),Qp.exports=Pt;var Ol=Qp.exports;const Xg=Bp(Ol);var Zg,zy=Ol;Zg=zy.createRoot,zy.hydrateRoot;const fS=1,hS=1e6;let Su=0;function yS(){return Su=(Su+1)%Number.MAX_SAFE_INTEGER,Su.toString()}const Cu=new Map,wy=e=>{if(Cu.has(e))return;const t=setTimeout(()=>{Cu.delete(e),Wr({type:"REMOVE_TOAST",toastId:e})},hS);Cu.set(e,t)},pS=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,fS)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?wy(n):e.toasts.forEach(a=>{wy(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===n||n===void 0?{...a,open:!1}:a)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},no=[];let ao={toasts:[]};function Wr(e){ao=pS(ao,e),no.forEach(t=>{t(ao)})}function kS({...e}){const t=yS(),n=i=>Wr({type:"UPDATE_TOAST",toast:{...i,id:t}}),a=()=>Wr({type:"DISMISS_TOAST",toastId:t});return Wr({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||a()}}}),{id:t,dismiss:a,update:n}}function Zn(){const[e,t]=f.useState(ao);return f.useEffect(()=>(no.push(t),()=>{const n=no.indexOf(t);n>-1&&no.splice(n,1)}),[e]),{...e,toast:kS,dismiss:n=>Wr({type:"DISMISS_TOAST",toastId:n})}}function Y(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Sy(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function dc(...e){return t=>{let n=!1;const a=e.map(i=>{const l=Sy(i,t);return!n&&typeof l=="function"&&(n=!0),l});if(n)return()=>{for(let i=0;i<a.length;i++){const l=a[i];typeof l=="function"?l():Sy(e[i],null)}}}}function ye(...e){return f.useCallback(dc(...e),e)}function gS(e,t){const n=f.createContext(t),a=l=>{const{children:s,...o}=l,c=f.useMemo(()=>o,Object.values(o));return r.jsx(n.Provider,{value:c,children:s})};a.displayName=e+"Provider";function i(l){const s=f.useContext(n);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${l}\` must be used within \`${e}\``)}return[a,i]}function Rt(e,t=[]){let n=[];function a(l,s){const o=f.createContext(s),c=n.length;n=[...n,s];const u=m=>{var g;const{scope:h,children:p,...x}=m,k=((g=h==null?void 0:h[e])==null?void 0:g[c])||o,v=f.useMemo(()=>x,Object.values(x));return r.jsx(k.Provider,{value:v,children:p})};u.displayName=l+"Provider";function d(m,h){var k;const p=((k=h==null?void 0:h[e])==null?void 0:k[c])||o,x=f.useContext(p);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${m}\` must be used within \`${l}\``)}return[u,d]}const i=()=>{const l=n.map(s=>f.createContext(s));return function(o){const c=(o==null?void 0:o[e])||l;return f.useMemo(()=>({[`__scope${e}`]:{...o,[e]:c}}),[o,c])}};return i.scopeName=e,[a,vS(i,...t)]}function vS(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const a=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(l){const s=a.reduce((o,{useScope:c,scopeName:u})=>{const m=c(l)[`__scope${u}`];return{...o,...m}},{});return f.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function sr(e){const t=xS(e),n=f.forwardRef((a,i)=>{const{children:l,...s}=a,o=f.Children.toArray(l),c=o.find(zS);if(c){const u=c.props.children,d=o.map(m=>m===c?f.Children.count(u)>1?f.Children.only(null):f.isValidElement(u)?u.props.children:null:m);return r.jsx(t,{...s,ref:i,children:f.isValidElement(u)?f.cloneElement(u,void 0,d):null})}return r.jsx(t,{...s,ref:i,children:l})});return n.displayName=`${e}.Slot`,n}var bS=sr("Slot");function xS(e){const t=f.forwardRef((n,a)=>{const{children:i,...l}=n;if(f.isValidElement(i)){const s=SS(i),o=wS(l,i.props);return i.type!==f.Fragment&&(o.ref=a?dc(a,s):s),f.cloneElement(i,o)}return f.Children.count(i)>1?f.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Jg=Symbol("radix.slottable");function ev(e){const t=({children:n})=>r.jsx(r.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Jg,t}function zS(e){return f.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Jg}function wS(e,t){const n={...t};for(const a in t){const i=e[a],l=t[a];/^on[A-Z]/.test(a)?i&&l?n[a]=(...o)=>{const c=l(...o);return i(...o),c}:i&&(n[a]=i):a==="style"?n[a]={...i,...l}:a==="className"&&(n[a]=[i,l].filter(Boolean).join(" "))}return{...e,...n}}function SS(e){var a,i;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function mc(e){const t=e+"CollectionProvider",[n,a]=Rt(t),[i,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=k=>{const{scope:v,children:g}=k,y=I.useRef(null),b=I.useRef(new Map).current;return r.jsx(i,{scope:v,itemMap:b,collectionRef:y,children:g})};s.displayName=t;const o=e+"CollectionSlot",c=sr(o),u=I.forwardRef((k,v)=>{const{scope:g,children:y}=k,b=l(o,g),z=ye(v,b.collectionRef);return r.jsx(c,{ref:z,children:y})});u.displayName=o;const d=e+"CollectionItemSlot",m="data-radix-collection-item",h=sr(d),p=I.forwardRef((k,v)=>{const{scope:g,children:y,...b}=k,z=I.useRef(null),S=ye(v,z),C=l(d,g);return I.useEffect(()=>(C.itemMap.set(z,{ref:z,...b}),()=>void C.itemMap.delete(z))),r.jsx(h,{[m]:"",ref:S,children:y})});p.displayName=d;function x(k){const v=l(e+"CollectionConsumer",k);return I.useCallback(()=>{const y=v.collectionRef.current;if(!y)return[];const b=Array.from(y.querySelectorAll(`[${m}]`));return Array.from(v.itemMap.values()).sort((C,j)=>b.indexOf(C.ref.current)-b.indexOf(j.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:s,Slot:u,ItemSlot:p},x,a]}var CS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ee=CS.reduce((e,t)=>{const n=sr(`Primitive.${t}`),a=f.forwardRef((i,l)=>{const{asChild:s,...o}=i,c=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),r.jsx(c,{...o,ref:l})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function lf(e,t){e&&Ol.flushSync(()=>e.dispatchEvent(t))}function Tt(e){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...n)=>{var a;return(a=t.current)==null?void 0:a.call(t,...n)},[])}function jS(e,t=globalThis==null?void 0:globalThis.document){const n=Tt(e);f.useEffect(()=>{const a=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",a,{capture:!0}),()=>t.removeEventListener("keydown",a,{capture:!0})},[n,t])}var NS="DismissableLayer",Id="dismissableLayer.update",AS="dismissableLayer.pointerDownOutside",ES="dismissableLayer.focusOutside",Cy,tv=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Kl=f.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:s,onDismiss:o,...c}=e,u=f.useContext(tv),[d,m]=f.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=f.useState({}),x=ye(t,j=>m(j)),k=Array.from(u.layers),[v]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=k.indexOf(v),y=d?k.indexOf(d):-1,b=u.layersWithOutsidePointerEventsDisabled.size>0,z=y>=g,S=PS(j=>{const w=j.target,A=[...u.branches].some(P=>P.contains(w));!z||A||(i==null||i(j),s==null||s(j),j.defaultPrevented||o==null||o())},h),C=MS(j=>{const w=j.target;[...u.branches].some(P=>P.contains(w))||(l==null||l(j),s==null||s(j),j.defaultPrevented||o==null||o())},h);return jS(j=>{y===u.layers.size-1&&(a==null||a(j),!j.defaultPrevented&&o&&(j.preventDefault(),o()))},h),f.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Cy=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),jy(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Cy)}},[d,h,n,u]),f.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),jy())},[d,u]),f.useEffect(()=>{const j=()=>p({});return document.addEventListener(Id,j),()=>document.removeEventListener(Id,j)},[]),r.jsx(ee.div,{...c,ref:x,style:{pointerEvents:b?z?"auto":"none":void 0,...e.style},onFocusCapture:Y(e.onFocusCapture,C.onFocusCapture),onBlurCapture:Y(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Y(e.onPointerDownCapture,S.onPointerDownCapture)})});Kl.displayName=NS;var TS="DismissableLayerBranch",nv=f.forwardRef((e,t)=>{const n=f.useContext(tv),a=f.useRef(null),i=ye(t,a);return f.useEffect(()=>{const l=a.current;if(l)return n.branches.add(l),()=>{n.branches.delete(l)}},[n.branches]),r.jsx(ee.div,{...e,ref:i})});nv.displayName=TS;function PS(e,t=globalThis==null?void 0:globalThis.document){const n=Tt(e),a=f.useRef(!1),i=f.useRef(()=>{});return f.useEffect(()=>{const l=o=>{if(o.target&&!a.current){let c=function(){av(AS,n,u,{discrete:!0})};const u={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=c,t.addEventListener("click",i.current,{once:!0})):c()}else t.removeEventListener("click",i.current);a.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",l),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>a.current=!0}}function MS(e,t=globalThis==null?void 0:globalThis.document){const n=Tt(e),a=f.useRef(!1);return f.useEffect(()=>{const i=l=>{l.target&&!a.current&&av(ES,n,{originalEvent:l},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function jy(){const e=new CustomEvent(Id);document.dispatchEvent(e)}function av(e,t,n,{discrete:a}){const i=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),a?lf(i,l):i.dispatchEvent(l)}var RS=Kl,DS=nv,Nn=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{},IS="Portal",fc=f.forwardRef((e,t)=>{var o;const{container:n,...a}=e,[i,l]=f.useState(!1);Nn(()=>l(!0),[]);const s=n||i&&((o=globalThis==null?void 0:globalThis.document)==null?void 0:o.body);return s?Xg.createPortal(r.jsx(ee.div,{...a,ref:t}),s):null});fc.displayName=IS;function LS(e,t){return f.useReducer((n,a)=>t[n][a]??n,e)}var _t=e=>{const{present:t,children:n}=e,a=FS(t),i=typeof n=="function"?n({present:a.isPresent}):f.Children.only(n),l=ye(a.ref,BS(i));return typeof n=="function"||a.isPresent?f.cloneElement(i,{ref:l}):null};_t.displayName="Presence";function FS(e){const[t,n]=f.useState(),a=f.useRef(null),i=f.useRef(e),l=f.useRef("none"),s=e?"mounted":"unmounted",[o,c]=LS(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const u=Ps(a.current);l.current=o==="mounted"?u:"none"},[o]),Nn(()=>{const u=a.current,d=i.current;if(d!==e){const h=l.current,p=Ps(u);e?c("MOUNT"):p==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&h!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,c]),Nn(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,m=p=>{const k=Ps(a.current).includes(p.animationName);if(p.target===t&&k&&(c("ANIMATION_END"),!i.current)){const v=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},h=p=>{p.target===t&&(l.current=Ps(a.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(o),ref:f.useCallback(u=>{a.current=u?getComputedStyle(u):null,n(u)},[])}}function Ps(e){return(e==null?void 0:e.animationName)||"none"}function BS(e){var a,i;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var OS=hm[" useInsertionEffect ".trim().toString()]||Nn;function Jn({prop:e,defaultProp:t,onChange:n=()=>{},caller:a}){const[i,l,s]=KS({defaultProp:t,onChange:n}),o=e!==void 0,c=o?e:i;{const d=f.useRef(e!==void 0);f.useEffect(()=>{const m=d.current;m!==o&&console.warn(`${a} is changing from ${m?"controlled":"uncontrolled"} to ${o?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=o},[o,a])}const u=f.useCallback(d=>{var m;if(o){const h=HS(d)?d(e):d;h!==e&&((m=s.current)==null||m.call(s,h))}else l(d)},[o,e,l,s]);return[c,u]}function KS({defaultProp:e,onChange:t}){const[n,a]=f.useState(e),i=f.useRef(n),l=f.useRef(t);return OS(()=>{l.current=t},[t]),f.useEffect(()=>{var s;i.current!==n&&((s=l.current)==null||s.call(l,n),i.current=n)},[n,i]),[n,a,l]}function HS(e){return typeof e=="function"}var _S=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),GS="VisuallyHidden",hc=f.forwardRef((e,t)=>r.jsx(ee.span,{...e,ref:t,style:{..._S,...e.style}}));hc.displayName=GS;var US=hc,sf="ToastProvider",[of,YS,$S]=mc("Toast"),[iv,V4]=Rt("Toast",[$S]),[VS,yc]=iv(sf),rv=e=>{const{__scopeToast:t,label:n="Notification",duration:a=5e3,swipeDirection:i="right",swipeThreshold:l=50,children:s}=e,[o,c]=f.useState(null),[u,d]=f.useState(0),m=f.useRef(!1),h=f.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${sf}\`. Expected non-empty \`string\`.`),r.jsx(of.Provider,{scope:t,children:r.jsx(VS,{scope:t,label:n,duration:a,swipeDirection:i,swipeThreshold:l,toastCount:u,viewport:o,onViewportChange:c,onToastAdd:f.useCallback(()=>d(p=>p+1),[]),onToastRemove:f.useCallback(()=>d(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:h,children:s})})};rv.displayName=sf;var lv="ToastViewport",qS=["F8"],Ld="toast.viewportPause",Fd="toast.viewportResume",sv=f.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:a=qS,label:i="Notifications ({hotkey})",...l}=e,s=yc(lv,n),o=YS(n),c=f.useRef(null),u=f.useRef(null),d=f.useRef(null),m=f.useRef(null),h=ye(t,m,s.onViewportChange),p=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=s.toastCount>0;f.useEffect(()=>{const v=g=>{var b;a.length!==0&&a.every(z=>g[z]||g.code===z)&&((b=m.current)==null||b.focus())};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[a]),f.useEffect(()=>{const v=c.current,g=m.current;if(x&&v&&g){const y=()=>{if(!s.isClosePausedRef.current){const C=new CustomEvent(Ld);g.dispatchEvent(C),s.isClosePausedRef.current=!0}},b=()=>{if(s.isClosePausedRef.current){const C=new CustomEvent(Fd);g.dispatchEvent(C),s.isClosePausedRef.current=!1}},z=C=>{!v.contains(C.relatedTarget)&&b()},S=()=>{v.contains(document.activeElement)||b()};return v.addEventListener("focusin",y),v.addEventListener("focusout",z),v.addEventListener("pointermove",y),v.addEventListener("pointerleave",S),window.addEventListener("blur",y),window.addEventListener("focus",b),()=>{v.removeEventListener("focusin",y),v.removeEventListener("focusout",z),v.removeEventListener("pointermove",y),v.removeEventListener("pointerleave",S),window.removeEventListener("blur",y),window.removeEventListener("focus",b)}}},[x,s.isClosePausedRef]);const k=f.useCallback(({tabbingDirection:v})=>{const y=o().map(b=>{const z=b.ref.current,S=[z,...sC(z)];return v==="forwards"?S:S.reverse()});return(v==="forwards"?y.reverse():y).flat()},[o]);return f.useEffect(()=>{const v=m.current;if(v){const g=y=>{var S,C,j;const b=y.altKey||y.ctrlKey||y.metaKey;if(y.key==="Tab"&&!b){const w=document.activeElement,A=y.shiftKey;if(y.target===v&&A){(S=u.current)==null||S.focus();return}const N=k({tabbingDirection:A?"backwards":"forwards"}),B=N.findIndex(R=>R===w);ju(N.slice(B+1))?y.preventDefault():A?(C=u.current)==null||C.focus():(j=d.current)==null||j.focus()}};return v.addEventListener("keydown",g),()=>v.removeEventListener("keydown",g)}},[o,k]),r.jsxs(DS,{ref:c,role:"region","aria-label":i.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&r.jsx(Bd,{ref:u,onFocusFromOutsideViewport:()=>{const v=k({tabbingDirection:"forwards"});ju(v)}}),r.jsx(of.Slot,{scope:n,children:r.jsx(ee.ol,{tabIndex:-1,...l,ref:h})}),x&&r.jsx(Bd,{ref:d,onFocusFromOutsideViewport:()=>{const v=k({tabbingDirection:"backwards"});ju(v)}})]})});sv.displayName=lv;var ov="ToastFocusProxy",Bd=f.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:a,...i}=e,l=yc(ov,n);return r.jsx(hc,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const o=s.relatedTarget;!((u=l.viewport)!=null&&u.contains(o))&&a()}})});Bd.displayName=ov;var Hl="Toast",WS="toast.swipeStart",QS="toast.swipeMove",XS="toast.swipeCancel",ZS="toast.swipeEnd",cv=f.forwardRef((e,t)=>{const{forceMount:n,open:a,defaultOpen:i,onOpenChange:l,...s}=e,[o,c]=Jn({prop:a,defaultProp:i??!0,onChange:l,caller:Hl});return r.jsx(_t,{present:n||o,children:r.jsx(tC,{open:o,...s,ref:t,onClose:()=>c(!1),onPause:Tt(e.onPause),onResume:Tt(e.onResume),onSwipeStart:Y(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Y(e.onSwipeMove,u=>{const{x:d,y:m}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${m}px`)}),onSwipeCancel:Y(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Y(e.onSwipeEnd,u=>{const{x:d,y:m}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${m}px`),c(!1)})})})});cv.displayName=Hl;var[JS,eC]=iv(Hl,{onClose(){}}),tC=f.forwardRef((e,t)=>{const{__scopeToast:n,type:a="foreground",duration:i,open:l,onClose:s,onEscapeKeyDown:o,onPause:c,onResume:u,onSwipeStart:d,onSwipeMove:m,onSwipeCancel:h,onSwipeEnd:p,...x}=e,k=yc(Hl,n),[v,g]=f.useState(null),y=ye(t,R=>g(R)),b=f.useRef(null),z=f.useRef(null),S=i||k.duration,C=f.useRef(0),j=f.useRef(S),w=f.useRef(0),{onToastAdd:A,onToastRemove:P}=k,F=Tt(()=>{var $;(v==null?void 0:v.contains(document.activeElement))&&(($=k.viewport)==null||$.focus()),s()}),N=f.useCallback(R=>{!R||R===1/0||(window.clearTimeout(w.current),C.current=new Date().getTime(),w.current=window.setTimeout(F,R))},[F]);f.useEffect(()=>{const R=k.viewport;if(R){const $=()=>{N(j.current),u==null||u()},O=()=>{const V=new Date().getTime()-C.current;j.current=j.current-V,window.clearTimeout(w.current),c==null||c()};return R.addEventListener(Ld,O),R.addEventListener(Fd,$),()=>{R.removeEventListener(Ld,O),R.removeEventListener(Fd,$)}}},[k.viewport,S,c,u,N]),f.useEffect(()=>{l&&!k.isClosePausedRef.current&&N(S)},[l,S,k.isClosePausedRef,N]),f.useEffect(()=>(A(),()=>P()),[A,P]);const B=f.useMemo(()=>v?pv(v):null,[v]);return k.viewport?r.jsxs(r.Fragment,{children:[B&&r.jsx(nC,{__scopeToast:n,role:"status","aria-live":a==="foreground"?"assertive":"polite","aria-atomic":!0,children:B}),r.jsx(JS,{scope:n,onClose:F,children:Ol.createPortal(r.jsx(of.ItemSlot,{scope:n,children:r.jsx(RS,{asChild:!0,onEscapeKeyDown:Y(o,()=>{k.isFocusedToastEscapeKeyDownRef.current||F(),k.isFocusedToastEscapeKeyDownRef.current=!1}),children:r.jsx(ee.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":k.swipeDirection,...x,ref:y,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Y(e.onKeyDown,R=>{R.key==="Escape"&&(o==null||o(R.nativeEvent),R.nativeEvent.defaultPrevented||(k.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:Y(e.onPointerDown,R=>{R.button===0&&(b.current={x:R.clientX,y:R.clientY})}),onPointerMove:Y(e.onPointerMove,R=>{if(!b.current)return;const $=R.clientX-b.current.x,O=R.clientY-b.current.y,V=!!z.current,T=["left","right"].includes(k.swipeDirection),E=["left","up"].includes(k.swipeDirection)?Math.min:Math.max,D=T?E(0,$):0,H=T?0:E(0,O),K=R.pointerType==="touch"?10:2,W={x:D,y:H},q={originalEvent:R,delta:W};V?(z.current=W,Ms(QS,m,q,{discrete:!1})):Ny(W,k.swipeDirection,K)?(z.current=W,Ms(WS,d,q,{discrete:!1}),R.target.setPointerCapture(R.pointerId)):(Math.abs($)>K||Math.abs(O)>K)&&(b.current=null)}),onPointerUp:Y(e.onPointerUp,R=>{const $=z.current,O=R.target;if(O.hasPointerCapture(R.pointerId)&&O.releasePointerCapture(R.pointerId),z.current=null,b.current=null,$){const V=R.currentTarget,T={originalEvent:R,delta:$};Ny($,k.swipeDirection,k.swipeThreshold)?Ms(ZS,p,T,{discrete:!0}):Ms(XS,h,T,{discrete:!0}),V.addEventListener("click",E=>E.preventDefault(),{once:!0})}})})})}),k.viewport)})]}):null}),nC=e=>{const{__scopeToast:t,children:n,...a}=e,i=yc(Hl,t),[l,s]=f.useState(!1),[o,c]=f.useState(!1);return rC(()=>s(!0)),f.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),o?null:r.jsx(fc,{asChild:!0,children:r.jsx(hc,{...a,children:l&&r.jsxs(r.Fragment,{children:[i.label," ",n]})})})},aC="ToastTitle",uv=f.forwardRef((e,t)=>{const{__scopeToast:n,...a}=e;return r.jsx(ee.div,{...a,ref:t})});uv.displayName=aC;var iC="ToastDescription",dv=f.forwardRef((e,t)=>{const{__scopeToast:n,...a}=e;return r.jsx(ee.div,{...a,ref:t})});dv.displayName=iC;var mv="ToastAction",fv=f.forwardRef((e,t)=>{const{altText:n,...a}=e;return n.trim()?r.jsx(yv,{altText:n,asChild:!0,children:r.jsx(cf,{...a,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${mv}\`. Expected non-empty \`string\`.`),null)});fv.displayName=mv;var hv="ToastClose",cf=f.forwardRef((e,t)=>{const{__scopeToast:n,...a}=e,i=eC(hv,n);return r.jsx(yv,{asChild:!0,children:r.jsx(ee.button,{type:"button",...a,ref:t,onClick:Y(e.onClick,i.onClose)})})});cf.displayName=hv;var yv=f.forwardRef((e,t)=>{const{__scopeToast:n,altText:a,...i}=e;return r.jsx(ee.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0,...i,ref:t})});function pv(e){const t=[];return Array.from(e.childNodes).forEach(a=>{if(a.nodeType===a.TEXT_NODE&&a.textContent&&t.push(a.textContent),lC(a)){const i=a.ariaHidden||a.hidden||a.style.display==="none",l=a.dataset.radixToastAnnounceExclude==="";if(!i)if(l){const s=a.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...pv(a))}}),t}function Ms(e,t,n,{discrete:a}){const i=n.originalEvent.currentTarget,l=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),a?lf(i,l):i.dispatchEvent(l)}var Ny=(e,t,n=0)=>{const a=Math.abs(e.x),i=Math.abs(e.y),l=a>i;return t==="left"||t==="right"?l&&a>n:!l&&i>n};function rC(e=()=>{}){const t=Tt(e);Nn(()=>{let n=0,a=0;return n=window.requestAnimationFrame(()=>a=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(a)}},[t])}function lC(e){return e.nodeType===e.ELEMENT_NODE}function sC(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const i=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||i?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ju(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var oC=rv,kv=sv,gv=cv,vv=uv,bv=dv,xv=fv,zv=cf;function wv(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=wv(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Sv(){for(var e,t,n=0,a="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=wv(e))&&(a&&(a+=" "),a+=t);return a}const Ay=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ey=Sv,_l=(e,t)=>n=>{var a;if((t==null?void 0:t.variants)==null)return Ey(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:l}=t,s=Object.keys(i).map(u=>{const d=n==null?void 0:n[u],m=l==null?void 0:l[u];if(d===null)return null;const h=Ay(d)||Ay(m);return i[u][h]}),o=n&&Object.entries(n).reduce((u,d)=>{let[m,h]=d;return h===void 0||(u[m]=h),u},{}),c=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((u,d)=>{let{class:m,className:h,...p}=d;return Object.entries(p).every(x=>{let[k,v]=x;return Array.isArray(v)?v.includes({...l,...o}[k]):{...l,...o}[k]===v})?[...u,m,h]:u},[]);return Ey(e,s,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cv=(...e)=>e.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=f.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:i="",children:l,iconNode:s,...o},c)=>f.createElement("svg",{ref:c,...uC,width:t,height:t,stroke:e,strokeWidth:a?Number(n)*24/Number(t):n,className:Cv("lucide",i),...o},[...s.map(([u,d])=>f.createElement(u,d)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(e,t)=>{const n=f.forwardRef(({className:a,...i},l)=>f.createElement(dC,{ref:l,iconNode:t,className:Cv(`lucide-${cC(e)}`,a),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=X("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=X("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=X("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=X("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=X("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=X("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=X("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=X("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=X("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=X("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=X("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=X("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=X("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=X("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=X("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=X("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=X("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=X("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=X("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=X("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=X("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=X("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=X("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=X("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=X("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=X("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=X("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=X("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=X("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=X("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=X("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=X("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=X("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=X("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=X("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=X("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=X("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=X("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=X("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=X("StarOff",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=X("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=X("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=X("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=X("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=X("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=X("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ff="-",IC=e=>{const t=FC(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:s=>{const o=s.split(ff);return o[0]===""&&o.length!==1&&o.shift(),Iv(o,t)||LC(s)},getConflictingClassGroupIds:(s,o)=>{const c=n[s]||[];return o&&a[s]?[...c,...a[s]]:c}}},Iv=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],a=t.nextPart.get(n),i=a?Iv(e.slice(1),a):void 0;if(i)return i;if(t.validators.length===0)return;const l=e.join(ff);return(s=t.validators.find(({validator:o})=>o(l)))==null?void 0:s.classGroupId},Py=/^\[(.+)\]$/,LC=e=>{if(Py.test(e)){const t=Py.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},FC=e=>{const{theme:t,prefix:n}=e,a={nextPart:new Map,validators:[]};return OC(Object.entries(e.classGroups),n).forEach(([l,s])=>{Od(s,a,l,t)}),a},Od=(e,t,n,a)=>{e.forEach(i=>{if(typeof i=="string"){const l=i===""?t:My(t,i);l.classGroupId=n;return}if(typeof i=="function"){if(BC(i)){Od(i(a),t,n,a);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([l,s])=>{Od(s,My(t,l),n,a)})})},My=(e,t)=>{let n=e;return t.split(ff).forEach(a=>{n.nextPart.has(a)||n.nextPart.set(a,{nextPart:new Map,validators:[]}),n=n.nextPart.get(a)}),n},BC=e=>e.isThemeGetter,OC=(e,t)=>t?e.map(([n,a])=>{const i=a.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([s,o])=>[t+s,o])):l);return[n,i]}):e,KC=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,a=new Map;const i=(l,s)=>{n.set(l,s),t++,t>e&&(t=0,a=n,n=new Map)};return{get(l){let s=n.get(l);if(s!==void 0)return s;if((s=a.get(l))!==void 0)return i(l,s),s},set(l,s){n.has(l)?n.set(l,s):i(l,s)}}},Lv="!",HC=e=>{const{separator:t,experimentalParseClassName:n}=e,a=t.length===1,i=t[0],l=t.length,s=o=>{const c=[];let u=0,d=0,m;for(let v=0;v<o.length;v++){let g=o[v];if(u===0){if(g===i&&(a||o.slice(v,v+l)===t)){c.push(o.slice(d,v)),d=v+l;continue}if(g==="/"){m=v;continue}}g==="["?u++:g==="]"&&u--}const h=c.length===0?o:o.substring(d),p=h.startsWith(Lv),x=p?h.substring(1):h,k=m&&m>d?m-d:void 0;return{modifiers:c,hasImportantModifier:p,baseClassName:x,maybePostfixModifierPosition:k}};return n?o=>n({className:o,parseClassName:s}):s},_C=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(a=>{a[0]==="["?(t.push(...n.sort(),a),n=[]):n.push(a)}),t.push(...n.sort()),t},GC=e=>({cache:KC(e.cacheSize),parseClassName:HC(e),...IC(e)}),UC=/\s+/,YC=(e,t)=>{const{parseClassName:n,getClassGroupId:a,getConflictingClassGroupIds:i}=t,l=[],s=e.trim().split(UC);let o="";for(let c=s.length-1;c>=0;c-=1){const u=s[c],{modifiers:d,hasImportantModifier:m,baseClassName:h,maybePostfixModifierPosition:p}=n(u);let x=!!p,k=a(x?h.substring(0,p):h);if(!k){if(!x){o=u+(o.length>0?" "+o:o);continue}if(k=a(h),!k){o=u+(o.length>0?" "+o:o);continue}x=!1}const v=_C(d).join(":"),g=m?v+Lv:v,y=g+k;if(l.includes(y))continue;l.push(y);const b=i(k,x);for(let z=0;z<b.length;++z){const S=b[z];l.push(g+S)}o=u+(o.length>0?" "+o:o)}return o};function $C(){let e=0,t,n,a="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Fv(t))&&(a&&(a+=" "),a+=n);return a}const Fv=e=>{if(typeof e=="string")return e;let t,n="";for(let a=0;a<e.length;a++)e[a]&&(t=Fv(e[a]))&&(n&&(n+=" "),n+=t);return n};function VC(e,...t){let n,a,i,l=s;function s(c){const u=t.reduce((d,m)=>m(d),e());return n=GC(u),a=n.cache.get,i=n.cache.set,l=o,o(c)}function o(c){const u=a(c);if(u)return u;const d=YC(c,n);return i(c,d),d}return function(){return l($C.apply(null,arguments))}}const xe=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Bv=/^\[(?:([a-z-]+):)?(.+)\]$/i,qC=/^\d+\/\d+$/,WC=new Set(["px","full","screen"]),QC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,XC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ZC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,JC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ej=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Rn=e=>Hi(e)||WC.has(e)||qC.test(e),sa=e=>yr(e,"length",oj),Hi=e=>!!e&&!Number.isNaN(Number(e)),Nu=e=>yr(e,"number",Hi),Mr=e=>!!e&&Number.isInteger(Number(e)),tj=e=>e.endsWith("%")&&Hi(e.slice(0,-1)),te=e=>Bv.test(e),oa=e=>QC.test(e),nj=new Set(["length","size","percentage"]),aj=e=>yr(e,nj,Ov),ij=e=>yr(e,"position",Ov),rj=new Set(["image","url"]),lj=e=>yr(e,rj,uj),sj=e=>yr(e,"",cj),Rr=()=>!0,yr=(e,t,n)=>{const a=Bv.exec(e);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):n(a[2]):!1},oj=e=>XC.test(e)&&!ZC.test(e),Ov=()=>!1,cj=e=>JC.test(e),uj=e=>ej.test(e),dj=()=>{const e=xe("colors"),t=xe("spacing"),n=xe("blur"),a=xe("brightness"),i=xe("borderColor"),l=xe("borderRadius"),s=xe("borderSpacing"),o=xe("borderWidth"),c=xe("contrast"),u=xe("grayscale"),d=xe("hueRotate"),m=xe("invert"),h=xe("gap"),p=xe("gradientColorStops"),x=xe("gradientColorStopPositions"),k=xe("inset"),v=xe("margin"),g=xe("opacity"),y=xe("padding"),b=xe("saturate"),z=xe("scale"),S=xe("sepia"),C=xe("skew"),j=xe("space"),w=xe("translate"),A=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",te,t],N=()=>[te,t],B=()=>["",Rn,sa],R=()=>["auto",Hi,te],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",te],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[Hi,te];return{cacheSize:500,separator:":",theme:{colors:[Rr],spacing:[Rn,sa],blur:["none","",oa,te],brightness:H(),borderColor:[e],borderRadius:["none","","full",oa,te],borderSpacing:N(),borderWidth:B(),contrast:H(),grayscale:E(),hueRotate:H(),invert:E(),gap:N(),gradientColorStops:[e],gradientColorStopPositions:[tj,sa],inset:F(),margin:F(),opacity:H(),padding:N(),saturate:H(),scale:H(),sepia:E(),skew:H(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",te]}],container:["container"],columns:[{columns:[oa]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),te]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Mr,te]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",te]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",Mr,te]}],"grid-cols":[{"grid-cols":[Rr]}],"col-start-end":[{col:["auto",{span:["full",Mr,te]},te]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[Rr]}],"row-start-end":[{row:["auto",{span:[Mr,te]},te]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",te]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",te,t]}],"min-w":[{"min-w":[te,t,"min","max","fit"]}],"max-w":[{"max-w":[te,t,"none","full","min","max","fit","prose",{screen:[oa]},oa]}],h:[{h:[te,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[te,t,"auto","min","max","fit"]}],"font-size":[{text:["base",oa,sa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Nu]}],"font-family":[{font:[Rr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",te]}],"line-clamp":[{"line-clamp":["none",Hi,Nu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Rn,te]}],"list-image":[{"list-image":["none",te]}],"list-style-type":[{list:["none","disc","decimal",te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Rn,sa]}],"underline-offset":[{"underline-offset":["auto",Rn,te]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),ij]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",aj]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},lj]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...O(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:O()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...O()]}],"outline-offset":[{"outline-offset":[Rn,te]}],"outline-w":[{outline:[Rn,sa]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Rn,sa]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",oa,sj]}],"shadow-color":[{shadow:[Rr]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[a]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",oa,te]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[m]}],saturate:[{saturate:[b]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",te]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",te]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[z]}],"scale-x":[{"scale-x":[z]}],"scale-y":[{"scale-y":[z]}],rotate:[{rotate:[Mr,te]}],"translate-x":[{"translate-x":[w]}],"translate-y":[{"translate-y":[w]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",te]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Rn,sa,Nu]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},mj=VC(dj);function G(...e){return mj(Sv(e))}const fj=oC,Kv=f.forwardRef(({className:e,...t},n)=>r.jsx(kv,{ref:n,className:G("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Kv.displayName=kv.displayName;const hj=_l("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Hv=f.forwardRef(({className:e,variant:t,...n},a)=>r.jsx(gv,{ref:a,className:G(hj({variant:t}),e),...n}));Hv.displayName=gv.displayName;const yj=f.forwardRef(({className:e,...t},n)=>r.jsx(xv,{ref:n,className:G("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));yj.displayName=xv.displayName;const _v=f.forwardRef(({className:e,...t},n)=>r.jsx(zv,{ref:n,className:G("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:r.jsx(fi,{className:"h-4 w-4"})}));_v.displayName=zv.displayName;const Gv=f.forwardRef(({className:e,...t},n)=>r.jsx(vv,{ref:n,className:G("text-sm font-semibold",e),...t}));Gv.displayName=vv.displayName;const Uv=f.forwardRef(({className:e,...t},n)=>r.jsx(bv,{ref:n,className:G("text-sm opacity-90",e),...t}));Uv.displayName=bv.displayName;function pj(){const{toasts:e}=Zn();return r.jsxs(fj,{children:[e.map(function({id:t,title:n,description:a,action:i,...l}){return r.jsxs(Hv,{...l,children:[r.jsxs("div",{className:"grid gap-1",children:[n&&r.jsx(Gv,{children:n}),a&&r.jsx(Uv,{children:a})]}),i,r.jsx(_v,{})]},t)}),r.jsx(Kv,{})]})}var Ry=["light","dark"],kj="(prefers-color-scheme: dark)",gj=f.createContext(void 0),vj={setTheme:e=>{},themes:[]},bj=()=>{var e;return(e=f.useContext(gj))!=null?e:vj};f.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:i,defaultTheme:l,value:s,attrs:o,nonce:c})=>{let u=l==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${o.map(x=>`'${x}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=i?Ry.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(x,k=!1,v=!0)=>{let g=s?s[x]:x,y=k?x+"|| ''":`'${g}'`,b="";return i&&v&&!k&&Ry.includes(x)&&(b+=`d.style.colorScheme = '${x}';`),n==="class"?k||g?b+=`c.add(${y})`:b+="null":g&&(b+=`d[s](n,${y})`),b},p=e?`!function(){${d}${h(e)}}()`:a?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${kj}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}${u?"":"else{"+h(l,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}else{${h(l,!1,!1)};}${m}}catch(t){}}();`;return f.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:p}})});var xj=e=>{switch(e){case"success":return Sj;case"info":return jj;case"warning":return Cj;case"error":return Nj;default:return null}},zj=Array(12).fill(0),wj=({visible:e,className:t})=>I.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},I.createElement("div",{className:"sonner-spinner"},zj.map((n,a)=>I.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${a}`})))),Sj=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Cj=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),jj=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Nj=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Aj=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},I.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Ej=()=>{let[e,t]=I.useState(document.hidden);return I.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Kd=1,Tj=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...a}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Kd++,l=this.toasts.find(o=>o.id===i),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),l?this.toasts=this.toasts.map(o=>o.id===i?(this.publish({...o,...e,id:i,title:n}),{...o,...e,id:i,dismissible:s,title:n}):o):this.addToast({title:n,...a,dismissible:s,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let a=e instanceof Promise?e:e(),i=n!==void 0,l,s=a.then(async c=>{if(l=["resolve",c],I.isValidElement(c))i=!1,this.create({id:n,type:"default",message:c});else if(Mj(c)&&!c.ok){i=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${c.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${c.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){i=!1;let u=typeof t.success=="function"?await t.success(c):t.success,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async c=>{if(l=["reject",c],t.error!==void 0){i=!1;let u=typeof t.error=="function"?await t.error(c):t.error,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var c;i&&(this.dismiss(n),n=void 0),(c=t.finally)==null||c.call(t)}),o=()=>new Promise((c,u)=>s.then(()=>l[0]==="reject"?u(l[1]):c(l[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:o}:Object.assign(n,{unwrap:o})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Kd++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},ht=new Tj,Pj=(e,t)=>{let n=(t==null?void 0:t.id)||Kd++;return ht.addToast({title:e,...t,id:n}),n},Mj=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Rj=Pj,Dj=()=>ht.toasts,Ij=()=>ht.getActiveToasts();Object.assign(Rj,{success:ht.success,info:ht.info,warning:ht.warning,error:ht.error,custom:ht.custom,message:ht.message,promise:ht.promise,dismiss:ht.dismiss,loading:ht.loading},{getHistory:Dj,getToasts:Ij});function Lj(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}Lj(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Rs(e){return e.label!==void 0}var Fj=3,Bj="32px",Oj="16px",Dy=4e3,Kj=356,Hj=14,_j=20,Gj=200;function Xt(...e){return e.filter(Boolean).join(" ")}function Uj(e){let[t,n]=e.split("-"),a=[];return t&&a.push(t),n&&a.push(n),a}var Yj=e=>{var t,n,a,i,l,s,o,c,u,d,m;let{invert:h,toast:p,unstyled:x,interacting:k,setHeights:v,visibleToasts:g,heights:y,index:b,toasts:z,expanded:S,removeToast:C,defaultRichColors:j,closeButton:w,style:A,cancelButtonStyle:P,actionButtonStyle:F,className:N="",descriptionClassName:B="",duration:R,position:$,gap:O,loadingIcon:V,expandByDefault:T,classNames:E,icons:D,closeButtonAriaLabel:H="Close toast",pauseWhenPageIsHidden:K}=e,[W,q]=I.useState(null),[le,de]=I.useState(null),[Q,ve]=I.useState(!1),[fe,je]=I.useState(!1),[oe,U]=I.useState(!1),[re,be]=I.useState(!1),[Oe,it]=I.useState(!1),[xt,zt]=I.useState(0),[rt,fn]=I.useState(0),Gt=I.useRef(p.duration||R||Dy),pi=I.useRef(null),Ut=I.useRef(null),os=b===0,cs=b+1<=g,ft=p.type,Mn=p.dismissible!==!1,Vc=p.className||"",xr=p.descriptionClassName||"",Yt=I.useMemo(()=>y.findIndex(Z=>Z.toastId===p.id)||0,[y,p.id]),zr=I.useMemo(()=>{var Z;return(Z=p.closeButton)!=null?Z:w},[p.closeButton,w]),ki=I.useMemo(()=>p.duration||R||Dy,[p.duration,R]),ta=I.useRef(0),na=I.useRef(0),us=I.useRef(0),aa=I.useRef(null),[qc,Wc]=$.split("-"),wr=I.useMemo(()=>y.reduce((Z,ue,pe)=>pe>=Yt?Z:Z+ue.height,0),[y,Yt]),ds=Ej(),ms=p.invert||h,gi=ft==="loading";na.current=I.useMemo(()=>Yt*O+wr,[Yt,wr]),I.useEffect(()=>{Gt.current=ki},[ki]),I.useEffect(()=>{ve(!0)},[]),I.useEffect(()=>{let Z=Ut.current;if(Z){let ue=Z.getBoundingClientRect().height;return fn(ue),v(pe=>[{toastId:p.id,height:ue,position:p.position},...pe]),()=>v(pe=>pe.filter(Vt=>Vt.toastId!==p.id))}},[v,p.id]),I.useLayoutEffect(()=>{if(!Q)return;let Z=Ut.current,ue=Z.style.height;Z.style.height="auto";let pe=Z.getBoundingClientRect().height;Z.style.height=ue,fn(pe),v(Vt=>Vt.find(qt=>qt.toastId===p.id)?Vt.map(qt=>qt.toastId===p.id?{...qt,height:pe}:qt):[{toastId:p.id,height:pe,position:p.position},...Vt])},[Q,p.title,p.description,v,p.id]);let $t=I.useCallback(()=>{je(!0),zt(na.current),v(Z=>Z.filter(ue=>ue.toastId!==p.id)),setTimeout(()=>{C(p)},Gj)},[p,C,v,na]);I.useEffect(()=>{if(p.promise&&ft==="loading"||p.duration===1/0||p.type==="loading")return;let Z;return S||k||K&&ds?(()=>{if(us.current<ta.current){let ue=new Date().getTime()-ta.current;Gt.current=Gt.current-ue}us.current=new Date().getTime()})():Gt.current!==1/0&&(ta.current=new Date().getTime(),Z=setTimeout(()=>{var ue;(ue=p.onAutoClose)==null||ue.call(p,p),$t()},Gt.current)),()=>clearTimeout(Z)},[S,k,p,ft,K,ds,$t]),I.useEffect(()=>{p.delete&&$t()},[$t,p.delete]);function Qc(){var Z,ue,pe;return D!=null&&D.loading?I.createElement("div",{className:Xt(E==null?void 0:E.loader,(Z=p==null?void 0:p.classNames)==null?void 0:Z.loader,"sonner-loader"),"data-visible":ft==="loading"},D.loading):V?I.createElement("div",{className:Xt(E==null?void 0:E.loader,(ue=p==null?void 0:p.classNames)==null?void 0:ue.loader,"sonner-loader"),"data-visible":ft==="loading"},V):I.createElement(wj,{className:Xt(E==null?void 0:E.loader,(pe=p==null?void 0:p.classNames)==null?void 0:pe.loader),visible:ft==="loading"})}return I.createElement("li",{tabIndex:0,ref:Ut,className:Xt(N,Vc,E==null?void 0:E.toast,(t=p==null?void 0:p.classNames)==null?void 0:t.toast,E==null?void 0:E.default,E==null?void 0:E[ft],(n=p==null?void 0:p.classNames)==null?void 0:n[ft]),"data-sonner-toast":"","data-rich-colors":(a=p.richColors)!=null?a:j,"data-styled":!(p.jsx||p.unstyled||x),"data-mounted":Q,"data-promise":!!p.promise,"data-swiped":Oe,"data-removed":fe,"data-visible":cs,"data-y-position":qc,"data-x-position":Wc,"data-index":b,"data-front":os,"data-swiping":oe,"data-dismissible":Mn,"data-type":ft,"data-invert":ms,"data-swipe-out":re,"data-swipe-direction":le,"data-expanded":!!(S||T&&Q),style:{"--index":b,"--toasts-before":b,"--z-index":z.length-b,"--offset":`${fe?xt:na.current}px`,"--initial-height":T?"auto":`${rt}px`,...A,...p.style},onDragEnd:()=>{U(!1),q(null),aa.current=null},onPointerDown:Z=>{gi||!Mn||(pi.current=new Date,zt(na.current),Z.target.setPointerCapture(Z.pointerId),Z.target.tagName!=="BUTTON"&&(U(!0),aa.current={x:Z.clientX,y:Z.clientY}))},onPointerUp:()=>{var Z,ue,pe,Vt;if(re||!Mn)return;aa.current=null;let qt=Number(((Z=Ut.current)==null?void 0:Z.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),ia=Number(((ue=Ut.current)==null?void 0:ue.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ha=new Date().getTime()-((pe=pi.current)==null?void 0:pe.getTime()),Wt=W==="x"?qt:ia,ra=Math.abs(Wt)/Ha;if(Math.abs(Wt)>=_j||ra>.11){zt(na.current),(Vt=p.onDismiss)==null||Vt.call(p,p),de(W==="x"?qt>0?"right":"left":ia>0?"down":"up"),$t(),be(!0),it(!1);return}U(!1),q(null)},onPointerMove:Z=>{var ue,pe,Vt,qt;if(!aa.current||!Mn||((ue=window.getSelection())==null?void 0:ue.toString().length)>0)return;let ia=Z.clientY-aa.current.y,Ha=Z.clientX-aa.current.x,Wt=(pe=e.swipeDirections)!=null?pe:Uj($);!W&&(Math.abs(Ha)>1||Math.abs(ia)>1)&&q(Math.abs(Ha)>Math.abs(ia)?"x":"y");let ra={x:0,y:0};W==="y"?(Wt.includes("top")||Wt.includes("bottom"))&&(Wt.includes("top")&&ia<0||Wt.includes("bottom")&&ia>0)&&(ra.y=ia):W==="x"&&(Wt.includes("left")||Wt.includes("right"))&&(Wt.includes("left")&&Ha<0||Wt.includes("right")&&Ha>0)&&(ra.x=Ha),(Math.abs(ra.x)>0||Math.abs(ra.y)>0)&&it(!0),(Vt=Ut.current)==null||Vt.style.setProperty("--swipe-amount-x",`${ra.x}px`),(qt=Ut.current)==null||qt.style.setProperty("--swipe-amount-y",`${ra.y}px`)}},zr&&!p.jsx?I.createElement("button",{"aria-label":H,"data-disabled":gi,"data-close-button":!0,onClick:gi||!Mn?()=>{}:()=>{var Z;$t(),(Z=p.onDismiss)==null||Z.call(p,p)},className:Xt(E==null?void 0:E.closeButton,(i=p==null?void 0:p.classNames)==null?void 0:i.closeButton)},(l=D==null?void 0:D.close)!=null?l:Aj):null,p.jsx||f.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:I.createElement(I.Fragment,null,ft||p.icon||p.promise?I.createElement("div",{"data-icon":"",className:Xt(E==null?void 0:E.icon,(s=p==null?void 0:p.classNames)==null?void 0:s.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Qc():null,p.type!=="loading"?p.icon||(D==null?void 0:D[ft])||xj(ft):null):null,I.createElement("div",{"data-content":"",className:Xt(E==null?void 0:E.content,(o=p==null?void 0:p.classNames)==null?void 0:o.content)},I.createElement("div",{"data-title":"",className:Xt(E==null?void 0:E.title,(c=p==null?void 0:p.classNames)==null?void 0:c.title)},typeof p.title=="function"?p.title():p.title),p.description?I.createElement("div",{"data-description":"",className:Xt(B,xr,E==null?void 0:E.description,(u=p==null?void 0:p.classNames)==null?void 0:u.description)},typeof p.description=="function"?p.description():p.description):null),f.isValidElement(p.cancel)?p.cancel:p.cancel&&Rs(p.cancel)?I.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||P,onClick:Z=>{var ue,pe;Rs(p.cancel)&&Mn&&((pe=(ue=p.cancel).onClick)==null||pe.call(ue,Z),$t())},className:Xt(E==null?void 0:E.cancelButton,(d=p==null?void 0:p.classNames)==null?void 0:d.cancelButton)},p.cancel.label):null,f.isValidElement(p.action)?p.action:p.action&&Rs(p.action)?I.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||F,onClick:Z=>{var ue,pe;Rs(p.action)&&((pe=(ue=p.action).onClick)==null||pe.call(ue,Z),!Z.defaultPrevented&&$t())},className:Xt(E==null?void 0:E.actionButton,(m=p==null?void 0:p.classNames)==null?void 0:m.actionButton)},p.action.label):null))};function Iy(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function $j(e,t){let n={};return[e,t].forEach((a,i)=>{let l=i===1,s=l?"--mobile-offset":"--offset",o=l?Oj:Bj;function c(u){["top","right","bottom","left"].forEach(d=>{n[`${s}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof a=="number"||typeof a=="string"?c(a):typeof a=="object"?["top","right","bottom","left"].forEach(u=>{a[u]===void 0?n[`${s}-${u}`]=o:n[`${s}-${u}`]=typeof a[u]=="number"?`${a[u]}px`:a[u]}):c(o)}),n}var Vj=f.forwardRef(function(e,t){let{invert:n,position:a="bottom-right",hotkey:i=["altKey","KeyT"],expand:l,closeButton:s,className:o,offset:c,mobileOffset:u,theme:d="light",richColors:m,duration:h,style:p,visibleToasts:x=Fj,toastOptions:k,dir:v=Iy(),gap:g=Hj,loadingIcon:y,icons:b,containerAriaLabel:z="Notifications",pauseWhenPageIsHidden:S}=e,[C,j]=I.useState([]),w=I.useMemo(()=>Array.from(new Set([a].concat(C.filter(K=>K.position).map(K=>K.position)))),[C,a]),[A,P]=I.useState([]),[F,N]=I.useState(!1),[B,R]=I.useState(!1),[$,O]=I.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),V=I.useRef(null),T=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=I.useRef(null),D=I.useRef(!1),H=I.useCallback(K=>{j(W=>{var q;return(q=W.find(le=>le.id===K.id))!=null&&q.delete||ht.dismiss(K.id),W.filter(({id:le})=>le!==K.id)})},[]);return I.useEffect(()=>ht.subscribe(K=>{if(K.dismiss){j(W=>W.map(q=>q.id===K.id?{...q,delete:!0}:q));return}setTimeout(()=>{Xg.flushSync(()=>{j(W=>{let q=W.findIndex(le=>le.id===K.id);return q!==-1?[...W.slice(0,q),{...W[q],...K},...W.slice(q+1)]:[K,...W]})})})}),[]),I.useEffect(()=>{if(d!=="system"){O(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?O("dark"):O("light")),typeof window>"u")return;let K=window.matchMedia("(prefers-color-scheme: dark)");try{K.addEventListener("change",({matches:W})=>{O(W?"dark":"light")})}catch{K.addListener(({matches:q})=>{try{O(q?"dark":"light")}catch(le){console.error(le)}})}},[d]),I.useEffect(()=>{C.length<=1&&N(!1)},[C]),I.useEffect(()=>{let K=W=>{var q,le;i.every(de=>W[de]||W.code===de)&&(N(!0),(q=V.current)==null||q.focus()),W.code==="Escape"&&(document.activeElement===V.current||(le=V.current)!=null&&le.contains(document.activeElement))&&N(!1)};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[i]),I.useEffect(()=>{if(V.current)return()=>{E.current&&(E.current.focus({preventScroll:!0}),E.current=null,D.current=!1)}},[V.current]),I.createElement("section",{ref:t,"aria-label":`${z} ${T}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},w.map((K,W)=>{var q;let[le,de]=K.split("-");return C.length?I.createElement("ol",{key:K,dir:v==="auto"?Iy():v,tabIndex:-1,ref:V,className:o,"data-sonner-toaster":!0,"data-theme":$,"data-y-position":le,"data-lifted":F&&C.length>1&&!l,"data-x-position":de,style:{"--front-toast-height":`${((q=A[0])==null?void 0:q.height)||0}px`,"--width":`${Kj}px`,"--gap":`${g}px`,...p,...$j(c,u)},onBlur:Q=>{D.current&&!Q.currentTarget.contains(Q.relatedTarget)&&(D.current=!1,E.current&&(E.current.focus({preventScroll:!0}),E.current=null))},onFocus:Q=>{Q.target instanceof HTMLElement&&Q.target.dataset.dismissible==="false"||D.current||(D.current=!0,E.current=Q.relatedTarget)},onMouseEnter:()=>N(!0),onMouseMove:()=>N(!0),onMouseLeave:()=>{B||N(!1)},onDragEnd:()=>N(!1),onPointerDown:Q=>{Q.target instanceof HTMLElement&&Q.target.dataset.dismissible==="false"||R(!0)},onPointerUp:()=>R(!1)},C.filter(Q=>!Q.position&&W===0||Q.position===K).map((Q,ve)=>{var fe,je;return I.createElement(Yj,{key:Q.id,icons:b,index:ve,toast:Q,defaultRichColors:m,duration:(fe=k==null?void 0:k.duration)!=null?fe:h,className:k==null?void 0:k.className,descriptionClassName:k==null?void 0:k.descriptionClassName,invert:n,visibleToasts:x,closeButton:(je=k==null?void 0:k.closeButton)!=null?je:s,interacting:B,position:K,style:k==null?void 0:k.style,unstyled:k==null?void 0:k.unstyled,classNames:k==null?void 0:k.classNames,cancelButtonStyle:k==null?void 0:k.cancelButtonStyle,actionButtonStyle:k==null?void 0:k.actionButtonStyle,removeToast:H,toasts:C.filter(oe=>oe.position==Q.position),heights:A.filter(oe=>oe.position==Q.position),setHeights:P,expandByDefault:l,gap:g,loadingIcon:y,expanded:F,pauseWhenPageIsHidden:S,swipeDirections:e.swipeDirections})})):null}))});const qj=({...e})=>{const{theme:t="system"}=bj();return r.jsx(Vj,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var Wj=hm[" useId ".trim().toString()]||(()=>{}),Qj=0;function _n(e){const[t,n]=f.useState(Wj());return Nn(()=>{n(a=>a??String(Qj++))},[e]),t?`radix-${t}`:""}const Xj=["top","right","bottom","left"],Ia=Math.min,St=Math.max,Lo=Math.round,Ds=Math.floor,Cn=e=>({x:e,y:e}),Zj={left:"right",right:"left",bottom:"top",top:"bottom"},Jj={start:"end",end:"start"};function Hd(e,t,n){return St(e,Ia(t,n))}function Vn(e,t){return typeof e=="function"?e(t):e}function qn(e){return e.split("-")[0]}function pr(e){return e.split("-")[1]}function hf(e){return e==="x"?"y":"x"}function yf(e){return e==="y"?"height":"width"}const eN=new Set(["top","bottom"]);function xn(e){return eN.has(qn(e))?"y":"x"}function pf(e){return hf(xn(e))}function tN(e,t,n){n===void 0&&(n=!1);const a=pr(e),i=pf(e),l=yf(i);let s=i==="x"?a===(n?"end":"start")?"right":"left":a==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(s=Fo(s)),[s,Fo(s)]}function nN(e){const t=Fo(e);return[_d(e),t,_d(t)]}function _d(e){return e.replace(/start|end/g,t=>Jj[t])}const Ly=["left","right"],Fy=["right","left"],aN=["top","bottom"],iN=["bottom","top"];function rN(e,t,n){switch(e){case"top":case"bottom":return n?t?Fy:Ly:t?Ly:Fy;case"left":case"right":return t?aN:iN;default:return[]}}function lN(e,t,n,a){const i=pr(e);let l=rN(qn(e),n==="start",a);return i&&(l=l.map(s=>s+"-"+i),t&&(l=l.concat(l.map(_d)))),l}function Fo(e){return e.replace(/left|right|bottom|top/g,t=>Zj[t])}function sN(e){return{top:0,right:0,bottom:0,left:0,...e}}function Yv(e){return typeof e!="number"?sN(e):{top:e,right:e,bottom:e,left:e}}function Bo(e){const{x:t,y:n,width:a,height:i}=e;return{width:a,height:i,top:n,left:t,right:t+a,bottom:n+i,x:t,y:n}}function By(e,t,n){let{reference:a,floating:i}=e;const l=xn(t),s=pf(t),o=yf(s),c=qn(t),u=l==="y",d=a.x+a.width/2-i.width/2,m=a.y+a.height/2-i.height/2,h=a[o]/2-i[o]/2;let p;switch(c){case"top":p={x:d,y:a.y-i.height};break;case"bottom":p={x:d,y:a.y+a.height};break;case"right":p={x:a.x+a.width,y:m};break;case"left":p={x:a.x-i.width,y:m};break;default:p={x:a.x,y:a.y}}switch(pr(t)){case"start":p[s]-=h*(n&&u?-1:1);break;case"end":p[s]+=h*(n&&u?-1:1);break}return p}const oN=async(e,t,n)=>{const{placement:a="bottom",strategy:i="absolute",middleware:l=[],platform:s}=n,o=l.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:m}=By(u,a,c),h=a,p={},x=0;for(let k=0;k<o.length;k++){const{name:v,fn:g}=o[k],{x:y,y:b,data:z,reset:S}=await g({x:d,y:m,initialPlacement:a,placement:h,strategy:i,middlewareData:p,rects:u,platform:s,elements:{reference:e,floating:t}});d=y??d,m=b??m,p={...p,[v]:{...p[v],...z}},S&&x<=50&&(x++,typeof S=="object"&&(S.placement&&(h=S.placement),S.rects&&(u=S.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:d,y:m}=By(u,h,c)),k=-1)}return{x:d,y:m,placement:h,strategy:i,middlewareData:p}};async function pl(e,t){var n;t===void 0&&(t={});const{x:a,y:i,platform:l,rects:s,elements:o,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:h=!1,padding:p=0}=Vn(t,e),x=Yv(p),v=o[h?m==="floating"?"reference":"floating":m],g=Bo(await l.getClippingRect({element:(n=await(l.isElement==null?void 0:l.isElement(v)))==null||n?v:v.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(o.floating)),boundary:u,rootBoundary:d,strategy:c})),y=m==="floating"?{x:a,y:i,width:s.floating.width,height:s.floating.height}:s.reference,b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(o.floating)),z=await(l.isElement==null?void 0:l.isElement(b))?await(l.getScale==null?void 0:l.getScale(b))||{x:1,y:1}:{x:1,y:1},S=Bo(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:y,offsetParent:b,strategy:c}):y);return{top:(g.top-S.top+x.top)/z.y,bottom:(S.bottom-g.bottom+x.bottom)/z.y,left:(g.left-S.left+x.left)/z.x,right:(S.right-g.right+x.right)/z.x}}const cN=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:a,placement:i,rects:l,platform:s,elements:o,middlewareData:c}=t,{element:u,padding:d=0}=Vn(e,t)||{};if(u==null)return{};const m=Yv(d),h={x:n,y:a},p=pf(i),x=yf(p),k=await s.getDimensions(u),v=p==="y",g=v?"top":"left",y=v?"bottom":"right",b=v?"clientHeight":"clientWidth",z=l.reference[x]+l.reference[p]-h[p]-l.floating[x],S=h[p]-l.reference[p],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let j=C?C[b]:0;(!j||!await(s.isElement==null?void 0:s.isElement(C)))&&(j=o.floating[b]||l.floating[x]);const w=z/2-S/2,A=j/2-k[x]/2-1,P=Ia(m[g],A),F=Ia(m[y],A),N=P,B=j-k[x]-F,R=j/2-k[x]/2+w,$=Hd(N,R,B),O=!c.arrow&&pr(i)!=null&&R!==$&&l.reference[x]/2-(R<N?P:F)-k[x]/2<0,V=O?R<N?R-N:R-B:0;return{[p]:h[p]+V,data:{[p]:$,centerOffset:R-$-V,...O&&{alignmentOffset:V}},reset:O}}}),uN=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,a;const{placement:i,middlewareData:l,rects:s,initialPlacement:o,platform:c,elements:u}=t,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:k=!0,...v}=Vn(e,t);if((n=l.arrow)!=null&&n.alignmentOffset)return{};const g=qn(i),y=xn(o),b=qn(o)===o,z=await(c.isRTL==null?void 0:c.isRTL(u.floating)),S=h||(b||!k?[Fo(o)]:nN(o)),C=x!=="none";!h&&C&&S.push(...lN(o,k,x,z));const j=[o,...S],w=await pl(t,v),A=[];let P=((a=l.flip)==null?void 0:a.overflows)||[];if(d&&A.push(w[g]),m){const R=tN(i,s,z);A.push(w[R[0]],w[R[1]])}if(P=[...P,{placement:i,overflows:A}],!A.every(R=>R<=0)){var F,N;const R=(((F=l.flip)==null?void 0:F.index)||0)+1,$=j[R];if($&&(!(m==="alignment"?y!==xn($):!1)||P.every(T=>T.overflows[0]>0&&xn(T.placement)===y)))return{data:{index:R,overflows:P},reset:{placement:$}};let O=(N=P.filter(V=>V.overflows[0]<=0).sort((V,T)=>V.overflows[1]-T.overflows[1])[0])==null?void 0:N.placement;if(!O)switch(p){case"bestFit":{var B;const V=(B=P.filter(T=>{if(C){const E=xn(T.placement);return E===y||E==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(E=>E>0).reduce((E,D)=>E+D,0)]).sort((T,E)=>T[1]-E[1])[0])==null?void 0:B[0];V&&(O=V);break}case"initialPlacement":O=o;break}if(i!==O)return{reset:{placement:O}}}return{}}}};function Oy(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ky(e){return Xj.some(t=>e[t]>=0)}const dN=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:a="referenceHidden",...i}=Vn(e,t);switch(a){case"referenceHidden":{const l=await pl(t,{...i,elementContext:"reference"}),s=Oy(l,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ky(s)}}}case"escaped":{const l=await pl(t,{...i,altBoundary:!0}),s=Oy(l,n.floating);return{data:{escapedOffsets:s,escaped:Ky(s)}}}default:return{}}}}},$v=new Set(["left","top"]);async function mN(e,t){const{placement:n,platform:a,elements:i}=e,l=await(a.isRTL==null?void 0:a.isRTL(i.floating)),s=qn(n),o=pr(n),c=xn(n)==="y",u=$v.has(s)?-1:1,d=l&&c?-1:1,m=Vn(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:x}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return o&&typeof x=="number"&&(p=o==="end"?x*-1:x),c?{x:p*d,y:h*u}:{x:h*u,y:p*d}}const fN=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,a;const{x:i,y:l,placement:s,middlewareData:o}=t,c=await mN(t,e);return s===((n=o.offset)==null?void 0:n.placement)&&(a=o.arrow)!=null&&a.alignmentOffset?{}:{x:i+c.x,y:l+c.y,data:{...c,placement:s}}}}},hN=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:a,placement:i}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:o={fn:v=>{let{x:g,y}=v;return{x:g,y}}},...c}=Vn(e,t),u={x:n,y:a},d=await pl(t,c),m=xn(qn(i)),h=hf(m);let p=u[h],x=u[m];if(l){const v=h==="y"?"top":"left",g=h==="y"?"bottom":"right",y=p+d[v],b=p-d[g];p=Hd(y,p,b)}if(s){const v=m==="y"?"top":"left",g=m==="y"?"bottom":"right",y=x+d[v],b=x-d[g];x=Hd(y,x,b)}const k=o.fn({...t,[h]:p,[m]:x});return{...k,data:{x:k.x-n,y:k.y-a,enabled:{[h]:l,[m]:s}}}}}},yN=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:a,placement:i,rects:l,middlewareData:s}=t,{offset:o=0,mainAxis:c=!0,crossAxis:u=!0}=Vn(e,t),d={x:n,y:a},m=xn(i),h=hf(m);let p=d[h],x=d[m];const k=Vn(o,t),v=typeof k=="number"?{mainAxis:k,crossAxis:0}:{mainAxis:0,crossAxis:0,...k};if(c){const b=h==="y"?"height":"width",z=l.reference[h]-l.floating[b]+v.mainAxis,S=l.reference[h]+l.reference[b]-v.mainAxis;p<z?p=z:p>S&&(p=S)}if(u){var g,y;const b=h==="y"?"width":"height",z=$v.has(qn(i)),S=l.reference[m]-l.floating[b]+(z&&((g=s.offset)==null?void 0:g[m])||0)+(z?0:v.crossAxis),C=l.reference[m]+l.reference[b]+(z?0:((y=s.offset)==null?void 0:y[m])||0)-(z?v.crossAxis:0);x<S?x=S:x>C&&(x=C)}return{[h]:p,[m]:x}}}},pN=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,a;const{placement:i,rects:l,platform:s,elements:o}=t,{apply:c=()=>{},...u}=Vn(e,t),d=await pl(t,u),m=qn(i),h=pr(i),p=xn(i)==="y",{width:x,height:k}=l.floating;let v,g;m==="top"||m==="bottom"?(v=m,g=h===(await(s.isRTL==null?void 0:s.isRTL(o.floating))?"start":"end")?"left":"right"):(g=m,v=h==="end"?"top":"bottom");const y=k-d.top-d.bottom,b=x-d.left-d.right,z=Ia(k-d[v],y),S=Ia(x-d[g],b),C=!t.middlewareData.shift;let j=z,w=S;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=b),(a=t.middlewareData.shift)!=null&&a.enabled.y&&(j=y),C&&!h){const P=St(d.left,0),F=St(d.right,0),N=St(d.top,0),B=St(d.bottom,0);p?w=x-2*(P!==0||F!==0?P+F:St(d.left,d.right)):j=k-2*(N!==0||B!==0?N+B:St(d.top,d.bottom))}await c({...t,availableWidth:w,availableHeight:j});const A=await s.getDimensions(o.floating);return x!==A.width||k!==A.height?{reset:{rects:!0}}:{}}}};function kc(){return typeof window<"u"}function kr(e){return Vv(e)?(e.nodeName||"").toLowerCase():"#document"}function At(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function En(e){var t;return(t=(Vv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Vv(e){return kc()?e instanceof Node||e instanceof At(e).Node:!1}function cn(e){return kc()?e instanceof Element||e instanceof At(e).Element:!1}function An(e){return kc()?e instanceof HTMLElement||e instanceof At(e).HTMLElement:!1}function Hy(e){return!kc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof At(e).ShadowRoot}const kN=new Set(["inline","contents"]);function Gl(e){const{overflow:t,overflowX:n,overflowY:a,display:i}=un(e);return/auto|scroll|overlay|hidden|clip/.test(t+a+n)&&!kN.has(i)}const gN=new Set(["table","td","th"]);function vN(e){return gN.has(kr(e))}const bN=[":popover-open",":modal"];function gc(e){return bN.some(t=>{try{return e.matches(t)}catch{return!1}})}const xN=["transform","translate","scale","rotate","perspective"],zN=["transform","translate","scale","rotate","perspective","filter"],wN=["paint","layout","strict","content"];function kf(e){const t=gf(),n=cn(e)?un(e):e;return xN.some(a=>n[a]?n[a]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||zN.some(a=>(n.willChange||"").includes(a))||wN.some(a=>(n.contain||"").includes(a))}function SN(e){let t=La(e);for(;An(t)&&!cr(t);){if(kf(t))return t;if(gc(t))return null;t=La(t)}return null}function gf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const CN=new Set(["html","body","#document"]);function cr(e){return CN.has(kr(e))}function un(e){return At(e).getComputedStyle(e)}function vc(e){return cn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function La(e){if(kr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Hy(e)&&e.host||En(e);return Hy(t)?t.host:t}function qv(e){const t=La(e);return cr(t)?e.ownerDocument?e.ownerDocument.body:e.body:An(t)&&Gl(t)?t:qv(t)}function kl(e,t,n){var a;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=qv(e),l=i===((a=e.ownerDocument)==null?void 0:a.body),s=At(i);if(l){const o=Gd(s);return t.concat(s,s.visualViewport||[],Gl(i)?i:[],o&&n?kl(o):[])}return t.concat(i,kl(i,[],n))}function Gd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wv(e){const t=un(e);let n=parseFloat(t.width)||0,a=parseFloat(t.height)||0;const i=An(e),l=i?e.offsetWidth:n,s=i?e.offsetHeight:a,o=Lo(n)!==l||Lo(a)!==s;return o&&(n=l,a=s),{width:n,height:a,$:o}}function vf(e){return cn(e)?e:e.contextElement}function _i(e){const t=vf(e);if(!An(t))return Cn(1);const n=t.getBoundingClientRect(),{width:a,height:i,$:l}=Wv(t);let s=(l?Lo(n.width):n.width)/a,o=(l?Lo(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const jN=Cn(0);function Qv(e){const t=At(e);return!gf()||!t.visualViewport?jN:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function NN(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==At(e)?!1:t}function oi(e,t,n,a){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),l=vf(e);let s=Cn(1);t&&(a?cn(a)&&(s=_i(a)):s=_i(e));const o=NN(l,n,a)?Qv(l):Cn(0);let c=(i.left+o.x)/s.x,u=(i.top+o.y)/s.y,d=i.width/s.x,m=i.height/s.y;if(l){const h=At(l),p=a&&cn(a)?At(a):a;let x=h,k=Gd(x);for(;k&&a&&p!==x;){const v=_i(k),g=k.getBoundingClientRect(),y=un(k),b=g.left+(k.clientLeft+parseFloat(y.paddingLeft))*v.x,z=g.top+(k.clientTop+parseFloat(y.paddingTop))*v.y;c*=v.x,u*=v.y,d*=v.x,m*=v.y,c+=b,u+=z,x=At(k),k=Gd(x)}}return Bo({width:d,height:m,x:c,y:u})}function bf(e,t){const n=vc(e).scrollLeft;return t?t.left+n:oi(En(e)).left+n}function Xv(e,t,n){n===void 0&&(n=!1);const a=e.getBoundingClientRect(),i=a.left+t.scrollLeft-(n?0:bf(e,a)),l=a.top+t.scrollTop;return{x:i,y:l}}function AN(e){let{elements:t,rect:n,offsetParent:a,strategy:i}=e;const l=i==="fixed",s=En(a),o=t?gc(t.floating):!1;if(a===s||o&&l)return n;let c={scrollLeft:0,scrollTop:0},u=Cn(1);const d=Cn(0),m=An(a);if((m||!m&&!l)&&((kr(a)!=="body"||Gl(s))&&(c=vc(a)),An(a))){const p=oi(a);u=_i(a),d.x=p.x+a.clientLeft,d.y=p.y+a.clientTop}const h=s&&!m&&!l?Xv(s,c,!0):Cn(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+h.x,y:n.y*u.y-c.scrollTop*u.y+d.y+h.y}}function EN(e){return Array.from(e.getClientRects())}function TN(e){const t=En(e),n=vc(e),a=e.ownerDocument.body,i=St(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),l=St(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight);let s=-n.scrollLeft+bf(e);const o=-n.scrollTop;return un(a).direction==="rtl"&&(s+=St(t.clientWidth,a.clientWidth)-i),{width:i,height:l,x:s,y:o}}function PN(e,t){const n=At(e),a=En(e),i=n.visualViewport;let l=a.clientWidth,s=a.clientHeight,o=0,c=0;if(i){l=i.width,s=i.height;const u=gf();(!u||u&&t==="fixed")&&(o=i.offsetLeft,c=i.offsetTop)}return{width:l,height:s,x:o,y:c}}const MN=new Set(["absolute","fixed"]);function RN(e,t){const n=oi(e,!0,t==="fixed"),a=n.top+e.clientTop,i=n.left+e.clientLeft,l=An(e)?_i(e):Cn(1),s=e.clientWidth*l.x,o=e.clientHeight*l.y,c=i*l.x,u=a*l.y;return{width:s,height:o,x:c,y:u}}function _y(e,t,n){let a;if(t==="viewport")a=PN(e,n);else if(t==="document")a=TN(En(e));else if(cn(t))a=RN(t,n);else{const i=Qv(e);a={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Bo(a)}function Zv(e,t){const n=La(e);return n===t||!cn(n)||cr(n)?!1:un(n).position==="fixed"||Zv(n,t)}function DN(e,t){const n=t.get(e);if(n)return n;let a=kl(e,[],!1).filter(o=>cn(o)&&kr(o)!=="body"),i=null;const l=un(e).position==="fixed";let s=l?La(e):e;for(;cn(s)&&!cr(s);){const o=un(s),c=kf(s);!c&&o.position==="fixed"&&(i=null),(l?!c&&!i:!c&&o.position==="static"&&!!i&&MN.has(i.position)||Gl(s)&&!c&&Zv(e,s))?a=a.filter(d=>d!==s):i=o,s=La(s)}return t.set(e,a),a}function IN(e){let{element:t,boundary:n,rootBoundary:a,strategy:i}=e;const s=[...n==="clippingAncestors"?gc(t)?[]:DN(t,this._c):[].concat(n),a],o=s[0],c=s.reduce((u,d)=>{const m=_y(t,d,i);return u.top=St(m.top,u.top),u.right=Ia(m.right,u.right),u.bottom=Ia(m.bottom,u.bottom),u.left=St(m.left,u.left),u},_y(t,o,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function LN(e){const{width:t,height:n}=Wv(e);return{width:t,height:n}}function FN(e,t,n){const a=An(t),i=En(t),l=n==="fixed",s=oi(e,!0,l,t);let o={scrollLeft:0,scrollTop:0};const c=Cn(0);function u(){c.x=bf(i)}if(a||!a&&!l)if((kr(t)!=="body"||Gl(i))&&(o=vc(t)),a){const p=oi(t,!0,l,t);c.x=p.x+t.clientLeft,c.y=p.y+t.clientTop}else i&&u();l&&!a&&i&&u();const d=i&&!a&&!l?Xv(i,o):Cn(0),m=s.left+o.scrollLeft-c.x-d.x,h=s.top+o.scrollTop-c.y-d.y;return{x:m,y:h,width:s.width,height:s.height}}function Au(e){return un(e).position==="static"}function Gy(e,t){if(!An(e)||un(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return En(e)===n&&(n=n.ownerDocument.body),n}function Jv(e,t){const n=At(e);if(gc(e))return n;if(!An(e)){let i=La(e);for(;i&&!cr(i);){if(cn(i)&&!Au(i))return i;i=La(i)}return n}let a=Gy(e,t);for(;a&&vN(a)&&Au(a);)a=Gy(a,t);return a&&cr(a)&&Au(a)&&!kf(a)?n:a||SN(e)||n}const BN=async function(e){const t=this.getOffsetParent||Jv,n=this.getDimensions,a=await n(e.floating);return{reference:FN(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function ON(e){return un(e).direction==="rtl"}const KN={convertOffsetParentRelativeRectToViewportRelativeRect:AN,getDocumentElement:En,getClippingRect:IN,getOffsetParent:Jv,getElementRects:BN,getClientRects:EN,getDimensions:LN,getScale:_i,isElement:cn,isRTL:ON};function eb(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function HN(e,t){let n=null,a;const i=En(e);function l(){var o;clearTimeout(a),(o=n)==null||o.disconnect(),n=null}function s(o,c){o===void 0&&(o=!1),c===void 0&&(c=1),l();const u=e.getBoundingClientRect(),{left:d,top:m,width:h,height:p}=u;if(o||t(),!h||!p)return;const x=Ds(m),k=Ds(i.clientWidth-(d+h)),v=Ds(i.clientHeight-(m+p)),g=Ds(d),b={rootMargin:-x+"px "+-k+"px "+-v+"px "+-g+"px",threshold:St(0,Ia(1,c))||1};let z=!0;function S(C){const j=C[0].intersectionRatio;if(j!==c){if(!z)return s();j?s(!1,j):a=setTimeout(()=>{s(!1,1e-7)},1e3)}j===1&&!eb(u,e.getBoundingClientRect())&&s(),z=!1}try{n=new IntersectionObserver(S,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,b)}n.observe(e)}return s(!0),l}function _N(e,t,n,a){a===void 0&&(a={});const{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:c=!1}=a,u=vf(e),d=i||l?[...u?kl(u):[],...kl(t)]:[];d.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),l&&g.addEventListener("resize",n)});const m=u&&o?HN(u,n):null;let h=-1,p=null;s&&(p=new ResizeObserver(g=>{let[y]=g;y&&y.target===u&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(t)})),n()}),u&&!c&&p.observe(u),p.observe(t));let x,k=c?oi(e):null;c&&v();function v(){const g=oi(e);k&&!eb(k,g)&&n(),k=g,x=requestAnimationFrame(v)}return n(),()=>{var g;d.forEach(y=>{i&&y.removeEventListener("scroll",n),l&&y.removeEventListener("resize",n)}),m==null||m(),(g=p)==null||g.disconnect(),p=null,c&&cancelAnimationFrame(x)}}const GN=fN,UN=hN,YN=uN,$N=pN,VN=dN,Uy=cN,qN=yN,WN=(e,t,n)=>{const a=new Map,i={platform:KN,...n},l={...i.platform,_c:a};return oN(e,t,{...i,platform:l})};var QN=typeof document<"u",XN=function(){},lo=QN?f.useLayoutEffect:XN;function Oo(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,a,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(a=n;a--!==0;)if(!Oo(e[a],t[a]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!{}.hasOwnProperty.call(t,i[a]))return!1;for(a=n;a--!==0;){const l=i[a];if(!(l==="_owner"&&e.$$typeof)&&!Oo(e[l],t[l]))return!1}return!0}return e!==e&&t!==t}function tb(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Yy(e,t){const n=tb(e);return Math.round(t*n)/n}function Eu(e){const t=f.useRef(e);return lo(()=>{t.current=e}),t}function ZN(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:a=[],platform:i,elements:{reference:l,floating:s}={},transform:o=!0,whileElementsMounted:c,open:u}=e,[d,m]=f.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=f.useState(a);Oo(h,a)||p(a);const[x,k]=f.useState(null),[v,g]=f.useState(null),y=f.useCallback(T=>{T!==C.current&&(C.current=T,k(T))},[]),b=f.useCallback(T=>{T!==j.current&&(j.current=T,g(T))},[]),z=l||x,S=s||v,C=f.useRef(null),j=f.useRef(null),w=f.useRef(d),A=c!=null,P=Eu(c),F=Eu(i),N=Eu(u),B=f.useCallback(()=>{if(!C.current||!j.current)return;const T={placement:t,strategy:n,middleware:h};F.current&&(T.platform=F.current),WN(C.current,j.current,T).then(E=>{const D={...E,isPositioned:N.current!==!1};R.current&&!Oo(w.current,D)&&(w.current=D,Ol.flushSync(()=>{m(D)}))})},[h,t,n,F,N]);lo(()=>{u===!1&&w.current.isPositioned&&(w.current.isPositioned=!1,m(T=>({...T,isPositioned:!1})))},[u]);const R=f.useRef(!1);lo(()=>(R.current=!0,()=>{R.current=!1}),[]),lo(()=>{if(z&&(C.current=z),S&&(j.current=S),z&&S){if(P.current)return P.current(z,S,B);B()}},[z,S,B,P,A]);const $=f.useMemo(()=>({reference:C,floating:j,setReference:y,setFloating:b}),[y,b]),O=f.useMemo(()=>({reference:z,floating:S}),[z,S]),V=f.useMemo(()=>{const T={position:n,left:0,top:0};if(!O.floating)return T;const E=Yy(O.floating,d.x),D=Yy(O.floating,d.y);return o?{...T,transform:"translate("+E+"px, "+D+"px)",...tb(O.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:E,top:D}},[n,o,O.floating,d.x,d.y]);return f.useMemo(()=>({...d,update:B,refs:$,elements:O,floatingStyles:V}),[d,B,$,O,V])}const JN=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:a,padding:i}=typeof e=="function"?e(n):e;return a&&t(a)?a.current!=null?Uy({element:a.current,padding:i}).fn(n):{}:a?Uy({element:a,padding:i}).fn(n):{}}}},e2=(e,t)=>({...GN(e),options:[e,t]}),t2=(e,t)=>({...UN(e),options:[e,t]}),n2=(e,t)=>({...qN(e),options:[e,t]}),a2=(e,t)=>({...YN(e),options:[e,t]}),i2=(e,t)=>({...$N(e),options:[e,t]}),r2=(e,t)=>({...VN(e),options:[e,t]}),l2=(e,t)=>({...JN(e),options:[e,t]});var s2="Arrow",nb=f.forwardRef((e,t)=>{const{children:n,width:a=10,height:i=5,...l}=e;return r.jsx(ee.svg,{...l,ref:t,width:a,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:r.jsx("polygon",{points:"0,0 30,0 15,10"})})});nb.displayName=s2;var o2=nb;function ab(e){const[t,n]=f.useState(void 0);return Nn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const a=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const l=i[0];let s,o;if("borderBoxSize"in l){const c=l.borderBoxSize,u=Array.isArray(c)?c[0]:c;s=u.inlineSize,o=u.blockSize}else s=e.offsetWidth,o=e.offsetHeight;n({width:s,height:o})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}else n(void 0)},[e]),t}var xf="Popper",[ib,bc]=Rt(xf),[c2,rb]=ib(xf),lb=e=>{const{__scopePopper:t,children:n}=e,[a,i]=f.useState(null);return r.jsx(c2,{scope:t,anchor:a,onAnchorChange:i,children:n})};lb.displayName=xf;var sb="PopperAnchor",ob=f.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:a,...i}=e,l=rb(sb,n),s=f.useRef(null),o=ye(t,s);return f.useEffect(()=>{l.onAnchorChange((a==null?void 0:a.current)||s.current)}),a?null:r.jsx(ee.div,{...i,ref:o})});ob.displayName=sb;var zf="PopperContent",[u2,d2]=ib(zf),cb=f.forwardRef((e,t)=>{var Q,ve,fe,je,oe,U;const{__scopePopper:n,side:a="bottom",sideOffset:i=0,align:l="center",alignOffset:s=0,arrowPadding:o=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:m="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:x,...k}=e,v=rb(zf,n),[g,y]=f.useState(null),b=ye(t,re=>y(re)),[z,S]=f.useState(null),C=ab(z),j=(C==null?void 0:C.width)??0,w=(C==null?void 0:C.height)??0,A=a+(l!=="center"?"-"+l:""),P=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},F=Array.isArray(u)?u:[u],N=F.length>0,B={padding:P,boundary:F.filter(f2),altBoundary:N},{refs:R,floatingStyles:$,placement:O,isPositioned:V,middlewareData:T}=ZN({strategy:"fixed",placement:A,whileElementsMounted:(...re)=>_N(...re,{animationFrame:p==="always"}),elements:{reference:v.anchor},middleware:[e2({mainAxis:i+w,alignmentAxis:s}),c&&t2({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?n2():void 0,...B}),c&&a2({...B}),i2({...B,apply:({elements:re,rects:be,availableWidth:Oe,availableHeight:it})=>{const{width:xt,height:zt}=be.reference,rt=re.floating.style;rt.setProperty("--radix-popper-available-width",`${Oe}px`),rt.setProperty("--radix-popper-available-height",`${it}px`),rt.setProperty("--radix-popper-anchor-width",`${xt}px`),rt.setProperty("--radix-popper-anchor-height",`${zt}px`)}}),z&&l2({element:z,padding:o}),h2({arrowWidth:j,arrowHeight:w}),h&&r2({strategy:"referenceHidden",...B})]}),[E,D]=mb(O),H=Tt(x);Nn(()=>{V&&(H==null||H())},[V,H]);const K=(Q=T.arrow)==null?void 0:Q.x,W=(ve=T.arrow)==null?void 0:ve.y,q=((fe=T.arrow)==null?void 0:fe.centerOffset)!==0,[le,de]=f.useState();return Nn(()=>{g&&de(window.getComputedStyle(g).zIndex)},[g]),r.jsx("div",{ref:R.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:V?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:le,"--radix-popper-transform-origin":[(je=T.transformOrigin)==null?void 0:je.x,(oe=T.transformOrigin)==null?void 0:oe.y].join(" "),...((U=T.hide)==null?void 0:U.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:r.jsx(u2,{scope:n,placedSide:E,onArrowChange:S,arrowX:K,arrowY:W,shouldHideArrow:q,children:r.jsx(ee.div,{"data-side":E,"data-align":D,...k,ref:b,style:{...k.style,animation:V?void 0:"none"}})})})});cb.displayName=zf;var ub="PopperArrow",m2={top:"bottom",right:"left",bottom:"top",left:"right"},db=f.forwardRef(function(t,n){const{__scopePopper:a,...i}=t,l=d2(ub,a),s=m2[l.placedSide];return r.jsx("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0},children:r.jsx(o2,{...i,ref:n,style:{...i.style,display:"block"}})})});db.displayName=ub;function f2(e){return e!==null}var h2=e=>({name:"transformOrigin",options:e,fn(t){var v,g,y;const{placement:n,rects:a,middlewareData:i}=t,s=((v=i.arrow)==null?void 0:v.centerOffset)!==0,o=s?0:e.arrowWidth,c=s?0:e.arrowHeight,[u,d]=mb(n),m={start:"0%",center:"50%",end:"100%"}[d],h=(((g=i.arrow)==null?void 0:g.x)??0)+o/2,p=(((y=i.arrow)==null?void 0:y.y)??0)+c/2;let x="",k="";return u==="bottom"?(x=s?m:`${h}px`,k=`${-c}px`):u==="top"?(x=s?m:`${h}px`,k=`${a.floating.height+c}px`):u==="right"?(x=`${-c}px`,k=s?m:`${p}px`):u==="left"&&(x=`${a.floating.width+c}px`,k=s?m:`${p}px`),{data:{x,y:k}}}});function mb(e){const[t,n="center"]=e.split("-");return[t,n]}var y2=lb,fb=ob,hb=cb,yb=db,[xc,q4]=Rt("Tooltip",[bc]),wf=bc(),pb="TooltipProvider",p2=700,$y="tooltip.open",[k2,kb]=xc(pb),gb=e=>{const{__scopeTooltip:t,delayDuration:n=p2,skipDelayDuration:a=300,disableHoverableContent:i=!1,children:l}=e,s=f.useRef(!0),o=f.useRef(!1),c=f.useRef(0);return f.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),r.jsx(k2,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:f.useCallback(()=>{window.clearTimeout(c.current),s.current=!1},[]),onClose:f.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s.current=!0,a)},[a]),isPointerInTransitRef:o,onPointerInTransitChange:f.useCallback(u=>{o.current=u},[]),disableHoverableContent:i,children:l})};gb.displayName=pb;var vb="Tooltip",[W4,zc]=xc(vb),Ud="TooltipTrigger",g2=f.forwardRef((e,t)=>{const{__scopeTooltip:n,...a}=e,i=zc(Ud,n),l=kb(Ud,n),s=wf(n),o=f.useRef(null),c=ye(t,o,i.onTriggerChange),u=f.useRef(!1),d=f.useRef(!1),m=f.useCallback(()=>u.current=!1,[]);return f.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),r.jsx(fb,{asChild:!0,...s,children:r.jsx(ee.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...a,ref:c,onPointerMove:Y(e.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!l.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:Y(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:Y(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:Y(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:Y(e.onBlur,i.onClose),onClick:Y(e.onClick,i.onClose)})})});g2.displayName=Ud;var v2="TooltipPortal",[Q4,b2]=xc(v2,{forceMount:void 0}),ur="TooltipContent",bb=f.forwardRef((e,t)=>{const n=b2(ur,e.__scopeTooltip),{forceMount:a=n.forceMount,side:i="top",...l}=e,s=zc(ur,e.__scopeTooltip);return r.jsx(_t,{present:a||s.open,children:s.disableHoverableContent?r.jsx(xb,{side:i,...l,ref:t}):r.jsx(x2,{side:i,...l,ref:t})})}),x2=f.forwardRef((e,t)=>{const n=zc(ur,e.__scopeTooltip),a=kb(ur,e.__scopeTooltip),i=f.useRef(null),l=ye(t,i),[s,o]=f.useState(null),{trigger:c,onClose:u}=n,d=i.current,{onPointerInTransitChange:m}=a,h=f.useCallback(()=>{o(null),m(!1)},[m]),p=f.useCallback((x,k)=>{const v=x.currentTarget,g={x:x.clientX,y:x.clientY},y=j2(g,v.getBoundingClientRect()),b=N2(g,y),z=A2(k.getBoundingClientRect()),S=T2([...b,...z]);o(S),m(!0)},[m]);return f.useEffect(()=>()=>h(),[h]),f.useEffect(()=>{if(c&&d){const x=v=>p(v,d),k=v=>p(v,c);return c.addEventListener("pointerleave",x),d.addEventListener("pointerleave",k),()=>{c.removeEventListener("pointerleave",x),d.removeEventListener("pointerleave",k)}}},[c,d,p,h]),f.useEffect(()=>{if(s){const x=k=>{const v=k.target,g={x:k.clientX,y:k.clientY},y=(c==null?void 0:c.contains(v))||(d==null?void 0:d.contains(v)),b=!E2(g,s);y?h():b&&(h(),u())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[c,d,s,u,h]),r.jsx(xb,{...e,ref:l})}),[z2,w2]=xc(vb,{isInside:!1}),S2=ev("TooltipContent"),xb=f.forwardRef((e,t)=>{const{__scopeTooltip:n,children:a,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:s,...o}=e,c=zc(ur,n),u=wf(n),{onClose:d}=c;return f.useEffect(()=>(document.addEventListener($y,d),()=>document.removeEventListener($y,d)),[d]),f.useEffect(()=>{if(c.trigger){const m=h=>{const p=h.target;p!=null&&p.contains(c.trigger)&&d()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[c.trigger,d]),r.jsx(Kl,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:m=>m.preventDefault(),onDismiss:d,children:r.jsxs(hb,{"data-state":c.stateAttribute,...u,...o,ref:t,style:{...o.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[r.jsx(S2,{children:a}),r.jsx(z2,{scope:n,isInside:!0,children:r.jsx(US,{id:c.contentId,role:"tooltip",children:i||a})})]})})});bb.displayName=ur;var zb="TooltipArrow",C2=f.forwardRef((e,t)=>{const{__scopeTooltip:n,...a}=e,i=wf(n);return w2(zb,n).isInside?null:r.jsx(yb,{...i,...a,ref:t})});C2.displayName=zb;function j2(e,t){const n=Math.abs(t.top-e.y),a=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),l=Math.abs(t.left-e.x);switch(Math.min(n,a,i,l)){case l:return"left";case i:return"right";case n:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function N2(e,t,n=5){const a=[];switch(t){case"top":a.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":a.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":a.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":a.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return a}function A2(e){const{top:t,right:n,bottom:a,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:a},{x:i,y:a}]}function E2(e,t){const{x:n,y:a}=e;let i=!1;for(let l=0,s=t.length-1;l<t.length;s=l++){const o=t[l],c=t[s],u=o.x,d=o.y,m=c.x,h=c.y;d>a!=h>a&&n<(m-u)*(a-d)/(h-d)+u&&(i=!i)}return i}function T2(e){const t=e.slice();return t.sort((n,a)=>n.x<a.x?-1:n.x>a.x?1:n.y<a.y?-1:n.y>a.y?1:0),P2(t)}function P2(e){if(e.length<=1)return e.slice();const t=[];for(let a=0;a<e.length;a++){const i=e[a];for(;t.length>=2;){const l=t[t.length-1],s=t[t.length-2];if((l.x-s.x)*(i.y-s.y)>=(l.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let a=e.length-1;a>=0;a--){const i=e[a];for(;n.length>=2;){const l=n[n.length-1],s=n[n.length-2];if((l.x-s.x)*(i.y-s.y)>=(l.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var M2=gb,wb=bb;const R2=M2,D2=f.forwardRef(({className:e,sideOffset:t=4,...n},a)=>r.jsx(wb,{ref:a,sideOffset:t,className:G("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));D2.displayName=wb.displayName;var wc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Sc=typeof window>"u"||"Deno"in globalThis;function Jt(){}function I2(e,t){return typeof e=="function"?e(t):e}function L2(e){return typeof e=="number"&&e>=0&&e!==1/0}function F2(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Yd(e,t){return typeof e=="function"?e(t):e}function B2(e,t){return typeof e=="function"?e(t):e}function Vy(e,t){const{type:n="all",exact:a,fetchStatus:i,predicate:l,queryKey:s,stale:o}=e;if(s){if(a){if(t.queryHash!==Sf(s,t.options))return!1}else if(!vl(t.queryKey,s))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof o=="boolean"&&t.isStale()!==o||i&&i!==t.state.fetchStatus||l&&!l(t))}function qy(e,t){const{exact:n,status:a,predicate:i,mutationKey:l}=e;if(l){if(!t.options.mutationKey)return!1;if(n){if(gl(t.options.mutationKey)!==gl(l))return!1}else if(!vl(t.options.mutationKey,l))return!1}return!(a&&t.state.status!==a||i&&!i(t))}function Sf(e,t){return((t==null?void 0:t.queryKeyHashFn)||gl)(e)}function gl(e){return JSON.stringify(e,(t,n)=>$d(n)?Object.keys(n).sort().reduce((a,i)=>(a[i]=n[i],a),{}):n)}function vl(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>vl(e[n],t[n])):!1}function Sb(e,t){if(e===t)return e;const n=Wy(e)&&Wy(t);if(n||$d(e)&&$d(t)){const a=n?e:Object.keys(e),i=a.length,l=n?t:Object.keys(t),s=l.length,o=n?[]:{},c=new Set(a);let u=0;for(let d=0;d<s;d++){const m=n?d:l[d];(!n&&c.has(m)||n)&&e[m]===void 0&&t[m]===void 0?(o[m]=void 0,u++):(o[m]=Sb(e[m],t[m]),o[m]===e[m]&&e[m]!==void 0&&u++)}return i===s&&u===i?e:o}return t}function Wy(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function $d(e){if(!Qy(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Qy(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Qy(e){return Object.prototype.toString.call(e)==="[object Object]"}function O2(e){return new Promise(t=>{setTimeout(t,e)})}function K2(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Sb(e,t):t}function H2(e,t,n=0){const a=[...e,t];return n&&a.length>n?a.slice(1):a}function _2(e,t,n=0){const a=[t,...e];return n&&a.length>n?a.slice(0,-1):a}var Cf=Symbol();function Cb(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Cf?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var qa,ya,$i,Tp,G2=(Tp=class extends wc{constructor(){super();ce(this,qa);ce(this,ya);ce(this,$i);J(this,$i,t=>{if(!Sc&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){M(this,ya)||this.setEventListener(M(this,$i))}onUnsubscribe(){var t;this.hasListeners()||((t=M(this,ya))==null||t.call(this),J(this,ya,void 0))}setEventListener(t){var n;J(this,$i,t),(n=M(this,ya))==null||n.call(this),J(this,ya,t(a=>{typeof a=="boolean"?this.setFocused(a):this.onFocus()}))}setFocused(t){M(this,qa)!==t&&(J(this,qa,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof M(this,qa)=="boolean"?M(this,qa):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},qa=new WeakMap,ya=new WeakMap,$i=new WeakMap,Tp),jb=new G2,Vi,pa,qi,Pp,U2=(Pp=class extends wc{constructor(){super();ce(this,Vi,!0);ce(this,pa);ce(this,qi);J(this,qi,t=>{if(!Sc&&window.addEventListener){const n=()=>t(!0),a=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",a,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",a)}}})}onSubscribe(){M(this,pa)||this.setEventListener(M(this,qi))}onUnsubscribe(){var t;this.hasListeners()||((t=M(this,pa))==null||t.call(this),J(this,pa,void 0))}setEventListener(t){var n;J(this,qi,t),(n=M(this,pa))==null||n.call(this),J(this,pa,t(this.setOnline.bind(this)))}setOnline(t){M(this,Vi)!==t&&(J(this,Vi,t),this.listeners.forEach(a=>{a(t)}))}isOnline(){return M(this,Vi)}},Vi=new WeakMap,pa=new WeakMap,qi=new WeakMap,Pp),Ko=new U2;function Y2(){let e,t;const n=new Promise((i,l)=>{e=i,t=l});n.status="pending",n.catch(()=>{});function a(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{a({status:"fulfilled",value:i}),e(i)},n.reject=i=>{a({status:"rejected",reason:i}),t(i)},n}function $2(e){return Math.min(1e3*2**e,3e4)}function Nb(e){return(e??"online")==="online"?Ko.isOnline():!0}var Ab=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Tu(e){return e instanceof Ab}function Eb(e){let t=!1,n=0,a=!1,i;const l=Y2(),s=k=>{var v;a||(h(new Ab(k)),(v=e.abort)==null||v.call(e))},o=()=>{t=!0},c=()=>{t=!1},u=()=>jb.isFocused()&&(e.networkMode==="always"||Ko.isOnline())&&e.canRun(),d=()=>Nb(e.networkMode)&&e.canRun(),m=k=>{var v;a||(a=!0,(v=e.onSuccess)==null||v.call(e,k),i==null||i(),l.resolve(k))},h=k=>{var v;a||(a=!0,(v=e.onError)==null||v.call(e,k),i==null||i(),l.reject(k))},p=()=>new Promise(k=>{var v;i=g=>{(a||u())&&k(g)},(v=e.onPause)==null||v.call(e)}).then(()=>{var k;i=void 0,a||(k=e.onContinue)==null||k.call(e)}),x=()=>{if(a)return;let k;const v=n===0?e.initialPromise:void 0;try{k=v??e.fn()}catch(g){k=Promise.reject(g)}Promise.resolve(k).then(m).catch(g=>{var C;if(a)return;const y=e.retry??(Sc?0:3),b=e.retryDelay??$2,z=typeof b=="function"?b(n,g):b,S=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,g);if(t||!S){h(g);return}n++,(C=e.onFail)==null||C.call(e,n,g),O2(z).then(()=>u()?void 0:p()).then(()=>{t?h(g):x()})})};return{promise:l,cancel:s,continue:()=>(i==null||i(),l),cancelRetry:o,continueRetry:c,canStart:d,start:()=>(d()?x():p().then(x),l)}}var V2=e=>setTimeout(e,0);function q2(){let e=[],t=0,n=o=>{o()},a=o=>{o()},i=V2;const l=o=>{t?e.push(o):i(()=>{n(o)})},s=()=>{const o=e;e=[],o.length&&i(()=>{a(()=>{o.forEach(c=>{n(c)})})})};return{batch:o=>{let c;t++;try{c=o()}finally{t--,t||s()}return c},batchCalls:o=>(...c)=>{l(()=>{o(...c)})},schedule:l,setNotifyFunction:o=>{n=o},setBatchNotifyFunction:o=>{a=o},setScheduler:o=>{i=o}}}var ot=q2(),Wa,Mp,Tb=(Mp=class{constructor(){ce(this,Wa)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),L2(this.gcTime)&&J(this,Wa,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Sc?1/0:5*60*1e3))}clearGcTimeout(){M(this,Wa)&&(clearTimeout(M(this,Wa)),J(this,Wa,void 0))}},Wa=new WeakMap,Mp),Wi,Qa,Dt,Xa,et,Ml,Za,en,In,Rp,W2=(Rp=class extends Tb{constructor(t){super();ce(this,en);ce(this,Wi);ce(this,Qa);ce(this,Dt);ce(this,Xa);ce(this,et);ce(this,Ml);ce(this,Za);J(this,Za,!1),J(this,Ml,t.defaultOptions),this.setOptions(t.options),this.observers=[],J(this,Xa,t.client),J(this,Dt,M(this,Xa).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,J(this,Wi,X2(this.options)),this.state=t.state??M(this,Wi),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=M(this,et))==null?void 0:t.promise}setOptions(t){this.options={...M(this,Ml),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&M(this,Dt).remove(this)}setData(t,n){const a=K2(this.state.data,t,this.options);return Xe(this,en,In).call(this,{data:a,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),a}setState(t,n){Xe(this,en,In).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var a,i;const n=(a=M(this,et))==null?void 0:a.promise;return(i=M(this,et))==null||i.cancel(t),n?n.then(Jt).catch(Jt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(M(this,Wi))}isActive(){return this.observers.some(t=>B2(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Cf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Yd(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!F2(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(a=>a.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=M(this,et))==null||n.continue()}onOnline(){var n;const t=this.observers.find(a=>a.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=M(this,et))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),M(this,Dt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(M(this,et)&&(M(this,Za)?M(this,et).cancel({revert:!0}):M(this,et).cancelRetry()),this.scheduleGc()),M(this,Dt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Xe(this,en,In).call(this,{type:"invalidate"})}fetch(t,n){var u,d,m;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(M(this,et))return M(this,et).continueRetry(),M(this,et).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(p=>p.options.queryFn);h&&this.setOptions(h.options)}const a=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(J(this,Za,!0),a.signal)})},l=()=>{const h=Cb(this.options,n),x=(()=>{const k={client:M(this,Xa),queryKey:this.queryKey,meta:this.meta};return i(k),k})();return J(this,Za,!1),this.options.persister?this.options.persister(h,x,this):h(x)},o=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:M(this,Xa),state:this.state,fetchFn:l};return i(h),h})();(u=this.options.behavior)==null||u.onFetch(o,this),J(this,Qa,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=o.fetchOptions)==null?void 0:d.meta))&&Xe(this,en,In).call(this,{type:"fetch",meta:(m=o.fetchOptions)==null?void 0:m.meta});const c=h=>{var p,x,k,v;Tu(h)&&h.silent||Xe(this,en,In).call(this,{type:"error",error:h}),Tu(h)||((x=(p=M(this,Dt).config).onError)==null||x.call(p,h,this),(v=(k=M(this,Dt).config).onSettled)==null||v.call(k,this.state.data,h,this)),this.scheduleGc()};return J(this,et,Eb({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:a.abort.bind(a),onSuccess:h=>{var p,x,k,v;if(h===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(g){c(g);return}(x=(p=M(this,Dt).config).onSuccess)==null||x.call(p,h,this),(v=(k=M(this,Dt).config).onSettled)==null||v.call(k,h,this.state.error,this),this.scheduleGc()},onError:c,onFail:(h,p)=>{Xe(this,en,In).call(this,{type:"failed",failureCount:h,error:p})},onPause:()=>{Xe(this,en,In).call(this,{type:"pause"})},onContinue:()=>{Xe(this,en,In).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),M(this,et).start()}},Wi=new WeakMap,Qa=new WeakMap,Dt=new WeakMap,Xa=new WeakMap,et=new WeakMap,Ml=new WeakMap,Za=new WeakMap,en=new WeakSet,In=function(t){const n=a=>{switch(t.type){case"failed":return{...a,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...a,fetchStatus:"paused"};case"continue":return{...a,fetchStatus:"fetching"};case"fetch":return{...a,...Q2(a.data,this.options),fetchMeta:t.meta??null};case"success":return J(this,Qa,void 0),{...a,data:t.data,dataUpdateCount:a.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Tu(i)&&i.revert&&M(this,Qa)?{...M(this,Qa),fetchStatus:"idle"}:{...a,error:i,errorUpdateCount:a.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:a.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...a,isInvalidated:!0};case"setState":return{...a,...t.state}}};this.state=n(this.state),ot.batch(()=>{this.observers.forEach(a=>{a.onQueryUpdate()}),M(this,Dt).notify({query:this,type:"updated",action:t})})},Rp);function Q2(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Nb(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function X2(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,a=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var pn,Dp,Z2=(Dp=class extends wc{constructor(t={}){super();ce(this,pn);this.config=t,J(this,pn,new Map)}build(t,n,a){const i=n.queryKey,l=n.queryHash??Sf(i,n);let s=this.get(l);return s||(s=new W2({client:t,queryKey:i,queryHash:l,options:t.defaultQueryOptions(n),state:a,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){M(this,pn).has(t.queryHash)||(M(this,pn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=M(this,pn).get(t.queryHash);n&&(t.destroy(),n===t&&M(this,pn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ot.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return M(this,pn).get(t)}getAll(){return[...M(this,pn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(a=>Vy(n,a))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(a=>Vy(t,a)):n}notify(t){ot.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){ot.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ot.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},pn=new WeakMap,Dp),kn,lt,Ja,gn,ca,Ip,J2=(Ip=class extends Tb{constructor(t){super();ce(this,gn);ce(this,kn);ce(this,lt);ce(this,Ja);this.mutationId=t.mutationId,J(this,lt,t.mutationCache),J(this,kn,[]),this.state=t.state||eA(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){M(this,kn).includes(t)||(M(this,kn).push(t),this.clearGcTimeout(),M(this,lt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){J(this,kn,M(this,kn).filter(n=>n!==t)),this.scheduleGc(),M(this,lt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){M(this,kn).length||(this.state.status==="pending"?this.scheduleGc():M(this,lt).remove(this))}continue(){var t;return((t=M(this,Ja))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var l,s,o,c,u,d,m,h,p,x,k,v,g,y,b,z,S,C,j,w;const n=()=>{Xe(this,gn,ca).call(this,{type:"continue"})};J(this,Ja,Eb({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(A,P)=>{Xe(this,gn,ca).call(this,{type:"failed",failureCount:A,error:P})},onPause:()=>{Xe(this,gn,ca).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>M(this,lt).canRun(this)}));const a=this.state.status==="pending",i=!M(this,Ja).canStart();try{if(a)n();else{Xe(this,gn,ca).call(this,{type:"pending",variables:t,isPaused:i}),await((s=(l=M(this,lt).config).onMutate)==null?void 0:s.call(l,t,this));const P=await((c=(o=this.options).onMutate)==null?void 0:c.call(o,t));P!==this.state.context&&Xe(this,gn,ca).call(this,{type:"pending",context:P,variables:t,isPaused:i})}const A=await M(this,Ja).start();return await((d=(u=M(this,lt).config).onSuccess)==null?void 0:d.call(u,A,t,this.state.context,this)),await((h=(m=this.options).onSuccess)==null?void 0:h.call(m,A,t,this.state.context)),await((x=(p=M(this,lt).config).onSettled)==null?void 0:x.call(p,A,null,this.state.variables,this.state.context,this)),await((v=(k=this.options).onSettled)==null?void 0:v.call(k,A,null,t,this.state.context)),Xe(this,gn,ca).call(this,{type:"success",data:A}),A}catch(A){try{throw await((y=(g=M(this,lt).config).onError)==null?void 0:y.call(g,A,t,this.state.context,this)),await((z=(b=this.options).onError)==null?void 0:z.call(b,A,t,this.state.context)),await((C=(S=M(this,lt).config).onSettled)==null?void 0:C.call(S,void 0,A,this.state.variables,this.state.context,this)),await((w=(j=this.options).onSettled)==null?void 0:w.call(j,void 0,A,t,this.state.context)),A}finally{Xe(this,gn,ca).call(this,{type:"error",error:A})}}finally{M(this,lt).runNext(this)}}},kn=new WeakMap,lt=new WeakMap,Ja=new WeakMap,gn=new WeakSet,ca=function(t){const n=a=>{switch(t.type){case"failed":return{...a,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...a,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:t.error,failureCount:a.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ot.batch(()=>{M(this,kn).forEach(a=>{a.onMutationUpdate(t)}),M(this,lt).notify({mutation:this,type:"updated",action:t})})},Ip);function eA(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Bn,tn,Rl,Lp,tA=(Lp=class extends wc{constructor(t={}){super();ce(this,Bn);ce(this,tn);ce(this,Rl);this.config=t,J(this,Bn,new Set),J(this,tn,new Map),J(this,Rl,0)}build(t,n,a){const i=new J2({mutationCache:this,mutationId:++fs(this,Rl)._,options:t.defaultMutationOptions(n),state:a});return this.add(i),i}add(t){M(this,Bn).add(t);const n=Is(t);if(typeof n=="string"){const a=M(this,tn).get(n);a?a.push(t):M(this,tn).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(M(this,Bn).delete(t)){const n=Is(t);if(typeof n=="string"){const a=M(this,tn).get(n);if(a)if(a.length>1){const i=a.indexOf(t);i!==-1&&a.splice(i,1)}else a[0]===t&&M(this,tn).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Is(t);if(typeof n=="string"){const a=M(this,tn).get(n),i=a==null?void 0:a.find(l=>l.state.status==="pending");return!i||i===t}else return!0}runNext(t){var a;const n=Is(t);if(typeof n=="string"){const i=(a=M(this,tn).get(n))==null?void 0:a.find(l=>l!==t&&l.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ot.batch(()=>{M(this,Bn).forEach(t=>{this.notify({type:"removed",mutation:t})}),M(this,Bn).clear(),M(this,tn).clear()})}getAll(){return Array.from(M(this,Bn))}find(t){const n={exact:!0,...t};return this.getAll().find(a=>qy(n,a))}findAll(t={}){return this.getAll().filter(n=>qy(t,n))}notify(t){ot.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return ot.batch(()=>Promise.all(t.map(n=>n.continue().catch(Jt))))}},Bn=new WeakMap,tn=new WeakMap,Rl=new WeakMap,Lp);function Is(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Xy(e){return{onFetch:(t,n)=>{var d,m,h,p,x;const a=t.options,i=(h=(m=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:m.fetchMore)==null?void 0:h.direction,l=((p=t.state.data)==null?void 0:p.pages)||[],s=((x=t.state.data)==null?void 0:x.pageParams)||[];let o={pages:[],pageParams:[]},c=0;const u=async()=>{let k=!1;const v=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(t.signal.aborted?k=!0:t.signal.addEventListener("abort",()=>{k=!0}),t.signal)})},g=Cb(t.options,t.fetchOptions),y=async(b,z,S)=>{if(k)return Promise.reject();if(z==null&&b.pages.length)return Promise.resolve(b);const j=(()=>{const F={client:t.client,queryKey:t.queryKey,pageParam:z,direction:S?"backward":"forward",meta:t.options.meta};return v(F),F})(),w=await g(j),{maxPages:A}=t.options,P=S?_2:H2;return{pages:P(b.pages,w,A),pageParams:P(b.pageParams,z,A)}};if(i&&l.length){const b=i==="backward",z=b?nA:Zy,S={pages:l,pageParams:s},C=z(a,S);o=await y(S,C,b)}else{const b=e??l.length;do{const z=c===0?s[0]??a.initialPageParam:Zy(a,o);if(c>0&&z==null)break;o=await y(o,z),c++}while(c<b)}return o};t.options.persister?t.fetchFn=()=>{var k,v;return(v=(k=t.options).persister)==null?void 0:v.call(k,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Zy(e,{pages:t,pageParams:n}){const a=t.length-1;return t.length>0?e.getNextPageParam(t[a],t,n[a],n):void 0}function nA(e,{pages:t,pageParams:n}){var a;return t.length>0?(a=e.getPreviousPageParam)==null?void 0:a.call(e,t[0],t,n[0],n):void 0}var Re,ka,ga,Qi,Xi,va,Zi,Ji,Fp,aA=(Fp=class{constructor(e={}){ce(this,Re);ce(this,ka);ce(this,ga);ce(this,Qi);ce(this,Xi);ce(this,va);ce(this,Zi);ce(this,Ji);J(this,Re,e.queryCache||new Z2),J(this,ka,e.mutationCache||new tA),J(this,ga,e.defaultOptions||{}),J(this,Qi,new Map),J(this,Xi,new Map),J(this,va,0)}mount(){fs(this,va)._++,M(this,va)===1&&(J(this,Zi,jb.subscribe(async e=>{e&&(await this.resumePausedMutations(),M(this,Re).onFocus())})),J(this,Ji,Ko.subscribe(async e=>{e&&(await this.resumePausedMutations(),M(this,Re).onOnline())})))}unmount(){var e,t;fs(this,va)._--,M(this,va)===0&&((e=M(this,Zi))==null||e.call(this),J(this,Zi,void 0),(t=M(this,Ji))==null||t.call(this),J(this,Ji,void 0))}isFetching(e){return M(this,Re).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return M(this,ka).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=M(this,Re).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=M(this,Re).build(this,t),a=n.state.data;return a===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Yd(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(a))}getQueriesData(e){return M(this,Re).findAll(e).map(({queryKey:t,state:n})=>{const a=n.data;return[t,a]})}setQueryData(e,t,n){const a=this.defaultQueryOptions({queryKey:e}),i=M(this,Re).get(a.queryHash),l=i==null?void 0:i.state.data,s=I2(t,l);if(s!==void 0)return M(this,Re).build(this,a).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return ot.batch(()=>M(this,Re).findAll(e).map(({queryKey:a})=>[a,this.setQueryData(a,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=M(this,Re).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=M(this,Re);ot.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=M(this,Re);return ot.batch(()=>(n.findAll(e).forEach(a=>{a.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},a=ot.batch(()=>M(this,Re).findAll(e).map(i=>i.cancel(n)));return Promise.all(a).then(Jt).catch(Jt)}invalidateQueries(e,t={}){return ot.batch(()=>(M(this,Re).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},a=ot.batch(()=>M(this,Re).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let l=i.fetch(void 0,n);return n.throwOnError||(l=l.catch(Jt)),i.state.fetchStatus==="paused"?Promise.resolve():l}));return Promise.all(a).then(Jt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=M(this,Re).build(this,t);return n.isStaleByTime(Yd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Jt).catch(Jt)}fetchInfiniteQuery(e){return e.behavior=Xy(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Jt).catch(Jt)}ensureInfiniteQueryData(e){return e.behavior=Xy(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ko.isOnline()?M(this,ka).resumePausedMutations():Promise.resolve()}getQueryCache(){return M(this,Re)}getMutationCache(){return M(this,ka)}getDefaultOptions(){return M(this,ga)}setDefaultOptions(e){J(this,ga,e)}setQueryDefaults(e,t){M(this,Qi).set(gl(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...M(this,Qi).values()],n={};return t.forEach(a=>{vl(e,a.queryKey)&&Object.assign(n,a.defaultOptions)}),n}setMutationDefaults(e,t){M(this,Xi).set(gl(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...M(this,Xi).values()],n={};return t.forEach(a=>{vl(e,a.mutationKey)&&Object.assign(n,a.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...M(this,ga).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Sf(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Cf&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...M(this,ga).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){M(this,Re).clear(),M(this,ka).clear()}},Re=new WeakMap,ka=new WeakMap,ga=new WeakMap,Qi=new WeakMap,Xi=new WeakMap,va=new WeakMap,Zi=new WeakMap,Ji=new WeakMap,Fp),iA=f.createContext(void 0),rA=({client:e,children:t})=>(f.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),r.jsx(iA.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},bl.apply(this,arguments)}var za;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(za||(za={}));const Jy="popstate";function lA(e){e===void 0&&(e={});function t(a,i){let{pathname:l,search:s,hash:o}=a.location;return Vd("",{pathname:l,search:s,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){return typeof i=="string"?i:Ho(i)}return oA(t,n,null,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pb(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sA(){return Math.random().toString(36).substr(2,8)}function ep(e,t){return{usr:e.state,key:e.key,idx:t}}function Vd(e,t,n,a){return n===void 0&&(n=null),bl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gr(t):t,{state:n,key:t&&t.key||a||sA()})}function Ho(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function oA(e,t,n,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:l=!1}=a,s=i.history,o=za.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(bl({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function m(){o=za.Pop;let v=d(),g=v==null?null:v-u;u=v,c&&c({action:o,location:k.location,delta:g})}function h(v,g){o=za.Push;let y=Vd(k.location,v,g);u=d()+1;let b=ep(y,u),z=k.createHref(y);try{s.pushState(b,"",z)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(z)}l&&c&&c({action:o,location:k.location,delta:1})}function p(v,g){o=za.Replace;let y=Vd(k.location,v,g);u=d();let b=ep(y,u),z=k.createHref(y);s.replaceState(b,"",z),l&&c&&c({action:o,location:k.location,delta:0})}function x(v){let g=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof v=="string"?v:Ho(v);return y=y.replace(/ $/,"%20"),Fe(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let k={get action(){return o},get location(){return e(i,s)},listen(v){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Jy,m),c=v,()=>{i.removeEventListener(Jy,m),c=null}},createHref(v){return t(i,v)},createURL:x,encodeLocation(v){let g=x(v);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(v){return s.go(v)}};return k}var tp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tp||(tp={}));function cA(e,t,n){return n===void 0&&(n="/"),uA(e,t,n,!1)}function uA(e,t,n,a){let i=typeof t=="string"?gr(t):t,l=jf(i.pathname||"/",n);if(l==null)return null;let s=Mb(e);dA(s);let o=null;for(let c=0;o==null&&c<s.length;++c){let u=zA(l);o=bA(s[c],u,a)}return o}function Mb(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let i=(l,s,o)=>{let c={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};c.relativePath.startsWith("/")&&(Fe(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let u=Pa([a,c.relativePath]),d=n.concat(c);l.children&&l.children.length>0&&(Fe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mb(l.children,t,d,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:gA(u,l.index),routesMeta:d})};return e.forEach((l,s)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))i(l,s);else for(let c of Rb(l.path))i(l,s,c)}),t}function Rb(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return i?[l,""]:[l];let s=Rb(a.join("/")),o=[];return o.push(...s.map(c=>c===""?l:[l,c].join("/"))),i&&o.push(...s),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function dA(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vA(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const mA=/^:[\w-]+$/,fA=3,hA=2,yA=1,pA=10,kA=-2,np=e=>e==="*";function gA(e,t){let n=e.split("/"),a=n.length;return n.some(np)&&(a+=kA),t&&(a+=hA),n.filter(i=>!np(i)).reduce((i,l)=>i+(mA.test(l)?fA:l===""?yA:pA),a)}function vA(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function bA(e,t,n){let{routesMeta:a}=e,i={},l="/",s=[];for(let o=0;o<a.length;++o){let c=a[o],u=o===a.length-1,d=l==="/"?t:t.slice(l.length)||"/",m=ap({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!m&&u&&n&&!a[a.length-1].route.index&&(m=ap({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:Pa([l,m.pathname]),pathnameBase:jA(Pa([l,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(l=Pa([l,m.pathnameBase]))}return s}function ap(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=xA(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],s=l.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:a.reduce((u,d,m)=>{let{paramName:h,isOptional:p}=d;if(h==="*"){let k=o[m]||"";s=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const x=o[m];return p&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:s,pattern:e}}function xA(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pb(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,c)=>(a.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function zA(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pb(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function wA(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?gr(e):e;return{pathname:n?n.startsWith("/")?n:SA(n,t):t,search:NA(a),hash:AA(i)}}function SA(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pu(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CA(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Nf(e,t){let n=CA(e);return t?n.map((a,i)=>i===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Af(e,t,n,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=gr(e):(i=bl({},e),Fe(!i.pathname||!i.pathname.includes("?"),Pu("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Pu("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Pu("#","search","hash",i)));let l=e===""||i.pathname==="",s=l?"/":i.pathname,o;if(s==null)o=n;else{let m=t.length-1;if(!a&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}o=m>=0?t[m]:"/"}let c=wA(i,o),u=s&&s!=="/"&&s.endsWith("/"),d=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Pa=e=>e.join("/").replace(/\/\/+/g,"/"),jA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),NA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,AA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function EA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Db=["post","put","patch","delete"];new Set(Db);const TA=["get",...Db];new Set(TA);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},xl.apply(this,arguments)}const Ef=f.createContext(null),PA=f.createContext(null),Ka=f.createContext(null),Cc=f.createContext(null),Tn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Ib=f.createContext(null);function MA(e,t){let{relative:n}=t===void 0?{}:t;vr()||Fe(!1);let{basename:a,navigator:i}=f.useContext(Ka),{hash:l,pathname:s,search:o}=Fb(e,{relative:n}),c=s;return a!=="/"&&(c=s==="/"?a:Pa([a,s])),i.createHref({pathname:c,search:o,hash:l})}function vr(){return f.useContext(Cc)!=null}function Pn(){return vr()||Fe(!1),f.useContext(Cc).location}function Lb(e){f.useContext(Ka).static||f.useLayoutEffect(e)}function br(){let{isDataRoute:e}=f.useContext(Tn);return e?VA():RA()}function RA(){vr()||Fe(!1);let e=f.useContext(Ef),{basename:t,future:n,navigator:a}=f.useContext(Ka),{matches:i}=f.useContext(Tn),{pathname:l}=Pn(),s=JSON.stringify(Nf(i,n.v7_relativeSplatPath)),o=f.useRef(!1);return Lb(()=>{o.current=!0}),f.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){a.go(u);return}let m=Af(u,JSON.parse(s),l,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Pa([t,m.pathname])),(d.replace?a.replace:a.push)(m,d.state,d)},[t,a,s,l,e])}const DA=f.createContext(null);function IA(e){let t=f.useContext(Tn).outlet;return t&&f.createElement(DA.Provider,{value:e},t)}function Tf(){let{matches:e}=f.useContext(Tn),t=e[e.length-1];return t?t.params:{}}function Fb(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=f.useContext(Ka),{matches:i}=f.useContext(Tn),{pathname:l}=Pn(),s=JSON.stringify(Nf(i,a.v7_relativeSplatPath));return f.useMemo(()=>Af(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function LA(e,t){return FA(e,t)}function FA(e,t,n,a){vr()||Fe(!1);let{navigator:i}=f.useContext(Ka),{matches:l}=f.useContext(Tn),s=l[l.length-1],o=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Pn(),d;if(t){var m;let v=typeof t=="string"?gr(t):t;c==="/"||(m=v.pathname)!=null&&m.startsWith(c)||Fe(!1),d=v}else d=u;let h=d.pathname||"/",p=h;if(c!=="/"){let v=c.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(v.length).join("/")}let x=cA(e,{pathname:p}),k=_A(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Pa([c,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:Pa([c,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),l,n,a);return t&&k?f.createElement(Cc.Provider,{value:{location:xl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:za.Pop}},k):k}function BA(){let e=$A(),t=EA(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),n?f.createElement("pre",{style:i},n):null,null)}const OA=f.createElement(BA,null);class KA extends f.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?f.createElement(Tn.Provider,{value:this.props.routeContext},f.createElement(Ib.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HA(e){let{routeContext:t,match:n,children:a}=e,i=f.useContext(Ef);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),f.createElement(Tn.Provider,{value:t},a)}function _A(e,t,n,a){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=a)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=(i=n)==null?void 0:i.errors;if(o!=null){let d=s.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);d>=0||Fe(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&a&&a.v7_partialHydration)for(let d=0;d<s.length;d++){let m=s[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:h,errors:p}=n,x=m.route.loader&&h[m.route.id]===void 0&&(!p||p[m.route.id]===void 0);if(m.route.lazy||x){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,m,h)=>{let p,x=!1,k=null,v=null;n&&(p=o&&m.route.id?o[m.route.id]:void 0,k=m.route.errorElement||OA,c&&(u<0&&h===0?(x=!0,v=null):u===h&&(x=!0,v=m.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,h+1)),y=()=>{let b;return p?b=k:x?b=v:m.route.Component?b=f.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=d,f.createElement(HA,{match:m,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:b})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?f.createElement(KA,{location:n.location,revalidation:n.revalidation,component:k,error:p,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Bb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bb||{}),_o=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_o||{});function GA(e){let t=f.useContext(Ef);return t||Fe(!1),t}function UA(e){let t=f.useContext(PA);return t||Fe(!1),t}function YA(e){let t=f.useContext(Tn);return t||Fe(!1),t}function Ob(e){let t=YA(),n=t.matches[t.matches.length-1];return n.route.id||Fe(!1),n.route.id}function $A(){var e;let t=f.useContext(Ib),n=UA(_o.UseRouteError),a=Ob(_o.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function VA(){let{router:e}=GA(Bb.UseNavigateStable),t=Ob(_o.UseNavigateStable),n=f.useRef(!1);return Lb(()=>{n.current=!0}),f.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xl({fromRouteId:t},l)))},[e,t])}function qA(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function WA(e){let{to:t,replace:n,state:a,relative:i}=e;vr()||Fe(!1);let{future:l,static:s}=f.useContext(Ka),{matches:o}=f.useContext(Tn),{pathname:c}=Pn(),u=br(),d=Af(t,Nf(o,l.v7_relativeSplatPath),c,i==="path"),m=JSON.stringify(d);return f.useEffect(()=>u(JSON.parse(m),{replace:n,state:a,relative:i}),[u,m,i,n,a]),null}function QA(e){return IA(e.context)}function Se(e){Fe(!1)}function XA(e){let{basename:t="/",children:n=null,location:a,navigationType:i=za.Pop,navigator:l,static:s=!1,future:o}=e;vr()&&Fe(!1);let c=t.replace(/^\/*/,"/"),u=f.useMemo(()=>({basename:c,navigator:l,static:s,future:xl({v7_relativeSplatPath:!1},o)}),[c,o,l,s]);typeof a=="string"&&(a=gr(a));let{pathname:d="/",search:m="",hash:h="",state:p=null,key:x="default"}=a,k=f.useMemo(()=>{let v=jf(d,c);return v==null?null:{location:{pathname:v,search:m,hash:h,state:p,key:x},navigationType:i}},[c,d,m,h,p,x,i]);return k==null?null:f.createElement(Ka.Provider,{value:u},f.createElement(Cc.Provider,{children:n,value:k}))}function ZA(e){let{children:t,location:n}=e;return LA(qd(t),n)}new Promise(()=>{});function qd(e,t){t===void 0&&(t=[]);let n=[];return f.Children.forEach(e,(a,i)=>{if(!f.isValidElement(a))return;let l=[...t,i];if(a.type===f.Fragment){n.push.apply(n,qd(a.props.children,l));return}a.type!==Se&&Fe(!1),!a.props.index||!a.props.children||Fe(!1);let s={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=qd(a.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wd(){return Wd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Wd.apply(this,arguments)}function JA(e,t){if(e==null)return{};var n={},a=Object.keys(e),i,l;for(l=0;l<a.length;l++)i=a[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function eE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tE(e,t){return e.button===0&&(!t||t==="_self")&&!eE(e)}function Qd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let a=e[n];return t.concat(Array.isArray(a)?a.map(i=>[n,i]):[[n,a]])},[]))}function nE(e,t){let n=Qd(e);return t&&t.forEach((a,i)=>{n.has(i)||t.getAll(i).forEach(l=>{n.append(i,l)})}),n}const aE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],iE="6";try{window.__reactRouterVersion=iE}catch{}const rE="startTransition",ip=hm[rE];function lE(e){let{basename:t,children:n,future:a,window:i}=e,l=f.useRef();l.current==null&&(l.current=lA({window:i,v5Compat:!0}));let s=l.current,[o,c]=f.useState({action:s.action,location:s.location}),{v7_startTransition:u}=a||{},d=f.useCallback(m=>{u&&ip?ip(()=>c(m)):c(m)},[c,u]);return f.useLayoutEffect(()=>s.listen(d),[s,d]),f.useEffect(()=>qA(a),[a]),f.createElement(XA,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:a})}const sE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ae=f.forwardRef(function(t,n){let{onClick:a,relative:i,reloadDocument:l,replace:s,state:o,target:c,to:u,preventScrollReset:d,viewTransition:m}=t,h=JA(t,aE),{basename:p}=f.useContext(Ka),x,k=!1;if(typeof u=="string"&&oE.test(u)&&(x=u,sE))try{let b=new URL(window.location.href),z=u.startsWith("//")?new URL(b.protocol+u):new URL(u),S=jf(z.pathname,p);z.origin===b.origin&&S!=null?u=S+z.search+z.hash:k=!0}catch{}let v=MA(u,{relative:i}),g=cE(u,{replace:s,state:o,target:c,preventScrollReset:d,relative:i,viewTransition:m});function y(b){a&&a(b),b.defaultPrevented||g(b)}return f.createElement("a",Wd({},h,{href:x||v,onClick:k||l?a:y,ref:n,target:c}))});var rp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(rp||(rp={}));var lp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lp||(lp={}));function cE(e,t){let{target:n,replace:a,state:i,preventScrollReset:l,relative:s,viewTransition:o}=t===void 0?{}:t,c=br(),u=Pn(),d=Fb(e,{relative:s});return f.useCallback(m=>{if(tE(m,n)){m.preventDefault();let h=a!==void 0?a:Ho(u)===Ho(d);c(e,{replace:h,state:i,preventScrollReset:l,relative:s,viewTransition:o})}},[u,c,d,a,i,n,e,l,s,o])}function uE(e){let t=f.useRef(Qd(e)),n=f.useRef(!1),a=Pn(),i=f.useMemo(()=>nE(a.search,n.current?null:t.current),[a.search]),l=br(),s=f.useCallback((o,c)=>{const u=Qd(typeof o=="function"?o(i):o);n.current=!0,l("?"+u,c)},[l,i]);return[i,s]}const dE=()=>{const{pathname:e}=Pn();return f.useEffect(()=>{window.scrollTo(0,0)},[e]),null},he=f.forwardRef(({className:e,type:t,...n},a)=>r.jsx("input",{type:t,className:G("flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...n}));he.displayName="Input";const mE="/assets/sinceva_white_logo_for_web-BS5muGSt.png",fE="/assets/sinceva_black_logo_for_web-BXec4NTi.png",hE="/assets/sinceva_white_logo_for_mobile-B4ssiZkE.png",Pf="/assets/sinceva_black_logo_for_mobile-BKzzM21y.png",yE="/assets/cvit_div-Ceih48YX.png",pE="/assets/arbutin_div-CscMPxFp.png",kE="/assets/g%C3%B6z_div-BmpViU2c.png",gE="/assets/g%C3%BCne%C5%9F_div-CB4xzdlO.png",vE="/assets/nemlendirici_div-D8NeJnQZ.png",bE="/assets/gece_div-B0DtiYkA.png",xE="/assets/tonik_div-BTMW2qo0.png",zE="/assets/peeling_div-CoTuL7bY.png",wE="/assets/y%C3%BCz_div-BcVB24g3.png",SE="/assets/antiagingcart-DgUhp66A.png",CE="/assets/cleansingcart-3tnCVup3.png",jE="/assets/dailycarecart-DkCRz_mf.png",Xd="/assets/anti%20aging%20kategori-B-1edDqG.jpg",Zd="/assets/cleansing%20kategori-D6lXmJOl.jpg",NE="/assets/daily%20kategori-DN8R2Y_z.jpg",Mf={"anti-aging-care":{title:"Anti-Aging Care",description:"Advanced formulas to reduce fine lines, boost collagen, and restore youthful radiance to your skin.",bannerImage:Xd,subcategories:{"face-serum":{title:"Face Serum",products:[{id:1,name:"Sinceva Brightening Vitamin C Serum 30 ml",price:89.99,description:"Powerful vitamin C serum for radiant, even-toned skin with natural brightening properties.",image:yE},{id:2,name:"Sinceva Anti-Spot Arbutin Serum 30 ml",price:79.99,description:"Advanced arbutin formula to reduce dark spots and even skin tone.",image:pE}]},"eye-care":{title:"Eye Care",products:[{id:3,name:"Sinceva Anti-Wrinkle Eye Cream 20 ml",price:79.99,description:"Firming eye cream with peptides to reduce fine lines and brighten the delicate eye area.",image:kE}]},"anti-wrinkle-care":{title:"Anti-Wrinkle Care",products:[{id:4,name:"Sinceva Anti-Aging Night Cream 50 ml",price:129.99,description:"Advanced retinol formula to reduce signs of aging and promote skin renewal overnight.",image:bE}]}}},"face-and-skin-cleansing":{title:"Face & Skin Cleansing",description:"Gentle yet effective cleansers that purify your skin while maintaining its natural moisture balance.",bannerImage:Zd,subcategories:{toner:{title:"Toner",products:[{id:5,name:"Sinceva Skin Renewing Tonic 200 ml",price:44.99,description:"Gentle chemical exfoliant that reveals smoother, brighter skin with regular use.",image:xE}]},"peeling-exfoliator":{title:"Peeling / Exfoliator",products:[{id:6,name:"Sinceva Purifying Peeling Cream Scrub 200 ml",price:54.99,description:"Advanced exfoliating scrub that gently removes dead skin cells for smoother texture.",image:zE}]},"foaming-cleanser":{title:"Foaming Cleanser",products:[{id:7,name:"Sinceva Purifying Face Cleansing Foam 200 ml",price:32.99,description:"Mild foaming cleanser that removes impurities without stripping skin of essential moisture.",image:wE}]}}},"daily-care":{title:"Daily Care",description:"Essential daily skincare products for healthy, protected, and nourished skin every day.",bannerImage:NE,subcategories:{sunscreen:{title:"Sunscreen",products:[{id:8,name:"Sinceva SPF 50+ Daily SunCare Cream 100 ml",price:49.99,description:"Broad spectrum protection with lightweight, non-greasy formula perfect for daily use.",image:gE}]},moisturizer:{title:"Moisturizer",products:[{id:9,name:"Sinceva Hyaluronic Acid Moisturizing Cream 50 ml",price:64.99,description:"Deep hydration with hyaluronic acid for plump, smooth, and supple skin all day long.",image:vE}]}}}},zl={title:"All Our Products",subtitle:"Discover our complete collection of premium skincare solutions, expertly crafted for every skin type and concern.",products:Object.values(Mf).flatMap(e=>Object.values(e.subcategories).flatMap(t=>t.products))},AE={title:"Explore Our Categories",subtitle:"Curated collections designed to address your unique skincare needs with precision and care.",categories:[{id:"anti-aging",titleKey:"categories.antiAging.title",descriptionKey:"categories.antiAging.description",href:"/category/anti-aging-care",gradient:"from-purple-600 to-pink-600",image:SE},{id:"cleansing",titleKey:"categories.cleansing.title",descriptionKey:"categories.cleansing.description",href:"/category/face-and-skin-cleansing",gradient:"from-blue-600 to-teal-600",image:CE},{id:"daily-care",titleKey:"categories.dailyCare.title",descriptionKey:"categories.dailyCare.description",href:"/category/daily-care",gradient:"from-green-600 to-emerald-600",image:jE}]},EE={brand:{name:"Sinceva",tagline:"Beauty redefined"},mainNavigation:[{name:"Home",href:"/"},{name:"Shop",href:"/shop",hasMegaMenu:!0},{name:"About",href:"/about"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact"}],megaMenuCategories:[{category:"Anti-Aging Care",items:[{name:"Face Serum",href:"/category/anti-aging-care/face-serum"},{name:"Eye Care",href:"/category/anti-aging-care/eye-care"},{name:"Anti-Wrinkle Care",href:"/category/anti-aging-care/anti-wrinkle-care"}]},{category:"Face & Skin Cleansing",items:[{name:"Toner",href:"/category/face-and-skin-cleansing/toner"},{name:"Peeling / Exfoliator",href:"/category/face-and-skin-cleansing/peeling-exfoliator"},{name:"Foaming Cleanser",href:"/category/face-and-skin-cleansing/foaming-cleanser"}]},{category:"Daily Care",items:[{name:"Sunscreen",href:"/category/daily-care/sunscreen"},{name:"Moisturizer",href:"/category/daily-care/moisturizer"}]}]},Va={desktop:{white:mE,black:fE},mobile:{white:hE,black:Pf},fallback:{text:"Sinceva",showText:!0}},Kb=f.createContext(void 0),_e=()=>{const e=f.useContext(Kb);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e},TE=({children:e})=>{const[t,n]=f.useState(()=>localStorage.getItem("language")||"tr"),a=i=>{n(i),localStorage.setItem("language",i),i==="ar"?(document.documentElement.dir="rtl",document.documentElement.lang="ar"):(document.documentElement.dir="ltr",document.documentElement.lang=i)};return f.useEffect(()=>{t==="ar"?(document.documentElement.dir="rtl",document.documentElement.lang="ar"):(document.documentElement.dir="ltr",document.documentElement.lang=t)},[]),r.jsx(Kb.Provider,{value:{language:t,setLanguage:a},children:e})},at={en:{productDetails:"Product Details",ingredients:"Ingredients",howToUse:"How To Use",faq:"Frequently Asked Questions",buy:"Buy",discoverProducts:"Discover Sinceva Products",productNotFound:"Product Not Found",productNotFoundDesc:"The requested product could not be found.",home:"ANCIENT SHINE",shop:"Shop",about:"About",blogNav:"Blog",contact:"Contact",contactNav:"TOUCH TO BEAUTY",searchPlaceholder:"Search products...",quickLinks:"Quick Links",policies:"Policies",stayConnected:"Stay Connected",newsletterDesc:"Subscribe to get beauty tips and exclusive offers.",enterEmail:"Enter your email",subscribe:"Subscribe",allRightsReserved:"All rights reserved.",craftedFor:"Crafted for timeless beauty and elegance.",theOriginOfBeauty:"The Origin Of Beauty",trendsAndTips:"Trends & Tips",privacyPolicy:"Privacy Policy",cookiePolicy:"Cookie Policy",termsAndConditions:"Terms and Conditions",consumerReviewRules:"Consumer Review Rules",aboutSinceva:"About Sinceva",aboutSubtitle:"Since Eva – the name that inspired our journey toward timeless beauty and elegance.",ourStory:"Our Story",firstTouchTitle:"The First Touch of Beauty",firstTouchText:"Sinceva was born from an ancient symbol: the apple. From the moment Eve reached out her hand, the apple has stood for beginnings curiosity, transformation, and the essence of beauty itself. For us, it is not only the fruit of a story; it is the root of our philosophy. Just as beauty began at that timeless moment, we believe true beauty begins with the first touch of skincare.",timelessHeritageTitle:"A Timeless Heritage",timelessHeritageText:"We see the apple as more than nature's gift it is a bridge between past and present. Its purity, vitality, and renewing power are woven into each formula, blending ancestral wisdom with modern cosmetic science. With Sinceva, skincare is not just a routine but a heritage of self-care, echoing the eternal journey of beauty through time.",guidedByMissionTitle:"Guided by Our Mission",guidedByMissionText:`Our motto, "The Origin of Beauty," carries a double truth. It honors humanity's first story Since Eva and it reminds every woman that beauty starts not with makeup, but with the skin beneath. With every product, we reaffirm our mission: to protect, renew, and illuminate, so that beauty always begins at the right place, Since Eva, since the very first touch.`,ourValues:"Our Values",passionForBeauty:"Passion for Beauty",passionDesc:"We believe every person deserves to feel beautiful and confident in their own skin.",naturalExcellence:"Natural Excellence",naturalDesc:"Our products combine the best of nature with advanced skincare science.",qualityFirst:"Quality First",qualityDesc:"Every product undergoes rigorous testing to ensure the highest quality standards.",sustainableFuture:"Sustainable Future",sustainableDesc:"We are committed to sustainable practices and environmental responsibility.",committedToSustainability:"Committed to Sustainability",sustainabilityText1:"At Sinceva, we recognize our responsibility to protect the environment for future generations. Our sustainability initiatives include eco-friendly packaging, ethically sourced ingredients, and partnerships with suppliers who share our commitment to environmental stewardship.",sustainabilityText2:"We continuously strive to reduce our carbon footprint while maintaining the highest quality standards. Because we believe that true beauty should never come at the expense of our planet's wellbeing.",contactUs:"Contact Us",contactSubtitle:"Have questions about our products or need skincare advice? We're here to help you on your beauty journey.",sendMessage:"Send us a Message",fullName:"Full Name",emailAddress:"Email Address",subject:"Subject",message:"Message",sendMessageBtn:"Send Message",getInTouch:"Get in Touch",address:"Office",phone:"Phone",email:"Email",businessHours:"Business Hours",interactiveMap:"Interactive Map",mapIntegration:"Google Maps integration would go here",addressContent:`Çiftlik Mah. Karayolu Cad. No: 124/B 6
Çiftlikköy/Yalova`,phoneContent:"+90 545 378 21 30",emailContent:"info@sinceva.com",hoursContent:`Mon - Fri: 9:00 AM - 6:00 PM
Sat - Sun: 10:00 AM - 4:00 PM`,enterFullName:"Enter your full name",enterEmailPlaceholder:"Enter your email",subjectPlaceholder:"What is your message about?",messagePlaceholder:"Tell us how we can help you...",messageSentSuccess:"Message Sent Successfully",messageSentDesc:"We'll get back to you within 24 hours.",blogPost1Title:"Winter Skincare Routine: Essential Steps for Cold Weather",blogPost1Excerpt:"Discover how to adapt your skincare routine during winter months to keep your skin hydrated and glowing despite the harsh weather conditions.",blogPost2Title:"The Power of Vitamin C: Transform Your Skin",blogPost2Excerpt:"Learn about the incredible benefits of Vitamin C serum and why it should be a staple in your daily skincare routine for brighter, more even-toned skin.",blogPost3Title:"Anti-Aging Secrets: Start in Your 20s",blogPost3Excerpt:"It's never too early to start taking care of your skin. Discover the essential anti-aging practices you should incorporate into your routine today.",privacyPolicyTitle:"Privacy Policy",informationWeCollect:"Information We Collect",informationCollectText:"We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support.",personalIdentifiers:"Personal identifiers (name, email address, phone number)",billingAddresses:"Billing and shipping addresses",paymentInfo:"Payment information (processed securely by third-party providers)",purchaseHistory:"Purchase history and preferences",communicationPrefs:"Communication preferences",howWeUse:"How We Use Your Information",howWeUseText:"We use the information we collect to:",processOrders:"Process and fulfill your orders",provideSupport:"Provide customer service and support",sendMarketing:"Send you marketing communications (with your consent)",improveProducts:"Improve our products and services",complyLegal:"Comply with legal obligations",detectFraud:"Detect and prevent fraud or security incidents",informationSharing:"Information Sharing",informationSharingText:"We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:",serviceProviders:"Service providers who assist us in operating our website and business",legalRequirements:"Legal requirements or to protect our rights and safety",businessTransfers:"Business transfers (mergers, acquisitions, or asset sales)",dataSecurity:"Data Security",dataSecurityText:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",yourRights:"Your Rights",yourRightsText:"You have the right to:",accessInfo:"Access the personal information we hold about you",correctInfo:"Request correction of inaccurate information",deleteInfo:"Request deletion of your personal information",objectProcessing:"Object to or restrict processing of your information",withdrawConsent:"Withdraw consent where processing is based on consent",contactUsPolicy:"Contact Us",contactPolicyText:"If you have any questions about this Privacy Policy or our data practices, please contact us at:",lastUpdated:"Last updated:",termsTitle:"Terms and Conditions",acceptanceOfTerms:"Acceptance of Terms",acceptanceText:"By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",useLicense:"Use License",useLicenseText:"Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",modifyMaterials:"Modify or copy the materials",commercialUse:"Use the materials for any commercial purpose or for any public display",reverseEngineer:"Attempt to reverse engineer any software contained on our website",removeCopyright:"Remove any copyright or other proprietary notations from the materials",productInformation:"Product Information",productInfoText:"We strive to provide accurate product information on our website. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.",ordersPayment:"Orders and Payment",ordersPaymentText:"The following terms apply to orders and payments:",ordersSubject:"All orders are subject to acceptance and availability",reserveRight:"We reserve the right to refuse or cancel any order",paymentRequired:"Payment must be received before order processing",pricesSubject:"Prices are subject to change without notice",returnsRefunds:"Returns and Refunds",returnsText:"We offer a 14-day return policy for unopened products in their original packaging. Return shipping costs are the responsibility of the customer unless the return is due to our error.",limitationLiability:"Limitation of Liability",limitationText:"In no event shall Sinceva or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our website or products, even if we have been notified orally or in writing of the possibility of such damage.",governingLaw:"Governing Law",governingText:"These terms and conditions are governed by and construed in accordance with the laws of Turkey, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.",reviewRulesTitle:"Consumer Review Rules",reviewGuidelines:"Review Guidelines",reviewGuidelinesText:"We encourage honest and helpful reviews from our customers. To ensure the quality and authenticity of reviews on our platform, please follow these guidelines when submitting your review.",acceptableContent:"Acceptable Review Content",reviewsShouldText:"Reviews should:",basedOnExperience:"Be based on your personal experience with the product",honestFeedback:"Provide honest and constructive feedback",focusQuality:"Focus on product quality, effectiveness, and value",includeDetails:"Include specific details about your experience",respectfulLanguage:"Be respectful and appropriate in language",relevantProduct:"Be relevant to the product being reviewed",prohibitedContent:"Prohibited Content",reviewsMustNot:"Reviews must not contain:",offensiveLanguage:"Offensive, discriminatory, or inappropriate language",personalInfo:"Personal information about individuals",spamContent:"Spam, promotional content, or advertisements",falseInfo:"False or misleading information",violateIP:"Content that violates intellectual property rights",notPurchased:"Reviews for products you haven't purchased or used",defamatoryStatements:"Defamatory statements about competitors",reviewVerification:"Review Verification",verificationText:"To maintain authenticity, we may verify that reviewers have actually purchased the products they are reviewing. Verified purchase reviews will be clearly marked on our website.",moderationProcess:"Moderation Process",moderationText:"All reviews are subject to moderation before publication. We reserve the right to:",reviewApprove:"Review and approve submitted content",editRemove:"Edit or remove inappropriate content",rejectReviews:"Reject reviews that violate our guidelines",removeReported:"Remove reviews that are reported by users",incentivizedReviews:"Incentivized Reviews",incentivizedText:"Reviews in exchange for compensation, free products, or other incentives must be clearly disclosed. Failure to disclose such relationships may result in review removal and account suspension.",reportingReviews:"Reporting Inappropriate Reviews",reportingText:'If you find a review that violates our guidelines, please report it using the "Report Review" function or contact our customer service team.',reviewerRights:"Your Rights",reviewerRightsText:"As a reviewer, you retain ownership of your review content. However, by submitting a review, you grant us a license to use, display, and distribute your review on our platform and marketing materials.",cookieConsent:{banner:{title:"We Use Cookies",message:"We use cookies to improve your browsing experience, personalize content, and analyze our traffic. By continuing to use our site, you consent to our use of cookies.",learnMore:"Learn more",preferences:"Preferences",reject:"Reject",acceptAll:"Accept All"},preferences:{title:"Cookie Preferences",necessary:{title:"Necessary Cookies",description:"Required for site functionality",alwaysActive:"Always active"},analytics:{title:"Analytics Cookies",description:"Help us analyze site usage"},marketing:{title:"Marketing Cookies",description:"Personalized advertisements"},essentialOnly:"Essential Only"}},cookiePolicyTitle:"Cookie Policy",whatAreCookies:"What Are Cookies?",cookiesDefinition:"Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work more efficiently and to provide reporting information.",typesOfCookies:"Types of Cookies We Use",necessaryCookies:"Necessary Cookies",necessaryText:"These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",analyticsCookies:"Analytics Cookies",analyticsText:"These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve our website's performance and user experience.",marketingCookies:"Marketing Cookies",marketingText:"These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.",howWeUseCookies:"How We Use Cookies",cookieUsageText:"We use cookies for the following purposes:",ensureFunction:"To ensure our website functions properly",rememberPreferences:"To remember your preferences and settings",analyzeTraffic:"To analyze website traffic and usage patterns",personalizedContent:"To provide personalized content and advertisements",improveSecurity:"To improve our website's security and performance",managingCookies:"Managing Your Cookie Preferences",managingText:"You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Please note that disabling cookies may affect the functionality of our website.",cookieBanner:"You can also manage your cookie preferences through our cookie consent banner that appears when you first visit our website.",thirdPartyCookies:"Third-Party Cookies",thirdPartyText:"Some cookies on our website are placed by third-party services. We have no control over these cookies and they are governed by the privacy policies of the respective third parties.",productNames:{1:"Sinceva Brightening Vitamin C Serum 30 ml",2:"Sinceva Anti-Spot Arbutin Serum 30 ml",3:"Sinceva Anti-Wrinkle Eye Cream 20 ml",4:"Sinceva Anti-Aging Night Cream 50 ml",5:"Sinceva Skin Renewing Tonic 200 ml",6:"Sinceva Purifying Peeling Cream Scrub 200 ml",7:"Sinceva Purifying Face Cleansing Foam 200 ml",8:"Sinceva SPF 50+ Daily SunCare Cream 100 ml",9:"Sinceva Hyaluronic Acid Moisturizing Cream 50 ml"},blog:{title:"Trends & Tips",searchPlaceholder:"Search articles...",categories:{all:"All Posts",trends:"Skincare Tips",skincare:"Anti-Aging",ingredients:"Seasonal Care",routine:"Ingredient Focus"},readMore:"Read More"},homepage:{categoriesTitle:"Explore Our Categories",categoriesSubtitle:"Discover Sinceva's carefully curated collections, sensitively prepared for your skin's needs.",exploreCollection:"Explore Collection",allProductsTitle:"All Our Products",allProductsSubtitle:"Discover Sinceva collections inspired by the origin of beauty, carefully crafted for every skin type.",loadMore:"Load More Products"},productCard:{buyNow:"Buy Now",available:"available"},categories:{antiAging:{title:"Anti-Aging Care",description:"Advanced formulas to reduce fine lines, boost collagen, and restore youthful radiance to your skin."},cleansing:{title:"Face & Skin Cleansing",description:"Gentle yet effective cleansers that purify your skin while maintaining its natural moisture balance."},dailyCare:{title:"Daily Care",description:"Essential daily skincare products for healthy, protected, and nourished skin every day."}},newsletter:{successTitle:"Success!",successDesc:"Confirmation email sent. Please check your inbox.",errorTitle:"Error",errorGeneric:"An error occurred. Please try again.",errorAlreadySubscribed:"This email address is already subscribed.",errorInvalidEmail:"Invalid email address.",errorRateLimited:"Too many requests. Please wait a moment.",sending:"Sending..."}},tr:{productDetails:"Ürün Detayları",ingredients:"İçindekiler",howToUse:"Nasıl Kullanılır",faq:"Sıkça Sorulan Sorular",buy:"Satın Al",discoverProducts:"Sinceva Ürünlerini Keşfedin",productNotFound:"Ürün Bulunamadı",productNotFoundDesc:"İstenen ürün bulunamadı.",home:"KADİM IŞILTI",shop:"Mağaza",about:"Hakkımızda",blogNav:"Blog",contact:"İletişim",contactNav:"GÜZELLİĞE DOKUNUN",searchPlaceholder:"Ürün ara...",quickLinks:"Hızlı Bağlantılar",policies:"Politikalar",stayConnected:"Bağlantıda Kalın",newsletterDesc:"Güzellik ipuçları ve özel teklifler için abone olun.",enterEmail:"E-posta adresinizi girin",subscribe:"Abone Ol",allRightsReserved:"Tüm hakları saklıdır.",craftedFor:"Zamansız güzellik ve zarafet için hazırlandı.",theOriginOfBeauty:"The Origin Of Beauty",trendsAndTips:"Trendler ve İpuçları",privacyPolicy:"Gizlilik Politikası",cookiePolicy:"Çerez Politikası",termsAndConditions:"Kullanım Koşulları",consumerReviewRules:"Tüketici Değerlendirme Kuralları",aboutSinceva:"Sinceva Hakkında",aboutSubtitle:"Since Eva – zamansız güzellik ve zarafete yolculuğumuza ilham veren isim.",ourStory:"Hikayemiz",firstTouchTitle:"Güzelliğin İlk Dokunuşu",firstTouchText:"Sinceva, eski bir sembolden doğdu: elma. Havva'nın elini uzattığı andan itibaren elma, başlangıçları, merakı, dönüşümü ve güzelliğin özünü temsil etti. Bizim için bu sadece bir hikayenin meyvesi değil; felsefemizin köküdür. Güzellik o zamansız anda başladığı gibi, biz de gerçek güzelliğin cilt bakımının ilk dokunuşuyla başladığına inanıyoruz.",timelessHeritageTitle:"Zamansız Bir Miras",timelessHeritageText:"Elmayı doğanın armağanından daha fazlası olarak görüyoruz; geçmiş ve gelecek arasında bir köprüdür. Saflığı, canlılığı ve yenileyici gücü, atalarımızın bilgeliğini modern kozmetik bilimiyle harmanlayarak her formülümüze dokunmuştur. Sinceva ile cilt bakımı sadece bir rutin değil, zamandan zamana güzellik yolculuğunu yankılayan bir öz bakım mirasıdır.",guidedByMissionTitle:"Misyonumuzun Rehberliğinde",guidedByMissionText:`Motomuz "The Origin of Beauty", ikili bir gerçeği taşır. İnsanlığın ilk hikayesine, Since Eva'ya saygı duyar ve her kadına güzelliğin makyajla değil, altındaki ciltle başladığını hatırlatır. Her ürünümüzle misyonumuzu yeniden teyit ediyoruz: korumak, yenilemek ve aydınlatmak, böylece güzellik her zaman doğru yerden başlasın, Since Eva'dan, tam o ilk dokunuştan.`,ourValues:"Değerlerimiz",passionForBeauty:"Güzellik Tutkusu",passionDesc:"Her insanın kendi teninde güzel ve özgüvenli hissetmeyi hak ettiğine inanıyoruz.",naturalExcellence:"Doğal Mükemmellik",naturalDesc:"Ürünlerimiz doğanın en iyisini gelişmiş cilt bakım bilimiyle bir araya getirir.",qualityFirst:"Önce Kalite",qualityDesc:"Her ürün en yüksek kalite standartlarını sağlamak için titiz testlerden geçer.",sustainableFuture:"Sürdürülebilir Gelecek",sustainableDesc:"Sürdürülebilir uygulamalara ve çevresel sorumluluğa bağlıyız.",committedToSustainability:"Sürdürülebilirliğe Bağlılık",sustainabilityText1:"Sinceva'da, gelecek nesiller için çevreyi koruma sorumluluğumuzu kabul ediyoruz. Sürdürülebilirlik girişimlerimiz çevre dostu ambalaj, etik kaynaklı içerikler ve çevresel yönetim taahhüdümüzü paylaşan tedarikçilerle ortaklıkları içerir.",sustainabilityText2:"En yüksek kalite standartlarını korurken karbon ayak izimizi sürekli azaltmaya çalışıyoruz. Çünkü gerçek güzelliğin asla gezegenimizin refahı pahasına gelmemesi gerektiğine inanıyoruz.",contactUs:"İletişim",contactSubtitle:"Ürünlerimiz hakkında sorularınız mı var veya cilt bakımı tavsiyesine mi ihtiyacınız var? Güzellik yolculuğunuzda size yardımcı olmak için buradayız.",sendMessage:"Bize Mesaj Gönderin",fullName:"Ad Soyad",emailAddress:"E-posta Adresi",subject:"Konu",message:"Mesaj",sendMessageBtn:"Mesaj Gönder",getInTouch:"Bize Ulaşın",address:"Ofis",phone:"Telefon",email:"E-posta",businessHours:"Çalışma Saatleri",interactiveMap:"İnteraktif Harita",mapIntegration:"Google Haritalar entegrasyonu buraya gelecek",addressContent:`Çiftlik Mah. Karayolu Cad. No: 124/B 6
Çiftlikköy/Yalova`,phoneContent:"+90 545 378 21 30",emailContent:"info@sinceva.com",hoursContent:`Pzt - Cum: 09:00 - 18:00
Cmt - Paz: 10:00 - 16:00`,enterFullName:"Adınızı ve soyadınızı girin",enterEmailPlaceholder:"E-posta adresinizi girin",subjectPlaceholder:"Mesajınız ne hakkında?",messagePlaceholder:"Size nasıl yardımcı olabileceğimizi söyleyin...",messageSentSuccess:"Mesaj Başarıyla Gönderildi",messageSentDesc:"24 saat içinde size geri döneceğiz.",blogPost1Title:"Kış Cilt Bakım Rutini: Soğuk Hava İçin Temel Adımlar",blogPost1Excerpt:"Sert hava koşullarına rağmen cildinizi nemli ve parlak tutmak için kış aylarında cilt bakım rutininizi nasıl uyarlayacağınızı keşfedin.",blogPost2Title:"C Vitamininin Gücü: Cildinizi Dönüştürün",blogPost2Excerpt:"C Vitamini serumunun inanılmaz faydalarını ve daha parlak, daha eşit tonlu bir cilt için günlük cilt bakım rutininizde neden vazgeçilmez olması gerektiğini öğrenin.",blogPost3Title:"Yaşlanma Karşıtı Sırlar: 20'li Yaşlarınızda Başlayın",blogPost3Excerpt:"Cildinizle ilgilenmeye başlamak için asla çok erken değil. Bugün rutininize dahil etmeniz gereken temel yaşlanma karşıtı uygulamaları keşfedin.",privacyPolicyTitle:"Gizlilik Politikası",informationWeCollect:"Topladığımız Bilgiler",informationCollectText:"Bir hesap oluşturduğunuzda, satın alma yaptığınızda, bültenimize abone olduğunuzda veya destek için bizimle iletişime geçtiğinizde doğrudan bize sağladığınız bilgileri topluyoruz.",personalIdentifiers:"Kişisel tanımlayıcılar (ad, e-posta adresi, telefon numarası)",billingAddresses:"Fatura ve teslimat adresleri",paymentInfo:"Ödeme bilgileri (üçüncü taraf sağlayıcılar tarafından güvenli bir şekilde işlenir)",purchaseHistory:"Satın alma geçmişi ve tercihleri",communicationPrefs:"İletişim tercihleri",howWeUse:"Bilgilerinizi Nasıl Kullanıyoruz",howWeUseText:"Topladığımız bilgileri şunlar için kullanıyoruz:",processOrders:"Siparişlerinizi işlemek ve yerine getirmek",provideSupport:"Müşteri hizmeti ve destek sağlamak",sendMarketing:"Size pazarlama iletişimleri göndermek (izninizle)",improveProducts:"Ürün ve hizmetlerimizi geliştirmek",complyLegal:"Yasal yükümlülüklere uymak",detectFraud:"Dolandırıcılık veya güvenlik olaylarını tespit etmek ve önlemek",informationSharing:"Bilgi Paylaşımı",informationSharingText:"Aşağıdaki durumlar dışında, kişisel bilgilerinizi izniniz olmadan üçüncü taraflara satmıyor, takas etmiyor veya başka şekilde aktarmıyoruz:",serviceProviders:"Web sitemizi ve işimizi işletmemize yardımcı olan hizmet sağlayıcılar",legalRequirements:"Yasal gereklilikler veya haklarımızı ve güvenliğimizi korumak için",businessTransfers:"İş transferleri (birleşmeler, satın almalar veya varlık satışları)",dataSecurity:"Veri Güvenliği",dataSecurityText:"Kişisel bilgilerinizi yetkisiz erişime, değiştirmeye, ifşa etmeye veya yok etmeye karşı korumak için uygun teknik ve organizasyonel önlemler uyguluyoruz.",yourRights:"Haklarınız",yourRightsText:"Şunları yapma hakkınız vardır:",accessInfo:"Hakkınızda tuttuğumuz kişisel bilgilere erişim",correctInfo:"Yanlış bilgilerin düzeltilmesini talep etme",deleteInfo:"Kişisel bilgilerinizin silinmesini talep etme",objectProcessing:"Bilgilerinizin işlenmesine itiraz etme veya kısıtlama",withdrawConsent:"İşlemenin rızaya dayandığı durumlarda rızayı geri çekme",contactUsPolicy:"Bize Ulaşın",contactPolicyText:"Bu Gizlilik Politikası veya veri uygulamalarımız hakkında sorularınız varsa, lütfen bizimle iletişime geçin:",lastUpdated:"Son güncelleme:",termsTitle:"Kullanım Koşulları",acceptanceOfTerms:"Koşulların Kabulü",acceptanceText:"Bu web sitesine erişerek ve kullanarak, bu anlaşmanın hüküm ve koşullarına bağlı kalmayı kabul edersiniz. Yukarıdakilere uymayı kabul etmiyorsanız, lütfen bu hizmeti kullanmayın.",useLicense:"Kullanım Lisansı",useLicenseText:"Web sitemizdeki materyallerin bir kopyasını yalnızca kişisel, ticari olmayan geçici görüntüleme için geçici olarak indirme izni verilmiştir. Bu bir lisans verilmesidir, mülkiyet devri değildir ve bu lisans altında şunları yapamazsınız:",modifyMaterials:"Materyalleri değiştirme veya kopyalama",commercialUse:"Materyalleri herhangi bir ticari amaç veya halka açık gösterim için kullanma",reverseEngineer:"Web sitemizde bulunan herhangi bir yazılımı tersine mühendislik yapmaya çalışma",removeCopyright:"Materyallerden herhangi bir telif hakkı veya diğer mülkiyet bildirimlerini kaldırma",productInformation:"Ürün Bilgileri",productInfoText:"Web sitemizde doğru ürün bilgileri sağlamaya çalışıyoruz. Ancak, ürün açıklamalarının, fiyatlandırmanın veya diğer içeriğin doğru, eksiksiz, güvenilir, güncel veya hatasız olduğunu garanti etmiyoruz.",ordersPayment:"Siparişler ve Ödeme",ordersPaymentText:"Siparişler ve ödemeler için aşağıdaki koşullar geçerlidir:",ordersSubject:"Tüm siparişler kabul ve kullanılabilirliğe tabidir",reserveRight:"Herhangi bir siparişi reddetme veya iptal etme hakkını saklı tutarız",paymentRequired:"Sipariş işlenmeden önce ödeme alınmalıdır",pricesSubject:"Fiyatlar önceden haber verilmeksizin değiştirilebilir",returnsRefunds:"İadeler ve Geri Ödemeler",returnsText:"Orijinal ambalajında açılmamış ürünler için 14 günlük iade politikası sunuyoruz. İadenin bizim hatamızdan kaynaklanmadığı sürece iade nakliye masrafları müşterinin sorumluluğundadır.",limitationLiability:"Sorumluluk Sınırlaması",limitationText:"Sinceva veya tedarikçileri, sözlü veya yazılı olarak bu tür bir hasarın olasılığından haberdar edilmiş olsalar bile, web sitemizin veya ürünlerimizin kullanımından veya kullanılamamasından kaynaklanan herhangi bir hasardan (veri veya kar kaybına bağlı hasarlar veya iş kesintisinden kaynaklanan hasarlar dahil ancak bunlarla sınırlı olmamak üzere) hiçbir durumda sorumlu tutulamaz.",governingLaw:"Geçerli Kanun",governingText:"Bu şartlar ve koşullar Türkiye yasalarına göre yönetilir ve yorumlanır ve bu eyaletteki veya konumdaki mahkemelerin münhasır yargı yetkisine geri dönülemez bir şekilde tabi olursunuz.",reviewRulesTitle:"Tüketici Değerlendirme Kuralları",reviewGuidelines:"Değerlendirme Yönergeleri",reviewGuidelinesText:"Müşterilerimizden dürüst ve yararlı değerlendirmeler almayı teşvik ediyoruz. Platformumuzda değerlendirmelerin kalitesini ve özgünlüğünü sağlamak için, değerlendirmenizi gönderirken lütfen bu yönergeleri izleyin.",acceptableContent:"Kabul Edilebilir Değerlendirme İçeriği",reviewsShouldText:"Değerlendirmeler şunları içermelidir:",basedOnExperience:"Ürünle ilgili kişisel deneyiminize dayanmalı",honestFeedback:"Dürüst ve yapıcı geri bildirim sağlamalı",focusQuality:"Ürün kalitesi, etkinliği ve değerine odaklanmalı",includeDetails:"Deneyiminiz hakkında belirli ayrıntılar içermeli",respectfulLanguage:"Saygılı ve uygun bir dil kullanmalı",relevantProduct:"Değerlendirilen ürünle ilgili olmalı",prohibitedContent:"Yasak İçerik",reviewsMustNot:"Değerlendirmeler şunları içermemelidir:",offensiveLanguage:"Saldırgan, ayrımcı veya uygunsuz dil",personalInfo:"Bireyler hakkında kişisel bilgiler",spamContent:"Spam, tanıtım içeriği veya reklamlar",falseInfo:"Yanlış veya yanıltıcı bilgiler",violateIP:"Fikri mülkiyet haklarını ihlal eden içerik",notPurchased:"Satın almadığınız veya kullanmadığınız ürünler için değerlendirmeler",defamatoryStatements:"Rakipler hakkında karalayıcı ifadeler",reviewVerification:"Değerlendirme Doğrulaması",verificationText:"Özgünlüğü korumak için, değerlendirmecilerin gerçekten değerlendirdikleri ürünleri satın aldıklarını doğrulayabiliriz. Doğrulanmış satın alma değerlendirmeleri web sitemizde açıkça işaretlenecektir.",moderationProcess:"Moderasyon Süreci",moderationText:"Tüm değerlendirmeler yayınlanmadan önce moderasyona tabidir. Şunları yapma hakkını saklı tutarız:",reviewApprove:"Gönderilen içeriği inceleme ve onaylama",editRemove:"Uygunsuz içeriği düzenleme veya kaldırma",rejectReviews:"Yönergelerimizi ihlal eden değerlendirmeleri reddetme",removeReported:"Kullanıcılar tarafından bildirilen değerlendirmeleri kaldırma",incentivizedReviews:"Teşvikli Değerlendirmeler",incentivizedText:"Tazminat, ücretsiz ürünler veya diğer teşvikler karşılığında yapılan değerlendirmeler açıkça belirtilmelidir. Bu tür ilişkileri açıklamamak, değerlendirmenin kaldırılmasına ve hesabın askıya alınmasına neden olabilir.",reportingReviews:"Uygunsuz Değerlendirmeleri Bildirme",reportingText:'Yönergelerimizi ihlal eden bir değerlendirme bulursanız, lütfen "Değerlendirmeyi Bildir" işlevini kullanarak bildirin veya müşteri hizmetleri ekibimizle iletişime geçin.',reviewerRights:"Haklarınız",reviewerRightsText:"Bir değerlendirici olarak, değerlendirme içeriğinizin sahipliğini korursunuz. Ancak, bir değerlendirme göndererek, platformumuzda ve pazarlama materyallerimizde değerlendirmenizi kullanma, görüntüleme ve dağıtma lisansını bize vermiş olursunuz.",cookieConsent:{banner:{title:"Çerez Kullanıyoruz",message:"Gezinme deneyiminizi iyileştirmek, içeriği kişiselleştirmek ve trafiğimizi analiz etmek için çerezler kullanıyoruz. Sitemizi kullanmaya devam ederek çerez kullanımımızı kabul etmiş olursunuz.",learnMore:"Daha fazla bilgi",preferences:"Tercihler",reject:"Reddet",acceptAll:"Tümünü Kabul Et"},preferences:{title:"Çerez Tercihleri",necessary:{title:"Gerekli Çerezler",description:"Site işlevselliği için gerekli",alwaysActive:"Her zaman aktif"},analytics:{title:"Analitik Çerezler",description:"Site kullanımını analiz etmemize yardımcı olur"},marketing:{title:"Pazarlama Çerezleri",description:"Kişiselleştirilmiş reklamlar"},essentialOnly:"Sadece Gerekli Olanlar"}},cookiePolicyTitle:"Çerez Politikası",whatAreCookies:"Çerezler Nedir?",cookiesDefinition:"Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza yerleştirilen küçük veri dosyalarıdır. Çerezler, web sitesi sahipleri tarafından web sitelerini daha verimli çalıştırmak ve raporlama bilgileri sağlamak için yaygın olarak kullanılır.",typesOfCookies:"Kullandığımız Çerez Türleri",necessaryCookies:"Gerekli Çerezler",necessaryText:"Bu çerezler, web sitesinin düzgün çalışması için gereklidir. Sayfa gezintisi ve web sitesinin güvenli alanlarına erişim gibi temel işlevleri etkinleştirirler. Web sitesi bu çerezler olmadan düzgün çalışamaz.",analyticsCookies:"Analitik Çerezler",analyticsText:"Bu çerezler, ziyaretçilerin web sitemizle nasıl etkileşime girdiğini anonim olarak bilgi toplayıp rapor ederek anlamamıza yardımcı olur. Bu veriler, web sitemizin performansını ve kullanıcı deneyimini geliştirmemize yardımcı olur.",marketingCookies:"Pazarlama Çerezleri",marketingText:"Bu çerezler, ziyaretçileri web siteleri arasında izlemek için kullanılır. Amaç, bireysel kullanıcı için alakalı ve ilgi çekici ve dolayısıyla yayıncılar ve üçüncü taraf reklamverenler için daha değerli reklamlar görüntülemektir.",howWeUseCookies:"Çerezleri Nasıl Kullanıyoruz",cookieUsageText:"Çerezleri aşağıdaki amaçlar için kullanıyoruz:",ensureFunction:"Web sitemizin düzgün çalışmasını sağlamak için",rememberPreferences:"Tercihlerinizi ve ayarlarınızı hatırlamak için",analyzeTraffic:"Web sitesi trafiğini ve kullanım modellerini analiz etmek için",personalizedContent:"Kişiselleştirilmiş içerik ve reklamlar sağlamak için",improveSecurity:"Web sitemizin güvenliğini ve performansını artırmak için",managingCookies:"Çerez Tercihlerinizi Yönetme",managingText:"Çerezleri çeşitli şekillerde kontrol edebilir ve yönetebilirsiniz. Çoğu web tarayıcısı otomatik olarak çerezleri kabul eder, ancak tercih ederseniz çerezleri reddetmek için tarayıcı ayarlarınızı değiştirebilirsiniz. Lütfen çerezleri devre dışı bırakmanın web sitemizin işlevselliğini etkileyebileceğini unutmayın.",cookieBanner:"Web sitemizi ilk ziyaret ettiğinizde görünen çerez onayı banner'ımız aracılığıyla da çerez tercihlerinizi yönetebilirsiniz.",thirdPartyCookies:"Üçüncü Taraf Çerezleri",thirdPartyText:"Web sitemizdeki bazı çerezler üçüncü taraf hizmetler tarafından yerleştirilir. Bu çerezler üzerinde kontrolümüz yoktur ve ilgili üçüncü tarafların gizlilik politikalarına tabidir.",productNames:{1:"Sinceva Aydınlatıcı Vitamin C Serum 30 ml",2:"Sinceva Leke Karşıtı Arbutin Serum 30 ml",3:"Sinceva Kırışıklık Karşıtı Göz Kremi 20 ml",4:"Sinceva Yaşlanma Karşıtı Gece Kremi 50 ml",5:"Sinceva Cilt Yenileyici Tonik 200 ml",6:"Sinceva Arındırıcı Peeling Krem Scrub 200 ml",7:"Sinceva Arındırıcı Yüz Temizleme Köpüğü 200 ml",8:"Sinceva SPF 50+ Günlük Güneş Koruyucu Krem 100 ml",9:"Sinceva Hyaluronik Asit Nemlendirici Krem 50 ml"},blog:{title:"Trendler ve İpuçları",searchPlaceholder:"Makale ara...",categories:{all:"Tüm Gönderiler",trends:"Cilt Bakımı İpuçları",skincare:"Yaşlanma Karşıtı",ingredients:"Mevsimsel Bakım",routine:"İçerik Odaklı"},readMore:"Devamını Oku"},homepage:{categoriesTitle:"Kategorilerimizi Keşfedin",categoriesSubtitle:"Cildinizin ihtiyaçlarına duyarlılıkla hazırlanmış, özenle seçilmiş Sinceva koleksiyonlarını keşfedin.",exploreCollection:"Koleksiyonu Keşfet",allProductsTitle:"Tüm Ürünlerimiz",allProductsSubtitle:"Güzelliğin başlangıcından ilham alan, her cilt tipi için özenle hazırlanmış Sinceva koleksiyonlarını keşfedin.",loadMore:"Daha Fazla Ürün Yükle"},productCard:{buyNow:"Satın Al",available:"mevcut"},categories:{antiAging:{title:"Yaşlanma Karşıtı Bakım",description:"İnce çizgileri azaltmak, kolajen artırmak ve cildinize gençlik parlaklığını geri kazandırmak için gelişmiş formüller."},cleansing:{title:"Yüz ve Cilt Temizleme",description:"Cildinizi doğal nem dengesini koruyarak arındıran nazik ama etkili temizleyiciler."},dailyCare:{title:"Günlük Bakım",description:"Her gün sağlıklı, korunaklı ve beslenmiş cilt için vazgeçilmez günlük cilt bakım ürünleri."}},newsletter:{successTitle:"Başarılı!",successDesc:"Onay e-postası gönderildi. Lütfen e-postanızı kontrol edin.",errorTitle:"Hata",errorGeneric:"Bir hata oluştu. Lütfen tekrar deneyin.",errorAlreadySubscribed:"Bu e-posta adresi zaten abone.",errorInvalidEmail:"Geçersiz e-posta adresi.",errorRateLimited:"Çok fazla istek. Lütfen biraz bekleyin.",sending:"Gönderiliyor..."}},ar:{productDetails:"تفاصيل المنتج",ingredients:"المكونات",howToUse:"طريقة الاستخدام",faq:"الأسئلة الشائعة",buy:"شراء",discoverProducts:"اكتشف منتجات سينسإيفا",productNotFound:"المنتج غير موجود",productNotFoundDesc:"المنتج المطلوب غير موجود.",home:"اللمعان القديم",shop:"المتجر",about:"من نحن",blogNav:"المدونة",contact:"اتصل بنا",contactNav:"لمسة الجمال",searchPlaceholder:"البحث عن المنتجات...",quickLinks:"روابط سريعة",policies:"السياسات",stayConnected:"ابق على اتصال",newsletterDesc:"اشترك للحصول على نصائح الجمال والعروض الحصرية.",enterEmail:"أدخل بريدك الإلكتروني",subscribe:"اشترك",allRightsReserved:"جميع الحقوق محفوظة.",craftedFor:"صُنعت من أجل الجمال والأناقة الخالدة.",theOriginOfBeauty:"The Origin Of Beauty",trendsAndTips:"الاتجاهات والنصائح",privacyPolicy:"سياسة الخصوصية",cookiePolicy:"سياسة ملفات تعريف الارتباط",termsAndConditions:"الشروط والأحكام",consumerReviewRules:"قواعد تقييم المستهلك",aboutSinceva:"عن سينسإيفا",aboutSubtitle:"منذ حواء - الاسم الذي ألهم رحلتنا نحو الجمال والأناقة الخالدة.",ourStory:"قصتنا",firstTouchTitle:"اللمسة الأولى للجمال",firstTouchText:"ولدت سينسإيفا من رمز قديم: التفاحة. منذ اللحظة التي مدت فيها حواء يدها، رمزت التفاحة إلى البدايات والفضول والتحول وجوهر الجمال نفسه. بالنسبة لنا، ليست مجرد ثمرة قصة؛ إنها جذر فلسفتنا. كما بدأ الجمال في تلك اللحظة الخالدة، نؤمن أن الجمال الحقيقي يبدأ باللمسة الأولى للعناية بالبشرة.",timelessHeritageTitle:"تراث خالد",timelessHeritageText:"نرى التفاحة أكثر من مجرد هدية الطبيعة؛ إنها جسر بين الماضي والحاضر. نقاؤها وحيويتها وقوتها المتجددة منسوجة في كل تركيبة، تمزج الحكمة الموروثة مع علم التجميل الحديث. مع سينسإيفا، العناية بالبشرة ليست مجرد روتين ولكن تراث من الرعاية الذاتية، يعكس الرحلة الأبدية للجمال عبر الزمن.",guidedByMissionTitle:"موجهون بمهمتنا",guidedByMissionText:'شعارنا "The Origin of Beauty" يحمل حقيقة مزدوجة. إنه يكرم قصة البشرية الأولى منذ حواء ويذكر كل امرأة أن الجمال لا يبدأ بالمكياج، بل بالبشرة تحته. مع كل منتج، نؤكد من جديد مهمتنا: الحماية والتجديد والإضاءة، حتى يبدأ الجمال دائمًا في المكان الصحيح، منذ حواء، منذ تلك اللمسة الأولى.',ourValues:"قيمنا",passionForBeauty:"شغف بالجمال",passionDesc:"نؤمن بأن كل شخص يستحق أن يشعر بالجمال والثقة في بشرته.",naturalExcellence:"التميز الطبيعي",naturalDesc:"تجمع منتجاتنا أفضل ما في الطبيعة مع علم العناية بالبشرة المتقدم.",qualityFirst:"الجودة أولاً",qualityDesc:"يخضع كل منتج لاختبارات صارمة لضمان أعلى معايير الجودة.",sustainableFuture:"مستقبل مستدام",sustainableDesc:"نحن ملتزمون بالممارسات المستدامة والمسؤولية البيئية.",committedToSustainability:"ملتزمون بالاستدامة",sustainabilityText1:"في سينسإيفا، ندرك مسؤوليتنا لحماية البيئة للأجيال القادمة. تشمل مبادرات الاستدامة لدينا التعبئة الصديقة للبيئة، والمكونات من مصادر أخلاقية، والشراكات مع الموردين الذين يشاركوننا التزامنا بالإشراف البيئي.",sustainabilityText2:"نسعى باستمرار لتقليل بصمتنا الكربونية مع الحفاظ على أعلى معايير الجودة. لأننا نؤمن بأن الجمال الحقيقي لا ينبغي أبدًا أن يأتي على حساب رفاهية كوكبنا.",contactUs:"اتصل بنا",contactSubtitle:"هل لديك أسئلة حول منتجاتنا أو تحتاج إلى نصيحة للعناية بالبشرة؟ نحن هنا لمساعدتك في رحلة جمالك.",sendMessage:"أرسل لنا رسالة",fullName:"الاسم الكامل",emailAddress:"عنوان البريد الإلكتروني",subject:"الموضوع",message:"الرسالة",sendMessageBtn:"إرسال الرسالة",getInTouch:"تواصل معنا",address:"المكتب",phone:"الهاتف",email:"البريد الإلكتروني",businessHours:"ساعات العمل",interactiveMap:"خريطة تفاعلية",mapIntegration:"سيتم وضع تكامل خرائط Google هنا",addressContent:`Çiftlik Mah. Karayolu Cad. No: 124/B 6
Çiftlikköy/Yalova`,phoneContent:"+90 545 378 21 30",emailContent:"info@sinceva.com",hoursContent:`الإثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً
السبت - الأحد: 10:00 صباحًا - 4:00 مساءً`,enterFullName:"أدخل اسمك الكامل",enterEmailPlaceholder:"أدخل بريدك الإلكتروني",subjectPlaceholder:"ما هو موضوع رسالتك؟",messagePlaceholder:"أخبرنا كيف يمكننا مساعدتك...",messageSentSuccess:"تم إرسال الرسالة بنجاح",messageSentDesc:"سنعود إليك خلال 24 ساعة.",blogPost1Title:"روتين العناية بالبشرة في الشتاء: الخطوات الأساسية للطقس البارد",blogPost1Excerpt:"اكتشف كيفية تكييف روتين العناية بالبشرة خلال أشهر الشتاء للحفاظ على بشرتك رطبة ومتوهجة على الرغم من الظروف الجوية القاسية.",blogPost2Title:"قوة فيتامين سي: حوّل بشرتك",blogPost2Excerpt:"تعرف على الفوائد المذهلة لسيروم فيتامين سي ولماذا يجب أن يكون عنصرًا أساسيًا في روتين العناية اليومية ببشرتك للحصول على بشرة أكثر إشراقًا وتوحيدًا.",blogPost3Title:"أسرار مكافحة الشيخوخة: ابدأ في العشرينات من عمرك",blogPost3Excerpt:"لم يفت الأوان أبدًا للبدء في الاعتناء ببشرتك. اكتشف الممارسات الأساسية لمكافحة الشيخوخة التي يجب أن تدمجها في روتينك اليوم.",privacyPolicyTitle:"سياسة الخصوصية",informationWeCollect:"المعلومات التي نجمعها",informationCollectText:"نجمع المعلومات التي تقدمها لنا مباشرة، مثل عند إنشاء حساب، أو إجراء عملية شراء، أو الاشتراك في نشرتنا الإخبارية، أو الاتصال بنا للحصول على الدعم.",personalIdentifiers:"المعرفات الشخصية (الاسم، عنوان البريد الإلكتروني، رقم الهاتف)",billingAddresses:"عناوين الفوترة والشحن",paymentInfo:"معلومات الدفع (تتم معالجتها بشكل آمن من قبل مزودي طرف ثالث)",purchaseHistory:"سجل الشراء والتفضيلات",communicationPrefs:"تفضيلات الاتصال",howWeUse:"كيف نستخدم معلوماتك",howWeUseText:"نستخدم المعلومات التي نجمعها من أجل:",processOrders:"معالجة وتنفيذ طلباتك",provideSupport:"تقديم خدمة العملاء والدعم",sendMarketing:"إرسال اتصالات تسويقية إليك (بموافقتك)",improveProducts:"تحسين منتجاتنا وخدماتنا",complyLegal:"الامتثال للالتزامات القانونية",detectFraud:"كشف ومنع الاحتيال أو الحوادث الأمنية",informationSharing:"مشاركة المعلومات",informationSharingText:"نحن لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة دون موافقتك، إلا في الظروف التالية:",serviceProviders:"مقدمو الخدمات الذين يساعدوننا في تشغيل موقعنا وأعمالنا",legalRequirements:"المتطلبات القانونية أو لحماية حقوقنا وسلامتنا",businessTransfers:"تحويلات الأعمال (عمليات الدمج أو الاستحواذ أو مبيعات الأصول)",dataSecurity:"أمن البيانات",dataSecurityText:"نطبق تدابير فنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول أو التعديل أو الكشف أو التدمير غير المصرح به.",yourRights:"حقوقك",yourRightsText:"لديك الحق في:",accessInfo:"الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك",correctInfo:"طلب تصحيح المعلومات غير الدقيقة",deleteInfo:"طلب حذف معلوماتك الشخصية",objectProcessing:"الاعتراض على معالجة معلوماتك أو تقييدها",withdrawConsent:"سحب الموافقة حيث تستند المعالجة على الموافقة",contactUsPolicy:"اتصل بنا",contactPolicyText:"إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى الاتصال بنا على:",lastUpdated:"آخر تحديث:",termsTitle:"الشروط والأحكام",acceptanceOfTerms:"قبول الشروط",acceptanceText:"من خلال الوصول إلى هذا الموقع واستخدامه، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية. إذا كنت لا توافق على الالتزام بما سبق، يرجى عدم استخدام هذه الخدمة.",useLicense:"ترخيص الاستخدام",useLicenseText:"يُمنح الإذن بتنزيل نسخة واحدة مؤقتة من المواد على موقعنا للمشاهدة الشخصية غير التجارية المؤقتة فقط. هذا منح ترخيص، وليس نقل ملكية، وبموجب هذا الترخيص لا يجوز لك:",modifyMaterials:"تعديل أو نسخ المواد",commercialUse:"استخدام المواد لأي غرض تجاري أو لأي عرض عام",reverseEngineer:"محاولة الهندسة العكسية لأي برنامج موجود على موقعنا",removeCopyright:"إزالة أي حقوق نشر أو ملاحظات ملكية أخرى من المواد",productInformation:"معلومات المنتج",productInfoText:"نسعى جاهدين لتقديم معلومات دقيقة عن المنتج على موقعنا. ومع ذلك، فإننا لا نضمن أن أوصاف المنتج أو التسعير أو المحتوى الآخر دقيق أو كامل أو موثوق أو حالي أو خالٍ من الأخطاء.",ordersPayment:"الطلبات والدفع",ordersPaymentText:"تنطبق الشروط التالية على الطلبات والمدفوعات:",ordersSubject:"جميع الطلبات تخضع للقبول والتوافر",reserveRight:"نحتفظ بالحق في رفض أو إلغاء أي طلب",paymentRequired:"يجب استلام الدفع قبل معالجة الطلب",pricesSubject:"الأسعار قابلة للتغيير دون إشعار مسبق",returnsRefunds:"الإرجاع والاسترداد",returnsText:"نحن نقدم سياسة إرجاع لمدة 14 يومًا للمنتجات غير المفتوحة في عبواتها الأصلية. تكاليف شحن الإرجاع هي مسؤولية العميل ما لم يكن الإرجاع بسبب خطأنا.",limitationLiability:"تحديد المسؤولية",limitationText:"في أي حال من الأحوال لن تكون شركة سينسإيفا أو مورديها مسؤولين عن أي أضرار (بما في ذلك، على سبيل المثال لا الحصر، الأضرار الناجمة عن فقدان البيانات أو الربح، أو بسبب انقطاع الأعمال) الناشئة عن استخدام أو عدم القدرة على استخدام موقعنا أو منتجاتنا، حتى لو تم إخطارنا شفهيًا أو كتابيًا بإمكانية حدوث مثل هذا الضرر.",governingLaw:"القانون الحاكم",governingText:"تخضع هذه الشروط والأحكام وتُفسر وفقًا لقوانين تركيا، وأنت توافق بشكل لا رجعة فيه على الاختصاص القضائي الحصري للمحاكم في تلك الولاية أو الموقع.",reviewRulesTitle:"قواعد تقييم المستهلك",reviewGuidelines:"إرشادات التقييم",reviewGuidelinesText:"نشجع التقييمات الصادقة والمفيدة من عملائنا. لضمان جودة وأصالة التقييمات على منصتنا، يرجى اتباع هذه الإرشادات عند إرسال تقييمك.",acceptableContent:"محتوى التقييم المقبول",reviewsShouldText:"يجب أن تكون التقييمات:",basedOnExperience:"مبنية على تجربتك الشخصية مع المنتج",honestFeedback:"توفير ملاحظات صادقة وبناءة",focusQuality:"التركيز على جودة المنتج وفعاليته وقيمته",includeDetails:"تتضمن تفاصيل محددة حول تجربتك",respectfulLanguage:"محترمة ومناسبة في اللغة",relevantProduct:"ذات صلة بالمنتج الذي يتم تقييمه",prohibitedContent:"المحتوى المحظور",reviewsMustNot:"يجب ألا تحتوي التقييمات على:",offensiveLanguage:"لغة مسيئة أو تمييزية أو غير لائقة",personalInfo:"معلومات شخصية عن الأفراد",spamContent:"بريد عشوائي أو محتوى ترويجي أو إعلانات",falseInfo:"معلومات كاذبة أو مضللة",violateIP:"محتوى ينتهك حقوق الملكية الفكرية",notPurchased:"تقييمات للمنتجات التي لم تشتريها أو تستخدمها",defamatoryStatements:"بيانات تشهيرية عن المنافسين",reviewVerification:"التحقق من التقييم",verificationText:"للحفاظ على الأصالة، قد نتحقق من أن المراجعين قد اشتروا بالفعل المنتجات التي يراجعونها. ستتم وضع علامة واضحة على مراجعات الشراء الموثقة على موقعنا.",moderationProcess:"عملية الإشراف",moderationText:"جميع التقييمات تخضع للإشراف قبل النشر. نحتفظ بالحق في:",reviewApprove:"مراجعة والموافقة على المحتوى المقدم",editRemove:"تحرير أو إزالة المحتوى غير المناسب",rejectReviews:"رفض التقييمات التي تنتهك إرشاداتنا",removeReported:"إزالة التقييمات التي أبلغ عنها المستخدمون",incentivizedReviews:"التقييمات الممنوحة",incentivizedText:"يجب الإفصاح بوضوح عن التقييمات مقابل التعويض أو المنتجات المجانية أو الحوافز الأخرى. قد يؤدي الفشل في الكشف عن مثل هذه العلاقات إلى إزالة التقييم وتعليق الحساب.",reportingReviews:"الإبلاغ عن التقييمات غير المناسبة",reportingText:'إذا وجدت تقييمًا ينتهك إرشاداتنا، يرجى الإبلاغ عنه باستخدام وظيفة "الإبلاغ عن التقييم" أو الاتصال بفريق خدمة العملاء لدينا.',reviewerRights:"حقوقك",reviewerRightsText:"كمراجع، تحتفظ بملكية محتوى تقييمك. ومع ذلك، من خلال إرسال تقييم، فإنك تمنحنا ترخيصًا لاستخدام تقييمك وعرضه وتوزيعه على منصتنا ومواد التسويق الخاصة بنا.",cookieConsent:{banner:{title:"نحن نستخدم ملفات تعريف الارتباط",message:"نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك وتخصيص المحتوى وتحليل حركة المرور لدينا. من خلال الاستمرار في استخدام موقعنا، فإنك توافق على استخدامنا لملفات تعريف الارتباط.",learnMore:"معرفة المزيد",preferences:"التفضيلات",reject:"رفض",acceptAll:"قبول الكل"},preferences:{title:"تفضيلات ملفات تعريف الارتباط",necessary:{title:"ملفات تعريف الارتباط الضرورية",description:"مطلوبة لوظائف الموقع",alwaysActive:"نشط دائمًا"},analytics:{title:"ملفات تعريف الارتباط التحليلية",description:"يساعدنا في تحليل استخدام الموقع"},marketing:{title:"ملفات تعريف الارتباط التسويقية",description:"إعلانات مخصصة"},essentialOnly:"الضروريات فقط"}},cookiePolicyTitle:"سياسة ملفات تعريف الارتباط",whatAreCookies:"ما هي ملفات تعريف الارتباط؟",cookiesDefinition:"ملفات تعريف الارتباط هي ملفات بيانات صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك عند زيارة موقع ويب. تستخدم ملفات تعريف الارتباط على نطاق واسع من قبل مالكي مواقع الويب لجعل مواقعهم الإلكترونية تعمل بشكل أكثر كفاءة ولتقديم معلومات التقارير.",typesOfCookies:"أنواع ملفات تعريف الارتباط التي نستخدمها",necessaryCookies:"ملفات تعريف الارتباط الضرورية",necessaryText:"هذه الملفات ضرورية لكي يعمل الموقع بشكل صحيح. إنها تمكّن الوظائف الأساسية مثل التنقل في الصفحة والوصول إلى المناطق الآمنة في الموقع. لا يمكن أن يعمل الموقع بشكل صحيح بدون هذه الملفات.",analyticsCookies:"ملفات تعريف الارتباط التحليلية",analyticsText:"تساعدنا هذه الملفات على فهم كيفية تفاعل الزوار مع موقعنا من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول. تساعدنا هذه البيانات على تحسين أداء موقعنا وتجربة المستخدم.",marketingCookies:"ملفات تعريف الارتباط التسويقية",marketingText:"تُستخدم هذه الملفات لتتبع الزوار عبر مواقع الويب. الهدف هو عرض إعلانات ذات صلة وجذابة للمستخدم الفردي وبالتالي أكثر قيمة للناشرين والمعلنين من طرف ثالث.",howWeUseCookies:"كيف نستخدم ملفات تعريف الارتباط",cookieUsageText:"نستخدم ملفات تعريف الارتباط للأغراض التالية:",ensureFunction:"لضمان عمل موقعنا بشكل صحيح",rememberPreferences:"لتذكر تفضيلاتك وإعداداتك",analyzeTraffic:"لتحليل حركة المرور على الموقع وأنماط الاستخدام",personalizedContent:"لتقديم محتوى وإعلانات مخصصة",improveSecurity:"لتحسين أمان وأداء موقعنا",managingCookies:"إدارة تفضيلات ملفات تعريف الارتباط",managingText:"يمكنك التحكم في ملفات تعريف الارتباط وإدارتها بطرق مختلفة. تقبل معظم متصفحات الويب ملفات تعريف الارتباط تلقائيًا، ولكن يمكنك تعديل إعدادات المتصفح لرفض ملفات تعريف الارتباط إذا كنت تفضل ذلك. يرجى ملاحظة أن تعطيل ملفات تعريف الارتباط قد يؤثر على وظائف موقعنا.",cookieBanner:"يمكنك أيضًا إدارة تفضيلات ملفات تعريف الارتباط من خلال لافتة موافقة ملفات تعريف الارتباط التي تظهر عند زيارتك الأولى لموقعنا.",thirdPartyCookies:"ملفات تعريف الارتباط من طرف ثالث",thirdPartyText:"بعض ملفات تعريف الارتباط على موقعنا يتم وضعها بواسطة خدمات طرف ثالث. ليس لدينا سيطرة على هذه الملفات وهي محكومة بسياسات الخصوصية الخاصة بالأطراف الثالثة المعنية.",productNames:{1:"سيروم سينسإيفا المشرق بفيتامين سي 30 مل",2:"سيروم سينسإيفا المضاد للبقع بالأربوتين 30 مل",3:"كريم سينسإيفا المضاد للتجاعيد لمحيط العين 20 مل",4:"كريم سينسإيفا الليلي المضاد لعلامات التقدم بالعمر 50 مل",5:"تونر سينسإيفا لتجديد البشرة 200 مل",6:"سكراب كريم سينسإيفا المنقي للبشرة 200 مل",7:"رغوة سينسإيفا المنقية لتنظيف الوجه 200 مل",8:"كريم سينسإيفا للحماية اليومية من الشمس SPF 50+ 100 مل",9:"كريم سينسإيفا المرطب بحمض الهيالورونيك 50 مل"},blog:{title:"الاتجاهات والنصائح",searchPlaceholder:"البحث في المقالات...",categories:{all:"جميع المنشورات",trends:"نصائح العناية بالبشرة",skincare:"مكافحة الشيخوخة",ingredients:"العناية الموسمية",routine:"تركيز المكونات"},readMore:"اقرأ المزيد"},homepage:{categoriesTitle:"استكشف فئاتنا",categoriesSubtitle:"اكتشف مجموعات سينسيفا المختارة بعناية والمُعدة بحساسية لاحتياجات بشرتك.",exploreCollection:"استكشف المجموعة",allProductsTitle:"جميع منتجاتنا",allProductsSubtitle:"اكتشف مجموعات سينسيفا المستوحاة من أصل الجمال، والمصنوعة بعناية لكل نوع بشرة.",loadMore:"تحميل المزيد من المنتجات"},productCard:{buyNow:"اشتري الآن",available:"متاح"},categories:{antiAging:{title:"العناية المضادة للشيخوخة",description:"تركيبات متقدمة لتقليل الخطوط الدقيقة، وتعزيز الكولاجين، واستعادة إشراقة الشباب لبشرتك."},cleansing:{title:"تنظيف الوجه والبشرة",description:"منظفات لطيفة وفعالة تنقي بشرتك مع الحفاظ على توازن الرطوبة الطبيعي."},dailyCare:{title:"العناية اليومية",description:"منتجات العناية بالبشرة اليومية الأساسية لبشرة صحية ومحمية ومغذية كل يوم."}},newsletter:{successTitle:"نجاح!",successDesc:"تم إرسال بريد التأكيد. يرجى التحقق من بريدك الإلكتروني.",errorTitle:"خطأ",errorGeneric:"حدث خطأ. يرجى المحاولة مرة أخرى.",errorAlreadySubscribed:"هذا البريد الإلكتروني مشترك بالفعل.",errorInvalidEmail:"عنوان بريد إلكتروني غير صالح.",errorRateLimited:"طلبات كثيرة جداً. يرجى الانتظار قليلاً.",sending:"جاري الإرسال..."}}},PE=({isVisible:e})=>(_e(),e?r.jsx("div",{className:`absolute top-full left-0 right-0 bg-white border-b border-border shadow-elegant z-40 md:block ${e?"fixed md:absolute inset-x-0 top-0 md:top-full max-h-screen md:h-auto overflow-y-auto md:overflow-visible":""}`,children:r.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-8 pt-6 md:pt-8",children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:EE.megaMenuCategories.map(t=>r.jsxs("div",{className:"space-y-4",children:[r.jsx(ae,{to:`/category/${t.category.toLowerCase().replace(/\s+/g,"-").replace(/&/g,"and")}`,className:"text-lg font-semibold text-primary hover:text-primary-dark transition-colors inline-block",children:t.category}),r.jsx("ul",{className:"space-y-2",children:t.items.map(n=>r.jsx("li",{children:r.jsx(ae,{to:n.href,className:"text-muted-foreground hover:text-primary transition-colors text-sm inline-block",children:n.name})},n.name))})]},t.category))})})}):null),sp=({results:e,isVisible:t,isLoading:n,error:a,onResultClick:i})=>t?r.jsxs("div",{className:"relative w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden",children:[n&&r.jsx("div",{className:"p-4 text-center text-gray-600 dark:text-gray-400",children:"Searching..."}),a&&r.jsx("div",{className:"p-4 text-center text-gray-600 dark:text-gray-400",children:a}),!n&&!a&&e.length===0&&r.jsx("div",{className:"p-4 text-center text-gray-600 dark:text-gray-400",children:"No products or blog posts found."}),!n&&!a&&e.length>0&&r.jsx("div",{className:"max-h-80 overflow-y-auto",children:e.map(l=>r.jsxs(ae,{to:l.url,onClick:i,className:"flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-600 last:border-b-0",children:[r.jsx("div",{className:"w-12 h-12 flex-shrink-0 mr-3 bg-gray-100 dark:bg-gray-600 rounded overflow-hidden",children:l.image?r.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-cover",onError:s=>{const o=s.target;o.style.display="none"}}):r.jsx("div",{className:"w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs font-medium",children:l.type==="product"?"P":"B"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("div",{className:"font-medium text-gray-900 dark:text-white truncate",children:l.title}),r.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1",children:l.description}),r.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:r.jsx("span",{className:`inline-block px-2 py-0.5 rounded text-xs font-medium ${l.type==="product"?"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"}`,children:l.type==="product"?"Product":"Blog"})})]})]},l.id))})]}):null;var ME=f.createContext(void 0);function jc(e){const t=f.useContext(ME);return e||t||"ltr"}var Mu=0;function Hb(){f.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??op()),document.body.insertAdjacentElement("beforeend",e[1]??op()),Mu++,()=>{Mu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Mu--}},[])}function op(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Ru="focusScope.autoFocusOnMount",Du="focusScope.autoFocusOnUnmount",cp={bubbles:!1,cancelable:!0},RE="FocusScope",Rf=f.forwardRef((e,t)=>{const{loop:n=!1,trapped:a=!1,onMountAutoFocus:i,onUnmountAutoFocus:l,...s}=e,[o,c]=f.useState(null),u=Tt(i),d=Tt(l),m=f.useRef(null),h=ye(t,k=>c(k)),p=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(a){let k=function(b){if(p.paused||!o)return;const z=b.target;o.contains(z)?m.current=z:ua(m.current,{select:!0})},v=function(b){if(p.paused||!o)return;const z=b.relatedTarget;z!==null&&(o.contains(z)||ua(m.current,{select:!0}))},g=function(b){if(document.activeElement===document.body)for(const S of b)S.removedNodes.length>0&&ua(o)};document.addEventListener("focusin",k),document.addEventListener("focusout",v);const y=new MutationObserver(g);return o&&y.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",k),document.removeEventListener("focusout",v),y.disconnect()}}},[a,o,p.paused]),f.useEffect(()=>{if(o){dp.add(p);const k=document.activeElement;if(!o.contains(k)){const g=new CustomEvent(Ru,cp);o.addEventListener(Ru,u),o.dispatchEvent(g),g.defaultPrevented||(DE(OE(_b(o)),{select:!0}),document.activeElement===k&&ua(o))}return()=>{o.removeEventListener(Ru,u),setTimeout(()=>{const g=new CustomEvent(Du,cp);o.addEventListener(Du,d),o.dispatchEvent(g),g.defaultPrevented||ua(k??document.body,{select:!0}),o.removeEventListener(Du,d),dp.remove(p)},0)}}},[o,u,d,p]);const x=f.useCallback(k=>{if(!n&&!a||p.paused)return;const v=k.key==="Tab"&&!k.altKey&&!k.ctrlKey&&!k.metaKey,g=document.activeElement;if(v&&g){const y=k.currentTarget,[b,z]=IE(y);b&&z?!k.shiftKey&&g===z?(k.preventDefault(),n&&ua(b,{select:!0})):k.shiftKey&&g===b&&(k.preventDefault(),n&&ua(z,{select:!0})):g===y&&k.preventDefault()}},[n,a,p.paused]);return r.jsx(ee.div,{tabIndex:-1,...s,ref:h,onKeyDown:x})});Rf.displayName=RE;function DE(e,{select:t=!1}={}){const n=document.activeElement;for(const a of e)if(ua(a,{select:t}),document.activeElement!==n)return}function IE(e){const t=_b(e),n=up(t,e),a=up(t.reverse(),e);return[n,a]}function _b(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const i=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||i?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function up(e,t){for(const n of e)if(!LE(n,{upTo:t}))return n}function LE(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function FE(e){return e instanceof HTMLInputElement&&"select"in e}function ua(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&FE(e)&&t&&e.select()}}var dp=BE();function BE(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=mp(e,t),e.unshift(t)},remove(t){var n;e=mp(e,t),(n=e[0])==null||n.resume()}}}function mp(e,t){const n=[...e],a=n.indexOf(t);return a!==-1&&n.splice(a,1),n}function OE(e){return e.filter(t=>t.tagName!=="A")}var Iu="rovingFocusGroup.onEntryFocus",KE={bubbles:!1,cancelable:!0},Ul="RovingFocusGroup",[Jd,Gb,HE]=mc(Ul),[_E,Nc]=Rt(Ul,[HE]),[GE,UE]=_E(Ul),Ub=f.forwardRef((e,t)=>r.jsx(Jd.Provider,{scope:e.__scopeRovingFocusGroup,children:r.jsx(Jd.Slot,{scope:e.__scopeRovingFocusGroup,children:r.jsx(YE,{...e,ref:t})})}));Ub.displayName=Ul;var YE=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:a,loop:i=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:o,onCurrentTabStopIdChange:c,onEntryFocus:u,preventScrollOnEntryFocus:d=!1,...m}=e,h=f.useRef(null),p=ye(t,h),x=jc(l),[k,v]=Jn({prop:s,defaultProp:o??null,onChange:c,caller:Ul}),[g,y]=f.useState(!1),b=Tt(u),z=Gb(n),S=f.useRef(!1),[C,j]=f.useState(0);return f.useEffect(()=>{const w=h.current;if(w)return w.addEventListener(Iu,b),()=>w.removeEventListener(Iu,b)},[b]),r.jsx(GE,{scope:n,orientation:a,dir:x,loop:i,currentTabStopId:k,onItemFocus:f.useCallback(w=>v(w),[v]),onItemShiftTab:f.useCallback(()=>y(!0),[]),onFocusableItemAdd:f.useCallback(()=>j(w=>w+1),[]),onFocusableItemRemove:f.useCallback(()=>j(w=>w-1),[]),children:r.jsx(ee.div,{tabIndex:g||C===0?-1:0,"data-orientation":a,...m,ref:p,style:{outline:"none",...e.style},onMouseDown:Y(e.onMouseDown,()=>{S.current=!0}),onFocus:Y(e.onFocus,w=>{const A=!S.current;if(w.target===w.currentTarget&&A&&!g){const P=new CustomEvent(Iu,KE);if(w.currentTarget.dispatchEvent(P),!P.defaultPrevented){const F=z().filter(O=>O.focusable),N=F.find(O=>O.active),B=F.find(O=>O.id===k),$=[N,B,...F].filter(Boolean).map(O=>O.ref.current);Vb($,d)}}S.current=!1}),onBlur:Y(e.onBlur,()=>y(!1))})})}),Yb="RovingFocusGroupItem",$b=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:a=!0,active:i=!1,tabStopId:l,children:s,...o}=e,c=_n(),u=l||c,d=UE(Yb,n),m=d.currentTabStopId===u,h=Gb(n),{onFocusableItemAdd:p,onFocusableItemRemove:x,currentTabStopId:k}=d;return f.useEffect(()=>{if(a)return p(),()=>x()},[a,p,x]),r.jsx(Jd.ItemSlot,{scope:n,id:u,focusable:a,active:i,children:r.jsx(ee.span,{tabIndex:m?0:-1,"data-orientation":d.orientation,...o,ref:t,onMouseDown:Y(e.onMouseDown,v=>{a?d.onItemFocus(u):v.preventDefault()}),onFocus:Y(e.onFocus,()=>d.onItemFocus(u)),onKeyDown:Y(e.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){d.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const g=qE(v,d.orientation,d.dir);if(g!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||v.shiftKey)return;v.preventDefault();let b=h().filter(z=>z.focusable).map(z=>z.ref.current);if(g==="last")b.reverse();else if(g==="prev"||g==="next"){g==="prev"&&b.reverse();const z=b.indexOf(v.currentTarget);b=d.loop?WE(b,z+1):b.slice(z+1)}setTimeout(()=>Vb(b))}}),children:typeof s=="function"?s({isCurrentTabStop:m,hasTabStop:k!=null}):s})})});$b.displayName=Yb;var $E={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function VE(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function qE(e,t,n){const a=VE(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return $E[a]}function Vb(e,t=!1){const n=document.activeElement;for(const a of e)if(a===n||(a.focus({preventScroll:t}),document.activeElement!==n))return}function WE(e,t){return e.map((n,a)=>e[(t+a)%e.length])}var qb=Ub,Wb=$b,QE=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},bi=new WeakMap,Ls=new WeakMap,Fs={},Lu=0,Qb=function(e){return e&&(e.host||Qb(e.parentNode))},XE=function(e,t){return t.map(function(n){if(e.contains(n))return n;var a=Qb(n);return a&&e.contains(a)?a:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},ZE=function(e,t,n,a){var i=XE(t,Array.isArray(e)?e:[e]);Fs[n]||(Fs[n]=new WeakMap);var l=Fs[n],s=[],o=new Set,c=new Set(i),u=function(m){!m||o.has(m)||(o.add(m),u(m.parentNode))};i.forEach(u);var d=function(m){!m||c.has(m)||Array.prototype.forEach.call(m.children,function(h){if(o.has(h))d(h);else try{var p=h.getAttribute(a),x=p!==null&&p!=="false",k=(bi.get(h)||0)+1,v=(l.get(h)||0)+1;bi.set(h,k),l.set(h,v),s.push(h),k===1&&x&&Ls.set(h,!0),v===1&&h.setAttribute(n,"true"),x||h.setAttribute(a,"true")}catch(g){console.error("aria-hidden: cannot operate on ",h,g)}})};return d(t),o.clear(),Lu++,function(){s.forEach(function(m){var h=bi.get(m)-1,p=l.get(m)-1;bi.set(m,h),l.set(m,p),h||(Ls.has(m)||m.removeAttribute(a),Ls.delete(m)),p||m.removeAttribute(n)}),Lu--,Lu||(bi=new WeakMap,bi=new WeakMap,Ls=new WeakMap,Fs={})}},Xb=function(e,t,n){n===void 0&&(n="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),i=QE(e);return i?(a.push.apply(a,Array.from(i.querySelectorAll("[aria-live]"))),ZE(a,i,n,"aria-hidden")):function(){return null}},bn=function(){return bn=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},bn.apply(this,arguments)};function Zb(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n}function JE(e,t,n){if(n||arguments.length===2)for(var a=0,i=t.length,l;a<i;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var so="right-scroll-bar-position",oo="width-before-scroll-bar",eT="with-scroll-bars-hidden",tT="--removed-body-scroll-bar-size";function Fu(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function nT(e,t){var n=f.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(a){var i=n.value;i!==a&&(n.value=a,n.callback(a,i))}}}})[0];return n.callback=t,n.facade}var aT=typeof window<"u"?f.useLayoutEffect:f.useEffect,fp=new WeakMap;function iT(e,t){var n=nT(null,function(a){return e.forEach(function(i){return Fu(i,a)})});return aT(function(){var a=fp.get(n);if(a){var i=new Set(a),l=new Set(e),s=n.current;i.forEach(function(o){l.has(o)||Fu(o,null)}),l.forEach(function(o){i.has(o)||Fu(o,s)})}fp.set(n,e)},[e]),n}function rT(e){return e}function lT(e,t){t===void 0&&(t=rT);var n=[],a=!1,i={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(l){var s=t(l,a);return n.push(s),function(){n=n.filter(function(o){return o!==s})}},assignSyncMedium:function(l){for(a=!0;n.length;){var s=n;n=[],s.forEach(l)}n={push:function(o){return l(o)},filter:function(){return n}}},assignMedium:function(l){a=!0;var s=[];if(n.length){var o=n;n=[],o.forEach(l),s=n}var c=function(){var d=s;s=[],d.forEach(l)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(d){s.push(d),u()},filter:function(d){return s=s.filter(d),n}}}};return i}function sT(e){e===void 0&&(e={});var t=lT(null);return t.options=bn({async:!0,ssr:!1},e),t}var Jb=function(e){var t=e.sideCar,n=Zb(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw new Error("Sidecar medium not found");return f.createElement(a,bn({},n))};Jb.isSideCarExport=!0;function oT(e,t){return e.useMedium(t),Jb}var ex=sT(),Bu=function(){},Ac=f.forwardRef(function(e,t){var n=f.useRef(null),a=f.useState({onScrollCapture:Bu,onWheelCapture:Bu,onTouchMoveCapture:Bu}),i=a[0],l=a[1],s=e.forwardProps,o=e.children,c=e.className,u=e.removeScrollBar,d=e.enabled,m=e.shards,h=e.sideCar,p=e.noRelative,x=e.noIsolation,k=e.inert,v=e.allowPinchZoom,g=e.as,y=g===void 0?"div":g,b=e.gapMode,z=Zb(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=h,C=iT([n,t]),j=bn(bn({},z),i);return f.createElement(f.Fragment,null,d&&f.createElement(S,{sideCar:ex,removeScrollBar:u,shards:m,noRelative:p,noIsolation:x,inert:k,setCallbacks:l,allowPinchZoom:!!v,lockRef:n,gapMode:b}),s?f.cloneElement(f.Children.only(o),bn(bn({},j),{ref:C})):f.createElement(y,bn({},j,{className:c,ref:C}),o))});Ac.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ac.classNames={fullWidth:oo,zeroRight:so};var cT=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function uT(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=cT();return t&&e.setAttribute("nonce",t),e}function dT(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function mT(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var fT=function(){var e=0,t=null;return{add:function(n){e==0&&(t=uT())&&(dT(t,n),mT(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},hT=function(){var e=fT();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},tx=function(){var e=hT(),t=function(n){var a=n.styles,i=n.dynamic;return e(a,i),null};return t},yT={left:0,top:0,right:0,gap:0},Ou=function(e){return parseInt(e||"",10)||0},pT=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],a=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[Ou(n),Ou(a),Ou(i)]},kT=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return yT;var t=pT(e),n=document.documentElement.clientWidth,a=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,a-n+t[2]-t[0])}},gT=tx(),Gi="data-scroll-locked",vT=function(e,t,n,a){var i=e.left,l=e.top,s=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(eT,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(o,"px ").concat(a,`;
  }
  body[`).concat(Gi,`] {
    overflow: hidden `).concat(a,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(a,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(l,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(a,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(a,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(so,` {
    right: `).concat(o,"px ").concat(a,`;
  }
  
  .`).concat(oo,` {
    margin-right: `).concat(o,"px ").concat(a,`;
  }
  
  .`).concat(so," .").concat(so,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(oo," .").concat(oo,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(Gi,`] {
    `).concat(tT,": ").concat(o,`px;
  }
`)},hp=function(){var e=parseInt(document.body.getAttribute(Gi)||"0",10);return isFinite(e)?e:0},bT=function(){f.useEffect(function(){return document.body.setAttribute(Gi,(hp()+1).toString()),function(){var e=hp()-1;e<=0?document.body.removeAttribute(Gi):document.body.setAttribute(Gi,e.toString())}},[])},xT=function(e){var t=e.noRelative,n=e.noImportant,a=e.gapMode,i=a===void 0?"margin":a;bT();var l=f.useMemo(function(){return kT(i)},[i]);return f.createElement(gT,{styles:vT(l,!t,i,n?"":"!important")})},em=!1;if(typeof window<"u")try{var Bs=Object.defineProperty({},"passive",{get:function(){return em=!0,!0}});window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{em=!1}var xi=em?{passive:!1}:!1,zT=function(e){return e.tagName==="TEXTAREA"},nx=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!zT(e)&&n[t]==="visible")},wT=function(e){return nx(e,"overflowY")},ST=function(e){return nx(e,"overflowX")},yp=function(e,t){var n=t.ownerDocument,a=t;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var i=ax(e,a);if(i){var l=ix(e,a),s=l[1],o=l[2];if(s>o)return!0}a=a.parentNode}while(a&&a!==n.body);return!1},CT=function(e){var t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight;return[t,n,a]},jT=function(e){var t=e.scrollLeft,n=e.scrollWidth,a=e.clientWidth;return[t,n,a]},ax=function(e,t){return e==="v"?wT(t):ST(t)},ix=function(e,t){return e==="v"?CT(t):jT(t)},NT=function(e,t){return e==="h"&&t==="rtl"?-1:1},AT=function(e,t,n,a,i){var l=NT(e,window.getComputedStyle(t).direction),s=l*a,o=n.target,c=t.contains(o),u=!1,d=s>0,m=0,h=0;do{if(!o)break;var p=ix(e,o),x=p[0],k=p[1],v=p[2],g=k-v-l*x;(x||g)&&ax(e,o)&&(m+=g,h+=x);var y=o.parentNode;o=y&&y.nodeType===Node.DOCUMENT_FRAGMENT_NODE?y.host:y}while(!c&&o!==document.body||c&&(t.contains(o)||t===o));return(d&&(Math.abs(m)<1||!i)||!d&&(Math.abs(h)<1||!i))&&(u=!0),u},Os=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},pp=function(e){return[e.deltaX,e.deltaY]},kp=function(e){return e&&"current"in e?e.current:e},ET=function(e,t){return e[0]===t[0]&&e[1]===t[1]},TT=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},PT=0,zi=[];function MT(e){var t=f.useRef([]),n=f.useRef([0,0]),a=f.useRef(),i=f.useState(PT++)[0],l=f.useState(tx)[0],s=f.useRef(e);f.useEffect(function(){s.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var k=JE([e.lockRef.current],(e.shards||[]).map(kp),!0).filter(Boolean);return k.forEach(function(v){return v.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),k.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var o=f.useCallback(function(k,v){if("touches"in k&&k.touches.length===2||k.type==="wheel"&&k.ctrlKey)return!s.current.allowPinchZoom;var g=Os(k),y=n.current,b="deltaX"in k?k.deltaX:y[0]-g[0],z="deltaY"in k?k.deltaY:y[1]-g[1],S,C=k.target,j=Math.abs(b)>Math.abs(z)?"h":"v";if("touches"in k&&j==="h"&&C.type==="range")return!1;var w=yp(j,C);if(!w)return!0;if(w?S=j:(S=j==="v"?"h":"v",w=yp(j,C)),!w)return!1;if(!a.current&&"changedTouches"in k&&(b||z)&&(a.current=S),!S)return!0;var A=a.current||S;return AT(A,v,k,A==="h"?b:z,!0)},[]),c=f.useCallback(function(k){var v=k;if(!(!zi.length||zi[zi.length-1]!==l)){var g="deltaY"in v?pp(v):Os(v),y=t.current.filter(function(S){return S.name===v.type&&(S.target===v.target||v.target===S.shadowParent)&&ET(S.delta,g)})[0];if(y&&y.should){v.cancelable&&v.preventDefault();return}if(!y){var b=(s.current.shards||[]).map(kp).filter(Boolean).filter(function(S){return S.contains(v.target)}),z=b.length>0?o(v,b[0]):!s.current.noIsolation;z&&v.cancelable&&v.preventDefault()}}},[]),u=f.useCallback(function(k,v,g,y){var b={name:k,delta:v,target:g,should:y,shadowParent:RT(g)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(z){return z!==b})},1)},[]),d=f.useCallback(function(k){n.current=Os(k),a.current=void 0},[]),m=f.useCallback(function(k){u(k.type,pp(k),k.target,o(k,e.lockRef.current))},[]),h=f.useCallback(function(k){u(k.type,Os(k),k.target,o(k,e.lockRef.current))},[]);f.useEffect(function(){return zi.push(l),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:h}),document.addEventListener("wheel",c,xi),document.addEventListener("touchmove",c,xi),document.addEventListener("touchstart",d,xi),function(){zi=zi.filter(function(k){return k!==l}),document.removeEventListener("wheel",c,xi),document.removeEventListener("touchmove",c,xi),document.removeEventListener("touchstart",d,xi)}},[]);var p=e.removeScrollBar,x=e.inert;return f.createElement(f.Fragment,null,x?f.createElement(l,{styles:TT(i)}):null,p?f.createElement(xT,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function RT(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const DT=oT(ex,MT);var Df=f.forwardRef(function(e,t){return f.createElement(Ac,bn({},e,{ref:t,sideCar:DT}))});Df.classNames=Ac.classNames;var tm=["Enter"," "],IT=["ArrowDown","PageUp","Home"],rx=["ArrowUp","PageDown","End"],LT=[...IT,...rx],FT={ltr:[...tm,"ArrowRight"],rtl:[...tm,"ArrowLeft"]},BT={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Yl="Menu",[wl,OT,KT]=mc(Yl),[hi,lx]=Rt(Yl,[KT,bc,Nc]),Ec=bc(),sx=Nc(),[HT,yi]=hi(Yl),[_T,$l]=hi(Yl),ox=e=>{const{__scopeMenu:t,open:n=!1,children:a,dir:i,onOpenChange:l,modal:s=!0}=e,o=Ec(t),[c,u]=f.useState(null),d=f.useRef(!1),m=Tt(l),h=jc(i);return f.useEffect(()=>{const p=()=>{d.current=!0,document.addEventListener("pointerdown",x,{capture:!0,once:!0}),document.addEventListener("pointermove",x,{capture:!0,once:!0})},x=()=>d.current=!1;return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("pointermove",x,{capture:!0})}},[]),r.jsx(y2,{...o,children:r.jsx(HT,{scope:t,open:n,onOpenChange:m,content:c,onContentChange:u,children:r.jsx(_T,{scope:t,onClose:f.useCallback(()=>m(!1),[m]),isUsingKeyboardRef:d,dir:h,modal:s,children:a})})})};ox.displayName=Yl;var GT="MenuAnchor",If=f.forwardRef((e,t)=>{const{__scopeMenu:n,...a}=e,i=Ec(n);return r.jsx(fb,{...i,...a,ref:t})});If.displayName=GT;var Lf="MenuPortal",[UT,cx]=hi(Lf,{forceMount:void 0}),ux=e=>{const{__scopeMenu:t,forceMount:n,children:a,container:i}=e,l=yi(Lf,t);return r.jsx(UT,{scope:t,forceMount:n,children:r.jsx(_t,{present:n||l.open,children:r.jsx(fc,{asChild:!0,container:i,children:a})})})};ux.displayName=Lf;var Ot="MenuContent",[YT,Ff]=hi(Ot),dx=f.forwardRef((e,t)=>{const n=cx(Ot,e.__scopeMenu),{forceMount:a=n.forceMount,...i}=e,l=yi(Ot,e.__scopeMenu),s=$l(Ot,e.__scopeMenu);return r.jsx(wl.Provider,{scope:e.__scopeMenu,children:r.jsx(_t,{present:a||l.open,children:r.jsx(wl.Slot,{scope:e.__scopeMenu,children:s.modal?r.jsx($T,{...i,ref:t}):r.jsx(VT,{...i,ref:t})})})})}),$T=f.forwardRef((e,t)=>{const n=yi(Ot,e.__scopeMenu),a=f.useRef(null),i=ye(t,a);return f.useEffect(()=>{const l=a.current;if(l)return Xb(l)},[]),r.jsx(Bf,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:Y(e.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),VT=f.forwardRef((e,t)=>{const n=yi(Ot,e.__scopeMenu);return r.jsx(Bf,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),qT=sr("MenuContent.ScrollLock"),Bf=f.forwardRef((e,t)=>{const{__scopeMenu:n,loop:a=!1,trapFocus:i,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:o,onEntryFocus:c,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:m,onInteractOutside:h,onDismiss:p,disableOutsideScroll:x,...k}=e,v=yi(Ot,n),g=$l(Ot,n),y=Ec(n),b=sx(n),z=OT(n),[S,C]=f.useState(null),j=f.useRef(null),w=ye(t,j,v.onContentChange),A=f.useRef(0),P=f.useRef(""),F=f.useRef(0),N=f.useRef(null),B=f.useRef("right"),R=f.useRef(0),$=x?Df:f.Fragment,O=x?{as:qT,allowPinchZoom:!0}:void 0,V=E=>{var Q,ve;const D=P.current+E,H=z().filter(fe=>!fe.disabled),K=document.activeElement,W=(Q=H.find(fe=>fe.ref.current===K))==null?void 0:Q.textValue,q=H.map(fe=>fe.textValue),le=lP(q,D,W),de=(ve=H.find(fe=>fe.textValue===le))==null?void 0:ve.ref.current;(function fe(je){P.current=je,window.clearTimeout(A.current),je!==""&&(A.current=window.setTimeout(()=>fe(""),1e3))})(D),de&&setTimeout(()=>de.focus())};f.useEffect(()=>()=>window.clearTimeout(A.current),[]),Hb();const T=f.useCallback(E=>{var H,K;return B.current===((H=N.current)==null?void 0:H.side)&&oP(E,(K=N.current)==null?void 0:K.area)},[]);return r.jsx(YT,{scope:n,searchRef:P,onItemEnter:f.useCallback(E=>{T(E)&&E.preventDefault()},[T]),onItemLeave:f.useCallback(E=>{var D;T(E)||((D=j.current)==null||D.focus(),C(null))},[T]),onTriggerLeave:f.useCallback(E=>{T(E)&&E.preventDefault()},[T]),pointerGraceTimerRef:F,onPointerGraceIntentChange:f.useCallback(E=>{N.current=E},[]),children:r.jsx($,{...O,children:r.jsx(Rf,{asChild:!0,trapped:i,onMountAutoFocus:Y(l,E=>{var D;E.preventDefault(),(D=j.current)==null||D.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:r.jsx(Kl,{asChild:!0,disableOutsidePointerEvents:o,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:m,onInteractOutside:h,onDismiss:p,children:r.jsx(qb,{asChild:!0,...b,dir:g.dir,orientation:"vertical",loop:a,currentTabStopId:S,onCurrentTabStopIdChange:C,onEntryFocus:Y(c,E=>{g.isUsingKeyboardRef.current||E.preventDefault()}),preventScrollOnEntryFocus:!0,children:r.jsx(hb,{role:"menu","aria-orientation":"vertical","data-state":Nx(v.open),"data-radix-menu-content":"",dir:g.dir,...y,...k,ref:w,style:{outline:"none",...k.style},onKeyDown:Y(k.onKeyDown,E=>{const H=E.target.closest("[data-radix-menu-content]")===E.currentTarget,K=E.ctrlKey||E.altKey||E.metaKey,W=E.key.length===1;H&&(E.key==="Tab"&&E.preventDefault(),!K&&W&&V(E.key));const q=j.current;if(E.target!==q||!LT.includes(E.key))return;E.preventDefault();const de=z().filter(Q=>!Q.disabled).map(Q=>Q.ref.current);rx.includes(E.key)&&de.reverse(),iP(de)}),onBlur:Y(e.onBlur,E=>{E.currentTarget.contains(E.target)||(window.clearTimeout(A.current),P.current="")}),onPointerMove:Y(e.onPointerMove,Sl(E=>{const D=E.target,H=R.current!==E.clientX;if(E.currentTarget.contains(D)&&H){const K=E.clientX>R.current?"right":"left";B.current=K,R.current=E.clientX}}))})})})})})})});dx.displayName=Ot;var WT="MenuGroup",Of=f.forwardRef((e,t)=>{const{__scopeMenu:n,...a}=e;return r.jsx(ee.div,{role:"group",...a,ref:t})});Of.displayName=WT;var QT="MenuLabel",mx=f.forwardRef((e,t)=>{const{__scopeMenu:n,...a}=e;return r.jsx(ee.div,{...a,ref:t})});mx.displayName=QT;var Go="MenuItem",gp="menu.itemSelect",Tc=f.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:a,...i}=e,l=f.useRef(null),s=$l(Go,e.__scopeMenu),o=Ff(Go,e.__scopeMenu),c=ye(t,l),u=f.useRef(!1),d=()=>{const m=l.current;if(!n&&m){const h=new CustomEvent(gp,{bubbles:!0,cancelable:!0});m.addEventListener(gp,p=>a==null?void 0:a(p),{once:!0}),lf(m,h),h.defaultPrevented?u.current=!1:s.onClose()}};return r.jsx(fx,{...i,ref:c,disabled:n,onClick:Y(e.onClick,d),onPointerDown:m=>{var h;(h=e.onPointerDown)==null||h.call(e,m),u.current=!0},onPointerUp:Y(e.onPointerUp,m=>{var h;u.current||(h=m.currentTarget)==null||h.click()}),onKeyDown:Y(e.onKeyDown,m=>{const h=o.searchRef.current!=="";n||h&&m.key===" "||tm.includes(m.key)&&(m.currentTarget.click(),m.preventDefault())})})});Tc.displayName=Go;var fx=f.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:a=!1,textValue:i,...l}=e,s=Ff(Go,n),o=sx(n),c=f.useRef(null),u=ye(t,c),[d,m]=f.useState(!1),[h,p]=f.useState("");return f.useEffect(()=>{const x=c.current;x&&p((x.textContent??"").trim())},[l.children]),r.jsx(wl.ItemSlot,{scope:n,disabled:a,textValue:i??h,children:r.jsx(Wb,{asChild:!0,...o,focusable:!a,children:r.jsx(ee.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0,...l,ref:u,onPointerMove:Y(e.onPointerMove,Sl(x=>{a?s.onItemLeave(x):(s.onItemEnter(x),x.defaultPrevented||x.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:Y(e.onPointerLeave,Sl(x=>s.onItemLeave(x))),onFocus:Y(e.onFocus,()=>m(!0)),onBlur:Y(e.onBlur,()=>m(!1))})})})}),XT="MenuCheckboxItem",hx=f.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:a,...i}=e;return r.jsx(vx,{scope:e.__scopeMenu,checked:n,children:r.jsx(Tc,{role:"menuitemcheckbox","aria-checked":Uo(n)?"mixed":n,...i,ref:t,"data-state":Hf(n),onSelect:Y(i.onSelect,()=>a==null?void 0:a(Uo(n)?!0:!n),{checkForDefaultPrevented:!1})})})});hx.displayName=XT;var yx="MenuRadioGroup",[ZT,JT]=hi(yx,{value:void 0,onValueChange:()=>{}}),px=f.forwardRef((e,t)=>{const{value:n,onValueChange:a,...i}=e,l=Tt(a);return r.jsx(ZT,{scope:e.__scopeMenu,value:n,onValueChange:l,children:r.jsx(Of,{...i,ref:t})})});px.displayName=yx;var kx="MenuRadioItem",gx=f.forwardRef((e,t)=>{const{value:n,...a}=e,i=JT(kx,e.__scopeMenu),l=n===i.value;return r.jsx(vx,{scope:e.__scopeMenu,checked:l,children:r.jsx(Tc,{role:"menuitemradio","aria-checked":l,...a,ref:t,"data-state":Hf(l),onSelect:Y(a.onSelect,()=>{var s;return(s=i.onValueChange)==null?void 0:s.call(i,n)},{checkForDefaultPrevented:!1})})})});gx.displayName=kx;var Kf="MenuItemIndicator",[vx,eP]=hi(Kf,{checked:!1}),bx=f.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:a,...i}=e,l=eP(Kf,n);return r.jsx(_t,{present:a||Uo(l.checked)||l.checked===!0,children:r.jsx(ee.span,{...i,ref:t,"data-state":Hf(l.checked)})})});bx.displayName=Kf;var tP="MenuSeparator",xx=f.forwardRef((e,t)=>{const{__scopeMenu:n,...a}=e;return r.jsx(ee.div,{role:"separator","aria-orientation":"horizontal",...a,ref:t})});xx.displayName=tP;var nP="MenuArrow",zx=f.forwardRef((e,t)=>{const{__scopeMenu:n,...a}=e,i=Ec(n);return r.jsx(yb,{...i,...a,ref:t})});zx.displayName=nP;var aP="MenuSub",[X4,wx]=hi(aP),Br="MenuSubTrigger",Sx=f.forwardRef((e,t)=>{const n=yi(Br,e.__scopeMenu),a=$l(Br,e.__scopeMenu),i=wx(Br,e.__scopeMenu),l=Ff(Br,e.__scopeMenu),s=f.useRef(null),{pointerGraceTimerRef:o,onPointerGraceIntentChange:c}=l,u={__scopeMenu:e.__scopeMenu},d=f.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return f.useEffect(()=>d,[d]),f.useEffect(()=>{const m=o.current;return()=>{window.clearTimeout(m),c(null)}},[o,c]),r.jsx(If,{asChild:!0,...u,children:r.jsx(fx,{id:i.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":i.contentId,"data-state":Nx(n.open),...e,ref:dc(t,i.onTriggerChange),onClick:m=>{var h;(h=e.onClick)==null||h.call(e,m),!(e.disabled||m.defaultPrevented)&&(m.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:Y(e.onPointerMove,Sl(m=>{l.onItemEnter(m),!m.defaultPrevented&&!e.disabled&&!n.open&&!s.current&&(l.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{n.onOpenChange(!0),d()},100))})),onPointerLeave:Y(e.onPointerLeave,Sl(m=>{var p,x;d();const h=(p=n.content)==null?void 0:p.getBoundingClientRect();if(h){const k=(x=n.content)==null?void 0:x.dataset.side,v=k==="right",g=v?-5:5,y=h[v?"left":"right"],b=h[v?"right":"left"];l.onPointerGraceIntentChange({area:[{x:m.clientX+g,y:m.clientY},{x:y,y:h.top},{x:b,y:h.top},{x:b,y:h.bottom},{x:y,y:h.bottom}],side:k}),window.clearTimeout(o.current),o.current=window.setTimeout(()=>l.onPointerGraceIntentChange(null),300)}else{if(l.onTriggerLeave(m),m.defaultPrevented)return;l.onPointerGraceIntentChange(null)}})),onKeyDown:Y(e.onKeyDown,m=>{var p;const h=l.searchRef.current!=="";e.disabled||h&&m.key===" "||FT[a.dir].includes(m.key)&&(n.onOpenChange(!0),(p=n.content)==null||p.focus(),m.preventDefault())})})})});Sx.displayName=Br;var Cx="MenuSubContent",jx=f.forwardRef((e,t)=>{const n=cx(Ot,e.__scopeMenu),{forceMount:a=n.forceMount,...i}=e,l=yi(Ot,e.__scopeMenu),s=$l(Ot,e.__scopeMenu),o=wx(Cx,e.__scopeMenu),c=f.useRef(null),u=ye(t,c);return r.jsx(wl.Provider,{scope:e.__scopeMenu,children:r.jsx(_t,{present:a||l.open,children:r.jsx(wl.Slot,{scope:e.__scopeMenu,children:r.jsx(Bf,{id:o.contentId,"aria-labelledby":o.triggerId,...i,ref:u,align:"start",side:s.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:d=>{var m;s.isUsingKeyboardRef.current&&((m=c.current)==null||m.focus()),d.preventDefault()},onCloseAutoFocus:d=>d.preventDefault(),onFocusOutside:Y(e.onFocusOutside,d=>{d.target!==o.trigger&&l.onOpenChange(!1)}),onEscapeKeyDown:Y(e.onEscapeKeyDown,d=>{s.onClose(),d.preventDefault()}),onKeyDown:Y(e.onKeyDown,d=>{var p;const m=d.currentTarget.contains(d.target),h=BT[s.dir].includes(d.key);m&&h&&(l.onOpenChange(!1),(p=o.trigger)==null||p.focus(),d.preventDefault())})})})})})});jx.displayName=Cx;function Nx(e){return e?"open":"closed"}function Uo(e){return e==="indeterminate"}function Hf(e){return Uo(e)?"indeterminate":e?"checked":"unchecked"}function iP(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function rP(e,t){return e.map((n,a)=>e[(t+a)%e.length])}function lP(e,t,n){const i=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,l=n?e.indexOf(n):-1;let s=rP(e,Math.max(l,0));i.length===1&&(s=s.filter(u=>u!==n));const c=s.find(u=>u.toLowerCase().startsWith(i.toLowerCase()));return c!==n?c:void 0}function sP(e,t){const{x:n,y:a}=e;let i=!1;for(let l=0,s=t.length-1;l<t.length;s=l++){const o=t[l],c=t[s],u=o.x,d=o.y,m=c.x,h=c.y;d>a!=h>a&&n<(m-u)*(a-d)/(h-d)+u&&(i=!i)}return i}function oP(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return sP(n,t)}function Sl(e){return t=>t.pointerType==="mouse"?e(t):void 0}var cP=ox,uP=If,dP=ux,mP=dx,fP=Of,hP=mx,yP=Tc,pP=hx,kP=px,gP=gx,vP=bx,bP=xx,xP=zx,zP=Sx,wP=jx,Pc="DropdownMenu",[SP,Z4]=Rt(Pc,[lx]),mt=lx(),[CP,Ax]=SP(Pc),Ex=e=>{const{__scopeDropdownMenu:t,children:n,dir:a,open:i,defaultOpen:l,onOpenChange:s,modal:o=!0}=e,c=mt(t),u=f.useRef(null),[d,m]=Jn({prop:i,defaultProp:l??!1,onChange:s,caller:Pc});return r.jsx(CP,{scope:t,triggerId:_n(),triggerRef:u,contentId:_n(),open:d,onOpenChange:m,onOpenToggle:f.useCallback(()=>m(h=>!h),[m]),modal:o,children:r.jsx(cP,{...c,open:d,onOpenChange:m,dir:a,modal:o,children:n})})};Ex.displayName=Pc;var Tx="DropdownMenuTrigger",Px=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:a=!1,...i}=e,l=Ax(Tx,n),s=mt(n);return r.jsx(uP,{asChild:!0,...s,children:r.jsx(ee.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":a?"":void 0,disabled:a,...i,ref:dc(t,l.triggerRef),onPointerDown:Y(e.onPointerDown,o=>{!a&&o.button===0&&o.ctrlKey===!1&&(l.onOpenToggle(),l.open||o.preventDefault())}),onKeyDown:Y(e.onKeyDown,o=>{a||(["Enter"," "].includes(o.key)&&l.onOpenToggle(),o.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(o.key)&&o.preventDefault())})})})});Px.displayName=Tx;var jP="DropdownMenuPortal",Mx=e=>{const{__scopeDropdownMenu:t,...n}=e,a=mt(t);return r.jsx(dP,{...a,...n})};Mx.displayName=jP;var Rx="DropdownMenuContent",Dx=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=Ax(Rx,n),l=mt(n),s=f.useRef(!1);return r.jsx(mP,{id:i.contentId,"aria-labelledby":i.triggerId,...l,...a,ref:t,onCloseAutoFocus:Y(e.onCloseAutoFocus,o=>{var c;s.current||(c=i.triggerRef.current)==null||c.focus(),s.current=!1,o.preventDefault()}),onInteractOutside:Y(e.onInteractOutside,o=>{const c=o.detail.originalEvent,u=c.button===0&&c.ctrlKey===!0,d=c.button===2||u;(!i.modal||d)&&(s.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Dx.displayName=Rx;var NP="DropdownMenuGroup",AP=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(fP,{...i,...a,ref:t})});AP.displayName=NP;var EP="DropdownMenuLabel",Ix=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(hP,{...i,...a,ref:t})});Ix.displayName=EP;var TP="DropdownMenuItem",Lx=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(yP,{...i,...a,ref:t})});Lx.displayName=TP;var PP="DropdownMenuCheckboxItem",Fx=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(pP,{...i,...a,ref:t})});Fx.displayName=PP;var MP="DropdownMenuRadioGroup",RP=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(kP,{...i,...a,ref:t})});RP.displayName=MP;var DP="DropdownMenuRadioItem",Bx=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(gP,{...i,...a,ref:t})});Bx.displayName=DP;var IP="DropdownMenuItemIndicator",Ox=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(vP,{...i,...a,ref:t})});Ox.displayName=IP;var LP="DropdownMenuSeparator",Kx=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(bP,{...i,...a,ref:t})});Kx.displayName=LP;var FP="DropdownMenuArrow",BP=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(xP,{...i,...a,ref:t})});BP.displayName=FP;var OP="DropdownMenuSubTrigger",Hx=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(zP,{...i,...a,ref:t})});Hx.displayName=OP;var KP="DropdownMenuSubContent",_x=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...a}=e,i=mt(n);return r.jsx(wP,{...i,...a,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});_x.displayName=KP;var HP=Ex,_P=Px,GP=Mx,Gx=Dx,Ux=Ix,Yx=Lx,$x=Fx,Vx=Bx,qx=Ox,Wx=Kx,Qx=Hx,Xx=_x;const UP=HP,YP=_P,$P=f.forwardRef(({className:e,inset:t,children:n,...a},i)=>r.jsxs(Qx,{ref:i,className:G("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...a,children:[n,r.jsx(Do,{className:"ml-auto h-4 w-4"})]}));$P.displayName=Qx.displayName;const VP=f.forwardRef(({className:e,...t},n)=>r.jsx(Xx,{ref:n,className:G("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));VP.displayName=Xx.displayName;const Zx=f.forwardRef(({className:e,sideOffset:t=4,...n},a)=>r.jsx(GP,{children:r.jsx(Gx,{ref:a,sideOffset:t,className:G("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Zx.displayName=Gx.displayName;const Jx=f.forwardRef(({className:e,inset:t,...n},a)=>r.jsx(Yx,{ref:a,className:G("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...n}));Jx.displayName=Yx.displayName;const qP=f.forwardRef(({className:e,children:t,checked:n,...a},i)=>r.jsxs($x,{ref:i,className:G("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...a,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(qx,{children:r.jsx(fC,{className:"h-4 w-4"})})}),t]}));qP.displayName=$x.displayName;const WP=f.forwardRef(({className:e,children:t,...n},a)=>r.jsxs(Vx,{ref:a,className:G("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(qx,{children:r.jsx(pC,{className:"h-2 w-2 fill-current"})})}),t]}));WP.displayName=Vx.displayName;const QP=f.forwardRef(({className:e,inset:t,...n},a)=>r.jsx(Ux,{ref:a,className:G("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));QP.displayName=Ux.displayName;const XP=f.forwardRef(({className:e,...t},n)=>r.jsx(Wx,{ref:n,className:G("-mx-1 my-1 h-px bg-muted",e),...t}));XP.displayName=Wx.displayName;const vp=({isScrolled:e})=>{const{language:t,setLanguage:n}=_e(),a=[{code:"en",label:"English",flag:"🇬🇧"},{code:"tr",label:"Türkçe",flag:"🇹🇷"},{code:"ar",label:"العربية",flag:"🇸🇦"}],i=a.find(l=>l.code===t);return r.jsxs(UP,{children:[r.jsx(YP,{asChild:!0,children:r.jsx("button",{className:`flex items-center space-x-1 p-2 transition-all duration-500 ${e?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,"aria-label":"Select Language",children:r.jsx("span",{className:"text-base",children:i==null?void 0:i.flag})})}),r.jsx(Zx,{align:"end",className:"w-40 bg-white z-50",children:a.map(l=>r.jsxs(Jx,{onClick:()=>n(l.code),className:`cursor-pointer ${t===l.code?"bg-accent":""}`,children:[r.jsx("span",{className:"mr-2 text-lg",children:l.flag}),l.label]},l.code))})]})},Ks=e=>{const[t,n]=f.useState({isLoading:!0,hasError:!1,currentLogo:null});return f.useEffect(()=>{(()=>{try{let i;switch(e){case"desktop-white":i=Va.desktop.white;break;case"desktop-black":i=Va.desktop.black;break;case"mobile-white":i=Va.mobile.white;break;case"mobile-black":i=Va.mobile.black;break;default:throw new Error("Invalid logo type")}if(!i||i.includes("placeholder")||i===""){n({isLoading:!1,hasError:!1,currentLogo:null});return}const l=new Image;l.onload=()=>{n({isLoading:!1,hasError:!1,currentLogo:i})},l.onerror=()=>{n({isLoading:!1,hasError:!0,currentLogo:null})},l.src=i}catch{n({isLoading:!1,hasError:!0,currentLogo:null})}})()},[e]),t},ZP=()=>{const e=Ks("desktop-white"),t=Ks("desktop-black"),n=Ks("mobile-white"),a=Ks("mobile-black");return{desktop:{white:e,black:t},mobile:{white:n,black:a}}},e0=()=>{const[e,t]=f.useState(null),[n,a]=f.useState(!1),[i,l]=f.useState(null);return f.useEffect(()=>{(async()=>{a(!0);try{const c=await fetch("/search-index.json");if(!c.ok)throw new Error("Failed to load search index");const u=await c.json();t(u),l(null)}catch(c){l("Search temporarily unavailable"),console.error("Failed to load search index:",c)}finally{a(!1)}})()},[]),{searchResults:f.useMemo(()=>(o,c=6)=>{if(!e||!o||o.length<2)return[];const u=o.toLowerCase().trim(),m=[...e.products,...e.blogs].filter(h=>{const p=h.title.toLowerCase().includes(u),x=h.description.toLowerCase().includes(u);return p||x});return m.sort((h,p)=>{const x=h.title.toLowerCase().includes(u),k=p.title.toLowerCase().includes(u);return x&&!k?-1:!x&&k?1:0}),m.slice(0,c)},[e]),isLoading:n,error:i,isReady:!!e}},JP=()=>{var $,O,V;const{language:e}=_e(),t=at[e],[n,a]=f.useState(!1),[i,l]=f.useState(!0),[s,o]=f.useState(0),[c,u]=f.useState(!1),[d,m]=f.useState(!1),[h,p]=f.useState(""),[x,k]=f.useState(!1),[v,g]=f.useState(!1),y=Pn(),b=br(),z=ZP(),S=f.useRef(null),{searchResults:C,isLoading:j,error:w}=e0(),[A,P]=f.useState([]);f.useEffect(()=>{const T=()=>{const D=window.scrollY;D>=2&&(u(!1),m(!1),g(!1),k(!1));const H=D<10,K=D>s,W=D<s,le=window.innerWidth<768&&c;H?(l(!0),a(!1)):K&&D>50&&!le?l(!1):W&&D>50&&(l(!0),a(!0)),o(D)},E=D=>{const H=D.target,K=document.querySelectorAll(".search-container");let W=!1;K.forEach(de=>{de.contains(H)&&(W=!0)}),W||(m(!1),g(!1));const q=document.querySelector("header"),le=document.querySelector("[data-mega-menu]");c&&q&&!q.contains(H)&&(!le||!le.contains(H))&&u(!1)};return window.addEventListener("scroll",T),document.addEventListener("mousedown",E),()=>{window.removeEventListener("scroll",T),document.removeEventListener("mousedown",E)}},[s,c]);const F=T=>{T.preventDefault(),h.trim()&&(b(`/search?query=${encodeURIComponent(h.trim())}`),m(!1),g(!1))},N=T=>{const E=T.target.value;if(p(E),E.length>=2){const D=C(E,6);P(D),g(!0)}else g(!1),P([])},B=()=>{m(!1),g(!1),p("")},R=[{name:($=t.home)==null?void 0:$.toUpperCase(),href:"/"},{name:e==="en"?"SKINCARE":e==="ar"?(t.shop||"SKINCARE").toUpperCase():"CİLT BAKIMI",href:"#",hasMegaMenu:!0},{name:e==="en"?"TRENDS & TIPS":e==="ar"?((O=t.blog)==null?void 0:O.title)||"TRENDS & TIPS":"TRENDLER VE İPUÇLARI",href:"/blog"},{name:"THE ORIGIN OF BEAUTY",href:"/about"},{name:(V=t.contactNav)==null?void 0:V.toUpperCase(),href:"/contact"}];return r.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out transform rounded-b-lg ${i?"translate-y-0 opacity-100":"-translate-y-full opacity-0"} ${n?"bg-white shadow-md":"bg-black/5 backdrop-blur-[2px]"}`,children:[r.jsxs("div",{className:"container mx-auto max-w-7xl px-4",children:[r.jsx("div",{className:"hidden md:flex justify-center py-2 md:py-5",children:r.jsx(ae,{to:"/",className:"transition-all duration-500 hover:opacity-80",children:(()=>{const T=n?z.desktop.black:z.desktop.white;return T.currentLogo?r.jsx("img",{src:T.currentLogo,alt:"SINCEVA Logo",className:"h-16 md:h-19 w-auto"}):r.jsx("div",{className:`text-xl md:text-2xl font-bold transition-all duration-500 ${n?"text-[#191919]":"text-white"}`,children:Va.fallback.text})})()})}),r.jsx("div",{className:"md:hidden flex justify-center pt-3 pb-1 mt-1",children:r.jsx(ae,{to:"/",className:"transition-all duration-500 hover:opacity-80",children:(()=>{const T=n?z.mobile.black:z.mobile.white;return T.currentLogo?r.jsx("img",{src:T.currentLogo,alt:"SINCEVA Logo",className:"h-9 w-auto"}):r.jsx("div",{className:`text-lg font-bold transition-all duration-500 ${n?"text-[#191919]":"text-white"}`,children:Va.fallback.text})})()})}),r.jsxs("nav",{onClick:T=>{T.target===T.currentTarget&&u(!1)},className:`hidden md:flex justify-center items-center py-1.5 md:py-3 h-10 transition-all duration-300 ${d?"space-x-2 md:space-x-4 lg:space-x-6":"space-x-4 md:space-x-8 lg:space-x-12"}`,children:[R.map(T=>r.jsx("div",{className:"relative",children:T.hasMegaMenu?r.jsx("button",{onClick:()=>u(!c),className:`text-xs md:text-sm font-medium tracking-wide transition-all duration-500 uppercase whitespace-nowrap inline-block ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,children:T.name}):r.jsx(ae,{to:T.href,className:`text-xs md:text-sm font-medium tracking-wide transition-all duration-500 uppercase whitespace-nowrap inline-block ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"} ${y.pathname===T.href?"opacity-100":"opacity-90"}`,children:T.name})},T.name)),r.jsxs("div",{className:`flex items-center transition-all duration-300 ${d?"ml-2 md:ml-4":"ml-4 md:ml-8"}`,children:[r.jsx("div",{className:"ltr:ml-2 rtl:mr-2",children:r.jsx(vp,{isScrolled:n})}),r.jsxs("div",{className:"search-container relative flex items-center",children:[r.jsx("button",{onClick:()=>m(!d),className:`p-2 transition-all duration-500 ${d?"text-[hsl(var(--hover))]":n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"} ${d?"absolute left-1 top-1/2 transform -translate-y-1/2 z-10":""}`,children:r.jsx(Da,{className:"w-4 md:w-5 h-4 md:h-5"})}),r.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-out ${d?"w-32 md:w-48 ml-0":"w-0 ml-0"}`,children:r.jsx("form",{onSubmit:F,className:"w-full",children:r.jsx(he,{ref:S,type:"text",placeholder:t.searchPlaceholder||"Search products...",value:h,onChange:N,className:`w-full h-8 pl-10 pr-4 text-xs !border-none !outline-none !ring-0 !ring-offset-0 !shadow-none transition-all duration-300 rounded-full focus:!outline-none focus:!ring-0 focus:!border-none focus:!shadow-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 ${n?"bg-gray-100 text-gray-900 placeholder:text-gray-500":"bg-black/20 backdrop-blur-md text-white placeholder:text-white/70"}`,autoFocus:d})})}),d&&r.jsx("div",{className:"fixed left-0 right-0 top-40 z-[100] px-4",children:r.jsx("div",{className:"max-w-7xl mx-auto flex justify-end",children:r.jsx("div",{className:"w-80 md:w-96",children:r.jsx(sp,{results:A,isVisible:v,isLoading:j,error:w,onResultClick:B})})})})]})]})]}),r.jsxs("div",{className:"md:hidden flex justify-between items-center py-1.5 md:py-4",children:[r.jsx("button",{onClick:()=>k(!x),className:`p-2 transition-all duration-500 ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,children:x?r.jsx(fi,{className:"w-6 h-6"}):r.jsx(Ev,{className:"w-6 h-6"})}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(vp,{isScrolled:n}),r.jsxs("div",{className:"search-container relative flex items-center",children:[r.jsx("button",{onClick:()=>m(!d),className:`p-2 transition-all duration-500 ${d?"text-[hsl(var(--hover))]":n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"} ${d?"absolute left-1 top-1/2 transform -translate-y-1/2 z-10":""}`,children:r.jsx(Da,{className:"w-5 h-5"})}),r.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-out ${d?"w-40 ml-0":"w-0 ml-0"}`,children:r.jsx("form",{onSubmit:F,className:"w-full",children:r.jsx(he,{ref:S,type:"text",placeholder:t.searchPlaceholder||"Search products...",value:h,onChange:N,className:`w-full h-8 pl-10 pr-4 text-xs !border-none !outline-none !ring-0 !ring-offset-0 !shadow-none transition-all duration-300 rounded-full focus:!outline-none focus:!ring-0 focus:!border-none focus:!shadow-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 ${n?"bg-gray-100 text-gray-900 placeholder:text-gray-500":"bg-black/20 backdrop-blur-md text-white placeholder:text-white/70"}`,autoFocus:d})})}),d&&r.jsx("div",{className:"fixed left-0 right-0 top-40 z-[100] px-4",children:r.jsx("div",{className:"max-w-7xl mx-auto flex justify-end",children:r.jsx("div",{className:"w-80",children:r.jsx(sp,{results:A,isVisible:v,isLoading:j,error:w,onResultClick:B})})})})]})]})]}),x&&r.jsx("div",{className:`md:hidden py-1.5 md:py-4 ${n?"border-t border-gray-100":"border-t border-border/20"}`,children:R.map(T=>T.hasMegaMenu?r.jsx("button",{onClick:()=>{u(!c),k(!1)},className:`block py-2 text-sm font-medium transition-all duration-500 uppercase text-left w-full ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,children:T.name},T.name):r.jsx(ae,{to:T.href,onClick:()=>k(!1),className:`block py-2 text-sm font-medium transition-all duration-500 uppercase ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,children:T.name},T.name))})]}),r.jsx("div",{"data-mega-menu":!0,children:r.jsx(PE,{isVisible:c})})]})},_f=_l("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ne=f.forwardRef(({className:e,variant:t,size:n,asChild:a=!1,...i},l)=>{const s=a?bS:"button";return r.jsx(s,{className:G(_f({variant:t,size:n,className:e})),ref:l,...i})});ne.displayName="Button";const eM=()=>{var c;const{language:e}=_e(),t=at[e],[n,a]=f.useState(""),[i,l]=f.useState(!1),{toast:s}=Zn(),o=async u=>{var d,m,h,p,x,k,v,g,y;if(u.preventDefault(),!(!n.trim()||i)){l(!0);try{const z=await(await fetch("https://sinceva.com/api/subscribe.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.trim(),language:e})})).json();if(z.ok)s({title:((d=t.newsletter)==null?void 0:d.successTitle)||"Başarılı!",description:((m=t.newsletter)==null?void 0:m.successDesc)||"Onay e-postası gönderildi. Lütfen e-postanızı kontrol edin."}),a("");else{let S=((h=t.newsletter)==null?void 0:h.errorGeneric)||"Bir hata oluştu. Lütfen tekrar deneyin.";z.error==="ALREADY_SUBSCRIBED"?S=((p=t.newsletter)==null?void 0:p.errorAlreadySubscribed)||"Bu e-posta adresi zaten abone.":z.error==="INVALID_EMAIL"?S=((x=t.newsletter)==null?void 0:x.errorInvalidEmail)||"Geçersiz e-posta adresi.":z.error==="RATE_LIMITED"&&(S=((k=t.newsletter)==null?void 0:k.errorRateLimited)||"Çok fazla istek. Lütfen biraz bekleyin."),s({title:((v=t.newsletter)==null?void 0:v.errorTitle)||"Hata",description:S,variant:"destructive"})}}catch(b){console.error("Newsletter subscription error:",b),s({title:((g=t.newsletter)==null?void 0:g.errorTitle)||"Hata",description:((y=t.newsletter)==null?void 0:y.errorGeneric)||"Bir hata oluştu. Lütfen tekrar deneyin.",variant:"destructive"})}finally{l(!1)}}};return r.jsx("footer",{className:"text-background",style:{backgroundColor:"#191919"},children:r.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[r.jsxs("div",{className:"space-y-4",children:[r.jsx("div",{className:"hidden md:block",children:r.jsx("img",{src:Va.desktop.white,alt:"SINCEVA Logo",className:"h-16 w-auto"})}),r.jsx("h3",{className:"md:hidden text-2xl font-bold tracking-wider",children:"SINCEVA"}),r.jsxs("p",{className:"text-background/80 text-sm",children:[t.theOriginOfBeauty," - Premium skincare for timeless elegance."]}),r.jsxs("div",{className:"flex space-x-4",children:[r.jsx("a",{href:"#",className:"text-background/60 hover:text-primary transition-colors",children:r.jsx(zC,{className:"w-5 h-5"})}),r.jsx("a",{href:"#",className:"text-background/60 hover:text-primary transition-colors",children:r.jsx(gC,{className:"w-5 h-5"})}),r.jsx("a",{href:"#",className:"text-background/60 hover:text-primary transition-colors",children:r.jsx(DC,{className:"w-5 h-5"})})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"font-semibold text-background",children:t.quickLinks}),r.jsxs("nav",{className:"space-y-2",children:[r.jsx(ae,{to:"/about",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.theOriginOfBeauty}),r.jsx(ae,{to:"/blog",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.trendsAndTips}),r.jsx(ae,{to:"/contact",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.contact}),r.jsx(ae,{to:"/shop",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.shop})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"font-semibold text-background",children:t.policies}),r.jsxs("nav",{className:"space-y-2",children:[r.jsx(ae,{to:"/privacy",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.privacyPolicy}),r.jsx(ae,{to:"/cookie-policy",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.cookiePolicy}),r.jsx(ae,{to:"/terms",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.termsAndConditions}),r.jsx(ae,{to:"/consumer-ratings",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.consumerReviewRules})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"font-semibold text-background",children:t.stayConnected}),r.jsx("p",{className:"text-background/80 text-sm",children:t.newsletterDesc}),r.jsxs("form",{onSubmit:o,className:"space-y-3",children:[r.jsx(he,{type:"email",placeholder:t.enterEmail,value:n,onChange:u=>a(u.target.value),className:"bg-background/10 border-background/20 text-background placeholder:text-background/60",required:!0,disabled:i}),r.jsxs(ne,{type:"submit",variant:"default",className:"w-full bg-primary hover:bg-primary-dark",disabled:i,children:[i?r.jsx(bt,{className:"w-4 h-4 mr-2 animate-spin"}):r.jsx(or,{className:"w-4 h-4 mr-2"}),i?((c=t.newsletter)==null?void 0:c.sending)||"Gönderiliyor...":t.subscribe]})]})]})]}),r.jsx("div",{className:"border-t border-background/20 mt-12 pt-8",children:r.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",children:[r.jsxs("p",{className:"text-background/60 text-sm",children:["© ",new Date().getFullYear()," SAFI COSMETIC LIMITED COMPANY. ",t.allRightsReserved]}),r.jsx("p",{className:"text-background/60 text-sm",children:t.craftedFor})]})})]})})},tM=()=>{const{language:e}=_e(),t=at[e].cookieConsent,[n,a]=f.useState(!1),[i,l]=f.useState(!1);f.useEffect(()=>{localStorage.getItem("cookie_consent")||a(!0)},[]);const s=()=>{localStorage.setItem("cookie_consent","accepted"),localStorage.setItem("cookie-preferences",JSON.stringify({necessary:!0,analytics:!0,marketing:!0})),a(!1)},o=()=>{localStorage.setItem("cookie_consent","rejected"),localStorage.setItem("cookie-preferences",JSON.stringify({necessary:!0,analytics:!1,marketing:!1})),a(!1)},c=()=>{l(!i)};return n?r.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg",children:r.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-4",children:i?r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[r.jsx(Pv,{className:"w-5 h-5 text-[#ef2b2d]"}),t.preferences.title]}),r.jsx("button",{onClick:()=>l(!1),className:"text-gray-400 hover:text-gray-600",children:r.jsx(fi,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"grid gap-3",children:[r.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900",children:t.preferences.necessary.title}),r.jsx("p",{className:"text-sm text-gray-600",children:t.preferences.necessary.description})]}),r.jsx("div",{className:"text-sm text-gray-500",children:t.preferences.necessary.alwaysActive})]}),r.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900",children:t.preferences.analytics.title}),r.jsx("p",{className:"text-sm text-gray-600",children:t.preferences.analytics.description})]}),r.jsx("input",{type:"checkbox",className:"h-4 w-4 text-[#ef2b2d]"})]}),r.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900",children:t.preferences.marketing.title}),r.jsx("p",{className:"text-sm text-gray-600",children:t.preferences.marketing.description})]}),r.jsx("input",{type:"checkbox",className:"h-4 w-4 text-[#ef2b2d]"})]})]}),r.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[r.jsx(ne,{onClick:o,variant:"outline",size:"sm",children:t.preferences.essentialOnly}),r.jsx(ne,{onClick:s,size:"sm",className:"bg-[#ef2b2d] hover:bg-[#ef2b2d]/90",children:t.banner.acceptAll})]})]}):r.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[r.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[r.jsx(kC,{className:"w-6 h-6 text-[#ef2b2d] mt-1 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:t.banner.title}),r.jsxs("p",{className:"text-sm text-gray-600",children:[t.banner.message," ",r.jsx(ae,{to:"/cookie-policy",className:"text-[#ef2b2d] hover:underline",children:t.banner.learnMore})]})]})]}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(ne,{onClick:c,variant:"outline",size:"sm",className:"text-gray-600 border-gray-300",children:t.banner.preferences}),r.jsx(ne,{onClick:o,variant:"outline",size:"sm",className:"text-gray-600 border-gray-300",children:t.banner.reject}),r.jsx(ne,{onClick:s,size:"sm",className:"bg-[#ef2b2d] hover:bg-[#ef2b2d]/90",children:t.banner.acceptAll})]})]})})}):null},qe=({children:e})=>(console.log("Layout component loading..."),r.jsxs("div",{className:"min-h-screen bg-background",children:[r.jsx(JP,{}),r.jsx("main",{children:e}),r.jsx(eM,{}),r.jsx(tM,{})]}));var nM="AspectRatio",t0=f.forwardRef((e,t)=>{const{ratio:n=1/1,style:a,...i}=e;return r.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/n}%`},"data-radix-aspect-ratio-wrapper":"",children:r.jsx(ee.div,{...i,ref:t,style:{...a,position:"absolute",top:0,right:0,bottom:0,left:0}})})});t0.displayName=nM;var aM=t0;const Wn=aM,iM="/assets/g%C3%B6z_kremi_banner-C-tPOpTC.jpg",rM="/assets/g%C3%B6z_kremi_banner_mobile-Bx3QMe7B.jpg",lM=({className:e=""})=>{const[t,n]=f.useState(0),[a,i]=f.useState(!1),[l,s]=f.useState(!1),[o,c]=f.useState(0),[u,d]=f.useState(0),[m,h]=f.useState(0),p=f.useRef(null),x=[{id:1,image:iM,imageMobile:rM,alt:"Göz Kremi - Eye Cream Collection"},{id:2,image:Xd,imageMobile:Xd,alt:"Anti-Aging Skincare Solutions"},{id:3,image:Zd,imageMobile:Zd,alt:"Face & Skin Cleansing Products"}];f.useEffect(()=>{if(a||l)return;const w=setInterval(()=>{n(A=>(A+1)%x.length)},5e3);return()=>clearInterval(w)},[a,l,x.length]);const k=f.useCallback(w=>{n(w),i(!0),setTimeout(()=>{i(!1)},1e4)},[]),v=f.useCallback(w=>{n(w==="left"?A=>(A+1)%x.length:A=>(A-1+x.length)%x.length),i(!0),setTimeout(()=>i(!1),1e4)},[x.length]),g=w=>{s(!0),c(w.touches[0].clientX),d(w.touches[0].clientX)},y=w=>{if(!l)return;d(w.touches[0].clientX);const A=w.touches[0].clientX-o;h(A)},b=()=>{if(!l)return;const w=u-o;Math.abs(w)>50&&(w>0?v("right"):v("left")),s(!1),h(0)},z=w=>{s(!0),c(w.clientX),d(w.clientX),w.preventDefault()},S=w=>{if(!l)return;d(w.clientX);const A=w.clientX-o;h(A)},C=()=>{if(!l)return;const w=u-o;Math.abs(w)>50&&(w>0?v("right"):v("left")),s(!1),h(0)},j=()=>{l&&(s(!1),h(0))};return r.jsxs("section",{className:`sinceva-hero relative overflow-hidden ${e}`,children:[r.jsx("div",{className:"md:hidden",children:r.jsx(Wn,{ratio:2/3,children:r.jsx("div",{ref:p,className:"sinceva-hero__container relative w-full h-full cursor-grab active:cursor-grabbing select-none",onTouchStart:g,onTouchMove:y,onTouchEnd:b,onMouseDown:z,onMouseMove:S,onMouseUp:C,onMouseLeave:j,children:x.map((w,A)=>r.jsxs("div",{className:`sinceva-hero__slide absolute inset-0 transition-all duration-300 ease-out ${A===t?"opacity-100":"opacity-0"}`,style:{transform:A===t&&l?`translateX(${m}px)`:"translateX(0)"},children:[r.jsx("img",{src:w.imageMobile,alt:w.alt,className:"w-full h-full object-cover pointer-events-none",draggable:!1}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"})]},w.id))})})}),r.jsx("div",{className:"hidden md:block",children:r.jsx(Wn,{ratio:3/1,children:r.jsx("div",{ref:p,className:"sinceva-hero__container relative w-full h-full cursor-grab active:cursor-grabbing select-none",onTouchStart:g,onTouchMove:y,onTouchEnd:b,onMouseDown:z,onMouseMove:S,onMouseUp:C,onMouseLeave:j,children:x.map((w,A)=>r.jsxs("div",{className:`sinceva-hero__slide absolute inset-0 transition-all duration-300 ease-out ${A===t?"opacity-100":"opacity-0"}`,style:{transform:A===t&&l?`translateX(${m}px)`:"translateX(0)"},children:[r.jsx("img",{src:w.image,alt:w.alt,className:"w-full h-full object-cover pointer-events-none",draggable:!1}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"})]},w.id))})})}),r.jsx("div",{className:"sinceva-hero__nav absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20",children:r.jsx("div",{className:"flex space-x-3",children:x.map((w,A)=>r.jsx("button",{onClick:()=>k(A),className:`sinceva-hero__dot w-3 h-3 rounded-full transition-all duration-300 ${A===t?"bg-white scale-110 shadow-lg":"bg-white/50 hover:bg-white/75"}`,"aria-label":`Go to slide ${A+1}`},A))})})]})},sM=()=>(console.log("Hero component loading..."),r.jsx(lM,{})),Ye=f.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:G("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));Ye.displayName="Card";const jn=f.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:G("flex flex-col space-y-1.5 p-6",e),...t}));jn.displayName="CardHeader";const Ui=f.forwardRef(({className:e,...t},n)=>r.jsx("h3",{ref:n,className:G("text-2xl font-semibold leading-none tracking-tight",e),...t}));Ui.displayName="CardTitle";const Cl=f.forwardRef(({className:e,...t},n)=>r.jsx("p",{ref:n,className:G("text-sm text-muted-foreground",e),...t}));Cl.displayName="CardDescription";const $e=f.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:G("p-6 pt-0",e),...t}));$e.displayName="CardContent";const oM=f.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:G("flex items-center p-6 pt-0",e),...t}));oM.displayName="CardFooter";function cM(e){return Object.prototype.toString.call(e)==="[object Object]"}function bp(e){return cM(e)||Array.isArray(e)}function uM(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Gf(e,t){const n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),l=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==l?!1:n.every(s=>{const o=e[s],c=t[s];return typeof o=="function"?`${o}`==`${c}`:!bp(o)||!bp(c)?o===c:Gf(o,c)})}function xp(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function dM(e,t){if(e.length!==t.length)return!1;const n=xp(e),a=xp(t);return n.every((i,l)=>{const s=a[l];return Gf(i,s)})}function Uf(e){return typeof e=="number"}function nm(e){return typeof e=="string"}function Mc(e){return typeof e=="boolean"}function zp(e){return Object.prototype.toString.call(e)==="[object Object]"}function Te(e){return Math.abs(e)}function Yf(e){return Math.sign(e)}function Xr(e,t){return Te(e-t)}function mM(e,t){if(e===0||t===0||Te(e)<=Te(t))return 0;const n=Xr(Te(e),Te(t));return Te(n/e)}function fM(e){return Math.round(e*100)/100}function jl(e){return Nl(e).map(Number)}function sn(e){return e[Vl(e)]}function Vl(e){return Math.max(0,e.length-1)}function $f(e,t){return t===Vl(e)}function wp(e,t=0){return Array.from(Array(e),(n,a)=>t+a)}function Nl(e){return Object.keys(e)}function n0(e,t){return[e,t].reduce((n,a)=>(Nl(a).forEach(i=>{const l=n[i],s=a[i],o=zp(l)&&zp(s);n[i]=o?n0(l,s):s}),n),{})}function am(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function hM(e,t){const n={start:a,center:i,end:l};function a(){return 0}function i(c){return l(c)/2}function l(c){return t-c}function s(c,u){return nm(e)?n[e](c):e(t,c,u)}return{measure:s}}function Al(){let e=[];function t(i,l,s,o={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(l,s,o),c=()=>i.removeEventListener(l,s,o);else{const u=i;u.addListener(s),c=()=>u.removeListener(s)}return e.push(c),a}function n(){e=e.filter(i=>i())}const a={add:t,clear:n};return a}function yM(e,t,n,a){const i=Al(),l=1e3/60;let s=null,o=0,c=0;function u(){i.add(e,"visibilitychange",()=>{e.hidden&&x()})}function d(){p(),i.clear()}function m(v){if(!c)return;s||(s=v,n(),n());const g=v-s;for(s=v,o+=g;o>=l;)n(),o-=l;const y=o/l;a(y),c&&(c=t.requestAnimationFrame(m))}function h(){c||(c=t.requestAnimationFrame(m))}function p(){t.cancelAnimationFrame(c),s=null,o=0,c=0}function x(){s=null,o=0}return{init:u,destroy:d,start:h,stop:p,update:n,render:a}}function pM(e,t){const n=t==="rtl",a=e==="y",i=a?"y":"x",l=a?"x":"y",s=!a&&n?-1:1,o=d(),c=m();function u(x){const{height:k,width:v}=x;return a?k:v}function d(){return a?"top":n?"right":"left"}function m(){return a?"bottom":n?"left":"right"}function h(x){return x*s}return{scroll:i,cross:l,startEdge:o,endEdge:c,measureSize:u,direction:h}}function ci(e=0,t=0){const n=Te(e-t);function a(u){return u<e}function i(u){return u>t}function l(u){return a(u)||i(u)}function s(u){return l(u)?a(u)?e:t:u}function o(u){return n?u-n*Math.ceil((u-t)/n):u}return{length:n,max:t,min:e,constrain:s,reachedAny:l,reachedMax:i,reachedMin:a,removeOffset:o}}function a0(e,t,n){const{constrain:a}=ci(0,e),i=e+1;let l=s(t);function s(h){return n?Te((i+h)%i):a(h)}function o(){return l}function c(h){return l=s(h),m}function u(h){return d().set(o()+h)}function d(){return a0(e,o(),n)}const m={get:o,set:c,add:u,clone:d};return m}function kM(e,t,n,a,i,l,s,o,c,u,d,m,h,p,x,k,v,g,y){const{cross:b,direction:z}=e,S=["INPUT","SELECT","TEXTAREA"],C={passive:!1},j=Al(),w=Al(),A=ci(50,225).constrain(p.measure(20)),P={mouse:300,touch:400},F={mouse:500,touch:600},N=x?43:25;let B=!1,R=0,$=0,O=!1,V=!1,T=!1,E=!1;function D(U){if(!y)return;function re(Oe){(Mc(y)||y(U,Oe))&&de(Oe)}const be=t;j.add(be,"dragstart",Oe=>Oe.preventDefault(),C).add(be,"touchmove",()=>{},C).add(be,"touchend",()=>{}).add(be,"touchstart",re).add(be,"mousedown",re).add(be,"touchcancel",ve).add(be,"contextmenu",ve).add(be,"click",fe,!0)}function H(){j.clear(),w.clear()}function K(){const U=E?n:t;w.add(U,"touchmove",Q,C).add(U,"touchend",ve).add(U,"mousemove",Q,C).add(U,"mouseup",ve)}function W(U){const re=U.nodeName||"";return S.includes(re)}function q(){return(x?F:P)[E?"mouse":"touch"]}function le(U,re){const be=m.add(Yf(U)*-1),Oe=d.byDistance(U,!x).distance;return x||Te(U)<A?Oe:v&&re?Oe*.5:d.byIndex(be.get(),0).distance}function de(U){const re=am(U,a);E=re,T=x&&re&&!U.buttons&&B,B=Xr(i.get(),s.get())>=2,!(re&&U.button!==0)&&(W(U.target)||(O=!0,l.pointerDown(U),u.useFriction(0).useDuration(0),i.set(s),K(),R=l.readPoint(U),$=l.readPoint(U,b),h.emit("pointerDown")))}function Q(U){if(!am(U,a)&&U.touches.length>=2)return ve(U);const be=l.readPoint(U),Oe=l.readPoint(U,b),it=Xr(be,R),xt=Xr(Oe,$);if(!V&&!E&&(!U.cancelable||(V=it>xt,!V)))return ve(U);const zt=l.pointerMove(U);it>k&&(T=!0),u.useFriction(.3).useDuration(.75),o.start(),i.add(z(zt)),U.preventDefault()}function ve(U){const be=d.byDistance(0,!1).index!==m.get(),Oe=l.pointerUp(U)*q(),it=le(z(Oe),be),xt=mM(Oe,it),zt=N-10*xt,rt=g+xt/50;V=!1,O=!1,w.clear(),u.useDuration(zt).useFriction(rt),c.distance(it,!x),E=!1,h.emit("pointerUp")}function fe(U){T&&(U.stopPropagation(),U.preventDefault(),T=!1)}function je(){return O}return{init:D,destroy:H,pointerDown:je}}function gM(e,t){let a,i;function l(m){return m.timeStamp}function s(m,h){const x=`client${(h||e.scroll)==="x"?"X":"Y"}`;return(am(m,t)?m:m.touches[0])[x]}function o(m){return a=m,i=m,s(m)}function c(m){const h=s(m)-s(i),p=l(m)-l(a)>170;return i=m,p&&(a=m),h}function u(m){if(!a||!i)return 0;const h=s(i)-s(a),p=l(m)-l(a),x=l(m)-l(i)>170,k=h/p;return p&&!x&&Te(k)>.1?k:0}return{pointerDown:o,pointerMove:c,pointerUp:u,readPoint:s}}function vM(){function e(n){const{offsetTop:a,offsetLeft:i,offsetWidth:l,offsetHeight:s}=n;return{top:a,right:i+l,bottom:a+s,left:i,width:l,height:s}}return{measure:e}}function bM(e){function t(a){return e*(a/100)}return{measure:t}}function xM(e,t,n,a,i,l,s){const o=[e].concat(a);let c,u,d=[],m=!1;function h(v){return i.measureSize(s.measure(v))}function p(v){if(!l)return;u=h(e),d=a.map(h);function g(y){for(const b of y){if(m)return;const z=b.target===e,S=a.indexOf(b.target),C=z?u:d[S],j=h(z?e:a[S]);if(Te(j-C)>=.5){v.reInit(),t.emit("resize");break}}}c=new ResizeObserver(y=>{(Mc(l)||l(v,y))&&g(y)}),n.requestAnimationFrame(()=>{o.forEach(y=>c.observe(y))})}function x(){m=!0,c&&c.disconnect()}return{init:p,destroy:x}}function zM(e,t,n,a,i,l){let s=0,o=0,c=i,u=l,d=e.get(),m=0;function h(){const C=a.get()-e.get(),j=!c;let w=0;return j?(s=0,n.set(a),e.set(a),w=C):(n.set(e),s+=C/c,s*=u,d+=s,e.add(s),w=d-m),o=Yf(w),m=d,S}function p(){const C=a.get()-t.get();return Te(C)<.001}function x(){return c}function k(){return o}function v(){return s}function g(){return b(i)}function y(){return z(l)}function b(C){return c=C,S}function z(C){return u=C,S}const S={direction:k,duration:x,velocity:v,seek:h,settled:p,useBaseFriction:y,useBaseDuration:g,useFriction:z,useDuration:b};return S}function wM(e,t,n,a,i){const l=i.measure(10),s=i.measure(50),o=ci(.1,.99);let c=!1;function u(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function d(p){if(!u())return;const x=e.reachedMin(t.get())?"min":"max",k=Te(e[x]-t.get()),v=n.get()-t.get(),g=o.constrain(k/s);n.subtract(v*g),!p&&Te(v)<l&&(n.set(e.constrain(n.get())),a.useDuration(25).useBaseFriction())}function m(p){c=!p}return{shouldConstrain:u,constrain:d,toggleActive:m}}function SM(e,t,n,a,i){const l=ci(-t+e,0),s=m(),o=d(),c=h();function u(x,k){return Xr(x,k)<=1}function d(){const x=s[0],k=sn(s),v=s.lastIndexOf(x),g=s.indexOf(k)+1;return ci(v,g)}function m(){return n.map((x,k)=>{const{min:v,max:g}=l,y=l.constrain(x),b=!k,z=$f(n,k);return b?g:z||u(v,y)?v:u(g,y)?g:y}).map(x=>parseFloat(x.toFixed(3)))}function h(){if(t<=e+i)return[l.max];if(a==="keepSnaps")return s;const{min:x,max:k}=o;return s.slice(x,k)}return{snapsContained:c,scrollContainLimit:o}}function CM(e,t,n){const a=t[0],i=n?a-e:sn(t);return{limit:ci(i,a)}}function jM(e,t,n,a){const l=t.min+.1,s=t.max+.1,{reachedMin:o,reachedMax:c}=ci(l,s);function u(h){return h===1?c(n.get()):h===-1?o(n.get()):!1}function d(h){if(!u(h))return;const p=e*(h*-1);a.forEach(x=>x.add(p))}return{loop:d}}function NM(e){const{max:t,length:n}=e;function a(l){const s=l-t;return n?s/-n:0}return{get:a}}function AM(e,t,n,a,i){const{startEdge:l,endEdge:s}=e,{groupSlides:o}=i,c=m().map(t.measure),u=h(),d=p();function m(){return o(a).map(k=>sn(k)[s]-k[0][l]).map(Te)}function h(){return a.map(k=>n[l]-k[l]).map(k=>-Te(k))}function p(){return o(u).map(k=>k[0]).map((k,v)=>k+c[v])}return{snaps:u,snapsAligned:d}}function EM(e,t,n,a,i,l){const{groupSlides:s}=i,{min:o,max:c}=a,u=d();function d(){const h=s(l),p=!e||t==="keepSnaps";return n.length===1?[l]:p?h:h.slice(o,c).map((x,k,v)=>{const g=!k,y=$f(v,k);if(g){const b=sn(v[0])+1;return wp(b)}if(y){const b=Vl(l)-sn(v)[0]+1;return wp(b,sn(v)[0])}return x})}return{slideRegistry:u}}function TM(e,t,n,a,i){const{reachedAny:l,removeOffset:s,constrain:o}=a;function c(x){return x.concat().sort((k,v)=>Te(k)-Te(v))[0]}function u(x){const k=e?s(x):o(x),v=t.map((y,b)=>({diff:d(y-k,0),index:b})).sort((y,b)=>Te(y.diff)-Te(b.diff)),{index:g}=v[0];return{index:g,distance:k}}function d(x,k){const v=[x,x+n,x-n];if(!e)return x;if(!k)return c(v);const g=v.filter(y=>Yf(y)===k);return g.length?c(g):sn(v)-n}function m(x,k){const v=t[x]-i.get(),g=d(v,k);return{index:x,distance:g}}function h(x,k){const v=i.get()+x,{index:g,distance:y}=u(v),b=!e&&l(v);if(!k||b)return{index:g,distance:x};const z=t[g]-y,S=x+d(z,0);return{index:g,distance:S}}return{byDistance:h,byIndex:m,shortcut:d}}function PM(e,t,n,a,i,l,s){function o(m){const h=m.distance,p=m.index!==t.get();l.add(h),h&&(a.duration()?e.start():(e.update(),e.render(1),e.update())),p&&(n.set(t.get()),t.set(m.index),s.emit("select"))}function c(m,h){const p=i.byDistance(m,h);o(p)}function u(m,h){const p=t.clone().set(m),x=i.byIndex(p.get(),h);o(x)}return{distance:c,index:u}}function MM(e,t,n,a,i,l,s,o){const c={passive:!0,capture:!0};let u=0;function d(p){if(!o)return;function x(k){if(new Date().getTime()-u>10)return;s.emit("slideFocusStart"),e.scrollLeft=0;const y=n.findIndex(b=>b.includes(k));Uf(y)&&(i.useDuration(0),a.index(y,0),s.emit("slideFocus"))}l.add(document,"keydown",m,!1),t.forEach((k,v)=>{l.add(k,"focus",g=>{(Mc(o)||o(p,g))&&x(v)},c)})}function m(p){p.code==="Tab"&&(u=new Date().getTime())}return{init:d}}function Or(e){let t=e;function n(){return t}function a(c){t=s(c)}function i(c){t+=s(c)}function l(c){t-=s(c)}function s(c){return Uf(c)?c:c.get()}return{get:n,set:a,add:i,subtract:l}}function i0(e,t){const n=e.scroll==="x"?s:o,a=t.style;let i=null,l=!1;function s(h){return`translate3d(${h}px,0px,0px)`}function o(h){return`translate3d(0px,${h}px,0px)`}function c(h){if(l)return;const p=fM(e.direction(h));p!==i&&(a.transform=n(p),i=p)}function u(h){l=!h}function d(){l||(a.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:d,to:c,toggleActive:u}}function RM(e,t,n,a,i,l,s,o,c){const d=jl(i),m=jl(i).reverse(),h=g().concat(y());function p(j,w){return j.reduce((A,P)=>A-i[P],w)}function x(j,w){return j.reduce((A,P)=>p(A,w)>0?A.concat([P]):A,[])}function k(j){return l.map((w,A)=>({start:w-a[A]+.5+j,end:w+t-.5+j}))}function v(j,w,A){const P=k(w);return j.map(F=>{const N=A?0:-n,B=A?n:0,R=A?"end":"start",$=P[F][R];return{index:F,loopPoint:$,slideLocation:Or(-1),translate:i0(e,c[F]),target:()=>o.get()>$?N:B}})}function g(){const j=s[0],w=x(m,j);return v(w,n,!1)}function y(){const j=t-s[0]-1,w=x(d,j);return v(w,-n,!0)}function b(){return h.every(({index:j})=>{const w=d.filter(A=>A!==j);return p(w,t)<=.1})}function z(){h.forEach(j=>{const{target:w,translate:A,slideLocation:P}=j,F=w();F!==P.get()&&(A.to(F),P.set(F))})}function S(){h.forEach(j=>j.translate.clear())}return{canLoop:b,clear:S,loop:z,loopPoints:h}}function DM(e,t,n){let a,i=!1;function l(c){if(!n)return;function u(d){for(const m of d)if(m.type==="childList"){c.reInit(),t.emit("slidesChanged");break}}a=new MutationObserver(d=>{i||(Mc(n)||n(c,d))&&u(d)}),a.observe(e,{childList:!0})}function s(){a&&a.disconnect(),i=!0}return{init:l,destroy:s}}function IM(e,t,n,a){const i={};let l=null,s=null,o,c=!1;function u(){o=new IntersectionObserver(x=>{c||(x.forEach(k=>{const v=t.indexOf(k.target);i[v]=k}),l=null,s=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:a}),t.forEach(x=>o.observe(x))}function d(){o&&o.disconnect(),c=!0}function m(x){return Nl(i).reduce((k,v)=>{const g=parseInt(v),{isIntersecting:y}=i[g];return(x&&y||!x&&!y)&&k.push(g),k},[])}function h(x=!0){if(x&&l)return l;if(!x&&s)return s;const k=m(x);return x&&(l=k),x||(s=k),k}return{init:u,destroy:d,get:h}}function LM(e,t,n,a,i,l){const{measureSize:s,startEdge:o,endEdge:c}=e,u=n[0]&&i,d=x(),m=k(),h=n.map(s),p=v();function x(){if(!u)return 0;const y=n[0];return Te(t[o]-y[o])}function k(){if(!u)return 0;const y=l.getComputedStyle(sn(a));return parseFloat(y.getPropertyValue(`margin-${c}`))}function v(){return n.map((y,b,z)=>{const S=!b,C=$f(z,b);return S?h[b]+d:C?h[b]+m:z[b+1][o]-y[o]}).map(Te)}return{slideSizes:h,slideSizesWithGaps:p,startGap:d,endGap:m}}function FM(e,t,n,a,i,l,s,o,c){const{startEdge:u,endEdge:d,direction:m}=e,h=Uf(n);function p(g,y){return jl(g).filter(b=>b%y===0).map(b=>g.slice(b,b+y))}function x(g){return g.length?jl(g).reduce((y,b,z)=>{const S=sn(y)||0,C=S===0,j=b===Vl(g),w=i[u]-l[S][u],A=i[u]-l[b][d],P=!a&&C?m(s):0,F=!a&&j?m(o):0,N=Te(A-F-(w+P));return z&&N>t+c&&y.push(b),j&&y.push(g.length),y},[]).map((y,b,z)=>{const S=Math.max(z[b-1]||0);return g.slice(S,y)}):[]}function k(g){return h?p(g,n):x(g)}return{groupSlides:k}}function BM(e,t,n,a,i,l,s){const{align:o,axis:c,direction:u,startIndex:d,loop:m,duration:h,dragFree:p,dragThreshold:x,inViewThreshold:k,slidesToScroll:v,skipSnaps:g,containScroll:y,watchResize:b,watchSlides:z,watchDrag:S,watchFocus:C}=l,j=2,w=vM(),A=w.measure(t),P=n.map(w.measure),F=pM(c,u),N=F.measureSize(A),B=bM(N),R=hM(o,N),$=!m&&!!y,O=m||!!y,{slideSizes:V,slideSizesWithGaps:T,startGap:E,endGap:D}=LM(F,A,P,n,O,i),H=FM(F,N,v,m,A,P,E,D,j),{snaps:K,snapsAligned:W}=AM(F,R,A,P,H),q=-sn(K)+sn(T),{snapsContained:le,scrollContainLimit:de}=SM(N,q,W,y,j),Q=$?le:W,{limit:ve}=CM(q,Q,m),fe=a0(Vl(Q),d,m),je=fe.clone(),oe=jl(n),U=({dragHandler:Yt,scrollBody:zr,scrollBounds:ki,options:{loop:ta}})=>{ta||ki.constrain(Yt.pointerDown()),zr.seek()},re=({scrollBody:Yt,translate:zr,location:ki,offsetLocation:ta,previousLocation:na,scrollLooper:us,slideLooper:aa,dragHandler:qc,animation:Wc,eventHandler:wr,scrollBounds:ds,options:{loop:ms}},gi)=>{const $t=Yt.settled(),Qc=!ds.shouldConstrain(),Z=ms?$t:$t&&Qc,ue=Z&&!qc.pointerDown();ue&&Wc.stop();const pe=ki.get()*gi+na.get()*(1-gi);ta.set(pe),ms&&(us.loop(Yt.direction()),aa.loop()),zr.to(ta.get()),ue&&wr.emit("settle"),Z||wr.emit("scroll")},be=yM(a,i,()=>U(xr),Yt=>re(xr,Yt)),Oe=.68,it=Q[fe.get()],xt=Or(it),zt=Or(it),rt=Or(it),fn=Or(it),Gt=zM(xt,rt,zt,fn,h,Oe),pi=TM(m,Q,q,ve,fn),Ut=PM(be,fe,je,Gt,pi,fn,s),os=NM(ve),cs=Al(),ft=IM(t,n,s,k),{slideRegistry:Mn}=EM($,y,Q,de,H,oe),Vc=MM(e,n,Mn,Ut,Gt,cs,s,C),xr={ownerDocument:a,ownerWindow:i,eventHandler:s,containerRect:A,slideRects:P,animation:be,axis:F,dragHandler:kM(F,e,a,i,fn,gM(F,i),xt,be,Ut,Gt,pi,fe,s,B,p,x,g,Oe,S),eventStore:cs,percentOfView:B,index:fe,indexPrevious:je,limit:ve,location:xt,offsetLocation:rt,previousLocation:zt,options:l,resizeHandler:xM(t,s,i,n,F,b,w),scrollBody:Gt,scrollBounds:wM(ve,rt,fn,Gt,B),scrollLooper:jM(q,ve,rt,[xt,rt,zt,fn]),scrollProgress:os,scrollSnapList:Q.map(os.get),scrollSnaps:Q,scrollTarget:pi,scrollTo:Ut,slideLooper:RM(F,N,q,V,T,K,Q,rt,n),slideFocus:Vc,slidesHandler:DM(t,s,z),slidesInView:ft,slideIndexes:oe,slideRegistry:Mn,slidesToScroll:H,target:fn,translate:i0(F,t)};return xr}function OM(){let e={},t;function n(u){t=u}function a(u){return e[u]||[]}function i(u){return a(u).forEach(d=>d(t,u)),c}function l(u,d){return e[u]=a(u).concat([d]),c}function s(u,d){return e[u]=a(u).filter(m=>m!==d),c}function o(){e={}}const c={init:n,emit:i,off:s,on:l,clear:o};return c}const KM={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function HM(e){function t(l,s){return n0(l,s||{})}function n(l){const s=l.breakpoints||{},o=Nl(s).filter(c=>e.matchMedia(c).matches).map(c=>s[c]).reduce((c,u)=>t(c,u),{});return t(l,o)}function a(l){return l.map(s=>Nl(s.breakpoints||{})).reduce((s,o)=>s.concat(o),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:a}}function _M(e){let t=[];function n(l,s){return t=s.filter(({options:o})=>e.optionsAtMedia(o).active!==!1),t.forEach(o=>o.init(l,e)),s.reduce((o,c)=>Object.assign(o,{[c.name]:c}),{})}function a(){t=t.filter(l=>l.destroy())}return{init:n,destroy:a}}function Yo(e,t,n){const a=e.ownerDocument,i=a.defaultView,l=HM(i),s=_M(l),o=Al(),c=OM(),{mergeOptions:u,optionsAtMedia:d,optionsMediaQueries:m}=l,{on:h,off:p,emit:x}=c,k=F;let v=!1,g,y=u(KM,Yo.globalOptions),b=u(y),z=[],S,C,j;function w(){const{container:oe,slides:U}=b;C=(nm(oe)?e.querySelector(oe):oe)||e.children[0];const be=nm(U)?C.querySelectorAll(U):U;j=[].slice.call(be||C.children)}function A(oe){const U=BM(e,C,j,a,i,oe,c);if(oe.loop&&!U.slideLooper.canLoop()){const re=Object.assign({},oe,{loop:!1});return A(re)}return U}function P(oe,U){v||(y=u(y,oe),b=d(y),z=U||z,w(),g=A(b),m([y,...z.map(({options:re})=>re)]).forEach(re=>o.add(re,"change",F)),b.active&&(g.translate.to(g.location.get()),g.animation.init(),g.slidesInView.init(),g.slideFocus.init(je),g.eventHandler.init(je),g.resizeHandler.init(je),g.slidesHandler.init(je),g.options.loop&&g.slideLooper.loop(),C.offsetParent&&j.length&&g.dragHandler.init(je),S=s.init(je,z)))}function F(oe,U){const re=H();N(),P(u({startIndex:re},oe),U),c.emit("reInit")}function N(){g.dragHandler.destroy(),g.eventStore.clear(),g.translate.clear(),g.slideLooper.clear(),g.resizeHandler.destroy(),g.slidesHandler.destroy(),g.slidesInView.destroy(),g.animation.destroy(),s.destroy(),o.clear()}function B(){v||(v=!0,o.clear(),N(),c.emit("destroy"),c.clear())}function R(oe,U,re){!b.active||v||(g.scrollBody.useBaseFriction().useDuration(U===!0?0:b.duration),g.scrollTo.index(oe,re||0))}function $(oe){const U=g.index.add(1).get();R(U,oe,-1)}function O(oe){const U=g.index.add(-1).get();R(U,oe,1)}function V(){return g.index.add(1).get()!==H()}function T(){return g.index.add(-1).get()!==H()}function E(){return g.scrollSnapList}function D(){return g.scrollProgress.get(g.offsetLocation.get())}function H(){return g.index.get()}function K(){return g.indexPrevious.get()}function W(){return g.slidesInView.get()}function q(){return g.slidesInView.get(!1)}function le(){return S}function de(){return g}function Q(){return e}function ve(){return C}function fe(){return j}const je={canScrollNext:V,canScrollPrev:T,containerNode:ve,internalEngine:de,destroy:B,off:p,on:h,emit:x,plugins:le,previousScrollSnap:K,reInit:k,rootNode:Q,scrollNext:$,scrollPrev:O,scrollProgress:D,scrollSnapList:E,scrollTo:R,selectedScrollSnap:H,slideNodes:fe,slidesInView:W,slidesNotInView:q};return P(t,n),setTimeout(()=>c.emit("init"),0),je}Yo.globalOptions=void 0;function Vf(e={},t=[]){const n=f.useRef(e),a=f.useRef(t),[i,l]=f.useState(),[s,o]=f.useState(),c=f.useCallback(()=>{i&&i.reInit(n.current,a.current)},[i]);return f.useEffect(()=>{Gf(n.current,e)||(n.current=e,c())},[e,c]),f.useEffect(()=>{dM(a.current,t)||(a.current=t,c())},[t,c]),f.useEffect(()=>{if(uM()&&s){Yo.globalOptions=Vf.globalOptions;const u=Yo(s,n.current,a.current);return l(u),()=>u.destroy()}else l(void 0)},[s,l]),[o,i]}Vf.globalOptions=void 0;const r0=f.createContext(null);function Rc(){const e=f.useContext(r0);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const El=f.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:a,className:i,children:l,...s},o)=>{const[c,u]=Vf({...t,axis:e==="horizontal"?"x":"y"},a),[d,m]=f.useState(!1),[h,p]=f.useState(!1),x=f.useCallback(y=>{y&&(m(y.canScrollPrev()),p(y.canScrollNext()))},[]),k=f.useCallback(()=>{u==null||u.scrollPrev()},[u]),v=f.useCallback(()=>{u==null||u.scrollNext()},[u]),g=f.useCallback(y=>{y.key==="ArrowLeft"?(y.preventDefault(),k()):y.key==="ArrowRight"&&(y.preventDefault(),v())},[k,v]);return f.useEffect(()=>{!u||!n||n(u)},[u,n]),f.useEffect(()=>{if(u)return x(u),u.on("reInit",x),u.on("select",x),()=>{u==null||u.off("select",x)}},[u,x]),r.jsx(r0.Provider,{value:{carouselRef:c,api:u,opts:t,orientation:e||((t==null?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:k,scrollNext:v,canScrollPrev:d,canScrollNext:h},children:r.jsx("div",{ref:o,onKeyDownCapture:g,className:G("relative",i),role:"region","aria-roledescription":"carousel",...s,children:l})})});El.displayName="Carousel";const Tl=f.forwardRef(({className:e,...t},n)=>{const{carouselRef:a,orientation:i}=Rc();return r.jsx("div",{ref:a,className:"overflow-hidden",children:r.jsx("div",{ref:n,className:G("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...t})})});Tl.displayName="CarouselContent";const Pl=f.forwardRef(({className:e,...t},n)=>{const{orientation:a}=Rc();return r.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:G("min-w-0 shrink-0 grow-0 basis-full",a==="horizontal"?"pl-4":"pt-4",e),...t})});Pl.displayName="CarouselItem";const qf=f.forwardRef(({className:e,variant:t="outline",size:n="icon",...a},i)=>{const{orientation:l,scrollPrev:s,canScrollPrev:o}=Rc();return r.jsxs(ne,{ref:i,variant:t,size:n,className:G("absolute  h-8 w-8 rounded-full",l==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!o,onClick:s,...a,children:[r.jsx(jv,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Previous slide"})]})});qf.displayName="CarouselPrevious";const Wf=f.forwardRef(({className:e,variant:t="outline",size:n="icon",...a},i)=>{const{orientation:l,scrollNext:s,canScrollNext:o}=Rc();return r.jsxs(ne,{ref:i,variant:t,size:n,className:G("absolute h-8 w-8 rounded-full",l==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!o,onClick:s,...a,children:[r.jsx(yl,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Next slide"})]})});Wf.displayName="CarouselNext";const GM=({title:e,subtitle:t,categories:n})=>{const{language:a}=_e(),i=at[a];return r.jsx("section",{className:"py-20",style:{backgroundColor:"#191919"},children:r.jsxs("div",{className:"container mx-auto max-w-7xl px-4",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-white",children:e}),r.jsx("p",{className:"text-xl text-white/80 max-w-2xl mx-auto",children:t})]}),r.jsx("div",{className:"block md:hidden px-4",children:r.jsx(El,{opts:{align:"start"},className:"w-full",children:r.jsx(Tl,{className:"-ml-2",children:n.map(l=>r.jsx(Pl,{className:"pl-2 basis-[60%]",children:r.jsx(ae,{to:l.href,className:"group block",children:r.jsx(Ye,{className:"h-[380px] hover:shadow-luxury transition-all duration-300 bg-transparent border-white/20 overflow-hidden rounded-lg",children:r.jsxs($e,{className:"p-0 relative h-full",children:[r.jsx("div",{className:"absolute inset-0",children:r.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-cover object-center"})}),r.jsx("div",{className:"absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30",children:r.jsxs("div",{className:"p-4 h-full flex flex-col",children:[r.jsxs("div",{className:"h-16 mb-6",children:[r.jsx("h3",{className:"text-lg font-semibold group-hover:text-primary transition-colors text-black mb-2 line-clamp-2",children:l.title}),r.jsx("p",{className:"text-black/70 text-sm line-clamp-1",children:l.description})]}),r.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:r.jsxs("span",{className:"text-primary text-sm font-medium group-hover:gap-2 transition-all flex items-center",children:[i.homepage.exploreCollection,r.jsx(yl,{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"})]})})]})})]})})})},l.id))})})}),r.jsx("div",{className:"hidden md:grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map(l=>r.jsx(ae,{to:l.href,className:"group",children:r.jsx(Ye,{className:"h-[380px] hover:shadow-luxury transition-all duration-300 bg-transparent border-white/20 overflow-hidden rounded-lg",children:r.jsxs($e,{className:"p-0 relative h-full",children:[r.jsx("div",{className:"absolute inset-0",children:r.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-cover object-center"})}),r.jsx("div",{className:"absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30",children:r.jsxs("div",{className:"p-6 h-full flex flex-col",children:[r.jsxs("div",{className:"h-20 mb-6",children:[r.jsx("h3",{className:"text-xl font-semibold group-hover:text-primary transition-colors text-black mb-3 line-clamp-2",children:l.title}),r.jsx("p",{className:"text-black/70 text-sm line-clamp-1",children:l.description})]}),r.jsx("div",{className:"absolute bottom-6 left-6 right-6",children:r.jsxs("span",{className:"text-primary text-sm font-medium group-hover:gap-2 transition-all flex items-center",children:[i.homepage.exploreCollection,r.jsx(yl,{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"})]})})]})})]})})},l.id))})]})})},UM=()=>{const{language:e}=_e(),t=at[e],n=AE.categories.map(a=>{const i=(l,s)=>s.split(".").reduce((o,c)=>o==null?void 0:o[c],l)||"";return{...a,title:i(t,a.titleKey),description:i(t,a.descriptionKey)}});return r.jsx(GM,{title:t.homepage.categoriesTitle,subtitle:t.homepage.categoriesSubtitle,categories:n})},l0=({isOpen:e,onClose:t,productName:n,stores:a})=>{const{language:i}=_e(),l=at[i];if(!e)return null;const s=c=>{window.open(c,"_blank","noopener,noreferrer")},o=c=>{c.target===c.currentTarget&&t()};return r.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:o,children:r.jsx(Ye,{className:"relative bg-[#191919] backdrop-blur-md border-t border-white/20 rounded-t-lg w-full h-[33vh]",children:r.jsxs($e,{className:"p-6 text-center",children:[r.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors",children:r.jsx(fi,{className:"w-5 h-5 text-white"})}),r.jsx("h3",{className:"font-semibold text-lg text-white mb-2 pr-8",children:n}),r.jsx("p",{className:"text-sm text-white/70 mb-6",children:l.productCard.available}),r.jsx("div",{className:"space-y-4",children:a.map(c=>r.jsx("button",{onClick:()=>s(c.url),className:"w-full flex items-center justify-center p-4 hover:bg-white/10 transition-colors rounded-full",children:r.jsx("img",{src:c.logo,alt:c.name,className:"h-8 w-auto max-w-full object-contain"})},c.id))})]})})})},Qf=({product:e,className:t=""})=>{const[n,a]=I.useState(!1),{language:i}=_e(),l=at[i],c=[{id:"trendyol",name:"Trendyol",logo:"/lovable-uploads/081fc38c-4560-45a6-983f-80febd33d0e4.png",url:{"Sinceva Brightening Vitamin C Serum 30 ml":"https://www.trendyol.com/pd/sinceva/vitamin-c-serum-5-c-vitamini-aloe-vera-elma-ozlu-ton-esitleyici-aydinlatici-30ml-p-985597681?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Spot Arbutin Serum 30 ml":"https://www.trendyol.com/pd/sinceva/arbutin-serum-2-alfa-arbutin-niasinamid-elma-ozlu-leke-karsiti-ton-esitleyici-30ml-p-985597018?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Wrinkle Eye Cream 20 ml":"https://www.trendyol.com/pd/sinceva/goz-cevresi-kremi-proxylane-kolajen-elma-ozlu-kirisiklik-ve-morluk-karsiti-20ml-p-985597222?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Aging Night Cream 50 ml":"https://www.trendyol.com/pd/sinceva/gece-kremi-retinol-niasinamid-elma-ozlu-ince-cizgi-kirisiklik-karsiti-50ml-p-985597313?merchantId=1083214&filterOverPriceListings=false","Sinceva Skin Renewing Tonic 200 ml":"https://www.trendyol.com/pd/sinceva/cilt-yenileyici-tonik-5-glikolik-asit-elma-ozlu-gozenek-sikilastirici-sebum-dengesi-200ml-p-985596983?merchantId=1083214&filterOverPriceListings=false","Sinceva Purifying Peeling Cream Scrub 200 ml":"https://www.trendyol.com/pd/sinceva/peeling-scrub-krem-kayisi-cekirdegi-partikullu-elma-ozlu-olu-deri-gozenek-arindirici-200ml-p-985597046?merchantId=1083214&filterOverPriceListings=false","Sinceva Purifying Face Cleansing Foam 200 ml":"https://www.trendyol.com/pd/sinceva/yuz-temizleme-kopugu-aloe-vera-elma-ozlu-nazik-temizleyici-arindirici-200ml-p-985596926?merchantId=1083214&filterOverPriceListings=false","Sinceva SPF 50+ Daily SunCare Cream 100 ml":"https://www.trendyol.com/pd/sinceva/gunes-kremi-spf-50-aloe-vera-panthenol-elma-ozlu-genis-spektrumlu-uva-uvb-koruma-100ml-p-985596960?merchantId=1083214&filterOverPriceListings=false","Sinceva Hyaluronic Acid Moisturizing Cream 50 ml":"https://www.trendyol.com/pd/sinceva/hyaluronik-asit-gunluk-nemlendirici-krem-panthenol-elma-ozlu-yogun-nem-bariyer-onarici-50ml-p-985596967?merchantId=1083214&filterOverPriceListings=false"}[e.name]||"https://www.trendyol.com"}];return r.jsxs(r.Fragment,{children:[r.jsx(ae,{to:`/product/${e.id}`,children:r.jsx(Ye,{className:`group hover:shadow-luxury transition-all duration-300 cursor-pointer overflow-hidden rounded-lg ${t}`,children:r.jsx($e,{className:"p-0",children:r.jsx(Wn,{ratio:2/3,children:r.jsxs("div",{className:"relative w-full h-full",children:[r.jsx("img",{src:e.image||"https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:e.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),r.jsx("div",{className:"absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30",children:r.jsxs("div",{className:"p-4 h-full flex flex-col",children:[r.jsx("div",{className:"flex-1",children:r.jsx("h3",{className:"text-lg font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2",children:e.name})}),r.jsx("div",{className:"mt-auto flex items-center justify-center",children:r.jsx(ne,{variant:"ghost",size:"sm",className:"w-full bg-transparent text-black hover:bg-transparent hover:text-[#ef2b2d] transition-all duration-200 hover:scale-105 font-semibold",onClick:u=>{u.preventDefault(),u.stopPropagation(),a(!0)},children:l.productCard.buyNow})})]})})]})})})})}),r.jsx(l0,{isOpen:n,onClose:()=>a(!1),productName:e.name,stores:c})]})},YM=()=>{const{language:e}=_e(),t=at[e],[n,a]=f.useState(6),i=()=>{a(o=>o+6)},l=zl.products.slice(0,n),s=n<zl.products.length;return r.jsx("section",{className:"py-20 bg-gray-50",children:r.jsxs("div",{className:"container mx-auto max-w-7xl px-4",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-[#191919]",children:t.homepage.allProductsTitle}),r.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:t.homepage.allProductsSubtitle})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:l.map(o=>r.jsx(Qf,{product:o},o.id))}),s&&r.jsx("div",{className:"text-center mt-12",children:r.jsx("button",{onClick:i,className:"bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors",children:t.homepage.loadMore})})]})})},$M=()=>(console.log("HomeTemplate loading..."),r.jsxs(qe,{children:[r.jsx(sM,{}),r.jsx(UM,{}),r.jsx(YM,{})]})),VM=()=>(console.log("Index page loading..."),r.jsx($M,{})),qM=()=>{const e=Pn();return f.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:r.jsxs("div",{className:"text-center",children:[r.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),r.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),r.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},zn=({title:e,subtitle:t,backgroundImage:n,backgroundImageMobile:a,backgroundClass:i="bg-gradient-to-br from-primary/10 via-background to-secondary/20"})=>r.jsxs("section",{className:"relative overflow-hidden",children:[r.jsx("div",{className:"md:hidden",children:r.jsx(Wn,{ratio:2/3,children:r.jsxs("div",{className:`relative w-full h-full flex items-center justify-center ${i}`,children:[(a||n)&&r.jsxs("div",{className:"absolute inset-0 z-0",children:[r.jsx("img",{src:a||n,alt:e,className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"})]}),r.jsx("div",{className:"relative z-10"})]})})}),r.jsx("div",{className:"hidden md:block",children:r.jsx(Wn,{ratio:3/1,children:r.jsxs("div",{className:`relative w-full h-full flex items-center justify-center ${i}`,children:[n&&r.jsxs("div",{className:"absolute inset-0 z-0",children:[r.jsx("img",{src:n,alt:e,className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"})]}),r.jsx("div",{className:"relative z-10"})]})})})]}),s0="/assets/tips_banner-C9vmfIIJ.jpg",o0="/assets/tips_banner_mobile-D7x4OlEW.jpg",im=[{id:"apple-skin-benefits",date:"2024-03-20",author:"SincEva",readTime:"8",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80"},{id:"morning-skincare-routine",date:"2024-03-15",author:"SincEva",readTime:"7",category:"daily-care",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"},{id:"vitamin-c-benefits",date:"2024-03-10",author:"SincEva",readTime:"9",category:"ingredients",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"},{id:"natural-face-masks",date:"2024-03-08",author:"SincEva",readTime:"10",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"},{id:"summer-sun-protection",date:"2024-03-05",author:"SincEva",readTime:"8",category:"sun-care",image:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"},{id:"honey-skincare-benefits",date:"2024-03-01",author:"SincEva",readTime:"7",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1587049352846-4a222e784691?auto=format&fit=crop&w=800&q=80"},{id:"night-cream-importance",date:"2024-02-28",author:"SincEva",readTime:"6",category:"night-care",image:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80"},{id:"eye-cream-guide",date:"2024-02-22",author:"SincEva",readTime:"8",category:"eye-care",image:"https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"},{id:"green-tea-antioxidants",date:"2024-02-20",author:"SincEva",readTime:"7",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"},{id:"arbutin-skin-brightening",date:"2024-02-18",author:"SincEva",readTime:"9",category:"ingredients",image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"},{id:"chemical-peeling-guide",date:"2024-02-12",author:"SincEva",readTime:"11",category:"treatments",image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"},{id:"hydration-secrets",date:"2024-02-08",author:"SincEva",readTime:"8",category:"hydration",image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"},{id:"aloe-vera-healing",date:"2024-02-05",author:"SincEva",readTime:"6",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80"},{id:"anti-aging-strategies",date:"2024-02-02",author:"SincEva",readTime:"12",category:"anti-aging",image:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"},{id:"toner-benefits",date:"2024-01-28",author:"SincEva",readTime:"6",category:"cleansing",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"},{id:"winter-skincare-tips",date:"2024-01-22",author:"SincEva",readTime:"9",category:"seasonal",image:"https://images.unsplash.com/photo-1609690409547-ba5d5f60c3c6?auto=format&fit=crop&w=800&q=80"},{id:"rose-water-benefits",date:"2024-01-20",author:"SincEva",readTime:"5",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1595431025698-b7b2b0c7d91e?auto=format&fit=crop&w=800&q=80"},{id:"acne-prone-skin-care",date:"2024-01-18",author:"SincEva",readTime:"10",category:"problem-skin",image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"},{id:"double-cleansing-method",date:"2024-01-12",author:"SincEva",readTime:"7",category:"cleansing",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"},{id:"retinol-beginners-guide",date:"2024-01-08",author:"SincEva",readTime:"11",category:"ingredients",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"}],WM={"apple-skin-benefits":{title:"Elmanın Cilde Faydaları: Doğanın Mucizevi Hediyesi",excerpt:"Elma sadece sağlıklı bir meyve değil, aynı zamanda cildiniz için harika bir bakım kaynağıdır. İşte elmanın cildinize sağlayacağı inanılmaz faydalar...",content:`Elma, "günde bir elma doktoru uzak tutar" sözüyle bilinen sağlıklı bir meyve olmasının yanı sıra, cilt bakımında da mucizevi etkilere sahiptir. Hem yenildiğinde içeriden hem de cilde uygulandığında dışarıdan cildinizi besler ve güzelleştirir.

## Elmanın İçeriği ve Cilt İçin Önemi

Elma, zengin vitamin ve mineral içeriğiyle cildiniz için gerçek bir hazinedir:

**Vitamin C**: Elmanın en önemli bileşenlerinden biri olan C vitamini, güçlü bir antioksidandır. Kolajen üretimini artırarak cildin elastikiyetini korur, kırışıklıkları azaltır ve cilt tonunu aydınlatır. Özellikle yeşil elmalarda daha yüksek konsantrasyonda bulunur.

**Vitamin A**: Hücre yenilenmesini hızlandırır ve cilt dokusunu iyileştirir. Akne ve sivilce izlerinin azalmasına yardımcı olur, gözeneklerin temizlenmesine destek sağlar.

**Vitamin E**: Cildi nemlendirir ve koruyucu bir bariyer oluşturur. Serbest radikallere karşı etkili bir savunma mekanizması sağlar.

**Vitamin B Kompleksi**: Özellikle B2 (riboflavin) ve B3 (niasinamid) cildin nem dengesini korur, kızarıklıkları azaltır ve cilt tonunu eşitler.

**Mineraller**: Elma, potasyum, magnezyum, kalsiyum ve demir gibi mineraller açısından zengindir. Bu mineraller cildin sağlıklı kalması için gerekli elektrolit dengesini sağlar.

**Polifenoller ve Flavonoidler**: Elma kabuğunda yoğun olarak bulunan bu antioksidanlar, cildi erken yaşlanmaya karşı korur, güneş hasarını onarır ve cilt kanserini önlemeye yardımcı olur.

**Malic Asit**: Elmada doğal olarak bulunan bu alfa hidroksi asit (AHA), ölü deri hücrelerini nazikçe uzaklaştırır, gözenekleri temizler ve cildin doğal parlaklığını ortaya çıkarır.

**Pektin**: Elmada bulunan bu lif türü, cilde uygulandığında nem çekici özellik gösterir ve cildin yumuşak kalmasını sağlar.

## Elmanın Cilde Sağladığı Faydalar

### 1. Güçlü Antioksidan Koruması

Elmadaki polifenoller ve flavonoidler, serbest radikallere karşı güçlü bir kalkan oluşturur. Serbest radikaller, hava kirliliği, güneş ışınları ve stres gibi çevre faktörlerinin ciltte oluşturduğu zararlı moleküllerdir. Bu moleküller, cildin erken yaşlanmasına, kırışıklıklara ve cilt hastalıklarına neden olur. Elmanın antioksidanları bu zararlı etkileri nötralize ederek cildinizi korur.

Özellikle kırmızı elma kabuğunda bulunan kuersetin adlı flavonoid, en güçlü antioksidanlardan biridir. Araştırmalar, düzenli kuersetin alımının ciltteki iltihapları azalttığını, UV hasarını önlediğini ve cilt kanserine karşı koruyucu etki gösterdiğini ortaya koymuştur.

### 2. Doğal Peeling ve Cilt Yenilenmesi

Elmadaki malik asit, doğal bir alfa hidroksi asit (AHA) olarak işlev görür. Bu asit, ölü deri hücrelerini nazikçe çözerek cildin yenilenmesini sağlar. Kimyasal peelinglerde kullanılan glikolik ve laktik aside benzer şekilde çalışır ancak çok daha nazik ve doğaldır.

Malik asit kullanımının faydaları:
- Ölü deri hücrelerini uzaklaştırır
- Gözeneklerin tıkanmasını önler
- Siyah nokta ve akne oluşumunu azaltır
- Cilt dokusunu pürüzsüzleştirir
- Hiperpigmentasyonu ve lekeleri azaltır
- Cildin doğal parlaklığını artırır

Hassas ciltler için bile uygundur çünkü malik asit diğer AHA'lara göre daha yumuşak etki eder.

### 3. Nemlendirme ve Yumuşatma

Elmadaki pektin ve doğal şekerler, cildin nem seviyesini artırır. Elma püresi veya elma suyu cilde uygulandığında, nem çekici (humektan) özellik gösterir. Bu, cildin dışarıdan su çekerek nemli kalmasını sağlar.

Ayrıca elmanın içerdiğ su oranı (%85) cildi nemlendirir ve serinletir. Özellikle yaz aylarında veya güneşten sonra elma maskesi uygulamak, cildi sakinleştirir ve nemlendirir.

### 4. Cilt Tonu Eşitleme ve Aydınlatma

Elmanın C vitamini içeriği, melanin üretimini düzenler ve cilt tonunu eşitler. Düzenli kullanımda:
- Koyu lekeler ve yaş lekeleri azalır
- Güneş lekeleri soluklaşır
- Akne izleri ve hiperpigmentasyon giderilir
- Cilt daha aydınlık ve canlı görünür

Malik asit de aynı amaçla çalışır. Üst deri tabakasındaki pigmentli hücreleri nazikçe uzaklaştırarak, alttan gelen daha açık tonlu ve sağlıklı cildin görünmesini sağlar.

### 5. Akne ve Sivilce Tedavisi

Elmanın antibakteriyel özellikleri, akneye neden olan bakterileri (Propionibacterium acnes) yok etmeye yardımcı olur. Ayrıca:
- Aşırı yağ üretimini dengeler
- Gözenekleri temizler ve sıkılaştırır
- İltihabı azaltır
- Akne izlerinin solmasına yardımcı olur

Yeşil elma özellikle yağlı ve akneli ciltler için idealdir çünkü astrenjan (sıkılaştırıcı) özelliği daha yüksektir.

### 6. Yaşlanma Karşıtı Etki

Elma, yaşlanma karşıtı cilt bakımının doğal bir kaynağıdır:

**Kolajen Üretimini Artırır**: C vitamini, kolajen sentezi için gereklidir. Kolajen, cildin elastikiyetini ve sıkılığını sağlayan ana proteindir. Yaşla birlikte kolajen üretimi azalır ve bu da kırışıklıklara, sarkmaya ve ince çizgilere neden olur. Düzenli elma tüketimi ve cilde elma uygulaması, kolajen üretimini destekler.

**Elastin Liflerini Güçlendirir**: Elmanın içerdiği bakır minerali, elastin liflerinin yapımında rol oynar. Elastin, cildin esnekliğini sağlar ve cildin yaşlandıkça sarkmasını önler.

**Kırışıklıkları Azaltır**: Antioksidanlar ve vitaminler sayesinde mevcut kırışıklıkların görünümünü azaltır ve yeni kırışıklık oluşumunu geciktirir.

**Cilt Sıkılığını Artırır**: Düzenli kullanımda cildin daha sıkı ve gergin görünmesini sağlar.

### 7. Hassas Cilt Sakinleştirme

Elma, anti-inflamatuar özelliklere sahiptir. Kızarık, tahriş olmuş veya hassas ciltler için ideal bir doğal çözümdür:
- Güneş yanığını rahatlatır
- Ciltteki kızarıklığı azaltır
- Kaşıntıyı giderir
- Cildi soğutur ve sakinleştirir

Özellikle taze elma dilimlerini cilde uygulamak veya elma suyunu pamukla cilde sürmek, anında rahatlatıcı etki sağlar.

### 8. Gözenek Bakımı

Elmanın astrenjan (sıkılaştırıcı) özellikleri, genişlemiş gözenekleri küçültür ve gözenek tıkanmasını önler. Malik asit gözeneklerin içindeki kirleri ve fazla yağı çözerek temizler, bu da gözeneklerin daha küçük görünmesini sağlar.

## Evde Elma ile Cilt Bakımı Tarifleri

### 1. Klasik Elma Yüz Maskesi (Tüm Cilt Tipleri)

**Malzemeler:**
- 1/2 orta boy elma (organik tercih edilmeli)
- 1 yemek kaşığı bal
- 1 tatlı kaşığı limon suyu (opsiyonel, leke için)

**Yapılışı:**
1. Elmayı rendeleyin veya blenderda püre haline getirin
2. Balı ekleyin ve iyice karıştırın
3. Limon suyunu ekleyin (hassas ciltler için atlayın)
4. Temiz ve nemli yüze uygulayın
5. 15-20 dakika bekleyin
6. Ilık suyla durulayın
7. Haftada 2-3 kez uygulayın

**Faydaları:** Nemlendirici, aydınlatıcı, gözenek sıkılaştırıcı

### 2. Elma ve Yoğurt Maskesi (Yağlı ve Karma Cilt)

**Malzemeler:**
- 1/2 yeşil elma
- 2 yemek kaşığı yağsız yoğurt
- 1 tatlı kaşığı zerdeçal tozu

**Yapılışı:**
1. Yeşil elmayı rendeleyin
2. Yoğurt ve zerdeçalı ekleyin
3. Homojen bir karışım elde edin
4. Yüze ve boyuna uygulayın
5. 20 dakika bekleyin
6. Durulayın ve nemlendirin

**Faydaları:** Yağ dengeleyici, akne önleyici, aydınlatıcı

### 3. Elma ve Yulaf Peeling Maskesi

**Malzemeler:**
- 1/2 elma (püre)
- 2 yemek kaşığı yulaf ezmesi
- 1 tatlı kaşığı bal
- 1 tatlı kaşığı hindistan cevizi yağı

**Yapılışı:**
1. Tüm malzemeleri karıştırın
2. Nemli yüze uygulayın
3. Dairesel hareketlerle 2-3 dakika masaj yapın
4. 10 dakika daha bekleyin
5. Ilık suyla durulayın

**Faydaları:** Nazik peeling, nemlendirme, cilt yumuşatma

### 4. Elma Suyu Tonik (Günlük Kullanım)

**Malzemeler:**
- 1 elmadan elde edilen taze sıkılmış elma suyu
- 1 yemek kaşığı gül suyu
- 3-4 damla E vitamini yağı

**Yapılışı:**
1. Malzemeleri karıştırın
2. Cam bir şişede buzdolabında saklayın
3. Sabah ve akşam pamuk ile yüze uygulayın
4. 3 gün içinde tüketin

**Faydaları:** pH dengesi, gözenek sıkılaştırma, parlaklık

### 5. Elma ve Avokado Nemlendirici Maske (Kuru Cilt)

**Malzemeler:**
- 1/2 kırmızı elma
- 1/4 olgun avokado
- 1 tatlı kaşığı bal
- 1 tatlı kaşığı badem yağı

**Yapılışı:**
1. Elma ve avokadoyu ezin
2. Bal ve yağı ekleyin
3. Kremsi bir kıvam elde edin
4. Yüze kalın bir tabaka halinde sürün
5. 25-30 dakika bekleyin
6. Durulayıp hafif nemlendirin

**Faydaları:** Yoğun nemlendirme, beslenme, yumuşatma

## Elma ile Cilt Bakımında Dikkat Edilmesi Gerekenler

### Elma Seçimi
- **Organik tercih edin**: Pestisit kalıntıları cildinize zarar verebilir
- **Taze olsun**: Eski ve buruşmuş elmalar etki gücünü kaybetmiştir
- **Kabuğunu kullanın**: En fazla antioksidan kabukta bulunur
- **Renk seçimi**: Yeşil elma yağlı ciltler için, kırmızı elma kuru ve normal ciltler için daha uygundur

### Uygulama İpuçları
- **Patch test yapın**: Özellikle hassas ciltler ilk kullanımda küçük bir alanda test etmelidir
- **Göz çevresinden kaçının**: Malik asit göz çevresinde tahriş yapabilir
- **Taze kullanın**: Elma hızla okside olur (kararır), bu nedenle hazırladıktan hemen sonra kullanın
- **Güneş koruması**: Malik asit cildi güneşe duyarlı hale getirebilir, akşamları uygulayın ve SPF kullanın
- **Düzenlilik**: Haftada 2-3 kez düzenli kullanımda en iyi sonuçları alırsınız

### Kimler Kullanmamalı?
- Elmaya alerjisi olanlar
- Çok hassas ve rozasealı ciltler (doktor kontrolünde kullanılabilir)
- Açık yara veya aktif enfeksiyon olan bölgelere uygulanmamalı

## Elma İle İçeriden Cilt Bakımı

Elma sadece dışarıdan değil, içeriden de tüketildiğinde cilt sağlığına katkı sağlar:

**Günlük 1-2 Elma Tüketimi:**
- Antioksidan desteği sağlar
- Bağırsak sağlığını destekleyerek cildi olumlu etkiler
- Vücuttaki toksinlerin atılmasına yardımcı olur
- Kolajensent ezini içeriden destekler

**Elma Kabuğunu Atmayin:**
Elma kabuğu, posa ve antioksidan açısından çok zengindir. Kabuğu soyarak tüketmek, en değerli kısmını atlamak anlamına gelir.

**Elma Sirkesi:**
Elma sirkesi, elmadan fermente edilerek üretilir ve cilt bakımında çok faydalıdır. Ancak çok güçlü olduğu için mutlaka sulandırılarak (1:3 veya 1:4 oranında) kullanılmalıdır.

## Bilimsel Araştırmalar

Elmanın cilt üzerindeki etkileri bilimsel olarak da kanıtlanmıştır:

- **Journal of Cosmetic Dermatology** 2019 yılında yayınlanan bir çalışmada, elma özütü içeren kremlerin 8 haftalık kullanımda cilt tonunu %23 oranında aydınlattığı gösterilmiştir.

- **Nutrients** dergisinde 2020'de yayınlanan araştırmada, günlük elma tüketiminin cilt elastikiyetini artırdığı ve kırışıklıkları azalttığı belirlenmiştir.

- **International Journal of Cosmetic Science** 2018 araştırmasında, malik asitin melanin üretimini %18 oranında azalttığı rapor edilmiştir.

## Sonuç

Elma, doğanın cildimiz için sunduğu en değerli hediyelerden biridir. Zengin vitamin, mineral ve antioksidan içeriğiyle hem içeriden tüketilerek hem de dışarıdan cilde uygulanarak mucizevi sonuçlar verir. Kimyasal içerikli ürünlere nazaran çok daha güvenli, doğal ve uygun maliyetlidir.

Düzenli kullanımda elma:
- Cildinizi aydınlatır
- Lekeleri azaltır
- Gözenekleri temizler ve sıkılaştırır
- Nemlendirme sağlar
- Yaşlanmayı geciktirir
- Akne ve sivilce ile mücadele eder
- Hassas cildi sakinleştirir

Haftada 2-3 kez elma maskesi uygulayarak ve günlük 1-2 elma tüketerek cildinizde görünür iyileşmeler görebilirsiniz. Unutmayın ki cilt bakımında tutarlılık ve sabır en önemli faktörlerdir. Doğal ürünler kimyasal ürünler kadar hızlı sonuç vermese de, uzun vadede çok daha sağlıklı ve kalıcı faydalar sağlar.

Elmanın mucizevi etkilerini keşfedin ve cildinizin doğal güzelliğini ortaya çıkarın!
`},"morning-skincare-routine":{title:"Sabah Cilt Bakım Rutini: Mükemmel Başlangıç İçin Adım Adım Rehber",excerpt:"Cildinizi güne hazırlamanın en etkili yolu doğru bir sabah rutini oluşturmaktır. Profesyonel cilt bakım uzmanlarının önerdiği sabah rutini adımlarını keşfedin...",content:`Sabah cilt bakım rutini, cildinizi gün boyu korumak, beslemek ve sağlıklı bir görünüm elde etmek için kritik öneme sahiptir. Gece boyunca cildiniz kendini onarırken bazı toksinleri ve yağları dışarı atar. Sabah rutininiz, bu artıkları temizlemenin yanı sıra cildinizi günün streslerine karşı koruyucu bir kalkan oluşturur.

## Sabah Rutininin Önemi

Birçok kişi sabah rutinini önemsemez ve sadece yüzünü suyla yıkayıp güneş kremi sürerek geçiştirir. Oysa sabah rutini, gün boyu cildinizin nasıl görüneceğini ve hissedeceğini doğrudan etkiler:

**Koruma**: Sabah uyguladığınız ürünler, güneş ışınları, hava kirliliği, serbest radikaller ve çevresel stres faktörlerine karşı bir bariyer oluşturur.

**Nemlendirme**: Gece boyunca kaybedilen nemi geri kazandırır ve cilt nem dengesini korur.

**Parlaklık**: Doğru ürünler cildinize doğal bir parlaklık ve canlılık kazandırır.

**Makyaj Hazırlığı**: İyi bir sabah rutini, makyajınızın daha pürüzsüz ve uzun süre kalmasını sağlar.

**Yaşlanmayı Geciktirme**: Özellikle antioksidan ve SPF kullanımı, erken yaşlanma belirtilerini önler.

## Ideal Sabah Cilt Bakım Rutini: 7 Adım

### ADIM 1: Temizleme (Cleansing)

Sabah temizlemesi, birçok kişi tarafından tartışmalı bir konudur. "Gece zaten temizledim, sabah tekrar temizlemeye gerek var mı?" sorusu sıkça sorulur. Cevap: EVET, ama doğru temizleyici ile.

**Neden Sabah Temizleme Gereklidir?**

Gece boyunca cildiniz:
- Yağ üretmeye devam eder (özellikle yağlı ciltler)
- Ter bezlerinden toksinler atar
- Ölü deri hücreleri döker
- Yastık ve çarşaftan kir ve bakteriler transfer olabilir
- Gece kremleri ve serumlar kalıntı bırakabilir

Bu nedenle sabahları hafif bir temizleme yapmak, cildinizi sonraki ürünlere hazırlar ve gözeneklerin tıkanmasını önler.

**Cilt Tipine Göre Sabah Temizleyici Seçimi:**

**Yağlı Cilt:**
Jel veya köpüren temizleyiciler idealdir. Salisilik asit içeren ürünler fazla yağı kontrol eder.
- Önerilen ürün tipi: Köpüren jel temizleyici, BHA içeren temizleyici

**Kuru Cilt:**
Kremsi veya süt temizleyiciler cildi kurutmadan temizler.
- Önerilen ürün tipi: Krem temizleyici, yağ bazlı temizleyici

**Karma Cilt:**
Jel-krem formülleri hem T bölgesini temizler hem de yanakları kurutmaz.
- Önerilen ürün tipi: Dengeli jel-krem temizleyici

**Hassas Cilt:**
Kokusuz, hipoalerjenik, sulfatsız temizleyiciler tercih edilmelidir.
- Önerilen ürün tipi: Micellar su, hassas cilt temizleyicileri

**Doğru Temizleme Tekniği:**
1. Ellerinizi yıkayın
2. Yüzünüzü ılık suyla ıslatın (çok sıcak su cildi kurutur)
3. Temizleyiciyi avuçlarınızda köpürtün
4. Dairesel hareketlerle 30-60 saniye boyunca masaj yapın
5. Özellikle T bölgesine (alın, burun, çene) odaklanın
6. Bol ılık suyla durulayın (en az 10 kez durulama)
7. Yumuşak bir havlu ile hafifçe kurulayın (ovmayın!)

**Süre:** 1-2 dakika

### ADIM 2: Tonik (Toner)

Tonik, temizleyiciden sonra pH dengesini geri kazandıran ve cildi sonraki ürünlere hazırlayan bir ara adımdır. Maalesef birçok kişi bu adımı gereksiz bulur ve atlar, oysa tonik kullanımının çok önemli faydaları vardır.

**Toniğin Faydaları:**

1. **pH Dengesini Düzenler**: Temizleyiciler cildin doğal pH'ını (5.5) bozabilir. Tonik cildi hızlıca normale döndürür.

2. **Kalan Kirleri Temizler**: Temizleyicinin kaçırdığı makyaj, kir ve sert su kalıntılarını alır.

3. **Gözenekleri Sıkılaştırır**: Özellikle astringen içerikli tonikler gözenek görünümünü azaltır.

4. **Ürün Emilimini Artırır**: Sonraki adımdaki serum ve kremlerin daha iyi emilmesini sağlar.

5. **Ekstra Hidrasyon**: Hyaluronik asit içeren tonikler cildi nemlendirmeye hazırlar.

**Sabah İçin Tonik Seçimi:**

Sabahları kullanacağınız tonik, cildinizi tazelemeli ama aşırı kurutmamalıdır. Alkol içeriği yüksek astringen toniklerden kaçının, bunun yerine hidrating (nemlendirici) veya brightening (aydınlatıcı) tonikler tercih edin.

**İçeriğinde Olması Gerekenler:**
- Hyaluronik asit (nemlendirme)
- Niasinamid (gözenek sıkılaştırma, aydınlatma)
- Panthenol (sakinleştirme)
- Gül suyu veya centella (hassas ciltler için)

**Uygulama:**
1. Pamuk pede tonik damlatın veya avuç içine dökün
2. Pamuk ped kullanıyorsanız yüzünüze hafifçe silin
3. Avuç kullanıyorsanız yüzünüze nazikçe tıklayarak uygulayın
4. Boyun ve göğüs bölgesini unutmayın
5. Kurumas ını beklemeden bir sonraki adıma geçin (nemli cilde serum en iyi emilir)

**Süre:** 30 saniye

### ADIM 3: Serum (Essence / Serum)

Serum adımı, sabah rutininizin en aktif ve etkili kısmıdır. Serumlar, yoğun konsantrasyonda aktif maddeler içeren, hafif yapılı ürünlerdir. Molekül yapıları küçük olduğu için cildin derinlerine nüfuz eder.

**Sabah İçin İdeal Serum İçerikleri:**

**1. Vitamin C Serumu (Askorbik Asit)**

Sabahların olmazsa olmazıdır! Vitamin C:
- Güçlü antioksidandır, serbest radikalleri nötralize eder
- Kolajen üretimini artırır
- Güneş hasarını önlemeye yardımcı olur (SPF'nin yerini ALMAZ!)
- Cilt tonunu aydınlatır ve eşitler
- Lekeleri azaltır

**Konsantrasyon:**
- Yeni başlayanlar: %10-15
- Deneyimli kullanıcılar: %15-20
- İleri seviye: %20-25 (dikkatli kullanılmalı)

**Uygulama İpuçları:**
- Temiz cilde, tercihen hafif nemli cilde uygulayın
- 3-5 damla yeterlidir
- Yüzünüze, boynunuza ve dekoltenize sürün
- 30 saniye bekleyip emilmesini sağlayın
- MUTLAKA SPF kullanın

**2. Hyaluronik Asit Serumu**

Hyaluronik asit, ağırlığının 1000 katı kadar su tutabilen muhteşem bir nemlendiricidir:
- Cildi derinlemesine nemlendirir
- İnce çizgileri şişirerek dolgunlaştırır
- Cilt bariyerini güçlendirir
- Tüm cilt tipleri için uygundur

**Farklı Molekül Ağırlıkları:**
- **Düşük molekül ağırlığı**: Cildin derinlerine iner, uzun süreli nemlendirme
- **Orta molekül ağırlığı**: Epidermiste kalır, nem bariyeri oluşturur
- **Yüksek molekül ağırlığı**: Yüzeyde kalır, anlık nemlendirme ve koruma

İdeal serum, farklı molekül ağırlıklarını kombine eder.

**Uygulama Önemli Not:**
Hyaluronik asit, nemli cilde uygulanmalıdır! Kuru cilde sürerseniz, cildinizin kendi nemini çekebilir ve ters etki yapabilir. Tonik sonrası hemen, yüz henüz hafif nemliyken uygulayın.

**3. Niasinamid (Vitamin B3)**

Sabahın multitasker (çok amaçlı) serumudur:
- Gözenekleri küçültür
- Yağ üretimini dengeler
- Cilt tonunu eşitler
- Kızarıklıkları azaltır
- Cilt bariyerini güçlendirir
- Vitamin C ile kombine edilebilir (eski bilgiler yanlıştı)

**Konsantrasyon:** %2-10 arası idealdir.

**Serum Sıralaması (Birden Fazla Kullanıyorsanız):**

İnce dokulu (sulu) → Yoğun dokulu sıralamasını takip edin:
1. Hyaluronik asit (en sulu)
2. Vitamin C
3. Niasinamid
4. Peptid serumu (varsa)

Her serum arasında 30 saniye bekleyin.

**Süre:** 1-2 dakika (birden fazla serum için)

### ADIM 4: Göz Kremi (Eye Cream)

Göz çevresi cildi, vücuttaki en ince ve hassas bölgedir. Bu bölge:
- Yağ bezleri daha azdır (kuruluğa eğilimlidir)
- Cilt kalınlığı diğer bölgelere göre %40 daha incedir
- En fazla mimik hareketi yapılır (günde ortalama 10,000 göz kırpma)
- Kolajen ve elastin lifleri daha az yoğundur

Bu nedenle göz çevresi, erken yaşlanma belirtilerinin ilk göründüğü yerdir.

**Sabah Göz Kremi İçeriğinde Olması Gerekenler:**

**Kafein:**
- Şişliği azaltır
- Kan dolaşımını iyileştirir
- Göz altı torbalarını küçültür
- Cilde enerji verir

**Peptidler:**
- Kolajen üretimini artırır
- İnce çizgileri azaltır
- Cildi sıkılaştırır

**Hyaluronik Asit:**
- Göz çevresini nemlendirir
- İnce çizgileri şişirir

**Vitamin K:**
- Koyu halkaları azaltır
- Kan dolaşımını iyileştirir

**Vitamin C (düşük konsantrasyon):**
- Aydınlatıcı etki
- Antioksidan koruma

**Doğru Göz Kremi Uygulama Tekniği:**

1. **Miktar**: İki göz için bezelye tanesi büyüklüğünde (fazlası göz torbası yapar)
2. **Parmak**: Yüzük parmağınızı kullanın (en az baskı uygular)
3. **Bölge**: Göz kemiği etrafında, kirpiklere çok yaklaşmayın
4. **Hareket**: Hafif tıklama hareketleriyle uygulayın (OVmayın!)
5. **Yön**: Gözün alt tarafından başlayıp üst kapaklara doğru ilerleyin
6. **Baskı**: Hiç baskı uygulamayın, sadece hafif dokunun

**İpucu:** Göz kremini buzdolabında saklarsanız, soğuk uygulama ekstra şişlik önleyici etki sağlar.

**Süre:** 30 saniye

### ADIM 5: Nemlendirici (Moisturizer)

Nemlendirici, cilt bakım rutininizin temel taşıdır. Görevi, cildin nem bariyerini korumak ve dış etkenlerden koruyucu bir tabaka oluşturmaktır.

**Sabahın Nemlendirici Seçimi:**

Sabah nemlendiriciniz hafif, hızlı emilebilir ve makyajın altına uygun olmalıdır. Gece kremlerinin aksine çok yoğun olmamalıdır.

**Cilt Tipine Göre Seçim:**

**Yağlı Cilt:**
- Jel veya gel-krem formüller
- Yağsız (oil-free) etiketli ürünler
- Non-komedojenik (gözenek tıkamayan)
- Mattlaştırıcı etkili

**Kuru Cilt:**
- Krem veya balm formüller
- Seramid, shea butter içerenler
- Yağ takviyeli ürünler
- Yoğun nemlendirme

**Karma Cilt:**
- Jel-krem formüller
- Dengeli nem
- İkili uygulama: T bölgesine jel, yanaklara krem

**Hassas Cilt:**
- Kokusuz, minimal içerik
- Centella, allantoin içeren
- Dermatologically tested

**Nemlendiricide Aranması Gereken İçerikler:**

**Seramidler:**
- Cildin doğal bariyer lipididir
- Nem kaybını önler
- Bariyer onarımı yapar

**Niasinamid:**
- Yağ dengeleyici
- Gözenek küçültücü
- İltihap önleyici

**Hyaluronik Asit:**
- Ekstra nem tutucu
- Cilt yüzeyinde nem bariyeri

**Peptidler:**
- Yaşlanma karşıtı
- Kolajen desteği

**Antioksidanlar (Vitamin E, Yeşil Çay Özü):**
- Çevresel koruma
- Serbest radikal savunması

**Uygulama:**
1. Serumunuz tamamen emildikten sonra uygulayın
2. Bir fındık büyüklüğünde ürün yeterlidir
3. Avuç içinde ısıtın
4. Yüzünüze yukarı doğru hareketlerle sürün
5. Boyun ve dekolteyi unutmayın
6. Hafif masaj yaparak emilmesini sağlayın

**Süre:** 1 dakika

### ADIM 6: Yüz Yağı (Facial Oil) - Opsiyonel

Bu adım özellikle kuru ve olgun ciltler için önerilir. Yağlı ciltler atlayabilir.

**Sabah Yağ Kullanımı:**

Yüz yağı, nemlendiricinizin etkisini artırır ve ekstra beslenme sağlar. Sabah kullanılacak yağlar hafif ve hızlı emilebilir olmalıdır.

**Sabah İçin Uygun Yağlar:**
- **Jojoba yağı**: Cildin doğal yağına en yakın, tüm cilt tiplerinde kullanılabilir
- **Squalane**: Çok hafif, yağlı his bırakmaz
- **Marula yağı**: Antioksidan bakımından zengin
- **Argan yağı**: Vitamin E bakımından zengin, besleyici

**Kaçınılması Gereken Ağır Yağlar (Sabah İçin):**
- Hindistan cevizi yağı (çok ağır, komedojenik)
- Kakao yağı (çok yoğun)

**Uygulama:**
- Nemlendiriciden SONRA uygulayın (bu tartışmalı, bazıları önce önerir)
- 2-3 damla yeterlidir
- Avuçlarınızda ısıtıp bastırarak uygulayın

**Süre:** 30 saniye

### ADIM 7: Güneş Koruyucu (SPF) - EN ÖNEMLİ ADIM!

SPF kullanımı, sabah rutininizin EN VAZGEÇILMEZ ve EN ÖNEMLİ adımıdır. Hiçbir anti-aging serum veya krem, güneş koruyucu kadar önemli değildir.

**Neden SPF Bu Kadar Önemli?**

- UV ışınları cildin erken yaşlanmasının %80 nedenidir (foto-aging)
- Kolajen ve elastin liflerini tahrip eder
- Cilt kanserine neden olabilir
- Lekelere ve ton eşitsizliklerine yol açar
- Kızarıklık ve hassasiyete sebep olur

Güneşsiz, bulutlu, kapalı havalarda, kışın, iç mekanlarda bile UV ışınları cildinize ulaşır. Bu nedenle SPF kullanımı 365 gün şarttır!

**SPF Seçim Rehberi:**

**SPF Değeri:**
- Minimum SPF 30 (günlük kullanım)
- SPF 50+ (açık hava aktiviteleri, hassas cilt, leke tedavisi sırasında)

**Geniş Spektrum:**
Hem UVA hem UVB ışınlarına karşı koruma sağlamalıdır:
- **UVA**: Aging (yaşlanma), cilt derinlerine iner
- **UVB**: Burning (yanma), yüzey hasarı

**Filtre Türleri:**

**Kimyasal Filtreler:**
- Avobenzone, octinoxate, oxybenzone
- UV ışınlarını emer ve etkisiz hale getirir
- Daha estetik, beyaz iz bırakmaz
- Hassas ciltlerde tahriş yapabilir

**Fiziksel (Mineral) Filtreler:**
- Çinko oksit, titanyum dioksit
- UV ışınlarını yansıtır
- Daha güvenli, hassas ciltler için ideal
- Beyaz kalıntı bırakabilir (yeni formüller daha iyi)

**Cilt Tipine Göre SPF:**

**Yağlı Cilt:** Fluid veya jel güneş koruyucu, mattlaştırıcı
**Kuru Cilt:** Kremsi, nemlendiricili güneş koruyucu
**Hassas Cilt:** Mineral filtreli, kokusuz, hypoalerjenik
**Renkli Cilt:** Beyaz kalıntı bırakmayan, tinted (renkli) formüller

**Doğru SPF Uygulama:**

Bu en çok yanlış yapılan adımdır. Çoğu kişi yetersiz miktarda sürer!

1. **Miktar**: Yüz için 1 çay kaşığı dolusu (yaklaşık 1.25ml veya 1/4 tatlı kaşığı)
2. **Uygulama Zamanı**: Güneşe çıkmadan 15-30 dakika önce
3. **Teknik**: Noktasal olarak yüze dağıtın, sonra eşit şekilde yayın
4. **Bölgeler**: Yüz, kulak, boyun, dekolte, el sırtları
5. **Yenileme**: Her 2 saatte bir, ter veya yüzme sonrası hemen

**Çok Önemli:** Makyaj üstüne SPF yenileme için SPF içeren pudra veya spray kullanabilirsiniz.

**Süre:** 1 dakika

## Toplam Sabah Rutini Süresi: 8-12 Dakika

Doğru uygulandığında sabah rutininiz toplamda 10 dakika civarında sürer. Bu süre, cildinize yapacağınız en değerli yatırımdır.

## Sık Yapılan Hatalar ve Çözümleri

### Hata 1: Ürünler Arasında Beklememek
**Çözüm:** Her ürün arasında 30 saniye - 1 dakika bekleyin. Ürünlerin emilmesi ve pH'nın stabilize olması gerekir.

### Hata 2: Aşırı Ürün Kullanmak
**Çözüm:** Daha fazla ürün = daha iyi sonuç değildir. Önerilen miktarları kullanın.

### Hata 3: SPF'yi Atlayamak veya Yetersiz Sürmek
**Çözüm:** SPF asla atlanmamalı ve mutlaka yeterli miktarda sürülmelidir.

### Hata 4: Boyun ve Dekol teyi Unutmak
**Çözüm:** Yüzünüze uyguladığınız her ürünü boyun ve göğüs bölgenize de uygulayın.

### Hata 5: Kuru Cilde Ürün Sürmek
**Çözüm:** Özellikle serum ve nemlendirici hafif nemli cilde daha iyi emilir.

### Hata 6: Çok Sıcak Su Kullanmak
**Çözüm:** Ilık su kullanın, sıcak su cildin doğal yağlarını alır.

### Hata 7: Yüzü Ovarak Kurulamak
**Çözüm:** Yumuşak bir havlu ile hafifçe bastırarak kurulayın.

## Bonus İpuçları

### Yüz Masajı
Ürün uygularken hafif bir yüz masajı yapmak:
- Kan dolaşımını artırır
- Ürün emilimini iyileştirir
- Lenf drenajını destekler
- Sabah şişliğini azaltır
- Cildi uyandırır

**Basit Sabah Masajı Tekniği:**
- Çene ucundan kulak memesine yukarı doğru
- Burun kenarlarından şakak bölgesine
- Alnın ortasından şakaklara
- Her hareket 3-5 kez tekrarlanır

### Gua Sha veya Jade Roller
Sabah rutininizde bu araçları kullanmak:
- Şişliği azaltır
- Ürün emilimini artırır
- Yüz kaslarını gevşetir
- Cildi sıkılaştırır

**Kullanım:** Serum veya nemlendirici uygularken, yukarı ve dışarı doğru hareketlerle kullanın.

### Buz Tedavisi
Sabahları cildinize buz uygulamak:
- Gözenekleri sıkılaştırır
- Şişliği azaltır
- Cildi uyandırır
- Kan dolaşımını aktive eder

**Kullanım:** Buz küpünü temiz bir bez içinde yüzünüze 30 saniye-1 dakika gezdirin.

## Mevsimsel Değişiklikler

### Yaz Sabah Rutini
- Daha hafif nemlendirici
- SPF 50+
- Mattlaştırıcı ürünler
- Vitamin C serumu (antioksidan koruma)

### Kış Sabah Rutini
- Daha yoğun nemlendirici
- Yüz yağı takviyesi
- SPF 30-50
- Hyaluronik asit (ekstra nem)

## Yaş Gruplarına Göre Sabah Rutini

### 20'li Yaşlar
**Odak:** Koruma ve önleme
- Temizleyici
- Tonik
- Vitamin C serumu
- Hafif nemlendirici
- SPF 30-50

### 30'lu Yaşlar
**Odak:** İlk kırışıklıklar ve koruma
- Temizleyici
- Tonik
- Vitamin C + Hyaluronik Asit
- Göz kremi
- Nemlendirici
- SPF 50

### 40+ Yaşlar
**Odak:** Yoğun anti-aging
- Temizleyici
- Tonik
- Vitamin C + Peptid serumu
- Göz kremi
- Yoğun nemlendirici
- Yüz yağı
- SPF 50

## Sonuç

Doğru bir sabah cilt bakım rutini, sağlıklı, parlak ve genç bir cilt için temeldir. Tutarlılık en önemli faktördür - her sabah bu rutini uygulamak, cildinizde görünür iyileşmeler sağlayacaktır.

Unutmayın:
✅ Her adım önemlidir, atlamayın
✅ Cilt tipinize uygun ürünler seçin
✅ Ürün kalitesi kadar uygulama tekniği de önemlidir
✅ SPF kullanımı tartışmasız şarttır
✅ Sabırlı olun - sonuçlar 4-12 hafta içinde görülür
✅ Düzenlilik anahtardır

Cildinize gösterdiğiniz özen, yıllar sonra size teşekkür edecek en değerli yatırımdır. Güne doğru bir cilt bakımı ile başlayın ve farkı hissedin!
`},"vitamin-c-benefits":{title:"C Vitamini Serumu: Cildin En Güçlü Antioksidanı ve Kullanım Rehberi",excerpt:"C vitamini, cilt bakımında en çok araştırılan ve kanıtlanmış etkiye sahip bileşenlerden biridir. İşte C vitamininin cildinize sağladığı muazzam faydalar...",content:`C vitamini (askorbik asit), cilt bakımında "altın standart" olarak kabul edilen, bilimsel olarak kanıtlanmış en etkili bileşenlerden biridir. Hem dermatologlardünya çapında hem de cilt bakım uzmanları tarafından neredeyse her cilt tipi için önerilen bu mucizevi vitamin, cildinizi içeriden ve dışarıdan dönüştürme gücüne sahiptir.

## C Vitamini Nedir ve Neden Bu Kadar Önemlidir?

C vitamini (L-askorbik asit), suda çözünen, güçlü bir antioksidan vitamindir. Vücudumuz C vitaminini üretemez, bu nedenle dışarıdan alınması gerekir. Cilt sağlığı açısından C vitamininin iki temel alınım yolu vardır:

**1. İçeriden (Gıda ve Takviyeler):** Meyve ve sebzelerden alınan C vitamini, kan yoluyla cilde ulaşır. Ancak cilde ulaşan miktar sınırlıdır çünkü vücut önce hayati organları besler.

**2. Dışarıdan (Topikal Ürünler):** Cilde direkt uygulanan C vitamini serumları, cildin daha yoğun konsantrasyonda C vitamini almasını sağlar. Bu nedenle hem içeriden hem dışarıdan C vitamini almak idealdir.

### C Vitamininin Cilt İçin Önemi

Ciltte C vitamini:
- Kolajen ve elastin sentezi için gereklidir
- Serbest radikallere karşı en güçlü savunmadır
- Melanin üretimini düzenler
- Güneş hasarını onarır
- Cilt bariyerini güçlendirir
- Yara iyileşmesini hızlandırır

## C Vitamininin Cilde Bilimsel Olarak Kanıtlanmış Faydaları

### 1. Güçlü Antioksidan Koruması

C vitamini, cildinizin karşılaştığı en büyük tehditlerden biri olan serbest radikallere karşı en etkili doğal savunmadır.

**Serbest Radikaller Nedir?**
Serbest radikaller, güneş ışınları (UV), hava kirliliği, sigara dumanı, stres ve kötü beslenme gibi faktörlerin ciltte oluşturduğu dengesiz moleküllerdir. Bu moleküller, sağlıklı hücrelere saldırır, DNA'ya zarar verir ve:
- Kolajen ve elastini yok eder
- Kırışıklıklara neden olur
- Cilt tonunu bozar
- Hiperpigmentasyon oluşturur
- Cilt kanserine zemin hazırlar

**C Vitamini Nasıl Korur?**
C vitamini, serbest radikallere elektron vererek onları nötralize eder. Bu sayede serbest radikaller hücrelere zarar veremez. Journal of Investigative Dermatology'de yayınlanan araştırmalar, topikal C vitamini kullanımının UV hasarını %90'a kadar azalttığını göstermiştir.

Önemli Not: C vitamini güneş kremi DEĞİLDİR ama SPF ile birlikte kullanıldığında güneş korumasını %4 kat artırır.

### 2. Kolajen Üretimini Artırır

Kolajen, cildin yapı taşıdır. Cildinizin %75'ini oluşturan bu protein, cildin sıkılığını, elastikiyetini ve genç görünümünü sağlar.

**Yaşla Birlikte Kolajen Kaybı:**
- 20'li yaşlardan itibaren yılda %1 kolajen kaybı
- 30'lu yaşlarda kolajensent ezi %25 azalır
- 50'li yaşlarda %50'den fazla kolajen kaybı

Bu kayıp, kırışıklıklara, ince çizgilere ve cilt sarkmalarına neden olur.

**C Vitamininin Rolü:**
C vitamini, kolajen sentezi için mutlak gereklidir. Fibroblast hücrelerini uyararak:
- Yeni kolajen üretimini 8 kat artırır
- Mevcut kolajeni stabilize eder
- Kolajen parçalanmasını engeller

Dermatologic Surgery dergisinde yayınlanan 12 haftalık bir çalışmada, %10 C vitamini serumu kullananların cilt sıkılığında %73 artış gözlemlenmiştir.

### 3. Kırışıklık ve İnce Çizgileri Azaltır

C vitamininin kolajen artırıcı ve antioksidan özellikleri, doğrudan kırışıklık ve yaşlanma belirtilerini hedef alır.

**Klinik Sonuçlar:**
- 3 aylık kullanımda kırışıklıklarda %50'ye kadar azalma
- İnce çizgilerin derinliğinde %30 azalma
- Cilt dokusunda %45 iyileşme
- Cilt tonunda %25 düzelme

Özellikle göz çevresi, alın ve ağız çevresi gibi kırışıklığa yatkın bölgelerde dramatik iyileşmeler görülür.

### 4. Leke ve Hiperpigmentasyonu Giderir

C vitamini, cilt tonu eşitsizliklerini düzelten en etkili bileşenlerden biridir.

**Melanin Üretimini Düzenler:**
C vitamini, melanin üretiminden sorumlu olan tirosinaz enzimini inhibe eder. Bu sayede:
- Güneş lekeleri azalır
- Yaş lekeleri soluklaşır
- Akne izleri ve PIH (post-inflammatory hyperpigmentation) giderilir
- Melasma tedavisinde destek sağlar

**Bilimsel Kanıt:**
Journal of Clinical and Aesthetic Dermatology'de yayınlanan çalışmada, 12 hafta boyunca %20 C vitamini serumu kullanan katılımcılarda hiperpigmentasyonda %60 azalma görülmüştür.

### 5. Cilt Tonunu Aydınlatır ve Parlaklık Verir

C vitamini, cildin doğal ışıltısını geri kazandırır.

**Aydınlatma Mekanizmaları:**
1. **Melanin Azaltma:** Mevcut lekeleri açar
2. **Hücre Yenileme:** Ölü deri hücrelerinin atılmasını hızlandırır
3. **Mikrosirkülasyon:** Cilt altı kan akışını artırarak canlılık verir
4. **Işık Yansıtma:** Cilt yüzeyini düzeltir, ışığı daha iyi yansıtır

Sonuç olarak, cilt daha parlak, canlı ve genç görünür. "Cam cilt" (glass skin) etkisi için C vitamini olmazsa olmazdır.

### 6. Güneş Hasarını Onarır ve Korur

C vitamini, UV hasarına karşı hem koruyucu hem de onarıcı etki gösterir.

**Fotoaging (Güneş Kaynaklı Yaşlanma) ile Mücadele:**
- DNA hasarını onarır
- Sunburn hücrelerini azaltır
- Eritemi (kızarıklık) hafifletir
- Cilt kanseri riskini azaltır

**Önemli:** C vitamini asla SPF'nin yerini alamaz! Ancak SPF altına uygulandığında koruma gücünü önemli ölçüde artırır. SPF + C vitamini kombinasyonu, "güneş korumasında altın standart" olarak kabul edilir.

### 7. Cilt Bariyerini Güçlendirir

Cilt bariyeri, cildinizin en dış koruyucu tabakasıdır. Nemli tutulması, enfeksiyonların önlenmesi ve dış etkenlerden korunma için kritik öneme sahiptir.

**C Vitamininin Bariyer Fonksiyonları:**
- Seramid sentezini artırır
- Lipit tabakasını güçlendirir
- Trans-epidermal su kaybını (TEWL) azaltır
- Cilt direncini artırır

Güçlü bariyer:
- Daha nemli cilt
- Daha az hassasiyet
- Daha iyi enfeksiyon koruması
- Daha az tahriş ve kızarıklık

### 8. Akne İzlerini ve İltihab Gider

C vitamini, anti-inflamatuar özelliklere sahiptir ve akneye eğilimli ciltler için mükemmeldir.

**Akne ile Mücadele:**
- Sebum üretimini dengeler
- Bakterilerin neden olduğu iltihabı azaltır
- Akne sonrası hiperpigmentasyonu tedavi eder
- Yara iyileşmesini hızlandırır

Niasinamid ile kombine edildiğinde, akne izlerinin giderilmesinde %80 başarı oranı gösterir.

### 9. Cildi Sıkılaştırır ve Elastikiyet Kazandırır

Kolajen ve elastin artışı sayesinde, C vitamini cildin fiziksel yapısını iyileştirir.

**Görünür Değişimler:**
- Yanak ve çene çizgisinde sıkılaşma
- Göz çevresinde gerginlik
- Boyun bölgesinde iyileşme
- Gözeneklerin küçülmesi

## C Vitamini Türleri ve Hangisini Seçmelisiniz?

C vitamini, farklı formlarda bulunur ve her birinin avantajları ve dezavantajları vardır.

### 1. L-Askorbik Asit (Pure Vitamin C)

**Özellikleri:**
- En saf ve en etkili form
- En çok araştırılmış form
- pH 3.5 ve altında stabil kalır
- %10-20 konsantrasyonda kullanılır

**Avantajları:**
- Maksimum etkinlik
- Hızlı sonuç
- Bilimsel olarak kanıtlanmış

**Dezavantajları:**
- Hassas ciltlerde tahriş yapabilir
- Oksitlenmeye çok duyarlı
- Düşük pH nedeniyle cilt yanması hissi verebilir

**Kimin Kullanmalı:** Normal ve yağlı ciltler, C vitaminine alışık olanlar

### 2. Magnezyum Askorbil Fosfat (MAP)

**Özellikleri:**
- Suda çözünen, stabil form
- Daha yüksek pH'da çalışır (5-7)
- Daha az tahriş edici

**Avantajları:**
- Hassas ciltler için ideal
- Stabilite sorunu yok
- Tahriş riski minimum

**Dezavantajları:**
- L-askorbik aside göre daha yavaş etki
- Penetrasyon gücü biraz daha düşük

**Kimin Kullanmalı:** Hassas, kuru ve reaktif ciltler

### 3. Askorbil Glikozit

**Özellikleri:**
- Şeker molekülüne bağlı C vitamini
- Çok stabil
- Ciltte enzimatik olarak saf C vitamine dönüşür

**Avantajları:**
- Son derece stabil
- Tahriş yapmaz
- Uzun raf ömrü

**Dezavantajları:**
- Dönüşüm süreci nedeniyle daha yavaş etki

**Kimin Kullanmalı:** Tüm cilt tipleri, özellikle başlangıç seviyesi

### 4. Sodium Askorbil Fosfat (SAP)

**Özellikleri:**
- Tuz formu, suda çözünen
- Anti-bakteriyel özelliği var

**Avantajları:**
- Akneye eğilimli ciltler için mükemmel
- Stabilite
- Anti-bakteriyel etki

**Kimin Kullanmalı:** Akne ve yağlı ciltler

### 5. Tetrahexyldecyl Askorbat (THDA)

**Özellikleri:**
- Yağda çözünen form
- Çok stabil
- Cilt bariyerini kolayca geçer

**Avantajları:**
- Daha derin penetrasyon
- Stabilite
- Yağlı formüllerde kullanılabilir

**Dezavantajları:**
- Daha pahalı
- Daha az araştırılmış

**Kimin Kullanmalı:** Olgun ve kuru ciltler

## C Vitamini Serumu Nasıl Kullanılır?

### Doğru Uygulama Sırası

**Sabah Rutini (ÖNERİLİR):**
1. Temizleyici
2. Tonik
3. **C Vitamini Serumu** ← BURAYA
4. Hyaluronik asit (opsiyonel)
5. Göz kremi
6. Nemlendirici
7. SPF (MUTLAKA!)

**Neden Sabah?**
C vitamini, gün boyunca cildi antioksidan ile korur ve SPF ile sinerjik etki gösterir. Akşam kullanımı da mümkündür ama sabah daha etkilidir.

### Uygulama Tekniği

1. **Temiz ve Nemli Cilt:** C vitamini nemli cilde daha iyi emilir
2. **3-4 Damla Yeterli:** Tüm yüz ve boyun için
3. **Bastırma Tekniği:** Ovmak yerine ciltte hafifçe bastırarak uygulayın
4. **Bekleyin:** 1-2 dakika emilmesini bekleyin
5. **SPF Şart:** C vitamini sonrası SPF kullanımı kritiktir

### İlk Kullanımlarda Dikkat

**Başlangıç İçin:**
- Düşük konsantrasyonla başlayın (%5-10)
- Günde bir kez (sabah veya akşam)
- Her iki günde bir kullanarak cildikonyavaş alıştırın
- 2 hafta sonra günlük kullanıma geçin

**Tahriş Belirtileri:**
- Hafif kızarıklık (ilk 1-2 hafta normal)
- Karıncalanma hissi (genellikle geçici)
- Kuruma (nemlendirici artırın)

Eğer şiddetli yanma, kaşıntı veya döküntü olursa kullanımı durdurun ve dermatoloğa başvurun.

## C Vitamini Seçerken Nelere Dikkat Edilmeli?

### 1. Konsantrasyon

- **%5-10:** Başlangıç, hassas ciltler
- **%15-20:** Standart, genel ciltler
- **%20-25:** İleri seviye, direnç gösteren problemler

%20'nin üzeri gereksizdir ve tahriş riskini artırır. "Daha fazla daha iyi" mantığı C vitamini için geçerli değildir.

### 2. pH Değeri

L-askorbik asit için ideal pH: **2.0-3.5**

pH çok düşükse tahriş yapar, çok yüksekse etkisiz kalır. Ürün etiketinde pH değerinin belirtilmesi önemlidir.

### 3. Formülasyon

**En İyi Kombinasyonlar:**
- **C Vitamini + E Vitamini + Ferulik Asit:** Bilimsel olarak en kanıtlanmış kombinasyon. Stabiliteyi artırır ve etkinliği %8 kat artırır.
- **C Vitamini + Niasinamid:** Leke giderme için mükemmel (dikkatli kullanılmalı, bazı ciltlerde kızarıklık yapabilir)
- **C Vitamini + Hyaluronik Asit:** Nemlendirme + aydınlatma

### 4. Ambalaj

C vitamini oksitlenmeye çok duyarlıdır. Doğru ambalaj kritiktir:

**İdeal Ambalaj:**
- Koyu renkli cam şişe (ışıktan korur)
- Hava geçirmez pompa sistemi
- Küçük hacim (30ml ideal, çabuk tüketilmeli)

**Saklanma:**
- Serin, karanlık yer
- Buzdolabında saklanabilir
- Banyo dolabı UYGUN DEĞİL (nem ve sıcaklık)

### 5. Oksitlenme Kontrolü

**Serum Bozulmuşsa Göstergeleri:**
- Renk değişikliği (berrak/beyazdan sarıya, turuncuya veya kahverengiye)
- Koku değişikliği
- Tekstür değişikliği

Bozulmuş serumu kullanmayın! Oksitlenmiş C vitamini serbest radikal gibi davranır ve zarar verir.

### 6. Fiyat

Kaliteli C vitamini serumu ucuz olmaz. Ortalama fiyat:
- İyi kalite: 200-500 TL (15-30ml)
- Lüks marka: 500-2000 TL

Çok ucuz ürünler genellikle etkisiz konsantrasyonda veya kalitesiz formdadır.

## C Vitamini ile Kullanılabilecek ve Kullanılamayacak Ürünler

### ✅ C Vitamini ile GÜVENLİ Kombinasyonlar

**1. Hyaluronik Asit**
- Mükemmel kombinasyon
- Nemlendirme + aydınlatma
- Sinerjik etki

**2. E Vitamini**
- Birbirlerini güçlendirir
- Stabilite artırır
- Antioksidan gücünü katlar

**3. Ferulik Asit**
- C vitaminini stabilize eder
- Etkinliği artırır
- Güneş koruması güçlenir

**4. SPF**
- Mutlaka birlikte kullanılmalı
- Güneş korumasını 4 kat artırır

**5. Peptidler**
- Güvenli kombinasyon
- Anti-aging etkisini artırır

**6. Niasinamid (DİKKATLİ!)**
- Eski inanışın aksine birlikte kullanılabilir
- Ancak bazı ciltlerde kızarıklık yapabilir
- Farklı rutinlerde kullanılması daha güvenli (biri sabah, diğeri akşam)

### ⛔ C Vitamini ile RİSKLİ Kombinasyonlar

**1. AHA/BHA Asitler (Glikolik, Salisilik, Laktik)**
- Aynı rutinde kullanılmamalı
- İkisi de pH'ı düşürür, aşırı tahriş riski
- Biri sabah (C vitamini), diğeri akşam (asitler) kullanılabilir

**2. Retinol / Retinoide**
- Her ikisi de güçlü aktif
- Aynı anda kullanım tahriş riski
- Alternatif: Sabah C vitamini, akşam retinol

**3. Benzoyl Peroxide**
- C vitaminini oksitler ve etkisiz hale getirir
- Ayrı rutinlerde kullanılmalı

## C Vitamini Kullanımında Sık Yapılan Hatalar

### Hata 1: Güneş Koruyucu Kullanmamak

C vitamini cildi güneşe daha duyarlı hale getirebilir. SPF kullanımı MUTLAKA gereklidir. C vitamini + SPF = Mükemmel koruma.

### Hata 2: Bozulmuş Ürünü Kullanmaya Devam Etmek

Sararmış, kahverengi veya turuncu renk alimış C vitamini oksitlenmiştir ve zararlıdır.

### Hata 3: Çok Fazla Ürün Kullanmak

3-4 damla yeterlidir. Fazlası emilmez ve israf olur.

### Hata 4: Sabırsızlık

C vitamini hızlı etki gösterir ama mucize değildir:
- İlk ışıltı: 1-2 hafta
- Leke azalması: 4-8 hafta
- Kırışıklık azalması: 8-12 hafta

### Hata 5: Yanlış Saklama

Banyo dolabında saklanan C vitamini çok çabuk bozulur. Serin, karanlık yerde veya buzdolabında saklayın.

## Cilt Tiplerine Göre C Vitamini Önerileri

### Yağlı ve Akne Eğilimli Cilt

- **Form:** L-askorbik asit veya SAP
- **Konsantrasyon:** %15-20
- **Formül:** Hafif, yağsız serum
- **Kombinasyon:** Niasinamid, salisilik asit (farklı rutinlerde)

### Kuru ve Hassas Cilt

- **Form:** Magnezyum askorbil fosfat veya askorbil glikozit
- **Konsantrasyon:** %5-10 (başlangıç), sonra %15
- **Formül:** Kremsi, nemlendirici
- **Kombinasyon:** Hyaluronik asit, seramidler

### Normal ve Karma Cilt

- **Form:** L-askorbik asit
- **Konsantrasyon:** %15-20
- **Formül:** Klasik serum
- **Kombinasyon:** E vitamini, ferulik asit

### Olgun Cilt (40+ Yaş)

- **Form:** L-askorbik asit veya THDA
- **Konsantrasyon:** %20
- **Formül:** Zengin, peptid içeren
- **Kombinasyon:** Retinol (akşam), peptidler, hyaluronik asit

## C Vitamini Hakkında Bilimsel Araştırmalar

**Journal of Dermatological Science (2021):**
12 haftalık çalışmada %20 C vitamini kullanımı:
- Kırışıklıklarda %57 azalma
- Cilt tonunda %62 iyileşme
- Cilt elastikiyetinde %72 artış

**Dermatologic Surgery (2020):**
Topikal C vitamininin kolajen sentezini %8 kat artırdığı kanıtlandı.

**International Journal of Cosmetic Science (2019):**
C vitamini + SPF kombinasyonunun UV hasarını %92 oranında önlediği gösterildi.

## Sonuç

C vitamini, cilt bakımında en güvenilir, en çok araştırılmış ve en etkili bileşenlerden biridir. Doğru form, konsantrasyon ve kullanımla:

✅ Cildinizi güneş hasarından korur
✅ Kırışıklıkları azaltır ve yaşlanmayı geciktirir
✅ Lekeleri giderir ve cilt tonunu eşitler
✅ Cildinize doğal parlaklık ve canlılık kazandırır
✅ Kolajen üretimini artırarak cildi sıkılaştırır

Ancak unutmayın:
- Kaliteli ürün seçimi kritiktir
- SPF kullanımı şarttır
- Doğru saklama gereklidir
- Sabır ve tutarlılık en önemli faktörlerdir

C vitamini serumu, her cilt bakım rutin inde olması gereken temel bir üründür. Cildinize yapacağınız en değerli yatırımlardan biridir!
`},"natural-face-masks":{title:"Doğal Yüz Maskeleri: Evde Yapabileceğiniz 20 Etkili Tarif",excerpt:"Mutfağınızda bulunan doğal malzemelerle profesyonel kalitede yüz maskeleri hazırlayın. Her cilt tipi için özel tarifler ve uygulama ipuçları...",content:`Doğal yüz maskeleri, binlerce yıldır güzellik rutinlerinin vazgeçilmez bir parçası olmuştur. Kleopatra'nın bal ve süt maskeleri, Japon geişaların pirinç su işlemleri, Hintli kadınların zerdeçal maskeleri... Tüm bu geleneksel yöntemler, modern bilimle de desteklenerek günümüzde yeniden popülerlik kazanmıştır.

Doğal yüz maskeleri, kimyasal içeriklere alternatif olarak, cildinize zararlı maddeler bulaştırmadan etkili sonuçlar almanızı sağlar. Üstelik ekonomik, kolay hazırlanabilir ve içeriklerinin ne olduğunu tam olarak bildiğiniz güvenilir ürünlerdir.

## Doğal Maskelerin Avantajları

### 1. Kimyasal İçerik Yoktur
Hazır maskeler genellikle koruyucular, parfümler, parabeler ve sülfatlar içerir. Doğal maskeler ise tamamen temizdir ve alerjik reaksiyon riski minimum düzeydedir.

### 2. Taze ve Canlı İçerikler
Doğal malzemeler, vitamin ve minerallerin bozulmamış, en taze halinde cildinize ulaşmasını sağlar.

### 3. Ekonomik
Bir kavanoz pahalı yüz maskesi yerine, mutfağınızda zaten bulunan malzemelerle onlarca maske yapabilirsiniz.

### 4. Kişiselleştirilebilir
Cildinizin ihtiyaçlarına göre malzemeleri değiştirebilir, kendi özel formülünüzü yaratabilirsiniz.

### 5. Çevre Dostu
Plastik ambalajlar, sentetik içerikler ve kargo taşımacılığı yoktur. Tamamen sürdürülebilirdir.

## Maske Hazırlama ve Uygulama Kuralları

### Temel Kurallar

**1. Temizlik Her Şeydir:**
- Ellerinizi yıkayın
- Kullanacağınız kap, kaşık ve malzemeleri temiz tutun
- Organik ve taze malzemeler tercih edin

**2. Taze Hazırlayın:**
- Maskeleri kullanmadan hemen önce hazırlayın
- Doğal maskeler koruyucu içermez, saklanamaz
- Maksimum 1-2 gün buzdolabında saklanabilir

**3. Patch Test Yapın:**
- Yeni bir malzemeyi ilk kez kullanacaksanız, önce küçük bir alana (kulak arkası veya iç bilek) uygulayın
- 24 saat bekleyin ve reaksiyon olup olmadığını kontrol edin

**4. Temiz Cilde Uygulayın:**
- Önce yüzünüzü temizleyin
- Hafif bir buharla gözeneklerinizi açın
- Nemli cilde maske daha iyi emilir

**5. Doğru Süre:**
- Çoğu maske için 15-20 dakika idealdir
- Kil maskeleri tamamen kurumamalı (çatlak oluşmadan önce durulayın)
- Asit içeren maskeler 5-10 dakikayı geçmemeli

**6. Nazikçe Durulayın:**
- Ilık suyla nazikçe durulayın
- Ovmayın, hafif masaj yaparak temizleyin
- Yumuşak bir havlu ile hafifçe kurulayın

**7. Nemlendirmeyi Unutmayın:**
- Maske sonrası tonik uygulayın
- Serum ve nemlendirici ile kapatın
- Gündüz uyguladıysanız SPF kullanın

## Cilt Tiplerine Göre Doğal Yüz Maskeleri

## A. YAĞLI VE AKNE EĞİLİMLİ CİLT MASKELERİ

### 1. Kil ve Çay Ağacı Yağı Maskesi

**Malzemeler:**
- 2 yemek kaşığı yeşil veya beyaz kil
- 1-2 damla çay ağacı yağı
- 1 tatlı kaşığı elma sirkesi
- Gül suyu (kıvam ayarlamak için)

**Yapılışı:**
1. Kili cam bir kapta gül suyu ile yoğun bir hamur kıvamına getirin
2. Elma sirkesi ve çay ağacı yağını ekleyin
3. Temiz yüze kalın bir tabaka halinde sürün
4. Gözenek problemlerinin yoğun olduğu T bölgesine daha kalın uygulayın
5. 10-15 dakika bekleyin (TAMAMEN kurumasını beklemeyin!)
6. Ilık suyla durulayın

**Faydaları:**
- Fazla yağı emer
- Gözenekleri temizler ve sıkılaştırır
- Akneye neden olan bakterileri öldürür
- İltihabı azaltır

**Uygulama Sıklığı:** Haftada 2-3 kez

### 2. Yoğurt ve Limon Maskesi

**Malzemeler:**
- 3 yemek kaşığı yağsız yoğurt
- 1 tatlı kaşığı taze sıkılmış limon suyu
- 1 tatlı kaşığı bal

**Yapılışı:**
1. Tüm malzemeleri karıştırın
2. Yüze ve boyuna uygulayın
3. Göz çevresinden kaçının (limon tahrişyapabilir)
4. 15 dakika bekleyin
5. Durulayın ve nemlendirin

**Faydaları:**
- Yağ dengesini sağlar
- Gözenekleri temizler
- Hafif peeling etkisi
- Cilt tonu eşitler

**Uygulama Sıklığı:** Haftada 2 kez

**DİKKAT:** Hassas ciltler limon miktarını yarıya indirsin veya tamamen atlasın.

### 3. Yulaf ve Domates Maskesi

**Malzemeler:**
- 2 yemek kaşığı yulaf ezmesi
- 1 orta boy domates (püre)
- 1 tatlı kaşığı bal

**Yapılışı:**
1. Domatesi blender'da püre yapın
2. Yulaf ve balı ekleyin
3. 5 dakika bekleyip yulafsın şişmesini sağlayın
4. Yüze uygulayın
5. 20 dakika bekleyin
6. Dairesel hareketlerle masaj yaparak durulayın

**Faydaları:**
- Sebum üretimini dengeler
- Gözenekleri temizler
- Antioksidan koruması
- Nazik peeling

**Uygulama Sıklığı:** Haftada 2 kez

## B. KURU VE HASSAS CİLT MASKELERİ

### 4. Avokado ve Bal Maskesi

**Malzemeler:**
- 1/2 olgun avokado
- 1 yemek kaşığı ham bal
- 1 tatlı kaşığı badem yağı
- 1 tatlı kaşığı yoğurt (opsiyonel)

**Yapılışı:**
1. Avokadoyu ezin
2. Bal ve badem yağını ekleyin
3. Pürüzsüz bir kıvam elde edin
4. Yüze kalın bir tabaka halinde sürün
5. 20-25 dakika bekleyin
6. Ilık suyla durulayın

**Faydaları:**
- Yoğun nemlendirme
- Esansiyel yağ asitleri sağlar
- Cildi yumuşatır
- Kızarıklığı azaltır

**Uygulama Sıklığı:** Haftada 2-3 kez

### 5. Yulaf ve Süt Maskesi

**Malzemeler:**
- 3 yemek kaşığı yulaf ezmesi
- 4 yemek kaşığı sıcak süt (bitkisel süt de olabilir)
- 1 yemek kaşığı bal
- 1 tatlı kaşığı E vitamini yağı (opsiyonel)

**Yapılışı:**
1. Yulaları sıcak sütle ıslatın ve 5 dakika bekletin
2. Bal ve E vitamini ekleyin
3. Ezilmiş bir kıvam elde edin
4. Yüze uygulayın
5. 20 dakika bekleyin
6. Ilık suyla durulayın

**Faydaları:**
- Hassas cildi sakinleştirir
- Kızarıklığı azaltır
- Nemlendirme sağlar
- Cildi yumuşatır

**Uygulama Sıklığı:** Haftada 2-3 kez

### 6. Salatalık ve Aloe Vera Maskesi

**Malzemeler:**
- 1/2 salatalık (püre)
- 2 yemek kaşığı saf aloe vera jeli
- 1 tatlı kaşığı gül suyu

**Yapılışı:**
1. Salatalığı blenderdan geçirin
2. Aloe vera ve gül suyunu ekleyin
3. Soğuk bir kıvam elde edin
4. Yüze uygulayın (göz çevresine de uygulanabilir)
5. 20 dakika bekleyin
6. Durulayın

**Faydaları:**
- Serinletici etki
- Güneş yanıklarını rahatlatır
- Kızarıklığı azaltır
- Nemlendirme sağlar

**Uygulama Sıklığı:** Günlük kullanılabilir

## C. KARMA CİLT MASKELERİ

### 7. Elma ve Bal Maskesi

**Malzemeler:**
- 1/2 yeşil elma (rendeli)
- 1 yemek kaşığı bal
- 1 tatlı kaşığı limon suyu
- 1 tatlı kaşığı yoğurt

**Yapılışı:**
- (Elma maskesini daha önce detaylıca anlattık)
- T bölgesinde daha uzun (20 dk), yanakta daha kısa (15 dk) tutabilirsiniz

**Faydaları:**
- T bölgesini dengeler
- Yanakları nemlendiri
- Gözenekleri temizler
- Aydınlatıcı etki

**Uygulama Sıklığı:** Haftada 2 kez

### 8. Muz ve Bal Maskesi

**Malzemeler:**
- 1 olgun muz
- 1 yemek kaşığı bal
- 1 tatlı kaşığı limon suyu (yağlı bölgeler için)
- 1 tatlı kaşığı süt (kuru bölgeler için)

**Yapılışı:**
1. Muzu ezin
2. Balı ekleyin
3. T bölgesi için limon, yanaklar için süt ekleyebilirsiniz
4. Yüze uygulayın
5. 15-20 dakika bekleyin
6. Durulayın

**Faydaları:**
- Her iki bölgeyi de dengeler
- Nemlendirici ve yumuşatıcı
- Vitamin ve mineral sağlar

**Uygulama Sıklığı:** Haftada 2 kez

## D. OLGUN VE YAŞLANMA BELİRTİLERİ OLAN CİLT MASKELERİ

### 9. Zerdeçal ve Bal Maskesi

**Malzemeler:**
- 1 tatlı kaşığı zerdeçal tozu
- 2 yemek kaşığı bal
- 1 yemek kaşığı yoğurt veya süt
- 1 damla gül yağı (opsiyonel)

**Yapılışı:**
1. Tüm malzemeleri karıştırın
2. Yüze uygulayın (UYARI: Zerdeçal geçici sarı leke bırakabilir)
3. 15 dakika bekleyin
4. Ilık suyla durulayın
5. Gerekirse süt ile pamukla silin

**Faydaları:**
- Güçlü anti-aging etki
- Anti-inflamatuar
- Cilt tonunu eşitler
- Parlaklık verir

**Uygulama Sıklığı:** Haftada 2 kez

**DİKKAT:** Çok açık tenli kişilerde geçici sarımtırak renk kalabilir (birkaç saat içinde geçer).

### 10. Yumurta Akı ve Limon Maskesi

**Malzemeler:**
- 1 yumurta akı
- 1 tatlı kaşığı limon suyu
- 1/2 tatlı kaşığı bal

**Yapılışı:**
1. Yumurta akını köpürtün
2. Limon ve balı ekleyin
3. Fırça ile yüze uygulayın
4. İlk kat kuruduktan sonra ikinci kat uygulayın
5. Toplam 15 dakika bekleyin
6. Ilık suyla durulayın

**Faydaları:**
- Cilt sıkılaştırma
- Gözenek küçültme
- Kırışıklık azaltma
- Ton eşitleme

**Uygulama Sıklığı:** Haftada 1-2 kez

### 11. Kahve ve Kakao Maskesi

**Malzemeler:**
- 1 yemek kaşığı kahve telvesi (kullanılmış veya taze)
- 1 yemek kaşığı kakao tozu
- 2 yemek kaşığı yoğurt veya bal
- 1 tatlı kaşığı hindistan cevizi yağı

**Yapılışı:**
1. Tüm malzemeleri karıştırın
2. Yüze uygulayın
3. Dairesel hareketlerle hafif masaj yapın
4. 15-20 dakika bekleyin
5. Masaj yaparak durulayın

**Faydaları:**
- Antioksidan bombardımanı
- Kan dolaşımını artırır
- Cildi sıkılaştırır
- Peeling etkisi

**Uygulama Sıklığı:** Haftada 1-2 kez

## E. LEKE VE TON EŞİTSİZLİĞİ İÇİN MASKELER

### 12. Patates ve Limon Maskesi

**Malzemeler:**
- 1 orta boy patates (çiğ, rendeli)
- 1 tatlı kaşığı limon suyu
- 1 tatlı kaşığı bal

**Yapılışı:**
1. Patatesi rendeleyin veya blenderdan geçirin
2. Limon ve balı ekleyin
3. Lekeli bölgelere kalın tabaka halinde uygulayın
4. 20 dakika bekleyin
5. Durulayın

**Faydaları:**
- Güneş lekelerini açar
- Hiperpigmentasyonu azaltır
- Aydınlatıcı etki
- C vitamini desteği

**Uygulama Sıklığı:** Haftada 3-4 kez (akşamları)

### 13. Domates ve Bal Maskesi

**Malzemeler:**
- 1 orta boy domates (püre)
- 1 yemek kaşığı bal
- 1 tatlı kaşığı limon suyu

**Yapılışı:**
1. Domatesi püre yapın
2. Bal ve limonu ekleyin
3. Lekeli alanlara odaklanarak uygulayın
4. 20 dakika bekleyin
5. Durulayın

**Faydaları:**
- Likopen (güçlü antioksidan)
- Leke açma
- Güneş hasarı onarımı
- Asit içeriği ile peeling

**Uygulama Sıklığı:** Haftada 3 kez

## F. GÖZENEKİŞLİ CİLT MASKELERİ

### 14. Yumurta ve Limon Maskesi (Pore Strips)

**Malzemeler:**
- 1 yumurta akı
- 1 tatlı kaşığı limon suyu
- Tuvalet kağıdı veya ince kağıt havlu

**Yapılışı:**
1. Yumurta akı ve limonu karıştırın
2. Buruna (veya gözenek problemli bölgeye) fırça ile sürün
3. Üzerine ince kağıt havlu parçası yerleştirin
4. Tekrar yumurta akı sürün
5. Tamamen kurumasını bekleyin (15-20 dakika)
6. Nazikçe çekerek kağıdı soyun

**Faydaları:**
- Siyah noktaları çıkarır
- Gözenekleri temizler
- Cilt sıkılaştırma

**Uygulama Sıklığı:** Haftada 1 kez

### 15. Aktif Kömür ve Jelatin Maskesi

**Malzemeler:**
- 1 tatlı kaşığı aktif kömür tozu
- 1 yemek kaşığı jelatinsiz toz
- 2 yemek kaşığı su

**Yapılışı:**
1. Jelatini soğuk suyla karıştırın
2. Mikrodalgada 10 saniye ısıtın
3. Aktif kömürü ekleyin
4. Hemen buruna uygulayın (çabuk katılaşır!)
5. 15 dakika bekleyin
6. Soyarak çıkarın

**Faydaları:**
- Derin gözenek temizliği
- Toksin çekme
- Siyah nokta giderme

**Uygulama Sıklığı:** Haftada 1 kez

## G. AYDINLATICI VE CANLANDIRICI MASKELER

### 16. Pirinç Suyu Maskesi

**Malzemeler:**
- 1/2 su bardağı pirinç
- 1 su bardağı su
- 2 yemek kaşığı bal
- Pamuk ped

**Yapılışı:**
1. Pirinci iyice yıkayın
2. Su ile 30 dakika bekletin
3. Pirinç suyunu süzün
4. Bal ekleyin
5. Pamuk ped ile yüze uygulayın veya maske kağıdını ıslatıp yüze yerleştirin
6. 20 dakika bekleyin
7. Durulayın

**Faydaları:**
- Japon güzellik sırrı
- Güçlü aydınlatma
- İnositol ve vitaminler
- Gözenek sıkılaştırma

**Uygulama Sıklığı:** Haftada 2-3 kez

### 17. Bal ve Tarçın Maskesi

**Malzemeler:**
- 2 yemek kaşığı ham bal
- 1 tatlı kaşığı toz tarçın
- 1 tatlı kaşığı hindistan cevizi yağı

**Yapılışı:**
1. Tüm malzemeleri karıştırın
2. Yüze uygulayın
3. 15-20 dakika bekleyin
4. Ilık suyla durulayın

**Faydaları:**
- Antibakteriyel
- Kan dolaşımını artırır
- Parlaklık verir
- Anti-aging

**Uygulama Sıklığı:** Haftada 2 kez

**DİKKAT:** Hassas ciltler tarçını atlayabilir veya yarı dozda kullanabilir.

## H. HİDRATASYON VE NEMLENDİRME MASKELERİ

### 18. Aloe Vera ve Hyaluronik Asit Maskesi

**Malzemeler:**
- 3 yemek kaşığı saf aloe vera jeli
- 1 kapsül hyaluronik asit serumu veya tozu
- 1 yemek kaşığı gül suyu
- 1 tatlı kaşığı gliserin

**Yapılışı:**
1. Tüm malzemeleri karıştırın
2. Buzdolabında 10 dakika soğutun
3. Soğuk olarak yüze uygulayın
4. 20-25 dakika bekleyin
5. Durulayın (veya durulamamadan bırakabilirsiniz)

**Faydaları:**
- Yoğun nemlendirme
- Nem kilitleme
- Serinletici etki
- Cilt bariyeri güçlendirme

**Uygulama Sıklığı:** Haftada 2-3 kez

### 19. Çilek ve Krema Maskesi

**Malzemeler:**
- 4-5 orta boy çilek
- 2 yemek kaşığı yoğun krema veya mascarpone
- 1 tatlı kaşığı bal

**Yapılışı:**
1. Çilekleri ezin
2. Krema ve balı ekleyin
3. Kremsi bir kıvam elde edin
4. Yüze kalın tabaka halinde uygulayın
5. 20 dakika bekleyin
6. Durulayın

**Faydaları:**
- C vitamini
- Nemlendirme
- Aydınlatma
- Anti-aging

**Uygulama Sıklığı:** Haftada 2 kez

## I. PEELİNG VE CANLANDIRMA MASKELERİ

### 20. Bademve Gül Suyu Peeling Maskesi

**Malzemeler:**
- 3 yemek kaşığı badem unu (veya öğütülmüş badem)
- 2 yemek kaşığı gül suyu
- 1 yemek kaşığı bal
- 1 tatlı kaşığı badem yağı

**Yapılışı:**
1. Tüm malzemeleri karıştırın
2. Granüllü bir kıvam elde edin
3. Nemli yüze uygulayın
4. 2-3 dakika dairesel hareketlerle masaj yapın
5. 10 dakika daha bekleyin
6. Ilık suyla durulayın

**Faydaları:**
- Nazik peeling
- Ölü deri hücrelerini uzaklaştırır
- Besleyici
- Yumuşatıcı

**Uygulama Sıklığı:** Haftada 1-2 kez

## Doğal Maske Malzemelerinin Faydaları

### Bal
- Antibakteriyel
- Nemlendirici
- Yara iyileştirici
- Antioksidan

### Yoğurt
- Laktik asit (AHA)
- Probiyotik
- Nemlendirici
- Ton eşitleme

### Avokado
- E vitamini
- Sağlıklı yağlar
- Nemlendirici
- Anti-aging

### Limon
- C vitamini
- Aydınlatıcı
- Asit (peeling)
- Ton eşitleme

### Yulaf
- Sakinleştirici
- Anti-inflamatuar
- Nazik peeling
- Nemlendirici

### Kil
- Detoks
- Yağ emici
- Gözenek temizleyici
- Mineraller

## Sonuç

Doğal yüz maskeleri, cilt bakımınızı hem etkili hem de güvenli hale getirmenin harika bir yoludur. Düzenli kullanımda:

✅ Cilt sağlığını iyileştirir
✅ Parlaklık ve canlılık kazandırır
✅ Gözenekleri temizler
✅ Yaşlanma belirtilerini azaltır
✅ Ekonomik ve çevre dostudur

Unutmayın:
- Taze hazırlayın
- Cilt tipinize uygun seçin
- Düzenli uygulayın
- Sabırlı olun
- Patch test yapın

Doğanın sunduğu bu muhteşem malzemeleri keşfedin ve cildinizin dönüşümüne tanık olun!
`},"summer-sun-protection":{title:"Yaz Aylarında Güneş Koruması: Cildinizi Güneş Hasarından Koruyun",excerpt:"Yaz aylarında cildinizi güneşin zararlı etkilerinden korumak için bilmeniz gereken her şey. SPF seçiminden uygulama tekniklerine kadar kapsamlı rehber...",content:`Yaz ayları geldiğinde güneşin tadını çıkarmak isterken, cildinizi zararlı UV ışınlarından korumak hayati önem taşır. Güneş hasarı sadece yanıklara değil, erken yaşlanma, lekeler ve cilt kanserine de yol açabilir. Bu rehberde yaz aylarında cildinizi güneşten nasıl etkili bir şekilde koruyacağınızı öğreneceksiniz.

## Güneşin Cilde Etkileri

### UV Işınları

**UVA Işınları:** UV ışınlarının %95'ini oluşturur, cildin derin katmanlarına nüfuz eder, erken yaşlanmaya neden olur, cam ve bulutlardan geçebilir.

**UVB Işınları:** UV ışınlarının %5'ini oluşturur, güneş yanığına neden olur, cilt kanserinin ana tetikleyicisidir.

### Güneş Hasarı Belirtileri

**Kısa vadeli:** Güneş yanığı, kızarıklık, şişlik, soyulma
**Uzun vadeli:** Kırışıklıklar, lekeler, elastisite kaybı, cilt kanseri

## SPF Seçimi ve Kullanımı

**SPF Değerleri:**
- SPF 30: %97 UVB koruması
- SPF 50: %98 UVB koruması

**Miktar:** Yüz için 1/4 çay kaşığı, vücut için 30 ml
**Yenileme:** Her 2 saatte bir, yüzme/terlemeden sonra hemen

## Koruma İpuçları

1. Geniş spektrum SPF 30-50 kullanın
2. Her gün kullanın (bulutlu günler dahil)
3. 10:00-16:00 arası gölgede kalın
4. Şapka ve güneş gözlüğü takın
5. UPF değerli kıyafetler giyin

Cildinizi koruyun, uzun yıllar genç ve sağlıklı kalın!`},"honey-skincare-benefits":{title:"Balın Cilt Bakımındaki Faydaları: Doğanın Mucizevi Hediyesi",excerpt:"Balın cildinize sağladığı inanılmaz faydaları ve evde bal maskesi tarifleri. Antibakteriyel, nemlendirici ve yaşlanma karşıtı özellikleriyle bal, cilt bakımının vazgeçilmezi...",content:`Bal, binlerce yıldır cilt bakımında kullanılan doğal bir mucizedir. Kleopatra'nın bal banyoları yaptığı, antik Mısırlıların balı yara iyileştirmede kullandığı bilinir. Modern bilim de balın cilt bakımındaki faydalarını kanıtlamıştır.

## Balın İçeriği

**Şekerler:** Glikoz ve fruktoz, nem çekici özellik
**Enzimler:** Glukoz oksidaz, antibakteriyel etki
**Vitaminler:** B kompleksi, C vitamini
**Mineraller:** Kalsiyum, demir, çinko, potasyum
**Antioksidanlar:** Flavonoidler, fenolik asitler
**Amino asitler:** Cilt onarımı

## Balın Cilt Faydaları

### 1. Antibakteriyel ve Antimikrobiyal

Bal doğal hidrojen peroksit üretir, akne bakterilerini öldürür, sivilce oluşumunu önler, yara iyileşmesini hızlandırır.

### 2. Nemlendirme

Humektan özelliği sayesinde havadan nem çeker, cildi yumuşatır, kuruluğu önler, cilt bariyerini güçlendirir.

### 3. Yaşlanma Karşıtı

Antioksidanlar serbest radikalleri nötralize eder, kırışıklıkları azaltır, cildi sıkılaştırır, kolajen üretimini destekler.

### 4. Leke Giderici

Enzimler leke ve izleri soluklaştırır, cilt tonunu eşitler, parlaklık verir.

### 5. Nazik Peeling

Doğal asitler ölü hücreleri uzaklaştırır, gözenekleri temizler, cildi pürüzsüzleştirir.

## Bal Maskeleri

### Klasik Bal Maskesi
- 2 yemek kaşığı ham bal
- Temiz yüze uygulayın
- 15-20 dakika bekleyin
- Durulayın
**Faydası:** Nemlendirme, antibakteriyel

### Bal ve Yoğurt Maskesi
- 1 yemek kaşığı bal
- 2 yemek kaşığı yoğurt
- Karıştırıp yüze sürün
- 20 dakika bekleyin
**Faydası:** Aydınlatma, leke giderme

### Bal ve Tarçın (Akne İçin)
- 2 yemek kaşığı bal
- 1 tatlı kaşığı tarçın
- Sivilce bölgesine sürün
- 10-15 dakika bekleyin
**Faydası:** Antibakteriyel, akne tedavisi

## Bal Seçimi

- **Ham bal tercih edin:** Pastörize bal enzimlerini kaybeder
- **Manuka balı:** En güçlü antibakteriyel özellik
- **Organik:** Pestisitsiz, saf
- **Taze:** Kristalleşmemiş

## Kullanım İpuçları

- Temiz cilde uygulayın
- Haftada 2-3 kez kullanın
- Göz çevresinden kaçının
- Alerjiniz varsa patch test yapın
- Daima ılık suyla durulayın

Bal, doğal, güvenli ve etkili bir cilt bakım malzemesidir. Düzenli kullanımda cildiniz daha nemli, parlak ve genç görünür!`},"night-cream-importance":{title:"Gece Kreminin Önemi: Cildiniz Uyurken Gençleşsin",excerpt:"Neden gece kremi kullanmalısınız ve nasıl seçmelisiniz? Gece kreminin faydaları, cilt tipine göre seçim rehberi ve uygulama teknikleri...",content:`Gece kremi, birçok kişinin cilt bakım rutininde atladığı ancak aslında en önemli adımlardan biridir. Gece boyunca cildiniz kendini onarır ve yeniler. Doğru gece kremi bu süreci destekler ve hızlandırır.

## Gece ve Gündüz Kremi Farkı

**Gündüz Kremi:** Koruyucu, SPF içerir, hafif doku, makyaj altına uygun, antioksidan içerir.

**Gece Kremi:** Onarıcı, yoğun formül, aktif maddeler yüksek konsantrasyonda, retinol, peptid, AHA/BHA içerebilir.

## Gece Cilt Onarımı

Gece 23:00-04:00 arası cildinizde şunlar olur:
- Hücre yenilenmesi en üst düzeyde
- Kolajen üretimi artar
- Kan dolaşımı hızlanır
- Cilt geçirgenliği artar (ürünler daha iyi emilir)
- Melatonin salgılanır (antioksidan etki)

## Gece Kreminin Faydaları

### 1. Yoğun Nemlendirme
Gece kremleri daha yoğun ve zengindir, gece boyunca nem kaybını önler, sabah cildiniz yumuşak ve dolgun uyanır.

### 2. Yaşlanma Karşıtı
Retinol, peptidler, büyüme faktörleri içerir, kırışıklıkları azaltır, cildi sıkılaştırır, ince çizgileri giderir.

### 3. Onarım ve Yenilenme
DNA onarımını destekler, oksidatif stresi azaltır, gün boyunca oluşan hasarı giderir.

### 4. Leke Giderme
AHA, BHA, kojik asit, niasinamid içerebilir, geceleri leke tedavisi daha etkilidir.

## Cilt Tipine Göre Gece Kremi

**Yağlı Cilt:**
- Jel krem formülü
- Oil-free
- Salisilik asit, niasinamid
- Non-comedogenic

**Kuru Cilt:**
- Zengin, kremsi doku
- Ceramidler, yağlar
- Hyaluronik asit, shea butter
- Onarıcı yağlar (argan, jojoba)

**Karma Cilt:**
- Jel-krem dengesi
- Hafif ama besleyici
- Niasinamid, peptidler

**Hassas Cilt:**
- Parfüm ve alkol içermeyen
- Centella, panthenol
- Minimal içerik
- Hipoalerjenik

**Olgun Cilt:**
- Retinol, peptidler
- Antioksidanlar
- Zengin formül
- Kolajen destekleyici

## Gece Kremi İçeriği

**Mutlaka Olması Gerekenler:**
- Hyaluronik asit (nemlendirme)
- Ceramidler (bariyer onarımı)
- Peptidler (kolajen üretimi)
- Antioksidanlar (vitamin E, C, resveratrol)

**Yaşlanma Karşıtı İçin:**
- Retinol (A vitamini)
- Bakuchiol (doğal retinol alternatifi)
- Niasinamid
- Koenzim Q10

**Aydınlatma İçin:**
- Vitamin C
- Kojik asit
- Arbutin
- Licorice extract

## Doğru Uygulama

1. **Temizlik:** Yüzünüzü iyice temizleyin
2. **Tonik:** pH dengesini sağlayın
3. **Serum:** Aktif serumunuzu uygulayın
4. **Göz kremi:** Göz çevresine hafifçe
5. **Gece kremi:** Bezelye tanesi kadar alın
6. **Uygulama:** Yukarı ve dışa doğru masaj
7. **Boyun:** Boyun ve dekoltede unutmayın

**Miktar:** Bezelye tanesi kadar yeterli (çok fazla gözenekleri tıkar)

## Gece Bakım Rutini

**Minimum Rutin:**
1. Temizleyici
2. Gece kremi

**İdeal Rutin:**
1. Çift temizleme
2. Tonik
3. Essence/serum
4. Göz kremi
5. Gece kremi
6. (Opsiyonel) Yüz yağı veya sleeping mask

## Sonuç

Gece kremi, cildinizin kendini onarma döngüsünü destekler. Doğru seçilmiş ve düzenli kullanılan bir gece kremi, sabah aynada daha genç, dinlenmiş ve parlak bir cilt görmenizi sağlar.

Her gece gece kremi kullanarak cildinize yatırım yapın - sonuçları haftalar içinde göreceksiniz!`},"eye-cream-guide":{title:"Göz Kremi Rehberi: Göz Çevresi Bakımının Esasları",excerpt:"Göz kremi kullanımı hakkında bilmeniz gereken her şey. Doğru seçim, uygulama teknikleri ve yaygın hatalar. Göz altı torbalarından kırışıklıklara çözümler...",content:`Göz çevresi cildinizin en hassas ve en ince bölgesidir. Bu bölge yüzünüzün geri kalanından 10 kat daha incedir ve yaşlanma belirtileri ilk burada görünür. Göz kremi kullanımı, genç ve dinç bir görünüm için vazgeçilmezdir.

## Göz Çevresi Neden Özeldir?

**Anatomik Özellikler:**
- Cilt kalınlığı sadece 0.5 mm (yüzün geri kalanı 2 mm)
- Yağ bezleri çok azdır (kurumaya eğilimlidir)
- Kolajen ve elastin lifleri daha az
- Kas hareketleri çok fazla (günde 10,000+ göz kırpma)
- Kan dolaşımı yavaştır

**Sonuç:**
- İlk kırışıklıklar burada çıkar
- Kolay şişer ve morarmalar olur
- Hızla kurur ve incelir
- Çevresel faktörlerden en çok etkilenir

## Yaygın Göz Çevresi Sorunları

### 1. Göz Altı Torbaları (Puffiness)
**Nedenleri:**
- Sıvı birikimi
- Uyku eksikliği
- Alerji
- Yaşlanma (yağ hernileri)
- Tuz tüketimi

**Çözüm:** Kafein, peptidler, soğuk uygulama

### 2. Koyu Halkalar (Dark Circles)
**Nedenleri:**
- Genetik
- İnce cilt (damarlar görünür)
- Hiperpigmentasyon
- Güneş hasarı
- Yorgunluk

**Çözüm:** Vitamin C, K, niasinamid, retinol

### 3. Kırışıklıklar ve İnce Çizgiler
**Nedenleri:**
- Yaşlanma
- Güneş hasarı
- Kuru cilt
- Tekrarlayan mimikler
- Sigara

**Çözüm:** Retinol, peptidler, hyaluronik asit

### 4. Kurulukarşı ve Sertleşme
**Nedenleri:**
- Nem kaybı
- Çevresel faktörler
- Yağ bezi azlığı

**Çözüm:** Zengin nemlendirme, ceramidler, yağlar

## Göz Kremi İçeriği

### En Etkili Aktif Maddeler

**Kafein:**
- Kan dolaşımını hızlandırır
- Şişliği azaltır
- Torbaları küçültür
- Koyu halkaları hafifletir

**Hyaluronik Asit:**
- Yoğun nemlendirme
- Kırışıklıkları doldurur
- Cildi yumuşatır
- Nem kilitleme

**Retinol (A Vitamini):**
- Hücre yenilenmesi
- Kolajen üretimi
- Kırışıklık azaltma
- Leke giderme
**DİKKAT:** Düşük konsantrasyonda kullanın

**Peptidler:**
- Kolajen sentezi
- Cilt sıkılaştırma
- Kırışıklık önleme
- Elastikiyet artırma

**Vitamin C:**
- Aydınlatma
- Koyu halka giderme
- Antioksidan
- Kolajen desteği

**Vitamin K:**
- Damar güçlendirme
- Morluk azaltma
- Kan dolaşımı
- Koyu halka tedavisi

**Niasinamid:**
- Ton eşitleme
- Leke giderme
- Bariyer güçlendirme
- İltihap azaltma

**Ceramidler:**
- Nem bariyeri
- Kuruma önleme
- Cilt onarımı

## Göz Kremi Seçimi

**20'li Yaşlar:**
- Önleyici bakım
- Hafif formül
- Hyaluronik asit, kafein
- Güneş koruması önemli

**30'lu Yaşlar:**
- İlk kırışıklıklar başlar
- Peptidler, antioksidanlar
- Hafif retinol
- Nemlendirme odaklı

**40+ Yaşlar:**
- Yoğun onarım
- Retinol, peptidler
- Zengin formül
- Sıkılaştırıcı içerikler

### Soruna Göre Seçim

**Şişlik:** Kafein, arnica, yeşil çay
**Koyu Halka:** Vitamin C, K, niasinamid, kojik asit
**Kırışıklık:** Retinol, peptidler, hyaluronik asit
**Kuruлuk:** Ceramidler, squalane, shea butter

## Doğru Uygulama Tekniği

### Adım Adım Uygulama

1. **Temiz Cilt:** Yüzünüzü temizleyin
2. **Miktar:** Pirinç tanesi kadar (her göz için)
3. **Isıtma:** Parmak ucunda hafifçe ısıtın
4. **Noktalar:** Göz altına 3-4 nokta halinde koyun
5. **Dağıtma:** Yüzük parmağıyla hafifçe tıklayarak yayın
6. **Yön:** İçten dışa, alttan yukarı
7. **Masaj:** Hafif dairesel hareketlerle
8. **Bölge:** Göz kemik hattının 1 cm dışına kadar uygulayın

### YAPILMAMASI GEREKENLER

❌ Ovmayın veya çekmeyinİ (kırışıklık artışı)
❌ Çok fazla ürün kullanmayın (şişliğe neden olur)
❌ Kirpiklere çok yaklaşmayın (göze kaçabilir)
❌ Yüz kremini göz çevresinde kullanmayın (çok ağırdır)
❌ Günlük kullanımı atlatalım (tutarlılık gerekir)

## Ne Zaman ve Ne Sıklıkta?

**Sabah:**
- Hafif formül
- Kafein içerikli
- Mattlaştırıcı (makyaj altı)
- SPF içerebilir

**Akşam:**
- Yoğun formül
- Retinol içerikli
- Onarıcı peptidler
- Zengin nemlendirme

**Sıklık:** Günde 2 kez (sabah-akşam)

## Ek Göz Bakım İpuçları

### 1. Soğuk Kompres
- Sabahları göz altına soğuk kaşık
- Soğutulmuş çay poşetleri
- Buz kalıpları (gazlı bezle sarılı)
**Etki:** Şişlik azaltma, göz çevresi tazeleme

### 2. Yeterli Uyku
- 7-8 saat düzenli uyku
- Başınızı hafif yüksekte tutun (sıvı birikimi azalır)
**Etki:** Koyu halka ve torba önleme

### 3. Güneş Koruması
- SPF'li güneş gözlüğü
- Göz çevresine SPF sürün
**Etki:** Erken yaşlanma ve leke önleme

### 4. Nem İçin Su Tüketimi
- Günde 2-3 litre su
**Etki:** Cildin nemli kalması

### 5. Tuz Tüketimini Azaltın
- Özellikle akşamları
**Etki:** Sabah şişlik azalması

## Doğal Göz Bakımı

**Salatalık Dilimi:**
- Soğutulmuş dilimler
- 10-15 dakika uygulayın
**Faydası:** Serinletme, şişlik azaltma

**Yeşil Çay Poşetleri:**
- Kullanılmış, soğutulmuş
- 10 dakika uygulayın
**Faydası:** Kafein, antioksidan, şişlik azaltma

**Badem Yağı:**
- Birkaç damla hafifçe sürün
**Faydası:** Nemlendirme, E vitamini

## Sonuç

Göz kremi, 25 yaşından itibaren kullanılmalı, doğru seçim ve uygulama ile:
- Kırışıklıkları azaltır
- Koyu halkaları giderir
- Şişliği önler
- Cildi sıkılaştırır
- Genç görünüm sağlar

Göz çevrenize özel ilgi gösterin - sonuçları aynada hemen göreceksiniz!`},"green-tea-antioxidants":{title:"Yeşil Çayın Antioksidan Gücü: Cilt Bakımında Doğal Güç",excerpt:"Yeşil çayın cildinize sağladığı antioksidan faydalarını ve güzellik rutininizde nasıl kullanacağınızı öğrenin...",content:`Yeşil çay, binlerce yıldır Asya kültürlerinde hem içecek hem de tıbbi amaçlarla kullanılan mucizevi bir bitkidir. Modern bilim, yeşil çayın özellikle cilt sağlığı üzerindeki olağanüstü etkilerini kanıtlamış durumda. Güçlü antioksidan özellikleri sayesinde yeşil çay, cilt bakımında devrim yaratmakta ve doğal güzellik ürünlerinin vazgeçilmezi haline gelmektedir.

## Yeşil Çayın Bileşimi: Güzelliğin Kimyası

Yeşil çay (Camellia sinensis), siyah çaydan farklı olarak minimum işlemden geçtiği için doğal bileşenlerini korur. Bu sayede cilt için son derece değerli aktif maddeler içerir:

### Ana Aktif Bileşenler

**Polifenoller ve Kateşinler:**
Yeşil çayın %30-40'ını oluşturan polifenoller, güçlü antioksidan özelliğe sahiptir. En önemli kateşin olan EGCG (epigallokateşin gallat), sıradan E vitamininden 100 kat daha güçlü bir antioksidandır.

**Kafeİn:**
Yeşil çayda bulunan kafein, ciltteki kan dolaşımını artırır, şişliği azaltır ve cildi canlandırır.

**Vitamin ve Mineraller:**
- Vitamin C: Kolajen üretimi ve aydınlatma
- Vitamin E: Nem bariyeri ve antioksidan
- Vitamin B2: Cilt tonunu eşitleme
- Çinko: Akne kontrolü ve iyileşme
- Mangan: Yaşlanma karşıtı etki

**L-Teanin:**
Cildi sakinleştiren, stresi azaltan ve anti-inflamatuar etki gösteren bir amino asit.

## Yeşil Çayın Cilde Sağladığı Bilimsel Kanıtlanmış Faydalar

### 1. Güçlü Antioksidan Koruması

Yeşil çayın en önemli özelliği, serbest radikallere karşı sağladığı üstün korumadır. Serbest radikaller, UV ışınları, hava kirliliği, sigara dumanı ve stres gibi faktörlerin ciltte yarattığı zararlı moleküllerdir. Bu moleküller:
- DNA hasarına yol açar
- Kolajen ve elastin liflerini parçalar
- Erken yaşlanmaya neden olur
- Cilt kanserine zemin hazırlar

Yeşil çaydaki EGCG, bu serbest radikalleri nötralize ederek cildi korur. Araştırmalar, yeşil çay kullanımının ciltteki oksidatif stresi %40'a kadar azalttığını göstermiştir.

### 2. Yaşlanma Karşıtı Etki

Yeşil çay, yaşlanma belirtilerine karşı çok yönlü bir savunma mekanizması sunar:

**Kolajen Koruması:**
EGCG, cildin yapı taşı olan kolajenin parçalanmasını önleyen enzimleri bloke eder. Aynı zamanda yeni kolajen üretimini teşvik eder.

**Kırışıklık Azaltma:**
Düzenli yeşil çay uygulaması (topikal veya oral), kırışıklıkların derinliğini %10-15 oranında azaltabilir.

**Elastikiyet Artışı:**
Antioksidanlar elastin liflerini koruyarak cildin esnekliğini artırır.

**Telomer Koruması:**
Araştırmalar, yeşil çay tüketiminin hücrelerin yaşlanma hızını belirleyen telomerleri koruduğunu göstermiştir.

### 3. UV Hasarı ve Güneş Koruması

Yeşil çay, güneşin zararlı etkilerine karşı ikinci bir savunma hattı oluşturur:

- UV kaynaklı DNA hasarını %30-70 oranında azaltır
- Güneş yanığı riskini düşürür
- Güneş lekelerinin oluşumunu engeller
- Cilt kanseri riskini azaltmaya yardımcı olur

**ÖNEMLİ NOT:** Yeşil çay güneş kreminin yerini ALMAZ! SPF ile birlikte kullanıldığında ekstra koruma sağlar.

### 4. Akne ve İltihap Kontrolü

Yeşil çay, akne tedavisinde son derece etkilidir:

**Antibakteriyel Etki:**
Akneye neden olan Propionibacterium acnes bakterisini %89'a kadar öldürür.

**Sebum Kontrolü:**
Aşırı yağ üretimini %60'a kadar azaltır.

**İltihap Azaltma:**
Anti-inflamatuar özelliği kızarıklığı ve şişliği hızla azaltır.

Araştırmalar, %2-3 konsantrasyondaki yeşil çay ekstraktının benzoil peroksit kadar etkili olduğunu ancak daha az tahriş edici olduğunu göstermiştir.

### 5. Cilt Tonu Eşitleme ve Aydınlatma

Yeşil çay, melanin üretimini düzenleyerek:
- Koyu lekeleri azaltır
- Güneş lekelerini soluklaştırır
- Akne izlerini giderir
- Genel cilt tonunu aydınlatır

Düzenli kullanımda (8-12 hafta) cilt tonu %15-20 oranında aydınlanabilir.

### 6. Göz Çevresi Bakımı

Yeşil çay, göz çevresi sorunlarına özel çözüm sunar:

**Göz Altı Şişliği:**
Kafein ve tanen içeriği fazla sıvıyı boşaltarak şişliği azaltır.

**Koyu Halkalar:**
Kan dolaşımını artırarak koyu halkaları açar.

**Kırışıklıklar:**
İnce göz çizgilerini yumuşatır.

### 7. Hassas Cilt Sakinleştirme

Yeşil çay, hassas ve kızarık ciltler için idealdir:
- Rozasea semptomlarını hafifletir
- Ekzama ve sedef vücutünnde rahatlatır
- Alerji olduğunu kızarıklıkları azaltır
- Cildi soğutur ve sakinleştirir

## Yeşil Çay ile Cilt Bakımı Nasıl Yapılır?

### 1. Yeşil Çay Toniği (Günlük Kullanım)

**Malzemeler:**
- 2 yeşil çay poşeti veya 2 çay kaşığı yaprak yeşil çay
- 1 su bardağı kaynar su
- 3-4 damla E vitamini yağı (opsiyonel)

**Yapılış:**
1. Yeşil çayı demlayın ve soğumaya bırakın
2. Süzün ve cam bir şişeye aktarın
3. E vitamini ekleyin
4. Buzdolabında saklayın (5 güne kadar taze kalır)
5. Sabah-akşam pamukla yüzünüze sürün

**Faydası:** Gözenek sıkılaştırma, antioksidan koruma, ton eşitleme

### 2. Yeşil Çay ve Bal Maskesi (Haftada 2 Kez)

**Malzemeler:**
- 1 çay kaşığı yeşil çay tozu (matcha)
- 1 yemek kaşığı organik bal
- Birkaç damla limon suyu

**Yapılış:**
1. Malzemeleri karıştırarak pürüzsüz bir macun elde edin
2. Temiz yüze uygulayın
3. 15-20 dakika bekleyin
4. Ilık suyla durulayın

**Faydası:** Derin nemlendirme, aydınlatma, antibakteriyel etki

### 3. Yeşil Çay Göz Kompresİ (Günlük)

**Yapılış:**
1. 2 yeşil çay poşetini sıcak suda demlayın
2. Soğutun (buzdolabında 30 dakika)
3. Kapalı gözlerin üzerine yerleştirin
4. 10-15 dakika bekleyin

**Faydası:** Şişlik azaltma, koyu halka tedavisi, dinlendirme

### 4. Yeşil Çay Buhar Banyosu

**Yapılış:**
1. Bir kaseye kaynar su dökün
2. 3-4 yeşil çay poşeti ekleyin
3. Başınızı havlu ile örtün ve kaseye yaklaşın
4. 10 dakika buharı alın

**Faydası:** Gözenek açma, temizlik, kan dolaşımını artırma

### 5. Yeşil Çay ve Yoğurt Peeling Maskesi

**Malzemeler:**
- 1 çay kaşığı yeşil çay tozu
- 2 yemek kaşığı yoğurt
- 1 tatlı kaşığı tuz veya şeker

**Yapılış:**
1. Malzemeleri karıştırın
2. Nemli yüze uygulayın
3. Dairesel hareketlerle 2-3 dakika masaj yapın
4. 5 dakika daha bekleyin
5. Durulayın

**Faydası:** Nazik peeling, ölü hücre temizleme, parlaklık

## Yeşil Çayı İçeriden Kullanmak

Cildiniz için yeşil çayı sadece dışarıdan değil, içeriden de kullanabilirsiniz:

**Günde 2-3 Fincan Yeşil Çay:**
- Tüm vücut antioksidan desteği
- Toksin atımı
- İltihap azaltma
- Hormon dengesini düzenleme
- Stresi azaltma

**Doğru Demleme:**
- Su sıcaklığı 70-80°C olmalı (kaynar değil)
- Demleme süresi 2-3 dakika
- Fazla demleme acı tat verir ve kateşinleri azaltır

### İçme Zamanı

**Sabah:** Metabolizmayı hızlandırır, cildi uyandırır
**Öğleden Sonra:** Antioksidan tepe noktası
**Akşam (kahveinsiz):** Sakinleştirici ve rahatlatıcı

## Hangi Cilt Tipi İçin Uygundur?

Yeşil çay TÜM cilt tipleri için güvenlidir:

**Yağlı Cilt:** Sebum kontrolü, gözenek sıkılaştırma
**Kuru Cilt:** Antioksidan koruma, nemlendirme desteği
**Karma Cilt:** Denge sağlama
**Hassas Cilt:** Sakinleştirme, kızarıklık azaltma
**Akne Cilt:** Antibakteriyel, iltihap azaltma
**Olgun Cilt:** Yaşlanma karşıtı, kırışıklık önleme

## Dikkat Edilmesi Gerekenler

**Alerji Testi:**
İlk kullanımda küçük bir alanda test yapın.

**Taze Kullanım:**
Hazırladığınız yeşil çay ürünlerini 5 gün içinde tüketin.

**Güneş Hassasiyeti:**
Yeşil çay cildi güneşe duyarlı hale getirmez ancak yine de SPF kullanımı şarttır.

**Hamilelik:**
Hamile ve emziren anneler yeşil çay tüketimini sınırlamalı (günde max 2 fincan) ancak cilde uygulaması güvenlidir.

**İlaç Etkileşimi:**
Kan sulandırıcı kullananlar doktorlarına danışmalıdır.

## Ticari Ürünlerde Yeşil Çay

Yeşil çay içeren ürünlerde dikkat edilmesi gerekenler:

**İçerik Listesi:**
- "Camellia Sinensis Leaf Extract" arayın
- En az %1-3 konsantrasyonda olmalı
- İlk 5 içerikte yer alması ideal

**Ürün Çeşitleri:**
- Temizleyiciler
- Tonikler
- Serumlar
- Nemlendiriciler
- Göz kremleri
- Maskeler

## Bilimsel Kanıtlar

Yeşil çayın cilt faydaları çok sayıda bilimsel çalışmayla desteklenmiştir:

- **Archives of Dermatology (2020):** Yeşil çay ekstraktının akneyi %58 oranında azalttığı gösterildi.
- **Journal of the American Academy of Dermatology (2019):** UV hasarını %30 oranında azalttığı kanıtlandı.
- **Antioxidants Journal (2021):** Yeşil çay polifenollerinin kolajen üretimini %35 artırdığı belirlendi.

## Sonuç

Yeşil çay, modern cilt bakımının en güçlü doğal bileşenlerinden biridir. Güçlü antioksidan özelliği, yaşlanma karşıtı etkileri, akne tedavisi ve cilt tonu eşitleme faydalarıyla her yaştan ve her cilt tipinden kişi için idealdir.

Hem içecek olarak tüketerek hem de cilde doğrudan uygulayarak yeşil çayın mucizevi faydalarından yararlanabilirsiniz. Düzenli kullanımda cildiniz:
- Daha parlak ve canlı olur
- Lekeler azalır
- Kırışıklıklar hafiflenir
- Akne kontrol altına alınır
- Genç ve sağlıklı görünür

Doğanın bu harika hediyesini cilt bakım rutininize ekleyin ve farkı hissedin!`},"arbutin-skin-brightening":{title:"Arbutin ile Cilt Aydınlatma: Lekelere Doğal Çözüm",excerpt:"Arbutinin cilt lekelerine karşı etkili kullanımını ve güvenli aydınlatma yöntemlerini keşfedin...",content:`Cilt lekeleri, hiperpigmentasyon ve eşitsiz ton, cilt bakımında en çok şikayet edilen sorunlar arasındadır. Güneş lekeleri, yaş lekeleri, akne izleri ve melazma gibi problemlerle mücadele ederken, etkili ama aynı zamanda güvenli bir çözüm aramak önemlidir. İşte tam bu noktada arbutin devreye giriyor. Doğal kaynaklı, bilimsel olarak kanıtlanmış ve güvenli bir cilt aydınlatıcı olan arbutin, leke tedavisinde altın standart haline gelmiştir.

## Arbutin Nedir?

Arbutin, doğal olarak ayvada bulunan bir glikozittir. Özellikle kavak ağacı kabuğunda, erik, armut ve cranberry'de doğal olarak bulunur. Kimyasal yapısı hidroquinone'a benzer ancak çok daha güvenli ve yumuşak etkilidir.

### Arbutin Çeşitleri

**Alpha-Arbutin (α-Arbutin):**
- En etkili ve stabil formu
- Daha hızlı sonuç verir
- Üretimi sentetiktir ancak yapısı aynıdır
- Genellikle %0.5-2 konsantrasyonda kullanılır
- Fiyatı daha yüksektir

**Beta-Arbutin (β-Arbutin):**
- Doğal formu
- Daha yavaş ama nazik etki
- Hassas ciltler için ideal
- Genellikle %1-4 konsantrasyonda kullanılır
- Daha uygun fiyatlıdır

Alpha-arbutin, beta-arbutine göre 10 kat daha etkilidir ve daha hızlı sonuç verir.

## Arbutin Nasıl Çalışır?

Arbutinin cilt üzerindeki aydınlatma mekanizması bilimsel ve son derece etkilidir:

### Melanin Üretimini Engelleme

Cilt rengi ve lekeler melanin pigmenti tarafından belirlenir. Melanin, melanosit hücreleri tarafından tirozinaz enzimi aracılığıyla üretilir. Arbutin:

1. **Tirozinaz Enzimini Bloke Eder:**
   - Melanin sentezinin ana enzimi olan tirozinazı inhibe eder
   - Bu sayede yeni melanin üretimi %40-70 oranında azalır

2. **Mevcut Melanini Dağıtır:**
   - Cilt yüzeyindeki pigmentlerin eşit dağılmasını sağlar
   - Koyu lekelerin soluklaşmasına yardımcı olur

3. **Hiperpigmentasyonu Önler:**
   - Güneş, hormonlar veya enflamasyondan kaynaklanan aşırı pigmentasyonu engeller

4. **Hidroquinone Gibi Çalışır Ama Güvenlidir:**
   - Hidroquinone'un etkisini %77 oranında gösterir
   - Ancak toksik etkisi yoktur ve uzun süre güvenle kullanılabilir

## Arbutinin Cilde Sağladığı Faydalar

### 1. Güneş Lekelerini Azaltır

UV maruziyetinin neden olduğu kahverengi lekeler (solar lentigo):
- 8-12 haftada %30-50 oranında açılır
- Mevcut lekeleri soluklaştırır
- Yeni leke oluşumunu engeller

**Araştırma:** Journal of Cosmetic Dermatology 2020 çalışmasında, %2 alpha-arbutin kullanımının 12 haftada güneş lekelerini %45 oranında azalttığı gösterildi.

### 2. Yaş Lekelerini Giderir

Yaşla birlikte oluşan kahverengi lekeler (age spots):
- Düzenli kullanımda belirgin şekilde sönükleşir
- Cilt tonu daha homojen hale gelir
- Genç ve aydınlık bir görünüm sağlar

### 3. Akne İzlerini Siler

Post-inflamatuar hiperpigmentasyon (PIH):
- Akne sonrası kalan koyu izleri açar
- İltihap sonrası pigmentasyonu azaltır
- Cilt dokusunu düzeltir

### 4. Melazma Tedavisine Yardımcı Olur

Hormonlar nedeniyle oluşan koyu lekeler:
- Hamilelik maskesi (kloazma) tedavisinde etkilidir
- Hormonsal lekeleri hafifletir
- Düzenli kullanımda %20-30 iyileşme sağlar

### 5. Genel Cilt Tonu Eşitleme

- Cilt tonunu homojenleştir ir
- Doğal parlaklık kazandırır
- Sağlıklı ve canlı bir görünüm sağlar

### 6. Antioksidan Koruma

Arbutin, tirozinaz inhibisyonunun ötesinde:
- Serbest radikalleri nötralize eder
- UV hasarını azaltır
- Yaşlanmayı geciktirir

## Arbutin Kullanmanın Avantajları

### Hidroquinone'a Kıyasla

Hidroquinone, yıllarca cilt aydınlatmanın altın standardı olarak kabul edildi ancak ciddi yan etkileri vardır:

| Özellik | Hidroquinone | Arbutin |
|---------|--------------|---------|
| Etkinlik | Çok yüksek | Yüksek |
| Güvenlik | Düşük (toksik olabilir) | Yüksek |
| Yan Etkiler | Ochronosis, tahriş | Minimal |
| Uzun süre kullanım | Güvensiz | Güvenli |
| Hassas cilt | Uygun değil | Uygun |

Arbutin, hidroquinone'un güvenli alternatifidir ve uzun süreli kullanımda risk oluşturmaz.

### Diğer Aydınlatıcılarla Karşılaştırma

**Vitamin C:** Arbutin ile kombine edilebilir, sinerjik etki yapar
**Kojik Asit:** Arbutin daha az tahriş edicidir
**Niasinamid:** İkisi birlikte kullanılabilir ve güçlü sonuç verir
**Licorice Extract:** Doğal bir alternatif ama arbutin daha güçlüdür

## Arbutin İçeren Ürünler Nasıl Kullanılır?

### Konsantrasyon Rehberi

**Başlangıç Seviyesi:** %0.5-1 alpha-arbutin
**Orta Seviye:** %1-2 alpha-arbutin
**İleri Seviye:** %2-4 beta-arbutin

**Önemli:** %2'nin üzerindeki konsantrasyonlar daha etkilidir ama daha fazla tahriş riski taşır.

### Kullanım Sırası

Arbutin serum veya krem formunda olabilir. Doğru sıralama:

1. Temizleyici
2. Tonik
3. **Arbutin Serum** (ince doku, önce emilir)
4. Diğer serumlar (Vitamin C, Hyaluronik Asit)
5. Nemlendirici
6. **SPF (SABAHLARI MUTLAKA!)**

### Sabah mı Akşam mı?

**En İyi Sonuç:** Sabah-Akşam İkisi de

**Sadece Sabah:**
- Günboyu koruma
- SPF ile kombine kullanım şart

**Sadece Akşam:**
- Gece onarım sürecinde çalışır
- Diğer aktiflerle (retinol gibi) kombine edilebilir

### Uygulama Adımları

1. Cildi temizleyin ve kurulayın
2. 3-4 damla arbutin serumu alın
3. Yüz, boyun ve göğüs bölgesine uygulayın
4. Özellikle lekeli bölgelere odaklanın
5. Tamamen emilmesini bekleyin (1-2 dakika)
6. Nemlendirici ve SPF sürün

**Sıklık:** Günde 1-2 kez

## Arbutin ile Kombine Edilebilecek Aktifler

Arbutin, birçok aktif içerikle sinerjik etki gösterir:

### Mükemmel Kombinasyonlar

**1. Arbutin + Vitamin C**
- Güçlü aydınlatma
- Antioksidan süper güç
- Melanin inhibisyonu maksimize olur
- Sabah birlikte kullanılabilir

**2. Arbutin + Niasinamid**
- Leke giderme
- Gözenek sıkılaştırma
- Cilt bariyerini güçlendirme
- Herhangi bir zamanda birlikte kullanılabilir

**3. Arbutin + Hyaluronik Asit**
- Aydınlatma + Nemlendirme
- Cilt pürüzsüzleştirme
- Işıltılı görünüm

**4. Arbutin + SPF**
- En kritik kombinasyon!
- Arbutin etkinliği için SPF şart
- Yeni leke oluşumunu önler

### Dikkatli Kullanılması Gereken Kombinasyonlar

**Arbutin + Retinol:**
- Akşamları kullanılabilir
- Ancak hassas ciltler tahriş olabilir
- Önce arbutin, 10 dakika sonra retinol

**Arbutin + AHA/BHA:**
- Peeling asitleri cildi duyarlı hale getirebilir
- Farklı zamanlarda kullanmak daha iyi (sabah arbutin, akşam asit)

## Arbutin Kullanırken Dikkat Edilmesi Gerekenler

### Mutlaka SPF Kullanın!

Arbutin melanin üretimini azalttığı için cildi güneşe karşı daha hassas hale getirir. **Minimum SPF 30 kullanımı zorunludur**, aksi takdirde:
- Lekeler kötüleşebilir
- Yeni lekeler oluşabilir
- Ciltte hasar meydana gelebilir

### Sabırlı Olun

Arbutin kimyasal peeling gibi anında sonuç vermez. Görünür sonuçlar için:
- **4 hafta:** İlk hafif aydınlanma
- **8 hafta:** Belirgin leke azalması
- **12 hafta:** Maksimum etki

### Alerji Testi Yapın

Hassas ciltlerde nadir de olsa tahriş yapabilir:
1. Dirsek içi veya kulak arkasına uygulayın
2. 24 saat bekleyin
3. Kızarıklık, kaşıntı yoksa yüze uygulanabilir

### Hamilelik ve Emzirme

Arbutin genel olarak güvenli kabul edilir ancak:
- Hamileyseniz doktorunuza danışın
- Düşük konsantrasyonlarla başlayın
- Emzirme döneminde kullanılabilir

## Ev Yapımı Arbutin Karışımları Mümkün mü?

Arbutin doğal kaynaklardan elde edilebilir ancak etkili konsantrasyonlara ulaşmak zordur:

**Kavak Ağacı Özütü:**
Doğal arbutin kaynağıdır ama standart konsantrasyon sağlanamaz.

**Önerimiz:** Kaliteli, formüle edilmiş arbutin serumları tercih edin. Ev yapımı karışımlar yeterli etkiyi göstermeyebilir.

## En İyi Arbutin Ürünleri Nasıl Seçilir?

### İçerik Listesine Dikkat

**Aranacak İsimler:**
- Alpha-Arbutin
- α-Arbutin
- Arbutin
- Bearberry Extract (Arbutin içerir)

**Konsantrasyon:**
- En az %1-2 alpha-arbutin
- İdeal: %2 alpha-arbutin
- %4'ten fazla gereksizdir

### Formülasyon Kalitesi

**pH Seviyesi:** 5-7 arası ideal
**Stabilite:** Hava geçirmez ambalaj
**Ek İçerikler:** Vitamin C, Niasinamid, Hyaluronik Asit içermesi avantaj

### Ürün Formları

**Serum:** En yoğun ve etkili
**Krem:** Nemlendirici + Aydınlatıcı
**Tonik:** Hafif, günlük kullanım
**Maske:** Yoğun tedavi

## Arbutin Hakkında Sık Sorulan Sorular

**Arbutin her gün kullanılabilir mi?**
Evet, günde 1-2 kez güvenle kullanılabilir.

**Ne kadar sürede sonuç görülür?**
4-12 hafta arası, cilt tipine ve leke şiddetine bağlı.

**Arbutin lekeyitamamen siler mi?**
Lekeleri %30-70 oranında açar, tamamen silme garantisi vermez.

**Tüm cilt tiplerine uygun mu?**
Evet, yağlı, kuru, karma, hassas tüm ciltler kullanabilir.

**Yan etkisi var mı?**
Minimal. Nadir durumlarda hafif kızarıklık ve tahriş olabilir.

## Bilimsel Kanıtlar

Arbutinin etkinliği çok sayıda bilimsel çalışmayla kanıtlanmıştır:

- **Journal of Cosmetic Dermatology (2020):** %2 alpha-arbutin, 12 haftada solar lentigolari %45 azalttı.
- **International Journal of Molecular Sciences (2019):** Arbutin, melanin sentezini %63 oranında inhibe etti.
- **Clinical and Experimental Dermatology (2021):** Arbutin + Vitamin C kombinasyonu, melazma tedavisinde %57 iyileşme sağladı.

## Sonuç

Arbutin, cilt lekelerine karşı en etkili ve güvenli doğal çözümlerden biridir. Hidroquinone'un toksik etkisi olmadan benzer sonuçlar vererek, cilt aydınlatma konusunda devrim yaratmıştır.

Düzenli ve doğru kullanımda:
- Güneş lekeleri açılır
- Yaş lekeleri soluklaşır
- Akne izleri kaybolur
- Melazma tedavisine destek olur
- Genel cilt tonu eşitlenir ve aydınlanır

Arbutin kullanırken unutulmaması gereken en önemli nokta SPF kullanımıdır. Gündüz mutlaka güneş koruyucu sürmek, arbutinin etkinliğini maksimize eder ve yeni leke oluşumunu önler.

Sabırlı olun, düzenli kullanın ve lekesiz, aydınlık bir cildin keyfini çıkarın!`},"chemical-peeling-guide":{title:"Kimyasal Peeling Rehberi: Cilt Yenilenmesinin Bilimsel Yaklaşımı",excerpt:"Kimyasal peeling ile cildinizi nasıl yenileyebileceğinizi, hangi peeling türünün sizin için uygun olduğunu ve profesyonel sonuçlar elde etmenin yollarını keşfedin...",content:`Kimyasal peeling, dermatolojik cilt bakımında kullanılan en etkili yöntemlerden biridir. Cilt yüzeyindeki hasarlı, ölü hücre tabakalarını kontrollü bir şekilde uzaklaştırarak, cildin doğal yenilenme sürecini hızlandırır ve pek çok cilt sorununa çözüm sunar.

## Kimyasal Peeling Nedir?

Kimyasal peeling, cildin üst tabakalarını kimyasal bir asit çözeltisi kullanarak kontrollü şekilde soyma işlemidir. Bu işlem sonucunda cilt yüzeyi yenilenir, cilt dokusu düzleşir ve daha genç, parlak bir görünüm elde edilir.

Temel olarak, kimyasal peeling:
- Ölü deri hücrelerini uzaklaştırır
- Hücre yenilenmesini hızlandırır
- Kolajen ve elastin üretimini uyarır
- Hiperpigmentasyonu azaltır
- Akne izlerini ve lekeleri soluklaştırır
- İnce çizgileri ve kırışıklıkları azaltır
- Cilt dokusunu pürüzsüzleştirir

## Kimyasal Peeling Türleri

Kimyasal peelingler, derinliklerine göre üç ana kategoriye ayrılır:

### 1. Yüzeysel (Superficial) Peeling

**Derinlik:** Sadece epidermis (cilt yüzeyi)
**Kullanılan Asitler:**
- Glikolik asit (%20-30)
- Laktik asit (%20-30)
- Salisilik asit (%20-30)
- Mandelic asit (%30-40)

**Kimler İçin Uygundur:**
- İlk kez peeling yapacaklar
- Hafif ton eşitsizlikleri olanlar
- Küçük gözenekler problemi yaşayanlar
- Erken dönem yaşlanma belirtileri görenler
- Hafif akne izleri olanlar

**Yan Etkiler:** Minimal - hafif kızarıklık, 1-2 gün soyulma
**İyileşme Süresi:** 1-7 gün
**Tekrar Sıklığı:** Her 2-4 haftada bir, 4-6 seans

**Sonuçlar:**
- Cilt parlaklığında artış
- Hafif ton eşitlemesi
- Gözenek görünümünde azalma
- Daha pürüzsüz cilt dokusu

### 2. Orta Derinlikte (Medium) Peeling

**Derinlik:** Epidermis ve dermise kadar
**Kullanılan Asitler:**
- Trikloroasetik asit (TCA) %35-50
- Jessner solüsyonu kombinasyonları
- Yüksek konsantrasyonlu glikolik asit (%50-70)

**Kimler İçin Uygundur:**
- Orta seviye kırışıklıklar
- Belirgin güneş lekeleri
- Akne izleri
- Melazma (hamilelik lekesi)
- Yaşlanma belirtileri

**Yan Etkiler:** Orta - şişlik, kızarıklık, 5-7 gün soyulma
**İyileşme Süresi:** 7-14 gün
**Tekrar Sıklığı:** 6-12 ayda bir

**Sonuçlar:**
- Belirgin leke azalması
- Kırışıklık azalması
- Akne izi soluklaşması
- Cilt sıkılaştırma

### 3. Derin (Deep) Peeling

**Derinlik:** Dermis (cilt ortası tabakası)
**Kullanılan Asitler:**
- Fenol
- Yüksek konsantrasyon TCA (%50+)

**Kimler İçin Uygundur:**
- Derin kırışıklıklar
- Ağır güneş hasarı
- Sivilce göçükler
- Belirgin yaşlanma belirtileri

**Yan Etkiler:** Ciddi - yoğun kızarıklık, şişlik, 2 hafta soyulma
**İyileşme Süresi:** 2-3 hafta
**Tekrar Sıklığı:** Sadece 1-2 kez (yaşam boyu)

**Önemli Not:** Derin peeling yalnızca doktor tarafından klinik ortamda yapılmalıdır!

## Kimyasal Peeling İçin Kullanılan Asitler

### AHA (Alfa Hidroksi Asitler)

**Glikolik Asit:**
- En popüler AHA
- Şeker kamışından elde edilir
- En küçük molekül boyutu - derine nüfuz eder
- Anti-aging, aydınlatma, soyulma

**Laktik Asit:**
- Sütten elde edilir
- Glikolik aside göre daha nazik
- Nemlendirici özellik
- Hassas ciltler için ideal

**Mandelic Asit:**
- Bademden elde edilir
- Büyük molekül - en nazik AHA
- Antibakteriyel
- Akne ve hiperpigmentasyon için mükemmel

**Malik Asit:**
- Elmadan elde edilir
- Çok nazik
- Hassas ve rozase ciltler için

### BHA (Beta Hidroksi Asit)

**Salisilik Asit:**
- Yağda çözünür (gözeneklere girebilir)
- Yağlı ve akne eğilimli ciltler için ideal
- Anti-inflamatuar
- Gözenek temizliği ve sıkılaştırma

### PHA (Poli Hidroksi Asitler)

**Gluconolactone, Lactobionic Asit:**
- Çok büyük moleküller
- Çok nazik
- Antioksidan
- Hassas ve kuru ciltler için

### Kombine Peeling Çözeltileri

**Jessner Solüsyonu:**
- Salisilik + laktik + resorsinol
- Melazma ve hiperpigmentasyon için

**Cosmelan / Dermamelan:**
- Çok bileşenli
- Melazma tedavisi için altın standart

## Kimyasal Peeling Öncesi Hazırlık

Kimyasal peeling öncesi cildinizi hazırlamak, daha iyi sonuçlar almanızı ve yan etkileri azaltmanızı sağlar.

### 2-4 Hafta Önce

**1. Düşük Konsantrasyonlu Asit Kullanımı:**
- %5-10 glikolik veya laktik asit içeren ürünler
- Cildinizi asit kullanımına alıştırır
- Ölü deri hücresi birikimini azaltır

**2. Güneş Koruyucu (SPF 50+):**
- Her gün, bulutlu günlerde bile
- 2 saatte bir yenilemek
- Peeling sonrası hiperpigmentasyon riskini azaltır

**3. Retinol Kullanımını Azaltın veya Durdurun:**
- Peeling 1 hafta öncesi retinol/tretinoin kullanmayın
- Cilt tahriş riskini azaltır

### 1 Hafta Önce

**1. Uçuk Önleme:**
- Geçmişte uçuk sorunu yaşadıysanız, antivirallar alın
- Kimyasal peeling uçuk tetikleyebilir

**2. Hassasiyeti Azaltıcı Ürünler:**
- Panthenol, niasinamid, centella içeren ürünler
- Cilt bariyerini güçlendirir

**3. Kaçınılması Gerekenler:**
- Agresif scrublar
- Epilasyon, ağda
- Güneşe maruz kalma
- Parfümlü ürünler

### Peeling Günü

- Makyaj yapmayın
- Cildinizi hafif temizleyiciyle temizleyin
- Hiçbir krem veya serum uygulamayın
- Rahat ve gevşek giysiler giyin

## Kimyasal Peeling Uygulaması (Klinik)

### Adım 1: Cilt Temizliği
Dermolog cildinizi alkol bazlı bir çözeltiyle temizler ve yağsızlaştırır.

### Adım 2: Göz ve Hassas Bölge Koruması
Göz çevresi, dudak köşeleri ve burun kıvrımları vazelin ile korunur.

### Adım 3: Asit Uygulaması
Seçilen asit çözeltisi fırça veya pamuk ile cildinize uygulanır. Hafif yanma ve batma hissedebilirsiniz.

### Adım 4: Nötralizasyon (gerekirse)
Bazı asitler (glikolik, laktik) belirli bir süre sonra nötralize edilir. Bazıları (salisilik, TCA) kendiliğinden durur.

### Adım 5: Sakinleştirme
Sakinleştirici maskeler veya jeller uygulanır.

**Süre:** Yüzeysel peeling 15-30 dk, orta derinlik 30-60 dk

## Evde Kimyasal Peeling

Evde kullanabileceğiniz düşük konsantrasyonlu peelingler mevcuttur, ancak dikkatli olunmalıdır.

### Güvenli Evde Kullanım Rehberi

**Konsantrasyonlar:**
- Glikolik asit: max %30
- Laktik asit: max %30
- Salisilik asit: max %2
- Mandelic asit: max %10

**Uygulama:**
1. Yüzünüzü temizleyin ve kurulayın
2. Hassas bölgelere vazelin sürün
3. Ürünü ince tabaka halinde sürün
4. Üründeki talimatları izleyin (genelde 3-10 dk)
5. Nötralizasyon gerekiyorsa yapın
6. Bol suyla durulayın
7. Sakinleştirici ve nemlendirici uygulayın

**Dikkat:**
- Haftada maksimum 1-2 kez
- Hassas ciltler ayda 1-2 kez
- İlk kullanımda düşük süre (3-5 dk)
- Tahriş olursa hemen durulayın

## Peeling Sonrası Bakım (Post-Peel Care)

Kimyasal peeling sonrası bakım, sonuçlarınızı maksimize etmek ve komplikasyonları önlemek için kritiktir.

### İlk 24-48 Saat

**Yapılması Gerekenler:**
1. **Nazik Temizlik:** Sülfatsız, hafif temizleyici
2. **Sık Nemlendirme:** Saatte bir nemlendirici krem
3. **Soğuk Kompres:** Şişlik varsa 10-15 dk
4. **Kaçınılacaklar:**
   - Sıcak duş/banyo
   - Ter çıkaracak egzersiz
   - Makyaj
   - Güneşe çıkmak

### 3-14 Gün (Soyulma Dönemi)

**ÇOK ÖNEMLİ: Soyulan derileri ÇEKMEYIN!**

Soyulmayı hızlandırmak veya cildi çekmek:
- Kalıcı izlere
- Hiperpigmentasyona
- Enfeksiyona neden olabilir

**Yapılması Gerekenler:**
1. **Nemlendir, Nemlendir, Nemlendir:**
   - Günde 4-6 kez nemlendirici
   - Hyaluronik asit serumu
   - Oklusiv krem gece

2. **SPF 50+ (MUTLAKA):**
   - Her 2 saatte bir yenileyin
   - Fiziksel (mineral) güneş kremi tercih edin
   - Şapka ve güneş gözlüğü kullanın

3. **Sakinleştirici İçerikler:**
   - Centella asiatica
   - Panthenol
   - Niasinamid (peeling sonrası 3. günden itibaren)
   - Aloe vera

**Kaçınılacaklar (2-4 Hafta):**
- Aktif maddeler (retinol, AHA, BHA, C vitamini)
- Eksfoliyasyon
- Sıcak ortamlar (sauna, hamam, sıcak yoga)
- Yüzme havuzları (klor)
- Epilasyon, ağda, lazer
- Agresif yüz masajları

### Uzun Dönem Bakım

**Güneş Koruması (ÖMR BOYU):**
Kimyasal peeling sonrası cildiniz 3-6 ay boyunca güneşe daha hassastır. SPF 50+ her gün şart.

**Aktif Madde Kullanımına Dönüş:**
- Peeling sonrası 2. hafta: Hafif niasinamid
- 3-4. hafta: Düşük konsantrasyonlu C vitamini
- 4-6. hafta: Retinol (yavaş başlayın)

## Kimyasal Peeling Komplikasyonları ve Çözümleri

### Yaygın Yan Etkiler (Normal)

**Kızarıklık:** 1-14 gün (peeling derinliğine göre)
**Soyulma:** 3-14 gün
**Kuruluk:** 1-2 hafta
**Gerginlik hissi:** 3-7 gün

**Çözüm:** Yoğun nemlendirme ve sabır

### Ciddi Komplikasyonlar (Doktor Gerektiren)

**Post-inflamatuar Hiperpigmentasyon (PIH):**
- Özellikle koyu ciltlerde risk
- Önleme: Güneşten sakınma, SPF
- Tedavi: Aydınlatıcı serumlar, arbutin, kojik asit

**Enfeksiyon:**
- Belirti: Artan ağrı, pü, koku, ateş
- Tedavi: Antibiyotik

**Aşırı Hassasiyet:**
- Belirti: 2 haftadan uzun süren kızarıklık
- Tedavi: Topikal steroidler, dermatolojik takip

**Skarlaşma (İz):**
- Çok nadir
- Risk faktörü: Cildi çekmek, enfeksiyon
- Tedavi: Lazer, mikroneedling

## Kimyasal Peeling İçin İdeal Adaylar ve Uygun Olmayanlar

### İdeal Adaylar

✅ Açık ve orta ton ciltler (daha az PIH riski)
✅ Gerçekçi beklentileri olanlar
✅ Güneşe maruz kalma riski düşük olanlar
✅ Akne izleri, melazma, güneş lekeleri olanlar
✅ İnce çizgi ve kırışıklıkları olanlar
✅ Düzensiz cilt dokusu olanlar

### Uygun Olmayanlar

❌ Aktif enfeksiyonu olanlar (uçuk, herpes, akne)
❌ Hamile veya emziren kadınlar
❌ Oral isotretinoin (Roaccutane) kullananlar (6 ay sonra)
❌ Keloid eğilimi olanlar
❌ Çok koyu ciltler (dikkatli yaklaşım gerektirir)
❌ Otoimmün hastalığı olanlar

## Kimyasal Peeling vs Diğer Cilt Yenileme Yöntemleri

### Kimyasal Peeling vs Microdermabrazyon

**Microdermabrazyon:**
- Fiziksel eksfoliyasyon
- Daha yüzeysel
- Daha az etkili
- Daha az iyileşme süresi

**Kimyasal Peeling:**
- Kimyasal eksfoliyasyon
- Daha derin sonuçlar
- Daha etkili
- Daha uzun iyileşme

### Kimyasal Peeling vs Lazer

**Lazer:**
- Daha pahalı
- Daha hassas hedefleme
- Hiperpigmentasyon riski daha düşük

**Kimyasal Peeling:**
- Daha uygun fiyat
- Geniş alan tedavisi
- Daha fazla hiperpigmentasyon riski

### Kimyasal Peeling vs Microneedling

**İkisi de mükemmel, kombine kullanılabilir:**
- Microneedling: Kolajen üretimi, derin izler
- Kimyasal Peeling: Pigmentasyon, yüzeysel dokular

## Sonuç

Kimyasal peeling, doğru yapıldığında ve doğru hasta seçildiğinde, cilt yenilenmesi için son derece etkili bir yöntemdir. Ancak, bu güçlü tedavinin riskleri ve gereksinimleri vardır.

**Anahtar Noktalar:**
1. Cilt tipinize ve sorunlarınıza uygun peeling seçin
2. İlk kez yapıyorsanız yüzeysel peeling ile başlayın
3. Profesyonel bir dermatolog ile çalışın
4. Peeling öncesi ve sonrası talimatları dikkatle izleyin
5. Güneşten korunun - bu en önemli kuraldır!
6. Sabırlı olun - sonuçlar zaman alır
7. Evde peeling yaparken aşırıya kaçmayın

Kimyasal peeling bir mucize değildir, ancak doğru kullanıldığında cildinizi dönüştürebilecek bilimsel olarak kanıtlanmış bir tedavidir. Cilt bakım yolculuğunuzda güçlü bir araç olabilir!`},"hydration-secrets":{title:"Cilt Nemlendirme Sırları",excerpt:"Cildinizi nasıl nem seviyesini artırırsınuz?",content:"Nemli cilt için bol su için, hyaluronik asit kullanın, nemlendirici sürün ve ceramidlerle cildi koruyun. Nemli cilt genç ve sağlıklı görünür."},"aloe-vera-healing":{title:"Aloe Veranın İyileştirici Gücü: Doğanın Mucizevi Bitkisi",excerpt:"Binlerce yıldır kullanılan aloe veranın cildinize sağladığı bilimsel olarak kanıtlanmış iyileştirici faydaları keşfedin...",content:`Aloe vera, 6000 yılı aşkın süredir "ölümsüzlük bitkisi" olarak bilinen ve cilt bakımında mucizevi etkilere sahip bir sukulent bitkidir. Antik Mısır'da Kleopatra ve Nefertiti tarafından güzellik rutinlerinde kullanılan bu bitki, modern bilim tarafından da araştırılmış ve etkinliği kanıtlanmıştır.

## Aloe Vera Nedir?

Aloe vera (Aloe barbadensis miller), Liliaceae ailesinden, kalın yapraklı, sıcak iklimlerde yetişen bir süs bitkisidir. Bitkinin yapraklarından elde edilen berrak jel, 75'ten fazla aktif bileşen içerir ve bu bileşenler cildin sağlığı için son derece faydalıdır.

### Aloe Vera Jelinin İçeriği

Aloe vera jelinin %99'u sudur, ancak kalan %1'lik kısım inanılmaz derecede güçlüdür:

**Vitaminler:**
- **Vitamin A (Beta-karoten):** Cilt yenilenmesi ve anti-aging
- **Vitamin C (Askorbik Asit):** Kolajen üretimi ve aydınlatma
- **Vitamin E (Tokoferol):** Antioksidan ve nem koruma
- **Vitamin B12, Folat:** Hücre metabolizması
- **Kolin:** Hücre zarı sağlığı

**Mineraller:**
- **Kalsiyum:** Cilt bariyeri
- **Magnezyum:** Enzim aktivasyonu
- **Çinko:** Yara iyileşmesi ve anti-inflamatuar
- **Selenyum:** Antioksidan
- **Manganez:** Kolajen sentezi

**Enzimler:**
- **Bradykinase:** İltihabı azaltır
- **Lipase ve Proteaz:** Sindirim ve ölü hücre temizliği
- **Alkaline Phosphatase:** İyileştirme sürecini hızlandırır

**Şekerler (Polisakkaritler):**
- **Acemannan:** Bağışıklık güçlendirici, anti-viral, yara iyileştirici
- **Mannose:** Anti-inflamatuar ve nemlendirici

**Amino Asitler:**
- 20 amino asit içerir (8 tanesi esansiyel)
- Protein ve kolajen yapımı için gerekli

**Salisilik Asit:**
- Anti-inflamatuar
- Antibakteriyel
- Akne tedavisi

**Lignin:**
- Penetrasyon artırıcı
- Diğer bileşenlerin derin katmanlara ulaşmasını sağlar

**Saponinler:**
- Antimikrobiyal ve antifungal
- Doğal temizleyici

## Aloe Veranın Bilimsel Olarak Kanıtlanmış Faydaları

### 1. Güçlü İyileştirme ve Onarım

Aloe vera, yara iyileştirme konusunda en etkili doğal bileşenlerden biridir.

**Yara İyileştirme Mekanizması:**
- **Fibroblast Aktivasyonu:** Kolajen üreten hücreleri uyarır
- **Kan Akışını Artırır:** Yaralı bölgeye oksijen ve besin taşınır
- **Hücre Proliferasyonu:** Yeni hücre üretimini hızlandırır
- **Enfeksiyonu Önler:** Antimikrobiyal özellikleri sayesinde

**Klinik Kanıt:**
Journal of Dermatological Treatment 2019 çalışmasında, aloe vera jeli kullanılan yaraların %34 daha hızlı iyileştiği gösterilmiştir.

**Tedavi Edilen Yaralı Durumlar:**
- Kesikler ve sıyrıklar
- Yanıklar (1. ve 2. derece)
- Cerrahi insizyonlar
- Çatlaklar
- Soğuk alerjisi yaraları

### 2. Güneş Yanıklarına Karşı Mucizevi Etki

Aloe vera, "güneş yanığı bitkisi" olarak bilinir ve bu ismi hak eder.

**Güneş Yanığına Etki:**
- **Soğutma Etkisi:** Anında rahatlatır
- **İltihap Azaltma:** Kızarıklığı %30 oranında azaltır
- **Nem Verme:** Dehidrate cildi nemlendirir
- **Soyulma Azaltma:** Cildin daha az soyulmasını sağlar
- **Onarım Hızlandırma:** DNA onarımını destekler

**Uygulama:**
1. Soğutulmuş aloe vera jeli (buzdolabından)
2. Yanık bölgeye cömertçe uygulayın
3. Günde 4-6 kez tekrarlayın
4. Tamamen emilmesini bekleyin

**Araştırma:** Phytotherapy Research 2020'de yayınlanan çalışmada, aloe vera jeli uygulanan güneş yanıklarının %50 daha hızlı iyileştiği kanıtlanmıştır.

### 3. Anti-İnflamatuar (İltihap Giderici) Özellik

Aloe vera, ciltteki iltihabı azaltan en güçlü doğal bileşenlerden biridir.

**İltihabı Nasıl Azaltır?**
- **COX-2 Enzimini İnhibe Eder:** Ağrı ve iltihabın nedeni olan enzimi bloke eder
- **Bradykinase Enzimi:** Yanma ve ağrıyı azaltır
- **Antioksidanlar:** Serbest radikalleri nötralize eder

**Tedavi Edilen Durumlar:**
- Güneş yanığı
- Böcek sokmaları
- Egzama ve dermatit
- Psoriazis
- Rozasea
- Akne iltihabı
- Alerjik reaksiyonlar

**Rozasea Çalışması:**
Dermatology Online Journal 2021 araştırmasında, %50 konsantrasyonlu aloe vera kremi kullanan rozasea hastalarının semptomlarında %48 azalma görülmüştür.

### 4. Nemlendirme ve Hidrasyon

Aloe vera, yoğun nemlendirici özelliklere sahip hafif bir jeldir.

**Nemlendirme Mekanizması:**
- **Polisakkaritler:** Su çekici (humektan) özellik
- **Mucopolisakkaritler:** Nemi kilitleyen bariyer oluşturur
- **%99 Su İçeriği:** Doğrudan hidrasyon sağlar
- **NMF Desteği:** Doğal nemlendirme faktörlerini destekler

**Tüm Cilt Tipleri İçin Uygundur:**
- **Yağlı Cilt:** Hafif, yağsız nemlendirme
- **Kuru Cilt:** Yoğun hidrasyon
- **Karma Cilt:** Dengeleyici etki
- **Hassas Cilt:** Tahriş etmeden nemlendirir

**Komedojenik Değildir:**
Gözenekleri tıkamaz, akne eğilimli ciltler güvenle kullanabilir.

### 5. Akne ve Sivilce Tedavisi

Aloe veranın antibakteriyel, anti-inflamatuar ve iyileştirici özellikleri, akne tedavisinde çok etkilidir.

**Akneye Karşı Etki:**
- **Antibakteriyel:** P. acnes bakterisini öldürür
- **Sebum Kontrolü:** Aşırı yağ üretimini dengeler
- **İltihap Azaltma:** Kırmızı, şişmiş sivilceleri sakinleştirir
- **İz Azaltma:** Akne sonrası hiperpigmentasyonu açar
- **Gözenek Temizliği:** Salisilik asit içeriği sayesinde

**Klinik Çalışma:**
Journal of Dermatological Treatment 2018'de yayınlanan çalışmada, aloe vera + tretinoin kombinasyonunun sadece tretinoine göre %35 daha etkili olduğu kanıtlanmıştır.

**Kullanım:**
1. Yüzü temizleyin
2. Aloe vera jeli ince tabaka halinde sürün
3. 20 dakika bekleyin (veya gece boyu)
4. Durulayın (veya bırakın)
5. Günde 2 kez uygulayın

### 6. Yaşlanma Karşıtı Etkiler

Aloe vera, yaşlanma belirtilerine karşı çok yönlü bir yaklaşım sunar.

**Anti-Aging Mekanizmaları:**

**a) Kolajen Üretimi:**
- Fibroblast hücrelerini uyarır
- Kolajen sentezini artırır
- Elastin üretimini destekler
- Sonuç: Daha sıkı, genç cilt

**b) Antioksidan Koruma:**
- Vitamin C ve E ile serbest radikalleri nötralize eder
- UV hasarını onarır
- Erken yaşlanmayı önler

**c) Hücre Yenilenmesi:**
- Mukopolisakkaritler hücre turnover'ını hızlandırır
- Ölü hücreleri uzaklaştırır
- Taze, genç hücreler ortaya çıkar

**d) Nem Koruması:**
- Kırışıklıkları dolgunlaştırır
- İnce çizgileri azaltır
- Cilde elastikiyet kazandırır

**Araştırma Sonuçları:**
Annals of Dermatology 2019 çalışmasında, 90 gün boyunca aloe vera jeli kullanan kadınlarda:
- Kırışıklıklarda %30 azalma
- Cilt elastikiyetinde %90 artış
- Kolajen üretiminde %68 artış

### 7. Hiperpigmentasyon ve Leke Giderme

Aloe vera, cilt tonunu eşitleyici ve aydınlatıcı özellikler taşır.

**Aydınlatma Mekanizması:**
- **Aloesin Bileşeni:** Melanin üretimini %34 oranında azaltır
- **Tyrosinase İnhibisyonu:** Melanin sentezi engellenir
- **Hücre Yenilenmesi:** Pigmentli hücreler dökülür
- **Oksitasyonsuz Tansyon Azaltma:** Lekeler soluklaşır

**Tedavi Edilen Leke Türleri:**
- Güneş lekeleri
- Akne izleri
- Post-inflamatuar hiperpigmentasyon (PIH)
- Melazma (destek tedavi)
- Yaş lekeleri

**Kullanım:**
1. Temiz cilde aloe vera jeli sürün
2. 30 dakika bekleyin
3. Durulayın
4. Günde 2 kez, 8-12 hafta boyunca

**Not:** Vitamin C veya kojik asit ile kombine edildiğinde etkinlik artar.

### 8. Hassas ve İrritasyona Uğramış Cildi Sakinleştirme

Aloe vera, "doğanın sakinleştircisi" olarak bilinir.

**Sakinleştirici Etkiler:**
- **Soğutma Hissi:** Anında rahatlama
- **İltihap Azaltma:** Kızarıklığı giderir
- **Kaşıntı Önleme:** Histamin salınımını azaltır
- **Bariyer Onarımı:** Hasarlı cildi iyileştirir

**Kullanım Alanları:**
- Traş sonrası tahriş
- Alerjik reaksiyonlar
- Egzama ve dermatit
- Böcek sokmaları
- Kış kuruluğu
- Rüzgar yanığı
- Kimyasal peeling sonrası

### 9. Saç ve Saç Derisi Sağlığı

Aloe vera, sadece cilt için değil, saç sağlığı için de mükemmeldir.

**Saç Derisinize Faydaları:**
- **Kepek Tedavisi:** Antifungal özellik
- **Saç Dökülmesini Azaltır:** Folikülleri besler
- **Kaşıntı Giderme:** Seboreik dermatiti rahatlatır
- **pH Dengesi:** Saç derisinin doğal pH'ını korur

**Saça Faydaları:**
- Nem ve parlaklık
- Hasar onarımı
- Güçlendirme
- Yumuşatma

**Kullanım:**
Haftada 1-2 kez aloe vera jeli veya aloe içeren şampuan kullanın.

## Aloe Vera Nasıl Kullanılır?

### Ev Yapımı Aloe Vera Jeli (En Etkili Yöntem)

**Malzemeler:**
- 1 olgun aloe vera yaprağı

**Hazırlanışı:**
1. Yaprağı dibinden kesin
2. 10-15 dakika dik tutun (sarı latex akması için)
3. Yaprağı yıkayın
4. Kenarları kesip atın
5. Bıçakla ikiye bölün
6. Jeli kaşıkla kazıyın
7. Blenderda püre yapın (opsiyonel)
8. Cam kavanozda buzdolabında saklayın (1 hafta)

**Koruyucu Eklemek İsterseniz:**
- 1 tatlı kaşığı E vitamini yağı (antioksidan ve koruyucu)
- 2-3 damla grapefruit tohum özütü (doğal koruyucu)

### Satın Alınacak Aloe Vera Ürünlerinde Dikkat Edilecekler

**İçerik Listesi:**
- **Aloe Barbadensis Leaf Juice/Extract** ilk sırada olmalı
- Minimum %90-99 aloe vera içermeli
- "Decolorized" veya "Filtered" olarak belirtilmeli (latex uzaklaştırılmış)
- Parabensiz, alkol içermeyen tercih edin

**Kaçınılacaklar:**
- "Aloe vera" ikinci veya üçüncü sırada olan ürünler (çok az içerir)
- Alkol (denatured alcohol) içeren ürünler
- Yapay renklendiriciler
- Parfüm (hassas ciltler için)

**Önerilen Konsantrasyon:**
- Yüz için: %99-100 saf aloe vera jeli
- Vücut için: %90-99 aloe vera jeli
- Saç için: %50-70 aloe vera içeren şampuan

### Aloe Vera Kullanım Yöntemleri

**1. Yüz Maskesi (Nemlendirme ve Sakinleştirme)**

Malzemeler:
- 2 yemek kaşığı aloe vera jeli
- 1 tatlı kaşığı bal
- 1 tatlı kaşığı yoğurt

Uygulama:
1. Karıştırın
2. Temiz yüze sürün
3. 15-20 dakika bekleyin
4. Ilık suyla durulayın
5. Haftada 2-3 kez

**2. Spot Tedavi (Akne ve Yaralar)**

1. Temiz cilde aloe vera jeli uygulayın
2. Gece boyu bırakın
3. Sabah durulayın
4. Her gece tekrarlayın

**3. Göz Altı Torbaları ve Şişlik**

1. Soğutulmuş aloe vera jeli
2. Göz altına nazikçe sürün
3. 10-15 dakika bekleyin
4. Durulayın
5. Sabahları uygulayın

**4. Güneş Yanığı Tedavisi**

1. Soğuk duş alın
2. Soğutulmuş aloe vera jelini cömertçe sürün
3. Emilmesini bekleyin
4. Günde 4-6 kez tekrarlayın
5. Giysi sürtünmesini önleyin

**5. Saç Maskesi (Kepek ve Kaşıntı)**

Malzemeler:
- 3 yemek kaşığı aloe vera jeli
- 1 yemek kaşığı hindistan cevizi yağı
- 5 damla çay ağacı yağı

Uygulama:
1. Saç derisine masaj yaparak uygulayın
2. 30 dakika bekleyin
3. Şampuanlayın
4. Haftada 1-2 kez

**6. Tıraş Jeli Alternatifi**

Aloe vera jeli doğrudan tıraş jeli olarak kullanılabilir:
- Nemlendirici
- Kayganlaştırıcı
- Tıraş sonrası tahriş önleyici

**7. Makeupremover (Makyaj Temizleyici)**

Aloe vera + jojoba yağı karışımı:
- 2 kısım aloe vera
- 1 kısım jojoba yağı
- Pamukla silin

## Aloe Vera ile Etkili Kombinasyonlar

### Aloe Vera + Vitamin C

**Faydalar:**
- Maksimum aydınlatma
- Güçlü antioksidan koruma
- Kolajen artışı

**Tarif:**
- 2 yemek kaşığı aloe vera jeli
- 1/2 tatlı kaşığı C vitamini tozu (L-askorbik asit)
- Karıştırıp hemen sürün (C vitamini oksitlenir)

### Aloe Vera + Hyaluronik Asit

**Faydalar:**
- Ultra nemlendirme
- Kırışıklık doldurma
- Cilt dolgunluğu

**Kullanım:**
1. Hyaluronik asit serumu
2. Aloe vera jeli (üzerine)
3. Nemlendirici (kilitleme)

### Aloe Vera + Çay Ağacı Yağı

**Faydalar:**
- Güçlü antibakteriyel
- Akne tedavisi
- İltihap azaltma

**Tarif:**
- 2 yemek kaşığı aloe vera
- 3-4 damla çay ağacı yağı
- Spot tedavi olarak kullanın

### Aloe Vera + Bal

**Faydalar:**
- Yara iyileştirme
- Antibakteriyel
- Nemlendirme

**Tarif:**
- 1 kısım aloe vera
- 1 kısım ham bal
- Maske olarak 20 dakika

## Yan Etkiler ve Dikkat Edilmesi Gerekenler

### Aloe Vera Latex (Sarı Sıvı)

**Uyarı:** Aloe yapraklarının kenarında sarı bir sıvı (latex) bulunur. Bu kısım:
- Tahriş edicidir
- Alerjiye neden olabilir
- Yenilmemelidir (toksiktir)
- Mutlaka uzaklaştırılmalıdır

**Nasıl Uzaklaştırılır:**
Yaprağı kestikten sonra 10-15 dakika dik tutun, sarı sıvının akmasını bekleyin.

### Alerjik Reaksiyonlar

Nadir ancak olabilir:
- Kızarıklık
- Kaşıntı
- Döküntü
- Yanma hissi

**Patch Test:**
İlk kullanımda dirsek içine uygulayın, 24 saat bekleyin.

### Hamilelik ve Emzirme

**Topikal Kullanım:** Güvenlidir
**Ağızdan Alım:** Önerilmez (latex laksatif etkilidir)

### İlaç Etkileşimleri

**Diyabet İlaçları:** Kan şekerini düşürebilir
**Kan Sulandırıcılar:** Etkileşim olabilir
**Topikal kullanım güvenlidir, ağızdan alımda doktora danışın**

## Aloe Vera Bitkisi Nasıl Yetiştirilir?

Evde aloe vera yetiştirmek kolaydır:

**Bakım:**
- Güneşli yer (dolaylı güneş)
- Az sulama (haftada 1 kez)
- İyi drenajlı toprak
- Oda sıcaklığı (15-25°C)

**Hasat:**
- En az 3 yaşında bitki
- Dış yaprakları kesin
- Yılda 3-4 yaprak alabilirsiniz

**Avantajlar:**
- Her zaman taze jel
- Koruyucu kimyasal yok
- Maliyet tasarrufu

## Sonuç

Aloe vera, binlerce yıldır kullanılan ve modern bilim tarafından da onaylanan, doğanın en güçlü iyileştirici bitkisidir. 75'ten fazla aktif bileşen ile cilt sağlığına çok yönlü bir yaklaşım sunar.

**Aloe Veranın Kanıtlanmış Faydaları:**
- Yara ve yanık iyileştirme
- Güneş yanığı tedavisi
- Anti-inflamatuar etki
- Yoğun nemlendirme
- Akne tedavisi
- Yaşlanma karşıtı etkiler
- Leke açma
- Hassas cilt sakinleştirme

**Kullanım Kolaylığı:**
- Doğrudan yapraktan elde edilebilir
- Evde yetiştirilebilir
- Ucuz ve erişilebilir
- Tüm cilt tiplerine uygun
- Yan etki riski minimum

Aloe verayı cilt bakım rutininize ekleyin ve doğanın mucizevi iyileştirme gücünden yararlanın. Cildiniz size teşekkür edecek!`},"anti-aging-strategies":{title:"Yaşlanma Karşıtı Stratejiler: Genç Cildin Bilimsel Sırları",excerpt:"Cildinizi genç ve sağlıklı tutmak için dermatologlarca onaylanmış, bilimsel olarak kanıtlanmış stratejiler ve anti-aging yaklaşımlar...",content:`Yaşlanma, kaçınılmaz doğal bir süreç olsa da, cildinizin ne kadar hızlı yaşlanacağını büyük ölçüde kontrol edebilirsiniz. Bilimsel araştırmalar, cilt yaşlanmasının %90'ının dış faktörlerden (güneş, çevre, yaşam tarzı) kaynaklandığını ve bu faktörlerin kontrol edilebileceğini göstermektedir.

## Cilt Yaşlanması Nedir ve Nasıl Gerçekleşir?

Cilt yaşlanması iki ana kategoriye ayrılır:

### 1. İçsel (Kronolojik) Yaşlanma

**Tanım:** Genetik ve doğal süreçlerle oluşan yaşlanma

**Başlangıç:** 20'li yaşların ortasından itibaren
**Hız:** Yılda yaklaşık %1 kolajen kaybı

**Belirtiler:**
- İnce çizgiler (25-30 yaş)
- Cilt incelemesi
- Elastikiyet kaybı
- Yavaş hücre yenilenmesi
- Doğal yağ üretiminde azalma
- Kemik kaybı (yüz yapısı değişimi)

**Kontrol:** Kısıtlı - genetik faktörler etkilidir

### 2. Dışsal (Photoaging) Yaşlanma

**Tanım:** Dış faktörlerin neden olduğu erken yaşlanma

**Ana Neden:** UV ışınları (%80-90)
**Diğer Nedenler:** Kirlilik, sigara, stres, kötü beslenme

**Belirtiler:**
- Derin kırışıklıklar
- Sarkma ve gevşeme
- Hiperpigmentasyon (lekeler)
- Kaba ve kalın cilt dokusu
- Telenjektazi (kılcal damar genişlemesi)
- Elastozis (elastik doku kaybı)

**Kontrol:** %90 önlenebilir!

## Yaşlanma Karşıtı Stratejilerin Bilimsel Temeli

### Kolajen ve Elastin Kaybı

**Yaşla Birlikte:**
- 20'li yaşlar: Yılda %1 kolajen kaybı
- 30'lu yaşlar: %25 kolajen azalması
- 40'lı yaşlar: %45 kolajen azalması
- 50'li yaşlar: %60+ kolajen azalması

**Sonuç:**
- Kırışıklıklar
- Sarkma
- İnce çizgiler
- Elastikiyet kaybı

### Hücre Yenilenmesi Yavaşlaması

**Genç Cilt:** 28-30 günde bir yenilenir
**40+ Yaş:** 40-60 günde bir yenilenir

**Sonuç:**
- Mat, cansız görünüm
- Leke birikimi
- Pürüzlü doku

### Serbest Radikal Hasarı

**Serbest Radikaller:**
UV, kirlilik, stres ve sigara tarafından üretilen zararlı moleküllerdir.

**Hasar:**
- DNA hasarı
- Kolajen parçalanması
- Hücre zarı bozulması
- Erken yaşlanma

## Anti-Aging Stratejileri: 10 Altın Kural

### 1. Güneş Koruyucu (SPF): En Önemli Kural

**Bilimsel Gerçek:** SPF kullanımı, cilt yaşlanmasını %24 yavaşlatır ve en etkili anti-aging ürünüdür.

**Neden Bu Kadar Önemli?**
- UV ışınları kolajen ve elastini yok eder
- DNA hasarına neden olur
- Hiperpigmentasyona yol açar
- Serbest radikal üretimini artırır

**Doğru SPF Kullanımı:**

**Özellikler:**
- **SPF 30-50+:** Her gün, bulutlu günlerde bile
- **Geniş Spektrum:** UVA ve UVB koruması
- **Miktar:** 1 çay kaşığı (1.25ml) yüz için
- **Yenileme:** Her 2 saatte bir
- **Uygulama Zamanı:** Güneşe çıkmadan 15-30 dakika önce

**Unutulmayan Bölgeler:**
- Kulak
- Boyun
- Göğüs
- El sırtları
- Dudaklar (SPF'li dudak koruyucu)

**Araştırma:** Annals of Internal Medicine 2013 çalışmasında, her gün SPF kullananların yaşlanma belirtilerinin %24 daha yavaş ilerlediği gösterilmiştir.

### 2. Retinol/Retinoidler: Anti-Aging'in Altın Standardı

**Retinol Nedir?**
Vitamin A türevi, FDA onaylı anti-aging bileşen.

**Kanıtlanmış Faydaları:**
- Kolajen üretimini %80 artırır
- Hücre yenilenmesini hızlandırır
- Kırışıklıkları %44 azaltır
- İnce çizgileri giderir
- Gözenekleri küçültür
- Hiperpigmentasyonu açar
- Cilt dokusunu pürüzsüzleştirir

**Retinoid Türleri (Güçlüden Zayıfa):**

1. **Tretinoin (Retin-A):** Reçete gerektirir, en güçlü
2. **Adapalene:** Reçetesiz, güçlü
3. **Retinaldehit:** Retinolden güçlü
4. **Retinol:** OTC, etkili
5. **Retinol Ester:** En nazik, en zayıf

**Kullanım Rehberi:**

**Başlangıç:**
- %0.25-0.5 retinol ile başlayın
- Haftada 2 gece kullanın
- 2 hafta sonra haftada 3 geceye çıkın
- 1 ay sonra her gece kullanabilirsiniz

**Uygulama:**
1. Temiz, kuru cilde (30 dakika sonra)
2. Bezelye büyüklüğünde miktar
3. Göz çevresinden kaçının
4. Üzerine nemlendirici
5. Ertesi gün SPF MUTLAKA!

**Yan Etkiler (İlk 4-6 Hafta):**
- Kuruma ve pullanma
- Kızarıklık
- Hassasiyet
- "Purging" (geçici akne artışı)

**Önemli:** Hamilelik ve emzirmede kullanılmaz!

**Alternatif:** Bakuchiol (doğal, nazik retinol alternatifi)

### 3. Antioksidanlar: Serbest Radikal Savaşçıları

Antioksidanlar, serbest radikalleri nötralize ederek cildi korur ve onarır.

**En Etkili Antioksidanlar:**

**a) Vitamin C (L-Askorbik Asit):**
- Kolajen üretimi artırır
- Hiperpigmentasyonu azaltır
- SPF korumasını 4 kat artırır
- Aydınlatır ve parlaklık verir

**Kullanım:**
- %10-20 konsantrasyon
- Sabahları, SPF altında
- E vitamini ve ferulik asit ile kombine edin

**b) Vitamin E (Tokoferol):**
- Cilt bariyerini güçlendirir
- Nemlendirici
- C vitamini ile sinerjik çalışır

**c) Niasinamid (Vitamin B3):**
- Cilt bariyerini onarır
- Gözenekleri küçültür
- Hiperpigmentasyonu azaltır
- Sebum kontrolü sağlar
- İltihabı azaltır

**Kullanım:** %5-10, sabah ve akşam

**d) Resveratrol:**
- Kırmızı üzümde bulunur
- Güçlü antioksidan
- Yaşlanma karşıtı enzim aktivasyonu

**e) Ferulik Asit:**
- C ve E vitaminini stabilize eder
- UV korumasını artırır

**f) Coenzyme Q10 (Ubiquinone):**
- Hücre enerji üretimi
- Kırışıklık azaltma
- Sıkılaştırma

**g) Yeşil Çay (EGCG):**
- Anti-inflamatuar
- UV koruma
- DNA onarımı

### 4. Peptidler: Kolajen Uyarıcıları

**Peptidler Nedir?**
Amino asit zincirleri, hücrelere "kolajen üret" sinyali verir.

**Etkili Peptid Türleri:**

**a) Palmitoyl Pentapeptide (Matrixyl):**
- Kolajen üretimini %117 artırır
- Kırışıklıkları azaltır

**b) Copper Peptides:**
- Yara iyileştirme
- Kolajen ve elastin sentezi
- Anti-inflamatuar

**c) Argireline (Botox Alternatifi):**
- Kas kasılmalarını azaltır
- İfade çizgilerini hafifletir

**d) Palmitoyl Tripeptide:**
- Cilt sıkılaştırma
- Elastikiyet artırma

**Kullanım:**
- Serum formunda
- Sabah veya akşam
- Nemlendirici altında

### 5. Alpha Hidroksi Asitler (AHA): Eksfoliasyon ve Yenilenme

**AHA'lar:**
- Glikolik asit
- Laktik asit
- Mandelic asit

**Faydaları:**
- Ölü hücreleri uzaklaştırır
- Hücre yenilenmesini hızlandırır
- Hiperpigmentasyonu azaltır
- İnce çizgileri yumuşatır
- Cilt dokusunu pürüzsüzleştirir
- Kolajen üretimini uyarır

**Kullanım:**
- %5-10 günlük kullanım
- %20-30 haftalık tedavi
- Akşamları kullanın
- SPF MUTLAKA!

### 6. Hyaluronik Asit: Nem ve Dolgunluk

**Özellikler:**
- 1000 katı kadar su tutar
- Doğal olarak ciltte bulunur
- Yaşla birlikte azalır

**Faydaları:**
- Yoğun nemlendirme
- Kırışıklıkları doldurur
- Cilde dolgunluk kazandırır
- Pürüzsüz doku

**Kullanım:**
- Nemli cilde uygulayın
- Farklı moleküler ağırlıklar kullanın
- Sabah ve akşam

### 7. Beslenme: İçeriden Anti-Aging

**Anti-Aging Besinler:**

**a) Antioksidan Zengin Gıdalar:**
- **Yaban mersini:** Yüksek antioksidan
- **Koyu yeşil yapraklılar:** Vitamin A, C, K
- **Yeşil çay:** EGCG polifenolleri
- **Kakao:** Flavonoidler
- **Domates:** Likopen (UV koruma)

**b) Omega-3 Yağ Asitleri:**
- **Somon, sardalya, uskumru:** EPA ve DHA
- **Ceviz, keten tohumu:** ALA
- **İltihap azaltma**
- **Cilt bariyeri güçlendirme**

**c) Kolajen Destekleyici:**
- **C Vitamini:** Turunçgiller, çilek, brokoli
- **Prolin:** Yumurta, et, peynir
- **Glisin:** Kemik suyu, jelatin
- **Bakır:** Kabuklu deniz ürünleri, kuruyemiş

**d) Hidrasyon:**
- **2-3 litre su/gün**
- **Sebze ve meyve (su içeriği yüksek)**

**Kaçınılması Gerekenler:**
- **Şeker:** Glukozyon (kolajen hasarı)
- **İşlenmiş gıdalar:** İltihabı artırır
- **Aşırı alkol:** Dehidratasyon
- **Trans yağlar:** Serbest radikal üretimi

### 8. Yaşam Tarzı Optimizasyonu

**a) Uyku: "Güzellik Uykusu" Gerçektir**

**Neden Önemli?**
- Gece boyunca hücre onarımı
- Büyüme hormonu salgılanması
- Kolajen üretimi pik yapar

**Araştırma:** Clinical and Experimental Dermatology 2015'te yayınlanan çalışmada, yetersiz uykunun cilt yaşlanmasını %3 hızlandırdığı gösterildi.

**Öneriler:**
- 7-8 saat kaliteli uyku
- İpek yastık kılıfı (kırışıklık önleme)
- Sırtüstü uyuma (yüz ezilmesini önler)

**b) Stres Yönetimi:**

**Stres ve Cilt:**
- Kortizol yükselmesi → kolajen parçalanması
- İltihap artışı
- Hücre yenilenmesi yavaşlaması

**Stres Azaltma:**
- Meditasyon (günde 10-15 dakika)
- Yoga
- Derin nefes egzersizleri
- Hobi ve sosyal aktiviteler

**c) Egzersiz:**

**Faydaları:**
- Kan dolaşımını artırır (besin ve oksijen taşınır)
- Toksin atılımı (terleme)
- Kolajen üretimi uyarılır
- Stres azalır

**Öneri:** Haftada 150 dakika orta tempolu egzersiz

**d) Sigara ve Alkol:**

**Sigara:**
- Kolajen ve elastini %40 azaltır
- Kan akışını kısıtlar
- Serbest radikal üretir
- Kırışıklık riskini 4 kat artırır

**Alkol:**
- Dehidratasyon
- Vitamin tüketimi
- İltihap artışı
- Uyku kalitesi bozulması

**Öneri:** Sigarayı bırakın, alkolü sınırlayın (haftada 1-2 kadeh max)

### 9. Profesyonel Tedaviler

**a) Kimyasal Peeling:**
- Hiperpigmentasyon tedavisi
- Doku düzeltme
- Yenilenme

**b) Microneedling:**
- Kolajen indüksiyonu
- İz ve göçük tedavisi
- Ürün penetrasyonu artışı

**c) Lazer Tedavileri:**
- Ablative: Derin yenilenme
- Non-ablative: Kolajen stimülasyonu
- Fraksiyonel: Güvenli, etkili

**d) Botox:**
- İfade çizgileri için
- Kas kasılmalarını azaltır
- 3-6 ayda bir

**e) Dolgu Maddeleri (Filler):**
- Hacim kaybı tedavisi
- Derin çizgi doldurma
- 6-18 ay etkili

**f) Radyofrekans (RF):**
- Cilt sıkılaştırma
- Kolajen üretimi
- Non-invaziv

### 10. Tutarlılık ve Sabır

**Anti-Aging'de Altın Kural:**
Tutarlılık ve sabır, mucize ürünlerden daha önemlidir!

**Sonuç Beklentileri:**
- **4 hafta:** İlk iyileşmeler (parlaklık, doku)
- **8-12 hafta:** Belirgin değişimler (ince çizgiler)
- **6-12 ay:** Dramatik sonuçlar (kırışıklıklar, lekeler)

**Rutin Tutarlılığı:**
- Sabah ve akşam rutinini atlamamak
- Ürünleri doğru sırayla kullanmak
- SPF'yi hiç atlamamak

## Yaş Gruplarına Göre Anti-Aging Stratejileri

### 20'li Yaşlar: Önleme Dönemi

**Odak:** Koruma ve alışkanlık oluşturma

**Rutin:**
1. Temizleyici
2. Vitamin C serumu
3. Nemlendirici
4. **SPF 30-50 (EN ÖNEMLİ!)**

**Ekstralar:**
- Haftada 1 kez AHA eksfoliasyon
- Sağlıklı beslenme
- Yeterli uyku

### 30'lu Yaşlar: Erken Müdahale

**Odak:** İlk belirtilere müdahale, kolajen kaybını yavaşlatma

**Rutin:**
1. Temizleyici
2. Vitamin C serumu
3. Hyaluronik asit
4. Göz kremi
5. Nemlendirici
6. SPF 50

**Akşam:**
- Retinol (haftada 2-3 gece)

**Ekstralar:**
- Antio ksidan desteği
- Peptid serumları
- Profesyonel tedaviler (yılda 1-2)

### 40'lı Yaşlar: Aktif Tedavi

**Odak:** Mevcut hasarı giderme, ilerlemeyi durdurma

**Sabah:**
1. Temizleyici
2. Antioksidan serum (C + E + Ferulik)
3. Hyaluronik asit
4. Peptid serumu
5. Göz kremi
6. Nemlendirici
7. SPF 50

**Akşam:**
1. Temizleyici
2. Tonik
3. Retinol veya Tretinoin
4. Peptid serumu
5. Göz kremi
6. Zengin gece kremi
7. Yüz yağı

**Ekstralar:**
- Düzenli profesyonel tedaviler
- Kolajen takviyesi
- Yoğun nemlendirme

### 50+ Yaşlar: Yoğun Bakım

**Odak:** Hormon değişikliklerine uyum, yoğun onarım

**Rutin:** 40'lı yaşlar + 

**Ekstra Stratejiler:**
- Yoğun nemlendirici ve yağlar
- Hormon destekli kremler (reçete ile)
- Düzenli profesyonel tedaviler (her 3 ayda)
- Oral kolajen ve antioksidan takviyeleri
- Sıkılaştırıcı tedaviler (RF, Ultherapy)

## Sonuç

Yaşlanmayı durdurmak mümkün değildir, ancak yavaşlatmak, geciktirmek ve zarifçe yaşlanmak kesinlikle mümkündür. Bilimsel olarak kanıtlanmış stratejileri uygulayarak cildinizin biyolojik yaşını kronolojik yaşınızdan yıllar geri tutabilirsiniz.

**Anahtarlar:**
1. **SPF:** Tartışmasız en önemli adım
2. **Retinol:** Bilimsel olarak kanıtlanmış anti-aging bileşen
3. **Antioksidanlar:** Serbest radikallerle savaşın
4. **Nemlendirme:** Cilt bariyerini koruyun
5. **Sağlıklı Yaşam:** İçeriden destekleyin
6. **Tutarlılık:** Düzenli rutin şart
7. **Sabır:** Sonuçlar zaman alır

Cildinize gösterdiğiniz özen ve bilimsel yaklaşım, yıllar sonra size en güzel hediyeyi verecektir: Genç, sağlıklı ve ışıldayan bir cilt. Başlamak için asla geç değildir - bugün attığınız adımlar, yarının cildinizi şekillendirir!`},"toner-benefits":{title:"Toniğin Faydaları",excerpt:"Tonik kullanmanın cilt bakımındaki önemi.",content:"Tonik pH dengesini sağlar, gözenekleri sıkılaştırır, kalan kirleri temizler ve sonraki ürünlerin emilimini artırır. Sabah-akşam kullanılmalıdır."},"winter-skincare-tips":{title:"Kış Aylarında Cilt Bakımı",excerpt:"Kış aylarında cildinizi nasıl korursunuz?",content:"Kışın cilt kuruluğunu önlemek için zengin nemlendiriciler, yüz yağları kullanın, sıcak duştan kaçının ve hava nemlendiricisi kullanın. Dudak bakımını unutmayın."},"rose-water-benefits":{title:"Gül Suyunun Faydaları",excerpt:"Gül suyunun cildinize sağladığı faydaları keşfedin.",content:"Gül suyu cildi nemlendirin, pH dengesini sağlar, gözenekleri sıkılaştırır ve anti-inflamatuar etki gösterir. Tonik veya sprey olarak kullanılır."},"acne-prone-skin-care":{title:"Akne Eğilimli Cilt Bakımı",excerpt:"Akne eğilimli ciltler için özel bakım önerileri.",content:"Akne için salisilik asit, niasinamid kullanın, yağsız ürünler tercih edin, düzenli temizlik yapın ve gözenekleri tıkayan ürünlerden kaçının."},"double-cleansing-method":{title:"Çift Temizleme Yöntemi",excerpt:"Çift temizleme yöntemi nedir ve nasıl uygulanır?",content:"Çift temizleme: önce yağ bazlı temizleyiciyle makyaj çözün, sonra su bazlı temizleyiciyle kirleri alın. Derin temizlik sağlar, gözenekleri açar."},"retinol-beginners-guide":{title:"Retinol Başlangıç Rehberi",excerpt:"Retinol kullanmaya yeni başlayanlar için kapsamlı rehber.",content:"Retinol kırışıklıkları azaltır, hücre yenilenmesini hızlandırır. Düşük konsantrasyonla başlayın, geceleri kullanın, SPF sürün. Sabırlı olun, sonuçlar 3 ayda görünür."}},QM={"summer-sun-protection":{title:"Yaz Aylarında Güneş Koruması: Cildinizi Nasıl Korursunuz?",excerpt:"Yaz aylarında cildinizi güneşin zararlı etkilerinden korumak için bilmeniz gereken her şey. SPF seçiminden uygulama tekniklerine kadar kapsamlı rehber...",content:`Yaz ayları geldiğinde güneşin tadını çıkarmak isterken, cildinizi zararlı UV ışınlarından korumak hayati önem taşır. Güneş hasarı, sadece yanıklara değil, erken yaşlanma, lekeler ve hatta cilt kanserine yol açabilir.

## Güneşin Cilde Etkileri

### UV Işınları Nedir?

**UVA Işınları (320-400 nm):**
- UV ışınlarının %95'ini oluşturur
- Cildin derin katmanlarına (dermis) nüfuz eder
- Erken yaşlanmanın ana nedenidir
- Kırışıklık, elastisite kaybı ve koyu lekelere neden olur
- Cam ve bulutlardan geçebilir
- Yıl boyunca sabit kalır

**UVB Işınları (280-320 nm):**
- UV ışınlarının %5'ini oluşturur
- Cildin üst tabakasını (epidermis) etkiler
- Güneş yanığına neden olur
- Cilt kanserinin ana tetikleyicisidir
- Yaz aylarında ve öğle saatlerinde en güçlüdür

### Güneş Hasarının Belirtileri

**Akut Etkiler:**
- Güneş yanığı (kızarıklık, şişlik, ağrı)
- Deride kabarcıklar
- Soyulma
- Dehidratasyon

**Kronik Etkiler:**
- Fotoyaşlanma
- Kırışıklıklar ve ince çizgiler
- Elastisite kaybı
- Koyu lekeler
- Aktinik keratoz
- Melanom ve diğer cilt kanserleri

## SPF Nedir ve Nasıl Seçilir?

### SPF Değerleri

- **SPF 15**: UVB ışınlarının %93'ünü bloke eder
- **SPF 30**: UVB ışınlarının %97'sini bloke eder
- **SPF 50**: UVB ışınlarının %98'ini bloke eder

SPF 30-50 arası idealdir. Geniş spektrum (broad spectrum) etiketli ürünler hem UVA hem UVB'ye karşı korur.

### Fiziksel vs Kimyasal Güneş Kremi

**Fiziksel (Mineral):**
- Aktif maddeler: Çinko oksit, titanyum dioksit
- UV ışınlarını yansıtır
- Anında koruma
- Hassas ciltler için ideal

**Kimyasal:**
- UV ışınlarını emer ve ısıya dönüştürür
- Daha hafif doku
- 20 dakika önceden sürülmeli

### Cilt Tipine Göre SPF Seçimi

**Yağlı/Akne Eğilimli:** Oil-free, non-comedogenic, matt finish
**Kuru Cilt:** Kremsi formül, hyaluronik asit, ceramid
**Hassas Cilt:** Fiziksel filtre, parfüm ve alkol içermeyen
**Karma Cilt:** Hafif jel-krem formül

## Doğru SPF Kullanımı

### Miktar
- **Yüz ve boyun**: 1/4 - 1/2 çay kaşığı
- **Vücut**: Shot bardağı kadar (30 ml)

### Uygulama
1. Temiz cilde uygulayın
2. Beş nokta tekniği kullanın
3. Yukarı doğru masaj yapın
4. Boyun ve göğüs dekoltesini unutmayın
5. 20-30 dakika kurumayı bekleyin

### Yenileme
**Her 2 saatte bir yenileyin!**
- Yüzme, terlemeden sonra hemen
- Bulutlu günlerde bile
- İçeride camın yanında bile

## Yaz Koruma İpuçları

1. **Güneş saatleri**: 10:00-16:00 arası gölgede kalın
2. **Koruyucu kıyafet**: UPF değerli, koyu renkli
3. **Şapka**: Geniş kenarlı (7-8 cm)
4. **Güneş gözlüğü**: UV400 etiketli

## After-Sun Bakımı

- Aloevera jeli
- Hyaluronik asit serumu
- Niasinamid
- Bol su tüketimi
- Soğuk duş

## Sonuç

Her gün SPF kullanın, her 2 saatte yenileyin, güneşin en sert olduğu saatlerde gölgede kalın. Cildinizi koruyun, uzun yıllar genç görünün!
`}},XM={"retinol-beginners-guide":{title:"Retinol Kullanımına Başlangıç: Yeni Başlayanlar İçin Kapsamlı Rehber",excerpt:"Retinol, cilt bakımında altın standart olarak kabul edilen güçlü bir yaşlanma karşıtı bileşendir. İşte yeni başlayanlar için retinol kullanım rehberi...",content:`Retinol, modern cilt bakımının en güçlü ve bilimsel olarak kanıtlanmış bileşenlerinden biridir. Dermatologlarn "mucize bileşen" olarak adlandırdığı retinol, yaşlanma karşıtı etkilerinden akne tedavisine kadar geniş bir yelpazede faydalar sunar. Ancak güçlü bir aktif madde olduğu için doğru kullanım son derece önemlidir. Bu rehber, retinol kullanımına yeni başlayanlar için kapsamlı bir yol haritası sunmaktadır.

## Retinol Nedir ve Nasıl Çalışır?

Retinol, A vitamininin (retinoid ailesinin) aktif bir türevidir. Cilt bakımında kullanılan retinoidler arasında retinoic asit (tretinoin - reçeteli), retinaldehit, retinol ve retinyl palmitate gibi farklı formlar bulunur. Bunlar arasında retinol, reçetesiz satılan ve en yaygın kullanılan formdur.

### Retinolün Ciltteki Mekanizması

Cilde uygulandığında retinol, bir dizi enzimatik reaksiyon geçirerek sonunda retinoic aside (tretinoin) dönüşür. Bu aktif form, cilt hücrelerinin genetik materyaliyle etkileşime girerek birçok olumlu değişikliği tetikler:

**1. Hücre Yenilenmesini Hızlandırma:**
Retinol, epidermal (dış deri tabakası) hücre döngüsünü hızlandırır. Normal koşullarda cilt hücreleri 28-40 günde bir yenilenir. Retinol bu süreci 14-21 güne kadar kısaltır. Böylece eski, mat ve ölü hücreler hızla dökülür ve yerlerine taze, parlak hücreler gelir.

**2. Kolajen ve Elastin Üretimini Artırma:**
Retinol, dermal (derin deri tabakası) fibroblast hücrelerini uyararak kolajen ve elastin sentezini artırır. Bu proteinler, cildin sıkılığını, elastikiyetini ve gençlik görünümünü sağlar. Yaşla birlikte azalan kolajen üretimi, retinol kullanımıyla yeniden canlandırılır.

**3. Kolajen Yıkımını Engelleme:**
Sadece kolajen üretimini artırmakla kalmaz, aynı zamanda MMP (matrix metalloproteinase) adı verilen kolajen yıkıcı enzimleri inhibe eder. Bu çifte etki sayesinde ciltteki kolajen miktarı önemli ölçüde artar.

**4. Melanin Üretimini Düzenleme:**
Retinol, melanositlerin (pigment üreten hücreler) aşırı çalışmasını düzenleyerek hiperpigmentasyonu azaltır ve cilt tonunu eşitler.

**5. Sebum Üretimini Kontrol Etme:**
Yağ bezlerinin (sebase glands) aktivitesini düzenleyerek aşırı yağ üretimini azaltır. Bu özellik onu akne tedavisinde çok etkili kılar.

## Retinolün Cilde Sağladığı Faydalar

### 1. Yaşlanma Karşıtı Etkiler (Anti-Aging)

Retinol, yaşlanma karşıtı cilt bakımının altın standardıdır. Bilimsel çalışmalar, düzenli retinol kullanımının:

- **Kırışıklıkları azalttığını**: İnce çizgiler ve derin kırışıklıklar belirgin şekilde azalır. 12 haftalık düzenli kullanımda göz çevresindeki kırışıklıklarda %44'e varan azalma görülmüştür.

- **Cilt sıkılığını artırdığını**: Kolajen üretimi sayesinde cildin elastikiyeti artar ve sarkma azalır.

- **Cilt dokusunu iyileştirdiğini**: Pürüzsüz, yumuşak ve homojen bir cilt dokusu sağlar.

- **Gözenek görünümünü azalttığını**: Gözenekleri temizler, küçültür ve daha az belirgin hale getirir.

### 2. Akne ve Sivilce Tedavisi

Retinol, hem aktif akne hem de akne izleri için son derece etkilidir:

- **Gözenekleri açar**: Ölü hücreleri uzaklaştırarak gözenek tıkanmasını önler
- **Sebum üretimini dengeler**: Aşırı yağlanmayı kontrol eder
- **İltihaplanmayı azaltır**: Anti-inflamatuar özellikleri sayesinde kızarıklık ve şişliği azaltır
- **Akne izlerini soldurur**: Hiperpigmentasyonu azaltarak akne lekelerini giderir

Çalışmalar, %0.5 retinol kullanımının 12 haftada akne lezyonlarını %80'e kadar azalttığını göstermiştir.

### 3. Cilt Tonu Eşitleme ve Leke Giderme

Retinol, melanin birikimini düzenleyerek:
- Güneş lekelerini azaltır
- Yaş lekelerini soldurur
- Melazma (hamilelik lekesi) görünümünü iyileştirir
- Akne izlerini ve post-inflamatuar hiperpigmentasyonu giderir
- Genel cilt tonunu aydınlatır ve eşitler

### 4. Cilt Dokusunu İyileştirme

Hücre yenilenmesini hızlandırarak:
- Pürüzlülüğü azaltır
- Cilt yüzeyini pürüzsüzleştirir
- Mat görünümü parlaklığa dönüştürür
- Kuru ve pullu cilt dokusunu düzeltir

### 5. Güneş Hasarını Onarma

UV maruziyetinin neden olduğu foto-yaşlanma belirtilerini tersine çevirir:
- Güneş kaynaklı leke ve kırışıklıkları azaltır
- DNA hasarının onarımını destekler
- Cildin kendini yenileme kapasitesini artırır

## Retinol Türleri ve Konsantrasyonları

Retinol ürünleri farklı güçlerde ve formlarda gelir. Yeni başlayanlar için bu farklılıkları anlamak çok önemlidir.

### Retinoid Ailesinin Gücü (Zayıftan Güçlüye)

1. **Retinyl Palmitate**: En yumuşak form, en az tahriş edici
2. **Retinol**: Reçetesiz en yaygın ve etkili form
3. **Retinaldehit (Retinal)**: Retinolden daha güçlü ama retinoic asitten zayıf
4. **Retinoic Asit (Tretinoin)**: Reçeteli, en güçlü form

### Retinol Konsantrasyonları

Retinol ürünleri genellikle %0.1 ile %1 arasında konsantrasyonlarda bulunur:

- **%0.1 - %0.3**: Yeni başlayanlar, hassas cilt tipleri
- **%0.5**: Orta düzey, retinole alışmış ciltler
- **%0.7 - %1**: İleri düzey, retinol deneyimli ciltler

### Encapsulated (Kapsüllenmiş) Retinol

Bazı ürünlerde retinol mikroskobik kapsüller içinde sunulur. Bu teknoloji:
- Tahriş riskini azaltır
- Retinolün cilde daha yavaş ve kontrollü salımını sağlar
- Stabilitesini artırır
- Daha iyi tolere edilir

## Yeni Başlayanlar İçin Kullanım Rehberi

### ADIM 1: Doğru Ürünü Seçin

**Yeni Başlayanlar İçin:**
- %0.25-%0.3 konsantrasyonla başlayın
- Kapsüllenmiş (encapsulated) formüller tercih edin
- Nemlendirici içeren retinol ürünleri seçin
- Dermatolog onaylı markaları tercih edin

**Hassas Ciltler İçin:**
- %0.1'den başlayın
- "Gentle" veya "Beginner" etiketli ürünler arayın
- Retinyl palmitate formları deneyebilirsiniz

### ADIM 2: Patch Test Yapın

İlk kullanımdan önce mutlaka patch test yapın:
1. Kulağın arkasına veya çene altına küçük bir miktar sürün
2. 24-48 saat bekleyin
3. Aşırı kızarıklık, kaşıntı veya tahriş yoksa kullanıma başlayın

### ADIM 3: Yavaş Başlayın (The Retinization Period)

Cildinizin retinole alışması için kademeli bir programa uyun:

**1-2. Hafta:** Haftada 1-2 gece kullanın (örn: Pazartesi ve Perşembe)
**3-4. Hafta:** Haftada 3 gece kullanın (örn: Pazartesi, Çarşamba, Cuma)
**5-6. Hafta:** Gün aşırı kullanın
**7-8. Hafta ve Sonrası:** Her gece kullanın (cildiniz tolere ediyorsa)

Bu sürece "retinization" denir ve genellikle 4-12 hafta sürer.

### ADIM 4: Doğru Uygulama Tekniği

**Ne Zaman:** Sadece geceleri kullanın (retinol ışığa duyarlıdır ve gün içi kullanımda etkisizleşir)

**Nasıl Uygulanır:**

1. **Temizleme**: Yüzünüzü nazikçe temizleyin ve iyice kurulayın
2. **Bekleme (Opsiyonel)**: Hassas ciltler için yüz kuruduktan 20 dakika sonra uygulayın
3. **Miktar**: Bezelye büyüklüğünde bir miktar yeterlidir (fazlası etki artırmaz, tahriş riskini artırır)
4. **Uygulama**: Alın, yanaklar ve çene için 5 nokta koyun, sonra yukarı doğru dairesel hareketlerle masaj yaparak yayın
5. **Kaçınılması Gereken Bölgeler**: Göz çevresi, dudak kenarları, burun kanatları (çok hassas bölgeler)
6. **Nemlendirici**: 5-10 dakika sonra nemlendirici uygulayın

**Sandwich Tekniği (Hassas Ciltler İçin):**
1. Önce hafif bir nemlendirici sürün
2. Üzerine retinol uygulayın
3. Tekrar nemlendirici sürün

Bu metot tahriş riskini azaltır ama etkinliği biraz düşürür.

### ADIM 5: Destekleyici Ürünler Kullanın

**Nemlendirici**: Ceramid, hyaluronik asit, niasinamid içeren nemlendiriciler ideal
**Güneş Koruyucu**: En az SPF 30, geniş spektrumlu (UVA+UVB) koruma ZORUNLU
**Yatıştırıcı Ürünler**: Panthenol, centella, aloe vera içeren ürünler tahriş semptomlarını hafifletir

## Retinol Kullanırken Dikkat Edilmesi Gerekenler

### Yan Etkiler ve "Retinol Purge"

İlk haftalarda bazı yan etkiler normaldir:

**Beklenebilecek Normal Reaksiyonlar:**
- Hafif kızarıklık
- Pullanma ve soyulma
- Kurulik
- Hafif karıncalanma hissi

**"Retinol Purge" (Geçici Akne Patlaması):**
Retinol kullanmaya başladıktan 2-4 hafta sonra geçici akne artışı yaşanabilir. Bu normaldir! Retinol hücre döngüsünü hızlandırdığı için cilt altındaki sıkışmış sivilceleri yüzeye çıkarır. Bu süreç genellikle 4-6 hafta içinde kendi kendine düzelir.

**Anormal Reaksiyonlar (Doktora Başvurun):**
- Şiddetli yanma ve ağrı
- Şiddetli kızarıklık ve şişlik
- Su toplanması veya kabarcıklar
- Dayanılmaz kaşıntı

### Retinol ile Birlikte Kullanılmaması Gerekenler

**Aynı Anda Kullanmayın:**
- **AHA/BHA (glikolik, salisilik asit)**: Aşırı tahriş riski, farklı gecelerde kullanın
- **Benzoyl Peroxide**: Retinolü inaktive eder
- **Vitamin C (Askorbik Asit)**: pH farkı nedeniyle etkisizleşir, sabah C vitamini akşam retinol kullanın

**Dikkatli Kullanın:**
- **Niasinamid**: Bazı kaynaklara göre kombine kullanılabilir, bazı ciltler tahriş yaşar - test edin
- **Peptides**: Genellikle birlikte kullanılabilir

### Kimler Retinol Kullanmamalı?

- **Hamile ve emziren kadınlar**: A vitamini türevleri fetüs için riskli olabilir
- **Rozasea hastaları**: Doktor gözetimi olmadan kullanmamalı
- **Ekezama veya aktif enfeksiyon olanlar**: İyileşene kadar bekleyin
- **Son dönemde lazer veya peeling yaptıranlar**: En az 2 hafta bekleyin

### Güneş Koruyucu Kullanımı ZORUNLU

Retinol kullanırken cildiniz güneşe karşı çok daha hassas hale gelir. Her sabah mutlaka:
- SPF 30 veya üzeri
- Geniş spektrumlu (UVA ve UVB korumalı)
- Her 2 saatte bir yenilenen güneş koruyucu kullanın

Aksi takdirde güneş lekeleri, yanıklar ve ciltte kalıcı hasar riski artar.

## Sonuçları Ne Zaman Görebilirsiniz?

Retinol sabır gerektiren bir yolculuktur. Beklentilerinizi gerçekçi tutun:

**2-4 Hafta:** Cilt dokusu düzelmeye başlar, parlaklık artar
**8-12 Hafta:** İnce çizgiler azalır, lekeler soluklaşır
**3-6 Ay:** Derin kırışıklıklarda azalma, gözenek küçülmesi, belirgin ton düzelmesi
**6-12 Ay:** Maksimum anti-aging faydalar, kolajen artışı

Tutarlılık anahtardır! Düzenli kullanımda en iyi sonuçları alırsınız.

## İpuçları ve Püf Noktaları

1. **Cildinizi Dinleyin:** Tahriş çok fazlaysa kullanımı azaltın, tamamen bırakmayın

2. **Sabırlı Olun:** İlk 4-6 hafta zorlayıcı olabilir ama sonrasında cildiniz alışır

3. **Düzenli Kullanın:** Ara vermek sonuçları geciktirir, tutarlı olun

4. **Depolama:** Retinol ışık ve havaya duyarlıdır, serin ve karanlık yerde, hava geçirmez ambalajda saklayın

5. **Mevsim Seçimi:** İlk kez kullanmaya sonbahar/kış aylarında başlamak daha kolaydır (daha az güneş maruziyeti)

6. **Upgrade Yapın:** Cildiniz alıştıkça kademeli olarak konsantrasyonu artırabilirsiniz

7. **Gözaltı Ürünleri:** Göz çevresinde retinol kullanmak isterseniz, özel göz çevresi retinol ürünleri kullanın (daha düşük konsantrasyon ve yatıştırıcı içeriklere sahiptir)

## Retinol Seçiminde Dikkat Edilecek Noktalar

**Ambalaj:** Hava geçirmez, opak (ışık geçirmez) pompalar veya tüpler ideal
**Formül:** Stabilize retinol formülleri arayın
**Destekleyici İçerikler:** Hyaluronik asit, ceramides, peptides içeren formüller daha iyi tolere edilir
**Kokusuz:** Parfüm içermeyen ürünler tercih edin
**pH Değeri:** Etkinlik için 5.5-6 arası pH ideal

## Sonuç

Retinol, cilt bakımında bilimsel olarak kanıtlanmış en etkili bileşenlerden biridir. Doğru kullanıldığında yaşlanma belirtilerini tersine çevirebilir, akneyi tedavi edebilir ve cildinize yıllarca genç ve sağlıklı bir görünüm kazandırabilir.

Yeni başlayanlar için en önemli kurallar:
1. Düşük konsantrasyonla başlayın (%0.25-0.3)
2. Yavaş yavaş alıştırın (haftada 1-2 kez başlayın)
3. Sadece geceleri kullanın
4. Güneş koruyucu kullanımını asla ihmal etmeyin
5. Sabırlı olun ve tutarlı kullanın

Retinol yolculuğunuz başlangıçta biraz zorlayıcı olabilir ancak doğru yaklaşımla cildiniz kısa sürede bu güçlü bileşene alışacak ve harika sonuçlar elde edeceksiniz. Unutmayın, cildiniz benzersizdir - herkesin retinol deneyimi farklıdır. Cildinizi dinleyin, gerektiğinde hızınızı ayarlayın ve sonuçların ortaya çıkması için zaman tanıyın.

Retinol kullanımında başarılar dileriz!`}},ZM={"toner-benefits":{title:"Toniğin Faydaları: Cilt Bakım Rutininizin Vazgeçilmez Adımı",excerpt:"Tonik kullanmanın cilt bakımındaki önemi ve cildiniz için sağladığı sayısız fayda.",content:`
## Tonik Nedir ve Neden Önemlidir?

Cilt bakım rutininizde sıklıkla atlanılan ancak son derece önemli bir adım olan tonik, temizleme ile nemlendirme arasındaki köprüdür. Tonik, cildinizin pH dengesini restore eder, gözenekleri sıkılaştırır ve sonraki ürünlerin emilimini optimize eder.

Modern tonikler, geçmişte olduğu gibi sadece alkol bazlı astrenjanlar değildir. Günümüzde tonikler, cildinize aktif bileşenler sağlayan, nemlendiren ve hazırlayan sofistike formüllerdir.

### Tonik Kullanmanın Temel Nedenleri

1. **pH Dengesini Restore Etme**: Yüzünüzü yıkadıktan sonra, cildinizin doğal pH dengesi bozulabilir. Tonikler bu dengeyi hızla restore eder.

2. **Derin Temizlik**: Temizleyicinizin kaçırdığı son kir, makyaj ve yağ kalıntılarını alır.

3. **Gözenek Sıkılaştırma**: Düzenli kullanım gözeneklerin görünümünü minimize eder.

4. **Ürün Emilimini Artırma**: Cildinizi sonraki ürünler için hazırlar ve emilimlerini artırır.

## Tonik Türleri ve Seçimi

### Cilt Tipine Göre Tonik Seçimi

**Yağlı ve Akne Eğilimli Cilt İçin:**
- Salisilik asit içeren tonikler gözenekleri açar
- Niasinamid sebum üretimini dengeler
- Witch hazel doğal astrenjan etkisi gösterir
- Tea tree oil antibakteriyel özellikleriyle akneyle savaşır

**Kuru ve hassas Cilt İçin:**
- Hyaluronik asit nem çeker ve tutar
- Gliserin cildi yumuşatır ve nemlendirin
- Aloe vera yatıştırıcı etki gösterir
- Gül suyu nazik ve anti-inflamatuar

**Normal ve Karma Cilt İçin:**
- Dengeli formüller her iki bölgeyi de destekler
- Hafif exfoliating asitler (PHA, lactik asit)
- Antioksidanlar (yeşil çay, C vitamini)
- Nemlendirici ve dengeleyici bileşenler

**Olgun Cilt İçin:**
- Peptitler kollajen üretimini destekler
- Antioksidanlar serbest radikallerle savaşır
- Hafif AHA'lar hücre yenilenmesini hızlandırır
- Hyaluronik asit nem seviyesini artırır

### Tonik İçindeki Aktif Bileşenler

**Exfoliating Asitler:**
- **AHA'lar (Glikolik, Laktik Asit)**: Yüzey exfoliasyonu, parlaklık
- **BHA'lar (Salisilik Asit)**: Gözenek temizliği, akne kontrolü
- **PHA'lar**: Nazik exfoliation, hassas ciltler için ideal

**Nemlendirici Bileşenler:**
- **Hyaluronik Asit**: 1000 kat ağırlığında su tutar
- **Gliserin**: Cildi yumuşatır ve nemlendirin
- **Aloe Vera**: Yatıştırıcı ve nemlendirici

**Aktif Tedavi Bileşenleri:**
- **Niasinamid**: Gözenekleri küçültür, ton eşitsizliğini düzeltir
- **Witch Hazel**: Doğal astrenjan, gözenek sıkılaştırıcı
- **Tea Tree Oil**: Antibakteriyel, akne önleyici
- **Gül Suyu**: Anti-inflamatuar, yatıştırıcı

## Tonik Nasıl Kullanılır?

### Doğru Uygulama Tekniği

**Adım 1: Temizlik Sonrası**
- Yüzünüzü temizledikten hemen sonra uygulayın
- Cilt tamamen kuru olmasına gerek yok, hafif nemli olabilir

**Adım 2: Uygulama Yöntemi**
İki farklı yöntem:

*Pamuk Ped ile:*
- Toniği pamuk pede döküp
- Yukarı doğru hareketlerle cildinize uygulayın
- Nazikçe silin, ovmayın

*Avuç İçi ile (Önerilen):*
- Toniği avuç içinize dökün
- Hafifçe ısıtın
- Yüzünüze nazikçe bastırarak uygulayın (patting)
- Bu yöntem daha hijyenik ve ekonomik

**Adım 3: Emilim**
- Toniğin tamamen emilmesini bekleyin (30 saniye)
- Ardından serum ve nemlendiriciye geçin

### Uygulama Sıklığı

- **Sabah**: Gece boyunca biriken yağ ve ölü hücreleri temizler
- **Akşam**: Günün kir ve makyaj kalıntılarını alır

Exfoliating asitli tonikler başlangıçta haftada 2-3 kez, tolerans geliştikçe her gün kullanılabilir.

## Tonik Kullanırken Dikkat Edilmesi Gerekenler

### Yapılması Gerekenler

✅ Cildinizin ihtiyaçlarına uygun tonik seçin
✅ Her gün sabah ve akşam kullanın
✅ Toniği cilt hala nemli iken uygulayın
✅ Yeterli miktarda kullanın (birkaç damla yeterli değil)
✅ Boyun ve göğüs dekoltesini dahil edin
✅ Düzenli olarak kullanın - sonuçlar zamana ihtiyaç duyar

### Yapılmaması Gerekenler

❌ Alkol ağırlıklı toniklardan kaçının (kurutur)
❌ Gereğinden fazla kullanmayın
❌ Çok sert sürtmeyin
❌ Göz çevresine uygulamayın (özel ürünler kullanın)
❌ Farklı exfoliating ürünlerle aynı anda kullanmayın (hassasiyet)
❌ Uyumlu olmayan aktif bileşenleri karıştırmayın

## Tonik Sonrası Bakım Rutini

Tonik uyguladıktan sonra takip edilmesi gereken sıra:

1. **Tonik** (şu an)
2. **Treatment/Serum** (C vitamini, retinol, niasinamid vb.)
3. **Göz Kremi** (gerekiyorsa)
4. **Nemlendirici**
5. **Güneş Kremi** (sabah rutininde)

## Toniğin Bilimsel Faydaları

### pH Dengesi ve Cilt Bariyeri

Cildinizin doğal pH'ı 4.5-5.5 arasında hafif asidiktir. Bu asidik ortam:
- Zararlı bakterilerin üremesini engeller
- Cilt bariyerini korur
- Enzim aktivitesini optimize eder

Yıkadıktan sonra cilt pH'ı 7'ye kadar çıkabilir. Tonik bu dengeyi hızla restore eder.

### Gözenek Sağlığı

Düzenli tonik kullanımı:
- Gözeneklerdeki debris'i temizler
- Sebum üretimini dengeler
- Gözenek çeperlerini güçlendirir
- Gözenek boyutunun görünümünü azaltır

### Ürün Penetrasyonu

Araştırmalar gösteriyor ki tonik uygulaması:
- Sonraki ürünlerin emilimini %30'a kadar artırır
- Aktif bileşenlerin cilt derinliklerine ulaşmasını sağlar
- Ürün etkinliğini maksimize eder

## Yaygın Tonik Mitleri

**Mit 1: "Tonik gereksiz bir adımdır"**
Gerçek: Tonik, cilt bakımının önemli bir köprüsüdür ve birçok benzersiz fayda sağlar.

**Mit 2: "Tüm tonikler aynıdır"**
Gerçek: Tonikler formülasyon, aktif bileşen ve fonksiyon açısından büyük farklılıklar gösterir.

**Mit 3: "Tonik cildi kurutur"**
Gerçek: Eski alkol bazlı tonikler kuruturdu, modern tonikler nemlendirin ve besler.

**Mit 4: "Yağlı ciltler tonike ihtiyaç duymaz"**
Gerçek: Yağlı ciltler özellikle dengeleme ve gözenek kontrol amaçlı tonikten faydalanır.

**Mit 5: "Pamuk ped en iyi uygulama yöntemidir"**
Gerçek: Avuç içi ile patting ürün kaybını azaltır ve daha etkilidir.

## Tonik ile İlgili SSS

**Tonik her cilt tipi için uygun mudur?**
Evet, ancak formülasyon cilt tipine göre seçilmelidir.

**Toniksiz olur mu?**
Olur ama tonik kullanımı cilt sağlığını optimize eder ve ürün etkinliğini artırır.

**Tonik yerine micellar su kullanabilir miyim?**
Micellar su temizleyicidir, tonik ise sonraki adımdır. İkisi farklı fonksiyonlara sahiptir.

**Sabah ve akşam farklı tonikler kullanabilir miyim?**
Evet, örneğin sabah antioksidan içerikli, akşam exfoliating tonik kullanabilirsiniz.

## Sonuç

Tonik, cilt bakım rutininizin vazgeçilmez bir parçasıdır. Doğru tonik seçimi ve düzenli kullanım:

- Cildinizin pH dengesini restore eder
- Gözenekleri temizler ve sıkılaştırır
- Sonraki ürünlerin etkinliğini artırır
- Cildinize aktif bileşenler sağlar
- Genel cilt sağlığını ve görünümünü iyileştirir

Cildinizin ihtiyaçlarına uygun bir tonik seçin, düzenli kullanın ve farkı kendiniz görün. Tonik, basit gibi görünen ancak cildinizde büyük fark yaratan güçlü bir bakım adımıdır!`},"winter-skincare-tips":{title:"Kış Aylarında Cilt Bakımı: Soğuk Havadan Cildinizi Koruma Rehberi",excerpt:"Kış aylarında cildinizi nasıl korursunuz? Soğuk, rüzgar ve kuru havaya karşı etkili stratejiler.",content:`
## Kış Mevsiminin Cildinize Etkisi

Kış ayları, cildiniz için en zorlu dönemlerden biridir. Soğuk hava, düşük nem oranları, iç mekan ısıtması ve sert rüzgarlar cildinizin doğal nem dengesini bozar ve bir dizi soruna yol açar.

### Kışın Cilt Üzerindeki Olumsuz Etkileri

**Dış Faktörler:**
- **Düşük Sıcaklık**: Kan dolaşımını yavaşlatır, cildi solgun gösterir
- **Düşük Nem**: Havadaki nem oranı %30'un altına düşer
- **Sert Rüzgar**: Cilt bariyerini aşındırır
- **UV Işınları**: Kar yansıması UV maruziyetini %80 artırır

**İç Mekan Faktörler:**
- **Merkezi Isıtma**: Havayı kurutur, nem oranını düşürür
- **Sıcak Duşlar**: Doğal yağları soyar
- **Kalorifer**: Cildi dehidrate eder

### Kış Aylarında Yaygın Cilt Sorunları

1. **Aşırı Kuruluk ve Pullanma**: Nem kaybı cildi pürüzlü ve sert yapar
2. **Ekzema ve Dermatit**: Kuru hava mevcut durumları alevlendirir
3. **Çatlak ve Kızarıklık**: Özellikle el, dudak ve yanaklarda
4. **Hassasiyet Artışı**: Bariyer fonksiyonu zayıflar
5. **Solgun Görünüm**: Kan dolaşımı yavaşlar
6. **Çizgi ve Kırışıklıkların Belirginleşmesi**: Dehidrasyon nedeniyle

## Kış Cilt Bakım Rutini

### Sabah Rutini

**1. Nazik Temizlik**
- Sert temizleyicilerden kaçının
- Krem bazlı veya yağ bazlı temizleyiciler kullanın
- Ilık su kullanın (sıcak değil)
- Cildi ovarak kurulamayın, hafifçe tampone edin

**2. Tonik (Opsiyonel)**
- Alkol içermeyen, nemlendirici tonikler seçin
- Hyaluronik asit veya gliserin içerikli
- Gül suyu gibi yatıştırıcılar ideal

**3. Serum**
- Hyaluronik asit serumu nem çeker
- C vitamini antioksidan koruma sağlar
- Niasinamid bariyer fonksiyonunu güçlendirir

**4. Göz Kremi**
- Zengin, besleyici formüller
- Peptit ve hyaluronik asit içerikli

**5. Nemlendirici**
- Yaz aylarından daha zengin formül kullanın
- Seramid, kolesterol, yağ asitleri içerikli
- Krem veya balm formülasyonlar

**6. Güneş Kremi**
- SPF 30 veya üzeri mutlaka
- Kar yansıması UV'yi artırır
- Broad-spectrum koruma

**7. Ek Koruma**
- Çok kuru ciltler için yüz yağı
- Dudak balsamı SPF'li

### Akşam Rutini

**1. Çift Temizleme**
- İlk adım: Yağ bazlı temizleyici (makyaj ve kir)
- İkinci adım: Nazik, nemlendirici temizleyici

**2. Tonik**
- Sabah ile aynı, alkol içermeyen

**3. Treatment Serum**
- Retinol (haftada 2-3 kez, hassasiyeti artırabilir)
- Peptitler (onarım ve yenilenme)
- Niasinamid (bariyer güçlendirme)

**4. Göz Kremi**
- Besleyici ve onarıcı formüller

**5. Gece Kremi**
- Çok zengin, besleyici formül
- Sleeping mask kullanımı ideal
- Cildinizi "mühürleme" etkisi

**6. Yüz Yağı (Opsiyonel)**
- En son adım
- Squalane, jojoba, argan yağı
- Nem kilitler

### Haftalık Bakım

**Hafta İçi 1-2 Kez:**

**Nazik Exfoliation:**
- Kimyasal exfoliants (laktik asit, PHA)
- Fiziksel scrub'lardan kaçının
- Ölü hücreleri alır, ürün emilimini artırır

**Nemlendirici Maskeler:**
- Sheet masklar hızlı nem artışı
- Overnight masklar derin nemlendirme
- Hyaluronik asit, seramid içerikli

**Yüz Masajı:**
- Kan dolaşımını artırır
- Solgun görünümü canlandırır
- Yüz yağı veya krem ile yapın

## Kış Aylarında Yapılması Gerekenler

### ✅ Mutlaka Yapın

1. **Nemlendiriciyi Yükseltin**
   - Yaz aylarındaki hafif losyonları zengin kremlerle değiştirin
   - Seramid, hyaluronik asit, shea butter içerikli ürünler

2. **Hava Nemlendirici Kullanın**
   - İdeal nem oranı %40-60
   - Yatak odasına bir tane koyun
   - Düzenli temizlik yapın (bakteri üremesi)

3. **Bol Su İçin**
   - Günde en az 2 litre
   - İçeriden nemlendirme kritik
   - Bitki çayları da sayılır

4. **Güneş Kremi Sürmeyi Unutmayın**
   - Kış güneşi de zararlı
   - Kar yansıması riski artırır
   - SPF 30+ broad-spectrum

5. **Yüz Yağı Ekleyin**
   - Nemlendirici üzerine uygulayın
   - Nemi kilitler
   - Squalane, jojoba ideal

6. **Dudak Bakımı**
   - SPF'li dudak balsamı
   - Gece için besleyici balm
   - Ölü deriyi nazikçe exfoliate edin

7. **El Bakımı**
   - Her yıkamadan sonra krem
   - Gece eldiven üzerine kalın krem
   - Petroleum jelly çok etkili

8. **Vücut Nemlendirmesi**
   - Duştan hemen sonra uygulayın
   - Vücut yağları çok etkili
   - Urea veya laktik asit içerikli ürünler

### ❌ Kesinlikle Yapmayın

1. **Sıcak Duş Almayın**
   - Ilık su kullanın
   - Uzun süreli duştan kaçının (max 10 dk)
   - Doğal yağları soyar

2. **Sert Temizleyiciler Kullanmayın**
   - Sülfat içeren ürünlerden kaçının
   - Köpürmeyen temizleyiciler tercih edin
   - pH dengeli formüller

3. **Yoğun Exfoliation**
   - Haftada 2 kezden fazla exfoliate etmeyin
   - Fiziksel scrub yerine kimyasal
   - Cildi hassaslaştırır

4. **Retinol'ü Abartmayın**
   - Kış aylarında hassasiyet artar
   - Sıklığı azaltın veya konsantrasyonu düşürün
   - Çok iyi nemlendirme ile dengeleyin

5. **Gözenekleri Tıkayan Ürünler**
   - Kalın makyaj tabakalarından kaçının
   - Cildinizin nefes almasına izin verin
   - Non-comedogenic ürünler seçin

## Cilt Tipine Özel Kış Bakımı

### Kuru Cilt

- **Temizleyici**: Krem veya yağ bazlı
- **Nemlendirici**: Çok zengin, balm formülü
- **Ekstra**: Yüz yağı her gün
- **Maske**: Haftada 2-3 kez besleyici

### Yağlı Cilt

Yağlı cilt kışın da kuruyabilir! Sebum ≠ Nem

- **Temizleyici**: Jel, ama nazik
- **Nemlendirici**: Yağsız ama besleyici (hyaluronik asit)
- **Ekstra**: Hafif yüz yağı (jojoba, squalane)
- **Dikkat**: Sebum üretimini dengelemeye devam edin

### Karma Cilt

- **Temizleyici**: Dengeli, nazik jel
- **Nemlendirici**: T-zone'da hafif, yanakta zengin
- **Yöntem**: Multi-masking (farklı bölgelere farklı ürünler)

### Hassas Cilt

- **Temizleyici**: Micellar su veya krem
- **Nemlendirici**: Fragrance-free, minimal içerik
- **Ekstra**: Colloidal oatmeal, centella içerikli
- **Dikkat**: Yeni ürün denemekten kaçının

## Kış Aylarında Beslenme ve Yaşam Tarzı

### Cildinizi İçeriden Destekleyin

**Omega-3 Yağ Asitleri:**
- Somon, avokado, ceviz, keten tohumu
- Anti-inflamatuar
- Cilt bariyerini güçlendirir

**Antioksidanlar:**
- Renkli sebze ve meyveler
- C vitamini, E vitamini, beta-karoten
- Serbest radikal hasarını önler

**Probiyotikler:**
- Yoğurt, kefir, fermente gıdalar
- Gut-skin axis'i destekler
- İltihabı azaltır

**Su ve Sıvı:**
- Bol su, bitki çayları
- Su içeriği yüksek gıdalar (salatalık, kavun)

### Yaşam Tarzı Önerileri

**Egzersiz:**
- Kan dolaşımını artırır
- Cildi canlandırır
- Stres azaltır

**Uyku:**
- 7-9 saat kaliteli uyku
- Cildin kendini onarma zamanı
- Silk yastık kılıfı sürtünmeyi azaltır

**Stres Yönetimi:**
- Meditasyon, yoga
- Stres cilt sorunlarını alevlendirir

**Sigara ve Alkol:**
- Her ikisi de cildi kurutur
- Kollajen üretimini bozar
- Minimalize edin veya bırakın

## Acil Kurtarma Taktikleri

### Aşırı Kuru, Pullanmış Cilt İçin

**Hızlı Çözüm (15 dk):**
1. Hyaluronik asit serumu nemli ciltte
2. Kalın nemlendirici üzerine
3. Yüz yağı son adım
4. 10 dk steam/sıcak havlu

**Gece Intensive Tedavi:**
1. Nazik exfoliation (laktik asit)
2. Nemlendirici maske 15 dk
3. Hyaluronik asit serum
4. Sleeping mask
5. Yüz yağı

### Çatlamış Dudaklar İçin

1. Yumuşak fırça ile ölü deriyi alın
2. Hyaluronik asit dudağa
3. Kalın dudak balsamı veya lanolin
4. Gece Aquaphor veya Vaseline

### Kızarmış, Hassas Cilt İçin

1. Soğuk kompres (5 dk)
2. Centella veya aloe vera
3. Ceramid içerikli nemlendirici
4. Tüm aktifleri durdurun

## Sonuç ve Önemli Hatırlatmalar

Kış cilt bakımı, yazdan farklı bir yaklaşım gerektirir. Temel prensipler:

🔹 **Nem, nem, nem**: İçeriden ve dışarıdan maksimum nemlendirme
🔹 **Nazik Olun**: Sert ürünler ve yöntemlerden kaçının
🔹 **Zenginleştirin**: Formülasyonları kışa göre ayarlayın
🔹 **Koruyun**: Güneş kremi ve bariyer koruma devam
🔹 **Tutarlı Olun**: Düzenli rutin sonuç verir

Kış ayları zorlu olsa da, doğru bakım ile cildiniz sağlıklı, nemli ve ışıldayan kalabilir. Cildinizi dinleyin ve ihtiyaçlarına göre rutininizi ayarlayın. Soğuk hava geçici, sağlıklı cilt kalıcıdır!`},"rose-water-benefits":{title:"Gül Suyunun Faydaları: Doğanın Mucizevi Cilt Bakım Sırrı",excerpt:"Gül suyunun cildinize sağladığı sayısız faydayı ve kullanım yöntemlerini keşfedin.",content:`
## Gül Suyu Nedir?

Gül suyu, gül yapraklarının buhar distilasyonu yoluyla elde edilen aromatik, doğal bir üründür. Binlerce yıldır güzellik ritüellerinde kullanılan bu mucizevi sıvı, hem cilt bakımı hem de aromaterapi alanında vazgeçilmezdir.

### Gül Suyunun Tarihçesi

Gül suyu kullanımı antik çağlara kadar uzanır:
- **Antik Mısır**: Kleopatra'nın güzellik sırrı
- **Pers İmparatorluğu**: Lüks parfüm ve cilt bakımında
- **Osmanlı Dönemi**: Hamam kültüründe ve cilt bakımında
- **Modern Dönem**: Doğal kozmetiklerin yıldızı

### Gül Suyunun Kimyasal Bileşimi

Gül suyu zengin bir bileşime sahiptir:

**Aktif Bileşenler:**
- **Fenolik Bileşikler**: Antioksidan etki
- **Flavonoidler**: Anti-inflamatuar özellik
- **Tanen**: Astrenjan (gözenek sıkılaştırıcı) etki
- **Vitaminler**: A, B3, C, E
- **Uçucu Yağlar**: Aromaterapi faydaları
- **Organik Asitler**: Nazik exfoliation

**pH Değeri**: 5.5-6.0 (cildin doğal pH'ına yakın)

## Gül Suyunun Cilt İçin Faydaları

### 1. Nemlendirme ve Hidrasyon

Gül suyu cildi derinlemesine nemlendirir:
- Su bazlı hafif formül hızla emilir
- Cildin nem dengesini restore eder
- Nem kaybını azaltır
- Kuru ve dehidrate ciltler için ideal

**Bilimsel Kanıt**: Araştırmalar gösteriyor ki düzenli gül suyu kullanımı cildin nem seviyesini %23 oranında artırır.

### 2. pH Dengesi ve Tonik Etkisi

Yüz yıkama sonrası pH dengesini hızla restore eder:
- Cildin doğal asidik pH'ını korur
- Gözenekleri sıkılaştırır
- Sonraki ürünlerin emilimini optimize eder
- Mükemmel doğal tonik alternatifi

### 3. Anti-inflamatuar ve Yatıştırıcı

Tahrişi ve kızarıklığı azaltır:
- Hassas ciltler için ideal
- Güneş yanığını yatıştırır
- Ekzema ve rozasea semptomlarını hafifletir
- Cildi sakinleştirir

**Kullanım**: Soğuk gül suyu kompres ile anında yatıştırma

### 4. Antioksidan Koruma

Serbest radikallerle savaşır:
- Çevresel stres faktörlerinden korur
- Erken yaşlanma belirtilerini önler
- Cildi kirlilik ve UV hasarından korur
- Hücre hasarını minimize eder

### 5. Gözenek Sıkılaştırma

Doğal astrenjan özellikleri:
- Gözeneklerin görünümünü azaltır
- Sebum üretimini dengeler
- Gözeneklerdeki kirleri temizler
- Cilde mat görünüm kazandırır

### 6. Akne ve Leke Kontrolü

Antibakteriyel özellikleri:
- Akne bakterilerini öldürür
- İltihabı azaltır
- Yeni akne oluşumunu önler
- Akne izlerini soldurmaya yardımcı olur

### 7. Anti-Aging Etkiler

Yaşlanma karşıtı faydalar:
- İnce çizgileri yumuşatır
- Cildi sıkılaştırır
- Elastikiyeti artırır
- Genç görünüm sağlar

### 8. Cilt Tonu Eşitleme

- Hiperpigmentasyonu azaltır
- Lekeleri soldurmaya yardımcı olur
- Parlak, eşit ton sağlar
- Solgun cildi canlandırır

### 9. Göz Çevresi Bakımı

- Şişkinliği azaltır
- Koyu halkaları hafifletir
- Hassas göz çevresini yatıştırır
- Göz altı torbaları için etkili

### 10. Makyaj Sabitleme

- Makyajı sabitler ve tazeler
- Gün boyu tazelik hissi
- Makyajın daha doğal görünmesini sağlar

## Gül Suyu Kullanım Yöntemleri

### 1. Tonik Olarak

**Sabah ve Akşam Rutin:**
1. Yüzünüzü temizleyin
2. Gül suyunu pamuk pede döküp veya spreyle uygulayın
3. Tamamen kurumasını bekleyin
4. Serum ve nemlendirici ile devam edin

**Uygulama Tipleri:**
- **Pamuk Ped**: Klasik yöntem, nazikçe silin
- **Spray**: Daha hijyenik, ürün kaybı az
- **Avuç İçi**: Hafifçe bastırarak (patting), en etkili

### 2. Yüz Spreyi

Gün boyu tazelik için:
- Sabah yüzünüze spreyleyin (makyaj öncesi)
- Öğlen tazeleme için (makyaj üzerine)
- Akşam yatmadan önce
- Egzersiz sonrası serinletme

**İpucu**: Buzdolabında soğuk tutun, yaz aylarında serinletici

### 3. Göz Kompresi

Yorgun gözler için:
1. Pamuk pedleri soğuk gül suyuna batırın
2. Gözlerin üzerine yerleştirin
3. 10-15 dakika bekleyin
4. Şişkinlik ve koyu halkalar azalır

### 4. Yüz Maskesi Booster

Maskelere katın:
- Kil maskesine gül suyu ekleyin (su yerine)
- Daha nazik ve yatıştırıcı olur
- Maskenin kurumasını yavaşlatır
- Fazladan nem ve fayda

### 5. Makyaj Sabitleme Spreyi

Makyaj sonrası:
- Yüzünüze nazikçe spreyleyin
- Makyajı sabitler
- Doğal görünüm
- Gün boyu tazelik

### 6. Banyo Suyu Katkısı

Lüks aromaterapi banyosu:
- Banyo suyuna 1/2-1 su bardağı gül suyu
- Rahatlama ve cilt bakımı
- Tüm vücut için fayda

### 7. Saç Bakımında

Saç için de faydalı:
- Son durulama suyu olarak
- Saç spreyi olarak (parlaklık)
- Saç derisini yatıştırır

## Cilt Tipine Göre Gül Suyu Kullanımı

### Kuru Cilt

- **Sıklık**: Günde 2-3 kez spray
- **Kombinasyon**: Hyaluronik asit + gül suyu + nemlendirici
- **Ek Fayda**: Maksimum hidrasyon

### Yağlı Cilt

- **Sıklık**: Sabah-akşam tonik olarak
- **Kombinasyon**: Gül suyu + witch hazel (1:1)
- **Ek Fayda**: Sebum kontrolü, mat görünüm

### Karma Cilt

- **Sıklık**: Sabah-akşam tonik
- **Kombinasyon**: Saf gül suyu
- **Ek Fayda**: Denge sağlama

### Hassas Cilt

- **Sıklık**: İhtiyaç halinde, yatıştırma amaçlı
- **Kombinasyon**: %100 saf, katkısız gül suyu
- **Ek Fayda**: Anti-inflamatuar etki

### Akne Eğilimli Cilt

- **Sıklık**: Sabah-akşam
- **Kombinasyon**: Gül suyu + tea tree oil (birkaç damla)
- **Ek Fayda**: Antibakteriyel koruma

### Olgun Cilt

- **Sıklık**: Sabah-akşam + gün içi spray
- **Kombinasyon**: Gül suyu + C vitamini serumu
- **Ek Fayda**: Anti-aging desteği

## DIY Gül Suyu Tarifleri

### Ev Yapımı Gül Suyu

**Malzemeler:**
- 10-15 taze, organik gül yaprağı (pestisitsiz)
- 2 su bardağı distile su
- Buz küpleri

**Yapılışı:**
1. Gül yapraklarını yıkayın
2. Tencereye yerleştirin
3. Distile su ile örtün
4. Kaynattıktan sonra kısık ateşte 30 dk
5. Süzün ve cam kavanozda saklayın
6. Buzdolabında 1 hafta dayanır

**Not**: Ev yapımı koruyucu içermez, hızlı tüketin

### Gül Suyu + Gliserin Tonik

**Malzemeler:**
- 1/2 su bardağı gül suyu
- 1 yemek kaşığı gliserin
- 3 damla lavanta yağı (opsiyonel)

**Kullanım**: Ekstra nemlendirici tonik, özellikle kuru ciltler için

### Gül Suyu Yüz Maskesi

**Malzemeler:**
- 2 yemek kaşığı bal
- 1 yemek kaşığı gül suyu
- 1 tatlı kaşığı kurkuma (opsiyonel)

**Uygulama**:
1. Karıştırıp yüze sürün
2. 15 dakika bekleyin
3. Ilık suyla durulayın
4. Aydınlık, nemli cilt

## Gül Suyu Seçimi ve Saklama

### Kaliteli Gül Suyu Nasıl Seçilir?

**İçerik Kontrolü:**
✅ %100 saf gül suyu (Rosa damascena)
✅ Tek içerik: Gül suyu/Gül hidrosolu
✅ Organik sertifikalı
✅ Cam şişede
✅ Koruyucusuz veya minimal doğal koruyucu

**Kaçınılması Gerekenler:**
❌ Fragrance (yapay koku)
❌ Alkol
❌ Parabens
❌ Artificial colors
❌ Plastik ambalaj

### Saklama Koşulları

**Ideal Saklama:**
- Serin, karanlık yer
- Buzdolabı ideal (6-12 ay)
- Güneş ışığından uzak
- Sıkıca kapalı cam şişe
- Hijyenik kullanım (spreyli tercih edin)

**Raf Ömrü:**
- Açılmamış: 1-2 yıl
- Açıldıktan sonra: 6 ay (buzdolabında)
- Ev yapımı: 1 hafta (buzdolabında)

**Bozulma Belirtileri:**
- Koku değişimi
- Renk değişimi
- Bulanıklaşma
- Küf

## Gül Suyu ile Kombine Edilebilecek Bileşenler

### Mükemmel Kombinasyonlar

**Gül Suyu + Hyaluronik Asit**
- Maksimum hidrasyon
- Gül suyu ilk, HA ikinci

**Gül Suyu + Gliserin**
- Derin nemlendirme
- Kuru ciltler için ideal

**Gül Suyu + C Vitamini**
- Antioksidan güç
- Aydınlatma etkisi

**Gül Suyu + Aloe Vera**
- Çift yatıştırma
- Hassas ciltler için

**Gül Suyu + Witch Hazel**
- Gözenek kontrolü
- Yağlı ciltler için

**Gül Suyu + Niasinamid**
- Ton eşitleme
- Bariyer güçlendirme

## Yaygın Sorular

**Gül suyu her gün kullanılabilir mi?**
Evet, günde birkaç kez bile güvenle kullanılabilir.

**Gül suyu nemlendirici yerine geçer mi?**
Hayır, nemlendirici öncesi hidrasyon sağlar ama yeterli değil.

**Hamilelikte kullanılabilir mi?**
Evet, topikal gül suyu hamileler için güvenlidir.

**Tüm cilt tipleri için uygun mu?**
Evet, tüm cilt tipleri için uygundur.

**Gül suyu ile gül yağı aynı mı?**
Hayır, gül yağı yoğunlaştırılmış esansiyel yağdır, gül suyu su bazlıdır.

**Ne zaman sonuç görülür?**
Anlık yatıştırma hemen, uzun vadeli faydalar 2-4 hafta düzenli kullanımda.

## Sonuç

Gül suyu, doğanın en güzel cilt bakım hediyelerinden biridir. Binlerce yıldır güzellik rutinlerinde yer almasının nedeni, çok yönlü faydaları ve tüm cilt tipleri için uygunluğudur.

**Önemli Noktalar:**
🌹 %100 saf, organik gül suyu seçin
🌹 Günlük rutininize entegre edin
🌹 Sabırlı olun - düzenli kullanım sonuç verir
🌹 Çok yönlü kullanım - tonik, spray, maske
🌹 Doğal ve güvenli - her cilt tipi

Gül suyunu cilt bakım rutininize ekleyin ve bu antik güzellik sırrının modern faydalarını deneyimleyin. Cildiniz size teşekkür edecek!`},"acne-prone-skin-care":{title:"Akne Eğilimli Cilt Bakımı: Kapsamlı Tedavi ve Önleme Rehberi",excerpt:"Akne eğilimli ciltler için bilimsel temelli özel bakım önerileri ve etkili çözümler.",content:`
## Akne Nedir ve Neden Oluşur?

Akne, dünyada en yaygın görülen cilt rahatsızlığıdır ve neredeyse herkes yaşamının bir döneminde akneyle karşılaşır. Akne sadece ergenlik problemi değildir; yetişkinler arasında da oldukça yaygındır, özellikle kadınlarda hormonsal değişimler nedeniyle.

### Akne Oluşum Mekanizması

Akne, dört temel faktörün birleşimiyle oluşur:

1. **Aşırı Sebum (Yağ) Üretimi**: Sebum bezleri normalden fazla yağ üretir
2. **Gözenek Tıkanması**: Ölü deri hücreleri ve sebum gözenekleri tıkar
3. **Bakteriyel Kolonizasyon**: C. acnes (Cutibacterium acnes) bakterisi çoğalır
4. **İnflamasyon**: Bağışıklık sistemi tepki verir, kızarıklık ve şişlik oluşur

### Akne Türleri

**Non-İnflamatuar Akne:**
- **Blackheads (Siyah Noktalar)**: Açık komedolar, oksitlenmiş sebum
- **Whiteheads (Beyaz Noktalar)**: Kapalı komedolar, cildin altında

**İnflamatuar Akne:**
- **Papüller**: Küçük, kırmızı, hassas kabarıklıklar
- **Püstüller**: Püs dolu, beyaz başlı sivilceler
- **Nodüller**: Derin, sert, ağrılı şişlikler
- **Kistler**: Derin, püs dolu, iz bırakma riski yüksek

### Akneyi Tetikleyen Faktörler

**Hormonal:**
- Ergenlik, adet dönemi, hamilelik
- PCOS (Polikistik Over Sendromu)
- Androgen hormonlarındaki artış

**Yaşam Tarzı:**
- Stres (kortizol hormonu)
- Uyku eksikliği
- Yüksek glisemik indeksli diyet
- Süt ürünleri (bazı kişilerde)

**Dış Faktörler:**
- Komedojenik kozmetikler
- Aşırı temizlik (paradoksal etki)
- Kirli telefon, yastık kılıfı
- Yüze dokunma alışkanlığı

**İlaçlar:**
- Kortikosteroidler
- Androjenler
- Lityum

## Akne Eğilimli Cilt Bakım Rutini

### Sabah Rutini

**1. Nazik Temizlik**
- **Ürün Tipi**: Salisilik asit (BHA) içeren jel temizleyici
- **pH**: 4.5-5.5 (cildin doğal pH'ı)
- **Yöntem**: 
  - Ilık suyla yüzü ıslatın
  - Nazikçe dairesel hareketlerle uygulayın (30 saniye)
  - Bol suyla durulayın
  - Yumuşak havluyla hafifçe kurulayın (ovmayın)

**Önerilen Bileşenler:**
- Salisilik asit %0.5-2%
- Tea tree oil
- Niasinamid
- Aloe vera

**2. Tonik (Opsiyonel)**
- **İçerik**: Alkol içermeyen, gözenek temizleyici
- **Aktifler**: Witch hazel, niasinamid, salisilik asit
- **Uygulama**: Pamuk ped veya avuç içi ile

**3. Treatment Serum**
- **Niasinamid Serum %5-10%**:
  - Sebum üretimini dengeler
  - İltihabı azaltır
  - Gözenek görünümünü küçültür
  - Akne izlerini soldurmaya yardımcı olur

**4. Nemlendirici**
- **Özellikler**: Yağsız (oil-free), non-comedogenic
- **İçerik**: 
  - Hyaluronik asit (nem)
  - Seramidler (bariyer onarımı)
  - Niasinamid (ek fayda)
- **Doku**: Hafif jel veya losyon

**ÖNEMLİ**: Akne eğilimli cilt bile nemlendirmeye ihtiyaç duyar!

**5. Güneş Kremi (MUTLAKA!)**
- **SPF**: Minimum 30, tercihen 50
- **Tip**: Kimyasal veya mineral (non-comedogenic)
- **Doku**: Yağsız, mat bitişli
- **Neden Önemli**: 
  - Akne tedavi ürünleri cildi hassaslaştırır
  - UV hasar akne izlerini koyulaştırır
  - Post-inflamatuar hiperpigmentasyon önler

### Akşam Rutini

**1. Çift Temizleme**

*Adım 1: Yağ Bazlı Temizleyici*
- Güneş kremi, makyaj, sebumu çözer
- Micellar su veya cleansing balm
- Kuru cilde masaj yapın
- Ilık suyla emülsifiye edin

*Adım 2: Su Bazlı Temizleyici*
- Salisilik asit içeren jel
- Kalan kirleri temizler
- İkinci yıkama derinden temizler

**2. Exfoliating Tonik (Haftada 3-4 kez)**
- **BHA (Salisilik Asit) %2**: Gözenek temizliği
- **AHA (Glikolik/Laktik Asit) %5-10%**: Yüzey exfoliation
- **Uygulama**: Temiz cilde pamuk ped ile
- **Bekleme**: 5-10 dakika (pH'ın etkili olması için)

**3. Treatment Serum/Krem**

**Seçenek 1: Retinoid (En Etkili)**
- **Retinol veya Adapalene**: Hücre döngüsünü hızlandırır
- **Başlangıç**: Haftada 2 kez, %0.25-0.5
- **Tolerans Sonrası**: Her gece, %1
- **Uygulama**: Kuru cilde, bezelye tanesi kadar
- **Dikkat**: Hamilelikte kullanılmaz

**Seçenek 2: Benzoyl Peroxide (BP)**
- **Konsantrasyon**: %2.5-5% (yüksek konsantrasyon daha iyi değil!)
- **Etki**: Antibakteriyel, akne bakterilerini öldürür
- **Uygulama**: Sadece problematik bölgelere (spot treatment)
- **Dikkat**: Kurutur, renk açabilir (giysi, saç)

**Seçenek 3: Azelaic Asit %10-20%**
- Antibakteriyel + anti-inflamatuar
- Akne izlerini soldurmada etkili
- Hassas ciltler için retinoid alternatifi

**4. Göz Kremi**
- Non-comedogenic
- Caffeine içerikli (şişkinlik giderici)

**5. Nemlendirici**
- Sabahki ile aynı veya daha zengin
- Gel veya hafif losyon

**6. Spot Treatment (İhtiyaç Halinde)**
- BP %5 veya
- Salisilik asit %2 veya
- Tea tree oil
- Sadece akne üzerine uygulayın

### Haftalık Bakım

**Hafta İçi 1-2 Kez:**

**1. Deep Cleansing Maske**
- **Kil Maskesi**: Sebum emer, gözenekleri temizler
  - Kaolin (nazik)
  - Bentonit (güçlü)
  - Salisilik asit içerikli
- **Uygulama**: 10-15 dakika, tamamen kurumadan alın
- **Sonra**: Bol nemlendirme

**2. Exfoliation**
- Kimyasal exfoliants tercih edin (fiziksel scrub yerine)
- AHA/BHA peeling maske
- Haftada 1-2 kezden fazla değil

## Akne Tedavisinde Aktif Bileşenler

### Salisilik Asit (BHA) - Çok Önemli!

**Nasıl Çalışır:**
- Yağda çözünür, gözeneklere nüfuz eder
- Gözenek içindeki debris'i temizler
- Anti-inflamatuar etki
- Komedoları önler

**Kullanım:**
- Konsantrasyon: %0.5-2%
- Ürün Tipi: Temizleyici, tonik, serum, spot treatment
- Sıklık: Günlük (toleransa göre)

### Benzoyl Peroxide (BP)

**Nasıl Çalışır:**
- C. acnes bakterisini öldürür
- Oksijen salar, bakteriler oksijensiz ortamı sever
- Antibiyotik direnci yaratmaz

**Kullanım:**
- Konsantrasyon: %2.5-5% (düşük = etkili + az tahriş)
- Ürün Tipi: Temizleyici, jel, krem
- Kombine: BP sabah, retinoid akşam (aynı anda değil)

**Dikkat:**
- Kurutur, tahriş edebilir
- Kumaşları ağartır
- Güneş hassasiyeti artırır (SPF!)

### Retinoidler (En Güçlü Silah)

**Nasıl Çalışır:**
- Hücre yenilenmesini hızlandırır
- Gözenekleri açık tutar
- Kolajen üretimini artırır (anti-aging bonus)
- İltihabı azaltır

**Türleri:**
- **OTC**: Retinol, retinaldehyde
- **Reçeteli**: Tretinoin, adapalene, tazarotene

**Kullanım:**
- Başlangıç: Haftada 2-3 kez, düşük konsantrasyon
- Yavaş yavaş artırın (retinization süreci)
- Sadece akşam (ışığa hassas)
- "Purging" normal (2-6 hafta)

**Retinoid Sandwiç Tekniği** (tahriş azaltma):
1. Nemlendirici
2. Retinoid
3. Nemlendirici

### Niasinamid (Vitamin B3)

**Nasıl Çalışır:**
- Sebum üretimini dengeler
- Anti-inflamatuar
- Gözenek görünümünü azaltır
- Akne izlerini soldurmaya yardımcı

**Kullanım:**
- Konsantrasyon: %5-10%
- Her gün, sabah ve/veya akşam
- Çoğu aktifle uyumlu

### Azelaic Asit

**Nasıl Çalışır:**
- Antibakteriyel
- Tyrosinase inhibitörü (aydınlatıcı)
- Anti-inflamatuar
- Komedolitik

**Kullanım:**
- Konsantrasyon: %10-20%
- Günde 1-2 kez
- Hassas ciltler için retinoid alternatifi
- Hamilelikte güvenli

### Alpha Hydroxy Asitler (AHA)

**Glikolik ve Laktik Asit:**
- Yüzey exfoliation
- Ölü hücreleri alır
- Akne izlerini soldurmaya yardımcı
- Parlak cilt

**Kullanım:**
- Konsantrasyon: %5-10%
- Haftada 2-3 kez
- Güneş hassasiyeti (SPF!)

## Yapılması ve Yapılmaması Gerekenler

### ✅ Mutlaka Yapın

1. **Her Gün SPF Kullanın**
   - Akne tedavi ürünleri cildi hassaslaştırır
   - UV akne izlerini koyulaştırır

2. **Nemlendirin**
   - Yağlı cilt bile neme ihtiyaç duyar
   - Sebum ≠ Nem

3. **Sabırlı Olun**
   - Ürünler 6-12 hafta sonuç verir
   - "Purging" ilk 2-6 hafta normal

4. **Yastık Kılıfını Değiştirin**
   - Haftada 2-3 kez
   - Pamuklu veya ipek tercih edin

5. **Telefonu Temizleyin**
   - Günlük alkol bazlı mendille silin
   - Yüze temas bakterileri

6. **Non-Comedogenic Ürünler**
   - Tüm kozmetikler ve güneş kremlerinde
   - "Oil-free" etiketi arayın

7. **Düzenli Olun**
   - Tutarlılık başarının anahtarı
   - Atlama yapmayın

8. **Patch Test Yapın**
   - Yeni ürünleri kulak arkasında test edin
   - 24 saat bekleyin

### ❌ Kesinlikle Yapmayın

1. **Yüzünüze Dokunmayın**
   - Eller bakteriyle dolu
   - Sivilceleri sıkmayın (iz bırakır)

2. **Aşırı Temizlik**
   - Günde 2 kezden fazla yıkamayın
   - Sebum üretimini artırır (paradoksal)

3. **Fiziksel Scrub**
   - Tahriş eder, mikro-yırtıklar açar
   - Kimyasal exfoliants daha nazik ve etkili

4. **Çok Fazla Aktif Aynı Anda**
   - Tahriş ve hassasiyet riski
   - Yavaş başlayın, tek tek ekleyin

5. **Alkol Bazlı Ürünler**
   - Cildi kurutur
   - Sebum üretimini artırır
   - İnflamasyonu kötüleştirir

6. **Hamilelikte Retinoid**
   - Teratojen (bebek gelişimine zararlı)
   - Salisilik asit de dikkatli

7. **Güneşe Çıkmak (Korumasız)**
   - Akne tedavi ürünleri fotosensitizasyon yapar
   - Akne izleri koyulaşır

8. **Hızlı Ürün Değişimi**
   - Bir ürüne 6-12 hafta şans verin
   - Sürekli değişim cildi strese sokar

## Yaşam Tarzı ve Beslenme

### Beslenme

**Akneyi Kötüleştirebilecek Gıdalar:**
- **Yüksek Glisemik İndeks**: Beyaz ekmek, şeker, işlenmiş gıdalar
  - İnsülin artışı → Androjen artışı → Sebum artışı
- **Süt Ürünleri**: Bazı kişilerde (özellikle yağsız süt)
  - Hormonlar ve büyüme faktörleri
- **Whey Protein**: İnsulin spike'ı

**Akneye Yardımcı Gıdalar:**
- **Omega-3**: Somon, ceviz, keten tohumu (anti-inflamatuar)
- **Çinko**: Kabak çekirdeği, nohut (sebum kontrolü)
- **Probiyotikler**: Yoğurt, kefir, kimchi (gut-skin axis)
- **Antioksidanlar**: Renkli sebze-meyveler
- **Düşük Glisemik**: Tam tahıllar, baklagiller

**Hidrasyon:**
- Günde 2-3 litre su
- Yeşil çay (antioksidan + anti-inflamatuar)

### Stres Yönetimi

Stres → Kortizol ↑ → Sebum ↑ → Akne ↑

**Stresi Azaltma:**
- Düzenli egzersiz (ter attıktan sonra yüzünüzü yıkayın!)
- Meditasyon, yoga
- Yeterli uyku (7-9 saat)
- Hobi ve sosyal aktiviteler

### Hijyen

**Yüz:**
- Temiz ellerle dokunun
- Günde 2 kez yıkayın
- Ter attıktan sonra yıkayın

**Saç:**
- Yağlı saçlar akneyi tetikleyebilir
- Saçı yüzünüzden uzak tutun
- Şampuan/kondisyoner yüze gelmemeli

**Çevre:**
- Yastık kılıfı: Haftada 2-3 kez
- Telefon: Günlük temizlik
- Makyaj fırçaları: Haftada 1 kez yıkayın

## Profesyonel Tedaviler

### Dermatologa Ne Zaman Gidilmeli?

**Hemen:**
- Kistik akne (derin, ağrılı)
- Nodüler akne
- İz oluşumu başlamış
- OTC ürünler 3 ay sonuç vermedi
- Emosyonel etki (özgüven kaybı)

### Reçeteli Tedaviler

**Topikal:**
- **Tretinoin**: Güçlü retinoid
- **Adapalene**: Daha nazik retinoid
- **Klindamisin**: Antibiyotik jel
- **Dapsone**: Anti-inflamatuar jel

**Oral:**
- **İzotretinoin (Accutane)**: Şiddetli akne için, çok etkili ama yan etkileri var
- **Antibiyotikler**: Doksisiklin, minosiklin (kısa süreli)
- **Spironolakton**: Hormonsal akne (kadınlarda)
- **Doğum Kontrol Hapı**: Hormonları dengeler (kadınlarda)

### İn-Office Prosedürler

- **Kimyasal Peeling**: Derin exfoliation
- **Extraction**: Profesyonel komedolar alımı
- **LED Işık Tedavisi**: Anti-inflamatuar
- **Mikrodermabrazyon**: Yüzey yenileme
- **Lazer Tedavi**: İz tedavisi

## Akne İzleri ve Hiperpigmentasyon

### Post-İnflamatuar Hiperpigmentasyon (PIH)

**Önleme:**
- Sivilceleri sıkmayın
- Güneş kremi kullanın
- İltihabı hızlı kontrol edin

**Tedavi:**
- **Aydınlatıcılar**: C vitamini, niasinamid, azelaic asit, kojic asit
- **Exfoliants**: AHA, retinoid (hücre yenileme)
- **Güneş Kremi**: SPF 50+ (koyulaşmayı önler)
- **Profesyonel**: Kimyasal peeling, lazer

### Akne İzleri (Atrofik Skar)

**Tipler:**
- **Ice Pick**: Dar, derin
- **Boxcar**: Geniş, keskin kenarlı
- **Rolling**: Dalgalı görünüm

**Tedavi:**
- **Dermatoloji Prosedürleri**: Microneedling, TCA CROSS, subcision, lazer
- **Topikal**: Retinoid (hafif iyileşme)

**Önemli**: İz tedavisi uzun süreç, profesyonel yardım gerekir.

## Sonuç ve Önemli Hatırlatmalar

Akne eğilimli cilt bakımı bir maraton, sprint değil. Sabırlı, tutarlı ve bilimsel temelli bir yaklaşım başarının anahtarıdır.

**Temel İlkeler:**
🔹 **Nazik Temizlik**: Aşırı temizlik düşmanınızdır
🔹 **Aktif Bileşenler**: BHA, retinoid, BP, niasinamid
🔹 **Nemlendirme**: Yağlı cilt bile neme ihtiyaç duyar
🔹 **SPF Her Gün**: Akne tedavisinin vazgeçilmez parçası
🔹 **Sabır**: 6-12 hafta beklemeye hazır olun
🔹 **Profesyonel Yardım**: Şiddetli akne dermatologa

**Beklentiler:**
- İyileşme 6-12 hafta sürer
- "Purging" ilk 4-6 hafta normal (özellikle retinoid)
- %100 akne-free olmak gerçekçi olmayabilir
- Amaç: Kontrol altında tutmak, iz bırakmadan iyileştirmek

Akne ile mücadele zor olabilir, ama doğru yaklaşımla kesinlikle yönetilebilir. Cildinize sabırlı olun, tutarlı kalın ve gerektiğinde profesyonel yardım almaktan çekinmeyin!`},"double-cleansing-method":{title:"Çift Temizleme Yöntemi: Derin Temizlik İçin Altın Standart",excerpt:"Çift temizleme yöntemi nedir, nasıl uygulanır ve cildinize sağladığı faydalar.",content:`
## Çift Temizleme Nedir?

Çift temizleme (double cleansing), adından da anlaşılacağı üzere, yüzünüzü iki farklı temizleyici ile iki aşamada temizleme yöntemidir. Kore cilt bakım rutinlerinin (K-Beauty) temel taşlarından biri olan bu yöntem, son yıllarda tüm dünyada popülerlik kazanmıştır.

**İki Temel Adım:**
1. **Birinci Adım - Yağ Bazlı Temizleyici**: Makyaj, güneş kremi, sebum ve yağda çözünen kirleri çözer
2. **İkinci Adım - Su Bazlı Temizleyici**: Ter, kir, ölü deri hücreleri ve suda çözünen kirleri temizler

### Neden Çift Temizleme?

Modern yaşamda cildiniz sadece doğal sebum ve terle değil, aynı zamanda makyaj, güneş kremi, hava kirliliği ve ince tozlarla karşı karşıyadır. Tek bir temizleyici tüm bu katmanları etkili şekilde temizleyemez.

**"Benzer benzer çözer" prensibi:**
- Yağ bazlı kirler (makyaj, güneş kremi) → Yağ bazlı temizleyici
- Su bazlı kirler (ter, toz) → Su bazlı temizleyici

## Çift Temizlemenin Faydaları

### 1. Derinlemesine Temizlik

- **Gözenekleri Açar**: Yağ bazlı temizleyici gözenek içindeki sebum ve debris'i çözer
- **İkili Koruma**: İki farklı temizleyici maksimum temizlik sağlar
- **Katmanlı Kir Giderme**: Her katman kiri hedef alır

### 2. Akne ve Siyah Nokta Önleme

- Gözeneklerdeki tıkanıkları önler
- Sebum birikimini azaltır
- Komedolar (siyah/beyaz noktalar) oluşumunu engeller
- Düzenli kullanımda gözenek boyutu küçülür

### 3. Ürün Emilimini Artırır

Temiz cilt = Etkili ürün emilimi
- Serum, nemlendirici ve treatment ürünleri daha iyi nüfuz eder
- Aktif bileşenlerin etkinliği %30-40 artar
- Cilt bakım yatırımınızdan maksimum fayda

### 4. Cilt Bariyerini Korur

Tek seferde sert temizleyici kullanmak yerine:
- İki nazik temizleyici bariyer sağlığını korur
- pH dengesini bozmaz
- Doğal yağ dengesini korur

### 5. Parlak ve Pürüzsüz Cilt

- Ölü deri hücrelerini etkili şekilde alır
- Cildin doğal parlaklığını ortaya çıkarır
- Doku düzensizliklerini azaltır
- Makyaj daha pürüzsüz durur

### 6. Erken Yaşlanma Önleme

- Günlük kir ve toksinleri temizler
- Serbest radikal hasarını azaltır
- Gözeneklerdeki oksitlenmiş sebum yaşlanmayı hızlandırır
- Temiz cilt = Genç cilt

## Birinci Adım: Yağ Bazlı Temizleyici

### Yağ Bazlı Temizleyici Türleri

**1. Cleansing Oil (Temizleme Yağı)**
- **En Etkili**: En yoğun makyaj bile kolayca çıkar
- **Doku**: Sıvı yağ
- **Kime Uygun**: Tüm cilt tipleri, özellikle kuru cilt
- **Örnekler**: Jojoba, squalane, grapeseed oil bazlı

**2. Cleansing Balm**
- **Lüks Doku**: Katı, ısıyla eriyerek yağa dönüşür
- **Makyaj Gücü**: Çok güçlü, waterproof makyaj bile
- **Kime Uygun**: Tüm cilt tipleri
- **Bonus**: Masaj yapmak için ideal

**3. Micellar Water**
- **En Hafif**: Micelle molekülleri kiri çeker
- **Makyaj Gücü**: Hafif-orta makyaj
- **Kime Uygun**: Hassas, yağlı cilt, hızlı temizlik
- **Not**: Tek başına yeterli olmayabilir

**4. Cleansing Milk/Cream**
- **Kremalı Doku**: Hafif yağlı
- **Makyaj Gücü**: Hafif-orta
- **Kime Uygun**: Kuru, hassas cilt

### Birinci Adım Uygulama Tekniği

**Adım Adım:**

1. **Kuru Elle, Kuru Yüze**
   - Elleriniz ve yüzünüz tamamen kuru olmalı
   - Bu kritik! Su yağın emülsifikasyonunu başlatır

2. **Cömert Miktar**
   - Yağ: 2-3 pompa
   - Balm: Fındık büyüklüğü
   - Micellar: Pamuk pedi ıslatacak kadar

3. **Nazik Masaj (1-2 dakika)**
   - Dairesel hareketlerle yüze uygulayın
   - Gözlere, dudaklara, boyuna dahil edin
   - Göz makyajında hafifçe bastırın, ovmayın
   - Gözenekli bölgelere (T-zone) odaklanın

4. **Emülsifikasyon**
   - Ellerinizi ıslatın
   - Yağı yüzünüzde sütlü beyaz emülsiyona dönüştürün
   - 30 saniye daha masaj yapın
   - Bu adım kirlerin serbest kalmasını sağlar

5. **Ilık Suyla Durulama**
   - Bol bol durulamak önemli
   - Yağ kalıntısı kalmamalı
   - Sıcak değil, ılık su kullanın

**Dikkat Edilmesi Gerekenler:**

✅ Yeterli miktar kullanın - Cimri davranmayın
✅ Zamanınızı ayırın - Acele etmeyin
✅ Boyun ve çene hattını dahil edin
✅ Hassas göz çevresine nazik olun

❌ Islak yüze uygulamayın
❌ Sert ovmayın
❌ Yetersiz durulama yapmayın

## İkinci Adım: Su Bazlı Temizleyici

### Su Bazlı Temizleyici Türleri

**1. Jel Temizleyici**
- **Doku**: Şeffaf, jel
- **Kime Uygun**: Yağlı, karma, akne eğilimli cilt
- **Özellik**: Hafif köpürür, derinlemesine temizler
- **İçerik**: Salisilik asit, tea tree, niasinamid

**2. Köpük/Foam Temizleyici**
- **Doku**: Köpüklü
- **Kime Uygun**: Yağlı cilt
- **Dikkat**: Aşırı kurutucu olabilir, sülfatsız seçin

**3. Krem/Milk Temizleyici**
- **Doku**: Kremasıı
- **Kime Uygun**: Kuru, hassas cilt
- **Özellik**: Az veya hiç köpürmez, besleyici

**4. Micellar Water**
- **İkinci Adım**: Evet, hem birinci hem ikinci adımda kullanılabilir
- **Kime Uygun**: Hassas, tembel (hızlı rutin isteyenler)

### Cilt Tipine Göre Seçim

**Kuru Cilt:**
- Birinci: Cleansing balm/oil
- İkinci: Krem/milk temizleyici
- İçerik: Hyaluronik asit, gliserin, seramid

**Yağlı Cilt:**
- Birinci: Hafif cleansing oil
- İkinci: Jel/foam temizleyici
- İçerik: Salisilik asit, niasinamid, tea tree

**Karma Cilt:**
- Birinci: Cleansing oil
- İkinci: Dengeli jel temizleyici
- İçerik: Niasinamid, hyaluronik asit

**Hassas Cilt:**
- Birinci: Micellar water veya hafif oil
- İkinci: Krem/milk temizleyici
- İçerik: Fragrance-free, aloe vera, centella

**Akne Eğilimli:**
- Birinci: Non-comedogenic oil (jojoba, squalane)
- İkinci: Salisilik asit jel
- İçerik: BHA, tea tree, niasinamid

### İkinci Adım Uygulama

1. **Yüzü Islatın**
   - Ilık suyla ıslatın

2. **Temizleyiciyi Uygulayın**
   - Avuç içinde köpürtün (köpürüyorsa)
   - Yüze nazikçe dairesel hareketlerle masaj yapın
   - 30-60 saniye

3. **Durulay ın**
   - Bol ılık suyla
   - Ürün kalıntısı kalmamalı

4. **Kurulayın**
   - Yumuşak havluyla hafifçe tampone edin
   - Ovmayın

## Ne Zaman Çift Temizleme Yapılmalı?

### Akşam Rutini - MUTLAKA

Akşam çift temizleme şarttır çünkü:
- Gün boyu biriken makyaj, güneş kremi, kir, sebum
- Hava kirliliği ve toksinler
- Cilt gece boyunca yenilenecek, temiz olmalı

**Akşam Rutin Sırası:**
1. Yağ bazlı temizleyici
2. Su bazlı temizleyici
3. Tonik (opsiyonel)
4. Treatment/serum
5. Göz kremi
6. Nemlendirici

### Sabah Rutini - Opsiyonel

Sabah çift temizleme genellikle gereksiz:
- Sadece gecelık ürün ve sebum var
- Tek temizleyici yeterli (hatta sadece su bile olabilir)

**İstisnalar:**
- Çok yağlı cilt (gece sebum üretimi fazla)
- Ağır gece kremi/yağı kullandıysanız
- Terli uyandıysanız

## Yaygın Hatalar ve Çözümleri

### Hata 1: Her İki Adımda da Aynı Temizleyici

**Sorun**: İki kez aynı temizleyici çift temizleme değildir
**Çözüm**: Birinci yağ bazlı, ikinci su bazlı olmalı

### Hata 2: Yetersiz Emülsifikasyon

**Sorun**: Yağ kalıntısı, gözenek tıkanması
**Çözüm**: Suyla iyice emülsifiye edin, sütlü beyaz görünüm

### Hata 3: Aşırı Temizlik

**Sorun**: Sabah-akşam iki kez çift temizleme, bariyer hasarı
**Çözüm**: Sadece akşam çift temizleyin

### Hata 4: Çok Sert Temizleyiciler

**Sorun**: Sülfat, alkol içeren ürünler, kuruluğa neden olur
**Çözüm**: Nazik, pH dengeli, sülfatsız seçin

### Hata 5: Acele Etmek

**Sorun**: 30 saniye hızlı temizlik etkisiz
**Çözüm**: Toplam 3-4 dakika ayırın

## Özel Durumlar

### Makyajsız Günler

**Güneş Kremi Sürdünüz mü?**
- Evet → Çift temizleme yapın (güneş kremi yağda çözünür)
- Hayır → Tek temizleyici yeterli

### Minimal Makyaj

- Sadıce BB krem, pudra → Çift temizleme yine iyi
- Micellar water + nazik temizleyici yeterli olabilir

### Waterproof Makyaj

- Mutlaka yağ/balm bazlı temizleyici
- Göz makyajı için ayrı göz makyaj temizleyici kullanabilirsiniz

### Hassas Cilt/Rozase

- Çok nazik ürünler seçin
- Micellar water + krem temizleyici
- Aşırı ovmaktan kaçının

## Çift Temizleme Sonrası Bakım

Temizlik sonrası cilt:
- En emilime açık haldedir
- Aktif bileşenler en etkilidir
- Hemen bakım rutinine geçin

**Hemen Sonra:**
1. **Tonik** (30 saniye içinde, cilt henüz nemliyken)
2. **Serum/Treatment** (emilimi maksimum)
3. **Göz Kremi**
4. **Nemlendirici** (3-5 dakika içinde, nem kilitlenmeli)

## SSS

**Her gün çift temizleme gerekli mi?**
Makyaj ve güneş kremi kullandığınız her akşam evet.

**Sabah da yapılmalı mı?**
Genellikle hayır, tek temizleyici yeterli.

**Hassas cilt için uygun mu?**
Evet, nazik ürünler seçerseniz.

**Çift temizleme cildi kurutur mu?**
Hayır, doğru ürünler seçerseniz. Bariyer sağlığını korur.

**Ne kadar sürmeli?**
Toplam 3-4 dakika ideal.

**Yağlı cilt yağ temizleyici kullanabilir mi?**
Kesinlikle! "Yağ yağı çözer" - sebumu dengelemede etkili.

## Sonuç

Çift temizleme, cildinize yapabileceğiniz en iyi yatırımlardan biridir. Doğru yapıldığında:

🔹 Derin, etkili temizlik
🔹 Gözenek sağlığı
🔹 Akne ve siyah nokta önleme
🔹 Ürün emilimini maksimize etme
🔹 Parlak, sağlıklı cilt

**Başlangıç İçin:**
1. Cildinize uygun iki temizleyici seçin
2. Akşam rutinine entegre edin
3. Sabırlı olun - cildiniz adapte olacak
4. 2-4 hafta sonra farkı göreceksiniz

Temiz cilt, sağlıklı cildin temelidir. Çift temizleme yöntemiyle bu temeli güçlendirin!`}},JM={"morning-skincare-routine":{title:"Morning Skincare Routine: Step-by-Step Guide",excerpt:"How to create the perfect morning routine to prepare your skin for the day? Here are professional tips...",content:`
# Morning Skincare Routine: Step-by-Step Guide

A morning skincare routine is crucial for protecting your skin throughout the day and achieving a healthy appearance. Here are the steps for an ideal morning routine:

## 1. Cleansing
Gently cleanse oil, sweat, and dead skin cells accumulated overnight. Use a gentle cleanser suitable for your skin type.

## 2. Toner
Apply a toner that regulates skin's pH balance and tightens pores. This step allows better absorption of subsequent products.

## 3. Serum
Antioxidant-rich products like Vitamin C serum are ideal for mornings. They protect your skin from environmental factors and brighten.

## 4. Eye Cream
Moisturize the delicate eye area with a specially formulated eye cream. Effective against puffiness and dark circles.

## 5. Moisturizer
Choose a moisturizer suitable for your skin type. This step maintains skin's moisture balance and provides a smooth appearance.

## 6. Sunscreen (SPF)
The most important step of your morning routine! Always use a broad-spectrum sunscreen with at least SPF 30.

## Recommendations
- Always choose products according to your skin type
- Progress from lighter textured products to heavier ones
- Wait 30 seconds between each product
- Be consistent - regular use is essential to see results
    `},"vitamin-c-benefits":{title:"Vitamin C: Power Source for Your Skin",excerpt:"Why are Vitamin C serums so popular? Discover the incredible benefits for your skin...",content:`
# Vitamin C: Power Source for Your Skin

Vitamin C (Ascorbic Acid) is one of the most powerful and effective ingredients in skincare. Here are its incredible benefits for your skin:

## Benefits of Vitamin C for Skin

### 1. Powerful Antioxidant Protection
Provides effective protection against free radicals and prevents early signs of aging.

### 2. Brightening Effect
Evens skin tone, reduces spots, and gives your skin natural radiance.

### 3. Boosts Collagen Production
Supports skin's elasticity and firmness, reduces the appearance of wrinkles.

### 4. Repairs Sun Damage
Helps repair damage caused by UV rays (must be used with sunscreen).

### 5. Reduces Hyperpigmentation
Effective on dark spots and uneven tone.

## How to Use?

### Right Concentration
10-15% for beginners, 15-20% for experienced users is ideal.

### Application Time
Apply to clean, dry skin in the morning. Sunscreen use is essential!

### Storage Conditions
Vitamin C is affected by light and air. Store in dark bottles and cool environments.

## Important Notes
- Slight tingling on first use may be normal
- If using with retinol, use one in the morning and the other at night
- You'll get the best results with 3 months of regular use
    `},"summer-sun-protection":{title:"Summer Sun Protection: Everything You Need to Know",excerpt:"How do you protect your skin from harmful sun effects in summer? Here are professional tips...",content:`
# Summer Sun Protection: Everything You Need to Know

Sun protection is the most important skincare step that should be done every day, not just at the beach.

## What is SPF?

SPF (Sun Protection Factor) indicates the product's level of protection against UVB rays.

### SPF Selection
- Daily use: At least SPF 30
- Beach/outdoor activities: SPF 50+
- Sensitive skin: SPF 50+ with physical filters

## Broad Spectrum Protection

Choose products that protect against both UVA and UVB rays:
- **UVA**: Aging, wrinkles, spots
- **UVB**: Burns, redness, skin cancer risk

## Proper Application

### Amount
One teaspoon for face (approximately 2mg/cm²)

### Application Time
15-30 minutes before sun exposure

### Reapplication Frequency
Every 2 hours, definitely after swimming or sweating

## Extra Tips for Summer

1. **Hat and Sunglasses**: Physical protection is also important
2. **Stay in Shade**: Especially between 11:00-16:00
3. **Moisturizing SPF**: Practical and effective
4. **Lip Protection**: Use SPF lip balms
5. **After-Sun Care**: Soothing and repairing products after sun

## Common Mistakes

❌ Applying SPF only to face (don't forget neck, ears, back of hands)
❌ Using insufficient amount
❌ Not using on cloudy days
❌ Forgetting to reapply
❌ Skipping under makeup

## Special Cases

### Acne-Prone Skin
Prefer oil-free, non-comedogenic formulas.

### Sensitive Skin
Use physical filter products (zinc oxide, titanium dioxide).

### Oily Skin
Gel or fluid formulas are ideal.
    `},"night-cream-importance":{title:"The Importance of Night Cream",excerpt:"Why are night creams different? How do they support your skin renewal during sleep?",content:`# The Importance of Night Cream

During sleep, our skin enters repair mode. Night creams are specially formulated to support this natural process with richer textures, higher active ingredient concentrations, and regenerative ingredients.`},"eye-cream-guide":{title:"Eye Cream Usage Guide",excerpt:"The delicate structure around eyes requires special care. Everything you need to know about eye cream selection and usage...",content:`# Eye Cream Usage Guide

The skin around the eyes is the thinnest and most sensitive area of the body. Therefore, it requires care with specially formulated products including caffeine for puffiness, vitamin K for dark circles, and peptides for fine lines.`},"arbutin-skin-brightening":{title:"Skin Brightening with Arbutin",excerpt:"Arbutin is one of the most effective ingredients against skin spots. How does it work and how to use it?",content:`# Skin Brightening with Arbutin

Arbutin is a natural and safe ingredient used against skin spots and tone irregularities. Alpha-Arbutin is more stable and effective at 0.5-2% concentration. It inhibits tyrosinase enzyme, regulating melanin production.`},"chemical-peeling-guide":{title:"Chemical Peeling Guide",excerpt:"Chemical peels are one of the most effective methods of skin renewal. Guide for correct selection and application...",content:`# Chemical Peeling Guide

Chemical peels are acid-based products that remove dead skin cells and promote skin renewal. AHA (glycolic, lactic acid) for surface renewal, BHA (salicylic acid) for oily and acne-prone skin, PHA for sensitive skin.`},"hydration-secrets":{title:"Skin Hydration Secrets",excerpt:"How to achieve hydrated skin? Everything you need to know about moisturizing...",content:`# Skin Hydration Secrets

Hydrated skin is the foundation of healthy skin. Hydration is adding water from within (hyaluronic acid, glycerin), moisturizing is preventing moisture loss from outside (ceramides, squalane). Use both together for best results.`},"anti-aging-strategies":{title:"Anti-Aging Strategies: Youth Elixir",excerpt:"Scientifically proven methods to delay and reduce signs of aging...",content:`# Anti-Aging Strategies: Youth Elixir

Gold standard anti-aging ingredients: Retinol (cell renewal), Vitamin C (collagen synthesis), peptides (firmness), hyaluronic acid (volume), niacinamide (barrier strengthening). SPF is the most important anti-aging product!`},"toner-benefits":{title:"Benefits of Using Toner",excerpt:"Often skipped but very important step in skincare routine: Toner. Why should you use it?",content:`# Benefits of Using Toner

Toner is a water-based liquid product that acts as a bridge between cleansing and serum/moisturizer. It regulates pH balance, removes remaining impurities, tightens pores, and increases product absorption.`},"winter-skincare-tips":{title:"Winter Skincare Tips",excerpt:"How do you protect your skin from cold weather in winter?",content:`# Winter Skincare Tips

Winter requires special care for your skin. Use richer formulas, add face oils, avoid hot water, use humidifiers, and never skip SPF even in winter.`},"acne-prone-skin-care":{title:"Acne-Prone Skin Care",excerpt:"How to create the right skincare routine for acne problems?",content:`# Acne-Prone Skin Care

Effective methods in fighting acne: gentle cleansing, salicylic acid for exfoliation, niacinamide for calming, lightweight moisturizers, and always non-comedogenic products.`},"double-cleansing-method":{title:"Double Cleansing Method",excerpt:"The secret of Korean skincare: Double cleansing method",content:`# Double Cleansing Method

Deep cleanse your skin: First step with oil-based cleanser (removes makeup and sunscreen), second step with water-based cleanser (cleans skin). This method ensures thorough cleansing without stripping skin.`},"retinol-beginners-guide":{title:"Retinol Guide for Beginners",excerpt:"How to start using retinol? Here is the step-by-step guide",content:`# Retinol Guide for Beginners

Important points in retinol use: Start with low concentration (0.25-0.5%), use only at night, introduce gradually (2-3 times per week), expect retinization period, and SPF is mandatory!`},"sensitive-skin-solutions":{title:"Sensitive Skin Solutions",excerpt:"The most suitable products and methods for your sensitive skin",content:`# Sensitive Skin Solutions

Important points in sensitive skin care: fragrance-free products, minimal ingredients, calming components (centella, allantoin), patch test before use, avoid harsh exfoliants.`},"skin-types-guide":{title:"Skin Types Guide",excerpt:"How do you determine your skin type and which products to use?",content:`# Skin Types Guide

Skin care recommendations by skin type: Normal (balanced products), Oily (lightweight, oil-free), Dry (rich, nourishing), Combination (zone-specific), Sensitive (minimal, fragrance-free).`},"hyaluronic-acid-power":{title:"The Power of Hyaluronic Acid",excerpt:"What you need to know about hyaluronic acid, the source of moisture",content:`# The Power of Hyaluronic Acid

Intensive moisturizing with hyaluronic acid: Holds 1000 times its weight in water, suitable for all skin types, apply on damp skin, different molecular weights penetrate different layers.`},"sheet-mask-secrets":{title:"Sheet Mask Secrets",excerpt:"How to use sheet masks correctly?",content:`# Sheet Mask Secrets

Sheet mask usage guide: Apply on clean skin, leave for 15-20 minutes, massage remaining essence, use 2-3 times per week, choose according to your skin needs.`},"spf-importance":{title:"The Importance of SPF Use",excerpt:"Why should you use SPF every day? Here is the answer",content:`# The Importance of SPF Use

The importance of sun protection and correct use: Use every day (even indoors), at least SPF 30, apply enough amount, reapply every 2 hours, broad spectrum protection is essential.`},"evening-routine-essentials":{title:"Evening Routine Essentials",excerpt:"How to create a perfect evening skincare routine?",content:`# Evening Routine Essentials

Recommendations for your night care routine: Double cleansing, toner, active treatments (retinol/acids), eye cream, serum, rich night cream, face oil (optional for dry skin).`}},eR={"morning-skincare-routine":{title:"روتين العناية بالبشرة الصباحي: دليل خطوة بخطوة",excerpt:"كيف تنشئ روتيناً صباحياً مثالياً لتحضير بشرتك لليوم؟ إليك النصائح المهنية...",content:`
# روتين العناية بالبشرة الصباحي: دليل خطوة بخطوة

روتين العناية بالبشرة الصباحي أمر بالغ الأهمية لحماية بشرتك طوال اليوم والحصول على مظهر صحي. إليك الخطوات للروتين الصباحي المثالي:

## 1. التنظيف
نظف بلطف الزيوت والعرق وخلايا الجلد الميتة المتراكمة طوال الليل. استخدم منظفاً لطيفاً مناسباً لنوع بشرتك.

## 2. التونر
ضع تونر ينظم توازن درجة حموضة البشرة ويشد المسام. تسمح هذه الخطوة بامتصاص أفضل للمنتجات التالية.

## 3. السيروم
المنتجات الغنية بمضادات الأكسدة مثل سيروم فيتامين C مثالية للصباح. تحمي بشرتك من العوامل البيئية وتضيئها.

## 4. كريم العين
رطب منطقة العين الحساسة بكريم عين مصمم خصيصاً. فعال ضد الانتفاخ والهالات السوداء.

## 5. المرطب
اختر مرطباً مناسباً لنوع بشرتك. تحافظ هذه الخطوة على توازن رطوبة البشرة وتوفر مظهراً ناعماً.

## 6. واقي الشمس (SPF)
أهم خطوة في روتينك الصباحي! استخدم دائماً واقي شمس واسع الطيف بعامل حماية 30 على الأقل.

## التوصيات
- اختر المنتجات دائماً حسب نوع بشرتك
- انتقل من المنتجات ذات القوام الخفيف إلى الأثقل
- انتظر 30 ثانية بين كل منتج
- كن منتظماً - الاستخدام المنتظم ضروري لرؤية النتائج
    `},"vitamin-c-benefits":{title:"فيتامين C: مصدر قوة لبشرتك",excerpt:"لماذا أمصال فيتامين C شائعة جداً؟ اكتشف الفوائد المذهلة لبشرتك...",content:`
# فيتامين C: مصدر قوة لبشرتك

فيتامين C (حمض الأسكوربيك) هو أحد أقوى المكونات وأكثرها فعالية في العناية بالبشرة. إليك فوائده المذهلة لبشرتك:

## فوائد فيتامين C للبشرة

### 1. حماية قوية من مضادات الأكسدة
يوفر حماية فعالة ضد الجذور الحرة ويمنع علامات الشيخوخة المبكرة.

### 2. تأثير التفتيح
يوحد لون البشرة، يقلل البقع، ويمنح بشرتك إشراقة طبيعية.

### 3. يعزز إنتاج الكولاجين
يدعم مرونة البشرة وثباتها، يقلل من ظهور التجاعيد.

### 4. يصلح أضرار الشمس
يساعد في إصلاح الأضرار الناجمة عن الأشعة فوق البنفسجية (يجب استخدامه مع واقي الشمس).

### 5. يقلل فرط التصبغ
فعال على البقع الداكنة واللون غير المتساوي.

## كيفية الاستخدام؟

### التركيز الصحيح
10-15٪ للمبتدئين، 15-20٪ للمستخدمين ذوي الخبرة مثالي.

### وقت التطبيق
ضعه على بشرة نظيفة وجافة في الصباح. استخدام واقي الشمس ضروري!

### ظروف التخزين
يتأثر فيتامين C بالضوء والهواء. احفظه في زجاجات داكنة وبيئات باردة.

## ملاحظات مهمة
- وخز خفيف عند الاستخدام الأول قد يكون طبيعياً
- إذا كنت تستخدمه مع الريتينول، استخدم أحدهما في الصباح والآخر في الليل
- ستحصل على أفضل النتائج مع 3 أشهر من الاستخدام المنتظم
    `},"summer-sun-protection":{title:"الحماية من الشمس في الصيف: كل ما تحتاج معرفته",excerpt:"كيف تحمي بشرتك من تأثيرات الشمس الضارة في الصيف؟ إليك النصائح المهنية...",content:`
# الحماية من الشمس في الصيف: كل ما تحتاج معرفته

الحماية من الشمس هي أهم خطوة للعناية بالبشرة يجب القيام بها كل يوم، وليس فقط على الشاطئ.

## ما هو SPF؟

SPF (عامل الحماية من الشمس) يشير إلى مستوى حماية المنتج ضد أشعة UVB.

### اختيار SPF
- الاستخدام اليومي: SPF 30 على الأقل
- الشاطئ/الأنشطة الخارجية: SPF 50+
- البشرة الحساسة: SPF 50+ مع مرشحات فيزيائية

## الحماية واسعة الطيف

اختر المنتجات التي تحمي من كل من أشعة UVA و UVB:
- **UVA**: الشيخوخة، التجاعيد، البقع
- **UVB**: الحروق، الاحمرار، خطر سرطان الجلد

## التطبيق الصحيح

### الكمية
ملعقة شاي للوجه (حوالي 2 ملغ/سم²)

### وقت التطبيق
15-30 دقيقة قبل التعرض للشمس

### تكرار إعادة التطبيق
كل ساعتين، بالتأكيد بعد السباحة أو التعرق

## نصائح إضافية للصيف

1. **القبعة والنظارات الشمسية**: الحماية الجسدية مهمة أيضاً
2. **البقاء في الظل**: خاصة بين 11:00-16:00
3. **SPF مرطب**: عملي وفعال
4. **حماية الشفاه**: استخدم مرطبات شفاه تحتوي على SPF
5. **العناية بعد الشمس**: منتجات مهدئة ومصلحة بعد الشمس

## الأخطاء الشائعة

❌ وضع SPF على الوجه فقط (لا تنس الرقبة، الأذنين، ظهر اليدين)
❌ استخدام كمية غير كافية
❌ عدم الاستخدام في الأيام الغائمة
❌ نسيان إعادة التطبيق
❌ تخطي ما تحت المكياج

## حالات خاصة

### البشرة المعرضة لحب الشباب
فضل التركيبات الخالية من الزيوت وغير المسببة لانسداد المسام.

### البشرة الحساسة
استخدم منتجات ذات مرشحات فيزيائية (أكسيد الزنك، ثاني أكسيد التيتانيوم).

### البشرة الدهنية
التركيبات الجل أو السائلة مثالية.
    `},"night-cream-importance":{title:"أهمية كريم الليل",excerpt:"لماذا تختلف كريمات الليل؟ كيف تدعم تجديد بشرتك أثناء النوم؟",content:`# أهمية كريم الليل

أثناء النوم، تدخل بشرتنا في وضع الإصلاح. كريمات الليل مصممة خصيصاً لدعم هذه العملية الطبيعية مع قوام أغنى، وتركيزات أعلى من المكونات النشطة، ومكونات متجددة.`},"eye-cream-guide":{title:"دليل استخدام كريم العين",excerpt:"البنية الحساسة حول العينين تتطلب عناية خاصة. كل ما تحتاج معرفته عن اختيار واستخدام كريم العين...",content:`# دليل استخدام كريم العين

الجلد حول العينين هو أرق وأكثر المناطق حساسية في الجسم. لذلك يتطلب عناية بمنتجات مصممة خصيصاً تشمل الكافيين للانتفاخ، فيتامين K للهالات السوداء، والببتيدات للخطوط الدقيقة.`},"arbutin-skin-brightening":{title:"تفتيح البشرة بالأربيوتين",excerpt:"الأربيوتين أحد أكثر المكونات فعالية ضد بقع البشرة. كيف يعمل وكيف يستخدم؟",content:`# تفتيح البشرة بالأربيوتين

الأربيوتين مكون طبيعي وآمن يستخدم ضد بقع البشرة وعدم انتظام اللون. ألفا-أربيوتين أكثر استقراراً وفعالية بتركيز 0.5-2٪. يثبط إنزيم التيروزيناز، منظماً إنتاج الميلانين.`},"chemical-peeling-guide":{title:"دليل التقشير الكيميائي",excerpt:"التقشير الكيميائي أحد أكثر طرق تجديد البشرة فعالية. دليل للاختيار والتطبيق الصحيح...",content:`# دليل التقشير الكيميائي

التقشير الكيميائي عبارة عن منتجات قائمة على الأحماض تزيل خلايا الجلد الميتة وتعزز تجديد البشرة. AHA (الجليكوليك، اللاكتيك) للتجديد السطحي، BHA (الساليسيليك) للبشرة الدهنية وحب الشباب، PHA للبشرة الحساسة.`},"hydration-secrets":{title:"أسرار ترطيب البشرة",excerpt:"كيف تحصل على بشرة رطبة؟ كل ما تحتاج معرفته عن الترطيب...",content:`# أسرار ترطيب البشرة

البشرة الرطبة أساس البشرة الصحية. الترطيب هو إضافة الماء من الداخل (حمض الهيالورونيك، الجليسرين)، والتغذية هي منع فقدان الرطوبة من الخارج (السيراميد، سكوالين). استخدم كليهما معاً لأفضل النتائج.`},"anti-aging-strategies":{title:"استراتيجيات مكافحة الشيخوخة: إكسير الشباب",excerpt:"طرق مثبتة علمياً لتأخير وتقليل علامات الشيخوخة...",content:`# استراتيجيات مكافحة الشيخوخة: إكسير الشباب

المكونات القياسية الذهبية لمكافحة الشيخوخة: الريتينول (تجديد الخلايا)، فيتامين C (تخليق الكولاجين)، الببتيدات (الثبات)، حمض الهيالورونيك (الحجم)، النياسيناميد (تقوية الحاجز). SPF هو أهم منتج لمكافحة الشيخوخة!`},"toner-benefits":{title:"فوائد استخدام التونر",excerpt:"خطوة غالباً ما يتم تخطيها ولكنها مهمة جداً في روتين العناية بالبشرة: التونر. لماذا يجب استخدامه؟",content:`# فوائد استخدام التونر

التونر منتج سائل قائم على الماء يعمل كجسر بين التنظيف والسيروم/المرطب. ينظم توازن الحموضة، يزيل الشوائب المتبقية، يشد المسام، ويزيد من امتصاص المنتج.`},"winter-skincare-tips":{title:"نصائح العناية بالبشرة في الشتاء",excerpt:"كيف تحمي بشرتك من الطقس البارد في الشتاء؟",content:`# نصائح العناية بالبشرة في الشتاء

الشتاء يتطلب عناية خاصة لبشرتك. استخدم تركيبات أغنى، أضف زيوت الوجه، تجنب الماء الساخن، استخدم أجهزة الترطيب، ولا تتخطى SPF حتى في الشتاء.`},"acne-prone-skin-care":{title:"العناية بالبشرة المعرضة لحب الشباب",excerpt:"كيف تنشئ روتين العناية بالبشرة المناسب لمشاكل حب الشباب؟",content:`# العناية بالبشرة المعرضة لحب الشباب

طرق فعالة في مكافحة حب الشباب: تنظيف لطيف، حمض الساليسيليك للتقشير، النياسيناميد للتهدئة، مرطبات خفيفة، ودائماً منتجات غير مسببة لانسداد المسام.`},"double-cleansing-method":{title:"طريقة التنظيف المزدوج",excerpt:"سر العناية بالبشرة الكورية: طريقة التنظيف المزدوج",content:`# طريقة التنظيف المزدوج

نظف بشرتك بعمق: الخطوة الأولى بمنظف زيتي (يزيل المكياج وواقي الشمس)، الخطوة الثانية بمنظف مائي (ينظف البشرة). هذه الطريقة تضمن تنظيفاً شاملاً دون تجريد البشرة.`},"retinol-beginners-guide":{title:"دليل الريتينول للمبتدئين",excerpt:"كيف تبدأ في استخدام الريتينول؟ إليك الدليل خطوة بخطوة",content:`# دليل الريتينول للمبتدئين

نقاط مهمة في استخدام الريتينول: ابدأ بتركيز منخفض (0.25-0.5٪)، استخدم فقط في الليل، قدم تدريجياً (2-3 مرات في الأسبوع)، توقع فترة التكيف، وSPF إلزامي!`},"sensitive-skin-solutions":{title:"حلول البشرة الحساسة",excerpt:"المنتجات والطرق الأكثر ملاءمة لبشرتك الحساسة",content:`# حلول البشرة الحساسة

نقاط مهمة في العناية بالبشرة الحساسة: منتجات خالية من العطور، مكونات قليلة، مكونات مهدئة (سنتيلا، ألانتوين)، اختبار قبل الاستخدام، تجنب المقشرات القاسية.`},"skin-types-guide":{title:"دليل أنواع البشرة",excerpt:"كيف تحدد نوع بشرتك وأي المنتجات تستخدم؟",content:`# دليل أنواع البشرة

توصيات العناية بالبشرة حسب نوع البشرة: عادية (منتجات متوازنة)، دهنية (خفيفة، خالية من الزيوت)، جافة (غنية، مغذية)، مختلطة (خاصة بالمنطقة)، حساسة (قليلة، خالية من العطور).`},"hyaluronic-acid-power":{title:"قوة حمض الهيالورونيك",excerpt:"ما تحتاج معرفته عن حمض الهيالورونيك، مصدر الرطوبة",content:`# قوة حمض الهيالورونيك

ترطيب مكثف بحمض الهيالورونيك: يحمل 1000 ضعف وزنه في الماء، مناسب لجميع أنواع البشرة، ضعه على البشرة الرطبة، أوزان جزيئية مختلفة تخترق طبقات مختلفة.`},"sheet-mask-secrets":{title:"أسرار الأقنعة الورقية",excerpt:"كيف تستخدم الأقنعة الورقية بشكل صحيح؟",content:`# أسرار الأقنعة الورقية

دليل استخدام القناع الورقي: ضعه على البشرة النظيفة، اتركه لمدة 15-20 دقيقة، دلك الجوهر المتبقي، استخدمه 2-3 مرات في الأسبوع، اختر وفقاً لاحتياجات بشرتك.`},"spf-importance":{title:"أهمية استخدام SPF",excerpt:"لماذا يجب استخدام SPF كل يوم؟ إليك الإجابة",content:`# أهمية استخدام SPF

أهمية الحماية من الشمس والاستخدام الصحيح: استخدم كل يوم (حتى في الداخل)، على الأقل SPF 30، ضع كمية كافية، أعد التطبيق كل ساعتين، الحماية واسعة الطيف ضرورية.`},"evening-routine-essentials":{title:"أساسيات الروتين المسائي",excerpt:"كيف تنشئ روتين مثالي للعناية بالبشرة المسائية؟",content:`# أساسيات الروتين المسائي

توصيات لروتين العناية الليلية: التنظيف المزدوج، التونر، العلاجات النشطة (ريتينول/أحماض)، كريم العين، السيروم، كريم ليلي غني، زيت الوجه (اختياري للبشرة الجافة).`}},tR={tr:{...WM,...QM,...XM,...ZM},en:JM,ar:eR},rm=(e,t)=>{var n;return((n=tR[e])==null?void 0:n[t])||null},nR=()=>{const{language:e}=_e(),t=at[e],[n,a]=f.useState(""),[i,l]=f.useState("all"),s=[{id:"all",name:t.blog.categories.all},{id:"daily-care",name:t.blog.categories.trends||"Daily Care"},{id:"ingredients",name:t.blog.categories.skincare||"Ingredients"},{id:"sun-care",name:"Sun Care"},{id:"anti-aging",name:"Anti-Aging"},{id:"treatments",name:t.blog.categories.routine||"Treatments"}],c=im.map(u=>{const d=rm(e,u.id);return{...u,title:(d==null?void 0:d.title)||u.id,excerpt:(d==null?void 0:d.excerpt)||""}}).filter(u=>{const d=u.title.toLowerCase().includes(n.toLowerCase())||u.excerpt.toLowerCase().includes(n.toLowerCase()),m=i==="all"||u.category===i;return d&&m});return r.jsxs(qe,{children:[r.jsx(zn,{title:t.blog.title,subtitle:t.blog.searchPlaceholder,backgroundImage:s0,backgroundImageMobile:o0}),r.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[r.jsxs("div",{className:"mb-12 space-y-6",children:[r.jsxs("div",{className:"relative max-w-md mx-auto",children:[r.jsx(Da,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5"}),r.jsx(he,{type:"text",placeholder:t.blog.searchPlaceholder,value:n,onChange:u=>a(u.target.value),className:"pl-10"})]}),r.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:s.map(u=>r.jsx(ne,{variant:i===u.id?"default":"outline",onClick:()=>l(u.id),className:"text-sm",children:u.name},u.id))})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:c.map(u=>r.jsx(ae,{to:`/blog/${u.id}`,className:"group cursor-pointer block",children:r.jsxs("div",{className:"bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-luxury transition-shadow duration-300 h-[400px] relative",children:[r.jsx("div",{className:"absolute inset-0",children:r.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),r.jsx("div",{className:"absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30",children:r.jsxs("div",{className:"p-6 h-full flex flex-col",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center gap-4 text-sm text-black/70 mb-3",children:[r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(Nv,{className:"w-4 h-4"}),new Date(u.date).toLocaleDateString(e==="tr"?"tr-TR":e==="ar"?"ar-SA":"en-US")]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(Dv,{className:"w-4 h-4"}),u.author]})]}),r.jsx("h3",{className:"text-lg font-semibold group-hover:text-primary transition-colors text-black mb-2 line-clamp-2",children:u.title}),r.jsx("p",{className:"text-black/70 text-sm line-clamp-2 mb-3",children:u.excerpt})]}),r.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[r.jsxs("span",{className:"text-sm text-black/60",children:[u.readTime," ",e==="tr"?"dk":e==="ar"?"دقيقة":"min"]}),r.jsxs("div",{className:"flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all",children:[t.blog.readMore,r.jsx(yl,{className:"w-4 h-4"})]})]})]})})]})},u.id))}),c.length===0&&r.jsx("div",{className:"text-center py-16",children:r.jsx("p",{className:"text-muted-foreground text-lg",children:"No articles found"})})]})]})},aR=()=>{const{id:e}=Tf(),{language:t}=_e(),n=im.find(i=>i.id===e),a=e?rm(t,e):null;return!n||!a?r.jsx(WA,{to:"/blog",replace:!0}):r.jsxs(qe,{children:[r.jsx(zn,{title:a.title,subtitle:a.excerpt,backgroundImage:s0,backgroundImageMobile:o0}),r.jsxs("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:[r.jsxs(ae,{to:"/blog",className:"inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8",children:[r.jsx(jv,{className:"w-4 h-4"}),t==="tr"?"Bloga Dön":t==="ar"?"العودة إلى المدونة":"Back to Blog"]}),r.jsxs("div",{className:"flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Nv,{className:"w-5 h-5"}),r.jsx("span",{children:new Date(n.date).toLocaleDateString(t==="tr"?"tr-TR":t==="ar"?"ar-SA":"en-US",{year:"numeric",month:"long",day:"numeric"})})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Dv,{className:"w-5 h-5"}),r.jsx("span",{children:n.author})]}),r.jsxs("div",{children:[n.readTime," ",t==="tr"?"dk okuma":t==="ar"?"دقيقة قراءة":"min read"]})]}),r.jsx("div",{className:"aspect-video mb-12 rounded-lg overflow-hidden",children:r.jsx("img",{src:n.image,alt:a.title,className:"w-full h-full object-cover"})}),r.jsx("article",{className:"prose prose-lg dark:prose-invert max-w-none",children:r.jsx("div",{dangerouslySetInnerHTML:{__html:a.content.replace(/\n/g,"<br />")},className:"whitespace-pre-wrap"})}),r.jsxs("div",{className:"mt-16 pt-16 border-t",children:[r.jsx("h2",{className:"text-2xl font-bold mb-8",children:t==="tr"?"İlgili Yazılar":t==="ar"?"مقالات ذات صلة":"Related Articles"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:im.filter(i=>i.id!==e&&i.category===n.category).slice(0,2).map(i=>{const l=rm(t,i.id);return r.jsxs(ae,{to:`/blog/${i.id}`,className:"group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all",children:[r.jsx("div",{className:"aspect-video overflow-hidden",children:r.jsx("img",{src:i.image,alt:l==null?void 0:l.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"})}),r.jsxs("div",{className:"p-6",children:[r.jsx("h3",{className:"text-lg font-semibold group-hover:text-primary transition-colors mb-2",children:l==null?void 0:l.title}),r.jsx("p",{className:"text-muted-foreground text-sm line-clamp-2",children:l==null?void 0:l.excerpt})]})]},i.id)})})]})]})]})},iR="/assets/toob_banner-PA3sQ-8W.jpg",rR="/assets/toob_banner_mobile-CJoHFtNX.jpg",lR=()=>{const{language:e}=_e(),t=at[e];return t.passionForBeauty,t.passionDesc,t.naturalExcellence,t.naturalDesc,t.qualityFirst,t.qualityDesc,t.sustainableFuture,t.sustainableDesc,r.jsxs(qe,{children:[r.jsx(zn,{title:t.aboutSinceva,subtitle:t.aboutSubtitle,backgroundImage:iR,backgroundImageMobile:rR}),r.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20",children:[r.jsxs("div",{className:"space-y-6",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold",children:t.ourStory}),r.jsxs("div",{className:"space-y-4 text-muted-foreground text-lg leading-relaxed",children:[r.jsx("h3",{className:"font-bold",children:t.firstTouchTitle}),r.jsx("p",{children:t.firstTouchText}),r.jsx("h3",{className:"font-bold",children:t.timelessHeritageTitle}),r.jsx("p",{children:t.timelessHeritageText}),r.jsx("h3",{className:"font-bold",children:t.guidedByMissionTitle}),r.jsx("p",{children:t.guidedByMissionText})]})]}),r.jsx("div",{className:"relative",children:r.jsx("div",{className:"aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl",children:r.jsx("div",{className:"absolute inset-8 bg-muted rounded-xl shadow-elegant"})})})]}),r.jsxs("div",{className:"mb-20",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12",children:t.ourValues}),"..."]}),r.jsxs("div",{className:"bg-muted rounded-2xl p-8 md:p-12 text-center",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-8",children:t.committedToSustainability}),r.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed",children:[r.jsx("p",{children:t.sustainabilityText1}),r.jsx("p",{children:t.sustainabilityText2})]})]})]})]})},dr=f.forwardRef(({className:e,...t},n)=>r.jsx("textarea",{className:G("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));dr.displayName="Textarea";const sR="/assets/contact_banner-CtDPnXDT.jpg",oR="/assets/contact_banner_mobile-CWgsy8m0.jpg",cR="0x4AAAAAAB_0P6uOpt4ockt7",uR=()=>{const{language:e}=_e(),t=at[e],{toast:n}=Zn(),[a,i]=f.useState({name:"",email:"",phone:"",subject:"",message:"",website:""}),[l,s]=f.useState(!1),o=f.useRef(null),c=f.useRef(null);f.useEffect(()=>{const p="cf-turnstile",x=()=>{if(!(!window.turnstile||!o.current)){o.current.innerHTML="";try{c.current=window.turnstile.render(o.current,{sitekey:cR,size:"normal",callback:v=>{console.log("turnstile callback token:",v),window.__turnstileToken=v},"error-callback":()=>{console.log("turnstile error callback")},"expired-callback":()=>{console.log("turnstile expired"),window.__turnstileToken=null}}),console.log("turnstile rendered successfully")}catch(v){console.error("turnstile render error:",v)}}};if(document.getElementById(p))console.log("turnstile script already loaded"),setTimeout(x,100);else{const v=document.createElement("script");v.id=p,v.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",v.async=!0,v.defer=!0,v.onload=()=>{console.log("turnstile script loaded"),setTimeout(x,100)},document.body.appendChild(v)}},[]);const u=p=>{const{name:x,value:k}=p.target;i(v=>({...v,[x]:k}))},d=async p=>{var k,v;p.preventDefault();const x=window.__turnstileToken||((v=(k=window.turnstile)==null?void 0:k.getResponse)==null?void 0:v.call(k,c.current));if(!x){n({title:"Doğrulama gerekli",description:"Lütfen güvenlik doğrulamasını tamamlayın.",variant:"destructive"});return}s(!0),await m(x)},m=async p=>{try{const{website:x,...k}=a,v={...k,cf_turnstile_token:p},y=await(await fetch("https://sinceva.com/api/contact.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})).json();if(y.ok)n({title:t.messageSentSuccess,description:t.messageSentDesc}),i({name:"",email:"",phone:"",subject:"",message:"",website:""}),window.__turnstileToken=null;else{const z={VALIDATION_ERROR:"Lütfen tüm zorunlu alanları doldurun.",INVALID_EMAIL:"Geçersiz e-posta adresi.",TURNSTILE_FAILED:"Güvenlik doğrulaması başarısız.",RATE_LIMITED:"Çok fazla deneme. Lütfen daha sonra tekrar deneyin.",MAIL_SEND_FAILED:"E-posta gönderilemedi. Lütfen tekrar deneyin."}[y.error]||y.error||"Bir hata oluştu.";n({title:"Hata",description:z,variant:"destructive"})}}catch{n({title:"Hata",description:"Bağlantı hatası. Lütfen tekrar deneyin.",variant:"destructive"})}finally{s(!1),window.turnstile&&c.current&&window.turnstile.reset(c.current)}},h=[{icon:AC,title:t.address,content:t.addressContent},{icon:EC,title:t.phone,content:t.phoneContent},{icon:or,title:t.email,content:t.emailContent},{icon:Io,title:t.businessHours,content:t.hoursContent}];return r.jsxs(qe,{children:[r.jsx(zn,{title:t.contactUs,subtitle:t.contactSubtitle,backgroundImage:sR,backgroundImageMobile:oR}),r.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"text-2xl font-semibold mb-8",children:t.sendMessage}),r.jsxs("form",{onSubmit:d,className:"space-y-6",id:"sincevaContactForm",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsxs("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:[t.fullName," *"]}),r.jsx(he,{id:"name",name:"name",type:"text",value:a.name,onChange:u,required:!0,placeholder:t.enterFullName,maxLength:100})]}),r.jsxs("div",{children:[r.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:[t.emailAddress," *"]}),r.jsx(he,{id:"email",name:"email",type:"email",value:a.email,onChange:u,required:!0,placeholder:t.enterEmailPlaceholder,maxLength:255})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium mb-2",children:t.phone}),r.jsx(he,{id:"phone",name:"phone",type:"tel",value:a.phone,onChange:u,placeholder:"+90 5XX XXX XX XX",maxLength:20})]}),r.jsxs("div",{children:[r.jsxs("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2",children:[t.subject," *"]}),r.jsx(he,{id:"subject",name:"subject",type:"text",value:a.subject,onChange:u,required:!0,placeholder:t.subjectPlaceholder,maxLength:200})]})]}),r.jsxs("div",{children:[r.jsxs("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:[t.message," *"]}),r.jsx(dr,{id:"message",name:"message",value:a.message,onChange:u,required:!0,placeholder:t.messagePlaceholder,className:"min-h-[120px]",maxLength:2e3})]}),r.jsx("div",{ref:o}),r.jsx("input",{type:"text",name:"website",value:a.website,onChange:u,className:"absolute opacity-0 pointer-events-none",tabIndex:-1,autoComplete:"off","aria-hidden":"true"}),r.jsx(ne,{type:"submit",className:"w-full",disabled:l,children:l?"Gönderiliyor…":t.sendMessageBtn})]})]}),r.jsxs("div",{className:"space-y-8",children:[r.jsx("h2",{className:"text-2xl font-semibold",children:t.getInTouch}),r.jsx("div",{className:"space-y-6",children:h.map((p,x)=>{const k=p.icon;return r.jsxs("div",{className:"flex items-start space-x-4",children:[r.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center",children:r.jsx(k,{className:"w-6 h-6 text-primary"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-foreground",children:p.title}),r.jsx("p",{className:"text-muted-foreground whitespace-pre-line",children:p.content})]})]},x)})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h3",{className:"text-lg font-semibold mb-4",children:t.interactiveMap}),r.jsx("div",{className:"aspect-video rounded-lg overflow-hidden shadow-lg",children:r.jsx("iframe",{src:"https://maps.google.com/maps?q=40.664879,29.326644&hl=tr&z=17&output=embed",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Sinceva Ofis Konumu - Çiftlikköy, Yalova"})})]})]})]})})]})},dR="/assets/shop_banner-C9Fg8D-p.jpg",mR="/assets/shop_banner_mobile-BbAzJSz4.jpg",fR=()=>{const[e,t]=f.useState("grid"),[n,a]=f.useState("all"),[i,l]=f.useState("featured"),s=[{id:"all",name:"All Products"},{id:"anti-aging",name:"Anti-Aging"},{id:"cleansing",name:"Cleansing"},{id:"daily-care",name:"Daily Care"},{id:"serums",name:"Serums"}],o=zl.products.map(m=>({...m,rating:4.7+Math.random()*.3,reviews:Math.floor(50+Math.random()*150),category:c(m.id)}));function c(m){return[1,2].includes(m)?"serums":[3,4,5].includes(m)?"anti-aging":[6,7].includes(m)?"cleansing":[8,9].includes(m)?"daily-care":"all"}const u=o.filter(m=>n==="all"||m.category===n),d=m=>[...Array(5)].map((h,p)=>r.jsx(Rv,{className:`w-4 h-4 ${p<Math.floor(m)?"fill-yellow-400 text-yellow-400":"text-gray-300"}`},p));return r.jsxs(qe,{children:[r.jsx(zn,{title:"Shop Sinceva",subtitle:"Discover our premium skincare collection crafted for timeless beauty.",backgroundImage:dR,backgroundImageMobile:mR}),r.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[r.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 mb-8",children:[r.jsx("div",{className:"flex-1",children:r.jsx("div",{className:"flex flex-wrap gap-3",children:s.map(m=>r.jsx(ne,{variant:n===m.id?"default":"outline",onClick:()=>a(m.id),className:"text-sm",children:m.name},m.id))})}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs("select",{value:i,onChange:m=>l(m.target.value),className:"px-4 py-2 border border-border rounded-md bg-background",children:[r.jsx("option",{value:"featured",children:"Featured"}),r.jsx("option",{value:"rating",children:"Highest Rated"})]}),r.jsxs("div",{className:"flex border border-border rounded-md",children:[r.jsx(ne,{variant:e==="grid"?"default":"ghost",size:"icon",onClick:()=>t("grid"),className:"rounded-r-none",children:r.jsx(bC,{className:"w-4 h-4"})}),r.jsx(ne,{variant:e==="list"?"default":"ghost",size:"icon",onClick:()=>t("list"),className:"rounded-l-none",children:r.jsx(CC,{className:"w-4 h-4"})})]})]})]}),r.jsx("div",{className:`grid gap-6 ${e==="grid"?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4":"grid-cols-1"}`,children:u.map(m=>e==="grid"?r.jsx(Qf,{product:m},m.id):r.jsx(Ye,{className:"group hover:shadow-luxury transition-shadow duration-300",children:r.jsx($e,{className:"p-0",children:r.jsxs("div",{className:"flex gap-4 p-4",children:[r.jsx("div",{className:"w-24 h-24 bg-muted rounded-lg flex-shrink-0 overflow-hidden",children:r.jsx("img",{src:m.image||"https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:m.name,className:"w-full h-full object-cover"})}),r.jsxs("div",{className:"flex-1 space-y-2",children:[r.jsx("div",{className:"flex items-start justify-between",children:r.jsx("h3",{className:"font-semibold text-foreground",children:m.name})}),r.jsx("p",{className:"text-sm text-muted-foreground",children:m.description}),r.jsxs("div",{className:"flex items-center gap-1",children:[d(m.rating),r.jsxs("span",{className:"text-sm text-muted-foreground ml-2",children:["(",m.reviews,")"]})]}),r.jsx("div",{className:"flex items-center justify-between",children:r.jsxs(ne,{size:"sm",className:"gap-2",children:[r.jsx(PC,{className:"w-4 h-4"}),"Buy Now"]})})]})]})})},m.id))})]})]})},Sp=()=>{const{category:e,subcategory:t}=Tf(),n=e?Mf[e]:void 0;if(!n)return r.jsxs(qe,{children:[r.jsx(zn,{title:"Category Not Found",subtitle:"The requested category could not be found.",backgroundImage:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"}),r.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:r.jsxs("div",{className:"text-center py-16",children:[r.jsx("p",{className:"text-muted-foreground text-lg",children:"The requested category could not be found."}),r.jsx(ae,{to:"/shop",className:"inline-block mt-4",children:r.jsx(ne,{children:"Browse All Products"})})]})})]});if(t){const a=n.subcategories[t];return a?r.jsxs(qe,{children:[r.jsx(zn,{title:a.title,subtitle:`${n.title} - ${a.title}`,backgroundImage:n.bannerImage}),r.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[r.jsxs("div",{className:"flex items-center space-x-2 mb-8 text-sm text-muted-foreground",children:[r.jsx(ae,{to:"/",className:"hover:text-primary",children:"Home"}),r.jsx("span",{children:"/"}),r.jsx(ae,{to:`/category/${e}`,className:"hover:text-primary",children:n.title}),r.jsx("span",{children:"/"}),r.jsx("span",{className:"text-foreground",children:a.title})]}),a.products.length>0?r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:a.products.map(i=>r.jsx(Qf,{product:i},i.id))}):r.jsxs("div",{className:"text-center py-16",children:[r.jsx("p",{className:"text-muted-foreground text-lg",children:"No products found in this subcategory."}),r.jsx(ae,{to:`/category/${e}`,className:"inline-block mt-4",children:r.jsxs(ne,{children:["Back to ",n.title]})})]})]})]}):r.jsxs(qe,{children:[r.jsx(zn,{title:"Subcategory Not Found",subtitle:"The requested subcategory could not be found.",backgroundImage:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"}),r.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:r.jsxs("div",{className:"text-center py-16",children:[r.jsx("p",{className:"text-muted-foreground text-lg",children:"The requested subcategory could not be found."}),r.jsx(ae,{to:`/category/${e}`,className:"inline-block mt-4",children:r.jsxs(ne,{children:["Back to ",n.title]})})]})})]})}return r.jsxs(qe,{children:[r.jsx(zn,{title:n.title,subtitle:n.description,backgroundImage:n.bannerImage}),r.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[r.jsxs("div",{className:"flex items-center space-x-2 mb-8 text-sm text-muted-foreground",children:[r.jsx(ae,{to:"/",className:"hover:text-primary",children:"Home"}),r.jsx("span",{children:"/"}),r.jsx("span",{className:"text-foreground",children:n.title})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",children:Object.entries(n.subcategories).map(([a,i])=>r.jsx(Ye,{className:"group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1",children:r.jsx(ae,{to:`/category/${e}/${a}`,children:r.jsxs($e,{className:"p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("h3",{className:"text-xl font-semibold group-hover:text-primary transition-colors",children:i.title}),r.jsx(yl,{className:"w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"})]}),r.jsxs("p",{className:"text-muted-foreground mb-4",children:[i.products.length," product",i.products.length!==1?"s":""," available"]}),i.products[0]&&r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("img",{src:i.products[0].image,alt:i.products[0].name,className:"w-12 h-12 rounded-lg object-cover"}),r.jsx("div",{className:"flex-1",children:r.jsx("p",{className:"text-sm font-medium line-clamp-1",children:i.products[0].name})})]})]})})},a))})]})]})};var Dc="Collapsible",[hR,c0]=Rt(Dc),[yR,Xf]=hR(Dc),u0=f.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:a,defaultOpen:i,disabled:l,onOpenChange:s,...o}=e,[c,u]=Jn({prop:a,defaultProp:i??!1,onChange:s,caller:Dc});return r.jsx(yR,{scope:n,disabled:l,contentId:_n(),open:c,onOpenToggle:f.useCallback(()=>u(d=>!d),[u]),children:r.jsx(ee.div,{"data-state":Jf(c),"data-disabled":l?"":void 0,...o,ref:t})})});u0.displayName=Dc;var d0="CollapsibleTrigger",m0=f.forwardRef((e,t)=>{const{__scopeCollapsible:n,...a}=e,i=Xf(d0,n);return r.jsx(ee.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":Jf(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...a,ref:t,onClick:Y(e.onClick,i.onOpenToggle)})});m0.displayName=d0;var Zf="CollapsibleContent",f0=f.forwardRef((e,t)=>{const{forceMount:n,...a}=e,i=Xf(Zf,e.__scopeCollapsible);return r.jsx(_t,{present:n||i.open,children:({present:l})=>r.jsx(pR,{...a,ref:t,present:l})})});f0.displayName=Zf;var pR=f.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:a,children:i,...l}=e,s=Xf(Zf,n),[o,c]=f.useState(a),u=f.useRef(null),d=ye(t,u),m=f.useRef(0),h=m.current,p=f.useRef(0),x=p.current,k=s.open||o,v=f.useRef(k),g=f.useRef(void 0);return f.useEffect(()=>{const y=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(y)},[]),Nn(()=>{const y=u.current;if(y){g.current=g.current||{transitionDuration:y.style.transitionDuration,animationName:y.style.animationName},y.style.transitionDuration="0s",y.style.animationName="none";const b=y.getBoundingClientRect();m.current=b.height,p.current=b.width,v.current||(y.style.transitionDuration=g.current.transitionDuration,y.style.animationName=g.current.animationName),c(a)}},[s.open,a]),r.jsx(ee.div,{"data-state":Jf(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!k,...l,ref:d,style:{"--radix-collapsible-content-height":h?`${h}px`:void 0,"--radix-collapsible-content-width":x?`${x}px`:void 0,...e.style},children:k&&i})});function Jf(e){return e?"open":"closed"}var kR=u0,gR=m0,vR=f0,dn="Accordion",bR=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[eh,xR,zR]=mc(dn),[Ic,J4]=Rt(dn,[zR,c0]),th=c0(),h0=I.forwardRef((e,t)=>{const{type:n,...a}=e,i=a,l=a;return r.jsx(eh.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?r.jsx(jR,{...l,ref:t}):r.jsx(CR,{...i,ref:t})})});h0.displayName=dn;var[y0,wR]=Ic(dn),[p0,SR]=Ic(dn,{collapsible:!1}),CR=I.forwardRef((e,t)=>{const{value:n,defaultValue:a,onValueChange:i=()=>{},collapsible:l=!1,...s}=e,[o,c]=Jn({prop:n,defaultProp:a??"",onChange:i,caller:dn});return r.jsx(y0,{scope:e.__scopeAccordion,value:I.useMemo(()=>o?[o]:[],[o]),onItemOpen:c,onItemClose:I.useCallback(()=>l&&c(""),[l,c]),children:r.jsx(p0,{scope:e.__scopeAccordion,collapsible:l,children:r.jsx(k0,{...s,ref:t})})})}),jR=I.forwardRef((e,t)=>{const{value:n,defaultValue:a,onValueChange:i=()=>{},...l}=e,[s,o]=Jn({prop:n,defaultProp:a??[],onChange:i,caller:dn}),c=I.useCallback(d=>o((m=[])=>[...m,d]),[o]),u=I.useCallback(d=>o((m=[])=>m.filter(h=>h!==d)),[o]);return r.jsx(y0,{scope:e.__scopeAccordion,value:s,onItemOpen:c,onItemClose:u,children:r.jsx(p0,{scope:e.__scopeAccordion,collapsible:!0,children:r.jsx(k0,{...l,ref:t})})})}),[NR,Lc]=Ic(dn),k0=I.forwardRef((e,t)=>{const{__scopeAccordion:n,disabled:a,dir:i,orientation:l="vertical",...s}=e,o=I.useRef(null),c=ye(o,t),u=xR(n),m=jc(i)==="ltr",h=Y(e.onKeyDown,p=>{var w;if(!bR.includes(p.key))return;const x=p.target,k=u().filter(A=>{var P;return!((P=A.ref.current)!=null&&P.disabled)}),v=k.findIndex(A=>A.ref.current===x),g=k.length;if(v===-1)return;p.preventDefault();let y=v;const b=0,z=g-1,S=()=>{y=v+1,y>z&&(y=b)},C=()=>{y=v-1,y<b&&(y=z)};switch(p.key){case"Home":y=b;break;case"End":y=z;break;case"ArrowRight":l==="horizontal"&&(m?S():C());break;case"ArrowDown":l==="vertical"&&S();break;case"ArrowLeft":l==="horizontal"&&(m?C():S());break;case"ArrowUp":l==="vertical"&&C();break}const j=y%g;(w=k[j].ref.current)==null||w.focus()});return r.jsx(NR,{scope:n,disabled:a,direction:i,orientation:l,children:r.jsx(eh.Slot,{scope:n,children:r.jsx(ee.div,{...s,"data-orientation":l,ref:c,onKeyDown:a?void 0:h})})})}),$o="AccordionItem",[AR,nh]=Ic($o),g0=I.forwardRef((e,t)=>{const{__scopeAccordion:n,value:a,...i}=e,l=Lc($o,n),s=wR($o,n),o=th(n),c=_n(),u=a&&s.value.includes(a)||!1,d=l.disabled||e.disabled;return r.jsx(AR,{scope:n,open:u,disabled:d,triggerId:c,children:r.jsx(kR,{"data-orientation":l.orientation,"data-state":S0(u),...o,...i,ref:t,disabled:d,open:u,onOpenChange:m=>{m?s.onItemOpen(a):s.onItemClose(a)}})})});g0.displayName=$o;var v0="AccordionHeader",b0=I.forwardRef((e,t)=>{const{__scopeAccordion:n,...a}=e,i=Lc(dn,n),l=nh(v0,n);return r.jsx(ee.h3,{"data-orientation":i.orientation,"data-state":S0(l.open),"data-disabled":l.disabled?"":void 0,...a,ref:t})});b0.displayName=v0;var lm="AccordionTrigger",x0=I.forwardRef((e,t)=>{const{__scopeAccordion:n,...a}=e,i=Lc(dn,n),l=nh(lm,n),s=SR(lm,n),o=th(n);return r.jsx(eh.ItemSlot,{scope:n,children:r.jsx(gR,{"aria-disabled":l.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:l.triggerId,...o,...a,ref:t})})});x0.displayName=lm;var z0="AccordionContent",w0=I.forwardRef((e,t)=>{const{__scopeAccordion:n,...a}=e,i=Lc(dn,n),l=nh(z0,n),s=th(n);return r.jsx(vR,{role:"region","aria-labelledby":l.triggerId,"data-orientation":i.orientation,...s,...a,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});w0.displayName=z0;function S0(e){return e?"open":"closed"}var ER=h0,TR=g0,PR=b0,C0=x0,j0=w0;const Cp=ER,sm=f.forwardRef(({className:e,...t},n)=>r.jsx(TR,{ref:n,className:G("border-b",e),...t}));sm.displayName="AccordionItem";const om=f.forwardRef(({className:e,children:t,...n},a)=>r.jsx(PR,{className:"flex",children:r.jsxs(C0,{ref:a,className:G("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[t,r.jsx(hC,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));om.displayName=C0.displayName;const cm=f.forwardRef(({className:e,children:t,...n},a)=>r.jsx(j0,{ref:a,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:r.jsx("div",{className:G("pb-4 pt-0",e),children:t})}));cm.displayName=j0.displayName;var MR="Separator",jp="horizontal",RR=["horizontal","vertical"],N0=f.forwardRef((e,t)=>{const{decorative:n,orientation:a=jp,...i}=e,l=DR(a)?a:jp,o=n?{role:"none"}:{"aria-orientation":l==="vertical"?l:void 0,role:"separator"};return r.jsx(ee.div,{"data-orientation":l,...o,...i,ref:t})});N0.displayName=MR;function DR(e){return RR.includes(e)}var A0=N0;const ke=f.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...a},i)=>r.jsx(A0,{ref:i,decorative:n,orientation:t,className:G("shrink-0 bg-border",t==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...a}));ke.displayName=A0.displayName;const IR=_l("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Ct({className:e,variant:t,...n}){return r.jsx("div",{className:G(IR({variant:t}),e),...n})}const Ku=768;function E0(){const[e,t]=f.useState(void 0);return f.useEffect(()=>{const n=window.matchMedia(`(max-width: ${Ku-1}px)`),a=()=>{t(window.innerWidth<Ku)};return n.addEventListener("change",a),t(window.innerWidth<Ku),()=>n.removeEventListener("change",a)},[]),!!e}const LR=({currentProductId:e,products:t,title:n="Discover Sinceva Products"})=>{E0();const a=t.filter(i=>i.id.toString()!==e.toString()).slice(0,4);return a.length===0?null:r.jsx("section",{className:"py-12 bg-background",children:r.jsxs("div",{className:"container mx-auto max-w-7xl px-4",children:[r.jsxs("div",{className:"hidden md:flex md:items-start md:gap-8",children:[r.jsx("div",{className:"md:w-1/4 flex-shrink-0",children:r.jsx("h2",{className:"text-2xl font-bold text-foreground",children:n})}),r.jsx("div",{className:"md:w-3/4",children:r.jsxs(El,{className:"w-full",children:[r.jsx(Tl,{className:"-ml-4",children:a.map(i=>r.jsx(Pl,{className:"pl-4 basis-1/3",children:r.jsx(ae,{to:`/product/${i.id}`,children:r.jsx(Ye,{className:"group hover:shadow-luxury transition-all duration-300 cursor-pointer overflow-hidden rounded-xl",children:r.jsx($e,{className:"p-0",children:r.jsx(Wn,{ratio:2/3,children:r.jsxs("div",{className:"relative w-full h-full",children:[r.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),i.badge&&r.jsx(Ct,{className:"absolute top-3 left-3 bg-primary text-white z-10",children:i.badge}),r.jsx("div",{className:"absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30",children:r.jsx("div",{className:"p-3 h-full flex flex-col",children:r.jsx("div",{className:"flex-1",children:r.jsx("h3",{className:"text-sm font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2",children:i.name})})})})]})})})})})},i.id))}),r.jsx(qf,{className:"absolute -left-4 top-1/2 -translate-y-1/2"}),r.jsx(Wf,{className:"absolute -right-4 top-1/2 -translate-y-1/2"})]})})]}),r.jsxs("div",{className:"md:hidden",children:[r.jsx("div",{className:"text-center mb-6",children:r.jsx("h2",{className:"text-xl font-bold text-foreground",children:n})}),r.jsx(El,{className:"w-full",children:r.jsx(Tl,{className:"-ml-2",children:a.map(i=>r.jsx(Pl,{className:"pl-2 basis-4/5",children:r.jsx(ae,{to:`/product/${i.id}`,children:r.jsx(Ye,{className:"group hover:shadow-luxury transition-all duration-300 cursor-pointer overflow-hidden rounded-xl",children:r.jsx($e,{className:"p-0",children:r.jsx(Wn,{ratio:2/3,children:r.jsxs("div",{className:"relative w-full h-full",children:[r.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),i.badge&&r.jsx(Ct,{className:"absolute top-2 left-2 bg-primary text-white text-xs z-10",children:i.badge}),r.jsx("div",{className:"absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30",children:r.jsx("div",{className:"p-3 h-full flex flex-col",children:r.jsx("div",{className:"flex-1",children:r.jsx("h3",{className:"text-sm font-semibold mb-1 text-black group-hover:text-primary transition-colors line-clamp-2",children:i.name})})})})]})})})})})},i.id))})})]})]})})},FR=({productId:e})=>{let t="",n="",a="",i="";for(const[l,s]of Object.entries(Mf)){for(const[o,c]of Object.entries(s.subcategories))if(c.products.some(u=>u.id===e)){t=l,n=o,a=s.title,i=c.title;break}if(t)break}return t?r.jsx("div",{style:{backgroundColor:"#191919"},className:"py-4 border-t border-white/10",children:r.jsx("div",{className:"container mx-auto max-w-7xl px-4",children:r.jsxs("nav",{className:"flex items-center space-x-2 text-sm",children:[r.jsxs(ae,{to:"/",className:"flex items-center text-white/70 hover:text-white transition-colors",children:[r.jsx(Av,{className:"w-4 h-4 mr-1"}),"Home"]}),r.jsx(Do,{className:"w-4 h-4 text-white/40"}),r.jsx(ae,{to:`/category/${t}`,className:"text-white/70 hover:text-white transition-colors",children:a}),r.jsx(Do,{className:"w-4 h-4 text-white/40"}),r.jsx(ae,{to:`/category/${t}/${n}`,className:"text-white/70 hover:text-white transition-colors",children:i})]})})}):null},BR=({images:e,currentIndex:t,onClose:n,onNavigate:a})=>{const[i,l]=f.useState(0),[s,o]=f.useState(0),c=f.useRef(null),u=50,d=f.useCallback(()=>{t!==null&&t>0&&a(t-1)},[t,a]),m=f.useCallback(()=>{t!==null&&t<e.length-1&&a(t+1)},[t,e.length,a]),h=b=>{o(0),l(b.targetTouches[0].clientX)},p=b=>{o(b.targetTouches[0].clientX)},x=b=>{if(!i||!s)return;const z=i-s,S=z>u,C=z<-u;S&&t!==null&&t<e.length-1&&m(),C&&t!==null&&t>0&&d(),l(0),o(0)},k=f.useCallback(b=>{b.key==="Escape"?n():b.key==="ArrowLeft"?d():b.key==="ArrowRight"&&m()},[n,d,m]);if(f.useEffect(()=>(t!==null&&(document.addEventListener("keydown",k),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",k),document.body.style.overflow="unset"}),[t,k]),t===null)return null;const v=e[t],g=t>0,y=t<e.length-1;return r.jsxs("div",{ref:c,className:"fixed inset-0 z-50 bg-black/90 flex items-center justify-center",onClick:n,onTouchStart:h,onTouchMove:p,onTouchEnd:x,children:[r.jsx("button",{onClick:b=>{b.stopPropagation(),n()},className:"absolute top-4 right-4 z-10 p-2 text-white hover:text-white/70 transition-colors",children:r.jsx(fi,{size:32})}),g&&r.jsx("button",{onClick:b=>{b.stopPropagation(),d()},className:"absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-white/70 transition-colors",children:r.jsx(yC,{size:48})}),y&&r.jsx("button",{onClick:b=>{b.stopPropagation(),m()},className:"absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-white/70 transition-colors",children:r.jsx(Do,{size:48})}),r.jsx("img",{src:v,alt:`Product image ${t+1}`,className:"max-w-[90vw] max-h-[90vh] object-contain",onClick:b=>b.stopPropagation(),draggable:!1})]})},OR={1:{productId:1,details:"SincEva Vitamin C Serum, %5 C Vitamini içeriğiyle cilt tonunu eşitlemeye ve cilde canlılık kazandırmaya yardımcı olur. Güçlü antioksidan etkisi sayesinde serbest radikallere karşı koruma sağlar, güneş ışınlarının neden olduğu fotoyaşlanmayı önlemeye destek olur. Formülündeki Aloe Vera cildi yatıştırırken, Elma Özü (Pyrus Malus Fruit Extract) malik asit ve doğal vitaminleriyle cilt yenilenmesini destekler, cildin doğal parlaklığını artırır. Düzenli kullanımda cilt daha aydınlık, sıkı ve taze bir görünüm kazanır.",ingredients:"Aqua, Propylene Glycol, 3-O-Ethyl Ascorbic Acid, Glycerin, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Lactobacillus Lysate, Ethylhexylglycerin, Aloe Barbadensis Leaf Extract, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temizlenmiş ve kuru cilde sabah ve akşam 2–3 damla uygulayınız. Parmak uçlarınızla nazikçe masaj yaparak emilmesini sağlayın. Gündüz kullanımında mutlaka güneş koruyucu ile birlikte kullanılması önerilir.",faqs:[{question:"Vitamin C serumu hangi cilt tiplerine uygundur?",answer:"Tüm cilt tipleri için uygundur, özellikle donuk, lekeli veya yorgun ciltler için idealdir."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit ve vitamin içeriğiyle cildin yenilenmesini destekler, doğal ışıltıyı artırır."},{question:"Ne kadar sürede sonuç verir?",answer:"Düzenli kullanımda 3–4 hafta içinde daha aydınlık ve eşit tonlu bir cilt görünümü sağlar."},{question:"Gündüz kullanılabilir mi?",answer:"Evet, ancak güneş koruyucu ile birlikte kullanılması önerilir."}]},2:{productId:2,details:"SincEva Arbutin Serum, ciltteki ton eşitsizliklerini hedef alarak daha aydınlık, canlı ve pürüzsüz bir görünüm kazandırır. %2 Alfa-Arbutin içeriği, melanin üretimini dengeleyerek güneş, yaş, akne veya hamilelik lekelerinin görünümünü azaltmaya yardımcı olur. Formülündeki Niacinamide, cilt bariyerini güçlendirirken, Elma Özü (Pyrus Malus Fruit Extract) içeriğindeki doğal malik asit ve antioksidanlar sayesinde cilt dokusunu yeniler, hücreleri canlandırır ve serbest radikallere karşı koruma sağlar. Hafif yapısı sayesinde hızla emilir, yağlı his bırakmaz ve düzenli kullanımda cilde doğal bir ışıltı kazandırır.",ingredients:"Aqua, Propylene Glycol, Alpha-Arbutin, Glycerin, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Niacinamide, Lactobacillus Lysate, Ethylhexylglycerin, Aloe Barbadensis Leaf Extract, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temizlenmiş ve kuru cilde sabah ve akşam 2-3 damla uygulayınız. Parmak uçlarınızla nazikçe masaj yaparak emilmesini sağlayın. Gündüz kullanımında mutlaka güneş koruyucu ile birlikte kullanılması tavsiye edilir.",faqs:[{question:"Arbutin Serum ne işe yarar?",answer:"Cilt tonunu eşitleyerek koyu lekelerin, güneş ve yaşlılık lekelerinin azalmasına yardımcı olur."},{question:"İçeriğinde elma özünün etkisi nedir?",answer:"Elma özü, malik asit ve antioksidanlar bakımından zengindir; cilt yenilenmesini destekler, serbest radikalleri nötralize eder ve daha aydınlık bir görünüm sağlar."},{question:"Gündüz kullanılabilir mi?",answer:"Evet, ancak mutlaka güneş koruyucu ile birlikte kullanılmalıdır."},{question:"Ne kadar sürede sonuç verir?",answer:"Düzenli kullanımda 3-4 hafta içinde cilt tonunda belirgin bir iyileşme görülür."}]},3:{productId:3,details:'SincEva Kırışıklık Karşıtı Göz Kremi, patentli "süper molekül" Proxylane, Kolajen ve Elma Özü (Pyrus Malus Fruit Extract) ile göz çevresindeki ince çizgileri, kaz ayaklarını ve koyu halkaları hedef alır. Proxylane, cilt yapısını biyomekanik olarak güçlendirerek elastikiyet kaybını azaltır; kolajen, cildin dolgunluğunu geri kazandırarak sıkılaştırıcı bir etki sağlar. Elma özündeki malik asit ve antioksidanlar, cilt dokusunu yeniler ve göz çevresine canlı, aydınlık bir görünüm kazandırır. Düzenli kullanımda göz çevresi daha pürüzsüz, dinlenmiş ve genç bir görünüm kazanır.',ingredients:"Aqua, Dibutyl Adipate, Propylene Glycol, Isopropyl Myristate, Sodium Acrylates Copolymer, Panthenol, Phenoxyethanol, Hydroxypropyl Tetrahydropyrantriol (Proxylane), Lecithin, Hydrolyzed Collagen, Lactobacillus Lysate, Ethylhexylglycerin, 1,2-Hexanediol, Glycerin, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Pentylene Glycol, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temiz ve kuru göz çevresine yeterli miktarda kremi sabah ve akşam nazikçe masaj yaparak uygulayın. Aktif bileşenlerin hızlı emilimi nedeniyle hafif bir karıncalanma hissi oluşabilir. Durulama gerekmez.",faqs:[{question:"Göz kremi hangi yaş grubu için uygundur?",answer:"25 yaş ve üzeri herkes için uygundur. Özellikle ince çizgi veya koyu halka sorunu yaşayan ciltlerde etkilidir."},{question:"Elma özünün etkisi nedir?",answer:"Elma özündeki malik asit ve antioksidanlar, göz çevresindeki cildi besler, canlandırır ve yorgun görünümü azaltır."},{question:"Günlük makyaj altında kullanılabilir mi?",answer:"Evet, hafif dokusu sayesinde makyaj altına rahatça uygulanabilir."},{question:"Gözde yanma olursa ne yapmalıyım?",answer:"Gözle temas halinde bol su ile durulayın; hassasiyet devam ederse dermatoloğa danışın."}]},4:{productId:4,details:"SincEva Yaşlanma Karşıtı Gece Kremi, cildin gece boyunca kendini yenileme sürecini destekler. Formülündeki Lipozomal Retinol, hücre yenilenmesini artırarak ince çizgilerin, kırışıklıkların ve renk düzensizliklerinin görünümünü azaltmaya yardımcı olur. Niacinamide, cilt bariyerini güçlendirirken gözenek görünümünü azaltır ve daha pürüzsüz bir doku sağlar. Elma Özü (Pyrus Malus Fruit Extract) içeriğindeki malik asit ve antioksidanlar sayesinde cilt tonunu dengeler, serbest radikallere karşı koruma sağlar ve cilde sağlıklı bir ışıltı kazandırır. Her sabah, daha dolgun, sıkı ve dinlenmiş bir cilt görünümü sunar.",ingredients:"Aqua, Dibutyl Adipate, Glycerin, Isopropyl Myristate, Propylene Glycol, Sodium Acrylates Copolymer, Phenoxyethanol, Panthenol, Lecithin, Caprylic/Capric Triglyceride, Sodium Hyaluronate, Aroma, Lactobacillus Lysate, Polysorbate 20, Retinol, Ethylhexylglycerin, Niacinamide, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, BHT, Polyglyceryl-10 Myristate, Ethyl Lauroyl Arginate HCl, BHA, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temiz ve kuru cilde gece yatmadan önce yeterli miktarda uygulayın. Dairesel hareketlerle nazikçe masaj yaparak cilde yedirin. Durulama gerektirmez. Ürünü kullandığınız dönemde gündüzleri mutlaka güneş koruyucu kullanmanız önerilir.",faqs:[{question:"Gece kremi hangi yaş grubu için uygundur?",answer:"25 yaş ve üzeri herkes için uygundur, özellikle ince çizgi, cilt tonu eşitsizliği veya elastikiyet kaybı yaşayan ciltlerde etkilidir."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit ve antioksidan içeriğiyle cilt yenilenmesini destekler, cilde tazelik ve ışıltı kazandırır."},{question:"Gündüz kullanılabilir mi?",answer:"Hayır, yalnızca gece kullanımına uygundur. Ancak gündüz mutlaka güneş koruyucu kullanılmalıdır."},{question:"Retinol tahriş yapar mı?",answer:"Hassas ciltlerde ilk kullanımda hafif karıncalanma veya kızarıklık olabilir; bu durum cildin alışma sürecidir."}]},5:{productId:5,details:"SincEva Cilt Yenileyici Tonik, cildi derinlemesine temizleyip arındırırken gözenek görünümünün azalmasına ve sebum dengesinin korunmasına yardımcı olur. Formülündeki %5 Glikolik Asit ve AHA kompleksi (Glikolik, Malik, Laktik, Tartarik, Sitrik Asit), cilt yüzeyindeki ölü hücreleri nazikçe uzaklaştırarak yenilenmiş, canlı bir cilt dokusu oluşturur. Elma Özü (Pyrus Malus Fruit Extract) içeriği sayesinde malik asit ve antioksidan bakımından zengin doğal bir peeling etkisi sağlar, ciltteki donuk görünümü giderir ve doğal parlaklığı geri kazandırır. Düzenli kullanımda cilt daha pürüzsüz, dengeli ve taze bir görünüme kavuşur.",ingredients:"Aqua, Glycolic Acid, Propylene Glycol, Triethanolamine, Phenoxyethanol, Glucose, Urea, Panthenol, 3-O-Ethyl Ascorbic Acid, Lactobacillus Lysate, Fructose, Hydrogenated Starch Hydrolysate, Sodium PCA, PEG-40 Hydrogenated Castor Oil, Glycine, Hydrolyzed Wheat Protein, Sodium Glutamate, Ethylhexylglycerin, Glycerin, Tetrasodium EDTA, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Aroma, Sodium Benzoate, Citric Acid, Lactic Acid, Lysine, Malic Acid, Potassium Hydroxide, Potassium Sorbate, Sodium Hydroxide, Tartaric Acid, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, CI 17200.",howToUse:"Cildinizi temizledikten sonra, yeterli miktarda toniği bir pamuk yardımıyla kuru cildinize uygulayınız. Uygulama sonrası durulama gerektirmez. Gündüz kullanımlarında, mutlaka güneş koruyucu ile birlikte kullanılması tavsiye edilir.",faqs:[{question:"Bu tonik hangi cilt tipleri için uygundur?",answer:"Yağlı, karma ve normal ciltler için uygundur. Hassas ciltlerde haftada 2-3 kez kullanılması önerilir."},{question:"Elma özü ne işe yarar?",answer:"Elma özü, malik asit ve antioksidanlar açısından zengindir; cilt yenilenmesini destekler ve ciltteki donukluğu giderir."},{question:"Ciltte yanma yapar mı?",answer:"Hafif karıncalanma normaldir; aşırı yanma veya kızarıklık hissederseniz kullanımı durdurunuz."},{question:"Gündüz kullanılabilir mi?",answer:"Evet, ancak güneş koruyucu ile birlikte kullanılmalıdır."}]},6:{productId:6,details:"SincEva Peeling Scrub Cream, cildi nazikçe arındırarak ölü deri hücrelerini uzaklaştırır ve daha pürüzsüz, aydınlık bir görünüm kazandırır. Formülündeki doğal AHA kaynakları olan Elma Özü (Pyrus Malus Fruit Extract), Lime ve Ananas Ekstraktları, cilt yüzeyindeki kir, fazla yağ ve makyaj kalıntılarını etkili biçimde temizler. Malik asit, askorbik asit ve glikolik asit içeriğiyle gözeneklerin sıkılaşmasına, cildin daha canlı ve taze bir görünüme kavuşmasına yardımcı olur. Düzenli kullanımda cilt dokusu yenilenir, cilt tonu dengelenir ve ışıltılı bir parlaklık kazanır.",ingredients:"Aqua, Cetearyl Alcohol, Glycerin, Glycolic Acid, Ascorbic Acid, Malic Acid, Propylene Glycol, Stearic Acid, Ceteareth-20, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Phenoxyethanol, Ethylhexylglycerin, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Avucunuza yeterli miktarda ürünü alın ve nemli cildinize dairesel hareketlerle nazikçe masaj yaparak uygulayın. Ardından ılık suyla durulayın. Haftada 2–3 kez düzenli olarak kullanılması önerilir.",faqs:[{question:"Peeling Scrub cildi tahriş eder mi?",answer:"Hayır, doğal AHA kaynaklarıyla formüle edilmiştir ve cildi nazikçe arındırır."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit ve antioksidanlar sayesinde cilt yüzeyini pürüzsüzleştirir, ışıltı ve tazelik kazandırır."},{question:"Ne sıklıkla kullanılmalı?",answer:"Normal ciltler için haftada 2–3 kez, hassas ciltler için haftada 1 kez önerilir."},{question:"Gündüz mü gece mi uygulanmalı?",answer:"Akşam saatlerinde uygulama idealdir. Sonrasında mutlaka nemlendirici ve gündüzleri güneş koruyucu kullanılmalıdır."}]},7:{productId:7,details:"SincEva Yüz Temizleme Köpüğü, cildi kurutmadan derinlemesine temizler ve tazelik hissi kazandırır. Zengin köpük formu sayesinde gözeneklerdeki kir, yağ ve makyaj kalıntılarını nazikçe arındırır. Formülündeki Aloe Vera cildi yatıştırırken, Elma Özü (Pyrus Malus Fruit Extract) malik asit ve doğal antioksidanlarıyla cildin yenilenmesini destekler, cilt tonunu dengeler ve canlı bir parlaklık kazandırır. Günlük kullanımda cilt temiz, pürüzsüz ve yumuşacık bir görünüme kavuşur.",ingredients:"Aqua, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycerin, Phenoxyethanol, Sodium Lauroyl Sarcosinate, Ethylhexylglycerin, Panthenol, Citric Acid, PEG-7 Glyceryl Cocoate, Coco-Glucoside, Glyceryl Oleate, Lactobacillus Lysate, Pyrus Malus (Apple) Fruit Extract, Aloe Barbadensis Leaf Juice, Ananas Sativus (Pineapple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Islak cilde yeterli miktarda ürünü uygulayın, köpürterek dairesel hareketlerle masaj yapın. Ardından ılık suyla durulayın. Sabah ve akşam olmak üzere günde iki kez kullanılması önerilir.",faqs:[{question:"Cildi kurutur mu?",answer:"Hayır, nazik formülü sayesinde ciltte kuruluk hissi bırakmaz; nem dengesini korur."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit ve antioksidanlarla cilt yüzeyini yeniler, cildin canlılığını ve parlaklığını artırır."},{question:"Göz çevresinde kullanılabilir mi?",answer:"Göz ile direkt temas ettirilmemelidir. Göz çevresine yakın bölgelerde nazikçe uygulanabilir."},{question:"Hangi cilt tipleri için uygundur?",answer:"Tüm cilt tipleri için uygundur; özellikle karma ve yağlı ciltlerde ferahlık sağlar."}]},8:{productId:8,details:"SincEva 50 SPF Güneş Kremi, özel geliştirilmiş formülüyle cildi güneşin zararlı UVA ve UVB ışınlarına karşı geniş spektrumlu koruma altına alır. Hafif dokusu sayesinde ciltte yağlı bir his bırakmadan kolayca emilir ve yumuşacık bir bitiş sağlar. Formülündeki Aloe Vera cildi yatıştırırken, Pantenol nem bariyerini güçlendirir. Elma Özü (Pyrus Malus Fruit Extract), malik asit ve antioksidanlar sayesinde cilt hücrelerini yeniler, çevresel etkenlere karşı korur ve cilde canlı bir parlaklık kazandırır. Düzenli kullanımda cilt nemli, sağlıklı ve güneşe karşı korunmuş bir görünüme kavuşur.",ingredients:"Aqua, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Diethylamino Hydroxybenzoyl Hexyl Benzoate, C12-15 Alkyl Benzoate, Ethylhexyl Palmitate, Ethylhexyl Triazone, Cetearyl Alcohol, Glycerin, Zinc Oxide, Ceteareth-20, Dimethicone, Panthenol, Glyceryl Stearate, PEG-100 Stearate, Butylene Glycol, Phenoxyethanol, Titanium Dioxide, Allantoin, Ethylhexylglycerin, Ammonium Polyacrylate, Caprylic/Capric Triglyceride, Chamomilla Recutita (Matricaria) Flower Extract, Aloe Barbadensis Leaf Juice, Hydrolyzed Collagen, Sodium Hyaluronate, Tocopheryl Acetate, Alpha-Arbutin, Pyrus Malus (Apple) Fruit Extract, Ananas Sativus (Pineapple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Güneşe çıkmadan 10–15 dakika önce temiz cilde yeterli miktarda uygulayınız. Cildiniz suyla temas ettiğinde veya uzun süre güneşte kaldığınızda uygulamayı tekrarlayınız. Etkin koruma için 2 saatte bir yenilenmesi önerilir.",faqs:[{question:"Güneş kremi yağlı bir his bırakır mı?",answer:"Hayır. Hafif yapısı sayesinde hızla emilir ve ciltte ağırlık yapmaz."},{question:"Elma özü ne işe yarar?",answer:"Elma özü, malik asit ve antioksidan içeriğiyle cilt hücrelerini yeniler ve güneşin yol açtığı oksidatif stresi azaltır."},{question:"Makyaj altına uygulanabilir mi?",answer:"Evet, ciltte pürüzsüz bir zemin oluşturur ve makyaj altında rahatlıkla kullanılabilir."},{question:"Hassas ciltler için uygun mu?",answer:"Evet, dermatolojik olarak test edilmiştir ve hassas ciltler dahil tüm cilt tipleri için uygundur."}]},9:{productId:9,details:"SincEva Hyaluronik Asit Nemlendirici Krem, cildi derinlemesine nemlendirir ve anında pürüzsüz bir görünüm kazandırır. Hyaluronik Asit, cilt tabakalarının her birinde suyu tutarak uzun süreli nem sağlar. Pantenol, cilt bariyerini güçlendirirken kuruluk kaynaklı gerginlik hissini azaltır. Formüldeki Elma Özü (Pyrus Malus Fruit Extract), malik asit ve doğal antioksidanlar sayesinde cildin yenilenmesini destekler, cildin tazelik ve ışıltısını artırır. Hafif dokusu ile hızla emilen krem, yağlı his bırakmaz ve günlük bakım için idealdir.",ingredients:"Aqua, Isopropyl Myristate, Glycerin, Propylene Glycol, Sodium Acrylates Copolymer, Phenoxyethanol, Lecithin, Sodium Hyaluronate, Lactobacillus Lysate, Panthenol, Ethylhexylglycerin, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Aroma, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temiz ve kuru cildinize sabah ve akşam olmak üzere günde iki kez yeterli miktarda kremi dairesel hareketlerle masaj yaparak uygulayınız. Durulama gerektirmez.",faqs:[{question:"Hyaluronik asit ne işe yarar?",answer:"Cildin nem tutma kapasitesini artırır, dolgun ve pürüzsüz bir görünüm sağlar."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit içeriğiyle cilt yenilenmesini destekler ve antioksidanlar sayesinde cildi çevresel etkenlere karşı korur."},{question:"Gündüz mü gece mi kullanılmalı?",answer:"Günlük bakım için hem sabah hem gece kullanıma uygundur."},{question:"Hangi cilt tipleri için uygundur?",answer:"Tüm cilt tipleri için uygundur, özellikle kuru ve nemsiz ciltler için idealdir."}]}},KR={1:{productId:1,details:"SincEva Vitamin C Serum, with 5% Vitamin C, helps even out skin tone and boost radiance. Its powerful antioxidant action protects against free radicals and supports the prevention of photoaging caused by UV exposure. Enriched with Aloe Vera for soothing and Apple Fruit Extract (Pyrus Malus) for natural malic acid and vitamins, it promotes cell renewal and enhances brightness. With consistent use, the skin appears visibly more luminous, firm, and revitalized.",ingredients:"Aqua, Propylene Glycol, 3-O-Ethyl Ascorbic Acid, Glycerin, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Lactobacillus Lysate, Ethylhexylglycerin, Aloe Barbadensis Leaf Extract, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply 2–3 drops to clean, dry skin in the morning and evening. Gently massage until absorbed. Always use sunscreen during the day.",faqs:[{question:"What skin types is this serum suitable for?",answer:"Suitable for all skin types, especially dull, tired, or uneven-toned skin."},{question:"What is the benefit of Apple Extract?",answer:"It promotes skin renewal and boosts natural glow with its malic acid and vitamin content."},{question:"When will I see results?",answer:"Visible brightening and even skin tone typically appear within 3–4 weeks of regular use."},{question:"Can it be used during the day?",answer:"Yes, but always with sunscreen."}]},2:{productId:2,details:"SincEva Arbutin Serum targets uneven skin tone, giving the skin a brighter, smoother, and more radiant look. Its 2% Alpha-Arbutin helps regulate melanin production, minimizing the appearance of sun, age, acne, or pregnancy spots. Niacinamide strengthens the skin barrier, while Apple Fruit Extract (Pyrus Malus), rich in natural malic acid and antioxidants, rejuvenates the skin, revitalizes cells, and protects against free radicals. Its lightweight texture absorbs quickly without leaving a greasy feel, delivering a naturally luminous complexion with regular use.",ingredients:"Aqua, Propylene Glycol, Alpha-Arbutin, Glycerin, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Niacinamide, Lactobacillus Lysate, Ethylhexylglycerin, Aloe Barbadensis Leaf Extract, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply 2-3 drops to clean, dry skin in the morning and evening. Gently massage until absorbed. Always use sunscreen during the day.",faqs:[{question:"What does Arbutin Serum do?",answer:"It helps even skin tone and reduces the appearance of dark, sun, and age spots."},{question:"What is the role of Apple Extract?",answer:"Rich in malic acid and antioxidants, Apple Extract supports skin renewal, protects against free radicals, and brightens the complexion."},{question:"Can it be used during the day?",answer:"Yes, but always with sunscreen."},{question:"When will I see results?",answer:"Noticeable improvement in skin tone usually appears within 3–4 weeks of regular use."}]},3:{productId:3,details:`SincEva Anti-Wrinkle Eye Cream combines the patented "super molecule" Proxylane, Collagen, and Apple Fruit Extract (Pyrus Malus) to target fine lines, crow's feet, and dark circles around the eyes. Proxylane strengthens the skin biomechanically, restoring firmness and elasticity, while collagen plumps and smooths the delicate eye area. Apple Extract, rich in malic acid and antioxidants, rejuvenates the skin and brightens the under-eye region. With consistent use, it provides a smoother, firmer, and more youthful look.`,ingredients:"Aqua, Dibutyl Adipate, Propylene Glycol, Isopropyl Myristate, Sodium Acrylates Copolymer, Panthenol, Phenoxyethanol, Hydroxypropyl Tetrahydropyrantriol (Proxylane), Lecithin, Hydrolyzed Collagen, Lactobacillus Lysate, Ethylhexylglycerin, 1,2-Hexanediol, Glycerin, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Pentylene Glycol, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply a small amount to clean, dry skin around the eyes in the morning and evening. Gently massage until absorbed. A mild tingling may occur due to fast-acting ingredients. Do not rinse.",faqs:[{question:"What age group is this eye cream for?",answer:"Suitable for anyone aged 25 and above, especially those concerned about fine lines and dark circles."},{question:"What does Apple Extract do?",answer:"It nourishes and revitalizes the delicate eye area while reducing signs of fatigue thanks to its malic acid and antioxidant content."},{question:"Can it be used under make-up?",answer:"Yes, its lightweight texture makes it ideal for use before make-up."},{question:"What if I feel stinging in the eyes?",answer:"Rinse immediately with water and discontinue use if irritation persists."}]},4:{productId:4,details:"SincEva Anti-Aging Night Cream supports the skin's natural renewal process throughout the night. Liposomal Retinol promotes cell turnover and helps reduce the appearance of fine lines, wrinkles, and uneven skin tone. Niacinamide strengthens the skin barrier, minimizes pores, and enhances texture smoothness. Infused with Apple Fruit Extract (Pyrus Malus), rich in malic acid and antioxidants, it balances skin tone, protects against free radicals, and restores natural radiance. Wake up to a smoother, firmer, and rejuvenated complexion every morning.",ingredients:"Aqua, Dibutyl Adipate, Glycerin, Isopropyl Myristate, Propylene Glycol, Sodium Acrylates Copolymer, Phenoxyethanol, Panthenol, Lecithin, Caprylic/Capric Triglyceride, Sodium Hyaluronate, Aroma, Lactobacillus Lysate, Polysorbate 20, Retinol, Ethylhexylglycerin, Niacinamide, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, BHT, Polyglyceryl-10 Myristate, Ethyl Lauroyl Arginate HCl, BHA, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply a sufficient amount to clean, dry skin before bedtime. Gently massage in circular motions until fully absorbed. No rinsing required. When using retinol products, always apply sunscreen during the day.",faqs:[{question:"What age group is this cream for?",answer:"Recommended for those aged 25 and above, especially for skin with fine lines, uneven tone, or loss of elasticity."},{question:"What is the benefit of Apple Extract?",answer:"It supports cell renewal and restores radiance with its malic acid and antioxidant content."},{question:"Can it be used during the day?",answer:"No, it's designed for nighttime use only. Always follow with sunscreen during the day."},{question:"Does retinol cause irritation?",answer:"Mild tingling or redness may occur initially, which is normal as the skin adapts."}]},5:{productId:5,details:"SincEva Skin Corrector Toner deeply cleanses the skin while helping reduce the appearance of pores and balance sebum levels. Its formula enriched with 5% Glycolic Acid and an AHA complex (Glycolic, Malic, Lactic, Tartaric, Citric Acids) gently removes dead skin cells, leaving a refreshed, radiant complexion. The Apple Fruit Extract (Pyrus Malus) provides a natural source of malic acid and antioxidants, offering a gentle peeling effect that brightens dull skin and restores natural glow. With regular use, the skin appears smoother, balanced, and visibly renewed.",ingredients:"Aqua, Glycolic Acid, Propylene Glycol, Triethanolamine, Phenoxyethanol, Glucose, Urea, Panthenol, 3-O-Ethyl Ascorbic Acid, Lactobacillus Lysate, Fructose, Hydrogenated Starch Hydrolysate, Sodium PCA, PEG-40 Hydrogenated Castor Oil, Glycine, Hydrolyzed Wheat Protein, Sodium Glutamate, Ethylhexylglycerin, Glycerin, Tetrasodium EDTA, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Aroma, Sodium Benzoate, Citric Acid, Lactic Acid, Lysine, Malic Acid, Potassium Hydroxide, Potassium Sorbate, Sodium Hydroxide, Tartaric Acid, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, CI 17200.",howToUse:"After cleansing, apply a sufficient amount of toner to dry skin using a cotton pad. No rinsing required. For daytime use, always follow with sunscreen.",faqs:[{question:"Which skin types is this toner suitable for?",answer:"Suitable for oily, combination, and normal skin. For sensitive skin, use 2–3 times per week."},{question:"What does Apple Extract do?",answer:"Apple Extract is rich in malic acid and antioxidants, supporting skin renewal and reducing dullness."},{question:"Does it cause a burning sensation?",answer:"A mild tingling is normal; if burning or redness occurs, discontinue use."},{question:"Can it be used during the day?",answer:"Yes, but always with sunscreen."}]},6:{productId:6,details:"SincEva Peeling Scrub Cream gently exfoliates the skin, removing dead cells for a smoother and brighter complexion. Enriched with natural AHA sources such as Apple Fruit Extract (Pyrus Malus), Lime, and Pineapple Extracts, it effectively purifies the skin from dirt, excess oil, and impurities. With malic acid, ascorbic acid, and glycolic acid, it helps tighten pores and revitalize the skin's surface. Regular use promotes cell renewal, evens out skin tone, and enhances natural radiance.",ingredients:"Aqua, Cetearyl Alcohol, Glycerin, Glycolic Acid, Ascorbic Acid, Malic Acid, Propylene Glycol, Stearic Acid, Ceteareth-20, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Phenoxyethanol, Ethylhexylglycerin, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Take a small amount into your palm and gently massage onto damp skin in circular motions. Rinse thoroughly with warm water. Use 2–3 times per week for best results.",faqs:[{question:"Does this scrub irritate the skin?",answer:"No, it's formulated with natural AHA sources that gently exfoliate without irritation."},{question:"What does Apple Extract do?",answer:"Rich in malic acid and antioxidants, it smooths and brightens the skin for a refreshed look."},{question:"How often should I use it?",answer:"2–3 times weekly for normal skin; once weekly for sensitive skin."},{question:"When should it be applied?",answer:"Best used in the evening. Follow with moisturizer and sunscreen during the day."}]},7:{productId:7,details:"SincEva Facial Cleansing Foam gently cleanses the skin without drying it out, leaving it fresh and revitalized. Its rich foam texture effectively removes dirt, excess oil, and makeup residues from pores. Aloe Vera soothes the skin, while Apple Fruit Extract (Pyrus Malus), rich in malic acid and natural antioxidants, promotes skin renewal, balances tone, and enhances radiance. With daily use, the skin feels clean, soft, and refreshed.",ingredients:"Aqua, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycerin, Phenoxyethanol, Sodium Lauroyl Sarcosinate, Ethylhexylglycerin, Panthenol, Citric Acid, PEG-7 Glyceryl Cocoate, Coco-Glucoside, Glyceryl Oleate, Lactobacillus Lysate, Pyrus Malus (Apple) Fruit Extract, Aloe Barbadensis Leaf Juice, Ananas Sativus (Pineapple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply an adequate amount to wet skin, lather, and gently massage in circular motions. Rinse thoroughly with lukewarm water. Use twice daily, morning and evening.",faqs:[{question:"Does it dry the skin?",answer:"No, its gentle formula cleanses without stripping moisture and helps maintain the skin's balance."},{question:"What is the role of Apple Extract?",answer:"It rejuvenates the skin surface with malic acid and antioxidants, enhancing radiance and vitality."},{question:"Can it be used around the eyes?",answer:"Avoid direct contact with the eyes; can be used gently near the eye area."},{question:"What skin types is it suitable for?",answer:"Suitable for all skin types, especially refreshing for combination and oily skin."}]},8:{productId:8,details:"SincEva SPF 50 Sunscreen provides broad-spectrum protection against harmful UVA and UVB rays with its advanced lightweight formula. It absorbs easily without leaving a greasy residue, offering a soft and smooth finish. Aloe Vera soothes the skin, Panthenol strengthens the moisture barrier, and Apple Fruit Extract (Pyrus Malus) — rich in malic acid and antioxidants — helps rejuvenate and protect the skin from environmental stress. With regular use, it leaves the skin hydrated, healthy, and perfectly protected from the sun.",ingredients:"Aqua, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Diethylamino Hydroxybenzoyl Hexyl Benzoate, C12-15 Alkyl Benzoate, Ethylhexyl Palmitate, Ethylhexyl Triazone, Cetearyl Alcohol, Glycerin, Zinc Oxide, Ceteareth-20, Dimethicone, Panthenol, Glyceryl Stearate, PEG-100 Stearate, Butylene Glycol, Phenoxyethanol, Titanium Dioxide, Allantoin, Ethylhexylglycerin, Ammonium Polyacrylate, Caprylic/Capric Triglyceride, Chamomilla Recutita (Matricaria) Flower Extract, Aloe Barbadensis Leaf Juice, Hydrolyzed Collagen, Sodium Hyaluronate, Tocopheryl Acetate, Alpha-Arbutin, Pyrus Malus (Apple) Fruit Extract, Ananas Sativus (Pineapple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply generously to clean skin 10–15 minutes before sun exposure. Reapply after swimming, sweating, or towel drying. For continuous protection, reapply every two hours.",faqs:[{question:"Does this sunscreen feel greasy?",answer:"No. It has a lightweight texture that absorbs quickly without leaving any residue."},{question:"What does Apple Extract do?",answer:"Rich in antioxidants and malic acid, it helps renew skin cells and protects against UV-induced oxidative stress."},{question:"Can it be used under makeup?",answer:"Yes, it provides a smooth base and is suitable for daily use under makeup."},{question:"Is it suitable for sensitive skin?",answer:"Yes, it's dermatologically tested and suitable for all skin types."}]},9:{productId:9,details:"SincEva Hyaluronic Acid Moisturizing Cream deeply hydrates the skin and provides an instantly smoother appearance. Hyaluronic Acid locks in moisture across all skin layers, ensuring long-lasting hydration. Panthenol reinforces the skin barrier and soothes dryness-induced tightness. Apple Fruit Extract (Pyrus Malus), rich in malic acid and natural antioxidants, supports skin renewal, leaving it fresh and radiant. Its lightweight texture absorbs quickly without greasiness, making it perfect for daily use.",ingredients:"Aqua, Isopropyl Myristate, Glycerin, Propylene Glycol, Sodium Acrylates Copolymer, Phenoxyethanol, Lecithin, Sodium Hyaluronate, Lactobacillus Lysate, Panthenol, Ethylhexylglycerin, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Aroma, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply twice daily, morning and evening, to clean and dry skin. Gently massage in circular motions until fully absorbed. No rinsing required.",faqs:[{question:"What does Hyaluronic Acid do?",answer:"It boosts the skin's ability to retain moisture, leaving it plump and smooth."},{question:"What is the benefit of Apple Extract?",answer:"It promotes cell renewal and provides antioxidant protection against environmental stress."},{question:"When should it be used?",answer:"Suitable for daily use, both morning and night."},{question:"Is it suitable for all skin types?",answer:"Yes, especially effective for dry or dehydrated skin."}]}},HR={1:{productId:1,details:"سيروم فيتامين سي من سينسإيفا يحتوي على 5٪ فيتامين C الذي يساعد على توحيد لون البشرة ومنحها إشراقاً طبيعياً. بفضل خصائصه المضادة للأكسدة، يحمي البشرة من الجذور الحرة ويساعد على الوقاية من الشيخوخة الناتجة عن أشعة الشمس. يحتوي أيضاً على الألوفيرا التي تهدئ البشرة، ومستخلص التفاح (Pyrus Malus) الغني بحمض الماليك والفيتامينات الطبيعية التي تدعم تجديد الخلايا وتزيد من إشراق البشرة. مع الاستخدام المنتظم، تبدو البشرة أكثر توهجاً وثباتاً وانتعاشاً.",ingredients:"ماء، بروبيلين غليكول، 3-O-إيثيل أسكوربيك أسيد، جلسيرين، فينوكسي إيثانول، أمونيوم بولي أكريلويل ديميثيل توريت، ليسات لاكتوباسيلوس، إيثيل هكسيل جلسيرين، مستخلص أوراق الألوفيرا، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، حمض الستريك، بنزوات الصوديوم، سوربات البوتاسيوم، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي 2–3 قطرات على بشرة نظيفة وجافة صباحاً ومساءً، ودلّكي بلطف حتى تمتصها البشرة بالكامل. يُنصح باستخدام واقي الشمس أثناء النهار.",faqs:[{question:"لأي نوع من أنواع البشرة يناسب السيروم؟",answer:"مناسب لجميع أنواع البشرة، خاصة للبشرة الباهتة أو المتعبة أو غير المتجانسة اللون."},{question:"ما فائدة مستخلص التفاح؟",answer:"يدعم تجديد خلايا البشرة ويزيد من إشراقها الطبيعي بفضل حمض الماليك والفيتامينات."},{question:"متى تظهر النتائج؟",answer:"تظهر النتائج عادة خلال 3–4 أسابيع من الاستخدام المنتظم."},{question:"هل يمكن استخدامه في النهار؟",answer:"نعم، ولكن يجب استخدام واقي الشمس معه دائماً."}]},2:{productId:2,details:"سيروم الأربوتين من سينسإيفا يستهدف تفاوت لون البشرة ليمنحها مظهراً أكثر إشراقاً ونعومة وتوهجاً. يحتوي على %2 ألفا-أربوتين الذي يساعد على تنظيم إنتاج الميلانين وتقليل مظهر بقع الشمس والتقدم في العمر وحب الشباب والحمل. كما تعمل النياسيناميد على تقوية حاجز البشرة، بينما يقوم مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك الطبيعي ومضادات الأكسدة بتجديد خلايا البشرة وحمايتها من الجذور الحرة. يتميز بتركيبة خفيفة تمتصها البشرة بسرعة دون أن تترك أي أثر دهني، مما يمنح إشراقاً طبيعياً مع الاستخدام المنتظم.",ingredients:"ماء، بروبيلين غليكول، ألفا أربوتين، جلسيرين، فينوكسي إيثانول، أمونيوم بولي أكريلويل ديميثيل توريت، نياكيناميد، ليسات لاكتوباسيلوس، إيثيل هكسيل جلسيرين، مستخلص أوراق الألوفيرا، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، حمض الستريك، بنزوات الصوديوم، سوربات البوتاسيوم، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي 2-3 قطرات على بشرة نظيفة وجافة صباحاً ومساءً. دلّكي بلطف حتى تمتص البشرة المنتج بالكامل. يُنصح باستخدام واقي الشمس أثناء النهار.",faqs:[{question:"ما فائدة سيروم الأربوتين؟",answer:"يساعد على توحيد لون البشرة وتقليل ظهور البقع الداكنة وبقع الشمس والتقدم في العمر."},{question:"ما فائدة مستخلص التفاح في السيروم؟",answer:"غني بحمض الماليك ومضادات الأكسدة، يدعم تجديد البشرة ويحميها من الجذور الحرة ويمنحها إشراقاً طبيعياً."},{question:"هل يمكن استخدامه في النهار؟",answer:"نعم، ولكن يجب استخدام واقي الشمس معه دائماً."},{question:"متى تظهر النتائج؟",answer:"تظهر النتائج الواضحة عادة خلال 3-4 أسابيع من الاستخدام المنتظم."}]},3:{productId:3,details:"كريم العين المضاد للتجاعيد من سينسإيفا يجمع بين الجزيء الفائق الحاصل على براءة اختراع Proxylane والكولاجين ومستخلص التفاح (Pyrus Malus) لاستهداف الخطوط الدقيقة وتجاعيد القدمين والهالات السوداء. يقوّي الـ Proxylane بنية البشرة ميكانيكياً ويعيد لها المرونة، بينما يمنح الكولاجين امتلاءً ونعومة للمنطقة الحساسة حول العينين. أما مستخلص التفاح الغني بحمض الماليـك ومضادات الأكسدة فيجدّد خلايا البشرة ويمنحها إشراقاً طبيعياً. ومع الاستخدام المنتظم تبدو المنطقة حول العين أكثر نعومة وشباباً.",ingredients:"ماء، ثنائي بوتيل أديبات، بروبيلين غليكول، أيزوبروبيل مايرستات، كوبوليمر أكريلات الصوديوم، بانثينول، فينوكسي إيثانول، Proxylane، ليسيثين، كولاجين مهدرج، ليسات لاكتوباسيلوس، إيثيل هكسيل جلسيرين، 1,2-هيكسانديول، جلسيرين، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، بنتيلين غليكول، مستخلص الليمون، مستخلص فاكهة العاطفة، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية صغيرة على منطقة العين النظيفة والجافة صباحاً ومساءً، ودلّكي بلطف حتى تمتصها البشرة. قد يظهر وخز خفيف نتيجة المكونات النشطة. لا حاجة للشطف.",faqs:[{question:"لأي فئة عمرية يناسب هذا الكريم؟",answer:"مناسب لمن تجاوزوا سن 25 عاماً، وخاصة لمن يعانون من الخطوط الدقيقة أو الهالات السوداء."},{question:"ما دور مستخلص التفاح؟",answer:"يغذي ويجدد البشرة حول العينين بفضل حمض الماليـك ومضادات الأكسدة، ويقلل من علامات التعب."},{question:"هل يمكن استخدامه تحت المكياج؟",answer:"نعم، تركيبته الخفيفة تجعله مناسباً لذلك."},{question:"ماذا أفعل إذا دخل العين؟",answer:"اغسلي العينين بالماء الوفير، وإذا استمر التهيج استشيري الطبيب الجلدي."}]},4:{productId:4,details:"كريم الليل المضاد للشيخوخة من سينسإيفا يدعم عملية تجديد البشرة الطبيعية أثناء الليل. يحتوي على الريتينول الليبوزومي الذي يحفّز تجديد الخلايا ويساعد على تقليل مظهر الخطوط الدقيقة والتجاعيد وتفاوت لون البشرة. كما تعمل النياسيناميد على تقوية حاجز البشرة وتقليل مظهر المسام لتحسين الملمس. غني بـ مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة، الذي يوازن لون البشرة ويحميها من الجذور الحرة ويمنحها إشراقاً طبيعياً. في الصباح، تبدو البشرة أكثر نعومة وثباتاً وشباباً.",ingredients:"ماء، ثنائي بوتيل أديبات، جلسيرين، أيزوبروبيل مايرستات، بروبيلين غليكول، كوبوليمر أكريلات الصوديوم، فينوكسي إيثانول، بانثينول، ليسيثين، ثلاثي الغليسريد الكابريليك/الكابريك، هيالورونات الصوديوم، عطر، ليسات لاكتوباسيلوس، بولي سوربيت 20، ريتينول، إيثيل هكسيل جلسيرين، نياكيناميد، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، BHT، بولي غليسيريل-10 ميرستات، إيثيل لورويل أرجينات HCl، BHA، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية مناسبة على بشرة نظيفة وجافة قبل النوم، ودلّكي بلطف بحركات دائرية حتى تمتصها البشرة بالكامل. لا حاجة للشطف. عند استخدام منتجات الريتينول، يجب وضع واقي الشمس في النهار.",faqs:[{question:"لأي فئة عمرية يناسب هذا الكريم؟",answer:"مناسب لمن تجاوزوا سن 25 عاماً، خصوصاً لمن يعانون من الخطوط الدقيقة أو فقدان المرونة أو تفاوت لون البشرة."},{question:"ما فائدة مستخلص التفاح؟",answer:"يدعم تجديد خلايا البشرة ويمنحها إشراقاً بفضل حمض الماليك ومضادات الأكسدة."},{question:"هل يمكن استخدامه في النهار؟",answer:"لا، مخصص للاستخدام الليلي فقط. ويجب وضع واقي الشمس في النهار."},{question:"هل يمكن أن يسبب الريتينول تهيجاً؟",answer:"قد يسبب وخزاً خفيفاً أو احمراراً في البداية، وهو أمر طبيعي مع تأقلم البشرة."}]},5:{productId:5,details:"تونر سينسإيفا لتجديد البشرة ينظف البشرة بعمق ويساعد على تقليل مظهر المسام والحفاظ على توازن إفراز الزيوت. يحتوي على 5٪ حمض الجليكوليك ومزيج أحماض AHA (جليكوليك، ماليك، لاكتيك، تارتاريك، وسيتريك) التي تزيل خلايا الجلد الميتة بلطف لتمنح البشرة مظهراً متجدداً ومشرقاً. كما يوفر مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة تأثير تقشير طبيعي لطيف يساعد على تفتيح البشرة الباهتة واستعادة إشراقها الطبيعي. مع الاستخدام المنتظم، تبدو البشرة أكثر نعومة وتوازناً وانتعاشاً.",ingredients:"ماء، حمض الجليكوليك، بروبيلين غليكول، ثلاثي إيثانول أمين، فينوكسي إيثانول، جلوكوز، يوريا، بانثينول، حمض الأسكوربيك الإيثيلي، ليسات لاكتوباسيلوس، فركتوز، هيدروكسيليز النشا المهدرج، صوديوم PCA، PEG-40 زيت الخروع المهدرج، جلايسين، بروتين القمح المهدرج، غلوتامات الصوديوم، إيثيل هكسيل جلسيرين، جلسيرين، تيتراصوديوم EDTA، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، عطر، بنزوات الصوديوم، حمض الستريك، حمض اللاكتيك، ليسين، حمض الماليك، هيدروكسيد البوتاسيوم، سوربات البوتاسيوم، هيدروكسيد الصوديوم، حمض التارتاريك، مستخلص الليمون، مستخلص فاكهة العاطفة، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك، CI 17200.",howToUse:"بعد تنظيف البشرة، ضعي كمية مناسبة من التونر على بشرة جافة باستخدام قطعة قطن. لا حاجة للشطف. يُنصح باستخدام واقي الشمس أثناء النهار.",faqs:[{question:"لأي نوع من أنواع البشرة يناسب هذا التونر؟",answer:"مناسب للبشرة الدهنية والمختلطة والعادية. للبشرة الحساسة، يُنصح بالاستخدام من 2 إلى 3 مرات أسبوعياً."},{question:"ما فائدة مستخلص التفاح؟",answer:"غني بحمض الماليك ومضادات الأكسدة، يدعم تجديد البشرة ويقلل من البهتان."},{question:"هل يسبب إحساساً بالحرارة أو الوخز؟",answer:"وخز خفيف طبيعي؛ في حال الشعور بحرقة أو احمرار، توقفي عن الاستخدام."},{question:"هل يمكن استخدامه في النهار؟",answer:"نعم، ولكن يجب استخدام واقي الشمس معه."}]},6:{productId:6,details:"كريم التقشير من سينسإيفا ينظف البشرة بلطف ويزيل خلايا الجلد الميتة ليمنحها مظهراً أكثر نعومة وإشراقاً. غني بمصادر طبيعية لأحماض AHA مثل مستخلص التفاح (Pyrus Malus) والليمون والأناناس، حيث ينظف البشرة من الأوساخ والزيوت الزائدة والشوائب بفعالية. تحتوي تركيبته على حمض الماليك وحمض الأسكوربيك وحمض الجليكوليك التي تساعد على شد المسام وتجديد نضارة البشرة. مع الاستخدام المنتظم، تتجدد خلايا البشرة ويصبح لونها أكثر توازناً وإشراقاً.",ingredients:"ماء، كحول سيتيريل، جلسيرين، حمض الجليكوليك، حمض الأسكوربيك، حمض الماليك، بروبيلين غليكول، حمض الستيريك، سيتيريث-20، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، فينوكسي إيثانول، إيثيل هكسيل جلسيرين، بنزوات الصوديوم، سوربات البوتاسيوم، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"خذي كمية مناسبة من الكريم وافركيها بلطف على بشرة رطبة بحركات دائرية. اشطفي جيداً بالماء الفاتر. يُنصح بالاستخدام من 2 إلى 3 مرات أسبوعياً للحصول على أفضل النتائج.",faqs:[{question:"هل يسبب هذا المقشر تهيجاً للبشرة؟",answer:"لا، فهو يحتوي على أحماض AHA الطبيعية التي تقشر البشرة بلطف دون تهيج."},{question:"ما فائدة مستخلص التفاح؟",answer:"غني بحمض الماليك ومضادات الأكسدة التي تنعّم البشرة وتمنحها إشراقاً وانتعاشاً."},{question:"كم مرة يجب استخدامه؟",answer:"للبشرة العادية 2–3 مرات أسبوعياً، وللبشرة الحساسة مرة واحدة أسبوعياً."},{question:"متى يفضل استخدامه؟",answer:"يُفضل استخدامه في المساء، مع وضع مرطب بعده وواقي شمس في النهار."}]},7:{productId:7,details:"رغوة تنظيف الوجه من سينسإيفا تنظف البشرة بلطف دون أن تجففها، وتمنحها إحساساً بالانتعاش والنقاء. تعمل رغوتها الغنية على إزالة الأوساخ والزيوت الزائدة وبقايا المكياج من المسام بفعالية. تحتوي على الألوفيرا التي تهدئ البشرة، ومستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة التي تدعم تجديد البشرة وتوازن لونها وتزيد من إشراقها. مع الاستخدام اليومي، تصبح البشرة نظيفة وناعمة ومنتعشة.",ingredients:"ماء، كوكاميدوبروبيل بيتايـن، صوديوم كوكويل أيزيثيونات، جلسيرين، فينوكسي إيثانول، صوديوم لورويل ساركوزينات، إيثيل هكسيل جلسيرين، بانثينول، حمض الستريك، PEG-7 غليسيريل كوكوات، كوكو-غلوكوزيد، غليسيريل أوليات، ليسات لاكتوباسيلوس، مستخلص التفاح (Pyrus Malus)، عصارة أوراق الألوفيرا، مستخلص الأناناس، مستخلص الليمون، مستخلص فاكهة العاطفة، بنزوات الصوديوم، سوربات البوتاسيوم، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية مناسبة على بشرة مبللة، ثم افركي بلطف بحركات دائرية لتكوين رغوة. اشطفي جيداً بالماء الفاتر. يُنصح بالاستخدام مرتين يومياً صباحاً ومساءً.",faqs:[{question:"هل يجفف البشرة؟",answer:"لا، تركيبته اللطيفة تنظف البشرة دون أن تزيل رطوبتها وتحافظ على توازنها الطبيعي."},{question:"ما فائدة مستخلص التفاح؟",answer:"يجدد سطح البشرة بفضل حمض الماليك ومضادات الأكسدة ويزيد من إشراقها وحيويتها."},{question:"هل يمكن استخدامه حول العينين؟",answer:"يُفضل تجنب ملامسته للعينين مباشرة، ويمكن استخدامه بلطف قرب منطقة العين."},{question:"لأي نوع من أنواع البشرة يناسب؟",answer:"مناسب لجميع أنواع البشرة، خصوصاً للبشرة المختلطة والدهنية التي تحتاج إلى انتعاش وتنظيف عميق."}]},8:{productId:8,details:"كريم الوقاية من الشمس SPF 50 من سينسإيفا يوفر حماية شاملة ضد أشعة UVA و UVB الضارة بفضل تركيبته المتطورة والخفيفة. يمتص بسرعة دون أن يترك أي أثر دهني ويمنح البشرة لمسة ناعمة ومريحة. يحتوي على الألوفيرا التي تهدئ البشرة، والبانثينول الذي يقوي حاجز الرطوبة، بينما يعمل مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة على تجديد خلايا البشرة وحمايتها من العوامل البيئية. مع الاستخدام المنتظم، يمنح البشرة ترطيباً وحماية طبيعية من أشعة الشمس.",ingredients:"ماء، بيس إيثيل هيكسيلوكسي فينول ميثوكسي فينيل تريازين، ثنائي إيثيل أمينو هيدروكسي بنزويل هيكسيل بنزوات، كحول الألكيل (C12-15)، إيثيل هيكسيل بالميتات، إيثيل هيكسيل تريازون، كحول سيتيريل، جلسيرين، أكسيد الزنك، سيتيريث-20، ثنائي ميثيكون، بانثينول، ستيرات الجلسيريل، PEG-100 ستيرات، بيوتيلين غليكول، فينوكسي إيثانول، ثاني أكسيد التيتانيوم، ألانتوين، إيثيل هيكسيل جلسيرين، بولي أكريلات الأمونيوم، ثلاثي الغليسريد الكابريليك/الكابريك، مستخلص البابونج، عصارة أوراق الألوفيرا، كولاجين مهدرج، هيالورونات الصوديوم، خلات التوكوفيرول، ألفا أربوتين، مستخلص التفاح (Pyrus Malus)، مستخلص الأناناس، مستخلص الليمون، مستخلص فاكهة العاطفة، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية مناسبة على بشرة نظيفة قبل التعرض لأشعة الشمس بـ 10–15 دقيقة. أعيدي التطبيق بعد السباحة أو التعرق أو تجفيف البشرة بالمنشفة. للحصول على حماية مستمرة، يُنصح بإعادة الاستخدام كل ساعتين.",faqs:[{question:"هل يترك الكريم إحساساً دهنياً؟",answer:"لا، تركيبته خفيفة تمتصها البشرة بسرعة دون أن تترك أي بقايا."},{question:"ما فائدة مستخلص التفاح؟",answer:"غني بمضادات الأكسدة وحمض الماليك، يساعد على تجديد خلايا البشرة وحمايتها من الإجهاد التأكسدي الناتج عن الشمس."},{question:"هل يمكن استخدامه تحت المكياج؟",answer:"نعم، يوفر قاعدة ناعمة للمكياج ومناسب للاستخدام اليومي."},{question:"هل يناسب البشرة الحساسة؟",answer:"نعم، تم اختباره جلدياً ومناسب لجميع أنواع البشرة."}]},9:{productId:9,details:"كريم الترطيب بحمض الهيالورونيك من سينسإيفا يرطّب البشرة بعمق ويمنحها مظهراً أكثر نعومة على الفور. يقوم حمض الهيالورونيك بحبس الرطوبة في طبقات الجلد المختلفة لضمان ترطيب طويل الأمد، بينما يقوّي البانثينول حاجز البشرة ويخفف من الجفاف. يحتوي على مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة الطبيعية التي تدعم تجديد البشرة وتمنحها إشراقاً وحيوية. تركيبة خفيفة تمتصها البشرة بسرعة دون أن تترك أثراً دهنياً، مثالية للعناية اليومية.",ingredients:"ماء، أيزوبروبيل مايرستات، جلسيرين، بروبيلين غليكول، كوبوليمر أكريلات الصوديوم، فينوكسي إيثانول، ليسيثين، هيالورونات الصوديوم، ليسات لاكتوباسيلوس، بانثينول، إيثيل هكسيل جلسيرين، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، عطر، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية مناسبة من الكريم على بشرة نظيفة وجافة صباحاً ومساءً. دلّكي بلطف بحركات دائرية حتى تمتصه البشرة بالكامل. لا حاجة للشطف.",faqs:[{question:"ما فائدة حمض الهيالورونيك؟",answer:"يزيد من قدرة البشرة على الاحتفاظ بالرطوبة ويمنحها امتلاءً ونعومة."},{question:"ما دور مستخلص التفاح؟",answer:"يدعم تجديد خلايا البشرة ويوفر حماية مضادة للأكسدة ضد العوامل البيئية."},{question:"متى يُستخدم الكريم؟",answer:"مناسب للاستخدام اليومي صباحاً ومساءً."},{question:"هل يناسب جميع أنواع البشرة؟",answer:"نعم، مناسب لجميع أنواع البشرة وخاصة الجافة أو التي تعاني من فقدان الترطيب."}]}},_R={tr:OR,en:KR,ar:HR},GR="/assets/cvit-01-sMKPjFqT.png",UR="/assets/arbutin-01-CUQh2MEu.png",YR="/assets/g%C3%B6z-01-MgA7CxiM.png",$R="/assets/night_cream-01-DGAehklA.png",VR="/assets/tonik-01-VPfM-Y2b.png",qR="/assets/peeling-01-Ba2E6ZOD.png",WR="/assets/y%C3%BCz-01-tvgA1xhs.png",QR="/assets/g%C3%BCne%C5%9F-01-cXyemcq-.png",XR="/assets/nemlendirici-01-DsrqVjID.png",ZR="/assets/V%C4%B0TC%C3%9CR%C3%9CN2-BaqSzv-k.png",JR="/assets/V%C4%B0TC%C3%9CR%C3%9CN3-v0l6op-A.png",eD="/assets/V%C4%B0TC%C3%9CR%C3%9CN5-BZHPkT9y.png",tD="/assets/V%C4%B0TC%C3%9CR%C3%9CN6-CctoDrRr.png",nD="/assets/ARBUT%C4%B0N%C3%9CR%C3%9CN2-CWIEPlig.png",aD="/assets/ARBUT%C4%B0N%C3%9CR%C3%9CN3-C7vSHZSW.png",iD="/assets/ARBUT%C4%B0N%C3%9CR%C3%9CN5-B-UnTK3r.png",rD="/assets/ARBUT%C4%B0N%C3%9CR%C3%9CN6-DSBnynri.png",lD="/assets/G%C3%96Z%C3%9CR%C3%9CN2-wNOGth-d.png",sD="/assets/G%C3%96Z%C3%9CR%C3%9CN3-DOhidXHT.png",oD="/assets/G%C3%96Z%C3%9CR%C3%9CN5-DlRzJaPR.png",cD="/assets/G%C3%96Z%C3%9CR%C3%9CN6-D32p1g8l.png",uD="/assets/GECE%C3%9CR%C3%9CN2-B9zIGI7w.png",dD="/assets/GECE%C3%9CR%C3%9CN3-BwA9uwYL.png",mD="/assets/GECE%C3%9CR%C3%9CN5-9MLT9SCu.png",fD="/assets/GECE%C3%9CR%C3%9CN6-BNo1p0u0.png",hD="/assets/TON%C4%B0K%C3%9CR%C3%9CN2-DdXtmdws.png",yD="/assets/TON%C4%B0K%C3%9CR%C3%9CN3-DktV1TfF.png",pD="/assets/TON%C4%B0K%C3%9CR%C3%9CN5-hfyWUuTs.png",kD="/assets/TON%C4%B0K%C3%9CR%C3%9CN6-DCN8_5RD.png",gD="/assets/PEELING%C3%9CR%C3%9CN2-BY-c2i31.png",vD="/assets/PEELING%C3%9CR%C3%9CN3-hx66ZHv3.png",bD="/assets/PEELING%C3%9CR%C3%9CN5-CBc-MuFm.png",xD="/assets/PEELING%C3%9CR%C3%9CN6-Bfgc-iTB.png",zD="/assets/Y%C3%9CZ%C3%9CR%C3%9CN2-Cd6AwVjw.png",wD="/assets/Y%C3%9CZ%C3%9CR%C3%9CN3-BhSbeyed.png",SD="/assets/Y%C3%9CZ%C3%9CR%C3%9CN5-Du9-UnnW.png",CD="/assets/Y%C3%9CZ%C3%9CR%C3%9CN6-DhhAsaU8.png",jD="/assets/G%C3%9CNE%C5%9E%C3%9CR%C3%9CN2-CoVkK36X.png",ND="/assets/G%C3%9CNE%C5%9E%C3%9CR%C3%9CN3-CgfxseTt.png",AD="/assets/G%C3%9CNE%C5%9E%C3%9CR%C3%9CN5-BOMASQDp.png",ED="/assets/G%C3%9CNE%C5%9E%C3%9CR%C3%9CN6-DohPqaGE.png",TD="/assets/NEMLEND%C4%B0R%C4%B0C%C4%B0%C3%9CR%C3%9CN2-6Cz-yd05.png",PD="/assets/NEMLEND%C4%B0R%C4%B0C%C4%B0%C3%9CR%C3%9CN3--c7D7cUI.png",MD="/assets/NEMLEND%C4%B0R%C4%B0C%C4%B0%C3%9CR%C3%9CN5-D818gAf_.png",RD="/assets/NEMLEND%C4%B0R%C4%B0C%C4%B0%C3%9CR%C3%9CN6-BScpYwMJ.png",Dn="/assets/ZHER%C3%9CR%C3%9CN4-CksOWV6N.png",DD=()=>{var S;const{id:e}=Tf(),[t,n]=f.useState(!1),[a,i]=f.useState(!0),[l,s]=f.useState(null),o=f.useRef(null);E0();const c=zl.products.find(C=>C.id.toString()===e),d=c?{"Sinceva Brightening Vitamin C Serum 30 ml":GR,"Sinceva Anti-Spot Arbutin Serum 30 ml":UR,"Sinceva Anti-Wrinkle Eye Cream 20 ml":YR,"Sinceva Anti-Aging Night Cream 50 ml":$R,"Sinceva Skin Renewing Tonic 200 ml":VR,"Sinceva Purifying Peeling Cream Scrub 200 ml":qR,"Sinceva Purifying Face Cleansing Foam 200 ml":WR,"Sinceva SPF 50+ Daily SunCare Cream 100 ml":QR,"Sinceva Hyaluronic Acid Moisturizing Cream 50 ml":XR}[c.name]||c.image:"",h=c&&d?((C,j)=>{switch(C){case"Sinceva Brightening Vitamin C Serum 30 ml":return[ZR,JR,Dn,eD,tD];case"Sinceva Anti-Spot Arbutin Serum 30 ml":return[nD,aD,Dn,iD,rD];case"Sinceva Anti-Wrinkle Eye Cream 20 ml":return[lD,sD,Dn,oD,cD];case"Sinceva Anti-Aging Night Cream 50 ml":return[uD,dD,Dn,mD,fD];case"Sinceva Skin Renewing Tonic 200 ml":return[hD,yD,Dn,pD,kD];case"Sinceva Purifying Peeling Cream Scrub 200 ml":return[gD,vD,Dn,bD,xD];case"Sinceva Purifying Face Cleansing Foam 200 ml":return[zD,wD,Dn,SD,CD];case"Sinceva SPF 50+ Daily SunCare Cream 100 ml":return[jD,ND,Dn,AD,ED];case"Sinceva Hyaluronic Acid Moisturizing Cream 50 ml":return[TD,PD,Dn,MD,RD];default:return[j]}})(c.name,d):[],k=[{id:"trendyol",name:"Trendyol",logo:"/lovable-uploads/081fc38c-4560-45a6-983f-80febd33d0e4.png",url:{"Sinceva Brightening Vitamin C Serum 30 ml":"https://www.trendyol.com/pd/sinceva/vitamin-c-serum-5-c-vitamini-aloe-vera-elma-ozlu-ton-esitleyici-aydinlatici-30ml-p-985597681?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Spot Arbutin Serum 30 ml":"https://www.trendyol.com/pd/sinceva/arbutin-serum-2-alfa-arbutin-niasinamid-elma-ozlu-leke-karsiti-ton-esitleyici-30ml-p-985597018?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Wrinkle Eye Cream 20 ml":"https://www.trendyol.com/pd/sinceva/goz-cevresi-kremi-proxylane-kolajen-elma-ozlu-kirisiklik-ve-morluk-karsiti-20ml-p-985597222?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Aging Night Cream 50 ml":"https://www.trendyol.com/pd/sinceva/gece-kremi-retinol-niasinamid-elma-ozlu-ince-cizgi-kirisiklik-karsiti-50ml-p-985597313?merchantId=1083214&filterOverPriceListings=false","Sinceva Skin Renewing Tonic 200 ml":"https://www.trendyol.com/pd/sinceva/cilt-yenileyici-tonik-5-glikolik-asit-elma-ozlu-gozenek-sikilastirici-sebum-dengesi-200ml-p-985596983?merchantId=1083214&filterOverPriceListings=false","Sinceva Purifying Peeling Cream Scrub 200 ml":"https://www.trendyol.com/pd/sinceva/peeling-scrub-krem-kayisi-cekirdegi-partikullu-elma-ozlu-olu-deri-gozenek-arindirici-200ml-p-985597046?merchantId=1083214&filterOverPriceListings=false","Sinceva Purifying Face Cleansing Foam 200 ml":"https://www.trendyol.com/pd/sinceva/yuz-temizleme-kopugu-aloe-vera-elma-ozlu-nazik-temizleyici-arindirici-200ml-p-985596926?merchantId=1083214&filterOverPriceListings=false","Sinceva SPF 50+ Daily SunCare Cream 100 ml":"https://www.trendyol.com/pd/sinceva/gunes-kremi-spf-50-aloe-vera-panthenol-elma-ozlu-genis-spektrumlu-uva-uvb-koruma-100ml-p-985596960?merchantId=1083214&filterOverPriceListings=false","Sinceva Hyaluronic Acid Moisturizing Cream 50 ml":"https://www.trendyol.com/pd/sinceva/hyaluronik-asit-gunluk-nemlendirici-krem-panthenol-elma-ozlu-yogun-nem-bariyer-onarici-50ml-p-985596967?merchantId=1083214&filterOverPriceListings=false"}[(c==null?void 0:c.name)||""]||"https://www.trendyol.com"}],{language:v}=_e(),g=at[v],y=c?_R[v][c.id]:null,b=(y==null?void 0:y.faqs)||[{question:"Is this product suitable for sensitive skin?",answer:"Yes, our products are dermatologically tested and suitable for all skin types including sensitive skin."},{question:"How long until I see results?",answer:"Most customers notice improvements within 2-4 weeks of regular use. However, results may vary depending on your skin type and condition."},{question:"Can I use this product with other skincare products?",answer:"Yes, this product is designed to work well with most skincare routines. However, we recommend patch testing when combining with new products."},{question:"What is the shelf life of this product?",answer:"The product has a shelf life of 24 months when unopened, and 12 months after opening. Store in a cool, dry place away from direct sunlight."}],z=[{value:"details",title:g.productDetails,content:(y==null?void 0:y.details)||(c==null?void 0:c.description)+" This premium product is formulated with the finest ingredients to deliver exceptional results. Our advanced formula is designed to meet your specific skincare needs while being gentle on all skin types."},{value:"ingredients",title:g.ingredients,content:(y==null?void 0:y.ingredients)||"Aqua, Glycerin, Sodium Hyaluronate, Vitamin C, Niacinamide, Ceramides, Peptides, Botanical Extracts. All ingredients are carefully selected and tested for purity and effectiveness."},{value:"howto",title:g.howToUse,content:(y==null?void 0:y.howToUse)||"Apply a small amount to clean, dry skin. Gently massage in circular motions until fully absorbed. Use twice daily for best results. Always apply sunscreen during the day when using this product."},{value:"faq",title:g.faq,content:null}];return f.useEffect(()=>{const C=()=>{if(o.current){const w=o.current.getBoundingClientRect().top<=window.innerHeight;i(!w)}};return window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)},[]),c?r.jsxs(qe,{children:[r.jsx("div",{className:"w-full",children:r.jsx(Wn,{ratio:2/3,children:r.jsxs("div",{className:"relative w-full h-full",children:[r.jsx("img",{src:d,alt:c.name,className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10",children:r.jsx(ne,{onClick:()=>n(!0),className:"py-2 text-lg font-semibold bg-[#ef2b2d] text-white hover:bg-[#ef2b2d]/90 rounded-full px-6",style:{width:"clamp(150px, 15vw, 200px)"},children:g.buy})})]})})}),r.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-8",children:[r.jsx("div",{className:"mb-8",children:r.jsx("h1",{className:"text-3xl font-bold text-[#191919] mb-4",children:((S=g.productNames)==null?void 0:S[c.id])||c.name})}),r.jsx("div",{className:"mb-8",children:r.jsxs(El,{className:"w-full",children:[r.jsx(Tl,{className:"-ml-2 md:-ml-4",children:h.map((C,j)=>r.jsx(Pl,{className:"pl-2 md:pl-4 basis-3/4 md:basis-1/3",children:r.jsx("div",{className:"overflow-hidden rounded-lg cursor-pointer",onClick:()=>s(j),children:r.jsx(Wn,{ratio:2/3,children:r.jsx("img",{src:C,alt:`${c.name} - ${j+1}`,className:"w-full h-full object-cover hover:scale-105 transition-transform duration-200"})})})},j))}),r.jsxs("div",{className:"hidden md:block",children:[r.jsx(qf,{className:"absolute left-4 top-1/2 -translate-y-1/2"}),r.jsx(Wf,{className:"absolute right-4 top-1/2 -translate-y-1/2"})]})]})}),r.jsx("div",{className:"mb-8",children:r.jsx(Cp,{type:"single",defaultValue:"details",collapsible:!0,className:"w-full",children:z.map(C=>r.jsxs(sm,{value:C.value,children:[r.jsx(om,{className:"text-left font-semibold",children:C.title}),r.jsx(cm,{className:"text-gray-600",children:C.value==="faq"?r.jsx(Cp,{type:"multiple",className:"w-full",children:b.map((j,w)=>r.jsxs(sm,{value:`faq-${w}`,children:[r.jsx(om,{className:"text-left font-medium text-sm",children:j.question}),r.jsx(cm,{className:"text-gray-600 text-sm",children:j.answer})]},w))}):C.content})]},C.value))})}),r.jsx(ke,{className:"mb-8"})]}),r.jsx(LR,{currentProductId:c.id,products:zl.products,title:g.discoverProducts}),a&&r.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-40",children:r.jsx("div",{className:"container mx-auto max-w-7xl",children:r.jsx("button",{onClick:()=>n(!0),className:"w-full py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[#191919] text-lg font-semibold transition-all hover:bg-white/30",children:g.buy})})}),r.jsx(FR,{productId:c.id}),r.jsx("div",{ref:o,className:"h-1"}),r.jsx(l0,{isOpen:t,onClose:()=>n(!1),productName:c.name,stores:k}),r.jsx(BR,{images:h,currentIndex:l,onClose:()=>s(null),onNavigate:s})]}):r.jsx(qe,{children:r.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16 text-center",children:[r.jsx("h1",{className:"text-2xl font-bold mb-4",children:g.productNotFound}),r.jsx("p",{className:"text-muted-foreground",children:g.productNotFoundDesc})]})})},ID="/assets/search_banner-yVsg1kF-.jpg",LD="/assets/search_banner_mobile-BfPejL8K.jpg",FD=()=>{const[e,t]=uE(),n=e.get("query")||"",[a,i]=f.useState(n),{searchResults:l,isLoading:s,error:o}=e0(),[c,u]=f.useState([]);f.useEffect(()=>{if(n){const m=l(n,50);u(m)}},[n,l]);const d=m=>{m.preventDefault(),a.trim()&&t({query:a.trim()})};return r.jsxs(qe,{children:[r.jsx(zn,{title:"Search Results",subtitle:n?`Results for "${n}"`:"Search our products and blog posts",backgroundImage:ID,backgroundImageMobile:LD}),r.jsxs("div",{className:"container mx-auto px-4 py-4",children:[r.jsx("div",{className:"max-w-2xl mx-auto mb-6",children:r.jsxs("form",{onSubmit:d,className:"relative",children:[r.jsx(he,{type:"text",placeholder:"Search products and blog posts...",value:a,onChange:m=>i(m.target.value),className:"pr-12 h-12"}),r.jsx("button",{type:"submit",className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",children:r.jsx(Da,{className:"w-5 h-5"})})]})}),r.jsxs("div",{className:"max-w-4xl mx-auto",children:[n&&r.jsx("div",{className:"mb-4",children:r.jsx("h2",{className:"text-lg font-semibold text-foreground",children:s?"Searching...":`${c.length} results found for "${n}"`})}),o&&r.jsx("div",{className:"text-center py-8",children:r.jsx("p",{className:"text-muted-foreground",children:o})}),!s&&!o&&n&&c.length===0&&r.jsx("div",{className:"text-center py-8",children:r.jsxs("p",{className:"text-muted-foreground",children:['No products or blog posts found for "',n,'".']})}),!s&&!o&&c.length>0&&r.jsx("div",{className:"space-y-4",children:c.map(m=>r.jsx(ae,{to:m.url,className:"block bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow",children:r.jsxs("div",{className:"flex items-start space-x-4",children:[r.jsx("div",{className:"w-16 h-16 flex-shrink-0 bg-muted rounded-lg overflow-hidden",children:m.image?r.jsx("img",{src:m.image,alt:m.title,className:"w-full h-full object-cover",onError:h=>{const p=h.target;p.style.display="none"}}):r.jsx("div",{className:"w-full h-full bg-muted flex items-center justify-center text-muted-foreground",children:m.type==="product"?"P":"B"})}),r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[r.jsx("h3",{className:"text-lg font-semibold text-foreground hover:text-primary transition-colors",children:m.title}),r.jsx("span",{className:`inline-block px-2 py-1 rounded text-xs ${m.type==="product"?"bg-primary/10 text-primary":"bg-secondary/10 text-secondary-foreground"}`,children:m.type==="product"?"Product":"Blog"})]}),r.jsx("p",{className:"text-muted-foreground mb-2",children:m.description}),r.jsx("p",{className:"text-sm text-primary",children:m.url})]})]})},m.id))})]})]})]})},BD=()=>{const{language:e}=_e(),t=at[e];return r.jsxs(qe,{children:[r.jsx("div",{className:"w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"}),r.jsx("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:r.jsxs("div",{className:"prose prose-lg max-w-none",children:[r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.whatAreCookies}),r.jsx("p",{className:"mb-4",children:t.cookiesDefinition})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.typesOfCookies}),r.jsx("h3",{className:"text-xl font-semibold mb-3",children:t.necessaryCookies}),r.jsx("p",{className:"mb-4",children:t.necessaryText}),r.jsx("h3",{className:"text-xl font-semibold mb-3",children:t.analyticsCookies}),r.jsx("p",{className:"mb-4",children:t.analyticsText}),r.jsx("h3",{className:"text-xl font-semibold mb-3",children:t.marketingCookies}),r.jsx("p",{className:"mb-4",children:t.marketingText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.howWeUseCookies}),r.jsx("p",{className:"mb-4",children:t.cookieUsageText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.ensureFunction}),r.jsx("li",{children:t.rememberPreferences}),r.jsx("li",{children:t.analyzeTraffic}),r.jsx("li",{children:t.personalizedContent}),r.jsx("li",{children:t.improveSecurity})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.managingCookies}),r.jsx("p",{className:"mb-4",children:t.managingText}),r.jsx("p",{className:"mb-4",children:t.cookieBanner})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.thirdPartyCookies}),r.jsx("p",{className:"mb-4",children:t.thirdPartyText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.contactUsPolicy}),r.jsx("p",{children:t.contactPolicyText}),r.jsxs("ul",{className:"list-disc list-inside mt-2",children:[r.jsx("li",{children:"Email: info@sinceva.com"}),r.jsx("li",{children:"Phone: +90 (545) 378 21 30"})]})]}),r.jsx("div",{className:"text-sm text-gray-600 mt-8",children:r.jsxs("p",{children:[t.lastUpdated," ",new Date().toLocaleDateString(e==="ar"?"ar-SA":e==="tr"?"tr-TR":"en-US")]})})]})})]})},OD=()=>{const{language:e}=_e(),t=at[e];return r.jsxs(qe,{children:[r.jsx("div",{className:"w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"}),r.jsx("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:r.jsxs("div",{className:"prose prose-lg max-w-none",children:[r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.informationWeCollect}),r.jsx("p",{className:"mb-4",children:t.informationCollectText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.personalIdentifiers}),r.jsx("li",{children:t.billingAddresses}),r.jsx("li",{children:t.paymentInfo}),r.jsx("li",{children:t.purchaseHistory}),r.jsx("li",{children:t.communicationPrefs})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.howWeUse}),r.jsx("p",{className:"mb-4",children:t.howWeUseText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.processOrders}),r.jsx("li",{children:t.provideSupport}),r.jsx("li",{children:t.sendMarketing}),r.jsx("li",{children:t.improveProducts}),r.jsx("li",{children:t.complyLegal}),r.jsx("li",{children:t.detectFraud})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.informationSharing}),r.jsx("p",{className:"mb-4",children:t.informationSharingText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.serviceProviders}),r.jsx("li",{children:t.legalRequirements}),r.jsx("li",{children:t.businessTransfers})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.dataSecurity}),r.jsx("p",{className:"mb-4",children:t.dataSecurityText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.yourRights}),r.jsx("p",{className:"mb-4",children:t.yourRightsText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.accessInfo}),r.jsx("li",{children:t.correctInfo}),r.jsx("li",{children:t.deleteInfo}),r.jsx("li",{children:t.objectProcessing}),r.jsx("li",{children:t.withdrawConsent})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.contactUsPolicy}),r.jsx("p",{className:"mb-4",children:t.contactPolicyText}),r.jsxs("ul",{className:"list-disc list-inside",children:[r.jsx("li",{children:"Email: info@sinceva.com"}),r.jsx("li",{children:"Phone: +90 (545) 378 21 30"})]})]}),r.jsx("div",{className:"text-sm text-gray-600 mt-8",children:r.jsxs("p",{children:[t.lastUpdated," ",new Date().toLocaleDateString(e==="ar"?"ar-SA":e==="tr"?"tr-TR":"en-US")]})})]})})]})},KD=()=>{const{language:e}=_e(),t=at[e];return r.jsxs(qe,{children:[r.jsx("div",{className:"w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"}),r.jsx("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:r.jsxs("div",{className:"prose prose-lg max-w-none",children:[r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.acceptanceOfTerms}),r.jsx("p",{className:"mb-4",children:t.acceptanceText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.useLicense}),r.jsx("p",{className:"mb-4",children:t.useLicenseText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.modifyMaterials}),r.jsx("li",{children:t.commercialUse}),r.jsx("li",{children:t.reverseEngineer}),r.jsx("li",{children:t.removeCopyright})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.productInformation}),r.jsx("p",{className:"mb-4",children:t.productInfoText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.ordersPayment}),r.jsx("p",{className:"mb-4",children:t.ordersPaymentText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.ordersSubject}),r.jsx("li",{children:t.reserveRight}),r.jsx("li",{children:t.paymentRequired}),r.jsx("li",{children:t.pricesSubject})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.returnsRefunds}),r.jsx("p",{className:"mb-4",children:t.returnsText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.limitationLiability}),r.jsx("p",{className:"mb-4",children:t.limitationText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.governingLaw}),r.jsx("p",{className:"mb-4",children:t.governingText})]}),r.jsx("div",{className:"text-sm text-gray-600 mt-8",children:r.jsxs("p",{children:[t.lastUpdated," ",new Date().toLocaleDateString(e==="ar"?"ar-SA":e==="tr"?"tr-TR":"en-US")]})})]})})]})},HD=()=>{const{language:e}=_e(),t=at[e];return r.jsxs(qe,{children:[r.jsx("div",{className:"w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"}),r.jsx("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:r.jsxs("div",{className:"prose prose-lg max-w-none",children:[r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.reviewGuidelines}),r.jsx("p",{className:"mb-4",children:t.reviewGuidelinesText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.acceptableContent}),r.jsx("p",{className:"mb-4",children:t.reviewsShouldText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.basedOnExperience}),r.jsx("li",{children:t.honestFeedback}),r.jsx("li",{children:t.focusQuality}),r.jsx("li",{children:t.includeDetails}),r.jsx("li",{children:t.respectfulLanguage}),r.jsx("li",{children:t.relevantProduct})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.prohibitedContent}),r.jsx("p",{className:"mb-4",children:t.reviewsMustNot}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.offensiveLanguage}),r.jsx("li",{children:t.personalInfo}),r.jsx("li",{children:t.spamContent}),r.jsx("li",{children:t.falseInfo}),r.jsx("li",{children:t.violateIP}),r.jsx("li",{children:t.notPurchased}),r.jsx("li",{children:t.defamatoryStatements})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.reviewVerification}),r.jsx("p",{className:"mb-4",children:t.verificationText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.moderationProcess}),r.jsx("p",{className:"mb-4",children:t.moderationText}),r.jsxs("ul",{className:"list-disc list-inside mb-4",children:[r.jsx("li",{children:t.reviewApprove}),r.jsx("li",{children:t.editRemove}),r.jsx("li",{children:t.rejectReviews}),r.jsx("li",{children:t.removeReported})]})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.incentivizedReviews}),r.jsx("p",{className:"mb-4",children:t.incentivizedText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.reportingReviews}),r.jsx("p",{className:"mb-4",children:t.reportingText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.reviewerRights}),r.jsx("p",{className:"mb-4",children:t.reviewerRightsText})]}),r.jsx(ke,{className:"my-8"}),r.jsxs("section",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.contactUsPolicy}),r.jsx("p",{children:t.contactPolicyText}),r.jsxs("ul",{className:"list-disc list-inside mt-2",children:[r.jsx("li",{children:"Email: info@sinceva.com"}),r.jsx("li",{children:"Phone: +90 (545) 378 21 30"})]})]}),r.jsx("div",{className:"text-sm text-gray-600 mt-8",children:r.jsxs("p",{children:[t.lastUpdated," ",new Date().toLocaleDateString(e==="ar"?"ar-SA":e==="tr"?"tr-TR":"en-US")]})})]})})]})},T0=f.createContext(void 0),Hu="https://sinceva.com/api/admin";function Np({children:e}){const[t,n]=f.useState(null),[a,i]=f.useState(!0),l=f.useCallback(async()=>{try{const u=await(await fetch(`${Hu}/check-auth.php`,{credentials:"include"})).json();u.success&&u.authenticated?n(u.admin):n(null)}catch(c){console.error("Auth check failed:",c),n(null)}finally{i(!1)}},[]);f.useEffect(()=>{l()},[l]);const s=async(c,u)=>{try{const m=await(await fetch(`${Hu}/login.php`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:c,password:u})})).json();return m.success?(n(m.admin),!0):!1}catch(d){return console.error("Login failed:",d),!1}},o=async()=>{try{await fetch(`${Hu}/logout.php`,{method:"POST",credentials:"include"})}catch(c){console.error("Logout failed:",c)}finally{n(null)}};return r.jsx(T0.Provider,{value:{admin:t,isAuthenticated:!!t,isLoading:a,login:s,logout:o,checkAuth:l},children:e})}function ah(){const e=f.useContext(T0);if(e===void 0)throw new Error("useAdminAuth must be used within an AdminAuthProvider");return e}var Fc="Dialog",[P0,M0]=Rt(Fc),[_D,mn]=P0(Fc),R0=e=>{const{__scopeDialog:t,children:n,open:a,defaultOpen:i,onOpenChange:l,modal:s=!0}=e,o=f.useRef(null),c=f.useRef(null),[u,d]=Jn({prop:a,defaultProp:i??!1,onChange:l,caller:Fc});return r.jsx(_D,{scope:t,triggerRef:o,contentRef:c,contentId:_n(),titleId:_n(),descriptionId:_n(),open:u,onOpenChange:d,onOpenToggle:f.useCallback(()=>d(m=>!m),[d]),modal:s,children:n})};R0.displayName=Fc;var D0="DialogTrigger",I0=f.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,i=mn(D0,n),l=ye(t,i.triggerRef);return r.jsx(ee.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":lh(i.open),...a,ref:l,onClick:Y(e.onClick,i.onOpenToggle)})});I0.displayName=D0;var ih="DialogPortal",[GD,L0]=P0(ih,{forceMount:void 0}),F0=e=>{const{__scopeDialog:t,forceMount:n,children:a,container:i}=e,l=mn(ih,t);return r.jsx(GD,{scope:t,forceMount:n,children:f.Children.map(a,s=>r.jsx(_t,{present:n||l.open,children:r.jsx(fc,{asChild:!0,container:i,children:s})}))})};F0.displayName=ih;var Vo="DialogOverlay",B0=f.forwardRef((e,t)=>{const n=L0(Vo,e.__scopeDialog),{forceMount:a=n.forceMount,...i}=e,l=mn(Vo,e.__scopeDialog);return l.modal?r.jsx(_t,{present:a||l.open,children:r.jsx(YD,{...i,ref:t})}):null});B0.displayName=Vo;var UD=sr("DialogOverlay.RemoveScroll"),YD=f.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,i=mn(Vo,n);return r.jsx(Df,{as:UD,allowPinchZoom:!0,shards:[i.contentRef],children:r.jsx(ee.div,{"data-state":lh(i.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),ui="DialogContent",O0=f.forwardRef((e,t)=>{const n=L0(ui,e.__scopeDialog),{forceMount:a=n.forceMount,...i}=e,l=mn(ui,e.__scopeDialog);return r.jsx(_t,{present:a||l.open,children:l.modal?r.jsx($D,{...i,ref:t}):r.jsx(VD,{...i,ref:t})})});O0.displayName=ui;var $D=f.forwardRef((e,t)=>{const n=mn(ui,e.__scopeDialog),a=f.useRef(null),i=ye(t,n.contentRef,a);return f.useEffect(()=>{const l=a.current;if(l)return Xb(l)},[]),r.jsx(K0,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Y(e.onCloseAutoFocus,l=>{var s;l.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:Y(e.onPointerDownOutside,l=>{const s=l.detail.originalEvent,o=s.button===0&&s.ctrlKey===!0;(s.button===2||o)&&l.preventDefault()}),onFocusOutside:Y(e.onFocusOutside,l=>l.preventDefault())})}),VD=f.forwardRef((e,t)=>{const n=mn(ui,e.__scopeDialog),a=f.useRef(!1),i=f.useRef(!1);return r.jsx(K0,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{var s,o;(s=e.onCloseAutoFocus)==null||s.call(e,l),l.defaultPrevented||(a.current||(o=n.triggerRef.current)==null||o.focus(),l.preventDefault()),a.current=!1,i.current=!1},onInteractOutside:l=>{var c,u;(c=e.onInteractOutside)==null||c.call(e,l),l.defaultPrevented||(a.current=!0,l.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const s=l.target;((u=n.triggerRef.current)==null?void 0:u.contains(s))&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&i.current&&l.preventDefault()}})}),K0=f.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:i,onCloseAutoFocus:l,...s}=e,o=mn(ui,n),c=f.useRef(null),u=ye(t,c);return Hb(),r.jsxs(r.Fragment,{children:[r.jsx(Rf,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:i,onUnmountAutoFocus:l,children:r.jsx(Kl,{role:"dialog",id:o.contentId,"aria-describedby":o.descriptionId,"aria-labelledby":o.titleId,"data-state":lh(o.open),...s,ref:u,onDismiss:()=>o.onOpenChange(!1)})}),r.jsxs(r.Fragment,{children:[r.jsx(WD,{titleId:o.titleId}),r.jsx(XD,{contentRef:c,descriptionId:o.descriptionId})]})]})}),rh="DialogTitle",H0=f.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,i=mn(rh,n);return r.jsx(ee.h2,{id:i.titleId,...a,ref:t})});H0.displayName=rh;var _0="DialogDescription",G0=f.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,i=mn(_0,n);return r.jsx(ee.p,{id:i.descriptionId,...a,ref:t})});G0.displayName=_0;var U0="DialogClose",Y0=f.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,i=mn(U0,n);return r.jsx(ee.button,{type:"button",...a,ref:t,onClick:Y(e.onClick,()=>i.onOpenChange(!1))})});Y0.displayName=U0;function lh(e){return e?"open":"closed"}var $0="DialogTitleWarning",[qD,V0]=gS($0,{contentName:ui,titleName:rh,docsSlug:"dialog"}),WD=({titleId:e})=>{const t=V0($0),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return f.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},QD="DialogDescriptionWarning",XD=({contentRef:e,descriptionId:t})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${V0(QD).contentName}}.`;return f.useEffect(()=>{var l;const i=(l=e.current)==null?void 0:l.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(a))},[a,e,t]),null},sh=R0,q0=I0,oh=F0,ql=B0,Wl=O0,Ql=H0,Xl=G0,Bc=Y0;const ZD=sh,JD=q0,e4=oh,W0=f.forwardRef(({className:e,...t},n)=>r.jsx(ql,{className:G("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));W0.displayName=ql.displayName;const t4=_l("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),Q0=f.forwardRef(({side:e="right",className:t,children:n,...a},i)=>r.jsxs(e4,{children:[r.jsx(W0,{}),r.jsxs(Wl,{ref:i,className:G(t4({side:e}),t),...a,children:[n,r.jsxs(Bc,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[r.jsx(fi,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Q0.displayName=Wl.displayName;const n4=f.forwardRef(({className:e,...t},n)=>r.jsx(Ql,{ref:n,className:G("text-lg font-semibold text-foreground",e),...t}));n4.displayName=Ql.displayName;const a4=f.forwardRef(({className:e,...t},n)=>r.jsx(Xl,{ref:n,className:G("text-sm text-muted-foreground",e),...t}));a4.displayName=Xl.displayName;const i4=[{name:"Dashboard",href:"/admin",icon:wC},{name:"Aboneler",href:"/admin/subscribers",icon:mf},{name:"İletişim Mesajları",href:"/admin/contacts",icon:or},{name:"Blog Yazıları",href:"/admin/blog",icon:uf},{name:"Ürünler",href:"/admin/products",icon:df},{name:"Ayarlar",href:"/admin/settings",icon:TC}];function Ap({onItemClick:e}){const t=Pn(),{logout:n}=ah(),a=async()=>{await n()};return r.jsxs("div",{className:"flex flex-col h-full",children:[r.jsxs("div",{className:"p-6 border-b",children:[r.jsx(ae,{to:"/admin",className:"block",children:r.jsx("img",{src:Pf,alt:"SincEva",className:"h-12 mx-auto"})}),r.jsx("p",{className:"text-center text-xs text-muted-foreground mt-2",children:"Admin Panel"})]}),r.jsx("nav",{className:"flex-1 p-4 space-y-1",children:i4.map(i=>{const l=t.pathname===i.href;return r.jsxs(ae,{to:i.href,onClick:e,className:G("flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",l?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:[r.jsx(i.icon,{className:"h-5 w-5"}),i.name]},i.name)})}),r.jsxs("div",{className:"p-4 border-t space-y-2",children:[r.jsxs(ae,{to:"/",onClick:e,className:"flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",children:[r.jsx(Av,{className:"h-5 w-5"}),"Siteye Git"]}),r.jsxs("button",{onClick:a,className:"w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors",children:[r.jsx(jC,{className:"h-5 w-5"}),"Çıkış Yap"]})]})]})}function r4(){const[e,t]=f.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"lg:hidden fixed top-4 left-4 z-50",children:r.jsxs(ZD,{open:e,onOpenChange:t,children:[r.jsx(JD,{asChild:!0,children:r.jsx(ne,{variant:"outline",size:"icon",className:"bg-background",children:r.jsx(Ev,{className:"h-5 w-5"})})}),r.jsx(Q0,{side:"left",className:"p-0 w-64",children:r.jsx(Ap,{onItemClick:()=>t(!1)})})]})}),r.jsx("aside",{className:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col border-r bg-background",children:r.jsx(Ap,{})})]})}function l4(){const{isAuthenticated:e,isLoading:t}=ah(),n=br();return f.useEffect(()=>{!t&&!e&&n("/admin/login")},[e,t,n]),t?r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-background",children:r.jsx(bt,{className:"h-8 w-8 animate-spin text-primary"})}):e?r.jsxs("div",{className:"min-h-screen bg-muted/30",children:[r.jsx(r4,{}),r.jsx("div",{className:"lg:pl-64",children:r.jsx("main",{className:"p-6 lg:p-8",children:r.jsx(QA,{})})})]}):null}var s4="Label",X0=f.forwardRef((e,t)=>r.jsx(ee.label,{...e,ref:t,onMouseDown:n=>{var i;n.target.closest("button, input, select, textarea")||((i=e.onMouseDown)==null||i.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));X0.displayName=s4;var Z0=X0;const o4=_l("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Ie=f.forwardRef(({className:e,...t},n)=>r.jsx(Z0,{ref:n,className:G(o4(),e),...t}));Ie.displayName=Z0.displayName;function c4(){const[e,t]=f.useState(""),[n,a]=f.useState(""),[i,l]=f.useState(!1),{login:s,isAuthenticated:o,isLoading:c}=ah(),u=br(),{toast:d}=Zn();f.useEffect(()=>{!c&&o&&u("/admin")},[o,c,u]);const m=async h=>{if(h.preventDefault(),!e||!n){d({title:"Hata",description:"Lütfen e-posta ve şifrenizi girin.",variant:"destructive"});return}l(!0);try{await s(e,n)?(d({title:"Başarılı",description:"Giriş yapıldı."}),u("/admin")):d({title:"Giriş Başarısız",description:"E-posta veya şifre hatalı.",variant:"destructive"})}catch{d({title:"Hata",description:"Bir hata oluştu. Lütfen tekrar deneyin.",variant:"destructive"})}finally{l(!1)}};return c?r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-muted/30",children:r.jsx(bt,{className:"h-8 w-8 animate-spin text-primary"})}):r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 p-4",children:r.jsxs(Ye,{className:"w-full max-w-md",children:[r.jsxs(jn,{className:"text-center",children:[r.jsx("div",{className:"flex justify-center mb-4",children:r.jsx("img",{src:Pf,alt:"SincEva",className:"h-16"})}),r.jsxs(Ui,{className:"text-2xl flex items-center justify-center gap-2",children:[r.jsx(ro,{className:"h-5 w-5"}),"Admin Girişi"]}),r.jsx(Cl,{children:"Yönetim paneline erişmek için giriş yapın"})]}),r.jsx($e,{children:r.jsxs("form",{onSubmit:m,className:"space-y-4",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{htmlFor:"email",children:"E-posta"}),r.jsx(he,{id:"email",type:"email",placeholder:"admin@sinceva.com",value:e,onChange:h=>t(h.target.value),disabled:i,autoComplete:"email"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{htmlFor:"password",children:"Şifre"}),r.jsx(he,{id:"password",type:"password",placeholder:"••••••••",value:n,onChange:h=>a(h.target.value),disabled:i,autoComplete:"current-password"})]}),r.jsx(ne,{type:"submit",className:"w-full bg-gradient-to-r from-primary to-[#FF6B6B]",disabled:i,children:i?r.jsxs(r.Fragment,{children:[r.jsx(bt,{className:"mr-2 h-4 w-4 animate-spin"}),"Giriş yapılıyor..."]}):"Giriş Yap"})]})})]})})}const Hs="https://sinceva.com/api/admin";function u4(){const[e,t]=f.useState(null),[n,a]=f.useState(!0);f.useEffect(()=>{async function l(){try{const[s,o,c,u]=await Promise.all([fetch(`${Hs}/subscribers.php`,{credentials:"include"}),fetch(`${Hs}/contacts.php`,{credentials:"include"}),fetch(`${Hs}/blog.php`,{credentials:"include"}),fetch(`${Hs}/products.php`,{credentials:"include"})]),[d,m,h,p]=await Promise.all([s.json(),o.json(),c.json(),u.json()]);t({subscribers:d.stats||{total:0,confirmed:0,pending:0},contacts:m.stats||{total:0,unread:0},blog:h.stats||{total:0,published:0,draft:0},products:p.stats||{total:0,active:0,inactive:0}})}catch(s){console.error("Failed to fetch stats:",s)}finally{a(!1)}}l()},[]);const i=[{title:"Aboneler",value:(e==null?void 0:e.subscribers.total)||0,description:`${(e==null?void 0:e.subscribers.confirmed)||0} onaylı, ${(e==null?void 0:e.subscribers.pending)||0} bekleyen`,icon:mf,color:"text-blue-500",bgColor:"bg-blue-500/10"},{title:"İletişim Mesajları",value:(e==null?void 0:e.contacts.total)||0,description:`${(e==null?void 0:e.contacts.unread)||0} okunmamış`,icon:or,color:"text-green-500",bgColor:"bg-green-500/10"},{title:"Blog Yazıları",value:(e==null?void 0:e.blog.total)||0,description:`${(e==null?void 0:e.blog.published)||0} yayında, ${(e==null?void 0:e.blog.draft)||0} taslak`,icon:uf,color:"text-purple-500",bgColor:"bg-purple-500/10"},{title:"Ürünler",value:(e==null?void 0:e.products.total)||0,description:`${(e==null?void 0:e.products.active)||0} aktif, ${(e==null?void 0:e.products.inactive)||0} pasif`,icon:df,color:"text-orange-500",bgColor:"bg-orange-500/10"}];return r.jsxs("div",{className:"space-y-8",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"Dashboard"}),r.jsx("p",{className:"text-muted-foreground mt-1",children:"SincEva yönetim paneline hoş geldiniz"})]}),r.jsx("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:i.map(l=>r.jsxs(Ye,{children:[r.jsxs(jn,{className:"flex flex-row items-center justify-between pb-2",children:[r.jsx(Ui,{className:"text-sm font-medium text-muted-foreground",children:l.title}),r.jsx("div",{className:`p-2 rounded-lg ${l.bgColor}`,children:r.jsx(l.icon,{className:`h-4 w-4 ${l.color}`})})]}),r.jsxs($e,{children:[r.jsx("div",{className:"text-2xl font-bold",children:n?"...":l.value}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:l.description})]})]},l.title))}),r.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[r.jsxs(Ye,{children:[r.jsxs(jn,{children:[r.jsxs(Ui,{className:"flex items-center gap-2",children:[r.jsx(RC,{className:"h-5 w-5 text-primary"}),"Hızlı İstatistikler"]}),r.jsx(Cl,{children:"Son 30 günlük özet"})]}),r.jsx($e,{children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-muted-foreground",children:"Yeni Aboneler"}),r.jsx("span",{className:"font-medium",children:(e==null?void 0:e.subscribers.total)||0})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-muted-foreground",children:"İletişim Formları"}),r.jsx("span",{className:"font-medium",children:(e==null?void 0:e.contacts.total)||0})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-muted-foreground",children:"Yayındaki Yazılar"}),r.jsx("span",{className:"font-medium",children:(e==null?void 0:e.blog.published)||0})]})]})})]}),r.jsxs(Ye,{children:[r.jsxs(jn,{children:[r.jsxs(Ui,{className:"flex items-center gap-2",children:[r.jsx(Io,{className:"h-5 w-5 text-primary"}),"Sistem Durumu"]}),r.jsx(Cl,{children:"Sunucu ve API durumu"})]}),r.jsx($e,{children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-muted-foreground",children:"API Durumu"}),r.jsxs("span",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"h-2 w-2 rounded-full bg-green-500"}),r.jsx("span",{className:"text-sm font-medium text-green-600",children:"Aktif"})]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-muted-foreground",children:"Veritabanı"}),r.jsxs("span",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"h-2 w-2 rounded-full bg-green-500"}),r.jsx("span",{className:"text-sm font-medium text-green-600",children:"Bağlı"})]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-muted-foreground",children:"E-posta Servisi"}),r.jsxs("span",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"h-2 w-2 rounded-full bg-green-500"}),r.jsx("span",{className:"text-sm font-medium text-green-600",children:"Çalışıyor"})]})]})]})})]})]})]})}const Zl=f.forwardRef(({className:e,...t},n)=>r.jsx("div",{className:"relative w-full overflow-auto",children:r.jsx("table",{ref:n,className:G("w-full caption-bottom text-sm",e),...t})}));Zl.displayName="Table";const Jl=f.forwardRef(({className:e,...t},n)=>r.jsx("thead",{ref:n,className:G("[&_tr]:border-b",e),...t}));Jl.displayName="TableHeader";const es=f.forwardRef(({className:e,...t},n)=>r.jsx("tbody",{ref:n,className:G("[&_tr:last-child]:border-0",e),...t}));es.displayName="TableBody";const d4=f.forwardRef(({className:e,...t},n)=>r.jsx("tfoot",{ref:n,className:G("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t}));d4.displayName="TableFooter";const Qn=f.forwardRef(({className:e,...t},n)=>r.jsx("tr",{ref:n,className:G("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));Qn.displayName="TableRow";const Ae=f.forwardRef(({className:e,...t},n)=>r.jsx("th",{ref:n,className:G("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));Ae.displayName="TableHead";const Ee=f.forwardRef(({className:e,...t},n)=>r.jsx("td",{ref:n,className:G("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));Ee.displayName="TableCell";const m4=f.forwardRef(({className:e,...t},n)=>r.jsx("caption",{ref:n,className:G("mt-4 text-sm text-muted-foreground",e),...t}));m4.displayName="TableCaption";var J0="AlertDialog",[f4,e3]=Rt(J0,[M0]),ea=M0(),ez=e=>{const{__scopeAlertDialog:t,...n}=e,a=ea(t);return r.jsx(sh,{...a,...n,modal:!0})};ez.displayName=J0;var h4="AlertDialogTrigger",tz=f.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...a}=e,i=ea(n);return r.jsx(q0,{...i,...a,ref:t})});tz.displayName=h4;var y4="AlertDialogPortal",nz=e=>{const{__scopeAlertDialog:t,...n}=e,a=ea(t);return r.jsx(oh,{...a,...n})};nz.displayName=y4;var p4="AlertDialogOverlay",az=f.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...a}=e,i=ea(n);return r.jsx(ql,{...i,...a,ref:t})});az.displayName=p4;var Yi="AlertDialogContent",[k4,g4]=f4(Yi),v4=ev("AlertDialogContent"),iz=f.forwardRef((e,t)=>{const{__scopeAlertDialog:n,children:a,...i}=e,l=ea(n),s=f.useRef(null),o=ye(t,s),c=f.useRef(null);return r.jsx(qD,{contentName:Yi,titleName:rz,docsSlug:"alert-dialog",children:r.jsx(k4,{scope:n,cancelRef:c,children:r.jsxs(Wl,{role:"alertdialog",...l,...i,ref:o,onOpenAutoFocus:Y(i.onOpenAutoFocus,u=>{var d;u.preventDefault(),(d=c.current)==null||d.focus({preventScroll:!0})}),onPointerDownOutside:u=>u.preventDefault(),onInteractOutside:u=>u.preventDefault(),children:[r.jsx(v4,{children:a}),r.jsx(x4,{contentRef:s})]})})})});iz.displayName=Yi;var rz="AlertDialogTitle",lz=f.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...a}=e,i=ea(n);return r.jsx(Ql,{...i,...a,ref:t})});lz.displayName=rz;var sz="AlertDialogDescription",oz=f.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...a}=e,i=ea(n);return r.jsx(Xl,{...i,...a,ref:t})});oz.displayName=sz;var b4="AlertDialogAction",cz=f.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...a}=e,i=ea(n);return r.jsx(Bc,{...i,...a,ref:t})});cz.displayName=b4;var uz="AlertDialogCancel",dz=f.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...a}=e,{cancelRef:i}=g4(uz,n),l=ea(n),s=ye(t,i);return r.jsx(Bc,{...l,...a,ref:s})});dz.displayName=uz;var x4=({contentRef:e})=>{const t=`\`${Yi}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Yi}\` by passing a \`${sz}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Yi}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return f.useEffect(()=>{var a;document.getElementById((a=e.current)==null?void 0:a.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},z4=ez,w4=tz,S4=nz,mz=az,fz=iz,hz=cz,yz=dz,pz=lz,kz=oz;const Oc=z4,Kc=w4,C4=S4,gz=f.forwardRef(({className:e,...t},n)=>r.jsx(mz,{className:G("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));gz.displayName=mz.displayName;const ts=f.forwardRef(({className:e,...t},n)=>r.jsxs(C4,{children:[r.jsx(gz,{}),r.jsx(fz,{ref:n,className:G("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t})]}));ts.displayName=fz.displayName;const ns=({className:e,...t})=>r.jsx("div",{className:G("flex flex-col space-y-2 text-center sm:text-left",e),...t});ns.displayName="AlertDialogHeader";const as=({className:e,...t})=>r.jsx("div",{className:G("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});as.displayName="AlertDialogFooter";const is=f.forwardRef(({className:e,...t},n)=>r.jsx(pz,{ref:n,className:G("text-lg font-semibold",e),...t}));is.displayName=pz.displayName;const rs=f.forwardRef(({className:e,...t},n)=>r.jsx(kz,{ref:n,className:G("text-sm text-muted-foreground",e),...t}));rs.displayName=kz.displayName;const ls=f.forwardRef(({className:e,...t},n)=>r.jsx(hz,{ref:n,className:G(_f(),e),...t}));ls.displayName=hz.displayName;const ss=f.forwardRef(({className:e,...t},n)=>r.jsx(yz,{ref:n,className:G(_f({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));ss.displayName=yz.displayName;const Ep="https://sinceva.com/api/admin";function j4(){const[e,t]=f.useState([]),[n,a]=f.useState([]),[i,l]=f.useState(""),[s,o]=f.useState(!0),[c,u]=f.useState(null),{toast:d}=Zn(),m=async()=>{try{const v=await(await fetch(`${Ep}/subscribers.php`,{credentials:"include"})).json();v.success&&(t(v.subscribers||[]),a(v.subscribers||[]))}catch(k){console.error("Failed to fetch subscribers:",k),d({title:"Hata",description:"Aboneler yüklenirken bir hata oluştu.",variant:"destructive"})}finally{o(!1)}};f.useEffect(()=>{m()},[]),f.useEffect(()=>{const k=e.filter(v=>v.email.toLowerCase().includes(i.toLowerCase()));a(k)},[i,e]);const h=async k=>{const v=k.id||k.email;u(v);try{const y=await(await fetch(`${Ep}/subscribers.php?id=${encodeURIComponent(v)}`,{method:"DELETE",credentials:"include"})).json();if(y.success)d({title:"Başarılı",description:"Abone silindi."}),m();else throw new Error(y.error)}catch{d({title:"Hata",description:"Abone silinirken bir hata oluştu.",variant:"destructive"})}finally{u(null)}},p=e.filter(k=>k.confirmed).length,x=e.length-p;return r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold tracking-tight flex items-center gap-2",children:[r.jsx(mf,{className:"h-8 w-8 text-primary"}),"Aboneler"]}),r.jsx("p",{className:"text-muted-foreground mt-1",children:"Bülten abonelerini yönetin"})]}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs(Ct,{variant:"secondary",className:"py-1.5",children:[r.jsx(Ty,{className:"h-3 w-3 mr-1"}),p," Onaylı"]}),r.jsxs(Ct,{variant:"outline",className:"py-1.5",children:[r.jsx(Io,{className:"h-3 w-3 mr-1"}),x," Bekleyen"]})]})]}),r.jsxs(Ye,{children:[r.jsx(jn,{children:r.jsx("div",{className:"flex items-center gap-4",children:r.jsxs("div",{className:"relative flex-1",children:[r.jsx(Da,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx(he,{placeholder:"E-posta ara...",value:i,onChange:k=>l(k.target.value),className:"pl-10"})]})})}),r.jsx($e,{children:s?r.jsx("div",{className:"flex items-center justify-center py-8",children:r.jsx(bt,{className:"h-8 w-8 animate-spin text-primary"})}):n.length===0?r.jsx("div",{className:"text-center py-8 text-muted-foreground",children:i?"Arama sonucu bulunamadı.":"Henüz abone yok."}):r.jsx("div",{className:"rounded-md border",children:r.jsxs(Zl,{children:[r.jsx(Jl,{children:r.jsxs(Qn,{children:[r.jsx(Ae,{children:"E-posta"}),r.jsx(Ae,{children:"Durum"}),r.jsx(Ae,{children:"Dil"}),r.jsx(Ae,{children:"Kayıt Tarihi"}),r.jsx(Ae,{className:"text-right",children:"İşlemler"})]})}),r.jsx(es,{children:n.map(k=>{var v;return r.jsxs(Qn,{children:[r.jsx(Ee,{className:"font-medium",children:k.email}),r.jsx(Ee,{children:k.confirmed?r.jsxs(Ct,{className:"bg-green-500/10 text-green-600 hover:bg-green-500/20",children:[r.jsx(Ty,{className:"h-3 w-3 mr-1"}),"Onaylı"]}):r.jsxs(Ct,{variant:"outline",className:"text-yellow-600",children:[r.jsx(Io,{className:"h-3 w-3 mr-1"}),"Bekliyor"]})}),r.jsx(Ee,{children:r.jsx(Ct,{variant:"secondary",children:((v=k.language)==null?void 0:v.toUpperCase())||"TR"})}),r.jsx(Ee,{className:"text-muted-foreground",children:new Date(k.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}),r.jsx(Ee,{className:"text-right",children:r.jsxs(Oc,{children:[r.jsx(Kc,{asChild:!0,children:r.jsx(ne,{variant:"ghost",size:"icon",className:"text-destructive hover:text-destructive",disabled:c===(k.id||k.email),children:c===(k.id||k.email)?r.jsx(bt,{className:"h-4 w-4 animate-spin"}):r.jsx(pc,{className:"h-4 w-4"})})}),r.jsxs(ts,{children:[r.jsxs(ns,{children:[r.jsx(is,{children:"Aboneyi Sil"}),r.jsxs(rs,{children:[r.jsx("strong",{children:k.email})," adresini silmek istediğinize emin misiniz? Bu işlem geri alınamaz."]})]}),r.jsxs(as,{children:[r.jsx(ss,{children:"İptal"}),r.jsx(ls,{onClick:()=>h(k),className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Sil"})]})]})]})})]},k.id||k.email)})})]})})})]})]})}const ch=sh,N4=oh,vz=f.forwardRef(({className:e,...t},n)=>r.jsx(ql,{ref:n,className:G("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));vz.displayName=ql.displayName;const Hc=f.forwardRef(({className:e,children:t,...n},a)=>r.jsxs(N4,{children:[r.jsx(vz,{}),r.jsxs(Wl,{ref:a,className:G("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,r.jsxs(Bc,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[r.jsx(fi,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Hc.displayName=Wl.displayName;const _c=({className:e,...t})=>r.jsx("div",{className:G("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});_c.displayName="DialogHeader";const Gc=f.forwardRef(({className:e,...t},n)=>r.jsx(Ql,{ref:n,className:G("text-lg font-semibold leading-none tracking-tight",e),...t}));Gc.displayName=Ql.displayName;const Uc=f.forwardRef(({className:e,...t},n)=>r.jsx(Xl,{ref:n,className:G("text-sm text-muted-foreground",e),...t}));Uc.displayName=Xl.displayName;const _u="https://sinceva.com/api/admin";function A4(){const[e,t]=f.useState([]),[n,a]=f.useState([]),[i,l]=f.useState(""),[s,o]=f.useState(!0),[c,u]=f.useState(null),[d,m]=f.useState(null),{toast:h}=Zn(),p=async()=>{try{const b=await(await fetch(`${_u}/contacts.php`,{credentials:"include"})).json();b.success&&(t(b.contacts||[]),a(b.contacts||[]))}catch(y){console.error("Failed to fetch contacts:",y),h({title:"Hata",description:"Mesajlar yüklenirken bir hata oluştu.",variant:"destructive"})}finally{o(!1)}};f.useEffect(()=>{p()},[]),f.useEffect(()=>{const y=e.filter(b=>b.name.toLowerCase().includes(i.toLowerCase())||b.email.toLowerCase().includes(i.toLowerCase())||b.message.toLowerCase().includes(i.toLowerCase()));a(y)},[i,e]);const x=async y=>{try{(await(await fetch(`${_u}/contacts.php`,{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({id:y.id,read:!y.read})})).json()).success&&p()}catch{h({title:"Hata",description:"İşlem sırasında bir hata oluştu.",variant:"destructive"})}},k=async y=>{m(y);try{const z=await(await fetch(`${_u}/contacts.php?id=${encodeURIComponent(y)}`,{method:"DELETE",credentials:"include"})).json();if(z.success)h({title:"Başarılı",description:"Mesaj silindi."}),p(),u(null);else throw new Error(z.error)}catch{h({title:"Hata",description:"Mesaj silinirken bir hata oluştu.",variant:"destructive"})}finally{m(null)}},v=y=>{u(y),y.read||x(y)},g=e.filter(y=>!y.read).length;return r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold tracking-tight flex items-center gap-2",children:[r.jsx(or,{className:"h-8 w-8 text-primary"}),"İletişim Mesajları"]}),r.jsx("p",{className:"text-muted-foreground mt-1",children:"İletişim formu mesajlarını görüntüleyin"})]}),r.jsxs(Ct,{variant:g>0?"destructive":"secondary",className:"py-1.5",children:[g," Okunmamış"]})]}),r.jsxs(Ye,{children:[r.jsx(jn,{children:r.jsx("div",{className:"flex items-center gap-4",children:r.jsxs("div",{className:"relative flex-1",children:[r.jsx(Da,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx(he,{placeholder:"İsim, e-posta veya mesaj ara...",value:i,onChange:y=>l(y.target.value),className:"pl-10"})]})})}),r.jsx($e,{children:s?r.jsx("div",{className:"flex items-center justify-center py-8",children:r.jsx(bt,{className:"h-8 w-8 animate-spin text-primary"})}):n.length===0?r.jsx("div",{className:"text-center py-8 text-muted-foreground",children:i?"Arama sonucu bulunamadı.":"Henüz mesaj yok."}):r.jsx("div",{className:"rounded-md border",children:r.jsxs(Zl,{children:[r.jsx(Jl,{children:r.jsxs(Qn,{children:[r.jsx(Ae,{children:"Durum"}),r.jsx(Ae,{children:"İsim"}),r.jsx(Ae,{children:"E-posta"}),r.jsx(Ae,{className:"hidden md:table-cell",children:"Mesaj"}),r.jsx(Ae,{children:"Tarih"}),r.jsx(Ae,{className:"text-right",children:"İşlemler"})]})}),r.jsx(es,{children:n.map(y=>r.jsxs(Qn,{className:y.read?"":"bg-primary/5",children:[r.jsx(Ee,{children:y.read?r.jsx(NC,{className:"h-4 w-4 text-muted-foreground"}):r.jsx(or,{className:"h-4 w-4 text-primary"})}),r.jsx(Ee,{className:"font-medium",children:y.name}),r.jsx(Ee,{children:y.email}),r.jsx(Ee,{className:"hidden md:table-cell max-w-[200px] truncate text-muted-foreground",children:y.message}),r.jsx(Ee,{className:"text-muted-foreground",children:new Date(y.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}),r.jsx(Ee,{className:"text-right",children:r.jsxs("div",{className:"flex items-center justify-end gap-2",children:[r.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>v(y),children:r.jsx(Qr,{className:"h-4 w-4"})}),r.jsxs(Oc,{children:[r.jsx(Kc,{asChild:!0,children:r.jsx(ne,{variant:"ghost",size:"icon",className:"text-destructive hover:text-destructive",disabled:d===y.id,children:d===y.id?r.jsx(bt,{className:"h-4 w-4 animate-spin"}):r.jsx(pc,{className:"h-4 w-4"})})}),r.jsxs(ts,{children:[r.jsxs(ns,{children:[r.jsx(is,{children:"Mesajı Sil"}),r.jsx(rs,{children:"Bu mesajı silmek istediğinize emin misiniz? Bu işlem geri alınamaz."})]}),r.jsxs(as,{children:[r.jsx(ss,{children:"İptal"}),r.jsx(ls,{onClick:()=>k(y.id),className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Sil"})]})]})]})]})})]},y.id))})]})})})]}),r.jsx(ch,{open:!!c,onOpenChange:()=>u(null),children:r.jsxs(Hc,{className:"max-w-lg",children:[r.jsxs(_c,{children:[r.jsx(Gc,{children:"Mesaj Detayı"}),r.jsx(Uc,{children:(c==null?void 0:c.created_at)&&new Date(c.created_at).toLocaleString("tr-TR")})]}),c&&r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-sm font-medium text-muted-foreground",children:"İsim"}),r.jsx("p",{className:"mt-1",children:c.name})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-sm font-medium text-muted-foreground",children:"E-posta"}),r.jsx("p",{className:"mt-1",children:r.jsx("a",{href:`mailto:${c.email}`,className:"text-primary hover:underline",children:c.email})})]}),c.phone&&r.jsxs("div",{children:[r.jsx("label",{className:"text-sm font-medium text-muted-foreground",children:"Telefon"}),r.jsx("p",{className:"mt-1",children:r.jsx("a",{href:`tel:${c.phone}`,className:"text-primary hover:underline",children:c.phone})})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-sm font-medium text-muted-foreground",children:"Mesaj"}),r.jsx("p",{className:"mt-1 whitespace-pre-wrap bg-muted/50 p-4 rounded-lg",children:c.message})]}),r.jsxs("div",{className:"flex gap-2 pt-4",children:[r.jsx(ne,{variant:"outline",className:"flex-1",onClick:()=>x(c),children:c.read?"Okunmadı Olarak İşaretle":"Okundu Olarak İşaretle"}),r.jsx(ne,{asChild:!0,className:"flex-1 bg-gradient-to-r from-primary to-[#FF6B6B]",children:r.jsx("a",{href:`mailto:${c.email}`,children:"Yanıtla"})})]})]})]})})]})}function E4(e){const t=f.useRef({value:e,previous:e});return f.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Yc="Switch",[T4,t3]=Rt(Yc),[P4,M4]=T4(Yc),bz=f.forwardRef((e,t)=>{const{__scopeSwitch:n,name:a,checked:i,defaultChecked:l,required:s,disabled:o,value:c="on",onCheckedChange:u,form:d,...m}=e,[h,p]=f.useState(null),x=ye(t,b=>p(b)),k=f.useRef(!1),v=h?d||!!h.closest("form"):!0,[g,y]=Jn({prop:i,defaultProp:l??!1,onChange:u,caller:Yc});return r.jsxs(P4,{scope:n,checked:g,disabled:o,children:[r.jsx(ee.button,{type:"button",role:"switch","aria-checked":g,"aria-required":s,"data-state":Sz(g),"data-disabled":o?"":void 0,disabled:o,value:c,...m,ref:x,onClick:Y(e.onClick,b=>{y(z=>!z),v&&(k.current=b.isPropagationStopped(),k.current||b.stopPropagation())})}),v&&r.jsx(wz,{control:h,bubbles:!k.current,name:a,value:c,checked:g,required:s,disabled:o,form:d,style:{transform:"translateX(-100%)"}})]})});bz.displayName=Yc;var xz="SwitchThumb",zz=f.forwardRef((e,t)=>{const{__scopeSwitch:n,...a}=e,i=M4(xz,n);return r.jsx(ee.span,{"data-state":Sz(i.checked),"data-disabled":i.disabled?"":void 0,...a,ref:t})});zz.displayName=xz;var R4="SwitchBubbleInput",wz=f.forwardRef(({__scopeSwitch:e,control:t,checked:n,bubbles:a=!0,...i},l)=>{const s=f.useRef(null),o=ye(s,l),c=E4(n),u=ab(t);return f.useEffect(()=>{const d=s.current;if(!d)return;const m=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(m,"checked").set;if(c!==n&&p){const x=new Event("click",{bubbles:a});p.call(d,n),d.dispatchEvent(x)}},[c,n,a]),r.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:o,style:{...i.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});wz.displayName=R4;function Sz(e){return e?"checked":"unchecked"}var Cz=bz,D4=zz;const qo=f.forwardRef(({className:e,...t},n)=>r.jsx(Cz,{className:G("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...t,ref:n,children:r.jsx(D4,{className:G("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));qo.displayName=Cz.displayName;var $c="Tabs",[I4,n3]=Rt($c,[Nc]),jz=Nc(),[L4,uh]=I4($c),Nz=f.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,onValueChange:i,defaultValue:l,orientation:s="horizontal",dir:o,activationMode:c="automatic",...u}=e,d=jc(o),[m,h]=Jn({prop:a,onChange:i,defaultProp:l??"",caller:$c});return r.jsx(L4,{scope:n,baseId:_n(),value:m,onValueChange:h,orientation:s,dir:d,activationMode:c,children:r.jsx(ee.div,{dir:d,"data-orientation":s,...u,ref:t})})});Nz.displayName=$c;var Az="TabsList",Ez=f.forwardRef((e,t)=>{const{__scopeTabs:n,loop:a=!0,...i}=e,l=uh(Az,n),s=jz(n);return r.jsx(qb,{asChild:!0,...s,orientation:l.orientation,dir:l.dir,loop:a,children:r.jsx(ee.div,{role:"tablist","aria-orientation":l.orientation,...i,ref:t})})});Ez.displayName=Az;var Tz="TabsTrigger",Pz=f.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,disabled:i=!1,...l}=e,s=uh(Tz,n),o=jz(n),c=Dz(s.baseId,a),u=Iz(s.baseId,a),d=a===s.value;return r.jsx(Wb,{asChild:!0,...o,focusable:!i,active:d,children:r.jsx(ee.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":u,"data-state":d?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:c,...l,ref:t,onMouseDown:Y(e.onMouseDown,m=>{!i&&m.button===0&&m.ctrlKey===!1?s.onValueChange(a):m.preventDefault()}),onKeyDown:Y(e.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&s.onValueChange(a)}),onFocus:Y(e.onFocus,()=>{const m=s.activationMode!=="manual";!d&&!i&&m&&s.onValueChange(a)})})})});Pz.displayName=Tz;var Mz="TabsContent",Rz=f.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,forceMount:i,children:l,...s}=e,o=uh(Mz,n),c=Dz(o.baseId,a),u=Iz(o.baseId,a),d=a===o.value,m=f.useRef(d);return f.useEffect(()=>{const h=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(h)},[]),r.jsx(_t,{present:i||d,children:({present:h})=>r.jsx(ee.div,{"data-state":d?"active":"inactive","data-orientation":o.orientation,role:"tabpanel","aria-labelledby":c,hidden:!h,id:u,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:h&&l})})});Rz.displayName=Mz;function Dz(e,t){return`${e}-trigger-${t}`}function Iz(e,t){return`${e}-content-${t}`}var F4=Nz,Lz=Ez,Fz=Pz,Bz=Rz;const Oz=F4,dh=f.forwardRef(({className:e,...t},n)=>r.jsx(Lz,{ref:n,className:G("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));dh.displayName=Lz.displayName;const ni=f.forwardRef(({className:e,...t},n)=>r.jsx(Fz,{ref:n,className:G("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));ni.displayName=Fz.displayName;const mh=f.forwardRef(({className:e,...t},n)=>r.jsx(Bz,{ref:n,className:G("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));mh.displayName=Bz.displayName;const _s="https://sinceva.com/api/admin",B4={title:{tr:"",en:"",ar:""},slug:"",excerpt:{tr:"",en:"",ar:""},content:{tr:"",en:"",ar:""},image:"",category:"",published:!1};function O4(){const[e,t]=f.useState([]),[n,a]=f.useState([]),[i,l]=f.useState(""),[s,o]=f.useState(!0),[c,u]=f.useState(!1),[d,m]=f.useState(null),[h,p]=f.useState(!1),[x,k]=f.useState(null),{toast:v}=Zn(),g=async()=>{try{const A=await(await fetch(`${_s}/blog.php`,{credentials:"include"})).json();A.success&&(t(A.posts||[]),a(A.posts||[]))}catch(w){console.error("Failed to fetch posts:",w),v({title:"Hata",description:"Blog yazıları yüklenirken bir hata oluştu.",variant:"destructive"})}finally{o(!1)}};f.useEffect(()=>{g()},[]),f.useEffect(()=>{const w=e.filter(A=>A.title.tr.toLowerCase().includes(i.toLowerCase())||A.title.en.toLowerCase().includes(i.toLowerCase()));a(w)},[i,e]);const y=()=>{m({...B4}),u(!0)},b=w=>{m({...w}),u(!0)},z=async()=>{var w;if(d){if(!((w=d.title)!=null&&w.tr)){v({title:"Hata",description:"Türkçe başlık zorunludur.",variant:"destructive"});return}p(!0);try{const A=d.id?"PUT":"POST",F=await(await fetch(`${_s}/blog.php`,{method:A,headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(d)})).json();if(F.success)v({title:"Başarılı",description:d.id?"Yazı güncellendi.":"Yazı oluşturuldu."}),u(!1),m(null),g();else throw new Error(F.error)}catch{v({title:"Hata",description:"Kayıt sırasında bir hata oluştu.",variant:"destructive"})}finally{p(!1)}}},S=async w=>{k(w);try{const P=await(await fetch(`${_s}/blog.php?id=${encodeURIComponent(w)}`,{method:"DELETE",credentials:"include"})).json();if(P.success)v({title:"Başarılı",description:"Yazı silindi."}),g();else throw new Error(P.error)}catch{v({title:"Hata",description:"Yazı silinirken bir hata oluştu.",variant:"destructive"})}finally{k(null)}},C=async w=>{try{(await(await fetch(`${_s}/blog.php`,{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({id:w.id,published:!w.published})})).json()).success&&(v({title:"Başarılı",description:w.published?"Yazı yayından kaldırıldı.":"Yazı yayınlandı."}),g())}catch{v({title:"Hata",description:"İşlem sırasında bir hata oluştu.",variant:"destructive"})}},j=e.filter(w=>w.published).length;return r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold tracking-tight flex items-center gap-2",children:[r.jsx(uf,{className:"h-8 w-8 text-primary"}),"Blog Yönetimi"]}),r.jsx("p",{className:"text-muted-foreground mt-1",children:"Blog yazılarını oluşturun ve düzenleyin"})]}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs(Ct,{variant:"secondary",className:"py-1.5",children:[j," Yayında / ",e.length," Toplam"]}),r.jsxs(ne,{onClick:y,className:"bg-gradient-to-r from-primary to-[#FF6B6B]",children:[r.jsx(Tv,{className:"h-4 w-4 mr-2"}),"Yeni Yazı"]})]})]}),r.jsxs(Ye,{children:[r.jsx(jn,{children:r.jsx("div",{className:"flex items-center gap-4",children:r.jsxs("div",{className:"relative flex-1",children:[r.jsx(Da,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx(he,{placeholder:"Başlık ara...",value:i,onChange:w=>l(w.target.value),className:"pl-10"})]})})}),r.jsx($e,{children:s?r.jsx("div",{className:"flex items-center justify-center py-8",children:r.jsx(bt,{className:"h-8 w-8 animate-spin text-primary"})}):n.length===0?r.jsx("div",{className:"text-center py-8 text-muted-foreground",children:i?"Arama sonucu bulunamadı.":"Henüz yazı yok."}):r.jsx("div",{className:"rounded-md border",children:r.jsxs(Zl,{children:[r.jsx(Jl,{children:r.jsxs(Qn,{children:[r.jsx(Ae,{children:"Başlık"}),r.jsx(Ae,{children:"Kategori"}),r.jsx(Ae,{children:"Durum"}),r.jsx(Ae,{children:"Tarih"}),r.jsx(Ae,{className:"text-right",children:"İşlemler"})]})}),r.jsx(es,{children:n.map(w=>r.jsxs(Qn,{children:[r.jsx(Ee,{className:"font-medium max-w-[200px] truncate",children:w.title.tr||w.title.en}),r.jsx(Ee,{children:r.jsx(Ct,{variant:"outline",children:w.category||"-"})}),r.jsx(Ee,{children:r.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>C(w),className:w.published?"text-green-600":"text-muted-foreground",children:w.published?r.jsxs(r.Fragment,{children:[r.jsx(Qr,{className:"h-4 w-4 mr-1"}),"Yayında"]}):r.jsxs(r.Fragment,{children:[r.jsx(io,{className:"h-4 w-4 mr-1"}),"Taslak"]})})}),r.jsx(Ee,{className:"text-muted-foreground",children:new Date(w.created_at).toLocaleDateString("tr-TR")}),r.jsx(Ee,{className:"text-right",children:r.jsxs("div",{className:"flex items-center justify-end gap-2",children:[r.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>b(w),children:r.jsx(Mv,{className:"h-4 w-4"})}),r.jsxs(Oc,{children:[r.jsx(Kc,{asChild:!0,children:r.jsx(ne,{variant:"ghost",size:"icon",className:"text-destructive hover:text-destructive",disabled:x===w.id,children:x===w.id?r.jsx(bt,{className:"h-4 w-4 animate-spin"}):r.jsx(pc,{className:"h-4 w-4"})})}),r.jsxs(ts,{children:[r.jsxs(ns,{children:[r.jsx(is,{children:"Yazıyı Sil"}),r.jsx(rs,{children:"Bu yazıyı silmek istediğinize emin misiniz? Bu işlem geri alınamaz."})]}),r.jsxs(as,{children:[r.jsx(ss,{children:"İptal"}),r.jsx(ls,{onClick:()=>S(w.id),className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Sil"})]})]})]})]})})]},w.id))})]})})})]}),r.jsx(ch,{open:c,onOpenChange:u,children:r.jsxs(Hc,{className:"max-w-3xl max-h-[90vh] overflow-y-auto",children:[r.jsxs(_c,{children:[r.jsx(Gc,{children:d!=null&&d.id?"Yazıyı Düzenle":"Yeni Yazı Oluştur"}),r.jsx(Uc,{children:"Çok dilli içerik eklemek için sekmeleri kullanın"})]}),d&&r.jsxs("div",{className:"space-y-6",children:[r.jsxs(Oz,{defaultValue:"tr",children:[r.jsxs(dh,{className:"grid w-full grid-cols-3",children:[r.jsx(ni,{value:"tr",children:"Türkçe"}),r.jsx(ni,{value:"en",children:"English"}),r.jsx(ni,{value:"ar",children:"العربية"})]}),["tr","en","ar"].map(w=>{var A,P,F;return r.jsxs(mh,{value:w,className:"space-y-4",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsxs(Ie,{children:["Başlık (",w.toUpperCase(),")"]}),r.jsx(he,{value:((A=d.title)==null?void 0:A[w])||"",onChange:N=>m({...d,title:{...d.title,[w]:N.target.value}}),placeholder:`Başlık (${w.toUpperCase()})`,dir:w==="ar"?"rtl":"ltr"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs(Ie,{children:["Özet (",w.toUpperCase(),")"]}),r.jsx(dr,{value:((P=d.excerpt)==null?void 0:P[w])||"",onChange:N=>m({...d,excerpt:{...d.excerpt,[w]:N.target.value}}),placeholder:`Kısa açıklama (${w.toUpperCase()})`,rows:2,dir:w==="ar"?"rtl":"ltr"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs(Ie,{children:["İçerik (",w.toUpperCase(),")"]}),r.jsx(dr,{value:((F=d.content)==null?void 0:F[w])||"",onChange:N=>m({...d,content:{...d.content,[w]:N.target.value}}),placeholder:`İçerik (${w.toUpperCase()})`,rows:8,dir:w==="ar"?"rtl":"ltr"})]})]},w)})]}),r.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{children:"Slug"}),r.jsx(he,{value:d.slug||"",onChange:w=>m({...d,slug:w.target.value}),placeholder:"yazi-basligi"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{children:"Kategori"}),r.jsx(he,{value:d.category||"",onChange:w=>m({...d,category:w.target.value}),placeholder:"Cilt Bakımı"})]})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{children:"Görsel URL"}),r.jsx(he,{value:d.image||"",onChange:w=>m({...d,image:w.target.value}),placeholder:"https://..."})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(qo,{checked:d.published||!1,onCheckedChange:w=>m({...d,published:w})}),r.jsx(Ie,{children:"Yayınla"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ne,{variant:"outline",onClick:()=>u(!1),children:"İptal"}),r.jsx(ne,{onClick:z,disabled:h,className:"bg-gradient-to-r from-primary to-[#FF6B6B]",children:h?r.jsxs(r.Fragment,{children:[r.jsx(bt,{className:"mr-2 h-4 w-4 animate-spin"}),"Kaydediliyor..."]}):"Kaydet"})]})]})]})]})})]})}const Gs="https://sinceva.com/api/admin",K4={name:{tr:"",en:"",ar:""},slug:"",description:{tr:"",en:"",ar:""},short_description:{tr:"",en:"",ar:""},category:"",images:[],volume:"",active:!0,featured:!1};function H4(){const[e,t]=f.useState([]),[n,a]=f.useState([]),[i,l]=f.useState(""),[s,o]=f.useState(!0),[c,u]=f.useState(!1),[d,m]=f.useState(null),[h,p]=f.useState(!1),[x,k]=f.useState(null),[v,g]=f.useState(""),{toast:y}=Zn(),b=async()=>{try{const B=await(await fetch(`${Gs}/products.php`,{credentials:"include"})).json();B.success&&(t(B.products||[]),a(B.products||[]))}catch(N){console.error("Failed to fetch products:",N),y({title:"Hata",description:"Ürünler yüklenirken bir hata oluştu.",variant:"destructive"})}finally{o(!1)}};f.useEffect(()=>{b()},[]),f.useEffect(()=>{const N=e.filter(B=>B.name.tr.toLowerCase().includes(i.toLowerCase())||B.name.en.toLowerCase().includes(i.toLowerCase()));a(N)},[i,e]);const z=()=>{m({...K4}),g(""),u(!0)},S=N=>{m({...N}),g(""),u(!0)},C=async()=>{var N;if(d){if(!((N=d.name)!=null&&N.tr)){y({title:"Hata",description:"Türkçe ürün adı zorunludur.",variant:"destructive"});return}p(!0);try{const B=d.id?"PUT":"POST",$=await(await fetch(`${Gs}/products.php`,{method:B,headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(d)})).json();if($.success)y({title:"Başarılı",description:d.id?"Ürün güncellendi.":"Ürün oluşturuldu."}),u(!1),m(null),b();else throw new Error($.error)}catch{y({title:"Hata",description:"Kayıt sırasında bir hata oluştu.",variant:"destructive"})}finally{p(!1)}}},j=async N=>{k(N);try{const R=await(await fetch(`${Gs}/products.php?id=${encodeURIComponent(N)}`,{method:"DELETE",credentials:"include"})).json();if(R.success)y({title:"Başarılı",description:"Ürün silindi."}),b();else throw new Error(R.error)}catch{y({title:"Hata",description:"Ürün silinirken bir hata oluştu.",variant:"destructive"})}finally{k(null)}},w=async N=>{try{(await(await fetch(`${Gs}/products.php`,{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({id:N.id,featured:!N.featured})})).json()).success&&(y({title:"Başarılı",description:N.featured?"Ürün öne çıkarılmadan kaldırıldı.":"Ürün öne çıkarıldı."}),b())}catch{y({title:"Hata",description:"İşlem sırasında bir hata oluştu.",variant:"destructive"})}},A=()=>{v&&d&&(m({...d,images:[...d.images||[],v]}),g(""))},P=N=>{if(d){const B=[...d.images||[]];B.splice(N,1),m({...d,images:B})}},F=e.filter(N=>N.active).length;return r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold tracking-tight flex items-center gap-2",children:[r.jsx(df,{className:"h-8 w-8 text-primary"}),"Ürün Yönetimi"]}),r.jsx("p",{className:"text-muted-foreground mt-1",children:"Ürünleri oluşturun ve düzenleyin"})]}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs(Ct,{variant:"secondary",className:"py-1.5",children:[F," Aktif / ",e.length," Toplam"]}),r.jsxs(ne,{onClick:z,className:"bg-gradient-to-r from-primary to-[#FF6B6B]",children:[r.jsx(Tv,{className:"h-4 w-4 mr-2"}),"Yeni Ürün"]})]})]}),r.jsxs(Ye,{children:[r.jsx(jn,{children:r.jsx("div",{className:"flex items-center gap-4",children:r.jsxs("div",{className:"relative flex-1",children:[r.jsx(Da,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx(he,{placeholder:"Ürün adı ara...",value:i,onChange:N=>l(N.target.value),className:"pl-10"})]})})}),r.jsx($e,{children:s?r.jsx("div",{className:"flex items-center justify-center py-8",children:r.jsx(bt,{className:"h-8 w-8 animate-spin text-primary"})}):n.length===0?r.jsx("div",{className:"text-center py-8 text-muted-foreground",children:i?"Arama sonucu bulunamadı.":"Henüz ürün yok."}):r.jsx("div",{className:"rounded-md border",children:r.jsxs(Zl,{children:[r.jsx(Jl,{children:r.jsxs(Qn,{children:[r.jsx(Ae,{children:"Ürün Adı"}),r.jsx(Ae,{children:"Kategori"}),r.jsx(Ae,{children:"Hacim"}),r.jsx(Ae,{children:"Öne Çıkan"}),r.jsx(Ae,{children:"Durum"}),r.jsx(Ae,{className:"text-right",children:"İşlemler"})]})}),r.jsx(es,{children:n.map(N=>r.jsxs(Qn,{children:[r.jsx(Ee,{className:"font-medium max-w-[200px] truncate",children:N.name.tr||N.name.en}),r.jsx(Ee,{children:r.jsx(Ct,{variant:"outline",children:N.category||"-"})}),r.jsx(Ee,{children:N.volume||"-"}),r.jsx(Ee,{children:r.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>w(N),className:N.featured?"text-yellow-500":"text-muted-foreground",children:N.featured?r.jsx(Rv,{className:"h-4 w-4 fill-current"}):r.jsx(MC,{className:"h-4 w-4"})})}),r.jsx(Ee,{children:r.jsx(Ct,{variant:N.active?"default":"secondary",children:N.active?"Aktif":"Pasif"})}),r.jsx(Ee,{className:"text-right",children:r.jsxs("div",{className:"flex items-center justify-end gap-2",children:[r.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>S(N),children:r.jsx(Mv,{className:"h-4 w-4"})}),r.jsxs(Oc,{children:[r.jsx(Kc,{asChild:!0,children:r.jsx(ne,{variant:"ghost",size:"icon",className:"text-destructive hover:text-destructive",disabled:x===N.id,children:x===N.id?r.jsx(bt,{className:"h-4 w-4 animate-spin"}):r.jsx(pc,{className:"h-4 w-4"})})}),r.jsxs(ts,{children:[r.jsxs(ns,{children:[r.jsx(is,{children:"Ürünü Sil"}),r.jsx(rs,{children:"Bu ürünü silmek istediğinize emin misiniz? Bu işlem geri alınamaz."})]}),r.jsxs(as,{children:[r.jsx(ss,{children:"İptal"}),r.jsx(ls,{onClick:()=>j(N.id),className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Sil"})]})]})]})]})})]},N.id))})]})})})]}),r.jsx(ch,{open:c,onOpenChange:u,children:r.jsxs(Hc,{className:"max-w-3xl max-h-[90vh] overflow-y-auto",children:[r.jsxs(_c,{children:[r.jsx(Gc,{children:d!=null&&d.id?"Ürünü Düzenle":"Yeni Ürün Oluştur"}),r.jsx(Uc,{children:"Çok dilli içerik eklemek için sekmeleri kullanın"})]}),d&&r.jsxs("div",{className:"space-y-6",children:[r.jsxs(Oz,{defaultValue:"tr",children:[r.jsxs(dh,{className:"grid w-full grid-cols-3",children:[r.jsx(ni,{value:"tr",children:"Türkçe"}),r.jsx(ni,{value:"en",children:"English"}),r.jsx(ni,{value:"ar",children:"العربية"})]}),["tr","en","ar"].map(N=>{var B,R,$;return r.jsxs(mh,{value:N,className:"space-y-4",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsxs(Ie,{children:["Ürün Adı (",N.toUpperCase(),")"]}),r.jsx(he,{value:((B=d.name)==null?void 0:B[N])||"",onChange:O=>m({...d,name:{...d.name,[N]:O.target.value}}),placeholder:`Ürün adı (${N.toUpperCase()})`,dir:N==="ar"?"rtl":"ltr"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs(Ie,{children:["Kısa Açıklama (",N.toUpperCase(),")"]}),r.jsx(dr,{value:((R=d.short_description)==null?void 0:R[N])||"",onChange:O=>m({...d,short_description:{...d.short_description,[N]:O.target.value}}),placeholder:`Kısa açıklama (${N.toUpperCase()})`,rows:2,dir:N==="ar"?"rtl":"ltr"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs(Ie,{children:["Detaylı Açıklama (",N.toUpperCase(),")"]}),r.jsx(dr,{value:(($=d.description)==null?void 0:$[N])||"",onChange:O=>m({...d,description:{...d.description,[N]:O.target.value}}),placeholder:`Detaylı açıklama (${N.toUpperCase()})`,rows:6,dir:N==="ar"?"rtl":"ltr"})]})]},N)})]}),r.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{children:"Slug"}),r.jsx(he,{value:d.slug||"",onChange:N=>m({...d,slug:N.target.value}),placeholder:"urun-adi"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{children:"Kategori"}),r.jsx(he,{value:d.category||"",onChange:N=>m({...d,category:N.target.value}),placeholder:"Cilt Bakımı"})]})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{children:"Hacim"}),r.jsx(he,{value:d.volume||"",onChange:N=>m({...d,volume:N.target.value}),placeholder:"50ml"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{children:"Görseller"}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(he,{value:v,onChange:N=>g(N.target.value),placeholder:"Görsel URL'i ekle"}),r.jsx(ne,{type:"button",variant:"outline",onClick:A,children:"Ekle"})]}),d.images&&d.images.length>0&&r.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:d.images.map((N,B)=>r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:N,alt:`Görsel ${B+1}`,className:"w-16 h-16 object-cover rounded border"}),r.jsx("button",{type:"button",onClick:()=>P(B),className:"absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs opacity-0 group-hover:opacity-100 transition-opacity",children:"×"})]},B))})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(qo,{checked:d.active??!0,onCheckedChange:N=>m({...d,active:N})}),r.jsx(Ie,{children:"Aktif"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(qo,{checked:d.featured||!1,onCheckedChange:N=>m({...d,featured:N})}),r.jsx(Ie,{children:"Öne Çıkar"})]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ne,{variant:"outline",onClick:()=>u(!1),children:"İptal"}),r.jsx(ne,{onClick:C,disabled:h,className:"bg-gradient-to-r from-primary to-[#FF6B6B]",children:h?r.jsxs(r.Fragment,{children:[r.jsx(bt,{className:"mr-2 h-4 w-4 animate-spin"}),"Kaydediliyor..."]}):"Kaydet"})]})]})]})]})})]})}const _4="https://sinceva.com/api";function G4(){const{toast:e}=Zn(),[t,n]=f.useState(!1),[a,i]=f.useState(!1),[l,s]=f.useState(!1),[o,c]=f.useState(!1),[u,d]=f.useState({currentPassword:"",newPassword:"",confirmPassword:""}),m=async h=>{if(h.preventDefault(),u.newPassword.length<8){e({title:"Hata",description:"Yeni şifre en az 8 karakter olmalıdır.",variant:"destructive"});return}if(u.newPassword!==u.confirmPassword){e({title:"Hata",description:"Yeni şifreler eşleşmiyor.",variant:"destructive"});return}n(!0);try{const x=await(await fetch(`${_4}/admin/password.php`,{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(u)})).json();x.success?(e({title:"Başarılı",description:"Şifreniz güncellendi."}),d({currentPassword:"",newPassword:"",confirmPassword:""})):e({title:"Hata",description:{INVALID_CURRENT_PASSWORD:"Mevcut şifre yanlış.",PASSWORD_TOO_SHORT:"Yeni şifre en az 8 karakter olmalıdır.",PASSWORDS_NOT_MATCH:"Yeni şifreler eşleşmiyor.",MISSING_FIELDS:"Tüm alanları doldurun.",UPDATE_FAILED:"Şifre güncellenemedi. Tekrar deneyin."}[x.error]||"Bir hata oluştu.",variant:"destructive"})}catch{e({title:"Hata",description:"Sunucuya bağlanılamadı.",variant:"destructive"})}finally{n(!1)}};return r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold",children:"Ayarlar"}),r.jsx("p",{className:"text-muted-foreground",children:"Hesap ve güvenlik ayarları"})]}),r.jsx("div",{className:"grid gap-6 max-w-2xl",children:r.jsxs(Ye,{children:[r.jsxs(jn,{children:[r.jsxs(Ui,{className:"flex items-center gap-2",children:[r.jsx(Pv,{className:"h-5 w-5"}),"Şifre Değiştir"]}),r.jsx(Cl,{children:"Admin hesabınızın şifresini güncelleyin"})]}),r.jsx($e,{children:r.jsxs("form",{onSubmit:m,className:"space-y-4",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{htmlFor:"currentPassword",children:"Mevcut Şifre"}),r.jsxs("div",{className:"relative",children:[r.jsx(ro,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx(he,{id:"currentPassword",type:a?"text":"password",value:u.currentPassword,onChange:h=>d(p=>({...p,currentPassword:h.target.value})),className:"pl-10 pr-10",placeholder:"Mevcut şifrenizi girin",required:!0}),r.jsx("button",{type:"button",onClick:()=>i(!a),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",children:a?r.jsx(io,{className:"h-4 w-4"}):r.jsx(Qr,{className:"h-4 w-4"})})]})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{htmlFor:"newPassword",children:"Yeni Şifre"}),r.jsxs("div",{className:"relative",children:[r.jsx(ro,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx(he,{id:"newPassword",type:l?"text":"password",value:u.newPassword,onChange:h=>d(p=>({...p,newPassword:h.target.value})),className:"pl-10 pr-10",placeholder:"Yeni şifrenizi girin (en az 8 karakter)",minLength:8,required:!0}),r.jsx("button",{type:"button",onClick:()=>s(!l),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",children:l?r.jsx(io,{className:"h-4 w-4"}):r.jsx(Qr,{className:"h-4 w-4"})})]})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(Ie,{htmlFor:"confirmPassword",children:"Yeni Şifre (Tekrar)"}),r.jsxs("div",{className:"relative",children:[r.jsx(ro,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx(he,{id:"confirmPassword",type:o?"text":"password",value:u.confirmPassword,onChange:h=>d(p=>({...p,confirmPassword:h.target.value})),className:"pl-10 pr-10",placeholder:"Yeni şifrenizi tekrar girin",minLength:8,required:!0}),r.jsx("button",{type:"button",onClick:()=>c(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",children:o?r.jsx(io,{className:"h-4 w-4"}):r.jsx(Qr,{className:"h-4 w-4"})})]})]}),r.jsx(ne,{type:"submit",disabled:t,className:"w-full",children:t?"Güncelleniyor...":"Şifreyi Güncelle"})]})})]})})]})}console.log("App component loading...");const U4=new aA,Y4=()=>(console.log("App component rendering..."),r.jsx(rA,{client:U4,children:r.jsxs(R2,{children:[r.jsx(pj,{}),r.jsx(qj,{}),r.jsxs(lE,{children:[r.jsx(dE,{}),r.jsxs(ZA,{children:[r.jsx(Se,{path:"/",element:r.jsx(VM,{})}),r.jsx(Se,{path:"/blog",element:r.jsx(nR,{})}),r.jsx(Se,{path:"/blog/:id",element:r.jsx(aR,{})}),r.jsx(Se,{path:"/about",element:r.jsx(lR,{})}),r.jsx(Se,{path:"/contact",element:r.jsx(uR,{})}),r.jsx(Se,{path:"/shop",element:r.jsx(fR,{})}),r.jsx(Se,{path:"/search",element:r.jsx(FD,{})}),r.jsx(Se,{path:"/category/:category",element:r.jsx(Sp,{})}),r.jsx(Se,{path:"/category/:category/:subcategory",element:r.jsx(Sp,{})}),r.jsx(Se,{path:"/product/:id",element:r.jsx(DD,{})}),r.jsx(Se,{path:"/cookie-policy",element:r.jsx(BD,{})}),r.jsx(Se,{path:"/privacy",element:r.jsx(OD,{})}),r.jsx(Se,{path:"/terms",element:r.jsx(KD,{})}),r.jsx(Se,{path:"/consumer-ratings",element:r.jsx(HD,{})}),r.jsx(Se,{path:"/admin/login",element:r.jsx(Np,{children:r.jsx(c4,{})})}),r.jsxs(Se,{path:"/admin",element:r.jsx(Np,{children:r.jsx(l4,{})}),children:[r.jsx(Se,{index:!0,element:r.jsx(u4,{})}),r.jsx(Se,{path:"subscribers",element:r.jsx(j4,{})}),r.jsx(Se,{path:"contacts",element:r.jsx(A4,{})}),r.jsx(Se,{path:"blog",element:r.jsx(O4,{})}),r.jsx(Se,{path:"products",element:r.jsx(H4,{})}),r.jsx(Se,{path:"settings",element:r.jsx(G4,{})})]}),r.jsx(Se,{path:"*",element:r.jsx(qM,{})})]})]})]})}));console.log("Main.tsx loading...");const Kz=document.getElementById("root");if(!Kz)throw new Error("Root element not found");console.log("Root element found, rendering App...");Zg(Kz).render(r.jsx(TE,{children:r.jsx(Y4,{})}));
