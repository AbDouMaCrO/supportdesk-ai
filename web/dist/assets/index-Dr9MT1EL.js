(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))v(_);new MutationObserver(_=>{for(const A of _)if(A.type==="childList")for(const j of A.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&v(j)}).observe(document,{childList:!0,subtree:!0});function c(_){const A={};return _.integrity&&(A.integrity=_.integrity),_.referrerPolicy&&(A.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?A.credentials="include":_.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function v(_){if(_.ep)return;_.ep=!0;const A=c(_);fetch(_.href,A)}})();function lc(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Hs={exports:{}},Sr={},Us={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu;function vp(){if(Yu)return H;Yu=1;var l=Symbol.for("react.element"),m=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),j=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),$=Symbol.iterator;function B(g){return g===null||typeof g!="object"?null:(g=$&&g[$]||g["@@iterator"],typeof g=="function"?g:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fe=Object.assign,W={};function X(g,k,G){this.props=g,this.context=k,this.refs=W,this.updater=G||ke}X.prototype.isReactComponent={},X.prototype.setState=function(g,k){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,k,"setState")},X.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Ze(){}Ze.prototype=X.prototype;function Ve(g,k,G){this.props=g,this.context=k,this.refs=W,this.updater=G||ke}var Fe=Ve.prototype=new Ze;Fe.constructor=Ve,fe(Fe,X.prototype),Fe.isPureReactComponent=!0;var pe=Array.isArray,xe=Object.prototype.hasOwnProperty,be={current:null},ze={key:!0,ref:!0,__self:!0,__source:!0};function en(g,k,G){var U,Q={},Y=null,te=null;if(k!=null)for(U in k.ref!==void 0&&(te=k.ref),k.key!==void 0&&(Y=""+k.key),k)xe.call(k,U)&&!ze.hasOwnProperty(U)&&(Q[U]=k[U]);var ee=arguments.length-2;if(ee===1)Q.children=G;else if(1<ee){for(var se=Array(ee),Qe=0;Qe<ee;Qe++)se[Qe]=arguments[Qe+2];Q.children=se}if(g&&g.defaultProps)for(U in ee=g.defaultProps,ee)Q[U]===void 0&&(Q[U]=ee[U]);return{$$typeof:l,type:g,key:Y,ref:te,props:Q,_owner:be.current}}function Mn(g,k){return{$$typeof:l,type:g.type,key:k,ref:g.ref,props:g.props,_owner:g._owner}}function bn(g){return typeof g=="object"&&g!==null&&g.$$typeof===l}function et(g){var k={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(G){return k[G]})}var hn=/\/+/g;function $e(g,k){return typeof g=="object"&&g!==null&&g.key!=null?et(""+g.key):k.toString(36)}function ln(g,k,G,U,Q){var Y=typeof g;(Y==="undefined"||Y==="boolean")&&(g=null);var te=!1;if(g===null)te=!0;else switch(Y){case"string":case"number":te=!0;break;case"object":switch(g.$$typeof){case l:case m:te=!0}}if(te)return te=g,Q=Q(te),g=U===""?"."+$e(te,0):U,pe(Q)?(G="",g!=null&&(G=g.replace(hn,"$&/")+"/"),ln(Q,k,G,"",function(Qe){return Qe})):Q!=null&&(bn(Q)&&(Q=Mn(Q,G+(!Q.key||te&&te.key===Q.key?"":(""+Q.key).replace(hn,"$&/")+"/")+g)),k.push(Q)),1;if(te=0,U=U===""?".":U+":",pe(g))for(var ee=0;ee<g.length;ee++){Y=g[ee];var se=U+$e(Y,ee);te+=ln(Y,k,G,se,Q)}else if(se=B(g),typeof se=="function")for(g=se.call(g),ee=0;!(Y=g.next()).done;)Y=Y.value,se=U+$e(Y,ee++),te+=ln(Y,k,G,se,Q);else if(Y==="object")throw k=String(g),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return te}function yn(g,k,G){if(g==null)return g;var U=[],Q=0;return ln(g,U,"","",function(Y){return k.call(G,Y,Q++)}),U}function Oe(g){if(g._status===-1){var k=g._result;k=k(),k.then(function(G){(g._status===0||g._status===-1)&&(g._status=1,g._result=G)},function(G){(g._status===0||g._status===-1)&&(g._status=2,g._result=G)}),g._status===-1&&(g._status=0,g._result=k)}if(g._status===1)return g._result.default;throw g._result}var ce={current:null},C={transition:null},z={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:C,ReactCurrentOwner:be};function I(){throw Error("act(...) is not supported in production builds of React.")}return H.Children={map:yn,forEach:function(g,k,G){yn(g,function(){k.apply(this,arguments)},G)},count:function(g){var k=0;return yn(g,function(){k++}),k},toArray:function(g){return yn(g,function(k){return k})||[]},only:function(g){if(!bn(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},H.Component=X,H.Fragment=c,H.Profiler=_,H.PureComponent=Ve,H.StrictMode=v,H.Suspense=T,H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,H.act=I,H.cloneElement=function(g,k,G){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var U=fe({},g.props),Q=g.key,Y=g.ref,te=g._owner;if(k!=null){if(k.ref!==void 0&&(Y=k.ref,te=be.current),k.key!==void 0&&(Q=""+k.key),g.type&&g.type.defaultProps)var ee=g.type.defaultProps;for(se in k)xe.call(k,se)&&!ze.hasOwnProperty(se)&&(U[se]=k[se]===void 0&&ee!==void 0?ee[se]:k[se])}var se=arguments.length-2;if(se===1)U.children=G;else if(1<se){ee=Array(se);for(var Qe=0;Qe<se;Qe++)ee[Qe]=arguments[Qe+2];U.children=ee}return{$$typeof:l,type:g.type,key:Q,ref:Y,props:U,_owner:te}},H.createContext=function(g){return g={$$typeof:j,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:A,_context:g},g.Consumer=g},H.createElement=en,H.createFactory=function(g){var k=en.bind(null,g);return k.type=g,k},H.createRef=function(){return{current:null}},H.forwardRef=function(g){return{$$typeof:q,render:g}},H.isValidElement=bn,H.lazy=function(g){return{$$typeof:Z,_payload:{_status:-1,_result:g},_init:Oe}},H.memo=function(g,k){return{$$typeof:L,type:g,compare:k===void 0?null:k}},H.startTransition=function(g){var k=C.transition;C.transition={};try{g()}finally{C.transition=k}},H.unstable_act=I,H.useCallback=function(g,k){return ce.current.useCallback(g,k)},H.useContext=function(g){return ce.current.useContext(g)},H.useDebugValue=function(){},H.useDeferredValue=function(g){return ce.current.useDeferredValue(g)},H.useEffect=function(g,k){return ce.current.useEffect(g,k)},H.useId=function(){return ce.current.useId()},H.useImperativeHandle=function(g,k,G){return ce.current.useImperativeHandle(g,k,G)},H.useInsertionEffect=function(g,k){return ce.current.useInsertionEffect(g,k)},H.useLayoutEffect=function(g,k){return ce.current.useLayoutEffect(g,k)},H.useMemo=function(g,k){return ce.current.useMemo(g,k)},H.useReducer=function(g,k,G){return ce.current.useReducer(g,k,G)},H.useRef=function(g){return ce.current.useRef(g)},H.useState=function(g){return ce.current.useState(g)},H.useSyncExternalStore=function(g,k,G){return ce.current.useSyncExternalStore(g,k,G)},H.useTransition=function(){return ce.current.useTransition()},H.version="18.3.1",H}var Ku;function Ys(){return Ku||(Ku=1,Us.exports=vp()),Us.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function _p(){if(Ju)return Sr;Ju=1;var l=Ys(),m=Symbol.for("react.element"),c=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,_=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function j(q,T,L){var Z,$={},B=null,ke=null;L!==void 0&&(B=""+L),T.key!==void 0&&(B=""+T.key),T.ref!==void 0&&(ke=T.ref);for(Z in T)v.call(T,Z)&&!A.hasOwnProperty(Z)&&($[Z]=T[Z]);if(q&&q.defaultProps)for(Z in T=q.defaultProps,T)$[Z]===void 0&&($[Z]=T[Z]);return{$$typeof:m,type:q,key:B,ref:ke,props:$,_owner:_.current}}return Sr.Fragment=c,Sr.jsx=j,Sr.jsxs=j,Sr}var Xu;function wp(){return Xu||(Xu=1,Hs.exports=_p()),Hs.exports}var o=wp(),ye=Ys();const kp=lc(ye);var Ba={},Bs={exports:{}},We={},Ws={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu;function xp(){return Zu||(Zu=1,(function(l){function m(C,z){var I=C.length;C.push(z);e:for(;0<I;){var g=I-1>>>1,k=C[g];if(0<_(k,z))C[g]=z,C[I]=k,I=g;else break e}}function c(C){return C.length===0?null:C[0]}function v(C){if(C.length===0)return null;var z=C[0],I=C.pop();if(I!==z){C[0]=I;e:for(var g=0,k=C.length,G=k>>>1;g<G;){var U=2*(g+1)-1,Q=C[U],Y=U+1,te=C[Y];if(0>_(Q,I))Y<k&&0>_(te,Q)?(C[g]=te,C[Y]=I,g=Y):(C[g]=Q,C[U]=I,g=U);else if(Y<k&&0>_(te,I))C[g]=te,C[Y]=I,g=Y;else break e}}return z}function _(C,z){var I=C.sortIndex-z.sortIndex;return I!==0?I:C.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var A=performance;l.unstable_now=function(){return A.now()}}else{var j=Date,q=j.now();l.unstable_now=function(){return j.now()-q}}var T=[],L=[],Z=1,$=null,B=3,ke=!1,fe=!1,W=!1,X=typeof setTimeout=="function"?setTimeout:null,Ze=typeof clearTimeout=="function"?clearTimeout:null,Ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Fe(C){for(var z=c(L);z!==null;){if(z.callback===null)v(L);else if(z.startTime<=C)v(L),z.sortIndex=z.expirationTime,m(T,z);else break;z=c(L)}}function pe(C){if(W=!1,Fe(C),!fe)if(c(T)!==null)fe=!0,Oe(xe);else{var z=c(L);z!==null&&ce(pe,z.startTime-C)}}function xe(C,z){fe=!1,W&&(W=!1,Ze(en),en=-1),ke=!0;var I=B;try{for(Fe(z),$=c(T);$!==null&&(!($.expirationTime>z)||C&&!et());){var g=$.callback;if(typeof g=="function"){$.callback=null,B=$.priorityLevel;var k=g($.expirationTime<=z);z=l.unstable_now(),typeof k=="function"?$.callback=k:$===c(T)&&v(T),Fe(z)}else v(T);$=c(T)}if($!==null)var G=!0;else{var U=c(L);U!==null&&ce(pe,U.startTime-z),G=!1}return G}finally{$=null,B=I,ke=!1}}var be=!1,ze=null,en=-1,Mn=5,bn=-1;function et(){return!(l.unstable_now()-bn<Mn)}function hn(){if(ze!==null){var C=l.unstable_now();bn=C;var z=!0;try{z=ze(!0,C)}finally{z?$e():(be=!1,ze=null)}}else be=!1}var $e;if(typeof Ve=="function")$e=function(){Ve(hn)};else if(typeof MessageChannel<"u"){var ln=new MessageChannel,yn=ln.port2;ln.port1.onmessage=hn,$e=function(){yn.postMessage(null)}}else $e=function(){X(hn,0)};function Oe(C){ze=C,be||(be=!0,$e())}function ce(C,z){en=X(function(){C(l.unstable_now())},z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(C){C.callback=null},l.unstable_continueExecution=function(){fe||ke||(fe=!0,Oe(xe))},l.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Mn=0<C?Math.floor(1e3/C):5},l.unstable_getCurrentPriorityLevel=function(){return B},l.unstable_getFirstCallbackNode=function(){return c(T)},l.unstable_next=function(C){switch(B){case 1:case 2:case 3:var z=3;break;default:z=B}var I=B;B=z;try{return C()}finally{B=I}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(C,z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var I=B;B=C;try{return z()}finally{B=I}},l.unstable_scheduleCallback=function(C,z,I){var g=l.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?g+I:g):I=g,C){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=I+k,C={id:Z++,callback:z,priorityLevel:C,startTime:I,expirationTime:k,sortIndex:-1},I>g?(C.sortIndex=I,m(L,C),c(T)===null&&C===c(L)&&(W?(Ze(en),en=-1):W=!0,ce(pe,I-g))):(C.sortIndex=k,m(T,C),fe||ke||(fe=!0,Oe(xe))),C},l.unstable_shouldYield=et,l.unstable_wrapCallback=function(C){var z=B;return function(){var I=B;B=z;try{return C.apply(this,arguments)}finally{B=I}}}})(Vs)),Vs}var ec;function bp(){return ec||(ec=1,Ws.exports=xp()),Ws.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc;function Ap(){if(nc)return We;nc=1;var l=Ys(),m=bp();function c(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,_={};function A(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(_[e]=n,e=0;e<n.length;e++)v.add(n[e])}var q=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z={},$={};function B(e){return T.call($,e)?!0:T.call(Z,e)?!1:L.test(e)?$[e]=!0:(Z[e]=!0,!1)}function ke(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fe(e,n,t,r){if(n===null||typeof n>"u"||ke(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function W(e,n,t,r,a,i,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=s}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];X[n]=new W(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ze=/[\-:]([a-z])/g;function Ve(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ze,Ve);X[n]=new W(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ze,Ve);X[n]=new W(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ze,Ve);X[n]=new W(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fe(e,n,t,r){var a=X.hasOwnProperty(n)?X[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(fe(n,t,a,r)&&(t=null),r||a===null?B(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var pe=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),be=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),en=Symbol.for("react.strict_mode"),Mn=Symbol.for("react.profiler"),bn=Symbol.for("react.provider"),et=Symbol.for("react.context"),hn=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),ln=Symbol.for("react.suspense_list"),yn=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),C=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,g;function k(e){if(g===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);g=n&&n[1]||""}return`
`+g+e}var G=!1;function U(e,n){if(!e||G)return"";G=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(y){var r=y}Reflect.construct(e,[],n)}else{try{n.call()}catch(y){r=y}e.call(n.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),i=r.stack.split(`
`),s=a.length-1,u=i.length-1;1<=s&&0<=u&&a[s]!==i[u];)u--;for(;1<=s&&0<=u;s--,u--)if(a[s]!==i[u]){if(s!==1||u!==1)do if(s--,u--,0>u||a[s]!==i[u]){var d=`
`+a[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=u);break}}}finally{G=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function Q(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1),e;case 11:return e=U(e.type.render,!1),e;case 1:return e=U(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case be:return"Portal";case Mn:return"Profiler";case en:return"StrictMode";case $e:return"Suspense";case ln:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case et:return(e.displayName||"Context")+".Consumer";case bn:return(e._context.displayName||"Context")+".Provider";case hn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yn:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case Oe:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}function te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(n);case 8:return n===en?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e){var n=se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mr(e){e._valueTracker||(e._valueTracker=Qe(e))}function eo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=se(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,n){var t=n.checked;return I({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function no(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ee(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function to(e,n){n=n.checked,n!=null&&Fe(e,"checked",n,!1)}function Ka(e,n){to(e,n);var t=ee(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ja(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ja(e,n.type,ee(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ro(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ja(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var qt=Array.isArray;function ft(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ee(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Xa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(c(91));return I({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ao(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(c(92));if(qt(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ee(t)}}function io(e,n){var t=ee(n.value),r=ee(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function so(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function oo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?oo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,lo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Gt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xc=["Webkit","ms","Moz","O"];Object.keys(Ht).forEach(function(e){xc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ht[n]=Ht[e]})});function uo(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ht.hasOwnProperty(e)&&Ht[e]?(""+n).trim():n+"px"}function co(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=uo(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var bc=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ei(e,n){if(n){if(bc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(c(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(c(61))}if(n.style!=null&&typeof n.style!="object")throw Error(c(62))}}function ni(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ti=null;function ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,ht=null,yt=null;function po(e){if(e=cr(e)){if(typeof ai!="function")throw Error(c(280));var n=e.stateNode;n&&(n=ia(n),ai(e.stateNode,e.type,n))}}function mo(e){ht?yt?yt.push(e):yt=[e]:ht=e}function go(){if(ht){var e=ht,n=yt;if(yt=ht=null,po(e),n)for(e=0;e<n.length;e++)po(n[e])}}function fo(e,n){return e(n)}function ho(){}var ii=!1;function yo(e,n,t){if(ii)return e(n,t);ii=!0;try{return fo(e,n,t)}finally{ii=!1,(ht!==null||yt!==null)&&(ho(),go())}}function Ut(e,n){var t=e.stateNode;if(t===null)return null;var r=ia(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var si=!1;if(q)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){si=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{si=!1}function Ac(e,n,t,r,a,i,s,u,d){var y=Array.prototype.slice.call(arguments,3);try{n.apply(t,y)}catch(x){this.onError(x)}}var Wt=!1,Fr=null,zr=!1,oi=null,Sc={onError:function(e){Wt=!0,Fr=e}};function Cc(e,n,t,r,a,i,s,u,d){Wt=!1,Fr=null,Ac.apply(Sc,arguments)}function Ec(e,n,t,r,a,i,s,u,d){if(Cc.apply(this,arguments),Wt){if(Wt){var y=Fr;Wt=!1,Fr=null}else throw Error(c(198));zr||(zr=!0,oi=y)}}function nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function vo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _o(e){if(nt(e)!==e)throw Error(c(188))}function Pc(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return _o(a),e;if(i===r)return _o(a),n;i=i.sibling}throw Error(c(188))}if(t.return!==r.return)t=a,r=i;else{for(var s=!1,u=a.child;u;){if(u===t){s=!0,t=a,r=i;break}if(u===r){s=!0,r=a,t=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===t){s=!0,t=i,r=a;break}if(u===r){s=!0,r=i,t=a;break}u=u.sibling}if(!s)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function wo(e){return e=Pc(e),e!==null?ko(e):null}function ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ko(e);if(n!==null)return n;e=e.sibling}return null}var xo=m.unstable_scheduleCallback,bo=m.unstable_cancelCallback,Ic=m.unstable_shouldYield,jc=m.unstable_requestPaint,me=m.unstable_now,Tc=m.unstable_getCurrentPriorityLevel,li=m.unstable_ImmediatePriority,Ao=m.unstable_UserBlockingPriority,Or=m.unstable_NormalPriority,Rc=m.unstable_LowPriority,So=m.unstable_IdlePriority,qr=null,vn=null;function Nc(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(qr,e,void 0,(e.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:Dc,Mc=Math.log,Lc=Math.LN2;function Dc(e){return e>>>=0,e===0?32:31-(Mc(e)/Lc|0)|0}var Gr=64,Hr=4194304;function Vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,s=t&268435455;if(s!==0){var u=s&~a;u!==0?r=Vt(u):(i&=s,i!==0&&(r=Vt(i)))}else s=t&~a,s!==0?r=Vt(s):i!==0&&(r=Vt(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&a)===0&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-un(n),a=1<<t,r|=e[t],n&=~a;return r}function Fc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-un(i),u=1<<s,d=a[s];d===-1?((u&t)===0||(u&r)!==0)&&(a[s]=Fc(u,n)):d<=n&&(e.expiredLanes|=u),i&=~u}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Co(){var e=Gr;return Gr<<=1,(Gr&4194240)===0&&(Gr=64),e}function ci(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function $t(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-un(n),e[n]=t}function Oc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-un(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function di(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-un(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var ne=0;function Eo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Po,pi,Io,jo,To,mi=!1,Br=[],Ln=null,Dn=null,Fn=null,Qt=new Map,Yt=new Map,zn=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ro(e,n){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function Kt(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=cr(n),n!==null&&pi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Gc(e,n,t,r,a){switch(n){case"focusin":return Ln=Kt(Ln,e,n,t,r,a),!0;case"dragenter":return Dn=Kt(Dn,e,n,t,r,a),!0;case"mouseover":return Fn=Kt(Fn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Qt.set(i,Kt(Qt.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Yt.set(i,Kt(Yt.get(i)||null,e,n,t,r,a)),!0}return!1}function No(e){var n=tt(e.target);if(n!==null){var t=nt(n);if(t!==null){if(n=t.tag,n===13){if(n=vo(t),n!==null){e.blockedOn=n,To(e.priority,function(){Io(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=fi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ti=r,t.target.dispatchEvent(r),ti=null}else return n=cr(t),n!==null&&pi(n),e.blockedOn=t,!1;n.shift()}return!0}function Mo(e,n,t){Wr(e)&&t.delete(n)}function Hc(){mi=!1,Ln!==null&&Wr(Ln)&&(Ln=null),Dn!==null&&Wr(Dn)&&(Dn=null),Fn!==null&&Wr(Fn)&&(Fn=null),Qt.forEach(Mo),Yt.forEach(Mo)}function Jt(e,n){e.blockedOn===n&&(e.blockedOn=null,mi||(mi=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,Hc)))}function Xt(e){function n(a){return Jt(a,e)}if(0<Br.length){Jt(Br[0],e);for(var t=1;t<Br.length;t++){var r=Br[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Ln!==null&&Jt(Ln,e),Dn!==null&&Jt(Dn,e),Fn!==null&&Jt(Fn,e),Qt.forEach(n),Yt.forEach(n),t=0;t<zn.length;t++)r=zn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(t=zn[0],t.blockedOn===null);)No(t),t.blockedOn===null&&zn.shift()}var vt=pe.ReactCurrentBatchConfig,Vr=!0;function Uc(e,n,t,r){var a=ne,i=vt.transition;vt.transition=null;try{ne=1,gi(e,n,t,r)}finally{ne=a,vt.transition=i}}function Bc(e,n,t,r){var a=ne,i=vt.transition;vt.transition=null;try{ne=4,gi(e,n,t,r)}finally{ne=a,vt.transition=i}}function gi(e,n,t,r){if(Vr){var a=fi(e,n,t,r);if(a===null)Ri(e,n,r,$r,t),Ro(e,r);else if(Gc(a,e,n,t,r))r.stopPropagation();else if(Ro(e,r),n&4&&-1<qc.indexOf(e)){for(;a!==null;){var i=cr(a);if(i!==null&&Po(i),i=fi(e,n,t,r),i===null&&Ri(e,n,r,$r,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ri(e,n,r,null,t)}}var $r=null;function fi(e,n,t,r){if($r=null,e=ri(r),e=tt(e),e!==null)if(n=nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=vo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $r=e,null}function Lo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tc()){case li:return 1;case Ao:return 4;case Or:case Rc:return 16;case So:return 536870912;default:return 16}default:return 16}}var On=null,hi=null,Qr=null;function Do(){if(Qr)return Qr;var e,n=hi,t=n.length,r,a="value"in On?On.value:On.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===a[i-r];r++);return Qr=a.slice(e,1<r?1-r:void 0)}function Yr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function Fo(){return!1}function Ye(e){function n(t,r,a,i,s){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kr:Fo,this.isPropagationStopped=Fo,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),n}var _t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=Ye(_t),Zt=I({},_t,{view:0,detail:0}),Wc=Ye(Zt),vi,_i,er,Jr=I({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(vi=e.screenX-er.screenX,_i=e.screenY-er.screenY):_i=vi=0,er=e),vi)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),zo=Ye(Jr),Vc=I({},Jr,{dataTransfer:0}),$c=Ye(Vc),Qc=I({},Zt,{relatedTarget:0}),wi=Ye(Qc),Yc=I({},_t,{animationName:0,elapsedTime:0,pseudoElement:0}),Kc=Ye(Yc),Jc=I({},_t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xc=Ye(Jc),Zc=I({},_t,{data:0}),Oo=Ye(Zc),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=td[e])?!!n[e]:!1}function ki(){return rd}var ad=I({},Zt,{key:function(e){if(e.key){var n=ed[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ki,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),id=Ye(ad),sd=I({},Jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Ye(sd),od=I({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ki}),ld=Ye(od),ud=I({},_t,{propertyName:0,elapsedTime:0,pseudoElement:0}),cd=Ye(ud),dd=I({},Jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pd=Ye(dd),md=[9,13,27,32],xi=q&&"CompositionEvent"in window,nr=null;q&&"documentMode"in document&&(nr=document.documentMode);var gd=q&&"TextEvent"in window&&!nr,Go=q&&(!xi||nr&&8<nr&&11>=nr),Ho=" ",Uo=!1;function Bo(e,n){switch(e){case"keyup":return md.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wt=!1;function fd(e,n){switch(e){case"compositionend":return Wo(n);case"keypress":return n.which!==32?null:(Uo=!0,Ho);case"textInput":return e=n.data,e===Ho&&Uo?null:e;default:return null}}function hd(e,n){if(wt)return e==="compositionend"||!xi&&Bo(e,n)?(e=Do(),Qr=hi=On=null,wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Go&&n.locale!=="ko"?null:n.data;default:return null}}var yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yd[e.type]:n==="textarea"}function $o(e,n,t,r){mo(r),n=ta(n,"onChange"),0<n.length&&(t=new yi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var tr=null,rr=null;function vd(e){dl(e,0)}function Xr(e){var n=St(e);if(eo(n))return e}function _d(e,n){if(e==="change")return n}var Qo=!1;if(q){var bi;if(q){var Ai="oninput"in document;if(!Ai){var Yo=document.createElement("div");Yo.setAttribute("oninput","return;"),Ai=typeof Yo.oninput=="function"}bi=Ai}else bi=!1;Qo=bi&&(!document.documentMode||9<document.documentMode)}function Ko(){tr&&(tr.detachEvent("onpropertychange",Jo),rr=tr=null)}function Jo(e){if(e.propertyName==="value"&&Xr(rr)){var n=[];$o(n,rr,e,ri(e)),yo(vd,n)}}function wd(e,n,t){e==="focusin"?(Ko(),tr=n,rr=t,tr.attachEvent("onpropertychange",Jo)):e==="focusout"&&Ko()}function kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(rr)}function xd(e,n){if(e==="click")return Xr(n)}function bd(e,n){if(e==="input"||e==="change")return Xr(n)}function Ad(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var cn=typeof Object.is=="function"?Object.is:Ad;function ar(e,n){if(cn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!T.call(n,a)||!cn(e[a],n[a]))return!1}return!0}function Xo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zo(e,n){var t=Xo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Xo(t)}}function el(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?el(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nl(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function Si(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Sd(e){var n=nl(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&el(t.ownerDocument.documentElement,t)){if(r!==null&&Si(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Zo(t,i);var s=Zo(t,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cd=q&&"documentMode"in document&&11>=document.documentMode,kt=null,Ci=null,ir=null,Ei=!1;function tl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ei||kt==null||kt!==Lr(r)||(r=kt,"selectionStart"in r&&Si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&ar(ir,r)||(ir=r,r=ta(Ci,"onSelect"),0<r.length&&(n=new yi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=kt)))}function Zr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xt={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Pi={},rl={};q&&(rl=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function ea(e){if(Pi[e])return Pi[e];if(!xt[e])return e;var n=xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in rl)return Pi[e]=n[t];return e}var al=ea("animationend"),il=ea("animationiteration"),sl=ea("animationstart"),ol=ea("transitionend"),ll=new Map,ul="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,n){ll.set(e,n),A(n,[e])}for(var Ii=0;Ii<ul.length;Ii++){var ji=ul[Ii],Ed=ji.toLowerCase(),Pd=ji[0].toUpperCase()+ji.slice(1);qn(Ed,"on"+Pd)}qn(al,"onAnimationEnd"),qn(il,"onAnimationIteration"),qn(sl,"onAnimationStart"),qn("dblclick","onDoubleClick"),qn("focusin","onFocus"),qn("focusout","onBlur"),qn(ol,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Id=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function cl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ec(r,n,void 0,e),e.currentTarget=null}function dl(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var s=r.length-1;0<=s;s--){var u=r[s],d=u.instance,y=u.currentTarget;if(u=u.listener,d!==i&&a.isPropagationStopped())break e;cl(a,u,y),i=d}else for(s=0;s<r.length;s++){if(u=r[s],d=u.instance,y=u.currentTarget,u=u.listener,d!==i&&a.isPropagationStopped())break e;cl(a,u,y),i=d}}}if(zr)throw e=oi,zr=!1,oi=null,e}function ae(e,n){var t=n[zi];t===void 0&&(t=n[zi]=new Set);var r=e+"__bubble";t.has(r)||(pl(n,e,2,!1),t.add(r))}function Ti(e,n,t){var r=0;n&&(r|=4),pl(t,e,r,n)}var na="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[na]){e[na]=!0,v.forEach(function(t){t!=="selectionchange"&&(Id.has(t)||Ti(t,!1,e),Ti(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[na]||(n[na]=!0,Ti("selectionchange",!1,n))}}function pl(e,n,t,r){switch(Lo(n)){case 1:var a=Uc;break;case 4:a=Bc;break;default:a=gi}t=a.bind(null,n,t,e),a=void 0,!si||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ri(e,n,t,r,a){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var u=r.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;s=s.return}for(;u!==null;){if(s=tt(u),s===null)return;if(d=s.tag,d===5||d===6){r=i=s;continue e}u=u.parentNode}}r=r.return}yo(function(){var y=i,x=ri(t),b=[];e:{var w=ll.get(e);if(w!==void 0){var E=yi,R=e;switch(e){case"keypress":if(Yr(t)===0)break e;case"keydown":case"keyup":E=id;break;case"focusin":R="focus",E=wi;break;case"focusout":R="blur",E=wi;break;case"beforeblur":case"afterblur":E=wi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=$c;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=ld;break;case al:case il:case sl:E=Kc;break;case ol:E=cd;break;case"scroll":E=Wc;break;case"wheel":E=pd;break;case"copy":case"cut":case"paste":E=Xc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=qo}var N=(n&4)!==0,ge=!N&&e==="scroll",f=N?w!==null?w+"Capture":null:w;N=[];for(var p=y,h;p!==null;){h=p;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,f!==null&&(S=Ut(p,f),S!=null&&N.push(lr(p,S,h)))),ge)break;p=p.return}0<N.length&&(w=new E(w,R,null,t,x),b.push({event:w,listeners:N}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",w&&t!==ti&&(R=t.relatedTarget||t.fromElement)&&(tt(R)||R[An]))break e;if((E||w)&&(w=x.window===x?x:(w=x.ownerDocument)?w.defaultView||w.parentWindow:window,E?(R=t.relatedTarget||t.toElement,E=y,R=R?tt(R):null,R!==null&&(ge=nt(R),R!==ge||R.tag!==5&&R.tag!==6)&&(R=null)):(E=null,R=y),E!==R)){if(N=zo,S="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(N=qo,S="onPointerLeave",f="onPointerEnter",p="pointer"),ge=E==null?w:St(E),h=R==null?w:St(R),w=new N(S,p+"leave",E,t,x),w.target=ge,w.relatedTarget=h,S=null,tt(x)===y&&(N=new N(f,p+"enter",R,t,x),N.target=h,N.relatedTarget=ge,S=N),ge=S,E&&R)n:{for(N=E,f=R,p=0,h=N;h;h=bt(h))p++;for(h=0,S=f;S;S=bt(S))h++;for(;0<p-h;)N=bt(N),p--;for(;0<h-p;)f=bt(f),h--;for(;p--;){if(N===f||f!==null&&N===f.alternate)break n;N=bt(N),f=bt(f)}N=null}else N=null;E!==null&&ml(b,w,E,N,!1),R!==null&&ge!==null&&ml(b,ge,R,N,!0)}}e:{if(w=y?St(y):window,E=w.nodeName&&w.nodeName.toLowerCase(),E==="select"||E==="input"&&w.type==="file")var M=_d;else if(Vo(w))if(Qo)M=bd;else{M=kd;var D=wd}else(E=w.nodeName)&&E.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(M=xd);if(M&&(M=M(e,y))){$o(b,M,t,x);break e}D&&D(e,w,y),e==="focusout"&&(D=w._wrapperState)&&D.controlled&&w.type==="number"&&Ja(w,"number",w.value)}switch(D=y?St(y):window,e){case"focusin":(Vo(D)||D.contentEditable==="true")&&(kt=D,Ci=y,ir=null);break;case"focusout":ir=Ci=kt=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,tl(b,t,x);break;case"selectionchange":if(Cd)break;case"keydown":case"keyup":tl(b,t,x)}var F;if(xi)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else wt?Bo(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(Go&&t.locale!=="ko"&&(wt||O!=="onCompositionStart"?O==="onCompositionEnd"&&wt&&(F=Do()):(On=x,hi="value"in On?On.value:On.textContent,wt=!0)),D=ta(y,O),0<D.length&&(O=new Oo(O,e,null,t,x),b.push({event:O,listeners:D}),F?O.data=F:(F=Wo(t),F!==null&&(O.data=F)))),(F=gd?fd(e,t):hd(e,t))&&(y=ta(y,"onBeforeInput"),0<y.length&&(x=new Oo("onBeforeInput","beforeinput",null,t,x),b.push({event:x,listeners:y}),x.data=F))}dl(b,n)})}function lr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ta(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ut(e,t),i!=null&&r.unshift(lr(e,i,a)),i=Ut(e,n),i!=null&&r.push(lr(e,i,a))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ml(e,n,t,r,a){for(var i=n._reactName,s=[];t!==null&&t!==r;){var u=t,d=u.alternate,y=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&y!==null&&(u=y,a?(d=Ut(t,i),d!=null&&s.unshift(lr(t,d,u))):a||(d=Ut(t,i),d!=null&&s.push(lr(t,d,u)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var jd=/\r\n?/g,Td=/\u0000|\uFFFD/g;function gl(e){return(typeof e=="string"?e:""+e).replace(jd,`
`).replace(Td,"")}function ra(e,n,t){if(n=gl(n),gl(e)!==n&&t)throw Error(c(425))}function aa(){}var Ni=null,Mi=null;function Li(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,Rd=typeof clearTimeout=="function"?clearTimeout:void 0,fl=typeof Promise=="function"?Promise:void 0,Nd=typeof queueMicrotask=="function"?queueMicrotask:typeof fl<"u"?function(e){return fl.resolve(null).then(e).catch(Md)}:Di;function Md(e){setTimeout(function(){throw e})}function Fi(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Xt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Xt(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function hl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var At=Math.random().toString(36).slice(2),_n="__reactFiber$"+At,ur="__reactProps$"+At,An="__reactContainer$"+At,zi="__reactEvents$"+At,Ld="__reactListeners$"+At,Dd="__reactHandles$"+At;function tt(e){var n=e[_n];if(n)return n;for(var t=e.parentNode;t;){if(n=t[An]||t[_n]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=hl(e);e!==null;){if(t=e[_n])return t;e=hl(e)}return n}e=t,t=e.parentNode}return null}function cr(e){return e=e[_n]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function ia(e){return e[ur]||null}var Oi=[],Ct=-1;function Hn(e){return{current:e}}function ie(e){0>Ct||(e.current=Oi[Ct],Oi[Ct]=null,Ct--)}function re(e,n){Ct++,Oi[Ct]=e.current,e.current=n}var Un={},je=Hn(Un),qe=Hn(!1),rt=Un;function Et(e,n){var t=e.type.contextTypes;if(!t)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ge(e){return e=e.childContextTypes,e!=null}function sa(){ie(qe),ie(je)}function yl(e,n,t){if(je.current!==Un)throw Error(c(168));re(je,n),re(qe,t)}function vl(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(c(108,te(e)||"Unknown",a));return I({},t,r)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,rt=je.current,re(je,e),re(qe,qe.current),!0}function _l(e,n,t){var r=e.stateNode;if(!r)throw Error(c(169));t?(e=vl(e,n,rt),r.__reactInternalMemoizedMergedChildContext=e,ie(qe),ie(je),re(je,e)):ie(qe),re(qe,t)}var Sn=null,la=!1,qi=!1;function wl(e){Sn===null?Sn=[e]:Sn.push(e)}function Fd(e){la=!0,wl(e)}function Bn(){if(!qi&&Sn!==null){qi=!0;var e=0,n=ne;try{var t=Sn;for(ne=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Sn=null,la=!1}catch(a){throw Sn!==null&&(Sn=Sn.slice(e+1)),xo(li,Bn),a}finally{ne=n,qi=!1}}return null}var Pt=[],It=0,ua=null,ca=0,nn=[],tn=0,at=null,Cn=1,En="";function it(e,n){Pt[It++]=ca,Pt[It++]=ua,ua=e,ca=n}function kl(e,n,t){nn[tn++]=Cn,nn[tn++]=En,nn[tn++]=at,at=e;var r=Cn;e=En;var a=32-un(r)-1;r&=~(1<<a),t+=1;var i=32-un(n)+a;if(30<i){var s=a-a%5;i=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Cn=1<<32-un(n)+a|t<<a|r,En=i+e}else Cn=1<<i|t<<a|r,En=e}function Gi(e){e.return!==null&&(it(e,1),kl(e,1,0))}function Hi(e){for(;e===ua;)ua=Pt[--It],Pt[It]=null,ca=Pt[--It],Pt[It]=null;for(;e===at;)at=nn[--tn],nn[tn]=null,En=nn[--tn],nn[tn]=null,Cn=nn[--tn],nn[tn]=null}var Ke=null,Je=null,oe=!1,dn=null;function xl(e,n){var t=on(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function bl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ke=e,Je=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ke=e,Je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=at!==null?{id:Cn,overflow:En}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=on(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ke=e,Je=null,!0):!1;default:return!1}}function Ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(oe){var n=Je;if(n){var t=n;if(!bl(e,n)){if(Ui(e))throw Error(c(418));n=Gn(t.nextSibling);var r=Ke;n&&bl(e,n)?xl(r,t):(e.flags=e.flags&-4097|2,oe=!1,Ke=e)}}else{if(Ui(e))throw Error(c(418));e.flags=e.flags&-4097|2,oe=!1,Ke=e}}}function Al(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function da(e){if(e!==Ke)return!1;if(!oe)return Al(e),oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Li(e.type,e.memoizedProps)),n&&(n=Je)){if(Ui(e))throw Sl(),Error(c(418));for(;n;)xl(e,n),n=Gn(n.nextSibling)}if(Al(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Je=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Je=null}}else Je=Ke?Gn(e.stateNode.nextSibling):null;return!0}function Sl(){for(var e=Je;e;)e=Gn(e.nextSibling)}function jt(){Je=Ke=null,oe=!1}function Wi(e){dn===null?dn=[e]:dn.push(e)}var zd=pe.ReactCurrentBatchConfig;function dr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var r=t.stateNode}if(!r)throw Error(c(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(s){var u=a.refs;s===null?delete u[i]:u[i]=s},n._stringRef=i,n)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function pa(e,n){throw e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Cl(e){var n=e._init;return n(e._payload)}function El(e){function n(f,p){if(e){var h=f.deletions;h===null?(f.deletions=[p],f.flags|=16):h.push(p)}}function t(f,p){if(!e)return null;for(;p!==null;)n(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function a(f,p){return f=Xn(f,p),f.index=0,f.sibling=null,f}function i(f,p,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<p?(f.flags|=2,p):h):(f.flags|=2,p)):(f.flags|=1048576,p)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,p,h,S){return p===null||p.tag!==6?(p=Ds(h,f.mode,S),p.return=f,p):(p=a(p,h),p.return=f,p)}function d(f,p,h,S){var M=h.type;return M===ze?x(f,p,h.props.children,S,h.key):p!==null&&(p.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oe&&Cl(M)===p.type)?(S=a(p,h.props),S.ref=dr(f,p,h),S.return=f,S):(S=Da(h.type,h.key,h.props,null,f.mode,S),S.ref=dr(f,p,h),S.return=f,S)}function y(f,p,h,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Fs(h,f.mode,S),p.return=f,p):(p=a(p,h.children||[]),p.return=f,p)}function x(f,p,h,S,M){return p===null||p.tag!==7?(p=mt(h,f.mode,S,M),p.return=f,p):(p=a(p,h),p.return=f,p)}function b(f,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ds(""+p,f.mode,h),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xe:return h=Da(p.type,p.key,p.props,null,f.mode,h),h.ref=dr(f,null,p),h.return=f,h;case be:return p=Fs(p,f.mode,h),p.return=f,p;case Oe:var S=p._init;return b(f,S(p._payload),h)}if(qt(p)||z(p))return p=mt(p,f.mode,h,null),p.return=f,p;pa(f,p)}return null}function w(f,p,h,S){var M=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return M!==null?null:u(f,p,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xe:return h.key===M?d(f,p,h,S):null;case be:return h.key===M?y(f,p,h,S):null;case Oe:return M=h._init,w(f,p,M(h._payload),S)}if(qt(h)||z(h))return M!==null?null:x(f,p,h,S,null);pa(f,h)}return null}function E(f,p,h,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(h)||null,u(p,f,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xe:return f=f.get(S.key===null?h:S.key)||null,d(p,f,S,M);case be:return f=f.get(S.key===null?h:S.key)||null,y(p,f,S,M);case Oe:var D=S._init;return E(f,p,h,D(S._payload),M)}if(qt(S)||z(S))return f=f.get(h)||null,x(p,f,S,M,null);pa(p,S)}return null}function R(f,p,h,S){for(var M=null,D=null,F=p,O=p=0,Ce=null;F!==null&&O<h.length;O++){F.index>O?(Ce=F,F=null):Ce=F.sibling;var K=w(f,F,h[O],S);if(K===null){F===null&&(F=Ce);break}e&&F&&K.alternate===null&&n(f,F),p=i(K,p,O),D===null?M=K:D.sibling=K,D=K,F=Ce}if(O===h.length)return t(f,F),oe&&it(f,O),M;if(F===null){for(;O<h.length;O++)F=b(f,h[O],S),F!==null&&(p=i(F,p,O),D===null?M=F:D.sibling=F,D=F);return oe&&it(f,O),M}for(F=r(f,F);O<h.length;O++)Ce=E(F,f,O,h[O],S),Ce!==null&&(e&&Ce.alternate!==null&&F.delete(Ce.key===null?O:Ce.key),p=i(Ce,p,O),D===null?M=Ce:D.sibling=Ce,D=Ce);return e&&F.forEach(function(Zn){return n(f,Zn)}),oe&&it(f,O),M}function N(f,p,h,S){var M=z(h);if(typeof M!="function")throw Error(c(150));if(h=M.call(h),h==null)throw Error(c(151));for(var D=M=null,F=p,O=p=0,Ce=null,K=h.next();F!==null&&!K.done;O++,K=h.next()){F.index>O?(Ce=F,F=null):Ce=F.sibling;var Zn=w(f,F,K.value,S);if(Zn===null){F===null&&(F=Ce);break}e&&F&&Zn.alternate===null&&n(f,F),p=i(Zn,p,O),D===null?M=Zn:D.sibling=Zn,D=Zn,F=Ce}if(K.done)return t(f,F),oe&&it(f,O),M;if(F===null){for(;!K.done;O++,K=h.next())K=b(f,K.value,S),K!==null&&(p=i(K,p,O),D===null?M=K:D.sibling=K,D=K);return oe&&it(f,O),M}for(F=r(f,F);!K.done;O++,K=h.next())K=E(F,f,O,K.value,S),K!==null&&(e&&K.alternate!==null&&F.delete(K.key===null?O:K.key),p=i(K,p,O),D===null?M=K:D.sibling=K,D=K);return e&&F.forEach(function(yp){return n(f,yp)}),oe&&it(f,O),M}function ge(f,p,h,S){if(typeof h=="object"&&h!==null&&h.type===ze&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case xe:e:{for(var M=h.key,D=p;D!==null;){if(D.key===M){if(M=h.type,M===ze){if(D.tag===7){t(f,D.sibling),p=a(D,h.props.children),p.return=f,f=p;break e}}else if(D.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oe&&Cl(M)===D.type){t(f,D.sibling),p=a(D,h.props),p.ref=dr(f,D,h),p.return=f,f=p;break e}t(f,D);break}else n(f,D);D=D.sibling}h.type===ze?(p=mt(h.props.children,f.mode,S,h.key),p.return=f,f=p):(S=Da(h.type,h.key,h.props,null,f.mode,S),S.ref=dr(f,p,h),S.return=f,f=S)}return s(f);case be:e:{for(D=h.key;p!==null;){if(p.key===D)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){t(f,p.sibling),p=a(p,h.children||[]),p.return=f,f=p;break e}else{t(f,p);break}else n(f,p);p=p.sibling}p=Fs(h,f.mode,S),p.return=f,f=p}return s(f);case Oe:return D=h._init,ge(f,p,D(h._payload),S)}if(qt(h))return R(f,p,h,S);if(z(h))return N(f,p,h,S);pa(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(t(f,p.sibling),p=a(p,h),p.return=f,f=p):(t(f,p),p=Ds(h,f.mode,S),p.return=f,f=p),s(f)):t(f,p)}return ge}var Tt=El(!0),Pl=El(!1),ma=Hn(null),ga=null,Rt=null,Vi=null;function $i(){Vi=Rt=ga=null}function Qi(e){var n=ma.current;ie(ma),e._currentValue=n}function Yi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Nt(e,n){ga=e,Vi=Rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(He=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(Vi!==e)if(e={context:e,memoizedValue:n,next:null},Rt===null){if(ga===null)throw Error(c(308));Rt=e,ga.dependencies={lanes:0,firstContext:e}}else Rt=Rt.next=e;return n}var st=null;function Ki(e){st===null?st=[e]:st.push(e)}function Il(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,Ki(n)):(t.next=a.next,a.next=t),n.interleaved=t,Pn(e,r)}function Pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Wn=!1;function Ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function In(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Vn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Pn(e,t)}return a=r.interleaved,a===null?(n.next=n,Ki(r)):(n.next=a.next,a.next=n),r.interleaved=n,Pn(e,t)}function fa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,di(e,t)}}function Tl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ha(e,n,t,r){var a=e.updateQueue;Wn=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var d=u,y=d.next;d.next=null,s===null?i=y:s.next=y,s=d;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==s&&(u===null?x.firstBaseUpdate=y:u.next=y,x.lastBaseUpdate=d))}if(i!==null){var b=a.baseState;s=0,x=y=d=null,u=i;do{var w=u.lane,E=u.eventTime;if((r&w)===w){x!==null&&(x=x.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=e,N=u;switch(w=n,E=t,N.tag){case 1:if(R=N.payload,typeof R=="function"){b=R.call(E,b,w);break e}b=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,w=typeof R=="function"?R.call(E,b,w):R,w==null)break e;b=I({},b,w);break e;case 2:Wn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=a.effects,w===null?a.effects=[u]:w.push(u))}else E={eventTime:E,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(y=x=E,d=b):x=x.next=E,s|=w;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;w=u,u=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);if(x===null&&(d=b),a.baseState=d,a.firstBaseUpdate=y,a.lastBaseUpdate=x,n=a.shared.interleaved,n!==null){a=n;do s|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);ut|=s,e.lanes=s,e.memoizedState=b}}function Rl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(c(191,a));a.call(r)}}}var pr={},wn=Hn(pr),mr=Hn(pr),gr=Hn(pr);function ot(e){if(e===pr)throw Error(c(174));return e}function Xi(e,n){switch(re(gr,n),re(mr,e),re(wn,pr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Za(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Za(n,e)}ie(wn),re(wn,n)}function Mt(){ie(wn),ie(mr),ie(gr)}function Nl(e){ot(gr.current);var n=ot(wn.current),t=Za(n,e.type);n!==t&&(re(mr,e),re(wn,t))}function Zi(e){mr.current===e&&(ie(wn),ie(mr))}var le=Hn(0);function ya(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var es=[];function ns(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var va=pe.ReactCurrentDispatcher,ts=pe.ReactCurrentBatchConfig,lt=0,ue=null,ve=null,Ae=null,_a=!1,fr=!1,hr=0,Od=0;function Te(){throw Error(c(321))}function rs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!cn(e[t],n[t]))return!1;return!0}function as(e,n,t,r,a,i){if(lt=i,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,va.current=e===null||e.memoizedState===null?Ud:Bd,e=t(r,a),fr){i=0;do{if(fr=!1,hr=0,25<=i)throw Error(c(301));i+=1,Ae=ve=null,n.updateQueue=null,va.current=Wd,e=t(r,a)}while(fr)}if(va.current=xa,n=ve!==null&&ve.next!==null,lt=0,Ae=ve=ue=null,_a=!1,n)throw Error(c(300));return e}function is(){var e=hr!==0;return hr=0,e}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ue.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function an(){if(ve===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var n=Ae===null?ue.memoizedState:Ae.next;if(n!==null)Ae=n,ve=e;else{if(e===null)throw Error(c(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ae===null?ue.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function yr(e,n){return typeof n=="function"?n(e):n}function ss(e){var n=an(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=ve,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var u=s=null,d=null,y=i;do{var x=y.lane;if((lt&x)===x)d!==null&&(d=d.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var b={lane:x,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};d===null?(u=d=b,s=r):d=d.next=b,ue.lanes|=x,ut|=x}y=y.next}while(y!==null&&y!==i);d===null?s=r:d.next=u,cn(r,n.memoizedState)||(He=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,ue.lanes|=i,ut|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function os(e){var n=an(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);cn(i,n.memoizedState)||(He=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Ml(){}function Ll(e,n){var t=ue,r=an(),a=n(),i=!cn(r.memoizedState,a);if(i&&(r.memoizedState=a,He=!0),r=r.queue,ls(zl.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Ae!==null&&Ae.memoizedState.tag&1){if(t.flags|=2048,vr(9,Fl.bind(null,t,r,a,n),void 0,null),Se===null)throw Error(c(349));(lt&30)!==0||Dl(t,n,a)}return a}function Dl(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fl(e,n,t,r){n.value=t,n.getSnapshot=r,Ol(n)&&ql(e)}function zl(e,n,t){return t(function(){Ol(n)&&ql(e)})}function Ol(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!cn(e,t)}catch{return!0}}function ql(e){var n=Pn(e,1);n!==null&&fn(n,e,1,-1)}function Gl(e){var n=kn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:e},n.queue=e,e=e.dispatch=Hd.bind(null,ue,e),[n.memoizedState,e]}function vr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Hl(){return an().memoizedState}function wa(e,n,t,r){var a=kn();ue.flags|=e,a.memoizedState=vr(1|n,t,void 0,r===void 0?null:r)}function ka(e,n,t,r){var a=an();r=r===void 0?null:r;var i=void 0;if(ve!==null){var s=ve.memoizedState;if(i=s.destroy,r!==null&&rs(r,s.deps)){a.memoizedState=vr(n,t,i,r);return}}ue.flags|=e,a.memoizedState=vr(1|n,t,i,r)}function Ul(e,n){return wa(8390656,8,e,n)}function ls(e,n){return ka(2048,8,e,n)}function Bl(e,n){return ka(4,2,e,n)}function Wl(e,n){return ka(4,4,e,n)}function Vl(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $l(e,n,t){return t=t!=null?t.concat([e]):null,ka(4,4,Vl.bind(null,n,e),t)}function us(){}function Ql(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&rs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Yl(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&rs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Kl(e,n,t){return(lt&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=t):(cn(t,n)||(t=Co(),ue.lanes|=t,ut|=t,e.baseState=!0),n)}function qd(e,n){var t=ne;ne=t!==0&&4>t?t:4,e(!0);var r=ts.transition;ts.transition={};try{e(!1),n()}finally{ne=t,ts.transition=r}}function Jl(){return an().memoizedState}function Gd(e,n,t){var r=Kn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Xl(e))Zl(n,t);else if(t=Il(e,n,t,r),t!==null){var a=De();fn(t,e,r,a),eu(t,n,r)}}function Hd(e,n,t){var r=Kn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))Zl(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,u=i(s,t);if(a.hasEagerState=!0,a.eagerState=u,cn(u,s)){var d=n.interleaved;d===null?(a.next=a,Ki(n)):(a.next=d.next,d.next=a),n.interleaved=a;return}}catch{}finally{}t=Il(e,n,a,r),t!==null&&(a=De(),fn(t,e,r,a),eu(t,n,r))}}function Xl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Zl(e,n){fr=_a=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function eu(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,di(e,t)}}var xa={readContext:rn,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Ud={readContext:rn,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:Ul,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,wa(4194308,4,Vl.bind(null,n,e),t)},useLayoutEffect:function(e,n){return wa(4194308,4,e,n)},useInsertionEffect:function(e,n){return wa(4,2,e,n)},useMemo:function(e,n){var t=kn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=kn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Gd.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:Gl,useDebugValue:us,useDeferredValue:function(e){return kn().memoizedState=e},useTransition:function(){var e=Gl(!1),n=e[0];return e=qd.bind(null,e[1]),kn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ue,a=kn();if(oe){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Se===null)throw Error(c(349));(lt&30)!==0||Dl(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,Ul(zl.bind(null,r,i,e),[e]),r.flags|=2048,vr(9,Fl.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=kn(),n=Se.identifierPrefix;if(oe){var t=En,r=Cn;t=(r&~(1<<32-un(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=hr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Od++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Bd={readContext:rn,useCallback:Ql,useContext:rn,useEffect:ls,useImperativeHandle:$l,useInsertionEffect:Bl,useLayoutEffect:Wl,useMemo:Yl,useReducer:ss,useRef:Hl,useState:function(){return ss(yr)},useDebugValue:us,useDeferredValue:function(e){var n=an();return Kl(n,ve.memoizedState,e)},useTransition:function(){var e=ss(yr)[0],n=an().memoizedState;return[e,n]},useMutableSource:Ml,useSyncExternalStore:Ll,useId:Jl,unstable_isNewReconciler:!1},Wd={readContext:rn,useCallback:Ql,useContext:rn,useEffect:ls,useImperativeHandle:$l,useInsertionEffect:Bl,useLayoutEffect:Wl,useMemo:Yl,useReducer:os,useRef:Hl,useState:function(){return os(yr)},useDebugValue:us,useDeferredValue:function(e){var n=an();return ve===null?n.memoizedState=e:Kl(n,ve.memoizedState,e)},useTransition:function(){var e=os(yr)[0],n=an().memoizedState;return[e,n]},useMutableSource:Ml,useSyncExternalStore:Ll,useId:Jl,unstable_isNewReconciler:!1};function pn(e,n){if(e&&e.defaultProps){n=I({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function cs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:I({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ba={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=De(),a=Kn(e),i=In(r,a);i.payload=n,t!=null&&(i.callback=t),n=Vn(e,i,a),n!==null&&(fn(n,e,a,r),fa(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=De(),a=Kn(e),i=In(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Vn(e,i,a),n!==null&&(fn(n,e,a,r),fa(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=De(),r=Kn(e),a=In(t,r);a.tag=2,n!=null&&(a.callback=n),n=Vn(e,a,r),n!==null&&(fn(n,e,r,t),fa(n,e,r))}};function nu(e,n,t,r,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):n.prototype&&n.prototype.isPureReactComponent?!ar(t,r)||!ar(a,i):!0}function tu(e,n,t){var r=!1,a=Un,i=n.contextType;return typeof i=="object"&&i!==null?i=rn(i):(a=Ge(n)?rt:je.current,r=n.contextTypes,i=(r=r!=null)?Et(e,a):Un),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ba,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function ru(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ba.enqueueReplaceState(n,n.state,null)}function ds(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Ji(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=rn(i):(i=Ge(n)?rt:je.current,a.context=Et(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(cs(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ba.enqueueReplaceState(a,a.state,null),ha(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Lt(e,n){try{var t="",r=n;do t+=Q(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function ps(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ms(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Vd=typeof WeakMap=="function"?WeakMap:Map;function au(e,n,t){t=In(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ja||(ja=!0,Ps=r),ms(e,n)},t}function iu(e,n,t){t=In(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){ms(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ms(e,n),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function su(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Vd;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=sp.bind(null,e,n,t),n.then(e,e))}function ou(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function lu(e,n,t,r,a){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=In(-1,1),n.tag=2,Vn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var $d=pe.ReactCurrentOwner,He=!1;function Le(e,n,t,r){n.child=e===null?Pl(n,null,t,r):Tt(n,e.child,t,r)}function uu(e,n,t,r,a){t=t.render;var i=n.ref;return Nt(n,a),r=as(e,n,t,r,i,a),t=is(),e!==null&&!He?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,jn(e,n,a)):(oe&&t&&Gi(n),n.flags|=1,Le(e,n,r,a),n.child)}function cu(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Ls(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,du(e,n,i,r,a)):(e=Da(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&a)===0){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:ar,t(s,r)&&e.ref===n.ref)return jn(e,n,a)}return n.flags|=1,e=Xn(i,r),e.ref=n.ref,e.return=n,n.child=e}function du(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(ar(i,r)&&e.ref===n.ref)if(He=!1,n.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(He=!0);else return n.lanes=e.lanes,jn(e,n,a)}return gs(e,n,t,r,a)}function pu(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Ft,Xe),Xe|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,re(Ft,Xe),Xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,re(Ft,Xe),Xe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,re(Ft,Xe),Xe|=r;return Le(e,n,a,t),n.child}function mu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function gs(e,n,t,r,a){var i=Ge(t)?rt:je.current;return i=Et(n,i),Nt(n,a),t=as(e,n,t,r,i,a),r=is(),e!==null&&!He?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,jn(e,n,a)):(oe&&r&&Gi(n),n.flags|=1,Le(e,n,t,a),n.child)}function gu(e,n,t,r,a){if(Ge(t)){var i=!0;oa(n)}else i=!1;if(Nt(n,a),n.stateNode===null)Sa(e,n),tu(n,t,r),ds(n,t,r,a),r=!0;else if(e===null){var s=n.stateNode,u=n.memoizedProps;s.props=u;var d=s.context,y=t.contextType;typeof y=="object"&&y!==null?y=rn(y):(y=Ge(t)?rt:je.current,y=Et(n,y));var x=t.getDerivedStateFromProps,b=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function";b||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==r||d!==y)&&ru(n,s,r,y),Wn=!1;var w=n.memoizedState;s.state=w,ha(n,r,s,a),d=n.memoizedState,u!==r||w!==d||qe.current||Wn?(typeof x=="function"&&(cs(n,t,x,r),d=n.memoizedState),(u=Wn||nu(n,t,u,r,w,d,y))?(b||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),s.props=r,s.state=d,s.context=y,r=u):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,jl(e,n),u=n.memoizedProps,y=n.type===n.elementType?u:pn(n.type,u),s.props=y,b=n.pendingProps,w=s.context,d=t.contextType,typeof d=="object"&&d!==null?d=rn(d):(d=Ge(t)?rt:je.current,d=Et(n,d));var E=t.getDerivedStateFromProps;(x=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==b||w!==d)&&ru(n,s,r,d),Wn=!1,w=n.memoizedState,s.state=w,ha(n,r,s,a);var R=n.memoizedState;u!==b||w!==R||qe.current||Wn?(typeof E=="function"&&(cs(n,t,E,r),R=n.memoizedState),(y=Wn||nu(n,t,y,r,w,R,d)||!1)?(x||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,R,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,R,d)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=R),s.props=r,s.state=R,s.context=d,r=y):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),r=!1)}return fs(e,n,t,r,i,a)}function fs(e,n,t,r,a,i){mu(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return a&&_l(n,t,!1),jn(e,n,i);r=n.stateNode,$d.current=n;var u=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=Tt(n,e.child,null,i),n.child=Tt(n,null,u,i)):Le(e,n,u,i),n.memoizedState=r.state,a&&_l(n,t,!0),n.child}function fu(e){var n=e.stateNode;n.pendingContext?yl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&yl(e,n.context,!1),Xi(e,n.containerInfo)}function hu(e,n,t,r,a){return jt(),Wi(a),n.flags|=256,Le(e,n,t,r),n.child}var hs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function yu(e,n,t){var r=n.pendingProps,a=le.current,i=!1,s=(n.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),re(le,a&1),e===null)return Bi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(s=r.children,e=r.fallback,i?(r=n.mode,i=n.child,s={mode:"hidden",children:s},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Fa(s,r,0,null),e=mt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ys(t),n.memoizedState=hs,e):vs(n,s));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Qd(e,n,s,r,u,a,t);if(i){i=r.fallback,s=n.mode,a=e.child,u=a.sibling;var d={mode:"hidden",children:r.children};return(s&1)===0&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=Xn(a,d),r.subtreeFlags=a.subtreeFlags&14680064),u!==null?i=Xn(u,i):(i=mt(i,s,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,s=e.child.memoizedState,s=s===null?ys(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~t,n.memoizedState=hs,r}return i=e.child,e=i.sibling,r=Xn(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function vs(e,n){return n=Fa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Aa(e,n,t,r){return r!==null&&Wi(r),Tt(n,e.child,null,t),e=vs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qd(e,n,t,r,a,i,s){if(t)return n.flags&256?(n.flags&=-257,r=ps(Error(c(422))),Aa(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=Fa({mode:"visible",children:r.children},a,0,null),i=mt(i,a,s,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&Tt(n,e.child,null,s),n.child.memoizedState=ys(s),n.memoizedState=hs,i);if((n.mode&1)===0)return Aa(e,n,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(c(419)),r=ps(i,r,void 0),Aa(e,n,s,r)}if(u=(s&e.childLanes)!==0,He||u){if(r=Se,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|s))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Pn(e,a),fn(r,e,a,-1))}return Ms(),r=ps(Error(c(421))),Aa(e,n,s,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=op.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,Je=Gn(a.nextSibling),Ke=n,oe=!0,dn=null,e!==null&&(nn[tn++]=Cn,nn[tn++]=En,nn[tn++]=at,Cn=e.id,En=e.overflow,at=n),n=vs(n,r.children),n.flags|=4096,n)}function vu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yi(e.return,n,t)}function _s(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function _u(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Le(e,n,r.children,t),r=le.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vu(e,t,n);else if(e.tag===19)vu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(le,r),(n.mode&1)===0)n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&ya(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),_s(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&ya(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}_s(n,!0,t,null,i);break;case"together":_s(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Sa(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ut|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Xn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Xn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Yd(e,n,t){switch(n.tag){case 3:fu(n),jt();break;case 5:Nl(n);break;case 1:Ge(n.type)&&oa(n);break;case 4:Xi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;re(ma,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(re(le,le.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?yu(e,n,t):(re(le,le.current&1),e=jn(e,n,t),e!==null?e.sibling:null);re(le,le.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return _u(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),re(le,le.current),r)break;return null;case 22:case 23:return n.lanes=0,pu(e,n,t)}return jn(e,n,t)}var wu,ws,ku,xu;wu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ws=function(){},ku=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,ot(wn.current);var i=null;switch(t){case"input":a=Ya(e,a),r=Ya(e,r),i=[];break;case"select":a=I({},a,{value:void 0}),r=I({},r,{value:void 0}),i=[];break;case"textarea":a=Xa(e,a),r=Xa(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=aa)}ei(t,r);var s;t=null;for(y in a)if(!r.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var u=a[y];for(s in u)u.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(_.hasOwnProperty(y)?i||(i=[]):(i=i||[]).push(y,null));for(y in r){var d=r[y];if(u=a!=null?a[y]:void 0,r.hasOwnProperty(y)&&d!==u&&(d!=null||u!=null))if(y==="style")if(u){for(s in u)!u.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in d)d.hasOwnProperty(s)&&u[s]!==d[s]&&(t||(t={}),t[s]=d[s])}else t||(i||(i=[]),i.push(y,t)),t=d;else y==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(i=i||[]).push(y,d)):y==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(y,""+d):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(_.hasOwnProperty(y)?(d!=null&&y==="onScroll"&&ae("scroll",e),i||u===d||(i=[])):(i=i||[]).push(y,d))}t&&(i=i||[]).push("style",t);var y=i;(n.updateQueue=y)&&(n.flags|=4)}},xu=function(e,n,t,r){t!==r&&(n.flags|=4)};function _r(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Kd(e,n,t){var r=n.pendingProps;switch(Hi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Ge(n.type)&&sa(),Re(n),null;case 3:return r=n.stateNode,Mt(),ie(qe),ie(je),ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(da(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dn!==null&&(Ts(dn),dn=null))),ws(e,n),Re(n),null;case 5:Zi(n);var a=ot(gr.current);if(t=n.type,e!==null&&n.stateNode!=null)ku(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(c(166));return Re(n),null}if(e=ot(wn.current),da(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[_n]=n,r[ur]=i,e=(n.mode&1)!==0,t){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(a=0;a<sr.length;a++)ae(sr[a],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":no(r,i),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ae("invalid",r);break;case"textarea":ao(r,i),ae("invalid",r)}ei(t,i),a=null;for(var s in i)if(i.hasOwnProperty(s)){var u=i[s];s==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&ra(r.textContent,u,e),a=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&ra(r.textContent,u,e),a=["children",""+u]):_.hasOwnProperty(s)&&u!=null&&s==="onScroll"&&ae("scroll",r)}switch(t){case"input":Mr(r),ro(r,i,!0);break;case"textarea":Mr(r),so(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=aa)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=oo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[_n]=n,e[ur]=r,wu(e,n,!1,!1),n.stateNode=e;e:{switch(s=ni(t,r),t){case"dialog":ae("cancel",e),ae("close",e),a=r;break;case"iframe":case"object":case"embed":ae("load",e),a=r;break;case"video":case"audio":for(a=0;a<sr.length;a++)ae(sr[a],e);a=r;break;case"source":ae("error",e),a=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),a=r;break;case"details":ae("toggle",e),a=r;break;case"input":no(e,r),a=Ya(e,r),ae("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=I({},r,{value:void 0}),ae("invalid",e);break;case"textarea":ao(e,r),a=Xa(e,r),ae("invalid",e);break;default:a=r}ei(t,a),u=a;for(i in u)if(u.hasOwnProperty(i)){var d=u[i];i==="style"?co(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&lo(e,d)):i==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Gt(e,d):typeof d=="number"&&Gt(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ae("scroll",e):d!=null&&Fe(e,i,d,s))}switch(t){case"input":Mr(e),ro(e,r,!1);break;case"textarea":Mr(e),so(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ee(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ft(e,!!r.multiple,i,!1):r.defaultValue!=null&&ft(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=aa)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Re(n),null;case 6:if(e&&n.stateNode!=null)xu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(t=ot(gr.current),ot(wn.current),da(n)){if(r=n.stateNode,t=n.memoizedProps,r[_n]=n,(i=r.nodeValue!==t)&&(e=Ke,e!==null))switch(e.tag){case 3:ra(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ra(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[_n]=n,n.stateNode=r}return Re(n),null;case 13:if(ie(le),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Je!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Sl(),jt(),n.flags|=98560,i=!1;else if(i=da(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[_n]=n}else jt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),i=!1}else dn!==null&&(Ts(dn),dn=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(le.current&1)!==0?_e===0&&(_e=3):Ms())),n.updateQueue!==null&&(n.flags|=4),Re(n),null);case 4:return Mt(),ws(e,n),e===null&&or(n.stateNode.containerInfo),Re(n),null;case 10:return Qi(n.type._context),Re(n),null;case 17:return Ge(n.type)&&sa(),Re(n),null;case 19:if(ie(le),i=n.memoizedState,i===null)return Re(n),null;if(r=(n.flags&128)!==0,s=i.rendering,s===null)if(r)_r(i,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=ya(e),s!==null){for(n.flags|=128,_r(i,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return re(le,le.current&1|2),n.child}e=e.sibling}i.tail!==null&&me()>zt&&(n.flags|=128,r=!0,_r(i,!1),n.lanes=4194304)}else{if(!r)if(e=ya(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),_r(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!oe)return Re(n),null}else 2*me()-i.renderingStartTime>zt&&t!==1073741824&&(n.flags|=128,r=!0,_r(i,!1),n.lanes=4194304);i.isBackwards?(s.sibling=n.child,n.child=s):(t=i.last,t!==null?t.sibling=s:n.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=me(),n.sibling=null,t=le.current,re(le,r?t&1|2:t&1),n):(Re(n),null);case 22:case 23:return Ns(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Xe&1073741824)!==0&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),null;case 24:return null;case 25:return null}throw Error(c(156,n.tag))}function Jd(e,n){switch(Hi(n),n.tag){case 1:return Ge(n.type)&&sa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Mt(),ie(qe),ie(je),ns(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Zi(n),null;case 13:if(ie(le),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(le),null;case 4:return Mt(),null;case 10:return Qi(n.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var Ca=!1,Ne=!1,Xd=typeof WeakSet=="function"?WeakSet:Set,P=null;function Dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){de(e,n,r)}else t.current=null}function ks(e,n,t){try{t()}catch(r){de(e,n,r)}}var bu=!1;function Zd(e,n){if(Ni=Vr,e=nl(),Si(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,u=-1,d=-1,y=0,x=0,b=e,w=null;n:for(;;){for(var E;b!==t||a!==0&&b.nodeType!==3||(u=s+a),b!==i||r!==0&&b.nodeType!==3||(d=s+r),b.nodeType===3&&(s+=b.nodeValue.length),(E=b.firstChild)!==null;)w=b,b=E;for(;;){if(b===e)break n;if(w===t&&++y===a&&(u=s),w===i&&++x===r&&(d=s),(E=b.nextSibling)!==null)break;b=w,w=b.parentNode}b=E}t=u===-1||d===-1?null:{start:u,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mi={focusedElem:e,selectionRange:t},Vr=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var R=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,ge=R.memoizedState,f=n.stateNode,p=f.getSnapshotBeforeUpdate(n.elementType===n.type?N:pn(n.type,N),ge);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(S){de(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return R=bu,bu=!1,R}function wr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&ks(n,t,i)}a=a.next}while(a!==r)}}function Ea(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function xs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Au(e){var n=e.alternate;n!==null&&(e.alternate=null,Au(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[_n],delete n[ur],delete n[zi],delete n[Ld],delete n[Dd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Su(e){return e.tag===5||e.tag===3||e.tag===4}function Cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=aa));else if(r!==4&&(e=e.child,e!==null))for(bs(e,n,t),e=e.sibling;e!==null;)bs(e,n,t),e=e.sibling}function As(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(As(e,n,t),e=e.sibling;e!==null;)As(e,n,t),e=e.sibling}var Ee=null,mn=!1;function $n(e,n,t){for(t=t.child;t!==null;)Eu(e,n,t),t=t.sibling}function Eu(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(qr,t)}catch{}switch(t.tag){case 5:Ne||Dt(t,n);case 6:var r=Ee,a=mn;Ee=null,$n(e,n,t),Ee=r,mn=a,Ee!==null&&(mn?(e=Ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ee.removeChild(t.stateNode));break;case 18:Ee!==null&&(mn?(e=Ee,t=t.stateNode,e.nodeType===8?Fi(e.parentNode,t):e.nodeType===1&&Fi(e,t),Xt(e)):Fi(Ee,t.stateNode));break;case 4:r=Ee,a=mn,Ee=t.stateNode.containerInfo,mn=!0,$n(e,n,t),Ee=r,mn=a;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&ks(t,n,s),a=a.next}while(a!==r)}$n(e,n,t);break;case 1:if(!Ne&&(Dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){de(t,n,u)}$n(e,n,t);break;case 21:$n(e,n,t);break;case 22:t.mode&1?(Ne=(r=Ne)||t.memoizedState!==null,$n(e,n,t),Ne=r):$n(e,n,t);break;default:$n(e,n,t)}}function Pu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Xd),n.forEach(function(r){var a=lp.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function gn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,s=n,u=s;e:for(;u!==null;){switch(u.tag){case 5:Ee=u.stateNode,mn=!1;break e;case 3:Ee=u.stateNode.containerInfo,mn=!0;break e;case 4:Ee=u.stateNode.containerInfo,mn=!0;break e}u=u.return}if(Ee===null)throw Error(c(160));Eu(i,s,a),Ee=null,mn=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(y){de(a,n,y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Iu(n,e),n=n.sibling}function Iu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gn(n,e),xn(e),r&4){try{wr(3,e,e.return),Ea(3,e)}catch(N){de(e,e.return,N)}try{wr(5,e,e.return)}catch(N){de(e,e.return,N)}}break;case 1:gn(n,e),xn(e),r&512&&t!==null&&Dt(t,t.return);break;case 5:if(gn(n,e),xn(e),r&512&&t!==null&&Dt(t,t.return),e.flags&32){var a=e.stateNode;try{Gt(a,"")}catch(N){de(e,e.return,N)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,s=t!==null?t.memoizedProps:i,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&to(a,i),ni(u,s);var y=ni(u,i);for(s=0;s<d.length;s+=2){var x=d[s],b=d[s+1];x==="style"?co(a,b):x==="dangerouslySetInnerHTML"?lo(a,b):x==="children"?Gt(a,b):Fe(a,x,b,y)}switch(u){case"input":Ka(a,i);break;case"textarea":io(a,i);break;case"select":var w=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?ft(a,!!i.multiple,E,!1):w!==!!i.multiple&&(i.defaultValue!=null?ft(a,!!i.multiple,i.defaultValue,!0):ft(a,!!i.multiple,i.multiple?[]:"",!1))}a[ur]=i}catch(N){de(e,e.return,N)}}break;case 6:if(gn(n,e),xn(e),r&4){if(e.stateNode===null)throw Error(c(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(N){de(e,e.return,N)}}break;case 3:if(gn(n,e),xn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Xt(n.containerInfo)}catch(N){de(e,e.return,N)}break;case 4:gn(n,e),xn(e);break;case 13:gn(n,e),xn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Es=me())),r&4&&Pu(e);break;case 22:if(x=t!==null&&t.memoizedState!==null,e.mode&1?(Ne=(y=Ne)||x,gn(n,e),Ne=y):gn(n,e),xn(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!x&&(e.mode&1)!==0)for(P=e,x=e.child;x!==null;){for(b=P=x;P!==null;){switch(w=P,E=w.child,w.tag){case 0:case 11:case 14:case 15:wr(4,w,w.return);break;case 1:Dt(w,w.return);var R=w.stateNode;if(typeof R.componentWillUnmount=="function"){r=w,t=w.return;try{n=r,R.props=n.memoizedProps,R.state=n.memoizedState,R.componentWillUnmount()}catch(N){de(r,t,N)}}break;case 5:Dt(w,w.return);break;case 22:if(w.memoizedState!==null){Ru(b);continue}}E!==null?(E.return=w,P=E):Ru(b)}x=x.sibling}e:for(x=null,b=e;;){if(b.tag===5){if(x===null){x=b;try{a=b.stateNode,y?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=b.stateNode,d=b.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=uo("display",s))}catch(N){de(e,e.return,N)}}}else if(b.tag===6){if(x===null)try{b.stateNode.nodeValue=y?"":b.memoizedProps}catch(N){de(e,e.return,N)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;x===b&&(x=null),b=b.return}x===b&&(x=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:gn(n,e),xn(e),r&4&&Pu(e);break;case 21:break;default:gn(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Su(t)){var r=t;break e}t=t.return}throw Error(c(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Gt(a,""),r.flags&=-33);var i=Cu(e);As(e,i,a);break;case 3:case 4:var s=r.stateNode.containerInfo,u=Cu(e);bs(e,u,s);break;default:throw Error(c(161))}}catch(d){de(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ep(e,n,t){P=e,ju(e)}function ju(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||Ca;if(!s){var u=a.alternate,d=u!==null&&u.memoizedState!==null||Ne;u=Ca;var y=Ne;if(Ca=s,(Ne=d)&&!y)for(P=a;P!==null;)s=P,d=s.child,s.tag===22&&s.memoizedState!==null?Nu(a):d!==null?(d.return=s,P=d):Nu(a);for(;i!==null;)P=i,ju(i),i=i.sibling;P=a,Ca=u,Ne=y}Tu(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,P=i):Tu(e)}}function Tu(e){for(;P!==null;){var n=P;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ne||Ea(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ne)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:pn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Rl(n,i,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Rl(n,s,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var y=n.alternate;if(y!==null){var x=y.memoizedState;if(x!==null){var b=x.dehydrated;b!==null&&Xt(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ne||n.flags&512&&xs(n)}catch(w){de(n,n.return,w)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function Ru(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function Nu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ea(4,n)}catch(d){de(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(d){de(n,a,d)}}var i=n.return;try{xs(n)}catch(d){de(n,i,d)}break;case 5:var s=n.return;try{xs(n)}catch(d){de(n,s,d)}}}catch(d){de(n,n.return,d)}if(n===e){P=null;break}var u=n.sibling;if(u!==null){u.return=n.return,P=u;break}P=n.return}}var np=Math.ceil,Pa=pe.ReactCurrentDispatcher,Ss=pe.ReactCurrentOwner,sn=pe.ReactCurrentBatchConfig,V=0,Se=null,he=null,Pe=0,Xe=0,Ft=Hn(0),_e=0,kr=null,ut=0,Ia=0,Cs=0,xr=null,Ue=null,Es=0,zt=1/0,Tn=null,ja=!1,Ps=null,Qn=null,Ta=!1,Yn=null,Ra=0,br=0,Is=null,Na=-1,Ma=0;function De(){return(V&6)!==0?me():Na!==-1?Na:Na=me()}function Kn(e){return(e.mode&1)===0?1:(V&2)!==0&&Pe!==0?Pe&-Pe:zd.transition!==null?(Ma===0&&(Ma=Co()),Ma):(e=ne,e!==0||(e=window.event,e=e===void 0?16:Lo(e.type)),e)}function fn(e,n,t,r){if(50<br)throw br=0,Is=null,Error(c(185));$t(e,t,r),((V&2)===0||e!==Se)&&(e===Se&&((V&2)===0&&(Ia|=t),_e===4&&Jn(e,Pe)),Be(e,r),t===1&&V===0&&(n.mode&1)===0&&(zt=me()+500,la&&Bn()))}function Be(e,n){var t=e.callbackNode;zc(e,n);var r=Ur(e,e===Se?Pe:0);if(r===0)t!==null&&bo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&bo(t),n===1)e.tag===0?Fd(Lu.bind(null,e)):wl(Lu.bind(null,e)),Nd(function(){(V&6)===0&&Bn()}),t=null;else{switch(Eo(r)){case 1:t=li;break;case 4:t=Ao;break;case 16:t=Or;break;case 536870912:t=So;break;default:t=Or}t=Uu(t,Mu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Mu(e,n){if(Na=-1,Ma=0,(V&6)!==0)throw Error(c(327));var t=e.callbackNode;if(Ot()&&e.callbackNode!==t)return null;var r=Ur(e,e===Se?Pe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=La(e,r);else{n=r;var a=V;V|=2;var i=Fu();(Se!==e||Pe!==n)&&(Tn=null,zt=me()+500,dt(e,n));do try{ap();break}catch(u){Du(e,u)}while(!0);$i(),Pa.current=i,V=a,he!==null?n=0:(Se=null,Pe=0,n=_e)}if(n!==0){if(n===2&&(a=ui(e),a!==0&&(r=a,n=js(e,a))),n===1)throw t=kr,dt(e,0),Jn(e,r),Be(e,me()),t;if(n===6)Jn(e,r);else{if(a=e.current.alternate,(r&30)===0&&!tp(a)&&(n=La(e,r),n===2&&(i=ui(e),i!==0&&(r=i,n=js(e,i))),n===1))throw t=kr,dt(e,0),Jn(e,r),Be(e,me()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(c(345));case 2:pt(e,Ue,Tn);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=Es+500-me(),10<n)){if(Ur(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Di(pt.bind(null,e,Ue,Tn),n);break}pt(e,Ue,Tn);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var s=31-un(r);i=1<<s,s=n[s],s>a&&(a=s),r&=~i}if(r=a,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,10<r){e.timeoutHandle=Di(pt.bind(null,e,Ue,Tn),r);break}pt(e,Ue,Tn);break;case 5:pt(e,Ue,Tn);break;default:throw Error(c(329))}}}return Be(e,me()),e.callbackNode===t?Mu.bind(null,e):null}function js(e,n){var t=xr;return e.current.memoizedState.isDehydrated&&(dt(e,n).flags|=256),e=La(e,n),e!==2&&(n=Ue,Ue=t,n!==null&&Ts(n)),e}function Ts(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function tp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!cn(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~Cs,n&=~Ia,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-un(n),r=1<<t;e[t]=-1,n&=~r}}function Lu(e){if((V&6)!==0)throw Error(c(327));Ot();var n=Ur(e,0);if((n&1)===0)return Be(e,me()),null;var t=La(e,n);if(e.tag!==0&&t===2){var r=ui(e);r!==0&&(n=r,t=js(e,r))}if(t===1)throw t=kr,dt(e,0),Jn(e,n),Be(e,me()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,pt(e,Ue,Tn),Be(e,me()),null}function Rs(e,n){var t=V;V|=1;try{return e(n)}finally{V=t,V===0&&(zt=me()+500,la&&Bn())}}function ct(e){Yn!==null&&Yn.tag===0&&(V&6)===0&&Ot();var n=V;V|=1;var t=sn.transition,r=ne;try{if(sn.transition=null,ne=1,e)return e()}finally{ne=r,sn.transition=t,V=n,(V&6)===0&&Bn()}}function Ns(){Xe=Ft.current,ie(Ft)}function dt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Rd(t)),he!==null)for(t=he.return;t!==null;){var r=t;switch(Hi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:Mt(),ie(qe),ie(je),ns();break;case 5:Zi(r);break;case 4:Mt();break;case 13:ie(le);break;case 19:ie(le);break;case 10:Qi(r.type._context);break;case 22:case 23:Ns()}t=t.return}if(Se=e,he=e=Xn(e.current,null),Pe=Xe=n,_e=0,kr=null,Cs=Ia=ut=0,Ue=xr=null,st!==null){for(n=0;n<st.length;n++)if(t=st[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var s=i.next;i.next=a,r.next=s}t.pending=r}st=null}return e}function Du(e,n){do{var t=he;try{if($i(),va.current=xa,_a){for(var r=ue.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}_a=!1}if(lt=0,Ae=ve=ue=null,fr=!1,hr=0,Ss.current=null,t===null||t.return===null){_e=1,kr=n,he=null;break}e:{var i=e,s=t.return,u=t,d=n;if(n=Pe,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var y=d,x=u,b=x.tag;if((x.mode&1)===0&&(b===0||b===11||b===15)){var w=x.alternate;w?(x.updateQueue=w.updateQueue,x.memoizedState=w.memoizedState,x.lanes=w.lanes):(x.updateQueue=null,x.memoizedState=null)}var E=ou(s);if(E!==null){E.flags&=-257,lu(E,s,u,i,n),E.mode&1&&su(i,y,n),n=E,d=y;var R=n.updateQueue;if(R===null){var N=new Set;N.add(d),n.updateQueue=N}else R.add(d);break e}else{if((n&1)===0){su(i,y,n),Ms();break e}d=Error(c(426))}}else if(oe&&u.mode&1){var ge=ou(s);if(ge!==null){(ge.flags&65536)===0&&(ge.flags|=256),lu(ge,s,u,i,n),Wi(Lt(d,u));break e}}i=d=Lt(d,u),_e!==4&&(_e=2),xr===null?xr=[i]:xr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=au(i,d,n);Tl(i,f);break e;case 1:u=d;var p=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qn===null||!Qn.has(h)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=iu(i,u,n);Tl(i,S);break e}}i=i.return}while(i!==null)}Ou(t)}catch(M){n=M,he===t&&t!==null&&(he=t=t.return);continue}break}while(!0)}function Fu(){var e=Pa.current;return Pa.current=xa,e===null?xa:e}function Ms(){(_e===0||_e===3||_e===2)&&(_e=4),Se===null||(ut&268435455)===0&&(Ia&268435455)===0||Jn(Se,Pe)}function La(e,n){var t=V;V|=2;var r=Fu();(Se!==e||Pe!==n)&&(Tn=null,dt(e,n));do try{rp();break}catch(a){Du(e,a)}while(!0);if($i(),V=t,Pa.current=r,he!==null)throw Error(c(261));return Se=null,Pe=0,_e}function rp(){for(;he!==null;)zu(he)}function ap(){for(;he!==null&&!Ic();)zu(he)}function zu(e){var n=Hu(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,n===null?Ou(e):he=n,Ss.current=null}function Ou(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Kd(t,n,Xe),t!==null){he=t;return}}else{if(t=Jd(t,n),t!==null){t.flags&=32767,he=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,he=null;return}}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);_e===0&&(_e=5)}function pt(e,n,t){var r=ne,a=sn.transition;try{sn.transition=null,ne=1,ip(e,n,t,r)}finally{sn.transition=a,ne=r}return null}function ip(e,n,t,r){do Ot();while(Yn!==null);if((V&6)!==0)throw Error(c(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Oc(e,i),e===Se&&(he=Se=null,Pe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Ta||(Ta=!0,Uu(Or,function(){return Ot(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=sn.transition,sn.transition=null;var s=ne;ne=1;var u=V;V|=4,Ss.current=null,Zd(e,t),Iu(t,e),Sd(Mi),Vr=!!Ni,Mi=Ni=null,e.current=t,ep(t),jc(),V=u,ne=s,sn.transition=i}else e.current=t;if(Ta&&(Ta=!1,Yn=e,Ra=a),i=e.pendingLanes,i===0&&(Qn=null),Nc(t.stateNode),Be(e,me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(ja)throw ja=!1,e=Ps,Ps=null,e;return(Ra&1)!==0&&e.tag!==0&&Ot(),i=e.pendingLanes,(i&1)!==0?e===Is?br++:(br=0,Is=e):br=0,Bn(),null}function Ot(){if(Yn!==null){var e=Eo(Ra),n=sn.transition,t=ne;try{if(sn.transition=null,ne=16>e?16:e,Yn===null)var r=!1;else{if(e=Yn,Yn=null,Ra=0,(V&6)!==0)throw Error(c(331));var a=V;for(V|=4,P=e.current;P!==null;){var i=P,s=i.child;if((P.flags&16)!==0){var u=i.deletions;if(u!==null){for(var d=0;d<u.length;d++){var y=u[d];for(P=y;P!==null;){var x=P;switch(x.tag){case 0:case 11:case 15:wr(8,x,i)}var b=x.child;if(b!==null)b.return=x,P=b;else for(;P!==null;){x=P;var w=x.sibling,E=x.return;if(Au(x),x===y){P=null;break}if(w!==null){w.return=E,P=w;break}P=E}}}var R=i.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var ge=N.sibling;N.sibling=null,N=ge}while(N!==null)}}P=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,P=s;else e:for(;P!==null;){if(i=P,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:wr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var p=e.current;for(P=p;P!==null;){s=P;var h=s.child;if((s.subtreeFlags&2064)!==0&&h!==null)h.return=s,P=h;else e:for(s=p;P!==null;){if(u=P,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ea(9,u)}}catch(M){de(u,u.return,M)}if(u===s){P=null;break e}var S=u.sibling;if(S!==null){S.return=u.return,P=S;break e}P=u.return}}if(V=a,Bn(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(qr,e)}catch{}r=!0}return r}finally{ne=t,sn.transition=n}}return!1}function qu(e,n,t){n=Lt(t,n),n=au(e,n,1),e=Vn(e,n,1),n=De(),e!==null&&($t(e,1,n),Be(e,n))}function de(e,n,t){if(e.tag===3)qu(e,e,t);else for(;n!==null;){if(n.tag===3){qu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=Lt(t,e),e=iu(n,e,1),n=Vn(n,e,1),e=De(),n!==null&&($t(n,1,e),Be(n,e));break}}n=n.return}}function sp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=De(),e.pingedLanes|=e.suspendedLanes&t,Se===e&&(Pe&t)===t&&(_e===4||_e===3&&(Pe&130023424)===Pe&&500>me()-Es?dt(e,0):Cs|=t),Be(e,n)}function Gu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Hr,Hr<<=1,(Hr&130023424)===0&&(Hr=4194304)));var t=De();e=Pn(e,n),e!==null&&($t(e,n,t),Be(e,t))}function op(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gu(e,t)}function lp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(n),Gu(e,t)}var Hu;Hu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||qe.current)He=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return He=!1,Yd(e,n,t);He=(e.flags&131072)!==0}else He=!1,oe&&(n.flags&1048576)!==0&&kl(n,ca,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Sa(e,n),e=n.pendingProps;var a=Et(n,je.current);Nt(n,t),a=as(null,n,r,e,a,t);var i=is();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ge(r)?(i=!0,oa(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ji(n),a.updater=ba,n.stateNode=a,a._reactInternals=n,ds(n,r,e,t),n=fs(null,n,r,!0,i,t)):(n.tag=0,oe&&i&&Gi(n),Le(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Sa(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=cp(r),e=pn(r,e),a){case 0:n=gs(null,n,r,e,t);break e;case 1:n=gu(null,n,r,e,t);break e;case 11:n=uu(null,n,r,e,t);break e;case 14:n=cu(null,n,r,pn(r.type,e),t);break e}throw Error(c(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:pn(r,a),gs(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:pn(r,a),gu(e,n,r,a,t);case 3:e:{if(fu(n),e===null)throw Error(c(387));r=n.pendingProps,i=n.memoizedState,a=i.element,jl(e,n),ha(n,r,null,t);var s=n.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=Lt(Error(c(423)),n),n=hu(e,n,r,t,a);break e}else if(r!==a){a=Lt(Error(c(424)),n),n=hu(e,n,r,t,a);break e}else for(Je=Gn(n.stateNode.containerInfo.firstChild),Ke=n,oe=!0,dn=null,t=Pl(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jt(),r===a){n=jn(e,n,t);break e}Le(e,n,r,t)}n=n.child}return n;case 5:return Nl(n),e===null&&Bi(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,s=a.children,Li(r,a)?s=null:i!==null&&Li(r,i)&&(n.flags|=32),mu(e,n),Le(e,n,s,t),n.child;case 6:return e===null&&Bi(n),null;case 13:return yu(e,n,t);case 4:return Xi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Tt(n,null,r,t):Le(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:pn(r,a),uu(e,n,r,a,t);case 7:return Le(e,n,n.pendingProps,t),n.child;case 8:return Le(e,n,n.pendingProps.children,t),n.child;case 12:return Le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,s=a.value,re(ma,r._currentValue),r._currentValue=s,i!==null)if(cn(i.value,s)){if(i.children===a.children&&!qe.current){n=jn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){s=i.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=In(-1,t&-t),d.tag=2;var y=i.updateQueue;if(y!==null){y=y.shared;var x=y.pending;x===null?d.next=d:(d.next=x.next,x.next=d),y.pending=d}}i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Yi(i.return,t,n),u.lanes|=t;break}d=d.next}}else if(i.tag===10)s=i.type===n.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Yi(s,t,n),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Le(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Nt(n,t),a=rn(a),r=r(a),n.flags|=1,Le(e,n,r,t),n.child;case 14:return r=n.type,a=pn(r,n.pendingProps),a=pn(r.type,a),cu(e,n,r,a,t);case 15:return du(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:pn(r,a),Sa(e,n),n.tag=1,Ge(r)?(e=!0,oa(n)):e=!1,Nt(n,t),tu(n,r,a),ds(n,r,a,t),fs(null,n,r,!0,e,t);case 19:return _u(e,n,t);case 22:return pu(e,n,t)}throw Error(c(156,n.tag))};function Uu(e,n){return xo(e,n)}function up(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,n,t,r){return new up(e,n,t,r)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cp(e){if(typeof e=="function")return Ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hn)return 11;if(e===yn)return 14}return 2}function Xn(e,n){var t=e.alternate;return t===null?(t=on(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Da(e,n,t,r,a,i){var s=2;if(r=e,typeof e=="function")Ls(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ze:return mt(t.children,a,i,n);case en:s=8,a|=8;break;case Mn:return e=on(12,t,n,a|2),e.elementType=Mn,e.lanes=i,e;case $e:return e=on(13,t,n,a),e.elementType=$e,e.lanes=i,e;case ln:return e=on(19,t,n,a),e.elementType=ln,e.lanes=i,e;case ce:return Fa(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bn:s=10;break e;case et:s=9;break e;case hn:s=11;break e;case yn:s=14;break e;case Oe:s=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return n=on(s,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function mt(e,n,t,r){return e=on(7,e,r,n),e.lanes=t,e}function Fa(e,n,t,r){return e=on(22,e,r,n),e.elementType=ce,e.lanes=t,e.stateNode={isHidden:!1},e}function Ds(e,n,t){return e=on(6,e,null,n),e.lanes=t,e}function Fs(e,n,t){return n=on(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function dp(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ci(0),this.expirationTimes=ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ci(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function zs(e,n,t,r,a,i,s,u,d){return e=new dp(e,n,t,u,d),n===1?(n=1,i===!0&&(n|=8)):n=0,i=on(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ji(i),e}function pp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:be,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bu(e){if(!e)return Un;e=e._reactInternals;e:{if(nt(e)!==e||e.tag!==1)throw Error(c(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(Ge(t))return vl(e,t,n)}return n}function Wu(e,n,t,r,a,i,s,u,d){return e=zs(t,r,!0,e,a,i,s,u,d),e.context=Bu(null),t=e.current,r=De(),a=Kn(t),i=In(r,a),i.callback=n??null,Vn(t,i,a),e.current.lanes=a,$t(e,a,r),Be(e,r),e}function za(e,n,t,r){var a=n.current,i=De(),s=Kn(a);return t=Bu(t),n.context===null?n.context=t:n.pendingContext=t,n=In(i,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Vn(a,n,s),e!==null&&(fn(e,a,s,i),fa(e,a,s)),s}function Oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Os(e,n){Vu(e,n),(e=e.alternate)&&Vu(e,n)}function mp(){return null}var $u=typeof reportError=="function"?reportError:function(e){console.error(e)};function qs(e){this._internalRoot=e}qa.prototype.render=qs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));za(e,n,null,null)},qa.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ct(function(){za(null,e,null,null)}),n[An]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var n=jo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<zn.length&&n!==0&&n<zn[t].priority;t++);zn.splice(t,0,e),t===0&&No(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qu(){}function gp(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var y=Oa(s);i.call(y)}}var s=Wu(n,r,e,0,null,!1,!1,"",Qu);return e._reactRootContainer=s,e[An]=s.current,or(e.nodeType===8?e.parentNode:e),ct(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var u=r;r=function(){var y=Oa(d);u.call(y)}}var d=zs(e,0,!1,null,null,!1,!1,"",Qu);return e._reactRootContainer=d,e[An]=d.current,or(e.nodeType===8?e.parentNode:e),ct(function(){za(n,d,t,r)}),d}function Ha(e,n,t,r,a){var i=t._reactRootContainer;if(i){var s=i;if(typeof a=="function"){var u=a;a=function(){var d=Oa(s);u.call(d)}}za(n,s,e,a)}else s=gp(t,n,e,a,r);return Oa(s)}Po=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Vt(n.pendingLanes);t!==0&&(di(n,t|1),Be(n,me()),(V&6)===0&&(zt=me()+500,Bn()))}break;case 13:ct(function(){var r=Pn(e,1);if(r!==null){var a=De();fn(r,e,1,a)}}),Os(e,1)}},pi=function(e){if(e.tag===13){var n=Pn(e,134217728);if(n!==null){var t=De();fn(n,e,134217728,t)}Os(e,134217728)}},Io=function(e){if(e.tag===13){var n=Kn(e),t=Pn(e,n);if(t!==null){var r=De();fn(t,e,n,r)}Os(e,n)}},jo=function(){return ne},To=function(e,n){var t=ne;try{return ne=e,n()}finally{ne=t}},ai=function(e,n,t){switch(n){case"input":if(Ka(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=ia(r);if(!a)throw Error(c(90));eo(r),Ka(r,a)}}}break;case"textarea":io(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}},fo=Rs,ho=ct;var fp={usingClientEntryPoint:!1,Events:[cr,St,ia,mo,go,Rs]},Ar={findFiberByHostInstance:tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hp={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wo(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{qr=Ua.inject(hp),vn=Ua}catch{}}return We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fp,We.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(n))throw Error(c(200));return pp(e,n,null,t)},We.createRoot=function(e,n){if(!Gs(e))throw Error(c(299));var t=!1,r="",a=$u;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=zs(e,1,!1,null,null,t,!1,r,a),e[An]=n.current,or(e.nodeType===8?e.parentNode:e),new qs(n)},We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=wo(n),e=e===null?null:e.stateNode,e},We.flushSync=function(e){return ct(e)},We.hydrate=function(e,n,t){if(!Ga(n))throw Error(c(200));return Ha(null,e,n,!0,t)},We.hydrateRoot=function(e,n,t){if(!Gs(e))throw Error(c(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",s=$u;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Wu(n,null,e,1,t??null,a,!1,i,s),e[An]=n.current,or(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new qa(n)},We.render=function(e,n,t){if(!Ga(n))throw Error(c(200));return Ha(null,e,n,!1,t)},We.unmountComponentAtNode=function(e){if(!Ga(e))throw Error(c(40));return e._reactRootContainer?(ct(function(){Ha(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1},We.unstable_batchedUpdates=Rs,We.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ga(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ha(e,n,t,!1,r)},We.version="18.3.1-next-f1338f8080-20240426",We}var tc;function Sp(){if(tc)return Bs.exports;tc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(m){console.error(m)}}return l(),Bs.exports=Ap(),Bs.exports}var rc;function Cp(){if(rc)return Ba;rc=1;var l=Sp();return Ba.createRoot=l.createRoot,Ba.hydrateRoot=l.hydrateRoot,Ba}var Ep=Cp();const Pp=lc(Ep);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uc=(...l)=>l.filter((m,c,v)=>!!m&&m.trim()!==""&&v.indexOf(m)===c).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=ye.forwardRef(({color:l="currentColor",size:m=24,strokeWidth:c=2,absoluteStrokeWidth:v,className:_="",children:A,iconNode:j,...q},T)=>ye.createElement("svg",{ref:T,...jp,width:m,height:m,stroke:l,strokeWidth:v?Number(c)*24/Number(m):c,className:uc("lucide",_),...q},[...j.map(([L,Z])=>ye.createElement(L,Z)),...Array.isArray(A)?A:[A]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(l,m)=>{const c=ye.forwardRef(({className:v,..._},A)=>ye.createElement(Tp,{ref:A,iconNode:m,className:uc(`lucide-${Ip(l)}`,v),..._}));return c.displayName=`${l}`,c};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=we("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=we("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=we("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=we("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=we("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=we("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=we("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=we("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=we("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=we("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=we("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=we("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=we("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=we("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=we("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=we("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=we("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=we("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=we("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Gp=`# Web Research Agent\r
\r
A LangGraph agent that searches the web for any topic and synthesizes a structured research report.\r
\r
**Framework**: LangGraph  \r
**LLM**: GPT-4o-mini (OpenAI)  \r
**Search**: Tavily\r
\r
## What it does\r
\r
1. Takes a research query\r
2. Searches the web using Tavily (5 results)\r
3. Synthesizes findings into a structured report (Summary, Key Findings, Sources)\r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
# Edit .env and add your API keys\r
\`\`\`\r
\r
Get free API keys:\r
- OpenAI: https://platform.openai.com/api-keys\r
- Tavily: https://app.tavily.com (free tier available)\r
\r
## Run\r
\r
\`\`\`bash\r
# Default query\r
python agent.py\r
\r
# Custom query\r
python agent.py --query "latest advances in quantum computing"\r
\`\`\`\r
\r
## Sample Output\r
\r
\`\`\`\r
🔍 Researching: latest advances in AI agents 2024\r
\r
============================================================\r
📄 RESEARCH REPORT\r
============================================================\r
## Summary\r
AI agents have seen significant advances in 2024, with major improvements\r
in reasoning, tool use, and multi-agent collaboration...\r
\r
## Key Findings\r
- LangGraph and CrewAI have emerged as leading frameworks for production agents\r
- OpenAI's GPT-4o enables real-time multimodal agent interactions\r
- ...\r
\r
## Sources\r
- https://...\r
\`\`\`\r
\r
## Architecture\r
\r
\`\`\`\r
User Query → [Search Node] → Tavily Web Search → [Synthesize Node] → GPT-4o → Report\r
\`\`\`\r
`,Hp=`"""\r
Web Research Agent using LangGraph + Tavily Search.\r
\r
Searches the web for a given topic, synthesizes findings, and returns\r
a structured research report.\r
\r
Usage:\r
    python agent.py\r
    python agent.py --query "latest advances in quantum computing"\r
"""\r
\r
import argparse\r
import os\r
from typing import Annotated, TypedDict\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
from langchain_tavily import TavilySearch\r
from langgraph.graph import END, StateGraph\r
from langgraph.graph.message import add_messages\r
\r
load_dotenv()\r
\r
\r
class ResearchState(TypedDict):\r
    messages: Annotated[list, add_messages]\r
    query: str\r
    search_results: list[dict]\r
    report: str\r
\r
\r
def search_web(state: ResearchState) -> ResearchState:\r
    tool = TavilySearch(max_results=5)\r
    raw_results = tool.invoke(state["query"])\r
    if isinstance(raw_results, dict):\r
        results = raw_results.get("results", [])\r
    elif isinstance(raw_results, list):\r
        results = raw_results\r
    else:\r
        results = []\r
    return {"search_results": results}\r
\r
\r
def synthesize_report(state: ResearchState) -> ResearchState:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
\r
    results_text = "\\n\\n".join(\r
        f"Source: {r.get('url', 'N/A')}\\nTitle: {r.get('title', 'N/A')}\\nContent: {r.get('content', '')[:500]}"\r
        for r in state["search_results"]\r
    )\r
\r
    messages = [\r
        SystemMessage(content="You are a research analyst. Synthesize the search results into a clear, structured report with: Summary, Key Findings (bullet points), and Sources."),\r
        HumanMessage(content=f"Research query: {state['query']}\\n\\nSearch results:\\n{results_text}"),\r
    ]\r
\r
    response = llm.invoke(messages)\r
    return {"report": response.content, "messages": [response]}\r
\r
\r
def build_graph() -> StateGraph:\r
    graph = StateGraph(ResearchState)\r
    graph.add_node("search", search_web)\r
    graph.add_node("synthesize", synthesize_report)\r
    graph.set_entry_point("search")\r
    graph.add_edge("search", "synthesize")\r
    graph.add_edge("synthesize", END)\r
    return graph.compile()\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Web Research Agent")\r
    parser.add_argument("--query", default="latest advances in AI agents 2024", help="Research query")\r
    args = parser.parse_args()\r
\r
    print(f"\\n🔍 Researching: {args.query}\\n")\r
\r
    agent = build_graph()\r
    result = agent.invoke({"query": args.query, "messages": [], "search_results": [], "report": ""})\r
\r
    print("=" * 60)\r
    print("📄 RESEARCH REPORT")\r
    print("=" * 60)\r
    print(result["report"])\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Up=`title: web-research-agent\r
description: Searches the web for a topic and synthesizes a structured research report\r
author: ashishpatel26\r
language: python\r
framework: langgraph\r
tags: [research, web-search, rag, langgraph]\r
industry: general\r
difficulty: intermediate\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,Bp=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
langchain-tavily==0.1.0\r
langgraph==0.2.0\r
python-dotenv==1.0.1\r
`,Wp=`# Code Review Agent\r
\r
An AI agent that reviews code for bugs, security issues, performance problems, and style violations.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Review a file\r
python agent.py --file path/to/your/code.py\r
\r
# Review inline code\r
python agent.py --code "def divide(a, b): return a / b"\r
\r
# Review non-Python code\r
python agent.py --file app.js --language javascript\r
\`\`\`\r
\r
## Sample Output\r
\r
\`\`\`\r
🔍 Reviewing: example.py\r
\r
============================================================\r
📋 CODE REVIEW\r
============================================================\r
## Overall: 🟡 Needs Work\r
\r
### 1. Bugs & Correctness\r
- \`divide(a, b)\` has no zero-division check → \`ZeroDivisionError\` on \`b=0\`\r
\r
### 2. Security Issues\r
- No input validation on external parameters\r
\r
### 3. Improvements\r
- Add type hints: \`def divide(a: float, b: float) -> float\`\r
- Raise \`ValueError\` for \`b == 0\` with descriptive message\r
\`\`\`\r
`,Vp=`"""\r
Code Review Agent using LangChain.\r
\r
Reviews Python code for bugs, security issues, style violations, and\r
suggests improvements. Accepts a file path or inline code snippet.\r
\r
Usage:\r
    python agent.py --file path/to/code.py\r
    python agent.py --code "def add(a,b): return a+b"\r
"""\r
\r
import argparse\r
import os\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
SYSTEM_PROMPT = """You are an expert code reviewer. Analyze the provided code and return a structured review covering:\r
\r
1. **Bugs & Correctness** — logic errors, edge cases, exception handling\r
2. **Security Issues** — injection risks, secrets exposure, unsafe operations\r
3. **Performance** — inefficiencies, unnecessary computation, memory issues\r
4. **Code Style** — PEP 8 violations, naming conventions, readability\r
5. **Improvements** — refactoring suggestions, better patterns\r
\r
Format: Use markdown. Rate overall quality as: 🟢 Good / 🟡 Needs Work / 🔴 Critical Issues."""\r
\r
\r
def review_code(code: str, language: str = "python") -> str:\r
    llm = ChatOpenAI(model="gpt-4o", temperature=0)\r
    messages = [\r
        SystemMessage(content=SYSTEM_PROMPT),\r
        HumanMessage(content=f"Review this {language} code:\\n\\n\`\`\`{language}\\n{code}\\n\`\`\`"),\r
    ]\r
    response = llm.invoke(messages)\r
    return response.content\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Code Review Agent")\r
    group = parser.add_mutually_exclusive_group(required=True)\r
    group.add_argument("--file", help="Path to file to review")\r
    group.add_argument("--code", help="Inline code snippet to review")\r
    parser.add_argument("--language", default="python", help="Programming language (default: python)")\r
    args = parser.parse_args()\r
\r
    if args.file:\r
        with open(args.file) as f:\r
            code = f.read()\r
        print(f"\\n🔍 Reviewing: {args.file}\\n")\r
    else:\r
        code = args.code\r
        print(f"\\n🔍 Reviewing inline code snippet\\n")\r
\r
    review = review_code(code, args.language)\r
\r
    print("=" * 60)\r
    print("📋 CODE REVIEW")\r
    print("=" * 60)\r
    print(review)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,$p=`title: code-review-agent\r
description: Reviews code for bugs, security issues, performance, and style violations\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [code-review, software-development, security, quality]\r
industry: software-development\r
difficulty: beginner\r
llm: gpt-4o\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,Qp=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,Yp=`# PDF Q&A Agent\r
\r
Loads any PDF and lets you ask questions about it. Supports both single-question and interactive chat modes.\r
\r
**Framework**: LlamaIndex  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Interactive Q&A (recommended)\r
python agent.py --pdf your_document.pdf\r
\r
# Single question\r
python agent.py --pdf research_paper.pdf --question "What methodology was used?"\r
\`\`\`\r
\r
## Use cases\r
\r
- Research paper analysis\r
- Contract review\r
- Financial report Q&A\r
- Technical documentation chat\r
`,Kp=`"""\r
PDF Q&A Agent using LlamaIndex.\r
\r
Loads a PDF, indexes it, and answers questions about its content.\r
Maintains conversation history for follow-up questions.\r
\r
Usage:\r
    python agent.py --pdf path/to/document.pdf\r
    python agent.py --pdf report.pdf --question "What is the main finding?"\r
"""\r
\r
import argparse\r
import os\r
\r
from dotenv import load_dotenv\r
from llama_index.core import SimpleDirectoryReader, VectorStoreIndex\r
from llama_index.core.memory import ChatMemoryBuffer\r
from llama_index.llms.openai import OpenAI\r
\r
load_dotenv()\r
\r
\r
def build_index(pdf_path: str) -> VectorStoreIndex:\r
    print(f"📄 Loading and indexing {pdf_path}...")\r
    reader = SimpleDirectoryReader(input_files=[pdf_path])\r
    docs = reader.load_data()\r
    index = VectorStoreIndex.from_documents(docs)\r
    print(f"✅ Indexed {len(docs)} document chunk(s)")\r
    return index\r
\r
\r
def interactive_qa(index: VectorStoreIndex):\r
    llm = OpenAI(model="gpt-4o-mini", temperature=0)\r
    memory = ChatMemoryBuffer.from_defaults(token_limit=4096)\r
    chat_engine = index.as_chat_engine(\r
        chat_mode="context",\r
        llm=llm,\r
        memory=memory,\r
        verbose=False,\r
    )\r
\r
    print("\\n💬 PDF Q&A Agent ready. Type 'quit' to exit.\\n")\r
    while True:\r
        question = input("You: ").strip()\r
        if question.lower() in ("quit", "exit", "q"):\r
            break\r
        if not question:\r
            continue\r
        response = chat_engine.chat(question)\r
        print(f"\\nAgent: {response.response}\\n")\r
\r
\r
def single_question(index: VectorStoreIndex, question: str):\r
    query_engine = index.as_query_engine(similarity_top_k=5)\r
    response = query_engine.query(question)\r
    print("\\n" + "=" * 60)\r
    print("📋 ANSWER")\r
    print("=" * 60)\r
    print(response.response)\r
    if hasattr(response, "source_nodes"):\r
        print(f"\\n📚 Sources: {len(response.source_nodes)} chunk(s) referenced")\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="PDF Q&A Agent")\r
    parser.add_argument("--pdf", required=True, help="Path to PDF file")\r
    parser.add_argument("--question", help="Single question (omit for interactive mode)")\r
    args = parser.parse_args()\r
\r
    index = build_index(args.pdf)\r
\r
    if args.question:\r
        single_question(index, args.question)\r
    else:\r
        interactive_qa(index)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Jp=`title: pdf-qa-agent\r
description: Loads a PDF and answers questions about its content with conversation history\r
author: ashishpatel26\r
language: python\r
framework: llamaindex\r
tags: [pdf, rag, qa, document-analysis, llamaindex]\r
industry: research\r
difficulty: beginner\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,Xp=`llama-index==0.11.0\r
llama-index-llms-openai==0.3.0\r
llama-index-embeddings-openai==0.3.0\r
python-dotenv==1.0.1\r
`,Zp=`# SQL Query Agent\r
\r
Connects to any SQLite database and answers natural language questions by generating and executing SQL.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Demo mode — creates a sample e-commerce database automatically\r
python agent.py\r
\r
# Your own database\r
python agent.py --db path/to/your/database.sqlite\r
\r
# Single question\r
python agent.py --question "What is the total revenue by country?"\r
\`\`\`\r
\r
Databases open in read-only mode by default. Use \`--allow-write\` only with a disposable database\r
if you intentionally want the generated SQL agent to be able to mutate data.\r
\r
## Example Questions\r
\r
- "How many customers do we have in each country?"\r
- "What are the top 3 best-selling products?"\r
- "What was the total revenue last month?"\r
- "Which customer has spent the most?"\r
\r
## Architecture\r
\r
\`\`\`\r
Natural Language → LLM (generates SQL) → SQLite → LLM (formats answer) → Response\r
\`\`\`\r
`,em=`"""\r
SQL Query Agent using LangChain.\r
\r
Connects to a SQLite database and answers natural language questions\r
by generating and executing SQL queries.\r
\r
Usage:\r
    python agent.py                          # uses demo database\r
    python agent.py --db path/to/db.sqlite   # your database\r
    python agent.py --db mydb.sqlite --question "How many users signed up last month?"\r
"""\r
\r
import argparse\r
import os\r
import sqlite3\r
from urllib.parse import quote\r
\r
from dotenv import load_dotenv\r
from langchain_community.utilities import SQLDatabase\r
from langchain_openai import ChatOpenAI\r
from langchain.agents import create_sql_agent\r
from langchain.agents.agent_toolkits import SQLDatabaseToolkit\r
from langchain.agents.agent_types import AgentType\r
\r
load_dotenv()\r
\r
\r
def create_demo_database(db_path: str):\r
    """Creates a demo e-commerce SQLite database for testing."""\r
    conn = sqlite3.connect(db_path)\r
    cur = conn.cursor()\r
    cur.executescript("""\r
        CREATE TABLE IF NOT EXISTS customers (\r
            id INTEGER PRIMARY KEY,\r
            name TEXT NOT NULL,\r
            email TEXT UNIQUE,\r
            country TEXT,\r
            created_at DATE DEFAULT CURRENT_DATE\r
        );\r
        CREATE TABLE IF NOT EXISTS products (\r
            id INTEGER PRIMARY KEY,\r
            name TEXT NOT NULL,\r
            category TEXT,\r
            price REAL NOT NULL,\r
            stock INTEGER DEFAULT 0\r
        );\r
        CREATE TABLE IF NOT EXISTS orders (\r
            id INTEGER PRIMARY KEY,\r
            customer_id INTEGER REFERENCES customers(id),\r
            product_id INTEGER REFERENCES products(id),\r
            quantity INTEGER NOT NULL,\r
            total REAL NOT NULL,\r
            order_date DATE DEFAULT CURRENT_DATE\r
        );\r
        INSERT OR IGNORE INTO customers VALUES\r
            (1,'Alice Johnson','alice@example.com','USA','2024-01-15'),\r
            (2,'Bob Smith','bob@example.com','UK','2024-02-20'),\r
            (3,'Carlos Lima','carlos@example.com','Brazil','2024-03-10'),\r
            (4,'Diana Prince','diana@example.com','USA','2024-01-05');\r
        INSERT OR IGNORE INTO products VALUES\r
            (1,'Laptop Pro','Electronics',1299.99,45),\r
            (2,'Wireless Mouse','Electronics',29.99,200),\r
            (3,'Python Book','Books',49.99,120),\r
            (4,'Standing Desk','Furniture',599.99,15);\r
        INSERT OR IGNORE INTO orders VALUES\r
            (1,1,1,1,1299.99,'2024-04-01'),\r
            (2,1,2,2,59.98,'2024-04-01'),\r
            (3,2,3,1,49.99,'2024-04-05'),\r
            (4,3,4,1,599.99,'2024-04-10'),\r
            (5,4,1,1,1299.99,'2024-04-12'),\r
            (6,2,2,3,89.97,'2024-04-15');\r
    """)\r
    conn.commit()\r
    conn.close()\r
\r
\r
def sqlite_uri(db_path: str, read_only: bool = True) -> str:\r
    abs_path = os.path.abspath(db_path)\r
    if read_only:\r
        return f"sqlite:///file:{quote(abs_path)}?mode=ro&uri=true"\r
    return f"sqlite:///{abs_path}"\r
\r
\r
def build_agent(db_path: str, read_only: bool = True):\r
    db = SQLDatabase.from_uri(sqlite_uri(db_path, read_only=read_only))\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
    toolkit = SQLDatabaseToolkit(db=db, llm=llm)\r
    agent = create_sql_agent(\r
        llm=llm,\r
        toolkit=toolkit,\r
        agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,\r
        verbose=False,\r
    )\r
    return agent, db\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="SQL Query Agent")\r
    parser.add_argument("--db", default="demo.sqlite", help="SQLite database path")\r
    parser.add_argument("--question", help="Natural language question (omit for interactive)")\r
    parser.add_argument("--allow-write", action="store_true", help="Open the SQLite database read-write instead of read-only")\r
    args = parser.parse_args()\r
\r
    if args.db == "demo.sqlite" and not os.path.exists("demo.sqlite"):\r
        print("🏗️  Creating demo e-commerce database...")\r
        create_demo_database("demo.sqlite")\r
\r
    agent, db = build_agent(args.db, read_only=not args.allow_write)\r
    print(f"\\n📊 Connected to: {args.db}")\r
    print(f"🔒 Mode: {'read-write' if args.allow_write else 'read-only'}")\r
    print(f"📋 Tables: {', '.join(db.get_table_names())}\\n")\r
\r
    if args.question:\r
        print(f"❓ Question: {args.question}")\r
        result = agent.invoke({"input": args.question})\r
        print(f"\\n✅ Answer: {result['output']}")\r
    else:\r
        print("💬 SQL Agent ready. Ask questions in natural language. Type 'quit' to exit.\\n")\r
        while True:\r
            question = input("You: ").strip()\r
            if question.lower() in ("quit", "exit", "q"):\r
                break\r
            if not question:\r
                continue\r
            result = agent.invoke({"input": question})\r
            print(f"\\nAgent: {result['output']}\\n")\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,nm=`title: sql-query-agent\r
description: Answers natural language questions about SQL databases by generating and executing queries\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [sql, database, natural-language, data-analysis]\r
industry: data-analytics\r
difficulty: intermediate\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,tm=`langchain==0.3.0\r
langchain-openai==0.2.0\r
langchain-community==0.3.0\r
python-dotenv==1.0.1\r
`,rm=`# Email Drafting Agent\r
\r
A CrewAI two-agent system that drafts professional emails. An analyst agent extracts requirements, then a writer agent produces the final email.\r
\r
**Framework**: CrewAI  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Default example\r
python agent.py\r
\r
# Custom email\r
python agent.py \\\r
  --context "Apologize for the delayed delivery of the software project" \\\r
  --tone "apologetic but confident" \\\r
  --recipient "the client project manager"\r
\`\`\`\r
\r
## Architecture\r
\r
\`\`\`\r
Context → [Analyst Agent] → Email Brief → [Writer Agent] → Final Email\r
\`\`\`\r
`,am=`"""\r
Email Drafting Agent using CrewAI.\r
\r
A two-agent crew that drafts professional emails:\r
- Analyst agent: understands context and tone requirements\r
- Writer agent: drafts the final email\r
\r
Usage:\r
    python agent.py\r
    python agent.py --context "Follow up on the Q3 proposal sent last week" --tone "professional"\r
"""\r
\r
import argparse\r
import os\r
\r
from crewai import Agent, Crew, Process, Task\r
from dotenv import load_dotenv\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
\r
def build_email_crew(context: str, tone: str, recipient: str) -> str:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)\r
\r
    analyst = Agent(\r
        role="Email Context Analyst",\r
        goal="Understand the email context, extract key points, and define the structure",\r
        backstory="You are an expert business communication analyst who distills complex situations into clear email requirements.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    writer = Agent(\r
        role="Professional Email Writer",\r
        goal="Draft clear, concise, and effective professional emails",\r
        backstory="You are a professional copywriter specializing in business emails that get responses.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    analyze_task = Task(\r
        description=f"""Analyze this email requirement:\r
Context: {context}\r
Recipient: {recipient}\r
Desired tone: {tone}\r
\r
Extract: purpose, key points to cover, call to action, subject line suggestion.""",\r
        agent=analyst,\r
        expected_output="Structured email brief: purpose, key points, CTA, and suggested subject line",\r
    )\r
\r
    write_task = Task(\r
        description=f"""Using the analysis, draft a complete professional email.\r
Tone: {tone}. Recipient: {recipient}.\r
Include: Subject line, greeting, body paragraphs, closing, signature placeholder.\r
Keep it concise — under 200 words for the body.""",\r
        agent=writer,\r
        expected_output="Complete formatted email ready to send",\r
        context=[analyze_task],\r
    )\r
\r
    crew = Crew(\r
        agents=[analyst, writer],\r
        tasks=[analyze_task, write_task],\r
        process=Process.sequential,\r
        verbose=False,\r
    )\r
\r
    result = crew.kickoff()\r
    return str(result)\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Email Drafting Agent")\r
    parser.add_argument("--context", default="Follow up on our product demo from last Tuesday. They seemed interested but haven't responded.", help="Email context/purpose")\r
    parser.add_argument("--tone", default="professional and friendly", help="Email tone")\r
    parser.add_argument("--recipient", default="a potential client", help="Who the email is for")\r
    args = parser.parse_args()\r
\r
    print(f"\\n✉️  Drafting email...\\n")\r
    email = build_email_crew(args.context, args.tone, args.recipient)\r
\r
    print("=" * 60)\r
    print("📧 DRAFTED EMAIL")\r
    print("=" * 60)\r
    print(email)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,im=`title: email-drafting-agent\r
description: Two-agent CrewAI system that drafts professional emails from context\r
author: ashishpatel26\r
language: python\r
framework: crewai\r
tags: [email, communication, crewai, productivity]\r
industry: communication\r
difficulty: beginner\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,sm=`crewai==0.80.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,om=`# News Summarizer Agent\r
\r
Fetches news articles on any topic and produces a structured briefing with key themes and insights.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o-mini  \r
**Data**: NewsAPI (optional — runs with mock data without a key)\r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
python agent.py --topic "artificial intelligence"\r
python agent.py --topic "climate change" --count 10\r
\`\`\`\r
\r
Works without a NewsAPI key using sample data. For real news, get a free key at newsapi.org.\r
`,lm=`"""\r
News Summarizer Agent using AutoGen.\r
\r
Fetches news articles and produces structured summaries with key insights.\r
\r
Usage:\r
    python agent.py --topic "artificial intelligence"\r
    python agent.py --topic "climate change" --count 5\r
"""\r
\r
import argparse\r
import os\r
\r
import requests\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
NEWS_API_KEY = os.getenv("NEWS_API_KEY")\r
\r
\r
def fetch_news(topic: str, count: int = 5) -> list[dict]:\r
    if not NEWS_API_KEY:\r
        # Return mock data if no API key\r
        return [\r
            {"title": f"Major development in {topic}", "description": f"Researchers announce breakthrough in {topic} field.", "url": "https://example.com/1", "source": {"name": "Tech News"}},\r
            {"title": f"{topic.title()} industry sees rapid growth", "description": f"New report shows {topic} adoption up 40% year-over-year.", "url": "https://example.com/2", "source": {"name": "Business Daily"}},\r
            {"title": f"Experts weigh in on {topic} challenges", "description": f"Leading experts discuss obstacles facing the {topic} space.", "url": "https://example.com/3", "source": {"name": "Science Weekly"}},\r
        ]\r
\r
    url = f"https://newsapi.org/v2/everything?q={topic}&language=en&pageSize={count}&sortBy=publishedAt&apiKey={NEWS_API_KEY}"\r
    response = requests.get(url, timeout=10)\r
    data = response.json()\r
    return data.get("articles", [])\r
\r
\r
def summarize_news(topic: str, articles: list[dict]) -> str:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
\r
    articles_text = "\\n\\n".join(\r
        f"Title: {a['title']}\\nSource: {a.get('source', {}).get('name', 'Unknown')}\\nSummary: {a.get('description', 'N/A')}"\r
        for a in articles[:5]\r
    )\r
\r
    messages = [\r
        SystemMessage(content="You are a news analyst. Create a structured news briefing with: 1) Top Story, 2) Key Themes (3 bullet points), 3) What to Watch, 4) Quick Headlines list."),\r
        HumanMessage(content=f"Topic: {topic}\\n\\nArticles:\\n{articles_text}"),\r
    ]\r
\r
    response = llm.invoke(messages)\r
    return response.content\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="News Summarizer Agent")\r
    parser.add_argument("--topic", default="artificial intelligence", help="News topic to search")\r
    parser.add_argument("--count", type=int, default=5, help="Number of articles to fetch")\r
    args = parser.parse_args()\r
\r
    print(f"\\n📰 Fetching news about: {args.topic}\\n")\r
    articles = fetch_news(args.topic, args.count)\r
    print(f"✅ Found {len(articles)} articles")\r
\r
    summary = summarize_news(args.topic, articles)\r
\r
    print("\\n" + "=" * 60)\r
    print(f"📋 NEWS BRIEFING: {args.topic.upper()}")\r
    print("=" * 60)\r
    print(summary)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,um=`title: news-summarizer-agent\r
description: Fetches news on any topic and produces a structured briefing with key themes\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [news, summarization, media, nlp]\r
industry: media\r
difficulty: beginner\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,cm=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
requests==2.32.3\r
python-dotenv==1.0.1\r
`,dm=`# GitHub Issue Triager\r
\r
Automatically triages GitHub issues: assigns severity, category, labels, and routing recommendations.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# From a GitHub URL\r
python agent.py --issue-url https://github.com/owner/repo/issues/123\r
\r
# From title + body text\r
python agent.py --title "App crashes on login" --body "Steps: 1. Open app 2. Click login 3. App crashes"\r
\`\`\`\r
\r
## Output\r
\r
\`\`\`\r
🔴 Severity: CRITICAL (Priority: 9/10)\r
📁 Category: bug\r
👤 Assignee: backend team\r
🏷️  Labels: bug, critical, authentication\r
📝 Summary: Authentication crash affecting all users on login\r
\`\`\`\r
`,pm=`"""\r
GitHub Issue Triager using LangGraph.\r
\r
Analyzes a GitHub issue and produces: severity label, category,\r
reproduction steps summary, and suggested assignee type.\r
\r
Usage:\r
    python agent.py --title "Login fails on mobile Safari" --body "When I try..."\r
    python agent.py --issue-url https://github.com/owner/repo/issues/123\r
"""\r
\r
import argparse\r
import os\r
import json\r
import re\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
TRIAGE_PROMPT = """You are a GitHub issue triager. Analyze the issue and return a JSON object with:\r
{\r
  "severity": "critical|high|medium|low",\r
  "category": "bug|feature|documentation|question|performance|security",\r
  "priority_score": 1-10,\r
  "labels": ["list", "of", "suggested", "labels"],\r
  "summary": "one sentence summary",\r
  "reproduction_clear": true/false,\r
  "assignee_type": "frontend|backend|devops|documentation|security|any",\r
  "needs_more_info": true/false,\r
  "triage_notes": "2-3 sentences of triager notes"\r
}\r
Return only valid JSON, no markdown."""\r
\r
\r
def parse_json_response(text: str) -> dict:\r
    cleaned = text.strip()\r
    if cleaned.startswith("\`\`\`"):\r
        cleaned = re.sub(r"^\`\`\`(?:json)?\\s*", "", cleaned)\r
        cleaned = re.sub(r"\\s*\`\`\`$", "", cleaned)\r
    match = re.search(r"\\{.*\\}", cleaned, re.DOTALL)\r
    if match:\r
        cleaned = match.group(0)\r
    return json.loads(cleaned)\r
\r
\r
def triage_issue(title: str, body: str, labels: list[str] = None) -> dict:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
\r
    issue_text = f"Title: {title}\\n\\nBody:\\n{body}"\r
    if labels:\r
        issue_text += f"\\n\\nExisting labels: {', '.join(labels)}"\r
\r
    messages = [\r
        SystemMessage(content=TRIAGE_PROMPT),\r
        HumanMessage(content=issue_text),\r
    ]\r
\r
    response = llm.invoke(messages)\r
    return parse_json_response(response.content)\r
\r
\r
def fetch_github_issue(url: str) -> tuple[str, str, list]:\r
    """Fetch issue details from GitHub API."""\r
    import re\r
    import requests\r
\r
    match = re.match(r"https://github.com/([^/]+)/([^/]+)/issues/(\\d+)", url)\r
    if not match:\r
        raise ValueError(f"Invalid GitHub issue URL: {url}")\r
\r
    owner, repo, issue_num = match.groups()\r
    api_url = f"https://api.github.com/repos/{owner}/{repo}/issues/{issue_num}"\r
    headers = {}\r
    if token := os.getenv("GITHUB_TOKEN"):\r
        headers["Authorization"] = f"token {token}"\r
\r
    r = requests.get(api_url, headers=headers, timeout=10)\r
    r.raise_for_status()\r
    data = r.json()\r
    return data["title"], data.get("body", ""), [l["name"] for l in data.get("labels", [])]\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="GitHub Issue Triager")\r
    group = parser.add_mutually_exclusive_group(required=True)\r
    group.add_argument("--issue-url", help="GitHub issue URL")\r
    group.add_argument("--title", help="Issue title (use with --body)")\r
    parser.add_argument("--body", default="", help="Issue body text")\r
    args = parser.parse_args()\r
\r
    if args.issue_url:\r
        print(f"\\n🔍 Fetching issue from GitHub...")\r
        title, body, labels = fetch_github_issue(args.issue_url)\r
    else:\r
        title, body, labels = args.title, args.body, []\r
\r
    print(f"\\n🏷️  Triaging: {title}\\n")\r
    result = triage_issue(title, body, labels)\r
\r
    severity = result.get("severity", "medium")\r
    labels = result.get("labels", [])\r
    severity_emoji = {"critical": "🔴", "high": "🟠", "medium": "🟡", "low": "🟢"}.get(severity, "⚪")\r
\r
    print("=" * 60)\r
    print("📋 TRIAGE REPORT")\r
    print("=" * 60)\r
    print(f"{severity_emoji} Severity: {severity.upper()} (Priority: {result.get('priority_score', 'N/A')}/10)")\r
    print(f"📁 Category: {result.get('category', 'N/A')}")\r
    print(f"👤 Assignee: {result.get('assignee_type', 'any')} team")\r
    print(f"🏷️  Labels: {', '.join(labels)}")\r
    print(f"📝 Summary: {result.get('summary', 'N/A')}")\r
    print(f"❓ Needs more info: {'Yes' if result.get('needs_more_info') else 'No'}")\r
    print(f"🔍 Reproduction clear: {'Yes' if result.get('reproduction_clear') else 'No'}")\r
    print(f"\\n💭 Notes: {result.get('triage_notes', 'N/A')}")\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,mm=`title: github-issue-triager\r
description: Automatically triages GitHub issues with severity, category, and routing recommendations\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [github, devops, triage, issue-management, automation]\r
industry: software-development\r
difficulty: intermediate\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,gm=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
requests==2.32.3\r
python-dotenv==1.0.1\r
`,fm=`# Data Analysis Agent\r
\r
Chat with your data. Load any CSV or Excel file and ask analytical questions in natural language.\r
\r
**Framework**: LangChain (Pandas Agent)  \r
**LLM**: GPT-4o  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Demo mode — creates sample sales data automatically\r
python agent.py --allow-dangerous-code\r
\r
# Your own data\r
python agent.py --file your_data.csv --allow-dangerous-code\r
\r
# Single question\r
python agent.py --file sales.csv --question "What is the monthly revenue trend?" --allow-dangerous-code\r
\`\`\`\r
\r
## Safety Note\r
\r
This demo uses LangChain's pandas agent, which executes model-generated Python code.\r
Use \`--allow-dangerous-code\` only with trusted prompts and non-sensitive local data.\r
\r
## Example Questions\r
\r
- "What is the total revenue by product?"\r
- "Which region performs best?"\r
- "Show the correlation between quantity and revenue"\r
- "What are the top 5 selling products?"\r
`,hm=`"""\r
Data Analysis Agent using LangChain + pandas.\r
\r
Loads a CSV/Excel file and answers analytical questions about it using\r
natural language. The agent generates Python/pandas code to answer questions.\r
\r
Usage:\r
    python agent.py --file data.csv\r
    python agent.py --file sales.xlsx --question "What is the monthly revenue trend?"\r
"""\r
\r
import argparse\r
import os\r
\r
import pandas as pd\r
from dotenv import load_dotenv\r
from langchain_experimental.agents import create_pandas_dataframe_agent\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
\r
def create_sample_data(path: str):\r
    """Creates a sample sales dataset for demo."""\r
    import random\r
    from datetime import date, timedelta\r
\r
    random.seed(42)\r
    rows = []\r
    products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"]\r
    regions = ["North", "South", "East", "West"]\r
    start = date(2024, 1, 1)\r
\r
    for i in range(200):\r
        d = start + timedelta(days=random.randint(0, 364))\r
        rows.append({\r
            "date": d.isoformat(),\r
            "product": random.choice(products),\r
            "region": random.choice(regions),\r
            "quantity": random.randint(1, 20),\r
            "unit_price": round(random.uniform(50, 2000), 2),\r
            "revenue": 0,\r
        })\r
\r
    df = pd.DataFrame(rows)\r
    df["revenue"] = df["quantity"] * df["unit_price"]\r
    df.to_csv(path, index=False)\r
    return df\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Data Analysis Agent")\r
    parser.add_argument("--file", default="sample_data.csv", help="CSV or Excel file to analyze")\r
    parser.add_argument("--question", help="Single question (omit for interactive mode)")\r
    parser.add_argument(\r
        "--allow-dangerous-code",\r
        action="store_true",\r
        help="Required to let the pandas agent execute generated Python code locally",\r
    )\r
    args = parser.parse_args()\r
\r
    if args.file == "sample_data.csv" and not os.path.exists("sample_data.csv"):\r
        print("🏗️  Creating sample sales dataset...")\r
        df = create_sample_data("sample_data.csv")\r
    else:\r
        ext = os.path.splitext(args.file)[1].lower()\r
        df = pd.read_excel(args.file) if ext in (".xlsx", ".xls") else pd.read_csv(args.file)\r
\r
    print(f"\\n📊 Loaded: {args.file} ({len(df)} rows × {len(df.columns)} columns)")\r
    print(f"📋 Columns: {', '.join(df.columns)}\\n")\r
\r
    if not args.allow_dangerous_code:\r
        print("⚠️  This agent uses LangChain's pandas agent, which executes model-generated Python code.")\r
        print("Run again with --allow-dangerous-code only with trusted prompts and non-sensitive data.")\r
        return\r
\r
    llm = ChatOpenAI(model="gpt-4o", temperature=0)\r
    agent = create_pandas_dataframe_agent(\r
        llm,\r
        df,\r
        verbose=False,\r
        allow_dangerous_code=args.allow_dangerous_code,\r
    )\r
\r
    if args.question:\r
        print(f"❓ Question: {args.question}")\r
        result = agent.invoke({"input": args.question})\r
        print(f"\\n✅ Answer: {result['output']}")\r
    else:\r
        print("💬 Data Analysis Agent ready. Ask questions about your data. Type 'quit' to exit.\\n")\r
        print("Example questions:")\r
        print("  - What is the total revenue by product?")\r
        print("  - Which region has the highest average order value?")\r
        print("  - Show me the top 5 sales days\\n")\r
        while True:\r
            question = input("You: ").strip()\r
            if question.lower() in ("quit", "exit", "q"):\r
                break\r
            if not question:\r
                continue\r
            result = agent.invoke({"input": question})\r
            print(f"\\nAgent: {result['output']}\\n")\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,ym=`title: data-analysis-agent\r
description: Chat with CSV/Excel data using natural language queries powered by pandas\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [data-analysis, pandas, csv, analytics, natural-language]\r
industry: analytics\r
difficulty: intermediate\r
llm: gpt-4o\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,vm=`langchain==0.3.0\r
langchain-openai==0.2.0\r
langchain-experimental==0.3.0\r
pandas==2.2.0\r
openpyxl==3.1.5\r
python-dotenv==1.0.1\r
`,_m=`# Resume Parser Agent\r
\r
Parses resumes (TXT or PDF) into structured JSON and optionally scores candidate fit against a job description.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Parse only (uses built-in sample resume)\r
python agent.py\r
\r
# Parse your resume\r
python agent.py --resume path/to/resume.pdf\r
\r
# Parse + fit score\r
python agent.py --resume resume.pdf --job-desc "Senior Python Engineer with K8s experience..."\r
\`\`\`\r
\r
## Output includes\r
\r
- Structured JSON: name, email, skills, experience, education\r
- Candidate summary\r
- Fit score (0-100) vs job description\r
- Hire/Consider/Pass recommendation\r
`,wm=`"""\r
Resume Parser Agent using LangChain.\r
\r
Extracts structured information from resume text or PDF:\r
contact info, skills, experience, education, and provides\r
a candidate summary and fit score for a job description.\r
\r
Usage:\r
    python agent.py --resume resume.txt\r
    python agent.py --resume resume.pdf --job-desc "Senior Python Developer with 5+ years..."\r
"""\r
\r
import argparse\r
import json\r
import os\r
import re\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
PARSE_PROMPT = """Extract structured information from this resume and return JSON:\r
{\r
  "name": "full name",\r
  "email": "email or null",\r
  "phone": "phone or null",\r
  "location": "city, country or null",\r
  "linkedin": "URL or null",\r
  "github": "URL or null",\r
  "summary": "2-3 sentence professional summary",\r
  "years_experience": number,\r
  "current_title": "current/most recent job title",\r
  "skills": {\r
    "languages": ["Python", "JavaScript", ...],\r
    "frameworks": ["Django", "React", ...],\r
    "tools": ["Docker", "Git", ...],\r
    "soft_skills": ["leadership", ...]\r
  },\r
  "experience": [{"title": "...", "company": "...", "duration": "...", "highlights": ["..."]}],\r
  "education": [{"degree": "...", "institution": "...", "year": "..."}],\r
  "certifications": ["..."],\r
  "languages_spoken": ["English", ...]\r
}\r
Return only valid JSON."""\r
\r
FIT_PROMPT = """Given this candidate profile and job description, return JSON:\r
{\r
  "fit_score": 0-100,\r
  "fit_label": "Excellent|Good|Fair|Poor",\r
  "strengths": ["matching point 1", "matching point 2", ...],\r
  "gaps": ["missing skill 1", ...],\r
  "recommendation": "Hire|Consider|Pass",\r
  "recommendation_reason": "2-3 sentence explanation"\r
}\r
Return only valid JSON."""\r
\r
\r
def parse_json_response(text: str) -> dict:\r
    cleaned = text.strip()\r
    if cleaned.startswith("\`\`\`"):\r
        cleaned = re.sub(r"^\`\`\`(?:json)?\\s*", "", cleaned)\r
        cleaned = re.sub(r"\\s*\`\`\`$", "", cleaned)\r
    match = re.search(r"\\{.*\\}", cleaned, re.DOTALL)\r
    if match:\r
        cleaned = match.group(0)\r
    return json.loads(cleaned)\r
\r
\r
def read_resume_text(path: str) -> str:\r
    if path.endswith(".pdf"):\r
        try:\r
            import pypdf\r
            with open(path, "rb") as f:\r
                reader = pypdf.PdfReader(f)\r
                return "\\n".join(page.extract_text() for page in reader.pages)\r
        except ImportError:\r
            print("⚠️  pypdf not installed. Install with: pip install pypdf")\r
            raise\r
    with open(path) as f:\r
        return f.read()\r
\r
\r
def parse_resume(text: str) -> dict:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
    messages = [SystemMessage(content=PARSE_PROMPT), HumanMessage(content=text)]\r
    response = llm.invoke(messages)\r
    return parse_json_response(response.content)\r
\r
\r
def score_fit(profile: dict, job_desc: str) -> dict:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
    messages = [\r
        SystemMessage(content=FIT_PROMPT),\r
        HumanMessage(content=f"Candidate profile:\\n{json.dumps(profile, indent=2)}\\n\\nJob description:\\n{job_desc}"),\r
    ]\r
    response = llm.invoke(messages)\r
    return parse_json_response(response.content)\r
\r
\r
SAMPLE_RESUME = """\r
Jane Doe\r
jane.doe@email.com | +1 (555) 123-4567 | San Francisco, CA\r
linkedin.com/in/janedoe | github.com/janedoe\r
\r
SUMMARY\r
Senior Python developer with 7 years of experience building scalable web applications\r
and data pipelines. Led teams of 5-8 engineers at Series B startups.\r
\r
EXPERIENCE\r
Senior Software Engineer | TechCorp Inc. | 2021-present\r
- Architected microservices platform handling 10M requests/day using FastAPI + Kubernetes\r
- Reduced API latency by 40% through Redis caching and async optimization\r
- Led migration from monolith to microservices (12-month project, 5 engineers)\r
\r
Software Engineer | DataFlow Systems | 2018-2021\r
- Built ML data pipelines processing 500GB/day using Apache Spark and Airflow\r
- Developed REST APIs with Django REST Framework serving 50k daily users\r
\r
SKILLS\r
Languages: Python, JavaScript, SQL, Bash\r
Frameworks: FastAPI, Django, React, Spark\r
Tools: Docker, Kubernetes, Redis, PostgreSQL, Git, Airflow\r
Cloud: AWS (EC2, S3, RDS, Lambda)\r
\r
EDUCATION\r
B.S. Computer Science | UC Berkeley | 2017\r
\r
CERTIFICATIONS\r
AWS Solutions Architect Associate\r
"""\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Resume Parser Agent")\r
    parser.add_argument("--resume", help="Path to resume file (.txt or .pdf)")\r
    parser.add_argument("--job-desc", help="Job description to match against")\r
    args = parser.parse_args()\r
\r
    if args.resume:\r
        print(f"\\n📄 Parsing resume: {args.resume}")\r
        text = read_resume_text(args.resume)\r
    else:\r
        print("\\n📄 Using sample resume (pass --resume to use your own)")\r
        text = SAMPLE_RESUME\r
\r
    profile = parse_resume(text)\r
\r
    print("\\n" + "=" * 60)\r
    print("👤 PARSED RESUME")\r
    print("=" * 60)\r
    print(f"Name: {profile.get('name')}")\r
    print(f"Title: {profile.get('current_title')}")\r
    print(f"Experience: {profile.get('years_experience')} years")\r
    print(f"Skills: {', '.join(profile.get('skills', {}).get('languages', []))}")\r
    print(f"\\nSummary: {profile.get('summary')}")\r
\r
    if args.job_desc:\r
        print("\\n" + "=" * 60)\r
        print("📊 JOB FIT ANALYSIS")\r
        print("=" * 60)\r
        fit = score_fit(profile, args.job_desc)\r
        fit_label = fit.get("fit_label", "N/A")\r
        label_emoji = {"Excellent": "🟢", "Good": "🟡", "Fair": "🟠", "Poor": "🔴"}.get(fit_label, "⚪")\r
        print(f"{label_emoji} Fit Score: {fit.get('fit_score', 'N/A')}/100 ({fit_label})")\r
        print(f"✅ Strengths: {', '.join(fit.get('strengths', [])[:3])}")\r
        print(f"⚠️  Gaps: {', '.join(fit.get('gaps', ['None identified'])[:3])}")\r
        print(f"🎯 Recommendation: {fit.get('recommendation', 'N/A')}")\r
        print(f"💭 {fit.get('recommendation_reason', 'N/A')}")\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,km=`title: resume-parser-agent\r
description: Parses resumes to structured JSON and scores candidate fit against job descriptions\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [hr, recruitment, resume, nlp, parsing]\r
industry: human-resources\r
difficulty: beginner\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,xm=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
pypdf==4.3.1\r
`,bm=`# Meeting Notes Agent\r
\r
Converts meeting transcripts into structured notes with summary, action items, decisions, and follow-ups.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Use built-in sample transcript\r
python agent.py\r
\r
# Your own transcript file\r
python agent.py --transcript meeting_transcript.txt\r
\r
# Inline text\r
python agent.py --text "Alice: Let's ship by Friday. Bob: I need 2 more days for testing..."\r
\r
# Custom output path\r
python agent.py --transcript meeting_transcript.txt --output sprint_notes.md\r
\`\`\`\r
\r
## Output\r
\r
Saves structured markdown to \`meeting_notes.md\` by default. If that file already exists,\r
the agent writes a timestamped file instead. The output includes:\r
- Executive summary\r
- Key decisions\r
- Action items with owners and due dates\r
- Blockers\r
- Next meeting time\r
`,Am=`"""\r
Meeting Notes Agent.\r
\r
Converts meeting transcript text into structured meeting notes:\r
summary, action items, decisions, and follow-ups.\r
\r
Usage:\r
    python agent.py --transcript meeting.txt\r
    python agent.py --text "John: Let's ship v2 next Friday..."\r
"""\r
\r
import argparse\r
import json\r
import os\r
import re\r
from datetime import date, datetime\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
NOTES_PROMPT = """You are a professional meeting note-taker. Convert the meeting transcript into structured notes as JSON:\r
{\r
  "meeting_title": "inferred title",\r
  "date": "today or mentioned date",\r
  "participants": ["name1", "name2"],\r
  "duration_estimate": "X minutes",\r
  "summary": "2-3 sentence executive summary",\r
  "key_decisions": ["decision 1", "decision 2"],\r
  "action_items": [\r
    {"task": "description", "owner": "person name or TBD", "due": "date or timeframe or TBD"}\r
  ],\r
  "discussion_topics": ["topic 1", "topic 2"],\r
  "blockers": ["blocker 1 or none"],\r
  "next_meeting": "scheduled time or TBD",\r
  "follow_up_questions": ["question needing resolution"]\r
}\r
Return only valid JSON."""\r
\r
SAMPLE_TRANSCRIPT = """\r
Sarah: Alright everyone, let's get started. It's Monday the 3rd and we have John, Mike, and Lisa here.\r
\r
John: Thanks Sarah. So the main thing I wanted to cover is the Q4 product roadmap.\r
We need to decide on the feature freeze date.\r
\r
Sarah: I think we should freeze by November 15th. That gives QA three weeks before the holiday release.\r
\r
Mike: That works for me. But we still need to finalize the payment integration. Lisa, where are you on that?\r
\r
Lisa: I'm about 60% done. I need the API docs from the payment provider. I've emailed them twice but haven't heard back.\r
\r
John: I'll escalate that today. I'll reach out to our account manager at PaymentCo. That's blocking us.\r
\r
Sarah: Okay, so John will handle the PaymentCo escalation by end of today. Lisa continues on payment integration, targeting completion by November 10th.\r
\r
Mike: I can help with testing once Lisa has a draft ready. Let's say I start testing November 11th.\r
\r
Sarah: Great. Also, we decided to cut the social login feature from this release. Too risky to add now.\r
\r
John: Agreed. We'll put it in Q1 backlog.\r
\r
Sarah: Any other blockers? No? Okay. Same time next week, November 10th.\r
"""\r
\r
\r
def parse_json_response(text: str) -> dict:\r
    cleaned = text.strip()\r
    if cleaned.startswith("\`\`\`"):\r
        cleaned = re.sub(r"^\`\`\`(?:json)?\\s*", "", cleaned)\r
        cleaned = re.sub(r"\\s*\`\`\`$", "", cleaned)\r
    match = re.search(r"\\{.*\\}", cleaned, re.DOTALL)\r
    if match:\r
        cleaned = match.group(0)\r
    return json.loads(cleaned)\r
\r
\r
def generate_meeting_notes(transcript: str) -> dict:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
    messages = [\r
        SystemMessage(content=NOTES_PROMPT),\r
        HumanMessage(content=f"Meeting transcript:\\n\\n{transcript}"),\r
    ]\r
    response = llm.invoke(messages)\r
    return parse_json_response(response.content)\r
\r
\r
def format_notes(notes: dict) -> str:\r
    lines = [\r
        f"# {notes.get('meeting_title', 'Meeting Notes')}",\r
        f"**Date:** {notes.get('date', date.today().isoformat())}  |  **Duration:** {notes.get('duration_estimate', 'N/A')}",\r
        f"**Participants:** {', '.join(notes.get('participants', []))}",\r
        "",\r
        "## Summary",\r
        notes.get("summary", ""),\r
        "",\r
        "## Key Decisions",\r
        *[f"- {d}" for d in notes.get("key_decisions", [])],\r
        "",\r
        "## Action Items",\r
    ]\r
    for item in notes.get("action_items", []):\r
        lines.append(f"- [ ] **{item.get('task', 'Task')}** — Owner: {item.get('owner', 'TBD')} | Due: {item.get('due', 'TBD')}")\r
\r
    if notes.get("blockers"):\r
        lines += ["", "## Blockers", *[f"- {b}" for b in notes["blockers"]]]\r
\r
    if notes.get("next_meeting") and notes["next_meeting"] != "TBD":\r
        lines += ["", f"**Next Meeting:** {notes['next_meeting']}"]\r
\r
    return "\\n".join(lines)\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Meeting Notes Agent")\r
    group = parser.add_mutually_exclusive_group()\r
    group.add_argument("--transcript", help="Path to transcript text file")\r
    group.add_argument("--text", help="Transcript text directly")\r
    parser.add_argument("--output", default="meeting_notes.md", help="Markdown output path")\r
    args = parser.parse_args()\r
\r
    if args.transcript:\r
        with open(args.transcript) as f:\r
            transcript = f.read()\r
        print(f"\\n📝 Processing: {args.transcript}\\n")\r
    elif args.text:\r
        transcript = args.text\r
        print("\\n📝 Processing transcript...\\n")\r
    else:\r
        print("\\n📝 Using sample meeting transcript\\n")\r
        transcript = SAMPLE_TRANSCRIPT\r
\r
    notes = generate_meeting_notes(transcript)\r
    formatted = format_notes(notes)\r
\r
    print("=" * 60)\r
    print(formatted)\r
    print("=" * 60)\r
\r
    # Save to file\r
    output_file = args.output\r
    if os.path.exists(output_file) and args.output == "meeting_notes.md":\r
        stamp = datetime.now().strftime("%Y%m%d_%H%M%S")\r
        output_file = f"meeting_notes_{stamp}.md"\r
    with open(output_file, "w") as f:\r
        f.write(formatted)\r
    print(f"\\n✅ Saved to: {output_file}")\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Sm=`title: meeting-notes-agent\r
description: Converts meeting transcripts into structured notes with action items and decisions\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [productivity, meetings, summarization, action-items]\r
industry: productivity\r
difficulty: beginner\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,Cm=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,Em=`# Stock Research Agent\r
\r
Fetches real-time stock data via Yahoo Finance and generates an AI-powered investment analysis.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o-mini  \r
**Data**: Yahoo Finance (free, no API key needed)\r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
python agent.py --ticker AAPL\r
python agent.py --ticker NVDA\r
python agent.py --ticker TSLA\r
\`\`\`\r
\r
## Output\r
\r
Real-time fundamentals + AI analysis covering investment thesis, strengths, risks, valuation, and verdict.\r
`,Pm=`"""\r
Stock Research Agent using Agno + Yahoo Finance.\r
\r
Provides comprehensive stock analysis: price data, financials,\r
analyst ratings, and AI-powered investment summary.\r
\r
Usage:\r
    python agent.py --ticker AAPL\r
    python agent.py --ticker NVDA\r
"""\r
\r
import argparse\r
import os\r
\r
from dotenv import load_dotenv\r
\r
load_dotenv()\r
\r
try:\r
    import yfinance as yf\r
    HAS_YFINANCE = True\r
except ImportError:\r
    HAS_YFINANCE = False\r
\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
\r
def get_stock_data(ticker: str) -> dict:\r
    if not HAS_YFINANCE:\r
        return {"ticker": ticker, "error": "yfinance not installed", "mock": True}\r
\r
    stock = yf.Ticker(ticker)\r
    info = stock.info\r
\r
    return {\r
        "ticker": ticker,\r
        "name": info.get("longName", ticker),\r
        "sector": info.get("sector", "N/A"),\r
        "industry": info.get("industry", "N/A"),\r
        "price": info.get("currentPrice", info.get("regularMarketPrice", 0)),\r
        "market_cap": info.get("marketCap", 0),\r
        "pe_ratio": info.get("trailingPE", "N/A"),\r
        "forward_pe": info.get("forwardPE", "N/A"),\r
        "peg_ratio": info.get("pegRatio", "N/A"),\r
        "revenue_growth": info.get("revenueGrowth", "N/A"),\r
        "profit_margin": info.get("profitMargins", "N/A"),\r
        "dividend_yield": info.get("dividendYield", 0),\r
        "52w_high": info.get("fiftyTwoWeekHigh", "N/A"),\r
        "52w_low": info.get("fiftyTwoWeekLow", "N/A"),\r
        "analyst_rating": info.get("recommendationKey", "N/A"),\r
        "target_price": info.get("targetMeanPrice", "N/A"),\r
        "description": info.get("longBusinessSummary", "")[:500],\r
    }\r
\r
\r
def analyze_stock(data: dict) -> str:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
\r
    stock_info = "\\n".join(f"{k}: {v}" for k, v in data.items() if k != "description")\r
\r
    messages = [\r
        SystemMessage(content="You are a financial analyst. Provide a concise stock analysis covering: Investment Thesis (2-3 sentences), Key Strengths (3 bullets), Key Risks (3 bullets), Valuation Assessment, and a Verdict (Buy/Hold/Sell with brief reasoning). Keep it under 300 words."),\r
        HumanMessage(content=f"Analyze this stock:\\n{stock_info}\\n\\nCompany description: {data.get('description', 'N/A')}"),\r
    ]\r
\r
    response = llm.invoke(messages)\r
    return response.content\r
\r
\r
def format_number(n) -> str:\r
    if isinstance(n, (int, float)):\r
        if n >= 1e12:\r
            return f"\${n/1e12:.2f}T"\r
        if n >= 1e9:\r
            return f"\${n/1e9:.2f}B"\r
        if n >= 1e6:\r
            return f"\${n/1e6:.2f}M"\r
        return f"\${n:.2f}"\r
    return str(n)\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Stock Research Agent")\r
    parser.add_argument("--ticker", required=True, help="Stock ticker symbol (e.g., AAPL)")\r
    args = parser.parse_args()\r
\r
    print(f"\\n📈 Researching {args.ticker}...\\n")\r
\r
    data = get_stock_data(args.ticker)\r
\r
    print("=" * 60)\r
    print(f"📊 {data.get('name', args.ticker)} ({args.ticker})")\r
    print("=" * 60)\r
    print(f"Price: \${data.get('price', 'N/A')}  |  Market Cap: {format_number(data.get('market_cap', 0))}")\r
    print(f"Sector: {data.get('sector')}  |  Industry: {data.get('industry')}")\r
    print(f"P/E: {data.get('pe_ratio')}  |  Forward P/E: {data.get('forward_pe')}  |  PEG: {data.get('peg_ratio')}")\r
    print(f"52W Range: \${data.get('52w_low')} - \${data.get('52w_high')}")\r
    analyst_rating = data.get("analyst_rating") or "N/A"\r
    print(f"Analyst: {str(analyst_rating).upper()}  |  Target: \${data.get('target_price', 'N/A')}")\r
\r
    print("\\n🤖 AI Analysis:")\r
    print("-" * 40)\r
    analysis = analyze_stock(data)\r
    print(analysis)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Im=`title: stock-research-agent\r
description: Real-time stock fundamentals with AI-powered investment analysis\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [finance, stocks, investment, yfinance, analysis]\r
industry: finance\r
difficulty: intermediate\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,jm=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
yfinance==0.2.44\r
python-dotenv==1.0.1\r
`,Tm=`# Travel Planner Agent\r
\r
Three-agent CrewAI system that creates personalized travel itineraries with destination research, day-by-day plans, and budget breakdown.\r
\r
**Framework**: CrewAI  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
python agent.py --destination "Tokyo, Japan" --days 7 --budget 3000\r
python agent.py --destination "Paris, France" --days 5 --budget 5000 --interests "art, wine, architecture"\r
\`\`\`\r
`,Rm=`"""\r
Travel Planner Agent using CrewAI.\r
\r
Multi-agent crew that creates personalized travel itineraries:\r
- Destination Researcher: gathers destination info\r
- Activity Planner: creates day-by-day activities\r
- Budget Analyst: estimates costs\r
\r
Usage:\r
    python agent.py --destination "Tokyo, Japan" --days 5 --budget 2000\r
"""\r
\r
import argparse\r
import os\r
\r
from crewai import Agent, Crew, Process, Task\r
from dotenv import load_dotenv\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
\r
def build_travel_crew(destination: str, days: int, budget: float, interests: str) -> str:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.4)\r
\r
    researcher = Agent(\r
        role="Destination Researcher",\r
        goal=f"Research {destination} and provide key travel insights",\r
        backstory="Expert travel journalist who has visited 100+ countries. Knows the best hidden gems and practical tips.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    planner = Agent(\r
        role="Travel Itinerary Planner",\r
        goal=f"Create a detailed {days}-day itinerary for {destination}",\r
        backstory="Luxury travel consultant with 15 years of experience crafting personalized itineraries.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    budget_analyst = Agent(\r
        role="Travel Budget Analyst",\r
        goal=f"Estimate realistic costs for the trip within \${budget} budget",\r
        backstory="Financial travel advisor who helps travelers maximize experiences within budget.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    research_task = Task(\r
        description=f"""Research {destination} for a {days}-day trip.\r
Cover: best time to visit, neighborhoods to stay in, must-see attractions,\r
local food scene, transportation tips, and cultural customs to know.\r
Traveler interests: {interests}""",\r
        agent=researcher,\r
        expected_output="Destination brief with key areas, attractions, food, and practical tips",\r
    )\r
\r
    planning_task = Task(\r
        description=f"""Create a {days}-day itinerary for {destination}.\r
Budget: \${budget} total. Interests: {interests}.\r
Include morning/afternoon/evening activities, specific restaurant recommendations,\r
and travel time between locations. Make it achievable and enjoyable.""",\r
        agent=planner,\r
        expected_output=f"Day-by-day {days}-day itinerary with activities, meals, and timing",\r
        context=[research_task],\r
    )\r
\r
    budget_task = Task(\r
        description=f"""Provide a budget breakdown for the {days}-day {destination} trip.\r
Total budget: \${budget}. Include: flights (estimate), accommodation, food, activities,\r
transportation. Flag if budget is tight and suggest adjustments.""",\r
        agent=budget_analyst,\r
        expected_output="Itemized budget breakdown with daily averages and money-saving tips",\r
        context=[research_task, planning_task],\r
    )\r
\r
    crew = Crew(\r
        agents=[researcher, planner, budget_analyst],\r
        tasks=[research_task, planning_task, budget_task],\r
        process=Process.sequential,\r
        verbose=False,\r
    )\r
\r
    return str(crew.kickoff())\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Travel Planner Agent")\r
    parser.add_argument("--destination", default="Tokyo, Japan", help="Travel destination")\r
    parser.add_argument("--days", type=int, default=7, help="Number of days")\r
    parser.add_argument("--budget", type=float, default=3000, help="Total budget in USD")\r
    parser.add_argument("--interests", default="food, culture, history", help="Traveler interests")\r
    args = parser.parse_args()\r
\r
    print(f"\\n✈️  Planning {args.days}-day trip to {args.destination} (Budget: \${args.budget})\\n")\r
    itinerary = build_travel_crew(args.destination, args.days, args.budget, args.interests)\r
\r
    print("=" * 60)\r
    print("🗺️  TRAVEL ITINERARY")\r
    print("=" * 60)\r
    print(itinerary)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Nm=`title: travel-planner-agent\r
description: Multi-agent CrewAI system creating personalized travel itineraries with budget planning\r
author: ashishpatel26\r
language: python\r
framework: crewai\r
tags: [travel, planning, crewai, itinerary, budget]\r
industry: travel\r
difficulty: intermediate\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,Mm=`crewai==0.80.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,Lm=`# Customer Support Agent\r
\r
LangGraph-powered support agent with RAG knowledge base and automatic escalation routing.\r
\r
**Framework**: LangGraph + FAISS  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
python agent.py\r
\r
# Use your own .txt/.md knowledge base files\r
python agent.py --kb-dir docs/\r
\`\`\`\r
\r
## Features\r
\r
- RAG over product knowledge base\r
- Automatic escalation detection for sensitive issues (billing disputes, data loss, etc.)\r
- Conversation history maintained\r
- Easily swap in your own knowledge base docs\r
`,Dm=`"""\r
Customer Support Agent using LangGraph with RAG.\r
\r
Handles customer queries using a knowledge base (product docs).\r
Routes complex issues to human escalation.\r
\r
Usage:\r
    python agent.py\r
    python agent.py --kb-dir docs/          # load custom knowledge base\r
"""\r
\r
import argparse\r
import os\r
from pathlib import Path\r
from typing import Annotated, Literal, TypedDict\r
\r
from dotenv import load_dotenv\r
from langchain_community.vectorstores import FAISS\r
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI, OpenAIEmbeddings\r
from langchain_text_splitters import RecursiveCharacterTextSplitter\r
from langgraph.graph import END, StateGraph\r
from langgraph.graph.message import add_messages\r
\r
load_dotenv()\r
\r
SAMPLE_KB = [\r
    "Product: CloudSync Pro. Features: real-time sync across 5 devices, 1TB storage, offline mode, version history 30 days.",\r
    "Pricing: Basic $9/mo (100GB, 2 devices), Pro $19/mo (1TB, 5 devices), Business $49/mo (5TB, unlimited devices).",\r
    "Cancellation: Cancel anytime from Account > Subscription > Cancel. Refunds available within 14 days of charge.",\r
    "Password reset: Go to login page, click 'Forgot Password', enter email. Reset link expires in 1 hour.",\r
    "Sync issues: Check internet connection, ensure app is updated, try Sign Out and Sign In. If persists, contact support.",\r
    "Supported platforms: Windows 10+, macOS 12+, iOS 15+, Android 10+, Linux (Beta).",\r
    "Data security: AES-256 encryption at rest and in transit. SOC 2 Type II certified. Zero-knowledge architecture.",\r
    "File size limit: Individual files up to 10GB (Pro/Business), 2GB (Basic). No limit on total number of files.",\r
]\r
\r
ESCALATION_KEYWORDS = ["refund", "lawsuit", "furious", "fraud", "broken", "data loss", "cancel account", "charge", "billing error"]\r
\r
\r
class SupportState(TypedDict):\r
    messages: Annotated[list, add_messages]\r
    user_input: str\r
    retrieved_context: str\r
    response: str\r
    escalate: bool\r
\r
\r
def retrieve_context(state: SupportState) -> SupportState:\r
    query = state["user_input"]\r
    if not hasattr(retrieve_context, "vectorstore"):\r
        texts = getattr(retrieve_context, "kb_texts", SAMPLE_KB)\r
        splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=20)\r
        docs_split = splitter.create_documents(texts)\r
        embeddings = OpenAIEmbeddings()\r
        retrieve_context.vectorstore = FAISS.from_documents(docs_split, embeddings)\r
\r
    docs = retrieve_context.vectorstore.similarity_search(query, k=3)\r
    context = "\\n".join(d.page_content for d in docs)\r
    return {"retrieved_context": context}\r
\r
\r
def check_escalation(state: SupportState) -> SupportState:\r
    text = state["user_input"].lower()\r
    needs_escalation = any(kw in text for kw in ESCALATION_KEYWORDS)\r
    return {"escalate": needs_escalation}\r
\r
\r
def generate_response(state: SupportState) -> SupportState:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)\r
    conversation = state["messages"][:-1]  # exclude latest user msg\r
\r
    if state.get("escalate"):\r
        response_text = "I understand your concern and I want to make sure this gets the attention it deserves. I'm connecting you with a senior support specialist who can resolve this directly. You'll hear back within 2 hours. Your case ID is #" + str(hash(state["user_input"]) % 100000) + "."\r
    else:\r
        messages = [\r
            SystemMessage(content=f"""You are a helpful customer support agent for CloudSync Pro.\r
Use this knowledge base context to answer accurately:\r
{state['retrieved_context']}\r
\r
Be friendly, concise, and solution-focused. If unsure, say so honestly."""),\r
            *conversation,\r
            HumanMessage(content=state["user_input"]),\r
        ]\r
        response = llm.invoke(messages)\r
        response_text = response.content\r
\r
    return {"response": response_text, "messages": [AIMessage(content=response_text)]}\r
\r
\r
def route_after_escalation_check(state: SupportState) -> Literal["generate", "generate"]:\r
    return "generate"\r
\r
\r
def build_graph():\r
    graph = StateGraph(SupportState)\r
    graph.add_node("retrieve", retrieve_context)\r
    graph.add_node("check_escalation", check_escalation)\r
    graph.add_node("generate", generate_response)\r
    graph.set_entry_point("retrieve")\r
    graph.add_edge("retrieve", "check_escalation")\r
    graph.add_edge("check_escalation", "generate")\r
    graph.add_edge("generate", END)\r
    return graph.compile()\r
\r
\r
def load_kb_texts(kb_dir: str | None) -> list[str]:\r
    if not kb_dir:\r
        return SAMPLE_KB\r
\r
    root = Path(kb_dir)\r
    if not root.is_dir():\r
        raise ValueError(f"Knowledge base directory does not exist: {kb_dir}")\r
\r
    texts = []\r
    for path in sorted(root.rglob("*")):\r
        if path.is_file() and path.suffix.lower() in {".txt", ".md"}:\r
            texts.append(path.read_text(encoding="utf-8"))\r
\r
    if not texts:\r
        raise ValueError(f"No .txt or .md files found in knowledge base directory: {kb_dir}")\r
\r
    return texts\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Customer Support Agent")\r
    parser.add_argument("--kb-dir", help="Directory containing .txt or .md support knowledge base files")\r
    args = parser.parse_args()\r
\r
    retrieve_context.kb_texts = load_kb_texts(args.kb_dir)\r
    if hasattr(retrieve_context, "vectorstore"):\r
        delattr(retrieve_context, "vectorstore")\r
\r
    agent = build_graph()\r
    state = {"messages": [], "user_input": "", "retrieved_context": "", "response": "", "escalate": False}\r
\r
    print("\\n🎧 Customer Support Agent (CloudSync Pro)")\r
    print("Type 'quit' to exit\\n")\r
\r
    while True:\r
        user_input = input("Customer: ").strip()\r
        if user_input.lower() in ("quit", "exit", "q"):\r
            break\r
        if not user_input:\r
            continue\r
\r
        state["user_input"] = user_input\r
        state["messages"].append(HumanMessage(content=user_input))\r
        state = agent.invoke(state)\r
\r
        escalation_indicator = " [ESCALATED]" if state.get("escalate") else ""\r
        print(f"\\nAgent{escalation_indicator}: {state['response']}\\n")\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Fm=`title: customer-support-agent\r
description: RAG-powered customer support agent with escalation routing using LangGraph\r
author: ashishpatel26\r
language: python\r
framework: langgraph\r
tags: [customer-support, rag, langgraph, faiss, escalation]\r
industry: customer-service\r
difficulty: advanced\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,zm=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
langchain-community==0.3.0\r
langchain-text-splitters==0.3.0\r
langgraph==0.2.0\r
faiss-cpu==1.9.0\r
python-dotenv==1.0.1\r
`,Om=`# Social Media Content Agent\r
\r
Generates platform-optimized social media content (Twitter/X, LinkedIn, Instagram) from any topic.\r
\r
**Framework**: CrewAI  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
python agent.py --topic "The future of remote work"\r
python agent.py --topic "Product launch announcement" --brand "YourBrand" --platforms "twitter,linkedin"\r
\`\`\`\r
`,qm=`"""\r
Social Media Content Agent using CrewAI.\r
\r
Generates platform-optimized content (Twitter/X, LinkedIn, Instagram)\r
from a topic or article URL.\r
\r
Usage:\r
    python agent.py --topic "The rise of AI agents in 2025"\r
    python agent.py --topic "New product launch: CloudSync Pro v3" --brand "CloudSync"\r
"""\r
\r
import argparse\r
import os\r
\r
from crewai import Agent, Crew, Process, Task\r
from dotenv import load_dotenv\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
\r
def generate_social_content(topic: str, brand: str, platforms: list[str]) -> str:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)\r
\r
    strategist = Agent(\r
        role="Social Media Strategist",\r
        goal="Analyze the topic and define the key message, target audience, and tone for each platform",\r
        backstory="Award-winning social media strategist who has grown 50+ brand accounts to 100k+ followers.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    writer = Agent(\r
        role="Social Media Copywriter",\r
        goal="Write engaging, platform-optimized content that drives engagement",\r
        backstory="Viral content creator with expertise in platform-specific formats, hashtags, and hooks.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    strategy_task = Task(\r
        description=f"""Analyze this topic for social media: "{topic}"\r
Brand: {brand or 'Not specified'}\r
Platforms: {', '.join(platforms)}\r
Define: core message, target audience, emotional hook, 5 relevant hashtags.""",\r
        agent=strategist,\r
        expected_output="Content strategy: message, audience, hook, and hashtags",\r
    )\r
\r
    writing_task = Task(\r
        description=f"""Write social media posts for: {', '.join(platforms)}\r
Topic: {topic}. Brand: {brand or 'General'}.\r
\r
For each platform:\r
- Twitter/X: 2 tweet variations (under 280 chars each) + thread opener\r
- LinkedIn: Professional post (150-200 words) with storytelling hook\r
- Instagram: Caption (100-150 words) + 15 hashtags\r
\r
Make them platform-native — Twitter punchy, LinkedIn thoughtful, Instagram visual.""",\r
        agent=writer,\r
        expected_output="Platform-optimized posts for all requested platforms",\r
        context=[strategy_task],\r
    )\r
\r
    crew = Crew(\r
        agents=[strategist, writer],\r
        tasks=[strategy_task, writing_task],\r
        process=Process.sequential,\r
        verbose=False,\r
    )\r
\r
    return str(crew.kickoff())\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Social Media Content Agent")\r
    parser.add_argument("--topic", default="How AI is transforming software development in 2025", help="Content topic")\r
    parser.add_argument("--brand", default="", help="Brand name (optional)")\r
    parser.add_argument("--platforms", default="twitter,linkedin,instagram", help="Comma-separated platforms")\r
    args = parser.parse_args()\r
\r
    platforms = [p.strip() for p in args.platforms.split(",")]\r
    print(f"\\n📱 Generating content for: {', '.join(platforms)}")\r
    print(f"📌 Topic: {args.topic}\\n")\r
\r
    content = generate_social_content(args.topic, args.brand, platforms)\r
\r
    print("=" * 60)\r
    print("✍️  SOCIAL MEDIA CONTENT")\r
    print("=" * 60)\r
    print(content)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Gm=`title: social-media-content-agent\r
description: Generates platform-optimized content for Twitter, LinkedIn, and Instagram\r
author: ashishpatel26\r
language: python\r
framework: crewai\r
tags: [social-media, content, marketing, crewai, copywriting]\r
industry: marketing\r
difficulty: beginner\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,Hm=`crewai==0.80.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,Um=`# Unit Test Generator Agent\r
\r
Analyzes Python code and generates comprehensive pytest test suites — happy paths, edge cases, and error conditions.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Generate tests for a Python file\r
python agent.py --file my_module.py\r
\r
# Generate tests for inline code\r
python agent.py --code "def divide(a, b): return a / b"\r
\r
# Specify output file\r
python agent.py --file utils.py --output tests/test_utils.py\r
\`\`\`\r
\r
## Example\r
\r
Input: \`shopping_cart.py\` with add_item, remove_item, total methods  \r
Output: \`test_shopping.py\` with 20+ pytest tests using fixtures, parametrize, and mocking\r
`,Bm=`"""\r
Unit Test Generator Agent.\r
\r
Analyzes Python code and generates comprehensive pytest test suites\r
covering happy paths, edge cases, and error conditions.\r
\r
Usage:\r
    python agent.py --file path/to/module.py\r
    python agent.py --code "def calculate_bmi(weight, height): return weight / height**2"\r
"""\r
\r
import argparse\r
import os\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
TEST_PROMPT = """You are an expert Python test engineer. Generate a comprehensive pytest test suite for the provided code.\r
\r
Requirements:\r
1. Use pytest fixtures where appropriate\r
2. Test happy paths (normal expected inputs)\r
3. Test edge cases (boundary values, empty inputs)\r
4. Test error conditions (invalid inputs, exceptions)\r
5. Use descriptive test names: \`test_function_name_scenario\`\r
6. Add brief docstrings to each test\r
7. Use \`pytest.mark.parametrize\` for repetitive tests\r
8. Mock external dependencies (API calls, file I/O, DB)\r
9. Aim for 90%+ code coverage\r
\r
Output ONLY the complete test file content, ready to run with \`pytest\`."""\r
\r
SAMPLE_CODE = '''\r
def calculate_discount(price: float, discount_percent: float) -> float:\r
    """Calculate discounted price."""\r
    if price < 0:\r
        raise ValueError("Price cannot be negative")\r
    if not 0 <= discount_percent <= 100:\r
        raise ValueError("Discount must be between 0 and 100")\r
    return price * (1 - discount_percent / 100)\r
\r
\r
def find_longest_word(text: str) -> str:\r
    """Find the longest word in a text string."""\r
    if not text or not text.strip():\r
        return ""\r
    words = text.split()\r
    return max(words, key=len)\r
\r
\r
class ShoppingCart:\r
    def __init__(self):\r
        self.items = {}\r
\r
    def add_item(self, name: str, price: float, quantity: int = 1):\r
        if price < 0:\r
            raise ValueError("Price cannot be negative")\r
        if quantity < 1:\r
            raise ValueError("Quantity must be at least 1")\r
        if name in self.items:\r
            self.items[name]["quantity"] += quantity\r
        else:\r
            self.items[name] = {"price": price, "quantity": quantity}\r
\r
    def remove_item(self, name: str):\r
        if name not in self.items:\r
            raise KeyError(f"Item '{name}' not in cart")\r
        del self.items[name]\r
\r
    def total(self) -> float:\r
        return sum(item["price"] * item["quantity"] for item in self.items.values())\r
'''\r
\r
\r
def generate_tests(code: str, filename: str = "module") -> str:\r
    llm = ChatOpenAI(model="gpt-4o", temperature=0)\r
    messages = [\r
        SystemMessage(content=TEST_PROMPT),\r
        HumanMessage(content=f"Generate tests for this Python code (from \`{filename}\`):\\n\\n\`\`\`python\\n{code}\\n\`\`\`"),\r
    ]\r
    response = llm.invoke(messages)\r
    return response.content\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Unit Test Generator")\r
    group = parser.add_mutually_exclusive_group()\r
    group.add_argument("--file", help="Python file to generate tests for")\r
    group.add_argument("--code", help="Inline code to generate tests for")\r
    parser.add_argument("--output", help="Output file path (default: test_<name>.py)")\r
    args = parser.parse_args()\r
\r
    if args.file:\r
        with open(args.file) as f:\r
            code = f.read()\r
        module_name = os.path.splitext(os.path.basename(args.file))[0]\r
        print(f"\\n🧪 Generating tests for: {args.file}")\r
    elif args.code:\r
        code = args.code\r
        module_name = "module"\r
        print(f"\\n🧪 Generating tests for inline code")\r
    else:\r
        code = SAMPLE_CODE\r
        module_name = "shopping"\r
        print(f"\\n🧪 Generating tests for sample code")\r
\r
    tests = generate_tests(code, module_name)\r
\r
    # Clean up markdown fences if present\r
    if tests.startswith("\`\`\`"):\r
        lines = tests.split("\\n")\r
        tests = "\\n".join(lines[1:-1] if lines[-1] == "\`\`\`" else lines[1:])\r
\r
    output_file = args.output or f"test_{module_name}.py"\r
    with open(output_file, "w") as f:\r
        f.write(tests)\r
\r
    print(f"\\n✅ Tests saved to: {output_file}")\r
    print(f"\\nRun with: pytest {output_file} -v")\r
    print("\\n" + "=" * 60)\r
    print(tests[:500] + "..." if len(tests) > 500 else tests)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Wm=`title: unit-test-generator-agent\r
description: Generates comprehensive pytest test suites from Python code\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [testing, pytest, code-quality, automation, software-development]\r
industry: software-development\r
difficulty: intermediate\r
llm: gpt-4o\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,Vm=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
pytest==8.3.0\r
`,$m=`# Documentation Writer Agent\r
\r
Generates comprehensive documentation for Python modules: README, API reference, and Google-style docstrings.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Generate README + docstrings\r
python agent.py --file my_module.py\r
\r
# README only\r
python agent.py --file utils.py --format readme\r
\r
# Docstrings only  \r
python agent.py --file api.py --format docstrings\r
\`\`\`\r
`,Qm=`"""\r
Documentation Writer Agent.\r
\r
Generates comprehensive documentation for Python modules:\r
README, API reference, docstrings, and usage examples.\r
\r
Usage:\r
    python agent.py --file path/to/module.py\r
    python agent.py --file src/utils.py --format readme\r
"""\r
\r
import argparse\r
import ast\r
import os\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
\r
def extract_structure(code: str) -> str:\r
    """Extract functions, classes, and their signatures from Python code."""\r
    try:\r
        tree = ast.parse(code)\r
        structure = []\r
\r
        for node in ast.walk(tree):\r
            if isinstance(node, ast.FunctionDef):\r
                args = [a.arg for a in node.args.args]\r
                structure.append(f"def {node.name}({', '.join(args)})")\r
            elif isinstance(node, ast.ClassDef):\r
                structure.append(f"class {node.name}:")\r
                for item in node.body:\r
                    if isinstance(item, ast.FunctionDef):\r
                        args = [a.arg for a in item.args.args]\r
                        structure.append(f"  def {item.name}({', '.join(args)})")\r
\r
        return "\\n".join(structure)\r
    except Exception:\r
        return "Could not parse structure"\r
\r
\r
README_PROMPT = """You are a technical documentation expert. Generate a complete, professional README.md for this Python module.\r
\r
Include:\r
1. Module title and one-line description\r
2. Features list (bullet points)\r
3. Installation section\r
4. Quick Start with working code example\r
5. API Reference (each public function/class with parameters, return type, example)\r
6. Configuration (environment variables if any)\r
7. Error Handling section\r
\r
Write in clear, developer-friendly markdown. Be specific and concrete."""\r
\r
DOCSTRING_PROMPT = """Add comprehensive Google-style docstrings to every function and class that lacks them.\r
\r
Format:\r
\`\`\`\r
def function(param: type) -> return_type:\r
    \\"\\"\\"One-line summary.\r
\r
    Args:\r
        param: Description of parameter.\r
\r
    Returns:\r
        Description of return value.\r
\r
    Raises:\r
        ErrorType: When this error is raised.\r
\r
    Example:\r
        >>> function(value)\r
        expected_output\r
    \\"\\"\\"\r
\`\`\`\r
\r
Return the complete updated Python file with docstrings added."""\r
\r
\r
def generate_readme(code: str, filename: str) -> str:\r
    llm = ChatOpenAI(model="gpt-4o", temperature=0)\r
    structure = extract_structure(code)\r
    messages = [\r
        SystemMessage(content=README_PROMPT),\r
        HumanMessage(content=f"File: {filename}\\n\\nCode structure:\\n{structure}\\n\\nFull code:\\n\`\`\`python\\n{code[:3000]}\\n\`\`\`"),\r
    ]\r
    return llm.invoke(messages).content\r
\r
\r
def add_docstrings(code: str, filename: str) -> str:\r
    llm = ChatOpenAI(model="gpt-4o", temperature=0)\r
    messages = [\r
        SystemMessage(content=DOCSTRING_PROMPT),\r
        HumanMessage(content=f"Add docstrings to this Python file ({filename}):\\n\\n\`\`\`python\\n{code}\\n\`\`\`"),\r
    ]\r
    result = llm.invoke(messages).content\r
    # Clean markdown fences\r
    if "\`\`\`python" in result:\r
        result = result.split("\`\`\`python")[1].split("\`\`\`")[0].strip()\r
    return result\r
\r
\r
SAMPLE_CODE = r'''\r
import hashlib\r
import re\r
from datetime import datetime\r
\r
\r
def validate_email(email: str) -> bool:\r
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'\r
    return bool(re.match(pattern, email))\r
\r
\r
def hash_password(password: str, salt: str = "") -> str:\r
    combined = f"{password}{salt}"\r
    return hashlib.sha256(combined.encode()).hexdigest()\r
\r
\r
def parse_date(date_string: str) -> datetime:\r
    formats = ["%Y-%m-%d", "%d/%m/%Y", "%m-%d-%Y", "%Y%m%d"]\r
    for fmt in formats:\r
        try:\r
            return datetime.strptime(date_string, fmt)\r
        except ValueError:\r
            continue\r
    raise ValueError(f"Unable to parse date: {date_string}")\r
\r
\r
class UserValidator:\r
    MIN_PASSWORD_LENGTH = 8\r
\r
    def validate_username(self, username: str) -> tuple[bool, str]:\r
        if len(username) < 3:\r
            return False, "Username too short"\r
        if not re.match(r'^[a-zA-Z0-9_]+$', username):\r
            return False, "Only letters, numbers, underscores allowed"\r
        return True, ""\r
\r
    def validate_password(self, password: str) -> tuple[bool, str]:\r
        if len(password) < self.MIN_PASSWORD_LENGTH:\r
            return False, f"Password must be at least {self.MIN_PASSWORD_LENGTH} characters"\r
        if not re.search(r'[A-Z]', password):\r
            return False, "Password must contain at least one uppercase letter"\r
        if not re.search(r'\\d', password):\r
            return False, "Password must contain at least one digit"\r
        return True, ""\r
'''\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Documentation Writer Agent")\r
    group = parser.add_mutually_exclusive_group()\r
    group.add_argument("--file", help="Python file to document")\r
    group.add_argument("--code", help="Inline code to document")\r
    parser.add_argument("--format", choices=["readme", "docstrings", "both"], default="both", help="Documentation format to generate")\r
    args = parser.parse_args()\r
\r
    if args.file:\r
        with open(args.file) as f:\r
            code = f.read()\r
        filename = os.path.basename(args.file)\r
    elif args.code:\r
        code = args.code\r
        filename = "module.py"\r
    else:\r
        code = SAMPLE_CODE\r
        filename = "validators.py"\r
        print("\\n📝 Using sample validators module")\r
\r
    print(f"\\n✍️  Generating documentation for: {filename}\\n")\r
\r
    if args.format in ("readme", "both"):\r
        print("📄 Generating README...")\r
        readme = generate_readme(code, filename)\r
        readme_file = f"README_{filename.replace('.py', '')}.md"\r
        with open(readme_file, "w") as f:\r
            f.write(readme)\r
        print(f"✅ README saved to: {readme_file}")\r
\r
    if args.format in ("docstrings", "both"):\r
        print("📝 Adding docstrings...")\r
        documented_code = add_docstrings(code, filename)\r
        output_file = f"documented_{filename}"\r
        with open(output_file, "w") as f:\r
            f.write(documented_code)\r
        print(f"✅ Documented code saved to: {output_file}")\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Ym=`title: documentation-writer-agent\r
description: Generates README and docstrings for Python modules\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [documentation, docstrings, readme, software-development]\r
industry: software-development\r
difficulty: intermediate\r
llm: gpt-4o\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,Km=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,Jm=`# Recipe Recommendation Agent\r
\r
Suggests 3 recipes from your available ingredients with full instructions, nutritional info, and chef tips.\r
\r
**Framework**: LangChain  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
python agent.py --ingredients "chicken, garlic, lemon, rosemary"\r
python agent.py --ingredients "tofu, broccoli, ginger, soy sauce" --diet vegan --time 20\r
python agent.py --ingredients "pasta, tomatoes, basil, parmesan" --servings 4\r
\`\`\`\r
`,Xm=`"""\r
Recipe Recommendation Agent using Agno-style single agent.\r
\r
Suggests recipes based on available ingredients, dietary restrictions,\r
and time constraints.\r
\r
Usage:\r
    python agent.py --ingredients "chicken, garlic, lemon, rosemary"\r
    python agent.py --ingredients "tofu, broccoli, soy sauce" --diet vegan --time 20\r
"""\r
\r
import argparse\r
import json\r
import os\r
import re\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
RECIPE_PROMPT = """You are a professional chef and nutritionist. Given available ingredients and constraints,\r
suggest 3 recipes. Return JSON:\r
{\r
  "recipes": [\r
    {\r
      "name": "Recipe Name",\r
      "cuisine": "Italian/Asian/etc",\r
      "difficulty": "Easy/Medium/Hard",\r
      "prep_time": "X minutes",\r
      "cook_time": "X minutes",\r
      "servings": N,\r
      "ingredients_needed": ["ingredient (amount)"],\r
      "missing_ingredients": ["optional additions"],\r
      "instructions": ["Step 1: ...", "Step 2: ..."],\r
      "nutrition_per_serving": {"calories": N, "protein": "Xg", "carbs": "Xg", "fat": "Xg"},\r
      "tips": "Chef's tip"\r
    }\r
  ],\r
  "recommended": "Recipe Name (best match)"\r
}\r
Return only valid JSON."""\r
\r
\r
def parse_json_response(text: str) -> dict:\r
    cleaned = text.strip()\r
    if cleaned.startswith("\`\`\`"):\r
        cleaned = re.sub(r"^\`\`\`(?:json)?\\s*", "", cleaned)\r
        cleaned = re.sub(r"\\s*\`\`\`$", "", cleaned)\r
    match = re.search(r"\\{.*\\}", cleaned, re.DOTALL)\r
    if match:\r
        cleaned = match.group(0)\r
    return json.loads(cleaned)\r
\r
\r
def get_recipes(ingredients: list[str], diet: str, time_limit: int, servings: int) -> dict:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.5)\r
\r
    constraints = []\r
    if diet:\r
        constraints.append(f"Dietary restriction: {diet}")\r
    if time_limit:\r
        constraints.append(f"Max total time: {time_limit} minutes")\r
    if servings:\r
        constraints.append(f"Servings needed: {servings}")\r
\r
    messages = [\r
        SystemMessage(content=RECIPE_PROMPT),\r
        HumanMessage(content=f"Available ingredients: {', '.join(ingredients)}\\n\\nConstraints:\\n{chr(10).join(constraints) if constraints else 'None'}"),\r
    ]\r
\r
    response = llm.invoke(messages)\r
    return parse_json_response(response.content)\r
\r
\r
def display_recipe(recipe: dict):\r
    print(f"\\n🍽️  {recipe.get('name', 'Recipe')} ({recipe.get('cuisine', 'N/A')})")\r
    print(f"⏱️  Prep: {recipe.get('prep_time', 'N/A')} | Cook: {recipe.get('cook_time', 'N/A')} | Difficulty: {recipe.get('difficulty', 'N/A')}")\r
    print(f"👥 Serves: {recipe.get('servings', 'N/A')}")\r
    print(f"\\n📝 Ingredients:")\r
    for ing in recipe.get("ingredients_needed", []):\r
        print(f"  • {ing}")\r
    if recipe.get("missing_ingredients"):\r
        print(f"\\n➕ Optional additions: {', '.join(recipe['missing_ingredients'])}")\r
    print(f"\\n👨‍🍳 Instructions:")\r
    for i, step in enumerate(recipe.get("instructions", []), 1):\r
        print(f"  {i}. {step}")\r
    n = recipe.get("nutrition_per_serving", {})\r
    if n:\r
        print(f"\\n🥗 Nutrition: {n.get('calories', '?')} cal | Protein: {n.get('protein', '?')} | Carbs: {n.get('carbs', '?')} | Fat: {n.get('fat', '?')}")\r
    if recipe.get("tips"):\r
        print(f"\\n💡 Chef's tip: {recipe['tips']}")\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Recipe Recommendation Agent")\r
    parser.add_argument("--ingredients", default="chicken breast, garlic, lemon, olive oil, rosemary, potatoes", help="Comma-separated ingredients")\r
    parser.add_argument("--diet", default="", help="Dietary restriction (vegan, vegetarian, gluten-free, keto, etc.)")\r
    parser.add_argument("--time", type=int, default=0, help="Max cooking time in minutes")\r
    parser.add_argument("--servings", type=int, default=2, help="Number of servings")\r
    args = parser.parse_args()\r
\r
    ingredients = [i.strip() for i in args.ingredients.split(",")]\r
    print(f"\\n🥘 Finding recipes with: {', '.join(ingredients)}")\r
    if args.diet:\r
        print(f"🥗 Diet: {args.diet}")\r
    if args.time:\r
        print(f"⏱️  Max time: {args.time} minutes")\r
\r
    result = get_recipes(ingredients, args.diet, args.time, args.servings)\r
\r
    print("\\n" + "=" * 60)\r
    recipes = result.get("recipes", [])\r
    recommended = result.get("recommended") or (recipes[0].get("name", "N/A") if recipes else "N/A")\r
    print("✅ RECOMMENDED:", recommended)\r
    print("=" * 60)\r
\r
    for recipe in recipes:\r
        display_recipe(recipe)\r
        print("\\n" + "-" * 40)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,Zm=`title: recipe-recommendation-agent\r
description: Suggests recipes from available ingredients with instructions and nutrition info\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [recipes, food, nutrition, recommendation]\r
industry: food\r
difficulty: beginner\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,eg=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,ng=`# Job Application Agent\r
\r
CrewAI agent that generates a complete job application package: cover letter, tailored resume bullets, interview questions, and salary range.\r
\r
**Framework**: CrewAI  \r
**LLM**: GPT-4o-mini  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
# Uses built-in sample\r
python agent.py\r
\r
# Your own job + profile\r
python agent.py \\\r
  --job-desc "$(cat job_posting.txt)" \\\r
  --candidate "$(cat my_profile.txt)"\r
\`\`\`\r
\r
## Output includes\r
\r
- Tailored cover letter (250-300 words)\r
- Top 5 resume bullets to highlight\r
- 10 interview questions with answer frameworks\r
- Salary negotiation range\r
`,tg=`"""\r
Job Application Agent using CrewAI.\r
\r
Analyzes a job description and a candidate profile, then generates:\r
- Tailored cover letter\r
- Resume bullet points to highlight\r
- Interview preparation questions\r
\r
Usage:\r
    python agent.py --job-desc "Senior Python Engineer at Stripe..." --candidate "7 years Python, FastAPI..."\r
"""\r
\r
import argparse\r
import os\r
\r
from crewai import Agent, Crew, Process, Task\r
from dotenv import load_dotenv\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
SAMPLE_JOB = """Senior Python Engineer at Stripe\r
We're looking for a Senior Python Engineer to join our API Platform team.\r
\r
Requirements:\r
- 5+ years Python development\r
- Experience with distributed systems\r
- Strong understanding of REST APIs and microservices\r
- Experience with PostgreSQL, Redis\r
- Kubernetes experience preferred\r
- Strong communication skills\r
\r
Responsibilities:\r
- Design and build high-performance APIs handling millions of requests/day\r
- Lead technical design reviews\r
- Mentor junior engineers\r
- Collaborate with product managers on technical feasibility\r
"""\r
\r
SAMPLE_CANDIDATE = """\r
Jane Doe — 7 years Python experience\r
Current role: Senior Software Engineer at DataCorp\r
Skills: Python, FastAPI, Django, PostgreSQL, Redis, Docker, Kubernetes, AWS\r
Achievements:\r
- Built API platform handling 5M requests/day\r
- Led team of 4 engineers\r
- Reduced API latency by 40%\r
- Mentored 3 junior engineers\r
Education: BS Computer Science, UC Berkeley\r
"""\r
\r
\r
def run_job_application_crew(job_desc: str, candidate_profile: str) -> str:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.4)\r
\r
    analyst = Agent(\r
        role="Job Requirements Analyst",\r
        goal="Analyze the job description and identify key requirements, values, and culture signals",\r
        backstory="Ex-hiring manager at FAANG with 10 years recruiting experience. Expert at decoding job descriptions.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    writer = Agent(\r
        role="Career Coach and Application Writer",\r
        goal="Create tailored application materials that maximize interview chances",\r
        backstory="Career coach who has helped 500+ candidates land roles at top tech companies.",\r
        llm=llm,\r
        verbose=False,\r
    )\r
\r
    analyst_task = Task(\r
        description=f"""Analyze this job description:\r
{job_desc}\r
\r
Extract: top 5 required skills, culture signals, what this company values most, potential red flags, and key phrases to mirror in the application.""",\r
        agent=analyst,\r
        expected_output="Job analysis: key requirements, culture signals, important keywords",\r
    )\r
\r
    application_task = Task(\r
        description=f"""Using the job analysis, create application materials for this candidate:\r
{candidate_profile}\r
\r
Produce:\r
1. COVER LETTER (250-300 words, 3 paragraphs: hook, evidence, close)\r
2. TOP 5 RESUME BULLETS TO HIGHLIGHT (tailored to this specific role)\r
3. 10 LIKELY INTERVIEW QUESTIONS (5 behavioral, 5 technical) with suggested answer frameworks\r
4. NEGOTIATION RANGE ESTIMATE based on role seniority and company""",\r
        agent=writer,\r
        expected_output="Cover letter, resume bullets, interview questions, salary range",\r
        context=[analyst_task],\r
    )\r
\r
    crew = Crew(\r
        agents=[analyst, writer],\r
        tasks=[analyst_task, application_task],\r
        process=Process.sequential,\r
        verbose=False,\r
    )\r
\r
    return str(crew.kickoff())\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Job Application Agent")\r
    parser.add_argument("--job-desc", default=SAMPLE_JOB, help="Job description text")\r
    parser.add_argument("--candidate", default=SAMPLE_CANDIDATE, help="Candidate profile summary")\r
    args = parser.parse_args()\r
\r
    print("\\n💼 Preparing job application materials...\\n")\r
    result = run_job_application_crew(args.job_desc, args.candidate)\r
\r
    print("=" * 60)\r
    print("📋 JOB APPLICATION PACKAGE")\r
    print("=" * 60)\r
    print(result)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,rg=`title: job-application-agent\r
description: Generates cover letter, interview prep, and salary range from job description + candidate profile\r
author: ashishpatel26\r
language: python\r
framework: crewai\r
tags: [hr, job-search, cover-letter, interview-prep, recruitment]\r
industry: human-resources\r
difficulty: intermediate\r
llm: gpt-4o-mini\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,ag=`crewai==0.80.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,ig=`# Competitive Analysis Agent\r
\r
LangGraph multi-step agent that identifies competitors, analyzes each one, and generates a strategic competitive report.\r
\r
**Framework**: LangGraph  \r
**LLM**: GPT-4o-mini + GPT-4o  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
python agent.py --company "Notion" --industry "productivity software"\r
python agent.py --company "Stripe" --industry "payment processing"\r
python agent.py --company "Figma" --industry "design tools"\r
\`\`\`\r
\r
## Output\r
\r
- 5 competitor analyses\r
- Executive summary\r
- Market gaps and opportunities\r
- 5 strategic recommendations\r
- Threat assessment by competitor\r
`,sg=`"""\r
Competitive Analysis Agent using LangGraph.\r
\r
Multi-step agent that analyzes competitors:\r
1. Identifies key competitors\r
2. Analyzes each competitor's strengths/weaknesses\r
3. Generates competitive positioning recommendations\r
\r
Usage:\r
    python agent.py --company "Notion" --industry "productivity software"\r
"""\r
\r
import argparse\r
import os\r
from typing import Annotated, TypedDict\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
from langgraph.graph import END, StateGraph\r
from langgraph.graph.message import add_messages\r
\r
load_dotenv()\r
\r
\r
class AnalysisState(TypedDict):\r
    messages: Annotated[list, add_messages]\r
    company: str\r
    industry: str\r
    competitors: list[str]\r
    competitor_analyses: dict[str, str]\r
    final_report: str\r
\r
\r
def identify_competitors(state: AnalysisState) -> AnalysisState:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
    response = llm.invoke([\r
        SystemMessage(content="You are a market research analyst. List exactly 5 main competitors as a comma-separated list. Nothing else."),\r
        HumanMessage(content=f"Company: {state['company']}\\nIndustry: {state['industry']}\\n\\nList 5 main competitors:"),\r
    ])\r
    competitors = [c.strip() for c in response.content.split(",")][:5]\r
    return {"competitors": competitors, "messages": [response]}\r
\r
\r
def analyze_competitor(state: AnalysisState) -> AnalysisState:\r
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
    analyses = {}\r
\r
    for competitor in state["competitors"]:\r
        response = llm.invoke([\r
            SystemMessage(content="Provide a concise competitive analysis in 100 words covering: main products, strengths (2), weaknesses (2), pricing model, target market."),\r
            HumanMessage(content=f"Analyze {competitor} vs {state['company']} in {state['industry']}:"),\r
        ])\r
        analyses[competitor] = response.content\r
\r
    return {"competitor_analyses": analyses}\r
\r
\r
def generate_report(state: AnalysisState) -> AnalysisState:\r
    llm = ChatOpenAI(model="gpt-4o", temperature=0)\r
\r
    analyses_text = "\\n\\n".join(\r
        f"**{name}:**\\n{analysis}"\r
        for name, analysis in state["competitor_analyses"].items()\r
    )\r
\r
    response = llm.invoke([\r
        SystemMessage(content="""You are a strategic consultant. Create a competitive analysis report with:\r
1. Executive Summary (3 sentences)\r
2. Competitive Landscape Table (company, strength, weakness, price)\r
3. Market Gaps & Opportunities (3 bullet points)\r
4. Strategic Recommendations for {company} (5 action items)\r
5. Threat Assessment (High/Medium/Low for each competitor)""".replace("{company}", state["company"])),\r
        HumanMessage(content=f"Company: {state['company']}\\nIndustry: {state['industry']}\\n\\nCompetitor analyses:\\n{analyses_text}"),\r
    ])\r
\r
    return {"final_report": response.content, "messages": [response]}\r
\r
\r
def build_graph():\r
    graph = StateGraph(AnalysisState)\r
    graph.add_node("identify", identify_competitors)\r
    graph.add_node("analyze", analyze_competitor)\r
    graph.add_node("report", generate_report)\r
    graph.set_entry_point("identify")\r
    graph.add_edge("identify", "analyze")\r
    graph.add_edge("analyze", "report")\r
    graph.add_edge("report", END)\r
    return graph.compile()\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Competitive Analysis Agent")\r
    parser.add_argument("--company", default="Notion", help="Company to analyze")\r
    parser.add_argument("--industry", default="productivity and collaboration software", help="Industry")\r
    args = parser.parse_args()\r
\r
    print(f"\\n🔍 Analyzing competitive landscape for {args.company}...\\n")\r
\r
    agent = build_graph()\r
    result = agent.invoke({\r
        "company": args.company,\r
        "industry": args.industry,\r
        "messages": [],\r
        "competitors": [],\r
        "competitor_analyses": {},\r
        "final_report": "",\r
    })\r
\r
    print(f"🏢 Competitors identified: {', '.join(result['competitors'])}\\n")\r
    print("=" * 60)\r
    print("📊 COMPETITIVE ANALYSIS REPORT")\r
    print("=" * 60)\r
    print(result["final_report"])\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,og=`title: competitive-analysis-agent\r
description: Multi-step LangGraph agent for comprehensive competitive landscape analysis\r
author: ashishpatel26\r
language: python\r
framework: langgraph\r
tags: [business, competitive-analysis, strategy, langgraph, market-research]\r
industry: business\r
difficulty: advanced\r
llm: gpt-4o\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,lg=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
langgraph==0.2.0\r
python-dotenv==1.0.1\r
`,ug=`# Multi-Agent Debate System\r
\r
Two AI agents debate any topic from opposing sides, with an impartial AI judge declaring a winner.\r
\r
**Framework**: LangChain (multi-agent)  \r
**LLM**: GPT-4o-mini (debaters) + GPT-4o (judge)  \r
\r
## Setup\r
\r
\`\`\`bash\r
pip install -r requirements.txt\r
cp .env.example .env\r
\`\`\`\r
\r
## Run\r
\r
\`\`\`bash\r
python agent.py --topic "AI will eliminate more jobs than it creates"\r
python agent.py --topic "Remote work is better than office work" --rounds 3\r
python agent.py --topic "Cryptocurrency will replace fiat currency" --rounds 2\r
\`\`\`\r
\r
## Architecture\r
\r
\`\`\`\r
Topic → [PRO Agent] ↔ [CON Agent] (N rounds) → [Judge Agent] → Verdict\r
\`\`\`\r
\r
The judge scores each side and provides a balanced synthesis conclusion.\r
`,cg=`"""\r
Multi-Agent Debate System using AutoGen-style orchestration.\r
\r
Two AI agents debate a topic from opposing sides, moderated by a judge\r
who declares a winner and synthesizes the key arguments.\r
\r
Usage:\r
    python agent.py --topic "AI will eliminate more jobs than it creates"\r
    python agent.py --topic "Remote work is better than office work" --rounds 3\r
"""\r
\r
import argparse\r
import os\r
\r
from dotenv import load_dotenv\r
from langchain_core.messages import HumanMessage, SystemMessage\r
from langchain_openai import ChatOpenAI\r
\r
load_dotenv()\r
\r
\r
class DebateAgent:\r
    def __init__(self, name: str, position: str, expertise: str):\r
        self.name = name\r
        self.position = position\r
        self.expertise = expertise\r
        self.llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.6)\r
        self.arguments = []\r
\r
    def make_argument(self, topic: str, round_num: int, opponent_last_arg: str = "") -> str:\r
        system_msg = f"""You are {self.name}, a {self.expertise}.\r
You are arguing {self.position} on this topic.\r
Make compelling, evidence-based arguments. Be direct and persuasive.\r
Keep response under 150 words. Round {round_num}."""\r
\r
        if opponent_last_arg:\r
            user_msg = f"Topic: {topic}\\n\\nYour opponent just said: '{opponent_last_arg}'\\n\\nRespond and advance your argument:"\r
        else:\r
            user_msg = f"Topic: {topic}\\n\\nMake your opening argument for {self.position.upper()}:"\r
\r
        response = self.llm.invoke([\r
            SystemMessage(content=system_msg),\r
            HumanMessage(content=user_msg),\r
        ])\r
        argument = response.content\r
        self.arguments.append(argument)\r
        return argument\r
\r
\r
class DebateJudge:\r
    def __init__(self):\r
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0)\r
\r
    def evaluate(self, topic: str, pro_agent: DebateAgent, con_agent: DebateAgent) -> dict:\r
        pro_args = "\\n\\n".join(f"Round {i+1}: {a}" for i, a in enumerate(pro_agent.arguments))\r
        con_args = "\\n\\n".join(f"Round {i+1}: {a}" for i, a in enumerate(con_agent.arguments))\r
\r
        response = self.llm.invoke([\r
            SystemMessage(content="""You are an impartial debate judge. Evaluate both sides fairly.\r
Return a structured verdict with: winner, score (out of 10 each), strongest argument per side, key insights, and balanced synthesis conclusion."""),\r
            HumanMessage(content=f"""Topic: "{topic}"\r
\r
PRO arguments ({pro_agent.name}):\r
{pro_args}\r
\r
CON arguments ({con_agent.name}):\r
{con_args}\r
\r
Provide your verdict:"""),\r
        ])\r
        return {"verdict": response.content}\r
\r
\r
def run_debate(topic: str, rounds: int = 2) -> None:\r
    pro = DebateAgent(\r
        name="Dr. Alex Chen",\r
        position="FOR",\r
        expertise="technology economist and AI researcher"\r
    )\r
    con = DebateAgent(\r
        name="Prof. Sarah Martinez",\r
        position="AGAINST",\r
        expertise="labor economist and social policy expert"\r
    )\r
    judge = DebateJudge()\r
\r
    print(f"\\n{'='*60}")\r
    print(f"⚖️  DEBATE: {topic}")\r
    print(f"{'='*60}")\r
    print(f"🟢 FOR: {pro.name} ({pro.expertise})")\r
    print(f"🔴 AGAINST: {con.name} ({con.expertise})")\r
    print(f"🏛️  Rounds: {rounds}")\r
    print("=" * 60)\r
\r
    last_con_arg = ""\r
    last_pro_arg = ""\r
\r
    for round_num in range(1, rounds + 1):\r
        print(f"\\n--- Round {round_num} ---\\n")\r
\r
        pro_arg = pro.make_argument(topic, round_num, last_con_arg)\r
        print(f"🟢 {pro.name} (FOR):")\r
        print(pro_arg)\r
\r
        con_arg = con.make_argument(topic, round_num, pro_arg)\r
        print(f"\\n🔴 {con.name} (AGAINST):")\r
        print(con_arg)\r
\r
        last_pro_arg = pro_arg\r
        last_con_arg = con_arg\r
\r
    print(f"\\n{'='*60}")\r
    print("🏛️  JUDGE'S VERDICT")\r
    print("=" * 60)\r
    verdict = judge.evaluate(topic, pro, con)\r
    print(verdict["verdict"])\r
\r
\r
def main():\r
    parser = argparse.ArgumentParser(description="Multi-Agent Debate System")\r
    parser.add_argument("--topic", default="AI will create more jobs than it eliminates over the next decade", help="Debate topic")\r
    parser.add_argument("--rounds", type=int, default=2, help="Number of debate rounds (1-4)")\r
    args = parser.parse_args()\r
\r
    rounds = max(1, min(4, args.rounds))\r
    run_debate(args.topic, rounds)\r
\r
\r
if __name__ == "__main__":\r
    main()\r
`,dg=`title: multi-agent-debate-system\r
description: Two AI agents debate any topic with an AI judge scoring the outcome\r
author: ashishpatel26\r
language: python\r
framework: langchain\r
tags: [multi-agent, debate, reasoning, research, argumentation]\r
industry: research\r
difficulty: advanced\r
llm: gpt-4o\r
entrypoint: agent.py\r
requirements: requirements.txt\r
`,pg=`langchain==0.3.0\r
langchain-core==0.3.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,gc=`# CrewAI with FastMCP Server Integration Course\r
\r
This course teaches beginners how to use CrewAI with FastMCP server access through step-by-step programming examples.\r
\r
## Course Overview\r
\r
This course is designed for beginner developers with basic Python knowledge who want to learn how to integrate CrewAI agents with FastMCP servers. The course covers fundamental concepts, practical implementation, and advanced patterns for building intelligent agent workflows.\r
\r
## Lessons\r
\r
### Lesson 1: Setting up CrewAI with MCP Server Access\r
- Install required packages\r
- Set up environment variables\r
- Create a basic CrewAI agent\r
- Execute simple tasks\r
\r
\`\`\`mermaid\r
graph TD\r
    A[Install Packages] --> B[Set Environment Variables]\r
    B --> C[Create CrewAI Agent]\r
    C --> D[Execute Task]\r
\`\`\`\r
\r
### Lesson 2: Integrating MCP Server with CrewAI\r
- Create custom tools for MCP server access\r
- Configure authentication and connection settings\r
- Use MCP server data in agent tasks\r
- Handle errors and exceptions\r
\r
\`\`\`mermaid\r
graph TD\r
    A[Create FastMCP Tool] --> B[Configure Authentication]\r
    B --> C[Create Agent with Tool]\r
    C --> D[Execute Task with MCP Data]\r
    D --> E[Handle Response]\r
\`\`\`\r
\r
### Lesson 3: Advanced CrewAI Patterns with MCP Server\r
- Implement multi-agent workflows\r
- Use hierarchical processes\r
- Share data between agents through the MCP server\r
- Store and retrieve research findings\r
- Implement quality assurance processes\r
\r
\`\`\`mermaid\r
graph TD\r
    A[Researcher Agent] -->|Query| B(FastMCP Server)\r
    B -->|Return Data| A\r
    A -->|Share Findings| C[Writer Agent]\r
    C -->|Create Report| D[Reviewer Agent]\r
    D -->|Provide Feedback| C\r
    C -->|Final Report| E[Output]\r
\`\`\`\r
\r
## Getting Started\r
\r
### Using pip (traditional method)\r
\r
1. Install the required packages for the lesson you want to run:\r
\`\`\`bash\r
pip install -r lesson_01/requirements.txt\r
pip install -r lesson_02/requirements.txt\r
pip install -r lesson_03/requirements.txt\r
\`\`\`\r
\r
2. Set up your environment variables:\r
\`\`\`bash\r
export OPENAI_API_KEY=your-openai-api-key\r
export MCP_SERVER_URL=http://localhost:8000\r
\`\`\`\r
\r
3. Run the examples:\r
\`\`\`bash\r
python lesson_01/agent.py\r
python lesson_02/agent.py --topic "AI agents in healthcare"\r
\r
# Lesson 03 includes a matching FastMCP server and CrewAI wrappers.\r
python lesson_03/agent.py\r
# Optional: inspect/run the FastMCP server separately:\r
python lesson_03/mcp_server.py\r
\`\`\`\r
\r
### Using uv (recommended modern method)\r
\r
[uv](https://github.com/astral-sh/uv) is a fast Python package installer and resolver. To use uv:\r
\r
1. Install uv:\r
\`\`\`bash\r
pip install uv\r
\`\`\`\r
\r
2. Create and activate a virtual environment:\r
\`\`\`bash\r
uv venv\r
source .venv/Scripts/activate\r
\`\`\`\r
\r
3. Install dependencies:\r
\`\`\`bash\r
uv pip install -r lesson_01/requirements.txt\r
uv pip install -r lesson_02/requirements.txt\r
uv pip install -r lesson_03/requirements.txt\r
\`\`\`\r
\r
4. Set up your environment variables:\r
\`\`\`bash\r
export OPENAI_API_KEY=your-openai-api-key\r
export MCP_SERVER_URL=http://localhost:8000\r
\`\`\`\r
\r
5. Run the examples:\r
\`\`\`bash\r
python lesson_01/agent.py\r
python lesson_02/agent.py --topic "AI agents in healthcare"\r
\r
python lesson_03/agent.py\r
# Optional: inspect/run the FastMCP server separately:\r
python lesson_03/mcp_server.py\r
\`\`\`\r
\r
## Requirements\r
\r
- Python 3.8+\r
- CrewAI library\r
- FastMCP library\r
- OpenAI API key\r
- FastMCP server example for Lesson 03\r
\r
## Course Structure\r
\r
Each lesson includes:\r
- A lesson folder with \`agent.py\`, \`requirements.txt\`, and \`.env.example\`\r
- Clear objectives and expected outcomes\r
- Step-by-step implementation\r
- Best practices for error handling and security\r
\r
## Next Steps\r
\r
After completing this course, you should be able to:\r
- Create and configure CrewAI agents\r
- Integrate MCP servers with agent workflows\r
- Build complex multi-agent systems\r
- Implement data sharing between agents\r
- Design robust error handling for production systems\r
`,mg=`"""\r
Lesson 01: Your First CrewAI Agent\r
\r
Demonstrates the fundamentals of CrewAI:\r
- Creating agents with roles, goals, and backstories\r
- Defining tasks\r
- Running a simple crew\r
\r
Run: python agent.py\r
"""\r
\r
from crewai import Agent, Crew, Process, Task\r
from langchain_openai import ChatOpenAI\r
\r
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)\r
\r
# 1. Define the agent\r
researcher = Agent(\r
    role="AI Researcher",\r
    goal="Research and summarize the latest developments in AI agents",\r
    backstory="""You are a seasoned AI researcher who stays up-to-date with\r
    the latest papers, frameworks, and applications in the AI agent space.\r
    You write clear, accurate summaries for technical audiences.""",\r
    llm=llm,\r
    verbose=True,\r
)\r
\r
# 2. Define the task\r
research_task = Task(\r
    description="""Research and write a concise briefing on:\r
    "The current state of AI agents in 2025"\r
\r
    Cover:\r
    - What are AI agents and why they matter\r
    - Top 3 frameworks (CrewAI, LangGraph, AutoGen)\r
    - 2 real-world use cases making impact\r
    - What's coming next\r
\r
    Keep it under 300 words, technical audience.""",\r
    expected_output="A concise technical briefing on AI agents in 2025",\r
    agent=researcher,\r
)\r
\r
# 3. Create and run the crew\r
crew = Crew(\r
    agents=[researcher],\r
    tasks=[research_task],\r
    process=Process.sequential,\r
    verbose=True,\r
)\r
\r
if __name__ == "__main__":\r
    result = crew.kickoff()\r
    print("\\n" + "=" * 60)\r
    print("FINAL RESULT:")\r
    print("=" * 60)\r
    print(result)\r
`,gg=`crewai==0.80.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
`,fg=`"""\r
Lesson 02: Multi-Agent Crew with Tool Use\r
\r
Demonstrates:\r
- Multiple specialized agents with different roles\r
- Custom tools (web search, calculator)\r
- Sequential and hierarchical processes\r
- Agent collaboration patterns\r
\r
Run: python agent.py --topic "quantum computing applications"\r
"""\r
\r
import argparse\r
import os\r
\r
from crewai import Agent, Crew, Process, Task\r
from crewai.tools import BaseTool\r
from dotenv import load_dotenv\r
from langchain_openai import ChatOpenAI\r
from pydantic import Field\r
\r
load_dotenv()\r
\r
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)\r
\r
\r
# Custom Tool: Word Counter\r
class WordCountTool(BaseTool):\r
    name: str = "word_counter"\r
    description: str = "Count words in a text string. Input: text string."\r
\r
    def _run(self, text: str) -> str:\r
        count = len(text.split())\r
        return f"Word count: {count}"\r
\r
\r
# Custom Tool: Text Formatter\r
class TextFormatterTool(BaseTool):\r
    name: str = "text_formatter"\r
    description: str = "Format text as a numbered list. Input: comma-separated items."\r
\r
    def _run(self, items: str) -> str:\r
        item_list = [i.strip() for i in items.split(",")]\r
        return "\\n".join(f"{i+1}. {item}" for i, item in enumerate(item_list))\r
\r
\r
word_counter = WordCountTool()\r
formatter = TextFormatterTool()\r
\r
# Agent 1: Researcher\r
researcher = Agent(\r
    role="Senior Researcher",\r
    goal="Research topics thoroughly and provide factual, well-structured information",\r
    backstory="PhD researcher with expertise in synthesizing complex information from multiple sources.",\r
    llm=llm,\r
    tools=[word_counter],\r
    verbose=True,\r
)\r
\r
# Agent 2: Writer\r
writer = Agent(\r
    role="Technical Writer",\r
    goal="Transform research into clear, engaging content for technical audiences",\r
    backstory="Award-winning technical writer with 10 years experience in AI/ML documentation.",\r
    llm=llm,\r
    tools=[formatter],\r
    verbose=True,\r
)\r
\r
# Agent 3: Editor\r
editor = Agent(\r
    role="Content Editor",\r
    goal="Review and polish content for clarity, accuracy, and conciseness",\r
    backstory="Senior editor who ensures all content meets the highest quality standards.",\r
    llm=llm,\r
    verbose=True,\r
)\r
\r
\r
def run_crew(topic: str) -> str:\r
    research_task = Task(\r
        description=f"""Research the topic: "{topic}"\r
\r
        Find:\r
        1. Core definition and key concepts (3 bullet points)\r
        2. Current applications (3 real examples)\r
        3. Future potential (2 predictions)\r
        4. Key challenges or limitations\r
\r
        Use the word_counter tool to verify your output is under 250 words.""",\r
        expected_output="Research brief with definitions, applications, and future outlook",\r
        agent=researcher,\r
    )\r
\r
    writing_task = Task(\r
        description=f"""Transform the research into an engaging technical article about "{topic}".\r
\r
        Structure:\r
        - Hook opening (1-2 sentences)\r
        - What it is (clear definition)\r
        - Why it matters (use formatter tool for 3 key benefits as numbered list)\r
        - Real-world impact (2 examples)\r
        - Call to action closing\r
\r
        Target: 200-250 words, technical but accessible.""",\r
        expected_output="Polished technical article ready for publication",\r
        agent=writer,\r
        context=[research_task],\r
    )\r
\r
    editing_task = Task(\r
        description="""Review the article for:\r
        1. Accuracy (check facts align with research)\r
        2. Clarity (remove jargon, improve flow)\r
        3. Conciseness (trim wordiness)\r
        4. Add a compelling title and subtitle\r
\r
        Return the final polished version.""",\r
        expected_output="Final edited article with title, subtitle, and polished content",\r
        agent=editor,\r
        context=[research_task, writing_task],\r
    )\r
\r
    crew = Crew(\r
        agents=[researcher, writer, editor],\r
        tasks=[research_task, writing_task, editing_task],\r
        process=Process.sequential,\r
        verbose=True,\r
    )\r
\r
    return str(crew.kickoff())\r
\r
\r
if __name__ == "__main__":\r
    parser = argparse.ArgumentParser(description="Multi-Agent Research & Writing Crew")\r
    parser.add_argument("--topic", default="AI agents in healthcare", help="Research topic")\r
    args = parser.parse_args()\r
\r
    print(f"\\n🚀 Starting crew for topic: {args.topic}\\n")\r
    result = run_crew(args.topic)\r
\r
    print("\\n" + "=" * 60)\r
    print("FINAL ARTICLE:")\r
    print("=" * 60)\r
    print(result)\r
`,hg=`crewai==0.80.0\r
langchain-openai==0.2.0\r
python-dotenv==1.0.1\r
pydantic==2.9.0\r
`,yg=`"""\r
Lesson 03: CrewAI + FastMCP Integration\r
\r
Demonstrates:\r
- Building a FastMCP server that exposes tools\r
- Mirroring MCP server tools as CrewAI BaseTool wrappers\r
- Production pattern: keep tool contracts stable between MCP server and CrewAI wrappers\r
\r
Architecture:\r
    MCP Server tool contracts → CrewAI tool wrappers → Output\r
\r
Run the agent: python agent.py\r
Optional: run python mcp_server.py to inspect the matching FastMCP server tools.\r
"""\r
\r
import asyncio\r
import json\r
import os\r
from datetime import datetime\r
\r
from crewai import Agent, Crew, Process, Task\r
from crewai.tools import BaseTool\r
from dotenv import load_dotenv\r
from langchain_openai import ChatOpenAI\r
from pydantic import Field\r
\r
load_dotenv()\r
\r
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)\r
\r
\r
# CrewAI tool wrappers that mirror the FastMCP server's tool contracts.\r
# In production, replace these wrappers with a real MCP client adapter.\r
class DateTimeTool(BaseTool):\r
    name: str = "get_datetime"\r
    description: str = "Get the current date and time"\r
\r
    def _run(self, query: str = "") -> str:\r
        return datetime.now().strftime("%Y-%m-%d %H:%M:%S UTC")\r
\r
\r
class JsonFormatterTool(BaseTool):\r
    name: str = "format_as_json"\r
    description: str = "Format data as structured JSON. Input: a description of the data to format."\r
\r
    def _run(self, data_description: str) -> str:\r
        return json.dumps({\r
            "formatted": True,\r
            "timestamp": datetime.now().isoformat(),\r
            "data": data_description,\r
        }, indent=2)\r
\r
\r
class TaskPrioritizerTool(BaseTool):\r
    name: str = "prioritize_tasks"\r
    description: str = "Prioritize a list of tasks by importance. Input: comma-separated task list."\r
\r
    def _run(self, tasks_csv: str) -> str:\r
        tasks = [t.strip() for t in tasks_csv.split(",")]\r
        prioritized = [{"rank": i + 1, "task": task, "priority": ["HIGH", "MEDIUM", "LOW"][i % 3]}\r
                      for i, task in enumerate(tasks)]\r
        return json.dumps(prioritized, indent=2)\r
\r
\r
# MCP-connected agent\r
mcp_agent = Agent(\r
    role="MCP-Powered Workflow Orchestrator",\r
    goal="Use MCP tools to orchestrate complex workflows and produce structured outputs",\r
    backstory="""You are an advanced AI agent with access to MCP (Model Context Protocol) tools.\r
    You excel at using these tools to gather data, format outputs, and prioritize work.\r
    You always produce structured, actionable results.""",\r
    llm=llm,\r
    tools=[DateTimeTool(), JsonFormatterTool(), TaskPrioritizerTool()],\r
    verbose=True,\r
)\r
\r
# Coordinator agent\r
coordinator = Agent(\r
    role="Project Coordinator",\r
    goal="Coordinate tasks and produce a final project status report",\r
    backstory="Experienced project manager who synthesizes information into clear status reports.",\r
    llm=llm,\r
    verbose=True,\r
)\r
\r
\r
def run_mcp_workflow(project_name: str, tasks: list[str]) -> str:\r
    tasks_str = ", ".join(tasks)\r
\r
    gather_task = Task(\r
        description=f"""For project "{project_name}", use your MCP tools to:\r
        1. Get the current datetime using get_datetime tool\r
        2. Prioritize these tasks using prioritize_tasks tool: {tasks_str}\r
        3. Format the results as JSON using format_as_json tool\r
\r
        Return all gathered information.""",\r
        expected_output="Current time, prioritized task list, and formatted data",\r
        agent=mcp_agent,\r
    )\r
\r
    report_task = Task(\r
        description=f"""Create a project status report for "{project_name}" using the gathered data.\r
\r
        Report format:\r
        - Project: {project_name}\r
        - Generated: [timestamp from data]\r
        - Status: Active\r
        - Task Priority Matrix: [use the prioritized tasks]\r
        - Next Action: [highest priority incomplete task]\r
        - Executive Summary: 2-3 sentences\r
\r
        Make it professional and actionable.""",\r
        expected_output="Professional project status report",\r
        agent=coordinator,\r
        context=[gather_task],\r
    )\r
\r
    crew = Crew(\r
        agents=[mcp_agent, coordinator],\r
        tasks=[gather_task, report_task],\r
        process=Process.sequential,\r
        verbose=True,\r
    )\r
\r
    return str(crew.kickoff())\r
\r
\r
if __name__ == "__main__":\r
    project = "AI Agent Platform v2.0"\r
    tasks = [\r
        "Implement RAG pipeline",\r
        "Write unit tests",\r
        "Deploy to staging",\r
        "Update documentation",\r
        "Security audit",\r
        "Performance benchmarking",\r
    ]\r
\r
    print(f"\\n🔗 Running MCP-powered CrewAI workflow for: {project}\\n")\r
    result = run_mcp_workflow(project, tasks)\r
\r
    print("\\n" + "=" * 60)\r
    print("PROJECT STATUS REPORT:")\r
    print("=" * 60)\r
    print(result)\r
`,vg=`"""\r
FastMCP Server for Lesson 03.\r
\r
Exposes tools that CrewAI agents can call via the MCP protocol.\r
This is the server side — agents connect to this to use the tools.\r
\r
Run: python mcp_server.py\r
(Keep this running while agent.py is running)\r
"""\r
\r
import json\r
from datetime import datetime\r
\r
try:\r
    from fastmcp import FastMCP\r
    HAS_FASTMCP = True\r
except ImportError:\r
    HAS_FASTMCP = False\r
    print("FastMCP not installed. Run: pip install fastmcp")\r
    print("Showing example server code only.\\n")\r
\r
\r
def create_mcp_server():\r
    if not HAS_FASTMCP:\r
        return None\r
\r
    mcp = FastMCP("CrewAI Course Tools")\r
\r
    @mcp.tool()\r
    def get_datetime() -> str:\r
        """Get the current date and time in UTC."""\r
        return datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")\r
\r
    @mcp.tool()\r
    def prioritize_tasks(tasks: list[str]) -> str:\r
        """\r
        Prioritize a list of tasks by estimated importance.\r
\r
        Args:\r
            tasks: List of task descriptions to prioritize\r
\r
        Returns:\r
            JSON string with prioritized tasks\r
        """\r
        prioritized = []\r
        for i, task in enumerate(tasks):\r
            priority = "HIGH" if i < len(tasks) // 3 else "MEDIUM" if i < 2 * len(tasks) // 3 else "LOW"\r
            prioritized.append({"rank": i + 1, "task": task, "priority": priority})\r
        return json.dumps(prioritized, indent=2)\r
\r
    @mcp.tool()\r
    def format_as_json(data: dict) -> str:\r
        """\r
        Format data as pretty-printed JSON.\r
\r
        Args:\r
            data: Dictionary to format\r
\r
        Returns:\r
            Pretty-printed JSON string\r
        """\r
        return json.dumps(data, indent=2, default=str)\r
\r
    @mcp.tool()\r
    def calculate_project_metrics(tasks_completed: int, tasks_total: int) -> dict:\r
        """\r
        Calculate project completion metrics.\r
\r
        Args:\r
            tasks_completed: Number of completed tasks\r
            tasks_total: Total number of tasks\r
\r
        Returns:\r
            Dictionary with completion percentage and status\r
        """\r
        percentage = (tasks_completed / tasks_total * 100) if tasks_total > 0 else 0\r
        status = "On Track" if percentage >= 50 else "At Risk" if percentage >= 25 else "Behind"\r
        return {\r
            "completed": tasks_completed,\r
            "total": tasks_total,\r
            "percentage": round(percentage, 1),\r
            "status": status,\r
        }\r
\r
    return mcp\r
\r
\r
if __name__ == "__main__":\r
    mcp = create_mcp_server()\r
    if mcp:\r
        print("🚀 MCP Server starting on localhost:8000")\r
        print("Tools available: get_datetime, prioritize_tasks, format_as_json, calculate_project_metrics")\r
        mcp.run(transport="streamable-http", host="localhost", port=8000)\r
    else:\r
        print("Install fastmcp to run the server: pip install fastmcp")\r
`,_g=`crewai==0.80.0\r
langchain-openai==0.2.0\r
fastmcp==0.4.0\r
python-dotenv==1.0.1\r
pydantic==2.9.0\r
`,wg="/assets/AIAgentUseCase--nFQka5V.jpg",fc=`# 500+ AI Agent Projects & Use Cases\r
\r
<div align="center">\r
\r
[![GitHub Stars](https://img.shields.io/github/stars/ashishpatel26/500-AI-Agents-Projects?style=for-the-badge&color=yellow)](https://github.com/ashishpatel26/500-AI-Agents-Projects/stargazers)\r
[![GitHub Forks](https://img.shields.io/github/forks/ashishpatel26/500-AI-Agents-Projects?style=for-the-badge&color=blue)](https://github.com/ashishpatel26/500-AI-Agents-Projects/network/members)\r
[![Contributors](https://img.shields.io/github/contributors/ashishpatel26/500-AI-Agents-Projects?style=for-the-badge&color=green)](https://github.com/ashishpatel26/500-AI-Agents-Projects/graphs/contributors)\r
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTION.md)\r
[![License: MIT](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)](LICENSE)\r
[![Last Commit](https://img.shields.io/github/last-commit/ashishpatel26/500-AI-Agents-Projects?style=for-the-badge)](https://github.com/ashishpatel26/500-AI-Agents-Projects/commits/main)\r
\r
**The most comprehensive collection of AI agent projects, use cases, and working implementations.**\r
\r
[🚀 Quick Start](#-quick-start) • [🗺️ Browse Agents](#-browse-by-framework) • [🏭 By Industry](#-industry-use-cases) • [🤝 Contribute](#-contributing) • [📊 Frameworks Compared](#-framework-comparison)\r
\r
</div>\r
\r
---\r
\r
![AI Agent Use Cases](images/AIAgentUseCase.jpg)\r
\r
## What is this?\r
\r
A curated collection of **500+ AI agent projects** — production examples, tutorials, and working code spanning every major framework (LangGraph, CrewAI, AutoGen, Agno) and industry (Healthcare, Finance, Education, Cybersecurity, and more).\r
\r
**Who it's for:**\r
- 🧑‍💻 **Developers** building their first or next AI agent\r
- 🔬 **Researchers** surveying the agent landscape\r
- 🏢 **Teams** evaluating frameworks for production use\r
- 🎓 **Students** learning agent architectures from real examples\r
\r
---\r
\r
## ⚡ Quick Start\r
\r
Pick a framework and run an agent in under 5 minutes:\r
\r
\`\`\`bash\r
# Clone the repo\r
git clone https://github.com/ashishpatel26/500-AI-Agents-Projects.git\r
cd 500-AI-Agents-Projects\r
\r
# Run any agent from the agents/ directory\r
cd agents/01-web-research-agent\r
pip install -r requirements.txt\r
cp .env.example .env        # add your API key\r
python agent.py\r
\`\`\`\r
\r
> All agents in \`agents/\` are self-contained with their own \`requirements.txt\` and \`.env.example\`. No monorepo setup needed.\r
\r
---\r
\r
## 🗺️ Navigation Guide\r
\r
| I want to... | Go to |\r
|---|---|\r
| Run a working agent right now | [\`agents/\`](agents/) |\r
| Browse by AI framework | [Framework-wise Use Cases](#-browse-by-framework) |\r
| Browse by industry | [Industry Use Cases](#-industry-use-cases) |\r
| Understand which framework to use | [Framework Comparison](#-framework-comparison) |\r
| Add my own agent | [Contributing](CONTRIBUTION.md) |\r
| Learn with a course | [\`crewai_mcp_course/\`](crewai_mcp_course/) |\r
\r
---\r
\r
## 📊 Framework Comparison\r
\r
Choosing a framework? Here's when to use each:\r
\r
| Framework | Best For | Complexity | Multi-Agent | Streaming | Local LLM |\r
|---|---|---|---|---|---|\r
| **LangGraph** | Stateful workflows, RAG pipelines, complex graphs | ⭐⭐⭐ | ✅ | ✅ | ✅ |\r
| **CrewAI** | Role-based teams, business automation, rapid prototyping | ⭐⭐ | ✅ | ✅ | ✅ |\r
| **AutoGen** | Code generation, research, self-healing workflows | ⭐⭐⭐ | ✅ | ✅ | ✅ |\r
| **Agno** | Lightweight single agents, tool integration, fast iteration | ⭐ | ✅ | ✅ | ✅ |\r
| **LlamaIndex** | Document Q&A, enterprise RAG, data pipelines | ⭐⭐ | ⚠️ | ✅ | ✅ |\r
\r
**Quick decision guide:**\r
- Just starting out → **Agno** or **CrewAI**\r
- Need stateful graphs + RAG → **LangGraph**\r
- Building code-writing / research agents → **AutoGen**\r
- Enterprise document pipelines → **LlamaIndex**\r
\r
---\r
\r
## 🏭 Industry Use Cases\r
\r
![Industry Mind Map](images/industry_usecase1.png)\r
\r
| Use Case | Industry | Description | Code |\r
|---|---|---|---|\r
| **HIA (Health Insights Agent)** | Healthcare | Analyses medical reports and provides health insights | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/harshhh28/hia.git) |\r
| **AI Health Assistant** | Healthcare | Diagnoses and monitors diseases using patient data | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/ahmadvh/AI-Agents-for-Medical-Diagnostics.git) |\r
| **Automated Trading Bot** | Finance | Automates stock trading with real-time market analysis | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/MingyuJ666/Stockagent.git) |\r
| **Agent Wallet SDK** | Finance | Non-custodial smart contract wallet SDK for AI agents with enforced spend limits | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/up2itnow0822/agent-wallet-sdk) |\r
| **Virtual AI Tutor** | Education | Provides personalized education tailored to users | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/hqanhh/EduGPT.git) |\r
| **24/7 AI Chatbot** | Customer Service | Handles customer queries around the clock | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/NirDiamant/GenAI_Agents/blob/main/all_agents_tutorials/customer_support_agent_langgraph.ipynb) |\r
| **Product Recommendation Agent** | Retail | Suggests products based on user preferences and history | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/microsoft/RecAI) |\r
| **Self-Driving Delivery Agent** | Transportation | Optimizes routes and autonomously delivers packages | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/sled-group/driVLMe) |\r
| **Factory Process Monitoring Agent** | Manufacturing | Monitors production lines and ensures quality control | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/yuchenxia/llm4ias) |\r
| **Property Pricing Agent** | Real Estate | Analyzes market trends to determine property prices | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/AleksNeStu/ai-real-estate-assistant) |\r
| **Smart Farming Assistant** | Agriculture | Provides insights on crop health and yield predictions | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/mohammed97ashraf/LLM_Agri_Bot) |\r
| **Energy Demand Forecasting Agent** | Energy | Predicts energy usage to optimize grid management | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/yecchen/MIRAI) |\r
| **Content Personalization Agent** | Entertainment | Recommends personalized media based on preferences | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/crosleythomas/MirrorGPT) |\r
| **Legal Document Review Assistant** | Legal | Automates document review and highlights key clauses | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/firica/legalai) |\r
| **Recruitment Recommendation Agent** | Human Resources | Suggests best-fit candidates for job openings | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/sentient-engineering/jobber) |\r
| **Virtual Travel Assistant** | Hospitality | Plans travel itineraries based on preferences | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/nirbar1985/ai-travel-agent) |\r
| **AI Game Companion Agent** | Gaming | Enhances player experience with real-time assistance | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/onjas-buidl/LLM-agent-game) |\r
| **Real-Time Threat Detection Agent** | Cybersecurity | Identifies potential threats and mitigates attacks | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/NVISOsecurity/cyber-security-llm-agents) |\r
| **E-commerce Personal Shopper Agent** | E-commerce | Helps customers find products they'll love | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/Hoanganhvu123/ShoppingGPT) |\r
| **Logistics Optimization Agent** | Supply Chain | Plans efficient delivery routes and manages inventory | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/microsoft/OptiGuide) |\r
| **Vibe Hacking Agent** | Cybersecurity | Autonomous Multi-Agent Based Red Team Testing Service | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/PurpleAILAB/Decepticon) |\r
| **Citadel** | Software Development | Orchestrates Claude Code agent fleets with lifecycle hooks, skills, campaign management, and postmortem-driven architecture | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/SethGammon/Citadel) |\r
| **MediSuite-AI-Agent** | Health Insurance | Automates hospital / insurance claiming workflow | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/ahmedmansour5/MediSuite-Ai-Agent) |\r
| **Lina Egyptian Medical Chatbot** | Healthcare | Egyptian medical assistant chatbot | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/dina-khalid/Lina-Egyptian-Medical-Chatbot) |\r
\r
---\r
\r
## 🔧 Browse by Framework\r
\r
### CrewAI\r
\r
Role-based multi-agent framework. Great for business automation.\r
\r
| Use Case | Industry | Description | GitHub |\r
|---|---|---|---|\r
| 📧 Email Auto Responder Flow | Communication | Automates email responses based on predefined criteria | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/email_auto_responder_flow) |\r
| 📝 Meeting Assistant Flow | Productivity | Organizes meetings, scheduling and agenda preparation | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/meeting_assistant_flow) |\r
| 🔄 Self Evaluation Loop Flow | Human Resources | Facilitates self-assessment for performance reviews | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/self_evaluation_loop_flow) |\r
| 📈 Lead Score Flow | Sales | Evaluates and scores potential leads to prioritize outreach | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/lead-score-flow) |\r
| 📊 Marketing Strategy Generator | Marketing | Develops marketing strategies by analyzing market trends | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/marketing_strategy) |\r
| 📝 Job Posting Generator | Recruitment | Creates job postings by analyzing job requirements | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/job-posting) |\r
| 🔄 Recruitment Workflow | Recruitment | Streamlines recruitment by automating hiring tasks | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/recruitment) |\r
| 🔍 Match Profile to Positions | Recruitment | Matches candidate profiles to suitable job positions | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/match_profile_to_positions) |\r
| 📸 Instagram Post Generator | Social Media | Generates and schedules Instagram posts automatically | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/instagram_post) |\r
| 🌐 Landing Page Generator | Web Development | Automates creation of landing pages for websites | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/landing_page_generator) |\r
| 🎮 Game Builder Crew | Game Development | Assists in game development by automating aspects of creation | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/game-builder-crew) |\r
| 💹 Stock Analysis Tool | Finance | Provides tools for analyzing stock market data | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/stock_analysis) |\r
| 🗺️ Trip Planner | Travel | Assists in planning trips with itineraries | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/trip_planner) |\r
| 🎁 Surprise Trip Planner | Travel | Plans surprise trips based on user preferences | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/surprise_trip) |\r
| 📚 Write a Book with Flows | Creative Writing | Assists authors with structured writing workflows | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/write_a_book_with_flows) |\r
| 🎬 Screenplay Writer | Creative Writing | Aids in writing screenplays with templates and guidance | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/screenplay_writer) |\r
| ✅ Markdown Validator | Documentation | Validates Markdown files for proper formatting | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/markdown_validator) |\r
| 🧠 Meta Quest Knowledge | Knowledge Management | Manages Meta Quest knowledge for information retrieval | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/meta_quest_knowledge) |\r
| 🤖 NVIDIA Models Integration | AI Integration | Integrates NVIDIA AI models into workflows | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/integrations/nvidia_models) |\r
| 🗂️ Prep for a Meeting | Productivity | Prepares meeting materials and sets agendas | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/prep-for-a-meeting) |\r
| 🛠️ Starter Template | Development | Starter template for new CrewAI projects | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/starter_template) |\r
| 🔗 CrewAI + LangGraph Integration | AI Integration | Integration between CrewAI and LangGraph | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/integrations/CrewAI-LangGraph) |\r
\r
---\r
\r
### AutoGen\r
\r
Microsoft's framework for code generation, execution, and multi-agent research.\r
\r
**Code Generation, Execution, and Debugging**\r
\r
| Use Case | Industry | Description | Notebook |\r
|---|---|---|---|\r
| 🤖 Automated Task Solving with Code Gen, Execution & Debugging | Software Development | Demonstrates automated task-solving by generating, executing, and debugging code | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_auto_feedback_from_code_execution) |\r
| 🧑‍💻 Code Generation and Q&A with Retrieval Augmented Agents | Software Development | Generates code and answers questions using retrieval-augmented methods | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_RetrieveChat) |\r
| 🧠 Code Generation and Q&A with Qdrant-based Retrieval | Software Development | Utilizes Qdrant for enhanced retrieval-augmented agent performance | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_RetrieveChat_qdrant) |\r
\r
**Multi-Agent Collaboration**\r
\r
| Use Case | Industry | Description | Notebook |\r
|---|---|---|---|\r
| 🤝 Group Chat (3 members, 1 manager) | Collaboration | Demonstrates group task-solving via multi-agent collaboration | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat) |\r
| 📊 Data Visualization by Group Chat | Data Analysis | Uses multi-agent collaboration to create data visualizations | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_vis) |\r
| 🧩 Complex Task Solving by Group Chat (6 members) | Collaboration | Solves complex tasks collaboratively with a larger group | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_research) |\r
| 🧑‍💻 Task Solving with Coding & Planning Agents | Planning & Dev | Combines coding and planning agents for solving tasks | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_planning.ipynb) |\r
| 📐 Task Solving with Graph Transition Paths | Collaboration | Uses predefined transition paths in a graph for solving tasks | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/docs/notebooks/agentchat_groupchat_finite_state_machine) |\r
| 🧠 SocietyOfMindAgent Inner-Monologue | Cognitive Sciences | Simulates inner-monologue for problem-solving using group chats | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_society_of_mind) |\r
| 🔧 Group Chat with Custom Speaker Selection | Collaboration | Implements a custom function for speaker selection | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_customized) |\r
\r
**Sequential Multi-Agent Chats**\r
\r
| Use Case | Industry | Description | Notebook |\r
|---|---|---|---|\r
| 🔄 Sequential Task-Solving (single initiating agent) | Workflow Automation | Automates sequential task-solving with a single initiating agent | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_multi_task_chats) |\r
| ⏳ Async Sequential Task-Solving | Workflow Automation | Handles asynchronous task-solving in a sequence of chats | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_multi_task_async_chats) |\r
| 🤝 Sequential Chats with Different Initiating Agents | Workflow Automation | Sequential task-solving with different agents initiating each chat | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchats_sequential_chats) |\r
\r
**Nested Chats**\r
\r
| Use Case | Industry | Description | Notebook |\r
|---|---|---|---|\r
| 🧠 Solving Complex Tasks with Nested Chats | Problem Solving | Uses nested chats to solve hierarchical and complex problems | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_nestedchat) |\r
| 🔄 Sequence of Nested Chats | Problem Solving | Demonstrates sequential task-solving using nested chats | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_nested_sequential_chats) |\r
| 🏭 OptiGuide Supply Chain with Nested Chats | Supply Chain | Solves supply chain optimization using nested chats | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_nestedchat_optiguide) |\r
| ♟️ Conversational Chess with Nested Chats | Gaming | Uses nested chats for playing conversational chess with tools | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_nested_chats_chess) |\r
\r
**Tools**\r
\r
| Use Case | Industry | Description | Notebook |\r
|---|---|---|---|\r
| 🌐 Web Search: Solve Tasks Requiring Web Info | Information Retrieval | Searches the web to gather information for completing tasks | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_web_info.ipynb) |\r
| 🔧 Use Provided Tools as Functions | Tool Integration | Demonstrates how to use pre-provided tools as callable functions | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_function_call_currency_calculator) |\r
| 📚 RAG Group Chat | Collaboration | Enables group chat with Retrieval Augmented Generation | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_RAG) |\r
| 🔊 Agent Chat with Whisper | Audio Processing | AI agent for transcription and translation using Whisper | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_video_transcript_translate_with_whisper) |\r
| 📊 SQL: Natural Language to SQL Query | Database Management | Converts natural language inputs into SQL queries | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_sql_spider.ipynb) |\r
\r
**Multimodal Agents**\r
\r
| Use Case | Industry | Description | Notebook |\r
|---|---|---|---|\r
| 🎨 Multimodal Agent with DALLE and GPT-4V | Multimedia AI | Combines DALLE and GPT-4V for multimodal agent communication | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_dalle_and_gpt4v.ipynb) |\r
| 🖌️ Multimodal Agent with Llava | Image Processing | Uses Llava for multimodal agent conversations | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_lmm_llava.ipynb) |\r
| 🖼️ Multimodal Agent with GPT-4V | Multimedia AI | Leverages GPT-4V for visual and conversational interactions | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_lmm_gpt-4v.ipynb) |\r
\r
**Observability & Evaluation**\r
\r
| Use Case | Industry | Description | Notebook |\r
|---|---|---|---|\r
| 📊 AgentEval: Multi-Agent Assessment System | Performance Evaluation | Evaluating LLM-based application utility | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agenteval_cq_math.ipynb) |\r
| 📊 Track LLM Calls and Errors using AgentOps | Monitoring & Analytics | Monitors LLM interactions, tool usage, and errors | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_agentops.ipynb) |\r
| 🏗️ Auto Build Multi-agent System with AgentBuilder | AI Development | Automatically builds multi-agent systems | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/autobuild_basic.ipynb) |\r
\r
---\r
\r
### Agno\r
\r
Lightweight, fast agent framework. Best for single-agent tools and rapid prototyping.\r
\r
| Use Case | Industry | Description | Code |\r
|---|---|---|---|\r
| 🤖 Support Agent | AI Framework Support | Real-time answers, explanations, and code examples for Agno framework | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/agno_support_agent.py) |\r
| 🎥 YouTube Agent | Media & Content | Analyzes YouTube videos: summaries, timestamps, themes | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/youtube_agent.py) |\r
| 📊 Finance Agent (Thinking) | Finance | Real-time stock insights, analyst recommendations, financial deep-dives | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/thinking_finance_agent.py) |\r
| 📚 Study Partner | Education | Finds resources, answers questions, creates study plans | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/study_partner.py) |\r
| 🛍️ Shopping Partner Agent | E-commerce | Product recommender based on preferences from Amazon, Flipkart | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/shopping_partner.py) |\r
| 🎓 Research Scholar Agent | Education / Research | Advanced academic searches, publication analysis, structured reports | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/research_agent_exa.py) |\r
| 🧠 Research Agent | Media & Journalism | Deep investigations, NYT-style reports | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/research_agent.py) |\r
| 🍳 Recipe Creator | Food & Culinary | Personalized recipes based on ingredients and preferences | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/recipe_creator.py) |\r
| 🧠 Financial Reasoning Agent | Finance | Claude 3.5 Sonnet-based stock analysis with Yahoo Finance data | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/reasoning_finance_agent.py) |\r
| 🤖 Readme Generator Agent | Software Dev | Generates high-quality READMEs for GitHub repos | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/readme_generator.py) |\r
| 🎬 Movie Recommendation Agent | Entertainment | Personalized movie recommendations using Exa and GPT-4o | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/movie_recommedation.py) |\r
| 🔍 Media Trend Analysis Agent | Media & News | Analyzes emerging trends and influencers from digital platforms | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/media_trend_analysis_agent.py) |\r
| ⚖️ Legal Document Analysis Agent | Legal Tech | Analyzes legal PDFs and provides insights using vector embeddings | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/legal_consultant.py) |\r
| 🤔 DeepKnowledge | Research | Iterative search through knowledge base with deep reasoning | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/deep_knowledge.py) |\r
| 📚 Book Recommendation Agent | Publishing & Media | Personalized book suggestions using literary data and reader preferences | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/book_recommendation.py) |\r
| 🏠 MCP Airbnb Agent | Hospitality | Search Airbnb listings with MCP and Llama 4 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/airbnb_mcp.py) |\r
| 🤖 Agno Assist Agent | AI Framework | GPT-4o agent for Agno framework Q&A with hybrid search | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/agno_assist.py) |\r
\r
---\r
\r
### LangGraph\r
\r
State-machine framework for complex, stateful agent workflows and RAG pipelines.\r
\r
| Use Case | Industry | Description | Code |\r
|---|---|---|---|\r
| 🤖 Chatbot Simulation Evaluation | AI / QA | Simulate user interactions to evaluate chatbot performance | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbot-simulation-evaluation/agent-simulation-evaluation.ipynb) |\r
| 🧠 Information Gathering via Prompting | Research | LangGraph workflow using prompting to gather information | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbots/information-gather-prompting.ipynb) |\r
| 🧠 Code Assistant with LangGraph | Software Development | Resilient code assistant with error checking and iterative refinement | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/code_assistant/langgraph_code_assistant.ipynb) |\r
| 🧑‍💼 Customer Support Agent | Customer Support | Graph-based agent for handling customer inquiries | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/customer-support/customer-support.ipynb) |\r
| 🔁 Extraction with Retries | Data Extraction | Retry mechanisms for robust data extraction | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/extraction/retries.ipynb) |\r
| 🧠 Multi-Agent Workflow (Supervisor) | Workflow Orchestration | Supervisor agent orchestrating multiple specialized agents | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/agent_supervisor.ipynb) |\r
| 🧠 Hierarchical Agent Teams | Workflow Orchestration | Top-level supervisor delegates to specialized sub-agents | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/hierarchical_agent_teams.ipynb) |\r
| 🤝 Multi-Agent Collaboration | Workflow Orchestration | Multiple specialized agents working together on complex tasks | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/multi-agent-collaboration.ipynb) |\r
| 🧠 Plan-and-Execute Agent | Workflow Orchestration | Agent generates multi-step plan then executes sequentially | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/plan-and-execute/plan-and-execute.ipynb) |\r
| 🧠 SQL Agent | Database Interaction | Agent answers questions about SQL databases | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/sql-agent.ipynb) |\r
| 🧠 Reflection Agent | Workflow Orchestration | Agent critiques and revises its own outputs | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/reflection/reflection.ipynb) |\r
| 🧠 Reflexion Agent | Workflow Orchestration | Agent reflects on actions for iterative improvement | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/reflexion/reflexion.ipynb) |\r
| 🧠 Adaptive RAG | Information Retrieval | Dynamic retrieval adjusting based on query complexity | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_adaptive_rag.ipynb) |\r
| 🤖 Agentic RAG | Intelligent Agents | Agent determines best retrieval strategy before generating response | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_agentic_rag.ipynb) |\r
| 🧠 Corrective RAG (CRAG) | Information Retrieval | Evaluates and refines retrieved documents before generation | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_crag.ipynb) |\r
| 🧠 Self-RAG | Information Retrieval | System reflects on responses and retrieves additional info if needed | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_self_rag.ipynb) |\r
| 🧠 Adaptive RAG (Local) | Information Retrieval | Adaptive RAG with local models for offline use | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_adaptive_rag_local.ipynb) |\r
| 🧠 Self-RAG (Local) | Information Retrieval | Self-RAG using local models and data sources | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_self_rag_local.ipynb) |\r
\r
---\r
\r
## 🤝 Contributing\r
\r
Contributions are welcome! 🎉 This repo grows through community contributions.\r
\r
**Ways to contribute:**\r
1. **Add a working agent** — create a folder in \`agents/\` with runnable code\r
2. **Add an external link** — add a row to the industry or framework tables\r
3. **Fix a broken link** — open an issue or PR\r
4. **Improve documentation** — fix typos, add context, improve examples\r
\r
**To contribute:**\r
1. Fork the repository\r
2. Create a branch: \`feat/agent-name\` or \`fix/description\`\r
3. Add your changes following the [Contributing Guidelines](CONTRIBUTION.md)\r
4. Open a PR using the PR template\r
\r
See [CONTRIBUTION.md](CONTRIBUTION.md) for full requirements (metadata.yaml, requirements.txt, etc.).\r
\r
---\r
\r
## Star History\r
\r
<picture>\r
  <source\r
    media="(prefers-color-scheme: dark)"\r
    srcset="https://api.star-history.com/svg?repos=ashishpatel26/500-AI-Agents-Projects&type=date&legend=top-left"\r
  />\r
  <source\r
    media="(prefers-color-scheme: light)"\r
    srcset="https://api.star-history.com/svg?repos=ashishpatel26/500-AI-Agents-Projects&type=date&legend=top-left"\r
  />\r
  <img\r
    alt="Star History Chart"\r
    src="https://api.star-history.com/svg?repos=ashishpatel26/500-AI-Agents-Projects&type=date&legend=top-left"\r
  />\r
</picture>\r
\r
---\r
\r
## 📜 License\r
\r
This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.\r
\r
---\r
\r
<div align="center">\r
\r
**⭐ Star this repo if you find it useful — it helps others discover it!**\r
\r
[Report Issue](https://github.com/ashishpatel26/500-AI-Agents-Projects/issues) • [Request Agent](https://github.com/ashishpatel26/500-AI-Agents-Projects/issues/new?template=feature_request.md) • [Contribute](CONTRIBUTION.md)\r
\r
</div>\r
`,kg=Object.assign({"../../agents/01-web-research-agent/README.md":Gp,"../../agents/01-web-research-agent/agent.py":Hp,"../../agents/01-web-research-agent/metadata.yaml":Up,"../../agents/01-web-research-agent/requirements.txt":Bp,"../../agents/02-code-review-agent/README.md":Wp,"../../agents/02-code-review-agent/agent.py":Vp,"../../agents/02-code-review-agent/metadata.yaml":$p,"../../agents/02-code-review-agent/requirements.txt":Qp,"../../agents/03-pdf-qa-agent/README.md":Yp,"../../agents/03-pdf-qa-agent/agent.py":Kp,"../../agents/03-pdf-qa-agent/metadata.yaml":Jp,"../../agents/03-pdf-qa-agent/requirements.txt":Xp,"../../agents/04-sql-query-agent/README.md":Zp,"../../agents/04-sql-query-agent/agent.py":em,"../../agents/04-sql-query-agent/metadata.yaml":nm,"../../agents/04-sql-query-agent/requirements.txt":tm,"../../agents/05-email-drafting-agent/README.md":rm,"../../agents/05-email-drafting-agent/agent.py":am,"../../agents/05-email-drafting-agent/metadata.yaml":im,"../../agents/05-email-drafting-agent/requirements.txt":sm,"../../agents/06-news-summarizer-agent/README.md":om,"../../agents/06-news-summarizer-agent/agent.py":lm,"../../agents/06-news-summarizer-agent/metadata.yaml":um,"../../agents/06-news-summarizer-agent/requirements.txt":cm,"../../agents/07-github-issue-triager/README.md":dm,"../../agents/07-github-issue-triager/agent.py":pm,"../../agents/07-github-issue-triager/metadata.yaml":mm,"../../agents/07-github-issue-triager/requirements.txt":gm,"../../agents/08-data-analysis-agent/README.md":fm,"../../agents/08-data-analysis-agent/agent.py":hm,"../../agents/08-data-analysis-agent/metadata.yaml":ym,"../../agents/08-data-analysis-agent/requirements.txt":vm,"../../agents/09-resume-parser-agent/README.md":_m,"../../agents/09-resume-parser-agent/agent.py":wm,"../../agents/09-resume-parser-agent/metadata.yaml":km,"../../agents/09-resume-parser-agent/requirements.txt":xm,"../../agents/10-meeting-notes-agent/README.md":bm,"../../agents/10-meeting-notes-agent/agent.py":Am,"../../agents/10-meeting-notes-agent/metadata.yaml":Sm,"../../agents/10-meeting-notes-agent/requirements.txt":Cm,"../../agents/11-stock-research-agent/README.md":Em,"../../agents/11-stock-research-agent/agent.py":Pm,"../../agents/11-stock-research-agent/metadata.yaml":Im,"../../agents/11-stock-research-agent/requirements.txt":jm,"../../agents/12-travel-planner-agent/README.md":Tm,"../../agents/12-travel-planner-agent/agent.py":Rm,"../../agents/12-travel-planner-agent/metadata.yaml":Nm,"../../agents/12-travel-planner-agent/requirements.txt":Mm,"../../agents/13-customer-support-agent/README.md":Lm,"../../agents/13-customer-support-agent/agent.py":Dm,"../../agents/13-customer-support-agent/metadata.yaml":Fm,"../../agents/13-customer-support-agent/requirements.txt":zm,"../../agents/14-social-media-agent/README.md":Om,"../../agents/14-social-media-agent/agent.py":qm,"../../agents/14-social-media-agent/metadata.yaml":Gm,"../../agents/14-social-media-agent/requirements.txt":Hm,"../../agents/15-unit-test-generator/README.md":Um,"../../agents/15-unit-test-generator/agent.py":Bm,"../../agents/15-unit-test-generator/metadata.yaml":Wm,"../../agents/15-unit-test-generator/requirements.txt":Vm,"../../agents/16-documentation-writer/README.md":$m,"../../agents/16-documentation-writer/agent.py":Qm,"../../agents/16-documentation-writer/metadata.yaml":Ym,"../../agents/16-documentation-writer/requirements.txt":Km,"../../agents/17-recipe-agent/README.md":Jm,"../../agents/17-recipe-agent/agent.py":Xm,"../../agents/17-recipe-agent/metadata.yaml":Zm,"../../agents/17-recipe-agent/requirements.txt":eg,"../../agents/18-job-application-agent/README.md":ng,"../../agents/18-job-application-agent/agent.py":tg,"../../agents/18-job-application-agent/metadata.yaml":rg,"../../agents/18-job-application-agent/requirements.txt":ag,"../../agents/19-competitive-analysis-agent/README.md":ig,"../../agents/19-competitive-analysis-agent/agent.py":sg,"../../agents/19-competitive-analysis-agent/metadata.yaml":og,"../../agents/19-competitive-analysis-agent/requirements.txt":lg,"../../agents/20-multi-agent-debate/README.md":ug,"../../agents/20-multi-agent-debate/agent.py":cg,"../../agents/20-multi-agent-debate/metadata.yaml":dg,"../../agents/20-multi-agent-debate/requirements.txt":pg}),xg=Object.assign({"../../crewai_mcp_course/README.md":gc,"../../crewai_mcp_course/lesson_01/agent.py":mg,"../../crewai_mcp_course/lesson_01/requirements.txt":gg,"../../crewai_mcp_course/lesson_02/agent.py":fg,"../../crewai_mcp_course/lesson_02/requirements.txt":hg,"../../crewai_mcp_course/lesson_03/agent.py":yg,"../../crewai_mcp_course/lesson_03/mcp_server.py":vg,"../../crewai_mcp_course/lesson_03/requirements.txt":_g});function Rr(l=""){return String(l).replace(/<[^>]*>/g," ").replace(/!\[[^\]]*]\([^)]+\)/g," ").replace(/\[([^\]]+)]\([^)]+\)/g,"$1").replace(/[*_`>#]/g," ").replace(/\s+/g," ").trim()}function Me(l="item"){return Rr(l).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"item"}function Er(l=""){return Rr(l).replace(/^[^A-Za-z0-9]+/,"").replace(/[-_]+/g," ").split(" ").filter(Boolean).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}function bg(l=""){const m=Me(l);return{agno:"Agno",autogen:"AutoGen",crewai:"CrewAI",langchain:"LangChain",langgraph:"LangGraph",llamaindex:"LlamaIndex","llama-index":"LlamaIndex"}[m]||Er(l||"Python")}function Rn(l=""){return Rr(l).replace(/^[^A-Za-z0-9]+/,"").replace(/\s+/g," ").trim()}function Ag(l=""){var v;const m=Array.from(String(l).matchAll(/\]\((https?:\/\/[^)]+)\)/g)).map(_=>_[1]).filter(_=>!_.includes("img.shields.io"));if(m.length>0)return m[m.length-1];const c=(v=String(l).match(/https?:\/\/[^\s)]+/g))==null?void 0:v.filter(_=>!_.includes("img.shields.io"));return(c==null?void 0:c[c.length-1])||""}function ac(l=""){return l.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(m=>m.trim())}function Sg(l=""){return/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(l)}function hc(l=""){return Rr(l).toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function ic(l=""){return/crewai/i.test(l)?"CrewAI":/autogen/i.test(l)?"AutoGen":/agno/i.test(l)?"Agno":/langgraph/i.test(l)?"LangGraph":/llamaindex|llama index/i.test(l)?"LlamaIndex":"Cross-industry"}function Cg(l,m){const c=l.map(hc).join(" ");return/navigation guide|framework comparison/i.test(m)?!1:/description/.test(c)&&/use case|project|agent|example/.test(c)&&/code|github|notebook|link|project/.test(c)}function $s(l,m){const c=Object.keys(l).find(v=>m.some(_=>v.includes(_)));return c?l[c]:""}function Eg(l=fc){const m=l.split(/\r?\n/),c=[],v=new Set;let _=!1,A="",j="",q="";for(let T=0;T<m.length;T+=1){const L=m[T];if(/^\s*```/.test(L)){_=!_;continue}if(_)continue;const Z=L.match(/^(#{2,4})\s+(.+)$/);if(Z){const fe=Z[1].length,W=Rn(Z[2]);fe===2?(A=W,j="",q=""):fe===3?(j=W,q=""):q=W;continue}const $=L.match(/^\*\*([^*]+)\*\*\s*$/);if($){q=Rn($[1]);continue}if(!L.trim().startsWith("|")||!m[T+1]||!Sg(m[T+1]))continue;const B=ac(L),ke=[A,j,q].filter(Boolean).join(" / ");if(Cg(B,ke)){for(T+=2;T<m.length&&m[T].trim().startsWith("|");){const fe=ac(m[T]);if(fe.length>=B.length-1){const W={};B.forEach((pe,xe)=>{W[hc(pe)]=fe[xe]||""});const X=Rn($s(W,["use case","project","agent","example"]))||Rn(fe[0]),Ze=Rn($s(W,["description","best for"])),Ve=Rn($s(W,["industry","domain","category"])),Fe=Ag(fe.join(" "));if(X&&Ze){const pe=Me(`${ke}-${X}`);let xe=pe,be=2;for(;v.has(xe);)xe=`${pe}-${be}`,be+=1;v.add(xe),c.push({id:xe,title:X,description:Ze,industry:Ve||"General",framework:ic(ke),sourceHeading:ke,sourceGroup:A,sourceSubheading:[j,q].filter(Boolean).join(" / "),url:Fe,resourceType:/notebook|ipynb/i.test(Fe)?"Notebook":"Code",tags:[ic(ke),Ve||"General",A,j,q].filter(Boolean)})}}T+=1}T-=1}}return c}function Pg(l=""){const m={};return l.split(/\r?\n/).forEach(c=>{const v=c.trim();if(!v||v.startsWith("#")||!v.includes(":"))return;const[_,...A]=v.split(":"),j=A.join(":").trim();j.startsWith("[")&&j.endsWith("]")?m[_.trim()]=j.slice(1,-1).split(",").map(q=>q.trim().replace(/^["']|["']$/g,"")).filter(Boolean):m[_.trim()]=j.replace(/^["']|["']$/g,"")}),m}function Ig(l=""){var m;return Rn(((m=l.match(/^#\s+(.+)$/m))==null?void 0:m[1])||"")}function Cr(l="",m){const c=l.split(/\r?\n/),v=c.findIndex(A=>{const j=A.match(/^#{2,4}\s+(.+)$/);return j&&m.test(j[1])});if(v===-1)return"";const _=[];for(let A=v+1;A<c.length&&!/^#{2,4}\s+/.test(c[A]);A+=1)_.push(c[A]);return _.join(`
`).trim()}function Qs(l="",m=6){return l.split(/\r?\n/).map(c=>{var v;return(v=c.match(/^\s*(?:[-*]|\d+\.)\s+(.+)$/))==null?void 0:v[1]}).filter(Boolean).map(Rn).filter(Boolean).slice(0,m)}function sc(l=""){return Array.from(l.matchAll(/```(?:bash|sh|shell)?\s*\n([\s\S]*?)```/g)).map(m=>m[1].trim()).filter(Boolean)}function jg(l=""){const m=Array.from(l.matchAll(/^def\s+([A-Za-z_][A-Za-z0-9_]*)/gm)).map(_=>_[1]),c=Array.from(l.matchAll(/^class\s+([A-Za-z_][A-Za-z0-9_]*)/gm)).map(_=>_[1]),v=[l.includes("StateGraph")&&"state graph",l.includes("Crew(")&&"crew orchestration",l.includes("Agent(")&&"agent roles",l.includes("Task(")&&"task pipeline",l.includes("Tool")&&"tool calls",l.includes("argparse")&&"command line interface",l.includes("sqlite3")&&"local database",l.includes("pandas")&&"dataframe processing",l.includes("Tavily")&&"web search"].filter(Boolean);return{functions:m.slice(0,10),classes:c.slice(0,8),signals:v}}function Tg(){const l={};return Object.entries(kg).forEach(([m,c])=>{const v=m.match(/agents\/([^/]+)\/([^/]+)$/);if(!v)return;const[,_,A]=v;l[_]=l[_]||{},l[_][A]=c}),Object.entries(l).map(([m,c])=>{var B;const v=Pg(c["metadata.yaml"]||""),_=c["README.md"]||"",A=c["agent.py"]||"",j=Cr(_,/setup|installation/i),q=Cr(_,/run|usage/i),T=Qs(Cr(_,/what it does/i),7).length>0?Qs(Cr(_,/what it does/i),7):Qs(Cr(_,/features|use cases/i),7),L=Er(Ig(_)||v.title||m),Z=((B=m.match(/^\d+/))==null?void 0:B[0])||"",$=jg(A);return{id:m,slug:m,number:Z,title:L,description:v.description||Rn(_.split(/\r?\n/)[2]||""),framework:bg(v.framework||"Python"),llm:v.llm||"Configurable",industry:Er(v.industry||"General"),difficulty:Er(v.difficulty||"Intermediate"),tags:Array.isArray(v.tags)?v.tags:[],language:Er(v.language||"Python"),localPath:`agents/${m}`,entrypoint:v.entrypoint||"agent.py",requirements:v.requirements||"requirements.txt",readme:_,code:A,requirementsText:c["requirements.txt"]||"",metadataText:c["metadata.yaml"]||"",features:T,setupCommands:sc(j),runCommands:sc(q),concepts:$}}).sort((m,c)=>m.slug.localeCompare(c.slug,void 0,{numeric:!0}))}function gt(l){const m=Object.entries(xg).find(([c])=>c.endsWith(l));return m?m[1]:""}const Rg=[{slug:"lesson-01",number:"01",title:"First CrewAI Researcher",summary:"Build a single researcher agent, give it a clear role, run one task, and inspect the response path.",files:[{label:"agent.py",path:"crewai_mcp_course/lesson_01/agent.py",content:gt("lesson_01/agent.py")},{label:"requirements.txt",path:"crewai_mcp_course/lesson_01/requirements.txt",content:gt("lesson_01/requirements.txt")}],objectives:["Install the CrewAI lesson dependencies","Define a role-driven research agent","Attach the agent to one clear task","Run the crew and read the final output"],runCommands:["cd crewai_mcp_course/lesson_01","pip install -r requirements.txt","python agent.py"]},{slug:"lesson-02",number:"02",title:"Multi-Agent Research Crew",summary:"Split research, writing, and editing responsibilities into a sequential CrewAI workflow.",files:[{label:"agent.py",path:"crewai_mcp_course/lesson_02/agent.py",content:gt("lesson_02/agent.py")},{label:"requirements.txt",path:"crewai_mcp_course/lesson_02/requirements.txt",content:gt("lesson_02/requirements.txt")}],objectives:["Create multiple specialist agents","Connect tasks into a sequential process","Pass context from researcher to writer to editor","Understand where tools fit into CrewAI"],runCommands:["cd crewai_mcp_course/lesson_02","pip install -r requirements.txt","python agent.py"]},{slug:"lesson-03",number:"03",title:"CrewAI With FastMCP-Style Tools",summary:"Use a FastMCP-style tool surface to let CrewAI agents query structured project data and produce a status report.",files:[{label:"agent.py",path:"crewai_mcp_course/lesson_03/agent.py",content:gt("lesson_03/agent.py")},{label:"mcp_server.py",path:"crewai_mcp_course/lesson_03/mcp_server.py",content:gt("lesson_03/mcp_server.py")},{label:"requirements.txt",path:"crewai_mcp_course/lesson_03/requirements.txt",content:gt("lesson_03/requirements.txt")}],objectives:["Model a tool contract that resembles MCP server access","Let agents request project records through tools","Generate a management-ready project status report","See how MCP-style boundaries improve agent design"],runCommands:["cd crewai_mcp_course/lesson_03","pip install -r requirements.txt","python agent.py"]}],Ng=[{slug:"langgraph",name:"LangGraph",accent:"cyan",bestFor:"Stateful workflows, graph control, retries, RAG, and production routing.",decision:"Choose it when the agent needs explicit state transitions and reliable recovery paths."},{slug:"crewai",name:"CrewAI",accent:"green",bestFor:"Role-based teams, business automation, repeatable task handoffs, and fast prototypes.",decision:"Choose it when the project maps naturally to specialists with goals and tasks."},{slug:"autogen",name:"AutoGen",accent:"amber",bestFor:"Code generation, research collaboration, feedback loops, and executable experiments.",decision:"Choose it when agents need to talk, critique, run code, and iterate."},{slug:"agno",name:"Agno",accent:"rose",bestFor:"Lightweight tool agents, quick iteration, model flexibility, and compact apps.",decision:"Choose it when you want a focused tool-calling agent with low ceremony."},{slug:"llamaindex",name:"LlamaIndex",accent:"violet",bestFor:"Document Q&A, enterprise retrieval, data connectors, and knowledge workflows.",decision:"Choose it when the data pipeline matters as much as the agent behavior."}],J={courseReadme:gc,agents:Tg(),useCases:Eg(fc),courseLessons:Rg,frameworks:Ng,images:{hero:wg}},Mg=[{path:"/",label:"Atlas"},{path:"/course",label:"Course"},{path:"/agents",label:"Agents"},{path:"/use-cases",label:"Use cases"},{path:"/frameworks",label:"Frameworks"}];function Lg(){const[l,m]=ye.useState(()=>window.location.hash.slice(1)||"/");return ye.useEffect(()=>{const c=()=>m(window.location.hash.slice(1)||"/");return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),l}function Ie(l){return`#${l}`}function oc(l=""){return l.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Va(l,m){var v;if(!m)return!0;const c=oc([l.title,l.description,l.framework,l.industry,l.sourceHeading,(v=l.tags)==null?void 0:v.join(" ")].join(" "));return oc(m).split(" ").filter(Boolean).every(_=>c.includes(_))}function yc(l="",m=""){const c=l.split(/\r?\n/).map(v=>v.trim()).filter(Boolean).filter(v=>!v.startsWith("#")&&!v.startsWith("```"));return Rr(c.find(v=>v.length>30)||m).slice(0,260)}function Dg({route:l,children:m}){return o.jsxs("div",{className:"app-shell",children:[o.jsxs("header",{className:"topbar",children:[o.jsxs("a",{className:"brand",href:Ie("/"),children:[o.jsx("span",{className:"brand-mark",children:o.jsx(mc,{size:18,"aria-hidden":"true"})}),o.jsxs("span",{children:[o.jsx("strong",{children:"AI Agents Atlas"}),o.jsx("small",{children:"500+ project map"})]})]}),o.jsx("nav",{className:"nav-links","aria-label":"Main navigation",children:Mg.map(c=>o.jsx("a",{className:l===c.path||c.path!=="/"&&l.startsWith(`${c.path}/`)?"active":"",href:Ie(c.path),children:c.label},c.path))}),o.jsxs("a",{className:"icon-link",href:"https://github.com/ashishpatel26/500-AI-Agents-Projects",children:[o.jsx(Dp,{size:18,"aria-hidden":"true"}),o.jsx("span",{children:"GitHub"})]})]}),o.jsx("main",{children:m})]})}function Fg(){const l=[{label:"Runnable agents",value:J.agents.length,icon:dc},{label:"README use cases",value:J.useCases.length,icon:cc},{label:"Framework families",value:J.frameworks.length,icon:Xs},{label:"Course lessons",value:J.courseLessons.length,icon:Js}];return o.jsx("section",{className:"stat-strip","aria-label":"Repository statistics",children:l.map(m=>{const c=m.icon;return o.jsxs("article",{className:"stat-tile",children:[o.jsx(c,{size:18,"aria-hidden":"true"}),o.jsx("strong",{children:m.value}),o.jsx("span",{children:m.label})]},m.label)})})}function zg(){const l=[{label:"CrewAI course",path:"/course",x:11,y:22,tone:"green"},{label:"Runnable agents",path:"/agents",x:52,y:13,tone:"cyan"},{label:"Use cases",path:"/use-cases",x:74,y:48,tone:"amber"},{label:"Frameworks",path:"/frameworks",x:24,y:65,tone:"rose"},{label:"Code pages",path:"/agents/01-web-research-agent",x:54,y:78,tone:"violet"}];return o.jsxs("section",{className:"hero-grid",children:[o.jsxs("div",{className:"hero-copy",children:[o.jsx("p",{className:"eyebrow",children:"Course front page plus project atlas"}),o.jsx("h1",{children:"500+ AI Agent Projects"}),o.jsx("p",{children:"A premium React atlas for learning, browsing, running, and redirecting into the strongest AI agent examples in this repository."}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("a",{className:"primary-action",href:Ie("/course"),children:[o.jsx(Js,{size:18,"aria-hidden":"true"}),"Start course"]}),o.jsxs("a",{className:"secondary-action",href:Ie("/use-cases"),children:[o.jsx(Qa,{size:18,"aria-hidden":"true"}),"Browse use cases"]})]})]}),o.jsxs("div",{className:"graph-stage","aria-label":"Interactive agent atlas graph",children:[o.jsxs("svg",{className:"edge-layer",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[o.jsx("path",{className:"graph-edge edge-one",d:"M12 25 C30 8, 42 12, 52 16"}),o.jsx("path",{className:"graph-edge edge-two",d:"M54 18 C69 23, 78 33, 75 50"}),o.jsx("path",{className:"graph-edge edge-three",d:"M72 51 C61 71, 51 78, 27 67"}),o.jsx("path",{className:"graph-edge edge-four",d:"M25 65 C12 54, 8 38, 12 25"}),o.jsx("path",{className:"graph-edge edge-five",d:"M53 17 C48 39, 48 60, 54 78"})]}),l.map(m=>o.jsxs("a",{className:`graph-node tone-${m.tone}`,href:Ie(m.path),style:{left:`${m.x}%`,top:`${m.y}%`},children:[o.jsx("span",{}),m.label]},m.label)),o.jsxs("div",{className:"graph-console",children:[o.jsx("span",{children:"agent_state"}),o.jsx("strong",{children:"ready"}),o.jsxs("small",{children:["nodes: ",J.agents.length+J.frameworks.length]})]})]})]})}function Og({compact:l=!1}){const[m,c]=ye.useState(""),v=J.agents.filter(A=>Va(A,m)).slice(0,4),_=J.useCases.filter(A=>Va(A,m)).slice(0,6);return o.jsxs("section",{className:l?"search-panel compact":"search-panel",children:[o.jsxs("label",{className:"search-box",children:[o.jsx(Qa,{size:18,"aria-hidden":"true"}),o.jsx("input",{value:m,onChange:A=>c(A.target.value),placeholder:"Search agents, use cases, frameworks, industries"})]}),o.jsx("div",{className:"search-results",children:[...v,..._].map(A=>{const j=!!A.localPath;return o.jsxs("a",{className:"result-row",href:Ie(j?`/agents/${A.slug}`:`/use-cases/${A.id}`),children:[o.jsx("span",{className:`mini-dot ${Me(A.framework)}`}),o.jsx("strong",{children:A.title}),o.jsx("small",{children:j?A.localPath:A.sourceHeading})]},`${j?"agent":"case"}-${A.id}`)})})]})}function qg(){const l=J.agents.slice(0,6),m=J.useCases.slice(0,8);return o.jsxs(o.Fragment,{children:[o.jsx(zg,{}),o.jsx(Fg,{}),o.jsxs("section",{className:"split-section",children:[o.jsxs("div",{className:"section-copy",children:[o.jsx("p",{className:"eyebrow",children:"Start here"}),o.jsx("h2",{children:"CrewAI with FastMCP-style lessons at the front"}),o.jsx("p",{children:"The course is the guided entry point, then the atlas opens into local code agents and README-linked external examples."}),o.jsxs("a",{className:"inline-action",href:Ie("/course"),children:["Open course page ",o.jsx($a,{size:16,"aria-hidden":"true"})]})]}),o.jsx(vc,{})]}),o.jsxs("section",{className:"media-band",children:[o.jsx("img",{src:J.images.hero,alt:"AI agent use case map"}),o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Live catalog"}),o.jsx("h2",{children:"Search every local agent and README table row"}),o.jsx(Og,{compact:!0})]})]}),o.jsxs("section",{className:"content-band",children:[o.jsx(jr,{eyebrow:"Runnable code",title:"Local agent implementations",action:{label:"View all agents",href:"/agents"}}),o.jsx("div",{className:"card-grid",children:l.map(c=>o.jsx(Nr,{agent:c},c.id))})]}),o.jsxs("section",{className:"content-band",children:[o.jsx(jr,{eyebrow:"README use cases",title:"External projects with dedicated pages",action:{label:"View all use cases",href:"/use-cases"}}),o.jsx("div",{className:"usecase-grid",children:m.map(c=>o.jsx(Zs,{useCase:c},c.id))})]}),o.jsx(Gg,{})]})}function jr({eyebrow:l,title:m,action:c}){return o.jsxs("div",{className:"section-header",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:l}),o.jsx("h2",{children:m})]}),c?o.jsxs("a",{className:"inline-action",href:Ie(c.href),children:[c.label," ",o.jsx($a,{size:16,"aria-hidden":"true"})]}):null]})}function vc(){return o.jsx("div",{className:"course-rail",children:J.courseLessons.map(l=>o.jsxs("a",{className:"lesson-row",href:Ie(`/course/${l.slug}`),children:[o.jsx("span",{children:l.number}),o.jsxs("div",{children:[o.jsx("strong",{children:l.title}),o.jsx("small",{children:l.summary})]}),o.jsx($a,{size:16,"aria-hidden":"true"})]},l.slug))})}function Gg(){return o.jsxs("section",{className:"content-band",children:[o.jsx(jr,{eyebrow:"Decision support",title:"Framework map",action:{label:"Compare frameworks",href:"/frameworks"}}),o.jsx("div",{className:"framework-grid",children:J.frameworks.map(l=>o.jsxs("a",{className:`framework-card tone-${l.accent}`,href:Ie(`/frameworks/${l.slug}`),children:[o.jsx("strong",{children:l.name}),o.jsx("p",{children:l.bestFor}),o.jsx("span",{children:l.decision})]},l.slug))})]})}function Nr({agent:l}){return o.jsxs("a",{className:"agent-card",href:Ie(`/agents/${l.slug}`),children:[o.jsxs("div",{className:"card-topline",children:[o.jsx("span",{className:`framework-pill ${Me(l.framework)}`,children:l.framework}),o.jsx("small",{children:l.difficulty})]}),o.jsx("h3",{children:l.title}),o.jsx("p",{children:l.description}),o.jsx("div",{className:"tag-list",children:[l.industry,l.llm,...l.tags].filter(Boolean).slice(0,4).map(m=>o.jsx("span",{children:m},m))})]})}function Zs({useCase:l}){return o.jsxs("article",{className:"usecase-card",children:[o.jsxs("div",{className:"card-topline",children:[o.jsx("span",{className:`framework-pill ${Me(l.framework)}`,children:l.framework}),o.jsx("small",{children:l.resourceType})]}),o.jsx("h3",{children:l.title}),o.jsx("p",{children:l.description}),o.jsxs("div",{className:"card-actions",children:[o.jsxs("a",{href:Ie(`/use-cases/${l.id}`),children:[o.jsx(pc,{size:15,"aria-hidden":"true"}),"Detail"]}),l.url?o.jsxs("a",{href:Ie(`/go/${l.id}`),children:[o.jsx(Ir,{size:15,"aria-hidden":"true"}),"Redirect"]}):null]})]})}function Hg(){return o.jsxs(o.Fragment,{children:[o.jsx(Nn,{eyebrow:"Course",title:"CrewAI with FastMCP-style integration",description:yc(J.courseReadme,"A practical course for building CrewAI workflows with MCP-style tool boundaries."),icon:Js}),o.jsxs("section",{className:"split-section",children:[o.jsxs("div",{className:"section-copy",children:[o.jsx("h2",{children:"Learning path"}),o.jsx("p",{children:"Each lesson has its own page with objectives, run commands, code files, and a code walkthrough surface."}),o.jsx("div",{className:"command-stack",children:o.jsx(Tr,{code:["cd crewai_mcp_course/lesson_01","pip install -r requirements.txt","python agent.py"].join(`
`),compact:!0})})]}),o.jsx(vc,{})]}),o.jsxs("section",{className:"content-band",children:[o.jsx(jr,{eyebrow:"Lessons",title:"Separate lesson pages"}),o.jsx("div",{className:"lesson-grid",children:J.courseLessons.map(l=>o.jsxs("a",{className:"lesson-card",href:Ie(`/course/${l.slug}`),children:[o.jsx("span",{children:l.number}),o.jsx("h3",{children:l.title}),o.jsx("p",{children:l.summary}),o.jsx("ul",{children:l.objectives.slice(0,3).map(m=>o.jsxs("li",{children:[o.jsx(Ks,{size:15,"aria-hidden":"true"}),m]},m))})]},l.slug))})]})]})}function Ug({lesson:l}){var _;const[m,c]=ye.useState(((_=l.files[0])==null?void 0:_.label)||""),v=l.files.find(A=>A.label===m)||l.files[0];return o.jsxs(o.Fragment,{children:[o.jsx(Nn,{eyebrow:`Lesson ${l.number}`,title:l.title,description:l.summary,icon:Rp}),o.jsxs("section",{className:"detail-layout",children:[o.jsxs("aside",{className:"detail-aside",children:[o.jsx("h2",{children:"Objectives"}),o.jsx("ul",{className:"check-list",children:l.objectives.map(A=>o.jsxs("li",{children:[o.jsx(Ks,{size:16,"aria-hidden":"true"}),A]},A))}),o.jsx("h2",{children:"Run"}),o.jsx(Tr,{code:l.runCommands.join(`
`),compact:!0})]}),o.jsxs("article",{className:"detail-main",children:[o.jsx(wc,{files:l.files,selected:m,onSelect:c}),o.jsx(Tr,{code:(v==null?void 0:v.content)||"# File content not found"}),o.jsx(kc,{code:(v==null?void 0:v.content)||"",context:"lesson"})]})]})]})}function Bg(){const[l,m]=ye.useState(""),[c,v]=ye.useState("all"),[_,A]=ye.useState("all"),j=["all",...new Set(J.agents.map(L=>Me(L.framework)))],q=["all","Sales & CRM","Operations & Strategy","Software Engineering","Marketing & Content","Finance & Crypto","Healthcare","E-Commerce","Legal & Real Estate","Education & Research","Data Science & AI","Productivity & Design","Cybersecurity","Supply Chain & Logistics","HR & Recruitment"],T=J.agents.filter(L=>{const Z=Va(L,l),$=c==="all"||Me(L.framework)===c,B=_==="all"||L.industry&&L.industry.toLowerCase().includes(_.toLowerCase())||L.title&&L.title.toLowerCase().includes(_.toLowerCase())||L.description&&L.description.toLowerCase().includes(_.toLowerCase());return Z&&$&&B});return o.jsxs(o.Fragment,{children:[o.jsx(Nn,{eyebrow:"Runnable agents",title:"Local code pages for every implementation",description:"Filter and discover 500+ specialized AI agent implementations by Category, Industry, and Framework.",icon:dc}),o.jsx(_c,{query:l,onQuery:m,filters:j,filter:c,onFilter:v,categories:q,category:_,onCategory:A}),o.jsxs("section",{className:"content-band",children:[o.jsxs("div",{className:"catalog-count",children:[T.length," matching agents"]}),o.jsx("div",{className:"card-grid",children:T.map(L=>o.jsx(Nr,{agent:L},L.id))})]})]})}function Wg({agent:l}){const[m,c]=ye.useState("agent.py"),v=[{label:"agent.py",path:`${l.localPath}/agent.py`,content:l.code},{label:"README.md",path:`${l.localPath}/README.md`,content:l.readme},{label:"requirements.txt",path:`${l.localPath}/requirements.txt`,content:l.requirementsText},{label:"metadata.yaml",path:`${l.localPath}/metadata.yaml`,content:l.metadataText}],_=v.find(j=>j.label===m)||v[0],A=J.agents.filter(j=>j.slug!==l.slug&&j.framework===l.framework).slice(0,3);return o.jsxs(o.Fragment,{children:[o.jsx(Nn,{eyebrow:`${l.framework} agent`,title:l.title,description:l.description,icon:Lp}),o.jsxs("section",{className:"detail-layout",children:[o.jsxs("aside",{className:"detail-aside",children:[o.jsx($g,{agent:l}),o.jsx("h2",{children:"Run in 5 minutes"}),o.jsx(Tr,{code:(l.runCommands[0]||l.setupCommands[0])??[`cd ${l.localPath}`,"pip install -r requirements.txt","python agent.py"].join(`
`),compact:!0}),o.jsx("h2",{children:"Architecture"}),o.jsx(Qg,{agent:l})]}),o.jsxs("article",{className:"detail-main",children:[o.jsxs("section",{className:"explain-panel",children:[o.jsx("h2",{children:"How it works"}),o.jsx("p",{children:yc(l.readme,l.description)}),o.jsx("ul",{className:"check-list",children:(l.features.length?l.features:Vg(l)).map(j=>o.jsxs("li",{children:[o.jsx(Ks,{size:16,"aria-hidden":"true"}),j]},j))})]}),o.jsx(wc,{files:v,selected:m,onSelect:c}),o.jsx(Tr,{code:_.content||"# File content not found"}),o.jsx(kc,{code:_.content||"",context:_.label,agent:l}),A.length?o.jsxs("section",{className:"related-band",children:[o.jsxs("h2",{children:["Related ",l.framework," agents"]}),o.jsx("div",{className:"mini-card-grid",children:A.map(j=>o.jsx(Nr,{agent:j},j.id))})]}):null]})]})]})}function Vg(l){return[`Loads configuration for ${l.llm}`,`Creates a ${l.framework} workflow around the core task`,"Accepts user input through the command line or defaults","Calls tools, models, or local data helpers","Returns a structured result for the user"]}function $g({agent:l}){const m=[["Path",l.localPath],["Framework",l.framework],["Difficulty",l.difficulty],["Industry",l.industry],["Model",l.llm],["Language",l.language]];return o.jsxs("section",{className:"metadata-panel",children:[o.jsx("h2",{children:"Project metadata"}),m.map(([c,v])=>o.jsxs("div",{className:"meta-row",children:[o.jsx("span",{children:c}),o.jsx("strong",{children:v})]},c))]})}function Qg({agent:l}){const m=l.framework==="Langgraph"||l.framework==="LangGraph"?["Input","State","Node","Tool","Response"]:l.framework==="Crewai"||l.framework==="CrewAI"?["Goal","Agent","Task","Crew","Output"]:["Input","Planner","Tool","Model","Output"];return o.jsx("div",{className:"flow-trace",children:m.map((c,v)=>o.jsxs("div",{className:"flow-step",children:[o.jsx("span",{children:v+1}),o.jsx("strong",{children:c})]},c))})}function Yg(){const[l,m]=ye.useState(""),[c,v]=ye.useState("all"),[_,A]=ye.useState("all"),j=["all",...new Set(J.useCases.map(L=>Me(L.framework)))],q=["all","Sales & CRM","Operations & Strategy","Software Engineering","Marketing & Content","Finance & Crypto","Healthcare","E-Commerce","Legal & Real Estate","Education & Research","Data Science & AI","Productivity & Design","Cybersecurity","Supply Chain & Logistics","HR & Recruitment"],T=J.useCases.filter(L=>{const Z=Va(L,l),$=c==="all"||Me(L.framework)===c,B=_==="all"||L.industry&&L.industry.toLowerCase().includes(_.toLowerCase())||L.title&&L.title.toLowerCase().includes(_.toLowerCase())||L.description&&L.description.toLowerCase().includes(_.toLowerCase());return Z&&$&&B});return o.jsxs(o.Fragment,{children:[o.jsx(Nn,{eyebrow:"README catalog",title:"Dedicated page for every README use case",description:"Filter and search 500+ agent use cases organized by Category, Industry, and Framework.",icon:cc}),o.jsx(_c,{query:l,onQuery:m,filters:j,filter:c,onFilter:v,categories:q,category:_,onCategory:A}),o.jsxs("section",{className:"content-band",children:[o.jsxs("div",{className:"catalog-count",children:[T.length," matching use cases"]}),o.jsx("div",{className:"usecase-grid",children:T.map(L=>o.jsx(Zs,{useCase:L},L.id))})]})]})}function _c({query:l,onQuery:m,filters:c,filter:v,onFilter:_,categories:A,category:j,onCategory:q}){return o.jsxs("section",{className:"catalog-toolbar",children:[o.jsxs("label",{className:"search-box",children:[o.jsx(Qa,{size:18,"aria-hidden":"true"}),o.jsx("input",{value:l,onChange:T=>m(T.target.value),placeholder:"Search 500+ agents by keyword, niche, or title..."})]}),A&&A.length>1?o.jsxs("div",{className:"category-filter-section",children:[o.jsxs("div",{className:"filter-header",children:[o.jsx(Mp,{size:16,"aria-hidden":"true"}),o.jsx("span",{children:"Filter by Industry Category:"})]}),o.jsx("div",{className:"category-pills-container",children:A.map(T=>o.jsx("button",{className:j===T?"category-pill active":"category-pill",onClick:()=>q(T),type:"button",children:T==="all"?"All Categories":T},T))})]}):null,o.jsxs("div",{className:"framework-filter-section",children:[o.jsxs("div",{className:"filter-header",children:[o.jsx(Xs,{size:16,"aria-hidden":"true"}),o.jsx("span",{children:"Filter by Framework:"})]}),o.jsx("div",{className:"filter-row","aria-label":"Framework filter",children:c.map(T=>{var L;return o.jsx("button",{className:v===T?"active":"",onClick:()=>_(T),type:"button",children:T==="all"?"All Frameworks":((L=J.frameworks.find(Z=>Z.slug===T))==null?void 0:L.name)||T},T)})})]})]})}function Kg({useCase:l}){const m=J.agents.filter(v=>Me(v.framework)===Me(l.framework)||Me(v.industry)===Me(l.industry)).slice(0,4),c=J.useCases.filter(v=>v.id!==l.id&&v.framework===l.framework).slice(0,4);return o.jsxs(o.Fragment,{children:[o.jsx(Nn,{eyebrow:l.sourceHeading,title:l.title,description:l.description,icon:Ir}),o.jsxs("section",{className:"detail-layout",children:[o.jsxs("aside",{className:"detail-aside",children:[o.jsxs("section",{className:"metadata-panel",children:[o.jsx("h2",{children:"Use case metadata"}),o.jsxs("div",{className:"meta-row",children:[o.jsx("span",{children:"Framework"}),o.jsx("strong",{children:l.framework})]}),o.jsxs("div",{className:"meta-row",children:[o.jsx("span",{children:"Industry"}),o.jsx("strong",{children:l.industry})]}),o.jsxs("div",{className:"meta-row",children:[o.jsx("span",{children:"Source"}),o.jsx("strong",{children:l.sourceHeading})]}),o.jsxs("div",{className:"meta-row",children:[o.jsx("span",{children:"Resource"}),o.jsx("strong",{children:l.resourceType})]})]}),l.url?o.jsxs("a",{className:"primary-action full-width",href:Ie(`/go/${l.id}`),children:[o.jsx(Ir,{size:18,"aria-hidden":"true"}),"Open redirect"]}):null]}),o.jsxs("article",{className:"detail-main",children:[o.jsxs("section",{className:"explain-panel",children:[o.jsx("h2",{children:"What this adds"}),o.jsx("p",{children:"This page turns a README table row into a durable catalog entry with context, framework grouping, industry filtering, and a redirect route for the source project."}),o.jsxs("div",{className:"source-block",children:[o.jsx("strong",{children:l.title}),o.jsx("span",{children:l.description}),l.url?o.jsx("code",{children:l.url}):null]})]}),m.length?o.jsxs("section",{className:"related-band",children:[o.jsx("h2",{children:"Related local agents"}),o.jsx("div",{className:"mini-card-grid",children:m.map(v=>o.jsx(Nr,{agent:v},v.id))})]}):null,c.length?o.jsxs("section",{className:"related-band",children:[o.jsx("h2",{children:"Similar use cases"}),o.jsx("div",{className:"usecase-grid compact-grid",children:c.map(v=>o.jsx(Zs,{useCase:v},v.id))})]}):null]})]})]})}function Jg({useCase:l}){return ye.useEffect(()=>{if(!(l!=null&&l.url))return;const m=window.setTimeout(()=>{window.location.href=l.url},900);return()=>window.clearTimeout(m)},[l]),l?o.jsx(Nn,{eyebrow:"Redirect",title:l.title,description:`Opening ${l.url||"the source project"}.`,icon:Ir,action:l.url?{label:"Open now",href:l.url,external:!0}:null}):o.jsx(Pr,{})}function Xg({frameworkSlug:l}){const m=J.frameworks.find(v=>v.slug===l),c=m?[m]:J.frameworks;return o.jsxs(o.Fragment,{children:[o.jsx(Nn,{eyebrow:"Frameworks",title:m?m.name:"Choose the right agent framework",description:m?m.decision:"Compare the main framework families represented in this repository, then jump into matching agents and examples.",icon:Xs}),o.jsx("section",{className:"content-band",children:o.jsx("div",{className:"framework-grid",children:c.map(v=>{const _=J.agents.filter(j=>Me(j.framework)===v.slug),A=J.useCases.filter(j=>Me(j.framework)===v.slug);return o.jsxs("article",{className:`framework-detail tone-${v.accent}`,children:[o.jsxs("div",{children:[o.jsx("h2",{children:v.name}),o.jsx("p",{children:v.bestFor}),o.jsx("span",{children:v.decision})]}),o.jsxs("div",{className:"framework-stats",children:[o.jsx("strong",{children:_.length}),o.jsx("span",{children:"local agents"}),o.jsx("strong",{children:A.length}),o.jsx("span",{children:"README use cases"})]}),o.jsxs("a",{className:"inline-action",href:Ie(`/frameworks/${v.slug}`),children:["Open framework ",o.jsx($a,{size:16,"aria-hidden":"true"})]})]},v.slug)})})}),m?o.jsxs("section",{className:"content-band",children:[o.jsx(jr,{eyebrow:m.name,title:"Matching examples"}),o.jsx("div",{className:"card-grid",children:J.agents.filter(v=>Me(v.framework)===m.slug).slice(0,6).map(v=>o.jsx(Nr,{agent:v},v.id))})]}):null]})}function Nn({eyebrow:l,title:m,description:c,icon:v,action:_}){return o.jsxs("section",{className:"page-hero",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:l}),o.jsx("h1",{children:m}),o.jsx("p",{children:c}),_?o.jsxs("a",{className:"primary-action",href:_.external?_.href:Ie(_.href),rel:_.external?"noreferrer":void 0,children:[o.jsx(Ir,{size:18,"aria-hidden":"true"}),_.label]}):null]}),o.jsx("div",{className:"page-hero-icon","aria-hidden":"true",children:o.jsx(v,{size:42})})]})}function wc({files:l,selected:m,onSelect:c}){return o.jsx("div",{className:"file-tabs",role:"tablist","aria-label":"Files",children:l.map(v=>o.jsxs("button",{className:m===v.label?"active":"",onClick:()=>c(v.label),type:"button",children:[o.jsx(pc,{size:15,"aria-hidden":"true"}),v.label]},v.label))})}function Tr({code:l,compact:m=!1}){const[c,v]=ye.useState(!1),_=async()=>{var A;await((A=navigator.clipboard)==null?void 0:A.writeText(l)),v(!0),window.setTimeout(()=>v(!1),1200)};return o.jsxs("div",{className:m?"code-block compact":"code-block",children:[o.jsxs("div",{className:"code-toolbar",children:[o.jsxs("span",{children:[o.jsx(Op,{size:15,"aria-hidden":"true"}),"code"]}),o.jsxs("button",{onClick:_,type:"button",children:[o.jsx(Np,{size:14,"aria-hidden":"true"}),c?"Copied":"Copy"]})]}),o.jsx("pre",{children:o.jsx("code",{children:l})})]})}function kc({code:l,context:m,agent:c}){const v=l.split(/\r?\n/).filter(Boolean),_=v.filter(q=>/^import\s|^from\s/.test(q)).slice(0,6),A=Array.from(l.matchAll(/^def\s+([A-Za-z_][A-Za-z0-9_]*)/gm)).map(q=>q[1]),j=Array.from(l.matchAll(/^class\s+([A-Za-z_][A-Za-z0-9_]*)/gm)).map(q=>q[1]);return o.jsxs("section",{className:"code-explain",children:[o.jsx("h2",{children:"Code walkthrough"}),o.jsxs("div",{className:"walkthrough-grid",children:[o.jsx(Wa,{icon:Fp,title:"Imports",items:_.length?_:["No import block in this file section."]}),o.jsx(Wa,{icon:qp,title:"Functions",items:A.length?A.slice(0,8):["No top-level functions detected."]}),o.jsx(Wa,{icon:mc,title:"Classes",items:j.length?j.slice(0,6):["No classes detected."]}),o.jsx(Wa,{icon:zp,title:"Role",items:[m==="agent.py"?`Entrypoint for ${(c==null?void 0:c.framework)||"the"} implementation.`:`Reference file for ${m}.`,`${v.length} non-empty lines are bundled into this page.`]})]})]})}function Wa({icon:l,title:m,items:c}){return o.jsxs("article",{className:"walk-card",children:[o.jsx(l,{size:18,"aria-hidden":"true"}),o.jsx("h3",{children:m}),o.jsx("ul",{children:c.map(v=>o.jsx("li",{children:v},v))})]})}function Pr(){return o.jsx(Nn,{eyebrow:"Missing page",title:"This atlas page was not found",description:"The catalog route does not match a local agent, lesson, use case, or framework.",icon:Qa,action:{label:"Back to atlas",href:"/"}})}function Zg(){const l=Lg(),m=ye.useMemo(()=>l.split("?")[0].split("/").filter(Boolean),[l]);let c;if(m.length===0)c=o.jsx(qg,{});else if(m[0]==="course"&&m.length===1)c=o.jsx(Hg,{});else if(m[0]==="course"){const v=J.courseLessons.find(_=>_.slug===m[1]);c=v?o.jsx(Ug,{lesson:v}):o.jsx(Pr,{})}else if(m[0]==="agents"&&m.length===1)c=o.jsx(Bg,{});else if(m[0]==="agents"){const v=J.agents.find(_=>_.slug===m[1]);c=v?o.jsx(Wg,{agent:v}):o.jsx(Pr,{})}else if(m[0]==="use-cases"&&m.length===1)c=o.jsx(Yg,{});else if(m[0]==="use-cases"){const v=J.useCases.find(_=>_.id===m[1]);c=v?o.jsx(Kg,{useCase:v}):o.jsx(Pr,{})}else if(m[0]==="go"){const v=J.useCases.find(_=>_.id===m[1]);c=o.jsx(Jg,{useCase:v})}else m[0]==="frameworks"?c=o.jsx(Xg,{frameworkSlug:m[1]}):c=o.jsx(Pr,{});return o.jsx(Dg,{route:l,children:c})}Pp.createRoot(document.getElementById("root")).render(o.jsx(kp.StrictMode,{children:o.jsx(Zg,{})}));
