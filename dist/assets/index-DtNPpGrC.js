var ly=Object.defineProperty;var uy=(o,e,t)=>e in o?ly(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var lt=(o,e,t)=>uy(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var gh={exports:{}},ca={},_h={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function cy(){if(Wm)return pt;Wm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(U,ne,De){this.props=U,this.context=ne,this.refs=E,this.updater=De||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function R(U,ne,De){this.props=U,this.context=ne,this.refs=E,this.updater=De||x}var P=R.prototype=new y;P.constructor=R,M(P,S.prototype),P.isPureReactComponent=!0;var b=Array.isArray,Y=Object.prototype.hasOwnProperty,k={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(U,ne,De){var Q,ce={},Me=null,ve=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)Y.call(ne,Q)&&!F.hasOwnProperty(Q)&&(ce[Q]=ne[Q]);var we=arguments.length-2;if(we===1)ce.children=De;else if(1<we){for(var Ie=Array(we),Qe=0;Qe<we;Qe++)Ie[Qe]=arguments[Qe+2];ce.children=Ie}if(U&&U.defaultProps)for(Q in we=U.defaultProps,we)ce[Q]===void 0&&(ce[Q]=we[Q]);return{$$typeof:o,type:U,key:Me,ref:ve,props:ce,_owner:k.current}}function L(U,ne){return{$$typeof:o,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function N(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(De){return ne[De]})}var ie=/\/+/g;function K(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?N(""+U.key):ne.toString(36)}function ue(U,ne,De,Q,ce){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case o:case e:ve=!0}}if(ve)return ve=U,ce=ce(ve),U=Q===""?"."+K(ve,0):Q,b(ce)?(De="",U!=null&&(De=U.replace(ie,"$&/")+"/"),ue(ce,ne,De,"",function(Qe){return Qe})):ce!=null&&(A(ce)&&(ce=L(ce,De+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(ie,"$&/")+"/")+U)),ne.push(ce)),1;if(ve=0,Q=Q===""?".":Q+":",b(U))for(var we=0;we<U.length;we++){Me=U[we];var Ie=Q+K(Me,we);ve+=ue(Me,ne,De,Ie,ce)}else if(Ie=_(U),typeof Ie=="function")for(U=Ie.call(U),we=0;!(Me=U.next()).done;)Me=Me.value,Ie=Q+K(Me,we++),ve+=ue(Me,ne,De,Ie,ce);else if(Me==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function fe(U,ne,De){if(U==null)return U;var Q=[],ce=0;return ue(U,Q,"","",function(Me){return ne.call(De,Me,ce++)}),Q}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(De){(U._status===0||U._status===-1)&&(U._status=1,U._result=De)},function(De){(U._status===0||U._status===-1)&&(U._status=2,U._result=De)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function se(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:fe,forEach:function(U,ne,De){fe(U,function(){ne.apply(this,arguments)},De)},count:function(U){var ne=0;return fe(U,function(){ne++}),ne},toArray:function(U){return fe(U,function(ne){return ne})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=S,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=R,pt.StrictMode=i,pt.Suspense=d,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,pt.act=se,pt.cloneElement=function(U,ne,De){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=M({},U.props),ce=U.key,Me=U.ref,ve=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=k.current),ne.key!==void 0&&(ce=""+ne.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(Ie in ne)Y.call(ne,Ie)&&!F.hasOwnProperty(Ie)&&(Q[Ie]=ne[Ie]===void 0&&we!==void 0?we[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)Q.children=De;else if(1<Ie){we=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)we[Qe]=arguments[Qe+2];Q.children=we}return{$$typeof:o,type:U.type,key:ce,ref:Me,props:Q,_owner:ve}},pt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},pt.createElement=W,pt.createFactory=function(U){var ne=W.bind(null,U);return ne.type=U,ne},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:c,render:U}},pt.isValidElement=A,pt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:oe}},pt.memo=function(U,ne){return{$$typeof:f,type:U,compare:ne===void 0?null:ne}},pt.startTransition=function(U){var ne=B.transition;B.transition={};try{U()}finally{B.transition=ne}},pt.unstable_act=se,pt.useCallback=function(U,ne){return le.current.useCallback(U,ne)},pt.useContext=function(U){return le.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},pt.useEffect=function(U,ne){return le.current.useEffect(U,ne)},pt.useId=function(){return le.current.useId()},pt.useImperativeHandle=function(U,ne,De){return le.current.useImperativeHandle(U,ne,De)},pt.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},pt.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},pt.useMemo=function(U,ne){return le.current.useMemo(U,ne)},pt.useReducer=function(U,ne,De){return le.current.useReducer(U,ne,De)},pt.useRef=function(U){return le.current.useRef(U)},pt.useState=function(U){return le.current.useState(U)},pt.useSyncExternalStore=function(U,ne,De){return le.current.useSyncExternalStore(U,ne,De)},pt.useTransition=function(){return le.current.useTransition()},pt.version="18.3.1",pt}var Xm;function Jd(){return Xm||(Xm=1,_h.exports=cy()),_h.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function hy(){if(jm)return ca;jm=1;var o=Jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,f){var m,g={},_=null,x=null;f!==void 0&&(_=""+f),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)i.call(d,m)&&!a.hasOwnProperty(m)&&(g[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:c,key:_,ref:x,props:g,_owner:s.current}}return ca.Fragment=t,ca.jsx=u,ca.jsxs=u,ca}var Ym;function dy(){return Ym||(Ym=1,gh.exports=hy()),gh.exports}var $t=dy(),sr=Jd(),Vl={},vh={exports:{}},Gn={},yh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function fy(){return $m||($m=1,(function(o){function e(B,ae){var se=B.length;B.push(ae);e:for(;0<se;){var U=se-1>>>1,ne=B[U];if(0<s(ne,ae))B[U]=ae,B[se]=ne,se=U;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ae=B[0],se=B.pop();if(se!==ae){B[0]=se;e:for(var U=0,ne=B.length,De=ne>>>1;U<De;){var Q=2*(U+1)-1,ce=B[Q],Me=Q+1,ve=B[Me];if(0>s(ce,se))Me<ne&&0>s(ve,ce)?(B[U]=ve,B[Me]=se,U=Me):(B[U]=ce,B[Q]=se,U=Q);else if(Me<ne&&0>s(ve,se))B[U]=ve,B[Me]=se,U=Me;else break e}}return ae}function s(B,ae){var se=B.sortIndex-ae.sortIndex;return se!==0?se:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],f=[],m=1,g=null,_=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var ae=t(f);ae!==null;){if(ae.callback===null)i(f);else if(ae.startTime<=B)i(f),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(f)}}function b(B){if(E=!1,P(B),!M)if(t(d)!==null)M=!0,oe(Y);else{var ae=t(f);ae!==null&&le(b,ae.startTime-B)}}function Y(B,ae){M=!1,E&&(E=!1,y(W),W=-1),x=!0;var se=_;try{for(P(ae),g=t(d);g!==null&&(!(g.expirationTime>ae)||B&&!N());){var U=g.callback;if(typeof U=="function"){g.callback=null,_=g.priorityLevel;var ne=U(g.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&i(d),P(ae)}else i(d);g=t(d)}if(g!==null)var De=!0;else{var Q=t(f);Q!==null&&le(b,Q.startTime-ae),De=!1}return De}finally{g=null,_=se,x=!1}}var k=!1,F=null,W=-1,L=5,A=-1;function N(){return!(o.unstable_now()-A<L)}function ie(){if(F!==null){var B=o.unstable_now();A=B;var ae=!0;try{ae=F(!0,B)}finally{ae?K():(k=!1,F=null)}}else k=!1}var K;if(typeof R=="function")K=function(){R(ie)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=ie,K=function(){fe.postMessage(null)}}else K=function(){S(ie,0)};function oe(B){F=B,k||(k=!0,K())}function le(B,ae){W=S(function(){B(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,oe(Y))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var se=_;_=ae;try{return B()}finally{_=se}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=_;_=B;try{return ae()}finally{_=se}},o.unstable_scheduleCallback=function(B,ae,se){var U=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,B={id:m++,callback:ae,priorityLevel:B,startTime:se,expirationTime:ne,sortIndex:-1},se>U?(B.sortIndex=se,e(f,B),t(d)===null&&B===t(f)&&(E?(y(W),W=-1):E=!0,le(b,se-U))):(B.sortIndex=ne,e(d,B),M||x||(M=!0,oe(Y))),B},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(B){var ae=_;return function(){var se=_;_=ae;try{return B.apply(this,arguments)}finally{_=se}}}})(xh)),xh}var qm;function py(){return qm||(qm=1,yh.exports=fy()),yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function my(){if(Km)return Gn;Km=1;var o=Jd(),e=py();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:f.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||x(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,h,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,R);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,R);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,R);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,h){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,h)&&(l=null),h||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,h=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),k=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),N=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var De=!1;function Q(n,r){if(!n||De)return"";De=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(J){var h=J}Reflect.construct(n,[],r)}else{try{r.call()}catch(J){h=J}n.call(r.prototype)}else{try{throw Error()}catch(J){h=J}n()}}catch(J){if(J&&h&&typeof J.stack=="string"){for(var p=J.stack.split(`
`),v=h.stack.split(`
`),T=p.length-1,I=v.length-1;1<=T&&0<=I&&p[T]!==v[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==v[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==v[I]){var O=`
`+p[T].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=T&&0<=I);break}}}finally{De=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function ce(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case k:return"Portal";case L:return"Profiler";case W:return"StrictMode";case K:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ie:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(n){var r=Ie(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function It(n){n._valueTracker||(n._valueTracker=Qe(n))}function vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=Ie(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function j(n,r){var l=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function An(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=we(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function dt(n,r){mt(n,r);var l=we(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ct(n,r.type,l):r.hasOwnProperty("defaultValue")&&Ct(n,r.type,we(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function qe(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Ct(n,r,l){(r!=="number"||Ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var je=Array.isArray;function D(n,r,l,h){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&h&&(n[l].defaultSelected=!0)}else{for(l=""+we(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,h&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(je(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:we(l)}}function pe(n,r){var l=we(r.value),h=we(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ht(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(n){Fe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),xe[r]=xe[n]})});function Je(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||xe.hasOwnProperty(n)&&xe[n]?(""+r).trim():r+"px"}function et(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Je(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,p):n[l]=p}}var Oe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,r){if(r){if(Oe[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function rt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,re=null,de=null;function Pe(n){if(n=qo(n)){if(typeof be!="function")throw Error(t(280));var r=n.stateNode;r&&(r=il(r),be(n.stateNode,n.type,r))}}function Re(n){re?de?de.push(n):de=[n]:re=n}function st(){if(re){var n=re,r=de;if(de=re=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function kt(n,r){return n(r)}function Zt(){}var St=!1;function Fn(n,r,l){if(St)return n(r,l);St=!0;try{return kt(n,r,l)}finally{St=!1,(re!==null||de!==null)&&(Zt(),st())}}function bn(n,r){var l=n.stateNode;if(l===null)return null;var h=il(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ts=!1;if(c)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Ts=!1}function Vi(n,r,l,h,p,v,T,I,O){var J=Array.prototype.slice.call(arguments,3);try{r.apply(l,J)}catch(_e){this.onError(_e)}}var Gi=!1,Zr=null,Qr=!1,_r=null,Oa={onError:function(n){Gi=!0,Zr=n}};function ws(n,r,l,h,p,v,T,I,O){Gi=!1,Zr=null,Vi.apply(Oa,arguments)}function ka(n,r,l,h,p,v,T,I,O){if(ws.apply(this,arguments),Gi){if(Gi){var J=Zr;Gi=!1,Zr=null}else throw Error(t(198));Qr||(Qr=!0,_r=J)}}function Ri(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ba(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function za(n){if(Ri(n)!==n)throw Error(t(188))}function ku(n){var r=n.alternate;if(!r){if(r=Ri(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return za(p),n;if(v===h)return za(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=v;else{for(var T=!1,I=p.child;I;){if(I===l){T=!0,l=p,h=v;break}if(I===h){T=!0,h=p,l=v;break}I=I.sibling}if(!T){for(I=v.child;I;){if(I===l){T=!0,l=v,h=p;break}if(I===h){T=!0,h=v,l=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function C(n){return n=ku(n),n!==null?G(n):null}function G(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=G(n);if(r!==null)return r;n=n.sibling}return null}var ee=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,X=e.unstable_shouldYield,Te=e.unstable_requestPaint,Se=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,xt=e.unstable_IdlePriority,wt=null,yt=null;function mn(n){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Et,Xe=Math.log,hi=Math.LN2;function Et(n){return n>>>=0,n===0?32:31-(Xe(n)/hi|0)|0}var gn=64,di=4194304;function Qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pi(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var I=T&~p;I!==0?h=Qt(I):(v&=T,v!==0&&(h=Qt(v)))}else T=l&~p,T!==0?h=Qt(T):v!==0&&(h=Qt(v));if(h===0)return 0;if(r!==0&&r!==h&&(r&p)===0&&(p=h&-h,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((h&4)!==0&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-ot(r),p=1<<l,h|=n[l],r&=~p;return h}function Ut(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jn(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-ot(v),I=1<<T,O=p[T];O===-1?((I&l)===0||(I&h)!==0)&&(p[T]=Ut(I,r)):O<=r&&(n.expiredLanes|=I),v&=~I}}function Wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Cn(){var n=gn;return gn<<=1,(gn&4194240)===0&&(gn=64),n}function ei(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function On(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ot(r),n[r]=l}function Ha(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-ot(l),v=1<<p;r[p]=0,h[p]=-1,n[p]=-1,l&=~v}}function Bu(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-ot(l),p=1<<h;p&r|n[h]&r&&(n[h]|=r),l&=~p}}var Rt=0;function Mf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ef,zu,Tf,wf,Af,Hu=!1,Va=[],vr=null,yr=null,xr=null,Io=new Map,No=new Map,Sr=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(n,r){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Io.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(r.pointerId)}}function Uo(n,r,l,h,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},r!==null&&(r=qo(r),r!==null&&zu(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Lv(n,r,l,h,p){switch(r){case"focusin":return vr=Uo(vr,n,r,l,h,p),!0;case"dragenter":return yr=Uo(yr,n,r,l,h,p),!0;case"mouseover":return xr=Uo(xr,n,r,l,h,p),!0;case"pointerover":var v=p.pointerId;return Io.set(v,Uo(Io.get(v)||null,n,r,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,No.set(v,Uo(No.get(v)||null,n,r,l,h,p)),!0}return!1}function Cf(n){var r=Jr(n.target);if(r!==null){var l=Ri(r);if(l!==null){if(r=l.tag,r===13){if(r=Ba(l),r!==null){n.blockedOn=r,Af(n.priority,function(){Tf(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ga(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Gu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);bt=h,l.target.dispatchEvent(h),bt=null}else return r=qo(l),r!==null&&zu(r),n.blockedOn=l,!1;r.shift()}return!0}function Rf(n,r,l){Ga(n)&&l.delete(r)}function Dv(){Hu=!1,vr!==null&&Ga(vr)&&(vr=null),yr!==null&&Ga(yr)&&(yr=null),xr!==null&&Ga(xr)&&(xr=null),Io.forEach(Rf),No.forEach(Rf)}function Fo(n,r){n.blockedOn===r&&(n.blockedOn=null,Hu||(Hu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dv)))}function Oo(n){function r(p){return Fo(p,n)}if(0<Va.length){Fo(Va[0],n);for(var l=1;l<Va.length;l++){var h=Va[l];h.blockedOn===n&&(h.blockedOn=null)}}for(vr!==null&&Fo(vr,n),yr!==null&&Fo(yr,n),xr!==null&&Fo(xr,n),Io.forEach(r),No.forEach(r),l=0;l<Sr.length;l++)h=Sr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<Sr.length&&(l=Sr[0],l.blockedOn===null);)Cf(l),l.blockedOn===null&&Sr.shift()}var As=b.ReactCurrentBatchConfig,Wa=!0;function Iv(n,r,l,h){var p=Rt,v=As.transition;As.transition=null;try{Rt=1,Vu(n,r,l,h)}finally{Rt=p,As.transition=v}}function Nv(n,r,l,h){var p=Rt,v=As.transition;As.transition=null;try{Rt=4,Vu(n,r,l,h)}finally{Rt=p,As.transition=v}}function Vu(n,r,l,h){if(Wa){var p=Gu(n,r,l,h);if(p===null)oc(n,r,h,Xa,l),bf(n,h);else if(Lv(p,n,r,l,h))h.stopPropagation();else if(bf(n,h),r&4&&-1<Pv.indexOf(n)){for(;p!==null;){var v=qo(p);if(v!==null&&Ef(v),v=Gu(n,r,l,h),v===null&&oc(n,r,h,Xa,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else oc(n,r,h,null,l)}}var Xa=null;function Gu(n,r,l,h){if(Xa=null,n=V(h),n=Jr(n),n!==null)if(r=Ri(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ba(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Xa=n,null}function Pf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case Be:return 1;case tt:return 4;case it:case Ge:return 16;case xt:return 536870912;default:return 16}default:return 16}}var Mr=null,Wu=null,ja=null;function Lf(){if(ja)return ja;var n,r=Wu,l=r.length,h,p="value"in Mr?Mr.value:Mr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(h=1;h<=T&&r[l-h]===p[v-h];h++);return ja=p.slice(n,1<h?1-h:void 0)}function Ya(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $a(){return!0}function Df(){return!1}function jn(n){function r(l,h,p,v,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?$a:Df,this.isPropagationStopped=Df,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),r}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=jn(bs),ko=se({},bs,{view:0,detail:0}),Uv=jn(ko),ju,Yu,Bo,qa=se({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Bo&&(Bo&&n.type==="mousemove"?(ju=n.screenX-Bo.screenX,Yu=n.screenY-Bo.screenY):Yu=ju=0,Bo=n),ju)},movementY:function(n){return"movementY"in n?n.movementY:Yu}}),If=jn(qa),Fv=se({},qa,{dataTransfer:0}),Ov=jn(Fv),kv=se({},ko,{relatedTarget:0}),$u=jn(kv),Bv=se({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=jn(Bv),Hv=se({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vv=jn(Hv),Gv=se({},bs,{data:0}),Nf=jn(Gv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=jv[n])?!!r[n]:!1}function qu(){return Yv}var $v=se({},ko,{key:function(n){if(n.key){var r=Wv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ya(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(n){return n.type==="keypress"?Ya(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ya(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),qv=jn($v),Kv=se({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=jn(Kv),Zv=se({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),Qv=jn(Zv),Jv=se({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=jn(Jv),t0=se({},qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=jn(t0),i0=[9,13,27,32],Ku=c&&"CompositionEvent"in window,zo=null;c&&"documentMode"in document&&(zo=document.documentMode);var r0=c&&"TextEvent"in window&&!zo,Ff=c&&(!Ku||zo&&8<zo&&11>=zo),Of=" ",kf=!1;function Bf(n,r){switch(n){case"keyup":return i0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function s0(n,r){switch(n){case"compositionend":return zf(r);case"keypress":return r.which!==32?null:(kf=!0,Of);case"textInput":return n=r.data,n===Of&&kf?null:n;default:return null}}function o0(n,r){if(Cs)return n==="compositionend"||!Ku&&Bf(n,r)?(n=Lf(),ja=Wu=Mr=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ff&&r.locale!=="ko"?null:r.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!a0[n.type]:r==="textarea"}function Vf(n,r,l,h){Re(h),r=el(r,"onChange"),0<r.length&&(l=new Xu("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var Ho=null,Vo=null;function l0(n){op(n,0)}function Ka(n){var r=Is(n);if(vt(r))return n}function u0(n,r){if(n==="change")return r}var Gf=!1;if(c){var Zu;if(c){var Qu="oninput"in document;if(!Qu){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),Qu=typeof Wf.oninput=="function"}Zu=Qu}else Zu=!1;Gf=Zu&&(!document.documentMode||9<document.documentMode)}function Xf(){Ho&&(Ho.detachEvent("onpropertychange",jf),Vo=Ho=null)}function jf(n){if(n.propertyName==="value"&&Ka(Vo)){var r=[];Vf(r,Vo,n,V(n)),Fn(l0,r)}}function c0(n,r,l){n==="focusin"?(Xf(),Ho=r,Vo=l,Ho.attachEvent("onpropertychange",jf)):n==="focusout"&&Xf()}function h0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ka(Vo)}function d0(n,r){if(n==="click")return Ka(r)}function f0(n,r){if(n==="input"||n==="change")return Ka(r)}function p0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var fi=typeof Object.is=="function"?Object.is:p0;function Go(n,r){if(fi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!d.call(r,p)||!fi(n[p],r[p]))return!1}return!0}function Yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $f(n,r){var l=Yf(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Yf(l)}}function qf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?qf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Kf(){for(var n=window,r=Ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ft(n.document)}return r}function Ju(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function m0(n){var r=Kf(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&qf(l.ownerDocument.documentElement,l)){if(h!==null&&Ju(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!n.extend&&v>h&&(p=h,h=v,v=p),p=$f(l,v);var T=$f(l,h);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g0=c&&"documentMode"in document&&11>=document.documentMode,Rs=null,ec=null,Wo=null,tc=!1;function Zf(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;tc||Rs==null||Rs!==Ft(h)||(h=Rs,"selectionStart"in h&&Ju(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Wo&&Go(Wo,h)||(Wo=h,h=el(ec,"onSelect"),0<h.length&&(r=new Xu("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=Rs)))}function Za(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ps={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},nc={},Qf={};c&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Qa(n){if(nc[n])return nc[n];if(!Ps[n])return n;var r=Ps[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Qf)return nc[n]=r[l];return n}var Jf=Qa("animationend"),ep=Qa("animationiteration"),tp=Qa("animationstart"),np=Qa("transitionend"),ip=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,r){ip.set(n,r),a(r,[n])}for(var ic=0;ic<rp.length;ic++){var rc=rp[ic],_0=rc.toLowerCase(),v0=rc[0].toUpperCase()+rc.slice(1);Er(_0,"on"+v0)}Er(Jf,"onAnimationEnd"),Er(ep,"onAnimationIteration"),Er(tp,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(np,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function sp(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,ka(h,r,void 0,n),n.currentTarget=null}function op(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],p=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var T=h.length-1;0<=T;T--){var I=h[T],O=I.instance,J=I.currentTarget;if(I=I.listener,O!==v&&p.isPropagationStopped())break e;sp(p,I,J),v=O}else for(T=0;T<h.length;T++){if(I=h[T],O=I.instance,J=I.currentTarget,I=I.listener,O!==v&&p.isPropagationStopped())break e;sp(p,I,J),v=O}}}if(Qr)throw n=_r,Qr=!1,_r=null,n}function Bt(n,r){var l=r[dc];l===void 0&&(l=r[dc]=new Set);var h=n+"__bubble";l.has(h)||(ap(r,n,2,!1),l.add(h))}function sc(n,r,l){var h=0;r&&(h|=4),ap(l,n,h,r)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function jo(n){if(!n[Ja]){n[Ja]=!0,i.forEach(function(l){l!=="selectionchange"&&(y0.has(l)||sc(l,!1,n),sc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ja]||(r[Ja]=!0,sc("selectionchange",!1,r))}}function ap(n,r,l,h){switch(Pf(r)){case 1:var p=Iv;break;case 4:p=Nv;break;default:p=Vu}l=p.bind(null,r,l,n),p=void 0,!Ts||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function oc(n,r,l,h,p){var v=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var I=h.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var O=T.tag;if((O===3||O===4)&&(O=T.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;T=T.return}for(;I!==null;){if(T=Jr(I),T===null)return;if(O=T.tag,O===5||O===6){h=v=T;continue e}I=I.parentNode}}h=h.return}Fn(function(){var J=v,_e=V(l),ye=[];e:{var me=ip.get(n);if(me!==void 0){var Le=Xu,ke=n;switch(n){case"keypress":if(Ya(l)===0)break e;case"keydown":case"keyup":Le=qv;break;case"focusin":ke="focus",Le=$u;break;case"focusout":ke="blur",Le=$u;break;case"beforeblur":case"afterblur":Le=$u;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Qv;break;case Jf:case ep:case tp:Le=zv;break;case np:Le=e0;break;case"scroll":Le=Uv;break;case"wheel":Le=n0;break;case"copy":case"cut":case"paste":Le=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Uf}var ze=(r&4)!==0,Yt=!ze&&n==="scroll",$=ze?me!==null?me+"Capture":null:me;ze=[];for(var H=J,q;H!==null;){q=H;var Ee=q.stateNode;if(q.tag===5&&Ee!==null&&(q=Ee,$!==null&&(Ee=bn(H,$),Ee!=null&&ze.push(Yo(H,Ee,q)))),Yt)break;H=H.return}0<ze.length&&(me=new Le(me,ke,null,l,_e),ye.push({event:me,listeners:ze}))}}if((r&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",me&&l!==bt&&(ke=l.relatedTarget||l.fromElement)&&(Jr(ke)||ke[Xi]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ke=l.relatedTarget||l.toElement,Le=J,ke=ke?Jr(ke):null,ke!==null&&(Yt=Ri(ke),ke!==Yt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Le=null,ke=J),Le!==ke)){if(ze=If,Ee="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(ze=Uf,Ee="onPointerLeave",$="onPointerEnter",H="pointer"),Yt=Le==null?me:Is(Le),q=ke==null?me:Is(ke),me=new ze(Ee,H+"leave",Le,l,_e),me.target=Yt,me.relatedTarget=q,Ee=null,Jr(_e)===J&&(ze=new ze($,H+"enter",ke,l,_e),ze.target=q,ze.relatedTarget=Yt,Ee=ze),Yt=Ee,Le&&ke)t:{for(ze=Le,$=ke,H=0,q=ze;q;q=Ls(q))H++;for(q=0,Ee=$;Ee;Ee=Ls(Ee))q++;for(;0<H-q;)ze=Ls(ze),H--;for(;0<q-H;)$=Ls($),q--;for(;H--;){if(ze===$||$!==null&&ze===$.alternate)break t;ze=Ls(ze),$=Ls($)}ze=null}else ze=null;Le!==null&&lp(ye,me,Le,ze,!1),ke!==null&&Yt!==null&&lp(ye,Yt,ke,ze,!0)}}e:{if(me=J?Is(J):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var We=u0;else if(Hf(me))if(Gf)We=f0;else{We=h0;var Ke=c0}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=d0);if(We&&(We=We(n,J))){Vf(ye,We,l,_e);break e}Ke&&Ke(n,me,J),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Ct(me,"number",me.value)}switch(Ke=J?Is(J):window,n){case"focusin":(Hf(Ke)||Ke.contentEditable==="true")&&(Rs=Ke,ec=J,Wo=null);break;case"focusout":Wo=ec=Rs=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Zf(ye,l,_e);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Zf(ye,l,_e)}var Ze;if(Ku)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Cs?Bf(n,l)&&(nt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(nt="onCompositionStart");nt&&(Ff&&l.locale!=="ko"&&(Cs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Cs&&(Ze=Lf()):(Mr=_e,Wu="value"in Mr?Mr.value:Mr.textContent,Cs=!0)),Ke=el(J,nt),0<Ke.length&&(nt=new Nf(nt,n,null,l,_e),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=zf(l),Ze!==null&&(nt.data=Ze)))),(Ze=r0?s0(n,l):o0(n,l))&&(J=el(J,"onBeforeInput"),0<J.length&&(_e=new Nf("onBeforeInput","beforeinput",null,l,_e),ye.push({event:_e,listeners:J}),_e.data=Ze))}op(ye,r)})}function Yo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function el(n,r){for(var l=r+"Capture",h=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=bn(n,l),v!=null&&h.unshift(Yo(n,v,p)),v=bn(n,r),v!=null&&h.push(Yo(n,v,p))),n=n.return}return h}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lp(n,r,l,h,p){for(var v=r._reactName,T=[];l!==null&&l!==h;){var I=l,O=I.alternate,J=I.stateNode;if(O!==null&&O===h)break;I.tag===5&&J!==null&&(I=J,p?(O=bn(l,v),O!=null&&T.unshift(Yo(l,O,I))):p||(O=bn(l,v),O!=null&&T.push(Yo(l,O,I)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var x0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function up(n){return(typeof n=="string"?n:""+n).replace(x0,`
`).replace(S0,"")}function tl(n,r,l){if(r=up(r),up(n)!==r&&l)throw Error(t(425))}function nl(){}var ac=null,lc=null;function uc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(n){return cp.resolve(null).then(n).catch(T0)}:cc;function T0(n){setTimeout(function(){throw n})}function hc(n,r){var l=r,h=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){n.removeChild(p),Oo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Oo(r)}function Tr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function hp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Li="__reactFiber$"+Ds,$o="__reactProps$"+Ds,Xi="__reactContainer$"+Ds,dc="__reactEvents$"+Ds,w0="__reactListeners$"+Ds,A0="__reactHandles$"+Ds;function Jr(n){var r=n[Li];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Xi]||l[Li]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=hp(n);n!==null;){if(l=n[Li])return l;n=hp(n)}return r}n=l,l=n.parentNode}return null}function qo(n){return n=n[Li]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function il(n){return n[$o]||null}var fc=[],Ns=-1;function wr(n){return{current:n}}function zt(n){0>Ns||(n.current=fc[Ns],fc[Ns]=null,Ns--)}function Ot(n,r){Ns++,fc[Ns]=n.current,n.current=r}var Ar={},_n=wr(Ar),kn=wr(!1),es=Ar;function Us(n,r){var l=n.type.contextTypes;if(!l)return Ar;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Bn(n){return n=n.childContextTypes,n!=null}function rl(){zt(kn),zt(_n)}function dp(n,r,l){if(_n.current!==Ar)throw Error(t(168));Ot(_n,r),Ot(kn,l)}function fp(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return se({},l,h)}function sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ar,es=_n.current,Ot(_n,n),Ot(kn,kn.current),!0}function pp(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=fp(n,r,es),h.__reactInternalMemoizedMergedChildContext=n,zt(kn),zt(_n),Ot(_n,n)):zt(kn),Ot(kn,l)}var ji=null,ol=!1,pc=!1;function mp(n){ji===null?ji=[n]:ji.push(n)}function b0(n){ol=!0,mp(n)}function br(){if(!pc&&ji!==null){pc=!0;var n=0,r=Rt;try{var l=ji;for(Rt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}ji=null,ol=!1}catch(p){throw ji!==null&&(ji=ji.slice(n+1)),ee(Be,br),p}finally{Rt=r,pc=!1}}return null}var Fs=[],Os=0,al=null,ll=0,ti=[],ni=0,ts=null,Yi=1,$i="";function ns(n,r){Fs[Os++]=ll,Fs[Os++]=al,al=n,ll=r}function gp(n,r,l){ti[ni++]=Yi,ti[ni++]=$i,ti[ni++]=ts,ts=n;var h=Yi;n=$i;var p=32-ot(h)-1;h&=~(1<<p),l+=1;var v=32-ot(r)+p;if(30<v){var T=p-p%5;v=(h&(1<<T)-1).toString(32),h>>=T,p-=T,Yi=1<<32-ot(r)+p|l<<p|h,$i=v+n}else Yi=1<<v|l<<p|h,$i=n}function mc(n){n.return!==null&&(ns(n,1),gp(n,1,0))}function gc(n){for(;n===al;)al=Fs[--Os],Fs[Os]=null,ll=Fs[--Os],Fs[Os]=null;for(;n===ts;)ts=ti[--ni],ti[ni]=null,$i=ti[--ni],ti[ni]=null,Yi=ti[--ni],ti[ni]=null}var Yn=null,$n=null,Ht=!1,pi=null;function _p(n,r){var l=oi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function vp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Yn=n,$n=Tr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Yn=n,$n=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ts!==null?{id:Yi,overflow:$i}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=oi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Yn=n,$n=null,!0):!1;default:return!1}}function _c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vc(n){if(Ht){var r=$n;if(r){var l=r;if(!vp(n,r)){if(_c(n))throw Error(t(418));r=Tr(l.nextSibling);var h=Yn;r&&vp(n,r)?_p(h,l):(n.flags=n.flags&-4097|2,Ht=!1,Yn=n)}}else{if(_c(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Yn=n}}}function yp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function ul(n){if(n!==Yn)return!1;if(!Ht)return yp(n),Ht=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!uc(n.type,n.memoizedProps)),r&&(r=$n)){if(_c(n))throw xp(),Error(t(418));for(;r;)_p(n,r),r=Tr(r.nextSibling)}if(yp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){$n=Tr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}$n=null}}else $n=Yn?Tr(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=$n;n;)n=Tr(n.nextSibling)}function ks(){$n=Yn=null,Ht=!1}function yc(n){pi===null?pi=[n]:pi.push(n)}var C0=b.ReactCurrentBatchConfig;function Ko(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var p=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var I=p.refs;T===null?delete I[v]:I[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function cl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Sp(n){var r=n._init;return r(n._payload)}function Mp(n){function r($,H){if(n){var q=$.deletions;q===null?($.deletions=[H],$.flags|=16):q.push(H)}}function l($,H){if(!n)return null;for(;H!==null;)r($,H),H=H.sibling;return null}function h($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function p($,H){return $=Ur($,H),$.index=0,$.sibling=null,$}function v($,H,q){return $.index=q,n?(q=$.alternate,q!==null?(q=q.index,q<H?($.flags|=2,H):q):($.flags|=2,H)):($.flags|=1048576,H)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function I($,H,q,Ee){return H===null||H.tag!==6?(H=ch(q,$.mode,Ee),H.return=$,H):(H=p(H,q),H.return=$,H)}function O($,H,q,Ee){var We=q.type;return We===F?_e($,H,q.props.children,Ee,q.key):H!==null&&(H.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===oe&&Sp(We)===H.type)?(Ee=p(H,q.props),Ee.ref=Ko($,H,q),Ee.return=$,Ee):(Ee=Nl(q.type,q.key,q.props,null,$.mode,Ee),Ee.ref=Ko($,H,q),Ee.return=$,Ee)}function J($,H,q,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==q.containerInfo||H.stateNode.implementation!==q.implementation?(H=hh(q,$.mode,Ee),H.return=$,H):(H=p(H,q.children||[]),H.return=$,H)}function _e($,H,q,Ee,We){return H===null||H.tag!==7?(H=cs(q,$.mode,Ee,We),H.return=$,H):(H=p(H,q),H.return=$,H)}function ye($,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=ch(""+H,$.mode,q),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Y:return q=Nl(H.type,H.key,H.props,null,$.mode,q),q.ref=Ko($,null,H),q.return=$,q;case k:return H=hh(H,$.mode,q),H.return=$,H;case oe:var Ee=H._init;return ye($,Ee(H._payload),q)}if(je(H)||ae(H))return H=cs(H,$.mode,q,null),H.return=$,H;cl($,H)}return null}function me($,H,q,Ee){var We=H!==null?H.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return We!==null?null:I($,H,""+q,Ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case Y:return q.key===We?O($,H,q,Ee):null;case k:return q.key===We?J($,H,q,Ee):null;case oe:return We=q._init,me($,H,We(q._payload),Ee)}if(je(q)||ae(q))return We!==null?null:_e($,H,q,Ee,null);cl($,q)}return null}function Le($,H,q,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(q)||null,I(H,$,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case Y:return $=$.get(Ee.key===null?q:Ee.key)||null,O(H,$,Ee,We);case k:return $=$.get(Ee.key===null?q:Ee.key)||null,J(H,$,Ee,We);case oe:var Ke=Ee._init;return Le($,H,q,Ke(Ee._payload),We)}if(je(Ee)||ae(Ee))return $=$.get(q)||null,_e(H,$,Ee,We,null);cl(H,Ee)}return null}function ke($,H,q,Ee){for(var We=null,Ke=null,Ze=H,nt=H=0,ln=null;Ze!==null&&nt<q.length;nt++){Ze.index>nt?(ln=Ze,Ze=null):ln=Ze.sibling;var Tt=me($,Ze,q[nt],Ee);if(Tt===null){Ze===null&&(Ze=ln);break}n&&Ze&&Tt.alternate===null&&r($,Ze),H=v(Tt,H,nt),Ke===null?We=Tt:Ke.sibling=Tt,Ke=Tt,Ze=ln}if(nt===q.length)return l($,Ze),Ht&&ns($,nt),We;if(Ze===null){for(;nt<q.length;nt++)Ze=ye($,q[nt],Ee),Ze!==null&&(H=v(Ze,H,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Ht&&ns($,nt),We}for(Ze=h($,Ze);nt<q.length;nt++)ln=Le(Ze,$,nt,q[nt],Ee),ln!==null&&(n&&ln.alternate!==null&&Ze.delete(ln.key===null?nt:ln.key),H=v(ln,H,nt),Ke===null?We=ln:Ke.sibling=ln,Ke=ln);return n&&Ze.forEach(function(Fr){return r($,Fr)}),Ht&&ns($,nt),We}function ze($,H,q,Ee){var We=ae(q);if(typeof We!="function")throw Error(t(150));if(q=We.call(q),q==null)throw Error(t(151));for(var Ke=We=null,Ze=H,nt=H=0,ln=null,Tt=q.next();Ze!==null&&!Tt.done;nt++,Tt=q.next()){Ze.index>nt?(ln=Ze,Ze=null):ln=Ze.sibling;var Fr=me($,Ze,Tt.value,Ee);if(Fr===null){Ze===null&&(Ze=ln);break}n&&Ze&&Fr.alternate===null&&r($,Ze),H=v(Fr,H,nt),Ke===null?We=Fr:Ke.sibling=Fr,Ke=Fr,Ze=ln}if(Tt.done)return l($,Ze),Ht&&ns($,nt),We;if(Ze===null){for(;!Tt.done;nt++,Tt=q.next())Tt=ye($,Tt.value,Ee),Tt!==null&&(H=v(Tt,H,nt),Ke===null?We=Tt:Ke.sibling=Tt,Ke=Tt);return Ht&&ns($,nt),We}for(Ze=h($,Ze);!Tt.done;nt++,Tt=q.next())Tt=Le(Ze,$,nt,Tt.value,Ee),Tt!==null&&(n&&Tt.alternate!==null&&Ze.delete(Tt.key===null?nt:Tt.key),H=v(Tt,H,nt),Ke===null?We=Tt:Ke.sibling=Tt,Ke=Tt);return n&&Ze.forEach(function(ay){return r($,ay)}),Ht&&ns($,nt),We}function Yt($,H,q,Ee){if(typeof q=="object"&&q!==null&&q.type===F&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case Y:e:{for(var We=q.key,Ke=H;Ke!==null;){if(Ke.key===We){if(We=q.type,We===F){if(Ke.tag===7){l($,Ke.sibling),H=p(Ke,q.props.children),H.return=$,$=H;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===oe&&Sp(We)===Ke.type){l($,Ke.sibling),H=p(Ke,q.props),H.ref=Ko($,Ke,q),H.return=$,$=H;break e}l($,Ke);break}else r($,Ke);Ke=Ke.sibling}q.type===F?(H=cs(q.props.children,$.mode,Ee,q.key),H.return=$,$=H):(Ee=Nl(q.type,q.key,q.props,null,$.mode,Ee),Ee.ref=Ko($,H,q),Ee.return=$,$=Ee)}return T($);case k:e:{for(Ke=q.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===q.containerInfo&&H.stateNode.implementation===q.implementation){l($,H.sibling),H=p(H,q.children||[]),H.return=$,$=H;break e}else{l($,H);break}else r($,H);H=H.sibling}H=hh(q,$.mode,Ee),H.return=$,$=H}return T($);case oe:return Ke=q._init,Yt($,H,Ke(q._payload),Ee)}if(je(q))return ke($,H,q,Ee);if(ae(q))return ze($,H,q,Ee);cl($,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,H!==null&&H.tag===6?(l($,H.sibling),H=p(H,q),H.return=$,$=H):(l($,H),H=ch(q,$.mode,Ee),H.return=$,$=H),T($)):l($,H)}return Yt}var Bs=Mp(!0),Ep=Mp(!1),hl=wr(null),dl=null,zs=null,xc=null;function Sc(){xc=zs=dl=null}function Mc(n){var r=hl.current;zt(hl),n._currentValue=r}function Ec(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Hs(n,r){dl=n,xc=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(zn=!0),n.firstContext=null)}function ii(n){var r=n._currentValue;if(xc!==n)if(n={context:n,memoizedValue:r,next:null},zs===null){if(dl===null)throw Error(t(308));zs=n,dl.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return r}var is=null;function Tc(n){is===null?is=[n]:is.push(n)}function Tp(n,r,l,h){var p=r.interleaved;return p===null?(l.next=l,Tc(r)):(l.next=p.next,p.next=l),r.interleaved=l,qi(n,h)}function qi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Cr=!1;function wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Rr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,(Mt&2)!==0){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,qi(n,l)}return p=h.interleaved,p===null?(r.next=r,Tc(h)):(r.next=p.next,p.next=r),h.interleaved=r,qi(n,l)}function fl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Bu(n,l)}}function Ap(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function pl(n,r,l,h){var p=n.updateQueue;Cr=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var O=I,J=O.next;O.next=null,T===null?v=J:T.next=J,T=O;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==T&&(I===null?_e.firstBaseUpdate=J:I.next=J,_e.lastBaseUpdate=O))}if(v!==null){var ye=p.baseState;T=0,_e=J=O=null,I=v;do{var me=I.lane,Le=I.eventTime;if((h&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ke=n,ze=I;switch(me=r,Le=l,ze.tag){case 1:if(ke=ze.payload,typeof ke=="function"){ye=ke.call(Le,ye,me);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=ze.payload,me=typeof ke=="function"?ke.call(Le,ye,me):ke,me==null)break e;ye=se({},ye,me);break e;case 2:Cr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[I]:me.push(I))}else Le={eventTime:Le,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(J=_e=Le,O=ye):_e=_e.next=Le,T|=me;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;me=I,I=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(O=ye),p.baseState=O,p.firstBaseUpdate=J,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);os|=T,n.lanes=T,n.memoizedState=ye}}function bp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Zo={},Di=wr(Zo),Qo=wr(Zo),Jo=wr(Zo);function rs(n){if(n===Zo)throw Error(t(174));return n}function Ac(n,r){switch(Ot(Jo,r),Ot(Qo,n),Ot(Di,Zo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=He(r,n)}zt(Di),Ot(Di,r)}function Vs(){zt(Di),zt(Qo),zt(Jo)}function Cp(n){rs(Jo.current);var r=rs(Di.current),l=He(r,n.type);r!==l&&(Ot(Qo,n),Ot(Di,l))}function bc(n){Qo.current===n&&(zt(Di),zt(Qo))}var Vt=wr(0);function ml(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Cc=[];function Rc(){for(var n=0;n<Cc.length;n++)Cc[n]._workInProgressVersionPrimary=null;Cc.length=0}var gl=b.ReactCurrentDispatcher,Pc=b.ReactCurrentBatchConfig,ss=0,Gt=null,Jt=null,on=null,_l=!1,ea=!1,ta=0,R0=0;function vn(){throw Error(t(321))}function Lc(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!fi(n[l],r[l]))return!1;return!0}function Dc(n,r,l,h,p,v){if(ss=v,Gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gl.current=n===null||n.memoizedState===null?I0:N0,n=l(h,p),ea){v=0;do{if(ea=!1,ta=0,25<=v)throw Error(t(301));v+=1,on=Jt=null,r.updateQueue=null,gl.current=U0,n=l(h,p)}while(ea)}if(gl.current=xl,r=Jt!==null&&Jt.next!==null,ss=0,on=Jt=Gt=null,_l=!1,r)throw Error(t(300));return n}function Ic(){var n=ta!==0;return ta=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Gt.memoizedState=on=n:on=on.next=n,on}function ri(){if(Jt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var r=on===null?Gt.memoizedState:on.next;if(r!==null)on=r,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},on===null?Gt.memoizedState=on=n:on=on.next=n}return on}function na(n,r){return typeof r=="function"?r(n):r}function Nc(n){var r=ri(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=Jt,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var I=T=null,O=null,J=v;do{var _e=J.lane;if((ss&_e)===_e)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),h=J.hasEagerState?J.eagerState:n(h,J.action);else{var ye={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(I=O=ye,T=h):O=O.next=ye,Gt.lanes|=_e,os|=_e}J=J.next}while(J!==null&&J!==v);O===null?T=h:O.next=I,fi(h,r.memoizedState)||(zn=!0),r.memoizedState=h,r.baseState=T,r.baseQueue=O,l.lastRenderedState=h}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Gt.lanes|=v,os|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Uc(n){var r=ri(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);fi(v,r.memoizedState)||(zn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function Rp(){}function Pp(n,r){var l=Gt,h=ri(),p=r(),v=!fi(h.memoizedState,p);if(v&&(h.memoizedState=p,zn=!0),h=h.queue,Fc(Ip.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,ia(9,Dp.bind(null,l,h,p,r),void 0,null),an===null)throw Error(t(349));(ss&30)!==0||Lp(l,r,p)}return p}function Lp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Dp(n,r,l,h){r.value=l,r.getSnapshot=h,Np(r)&&Up(n)}function Ip(n,r,l){return l(function(){Np(r)&&Up(n)})}function Np(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!fi(n,l)}catch{return!0}}function Up(n){var r=qi(n,1);r!==null&&vi(r,n,1,-1)}function Fp(n){var r=Ii();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},r.queue=n,n=n.dispatch=D0.bind(null,Gt,n),[r.memoizedState,n]}function ia(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function Op(){return ri().memoizedState}function vl(n,r,l,h){var p=Ii();Gt.flags|=n,p.memoizedState=ia(1|r,l,void 0,h===void 0?null:h)}function yl(n,r,l,h){var p=ri();h=h===void 0?null:h;var v=void 0;if(Jt!==null){var T=Jt.memoizedState;if(v=T.destroy,h!==null&&Lc(h,T.deps)){p.memoizedState=ia(r,l,v,h);return}}Gt.flags|=n,p.memoizedState=ia(1|r,l,v,h)}function kp(n,r){return vl(8390656,8,n,r)}function Fc(n,r){return yl(2048,8,n,r)}function Bp(n,r){return yl(4,2,n,r)}function zp(n,r){return yl(4,4,n,r)}function Hp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Vp(n,r,l){return l=l!=null?l.concat([n]):null,yl(4,4,Hp.bind(null,r,n),l)}function Oc(){}function Gp(n,r){var l=ri();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Lc(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function Wp(n,r){var l=ri();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Lc(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function Xp(n,r,l){return(ss&21)===0?(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=l):(fi(l,r)||(l=Cn(),Gt.lanes|=l,os|=l,n.baseState=!0),r)}function P0(n,r){var l=Rt;Rt=l!==0&&4>l?l:4,n(!0);var h=Pc.transition;Pc.transition={};try{n(!1),r()}finally{Rt=l,Pc.transition=h}}function jp(){return ri().memoizedState}function L0(n,r,l){var h=Ir(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Yp(n))$p(r,l);else if(l=Tp(n,r,l,h),l!==null){var p=Pn();vi(l,n,h,p),qp(l,r,h)}}function D0(n,r,l){var h=Ir(n),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Yp(n))$p(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,I=v(T,l);if(p.hasEagerState=!0,p.eagerState=I,fi(I,T)){var O=r.interleaved;O===null?(p.next=p,Tc(r)):(p.next=O.next,O.next=p),r.interleaved=p;return}}catch{}finally{}l=Tp(n,r,p,h),l!==null&&(p=Pn(),vi(l,n,h,p),qp(l,r,h))}}function Yp(n){var r=n.alternate;return n===Gt||r!==null&&r===Gt}function $p(n,r){ea=_l=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function qp(n,r,l){if((l&4194240)!==0){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Bu(n,l)}}var xl={readContext:ii,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},I0={readContext:ii,useCallback:function(n,r){return Ii().memoizedState=[n,r===void 0?null:r],n},useContext:ii,useEffect:kp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,vl(4194308,4,Hp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return vl(4194308,4,n,r)},useInsertionEffect:function(n,r){return vl(4,2,n,r)},useMemo:function(n,r){var l=Ii();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ii();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=L0.bind(null,Gt,n),[h.memoizedState,n]},useRef:function(n){var r=Ii();return n={current:n},r.memoizedState=n},useState:Fp,useDebugValue:Oc,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=Fp(!1),r=n[0];return n=P0.bind(null,n[1]),Ii().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Gt,p=Ii();if(Ht){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),an===null)throw Error(t(349));(ss&30)!==0||Lp(h,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,kp(Ip.bind(null,h,v,n),[n]),h.flags|=2048,ia(9,Dp.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Ii(),r=an.identifierPrefix;if(Ht){var l=$i,h=Yi;l=(h&~(1<<32-ot(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=ta++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=R0++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},N0={readContext:ii,useCallback:Gp,useContext:ii,useEffect:Fc,useImperativeHandle:Vp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Nc,useRef:Op,useState:function(){return Nc(na)},useDebugValue:Oc,useDeferredValue:function(n){var r=ri();return Xp(r,Jt.memoizedState,n)},useTransition:function(){var n=Nc(na)[0],r=ri().memoizedState;return[n,r]},useMutableSource:Rp,useSyncExternalStore:Pp,useId:jp,unstable_isNewReconciler:!1},U0={readContext:ii,useCallback:Gp,useContext:ii,useEffect:Fc,useImperativeHandle:Vp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Uc,useRef:Op,useState:function(){return Uc(na)},useDebugValue:Oc,useDeferredValue:function(n){var r=ri();return Jt===null?r.memoizedState=n:Xp(r,Jt.memoizedState,n)},useTransition:function(){var n=Uc(na)[0],r=ri().memoizedState;return[n,r]},useMutableSource:Rp,useSyncExternalStore:Pp,useId:jp,unstable_isNewReconciler:!1};function mi(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function kc(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:se({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Sl={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Pn(),p=Ir(n),v=Ki(h,p);v.payload=r,l!=null&&(v.callback=l),r=Rr(n,v,p),r!==null&&(vi(r,n,p,h),fl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Pn(),p=Ir(n),v=Ki(h,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Rr(n,v,p),r!==null&&(vi(r,n,p,h),fl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Pn(),h=Ir(n),p=Ki(l,h);p.tag=2,r!=null&&(p.callback=r),r=Rr(n,p,h),r!==null&&(vi(r,n,h,l),fl(r,n,h))}};function Kp(n,r,l,h,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,T):r.prototype&&r.prototype.isPureReactComponent?!Go(l,h)||!Go(p,v):!0}function Zp(n,r,l){var h=!1,p=Ar,v=r.contextType;return typeof v=="object"&&v!==null?v=ii(v):(p=Bn(r)?es:_n.current,h=r.contextTypes,v=(h=h!=null)?Us(n,p):Ar),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sl,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Qp(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&Sl.enqueueReplaceState(r,r.state,null)}function Bc(n,r,l,h){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},wc(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=ii(v):(v=Bn(r)?es:_n.current,p.context=Us(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(kc(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Sl.enqueueReplaceState(p,p.state,null),pl(n,l,p,h),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var l="",h=r;do l+=ce(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function zc(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Hc(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var F0=typeof WeakMap=="function"?WeakMap:Map;function Jp(n,r,l){l=Ki(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){Cl||(Cl=!0,nh=h),Hc(n,r)},l}function em(n,r,l){l=Ki(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var p=r.value;l.payload=function(){return h(p)},l.callback=function(){Hc(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Hc(n,r),typeof h!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function tm(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new F0;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(p.add(l),n=K0.bind(null,n,r,l),r.then(n,n))}function nm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function im(n,r,l,h,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Ki(-1,1),r.tag=2,Rr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var O0=b.ReactCurrentOwner,zn=!1;function Rn(n,r,l,h){r.child=n===null?Ep(r,null,l,h):Bs(r,n.child,l,h)}function rm(n,r,l,h,p){l=l.render;var v=r.ref;return Hs(r,p),h=Dc(n,r,l,h,v,p),l=Ic(),n!==null&&!zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Zi(n,r,p)):(Ht&&l&&mc(r),r.flags|=1,Rn(n,r,h,p),r.child)}function sm(n,r,l,h,p){if(n===null){var v=l.type;return typeof v=="function"&&!uh(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,om(n,r,v,h,p)):(n=Nl(l.type,null,h,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:Go,l(T,h)&&n.ref===r.ref)return Zi(n,r,p)}return r.flags|=1,n=Ur(v,h),n.ref=r.ref,n.return=r,r.child=n}function om(n,r,l,h,p){if(n!==null){var v=n.memoizedProps;if(Go(v,h)&&n.ref===r.ref)if(zn=!1,r.pendingProps=h=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(zn=!0);else return r.lanes=n.lanes,Zi(n,r,p)}return Vc(n,r,l,h,p)}function am(n,r,l){var h=r.pendingProps,p=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Xs,qn),qn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ot(Xs,qn),qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,Ot(Xs,qn),qn|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,Ot(Xs,qn),qn|=h;return Rn(n,r,p,l),r.child}function lm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Vc(n,r,l,h,p){var v=Bn(l)?es:_n.current;return v=Us(r,v),Hs(r,p),l=Dc(n,r,l,h,v,p),h=Ic(),n!==null&&!zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Zi(n,r,p)):(Ht&&h&&mc(r),r.flags|=1,Rn(n,r,l,p),r.child)}function um(n,r,l,h,p){if(Bn(l)){var v=!0;sl(r)}else v=!1;if(Hs(r,p),r.stateNode===null)El(n,r),Zp(r,l,h),Bc(r,l,h,p),h=!0;else if(n===null){var T=r.stateNode,I=r.memoizedProps;T.props=I;var O=T.context,J=l.contextType;typeof J=="object"&&J!==null?J=ii(J):(J=Bn(l)?es:_n.current,J=Us(r,J));var _e=l.getDerivedStateFromProps,ye=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==h||O!==J)&&Qp(r,T,h,J),Cr=!1;var me=r.memoizedState;T.state=me,pl(r,h,T,p),O=r.memoizedState,I!==h||me!==O||kn.current||Cr?(typeof _e=="function"&&(kc(r,l,_e,h),O=r.memoizedState),(I=Cr||Kp(r,l,I,h,me,O,J))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=O),T.props=h,T.state=O,T.context=J,h=I):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{T=r.stateNode,wp(n,r),I=r.memoizedProps,J=r.type===r.elementType?I:mi(r.type,I),T.props=J,ye=r.pendingProps,me=T.context,O=l.contextType,typeof O=="object"&&O!==null?O=ii(O):(O=Bn(l)?es:_n.current,O=Us(r,O));var Le=l.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||me!==O)&&Qp(r,T,h,O),Cr=!1,me=r.memoizedState,T.state=me,pl(r,h,T,p);var ke=r.memoizedState;I!==ye||me!==ke||kn.current||Cr?(typeof Le=="function"&&(kc(r,l,Le,h),ke=r.memoizedState),(J=Cr||Kp(r,l,J,h,me,ke,O)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,ke,O),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,ke,O)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=ke),T.props=h,T.state=ke,T.context=O,h=J):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),h=!1)}return Gc(n,r,l,h,v,p)}function Gc(n,r,l,h,p,v){lm(n,r);var T=(r.flags&128)!==0;if(!h&&!T)return p&&pp(r,l,!1),Zi(n,r,v);h=r.stateNode,O0.current=r;var I=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&T?(r.child=Bs(r,n.child,null,v),r.child=Bs(r,null,I,v)):Rn(n,r,I,v),r.memoizedState=h.state,p&&pp(r,l,!0),r.child}function cm(n){var r=n.stateNode;r.pendingContext?dp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&dp(n,r.context,!1),Ac(n,r.containerInfo)}function hm(n,r,l,h,p){return ks(),yc(p),r.flags|=256,Rn(n,r,l,h),r.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function Xc(n){return{baseLanes:n,cachePool:null,transitions:null}}function dm(n,r,l){var h=r.pendingProps,p=Vt.current,v=!1,T=(r.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ot(Vt,p&1),n===null)return vc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=h.children,n=h.fallback,v?(h=r.mode,v=r.child,T={mode:"hidden",children:T},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Ul(T,h,0,null),n=cs(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Xc(l),r.memoizedState=Wc,n):jc(r,T));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return k0(n,r,T,h,I,p,l);if(v){v=h.fallback,T=r.mode,p=n.child,I=p.sibling;var O={mode:"hidden",children:h.children};return(T&1)===0&&r.child!==p?(h=r.child,h.childLanes=0,h.pendingProps=O,r.deletions=null):(h=Ur(p,O),h.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=Ur(I,v):(v=cs(v,T,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,T=n.child.memoizedState,T=T===null?Xc(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=Wc,h}return v=n.child,n=v.sibling,h=Ur(v,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function jc(n,r){return r=Ul({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,l,h){return h!==null&&yc(h),Bs(r,n.child,null,l),n=jc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function k0(n,r,l,h,p,v,T){if(l)return r.flags&256?(r.flags&=-257,h=zc(Error(t(422))),Ml(n,r,T,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,p=r.mode,h=Ul({mode:"visible",children:h.children},p,0,null),v=cs(v,p,T,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,(r.mode&1)!==0&&Bs(r,n.child,null,T),r.child.memoizedState=Xc(T),r.memoizedState=Wc,v);if((r.mode&1)===0)return Ml(n,r,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var I=h.dgst;return h=I,v=Error(t(419)),h=zc(v,h,void 0),Ml(n,r,T,h)}if(I=(T&n.childLanes)!==0,zn||I){if(h=an,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,qi(n,p),vi(h,n,p,-1))}return lh(),h=zc(Error(t(421))),Ml(n,r,T,h)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Z0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,$n=Tr(p.nextSibling),Yn=r,Ht=!0,pi=null,n!==null&&(ti[ni++]=Yi,ti[ni++]=$i,ti[ni++]=ts,Yi=n.id,$i=n.overflow,ts=r),r=jc(r,h.children),r.flags|=4096,r)}function fm(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),Ec(n.return,r,l)}function Yc(n,r,l,h,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function pm(n,r,l){var h=r.pendingProps,p=h.revealOrder,v=h.tail;if(Rn(n,r,h.children,l),h=Vt.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fm(n,l,r);else if(n.tag===19)fm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Ot(Vt,h),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&ml(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Yc(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&ml(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Yc(r,!0,l,null,v);break;case"together":Yc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function El(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Zi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),os|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Ur(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Ur(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function B0(n,r,l){switch(r.tag){case 3:cm(r),ks();break;case 5:Cp(r);break;case 1:Bn(r.type)&&sl(r);break;case 4:Ac(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,p=r.memoizedProps.value;Ot(hl,h._currentValue),h._currentValue=p;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Ot(Vt,Vt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?dm(n,r,l):(Ot(Vt,Vt.current&1),n=Zi(n,r,l),n!==null?n.sibling:null);Ot(Vt,Vt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,(n.flags&128)!==0){if(h)return pm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot(Vt,Vt.current),h)break;return null;case 22:case 23:return r.lanes=0,am(n,r,l)}return Zi(n,r,l)}var mm,$c,gm,_m;mm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},$c=function(){},gm=function(n,r,l,h){var p=n.memoizedProps;if(p!==h){n=r.stateNode,rs(Di.current);var v=null;switch(l){case"input":p=j(n,p),h=j(n,h),v=[];break;case"select":p=se({},p,{value:void 0}),h=se({},h,{value:void 0}),v=[];break;case"textarea":p=w(n,p),h=w(n,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=nl)}ft(l,h);var T;l=null;for(J in p)if(!h.hasOwnProperty(J)&&p.hasOwnProperty(J)&&p[J]!=null)if(J==="style"){var I=p[J];for(T in I)I.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(s.hasOwnProperty(J)?v||(v=[]):(v=v||[]).push(J,null));for(J in h){var O=h[J];if(I=p!=null?p[J]:void 0,h.hasOwnProperty(J)&&O!==I&&(O!=null||I!=null))if(J==="style")if(I){for(T in I)!I.hasOwnProperty(T)||O&&O.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in O)O.hasOwnProperty(T)&&I[T]!==O[T]&&(l||(l={}),l[T]=O[T])}else l||(v||(v=[]),v.push(J,l)),l=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(v=v||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(v=v||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(s.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Bt("scroll",n),v||I===O||(v=[])):(v=v||[]).push(J,O))}l&&(v=v||[]).push("style",l);var J=v;(r.updateQueue=J)&&(r.flags|=4)}},_m=function(n,r,l,h){l!==h&&(r.flags|=4)};function ra(n,r){if(!Ht)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function yn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function z0(n,r,l){var h=r.pendingProps;switch(gc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(r),null;case 1:return Bn(r.type)&&rl(),yn(r),null;case 3:return h=r.stateNode,Vs(),zt(kn),zt(_n),Rc(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,pi!==null&&(sh(pi),pi=null))),$c(n,r),yn(r),null;case 5:bc(r);var p=rs(Jo.current);if(l=r.type,n!==null&&r.stateNode!=null)gm(n,r,l,h,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return yn(r),null}if(n=rs(Di.current),ul(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[Li]=r,h[$o]=v,n=(r.mode&1)!==0,l){case"dialog":Bt("cancel",h),Bt("close",h);break;case"iframe":case"object":case"embed":Bt("load",h);break;case"video":case"audio":for(p=0;p<Xo.length;p++)Bt(Xo[p],h);break;case"source":Bt("error",h);break;case"img":case"image":case"link":Bt("error",h),Bt("load",h);break;case"details":Bt("toggle",h);break;case"input":An(h,v),Bt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},Bt("invalid",h);break;case"textarea":Z(h,v),Bt("invalid",h)}ft(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var I=v[T];T==="children"?typeof I=="string"?h.textContent!==I&&(v.suppressHydrationWarning!==!0&&tl(h.textContent,I,n),p=["children",I]):typeof I=="number"&&h.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&tl(h.textContent,I,n),p=["children",""+I]):s.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Bt("scroll",h)}switch(l){case"input":It(h),qe(h,v,!0);break;case"textarea":It(h),ge(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=nl)}h=p,r.updateQueue=h,h!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[Li]=r,n[$o]=h,mm(n,r,!1,!1),r.stateNode=n;e:{switch(T=rt(l,h),l){case"dialog":Bt("cancel",n),Bt("close",n),p=h;break;case"iframe":case"object":case"embed":Bt("load",n),p=h;break;case"video":case"audio":for(p=0;p<Xo.length;p++)Bt(Xo[p],n);p=h;break;case"source":Bt("error",n),p=h;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),p=h;break;case"details":Bt("toggle",n),p=h;break;case"input":An(n,h),p=j(n,h),Bt("invalid",n);break;case"option":p=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},p=se({},h,{value:void 0}),Bt("invalid",n);break;case"textarea":Z(n,h),p=w(n,h),Bt("invalid",n);break;default:p=h}ft(l,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var O=I[v];v==="style"?et(n,O):v==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ne(n,O)):v==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&ht(n,O):typeof O=="number"&&ht(n,""+O):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?O!=null&&v==="onScroll"&&Bt("scroll",n):O!=null&&P(n,v,O,T))}switch(l){case"input":It(n),qe(n,h,!1);break;case"textarea":It(n),ge(n);break;case"option":h.value!=null&&n.setAttribute("value",""+we(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?D(n,!!h.multiple,v,!1):h.defaultValue!=null&&D(n,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=nl)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return yn(r),null;case 6:if(n&&r.stateNode!=null)_m(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=rs(Jo.current),rs(Di.current),ul(r)){if(h=r.stateNode,l=r.memoizedProps,h[Li]=r,(v=h.nodeValue!==l)&&(n=Yn,n!==null))switch(n.tag){case 3:tl(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Li]=r,r.stateNode=h}return yn(r),null;case 13:if(zt(Vt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&$n!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xp(),ks(),r.flags|=98560,v=!1;else if(v=ul(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Li]=r}else ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;yn(r),v=!1}else pi!==null&&(sh(pi),pi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Vt.current&1)!==0?en===0&&(en=3):lh())),r.updateQueue!==null&&(r.flags|=4),yn(r),null);case 4:return Vs(),$c(n,r),n===null&&jo(r.stateNode.containerInfo),yn(r),null;case 10:return Mc(r.type._context),yn(r),null;case 17:return Bn(r.type)&&rl(),yn(r),null;case 19:if(zt(Vt),v=r.memoizedState,v===null)return yn(r),null;if(h=(r.flags&128)!==0,T=v.rendering,T===null)if(h)ra(v,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=ml(n),T!==null){for(r.flags|=128,ra(v,!1),h=T.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ot(Vt,Vt.current&1|2),r.child}n=n.sibling}v.tail!==null&&Se()>js&&(r.flags|=128,h=!0,ra(v,!1),r.lanes=4194304)}else{if(!h)if(n=ml(T),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ra(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Ht)return yn(r),null}else 2*Se()-v.renderingStartTime>js&&l!==1073741824&&(r.flags|=128,h=!0,ra(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Se(),r.sibling=null,l=Vt.current,Ot(Vt,h?l&1|2:l&1),r):(yn(r),null);case 22:case 23:return ah(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(qn&1073741824)!==0&&(yn(r),r.subtreeFlags&6&&(r.flags|=8192)):yn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function H0(n,r){switch(gc(r),r.tag){case 1:return Bn(r.type)&&rl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Vs(),zt(kn),zt(_n),Rc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return bc(r),null;case 13:if(zt(Vt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return zt(Vt),null;case 4:return Vs(),null;case 10:return Mc(r.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Tl=!1,xn=!1,V0=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Ws(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Xt(n,r,h)}else l.current=null}function qc(n,r,l){try{l()}catch(h){Xt(n,r,h)}}var vm=!1;function G0(n,r){if(ac=Wa,n=Kf(),Ju(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,I=-1,O=-1,J=0,_e=0,ye=n,me=null;t:for(;;){for(var Le;ye!==l||p!==0&&ye.nodeType!==3||(I=T+p),ye!==v||h!==0&&ye.nodeType!==3||(O=T+h),ye.nodeType===3&&(T+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)me=ye,ye=Le;for(;;){if(ye===n)break t;if(me===l&&++J===p&&(I=T),me===v&&++_e===h&&(O=T),(Le=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Le}l=I===-1||O===-1?null:{start:I,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(lc={focusedElem:n,selectionRange:l},Wa=!1,Ue=r;Ue!==null;)if(r=Ue,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ue=n;else for(;Ue!==null;){r=Ue;try{var ke=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var ze=ke.memoizedProps,Yt=ke.memoizedState,$=r.stateNode,H=$.getSnapshotBeforeUpdate(r.elementType===r.type?ze:mi(r.type,ze),Yt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var q=r.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Xt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Ue=n;break}Ue=r.return}return ke=vm,vm=!1,ke}function sa(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&qc(r,l,v)}p=p.next}while(p!==h)}}function wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function Kc(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function ym(n){var r=n.alternate;r!==null&&(n.alternate=null,ym(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Li],delete r[$o],delete r[dc],delete r[w0],delete r[A0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function Sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zc(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=nl));else if(h!==4&&(n=n.child,n!==null))for(Zc(n,r,l),n=n.sibling;n!==null;)Zc(n,r,l),n=n.sibling}function Qc(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(Qc(n,r,l),n=n.sibling;n!==null;)Qc(n,r,l),n=n.sibling}var dn=null,gi=!1;function Pr(n,r,l){for(l=l.child;l!==null;)Mm(n,r,l),l=l.sibling}function Mm(n,r,l){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(wt,l)}catch{}switch(l.tag){case 5:xn||Ws(l,r);case 6:var h=dn,p=gi;dn=null,Pr(n,r,l),dn=h,gi=p,dn!==null&&(gi?(n=dn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):dn.removeChild(l.stateNode));break;case 18:dn!==null&&(gi?(n=dn,l=l.stateNode,n.nodeType===8?hc(n.parentNode,l):n.nodeType===1&&hc(n,l),Oo(n)):hc(dn,l.stateNode));break;case 4:h=dn,p=gi,dn=l.stateNode.containerInfo,gi=!0,Pr(n,r,l),dn=h,gi=p;break;case 0:case 11:case 14:case 15:if(!xn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&qc(l,r,T),p=p.next}while(p!==h)}Pr(n,r,l);break;case 1:if(!xn&&(Ws(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(I){Xt(l,r,I)}Pr(n,r,l);break;case 21:Pr(n,r,l);break;case 22:l.mode&1?(xn=(h=xn)||l.memoizedState!==null,Pr(n,r,l),xn=h):Pr(n,r,l);break;default:Pr(n,r,l)}}function Em(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new V0),r.forEach(function(h){var p=Q0.bind(null,n,h);l.has(h)||(l.add(h),h.then(p,p))})}}function _i(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=n,T=r,I=T;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,gi=!1;break e;case 3:dn=I.stateNode.containerInfo,gi=!0;break e;case 4:dn=I.stateNode.containerInfo,gi=!0;break e}I=I.return}if(dn===null)throw Error(t(160));Mm(v,T,p),dn=null,gi=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(J){Xt(p,r,J)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Tm(r,n),r=r.sibling}function Tm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(r,n),Ni(n),h&4){try{sa(3,n,n.return),wl(3,n)}catch(ze){Xt(n,n.return,ze)}try{sa(5,n,n.return)}catch(ze){Xt(n,n.return,ze)}}break;case 1:_i(r,n),Ni(n),h&512&&l!==null&&Ws(l,l.return);break;case 5:if(_i(r,n),Ni(n),h&512&&l!==null&&Ws(l,l.return),n.flags&32){var p=n.stateNode;try{ht(p,"")}catch(ze){Xt(n,n.return,ze)}}if(h&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,I=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&mt(p,v),rt(I,T);var J=rt(I,v);for(T=0;T<O.length;T+=2){var _e=O[T],ye=O[T+1];_e==="style"?et(p,ye):_e==="dangerouslySetInnerHTML"?Ne(p,ye):_e==="children"?ht(p,ye):P(p,_e,ye,J)}switch(I){case"input":dt(p,v);break;case"textarea":pe(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?D(p,!!v.multiple,Le,!1):me!==!!v.multiple&&(v.defaultValue!=null?D(p,!!v.multiple,v.defaultValue,!0):D(p,!!v.multiple,v.multiple?[]:"",!1))}p[$o]=v}catch(ze){Xt(n,n.return,ze)}}break;case 6:if(_i(r,n),Ni(n),h&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(ze){Xt(n,n.return,ze)}}break;case 3:if(_i(r,n),Ni(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Oo(r.containerInfo)}catch(ze){Xt(n,n.return,ze)}break;case 4:_i(r,n),Ni(n);break;case 13:_i(r,n),Ni(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(th=Se())),h&4&&Em(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(xn=(J=xn)||_e,_i(r,n),xn=J):_i(r,n),Ni(n),h&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!_e&&(n.mode&1)!==0)for(Ue=n,_e=n.child;_e!==null;){for(ye=Ue=_e;Ue!==null;){switch(me=Ue,Le=me.child,me.tag){case 0:case 11:case 14:case 15:sa(4,me,me.return);break;case 1:Ws(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){h=me,l=me.return;try{r=h,ke.props=r.memoizedProps,ke.state=r.memoizedState,ke.componentWillUnmount()}catch(ze){Xt(h,l,ze)}}break;case 5:Ws(me,me.return);break;case 22:if(me.memoizedState!==null){bm(ye);continue}}Le!==null?(Le.return=me,Ue=Le):bm(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{p=ye.stateNode,J?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=ye.stateNode,O=ye.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Je("display",T))}catch(ze){Xt(n,n.return,ze)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(ze){Xt(n,n.return,ze)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:_i(r,n),Ni(n),h&4&&Em(n);break;case 21:break;default:_i(r,n),Ni(n)}}function Ni(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(xm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ht(p,""),h.flags&=-33);var v=Sm(n);Qc(n,v,p);break;case 3:case 4:var T=h.stateNode.containerInfo,I=Sm(n);Zc(n,I,T);break;default:throw Error(t(161))}}catch(O){Xt(n,n.return,O)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function W0(n,r,l){Ue=n,wm(n)}function wm(n,r,l){for(var h=(n.mode&1)!==0;Ue!==null;){var p=Ue,v=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||Tl;if(!T){var I=p.alternate,O=I!==null&&I.memoizedState!==null||xn;I=Tl;var J=xn;if(Tl=T,(xn=O)&&!J)for(Ue=p;Ue!==null;)T=Ue,O=T.child,T.tag===22&&T.memoizedState!==null?Cm(p):O!==null?(O.return=T,Ue=O):Cm(p);for(;v!==null;)Ue=v,wm(v),v=v.sibling;Ue=p,Tl=I,xn=J}Am(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Ue=v):Am(n)}}function Am(n){for(;Ue!==null;){var r=Ue;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:xn||wl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!xn)if(l===null)h.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:mi(r.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&bp(r,v,h);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}bp(r,T,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var O=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var J=r.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Oo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||r.flags&512&&Kc(r)}catch(me){Xt(r,r.return,me)}}if(r===n){Ue=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ue=l;break}Ue=r.return}}function bm(n){for(;Ue!==null;){var r=Ue;if(r===n){Ue=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ue=l;break}Ue=r.return}}function Cm(n){for(;Ue!==null;){var r=Ue;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{wl(4,r)}catch(O){Xt(r,l,O)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var p=r.return;try{h.componentDidMount()}catch(O){Xt(r,p,O)}}var v=r.return;try{Kc(r)}catch(O){Xt(r,v,O)}break;case 5:var T=r.return;try{Kc(r)}catch(O){Xt(r,T,O)}}}catch(O){Xt(r,r.return,O)}if(r===n){Ue=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Ue=I;break}Ue=r.return}}var X0=Math.ceil,Al=b.ReactCurrentDispatcher,Jc=b.ReactCurrentOwner,si=b.ReactCurrentBatchConfig,Mt=0,an=null,qt=null,fn=0,qn=0,Xs=wr(0),en=0,oa=null,os=0,bl=0,eh=0,aa=null,Hn=null,th=0,js=1/0,Qi=null,Cl=!1,nh=null,Lr=null,Rl=!1,Dr=null,Pl=0,la=0,ih=null,Ll=-1,Dl=0;function Pn(){return(Mt&6)!==0?Se():Ll!==-1?Ll:Ll=Se()}function Ir(n){return(n.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:C0.transition!==null?(Dl===0&&(Dl=Cn()),Dl):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:Pf(n.type)),n)}function vi(n,r,l,h){if(50<la)throw la=0,ih=null,Error(t(185));On(n,l,h),((Mt&2)===0||n!==an)&&(n===an&&((Mt&2)===0&&(bl|=l),en===4&&Nr(n,fn)),Vn(n,h),l===1&&Mt===0&&(r.mode&1)===0&&(js=Se()+500,ol&&br()))}function Vn(n,r){var l=n.callbackNode;Jn(n,r);var h=Pi(n,n===an?fn:0);if(h===0)l!==null&&te(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&te(l),r===1)n.tag===0?b0(Pm.bind(null,n)):mp(Pm.bind(null,n)),E0(function(){(Mt&6)===0&&br()}),l=null;else{switch(Mf(h)){case 1:l=Be;break;case 4:l=tt;break;case 16:l=it;break;case 536870912:l=xt;break;default:l=it}l=km(l,Rm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Rm(n,r){if(Ll=-1,Dl=0,(Mt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ys()&&n.callbackNode!==l)return null;var h=Pi(n,n===an?fn:0);if(h===0)return null;if((h&30)!==0||(h&n.expiredLanes)!==0||r)r=Il(n,h);else{r=h;var p=Mt;Mt|=2;var v=Dm();(an!==n||fn!==r)&&(Qi=null,js=Se()+500,ls(n,r));do try{$0();break}catch(I){Lm(n,I)}while(!0);Sc(),Al.current=v,Mt=p,qt!==null?r=0:(an=null,fn=0,r=en)}if(r!==0){if(r===2&&(p=Wi(n),p!==0&&(h=p,r=rh(n,p))),r===1)throw l=oa,ls(n,0),Nr(n,h),Vn(n,Se()),l;if(r===6)Nr(n,h);else{if(p=n.current.alternate,(h&30)===0&&!j0(p)&&(r=Il(n,h),r===2&&(v=Wi(n),v!==0&&(h=v,r=rh(n,v))),r===1))throw l=oa,ls(n,0),Nr(n,h),Vn(n,Se()),l;switch(n.finishedWork=p,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:us(n,Hn,Qi);break;case 3:if(Nr(n,h),(h&130023424)===h&&(r=th+500-Se(),10<r)){if(Pi(n,0)!==0)break;if(p=n.suspendedLanes,(p&h)!==h){Pn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=cc(us.bind(null,n,Hn,Qi),r);break}us(n,Hn,Qi);break;case 4:if(Nr(n,h),(h&4194240)===h)break;for(r=n.eventTimes,p=-1;0<h;){var T=31-ot(h);v=1<<T,T=r[T],T>p&&(p=T),h&=~v}if(h=p,h=Se()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*X0(h/1960))-h,10<h){n.timeoutHandle=cc(us.bind(null,n,Hn,Qi),h);break}us(n,Hn,Qi);break;case 5:us(n,Hn,Qi);break;default:throw Error(t(329))}}}return Vn(n,Se()),n.callbackNode===l?Rm.bind(null,n):null}function rh(n,r){var l=aa;return n.current.memoizedState.isDehydrated&&(ls(n,r).flags|=256),n=Il(n,r),n!==2&&(r=Hn,Hn=l,r!==null&&sh(r)),n}function sh(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function j0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!fi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Nr(n,r){for(r&=~eh,r&=~bl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ot(r),h=1<<l;n[l]=-1,r&=~h}}function Pm(n){if((Mt&6)!==0)throw Error(t(327));Ys();var r=Pi(n,0);if((r&1)===0)return Vn(n,Se()),null;var l=Il(n,r);if(n.tag!==0&&l===2){var h=Wi(n);h!==0&&(r=h,l=rh(n,h))}if(l===1)throw l=oa,ls(n,0),Nr(n,r),Vn(n,Se()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,us(n,Hn,Qi),Vn(n,Se()),null}function oh(n,r){var l=Mt;Mt|=1;try{return n(r)}finally{Mt=l,Mt===0&&(js=Se()+500,ol&&br())}}function as(n){Dr!==null&&Dr.tag===0&&(Mt&6)===0&&Ys();var r=Mt;Mt|=1;var l=si.transition,h=Rt;try{if(si.transition=null,Rt=1,n)return n()}finally{Rt=h,si.transition=l,Mt=r,(Mt&6)===0&&br()}}function ah(){qn=Xs.current,zt(Xs)}function ls(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,M0(l)),qt!==null)for(l=qt.return;l!==null;){var h=l;switch(gc(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&rl();break;case 3:Vs(),zt(kn),zt(_n),Rc();break;case 5:bc(h);break;case 4:Vs();break;case 13:zt(Vt);break;case 19:zt(Vt);break;case 10:Mc(h.type._context);break;case 22:case 23:ah()}l=l.return}if(an=n,qt=n=Ur(n.current,null),fn=qn=r,en=0,oa=null,eh=bl=os=0,Hn=aa=null,is!==null){for(r=0;r<is.length;r++)if(l=is[r],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,h.next=T}l.pending=h}is=null}return n}function Lm(n,r){do{var l=qt;try{if(Sc(),gl.current=xl,_l){for(var h=Gt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}_l=!1}if(ss=0,on=Jt=Gt=null,ea=!1,ta=0,Jc.current=null,l===null||l.return===null){en=1,oa=r,qt=null;break}e:{var v=n,T=l.return,I=l,O=r;if(r=fn,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,_e=I,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=nm(T);if(Le!==null){Le.flags&=-257,im(Le,T,I,v,r),Le.mode&1&&tm(v,J,r),r=Le,O=J;var ke=r.updateQueue;if(ke===null){var ze=new Set;ze.add(O),r.updateQueue=ze}else ke.add(O);break e}else{if((r&1)===0){tm(v,J,r),lh();break e}O=Error(t(426))}}else if(Ht&&I.mode&1){var Yt=nm(T);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),im(Yt,T,I,v,r),yc(Gs(O,I));break e}}v=O=Gs(O,I),en!==4&&(en=2),aa===null?aa=[v]:aa.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var $=Jp(v,O,r);Ap(v,$);break e;case 1:I=O;var H=v.type,q=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Lr===null||!Lr.has(q)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=em(v,I,r);Ap(v,Ee);break e}}v=v.return}while(v!==null)}Nm(l)}catch(We){r=We,qt===l&&l!==null&&(qt=l=l.return);continue}break}while(!0)}function Dm(){var n=Al.current;return Al.current=xl,n===null?xl:n}function lh(){(en===0||en===3||en===2)&&(en=4),an===null||(os&268435455)===0&&(bl&268435455)===0||Nr(an,fn)}function Il(n,r){var l=Mt;Mt|=2;var h=Dm();(an!==n||fn!==r)&&(Qi=null,ls(n,r));do try{Y0();break}catch(p){Lm(n,p)}while(!0);if(Sc(),Mt=l,Al.current=h,qt!==null)throw Error(t(261));return an=null,fn=0,en}function Y0(){for(;qt!==null;)Im(qt)}function $0(){for(;qt!==null&&!X();)Im(qt)}function Im(n){var r=Om(n.alternate,n,qn);n.memoizedProps=n.pendingProps,r===null?Nm(n):qt=r,Jc.current=null}function Nm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=z0(l,r,qn),l!==null){qt=l;return}}else{if(l=H0(l,r),l!==null){l.flags&=32767,qt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,qt=null;return}}if(r=r.sibling,r!==null){qt=r;return}qt=r=n}while(r!==null);en===0&&(en=5)}function us(n,r,l){var h=Rt,p=si.transition;try{si.transition=null,Rt=1,q0(n,r,l,h)}finally{si.transition=p,Rt=h}return null}function q0(n,r,l,h){do Ys();while(Dr!==null);if((Mt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Ha(n,v),n===an&&(qt=an=null,fn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Rl||(Rl=!0,km(it,function(){return Ys(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=si.transition,si.transition=null;var T=Rt;Rt=1;var I=Mt;Mt|=4,Jc.current=null,G0(n,l),Tm(l,n),m0(lc),Wa=!!ac,lc=ac=null,n.current=l,W0(l),Te(),Mt=I,Rt=T,si.transition=v}else n.current=l;if(Rl&&(Rl=!1,Dr=n,Pl=p),v=n.pendingLanes,v===0&&(Lr=null),mn(l.stateNode),Vn(n,Se()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Cl)throw Cl=!1,n=nh,nh=null,n;return(Pl&1)!==0&&n.tag!==0&&Ys(),v=n.pendingLanes,(v&1)!==0?n===ih?la++:(la=0,ih=n):la=0,br(),null}function Ys(){if(Dr!==null){var n=Mf(Pl),r=si.transition,l=Rt;try{if(si.transition=null,Rt=16>n?16:n,Dr===null)var h=!1;else{if(n=Dr,Dr=null,Pl=0,(Mt&6)!==0)throw Error(t(331));var p=Mt;for(Mt|=4,Ue=n.current;Ue!==null;){var v=Ue,T=v.child;if((Ue.flags&16)!==0){var I=v.deletions;if(I!==null){for(var O=0;O<I.length;O++){var J=I[O];for(Ue=J;Ue!==null;){var _e=Ue;switch(_e.tag){case 0:case 11:case 15:sa(8,_e,v)}var ye=_e.child;if(ye!==null)ye.return=_e,Ue=ye;else for(;Ue!==null;){_e=Ue;var me=_e.sibling,Le=_e.return;if(ym(_e),_e===J){Ue=null;break}if(me!==null){me.return=Le,Ue=me;break}Ue=Le}}}var ke=v.alternate;if(ke!==null){var ze=ke.child;if(ze!==null){ke.child=null;do{var Yt=ze.sibling;ze.sibling=null,ze=Yt}while(ze!==null)}}Ue=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Ue=T;else e:for(;Ue!==null;){if(v=Ue,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:sa(9,v,v.return)}var $=v.sibling;if($!==null){$.return=v.return,Ue=$;break e}Ue=v.return}}var H=n.current;for(Ue=H;Ue!==null;){T=Ue;var q=T.child;if((T.subtreeFlags&2064)!==0&&q!==null)q.return=T,Ue=q;else e:for(T=H;Ue!==null;){if(I=Ue,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:wl(9,I)}}catch(We){Xt(I,I.return,We)}if(I===T){Ue=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Ue=Ee;break e}Ue=I.return}}if(Mt=p,br(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(wt,n)}catch{}h=!0}return h}finally{Rt=l,si.transition=r}}return!1}function Um(n,r,l){r=Gs(l,r),r=Jp(n,r,1),n=Rr(n,r,1),r=Pn(),n!==null&&(On(n,1,r),Vn(n,r))}function Xt(n,r,l){if(n.tag===3)Um(n,n,l);else for(;r!==null;){if(r.tag===3){Um(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Lr===null||!Lr.has(h))){n=Gs(l,n),n=em(r,n,1),r=Rr(r,n,1),n=Pn(),r!==null&&(On(r,1,n),Vn(r,n));break}}r=r.return}}function K0(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Pn(),n.pingedLanes|=n.suspendedLanes&l,an===n&&(fn&l)===l&&(en===4||en===3&&(fn&130023424)===fn&&500>Se()-th?ls(n,0):eh|=l),Vn(n,r)}function Fm(n,r){r===0&&((n.mode&1)===0?r=1:(r=di,di<<=1,(di&130023424)===0&&(di=4194304)));var l=Pn();n=qi(n,r),n!==null&&(On(n,r,l),Vn(n,l))}function Z0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Fm(n,l)}function Q0(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Fm(n,l)}var Om;Om=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||kn.current)zn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return zn=!1,B0(n,r,l);zn=(n.flags&131072)!==0}else zn=!1,Ht&&(r.flags&1048576)!==0&&gp(r,ll,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;El(n,r),n=r.pendingProps;var p=Us(r,_n.current);Hs(r,l),p=Dc(null,r,h,n,p,l);var v=Ic();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Bn(h)?(v=!0,sl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,wc(r),p.updater=Sl,r.stateNode=p,p._reactInternals=r,Bc(r,h,n,l),r=Gc(null,r,h,!0,v,l)):(r.tag=0,Ht&&v&&mc(r),Rn(null,r,p,l),r=r.child),r;case 16:h=r.elementType;e:{switch(El(n,r),n=r.pendingProps,p=h._init,h=p(h._payload),r.type=h,p=r.tag=ey(h),n=mi(h,n),p){case 0:r=Vc(null,r,h,n,l);break e;case 1:r=um(null,r,h,n,l);break e;case 11:r=rm(null,r,h,n,l);break e;case 14:r=sm(null,r,h,mi(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:mi(h,p),Vc(n,r,h,p,l);case 1:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:mi(h,p),um(n,r,h,p,l);case 3:e:{if(cm(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,p=v.element,wp(n,r),pl(r,h,null,l);var T=r.memoizedState;if(h=T.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Gs(Error(t(423)),r),r=hm(n,r,h,l,p);break e}else if(h!==p){p=Gs(Error(t(424)),r),r=hm(n,r,h,l,p);break e}else for($n=Tr(r.stateNode.containerInfo.firstChild),Yn=r,Ht=!0,pi=null,l=Ep(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),h===p){r=Zi(n,r,l);break e}Rn(n,r,h,l)}r=r.child}return r;case 5:return Cp(r),n===null&&vc(r),h=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,uc(h,p)?T=null:v!==null&&uc(h,v)&&(r.flags|=32),lm(n,r),Rn(n,r,T,l),r.child;case 6:return n===null&&vc(r),null;case 13:return dm(n,r,l);case 4:return Ac(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Bs(r,null,h,l):Rn(n,r,h,l),r.child;case 11:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:mi(h,p),rm(n,r,h,p,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,Ot(hl,h._currentValue),h._currentValue=T,v!==null)if(fi(v.value,T)){if(v.children===p.children&&!kn.current){r=Zi(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){T=v.child;for(var O=I.firstContext;O!==null;){if(O.context===h){if(v.tag===1){O=Ki(-1,l&-l),O.tag=2;var J=v.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),J.pending=O}}v.lanes|=l,O=v.alternate,O!==null&&(O.lanes|=l),Ec(v.return,l,r),I.lanes|=l;break}O=O.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,I=T.alternate,I!==null&&(I.lanes|=l),Ec(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Rn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,h=r.pendingProps.children,Hs(r,l),p=ii(p),h=h(p),r.flags|=1,Rn(n,r,h,l),r.child;case 14:return h=r.type,p=mi(h,r.pendingProps),p=mi(h.type,p),sm(n,r,h,p,l);case 15:return om(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:mi(h,p),El(n,r),r.tag=1,Bn(h)?(n=!0,sl(r)):n=!1,Hs(r,l),Zp(r,h,p),Bc(r,h,p,l),Gc(null,r,h,!0,n,l);case 19:return pm(n,r,l);case 22:return am(n,r,l)}throw Error(t(156,r.tag))};function km(n,r){return ee(n,r)}function J0(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,r,l,h){return new J0(n,r,l,h)}function uh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ey(n){if(typeof n=="function")return uh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===fe)return 14}return 2}function Ur(n,r){var l=n.alternate;return l===null?(l=oi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Nl(n,r,l,h,p,v){var T=2;if(h=n,typeof n=="function")uh(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return cs(l.children,p,v,r);case W:T=8,p|=8;break;case L:return n=oi(12,l,r,p|2),n.elementType=L,n.lanes=v,n;case K:return n=oi(13,l,r,p),n.elementType=K,n.lanes=v,n;case ue:return n=oi(19,l,r,p),n.elementType=ue,n.lanes=v,n;case le:return Ul(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:T=10;break e;case N:T=9;break e;case ie:T=11;break e;case fe:T=14;break e;case oe:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=oi(T,l,r,p),r.elementType=n,r.type=h,r.lanes=v,r}function cs(n,r,l,h){return n=oi(7,n,h,r),n.lanes=l,n}function Ul(n,r,l,h){return n=oi(22,n,h,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function ch(n,r,l){return n=oi(6,n,null,r),n.lanes=l,n}function hh(n,r,l){return r=oi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ty(n,r,l,h,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ei(0),this.expirationTimes=ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ei(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function dh(n,r,l,h,p,v,T,I,O){return n=new ty(n,r,l,I,O),r===1?(r=1,v===!0&&(r|=8)):r=0,v=oi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(v),n}function ny(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function Bm(n){if(!n)return Ar;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Bn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Bn(l))return fp(n,l,r)}return r}function zm(n,r,l,h,p,v,T,I,O){return n=dh(l,h,!0,n,p,v,T,I,O),n.context=Bm(null),l=n.current,h=Pn(),p=Ir(l),v=Ki(h,p),v.callback=r??null,Rr(l,v,p),n.current.lanes=p,On(n,p,h),Vn(n,h),n}function Fl(n,r,l,h){var p=r.current,v=Pn(),T=Ir(p);return l=Bm(l),r.context===null?r.context=l:r.pendingContext=l,r=Ki(v,T),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=Rr(p,r,T),n!==null&&(vi(n,p,T,v),fl(n,p,T)),T}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function fh(n,r){Hm(n,r),(n=n.alternate)&&Hm(n,r)}function iy(){return null}var Vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ph(n){this._internalRoot=n}kl.prototype.render=ph.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Fl(n,r,null,null)},kl.prototype.unmount=ph.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;as(function(){Fl(null,n,null,null)}),r[Xi]=null}};function kl(n){this._internalRoot=n}kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=wf();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Sr.length&&r!==0&&r<Sr[l].priority;l++);Sr.splice(l,0,n),l===0&&Cf(n)}};function mh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function ry(n,r,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var J=Ol(T);v.call(J)}}var T=zm(r,h,n,0,null,!1,!1,"",Gm);return n._reactRootContainer=T,n[Xi]=T.current,jo(n.nodeType===8?n.parentNode:n),as(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof h=="function"){var I=h;h=function(){var J=Ol(O);I.call(J)}}var O=dh(n,0,!1,null,null,!1,!1,"",Gm);return n._reactRootContainer=O,n[Xi]=O.current,jo(n.nodeType===8?n.parentNode:n),as(function(){Fl(r,O,l,h)}),O}function zl(n,r,l,h,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var I=p;p=function(){var O=Ol(T);I.call(O)}}Fl(r,T,n,p)}else T=ry(l,r,n,p,h);return Ol(T)}Ef=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Qt(r.pendingLanes);l!==0&&(Bu(r,l|1),Vn(r,Se()),(Mt&6)===0&&(js=Se()+500,br()))}break;case 13:as(function(){var h=qi(n,1);if(h!==null){var p=Pn();vi(h,n,1,p)}}),fh(n,1)}},zu=function(n){if(n.tag===13){var r=qi(n,134217728);if(r!==null){var l=Pn();vi(r,n,134217728,l)}fh(n,134217728)}},Tf=function(n){if(n.tag===13){var r=Ir(n),l=qi(n,r);if(l!==null){var h=Pn();vi(l,n,r,h)}fh(n,r)}},wf=function(){return Rt},Af=function(n,r){var l=Rt;try{return Rt=n,r()}finally{Rt=l}},be=function(n,r,l){switch(r){case"input":if(dt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var p=il(h);if(!p)throw Error(t(90));vt(h),dt(h,p)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&D(n,!!l.multiple,r,!1)}},kt=oh,Zt=as;var sy={usingClientEntryPoint:!1,Events:[qo,Is,il,Re,st,oh]},ua={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oy={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=C(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{wt=Hl.inject(oy),yt=Hl}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy,Gn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mh(r))throw Error(t(200));return ny(n,r,null,l)},Gn.createRoot=function(n,r){if(!mh(n))throw Error(t(299));var l=!1,h="",p=Vm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=dh(n,1,!1,null,null,l,!1,h,p),n[Xi]=r.current,jo(n.nodeType===8?n.parentNode:n),new ph(r)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=C(r),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return as(n)},Gn.hydrate=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!0,l)},Gn.hydrateRoot=function(n,r,l){if(!mh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",T=Vm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=zm(r,null,n,1,l??null,p,!1,v,T),n[Xi]=r.current,jo(n),h)for(n=0;n<h.length;n++)l=h[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new kl(r)},Gn.render=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!1,l)},Gn.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(t(40));return n._reactRootContainer?(as(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Gn.unstable_batchedUpdates=oh,Gn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Bl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zl(n,r,l,!1,h)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var Zm;function gy(){if(Zm)return vh.exports;Zm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vh.exports=my(),vh.exports}var Qm;function _y(){if(Qm)return Vl;Qm=1;var o=gy();return Vl.createRoot=o.createRoot,Vl.hydrateRoot=o.hydrateRoot,Vl}var vy=_y();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="170",ho={ROTATE:0,DOLLY:1,PAN:2},uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yy=0,Jm=1,xy=2,P_=1,Sy=2,or=3,fr=0,Xn=1,Mi=2,cr=0,fo=1,ad=2,eg=3,tg=4,My=5,ys=100,Ey=101,Ty=102,wy=103,Ay=104,by=200,Cy=201,Ry=202,Py=203,ld=204,ud=205,Ly=206,Dy=207,Iy=208,Ny=209,Uy=210,Fy=211,Oy=212,ky=213,By=214,cd=0,hd=1,dd=2,_o=3,fd=4,pd=5,md=6,gd=7,L_=0,zy=1,Hy=2,hr=0,D_=1,I_=2,N_=3,U_=4,Vy=5,wu=6,F_=7,ng="attached",Gy="detached",O_=300,vo=301,yo=302,_d=303,vd=304,Lu=306,xo=1e3,Yr=1001,Au=1002,Un=1003,k_=1004,xa=1005,Qn=1006,vu=1007,lr=1008,pr=1009,B_=1010,z_=1011,Ca=1012,tf=1013,Ss=1014,wi=1015,Fi=1016,nf=1017,rf=1018,So=1020,H_=35902,V_=1021,G_=1022,ui=1023,W_=1024,X_=1025,po=1026,Mo=1027,sf=1028,of=1029,j_=1030,af=1031,lf=1033,yu=33776,xu=33777,Su=33778,Mu=33779,yd=35840,xd=35841,Sd=35842,Md=35843,Ed=36196,Td=37492,wd=37496,Ad=37808,bd=37809,Cd=37810,Rd=37811,Pd=37812,Ld=37813,Dd=37814,Id=37815,Nd=37816,Ud=37817,Fd=37818,Od=37819,kd=37820,Bd=37821,Eu=36492,zd=36494,Hd=36495,Y_=36283,Vd=36284,Gd=36285,Wd=36286,Ra=2300,Pa=2301,Sh=2302,ig=2400,rg=2401,sg=2402,Wy=2500,Xy=0,$_=1,Xd=2,jy=3200,Yy=3201,q_=0,$y=1,jr="",jt="srgb",wn="srgb-linear",Du="linear",Pt="srgb",$s=7680,og=519,qy=512,Ky=513,Zy=514,K_=515,Qy=516,Jy=517,ex=518,tx=519,jd=35044,ag="300 es",ur=2e3,bu=2001;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lg=1234567;const Ta=Math.PI/180,Eo=180/Math.PI;function Ai(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[o&255]+Sn[o>>8&255]+Sn[o>>16&255]+Sn[o>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function pn(o,e,t){return Math.max(e,Math.min(t,o))}function uf(o,e){return(o%e+e)%e}function nx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function ix(o,e,t){return o!==e?(t-o)/(e-o):0}function wa(o,e,t){return(1-t)*o+t*e}function rx(o,e,t,i){return wa(o,e,1-Math.exp(-t*i))}function sx(o,e=1){return e-Math.abs(uf(o,e*2)-e)}function ox(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function ax(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function lx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ux(o,e){return o+Math.random()*(e-o)}function cx(o){return o*(.5-Math.random())}function hx(o){o!==void 0&&(lg=o);let e=lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dx(o){return o*Ta}function fx(o){return o*Eo}function px(o){return(o&o-1)===0&&o!==0}function mx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function gx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function _x(o,e,t,i,s){const a=Math.cos,u=Math.sin,c=a(t/2),d=u(t/2),f=a((e+i)/2),m=u((e+i)/2),g=a((e-i)/2),_=u((e-i)/2),x=a((i-e)/2),M=u((i-e)/2);switch(s){case"XYX":o.set(c*m,d*g,d*_,c*f);break;case"YZY":o.set(d*_,c*m,d*g,c*f);break;case"ZXZ":o.set(d*g,d*_,c*m,c*f);break;case"XZX":o.set(c*m,d*M,d*x,c*f);break;case"YXY":o.set(d*x,c*m,d*M,c*f);break;case"ZYZ":o.set(d*M,d*x,c*m,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Lt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Aa={DEG2RAD:Ta,RAD2DEG:Eo,generateUUID:Ai,clamp:pn,euclideanModulo:uf,mapLinear:nx,inverseLerp:ix,lerp:wa,damp:rx,pingpong:sx,smoothstep:ox,smootherstep:ax,randInt:lx,randFloat:ux,randFloatSpread:cx,seededRandom:hx,degToRad:dx,radToDeg:fx,isPowerOfTwo:px,ceilPowerOfTwo:mx,floorPowerOfTwo:gx,setQuaternionFromProperEuler:_x,normalize:Lt,denormalize:Ei};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*s+e.x,this.y=a*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,i,s,a,u,c,d,f){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,f)}set(e,t,i,s,a,u,c,d,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=t,m[4]=a,m[5]=d,m[6]=i,m[7]=u,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[3],d=i[6],f=i[1],m=i[4],g=i[7],_=i[2],x=i[5],M=i[8],E=s[0],S=s[3],y=s[6],R=s[1],P=s[4],b=s[7],Y=s[2],k=s[5],F=s[8];return a[0]=u*E+c*R+d*Y,a[3]=u*S+c*P+d*k,a[6]=u*y+c*b+d*F,a[1]=f*E+m*R+g*Y,a[4]=f*S+m*P+g*k,a[7]=f*y+m*b+g*F,a[2]=_*E+x*R+M*Y,a[5]=_*S+x*P+M*k,a[8]=_*y+x*b+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],f=e[7],m=e[8];return t*u*m-t*c*f-i*a*m+i*c*d+s*a*f-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],f=e[7],m=e[8],g=m*u-c*f,_=c*d-m*a,x=f*a-u*d,M=t*g+i*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*f-m*i)*E,e[2]=(c*i-s*u)*E,e[3]=_*E,e[4]=(m*t-s*d)*E,e[5]=(s*a-c*t)*E,e[6]=x*E,e[7]=(i*d-f*t)*E,e[8]=(u*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,u,c){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*u+f*c)+u+e,-s*f,s*d,-s*(-f*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new ut;function Z_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function La(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function vx(){const o=La("canvas");return o.style.display="block",o}const ug={};function Sa(o){o in ug||(ug[o]=!0,console.warn(o))}function yx(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function xx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gt={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(o.r=dr(o.r),o.g=dr(o.g),o.b=dr(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(o.r=mo(o.r),o.g=mo(o.g),o.b=mo(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===jr?Du:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function dr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const cg=[.64,.33,.3,.6,.15,.06],hg=[.2126,.7152,.0722],dg=[.3127,.329],fg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[wn]:{primaries:cg,whitePoint:dg,transfer:Du,toXYZ:fg,fromXYZ:pg,luminanceCoefficients:hg,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:cg,whitePoint:dg,transfer:Pt,toXYZ:fg,fromXYZ:pg,luminanceCoefficients:hg,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}});let qs;class Mx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=La("canvas")),qs.width=e.width,qs.height=e.height;const i=qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=dr(a[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ex=0;class Q_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(Eh(s[u].image)):a.push(Eh(s[u]))}else a=Eh(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Mx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tx=0;class cn extends Ms{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Yr,s=Yr,a=Qn,u=lr,c=ui,d=pr,f=cn.DEFAULT_ANISOTROPY,m=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Ai(),this.name="",this.source=new Q_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case Au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case Au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=O_;cn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,f=d[0],m=d[4],g=d[8],_=d[1],x=d[5],M=d[9],E=d[2],S=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,b=(x+1)/2,Y=(y+1)/2,k=(m+_)/4,F=(g+E)/4,W=(M+S)/4;return P>b&&P>Y?P<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(P),s=k/i,a=F/i):b>Y?b<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),i=k/s,a=W/s):Y<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(Y),i=F/a,s=W/a),this.set(i,s,a,t),this}let R=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(g-E)/R,this.z=(_-m)/R,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wx extends Ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Q_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends wx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class J_ extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ax extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,u,c){let d=i[s+0],f=i[s+1],m=i[s+2],g=i[s+3];const _=a[u+0],x=a[u+1],M=a[u+2],E=a[u+3];if(c===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==_||f!==x||m!==M){let S=1-c;const y=d*_+f*x+m*M+g*E,R=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const Y=Math.sqrt(P),k=Math.atan2(Y,y*R);S=Math.sin(S*k)/Y,c=Math.sin(c*k)/Y}const b=c*R;if(d=d*S+_*b,f=f*S+x*b,m=m*S+M*b,g=g*S+E*b,S===1-c){const Y=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=Y,f*=Y,m*=Y,g*=Y}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,u){const c=i[s],d=i[s+1],f=i[s+2],m=i[s+3],g=a[u],_=a[u+1],x=a[u+2],M=a[u+3];return e[t]=c*M+m*g+d*x-f*_,e[t+1]=d*M+m*_+f*g-c*x,e[t+2]=f*M+m*x+c*_-d*g,e[t+3]=m*M-c*g-d*_-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,f=c(i/2),m=c(s/2),g=c(a/2),_=d(i/2),x=d(s/2),M=d(a/2);switch(u){case"XYZ":this._x=_*m*g+f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g-_*x*M;break;case"YXZ":this._x=_*m*g+f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g+_*x*M;break;case"ZXY":this._x=_*m*g-f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g-_*x*M;break;case"ZYX":this._x=_*m*g-f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g+_*x*M;break;case"YZX":this._x=_*m*g+f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g-_*x*M;break;case"XZY":this._x=_*m*g-f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],u=t[1],c=t[5],d=t[9],f=t[2],m=t[6],g=t[10],_=i+c+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-d)*x,this._y=(a-f)*x,this._z=(u-s)*x}else if(i>c&&i>g){const x=2*Math.sqrt(1+i-c-g);this._w=(m-d)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(a+f)/x}else if(c>g){const x=2*Math.sqrt(1+c-i-g);this._w=(a-f)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-i-c);this._w=(u-s)/x,this._x=(a+f)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,u=e._w,c=t._x,d=t._y,f=t._z,m=t._w;return this._x=i*m+u*c+s*f-a*d,this._y=s*m+u*d+a*c-i*f,this._z=a*m+u*f+i*d-s*c,this._w=u*m-i*c-s*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,c),g=Math.sin((1-t)*m)/f,_=Math.sin(t*m)/f;return this._w=u*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,u=e.y,c=e.z,d=e.w,f=2*(u*s-c*i),m=2*(c*t-a*s),g=2*(a*i-u*t);return this.x=t+d*f+u*g-c*m,this.y=i+d*m+c*f-a*g,this.z=s+d*g+a*m-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Th=new z,mg=new bi;class mr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,yi):yi.fromBufferAttribute(a,u),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Wl.subVectors(this.max,ha),Ks.subVectors(e.a,ha),Zs.subVectors(e.b,ha),Qs.subVectors(e.c,ha),Or.subVectors(Zs,Ks),kr.subVectors(Qs,Zs),hs.subVectors(Ks,Qs);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-hs.z,hs.y,Or.z,0,-Or.x,kr.z,0,-kr.x,hs.z,0,-hs.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-hs.y,hs.x,0];return!wh(t,Ks,Zs,Qs,Wl)||(t=[1,0,0,0,1,0,0,0,1],!wh(t,Ks,Zs,Qs,Wl))?!1:(Xl.crossVectors(Or,kr),t=[Xl.x,Xl.y,Xl.z],wh(t,Ks,Zs,Qs,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new z,new z,new z,new z,new z,new z,new z,new z],yi=new z,Gl=new mr,Ks=new z,Zs=new z,Qs=new z,Or=new z,kr=new z,hs=new z,ha=new z,Wl=new z,Xl=new z,ds=new z;function wh(o,e,t,i,s){for(let a=0,u=o.length-3;a<=u;a+=3){ds.fromArray(o,a);const c=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),d=e.dot(ds),f=t.dot(ds),m=i.dot(ds);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>c)return!1}return!0}const bx=new mr,da=new z,Ah=new z;class Bi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bx.setFromPoints(e).getCenter(i);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(da,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Ah)),this.expandByPoint(da.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const er=new z,bh=new z,jl=new z,Br=new z,Ch=new z,Yl=new z,Rh=new z;class Na{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bh.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(bh);const a=e.distanceTo(t)*.5,u=-this.direction.dot(jl),c=Br.dot(this.direction),d=-Br.dot(jl),f=Br.lengthSq(),m=Math.abs(1-u*u);let g,_,x,M;if(m>0)if(g=u*d-c,_=u*c-d,M=a*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,x=g*(g+u*_+2*c)+_*(u*g+_+2*d)+f}else _=a,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+f;else _=-a,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+f;else _<=-M?(g=Math.max(0,-(-u*a+c)),_=g>0?-a:Math.min(Math.max(-a,-d),a),x=-g*g+_*(_+2*d)+f):_<=M?(g=0,_=Math.min(Math.max(-a,-d),a),x=_*(_+2*d)+f):(g=Math.max(0,-(u*a+c)),_=g>0?a:Math.min(Math.max(-a,-d),a),x=-g*g+_*(_+2*d)+f);else _=u>0?-a:a,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(bh).addScaledVector(jl,_),x}intersectSphere(e,t){er.subVectors(e.center,this.origin);const i=er.dot(this.direction),s=er.dot(er)-i*i,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,u,c,d;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(i=(e.min.x-_.x)*f,s=(e.max.x-_.x)*f):(i=(e.max.x-_.x)*f,s=(e.min.x-_.x)*f),m>=0?(a=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),i>u||a>s||((a>i||isNaN(i))&&(i=a),(u<s||isNaN(s))&&(s=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,i,s,a){Ch.subVectors(t,e),Yl.subVectors(i,e),Rh.crossVectors(Ch,Yl);let u=this.direction.dot(Rh),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Br.subVectors(this.origin,e);const d=c*this.direction.dot(Yl.crossVectors(Br,Yl));if(d<0)return null;const f=c*this.direction.dot(Ch.cross(Br));if(f<0||d+f>u)return null;const m=-c*Br.dot(Rh);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,a,u,c,d,f,m,g,_,x,M,E,S){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,f,m,g,_,x,M,E,S)}set(e,t,i,s,a,u,c,d,f,m,g,_,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=a,y[5]=u,y[9]=c,y[13]=d,y[2]=f,y[6]=m,y[10]=g,y[14]=_,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),a=1/Js.setFromMatrixColumn(e,1).length(),u=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),f=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=u*m,x=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=x+M*f,t[5]=_-E*f,t[9]=-c*d,t[2]=E-_*f,t[6]=M+x*f,t[10]=u*d}else if(e.order==="YXZ"){const _=d*m,x=d*g,M=f*m,E=f*g;t[0]=_+E*c,t[4]=M*c-x,t[8]=u*f,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-M,t[6]=E+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*m,x=d*g,M=f*m,E=f*g;t[0]=_-E*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*m,t[9]=E-_*c,t[2]=-u*f,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*m,x=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=M*f-x,t[8]=_*f+E,t[1]=d*g,t[5]=E*f+_,t[9]=x*f-M,t[2]=-f,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,x=u*f,M=c*d,E=c*f;t[0]=d*m,t[4]=E-_*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-f*m,t[6]=x*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=u*d,x=u*f,M=c*d,E=c*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=_*g+E,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cx,e,Rx)}lookAt(e,t,i){const s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),zr.crossVectors(i,Kn),zr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),zr.crossVectors(i,Kn)),zr.normalize(),$l.crossVectors(Kn,zr),s[0]=zr.x,s[4]=$l.x,s[8]=Kn.x,s[1]=zr.y,s[5]=$l.y,s[9]=Kn.y,s[2]=zr.z,s[6]=$l.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[4],d=i[8],f=i[12],m=i[1],g=i[5],_=i[9],x=i[13],M=i[2],E=i[6],S=i[10],y=i[14],R=i[3],P=i[7],b=i[11],Y=i[15],k=s[0],F=s[4],W=s[8],L=s[12],A=s[1],N=s[5],ie=s[9],K=s[13],ue=s[2],fe=s[6],oe=s[10],le=s[14],B=s[3],ae=s[7],se=s[11],U=s[15];return a[0]=u*k+c*A+d*ue+f*B,a[4]=u*F+c*N+d*fe+f*ae,a[8]=u*W+c*ie+d*oe+f*se,a[12]=u*L+c*K+d*le+f*U,a[1]=m*k+g*A+_*ue+x*B,a[5]=m*F+g*N+_*fe+x*ae,a[9]=m*W+g*ie+_*oe+x*se,a[13]=m*L+g*K+_*le+x*U,a[2]=M*k+E*A+S*ue+y*B,a[6]=M*F+E*N+S*fe+y*ae,a[10]=M*W+E*ie+S*oe+y*se,a[14]=M*L+E*K+S*le+y*U,a[3]=R*k+P*A+b*ue+Y*B,a[7]=R*F+P*N+b*fe+Y*ae,a[11]=R*W+P*ie+b*oe+Y*se,a[15]=R*L+P*K+b*le+Y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],u=e[1],c=e[5],d=e[9],f=e[13],m=e[2],g=e[6],_=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+a*d*g-s*f*g-a*c*_+i*f*_+s*c*x-i*d*x)+E*(+t*d*x-t*f*_+a*u*_-s*u*x+s*f*m-a*d*m)+S*(+t*f*g-t*c*x-a*u*g+i*u*x+a*c*m-i*f*m)+y*(-s*c*m-t*d*g+t*c*_+s*u*g-i*u*_+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],f=e[7],m=e[8],g=e[9],_=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],R=g*S*f-E*_*f+E*d*x-c*S*x-g*d*y+c*_*y,P=M*_*f-m*S*f-M*d*x+u*S*x+m*d*y-u*_*y,b=m*E*f-M*g*f+M*c*x-u*E*x-m*c*y+u*g*y,Y=M*g*d-m*E*d-M*c*_+u*E*_+m*c*S-u*g*S,k=t*R+i*P+s*b+a*Y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=R*F,e[1]=(E*_*a-g*S*a-E*s*x+i*S*x+g*s*y-i*_*y)*F,e[2]=(c*S*a-E*d*a+E*s*f-i*S*f-c*s*y+i*d*y)*F,e[3]=(g*d*a-c*_*a-g*s*f+i*_*f+c*s*x-i*d*x)*F,e[4]=P*F,e[5]=(m*S*a-M*_*a+M*s*x-t*S*x-m*s*y+t*_*y)*F,e[6]=(M*d*a-u*S*a-M*s*f+t*S*f+u*s*y-t*d*y)*F,e[7]=(u*_*a-m*d*a+m*s*f-t*_*f-u*s*x+t*d*x)*F,e[8]=b*F,e[9]=(M*g*a-m*E*a-M*i*x+t*E*x+m*i*y-t*g*y)*F,e[10]=(u*E*a-M*c*a+M*i*f-t*E*f-u*i*y+t*c*y)*F,e[11]=(m*c*a-u*g*a-m*i*f+t*g*f+u*i*x-t*c*x)*F,e[12]=Y*F,e[13]=(m*E*s-M*g*s+M*i*_-t*E*_-m*i*S+t*g*S)*F,e[14]=(M*c*s-u*E*s-M*i*d+t*E*d+u*i*S-t*c*S)*F,e[15]=(u*g*s-m*c*s+m*i*d-t*g*d-u*i*_+t*c*_)*F,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,u=e.x,c=e.y,d=e.z,f=a*u,m=a*c;return this.set(f*u+i,f*c-s*d,f*d+s*c,0,f*c+s*d,m*c+i,m*d-s*u,0,f*d-s*c,m*d+s*u,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,u){return this.set(1,i,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,f=a+a,m=u+u,g=c+c,_=a*f,x=a*m,M=a*g,E=u*m,S=u*g,y=c*g,R=d*f,P=d*m,b=d*g,Y=i.x,k=i.y,F=i.z;return s[0]=(1-(E+y))*Y,s[1]=(x+b)*Y,s[2]=(M-P)*Y,s[3]=0,s[4]=(x-b)*k,s[5]=(1-(_+y))*k,s[6]=(S+R)*k,s[7]=0,s[8]=(M+P)*F,s[9]=(S-R)*F,s[10]=(1-(_+E))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Js.set(s[0],s[1],s[2]).length();const u=Js.set(s[4],s[5],s[6]).length(),c=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],xi.copy(this);const f=1/a,m=1/u,g=1/c;return xi.elements[0]*=f,xi.elements[1]*=f,xi.elements[2]*=f,xi.elements[4]*=m,xi.elements[5]*=m,xi.elements[6]*=m,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,t.setFromRotationMatrix(xi),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,s,a,u,c=ur){const d=this.elements,f=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let x,M;if(c===ur)x=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===bu)x=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,u,c=ur){const d=this.elements,f=1/(t-e),m=1/(i-s),g=1/(u-a),_=(t+e)*f,x=(i+s)*m;let M,E;if(c===ur)M=(u+a)*g,E=-2*g;else if(c===bu)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Js=new z,xi=new at,Cx=new z(0,0,0),Rx=new z(1,1,1),zr=new z,$l=new z,Kn=new z,gg=new at,_g=new bi;class Ci{constructor(e=0,t=0,i=0,s=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],d=s[1],f=s[5],m=s[9],g=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(pn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Px=0;const vg=new z,eo=new bi,tr=new at,ql=new z,fa=new z,Lx=new z,Dx=new bi,yg=new z(1,0,0),xg=new z(0,1,0),Sg=new z(0,0,1),Mg={type:"added"},Ix={type:"removed"},to={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Wt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new z,t=new Ci,i=new bi,s=new z(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ut}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ql.copy(e):ql.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(fa,ql,this.up):tr.lookAt(ql,fa,this.up),this.quaternion.setFromRotationMatrix(tr),s&&(tr.extractRotation(s.matrixWorld),eo.setFromRotationMatrix(tr),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mg),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ix),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mg),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,Lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),f=u(e.textures),m=u(e.images),g=u(e.shapes),_=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function u(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new z(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new z,nr=new z,Lh=new z,ir=new z,no=new z,io=new z,Eg=new z,Dh=new z,Ih=new z,Nh=new z,Uh=new At,Fh=new At,Oh=new At;class Ti{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Si.subVectors(e,t),s.cross(Si);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Si.subVectors(s,t),nr.subVectors(i,t),Lh.subVectors(e,t);const u=Si.dot(Si),c=Si.dot(nr),d=Si.dot(Lh),f=nr.dot(nr),m=nr.dot(Lh),g=u*f-c*c;if(g===0)return a.set(0,0,0),null;const _=1/g,x=(f*d-c*m)*_,M=(u*m-c*d)*_;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,s,a,u,c,d){return this.getBarycoord(e,t,i,s,ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ir.x),d.addScaledVector(u,ir.y),d.addScaledVector(c,ir.z),d)}static getInterpolatedAttribute(e,t,i,s,a,u){return Uh.setScalar(0),Fh.setScalar(0),Oh.setScalar(0),Uh.fromBufferAttribute(e,t),Fh.fromBufferAttribute(e,i),Oh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Uh,a.x),u.addScaledVector(Fh,a.y),u.addScaledVector(Oh,a.z),u}static isFrontFacing(e,t,i,s){return Si.subVectors(i,t),nr.subVectors(e,t),Si.cross(nr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Si.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ti.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let u,c;no.subVectors(s,i),io.subVectors(a,i),Dh.subVectors(e,i);const d=no.dot(Dh),f=io.dot(Dh);if(d<=0&&f<=0)return t.copy(i);Ih.subVectors(e,s);const m=no.dot(Ih),g=io.dot(Ih);if(m>=0&&g<=m)return t.copy(s);const _=d*g-m*f;if(_<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(i).addScaledVector(no,u);Nh.subVectors(e,a);const x=no.dot(Nh),M=io.dot(Nh);if(M>=0&&x<=M)return t.copy(a);const E=x*f-d*M;if(E<=0&&f>=0&&M<=0)return c=f/(f-M),t.copy(i).addScaledVector(io,c);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return Eg.subVectors(a,s),c=(g-m)/(g-m+(x-M)),t.copy(s).addScaledVector(Eg,c);const y=1/(S+E+_);return u=E*y,c=_*y,t.copy(i).addScaledVector(no,u).addScaledVector(io,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function kh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=uf(e,1),t=pn(t,0,1),i=pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=kh(u,a,e+1/3),this.g=kh(u,a,e),this.b=kh(u,a,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=tv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return gt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(pn(Mn.r*255,0,255))*65536+Math.round(pn(Mn.g*255,0,255))*256+Math.round(pn(Mn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Mn.copy(this),t);const i=Mn.r,s=Mn.g,a=Mn.b,u=Math.max(i,s,a),c=Math.min(i,s,a);let d,f;const m=(c+u)/2;if(c===u)d=0,f=0;else{const g=u-c;switch(f=m<=.5?g/(u+c):g/(2-u-c),u){case i:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-i)/g+2;break;case a:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=jt){gt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,i=Mn.g,s=Mn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Kl);const i=wa(Hr.h,Kl.h,t),s=wa(Hr.s,Kl.s,t),a=wa(Hr.l,Kl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new $e;$e.NAMES=tv;let Nx=0;class Oi extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Ai(),this.name="",this.blending=fo,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=ud,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==og&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $r extends Oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new z,Zl=new Ye;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jd,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zl.fromBufferAttribute(this,t),Zl.applyMatrix3(e),this.setXY(t,Zl.x,Zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jd&&(e.usage=this.usage),e}}class nv extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class iv extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ux=0;const ai=new at,Bh=new Wt,ro=new z,Zn=new mr,pa=new mr,un=new z;class Tn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ut().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new En(i,3))}else{for(let i=0,s=t.count;i<s;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];pa.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(Zn.min,pa.min),Zn.expandByPoint(un),un.addVectors(Zn.max,pa.max),Zn.expandByPoint(un)):(Zn.expandByPoint(pa.min),Zn.expandByPoint(pa.max))}Zn.getCenter(i);let s=0;for(let a=0,u=e.count;a<u;a++)un.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(un));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let f=0,m=c.count;f<m;f++)un.fromBufferAttribute(c,f),d&&(ro.fromBufferAttribute(e,f),un.add(ro)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let W=0;W<i.count;W++)c[W]=new z,d[W]=new z;const f=new z,m=new z,g=new z,_=new Ye,x=new Ye,M=new Ye,E=new z,S=new z;function y(W,L,A){f.fromBufferAttribute(i,W),m.fromBufferAttribute(i,L),g.fromBufferAttribute(i,A),_.fromBufferAttribute(a,W),x.fromBufferAttribute(a,L),M.fromBufferAttribute(a,A),m.sub(f),g.sub(f),x.sub(_),M.sub(_);const N=1/(x.x*M.y-M.x*x.y);isFinite(N)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(N),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(N),c[W].add(E),c[L].add(E),c[A].add(E),d[W].add(S),d[L].add(S),d[A].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let W=0,L=R.length;W<L;++W){const A=R[W],N=A.start,ie=A.count;for(let K=N,ue=N+ie;K<ue;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new z,b=new z,Y=new z,k=new z;function F(W){Y.fromBufferAttribute(s,W),k.copy(Y);const L=c[W];P.copy(L),P.sub(Y.multiplyScalar(Y.dot(L))).normalize(),b.crossVectors(k,L);const N=b.dot(d[W])<0?-1:1;u.setXYZW(W,P.x,P.y,P.z,N)}for(let W=0,L=R.length;W<L;++W){const A=R[W],N=A.start,ie=A.count;for(let K=N,ue=N+ie;K<ue;K+=3)F(e.getX(K+0)),F(e.getX(K+1)),F(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new z,a=new z,u=new z,c=new z,d=new z,f=new z,m=new z,g=new z;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),m.subVectors(u,a),g.subVectors(s,a),m.cross(g),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),c.add(m),d.add(m),f.add(m),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(S,f.x,f.y,f.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(c,d){const f=c.array,m=c.itemSize,g=c.normalized,_=new f.constructor(d.length*m);let x=0,M=0;for(let E=0,S=d.length;E<S;E++){c.isInterleavedBufferAttribute?x=d[E]*c.data.stride+c.offset:x=d[E]*m;for(let y=0;y<m;y++)_[M++]=f[x++]}return new hn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],f=e(d,i);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const d=[],f=a[c];for(let m=0,g=f.length;m<g;m++){const _=f[m],x=e(_,i);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let g=0,_=f.length;g<_;g++){const x=f[g];m.push(x.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,m=u.length;f<m;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new at,fs=new Na,Ql=new Bi,wg=new z,Jl=new z,eu=new z,tu=new z,zh=new z,nu=new z,Ag=new z,iu=new z;class Nn extends Wt{constructor(e=new Tn,t=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){nu.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const m=c[d],g=a[d];m!==0&&(zh.fromBufferAttribute(g,e),u?nu.addScaledVector(zh,m):nu.addScaledVector(zh.sub(t),m))}t.add(nu)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(a),fs.copy(e.ray).recast(e.near),!(Ql.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Ql,wg)===null||fs.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Tg.copy(a).invert(),fs.copy(e.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=u[S.materialIndex],R=Math.max(S.start,x.start),P=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let b=R,Y=P;b<Y;b+=3){const k=c.getX(b),F=c.getX(b+1),W=c.getX(b+2);s=ru(this,y,e,i,f,m,g,k,F,W),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(c.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const R=c.getX(S),P=c.getX(S+1),b=c.getX(S+2);s=ru(this,u,e,i,f,m,g,R,P,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=u[S.materialIndex],R=Math.max(S.start,x.start),P=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let b=R,Y=P;b<Y;b+=3){const k=b,F=b+1,W=b+2;s=ru(this,y,e,i,f,m,g,k,F,W),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const R=S,P=S+1,b=S+2;s=ru(this,u,e,i,f,m,g,R,P,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Fx(o,e,t,i,s,a,u,c){let d;if(e.side===Xn?d=i.intersectTriangle(u,a,s,!0,c):d=i.intersectTriangle(s,a,u,e.side===fr,c),d===null)return null;iu.copy(c),iu.applyMatrix4(o.matrixWorld);const f=t.ray.origin.distanceTo(iu);return f<t.near||f>t.far?null:{distance:f,point:iu.clone(),object:o}}function ru(o,e,t,i,s,a,u,c,d,f){o.getVertexPosition(c,Jl),o.getVertexPosition(d,eu),o.getVertexPosition(f,tu);const m=Fx(o,e,t,i,Jl,eu,tu,Ag);if(m){const g=new z;Ti.getBarycoord(Ag,Jl,eu,tu,g),s&&(m.uv=Ti.getInterpolatedAttribute(s,c,d,f,g,new Ye)),a&&(m.uv1=Ti.getInterpolatedAttribute(a,c,d,f,g,new Ye)),u&&(m.normal=Ti.getInterpolatedAttribute(u,c,d,f,g,new z),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:c,b:d,c:f,normal:new z,materialIndex:0};Ti.getNormal(Jl,eu,tu,_.normal),m.face=_,m.barycoord=g}return m}class Ua extends Tn{constructor(e=1,t=1,i=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const d=[],f=[],m=[],g=[];let _=0,x=0;M("z","y","x",-1,-1,i,t,e,u,a,0),M("z","y","x",1,-1,i,t,-e,u,a,1),M("x","z","y",1,1,e,i,t,s,u,2),M("x","z","y",1,-1,e,i,-t,s,u,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new En(f,3)),this.setAttribute("normal",new En(m,3)),this.setAttribute("uv",new En(g,2));function M(E,S,y,R,P,b,Y,k,F,W,L){const A=b/F,N=Y/W,ie=b/2,K=Y/2,ue=k/2,fe=F+1,oe=W+1;let le=0,B=0;const ae=new z;for(let se=0;se<oe;se++){const U=se*N-K;for(let ne=0;ne<fe;ne++){const De=ne*A-ie;ae[E]=De*R,ae[S]=U*P,ae[y]=ue,f.push(ae.x,ae.y,ae.z),ae[E]=0,ae[S]=0,ae[y]=k>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ne/F),g.push(1-se/W),le+=1}}for(let se=0;se<W;se++)for(let U=0;U<F;U++){const ne=_+U+fe*se,De=_+U+fe*(se+1),Q=_+(U+1)+fe*(se+1),ce=_+(U+1)+fe*se;d.push(ne,De,ce),d.push(De,Q,ce),B+=6}c.addGroup(x,B,L),x+=B,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(o){const e={};for(let t=0;t<o.length;t++){const i=To(o[t]);for(const s in i)e[s]=i[s]}return e}function Ox(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Da={clone:To,merge:Dn};var kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sv extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new z,bg=new Ye,Cg=new Ye;class In extends sv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,bg,Cg),t.subVectors(Cg,bg)}setViewOffset(e,t,i,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,f=u.fullHeight;a+=u.offsetX*s/d,t-=u.offsetY*i/f,s*=u.width/d,i*=u.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class zx extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(so,oo,e,t);s.layers=this.layers,this.add(s);const a=new In(so,oo,e,t);a.layers=this.layers,this.add(a);const u=new In(so,oo,e,t);u.layers=this.layers,this.add(u);const c=new In(so,oo,e,t);c.layers=this.layers,this.add(c);const d=new In(so,oo,e,t);d.layers=this.layers,this.add(d);const f=new In(so,oo,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,u,c,d]=t;for(const f of t)this.remove(f);if(e===ur)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===bu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,f,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class ov extends cn{constructor(e,t,i,s,a,u,c,d,f,m){e=e!==void 0?e:[],t=t!==void 0?t:vo,super(e,t,i,s,a,u,c,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hx extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ov(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ua(5,5,5),a=new nn({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:cr});a.uniforms.tEquirect.value=t;const u=new Nn(s,a),c=t.minFilter;return t.minFilter===lr&&(t.minFilter=Qn),new zx(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(a)}}const Hh=new z,Vx=new z,Gx=new ut;class Xr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Hh.subVectors(i,t).cross(Vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gx.getNormalMatrix(e),s=this.coplanarPoint(Hh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Bi,su=new z;class cf{constructor(e=new Xr,t=new Xr,i=new Xr,s=new Xr,a=new Xr,u=new Xr){this.planes=[e,t,i,s,a,u]}set(e,t,i,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ur){const i=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],d=s[3],f=s[4],m=s[5],g=s[6],_=s[7],x=s[8],M=s[9],E=s[10],S=s[11],y=s[12],R=s[13],P=s[14],b=s[15];if(i[0].setComponents(d-a,_-f,S-x,b-y).normalize(),i[1].setComponents(d+a,_+f,S+x,b+y).normalize(),i[2].setComponents(d+u,_+m,S+M,b+R).normalize(),i[3].setComponents(d-u,_-m,S-M,b-R).normalize(),i[4].setComponents(d-c,_-g,S-E,b-P).normalize(),t===ur)i[5].setComponents(d+c,_+g,S+E,b+P).normalize();else if(t===bu)i[5].setComponents(c,g,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(su.x=s.normal.x>0?e.max.x:e.min.x,su.y=s.normal.y>0?e.max.y:e.min.y,su.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function av(){let o=null,e=!1,t=null,i=null;function s(a,u){t(a,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function Wx(o){const e=new WeakMap;function t(c,d){const f=c.array,m=c.usage,g=f.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,f,m),c.onUploadCallback();let x;if(f instanceof Float32Array)x=o.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=o.SHORT;else if(f instanceof Uint32Array)x=o.UNSIGNED_INT;else if(f instanceof Int32Array)x=o.INT;else if(f instanceof Int8Array)x=o.BYTE;else if(f instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,d,f){const m=d.array,g=d.updateRanges;if(o.bindBuffer(f,c),g.length===0)o.bufferSubData(f,0,m);else{g.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<g.length;x++){const M=g[_],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];o.bufferSubData(f,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,c,d),f.version=c.version}}return{get:s,remove:a,update:u}}class Iu extends Tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),f=c+1,m=d+1,g=e/c,_=t/d,x=[],M=[],E=[],S=[];for(let y=0;y<m;y++){const R=y*_-u;for(let P=0;P<f;P++){const b=P*g-a;M.push(b,-R,0),E.push(0,0,1),S.push(P/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let R=0;R<c;R++){const P=R+f*y,b=R+f*(y+1),Y=R+1+f*(y+1),k=R+1+f*y;x.push(P,b,k),x.push(b,Y,k)}this.setIndex(x),this.setAttribute("position",new En(M,3)),this.setAttribute("normal",new En(E,3)),this.setAttribute("uv",new En(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SS="gl_FragColor = linearToOutputTexel( gl_FragColor );",MS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ES=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ME=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:Xx,alphahash_pars_fragment:jx,alphamap_fragment:Yx,alphamap_pars_fragment:$x,alphatest_fragment:qx,alphatest_pars_fragment:Kx,aomap_fragment:Zx,aomap_pars_fragment:Qx,batching_pars_vertex:Jx,batching_vertex:eS,begin_vertex:tS,beginnormal_vertex:nS,bsdfs:iS,iridescence_fragment:rS,bumpmap_pars_fragment:sS,clipping_planes_fragment:oS,clipping_planes_pars_fragment:aS,clipping_planes_pars_vertex:lS,clipping_planes_vertex:uS,color_fragment:cS,color_pars_fragment:hS,color_pars_vertex:dS,color_vertex:fS,common:pS,cube_uv_reflection_fragment:mS,defaultnormal_vertex:gS,displacementmap_pars_vertex:_S,displacementmap_vertex:vS,emissivemap_fragment:yS,emissivemap_pars_fragment:xS,colorspace_fragment:SS,colorspace_pars_fragment:MS,envmap_fragment:ES,envmap_common_pars_fragment:TS,envmap_pars_fragment:wS,envmap_pars_vertex:AS,envmap_physical_pars_fragment:OS,envmap_vertex:bS,fog_vertex:CS,fog_pars_vertex:RS,fog_fragment:PS,fog_pars_fragment:LS,gradientmap_pars_fragment:DS,lightmap_pars_fragment:IS,lights_lambert_fragment:NS,lights_lambert_pars_fragment:US,lights_pars_begin:FS,lights_toon_fragment:kS,lights_toon_pars_fragment:BS,lights_phong_fragment:zS,lights_phong_pars_fragment:HS,lights_physical_fragment:VS,lights_physical_pars_fragment:GS,lights_fragment_begin:WS,lights_fragment_maps:XS,lights_fragment_end:jS,logdepthbuf_fragment:YS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:KS,map_fragment:ZS,map_pars_fragment:QS,map_particle_fragment:JS,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:rM,morphnormal_vertex:sM,morphtarget_pars_vertex:oM,morphtarget_vertex:aM,normal_fragment_begin:lM,normal_fragment_maps:uM,normal_pars_fragment:cM,normal_pars_vertex:hM,normal_vertex:dM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:_M,opaque_fragment:vM,packing:yM,premultiplied_alpha_fragment:xM,project_vertex:SM,dithering_fragment:MM,dithering_pars_fragment:EM,roughnessmap_fragment:TM,roughnessmap_pars_fragment:wM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:bM,shadowmap_vertex:CM,shadowmask_pars_fragment:RM,skinbase_vertex:PM,skinning_pars_vertex:LM,skinning_vertex:DM,skinnormal_vertex:IM,specularmap_fragment:NM,specularmap_pars_fragment:UM,tonemapping_fragment:FM,tonemapping_pars_fragment:OM,transmission_fragment:kM,transmission_pars_fragment:BM,uv_pars_fragment:zM,uv_pars_vertex:HM,uv_vertex:VM,worldpos_vertex:GM,background_vert:WM,background_frag:XM,backgroundCube_vert:jM,backgroundCube_frag:YM,cube_vert:$M,cube_frag:qM,depth_vert:KM,depth_frag:ZM,distanceRGBA_vert:QM,distanceRGBA_frag:JM,equirect_vert:eE,equirect_frag:tE,linedashed_vert:nE,linedashed_frag:iE,meshbasic_vert:rE,meshbasic_frag:sE,meshlambert_vert:oE,meshlambert_frag:aE,meshmatcap_vert:lE,meshmatcap_frag:uE,meshnormal_vert:cE,meshnormal_frag:hE,meshphong_vert:dE,meshphong_frag:fE,meshphysical_vert:pE,meshphysical_frag:mE,meshtoon_vert:gE,meshtoon_frag:_E,points_vert:vE,points_frag:yE,shadow_vert:xE,shadow_frag:SE,sprite_vert:ME,sprite_frag:EE},Ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ui={basic:{uniforms:Dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Dn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Dn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Dn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Dn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Dn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Dn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Dn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Dn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Dn([Ce.common,Ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Dn([Ce.lights,Ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ui.physical={uniforms:Dn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const ou={r:0,b:0,g:0},ms=new Ci,TE=new at;function wE(o,e,t,i,s,a,u){const c=new $e(0);let d=a===!0?0:1,f,m,g=null,_=0,x=null;function M(R){let P=R.isScene===!0?R.background:null;return P&&P.isTexture&&(P=(R.backgroundBlurriness>0?t:e).get(P)),P}function E(R){let P=!1;const b=M(R);b===null?y(c,d):b&&b.isColor&&(y(b,1),P=!0);const Y=o.xr.getEnvironmentBlendMode();Y==="additive"?i.buffers.color.setClear(0,0,0,1,u):Y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(R,P){const b=M(P);b&&(b.isCubeTexture||b.mapping===Lu)?(m===void 0&&(m=new Nn(new Ua(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:To(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(Y,k,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ms.copy(P.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(TE.makeRotationFromEuler(ms)),m.material.toneMapped=gt.getTransfer(b.colorSpace)!==Pt,(g!==b||_!==b.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=b,_=b.version,x=o.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(f===void 0&&(f=new Nn(new Iu(2,2),new nn({name:"BackgroundMaterial",uniforms:To(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=b,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=gt.getTransfer(b.colorSpace)!==Pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),f.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||_!==b.version||x!==o.toneMapping)&&(f.material.needsUpdate=!0,g=b,_=b.version,x=o.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function y(R,P){R.getRGB(ou,rv(o)),i.buffers.color.setClear(ou.r,ou.g,ou.b,P,u)}return{getClearColor:function(){return c},setClearColor:function(R,P=1){c.set(R),d=P,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,y(c,d)},render:E,addToRenderList:S}}function AE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,u=!1;function c(A,N,ie,K,ue){let fe=!1;const oe=g(K,ie,N);a!==oe&&(a=oe,f(a.object)),fe=x(A,K,ie,ue),fe&&M(A,K,ie,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,b(A,N,ie,K),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return o.createVertexArray()}function f(A){return o.bindVertexArray(A)}function m(A){return o.deleteVertexArray(A)}function g(A,N,ie){const K=ie.wireframe===!0;let ue=i[A.id];ue===void 0&&(ue={},i[A.id]=ue);let fe=ue[N.id];fe===void 0&&(fe={},ue[N.id]=fe);let oe=fe[K];return oe===void 0&&(oe=_(d()),fe[K]=oe),oe}function _(A){const N=[],ie=[],K=[];for(let ue=0;ue<t;ue++)N[ue]=0,ie[ue]=0,K[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:ie,attributeDivisors:K,object:A,attributes:{},index:null}}function x(A,N,ie,K){const ue=a.attributes,fe=N.attributes;let oe=0;const le=ie.getAttributes();for(const B in le)if(le[B].location>=0){const se=ue[B];let U=fe[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;oe++}return a.attributesNum!==oe||a.index!==K}function M(A,N,ie,K){const ue={},fe=N.attributes;let oe=0;const le=ie.getAttributes();for(const B in le)if(le[B].location>=0){let se=fe[B];se===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),ue[B]=U,oe++}a.attributes=ue,a.attributesNum=oe,a.index=K}function E(){const A=a.newAttributes;for(let N=0,ie=A.length;N<ie;N++)A[N]=0}function S(A){y(A,0)}function y(A,N){const ie=a.newAttributes,K=a.enabledAttributes,ue=a.attributeDivisors;ie[A]=1,K[A]===0&&(o.enableVertexAttribArray(A),K[A]=1),ue[A]!==N&&(o.vertexAttribDivisor(A,N),ue[A]=N)}function R(){const A=a.newAttributes,N=a.enabledAttributes;for(let ie=0,K=N.length;ie<K;ie++)N[ie]!==A[ie]&&(o.disableVertexAttribArray(ie),N[ie]=0)}function P(A,N,ie,K,ue,fe,oe){oe===!0?o.vertexAttribIPointer(A,N,ie,ue,fe):o.vertexAttribPointer(A,N,ie,K,ue,fe)}function b(A,N,ie,K){E();const ue=K.attributes,fe=ie.getAttributes(),oe=N.defaultAttributeValues;for(const le in fe){const B=fe[le];if(B.location>=0){let ae=ue[le];if(ae===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const se=ae.normalized,U=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const De=ne.buffer,Q=ne.type,ce=ne.bytesPerElement,Me=Q===o.INT||Q===o.UNSIGNED_INT||ae.gpuType===tf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,we=ve.stride,Ie=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<B.locationSize;Qe++)y(B.location+Qe,ve.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<B.locationSize;Qe++)S(B.location+Qe);o.bindBuffer(o.ARRAY_BUFFER,De);for(let Qe=0;Qe<B.locationSize;Qe++)P(B.location+Qe,U/B.locationSize,Q,se,we*ce,(Ie+U/B.locationSize*Qe)*ce,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve,ae.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,De);for(let ve=0;ve<B.locationSize;ve++)P(B.location+ve,U/B.locationSize,Q,se,U*ce,U/B.locationSize*ve*ce,Me)}}else if(oe!==void 0){const se=oe[le];if(se!==void 0)switch(se.length){case 2:o.vertexAttrib2fv(B.location,se);break;case 3:o.vertexAttrib3fv(B.location,se);break;case 4:o.vertexAttrib4fv(B.location,se);break;default:o.vertexAttrib1fv(B.location,se)}}}}R()}function Y(){W();for(const A in i){const N=i[A];for(const ie in N){const K=N[ie];for(const ue in K)m(K[ue].object),delete K[ue];delete N[ie]}delete i[A]}}function k(A){if(i[A.id]===void 0)return;const N=i[A.id];for(const ie in N){const K=N[ie];for(const ue in K)m(K[ue].object),delete K[ue];delete N[ie]}delete i[A.id]}function F(A){for(const N in i){const ie=i[N];if(ie[A.id]===void 0)continue;const K=ie[A.id];for(const ue in K)m(K[ue].object),delete K[ue];delete ie[A.id]}}function W(){L(),u=!0,a!==s&&(a=s,f(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:W,resetDefaultState:L,dispose:Y,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:S,disableUnusedAttributes:R}}function bE(o,e,t){let i;function s(f){i=f}function a(f,m){o.drawArrays(i,f,m),t.update(m,i,1)}function u(f,m,g){g!==0&&(o.drawArraysInstanced(i,f,m,g),t.update(m,i,g))}function c(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,i,1)}function d(f,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<f.length;M++)u(f[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(i,f,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function CE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(F){return!(F!==ui&&i.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){const W=F===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==pr&&i.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==wi&&!W)}function d(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=d(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Y=M>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:b,vertexTextures:Y,maxSamples:k}}function RE(o){const e=this;let t=null,i=0,s=!1,a=!1;const u=new Xr,c=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):f();else{const R=a?0:i,P=R*4;let b=y.clippingState||null;d.value=b,b=m(M,_,P,x);for(let Y=0;Y!==P;++Y)b[Y]=t[Y];y.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const y=x+E*4,R=_.matrixWorldInverse;c.getNormalMatrix(R),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,b=x;P!==E;++P,b+=4)u.copy(g[P]).applyMatrix4(R,c),u.normal.toArray(S,b),S[b+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function PE(o){let e=new WeakMap;function t(u,c){return c===_d?u.mapping=vo:c===vd&&(u.mapping=yo),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===_d||c===vd)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const f=new Hx(d.height);return f.fromEquirectangularTexture(o,u),e.set(u,f),u.addEventListener("dispose",s),t(f.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Nu extends sv{constructor(e=-1,t=1,i=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,u=a+f*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const co=4,Rg=[.125,.215,.35,.446,.526,.582],xs=20,Vh=new Nu,Pg=new $e;let Gh=null,Wh=0,Xh=0,jh=!1;const vs=(1+Math.sqrt(5))/2,ao=1/vs,Lg=[new z(-vs,ao,0),new z(vs,ao,0),new z(-ao,0,vs),new z(ao,0,vs),new z(0,vs,-ao),new z(0,vs,ao),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Wh,Xh),this._renderer.xr.enabled=jh,e.scissorTest=!1,au(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vo||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Fi,format:ui,colorSpace:wn,depthBuffer:!1},s=Ig(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ig(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LE(a)),this._blurMaterial=DE(a,e,t)}return s}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,Vh)}_sceneToCubeUV(e,t,i,s){const c=new In(90,1,t,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Pg),m.toneMapping=hr,m.autoClear=!1;const x=new $r({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new Nn(new Ua,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy(Pg),E=!0);for(let y=0;y<6;y++){const R=y%3;R===0?(c.up.set(0,d[y],0),c.lookAt(f[y],0,0)):R===1?(c.up.set(0,0,d[y]),c.lookAt(0,f[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,f[y]));const P=this._cubeSize;au(s,R*P,y>2?P:0,P,P),m.setRenderTarget(s),E&&m.render(M,c),m.render(e,c)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===vo||e.mapping===yo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ng());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new Nn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;au(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Vh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Lg[(s-a-1)%Lg.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",a),this._halfBlur(u,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,u,c){const d=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Nn(this._lodPlanes[s],f),_=f.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*xs-1),E=a/M,S=isFinite(a)?1+Math.floor(m*E):xs;S>xs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const y=[];let R=0;for(let F=0;F<xs;++F){const W=F/E,L=Math.exp(-W*W/2);y.push(L),F===0?R+=L:F<S&&(R+=2*L)}for(let F=0;F<y.length;F++)y[F]=y[F]/R;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-i;const b=this._sizeLods[s],Y=3*b*(s>P-co?s-P+co:0),k=4*(this._cubeSize-b);au(t,Y,k,3*b,2*b),d.setRenderTarget(t),d.render(g,Vh)}}function LE(o){const e=[],t=[],i=[];let s=o;const a=o-co+1+Rg.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>o-co?d=Rg[u-o+co-1]:u===0&&(d=0),i.push(d);const f=1/(c-2),m=-f,g=1+f,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,y=1,R=new Float32Array(E*M*x),P=new Float32Array(S*M*x),b=new Float32Array(y*M*x);for(let k=0;k<x;k++){const F=k%3*2/3-1,W=k>2?0:-1,L=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];R.set(L,E*M*k),P.set(_,S*M*k);const A=[k,k,k,k,k,k];b.set(A,y*M*k)}const Y=new Tn;Y.setAttribute("position",new hn(R,E)),Y.setAttribute("uv",new hn(P,S)),Y.setAttribute("faceIndex",new hn(b,y)),e.push(Y),s>co&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ig(o,e,t){const i=new ci(o,e,t);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function au(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function DE(o,e,t){const i=new Float32Array(xs),s=new z(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Ng(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Ug(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IE(o){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,f=d===_d||d===vd,m=d===vo||d===yo;if(f||m){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new Dg(o)),g=f?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return f&&x&&x.height>0||m&&x&&s(x)?(t===null&&(t=new Dg(o)),g=f?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function s(c){let d=0;const f=6;for(let m=0;m<f;m++)c[m]!==void 0&&d++;return d===f}function a(c){const d=c.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function NE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Sa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function UE(o,e,t,i){const s={},a=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const E=_.morphAttributes[M];for(let S=0,y=E.length;S<y;S++)e.remove(E[S])}_.removeEventListener("dispose",u),delete s[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER);const x=g.morphAttributes;for(const M in x){const E=x[M];for(let S=0,y=E.length;S<y;S++)e.update(E[S],o.ARRAY_BUFFER)}}function f(g){const _=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const R=x.array;E=x.version;for(let P=0,b=R.length;P<b;P+=3){const Y=R[P+0],k=R[P+1],F=R[P+2];_.push(Y,k,k,F,F,Y)}}else if(M!==void 0){const R=M.array;E=M.version;for(let P=0,b=R.length/3-1;P<b;P+=3){const Y=P+0,k=P+1,F=P+2;_.push(Y,k,k,F,F,Y)}}else return;const S=new(Z_(_)?iv:nv)(_,1);S.version=E;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const _=a.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&f(g)}else f(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function FE(o,e,t){let i;function s(_){i=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function d(_,x){o.drawElements(i,x,a,_*u),t.update(x,i,1)}function f(_,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,_*u,M),t.update(x,i,M))}function m(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function g(_,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)f(_[y]/u,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,_,0,E,0,M);let y=0;for(let R=0;R<M;R++)y+=x[R]*E[R];t.update(y,i,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function OE(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kE(o,e,t){const i=new WeakMap,s=new At;function a(u,c,d){const f=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(c);if(_===void 0||_.count!==g){let A=function(){W.dispose(),i.delete(c),c.removeEventListener("dispose",A)};var x=A;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let b=0;M===!0&&(b=1),E===!0&&(b=2),S===!0&&(b=3);let Y=c.attributes.position.count*b,k=1;Y>e.maxTextureSize&&(k=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const F=new Float32Array(Y*k*4*g),W=new J_(F,Y,k,g);W.type=wi,W.needsUpdate=!0;const L=b*4;for(let N=0;N<g;N++){const ie=y[N],K=R[N],ue=P[N],fe=Y*k*4*N;for(let oe=0;oe<ie.count;oe++){const le=oe*L;M===!0&&(s.fromBufferAttribute(ie,oe),F[fe+le+0]=s.x,F[fe+le+1]=s.y,F[fe+le+2]=s.z,F[fe+le+3]=0),E===!0&&(s.fromBufferAttribute(K,oe),F[fe+le+4]=s.x,F[fe+le+5]=s.y,F[fe+le+6]=s.z,F[fe+le+7]=0),S===!0&&(s.fromBufferAttribute(ue,oe),F[fe+le+8]=s.x,F[fe+le+9]=s.y,F[fe+le+10]=s.z,F[fe+le+11]=ue.itemSize===4?s.w:1)}}_={count:g,texture:W,size:new Ye(Y,k)},i.set(c,_),c.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<f.length;S++)M+=f[S];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",f)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function BE(o,e,t,i){let s=new WeakMap;function a(d){const f=i.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==f&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return g}function u(){s=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:u}}class lv extends cn{constructor(e,t,i,s,a,u,c,d,f,m=po){if(m!==po&&m!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===po&&(i=Ss),i===void 0&&m===Mo&&(i=So),super(null,s,a,u,c,d,m,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Un,this.minFilter=d!==void 0?d:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uv=new cn,Fg=new lv(1,1),cv=new J_,hv=new Ax,dv=new ov,Og=[],kg=[],Bg=new Float32Array(16),zg=new Float32Array(9),Hg=new Float32Array(4);function Ro(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Og[s];if(a===void 0&&(a=new Float32Array(s),Og[s]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function rn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function sn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Uu(o,e){let t=kg[e];t===void 0&&(t=new Int32Array(e),kg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function zE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function HE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2fv(this.addr,e),sn(t,e)}}function VE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;o.uniform3fv(this.addr,e),sn(t,e)}}function GE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4fv(this.addr,e),sn(t,e)}}function WE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Hg.set(i),o.uniformMatrix2fv(this.addr,!1,Hg),sn(t,i)}}function XE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;zg.set(i),o.uniformMatrix3fv(this.addr,!1,zg),sn(t,i)}}function jE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Bg.set(i),o.uniformMatrix4fv(this.addr,!1,Bg),sn(t,i)}}function YE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function $E(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2iv(this.addr,e),sn(t,e)}}function qE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;o.uniform3iv(this.addr,e),sn(t,e)}}function KE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4iv(this.addr,e),sn(t,e)}}function ZE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function QE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2uiv(this.addr,e),sn(t,e)}}function JE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;o.uniform3uiv(this.addr,e),sn(t,e)}}function eT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4uiv(this.addr,e),sn(t,e)}}function tT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Fg.compareFunction=K_,a=Fg):a=uv,t.setTexture2D(e||a,s)}function nT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hv,s)}function iT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dv,s)}function rT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cv,s)}function sT(o){switch(o){case 5126:return zE;case 35664:return HE;case 35665:return VE;case 35666:return GE;case 35674:return WE;case 35675:return XE;case 35676:return jE;case 5124:case 35670:return YE;case 35667:case 35671:return $E;case 35668:case 35672:return qE;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return QE;case 36295:return JE;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(o,e){o.uniform1fv(this.addr,e)}function aT(o,e){const t=Ro(e,this.size,2);o.uniform2fv(this.addr,t)}function lT(o,e){const t=Ro(e,this.size,3);o.uniform3fv(this.addr,t)}function uT(o,e){const t=Ro(e,this.size,4);o.uniform4fv(this.addr,t)}function cT(o,e){const t=Ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function hT(o,e){const t=Ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function dT(o,e){const t=Ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function fT(o,e){o.uniform1iv(this.addr,e)}function pT(o,e){o.uniform2iv(this.addr,e)}function mT(o,e){o.uniform3iv(this.addr,e)}function gT(o,e){o.uniform4iv(this.addr,e)}function _T(o,e){o.uniform1uiv(this.addr,e)}function vT(o,e){o.uniform2uiv(this.addr,e)}function yT(o,e){o.uniform3uiv(this.addr,e)}function xT(o,e){o.uniform4uiv(this.addr,e)}function ST(o,e,t){const i=this.cache,s=e.length,a=Uu(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||uv,a[u])}function MT(o,e,t){const i=this.cache,s=e.length,a=Uu(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||hv,a[u])}function ET(o,e,t){const i=this.cache,s=e.length,a=Uu(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||dv,a[u])}function TT(o,e,t){const i=this.cache,s=e.length,a=Uu(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||cv,a[u])}function wT(o){switch(o){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return uT;case 35674:return cT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return fT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return yT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}class AT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sT(t.type)}}class bT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wT(t.type)}}class CT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function Vg(o,e){o.seq.push(e),o.map[e.id]=e}function RT(o,e,t){const i=o.name,s=i.length;for(Yh.lastIndex=0;;){const a=Yh.exec(i),u=Yh.lastIndex;let c=a[1];const d=a[2]==="]",f=a[3];if(d&&(c=c|0),f===void 0||f==="["&&u+2===s){Vg(t,f===void 0?new AT(c,o,e):new bT(c,o,e));break}else{let g=t.map[c];g===void 0&&(g=new CT(c),Vg(t,g)),t=g}}}class Tu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);RT(a,u,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function Gg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const PT=37297;let LT=0;function DT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const Wg=new ut;function IT(o){gt._getMatrix(Wg,gt.workingColorSpace,o);const e=`mat3( ${Wg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(o)){case Du:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Xg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+DT(o.getShaderSource(e),u)}else return s}function NT(o,e){const t=IT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function UT(o,e){let t;switch(e){case D_:t="Linear";break;case I_:t="Reinhard";break;case N_:t="Cineon";break;case U_:t="ACESFilmic";break;case wu:t="AgX";break;case F_:t="Neutral";break;case Vy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lu=new z;function FT(){gt.getLuminanceCoefficients(lu);const o=lu.x.toFixed(4),e=lu.y.toFixed(4),t=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function kT(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BT(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function Ma(o){return o!==""}function jg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(o){return o.replace(zT,VT)}const HT=new Map;function VT(o,e){let t=ct[e];if(t===void 0){const i=HT.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yd(t)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(o){return o.replace(GT,WT)}function WT(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function qg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===P_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Sy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function jT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vo:case yo:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case zy:e="ENVMAP_BLENDING_MIX";break;case Hy:e="ENVMAP_BLENDING_ADD";break}return e}function qT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function KT(o,e,t,i){const s=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=XT(t),f=jT(t),m=YT(t),g=$T(t),_=qT(t),x=OT(t),M=kT(a),E=s.createProgram();let S,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ma).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ma).join(`
`),y.length>0&&(y+=`
`)):(S=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),y=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?ct.tonemapping_pars_fragment:"",t.toneMapping!==hr?UT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,NT("linearToOutputTexel",t.outputColorSpace),FT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),u=Yd(u),u=jg(u,t),u=Yg(u,t),c=Yd(c),c=jg(c,t),c=Yg(c,t),u=$g(u),c=$g(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=R+S+u,b=R+y+c,Y=Gg(s,s.VERTEX_SHADER,P),k=Gg(s,s.FRAGMENT_SHADER,b);s.attachShader(E,Y),s.attachShader(E,k),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function F(N){if(o.debug.checkShaderErrors){const ie=s.getProgramInfoLog(E).trim(),K=s.getShaderInfoLog(Y).trim(),ue=s.getShaderInfoLog(k).trim();let fe=!0,oe=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(fe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,Y,k);else{const le=Xg(s,Y,"vertex"),B=Xg(s,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ie+`
`+le+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(K===""||ue==="")&&(oe=!1);oe&&(N.diagnostics={runnable:fe,programLog:ie,vertexShader:{log:K,prefix:S},fragmentShader:{log:ue,prefix:y}})}s.deleteShader(Y),s.deleteShader(k),W=new Tu(s,E),L=BT(s,E)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,PT)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=Y,this.fragmentShader=k,this}let ZT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new JT(e),t.set(e,i)),i}}class JT{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}}function ew(o,e,t,i,s,a,u){const c=new ev,d=new QT,f=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return f.add(L),L===0?"uv":`uv${L}`}function S(L,A,N,ie,K){const ue=ie.fog,fe=K.geometry,oe=L.isMeshStandardMaterial?ie.environment:null,le=(L.isMeshStandardMaterial?t:e).get(L.envMap||oe),B=le&&le.mapping===Lu?le.image.height:null,ae=M[L.type];L.precision!==null&&(x=s.getMaxPrecision(L.precision),x!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",x,"instead."));const se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=se!==void 0?se.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let De,Q,ce,Me;if(ae){const St=Ui[ae];De=St.vertexShader,Q=St.fragmentShader}else De=L.vertexShader,Q=L.fragmentShader,d.update(L),ce=d.getVertexShaderID(L),Me=d.getFragmentShaderID(L);const ve=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),Ie=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,It=!!L.map,vt=!!L.matcap,Ft=!!le,j=!!L.aoMap,An=!!L.lightMap,mt=!!L.bumpMap,dt=!!L.normalMap,qe=!!L.displacementMap,Ct=!!L.emissiveMap,je=!!L.metalnessMap,D=!!L.roughnessMap,w=L.anisotropy>0,Z=L.clearcoat>0,pe=L.dispersion>0,ge=L.iridescence>0,he=L.sheen>0,He=L.transmission>0,Ae=w&&!!L.anisotropyMap,Ne=Z&&!!L.clearcoatMap,ht=Z&&!!L.clearcoatNormalMap,xe=Z&&!!L.clearcoatRoughnessMap,Fe=ge&&!!L.iridescenceMap,Je=ge&&!!L.iridescenceThicknessMap,et=he&&!!L.sheenColorMap,Oe=he&&!!L.sheenRoughnessMap,ft=!!L.specularMap,rt=!!L.specularColorMap,bt=!!L.specularIntensityMap,V=He&&!!L.transmissionMap,be=He&&!!L.thicknessMap,re=!!L.gradientMap,de=!!L.alphaMap,Pe=L.alphaTest>0,Re=!!L.alphaHash,st=!!L.extensions;let kt=hr;L.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(kt=o.toneMapping);const Zt={shaderID:ae,shaderType:L.type,shaderName:L.name,vertexShader:De,fragmentShader:Q,defines:L.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:x,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&K.instanceColor!==null,instancingMorph:Ie&&K.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:wn,alphaToCoverage:!!L.alphaToCoverage,map:It,matcap:vt,envMap:Ft,envMapMode:Ft&&le.mapping,envMapCubeUVHeight:B,aoMap:j,lightMap:An,bumpMap:mt,normalMap:dt,displacementMap:_&&qe,emissiveMap:Ct,normalMapObjectSpace:dt&&L.normalMapType===$y,normalMapTangentSpace:dt&&L.normalMapType===q_,metalnessMap:je,roughnessMap:D,anisotropy:w,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:ht,clearcoatRoughnessMap:xe,dispersion:pe,iridescence:ge,iridescenceMap:Fe,iridescenceThicknessMap:Je,sheen:he,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:ft,specularColorMap:rt,specularIntensityMap:bt,transmission:He,transmissionMap:V,thicknessMap:be,gradientMap:re,opaque:L.transparent===!1&&L.blending===fo&&L.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Re,combine:L.combine,mapUv:It&&E(L.map.channel),aoMapUv:j&&E(L.aoMap.channel),lightMapUv:An&&E(L.lightMap.channel),bumpMapUv:mt&&E(L.bumpMap.channel),normalMapUv:dt&&E(L.normalMap.channel),displacementMapUv:qe&&E(L.displacementMap.channel),emissiveMapUv:Ct&&E(L.emissiveMap.channel),metalnessMapUv:je&&E(L.metalnessMap.channel),roughnessMapUv:D&&E(L.roughnessMap.channel),anisotropyMapUv:Ae&&E(L.anisotropyMap.channel),clearcoatMapUv:Ne&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:ht&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&E(L.sheenRoughnessMap.channel),specularMapUv:ft&&E(L.specularMap.channel),specularColorMapUv:rt&&E(L.specularColorMap.channel),specularIntensityMapUv:bt&&E(L.specularIntensityMap.channel),transmissionMapUv:V&&E(L.transmissionMap.channel),thicknessMapUv:be&&E(L.thicknessMap.channel),alphaMapUv:de&&E(L.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(dt||w),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!fe.attributes.uv&&(It||de),fog:!!ue,useFog:L.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:we,skinning:K.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:kt,decodeVideoTexture:It&&L.map.isVideoTexture===!0&&gt.getTransfer(L.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ct&&L.emissiveMap.isVideoTexture===!0&&gt.getTransfer(L.emissiveMap.colorSpace)===Pt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Mi,flipSided:L.side===Xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:st&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&L.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Zt.vertexUv1s=f.has(1),Zt.vertexUv2s=f.has(2),Zt.vertexUv3s=f.has(3),f.clear(),Zt}function y(L){const A=[];if(L.shaderID?A.push(L.shaderID):(A.push(L.customVertexShaderID),A.push(L.customFragmentShaderID)),L.defines!==void 0)for(const N in L.defines)A.push(N),A.push(L.defines[N]);return L.isRawShaderMaterial===!1&&(R(A,L),P(A,L),A.push(o.outputColorSpace)),A.push(L.customProgramCacheKey),A.join()}function R(L,A){L.push(A.precision),L.push(A.outputColorSpace),L.push(A.envMapMode),L.push(A.envMapCubeUVHeight),L.push(A.mapUv),L.push(A.alphaMapUv),L.push(A.lightMapUv),L.push(A.aoMapUv),L.push(A.bumpMapUv),L.push(A.normalMapUv),L.push(A.displacementMapUv),L.push(A.emissiveMapUv),L.push(A.metalnessMapUv),L.push(A.roughnessMapUv),L.push(A.anisotropyMapUv),L.push(A.clearcoatMapUv),L.push(A.clearcoatNormalMapUv),L.push(A.clearcoatRoughnessMapUv),L.push(A.iridescenceMapUv),L.push(A.iridescenceThicknessMapUv),L.push(A.sheenColorMapUv),L.push(A.sheenRoughnessMapUv),L.push(A.specularMapUv),L.push(A.specularColorMapUv),L.push(A.specularIntensityMapUv),L.push(A.transmissionMapUv),L.push(A.thicknessMapUv),L.push(A.combine),L.push(A.fogExp2),L.push(A.sizeAttenuation),L.push(A.morphTargetsCount),L.push(A.morphAttributeCount),L.push(A.numDirLights),L.push(A.numPointLights),L.push(A.numSpotLights),L.push(A.numSpotLightMaps),L.push(A.numHemiLights),L.push(A.numRectAreaLights),L.push(A.numDirLightShadows),L.push(A.numPointLightShadows),L.push(A.numSpotLightShadows),L.push(A.numSpotLightShadowsWithMaps),L.push(A.numLightProbes),L.push(A.shadowMapType),L.push(A.toneMapping),L.push(A.numClippingPlanes),L.push(A.numClipIntersection),L.push(A.depthPacking)}function P(L,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),L.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),L.push(c.mask)}function b(L){const A=M[L.type];let N;if(A){const ie=Ui[A];N=Da.clone(ie.uniforms)}else N=L.uniforms;return N}function Y(L,A){let N;for(let ie=0,K=m.length;ie<K;ie++){const ue=m[ie];if(ue.cacheKey===A){N=ue,++N.usedTimes;break}}return N===void 0&&(N=new KT(o,A,L,a),m.push(N)),N}function k(L){if(--L.usedTimes===0){const A=m.indexOf(L);m[A]=m[m.length-1],m.pop(),L.destroy()}}function F(L){d.remove(L)}function W(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:b,acquireProgram:Y,releaseProgram:k,releaseShaderCache:F,programs:m,dispose:W}}function tw(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function i(u){o.delete(u)}function s(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function nw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Kg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Zg(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function u(g,_,x,M,E,S){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function c(g,_,x,M,E,S){const y=u(g,_,x,M,E,S);x.transmission>0?i.push(y):x.transparent===!0?s.push(y):t.push(y)}function d(g,_,x,M,E,S){const y=u(g,_,x,M,E,S);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function f(g,_){t.length>1&&t.sort(g||nw),i.length>1&&i.sort(_||Kg),s.length>1&&s.sort(_||Kg)}function m(){for(let g=e,_=o.length;g<_;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:d,finish:m,sort:f}}function iw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let u;return a===void 0?(u=new Zg,o.set(i,[u])):s>=a.length?(u=new Zg,a.push(u)):u=a[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function rw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new $e};break;case"SpotLight":t={position:new z,direction:new z,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new z,halfWidth:new z,halfHeight:new z};break}return o[e.id]=t,t}}}function sw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let ow=0;function aw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function lw(o){const e=new rw,t=sw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new z);const s=new z,a=new at,u=new at;function c(f){let m=0,g=0,_=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,R=0,P=0,b=0,Y=0,k=0,F=0;f.sort(aw);for(let L=0,A=f.length;L<A;L++){const N=f[L],ie=N.color,K=N.intensity,ue=N.distance,fe=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)m+=ie.r*K,g+=ie.g*K,_+=ie.b*K;else if(N.isLightProbe){for(let oe=0;oe<9;oe++)i.probe[oe].addScaledVector(N.sh.coefficients[oe],K);F++}else if(N.isDirectionalLight){const oe=e.get(N);if(oe.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const le=N.shadow,B=t.get(N);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.directionalShadow[x]=B,i.directionalShadowMap[x]=fe,i.directionalShadowMatrix[x]=N.shadow.matrix,R++}i.directional[x]=oe,x++}else if(N.isSpotLight){const oe=e.get(N);oe.position.setFromMatrixPosition(N.matrixWorld),oe.color.copy(ie).multiplyScalar(K),oe.distance=ue,oe.coneCos=Math.cos(N.angle),oe.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),oe.decay=N.decay,i.spot[E]=oe;const le=N.shadow;if(N.map&&(i.spotLightMap[Y]=N.map,Y++,le.updateMatrices(N),N.castShadow&&k++),i.spotLightMatrix[E]=le.matrix,N.castShadow){const B=t.get(N);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.spotShadow[E]=B,i.spotShadowMap[E]=fe,b++}E++}else if(N.isRectAreaLight){const oe=e.get(N);oe.color.copy(ie).multiplyScalar(K),oe.halfWidth.set(N.width*.5,0,0),oe.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=oe,S++}else if(N.isPointLight){const oe=e.get(N);if(oe.color.copy(N.color).multiplyScalar(N.intensity),oe.distance=N.distance,oe.decay=N.decay,N.castShadow){const le=N.shadow,B=t.get(N);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,i.pointShadow[M]=B,i.pointShadowMap[M]=fe,i.pointShadowMatrix[M]=N.shadow.matrix,P++}i.point[M]=oe,M++}else if(N.isHemisphereLight){const oe=e.get(N);oe.skyColor.copy(N.color).multiplyScalar(K),oe.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[y]=oe,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const W=i.hash;(W.directionalLength!==x||W.pointLength!==M||W.spotLength!==E||W.rectAreaLength!==S||W.hemiLength!==y||W.numDirectionalShadows!==R||W.numPointShadows!==P||W.numSpotShadows!==b||W.numSpotMaps!==Y||W.numLightProbes!==F)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=b+Y-k,i.spotLightMap.length=Y,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=F,W.directionalLength=x,W.pointLength=M,W.spotLength=E,W.rectAreaLength=S,W.hemiLength=y,W.numDirectionalShadows=R,W.numPointShadows=P,W.numSpotShadows=b,W.numSpotMaps=Y,W.numLightProbes=F,i.version=ow++)}function d(f,m){let g=0,_=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let y=0,R=f.length;y<R;y++){const P=f[y];if(P.isDirectionalLight){const b=i.directional[g];b.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),g++}else if(P.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(S),u.identity(),a.copy(P.matrixWorld),a.premultiply(S),u.extractRotation(a),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const b=i.point[_];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const b=i.hemi[E];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(S),E++}}}return{setup:c,setupView:d,state:i}}function Qg(o){const e=new lw(o),t=[],i=[];function s(m){f.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function u(m){i.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function uw(o){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new Qg(o),e.set(s,[c])):a>=u.length?(c=new Qg(o),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}class cw extends Oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hw extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pw(o,e,t){let i=new cf;const s=new Ye,a=new Ye,u=new At,c=new cw({depthPacking:Yy}),d=new hw,f={},m=t.maxTextureSize,g={[fr]:Xn,[Xn]:fr,[Mi]:Mi},_=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:dw,fragmentShader:fw}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new Tn;M.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Nn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P_;let y=this.type;this.render=function(k,F,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const L=o.getRenderTarget(),A=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),ie=o.state;ie.setBlending(cr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const K=y!==or&&this.type===or,ue=y===or&&this.type!==or;for(let fe=0,oe=k.length;fe<oe;fe++){const le=k[fe],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ae=B.getFrameExtents();if(s.multiply(ae),a.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ae.x),s.x=a.x*ae.x,B.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ae.y),s.y=a.y*ae.y,B.mapSize.y=a.y)),B.map===null||K===!0||ue===!0){const U=this.type!==or?{minFilter:Un,magFilter:Un}:{};B.map!==null&&B.map.dispose(),B.map=new ci(s.x,s.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const se=B.getViewportCount();for(let U=0;U<se;U++){const ne=B.getViewport(U);u.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),ie.viewport(u),B.updateMatrices(le,U),i=B.getFrustum(),b(F,W,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===or&&R(B,W),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(L,A,N)};function R(k,F){const W=e.update(E);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,x.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ci(s.x,s.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(F,null,W,_,E,null),x.uniforms.shadow_pass.value=k.mapPass.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(F,null,W,x,E,null)}function P(k,F,W,L){let A=null;const N=W.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(N!==void 0)A=N;else if(A=W.isPointLight===!0?d:c,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ie=A.uuid,K=F.uuid;let ue=f[ie];ue===void 0&&(ue={},f[ie]=ue);let fe=ue[K];fe===void 0&&(fe=A.clone(),ue[K]=fe,F.addEventListener("dispose",Y)),A=fe}if(A.visible=F.visible,A.wireframe=F.wireframe,L===or?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:g[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ie=o.properties.get(A);ie.light=W}return A}function b(k,F,W,L,A){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===or)&&(!k.frustumCulled||i.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,k.matrixWorld);const K=e.update(k),ue=k.material;if(Array.isArray(ue)){const fe=K.groups;for(let oe=0,le=fe.length;oe<le;oe++){const B=fe[oe],ae=ue[B.materialIndex];if(ae&&ae.visible){const se=P(k,ae,L,A);k.onBeforeShadow(o,k,F,W,K,se,B),o.renderBufferDirect(W,null,K,se,k,B),k.onAfterShadow(o,k,F,W,K,se,B)}}}else if(ue.visible){const fe=P(k,ue,L,A);k.onBeforeShadow(o,k,F,W,K,fe,null),o.renderBufferDirect(W,null,K,fe,k,null),k.onAfterShadow(o,k,F,W,K,fe,null)}}const ie=k.children;for(let K=0,ue=ie.length;K<ue;K++)b(ie[K],F,W,L,A)}function Y(k){k.target.removeEventListener("dispose",Y);for(const W in f){const L=f[W],A=k.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}const mw={[cd]:hd,[dd]:md,[fd]:gd,[_o]:pd,[hd]:cd,[md]:dd,[gd]:fd,[pd]:_o};function gw(o,e){function t(){let V=!1;const be=new At;let re=null;const de=new At(0,0,0,0);return{setMask:function(Pe){re!==Pe&&!V&&(o.colorMask(Pe,Pe,Pe,Pe),re=Pe)},setLocked:function(Pe){V=Pe},setClear:function(Pe,Re,st,kt,Zt){Zt===!0&&(Pe*=kt,Re*=kt,st*=kt),be.set(Pe,Re,st,kt),de.equals(be)===!1&&(o.clearColor(Pe,Re,st,kt),de.copy(be))},reset:function(){V=!1,re=null,de.set(-1,0,0,0)}}}function i(){let V=!1,be=!1,re=null,de=null,Pe=null;return{setReversed:function(Re){if(be!==Re){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const kt=Pe;Pe=null,this.setClear(kt)}be=Re},getReversed:function(){return be},setTest:function(Re){Re?ve(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(Re){re!==Re&&!V&&(o.depthMask(Re),re=Re)},setFunc:function(Re){if(be&&(Re=mw[Re]),de!==Re){switch(Re){case cd:o.depthFunc(o.NEVER);break;case hd:o.depthFunc(o.ALWAYS);break;case dd:o.depthFunc(o.LESS);break;case _o:o.depthFunc(o.LEQUAL);break;case fd:o.depthFunc(o.EQUAL);break;case pd:o.depthFunc(o.GEQUAL);break;case md:o.depthFunc(o.GREATER);break;case gd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Re}},setLocked:function(Re){V=Re},setClear:function(Re){Pe!==Re&&(be&&(Re=1-Re),o.clearDepth(Re),Pe=Re)},reset:function(){V=!1,re=null,de=null,Pe=null,be=!1}}}function s(){let V=!1,be=null,re=null,de=null,Pe=null,Re=null,st=null,kt=null,Zt=null;return{setTest:function(St){V||(St?ve(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(St){be!==St&&!V&&(o.stencilMask(St),be=St)},setFunc:function(St,Fn,bn){(re!==St||de!==Fn||Pe!==bn)&&(o.stencilFunc(St,Fn,bn),re=St,de=Fn,Pe=bn)},setOp:function(St,Fn,bn){(Re!==St||st!==Fn||kt!==bn)&&(o.stencilOp(St,Fn,bn),Re=St,st=Fn,kt=bn)},setLocked:function(St){V=St},setClear:function(St){Zt!==St&&(o.clearStencil(St),Zt=St)},reset:function(){V=!1,be=null,re=null,de=null,Pe=null,Re=null,st=null,kt=null,Zt=null}}}const a=new t,u=new i,c=new s,d=new WeakMap,f=new WeakMap;let m={},g={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,R=null,P=null,b=null,Y=null,k=null,F=new $e(0,0,0),W=0,L=!1,A=null,N=null,ie=null,K=null,ue=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=le>=2);let ae=null,se={};const U=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),De=new At().fromArray(U),Q=new At().fromArray(ne);function ce(V,be,re,de){const Pe=new Uint8Array(4),Re=o.createTexture();o.bindTexture(V,Re),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let st=0;st<re;st++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(be+st,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return Re}const Me={};Me[o.TEXTURE_2D]=ce(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=ce(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=ce(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=ce(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ve(o.DEPTH_TEST),u.setFunc(_o),mt(!1),dt(Jm),ve(o.CULL_FACE),j(cr);function ve(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function we(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function Ie(V,be){return g[V]!==be?(o.bindFramebuffer(V,be),g[V]=be,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=be),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=be),!0):!1}function Qe(V,be){let re=x,de=!1;if(V){re=_.get(be),re===void 0&&(re=[],_.set(be,re));const Pe=V.textures;if(re.length!==Pe.length||re[0]!==o.COLOR_ATTACHMENT0){for(let Re=0,st=Pe.length;Re<st;Re++)re[Re]=o.COLOR_ATTACHMENT0+Re;re.length=Pe.length,de=!0}}else re[0]!==o.BACK&&(re[0]=o.BACK,de=!0);de&&o.drawBuffers(re)}function It(V){return M!==V?(o.useProgram(V),M=V,!0):!1}const vt={[ys]:o.FUNC_ADD,[Ey]:o.FUNC_SUBTRACT,[Ty]:o.FUNC_REVERSE_SUBTRACT};vt[wy]=o.MIN,vt[Ay]=o.MAX;const Ft={[by]:o.ZERO,[Cy]:o.ONE,[Ry]:o.SRC_COLOR,[ld]:o.SRC_ALPHA,[Uy]:o.SRC_ALPHA_SATURATE,[Iy]:o.DST_COLOR,[Ly]:o.DST_ALPHA,[Py]:o.ONE_MINUS_SRC_COLOR,[ud]:o.ONE_MINUS_SRC_ALPHA,[Ny]:o.ONE_MINUS_DST_COLOR,[Dy]:o.ONE_MINUS_DST_ALPHA,[Fy]:o.CONSTANT_COLOR,[Oy]:o.ONE_MINUS_CONSTANT_COLOR,[ky]:o.CONSTANT_ALPHA,[By]:o.ONE_MINUS_CONSTANT_ALPHA};function j(V,be,re,de,Pe,Re,st,kt,Zt,St){if(V===cr){E===!0&&(we(o.BLEND),E=!1);return}if(E===!1&&(ve(o.BLEND),E=!0),V!==My){if(V!==S||St!==L){if((y!==ys||b!==ys)&&(o.blendEquation(o.FUNC_ADD),y=ys,b=ys),St)switch(V){case fo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ad:o.blendFunc(o.ONE,o.ONE);break;case eg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case fo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ad:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case eg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,P=null,Y=null,k=null,F.set(0,0,0),W=0,S=V,L=St}return}Pe=Pe||be,Re=Re||re,st=st||de,(be!==y||Pe!==b)&&(o.blendEquationSeparate(vt[be],vt[Pe]),y=be,b=Pe),(re!==R||de!==P||Re!==Y||st!==k)&&(o.blendFuncSeparate(Ft[re],Ft[de],Ft[Re],Ft[st]),R=re,P=de,Y=Re,k=st),(kt.equals(F)===!1||Zt!==W)&&(o.blendColor(kt.r,kt.g,kt.b,Zt),F.copy(kt),W=Zt),S=V,L=!1}function An(V,be){V.side===Mi?we(o.CULL_FACE):ve(o.CULL_FACE);let re=V.side===Xn;be&&(re=!re),mt(re),V.blending===fo&&V.transparent===!1?j(cr):j(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const de=V.stencilWrite;c.setTest(de),de&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ct(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function mt(V){A!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),A=V)}function dt(V){V!==yy?(ve(o.CULL_FACE),V!==N&&(V===Jm?o.cullFace(o.BACK):V===xy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),N=V}function qe(V){V!==ie&&(oe&&o.lineWidth(V),ie=V)}function Ct(V,be,re){V?(ve(o.POLYGON_OFFSET_FILL),(K!==be||ue!==re)&&(o.polygonOffset(be,re),K=be,ue=re)):we(o.POLYGON_OFFSET_FILL)}function je(V){V?ve(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function D(V){V===void 0&&(V=o.TEXTURE0+fe-1),ae!==V&&(o.activeTexture(V),ae=V)}function w(V,be,re){re===void 0&&(ae===null?re=o.TEXTURE0+fe-1:re=ae);let de=se[re];de===void 0&&(de={type:void 0,texture:void 0},se[re]=de),(de.type!==V||de.texture!==be)&&(ae!==re&&(o.activeTexture(re),ae=re),o.bindTexture(V,be||Me[V]),de.type=V,de.texture=be)}function Z(){const V=se[ae];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){De.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),De.copy(V))}function Oe(V){Q.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function ft(V,be){let re=f.get(be);re===void 0&&(re=new WeakMap,f.set(be,re));let de=re.get(V);de===void 0&&(de=o.getUniformBlockIndex(be,V.name),re.set(V,de))}function rt(V,be){const de=f.get(be).get(V);d.get(be)!==de&&(o.uniformBlockBinding(be,de,V.__bindingPointIndex),d.set(be,de))}function bt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ae=null,se={},g={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,R=null,P=null,b=null,Y=null,k=null,F=new $e(0,0,0),W=0,L=!1,A=null,N=null,ie=null,K=null,ue=null,De.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ve,disable:we,bindFramebuffer:Ie,drawBuffers:Qe,useProgram:It,setBlending:j,setMaterial:An,setFlipSided:mt,setCullFace:dt,setLineWidth:qe,setPolygonOffset:Ct,setScissorTest:je,activeTexture:D,bindTexture:w,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Fe,texImage3D:Je,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ht,texStorage3D:xe,texSubImage2D:he,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ne,scissor:et,viewport:Oe,reset:bt}}function Jg(o,e,t,i){const s=_w(i);switch(t){case V_:return o*e;case W_:return o*e;case X_:return o*e*2;case sf:return o*e/s.components*s.byteLength;case of:return o*e/s.components*s.byteLength;case j_:return o*e*2/s.components*s.byteLength;case af:return o*e*2/s.components*s.byteLength;case G_:return o*e*3/s.components*s.byteLength;case ui:return o*e*4/s.components*s.byteLength;case lf:return o*e*4/s.components*s.byteLength;case yu:case xu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Su:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xd:case Md:return Math.max(o,16)*Math.max(e,8)/4;case yd:case Sd:return Math.max(o,8)*Math.max(e,8)/2;case Ed:case Td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Eu:case zd:case Hd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Y_:case Vd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gd:case Wd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _w(o){switch(o){case pr:case B_:return{byteLength:1,components:1};case Ca:case z_:case Fi:return{byteLength:2,components:1};case nf:case rf:return{byteLength:2,components:4};case Ss:case tf:case wi:return{byteLength:4,components:1};case H_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function vw(o,e,t,i,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ye,m=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return x?new OffscreenCanvas(D,w):La("canvas")}function E(D,w,Z){let pe=1;const ge=je(D);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(pe*ge.width),He=Math.floor(pe*ge.height);g===void 0&&(g=M(he,He));const Ae=w?M(he,He):g;return Ae.width=he,Ae.height=He,Ae.getContext("2d").drawImage(D,0,0,he,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+he+"x"+He+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){o.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,w,Z,pe,ge=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=w;if(w===o.RED&&(Z===o.FLOAT&&(he=o.R32F),Z===o.HALF_FLOAT&&(he=o.R16F),Z===o.UNSIGNED_BYTE&&(he=o.R8)),w===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(he=o.R8UI),Z===o.UNSIGNED_SHORT&&(he=o.R16UI),Z===o.UNSIGNED_INT&&(he=o.R32UI),Z===o.BYTE&&(he=o.R8I),Z===o.SHORT&&(he=o.R16I),Z===o.INT&&(he=o.R32I)),w===o.RG&&(Z===o.FLOAT&&(he=o.RG32F),Z===o.HALF_FLOAT&&(he=o.RG16F),Z===o.UNSIGNED_BYTE&&(he=o.RG8)),w===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(he=o.RG8UI),Z===o.UNSIGNED_SHORT&&(he=o.RG16UI),Z===o.UNSIGNED_INT&&(he=o.RG32UI),Z===o.BYTE&&(he=o.RG8I),Z===o.SHORT&&(he=o.RG16I),Z===o.INT&&(he=o.RG32I)),w===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(he=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(he=o.RGB16UI),Z===o.UNSIGNED_INT&&(he=o.RGB32UI),Z===o.BYTE&&(he=o.RGB8I),Z===o.SHORT&&(he=o.RGB16I),Z===o.INT&&(he=o.RGB32I)),w===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),Z===o.UNSIGNED_INT&&(he=o.RGBA32UI),Z===o.BYTE&&(he=o.RGBA8I),Z===o.SHORT&&(he=o.RGBA16I),Z===o.INT&&(he=o.RGBA32I)),w===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),w===o.RGBA){const He=ge?Du:gt.getTransfer(pe);Z===o.FLOAT&&(he=o.RGBA32F),Z===o.HALF_FLOAT&&(he=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(he=He===Pt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(D,w){let Z;return D?w===null||w===Ss||w===So?Z=o.DEPTH24_STENCIL8:w===wi?Z=o.DEPTH32F_STENCIL8:w===Ca&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ss||w===So?Z=o.DEPTH_COMPONENT24:w===wi?Z=o.DEPTH_COMPONENT32F:w===Ca&&(Z=o.DEPTH_COMPONENT16),Z}function Y(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==Qn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function k(D){const w=D.target;w.removeEventListener("dispose",k),W(w),w.isVideoTexture&&m.delete(w)}function F(D){const w=D.target;w.removeEventListener("dispose",F),A(w)}function W(D){const w=i.get(D);if(w.__webglInit===void 0)return;const Z=D.source,pe=_.get(Z);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&L(D),Object.keys(pe).length===0&&_.delete(Z)}i.remove(D)}function L(D){const w=i.get(D);o.deleteTexture(w.__webglTexture);const Z=D.source,pe=_.get(Z);delete pe[w.__cacheKey],u.memory.textures--}function A(D){const w=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)o.deleteFramebuffer(w.__webglFramebuffer[pe]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=D.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const he=i.get(Z[pe]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),u.memory.textures--),i.remove(Z[pe])}i.remove(D)}let N=0;function ie(){N=0}function K(){const D=N;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),N+=1,D}function ue(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function fe(D,w){const Z=i.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,D,w);return}}t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+w)}function oe(D,w){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+w)}function le(D,w){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,w);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+w)}function B(D,w){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){ce(Z,D,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+w)}const ae={[xo]:o.REPEAT,[Yr]:o.CLAMP_TO_EDGE,[Au]:o.MIRRORED_REPEAT},se={[Un]:o.NEAREST,[k_]:o.NEAREST_MIPMAP_NEAREST,[xa]:o.NEAREST_MIPMAP_LINEAR,[Qn]:o.LINEAR,[vu]:o.LINEAR_MIPMAP_NEAREST,[lr]:o.LINEAR_MIPMAP_LINEAR},U={[qy]:o.NEVER,[tx]:o.ALWAYS,[Ky]:o.LESS,[K_]:o.LEQUAL,[Zy]:o.EQUAL,[ex]:o.GEQUAL,[Qy]:o.GREATER,[Jy]:o.NOTEQUAL};function ne(D,w){if(w.type===wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Qn||w.magFilter===vu||w.magFilter===xa||w.magFilter===lr||w.minFilter===Qn||w.minFilter===vu||w.minFilter===xa||w.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,ae[w.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ae[w.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ae[w.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,se[w.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Un||w.minFilter!==xa&&w.minFilter!==lr||w.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function De(D,w){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",k));const pe=w.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const he=ue(w);if(he!==D.__cacheKey){ge[he]===void 0&&(ge[he]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ge[he].usedTimes++;const He=ge[D.__cacheKey];He!==void 0&&(ge[D.__cacheKey].usedTimes--,He.usedTimes===0&&L(w)),D.__cacheKey=he,D.__webglTexture=ge[he].texture}return Z}function Q(D,w,Z){let pe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=De(D,w),he=w.source;t.bindTexture(pe,D.__webglTexture,o.TEXTURE0+Z);const He=i.get(he);if(he.version!==He.__version||ge===!0){t.activeTexture(o.TEXTURE0+Z);const Ae=gt.getPrimaries(gt.workingColorSpace),Ne=w.colorSpace===jr?null:gt.getPrimaries(w.colorSpace),ht=w.colorSpace===jr||Ae===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let xe=E(w.image,!1,s.maxTextureSize);xe=Ct(w,xe);const Fe=a.convert(w.format,w.colorSpace),Je=a.convert(w.type);let et=P(w.internalFormat,Fe,Je,w.colorSpace,w.isVideoTexture);ne(pe,w);let Oe;const ft=w.mipmaps,rt=w.isVideoTexture!==!0,bt=He.__version===void 0||ge===!0,V=he.dataReady,be=Y(w,xe);if(w.isDepthTexture)et=b(w.format===Mo,w.type),bt&&(rt?t.texStorage2D(o.TEXTURE_2D,1,et,xe.width,xe.height):t.texImage2D(o.TEXTURE_2D,0,et,xe.width,xe.height,0,Fe,Je,null));else if(w.isDataTexture)if(ft.length>0){rt&&bt&&t.texStorage2D(o.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let re=0,de=ft.length;re<de;re++)Oe=ft[re],rt?V&&t.texSubImage2D(o.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Fe,Je,Oe.data):t.texImage2D(o.TEXTURE_2D,re,et,Oe.width,Oe.height,0,Fe,Je,Oe.data);w.generateMipmaps=!1}else rt?(bt&&t.texStorage2D(o.TEXTURE_2D,be,et,xe.width,xe.height),V&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,xe.width,xe.height,Fe,Je,xe.data)):t.texImage2D(o.TEXTURE_2D,0,et,xe.width,xe.height,0,Fe,Je,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&bt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,be,et,ft[0].width,ft[0].height,xe.depth);for(let re=0,de=ft.length;re<de;re++)if(Oe=ft[re],w.format!==ui)if(Fe!==null)if(rt){if(V)if(w.layerUpdates.size>0){const Pe=Jg(Oe.width,Oe.height,w.format,w.type);for(const Re of w.layerUpdates){const st=Oe.data.subarray(Re*Pe/Oe.data.BYTES_PER_ELEMENT,(Re+1)*Pe/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,re,0,0,Re,Oe.width,Oe.height,1,Fe,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,re,0,0,0,Oe.width,Oe.height,xe.depth,Fe,Oe.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,re,et,Oe.width,Oe.height,xe.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,re,0,0,0,Oe.width,Oe.height,xe.depth,Fe,Je,Oe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,re,et,Oe.width,Oe.height,xe.depth,0,Fe,Je,Oe.data)}else{rt&&bt&&t.texStorage2D(o.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let re=0,de=ft.length;re<de;re++)Oe=ft[re],w.format!==ui?Fe!==null?rt?V&&t.compressedTexSubImage2D(o.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Fe,Oe.data):t.compressedTexImage2D(o.TEXTURE_2D,re,et,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&t.texSubImage2D(o.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Fe,Je,Oe.data):t.texImage2D(o.TEXTURE_2D,re,et,Oe.width,Oe.height,0,Fe,Je,Oe.data)}else if(w.isDataArrayTexture)if(rt){if(bt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,be,et,xe.width,xe.height,xe.depth),V)if(w.layerUpdates.size>0){const re=Jg(xe.width,xe.height,w.format,w.type);for(const de of w.layerUpdates){const Pe=xe.data.subarray(de*re/xe.data.BYTES_PER_ELEMENT,(de+1)*re/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Fe,Je,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Fe,Je,xe.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,et,xe.width,xe.height,xe.depth,0,Fe,Je,xe.data);else if(w.isData3DTexture)rt?(bt&&t.texStorage3D(o.TEXTURE_3D,be,et,xe.width,xe.height,xe.depth),V&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Fe,Je,xe.data)):t.texImage3D(o.TEXTURE_3D,0,et,xe.width,xe.height,xe.depth,0,Fe,Je,xe.data);else if(w.isFramebufferTexture){if(bt)if(rt)t.texStorage2D(o.TEXTURE_2D,be,et,xe.width,xe.height);else{let re=xe.width,de=xe.height;for(let Pe=0;Pe<be;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,et,re,de,0,Fe,Je,null),re>>=1,de>>=1}}else if(ft.length>0){if(rt&&bt){const re=je(ft[0]);t.texStorage2D(o.TEXTURE_2D,be,et,re.width,re.height)}for(let re=0,de=ft.length;re<de;re++)Oe=ft[re],rt?V&&t.texSubImage2D(o.TEXTURE_2D,re,0,0,Fe,Je,Oe):t.texImage2D(o.TEXTURE_2D,re,et,Fe,Je,Oe);w.generateMipmaps=!1}else if(rt){if(bt){const re=je(xe);t.texStorage2D(o.TEXTURE_2D,be,et,re.width,re.height)}V&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,Je,xe)}else t.texImage2D(o.TEXTURE_2D,0,et,Fe,Je,xe);S(w)&&y(pe),He.__version=he.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ce(D,w,Z){if(w.image.length!==6)return;const pe=De(D,w),ge=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Z);const he=i.get(ge);if(ge.version!==he.__version||pe===!0){t.activeTexture(o.TEXTURE0+Z);const He=gt.getPrimaries(gt.workingColorSpace),Ae=w.colorSpace===jr?null:gt.getPrimaries(w.colorSpace),Ne=w.colorSpace===jr||He===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,xe=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let de=0;de<6;de++)!ht&&!xe?Fe[de]=E(w.image[de],!0,s.maxCubemapSize):Fe[de]=xe?w.image[de].image:w.image[de],Fe[de]=Ct(w,Fe[de]);const Je=Fe[0],et=a.convert(w.format,w.colorSpace),Oe=a.convert(w.type),ft=P(w.internalFormat,et,Oe,w.colorSpace),rt=w.isVideoTexture!==!0,bt=he.__version===void 0||pe===!0,V=ge.dataReady;let be=Y(w,Je);ne(o.TEXTURE_CUBE_MAP,w);let re;if(ht){rt&&bt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,be,ft,Je.width,Je.height);for(let de=0;de<6;de++){re=Fe[de].mipmaps;for(let Pe=0;Pe<re.length;Pe++){const Re=re[Pe];w.format!==ui?et!==null?rt?V&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Re.width,Re.height,et,Re.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ft,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Re.width,Re.height,et,Oe,Re.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ft,Re.width,Re.height,0,et,Oe,Re.data)}}}else{if(re=w.mipmaps,rt&&bt){re.length>0&&be++;const de=je(Fe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,be,ft,de.width,de.height)}for(let de=0;de<6;de++)if(xe){rt?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe[de].width,Fe[de].height,et,Oe,Fe[de].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Fe[de].width,Fe[de].height,0,et,Oe,Fe[de].data);for(let Pe=0;Pe<re.length;Pe++){const st=re[Pe].image[de].image;rt?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,st.width,st.height,et,Oe,st.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ft,st.width,st.height,0,et,Oe,st.data)}}else{rt?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,et,Oe,Fe[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,et,Oe,Fe[de]);for(let Pe=0;Pe<re.length;Pe++){const Re=re[Pe];rt?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,et,Oe,Re.image[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ft,et,Oe,Re.image[de])}}}S(w)&&y(o.TEXTURE_CUBE_MAP),he.__version=ge.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Me(D,w,Z,pe,ge,he){const He=a.convert(Z.format,Z.colorSpace),Ae=a.convert(Z.type),Ne=P(Z.internalFormat,He,Ae,Z.colorSpace),ht=i.get(w),xe=i.get(Z);if(xe.__renderTarget=w,!ht.__hasExternalTextures){const Fe=Math.max(1,w.width>>he),Je=Math.max(1,w.height>>he);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,he,Ne,Fe,Je,w.depth,0,He,Ae,null):t.texImage2D(ge,he,Ne,Fe,Je,0,He,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,D),dt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,xe.__webglTexture,0,mt(w)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,xe.__webglTexture,he),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(D,w,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,D),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,he=b(w.stencilBuffer,ge),He=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=mt(w);dt(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,he,w.width,w.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,he,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,he,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,He,o.RENDERBUFFER,D)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const he=pe[ge],He=a.convert(he.format,he.colorSpace),Ae=a.convert(he.type),Ne=P(he.internalFormat,He,Ae,he.colorSpace),ht=mt(w);Z&&dt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,Ne,w.width,w.height):dt(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ht,Ne,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const ge=pe.__webglTexture,he=mt(w);if(w.depthTexture.format===po)dt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Mo)dt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ie(D){const w=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,D)}else if(Z){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(w.__webglDepthbuffer[pe],D,!1);else{const ge=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,he)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),ve(w.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(D,w,Z){const pe=i.get(D);w!==void 0&&Me(pe.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Ie(D)}function It(D){const w=D.texture,Z=i.get(D),pe=i.get(w);D.addEventListener("dispose",F);const ge=D.textures,he=D.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=w.version,u.memory.textures++),he){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)Z.__webglFramebuffer[Ae][Ne]=o.createFramebuffer()}else Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(He)for(let Ae=0,Ne=ge.length;Ae<Ne;Ae++){const ht=i.get(ge[Ae]);ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture(),u.memory.textures++)}if(D.samples>0&&dt(D)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ne=ge[Ae];Z.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ht=a.convert(Ne.format,Ne.colorSpace),xe=a.convert(Ne.type),Fe=P(Ne.internalFormat,ht,xe,Ne.colorSpace,D.isXRRenderTarget===!0),Je=mt(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Je,Fe,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)Me(Z.__webglFramebuffer[Ae][Ne],D,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne);else Me(Z.__webglFramebuffer[Ae],D,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(w)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ae=0,Ne=ge.length;Ae<Ne;Ae++){const ht=ge[Ae],xe=i.get(ht);t.bindTexture(o.TEXTURE_2D,xe.__webglTexture),ne(o.TEXTURE_2D,ht),Me(Z.__webglFramebuffer,D,ht,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),S(ht)&&y(o.TEXTURE_2D)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ne(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)Me(Z.__webglFramebuffer[Ne],D,w,o.COLOR_ATTACHMENT0,Ae,Ne);else Me(Z.__webglFramebuffer,D,w,o.COLOR_ATTACHMENT0,Ae,0);S(w)&&y(Ae),t.unbindTexture()}D.depthBuffer&&Ie(D)}function vt(D){const w=D.textures;for(let Z=0,pe=w.length;Z<pe;Z++){const ge=w[Z];if(S(ge)){const he=R(D),He=i.get(ge).__webglTexture;t.bindTexture(he,He),y(he),t.unbindTexture()}}}const Ft=[],j=[];function An(D){if(D.samples>0){if(dt(D)===!1){const w=D.textures,Z=D.width,pe=D.height;let ge=o.COLOR_BUFFER_BIT;const he=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,He=i.get(D),Ae=w.length>1;if(Ae)for(let Ne=0;Ne<w.length;Ne++)t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const ht=i.get(w[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ht,0)}o.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,o.NEAREST),d===!0&&(Ft.length=0,j.length=0,Ft.push(o.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ft.push(he),j.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,j)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Ne=0;Ne<w.length;Ne++){t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const ht=i.get(w[Ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,ht,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function mt(D){return Math.min(s.maxSamples,D.samples)}function dt(D){const w=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(D){const w=u.render.frame;m.get(D)!==w&&(m.set(D,w),D.update())}function Ct(D,w){const Z=D.colorSpace,pe=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==wn&&Z!==jr&&(gt.getTransfer(Z)===Pt?(pe!==ui||ge!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(f.width=D.naturalWidth||D.width,f.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(f.width=D.displayWidth,f.height=D.displayHeight):(f.width=D.width,f.height=D.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=ie,this.setTexture2D=fe,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Qe,this.setupRenderTarget=It,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=dt}function yw(o,e){function t(i,s=jr){let a;const u=gt.getTransfer(s);if(i===pr)return o.UNSIGNED_BYTE;if(i===nf)return o.UNSIGNED_SHORT_4_4_4_4;if(i===rf)return o.UNSIGNED_SHORT_5_5_5_1;if(i===H_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===B_)return o.BYTE;if(i===z_)return o.SHORT;if(i===Ca)return o.UNSIGNED_SHORT;if(i===tf)return o.INT;if(i===Ss)return o.UNSIGNED_INT;if(i===wi)return o.FLOAT;if(i===Fi)return o.HALF_FLOAT;if(i===V_)return o.ALPHA;if(i===G_)return o.RGB;if(i===ui)return o.RGBA;if(i===W_)return o.LUMINANCE;if(i===X_)return o.LUMINANCE_ALPHA;if(i===po)return o.DEPTH_COMPONENT;if(i===Mo)return o.DEPTH_STENCIL;if(i===sf)return o.RED;if(i===of)return o.RED_INTEGER;if(i===j_)return o.RG;if(i===af)return o.RG_INTEGER;if(i===lf)return o.RGBA_INTEGER;if(i===yu||i===xu||i===Su||i===Mu)if(u===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===yu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===yu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Su)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===xd||i===Sd||i===Md)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===yd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===Td||i===wd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ed||i===Td)return u===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===wd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===bd||i===Cd||i===Rd||i===Pd||i===Ld||i===Dd||i===Id||i===Nd||i===Ud||i===Fd||i===Od||i===kd||i===Bd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ad)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ud)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Od)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eu||i===zd||i===Hd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Eu)return u===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Y_||i===Vd||i===Gd||i===Wd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Eu)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class xw extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sw={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,u=null;const c=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),y=this._getHandJoint(f,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,M=.005;f.inputState.pinching&&_>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Sw)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new cn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nn({vertexShader:Mw,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new Iu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ww extends Ms{constructor(e,t){super();const i=this;let s=null,a=1,u=null,c="local-floor",d=1,f=null,m=null,g=null,_=null,x=null,M=null;const E=new Tw,S=t.getContextAttributes();let y=null,R=null;const P=[],b=[],Y=new Ye;let k=null;const F=new In;F.viewport=new At;const W=new In;W.viewport=new At;const L=[F,W],A=new xw;let N=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=P[Q];return ce===void 0&&(ce=new $h,P[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=P[Q];return ce===void 0&&(ce=new $h,P[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=P[Q];return ce===void 0&&(ce=new $h,P[Q]=ce),ce.getHandSpace()};function K(Q){const ce=b.indexOf(Q.inputSource);if(ce===-1)return;const Me=P[ce];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,f||u),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",fe);for(let Q=0;Q<P.length;Q++){const ce=b[Q];ce!==null&&(b[Q]=null,P[Q].disconnect(ce))}N=null,ie=null,E.reset(),e.setRenderTarget(y),x=null,_=null,g=null,s=null,R=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(Y.width,Y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(Q){f=Q},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(Y),s.renderState.layers===void 0){const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new ci(x.framebufferWidth,x.framebufferHeight,{format:ui,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ce=null,Me=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?Mo:po,Me=S.stencil?So:Ss);const we={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(we),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new ci(_.textureWidth,_.textureHeight,{format:ui,type:pr,depthTexture:new lv(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),f=null,u=await s.requestReferenceSpace(c),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function fe(Q){for(let ce=0;ce<Q.removed.length;ce++){const Me=Q.removed[ce],ve=b.indexOf(Me);ve>=0&&(b[ve]=null,P[ve].disconnect(Me))}for(let ce=0;ce<Q.added.length;ce++){const Me=Q.added[ce];let ve=b.indexOf(Me);if(ve===-1){for(let Ie=0;Ie<P.length;Ie++)if(Ie>=b.length){b.push(Me),ve=Ie;break}else if(b[Ie]===null){b[Ie]=Me,ve=Ie;break}if(ve===-1)break}const we=P[ve];we&&we.connect(Me)}}const oe=new z,le=new z;function B(Q,ce,Me){oe.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=oe.distanceTo(le),we=ce.projectionMatrix.elements,Ie=Me.projectionMatrix.elements,Qe=we[14]/(we[10]-1),It=we[14]/(we[10]+1),vt=(we[9]+1)/we[5],Ft=(we[9]-1)/we[5],j=(we[8]-1)/we[0],An=(Ie[8]+1)/Ie[0],mt=Qe*j,dt=Qe*An,qe=ve/(-j+An),Ct=qe*-j;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ct),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const je=Qe+qe,D=It+qe,w=mt-Ct,Z=dt+(ve-Ct),pe=vt*It/D*je,ge=Ft*It/D*je;Q.projectionMatrix.makePerspective(w,Z,pe,ge,je,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ce=Q.near,Me=Q.far;E.texture!==null&&(E.depthNear>0&&(ce=E.depthNear),E.depthFar>0&&(Me=E.depthFar)),A.near=W.near=F.near=ce,A.far=W.far=F.far=Me,(N!==A.near||ie!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,ie=A.far),F.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,A.layers.mask=F.layers.mask|W.layers.mask;const ve=Q.parent,we=A.cameras;ae(A,ve);for(let Ie=0;Ie<we.length;Ie++)ae(we[Ie],ve);we.length===2?B(A,F,W):A.projectionMatrix.copy(F.projectionMatrix),se(Q,A,ve)};function se(Q,ce,Me){Me===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Eo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(Q){d=Q,_!==null&&(_.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let U=null;function ne(Q,ce){if(m=ce.getViewerPose(f||u),M=ce,m!==null){const Me=m.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let ve=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ie=0;Ie<Me.length;Ie++){const Qe=Me[Ie];let It=null;if(x!==null)It=x.getViewport(Qe);else{const Ft=g.getViewSubImage(_,Qe);It=Ft.viewport,Ie===0&&(e.setRenderTargetTextures(R,Ft.colorTexture,_.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(R))}let vt=L[Ie];vt===void 0&&(vt=new In,vt.layers.enable(Ie),vt.viewport=new At,L[Ie]=vt),vt.matrix.fromArray(Qe.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Qe.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(It.x,It.y,It.width,It.height),Ie===0&&(A.matrix.copy(vt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(vt)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ie=g.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,s.renderState)}}for(let Me=0;Me<P.length;Me++){const ve=b[Me],we=P[Me];ve!==null&&we!==void 0&&we.update(ve,ce,f||u)}U&&U(Q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),M=null}const De=new av;De.setAnimationLoop(ne),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const gs=new Ci,Aw=new at;function bw(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,rv(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,R,P,b){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,b)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),E(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,R,P):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Xn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Xn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const R=e.get(y),P=R.envMap,b=R.envMapRotation;P&&(S.envMap.value=P,gs.copy(b),gs.x*=-1,gs.y*=-1,gs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),S.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(gs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,R,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*R,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,R){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const R=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cw(o,e,t,i){let s={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,P){const b=P.program;i.uniformBlockBinding(R,b)}function f(R,P){let b=s[R.id];b===void 0&&(M(R),b=m(R),s[R.id]=b,R.addEventListener("dispose",S));const Y=P.program;i.updateUBOMapping(R,Y);const k=e.render.frame;a[R.id]!==k&&(_(R),a[R.id]=k)}function m(R){const P=g();R.__bindingPointIndex=P;const b=o.createBuffer(),Y=R.__size,k=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,Y,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,b),b}function g(){for(let R=0;R<c;R++)if(u.indexOf(R)===-1)return u.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const P=s[R.id],b=R.uniforms,Y=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let k=0,F=b.length;k<F;k++){const W=Array.isArray(b[k])?b[k]:[b[k]];for(let L=0,A=W.length;L<A;L++){const N=W[L];if(x(N,k,L,Y)===!0){const ie=N.__offset,K=Array.isArray(N.value)?N.value:[N.value];let ue=0;for(let fe=0;fe<K.length;fe++){const oe=K[fe],le=E(oe);typeof oe=="number"||typeof oe=="boolean"?(N.__data[0]=oe,o.bufferSubData(o.UNIFORM_BUFFER,ie+ue,N.__data)):oe.isMatrix3?(N.__data[0]=oe.elements[0],N.__data[1]=oe.elements[1],N.__data[2]=oe.elements[2],N.__data[3]=0,N.__data[4]=oe.elements[3],N.__data[5]=oe.elements[4],N.__data[6]=oe.elements[5],N.__data[7]=0,N.__data[8]=oe.elements[6],N.__data[9]=oe.elements[7],N.__data[10]=oe.elements[8],N.__data[11]=0):(oe.toArray(N.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ie,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(R,P,b,Y){const k=R.value,F=P+"_"+b;if(Y[F]===void 0)return typeof k=="number"||typeof k=="boolean"?Y[F]=k:Y[F]=k.clone(),!0;{const W=Y[F];if(typeof k=="number"||typeof k=="boolean"){if(W!==k)return Y[F]=k,!0}else if(W.equals(k)===!1)return W.copy(k),!0}return!1}function M(R){const P=R.uniforms;let b=0;const Y=16;for(let F=0,W=P.length;F<W;F++){const L=Array.isArray(P[F])?P[F]:[P[F]];for(let A=0,N=L.length;A<N;A++){const ie=L[A],K=Array.isArray(ie.value)?ie.value:[ie.value];for(let ue=0,fe=K.length;ue<fe;ue++){const oe=K[ue],le=E(oe),B=b%Y,ae=B%le.boundary,se=B+ae;b+=ae,se!==0&&Y-se<le.storage&&(b+=Y-se),ie.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=b,b+=le.storage}}}const k=b%Y;return k>0&&(b+=Y-k),R.__size=b,R.__cache={},this}function E(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),P}function S(R){const P=R.target;P.removeEventListener("dispose",S);const b=u.indexOf(P.__bindingPointIndex);u.splice(b,1),o.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function y(){for(const R in s)o.deleteBuffer(s[R]);u=[],s={},a={}}return{bind:d,update:f,dispose:y}}class Rw{constructor(e={}){const{canvas:t=vx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const R=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=hr,this.toneMappingExposure=1;const b=this;let Y=!1,k=0,F=0,W=null,L=-1,A=null;const N=new At,ie=new At;let K=null;const ue=new $e(0);let fe=0,oe=t.width,le=t.height,B=1,ae=null,se=null;const U=new At(0,0,oe,le),ne=new At(0,0,oe,le);let De=!1;const Q=new cf;let ce=!1,Me=!1;const ve=new at,we=new at,Ie=new z,Qe=new At,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Ft(){return W===null?B:1}let j=i;function An(C,G){return t.getContext(C,G)}try{const C={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ef}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Re,!1),j===null){const G="webgl2";if(j=An(G,C),j===null)throw An(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let mt,dt,qe,Ct,je,D,w,Z,pe,ge,he,He,Ae,Ne,ht,xe,Fe,Je,et,Oe,ft,rt,bt,V;function be(){mt=new NE(j),mt.init(),rt=new yw(j,mt),dt=new CE(j,mt,e,rt),qe=new gw(j,mt),dt.reverseDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),Ct=new OE(j),je=new tw,D=new vw(j,mt,qe,je,dt,rt,Ct),w=new PE(b),Z=new IE(b),pe=new Wx(j),bt=new AE(j,pe),ge=new UE(j,pe,Ct,bt),he=new BE(j,ge,pe,Ct),et=new kE(j,dt,D),xe=new RE(je),He=new ew(b,w,Z,mt,dt,bt,xe),Ae=new bw(b,je),Ne=new iw,ht=new uw(mt),Je=new wE(b,w,Z,qe,he,x,d),Fe=new pw(b,he,dt),V=new Cw(j,Ct,dt,qe),Oe=new bE(j,mt,Ct),ft=new FE(j,mt,Ct),Ct.programs=He.programs,b.capabilities=dt,b.extensions=mt,b.properties=je,b.renderLists=Ne,b.shadowMap=Fe,b.state=qe,b.info=Ct}be();const re=new ww(b,j);this.xr=re,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(oe,le,!1))},this.getSize=function(C){return C.set(oe,le)},this.setSize=function(C,G,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=C,le=G,t.width=Math.floor(C*B),t.height=Math.floor(G*B),ee===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(oe*B,le*B).floor()},this.setDrawingBufferSize=function(C,G,ee){oe=C,le=G,B=ee,t.width=Math.floor(C*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,G,ee,te){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,G,ee,te),qe.viewport(N.copy(U).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,G,ee,te){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,G,ee,te),qe.scissor(ie.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){qe.setScissorTest(De=C)},this.setOpaqueSort=function(C){ae=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,G=!0,ee=!0){let te=0;if(C){let X=!1;if(W!==null){const Te=W.texture.format;X=Te===lf||Te===af||Te===of}if(X){const Te=W.texture.type,Se=Te===pr||Te===Ss||Te===Ca||Te===So||Te===nf||Te===rf,Ve=Je.getClearColor(),Be=Je.getClearAlpha(),tt=Ve.r,it=Ve.g,Ge=Ve.b;Se?(M[0]=tt,M[1]=it,M[2]=Ge,M[3]=Be,j.clearBufferuiv(j.COLOR,0,M)):(E[0]=tt,E[1]=it,E[2]=Ge,E[3]=Be,j.clearBufferiv(j.COLOR,0,E))}else te|=j.COLOR_BUFFER_BIT}G&&(te|=j.DEPTH_BUFFER_BIT),ee&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ne.dispose(),ht.dispose(),je.dispose(),w.dispose(),Z.dispose(),he.dispose(),bt.dispose(),V.dispose(),He.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ts),re.removeEventListener("sessionend",gr),Vi.stop()};function de(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const C=Ct.autoReset,G=Fe.enabled,ee=Fe.autoUpdate,te=Fe.needsUpdate,X=Fe.type;be(),Ct.autoReset=C,Fe.enabled=G,Fe.autoUpdate=ee,Fe.needsUpdate=te,Fe.type=X}function Re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const G=C.target;G.removeEventListener("dispose",st),kt(G)}function kt(C){Zt(C),je.remove(C)}function Zt(C){const G=je.get(C).programs;G!==void 0&&(G.forEach(function(ee){He.releaseProgram(ee)}),C.isShaderMaterial&&He.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,ee,te,X,Te){G===null&&(G=It);const Se=X.isMesh&&X.matrixWorld.determinant()<0,Ve=Ba(C,G,ee,te,X);qe.setMaterial(te,Se);let Be=ee.index,tt=1;if(te.wireframe===!0){if(Be=ge.getWireframeAttribute(ee),Be===void 0)return;tt=2}const it=ee.drawRange,Ge=ee.attributes.position;let xt=it.start*tt,wt=(it.start+it.count)*tt;Te!==null&&(xt=Math.max(xt,Te.start*tt),wt=Math.min(wt,(Te.start+Te.count)*tt)),Be!==null?(xt=Math.max(xt,0),wt=Math.min(wt,Be.count)):Ge!=null&&(xt=Math.max(xt,0),wt=Math.min(wt,Ge.count));const yt=wt-xt;if(yt<0||yt===1/0)return;bt.setup(X,te,Ve,ee,Be);let mn,ot=Oe;if(Be!==null&&(mn=pe.get(Be),ot=ft,ot.setIndex(mn)),X.isMesh)te.wireframe===!0?(qe.setLineWidth(te.wireframeLinewidth*Ft()),ot.setMode(j.LINES)):ot.setMode(j.TRIANGLES);else if(X.isLine){let Xe=te.linewidth;Xe===void 0&&(Xe=1),qe.setLineWidth(Xe*Ft()),X.isLineSegments?ot.setMode(j.LINES):X.isLineLoop?ot.setMode(j.LINE_LOOP):ot.setMode(j.LINE_STRIP)}else X.isPoints?ot.setMode(j.POINTS):X.isSprite&&ot.setMode(j.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xe=X._multiDrawStarts,hi=X._multiDrawCounts,Et=X._multiDrawCount,gn=Be?pe.get(Be).bytesPerElement:1,di=je.get(te).currentProgram.getUniforms();for(let Qt=0;Qt<Et;Qt++)di.setValue(j,"_gl_DrawID",Qt),ot.render(Xe[Qt]/gn,hi[Qt])}else if(X.isInstancedMesh)ot.renderInstances(xt,yt,X.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,hi=Math.min(ee.instanceCount,Xe);ot.renderInstances(xt,yt,hi)}else ot.render(xt,yt)};function St(C,G,ee){C.transparent===!0&&C.side===Mi&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,ws(C,G,ee),C.side=fr,C.needsUpdate=!0,ws(C,G,ee),C.side=Mi):ws(C,G,ee)}this.compile=function(C,G,ee=null){ee===null&&(ee=C),y=ht.get(ee),y.init(G),P.push(y),ee.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),C!==ee&&C.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const te=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let Se=0;Se<Te.length;Se++){const Ve=Te[Se];St(Ve,ee,X),te.add(Ve)}else St(Te,ee,X),te.add(Te)}),P.pop(),y=null,te},this.compileAsync=function(C,G,ee=null){const te=this.compile(C,G,ee);return new Promise(X=>{function Te(){if(te.forEach(function(Se){je.get(Se).currentProgram.isReady()&&te.delete(Se)}),te.size===0){X(C);return}setTimeout(Te,10)}mt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Fn=null;function bn(C){Fn&&Fn(C)}function Ts(){Vi.stop()}function gr(){Vi.start()}const Vi=new av;Vi.setAnimationLoop(bn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(C){Fn=C,re.setAnimationLoop(C),C===null?Vi.stop():Vi.start()},re.addEventListener("sessionstart",Ts),re.addEventListener("sessionend",gr),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,G,W),y=ht.get(C,P.length),y.init(G),P.push(y),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(we),Me=this.localClippingEnabled,ce=xe.init(this.clippingPlanes,Me),S=Ne.get(C,R.length),S.init(),R.push(S),re.enabled===!0&&re.isPresenting===!0){const Te=b.xr.getDepthSensingMesh();Te!==null&&Gi(Te,G,-1/0,b.sortObjects)}Gi(C,G,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ae,se),vt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,vt&&Je.addToRenderList(S,C),this.info.render.frame++,ce===!0&&xe.beginShadows();const ee=y.state.shadowsArray;Fe.render(ee,C,G),ce===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,X=S.transmissive;if(y.setupLights(),G.isArrayCamera){const Te=G.cameras;if(X.length>0)for(let Se=0,Ve=Te.length;Se<Ve;Se++){const Be=Te[Se];Qr(te,X,C,Be)}vt&&Je.render(C);for(let Se=0,Ve=Te.length;Se<Ve;Se++){const Be=Te[Se];Zr(S,C,Be,Be.viewport)}}else X.length>0&&Qr(te,X,C,G),vt&&Je.render(C),Zr(S,C,G);W!==null&&(D.updateMultisampleRenderTarget(W),D.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(b,C,G),bt.resetDefaultState(),L=-1,A=null,P.pop(),P.length>0?(y=P[P.length-1],ce===!0&&xe.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function Gi(C,G,ee,te){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){te&&Qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const Se=he.update(C),Ve=C.material;Ve.visible&&S.push(C,Se,Ve,ee,Qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const Se=he.update(C),Ve=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qe.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Qe.copy(Se.boundingSphere.center)),Qe.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(Ve)){const Be=Se.groups;for(let tt=0,it=Be.length;tt<it;tt++){const Ge=Be[tt],xt=Ve[Ge.materialIndex];xt&&xt.visible&&S.push(C,Se,xt,ee,Qe.z,Ge)}}else Ve.visible&&S.push(C,Se,Ve,ee,Qe.z,null)}}const Te=C.children;for(let Se=0,Ve=Te.length;Se<Ve;Se++)Gi(Te[Se],G,ee,te)}function Zr(C,G,ee,te){const X=C.opaque,Te=C.transmissive,Se=C.transparent;y.setupLightsView(ee),ce===!0&&xe.setGlobalState(b.clippingPlanes,ee),te&&qe.viewport(N.copy(te)),X.length>0&&_r(X,G,ee),Te.length>0&&_r(Te,G,ee),Se.length>0&&_r(Se,G,ee),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Qr(C,G,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[te.id]===void 0&&(y.state.transmissionRenderTarget[te.id]=new ci(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Fi:pr,minFilter:lr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const Te=y.state.transmissionRenderTarget[te.id],Se=te.viewport||N;Te.setSize(Se.z,Se.w);const Ve=b.getRenderTarget();b.setRenderTarget(Te),b.getClearColor(ue),fe=b.getClearAlpha(),fe<1&&b.setClearColor(16777215,.5),b.clear(),vt&&Je.render(ee);const Be=b.toneMapping;b.toneMapping=hr;const tt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),y.setupLightsView(te),ce===!0&&xe.setGlobalState(b.clippingPlanes,te),_r(C,ee,te),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),mt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ge=0,xt=G.length;Ge<xt;Ge++){const wt=G[Ge],yt=wt.object,mn=wt.geometry,ot=wt.material,Xe=wt.group;if(ot.side===Mi&&yt.layers.test(te.layers)){const hi=ot.side;ot.side=Xn,ot.needsUpdate=!0,Oa(yt,ee,te,mn,ot,Xe),ot.side=hi,ot.needsUpdate=!0,it=!0}}it===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}b.setRenderTarget(Ve),b.setClearColor(ue,fe),tt!==void 0&&(te.viewport=tt),b.toneMapping=Be}function _r(C,G,ee){const te=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Te=C.length;X<Te;X++){const Se=C[X],Ve=Se.object,Be=Se.geometry,tt=te===null?Se.material:te,it=Se.group;Ve.layers.test(ee.layers)&&Oa(Ve,G,ee,Be,tt,it)}}function Oa(C,G,ee,te,X,Te){C.onBeforeRender(b,G,ee,te,X,Te),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(b,G,ee,te,C,Te),X.transparent===!0&&X.side===Mi&&X.forceSinglePass===!1?(X.side=Xn,X.needsUpdate=!0,b.renderBufferDirect(ee,G,te,X,C,Te),X.side=fr,X.needsUpdate=!0,b.renderBufferDirect(ee,G,te,X,C,Te),X.side=Mi):b.renderBufferDirect(ee,G,te,X,C,Te),C.onAfterRender(b,G,ee,te,X,Te)}function ws(C,G,ee){G.isScene!==!0&&(G=It);const te=je.get(C),X=y.state.lights,Te=y.state.shadowsArray,Se=X.state.version,Ve=He.getParameters(C,X.state,Te,G,ee),Be=He.getProgramCacheKey(Ve);let tt=te.programs;te.environment=C.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(C.isMeshStandardMaterial?Z:w).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",st),tt=new Map,te.programs=tt);let it=tt.get(Be);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Se)return Ri(C,Ve),it}else Ve.uniforms=He.getUniforms(C),C.onBeforeCompile(Ve,b),it=He.acquireProgram(Ve,Be),tt.set(Be,it),te.uniforms=Ve.uniforms;const Ge=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=xe.uniform),Ri(C,Ve),te.needsLights=ku(C),te.lightsStateVersion=Se,te.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function ka(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Tu.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Ri(C,G){const ee=je.get(C);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Ba(C,G,ee,te,X){G.isScene!==!0&&(G=It),D.resetTextureUnits();const Te=G.fog,Se=te.isMeshStandardMaterial?G.environment:null,Ve=W===null?b.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:wn,Be=(te.isMeshStandardMaterial?Z:w).get(te.envMap||Se),tt=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,it=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ge=!!ee.morphAttributes.position,xt=!!ee.morphAttributes.normal,wt=!!ee.morphAttributes.color;let yt=hr;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(yt=b.toneMapping);const mn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ot=mn!==void 0?mn.length:0,Xe=je.get(te),hi=y.state.lights;if(ce===!0&&(Me===!0||C!==A)){const Cn=C===A&&te.id===L;xe.setState(te,C,Cn)}let Et=!1;te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==hi.state.version||Xe.outputColorSpace!==Ve||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isBatchedMesh&&Xe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xe.instancingMorph===!1&&X.morphTexture!==null||Xe.envMap!==Be||te.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==xe.numPlanes||Xe.numIntersection!==xe.numIntersection)||Xe.vertexAlphas!==tt||Xe.vertexTangents!==it||Xe.morphTargets!==Ge||Xe.morphNormals!==xt||Xe.morphColors!==wt||Xe.toneMapping!==yt||Xe.morphTargetsCount!==ot)&&(Et=!0):(Et=!0,Xe.__version=te.version);let gn=Xe.currentProgram;Et===!0&&(gn=ws(te,G,X));let di=!1,Qt=!1,Pi=!1;const Ut=gn.getUniforms(),Jn=Xe.uniforms;if(qe.useProgram(gn.program)&&(di=!0,Qt=!0,Pi=!0),te.id!==L&&(L=te.id,Qt=!0),di||A!==C){qe.buffers.depth.getReversed()?(ve.copy(C.projectionMatrix),xx(ve),Sx(ve),Ut.setValue(j,"projectionMatrix",ve)):Ut.setValue(j,"projectionMatrix",C.projectionMatrix),Ut.setValue(j,"viewMatrix",C.matrixWorldInverse);const ei=Ut.map.cameraPosition;ei!==void 0&&ei.setValue(j,Ie.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&Ut.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ut.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Qt=!0,Pi=!0)}if(X.isSkinnedMesh){Ut.setOptional(j,X,"bindMatrix"),Ut.setOptional(j,X,"bindMatrixInverse");const Cn=X.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ut.setValue(j,"boneTexture",Cn.boneTexture,D))}X.isBatchedMesh&&(Ut.setOptional(j,X,"batchingTexture"),Ut.setValue(j,"batchingTexture",X._matricesTexture,D),Ut.setOptional(j,X,"batchingIdTexture"),Ut.setValue(j,"batchingIdTexture",X._indirectTexture,D),Ut.setOptional(j,X,"batchingColorTexture"),X._colorsTexture!==null&&Ut.setValue(j,"batchingColorTexture",X._colorsTexture,D));const Wi=ee.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&et.update(X,ee,gn),(Qt||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Ut.setValue(j,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Jn.envMap.value=Be,Jn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(Jn.envMapIntensity.value=G.environmentIntensity),Qt&&(Ut.setValue(j,"toneMappingExposure",b.toneMappingExposure),Xe.needsLights&&za(Jn,Pi),Te&&te.fog===!0&&Ae.refreshFogUniforms(Jn,Te),Ae.refreshMaterialUniforms(Jn,te,B,le,y.state.transmissionRenderTarget[C.id]),Tu.upload(j,ka(Xe),Jn,D)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Tu.upload(j,ka(Xe),Jn,D),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ut.setValue(j,"center",X.center),Ut.setValue(j,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(j,"normalMatrix",X.normalMatrix),Ut.setValue(j,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Cn=te.uniformsGroups;for(let ei=0,On=Cn.length;ei<On;ei++){const Ha=Cn[ei];V.update(Ha,gn),V.bind(Ha,gn)}}return gn}function za(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function ku(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,G,ee){je.get(C.texture).__webglTexture=G,je.get(C.depthTexture).__webglTexture=ee;const te=je.get(C);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const ee=je.get(C);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,ee=0){W=C,k=G,F=ee;let te=!0,X=null,Te=!1,Se=!1;if(C){const Be=je.get(C);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(j.FRAMEBUFFER,null),te=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Be.__hasExternalTextures)D.rebindTextures(C,je.get(C.texture).__webglTexture,je.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&je.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Se=!0);const it=je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[G])?X=it[G][ee]:X=it[G],Te=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?X=je.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?X=it[ee]:X=it,N.copy(C.viewport),ie.copy(C.scissor),K=C.scissorTest}else N.copy(U).multiplyScalar(B).floor(),ie.copy(ne).multiplyScalar(B).floor(),K=De;if(qe.bindFramebuffer(j.FRAMEBUFFER,X)&&te&&qe.drawBuffers(C,X),qe.viewport(N),qe.scissor(ie),qe.setScissorTest(K),Te){const Be=je.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,ee)}else if(Se){const Be=je.get(C.texture),tt=G||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,tt)}L=-1},this.readRenderTargetPixels=function(C,G,ee,te,X,Te,Se){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ve=Ve[Se]),Ve){qe.bindFramebuffer(j.FRAMEBUFFER,Ve);try{const Be=C.texture,tt=Be.format,it=Be.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-te&&ee>=0&&ee<=C.height-X&&j.readPixels(G,ee,te,X,rt.convert(tt),rt.convert(it),Te)}finally{const Be=W!==null?je.get(W).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,G,ee,te,X,Te,Se){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ve=Ve[Se]),Ve){const Be=C.texture,tt=Be.format,it=Be.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-te&&ee>=0&&ee<=C.height-X){qe.bindFramebuffer(j.FRAMEBUFFER,Ve);const Ge=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ge),j.bufferData(j.PIXEL_PACK_BUFFER,Te.byteLength,j.STREAM_READ),j.readPixels(G,ee,te,X,rt.convert(tt),rt.convert(it),0);const xt=W!==null?je.get(W).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,xt);const wt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await yx(j,wt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ge),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Te),j.deleteBuffer(Ge),j.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,ee=0){C.isTexture!==!0&&(Sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const te=Math.pow(2,-ee),X=Math.floor(C.image.width*te),Te=Math.floor(C.image.height*te),Se=G!==null?G.x:0,Ve=G!==null?G.y:0;D.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,Se,Ve,X,Te),qe.unbindTexture()},this.copyTextureToTexture=function(C,G,ee=null,te=null,X=0){C.isTexture!==!0&&(Sa("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,C=arguments[1],G=arguments[2],X=arguments[3]||0,ee=null);let Te,Se,Ve,Be,tt,it,Ge,xt,wt;const yt=C.isCompressedTexture?C.mipmaps[X]:C.image;ee!==null?(Te=ee.max.x-ee.min.x,Se=ee.max.y-ee.min.y,Ve=ee.isBox3?ee.max.z-ee.min.z:1,Be=ee.min.x,tt=ee.min.y,it=ee.isBox3?ee.min.z:0):(Te=yt.width,Se=yt.height,Ve=yt.depth||1,Be=0,tt=0,it=0),te!==null?(Ge=te.x,xt=te.y,wt=te.z):(Ge=0,xt=0,wt=0);const mn=rt.convert(G.format),ot=rt.convert(G.type);let Xe;G.isData3DTexture?(D.setTexture3D(G,0),Xe=j.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),Xe=j.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),Xe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,G.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,G.unpackAlignment);const hi=j.getParameter(j.UNPACK_ROW_LENGTH),Et=j.getParameter(j.UNPACK_IMAGE_HEIGHT),gn=j.getParameter(j.UNPACK_SKIP_PIXELS),di=j.getParameter(j.UNPACK_SKIP_ROWS),Qt=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,yt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Be),j.pixelStorei(j.UNPACK_SKIP_ROWS,tt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,it);const Pi=C.isDataArrayTexture||C.isData3DTexture,Ut=G.isDataArrayTexture||G.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Jn=je.get(C),Wi=je.get(G),Cn=je.get(Jn.__renderTarget),ei=je.get(Wi.__renderTarget);qe.bindFramebuffer(j.READ_FRAMEBUFFER,Cn.__webglFramebuffer),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let On=0;On<Ve;On++)Pi&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,je.get(C).__webglTexture,X,it+On),C.isDepthTexture?(Ut&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,je.get(G).__webglTexture,X,wt+On),j.blitFramebuffer(Be,tt,Te,Se,Ge,xt,Te,Se,j.DEPTH_BUFFER_BIT,j.NEAREST)):Ut?j.copyTexSubImage3D(Xe,X,Ge,xt,wt+On,Be,tt,Te,Se):j.copyTexSubImage2D(Xe,X,Ge,xt,wt+On,Be,tt,Te,Se);qe.bindFramebuffer(j.READ_FRAMEBUFFER,null),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ut?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(Xe,X,Ge,xt,wt,Te,Se,Ve,mn,ot,yt.data):G.isCompressedArrayTexture?j.compressedTexSubImage3D(Xe,X,Ge,xt,wt,Te,Se,Ve,mn,yt.data):j.texSubImage3D(Xe,X,Ge,xt,wt,Te,Se,Ve,mn,ot,yt):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,X,Ge,xt,Te,Se,mn,ot,yt.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,X,Ge,xt,yt.width,yt.height,mn,yt.data):j.texSubImage2D(j.TEXTURE_2D,X,Ge,xt,Te,Se,mn,ot,yt);j.pixelStorei(j.UNPACK_ROW_LENGTH,hi),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Et),j.pixelStorei(j.UNPACK_SKIP_PIXELS,gn),j.pixelStorei(j.UNPACK_SKIP_ROWS,di),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Qt),X===0&&G.generateMipmaps&&j.generateMipmap(Xe),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,G,ee=null,te=null,X=0){return C.isTexture!==!0&&(Sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,C=arguments[2],G=arguments[3],X=arguments[4]||0),Sa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,G,ee,te,X)},this.initRenderTarget=function(C){je.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){k=0,F=0,W=null,qe.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}class Pw extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new z;class df{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new df(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const e_=new z,t_=new At,n_=new At,Dw=new z,i_=new at,uu=new z,qh=new Bi,r_=new at,Kh=new Na;class Iw extends Nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ng,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uu),this.boundingBox.expandByPoint(uu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uu),this.boundingSphere.expandByPoint(uu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qh.copy(this.boundingSphere),qh.applyMatrix4(s),e.ray.intersectsSphere(qh)!==!1&&(r_.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(r_),!(this.boundingBox!==null&&Kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ng?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;t_.fromBufferAttribute(s.attributes.skinIndex,e),n_.fromBufferAttribute(s.attributes.skinWeight,e),e_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const u=n_.getComponent(a);if(u!==0){const c=t_.getComponent(a);i_.multiplyMatrices(i.bones[c].matrixWorld,i.boneInverses[c]),t.addScaledVector(Dw.copy(e_).applyMatrix4(i_),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fv extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pv extends cn{constructor(e=null,t=1,i=1,s,a,u,c,d,f=Un,m=Un,g,_){super(null,u,c,d,f,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const s_=new at,Nw=new at;class ff{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,u=e.length;a<u;a++){const c=e[a]?e[a].matrixWorld:Nw;s_.multiplyMatrices(c,t[a]),s_.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ff(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new pv(t,e,e,ui,wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let u=t[a];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),u=new fv),this.bones.push(u),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const u=t[s];e.bones.push(u.uuid);const c=i[s];e.boneInverses.push(c.toArray())}return e}}class $d extends hn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lo=new at,o_=new at,cu=[],a_=new mr,Uw=new at,ma=new Nn,ga=new Bi;class mv extends Nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $d(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Uw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),a_.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(a_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),ga.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=s[u+c]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(i),e.ray.intersectsSphere(ga)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,lo),o_.multiplyMatrices(i,lo),ma.matrixWorld=o_,ma.raycast(e,cu);for(let u=0,c=cu.length;u<c;u++){const d=cu[u];d.instanceId=a,d.object=this,t.push(d)}cu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $d(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pv(new Float32Array(s*this.count),s,this.count,sf,wi));const a=this.morphTexture.source.data.data;let u=0;for(let f=0;f<i.length;f++)u+=i[f];const c=this.geometry.morphTargetsRelative?1:1-u,d=s*e;a[d]=c,a.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fu extends Oi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cu=new z,Ru=new z,l_=new at,_a=new Na,hu=new Bi,Zh=new z,u_=new z;class Ou extends Wt{constructor(e=new Tn,t=new Fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Cu.fromBufferAttribute(t,s-1),Ru.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Cu.distanceTo(Ru);e.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hu.copy(i.boundingSphere),hu.applyMatrix4(s),hu.radius+=a,e.ray.intersectsSphere(hu)===!1)return;l_.copy(s).invert(),_a.copy(e.ray).applyMatrix4(l_);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=f){const y=m.getX(E),R=m.getX(E+1),P=du(this,e,_a,d,y,R);P&&t.push(P)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(x),y=du(this,e,_a,d,E,S);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=f){const y=du(this,e,_a,d,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=du(this,e,_a,d,M-1,x);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function du(o,e,t,i,s,a){const u=o.geometry.attributes.position;if(Cu.fromBufferAttribute(u,s),Ru.fromBufferAttribute(u,a),t.distanceSqToSegment(Cu,Ru,Zh,u_)>i)return;Zh.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Zh);if(!(d<e.near||d>e.far))return{distance:d,point:u_.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const c_=new z,h_=new z;class gv extends Ou{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)c_.fromBufferAttribute(t,s),h_.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+c_.distanceTo(h_);e.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fw extends Ou{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _v extends Oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const d_=new at,qd=new Na,fu=new Bi,pu=new z;class Ow extends Wt{constructor(e=new Tn,t=new _v){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fu.copy(i.boundingSphere),fu.applyMatrix4(s),fu.radius+=a,e.ray.intersectsSphere(fu)===!1)return;d_.copy(s).invert(),qd.copy(e.ray).applyMatrix4(d_);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=i.index,g=i.attributes.position;if(f!==null){const _=Math.max(0,u.start),x=Math.min(f.count,u.start+u.count);for(let M=_,E=x;M<E;M++){const S=f.getX(M);pu.fromBufferAttribute(g,S),f_(pu,S,d,s,e,t,this)}}else{const _=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let M=_,E=x;M<E;M++)pu.fromBufferAttribute(g,M),f_(pu,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function f_(o,e,t,i,s,a,u){const c=qd.distanceSqToPoint(o);if(c<t){const d=new z;qd.closestPointToPoint(o,d),d.applyMatrix4(i);const f=s.ray.origin.distanceTo(d);if(f<s.near||f>s.far)return;a.push({distance:f,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class kw extends nn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class pf extends Oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q_,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zi extends pf{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mu(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Bw(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function zw(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function p_(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,u=0;u!==i;++a){const c=t[a]*e;for(let d=0;d!==e;++d)s[u++]=o[c+d]}return s}function vv(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let u=a[i];if(u!==void 0)if(Array.isArray(u))do u=a[i],u!==void 0&&(e.push(a.time),t.push.apply(t,u)),a=o[s++];while(a!==void 0);else if(u.toArray!==void 0)do u=a[i],u!==void 0&&(e.push(a.time),u.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do u=a[i],u!==void 0&&(e.push(a.time),t.push(u)),a=o[s++];while(a!==void 0)}class Fa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let u;n:{i:if(!(e<s)){for(let c=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=s,s=t[++i],e<s)break t}u=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(i=2,a=c);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}u=i,i=0;break n}break e}for(;i<u;){const c=i+u>>>1;e<t[c]?u=c:i=c+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let u=0;u!==s;++u)t[u]=i[a+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Hw extends Fa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ig,endingEnd:ig}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,u=e+1,c=s[a],d=s[u];if(c===void 0)switch(this.getSettings_().endingStart){case rg:a=e,c=2*t-i;break;case sg:a=s.length-2,c=t+s[a]-s[a+1];break;default:a=e,c=i}if(d===void 0)switch(this.getSettings_().endingEnd){case rg:u=e,d=2*i-t;break;case sg:u=1,d=i+s[1]-s[0];break;default:u=e-1,d=t}const f=(i-t)*.5,m=this.valueSize;this._weightPrev=f/(t-c),this._weightNext=f/(d-i),this._offsetPrev=a*m,this._offsetNext=u*m}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=e*c,f=d-c,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,y=-_*S+2*_*E-_*M,R=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,P=(-1-x)*S+(1.5+x)*E+.5*M,b=x*S-x*E;for(let Y=0;Y!==c;++Y)a[Y]=y*u[m+Y]+R*u[f+Y]+P*u[d+Y]+b*u[g+Y];return a}}class Vw extends Fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=e*c,f=d-c,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==c;++_)a[_]=u[f+_]*g+u[d+_]*m;return a}}class Gw extends Fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mu(t,this.TimeBufferType),this.values=mu(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mu(e.times,Array),values:mu(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ra:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case Sh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return Sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,u=s-1;for(;a!==s&&i[a]<e;)++a;for(;u!==-1&&i[u]>t;)--u;if(++u,a!==0||u!==s){a>=u&&(u=Math.max(u,1),a=u-1);const c=this.getValueSize();this.times=i.slice(a,u),this.values=this.values.slice(a*c,u*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let c=0;c!==a;c++){const d=i[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,u),e=!1;break}u=d}if(s!==void 0&&Bw(s))for(let c=0,d=s.length;c!==d;++c){const f=s[c];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sh,a=e.length-1;let u=1;for(let c=1;c<a;++c){let d=!1;const f=e[c],m=e[c+1];if(f!==m&&(c!==1||f!==e[0]))if(s)d=!0;else{const g=c*i,_=g-i,x=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[_+M]||E!==t[x+M]){d=!0;break}}}if(d){if(c!==u){e[u]=e[c];const g=c*i,_=u*i;for(let x=0;x!==i;++x)t[_+x]=t[g+x]}++u}}if(a>0){e[u]=e[a];for(let c=a*i,d=u*i,f=0;f!==i;++f)t[d+f]=t[c+f];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=Pa;class Po extends Hi{constructor(e,t,i){super(e,t,i)}}Po.prototype.ValueTypeName="bool";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=Ra;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class yv extends Hi{}yv.prototype.ValueTypeName="color";class wo extends Hi{}wo.prototype.ValueTypeName="number";class Ww extends Fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=(i-t)/(s-t);let f=e*c;for(let m=f+c;f!==m;f+=4)bi.slerpFlat(a,0,u,f-c,u,f,d);return a}}class Ao extends Hi{InterpolantFactoryMethodLinear(e){return new Ww(this.times,this.values,this.getValueSize(),e)}}Ao.prototype.ValueTypeName="quaternion";Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class Lo extends Hi{constructor(e,t,i){super(e,t,i)}}Lo.prototype.ValueTypeName="string";Lo.prototype.ValueBufferType=Array;Lo.prototype.DefaultInterpolation=Ra;Lo.prototype.InterpolantFactoryMethodLinear=void 0;Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends Hi{}bo.prototype.ValueTypeName="vector";class Xw{constructor(e="",t=-1,i=[],s=Wy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let u=0,c=i.length;u!==c;++u)t.push(Yw(i[u]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,u=i.length;a!==u;++a)t.push(Hi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,u=[];for(let c=0;c<a;c++){let d=[],f=[];d.push((c+a-1)%a,c,(c+1)%a),f.push(0,1,0);const m=zw(d);d=p_(d,1,m),f=p_(f,1,m),!s&&d[0]===0&&(d.push(a),f.push(f[0])),u.push(new wo(".morphTargetInfluences["+t[c].name+"]",d,f).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,d=e.length;c<d;c++){const f=e[c],m=f.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(f)}}const u=[];for(const c in s)u.push(this.CreateFromMorphTargetSequence(c,s[c],t,i));return u}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,x,M,E){if(x.length!==0){const S=[],y=[];vv(x,S,y,M),S.length!==0&&E.push(new g(_,S,y))}},s=[],a=e.name||"default",u=e.fps||30,c=e.blendMode;let d=e.length||-1;const f=e.hierarchy||[];for(let g=0;g<f.length;g++){const _=f[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)x[_[M].morphTargets[E]]=-1;for(const E in x){const S=[],y=[];for(let R=0;R!==_[M].morphTargets.length;++R){const P=_[M];S.push(P.time),y.push(P.morphTarget===E?1:0)}s.push(new wo(".morphTargetInfluence["+E+"]",S,y))}d=x.length*u}else{const x=".bones["+t[g].name+"]";i(bo,x+".position",_,"pos",s),i(Ao,x+".quaternion",_,"rot",s),i(bo,x+".scale",_,"scl",s)}}return s.length===0?null:new this(a,d,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jw(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wo;case"vector":case"vector2":case"vector3":case"vector4":return bo;case"color":return yv;case"quaternion":return Ao;case"bool":case"boolean":return Po;case"string":return Lo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Yw(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jw(o.type);if(o.times===void 0){const t=[],i=[];vv(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Kr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class xv{constructor(e,t,i){const s=this;let a=!1,u=0,c=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){c++,a===!1&&s.onStart!==void 0&&s.onStart(m,u,c),a=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){const g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=f.length;g<_;g+=2){const x=f[g],M=f[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null}}}const $w=new xv;class Es{constructor(e){this.manager=e!==void 0?e:$w,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const rr={};class qw extends Error{constructor(e,t){super(e),this.response=t}}class Pu extends Es{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Kr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:i,onError:s});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:i,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,d=this.responseType;fetch(u).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const m=rr[e],g=f.body.getReader(),_=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let E=0;const S=new ReadableStream({start(y){R();function R(){g.read().then(({done:P,value:b})=>{if(P)y.close();else{E+=b.byteLength;const Y=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let k=0,F=m.length;k<F;k++){const W=m[k];W.onProgress&&W.onProgress(Y)}y.enqueue(b),R()}},P=>{y.error(P)})}}});return new Response(S)}else throw new qw(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(m=>new DOMParser().parseFromString(m,c));case"json":return f.json();default:if(c===void 0)return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(c),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return f.arrayBuffer().then(M=>x.decode(M))}}}).then(f=>{Kr.add(e,f);const m=rr[e];delete rr[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onLoad&&x.onLoad(f)}}).catch(f=>{const m=rr[e];if(m===void 0)throw this.manager.itemError(e),f;delete rr[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onError&&x.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kw extends Es{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Kr.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=La("img");function d(){m(),Kr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){c.removeEventListener("load",d,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class Sv extends Es{constructor(e){super(e)}load(e,t,i,s){const a=new cn,u=new Kw(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class mf extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qh=new at,m_=new z,g_=new z;class gf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;m_.setFromMatrixPosition(e.matrixWorld),t.position.copy(m_),g_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(g_),t.updateMatrixWorld(),Qh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zw extends gf{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Eo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qw extends mf{constructor(e,t,i=0,s=Math.PI/3,a=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=u,this.map=null,this.shadow=new Zw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const __=new at,va=new z,Jh=new z;class Jw extends gf{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),Jh.copy(i.position),Jh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jh),i.updateMatrixWorld(),s.makeTranslation(-va.x,-va.y,-va.z),__.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(__)}}class eA extends mf{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tA extends gf{constructor(){super(new Nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nA extends mf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new tA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ba{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class iA extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Kr.get(e);if(u!==void 0){if(a.manager.itemStart(e),u.then){u.then(f=>{t&&t(f),a.manager.itemEnd(e)}).catch(f=>{s&&s(f)});return}return setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const d=fetch(e,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(f){return Kr.add(e,f),t&&t(f),a.manager.itemEnd(e),f}).catch(function(f){s&&s(f),Kr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Kr.add(e,d),a.manager.itemStart(e)}}class Mv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=v_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=v_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function v_(){return performance.now()}const _f="\\[\\]\\.:\\/",rA=new RegExp("["+_f+"]","g"),vf="[^"+_f+"]",sA="[^"+_f.replace("\\.","")+"]",oA=/((?:WC+[\/:])*)/.source.replace("WC",vf),aA=/(WCOD+)?/.source.replace("WCOD",sA),lA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vf),uA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vf),cA=new RegExp("^"+oA+aA+lA+uA+"$"),hA=["material","materials","bones","map"];class dA{constructor(e,t,i){const s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Dt{constructor(e,t,i){this.path=t,this.parsedPath=i||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,i):new Dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rA,"")}static parseTrackName(e){const t=cA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);hA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let u=0;u<a.length;u++){const c=a[u];if(c.name===t||c.uuid===t)return c;const d=i(c.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const u=e[s];if(u===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=a}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=dA;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class y_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(pn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class x_ extends gv{constructor(e=10,t=10,i=4473924,s=8947848){i=new $e(i),s=new $e(s);const a=t/2,u=e/t,c=e/2,d=[],f=[];for(let _=0,x=0,M=-c;_<=t;_++,M+=u){d.push(-c,0,M,c,0,M),d.push(M,0,-c,M,0,c);const E=_===a?i:s;E.toArray(f,x),x+=3,E.toArray(f,x),x+=3,E.toArray(f,x),x+=3,E.toArray(f,x),x+=3}const m=new Tn;m.setAttribute("position",new En(d,3)),m.setAttribute("color",new En(f,3));const g=new Fu({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fA extends Ms{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);function S_(o,e){if(e===Xy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Xd||e===$_){let t=o.getIndex();if(t===null){const u=[],c=o.getAttribute("position");if(c!==void 0){for(let d=0;d<c.count;d++)u.push(d);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Xd)for(let u=1;u<=i;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<i;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class pA extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yA(t)}),this.register(function(t){return new xA(t)}),this.register(function(t){return new RA(t)}),this.register(function(t){return new PA(t)}),this.register(function(t){return new LA(t)}),this.register(function(t){return new MA(t)}),this.register(function(t){return new EA(t)}),this.register(function(t){return new TA(t)}),this.register(function(t){return new wA(t)}),this.register(function(t){return new vA(t)}),this.register(function(t){return new AA(t)}),this.register(function(t){return new SA(t)}),this.register(function(t){return new CA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new gA(t)}),this.register(function(t){return new DA(t)}),this.register(function(t){return new IA(t)})}load(e,t,i,s){const a=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const f=ba.extractUrlBase(e);u=ba.resolveURL(f,this.path)}else u=ba.extractUrlBase(e);this.manager.itemStart(e);const c=function(f){s?s(f):console.error(f),a.manager.itemError(e),a.manager.itemEnd(e)},d=new Pu(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(f){try{a.parse(f,u,function(m){t(m),a.manager.itemEnd(e)},c)}catch(m){c(m)}},i,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const u={},c={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===Ev){try{u[_t.KHR_BINARY_GLTF]=new NA(e)}catch(g){s&&s(g);return}a=JSON.parse(u[_t.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new YA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](f);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[g.name]=g,u[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case _t.KHR_MATERIALS_UNLIT:u[g]=new _A;break;case _t.KHR_DRACO_MESH_COMPRESSION:u[g]=new UA(a,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:u[g]=new FA;break;case _t.KHR_MESH_QUANTIZATION:u[g]=new OA;break;default:_.indexOf(g)>=0&&c[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}f.setExtensions(u),f.setPlugins(c),f.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function mA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gA{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let f;const m=new $e(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],wn);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":f=new nA(m),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new eA(m),f.distance=g;break;case"spot":f=new Qw(m),f.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,f.angle=d.spot.outerConeAngle,f.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return f.position.set(0,0,0),f.decay=2,ar(f,d),d.intensity!==void 0&&(f.intensity=d.intensity),f.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(f),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(d){return i._getNodeRef(t.cache,c,d)})}}class _A{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return $r}extendParams(e,t,i){const s=[];e.color=new $e(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const u=a.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],wn),e.opacity=u[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,jt))}return Promise.all(s)}}class vA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class yA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const c=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(c,c)}return Promise.all(a)}}class xA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class SA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(a)}}class MA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const c=u.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],wn)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",u.sheenColorTexture,jt)),u.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(a)}}class EA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(a)}}class TA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const c=u.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(c[0],c[1],c[2],wn),Promise.all(a)}}class wA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class AA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",u.specularTexture));const c=u.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(c[0],c[1],c[2],wn),u.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",u.specularColorTexture,jt)),Promise.all(a)}}class bA{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(a)}}class CA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(a)}}class RA{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,u)}}class PA{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=s.images[u.source];let d=i.textureLoader;if(c.uri){const f=i.options.manager.getHandler(c.uri);f!==null&&(d=f)}return this.detectSupport().then(function(f){if(f)return i.loadTextureImage(e,u.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LA{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=s.images[u.source];let d=i.textureLoader;if(c.uri){const f=i.options.manager.getHandler(c.uri);f!==null&&(d=f)}return this.detectSupport().then(function(f){if(f)return i.loadTextureImage(e,u.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DA{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const d=s.byteOffset||0,f=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(c,d,f);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(m*g);return u.decodeGltfBuffer(new Uint8Array(x),m,g,_,s.mode,s.filter),x})})}else return null}}class IA{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const f of s.primitives)if(f.mode!==li.TRIANGLES&&f.mode!==li.TRIANGLE_STRIP&&f.mode!==li.TRIANGLE_FAN&&f.mode!==void 0)return null;const u=i.extensions[this.name].attributes,c=[],d={};for(const f in u)c.push(this.parser.getDependency("accessor",u[f]).then(m=>(d[f]=m,d[f])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(f=>{const m=f.pop(),g=m.isGroup?m.children:[m],_=f[0].count,x=[];for(const M of g){const E=new at,S=new z,y=new bi,R=new z(1,1,1),P=new mv(M.geometry,M.material,_);for(let b=0;b<_;b++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,b),d.ROTATION&&y.fromBufferAttribute(d.ROTATION,b),d.SCALE&&R.fromBufferAttribute(d.SCALE,b),P.setMatrixAt(b,E.compose(S,y,R));for(const b in d)if(b==="_COLOR_0"){const Y=d[b];P.instanceColor=new $d(Y.array,Y.itemSize,Y.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&M.geometry.setAttribute(b,d[b]);Wt.prototype.copy.call(P,M),this.parser.assignFinalMaterial(P),x.push(P)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const Ev="glTF",ya=12,M_={JSON:1313821514,BIN:5130562};class NA{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ya),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ev)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ya,a=new DataView(e,ya);let u=0;for(;u<s;){const c=a.getUint32(u,!0);u+=4;const d=a.getUint32(u,!0);if(u+=4,d===M_.JSON){const f=new Uint8Array(e,ya+u,c);this.content=i.decode(f)}else if(d===M_.BIN){const f=ya+u;this.body=e.slice(f,f+c)}u+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,c={},d={},f={};for(const m in u){const g=Kd[m]||m.toLowerCase();c[g]=u[m]}for(const m in e.attributes){const g=Kd[m]||m.toLowerCase();if(u[m]!==void 0){const _=i.accessors[e.attributes[m]],x=go[_.componentType];f[g]=x.name,d[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(x){for(const M in x.attributes){const E=x.attributes[M],S=d[M];S!==void 0&&(E.normalized=S)}g(x)},c,f,wn,_)})})}}class FA{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OA{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class Tv extends Fa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let u=0;u!==s;u++)t[u]=i[a+u];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=c*2,f=c*3,m=s-t,g=(i-t)/m,_=g*g,x=_*g,M=e*f,E=M-f,S=-2*x+3*_,y=x-_,R=1-S,P=y-_+g;for(let b=0;b!==c;b++){const Y=u[E+b+c],k=u[E+b+d]*m,F=u[M+b+c],W=u[M+b]*m;a[b]=R*Y+P*k+S*F+y*W}return a}}const kA=new bi;class BA extends Tv{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return kA.fromArray(a).normalize().toArray(a),a}}const li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},go={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},E_={9728:Un,9729:Qn,9984:k_,9985:vu,9986:xa,9987:lr},T_={33071:Yr,33648:Au,10497:xo},ed={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zA={CUBICSPLINE:void 0,LINEAR:Pa,STEP:Ra},td={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new pf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fr})),o.DefaultMaterial}function _s(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ar(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VA(o,e,t){let i=!1,s=!1,a=!1;for(let f=0,m=e.length;f<m;f++){const g=e[f];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const u=[],c=[],d=[];for(let f=0,m=e.length;f<m;f++){const g=e[f];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;u.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;c.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(_)}}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(d)]).then(function(f){const m=f[0],g=f[1],_=f[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function GA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WA(o){let e;const t=o.extensions&&o.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nd(t.attributes):e=o.indices+":"+nd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+nd(o.targets[i]);return e}function nd(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Zd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const jA=new at;class YA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,u=-1;if(typeof navigator<"u"){const c=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(c)===!0;const d=c.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,a=c.indexOf("Firefox")>-1,u=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&u<98?this.textureLoader=new Sv(this.options.manager):this.textureLoader=new iA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(u){const c={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:i,userData:{}};return _s(a,c,s),ar(c,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(c)})).then(function(){for(const d of c.scenes)d.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const u=t[s].joints;for(let c=0,d=u.length;c<d;c++)e[u[c]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(i[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(u,c)=>{const d=this.associations.get(u);d!=null&&this.associations.set(c,d);for(const[f,m]of u.children.entries())a(m,c.children[f])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,u){return i.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,u){i.load(ba.resolveURL(t.uri,s.path),a,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=ed[s.type],c=go[s.componentType],d=s.normalized===!0,f=new c(s.count*u);return Promise.resolve(new hn(f,u,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(u){const c=u[0],d=ed[s.type],f=go[s.componentType],m=f.BYTES_PER_ELEMENT,g=m*d,_=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(x&&x!==g){const y=Math.floor(_/x),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let P=t.cache.get(R);P||(E=new f(c,y*x,s.count*x/m),P=new Lw(E,x/m),t.cache.add(R,P)),S=new df(P,d,_%x/m,M)}else c===null?E=new f(s.count*d):E=new f(c,_,s.count*d),S=new hn(E,d,M);if(s.sparse!==void 0){const y=ed.SCALAR,R=go[s.sparse.indices.componentType],P=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,Y=new R(u[1],P,s.sparse.count*y),k=new f(u[2],b,s.sparse.count*d);c!==null&&(S=new hn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let F=0,W=Y.length;F<W;F++){const L=Y[F];if(S.setX(L,k[F*d]),d>=2&&S.setY(L,k[F*d+1]),d>=3&&S.setZ(L,k[F*d+2]),d>=4&&S.setW(L,k[F*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,u=t.images[a];let c=this.textureLoader;if(u.uri){const d=i.manager.getHandler(u.uri);d!==null&&(c=d)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,i){const s=this,a=this.json,u=a.textures[e],c=a.images[t],d=(c.uri||c.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const f=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=u.name||c.name||"",m.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(m.name=c.uri);const _=(a.samplers||{})[u.sampler]||{};return m.magFilter=E_[_.magFilter]||Qn,m.minFilter=E_[_.minFilter]||lr,m.wrapS=T_[_.wrapS]||xo,m.wrapT=T_[_.wrapT]||xo,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Un&&m.minFilter!==Qn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=f,f}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=s.images[e],c=self.URL||self.webkitURL;let d=u.uri||"",f=!1;if(u.bufferView!==void 0)d=i.getDependency("bufferView",u.bufferView).then(function(g){f=!0;const _=new Blob([g],{type:u.mimeType});return d=c.createObjectURL(_),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(g){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new cn(E);S.needsUpdate=!0,_(S)}),t.load(ba.resolveURL(g,a.path),M,void 0,x)})}).then(function(g){return f===!0&&c.revokeObjectURL(d),ar(g,u),g.userData.mimeType=u.mimeType||XA(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(u){if(!u)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(u=u.clone(),u.channel=i.texCoord),a.extensions[_t.KHR_TEXTURE_TRANSFORM]){const c=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const d=a.associations.get(u);u=a.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(u,c),a.associations.set(u,d)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+i.uuid;let d=this.cache.get(c);d||(d=new _v,Oi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(c,d)),i=d}else if(e.isLine){const c="LineBasicMaterial:"+i.uuid;let d=this.cache.get(c);d||(d=new Fu,Oi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(c,d)),i=d}if(s||a||u){let c="ClonedMaterial:"+i.uuid+":";s&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),u&&(c+="flat-shading:");let d=this.cache.get(c);d||(d=i.clone(),a&&(d.vertexColors=!0),u&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(c,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return pf}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let u;const c={},d=a.extensions||{},f=[];if(d[_t.KHR_MATERIALS_UNLIT]){const g=s[_t.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),f.push(g.extendParams(c,a,t))}else{const g=a.pbrMetallicRoughness||{};if(c.color=new $e(1,1,1),c.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;c.color.setRGB(_[0],_[1],_[2],wn),c.opacity=_[3]}g.baseColorTexture!==void 0&&f.push(t.assignTexture(c,"map",g.baseColorTexture,jt)),c.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,c.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(c,"metalnessMap",g.metallicRoughnessTexture)),f.push(t.assignTexture(c,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=Mi);const m=a.alphaMode||td.OPAQUE;if(m===td.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,m===td.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&u!==$r&&(f.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new Ye(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;c.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&u!==$r&&(f.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&u!==$r){const g=a.emissiveFactor;c.emissive=new $e().setRGB(g[0],g[1],g[2],wn)}return a.emissiveTexture!==void 0&&u!==$r&&f.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,jt)),Promise.all(f).then(function(){const g=new u(c);return a.name&&(g.name=a.name),ar(g,a),t.associations.set(g,{materials:e}),a.extensions&&_s(s,g,a),g})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(c){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(d){return w_(d,c,t)})}const u=[];for(let c=0,d=e.length;c<d;c++){const f=e[c],m=WA(f),g=s[m];if(g)u.push(g.promise);else{let _;f.extensions&&f.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?_=a(f):_=w_(new Tn,f,t),s[m]={primitive:f,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],u=a.primitives,c=[];for(let d=0,f=u.length;d<f;d++){const m=u[d].material===void 0?HA(this.cache):this.getDependency("material",u[d].material);c.push(m)}return c.push(t.loadGeometries(u)),Promise.all(c).then(function(d){const f=d.slice(0,d.length-1),m=d[d.length-1],g=[];for(let x=0,M=m.length;x<M;x++){const E=m[x],S=u[x];let y;const R=f[x];if(S.mode===li.TRIANGLES||S.mode===li.TRIANGLE_STRIP||S.mode===li.TRIANGLE_FAN||S.mode===void 0)y=a.isSkinnedMesh===!0?new Iw(E,R):new Nn(E,R),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===li.TRIANGLE_STRIP?y.geometry=S_(y.geometry,$_):S.mode===li.TRIANGLE_FAN&&(y.geometry=S_(y.geometry,Xd));else if(S.mode===li.LINES)y=new gv(E,R);else if(S.mode===li.LINE_STRIP)y=new Ou(E,R);else if(S.mode===li.LINE_LOOP)y=new Fw(E,R);else if(S.mode===li.POINTS)y=new Ow(E,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&GA(y,a),y.name=t.createUniqueName(a.name||"mesh_"+e),ar(y,a),S.extensions&&_s(s,y,S),t.assignFinalMaterial(y),g.push(y)}for(let x=0,M=g.length;x<M;x++)t.associations.set(g[x],{meshes:e,primitives:x});if(g.length===1)return a.extensions&&_s(s,g[0],a),g[0];const _=new qr;a.extensions&&_s(s,_,a),t.associations.set(_,{meshes:e});for(let x=0,M=g.length;x<M;x++)_.add(g[x]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new In(Aa.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Nu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ar(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),u=s,c=[],d=[];for(let f=0,m=u.length;f<m;f++){const g=u[f];if(g){c.push(g);const _=new at;a!==null&&_.fromArray(a.array,f*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new ff(c,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,u=[],c=[],d=[],f=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const x=s.channels[g],M=s.samplers[x.sampler],E=x.target,S=E.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,R=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(u.push(this.getDependency("node",S)),c.push(this.getDependency("accessor",y)),d.push(this.getDependency("accessor",R)),f.push(M),m.push(E))}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(d),Promise.all(f),Promise.all(m)]).then(function(g){const _=g[0],x=g[1],M=g[2],E=g[3],S=g[4],y=[];for(let R=0,P=_.length;R<P;R++){const b=_[R],Y=x[R],k=M[R],F=E[R],W=S[R];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const L=i._createAnimationTracks(b,Y,k,F,W);if(L)for(let A=0;A<L.length;A++)y.push(L[A])}return new Xw(a,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const u=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&u.traverse(function(c){if(c.isMesh)for(let d=0,f=s.weights.length;d<f;d++)c.morphTargetInfluences[d]=s.weights[d]}),u})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),u=[],c=s.children||[];for(let f=0,m=c.length;f<m;f++)u.push(i.getDependency("node",c[f]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(u),d]).then(function(f){const m=f[0],g=f[1],_=f[2];_!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(_,jA)});for(let x=0,M=g.length;x<M;x++)m.add(g[x]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],u=a.name?s.createUniqueName(a.name):"",c=[],d=s._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return d&&c.push(d),a.camera!==void 0&&c.push(s.getDependency("camera",a.camera).then(function(f){return s._getNodeRef(s.cameraCache,a.camera,f)})),s._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){c.push(f)}),this.nodeCache[e]=Promise.all(c).then(function(f){let m;if(a.isBone===!0?m=new fv:f.length>1?m=new qr:f.length===1?m=f[0]:m=new Wt,m!==f[0])for(let g=0,_=f.length;g<_;g++)m.add(f[g]);if(a.name&&(m.userData.name=a.name,m.name=u),ar(m,a),a.extensions&&_s(i,m,a),a.matrix!==void 0){const g=new at;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new qr;i.name&&(a.name=s.createUniqueName(i.name)),ar(a,i),i.extensions&&_s(t,a,i);const u=i.nodes||[],c=[];for(let d=0,f=u.length;d<f;d++)c.push(s.getDependency("node",u[d]));return Promise.all(c).then(function(d){for(let m=0,g=d.length;m<g;m++)a.add(d[m]);const f=m=>{const g=new Map;for(const[_,x]of s.associations)(_ instanceof Oi||_ instanceof cn)&&g.set(_,x);return m.traverse(_=>{const x=s.associations.get(_);x!=null&&g.set(_,x)}),g};return s.associations=f(a),a})}_createAnimationTracks(e,t,i,s,a){const u=[],c=e.name?e.name:e.uuid,d=[];Gr[a.path]===Gr.weights?e.traverse(function(_){_.morphTargetInfluences&&d.push(_.name?_.name:_.uuid)}):d.push(c);let f;switch(Gr[a.path]){case Gr.weights:f=wo;break;case Gr.rotation:f=Ao;break;case Gr.position:case Gr.scale:f=bo;break;default:switch(i.itemSize){case 1:f=wo;break;case 2:case 3:default:f=bo;break}break}const m=s.interpolation!==void 0?zA[s.interpolation]:Pa,g=this._getArrayFromAccessor(i);for(let _=0,x=d.length;_<x;_++){const M=new f(d[_]+"."+Gr[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Zd(t.constructor),s=new Float32Array(t.length);for(let a=0,u=t.length;a<u;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ao?BA:Tv;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $A(o,e,t){const i=e.attributes,s=new mr;if(i.POSITION!==void 0){const c=t.json.accessors[i.POSITION],d=c.min,f=c.max;if(d!==void 0&&f!==void 0){if(s.set(new z(d[0],d[1],d[2]),new z(f[0],f[1],f[2])),c.normalized){const m=Zd(go[c.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new z,d=new z;for(let f=0,m=a.length;f<m;f++){const g=a[f];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const E=Zd(go[_.componentType]);d.multiplyScalar(E)}c.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}o.boundingBox=s;const u=new Bi;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=u}function w_(o,e,t){const i=e.attributes,s=[];function a(u,c){return t.getDependency("accessor",u).then(function(d){o.setAttribute(c,d)})}for(const u in i){const c=Kd[u]||u.toLowerCase();c in o.attributes||s.push(a(i[u],c))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(c){o.setIndex(c)});s.push(u)}return gt.workingColorSpace!==wn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),ar(o,e),$A(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?VA(o,e.targets,t):o})}const id=new WeakMap;class qA extends Es{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){const a=new Pu(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,u=>{this.parse(u,t,s)},i,s)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,jt,i).catch(i)}decodeDracoFile(e,t,i,s,a=wn,u=()=>{}){const c={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:a};return this.decodeGeometry(e,c).then(t).catch(u)}decodeGeometry(e,t){const i=JSON.stringify(t);if(id.has(e)){const d=id.get(e);if(d.key===i)return d.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const a=this.workerNextTaskID++,u=e.byteLength,c=this._getWorker(a,u).then(d=>(s=d,new Promise((f,m)=>{s._callbacks[a]={resolve:f,reject:m},s.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(d=>this._createGeometry(d.geometry));return c.catch(()=>!0).then(()=>{s&&a&&this._releaseTask(s,a)}),id.set(e,{key:i,promise:c}),c}_createGeometry(e){const t=new Tn;e.index&&t.setIndex(new hn(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const s=e.attributes[i],a=s.name,u=s.array,c=s.itemSize,d=new hn(u,c);a==="color"&&(this._assignVertexColorSpace(d,s.vertexColorSpace),d.normalized=!(u instanceof Float32Array)),t.setAttribute(a,d)}return t}_assignVertexColorSpace(e,t){if(t!==jt)return;const i=new $e;for(let s=0,a=e.count;s<a;s++)i.fromBufferAttribute(e,s),gt.toWorkingColorSpace(i,jt),e.setXYZ(s,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Pu(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((s,a)=>{i.load(e,s,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const a=KA.toString(),u=["/* draco decoder */",s,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([u]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(a){const u=a.data;switch(u.type){case"decode":s._callbacks[u.id].resolve(u);break;case"error":s._callbacks[u.id].reject(u);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+u.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,a){return s._taskLoad>a._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function KA(){let o,e;onmessage=function(u){const c=u.data;switch(c.type){case"init":o=c.decoderConfig,e=new Promise(function(m){o.onModuleLoaded=function(g){m({draco:g})},DracoDecoderModule(o)});break;case"decode":const d=c.buffer,f=c.taskConfig;e.then(m=>{const g=m.draco,_=new g.Decoder;try{const x=t(g,_,new Int8Array(d),f),M=x.attributes.map(E=>E.array.buffer);x.index&&M.push(x.index.array.buffer),self.postMessage({type:"decode",id:c.id,geometry:x},M)}catch(x){console.error(x),self.postMessage({type:"error",id:c.id,error:x.message})}finally{g.destroy(_)}});break}};function t(u,c,d,f){const m=f.attributeIDs,g=f.attributeTypes;let _,x;const M=c.GetEncodedGeometryType(d);if(M===u.TRIANGULAR_MESH)_=new u.Mesh,x=c.DecodeArrayToMesh(d,d.byteLength,_);else if(M===u.POINT_CLOUD)_=new u.PointCloud,x=c.DecodeArrayToPointCloud(d,d.byteLength,_);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!x.ok()||_.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+x.error_msg());const E={index:null,attributes:[]};for(const S in m){const y=self[g[S]];let R,P;if(f.useUniqueIDs)P=m[S],R=c.GetAttributeByUniqueId(_,P);else{if(P=c.GetAttributeId(_,u[m[S]]),P===-1)continue;R=c.GetAttribute(_,P)}const b=s(u,c,_,S,y,R);S==="color"&&(b.vertexColorSpace=f.vertexColorSpace),E.attributes.push(b)}return M===u.TRIANGULAR_MESH&&(E.index=i(u,c,_)),u.destroy(_),E}function i(u,c,d){const m=d.num_faces()*3,g=m*4,_=u._malloc(g);c.GetTrianglesUInt32Array(d,g,_);const x=new Uint32Array(u.HEAPF32.buffer,_,m).slice();return u._free(_),{array:x,itemSize:1}}function s(u,c,d,f,m,g){const _=g.num_components(),M=d.num_points()*_,E=M*m.BYTES_PER_ELEMENT,S=a(u,m),y=u._malloc(E);c.GetAttributeDataArrayForAllPoints(d,g,S,E,y);const R=new m(u.HEAPF32.buffer,y,M).slice();return u._free(y),{name:f,array:R,itemSize:_}}function a(u,c){switch(c){case Float32Array:return u.DT_FLOAT32;case Int8Array:return u.DT_INT8;case Int16Array:return u.DT_INT16;case Int32Array:return u.DT_INT32;case Uint8Array:return u.DT_UINT8;case Uint16Array:return u.DT_UINT16;case Uint32Array:return u.DT_UINT32}}}const A_={type:"change"},yf={type:"start"},wv={type:"end"},gu=new Na,b_=new Xr,ZA=Math.cos(70*Aa.DEG2RAD),tn=new z,Wn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class QA extends fA{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:uo.ROTATE,TWO:uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new bi,this._lastTargetPosition=new z,this._quat=new bi().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new y_,this._sphericalDelta=new y_,this._scale=1,this._panOffset=new z,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new z,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=e1.bind(this),this._onPointerDown=JA.bind(this),this._onPointerUp=t1.bind(this),this._onContextMenu=l1.bind(this),this._onMouseWheel=r1.bind(this),this._onKeyDown=s1.bind(this),this._onTouchStart=o1.bind(this),this._onTouchMove=a1.bind(this),this._onMouseDown=n1.bind(this),this._onMouseMove=i1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=c1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(A_),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Wn:i>Math.PI&&(i-=Wn),s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=u!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=tn.length();u=this._clampDistance(c*this._scale);const d=c-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const f=new z(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),u=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(gu.origin.copy(this.object.position),gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gu.direction))<ZA?this.object.lookAt(this.target):(b_.setFromNormalAndCoplanarPoint(this.object.up,this.target),gu.intersectPlane(b_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(A_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;tn.copy(s).sub(this.target);let a=tn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,u=i.width,c=i.height;this._mouse.x=s/u*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function JA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function e1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function t1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wv),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function n1(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Nt.DOLLY;break;case ho.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Nt.ROTATE}break;case ho.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(yf)}function i1(o){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function r1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(o.preventDefault(),this.dispatchEvent(yf),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(wv))}function s1(o){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(o)}function o1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case uo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Nt.TOUCH_ROTATE;break;case uo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case uo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Nt.TOUCH_DOLLY_PAN;break;case uo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(yf)}function a1(o){switch(this._trackPointer(o),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Nt.NONE}}function l1(o){this.enabled!==!1&&o.preventDefault()}function u1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Av={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Do{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h1=new Nu(-1,1,1,-1,0,1);class d1 extends Tn{constructor(){super(),this.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new En([0,2,0,0,2,0],2))}}const f1=new d1;class xf{constructor(e){this._mesh=new Nn(f1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bv extends Do{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Da.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new xf(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class C_ extends Do{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let u,c;this.inverse?(u=0,c=1):(u=1,c=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,u,4294967295),a.buffers.stencil.setClear(c),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class p1 extends Do{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class m1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ye);this._width=i.width,this._height=i.height,t=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bv(Av),this.copyPass.material.blending=cr,this.clock=new Mv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const u=this.passes[s];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),u.needsSwap){if(i){const c=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}C_!==void 0&&(u instanceof C_?i=!0:u instanceof p1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class g1 extends Do{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=s}}const _1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Co extends Do{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new $e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(a,u,{type:Fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new ci(a,u,{type:Fi});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const x=new ci(a,u,{type:Fi});x.texture.name="UnrealBloomPass.v"+g,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),a=Math.round(a/2),u=Math.round(u/2)}const c=_1;this.highPassUniforms=Da.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];a=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Ye(1/a,1/u),a=Math.round(a/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=Av;this.copyUniforms=Da.clone(m.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:ad,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this.basic=new $r,this.fsQuad=new xf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new Ye(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let c=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[d].uniforms.direction.value=Co.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Co.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),c=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=u}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Co.BlurDirectionX=new Ye(1,0);Co.BlurDirectionY=new Ye(0,1);const v1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class y1 extends Do{constructor(){super();const e=v1;this.uniforms=Da.clone(e.uniforms),this.material=new kw({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new xf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===D_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===I_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===N_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===U_?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===F_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class ki{constructor(e,t,i,s,a="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),ki.nextNameID=ki.nextNameID||0,this.$name.id=`lil-gui-name-${++ki.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",u=>u.stopPropagation()),this.domElement.addEventListener("keyup",u=>u.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class x1 extends ki{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Qd(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const S1={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Qd,toHexString:Qd},Ia={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},M1={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,e,t=1){const i=Ia.fromHexString(o);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([o,e,t],i=1){i=255/i;const s=o*i<<16^e*i<<8^t*i<<0;return Ia.toHexString(s)}},E1={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const i=Ia.fromHexString(o);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:o,g:e,b:t},i=1){i=255/i;const s=o*i<<16^e*i<<8^t*i<<0;return Ia.toHexString(s)}},T1=[S1,Ia,M1,E1];function w1(o){return T1.find(e=>e.match(o))}class A1 extends ki{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=w1(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Qd(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class sd extends ki{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class b1 extends ki{constructor(e,t,i,s,a,u){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(a);const c=u!==void 0;this.step(c?u:this._getImplicitStep(),c),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let R=parseFloat(this.$input.value);isNaN(R)||(this._stepExplicit&&(R=this._snap(R)),this.setValue(this._clamp(R)))},i=R=>{const P=parseFloat(this.$input.value);isNaN(P)||(this._snapClampSetValue(P+R),this.$input.value=this.getValue())},s=R=>{R.key==="Enter"&&this.$input.blur(),R.code==="ArrowUp"&&(R.preventDefault(),i(this._step*this._arrowKeyMultiplier(R))),R.code==="ArrowDown"&&(R.preventDefault(),i(this._step*this._arrowKeyMultiplier(R)*-1))},a=R=>{this._inputFocused&&(R.preventDefault(),i(this._step*this._normalizeMouseWheel(R)))};let u=!1,c,d,f,m,g;const _=5,x=R=>{c=R.clientX,d=f=R.clientY,u=!0,m=this.getValue(),g=0,window.addEventListener("mousemove",M),window.addEventListener("mouseup",E)},M=R=>{if(u){const P=R.clientX-c,b=R.clientY-d;Math.abs(b)>_?(R.preventDefault(),this.$input.blur(),u=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(P)>_&&E()}if(!u){const P=R.clientY-f;g-=P*this._step*this._arrowKeyMultiplier(R),m+g>this._max?g=this._max-m:m+g<this._min&&(g=this._min-m),this._snapClampSetValue(m+g)}f=R.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",E)},S=()=>{this._inputFocused=!0},y=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",x),this.$input.addEventListener("focus",S),this.$input.addEventListener("blur",y)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(y,R,P,b,Y)=>(y-R)/(P-R)*(Y-b)+b,t=y=>{const R=this.$slider.getBoundingClientRect();let P=e(y,R.left,R.right,this._min,this._max);this._snapClampSetValue(P)},i=y=>{this._setDraggingStyle(!0),t(y.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",a)},s=y=>{t(y.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",a)};let u=!1,c,d;const f=y=>{y.preventDefault(),this._setDraggingStyle(!0),t(y.touches[0].clientX),u=!1},m=y=>{y.touches.length>1||(this._hasScrollBar?(c=y.touches[0].clientX,d=y.touches[0].clientY,u=!0):f(y),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",_))},g=y=>{if(u){const R=y.touches[0].clientX-c,P=y.touches[0].clientY-d;Math.abs(R)>Math.abs(P)?f(y):(window.removeEventListener("touchmove",g),window.removeEventListener("touchend",_))}else y.preventDefault(),t(y.touches[0].clientX)},_=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",_)},x=this._callOnFinishChange.bind(this),M=400;let E;const S=y=>{if(Math.abs(y.deltaX)<Math.abs(y.deltaY)&&this._hasScrollBar)return;y.preventDefault();const P=this._normalizeMouseWheel(y)*this._step;this._snapClampSetValue(this.getValue()+P),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(x,M)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",m,{passive:!1}),this.$slider.addEventListener("wheel",S,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class C1 extends ki{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class R1 extends ki{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var P1=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function L1(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let R_=!1;class Sf{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:a="Controls",closeFolders:u=!1,injectStyles:c=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!R_&&c&&(L1(P1),R_=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=u}add(e,t,i,s,a){if(Object(i)===i)return new C1(this,e,t,i);const u=e[t];switch(typeof u){case"number":return new b1(this,e,t,i,s,a);case"boolean":return new x1(this,e,t);case"string":return new R1(this,e,t);case"function":return new sd(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,u)}addColor(e,t,i=1){return new A1(this,e,t,i)}addFolder(e){const t=new Sf({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof sd||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof sd)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const D1="/assets/girl%20in%20red.official%20audio-sRoYN2CY.mp3",I1="/assets/wild-DmeFJZGq.mp3",Cv=`
#ifndef FBM_OCTAVES
#define FBM_OCTAVES 6
#endif
// pcg3d integer hash (inputs are integer cell coords). The old sin() hash lost float
// precision on the large star-cell coords, which showed up as square seams in the sky.
vec3 hash33(vec3 p) {
  uvec3 v = uvec3(ivec3(p)) * 1664525u + 1013904223u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  v ^= v >> 16u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  return vec3(v) * (1.0 / 4294967295.0);
}
float vnoise(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  float n000 = hash33(i).x;
  float n100 = hash33(i + vec3(1, 0, 0)).x;
  float n010 = hash33(i + vec3(0, 1, 0)).x;
  float n110 = hash33(i + vec3(1, 1, 0)).x;
  float n001 = hash33(i + vec3(0, 0, 1)).x;
  float n101 = hash33(i + vec3(1, 0, 1)).x;
  float n011 = hash33(i + vec3(0, 1, 1)).x;
  float n111 = hash33(i + vec3(1, 1, 1)).x;
  return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
             mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y), u.z);
}
float fbm(vec3 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < FBM_OCTAVES; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.55; }
  return s;
}
`,N1=`
// One triangle covering the whole screen, no sphere: with a tessellated sphere, MSAA shaded
// the pixels on every triangle edge twice and the sub-pixel star layer showed a dark grid.
// vRay is the homogeneous far-plane point of this pixel; the fragment shader divides it.
varying vec4 vRay;
void main() {
  gl_Position = vec4(position.xy, 1.0, 1.0);
  vRay = inverse(projectionMatrix * viewMatrix) * gl_Position;
}
`,U1=`
uniform float uPhase;     // 0..2PI over one loop -> seamless twinkle
uniform float uTwinkle;
uniform float uStars;
uniform float uMilky;
uniform float uWire;
varying vec4 vRay;
${Cv}

// Voronoi-style star layer: one star per 3D cell, anti-aliased with fwidth
float starLayer(vec3 d, float scale, float size, float keep, float gain, float tw, float seed) {
  vec3 p = d * scale + seed * 101.0;
  vec3 c = floor(p); vec3 f = fract(p);
  // only the 2x2x2 cells on the near side of f can hold a point closer than 0.5:
  // exact for visible stars, 8 lookups instead of 27
  vec3 side = step(0.5, f) - 1.0;
  float best = 10.0; vec3 bestCell = c;
  for (int i = 0; i <= 1; i++)
  for (int j = 0; j <= 1; j++)
  for (int k = 0; k <= 1; k++) {
    vec3 o = side + vec3(float(i), float(j), float(k));
    vec3 r = o + hash33(c + o) - f;
    float dd = dot(r, r);
    if (dd < best) { best = dd; bestCell = c + o; }
  }
  vec3 rnd = hash33(bestCell + vec3(17.0, 31.0, 53.0));
  float dist = sqrt(best);
  float px = length(fwidth(p)) * 0.9;           // pixel footprint in cell units
  float s = max(size, px);
  float energy = (size * size) / (s * s);        // keep brightness when star < 1px
  float core = pow(clamp(1.0 - dist / s, 0.0, 1.0), 3.0) * energy;
  float on = step(keep, rnd.x);
  float bright = core * on * rnd.y * rnd.y;
  float cyc = floor(rnd.z * 5.0) + 1.0;          // integer cycles per loop
  float t = (1.0 - tw) + tw * (0.5 + 0.5 * sin(uPhase * cyc + rnd.x * 40.0));
  t = mix(1.0, t, uTwinkle);
  return bright * t * gain;
}

void main() {
  if (uWire > 0.5) { gl_FragColor = vec4(0.0); return; }
  vec3 d = normalize(vRay.xyz / vRay.w - cameraPosition);
  float h = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(vec3(0.012, 0.025, 0.06), vec3(0.002, 0.006, 0.02), smoothstep(0.0, 0.6, h));

  // milky way band along a tilted great circle
  vec3 axis = normalize(vec3(0.30, 0.866, -0.40));
  float band = smoothstep(0.33, 0.0, abs(dot(d, axis)));
  if (band > 0.0 && uMilky > 0.0) { // skip the two fbm outside the band
    float clouds = smoothstep(0.42, 0.78, fbm(d * 4.0));
    float dust = smoothstep(0.55, 0.75, fbm(d * 9.0 + 3.1));
    col += vec3(0.16, 0.11, 0.20) * band * clouds * (1.0 - 0.6 * dust) * uMilky;
  }

  float st = 0.0;
  st += starLayer(d, 380.0, 0.33, 0.30, 5.0, 0.35, 1.3);
  st += starLayer(d, 900.0, 0.40, 0.15, 3.0, 0.45, 3.7);
  st += starLayer(d, 110.0, 0.22, 0.86, 16.0, 0.55, 7.1);
  st *= 1.0 + band * 1.5;
  col += vec3(0.85, 0.9, 1.0) * st * uStars;

  // fade stars into the horizon haze
  col *= smoothstep(-0.05, 0.04, d.y) * 0.85 + 0.15;
  gl_FragColor = vec4(col, 1.0);
}
`,Rv=`
uniform sampler2D uLM;
uniform float uLMHalf;
uniform float uLMScale;
uniform vec3 uLMEdge;
vec3 groundIrradiance(vec2 xz) {
  vec2 uv = (xz + uLMHalf) / (2.0 * uLMHalf);
  vec2 e = min(uv, 1.0 - uv);
  float inside = smoothstep(0.0, 0.06, min(e.x, e.y));
  vec3 lm = texture2D(uLM, clamp(uv, 0.001, 0.999)).rgb * uLMScale;
  return mix(uLMEdge, lm, inside);
}
`,F1=`
uniform float uTime;
uniform float uWind;
varying float vH;
varying float vRand;
varying vec3 vIrr;
varying float vFog;
${Rv}
void main() {
  vec4 root = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float h = uv.y;
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  float ph = root.x * 0.7 + root.z * 0.45;
  float gust = 0.6 + 0.4 * sin(uTime * 0.35 + root.x * 0.08);
  float w = (sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 2.9 + ph * 2.3) * 0.25) * gust;
  wp.x += w * uWind * h * h * 0.05;
  wp.z += cos(uTime * 1.25 + ph * 1.7) * uWind * h * h * 0.025;
  vIrr = groundIrradiance(root.xz);
  vH = h;
  vRand = fract(sin(dot(root.xz, vec2(12.9898, 78.233))) * 43758.5453);
  vec4 mv = viewMatrix * wp;
  vFog = 1.0 - exp(-0.0025 * dot(mv.xyz, mv.xyz));
  gl_Position = projectionMatrix * mv;
}
`,O1=`
uniform vec3 uFogColor;
uniform float uWire;
varying float vH;
varying float vRand;
varying vec3 vIrr;
varying float vFog;
void main() {
  if (uWire > 0.5) { gl_FragColor = vec4(0.05, 0.05, 0.05, 0.35); return; }
  vec3 rootC = vec3(0.006, 0.02, 0.004);
  vec3 tipC = vec3(0.30, 0.55, 0.08);
  vec3 base = mix(rootC, tipC, smoothstep(0.0, 1.0, vH));
  base *= mix(0.6, 1.2, vRand);
  base.r *= mix(0.85, 1.25, fract(vRand * 7.13));      // slight hue variation
  vec3 diffuse = base * vIrr * (0.35 + 0.65 * vH);
  vec3 trans = base * vIrr * 0.45 * vH * vH;          // light through the blade tips
  vec3 col = (diffuse + trans) * 0.85;
  col = mix(col, uFogColor, vFog);
  gl_FragColor = vec4(col, 1.0);
}
`,k1=`
varying vec3 vWorld;
varying float vFog;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mv = viewMatrix * wp;
  vFog = 1.0 - exp(-0.0025 * dot(mv.xyz, mv.xyz));
  gl_Position = projectionMatrix * mv;
}
`,B1=`
uniform vec3 uFogColor;
uniform float uWire;
varying vec3 vWorld;
varying float vFog;
${Cv}
${Rv}
void main() {
  if (uWire > 0.5) { gl_FragColor = vec4(0.04, 0.04, 0.04, 1.0); return; }
  float n = fbm(vWorld * 3.0);
  vec3 albedo = mix(vec3(0.004, 0.008, 0.002), vec3(0.03, 0.07, 0.012), n);
  vec3 col = albedo * groundIrradiance(vWorld.xz);
  col = mix(col, uFogColor, vFog);
  gl_FragColor = vec4(col, 1.0);
}
`,z1=`
attribute vec3 bakeColor;   // Cycles "Combined" bake stored per vertex (linear, scaled)
varying vec3 vBake;
varying vec3 vN;
varying vec3 vV;
void main() {
  vBake = bakeColor;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,H1=`
uniform float uBakeScale;
uniform vec3 uRimColor;
uniform float uRim;
uniform float uWire;
varying vec3 vBake;
varying vec3 vN;
varying vec3 vV;
void main() {
  if (uWire > 0.5) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
  vec3 baked = vBake * uBakeScale;
  float fr = pow(1.0 - max(dot(normalize(vN), normalize(vV)), 0.0), 3.0);
  // soft moonlit rim, tinted by the surface so shadows stay rich (no grey wash)
  vec3 tint = mix(uRimColor, normalize(baked + 1e-4) * 1.2, 0.55);
  float lift = 0.35 + 0.65 * clamp(vN.y + 0.3, 0.0, 1.0);
  vec3 col = baked + tint * fr * uRim * lift * (0.25 + min(dot(baked, vec3(0.33)) * 4.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
}
`,V1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.05},uVignette:{value:.35}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    uniform float uVignette;
    varying vec2 vUv;
    float rnd(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = vUv - 0.5;
      float v = 1.0 - uVignette * smoothstep(0.25, 0.85, length(q * vec2(1.1, 1.0)) * 1.4);
      c.rgb *= v;
      c.rgb += (rnd(vUv * 731.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }
  `},_u="/",Ea=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,Wr=Ea?{maxPixelRatio:1,minPixelRatio:.6,msaa:2,bloom:!1,maxBlades:45e3,fbmOctaves:4}:{maxPixelRatio:1.25,minPixelRatio:.75,msaa:4,bloom:!0,maxBlades:16e4,fbmOctaves:6};class G1{constructor(e,t={}){lt(this,"renderer");lt(this,"scene",new Pw);lt(this,"camera");lt(this,"composer");lt(this,"bloom");lt(this,"finish");lt(this,"controls");lt(this,"clock",new Mv);lt(this,"gui");lt(this,"raf",0);lt(this,"mobile",Ea);lt(this,"pixelRatio",Math.min(window.devicePixelRatio,Wr.maxPixelRatio));lt(this,"frameTimes",0);lt(this,"frameCount",0);lt(this,"spin",Ea?0:1);lt(this,"disposed",!1);lt(this,"keys",new Set);lt(this,"skyMat");lt(this,"grassMat");lt(this,"groundMat");lt(this,"charMat");lt(this,"grass");lt(this,"grid");lt(this,"wireMats",[]);lt(this,"progress",0);lt(this,"scrollTarget",0);lt(this,"params",{mode:"path-auto",loopSeconds:40,speed:1,fov:46.4,radius:6.8,height:1.35,targetHeight:.42,progress:0,wireframe:!1,exposure:1,bloom:.45,grain:.045,vignette:.35,wind:1,twinkle:1,stars:1,milkyWay:1,rim:.18,grassDensity:1});lt(this,"totalBlades",0);lt(this,"onProgress");lt(this,"onModeChange");lt(this,"onPlayingChange");lt(this,"audio");lt(this,"ambient");lt(this,"onWheel",e=>{if(this.params.mode==="path-scroll")e.preventDefault(),this.scrollTarget+=e.deltaY*22e-5;else if(this.params.mode==="path-auto"){e.preventDefault();const t=Aa.clamp(this.camera.fov+e.deltaY*.02,12,90);this.params.fov=t,this.camera.fov=t,this.camera.updateProjectionMatrix(),this.gui.controllersRecursive().forEach(i=>i.updateDisplay())}});lt(this,"touchY",null);lt(this,"onTouchStart",e=>{var t;this.touchY=((t=e.touches[0])==null?void 0:t.clientY)??null});lt(this,"onTouchMove",e=>{if(this.params.mode!=="path-scroll"||this.touchY===null)return;const t=e.touches[0].clientY;this.scrollTarget+=(this.touchY-t)*8e-4,this.touchY=t});lt(this,"onKeyDown",e=>this.keys.add(e.key.toLowerCase()));lt(this,"onKeyUp",e=>this.keys.delete(e.key.toLowerCase()));lt(this,"onResize",()=>{const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)});this.container=e,this.onProgress=t.onProgress,this.onModeChange=t.onModeChange,this.onPlayingChange=t.onPlayingChange,this.audio=new Audio(D1),this.audio.loop=!0,this.audio.preload="none",this.ambient=new Audio(I1),this.ambient.loop=!0,this.ambient.volume=.35,this.audio.addEventListener("play",()=>{var u;this.mobile&&this.ambient.play().catch(()=>{}),(u=this.onPlayingChange)==null||u.call(this,!0)}),this.audio.addEventListener("pause",()=>{var u;this.mobile&&this.ambient.pause(),(u=this.onPlayingChange)==null||u.call(this,!1)}),this.renderer=new Rw({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.toneMapping=wu,this.renderer.toneMappingExposure=this.params.exposure,this.renderer.outputColorSpace=jt,e.appendChild(this.renderer.domElement),this.camera=new In(this.params.fov,e.clientWidth/e.clientHeight,.05,400),this.scene.add(this.camera);const i=new ci(e.clientWidth,e.clientHeight,{type:Fi,samples:Wr.msaa});this.composer=new m1(this.renderer,i),this.composer.addPass(new g1(this.scene,this.camera)),this.bloom=new Co(new Ye(e.clientWidth,e.clientHeight),this.params.bloom,.55,2.2),this.bloom.enabled=Wr.bloom,this.composer.addPass(this.bloom),this.composer.addPass(new y1),this.finish=new bv(V1),this.composer.addPass(this.finish),this.composer.setSize(e.clientWidth,e.clientHeight),this.controls=new QA(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.target.set(0,this.params.targetHeight,0),this.controls.enabled=!1,this.controls.maxDistance=60,this.grid=this.makeBlenderGrid(),this.grid.visible=!1,this.scene.add(this.grid);const s=new URLSearchParams(window.location.search);s.has("t")&&(this.progress=this.scrollTarget=parseFloat(s.get("t"))||0),s.has("speed")&&(this.params.speed=parseFloat(s.get("speed"))||0),s.has("bloom")&&(this.params.bloom=parseFloat(s.get("bloom"))||0,this.bloom.strength=this.params.bloom),s.has("fov")&&(this.params.fov=parseFloat(s.get("fov"))||this.params.fov,this.camera.fov=this.params.fov,this.camera.updateProjectionMatrix()),this.gui=this.buildGui(),this.bindEvents(),this.applyCameraOnPath(this.progress);const a=s.get("mode");a==="scroll"?this.setMode("path-scroll"):a==="free"&&this.setMode("free")}async load(){var g;const e=new xv;e.onProgress=(_,x,M)=>{var E;return(E=this.onProgress)==null?void 0:E.call(this,x/M,"Chargement de la scène")};const t=await fetch(`${_u}bake/meta.json`).then(_=>_.json()),s=await new Sv(e).loadAsync(`${_u}bake/ground_irradiance.webp`);s.colorSpace=jt,s.flipY=!1;const a=new qA(e);a.setDecoderPath(`${_u}draco/`);const u=new pA(e);u.setDRACOLoader(a);const c=await u.loadAsync(`${_u}bake/scene.glb`),d=new $e(.0015,.003,.008),f={uLM:{value:s},uLMHalf:{value:t.groundHalf},uLMScale:{value:t.groundScale},uLMEdge:{value:new z(...t.groundEdge)}};this.charMat=new nn({vertexShader:z1,fragmentShader:H1,uniforms:{uBakeScale:{value:t.charScale},uRimColor:{value:new $e(.45,.62,1)},uRim:{value:this.params.rim},uWire:{value:0}}}),this.groundMat=new nn({vertexShader:k1,fragmentShader:B1,uniforms:{...f,uFogColor:{value:d},uWire:{value:0}},defines:{FBM_OCTAVES:Wr.fbmOctaves}}),c.scene.traverse(_=>{const x=_;if(x.isMesh)if(/char/i.test(x.name)){const M=x.geometry.getAttribute("color");if(M){const E=M.count,S=new Float32Array(E*3);for(let y=0;y<E;y++)S[y*3]=od(M.getX(y)),S[y*3+1]=od(M.getY(y)),S[y*3+2]=od(M.getZ(y));x.geometry.setAttribute("bakeColor",new hn(S,3)),x.geometry.deleteAttribute("color")}x.material=this.charMat}else x.material=this.groundMat}),this.scene.add(c.scene),this.buildSky(),this.buildGrass(f,d),this.wireMats=[this.charMat,this.groundMat,this.grassMat,this.skyMat];const m=new URLSearchParams(window.location.search).get("grass");m&&this.grass&&(this.params.grassDensity=Aa.clamp(parseFloat(m)||1,.05,1),this.grass.count=Math.floor(this.totalBlades*this.params.grassDensity)),await this.renderer.compileAsync(this.scene,this.camera),this.audio.preload="auto",this.ambient.preload="auto",(g=this.onProgress)==null||g.call(this,1,"Prêt")}buildSky(){this.skyMat=new nn({vertexShader:N1,fragmentShader:U1,depthWrite:!1,depthTest:!1,defines:{FBM_OCTAVES:Wr.fbmOctaves},uniforms:{uPhase:{value:0},uTwinkle:{value:this.params.twinkle},uStars:{value:this.params.stars},uMilky:{value:this.params.milkyWay},uWire:{value:0}}});const e=new Tn;e.setAttribute("position",new En([-1,-1,0,3,-1,0,-1,3,0],3));const t=new Nn(e,this.skyMat);t.frustumCulled=!1,t.renderOrder=-1,this.scene.add(t)}buildGrass(e,t){const s=[],a=[],u=[];for(let A=0;A<=4;A++){const N=A/4,ie=.015*Math.pow(1-N,.8),K=.25*N*N;A<4?(s.push(-ie,N,-K,ie,N,-K),a.push(0,N,1,N)):(s.push(0,N,-K),a.push(.5,1))}for(let A=0;A<3;A++){const N=2*A,ie=N+1,K=N+3,ue=N+2;u.push(N,ie,K,N,K,ue)}const d=6;u.push(d,d+1,8);const f=new Tn;f.setAttribute("position",new En(s,3)),f.setAttribute("uv",new En(a,2)),f.setIndex(u),f.computeVertexNormals(),this.grassMat=new nn({vertexShader:F1,fragmentShader:O1,side:Mi,uniforms:{...e,uTime:{value:0},uWind:{value:this.params.wind},uFogColor:{value:t},uWire:{value:0}}});const m=14,g=Wr.maxBlades,_=Ea?500:1400,x=new Float32Array(g),M=new Float32Array(g),E=new Float32Array(g);let S=0;const y=W1(7),R=Math.PI*m*m,P=Math.floor(R*_);for(let A=0;A<P&&S<g;A++){const N=m*Math.sqrt(y()),ie=y()*Math.PI*2,K=Aa.smoothstep(N,2,7),ue=1-K*.9;y()>ue||N<.2||(x[S]=Math.cos(ie)*N,M[S]=Math.sin(ie)*N,E[S]=(1+K*1.5)*(Ea?1.6:1),S++)}for(let A=S-1;A>0;A--){const N=Math.floor(y()*(A+1));let ie=x[A];x[A]=x[N],x[N]=ie,ie=M[A],M[A]=M[N],M[N]=ie,ie=E[A],E[A]=E[N],E[N]=ie}const b=new mv(f,this.grassMat,S),Y=new at,k=new bi,F=new Ci,W=new z,L=new z;for(let A=0;A<S;A++){F.set((y()-.5)*.5,y()*Math.PI*2,(y()-.5)*.5),k.setFromEuler(F);const N=.1+y()*.14;W.set(N*1.25*E[A],N,N),L.set(x[A],0,M[A]),Y.compose(L,k,W),b.setMatrixAt(A,Y)}b.instanceMatrix.needsUpdate=!0,b.frustumCulled=!1,this.totalBlades=S,this.grass=b,this.scene.add(b)}makeBlenderGrid(){const e=new qr,t=new x_(40,40,5921370,4671303);t.material.transparent=!0,t.material.opacity=.9,e.add(t);const i=new x_(40,400,4210752,4210752);i.material.transparent=!0,i.material.opacity=.35,e.add(i);const s=(a,u,c)=>{const d=new Tn().setFromPoints([u,c]);return new Ou(d,new Fu({color:a}))};return e.add(s(16724818,new z(-20,.001,0),new z(20,.001,0))),e.add(s(9165824,new z(0,.001,20),new z(0,.001,-20))),e}applyCameraOnPath(e){const t=e*Math.PI*2,{radius:i,height:s,targetHeight:a}=this.params;this.camera.position.set(-i*Math.sin(t),s,-i*Math.cos(t)),this.camera.lookAt(0,a,0)}toggleAmbient(){this.ambient.paused?this.ambient.play().catch(()=>{}):this.ambient.pause()}togglePlay(){this.audio.paused?this.audio.play().catch(()=>{var e;return(e=this.onPlayingChange)==null?void 0:e.call(this,!1)}):this.audio.pause()}setMode(e){var i;this.params.mode=e;const t=e==="free";this.controls.enabled=t,t?(this.controls.target.set(0,this.params.targetHeight,0),this.controls.update()):this.scrollTarget=this.progress,this.renderer.domElement.style.cursor=t?"grab":e==="path-scroll"?"ns-resize":"default",(i=this.onModeChange)==null||i.call(this,e),this.gui.controllersRecursive().forEach(s=>s.updateDisplay())}setWireframe(e){var t;this.params.wireframe=e;for(const i of this.wireMats){const s=i;(t=s.uniforms)!=null&&t.uWire&&(s.uniforms.uWire.value=e?1:0),s.wireframe=e&&s!==this.skyMat,s.transparent=e&&s===this.grassMat}this.grid.visible=e,this.scene.background=e?new $e(4013373):null,this.bloom.enabled=!e,this.finish.enabled=!e,this.renderer.toneMapping=e?hr:wu}buildGui(){const e=new Sf({title:"girl in red — scène"}),t=this.params,i=e.addFolder("Caméra");i.add(t,"mode",{"Follow path (auto, infini)":"path-auto","Follow path (scroll)":"path-scroll","Free view (spectate)":"free"}).name("Mode").onChange(m=>this.setMode(m)),i.add(t,"fov",12,90,.1).name("POV / zoom (FOV)").onChange(m=>{this.camera.fov=m,this.camera.updateProjectionMatrix()}),i.add(t,"speed",-3,3,.01).name("Vitesse du path"),i.add(t,"loopSeconds",8,160,1).name("Durée d’un tour (s)"),i.add(t,"progress",0,1,.001).name("Progression").listen().onChange(m=>{this.progress=m,this.scrollTarget=m}),i.add(t,"radius",2,15,.01).name("Rayon du path"),i.add(t,"height",.2,6,.01).name("Hauteur du path"),i.add(t,"targetHeight",0,2,.01).name("Hauteur visée");const s=e.addFolder("Rendu");s.add(t,"wireframe").name("Vue wireframe (Blender)").onChange(m=>this.setWireframe(m)),s.add(t,"exposure",.2,3,.01).name("Exposition").onChange(m=>this.renderer.toneMappingExposure=m),s.add(t,"bloom",0,2,.01).name("Bloom (étoiles)").onChange(m=>this.bloom.strength=m),s.add(t,"rim",0,1.5,.01).name("Contre-jour").onChange(m=>this.charMat.uniforms.uRim.value=m),s.add(t,"grain",0,.15,.001).name("Grain"),s.add(t,"vignette",0,1,.01).name("Vignettage");const a=e.addFolder("Environnement");a.add(t,"wind",0,4,.01).name("Vent dans l’herbe"),a.add(t,"twinkle",0,1,.01).name("Scintillement"),a.add(t,"stars",0,3,.01).name("Étoiles"),a.add(t,"milkyWay",0,3,.01).name("Voie lactée"),a.add(t,"grassDensity",.1,1,.01).name("Densité herbe").onChange(m=>{this.grass&&(this.grass.count=Math.floor(this.totalBlades*m))});const u=e.addFolder("Son"),c={play:()=>this.togglePlay(),ambient:()=>this.toggleAmbient(),spotify:()=>window.open("https://open.spotify.com/track/4r1AqGpB9YrXV2ivcrqfJY","_blank","noopener")},d=u.add(c,"play").name("▶ Musique");this.audio.addEventListener("play",()=>d.name("❚❚ Musique")),this.audio.addEventListener("pause",()=>d.name("▶ Musique"));const f=u.add(c,"ambient").name("▶ Ambiance");return this.ambient.addEventListener("play",()=>f.name("❚❚ Ambiance")),this.ambient.addEventListener("pause",()=>f.name("▶ Ambiance")),u.add(c,"spotify").name("Le morceau sur Spotify"),i.close(),s.close(),a.close(),this.mobile&&e.hide(),e}bindEvents(){const e=this.renderer.domElement;e.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("touchstart",this.onTouchStart,{passive:!0}),e.addEventListener("touchmove",this.onTouchMove,{passive:!0}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.onResize)}start(){const e=()=>{if(this.disposed)return;this.raf=requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.1),i=this.clock.elapsedTime,s=this.params;if(this.adaptResolution(t),s.mode==="path-auto"){const u=!this.mobile||!this.audio.paused?1:0;this.spin+=(u-this.spin)*Math.min(1,t*1.5),this.progress+=t/s.loopSeconds*s.speed*this.spin,this.applyCameraOnPath(this.progress)}else s.mode==="path-scroll"?(this.progress+=(this.scrollTarget-this.progress)*Math.min(1,t*6),this.applyCameraOnPath(this.progress)):(this.freeFly(t),this.controls.update());s.progress=(this.progress%1+1)%1;const a=i/s.loopSeconds*Math.PI*2;this.skyMat&&(this.skyMat.uniforms.uPhase.value=a,this.skyMat.uniforms.uTwinkle.value=s.twinkle,this.skyMat.uniforms.uStars.value=s.stars,this.skyMat.uniforms.uMilky.value=s.milkyWay),this.grassMat&&(this.grassMat.uniforms.uTime.value=i,this.grassMat.uniforms.uWind.value=s.wind),this.finish.uniforms.uTime.value=i%10,this.finish.uniforms.uGrain.value=s.grain,this.finish.uniforms.uVignette.value=s.vignette,this.composer.render()};e()}adaptResolution(e){if(this.clock.elapsedTime<2||(this.frameTimes+=e,++this.frameCount<90))return;const t=this.frameTimes/this.frameCount;this.frameTimes=0,this.frameCount=0,t>1/50&&this.pixelRatio>Wr.minPixelRatio&&(this.pixelRatio=Math.max(Wr.minPixelRatio,this.pixelRatio-.15),this.renderer.setPixelRatio(this.pixelRatio),this.composer.setPixelRatio(this.pixelRatio))}freeFly(e){const t=this.keys;if(!t.size)return;const i=(t.has("shift")?6:2)*e,s=new z;this.camera.getWorldDirection(s);const a=new z().crossVectors(s,this.camera.up).normalize(),u=new z;(t.has("z")||t.has("w")||t.has("arrowup"))&&u.add(s),(t.has("s")||t.has("arrowdown"))&&u.sub(s),(t.has("q")||t.has("a")||t.has("arrowleft"))&&u.sub(a),(t.has("d")||t.has("arrowright"))&&u.add(a),(t.has("e")||t.has(" "))&&(u.y+=1),t.has("c")&&(u.y-=1),u.lengthSq()!==0&&(u.normalize().multiplyScalar(i),this.camera.position.add(u),this.controls.target.add(u))}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.audio.pause(),this.audio.src="",this.ambient.pause(),this.ambient.src="";const e=this.renderer.domElement;e.removeEventListener("wheel",this.onWheel),e.removeEventListener("touchstart",this.onTouchStart),e.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("resize",this.onResize),this.gui.destroy(),this.controls.dispose(),this.composer.dispose(),this.renderer.dispose(),e.remove()}}function od(o){return Math.pow(Math.max(o,0),2.2)}function W1(o){let e=o;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const X1={"path-auto":"Follow path en boucle · molette = zoom","path-scroll":"Scrolle pour faire avancer la caméra sur le path",free:"Free view · clic-glisser pour tourner · clic droit pour déplacer · ZQSD/WASD + E/C pour voler (Shift = rapide)"};function j1(){const o=sr.useRef(null),[e,t]=sr.useState({p:0,label:"Chargement"}),[i,s]=sr.useState("path-auto"),[a,u]=sr.useState(null),c=sr.useRef(null),[d,f]=sr.useState(!1),[m,g]=sr.useState(!1);return sr.useEffect(()=>{if(!o.current)return;const _=new G1(o.current,{onProgress:(x,M)=>t(x>=1?null:{p:x,label:M}),onModeChange:x=>s(x),onPlayingChange:x=>g(x)});return c.current=_,f(_.mobile),_.load().then(()=>{t(null),_.start()}).catch(x=>u(String(x))),()=>_.dispose()},[]),$t.jsxs("div",{className:"stage",children:[$t.jsx("div",{ref:o,className:"canvas"}),e&&$t.jsxs("div",{className:"loader",children:[$t.jsx("div",{className:"loader-title",children:"girl in red"}),$t.jsx("div",{className:"loader-bar",children:$t.jsx("span",{style:{width:`${Math.round(e.p*100)}%`}})}),$t.jsxs("div",{className:"loader-label",children:[Math.round(e.p*100),"%"]})]}),a&&$t.jsx("div",{className:"loader",children:$t.jsxs("div",{className:"loader-label",children:["Erreur : ",a]})}),$t.jsxs("a",{className:"wordmark",href:"https://open.spotify.com/track/4r1AqGpB9YrXV2ivcrqfJY",target:"_blank",rel:"noreferrer",children:["girl in red ",$t.jsx("span",{className:"wordmark-arrow",children:"↗"})]}),d?!e&&$t.jsxs($t.Fragment,{children:[$t.jsx("button",{className:`play${m?" is-playing":""}`,onClick:()=>{var _;return(_=c.current)==null?void 0:_.togglePlay()},"aria-label":m?"Pause":"Play",children:$t.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m?$t.jsx("path",{d:"M8 6h3v12H8zM13 6h3v12h-3z"}):$t.jsx("path",{d:"M9 6.5v11l9-5.5z"})})}),$t.jsx("div",{className:"desktop-note",children:"plus d’options en version desktop"})]}):$t.jsx("div",{className:"hint",children:X1[i]},i)]})}vy.createRoot(document.getElementById("root")).render($t.jsx(sr.StrictMode,{children:$t.jsx(j1,{})}));
