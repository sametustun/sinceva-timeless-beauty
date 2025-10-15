var Wm=e=>{throw TypeError(e)};var Qs=(e,t,n)=>t.has(e)||Wm("Cannot "+n);var j=(e,t,n)=>(Qs(e,t,"read from private field"),n?n.call(e):t.get(e)),le=(e,t,n)=>t.has(e)?Wm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),X=(e,t,n,r)=>(Qs(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ue=(e,t,n)=>(Qs(e,t,"access private method"),n);var Tl=(e,t,n,r)=>({set _(i){X(e,t,i,n)},get _(){return j(e,t,r)}});function l0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function vp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bp={exports:{}},ls={},xp={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),o0=Symbol.for("react.portal"),s0=Symbol.for("react.fragment"),u0=Symbol.for("react.strict_mode"),c0=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),m0=Symbol.for("react.context"),f0=Symbol.for("react.forward_ref"),h0=Symbol.for("react.suspense"),p0=Symbol.for("react.memo"),y0=Symbol.for("react.lazy"),Qm=Symbol.iterator;function k0(e){return e===null||typeof e!="object"?null:(e=Qm&&e[Qm]||e["@@iterator"],typeof e=="function"?e:null)}var wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zp=Object.assign,Sp={};function Yi(e,t,n){this.props=e,this.context=t,this.refs=Sp,this.updater=n||wp}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cp(){}Cp.prototype=Yi.prototype;function od(e,t,n){this.props=e,this.context=t,this.refs=Sp,this.updater=n||wp}var sd=od.prototype=new Cp;sd.constructor=od;zp(sd,Yi.prototype);sd.isPureReactComponent=!0;var Xm=Array.isArray,Ep=Object.prototype.hasOwnProperty,ud={current:null},Ap={key:!0,ref:!0,__self:!0,__source:!0};function Np(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Ep.call(t,r)&&!Ap.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:fl,type:e,key:a,ref:l,props:i,_owner:ud.current}}function g0(e,t){return{$$typeof:fl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cd(e){return typeof e=="object"&&e!==null&&e.$$typeof===fl}function v0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zm=/\/+/g;function Xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v0(""+e.key):t.toString(36)}function ao(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fl:case o0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Xs(l,0):r,Xm(i)?(n="",e!=null&&(n=e.replace(Zm,"$&/")+"/"),ao(i,t,n,"",function(c){return c})):i!=null&&(cd(i)&&(i=g0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Zm,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Xm(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+Xs(a,s);l+=ao(a,t,n,u,i)}else if(u=k0(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+Xs(a,s++),l+=ao(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ml(e,t,n){if(e==null)return e;var r=[],i=0;return ao(e,r,"","",function(a){return t.call(n,a,i++)}),r}function b0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},lo={transition:null},x0={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:lo,ReactCurrentOwner:ud};function Pp(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Ml,forEach:function(e,t,n){Ml(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ml(e,function(){t++}),t},toArray:function(e){return Ml(e,function(t){return t})||[]},only:function(e){if(!cd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=Yi;J.Fragment=s0;J.Profiler=c0;J.PureComponent=od;J.StrictMode=u0;J.Suspense=h0;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;J.act=Pp;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zp({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=ud.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ep.call(t,u)&&!Ap.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:fl,type:e.type,key:i,ref:a,props:r,_owner:l}};J.createContext=function(e){return e={$$typeof:m0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:d0,_context:e},e.Consumer=e};J.createElement=Np;J.createFactory=function(e){var t=Np.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:f0,render:e}};J.isValidElement=cd;J.lazy=function(e){return{$$typeof:y0,_payload:{_status:-1,_result:e},_init:b0}};J.memo=function(e,t){return{$$typeof:p0,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=lo.transition;lo.transition={};try{e()}finally{lo.transition=t}};J.unstable_act=Pp;J.useCallback=function(e,t){return rt.current.useCallback(e,t)};J.useContext=function(e){return rt.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};J.useEffect=function(e,t){return rt.current.useEffect(e,t)};J.useId=function(){return rt.current.useId()};J.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return rt.current.useMemo(e,t)};J.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};J.useRef=function(e){return rt.current.useRef(e)};J.useState=function(e){return rt.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return rt.current.useTransition()};J.version="18.3.1";xp.exports=J;var f=xp.exports;const R=vp(f),dd=l0({__proto__:null,default:R},[f]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=f,z0=Symbol.for("react.element"),S0=Symbol.for("react.fragment"),C0=Object.prototype.hasOwnProperty,E0=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A0={key:!0,ref:!0,__self:!0,__source:!0};function jp(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)C0.call(t,r)&&!A0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:z0,type:e,key:a,ref:l,props:i,_owner:E0.current}}ls.Fragment=S0;ls.jsx=jp;ls.jsxs=jp;bp.exports=ls;var o=bp.exports,Tp={exports:{}},zt={},Mp={exports:{}},Rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,A){var M=N.length;N.push(A);e:for(;0<M;){var B=M-1>>>1,O=N[B];if(0<i(O,A))N[B]=A,N[M]=O,M=B;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var A=N[0],M=N.pop();if(M!==A){N[0]=M;e:for(var B=0,O=N.length,$=O>>>1;B<$;){var V=2*(B+1)-1,ne=N[V],se=V+1,W=N[se];if(0>i(ne,M))se<O&&0>i(W,ne)?(N[B]=W,N[se]=M,B=se):(N[B]=ne,N[V]=M,B=V);else if(se<O&&0>i(W,M))N[B]=W,N[se]=M,B=se;else break e}}return A}function i(N,A){var M=N.sortIndex-A.sortIndex;return M!==0?M:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],m=1,d=null,h=3,p=!1,x=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=N)r(c),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(c)}}function w(N){if(g=!1,v(N),!x)if(n(u)!==null)x=!0,_(z);else{var A=n(c);A!==null&&U(w,A.startTime-N)}}function z(N,A){x=!1,g&&(g=!1,y(E),E=-1),p=!0;var M=h;try{for(v(A),d=n(u);d!==null&&(!(d.expirationTime>A)||N&&!L());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var O=B(d.expirationTime<=A);A=e.unstable_now(),typeof O=="function"?d.callback=O:d===n(u)&&r(u),v(A)}else r(u);d=n(u)}if(d!==null)var $=!0;else{var V=n(c);V!==null&&U(w,V.startTime-A),$=!1}return $}finally{d=null,h=M,p=!1}}var S=!1,C=null,E=-1,P=5,T=-1;function L(){return!(e.unstable_now()-T<P)}function I(){if(C!==null){var N=e.unstable_now();T=N;var A=!0;try{A=C(!0,N)}finally{A?G():(S=!1,C=null)}}else S=!1}var G;if(typeof k=="function")G=function(){k(I)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,Y=F.port2;F.port1.onmessage=I,G=function(){Y.postMessage(null)}}else G=function(){b(I,0)};function _(N){C=N,S||(S=!0,G())}function U(N,A){E=b(function(){N(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,_(z))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var M=h;h=A;try{return N()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=h;h=N;try{return A()}finally{h=M}},e.unstable_scheduleCallback=function(N,A,M){var B=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?B+M:B):M=B,N){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=M+O,N={id:m++,callback:A,priorityLevel:N,startTime:M,expirationTime:O,sortIndex:-1},M>B?(N.sortIndex=M,t(c,N),n(u)===null&&N===n(c)&&(g?(y(E),E=-1):g=!0,U(w,M-B))):(N.sortIndex=O,t(u,N),x||p||(x=!0,_(z))),N},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(N){var A=h;return function(){var M=h;h=A;try{return N.apply(this,arguments)}finally{h=M}}}})(Rp);Mp.exports=Rp;var N0=Mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=f,xt=N0;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dp=new Set,ja={};function Qr(e,t){Ii(e,t),Ii(e+"Capture",t)}function Ii(e,t){for(ja[e]=t,e=0;e<t.length;e++)Dp.add(t[e])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,j0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jm={},ef={};function T0(e){return _u.call(ef,e)?!0:_u.call(Jm,e)?!1:j0.test(e)?ef[e]=!0:(Jm[e]=!0,!1)}function M0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R0(e,t,n,r){if(t===null||typeof t>"u"||M0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function fd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(md,fd);Ge[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(md,fd);Ge[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(md,fd);Ge[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function hd(e,t,n,r){var i=Ge.hasOwnProperty(t)?Ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R0(t,n,i,r)&&(n=null),r||i===null?T0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var On=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rl=Symbol.for("react.element"),oi=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Ip=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),kd=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),Lp=Symbol.for("react.offscreen"),tf=Symbol.iterator;function ra(e){return e===null||typeof e!="object"?null:(e=tf&&e[tf]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Zs;function fa(e){if(Zs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zs=t&&t[1]||""}return`
`+Zs+e}var Js=!1;function eu(e,t){if(!e||Js)return"";Js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,s=a.length-1;1<=l&&0<=s&&i[l]!==a[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==a[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==a[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Js=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fa(e):""}function D0(e){switch(e.tag){case 5:return fa(e.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return e=eu(e.type,!1),e;case 11:return e=eu(e.type.render,!1),e;case 1:return e=eu(e.type,!0),e;default:return""}}function Uu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case si:return"Fragment";case oi:return"Portal";case Ku:return"Profiler";case pd:return"StrictMode";case Hu:return"Suspense";case Gu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ip:return(e.displayName||"Context")+".Consumer";case Fp:return(e._context.displayName||"Context")+".Provider";case yd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kd:return t=e.displayName||null,t!==null?t:Uu(e.type)||"Memo";case Zn:t=e._payload,e=e._init;try{return Uu(e(t))}catch{}}return null}function F0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(t);case 8:return t===pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Op(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I0(e){var t=Op(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dl(e){e._valueTracker||(e._valueTracker=I0(e))}function Bp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Op(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yu(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _p(e,t){t=t.checked,t!=null&&hd(e,"checked",t,!1)}function Vu(e,t){_p(e,t);var n=vr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$u(e,t.type,n):t.hasOwnProperty("defaultValue")&&$u(e,t.type,vr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $u(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ha=Array.isArray;function vi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function af(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(ha(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vr(n)}}function Kp(e,t){var n=vr(t.value),r=vr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fl,Gp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ta(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L0=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(e){L0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),va[t]=va[e]})});function Up(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||va.hasOwnProperty(e)&&va[e]?(""+t).trim():t+"px"}function Yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Up(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var O0=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(e,t){if(t){if(O0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Xu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function gd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ju=null,bi=null,xi=null;function of(e){if(e=yl(e)){if(typeof Ju!="function")throw Error(D(280));var t=e.stateNode;t&&(t=ds(t),Ju(e.stateNode,e.type,t))}}function Vp(e){bi?xi?xi.push(e):xi=[e]:bi=e}function $p(){if(bi){var e=bi,t=xi;if(xi=bi=null,of(e),t)for(e=0;e<t.length;e++)of(t[e])}}function qp(e,t){return e(t)}function Wp(){}var tu=!1;function Qp(e,t,n){if(tu)return e(t,n);tu=!0;try{return qp(e,t,n)}finally{tu=!1,(bi!==null||xi!==null)&&(Wp(),$p())}}function Ma(e,t){var n=e.stateNode;if(n===null)return null;var r=ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ec=!1;if(Pn)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){ec=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{ec=!1}function B0(e,t,n,r,i,a,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var ba=!1,So=null,Co=!1,tc=null,_0={onError:function(e){ba=!0,So=e}};function K0(e,t,n,r,i,a,l,s,u){ba=!1,So=null,B0.apply(_0,arguments)}function H0(e,t,n,r,i,a,l,s,u){if(K0.apply(this,arguments),ba){if(ba){var c=So;ba=!1,So=null}else throw Error(D(198));Co||(Co=!0,tc=c)}}function Xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sf(e){if(Xr(e)!==e)throw Error(D(188))}function G0(e){var t=e.alternate;if(!t){if(t=Xr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return sf(i),e;if(a===r)return sf(i),t;a=a.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Zp(e){return e=G0(e),e!==null?Jp(e):null}function Jp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jp(e);if(t!==null)return t;e=e.sibling}return null}var ey=xt.unstable_scheduleCallback,uf=xt.unstable_cancelCallback,U0=xt.unstable_shouldYield,Y0=xt.unstable_requestPaint,Pe=xt.unstable_now,V0=xt.unstable_getCurrentPriorityLevel,vd=xt.unstable_ImmediatePriority,ty=xt.unstable_UserBlockingPriority,Eo=xt.unstable_NormalPriority,$0=xt.unstable_LowPriority,ny=xt.unstable_IdlePriority,os=null,mn=null;function q0(e){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(os,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:X0,W0=Math.log,Q0=Math.LN2;function X0(e){return e>>>=0,e===0?32:31-(W0(e)/Q0|0)|0}var Il=64,Ll=4194304;function pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=pa(s):(a&=l,a!==0&&(r=pa(a)))}else l=n&~i,l!==0?r=pa(l):a!==0&&(r=pa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qt(t),i=1<<n,r|=e[n],t&=~i;return r}function Z0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-qt(a),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Z0(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function nc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ry(){var e=Il;return Il<<=1,!(Il&4194240)&&(Il=64),e}function nu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=n}function ex(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function bd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function iy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ay,xd,ly,oy,sy,rc=!1,Ol=[],cr=null,dr=null,mr=null,Ra=new Map,Da=new Map,er=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cf(e,t){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function aa(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yl(t),t!==null&&xd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nx(e,t,n,r,i){switch(t){case"focusin":return cr=aa(cr,e,t,n,r,i),!0;case"dragenter":return dr=aa(dr,e,t,n,r,i),!0;case"mouseover":return mr=aa(mr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ra.set(a,aa(Ra.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Da.set(a,aa(Da.get(a)||null,e,t,n,r,i)),!0}return!1}function uy(e){var t=Tr(e.target);if(t!==null){var n=Xr(t);if(n!==null){if(t=n.tag,t===13){if(t=Xp(n),t!==null){e.blockedOn=t,sy(e.priority,function(){ly(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ic(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zu=r,n.target.dispatchEvent(r),Zu=null}else return t=yl(n),t!==null&&xd(t),e.blockedOn=n,!1;t.shift()}return!0}function df(e,t,n){oo(e)&&n.delete(t)}function rx(){rc=!1,cr!==null&&oo(cr)&&(cr=null),dr!==null&&oo(dr)&&(dr=null),mr!==null&&oo(mr)&&(mr=null),Ra.forEach(df),Da.forEach(df)}function la(e,t){e.blockedOn===t&&(e.blockedOn=null,rc||(rc=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,rx)))}function Fa(e){function t(i){return la(i,e)}if(0<Ol.length){la(Ol[0],e);for(var n=1;n<Ol.length;n++){var r=Ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cr!==null&&la(cr,e),dr!==null&&la(dr,e),mr!==null&&la(mr,e),Ra.forEach(t),Da.forEach(t),n=0;n<er.length;n++)r=er[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)uy(n),n.blockedOn===null&&er.shift()}var wi=On.ReactCurrentBatchConfig,No=!0;function ix(e,t,n,r){var i=de,a=wi.transition;wi.transition=null;try{de=1,wd(e,t,n,r)}finally{de=i,wi.transition=a}}function ax(e,t,n,r){var i=de,a=wi.transition;wi.transition=null;try{de=4,wd(e,t,n,r)}finally{de=i,wi.transition=a}}function wd(e,t,n,r){if(No){var i=ic(e,t,n,r);if(i===null)mu(e,t,r,Po,n),cf(e,r);else if(nx(i,e,t,n,r))r.stopPropagation();else if(cf(e,r),t&4&&-1<tx.indexOf(e)){for(;i!==null;){var a=yl(i);if(a!==null&&ay(a),a=ic(e,t,n,r),a===null&&mu(e,t,r,Po,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else mu(e,t,r,null,n)}}var Po=null;function ic(e,t,n,r){if(Po=null,e=gd(r),e=Tr(e),e!==null)if(t=Xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function cy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V0()){case vd:return 1;case ty:return 4;case Eo:case $0:return 16;case ny:return 536870912;default:return 16}default:return 16}}var or=null,zd=null,so=null;function dy(){if(so)return so;var e,t=zd,n=t.length,r,i="value"in or?or.value:or.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return so=i.slice(e,1<r?1-r:void 0)}function uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function mf(){return!1}function St(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Bl:mf,this.isPropagationStopped=mf,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),t}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=St(Vi),pl=Ee({},Vi,{view:0,detail:0}),lx=St(pl),ru,iu,oa,ss=Ee({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oa&&(oa&&e.type==="mousemove"?(ru=e.screenX-oa.screenX,iu=e.screenY-oa.screenY):iu=ru=0,oa=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),ff=St(ss),ox=Ee({},ss,{dataTransfer:0}),sx=St(ox),ux=Ee({},pl,{relatedTarget:0}),au=St(ux),cx=Ee({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=St(cx),mx=Ee({},Vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fx=St(mx),hx=Ee({},Vi,{data:0}),hf=St(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kx[e])?!!t[e]:!1}function Cd(){return gx}var vx=Ee({},pl,{key:function(e){if(e.key){var t=px[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bx=St(vx),xx=Ee({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=St(xx),wx=Ee({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),zx=St(wx),Sx=Ee({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=St(Sx),Ex=Ee({},ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=St(Ex),Nx=[9,13,27,32],Ed=Pn&&"CompositionEvent"in window,xa=null;Pn&&"documentMode"in document&&(xa=document.documentMode);var Px=Pn&&"TextEvent"in window&&!xa,my=Pn&&(!Ed||xa&&8<xa&&11>=xa),yf=" ",kf=!1;function fy(e,t){switch(e){case"keyup":return Nx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ui=!1;function jx(e,t){switch(e){case"compositionend":return hy(t);case"keypress":return t.which!==32?null:(kf=!0,yf);case"textInput":return e=t.data,e===yf&&kf?null:e;default:return null}}function Tx(e,t){if(ui)return e==="compositionend"||!Ed&&fy(e,t)?(e=dy(),so=zd=or=null,ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return my&&t.locale!=="ko"?null:t.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mx[e.type]:t==="textarea"}function py(e,t,n,r){Vp(r),t=jo(t,"onChange"),0<t.length&&(n=new Sd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wa=null,Ia=null;function Rx(e){Ey(e,0)}function us(e){var t=mi(e);if(Bp(t))return e}function Dx(e,t){if(e==="change")return t}var yy=!1;if(Pn){var lu;if(Pn){var ou="oninput"in document;if(!ou){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),ou=typeof vf.oninput=="function"}lu=ou}else lu=!1;yy=lu&&(!document.documentMode||9<document.documentMode)}function bf(){wa&&(wa.detachEvent("onpropertychange",ky),Ia=wa=null)}function ky(e){if(e.propertyName==="value"&&us(Ia)){var t=[];py(t,Ia,e,gd(e)),Qp(Rx,t)}}function Fx(e,t,n){e==="focusin"?(bf(),wa=t,Ia=n,wa.attachEvent("onpropertychange",ky)):e==="focusout"&&bf()}function Ix(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(Ia)}function Lx(e,t){if(e==="click")return us(t)}function Ox(e,t){if(e==="input"||e==="change")return us(t)}function Bx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:Bx;function La(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_u.call(t,i)||!Xt(e[i],t[i]))return!1}return!0}function xf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wf(e,t){var n=xf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xf(n)}}function gy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vy(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function Ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _x(e){var t=vy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gy(n.ownerDocument.documentElement,n)){if(r!==null&&Ad(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=wf(n,a);var l=wf(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kx=Pn&&"documentMode"in document&&11>=document.documentMode,ci=null,ac=null,za=null,lc=!1;function zf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lc||ci==null||ci!==zo(r)||(r=ci,"selectionStart"in r&&Ad(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),za&&La(za,r)||(za=r,r=jo(ac,"onSelect"),0<r.length&&(t=new Sd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ci)))}function _l(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var di={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},su={},by={};Pn&&(by=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function cs(e){if(su[e])return su[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in by)return su[e]=t[n];return e}var xy=cs("animationend"),wy=cs("animationiteration"),zy=cs("animationstart"),Sy=cs("transitionend"),Cy=new Map,Sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Cy.set(e,t),Qr(t,[e])}for(var uu=0;uu<Sf.length;uu++){var cu=Sf[uu],Hx=cu.toLowerCase(),Gx=cu[0].toUpperCase()+cu.slice(1);zr(Hx,"on"+Gx)}zr(xy,"onAnimationEnd");zr(wy,"onAnimationIteration");zr(zy,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Sy,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function Cf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,H0(r,t,void 0,e),e.currentTarget=null}function Ey(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;Cf(i,s,c),a=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;Cf(i,s,c),a=u}}}if(Co)throw e=tc,Co=!1,tc=null,e}function ve(e,t){var n=t[dc];n===void 0&&(n=t[dc]=new Set);var r=e+"__bubble";n.has(r)||(Ay(t,e,2,!1),n.add(r))}function du(e,t,n){var r=0;t&&(r|=4),Ay(n,e,r,t)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Oa(e){if(!e[Kl]){e[Kl]=!0,Dp.forEach(function(n){n!=="selectionchange"&&(Ux.has(n)||du(n,!1,e),du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kl]||(t[Kl]=!0,du("selectionchange",!1,t))}}function Ay(e,t,n,r){switch(cy(t)){case 1:var i=ix;break;case 4:i=ax;break;default:i=wd}n=i.bind(null,t,n,e),i=void 0,!ec||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function mu(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Tr(s),l===null)return;if(u=l.tag,u===5||u===6){r=a=l;continue e}s=s.parentNode}}r=r.return}Qp(function(){var c=a,m=gd(n),d=[];e:{var h=Cy.get(e);if(h!==void 0){var p=Sd,x=e;switch(e){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":p=bx;break;case"focusin":x="focus",p=au;break;case"focusout":x="blur",p=au;break;case"beforeblur":case"afterblur":p=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zx;break;case xy:case wy:case zy:p=dx;break;case Sy:p=Cx;break;case"scroll":p=lx;break;case"wheel":p=Ax;break;case"copy":case"cut":case"paste":p=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pf}var g=(t&4)!==0,b=!g&&e==="scroll",y=g?h!==null?h+"Capture":null:h;g=[];for(var k=c,v;k!==null;){v=k;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,y!==null&&(w=Ma(k,y),w!=null&&g.push(Ba(k,w,v)))),b)break;k=k.return}0<g.length&&(h=new p(h,x,null,n,m),d.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==Zu&&(x=n.relatedTarget||n.fromElement)&&(Tr(x)||x[jn]))break e;if((p||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Tr(x):null,x!==null&&(b=Xr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(g=ff,w="onMouseLeave",y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(g=pf,w="onPointerLeave",y="onPointerEnter",k="pointer"),b=p==null?h:mi(p),v=x==null?h:mi(x),h=new g(w,k+"leave",p,n,m),h.target=b,h.relatedTarget=v,w=null,Tr(m)===c&&(g=new g(y,k+"enter",x,n,m),g.target=v,g.relatedTarget=b,w=g),b=w,p&&x)t:{for(g=p,y=x,k=0,v=g;v;v=ri(v))k++;for(v=0,w=y;w;w=ri(w))v++;for(;0<k-v;)g=ri(g),k--;for(;0<v-k;)y=ri(y),v--;for(;k--;){if(g===y||y!==null&&g===y.alternate)break t;g=ri(g),y=ri(y)}g=null}else g=null;p!==null&&Ef(d,h,p,g,!1),x!==null&&b!==null&&Ef(d,b,x,g,!0)}}e:{if(h=c?mi(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var z=Dx;else if(gf(h))if(yy)z=Ox;else{z=Ix;var S=Fx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(z=Lx);if(z&&(z=z(e,c))){py(d,z,n,m);break e}S&&S(e,h,c),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&$u(h,"number",h.value)}switch(S=c?mi(c):window,e){case"focusin":(gf(S)||S.contentEditable==="true")&&(ci=S,ac=c,za=null);break;case"focusout":za=ac=ci=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,zf(d,n,m);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":zf(d,n,m)}var C;if(Ed)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ui?fy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(my&&n.locale!=="ko"&&(ui||E!=="onCompositionStart"?E==="onCompositionEnd"&&ui&&(C=dy()):(or=m,zd="value"in or?or.value:or.textContent,ui=!0)),S=jo(c,E),0<S.length&&(E=new hf(E,e,null,n,m),d.push({event:E,listeners:S}),C?E.data=C:(C=hy(n),C!==null&&(E.data=C)))),(C=Px?jx(e,n):Tx(e,n))&&(c=jo(c,"onBeforeInput"),0<c.length&&(m=new hf("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:c}),m.data=C))}Ey(d,t)})}function Ba(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ma(e,n),a!=null&&r.unshift(Ba(e,a,i)),a=Ma(e,t),a!=null&&r.push(Ba(e,a,i))),e=e.return}return r}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ef(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Ma(n,a),u!=null&&l.unshift(Ba(n,u,s))):i||(u=Ma(n,a),u!=null&&l.push(Ba(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Yx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function Af(e){return(typeof e=="string"?e:""+e).replace(Yx,`
`).replace(Vx,"")}function Hl(e,t,n){if(t=Af(t),Af(e)!==t&&n)throw Error(D(425))}function To(){}var oc=null,sc=null;function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(e){return Nf.resolve(null).then(e).catch(Wx)}:cc;function Wx(e){setTimeout(function(){throw e})}function fu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fa(t)}function fr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $i=Math.random().toString(36).slice(2),sn="__reactFiber$"+$i,_a="__reactProps$"+$i,jn="__reactContainer$"+$i,dc="__reactEvents$"+$i,Qx="__reactListeners$"+$i,Xx="__reactHandles$"+$i;function Tr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pf(e);e!==null;){if(n=e[sn])return n;e=Pf(e)}return t}e=n,n=e.parentNode}return null}function yl(e){return e=e[sn]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function ds(e){return e[_a]||null}var mc=[],fi=-1;function Sr(e){return{current:e}}function be(e){0>fi||(e.current=mc[fi],mc[fi]=null,fi--)}function pe(e,t){fi++,mc[fi]=e.current,e.current=t}var br={},Qe=Sr(br),dt=Sr(!1),Gr=br;function Li(e,t){var n=e.type.contextTypes;if(!n)return br;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mt(e){return e=e.childContextTypes,e!=null}function Mo(){be(dt),be(Qe)}function jf(e,t,n){if(Qe.current!==br)throw Error(D(168));pe(Qe,t),pe(dt,n)}function Ny(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,F0(e)||"Unknown",i));return Ee({},n,r)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||br,Gr=Qe.current,pe(Qe,e),pe(dt,dt.current),!0}function Tf(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Ny(e,t,Gr),r.__reactInternalMemoizedMergedChildContext=e,be(dt),be(Qe),pe(Qe,e)):be(dt),pe(dt,n)}var zn=null,ms=!1,hu=!1;function Py(e){zn===null?zn=[e]:zn.push(e)}function Zx(e){ms=!0,Py(e)}function Cr(){if(!hu&&zn!==null){hu=!0;var e=0,t=de;try{var n=zn;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zn=null,ms=!1}catch(i){throw zn!==null&&(zn=zn.slice(e+1)),ey(vd,Cr),i}finally{de=t,hu=!1}}return null}var hi=[],pi=0,Do=null,Fo=0,Et=[],At=0,Ur=null,Cn=1,En="";function Pr(e,t){hi[pi++]=Fo,hi[pi++]=Do,Do=e,Fo=t}function jy(e,t,n){Et[At++]=Cn,Et[At++]=En,Et[At++]=Ur,Ur=e;var r=Cn;e=En;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var a=32-qt(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Cn=1<<32-qt(t)+i|n<<i|r,En=a+e}else Cn=1<<a|n<<i|r,En=e}function Nd(e){e.return!==null&&(Pr(e,1),jy(e,1,0))}function Pd(e){for(;e===Do;)Do=hi[--pi],hi[pi]=null,Fo=hi[--pi],hi[pi]=null;for(;e===Ur;)Ur=Et[--At],Et[At]=null,En=Et[--At],Et[At]=null,Cn=Et[--At],Et[At]=null}var vt=null,gt=null,xe=!1,$t=null;function Ty(e,t){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,gt=fr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ur!==null?{id:Cn,overflow:En}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,gt=null,!0):!1;default:return!1}}function fc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hc(e){if(xe){var t=gt;if(t){var n=t;if(!Mf(e,t)){if(fc(e))throw Error(D(418));t=fr(n.nextSibling);var r=vt;t&&Mf(e,t)?Ty(r,n):(e.flags=e.flags&-4097|2,xe=!1,vt=e)}}else{if(fc(e))throw Error(D(418));e.flags=e.flags&-4097|2,xe=!1,vt=e}}}function Rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Gl(e){if(e!==vt)return!1;if(!xe)return Rf(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uc(e.type,e.memoizedProps)),t&&(t=gt)){if(fc(e))throw My(),Error(D(418));for(;t;)Ty(e,t),t=fr(t.nextSibling)}if(Rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=fr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=vt?fr(e.stateNode.nextSibling):null;return!0}function My(){for(var e=gt;e;)e=fr(e.nextSibling)}function Oi(){gt=vt=null,xe=!1}function jd(e){$t===null?$t=[e]:$t.push(e)}var Jx=On.ReactCurrentBatchConfig;function sa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var s=i.refs;l===null?delete s[a]:s[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Ul(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Df(e){var t=e._init;return t(e._payload)}function Ry(e){function t(y,k){if(e){var v=y.deletions;v===null?(y.deletions=[k],y.flags|=16):v.push(k)}}function n(y,k){if(!e)return null;for(;k!==null;)t(y,k),k=k.sibling;return null}function r(y,k){for(y=new Map;k!==null;)k.key!==null?y.set(k.key,k):y.set(k.index,k),k=k.sibling;return y}function i(y,k){return y=kr(y,k),y.index=0,y.sibling=null,y}function a(y,k,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<k?(y.flags|=2,k):v):(y.flags|=2,k)):(y.flags|=1048576,k)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,k,v,w){return k===null||k.tag!==6?(k=xu(v,y.mode,w),k.return=y,k):(k=i(k,v),k.return=y,k)}function u(y,k,v,w){var z=v.type;return z===si?m(y,k,v.props.children,w,v.key):k!==null&&(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Zn&&Df(z)===k.type)?(w=i(k,v.props),w.ref=sa(y,k,v),w.return=y,w):(w=ko(v.type,v.key,v.props,null,y.mode,w),w.ref=sa(y,k,v),w.return=y,w)}function c(y,k,v,w){return k===null||k.tag!==4||k.stateNode.containerInfo!==v.containerInfo||k.stateNode.implementation!==v.implementation?(k=wu(v,y.mode,w),k.return=y,k):(k=i(k,v.children||[]),k.return=y,k)}function m(y,k,v,w,z){return k===null||k.tag!==7?(k=Hr(v,y.mode,w,z),k.return=y,k):(k=i(k,v),k.return=y,k)}function d(y,k,v){if(typeof k=="string"&&k!==""||typeof k=="number")return k=xu(""+k,y.mode,v),k.return=y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Rl:return v=ko(k.type,k.key,k.props,null,y.mode,v),v.ref=sa(y,null,k),v.return=y,v;case oi:return k=wu(k,y.mode,v),k.return=y,k;case Zn:var w=k._init;return d(y,w(k._payload),v)}if(ha(k)||ra(k))return k=Hr(k,y.mode,v,null),k.return=y,k;Ul(y,k)}return null}function h(y,k,v,w){var z=k!==null?k.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return z!==null?null:s(y,k,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rl:return v.key===z?u(y,k,v,w):null;case oi:return v.key===z?c(y,k,v,w):null;case Zn:return z=v._init,h(y,k,z(v._payload),w)}if(ha(v)||ra(v))return z!==null?null:m(y,k,v,w,null);Ul(y,v)}return null}function p(y,k,v,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(v)||null,s(k,y,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Rl:return y=y.get(w.key===null?v:w.key)||null,u(k,y,w,z);case oi:return y=y.get(w.key===null?v:w.key)||null,c(k,y,w,z);case Zn:var S=w._init;return p(y,k,v,S(w._payload),z)}if(ha(w)||ra(w))return y=y.get(v)||null,m(k,y,w,z,null);Ul(k,w)}return null}function x(y,k,v,w){for(var z=null,S=null,C=k,E=k=0,P=null;C!==null&&E<v.length;E++){C.index>E?(P=C,C=null):P=C.sibling;var T=h(y,C,v[E],w);if(T===null){C===null&&(C=P);break}e&&C&&T.alternate===null&&t(y,C),k=a(T,k,E),S===null?z=T:S.sibling=T,S=T,C=P}if(E===v.length)return n(y,C),xe&&Pr(y,E),z;if(C===null){for(;E<v.length;E++)C=d(y,v[E],w),C!==null&&(k=a(C,k,E),S===null?z=C:S.sibling=C,S=C);return xe&&Pr(y,E),z}for(C=r(y,C);E<v.length;E++)P=p(C,y,E,v[E],w),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?E:P.key),k=a(P,k,E),S===null?z=P:S.sibling=P,S=P);return e&&C.forEach(function(L){return t(y,L)}),xe&&Pr(y,E),z}function g(y,k,v,w){var z=ra(v);if(typeof z!="function")throw Error(D(150));if(v=z.call(v),v==null)throw Error(D(151));for(var S=z=null,C=k,E=k=0,P=null,T=v.next();C!==null&&!T.done;E++,T=v.next()){C.index>E?(P=C,C=null):P=C.sibling;var L=h(y,C,T.value,w);if(L===null){C===null&&(C=P);break}e&&C&&L.alternate===null&&t(y,C),k=a(L,k,E),S===null?z=L:S.sibling=L,S=L,C=P}if(T.done)return n(y,C),xe&&Pr(y,E),z;if(C===null){for(;!T.done;E++,T=v.next())T=d(y,T.value,w),T!==null&&(k=a(T,k,E),S===null?z=T:S.sibling=T,S=T);return xe&&Pr(y,E),z}for(C=r(y,C);!T.done;E++,T=v.next())T=p(C,y,E,T.value,w),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?E:T.key),k=a(T,k,E),S===null?z=T:S.sibling=T,S=T);return e&&C.forEach(function(I){return t(y,I)}),xe&&Pr(y,E),z}function b(y,k,v,w){if(typeof v=="object"&&v!==null&&v.type===si&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Rl:e:{for(var z=v.key,S=k;S!==null;){if(S.key===z){if(z=v.type,z===si){if(S.tag===7){n(y,S.sibling),k=i(S,v.props.children),k.return=y,y=k;break e}}else if(S.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Zn&&Df(z)===S.type){n(y,S.sibling),k=i(S,v.props),k.ref=sa(y,S,v),k.return=y,y=k;break e}n(y,S);break}else t(y,S);S=S.sibling}v.type===si?(k=Hr(v.props.children,y.mode,w,v.key),k.return=y,y=k):(w=ko(v.type,v.key,v.props,null,y.mode,w),w.ref=sa(y,k,v),w.return=y,y=w)}return l(y);case oi:e:{for(S=v.key;k!==null;){if(k.key===S)if(k.tag===4&&k.stateNode.containerInfo===v.containerInfo&&k.stateNode.implementation===v.implementation){n(y,k.sibling),k=i(k,v.children||[]),k.return=y,y=k;break e}else{n(y,k);break}else t(y,k);k=k.sibling}k=wu(v,y.mode,w),k.return=y,y=k}return l(y);case Zn:return S=v._init,b(y,k,S(v._payload),w)}if(ha(v))return x(y,k,v,w);if(ra(v))return g(y,k,v,w);Ul(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,k!==null&&k.tag===6?(n(y,k.sibling),k=i(k,v),k.return=y,y=k):(n(y,k),k=xu(v,y.mode,w),k.return=y,y=k),l(y)):n(y,k)}return b}var Bi=Ry(!0),Dy=Ry(!1),Io=Sr(null),Lo=null,yi=null,Td=null;function Md(){Td=yi=Lo=null}function Rd(e){var t=Io.current;be(Io),e._currentValue=t}function pc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zi(e,t){Lo=e,Td=yi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ct=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Td!==e)if(e={context:e,memoizedValue:t,next:null},yi===null){if(Lo===null)throw Error(D(308));yi=e,Lo.dependencies={lanes:0,firstContext:e}}else yi=yi.next=e;return t}var Mr=null;function Dd(e){Mr===null?Mr=[e]:Mr.push(e)}function Fy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tn(e,r)}function Tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jn=!1;function Fd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tn(e,n)}return i=r.interleaved,i===null?(t.next=t,Dd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tn(e,n)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bd(e,n)}}function Ff(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oo(e,t,n,r){var i=e.updateQueue;Jn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?a=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(a!==null){var d=i.baseState;l=0,m=c=u=null,s=a;do{var h=s.lane,p=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,g=s;switch(h=t,p=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=Ee({},d,h);break e;case 2:Jn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=p,u=d):m=m.next=p,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Vr|=l,e.lanes=l,e.memoizedState=d}}function If(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var kl={},fn=Sr(kl),Ka=Sr(kl),Ha=Sr(kl);function Rr(e){if(e===kl)throw Error(D(174));return e}function Id(e,t){switch(pe(Ha,t),pe(Ka,e),pe(fn,kl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wu(t,e)}be(fn),pe(fn,t)}function _i(){be(fn),be(Ka),be(Ha)}function Ly(e){Rr(Ha.current);var t=Rr(fn.current),n=Wu(t,e.type);t!==n&&(pe(Ka,e),pe(fn,n))}function Ld(e){Ka.current===e&&(be(fn),be(Ka))}var ze=Sr(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pu=[];function Od(){for(var e=0;e<pu.length;e++)pu[e]._workInProgressVersionPrimary=null;pu.length=0}var mo=On.ReactCurrentDispatcher,yu=On.ReactCurrentBatchConfig,Yr=0,Ce=null,Fe=null,Le=null,_o=!1,Sa=!1,Ga=0,ew=0;function Ye(){throw Error(D(321))}function Bd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function _d(e,t,n,r,i,a){if(Yr=a,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mo.current=e===null||e.memoizedState===null?iw:aw,e=n(r,i),Sa){a=0;do{if(Sa=!1,Ga=0,25<=a)throw Error(D(301));a+=1,Le=Fe=null,t.updateQueue=null,mo.current=lw,e=n(r,i)}while(Sa)}if(mo.current=Ko,t=Fe!==null&&Fe.next!==null,Yr=0,Le=Fe=Ce=null,_o=!1,t)throw Error(D(300));return e}function Kd(){var e=Ga!==0;return Ga=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?Ce.memoizedState=Le=e:Le=Le.next=e,Le}function Mt(){if(Fe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Le===null?Ce.memoizedState:Le.next;if(t!==null)Le=t,Fe=e;else{if(e===null)throw Error(D(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Le===null?Ce.memoizedState=Le=e:Le=Le.next=e}return Le}function Ua(e,t){return typeof t=="function"?t(e):t}function ku(e){var t=Mt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=l=null,u=null,c=a;do{var m=c.lane;if((Yr&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=d,l=r):u=u.next=d,Ce.lanes|=m,Vr|=m}c=c.next}while(c!==null&&c!==a);u===null?l=r:u.next=s,Xt(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ce.lanes|=a,Vr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gu(e){var t=Mt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Xt(a,t.memoizedState)||(ct=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Oy(){}function By(e,t){var n=Ce,r=Mt(),i=t(),a=!Xt(r.memoizedState,i);if(a&&(r.memoizedState=i,ct=!0),r=r.queue,Hd(Hy.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Ya(9,Ky.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(D(349));Yr&30||_y(n,t,i)}return i}function _y(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ky(e,t,n,r){t.value=n,t.getSnapshot=r,Gy(t)&&Uy(e)}function Hy(e,t,n){return n(function(){Gy(t)&&Uy(e)})}function Gy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function Uy(e){var t=Tn(e,1);t!==null&&Wt(t,e,1,-1)}function Lf(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},t.queue=e,e=e.dispatch=rw.bind(null,Ce,e),[t.memoizedState,e]}function Ya(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yy(){return Mt().memoizedState}function fo(e,t,n,r){var i=rn();Ce.flags|=e,i.memoizedState=Ya(1|t,n,void 0,r===void 0?null:r)}function fs(e,t,n,r){var i=Mt();r=r===void 0?null:r;var a=void 0;if(Fe!==null){var l=Fe.memoizedState;if(a=l.destroy,r!==null&&Bd(r,l.deps)){i.memoizedState=Ya(t,n,a,r);return}}Ce.flags|=e,i.memoizedState=Ya(1|t,n,a,r)}function Of(e,t){return fo(8390656,8,e,t)}function Hd(e,t){return fs(2048,8,e,t)}function Vy(e,t){return fs(4,2,e,t)}function $y(e,t){return fs(4,4,e,t)}function qy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wy(e,t,n){return n=n!=null?n.concat([e]):null,fs(4,4,qy.bind(null,t,e),n)}function Gd(){}function Qy(e,t){var n=Mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xy(e,t){var n=Mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zy(e,t,n){return Yr&21?(Xt(n,t)||(n=ry(),Ce.lanes|=n,Vr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n)}function tw(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=yu.transition;yu.transition={};try{e(!1),t()}finally{de=n,yu.transition=r}}function Jy(){return Mt().memoizedState}function nw(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ek(e))tk(t,n);else if(n=Fy(e,t,n,r),n!==null){var i=nt();Wt(n,e,r,i),nk(n,t,r)}}function rw(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ek(e))tk(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,s=a(l,n);if(i.hasEagerState=!0,i.eagerState=s,Xt(s,l)){var u=t.interleaved;u===null?(i.next=i,Dd(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Fy(e,t,i,r),n!==null&&(i=nt(),Wt(n,e,r,i),nk(n,t,r))}}function ek(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function tk(e,t){Sa=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nk(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bd(e,n)}}var Ko={readContext:Tt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},iw={readContext:Tt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:Of,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,qy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=rn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nw.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:Lf,useDebugValue:Gd,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=Lf(!1),t=e[0];return e=tw.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=rn();if(xe){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Oe===null)throw Error(D(349));Yr&30||_y(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Of(Hy.bind(null,r,a,e),[e]),r.flags|=2048,Ya(9,Ky.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=rn(),t=Oe.identifierPrefix;if(xe){var n=En,r=Cn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ga++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ew++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},aw={readContext:Tt,useCallback:Qy,useContext:Tt,useEffect:Hd,useImperativeHandle:Wy,useInsertionEffect:Vy,useLayoutEffect:$y,useMemo:Xy,useReducer:ku,useRef:Yy,useState:function(){return ku(Ua)},useDebugValue:Gd,useDeferredValue:function(e){var t=Mt();return Zy(t,Fe.memoizedState,e)},useTransition:function(){var e=ku(Ua)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Oy,useSyncExternalStore:By,useId:Jy,unstable_isNewReconciler:!1},lw={readContext:Tt,useCallback:Qy,useContext:Tt,useEffect:Hd,useImperativeHandle:Wy,useInsertionEffect:Vy,useLayoutEffect:$y,useMemo:Xy,useReducer:gu,useRef:Yy,useState:function(){return gu(Ua)},useDebugValue:Gd,useDeferredValue:function(e){var t=Mt();return Fe===null?t.memoizedState=e:Zy(t,Fe.memoizedState,e)},useTransition:function(){var e=gu(Ua)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Oy,useSyncExternalStore:By,useId:Jy,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={isMounted:function(e){return(e=e._reactInternals)?Xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=yr(e),a=An(r,i);a.payload=t,n!=null&&(a.callback=n),t=hr(e,a,i),t!==null&&(Wt(t,e,i,r),co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=yr(e),a=An(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=hr(e,a,i),t!==null&&(Wt(t,e,i,r),co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=yr(e),i=An(n,r);i.tag=2,t!=null&&(i.callback=t),t=hr(e,i,r),t!==null&&(Wt(t,e,r,n),co(t,e,r))}};function Bf(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!La(n,r)||!La(i,a):!0}function rk(e,t,n){var r=!1,i=br,a=t.contextType;return typeof a=="object"&&a!==null?a=Tt(a):(i=mt(t)?Gr:Qe.current,r=t.contextTypes,a=(r=r!=null)?Li(e,i):br),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function _f(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function kc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Tt(a):(a=mt(t)?Gr:Qe.current,i.context=Li(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(yc(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hs.enqueueReplaceState(i,i.state,null),Oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ki(e,t){try{var n="",r=t;do n+=D0(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function vu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ow=typeof WeakMap=="function"?WeakMap:Map;function ik(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,Nc=r),gc(e,t)},n}function ak(e,t,n){n=An(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){gc(e,t),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Kf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ow;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xw.bind(null,e,t,n),t.then(e,e))}function Hf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,hr(n,t,1))),n.lanes|=1),e)}var sw=On.ReactCurrentOwner,ct=!1;function et(e,t,n,r){t.child=e===null?Dy(t,null,n,r):Bi(t,e.child,n,r)}function Uf(e,t,n,r,i){n=n.render;var a=t.ref;return zi(t,i),r=_d(e,t,n,r,a,i),n=Kd(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mn(e,t,i)):(xe&&n&&Nd(t),t.flags|=1,et(e,t,r,i),t.child)}function Yf(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Xd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,lk(e,t,a,r,i)):(e=ko(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(l,r)&&e.ref===t.ref)return Mn(e,t,i)}return t.flags|=1,e=kr(a,r),e.ref=t.ref,e.return=t,t.child=e}function lk(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(La(a,r)&&e.ref===t.ref)if(ct=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(ct=!0);else return t.lanes=e.lanes,Mn(e,t,i)}return vc(e,t,n,r,i)}function ok(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(gi,yt),yt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(gi,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,pe(gi,yt),yt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,pe(gi,yt),yt|=r;return et(e,t,i,n),t.child}function sk(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vc(e,t,n,r,i){var a=mt(n)?Gr:Qe.current;return a=Li(t,a),zi(t,i),n=_d(e,t,n,r,a,i),r=Kd(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mn(e,t,i)):(xe&&r&&Nd(t),t.flags|=1,et(e,t,n,i),t.child)}function Vf(e,t,n,r,i){if(mt(n)){var a=!0;Ro(t)}else a=!1;if(zi(t,i),t.stateNode===null)ho(e,t),rk(t,n,r),kc(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tt(c):(c=mt(n)?Gr:Qe.current,c=Li(t,c));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&_f(t,l,r,c),Jn=!1;var h=t.memoizedState;l.state=h,Oo(t,r,l,i),u=t.memoizedState,s!==r||h!==u||dt.current||Jn?(typeof m=="function"&&(yc(t,n,m,r),u=t.memoizedState),(s=Jn||Bf(t,n,s,r,h,u,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Iy(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ht(t.type,s),l.props=c,d=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=mt(n)?Gr:Qe.current,u=Li(t,u));var p=n.getDerivedStateFromProps;(m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||h!==u)&&_f(t,l,r,u),Jn=!1,h=t.memoizedState,l.state=h,Oo(t,r,l,i);var x=t.memoizedState;s!==d||h!==x||dt.current||Jn?(typeof p=="function"&&(yc(t,n,p,r),x=t.memoizedState),(c=Jn||Bf(t,n,c,r,h,x,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bc(e,t,n,r,a,i)}function bc(e,t,n,r,i,a){sk(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Tf(t,n,!1),Mn(e,t,a);r=t.stateNode,sw.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Bi(t,e.child,null,a),t.child=Bi(t,null,s,a)):et(e,t,s,a),t.memoizedState=r.state,i&&Tf(t,n,!0),t.child}function uk(e){var t=e.stateNode;t.pendingContext?jf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jf(e,t.context,!1),Id(e,t.containerInfo)}function $f(e,t,n,r,i){return Oi(),jd(i),t.flags|=256,et(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function wc(e){return{baseLanes:e,cachePool:null,transitions:null}}function ck(e,t,n){var r=t.pendingProps,i=ze.current,a=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(ze,i&1),e===null)return hc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=ks(l,r,0,null),e=Hr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=wc(n),t.memoizedState=xc,e):Ud(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return uw(e,t,l,r,s,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=kr(s,a):(a=Hr(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?wc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=xc,r}return a=e.child,e=a.sibling,r=kr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ud(e,t){return t=ks({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yl(e,t,n,r){return r!==null&&jd(r),Bi(t,e.child,null,n),e=Ud(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uw(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=vu(Error(D(422))),Yl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=ks({mode:"visible",children:r.children},i,0,null),a=Hr(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Bi(t,e.child,null,l),t.child.memoizedState=wc(l),t.memoizedState=xc,a);if(!(t.mode&1))return Yl(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(D(419)),r=vu(a,r,void 0),Yl(e,t,l,r)}if(s=(l&e.childLanes)!==0,ct||s){if(r=Oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Tn(e,i),Wt(r,e,i,-1))}return Qd(),r=vu(Error(D(421))),Yl(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ww.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,gt=fr(i.nextSibling),vt=t,xe=!0,$t=null,e!==null&&(Et[At++]=Cn,Et[At++]=En,Et[At++]=Ur,Cn=e.id,En=e.overflow,Ur=t),t=Ud(t,r.children),t.flags|=4096,t)}function qf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pc(e.return,t,n)}function bu(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function dk(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(et(e,t,r.children,n),r=ze.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qf(e,n,t);else if(e.tag===19)qf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(ze,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bu(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bu(t,!0,n,null,a);break;case"together":bu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=kr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cw(e,t,n){switch(t.tag){case 3:uk(t),Oi();break;case 5:Ly(t);break;case 1:mt(t.type)&&Ro(t);break;case 4:Id(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;pe(Io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(ze,ze.current&1),t.flags|=128,null):n&t.child.childLanes?ck(e,t,n):(pe(ze,ze.current&1),e=Mn(e,t,n),e!==null?e.sibling:null);pe(ze,ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dk(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(ze,ze.current),r)break;return null;case 22:case 23:return t.lanes=0,ok(e,t,n)}return Mn(e,t,n)}var mk,zc,fk,hk;mk=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zc=function(){};fk=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rr(fn.current);var a=null;switch(n){case"input":i=Yu(e,i),r=Yu(e,r),a=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),a=[];break;case"textarea":i=qu(e,i),r=qu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=To)}Qu(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ja.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(a||(a=[]),a.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ja.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};hk=function(e,t,n,r){n!==r&&(t.flags|=4)};function ua(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dw(e,t,n){var r=t.pendingProps;switch(Pd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return mt(t.type)&&Mo(),Ve(t),null;case 3:return r=t.stateNode,_i(),be(dt),be(Qe),Od(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(Tc($t),$t=null))),zc(e,t),Ve(t),null;case 5:Ld(t);var i=Rr(Ha.current);if(n=t.type,e!==null&&t.stateNode!=null)fk(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ve(t),null}if(e=Rr(fn.current),Gl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[sn]=t,r[_a]=a,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ya.length;i++)ve(ya[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":nf(r,a),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ve("invalid",r);break;case"textarea":af(r,a),ve("invalid",r)}Qu(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Hl(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Hl(r.textContent,s,e),i=["children",""+s]):ja.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ve("scroll",r)}switch(n){case"input":Dl(r),rf(r,a,!0);break;case"textarea":Dl(r),lf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=To)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[sn]=t,e[_a]=r,mk(e,t,!1,!1),t.stateNode=e;e:{switch(l=Xu(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<ya.length;i++)ve(ya[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":nf(e,r),i=Yu(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),ve("invalid",e);break;case"textarea":af(e,r),i=qu(e,r),ve("invalid",e);break;default:i=r}Qu(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?Yp(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gp(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ta(e,u):typeof u=="number"&&Ta(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ja.hasOwnProperty(a)?u!=null&&a==="onScroll"&&ve("scroll",e):u!=null&&hd(e,a,u,l))}switch(n){case"input":Dl(e),rf(e,r,!1);break;case"textarea":Dl(e),lf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?vi(e,!!r.multiple,a,!1):r.defaultValue!=null&&vi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)hk(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Rr(Ha.current),Rr(fn.current),Gl(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(a=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:Hl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return Ve(t),null;case 13:if(be(ze),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&gt!==null&&t.mode&1&&!(t.flags&128))My(),Oi(),t.flags|=98560,a=!1;else if(a=Gl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(D(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(D(317));a[sn]=t}else Oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),a=!1}else $t!==null&&(Tc($t),$t=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ze.current&1?Ie===0&&(Ie=3):Qd())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return _i(),zc(e,t),e===null&&Oa(t.stateNode.containerInfo),Ve(t),null;case 10:return Rd(t.type._context),Ve(t),null;case 17:return mt(t.type)&&Mo(),Ve(t),null;case 19:if(be(ze),a=t.memoizedState,a===null)return Ve(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)ua(a,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Bo(e),l!==null){for(t.flags|=128,ua(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(ze,ze.current&1|2),t.child}e=e.sibling}a.tail!==null&&Pe()>Hi&&(t.flags|=128,r=!0,ua(a,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ua(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!xe)return Ve(t),null}else 2*Pe()-a.renderingStartTime>Hi&&n!==1073741824&&(t.flags|=128,r=!0,ua(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Pe(),t.sibling=null,n=ze.current,pe(ze,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return Wd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?yt&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function mw(e,t){switch(Pd(t),t.tag){case 1:return mt(t.type)&&Mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _i(),be(dt),be(Qe),Od(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ld(t),null;case 13:if(be(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(ze),null;case 4:return _i(),null;case 10:return Rd(t.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var Vl=!1,We=!1,fw=typeof WeakSet=="function"?WeakSet:Set,K=null;function ki(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Sc(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var Wf=!1;function hw(e,t){if(oc=No,e=vy(),Ad(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,m=0,d=e,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(s=l+i),d!==a||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break t;if(h===n&&++c===i&&(s=l),h===a&&++m===r&&(u=l),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:e,selectionRange:n},No=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,b=x.memoizedState,y=t.stateNode,k=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ht(t.type,g),b);y.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(w){Ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return x=Wf,Wf=!1,x}function Ca(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Sc(t,n,a)}i=i.next}while(i!==r)}}function ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pk(e){var t=e.alternate;t!==null&&(e.alternate=null,pk(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[_a],delete t[dc],delete t[Qx],delete t[Xx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yk(e){return e.tag===5||e.tag===3||e.tag===4}function Qf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yk(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=To));else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}var _e=null,Vt=!1;function $n(e,t,n){for(n=n.child;n!==null;)kk(e,t,n),n=n.sibling}function kk(e,t,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(os,n)}catch{}switch(n.tag){case 5:We||ki(n,t);case 6:var r=_e,i=Vt;_e=null,$n(e,t,n),_e=r,Vt=i,_e!==null&&(Vt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(Vt?(e=_e,n=n.stateNode,e.nodeType===8?fu(e.parentNode,n):e.nodeType===1&&fu(e,n),Fa(e)):fu(_e,n.stateNode));break;case 4:r=_e,i=Vt,_e=n.stateNode.containerInfo,Vt=!0,$n(e,t,n),_e=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Sc(n,t,l),i=i.next}while(i!==r)}$n(e,t,n);break;case 1:if(!We&&(ki(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ne(n,t,s)}$n(e,t,n);break;case 21:$n(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,$n(e,t,n),We=r):$n(e,t,n);break;default:$n(e,t,n)}}function Xf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fw),t.forEach(function(r){var i=zw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:_e=s.stateNode,Vt=!1;break e;case 3:_e=s.stateNode.containerInfo,Vt=!0;break e;case 4:_e=s.stateNode.containerInfo,Vt=!0;break e}s=s.return}if(_e===null)throw Error(D(160));kk(a,l,i),_e=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ne(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gk(t,e),t=t.sibling}function gk(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),nn(e),r&4){try{Ca(3,e,e.return),ps(3,e)}catch(g){Ne(e,e.return,g)}try{Ca(5,e,e.return)}catch(g){Ne(e,e.return,g)}}break;case 1:_t(t,e),nn(e),r&512&&n!==null&&ki(n,n.return);break;case 5:if(_t(t,e),nn(e),r&512&&n!==null&&ki(n,n.return),e.flags&32){var i=e.stateNode;try{Ta(i,"")}catch(g){Ne(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&_p(i,a),Xu(s,l);var c=Xu(s,a);for(l=0;l<u.length;l+=2){var m=u[l],d=u[l+1];m==="style"?Yp(i,d):m==="dangerouslySetInnerHTML"?Gp(i,d):m==="children"?Ta(i,d):hd(i,m,d,c)}switch(s){case"input":Vu(i,a);break;case"textarea":Kp(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?vi(i,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?vi(i,!!a.multiple,a.defaultValue,!0):vi(i,!!a.multiple,a.multiple?[]:"",!1))}i[_a]=a}catch(g){Ne(e,e.return,g)}}break;case 6:if(_t(t,e),nn(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Ne(e,e.return,g)}}break;case 3:if(_t(t,e),nn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(t.containerInfo)}catch(g){Ne(e,e.return,g)}break;case 4:_t(t,e),nn(e);break;case 13:_t(t,e),nn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||($d=Pe())),r&4&&Xf(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(We=(c=We)||m,_t(t,e),We=c):_t(t,e),nn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(K=e,m=e.child;m!==null;){for(d=K=m;K!==null;){switch(h=K,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ca(4,h,h.return);break;case 1:ki(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(g){Ne(r,n,g)}}break;case 5:ki(h,h.return);break;case 22:if(h.memoizedState!==null){Jf(d);continue}}p!==null?(p.return=h,K=p):Jf(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Up("display",l))}catch(g){Ne(e,e.return,g)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){Ne(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_t(t,e),nn(e),r&4&&Xf(e);break;case 21:break;default:_t(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yk(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ta(i,""),r.flags&=-33);var a=Qf(e);Ac(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Qf(e);Ec(e,s,l);break;default:throw Error(D(161))}}catch(u){Ne(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pw(e,t,n){K=e,vk(e)}function vk(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Vl;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||We;s=Vl;var c=We;if(Vl=l,(We=u)&&!c)for(K=i;K!==null;)l=K,u=l.child,l.tag===22&&l.memoizedState!==null?eh(i):u!==null?(u.return=l,K=u):eh(i);for(;a!==null;)K=a,vk(a),a=a.sibling;K=i,Vl=s,We=c}Zf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,K=a):Zf(e)}}function Zf(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||ps(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&If(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}If(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&Fa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}We||t.flags&512&&Cc(t)}catch(h){Ne(t,t.return,h)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Jf(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function eh(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ps(4,t)}catch(u){Ne(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ne(t,i,u)}}var a=t.return;try{Cc(t)}catch(u){Ne(t,a,u)}break;case 5:var l=t.return;try{Cc(t)}catch(u){Ne(t,l,u)}}}catch(u){Ne(t,t.return,u)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var yw=Math.ceil,Ho=On.ReactCurrentDispatcher,Yd=On.ReactCurrentOwner,Pt=On.ReactCurrentBatchConfig,ie=0,Oe=null,Te=null,He=0,yt=0,gi=Sr(0),Ie=0,Va=null,Vr=0,ys=0,Vd=0,Ea=null,ut=null,$d=0,Hi=1/0,wn=null,Go=!1,Nc=null,pr=null,$l=!1,sr=null,Uo=0,Aa=0,Pc=null,po=-1,yo=0;function nt(){return ie&6?Pe():po!==-1?po:po=Pe()}function yr(e){return e.mode&1?ie&2&&He!==0?He&-He:Jx.transition!==null?(yo===0&&(yo=ry()),yo):(e=de,e!==0||(e=window.event,e=e===void 0?16:cy(e.type)),e):1}function Wt(e,t,n,r){if(50<Aa)throw Aa=0,Pc=null,Error(D(185));hl(e,n,r),(!(ie&2)||e!==Oe)&&(e===Oe&&(!(ie&2)&&(ys|=n),Ie===4&&tr(e,He)),ft(e,r),n===1&&ie===0&&!(t.mode&1)&&(Hi=Pe()+500,ms&&Cr()))}function ft(e,t){var n=e.callbackNode;J0(e,t);var r=Ao(e,e===Oe?He:0);if(r===0)n!==null&&uf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uf(n),t===1)e.tag===0?Zx(th.bind(null,e)):Py(th.bind(null,e)),qx(function(){!(ie&6)&&Cr()}),n=null;else{switch(iy(r)){case 1:n=vd;break;case 4:n=ty;break;case 16:n=Eo;break;case 536870912:n=ny;break;default:n=Eo}n=Ak(n,bk.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bk(e,t){if(po=-1,yo=0,ie&6)throw Error(D(327));var n=e.callbackNode;if(Si()&&e.callbackNode!==n)return null;var r=Ao(e,e===Oe?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var i=ie;ie|=2;var a=wk();(Oe!==e||He!==t)&&(wn=null,Hi=Pe()+500,Kr(e,t));do try{vw();break}catch(s){xk(e,s)}while(!0);Md(),Ho.current=a,ie=i,Te!==null?t=0:(Oe=null,He=0,t=Ie)}if(t!==0){if(t===2&&(i=nc(e),i!==0&&(r=i,t=jc(e,i))),t===1)throw n=Va,Kr(e,0),tr(e,r),ft(e,Pe()),n;if(t===6)tr(e,r);else{if(i=e.current.alternate,!(r&30)&&!kw(i)&&(t=Yo(e,r),t===2&&(a=nc(e),a!==0&&(r=a,t=jc(e,a))),t===1))throw n=Va,Kr(e,0),tr(e,r),ft(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:jr(e,ut,wn);break;case 3:if(tr(e,r),(r&130023424)===r&&(t=$d+500-Pe(),10<t)){if(Ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cc(jr.bind(null,e,ut,wn),t);break}jr(e,ut,wn);break;case 4:if(tr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-qt(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yw(r/1960))-r,10<r){e.timeoutHandle=cc(jr.bind(null,e,ut,wn),r);break}jr(e,ut,wn);break;case 5:jr(e,ut,wn);break;default:throw Error(D(329))}}}return ft(e,Pe()),e.callbackNode===n?bk.bind(null,e):null}function jc(e,t){var n=Ea;return e.current.memoizedState.isDehydrated&&(Kr(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=ut,ut=n,t!==null&&Tc(t)),e}function Tc(e){ut===null?ut=e:ut.push.apply(ut,e)}function kw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Xt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tr(e,t){for(t&=~Vd,t&=~ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qt(t),r=1<<n;e[n]=-1,t&=~r}}function th(e){if(ie&6)throw Error(D(327));Si();var t=Ao(e,0);if(!(t&1))return ft(e,Pe()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=nc(e);r!==0&&(t=r,n=jc(e,r))}if(n===1)throw n=Va,Kr(e,0),tr(e,t),ft(e,Pe()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,ut,wn),ft(e,Pe()),null}function qd(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Hi=Pe()+500,ms&&Cr())}}function $r(e){sr!==null&&sr.tag===0&&!(ie&6)&&Si();var t=ie;ie|=1;var n=Pt.transition,r=de;try{if(Pt.transition=null,de=1,e)return e()}finally{de=r,Pt.transition=n,ie=t,!(ie&6)&&Cr()}}function Wd(){yt=gi.current,be(gi)}function Kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$x(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mo();break;case 3:_i(),be(dt),be(Qe),Od();break;case 5:Ld(r);break;case 4:_i();break;case 13:be(ze);break;case 19:be(ze);break;case 10:Rd(r.type._context);break;case 22:case 23:Wd()}n=n.return}if(Oe=e,Te=e=kr(e.current,null),He=yt=t,Ie=0,Va=null,Vd=ys=Vr=0,ut=Ea=null,Mr!==null){for(t=0;t<Mr.length;t++)if(n=Mr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Mr=null}return e}function xk(e,t){do{var n=Te;try{if(Md(),mo.current=Ko,_o){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(Yr=0,Le=Fe=Ce=null,Sa=!1,Ga=0,Yd.current=null,n===null||n.return===null){Ie=1,Va=t,Te=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=He,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var p=Hf(l);if(p!==null){p.flags&=-257,Gf(p,l,s,a,t),p.mode&1&&Kf(a,c,t),t=p,u=c;var x=t.updateQueue;if(x===null){var g=new Set;g.add(u),t.updateQueue=g}else x.add(u);break e}else{if(!(t&1)){Kf(a,c,t),Qd();break e}u=Error(D(426))}}else if(xe&&s.mode&1){var b=Hf(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Gf(b,l,s,a,t),jd(Ki(u,s));break e}}a=u=Ki(u,s),Ie!==4&&(Ie=2),Ea===null?Ea=[a]:Ea.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=ik(a,u,t);Ff(a,y);break e;case 1:s=u;var k=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof k.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(pr===null||!pr.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=ak(a,s,t);Ff(a,w);break e}}a=a.return}while(a!==null)}Sk(n)}catch(z){t=z,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function wk(){var e=Ho.current;return Ho.current=Ko,e===null?Ko:e}function Qd(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Oe===null||!(Vr&268435455)&&!(ys&268435455)||tr(Oe,He)}function Yo(e,t){var n=ie;ie|=2;var r=wk();(Oe!==e||He!==t)&&(wn=null,Kr(e,t));do try{gw();break}catch(i){xk(e,i)}while(!0);if(Md(),ie=n,Ho.current=r,Te!==null)throw Error(D(261));return Oe=null,He=0,Ie}function gw(){for(;Te!==null;)zk(Te)}function vw(){for(;Te!==null&&!U0();)zk(Te)}function zk(e){var t=Ek(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?Sk(e):Te=t,Yd.current=null}function Sk(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mw(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Te=null;return}}else if(n=dw(n,t,yt),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ie===0&&(Ie=5)}function jr(e,t,n){var r=de,i=Pt.transition;try{Pt.transition=null,de=1,bw(e,t,n,r)}finally{Pt.transition=i,de=r}return null}function bw(e,t,n,r){do Si();while(sr!==null);if(ie&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(ex(e,a),e===Oe&&(Te=Oe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$l||($l=!0,Ak(Eo,function(){return Si(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Pt.transition,Pt.transition=null;var l=de;de=1;var s=ie;ie|=4,Yd.current=null,hw(e,n),gk(n,e),_x(sc),No=!!oc,sc=oc=null,e.current=n,pw(n),Y0(),ie=s,de=l,Pt.transition=a}else e.current=n;if($l&&($l=!1,sr=e,Uo=i),a=e.pendingLanes,a===0&&(pr=null),q0(n.stateNode),ft(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,e=Nc,Nc=null,e;return Uo&1&&e.tag!==0&&Si(),a=e.pendingLanes,a&1?e===Pc?Aa++:(Aa=0,Pc=e):Aa=0,Cr(),null}function Si(){if(sr!==null){var e=iy(Uo),t=Pt.transition,n=de;try{if(Pt.transition=null,de=16>e?16:e,sr===null)var r=!1;else{if(e=sr,sr=null,Uo=0,ie&6)throw Error(D(331));var i=ie;for(ie|=4,K=e.current;K!==null;){var a=K,l=a.child;if(K.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(K=c;K!==null;){var m=K;switch(m.tag){case 0:case 11:case 15:Ca(8,m,a)}var d=m.child;if(d!==null)d.return=m,K=d;else for(;K!==null;){m=K;var h=m.sibling,p=m.return;if(pk(m),m===c){K=null;break}if(h!==null){h.return=p,K=h;break}K=p}}}var x=a.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}K=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,K=l;else e:for(;K!==null;){if(a=K,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ca(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,K=y;break e}K=a.return}}var k=e.current;for(K=k;K!==null;){l=K;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,K=v;else e:for(l=k;K!==null;){if(s=K,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ps(9,s)}}catch(z){Ne(s,s.return,z)}if(s===l){K=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,K=w;break e}K=s.return}}if(ie=i,Cr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(os,e)}catch{}r=!0}return r}finally{de=n,Pt.transition=t}}return!1}function nh(e,t,n){t=Ki(n,t),t=ik(e,t,1),e=hr(e,t,1),t=nt(),e!==null&&(hl(e,1,t),ft(e,t))}function Ne(e,t,n){if(e.tag===3)nh(e,e,n);else for(;t!==null;){if(t.tag===3){nh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){e=Ki(n,e),e=ak(t,e,1),t=hr(t,e,1),e=nt(),t!==null&&(hl(t,1,e),ft(t,e));break}}t=t.return}}function xw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(He&n)===n&&(Ie===4||Ie===3&&(He&130023424)===He&&500>Pe()-$d?Kr(e,0):Vd|=n),ft(e,t)}function Ck(e,t){t===0&&(e.mode&1?(t=Ll,Ll<<=1,!(Ll&130023424)&&(Ll=4194304)):t=1);var n=nt();e=Tn(e,t),e!==null&&(hl(e,t,n),ft(e,n))}function ww(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ck(e,n)}function zw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Ck(e,n)}var Ek;Ek=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ct=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ct=!1,cw(e,t,n);ct=!!(e.flags&131072)}else ct=!1,xe&&t.flags&1048576&&jy(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ho(e,t),e=t.pendingProps;var i=Li(t,Qe.current);zi(t,n),i=_d(null,t,r,e,i,n);var a=Kd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(a=!0,Ro(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fd(t),i.updater=hs,t.stateNode=i,i._reactInternals=t,kc(t,r,e,n),t=bc(null,t,r,!0,a,n)):(t.tag=0,xe&&a&&Nd(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cw(r),e=Ht(r,e),i){case 0:t=vc(null,t,r,e,n);break e;case 1:t=Vf(null,t,r,e,n);break e;case 11:t=Uf(null,t,r,e,n);break e;case 14:t=Yf(null,t,r,Ht(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),vc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Vf(e,t,r,i,n);case 3:e:{if(uk(t),e===null)throw Error(D(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Iy(e,t),Oo(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ki(Error(D(423)),t),t=$f(e,t,r,n,i);break e}else if(r!==i){i=Ki(Error(D(424)),t),t=$f(e,t,r,n,i);break e}else for(gt=fr(t.stateNode.containerInfo.firstChild),vt=t,xe=!0,$t=null,n=Dy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===i){t=Mn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Ly(t),e===null&&hc(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,uc(r,i)?l=null:a!==null&&uc(r,a)&&(t.flags|=32),sk(e,t),et(e,t,l,n),t.child;case 6:return e===null&&hc(t),null;case 13:return ck(e,t,n);case 4:return Id(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bi(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Uf(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,pe(Io,r._currentValue),r._currentValue=l,a!==null)if(Xt(a.value,l)){if(a.children===i.children&&!dt.current){t=Mn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){l=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=An(-1,n&-n),u.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),pc(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(D(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),pc(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zi(t,n),i=Tt(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Ht(r,t.pendingProps),i=Ht(r.type,i),Yf(e,t,r,i,n);case 15:return lk(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),ho(e,t),t.tag=1,mt(r)?(e=!0,Ro(t)):e=!1,zi(t,n),rk(t,r,i),kc(t,r,i,n),bc(null,t,r,!0,e,n);case 19:return dk(e,t,n);case 22:return ok(e,t,n)}throw Error(D(156,t.tag))};function Ak(e,t){return ey(e,t)}function Sw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,r){return new Sw(e,t,n,r)}function Xd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cw(e){if(typeof e=="function")return Xd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yd)return 11;if(e===kd)return 14}return 2}function kr(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ko(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Xd(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case si:return Hr(n.children,i,a,t);case pd:l=8,i|=8;break;case Ku:return e=Nt(12,n,t,i|2),e.elementType=Ku,e.lanes=a,e;case Hu:return e=Nt(13,n,t,i),e.elementType=Hu,e.lanes=a,e;case Gu:return e=Nt(19,n,t,i),e.elementType=Gu,e.lanes=a,e;case Lp:return ks(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fp:l=10;break e;case Ip:l=9;break e;case yd:l=11;break e;case kd:l=14;break e;case Zn:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Nt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Hr(e,t,n,r){return e=Nt(7,e,r,t),e.lanes=n,e}function ks(e,t,n,r){return e=Nt(22,e,r,t),e.elementType=Lp,e.lanes=n,e.stateNode={isHidden:!1},e}function xu(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function wu(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ew(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nu(0),this.expirationTimes=nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zd(e,t,n,r,i,a,l,s,u){return e=new Ew(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Nt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(a),e}function Aw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nk(e){if(!e)return br;e=e._reactInternals;e:{if(Xr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(mt(n))return Ny(e,n,t)}return t}function Pk(e,t,n,r,i,a,l,s,u){return e=Zd(n,r,!0,e,i,a,l,s,u),e.context=Nk(null),n=e.current,r=nt(),i=yr(n),a=An(r,i),a.callback=t??null,hr(n,a,i),e.current.lanes=i,hl(e,i,r),ft(e,r),e}function gs(e,t,n,r){var i=t.current,a=nt(),l=yr(i);return n=Nk(n),t.context===null?t.context=n:t.pendingContext=n,t=An(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hr(i,t,l),e!==null&&(Wt(e,i,l,a),co(e,i,l)),l}function Vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jd(e,t){rh(e,t),(e=e.alternate)&&rh(e,t)}function Nw(){return null}var jk=typeof reportError=="function"?reportError:function(e){console.error(e)};function em(e){this._internalRoot=e}vs.prototype.render=em.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));gs(e,t,null,null)};vs.prototype.unmount=em.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){gs(null,e,null,null)}),t[jn]=null}};function vs(e){this._internalRoot=e}vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=oy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<er.length&&t!==0&&t<er[n].priority;n++);er.splice(n,0,e),n===0&&uy(e)}};function tm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ih(){}function Pw(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var c=Vo(l);a.call(c)}}var l=Pk(t,r,e,0,null,!1,!1,"",ih);return e._reactRootContainer=l,e[jn]=l.current,Oa(e.nodeType===8?e.parentNode:e),$r(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Vo(u);s.call(c)}}var u=Zd(e,0,!1,null,null,!1,!1,"",ih);return e._reactRootContainer=u,e[jn]=u.current,Oa(e.nodeType===8?e.parentNode:e),$r(function(){gs(t,u,n,r)}),u}function xs(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var s=i;i=function(){var u=Vo(l);s.call(u)}}gs(t,l,e,i)}else l=Pw(n,t,e,i,r);return Vo(l)}ay=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pa(t.pendingLanes);n!==0&&(bd(t,n|1),ft(t,Pe()),!(ie&6)&&(Hi=Pe()+500,Cr()))}break;case 13:$r(function(){var r=Tn(e,1);if(r!==null){var i=nt();Wt(r,e,1,i)}}),Jd(e,1)}};xd=function(e){if(e.tag===13){var t=Tn(e,134217728);if(t!==null){var n=nt();Wt(t,e,134217728,n)}Jd(e,134217728)}};ly=function(e){if(e.tag===13){var t=yr(e),n=Tn(e,t);if(n!==null){var r=nt();Wt(n,e,t,r)}Jd(e,t)}};oy=function(){return de};sy=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Ju=function(e,t,n){switch(t){case"input":if(Vu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ds(r);if(!i)throw Error(D(90));Bp(r),Vu(r,i)}}}break;case"textarea":Kp(e,n);break;case"select":t=n.value,t!=null&&vi(e,!!n.multiple,t,!1)}};qp=qd;Wp=$r;var jw={usingClientEntryPoint:!1,Events:[yl,mi,ds,Vp,$p,qd]},ca={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tw={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zp(e),e===null?null:e.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{os=ql.inject(Tw),mn=ql}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jw;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(t))throw Error(D(200));return Aw(e,t,null,n)};zt.createRoot=function(e,t){if(!tm(e))throw Error(D(299));var n=!1,r="",i=jk;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zd(e,1,!1,null,null,n,!1,r,i),e[jn]=t.current,Oa(e.nodeType===8?e.parentNode:e),new em(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Zp(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return $r(e)};zt.hydrate=function(e,t,n){if(!bs(t))throw Error(D(200));return xs(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!tm(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=jk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pk(t,null,e,1,n??null,i,!1,a,l),e[jn]=t.current,Oa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vs(t)};zt.render=function(e,t,n){if(!bs(t))throw Error(D(200));return xs(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!bs(e))throw Error(D(40));return e._reactRootContainer?($r(function(){xs(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1};zt.unstable_batchedUpdates=qd;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bs(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return xs(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function Tk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tk)}catch(e){console.error(e)}}Tk(),Tp.exports=zt;var gl=Tp.exports;const Mk=vp(gl);var Rk,ah=gl;Rk=ah.createRoot,ah.hydrateRoot;const Mw=1,Rw=1e6;let zu=0;function Dw(){return zu=(zu+1)%Number.MAX_SAFE_INTEGER,zu.toString()}const Su=new Map,lh=e=>{if(Su.has(e))return;const t=setTimeout(()=>{Su.delete(e),Na({type:"REMOVE_TOAST",toastId:e})},Rw);Su.set(e,t)},Fw=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,Mw)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?lh(n):e.toasts.forEach(r=>{lh(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},go=[];let vo={toasts:[]};function Na(e){vo=Fw(vo,e),go.forEach(t=>{t(vo)})}function Iw({...e}){const t=Dw(),n=i=>Na({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>Na({type:"DISMISS_TOAST",toastId:t});return Na({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function Dk(){const[e,t]=f.useState(vo);return f.useEffect(()=>(go.push(t),()=>{const n=go.indexOf(t);n>-1&&go.splice(n,1)}),[e]),{...e,toast:Iw,dismiss:n=>Na({type:"DISMISS_TOAST",toastId:n})}}function q(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function oh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function ws(...e){return t=>{let n=!1;const r=e.map(i=>{const a=oh(i,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():oh(e[i],null)}}}}function Re(...e){return f.useCallback(ws(...e),e)}function Bn(e,t=[]){let n=[];function r(a,l){const s=f.createContext(l),u=n.length;n=[...n,l];const c=d=>{var y;const{scope:h,children:p,...x}=d,g=((y=h==null?void 0:h[e])==null?void 0:y[u])||s,b=f.useMemo(()=>x,Object.values(x));return o.jsx(g.Provider,{value:b,children:p})};c.displayName=a+"Provider";function m(d,h){var g;const p=((g=h==null?void 0:h[e])==null?void 0:g[u])||s,x=f.useContext(p);if(x)return x;if(l!==void 0)return l;throw new Error(`\`${d}\` must be used within \`${a}\``)}return[c,m]}const i=()=>{const a=n.map(l=>f.createContext(l));return function(s){const u=(s==null?void 0:s[e])||a;return f.useMemo(()=>({[`__scope${e}`]:{...s,[e]:u}}),[s,u])}};return i.scopeName=e,[r,Lw(i,...t)]}function Lw(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(a){const l=r.reduce((s,{useScope:u,scopeName:c})=>{const d=u(a)[`__scope${c}`];return{...s,...d}},{});return f.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function $a(e){const t=Bw(e),n=f.forwardRef((r,i)=>{const{children:a,...l}=r,s=f.Children.toArray(a),u=s.find(Kw);if(u){const c=u.props.children,m=s.map(d=>d===u?f.Children.count(c)>1?f.Children.only(null):f.isValidElement(c)?c.props.children:null:d);return o.jsx(t,{...l,ref:i,children:f.isValidElement(c)?f.cloneElement(c,void 0,m):null})}return o.jsx(t,{...l,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}var Ow=$a("Slot");function Bw(e){const t=f.forwardRef((n,r)=>{const{children:i,...a}=n;if(f.isValidElement(i)){const l=Gw(i),s=Hw(a,i.props);return i.type!==f.Fragment&&(s.ref=r?ws(r,l):l),f.cloneElement(i,s)}return f.Children.count(i)>1?f.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Fk=Symbol("radix.slottable");function _w(e){const t=({children:n})=>o.jsx(o.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Fk,t}function Kw(e){return f.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Fk}function Hw(e,t){const n={...t};for(const r in t){const i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...s)=>{const u=a(...s);return i(...s),u}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function Gw(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function zs(e){const t=e+"CollectionProvider",[n,r]=Bn(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=g=>{const{scope:b,children:y}=g,k=R.useRef(null),v=R.useRef(new Map).current;return o.jsx(i,{scope:b,itemMap:v,collectionRef:k,children:y})};l.displayName=t;const s=e+"CollectionSlot",u=$a(s),c=R.forwardRef((g,b)=>{const{scope:y,children:k}=g,v=a(s,y),w=Re(b,v.collectionRef);return o.jsx(u,{ref:w,children:k})});c.displayName=s;const m=e+"CollectionItemSlot",d="data-radix-collection-item",h=$a(m),p=R.forwardRef((g,b)=>{const{scope:y,children:k,...v}=g,w=R.useRef(null),z=Re(b,w),S=a(m,y);return R.useEffect(()=>(S.itemMap.set(w,{ref:w,...v}),()=>void S.itemMap.delete(w))),o.jsx(h,{[d]:"",ref:z,children:k})});p.displayName=m;function x(g){const b=a(e+"CollectionConsumer",g);return R.useCallback(()=>{const k=b.collectionRef.current;if(!k)return[];const v=Array.from(k.querySelectorAll(`[${d}]`));return Array.from(b.itemMap.values()).sort((S,C)=>v.indexOf(S.ref.current)-v.indexOf(C.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:l,Slot:c,ItemSlot:p},x,r]}var Uw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ue=Uw.reduce((e,t)=>{const n=$a(`Primitive.${t}`),r=f.forwardRef((i,a)=>{const{asChild:l,...s}=i,u=l?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(u,{...s,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function nm(e,t){e&&gl.flushSync(()=>e.dispatchEvent(t))}function wt(e){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Yw(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e);f.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Vw="DismissableLayer",Mc="dismissableLayer.update",$w="dismissableLayer.pointerDownOutside",qw="dismissableLayer.focusOutside",sh,Ik=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ss=f.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:l,onDismiss:s,...u}=e,c=f.useContext(Ik),[m,d]=f.useState(null),h=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=f.useState({}),x=Re(t,C=>d(C)),g=Array.from(c.layers),[b]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),y=g.indexOf(b),k=m?g.indexOf(m):-1,v=c.layersWithOutsidePointerEventsDisabled.size>0,w=k>=y,z=Qw(C=>{const E=C.target,P=[...c.branches].some(T=>T.contains(E));!w||P||(i==null||i(C),l==null||l(C),C.defaultPrevented||s==null||s())},h),S=Xw(C=>{const E=C.target;[...c.branches].some(T=>T.contains(E))||(a==null||a(C),l==null||l(C),C.defaultPrevented||s==null||s())},h);return Yw(C=>{k===c.layers.size-1&&(r==null||r(C),!C.defaultPrevented&&s&&(C.preventDefault(),s()))},h),f.useEffect(()=>{if(m)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(sh=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(m)),c.layers.add(m),uh(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=sh)}},[m,h,n,c]),f.useEffect(()=>()=>{m&&(c.layers.delete(m),c.layersWithOutsidePointerEventsDisabled.delete(m),uh())},[m,c]),f.useEffect(()=>{const C=()=>p({});return document.addEventListener(Mc,C),()=>document.removeEventListener(Mc,C)},[]),o.jsx(ue.div,{...u,ref:x,style:{pointerEvents:v?w?"auto":"none":void 0,...e.style},onFocusCapture:q(e.onFocusCapture,S.onFocusCapture),onBlurCapture:q(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:q(e.onPointerDownCapture,z.onPointerDownCapture)})});Ss.displayName=Vw;var Ww="DismissableLayerBranch",Lk=f.forwardRef((e,t)=>{const n=f.useContext(Ik),r=f.useRef(null),i=Re(t,r);return f.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),o.jsx(ue.div,{...e,ref:i})});Lk.displayName=Ww;function Qw(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e),r=f.useRef(!1),i=f.useRef(()=>{});return f.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let u=function(){Ok($w,n,c,{discrete:!0})};const c={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=u,t.addEventListener("click",i.current,{once:!0})):u()}else t.removeEventListener("click",i.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",a),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Xw(e,t=globalThis==null?void 0:globalThis.document){const n=wt(e),r=f.useRef(!1);return f.useEffect(()=>{const i=a=>{a.target&&!r.current&&Ok(qw,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function uh(){const e=new CustomEvent(Mc);document.dispatchEvent(e)}function Ok(e,t,n,{discrete:r}){const i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?nm(i,a):i.dispatchEvent(a)}var Zw=Ss,Jw=Lk,pn=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{},ez="Portal",rm=f.forwardRef((e,t)=>{var s;const{container:n,...r}=e,[i,a]=f.useState(!1);pn(()=>a(!0),[]);const l=n||i&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return l?Mk.createPortal(o.jsx(ue.div,{...r,ref:t}),l):null});rm.displayName=ez;function tz(e,t){return f.useReducer((n,r)=>t[n][r]??n,e)}var Er=e=>{const{present:t,children:n}=e,r=nz(t),i=typeof n=="function"?n({present:r.isPresent}):f.Children.only(n),a=Re(r.ref,rz(i));return typeof n=="function"||r.isPresent?f.cloneElement(i,{ref:a}):null};Er.displayName="Presence";function nz(e){const[t,n]=f.useState(),r=f.useRef(null),i=f.useRef(e),a=f.useRef("none"),l=e?"mounted":"unmounted",[s,u]=tz(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const c=Wl(r.current);a.current=s==="mounted"?c:"none"},[s]),pn(()=>{const c=r.current,m=i.current;if(m!==e){const h=a.current,p=Wl(c);e?u("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?u("UNMOUNT"):u(m&&h!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,u]),pn(()=>{if(t){let c;const m=t.ownerDocument.defaultView??window,d=p=>{const g=Wl(r.current).includes(p.animationName);if(p.target===t&&g&&(u("ANIMATION_END"),!i.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",c=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},h=p=>{p.target===t&&(a.current=Wl(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{m.clearTimeout(c),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:f.useCallback(c=>{r.current=c?getComputedStyle(c):null,n(c)},[])}}function Wl(e){return(e==null?void 0:e.animationName)||"none"}function rz(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var iz=dd[" useInsertionEffect ".trim().toString()]||pn;function qi({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,a,l]=az({defaultProp:t,onChange:n}),s=e!==void 0,u=s?e:i;{const m=f.useRef(e!==void 0);f.useEffect(()=>{const d=m.current;d!==s&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=s},[s,r])}const c=f.useCallback(m=>{var d;if(s){const h=lz(m)?m(e):m;h!==e&&((d=l.current)==null||d.call(l,h))}else a(m)},[s,e,a,l]);return[u,c]}function az({defaultProp:e,onChange:t}){const[n,r]=f.useState(e),i=f.useRef(n),a=f.useRef(t);return iz(()=>{a.current=t},[t]),f.useEffect(()=>{var l;i.current!==n&&((l=a.current)==null||l.call(a,n),i.current=n)},[n,i]),[n,r,a]}function lz(e){return typeof e=="function"}var oz=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),sz="VisuallyHidden",Cs=f.forwardRef((e,t)=>o.jsx(ue.span,{...e,ref:t,style:{...oz,...e.style}}));Cs.displayName=sz;var uz=Cs,im="ToastProvider",[am,cz,dz]=zs("Toast"),[Bk,fM]=Bn("Toast",[dz]),[mz,Es]=Bk(im),_k=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:l}=e,[s,u]=f.useState(null),[c,m]=f.useState(0),d=f.useRef(!1),h=f.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${im}\`. Expected non-empty \`string\`.`),o.jsx(am.Provider,{scope:t,children:o.jsx(mz,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:c,viewport:s,onViewportChange:u,onToastAdd:f.useCallback(()=>m(p=>p+1),[]),onToastRemove:f.useCallback(()=>m(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:h,children:l})})};_k.displayName=im;var Kk="ToastViewport",fz=["F8"],Rc="toast.viewportPause",Dc="toast.viewportResume",Hk=f.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=fz,label:i="Notifications ({hotkey})",...a}=e,l=Es(Kk,n),s=cz(n),u=f.useRef(null),c=f.useRef(null),m=f.useRef(null),d=f.useRef(null),h=Re(t,d,l.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=l.toastCount>0;f.useEffect(()=>{const b=y=>{var v;r.length!==0&&r.every(w=>y[w]||y.code===w)&&((v=d.current)==null||v.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),f.useEffect(()=>{const b=u.current,y=d.current;if(x&&b&&y){const k=()=>{if(!l.isClosePausedRef.current){const S=new CustomEvent(Rc);y.dispatchEvent(S),l.isClosePausedRef.current=!0}},v=()=>{if(l.isClosePausedRef.current){const S=new CustomEvent(Dc);y.dispatchEvent(S),l.isClosePausedRef.current=!1}},w=S=>{!b.contains(S.relatedTarget)&&v()},z=()=>{b.contains(document.activeElement)||v()};return b.addEventListener("focusin",k),b.addEventListener("focusout",w),b.addEventListener("pointermove",k),b.addEventListener("pointerleave",z),window.addEventListener("blur",k),window.addEventListener("focus",v),()=>{b.removeEventListener("focusin",k),b.removeEventListener("focusout",w),b.removeEventListener("pointermove",k),b.removeEventListener("pointerleave",z),window.removeEventListener("blur",k),window.removeEventListener("focus",v)}}},[x,l.isClosePausedRef]);const g=f.useCallback(({tabbingDirection:b})=>{const k=s().map(v=>{const w=v.ref.current,z=[w,...Ez(w)];return b==="forwards"?z:z.reverse()});return(b==="forwards"?k.reverse():k).flat()},[s]);return f.useEffect(()=>{const b=d.current;if(b){const y=k=>{var z,S,C;const v=k.altKey||k.ctrlKey||k.metaKey;if(k.key==="Tab"&&!v){const E=document.activeElement,P=k.shiftKey;if(k.target===b&&P){(z=c.current)==null||z.focus();return}const I=g({tabbingDirection:P?"backwards":"forwards"}),G=I.findIndex(F=>F===E);Cu(I.slice(G+1))?k.preventDefault():P?(S=c.current)==null||S.focus():(C=m.current)==null||C.focus()}};return b.addEventListener("keydown",y),()=>b.removeEventListener("keydown",y)}},[s,g]),o.jsxs(Jw,{ref:u,role:"region","aria-label":i.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&o.jsx(Fc,{ref:c,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"forwards"});Cu(b)}}),o.jsx(am.Slot,{scope:n,children:o.jsx(ue.ol,{tabIndex:-1,...a,ref:h})}),x&&o.jsx(Fc,{ref:m,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"backwards"});Cu(b)}})]})});Hk.displayName=Kk;var Gk="ToastFocusProxy",Fc=f.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,a=Es(Gk,n);return o.jsx(Cs,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:l=>{var c;const s=l.relatedTarget;!((c=a.viewport)!=null&&c.contains(s))&&r()}})});Fc.displayName=Gk;var vl="Toast",hz="toast.swipeStart",pz="toast.swipeMove",yz="toast.swipeCancel",kz="toast.swipeEnd",Uk=f.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:a,...l}=e,[s,u]=qi({prop:r,defaultProp:i??!0,onChange:a,caller:vl});return o.jsx(Er,{present:n||s,children:o.jsx(bz,{open:s,...l,ref:t,onClose:()=>u(!1),onPause:wt(e.onPause),onResume:wt(e.onResume),onSwipeStart:q(e.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:q(e.onSwipeMove,c=>{const{x:m,y:d}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${d}px`)}),onSwipeCancel:q(e.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:q(e.onSwipeEnd,c=>{const{x:m,y:d}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${d}px`),u(!1)})})})});Uk.displayName=vl;var[gz,vz]=Bk(vl,{onClose(){}}),bz=f.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:a,onClose:l,onEscapeKeyDown:s,onPause:u,onResume:c,onSwipeStart:m,onSwipeMove:d,onSwipeCancel:h,onSwipeEnd:p,...x}=e,g=Es(vl,n),[b,y]=f.useState(null),k=Re(t,F=>y(F)),v=f.useRef(null),w=f.useRef(null),z=i||g.duration,S=f.useRef(0),C=f.useRef(z),E=f.useRef(0),{onToastAdd:P,onToastRemove:T}=g,L=wt(()=>{var Y;(b==null?void 0:b.contains(document.activeElement))&&((Y=g.viewport)==null||Y.focus()),l()}),I=f.useCallback(F=>{!F||F===1/0||(window.clearTimeout(E.current),S.current=new Date().getTime(),E.current=window.setTimeout(L,F))},[L]);f.useEffect(()=>{const F=g.viewport;if(F){const Y=()=>{I(C.current),c==null||c()},_=()=>{const U=new Date().getTime()-S.current;C.current=C.current-U,window.clearTimeout(E.current),u==null||u()};return F.addEventListener(Rc,_),F.addEventListener(Dc,Y),()=>{F.removeEventListener(Rc,_),F.removeEventListener(Dc,Y)}}},[g.viewport,z,u,c,I]),f.useEffect(()=>{a&&!g.isClosePausedRef.current&&I(z)},[a,z,g.isClosePausedRef,I]),f.useEffect(()=>(P(),()=>T()),[P,T]);const G=f.useMemo(()=>b?Xk(b):null,[b]);return g.viewport?o.jsxs(o.Fragment,{children:[G&&o.jsx(xz,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:G}),o.jsx(gz,{scope:n,onClose:L,children:gl.createPortal(o.jsx(am.ItemSlot,{scope:n,children:o.jsx(Zw,{asChild:!0,onEscapeKeyDown:q(s,()=>{g.isFocusedToastEscapeKeyDownRef.current||L(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:o.jsx(ue.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":g.swipeDirection,...x,ref:k,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:q(e.onKeyDown,F=>{F.key==="Escape"&&(s==null||s(F.nativeEvent),F.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,L()))}),onPointerDown:q(e.onPointerDown,F=>{F.button===0&&(v.current={x:F.clientX,y:F.clientY})}),onPointerMove:q(e.onPointerMove,F=>{if(!v.current)return;const Y=F.clientX-v.current.x,_=F.clientY-v.current.y,U=!!w.current,N=["left","right"].includes(g.swipeDirection),A=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,M=N?A(0,Y):0,B=N?0:A(0,_),O=F.pointerType==="touch"?10:2,$={x:M,y:B},V={originalEvent:F,delta:$};U?(w.current=$,Ql(pz,d,V,{discrete:!1})):ch($,g.swipeDirection,O)?(w.current=$,Ql(hz,m,V,{discrete:!1}),F.target.setPointerCapture(F.pointerId)):(Math.abs(Y)>O||Math.abs(_)>O)&&(v.current=null)}),onPointerUp:q(e.onPointerUp,F=>{const Y=w.current,_=F.target;if(_.hasPointerCapture(F.pointerId)&&_.releasePointerCapture(F.pointerId),w.current=null,v.current=null,Y){const U=F.currentTarget,N={originalEvent:F,delta:Y};ch(Y,g.swipeDirection,g.swipeThreshold)?Ql(kz,p,N,{discrete:!0}):Ql(yz,h,N,{discrete:!0}),U.addEventListener("click",A=>A.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),xz=e=>{const{__scopeToast:t,children:n,...r}=e,i=Es(vl,t),[a,l]=f.useState(!1),[s,u]=f.useState(!1);return Sz(()=>l(!0)),f.useEffect(()=>{const c=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(c)},[]),s?null:o.jsx(rm,{asChild:!0,children:o.jsx(Cs,{...r,children:a&&o.jsxs(o.Fragment,{children:[i.label," ",n]})})})},wz="ToastTitle",Yk=f.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(ue.div,{...r,ref:t})});Yk.displayName=wz;var zz="ToastDescription",Vk=f.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(ue.div,{...r,ref:t})});Vk.displayName=zz;var $k="ToastAction",qk=f.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?o.jsx(Qk,{altText:n,asChild:!0,children:o.jsx(lm,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${$k}\`. Expected non-empty \`string\`.`),null)});qk.displayName=$k;var Wk="ToastClose",lm=f.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=vz(Wk,n);return o.jsx(Qk,{asChild:!0,children:o.jsx(ue.button,{type:"button",...r,ref:t,onClick:q(e.onClick,i.onClose)})})});lm.displayName=Wk;var Qk=f.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return o.jsx(ue.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function Xk(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),Cz(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",a=r.dataset.radixToastAnnounceExclude==="";if(!i)if(a){const l=r.dataset.radixToastAnnounceAlt;l&&t.push(l)}else t.push(...Xk(r))}}),t}function Ql(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?nm(i,a):i.dispatchEvent(a)}var ch=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),a=r>i;return t==="left"||t==="right"?a&&r>n:!a&&i>n};function Sz(e=()=>{}){const t=wt(e);pn(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function Cz(e){return e.nodeType===e.ELEMENT_NODE}function Ez(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Cu(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Az=_k,Zk=Hk,Jk=Uk,eg=Yk,tg=Vk,ng=qk,rg=lm;function ig(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ig(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ag(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ig(e))&&(r&&(r+=" "),r+=t);return r}const dh=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,mh=ag,om=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return mh(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:a}=t,l=Object.keys(i).map(c=>{const m=n==null?void 0:n[c],d=a==null?void 0:a[c];if(m===null)return null;const h=dh(m)||dh(d);return i[c][h]}),s=n&&Object.entries(n).reduce((c,m)=>{let[d,h]=m;return h===void 0||(c[d]=h),c},{}),u=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,m)=>{let{class:d,className:h,...p}=m;return Object.entries(p).every(x=>{let[g,b]=x;return Array.isArray(b)?b.includes({...a,...s}[g]):{...a,...s}[g]===b})?[...c,d,h]:c},[]);return mh(e,l,u,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nz=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lg=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jz=f.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:l,...s},u)=>f.createElement("svg",{ref:u,...Pz,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:lg("lucide",i),...s},[...l.map(([c,m])=>f.createElement(c,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(e,t)=>{const n=f.forwardRef(({className:r,...i},a)=>f.createElement(jz,{ref:a,iconNode:t,className:lg(`lucide-${Nz(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=ce("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=ce("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tz=ce("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=ce("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mz=ce("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rz=ce("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dz=ce("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fz=ce("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iz=ce("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lz=ce("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oz=ce("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bz=ce("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _z=ce("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kz=ce("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hz=ce("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gz=ce("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uz=ce("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yz=ce("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=ce("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=ce("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vz=ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $z=ce("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=ce("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qz=ce("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wz=ce("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qz=ce("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xz=ce("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=ce("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),sm="-",Zz=e=>{const t=e1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{const s=l.split(sm);return s[0]===""&&s.length!==1&&s.shift(),dg(s,t)||Jz(l)},getConflictingClassGroupIds:(l,s)=>{const u=n[l]||[];return s&&r[l]?[...u,...r[l]]:u}}},dg=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?dg(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const a=e.join(sm);return(l=t.validators.find(({validator:s})=>s(a)))==null?void 0:l.classGroupId},hh=/^\[(.+)\]$/,Jz=e=>{if(hh.test(e)){const t=hh.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},e1=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return n1(Object.entries(e.classGroups),n).forEach(([a,l])=>{Ic(l,r,a,t)}),r},Ic=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const a=i===""?t:ph(t,i);a.classGroupId=n;return}if(typeof i=="function"){if(t1(i)){Ic(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([a,l])=>{Ic(l,ph(t,a),n,r)})})},ph=(e,t)=>{let n=e;return t.split(sm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},t1=e=>e.isThemeGetter,n1=(e,t)=>t?e.map(([n,r])=>{const i=r.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([l,s])=>[t+l,s])):a);return[n,i]}):e,r1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(a,l)=>{n.set(a,l),t++,t>e&&(t=0,r=n,n=new Map)};return{get(a){let l=n.get(a);if(l!==void 0)return l;if((l=r.get(a))!==void 0)return i(a,l),l},set(a,l){n.has(a)?n.set(a,l):i(a,l)}}},mg="!",i1=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],a=t.length,l=s=>{const u=[];let c=0,m=0,d;for(let b=0;b<s.length;b++){let y=s[b];if(c===0){if(y===i&&(r||s.slice(b,b+a)===t)){u.push(s.slice(m,b)),m=b+a;continue}if(y==="/"){d=b;continue}}y==="["?c++:y==="]"&&c--}const h=u.length===0?s:s.substring(m),p=h.startsWith(mg),x=p?h.substring(1):h,g=d&&d>m?d-m:void 0;return{modifiers:u,hasImportantModifier:p,baseClassName:x,maybePostfixModifierPosition:g}};return n?s=>n({className:s,parseClassName:l}):l},a1=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},l1=e=>({cache:r1(e.cacheSize),parseClassName:i1(e),...Zz(e)}),o1=/\s+/,s1=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,a=[],l=e.trim().split(o1);let s="";for(let u=l.length-1;u>=0;u-=1){const c=l[u],{modifiers:m,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:p}=n(c);let x=!!p,g=r(x?h.substring(0,p):h);if(!g){if(!x){s=c+(s.length>0?" "+s:s);continue}if(g=r(h),!g){s=c+(s.length>0?" "+s:s);continue}x=!1}const b=a1(m).join(":"),y=d?b+mg:b,k=y+g;if(a.includes(k))continue;a.push(k);const v=i(g,x);for(let w=0;w<v.length;++w){const z=v[w];a.push(y+z)}s=c+(s.length>0?" "+s:s)}return s};function u1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=fg(t))&&(r&&(r+=" "),r+=n);return r}const fg=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=fg(e[r]))&&(n&&(n+=" "),n+=t);return n};function c1(e,...t){let n,r,i,a=l;function l(u){const c=t.reduce((m,d)=>d(m),e());return n=l1(c),r=n.cache.get,i=n.cache.set,a=s,s(u)}function s(u){const c=r(u);if(c)return c;const m=s1(u,n);return i(u,m),m}return function(){return a(u1.apply(null,arguments))}}const ge=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},hg=/^\[(?:([a-z-]+):)?(.+)\]$/i,d1=/^\d+\/\d+$/,m1=new Set(["px","full","screen"]),f1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,h1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,y1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,k1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,vn=e=>Ci(e)||m1.has(e)||d1.test(e),qn=e=>Wi(e,"length",C1),Ci=e=>!!e&&!Number.isNaN(Number(e)),Eu=e=>Wi(e,"number",Ci),da=e=>!!e&&Number.isInteger(Number(e)),g1=e=>e.endsWith("%")&&Ci(e.slice(0,-1)),Z=e=>hg.test(e),Wn=e=>f1.test(e),v1=new Set(["length","size","percentage"]),b1=e=>Wi(e,v1,pg),x1=e=>Wi(e,"position",pg),w1=new Set(["image","url"]),z1=e=>Wi(e,w1,A1),S1=e=>Wi(e,"",E1),ma=()=>!0,Wi=(e,t,n)=>{const r=hg.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},C1=e=>h1.test(e)&&!p1.test(e),pg=()=>!1,E1=e=>y1.test(e),A1=e=>k1.test(e),N1=()=>{const e=ge("colors"),t=ge("spacing"),n=ge("blur"),r=ge("brightness"),i=ge("borderColor"),a=ge("borderRadius"),l=ge("borderSpacing"),s=ge("borderWidth"),u=ge("contrast"),c=ge("grayscale"),m=ge("hueRotate"),d=ge("invert"),h=ge("gap"),p=ge("gradientColorStops"),x=ge("gradientColorStopPositions"),g=ge("inset"),b=ge("margin"),y=ge("opacity"),k=ge("padding"),v=ge("saturate"),w=ge("scale"),z=ge("sepia"),S=ge("skew"),C=ge("space"),E=ge("translate"),P=()=>["auto","contain","none"],T=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",Z,t],I=()=>[Z,t],G=()=>["",vn,qn],F=()=>["auto",Ci,Z],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],_=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",Z],M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],B=()=>[Ci,Z];return{cacheSize:500,separator:":",theme:{colors:[ma],spacing:[vn,qn],blur:["none","",Wn,Z],brightness:B(),borderColor:[e],borderRadius:["none","","full",Wn,Z],borderSpacing:I(),borderWidth:G(),contrast:B(),grayscale:A(),hueRotate:B(),invert:A(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[g1,qn],inset:L(),margin:L(),opacity:B(),padding:I(),saturate:B(),scale:B(),sepia:A(),skew:B(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",Z]}],container:["container"],columns:[{columns:[Wn]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),Z]}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",da,Z]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Z]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",da,Z]}],"grid-cols":[{"grid-cols":[ma]}],"col-start-end":[{col:["auto",{span:["full",da,Z]},Z]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[ma]}],"row-start-end":[{row:["auto",{span:[da,Z]},Z]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Z]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Z,t]}],"min-w":[{"min-w":[Z,t,"min","max","fit"]}],"max-w":[{"max-w":[Z,t,"none","full","min","max","fit","prose",{screen:[Wn]},Wn]}],h:[{h:[Z,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Z,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Z,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Z,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Wn,qn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Eu]}],"font-family":[{font:[ma]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Z]}],"line-clamp":[{"line-clamp":["none",Ci,Eu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",vn,Z]}],"list-image":[{"list-image":["none",Z]}],"list-style-type":[{list:["none","disc","decimal",Z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[..._(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",vn,qn]}],"underline-offset":[{"underline-offset":["auto",vn,Z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),x1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",b1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},z1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[..._(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:_()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",..._()]}],"outline-offset":[{"outline-offset":[vn,Z]}],"outline-w":[{outline:[vn,qn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[vn,qn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Wn,S1]}],"shadow-color":[{shadow:[ma]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",Wn,Z]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[d]}],saturate:[{saturate:[v]}],sepia:[{sepia:[z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Z]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",Z]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",Z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[da,Z]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[vn,qn,Eu]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},P1=c1(N1);function re(...e){return P1(ag(e))}const j1=Az,yg=f.forwardRef(({className:e,...t},n)=>o.jsx(Zk,{ref:n,className:re("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));yg.displayName=Zk.displayName;const T1=om("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),kg=f.forwardRef(({className:e,variant:t,...n},r)=>o.jsx(Jk,{ref:r,className:re(T1({variant:t}),e),...n}));kg.displayName=Jk.displayName;const M1=f.forwardRef(({className:e,...t},n)=>o.jsx(ng,{ref:n,className:re("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));M1.displayName=ng.displayName;const gg=f.forwardRef(({className:e,...t},n)=>o.jsx(rg,{ref:n,className:re("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:o.jsx(bl,{className:"h-4 w-4"})}));gg.displayName=rg.displayName;const vg=f.forwardRef(({className:e,...t},n)=>o.jsx(eg,{ref:n,className:re("text-sm font-semibold",e),...t}));vg.displayName=eg.displayName;const bg=f.forwardRef(({className:e,...t},n)=>o.jsx(tg,{ref:n,className:re("text-sm opacity-90",e),...t}));bg.displayName=tg.displayName;function R1(){const{toasts:e}=Dk();return o.jsxs(j1,{children:[e.map(function({id:t,title:n,description:r,action:i,...a}){return o.jsxs(kg,{...a,children:[o.jsxs("div",{className:"grid gap-1",children:[n&&o.jsx(vg,{children:n}),r&&o.jsx(bg,{children:r})]}),i,o.jsx(gg,{})]},t)}),o.jsx(yg,{})]})}var yh=["light","dark"],D1="(prefers-color-scheme: dark)",F1=f.createContext(void 0),I1={setTheme:e=>{},themes:[]},L1=()=>{var e;return(e=f.useContext(F1))!=null?e:I1};f.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:a,value:l,attrs:s,nonce:u})=>{let c=a==="system",m=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${s.map(x=>`'${x}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=i?yh.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(x,g=!1,b=!0)=>{let y=l?l[x]:x,k=g?x+"|| ''":`'${y}'`,v="";return i&&b&&!g&&yh.includes(x)&&(v+=`d.style.colorScheme = '${x}';`),n==="class"?g||y?v+=`c.add(${k})`:v+="null":y&&(v+=`d[s](n,${k})`),v},p=e?`!function(){${m}${h(e)}}()`:r?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${D1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${h(l?"x[e]":"e",!0)}}${c?"":"else{"+h(a,!1,!1)+"}"}${d}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${h(l?"x[e]":"e",!0)}}else{${h(a,!1,!1)};}${d}}catch(t){}}();`;return f.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:p}})});var O1=e=>{switch(e){case"success":return K1;case"info":return G1;case"warning":return H1;case"error":return U1;default:return null}},B1=Array(12).fill(0),_1=({visible:e,className:t})=>R.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},R.createElement("div",{className:"sonner-spinner"},B1.map((n,r)=>R.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),K1=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),H1=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),G1=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),U1=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Y1=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},R.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),R.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),V1=()=>{let[e,t]=R.useState(document.hidden);return R.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Lc=1,$1=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Lc++,a=this.toasts.find(s=>s.id===i),l=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),a?this.toasts=this.toasts.map(s=>s.id===i?(this.publish({...s,...e,id:i,title:n}),{...s,...e,id:i,dismissible:l,title:n}):s):this.addToast({title:n,...r,dismissible:l,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),i=n!==void 0,a,l=r.then(async u=>{if(a=["resolve",u],R.isValidElement(u))i=!1,this.create({id:n,type:"default",message:u});else if(W1(u)&&!u.ok){i=!1;let c=typeof t.error=="function"?await t.error(`HTTP error! status: ${u.status}`):t.error,m=typeof t.description=="function"?await t.description(`HTTP error! status: ${u.status}`):t.description;this.create({id:n,type:"error",message:c,description:m})}else if(t.success!==void 0){i=!1;let c=typeof t.success=="function"?await t.success(u):t.success,m=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"success",message:c,description:m})}}).catch(async u=>{if(a=["reject",u],t.error!==void 0){i=!1;let c=typeof t.error=="function"?await t.error(u):t.error,m=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"error",message:c,description:m})}}).finally(()=>{var u;i&&(this.dismiss(n),n=void 0),(u=t.finally)==null||u.call(t)}),s=()=>new Promise((u,c)=>l.then(()=>a[0]==="reject"?c(a[1]):u(a[1])).catch(c));return typeof n!="string"&&typeof n!="number"?{unwrap:s}:Object.assign(n,{unwrap:s})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Lc++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},st=new $1,q1=(e,t)=>{let n=(t==null?void 0:t.id)||Lc++;return st.addToast({title:e,...t,id:n}),n},W1=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Q1=q1,X1=()=>st.toasts,Z1=()=>st.getActiveToasts();Object.assign(Q1,{success:st.success,info:st.info,warning:st.warning,error:st.error,custom:st.custom,message:st.message,promise:st.promise,dismiss:st.dismiss,loading:st.loading},{getHistory:X1,getToasts:Z1});function J1(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}J1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Xl(e){return e.label!==void 0}var eS=3,tS="32px",nS="16px",kh=4e3,rS=356,iS=14,aS=20,lS=200;function Kt(...e){return e.filter(Boolean).join(" ")}function oS(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var sS=e=>{var t,n,r,i,a,l,s,u,c,m,d;let{invert:h,toast:p,unstyled:x,interacting:g,setHeights:b,visibleToasts:y,heights:k,index:v,toasts:w,expanded:z,removeToast:S,defaultRichColors:C,closeButton:E,style:P,cancelButtonStyle:T,actionButtonStyle:L,className:I="",descriptionClassName:G="",duration:F,position:Y,gap:_,loadingIcon:U,expandByDefault:N,classNames:A,icons:M,closeButtonAriaLabel:B="Close toast",pauseWhenPageIsHidden:O}=e,[$,V]=R.useState(null),[ne,se]=R.useState(null),[W,ye]=R.useState(!1),[me,we]=R.useState(!1),[ae,H]=R.useState(!1),[ee,ke]=R.useState(!1),[De,Xe]=R.useState(!1),[ht,pt]=R.useState(0),[Ze,tn]=R.useState(0),Rt=R.useRef(p.duration||F||kh),ei=R.useRef(null),Dt=R.useRef(null),El=v===0,Al=v+1<=y,ot=p.type,gn=p.dismissible!==!1,Vs=p.className||"",ea=p.descriptionClassName||"",Ft=R.useMemo(()=>k.findIndex(Q=>Q.toastId===p.id)||0,[k,p.id]),ta=R.useMemo(()=>{var Q;return(Q=p.closeButton)!=null?Q:E},[p.closeButton,E]),ti=R.useMemo(()=>p.duration||F||kh,[p.duration,F]),Hn=R.useRef(0),Gn=R.useRef(0),Nl=R.useRef(0),Un=R.useRef(null),[$s,qs]=Y.split("-"),na=R.useMemo(()=>k.reduce((Q,oe,fe)=>fe>=Ft?Q:Q+oe.height,0),[k,Ft]),Pl=V1(),jl=p.invert||h,ni=ot==="loading";Gn.current=R.useMemo(()=>Ft*_+na,[Ft,na]),R.useEffect(()=>{Rt.current=ti},[ti]),R.useEffect(()=>{ye(!0)},[]),R.useEffect(()=>{let Q=Dt.current;if(Q){let oe=Q.getBoundingClientRect().height;return tn(oe),b(fe=>[{toastId:p.id,height:oe,position:p.position},...fe]),()=>b(fe=>fe.filter(Lt=>Lt.toastId!==p.id))}},[b,p.id]),R.useLayoutEffect(()=>{if(!W)return;let Q=Dt.current,oe=Q.style.height;Q.style.height="auto";let fe=Q.getBoundingClientRect().height;Q.style.height=oe,tn(fe),b(Lt=>Lt.find(Ot=>Ot.toastId===p.id)?Lt.map(Ot=>Ot.toastId===p.id?{...Ot,height:fe}:Ot):[{toastId:p.id,height:fe,position:p.position},...Lt])},[W,p.title,p.description,b,p.id]);let It=R.useCallback(()=>{we(!0),pt(Gn.current),b(Q=>Q.filter(oe=>oe.toastId!==p.id)),setTimeout(()=>{S(p)},lS)},[p,S,b,Gn]);R.useEffect(()=>{if(p.promise&&ot==="loading"||p.duration===1/0||p.type==="loading")return;let Q;return z||g||O&&Pl?(()=>{if(Nl.current<Hn.current){let oe=new Date().getTime()-Hn.current;Rt.current=Rt.current-oe}Nl.current=new Date().getTime()})():Rt.current!==1/0&&(Hn.current=new Date().getTime(),Q=setTimeout(()=>{var oe;(oe=p.onAutoClose)==null||oe.call(p,p),It()},Rt.current)),()=>clearTimeout(Q)},[z,g,p,ot,O,Pl,It]),R.useEffect(()=>{p.delete&&It()},[It,p.delete]);function Ws(){var Q,oe,fe;return M!=null&&M.loading?R.createElement("div",{className:Kt(A==null?void 0:A.loader,(Q=p==null?void 0:p.classNames)==null?void 0:Q.loader,"sonner-loader"),"data-visible":ot==="loading"},M.loading):U?R.createElement("div",{className:Kt(A==null?void 0:A.loader,(oe=p==null?void 0:p.classNames)==null?void 0:oe.loader,"sonner-loader"),"data-visible":ot==="loading"},U):R.createElement(_1,{className:Kt(A==null?void 0:A.loader,(fe=p==null?void 0:p.classNames)==null?void 0:fe.loader),visible:ot==="loading"})}return R.createElement("li",{tabIndex:0,ref:Dt,className:Kt(I,Vs,A==null?void 0:A.toast,(t=p==null?void 0:p.classNames)==null?void 0:t.toast,A==null?void 0:A.default,A==null?void 0:A[ot],(n=p==null?void 0:p.classNames)==null?void 0:n[ot]),"data-sonner-toast":"","data-rich-colors":(r=p.richColors)!=null?r:C,"data-styled":!(p.jsx||p.unstyled||x),"data-mounted":W,"data-promise":!!p.promise,"data-swiped":De,"data-removed":me,"data-visible":Al,"data-y-position":$s,"data-x-position":qs,"data-index":v,"data-front":El,"data-swiping":ae,"data-dismissible":gn,"data-type":ot,"data-invert":jl,"data-swipe-out":ee,"data-swipe-direction":ne,"data-expanded":!!(z||N&&W),style:{"--index":v,"--toasts-before":v,"--z-index":w.length-v,"--offset":`${me?ht:Gn.current}px`,"--initial-height":N?"auto":`${Ze}px`,...P,...p.style},onDragEnd:()=>{H(!1),V(null),Un.current=null},onPointerDown:Q=>{ni||!gn||(ei.current=new Date,pt(Gn.current),Q.target.setPointerCapture(Q.pointerId),Q.target.tagName!=="BUTTON"&&(H(!0),Un.current={x:Q.clientX,y:Q.clientY}))},onPointerUp:()=>{var Q,oe,fe,Lt;if(ee||!gn)return;Un.current=null;let Ot=Number(((Q=Dt.current)==null?void 0:Q.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Yn=Number(((oe=Dt.current)==null?void 0:oe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Nr=new Date().getTime()-((fe=ei.current)==null?void 0:fe.getTime()),Bt=$==="x"?Ot:Yn,Vn=Math.abs(Bt)/Nr;if(Math.abs(Bt)>=aS||Vn>.11){pt(Gn.current),(Lt=p.onDismiss)==null||Lt.call(p,p),se($==="x"?Ot>0?"right":"left":Yn>0?"down":"up"),It(),ke(!0),Xe(!1);return}H(!1),V(null)},onPointerMove:Q=>{var oe,fe,Lt,Ot;if(!Un.current||!gn||((oe=window.getSelection())==null?void 0:oe.toString().length)>0)return;let Yn=Q.clientY-Un.current.y,Nr=Q.clientX-Un.current.x,Bt=(fe=e.swipeDirections)!=null?fe:oS(Y);!$&&(Math.abs(Nr)>1||Math.abs(Yn)>1)&&V(Math.abs(Nr)>Math.abs(Yn)?"x":"y");let Vn={x:0,y:0};$==="y"?(Bt.includes("top")||Bt.includes("bottom"))&&(Bt.includes("top")&&Yn<0||Bt.includes("bottom")&&Yn>0)&&(Vn.y=Yn):$==="x"&&(Bt.includes("left")||Bt.includes("right"))&&(Bt.includes("left")&&Nr<0||Bt.includes("right")&&Nr>0)&&(Vn.x=Nr),(Math.abs(Vn.x)>0||Math.abs(Vn.y)>0)&&Xe(!0),(Lt=Dt.current)==null||Lt.style.setProperty("--swipe-amount-x",`${Vn.x}px`),(Ot=Dt.current)==null||Ot.style.setProperty("--swipe-amount-y",`${Vn.y}px`)}},ta&&!p.jsx?R.createElement("button",{"aria-label":B,"data-disabled":ni,"data-close-button":!0,onClick:ni||!gn?()=>{}:()=>{var Q;It(),(Q=p.onDismiss)==null||Q.call(p,p)},className:Kt(A==null?void 0:A.closeButton,(i=p==null?void 0:p.classNames)==null?void 0:i.closeButton)},(a=M==null?void 0:M.close)!=null?a:Y1):null,p.jsx||f.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:R.createElement(R.Fragment,null,ot||p.icon||p.promise?R.createElement("div",{"data-icon":"",className:Kt(A==null?void 0:A.icon,(l=p==null?void 0:p.classNames)==null?void 0:l.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Ws():null,p.type!=="loading"?p.icon||(M==null?void 0:M[ot])||O1(ot):null):null,R.createElement("div",{"data-content":"",className:Kt(A==null?void 0:A.content,(s=p==null?void 0:p.classNames)==null?void 0:s.content)},R.createElement("div",{"data-title":"",className:Kt(A==null?void 0:A.title,(u=p==null?void 0:p.classNames)==null?void 0:u.title)},typeof p.title=="function"?p.title():p.title),p.description?R.createElement("div",{"data-description":"",className:Kt(G,ea,A==null?void 0:A.description,(c=p==null?void 0:p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),f.isValidElement(p.cancel)?p.cancel:p.cancel&&Xl(p.cancel)?R.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||T,onClick:Q=>{var oe,fe;Xl(p.cancel)&&gn&&((fe=(oe=p.cancel).onClick)==null||fe.call(oe,Q),It())},className:Kt(A==null?void 0:A.cancelButton,(m=p==null?void 0:p.classNames)==null?void 0:m.cancelButton)},p.cancel.label):null,f.isValidElement(p.action)?p.action:p.action&&Xl(p.action)?R.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||L,onClick:Q=>{var oe,fe;Xl(p.action)&&((fe=(oe=p.action).onClick)==null||fe.call(oe,Q),!Q.defaultPrevented&&It())},className:Kt(A==null?void 0:A.actionButton,(d=p==null?void 0:p.classNames)==null?void 0:d.actionButton)},p.action.label):null))};function gh(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function uS(e,t){let n={};return[e,t].forEach((r,i)=>{let a=i===1,l=a?"--mobile-offset":"--offset",s=a?nS:tS;function u(c){["top","right","bottom","left"].forEach(m=>{n[`${l}-${m}`]=typeof c=="number"?`${c}px`:c})}typeof r=="number"||typeof r=="string"?u(r):typeof r=="object"?["top","right","bottom","left"].forEach(c=>{r[c]===void 0?n[`${l}-${c}`]=s:n[`${l}-${c}`]=typeof r[c]=="number"?`${r[c]}px`:r[c]}):u(s)}),n}var cS=f.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:a,closeButton:l,className:s,offset:u,mobileOffset:c,theme:m="light",richColors:d,duration:h,style:p,visibleToasts:x=eS,toastOptions:g,dir:b=gh(),gap:y=iS,loadingIcon:k,icons:v,containerAriaLabel:w="Notifications",pauseWhenPageIsHidden:z}=e,[S,C]=R.useState([]),E=R.useMemo(()=>Array.from(new Set([r].concat(S.filter(O=>O.position).map(O=>O.position)))),[S,r]),[P,T]=R.useState([]),[L,I]=R.useState(!1),[G,F]=R.useState(!1),[Y,_]=R.useState(m!=="system"?m:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),U=R.useRef(null),N=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),A=R.useRef(null),M=R.useRef(!1),B=R.useCallback(O=>{C($=>{var V;return(V=$.find(ne=>ne.id===O.id))!=null&&V.delete||st.dismiss(O.id),$.filter(({id:ne})=>ne!==O.id)})},[]);return R.useEffect(()=>st.subscribe(O=>{if(O.dismiss){C($=>$.map(V=>V.id===O.id?{...V,delete:!0}:V));return}setTimeout(()=>{Mk.flushSync(()=>{C($=>{let V=$.findIndex(ne=>ne.id===O.id);return V!==-1?[...$.slice(0,V),{...$[V],...O},...$.slice(V+1)]:[O,...$]})})})}),[]),R.useEffect(()=>{if(m!=="system"){_(m);return}if(m==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?_("dark"):_("light")),typeof window>"u")return;let O=window.matchMedia("(prefers-color-scheme: dark)");try{O.addEventListener("change",({matches:$})=>{_($?"dark":"light")})}catch{O.addListener(({matches:V})=>{try{_(V?"dark":"light")}catch(ne){console.error(ne)}})}},[m]),R.useEffect(()=>{S.length<=1&&I(!1)},[S]),R.useEffect(()=>{let O=$=>{var V,ne;i.every(se=>$[se]||$.code===se)&&(I(!0),(V=U.current)==null||V.focus()),$.code==="Escape"&&(document.activeElement===U.current||(ne=U.current)!=null&&ne.contains(document.activeElement))&&I(!1)};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[i]),R.useEffect(()=>{if(U.current)return()=>{A.current&&(A.current.focus({preventScroll:!0}),A.current=null,M.current=!1)}},[U.current]),R.createElement("section",{ref:t,"aria-label":`${w} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},E.map((O,$)=>{var V;let[ne,se]=O.split("-");return S.length?R.createElement("ol",{key:O,dir:b==="auto"?gh():b,tabIndex:-1,ref:U,className:s,"data-sonner-toaster":!0,"data-theme":Y,"data-y-position":ne,"data-lifted":L&&S.length>1&&!a,"data-x-position":se,style:{"--front-toast-height":`${((V=P[0])==null?void 0:V.height)||0}px`,"--width":`${rS}px`,"--gap":`${y}px`,...p,...uS(u,c)},onBlur:W=>{M.current&&!W.currentTarget.contains(W.relatedTarget)&&(M.current=!1,A.current&&(A.current.focus({preventScroll:!0}),A.current=null))},onFocus:W=>{W.target instanceof HTMLElement&&W.target.dataset.dismissible==="false"||M.current||(M.current=!0,A.current=W.relatedTarget)},onMouseEnter:()=>I(!0),onMouseMove:()=>I(!0),onMouseLeave:()=>{G||I(!1)},onDragEnd:()=>I(!1),onPointerDown:W=>{W.target instanceof HTMLElement&&W.target.dataset.dismissible==="false"||F(!0)},onPointerUp:()=>F(!1)},S.filter(W=>!W.position&&$===0||W.position===O).map((W,ye)=>{var me,we;return R.createElement(sS,{key:W.id,icons:v,index:ye,toast:W,defaultRichColors:d,duration:(me=g==null?void 0:g.duration)!=null?me:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:x,closeButton:(we=g==null?void 0:g.closeButton)!=null?we:l,interacting:G,position:O,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:B,toasts:S.filter(ae=>ae.position==W.position),heights:P.filter(ae=>ae.position==W.position),setHeights:T,expandByDefault:a,gap:y,loadingIcon:k,expanded:L,pauseWhenPageIsHidden:z,swipeDirections:e.swipeDirections})})):null}))});const dS=({...e})=>{const{theme:t="system"}=L1();return o.jsx(cS,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var mS=dd[" useId ".trim().toString()]||(()=>{}),fS=0;function Wa(e){const[t,n]=f.useState(mS());return pn(()=>{n(r=>r??String(fS++))},[e]),t?`radix-${t}`:""}const hS=["top","right","bottom","left"],xr=Math.min,kt=Math.max,Wo=Math.round,Zl=Math.floor,hn=e=>({x:e,y:e}),pS={left:"right",right:"left",bottom:"top",top:"bottom"},yS={start:"end",end:"start"};function Oc(e,t,n){return kt(e,xr(t,n))}function Rn(e,t){return typeof e=="function"?e(t):e}function Dn(e){return e.split("-")[0]}function Qi(e){return e.split("-")[1]}function um(e){return e==="x"?"y":"x"}function cm(e){return e==="y"?"height":"width"}const kS=new Set(["top","bottom"]);function cn(e){return kS.has(Dn(e))?"y":"x"}function dm(e){return um(cn(e))}function gS(e,t,n){n===void 0&&(n=!1);const r=Qi(e),i=dm(e),a=cm(i);let l=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=Qo(l)),[l,Qo(l)]}function vS(e){const t=Qo(e);return[Bc(e),t,Bc(t)]}function Bc(e){return e.replace(/start|end/g,t=>yS[t])}const vh=["left","right"],bh=["right","left"],bS=["top","bottom"],xS=["bottom","top"];function wS(e,t,n){switch(e){case"top":case"bottom":return n?t?bh:vh:t?vh:bh;case"left":case"right":return t?bS:xS;default:return[]}}function zS(e,t,n,r){const i=Qi(e);let a=wS(Dn(e),n==="start",r);return i&&(a=a.map(l=>l+"-"+i),t&&(a=a.concat(a.map(Bc)))),a}function Qo(e){return e.replace(/left|right|bottom|top/g,t=>pS[t])}function SS(e){return{top:0,right:0,bottom:0,left:0,...e}}function xg(e){return typeof e!="number"?SS(e):{top:e,right:e,bottom:e,left:e}}function Xo(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function xh(e,t,n){let{reference:r,floating:i}=e;const a=cn(t),l=dm(t),s=cm(l),u=Dn(t),c=a==="y",m=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,h=r[s]/2-i[s]/2;let p;switch(u){case"top":p={x:m,y:r.y-i.height};break;case"bottom":p={x:m,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Qi(t)){case"start":p[l]-=h*(n&&c?-1:1);break;case"end":p[l]+=h*(n&&c?-1:1);break}return p}const CS=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:l}=n,s=a.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(t));let c=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:m,y:d}=xh(c,r,u),h=r,p={},x=0;for(let g=0;g<s.length;g++){const{name:b,fn:y}=s[g],{x:k,y:v,data:w,reset:z}=await y({x:m,y:d,initialPlacement:r,placement:h,strategy:i,middlewareData:p,rects:c,platform:l,elements:{reference:e,floating:t}});m=k??m,d=v??d,p={...p,[b]:{...p[b],...w}},z&&x<=50&&(x++,typeof z=="object"&&(z.placement&&(h=z.placement),z.rects&&(c=z.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:i}):z.rects),{x:m,y:d}=xh(c,h,u)),g=-1)}return{x:m,y:d,placement:h,strategy:i,middlewareData:p}};async function Qa(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:l,elements:s,strategy:u}=e,{boundary:c="clippingAncestors",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=Rn(t,e),x=xg(p),b=s[h?d==="floating"?"reference":"floating":d],y=Xo(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(b)))==null||n?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:c,rootBoundary:m,strategy:u})),k=d==="floating"?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,v=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),w=await(a.isElement==null?void 0:a.isElement(v))?await(a.getScale==null?void 0:a.getScale(v))||{x:1,y:1}:{x:1,y:1},z=Xo(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:k,offsetParent:v,strategy:u}):k);return{top:(y.top-z.top+x.top)/w.y,bottom:(z.bottom-y.bottom+x.bottom)/w.y,left:(y.left-z.left+x.left)/w.x,right:(z.right-y.right+x.right)/w.x}}const ES=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:a,platform:l,elements:s,middlewareData:u}=t,{element:c,padding:m=0}=Rn(e,t)||{};if(c==null)return{};const d=xg(m),h={x:n,y:r},p=dm(i),x=cm(p),g=await l.getDimensions(c),b=p==="y",y=b?"top":"left",k=b?"bottom":"right",v=b?"clientHeight":"clientWidth",w=a.reference[x]+a.reference[p]-h[p]-a.floating[x],z=h[p]-a.reference[p],S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(c));let C=S?S[v]:0;(!C||!await(l.isElement==null?void 0:l.isElement(S)))&&(C=s.floating[v]||a.floating[x]);const E=w/2-z/2,P=C/2-g[x]/2-1,T=xr(d[y],P),L=xr(d[k],P),I=T,G=C-g[x]-L,F=C/2-g[x]/2+E,Y=Oc(I,F,G),_=!u.arrow&&Qi(i)!=null&&F!==Y&&a.reference[x]/2-(F<I?T:L)-g[x]/2<0,U=_?F<I?F-I:F-G:0;return{[p]:h[p]+U,data:{[p]:Y,centerOffset:F-Y-U,..._&&{alignmentOffset:U}},reset:_}}}),AS=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:a,rects:l,initialPlacement:s,platform:u,elements:c}=t,{mainAxis:m=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:g=!0,...b}=Rn(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const y=Dn(i),k=cn(s),v=Dn(s)===s,w=await(u.isRTL==null?void 0:u.isRTL(c.floating)),z=h||(v||!g?[Qo(s)]:vS(s)),S=x!=="none";!h&&S&&z.push(...zS(s,g,x,w));const C=[s,...z],E=await Qa(t,b),P=[];let T=((r=a.flip)==null?void 0:r.overflows)||[];if(m&&P.push(E[y]),d){const F=gS(i,l,w);P.push(E[F[0]],E[F[1]])}if(T=[...T,{placement:i,overflows:P}],!P.every(F=>F<=0)){var L,I;const F=(((L=a.flip)==null?void 0:L.index)||0)+1,Y=C[F];if(Y&&(!(d==="alignment"?k!==cn(Y):!1)||T.every(N=>N.overflows[0]>0&&cn(N.placement)===k)))return{data:{index:F,overflows:T},reset:{placement:Y}};let _=(I=T.filter(U=>U.overflows[0]<=0).sort((U,N)=>U.overflows[1]-N.overflows[1])[0])==null?void 0:I.placement;if(!_)switch(p){case"bestFit":{var G;const U=(G=T.filter(N=>{if(S){const A=cn(N.placement);return A===k||A==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(A=>A>0).reduce((A,M)=>A+M,0)]).sort((N,A)=>N[1]-A[1])[0])==null?void 0:G[0];U&&(_=U);break}case"initialPlacement":_=s;break}if(i!==_)return{reset:{placement:_}}}return{}}}};function wh(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function zh(e){return hS.some(t=>e[t]>=0)}const NS=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=Rn(e,t);switch(r){case"referenceHidden":{const a=await Qa(t,{...i,elementContext:"reference"}),l=wh(a,n.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:zh(l)}}}case"escaped":{const a=await Qa(t,{...i,altBoundary:!0}),l=wh(a,n.floating);return{data:{escapedOffsets:l,escaped:zh(l)}}}default:return{}}}}},wg=new Set(["left","top"]);async function PS(e,t){const{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),l=Dn(n),s=Qi(n),u=cn(n)==="y",c=wg.has(l)?-1:1,m=a&&u?-1:1,d=Rn(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:x}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof x=="number"&&(p=s==="end"?x*-1:x),u?{x:p*m,y:h*c}:{x:h*c,y:p*m}}const jS=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:a,placement:l,middlewareData:s}=t,u=await PS(t,e);return l===((n=s.offset)==null?void 0:n.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:l}}}}},TS=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:s={fn:b=>{let{x:y,y:k}=b;return{x:y,y:k}}},...u}=Rn(e,t),c={x:n,y:r},m=await Qa(t,u),d=cn(Dn(i)),h=um(d);let p=c[h],x=c[d];if(a){const b=h==="y"?"top":"left",y=h==="y"?"bottom":"right",k=p+m[b],v=p-m[y];p=Oc(k,p,v)}if(l){const b=d==="y"?"top":"left",y=d==="y"?"bottom":"right",k=x+m[b],v=x-m[y];x=Oc(k,x,v)}const g=s.fn({...t,[h]:p,[d]:x});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[h]:a,[d]:l}}}}}},MS=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:a,middlewareData:l}=t,{offset:s=0,mainAxis:u=!0,crossAxis:c=!0}=Rn(e,t),m={x:n,y:r},d=cn(i),h=um(d);let p=m[h],x=m[d];const g=Rn(s,t),b=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(u){const v=h==="y"?"height":"width",w=a.reference[h]-a.floating[v]+b.mainAxis,z=a.reference[h]+a.reference[v]-b.mainAxis;p<w?p=w:p>z&&(p=z)}if(c){var y,k;const v=h==="y"?"width":"height",w=wg.has(Dn(i)),z=a.reference[d]-a.floating[v]+(w&&((y=l.offset)==null?void 0:y[d])||0)+(w?0:b.crossAxis),S=a.reference[d]+a.reference[v]+(w?0:((k=l.offset)==null?void 0:k[d])||0)-(w?b.crossAxis:0);x<z?x=z:x>S&&(x=S)}return{[h]:p,[d]:x}}}},RS=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:a,platform:l,elements:s}=t,{apply:u=()=>{},...c}=Rn(e,t),m=await Qa(t,c),d=Dn(i),h=Qi(i),p=cn(i)==="y",{width:x,height:g}=a.floating;let b,y;d==="top"||d==="bottom"?(b=d,y=h===(await(l.isRTL==null?void 0:l.isRTL(s.floating))?"start":"end")?"left":"right"):(y=d,b=h==="end"?"top":"bottom");const k=g-m.top-m.bottom,v=x-m.left-m.right,w=xr(g-m[b],k),z=xr(x-m[y],v),S=!t.middlewareData.shift;let C=w,E=z;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(E=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=k),S&&!h){const T=kt(m.left,0),L=kt(m.right,0),I=kt(m.top,0),G=kt(m.bottom,0);p?E=x-2*(T!==0||L!==0?T+L:kt(m.left,m.right)):C=g-2*(I!==0||G!==0?I+G:kt(m.top,m.bottom))}await u({...t,availableWidth:E,availableHeight:C});const P=await l.getDimensions(s.floating);return x!==P.width||g!==P.height?{reset:{rects:!0}}:{}}}};function As(){return typeof window<"u"}function Xi(e){return zg(e)?(e.nodeName||"").toLowerCase():"#document"}function bt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kn(e){var t;return(t=(zg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function zg(e){return As()?e instanceof Node||e instanceof bt(e).Node:!1}function Zt(e){return As()?e instanceof Element||e instanceof bt(e).Element:!1}function yn(e){return As()?e instanceof HTMLElement||e instanceof bt(e).HTMLElement:!1}function Sh(e){return!As()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof bt(e).ShadowRoot}const DS=new Set(["inline","contents"]);function xl(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Jt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!DS.has(i)}const FS=new Set(["table","td","th"]);function IS(e){return FS.has(Xi(e))}const LS=[":popover-open",":modal"];function Ns(e){return LS.some(t=>{try{return e.matches(t)}catch{return!1}})}const OS=["transform","translate","scale","rotate","perspective"],BS=["transform","translate","scale","rotate","perspective","filter"],_S=["paint","layout","strict","content"];function mm(e){const t=fm(),n=Zt(e)?Jt(e):e;return OS.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||BS.some(r=>(n.willChange||"").includes(r))||_S.some(r=>(n.contain||"").includes(r))}function KS(e){let t=wr(e);for(;yn(t)&&!Gi(t);){if(mm(t))return t;if(Ns(t))return null;t=wr(t)}return null}function fm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const HS=new Set(["html","body","#document"]);function Gi(e){return HS.has(Xi(e))}function Jt(e){return bt(e).getComputedStyle(e)}function Ps(e){return Zt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function wr(e){if(Xi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Sh(e)&&e.host||kn(e);return Sh(t)?t.host:t}function Sg(e){const t=wr(e);return Gi(t)?e.ownerDocument?e.ownerDocument.body:e.body:yn(t)&&xl(t)?t:Sg(t)}function Xa(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Sg(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),l=bt(i);if(a){const s=_c(l);return t.concat(l,l.visualViewport||[],xl(i)?i:[],s&&n?Xa(s):[])}return t.concat(i,Xa(i,[],n))}function _c(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Cg(e){const t=Jt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=yn(e),a=i?e.offsetWidth:n,l=i?e.offsetHeight:r,s=Wo(n)!==a||Wo(r)!==l;return s&&(n=a,r=l),{width:n,height:r,$:s}}function hm(e){return Zt(e)?e:e.contextElement}function Ei(e){const t=hm(e);if(!yn(t))return hn(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Cg(t);let l=(a?Wo(n.width):n.width)/r,s=(a?Wo(n.height):n.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const GS=hn(0);function Eg(e){const t=bt(e);return!fm()||!t.visualViewport?GS:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function US(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==bt(e)?!1:t}function qr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),a=hm(e);let l=hn(1);t&&(r?Zt(r)&&(l=Ei(r)):l=Ei(e));const s=US(a,n,r)?Eg(a):hn(0);let u=(i.left+s.x)/l.x,c=(i.top+s.y)/l.y,m=i.width/l.x,d=i.height/l.y;if(a){const h=bt(a),p=r&&Zt(r)?bt(r):r;let x=h,g=_c(x);for(;g&&r&&p!==x;){const b=Ei(g),y=g.getBoundingClientRect(),k=Jt(g),v=y.left+(g.clientLeft+parseFloat(k.paddingLeft))*b.x,w=y.top+(g.clientTop+parseFloat(k.paddingTop))*b.y;u*=b.x,c*=b.y,m*=b.x,d*=b.y,u+=v,c+=w,x=bt(g),g=_c(x)}}return Xo({width:m,height:d,x:u,y:c})}function pm(e,t){const n=Ps(e).scrollLeft;return t?t.left+n:qr(kn(e)).left+n}function Ag(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:pm(e,r)),a=r.top+t.scrollTop;return{x:i,y:a}}function YS(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const a=i==="fixed",l=kn(r),s=t?Ns(t.floating):!1;if(r===l||s&&a)return n;let u={scrollLeft:0,scrollTop:0},c=hn(1);const m=hn(0),d=yn(r);if((d||!d&&!a)&&((Xi(r)!=="body"||xl(l))&&(u=Ps(r)),yn(r))){const p=qr(r);c=Ei(r),m.x=p.x+r.clientLeft,m.y=p.y+r.clientTop}const h=l&&!d&&!a?Ag(l,u,!0):hn(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+m.x+h.x,y:n.y*c.y-u.scrollTop*c.y+m.y+h.y}}function VS(e){return Array.from(e.getClientRects())}function $S(e){const t=kn(e),n=Ps(e),r=e.ownerDocument.body,i=kt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=kt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+pm(e);const s=-n.scrollTop;return Jt(r).direction==="rtl"&&(l+=kt(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:l,y:s}}function qS(e,t){const n=bt(e),r=kn(e),i=n.visualViewport;let a=r.clientWidth,l=r.clientHeight,s=0,u=0;if(i){a=i.width,l=i.height;const c=fm();(!c||c&&t==="fixed")&&(s=i.offsetLeft,u=i.offsetTop)}return{width:a,height:l,x:s,y:u}}const WS=new Set(["absolute","fixed"]);function QS(e,t){const n=qr(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=yn(e)?Ei(e):hn(1),l=e.clientWidth*a.x,s=e.clientHeight*a.y,u=i*a.x,c=r*a.y;return{width:l,height:s,x:u,y:c}}function Ch(e,t,n){let r;if(t==="viewport")r=qS(e,n);else if(t==="document")r=$S(kn(e));else if(Zt(t))r=QS(t,n);else{const i=Eg(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Xo(r)}function Ng(e,t){const n=wr(e);return n===t||!Zt(n)||Gi(n)?!1:Jt(n).position==="fixed"||Ng(n,t)}function XS(e,t){const n=t.get(e);if(n)return n;let r=Xa(e,[],!1).filter(s=>Zt(s)&&Xi(s)!=="body"),i=null;const a=Jt(e).position==="fixed";let l=a?wr(e):e;for(;Zt(l)&&!Gi(l);){const s=Jt(l),u=mm(l);!u&&s.position==="fixed"&&(i=null),(a?!u&&!i:!u&&s.position==="static"&&!!i&&WS.has(i.position)||xl(l)&&!u&&Ng(e,l))?r=r.filter(m=>m!==l):i=s,l=wr(l)}return t.set(e,r),r}function ZS(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const l=[...n==="clippingAncestors"?Ns(t)?[]:XS(t,this._c):[].concat(n),r],s=l[0],u=l.reduce((c,m)=>{const d=Ch(t,m,i);return c.top=kt(d.top,c.top),c.right=xr(d.right,c.right),c.bottom=xr(d.bottom,c.bottom),c.left=kt(d.left,c.left),c},Ch(t,s,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function JS(e){const{width:t,height:n}=Cg(e);return{width:t,height:n}}function eC(e,t,n){const r=yn(t),i=kn(t),a=n==="fixed",l=qr(e,!0,a,t);let s={scrollLeft:0,scrollTop:0};const u=hn(0);function c(){u.x=pm(i)}if(r||!r&&!a)if((Xi(t)!=="body"||xl(i))&&(s=Ps(t)),r){const p=qr(t,!0,a,t);u.x=p.x+t.clientLeft,u.y=p.y+t.clientTop}else i&&c();a&&!r&&i&&c();const m=i&&!r&&!a?Ag(i,s):hn(0),d=l.left+s.scrollLeft-u.x-m.x,h=l.top+s.scrollTop-u.y-m.y;return{x:d,y:h,width:l.width,height:l.height}}function Au(e){return Jt(e).position==="static"}function Eh(e,t){if(!yn(e)||Jt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return kn(e)===n&&(n=n.ownerDocument.body),n}function Pg(e,t){const n=bt(e);if(Ns(e))return n;if(!yn(e)){let i=wr(e);for(;i&&!Gi(i);){if(Zt(i)&&!Au(i))return i;i=wr(i)}return n}let r=Eh(e,t);for(;r&&IS(r)&&Au(r);)r=Eh(r,t);return r&&Gi(r)&&Au(r)&&!mm(r)?n:r||KS(e)||n}const tC=async function(e){const t=this.getOffsetParent||Pg,n=this.getDimensions,r=await n(e.floating);return{reference:eC(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function nC(e){return Jt(e).direction==="rtl"}const rC={convertOffsetParentRelativeRectToViewportRelativeRect:YS,getDocumentElement:kn,getClippingRect:ZS,getOffsetParent:Pg,getElementRects:tC,getClientRects:VS,getDimensions:JS,getScale:Ei,isElement:Zt,isRTL:nC};function jg(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function iC(e,t){let n=null,r;const i=kn(e);function a(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function l(s,u){s===void 0&&(s=!1),u===void 0&&(u=1),a();const c=e.getBoundingClientRect(),{left:m,top:d,width:h,height:p}=c;if(s||t(),!h||!p)return;const x=Zl(d),g=Zl(i.clientWidth-(m+h)),b=Zl(i.clientHeight-(d+p)),y=Zl(m),v={rootMargin:-x+"px "+-g+"px "+-b+"px "+-y+"px",threshold:kt(0,xr(1,u))||1};let w=!0;function z(S){const C=S[0].intersectionRatio;if(C!==u){if(!w)return l();C?l(!1,C):r=setTimeout(()=>{l(!1,1e-7)},1e3)}C===1&&!jg(c,e.getBoundingClientRect())&&l(),w=!1}try{n=new IntersectionObserver(z,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(z,v)}n.observe(e)}return l(!0),a}function aC(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,c=hm(e),m=i||a?[...c?Xa(c):[],...Xa(t)]:[];m.forEach(y=>{i&&y.addEventListener("scroll",n,{passive:!0}),a&&y.addEventListener("resize",n)});const d=c&&s?iC(c,n):null;let h=-1,p=null;l&&(p=new ResizeObserver(y=>{let[k]=y;k&&k.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=p)==null||v.observe(t)})),n()}),c&&!u&&p.observe(c),p.observe(t));let x,g=u?qr(e):null;u&&b();function b(){const y=qr(e);g&&!jg(g,y)&&n(),g=y,x=requestAnimationFrame(b)}return n(),()=>{var y;m.forEach(k=>{i&&k.removeEventListener("scroll",n),a&&k.removeEventListener("resize",n)}),d==null||d(),(y=p)==null||y.disconnect(),p=null,u&&cancelAnimationFrame(x)}}const lC=jS,oC=TS,sC=AS,uC=RS,cC=NS,Ah=ES,dC=MS,mC=(e,t,n)=>{const r=new Map,i={platform:rC,...n},a={...i.platform,_c:r};return CS(e,t,{...i,platform:a})};var fC=typeof document<"u",hC=function(){},bo=fC?f.useLayoutEffect:hC;function Zo(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Zo(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const a=i[r];if(!(a==="_owner"&&e.$$typeof)&&!Zo(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function Tg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Nh(e,t){const n=Tg(e);return Math.round(t*n)/n}function Nu(e){const t=f.useRef(e);return bo(()=>{t.current=e}),t}function pC(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:a,floating:l}={},transform:s=!0,whileElementsMounted:u,open:c}=e,[m,d]=f.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=f.useState(r);Zo(h,r)||p(r);const[x,g]=f.useState(null),[b,y]=f.useState(null),k=f.useCallback(N=>{N!==S.current&&(S.current=N,g(N))},[]),v=f.useCallback(N=>{N!==C.current&&(C.current=N,y(N))},[]),w=a||x,z=l||b,S=f.useRef(null),C=f.useRef(null),E=f.useRef(m),P=u!=null,T=Nu(u),L=Nu(i),I=Nu(c),G=f.useCallback(()=>{if(!S.current||!C.current)return;const N={placement:t,strategy:n,middleware:h};L.current&&(N.platform=L.current),mC(S.current,C.current,N).then(A=>{const M={...A,isPositioned:I.current!==!1};F.current&&!Zo(E.current,M)&&(E.current=M,gl.flushSync(()=>{d(M)}))})},[h,t,n,L,I]);bo(()=>{c===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,d(N=>({...N,isPositioned:!1})))},[c]);const F=f.useRef(!1);bo(()=>(F.current=!0,()=>{F.current=!1}),[]),bo(()=>{if(w&&(S.current=w),z&&(C.current=z),w&&z){if(T.current)return T.current(w,z,G);G()}},[w,z,G,T,P]);const Y=f.useMemo(()=>({reference:S,floating:C,setReference:k,setFloating:v}),[k,v]),_=f.useMemo(()=>({reference:w,floating:z}),[w,z]),U=f.useMemo(()=>{const N={position:n,left:0,top:0};if(!_.floating)return N;const A=Nh(_.floating,m.x),M=Nh(_.floating,m.y);return s?{...N,transform:"translate("+A+"px, "+M+"px)",...Tg(_.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:A,top:M}},[n,s,_.floating,m.x,m.y]);return f.useMemo(()=>({...m,update:G,refs:Y,elements:_,floatingStyles:U}),[m,G,Y,_,U])}const yC=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Ah({element:r.current,padding:i}).fn(n):{}:r?Ah({element:r,padding:i}).fn(n):{}}}},kC=(e,t)=>({...lC(e),options:[e,t]}),gC=(e,t)=>({...oC(e),options:[e,t]}),vC=(e,t)=>({...dC(e),options:[e,t]}),bC=(e,t)=>({...sC(e),options:[e,t]}),xC=(e,t)=>({...uC(e),options:[e,t]}),wC=(e,t)=>({...cC(e),options:[e,t]}),zC=(e,t)=>({...yC(e),options:[e,t]});var SC="Arrow",Mg=f.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...a}=e;return o.jsx(ue.svg,{...a,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});Mg.displayName=SC;var CC=Mg;function EC(e){const[t,n]=f.useState(void 0);return pn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const a=i[0];let l,s;if("borderBoxSize"in a){const u=a.borderBoxSize,c=Array.isArray(u)?u[0]:u;l=c.inlineSize,s=c.blockSize}else l=e.offsetWidth,s=e.offsetHeight;n({width:l,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var ym="Popper",[Rg,js]=Bn(ym),[AC,Dg]=Rg(ym),Fg=e=>{const{__scopePopper:t,children:n}=e,[r,i]=f.useState(null);return o.jsx(AC,{scope:t,anchor:r,onAnchorChange:i,children:n})};Fg.displayName=ym;var Ig="PopperAnchor",Lg=f.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,a=Dg(Ig,n),l=f.useRef(null),s=Re(t,l);return f.useEffect(()=>{a.onAnchorChange((r==null?void 0:r.current)||l.current)}),r?null:o.jsx(ue.div,{...i,ref:s})});Lg.displayName=Ig;var km="PopperContent",[NC,PC]=Rg(km),Og=f.forwardRef((e,t)=>{var W,ye,me,we,ae,H;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:a="center",alignOffset:l=0,arrowPadding:s=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:m=0,sticky:d="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:x,...g}=e,b=Dg(km,n),[y,k]=f.useState(null),v=Re(t,ee=>k(ee)),[w,z]=f.useState(null),S=EC(w),C=(S==null?void 0:S.width)??0,E=(S==null?void 0:S.height)??0,P=r+(a!=="center"?"-"+a:""),T=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},L=Array.isArray(c)?c:[c],I=L.length>0,G={padding:T,boundary:L.filter(TC),altBoundary:I},{refs:F,floatingStyles:Y,placement:_,isPositioned:U,middlewareData:N}=pC({strategy:"fixed",placement:P,whileElementsMounted:(...ee)=>aC(...ee,{animationFrame:p==="always"}),elements:{reference:b.anchor},middleware:[kC({mainAxis:i+E,alignmentAxis:l}),u&&gC({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?vC():void 0,...G}),u&&bC({...G}),xC({...G,apply:({elements:ee,rects:ke,availableWidth:De,availableHeight:Xe})=>{const{width:ht,height:pt}=ke.reference,Ze=ee.floating.style;Ze.setProperty("--radix-popper-available-width",`${De}px`),Ze.setProperty("--radix-popper-available-height",`${Xe}px`),Ze.setProperty("--radix-popper-anchor-width",`${ht}px`),Ze.setProperty("--radix-popper-anchor-height",`${pt}px`)}}),w&&zC({element:w,padding:s}),MC({arrowWidth:C,arrowHeight:E}),h&&wC({strategy:"referenceHidden",...G})]}),[A,M]=Kg(_),B=wt(x);pn(()=>{U&&(B==null||B())},[U,B]);const O=(W=N.arrow)==null?void 0:W.x,$=(ye=N.arrow)==null?void 0:ye.y,V=((me=N.arrow)==null?void 0:me.centerOffset)!==0,[ne,se]=f.useState();return pn(()=>{y&&se(window.getComputedStyle(y).zIndex)},[y]),o.jsx("div",{ref:F.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:U?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[(we=N.transformOrigin)==null?void 0:we.x,(ae=N.transformOrigin)==null?void 0:ae.y].join(" "),...((H=N.hide)==null?void 0:H.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:o.jsx(NC,{scope:n,placedSide:A,onArrowChange:z,arrowX:O,arrowY:$,shouldHideArrow:V,children:o.jsx(ue.div,{"data-side":A,"data-align":M,...g,ref:v,style:{...g.style,animation:U?void 0:"none"}})})})});Og.displayName=km;var Bg="PopperArrow",jC={top:"bottom",right:"left",bottom:"top",left:"right"},_g=f.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,a=PC(Bg,r),l=jC[a.placedSide];return o.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:o.jsx(CC,{...i,ref:n,style:{...i.style,display:"block"}})})});_g.displayName=Bg;function TC(e){return e!==null}var MC=e=>({name:"transformOrigin",options:e,fn(t){var b,y,k;const{placement:n,rects:r,middlewareData:i}=t,l=((b=i.arrow)==null?void 0:b.centerOffset)!==0,s=l?0:e.arrowWidth,u=l?0:e.arrowHeight,[c,m]=Kg(n),d={start:"0%",center:"50%",end:"100%"}[m],h=(((y=i.arrow)==null?void 0:y.x)??0)+s/2,p=(((k=i.arrow)==null?void 0:k.y)??0)+u/2;let x="",g="";return c==="bottom"?(x=l?d:`${h}px`,g=`${-u}px`):c==="top"?(x=l?d:`${h}px`,g=`${r.floating.height+u}px`):c==="right"?(x=`${-u}px`,g=l?d:`${p}px`):c==="left"&&(x=`${r.floating.width+u}px`,g=l?d:`${p}px`),{data:{x,y:g}}}});function Kg(e){const[t,n="center"]=e.split("-");return[t,n]}var RC=Fg,Hg=Lg,Gg=Og,Ug=_g,[Ts,hM]=Bn("Tooltip",[js]),gm=js(),Yg="TooltipProvider",DC=700,Ph="tooltip.open",[FC,Vg]=Ts(Yg),$g=e=>{const{__scopeTooltip:t,delayDuration:n=DC,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a}=e,l=f.useRef(!0),s=f.useRef(!1),u=f.useRef(0);return f.useEffect(()=>{const c=u.current;return()=>window.clearTimeout(c)},[]),o.jsx(FC,{scope:t,isOpenDelayedRef:l,delayDuration:n,onOpen:f.useCallback(()=>{window.clearTimeout(u.current),l.current=!1},[]),onClose:f.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>l.current=!0,r)},[r]),isPointerInTransitRef:s,onPointerInTransitChange:f.useCallback(c=>{s.current=c},[]),disableHoverableContent:i,children:a})};$g.displayName=Yg;var qg="Tooltip",[pM,Ms]=Ts(qg),Kc="TooltipTrigger",IC=f.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Ms(Kc,n),a=Vg(Kc,n),l=gm(n),s=f.useRef(null),u=Re(t,s,i.onTriggerChange),c=f.useRef(!1),m=f.useRef(!1),d=f.useCallback(()=>c.current=!1,[]);return f.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),o.jsx(Hg,{asChild:!0,...l,children:o.jsx(ue.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:u,onPointerMove:q(e.onPointerMove,h=>{h.pointerType!=="touch"&&!m.current&&!a.isPointerInTransitRef.current&&(i.onTriggerEnter(),m.current=!0)}),onPointerLeave:q(e.onPointerLeave,()=>{i.onTriggerLeave(),m.current=!1}),onPointerDown:q(e.onPointerDown,()=>{i.open&&i.onClose(),c.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:q(e.onFocus,()=>{c.current||i.onOpen()}),onBlur:q(e.onBlur,i.onClose),onClick:q(e.onClick,i.onClose)})})});IC.displayName=Kc;var LC="TooltipPortal",[yM,OC]=Ts(LC,{forceMount:void 0}),Ui="TooltipContent",Wg=f.forwardRef((e,t)=>{const n=OC(Ui,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...a}=e,l=Ms(Ui,e.__scopeTooltip);return o.jsx(Er,{present:r||l.open,children:l.disableHoverableContent?o.jsx(Qg,{side:i,...a,ref:t}):o.jsx(BC,{side:i,...a,ref:t})})}),BC=f.forwardRef((e,t)=>{const n=Ms(Ui,e.__scopeTooltip),r=Vg(Ui,e.__scopeTooltip),i=f.useRef(null),a=Re(t,i),[l,s]=f.useState(null),{trigger:u,onClose:c}=n,m=i.current,{onPointerInTransitChange:d}=r,h=f.useCallback(()=>{s(null),d(!1)},[d]),p=f.useCallback((x,g)=>{const b=x.currentTarget,y={x:x.clientX,y:x.clientY},k=UC(y,b.getBoundingClientRect()),v=YC(y,k),w=VC(g.getBoundingClientRect()),z=qC([...v,...w]);s(z),d(!0)},[d]);return f.useEffect(()=>()=>h(),[h]),f.useEffect(()=>{if(u&&m){const x=b=>p(b,m),g=b=>p(b,u);return u.addEventListener("pointerleave",x),m.addEventListener("pointerleave",g),()=>{u.removeEventListener("pointerleave",x),m.removeEventListener("pointerleave",g)}}},[u,m,p,h]),f.useEffect(()=>{if(l){const x=g=>{const b=g.target,y={x:g.clientX,y:g.clientY},k=(u==null?void 0:u.contains(b))||(m==null?void 0:m.contains(b)),v=!$C(y,l);k?h():v&&(h(),c())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[u,m,l,c,h]),o.jsx(Qg,{...e,ref:a})}),[_C,KC]=Ts(qg,{isInside:!1}),HC=_w("TooltipContent"),Qg=f.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:l,...s}=e,u=Ms(Ui,n),c=gm(n),{onClose:m}=u;return f.useEffect(()=>(document.addEventListener(Ph,m),()=>document.removeEventListener(Ph,m)),[m]),f.useEffect(()=>{if(u.trigger){const d=h=>{const p=h.target;p!=null&&p.contains(u.trigger)&&m()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[u.trigger,m]),o.jsx(Ss,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:d=>d.preventDefault(),onDismiss:m,children:o.jsxs(Gg,{"data-state":u.stateAttribute,...c,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(HC,{children:r}),o.jsx(_C,{scope:n,isInside:!0,children:o.jsx(uz,{id:u.contentId,role:"tooltip",children:i||r})})]})})});Wg.displayName=Ui;var Xg="TooltipArrow",GC=f.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=gm(n);return KC(Xg,n).isInside?null:o.jsx(Ug,{...i,...r,ref:t})});GC.displayName=Xg;function UC(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,i,a)){case a:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function YC(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function VC(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function $C(e,t){const{x:n,y:r}=e;let i=!1;for(let a=0,l=t.length-1;a<t.length;l=a++){const s=t[a],u=t[l],c=s.x,m=s.y,d=u.x,h=u.y;m>r!=h>r&&n<(d-c)*(r-m)/(h-m)+c&&(i=!i)}return i}function qC(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),WC(t)}function WC(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const a=t[t.length-1],l=t[t.length-2];if((a.x-l.x)*(i.y-l.y)>=(a.y-l.y)*(i.x-l.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const a=n[n.length-1],l=n[n.length-2];if((a.x-l.x)*(i.y-l.y)>=(a.y-l.y)*(i.x-l.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var QC=$g,Zg=Wg;const XC=QC,ZC=f.forwardRef(({className:e,sideOffset:t=4,...n},r)=>o.jsx(Zg,{ref:r,sideOffset:t,className:re("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));ZC.displayName=Zg.displayName;var Rs=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ds=typeof window>"u"||"Deno"in globalThis;function Gt(){}function JC(e,t){return typeof e=="function"?e(t):e}function eE(e){return typeof e=="number"&&e>=0&&e!==1/0}function tE(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Hc(e,t){return typeof e=="function"?e(t):e}function nE(e,t){return typeof e=="function"?e(t):e}function jh(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:a,queryKey:l,stale:s}=e;if(l){if(r){if(t.queryHash!==vm(l,t.options))return!1}else if(!Ja(t.queryKey,l))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||i&&i!==t.state.fetchStatus||a&&!a(t))}function Th(e,t){const{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(Za(t.options.mutationKey)!==Za(a))return!1}else if(!Ja(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function vm(e,t){return((t==null?void 0:t.queryKeyHashFn)||Za)(e)}function Za(e){return JSON.stringify(e,(t,n)=>Gc(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Ja(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Ja(e[n],t[n])):!1}function Jg(e,t){if(e===t)return e;const n=Mh(e)&&Mh(t);if(n||Gc(e)&&Gc(t)){const r=n?e:Object.keys(e),i=r.length,a=n?t:Object.keys(t),l=a.length,s=n?[]:{},u=new Set(r);let c=0;for(let m=0;m<l;m++){const d=n?m:a[m];(!n&&u.has(d)||n)&&e[d]===void 0&&t[d]===void 0?(s[d]=void 0,c++):(s[d]=Jg(e[d],t[d]),s[d]===e[d]&&e[d]!==void 0&&c++)}return i===l&&c===i?e:s}return t}function Mh(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Gc(e){if(!Rh(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Rh(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Rh(e){return Object.prototype.toString.call(e)==="[object Object]"}function rE(e){return new Promise(t=>{setTimeout(t,e)})}function iE(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Jg(e,t):t}function aE(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function lE(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var bm=Symbol();function ev(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===bm?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Fr,nr,Ni,dp,oE=(dp=class extends Rs{constructor(){super();le(this,Fr);le(this,nr);le(this,Ni);X(this,Ni,t=>{if(!Ds&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){j(this,nr)||this.setEventListener(j(this,Ni))}onUnsubscribe(){var t;this.hasListeners()||((t=j(this,nr))==null||t.call(this),X(this,nr,void 0))}setEventListener(t){var n;X(this,Ni,t),(n=j(this,nr))==null||n.call(this),X(this,nr,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){j(this,Fr)!==t&&(X(this,Fr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof j(this,Fr)=="boolean"?j(this,Fr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Fr=new WeakMap,nr=new WeakMap,Ni=new WeakMap,dp),tv=new oE,Pi,rr,ji,mp,sE=(mp=class extends Rs{constructor(){super();le(this,Pi,!0);le(this,rr);le(this,ji);X(this,ji,t=>{if(!Ds&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){j(this,rr)||this.setEventListener(j(this,ji))}onUnsubscribe(){var t;this.hasListeners()||((t=j(this,rr))==null||t.call(this),X(this,rr,void 0))}setEventListener(t){var n;X(this,ji,t),(n=j(this,rr))==null||n.call(this),X(this,rr,t(this.setOnline.bind(this)))}setOnline(t){j(this,Pi)!==t&&(X(this,Pi,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return j(this,Pi)}},Pi=new WeakMap,rr=new WeakMap,ji=new WeakMap,mp),Jo=new sE;function uE(){let e,t;const n=new Promise((i,a)=>{e=i,t=a});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function cE(e){return Math.min(1e3*2**e,3e4)}function nv(e){return(e??"online")==="online"?Jo.isOnline():!0}var rv=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Pu(e){return e instanceof rv}function iv(e){let t=!1,n=0,r=!1,i;const a=uE(),l=g=>{var b;r||(h(new rv(g)),(b=e.abort)==null||b.call(e))},s=()=>{t=!0},u=()=>{t=!1},c=()=>tv.isFocused()&&(e.networkMode==="always"||Jo.isOnline())&&e.canRun(),m=()=>nv(e.networkMode)&&e.canRun(),d=g=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,g),i==null||i(),a.resolve(g))},h=g=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,g),i==null||i(),a.reject(g))},p=()=>new Promise(g=>{var b;i=y=>{(r||c())&&g(y)},(b=e.onPause)==null||b.call(e)}).then(()=>{var g;i=void 0,r||(g=e.onContinue)==null||g.call(e)}),x=()=>{if(r)return;let g;const b=n===0?e.initialPromise:void 0;try{g=b??e.fn()}catch(y){g=Promise.reject(y)}Promise.resolve(g).then(d).catch(y=>{var S;if(r)return;const k=e.retry??(Ds?0:3),v=e.retryDelay??cE,w=typeof v=="function"?v(n,y):v,z=k===!0||typeof k=="number"&&n<k||typeof k=="function"&&k(n,y);if(t||!z){h(y);return}n++,(S=e.onFail)==null||S.call(e,n,y),rE(w).then(()=>c()?void 0:p()).then(()=>{t?h(y):x()})})};return{promise:a,cancel:l,continue:()=>(i==null||i(),a),cancelRetry:s,continueRetry:u,canStart:m,start:()=>(m()?x():p().then(x),a)}}var dE=e=>setTimeout(e,0);function mE(){let e=[],t=0,n=s=>{s()},r=s=>{s()},i=dE;const a=s=>{t?e.push(s):i(()=>{n(s)})},l=()=>{const s=e;e=[],s.length&&i(()=>{r(()=>{s.forEach(u=>{n(u)})})})};return{batch:s=>{let u;t++;try{u=s()}finally{t--,t||l()}return u},batchCalls:s=>(...u)=>{a(()=>{s(...u)})},schedule:a,setNotifyFunction:s=>{n=s},setBatchNotifyFunction:s=>{r=s},setScheduler:s=>{i=s}}}var tt=mE(),Ir,fp,av=(fp=class{constructor(){le(this,Ir)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),eE(this.gcTime)&&X(this,Ir,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Ds?1/0:5*60*1e3))}clearGcTimeout(){j(this,Ir)&&(clearTimeout(j(this,Ir)),X(this,Ir,void 0))}},Ir=new WeakMap,fp),Ti,Lr,Ct,Or,qe,dl,Br,Ut,xn,hp,fE=(hp=class extends av{constructor(t){super();le(this,Ut);le(this,Ti);le(this,Lr);le(this,Ct);le(this,Or);le(this,qe);le(this,dl);le(this,Br);X(this,Br,!1),X(this,dl,t.defaultOptions),this.setOptions(t.options),this.observers=[],X(this,Or,t.client),X(this,Ct,j(this,Or).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,X(this,Ti,pE(this.options)),this.state=t.state??j(this,Ti),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=j(this,qe))==null?void 0:t.promise}setOptions(t){this.options={...j(this,dl),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&j(this,Ct).remove(this)}setData(t,n){const r=iE(this.state.data,t,this.options);return Ue(this,Ut,xn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ue(this,Ut,xn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=j(this,qe))==null?void 0:r.promise;return(i=j(this,qe))==null||i.cancel(t),n?n.then(Gt).catch(Gt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(j(this,Ti))}isActive(){return this.observers.some(t=>nE(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===bm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Hc(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!tE(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=j(this,qe))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=j(this,qe))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),j(this,Ct).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(j(this,qe)&&(j(this,Br)?j(this,qe).cancel({revert:!0}):j(this,qe).cancelRetry()),this.scheduleGc()),j(this,Ct).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ue(this,Ut,xn).call(this,{type:"invalidate"})}fetch(t,n){var c,m,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(j(this,qe))return j(this,qe).continueRetry(),j(this,qe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(p=>p.options.queryFn);h&&this.setOptions(h.options)}const r=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(X(this,Br,!0),r.signal)})},a=()=>{const h=ev(this.options,n),x=(()=>{const g={client:j(this,Or),queryKey:this.queryKey,meta:this.meta};return i(g),g})();return X(this,Br,!1),this.options.persister?this.options.persister(h,x,this):h(x)},s=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:j(this,Or),state:this.state,fetchFn:a};return i(h),h})();(c=this.options.behavior)==null||c.onFetch(s,this),X(this,Lr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=s.fetchOptions)==null?void 0:m.meta))&&Ue(this,Ut,xn).call(this,{type:"fetch",meta:(d=s.fetchOptions)==null?void 0:d.meta});const u=h=>{var p,x,g,b;Pu(h)&&h.silent||Ue(this,Ut,xn).call(this,{type:"error",error:h}),Pu(h)||((x=(p=j(this,Ct).config).onError)==null||x.call(p,h,this),(b=(g=j(this,Ct).config).onSettled)==null||b.call(g,this.state.data,h,this)),this.scheduleGc()};return X(this,qe,iv({initialPromise:n==null?void 0:n.initialPromise,fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{var p,x,g,b;if(h===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(y){u(y);return}(x=(p=j(this,Ct).config).onSuccess)==null||x.call(p,h,this),(b=(g=j(this,Ct).config).onSettled)==null||b.call(g,h,this.state.error,this),this.scheduleGc()},onError:u,onFail:(h,p)=>{Ue(this,Ut,xn).call(this,{type:"failed",failureCount:h,error:p})},onPause:()=>{Ue(this,Ut,xn).call(this,{type:"pause"})},onContinue:()=>{Ue(this,Ut,xn).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),j(this,qe).start()}},Ti=new WeakMap,Lr=new WeakMap,Ct=new WeakMap,Or=new WeakMap,qe=new WeakMap,dl=new WeakMap,Br=new WeakMap,Ut=new WeakSet,xn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...hE(r.data,this.options),fetchMeta:t.meta??null};case"success":return X(this,Lr,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Pu(i)&&i.revert&&j(this,Lr)?{...j(this,Lr),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),tt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),j(this,Ct).notify({query:this,type:"updated",action:t})})},hp);function hE(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:nv(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function pE(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var an,pp,yE=(pp=class extends Rs{constructor(t={}){super();le(this,an);this.config=t,X(this,an,new Map)}build(t,n,r){const i=n.queryKey,a=n.queryHash??vm(i,n);let l=this.get(a);return l||(l=new fE({client:t,queryKey:i,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(l)),l}add(t){j(this,an).has(t.queryHash)||(j(this,an).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=j(this,an).get(t.queryHash);n&&(t.destroy(),n===t&&j(this,an).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){tt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return j(this,an).get(t)}getAll(){return[...j(this,an).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>jh(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>jh(t,r)):n}notify(t){tt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){tt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){tt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},an=new WeakMap,pp),ln,Je,_r,on,Qn,yp,kE=(yp=class extends av{constructor(t){super();le(this,on);le(this,ln);le(this,Je);le(this,_r);this.mutationId=t.mutationId,X(this,Je,t.mutationCache),X(this,ln,[]),this.state=t.state||gE(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){j(this,ln).includes(t)||(j(this,ln).push(t),this.clearGcTimeout(),j(this,Je).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){X(this,ln,j(this,ln).filter(n=>n!==t)),this.scheduleGc(),j(this,Je).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){j(this,ln).length||(this.state.status==="pending"?this.scheduleGc():j(this,Je).remove(this))}continue(){var t;return((t=j(this,_r))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var a,l,s,u,c,m,d,h,p,x,g,b,y,k,v,w,z,S,C,E;const n=()=>{Ue(this,on,Qn).call(this,{type:"continue"})};X(this,_r,iv({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(P,T)=>{Ue(this,on,Qn).call(this,{type:"failed",failureCount:P,error:T})},onPause:()=>{Ue(this,on,Qn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>j(this,Je).canRun(this)}));const r=this.state.status==="pending",i=!j(this,_r).canStart();try{if(r)n();else{Ue(this,on,Qn).call(this,{type:"pending",variables:t,isPaused:i}),await((l=(a=j(this,Je).config).onMutate)==null?void 0:l.call(a,t,this));const T=await((u=(s=this.options).onMutate)==null?void 0:u.call(s,t));T!==this.state.context&&Ue(this,on,Qn).call(this,{type:"pending",context:T,variables:t,isPaused:i})}const P=await j(this,_r).start();return await((m=(c=j(this,Je).config).onSuccess)==null?void 0:m.call(c,P,t,this.state.context,this)),await((h=(d=this.options).onSuccess)==null?void 0:h.call(d,P,t,this.state.context)),await((x=(p=j(this,Je).config).onSettled)==null?void 0:x.call(p,P,null,this.state.variables,this.state.context,this)),await((b=(g=this.options).onSettled)==null?void 0:b.call(g,P,null,t,this.state.context)),Ue(this,on,Qn).call(this,{type:"success",data:P}),P}catch(P){try{throw await((k=(y=j(this,Je).config).onError)==null?void 0:k.call(y,P,t,this.state.context,this)),await((w=(v=this.options).onError)==null?void 0:w.call(v,P,t,this.state.context)),await((S=(z=j(this,Je).config).onSettled)==null?void 0:S.call(z,void 0,P,this.state.variables,this.state.context,this)),await((E=(C=this.options).onSettled)==null?void 0:E.call(C,void 0,P,t,this.state.context)),P}finally{Ue(this,on,Qn).call(this,{type:"error",error:P})}}finally{j(this,Je).runNext(this)}}},ln=new WeakMap,Je=new WeakMap,_r=new WeakMap,on=new WeakSet,Qn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),tt.batch(()=>{j(this,ln).forEach(r=>{r.onMutationUpdate(t)}),j(this,Je).notify({mutation:this,type:"updated",action:t})})},yp);function gE(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Sn,Yt,ml,kp,vE=(kp=class extends Rs{constructor(t={}){super();le(this,Sn);le(this,Yt);le(this,ml);this.config=t,X(this,Sn,new Set),X(this,Yt,new Map),X(this,ml,0)}build(t,n,r){const i=new kE({mutationCache:this,mutationId:++Tl(this,ml)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){j(this,Sn).add(t);const n=Jl(t);if(typeof n=="string"){const r=j(this,Yt).get(n);r?r.push(t):j(this,Yt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(j(this,Sn).delete(t)){const n=Jl(t);if(typeof n=="string"){const r=j(this,Yt).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&j(this,Yt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Jl(t);if(typeof n=="string"){const r=j(this,Yt).get(n),i=r==null?void 0:r.find(a=>a.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Jl(t);if(typeof n=="string"){const i=(r=j(this,Yt).get(n))==null?void 0:r.find(a=>a!==t&&a.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){tt.batch(()=>{j(this,Sn).forEach(t=>{this.notify({type:"removed",mutation:t})}),j(this,Sn).clear(),j(this,Yt).clear()})}getAll(){return Array.from(j(this,Sn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Th(n,r))}findAll(t={}){return this.getAll().filter(n=>Th(t,n))}notify(t){tt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return tt.batch(()=>Promise.all(t.map(n=>n.continue().catch(Gt))))}},Sn=new WeakMap,Yt=new WeakMap,ml=new WeakMap,kp);function Jl(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Dh(e){return{onFetch:(t,n)=>{var m,d,h,p,x;const r=t.options,i=(h=(d=(m=t.fetchOptions)==null?void 0:m.meta)==null?void 0:d.fetchMore)==null?void 0:h.direction,a=((p=t.state.data)==null?void 0:p.pages)||[],l=((x=t.state.data)==null?void 0:x.pageParams)||[];let s={pages:[],pageParams:[]},u=0;const c=async()=>{let g=!1;const b=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?g=!0:t.signal.addEventListener("abort",()=>{g=!0}),t.signal)})},y=ev(t.options,t.fetchOptions),k=async(v,w,z)=>{if(g)return Promise.reject();if(w==null&&v.pages.length)return Promise.resolve(v);const C=(()=>{const L={client:t.client,queryKey:t.queryKey,pageParam:w,direction:z?"backward":"forward",meta:t.options.meta};return b(L),L})(),E=await y(C),{maxPages:P}=t.options,T=z?lE:aE;return{pages:T(v.pages,E,P),pageParams:T(v.pageParams,w,P)}};if(i&&a.length){const v=i==="backward",w=v?bE:Fh,z={pages:a,pageParams:l},S=w(r,z);s=await k(z,S,v)}else{const v=e??a.length;do{const w=u===0?l[0]??r.initialPageParam:Fh(r,s);if(u>0&&w==null)break;s=await k(s,w),u++}while(u<v)}return s};t.options.persister?t.fetchFn=()=>{var g,b;return(b=(g=t.options).persister)==null?void 0:b.call(g,c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=c}}}function Fh(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function bE(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Ae,ir,ar,Mi,Ri,lr,Di,Fi,gp,xE=(gp=class{constructor(e={}){le(this,Ae);le(this,ir);le(this,ar);le(this,Mi);le(this,Ri);le(this,lr);le(this,Di);le(this,Fi);X(this,Ae,e.queryCache||new yE),X(this,ir,e.mutationCache||new vE),X(this,ar,e.defaultOptions||{}),X(this,Mi,new Map),X(this,Ri,new Map),X(this,lr,0)}mount(){Tl(this,lr)._++,j(this,lr)===1&&(X(this,Di,tv.subscribe(async e=>{e&&(await this.resumePausedMutations(),j(this,Ae).onFocus())})),X(this,Fi,Jo.subscribe(async e=>{e&&(await this.resumePausedMutations(),j(this,Ae).onOnline())})))}unmount(){var e,t;Tl(this,lr)._--,j(this,lr)===0&&((e=j(this,Di))==null||e.call(this),X(this,Di,void 0),(t=j(this,Fi))==null||t.call(this),X(this,Fi,void 0))}isFetching(e){return j(this,Ae).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return j(this,ir).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=j(this,Ae).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=j(this,Ae).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Hc(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return j(this,Ae).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=j(this,Ae).get(r.queryHash),a=i==null?void 0:i.state.data,l=JC(t,a);if(l!==void 0)return j(this,Ae).build(this,r).setData(l,{...n,manual:!0})}setQueriesData(e,t,n){return tt.batch(()=>j(this,Ae).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=j(this,Ae).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=j(this,Ae);tt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=j(this,Ae);return tt.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=tt.batch(()=>j(this,Ae).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(Gt).catch(Gt)}invalidateQueries(e,t={}){return tt.batch(()=>(j(this,Ae).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=tt.batch(()=>j(this,Ae).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let a=i.fetch(void 0,n);return n.throwOnError||(a=a.catch(Gt)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(Gt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=j(this,Ae).build(this,t);return n.isStaleByTime(Hc(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Gt).catch(Gt)}fetchInfiniteQuery(e){return e.behavior=Dh(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Gt).catch(Gt)}ensureInfiniteQueryData(e){return e.behavior=Dh(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Jo.isOnline()?j(this,ir).resumePausedMutations():Promise.resolve()}getQueryCache(){return j(this,Ae)}getMutationCache(){return j(this,ir)}getDefaultOptions(){return j(this,ar)}setDefaultOptions(e){X(this,ar,e)}setQueryDefaults(e,t){j(this,Mi).set(Za(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...j(this,Mi).values()],n={};return t.forEach(r=>{Ja(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){j(this,Ri).set(Za(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...j(this,Ri).values()],n={};return t.forEach(r=>{Ja(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...j(this,ar).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=vm(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===bm&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...j(this,ar).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){j(this,Ae).clear(),j(this,ir).clear()}},Ae=new WeakMap,ir=new WeakMap,ar=new WeakMap,Mi=new WeakMap,Ri=new WeakMap,lr=new WeakMap,Di=new WeakMap,Fi=new WeakMap,gp),wE=f.createContext(void 0),zE=({client:e,children:t})=>(f.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),o.jsx(wE.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}var ur;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ur||(ur={}));const Ih="popstate";function SE(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:s}=r.location;return Uc("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:es(i)}return EE(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function CE(){return Math.random().toString(36).substr(2,8)}function Lh(e,t){return{usr:e.state,key:e.key,idx:t}}function Uc(e,t,n,r){return n===void 0&&(n=null),el({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zi(t):t,{state:n,key:t&&t.key||r||CE()})}function es(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function EE(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,s=ur.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(el({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function d(){s=ur.Pop;let b=m(),y=b==null?null:b-c;c=b,u&&u({action:s,location:g.location,delta:y})}function h(b,y){s=ur.Push;let k=Uc(g.location,b,y);c=m()+1;let v=Lh(k,c),w=g.createHref(k);try{l.pushState(v,"",w)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(w)}a&&u&&u({action:s,location:g.location,delta:1})}function p(b,y){s=ur.Replace;let k=Uc(g.location,b,y);c=m();let v=Lh(k,c),w=g.createHref(k);l.replaceState(v,"",w),a&&u&&u({action:s,location:g.location,delta:0})}function x(b){let y=i.location.origin!=="null"?i.location.origin:i.location.href,k=typeof b=="string"?b:es(b);return k=k.replace(/ $/,"%20"),je(y,"No window.location.(origin|href) available to create URL for href: "+k),new URL(k,y)}let g={get action(){return s},get location(){return e(i,l)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ih,d),u=b,()=>{i.removeEventListener(Ih,d),u=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let y=x(b);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:p,go(b){return l.go(b)}};return g}var Oh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Oh||(Oh={}));function AE(e,t,n){return n===void 0&&(n="/"),NE(e,t,n,!1)}function NE(e,t,n,r){let i=typeof t=="string"?Zi(t):t,a=xm(i.pathname||"/",n);if(a==null)return null;let l=ov(e);PE(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let c=_E(a);s=OE(l[u],c,r)}return s}function ov(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,s)=>{let u={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};u.relativePath.startsWith("/")&&(je(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=gr([r,u.relativePath]),m=n.concat(u);a.children&&a.children.length>0&&(je(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ov(a.children,t,m,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:IE(c,a.index),routesMeta:m})};return e.forEach((a,l)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,l);else for(let u of sv(a.path))i(a,l,u)}),t}function sv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=sv(r.join("/")),s=[];return s.push(...l.map(u=>u===""?a:[a,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function PE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:LE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jE=/^:[\w-]+$/,TE=3,ME=2,RE=1,DE=10,FE=-2,Bh=e=>e==="*";function IE(e,t){let n=e.split("/"),r=n.length;return n.some(Bh)&&(r+=FE),t&&(r+=ME),n.filter(i=>!Bh(i)).reduce((i,a)=>i+(jE.test(a)?TE:a===""?RE:DE),r)}function LE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function OE(e,t,n){let{routesMeta:r}=e,i={},a="/",l=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,m=a==="/"?t:t.slice(a.length)||"/",d=_h({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},m),h=u.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=_h({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:gr([a,d.pathname]),pathnameBase:UE(gr([a,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(a=gr([a,d.pathnameBase]))}return l}function _h(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=BE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,m,d)=>{let{paramName:h,isOptional:p}=m;if(h==="*"){let g=s[d]||"";l=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}const x=s[d];return p&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:l,pattern:e}}function BE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _E(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function KE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zi(e):e;return{pathname:n?n.startsWith("/")?n:HE(n,t):t,search:YE(r),hash:VE(i)}}function HE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ju(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wm(e,t){let n=GE(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zi(e):(i=el({},e),je(!i.pathname||!i.pathname.includes("?"),ju("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),ju("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),ju("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,s;if(l==null)s=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}s=d>=0?t[d]:"/"}let u=KE(i,s),c=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const gr=e=>e.join("/").replace(/\/\/+/g,"/"),UE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),YE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,VE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $E(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uv=["post","put","patch","delete"];new Set(uv);const qE=["get",...uv];new Set(qE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tl.apply(this,arguments)}const Sm=f.createContext(null),WE=f.createContext(null),Ar=f.createContext(null),Fs=f.createContext(null),_n=f.createContext({outlet:null,matches:[],isDataRoute:!1}),cv=f.createContext(null);function QE(e,t){let{relative:n}=t===void 0?{}:t;Ji()||je(!1);let{basename:r,navigator:i}=f.useContext(Ar),{hash:a,pathname:l,search:s}=mv(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:gr([r,l])),i.createHref({pathname:u,search:s,hash:a})}function Ji(){return f.useContext(Fs)!=null}function Kn(){return Ji()||je(!1),f.useContext(Fs).location}function dv(e){f.useContext(Ar).static||f.useLayoutEffect(e)}function Is(){let{isDataRoute:e}=f.useContext(_n);return e?uA():XE()}function XE(){Ji()||je(!1);let e=f.useContext(Sm),{basename:t,future:n,navigator:r}=f.useContext(Ar),{matches:i}=f.useContext(_n),{pathname:a}=Kn(),l=JSON.stringify(wm(i,n.v7_relativeSplatPath)),s=f.useRef(!1);return dv(()=>{s.current=!0}),f.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=zm(c,JSON.parse(l),a,m.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:gr([t,d.pathname])),(m.replace?r.replace:r.push)(d,m.state,m)},[t,r,l,a,e])}function Cm(){let{matches:e}=f.useContext(_n),t=e[e.length-1];return t?t.params:{}}function mv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=f.useContext(Ar),{matches:i}=f.useContext(_n),{pathname:a}=Kn(),l=JSON.stringify(wm(i,r.v7_relativeSplatPath));return f.useMemo(()=>zm(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function ZE(e,t){return JE(e,t)}function JE(e,t,n,r){Ji()||je(!1);let{navigator:i}=f.useContext(Ar),{matches:a}=f.useContext(_n),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=Kn(),m;if(t){var d;let b=typeof t=="string"?Zi(t):t;u==="/"||(d=b.pathname)!=null&&d.startsWith(u)||je(!1),m=b}else m=c;let h=m.pathname||"/",p=h;if(u!=="/"){let b=u.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=AE(e,{pathname:p}),g=iA(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:gr([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:gr([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,r);return t&&g?f.createElement(Fs.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ur.Pop}},g):g}function eA(){let e=sA(),t=$E(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),n?f.createElement("pre",{style:i},n):null,null)}const tA=f.createElement(eA,null);class nA extends f.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?f.createElement(_n.Provider,{value:this.props.routeContext},f.createElement(cv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rA(e){let{routeContext:t,match:n,children:r}=e,i=f.useContext(Sm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),f.createElement(_n.Provider,{value:t},r)}function iA(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);m>=0||je(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let d=l[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=m),d.route.id){let{loaderData:h,errors:p}=n,x=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||x){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,d,h)=>{let p,x=!1,g=null,b=null;n&&(p=s&&d.route.id?s[d.route.id]:void 0,g=d.route.errorElement||tA,u&&(c<0&&h===0?(x=!0,b=null):c===h&&(x=!0,b=d.route.hydrateFallbackElement||null)));let y=t.concat(l.slice(0,h+1)),k=()=>{let v;return p?v=g:x?v=b:d.route.Component?v=f.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=m,f.createElement(rA,{match:d,routeContext:{outlet:m,matches:y,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?f.createElement(nA,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:k(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):k()},null)}var fv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fv||{}),ts=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ts||{});function aA(e){let t=f.useContext(Sm);return t||je(!1),t}function lA(e){let t=f.useContext(WE);return t||je(!1),t}function oA(e){let t=f.useContext(_n);return t||je(!1),t}function hv(e){let t=oA(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function sA(){var e;let t=f.useContext(cv),n=lA(ts.UseRouteError),r=hv(ts.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function uA(){let{router:e}=aA(fv.UseNavigateStable),t=hv(ts.UseNavigateStable),n=f.useRef(!1);return dv(()=>{n.current=!0}),f.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,tl({fromRouteId:t},a)))},[e,t])}function cA(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function dA(e){let{to:t,replace:n,state:r,relative:i}=e;Ji()||je(!1);let{future:a,static:l}=f.useContext(Ar),{matches:s}=f.useContext(_n),{pathname:u}=Kn(),c=Is(),m=zm(t,wm(s,a.v7_relativeSplatPath),u,i==="path"),d=JSON.stringify(m);return f.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function $e(e){je(!1)}function mA(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ur.Pop,navigator:a,static:l=!1,future:s}=e;Ji()&&je(!1);let u=t.replace(/^\/*/,"/"),c=f.useMemo(()=>({basename:u,navigator:a,static:l,future:tl({v7_relativeSplatPath:!1},s)}),[u,s,a,l]);typeof r=="string"&&(r=Zi(r));let{pathname:m="/",search:d="",hash:h="",state:p=null,key:x="default"}=r,g=f.useMemo(()=>{let b=xm(m,u);return b==null?null:{location:{pathname:b,search:d,hash:h,state:p,key:x},navigationType:i}},[u,m,d,h,p,x,i]);return g==null?null:f.createElement(Ar.Provider,{value:c},f.createElement(Fs.Provider,{children:n,value:g}))}function fA(e){let{children:t,location:n}=e;return ZE(Yc(t),n)}new Promise(()=>{});function Yc(e,t){t===void 0&&(t=[]);let n=[];return f.Children.forEach(e,(r,i)=>{if(!f.isValidElement(r))return;let a=[...t,i];if(r.type===f.Fragment){n.push.apply(n,Yc(r.props.children,a));return}r.type!==$e&&je(!1),!r.props.index||!r.props.children||je(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Yc(r.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vc(){return Vc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vc.apply(this,arguments)}function hA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yA(e,t){return e.button===0&&(!t||t==="_self")&&!pA(e)}function $c(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function kA(e,t){let n=$c(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(a=>{n.append(i,a)})}),n}const gA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vA="6";try{window.__reactRouterVersion=vA}catch{}const bA="startTransition",Kh=dd[bA];function xA(e){let{basename:t,children:n,future:r,window:i}=e,a=f.useRef();a.current==null&&(a.current=SE({window:i,v5Compat:!0}));let l=a.current,[s,u]=f.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=f.useCallback(d=>{c&&Kh?Kh(()=>u(d)):u(d)},[u,c]);return f.useLayoutEffect(()=>l.listen(m),[l,m]),f.useEffect(()=>cA(r),[r]),f.createElement(mA,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const wA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=f.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:l,state:s,target:u,to:c,preventScrollReset:m,viewTransition:d}=t,h=hA(t,gA),{basename:p}=f.useContext(Ar),x,g=!1;if(typeof c=="string"&&zA.test(c)&&(x=c,wA))try{let v=new URL(window.location.href),w=c.startsWith("//")?new URL(v.protocol+c):new URL(c),z=xm(w.pathname,p);w.origin===v.origin&&z!=null?c=z+w.search+w.hash:g=!0}catch{}let b=QE(c,{relative:i}),y=SA(c,{replace:l,state:s,target:u,preventScrollReset:m,relative:i,viewTransition:d});function k(v){r&&r(v),v.defaultPrevented||y(v)}return f.createElement("a",Vc({},h,{href:x||b,onClick:g||a?r:k,ref:n,target:u}))});var Hh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hh||(Hh={}));var Gh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gh||(Gh={}));function SA(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:l,viewTransition:s}=t===void 0?{}:t,u=Is(),c=Kn(),m=mv(e,{relative:l});return f.useCallback(d=>{if(yA(d,n)){d.preventDefault();let h=r!==void 0?r:es(c)===es(m);u(e,{replace:h,state:i,preventScrollReset:a,relative:l,viewTransition:s})}},[c,u,m,r,i,n,e,a,l,s])}function CA(e){let t=f.useRef($c(e)),n=f.useRef(!1),r=Kn(),i=f.useMemo(()=>kA(r.search,n.current?null:t.current),[r.search]),a=Is(),l=f.useCallback((s,u)=>{const c=$c(typeof s=="function"?s(i):s);n.current=!0,a("?"+c,u)},[a,i]);return[i,l]}const EA=()=>{const{pathname:e}=Kn();return f.useEffect(()=>{window.scrollTo(0,0)},[e]),null},Nn=f.forwardRef(({className:e,type:t,...n},r)=>o.jsx("input",{type:t,className:re("flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));Nn.displayName="Input";const AA="/assets/sinceva_white_logo_for_web-BS5muGSt.png",NA="/assets/sinceva_black_logo_for_web-BXec4NTi.png",PA="/assets/sinceva_white_logo_for_mobile-B4ssiZkE.png",jA="/assets/sinceva_black_logo_for_mobile-BKzzM21y.png",TA="/assets/cvit_div-Ceih48YX.png",MA="/assets/arbutin_div-CscMPxFp.png",RA="/assets/g%C3%B6z_div-BmpViU2c.png",DA="/assets/g%C3%BCne%C5%9F_div-CB4xzdlO.png",FA="/assets/nemlendirici_div-D8NeJnQZ.png",IA="/assets/gece_div-B0DtiYkA.png",LA="/assets/tonik_div-BTMW2qo0.png",OA="/assets/peeling_div-CoTuL7bY.png",BA="/assets/y%C3%BCz_div-BcVB24g3.png",_A="/assets/antiagingcart-DgUhp66A.png",KA="/assets/cleansingcart-3tnCVup3.png",HA="/assets/dailycarecart-DkCRz_mf.png",qc="/assets/anti%20aging%20kategori-B-1edDqG.jpg",Wc="/assets/cleansing%20kategori-D6lXmJOl.jpg",GA="/assets/daily%20kategori-DN8R2Y_z.jpg",Em={"anti-aging-care":{title:"Anti-Aging Care",description:"Advanced formulas to reduce fine lines, boost collagen, and restore youthful radiance to your skin.",bannerImage:qc,subcategories:{"face-serum":{title:"Face Serum",products:[{id:1,name:"Sinceva Brightening Vitamin C Serum 30 ml",price:89.99,description:"Powerful vitamin C serum for radiant, even-toned skin with natural brightening properties.",image:TA},{id:2,name:"Sinceva Anti-Spot Arbutin Serum 30 ml",price:79.99,description:"Advanced arbutin formula to reduce dark spots and even skin tone.",image:MA}]},"eye-care":{title:"Eye Care",products:[{id:3,name:"Sinceva Anti-Wrinkle Eye Cream 20 ml",price:79.99,description:"Firming eye cream with peptides to reduce fine lines and brighten the delicate eye area.",image:RA}]},"anti-wrinkle-care":{title:"Anti-Wrinkle Care",products:[{id:4,name:"Sinceva Anti-Aging Night Cream 50 ml",price:129.99,description:"Advanced retinol formula to reduce signs of aging and promote skin renewal overnight.",image:IA}]}}},"face-and-skin-cleansing":{title:"Face & Skin Cleansing",description:"Gentle yet effective cleansers that purify your skin while maintaining its natural moisture balance.",bannerImage:Wc,subcategories:{toner:{title:"Toner",products:[{id:5,name:"Sinceva Skin Renewing Tonic 200 ml",price:44.99,description:"Gentle chemical exfoliant that reveals smoother, brighter skin with regular use.",image:LA}]},"peeling-exfoliator":{title:"Peeling / Exfoliator",products:[{id:6,name:"Sinceva Purifying Peeling Cream Scrub 200 ml",price:54.99,description:"Advanced exfoliating scrub that gently removes dead skin cells for smoother texture.",image:OA}]},"foaming-cleanser":{title:"Foaming Cleanser",products:[{id:7,name:"Sinceva Purifying Face Cleansing Foam 200 ml",price:32.99,description:"Mild foaming cleanser that removes impurities without stripping skin of essential moisture.",image:BA}]}}},"daily-care":{title:"Daily Care",description:"Essential daily skincare products for healthy, protected, and nourished skin every day.",bannerImage:GA,subcategories:{sunscreen:{title:"Sunscreen",products:[{id:8,name:"Sinceva SPF 50+ Daily SunCare Cream 100 ml",price:49.99,description:"Broad spectrum protection with lightweight, non-greasy formula perfect for daily use.",image:DA}]},moisturizer:{title:"Moisturizer",products:[{id:9,name:"Sinceva Hyaluronic Acid Moisturizing Cream 50 ml",price:64.99,description:"Deep hydration with hyaluronic acid for plump, smooth, and supple skin all day long.",image:FA}]}}}},nl={title:"All Our Products",subtitle:"Discover our complete collection of premium skincare solutions, expertly crafted for every skin type and concern.",products:Object.values(Em).flatMap(e=>Object.values(e.subcategories).flatMap(t=>t.products))},UA={title:"Explore Our Categories",subtitle:"Curated collections designed to address your unique skincare needs with precision and care.",categories:[{id:"anti-aging",titleKey:"categories.antiAging.title",descriptionKey:"categories.antiAging.description",href:"/category/anti-aging-care",gradient:"from-purple-600 to-pink-600",image:_A},{id:"cleansing",titleKey:"categories.cleansing.title",descriptionKey:"categories.cleansing.description",href:"/category/face-and-skin-cleansing",gradient:"from-blue-600 to-teal-600",image:KA},{id:"daily-care",titleKey:"categories.dailyCare.title",descriptionKey:"categories.dailyCare.description",href:"/category/daily-care",gradient:"from-green-600 to-emerald-600",image:HA}]},YA={brand:{name:"Sinceva",tagline:"Beauty redefined"},mainNavigation:[{name:"Home",href:"/"},{name:"Shop",href:"/shop",hasMegaMenu:!0},{name:"About",href:"/about"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact"}],megaMenuCategories:[{category:"Anti-Aging Care",items:[{name:"Face Serum",href:"/category/anti-aging-care/face-serum"},{name:"Eye Care",href:"/category/anti-aging-care/eye-care"},{name:"Anti-Wrinkle Care",href:"/category/anti-aging-care/anti-wrinkle-care"}]},{category:"Face & Skin Cleansing",items:[{name:"Toner",href:"/category/face-and-skin-cleansing/toner"},{name:"Peeling / Exfoliator",href:"/category/face-and-skin-cleansing/peeling-exfoliator"},{name:"Foaming Cleanser",href:"/category/face-and-skin-cleansing/foaming-cleanser"}]},{category:"Daily Care",items:[{name:"Sunscreen",href:"/category/daily-care/sunscreen"},{name:"Moisturizer",href:"/category/daily-care/moisturizer"}]}]},Dr={desktop:{white:AA,black:NA},mobile:{white:PA,black:jA},fallback:{text:"Sinceva",showText:!0}},pv=f.createContext(void 0),Be=()=>{const e=f.useContext(pv);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e},VA=({children:e})=>{const[t,n]=f.useState(()=>localStorage.getItem("language")||"tr"),r=i=>{n(i),localStorage.setItem("language",i),i==="ar"?(document.documentElement.dir="rtl",document.documentElement.lang="ar"):(document.documentElement.dir="ltr",document.documentElement.lang=i)};return f.useEffect(()=>{t==="ar"?(document.documentElement.dir="rtl",document.documentElement.lang="ar"):(document.documentElement.dir="ltr",document.documentElement.lang=t)},[]),o.jsx(pv.Provider,{value:{language:t,setLanguage:r},children:e})},at={en:{productDetails:"Product Details",ingredients:"Ingredients",howToUse:"How To Use",faq:"Frequently Asked Questions",buy:"Buy",discoverProducts:"Discover Sinceva Products",productNotFound:"Product Not Found",productNotFoundDesc:"The requested product could not be found.",home:"ANCIENT SHINE",shop:"Shop",about:"About",blogNav:"Blog",contact:"Contact",contactNav:"TOUCH TO BEAUTY",searchPlaceholder:"Search products...",quickLinks:"Quick Links",policies:"Policies",stayConnected:"Stay Connected",newsletterDesc:"Subscribe to get beauty tips and exclusive offers.",enterEmail:"Enter your email",subscribe:"Subscribe",allRightsReserved:"All rights reserved.",craftedFor:"Crafted for timeless beauty and elegance.",theOriginOfBeauty:"The Origin Of Beauty",trendsAndTips:"Trends & Tips",privacyPolicy:"Privacy Policy",cookiePolicy:"Cookie Policy",termsAndConditions:"Terms and Conditions",consumerReviewRules:"Consumer Review Rules",aboutSinceva:"About Sinceva",aboutSubtitle:"Since Eva – the name that inspired our journey toward timeless beauty and elegance.",ourStory:"Our Story",firstTouchTitle:"The First Touch of Beauty",firstTouchText:"Sinceva was born from an ancient symbol: the apple. From the moment Eve reached out her hand, the apple has stood for beginnings curiosity, transformation, and the essence of beauty itself. For us, it is not only the fruit of a story; it is the root of our philosophy. Just as beauty began at that timeless moment, we believe true beauty begins with the first touch of skincare.",timelessHeritageTitle:"A Timeless Heritage",timelessHeritageText:"We see the apple as more than nature's gift it is a bridge between past and present. Its purity, vitality, and renewing power are woven into each formula, blending ancestral wisdom with modern cosmetic science. With Sinceva, skincare is not just a routine but a heritage of self-care, echoing the eternal journey of beauty through time.",guidedByMissionTitle:"Guided by Our Mission",guidedByMissionText:`Our motto, "The Origin of Beauty," carries a double truth. It honors humanity's first story Since Eva and it reminds every woman that beauty starts not with makeup, but with the skin beneath. With every product, we reaffirm our mission: to protect, renew, and illuminate, so that beauty always begins at the right place, Since Eva, since the very first touch.`,ourValues:"Our Values",passionForBeauty:"Passion for Beauty",passionDesc:"We believe every person deserves to feel beautiful and confident in their own skin.",naturalExcellence:"Natural Excellence",naturalDesc:"Our products combine the best of nature with advanced skincare science.",qualityFirst:"Quality First",qualityDesc:"Every product undergoes rigorous testing to ensure the highest quality standards.",sustainableFuture:"Sustainable Future",sustainableDesc:"We are committed to sustainable practices and environmental responsibility.",committedToSustainability:"Committed to Sustainability",sustainabilityText1:"At Sinceva, we recognize our responsibility to protect the environment for future generations. Our sustainability initiatives include eco-friendly packaging, ethically sourced ingredients, and partnerships with suppliers who share our commitment to environmental stewardship.",sustainabilityText2:"We continuously strive to reduce our carbon footprint while maintaining the highest quality standards. Because we believe that true beauty should never come at the expense of our planet's wellbeing.",contactUs:"Contact Us",contactSubtitle:"Have questions about our products or need skincare advice? We're here to help you on your beauty journey.",sendMessage:"Send us a Message",fullName:"Full Name",emailAddress:"Email Address",subject:"Subject",message:"Message",sendMessageBtn:"Send Message",getInTouch:"Get in Touch",address:"Address",phone:"Phone",email:"Email",businessHours:"Business Hours",visitStore:"Visit Our Store",interactiveMap:"Interactive Map",mapIntegration:"Google Maps integration would go here",addressContent:`Beauty District, Cosmetics Avenue
Skincare Plaza, 12345`,phoneContent:"+1 (555) 123-4567",emailContent:"info@sinceva.com",hoursContent:`Mon - Fri: 9:00 AM - 6:00 PM
Sat - Sun: 10:00 AM - 4:00 PM`,enterFullName:"Enter your full name",enterEmailPlaceholder:"Enter your email",subjectPlaceholder:"What is your message about?",messagePlaceholder:"Tell us how we can help you...",messageSentSuccess:"Message Sent Successfully",messageSentDesc:"We'll get back to you within 24 hours.",blogPost1Title:"Winter Skincare Routine: Essential Steps for Cold Weather",blogPost1Excerpt:"Discover how to adapt your skincare routine during winter months to keep your skin hydrated and glowing despite the harsh weather conditions.",blogPost2Title:"The Power of Vitamin C: Transform Your Skin",blogPost2Excerpt:"Learn about the incredible benefits of Vitamin C serum and why it should be a staple in your daily skincare routine for brighter, more even-toned skin.",blogPost3Title:"Anti-Aging Secrets: Start in Your 20s",blogPost3Excerpt:"It's never too early to start taking care of your skin. Discover the essential anti-aging practices you should incorporate into your routine today.",privacyPolicyTitle:"Privacy Policy",informationWeCollect:"Information We Collect",informationCollectText:"We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support.",personalIdentifiers:"Personal identifiers (name, email address, phone number)",billingAddresses:"Billing and shipping addresses",paymentInfo:"Payment information (processed securely by third-party providers)",purchaseHistory:"Purchase history and preferences",communicationPrefs:"Communication preferences",howWeUse:"How We Use Your Information",howWeUseText:"We use the information we collect to:",processOrders:"Process and fulfill your orders",provideSupport:"Provide customer service and support",sendMarketing:"Send you marketing communications (with your consent)",improveProducts:"Improve our products and services",complyLegal:"Comply with legal obligations",detectFraud:"Detect and prevent fraud or security incidents",informationSharing:"Information Sharing",informationSharingText:"We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:",serviceProviders:"Service providers who assist us in operating our website and business",legalRequirements:"Legal requirements or to protect our rights and safety",businessTransfers:"Business transfers (mergers, acquisitions, or asset sales)",dataSecurity:"Data Security",dataSecurityText:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",yourRights:"Your Rights",yourRightsText:"You have the right to:",accessInfo:"Access the personal information we hold about you",correctInfo:"Request correction of inaccurate information",deleteInfo:"Request deletion of your personal information",objectProcessing:"Object to or restrict processing of your information",withdrawConsent:"Withdraw consent where processing is based on consent",contactUsPolicy:"Contact Us",contactPolicyText:"If you have any questions about this Privacy Policy or our data practices, please contact us at:",lastUpdated:"Last updated:",termsTitle:"Terms and Conditions",acceptanceOfTerms:"Acceptance of Terms",acceptanceText:"By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",useLicense:"Use License",useLicenseText:"Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",modifyMaterials:"Modify or copy the materials",commercialUse:"Use the materials for any commercial purpose or for any public display",reverseEngineer:"Attempt to reverse engineer any software contained on our website",removeCopyright:"Remove any copyright or other proprietary notations from the materials",productInformation:"Product Information",productInfoText:"We strive to provide accurate product information on our website. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.",ordersPayment:"Orders and Payment",ordersPaymentText:"The following terms apply to orders and payments:",ordersSubject:"All orders are subject to acceptance and availability",reserveRight:"We reserve the right to refuse or cancel any order",paymentRequired:"Payment must be received before order processing",pricesSubject:"Prices are subject to change without notice",returnsRefunds:"Returns and Refunds",returnsText:"We offer a 14-day return policy for unopened products in their original packaging. Return shipping costs are the responsibility of the customer unless the return is due to our error.",limitationLiability:"Limitation of Liability",limitationText:"In no event shall Sinceva or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our website or products, even if we have been notified orally or in writing of the possibility of such damage.",governingLaw:"Governing Law",governingText:"These terms and conditions are governed by and construed in accordance with the laws of Turkey, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.",reviewRulesTitle:"Consumer Review Rules",reviewGuidelines:"Review Guidelines",reviewGuidelinesText:"We encourage honest and helpful reviews from our customers. To ensure the quality and authenticity of reviews on our platform, please follow these guidelines when submitting your review.",acceptableContent:"Acceptable Review Content",reviewsShouldText:"Reviews should:",basedOnExperience:"Be based on your personal experience with the product",honestFeedback:"Provide honest and constructive feedback",focusQuality:"Focus on product quality, effectiveness, and value",includeDetails:"Include specific details about your experience",respectfulLanguage:"Be respectful and appropriate in language",relevantProduct:"Be relevant to the product being reviewed",prohibitedContent:"Prohibited Content",reviewsMustNot:"Reviews must not contain:",offensiveLanguage:"Offensive, discriminatory, or inappropriate language",personalInfo:"Personal information about individuals",spamContent:"Spam, promotional content, or advertisements",falseInfo:"False or misleading information",violateIP:"Content that violates intellectual property rights",notPurchased:"Reviews for products you haven't purchased or used",defamatoryStatements:"Defamatory statements about competitors",reviewVerification:"Review Verification",verificationText:"To maintain authenticity, we may verify that reviewers have actually purchased the products they are reviewing. Verified purchase reviews will be clearly marked on our website.",moderationProcess:"Moderation Process",moderationText:"All reviews are subject to moderation before publication. We reserve the right to:",reviewApprove:"Review and approve submitted content",editRemove:"Edit or remove inappropriate content",rejectReviews:"Reject reviews that violate our guidelines",removeReported:"Remove reviews that are reported by users",incentivizedReviews:"Incentivized Reviews",incentivizedText:"Reviews in exchange for compensation, free products, or other incentives must be clearly disclosed. Failure to disclose such relationships may result in review removal and account suspension.",reportingReviews:"Reporting Inappropriate Reviews",reportingText:'If you find a review that violates our guidelines, please report it using the "Report Review" function or contact our customer service team.',reviewerRights:"Your Rights",reviewerRightsText:"As a reviewer, you retain ownership of your review content. However, by submitting a review, you grant us a license to use, display, and distribute your review on our platform and marketing materials.",cookiePolicyTitle:"Cookie Policy",whatAreCookies:"What Are Cookies?",cookiesDefinition:"Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work more efficiently and to provide reporting information.",typesOfCookies:"Types of Cookies We Use",necessaryCookies:"Necessary Cookies",necessaryText:"These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",analyticsCookies:"Analytics Cookies",analyticsText:"These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve our website's performance and user experience.",marketingCookies:"Marketing Cookies",marketingText:"These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.",howWeUseCookies:"How We Use Cookies",cookieUsageText:"We use cookies for the following purposes:",ensureFunction:"To ensure our website functions properly",rememberPreferences:"To remember your preferences and settings",analyzeTraffic:"To analyze website traffic and usage patterns",personalizedContent:"To provide personalized content and advertisements",improveSecurity:"To improve our website's security and performance",managingCookies:"Managing Your Cookie Preferences",managingText:"You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Please note that disabling cookies may affect the functionality of our website.",cookieBanner:"You can also manage your cookie preferences through our cookie consent banner that appears when you first visit our website.",thirdPartyCookies:"Third-Party Cookies",thirdPartyText:"Some cookies on our website are placed by third-party services. We have no control over these cookies and they are governed by the privacy policies of the respective third parties.",productNames:{1:"Sinceva Brightening Vitamin C Serum 30 ml",2:"Sinceva Anti-Spot Arbutin Serum 30 ml",3:"Sinceva Anti-Wrinkle Eye Cream 20 ml",4:"Sinceva Anti-Aging Night Cream 50 ml",5:"Sinceva Skin Renewing Tonic 200 ml",6:"Sinceva Purifying Peeling Cream Scrub 200 ml",7:"Sinceva Purifying Face Cleansing Foam 200 ml",8:"Sinceva SPF 50+ Daily SunCare Cream 100 ml",9:"Sinceva Hyaluronic Acid Moisturizing Cream 50 ml"},blog:{title:"Trends & Tips",searchPlaceholder:"Search articles...",categories:{all:"All Posts",trends:"Skincare Tips",skincare:"Anti-Aging",ingredients:"Seasonal Care",routine:"Ingredient Focus"},readMore:"Read More"},homepage:{categoriesTitle:"Explore Our Categories",categoriesSubtitle:"Discover Sinceva's carefully curated collections, sensitively prepared for your skin's needs.",exploreCollection:"Explore Collection",allProductsTitle:"All Our Products",allProductsSubtitle:"Discover Sinceva collections inspired by the origin of beauty, carefully crafted for every skin type.",loadMore:"Load More Products"},productCard:{buyNow:"Buy Now",available:"available"},categories:{antiAging:{title:"Anti-Aging Care",description:"Advanced formulas to reduce fine lines, boost collagen, and restore youthful radiance to your skin."},cleansing:{title:"Face & Skin Cleansing",description:"Gentle yet effective cleansers that purify your skin while maintaining its natural moisture balance."},dailyCare:{title:"Daily Care",description:"Essential daily skincare products for healthy, protected, and nourished skin every day."}}},tr:{productDetails:"Ürün Detayları",ingredients:"İçindekiler",howToUse:"Nasıl Kullanılır",faq:"Sıkça Sorulan Sorular",buy:"Satın Al",discoverProducts:"Sinceva Ürünlerini Keşfedin",productNotFound:"Ürün Bulunamadı",productNotFoundDesc:"İstenen ürün bulunamadı.",home:"KADİM IŞILTI",shop:"Mağaza",about:"Hakkımızda",blogNav:"Blog",contact:"İletişim",contactNav:"GÜZELLİĞE DOKUNUN",searchPlaceholder:"Ürün ara...",quickLinks:"Hızlı Bağlantılar",policies:"Politikalar",stayConnected:"Bağlantıda Kalın",newsletterDesc:"Güzellik ipuçları ve özel teklifler için abone olun.",enterEmail:"E-posta adresinizi girin",subscribe:"Abone Ol",allRightsReserved:"Tüm hakları saklıdır.",craftedFor:"Zamansız güzellik ve zarafet için hazırlandı.",theOriginOfBeauty:"The Origin Of Beauty",trendsAndTips:"Trendler ve İpuçları",privacyPolicy:"Gizlilik Politikası",cookiePolicy:"Çerez Politikası",termsAndConditions:"Kullanım Koşulları",consumerReviewRules:"Tüketici Değerlendirme Kuralları",aboutSinceva:"Sinceva Hakkında",aboutSubtitle:"Since Eva – zamansız güzellik ve zarafete yolculuğumuza ilham veren isim.",ourStory:"Hikayemiz",firstTouchTitle:"Güzelliğin İlk Dokunuşu",firstTouchText:"Sinceva, eski bir sembolden doğdu: elma. Havva'nın elini uzattığı andan itibaren elma, başlangıçları, merakı, dönüşümü ve güzelliğin özünü temsil etti. Bizim için bu sadece bir hikayenin meyvesi değil; felsefemizin köküdür. Güzellik o zamansız anda başladığı gibi, biz de gerçek güzelliğin cilt bakımının ilk dokunuşuyla başladığına inanıyoruz.",timelessHeritageTitle:"Zamansız Bir Miras",timelessHeritageText:"Elmayı doğanın armağanından daha fazlası olarak görüyoruz; geçmiş ve gelecek arasında bir köprüdür. Saflığı, canlılığı ve yenileyici gücü, atalarımızın bilgeliğini modern kozmetik bilimiyle harmanlayarak her formülümüze dokunmuştur. Sinceva ile cilt bakımı sadece bir rutin değil, zamandan zamana güzellik yolculuğunu yankılayan bir öz bakım mirasıdır.",guidedByMissionTitle:"Misyonumuzun Rehberliğinde",guidedByMissionText:`Motomuz "The Origin of Beauty", ikili bir gerçeği taşır. İnsanlığın ilk hikayesine, Since Eva'ya saygı duyar ve her kadına güzelliğin makyajla değil, altındaki ciltle başladığını hatırlatır. Her ürünümüzle misyonumuzu yeniden teyit ediyoruz: korumak, yenilemek ve aydınlatmak, böylece güzellik her zaman doğru yerden başlasın, Since Eva'dan, tam o ilk dokunuştan.`,ourValues:"Değerlerimiz",passionForBeauty:"Güzellik Tutkusu",passionDesc:"Her insanın kendi teninde güzel ve özgüvenli hissetmeyi hak ettiğine inanıyoruz.",naturalExcellence:"Doğal Mükemmellik",naturalDesc:"Ürünlerimiz doğanın en iyisini gelişmiş cilt bakım bilimiyle bir araya getirir.",qualityFirst:"Önce Kalite",qualityDesc:"Her ürün en yüksek kalite standartlarını sağlamak için titiz testlerden geçer.",sustainableFuture:"Sürdürülebilir Gelecek",sustainableDesc:"Sürdürülebilir uygulamalara ve çevresel sorumluluğa bağlıyız.",committedToSustainability:"Sürdürülebilirliğe Bağlılık",sustainabilityText1:"Sinceva'da, gelecek nesiller için çevreyi koruma sorumluluğumuzu kabul ediyoruz. Sürdürülebilirlik girişimlerimiz çevre dostu ambalaj, etik kaynaklı içerikler ve çevresel yönetim taahhüdümüzü paylaşan tedarikçilerle ortaklıkları içerir.",sustainabilityText2:"En yüksek kalite standartlarını korurken karbon ayak izimizi sürekli azaltmaya çalışıyoruz. Çünkü gerçek güzelliğin asla gezegenimizin refahı pahasına gelmemesi gerektiğine inanıyoruz.",contactUs:"İletişim",contactSubtitle:"Ürünlerimiz hakkında sorularınız mı var veya cilt bakımı tavsiyesine mi ihtiyacınız var? Güzellik yolculuğunuzda size yardımcı olmak için buradayız.",sendMessage:"Bize Mesaj Gönderin",fullName:"Ad Soyad",emailAddress:"E-posta Adresi",subject:"Konu",message:"Mesaj",sendMessageBtn:"Mesaj Gönder",getInTouch:"Bize Ulaşın",address:"Adres",phone:"Telefon",email:"E-posta",businessHours:"Çalışma Saatleri",visitStore:"Mağazamızı Ziyaret Edin",interactiveMap:"İnteraktif Harita",mapIntegration:"Google Haritalar entegrasyonu buraya gelecek",addressContent:`Güzellik Bölgesi, Kozmetik Caddesi
Cilt Bakım Plaza, 12345`,phoneContent:"+1 (555) 123-4567",emailContent:"info@sinceva.com",hoursContent:`Pzt - Cum: 09:00 - 18:00
Cmt - Paz: 10:00 - 16:00`,enterFullName:"Adınızı ve soyadınızı girin",enterEmailPlaceholder:"E-posta adresinizi girin",subjectPlaceholder:"Mesajınız ne hakkında?",messagePlaceholder:"Size nasıl yardımcı olabileceğimizi söyleyin...",messageSentSuccess:"Mesaj Başarıyla Gönderildi",messageSentDesc:"24 saat içinde size geri döneceğiz.",blogPost1Title:"Kış Cilt Bakım Rutini: Soğuk Hava İçin Temel Adımlar",blogPost1Excerpt:"Sert hava koşullarına rağmen cildinizi nemli ve parlak tutmak için kış aylarında cilt bakım rutininizi nasıl uyarlayacağınızı keşfedin.",blogPost2Title:"C Vitamininin Gücü: Cildinizi Dönüştürün",blogPost2Excerpt:"C Vitamini serumunun inanılmaz faydalarını ve daha parlak, daha eşit tonlu bir cilt için günlük cilt bakım rutininizde neden vazgeçilmez olması gerektiğini öğrenin.",blogPost3Title:"Yaşlanma Karşıtı Sırlar: 20'li Yaşlarınızda Başlayın",blogPost3Excerpt:"Cildinizle ilgilenmeye başlamak için asla çok erken değil. Bugün rutininize dahil etmeniz gereken temel yaşlanma karşıtı uygulamaları keşfedin.",privacyPolicyTitle:"Gizlilik Politikası",informationWeCollect:"Topladığımız Bilgiler",informationCollectText:"Bir hesap oluşturduğunuzda, satın alma yaptığınızda, bültenimize abone olduğunuzda veya destek için bizimle iletişime geçtiğinizde doğrudan bize sağladığınız bilgileri topluyoruz.",personalIdentifiers:"Kişisel tanımlayıcılar (ad, e-posta adresi, telefon numarası)",billingAddresses:"Fatura ve teslimat adresleri",paymentInfo:"Ödeme bilgileri (üçüncü taraf sağlayıcılar tarafından güvenli bir şekilde işlenir)",purchaseHistory:"Satın alma geçmişi ve tercihleri",communicationPrefs:"İletişim tercihleri",howWeUse:"Bilgilerinizi Nasıl Kullanıyoruz",howWeUseText:"Topladığımız bilgileri şunlar için kullanıyoruz:",processOrders:"Siparişlerinizi işlemek ve yerine getirmek",provideSupport:"Müşteri hizmeti ve destek sağlamak",sendMarketing:"Size pazarlama iletişimleri göndermek (izninizle)",improveProducts:"Ürün ve hizmetlerimizi geliştirmek",complyLegal:"Yasal yükümlülüklere uymak",detectFraud:"Dolandırıcılık veya güvenlik olaylarını tespit etmek ve önlemek",informationSharing:"Bilgi Paylaşımı",informationSharingText:"Aşağıdaki durumlar dışında, kişisel bilgilerinizi izniniz olmadan üçüncü taraflara satmıyor, takas etmiyor veya başka şekilde aktarmıyoruz:",serviceProviders:"Web sitemizi ve işimizi işletmemize yardımcı olan hizmet sağlayıcılar",legalRequirements:"Yasal gereklilikler veya haklarımızı ve güvenliğimizi korumak için",businessTransfers:"İş transferleri (birleşmeler, satın almalar veya varlık satışları)",dataSecurity:"Veri Güvenliği",dataSecurityText:"Kişisel bilgilerinizi yetkisiz erişime, değiştirmeye, ifşa etmeye veya yok etmeye karşı korumak için uygun teknik ve organizasyonel önlemler uyguluyoruz.",yourRights:"Haklarınız",yourRightsText:"Şunları yapma hakkınız vardır:",accessInfo:"Hakkınızda tuttuğumuz kişisel bilgilere erişim",correctInfo:"Yanlış bilgilerin düzeltilmesini talep etme",deleteInfo:"Kişisel bilgilerinizin silinmesini talep etme",objectProcessing:"Bilgilerinizin işlenmesine itiraz etme veya kısıtlama",withdrawConsent:"İşlemenin rızaya dayandığı durumlarda rızayı geri çekme",contactUsPolicy:"Bize Ulaşın",contactPolicyText:"Bu Gizlilik Politikası veya veri uygulamalarımız hakkında sorularınız varsa, lütfen bizimle iletişime geçin:",lastUpdated:"Son güncelleme:",termsTitle:"Kullanım Koşulları",acceptanceOfTerms:"Koşulların Kabulü",acceptanceText:"Bu web sitesine erişerek ve kullanarak, bu anlaşmanın hüküm ve koşullarına bağlı kalmayı kabul edersiniz. Yukarıdakilere uymayı kabul etmiyorsanız, lütfen bu hizmeti kullanmayın.",useLicense:"Kullanım Lisansı",useLicenseText:"Web sitemizdeki materyallerin bir kopyasını yalnızca kişisel, ticari olmayan geçici görüntüleme için geçici olarak indirme izni verilmiştir. Bu bir lisans verilmesidir, mülkiyet devri değildir ve bu lisans altında şunları yapamazsınız:",modifyMaterials:"Materyalleri değiştirme veya kopyalama",commercialUse:"Materyalleri herhangi bir ticari amaç veya halka açık gösterim için kullanma",reverseEngineer:"Web sitemizde bulunan herhangi bir yazılımı tersine mühendislik yapmaya çalışma",removeCopyright:"Materyallerden herhangi bir telif hakkı veya diğer mülkiyet bildirimlerini kaldırma",productInformation:"Ürün Bilgileri",productInfoText:"Web sitemizde doğru ürün bilgileri sağlamaya çalışıyoruz. Ancak, ürün açıklamalarının, fiyatlandırmanın veya diğer içeriğin doğru, eksiksiz, güvenilir, güncel veya hatasız olduğunu garanti etmiyoruz.",ordersPayment:"Siparişler ve Ödeme",ordersPaymentText:"Siparişler ve ödemeler için aşağıdaki koşullar geçerlidir:",ordersSubject:"Tüm siparişler kabul ve kullanılabilirliğe tabidir",reserveRight:"Herhangi bir siparişi reddetme veya iptal etme hakkını saklı tutarız",paymentRequired:"Sipariş işlenmeden önce ödeme alınmalıdır",pricesSubject:"Fiyatlar önceden haber verilmeksizin değiştirilebilir",returnsRefunds:"İadeler ve Geri Ödemeler",returnsText:"Orijinal ambalajında açılmamış ürünler için 14 günlük iade politikası sunuyoruz. İadenin bizim hatamızdan kaynaklanmadığı sürece iade nakliye masrafları müşterinin sorumluluğundadır.",limitationLiability:"Sorumluluk Sınırlaması",limitationText:"Sinceva veya tedarikçileri, sözlü veya yazılı olarak bu tür bir hasarın olasılığından haberdar edilmiş olsalar bile, web sitemizin veya ürünlerimizin kullanımından veya kullanılamamasından kaynaklanan herhangi bir hasardan (veri veya kar kaybına bağlı hasarlar veya iş kesintisinden kaynaklanan hasarlar dahil ancak bunlarla sınırlı olmamak üzere) hiçbir durumda sorumlu tutulamaz.",governingLaw:"Geçerli Kanun",governingText:"Bu şartlar ve koşullar Türkiye yasalarına göre yönetilir ve yorumlanır ve bu eyaletteki veya konumdaki mahkemelerin münhasır yargı yetkisine geri dönülemez bir şekilde tabi olursunuz.",reviewRulesTitle:"Tüketici Değerlendirme Kuralları",reviewGuidelines:"Değerlendirme Yönergeleri",reviewGuidelinesText:"Müşterilerimizden dürüst ve yararlı değerlendirmeler almayı teşvik ediyoruz. Platformumuzda değerlendirmelerin kalitesini ve özgünlüğünü sağlamak için, değerlendirmenizi gönderirken lütfen bu yönergeleri izleyin.",acceptableContent:"Kabul Edilebilir Değerlendirme İçeriği",reviewsShouldText:"Değerlendirmeler şunları içermelidir:",basedOnExperience:"Ürünle ilgili kişisel deneyiminize dayanmalı",honestFeedback:"Dürüst ve yapıcı geri bildirim sağlamalı",focusQuality:"Ürün kalitesi, etkinliği ve değerine odaklanmalı",includeDetails:"Deneyiminiz hakkında belirli ayrıntılar içermeli",respectfulLanguage:"Saygılı ve uygun bir dil kullanmalı",relevantProduct:"Değerlendirilen ürünle ilgili olmalı",prohibitedContent:"Yasak İçerik",reviewsMustNot:"Değerlendirmeler şunları içermemelidir:",offensiveLanguage:"Saldırgan, ayrımcı veya uygunsuz dil",personalInfo:"Bireyler hakkında kişisel bilgiler",spamContent:"Spam, tanıtım içeriği veya reklamlar",falseInfo:"Yanlış veya yanıltıcı bilgiler",violateIP:"Fikri mülkiyet haklarını ihlal eden içerik",notPurchased:"Satın almadığınız veya kullanmadığınız ürünler için değerlendirmeler",defamatoryStatements:"Rakipler hakkında karalayıcı ifadeler",reviewVerification:"Değerlendirme Doğrulaması",verificationText:"Özgünlüğü korumak için, değerlendirmecilerin gerçekten değerlendirdikleri ürünleri satın aldıklarını doğrulayabiliriz. Doğrulanmış satın alma değerlendirmeleri web sitemizde açıkça işaretlenecektir.",moderationProcess:"Moderasyon Süreci",moderationText:"Tüm değerlendirmeler yayınlanmadan önce moderasyona tabidir. Şunları yapma hakkını saklı tutarız:",reviewApprove:"Gönderilen içeriği inceleme ve onaylama",editRemove:"Uygunsuz içeriği düzenleme veya kaldırma",rejectReviews:"Yönergelerimizi ihlal eden değerlendirmeleri reddetme",removeReported:"Kullanıcılar tarafından bildirilen değerlendirmeleri kaldırma",incentivizedReviews:"Teşvikli Değerlendirmeler",incentivizedText:"Tazminat, ücretsiz ürünler veya diğer teşvikler karşılığında yapılan değerlendirmeler açıkça belirtilmelidir. Bu tür ilişkileri açıklamamak, değerlendirmenin kaldırılmasına ve hesabın askıya alınmasına neden olabilir.",reportingReviews:"Uygunsuz Değerlendirmeleri Bildirme",reportingText:'Yönergelerimizi ihlal eden bir değerlendirme bulursanız, lütfen "Değerlendirmeyi Bildir" işlevini kullanarak bildirin veya müşteri hizmetleri ekibimizle iletişime geçin.',reviewerRights:"Haklarınız",reviewerRightsText:"Bir değerlendirici olarak, değerlendirme içeriğinizin sahipliğini korursunuz. Ancak, bir değerlendirme göndererek, platformumuzda ve pazarlama materyallerimizde değerlendirmenizi kullanma, görüntüleme ve dağıtma lisansını bize vermiş olursunuz.",cookiePolicyTitle:"Çerez Politikası",whatAreCookies:"Çerezler Nedir?",cookiesDefinition:"Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza yerleştirilen küçük veri dosyalarıdır. Çerezler, web sitesi sahipleri tarafından web sitelerini daha verimli çalıştırmak ve raporlama bilgileri sağlamak için yaygın olarak kullanılır.",typesOfCookies:"Kullandığımız Çerez Türleri",necessaryCookies:"Gerekli Çerezler",necessaryText:"Bu çerezler, web sitesinin düzgün çalışması için gereklidir. Sayfa gezintisi ve web sitesinin güvenli alanlarına erişim gibi temel işlevleri etkinleştirirler. Web sitesi bu çerezler olmadan düzgün çalışamaz.",analyticsCookies:"Analitik Çerezler",analyticsText:"Bu çerezler, ziyaretçilerin web sitemizle nasıl etkileşime girdiğini anonim olarak bilgi toplayıp rapor ederek anlamamıza yardımcı olur. Bu veriler, web sitemizin performansını ve kullanıcı deneyimini geliştirmemize yardımcı olur.",marketingCookies:"Pazarlama Çerezleri",marketingText:"Bu çerezler, ziyaretçileri web siteleri arasında izlemek için kullanılır. Amaç, bireysel kullanıcı için alakalı ve ilgi çekici ve dolayısıyla yayıncılar ve üçüncü taraf reklamverenler için daha değerli reklamlar görüntülemektir.",howWeUseCookies:"Çerezleri Nasıl Kullanıyoruz",cookieUsageText:"Çerezleri aşağıdaki amaçlar için kullanıyoruz:",ensureFunction:"Web sitemizin düzgün çalışmasını sağlamak için",rememberPreferences:"Tercihlerinizi ve ayarlarınızı hatırlamak için",analyzeTraffic:"Web sitesi trafiğini ve kullanım modellerini analiz etmek için",personalizedContent:"Kişiselleştirilmiş içerik ve reklamlar sağlamak için",improveSecurity:"Web sitemizin güvenliğini ve performansını artırmak için",managingCookies:"Çerez Tercihlerinizi Yönetme",managingText:"Çerezleri çeşitli şekillerde kontrol edebilir ve yönetebilirsiniz. Çoğu web tarayıcısı otomatik olarak çerezleri kabul eder, ancak tercih ederseniz çerezleri reddetmek için tarayıcı ayarlarınızı değiştirebilirsiniz. Lütfen çerezleri devre dışı bırakmanın web sitemizin işlevselliğini etkileyebileceğini unutmayın.",cookieBanner:"Web sitemizi ilk ziyaret ettiğinizde görünen çerez onayı banner'ımız aracılığıyla da çerez tercihlerinizi yönetebilirsiniz.",thirdPartyCookies:"Üçüncü Taraf Çerezleri",thirdPartyText:"Web sitemizdeki bazı çerezler üçüncü taraf hizmetler tarafından yerleştirilir. Bu çerezler üzerinde kontrolümüz yoktur ve ilgili üçüncü tarafların gizlilik politikalarına tabidir.",productNames:{1:"Sinceva Aydınlatıcı Vitamin C Serum 30 ml",2:"Sinceva Leke Karşıtı Arbutin Serum 30 ml",3:"Sinceva Kırışıklık Karşıtı Göz Kremi 20 ml",4:"Sinceva Yaşlanma Karşıtı Gece Kremi 50 ml",5:"Sinceva Cilt Yenileyici Tonik 200 ml",6:"Sinceva Arındırıcı Peeling Krem Scrub 200 ml",7:"Sinceva Arındırıcı Yüz Temizleme Köpüğü 200 ml",8:"Sinceva SPF 50+ Günlük Güneş Koruyucu Krem 100 ml",9:"Sinceva Hyaluronik Asit Nemlendirici Krem 50 ml"},blog:{title:"Trendler ve İpuçları",searchPlaceholder:"Makale ara...",categories:{all:"Tüm Gönderiler",trends:"Cilt Bakımı İpuçları",skincare:"Yaşlanma Karşıtı",ingredients:"Mevsimsel Bakım",routine:"İçerik Odaklı"},readMore:"Devamını Oku"},homepage:{categoriesTitle:"Kategorilerimizi Keşfedin",categoriesSubtitle:"Cildinizin ihtiyaçlarına duyarlılıkla hazırlanmış, özenle seçilmiş Sinceva koleksiyonlarını keşfedin.",exploreCollection:"Koleksiyonu Keşfet",allProductsTitle:"Tüm Ürünlerimiz",allProductsSubtitle:"Güzelliğin başlangıcından ilham alan, her cilt tipi için özenle hazırlanmış Sinceva koleksiyonlarını keşfedin.",loadMore:"Daha Fazla Ürün Yükle"},productCard:{buyNow:"Satın Al",available:"mevcut"},categories:{antiAging:{title:"Yaşlanma Karşıtı Bakım",description:"İnce çizgileri azaltmak, kolajen artırmak ve cildinize gençlik parlaklığını geri kazandırmak için gelişmiş formüller."},cleansing:{title:"Yüz ve Cilt Temizleme",description:"Cildinizi doğal nem dengesini koruyarak arındıran nazik ama etkili temizleyiciler."},dailyCare:{title:"Günlük Bakım",description:"Her gün sağlıklı, korunaklı ve beslenmiş cilt için vazgeçilmez günlük cilt bakım ürünleri."}}},ar:{productDetails:"تفاصيل المنتج",ingredients:"المكونات",howToUse:"طريقة الاستخدام",faq:"الأسئلة الشائعة",buy:"شراء",discoverProducts:"اكتشف منتجات سينسإيفا",productNotFound:"المنتج غير موجود",productNotFoundDesc:"المنتج المطلوب غير موجود.",home:"اللمعان القديم",shop:"المتجر",about:"من نحن",blogNav:"المدونة",contact:"اتصل بنا",contactNav:"لمسة الجمال",searchPlaceholder:"البحث عن المنتجات...",quickLinks:"روابط سريعة",policies:"السياسات",stayConnected:"ابق على اتصال",newsletterDesc:"اشترك للحصول على نصائح الجمال والعروض الحصرية.",enterEmail:"أدخل بريدك الإلكتروني",subscribe:"اشترك",allRightsReserved:"جميع الحقوق محفوظة.",craftedFor:"صُنعت من أجل الجمال والأناقة الخالدة.",theOriginOfBeauty:"The Origin Of Beauty",trendsAndTips:"الاتجاهات والنصائح",privacyPolicy:"سياسة الخصوصية",cookiePolicy:"سياسة ملفات تعريف الارتباط",termsAndConditions:"الشروط والأحكام",consumerReviewRules:"قواعد تقييم المستهلك",aboutSinceva:"عن سينسإيفا",aboutSubtitle:"منذ حواء - الاسم الذي ألهم رحلتنا نحو الجمال والأناقة الخالدة.",ourStory:"قصتنا",firstTouchTitle:"اللمسة الأولى للجمال",firstTouchText:"ولدت سينسإيفا من رمز قديم: التفاحة. منذ اللحظة التي مدت فيها حواء يدها، رمزت التفاحة إلى البدايات والفضول والتحول وجوهر الجمال نفسه. بالنسبة لنا، ليست مجرد ثمرة قصة؛ إنها جذر فلسفتنا. كما بدأ الجمال في تلك اللحظة الخالدة، نؤمن أن الجمال الحقيقي يبدأ باللمسة الأولى للعناية بالبشرة.",timelessHeritageTitle:"تراث خالد",timelessHeritageText:"نرى التفاحة أكثر من مجرد هدية الطبيعة؛ إنها جسر بين الماضي والحاضر. نقاؤها وحيويتها وقوتها المتجددة منسوجة في كل تركيبة، تمزج الحكمة الموروثة مع علم التجميل الحديث. مع سينسإيفا، العناية بالبشرة ليست مجرد روتين ولكن تراث من الرعاية الذاتية، يعكس الرحلة الأبدية للجمال عبر الزمن.",guidedByMissionTitle:"موجهون بمهمتنا",guidedByMissionText:'شعارنا "The Origin of Beauty" يحمل حقيقة مزدوجة. إنه يكرم قصة البشرية الأولى منذ حواء ويذكر كل امرأة أن الجمال لا يبدأ بالمكياج، بل بالبشرة تحته. مع كل منتج، نؤكد من جديد مهمتنا: الحماية والتجديد والإضاءة، حتى يبدأ الجمال دائمًا في المكان الصحيح، منذ حواء، منذ تلك اللمسة الأولى.',ourValues:"قيمنا",passionForBeauty:"شغف بالجمال",passionDesc:"نؤمن بأن كل شخص يستحق أن يشعر بالجمال والثقة في بشرته.",naturalExcellence:"التميز الطبيعي",naturalDesc:"تجمع منتجاتنا أفضل ما في الطبيعة مع علم العناية بالبشرة المتقدم.",qualityFirst:"الجودة أولاً",qualityDesc:"يخضع كل منتج لاختبارات صارمة لضمان أعلى معايير الجودة.",sustainableFuture:"مستقبل مستدام",sustainableDesc:"نحن ملتزمون بالممارسات المستدامة والمسؤولية البيئية.",committedToSustainability:"ملتزمون بالاستدامة",sustainabilityText1:"في سينسإيفا، ندرك مسؤوليتنا لحماية البيئة للأجيال القادمة. تشمل مبادرات الاستدامة لدينا التعبئة الصديقة للبيئة، والمكونات من مصادر أخلاقية، والشراكات مع الموردين الذين يشاركوننا التزامنا بالإشراف البيئي.",sustainabilityText2:"نسعى باستمرار لتقليل بصمتنا الكربونية مع الحفاظ على أعلى معايير الجودة. لأننا نؤمن بأن الجمال الحقيقي لا ينبغي أبدًا أن يأتي على حساب رفاهية كوكبنا.",contactUs:"اتصل بنا",contactSubtitle:"هل لديك أسئلة حول منتجاتنا أو تحتاج إلى نصيحة للعناية بالبشرة؟ نحن هنا لمساعدتك في رحلة جمالك.",sendMessage:"أرسل لنا رسالة",fullName:"الاسم الكامل",emailAddress:"عنوان البريد الإلكتروني",subject:"الموضوع",message:"الرسالة",sendMessageBtn:"إرسال الرسالة",getInTouch:"تواصل معنا",address:"العنوان",phone:"الهاتف",email:"البريد الإلكتروني",businessHours:"ساعات العمل",visitStore:"قم بزيارة متجرنا",interactiveMap:"خريطة تفاعلية",mapIntegration:"سيتم وضع تكامل خرائط Google هنا",addressContent:`منطقة الجمال، جادة مستحضرات التجميل
ساحة العناية بالبشرة، 12345`,phoneContent:"+1 (555) 123-4567",emailContent:"info@sinceva.com",hoursContent:`الإثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً
السبت - الأحد: 10:00 صباحًا - 4:00 مساءً`,enterFullName:"أدخل اسمك الكامل",enterEmailPlaceholder:"أدخل بريدك الإلكتروني",subjectPlaceholder:"ما هو موضوع رسالتك؟",messagePlaceholder:"أخبرنا كيف يمكننا مساعدتك...",messageSentSuccess:"تم إرسال الرسالة بنجاح",messageSentDesc:"سنعود إليك خلال 24 ساعة.",blogPost1Title:"روتين العناية بالبشرة في الشتاء: الخطوات الأساسية للطقس البارد",blogPost1Excerpt:"اكتشف كيفية تكييف روتين العناية بالبشرة خلال أشهر الشتاء للحفاظ على بشرتك رطبة ومتوهجة على الرغم من الظروف الجوية القاسية.",blogPost2Title:"قوة فيتامين سي: حوّل بشرتك",blogPost2Excerpt:"تعرف على الفوائد المذهلة لسيروم فيتامين سي ولماذا يجب أن يكون عنصرًا أساسيًا في روتين العناية اليومية ببشرتك للحصول على بشرة أكثر إشراقًا وتوحيدًا.",blogPost3Title:"أسرار مكافحة الشيخوخة: ابدأ في العشرينات من عمرك",blogPost3Excerpt:"لم يفت الأوان أبدًا للبدء في الاعتناء ببشرتك. اكتشف الممارسات الأساسية لمكافحة الشيخوخة التي يجب أن تدمجها في روتينك اليوم.",privacyPolicyTitle:"سياسة الخصوصية",informationWeCollect:"المعلومات التي نجمعها",informationCollectText:"نجمع المعلومات التي تقدمها لنا مباشرة، مثل عند إنشاء حساب، أو إجراء عملية شراء، أو الاشتراك في نشرتنا الإخبارية، أو الاتصال بنا للحصول على الدعم.",personalIdentifiers:"المعرفات الشخصية (الاسم، عنوان البريد الإلكتروني، رقم الهاتف)",billingAddresses:"عناوين الفوترة والشحن",paymentInfo:"معلومات الدفع (تتم معالجتها بشكل آمن من قبل مزودي طرف ثالث)",purchaseHistory:"سجل الشراء والتفضيلات",communicationPrefs:"تفضيلات الاتصال",howWeUse:"كيف نستخدم معلوماتك",howWeUseText:"نستخدم المعلومات التي نجمعها من أجل:",processOrders:"معالجة وتنفيذ طلباتك",provideSupport:"تقديم خدمة العملاء والدعم",sendMarketing:"إرسال اتصالات تسويقية إليك (بموافقتك)",improveProducts:"تحسين منتجاتنا وخدماتنا",complyLegal:"الامتثال للالتزامات القانونية",detectFraud:"كشف ومنع الاحتيال أو الحوادث الأمنية",informationSharing:"مشاركة المعلومات",informationSharingText:"نحن لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة دون موافقتك، إلا في الظروف التالية:",serviceProviders:"مقدمو الخدمات الذين يساعدوننا في تشغيل موقعنا وأعمالنا",legalRequirements:"المتطلبات القانونية أو لحماية حقوقنا وسلامتنا",businessTransfers:"تحويلات الأعمال (عمليات الدمج أو الاستحواذ أو مبيعات الأصول)",dataSecurity:"أمن البيانات",dataSecurityText:"نطبق تدابير فنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول أو التعديل أو الكشف أو التدمير غير المصرح به.",yourRights:"حقوقك",yourRightsText:"لديك الحق في:",accessInfo:"الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك",correctInfo:"طلب تصحيح المعلومات غير الدقيقة",deleteInfo:"طلب حذف معلوماتك الشخصية",objectProcessing:"الاعتراض على معالجة معلوماتك أو تقييدها",withdrawConsent:"سحب الموافقة حيث تستند المعالجة على الموافقة",contactUsPolicy:"اتصل بنا",contactPolicyText:"إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى الاتصال بنا على:",lastUpdated:"آخر تحديث:",termsTitle:"الشروط والأحكام",acceptanceOfTerms:"قبول الشروط",acceptanceText:"من خلال الوصول إلى هذا الموقع واستخدامه، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية. إذا كنت لا توافق على الالتزام بما سبق، يرجى عدم استخدام هذه الخدمة.",useLicense:"ترخيص الاستخدام",useLicenseText:"يُمنح الإذن بتنزيل نسخة واحدة مؤقتة من المواد على موقعنا للمشاهدة الشخصية غير التجارية المؤقتة فقط. هذا منح ترخيص، وليس نقل ملكية، وبموجب هذا الترخيص لا يجوز لك:",modifyMaterials:"تعديل أو نسخ المواد",commercialUse:"استخدام المواد لأي غرض تجاري أو لأي عرض عام",reverseEngineer:"محاولة الهندسة العكسية لأي برنامج موجود على موقعنا",removeCopyright:"إزالة أي حقوق نشر أو ملاحظات ملكية أخرى من المواد",productInformation:"معلومات المنتج",productInfoText:"نسعى جاهدين لتقديم معلومات دقيقة عن المنتج على موقعنا. ومع ذلك، فإننا لا نضمن أن أوصاف المنتج أو التسعير أو المحتوى الآخر دقيق أو كامل أو موثوق أو حالي أو خالٍ من الأخطاء.",ordersPayment:"الطلبات والدفع",ordersPaymentText:"تنطبق الشروط التالية على الطلبات والمدفوعات:",ordersSubject:"جميع الطلبات تخضع للقبول والتوافر",reserveRight:"نحتفظ بالحق في رفض أو إلغاء أي طلب",paymentRequired:"يجب استلام الدفع قبل معالجة الطلب",pricesSubject:"الأسعار قابلة للتغيير دون إشعار مسبق",returnsRefunds:"الإرجاع والاسترداد",returnsText:"نحن نقدم سياسة إرجاع لمدة 14 يومًا للمنتجات غير المفتوحة في عبواتها الأصلية. تكاليف شحن الإرجاع هي مسؤولية العميل ما لم يكن الإرجاع بسبب خطأنا.",limitationLiability:"تحديد المسؤولية",limitationText:"في أي حال من الأحوال لن تكون شركة سينسإيفا أو مورديها مسؤولين عن أي أضرار (بما في ذلك، على سبيل المثال لا الحصر، الأضرار الناجمة عن فقدان البيانات أو الربح، أو بسبب انقطاع الأعمال) الناشئة عن استخدام أو عدم القدرة على استخدام موقعنا أو منتجاتنا، حتى لو تم إخطارنا شفهيًا أو كتابيًا بإمكانية حدوث مثل هذا الضرر.",governingLaw:"القانون الحاكم",governingText:"تخضع هذه الشروط والأحكام وتُفسر وفقًا لقوانين تركيا، وأنت توافق بشكل لا رجعة فيه على الاختصاص القضائي الحصري للمحاكم في تلك الولاية أو الموقع.",reviewRulesTitle:"قواعد تقييم المستهلك",reviewGuidelines:"إرشادات التقييم",reviewGuidelinesText:"نشجع التقييمات الصادقة والمفيدة من عملائنا. لضمان جودة وأصالة التقييمات على منصتنا، يرجى اتباع هذه الإرشادات عند إرسال تقييمك.",acceptableContent:"محتوى التقييم المقبول",reviewsShouldText:"يجب أن تكون التقييمات:",basedOnExperience:"مبنية على تجربتك الشخصية مع المنتج",honestFeedback:"توفير ملاحظات صادقة وبناءة",focusQuality:"التركيز على جودة المنتج وفعاليته وقيمته",includeDetails:"تتضمن تفاصيل محددة حول تجربتك",respectfulLanguage:"محترمة ومناسبة في اللغة",relevantProduct:"ذات صلة بالمنتج الذي يتم تقييمه",prohibitedContent:"المحتوى المحظور",reviewsMustNot:"يجب ألا تحتوي التقييمات على:",offensiveLanguage:"لغة مسيئة أو تمييزية أو غير لائقة",personalInfo:"معلومات شخصية عن الأفراد",spamContent:"بريد عشوائي أو محتوى ترويجي أو إعلانات",falseInfo:"معلومات كاذبة أو مضللة",violateIP:"محتوى ينتهك حقوق الملكية الفكرية",notPurchased:"تقييمات للمنتجات التي لم تشتريها أو تستخدمها",defamatoryStatements:"بيانات تشهيرية عن المنافسين",reviewVerification:"التحقق من التقييم",verificationText:"للحفاظ على الأصالة، قد نتحقق من أن المراجعين قد اشتروا بالفعل المنتجات التي يراجعونها. ستتم وضع علامة واضحة على مراجعات الشراء الموثقة على موقعنا.",moderationProcess:"عملية الإشراف",moderationText:"جميع التقييمات تخضع للإشراف قبل النشر. نحتفظ بالحق في:",reviewApprove:"مراجعة والموافقة على المحتوى المقدم",editRemove:"تحرير أو إزالة المحتوى غير المناسب",rejectReviews:"رفض التقييمات التي تنتهك إرشاداتنا",removeReported:"إزالة التقييمات التي أبلغ عنها المستخدمون",incentivizedReviews:"التقييمات الممنوحة",incentivizedText:"يجب الإفصاح بوضوح عن التقييمات مقابل التعويض أو المنتجات المجانية أو الحوافز الأخرى. قد يؤدي الفشل في الكشف عن مثل هذه العلاقات إلى إزالة التقييم وتعليق الحساب.",reportingReviews:"الإبلاغ عن التقييمات غير المناسبة",reportingText:'إذا وجدت تقييمًا ينتهك إرشاداتنا، يرجى الإبلاغ عنه باستخدام وظيفة "الإبلاغ عن التقييم" أو الاتصال بفريق خدمة العملاء لدينا.',reviewerRights:"حقوقك",reviewerRightsText:"كمراجع، تحتفظ بملكية محتوى تقييمك. ومع ذلك، من خلال إرسال تقييم، فإنك تمنحنا ترخيصًا لاستخدام تقييمك وعرضه وتوزيعه على منصتنا ومواد التسويق الخاصة بنا.",cookiePolicyTitle:"سياسة ملفات تعريف الارتباط",whatAreCookies:"ما هي ملفات تعريف الارتباط؟",cookiesDefinition:"ملفات تعريف الارتباط هي ملفات بيانات صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك عند زيارة موقع ويب. تستخدم ملفات تعريف الارتباط على نطاق واسع من قبل مالكي مواقع الويب لجعل مواقعهم الإلكترونية تعمل بشكل أكثر كفاءة ولتقديم معلومات التقارير.",typesOfCookies:"أنواع ملفات تعريف الارتباط التي نستخدمها",necessaryCookies:"ملفات تعريف الارتباط الضرورية",necessaryText:"هذه الملفات ضرورية لكي يعمل الموقع بشكل صحيح. إنها تمكّن الوظائف الأساسية مثل التنقل في الصفحة والوصول إلى المناطق الآمنة في الموقع. لا يمكن أن يعمل الموقع بشكل صحيح بدون هذه الملفات.",analyticsCookies:"ملفات تعريف الارتباط التحليلية",analyticsText:"تساعدنا هذه الملفات على فهم كيفية تفاعل الزوار مع موقعنا من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول. تساعدنا هذه البيانات على تحسين أداء موقعنا وتجربة المستخدم.",marketingCookies:"ملفات تعريف الارتباط التسويقية",marketingText:"تُستخدم هذه الملفات لتتبع الزوار عبر مواقع الويب. الهدف هو عرض إعلانات ذات صلة وجذابة للمستخدم الفردي وبالتالي أكثر قيمة للناشرين والمعلنين من طرف ثالث.",howWeUseCookies:"كيف نستخدم ملفات تعريف الارتباط",cookieUsageText:"نستخدم ملفات تعريف الارتباط للأغراض التالية:",ensureFunction:"لضمان عمل موقعنا بشكل صحيح",rememberPreferences:"لتذكر تفضيلاتك وإعداداتك",analyzeTraffic:"لتحليل حركة المرور على الموقع وأنماط الاستخدام",personalizedContent:"لتقديم محتوى وإعلانات مخصصة",improveSecurity:"لتحسين أمان وأداء موقعنا",managingCookies:"إدارة تفضيلات ملفات تعريف الارتباط",managingText:"يمكنك التحكم في ملفات تعريف الارتباط وإدارتها بطرق مختلفة. تقبل معظم متصفحات الويب ملفات تعريف الارتباط تلقائيًا، ولكن يمكنك تعديل إعدادات المتصفح لرفض ملفات تعريف الارتباط إذا كنت تفضل ذلك. يرجى ملاحظة أن تعطيل ملفات تعريف الارتباط قد يؤثر على وظائف موقعنا.",cookieBanner:"يمكنك أيضًا إدارة تفضيلات ملفات تعريف الارتباط من خلال لافتة موافقة ملفات تعريف الارتباط التي تظهر عند زيارتك الأولى لموقعنا.",thirdPartyCookies:"ملفات تعريف الارتباط من طرف ثالث",thirdPartyText:"بعض ملفات تعريف الارتباط على موقعنا يتم وضعها بواسطة خدمات طرف ثالث. ليس لدينا سيطرة على هذه الملفات وهي محكومة بسياسات الخصوصية الخاصة بالأطراف الثالثة المعنية.",productNames:{1:"سيروم سينسإيفا المشرق بفيتامين سي 30 مل",2:"سيروم سينسإيفا المضاد للبقع بالأربوتين 30 مل",3:"كريم سينسإيفا المضاد للتجاعيد لمحيط العين 20 مل",4:"كريم سينسإيفا الليلي المضاد لعلامات التقدم بالعمر 50 مل",5:"تونر سينسإيفا لتجديد البشرة 200 مل",6:"سكراب كريم سينسإيفا المنقي للبشرة 200 مل",7:"رغوة سينسإيفا المنقية لتنظيف الوجه 200 مل",8:"كريم سينسإيفا للحماية اليومية من الشمس SPF 50+ 100 مل",9:"كريم سينسإيفا المرطب بحمض الهيالورونيك 50 مل"},blog:{title:"الاتجاهات والنصائح",searchPlaceholder:"البحث في المقالات...",categories:{all:"جميع المنشورات",trends:"نصائح العناية بالبشرة",skincare:"مكافحة الشيخوخة",ingredients:"العناية الموسمية",routine:"تركيز المكونات"},readMore:"اقرأ المزيد"},homepage:{categoriesTitle:"استكشف فئاتنا",categoriesSubtitle:"اكتشف مجموعات سينسيفا المختارة بعناية والمُعدة بحساسية لاحتياجات بشرتك.",exploreCollection:"استكشف المجموعة",allProductsTitle:"جميع منتجاتنا",allProductsSubtitle:"اكتشف مجموعات سينسيفا المستوحاة من أصل الجمال، والمصنوعة بعناية لكل نوع بشرة.",loadMore:"تحميل المزيد من المنتجات"},productCard:{buyNow:"اشتري الآن",available:"متاح"},categories:{antiAging:{title:"العناية المضادة للشيخوخة",description:"تركيبات متقدمة لتقليل الخطوط الدقيقة، وتعزيز الكولاجين، واستعادة إشراقة الشباب لبشرتك."},cleansing:{title:"تنظيف الوجه والبشرة",description:"منظفات لطيفة وفعالة تنقي بشرتك مع الحفاظ على توازن الرطوبة الطبيعي."},dailyCare:{title:"العناية اليومية",description:"منتجات العناية بالبشرة اليومية الأساسية لبشرة صحية ومحمية ومغذية كل يوم."}}}},$A=({isVisible:e})=>(Be(),e?o.jsx("div",{className:`absolute top-full left-0 right-0 bg-white border-b border-border shadow-elegant z-40 md:block ${e?"fixed md:absolute inset-x-0 top-0 md:top-full max-h-screen md:h-auto overflow-y-auto md:overflow-visible":""}`,children:o.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-8 pt-6 md:pt-8",children:o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:YA.megaMenuCategories.map(t=>o.jsxs("div",{className:"space-y-4",children:[o.jsx(te,{to:`/category/${t.category.toLowerCase().replace(/\s+/g,"-").replace(/&/g,"and")}`,className:"text-lg font-semibold text-primary hover:text-primary-dark transition-colors inline-block",children:t.category}),o.jsx("ul",{className:"space-y-2",children:t.items.map(n=>o.jsx("li",{children:o.jsx(te,{to:n.href,className:"text-muted-foreground hover:text-primary transition-colors text-sm inline-block",children:n.name})},n.name))})]},t.category))})})}):null),Uh=({results:e,isVisible:t,isLoading:n,error:r,onResultClick:i})=>t?o.jsxs("div",{className:"relative w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden",children:[n&&o.jsx("div",{className:"p-4 text-center text-gray-600 dark:text-gray-400",children:"Searching..."}),r&&o.jsx("div",{className:"p-4 text-center text-gray-600 dark:text-gray-400",children:r}),!n&&!r&&e.length===0&&o.jsx("div",{className:"p-4 text-center text-gray-600 dark:text-gray-400",children:"No products or blog posts found."}),!n&&!r&&e.length>0&&o.jsx("div",{className:"max-h-80 overflow-y-auto",children:e.map(a=>o.jsxs(te,{to:a.url,onClick:i,className:"flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-600 last:border-b-0",children:[o.jsx("div",{className:"w-12 h-12 flex-shrink-0 mr-3 bg-gray-100 dark:bg-gray-600 rounded overflow-hidden",children:a.image?o.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover",onError:l=>{const s=l.target;s.style.display="none"}}):o.jsx("div",{className:"w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs font-medium",children:a.type==="product"?"P":"B"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"font-medium text-gray-900 dark:text-white truncate",children:a.title}),o.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1",children:a.description}),o.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:o.jsx("span",{className:`inline-block px-2 py-0.5 rounded text-xs font-medium ${a.type==="product"?"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"}`,children:a.type==="product"?"Product":"Blog"})})]})]},a.id))})]}):null;var qA=f.createContext(void 0);function Am(e){const t=f.useContext(qA);return e||t||"ltr"}var Tu=0;function WA(){f.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Yh()),document.body.insertAdjacentElement("beforeend",e[1]??Yh()),Tu++,()=>{Tu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Tu--}},[])}function Yh(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Mu="focusScope.autoFocusOnMount",Ru="focusScope.autoFocusOnUnmount",Vh={bubbles:!1,cancelable:!0},QA="FocusScope",yv=f.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:a,...l}=e,[s,u]=f.useState(null),c=wt(i),m=wt(a),d=f.useRef(null),h=Re(t,g=>u(g)),p=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(r){let g=function(v){if(p.paused||!s)return;const w=v.target;s.contains(w)?d.current=w:Xn(d.current,{select:!0})},b=function(v){if(p.paused||!s)return;const w=v.relatedTarget;w!==null&&(s.contains(w)||Xn(d.current,{select:!0}))},y=function(v){if(document.activeElement===document.body)for(const z of v)z.removedNodes.length>0&&Xn(s)};document.addEventListener("focusin",g),document.addEventListener("focusout",b);const k=new MutationObserver(y);return s&&k.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",b),k.disconnect()}}},[r,s,p.paused]),f.useEffect(()=>{if(s){qh.add(p);const g=document.activeElement;if(!s.contains(g)){const y=new CustomEvent(Mu,Vh);s.addEventListener(Mu,c),s.dispatchEvent(y),y.defaultPrevented||(XA(n2(kv(s)),{select:!0}),document.activeElement===g&&Xn(s))}return()=>{s.removeEventListener(Mu,c),setTimeout(()=>{const y=new CustomEvent(Ru,Vh);s.addEventListener(Ru,m),s.dispatchEvent(y),y.defaultPrevented||Xn(g??document.body,{select:!0}),s.removeEventListener(Ru,m),qh.remove(p)},0)}}},[s,c,m,p]);const x=f.useCallback(g=>{if(!n&&!r||p.paused)return;const b=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,y=document.activeElement;if(b&&y){const k=g.currentTarget,[v,w]=ZA(k);v&&w?!g.shiftKey&&y===w?(g.preventDefault(),n&&Xn(v,{select:!0})):g.shiftKey&&y===v&&(g.preventDefault(),n&&Xn(w,{select:!0})):y===k&&g.preventDefault()}},[n,r,p.paused]);return o.jsx(ue.div,{tabIndex:-1,...l,ref:h,onKeyDown:x})});yv.displayName=QA;function XA(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Xn(r,{select:t}),document.activeElement!==n)return}function ZA(e){const t=kv(e),n=$h(t,e),r=$h(t.reverse(),e);return[n,r]}function kv(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function $h(e,t){for(const n of e)if(!JA(n,{upTo:t}))return n}function JA(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function e2(e){return e instanceof HTMLInputElement&&"select"in e}function Xn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&e2(e)&&t&&e.select()}}var qh=t2();function t2(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Wh(e,t),e.unshift(t)},remove(t){var n;e=Wh(e,t),(n=e[0])==null||n.resume()}}}function Wh(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function n2(e){return e.filter(t=>t.tagName!=="A")}var Du="rovingFocusGroup.onEntryFocus",r2={bubbles:!1,cancelable:!0},wl="RovingFocusGroup",[Qc,gv,i2]=zs(wl),[a2,vv]=Bn(wl,[i2]),[l2,o2]=a2(wl),bv=f.forwardRef((e,t)=>o.jsx(Qc.Provider,{scope:e.__scopeRovingFocusGroup,children:o.jsx(Qc.Slot,{scope:e.__scopeRovingFocusGroup,children:o.jsx(s2,{...e,ref:t})})}));bv.displayName=wl;var s2=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:a,currentTabStopId:l,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:m=!1,...d}=e,h=f.useRef(null),p=Re(t,h),x=Am(a),[g,b]=qi({prop:l,defaultProp:s??null,onChange:u,caller:wl}),[y,k]=f.useState(!1),v=wt(c),w=gv(n),z=f.useRef(!1),[S,C]=f.useState(0);return f.useEffect(()=>{const E=h.current;if(E)return E.addEventListener(Du,v),()=>E.removeEventListener(Du,v)},[v]),o.jsx(l2,{scope:n,orientation:r,dir:x,loop:i,currentTabStopId:g,onItemFocus:f.useCallback(E=>b(E),[b]),onItemShiftTab:f.useCallback(()=>k(!0),[]),onFocusableItemAdd:f.useCallback(()=>C(E=>E+1),[]),onFocusableItemRemove:f.useCallback(()=>C(E=>E-1),[]),children:o.jsx(ue.div,{tabIndex:y||S===0?-1:0,"data-orientation":r,...d,ref:p,style:{outline:"none",...e.style},onMouseDown:q(e.onMouseDown,()=>{z.current=!0}),onFocus:q(e.onFocus,E=>{const P=!z.current;if(E.target===E.currentTarget&&P&&!y){const T=new CustomEvent(Du,r2);if(E.currentTarget.dispatchEvent(T),!T.defaultPrevented){const L=w().filter(_=>_.focusable),I=L.find(_=>_.active),G=L.find(_=>_.id===g),Y=[I,G,...L].filter(Boolean).map(_=>_.ref.current);zv(Y,m)}}z.current=!1}),onBlur:q(e.onBlur,()=>k(!1))})})}),xv="RovingFocusGroupItem",wv=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:a,children:l,...s}=e,u=Wa(),c=a||u,m=o2(xv,n),d=m.currentTabStopId===c,h=gv(n),{onFocusableItemAdd:p,onFocusableItemRemove:x,currentTabStopId:g}=m;return f.useEffect(()=>{if(r)return p(),()=>x()},[r,p,x]),o.jsx(Qc.ItemSlot,{scope:n,id:c,focusable:r,active:i,children:o.jsx(ue.span,{tabIndex:d?0:-1,"data-orientation":m.orientation,...s,ref:t,onMouseDown:q(e.onMouseDown,b=>{r?m.onItemFocus(c):b.preventDefault()}),onFocus:q(e.onFocus,()=>m.onItemFocus(c)),onKeyDown:q(e.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){m.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const y=d2(b,m.orientation,m.dir);if(y!==void 0){if(b.metaKey||b.ctrlKey||b.altKey||b.shiftKey)return;b.preventDefault();let v=h().filter(w=>w.focusable).map(w=>w.ref.current);if(y==="last")v.reverse();else if(y==="prev"||y==="next"){y==="prev"&&v.reverse();const w=v.indexOf(b.currentTarget);v=m.loop?m2(v,w+1):v.slice(w+1)}setTimeout(()=>zv(v))}}),children:typeof l=="function"?l({isCurrentTabStop:d,hasTabStop:g!=null}):l})})});wv.displayName=xv;var u2={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function c2(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function d2(e,t,n){const r=c2(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return u2[r]}function zv(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function m2(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var f2=bv,h2=wv,p2=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},ii=new WeakMap,eo=new WeakMap,to={},Fu=0,Sv=function(e){return e&&(e.host||Sv(e.parentNode))},y2=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Sv(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},k2=function(e,t,n,r){var i=y2(t,Array.isArray(e)?e:[e]);to[n]||(to[n]=new WeakMap);var a=to[n],l=[],s=new Set,u=new Set(i),c=function(d){!d||s.has(d)||(s.add(d),c(d.parentNode))};i.forEach(c);var m=function(d){!d||u.has(d)||Array.prototype.forEach.call(d.children,function(h){if(s.has(h))m(h);else try{var p=h.getAttribute(r),x=p!==null&&p!=="false",g=(ii.get(h)||0)+1,b=(a.get(h)||0)+1;ii.set(h,g),a.set(h,b),l.push(h),g===1&&x&&eo.set(h,!0),b===1&&h.setAttribute(n,"true"),x||h.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",h,y)}})};return m(t),s.clear(),Fu++,function(){l.forEach(function(d){var h=ii.get(d)-1,p=a.get(d)-1;ii.set(d,h),a.set(d,p),h||(eo.has(d)||d.removeAttribute(r),eo.delete(d)),p||d.removeAttribute(n)}),Fu--,Fu||(ii=new WeakMap,ii=new WeakMap,eo=new WeakMap,to={})}},g2=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=p2(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),k2(r,i,n,"aria-hidden")):function(){return null}},un=function(){return un=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},un.apply(this,arguments)};function Cv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function v2(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var xo="right-scroll-bar-position",wo="width-before-scroll-bar",b2="with-scroll-bars-hidden",x2="--removed-body-scroll-bar-size";function Iu(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function w2(e,t){var n=f.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}var z2=typeof window<"u"?f.useLayoutEffect:f.useEffect,Qh=new WeakMap;function S2(e,t){var n=w2(null,function(r){return e.forEach(function(i){return Iu(i,r)})});return z2(function(){var r=Qh.get(n);if(r){var i=new Set(r),a=new Set(e),l=n.current;i.forEach(function(s){a.has(s)||Iu(s,null)}),a.forEach(function(s){i.has(s)||Iu(s,l)})}Qh.set(n,e)},[e]),n}function C2(e){return e}function E2(e,t){t===void 0&&(t=C2);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var l=t(a,r);return n.push(l),function(){n=n.filter(function(s){return s!==l})}},assignSyncMedium:function(a){for(r=!0;n.length;){var l=n;n=[],l.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var l=[];if(n.length){var s=n;n=[],s.forEach(a),l=n}var u=function(){var m=l;l=[],m.forEach(a)},c=function(){return Promise.resolve().then(u)};c(),n={push:function(m){l.push(m),c()},filter:function(m){return l=l.filter(m),n}}}};return i}function A2(e){e===void 0&&(e={});var t=E2(null);return t.options=un({async:!0,ssr:!1},e),t}var Ev=function(e){var t=e.sideCar,n=Cv(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return f.createElement(r,un({},n))};Ev.isSideCarExport=!0;function N2(e,t){return e.useMedium(t),Ev}var Av=A2(),Lu=function(){},Ls=f.forwardRef(function(e,t){var n=f.useRef(null),r=f.useState({onScrollCapture:Lu,onWheelCapture:Lu,onTouchMoveCapture:Lu}),i=r[0],a=r[1],l=e.forwardProps,s=e.children,u=e.className,c=e.removeScrollBar,m=e.enabled,d=e.shards,h=e.sideCar,p=e.noRelative,x=e.noIsolation,g=e.inert,b=e.allowPinchZoom,y=e.as,k=y===void 0?"div":y,v=e.gapMode,w=Cv(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),z=h,S=S2([n,t]),C=un(un({},w),i);return f.createElement(f.Fragment,null,m&&f.createElement(z,{sideCar:Av,removeScrollBar:c,shards:d,noRelative:p,noIsolation:x,inert:g,setCallbacks:a,allowPinchZoom:!!b,lockRef:n,gapMode:v}),l?f.cloneElement(f.Children.only(s),un(un({},C),{ref:S})):f.createElement(k,un({},C,{className:u,ref:S}),s))});Ls.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ls.classNames={fullWidth:wo,zeroRight:xo};var P2=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function j2(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=P2();return t&&e.setAttribute("nonce",t),e}function T2(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function M2(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var R2=function(){var e=0,t=null;return{add:function(n){e==0&&(t=j2())&&(T2(t,n),M2(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},D2=function(){var e=R2();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Nv=function(){var e=D2(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},F2={left:0,top:0,right:0,gap:0},Ou=function(e){return parseInt(e||"",10)||0},I2=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[Ou(n),Ou(r),Ou(i)]},L2=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return F2;var t=I2(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},O2=Nv(),Ai="data-scroll-locked",B2=function(e,t,n,r){var i=e.left,a=e.top,l=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(b2,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(Ai,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(xo,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(wo,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(xo," .").concat(xo,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(wo," .").concat(wo,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Ai,`] {
    `).concat(x2,": ").concat(s,`px;
  }
`)},Xh=function(){var e=parseInt(document.body.getAttribute(Ai)||"0",10);return isFinite(e)?e:0},_2=function(){f.useEffect(function(){return document.body.setAttribute(Ai,(Xh()+1).toString()),function(){var e=Xh()-1;e<=0?document.body.removeAttribute(Ai):document.body.setAttribute(Ai,e.toString())}},[])},K2=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;_2();var a=f.useMemo(function(){return L2(i)},[i]);return f.createElement(O2,{styles:B2(a,!t,i,n?"":"!important")})},Xc=!1;if(typeof window<"u")try{var no=Object.defineProperty({},"passive",{get:function(){return Xc=!0,!0}});window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Xc=!1}var ai=Xc?{passive:!1}:!1,H2=function(e){return e.tagName==="TEXTAREA"},Pv=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!H2(e)&&n[t]==="visible")},G2=function(e){return Pv(e,"overflowY")},U2=function(e){return Pv(e,"overflowX")},Zh=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=jv(e,r);if(i){var a=Tv(e,r),l=a[1],s=a[2];if(l>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Y2=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},V2=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},jv=function(e,t){return e==="v"?G2(t):U2(t)},Tv=function(e,t){return e==="v"?Y2(t):V2(t)},$2=function(e,t){return e==="h"&&t==="rtl"?-1:1},q2=function(e,t,n,r,i){var a=$2(e,window.getComputedStyle(t).direction),l=a*r,s=n.target,u=t.contains(s),c=!1,m=l>0,d=0,h=0;do{if(!s)break;var p=Tv(e,s),x=p[0],g=p[1],b=p[2],y=g-b-a*x;(x||y)&&jv(e,s)&&(d+=y,h+=x);var k=s.parentNode;s=k&&k.nodeType===Node.DOCUMENT_FRAGMENT_NODE?k.host:k}while(!u&&s!==document.body||u&&(t.contains(s)||t===s));return(m&&(Math.abs(d)<1||!i)||!m&&(Math.abs(h)<1||!i))&&(c=!0),c},ro=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Jh=function(e){return[e.deltaX,e.deltaY]},ep=function(e){return e&&"current"in e?e.current:e},W2=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Q2=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},X2=0,li=[];function Z2(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),i=f.useState(X2++)[0],a=f.useState(Nv)[0],l=f.useRef(e);f.useEffect(function(){l.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var g=v2([e.lockRef.current],(e.shards||[]).map(ep),!0).filter(Boolean);return g.forEach(function(b){return b.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),g.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var s=f.useCallback(function(g,b){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!l.current.allowPinchZoom;var y=ro(g),k=n.current,v="deltaX"in g?g.deltaX:k[0]-y[0],w="deltaY"in g?g.deltaY:k[1]-y[1],z,S=g.target,C=Math.abs(v)>Math.abs(w)?"h":"v";if("touches"in g&&C==="h"&&S.type==="range")return!1;var E=Zh(C,S);if(!E)return!0;if(E?z=C:(z=C==="v"?"h":"v",E=Zh(C,S)),!E)return!1;if(!r.current&&"changedTouches"in g&&(v||w)&&(r.current=z),!z)return!0;var P=r.current||z;return q2(P,b,g,P==="h"?v:w,!0)},[]),u=f.useCallback(function(g){var b=g;if(!(!li.length||li[li.length-1]!==a)){var y="deltaY"in b?Jh(b):ro(b),k=t.current.filter(function(z){return z.name===b.type&&(z.target===b.target||b.target===z.shadowParent)&&W2(z.delta,y)})[0];if(k&&k.should){b.cancelable&&b.preventDefault();return}if(!k){var v=(l.current.shards||[]).map(ep).filter(Boolean).filter(function(z){return z.contains(b.target)}),w=v.length>0?s(b,v[0]):!l.current.noIsolation;w&&b.cancelable&&b.preventDefault()}}},[]),c=f.useCallback(function(g,b,y,k){var v={name:g,delta:b,target:y,should:k,shadowParent:J2(y)};t.current.push(v),setTimeout(function(){t.current=t.current.filter(function(w){return w!==v})},1)},[]),m=f.useCallback(function(g){n.current=ro(g),r.current=void 0},[]),d=f.useCallback(function(g){c(g.type,Jh(g),g.target,s(g,e.lockRef.current))},[]),h=f.useCallback(function(g){c(g.type,ro(g),g.target,s(g,e.lockRef.current))},[]);f.useEffect(function(){return li.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",u,ai),document.addEventListener("touchmove",u,ai),document.addEventListener("touchstart",m,ai),function(){li=li.filter(function(g){return g!==a}),document.removeEventListener("wheel",u,ai),document.removeEventListener("touchmove",u,ai),document.removeEventListener("touchstart",m,ai)}},[]);var p=e.removeScrollBar,x=e.inert;return f.createElement(f.Fragment,null,x?f.createElement(a,{styles:Q2(i)}):null,p?f.createElement(K2,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function J2(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const eN=N2(Av,Z2);var Mv=f.forwardRef(function(e,t){return f.createElement(Ls,un({},e,{ref:t,sideCar:eN}))});Mv.classNames=Ls.classNames;var Zc=["Enter"," "],tN=["ArrowDown","PageUp","Home"],Rv=["ArrowUp","PageDown","End"],nN=[...tN,...Rv],rN={ltr:[...Zc,"ArrowRight"],rtl:[...Zc,"ArrowLeft"]},iN={ltr:["ArrowLeft"],rtl:["ArrowRight"]},zl="Menu",[rl,aN,lN]=zs(zl),[Zr,Dv]=Bn(zl,[lN,js,vv]),Os=js(),Fv=vv(),[oN,Jr]=Zr(zl),[sN,Sl]=Zr(zl),Iv=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:i,onOpenChange:a,modal:l=!0}=e,s=Os(t),[u,c]=f.useState(null),m=f.useRef(!1),d=wt(a),h=Am(i);return f.useEffect(()=>{const p=()=>{m.current=!0,document.addEventListener("pointerdown",x,{capture:!0,once:!0}),document.addEventListener("pointermove",x,{capture:!0,once:!0})},x=()=>m.current=!1;return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("pointermove",x,{capture:!0})}},[]),o.jsx(RC,{...s,children:o.jsx(oN,{scope:t,open:n,onOpenChange:d,content:u,onContentChange:c,children:o.jsx(sN,{scope:t,onClose:f.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:m,dir:h,modal:l,children:r})})})};Iv.displayName=zl;var uN="MenuAnchor",Nm=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,i=Os(n);return o.jsx(Hg,{...i,...r,ref:t})});Nm.displayName=uN;var Pm="MenuPortal",[cN,Lv]=Zr(Pm,{forceMount:void 0}),Ov=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:i}=e,a=Jr(Pm,t);return o.jsx(cN,{scope:t,forceMount:n,children:o.jsx(Er,{present:n||a.open,children:o.jsx(rm,{asChild:!0,container:i,children:r})})})};Ov.displayName=Pm;var jt="MenuContent",[dN,jm]=Zr(jt),Bv=f.forwardRef((e,t)=>{const n=Lv(jt,e.__scopeMenu),{forceMount:r=n.forceMount,...i}=e,a=Jr(jt,e.__scopeMenu),l=Sl(jt,e.__scopeMenu);return o.jsx(rl.Provider,{scope:e.__scopeMenu,children:o.jsx(Er,{present:r||a.open,children:o.jsx(rl.Slot,{scope:e.__scopeMenu,children:l.modal?o.jsx(mN,{...i,ref:t}):o.jsx(fN,{...i,ref:t})})})})}),mN=f.forwardRef((e,t)=>{const n=Jr(jt,e.__scopeMenu),r=f.useRef(null),i=Re(t,r);return f.useEffect(()=>{const a=r.current;if(a)return g2(a)},[]),o.jsx(Tm,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:q(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),fN=f.forwardRef((e,t)=>{const n=Jr(jt,e.__scopeMenu);return o.jsx(Tm,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),hN=$a("MenuContent.ScrollLock"),Tm=f.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:i,onOpenAutoFocus:a,onCloseAutoFocus:l,disableOutsidePointerEvents:s,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:m,onFocusOutside:d,onInteractOutside:h,onDismiss:p,disableOutsideScroll:x,...g}=e,b=Jr(jt,n),y=Sl(jt,n),k=Os(n),v=Fv(n),w=aN(n),[z,S]=f.useState(null),C=f.useRef(null),E=Re(t,C,b.onContentChange),P=f.useRef(0),T=f.useRef(""),L=f.useRef(0),I=f.useRef(null),G=f.useRef("right"),F=f.useRef(0),Y=x?Mv:f.Fragment,_=x?{as:hN,allowPinchZoom:!0}:void 0,U=A=>{var W,ye;const M=T.current+A,B=w().filter(me=>!me.disabled),O=document.activeElement,$=(W=B.find(me=>me.ref.current===O))==null?void 0:W.textValue,V=B.map(me=>me.textValue),ne=EN(V,M,$),se=(ye=B.find(me=>me.textValue===ne))==null?void 0:ye.ref.current;(function me(we){T.current=we,window.clearTimeout(P.current),we!==""&&(P.current=window.setTimeout(()=>me(""),1e3))})(M),se&&setTimeout(()=>se.focus())};f.useEffect(()=>()=>window.clearTimeout(P.current),[]),WA();const N=f.useCallback(A=>{var B,O;return G.current===((B=I.current)==null?void 0:B.side)&&NN(A,(O=I.current)==null?void 0:O.area)},[]);return o.jsx(dN,{scope:n,searchRef:T,onItemEnter:f.useCallback(A=>{N(A)&&A.preventDefault()},[N]),onItemLeave:f.useCallback(A=>{var M;N(A)||((M=C.current)==null||M.focus(),S(null))},[N]),onTriggerLeave:f.useCallback(A=>{N(A)&&A.preventDefault()},[N]),pointerGraceTimerRef:L,onPointerGraceIntentChange:f.useCallback(A=>{I.current=A},[]),children:o.jsx(Y,{..._,children:o.jsx(yv,{asChild:!0,trapped:i,onMountAutoFocus:q(a,A=>{var M;A.preventDefault(),(M=C.current)==null||M.focus({preventScroll:!0})}),onUnmountAutoFocus:l,children:o.jsx(Ss,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:c,onPointerDownOutside:m,onFocusOutside:d,onInteractOutside:h,onDismiss:p,children:o.jsx(f2,{asChild:!0,...v,dir:y.dir,orientation:"vertical",loop:r,currentTabStopId:z,onCurrentTabStopIdChange:S,onEntryFocus:q(u,A=>{y.isUsingKeyboardRef.current||A.preventDefault()}),preventScrollOnEntryFocus:!0,children:o.jsx(Gg,{role:"menu","aria-orientation":"vertical","data-state":tb(b.open),"data-radix-menu-content":"",dir:y.dir,...k,...g,ref:E,style:{outline:"none",...g.style},onKeyDown:q(g.onKeyDown,A=>{const B=A.target.closest("[data-radix-menu-content]")===A.currentTarget,O=A.ctrlKey||A.altKey||A.metaKey,$=A.key.length===1;B&&(A.key==="Tab"&&A.preventDefault(),!O&&$&&U(A.key));const V=C.current;if(A.target!==V||!nN.includes(A.key))return;A.preventDefault();const se=w().filter(W=>!W.disabled).map(W=>W.ref.current);Rv.includes(A.key)&&se.reverse(),SN(se)}),onBlur:q(e.onBlur,A=>{A.currentTarget.contains(A.target)||(window.clearTimeout(P.current),T.current="")}),onPointerMove:q(e.onPointerMove,il(A=>{const M=A.target,B=F.current!==A.clientX;if(A.currentTarget.contains(M)&&B){const O=A.clientX>F.current?"right":"left";G.current=O,F.current=A.clientX}}))})})})})})})});Bv.displayName=jt;var pN="MenuGroup",Mm=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return o.jsx(ue.div,{role:"group",...r,ref:t})});Mm.displayName=pN;var yN="MenuLabel",_v=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return o.jsx(ue.div,{...r,ref:t})});_v.displayName=yN;var ns="MenuItem",tp="menu.itemSelect",Bs=f.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...i}=e,a=f.useRef(null),l=Sl(ns,e.__scopeMenu),s=jm(ns,e.__scopeMenu),u=Re(t,a),c=f.useRef(!1),m=()=>{const d=a.current;if(!n&&d){const h=new CustomEvent(tp,{bubbles:!0,cancelable:!0});d.addEventListener(tp,p=>r==null?void 0:r(p),{once:!0}),nm(d,h),h.defaultPrevented?c.current=!1:l.onClose()}};return o.jsx(Kv,{...i,ref:u,disabled:n,onClick:q(e.onClick,m),onPointerDown:d=>{var h;(h=e.onPointerDown)==null||h.call(e,d),c.current=!0},onPointerUp:q(e.onPointerUp,d=>{var h;c.current||(h=d.currentTarget)==null||h.click()}),onKeyDown:q(e.onKeyDown,d=>{const h=s.searchRef.current!=="";n||h&&d.key===" "||Zc.includes(d.key)&&(d.currentTarget.click(),d.preventDefault())})})});Bs.displayName=ns;var Kv=f.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:i,...a}=e,l=jm(ns,n),s=Fv(n),u=f.useRef(null),c=Re(t,u),[m,d]=f.useState(!1),[h,p]=f.useState("");return f.useEffect(()=>{const x=u.current;x&&p((x.textContent??"").trim())},[a.children]),o.jsx(rl.ItemSlot,{scope:n,disabled:r,textValue:i??h,children:o.jsx(h2,{asChild:!0,...s,focusable:!r,children:o.jsx(ue.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...a,ref:c,onPointerMove:q(e.onPointerMove,il(x=>{r?l.onItemLeave(x):(l.onItemEnter(x),x.defaultPrevented||x.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:q(e.onPointerLeave,il(x=>l.onItemLeave(x))),onFocus:q(e.onFocus,()=>d(!0)),onBlur:q(e.onBlur,()=>d(!1))})})})}),kN="MenuCheckboxItem",Hv=f.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:r,...i}=e;return o.jsx($v,{scope:e.__scopeMenu,checked:n,children:o.jsx(Bs,{role:"menuitemcheckbox","aria-checked":rs(n)?"mixed":n,...i,ref:t,"data-state":Dm(n),onSelect:q(i.onSelect,()=>r==null?void 0:r(rs(n)?!0:!n),{checkForDefaultPrevented:!1})})})});Hv.displayName=kN;var Gv="MenuRadioGroup",[gN,vN]=Zr(Gv,{value:void 0,onValueChange:()=>{}}),Uv=f.forwardRef((e,t)=>{const{value:n,onValueChange:r,...i}=e,a=wt(r);return o.jsx(gN,{scope:e.__scopeMenu,value:n,onValueChange:a,children:o.jsx(Mm,{...i,ref:t})})});Uv.displayName=Gv;var Yv="MenuRadioItem",Vv=f.forwardRef((e,t)=>{const{value:n,...r}=e,i=vN(Yv,e.__scopeMenu),a=n===i.value;return o.jsx($v,{scope:e.__scopeMenu,checked:a,children:o.jsx(Bs,{role:"menuitemradio","aria-checked":a,...r,ref:t,"data-state":Dm(a),onSelect:q(r.onSelect,()=>{var l;return(l=i.onValueChange)==null?void 0:l.call(i,n)},{checkForDefaultPrevented:!1})})})});Vv.displayName=Yv;var Rm="MenuItemIndicator",[$v,bN]=Zr(Rm,{checked:!1}),qv=f.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:r,...i}=e,a=bN(Rm,n);return o.jsx(Er,{present:r||rs(a.checked)||a.checked===!0,children:o.jsx(ue.span,{...i,ref:t,"data-state":Dm(a.checked)})})});qv.displayName=Rm;var xN="MenuSeparator",Wv=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return o.jsx(ue.div,{role:"separator","aria-orientation":"horizontal",...r,ref:t})});Wv.displayName=xN;var wN="MenuArrow",Qv=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,i=Os(n);return o.jsx(Ug,{...i,...r,ref:t})});Qv.displayName=wN;var zN="MenuSub",[kM,Xv]=Zr(zN),ka="MenuSubTrigger",Zv=f.forwardRef((e,t)=>{const n=Jr(ka,e.__scopeMenu),r=Sl(ka,e.__scopeMenu),i=Xv(ka,e.__scopeMenu),a=jm(ka,e.__scopeMenu),l=f.useRef(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:u}=a,c={__scopeMenu:e.__scopeMenu},m=f.useCallback(()=>{l.current&&window.clearTimeout(l.current),l.current=null},[]);return f.useEffect(()=>m,[m]),f.useEffect(()=>{const d=s.current;return()=>{window.clearTimeout(d),u(null)}},[s,u]),o.jsx(Nm,{asChild:!0,...c,children:o.jsx(Kv,{id:i.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":i.contentId,"data-state":tb(n.open),...e,ref:ws(t,i.onTriggerChange),onClick:d=>{var h;(h=e.onClick)==null||h.call(e,d),!(e.disabled||d.defaultPrevented)&&(d.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:q(e.onPointerMove,il(d=>{a.onItemEnter(d),!d.defaultPrevented&&!e.disabled&&!n.open&&!l.current&&(a.onPointerGraceIntentChange(null),l.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:q(e.onPointerLeave,il(d=>{var p,x;m();const h=(p=n.content)==null?void 0:p.getBoundingClientRect();if(h){const g=(x=n.content)==null?void 0:x.dataset.side,b=g==="right",y=b?-5:5,k=h[b?"left":"right"],v=h[b?"right":"left"];a.onPointerGraceIntentChange({area:[{x:d.clientX+y,y:d.clientY},{x:k,y:h.top},{x:v,y:h.top},{x:v,y:h.bottom},{x:k,y:h.bottom}],side:g}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(d),d.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:q(e.onKeyDown,d=>{var p;const h=a.searchRef.current!=="";e.disabled||h&&d.key===" "||rN[r.dir].includes(d.key)&&(n.onOpenChange(!0),(p=n.content)==null||p.focus(),d.preventDefault())})})})});Zv.displayName=ka;var Jv="MenuSubContent",eb=f.forwardRef((e,t)=>{const n=Lv(jt,e.__scopeMenu),{forceMount:r=n.forceMount,...i}=e,a=Jr(jt,e.__scopeMenu),l=Sl(jt,e.__scopeMenu),s=Xv(Jv,e.__scopeMenu),u=f.useRef(null),c=Re(t,u);return o.jsx(rl.Provider,{scope:e.__scopeMenu,children:o.jsx(Er,{present:r||a.open,children:o.jsx(rl.Slot,{scope:e.__scopeMenu,children:o.jsx(Tm,{id:s.contentId,"aria-labelledby":s.triggerId,...i,ref:c,align:"start",side:l.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:m=>{var d;l.isUsingKeyboardRef.current&&((d=u.current)==null||d.focus()),m.preventDefault()},onCloseAutoFocus:m=>m.preventDefault(),onFocusOutside:q(e.onFocusOutside,m=>{m.target!==s.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:q(e.onEscapeKeyDown,m=>{l.onClose(),m.preventDefault()}),onKeyDown:q(e.onKeyDown,m=>{var p;const d=m.currentTarget.contains(m.target),h=iN[l.dir].includes(m.key);d&&h&&(a.onOpenChange(!1),(p=s.trigger)==null||p.focus(),m.preventDefault())})})})})})});eb.displayName=Jv;function tb(e){return e?"open":"closed"}function rs(e){return e==="indeterminate"}function Dm(e){return rs(e)?"indeterminate":e?"checked":"unchecked"}function SN(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function CN(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function EN(e,t,n){const i=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,a=n?e.indexOf(n):-1;let l=CN(e,Math.max(a,0));i.length===1&&(l=l.filter(c=>c!==n));const u=l.find(c=>c.toLowerCase().startsWith(i.toLowerCase()));return u!==n?u:void 0}function AN(e,t){const{x:n,y:r}=e;let i=!1;for(let a=0,l=t.length-1;a<t.length;l=a++){const s=t[a],u=t[l],c=s.x,m=s.y,d=u.x,h=u.y;m>r!=h>r&&n<(d-c)*(r-m)/(h-m)+c&&(i=!i)}return i}function NN(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return AN(n,t)}function il(e){return t=>t.pointerType==="mouse"?e(t):void 0}var PN=Iv,jN=Nm,TN=Ov,MN=Bv,RN=Mm,DN=_v,FN=Bs,IN=Hv,LN=Uv,ON=Vv,BN=qv,_N=Wv,KN=Qv,HN=Zv,GN=eb,_s="DropdownMenu",[UN,gM]=Bn(_s,[Dv]),lt=Dv(),[YN,nb]=UN(_s),rb=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:i,defaultOpen:a,onOpenChange:l,modal:s=!0}=e,u=lt(t),c=f.useRef(null),[m,d]=qi({prop:i,defaultProp:a??!1,onChange:l,caller:_s});return o.jsx(YN,{scope:t,triggerId:Wa(),triggerRef:c,contentId:Wa(),open:m,onOpenChange:d,onOpenToggle:f.useCallback(()=>d(h=>!h),[d]),modal:s,children:o.jsx(PN,{...u,open:m,onOpenChange:d,dir:r,modal:s,children:n})})};rb.displayName=_s;var ib="DropdownMenuTrigger",ab=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...i}=e,a=nb(ib,n),l=lt(n);return o.jsx(jN,{asChild:!0,...l,children:o.jsx(ue.button,{type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...i,ref:ws(t,a.triggerRef),onPointerDown:q(e.onPointerDown,s=>{!r&&s.button===0&&s.ctrlKey===!1&&(a.onOpenToggle(),a.open||s.preventDefault())}),onKeyDown:q(e.onKeyDown,s=>{r||(["Enter"," "].includes(s.key)&&a.onOpenToggle(),s.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(s.key)&&s.preventDefault())})})})});ab.displayName=ib;var VN="DropdownMenuPortal",lb=e=>{const{__scopeDropdownMenu:t,...n}=e,r=lt(t);return o.jsx(TN,{...r,...n})};lb.displayName=VN;var ob="DropdownMenuContent",sb=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=nb(ob,n),a=lt(n),l=f.useRef(!1);return o.jsx(MN,{id:i.contentId,"aria-labelledby":i.triggerId,...a,...r,ref:t,onCloseAutoFocus:q(e.onCloseAutoFocus,s=>{var u;l.current||(u=i.triggerRef.current)==null||u.focus(),l.current=!1,s.preventDefault()}),onInteractOutside:q(e.onInteractOutside,s=>{const u=s.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,m=u.button===2||c;(!i.modal||m)&&(l.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});sb.displayName=ob;var $N="DropdownMenuGroup",qN=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(RN,{...i,...r,ref:t})});qN.displayName=$N;var WN="DropdownMenuLabel",ub=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(DN,{...i,...r,ref:t})});ub.displayName=WN;var QN="DropdownMenuItem",cb=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(FN,{...i,...r,ref:t})});cb.displayName=QN;var XN="DropdownMenuCheckboxItem",db=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(IN,{...i,...r,ref:t})});db.displayName=XN;var ZN="DropdownMenuRadioGroup",JN=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(LN,{...i,...r,ref:t})});JN.displayName=ZN;var eP="DropdownMenuRadioItem",mb=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(ON,{...i,...r,ref:t})});mb.displayName=eP;var tP="DropdownMenuItemIndicator",fb=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(BN,{...i,...r,ref:t})});fb.displayName=tP;var nP="DropdownMenuSeparator",hb=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(_N,{...i,...r,ref:t})});hb.displayName=nP;var rP="DropdownMenuArrow",iP=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(KN,{...i,...r,ref:t})});iP.displayName=rP;var aP="DropdownMenuSubTrigger",pb=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(HN,{...i,...r,ref:t})});pb.displayName=aP;var lP="DropdownMenuSubContent",yb=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,i=lt(n);return o.jsx(GN,{...i,...r,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});yb.displayName=lP;var oP=rb,sP=ab,uP=lb,kb=sb,gb=ub,vb=cb,bb=db,xb=mb,wb=fb,zb=hb,Sb=pb,Cb=yb;const cP=oP,dP=sP,mP=f.forwardRef(({className:e,inset:t,children:n,...r},i)=>o.jsxs(Sb,{ref:i,className:re("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...r,children:[n,o.jsx($o,{className:"ml-auto h-4 w-4"})]}));mP.displayName=Sb.displayName;const fP=f.forwardRef(({className:e,...t},n)=>o.jsx(Cb,{ref:n,className:re("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));fP.displayName=Cb.displayName;const Eb=f.forwardRef(({className:e,sideOffset:t=4,...n},r)=>o.jsx(uP,{children:o.jsx(kb,{ref:r,sideOffset:t,className:re("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Eb.displayName=kb.displayName;const Ab=f.forwardRef(({className:e,inset:t,...n},r)=>o.jsx(vb,{ref:r,className:re("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...n}));Ab.displayName=vb.displayName;const hP=f.forwardRef(({className:e,children:t,checked:n,...r},i)=>o.jsxs(bb,{ref:i,className:re("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...r,children:[o.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:o.jsx(wb,{children:o.jsx(Mz,{className:"h-4 w-4"})})}),t]}));hP.displayName=bb.displayName;const pP=f.forwardRef(({className:e,children:t,...n},r)=>o.jsxs(xb,{ref:r,className:re("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[o.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:o.jsx(wb,{children:o.jsx(Fz,{className:"h-2 w-2 fill-current"})})}),t]}));pP.displayName=xb.displayName;const yP=f.forwardRef(({className:e,inset:t,...n},r)=>o.jsx(gb,{ref:r,className:re("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));yP.displayName=gb.displayName;const kP=f.forwardRef(({className:e,...t},n)=>o.jsx(zb,{ref:n,className:re("-mx-1 my-1 h-px bg-muted",e),...t}));kP.displayName=zb.displayName;const np=({isScrolled:e})=>{const{language:t,setLanguage:n}=Be(),r=[{code:"en",label:"English",flag:"🇬🇧"},{code:"tr",label:"Türkçe",flag:"🇹🇷"},{code:"ar",label:"العربية",flag:"🇸🇦"}],i=r.find(a=>a.code===t);return o.jsxs(cP,{children:[o.jsx(dP,{asChild:!0,children:o.jsx("button",{className:`flex items-center space-x-1 p-2 transition-all duration-500 ${e?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,"aria-label":"Select Language",children:o.jsx("span",{className:"text-base",children:i==null?void 0:i.flag})})}),o.jsx(Eb,{align:"end",className:"w-40 bg-white z-50",children:r.map(a=>o.jsxs(Ab,{onClick:()=>n(a.code),className:`cursor-pointer ${t===a.code?"bg-accent":""}`,children:[o.jsx("span",{className:"mr-2 text-lg",children:a.flag}),a.label]},a.code))})]})},io=e=>{const[t,n]=f.useState({isLoading:!0,hasError:!1,currentLogo:null});return f.useEffect(()=>{(()=>{try{let i;switch(e){case"desktop-white":i=Dr.desktop.white;break;case"desktop-black":i=Dr.desktop.black;break;case"mobile-white":i=Dr.mobile.white;break;case"mobile-black":i=Dr.mobile.black;break;default:throw new Error("Invalid logo type")}if(!i||i.includes("placeholder")||i===""){n({isLoading:!1,hasError:!1,currentLogo:null});return}const a=new Image;a.onload=()=>{n({isLoading:!1,hasError:!1,currentLogo:i})},a.onerror=()=>{n({isLoading:!1,hasError:!0,currentLogo:null})},a.src=i}catch{n({isLoading:!1,hasError:!0,currentLogo:null})}})()},[e]),t},gP=()=>{const e=io("desktop-white"),t=io("desktop-black"),n=io("mobile-white"),r=io("mobile-black");return{desktop:{white:e,black:t},mobile:{white:n,black:r}}},Nb=()=>{const[e,t]=f.useState(null),[n,r]=f.useState(!1),[i,a]=f.useState(null);return f.useEffect(()=>{(async()=>{r(!0);try{const u=await fetch("/search-index.json");if(!u.ok)throw new Error("Failed to load search index");const c=await u.json();t(c),a(null)}catch(u){a("Search temporarily unavailable"),console.error("Failed to load search index:",u)}finally{r(!1)}})()},[]),{searchResults:f.useMemo(()=>(s,u=6)=>{if(!e||!s||s.length<2)return[];const c=s.toLowerCase().trim(),d=[...e.products,...e.blogs].filter(h=>{const p=h.title.toLowerCase().includes(c),x=h.description.toLowerCase().includes(c);return p||x});return d.sort((h,p)=>{const x=h.title.toLowerCase().includes(c),g=p.title.toLowerCase().includes(c);return x&&!g?-1:!x&&g?1:0}),d.slice(0,u)},[e]),isLoading:n,error:i,isReady:!!e}},vP=()=>{var Y,_,U;const{language:e}=Be(),t=at[e],[n,r]=f.useState(!1),[i,a]=f.useState(!0),[l,s]=f.useState(0),[u,c]=f.useState(!1),[m,d]=f.useState(!1),[h,p]=f.useState(""),[x,g]=f.useState(!1),[b,y]=f.useState(!1),k=Kn(),v=Is(),w=gP(),z=f.useRef(null),{searchResults:S,isLoading:C,error:E}=Nb(),[P,T]=f.useState([]);f.useEffect(()=>{const N=()=>{const M=window.scrollY;M>=2&&(c(!1),d(!1),y(!1),g(!1));const B=M<10,O=M>l,$=M<l,ne=window.innerWidth<768&&u;B?(a(!0),r(!1)):O&&M>50&&!ne?a(!1):$&&M>50&&(a(!0),r(!0)),s(M)},A=M=>{const B=M.target,O=document.querySelectorAll(".search-container");let $=!1;O.forEach(se=>{se.contains(B)&&($=!0)}),$||(d(!1),y(!1));const V=document.querySelector("header"),ne=document.querySelector("[data-mega-menu]");u&&V&&!V.contains(B)&&(!ne||!ne.contains(B))&&c(!1)};return window.addEventListener("scroll",N),document.addEventListener("mousedown",A),()=>{window.removeEventListener("scroll",N),document.removeEventListener("mousedown",A)}},[l,u]);const L=N=>{N.preventDefault(),h.trim()&&(v(`/search?query=${encodeURIComponent(h.trim())}`),d(!1),y(!1))},I=N=>{const A=N.target.value;if(p(A),A.length>=2){const M=S(A,6);T(M),y(!0)}else y(!1),T([])},G=()=>{d(!1),y(!1),p("")},F=[{name:(Y=t.home)==null?void 0:Y.toUpperCase(),href:"/"},{name:e==="en"?"SKINCARE":e==="ar"?(t.shop||"SKINCARE").toUpperCase():"CİLT BAKIMI",href:"#",hasMegaMenu:!0},{name:e==="en"?"TRENDS & TIPS":e==="ar"?((_=t.blog)==null?void 0:_.title)||"TRENDS & TIPS":"TRENDLER VE İPUÇLARI",href:"/blog"},{name:"THE ORIGIN OF BEAUTY",href:"/about"},{name:(U=t.contactNav)==null?void 0:U.toUpperCase(),href:"/contact"}];return o.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out transform rounded-b-lg ${i?"translate-y-0 opacity-100":"-translate-y-full opacity-0"} ${n?"bg-white shadow-md":"bg-black/5 backdrop-blur-[2px]"}`,children:[o.jsxs("div",{className:"container mx-auto max-w-7xl px-4",children:[o.jsx("div",{className:"hidden md:flex justify-center py-2 md:py-5",children:o.jsx(te,{to:"/",className:"transition-all duration-500 hover:opacity-80",children:(()=>{const N=n?w.desktop.black:w.desktop.white;return N.currentLogo?o.jsx("img",{src:N.currentLogo,alt:"SINCEVA Logo",className:"h-16 md:h-19 w-auto"}):o.jsx("div",{className:`text-xl md:text-2xl font-bold transition-all duration-500 ${n?"text-[#191919]":"text-white"}`,children:Dr.fallback.text})})()})}),o.jsx("div",{className:"md:hidden flex justify-center pt-3 pb-1 mt-1",children:o.jsx(te,{to:"/",className:"transition-all duration-500 hover:opacity-80",children:(()=>{const N=n?w.mobile.black:w.mobile.white;return N.currentLogo?o.jsx("img",{src:N.currentLogo,alt:"SINCEVA Logo",className:"h-9 w-auto"}):o.jsx("div",{className:`text-lg font-bold transition-all duration-500 ${n?"text-[#191919]":"text-white"}`,children:Dr.fallback.text})})()})}),o.jsxs("nav",{onClick:N=>{N.target===N.currentTarget&&c(!1)},className:`hidden md:flex justify-center items-center py-1.5 md:py-3 h-10 transition-all duration-300 ${m?"space-x-2 md:space-x-4 lg:space-x-6":"space-x-4 md:space-x-8 lg:space-x-12"}`,children:[F.map(N=>o.jsx("div",{className:"relative",children:N.hasMegaMenu?o.jsx("button",{onClick:()=>c(!u),className:`text-xs md:text-sm font-medium tracking-wide transition-all duration-500 uppercase whitespace-nowrap inline-block ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,children:N.name}):o.jsx(te,{to:N.href,className:`text-xs md:text-sm font-medium tracking-wide transition-all duration-500 uppercase whitespace-nowrap inline-block ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"} ${k.pathname===N.href?"opacity-100":"opacity-90"}`,children:N.name})},N.name)),o.jsxs("div",{className:`flex items-center transition-all duration-300 ${m?"ml-2 md:ml-4":"ml-4 md:ml-8"}`,children:[o.jsx("div",{className:"ltr:ml-2 rtl:mr-2",children:o.jsx(np,{isScrolled:n})}),o.jsxs("div",{className:"search-container relative flex items-center",children:[o.jsx("button",{onClick:()=>d(!m),className:`p-2 transition-all duration-500 ${m?"text-[hsl(var(--hover))]":n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"} ${m?"absolute left-1 top-1/2 transform -translate-y-1/2 z-10":""}`,children:o.jsx(qo,{className:"w-4 md:w-5 h-4 md:h-5"})}),o.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-out ${m?"w-32 md:w-48 ml-0":"w-0 ml-0"}`,children:o.jsx("form",{onSubmit:L,className:"w-full",children:o.jsx(Nn,{ref:z,type:"text",placeholder:t.searchPlaceholder||"Search products...",value:h,onChange:I,className:`w-full h-8 pl-10 pr-4 text-xs !border-none !outline-none !ring-0 !ring-offset-0 !shadow-none transition-all duration-300 rounded-full focus:!outline-none focus:!ring-0 focus:!border-none focus:!shadow-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 ${n?"bg-gray-100 text-gray-900 placeholder:text-gray-500":"bg-black/20 backdrop-blur-md text-white placeholder:text-white/70"}`,autoFocus:m})})}),m&&o.jsx("div",{className:"fixed left-0 right-0 top-40 z-[100] px-4",children:o.jsx("div",{className:"max-w-7xl mx-auto flex justify-end",children:o.jsx("div",{className:"w-80 md:w-96",children:o.jsx(Uh,{results:P,isVisible:b,isLoading:C,error:E,onResultClick:G})})})})]})]})]}),o.jsxs("div",{className:"md:hidden flex justify-between items-center py-1.5 md:py-4",children:[o.jsx("button",{onClick:()=>g(!x),className:`p-2 transition-all duration-500 ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,children:x?o.jsx(bl,{className:"w-6 h-6"}):o.jsx(Vz,{className:"w-6 h-6"})}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(np,{isScrolled:n}),o.jsxs("div",{className:"search-container relative flex items-center",children:[o.jsx("button",{onClick:()=>d(!m),className:`p-2 transition-all duration-500 ${m?"text-[hsl(var(--hover))]":n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"} ${m?"absolute left-1 top-1/2 transform -translate-y-1/2 z-10":""}`,children:o.jsx(qo,{className:"w-5 h-5"})}),o.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-out ${m?"w-40 ml-0":"w-0 ml-0"}`,children:o.jsx("form",{onSubmit:L,className:"w-full",children:o.jsx(Nn,{ref:z,type:"text",placeholder:t.searchPlaceholder||"Search products...",value:h,onChange:I,className:`w-full h-8 pl-10 pr-4 text-xs !border-none !outline-none !ring-0 !ring-offset-0 !shadow-none transition-all duration-300 rounded-full focus:!outline-none focus:!ring-0 focus:!border-none focus:!shadow-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 ${n?"bg-gray-100 text-gray-900 placeholder:text-gray-500":"bg-black/20 backdrop-blur-md text-white placeholder:text-white/70"}`,autoFocus:m})})}),m&&o.jsx("div",{className:"fixed left-0 right-0 top-40 z-[100] px-4",children:o.jsx("div",{className:"max-w-7xl mx-auto flex justify-end",children:o.jsx("div",{className:"w-80",children:o.jsx(Uh,{results:P,isVisible:b,isLoading:C,error:E,onResultClick:G})})})})]})]})]}),x&&o.jsx("div",{className:`md:hidden py-1.5 md:py-4 ${n?"border-t border-gray-100":"border-t border-border/20"}`,children:F.map(N=>N.hasMegaMenu?o.jsx("button",{onClick:()=>{c(!u),g(!1)},className:`block py-2 text-sm font-medium transition-all duration-500 uppercase text-left w-full ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,children:N.name},N.name):o.jsx(te,{to:N.href,onClick:()=>g(!1),className:`block py-2 text-sm font-medium transition-all duration-500 uppercase ${n?"text-[#191919] hover:text-[hsl(var(--hover))]":"text-white hover:text-[hsl(var(--hover))]"}`,children:N.name},N.name))})]}),o.jsx("div",{"data-mega-menu":!0,children:o.jsx($A,{isVisible:u})})]})},bP=om("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Me=f.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},a)=>{const l=r?Ow:"button";return o.jsx(l,{className:re(bP({variant:t,size:n,className:e})),ref:a,...i})});Me.displayName="Button";const xP=()=>{const{language:e}=Be(),t=at[e],[n,r]=f.useState(""),i=a=>{a.preventDefault(),n.trim()&&(console.log("Newsletter signup:",n),r(""))};return o.jsx("footer",{className:"text-background",style:{backgroundColor:"#191919"},children:o.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsx("div",{className:"hidden md:block",children:o.jsx("img",{src:Dr.desktop.white,alt:"SINCEVA Logo",className:"h-16 w-auto"})}),o.jsx("h3",{className:"md:hidden text-2xl font-bold tracking-wider",children:"SINCEVA"}),o.jsxs("p",{className:"text-background/80 text-sm",children:[t.theOriginOfBeauty," - Premium skincare for timeless elegance."]}),o.jsxs("div",{className:"flex space-x-4",children:[o.jsx("a",{href:"#",className:"text-background/60 hover:text-primary transition-colors",children:o.jsx(Gz,{className:"w-5 h-5"})}),o.jsx("a",{href:"#",className:"text-background/60 hover:text-primary transition-colors",children:o.jsx(Oz,{className:"w-5 h-5"})}),o.jsx("a",{href:"#",className:"text-background/60 hover:text-primary transition-colors",children:o.jsx(Xz,{className:"w-5 h-5"})})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsx("h4",{className:"font-semibold text-background",children:t.quickLinks}),o.jsxs("nav",{className:"space-y-2",children:[o.jsx(te,{to:"/about",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.theOriginOfBeauty}),o.jsx(te,{to:"/blog",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.trendsAndTips}),o.jsx(te,{to:"/contact",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.contact}),o.jsx(te,{to:"/shop",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.shop})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsx("h4",{className:"font-semibold text-background",children:t.policies}),o.jsxs("nav",{className:"space-y-2",children:[o.jsx(te,{to:"/privacy",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.privacyPolicy}),o.jsx(te,{to:"/cookie-policy",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.cookiePolicy}),o.jsx(te,{to:"/terms",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.termsAndConditions}),o.jsx(te,{to:"/consumer-ratings",className:"block text-background/80 hover:text-primary transition-colors text-sm",children:t.consumerReviewRules})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsx("h4",{className:"font-semibold text-background",children:t.stayConnected}),o.jsx("p",{className:"text-background/80 text-sm",children:t.newsletterDesc}),o.jsxs("form",{onSubmit:i,className:"space-y-3",children:[o.jsx(Nn,{type:"email",placeholder:t.enterEmail,value:n,onChange:a=>r(a.target.value),className:"bg-background/10 border-background/20 text-background placeholder:text-background/60",required:!0}),o.jsxs(Me,{type:"submit",variant:"default",className:"w-full bg-primary hover:bg-primary-dark",children:[o.jsx(ug,{className:"w-4 h-4 mr-2"}),t.subscribe]})]})]})]}),o.jsx("div",{className:"border-t border-background/20 mt-12 pt-8",children:o.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",children:[o.jsxs("p",{className:"text-background/60 text-sm",children:["© ",new Date().getFullYear()," SAFI COSMETIC LIMITED COMPANY. ",t.allRightsReserved]}),o.jsx("p",{className:"text-background/60 text-sm",children:t.craftedFor})]})})]})})},wP=()=>{const[e,t]=f.useState(!1),[n,r]=f.useState(!1);f.useEffect(()=>{localStorage.getItem("cookie_consent")||t(!0)},[]);const i=()=>{localStorage.setItem("cookie_consent","accepted"),localStorage.setItem("cookie-preferences",JSON.stringify({necessary:!0,analytics:!0,marketing:!0})),t(!1)},a=()=>{localStorage.setItem("cookie_consent","rejected"),localStorage.setItem("cookie-preferences",JSON.stringify({necessary:!0,analytics:!1,marketing:!1})),t(!1)},l=()=>{r(!n)};return e?o.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg",children:o.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-4",children:n?o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[o.jsx(qz,{className:"w-5 h-5 text-[#ef2b2d]"}),"Cookie Preferences"]}),o.jsx("button",{onClick:()=>r(!1),className:"text-gray-400 hover:text-gray-600",children:o.jsx(bl,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"grid gap-3",children:[o.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"font-medium text-gray-900",children:"Necessary Cookies"}),o.jsx("p",{className:"text-sm text-gray-600",children:"Required for site functionality"})]}),o.jsx("div",{className:"text-sm text-gray-500",children:"Always active"})]}),o.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"font-medium text-gray-900",children:"Analytics Cookies"}),o.jsx("p",{className:"text-sm text-gray-600",children:"Help us analyze site usage"})]}),o.jsx("input",{type:"checkbox",className:"h-4 w-4 text-[#ef2b2d]"})]}),o.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"font-medium text-gray-900",children:"Marketing Cookies"}),o.jsx("p",{className:"text-sm text-gray-600",children:"Personalized advertisements"})]}),o.jsx("input",{type:"checkbox",className:"h-4 w-4 text-[#ef2b2d]"})]})]}),o.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[o.jsx(Me,{onClick:a,variant:"outline",size:"sm",children:"Essential Only"}),o.jsx(Me,{onClick:i,size:"sm",className:"bg-[#ef2b2d] hover:bg-[#ef2b2d]/90",children:"Accept All"})]})]}):o.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[o.jsx(Lz,{className:"w-6 h-6 text-[#ef2b2d] mt-1 flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"We Use Cookies"}),o.jsxs("p",{className:"text-sm text-gray-600",children:["We use cookies to improve your browsing experience, personalize content, and analyze our traffic. By continuing to use our site, you consent to our use of cookies."," ",o.jsx(te,{to:"/cookie-policy",className:"text-[#ef2b2d] hover:underline",children:"Learn more"})]})]})]}),o.jsxs("div",{className:"flex flex-wrap gap-2",children:[o.jsx(Me,{onClick:l,variant:"outline",size:"sm",className:"text-gray-600 border-gray-300",children:"Preferences"}),o.jsx(Me,{onClick:a,variant:"outline",size:"sm",className:"text-gray-600 border-gray-300",children:"Reject"}),o.jsx(Me,{onClick:i,size:"sm",className:"bg-[#ef2b2d] hover:bg-[#ef2b2d]/90",children:"Accept All"})]})]})})}):null},Ke=({children:e})=>(console.log("Layout component loading..."),o.jsxs("div",{className:"min-h-screen bg-background",children:[o.jsx(vP,{}),o.jsx("main",{children:e}),o.jsx(xP,{}),o.jsx(wP,{})]}));var zP="AspectRatio",Pb=f.forwardRef((e,t)=>{const{ratio:n=1/1,style:r,...i}=e;return o.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/n}%`},"data-radix-aspect-ratio-wrapper":"",children:o.jsx(ue.div,{...i,ref:t,style:{...r,position:"absolute",top:0,right:0,bottom:0,left:0}})})});Pb.displayName=zP;var SP=Pb;const Fn=SP,CP="/assets/g%C3%B6z_kremi_banner-C-tPOpTC.jpg",EP="/assets/g%C3%B6z_kremi_banner_mobile-Bx3QMe7B.jpg",AP=({className:e=""})=>{const[t,n]=f.useState(0),[r,i]=f.useState(!1),[a,l]=f.useState(!1),[s,u]=f.useState(0),[c,m]=f.useState(0),[d,h]=f.useState(0),p=f.useRef(null),x=[{id:1,image:CP,imageMobile:EP,alt:"Göz Kremi - Eye Cream Collection"},{id:2,image:qc,imageMobile:qc,alt:"Anti-Aging Skincare Solutions"},{id:3,image:Wc,imageMobile:Wc,alt:"Face & Skin Cleansing Products"}];f.useEffect(()=>{if(r||a)return;const E=setInterval(()=>{n(P=>(P+1)%x.length)},5e3);return()=>clearInterval(E)},[r,a,x.length]);const g=f.useCallback(E=>{n(E),i(!0),setTimeout(()=>{i(!1)},1e4)},[]),b=f.useCallback(E=>{n(E==="left"?P=>(P+1)%x.length:P=>(P-1+x.length)%x.length),i(!0),setTimeout(()=>i(!1),1e4)},[x.length]),y=E=>{l(!0),u(E.touches[0].clientX),m(E.touches[0].clientX)},k=E=>{if(!a)return;m(E.touches[0].clientX);const P=E.touches[0].clientX-s;h(P)},v=()=>{if(!a)return;const E=c-s;Math.abs(E)>50&&(E>0?b("right"):b("left")),l(!1),h(0)},w=E=>{l(!0),u(E.clientX),m(E.clientX),E.preventDefault()},z=E=>{if(!a)return;m(E.clientX);const P=E.clientX-s;h(P)},S=()=>{if(!a)return;const E=c-s;Math.abs(E)>50&&(E>0?b("right"):b("left")),l(!1),h(0)},C=()=>{a&&(l(!1),h(0))};return o.jsxs("section",{className:`sinceva-hero relative overflow-hidden ${e}`,children:[o.jsx("div",{className:"md:hidden",children:o.jsx(Fn,{ratio:2/3,children:o.jsx("div",{ref:p,className:"sinceva-hero__container relative w-full h-full cursor-grab active:cursor-grabbing select-none",onTouchStart:y,onTouchMove:k,onTouchEnd:v,onMouseDown:w,onMouseMove:z,onMouseUp:S,onMouseLeave:C,children:x.map((E,P)=>o.jsxs("div",{className:`sinceva-hero__slide absolute inset-0 transition-all duration-300 ease-out ${P===t?"opacity-100":"opacity-0"}`,style:{transform:P===t&&a?`translateX(${d}px)`:"translateX(0)"},children:[o.jsx("img",{src:E.imageMobile,alt:E.alt,className:"w-full h-full object-cover pointer-events-none",draggable:!1}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"})]},E.id))})})}),o.jsx("div",{className:"hidden md:block",children:o.jsx(Fn,{ratio:3/1,children:o.jsx("div",{ref:p,className:"sinceva-hero__container relative w-full h-full cursor-grab active:cursor-grabbing select-none",onTouchStart:y,onTouchMove:k,onTouchEnd:v,onMouseDown:w,onMouseMove:z,onMouseUp:S,onMouseLeave:C,children:x.map((E,P)=>o.jsxs("div",{className:`sinceva-hero__slide absolute inset-0 transition-all duration-300 ease-out ${P===t?"opacity-100":"opacity-0"}`,style:{transform:P===t&&a?`translateX(${d}px)`:"translateX(0)"},children:[o.jsx("img",{src:E.image,alt:E.alt,className:"w-full h-full object-cover pointer-events-none",draggable:!1}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"})]},E.id))})})}),o.jsx("div",{className:"sinceva-hero__nav absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20",children:o.jsx("div",{className:"flex space-x-3",children:x.map((E,P)=>o.jsx("button",{onClick:()=>g(P),className:`sinceva-hero__dot w-3 h-3 rounded-full transition-all duration-300 ${P===t?"bg-white scale-110 shadow-lg":"bg-white/50 hover:bg-white/75"}`,"aria-label":`Go to slide ${P+1}`},P))})})]})},NP=()=>(console.log("Hero component loading..."),o.jsx(AP,{})),In=f.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:re("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));In.displayName="Card";const PP=f.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:re("flex flex-col space-y-1.5 p-6",e),...t}));PP.displayName="CardHeader";const jP=f.forwardRef(({className:e,...t},n)=>o.jsx("h3",{ref:n,className:re("text-2xl font-semibold leading-none tracking-tight",e),...t}));jP.displayName="CardTitle";const TP=f.forwardRef(({className:e,...t},n)=>o.jsx("p",{ref:n,className:re("text-sm text-muted-foreground",e),...t}));TP.displayName="CardDescription";const Ln=f.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:re("p-6 pt-0",e),...t}));Ln.displayName="CardContent";const MP=f.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:re("flex items-center p-6 pt-0",e),...t}));MP.displayName="CardFooter";function RP(e){return Object.prototype.toString.call(e)==="[object Object]"}function rp(e){return RP(e)||Array.isArray(e)}function DP(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Fm(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),a=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==a?!1:n.every(l=>{const s=e[l],u=t[l];return typeof s=="function"?`${s}`==`${u}`:!rp(s)||!rp(u)?s===u:Fm(s,u)})}function ip(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function FP(e,t){if(e.length!==t.length)return!1;const n=ip(e),r=ip(t);return n.every((i,a)=>{const l=r[a];return Fm(i,l)})}function Im(e){return typeof e=="number"}function Jc(e){return typeof e=="string"}function Ks(e){return typeof e=="boolean"}function ap(e){return Object.prototype.toString.call(e)==="[object Object]"}function Se(e){return Math.abs(e)}function Lm(e){return Math.sign(e)}function Pa(e,t){return Se(e-t)}function IP(e,t){if(e===0||t===0||Se(e)<=Se(t))return 0;const n=Pa(Se(e),Se(t));return Se(n/e)}function LP(e){return Math.round(e*100)/100}function al(e){return ll(e).map(Number)}function Qt(e){return e[Cl(e)]}function Cl(e){return Math.max(0,e.length-1)}function Om(e,t){return t===Cl(e)}function lp(e,t=0){return Array.from(Array(e),(n,r)=>t+r)}function ll(e){return Object.keys(e)}function jb(e,t){return[e,t].reduce((n,r)=>(ll(r).forEach(i=>{const a=n[i],l=r[i],s=ap(a)&&ap(l);n[i]=s?jb(a,l):l}),n),{})}function ed(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function OP(e,t){const n={start:r,center:i,end:a};function r(){return 0}function i(u){return a(u)/2}function a(u){return t-u}function l(u,c){return Jc(e)?n[e](u):e(t,u,c)}return{measure:l}}function ol(){let e=[];function t(i,a,l,s={passive:!0}){let u;if("addEventListener"in i)i.addEventListener(a,l,s),u=()=>i.removeEventListener(a,l,s);else{const c=i;c.addListener(l),u=()=>c.removeListener(l)}return e.push(u),r}function n(){e=e.filter(i=>i())}const r={add:t,clear:n};return r}function BP(e,t,n,r){const i=ol(),a=1e3/60;let l=null,s=0,u=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&x()})}function m(){p(),i.clear()}function d(b){if(!u)return;l||(l=b,n(),n());const y=b-l;for(l=b,s+=y;s>=a;)n(),s-=a;const k=s/a;r(k),u&&(u=t.requestAnimationFrame(d))}function h(){u||(u=t.requestAnimationFrame(d))}function p(){t.cancelAnimationFrame(u),l=null,s=0,u=0}function x(){l=null,s=0}return{init:c,destroy:m,start:h,stop:p,update:n,render:r}}function _P(e,t){const n=t==="rtl",r=e==="y",i=r?"y":"x",a=r?"x":"y",l=!r&&n?-1:1,s=m(),u=d();function c(x){const{height:g,width:b}=x;return r?g:b}function m(){return r?"top":n?"right":"left"}function d(){return r?"bottom":n?"left":"right"}function h(x){return x*l}return{scroll:i,cross:a,startEdge:s,endEdge:u,measureSize:c,direction:h}}function Wr(e=0,t=0){const n=Se(e-t);function r(c){return c<e}function i(c){return c>t}function a(c){return r(c)||i(c)}function l(c){return a(c)?r(c)?e:t:c}function s(c){return n?c-n*Math.ceil((c-t)/n):c}return{length:n,max:t,min:e,constrain:l,reachedAny:a,reachedMax:i,reachedMin:r,removeOffset:s}}function Tb(e,t,n){const{constrain:r}=Wr(0,e),i=e+1;let a=l(t);function l(h){return n?Se((i+h)%i):r(h)}function s(){return a}function u(h){return a=l(h),d}function c(h){return m().set(s()+h)}function m(){return Tb(e,s(),n)}const d={get:s,set:u,add:c,clone:m};return d}function KP(e,t,n,r,i,a,l,s,u,c,m,d,h,p,x,g,b,y,k){const{cross:v,direction:w}=e,z=["INPUT","SELECT","TEXTAREA"],S={passive:!1},C=ol(),E=ol(),P=Wr(50,225).constrain(p.measure(20)),T={mouse:300,touch:400},L={mouse:500,touch:600},I=x?43:25;let G=!1,F=0,Y=0,_=!1,U=!1,N=!1,A=!1;function M(H){if(!k)return;function ee(De){(Ks(k)||k(H,De))&&se(De)}const ke=t;C.add(ke,"dragstart",De=>De.preventDefault(),S).add(ke,"touchmove",()=>{},S).add(ke,"touchend",()=>{}).add(ke,"touchstart",ee).add(ke,"mousedown",ee).add(ke,"touchcancel",ye).add(ke,"contextmenu",ye).add(ke,"click",me,!0)}function B(){C.clear(),E.clear()}function O(){const H=A?n:t;E.add(H,"touchmove",W,S).add(H,"touchend",ye).add(H,"mousemove",W,S).add(H,"mouseup",ye)}function $(H){const ee=H.nodeName||"";return z.includes(ee)}function V(){return(x?L:T)[A?"mouse":"touch"]}function ne(H,ee){const ke=d.add(Lm(H)*-1),De=m.byDistance(H,!x).distance;return x||Se(H)<P?De:b&&ee?De*.5:m.byIndex(ke.get(),0).distance}function se(H){const ee=ed(H,r);A=ee,N=x&&ee&&!H.buttons&&G,G=Pa(i.get(),l.get())>=2,!(ee&&H.button!==0)&&($(H.target)||(_=!0,a.pointerDown(H),c.useFriction(0).useDuration(0),i.set(l),O(),F=a.readPoint(H),Y=a.readPoint(H,v),h.emit("pointerDown")))}function W(H){if(!ed(H,r)&&H.touches.length>=2)return ye(H);const ke=a.readPoint(H),De=a.readPoint(H,v),Xe=Pa(ke,F),ht=Pa(De,Y);if(!U&&!A&&(!H.cancelable||(U=Xe>ht,!U)))return ye(H);const pt=a.pointerMove(H);Xe>g&&(N=!0),c.useFriction(.3).useDuration(.75),s.start(),i.add(w(pt)),H.preventDefault()}function ye(H){const ke=m.byDistance(0,!1).index!==d.get(),De=a.pointerUp(H)*V(),Xe=ne(w(De),ke),ht=IP(De,Xe),pt=I-10*ht,Ze=y+ht/50;U=!1,_=!1,E.clear(),c.useDuration(pt).useFriction(Ze),u.distance(Xe,!x),A=!1,h.emit("pointerUp")}function me(H){N&&(H.stopPropagation(),H.preventDefault(),N=!1)}function we(){return _}return{init:M,destroy:B,pointerDown:we}}function HP(e,t){let r,i;function a(d){return d.timeStamp}function l(d,h){const x=`client${(h||e.scroll)==="x"?"X":"Y"}`;return(ed(d,t)?d:d.touches[0])[x]}function s(d){return r=d,i=d,l(d)}function u(d){const h=l(d)-l(i),p=a(d)-a(r)>170;return i=d,p&&(r=d),h}function c(d){if(!r||!i)return 0;const h=l(i)-l(r),p=a(d)-a(r),x=a(d)-a(i)>170,g=h/p;return p&&!x&&Se(g)>.1?g:0}return{pointerDown:s,pointerMove:u,pointerUp:c,readPoint:l}}function GP(){function e(n){const{offsetTop:r,offsetLeft:i,offsetWidth:a,offsetHeight:l}=n;return{top:r,right:i+a,bottom:r+l,left:i,width:a,height:l}}return{measure:e}}function UP(e){function t(r){return e*(r/100)}return{measure:t}}function YP(e,t,n,r,i,a,l){const s=[e].concat(r);let u,c,m=[],d=!1;function h(b){return i.measureSize(l.measure(b))}function p(b){if(!a)return;c=h(e),m=r.map(h);function y(k){for(const v of k){if(d)return;const w=v.target===e,z=r.indexOf(v.target),S=w?c:m[z],C=h(w?e:r[z]);if(Se(C-S)>=.5){b.reInit(),t.emit("resize");break}}}u=new ResizeObserver(k=>{(Ks(a)||a(b,k))&&y(k)}),n.requestAnimationFrame(()=>{s.forEach(k=>u.observe(k))})}function x(){d=!0,u&&u.disconnect()}return{init:p,destroy:x}}function VP(e,t,n,r,i,a){let l=0,s=0,u=i,c=a,m=e.get(),d=0;function h(){const S=r.get()-e.get(),C=!u;let E=0;return C?(l=0,n.set(r),e.set(r),E=S):(n.set(e),l+=S/u,l*=c,m+=l,e.add(l),E=m-d),s=Lm(E),d=m,z}function p(){const S=r.get()-t.get();return Se(S)<.001}function x(){return u}function g(){return s}function b(){return l}function y(){return v(i)}function k(){return w(a)}function v(S){return u=S,z}function w(S){return c=S,z}const z={direction:g,duration:x,velocity:b,seek:h,settled:p,useBaseFriction:k,useBaseDuration:y,useFriction:w,useDuration:v};return z}function $P(e,t,n,r,i){const a=i.measure(10),l=i.measure(50),s=Wr(.1,.99);let u=!1;function c(){return!(u||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function m(p){if(!c())return;const x=e.reachedMin(t.get())?"min":"max",g=Se(e[x]-t.get()),b=n.get()-t.get(),y=s.constrain(g/l);n.subtract(b*y),!p&&Se(b)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(p){u=!p}return{shouldConstrain:c,constrain:m,toggleActive:d}}function qP(e,t,n,r,i){const a=Wr(-t+e,0),l=d(),s=m(),u=h();function c(x,g){return Pa(x,g)<=1}function m(){const x=l[0],g=Qt(l),b=l.lastIndexOf(x),y=l.indexOf(g)+1;return Wr(b,y)}function d(){return n.map((x,g)=>{const{min:b,max:y}=a,k=a.constrain(x),v=!g,w=Om(n,g);return v?y:w||c(b,k)?b:c(y,k)?y:k}).map(x=>parseFloat(x.toFixed(3)))}function h(){if(t<=e+i)return[a.max];if(r==="keepSnaps")return l;const{min:x,max:g}=s;return l.slice(x,g)}return{snapsContained:u,scrollContainLimit:s}}function WP(e,t,n){const r=t[0],i=n?r-e:Qt(t);return{limit:Wr(i,r)}}function QP(e,t,n,r){const a=t.min+.1,l=t.max+.1,{reachedMin:s,reachedMax:u}=Wr(a,l);function c(h){return h===1?u(n.get()):h===-1?s(n.get()):!1}function m(h){if(!c(h))return;const p=e*(h*-1);r.forEach(x=>x.add(p))}return{loop:m}}function XP(e){const{max:t,length:n}=e;function r(a){const l=a-t;return n?l/-n:0}return{get:r}}function ZP(e,t,n,r,i){const{startEdge:a,endEdge:l}=e,{groupSlides:s}=i,u=d().map(t.measure),c=h(),m=p();function d(){return s(r).map(g=>Qt(g)[l]-g[0][a]).map(Se)}function h(){return r.map(g=>n[a]-g[a]).map(g=>-Se(g))}function p(){return s(c).map(g=>g[0]).map((g,b)=>g+u[b])}return{snaps:c,snapsAligned:m}}function JP(e,t,n,r,i,a){const{groupSlides:l}=i,{min:s,max:u}=r,c=m();function m(){const h=l(a),p=!e||t==="keepSnaps";return n.length===1?[a]:p?h:h.slice(s,u).map((x,g,b)=>{const y=!g,k=Om(b,g);if(y){const v=Qt(b[0])+1;return lp(v)}if(k){const v=Cl(a)-Qt(b)[0]+1;return lp(v,Qt(b)[0])}return x})}return{slideRegistry:c}}function ej(e,t,n,r,i){const{reachedAny:a,removeOffset:l,constrain:s}=r;function u(x){return x.concat().sort((g,b)=>Se(g)-Se(b))[0]}function c(x){const g=e?l(x):s(x),b=t.map((k,v)=>({diff:m(k-g,0),index:v})).sort((k,v)=>Se(k.diff)-Se(v.diff)),{index:y}=b[0];return{index:y,distance:g}}function m(x,g){const b=[x,x+n,x-n];if(!e)return x;if(!g)return u(b);const y=b.filter(k=>Lm(k)===g);return y.length?u(y):Qt(b)-n}function d(x,g){const b=t[x]-i.get(),y=m(b,g);return{index:x,distance:y}}function h(x,g){const b=i.get()+x,{index:y,distance:k}=c(b),v=!e&&a(b);if(!g||v)return{index:y,distance:x};const w=t[y]-k,z=x+m(w,0);return{index:y,distance:z}}return{byDistance:h,byIndex:d,shortcut:m}}function tj(e,t,n,r,i,a,l){function s(d){const h=d.distance,p=d.index!==t.get();a.add(h),h&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),p&&(n.set(t.get()),t.set(d.index),l.emit("select"))}function u(d,h){const p=i.byDistance(d,h);s(p)}function c(d,h){const p=t.clone().set(d),x=i.byIndex(p.get(),h);s(x)}return{distance:u,index:c}}function nj(e,t,n,r,i,a,l,s){const u={passive:!0,capture:!0};let c=0;function m(p){if(!s)return;function x(g){if(new Date().getTime()-c>10)return;l.emit("slideFocusStart"),e.scrollLeft=0;const k=n.findIndex(v=>v.includes(g));Im(k)&&(i.useDuration(0),r.index(k,0),l.emit("slideFocus"))}a.add(document,"keydown",d,!1),t.forEach((g,b)=>{a.add(g,"focus",y=>{(Ks(s)||s(p,y))&&x(b)},u)})}function d(p){p.code==="Tab"&&(c=new Date().getTime())}return{init:m}}function ga(e){let t=e;function n(){return t}function r(u){t=l(u)}function i(u){t+=l(u)}function a(u){t-=l(u)}function l(u){return Im(u)?u:u.get()}return{get:n,set:r,add:i,subtract:a}}function Mb(e,t){const n=e.scroll==="x"?l:s,r=t.style;let i=null,a=!1;function l(h){return`translate3d(${h}px,0px,0px)`}function s(h){return`translate3d(0px,${h}px,0px)`}function u(h){if(a)return;const p=LP(e.direction(h));p!==i&&(r.transform=n(p),i=p)}function c(h){a=!h}function m(){a||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:m,to:u,toggleActive:c}}function rj(e,t,n,r,i,a,l,s,u){const m=al(i),d=al(i).reverse(),h=y().concat(k());function p(C,E){return C.reduce((P,T)=>P-i[T],E)}function x(C,E){return C.reduce((P,T)=>p(P,E)>0?P.concat([T]):P,[])}function g(C){return a.map((E,P)=>({start:E-r[P]+.5+C,end:E+t-.5+C}))}function b(C,E,P){const T=g(E);return C.map(L=>{const I=P?0:-n,G=P?n:0,F=P?"end":"start",Y=T[L][F];return{index:L,loopPoint:Y,slideLocation:ga(-1),translate:Mb(e,u[L]),target:()=>s.get()>Y?I:G}})}function y(){const C=l[0],E=x(d,C);return b(E,n,!1)}function k(){const C=t-l[0]-1,E=x(m,C);return b(E,-n,!0)}function v(){return h.every(({index:C})=>{const E=m.filter(P=>P!==C);return p(E,t)<=.1})}function w(){h.forEach(C=>{const{target:E,translate:P,slideLocation:T}=C,L=E();L!==T.get()&&(P.to(L),T.set(L))})}function z(){h.forEach(C=>C.translate.clear())}return{canLoop:v,clear:z,loop:w,loopPoints:h}}function ij(e,t,n){let r,i=!1;function a(u){if(!n)return;function c(m){for(const d of m)if(d.type==="childList"){u.reInit(),t.emit("slidesChanged");break}}r=new MutationObserver(m=>{i||(Ks(n)||n(u,m))&&c(m)}),r.observe(e,{childList:!0})}function l(){r&&r.disconnect(),i=!0}return{init:a,destroy:l}}function aj(e,t,n,r){const i={};let a=null,l=null,s,u=!1;function c(){s=new IntersectionObserver(x=>{u||(x.forEach(g=>{const b=t.indexOf(g.target);i[b]=g}),a=null,l=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(x=>s.observe(x))}function m(){s&&s.disconnect(),u=!0}function d(x){return ll(i).reduce((g,b)=>{const y=parseInt(b),{isIntersecting:k}=i[y];return(x&&k||!x&&!k)&&g.push(y),g},[])}function h(x=!0){if(x&&a)return a;if(!x&&l)return l;const g=d(x);return x&&(a=g),x||(l=g),g}return{init:c,destroy:m,get:h}}function lj(e,t,n,r,i,a){const{measureSize:l,startEdge:s,endEdge:u}=e,c=n[0]&&i,m=x(),d=g(),h=n.map(l),p=b();function x(){if(!c)return 0;const k=n[0];return Se(t[s]-k[s])}function g(){if(!c)return 0;const k=a.getComputedStyle(Qt(r));return parseFloat(k.getPropertyValue(`margin-${u}`))}function b(){return n.map((k,v,w)=>{const z=!v,S=Om(w,v);return z?h[v]+m:S?h[v]+d:w[v+1][s]-k[s]}).map(Se)}return{slideSizes:h,slideSizesWithGaps:p,startGap:m,endGap:d}}function oj(e,t,n,r,i,a,l,s,u){const{startEdge:c,endEdge:m,direction:d}=e,h=Im(n);function p(y,k){return al(y).filter(v=>v%k===0).map(v=>y.slice(v,v+k))}function x(y){return y.length?al(y).reduce((k,v,w)=>{const z=Qt(k)||0,S=z===0,C=v===Cl(y),E=i[c]-a[z][c],P=i[c]-a[v][m],T=!r&&S?d(l):0,L=!r&&C?d(s):0,I=Se(P-L-(E+T));return w&&I>t+u&&k.push(v),C&&k.push(y.length),k},[]).map((k,v,w)=>{const z=Math.max(w[v-1]||0);return y.slice(z,k)}):[]}function g(y){return h?p(y,n):x(y)}return{groupSlides:g}}function sj(e,t,n,r,i,a,l){const{align:s,axis:u,direction:c,startIndex:m,loop:d,duration:h,dragFree:p,dragThreshold:x,inViewThreshold:g,slidesToScroll:b,skipSnaps:y,containScroll:k,watchResize:v,watchSlides:w,watchDrag:z,watchFocus:S}=a,C=2,E=GP(),P=E.measure(t),T=n.map(E.measure),L=_P(u,c),I=L.measureSize(P),G=UP(I),F=OP(s,I),Y=!d&&!!k,_=d||!!k,{slideSizes:U,slideSizesWithGaps:N,startGap:A,endGap:M}=lj(L,P,T,n,_,i),B=oj(L,I,b,d,P,T,A,M,C),{snaps:O,snapsAligned:$}=ZP(L,F,P,T,B),V=-Qt(O)+Qt(N),{snapsContained:ne,scrollContainLimit:se}=qP(I,V,$,k,C),W=Y?ne:$,{limit:ye}=WP(V,W,d),me=Tb(Cl(W),m,d),we=me.clone(),ae=al(n),H=({dragHandler:Ft,scrollBody:ta,scrollBounds:ti,options:{loop:Hn}})=>{Hn||ti.constrain(Ft.pointerDown()),ta.seek()},ee=({scrollBody:Ft,translate:ta,location:ti,offsetLocation:Hn,previousLocation:Gn,scrollLooper:Nl,slideLooper:Un,dragHandler:$s,animation:qs,eventHandler:na,scrollBounds:Pl,options:{loop:jl}},ni)=>{const It=Ft.settled(),Ws=!Pl.shouldConstrain(),Q=jl?It:It&&Ws,oe=Q&&!$s.pointerDown();oe&&qs.stop();const fe=ti.get()*ni+Gn.get()*(1-ni);Hn.set(fe),jl&&(Nl.loop(Ft.direction()),Un.loop()),ta.to(Hn.get()),oe&&na.emit("settle"),Q||na.emit("scroll")},ke=BP(r,i,()=>H(ea),Ft=>ee(ea,Ft)),De=.68,Xe=W[me.get()],ht=ga(Xe),pt=ga(Xe),Ze=ga(Xe),tn=ga(Xe),Rt=VP(ht,Ze,pt,tn,h,De),ei=ej(d,W,V,ye,tn),Dt=tj(ke,me,we,Rt,ei,tn,l),El=XP(ye),Al=ol(),ot=aj(t,n,l,g),{slideRegistry:gn}=JP(Y,k,W,se,B,ae),Vs=nj(e,n,gn,Dt,Rt,Al,l,S),ea={ownerDocument:r,ownerWindow:i,eventHandler:l,containerRect:P,slideRects:T,animation:ke,axis:L,dragHandler:KP(L,e,r,i,tn,HP(L,i),ht,ke,Dt,Rt,ei,me,l,G,p,x,y,De,z),eventStore:Al,percentOfView:G,index:me,indexPrevious:we,limit:ye,location:ht,offsetLocation:Ze,previousLocation:pt,options:a,resizeHandler:YP(t,l,i,n,L,v,E),scrollBody:Rt,scrollBounds:$P(ye,Ze,tn,Rt,G),scrollLooper:QP(V,ye,Ze,[ht,Ze,pt,tn]),scrollProgress:El,scrollSnapList:W.map(El.get),scrollSnaps:W,scrollTarget:ei,scrollTo:Dt,slideLooper:rj(L,I,V,U,N,O,W,Ze,n),slideFocus:Vs,slidesHandler:ij(t,l,w),slidesInView:ot,slideIndexes:ae,slideRegistry:gn,slidesToScroll:B,target:tn,translate:Mb(L,t)};return ea}function uj(){let e={},t;function n(c){t=c}function r(c){return e[c]||[]}function i(c){return r(c).forEach(m=>m(t,c)),u}function a(c,m){return e[c]=r(c).concat([m]),u}function l(c,m){return e[c]=r(c).filter(d=>d!==m),u}function s(){e={}}const u={init:n,emit:i,off:l,on:a,clear:s};return u}const cj={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function dj(e){function t(a,l){return jb(a,l||{})}function n(a){const l=a.breakpoints||{},s=ll(l).filter(u=>e.matchMedia(u).matches).map(u=>l[u]).reduce((u,c)=>t(u,c),{});return t(a,s)}function r(a){return a.map(l=>ll(l.breakpoints||{})).reduce((l,s)=>l.concat(s),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function mj(e){let t=[];function n(a,l){return t=l.filter(({options:s})=>e.optionsAtMedia(s).active!==!1),t.forEach(s=>s.init(a,e)),l.reduce((s,u)=>Object.assign(s,{[u.name]:u}),{})}function r(){t=t.filter(a=>a.destroy())}return{init:n,destroy:r}}function is(e,t,n){const r=e.ownerDocument,i=r.defaultView,a=dj(i),l=mj(a),s=ol(),u=uj(),{mergeOptions:c,optionsAtMedia:m,optionsMediaQueries:d}=a,{on:h,off:p,emit:x}=u,g=L;let b=!1,y,k=c(cj,is.globalOptions),v=c(k),w=[],z,S,C;function E(){const{container:ae,slides:H}=v;S=(Jc(ae)?e.querySelector(ae):ae)||e.children[0];const ke=Jc(H)?S.querySelectorAll(H):H;C=[].slice.call(ke||S.children)}function P(ae){const H=sj(e,S,C,r,i,ae,u);if(ae.loop&&!H.slideLooper.canLoop()){const ee=Object.assign({},ae,{loop:!1});return P(ee)}return H}function T(ae,H){b||(k=c(k,ae),v=m(k),w=H||w,E(),y=P(v),d([k,...w.map(({options:ee})=>ee)]).forEach(ee=>s.add(ee,"change",L)),v.active&&(y.translate.to(y.location.get()),y.animation.init(),y.slidesInView.init(),y.slideFocus.init(we),y.eventHandler.init(we),y.resizeHandler.init(we),y.slidesHandler.init(we),y.options.loop&&y.slideLooper.loop(),S.offsetParent&&C.length&&y.dragHandler.init(we),z=l.init(we,w)))}function L(ae,H){const ee=B();I(),T(c({startIndex:ee},ae),H),u.emit("reInit")}function I(){y.dragHandler.destroy(),y.eventStore.clear(),y.translate.clear(),y.slideLooper.clear(),y.resizeHandler.destroy(),y.slidesHandler.destroy(),y.slidesInView.destroy(),y.animation.destroy(),l.destroy(),s.clear()}function G(){b||(b=!0,s.clear(),I(),u.emit("destroy"),u.clear())}function F(ae,H,ee){!v.active||b||(y.scrollBody.useBaseFriction().useDuration(H===!0?0:v.duration),y.scrollTo.index(ae,ee||0))}function Y(ae){const H=y.index.add(1).get();F(H,ae,-1)}function _(ae){const H=y.index.add(-1).get();F(H,ae,1)}function U(){return y.index.add(1).get()!==B()}function N(){return y.index.add(-1).get()!==B()}function A(){return y.scrollSnapList}function M(){return y.scrollProgress.get(y.offsetLocation.get())}function B(){return y.index.get()}function O(){return y.indexPrevious.get()}function $(){return y.slidesInView.get()}function V(){return y.slidesInView.get(!1)}function ne(){return z}function se(){return y}function W(){return e}function ye(){return S}function me(){return C}const we={canScrollNext:U,canScrollPrev:N,containerNode:ye,internalEngine:se,destroy:G,off:p,on:h,emit:x,plugins:ne,previousScrollSnap:O,reInit:g,rootNode:W,scrollNext:Y,scrollPrev:_,scrollProgress:M,scrollSnapList:A,scrollTo:F,selectedScrollSnap:B,slideNodes:me,slidesInView:$,slidesNotInView:V};return T(t,n),setTimeout(()=>u.emit("init"),0),we}is.globalOptions=void 0;function Bm(e={},t=[]){const n=f.useRef(e),r=f.useRef(t),[i,a]=f.useState(),[l,s]=f.useState(),u=f.useCallback(()=>{i&&i.reInit(n.current,r.current)},[i]);return f.useEffect(()=>{Fm(n.current,e)||(n.current=e,u())},[e,u]),f.useEffect(()=>{FP(r.current,t)||(r.current=t,u())},[t,u]),f.useEffect(()=>{if(DP()&&l){is.globalOptions=Bm.globalOptions;const c=is(l,n.current,r.current);return a(c),()=>c.destroy()}else a(void 0)},[l,a]),[s,i]}Bm.globalOptions=void 0;const Rb=f.createContext(null);function Hs(){const e=f.useContext(Rb);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const sl=f.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:r,className:i,children:a,...l},s)=>{const[u,c]=Bm({...t,axis:e==="horizontal"?"x":"y"},r),[m,d]=f.useState(!1),[h,p]=f.useState(!1),x=f.useCallback(k=>{k&&(d(k.canScrollPrev()),p(k.canScrollNext()))},[]),g=f.useCallback(()=>{c==null||c.scrollPrev()},[c]),b=f.useCallback(()=>{c==null||c.scrollNext()},[c]),y=f.useCallback(k=>{k.key==="ArrowLeft"?(k.preventDefault(),g()):k.key==="ArrowRight"&&(k.preventDefault(),b())},[g,b]);return f.useEffect(()=>{!c||!n||n(c)},[c,n]),f.useEffect(()=>{if(c)return x(c),c.on("reInit",x),c.on("select",x),()=>{c==null||c.off("select",x)}},[c,x]),o.jsx(Rb.Provider,{value:{carouselRef:u,api:c,opts:t,orientation:e||((t==null?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:g,scrollNext:b,canScrollPrev:m,canScrollNext:h},children:o.jsx("div",{ref:s,onKeyDownCapture:y,className:re("relative",i),role:"region","aria-roledescription":"carousel",...l,children:a})})});sl.displayName="Carousel";const ul=f.forwardRef(({className:e,...t},n)=>{const{carouselRef:r,orientation:i}=Hs();return o.jsx("div",{ref:r,className:"overflow-hidden",children:o.jsx("div",{ref:n,className:re("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...t})})});ul.displayName="CarouselContent";const cl=f.forwardRef(({className:e,...t},n)=>{const{orientation:r}=Hs();return o.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:re("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",e),...t})});cl.displayName="CarouselItem";const _m=f.forwardRef(({className:e,variant:t="outline",size:n="icon",...r},i)=>{const{orientation:a,scrollPrev:l,canScrollPrev:s}=Hs();return o.jsxs(Me,{ref:i,variant:t,size:n,className:re("absolute  h-8 w-8 rounded-full",a==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!s,onClick:l,...r,children:[o.jsx(og,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:"Previous slide"})]})});_m.displayName="CarouselPrevious";const Km=f.forwardRef(({className:e,variant:t="outline",size:n="icon",...r},i)=>{const{orientation:a,scrollNext:l,canScrollNext:s}=Hs();return o.jsxs(Me,{ref:i,variant:t,size:n,className:re("absolute h-8 w-8 rounded-full",a==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!s,onClick:l,...r,children:[o.jsx(qa,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:"Next slide"})]})});Km.displayName="CarouselNext";const fj=({title:e,subtitle:t,categories:n})=>{const{language:r}=Be(),i=at[r];return o.jsx("section",{className:"py-20",style:{backgroundColor:"#191919"},children:o.jsxs("div",{className:"container mx-auto max-w-7xl px-4",children:[o.jsxs("div",{className:"text-center mb-16",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-white",children:e}),o.jsx("p",{className:"text-xl text-white/80 max-w-2xl mx-auto",children:t})]}),o.jsx("div",{className:"block md:hidden px-4",children:o.jsx(sl,{opts:{align:"start"},className:"w-full",children:o.jsx(ul,{className:"-ml-2",children:n.map(a=>o.jsx(cl,{className:"pl-2 basis-[60%]",children:o.jsx(te,{to:a.href,className:"group block",children:o.jsx(In,{className:"h-[380px] hover:shadow-luxury transition-all duration-300 bg-transparent border-white/20 overflow-hidden rounded-lg",children:o.jsxs(Ln,{className:"p-0 relative h-full",children:[o.jsx("div",{className:"absolute inset-0",children:o.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover object-center"})}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30",children:o.jsxs("div",{className:"p-4 h-full flex flex-col",children:[o.jsxs("div",{className:"h-16 mb-6",children:[o.jsx("h3",{className:"text-lg font-semibold group-hover:text-primary transition-colors text-black mb-2 line-clamp-2",children:a.title}),o.jsx("p",{className:"text-black/70 text-sm line-clamp-1",children:a.description})]}),o.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:o.jsxs("span",{className:"text-primary text-sm font-medium group-hover:gap-2 transition-all flex items-center",children:[i.homepage.exploreCollection,o.jsx(qa,{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"})]})})]})})]})})})},a.id))})})}),o.jsx("div",{className:"hidden md:grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map(a=>o.jsx(te,{to:a.href,className:"group",children:o.jsx(In,{className:"h-[380px] hover:shadow-luxury transition-all duration-300 bg-transparent border-white/20 overflow-hidden rounded-lg",children:o.jsxs(Ln,{className:"p-0 relative h-full",children:[o.jsx("div",{className:"absolute inset-0",children:o.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover object-center"})}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30",children:o.jsxs("div",{className:"p-6 h-full flex flex-col",children:[o.jsxs("div",{className:"h-20 mb-6",children:[o.jsx("h3",{className:"text-xl font-semibold group-hover:text-primary transition-colors text-black mb-3 line-clamp-2",children:a.title}),o.jsx("p",{className:"text-black/70 text-sm line-clamp-1",children:a.description})]}),o.jsx("div",{className:"absolute bottom-6 left-6 right-6",children:o.jsxs("span",{className:"text-primary text-sm font-medium group-hover:gap-2 transition-all flex items-center",children:[i.homepage.exploreCollection,o.jsx(qa,{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"})]})})]})})]})})},a.id))})]})})},hj=()=>{const{language:e}=Be(),t=at[e],n=UA.categories.map(r=>{const i=(a,l)=>l.split(".").reduce((s,u)=>s==null?void 0:s[u],a)||"";return{...r,title:i(t,r.titleKey),description:i(t,r.descriptionKey)}});return o.jsx(fj,{title:t.homepage.categoriesTitle,subtitle:t.homepage.categoriesSubtitle,categories:n})},Db=({isOpen:e,onClose:t,productName:n,stores:r})=>{const{language:i}=Be(),a=at[i];if(!e)return null;const l=u=>{window.open(u,"_blank","noopener,noreferrer")},s=u=>{u.target===u.currentTarget&&t()};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:s,children:o.jsx(In,{className:"relative bg-[#191919] backdrop-blur-md border-t border-white/20 rounded-t-lg w-full h-[33vh]",children:o.jsxs(Ln,{className:"p-6 text-center",children:[o.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors",children:o.jsx(bl,{className:"w-5 h-5 text-white"})}),o.jsx("h3",{className:"font-semibold text-lg text-white mb-2 pr-8",children:n}),o.jsx("p",{className:"text-sm text-white/70 mb-6",children:a.productCard.available}),o.jsx("div",{className:"space-y-4",children:r.map(u=>o.jsx("button",{onClick:()=>l(u.url),className:"w-full flex items-center justify-center p-4 hover:bg-white/10 transition-colors rounded-full",children:o.jsx("img",{src:u.logo,alt:u.name,className:"h-8 w-auto max-w-full object-contain"})},u.id))})]})})})},Hm=({product:e,className:t=""})=>{const[n,r]=R.useState(!1),{language:i}=Be(),a=at[i],u=[{id:"trendyol",name:"Trendyol",logo:"/lovable-uploads/081fc38c-4560-45a6-983f-80febd33d0e4.png",url:{"Sinceva Brightening Vitamin C Serum 30 ml":"https://www.trendyol.com/pd/sinceva/vitamin-c-serum-5-c-vitamini-aloe-vera-elma-ozlu-ton-esitleyici-aydinlatici-30ml-p-985597681?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Spot Arbutin Serum 30 ml":"https://www.trendyol.com/pd/sinceva/arbutin-serum-2-alfa-arbutin-niasinamid-elma-ozlu-leke-karsiti-ton-esitleyici-30ml-p-985597018?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Wrinkle Eye Cream 20 ml":"https://www.trendyol.com/pd/sinceva/goz-cevresi-kremi-proxylane-kolajen-elma-ozlu-kirisiklik-ve-morluk-karsiti-20ml-p-985597222?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Aging Night Cream 50 ml":"https://www.trendyol.com/pd/sinceva/gece-kremi-retinol-niasinamid-elma-ozlu-ince-cizgi-kirisiklik-karsiti-50ml-p-985597313?merchantId=1083214&filterOverPriceListings=false","Sinceva Skin Renewing Tonic 200 ml":"https://www.trendyol.com/pd/sinceva/cilt-yenileyici-tonik-5-glikolik-asit-elma-ozlu-gozenek-sikilastirici-sebum-dengesi-200ml-p-985596983?merchantId=1083214&filterOverPriceListings=false","Sinceva Purifying Peeling Cream Scrub 200 ml":"https://www.trendyol.com/pd/sinceva/peeling-scrub-krem-kayisi-cekirdegi-partikullu-elma-ozlu-olu-deri-gozenek-arindirici-200ml-p-985597046?merchantId=1083214&filterOverPriceListings=false","Sinceva Purifying Face Cleansing Foam 200 ml":"https://www.trendyol.com/pd/sinceva/yuz-temizleme-kopugu-aloe-vera-elma-ozlu-nazik-temizleyici-arindirici-200ml-p-985596926?merchantId=1083214&filterOverPriceListings=false","Sinceva SPF 50+ Daily SunCare Cream 100 ml":"https://www.trendyol.com/pd/sinceva/gunes-kremi-spf-50-aloe-vera-panthenol-elma-ozlu-genis-spektrumlu-uva-uvb-koruma-100ml-p-985596960?merchantId=1083214&filterOverPriceListings=false","Sinceva Hyaluronic Acid Moisturizing Cream 50 ml":"https://www.trendyol.com/pd/sinceva/hyaluronik-asit-gunluk-nemlendirici-krem-panthenol-elma-ozlu-yogun-nem-bariyer-onarici-50ml-p-985596967?merchantId=1083214&filterOverPriceListings=false"}[e.name]||"https://www.trendyol.com"}];return o.jsxs(o.Fragment,{children:[o.jsx(te,{to:`/product/${e.id}`,children:o.jsx(In,{className:`group hover:shadow-luxury transition-all duration-300 cursor-pointer overflow-hidden rounded-lg ${t}`,children:o.jsx(Ln,{className:"p-0",children:o.jsx(Fn,{ratio:2/3,children:o.jsxs("div",{className:"relative w-full h-full",children:[o.jsx("img",{src:e.image||"https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:e.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30",children:o.jsxs("div",{className:"p-4 h-full flex flex-col",children:[o.jsx("div",{className:"flex-1",children:o.jsx("h3",{className:"text-lg font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2",children:e.name})}),o.jsx("div",{className:"mt-auto flex items-center justify-center",children:o.jsx(Me,{variant:"ghost",size:"sm",className:"w-full bg-transparent text-black hover:bg-transparent hover:text-[#ef2b2d] transition-all duration-200 hover:scale-105 font-semibold",onClick:c=>{c.preventDefault(),c.stopPropagation(),r(!0)},children:a.productCard.buyNow})})]})})]})})})})}),o.jsx(Db,{isOpen:n,onClose:()=>r(!1),productName:e.name,stores:u})]})},pj=()=>{const{language:e}=Be(),t=at[e],[n,r]=f.useState(6),i=()=>{r(s=>s+6)},a=nl.products.slice(0,n),l=n<nl.products.length;return o.jsx("section",{className:"py-20 bg-gray-50",children:o.jsxs("div",{className:"container mx-auto max-w-7xl px-4",children:[o.jsxs("div",{className:"text-center mb-16",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-[#191919]",children:t.homepage.allProductsTitle}),o.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:t.homepage.allProductsSubtitle})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:a.map(s=>o.jsx(Hm,{product:s},s.id))}),l&&o.jsx("div",{className:"text-center mt-12",children:o.jsx("button",{onClick:i,className:"bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors",children:t.homepage.loadMore})})]})})},yj=()=>(console.log("HomeTemplate loading..."),o.jsxs(Ke,{children:[o.jsx(NP,{}),o.jsx(hj,{}),o.jsx(pj,{})]})),kj=()=>(console.log("Index page loading..."),o.jsx(yj,{})),gj=()=>{const e=Kn();return f.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),o.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),o.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),o.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},dn=({title:e,subtitle:t,backgroundImage:n,backgroundImageMobile:r,backgroundClass:i="bg-gradient-to-br from-primary/10 via-background to-secondary/20"})=>o.jsxs("section",{className:"relative overflow-hidden",children:[o.jsx("div",{className:"md:hidden",children:o.jsx(Fn,{ratio:2/3,children:o.jsxs("div",{className:`relative w-full h-full flex items-center justify-center ${i}`,children:[(r||n)&&o.jsxs("div",{className:"absolute inset-0 z-0",children:[o.jsx("img",{src:r||n,alt:e,className:"w-full h-full object-cover"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"})]}),o.jsx("div",{className:"relative z-10"})]})})}),o.jsx("div",{className:"hidden md:block",children:o.jsx(Fn,{ratio:3/1,children:o.jsxs("div",{className:`relative w-full h-full flex items-center justify-center ${i}`,children:[n&&o.jsxs("div",{className:"absolute inset-0 z-0",children:[o.jsx("img",{src:n,alt:e,className:"w-full h-full object-cover"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"})]}),o.jsx("div",{className:"relative z-10"})]})})})]}),Fb="/assets/tips_banner-C9vmfIIJ.jpg",Ib="/assets/tips_banner_mobile-D7x4OlEW.jpg",td=[{id:"apple-skin-benefits",date:"2024-03-20",author:"SincEva",readTime:"8",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80"},{id:"morning-skincare-routine",date:"2024-03-15",author:"SincEva",readTime:"7",category:"daily-care",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"},{id:"vitamin-c-benefits",date:"2024-03-10",author:"SincEva",readTime:"9",category:"ingredients",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"},{id:"natural-face-masks",date:"2024-03-08",author:"SincEva",readTime:"10",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"},{id:"summer-sun-protection",date:"2024-03-05",author:"SincEva",readTime:"8",category:"sun-care",image:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"},{id:"honey-skincare-benefits",date:"2024-03-01",author:"SincEva",readTime:"7",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1587049352846-4a222e784691?auto=format&fit=crop&w=800&q=80"},{id:"night-cream-importance",date:"2024-02-28",author:"SincEva",readTime:"6",category:"night-care",image:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80"},{id:"eye-cream-guide",date:"2024-02-22",author:"SincEva",readTime:"8",category:"eye-care",image:"https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"},{id:"green-tea-antioxidants",date:"2024-02-20",author:"SincEva",readTime:"7",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"},{id:"arbutin-skin-brightening",date:"2024-02-18",author:"SincEva",readTime:"9",category:"ingredients",image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"},{id:"chemical-peeling-guide",date:"2024-02-12",author:"SincEva",readTime:"11",category:"treatments",image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"},{id:"hydration-secrets",date:"2024-02-08",author:"SincEva",readTime:"8",category:"hydration",image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"},{id:"aloe-vera-healing",date:"2024-02-05",author:"SincEva",readTime:"6",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80"},{id:"anti-aging-strategies",date:"2024-02-02",author:"SincEva",readTime:"12",category:"anti-aging",image:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"},{id:"toner-benefits",date:"2024-01-28",author:"SincEva",readTime:"6",category:"cleansing",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"},{id:"winter-skincare-tips",date:"2024-01-22",author:"SincEva",readTime:"9",category:"seasonal",image:"https://images.unsplash.com/photo-1609690409547-ba5d5f60c3c6?auto=format&fit=crop&w=800&q=80"},{id:"rose-water-benefits",date:"2024-01-20",author:"SincEva",readTime:"5",category:"natural-ingredients",image:"https://images.unsplash.com/photo-1595431025698-b7b2b0c7d91e?auto=format&fit=crop&w=800&q=80"},{id:"acne-prone-skin-care",date:"2024-01-18",author:"SincEva",readTime:"10",category:"problem-skin",image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"},{id:"double-cleansing-method",date:"2024-01-12",author:"SincEva",readTime:"7",category:"cleansing",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"},{id:"retinol-beginners-guide",date:"2024-01-08",author:"SincEva",readTime:"11",category:"ingredients",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"}],vj={"apple-skin-benefits":{title:"Elmanın Cilde Faydaları: Doğanın Mucizevi Hediyesi",excerpt:"Elma sadece sağlıklı bir meyve değil, aynı zamanda cildiniz için harika bir bakım kaynağıdır. İşte elmanın cildinize sağlayacağı inanılmaz faydalar...",content:`Elma, "günde bir elma doktoru uzak tutar" sözüyle bilinen sağlıklı bir meyve olmasının yanı sıra, cilt bakımında da mucizevi etkilere sahiptir. Hem yenildiğinde içeriden hem de cilde uygulandığında dışarıdan cildinizi besler ve güzelleştirir.

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

Cildinize gösterdiğiniz özen ve bilimsel yaklaşım, yıllar sonra size en güzel hediyeyi verecektir: Genç, sağlıklı ve ışıldayan bir cilt. Başlamak için asla geç değildir - bugün attığınız adımlar, yarının cildinizi şekillendirir!`},"toner-benefits":{title:"Toniğin Faydaları",excerpt:"Tonik kullanmanın cilt bakımındaki önemi.",content:"Tonik pH dengesini sağlar, gözenekleri sıkılaştırır, kalan kirleri temizler ve sonraki ürünlerin emilimini artırır. Sabah-akşam kullanılmalıdır."},"winter-skincare-tips":{title:"Kış Aylarında Cilt Bakımı",excerpt:"Kış aylarında cildinizi nasıl korursunuz?",content:"Kışın cilt kuruluğunu önlemek için zengin nemlendiriciler, yüz yağları kullanın, sıcak duştan kaçının ve hava nemlendiricisi kullanın. Dudak bakımını unutmayın."},"rose-water-benefits":{title:"Gül Suyunun Faydaları",excerpt:"Gül suyunun cildinize sağladığı faydaları keşfedin.",content:"Gül suyu cildi nemlendirin, pH dengesini sağlar, gözenekleri sıkılaştırır ve anti-inflamatuar etki gösterir. Tonik veya sprey olarak kullanılır."},"acne-prone-skin-care":{title:"Akne Eğilimli Cilt Bakımı",excerpt:"Akne eğilimli ciltler için özel bakım önerileri.",content:"Akne için salisilik asit, niasinamid kullanın, yağsız ürünler tercih edin, düzenli temizlik yapın ve gözenekleri tıkayan ürünlerden kaçının."},"double-cleansing-method":{title:"Çift Temizleme Yöntemi",excerpt:"Çift temizleme yöntemi nedir ve nasıl uygulanır?",content:"Çift temizleme: önce yağ bazlı temizleyiciyle makyaj çözün, sonra su bazlı temizleyiciyle kirleri alın. Derin temizlik sağlar, gözenekleri açar."},"retinol-beginners-guide":{title:"Retinol Başlangıç Rehberi",excerpt:"Retinol kullanmaya yeni başlayanlar için kapsamlı rehber.",content:"Retinol kırışıklıkları azaltır, hücre yenilenmesini hızlandırır. Düşük konsantrasyonla başlayın, geceleri kullanın, SPF sürün. Sabırlı olun, sonuçlar 3 ayda görünür."}},bj={"summer-sun-protection":{title:"Yaz Aylarında Güneş Koruması: Cildinizi Nasıl Korursunuz?",excerpt:"Yaz aylarında cildinizi güneşin zararlı etkilerinden korumak için bilmeniz gereken her şey. SPF seçiminden uygulama tekniklerine kadar kapsamlı rehber...",content:`Yaz ayları geldiğinde güneşin tadını çıkarmak isterken, cildinizi zararlı UV ışınlarından korumak hayati önem taşır. Güneş hasarı, sadece yanıklara değil, erken yaşlanma, lekeler ve hatta cilt kanserine yol açabilir.

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
`}},xj={"retinol-beginners-guide":{title:"Retinol Kullanımına Başlangıç: Yeni Başlayanlar İçin Kapsamlı Rehber",excerpt:"Retinol, cilt bakımında altın standart olarak kabul edilen güçlü bir yaşlanma karşıtı bileşendir. İşte yeni başlayanlar için retinol kullanım rehberi...",content:`Retinol, modern cilt bakımının en güçlü ve bilimsel olarak kanıtlanmış bileşenlerinden biridir. Dermatologlarn "mucize bileşen" olarak adlandırdığı retinol, yaşlanma karşıtı etkilerinden akne tedavisine kadar geniş bir yelpazede faydalar sunar. Ancak güçlü bir aktif madde olduğu için doğru kullanım son derece önemlidir. Bu rehber, retinol kullanımına yeni başlayanlar için kapsamlı bir yol haritası sunmaktadır.

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

Retinol kullanımında başarılar dileriz!`}},wj={"morning-skincare-routine":{title:"Morning Skincare Routine: Step-by-Step Guide",excerpt:"How to create the perfect morning routine to prepare your skin for the day? Here are professional tips...",content:`
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

Recommendations for your night care routine: Double cleansing, toner, active treatments (retinol/acids), eye cream, serum, rich night cream, face oil (optional for dry skin).`}},zj={"morning-skincare-routine":{title:"روتين العناية بالبشرة الصباحي: دليل خطوة بخطوة",excerpt:"كيف تنشئ روتيناً صباحياً مثالياً لتحضير بشرتك لليوم؟ إليك النصائح المهنية...",content:`
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

توصيات لروتين العناية الليلية: التنظيف المزدوج، التونر، العلاجات النشطة (ريتينول/أحماض)، كريم العين، السيروم، كريم ليلي غني، زيت الوجه (اختياري للبشرة الجافة).`}},Sj={tr:{...vj,...bj,...xj},en:wj,ar:zj},nd=(e,t)=>{var n;return((n=Sj[e])==null?void 0:n[t])||null},Cj=()=>{const{language:e}=Be(),t=at[e],[n,r]=f.useState(""),[i,a]=f.useState("all"),l=[{id:"all",name:t.blog.categories.all},{id:"daily-care",name:t.blog.categories.trends||"Daily Care"},{id:"ingredients",name:t.blog.categories.skincare||"Ingredients"},{id:"sun-care",name:"Sun Care"},{id:"anti-aging",name:"Anti-Aging"},{id:"treatments",name:t.blog.categories.routine||"Treatments"}],u=td.map(c=>{const m=nd(e,c.id);return{...c,title:(m==null?void 0:m.title)||c.id,excerpt:(m==null?void 0:m.excerpt)||""}}).filter(c=>{const m=c.title.toLowerCase().includes(n.toLowerCase())||c.excerpt.toLowerCase().includes(n.toLowerCase()),d=i==="all"||c.category===i;return m&&d});return o.jsxs(Ke,{children:[o.jsx(dn,{title:t.blog.title,subtitle:t.blog.searchPlaceholder,backgroundImage:Fb,backgroundImageMobile:Ib}),o.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[o.jsxs("div",{className:"mb-12 space-y-6",children:[o.jsxs("div",{className:"relative max-w-md mx-auto",children:[o.jsx(qo,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5"}),o.jsx(Nn,{type:"text",placeholder:t.blog.searchPlaceholder,value:n,onChange:c=>r(c.target.value),className:"pl-10"})]}),o.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:l.map(c=>o.jsx(Me,{variant:i===c.id?"default":"outline",onClick:()=>a(c.id),className:"text-sm",children:c.name},c.id))})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(c=>o.jsx(te,{to:`/blog/${c.id}`,className:"group cursor-pointer block",children:o.jsxs("div",{className:"bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-luxury transition-shadow duration-300 h-[400px] relative",children:[o.jsx("div",{className:"absolute inset-0",children:o.jsx("img",{src:c.image,alt:c.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30",children:o.jsxs("div",{className:"p-6 h-full flex flex-col",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-4 text-sm text-black/70 mb-3",children:[o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(sg,{className:"w-4 h-4"}),new Date(c.date).toLocaleDateString(e==="tr"?"tr-TR":e==="ar"?"ar-SA":"en-US")]}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(cg,{className:"w-4 h-4"}),c.author]})]}),o.jsx("h3",{className:"text-lg font-semibold group-hover:text-primary transition-colors text-black mb-2 line-clamp-2",children:c.title}),o.jsx("p",{className:"text-black/70 text-sm line-clamp-2 mb-3",children:c.excerpt})]}),o.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[o.jsxs("span",{className:"text-sm text-black/60",children:[c.readTime," ",e==="tr"?"dk":e==="ar"?"دقيقة":"min"]}),o.jsxs("div",{className:"flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all",children:[t.blog.readMore,o.jsx(qa,{className:"w-4 h-4"})]})]})]})})]})},c.id))}),u.length===0&&o.jsx("div",{className:"text-center py-16",children:o.jsx("p",{className:"text-muted-foreground text-lg",children:"No articles found"})})]})]})},Ej=()=>{const{id:e}=Cm(),{language:t}=Be(),n=td.find(i=>i.id===e),r=e?nd(t,e):null;return!n||!r?o.jsx(dA,{to:"/blog",replace:!0}):o.jsxs(Ke,{children:[o.jsx(dn,{title:r.title,subtitle:r.excerpt,backgroundImage:Fb,backgroundImageMobile:Ib}),o.jsxs("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:[o.jsxs(te,{to:"/blog",className:"inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8",children:[o.jsx(og,{className:"w-4 h-4"}),t==="tr"?"Bloga Dön":t==="ar"?"العودة إلى المدونة":"Back to Blog"]}),o.jsxs("div",{className:"flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(sg,{className:"w-5 h-5"}),o.jsx("span",{children:new Date(n.date).toLocaleDateString(t==="tr"?"tr-TR":t==="ar"?"ar-SA":"en-US",{year:"numeric",month:"long",day:"numeric"})})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(cg,{className:"w-5 h-5"}),o.jsx("span",{children:n.author})]}),o.jsxs("div",{children:[n.readTime," ",t==="tr"?"dk okuma":t==="ar"?"دقيقة قراءة":"min read"]})]}),o.jsx("div",{className:"aspect-video mb-12 rounded-lg overflow-hidden",children:o.jsx("img",{src:n.image,alt:r.title,className:"w-full h-full object-cover"})}),o.jsx("article",{className:"prose prose-lg dark:prose-invert max-w-none",children:o.jsx("div",{dangerouslySetInnerHTML:{__html:r.content.replace(/\n/g,"<br />")},className:"whitespace-pre-wrap"})}),o.jsxs("div",{className:"mt-16 pt-16 border-t",children:[o.jsx("h2",{className:"text-2xl font-bold mb-8",children:t==="tr"?"İlgili Yazılar":t==="ar"?"مقالات ذات صلة":"Related Articles"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:td.filter(i=>i.id!==e&&i.category===n.category).slice(0,2).map(i=>{const a=nd(t,i.id);return o.jsxs(te,{to:`/blog/${i.id}`,className:"group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all",children:[o.jsx("div",{className:"aspect-video overflow-hidden",children:o.jsx("img",{src:i.image,alt:a==null?void 0:a.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"})}),o.jsxs("div",{className:"p-6",children:[o.jsx("h3",{className:"text-lg font-semibold group-hover:text-primary transition-colors mb-2",children:a==null?void 0:a.title}),o.jsx("p",{className:"text-muted-foreground text-sm line-clamp-2",children:a==null?void 0:a.excerpt})]})]},i.id)})})]})]})]})},Aj="/assets/toob_banner-PA3sQ-8W.jpg",Nj="/assets/toob_banner_mobile-CJoHFtNX.jpg",Pj=()=>{const{language:e}=Be(),t=at[e];return t.passionForBeauty,t.passionDesc,t.naturalExcellence,t.naturalDesc,t.qualityFirst,t.qualityDesc,t.sustainableFuture,t.sustainableDesc,o.jsxs(Ke,{children:[o.jsx(dn,{title:t.aboutSinceva,subtitle:t.aboutSubtitle,backgroundImage:Aj,backgroundImageMobile:Nj}),o.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold",children:t.ourStory}),o.jsxs("div",{className:"space-y-4 text-muted-foreground text-lg leading-relaxed",children:[o.jsx("h3",{className:"font-bold",children:t.firstTouchTitle}),o.jsx("p",{children:t.firstTouchText}),o.jsx("h3",{className:"font-bold",children:t.timelessHeritageTitle}),o.jsx("p",{children:t.timelessHeritageText}),o.jsx("h3",{className:"font-bold",children:t.guidedByMissionTitle}),o.jsx("p",{children:t.guidedByMissionText})]})]}),o.jsx("div",{className:"relative",children:o.jsx("div",{className:"aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl",children:o.jsx("div",{className:"absolute inset-8 bg-muted rounded-xl shadow-elegant"})})})]}),o.jsxs("div",{className:"mb-20",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12",children:t.ourValues}),"..."]}),o.jsxs("div",{className:"bg-muted rounded-2xl p-8 md:p-12 text-center",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-8",children:t.committedToSustainability}),o.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed",children:[o.jsx("p",{children:t.sustainabilityText1}),o.jsx("p",{children:t.sustainabilityText2})]})]})]})]})},Lb=f.forwardRef(({className:e,...t},n)=>o.jsx("textarea",{className:re("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));Lb.displayName="Textarea";const jj="/assets/contact_banner-CtDPnXDT.jpg",Tj="/assets/contact_banner_mobile-CWgsy8m0.jpg",Mj=()=>{const{language:e}=Be(),t=at[e],{toast:n}=Dk(),[r,i]=f.useState({name:"",email:"",subject:"",message:""}),a=u=>{const{name:c,value:m}=u.target;i(d=>({...d,[c]:m}))},l=async u=>{u.preventDefault();try{console.log("Form submitted:",r),n({title:t.messageSentSuccess,description:t.messageSentDesc}),i({name:"",email:"",subject:"",message:""})}catch{n({title:"Error",description:"Failed to send message. Please try again.",variant:"destructive"})}},s=[{icon:fh,title:t.address,content:t.addressContent},{icon:$z,title:t.phone,content:t.phoneContent},{icon:ug,title:t.email,content:t.emailContent},{icon:Iz,title:t.businessHours,content:t.hoursContent}];return o.jsxs(Ke,{children:[o.jsx(dn,{title:t.contactUs,subtitle:t.contactSubtitle,backgroundImage:jj,backgroundImageMobile:Tj}),o.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-semibold mb-8",children:t.sendMessage}),o.jsxs("form",{onSubmit:l,className:"space-y-6",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[o.jsxs("div",{children:[o.jsxs("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:[t.fullName," *"]}),o.jsx(Nn,{id:"name",name:"name",type:"text",value:r.name,onChange:a,required:!0,placeholder:t.enterFullName})]}),o.jsxs("div",{children:[o.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:[t.emailAddress," *"]}),o.jsx(Nn,{id:"email",name:"email",type:"email",value:r.email,onChange:a,required:!0,placeholder:t.enterEmailPlaceholder})]})]}),o.jsxs("div",{children:[o.jsxs("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2",children:[t.subject," *"]}),o.jsx(Nn,{id:"subject",name:"subject",type:"text",value:r.subject,onChange:a,required:!0,placeholder:t.subjectPlaceholder})]}),o.jsxs("div",{children:[o.jsxs("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:[t.message," *"]}),o.jsx(Lb,{id:"message",name:"message",value:r.message,onChange:a,required:!0,placeholder:t.messagePlaceholder,className:"min-h-[120px]"})]}),o.jsx(Me,{type:"submit",className:"w-full",children:t.sendMessageBtn})]})]}),o.jsxs("div",{className:"space-y-8",children:[o.jsx("h2",{className:"text-2xl font-semibold",children:t.getInTouch}),o.jsx("div",{className:"space-y-6",children:s.map((u,c)=>{const m=u.icon;return o.jsxs("div",{className:"flex items-start space-x-4",children:[o.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center",children:o.jsx(m,{className:"w-6 h-6 text-primary"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold text-foreground",children:u.title}),o.jsx("p",{className:"text-muted-foreground whitespace-pre-line",children:u.content})]})]},c)})}),o.jsxs("div",{className:"mt-8",children:[o.jsx("h3",{className:"text-lg font-semibold mb-4",children:t.visitStore}),o.jsx("div",{className:"aspect-video bg-muted rounded-lg flex items-center justify-center",children:o.jsxs("div",{className:"text-center text-muted-foreground",children:[o.jsx(fh,{className:"w-12 h-12 mx-auto mb-2"}),o.jsx("p",{children:t.interactiveMap}),o.jsx("p",{className:"text-sm",children:t.mapIntegration})]})})]})]})]})})]})},Rj="/assets/shop_banner-C9Fg8D-p.jpg",Dj="/assets/shop_banner_mobile-BbAzJSz4.jpg",Fj=()=>{const[e,t]=f.useState("grid"),[n,r]=f.useState("all"),[i,a]=f.useState("featured"),l=[{id:"all",name:"All Products"},{id:"anti-aging",name:"Anti-Aging"},{id:"cleansing",name:"Cleansing"},{id:"daily-care",name:"Daily Care"},{id:"serums",name:"Serums"}],s=nl.products.map(d=>({...d,rating:4.7+Math.random()*.3,reviews:Math.floor(50+Math.random()*150),category:u(d.id)}));function u(d){return[1,2].includes(d)?"serums":[3,4,5].includes(d)?"anti-aging":[6,7].includes(d)?"cleansing":[8,9].includes(d)?"daily-care":"all"}const c=s.filter(d=>n==="all"||d.category===n),m=d=>[...Array(5)].map((h,p)=>o.jsx(Qz,{className:`w-4 h-4 ${p<Math.floor(d)?"fill-yellow-400 text-yellow-400":"text-gray-300"}`},p));return o.jsxs(Ke,{children:[o.jsx(dn,{title:"Shop Sinceva",subtitle:"Discover our premium skincare collection crafted for timeless beauty.",backgroundImage:Rj,backgroundImageMobile:Dj}),o.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[o.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 mb-8",children:[o.jsx("div",{className:"flex-1",children:o.jsx("div",{className:"flex flex-wrap gap-3",children:l.map(d=>o.jsx(Me,{variant:n===d.id?"default":"outline",onClick:()=>r(d.id),className:"text-sm",children:d.name},d.id))})}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsxs("select",{value:i,onChange:d=>a(d.target.value),className:"px-4 py-2 border border-border rounded-md bg-background",children:[o.jsx("option",{value:"featured",children:"Featured"}),o.jsx("option",{value:"rating",children:"Highest Rated"})]}),o.jsxs("div",{className:"flex border border-border rounded-md",children:[o.jsx(Me,{variant:e==="grid"?"default":"ghost",size:"icon",onClick:()=>t("grid"),className:"rounded-r-none",children:o.jsx(_z,{className:"w-4 h-4"})}),o.jsx(Me,{variant:e==="list"?"default":"ghost",size:"icon",onClick:()=>t("list"),className:"rounded-l-none",children:o.jsx(Yz,{className:"w-4 h-4"})})]})]})]}),o.jsx("div",{className:`grid gap-6 ${e==="grid"?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4":"grid-cols-1"}`,children:c.map(d=>e==="grid"?o.jsx(Hm,{product:d},d.id):o.jsx(In,{className:"group hover:shadow-luxury transition-shadow duration-300",children:o.jsx(Ln,{className:"p-0",children:o.jsxs("div",{className:"flex gap-4 p-4",children:[o.jsx("div",{className:"w-24 h-24 bg-muted rounded-lg flex-shrink-0 overflow-hidden",children:o.jsx("img",{src:d.image||"https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:d.name,className:"w-full h-full object-cover"})}),o.jsxs("div",{className:"flex-1 space-y-2",children:[o.jsx("div",{className:"flex items-start justify-between",children:o.jsx("h3",{className:"font-semibold text-foreground",children:d.name})}),o.jsx("p",{className:"text-sm text-muted-foreground",children:d.description}),o.jsxs("div",{className:"flex items-center gap-1",children:[m(d.rating),o.jsxs("span",{className:"text-sm text-muted-foreground ml-2",children:["(",d.reviews,")"]})]}),o.jsx("div",{className:"flex items-center justify-between",children:o.jsxs(Me,{size:"sm",className:"gap-2",children:[o.jsx(Wz,{className:"w-4 h-4"}),"Buy Now"]})})]})]})})},d.id))})]})]})},op=()=>{const{category:e,subcategory:t}=Cm(),n=e?Em[e]:void 0;if(!n)return o.jsxs(Ke,{children:[o.jsx(dn,{title:"Category Not Found",subtitle:"The requested category could not be found.",backgroundImage:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"}),o.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:o.jsxs("div",{className:"text-center py-16",children:[o.jsx("p",{className:"text-muted-foreground text-lg",children:"The requested category could not be found."}),o.jsx(te,{to:"/shop",className:"inline-block mt-4",children:o.jsx(Me,{children:"Browse All Products"})})]})})]});if(t){const r=n.subcategories[t];return r?o.jsxs(Ke,{children:[o.jsx(dn,{title:r.title,subtitle:`${n.title} - ${r.title}`,backgroundImage:n.bannerImage}),o.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[o.jsxs("div",{className:"flex items-center space-x-2 mb-8 text-sm text-muted-foreground",children:[o.jsx(te,{to:"/",className:"hover:text-primary",children:"Home"}),o.jsx("span",{children:"/"}),o.jsx(te,{to:`/category/${e}`,className:"hover:text-primary",children:n.title}),o.jsx("span",{children:"/"}),o.jsx("span",{className:"text-foreground",children:r.title})]}),r.products.length>0?o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:r.products.map(i=>o.jsx(Hm,{product:i},i.id))}):o.jsxs("div",{className:"text-center py-16",children:[o.jsx("p",{className:"text-muted-foreground text-lg",children:"No products found in this subcategory."}),o.jsx(te,{to:`/category/${e}`,className:"inline-block mt-4",children:o.jsxs(Me,{children:["Back to ",n.title]})})]})]})]}):o.jsxs(Ke,{children:[o.jsx(dn,{title:"Subcategory Not Found",subtitle:"The requested subcategory could not be found.",backgroundImage:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"}),o.jsx("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:o.jsxs("div",{className:"text-center py-16",children:[o.jsx("p",{className:"text-muted-foreground text-lg",children:"The requested subcategory could not be found."}),o.jsx(te,{to:`/category/${e}`,className:"inline-block mt-4",children:o.jsxs(Me,{children:["Back to ",n.title]})})]})})]})}return o.jsxs(Ke,{children:[o.jsx(dn,{title:n.title,subtitle:n.description,backgroundImage:n.bannerImage}),o.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16",children:[o.jsxs("div",{className:"flex items-center space-x-2 mb-8 text-sm text-muted-foreground",children:[o.jsx(te,{to:"/",className:"hover:text-primary",children:"Home"}),o.jsx("span",{children:"/"}),o.jsx("span",{className:"text-foreground",children:n.title})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",children:Object.entries(n.subcategories).map(([r,i])=>o.jsx(In,{className:"group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1",children:o.jsx(te,{to:`/category/${e}/${r}`,children:o.jsxs(Ln,{className:"p-6",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("h3",{className:"text-xl font-semibold group-hover:text-primary transition-colors",children:i.title}),o.jsx(qa,{className:"w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"})]}),o.jsxs("p",{className:"text-muted-foreground mb-4",children:[i.products.length," product",i.products.length!==1?"s":""," available"]}),i.products[0]&&o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("img",{src:i.products[0].image,alt:i.products[0].name,className:"w-12 h-12 rounded-lg object-cover"}),o.jsx("div",{className:"flex-1",children:o.jsx("p",{className:"text-sm font-medium line-clamp-1",children:i.products[0].name})})]})]})})},r))})]})]})};var Gs="Collapsible",[Ij,Ob]=Bn(Gs),[Lj,Gm]=Ij(Gs),Bb=f.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:a,onOpenChange:l,...s}=e,[u,c]=qi({prop:r,defaultProp:i??!1,onChange:l,caller:Gs});return o.jsx(Lj,{scope:n,disabled:a,contentId:Wa(),open:u,onOpenToggle:f.useCallback(()=>c(m=>!m),[c]),children:o.jsx(ue.div,{"data-state":Ym(u),"data-disabled":a?"":void 0,...s,ref:t})})});Bb.displayName=Gs;var _b="CollapsibleTrigger",Kb=f.forwardRef((e,t)=>{const{__scopeCollapsible:n,...r}=e,i=Gm(_b,n);return o.jsx(ue.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":Ym(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...r,ref:t,onClick:q(e.onClick,i.onOpenToggle)})});Kb.displayName=_b;var Um="CollapsibleContent",Hb=f.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=Gm(Um,e.__scopeCollapsible);return o.jsx(Er,{present:n||i.open,children:({present:a})=>o.jsx(Oj,{...r,ref:t,present:a})})});Hb.displayName=Um;var Oj=f.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:r,children:i,...a}=e,l=Gm(Um,n),[s,u]=f.useState(r),c=f.useRef(null),m=Re(t,c),d=f.useRef(0),h=d.current,p=f.useRef(0),x=p.current,g=l.open||s,b=f.useRef(g),y=f.useRef(void 0);return f.useEffect(()=>{const k=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(k)},[]),pn(()=>{const k=c.current;if(k){y.current=y.current||{transitionDuration:k.style.transitionDuration,animationName:k.style.animationName},k.style.transitionDuration="0s",k.style.animationName="none";const v=k.getBoundingClientRect();d.current=v.height,p.current=v.width,b.current||(k.style.transitionDuration=y.current.transitionDuration,k.style.animationName=y.current.animationName),u(r)}},[l.open,r]),o.jsx(ue.div,{"data-state":Ym(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!g,...a,ref:m,style:{"--radix-collapsible-content-height":h?`${h}px`:void 0,"--radix-collapsible-content-width":x?`${x}px`:void 0,...e.style},children:g&&i})});function Ym(e){return e?"open":"closed"}var Bj=Bb,_j=Kb,Kj=Hb,en="Accordion",Hj=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Vm,Gj,Uj]=zs(en),[Us,vM]=Bn(en,[Uj,Ob]),$m=Ob(),Gb=R.forwardRef((e,t)=>{const{type:n,...r}=e,i=r,a=r;return o.jsx(Vm.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?o.jsx(qj,{...a,ref:t}):o.jsx($j,{...i,ref:t})})});Gb.displayName=en;var[Ub,Yj]=Us(en),[Yb,Vj]=Us(en,{collapsible:!1}),$j=R.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:a=!1,...l}=e,[s,u]=qi({prop:n,defaultProp:r??"",onChange:i,caller:en});return o.jsx(Ub,{scope:e.__scopeAccordion,value:R.useMemo(()=>s?[s]:[],[s]),onItemOpen:u,onItemClose:R.useCallback(()=>a&&u(""),[a,u]),children:o.jsx(Yb,{scope:e.__scopeAccordion,collapsible:a,children:o.jsx(Vb,{...l,ref:t})})})}),qj=R.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[l,s]=qi({prop:n,defaultProp:r??[],onChange:i,caller:en}),u=R.useCallback(m=>s((d=[])=>[...d,m]),[s]),c=R.useCallback(m=>s((d=[])=>d.filter(h=>h!==m)),[s]);return o.jsx(Ub,{scope:e.__scopeAccordion,value:l,onItemOpen:u,onItemClose:c,children:o.jsx(Yb,{scope:e.__scopeAccordion,collapsible:!0,children:o.jsx(Vb,{...a,ref:t})})})}),[Wj,Ys]=Us(en),Vb=R.forwardRef((e,t)=>{const{__scopeAccordion:n,disabled:r,dir:i,orientation:a="vertical",...l}=e,s=R.useRef(null),u=Re(s,t),c=Gj(n),d=Am(i)==="ltr",h=q(e.onKeyDown,p=>{var E;if(!Hj.includes(p.key))return;const x=p.target,g=c().filter(P=>{var T;return!((T=P.ref.current)!=null&&T.disabled)}),b=g.findIndex(P=>P.ref.current===x),y=g.length;if(b===-1)return;p.preventDefault();let k=b;const v=0,w=y-1,z=()=>{k=b+1,k>w&&(k=v)},S=()=>{k=b-1,k<v&&(k=w)};switch(p.key){case"Home":k=v;break;case"End":k=w;break;case"ArrowRight":a==="horizontal"&&(d?z():S());break;case"ArrowDown":a==="vertical"&&z();break;case"ArrowLeft":a==="horizontal"&&(d?S():z());break;case"ArrowUp":a==="vertical"&&S();break}const C=k%y;(E=g[C].ref.current)==null||E.focus()});return o.jsx(Wj,{scope:n,disabled:r,direction:i,orientation:a,children:o.jsx(Vm.Slot,{scope:n,children:o.jsx(ue.div,{...l,"data-orientation":a,ref:u,onKeyDown:r?void 0:h})})})}),as="AccordionItem",[Qj,qm]=Us(as),$b=R.forwardRef((e,t)=>{const{__scopeAccordion:n,value:r,...i}=e,a=Ys(as,n),l=Yj(as,n),s=$m(n),u=Wa(),c=r&&l.value.includes(r)||!1,m=a.disabled||e.disabled;return o.jsx(Qj,{scope:n,open:c,disabled:m,triggerId:u,children:o.jsx(Bj,{"data-orientation":a.orientation,"data-state":Jb(c),...s,...i,ref:t,disabled:m,open:c,onOpenChange:d=>{d?l.onItemOpen(r):l.onItemClose(r)}})})});$b.displayName=as;var qb="AccordionHeader",Wb=R.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,i=Ys(en,n),a=qm(qb,n);return o.jsx(ue.h3,{"data-orientation":i.orientation,"data-state":Jb(a.open),"data-disabled":a.disabled?"":void 0,...r,ref:t})});Wb.displayName=qb;var rd="AccordionTrigger",Qb=R.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,i=Ys(en,n),a=qm(rd,n),l=Vj(rd,n),s=$m(n);return o.jsx(Vm.ItemSlot,{scope:n,children:o.jsx(_j,{"aria-disabled":a.open&&!l.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...s,...r,ref:t})})});Qb.displayName=rd;var Xb="AccordionContent",Zb=R.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,i=Ys(en,n),a=qm(Xb,n),l=$m(n);return o.jsx(Kj,{role:"region","aria-labelledby":a.triggerId,"data-orientation":i.orientation,...l,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});Zb.displayName=Xb;function Jb(e){return e?"open":"closed"}var Xj=Gb,Zj=$b,Jj=Wb,e0=Qb,t0=Zb;const sp=Xj,id=f.forwardRef(({className:e,...t},n)=>o.jsx(Zj,{ref:n,className:re("border-b",e),...t}));id.displayName="AccordionItem";const ad=f.forwardRef(({className:e,children:t,...n},r)=>o.jsx(Jj,{className:"flex",children:o.jsxs(e0,{ref:r,className:re("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[t,o.jsx(Rz,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));ad.displayName=e0.displayName;const ld=f.forwardRef(({className:e,children:t,...n},r)=>o.jsx(t0,{ref:r,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:o.jsx("div",{className:re("pb-4 pt-0",e),children:t})}));ld.displayName=t0.displayName;var eT="Separator",up="horizontal",tT=["horizontal","vertical"],n0=f.forwardRef((e,t)=>{const{decorative:n,orientation:r=up,...i}=e,a=nT(r)?r:up,s=n?{role:"none"}:{"aria-orientation":a==="vertical"?a:void 0,role:"separator"};return o.jsx(ue.div,{"data-orientation":a,...s,...i,ref:t})});n0.displayName=eT;function nT(e){return tT.includes(e)}var r0=n0;const he=f.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...r},i)=>o.jsx(r0,{ref:i,decorative:n,orientation:t,className:re("shrink-0 bg-border",t==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...r}));he.displayName=r0.displayName;const rT=om("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function cp({className:e,variant:t,...n}){return o.jsx("div",{className:re(rT({variant:t}),e),...n})}const Bu=768;function i0(){const[e,t]=f.useState(void 0);return f.useEffect(()=>{const n=window.matchMedia(`(max-width: ${Bu-1}px)`),r=()=>{t(window.innerWidth<Bu)};return n.addEventListener("change",r),t(window.innerWidth<Bu),()=>n.removeEventListener("change",r)},[]),!!e}const iT=({currentProductId:e,products:t,title:n="Discover Sinceva Products"})=>{i0();const r=t.filter(i=>i.id.toString()!==e.toString()).slice(0,4);return r.length===0?null:o.jsx("section",{className:"py-12 bg-background",children:o.jsxs("div",{className:"container mx-auto max-w-7xl px-4",children:[o.jsxs("div",{className:"hidden md:flex md:items-start md:gap-8",children:[o.jsx("div",{className:"md:w-1/4 flex-shrink-0",children:o.jsx("h2",{className:"text-2xl font-bold text-foreground",children:n})}),o.jsx("div",{className:"md:w-3/4",children:o.jsxs(sl,{className:"w-full",children:[o.jsx(ul,{className:"-ml-4",children:r.map(i=>o.jsx(cl,{className:"pl-4 basis-1/3",children:o.jsx(te,{to:`/product/${i.id}`,children:o.jsx(In,{className:"group hover:shadow-luxury transition-all duration-300 cursor-pointer overflow-hidden rounded-xl",children:o.jsx(Ln,{className:"p-0",children:o.jsx(Fn,{ratio:2/3,children:o.jsxs("div",{className:"relative w-full h-full",children:[o.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),i.badge&&o.jsx(cp,{className:"absolute top-3 left-3 bg-primary text-white z-10",children:i.badge}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30",children:o.jsx("div",{className:"p-3 h-full flex flex-col",children:o.jsx("div",{className:"flex-1",children:o.jsx("h3",{className:"text-sm font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2",children:i.name})})})})]})})})})})},i.id))}),o.jsx(_m,{className:"absolute -left-4 top-1/2 -translate-y-1/2"}),o.jsx(Km,{className:"absolute -right-4 top-1/2 -translate-y-1/2"})]})})]}),o.jsxs("div",{className:"md:hidden",children:[o.jsx("div",{className:"text-center mb-6",children:o.jsx("h2",{className:"text-xl font-bold text-foreground",children:n})}),o.jsx(sl,{className:"w-full",children:o.jsx(ul,{className:"-ml-2",children:r.map(i=>o.jsx(cl,{className:"pl-2 basis-4/5",children:o.jsx(te,{to:`/product/${i.id}`,children:o.jsx(In,{className:"group hover:shadow-luxury transition-all duration-300 cursor-pointer overflow-hidden rounded-xl",children:o.jsx(Ln,{className:"p-0",children:o.jsx(Fn,{ratio:2/3,children:o.jsxs("div",{className:"relative w-full h-full",children:[o.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),i.badge&&o.jsx(cp,{className:"absolute top-2 left-2 bg-primary text-white text-xs z-10",children:i.badge}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30",children:o.jsx("div",{className:"p-3 h-full flex flex-col",children:o.jsx("div",{className:"flex-1",children:o.jsx("h3",{className:"text-sm font-semibold mb-1 text-black group-hover:text-primary transition-colors line-clamp-2",children:i.name})})})})]})})})})})},i.id))})})]})]})})},aT=({productId:e})=>{let t="",n="",r="",i="";for(const[a,l]of Object.entries(Em)){for(const[s,u]of Object.entries(l.subcategories))if(u.products.some(c=>c.id===e)){t=a,n=s,r=l.title,i=u.title;break}if(t)break}return t?o.jsx("div",{style:{backgroundColor:"#191919"},className:"py-4 border-t border-white/10",children:o.jsx("div",{className:"container mx-auto max-w-7xl px-4",children:o.jsxs("nav",{className:"flex items-center space-x-2 text-sm",children:[o.jsxs(te,{to:"/",className:"flex items-center text-white/70 hover:text-white transition-colors",children:[o.jsx(Hz,{className:"w-4 h-4 mr-1"}),"Home"]}),o.jsx($o,{className:"w-4 h-4 text-white/40"}),o.jsx(te,{to:`/category/${t}`,className:"text-white/70 hover:text-white transition-colors",children:r}),o.jsx($o,{className:"w-4 h-4 text-white/40"}),o.jsx(te,{to:`/category/${t}/${n}`,className:"text-white/70 hover:text-white transition-colors",children:i})]})})}):null},lT=({images:e,currentIndex:t,onClose:n,onNavigate:r})=>{const[i,a]=f.useState(0),[l,s]=f.useState(0),u=f.useRef(null),c=50,m=f.useCallback(()=>{t!==null&&t>0&&r(t-1)},[t,r]),d=f.useCallback(()=>{t!==null&&t<e.length-1&&r(t+1)},[t,e.length,r]),h=v=>{s(0),a(v.targetTouches[0].clientX)},p=v=>{s(v.targetTouches[0].clientX)},x=v=>{if(!i||!l)return;const w=i-l,z=w>c,S=w<-c;z&&t!==null&&t<e.length-1&&d(),S&&t!==null&&t>0&&m(),a(0),s(0)},g=f.useCallback(v=>{v.key==="Escape"?n():v.key==="ArrowLeft"?m():v.key==="ArrowRight"&&d()},[n,m,d]);if(f.useEffect(()=>(t!==null&&(document.addEventListener("keydown",g),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",g),document.body.style.overflow="unset"}),[t,g]),t===null)return null;const b=e[t],y=t>0,k=t<e.length-1;return o.jsxs("div",{ref:u,className:"fixed inset-0 z-50 bg-black/90 flex items-center justify-center",onClick:n,onTouchStart:h,onTouchMove:p,onTouchEnd:x,children:[o.jsx("button",{onClick:v=>{v.stopPropagation(),n()},className:"absolute top-4 right-4 z-10 p-2 text-white hover:text-white/70 transition-colors",children:o.jsx(bl,{size:32})}),y&&o.jsx("button",{onClick:v=>{v.stopPropagation(),m()},className:"absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-white/70 transition-colors",children:o.jsx(Dz,{size:48})}),k&&o.jsx("button",{onClick:v=>{v.stopPropagation(),d()},className:"absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-white/70 transition-colors",children:o.jsx($o,{size:48})}),o.jsx("img",{src:b,alt:`Product image ${t+1}`,className:"max-w-[90vw] max-h-[90vh] object-contain",onClick:v=>v.stopPropagation(),draggable:!1})]})},oT={1:{productId:1,details:"SincEva Vitamin C Serum, %5 C Vitamini içeriğiyle cilt tonunu eşitlemeye ve cilde canlılık kazandırmaya yardımcı olur. Güçlü antioksidan etkisi sayesinde serbest radikallere karşı koruma sağlar, güneş ışınlarının neden olduğu fotoyaşlanmayı önlemeye destek olur. Formülündeki Aloe Vera cildi yatıştırırken, Elma Özü (Pyrus Malus Fruit Extract) malik asit ve doğal vitaminleriyle cilt yenilenmesini destekler, cildin doğal parlaklığını artırır. Düzenli kullanımda cilt daha aydınlık, sıkı ve taze bir görünüm kazanır.",ingredients:"Aqua, Propylene Glycol, 3-O-Ethyl Ascorbic Acid, Glycerin, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Lactobacillus Lysate, Ethylhexylglycerin, Aloe Barbadensis Leaf Extract, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temizlenmiş ve kuru cilde sabah ve akşam 2–3 damla uygulayınız. Parmak uçlarınızla nazikçe masaj yaparak emilmesini sağlayın. Gündüz kullanımında mutlaka güneş koruyucu ile birlikte kullanılması önerilir.",faqs:[{question:"Vitamin C serumu hangi cilt tiplerine uygundur?",answer:"Tüm cilt tipleri için uygundur, özellikle donuk, lekeli veya yorgun ciltler için idealdir."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit ve vitamin içeriğiyle cildin yenilenmesini destekler, doğal ışıltıyı artırır."},{question:"Ne kadar sürede sonuç verir?",answer:"Düzenli kullanımda 3–4 hafta içinde daha aydınlık ve eşit tonlu bir cilt görünümü sağlar."},{question:"Gündüz kullanılabilir mi?",answer:"Evet, ancak güneş koruyucu ile birlikte kullanılması önerilir."}]},2:{productId:2,details:"SincEva Arbutin Serum, ciltteki ton eşitsizliklerini hedef alarak daha aydınlık, canlı ve pürüzsüz bir görünüm kazandırır. %2 Alfa-Arbutin içeriği, melanin üretimini dengeleyerek güneş, yaş, akne veya hamilelik lekelerinin görünümünü azaltmaya yardımcı olur. Formülündeki Niacinamide, cilt bariyerini güçlendirirken, Elma Özü (Pyrus Malus Fruit Extract) içeriğindeki doğal malik asit ve antioksidanlar sayesinde cilt dokusunu yeniler, hücreleri canlandırır ve serbest radikallere karşı koruma sağlar. Hafif yapısı sayesinde hızla emilir, yağlı his bırakmaz ve düzenli kullanımda cilde doğal bir ışıltı kazandırır.",ingredients:"Aqua, Propylene Glycol, Alpha-Arbutin, Glycerin, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Niacinamide, Lactobacillus Lysate, Ethylhexylglycerin, Aloe Barbadensis Leaf Extract, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temizlenmiş ve kuru cilde sabah ve akşam 2-3 damla uygulayınız. Parmak uçlarınızla nazikçe masaj yaparak emilmesini sağlayın. Gündüz kullanımında mutlaka güneş koruyucu ile birlikte kullanılması tavsiye edilir.",faqs:[{question:"Arbutin Serum ne işe yarar?",answer:"Cilt tonunu eşitleyerek koyu lekelerin, güneş ve yaşlılık lekelerinin azalmasına yardımcı olur."},{question:"İçeriğinde elma özünün etkisi nedir?",answer:"Elma özü, malik asit ve antioksidanlar bakımından zengindir; cilt yenilenmesini destekler, serbest radikalleri nötralize eder ve daha aydınlık bir görünüm sağlar."},{question:"Gündüz kullanılabilir mi?",answer:"Evet, ancak mutlaka güneş koruyucu ile birlikte kullanılmalıdır."},{question:"Ne kadar sürede sonuç verir?",answer:"Düzenli kullanımda 3-4 hafta içinde cilt tonunda belirgin bir iyileşme görülür."}]},3:{productId:3,details:'SincEva Kırışıklık Karşıtı Göz Kremi, patentli "süper molekül" Proxylane, Kolajen ve Elma Özü (Pyrus Malus Fruit Extract) ile göz çevresindeki ince çizgileri, kaz ayaklarını ve koyu halkaları hedef alır. Proxylane, cilt yapısını biyomekanik olarak güçlendirerek elastikiyet kaybını azaltır; kolajen, cildin dolgunluğunu geri kazandırarak sıkılaştırıcı bir etki sağlar. Elma özündeki malik asit ve antioksidanlar, cilt dokusunu yeniler ve göz çevresine canlı, aydınlık bir görünüm kazandırır. Düzenli kullanımda göz çevresi daha pürüzsüz, dinlenmiş ve genç bir görünüm kazanır.',ingredients:"Aqua, Dibutyl Adipate, Propylene Glycol, Isopropyl Myristate, Sodium Acrylates Copolymer, Panthenol, Phenoxyethanol, Hydroxypropyl Tetrahydropyrantriol (Proxylane), Lecithin, Hydrolyzed Collagen, Lactobacillus Lysate, Ethylhexylglycerin, 1,2-Hexanediol, Glycerin, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Pentylene Glycol, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temiz ve kuru göz çevresine yeterli miktarda kremi sabah ve akşam nazikçe masaj yaparak uygulayın. Aktif bileşenlerin hızlı emilimi nedeniyle hafif bir karıncalanma hissi oluşabilir. Durulama gerekmez.",faqs:[{question:"Göz kremi hangi yaş grubu için uygundur?",answer:"25 yaş ve üzeri herkes için uygundur. Özellikle ince çizgi veya koyu halka sorunu yaşayan ciltlerde etkilidir."},{question:"Elma özünün etkisi nedir?",answer:"Elma özündeki malik asit ve antioksidanlar, göz çevresindeki cildi besler, canlandırır ve yorgun görünümü azaltır."},{question:"Günlük makyaj altında kullanılabilir mi?",answer:"Evet, hafif dokusu sayesinde makyaj altına rahatça uygulanabilir."},{question:"Gözde yanma olursa ne yapmalıyım?",answer:"Gözle temas halinde bol su ile durulayın; hassasiyet devam ederse dermatoloğa danışın."}]},4:{productId:4,details:"SincEva Yaşlanma Karşıtı Gece Kremi, cildin gece boyunca kendini yenileme sürecini destekler. Formülündeki Lipozomal Retinol, hücre yenilenmesini artırarak ince çizgilerin, kırışıklıkların ve renk düzensizliklerinin görünümünü azaltmaya yardımcı olur. Niacinamide, cilt bariyerini güçlendirirken gözenek görünümünü azaltır ve daha pürüzsüz bir doku sağlar. Elma Özü (Pyrus Malus Fruit Extract) içeriğindeki malik asit ve antioksidanlar sayesinde cilt tonunu dengeler, serbest radikallere karşı koruma sağlar ve cilde sağlıklı bir ışıltı kazandırır. Her sabah, daha dolgun, sıkı ve dinlenmiş bir cilt görünümü sunar.",ingredients:"Aqua, Dibutyl Adipate, Glycerin, Isopropyl Myristate, Propylene Glycol, Sodium Acrylates Copolymer, Phenoxyethanol, Panthenol, Lecithin, Caprylic/Capric Triglyceride, Sodium Hyaluronate, Aroma, Lactobacillus Lysate, Polysorbate 20, Retinol, Ethylhexylglycerin, Niacinamide, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, BHT, Polyglyceryl-10 Myristate, Ethyl Lauroyl Arginate HCl, BHA, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temiz ve kuru cilde gece yatmadan önce yeterli miktarda uygulayın. Dairesel hareketlerle nazikçe masaj yaparak cilde yedirin. Durulama gerektirmez. Ürünü kullandığınız dönemde gündüzleri mutlaka güneş koruyucu kullanmanız önerilir.",faqs:[{question:"Gece kremi hangi yaş grubu için uygundur?",answer:"25 yaş ve üzeri herkes için uygundur, özellikle ince çizgi, cilt tonu eşitsizliği veya elastikiyet kaybı yaşayan ciltlerde etkilidir."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit ve antioksidan içeriğiyle cilt yenilenmesini destekler, cilde tazelik ve ışıltı kazandırır."},{question:"Gündüz kullanılabilir mi?",answer:"Hayır, yalnızca gece kullanımına uygundur. Ancak gündüz mutlaka güneş koruyucu kullanılmalıdır."},{question:"Retinol tahriş yapar mı?",answer:"Hassas ciltlerde ilk kullanımda hafif karıncalanma veya kızarıklık olabilir; bu durum cildin alışma sürecidir."}]},5:{productId:5,details:"SincEva Cilt Yenileyici Tonik, cildi derinlemesine temizleyip arındırırken gözenek görünümünün azalmasına ve sebum dengesinin korunmasına yardımcı olur. Formülündeki %5 Glikolik Asit ve AHA kompleksi (Glikolik, Malik, Laktik, Tartarik, Sitrik Asit), cilt yüzeyindeki ölü hücreleri nazikçe uzaklaştırarak yenilenmiş, canlı bir cilt dokusu oluşturur. Elma Özü (Pyrus Malus Fruit Extract) içeriği sayesinde malik asit ve antioksidan bakımından zengin doğal bir peeling etkisi sağlar, ciltteki donuk görünümü giderir ve doğal parlaklığı geri kazandırır. Düzenli kullanımda cilt daha pürüzsüz, dengeli ve taze bir görünüme kavuşur.",ingredients:"Aqua, Glycolic Acid, Propylene Glycol, Triethanolamine, Phenoxyethanol, Glucose, Urea, Panthenol, 3-O-Ethyl Ascorbic Acid, Lactobacillus Lysate, Fructose, Hydrogenated Starch Hydrolysate, Sodium PCA, PEG-40 Hydrogenated Castor Oil, Glycine, Hydrolyzed Wheat Protein, Sodium Glutamate, Ethylhexylglycerin, Glycerin, Tetrasodium EDTA, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Aroma, Sodium Benzoate, Citric Acid, Lactic Acid, Lysine, Malic Acid, Potassium Hydroxide, Potassium Sorbate, Sodium Hydroxide, Tartaric Acid, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, CI 17200.",howToUse:"Cildinizi temizledikten sonra, yeterli miktarda toniği bir pamuk yardımıyla kuru cildinize uygulayınız. Uygulama sonrası durulama gerektirmez. Gündüz kullanımlarında, mutlaka güneş koruyucu ile birlikte kullanılması tavsiye edilir.",faqs:[{question:"Bu tonik hangi cilt tipleri için uygundur?",answer:"Yağlı, karma ve normal ciltler için uygundur. Hassas ciltlerde haftada 2-3 kez kullanılması önerilir."},{question:"Elma özü ne işe yarar?",answer:"Elma özü, malik asit ve antioksidanlar açısından zengindir; cilt yenilenmesini destekler ve ciltteki donukluğu giderir."},{question:"Ciltte yanma yapar mı?",answer:"Hafif karıncalanma normaldir; aşırı yanma veya kızarıklık hissederseniz kullanımı durdurunuz."},{question:"Gündüz kullanılabilir mi?",answer:"Evet, ancak güneş koruyucu ile birlikte kullanılmalıdır."}]},6:{productId:6,details:"SincEva Peeling Scrub Cream, cildi nazikçe arındırarak ölü deri hücrelerini uzaklaştırır ve daha pürüzsüz, aydınlık bir görünüm kazandırır. Formülündeki doğal AHA kaynakları olan Elma Özü (Pyrus Malus Fruit Extract), Lime ve Ananas Ekstraktları, cilt yüzeyindeki kir, fazla yağ ve makyaj kalıntılarını etkili biçimde temizler. Malik asit, askorbik asit ve glikolik asit içeriğiyle gözeneklerin sıkılaşmasına, cildin daha canlı ve taze bir görünüme kavuşmasına yardımcı olur. Düzenli kullanımda cilt dokusu yenilenir, cilt tonu dengelenir ve ışıltılı bir parlaklık kazanır.",ingredients:"Aqua, Cetearyl Alcohol, Glycerin, Glycolic Acid, Ascorbic Acid, Malic Acid, Propylene Glycol, Stearic Acid, Ceteareth-20, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Phenoxyethanol, Ethylhexylglycerin, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Avucunuza yeterli miktarda ürünü alın ve nemli cildinize dairesel hareketlerle nazikçe masaj yaparak uygulayın. Ardından ılık suyla durulayın. Haftada 2–3 kez düzenli olarak kullanılması önerilir.",faqs:[{question:"Peeling Scrub cildi tahriş eder mi?",answer:"Hayır, doğal AHA kaynaklarıyla formüle edilmiştir ve cildi nazikçe arındırır."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit ve antioksidanlar sayesinde cilt yüzeyini pürüzsüzleştirir, ışıltı ve tazelik kazandırır."},{question:"Ne sıklıkla kullanılmalı?",answer:"Normal ciltler için haftada 2–3 kez, hassas ciltler için haftada 1 kez önerilir."},{question:"Gündüz mü gece mi uygulanmalı?",answer:"Akşam saatlerinde uygulama idealdir. Sonrasında mutlaka nemlendirici ve gündüzleri güneş koruyucu kullanılmalıdır."}]},7:{productId:7,details:"SincEva Yüz Temizleme Köpüğü, cildi kurutmadan derinlemesine temizler ve tazelik hissi kazandırır. Zengin köpük formu sayesinde gözeneklerdeki kir, yağ ve makyaj kalıntılarını nazikçe arındırır. Formülündeki Aloe Vera cildi yatıştırırken, Elma Özü (Pyrus Malus Fruit Extract) malik asit ve doğal antioksidanlarıyla cildin yenilenmesini destekler, cilt tonunu dengeler ve canlı bir parlaklık kazandırır. Günlük kullanımda cilt temiz, pürüzsüz ve yumuşacık bir görünüme kavuşur.",ingredients:"Aqua, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycerin, Phenoxyethanol, Sodium Lauroyl Sarcosinate, Ethylhexylglycerin, Panthenol, Citric Acid, PEG-7 Glyceryl Cocoate, Coco-Glucoside, Glyceryl Oleate, Lactobacillus Lysate, Pyrus Malus (Apple) Fruit Extract, Aloe Barbadensis Leaf Juice, Ananas Sativus (Pineapple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Islak cilde yeterli miktarda ürünü uygulayın, köpürterek dairesel hareketlerle masaj yapın. Ardından ılık suyla durulayın. Sabah ve akşam olmak üzere günde iki kez kullanılması önerilir.",faqs:[{question:"Cildi kurutur mu?",answer:"Hayır, nazik formülü sayesinde ciltte kuruluk hissi bırakmaz; nem dengesini korur."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit ve antioksidanlarla cilt yüzeyini yeniler, cildin canlılığını ve parlaklığını artırır."},{question:"Göz çevresinde kullanılabilir mi?",answer:"Göz ile direkt temas ettirilmemelidir. Göz çevresine yakın bölgelerde nazikçe uygulanabilir."},{question:"Hangi cilt tipleri için uygundur?",answer:"Tüm cilt tipleri için uygundur; özellikle karma ve yağlı ciltlerde ferahlık sağlar."}]},8:{productId:8,details:"SincEva 50 SPF Güneş Kremi, özel geliştirilmiş formülüyle cildi güneşin zararlı UVA ve UVB ışınlarına karşı geniş spektrumlu koruma altına alır. Hafif dokusu sayesinde ciltte yağlı bir his bırakmadan kolayca emilir ve yumuşacık bir bitiş sağlar. Formülündeki Aloe Vera cildi yatıştırırken, Pantenol nem bariyerini güçlendirir. Elma Özü (Pyrus Malus Fruit Extract), malik asit ve antioksidanlar sayesinde cilt hücrelerini yeniler, çevresel etkenlere karşı korur ve cilde canlı bir parlaklık kazandırır. Düzenli kullanımda cilt nemli, sağlıklı ve güneşe karşı korunmuş bir görünüme kavuşur.",ingredients:"Aqua, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Diethylamino Hydroxybenzoyl Hexyl Benzoate, C12-15 Alkyl Benzoate, Ethylhexyl Palmitate, Ethylhexyl Triazone, Cetearyl Alcohol, Glycerin, Zinc Oxide, Ceteareth-20, Dimethicone, Panthenol, Glyceryl Stearate, PEG-100 Stearate, Butylene Glycol, Phenoxyethanol, Titanium Dioxide, Allantoin, Ethylhexylglycerin, Ammonium Polyacrylate, Caprylic/Capric Triglyceride, Chamomilla Recutita (Matricaria) Flower Extract, Aloe Barbadensis Leaf Juice, Hydrolyzed Collagen, Sodium Hyaluronate, Tocopheryl Acetate, Alpha-Arbutin, Pyrus Malus (Apple) Fruit Extract, Ananas Sativus (Pineapple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Güneşe çıkmadan 10–15 dakika önce temiz cilde yeterli miktarda uygulayınız. Cildiniz suyla temas ettiğinde veya uzun süre güneşte kaldığınızda uygulamayı tekrarlayınız. Etkin koruma için 2 saatte bir yenilenmesi önerilir.",faqs:[{question:"Güneş kremi yağlı bir his bırakır mı?",answer:"Hayır. Hafif yapısı sayesinde hızla emilir ve ciltte ağırlık yapmaz."},{question:"Elma özü ne işe yarar?",answer:"Elma özü, malik asit ve antioksidan içeriğiyle cilt hücrelerini yeniler ve güneşin yol açtığı oksidatif stresi azaltır."},{question:"Makyaj altına uygulanabilir mi?",answer:"Evet, ciltte pürüzsüz bir zemin oluşturur ve makyaj altında rahatlıkla kullanılabilir."},{question:"Hassas ciltler için uygun mu?",answer:"Evet, dermatolojik olarak test edilmiştir ve hassas ciltler dahil tüm cilt tipleri için uygundur."}]},9:{productId:9,details:"SincEva Hyaluronik Asit Nemlendirici Krem, cildi derinlemesine nemlendirir ve anında pürüzsüz bir görünüm kazandırır. Hyaluronik Asit, cilt tabakalarının her birinde suyu tutarak uzun süreli nem sağlar. Pantenol, cilt bariyerini güçlendirirken kuruluk kaynaklı gerginlik hissini azaltır. Formüldeki Elma Özü (Pyrus Malus Fruit Extract), malik asit ve doğal antioksidanlar sayesinde cildin yenilenmesini destekler, cildin tazelik ve ışıltısını artırır. Hafif dokusu ile hızla emilen krem, yağlı his bırakmaz ve günlük bakım için idealdir.",ingredients:"Aqua, Isopropyl Myristate, Glycerin, Propylene Glycol, Sodium Acrylates Copolymer, Phenoxyethanol, Lecithin, Sodium Hyaluronate, Lactobacillus Lysate, Panthenol, Ethylhexylglycerin, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Aroma, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Temiz ve kuru cildinize sabah ve akşam olmak üzere günde iki kez yeterli miktarda kremi dairesel hareketlerle masaj yaparak uygulayınız. Durulama gerektirmez.",faqs:[{question:"Hyaluronik asit ne işe yarar?",answer:"Cildin nem tutma kapasitesini artırır, dolgun ve pürüzsüz bir görünüm sağlar."},{question:"Elma özünün etkisi nedir?",answer:"Malik asit içeriğiyle cilt yenilenmesini destekler ve antioksidanlar sayesinde cildi çevresel etkenlere karşı korur."},{question:"Gündüz mü gece mi kullanılmalı?",answer:"Günlük bakım için hem sabah hem gece kullanıma uygundur."},{question:"Hangi cilt tipleri için uygundur?",answer:"Tüm cilt tipleri için uygundur, özellikle kuru ve nemsiz ciltler için idealdir."}]}},sT={1:{productId:1,details:"SincEva Vitamin C Serum, with 5% Vitamin C, helps even out skin tone and boost radiance. Its powerful antioxidant action protects against free radicals and supports the prevention of photoaging caused by UV exposure. Enriched with Aloe Vera for soothing and Apple Fruit Extract (Pyrus Malus) for natural malic acid and vitamins, it promotes cell renewal and enhances brightness. With consistent use, the skin appears visibly more luminous, firm, and revitalized.",ingredients:"Aqua, Propylene Glycol, 3-O-Ethyl Ascorbic Acid, Glycerin, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Lactobacillus Lysate, Ethylhexylglycerin, Aloe Barbadensis Leaf Extract, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply 2–3 drops to clean, dry skin in the morning and evening. Gently massage until absorbed. Always use sunscreen during the day.",faqs:[{question:"What skin types is this serum suitable for?",answer:"Suitable for all skin types, especially dull, tired, or uneven-toned skin."},{question:"What is the benefit of Apple Extract?",answer:"It promotes skin renewal and boosts natural glow with its malic acid and vitamin content."},{question:"When will I see results?",answer:"Visible brightening and even skin tone typically appear within 3–4 weeks of regular use."},{question:"Can it be used during the day?",answer:"Yes, but always with sunscreen."}]},2:{productId:2,details:"SincEva Arbutin Serum targets uneven skin tone, giving the skin a brighter, smoother, and more radiant look. Its 2% Alpha-Arbutin helps regulate melanin production, minimizing the appearance of sun, age, acne, or pregnancy spots. Niacinamide strengthens the skin barrier, while Apple Fruit Extract (Pyrus Malus), rich in natural malic acid and antioxidants, rejuvenates the skin, revitalizes cells, and protects against free radicals. Its lightweight texture absorbs quickly without leaving a greasy feel, delivering a naturally luminous complexion with regular use.",ingredients:"Aqua, Propylene Glycol, Alpha-Arbutin, Glycerin, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Niacinamide, Lactobacillus Lysate, Ethylhexylglycerin, Aloe Barbadensis Leaf Extract, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply 2-3 drops to clean, dry skin in the morning and evening. Gently massage until absorbed. Always use sunscreen during the day.",faqs:[{question:"What does Arbutin Serum do?",answer:"It helps even skin tone and reduces the appearance of dark, sun, and age spots."},{question:"What is the role of Apple Extract?",answer:"Rich in malic acid and antioxidants, Apple Extract supports skin renewal, protects against free radicals, and brightens the complexion."},{question:"Can it be used during the day?",answer:"Yes, but always with sunscreen."},{question:"When will I see results?",answer:"Noticeable improvement in skin tone usually appears within 3–4 weeks of regular use."}]},3:{productId:3,details:`SincEva Anti-Wrinkle Eye Cream combines the patented "super molecule" Proxylane, Collagen, and Apple Fruit Extract (Pyrus Malus) to target fine lines, crow's feet, and dark circles around the eyes. Proxylane strengthens the skin biomechanically, restoring firmness and elasticity, while collagen plumps and smooths the delicate eye area. Apple Extract, rich in malic acid and antioxidants, rejuvenates the skin and brightens the under-eye region. With consistent use, it provides a smoother, firmer, and more youthful look.`,ingredients:"Aqua, Dibutyl Adipate, Propylene Glycol, Isopropyl Myristate, Sodium Acrylates Copolymer, Panthenol, Phenoxyethanol, Hydroxypropyl Tetrahydropyrantriol (Proxylane), Lecithin, Hydrolyzed Collagen, Lactobacillus Lysate, Ethylhexylglycerin, 1,2-Hexanediol, Glycerin, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Pentylene Glycol, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply a small amount to clean, dry skin around the eyes in the morning and evening. Gently massage until absorbed. A mild tingling may occur due to fast-acting ingredients. Do not rinse.",faqs:[{question:"What age group is this eye cream for?",answer:"Suitable for anyone aged 25 and above, especially those concerned about fine lines and dark circles."},{question:"What does Apple Extract do?",answer:"It nourishes and revitalizes the delicate eye area while reducing signs of fatigue thanks to its malic acid and antioxidant content."},{question:"Can it be used under make-up?",answer:"Yes, its lightweight texture makes it ideal for use before make-up."},{question:"What if I feel stinging in the eyes?",answer:"Rinse immediately with water and discontinue use if irritation persists."}]},4:{productId:4,details:"SincEva Anti-Aging Night Cream supports the skin's natural renewal process throughout the night. Liposomal Retinol promotes cell turnover and helps reduce the appearance of fine lines, wrinkles, and uneven skin tone. Niacinamide strengthens the skin barrier, minimizes pores, and enhances texture smoothness. Infused with Apple Fruit Extract (Pyrus Malus), rich in malic acid and antioxidants, it balances skin tone, protects against free radicals, and restores natural radiance. Wake up to a smoother, firmer, and rejuvenated complexion every morning.",ingredients:"Aqua, Dibutyl Adipate, Glycerin, Isopropyl Myristate, Propylene Glycol, Sodium Acrylates Copolymer, Phenoxyethanol, Panthenol, Lecithin, Caprylic/Capric Triglyceride, Sodium Hyaluronate, Aroma, Lactobacillus Lysate, Polysorbate 20, Retinol, Ethylhexylglycerin, Niacinamide, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, BHT, Polyglyceryl-10 Myristate, Ethyl Lauroyl Arginate HCl, BHA, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply a sufficient amount to clean, dry skin before bedtime. Gently massage in circular motions until fully absorbed. No rinsing required. When using retinol products, always apply sunscreen during the day.",faqs:[{question:"What age group is this cream for?",answer:"Recommended for those aged 25 and above, especially for skin with fine lines, uneven tone, or loss of elasticity."},{question:"What is the benefit of Apple Extract?",answer:"It supports cell renewal and restores radiance with its malic acid and antioxidant content."},{question:"Can it be used during the day?",answer:"No, it's designed for nighttime use only. Always follow with sunscreen during the day."},{question:"Does retinol cause irritation?",answer:"Mild tingling or redness may occur initially, which is normal as the skin adapts."}]},5:{productId:5,details:"SincEva Skin Corrector Toner deeply cleanses the skin while helping reduce the appearance of pores and balance sebum levels. Its formula enriched with 5% Glycolic Acid and an AHA complex (Glycolic, Malic, Lactic, Tartaric, Citric Acids) gently removes dead skin cells, leaving a refreshed, radiant complexion. The Apple Fruit Extract (Pyrus Malus) provides a natural source of malic acid and antioxidants, offering a gentle peeling effect that brightens dull skin and restores natural glow. With regular use, the skin appears smoother, balanced, and visibly renewed.",ingredients:"Aqua, Glycolic Acid, Propylene Glycol, Triethanolamine, Phenoxyethanol, Glucose, Urea, Panthenol, 3-O-Ethyl Ascorbic Acid, Lactobacillus Lysate, Fructose, Hydrogenated Starch Hydrolysate, Sodium PCA, PEG-40 Hydrogenated Castor Oil, Glycine, Hydrolyzed Wheat Protein, Sodium Glutamate, Ethylhexylglycerin, Glycerin, Tetrasodium EDTA, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Aroma, Sodium Benzoate, Citric Acid, Lactic Acid, Lysine, Malic Acid, Potassium Hydroxide, Potassium Sorbate, Sodium Hydroxide, Tartaric Acid, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, CI 17200.",howToUse:"After cleansing, apply a sufficient amount of toner to dry skin using a cotton pad. No rinsing required. For daytime use, always follow with sunscreen.",faqs:[{question:"Which skin types is this toner suitable for?",answer:"Suitable for oily, combination, and normal skin. For sensitive skin, use 2–3 times per week."},{question:"What does Apple Extract do?",answer:"Apple Extract is rich in malic acid and antioxidants, supporting skin renewal and reducing dullness."},{question:"Does it cause a burning sensation?",answer:"A mild tingling is normal; if burning or redness occurs, discontinue use."},{question:"Can it be used during the day?",answer:"Yes, but always with sunscreen."}]},6:{productId:6,details:"SincEva Peeling Scrub Cream gently exfoliates the skin, removing dead cells for a smoother and brighter complexion. Enriched with natural AHA sources such as Apple Fruit Extract (Pyrus Malus), Lime, and Pineapple Extracts, it effectively purifies the skin from dirt, excess oil, and impurities. With malic acid, ascorbic acid, and glycolic acid, it helps tighten pores and revitalize the skin's surface. Regular use promotes cell renewal, evens out skin tone, and enhances natural radiance.",ingredients:"Aqua, Cetearyl Alcohol, Glycerin, Glycolic Acid, Ascorbic Acid, Malic Acid, Propylene Glycol, Stearic Acid, Ceteareth-20, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Phenoxyethanol, Ethylhexylglycerin, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Take a small amount into your palm and gently massage onto damp skin in circular motions. Rinse thoroughly with warm water. Use 2–3 times per week for best results.",faqs:[{question:"Does this scrub irritate the skin?",answer:"No, it's formulated with natural AHA sources that gently exfoliate without irritation."},{question:"What does Apple Extract do?",answer:"Rich in malic acid and antioxidants, it smooths and brightens the skin for a refreshed look."},{question:"How often should I use it?",answer:"2–3 times weekly for normal skin; once weekly for sensitive skin."},{question:"When should it be applied?",answer:"Best used in the evening. Follow with moisturizer and sunscreen during the day."}]},7:{productId:7,details:"SincEva Facial Cleansing Foam gently cleanses the skin without drying it out, leaving it fresh and revitalized. Its rich foam texture effectively removes dirt, excess oil, and makeup residues from pores. Aloe Vera soothes the skin, while Apple Fruit Extract (Pyrus Malus), rich in malic acid and natural antioxidants, promotes skin renewal, balances tone, and enhances radiance. With daily use, the skin feels clean, soft, and refreshed.",ingredients:"Aqua, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycerin, Phenoxyethanol, Sodium Lauroyl Sarcosinate, Ethylhexylglycerin, Panthenol, Citric Acid, PEG-7 Glyceryl Cocoate, Coco-Glucoside, Glyceryl Oleate, Lactobacillus Lysate, Pyrus Malus (Apple) Fruit Extract, Aloe Barbadensis Leaf Juice, Ananas Sativus (Pineapple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Sodium Benzoate, Potassium Sorbate, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply an adequate amount to wet skin, lather, and gently massage in circular motions. Rinse thoroughly with lukewarm water. Use twice daily, morning and evening.",faqs:[{question:"Does it dry the skin?",answer:"No, its gentle formula cleanses without stripping moisture and helps maintain the skin's balance."},{question:"What is the role of Apple Extract?",answer:"It rejuvenates the skin surface with malic acid and antioxidants, enhancing radiance and vitality."},{question:"Can it be used around the eyes?",answer:"Avoid direct contact with the eyes; can be used gently near the eye area."},{question:"What skin types is it suitable for?",answer:"Suitable for all skin types, especially refreshing for combination and oily skin."}]},8:{productId:8,details:"SincEva SPF 50 Sunscreen provides broad-spectrum protection against harmful UVA and UVB rays with its advanced lightweight formula. It absorbs easily without leaving a greasy residue, offering a soft and smooth finish. Aloe Vera soothes the skin, Panthenol strengthens the moisture barrier, and Apple Fruit Extract (Pyrus Malus) — rich in malic acid and antioxidants — helps rejuvenate and protect the skin from environmental stress. With regular use, it leaves the skin hydrated, healthy, and perfectly protected from the sun.",ingredients:"Aqua, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Diethylamino Hydroxybenzoyl Hexyl Benzoate, C12-15 Alkyl Benzoate, Ethylhexyl Palmitate, Ethylhexyl Triazone, Cetearyl Alcohol, Glycerin, Zinc Oxide, Ceteareth-20, Dimethicone, Panthenol, Glyceryl Stearate, PEG-100 Stearate, Butylene Glycol, Phenoxyethanol, Titanium Dioxide, Allantoin, Ethylhexylglycerin, Ammonium Polyacrylate, Caprylic/Capric Triglyceride, Chamomilla Recutita (Matricaria) Flower Extract, Aloe Barbadensis Leaf Juice, Hydrolyzed Collagen, Sodium Hyaluronate, Tocopheryl Acetate, Alpha-Arbutin, Pyrus Malus (Apple) Fruit Extract, Ananas Sativus (Pineapple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply generously to clean skin 10–15 minutes before sun exposure. Reapply after swimming, sweating, or towel drying. For continuous protection, reapply every two hours.",faqs:[{question:"Does this sunscreen feel greasy?",answer:"No. It has a lightweight texture that absorbs quickly without leaving any residue."},{question:"What does Apple Extract do?",answer:"Rich in antioxidants and malic acid, it helps renew skin cells and protects against UV-induced oxidative stress."},{question:"Can it be used under makeup?",answer:"Yes, it provides a smooth base and is suitable for daily use under makeup."},{question:"Is it suitable for sensitive skin?",answer:"Yes, it's dermatologically tested and suitable for all skin types."}]},9:{productId:9,details:"SincEva Hyaluronic Acid Moisturizing Cream deeply hydrates the skin and provides an instantly smoother appearance. Hyaluronic Acid locks in moisture across all skin layers, ensuring long-lasting hydration. Panthenol reinforces the skin barrier and soothes dryness-induced tightness. Apple Fruit Extract (Pyrus Malus), rich in malic acid and natural antioxidants, supports skin renewal, leaving it fresh and radiant. Its lightweight texture absorbs quickly without greasiness, making it perfect for daily use.",ingredients:"Aqua, Isopropyl Myristate, Glycerin, Propylene Glycol, Sodium Acrylates Copolymer, Phenoxyethanol, Lecithin, Sodium Hyaluronate, Lactobacillus Lysate, Panthenol, Ethylhexylglycerin, Ananas Sativus (Pineapple) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Aroma, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid.",howToUse:"Apply twice daily, morning and evening, to clean and dry skin. Gently massage in circular motions until fully absorbed. No rinsing required.",faqs:[{question:"What does Hyaluronic Acid do?",answer:"It boosts the skin's ability to retain moisture, leaving it plump and smooth."},{question:"What is the benefit of Apple Extract?",answer:"It promotes cell renewal and provides antioxidant protection against environmental stress."},{question:"When should it be used?",answer:"Suitable for daily use, both morning and night."},{question:"Is it suitable for all skin types?",answer:"Yes, especially effective for dry or dehydrated skin."}]}},uT={1:{productId:1,details:"سيروم فيتامين سي من سينسإيفا يحتوي على 5٪ فيتامين C الذي يساعد على توحيد لون البشرة ومنحها إشراقاً طبيعياً. بفضل خصائصه المضادة للأكسدة، يحمي البشرة من الجذور الحرة ويساعد على الوقاية من الشيخوخة الناتجة عن أشعة الشمس. يحتوي أيضاً على الألوفيرا التي تهدئ البشرة، ومستخلص التفاح (Pyrus Malus) الغني بحمض الماليك والفيتامينات الطبيعية التي تدعم تجديد الخلايا وتزيد من إشراق البشرة. مع الاستخدام المنتظم، تبدو البشرة أكثر توهجاً وثباتاً وانتعاشاً.",ingredients:"ماء، بروبيلين غليكول، 3-O-إيثيل أسكوربيك أسيد، جلسيرين، فينوكسي إيثانول، أمونيوم بولي أكريلويل ديميثيل توريت، ليسات لاكتوباسيلوس، إيثيل هكسيل جلسيرين، مستخلص أوراق الألوفيرا، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، حمض الستريك، بنزوات الصوديوم، سوربات البوتاسيوم، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي 2–3 قطرات على بشرة نظيفة وجافة صباحاً ومساءً، ودلّكي بلطف حتى تمتصها البشرة بالكامل. يُنصح باستخدام واقي الشمس أثناء النهار.",faqs:[{question:"لأي نوع من أنواع البشرة يناسب السيروم؟",answer:"مناسب لجميع أنواع البشرة، خاصة للبشرة الباهتة أو المتعبة أو غير المتجانسة اللون."},{question:"ما فائدة مستخلص التفاح؟",answer:"يدعم تجديد خلايا البشرة ويزيد من إشراقها الطبيعي بفضل حمض الماليك والفيتامينات."},{question:"متى تظهر النتائج؟",answer:"تظهر النتائج عادة خلال 3–4 أسابيع من الاستخدام المنتظم."},{question:"هل يمكن استخدامه في النهار؟",answer:"نعم، ولكن يجب استخدام واقي الشمس معه دائماً."}]},2:{productId:2,details:"سيروم الأربوتين من سينسإيفا يستهدف تفاوت لون البشرة ليمنحها مظهراً أكثر إشراقاً ونعومة وتوهجاً. يحتوي على %2 ألفا-أربوتين الذي يساعد على تنظيم إنتاج الميلانين وتقليل مظهر بقع الشمس والتقدم في العمر وحب الشباب والحمل. كما تعمل النياسيناميد على تقوية حاجز البشرة، بينما يقوم مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك الطبيعي ومضادات الأكسدة بتجديد خلايا البشرة وحمايتها من الجذور الحرة. يتميز بتركيبة خفيفة تمتصها البشرة بسرعة دون أن تترك أي أثر دهني، مما يمنح إشراقاً طبيعياً مع الاستخدام المنتظم.",ingredients:"ماء، بروبيلين غليكول، ألفا أربوتين، جلسيرين، فينوكسي إيثانول، أمونيوم بولي أكريلويل ديميثيل توريت، نياكيناميد، ليسات لاكتوباسيلوس، إيثيل هكسيل جلسيرين، مستخلص أوراق الألوفيرا، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، حمض الستريك، بنزوات الصوديوم، سوربات البوتاسيوم، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي 2-3 قطرات على بشرة نظيفة وجافة صباحاً ومساءً. دلّكي بلطف حتى تمتص البشرة المنتج بالكامل. يُنصح باستخدام واقي الشمس أثناء النهار.",faqs:[{question:"ما فائدة سيروم الأربوتين؟",answer:"يساعد على توحيد لون البشرة وتقليل ظهور البقع الداكنة وبقع الشمس والتقدم في العمر."},{question:"ما فائدة مستخلص التفاح في السيروم؟",answer:"غني بحمض الماليك ومضادات الأكسدة، يدعم تجديد البشرة ويحميها من الجذور الحرة ويمنحها إشراقاً طبيعياً."},{question:"هل يمكن استخدامه في النهار؟",answer:"نعم، ولكن يجب استخدام واقي الشمس معه دائماً."},{question:"متى تظهر النتائج؟",answer:"تظهر النتائج الواضحة عادة خلال 3-4 أسابيع من الاستخدام المنتظم."}]},3:{productId:3,details:"كريم العين المضاد للتجاعيد من سينسإيفا يجمع بين الجزيء الفائق الحاصل على براءة اختراع Proxylane والكولاجين ومستخلص التفاح (Pyrus Malus) لاستهداف الخطوط الدقيقة وتجاعيد القدمين والهالات السوداء. يقوّي الـ Proxylane بنية البشرة ميكانيكياً ويعيد لها المرونة، بينما يمنح الكولاجين امتلاءً ونعومة للمنطقة الحساسة حول العينين. أما مستخلص التفاح الغني بحمض الماليـك ومضادات الأكسدة فيجدّد خلايا البشرة ويمنحها إشراقاً طبيعياً. ومع الاستخدام المنتظم تبدو المنطقة حول العين أكثر نعومة وشباباً.",ingredients:"ماء، ثنائي بوتيل أديبات، بروبيلين غليكول، أيزوبروبيل مايرستات، كوبوليمر أكريلات الصوديوم، بانثينول، فينوكسي إيثانول، Proxylane، ليسيثين، كولاجين مهدرج، ليسات لاكتوباسيلوس، إيثيل هكسيل جلسيرين، 1,2-هيكسانديول، جلسيرين، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، بنتيلين غليكول، مستخلص الليمون، مستخلص فاكهة العاطفة، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية صغيرة على منطقة العين النظيفة والجافة صباحاً ومساءً، ودلّكي بلطف حتى تمتصها البشرة. قد يظهر وخز خفيف نتيجة المكونات النشطة. لا حاجة للشطف.",faqs:[{question:"لأي فئة عمرية يناسب هذا الكريم؟",answer:"مناسب لمن تجاوزوا سن 25 عاماً، وخاصة لمن يعانون من الخطوط الدقيقة أو الهالات السوداء."},{question:"ما دور مستخلص التفاح؟",answer:"يغذي ويجدد البشرة حول العينين بفضل حمض الماليـك ومضادات الأكسدة، ويقلل من علامات التعب."},{question:"هل يمكن استخدامه تحت المكياج؟",answer:"نعم، تركيبته الخفيفة تجعله مناسباً لذلك."},{question:"ماذا أفعل إذا دخل العين؟",answer:"اغسلي العينين بالماء الوفير، وإذا استمر التهيج استشيري الطبيب الجلدي."}]},4:{productId:4,details:"كريم الليل المضاد للشيخوخة من سينسإيفا يدعم عملية تجديد البشرة الطبيعية أثناء الليل. يحتوي على الريتينول الليبوزومي الذي يحفّز تجديد الخلايا ويساعد على تقليل مظهر الخطوط الدقيقة والتجاعيد وتفاوت لون البشرة. كما تعمل النياسيناميد على تقوية حاجز البشرة وتقليل مظهر المسام لتحسين الملمس. غني بـ مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة، الذي يوازن لون البشرة ويحميها من الجذور الحرة ويمنحها إشراقاً طبيعياً. في الصباح، تبدو البشرة أكثر نعومة وثباتاً وشباباً.",ingredients:"ماء، ثنائي بوتيل أديبات، جلسيرين، أيزوبروبيل مايرستات، بروبيلين غليكول، كوبوليمر أكريلات الصوديوم، فينوكسي إيثانول، بانثينول، ليسيثين، ثلاثي الغليسريد الكابريليك/الكابريك، هيالورونات الصوديوم، عطر، ليسات لاكتوباسيلوس، بولي سوربيت 20، ريتينول، إيثيل هكسيل جلسيرين، نياكيناميد، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، BHT، بولي غليسيريل-10 ميرستات، إيثيل لورويل أرجينات HCl، BHA، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية مناسبة على بشرة نظيفة وجافة قبل النوم، ودلّكي بلطف بحركات دائرية حتى تمتصها البشرة بالكامل. لا حاجة للشطف. عند استخدام منتجات الريتينول، يجب وضع واقي الشمس في النهار.",faqs:[{question:"لأي فئة عمرية يناسب هذا الكريم؟",answer:"مناسب لمن تجاوزوا سن 25 عاماً، خصوصاً لمن يعانون من الخطوط الدقيقة أو فقدان المرونة أو تفاوت لون البشرة."},{question:"ما فائدة مستخلص التفاح؟",answer:"يدعم تجديد خلايا البشرة ويمنحها إشراقاً بفضل حمض الماليك ومضادات الأكسدة."},{question:"هل يمكن استخدامه في النهار؟",answer:"لا، مخصص للاستخدام الليلي فقط. ويجب وضع واقي الشمس في النهار."},{question:"هل يمكن أن يسبب الريتينول تهيجاً؟",answer:"قد يسبب وخزاً خفيفاً أو احمراراً في البداية، وهو أمر طبيعي مع تأقلم البشرة."}]},5:{productId:5,details:"تونر سينسإيفا لتجديد البشرة ينظف البشرة بعمق ويساعد على تقليل مظهر المسام والحفاظ على توازن إفراز الزيوت. يحتوي على 5٪ حمض الجليكوليك ومزيج أحماض AHA (جليكوليك، ماليك، لاكتيك، تارتاريك، وسيتريك) التي تزيل خلايا الجلد الميتة بلطف لتمنح البشرة مظهراً متجدداً ومشرقاً. كما يوفر مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة تأثير تقشير طبيعي لطيف يساعد على تفتيح البشرة الباهتة واستعادة إشراقها الطبيعي. مع الاستخدام المنتظم، تبدو البشرة أكثر نعومة وتوازناً وانتعاشاً.",ingredients:"ماء، حمض الجليكوليك، بروبيلين غليكول، ثلاثي إيثانول أمين، فينوكسي إيثانول، جلوكوز، يوريا، بانثينول، حمض الأسكوربيك الإيثيلي، ليسات لاكتوباسيلوس، فركتوز، هيدروكسيليز النشا المهدرج، صوديوم PCA، PEG-40 زيت الخروع المهدرج، جلايسين، بروتين القمح المهدرج، غلوتامات الصوديوم، إيثيل هكسيل جلسيرين، جلسيرين، تيتراصوديوم EDTA، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، عطر، بنزوات الصوديوم، حمض الستريك، حمض اللاكتيك، ليسين، حمض الماليك، هيدروكسيد البوتاسيوم، سوربات البوتاسيوم، هيدروكسيد الصوديوم، حمض التارتاريك، مستخلص الليمون، مستخلص فاكهة العاطفة، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك، CI 17200.",howToUse:"بعد تنظيف البشرة، ضعي كمية مناسبة من التونر على بشرة جافة باستخدام قطعة قطن. لا حاجة للشطف. يُنصح باستخدام واقي الشمس أثناء النهار.",faqs:[{question:"لأي نوع من أنواع البشرة يناسب هذا التونر؟",answer:"مناسب للبشرة الدهنية والمختلطة والعادية. للبشرة الحساسة، يُنصح بالاستخدام من 2 إلى 3 مرات أسبوعياً."},{question:"ما فائدة مستخلص التفاح؟",answer:"غني بحمض الماليك ومضادات الأكسدة، يدعم تجديد البشرة ويقلل من البهتان."},{question:"هل يسبب إحساساً بالحرارة أو الوخز؟",answer:"وخز خفيف طبيعي؛ في حال الشعور بحرقة أو احمرار، توقفي عن الاستخدام."},{question:"هل يمكن استخدامه في النهار؟",answer:"نعم، ولكن يجب استخدام واقي الشمس معه."}]},6:{productId:6,details:"كريم التقشير من سينسإيفا ينظف البشرة بلطف ويزيل خلايا الجلد الميتة ليمنحها مظهراً أكثر نعومة وإشراقاً. غني بمصادر طبيعية لأحماض AHA مثل مستخلص التفاح (Pyrus Malus) والليمون والأناناس، حيث ينظف البشرة من الأوساخ والزيوت الزائدة والشوائب بفعالية. تحتوي تركيبته على حمض الماليك وحمض الأسكوربيك وحمض الجليكوليك التي تساعد على شد المسام وتجديد نضارة البشرة. مع الاستخدام المنتظم، تتجدد خلايا البشرة ويصبح لونها أكثر توازناً وإشراقاً.",ingredients:"ماء، كحول سيتيريل، جلسيرين، حمض الجليكوليك، حمض الأسكوربيك، حمض الماليك، بروبيلين غليكول، حمض الستيريك، سيتيريث-20، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، فينوكسي إيثانول، إيثيل هكسيل جلسيرين، بنزوات الصوديوم، سوربات البوتاسيوم، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"خذي كمية مناسبة من الكريم وافركيها بلطف على بشرة رطبة بحركات دائرية. اشطفي جيداً بالماء الفاتر. يُنصح بالاستخدام من 2 إلى 3 مرات أسبوعياً للحصول على أفضل النتائج.",faqs:[{question:"هل يسبب هذا المقشر تهيجاً للبشرة؟",answer:"لا، فهو يحتوي على أحماض AHA الطبيعية التي تقشر البشرة بلطف دون تهيج."},{question:"ما فائدة مستخلص التفاح؟",answer:"غني بحمض الماليك ومضادات الأكسدة التي تنعّم البشرة وتمنحها إشراقاً وانتعاشاً."},{question:"كم مرة يجب استخدامه؟",answer:"للبشرة العادية 2–3 مرات أسبوعياً، وللبشرة الحساسة مرة واحدة أسبوعياً."},{question:"متى يفضل استخدامه؟",answer:"يُفضل استخدامه في المساء، مع وضع مرطب بعده وواقي شمس في النهار."}]},7:{productId:7,details:"رغوة تنظيف الوجه من سينسإيفا تنظف البشرة بلطف دون أن تجففها، وتمنحها إحساساً بالانتعاش والنقاء. تعمل رغوتها الغنية على إزالة الأوساخ والزيوت الزائدة وبقايا المكياج من المسام بفعالية. تحتوي على الألوفيرا التي تهدئ البشرة، ومستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة التي تدعم تجديد البشرة وتوازن لونها وتزيد من إشراقها. مع الاستخدام اليومي، تصبح البشرة نظيفة وناعمة ومنتعشة.",ingredients:"ماء، كوكاميدوبروبيل بيتايـن، صوديوم كوكويل أيزيثيونات، جلسيرين، فينوكسي إيثانول، صوديوم لورويل ساركوزينات، إيثيل هكسيل جلسيرين، بانثينول، حمض الستريك، PEG-7 غليسيريل كوكوات، كوكو-غلوكوزيد، غليسيريل أوليات، ليسات لاكتوباسيلوس، مستخلص التفاح (Pyrus Malus)، عصارة أوراق الألوفيرا، مستخلص الأناناس، مستخلص الليمون، مستخلص فاكهة العاطفة، بنزوات الصوديوم، سوربات البوتاسيوم، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية مناسبة على بشرة مبللة، ثم افركي بلطف بحركات دائرية لتكوين رغوة. اشطفي جيداً بالماء الفاتر. يُنصح بالاستخدام مرتين يومياً صباحاً ومساءً.",faqs:[{question:"هل يجفف البشرة؟",answer:"لا، تركيبته اللطيفة تنظف البشرة دون أن تزيل رطوبتها وتحافظ على توازنها الطبيعي."},{question:"ما فائدة مستخلص التفاح؟",answer:"يجدد سطح البشرة بفضل حمض الماليك ومضادات الأكسدة ويزيد من إشراقها وحيويتها."},{question:"هل يمكن استخدامه حول العينين؟",answer:"يُفضل تجنب ملامسته للعينين مباشرة، ويمكن استخدامه بلطف قرب منطقة العين."},{question:"لأي نوع من أنواع البشرة يناسب؟",answer:"مناسب لجميع أنواع البشرة، خصوصاً للبشرة المختلطة والدهنية التي تحتاج إلى انتعاش وتنظيف عميق."}]},8:{productId:8,details:"كريم الوقاية من الشمس SPF 50 من سينسإيفا يوفر حماية شاملة ضد أشعة UVA و UVB الضارة بفضل تركيبته المتطورة والخفيفة. يمتص بسرعة دون أن يترك أي أثر دهني ويمنح البشرة لمسة ناعمة ومريحة. يحتوي على الألوفيرا التي تهدئ البشرة، والبانثينول الذي يقوي حاجز الرطوبة، بينما يعمل مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة على تجديد خلايا البشرة وحمايتها من العوامل البيئية. مع الاستخدام المنتظم، يمنح البشرة ترطيباً وحماية طبيعية من أشعة الشمس.",ingredients:"ماء، بيس إيثيل هيكسيلوكسي فينول ميثوكسي فينيل تريازين، ثنائي إيثيل أمينو هيدروكسي بنزويل هيكسيل بنزوات، كحول الألكيل (C12-15)، إيثيل هيكسيل بالميتات، إيثيل هيكسيل تريازون، كحول سيتيريل، جلسيرين، أكسيد الزنك، سيتيريث-20، ثنائي ميثيكون، بانثينول، ستيرات الجلسيريل، PEG-100 ستيرات، بيوتيلين غليكول، فينوكسي إيثانول، ثاني أكسيد التيتانيوم، ألانتوين، إيثيل هيكسيل جلسيرين، بولي أكريلات الأمونيوم، ثلاثي الغليسريد الكابريليك/الكابريك، مستخلص البابونج، عصارة أوراق الألوفيرا، كولاجين مهدرج، هيالورونات الصوديوم، خلات التوكوفيرول، ألفا أربوتين، مستخلص التفاح (Pyrus Malus)، مستخلص الأناناس، مستخلص الليمون، مستخلص فاكهة العاطفة، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية مناسبة على بشرة نظيفة قبل التعرض لأشعة الشمس بـ 10–15 دقيقة. أعيدي التطبيق بعد السباحة أو التعرق أو تجفيف البشرة بالمنشفة. للحصول على حماية مستمرة، يُنصح بإعادة الاستخدام كل ساعتين.",faqs:[{question:"هل يترك الكريم إحساساً دهنياً؟",answer:"لا، تركيبته خفيفة تمتصها البشرة بسرعة دون أن تترك أي بقايا."},{question:"ما فائدة مستخلص التفاح؟",answer:"غني بمضادات الأكسدة وحمض الماليك، يساعد على تجديد خلايا البشرة وحمايتها من الإجهاد التأكسدي الناتج عن الشمس."},{question:"هل يمكن استخدامه تحت المكياج؟",answer:"نعم، يوفر قاعدة ناعمة للمكياج ومناسب للاستخدام اليومي."},{question:"هل يناسب البشرة الحساسة؟",answer:"نعم، تم اختباره جلدياً ومناسب لجميع أنواع البشرة."}]},9:{productId:9,details:"كريم الترطيب بحمض الهيالورونيك من سينسإيفا يرطّب البشرة بعمق ويمنحها مظهراً أكثر نعومة على الفور. يقوم حمض الهيالورونيك بحبس الرطوبة في طبقات الجلد المختلفة لضمان ترطيب طويل الأمد، بينما يقوّي البانثينول حاجز البشرة ويخفف من الجفاف. يحتوي على مستخلص التفاح (Pyrus Malus) الغني بحمض الماليك ومضادات الأكسدة الطبيعية التي تدعم تجديد البشرة وتمنحها إشراقاً وحيوية. تركيبة خفيفة تمتصها البشرة بسرعة دون أن تترك أثراً دهنياً، مثالية للعناية اليومية.",ingredients:"ماء، أيزوبروبيل مايرستات، جلسيرين، بروبيلين غليكول، كوبوليمر أكريلات الصوديوم، فينوكسي إيثانول، ليسيثين، هيالورونات الصوديوم، ليسات لاكتوباسيلوس، بانثينول، إيثيل هكسيل جلسيرين، مستخلص الأناناس، مستخلص التفاح (Pyrus Malus)، مستخلص الليمون، مستخلص فاكهة العاطفة، عطر، بنزيل الكحول، حمض البنزويك، حمض الديهيدروأسيتيك.",howToUse:"ضعي كمية مناسبة من الكريم على بشرة نظيفة وجافة صباحاً ومساءً. دلّكي بلطف بحركات دائرية حتى تمتصه البشرة بالكامل. لا حاجة للشطف.",faqs:[{question:"ما فائدة حمض الهيالورونيك؟",answer:"يزيد من قدرة البشرة على الاحتفاظ بالرطوبة ويمنحها امتلاءً ونعومة."},{question:"ما دور مستخلص التفاح؟",answer:"يدعم تجديد خلايا البشرة ويوفر حماية مضادة للأكسدة ضد العوامل البيئية."},{question:"متى يُستخدم الكريم؟",answer:"مناسب للاستخدام اليومي صباحاً ومساءً."},{question:"هل يناسب جميع أنواع البشرة؟",answer:"نعم، مناسب لجميع أنواع البشرة وخاصة الجافة أو التي تعاني من فقدان الترطيب."}]}},cT={tr:oT,en:sT,ar:uT},dT="/assets/cvit-01-sMKPjFqT.png",mT="/assets/arbutin-01-CUQh2MEu.png",fT="/assets/g%C3%B6z-01-MgA7CxiM.png",hT="/assets/night_cream-01-DGAehklA.png",pT="/assets/tonik-01-VPfM-Y2b.png",yT="/assets/peeling-01-Ba2E6ZOD.png",kT="/assets/y%C3%BCz-01-tvgA1xhs.png",gT="/assets/g%C3%BCne%C5%9F-01-cXyemcq-.png",vT="/assets/nemlendirici-01-DsrqVjID.png",bT="/assets/V%C4%B0TC%C3%9CR%C3%9CN2-BaqSzv-k.png",xT="/assets/V%C4%B0TC%C3%9CR%C3%9CN3-v0l6op-A.png",wT="/assets/V%C4%B0TC%C3%9CR%C3%9CN5-BZHPkT9y.png",zT="/assets/V%C4%B0TC%C3%9CR%C3%9CN6-CctoDrRr.png",ST="/assets/ARBUT%C4%B0N%C3%9CR%C3%9CN2-CWIEPlig.png",CT="/assets/ARBUT%C4%B0N%C3%9CR%C3%9CN3-C7vSHZSW.png",ET="/assets/ARBUT%C4%B0N%C3%9CR%C3%9CN5-B-UnTK3r.png",AT="/assets/ARBUT%C4%B0N%C3%9CR%C3%9CN6-DSBnynri.png",NT="/assets/G%C3%96Z%C3%9CR%C3%9CN2-wNOGth-d.png",PT="/assets/G%C3%96Z%C3%9CR%C3%9CN3-DOhidXHT.png",jT="/assets/G%C3%96Z%C3%9CR%C3%9CN5-DlRzJaPR.png",TT="/assets/G%C3%96Z%C3%9CR%C3%9CN6-D32p1g8l.png",MT="/assets/GECE%C3%9CR%C3%9CN2-B9zIGI7w.png",RT="/assets/GECE%C3%9CR%C3%9CN3-BwA9uwYL.png",DT="/assets/GECE%C3%9CR%C3%9CN5-9MLT9SCu.png",FT="/assets/GECE%C3%9CR%C3%9CN6-BNo1p0u0.png",IT="/assets/TON%C4%B0K%C3%9CR%C3%9CN2-DdXtmdws.png",LT="/assets/TON%C4%B0K%C3%9CR%C3%9CN3-DktV1TfF.png",OT="/assets/TON%C4%B0K%C3%9CR%C3%9CN5-hfyWUuTs.png",BT="/assets/TON%C4%B0K%C3%9CR%C3%9CN6-DCN8_5RD.png",_T="/assets/PEELING%C3%9CR%C3%9CN2-BY-c2i31.png",KT="/assets/PEELING%C3%9CR%C3%9CN3-hx66ZHv3.png",HT="/assets/PEELING%C3%9CR%C3%9CN5-CBc-MuFm.png",GT="/assets/PEELING%C3%9CR%C3%9CN6-Bfgc-iTB.png",UT="/assets/Y%C3%9CZ%C3%9CR%C3%9CN2-Cd6AwVjw.png",YT="/assets/Y%C3%9CZ%C3%9CR%C3%9CN3-BhSbeyed.png",VT="/assets/Y%C3%9CZ%C3%9CR%C3%9CN5-Du9-UnnW.png",$T="/assets/Y%C3%9CZ%C3%9CR%C3%9CN6-DhhAsaU8.png",qT="/assets/G%C3%9CNE%C5%9E%C3%9CR%C3%9CN2-CoVkK36X.png",WT="/assets/G%C3%9CNE%C5%9E%C3%9CR%C3%9CN3-CgfxseTt.png",QT="/assets/G%C3%9CNE%C5%9E%C3%9CR%C3%9CN5-BOMASQDp.png",XT="/assets/G%C3%9CNE%C5%9E%C3%9CR%C3%9CN6-DohPqaGE.png",ZT="/assets/NEMLEND%C4%B0R%C4%B0C%C4%B0%C3%9CR%C3%9CN2-6Cz-yd05.png",JT="/assets/NEMLEND%C4%B0R%C4%B0C%C4%B0%C3%9CR%C3%9CN3--c7D7cUI.png",eM="/assets/NEMLEND%C4%B0R%C4%B0C%C4%B0%C3%9CR%C3%9CN5-D818gAf_.png",tM="/assets/NEMLEND%C4%B0R%C4%B0C%C4%B0%C3%9CR%C3%9CN6-BScpYwMJ.png",bn="/assets/ZHER%C3%9CR%C3%9CN4-CksOWV6N.png",nM=()=>{var z;const{id:e}=Cm(),[t,n]=f.useState(!1),[r,i]=f.useState(!0),[a,l]=f.useState(null),s=f.useRef(null);i0();const u=nl.products.find(S=>S.id.toString()===e),m=u?{"Sinceva Brightening Vitamin C Serum 30 ml":dT,"Sinceva Anti-Spot Arbutin Serum 30 ml":mT,"Sinceva Anti-Wrinkle Eye Cream 20 ml":fT,"Sinceva Anti-Aging Night Cream 50 ml":hT,"Sinceva Skin Renewing Tonic 200 ml":pT,"Sinceva Purifying Peeling Cream Scrub 200 ml":yT,"Sinceva Purifying Face Cleansing Foam 200 ml":kT,"Sinceva SPF 50+ Daily SunCare Cream 100 ml":gT,"Sinceva Hyaluronic Acid Moisturizing Cream 50 ml":vT}[u.name]||u.image:"",h=u&&m?((S,C)=>{switch(S){case"Sinceva Brightening Vitamin C Serum 30 ml":return[bT,xT,bn,wT,zT];case"Sinceva Anti-Spot Arbutin Serum 30 ml":return[ST,CT,bn,ET,AT];case"Sinceva Anti-Wrinkle Eye Cream 20 ml":return[NT,PT,bn,jT,TT];case"Sinceva Anti-Aging Night Cream 50 ml":return[MT,RT,bn,DT,FT];case"Sinceva Skin Renewing Tonic 200 ml":return[IT,LT,bn,OT,BT];case"Sinceva Purifying Peeling Cream Scrub 200 ml":return[_T,KT,bn,HT,GT];case"Sinceva Purifying Face Cleansing Foam 200 ml":return[UT,YT,bn,VT,$T];case"Sinceva SPF 50+ Daily SunCare Cream 100 ml":return[qT,WT,bn,QT,XT];case"Sinceva Hyaluronic Acid Moisturizing Cream 50 ml":return[ZT,JT,bn,eM,tM];default:return[C]}})(u.name,m):[],g=[{id:"trendyol",name:"Trendyol",logo:"/lovable-uploads/081fc38c-4560-45a6-983f-80febd33d0e4.png",url:{"Sinceva Brightening Vitamin C Serum 30 ml":"https://www.trendyol.com/pd/sinceva/vitamin-c-serum-5-c-vitamini-aloe-vera-elma-ozlu-ton-esitleyici-aydinlatici-30ml-p-985597681?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Spot Arbutin Serum 30 ml":"https://www.trendyol.com/pd/sinceva/arbutin-serum-2-alfa-arbutin-niasinamid-elma-ozlu-leke-karsiti-ton-esitleyici-30ml-p-985597018?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Wrinkle Eye Cream 20 ml":"https://www.trendyol.com/pd/sinceva/goz-cevresi-kremi-proxylane-kolajen-elma-ozlu-kirisiklik-ve-morluk-karsiti-20ml-p-985597222?merchantId=1083214&filterOverPriceListings=false","Sinceva Anti-Aging Night Cream 50 ml":"https://www.trendyol.com/pd/sinceva/gece-kremi-retinol-niasinamid-elma-ozlu-ince-cizgi-kirisiklik-karsiti-50ml-p-985597313?merchantId=1083214&filterOverPriceListings=false","Sinceva Skin Renewing Tonic 200 ml":"https://www.trendyol.com/pd/sinceva/cilt-yenileyici-tonik-5-glikolik-asit-elma-ozlu-gozenek-sikilastirici-sebum-dengesi-200ml-p-985596983?merchantId=1083214&filterOverPriceListings=false","Sinceva Purifying Peeling Cream Scrub 200 ml":"https://www.trendyol.com/pd/sinceva/peeling-scrub-krem-kayisi-cekirdegi-partikullu-elma-ozlu-olu-deri-gozenek-arindirici-200ml-p-985597046?merchantId=1083214&filterOverPriceListings=false","Sinceva Purifying Face Cleansing Foam 200 ml":"https://www.trendyol.com/pd/sinceva/yuz-temizleme-kopugu-aloe-vera-elma-ozlu-nazik-temizleyici-arindirici-200ml-p-985596926?merchantId=1083214&filterOverPriceListings=false","Sinceva SPF 50+ Daily SunCare Cream 100 ml":"https://www.trendyol.com/pd/sinceva/gunes-kremi-spf-50-aloe-vera-panthenol-elma-ozlu-genis-spektrumlu-uva-uvb-koruma-100ml-p-985596960?merchantId=1083214&filterOverPriceListings=false","Sinceva Hyaluronic Acid Moisturizing Cream 50 ml":"https://www.trendyol.com/pd/sinceva/hyaluronik-asit-gunluk-nemlendirici-krem-panthenol-elma-ozlu-yogun-nem-bariyer-onarici-50ml-p-985596967?merchantId=1083214&filterOverPriceListings=false"}[(u==null?void 0:u.name)||""]||"https://www.trendyol.com"}],{language:b}=Be(),y=at[b],k=u?cT[b][u.id]:null,v=(k==null?void 0:k.faqs)||[{question:"Is this product suitable for sensitive skin?",answer:"Yes, our products are dermatologically tested and suitable for all skin types including sensitive skin."},{question:"How long until I see results?",answer:"Most customers notice improvements within 2-4 weeks of regular use. However, results may vary depending on your skin type and condition."},{question:"Can I use this product with other skincare products?",answer:"Yes, this product is designed to work well with most skincare routines. However, we recommend patch testing when combining with new products."},{question:"What is the shelf life of this product?",answer:"The product has a shelf life of 24 months when unopened, and 12 months after opening. Store in a cool, dry place away from direct sunlight."}],w=[{value:"details",title:y.productDetails,content:(k==null?void 0:k.details)||(u==null?void 0:u.description)+" This premium product is formulated with the finest ingredients to deliver exceptional results. Our advanced formula is designed to meet your specific skincare needs while being gentle on all skin types."},{value:"ingredients",title:y.ingredients,content:(k==null?void 0:k.ingredients)||"Aqua, Glycerin, Sodium Hyaluronate, Vitamin C, Niacinamide, Ceramides, Peptides, Botanical Extracts. All ingredients are carefully selected and tested for purity and effectiveness."},{value:"howto",title:y.howToUse,content:(k==null?void 0:k.howToUse)||"Apply a small amount to clean, dry skin. Gently massage in circular motions until fully absorbed. Use twice daily for best results. Always apply sunscreen during the day when using this product."},{value:"faq",title:y.faq,content:null}];return f.useEffect(()=>{const S=()=>{if(s.current){const E=s.current.getBoundingClientRect().top<=window.innerHeight;i(!E)}};return window.addEventListener("scroll",S),()=>window.removeEventListener("scroll",S)},[]),u?o.jsxs(Ke,{children:[o.jsx("div",{className:"w-full",children:o.jsx(Fn,{ratio:2/3,children:o.jsxs("div",{className:"relative w-full h-full",children:[o.jsx("img",{src:m,alt:u.name,className:"w-full h-full object-cover"}),o.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10",children:o.jsx(Me,{onClick:()=>n(!0),className:"py-2 text-lg font-semibold bg-[#ef2b2d] text-white hover:bg-[#ef2b2d]/90 rounded-full px-6",style:{width:"clamp(150px, 15vw, 200px)"},children:y.buy})})]})})}),o.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-8",children:[o.jsx("div",{className:"mb-8",children:o.jsx("h1",{className:"text-3xl font-bold text-[#191919] mb-4",children:((z=y.productNames)==null?void 0:z[u.id])||u.name})}),o.jsx("div",{className:"mb-8",children:o.jsxs(sl,{className:"w-full",children:[o.jsx(ul,{className:"-ml-2 md:-ml-4",children:h.map((S,C)=>o.jsx(cl,{className:"pl-2 md:pl-4 basis-3/4 md:basis-1/3",children:o.jsx("div",{className:"overflow-hidden rounded-lg cursor-pointer",onClick:()=>l(C),children:o.jsx(Fn,{ratio:2/3,children:o.jsx("img",{src:S,alt:`${u.name} - ${C+1}`,className:"w-full h-full object-cover hover:scale-105 transition-transform duration-200"})})})},C))}),o.jsxs("div",{className:"hidden md:block",children:[o.jsx(_m,{className:"absolute left-4 top-1/2 -translate-y-1/2"}),o.jsx(Km,{className:"absolute right-4 top-1/2 -translate-y-1/2"})]})]})}),o.jsx("div",{className:"mb-8",children:o.jsx(sp,{type:"single",defaultValue:"details",collapsible:!0,className:"w-full",children:w.map(S=>o.jsxs(id,{value:S.value,children:[o.jsx(ad,{className:"text-left font-semibold",children:S.title}),o.jsx(ld,{className:"text-gray-600",children:S.value==="faq"?o.jsx(sp,{type:"multiple",className:"w-full",children:v.map((C,E)=>o.jsxs(id,{value:`faq-${E}`,children:[o.jsx(ad,{className:"text-left font-medium text-sm",children:C.question}),o.jsx(ld,{className:"text-gray-600 text-sm",children:C.answer})]},E))}):S.content})]},S.value))})}),o.jsx(he,{className:"mb-8"})]}),o.jsx(iT,{currentProductId:u.id,products:nl.products,title:y.discoverProducts}),r&&o.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-40",children:o.jsx("div",{className:"container mx-auto max-w-7xl",children:o.jsx("button",{onClick:()=>n(!0),className:"w-full py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[#191919] text-lg font-semibold transition-all hover:bg-white/30",children:y.buy})})}),o.jsx(aT,{productId:u.id}),o.jsx("div",{ref:s,className:"h-1"}),o.jsx(Db,{isOpen:t,onClose:()=>n(!1),productName:u.name,stores:g}),o.jsx(lT,{images:h,currentIndex:a,onClose:()=>l(null),onNavigate:l})]}):o.jsx(Ke,{children:o.jsxs("div",{className:"container mx-auto max-w-7xl px-4 py-16 text-center",children:[o.jsx("h1",{className:"text-2xl font-bold mb-4",children:y.productNotFound}),o.jsx("p",{className:"text-muted-foreground",children:y.productNotFoundDesc})]})})},rM="/assets/search_banner-yVsg1kF-.jpg",iM="/assets/search_banner_mobile-BfPejL8K.jpg",aM=()=>{const[e,t]=CA(),n=e.get("query")||"",[r,i]=f.useState(n),{searchResults:a,isLoading:l,error:s}=Nb(),[u,c]=f.useState([]);f.useEffect(()=>{if(n){const d=a(n,50);c(d)}},[n,a]);const m=d=>{d.preventDefault(),r.trim()&&t({query:r.trim()})};return o.jsxs(Ke,{children:[o.jsx(dn,{title:"Search Results",subtitle:n?`Results for "${n}"`:"Search our products and blog posts",backgroundImage:rM,backgroundImageMobile:iM}),o.jsxs("div",{className:"container mx-auto px-4 py-4",children:[o.jsx("div",{className:"max-w-2xl mx-auto mb-6",children:o.jsxs("form",{onSubmit:m,className:"relative",children:[o.jsx(Nn,{type:"text",placeholder:"Search products and blog posts...",value:r,onChange:d=>i(d.target.value),className:"pr-12 h-12"}),o.jsx("button",{type:"submit",className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",children:o.jsx(qo,{className:"w-5 h-5"})})]})}),o.jsxs("div",{className:"max-w-4xl mx-auto",children:[n&&o.jsx("div",{className:"mb-4",children:o.jsx("h2",{className:"text-lg font-semibold text-foreground",children:l?"Searching...":`${u.length} results found for "${n}"`})}),s&&o.jsx("div",{className:"text-center py-8",children:o.jsx("p",{className:"text-muted-foreground",children:s})}),!l&&!s&&n&&u.length===0&&o.jsx("div",{className:"text-center py-8",children:o.jsxs("p",{className:"text-muted-foreground",children:['No products or blog posts found for "',n,'".']})}),!l&&!s&&u.length>0&&o.jsx("div",{className:"space-y-4",children:u.map(d=>o.jsx(te,{to:d.url,className:"block bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow",children:o.jsxs("div",{className:"flex items-start space-x-4",children:[o.jsx("div",{className:"w-16 h-16 flex-shrink-0 bg-muted rounded-lg overflow-hidden",children:d.image?o.jsx("img",{src:d.image,alt:d.title,className:"w-full h-full object-cover",onError:h=>{const p=h.target;p.style.display="none"}}):o.jsx("div",{className:"w-full h-full bg-muted flex items-center justify-center text-muted-foreground",children:d.type==="product"?"P":"B"})}),o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[o.jsx("h3",{className:"text-lg font-semibold text-foreground hover:text-primary transition-colors",children:d.title}),o.jsx("span",{className:`inline-block px-2 py-1 rounded text-xs ${d.type==="product"?"bg-primary/10 text-primary":"bg-secondary/10 text-secondary-foreground"}`,children:d.type==="product"?"Product":"Blog"})]}),o.jsx("p",{className:"text-muted-foreground mb-2",children:d.description}),o.jsx("p",{className:"text-sm text-primary",children:d.url})]})]})},d.id))})]})]})]})},lM=()=>{const{language:e}=Be(),t=at[e];return o.jsxs(Ke,{children:[o.jsx("div",{className:"w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"}),o.jsx("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:o.jsxs("div",{className:"prose prose-lg max-w-none",children:[o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.whatAreCookies}),o.jsx("p",{className:"mb-4",children:t.cookiesDefinition})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.typesOfCookies}),o.jsx("h3",{className:"text-xl font-semibold mb-3",children:t.necessaryCookies}),o.jsx("p",{className:"mb-4",children:t.necessaryText}),o.jsx("h3",{className:"text-xl font-semibold mb-3",children:t.analyticsCookies}),o.jsx("p",{className:"mb-4",children:t.analyticsText}),o.jsx("h3",{className:"text-xl font-semibold mb-3",children:t.marketingCookies}),o.jsx("p",{className:"mb-4",children:t.marketingText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.howWeUseCookies}),o.jsx("p",{className:"mb-4",children:t.cookieUsageText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.ensureFunction}),o.jsx("li",{children:t.rememberPreferences}),o.jsx("li",{children:t.analyzeTraffic}),o.jsx("li",{children:t.personalizedContent}),o.jsx("li",{children:t.improveSecurity})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.managingCookies}),o.jsx("p",{className:"mb-4",children:t.managingText}),o.jsx("p",{className:"mb-4",children:t.cookieBanner})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.thirdPartyCookies}),o.jsx("p",{className:"mb-4",children:t.thirdPartyText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.contactUsPolicy}),o.jsx("p",{children:t.contactPolicyText}),o.jsxs("ul",{className:"list-disc list-inside mt-2",children:[o.jsx("li",{children:"Email: info@sinceva.com"}),o.jsx("li",{children:"Phone: +90 (545) 378 21 30"})]})]}),o.jsx("div",{className:"text-sm text-gray-600 mt-8",children:o.jsxs("p",{children:[t.lastUpdated," ",new Date().toLocaleDateString(e==="ar"?"ar-SA":e==="tr"?"tr-TR":"en-US")]})})]})})]})},oM=()=>{const{language:e}=Be(),t=at[e];return o.jsxs(Ke,{children:[o.jsx("div",{className:"w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"}),o.jsx("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:o.jsxs("div",{className:"prose prose-lg max-w-none",children:[o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.informationWeCollect}),o.jsx("p",{className:"mb-4",children:t.informationCollectText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.personalIdentifiers}),o.jsx("li",{children:t.billingAddresses}),o.jsx("li",{children:t.paymentInfo}),o.jsx("li",{children:t.purchaseHistory}),o.jsx("li",{children:t.communicationPrefs})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.howWeUse}),o.jsx("p",{className:"mb-4",children:t.howWeUseText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.processOrders}),o.jsx("li",{children:t.provideSupport}),o.jsx("li",{children:t.sendMarketing}),o.jsx("li",{children:t.improveProducts}),o.jsx("li",{children:t.complyLegal}),o.jsx("li",{children:t.detectFraud})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.informationSharing}),o.jsx("p",{className:"mb-4",children:t.informationSharingText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.serviceProviders}),o.jsx("li",{children:t.legalRequirements}),o.jsx("li",{children:t.businessTransfers})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.dataSecurity}),o.jsx("p",{className:"mb-4",children:t.dataSecurityText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.yourRights}),o.jsx("p",{className:"mb-4",children:t.yourRightsText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.accessInfo}),o.jsx("li",{children:t.correctInfo}),o.jsx("li",{children:t.deleteInfo}),o.jsx("li",{children:t.objectProcessing}),o.jsx("li",{children:t.withdrawConsent})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.contactUsPolicy}),o.jsx("p",{className:"mb-4",children:t.contactPolicyText}),o.jsxs("ul",{className:"list-disc list-inside",children:[o.jsx("li",{children:"Email: info@sinceva.com"}),o.jsx("li",{children:"Phone: +90 (545) 378 21 30"})]})]}),o.jsx("div",{className:"text-sm text-gray-600 mt-8",children:o.jsxs("p",{children:[t.lastUpdated," ",new Date().toLocaleDateString(e==="ar"?"ar-SA":e==="tr"?"tr-TR":"en-US")]})})]})})]})},sM=()=>{const{language:e}=Be(),t=at[e];return o.jsxs(Ke,{children:[o.jsx("div",{className:"w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"}),o.jsx("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:o.jsxs("div",{className:"prose prose-lg max-w-none",children:[o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.acceptanceOfTerms}),o.jsx("p",{className:"mb-4",children:t.acceptanceText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.useLicense}),o.jsx("p",{className:"mb-4",children:t.useLicenseText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.modifyMaterials}),o.jsx("li",{children:t.commercialUse}),o.jsx("li",{children:t.reverseEngineer}),o.jsx("li",{children:t.removeCopyright})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.productInformation}),o.jsx("p",{className:"mb-4",children:t.productInfoText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.ordersPayment}),o.jsx("p",{className:"mb-4",children:t.ordersPaymentText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.ordersSubject}),o.jsx("li",{children:t.reserveRight}),o.jsx("li",{children:t.paymentRequired}),o.jsx("li",{children:t.pricesSubject})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.returnsRefunds}),o.jsx("p",{className:"mb-4",children:t.returnsText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.limitationLiability}),o.jsx("p",{className:"mb-4",children:t.limitationText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.governingLaw}),o.jsx("p",{className:"mb-4",children:t.governingText})]}),o.jsx("div",{className:"text-sm text-gray-600 mt-8",children:o.jsxs("p",{children:[t.lastUpdated," ",new Date().toLocaleDateString(e==="ar"?"ar-SA":e==="tr"?"tr-TR":"en-US")]})})]})})]})},uM=()=>{const{language:e}=Be(),t=at[e];return o.jsxs(Ke,{children:[o.jsx("div",{className:"w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"}),o.jsx("div",{className:"container mx-auto max-w-4xl px-4 py-16",children:o.jsxs("div",{className:"prose prose-lg max-w-none",children:[o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.reviewGuidelines}),o.jsx("p",{className:"mb-4",children:t.reviewGuidelinesText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.acceptableContent}),o.jsx("p",{className:"mb-4",children:t.reviewsShouldText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.basedOnExperience}),o.jsx("li",{children:t.honestFeedback}),o.jsx("li",{children:t.focusQuality}),o.jsx("li",{children:t.includeDetails}),o.jsx("li",{children:t.respectfulLanguage}),o.jsx("li",{children:t.relevantProduct})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.prohibitedContent}),o.jsx("p",{className:"mb-4",children:t.reviewsMustNot}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.offensiveLanguage}),o.jsx("li",{children:t.personalInfo}),o.jsx("li",{children:t.spamContent}),o.jsx("li",{children:t.falseInfo}),o.jsx("li",{children:t.violateIP}),o.jsx("li",{children:t.notPurchased}),o.jsx("li",{children:t.defamatoryStatements})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.reviewVerification}),o.jsx("p",{className:"mb-4",children:t.verificationText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.moderationProcess}),o.jsx("p",{className:"mb-4",children:t.moderationText}),o.jsxs("ul",{className:"list-disc list-inside mb-4",children:[o.jsx("li",{children:t.reviewApprove}),o.jsx("li",{children:t.editRemove}),o.jsx("li",{children:t.rejectReviews}),o.jsx("li",{children:t.removeReported})]})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.incentivizedReviews}),o.jsx("p",{className:"mb-4",children:t.incentivizedText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.reportingReviews}),o.jsx("p",{className:"mb-4",children:t.reportingText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.reviewerRights}),o.jsx("p",{className:"mb-4",children:t.reviewerRightsText})]}),o.jsx(he,{className:"my-8"}),o.jsxs("section",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.contactUsPolicy}),o.jsx("p",{children:t.contactPolicyText}),o.jsxs("ul",{className:"list-disc list-inside mt-2",children:[o.jsx("li",{children:"Email: info@sinceva.com"}),o.jsx("li",{children:"Phone: +90 (545) 378 21 30"})]})]}),o.jsx("div",{className:"text-sm text-gray-600 mt-8",children:o.jsxs("p",{children:[t.lastUpdated," ",new Date().toLocaleDateString(e==="ar"?"ar-SA":e==="tr"?"tr-TR":"en-US")]})})]})})]})};console.log("App component loading...");const cM=new xE,dM=()=>(console.log("App component rendering..."),o.jsx(zE,{client:cM,children:o.jsxs(XC,{children:[o.jsx(R1,{}),o.jsx(dS,{}),o.jsxs(xA,{children:[o.jsx(EA,{}),o.jsxs(fA,{children:[o.jsx($e,{path:"/",element:o.jsx(kj,{})}),o.jsx($e,{path:"/blog",element:o.jsx(Cj,{})}),o.jsx($e,{path:"/blog/:id",element:o.jsx(Ej,{})}),o.jsx($e,{path:"/about",element:o.jsx(Pj,{})}),o.jsx($e,{path:"/contact",element:o.jsx(Mj,{})}),o.jsx($e,{path:"/shop",element:o.jsx(Fj,{})}),o.jsx($e,{path:"/search",element:o.jsx(aM,{})}),o.jsx($e,{path:"/category/:category",element:o.jsx(op,{})}),o.jsx($e,{path:"/category/:category/:subcategory",element:o.jsx(op,{})}),o.jsx($e,{path:"/product/:id",element:o.jsx(nM,{})}),o.jsx($e,{path:"/cookie-policy",element:o.jsx(lM,{})}),o.jsx($e,{path:"/privacy",element:o.jsx(oM,{})}),o.jsx($e,{path:"/terms",element:o.jsx(sM,{})}),o.jsx($e,{path:"/consumer-ratings",element:o.jsx(uM,{})}),o.jsx($e,{path:"*",element:o.jsx(gj,{})})]})]})]})}));console.log("Main.tsx loading...");const a0=document.getElementById("root");if(!a0)throw new Error("Root element not found");console.log("Root element found, rendering App...");Rk(a0).render(o.jsx(VA,{children:o.jsx(dM,{})}));
