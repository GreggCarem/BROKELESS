(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();function pT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bm={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function QR(){if(T_)return mu;T_=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:n,type:i,key:c,ref:s!==void 0?s:null,props:l}}return mu.Fragment=t,mu.jsx=e,mu.jsxs=e,mu}var A_;function XR(){return A_||(A_=1,bm.exports=QR()),bm.exports}var G=XR(),_m={exports:{}},Ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function WR(){if(w_)return Ot;w_=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),A=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=A&&N[A]||N["@@iterator"],typeof N=="function"?N:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function P(N,Z,ht){this.props=N,this.context=Z,this.refs=C,this.updater=ht||k}P.prototype.isReactComponent={},P.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},P.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function Y(){}Y.prototype=P.prototype;function Q(N,Z,ht){this.props=N,this.context=Z,this.refs=C,this.updater=ht||k}var W=Q.prototype=new Y;W.constructor=Q,x(W,P.prototype),W.isPureReactComponent=!0;var at=Array.isArray,st={H:null,A:null,T:null,S:null,V:null},mt=Object.prototype.hasOwnProperty;function D(N,Z,ht,lt,bt,kt){return ht=kt.ref,{$$typeof:n,type:N,key:Z,ref:ht!==void 0?ht:null,props:kt}}function S(N,Z){return D(N.type,Z,void 0,void 0,void 0,N.props)}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function M(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ht){return Z[ht]})}var L=/\/+/g;function U(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?M(""+N.key):Z.toString(36)}function O(){}function oe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ne(N,Z,ht,lt,bt){var kt=typeof N;(kt==="undefined"||kt==="boolean")&&(N=null);var At=!1;if(N===null)At=!0;else switch(kt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(N.$$typeof){case n:case t:At=!0;break;case v:return At=N._init,ne(At(N._payload),Z,ht,lt,bt)}}if(At)return bt=bt(N),At=lt===""?"."+U(N,0):lt,at(bt)?(ht="",At!=null&&(ht=At.replace(L,"$&/")+"/"),ne(bt,Z,ht,"",function(dr){return dr})):bt!=null&&(R(bt)&&(bt=S(bt,ht+(bt.key==null||N&&N.key===bt.key?"":(""+bt.key).replace(L,"$&/")+"/")+At)),Z.push(bt)),1;At=0;var le=lt===""?".":lt+":";if(at(N))for(var Ht=0;Ht<N.length;Ht++)lt=N[Ht],kt=le+U(lt,Ht),At+=ne(lt,Z,ht,kt,bt);else if(Ht=E(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(lt=N.next()).done;)lt=lt.value,kt=le+U(lt,Ht++),At+=ne(lt,Z,ht,kt,bt);else if(kt==="object"){if(typeof N.then=="function")return ne(oe(N),Z,ht,lt,bt);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return At}function H(N,Z,ht){if(N==null)return N;var lt=[],bt=0;return ne(N,lt,"","",function(kt){return Z.call(ht,kt,bt++)}),lt}function ot(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(ht){(N._status===0||N._status===-1)&&(N._status=1,N._result=ht)},function(ht){(N._status===0||N._status===-1)&&(N._status=2,N._result=ht)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var ut=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Rt(){}return Ot.Children={map:H,forEach:function(N,Z,ht){H(N,function(){Z.apply(this,arguments)},ht)},count:function(N){var Z=0;return H(N,function(){Z++}),Z},toArray:function(N){return H(N,function(Z){return Z})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ot.Component=P,Ot.Fragment=e,Ot.Profiler=s,Ot.PureComponent=Q,Ot.StrictMode=i,Ot.Suspense=p,Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=st,Ot.__COMPILER_RUNTIME={__proto__:null,c:function(N){return st.H.useMemoCache(N)}},Ot.cache=function(N){return function(){return N.apply(null,arguments)}},Ot.cloneElement=function(N,Z,ht){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var lt=x({},N.props),bt=N.key,kt=void 0;if(Z!=null)for(At in Z.ref!==void 0&&(kt=void 0),Z.key!==void 0&&(bt=""+Z.key),Z)!mt.call(Z,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&Z.ref===void 0||(lt[At]=Z[At]);var At=arguments.length-2;if(At===1)lt.children=ht;else if(1<At){for(var le=Array(At),Ht=0;Ht<At;Ht++)le[Ht]=arguments[Ht+2];lt.children=le}return D(N.type,bt,void 0,void 0,kt,lt)},Ot.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},Ot.createElement=function(N,Z,ht){var lt,bt={},kt=null;if(Z!=null)for(lt in Z.key!==void 0&&(kt=""+Z.key),Z)mt.call(Z,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(bt[lt]=Z[lt]);var At=arguments.length-2;if(At===1)bt.children=ht;else if(1<At){for(var le=Array(At),Ht=0;Ht<At;Ht++)le[Ht]=arguments[Ht+2];bt.children=le}if(N&&N.defaultProps)for(lt in At=N.defaultProps,At)bt[lt]===void 0&&(bt[lt]=At[lt]);return D(N,kt,void 0,void 0,null,bt)},Ot.createRef=function(){return{current:null}},Ot.forwardRef=function(N){return{$$typeof:d,render:N}},Ot.isValidElement=R,Ot.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ot}},Ot.memo=function(N,Z){return{$$typeof:g,type:N,compare:Z===void 0?null:Z}},Ot.startTransition=function(N){var Z=st.T,ht={};st.T=ht;try{var lt=N(),bt=st.S;bt!==null&&bt(ht,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Rt,ut)}catch(kt){ut(kt)}finally{st.T=Z}},Ot.unstable_useCacheRefresh=function(){return st.H.useCacheRefresh()},Ot.use=function(N){return st.H.use(N)},Ot.useActionState=function(N,Z,ht){return st.H.useActionState(N,Z,ht)},Ot.useCallback=function(N,Z){return st.H.useCallback(N,Z)},Ot.useContext=function(N){return st.H.useContext(N)},Ot.useDebugValue=function(){},Ot.useDeferredValue=function(N,Z){return st.H.useDeferredValue(N,Z)},Ot.useEffect=function(N,Z,ht){var lt=st.H;if(typeof ht=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return lt.useEffect(N,Z)},Ot.useId=function(){return st.H.useId()},Ot.useImperativeHandle=function(N,Z,ht){return st.H.useImperativeHandle(N,Z,ht)},Ot.useInsertionEffect=function(N,Z){return st.H.useInsertionEffect(N,Z)},Ot.useLayoutEffect=function(N,Z){return st.H.useLayoutEffect(N,Z)},Ot.useMemo=function(N,Z){return st.H.useMemo(N,Z)},Ot.useOptimistic=function(N,Z){return st.H.useOptimistic(N,Z)},Ot.useReducer=function(N,Z,ht){return st.H.useReducer(N,Z,ht)},Ot.useRef=function(N){return st.H.useRef(N)},Ot.useState=function(N){return st.H.useState(N)},Ot.useSyncExternalStore=function(N,Z,ht){return st.H.useSyncExternalStore(N,Z,ht)},Ot.useTransition=function(){return st.H.useTransition()},Ot.version="19.1.0",Ot}var S_;function Kg(){return S_||(S_=1,_m.exports=WR()),_m.exports}var q=Kg();const Ie=pT(q);var Em={exports:{}},gu={},Tm={exports:{}},Am={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function ZR(){return R_||(R_=1,function(n){function t(H,ot){var ut=H.length;H.push(ot);t:for(;0<ut;){var Rt=ut-1>>>1,N=H[Rt];if(0<s(N,ot))H[Rt]=ot,H[ut]=N,ut=Rt;else break t}}function e(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var ot=H[0],ut=H.pop();if(ut!==ot){H[0]=ut;t:for(var Rt=0,N=H.length,Z=N>>>1;Rt<Z;){var ht=2*(Rt+1)-1,lt=H[ht],bt=ht+1,kt=H[bt];if(0>s(lt,ut))bt<N&&0>s(kt,lt)?(H[Rt]=kt,H[bt]=ut,Rt=bt):(H[Rt]=lt,H[ht]=ut,Rt=ht);else if(bt<N&&0>s(kt,ut))H[Rt]=kt,H[bt]=ut,Rt=bt;else break t}}return ot}function s(H,ot){var ut=H.sortIndex-ot.sortIndex;return ut!==0?ut:H.id-ot.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,A=null,E=3,k=!1,x=!1,C=!1,P=!1,Y=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function at(H){for(var ot=e(g);ot!==null;){if(ot.callback===null)i(g);else if(ot.startTime<=H)i(g),ot.sortIndex=ot.expirationTime,t(p,ot);else break;ot=e(g)}}function st(H){if(C=!1,at(H),!x)if(e(p)!==null)x=!0,mt||(mt=!0,U());else{var ot=e(g);ot!==null&&ne(st,ot.startTime-H)}}var mt=!1,D=-1,S=5,R=-1;function M(){return P?!0:!(n.unstable_now()-R<S)}function L(){if(P=!1,mt){var H=n.unstable_now();R=H;var ot=!0;try{t:{x=!1,C&&(C=!1,Q(D),D=-1),k=!0;var ut=E;try{e:{for(at(H),A=e(p);A!==null&&!(A.expirationTime>H&&M());){var Rt=A.callback;if(typeof Rt=="function"){A.callback=null,E=A.priorityLevel;var N=Rt(A.expirationTime<=H);if(H=n.unstable_now(),typeof N=="function"){A.callback=N,at(H),ot=!0;break e}A===e(p)&&i(p),at(H)}else i(p);A=e(p)}if(A!==null)ot=!0;else{var Z=e(g);Z!==null&&ne(st,Z.startTime-H),ot=!1}}break t}finally{A=null,E=ut,k=!1}ot=void 0}}finally{ot?U():mt=!1}}}var U;if(typeof W=="function")U=function(){W(L)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,oe=O.port2;O.port1.onmessage=L,U=function(){oe.postMessage(null)}}else U=function(){Y(L,0)};function ne(H,ot){D=Y(function(){H(n.unstable_now())},ot)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_next=function(H){switch(E){case 1:case 2:case 3:var ot=3;break;default:ot=E}var ut=E;E=ot;try{return H()}finally{E=ut}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(H,ot){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ut=E;E=H;try{return ot()}finally{E=ut}},n.unstable_scheduleCallback=function(H,ot,ut){var Rt=n.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?Rt+ut:Rt):ut=Rt,H){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ut+N,H={id:v++,callback:ot,priorityLevel:H,startTime:ut,expirationTime:N,sortIndex:-1},ut>Rt?(H.sortIndex=ut,t(g,H),e(p)===null&&H===e(g)&&(C?(Q(D),D=-1):C=!0,ne(st,ut-Rt))):(H.sortIndex=N,t(p,H),x||k||(x=!0,mt||(mt=!0,U()))),H},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(H){var ot=E;return function(){var ut=E;E=ot;try{return H.apply(this,arguments)}finally{E=ut}}}}(Am)),Am}var x_;function JR(){return x_||(x_=1,Tm.exports=ZR()),Tm.exports}var wm={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function tx(){if(I_)return en;I_=1;var n=Kg();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,g,v){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:A==null?null:""+A,children:p,containerInfo:g,implementation:v}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,en.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return l(p,g,null,v)},en.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},en.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},en.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},en.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,A=d(v,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:A,integrity:E,fetchPriority:k}):v==="script"&&i.d.X(p,{crossOrigin:A,integrity:E,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},en.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},en.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,A=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},en.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},en.requestFormReset=function(p){i.d.r(p)},en.unstable_batchedUpdates=function(p,g){return p(g)},en.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},en.useFormStatus=function(){return c.H.useHostTransitionStatus()},en.version="19.1.0",en}var C_;function ex(){if(C_)return wm.exports;C_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),wm.exports=tx(),wm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function nx(){if(O_)return gu;O_=1;var n=JR(),t=Kg(),e=ex();function i(r){var a="https://react.dev/errors/"+r;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var a=r,o=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,(a.flags&4098)!==0&&(o=a.return),r=a.return;while(r)}return a.tag===3?o:null}function c(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var a=r.alternate;if(!a){if(a=l(r),a===null)throw Error(i(188));return a!==r?null:r}for(var o=r,u=a;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),a;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var _=!1,T=f.child;T;){if(T===o){_=!0,o=f,u=m;break}if(T===u){_=!0,u=f,o=m;break}T=T.sibling}if(!_){for(T=m.child;T;){if(T===o){_=!0,o=m,u=f;break}if(T===u){_=!0,u=m,o=f;break}T=T.sibling}if(!_)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:a}function g(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r;for(r=r.child;r!==null;){if(a=g(r),a!==null)return a;r=r.sibling}return null}var v=Object.assign,A=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),W=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),mt=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function U(r){return r===null||typeof r!="object"?null:(r=L&&r[L]||r["@@iterator"],typeof r=="function"?r:null)}var O=Symbol.for("react.client.reference");function oe(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===O?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case P:return"Profiler";case C:return"StrictMode";case st:return"Suspense";case mt:return"SuspenseList";case R:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case k:return"Portal";case W:return(r.displayName||"Context")+".Provider";case Q:return(r._context.displayName||"Context")+".Consumer";case at:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case D:return a=r.displayName||null,a!==null?a:oe(r.type)||"Memo";case S:a=r._payload,r=r._init;try{return oe(r(a))}catch{}}return null}var ne=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},Rt=[],N=-1;function Z(r){return{current:r}}function ht(r){0>N||(r.current=Rt[N],Rt[N]=null,N--)}function lt(r,a){N++,Rt[N]=r.current,r.current=a}var bt=Z(null),kt=Z(null),At=Z(null),le=Z(null);function Ht(r,a){switch(lt(At,a),lt(kt,r),lt(bt,null),a.nodeType){case 9:case 11:r=(r=a.documentElement)&&(r=r.namespaceURI)?Xb(r):0;break;default:if(r=a.tagName,a=a.namespaceURI)a=Xb(a),r=Wb(a,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ht(bt),lt(bt,r)}function dr(){ht(bt),ht(kt),ht(At)}function Ii(r){r.memoizedState!==null&&lt(le,r);var a=bt.current,o=Wb(a,r.type);a!==o&&(lt(kt,r),lt(bt,o))}function Fr(r){kt.current===r&&(ht(bt),ht(kt)),le.current===r&&(ht(le),cu._currentValue=ut)}var Oa=Object.prototype.hasOwnProperty,ka=n.unstable_scheduleCallback,Na=n.unstable_cancelCallback,ol=n.unstable_shouldYield,pc=n.unstable_requestPaint,Dn=n.unstable_now,bd=n.unstable_getCurrentPriorityLevel,ll=n.unstable_ImmediatePriority,Ms=n.unstable_UserBlockingPriority,Da=n.unstable_NormalPriority,_d=n.unstable_LowPriority,Vs=n.unstable_IdlePriority,ul=n.log,mc=n.unstable_setDisableYieldValue,me=null,Qt=null;function _n(r){if(typeof ul=="function"&&mc(r),Qt&&typeof Qt.setStrictMode=="function")try{Qt.setStrictMode(me,r)}catch{}}var Je=Math.clz32?Math.clz32:Pa,gc=Math.log,Ed=Math.LN2;function Pa(r){return r>>>=0,r===0?32:31-(gc(r)/Ed|0)|0}var Ma=256,Va=4194304;function Qn(r){var a=r&42;if(a!==0)return a;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Ls(r,a,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,_=r.pingedLanes;r=r.warmLanes;var T=u&134217727;return T!==0?(u=T&~m,u!==0?f=Qn(u):(_&=T,_!==0?f=Qn(_):o||(o=T&~r,o!==0&&(f=Qn(o))))):(T=u&~m,T!==0?f=Qn(T):_!==0?f=Qn(_):o||(o=u&~r,o!==0&&(f=Qn(o)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,o=a&-a,m>=o||m===32&&(o&4194048)!==0)?a:f}function La(r,a){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&a)===0}function cl(r,a){switch(r){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hl(){var r=Ma;return Ma<<=1,(Ma&4194048)===0&&(Ma=256),r}function fl(){var r=Va;return Va<<=1,(Va&62914560)===0&&(Va=4194304),r}function qr(r){for(var a=[],o=0;31>o;o++)a.push(r);return a}function Hr(r,a){r.pendingLanes|=a,a!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function dl(r,a,o,u,f,m){var _=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var T=r.entanglements,I=r.expirationTimes,F=r.hiddenUpdates;for(o=_&~o;0<o;){var J=31-Je(o),et=1<<J;T[J]=0,I[J]=-1;var $=F[J];if($!==null)for(F[J]=null,J=0;J<$.length;J++){var K=$[J];K!==null&&(K.lane&=-536870913)}o&=~et}u!==0&&pr(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(_&~a))}function pr(r,a,o){r.pendingLanes|=a,r.suspendedLanes&=~a;var u=31-Je(a);r.entangledLanes|=a,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function pl(r,a){var o=r.entangledLanes|=a;for(r=r.entanglements;o;){var u=31-Je(o),f=1<<u;f&a|r[u]&a&&(r[u]|=a),o&=~f}}function Ci(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function Us(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Oi(){var r=ot.p;return r!==0?r:(r=window.event,r===void 0?32:g_(r.type))}function yc(r,a){var o=ot.p;try{return ot.p=r,a()}finally{ot.p=o}}var ue=Math.random().toString(36).slice(2),Oe="__reactFiber$"+ue,Ae="__reactProps$"+ue,Pn="__reactContainer$"+ue,ml="__reactEvents$"+ue,Td="__reactListeners$"+ue,ki="__reactHandles$"+ue,vc="__reactResources$"+ue,Ua="__reactMarker$"+ue;function Ni(r){delete r[Oe],delete r[Ae],delete r[ml],delete r[Td],delete r[ki]}function Gr(r){var a=r[Oe];if(a)return a;for(var o=r.parentNode;o;){if(a=o[Pn]||o[Oe]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(r=e_(r);r!==null;){if(o=r[Oe])return o;r=e_(r)}return a}r=o,o=r.parentNode}return null}function mr(r){if(r=r[Oe]||r[Pn]){var a=r.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return r}return null}function gr(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r.stateNode;throw Error(i(33))}function ln(r){var a=r[vc];return a||(a=r[vc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ve(r){r[Ua]=!0}var gl=new Set,zs={};function Xn(r,a){$r(r,a),$r(r+"Capture",a)}function $r(r,a){for(zs[r]=a,r=0;r<a.length;r++)gl.add(a[r])}var bc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_c={},za={};function Ec(r){return Oa.call(za,r)?!0:Oa.call(_c,r)?!1:bc.test(r)?za[r]=!0:(_c[r]=!0,!1)}function Di(r,a,o){if(Ec(a))if(o===null)r.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(a);return}}r.setAttribute(a,""+o)}}function yr(r,a,o){if(o===null)r.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttribute(a,""+o)}}function He(r,a,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(a,o,""+u)}}var ja,Tc;function Yr(r){if(ja===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);ja=a&&a[1]||"",Tc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ja+r+Tc}var js=!1;function Bs(r,a){if(!r||js)return"";js=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var et=function(){throw Error()};if(Object.defineProperty(et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(et,[])}catch(K){var $=K}Reflect.construct(r,[],et)}else{try{et.call()}catch(K){$=K}r.call(et.prototype)}}else{try{throw Error()}catch(K){$=K}(et=r())&&typeof et.catch=="function"&&et.catch(function(){})}}catch(K){if(K&&$&&typeof K.stack=="string")return[K.stack,$.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),_=m[0],T=m[1];if(_&&T){var I=_.split(`
`),F=T.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<F.length&&!F[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===F.length)for(u=I.length-1,f=F.length-1;1<=u&&0<=f&&I[u]!==F[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==F[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==F[f]){var J=`
`+I[u].replace(" at new "," at ");return r.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",r.displayName)),J}while(1<=u&&0<=f);break}}}finally{js=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Yr(o):""}function yl(r){switch(r.tag){case 26:case 27:case 5:return Yr(r.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 15:return Bs(r.type,!1);case 11:return Bs(r.type.render,!1);case 1:return Bs(r.type,!0);case 31:return Yr("Activity");default:return""}}function Fs(r){try{var a="";do a+=yl(r),r=r.return;while(r);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function un(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function vl(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ad(r){var a=vl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),u=""+r[a];if(!r.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return f.call(this)},set:function(_){u=""+_,m.call(this,_)}}),Object.defineProperty(r,a,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function qs(r){r._valueTracker||(r._valueTracker=Ad(r))}function bl(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var o=a.getValue(),u="";return r&&(u=vl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(a.setValue(r),!0):!1}function Ba(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var wd=/[\n"\\]/g;function we(r){return r.replace(wd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function En(r,a,o,u,f,m,_,T){r.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?r.type=_:r.removeAttribute("type"),a!=null?_==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+un(a)):r.value!==""+un(a)&&(r.value=""+un(a)):_!=="submit"&&_!=="reset"||r.removeAttribute("value"),a!=null?Pi(r,_,un(a)):o!=null?Pi(r,_,un(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.name=""+un(T):r.removeAttribute("name")}function Fa(r,a,o,u,f,m,_,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),a!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;o=o!=null?""+un(o):"",a=a!=null?""+un(a):o,T||a===r.value||(r.value=a),r.defaultValue=a}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=T?r.checked:!!u,r.defaultChecked=!!u,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(r.name=_)}function Pi(r,a,o){a==="number"&&Ba(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Kr(r,a,o,u){if(r=r.options,a){a={};for(var f=0;f<o.length;f++)a["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=a.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+un(o),a=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}a!==null||r[f].disabled||(a=r[f])}a!==null&&(a.selected=!0)}}function Zt(r,a,o){if(a!=null&&(a=""+un(a),a!==r.value&&(r.value=a),o==null)){r.defaultValue!==a&&(r.defaultValue=a);return}r.defaultValue=o!=null?""+un(o):""}function qa(r,a,o,u){if(a==null){if(u!=null){if(o!=null)throw Error(i(92));if(ne(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),a=o}o=un(a),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function Mn(r,a){if(a){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=a;return}}r.textContent=a}var Ha=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ac(r,a,o){var u=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(a,""):a==="float"?r.cssFloat="":r[a]="":u?r.setProperty(a,o):typeof o!="number"||o===0||Ha.has(a)?a==="float"?r.cssFloat=o:r[a]=(""+o).trim():r[a]=o+"px"}function _l(r,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in a)u=a[f],a.hasOwnProperty(f)&&o[f]!==u&&Ac(r,f,u)}else for(var m in a)a.hasOwnProperty(m)&&Ac(r,m,a[m])}function El(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hs(r){return Rd.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Qr=null;function Vn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Xr=null,Wr=null;function Tl(r){var a=mr(r);if(a&&(r=a.stateNode)){var o=r[Ae]||null;t:switch(r=a.stateNode,a.type){case"input":if(En(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+we(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var u=o[a];if(u!==r&&u.form===r.form){var f=u[Ae]||null;if(!f)throw Error(i(90));En(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<o.length;a++)u=o[a],u.form===r.form&&bl(u)}break t;case"textarea":Zt(r,o.value,o.defaultValue);break t;case"select":a=o.value,a!=null&&Kr(r,!!o.multiple,a,!1)}}}var vr=!1;function wc(r,a,o){if(vr)return r(a,o);vr=!0;try{var u=r(a);return u}finally{if(vr=!1,(Xr!==null||Wr!==null)&&(yh(),Xr&&(a=Xr,r=Wr,Wr=Xr=null,Tl(a),r)))for(a=0;a<r.length;a++)Tl(r[a])}}function Ga(r,a){var o=r.stateNode;if(o===null)return null;var u=o[Ae]||null;if(u===null)return null;o=u[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break t;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ln=!1;if(Wn)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Ln=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Ln=!1}var br=null,Mi=null,Zr=null;function Al(){if(Zr)return Zr;var r,a=Mi,o=a.length,u,f="value"in br?br.value:br.textContent,m=f.length;for(r=0;r<o&&a[r]===f[r];r++);var _=o-r;for(u=1;u<=_&&a[o-u]===f[m-u];u++);return Zr=f.slice(r,1<u?1-u:void 0)}function _r(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function Er(){return!0}function wl(){return!1}function Le(r){function a(o,u,f,m,_){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var T in r)r.hasOwnProperty(T)&&(o=r[T],this[T]=o?o(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Er:wl,this.isPropagationStopped=wl,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),a}var Yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=Le(Yt),Ya=v({},Yt,{view:0,detail:0}),Sc=Le(Ya),$s,Ys,Tr,Ka=v({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Tr&&(Tr&&r.type==="mousemove"?($s=r.screenX-Tr.screenX,Ys=r.screenY-Tr.screenY):Ys=$s=0,Tr=r),$s)},movementY:function(r){return"movementY"in r?r.movementY:Ys}}),Un=Le(Ka),Rc=v({},Ka,{dataTransfer:0}),xd=Le(Rc),Qa=v({},Ya,{relatedTarget:0}),Ks=Le(Qa),Sl=v({},Yt,{animationName:0,elapsedTime:0,pseudoElement:0}),Qs=Le(Sl),xc=v({},Yt,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Xs=Le(xc),Id=v({},Yt,{data:0}),Rl=Le(Id),Xa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ic={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xl(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=Cc[r])?!!a[r]:!1}function Wa(){return xl}var Oc=v({},Ya,{key:function(r){if(r.key){var a=Xa[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=_r(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ic[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(r){return r.type==="keypress"?_r(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?_r(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Ws=Le(Oc),kc=v({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Il=Le(kc),Jr=v({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),Nc=Le(Jr),Dc=v({},Yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pc=Le(Dc),Mc=v({},Ka,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Zs=Le(Mc),cn=v({},Yt,{newState:0,oldState:0}),Vc=Le(cn),Lc=[9,13,27,32],Ar=Wn&&"CompositionEvent"in window,h=null;Wn&&"documentMode"in document&&(h=document.documentMode);var y=Wn&&"TextEvent"in window&&!h,b=Wn&&(!Ar||h&&8<h&&11>=h),w=" ",j=!1;function X(r,a){switch(r){case"keyup":return Lc.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ct(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var jt=!1;function ke(r,a){switch(r){case"compositionend":return ct(a);case"keypress":return a.which!==32?null:(j=!0,w);case"textInput":return r=a.data,r===w&&j?null:r;default:return null}}function Bt(r,a){if(jt)return r==="compositionend"||!Ar&&X(r,a)?(r=Al(),Zr=Mi=br=null,jt=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return b&&a.locale!=="ko"?null:a.data;default:return null}}var Ue={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ne(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!Ue[r.type]:a==="textarea"}function ti(r,a,o,u){Xr?Wr?Wr.push(u):Wr=[u]:Xr=u,a=Ah(a,"onChange"),0<a.length&&(o=new Gs("onChange","change",null,o,u),r.push({event:o,listeners:a}))}var Ge=null,wr=null;function Cl(r){Gb(r,0)}function Uc(r){var a=gr(r);if(bl(a))return r}function fv(r,a){if(r==="change")return a}var dv=!1;if(Wn){var Cd;if(Wn){var Od="oninput"in document;if(!Od){var pv=document.createElement("div");pv.setAttribute("oninput","return;"),Od=typeof pv.oninput=="function"}Cd=Od}else Cd=!1;dv=Cd&&(!document.documentMode||9<document.documentMode)}function mv(){Ge&&(Ge.detachEvent("onpropertychange",gv),wr=Ge=null)}function gv(r){if(r.propertyName==="value"&&Uc(wr)){var a=[];ti(a,wr,r,Vn(r)),wc(Cl,a)}}function S2(r,a,o){r==="focusin"?(mv(),Ge=a,wr=o,Ge.attachEvent("onpropertychange",gv)):r==="focusout"&&mv()}function R2(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Uc(wr)}function x2(r,a){if(r==="click")return Uc(a)}function I2(r,a){if(r==="input"||r==="change")return Uc(a)}function C2(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var Tn=typeof Object.is=="function"?Object.is:C2;function Ol(r,a){if(Tn(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var o=Object.keys(r),u=Object.keys(a);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Oa.call(a,f)||!Tn(r[f],a[f]))return!1}return!0}function yv(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function vv(r,a){var o=yv(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=a&&u>=a)return{node:o,offset:a-r};r=u}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=yv(o)}}function bv(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?bv(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function _v(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var a=Ba(r.document);a instanceof r.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)r=a.contentWindow;else break;a=Ba(r.document)}return a}function kd(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}var O2=Wn&&"documentMode"in document&&11>=document.documentMode,Js=null,Nd=null,kl=null,Dd=!1;function Ev(r,a,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Dd||Js==null||Js!==Ba(u)||(u=Js,"selectionStart"in u&&kd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),kl&&Ol(kl,u)||(kl=u,u=Ah(Nd,"onSelect"),0<u.length&&(a=new Gs("onSelect","select",null,a,o),r.push({event:a,listeners:u}),a.target=Js)))}function Za(r,a){var o={};return o[r.toLowerCase()]=a.toLowerCase(),o["Webkit"+r]="webkit"+a,o["Moz"+r]="moz"+a,o}var to={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},Pd={},Tv={};Wn&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Ja(r){if(Pd[r])return Pd[r];if(!to[r])return r;var a=to[r],o;for(o in a)if(a.hasOwnProperty(o)&&o in Tv)return Pd[r]=a[o];return r}var Av=Ja("animationend"),wv=Ja("animationiteration"),Sv=Ja("animationstart"),k2=Ja("transitionrun"),N2=Ja("transitionstart"),D2=Ja("transitioncancel"),Rv=Ja("transitionend"),xv=new Map,Md="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Md.push("scrollEnd");function Zn(r,a){xv.set(r,a),Xn(a,[r])}var Iv=new WeakMap;function zn(r,a){if(typeof r=="object"&&r!==null){var o=Iv.get(r);return o!==void 0?o:(a={value:r,source:a,stack:Fs(a)},Iv.set(r,a),a)}return{value:r,source:a,stack:Fs(a)}}var jn=[],eo=0,Vd=0;function zc(){for(var r=eo,a=Vd=eo=0;a<r;){var o=jn[a];jn[a++]=null;var u=jn[a];jn[a++]=null;var f=jn[a];jn[a++]=null;var m=jn[a];if(jn[a++]=null,u!==null&&f!==null){var _=u.pending;_===null?f.next=f:(f.next=_.next,_.next=f),u.pending=f}m!==0&&Cv(o,f,m)}}function jc(r,a,o,u){jn[eo++]=r,jn[eo++]=a,jn[eo++]=o,jn[eo++]=u,Vd|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function Ld(r,a,o,u){return jc(r,a,o,u),Bc(r)}function no(r,a){return jc(r,null,null,a),Bc(r)}function Cv(r,a,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&a!==null&&(f=31-Je(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[a]:u.push(a),a.lane=o|536870912),m):null}function Bc(r){if(50<nu)throw nu=0,qp=null,Error(i(185));for(var a=r.return;a!==null;)r=a,a=r.return;return r.tag===3?r.stateNode:null}var ro={};function P2(r,a,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,a,o,u){return new P2(r,a,o,u)}function Ud(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ei(r,a){var o=r.alternate;return o===null?(o=An(r.tag,a,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=a,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,a=r.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function Ov(r,a){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=a,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,a=o.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),r}function Fc(r,a,o,u,f,m){var _=0;if(u=r,typeof r=="function")Ud(r)&&(_=1);else if(typeof r=="string")_=VR(r,o,bt.current)?26:r==="html"||r==="head"||r==="body"?27:5;else t:switch(r){case R:return r=An(31,o,a,f),r.elementType=R,r.lanes=m,r;case x:return ts(o.children,f,m,a);case C:_=8,f|=24;break;case P:return r=An(12,o,a,f|2),r.elementType=P,r.lanes=m,r;case st:return r=An(13,o,a,f),r.elementType=st,r.lanes=m,r;case mt:return r=An(19,o,a,f),r.elementType=mt,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Y:case W:_=10;break t;case Q:_=9;break t;case at:_=11;break t;case D:_=14;break t;case S:_=16,u=null;break t}_=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return a=An(_,o,a,f),a.elementType=r,a.type=u,a.lanes=m,a}function ts(r,a,o,u){return r=An(7,r,u,a),r.lanes=o,r}function zd(r,a,o){return r=An(6,r,null,a),r.lanes=o,r}function jd(r,a,o){return a=An(4,r.children!==null?r.children:[],r.key,a),a.lanes=o,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}var io=[],ao=0,qc=null,Hc=0,Bn=[],Fn=0,es=null,ni=1,ri="";function ns(r,a){io[ao++]=Hc,io[ao++]=qc,qc=r,Hc=a}function kv(r,a,o){Bn[Fn++]=ni,Bn[Fn++]=ri,Bn[Fn++]=es,es=r;var u=ni;r=ri;var f=32-Je(u)-1;u&=~(1<<f),o+=1;var m=32-Je(a)+f;if(30<m){var _=f-f%5;m=(u&(1<<_)-1).toString(32),u>>=_,f-=_,ni=1<<32-Je(a)+f|o<<f|u,ri=m+r}else ni=1<<m|o<<f|u,ri=r}function Bd(r){r.return!==null&&(ns(r,1),kv(r,1,0))}function Fd(r){for(;r===qc;)qc=io[--ao],io[ao]=null,Hc=io[--ao],io[ao]=null;for(;r===es;)es=Bn[--Fn],Bn[Fn]=null,ri=Bn[--Fn],Bn[Fn]=null,ni=Bn[--Fn],Bn[Fn]=null}var hn=null,ge=null,$t=!1,rs=null,Sr=!1,qd=Error(i(519));function is(r){var a=Error(i(418,""));throw Pl(zn(a,r)),qd}function Nv(r){var a=r.stateNode,o=r.type,u=r.memoizedProps;switch(a[Oe]=r,a[Ae]=u,o){case"dialog":Vt("cancel",a),Vt("close",a);break;case"iframe":case"object":case"embed":Vt("load",a);break;case"video":case"audio":for(o=0;o<iu.length;o++)Vt(iu[o],a);break;case"source":Vt("error",a);break;case"img":case"image":case"link":Vt("error",a),Vt("load",a);break;case"details":Vt("toggle",a);break;case"input":Vt("invalid",a),Fa(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),qs(a);break;case"select":Vt("invalid",a);break;case"textarea":Vt("invalid",a),qa(a,u.value,u.defaultValue,u.children),qs(a)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||u.suppressHydrationWarning===!0||Qb(a.textContent,o)?(u.popover!=null&&(Vt("beforetoggle",a),Vt("toggle",a)),u.onScroll!=null&&Vt("scroll",a),u.onScrollEnd!=null&&Vt("scrollend",a),u.onClick!=null&&(a.onclick=wh),a=!0):a=!1,a||is(r)}function Dv(r){for(hn=r.return;hn;)switch(hn.tag){case 5:case 13:Sr=!1;return;case 27:case 3:Sr=!0;return;default:hn=hn.return}}function Nl(r){if(r!==hn)return!1;if(!$t)return Dv(r),$t=!0,!1;var a=r.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||am(r.type,r.memoizedProps)),o=!o),o&&ge&&is(r),Dv(r),a===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));t:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(a===0){ge=tr(r.nextSibling);break t}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;r=r.nextSibling}ge=null}}else a===27?(a=ge,Wi(r.type)?(r=um,um=null,ge=r):ge=a):ge=hn?tr(r.stateNode.nextSibling):null;return!0}function Dl(){ge=hn=null,$t=!1}function Pv(){var r=rs;return r!==null&&(mn===null?mn=r:mn.push.apply(mn,r),rs=null),r}function Pl(r){rs===null?rs=[r]:rs.push(r)}var Hd=Z(null),as=null,ii=null;function Vi(r,a,o){lt(Hd,a._currentValue),a._currentValue=o}function ai(r){r._currentValue=Hd.current,ht(Hd)}function Gd(r,a,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),r===o)break;r=r.return}}function $d(r,a,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var _=f.child;m=m.firstContext;t:for(;m!==null;){var T=m;m=f;for(var I=0;I<a.length;I++)if(T.context===a[I]){m.lanes|=o,T=m.alternate,T!==null&&(T.lanes|=o),Gd(m.return,o,r),u||(_=null);break t}m=T.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(i(341));_.lanes|=o,m=_.alternate,m!==null&&(m.lanes|=o),Gd(_,o,r),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function Ml(r,a,o,u){r=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(i(387));if(_=_.memoizedProps,_!==null){var T=f.type;Tn(f.pendingProps.value,_.value)||(r!==null?r.push(T):r=[T])}}else if(f===le.current){if(_=f.alternate,_===null)throw Error(i(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(cu):r=[cu])}f=f.return}r!==null&&$d(a,r,o,u),a.flags|=262144}function Gc(r){for(r=r.firstContext;r!==null;){if(!Tn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function ss(r){as=r,ii=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function tn(r){return Mv(as,r)}function $c(r,a){return as===null&&ss(r),Mv(r,a)}function Mv(r,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},ii===null){if(r===null)throw Error(i(308));ii=a,r.dependencies={lanes:0,firstContext:a},r.flags|=524288}else ii=ii.next=a;return o}var M2=typeof AbortController<"u"?AbortController:function(){var r=[],a=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){a.aborted=!0,r.forEach(function(o){return o()})}},V2=n.unstable_scheduleCallback,L2=n.unstable_NormalPriority,De={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yd(){return{controller:new M2,data:new Map,refCount:0}}function Vl(r){r.refCount--,r.refCount===0&&V2(L2,function(){r.controller.abort()})}var Ll=null,Kd=0,so=0,oo=null;function U2(r,a){if(Ll===null){var o=Ll=[];Kd=0,so=Xp(),oo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Kd++,a.then(Vv,Vv),a}function Vv(){if(--Kd===0&&Ll!==null){oo!==null&&(oo.status="fulfilled");var r=Ll;Ll=null,so=0,oo=null;for(var a=0;a<r.length;a++)(0,r[a])()}}function z2(r,a){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=a;for(var f=0;f<o.length;f++)(0,o[f])(a)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Lv=H.S;H.S=function(r,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&U2(r,a),Lv!==null&&Lv(r,a)};var os=Z(null);function Qd(){var r=os.current;return r!==null?r:ie.pooledCache}function Yc(r,a){a===null?lt(os,os.current):lt(os,a.pool)}function Uv(){var r=Qd();return r===null?null:{parent:De._currentValue,pool:r}}var Ul=Error(i(460)),zv=Error(i(474)),Kc=Error(i(542)),Xd={then:function(){}};function jv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Qc(){}function Bv(r,a,o){switch(o=r[o],o===void 0?r.push(a):o!==a&&(a.then(Qc,Qc),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,qv(r),r;default:if(typeof a.status=="string")a.then(Qc,Qc);else{if(r=ie,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=a,r.status="pending",r.then(function(u){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=u}},function(u){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,qv(r),r}throw zl=a,Ul}}var zl=null;function Fv(){if(zl===null)throw Error(i(459));var r=zl;return zl=null,r}function qv(r){if(r===Ul||r===Kc)throw Error(i(483))}var Li=!1;function Wd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zd(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ui(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function zi(r,a,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(Xt&2)!==0){var f=u.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a,a=Bc(r),Cv(r,null,o),a}return jc(r,u,a,o),Bc(r)}function jl(r,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var u=a.lanes;u&=r.pendingLanes,o|=u,a.lanes=o,pl(r,o)}}function Jd(r,a){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var _={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=_:m=m.next=_,o=o.next}while(o!==null);m===null?f=m=a:m=m.next=a}else f=m=a;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=a:r.next=a,o.lastBaseUpdate=a}var tp=!1;function Bl(){if(tp){var r=oo;if(r!==null)throw r}}function Fl(r,a,o,u){tp=!1;var f=r.updateQueue;Li=!1;var m=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,F=I.next;I.next=null,_===null?m=F:_.next=F,_=I;var J=r.alternate;J!==null&&(J=J.updateQueue,T=J.lastBaseUpdate,T!==_&&(T===null?J.firstBaseUpdate=F:T.next=F,J.lastBaseUpdate=I))}if(m!==null){var et=f.baseState;_=0,J=F=I=null,T=m;do{var $=T.lane&-536870913,K=$!==T.lane;if(K?(Ft&$)===$:(u&$)===$){$!==0&&$===so&&(tp=!0),J!==null&&(J=J.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var xt=r,Et=T;$=a;var ee=o;switch(Et.tag){case 1:if(xt=Et.payload,typeof xt=="function"){et=xt.call(ee,et,$);break t}et=xt;break t;case 3:xt.flags=xt.flags&-65537|128;case 0:if(xt=Et.payload,$=typeof xt=="function"?xt.call(ee,et,$):xt,$==null)break t;et=v({},et,$);break t;case 2:Li=!0}}$=T.callback,$!==null&&(r.flags|=64,K&&(r.flags|=8192),K=f.callbacks,K===null?f.callbacks=[$]:K.push($))}else K={lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},J===null?(F=J=K,I=et):J=J.next=K,_|=$;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;K=T,T=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);J===null&&(I=et),f.baseState=I,f.firstBaseUpdate=F,f.lastBaseUpdate=J,m===null&&(f.shared.lanes=0),Yi|=_,r.lanes=_,r.memoizedState=et}}function Hv(r,a){if(typeof r!="function")throw Error(i(191,r));r.call(a)}function Gv(r,a){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)Hv(o[r],a)}var lo=Z(null),Xc=Z(0);function $v(r,a){r=fi,lt(Xc,r),lt(lo,a),fi=r|a.baseLanes}function ep(){lt(Xc,fi),lt(lo,lo.current)}function np(){fi=Xc.current,ht(lo),ht(Xc)}var ji=0,Nt=null,Jt=null,Se=null,Wc=!1,uo=!1,ls=!1,Zc=0,ql=0,co=null,j2=0;function be(){throw Error(i(321))}function rp(r,a){if(a===null)return!1;for(var o=0;o<a.length&&o<r.length;o++)if(!Tn(r[o],a[o]))return!1;return!0}function ip(r,a,o,u,f,m){return ji=m,Nt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,H.H=r===null||r.memoizedState===null?C0:O0,ls=!1,m=o(u,f),ls=!1,uo&&(m=Kv(a,o,u,f)),Yv(r),m}function Yv(r){H.H=ih;var a=Jt!==null&&Jt.next!==null;if(ji=0,Se=Jt=Nt=null,Wc=!1,ql=0,co=null,a)throw Error(i(300));r===null||ze||(r=r.dependencies,r!==null&&Gc(r)&&(ze=!0))}function Kv(r,a,o,u){Nt=r;var f=0;do{if(uo&&(co=null),ql=0,uo=!1,25<=f)throw Error(i(301));if(f+=1,Se=Jt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}H.H=Y2,m=a(o,u)}while(uo);return m}function B2(){var r=H.H,a=r.useState()[0];return a=typeof a.then=="function"?Hl(a):a,r=r.useState()[0],(Jt!==null?Jt.memoizedState:null)!==r&&(Nt.flags|=1024),a}function ap(){var r=Zc!==0;return Zc=0,r}function sp(r,a,o){a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~o}function op(r){if(Wc){for(r=r.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Wc=!1}ji=0,Se=Jt=Nt=null,uo=!1,ql=Zc=0,co=null}function dn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?Nt.memoizedState=Se=r:Se=Se.next=r,Se}function Re(){if(Jt===null){var r=Nt.alternate;r=r!==null?r.memoizedState:null}else r=Jt.next;var a=Se===null?Nt.memoizedState:Se.next;if(a!==null)Se=a,Jt=r;else{if(r===null)throw Nt.alternate===null?Error(i(467)):Error(i(310));Jt=r,r={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Se===null?Nt.memoizedState=Se=r:Se=Se.next=r}return Se}function lp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(r){var a=ql;return ql+=1,co===null&&(co=[]),r=Bv(co,r,a),a=Nt,(Se===null?a.memoizedState:Se.next)===null&&(a=a.alternate,H.H=a===null||a.memoizedState===null?C0:O0),r}function Jc(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Hl(r);if(r.$$typeof===W)return tn(r)}throw Error(i(438,String(r)))}function up(r){var a=null,o=Nt.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var u=Nt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=lp(),Nt.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(r),u=0;u<r;u++)o[u]=M;return a.index++,o}function si(r,a){return typeof a=="function"?a(r):a}function th(r){var a=Re();return cp(a,Jt,r)}function cp(r,a,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var _=f.next;f.next=m.next,m.next=_}a.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{a=f.next;var T=_=null,I=null,F=a,J=!1;do{var et=F.lane&-536870913;if(et!==F.lane?(Ft&et)===et:(ji&et)===et){var $=F.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),et===so&&(J=!0);else if((ji&$)===$){F=F.next,$===so&&(J=!0);continue}else et={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},I===null?(T=I=et,_=m):I=I.next=et,Nt.lanes|=$,Yi|=$;et=F.action,ls&&o(m,et),m=F.hasEagerState?F.eagerState:o(m,et)}else $={lane:et,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},I===null?(T=I=$,_=m):I=I.next=$,Nt.lanes|=et,Yi|=et;F=F.next}while(F!==null&&F!==a);if(I===null?_=m:I.next=T,!Tn(m,r.memoizedState)&&(ze=!0,J&&(o=oo,o!==null)))throw o;r.memoizedState=m,r.baseState=_,r.baseQueue=I,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function hp(r){var a=Re(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=a.memoizedState;if(f!==null){o.pending=null;var _=f=f.next;do m=r(m,_.action),_=_.next;while(_!==f);Tn(m,a.memoizedState)||(ze=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),o.lastRenderedState=m}return[m,u]}function Qv(r,a,o){var u=Nt,f=Re(),m=$t;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=a();var _=!Tn((Jt||f).memoizedState,o);_&&(f.memoizedState=o,ze=!0),f=f.queue;var T=Zv.bind(null,u,f,r);if(Gl(2048,8,T,[r]),f.getSnapshot!==a||_||Se!==null&&Se.memoizedState.tag&1){if(u.flags|=2048,ho(9,eh(),Wv.bind(null,u,f,o,a),null),ie===null)throw Error(i(349));m||(ji&124)!==0||Xv(u,a,o)}return o}function Xv(r,a,o){r.flags|=16384,r={getSnapshot:a,value:o},a=Nt.updateQueue,a===null?(a=lp(),Nt.updateQueue=a,a.stores=[r]):(o=a.stores,o===null?a.stores=[r]:o.push(r))}function Wv(r,a,o,u){a.value=o,a.getSnapshot=u,Jv(a)&&t0(r)}function Zv(r,a,o){return o(function(){Jv(a)&&t0(r)})}function Jv(r){var a=r.getSnapshot;r=r.value;try{var o=a();return!Tn(r,o)}catch{return!0}}function t0(r){var a=no(r,2);a!==null&&In(a,r,2)}function fp(r){var a=dn();if(typeof r=="function"){var o=r;if(r=o(),ls){_n(!0);try{o()}finally{_n(!1)}}}return a.memoizedState=a.baseState=r,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:r},a}function e0(r,a,o,u){return r.baseState=o,cp(r,Jt,typeof u=="function"?u:si)}function F2(r,a,o,u,f){if(rh(r))throw Error(i(485));if(r=a.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){m.listeners.push(_)}};H.T!==null?o(!0):m.isTransition=!1,u(m),o=a.pending,o===null?(m.next=a.pending=m,n0(a,m)):(m.next=o.next,a.pending=o.next=m)}}function n0(r,a){var o=a.action,u=a.payload,f=r.state;if(a.isTransition){var m=H.T,_={};H.T=_;try{var T=o(f,u),I=H.S;I!==null&&I(_,T),r0(r,a,T)}catch(F){dp(r,a,F)}finally{H.T=m}}else try{m=o(f,u),r0(r,a,m)}catch(F){dp(r,a,F)}}function r0(r,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){i0(r,a,u)},function(u){return dp(r,a,u)}):i0(r,a,o)}function i0(r,a,o){a.status="fulfilled",a.value=o,a0(a),r.state=o,a=r.pending,a!==null&&(o=a.next,o===a?r.pending=null:(o=o.next,a.next=o,n0(r,o)))}function dp(r,a,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=o,a0(a),a=a.next;while(a!==u)}r.action=null}function a0(r){r=r.listeners;for(var a=0;a<r.length;a++)(0,r[a])()}function s0(r,a){return a}function o0(r,a){if($t){var o=ie.formState;if(o!==null){t:{var u=Nt;if($t){if(ge){e:{for(var f=ge,m=Sr;f.nodeType!==8;){if(!m){f=null;break e}if(f=tr(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ge=tr(f.nextSibling),u=f.data==="F!";break t}}is(u)}u=!1}u&&(a=o[0])}}return o=dn(),o.memoizedState=o.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s0,lastRenderedState:a},o.queue=u,o=R0.bind(null,Nt,u),u.dispatch=o,u=fp(!1),m=vp.bind(null,Nt,!1,u.queue),u=dn(),f={state:a,dispatch:null,action:r,pending:null},u.queue=f,o=F2.bind(null,Nt,f,m,o),f.dispatch=o,u.memoizedState=r,[a,o,!1]}function l0(r){var a=Re();return u0(a,Jt,r)}function u0(r,a,o){if(a=cp(r,a,s0)[0],r=th(si)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=Hl(a)}catch(_){throw _===Ul?Kc:_}else u=a;a=Re();var f=a.queue,m=f.dispatch;return o!==a.memoizedState&&(Nt.flags|=2048,ho(9,eh(),q2.bind(null,f,o),null)),[u,m,r]}function q2(r,a){r.action=a}function c0(r){var a=Re(),o=Jt;if(o!==null)return u0(a,o,r);Re(),a=a.memoizedState,o=Re();var u=o.queue.dispatch;return o.memoizedState=r,[a,u,!1]}function ho(r,a,o,u){return r={tag:r,create:o,deps:u,inst:a,next:null},a=Nt.updateQueue,a===null&&(a=lp(),Nt.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,a.lastEffect=r),r}function eh(){return{destroy:void 0,resource:void 0}}function h0(){return Re().memoizedState}function nh(r,a,o,u){var f=dn();u=u===void 0?null:u,Nt.flags|=r,f.memoizedState=ho(1|a,eh(),o,u)}function Gl(r,a,o,u){var f=Re();u=u===void 0?null:u;var m=f.memoizedState.inst;Jt!==null&&u!==null&&rp(u,Jt.memoizedState.deps)?f.memoizedState=ho(a,m,o,u):(Nt.flags|=r,f.memoizedState=ho(1|a,m,o,u))}function f0(r,a){nh(8390656,8,r,a)}function d0(r,a){Gl(2048,8,r,a)}function p0(r,a){return Gl(4,2,r,a)}function m0(r,a){return Gl(4,4,r,a)}function g0(r,a){if(typeof a=="function"){r=r();var o=a(r);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function y0(r,a,o){o=o!=null?o.concat([r]):null,Gl(4,4,g0.bind(null,a,r),o)}function pp(){}function v0(r,a){var o=Re();a=a===void 0?null:a;var u=o.memoizedState;return a!==null&&rp(a,u[1])?u[0]:(o.memoizedState=[r,a],r)}function b0(r,a){var o=Re();a=a===void 0?null:a;var u=o.memoizedState;if(a!==null&&rp(a,u[1]))return u[0];if(u=r(),ls){_n(!0);try{r()}finally{_n(!1)}}return o.memoizedState=[u,a],u}function mp(r,a,o){return o===void 0||(ji&1073741824)!==0?r.memoizedState=a:(r.memoizedState=o,r=Tb(),Nt.lanes|=r,Yi|=r,o)}function _0(r,a,o,u){return Tn(o,a)?o:lo.current!==null?(r=mp(r,o,u),Tn(r,a)||(ze=!0),r):(ji&42)===0?(ze=!0,r.memoizedState=o):(r=Tb(),Nt.lanes|=r,Yi|=r,a)}function E0(r,a,o,u,f){var m=ot.p;ot.p=m!==0&&8>m?m:8;var _=H.T,T={};H.T=T,vp(r,!1,a,o);try{var I=f(),F=H.S;if(F!==null&&F(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var J=z2(I,u);$l(r,a,J,xn(r))}else $l(r,a,u,xn(r))}catch(et){$l(r,a,{then:function(){},status:"rejected",reason:et},xn())}finally{ot.p=m,H.T=_}}function H2(){}function gp(r,a,o,u){if(r.tag!==5)throw Error(i(476));var f=T0(r).queue;E0(r,f,a,ut,o===null?H2:function(){return A0(r),o(u)})}function T0(r){var a=r.memoizedState;if(a!==null)return a;a={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:ut},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:o},next:null},r.memoizedState=a,r=r.alternate,r!==null&&(r.memoizedState=a),a}function A0(r){var a=T0(r).next.queue;$l(r,a,{},xn())}function yp(){return tn(cu)}function w0(){return Re().memoizedState}function S0(){return Re().memoizedState}function G2(r){for(var a=r.return;a!==null;){switch(a.tag){case 24:case 3:var o=xn();r=Ui(o);var u=zi(a,r,o);u!==null&&(In(u,a,o),jl(u,a,o)),a={cache:Yd()},r.payload=a;return}a=a.return}}function $2(r,a,o){var u=xn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},rh(r)?x0(a,o):(o=Ld(r,a,o,u),o!==null&&(In(o,r,u),I0(o,a,u)))}function R0(r,a,o){var u=xn();$l(r,a,o,u)}function $l(r,a,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(rh(r))x0(a,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var _=a.lastRenderedState,T=m(_,o);if(f.hasEagerState=!0,f.eagerState=T,Tn(T,_))return jc(r,a,f,0),ie===null&&zc(),!1}catch{}finally{}if(o=Ld(r,a,f,u),o!==null)return In(o,r,u),I0(o,a,u),!0}return!1}function vp(r,a,o,u){if(u={lane:2,revertLane:Xp(),action:u,hasEagerState:!1,eagerState:null,next:null},rh(r)){if(a)throw Error(i(479))}else a=Ld(r,o,u,2),a!==null&&In(a,r,2)}function rh(r){var a=r.alternate;return r===Nt||a!==null&&a===Nt}function x0(r,a){uo=Wc=!0;var o=r.pending;o===null?a.next=a:(a.next=o.next,o.next=a),r.pending=a}function I0(r,a,o){if((o&4194048)!==0){var u=a.lanes;u&=r.pendingLanes,o|=u,a.lanes=o,pl(r,o)}}var ih={readContext:tn,use:Jc,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be},C0={readContext:tn,use:Jc,useCallback:function(r,a){return dn().memoizedState=[r,a===void 0?null:a],r},useContext:tn,useEffect:f0,useImperativeHandle:function(r,a,o){o=o!=null?o.concat([r]):null,nh(4194308,4,g0.bind(null,a,r),o)},useLayoutEffect:function(r,a){return nh(4194308,4,r,a)},useInsertionEffect:function(r,a){nh(4,2,r,a)},useMemo:function(r,a){var o=dn();a=a===void 0?null:a;var u=r();if(ls){_n(!0);try{r()}finally{_n(!1)}}return o.memoizedState=[u,a],u},useReducer:function(r,a,o){var u=dn();if(o!==void 0){var f=o(a);if(ls){_n(!0);try{o(a)}finally{_n(!1)}}}else f=a;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=$2.bind(null,Nt,r),[u.memoizedState,r]},useRef:function(r){var a=dn();return r={current:r},a.memoizedState=r},useState:function(r){r=fp(r);var a=r.queue,o=R0.bind(null,Nt,a);return a.dispatch=o,[r.memoizedState,o]},useDebugValue:pp,useDeferredValue:function(r,a){var o=dn();return mp(o,r,a)},useTransition:function(){var r=fp(!1);return r=E0.bind(null,Nt,r.queue,!0,!1),dn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,a,o){var u=Nt,f=dn();if($t){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),ie===null)throw Error(i(349));(Ft&124)!==0||Xv(u,a,o)}f.memoizedState=o;var m={value:o,getSnapshot:a};return f.queue=m,f0(Zv.bind(null,u,m,r),[r]),u.flags|=2048,ho(9,eh(),Wv.bind(null,u,m,o,a),null),o},useId:function(){var r=dn(),a=ie.identifierPrefix;if($t){var o=ri,u=ni;o=(u&~(1<<32-Je(u)-1)).toString(32)+o,a="«"+a+"R"+o,o=Zc++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=j2++,a="«"+a+"r"+o.toString(32)+"»";return r.memoizedState=a},useHostTransitionStatus:yp,useFormState:o0,useActionState:o0,useOptimistic:function(r){var a=dn();a.memoizedState=a.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=vp.bind(null,Nt,!0,o),o.dispatch=a,[r,a]},useMemoCache:up,useCacheRefresh:function(){return dn().memoizedState=G2.bind(null,Nt)}},O0={readContext:tn,use:Jc,useCallback:v0,useContext:tn,useEffect:d0,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:b0,useReducer:th,useRef:h0,useState:function(){return th(si)},useDebugValue:pp,useDeferredValue:function(r,a){var o=Re();return _0(o,Jt.memoizedState,r,a)},useTransition:function(){var r=th(si)[0],a=Re().memoizedState;return[typeof r=="boolean"?r:Hl(r),a]},useSyncExternalStore:Qv,useId:w0,useHostTransitionStatus:yp,useFormState:l0,useActionState:l0,useOptimistic:function(r,a){var o=Re();return e0(o,Jt,r,a)},useMemoCache:up,useCacheRefresh:S0},Y2={readContext:tn,use:Jc,useCallback:v0,useContext:tn,useEffect:d0,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:b0,useReducer:hp,useRef:h0,useState:function(){return hp(si)},useDebugValue:pp,useDeferredValue:function(r,a){var o=Re();return Jt===null?mp(o,r,a):_0(o,Jt.memoizedState,r,a)},useTransition:function(){var r=hp(si)[0],a=Re().memoizedState;return[typeof r=="boolean"?r:Hl(r),a]},useSyncExternalStore:Qv,useId:w0,useHostTransitionStatus:yp,useFormState:c0,useActionState:c0,useOptimistic:function(r,a){var o=Re();return Jt!==null?e0(o,Jt,r,a):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:up,useCacheRefresh:S0},fo=null,Yl=0;function ah(r){var a=Yl;return Yl+=1,fo===null&&(fo=[]),Bv(fo,r,a)}function Kl(r,a){a=a.props.ref,r.ref=a!==void 0?a:null}function sh(r,a){throw a.$$typeof===A?Error(i(525)):(r=Object.prototype.toString.call(a),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r)))}function k0(r){var a=r._init;return a(r._payload)}function N0(r){function a(z,V){if(r){var B=z.deletions;B===null?(z.deletions=[V],z.flags|=16):B.push(V)}}function o(z,V){if(!r)return null;for(;V!==null;)a(z,V),V=V.sibling;return null}function u(z){for(var V=new Map;z!==null;)z.key!==null?V.set(z.key,z):V.set(z.index,z),z=z.sibling;return V}function f(z,V){return z=ei(z,V),z.index=0,z.sibling=null,z}function m(z,V,B){return z.index=B,r?(B=z.alternate,B!==null?(B=B.index,B<V?(z.flags|=67108866,V):B):(z.flags|=67108866,V)):(z.flags|=1048576,V)}function _(z){return r&&z.alternate===null&&(z.flags|=67108866),z}function T(z,V,B,tt){return V===null||V.tag!==6?(V=zd(B,z.mode,tt),V.return=z,V):(V=f(V,B),V.return=z,V)}function I(z,V,B,tt){var pt=B.type;return pt===x?J(z,V,B.props.children,tt,B.key):V!==null&&(V.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===S&&k0(pt)===V.type)?(V=f(V,B.props),Kl(V,B),V.return=z,V):(V=Fc(B.type,B.key,B.props,null,z.mode,tt),Kl(V,B),V.return=z,V)}function F(z,V,B,tt){return V===null||V.tag!==4||V.stateNode.containerInfo!==B.containerInfo||V.stateNode.implementation!==B.implementation?(V=jd(B,z.mode,tt),V.return=z,V):(V=f(V,B.children||[]),V.return=z,V)}function J(z,V,B,tt,pt){return V===null||V.tag!==7?(V=ts(B,z.mode,tt,pt),V.return=z,V):(V=f(V,B),V.return=z,V)}function et(z,V,B){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=zd(""+V,z.mode,B),V.return=z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return B=Fc(V.type,V.key,V.props,null,z.mode,B),Kl(B,V),B.return=z,B;case k:return V=jd(V,z.mode,B),V.return=z,V;case S:var tt=V._init;return V=tt(V._payload),et(z,V,B)}if(ne(V)||U(V))return V=ts(V,z.mode,B,null),V.return=z,V;if(typeof V.then=="function")return et(z,ah(V),B);if(V.$$typeof===W)return et(z,$c(z,V),B);sh(z,V)}return null}function $(z,V,B,tt){var pt=V!==null?V.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pt!==null?null:T(z,V,""+B,tt);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case E:return B.key===pt?I(z,V,B,tt):null;case k:return B.key===pt?F(z,V,B,tt):null;case S:return pt=B._init,B=pt(B._payload),$(z,V,B,tt)}if(ne(B)||U(B))return pt!==null?null:J(z,V,B,tt,null);if(typeof B.then=="function")return $(z,V,ah(B),tt);if(B.$$typeof===W)return $(z,V,$c(z,B),tt);sh(z,B)}return null}function K(z,V,B,tt,pt){if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return z=z.get(B)||null,T(V,z,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:return z=z.get(tt.key===null?B:tt.key)||null,I(V,z,tt,pt);case k:return z=z.get(tt.key===null?B:tt.key)||null,F(V,z,tt,pt);case S:var Pt=tt._init;return tt=Pt(tt._payload),K(z,V,B,tt,pt)}if(ne(tt)||U(tt))return z=z.get(B)||null,J(V,z,tt,pt,null);if(typeof tt.then=="function")return K(z,V,B,ah(tt),pt);if(tt.$$typeof===W)return K(z,V,B,$c(V,tt),pt);sh(V,tt)}return null}function xt(z,V,B,tt){for(var pt=null,Pt=null,yt=V,Tt=V=0,Be=null;yt!==null&&Tt<B.length;Tt++){yt.index>Tt?(Be=yt,yt=null):Be=yt.sibling;var Gt=$(z,yt,B[Tt],tt);if(Gt===null){yt===null&&(yt=Be);break}r&&yt&&Gt.alternate===null&&a(z,yt),V=m(Gt,V,Tt),Pt===null?pt=Gt:Pt.sibling=Gt,Pt=Gt,yt=Be}if(Tt===B.length)return o(z,yt),$t&&ns(z,Tt),pt;if(yt===null){for(;Tt<B.length;Tt++)yt=et(z,B[Tt],tt),yt!==null&&(V=m(yt,V,Tt),Pt===null?pt=yt:Pt.sibling=yt,Pt=yt);return $t&&ns(z,Tt),pt}for(yt=u(yt);Tt<B.length;Tt++)Be=K(yt,z,Tt,B[Tt],tt),Be!==null&&(r&&Be.alternate!==null&&yt.delete(Be.key===null?Tt:Be.key),V=m(Be,V,Tt),Pt===null?pt=Be:Pt.sibling=Be,Pt=Be);return r&&yt.forEach(function(na){return a(z,na)}),$t&&ns(z,Tt),pt}function Et(z,V,B,tt){if(B==null)throw Error(i(151));for(var pt=null,Pt=null,yt=V,Tt=V=0,Be=null,Gt=B.next();yt!==null&&!Gt.done;Tt++,Gt=B.next()){yt.index>Tt?(Be=yt,yt=null):Be=yt.sibling;var na=$(z,yt,Gt.value,tt);if(na===null){yt===null&&(yt=Be);break}r&&yt&&na.alternate===null&&a(z,yt),V=m(na,V,Tt),Pt===null?pt=na:Pt.sibling=na,Pt=na,yt=Be}if(Gt.done)return o(z,yt),$t&&ns(z,Tt),pt;if(yt===null){for(;!Gt.done;Tt++,Gt=B.next())Gt=et(z,Gt.value,tt),Gt!==null&&(V=m(Gt,V,Tt),Pt===null?pt=Gt:Pt.sibling=Gt,Pt=Gt);return $t&&ns(z,Tt),pt}for(yt=u(yt);!Gt.done;Tt++,Gt=B.next())Gt=K(yt,z,Tt,Gt.value,tt),Gt!==null&&(r&&Gt.alternate!==null&&yt.delete(Gt.key===null?Tt:Gt.key),V=m(Gt,V,Tt),Pt===null?pt=Gt:Pt.sibling=Gt,Pt=Gt);return r&&yt.forEach(function(KR){return a(z,KR)}),$t&&ns(z,Tt),pt}function ee(z,V,B,tt){if(typeof B=="object"&&B!==null&&B.type===x&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case E:t:{for(var pt=B.key;V!==null;){if(V.key===pt){if(pt=B.type,pt===x){if(V.tag===7){o(z,V.sibling),tt=f(V,B.props.children),tt.return=z,z=tt;break t}}else if(V.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===S&&k0(pt)===V.type){o(z,V.sibling),tt=f(V,B.props),Kl(tt,B),tt.return=z,z=tt;break t}o(z,V);break}else a(z,V);V=V.sibling}B.type===x?(tt=ts(B.props.children,z.mode,tt,B.key),tt.return=z,z=tt):(tt=Fc(B.type,B.key,B.props,null,z.mode,tt),Kl(tt,B),tt.return=z,z=tt)}return _(z);case k:t:{for(pt=B.key;V!==null;){if(V.key===pt)if(V.tag===4&&V.stateNode.containerInfo===B.containerInfo&&V.stateNode.implementation===B.implementation){o(z,V.sibling),tt=f(V,B.children||[]),tt.return=z,z=tt;break t}else{o(z,V);break}else a(z,V);V=V.sibling}tt=jd(B,z.mode,tt),tt.return=z,z=tt}return _(z);case S:return pt=B._init,B=pt(B._payload),ee(z,V,B,tt)}if(ne(B))return xt(z,V,B,tt);if(U(B)){if(pt=U(B),typeof pt!="function")throw Error(i(150));return B=pt.call(B),Et(z,V,B,tt)}if(typeof B.then=="function")return ee(z,V,ah(B),tt);if(B.$$typeof===W)return ee(z,V,$c(z,B),tt);sh(z,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,V!==null&&V.tag===6?(o(z,V.sibling),tt=f(V,B),tt.return=z,z=tt):(o(z,V),tt=zd(B,z.mode,tt),tt.return=z,z=tt),_(z)):o(z,V)}return function(z,V,B,tt){try{Yl=0;var pt=ee(z,V,B,tt);return fo=null,pt}catch(yt){if(yt===Ul||yt===Kc)throw yt;var Pt=An(29,yt,null,z.mode);return Pt.lanes=tt,Pt.return=z,Pt}finally{}}}var po=N0(!0),D0=N0(!1),qn=Z(null),Rr=null;function Bi(r){var a=r.alternate;lt(Pe,Pe.current&1),lt(qn,r),Rr===null&&(a===null||lo.current!==null||a.memoizedState!==null)&&(Rr=r)}function P0(r){if(r.tag===22){if(lt(Pe,Pe.current),lt(qn,r),Rr===null){var a=r.alternate;a!==null&&a.memoizedState!==null&&(Rr=r)}}else Fi()}function Fi(){lt(Pe,Pe.current),lt(qn,qn.current)}function oi(r){ht(qn),Rr===r&&(Rr=null),ht(Pe)}var Pe=Z(0);function oh(r){for(var a=r;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||lm(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function bp(r,a,o,u){a=r.memoizedState,o=o(u,a),o=o==null?a:v({},a,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var _p={enqueueSetState:function(r,a,o){r=r._reactInternals;var u=xn(),f=Ui(u);f.payload=a,o!=null&&(f.callback=o),a=zi(r,f,u),a!==null&&(In(a,r,u),jl(a,r,u))},enqueueReplaceState:function(r,a,o){r=r._reactInternals;var u=xn(),f=Ui(u);f.tag=1,f.payload=a,o!=null&&(f.callback=o),a=zi(r,f,u),a!==null&&(In(a,r,u),jl(a,r,u))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var o=xn(),u=Ui(o);u.tag=2,a!=null&&(u.callback=a),a=zi(r,u,o),a!==null&&(In(a,r,o),jl(a,r,o))}};function M0(r,a,o,u,f,m,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,_):a.prototype&&a.prototype.isPureReactComponent?!Ol(o,u)||!Ol(f,m):!0}function V0(r,a,o,u){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,u),a.state!==r&&_p.enqueueReplaceState(a,a.state,null)}function us(r,a){var o=a;if("ref"in a){o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}if(r=r.defaultProps){o===a&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var lh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function L0(r){lh(r)}function U0(r){console.error(r)}function z0(r){lh(r)}function uh(r,a){try{var o=r.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function j0(r,a,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ep(r,a,o){return o=Ui(o),o.tag=3,o.payload={element:null},o.callback=function(){uh(r,a)},o}function B0(r){return r=Ui(r),r.tag=3,r}function F0(r,a,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){j0(a,o,u)}}var _=o.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(r.callback=function(){j0(a,o,u),typeof f!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function K2(r,a,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=o.alternate,a!==null&&Ml(a,o,f,!0),o=qn.current,o!==null){switch(o.tag){case 13:return Rr===null?Gp():o.alternate===null&&ye===0&&(ye=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Xd?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([u]):a.add(u),Yp(r,u,f)),!1;case 22:return o.flags|=65536,u===Xd?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([u]):o.add(u)),Yp(r,u,f)),!1}throw Error(i(435,o.tag))}return Yp(r,u,f),Gp(),!1}if($t)return a=qn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,u!==qd&&(r=Error(i(422),{cause:u}),Pl(zn(r,o)))):(u!==qd&&(a=Error(i(423),{cause:u}),Pl(zn(a,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=zn(u,o),f=Ep(r.stateNode,u,f),Jd(r,f),ye!==4&&(ye=2)),!1;var m=Error(i(520),{cause:u});if(m=zn(m,o),eu===null?eu=[m]:eu.push(m),ye!==4&&(ye=2),a===null)return!0;u=zn(u,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Ep(o.stateNode,u,r),Jd(o,r),!1;case 1:if(a=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ki===null||!Ki.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=B0(f),F0(f,r,o,u),Jd(o,f),!1}o=o.return}while(o!==null);return!1}var q0=Error(i(461)),ze=!1;function $e(r,a,o,u){a.child=r===null?D0(a,null,o,u):po(a,r.child,o,u)}function H0(r,a,o,u,f){o=o.render;var m=a.ref;if("ref"in u){var _={};for(var T in u)T!=="ref"&&(_[T]=u[T])}else _=u;return ss(a),u=ip(r,a,o,_,m,f),T=ap(),r!==null&&!ze?(sp(r,a,f),li(r,a,f)):($t&&T&&Bd(a),a.flags|=1,$e(r,a,u,f),a.child)}function G0(r,a,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!Ud(m)&&m.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=m,$0(r,a,m,u,f)):(r=Fc(o.type,null,u,a,a.mode,f),r.ref=a.ref,r.return=a,a.child=r)}if(m=r.child,!Cp(r,f)){var _=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ol,o(_,u)&&r.ref===a.ref)return li(r,a,f)}return a.flags|=1,r=ei(m,u),r.ref=a.ref,r.return=a,a.child=r}function $0(r,a,o,u,f){if(r!==null){var m=r.memoizedProps;if(Ol(m,u)&&r.ref===a.ref)if(ze=!1,a.pendingProps=u=m,Cp(r,f))(r.flags&131072)!==0&&(ze=!0);else return a.lanes=r.lanes,li(r,a,f)}return Tp(r,a,o,u,f)}function Y0(r,a,o){var u=a.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=a.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~u}else a.childLanes=0,a.child=null;return K0(r,a,u,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},r!==null&&Yc(a,m!==null?m.cachePool:null),m!==null?$v(a,m):ep(),P0(a);else return a.lanes=a.childLanes=536870912,K0(r,a,m!==null?m.baseLanes|o:o,o)}else m!==null?(Yc(a,m.cachePool),$v(a,m),Fi(),a.memoizedState=null):(r!==null&&Yc(a,null),ep(),Fi());return $e(r,a,f,o),a.child}function K0(r,a,o,u){var f=Qd();return f=f===null?null:{parent:De._currentValue,pool:f},a.memoizedState={baseLanes:o,cachePool:f},r!==null&&Yc(a,null),ep(),P0(a),r!==null&&Ml(r,a,u,!0),null}function ch(r,a){var o=a.ref;if(o===null)r!==null&&r.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(a.flags|=4194816)}}function Tp(r,a,o,u,f){return ss(a),o=ip(r,a,o,u,void 0,f),u=ap(),r!==null&&!ze?(sp(r,a,f),li(r,a,f)):($t&&u&&Bd(a),a.flags|=1,$e(r,a,o,f),a.child)}function Q0(r,a,o,u,f,m){return ss(a),a.updateQueue=null,o=Kv(a,u,o,f),Yv(r),u=ap(),r!==null&&!ze?(sp(r,a,m),li(r,a,m)):($t&&u&&Bd(a),a.flags|=1,$e(r,a,o,m),a.child)}function X0(r,a,o,u,f){if(ss(a),a.stateNode===null){var m=ro,_=o.contextType;typeof _=="object"&&_!==null&&(m=tn(_)),m=new o(u,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=_p,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=u,m.state=a.memoizedState,m.refs={},Wd(a),_=o.contextType,m.context=typeof _=="object"&&_!==null?tn(_):ro,m.state=a.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(bp(a,o,_,u),m.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(_=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),_!==m.state&&_p.enqueueReplaceState(m,m.state,null),Fl(a,u,m,f),Bl(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(r===null){m=a.stateNode;var T=a.memoizedProps,I=us(o,T);m.props=I;var F=m.context,J=o.contextType;_=ro,typeof J=="object"&&J!==null&&(_=tn(J));var et=o.getDerivedStateFromProps;J=typeof et=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=a.pendingProps!==T,J||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||F!==_)&&V0(a,m,u,_),Li=!1;var $=a.memoizedState;m.state=$,Fl(a,u,m,f),Bl(),F=a.memoizedState,T||$!==F||Li?(typeof et=="function"&&(bp(a,o,et,u),F=a.memoizedState),(I=Li||M0(a,o,I,u,$,F,_))?(J||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=F),m.props=u,m.state=F,m.context=_,u=I):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{m=a.stateNode,Zd(r,a),_=a.memoizedProps,J=us(o,_),m.props=J,et=a.pendingProps,$=m.context,F=o.contextType,I=ro,typeof F=="object"&&F!==null&&(I=tn(F)),T=o.getDerivedStateFromProps,(F=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==et||$!==I)&&V0(a,m,u,I),Li=!1,$=a.memoizedState,m.state=$,Fl(a,u,m,f),Bl();var K=a.memoizedState;_!==et||$!==K||Li||r!==null&&r.dependencies!==null&&Gc(r.dependencies)?(typeof T=="function"&&(bp(a,o,T,u),K=a.memoizedState),(J=Li||M0(a,o,J,u,$,K,I)||r!==null&&r.dependencies!==null&&Gc(r.dependencies))?(F||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,K,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,K,I)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===r.memoizedProps&&$===r.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===r.memoizedProps&&$===r.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=K),m.props=u,m.state=K,m.context=I,u=J):(typeof m.componentDidUpdate!="function"||_===r.memoizedProps&&$===r.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===r.memoizedProps&&$===r.memoizedState||(a.flags|=1024),u=!1)}return m=u,ch(r,a),u=(a.flags&128)!==0,m||u?(m=a.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,r!==null&&u?(a.child=po(a,r.child,null,f),a.child=po(a,null,o,f)):$e(r,a,o,f),a.memoizedState=m.state,r=a.child):r=li(r,a,f),r}function W0(r,a,o,u){return Dl(),a.flags|=256,$e(r,a,o,u),a.child}var Ap={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wp(r){return{baseLanes:r,cachePool:Uv()}}function Sp(r,a,o){return r=r!==null?r.childLanes&~o:0,a&&(r|=Hn),r}function Z0(r,a,o){var u=a.pendingProps,f=!1,m=(a.flags&128)!==0,_;if((_=m)||(_=r!==null&&r.memoizedState===null?!1:(Pe.current&2)!==0),_&&(f=!0,a.flags&=-129),_=(a.flags&32)!==0,a.flags&=-33,r===null){if($t){if(f?Bi(a):Fi(),$t){var T=ge,I;if(I=T){t:{for(I=T,T=Sr;I.nodeType!==8;){if(!T){T=null;break t}if(I=tr(I.nextSibling),I===null){T=null;break t}}T=I}T!==null?(a.memoizedState={dehydrated:T,treeContext:es!==null?{id:ni,overflow:ri}:null,retryLane:536870912,hydrationErrors:null},I=An(18,null,null,0),I.stateNode=T,I.return=a,a.child=I,hn=a,ge=null,I=!0):I=!1}I||is(a)}if(T=a.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return lm(T)?a.lanes=32:a.lanes=536870912,null;oi(a)}return T=u.children,u=u.fallback,f?(Fi(),f=a.mode,T=hh({mode:"hidden",children:T},f),u=ts(u,f,o,null),T.return=a,u.return=a,T.sibling=u,a.child=T,f=a.child,f.memoizedState=wp(o),f.childLanes=Sp(r,_,o),a.memoizedState=Ap,u):(Bi(a),Rp(a,T))}if(I=r.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(m)a.flags&256?(Bi(a),a.flags&=-257,a=xp(r,a,o)):a.memoizedState!==null?(Fi(),a.child=r.child,a.flags|=128,a=null):(Fi(),f=u.fallback,T=a.mode,u=hh({mode:"visible",children:u.children},T),f=ts(f,T,o,null),f.flags|=2,u.return=a,f.return=a,u.sibling=f,a.child=u,po(a,r.child,null,o),u=a.child,u.memoizedState=wp(o),u.childLanes=Sp(r,_,o),a.memoizedState=Ap,a=f);else if(Bi(a),lm(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var F=_.dgst;_=F,u=Error(i(419)),u.stack="",u.digest=_,Pl({value:u,source:null,stack:null}),a=xp(r,a,o)}else if(ze||Ml(r,a,o,!1),_=(o&r.childLanes)!==0,ze||_){if(_=ie,_!==null&&(u=o&-o,u=(u&42)!==0?1:Ci(u),u=(u&(_.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,no(r,u),In(_,r,u),q0;T.data==="$?"||Gp(),a=xp(r,a,o)}else T.data==="$?"?(a.flags|=192,a.child=r.child,a=null):(r=I.treeContext,ge=tr(T.nextSibling),hn=a,$t=!0,rs=null,Sr=!1,r!==null&&(Bn[Fn++]=ni,Bn[Fn++]=ri,Bn[Fn++]=es,ni=r.id,ri=r.overflow,es=a),a=Rp(a,u.children),a.flags|=4096);return a}return f?(Fi(),f=u.fallback,T=a.mode,I=r.child,F=I.sibling,u=ei(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,F!==null?f=ei(F,f):(f=ts(f,T,o,null),f.flags|=2),f.return=a,u.return=a,u.sibling=f,a.child=u,u=f,f=a.child,T=r.child.memoizedState,T===null?T=wp(o):(I=T.cachePool,I!==null?(F=De._currentValue,I=I.parent!==F?{parent:F,pool:F}:I):I=Uv(),T={baseLanes:T.baseLanes|o,cachePool:I}),f.memoizedState=T,f.childLanes=Sp(r,_,o),a.memoizedState=Ap,u):(Bi(a),o=r.child,r=o.sibling,o=ei(o,{mode:"visible",children:u.children}),o.return=a,o.sibling=null,r!==null&&(_=a.deletions,_===null?(a.deletions=[r],a.flags|=16):_.push(r)),a.child=o,a.memoizedState=null,o)}function Rp(r,a){return a=hh({mode:"visible",children:a},r.mode),a.return=r,r.child=a}function hh(r,a){return r=An(22,r,null,a),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function xp(r,a,o){return po(a,r.child,null,o),r=Rp(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function J0(r,a,o){r.lanes|=a;var u=r.alternate;u!==null&&(u.lanes|=a),Gd(r.return,a,o)}function Ip(r,a,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function tb(r,a,o){var u=a.pendingProps,f=u.revealOrder,m=u.tail;if($e(r,a,u.children,o),u=Pe.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(r!==null&&(r.flags&128)!==0)t:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&J0(r,o,a);else if(r.tag===19)J0(r,o,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break t;for(;r.sibling===null;){if(r.return===null||r.return===a)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(lt(Pe,u),f){case"forwards":for(o=a.child,f=null;o!==null;)r=o.alternate,r!==null&&oh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=a.child,a.child=null):(f=o.sibling,o.sibling=null),Ip(a,!1,f,o,m);break;case"backwards":for(o=null,f=a.child,a.child=null;f!==null;){if(r=f.alternate,r!==null&&oh(r)===null){a.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}Ip(a,!0,o,null,m);break;case"together":Ip(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function li(r,a,o){if(r!==null&&(a.dependencies=r.dependencies),Yi|=a.lanes,(o&a.childLanes)===0)if(r!==null){if(Ml(r,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(r!==null&&a.child!==r.child)throw Error(i(153));if(a.child!==null){for(r=a.child,o=ei(r,r.pendingProps),a.child=o,o.return=a;r.sibling!==null;)r=r.sibling,o=o.sibling=ei(r,r.pendingProps),o.return=a;o.sibling=null}return a.child}function Cp(r,a){return(r.lanes&a)!==0?!0:(r=r.dependencies,!!(r!==null&&Gc(r)))}function Q2(r,a,o){switch(a.tag){case 3:Ht(a,a.stateNode.containerInfo),Vi(a,De,r.memoizedState.cache),Dl();break;case 27:case 5:Ii(a);break;case 4:Ht(a,a.stateNode.containerInfo);break;case 10:Vi(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(Bi(a),a.flags|=128,null):(o&a.child.childLanes)!==0?Z0(r,a,o):(Bi(a),r=li(r,a,o),r!==null?r.sibling:null);Bi(a);break;case 19:var f=(r.flags&128)!==0;if(u=(o&a.childLanes)!==0,u||(Ml(r,a,o,!1),u=(o&a.childLanes)!==0),f){if(u)return tb(r,a,o);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),lt(Pe,Pe.current),u)break;return null;case 22:case 23:return a.lanes=0,Y0(r,a,o);case 24:Vi(a,De,r.memoizedState.cache)}return li(r,a,o)}function eb(r,a,o){if(r!==null)if(r.memoizedProps!==a.pendingProps)ze=!0;else{if(!Cp(r,o)&&(a.flags&128)===0)return ze=!1,Q2(r,a,o);ze=(r.flags&131072)!==0}else ze=!1,$t&&(a.flags&1048576)!==0&&kv(a,Hc,a.index);switch(a.lanes=0,a.tag){case 16:t:{r=a.pendingProps;var u=a.elementType,f=u._init;if(u=f(u._payload),a.type=u,typeof u=="function")Ud(u)?(r=us(u,r),a.tag=1,a=X0(null,a,u,r,o)):(a.tag=0,a=Tp(null,a,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===at){a.tag=11,a=H0(null,a,u,r,o);break t}else if(f===D){a.tag=14,a=G0(null,a,u,r,o);break t}}throw a=oe(u)||u,Error(i(306,a,""))}}return a;case 0:return Tp(r,a,a.type,a.pendingProps,o);case 1:return u=a.type,f=us(u,a.pendingProps),X0(r,a,u,f,o);case 3:t:{if(Ht(a,a.stateNode.containerInfo),r===null)throw Error(i(387));u=a.pendingProps;var m=a.memoizedState;f=m.element,Zd(r,a),Fl(a,u,null,o);var _=a.memoizedState;if(u=_.cache,Vi(a,De,u),u!==m.cache&&$d(a,[De],o,!0),Bl(),u=_.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:_.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=W0(r,a,u,o);break t}else if(u!==f){f=zn(Error(i(424)),a),Pl(f),a=W0(r,a,u,o);break t}else{switch(r=a.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(ge=tr(r.firstChild),hn=a,$t=!0,rs=null,Sr=!0,o=D0(a,null,u,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Dl(),u===f){a=li(r,a,o);break t}$e(r,a,u,o)}a=a.child}return a;case 26:return ch(r,a),r===null?(o=a_(a.type,null,a.pendingProps,null))?a.memoizedState=o:$t||(o=a.type,r=a.pendingProps,u=Sh(At.current).createElement(o),u[Oe]=a,u[Ae]=r,Ke(u,o,r),ve(u),a.stateNode=u):a.memoizedState=a_(a.type,r.memoizedProps,a.pendingProps,r.memoizedState),null;case 27:return Ii(a),r===null&&$t&&(u=a.stateNode=n_(a.type,a.pendingProps,At.current),hn=a,Sr=!0,f=ge,Wi(a.type)?(um=f,ge=tr(u.firstChild)):ge=f),$e(r,a,a.pendingProps.children,o),ch(r,a),r===null&&(a.flags|=4194304),a.child;case 5:return r===null&&$t&&((f=u=ge)&&(u=AR(u,a.type,a.pendingProps,Sr),u!==null?(a.stateNode=u,hn=a,ge=tr(u.firstChild),Sr=!1,f=!0):f=!1),f||is(a)),Ii(a),f=a.type,m=a.pendingProps,_=r!==null?r.memoizedProps:null,u=m.children,am(f,m)?u=null:_!==null&&am(f,_)&&(a.flags|=32),a.memoizedState!==null&&(f=ip(r,a,B2,null,null,o),cu._currentValue=f),ch(r,a),$e(r,a,u,o),a.child;case 6:return r===null&&$t&&((r=o=ge)&&(o=wR(o,a.pendingProps,Sr),o!==null?(a.stateNode=o,hn=a,ge=null,r=!0):r=!1),r||is(a)),null;case 13:return Z0(r,a,o);case 4:return Ht(a,a.stateNode.containerInfo),u=a.pendingProps,r===null?a.child=po(a,null,u,o):$e(r,a,u,o),a.child;case 11:return H0(r,a,a.type,a.pendingProps,o);case 7:return $e(r,a,a.pendingProps,o),a.child;case 8:return $e(r,a,a.pendingProps.children,o),a.child;case 12:return $e(r,a,a.pendingProps.children,o),a.child;case 10:return u=a.pendingProps,Vi(a,a.type,u.value),$e(r,a,u.children,o),a.child;case 9:return f=a.type._context,u=a.pendingProps.children,ss(a),f=tn(f),u=u(f),a.flags|=1,$e(r,a,u,o),a.child;case 14:return G0(r,a,a.type,a.pendingProps,o);case 15:return $0(r,a,a.type,a.pendingProps,o);case 19:return tb(r,a,o);case 31:return u=a.pendingProps,o=a.mode,u={mode:u.mode,children:u.children},r===null?(o=hh(u,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=ei(r.child,u),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return Y0(r,a,o);case 24:return ss(a),u=tn(De),r===null?(f=Qd(),f===null&&(f=ie,m=Yd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),a.memoizedState={parent:u,cache:f},Wd(a),Vi(a,De,f)):((r.lanes&o)!==0&&(Zd(r,a),Fl(a,null,null,o),Bl()),f=r.memoizedState,m=a.memoizedState,f.parent!==u?(f={parent:u,cache:u},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Vi(a,De,u)):(u=m.cache,Vi(a,De,u),u!==f.cache&&$d(a,[De],o,!0))),$e(r,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function ui(r){r.flags|=4}function nb(r,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!c_(a)){if(a=qn.current,a!==null&&((Ft&4194048)===Ft?Rr!==null:(Ft&62914560)!==Ft&&(Ft&536870912)===0||a!==Rr))throw zl=Xd,zv;r.flags|=8192}}function fh(r,a){a!==null&&(r.flags|=4),r.flags&16384&&(a=r.tag!==22?fl():536870912,r.lanes|=a,vo|=a)}function Ql(r,a){if(!$t)switch(r.tailMode){case"hidden":a=r.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function de(r){var a=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(a)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,a}function X2(r,a,o){var u=a.pendingProps;switch(Fd(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(a),null;case 1:return de(a),null;case 3:return o=a.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),ai(De),dr(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Nl(a)?ui(a):r===null||r.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Pv())),de(a),null;case 26:return o=a.memoizedState,r===null?(ui(a),o!==null?(de(a),nb(a,o)):(de(a),a.flags&=-16777217)):o?o!==r.memoizedState?(ui(a),de(a),nb(a,o)):(de(a),a.flags&=-16777217):(r.memoizedProps!==u&&ui(a),de(a),a.flags&=-16777217),null;case 27:Fr(a),o=At.current;var f=a.type;if(r!==null&&a.stateNode!=null)r.memoizedProps!==u&&ui(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return de(a),null}r=bt.current,Nl(a)?Nv(a):(r=n_(f,u,o),a.stateNode=r,ui(a))}return de(a),null;case 5:if(Fr(a),o=a.type,r!==null&&a.stateNode!=null)r.memoizedProps!==u&&ui(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return de(a),null}if(r=bt.current,Nl(a))Nv(a);else{switch(f=Sh(At.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[Oe]=a,r[Ae]=u;t:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break t;for(;f.sibling===null;){if(f.return===null||f.return===a)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=r;t:switch(Ke(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ui(a)}}return de(a),a.flags&=-16777217,null;case 6:if(r&&a.stateNode!=null)r.memoizedProps!==u&&ui(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(r=At.current,Nl(a)){if(r=a.stateNode,o=a.memoizedProps,u=null,f=hn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[Oe]=a,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Qb(r.nodeValue,o)),r||is(a)}else r=Sh(r).createTextNode(u),r[Oe]=a,a.stateNode=r}return de(a),null;case 13:if(u=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=Nl(a),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Oe]=a}else Dl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;de(a),f=!1}else f=Pv(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(oi(a),a):(oi(a),null)}if(oi(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=a.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(a.child.flags|=8192),fh(a,a.updateQueue),de(a),null;case 4:return dr(),r===null&&tm(a.stateNode.containerInfo),de(a),null;case 10:return ai(a.type),de(a),null;case 19:if(ht(Pe),f=a.memoizedState,f===null)return de(a),null;if(u=(a.flags&128)!==0,m=f.rendering,m===null)if(u)Ql(f,!1);else{if(ye!==0||r!==null&&(r.flags&128)!==0)for(r=a.child;r!==null;){if(m=oh(r),m!==null){for(a.flags|=128,Ql(f,!1),r=m.updateQueue,a.updateQueue=r,fh(a,r),a.subtreeFlags=0,r=o,o=a.child;o!==null;)Ov(o,r),o=o.sibling;return lt(Pe,Pe.current&1|2),a.child}r=r.sibling}f.tail!==null&&Dn()>mh&&(a.flags|=128,u=!0,Ql(f,!1),a.lanes=4194304)}else{if(!u)if(r=oh(m),r!==null){if(a.flags|=128,u=!0,r=r.updateQueue,a.updateQueue=r,fh(a,r),Ql(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!$t)return de(a),null}else 2*Dn()-f.renderingStartTime>mh&&o!==536870912&&(a.flags|=128,u=!0,Ql(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(r=f.last,r!==null?r.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Dn(),a.sibling=null,r=Pe.current,lt(Pe,u?r&1|2:r&1),a):(de(a),null);case 22:case 23:return oi(a),np(),u=a.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(o&536870912)!==0&&(a.flags&128)===0&&(de(a),a.subtreeFlags&6&&(a.flags|=8192)):de(a),o=a.updateQueue,o!==null&&fh(a,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048),r!==null&&ht(os),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),ai(De),de(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function W2(r,a){switch(Fd(a),a.tag){case 1:return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return ai(De),dr(),r=a.flags,(r&65536)!==0&&(r&128)===0?(a.flags=r&-65537|128,a):null;case 26:case 27:case 5:return Fr(a),null;case 13:if(oi(a),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Dl()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return ht(Pe),null;case 4:return dr(),null;case 10:return ai(a.type),null;case 22:case 23:return oi(a),np(),r!==null&&ht(os),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 24:return ai(De),null;case 25:return null;default:return null}}function rb(r,a){switch(Fd(a),a.tag){case 3:ai(De),dr();break;case 26:case 27:case 5:Fr(a);break;case 4:dr();break;case 13:oi(a);break;case 19:ht(Pe);break;case 10:ai(a.type);break;case 22:case 23:oi(a),np(),r!==null&&ht(os);break;case 24:ai(De)}}function Xl(r,a){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,_=o.inst;u=m(),_.destroy=u}o=o.next}while(o!==f)}}catch(T){re(a,a.return,T)}}function qi(r,a,o){try{var u=a.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var _=u.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,f=a;var I=o,F=T;try{F()}catch(J){re(f,I,J)}}}u=u.next}while(u!==m)}}catch(J){re(a,a.return,J)}}function ib(r){var a=r.updateQueue;if(a!==null){var o=r.stateNode;try{Gv(a,o)}catch(u){re(r,r.return,u)}}}function ab(r,a,o){o.props=us(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){re(r,a,u)}}function Wl(r,a){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){re(r,a,f)}}function xr(r,a){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){re(r,a,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){re(r,a,f)}else o.current=null}function sb(r){var a=r.type,o=r.memoizedProps,u=r.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break t;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){re(r,r.return,f)}}function Op(r,a,o){try{var u=r.stateNode;vR(u,r.type,o,a),u[Ae]=a}catch(f){re(r,r.return,f)}}function ob(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Wi(r.type)||r.tag===4}function kp(r){t:for(;;){for(;r.sibling===null;){if(r.return===null||ob(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Wi(r.type)||r.flags&2||r.child===null||r.tag===4)continue t;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Np(r,a,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(r),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=wh));else if(u!==4&&(u===27&&Wi(r.type)&&(o=r.stateNode,a=null),r=r.child,r!==null))for(Np(r,a,o),r=r.sibling;r!==null;)Np(r,a,o),r=r.sibling}function dh(r,a,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,a?o.insertBefore(r,a):o.appendChild(r);else if(u!==4&&(u===27&&Wi(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(dh(r,a,o),r=r.sibling;r!==null;)dh(r,a,o),r=r.sibling}function lb(r){var a=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Ke(a,u,o),a[Oe]=r,a[Ae]=o}catch(m){re(r,r.return,m)}}var ci=!1,_e=!1,Dp=!1,ub=typeof WeakSet=="function"?WeakSet:Set,je=null;function Z2(r,a){if(r=r.containerInfo,rm=kh,r=_v(r),kd(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else t:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break t}var _=0,T=-1,I=-1,F=0,J=0,et=r,$=null;e:for(;;){for(var K;et!==o||f!==0&&et.nodeType!==3||(T=_+f),et!==m||u!==0&&et.nodeType!==3||(I=_+u),et.nodeType===3&&(_+=et.nodeValue.length),(K=et.firstChild)!==null;)$=et,et=K;for(;;){if(et===r)break e;if($===o&&++F===f&&(T=_),$===m&&++J===u&&(I=_),(K=et.nextSibling)!==null)break;et=$,$=et.parentNode}et=K}o=T===-1||I===-1?null:{start:T,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(im={focusedElem:r,selectionRange:o},kh=!1,je=a;je!==null;)if(a=je,r=a.child,(a.subtreeFlags&1024)!==0&&r!==null)r.return=a,je=r;else for(;je!==null;){switch(a=je,m=a.alternate,r=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=a,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var xt=us(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(xt,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(Et){re(o,o.return,Et)}}break;case 3:if((r&1024)!==0){if(r=a.stateNode.containerInfo,o=r.nodeType,o===9)om(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":om(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=a.sibling,r!==null){r.return=a.return,je=r;break}je=a.return}}function cb(r,a,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Hi(r,o),u&4&&Xl(5,o);break;case 1:if(Hi(r,o),u&4)if(r=o.stateNode,a===null)try{r.componentDidMount()}catch(_){re(o,o.return,_)}else{var f=us(o.type,a.memoizedProps);a=a.memoizedState;try{r.componentDidUpdate(f,a,r.__reactInternalSnapshotBeforeUpdate)}catch(_){re(o,o.return,_)}}u&64&&ib(o),u&512&&Wl(o,o.return);break;case 3:if(Hi(r,o),u&64&&(r=o.updateQueue,r!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Gv(r,a)}catch(_){re(o,o.return,_)}}break;case 27:a===null&&u&4&&lb(o);case 26:case 5:Hi(r,o),a===null&&u&4&&sb(o),u&512&&Wl(o,o.return);break;case 12:Hi(r,o);break;case 13:Hi(r,o),u&4&&db(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=oR.bind(null,o),SR(r,o))));break;case 22:if(u=o.memoizedState!==null||ci,!u){a=a!==null&&a.memoizedState!==null||_e,f=ci;var m=_e;ci=u,(_e=a)&&!m?Gi(r,o,(o.subtreeFlags&8772)!==0):Hi(r,o),ci=f,_e=m}break;case 30:break;default:Hi(r,o)}}function hb(r){var a=r.alternate;a!==null&&(r.alternate=null,hb(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&Ni(a)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var ce=null,pn=!1;function hi(r,a,o){for(o=o.child;o!==null;)fb(r,a,o),o=o.sibling}function fb(r,a,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(me,o)}catch{}switch(o.tag){case 26:_e||xr(o,a),hi(r,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:_e||xr(o,a);var u=ce,f=pn;Wi(o.type)&&(ce=o.stateNode,pn=!1),hi(r,a,o),su(o.stateNode),ce=u,pn=f;break;case 5:_e||xr(o,a);case 6:if(u=ce,f=pn,ce=null,hi(r,a,o),ce=u,pn=f,ce!==null)if(pn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(o.stateNode)}catch(m){re(o,a,m)}else try{ce.removeChild(o.stateNode)}catch(m){re(o,a,m)}break;case 18:ce!==null&&(pn?(r=ce,t_(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),pu(r)):t_(ce,o.stateNode));break;case 4:u=ce,f=pn,ce=o.stateNode.containerInfo,pn=!0,hi(r,a,o),ce=u,pn=f;break;case 0:case 11:case 14:case 15:_e||qi(2,o,a),_e||qi(4,o,a),hi(r,a,o);break;case 1:_e||(xr(o,a),u=o.stateNode,typeof u.componentWillUnmount=="function"&&ab(o,a,u)),hi(r,a,o);break;case 21:hi(r,a,o);break;case 22:_e=(u=_e)||o.memoizedState!==null,hi(r,a,o),_e=u;break;default:hi(r,a,o)}}function db(r,a){if(a.memoizedState===null&&(r=a.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{pu(r)}catch(o){re(a,a.return,o)}}function J2(r){switch(r.tag){case 13:case 19:var a=r.stateNode;return a===null&&(a=r.stateNode=new ub),a;case 22:return r=r.stateNode,a=r._retryCache,a===null&&(a=r._retryCache=new ub),a;default:throw Error(i(435,r.tag))}}function Pp(r,a){var o=J2(r);a.forEach(function(u){var f=lR.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function wn(r,a){var o=a.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,_=a,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Wi(T.type)){ce=T.stateNode,pn=!1;break t}break;case 5:ce=T.stateNode,pn=!1;break t;case 3:case 4:ce=T.stateNode.containerInfo,pn=!0;break t}T=T.return}if(ce===null)throw Error(i(160));fb(m,_,f),ce=null,pn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)pb(a,r),a=a.sibling}var Jn=null;function pb(r,a){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:wn(a,r),Sn(r),u&4&&(qi(3,r,r.return),Xl(3,r),qi(5,r,r.return));break;case 1:wn(a,r),Sn(r),u&512&&(_e||o===null||xr(o,o.return)),u&64&&ci&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Jn;if(wn(a,r),Sn(r),u&512&&(_e||o===null||xr(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){t:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;e:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ua]||m[Oe]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Ke(m,u,o),m[Oe]=r,ve(m),u=m;break t;case"link":var _=l_("link","href",f).get(u+(o.href||""));if(_){for(var T=0;T<_.length;T++)if(m=_[T],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){_.splice(T,1);break e}}m=f.createElement(u),Ke(m,u,o),f.head.appendChild(m);break;case"meta":if(_=l_("meta","content",f).get(u+(o.content||""))){for(T=0;T<_.length;T++)if(m=_[T],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){_.splice(T,1);break e}}m=f.createElement(u),Ke(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[Oe]=r,ve(m),u=m}r.stateNode=u}else u_(f,r.type,r.stateNode);else r.stateNode=o_(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?u_(f,r.type,r.stateNode):o_(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&Op(r,r.memoizedProps,o.memoizedProps)}break;case 27:wn(a,r),Sn(r),u&512&&(_e||o===null||xr(o,o.return)),o!==null&&u&4&&Op(r,r.memoizedProps,o.memoizedProps);break;case 5:if(wn(a,r),Sn(r),u&512&&(_e||o===null||xr(o,o.return)),r.flags&32){f=r.stateNode;try{Mn(f,"")}catch(K){re(r,r.return,K)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,Op(r,f,o!==null?o.memoizedProps:f)),u&1024&&(Dp=!0);break;case 6:if(wn(a,r),Sn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(K){re(r,r.return,K)}}break;case 3:if(Ih=null,f=Jn,Jn=Rh(a.containerInfo),wn(a,r),Jn=f,Sn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{pu(a.containerInfo)}catch(K){re(r,r.return,K)}Dp&&(Dp=!1,mb(r));break;case 4:u=Jn,Jn=Rh(r.stateNode.containerInfo),wn(a,r),Sn(r),Jn=u;break;case 12:wn(a,r),Sn(r);break;case 13:wn(a,r),Sn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(jp=Dn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Pp(r,u)));break;case 22:f=r.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,F=ci,J=_e;if(ci=F||f,_e=J||I,wn(a,r),_e=J,ci=F,Sn(r),u&8192)t:for(a=r.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(o===null||I||ci||_e||cs(r)),o=null,a=r;;){if(a.tag===5||a.tag===26){if(o===null){I=o=a;try{if(m=I.stateNode,f)_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var et=I.memoizedProps.style,$=et!=null&&et.hasOwnProperty("display")?et.display:null;T.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(K){re(I,I.return,K)}}}else if(a.tag===6){if(o===null){I=a;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(K){re(I,I.return,K)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===r)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break t;for(;a.sibling===null;){if(a.return===null||a.return===r)break t;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Pp(r,o))));break;case 19:wn(a,r),Sn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Pp(r,u)));break;case 30:break;case 21:break;default:wn(a,r),Sn(r)}}function Sn(r){var a=r.flags;if(a&2){try{for(var o,u=r.return;u!==null;){if(ob(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=kp(r);dh(r,m,f);break;case 5:var _=o.stateNode;o.flags&32&&(Mn(_,""),o.flags&=-33);var T=kp(r);dh(r,T,_);break;case 3:case 4:var I=o.stateNode.containerInfo,F=kp(r);Np(r,F,I);break;default:throw Error(i(161))}}catch(J){re(r,r.return,J)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function mb(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var a=r;mb(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),r=r.sibling}}function Hi(r,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)cb(r,a.alternate,a),a=a.sibling}function cs(r){for(r=r.child;r!==null;){var a=r;switch(a.tag){case 0:case 11:case 14:case 15:qi(4,a,a.return),cs(a);break;case 1:xr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&ab(a,a.return,o),cs(a);break;case 27:su(a.stateNode);case 26:case 5:xr(a,a.return),cs(a);break;case 22:a.memoizedState===null&&cs(a);break;case 30:cs(a);break;default:cs(a)}r=r.sibling}}function Gi(r,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,f=r,m=a,_=m.flags;switch(m.tag){case 0:case 11:case 15:Gi(f,m,o),Xl(4,m);break;case 1:if(Gi(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(F){re(u,u.return,F)}if(u=m,f=u.updateQueue,f!==null){var T=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Hv(I[f],T)}catch(F){re(u,u.return,F)}}o&&_&64&&ib(m),Wl(m,m.return);break;case 27:lb(m);case 26:case 5:Gi(f,m,o),o&&u===null&&_&4&&sb(m),Wl(m,m.return);break;case 12:Gi(f,m,o);break;case 13:Gi(f,m,o),o&&_&4&&db(f,m);break;case 22:m.memoizedState===null&&Gi(f,m,o),Wl(m,m.return);break;case 30:break;default:Gi(f,m,o)}a=a.sibling}}function Mp(r,a){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&Vl(o))}function Vp(r,a){r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&Vl(r))}function Ir(r,a,o,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)gb(r,a,o,u),a=a.sibling}function gb(r,a,o,u){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Ir(r,a,o,u),f&2048&&Xl(9,a);break;case 1:Ir(r,a,o,u);break;case 3:Ir(r,a,o,u),f&2048&&(r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&Vl(r)));break;case 12:if(f&2048){Ir(r,a,o,u),r=a.stateNode;try{var m=a.memoizedProps,_=m.id,T=m.onPostCommit;typeof T=="function"&&T(_,a.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(I){re(a,a.return,I)}}else Ir(r,a,o,u);break;case 13:Ir(r,a,o,u);break;case 23:break;case 22:m=a.stateNode,_=a.alternate,a.memoizedState!==null?m._visibility&2?Ir(r,a,o,u):Zl(r,a):m._visibility&2?Ir(r,a,o,u):(m._visibility|=2,mo(r,a,o,u,(a.subtreeFlags&10256)!==0)),f&2048&&Mp(_,a);break;case 24:Ir(r,a,o,u),f&2048&&Vp(a.alternate,a);break;default:Ir(r,a,o,u)}}function mo(r,a,o,u,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=r,_=a,T=o,I=u,F=_.flags;switch(_.tag){case 0:case 11:case 15:mo(m,_,T,I,f),Xl(8,_);break;case 23:break;case 22:var J=_.stateNode;_.memoizedState!==null?J._visibility&2?mo(m,_,T,I,f):Zl(m,_):(J._visibility|=2,mo(m,_,T,I,f)),f&&F&2048&&Mp(_.alternate,_);break;case 24:mo(m,_,T,I,f),f&&F&2048&&Vp(_.alternate,_);break;default:mo(m,_,T,I,f)}a=a.sibling}}function Zl(r,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=r,u=a,f=u.flags;switch(u.tag){case 22:Zl(o,u),f&2048&&Mp(u.alternate,u);break;case 24:Zl(o,u),f&2048&&Vp(u.alternate,u);break;default:Zl(o,u)}a=a.sibling}}var Jl=8192;function go(r){if(r.subtreeFlags&Jl)for(r=r.child;r!==null;)yb(r),r=r.sibling}function yb(r){switch(r.tag){case 26:go(r),r.flags&Jl&&r.memoizedState!==null&&UR(Jn,r.memoizedState,r.memoizedProps);break;case 5:go(r);break;case 3:case 4:var a=Jn;Jn=Rh(r.stateNode.containerInfo),go(r),Jn=a;break;case 22:r.memoizedState===null&&(a=r.alternate,a!==null&&a.memoizedState!==null?(a=Jl,Jl=16777216,go(r),Jl=a):go(r));break;default:go(r)}}function vb(r){var a=r.alternate;if(a!==null&&(r=a.child,r!==null)){a.child=null;do a=r.sibling,r.sibling=null,r=a;while(r!==null)}}function tu(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];je=u,_b(u,r)}vb(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)bb(r),r=r.sibling}function bb(r){switch(r.tag){case 0:case 11:case 15:tu(r),r.flags&2048&&qi(9,r,r.return);break;case 3:tu(r);break;case 12:tu(r);break;case 22:var a=r.stateNode;r.memoizedState!==null&&a._visibility&2&&(r.return===null||r.return.tag!==13)?(a._visibility&=-3,ph(r)):tu(r);break;default:tu(r)}}function ph(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];je=u,_b(u,r)}vb(r)}for(r=r.child;r!==null;){switch(a=r,a.tag){case 0:case 11:case 15:qi(8,a,a.return),ph(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,ph(a));break;default:ph(a)}r=r.sibling}}function _b(r,a){for(;je!==null;){var o=je;switch(o.tag){case 0:case 11:case 15:qi(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Vl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,je=u;else t:for(o=r;je!==null;){u=je;var f=u.sibling,m=u.return;if(hb(u),u===o){je=null;break t}if(f!==null){f.return=m,je=f;break t}je=m}}}var tR={getCacheForType:function(r){var a=tn(De),o=a.data.get(r);return o===void 0&&(o=r(),a.data.set(r,o)),o}},eR=typeof WeakMap=="function"?WeakMap:Map,Xt=0,ie=null,Mt=null,Ft=0,Wt=0,Rn=null,$i=!1,yo=!1,Lp=!1,fi=0,ye=0,Yi=0,hs=0,Up=0,Hn=0,vo=0,eu=null,mn=null,zp=!1,jp=0,mh=1/0,gh=null,Ki=null,Ye=0,Qi=null,bo=null,_o=0,Bp=0,Fp=null,Eb=null,nu=0,qp=null;function xn(){if((Xt&2)!==0&&Ft!==0)return Ft&-Ft;if(H.T!==null){var r=so;return r!==0?r:Xp()}return Oi()}function Tb(){Hn===0&&(Hn=(Ft&536870912)===0||$t?hl():536870912);var r=qn.current;return r!==null&&(r.flags|=32),Hn}function In(r,a,o){(r===ie&&(Wt===2||Wt===9)||r.cancelPendingCommit!==null)&&(Eo(r,0),Xi(r,Ft,Hn,!1)),Hr(r,o),((Xt&2)===0||r!==ie)&&(r===ie&&((Xt&2)===0&&(hs|=o),ye===4&&Xi(r,Ft,Hn,!1)),Cr(r))}function Ab(r,a,o){if((Xt&6)!==0)throw Error(i(327));var u=!o&&(a&124)===0&&(a&r.expiredLanes)===0||La(r,a),f=u?iR(r,a):$p(r,a,!0),m=u;do{if(f===0){yo&&!u&&Xi(r,a,0,!1);break}else{if(o=r.current.alternate,m&&!nR(o)){f=$p(r,a,!1),m=!1;continue}if(f===2){if(m=a,r.errorRecoveryDisabledLanes&m)var _=0;else _=r.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){a=_;t:{var T=r;f=eu;var I=T.current.memoizedState.isDehydrated;if(I&&(Eo(T,_).flags|=256),_=$p(T,_,!1),_!==2){if(Lp&&!I){T.errorRecoveryDisabledLanes|=m,hs|=m,f=4;break t}m=mn,mn=f,m!==null&&(mn===null?mn=m:mn.push.apply(mn,m))}f=_}if(m=!1,f!==2)continue}}if(f===1){Eo(r,0),Xi(r,a,0,!0);break}t:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:Xi(u,a,Hn,!$i);break t;case 2:mn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(f=jp+300-Dn(),10<f)){if(Xi(u,a,Hn,!$i),Ls(u,0,!0)!==0)break t;u.timeoutHandle=Zb(wb.bind(null,u,o,mn,gh,zp,a,Hn,hs,vo,$i,m,2,-0,0),f);break t}wb(u,o,mn,gh,zp,a,Hn,hs,vo,$i,m,0,-0,0)}}break}while(!0);Cr(r)}function wb(r,a,o,u,f,m,_,T,I,F,J,et,$,K){if(r.timeoutHandle=-1,et=a.subtreeFlags,(et&8192||(et&16785408)===16785408)&&(uu={stylesheets:null,count:0,unsuspend:LR},yb(a),et=zR(),et!==null)){r.cancelPendingCommit=et(kb.bind(null,r,a,m,o,u,f,_,T,I,J,1,$,K)),Xi(r,m,_,!F);return}kb(r,a,m,o,u,f,_,T,I)}function nR(r){for(var a=r;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Tn(m(),f))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xi(r,a,o,u){a&=~Up,a&=~hs,r.suspendedLanes|=a,r.pingedLanes&=~a,u&&(r.warmLanes|=a),u=r.expirationTimes;for(var f=a;0<f;){var m=31-Je(f),_=1<<m;u[m]=-1,f&=~_}o!==0&&pr(r,o,a)}function yh(){return(Xt&6)===0?(ru(0),!1):!0}function Hp(){if(Mt!==null){if(Wt===0)var r=Mt.return;else r=Mt,ii=as=null,op(r),fo=null,Yl=0,r=Mt;for(;r!==null;)rb(r.alternate,r),r=r.return;Mt=null}}function Eo(r,a){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,_R(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Hp(),ie=r,Mt=o=ei(r.current,null),Ft=a,Wt=0,Rn=null,$i=!1,yo=La(r,a),Lp=!1,vo=Hn=Up=hs=Yi=ye=0,mn=eu=null,zp=!1,(a&8)!==0&&(a|=a&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=a;0<u;){var f=31-Je(u),m=1<<f;a|=r[f],u&=~m}return fi=a,zc(),o}function Sb(r,a){Nt=null,H.H=ih,a===Ul||a===Kc?(a=Fv(),Wt=3):a===zv?(a=Fv(),Wt=4):Wt=a===q0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Rn=a,Mt===null&&(ye=1,uh(r,zn(a,r.current)))}function Rb(){var r=H.H;return H.H=ih,r===null?ih:r}function xb(){var r=H.A;return H.A=tR,r}function Gp(){ye=4,$i||(Ft&4194048)!==Ft&&qn.current!==null||(yo=!0),(Yi&134217727)===0&&(hs&134217727)===0||ie===null||Xi(ie,Ft,Hn,!1)}function $p(r,a,o){var u=Xt;Xt|=2;var f=Rb(),m=xb();(ie!==r||Ft!==a)&&(gh=null,Eo(r,a)),a=!1;var _=ye;t:do try{if(Wt!==0&&Mt!==null){var T=Mt,I=Rn;switch(Wt){case 8:Hp(),_=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(a=!0);var F=Wt;if(Wt=0,Rn=null,To(r,T,I,F),o&&yo){_=0;break t}break;default:F=Wt,Wt=0,Rn=null,To(r,T,I,F)}}rR(),_=ye;break}catch(J){Sb(r,J)}while(!0);return a&&r.shellSuspendCounter++,ii=as=null,Xt=u,H.H=f,H.A=m,Mt===null&&(ie=null,Ft=0,zc()),_}function rR(){for(;Mt!==null;)Ib(Mt)}function iR(r,a){var o=Xt;Xt|=2;var u=Rb(),f=xb();ie!==r||Ft!==a?(gh=null,mh=Dn()+500,Eo(r,a)):yo=La(r,a);t:do try{if(Wt!==0&&Mt!==null){a=Mt;var m=Rn;e:switch(Wt){case 1:Wt=0,Rn=null,To(r,a,m,1);break;case 2:case 9:if(jv(m)){Wt=0,Rn=null,Cb(a);break}a=function(){Wt!==2&&Wt!==9||ie!==r||(Wt=7),Cr(r)},m.then(a,a);break t;case 3:Wt=7;break t;case 4:Wt=5;break t;case 7:jv(m)?(Wt=0,Rn=null,Cb(a)):(Wt=0,Rn=null,To(r,a,m,7));break;case 5:var _=null;switch(Mt.tag){case 26:_=Mt.memoizedState;case 5:case 27:var T=Mt;if(!_||c_(_)){Wt=0,Rn=null;var I=T.sibling;if(I!==null)Mt=I;else{var F=T.return;F!==null?(Mt=F,vh(F)):Mt=null}break e}}Wt=0,Rn=null,To(r,a,m,5);break;case 6:Wt=0,Rn=null,To(r,a,m,6);break;case 8:Hp(),ye=6;break t;default:throw Error(i(462))}}aR();break}catch(J){Sb(r,J)}while(!0);return ii=as=null,H.H=u,H.A=f,Xt=o,Mt!==null?0:(ie=null,Ft=0,zc(),ye)}function aR(){for(;Mt!==null&&!ol();)Ib(Mt)}function Ib(r){var a=eb(r.alternate,r,fi);r.memoizedProps=r.pendingProps,a===null?vh(r):Mt=a}function Cb(r){var a=r,o=a.alternate;switch(a.tag){case 15:case 0:a=Q0(o,a,a.pendingProps,a.type,void 0,Ft);break;case 11:a=Q0(o,a,a.pendingProps,a.type.render,a.ref,Ft);break;case 5:op(a);default:rb(o,a),a=Mt=Ov(a,fi),a=eb(o,a,fi)}r.memoizedProps=r.pendingProps,a===null?vh(r):Mt=a}function To(r,a,o,u){ii=as=null,op(a),fo=null,Yl=0;var f=a.return;try{if(K2(r,f,a,o,Ft)){ye=1,uh(r,zn(o,r.current)),Mt=null;return}}catch(m){if(f!==null)throw Mt=f,m;ye=1,uh(r,zn(o,r.current)),Mt=null;return}a.flags&32768?($t||u===1?r=!0:yo||(Ft&536870912)!==0?r=!1:($i=r=!0,(u===2||u===9||u===3||u===6)&&(u=qn.current,u!==null&&u.tag===13&&(u.flags|=16384))),Ob(a,r)):vh(a)}function vh(r){var a=r;do{if((a.flags&32768)!==0){Ob(a,$i);return}r=a.return;var o=X2(a.alternate,a,fi);if(o!==null){Mt=o;return}if(a=a.sibling,a!==null){Mt=a;return}Mt=a=r}while(a!==null);ye===0&&(ye=5)}function Ob(r,a){do{var o=W2(r.alternate,r);if(o!==null){o.flags&=32767,Mt=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(r=r.sibling,r!==null)){Mt=r;return}Mt=r=o}while(r!==null);ye=6,Mt=null}function kb(r,a,o,u,f,m,_,T,I){r.cancelPendingCommit=null;do bh();while(Ye!==0);if((Xt&6)!==0)throw Error(i(327));if(a!==null){if(a===r.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=Vd,dl(r,o,m,_,T,I),r===ie&&(Mt=ie=null,Ft=0),bo=a,Qi=r,_o=o,Bp=m,Fp=f,Eb=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,uR(Da,function(){return Vb(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=H.T,H.T=null,f=ot.p,ot.p=2,_=Xt,Xt|=4;try{Z2(r,a,o)}finally{Xt=_,ot.p=f,H.T=u}}Ye=1,Nb(),Db(),Pb()}}function Nb(){if(Ye===1){Ye=0;var r=Qi,a=bo,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=H.T,H.T=null;var u=ot.p;ot.p=2;var f=Xt;Xt|=4;try{pb(a,r);var m=im,_=_v(r.containerInfo),T=m.focusedElem,I=m.selectionRange;if(_!==T&&T&&T.ownerDocument&&bv(T.ownerDocument.documentElement,T)){if(I!==null&&kd(T)){var F=I.start,J=I.end;if(J===void 0&&(J=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(J,T.value.length);else{var et=T.ownerDocument||document,$=et&&et.defaultView||window;if($.getSelection){var K=$.getSelection(),xt=T.textContent.length,Et=Math.min(I.start,xt),ee=I.end===void 0?Et:Math.min(I.end,xt);!K.extend&&Et>ee&&(_=ee,ee=Et,Et=_);var z=vv(T,Et),V=vv(T,ee);if(z&&V&&(K.rangeCount!==1||K.anchorNode!==z.node||K.anchorOffset!==z.offset||K.focusNode!==V.node||K.focusOffset!==V.offset)){var B=et.createRange();B.setStart(z.node,z.offset),K.removeAllRanges(),Et>ee?(K.addRange(B),K.extend(V.node,V.offset)):(B.setEnd(V.node,V.offset),K.addRange(B))}}}}for(et=[],K=T;K=K.parentNode;)K.nodeType===1&&et.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<et.length;T++){var tt=et[T];tt.element.scrollLeft=tt.left,tt.element.scrollTop=tt.top}}kh=!!rm,im=rm=null}finally{Xt=f,ot.p=u,H.T=o}}r.current=a,Ye=2}}function Db(){if(Ye===2){Ye=0;var r=Qi,a=bo,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=H.T,H.T=null;var u=ot.p;ot.p=2;var f=Xt;Xt|=4;try{cb(r,a.alternate,a)}finally{Xt=f,ot.p=u,H.T=o}}Ye=3}}function Pb(){if(Ye===4||Ye===3){Ye=0,pc();var r=Qi,a=bo,o=_o,u=Eb;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ye=5:(Ye=0,bo=Qi=null,Mb(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Ki=null),Us(o),a=a.stateNode,Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(me,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=H.T,f=ot.p,ot.p=2,H.T=null;try{for(var m=r.onRecoverableError,_=0;_<u.length;_++){var T=u[_];m(T.value,{componentStack:T.stack})}}finally{H.T=a,ot.p=f}}(_o&3)!==0&&bh(),Cr(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===qp?nu++:(nu=0,qp=r):nu=0,ru(0)}}function Mb(r,a){(r.pooledCacheLanes&=a)===0&&(a=r.pooledCache,a!=null&&(r.pooledCache=null,Vl(a)))}function bh(r){return Nb(),Db(),Pb(),Vb()}function Vb(){if(Ye!==5)return!1;var r=Qi,a=Bp;Bp=0;var o=Us(_o),u=H.T,f=ot.p;try{ot.p=32>o?32:o,H.T=null,o=Fp,Fp=null;var m=Qi,_=_o;if(Ye=0,bo=Qi=null,_o=0,(Xt&6)!==0)throw Error(i(331));var T=Xt;if(Xt|=4,bb(m.current),gb(m,m.current,_,o),Xt=T,ru(0,!1),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(me,m)}catch{}return!0}finally{ot.p=f,H.T=u,Mb(r,a)}}function Lb(r,a,o){a=zn(o,a),a=Ep(r.stateNode,a,2),r=zi(r,a,2),r!==null&&(Hr(r,2),Cr(r))}function re(r,a,o){if(r.tag===3)Lb(r,r,o);else for(;a!==null;){if(a.tag===3){Lb(a,r,o);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ki===null||!Ki.has(u))){r=zn(o,r),o=B0(2),u=zi(a,o,2),u!==null&&(F0(o,u,a,r),Hr(u,2),Cr(u));break}}a=a.return}}function Yp(r,a,o){var u=r.pingCache;if(u===null){u=r.pingCache=new eR;var f=new Set;u.set(a,f)}else f=u.get(a),f===void 0&&(f=new Set,u.set(a,f));f.has(o)||(Lp=!0,f.add(o),r=sR.bind(null,r,a,o),a.then(r,r))}function sR(r,a,o){var u=r.pingCache;u!==null&&u.delete(a),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,ie===r&&(Ft&o)===o&&(ye===4||ye===3&&(Ft&62914560)===Ft&&300>Dn()-jp?(Xt&2)===0&&Eo(r,0):Up|=o,vo===Ft&&(vo=0)),Cr(r)}function Ub(r,a){a===0&&(a=fl()),r=no(r,a),r!==null&&(Hr(r,a),Cr(r))}function oR(r){var a=r.memoizedState,o=0;a!==null&&(o=a.retryLane),Ub(r,o)}function lR(r,a){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),Ub(r,o)}function uR(r,a){return ka(r,a)}var _h=null,Ao=null,Kp=!1,Eh=!1,Qp=!1,fs=0;function Cr(r){r!==Ao&&r.next===null&&(Ao===null?_h=Ao=r:Ao=Ao.next=r),Eh=!0,Kp||(Kp=!0,hR())}function ru(r,a){if(!Qp&&Eh){Qp=!0;do for(var o=!1,u=_h;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var _=u.suspendedLanes,T=u.pingedLanes;m=(1<<31-Je(42|r)+1)-1,m&=f&~(_&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Fb(u,m))}else m=Ft,m=Ls(u,u===ie?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||La(u,m)||(o=!0,Fb(u,m));u=u.next}while(o);Qp=!1}}function cR(){zb()}function zb(){Eh=Kp=!1;var r=0;fs!==0&&(bR()&&(r=fs),fs=0);for(var a=Dn(),o=null,u=_h;u!==null;){var f=u.next,m=jb(u,a);m===0?(u.next=null,o===null?_h=f:o.next=f,f===null&&(Ao=o)):(o=u,(r!==0||(m&3)!==0)&&(Eh=!0)),u=f}ru(r)}function jb(r,a){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var _=31-Je(m),T=1<<_,I=f[_];I===-1?((T&o)===0||(T&u)!==0)&&(f[_]=cl(T,a)):I<=a&&(r.expiredLanes|=T),m&=~T}if(a=ie,o=Ft,o=Ls(r,r===a?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===a&&(Wt===2||Wt===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Na(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||La(r,o)){if(a=o&-o,a===r.callbackPriority)return a;switch(u!==null&&Na(u),Us(o)){case 2:case 8:o=Ms;break;case 32:o=Da;break;case 268435456:o=Vs;break;default:o=Da}return u=Bb.bind(null,r),o=ka(o,u),r.callbackPriority=a,r.callbackNode=o,a}return u!==null&&u!==null&&Na(u),r.callbackPriority=2,r.callbackNode=null,2}function Bb(r,a){if(Ye!==0&&Ye!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(bh()&&r.callbackNode!==o)return null;var u=Ft;return u=Ls(r,r===ie?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(Ab(r,u,a),jb(r,Dn()),r.callbackNode!=null&&r.callbackNode===o?Bb.bind(null,r):null)}function Fb(r,a){if(bh())return null;Ab(r,a,!0)}function hR(){ER(function(){(Xt&6)!==0?ka(ll,cR):zb()})}function Xp(){return fs===0&&(fs=hl()),fs}function qb(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Hs(""+r)}function Hb(r,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,r.id&&o.setAttribute("form",r.id),a.parentNode.insertBefore(o,a),r=new FormData(r),o.parentNode.removeChild(o),r}function fR(r,a,o,u,f){if(a==="submit"&&o&&o.stateNode===f){var m=qb((f[Ae]||null).action),_=u.submitter;_&&(a=(a=_[Ae]||null)?qb(a.formAction):_.getAttribute("formAction"),a!==null&&(m=a,_=null));var T=new Gs("action","action",null,u,f);r.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(fs!==0){var I=_?Hb(f,_):new FormData(f);gp(o,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(T.preventDefault(),I=_?Hb(f,_):new FormData(f),gp(o,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Wp=0;Wp<Md.length;Wp++){var Zp=Md[Wp],dR=Zp.toLowerCase(),pR=Zp[0].toUpperCase()+Zp.slice(1);Zn(dR,"on"+pR)}Zn(Av,"onAnimationEnd"),Zn(wv,"onAnimationIteration"),Zn(Sv,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(k2,"onTransitionRun"),Zn(N2,"onTransitionStart"),Zn(D2,"onTransitionCancel"),Zn(Rv,"onTransitionEnd"),$r("onMouseEnter",["mouseout","mouseover"]),$r("onMouseLeave",["mouseout","mouseover"]),$r("onPointerEnter",["pointerout","pointerover"]),$r("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(iu));function Gb(r,a){a=(a&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;t:{var m=void 0;if(a)for(var _=u.length-1;0<=_;_--){var T=u[_],I=T.instance,F=T.currentTarget;if(T=T.listener,I!==m&&f.isPropagationStopped())break t;m=T,f.currentTarget=F;try{m(f)}catch(J){lh(J)}f.currentTarget=null,m=I}else for(_=0;_<u.length;_++){if(T=u[_],I=T.instance,F=T.currentTarget,T=T.listener,I!==m&&f.isPropagationStopped())break t;m=T,f.currentTarget=F;try{m(f)}catch(J){lh(J)}f.currentTarget=null,m=I}}}}function Vt(r,a){var o=a[ml];o===void 0&&(o=a[ml]=new Set);var u=r+"__bubble";o.has(u)||($b(a,r,2,!1),o.add(u))}function Jp(r,a,o){var u=0;a&&(u|=4),$b(o,r,u,a)}var Th="_reactListening"+Math.random().toString(36).slice(2);function tm(r){if(!r[Th]){r[Th]=!0,gl.forEach(function(o){o!=="selectionchange"&&(mR.has(o)||Jp(o,!1,r),Jp(o,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[Th]||(a[Th]=!0,Jp("selectionchange",!1,a))}}function $b(r,a,o,u){switch(g_(a)){case 2:var f=FR;break;case 8:f=qR;break;default:f=pm}o=f.bind(null,a,o,r),f=void 0,!Ln||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(a,o,{capture:!0,passive:f}):r.addEventListener(a,o,!0):f!==void 0?r.addEventListener(a,o,{passive:f}):r.addEventListener(a,o,!1)}function em(r,a,o,u,f){var m=u;if((a&1)===0&&(a&2)===0&&u!==null)t:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var T=u.stateNode.containerInfo;if(T===f)break;if(_===4)for(_=u.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===f)return;_=_.return}for(;T!==null;){if(_=Gr(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){u=m=_;continue t}T=T.parentNode}}u=u.return}wc(function(){var F=m,J=Vn(o),et=[];t:{var $=xv.get(r);if($!==void 0){var K=Gs,xt=r;switch(r){case"keypress":if(_r(o)===0)break t;case"keydown":case"keyup":K=Ws;break;case"focusin":xt="focus",K=Ks;break;case"focusout":xt="blur",K=Ks;break;case"beforeblur":case"afterblur":K=Ks;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Un;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Nc;break;case Av:case wv:case Sv:K=Qs;break;case Rv:K=Pc;break;case"scroll":case"scrollend":K=Sc;break;case"wheel":K=Zs;break;case"copy":case"cut":case"paste":K=Xs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Il;break;case"toggle":case"beforetoggle":K=Vc}var Et=(a&4)!==0,ee=!Et&&(r==="scroll"||r==="scrollend"),z=Et?$!==null?$+"Capture":null:$;Et=[];for(var V=F,B;V!==null;){var tt=V;if(B=tt.stateNode,tt=tt.tag,tt!==5&&tt!==26&&tt!==27||B===null||z===null||(tt=Ga(V,z),tt!=null&&Et.push(au(V,tt,B))),ee)break;V=V.return}0<Et.length&&($=new K($,xt,null,o,J),et.push({event:$,listeners:Et}))}}if((a&7)===0){t:{if($=r==="mouseover"||r==="pointerover",K=r==="mouseout"||r==="pointerout",$&&o!==Qr&&(xt=o.relatedTarget||o.fromElement)&&(Gr(xt)||xt[Pn]))break t;if((K||$)&&($=J.window===J?J:($=J.ownerDocument)?$.defaultView||$.parentWindow:window,K?(xt=o.relatedTarget||o.toElement,K=F,xt=xt?Gr(xt):null,xt!==null&&(ee=l(xt),Et=xt.tag,xt!==ee||Et!==5&&Et!==27&&Et!==6)&&(xt=null)):(K=null,xt=F),K!==xt)){if(Et=Un,tt="onMouseLeave",z="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(Et=Il,tt="onPointerLeave",z="onPointerEnter",V="pointer"),ee=K==null?$:gr(K),B=xt==null?$:gr(xt),$=new Et(tt,V+"leave",K,o,J),$.target=ee,$.relatedTarget=B,tt=null,Gr(J)===F&&(Et=new Et(z,V+"enter",xt,o,J),Et.target=B,Et.relatedTarget=ee,tt=Et),ee=tt,K&&xt)e:{for(Et=K,z=xt,V=0,B=Et;B;B=wo(B))V++;for(B=0,tt=z;tt;tt=wo(tt))B++;for(;0<V-B;)Et=wo(Et),V--;for(;0<B-V;)z=wo(z),B--;for(;V--;){if(Et===z||z!==null&&Et===z.alternate)break e;Et=wo(Et),z=wo(z)}Et=null}else Et=null;K!==null&&Yb(et,$,K,Et,!1),xt!==null&&ee!==null&&Yb(et,ee,xt,Et,!0)}}t:{if($=F?gr(F):window,K=$.nodeName&&$.nodeName.toLowerCase(),K==="select"||K==="input"&&$.type==="file")var pt=fv;else if(Ne($))if(dv)pt=I2;else{pt=R2;var Pt=S2}else K=$.nodeName,!K||K.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?F&&El(F.elementType)&&(pt=fv):pt=x2;if(pt&&(pt=pt(r,F))){ti(et,pt,o,J);break t}Pt&&Pt(r,$,F),r==="focusout"&&F&&$.type==="number"&&F.memoizedProps.value!=null&&Pi($,"number",$.value)}switch(Pt=F?gr(F):window,r){case"focusin":(Ne(Pt)||Pt.contentEditable==="true")&&(Js=Pt,Nd=F,kl=null);break;case"focusout":kl=Nd=Js=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,Ev(et,o,J);break;case"selectionchange":if(O2)break;case"keydown":case"keyup":Ev(et,o,J)}var yt;if(Ar)t:{switch(r){case"compositionstart":var Tt="onCompositionStart";break t;case"compositionend":Tt="onCompositionEnd";break t;case"compositionupdate":Tt="onCompositionUpdate";break t}Tt=void 0}else jt?X(r,o)&&(Tt="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Tt="onCompositionStart");Tt&&(b&&o.locale!=="ko"&&(jt||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&jt&&(yt=Al()):(br=J,Mi="value"in br?br.value:br.textContent,jt=!0)),Pt=Ah(F,Tt),0<Pt.length&&(Tt=new Rl(Tt,r,null,o,J),et.push({event:Tt,listeners:Pt}),yt?Tt.data=yt:(yt=ct(o),yt!==null&&(Tt.data=yt)))),(yt=y?ke(r,o):Bt(r,o))&&(Tt=Ah(F,"onBeforeInput"),0<Tt.length&&(Pt=new Rl("onBeforeInput","beforeinput",null,o,J),et.push({event:Pt,listeners:Tt}),Pt.data=yt)),fR(et,r,F,o,J)}Gb(et,a)})}function au(r,a,o){return{instance:r,listener:a,currentTarget:o}}function Ah(r,a){for(var o=a+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ga(r,o),f!=null&&u.unshift(au(r,f,m)),f=Ga(r,a),f!=null&&u.push(au(r,f,m))),r.tag===3)return u;r=r.return}return[]}function wo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Yb(r,a,o,u,f){for(var m=a._reactName,_=[];o!==null&&o!==u;){var T=o,I=T.alternate,F=T.stateNode;if(T=T.tag,I!==null&&I===u)break;T!==5&&T!==26&&T!==27||F===null||(I=F,f?(F=Ga(o,m),F!=null&&_.unshift(au(o,F,I))):f||(F=Ga(o,m),F!=null&&_.push(au(o,F,I)))),o=o.return}_.length!==0&&r.push({event:a,listeners:_})}var gR=/\r\n?/g,yR=/\u0000|\uFFFD/g;function Kb(r){return(typeof r=="string"?r:""+r).replace(gR,`
`).replace(yR,"")}function Qb(r,a){return a=Kb(a),Kb(r)===a}function wh(){}function te(r,a,o,u,f,m){switch(o){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||Mn(r,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&Mn(r,""+u);break;case"className":yr(r,"class",u);break;case"tabIndex":yr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":yr(r,o,u);break;case"style":_l(r,u,m);break;case"data":if(a!=="object"){yr(r,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Hs(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(a!=="input"&&te(r,a,"name",f.name,f,null),te(r,a,"formEncType",f.formEncType,f,null),te(r,a,"formMethod",f.formMethod,f,null),te(r,a,"formTarget",f.formTarget,f,null)):(te(r,a,"encType",f.encType,f,null),te(r,a,"method",f.method,f,null),te(r,a,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Hs(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=wh);break;case"onScroll":u!=null&&Vt("scroll",r);break;case"onScrollEnd":u!=null&&Vt("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Hs(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Vt("beforetoggle",r),Vt("toggle",r),Di(r,"popover",u);break;case"xlinkActuate":He(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":He(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":He(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":He(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":He(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":He(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":He(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":He(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":He(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Di(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Sd.get(o)||o,Di(r,o,u))}}function nm(r,a,o,u,f,m){switch(o){case"style":_l(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?Mn(r,u):(typeof u=="number"||typeof u=="bigint")&&Mn(r,""+u);break;case"onScroll":u!=null&&Vt("scroll",r);break;case"onScrollEnd":u!=null&&Vt("scrollend",r);break;case"onClick":u!=null&&(r.onclick=wh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zs.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),a=o.slice(2,f?o.length-7:void 0),m=r[Ae]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(a,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(a,u,f);break t}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Di(r,o,u)}}}function Ke(r,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",r),Vt("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var _=o[m];if(_!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:te(r,a,m,_,o,null)}}f&&te(r,a,"srcSet",o.srcSet,o,null),u&&te(r,a,"src",o.src,o,null);return;case"input":Vt("invalid",r);var T=m=_=f=null,I=null,F=null;for(u in o)if(o.hasOwnProperty(u)){var J=o[u];if(J!=null)switch(u){case"name":f=J;break;case"type":_=J;break;case"checked":I=J;break;case"defaultChecked":F=J;break;case"value":m=J;break;case"defaultValue":T=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,a));break;default:te(r,a,u,J,o,null)}}Fa(r,m,T,I,F,_,f,!1),qs(r);return;case"select":Vt("invalid",r),u=_=m=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":_=T;break;case"multiple":u=T;default:te(r,a,f,T,o,null)}a=m,o=_,r.multiple=!!u,a!=null?Kr(r,!!u,a,!1):o!=null&&Kr(r,!!u,o,!0);return;case"textarea":Vt("invalid",r),m=f=u=null;for(_ in o)if(o.hasOwnProperty(_)&&(T=o[_],T!=null))switch(_){case"value":u=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(i(91));break;default:te(r,a,_,T,o,null)}qa(r,u,f,m),qs(r);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:te(r,a,I,u,o,null)}return;case"dialog":Vt("beforetoggle",r),Vt("toggle",r),Vt("cancel",r),Vt("close",r);break;case"iframe":case"object":Vt("load",r);break;case"video":case"audio":for(u=0;u<iu.length;u++)Vt(iu[u],r);break;case"image":Vt("error",r),Vt("load",r);break;case"details":Vt("toggle",r);break;case"embed":case"source":case"link":Vt("error",r),Vt("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in o)if(o.hasOwnProperty(F)&&(u=o[F],u!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:te(r,a,F,u,o,null)}return;default:if(El(a)){for(J in o)o.hasOwnProperty(J)&&(u=o[J],u!==void 0&&nm(r,a,J,u,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null&&te(r,a,T,u,o,null))}function vR(r,a,o,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,_=null,T=null,I=null,F=null,J=null;for(K in o){var et=o[K];if(o.hasOwnProperty(K)&&et!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":I=et;default:u.hasOwnProperty(K)||te(r,a,K,null,u,et)}}for(var $ in u){var K=u[$];if(et=o[$],u.hasOwnProperty($)&&(K!=null||et!=null))switch($){case"type":m=K;break;case"name":f=K;break;case"checked":F=K;break;case"defaultChecked":J=K;break;case"value":_=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,a));break;default:K!==et&&te(r,a,$,K,u,et)}}En(r,_,T,I,F,J,m,f);return;case"select":K=_=T=$=null;for(m in o)if(I=o[m],o.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":K=I;default:u.hasOwnProperty(m)||te(r,a,m,null,u,I)}for(f in u)if(m=u[f],I=o[f],u.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":$=m;break;case"defaultValue":T=m;break;case"multiple":_=m;default:m!==I&&te(r,a,f,m,u,I)}a=T,o=_,u=K,$!=null?Kr(r,!!o,$,!1):!!u!=!!o&&(a!=null?Kr(r,!!o,a,!0):Kr(r,!!o,o?[]:"",!1));return;case"textarea":K=$=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:te(r,a,T,null,u,f)}for(_ in u)if(f=u[_],m=o[_],u.hasOwnProperty(_)&&(f!=null||m!=null))switch(_){case"value":$=f;break;case"defaultValue":K=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&te(r,a,_,f,u,m)}Zt(r,$,K);return;case"option":for(var xt in o)if($=o[xt],o.hasOwnProperty(xt)&&$!=null&&!u.hasOwnProperty(xt))switch(xt){case"selected":r.selected=!1;break;default:te(r,a,xt,null,u,$)}for(I in u)if($=u[I],K=o[I],u.hasOwnProperty(I)&&$!==K&&($!=null||K!=null))switch(I){case"selected":r.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:te(r,a,I,$,u,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in o)$=o[Et],o.hasOwnProperty(Et)&&$!=null&&!u.hasOwnProperty(Et)&&te(r,a,Et,null,u,$);for(F in u)if($=u[F],K=o[F],u.hasOwnProperty(F)&&$!==K&&($!=null||K!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(i(137,a));break;default:te(r,a,F,$,u,K)}return;default:if(El(a)){for(var ee in o)$=o[ee],o.hasOwnProperty(ee)&&$!==void 0&&!u.hasOwnProperty(ee)&&nm(r,a,ee,void 0,u,$);for(J in u)$=u[J],K=o[J],!u.hasOwnProperty(J)||$===K||$===void 0&&K===void 0||nm(r,a,J,$,u,K);return}}for(var z in o)$=o[z],o.hasOwnProperty(z)&&$!=null&&!u.hasOwnProperty(z)&&te(r,a,z,null,u,$);for(et in u)$=u[et],K=o[et],!u.hasOwnProperty(et)||$===K||$==null&&K==null||te(r,a,et,$,u,K)}var rm=null,im=null;function Sh(r){return r.nodeType===9?r:r.ownerDocument}function Xb(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wb(r,a){if(r===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&a==="foreignObject"?0:r}function am(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var sm=null;function bR(){var r=window.event;return r&&r.type==="popstate"?r===sm?!1:(sm=r,!0):(sm=null,!1)}var Zb=typeof setTimeout=="function"?setTimeout:void 0,_R=typeof clearTimeout=="function"?clearTimeout:void 0,Jb=typeof Promise=="function"?Promise:void 0,ER=typeof queueMicrotask=="function"?queueMicrotask:typeof Jb<"u"?function(r){return Jb.resolve(null).then(r).catch(TR)}:Zb;function TR(r){setTimeout(function(){throw r})}function Wi(r){return r==="head"}function t_(r,a){var o=a,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var _=r.ownerDocument;if(o&1&&su(_.documentElement),o&2&&su(_.body),o&4)for(o=_.head,su(o),_=o.firstChild;_;){var T=_.nextSibling,I=_.nodeName;_[Ua]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&_.rel.toLowerCase()==="stylesheet"||o.removeChild(_),_=T}}if(f===0){r.removeChild(m),pu(a);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);pu(a)}function om(r){var a=r.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":om(o),Ni(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function AR(r,a,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[Ua])switch(a){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(a==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=tr(r.nextSibling),r===null)break}return null}function wR(r,a,o){if(a==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=tr(r.nextSibling),r===null))return null;return r}function lm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function SR(r,a){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")a();else{var u=function(){a(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function tr(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return r}var um=null;function e_(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return r;a--}else o==="/$"&&a++}r=r.previousSibling}return null}function n_(r,a,o){switch(a=Sh(o),r){case"html":if(r=a.documentElement,!r)throw Error(i(452));return r;case"head":if(r=a.head,!r)throw Error(i(453));return r;case"body":if(r=a.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function su(r){for(var a=r.attributes;a.length;)r.removeAttributeNode(a[0]);Ni(r)}var Gn=new Map,r_=new Set;function Rh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var di=ot.d;ot.d={f:RR,r:xR,D:IR,C:CR,L:OR,m:kR,X:DR,S:NR,M:PR};function RR(){var r=di.f(),a=yh();return r||a}function xR(r){var a=mr(r);a!==null&&a.tag===5&&a.type==="form"?A0(a):di.r(r)}var So=typeof document>"u"?null:document;function i_(r,a,o){var u=So;if(u&&typeof a=="string"&&a){var f=we(a);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),r_.has(f)||(r_.add(f),r={rel:r,crossOrigin:o,href:a},u.querySelector(f)===null&&(a=u.createElement("link"),Ke(a,"link",r),ve(a),u.head.appendChild(a)))}}function IR(r){di.D(r),i_("dns-prefetch",r,null)}function CR(r,a){di.C(r,a),i_("preconnect",r,a)}function OR(r,a,o){di.L(r,a,o);var u=So;if(u&&r&&a){var f='link[rel="preload"][as="'+we(a)+'"]';a==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+we(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+we(o.imageSizes)+'"]')):f+='[href="'+we(r)+'"]';var m=f;switch(a){case"style":m=Ro(r);break;case"script":m=xo(r)}Gn.has(m)||(r=v({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:r,as:a},o),Gn.set(m,r),u.querySelector(f)!==null||a==="style"&&u.querySelector(ou(m))||a==="script"&&u.querySelector(lu(m))||(a=u.createElement("link"),Ke(a,"link",r),ve(a),u.head.appendChild(a)))}}function kR(r,a){di.m(r,a);var o=So;if(o&&r){var u=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+we(u)+'"][href="'+we(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xo(r)}if(!Gn.has(m)&&(r=v({rel:"modulepreload",href:r},a),Gn.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(lu(m)))return}u=o.createElement("link"),Ke(u,"link",r),ve(u),o.head.appendChild(u)}}}function NR(r,a,o){di.S(r,a,o);var u=So;if(u&&r){var f=ln(u).hoistableStyles,m=Ro(r);a=a||"default";var _=f.get(m);if(!_){var T={loading:0,preload:null};if(_=u.querySelector(ou(m)))T.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":a},o),(o=Gn.get(m))&&cm(r,o);var I=_=u.createElement("link");ve(I),Ke(I,"link",r),I._p=new Promise(function(F,J){I.onload=F,I.onerror=J}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,xh(_,a,u)}_={type:"stylesheet",instance:_,count:1,state:T},f.set(m,_)}}}function DR(r,a){di.X(r,a);var o=So;if(o&&r){var u=ln(o).hoistableScripts,f=xo(r),m=u.get(f);m||(m=o.querySelector(lu(f)),m||(r=v({src:r,async:!0},a),(a=Gn.get(f))&&hm(r,a),m=o.createElement("script"),ve(m),Ke(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function PR(r,a){di.M(r,a);var o=So;if(o&&r){var u=ln(o).hoistableScripts,f=xo(r),m=u.get(f);m||(m=o.querySelector(lu(f)),m||(r=v({src:r,async:!0,type:"module"},a),(a=Gn.get(f))&&hm(r,a),m=o.createElement("script"),ve(m),Ke(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function a_(r,a,o,u){var f=(f=At.current)?Rh(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Ro(o.href),o=ln(f).hoistableStyles,u=o.get(a),u||(u={type:"style",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=Ro(o.href);var m=ln(f).hoistableStyles,_=m.get(r);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,_),(m=f.querySelector(ou(r)))&&!m._p&&(_.instance=m,_.state.loading=5),Gn.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Gn.set(r,o),m||MR(f,r,o,_.state))),a&&u===null)throw Error(i(528,""));return _}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=xo(o),o=ln(f).hoistableScripts,u=o.get(a),u||(u={type:"script",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function Ro(r){return'href="'+we(r)+'"'}function ou(r){return'link[rel="stylesheet"]['+r+"]"}function s_(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function MR(r,a,o,u){r.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=r.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),Ke(a,"link",o),ve(a),r.head.appendChild(a))}function xo(r){return'[src="'+we(r)+'"]'}function lu(r){return"script[async]"+r}function o_(r,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var u=r.querySelector('style[data-href~="'+we(o.href)+'"]');if(u)return a.instance=u,ve(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),ve(u),Ke(u,"style",f),xh(u,o.precedence,r),a.instance=u;case"stylesheet":f=Ro(o.href);var m=r.querySelector(ou(f));if(m)return a.state.loading|=4,a.instance=m,ve(m),m;u=s_(o),(f=Gn.get(f))&&cm(u,f),m=(r.ownerDocument||r).createElement("link"),ve(m);var _=m;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),Ke(m,"link",u),a.state.loading|=4,xh(m,o.precedence,r),a.instance=m;case"script":return m=xo(o.src),(f=r.querySelector(lu(m)))?(a.instance=f,ve(f),f):(u=o,(f=Gn.get(m))&&(u=v({},o),hm(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),ve(f),Ke(f,"link",u),r.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,xh(u,o.precedence,r));return a.instance}function xh(r,a,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,_=0;_<u.length;_++){var T=u[_];if(T.dataset.precedence===a)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(r,a.firstChild))}function cm(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.title==null&&(r.title=a.title)}function hm(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.integrity==null&&(r.integrity=a.integrity)}var Ih=null;function l_(r,a,o){if(Ih===null){var u=new Map,f=Ih=new Map;f.set(o,u)}else f=Ih,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[Ua]||m[Oe]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var _=m.getAttribute(a)||"";_=r+_;var T=u.get(_);T?T.push(m):u.set(_,[m])}}return u}function u_(r,a,o){r=r.ownerDocument||r,r.head.insertBefore(o,a==="title"?r.querySelector("head > title"):null)}function VR(r,a,o){if(o===1||a.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return r=a.disabled,typeof a.precedence=="string"&&r==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function c_(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var uu=null;function LR(){}function UR(r,a,o){if(uu===null)throw Error(i(475));var u=uu;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Ro(o.href),m=r.querySelector(ou(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=Ch.bind(u),r.then(u,u)),a.state.loading|=4,a.instance=m,ve(m);return}m=r.ownerDocument||r,o=s_(o),(f=Gn.get(f))&&cm(o,f),m=m.createElement("link"),ve(m);var _=m;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),Ke(m,"link",o),a.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=Ch.bind(u),r.addEventListener("load",a),r.addEventListener("error",a))}}function zR(){if(uu===null)throw Error(i(475));var r=uu;return r.stylesheets&&r.count===0&&fm(r,r.stylesheets),0<r.count?function(a){var o=setTimeout(function(){if(r.stylesheets&&fm(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=a,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Ch(){if(this.count--,this.count===0){if(this.stylesheets)fm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Oh=null;function fm(r,a){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Oh=new Map,a.forEach(jR,r),Oh=null,Ch.call(r))}function jR(r,a){if(!(a.state.loading&4)){var o=Oh.get(r);if(o)var u=o.get(null);else{o=new Map,Oh.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var _=f[m];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(o.set(_.dataset.precedence,_),u=_)}u&&o.set(null,u)}f=a.instance,_=f.getAttribute("data-precedence"),m=o.get(_)||u,m===u&&o.set(null,f),o.set(_,f),this.count++,u=Ch.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),a.state.loading|=4}}var cu={$$typeof:W,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function BR(r,a,o,u,f,m,_,T){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.hiddenUpdates=qr(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function h_(r,a,o,u,f,m,_,T,I,F,J,et){return r=new BR(r,a,o,_,T,I,F,et),a=1,m===!0&&(a|=24),m=An(3,null,null,a),r.current=m,m.stateNode=r,a=Yd(),a.refCount++,r.pooledCache=a,a.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:a},Wd(m),r}function f_(r){return r?(r=ro,r):ro}function d_(r,a,o,u,f,m){f=f_(f),u.context===null?u.context=f:u.pendingContext=f,u=Ui(a),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=zi(r,u,a),o!==null&&(In(o,r,a),jl(o,r,a))}function p_(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<a?o:a}}function dm(r,a){p_(r,a),(r=r.alternate)&&p_(r,a)}function m_(r){if(r.tag===13){var a=no(r,67108864);a!==null&&In(a,r,67108864),dm(r,67108864)}}var kh=!0;function FR(r,a,o,u){var f=H.T;H.T=null;var m=ot.p;try{ot.p=2,pm(r,a,o,u)}finally{ot.p=m,H.T=f}}function qR(r,a,o,u){var f=H.T;H.T=null;var m=ot.p;try{ot.p=8,pm(r,a,o,u)}finally{ot.p=m,H.T=f}}function pm(r,a,o,u){if(kh){var f=mm(u);if(f===null)em(r,a,u,Nh,o),y_(r,u);else if(GR(f,r,a,o,u))u.stopPropagation();else if(y_(r,u),a&4&&-1<HR.indexOf(r)){for(;f!==null;){var m=mr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var _=Qn(m.pendingLanes);if(_!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-Je(_);T.entanglements[1]|=I,_&=~I}Cr(m),(Xt&6)===0&&(mh=Dn()+500,ru(0))}}break;case 13:T=no(m,2),T!==null&&In(T,m,2),yh(),dm(m,2)}if(m=mm(u),m===null&&em(r,a,u,Nh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else em(r,a,u,null,o)}}function mm(r){return r=Vn(r),gm(r)}var Nh=null;function gm(r){if(Nh=null,r=Gr(r),r!==null){var a=l(r);if(a===null)r=null;else{var o=a.tag;if(o===13){if(r=c(a),r!==null)return r;r=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null)}}return Nh=r,null}function g_(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bd()){case ll:return 2;case Ms:return 8;case Da:case _d:return 32;case Vs:return 268435456;default:return 32}default:return 32}}var ym=!1,Zi=null,Ji=null,ta=null,hu=new Map,fu=new Map,ea=[],HR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y_(r,a){switch(r){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":hu.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(a.pointerId)}}function du(r,a,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:a,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},a!==null&&(a=mr(a),a!==null&&m_(a)),r):(r.eventSystemFlags|=u,a=r.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),r)}function GR(r,a,o,u,f){switch(a){case"focusin":return Zi=du(Zi,r,a,o,u,f),!0;case"dragenter":return Ji=du(Ji,r,a,o,u,f),!0;case"mouseover":return ta=du(ta,r,a,o,u,f),!0;case"pointerover":var m=f.pointerId;return hu.set(m,du(hu.get(m)||null,r,a,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,fu.set(m,du(fu.get(m)||null,r,a,o,u,f)),!0}return!1}function v_(r){var a=Gr(r.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=c(o),a!==null){r.blockedOn=a,yc(r.priority,function(){if(o.tag===13){var u=xn();u=Ci(u);var f=no(o,u);f!==null&&In(f,o,u),dm(o,u)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Dh(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var o=mm(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Qr=u,o.target.dispatchEvent(u),Qr=null}else return a=mr(o),a!==null&&m_(a),r.blockedOn=o,!1;a.shift()}return!0}function b_(r,a,o){Dh(r)&&o.delete(a)}function $R(){ym=!1,Zi!==null&&Dh(Zi)&&(Zi=null),Ji!==null&&Dh(Ji)&&(Ji=null),ta!==null&&Dh(ta)&&(ta=null),hu.forEach(b_),fu.forEach(b_)}function Ph(r,a){r.blockedOn===a&&(r.blockedOn=null,ym||(ym=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,$R)))}var Mh=null;function __(r){Mh!==r&&(Mh=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Mh===r&&(Mh=null);for(var a=0;a<r.length;a+=3){var o=r[a],u=r[a+1],f=r[a+2];if(typeof u!="function"){if(gm(u||o)===null)continue;break}var m=mr(o);m!==null&&(r.splice(a,3),a-=3,gp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function pu(r){function a(I){return Ph(I,r)}Zi!==null&&Ph(Zi,r),Ji!==null&&Ph(Ji,r),ta!==null&&Ph(ta,r),hu.forEach(a),fu.forEach(a);for(var o=0;o<ea.length;o++){var u=ea[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<ea.length&&(o=ea[0],o.blockedOn===null);)v_(o),o.blockedOn===null&&ea.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],_=f[Ae]||null;if(typeof m=="function")_||__(o);else if(_){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,_=m[Ae]||null)T=_.formAction;else if(gm(f)!==null)continue}else T=_.action;typeof T=="function"?o[u+1]=T:(o.splice(u,3),u-=3),__(o)}}}function vm(r){this._internalRoot=r}Vh.prototype.render=vm.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,u=xn();d_(o,u,r,a,null,null)},Vh.prototype.unmount=vm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;d_(r.current,2,null,r,null,null),yh(),a[Pn]=null}};function Vh(r){this._internalRoot=r}Vh.prototype.unstable_scheduleHydration=function(r){if(r){var a=Oi();r={blockedOn:null,target:r,priority:a};for(var o=0;o<ea.length&&a!==0&&a<ea[o].priority;o++);ea.splice(o,0,r),o===0&&v_(r)}};var E_=t.version;if(E_!=="19.1.0")throw Error(i(527,E_,"19.1.0"));ot.findDOMNode=function(r){var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(a),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var YR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lh.isDisabled&&Lh.supportsFiber)try{me=Lh.inject(YR),Qt=Lh}catch{}}return gu.createRoot=function(r,a){if(!s(r))throw Error(i(299));var o=!1,u="",f=L0,m=U0,_=z0,T=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(T=a.unstable_transitionCallbacks)),a=h_(r,1,!1,null,null,o,u,f,m,_,T,null),r[Pn]=a.current,tm(r),new vm(a)},gu.hydrateRoot=function(r,a,o){if(!s(r))throw Error(i(299));var u=!1,f="",m=L0,_=U0,T=z0,I=null,F=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(_=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(F=o.formState)),a=h_(r,1,!0,a,o??null,u,f,m,_,T,I,F),a.context=f_(null),o=a.current,u=xn(),u=Ci(u),f=Ui(u),f.callback=null,zi(o,f,u),o=u,a.current.lanes=o,Hr(a,o),Cr(a),r[Pn]=a.current,tm(r),new Vh(a)},gu.version="19.1.0",gu}var k_;function rx(){if(k_)return Em.exports;k_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Em.exports=nx(),Em.exports}var ix=rx();const ax=()=>{};var N_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},sx=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const l=n[e++];t[i++]=String.fromCharCode((s&31)<<6|l&63)}else if(s>239&&s<365){const l=n[e++],c=n[e++],d=n[e++],p=((s&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;t[i++]=String.fromCharCode(55296+(p>>10)),t[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[e++],c=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(l&63)<<6|c&63)}}return t.join("")},gT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const l=n[s],c=s+1<n.length,d=c?n[s+1]:0,p=s+2<n.length,g=p?n[s+2]:0,v=l>>2,A=(l&3)<<4|d>>4;let E=(d&15)<<2|g>>6,k=g&63;p||(k=64,c||(E=64)),i.push(e[v],e[A],e[E],e[k])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(mT(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):sx(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const l=e[n.charAt(s++)],d=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,l==null||d==null||g==null||A==null)throw new ox;const E=l<<2|d>>4;if(i.push(E),g!==64){const k=d<<4&240|g>>2;if(i.push(k),A!==64){const x=g<<6&192|A;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ox extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lx=function(n){const t=mT(n);return gT.encodeByteArray(t,!0)},ff=function(n){return lx(n).replace(/\./g,"")},yT=function(n){try{return gT.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=()=>ux().__FIREBASE_DEFAULTS__,hx=()=>{if(typeof process>"u"||typeof N_>"u")return;const n=N_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&yT(n[1]);return t&&JSON.parse(t)},Bf=()=>{try{return ax()||cx()||hx()||fx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vT=n=>{var t,e;return(e=(t=Bf())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},bT=n=>{const t=vT(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},_T=()=>{var n;return(n=Bf())===null||n===void 0?void 0:n.config},ET=n=>{var t;return(t=Bf())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){return n.endsWith(".cloudworkstations.dev")}async function Qg(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ff(JSON.stringify(e)),ff(JSON.stringify(c)),""].join(".")}const xu={};function px(){const n={prod:[],emulator:[]};for(const t of Object.keys(xu))xu[t]?n.emulator.push(t):n.prod.push(t);return n}function mx(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let D_=!1;function Xg(n,t){if(typeof window>"u"||typeof document>"u"||!xs(window.location.host)||xu[n]===t||xu[n]||D_)return;xu[n]=t;function e(E){return`__firebase__banner__${E}`}const i="__firebase__banner",l=px().prod.length>0;function c(){const E=document.getElementById(i);E&&E.remove()}function d(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function p(E,k){E.setAttribute("width","24"),E.setAttribute("id",k),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function g(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{D_=!0,c()},E}function v(E,k){E.setAttribute("id",k),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function A(){const E=mx(i),k=e("text"),x=document.getElementById(k)||document.createElement("span"),C=e("learnmore"),P=document.getElementById(C)||document.createElement("a"),Y=e("preprendIcon"),Q=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const W=E.element;d(W),v(P,C);const at=g();p(Q,Y),W.append(Q,x,P,at),document.body.appendChild(W)}l?(x.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function yx(){var n;const t=(n=Bf())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _x(){const n=sn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ex(){return!yx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wT(){try{return typeof indexedDB=="object"}catch{return!1}}function ST(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var l;t(((l=s.error)===null||l===void 0?void 0:l.message)||"")}}catch(e){t(e)}})}function Tx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="FirebaseError";class Kn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Ax,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,l=this.errors[t],c=l?wx(l,i):"Error",d=`${this.serviceName}: ${c} (${s}).`;return new Kn(s,d,i)}}function wx(n,t){return n.replace(Sx,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Sx=/\{\$([^}]+)}/g;function Rx(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function ma(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const l=n[s],c=t[s];if(P_(l)&&P_(c)){if(!ma(l,c))return!1}else if(l!==c)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function P_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function bu(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,l]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(l)}}),t}function _u(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function xx(n,t){const e=new Ix(n,t);return e.subscribe.bind(e)}class Ix{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");Cx(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=Sm),s.error===void 0&&(s.error=Sm),s.complete===void 0&&(s.complete=Sm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cx(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Sm(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=1e3,kx=2,Nx=4*60*60*1e3,Dx=.5;function M_(n,t=Ox,e=kx){const i=t*Math.pow(e,n),s=Math.round(Dx*i*(Math.random()-.5)*2);return Math.min(Nx,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n){return n&&n._delegate?n._delegate:n}class Yn{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new dx;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vx(t))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const l=this.getOrInitializeService({instanceIdentifier:s});i.resolve(l)}catch{}}}}clearInstance(t=ds){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ds){return this.instances.has(t)}getOptions(t=ds){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),l=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;l.add(t),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&t(c,s),()=>{l.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Mx(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ds){return this.component?this.component.multipleInstances?t:ds:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mx(n){return n===ds?void 0:n}function Vx(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Px(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ut||(Ut={}));const Ux={debug:Ut.DEBUG,verbose:Ut.VERBOSE,info:Ut.INFO,warn:Ut.WARN,error:Ut.ERROR,silent:Ut.SILENT},zx=Ut.INFO,jx={[Ut.DEBUG]:"log",[Ut.VERBOSE]:"log",[Ut.INFO]:"info",[Ut.WARN]:"warn",[Ut.ERROR]:"error"},Bx=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=jx[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ff{constructor(t){this.name=t,this._logLevel=zx,this._logHandler=Bx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ux[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ut.DEBUG,...t),this._logHandler(this,Ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ut.VERBOSE,...t),this._logHandler(this,Ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ut.INFO,...t),this._logHandler(this,Ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ut.WARN,...t),this._logHandler(this,Ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ut.ERROR,...t),this._logHandler(this,Ut.ERROR,...t)}}const Fx=(n,t)=>t.some(e=>n instanceof e);let V_,L_;function qx(){return V_||(V_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hx(){return L_||(L_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RT=new WeakMap,Zm=new WeakMap,xT=new WeakMap,Rm=new WeakMap,Wg=new WeakMap;function Gx(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{e(ha(n.result)),s()},c=()=>{i(n.error),s()};n.addEventListener("success",l),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&RT.set(e,n)}).catch(()=>{}),Wg.set(t,n),t}function $x(n){if(Zm.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{e(),s()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Zm.set(n,t)}let Jm={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Zm.get(n);if(t==="objectStoreNames")return n.objectStoreNames||xT.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ha(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Yx(n){Jm=n(Jm)}function Kx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(xm(this),t,...e);return xT.set(i,t.sort?t.sort():[t]),ha(i)}:Hx().includes(n)?function(...t){return n.apply(xm(this),t),ha(RT.get(this))}:function(...t){return ha(n.apply(xm(this),t))}}function Qx(n){return typeof n=="function"?Kx(n):(n instanceof IDBTransaction&&$x(n),Fx(n,qx())?new Proxy(n,Jm):n)}function ha(n){if(n instanceof IDBRequest)return Gx(n);if(Rm.has(n))return Rm.get(n);const t=Qx(n);return t!==n&&(Rm.set(n,t),Wg.set(t,n)),t}const xm=n=>Wg.get(n);function IT(n,t,{blocked:e,upgrade:i,blocking:s,terminated:l}={}){const c=indexedDB.open(n,t),d=ha(c);return i&&c.addEventListener("upgradeneeded",p=>{i(ha(c.result),p.oldVersion,p.newVersion,ha(c.transaction),p)}),e&&c.addEventListener("blocked",p=>e(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),s&&p.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const Xx=["get","getKey","getAll","getAllKeys","count"],Wx=["put","add","delete","clear"],Im=new Map;function U_(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Im.get(t))return Im.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Wx.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Xx.includes(e)))return;const l=async function(c,...d){const p=this.transaction(c,s?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[e](...d),s&&p.done]))[0]};return Im.set(t,l),l}Yx(n=>({...n,get:(t,e,i)=>U_(t,e)||n.get(t,e,i),has:(t,e)=>!!U_(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Jx(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Jx(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const tg="@firebase/app",z_="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Ff("@firebase/app"),tI="@firebase/app-compat",eI="@firebase/analytics-compat",nI="@firebase/analytics",rI="@firebase/app-check-compat",iI="@firebase/app-check",aI="@firebase/auth",sI="@firebase/auth-compat",oI="@firebase/database",lI="@firebase/data-connect",uI="@firebase/database-compat",cI="@firebase/functions",hI="@firebase/functions-compat",fI="@firebase/installations",dI="@firebase/installations-compat",pI="@firebase/messaging",mI="@firebase/messaging-compat",gI="@firebase/performance",yI="@firebase/performance-compat",vI="@firebase/remote-config",bI="@firebase/remote-config-compat",_I="@firebase/storage",EI="@firebase/storage-compat",TI="@firebase/firestore",AI="@firebase/ai",wI="@firebase/firestore-compat",SI="firebase",RI="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="[DEFAULT]",xI={[tg]:"fire-core",[tI]:"fire-core-compat",[nI]:"fire-analytics",[eI]:"fire-analytics-compat",[iI]:"fire-app-check",[rI]:"fire-app-check-compat",[aI]:"fire-auth",[sI]:"fire-auth-compat",[oI]:"fire-rtdb",[lI]:"fire-data-connect",[uI]:"fire-rtdb-compat",[cI]:"fire-fn",[hI]:"fire-fn-compat",[fI]:"fire-iid",[dI]:"fire-iid-compat",[pI]:"fire-fcm",[mI]:"fire-fcm-compat",[gI]:"fire-perf",[yI]:"fire-perf-compat",[vI]:"fire-rc",[bI]:"fire-rc-compat",[_I]:"fire-gcs",[EI]:"fire-gcs-compat",[TI]:"fire-fst",[wI]:"fire-fst-compat",[AI]:"fire-vertex","fire-js":"fire-js",[SI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new Map,II=new Map,ng=new Map;function j_(n,t){try{n.container.addComponent(t)}catch(e){_i.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function or(n){const t=n.name;if(ng.has(t))return _i.debug(`There were multiple attempts to register component ${t}.`),!1;ng.set(t,n);for(const e of df.values())j_(e,n);for(const e of II.values())j_(e,n);return!0}function Ra(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function On(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fa=new Is("app","Firebase",CI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=RI;function CT(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:eg,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw fa.create("bad-app-name",{appName:String(s)});if(e||(e=_T()),!e)throw fa.create("no-options");const l=df.get(s);if(l){if(ma(e,l.options)&&ma(i,l.config))return l;throw fa.create("duplicate-app",{appName:s})}const c=new Lx(s);for(const p of ng.values())c.addComponent(p);const d=new OI(e,i,c);return df.set(s,d),d}function qf(n=eg){const t=df.get(n);if(!t&&n===eg&&_T())return CT();if(!t)throw fa.create("no-app",{appName:n});return t}function yn(n,t,e){var i;let s=(i=xI[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const l=s.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const d=[`Unable to register library "${s}" with version "${t}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_i.warn(d.join(" "));return}or(new Yn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="firebase-heartbeat-database",NI=1,Lu="firebase-heartbeat-store";let Cm=null;function OT(){return Cm||(Cm=IT(kI,NI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Lu)}catch(e){console.warn(e)}}}}).catch(n=>{throw fa.create("idb-open",{originalErrorMessage:n.message})})),Cm}async function DI(n){try{const e=(await OT()).transaction(Lu),i=await e.objectStore(Lu).get(kT(n));return await e.done,i}catch(t){if(t instanceof Kn)_i.warn(t.message);else{const e=fa.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_i.warn(e.message)}}}async function B_(n,t){try{const i=(await OT()).transaction(Lu,"readwrite");await i.objectStore(Lu).put(t,kT(n)),await i.done}catch(e){if(e instanceof Kn)_i.warn(e.message);else{const i=fa.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});_i.warn(i.message)}}}function kT(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=1024,MI=30;class VI{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new UI(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=F_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:s}),this._heartbeatsCache.heartbeats.length>MI){const c=zI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){_i.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=F_(),{heartbeatsToSend:i,unsentEntries:s}=LI(this._heartbeatsCache.heartbeats),l=ff(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return _i.warn(e),""}}}function F_(){return new Date().toISOString().substring(0,10)}function LI(n,t=PI){const e=[];let i=n.slice();for(const s of n){const l=e.find(c=>c.agent===s.agent);if(l){if(l.dates.push(s.date),q_(e)>t){l.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),q_(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class UI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wT()?ST().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await DI(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return B_(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return B_(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function q_(n){return ff(JSON.stringify({version:2,heartbeats:n})).length}function zI(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(n){or(new Yn("platform-logger",t=>new Zx(t),"PRIVATE")),or(new Yn("heartbeat",t=>new VI(t),"PRIVATE")),yn(tg,z_,n),yn(tg,z_,"esm2017"),yn("fire-js","")}jI("");var BI="firebase",FI="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(BI,FI,"app");const NT="@firebase/installations",Zg="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=1e4,PT=`w:${Zg}`,MT="FIS_v2",qI="https://firebaseinstallations.googleapis.com/v1",HI=60*60*1e3,GI="installations",$I="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ys=new Is(GI,$I,YI);function VT(n){return n instanceof Kn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT({projectId:n}){return`${qI}/projects/${n}/installations`}function UT(n){return{token:n.token,requestStatus:2,expiresIn:QI(n.expiresIn),creationTime:Date.now()}}async function zT(n,t){const i=(await t.json()).error;return ys.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function jT({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function KI(n,{refreshToken:t}){const e=jT(n);return e.append("Authorization",XI(t)),e}async function BT(n){const t=await n();return t.status>=500&&t.status<600?n():t}function QI(n){return Number(n.replace("s","000"))}function XI(n){return`${MT} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const i=LT(n),s=jT(n),l=t.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const c={fid:e,authVersion:MT,appId:n.appId,sdkVersion:PT},d={method:"POST",headers:s,body:JSON.stringify(c)},p=await BT(()=>fetch(i,d));if(p.ok){const g=await p.json();return{fid:g.fid||e,registrationStatus:2,refreshToken:g.refreshToken,authToken:UT(g.authToken)}}else throw await zT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=/^[cdef][\w-]{21}$/,rg="";function tC(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=eC(n);return JI.test(e)?e:rg}catch{return rg}}function eC(n){return ZI(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new Map;function HT(n,t){const e=Hf(n);GT(e,t),nC(e,t)}function GT(n,t){const e=qT.get(n);if(e)for(const i of e)i(t)}function nC(n,t){const e=rC();e&&e.postMessage({key:n,fid:t}),iC()}let ps=null;function rC(){return!ps&&"BroadcastChannel"in self&&(ps=new BroadcastChannel("[Firebase] FID Change"),ps.onmessage=n=>{GT(n.data.key,n.data.fid)}),ps}function iC(){qT.size===0&&ps&&(ps.close(),ps=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="firebase-installations-database",sC=1,vs="firebase-installations-store";let Om=null;function Jg(){return Om||(Om=IT(aC,sC,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(vs)}}})),Om}async function pf(n,t){const e=Hf(n),s=(await Jg()).transaction(vs,"readwrite"),l=s.objectStore(vs),c=await l.get(e);return await l.put(t,e),await s.done,(!c||c.fid!==t.fid)&&HT(n,t.fid),t}async function $T(n){const t=Hf(n),i=(await Jg()).transaction(vs,"readwrite");await i.objectStore(vs).delete(t),await i.done}async function Gf(n,t){const e=Hf(n),s=(await Jg()).transaction(vs,"readwrite"),l=s.objectStore(vs),c=await l.get(e),d=t(c);return d===void 0?await l.delete(e):await l.put(d,e),await s.done,d&&(!c||c.fid!==d.fid)&&HT(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(n){let t;const e=await Gf(n.appConfig,i=>{const s=oC(i),l=lC(n,s);return t=l.registrationPromise,l.installationEntry});return e.fid===rg?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function oC(n){const t=n||{fid:tC(),registrationStatus:0};return YT(t)}function lC(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ys.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=uC(n,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:cC(n)}:{installationEntry:t}}async function uC(n,t){try{const e=await WI(n,t);return pf(n.appConfig,e)}catch(e){throw VT(e)&&e.customData.serverCode===409?await $T(n.appConfig):await pf(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function cC(n){let t=await H_(n.appConfig);for(;t.registrationStatus===1;)await FT(100),t=await H_(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await ty(n);return i||e}return t}function H_(n){return Gf(n,t=>{if(!t)throw ys.create("installation-not-found");return YT(t)})}function YT(n){return hC(n)?{fid:n.fid,registrationStatus:0}:n}function hC(n){return n.registrationStatus===1&&n.registrationTime+DT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC({appConfig:n,heartbeatServiceProvider:t},e){const i=dC(n,e),s=KI(n,e),l=t.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const c={installation:{sdkVersion:PT,appId:n.appId}},d={method:"POST",headers:s,body:JSON.stringify(c)},p=await BT(()=>fetch(i,d));if(p.ok){const g=await p.json();return UT(g)}else throw await zT("Generate Auth Token",p)}function dC(n,{fid:t}){return`${LT(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(n,t=!1){let e;const i=await Gf(n.appConfig,l=>{if(!KT(l))throw ys.create("not-registered");const c=l.authToken;if(!t&&gC(c))return l;if(c.requestStatus===1)return e=pC(n,t),l;{if(!navigator.onLine)throw ys.create("app-offline");const d=vC(l);return e=mC(n,d),d}});return e?await e:i.authToken}async function pC(n,t){let e=await G_(n.appConfig);for(;e.authToken.requestStatus===1;)await FT(100),e=await G_(n.appConfig);const i=e.authToken;return i.requestStatus===0?ey(n,t):i}function G_(n){return Gf(n,t=>{if(!KT(t))throw ys.create("not-registered");const e=t.authToken;return bC(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function mC(n,t){try{const e=await fC(n,t),i=Object.assign(Object.assign({},t),{authToken:e});return await pf(n.appConfig,i),e}catch(e){if(VT(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await $T(n.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await pf(n.appConfig,i)}throw e}}function KT(n){return n!==void 0&&n.registrationStatus===2}function gC(n){return n.requestStatus===2&&!yC(n)}function yC(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+HI}function vC(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function bC(n){return n.requestStatus===1&&n.requestTime+DT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(n){const t=n,{installationEntry:e,registrationPromise:i}=await ty(t);return i?i.catch(console.error):ey(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(n,t=!1){const e=n;return await TC(e),(await ey(e,t)).token}async function TC(n){const{registrationPromise:t}=await ty(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(n){if(!n||!n.options)throw km("App Configuration");if(!n.name)throw km("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw km(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function km(n){return ys.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="installations",wC="installations-internal",SC=n=>{const t=n.getProvider("app").getImmediate(),e=AC(t),i=Ra(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},RC=n=>{const t=n.getProvider("app").getImmediate(),e=Ra(t,QT).getImmediate();return{getId:()=>_C(e),getToken:s=>EC(e,s)}};function xC(){or(new Yn(QT,SC,"PUBLIC")),or(new Yn(wC,RC,"PRIVATE"))}xC();yn(NT,Zg);yn(NT,Zg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="analytics",IC="firebase_id",CC="origin",OC=60*1e3,kC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ny="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Ff("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kn=new Is("analytics","Analytics",NC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(n){if(!n.startsWith(ny)){const t=kn.create("invalid-gtag-resource",{gtagURL:n});return vn.warn(t.message),""}return n}function XT(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function PC(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function MC(n,t){const e=PC("firebase-js-sdk-policy",{createScriptURL:DC}),i=document.createElement("script"),s=`${ny}?l=${n}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function VC(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function LC(n,t,e,i,s,l){const c=i[s];try{if(c)await t[c];else{const p=(await XT(e)).find(g=>g.measurementId===s);p&&await t[p.appId]}}catch(d){vn.error(d)}n("config",s,l)}async function UC(n,t,e,i,s){try{let l=[];if(s&&s.send_to){let c=s.send_to;Array.isArray(c)||(c=[c]);const d=await XT(e);for(const p of c){const g=d.find(A=>A.measurementId===p),v=g&&t[g.appId];if(v)l.push(v);else{l=[];break}}}l.length===0&&(l=Object.values(t)),await Promise.all(l),n("event",i,s||{})}catch(l){vn.error(l)}}function zC(n,t,e,i){async function s(l,...c){try{if(l==="event"){const[d,p]=c;await UC(n,t,e,d,p)}else if(l==="config"){const[d,p]=c;await LC(n,t,e,i,d,p)}else if(l==="consent"){const[d,p]=c;n("consent",d,p)}else if(l==="get"){const[d,p,g]=c;n("get",d,p,g)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){vn.error(d)}}return s}function jC(n,t,e,i,s){let l=function(...c){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(l=window[s]),window[s]=zC(l,n,t,e),{gtagCore:l,wrappedGtag:window[s]}}function BC(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(ny)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=30,qC=1e3;class HC{constructor(t={},e=qC){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const WT=new HC;function GC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function $C(n){var t;const{appId:e,apiKey:i}=n,s={method:"GET",headers:GC(i)},l=kC.replace("{app-id}",e),c=await fetch(l,s);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();!((t=p.error)===null||t===void 0)&&t.message&&(d=p.error.message)}catch{}throw kn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function YC(n,t=WT,e){const{appId:i,apiKey:s,measurementId:l}=n.options;if(!i)throw kn.create("no-app-id");if(!s){if(l)return{measurementId:l,appId:i};throw kn.create("no-api-key")}const c=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new XC;return setTimeout(async()=>{d.abort()},OC),ZT({appId:i,apiKey:s,measurementId:l},c,d,t)}async function ZT(n,{throttleEndTimeMillis:t,backoffCount:e},i,s=WT){var l;const{appId:c,measurementId:d}=n;try{await KC(i,t)}catch(p){if(d)return vn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:d};throw p}try{const p=await $C(n);return s.deleteThrottleMetadata(c),p}catch(p){const g=p;if(!QC(g)){if(s.deleteThrottleMetadata(c),d)return vn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:d};throw p}const v=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?M_(e,s.intervalMillis,FC):M_(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+v,backoffCount:e+1};return s.setThrottleMetadata(c,A),vn.debug(`Calling attemptFetch again in ${v} millis`),ZT(n,A,i,s)}}function KC(n,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),l=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(l),i(kn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function QC(n){if(!(n instanceof Kn)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class XC{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function WC(n,t,e,i,s){if(s&&s.global){n("event",e,i);return}else{const l=await t,c=Object.assign(Object.assign({},i),{send_to:l});n("event",e,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(){if(wT())try{await ST()}catch(n){return vn.warn(kn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return vn.warn(kn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function JC(n,t,e,i,s,l,c){var d;const p=YC(n);p.then(k=>{e[k.measurementId]=k.appId,n.options.measurementId&&k.measurementId!==n.options.measurementId&&vn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>vn.error(k)),t.push(p);const g=ZC().then(k=>{if(k)return i.getId()}),[v,A]=await Promise.all([p,g]);BC(l)||MC(l,v.measurementId),s("js",new Date);const E=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return E[CC]="firebase",E.update=!0,A!=null&&(E[IC]=A),s("config",v.measurementId,E),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(t){this.app=t}_delete(){return delete Iu[this.app.options.appId],Promise.resolve()}}let Iu={},$_=[];const Y_={};let Nm="dataLayer",eO="gtag",K_,JT,Q_=!1;function nO(){const n=[];if(AT()&&n.push("This is a browser extension environment."),Tx()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=kn.create("invalid-analytics-context",{errorInfo:t});vn.warn(e.message)}}function rO(n,t,e){nO();const i=n.options.appId;if(!i)throw kn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kn.create("no-api-key");if(Iu[i]!=null)throw kn.create("already-exists",{id:i});if(!Q_){VC(Nm);const{wrappedGtag:l,gtagCore:c}=jC(Iu,$_,Y_,Nm,eO);JT=l,K_=c,Q_=!0}return Iu[i]=JC(n,$_,Y_,t,K_,Nm,e),new tO(n)}function iO(n=qf()){n=We(n);const t=Ra(n,mf);return t.isInitialized()?t.getImmediate():aO(n)}function aO(n,t={}){const e=Ra(n,mf);if(e.isInitialized()){const s=e.getImmediate();if(ma(t,e.getOptions()))return s;throw kn.create("already-initialized")}return e.initialize({options:t})}function sO(n,t,e,i){n=We(n),WC(JT,Iu[n.app.options.appId],t,e,i).catch(s=>vn.error(s))}const X_="@firebase/analytics",W_="0.10.16";function oO(){or(new Yn(mf,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return rO(i,s,e)},"PUBLIC")),or(new Yn("analytics-internal",n,"PRIVATE")),yn(X_,W_),yn(X_,W_,"esm2017");function n(t){try{const e=t.getProvider(mf).getImmediate();return{logEvent:(i,s,l)=>sO(e,i,s,l)}}catch(e){throw kn.create("interop-component-reg-failed",{reason:e})}}}oO();function ry(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(e[i[s]]=n[i[s]]);return e}function tA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lO=tA,eA=new Is("auth","Firebase",tA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Ff("@firebase/auth");function uO(n,...t){gf.logLevel<=Ut.WARN&&gf.warn(`Auth (${Cs}): ${n}`,...t)}function Wh(n,...t){gf.logLevel<=Ut.ERROR&&gf.error(`Auth (${Cs}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n,...t){throw iy(n,...t)}function Pr(n,...t){return iy(n,...t)}function nA(n,t,e){const i=Object.assign(Object.assign({},lO()),{[t]:e});return new Is("auth","Firebase",i).create(t,{appName:n.name})}function yi(n){return nA(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iy(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return eA.create(n,...t)}function wt(n,t,...e){if(!n)throw iy(t,...e)}function mi(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Wh(t),new Error(t)}function Ei(n,t){n||mi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cO(){return Z_()==="http:"||Z_()==="https:"}function Z_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cO()||AT()||"connection"in navigator)?navigator.onLine:!0}function fO(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ei(e>t,"Short delay should be less than long delay!"),this.isMobile=gx()||bx()}get(){return hO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n,t){Ei(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mO=new tc(3e4,6e4);function xa(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Ia(n,t,e,i,s={}){return iA(n,s,async()=>{let l={},c={};i&&(t==="GET"?c=i:l={body:JSON.stringify(i)});const d=Ju(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:t,headers:p},l);return vx()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&xs(n.emulatorConfig.host)&&(g.credentials="include"),rA.fetch()(await aA(n,n.config.apiHost,e,d),g)})}async function iA(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},dO),t);try{const s=new yO(n),l=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Uh(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uh(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Uh(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Uh(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw nA(n,v,g);lr(n,v)}}catch(s){if(s instanceof Kn)throw s;lr(n,"network-request-failed",{message:String(s)})}}async function ec(n,t,e,i,s={}){const l=await Ia(n,t,e,i,s);return"mfaPendingCredential"in l&&lr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function aA(n,t,e,i){const s=`${t}${e}?${i}`,l=n,c=l.config.emulator?ay(n.config,s):`${n.config.apiScheme}://${s}`;return pO.includes(e)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function gO(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(Pr(this.auth,"network-request-failed")),mO.get())})}}function Uh(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=Pr(n,t,i);return s.customData._tokenResponse=e,s}function J_(n){return n!==void 0&&n.enterprise!==void 0}class vO{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return gO(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bO(n,t){return Ia(n,"GET","/v2/recaptchaConfig",xa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(n,t){return Ia(n,"POST","/v1/accounts:delete",t)}async function yf(n,t){return Ia(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function EO(n,t=!1){const e=We(n),i=await e.getIdToken(t),s=sy(i);wt(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const l=typeof s.firebase=="object"?s.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:s,token:i,authTime:Cu(Dm(s.auth_time)),issuedAtTime:Cu(Dm(s.iat)),expirationTime:Cu(Dm(s.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Dm(n){return Number(n)*1e3}function sy(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return Wh("JWT malformed, contained fewer than 3 sections"),null;try{const s=yT(e);return s?JSON.parse(s):(Wh("Failed to decode base64 JWT payload"),null)}catch(s){return Wh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function t1(n){const t=sy(n);return wt(t,"internal-error"),wt(typeof t.exp<"u","internal-error"),wt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof Kn&&TO(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function TO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cu(this.lastLoginAt),this.creationTime=Cu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(n){var t;const e=n.auth,i=await n.getIdToken(),s=await Uu(n,yf(e,{idToken:i}));wt(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];n._notifyReloadListener(l);const c=!((t=l.providerUserInfo)===null||t===void 0)&&t.length?sA(l.providerUserInfo):[],d=SO(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?g:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new ag(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,A)}async function wO(n){const t=We(n);await vf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function SO(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function sA(n){return n.map(t=>{var{providerId:e}=t,i=ry(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(n,t){const e=await iA(n,{},async()=>{const i=Ju({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:l}=n.config,c=await aA(n,s,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return n.emulatorConfig&&xs(n.emulatorConfig.host)&&(p.credentials="include"),rA.fetch()(c,p)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function xO(n,t){return Ia(n,"POST","/v2/accounts:revokeToken",xa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){wt(t.idToken,"internal-error"),wt(typeof t.idToken<"u","internal-error"),wt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):t1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){wt(t.length!==0,"internal-error");const e=t1(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(wt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:l}=await RO(t,e);this.updateTokensAndExpiration(i,s,Number(l))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:l}=e,c=new Lo;return i&&(wt(typeof i=="string","internal-error",{appName:t}),c.refreshToken=i),s&&(wt(typeof s=="string","internal-error",{appName:t}),c.accessToken=s),l&&(wt(typeof l=="number","internal-error",{appName:t}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return mi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,t){wt(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class rr{constructor(t){var{uid:e,auth:i,stsTokenManager:s}=t,l=ry(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ag(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const e=await Uu(this,this.stsTokenManager.getToken(this.auth,t));return wt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return EO(this,t)}reload(){return wO(this)}_assign(t){this!==t&&(wt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new rr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){wt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await vf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(yi(this.auth));const t=await this.getIdToken();return await Uu(this,_O(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,s,l,c,d,p,g,v;const A=(i=e.displayName)!==null&&i!==void 0?i:void 0,E=(s=e.email)!==null&&s!==void 0?s:void 0,k=(l=e.phoneNumber)!==null&&l!==void 0?l:void 0,x=(c=e.photoURL)!==null&&c!==void 0?c:void 0,C=(d=e.tenantId)!==null&&d!==void 0?d:void 0,P=(p=e._redirectEventId)!==null&&p!==void 0?p:void 0,Y=(g=e.createdAt)!==null&&g!==void 0?g:void 0,Q=(v=e.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:W,emailVerified:at,isAnonymous:st,providerData:mt,stsTokenManager:D}=e;wt(W&&D,t,"internal-error");const S=Lo.fromJSON(this.name,D);wt(typeof W=="string",t,"internal-error"),ra(A,t.name),ra(E,t.name),wt(typeof at=="boolean",t,"internal-error"),wt(typeof st=="boolean",t,"internal-error"),ra(k,t.name),ra(x,t.name),ra(C,t.name),ra(P,t.name),ra(Y,t.name),ra(Q,t.name);const R=new rr({uid:W,auth:t,email:E,emailVerified:at,displayName:A,isAnonymous:st,photoURL:x,phoneNumber:k,tenantId:C,stsTokenManager:S,createdAt:Y,lastLoginAt:Q});return mt&&Array.isArray(mt)&&(R.providerData=mt.map(M=>Object.assign({},M))),P&&(R._redirectEventId=P),R}static async _fromIdTokenResponse(t,e,i=!1){const s=new Lo;s.updateFromServerResponse(e);const l=new rr({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await vf(l),l}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];wt(s.localId!==void 0,"internal-error");const l=s.providerUserInfo!==void 0?sA(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(l!=null&&l.length),d=new Lo;d.updateFromIdToken(i);const p=new rr({uid:s.localId,auth:t,stsTokenManager:d,isAnonymous:c}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ag(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new Map;function gi(n){Ei(n instanceof Function,"Expected a class definition");let t=e1.get(n);return t?(Ei(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,e1.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}oA.type="NONE";const n1=oA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n,t,e){return`firebase:${n}:${t}:${e}`}class Uo{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:l}=this.auth;this.fullUserKey=Zh(this.userKey,s.apiKey,l),this.fullPersistenceKey=Zh("persistence",s.apiKey,l),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await yf(this.auth,{idToken:t}).catch(()=>{});return e?rr._fromGetAccountInfoResponse(this.auth,e,t):null}return rr._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new Uo(gi(n1),t,i);const s=(await Promise.all(e.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=s[0]||gi(n1);const c=Zh(i,t.config.apiKey,t.name);let d=null;for(const g of e)try{const v=await g._get(c);if(v){let A;if(typeof v=="string"){const E=await yf(t,{idToken:v}).catch(()=>{});if(!E)break;A=await rr._fromGetAccountInfoResponse(t,E,v)}else A=rr._fromJSON(t,v);g!==l&&(d=A),l=g;break}}catch{}const p=s.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Uo(l,t,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(e.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Uo(l,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dA(t))return"Blackberry";if(pA(t))return"Webos";if(uA(t))return"Safari";if((t.includes("chrome/")||cA(t))&&!t.includes("edge/"))return"Chrome";if(fA(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function lA(n=sn()){return/firefox\//i.test(n)}function uA(n=sn()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cA(n=sn()){return/crios\//i.test(n)}function hA(n=sn()){return/iemobile/i.test(n)}function fA(n=sn()){return/android/i.test(n)}function dA(n=sn()){return/blackberry/i.test(n)}function pA(n=sn()){return/webos/i.test(n)}function oy(n=sn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function IO(n=sn()){var t;return oy(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function CO(){return _x()&&document.documentMode===10}function mA(n=sn()){return oy(n)||fA(n)||pA(n)||dA(n)||/windows phone/i.test(n)||hA(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(n,t=[]){let e;switch(n){case"Browser":e=r1(sn());break;case"Worker":e=`${r1(sn())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Cs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=l=>new Promise((c,d)=>{try{const p=t(l);c(p)}catch(p){d(p)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO(n,t={}){return Ia(n,"GET","/v2/passwordPolicy",xa(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=6;class DO{constructor(t){var e,i,s,l;const c=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=c.minPasswordLength)!==null&&e!==void 0?e:NO,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(l=t.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,s,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(e=p.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(s=p.containsLowercaseLetter)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new i1(this),this.idTokenSubscription=new i1(this),this.beforeStateQueue=new OO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=gi(e)),this._initializationPromise=this.queue(async()=>{var i,s,l;if(!this._deleted&&(this.persistenceManager=await Uo.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await yf(this,{idToken:t}),i=await rr._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(On(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,d=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(t);(!c||c===d)&&(p!=null&&p.user)&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return wt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await vf(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fO()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(On(this.app))return Promise.reject(yi(this));const e=t?We(t):null;return e&&wt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&wt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return On(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await kO(this),e=new DO(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Is("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await xO(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&gi(t)||this._popupRedirectResolver;wt(e,this,"argument-error"),this.redirectPersistenceManager=await Uo.create(this,[gi(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const l=typeof e=="function"?e:e.next.bind(e);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(wt(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof e=="function"){const p=t.addObserver(e,i,s);return()=>{c=!0,p()}}else{const p=t.addObserver(e);return()=>{c=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return wt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=gA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&uO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Os(n){return We(n)}class i1{constructor(t){this.auth=t,this.observer=null,this.addObserver=xx(e=>this.observer=e)}get next(){return wt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MO(n){$f=n}function yA(n){return $f.loadJS(n)}function VO(){return $f.recaptchaEnterpriseScript}function LO(){return $f.gapiScript}function UO(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class zO{constructor(){this.enterprise=new jO}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class jO{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const BO="recaptcha-enterprise",vA="NO_RECAPTCHA";class FO{constructor(t){this.type=BO,this.auth=Os(t)}async verify(t="verify",e=!1){async function i(l){if(!e){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{bO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new vO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function s(l,c,d){const p=window.grecaptcha;J_(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:t}).then(g=>{c(g)}).catch(()=>{c(vA)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!e&&J_(window.grecaptcha))s(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=VO();p.length!==0&&(p+=d),yA(p).then(()=>{s(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function a1(n,t,e,i=!1,s=!1){const l=new FO(n);let c;if(s)c=vA;else try{c=await l.verify(e)}catch{c=await l.verify(e,!0)}const d=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function sg(n,t,e,i,s){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await a1(n,t,e,e==="getOobCode");return i(n,c)}else return i(n,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await a1(n,t,e,e==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(n,t){const e=Ra(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),l=e.getOptions();if(ma(l,t??{}))return s;lr(s,"already-initialized")}return e.initialize({options:t})}function HO(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(gi);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function GO(n,t,e){const i=Os(n);wt(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,l=bA(t),{host:c,port:d}=$O(t),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){wt(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),wt(ma(g,i.config.emulator)&&ma(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,xs(c)?(Qg(`${l}//${c}${p}`),Xg("Auth",!0)):YO()}function bA(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function $O(n){const t=bA(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const l=s[1];return{host:l,port:s1(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:s1(c)}}}function s1(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function YO(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return mi("not implemented")}_getIdTokenResponse(t){return mi("not implemented")}_linkToIdToken(t,e){return mi("not implemented")}_getReauthenticationResolver(t){return mi("not implemented")}}async function KO(n,t){return Ia(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(n,t){return ec(n,"POST","/v1/accounts:signInWithPassword",xa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(n,t){return ec(n,"POST","/v1/accounts:signInWithEmailLink",xa(n,t))}async function WO(n,t){return ec(n,"POST","/v1/accounts:signInWithEmailLink",xa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends ly{constructor(t,e,i,s=null){super("password",i),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new zu(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new zu(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sg(t,e,"signInWithPassword",QO);case"emailLink":return XO(t,{email:this._email,oobCode:this._password});default:lr(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sg(t,i,"signUpPassword",KO);case"emailLink":return WO(t,{idToken:e,email:this._email,oobCode:this._password});default:lr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n,t){return ec(n,"POST","/v1/accounts:signInWithIdp",xa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO="http://localhost";class bs extends ly{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new bs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):lr("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=e,l=ry(e,["providerId","signInMethod"]);if(!i||!s)return null;const c=new bs(i,s);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(t){const e=this.buildRequest();return zo(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,zo(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,zo(t,e)}buildRequest(){const t={requestUri:ZO,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ju(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t5(n){const t=bu(_u(n)).link,e=t?bu(_u(t)).deep_link_id:null,i=bu(_u(n)).deep_link_id;return(i?bu(_u(i)).link:null)||i||e||t||n}class uy{constructor(t){var e,i,s,l,c,d;const p=bu(_u(t)),g=(e=p.apiKey)!==null&&e!==void 0?e:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,A=JO((s=p.mode)!==null&&s!==void 0?s:null);wt(g&&v&&A,"argument-error"),this.apiKey=g,this.operation=A,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(t){const e=t5(t);try{return new uy(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.providerId=Xo.PROVIDER_ID}static credential(t,e){return zu._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=uy.parseLink(e);return wt(i,"argument-error"),zu._fromEmailAndCode(t,i.code,i.tenantId)}}Xo.PROVIDER_ID="password";Xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends _A{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends nc{constructor(){super("facebook.com")}static credential(t){return bs._fromParams({providerId:sa.PROVIDER_ID,signInMethod:sa.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sa.credentialFromTaggedObject(t)}static credentialFromError(t){return sa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return sa.credential(t.oauthAccessToken)}catch{return null}}}sa.FACEBOOK_SIGN_IN_METHOD="facebook.com";sa.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends nc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return bs._fromParams({providerId:oa.PROVIDER_ID,signInMethod:oa.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return oa.credentialFromTaggedObject(t)}static credentialFromError(t){return oa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return oa.credential(e,i)}catch{return null}}}oa.GOOGLE_SIGN_IN_METHOD="google.com";oa.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends nc{constructor(){super("github.com")}static credential(t){return bs._fromParams({providerId:la.PROVIDER_ID,signInMethod:la.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return la.credentialFromTaggedObject(t)}static credentialFromError(t){return la.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return la.credential(t.oauthAccessToken)}catch{return null}}}la.GITHUB_SIGN_IN_METHOD="github.com";la.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends nc{constructor(){super("twitter.com")}static credential(t,e){return bs._fromParams({providerId:ua.PROVIDER_ID,signInMethod:ua.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ua.credentialFromTaggedObject(t)}static credentialFromError(t){return ua.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return ua.credential(e,i)}catch{return null}}}ua.TWITTER_SIGN_IN_METHOD="twitter.com";ua.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5(n,t){return ec(n,"POST","/v1/accounts:signUp",xa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const l=await rr._fromIdTokenResponse(t,i,s),c=o1(i);return new _s({user:l,providerId:c,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=o1(i);return new _s({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function o1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends Kn{constructor(t,e,i,s){var l;super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,bf.prototype),this.customData={appName:t.name,tenantId:(l=t.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new bf(t,e,i,s)}}function EA(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?bf._fromErrorAndOperation(n,l,t,i):l})}async function n5(n,t,e=!1){const i=await Uu(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return _s._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r5(n,t,e=!1){const{auth:i}=n;if(On(i.app))return Promise.reject(yi(i));const s="reauthenticate";try{const l=await Uu(n,EA(i,s,t,n),e);wt(l.idToken,i,"internal-error");const c=sy(l.idToken);wt(c,i,"internal-error");const{sub:d}=c;return wt(n.uid===d,i,"user-mismatch"),_s._forOperation(n,s,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&lr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(n,t,e=!1){if(On(n.app))return Promise.reject(yi(n));const i="signIn",s=await EA(n,i,t),l=await _s._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(l.user),l}async function i5(n,t){return TA(Os(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(n){const t=Os(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function a5(n,t,e){if(On(n.app))return Promise.reject(yi(n));const i=Os(n),c=await sg(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",e5).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&AA(n),p}),d=await _s._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function s5(n,t,e){return On(n.app)?Promise.reject(yi(n)):i5(We(n),Xo.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&AA(n),i})}function o5(n,t,e,i){return We(n).onIdTokenChanged(t,e,i)}function l5(n,t,e){return We(n).beforeAuthStateChanged(t,e)}function u5(n,t,e,i){return We(n).onAuthStateChanged(t,e,i)}const _f="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(_f,"1"),this.storage.removeItem(_f),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c5=1e3,h5=10;class SA extends wA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(i);!e&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);CO()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,h5):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},c5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}SA.type="LOCAL";const f5=SA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA extends wA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}RA.type="SESSION";const xA=RA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d5(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new Yf(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:l}=e.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const d=Array.from(c).map(async g=>g(e.origin,l)),p=await d5(d);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:p})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=cy("",20);s.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:s,onMessage(A){const E=A;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(E.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:t,eventId:g,data:e},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return window}function m5(n){Mr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(){return typeof Mr().WorkerGlobalScope<"u"&&typeof Mr().importScripts=="function"}async function g5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y5(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function v5(){return IA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="firebaseLocalStorageDb",b5=1,Ef="firebaseLocalStorage",OA="fbase_key";class rc{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Kf(n,t){return n.transaction([Ef],t?"readwrite":"readonly").objectStore(Ef)}function _5(){const n=indexedDB.deleteDatabase(CA);return new rc(n).toPromise()}function og(){const n=indexedDB.open(CA,b5);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ef,{keyPath:OA})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ef)?t(i):(i.close(),await _5(),t(await og()))})})}async function l1(n,t,e){const i=Kf(n,!0).put({[OA]:t,value:e});return new rc(i).toPromise()}async function E5(n,t){const e=Kf(n,!1).get(t),i=await new rc(e).toPromise();return i===void 0?null:i.value}function u1(n,t){const e=Kf(n,!0).delete(t);return new rc(e).toPromise()}const T5=800,A5=3;class kA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await og(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>A5)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yf._getInstance(v5()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await g5(),!this.activeServiceWorker)return;this.sender=new p5(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||y5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await og();return await l1(t,_f,"1"),await u1(t,_f),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>l1(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>E5(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>u1(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const l=Kf(s,!1).getAll();return new rc(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:l}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(l)&&(this.notifyListeners(s,l),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kA.type="LOCAL";const w5=kA;new tc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S5(n,t){return t?gi(t):(wt(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends ly{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zo(t,this._buildIdpRequest())}_linkToIdToken(t,e){return zo(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return zo(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function R5(n){return TA(n.auth,new hy(n),n.bypassAuthState)}function x5(n){const{auth:t,user:e}=n;return wt(e,t,"internal-error"),r5(e,new hy(n),n.bypassAuthState)}async function I5(n){const{auth:t,user:e}=n;return wt(e,t,"internal-error"),n5(e,new hy(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(t,e,i,s,l=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:l,error:c,type:d}=t;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:e,sessionId:i,tenantId:l||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return R5;case"linkViaPopup":case"linkViaRedirect":return I5;case"reauthViaPopup":case"reauthViaRedirect":return x5;default:lr(this.auth,"internal-error")}}resolve(t){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C5=new tc(2e3,1e4);class Po extends NA{constructor(t,e,i,s,l){super(t,e,s,l),this.provider=i,this.authWindow=null,this.pollId=null,Po.currentPopupAction&&Po.currentPopupAction.cancel(),Po.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return wt(t,this.auth,"internal-error"),t}async onExecution(){Ei(this.filter.length===1,"Popup operations only handle one event");const t=cy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Po.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,C5.get())};t()}}Po.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O5="pendingRedirect",Jh=new Map;class k5 extends NA{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=Jh.get(this.auth._key());if(!t){try{const i=await N5(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}Jh.set(this.auth._key(),t)}return this.bypassAuthState||Jh.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function N5(n,t){const e=M5(t),i=P5(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}function D5(n,t){Jh.set(n._key(),t)}function P5(n){return gi(n._redirectPersistence)}function M5(n){return Zh(O5,n.config.apiKey,n.name)}async function V5(n,t,e=!1){if(On(n.app))return Promise.reject(yi(n));const i=Os(n),s=S5(i,t),c=await new k5(i,s,e).execute();return c&&!e&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,t)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L5=10*60*1e3;class U5{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!z5(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!DA(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(Pr(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=L5&&this.cachedEventUids.clear(),this.cachedEventUids.has(c1(t))}saveEventToCache(t){this.cachedEventUids.add(c1(t)),this.lastProcessedEventTime=Date.now()}}function c1(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function DA({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function z5(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DA(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j5(n,t={}){return Ia(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F5=/^https?/;async function q5(n){if(n.config.emulator)return;const{authorizedDomains:t}=await j5(n);for(const e of t)try{if(H5(e))return}catch{}lr(n,"unauthorized-domain")}function H5(n){const t=ig(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&c.hostname===i}if(!F5.test(e))return!1;if(B5.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G5=new tc(3e4,6e4);function h1(){const n=Mr().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function $5(n){return new Promise((t,e)=>{var i,s,l;function c(){h1(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{h1(),e(Pr(n,"network-request-failed"))},timeout:G5.get()})}if(!((s=(i=Mr().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((l=Mr().gapi)===null||l===void 0)&&l.load)c();else{const d=UO("iframefcb");return Mr()[d]=()=>{gapi.load?c():e(Pr(n,"network-request-failed"))},yA(`${LO()}?onload=${d}`).catch(p=>e(p))}}).catch(t=>{throw tf=null,t})}let tf=null;function Y5(n){return tf=tf||$5(n),tf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K5=new tc(5e3,15e3),Q5="__/auth/iframe",X5="emulator/auth/iframe",W5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J5(n){const t=n.config;wt(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?ay(t,X5):`https://${n.config.authDomain}/${Q5}`,i={apiKey:t.apiKey,appName:n.name,v:Cs},s=Z5.get(n.config.apiHost);s&&(i.eid=s);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${e}?${Ju(i).slice(1)}`}async function tk(n){const t=await Y5(n),e=Mr().gapi;return wt(e,n,"internal-error"),t.open({where:document.body,url:J5(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W5,dontclear:!0},i=>new Promise(async(s,l)=>{await i.restyle({setHideOnLeave:!1});const c=Pr(n,"network-request-failed"),d=Mr().setTimeout(()=>{l(c)},K5.get());function p(){Mr().clearTimeout(d),s(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nk=500,rk=600,ik="_blank",ak="http://localhost";class f1{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sk(n,t,e,i=nk,s=rk){const l=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},ek),{width:i.toString(),height:s.toString(),top:l,left:c}),g=sn().toLowerCase();e&&(d=cA(g)?ik:e),lA(g)&&(t=t||ak,p.scrollbars="yes");const v=Object.entries(p).reduce((E,[k,x])=>`${E}${k}=${x},`,"");if(IO(g)&&d!=="_self")return ok(t||"",d),new f1(null);const A=window.open(t||"",d,v);wt(A,n,"popup-blocked");try{A.focus()}catch{}return new f1(A)}function ok(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="__/auth/handler",uk="emulator/auth/handler",ck=encodeURIComponent("fac");async function d1(n,t,e,i,s,l){wt(n.config.authDomain,n,"auth-domain-config-required"),wt(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:Cs,eventId:s};if(t instanceof _A){t.setDefaultLanguage(n.languageCode),c.providerId=t.providerId||"",Rx(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,A]of Object.entries({}))c[v]=A}if(t instanceof nc){const v=t.getScopes().filter(A=>A!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),g=p?`#${ck}=${encodeURIComponent(p)}`:"";return`${hk(n)}?${Ju(d).slice(1)}${g}`}function hk({config:n}){return n.emulator?ay(n,uk):`https://${n.authDomain}/${lk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="webStorageSupport";class fk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xA,this._completeRedirectFn=V5,this._overrideRedirectResult=D5}async _openPopup(t,e,i,s){var l;Ei((l=this.eventManagers[t._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await d1(t,e,i,ig(),s);return sk(t,c,cy())}async _openRedirect(t,e,i,s){await this._originValidation(t);const l=await d1(t,e,i,ig(),s);return m5(l),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:l}=this.eventManagers[e];return s?Promise.resolve(s):(Ei(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await tk(t),i=new U5(t);return e.register("authEvent",s=>(wt(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Pm,{type:Pm},s=>{var l;const c=(l=s==null?void 0:s[0])===null||l===void 0?void 0:l[Pm];c!==void 0&&e(!!c),lr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=q5(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return mA()||uA()||oy()}}const dk=fk;var p1="@firebase/auth",m1="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){wt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gk(n){or(new Yn("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;wt(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gA(n)},g=new PO(i,s,l,p);return HO(g,e),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),or(new Yn("auth-internal",t=>{const e=Os(t.getProvider("auth").getImmediate());return(i=>new pk(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(p1,m1,mk(n)),yn(p1,m1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=5*60,vk=ET("authIdTokenMaxAge")||yk;let g1=null;const bk=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>vk)return;const s=e==null?void 0:e.token;g1!==s&&(g1=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _k(n=qf()){const t=Ra(n,"auth");if(t.isInitialized())return t.getImmediate();const e=qO(n,{popupRedirectResolver:dk,persistence:[w5,f5,xA]}),i=ET("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=bk(l.toString());l5(e,c,()=>c(e.currentUser)),o5(e,d=>c(d))}}const s=vT("auth");return s&&GO(e,`http://${s}`),e}function Ek(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}MO({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const l=Pr("internal-error");l.customData=s,e(l)},i.type="text/javascript",i.charset="UTF-8",Ek().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gk("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="firebasestorage.googleapis.com",Tk="storageBucket",Ak=2*60*1e3,wk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Kn{constructor(t,e,i=0){super(Mm(t),`Firebase Storage: ${e} (${Mm(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Br.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Mm(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zr||(zr={}));function Mm(n){return"storage/"+n}function Sk(){const n="An unknown error occurred, please check the error payload for server response.";return new Br(zr.UNKNOWN,n)}function Rk(){return new Br(zr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xk(){return new Br(zr.CANCELED,"User canceled the upload/download.")}function Ik(n){return new Br(zr.INVALID_URL,"Invalid URL '"+n+"'.")}function Ck(n){return new Br(zr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function y1(n){return new Br(zr.INVALID_ARGUMENT,n)}function MA(){return new Br(zr.APP_DELETED,"The Firebase app was deleted.")}function Ok(n){return new Br(zr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let i;try{i=ir.makeFromUrl(t,e)}catch{return new ir(t,"")}if(i.path==="")return i;throw Ck(t)}static makeFromUrl(t,e){let i=null;const s="([A-Za-z0-9.\\-_]+)";function l(at){at.path.charAt(at.path.length-1)==="/"&&(at.path_=at.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+s+c,"i"),p={bucket:1,path:3};function g(at){at.path_=decodeURIComponent(at.path)}const v="v[A-Za-z0-9_]+",A=e.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",k=new RegExp(`^https?://${A}/${v}/b/${s}/o${E}`,"i"),x={bucket:1,path:3},C=e===PA?"(?:storage.googleapis.com|storage.cloud.google.com)":e,P="([^?#]*)",Y=new RegExp(`^https?://${C}/${s}/${P}`,"i"),W=[{regex:d,indices:p,postModify:l},{regex:k,indices:x,postModify:g},{regex:Y,indices:{bucket:1,path:2},postModify:g}];for(let at=0;at<W.length;at++){const st=W[at],mt=st.regex.exec(t);if(mt){const D=mt[st.indices.bucket];let S=mt[st.indices.path];S||(S=""),i=new ir(D,S),st.postModify(i);break}}if(i==null)throw Ik(t);return i}}class kk{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(n,t,e){let i=1,s=null,l=null,c=!1,d=0;function p(){return d===2}let g=!1;function v(...P){g||(g=!0,t.apply(null,P))}function A(P){s=setTimeout(()=>{s=null,n(k,p())},P)}function E(){l&&clearTimeout(l)}function k(P,...Y){if(g){E();return}if(P){E(),v.call(null,P,...Y);return}if(p()||c){E(),v.call(null,P,...Y);return}i<64&&(i*=2);let W;d===1?(d=2,W=0):W=(i+Math.random())*1e3,A(W)}let x=!1;function C(P){x||(x=!0,E(),!g&&(s!==null?(P||(d=2),clearTimeout(s),A(0)):P||(d=1)))}return A(0),l=setTimeout(()=>{c=!0,C(!0)},e),C}function Dk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n){return n!==void 0}function v1(n,t,e,i){if(i<t)throw y1(`Invalid value for '${n}'. Expected ${t} or greater.`);if(i>e)throw y1(`Invalid value for '${n}'. Expected ${e} or less.`)}function Mk(n){const t=encodeURIComponent;let e="?";for(const i in n)if(n.hasOwnProperty(i)){const s=t(i)+"="+t(n[i]);e=e+s+"&"}return e=e.slice(0,-1),e}var Tf;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Tf||(Tf={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,l=t.indexOf(n)!==-1;return e||s||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(t,e,i,s,l,c,d,p,g,v,A,E=!0,k=!1){this.url_=t,this.method_=e,this.headers_=i,this.body_=s,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=v,this.connectionFactory_=A,this.retry=E,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,C)=>{this.resolve_=x,this.reject_=C,this.start_()})}start_(){const t=(i,s)=>{if(s){i(!1,new zh(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Tf.NO_ERROR,p=l.getStatus();if(!d||Vk(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Tf.ABORT;i(!1,new zh(!1,null,v));return}const g=this.successCodes_.indexOf(p)!==-1;i(!0,new zh(g,l))})},e=(i,s)=>{const l=this.resolve_,c=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());Pk(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=Sk();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(s.canceled){const p=this.appDelete_?MA():xk();c(p)}else{const p=Rk();c(p)}};this.canceled_?e(!1,new zh(!1,null,!0)):this.backoffId_=Nk(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Dk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zh{constructor(t,e,i){this.wasSuccessCode=t,this.connection=e,this.canceled=!!i}}function Uk(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function zk(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function jk(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Bk(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Fk(n,t,e,i,s,l,c=!0,d=!1){const p=Mk(n.urlParams),g=n.url+p,v=Object.assign({},n.headers);return jk(v,t),Uk(v,e),zk(v,l),Bk(v,i),new Lk(g,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,c,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Hk(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t,e){this._service=t,e instanceof ir?this._location=e:this._location=ir.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Af(t,e)}get root(){const t=new ir(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hk(this._location.path)}get storage(){return this._service}get parent(){const t=qk(this._location.path);if(t===null)return null;const e=new ir(this._location.bucket,t);return new Af(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Ok(t)}}function b1(n,t){const e=t==null?void 0:t[Tk];return e==null?null:ir.makeFromBucketSpec(e,n)}function Gk(n,t,e,i={}){n.host=`${t}:${e}`;const s=xs(t);s&&(Qg(`https://${n.host}/b`),Xg("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:TT(l,n.app.options.projectId))}class $k{constructor(t,e,i,s,l,c=!1){this.app=t,this._authProvider=e,this._appCheckProvider=i,this._url=s,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=PA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ak,this._maxUploadRetryTime=wk,this._requests=new Set,s!=null?this._bucket=ir.makeFromBucketSpec(s,this._host):this._bucket=b1(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ir.makeFromBucketSpec(this._url,t):this._bucket=b1(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){v1("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){v1("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Af(this,t)}_makeRequest(t,e,i,s,l=!0){if(this._deleted)return new kk(MA());{const c=Fk(t,this._appId,i,s,e,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(t,e){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,i,s).getPromise()}}const _1="@firebase/storage",E1="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="storage";function Yk(n=qf(),t){n=We(n);const i=Ra(n,VA).getImmediate({identifier:t}),s=bT("storage");return s&&Kk(i,...s),i}function Kk(n,t,e,i={}){Gk(n,t,e,i)}function Qk(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new $k(e,i,s,t,Cs)}function Xk(){or(new Yn(VA,Qk,"PUBLIC").setMultipleInstances(!0)),yn(_1,E1,""),yn(_1,E1,"esm2017")}Xk();var T1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var da,LA;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(D,S){function R(){}R.prototype=S.prototype,D.D=S.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(M,L,U){for(var O=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)O[oe-2]=arguments[oe];return S.prototype[L].apply(M,O)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(D,S,R){R||(R=0);var M=Array(16);if(typeof S=="string")for(var L=0;16>L;++L)M[L]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(L=0;16>L;++L)M[L]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=D.g[0],R=D.g[1],L=D.g[2];var U=D.g[3],O=S+(U^R&(L^U))+M[0]+3614090360&4294967295;S=R+(O<<7&4294967295|O>>>25),O=U+(L^S&(R^L))+M[1]+3905402710&4294967295,U=S+(O<<12&4294967295|O>>>20),O=L+(R^U&(S^R))+M[2]+606105819&4294967295,L=U+(O<<17&4294967295|O>>>15),O=R+(S^L&(U^S))+M[3]+3250441966&4294967295,R=L+(O<<22&4294967295|O>>>10),O=S+(U^R&(L^U))+M[4]+4118548399&4294967295,S=R+(O<<7&4294967295|O>>>25),O=U+(L^S&(R^L))+M[5]+1200080426&4294967295,U=S+(O<<12&4294967295|O>>>20),O=L+(R^U&(S^R))+M[6]+2821735955&4294967295,L=U+(O<<17&4294967295|O>>>15),O=R+(S^L&(U^S))+M[7]+4249261313&4294967295,R=L+(O<<22&4294967295|O>>>10),O=S+(U^R&(L^U))+M[8]+1770035416&4294967295,S=R+(O<<7&4294967295|O>>>25),O=U+(L^S&(R^L))+M[9]+2336552879&4294967295,U=S+(O<<12&4294967295|O>>>20),O=L+(R^U&(S^R))+M[10]+4294925233&4294967295,L=U+(O<<17&4294967295|O>>>15),O=R+(S^L&(U^S))+M[11]+2304563134&4294967295,R=L+(O<<22&4294967295|O>>>10),O=S+(U^R&(L^U))+M[12]+1804603682&4294967295,S=R+(O<<7&4294967295|O>>>25),O=U+(L^S&(R^L))+M[13]+4254626195&4294967295,U=S+(O<<12&4294967295|O>>>20),O=L+(R^U&(S^R))+M[14]+2792965006&4294967295,L=U+(O<<17&4294967295|O>>>15),O=R+(S^L&(U^S))+M[15]+1236535329&4294967295,R=L+(O<<22&4294967295|O>>>10),O=S+(L^U&(R^L))+M[1]+4129170786&4294967295,S=R+(O<<5&4294967295|O>>>27),O=U+(R^L&(S^R))+M[6]+3225465664&4294967295,U=S+(O<<9&4294967295|O>>>23),O=L+(S^R&(U^S))+M[11]+643717713&4294967295,L=U+(O<<14&4294967295|O>>>18),O=R+(U^S&(L^U))+M[0]+3921069994&4294967295,R=L+(O<<20&4294967295|O>>>12),O=S+(L^U&(R^L))+M[5]+3593408605&4294967295,S=R+(O<<5&4294967295|O>>>27),O=U+(R^L&(S^R))+M[10]+38016083&4294967295,U=S+(O<<9&4294967295|O>>>23),O=L+(S^R&(U^S))+M[15]+3634488961&4294967295,L=U+(O<<14&4294967295|O>>>18),O=R+(U^S&(L^U))+M[4]+3889429448&4294967295,R=L+(O<<20&4294967295|O>>>12),O=S+(L^U&(R^L))+M[9]+568446438&4294967295,S=R+(O<<5&4294967295|O>>>27),O=U+(R^L&(S^R))+M[14]+3275163606&4294967295,U=S+(O<<9&4294967295|O>>>23),O=L+(S^R&(U^S))+M[3]+4107603335&4294967295,L=U+(O<<14&4294967295|O>>>18),O=R+(U^S&(L^U))+M[8]+1163531501&4294967295,R=L+(O<<20&4294967295|O>>>12),O=S+(L^U&(R^L))+M[13]+2850285829&4294967295,S=R+(O<<5&4294967295|O>>>27),O=U+(R^L&(S^R))+M[2]+4243563512&4294967295,U=S+(O<<9&4294967295|O>>>23),O=L+(S^R&(U^S))+M[7]+1735328473&4294967295,L=U+(O<<14&4294967295|O>>>18),O=R+(U^S&(L^U))+M[12]+2368359562&4294967295,R=L+(O<<20&4294967295|O>>>12),O=S+(R^L^U)+M[5]+4294588738&4294967295,S=R+(O<<4&4294967295|O>>>28),O=U+(S^R^L)+M[8]+2272392833&4294967295,U=S+(O<<11&4294967295|O>>>21),O=L+(U^S^R)+M[11]+1839030562&4294967295,L=U+(O<<16&4294967295|O>>>16),O=R+(L^U^S)+M[14]+4259657740&4294967295,R=L+(O<<23&4294967295|O>>>9),O=S+(R^L^U)+M[1]+2763975236&4294967295,S=R+(O<<4&4294967295|O>>>28),O=U+(S^R^L)+M[4]+1272893353&4294967295,U=S+(O<<11&4294967295|O>>>21),O=L+(U^S^R)+M[7]+4139469664&4294967295,L=U+(O<<16&4294967295|O>>>16),O=R+(L^U^S)+M[10]+3200236656&4294967295,R=L+(O<<23&4294967295|O>>>9),O=S+(R^L^U)+M[13]+681279174&4294967295,S=R+(O<<4&4294967295|O>>>28),O=U+(S^R^L)+M[0]+3936430074&4294967295,U=S+(O<<11&4294967295|O>>>21),O=L+(U^S^R)+M[3]+3572445317&4294967295,L=U+(O<<16&4294967295|O>>>16),O=R+(L^U^S)+M[6]+76029189&4294967295,R=L+(O<<23&4294967295|O>>>9),O=S+(R^L^U)+M[9]+3654602809&4294967295,S=R+(O<<4&4294967295|O>>>28),O=U+(S^R^L)+M[12]+3873151461&4294967295,U=S+(O<<11&4294967295|O>>>21),O=L+(U^S^R)+M[15]+530742520&4294967295,L=U+(O<<16&4294967295|O>>>16),O=R+(L^U^S)+M[2]+3299628645&4294967295,R=L+(O<<23&4294967295|O>>>9),O=S+(L^(R|~U))+M[0]+4096336452&4294967295,S=R+(O<<6&4294967295|O>>>26),O=U+(R^(S|~L))+M[7]+1126891415&4294967295,U=S+(O<<10&4294967295|O>>>22),O=L+(S^(U|~R))+M[14]+2878612391&4294967295,L=U+(O<<15&4294967295|O>>>17),O=R+(U^(L|~S))+M[5]+4237533241&4294967295,R=L+(O<<21&4294967295|O>>>11),O=S+(L^(R|~U))+M[12]+1700485571&4294967295,S=R+(O<<6&4294967295|O>>>26),O=U+(R^(S|~L))+M[3]+2399980690&4294967295,U=S+(O<<10&4294967295|O>>>22),O=L+(S^(U|~R))+M[10]+4293915773&4294967295,L=U+(O<<15&4294967295|O>>>17),O=R+(U^(L|~S))+M[1]+2240044497&4294967295,R=L+(O<<21&4294967295|O>>>11),O=S+(L^(R|~U))+M[8]+1873313359&4294967295,S=R+(O<<6&4294967295|O>>>26),O=U+(R^(S|~L))+M[15]+4264355552&4294967295,U=S+(O<<10&4294967295|O>>>22),O=L+(S^(U|~R))+M[6]+2734768916&4294967295,L=U+(O<<15&4294967295|O>>>17),O=R+(U^(L|~S))+M[13]+1309151649&4294967295,R=L+(O<<21&4294967295|O>>>11),O=S+(L^(R|~U))+M[4]+4149444226&4294967295,S=R+(O<<6&4294967295|O>>>26),O=U+(R^(S|~L))+M[11]+3174756917&4294967295,U=S+(O<<10&4294967295|O>>>22),O=L+(S^(U|~R))+M[2]+718787259&4294967295,L=U+(O<<15&4294967295|O>>>17),O=R+(U^(L|~S))+M[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(L+(O<<21&4294967295|O>>>11))&4294967295,D.g[2]=D.g[2]+L&4294967295,D.g[3]=D.g[3]+U&4294967295}i.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var R=S-this.blockSize,M=this.B,L=this.h,U=0;U<S;){if(L==0)for(;U<=R;)s(this,D,U),U+=this.blockSize;if(typeof D=="string"){for(;U<S;)if(M[L++]=D.charCodeAt(U++),L==this.blockSize){s(this,M),L=0;break}}else for(;U<S;)if(M[L++]=D[U++],L==this.blockSize){s(this,M),L=0;break}}this.h=L,this.o+=S},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var R=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=R&255,R/=256;for(this.u(D),D=Array(16),S=R=0;4>S;++S)for(var M=0;32>M;M+=8)D[R++]=this.g[S]>>>M&255;return D};function l(D,S){var R=d;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=S(D)}function c(D,S){this.h=S;for(var R=[],M=!0,L=D.length-1;0<=L;L--){var U=D[L]|0;M&&U==S||(R[L]=U,M=!1)}this.g=R}var d={};function p(D){return-128<=D&&128>D?l(D,function(S){return new c([S|0],0>S?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return A;if(0>D)return P(g(-D));for(var S=[],R=1,M=0;D>=R;M++)S[M]=D/R|0,R*=4294967296;return new c(S,0)}function v(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return P(v(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(S,8)),M=A,L=0;L<D.length;L+=8){var U=Math.min(8,D.length-L),O=parseInt(D.substring(L,L+U),S);8>U?(U=g(Math.pow(S,U)),M=M.j(U).add(g(O))):(M=M.j(R),M=M.add(g(O)))}return M}var A=p(0),E=p(1),k=p(16777216);n=c.prototype,n.m=function(){if(C(this))return-P(this).m();for(var D=0,S=1,R=0;R<this.g.length;R++){var M=this.i(R);D+=(0<=M?M:4294967296+M)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(x(this))return"0";if(C(this))return"-"+P(this).toString(D);for(var S=g(Math.pow(D,6)),R=this,M="";;){var L=at(R,S).g;R=Y(R,L.j(S));var U=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=L,x(R))return U+M;for(;6>U.length;)U="0"+U;M=U+M}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function x(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function C(D){return D.h==-1}n.l=function(D){return D=Y(this,D),C(D)?-1:x(D)?0:1};function P(D){for(var S=D.g.length,R=[],M=0;M<S;M++)R[M]=~D.g[M];return new c(R,~D.h).add(E)}n.abs=function(){return C(this)?P(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],M=0,L=0;L<=S;L++){var U=M+(this.i(L)&65535)+(D.i(L)&65535),O=(U>>>16)+(this.i(L)>>>16)+(D.i(L)>>>16);M=O>>>16,U&=65535,O&=65535,R[L]=O<<16|U}return new c(R,R[R.length-1]&-2147483648?-1:0)};function Y(D,S){return D.add(P(S))}n.j=function(D){if(x(this)||x(D))return A;if(C(this))return C(D)?P(this).j(P(D)):P(P(this).j(D));if(C(D))return P(this.j(P(D)));if(0>this.l(k)&&0>D.l(k))return g(this.m()*D.m());for(var S=this.g.length+D.g.length,R=[],M=0;M<2*S;M++)R[M]=0;for(M=0;M<this.g.length;M++)for(var L=0;L<D.g.length;L++){var U=this.i(M)>>>16,O=this.i(M)&65535,oe=D.i(L)>>>16,ne=D.i(L)&65535;R[2*M+2*L]+=O*ne,Q(R,2*M+2*L),R[2*M+2*L+1]+=U*ne,Q(R,2*M+2*L+1),R[2*M+2*L+1]+=O*oe,Q(R,2*M+2*L+1),R[2*M+2*L+2]+=U*oe,Q(R,2*M+2*L+2)}for(M=0;M<S;M++)R[M]=R[2*M+1]<<16|R[2*M];for(M=S;M<2*S;M++)R[M]=0;return new c(R,0)};function Q(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function W(D,S){this.g=D,this.h=S}function at(D,S){if(x(S))throw Error("division by zero");if(x(D))return new W(A,A);if(C(D))return S=at(P(D),S),new W(P(S.g),P(S.h));if(C(S))return S=at(D,P(S)),new W(P(S.g),S.h);if(30<D.g.length){if(C(D)||C(S))throw Error("slowDivide_ only works with positive integers.");for(var R=E,M=S;0>=M.l(D);)R=st(R),M=st(M);var L=mt(R,1),U=mt(M,1);for(M=mt(M,2),R=mt(R,2);!x(M);){var O=U.add(M);0>=O.l(D)&&(L=L.add(R),U=O),M=mt(M,1),R=mt(R,1)}return S=Y(D,L.j(S)),new W(L,S)}for(L=A;0<=D.l(S);){for(R=Math.max(1,Math.floor(D.m()/S.m())),M=Math.ceil(Math.log(R)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),U=g(R),O=U.j(S);C(O)||0<O.l(D);)R-=M,U=g(R),O=U.j(S);x(U)&&(U=E),L=L.add(U),D=Y(D,O)}return new W(L,D)}n.A=function(D){return at(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)&D.i(M);return new c(R,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)|D.i(M);return new c(R,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)^D.i(M);return new c(R,this.h^D.h)};function st(D){for(var S=D.g.length+1,R=[],M=0;M<S;M++)R[M]=D.i(M)<<1|D.i(M-1)>>>31;return new c(R,D.h)}function mt(D,S){var R=S>>5;S%=32;for(var M=D.g.length-R,L=[],U=0;U<M;U++)L[U]=0<S?D.i(U+R)>>>S|D.i(U+R+1)<<32-S:D.i(U+R);return new c(L,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,LA=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,da=c}).apply(typeof T1<"u"?T1:typeof self<"u"?self:typeof window<"u"?window:{});var jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var UA,Eu,zA,ef,lg,jA,BA,FA;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,b){return h==Array.prototype||h==Object.prototype||(h[y]=b.value),h};function e(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof jh=="object"&&jh];for(var y=0;y<h.length;++y){var b=h[y];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var i=e(this);function s(h,y){if(y)t:{var b=i;h=h.split(".");for(var w=0;w<h.length-1;w++){var j=h[w];if(!(j in b))break t;b=b[j]}h=h[h.length-1],w=b[h],y=y(w),y!=w&&y!=null&&t(b,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var b=0,w=!1,j={next:function(){if(!w&&b<h.length){var X=b++;return{value:y(X,h[X]),done:!1}}return w=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(h){return h||function(){return l(this,function(y,b){return b})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,b){return h.call.apply(h.bind,arguments)}function A(h,y,b){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,w),h.apply(y,j)}}return function(){return h.apply(y,arguments)}}function E(h,y,b){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:A,E.apply(null,arguments)}function k(h,y){var b=Array.prototype.slice.call(arguments,1);return function(){var w=b.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function x(h,y){function b(){}b.prototype=y.prototype,h.aa=y.prototype,h.prototype=new b,h.prototype.constructor=h,h.Qb=function(w,j,X){for(var ct=Array(arguments.length-2),jt=2;jt<arguments.length;jt++)ct[jt-2]=arguments[jt];return y.prototype[j].apply(w,ct)}}function C(h){const y=h.length;if(0<y){const b=Array(y);for(let w=0;w<y;w++)b[w]=h[w];return b}return[]}function P(h,y){for(let b=1;b<arguments.length;b++){const w=arguments[b];if(p(w)){const j=h.length||0,X=w.length||0;h.length=j+X;for(let ct=0;ct<X;ct++)h[j+ct]=w[ct]}else h.push(w)}}class Y{constructor(y,b){this.i=y,this.j=b,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Q(h){return/^[\s\xa0]*$/.test(h)}function W(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function at(h){return at[" "](h),h}at[" "]=function(){};var st=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function mt(h,y,b){for(const w in h)y.call(b,h[w],w,h)}function D(h,y){for(const b in h)y.call(void 0,h[b],b,h)}function S(h){const y={};for(const b in h)y[b]=h[b];return y}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,y){let b,w;for(let j=1;j<arguments.length;j++){w=arguments[j];for(b in w)h[b]=w[b];for(let X=0;X<R.length;X++)b=R[X],Object.prototype.hasOwnProperty.call(w,b)&&(h[b]=w[b])}}function L(h){var y=1;h=h.split(":");const b=[];for(;0<y&&h.length;)b.push(h.shift()),y--;return h.length&&b.push(h.join(":")),b}function U(h){d.setTimeout(()=>{throw h},0)}function O(){var h=Rt;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class oe{constructor(){this.h=this.g=null}add(y,b){const w=ne.get();w.set(y,b),this.h?this.h.next=w:this.g=w,this.h=w}}var ne=new Y(()=>new H,h=>h.reset());class H{constructor(){this.next=this.g=this.h=null}set(y,b){this.h=y,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,ut=!1,Rt=new oe,N=()=>{const h=d.Promise.resolve(void 0);ot=()=>{h.then(Z)}};var Z=()=>{for(var h;h=O();){try{h.h.call(h.g)}catch(b){U(b)}var y=ne;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}ut=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var bt=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const b=()=>{};d.addEventListener("test",b,y),d.removeEventListener("test",b,y)}catch{}return h}();function kt(h,y){if(lt.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var b=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(st){t:{try{at(y.nodeName);var j=!0;break t}catch{}j=!1}j||(y=null)}}else b=="mouseover"?y=h.fromElement:b=="mouseout"&&(y=h.toElement);this.relatedTarget=y,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:At[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&kt.aa.h.call(this)}}x(kt,lt);var At={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function dr(h,y,b,w,j){this.listener=h,this.proxy=null,this.src=y,this.type=b,this.capture=!!w,this.ha=j,this.key=++Ht,this.da=this.fa=!1}function Ii(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Fr(h){this.src=h,this.g={},this.h=0}Fr.prototype.add=function(h,y,b,w,j){var X=h.toString();h=this.g[X],h||(h=this.g[X]=[],this.h++);var ct=ka(h,y,w,j);return-1<ct?(y=h[ct],b||(y.fa=!1)):(y=new dr(y,this.src,X,!!w,j),y.fa=b,h.push(y)),y};function Oa(h,y){var b=y.type;if(b in h.g){var w=h.g[b],j=Array.prototype.indexOf.call(w,y,void 0),X;(X=0<=j)&&Array.prototype.splice.call(w,j,1),X&&(Ii(y),h.g[b].length==0&&(delete h.g[b],h.h--))}}function ka(h,y,b,w){for(var j=0;j<h.length;++j){var X=h[j];if(!X.da&&X.listener==y&&X.capture==!!b&&X.ha==w)return j}return-1}var Na="closure_lm_"+(1e6*Math.random()|0),ol={};function pc(h,y,b,w,j){if(Array.isArray(y)){for(var X=0;X<y.length;X++)pc(h,y[X],b,w,j);return null}return b=mc(b),h&&h[le]?h.K(y,b,g(w)?!!w.capture:!1,j):Dn(h,y,b,!1,w,j)}function Dn(h,y,b,w,j,X){if(!y)throw Error("Invalid event type");var ct=g(j)?!!j.capture:!!j,jt=Vs(h);if(jt||(h[Na]=jt=new Fr(h)),b=jt.add(y,b,w,ct,X),b.proxy)return b;if(w=bd(),b.proxy=w,w.src=h,w.listener=b,h.addEventListener)bt||(j=ct),j===void 0&&(j=!1),h.addEventListener(y.toString(),w,j);else if(h.attachEvent)h.attachEvent(Da(y.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return b}function bd(){function h(b){return y.call(h.src,h.listener,b)}const y=_d;return h}function ll(h,y,b,w,j){if(Array.isArray(y))for(var X=0;X<y.length;X++)ll(h,y[X],b,w,j);else w=g(w)?!!w.capture:!!w,b=mc(b),h&&h[le]?(h=h.i,y=String(y).toString(),y in h.g&&(X=h.g[y],b=ka(X,b,w,j),-1<b&&(Ii(X[b]),Array.prototype.splice.call(X,b,1),X.length==0&&(delete h.g[y],h.h--)))):h&&(h=Vs(h))&&(y=h.g[y.toString()],h=-1,y&&(h=ka(y,b,w,j)),(b=-1<h?y[h]:null)&&Ms(b))}function Ms(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[le])Oa(y.i,h);else{var b=h.type,w=h.proxy;y.removeEventListener?y.removeEventListener(b,w,h.capture):y.detachEvent?y.detachEvent(Da(b),w):y.addListener&&y.removeListener&&y.removeListener(w),(b=Vs(y))?(Oa(b,h),b.h==0&&(b.src=null,y[Na]=null)):Ii(h)}}}function Da(h){return h in ol?ol[h]:ol[h]="on"+h}function _d(h,y){if(h.da)h=!0;else{y=new kt(y,this);var b=h.listener,w=h.ha||h.src;h.fa&&Ms(h),h=b.call(w,y)}return h}function Vs(h){return h=h[Na],h instanceof Fr?h:null}var ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function mc(h){return typeof h=="function"?h:(h[ul]||(h[ul]=function(y){return h.handleEvent(y)}),h[ul])}function me(){ht.call(this),this.i=new Fr(this),this.M=this,this.F=null}x(me,ht),me.prototype[le]=!0,me.prototype.removeEventListener=function(h,y,b,w){ll(this,h,y,b,w)};function Qt(h,y){var b,w=h.F;if(w)for(b=[];w;w=w.F)b.push(w);if(h=h.M,w=y.type||y,typeof y=="string")y=new lt(y,h);else if(y instanceof lt)y.target=y.target||h;else{var j=y;y=new lt(w,h),M(y,j)}if(j=!0,b)for(var X=b.length-1;0<=X;X--){var ct=y.g=b[X];j=_n(ct,w,!0,y)&&j}if(ct=y.g=h,j=_n(ct,w,!0,y)&&j,j=_n(ct,w,!1,y)&&j,b)for(X=0;X<b.length;X++)ct=y.g=b[X],j=_n(ct,w,!1,y)&&j}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var b=h.g[y],w=0;w<b.length;w++)Ii(b[w]);delete h.g[y],h.h--}}this.F=null},me.prototype.K=function(h,y,b,w){return this.i.add(String(h),y,!1,b,w)},me.prototype.L=function(h,y,b,w){return this.i.add(String(h),y,!0,b,w)};function _n(h,y,b,w){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var j=!0,X=0;X<y.length;++X){var ct=y[X];if(ct&&!ct.da&&ct.capture==b){var jt=ct.listener,ke=ct.ha||ct.src;ct.fa&&Oa(h.i,ct),j=jt.call(ke,w)!==!1&&j}}return j&&!w.defaultPrevented}function Je(h,y,b){if(typeof h=="function")b&&(h=E(h,b));else if(h&&typeof h.handleEvent=="function")h=E(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function gc(h){h.g=Je(()=>{h.g=null,h.i&&(h.i=!1,gc(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class Ed extends ht{constructor(y,b){super(),this.m=y,this.l=b,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:gc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pa(h){ht.call(this),this.h=h,this.g={}}x(Pa,ht);var Ma=[];function Va(h){mt(h.g,function(y,b){this.g.hasOwnProperty(b)&&Ms(y)},h),h.g={}}Pa.prototype.N=function(){Pa.aa.N.call(this),Va(this)},Pa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qn=d.JSON.stringify,Ls=d.JSON.parse,La=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function cl(){}cl.prototype.h=null;function hl(h){return h.h||(h.h=h.i())}function fl(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hr(){lt.call(this,"d")}x(Hr,lt);function dl(){lt.call(this,"c")}x(dl,lt);var pr={},pl=null;function Ci(){return pl=pl||new me}pr.La="serverreachability";function Us(h){lt.call(this,pr.La,h)}x(Us,lt);function Oi(h){const y=Ci();Qt(y,new Us(y))}pr.STAT_EVENT="statevent";function yc(h,y){lt.call(this,pr.STAT_EVENT,h),this.stat=y}x(yc,lt);function ue(h){const y=Ci();Qt(y,new yc(y,h))}pr.Ma="timingevent";function Oe(h,y){lt.call(this,pr.Ma,h),this.size=y}x(Oe,lt);function Ae(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function Pn(){this.g=!0}Pn.prototype.xa=function(){this.g=!1};function ml(h,y,b,w,j,X){h.info(function(){if(h.g)if(X)for(var ct="",jt=X.split("&"),ke=0;ke<jt.length;ke++){var Bt=jt[ke].split("=");if(1<Bt.length){var Ue=Bt[0];Bt=Bt[1];var Ne=Ue.split("_");ct=2<=Ne.length&&Ne[1]=="type"?ct+(Ue+"="+Bt+"&"):ct+(Ue+"=redacted&")}}else ct=null;else ct=X;return"XMLHTTP REQ ("+w+") [attempt "+j+"]: "+y+`
`+b+`
`+ct})}function Td(h,y,b,w,j,X,ct){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+j+"]: "+y+`
`+b+`
`+X+" "+ct})}function ki(h,y,b,w){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+Ua(h,b)+(w?" "+w:"")})}function vc(h,y){h.info(function(){return"TIMEOUT: "+y})}Pn.prototype.info=function(){};function Ua(h,y){if(!h.g)return y;if(!y)return null;try{var b=JSON.parse(y);if(b){for(h=0;h<b.length;h++)if(Array.isArray(b[h])){var w=b[h];if(!(2>w.length)){var j=w[1];if(Array.isArray(j)&&!(1>j.length)){var X=j[0];if(X!="noop"&&X!="stop"&&X!="close")for(var ct=1;ct<j.length;ct++)j[ct]=""}}}}return Qn(b)}catch{return y}}var Ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mr;function gr(){}x(gr,cl),gr.prototype.g=function(){return new XMLHttpRequest},gr.prototype.i=function(){return{}},mr=new gr;function ln(h,y,b,w){this.j=h,this.i=y,this.l=b,this.R=w||1,this.U=new Pa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}var gl={},zs={};function Xn(h,y,b){h.L=1,h.v=qa(En(y)),h.m=b,h.P=!0,$r(h,null)}function $r(h,y){h.F=Date.now(),za(h),h.A=En(h.v);var b=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Tl(b.i,"t",w),h.C=0,b=h.j.J,h.h=new ve,h.g=Pc(h.j,b?y:null,!h.m),0<h.O&&(h.M=new Ed(E(h.Y,h,h.g),h.O)),y=h.U,b=h.g,w=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ma[0]=j.toString()),j=Ma);for(var X=0;X<j.length;X++){var ct=pc(b,j[X],w||y.handleEvent,!1,y.h||y);if(!ct)break;y.g[ct.key]=ct}y=h.H?S(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),Oi(),ml(h.i,h.u,h.A,h.l,h.R,h.m)}ln.prototype.ca=function(h){h=h.target;const y=this.M;y&&Un(h)==3?y.j():this.Y(h)},ln.prototype.Y=function(h){try{if(h==this.g)t:{const Ne=Un(this.g);var y=this.g.Ba();const ti=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Rc(this.g)))){this.J||Ne!=4||y==7||(y==8||0>=ti?Oi(3):Oi(2)),Di(this);var b=this.g.Z();this.X=b;e:if(bc(this)){var w=Rc(this.g);h="";var j=w.length,X=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){He(this),yr(this);var ct="";break e}this.h.i=new d.TextDecoder}for(y=0;y<j;y++)this.h.h=!0,h+=this.h.i.decode(w[y],{stream:!(X&&y==j-1)});w.length=0,this.h.g+=h,this.C=0,ct=this.h.g}else ct=this.g.oa();if(this.o=b==200,Td(this.i,this.u,this.A,this.l,this.R,Ne,b),this.o){if(this.T&&!this.K){e:{if(this.g){var jt,ke=this.g;if((jt=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(jt)){var Bt=jt;break e}}Bt=null}if(b=Bt)ki(this.i,this.l,b,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ja(this,b);else{this.o=!1,this.s=3,ue(12),He(this),yr(this);break t}}if(this.P){b=!0;let Ge;for(;!this.J&&this.C<ct.length;)if(Ge=_c(this,ct),Ge==zs){Ne==4&&(this.s=4,ue(14),b=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==gl){this.s=4,ue(15),ki(this.i,this.l,ct,"[Invalid Chunk]"),b=!1;break}else ki(this.i,this.l,Ge,null),ja(this,Ge);if(bc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||ct.length!=0||this.h.h||(this.s=1,ue(16),b=!1),this.o=this.o&&b,!b)ki(this.i,this.l,ct,"[Invalid Chunked Response]"),He(this),yr(this);else if(0<ct.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+ct.length),Wa(Ue),Ue.M=!0,ue(11))}}else ki(this.i,this.l,ct,null),ja(this,ct);Ne==4&&He(this),this.o&&!this.J&&(Ne==4?kc(this.j,this):(this.o=!1,za(this)))}else xd(this.g),b==400&&0<ct.indexOf("Unknown SID")?(this.s=3,ue(12)):(this.s=0,ue(13)),He(this),yr(this)}}}catch{}finally{}};function bc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function _c(h,y){var b=h.C,w=y.indexOf(`
`,b);return w==-1?zs:(b=Number(y.substring(b,w)),isNaN(b)?gl:(w+=1,w+b>y.length?zs:(y=y.slice(w,w+b),h.C=w+b,y)))}ln.prototype.cancel=function(){this.J=!0,He(this)};function za(h){h.S=Date.now()+h.I,Ec(h,h.I)}function Ec(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ae(E(h.ba,h),y)}function Di(h){h.B&&(d.clearTimeout(h.B),h.B=null)}ln.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(vc(this.i,this.A),this.L!=2&&(Oi(),ue(17)),He(this),this.s=2,yr(this)):Ec(this,this.S-h)};function yr(h){h.j.G==0||h.J||kc(h.j,h)}function He(h){Di(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,Va(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function ja(h,y){try{var b=h.j;if(b.G!=0&&(b.g==h||yl(b.h,h))){if(!h.K&&yl(b.h,h)&&b.G==3){try{var w=b.Da.g.parse(y)}catch{w=null}if(Array.isArray(w)&&w.length==3){var j=w;if(j[0]==0){t:if(!b.u){if(b.g)if(b.g.F+3e3<h.F)Ws(b),Qs(b);else break t;xl(b),ue(18)}}else b.za=j[1],0<b.za-b.T&&37500>j[2]&&b.F&&b.v==0&&!b.C&&(b.C=Ae(E(b.Za,b),6e3));if(1>=Bs(b.h)&&b.ca){try{b.ca()}catch{}b.ca=void 0}}else Jr(b,11)}else if((h.K||b.g==h)&&Ws(b),!Q(y))for(j=b.Da.g.parse(y),y=0;y<j.length;y++){let Bt=j[y];if(b.T=Bt[0],Bt=Bt[1],b.G==2)if(Bt[0]=="c"){b.K=Bt[1],b.ia=Bt[2];const Ue=Bt[3];Ue!=null&&(b.la=Ue,b.j.info("VER="+b.la));const Ne=Bt[4];Ne!=null&&(b.Aa=Ne,b.j.info("SVER="+b.Aa));const ti=Bt[5];ti!=null&&typeof ti=="number"&&0<ti&&(w=1.5*ti,b.L=w,b.j.info("backChannelRequestTimeoutMs_="+w)),w=b;const Ge=h.g;if(Ge){const wr=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wr){var X=w.h;X.g||wr.indexOf("spdy")==-1&&wr.indexOf("quic")==-1&&wr.indexOf("h2")==-1||(X.j=X.l,X.g=new Set,X.h&&(Fs(X,X.h),X.h=null))}if(w.D){const Cl=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Cl&&(w.ya=Cl,Zt(w.I,w.D,Cl))}}b.G=3,b.l&&b.l.ua(),b.ba&&(b.R=Date.now()-h.F,b.j.info("Handshake RTT: "+b.R+"ms")),w=b;var ct=h;if(w.qa=Dc(w,w.J?w.ia:null,w.W),ct.K){un(w.h,ct);var jt=ct,ke=w.L;ke&&(jt.I=ke),jt.B&&(Di(jt),za(jt)),w.g=ct}else Cc(w);0<b.i.length&&Xs(b)}else Bt[0]!="stop"&&Bt[0]!="close"||Jr(b,7);else b.G==3&&(Bt[0]=="stop"||Bt[0]=="close"?Bt[0]=="stop"?Jr(b,7):Sl(b):Bt[0]!="noop"&&b.l&&b.l.ta(Bt),b.v=0)}}Oi(4)}catch{}}var Tc=class{constructor(h,y){this.g=h,this.map=y}};function Yr(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function js(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Bs(h){return h.h?1:h.g?h.g.size:0}function yl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function Fs(h,y){h.g?h.g.add(y):h.h=y}function un(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Yr.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function vl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const b of h.g.values())y=y.concat(b.D);return y}return C(h.i)}function Ad(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],b=h.length,w=0;w<b;w++)y.push(h[w]);return y}y=[],b=0;for(w in h)y[b++]=h[w];return y}function qs(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var b=0;b<h;b++)y.push(b);return y}y=[],b=0;for(const w in h)y[b++]=w;return y}}}function bl(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var b=qs(h),w=Ad(h),j=w.length,X=0;X<j;X++)y.call(void 0,w[X],b&&b[X],h)}var Ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wd(h,y){if(h){h=h.split("&");for(var b=0;b<h.length;b++){var w=h[b].indexOf("="),j=null;if(0<=w){var X=h[b].substring(0,w);j=h[b].substring(w+1)}else X=h[b];y(X,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function we(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof we){this.h=h.h,Fa(this,h.j),this.o=h.o,this.g=h.g,Pi(this,h.s),this.l=h.l;var y=h.i,b=new Qr;b.i=y.i,y.g&&(b.g=new Map(y.g),b.h=y.h),Kr(this,b),this.m=h.m}else h&&(y=String(h).match(Ba))?(this.h=!1,Fa(this,y[1]||"",!0),this.o=Mn(y[2]||""),this.g=Mn(y[3]||"",!0),Pi(this,y[4]),this.l=Mn(y[5]||"",!0),Kr(this,y[6]||"",!0),this.m=Mn(y[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}we.prototype.toString=function(){var h=[],y=this.j;y&&h.push(Ha(y,_l,!0),":");var b=this.g;return(b||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Ha(y,_l,!0),"@"),h.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b=this.s,b!=null&&h.push(":",String(b))),(b=this.l)&&(this.g&&b.charAt(0)!="/"&&h.push("/"),h.push(Ha(b,b.charAt(0)=="/"?Sd:El,!0))),(b=this.i.toString())&&h.push("?",b),(b=this.m)&&h.push("#",Ha(b,Hs)),h.join("")};function En(h){return new we(h)}function Fa(h,y,b){h.j=b?Mn(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Pi(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Kr(h,y,b){y instanceof Qr?(h.i=y,wc(h.i,h.h)):(b||(y=Ha(y,Rd)),h.i=new Qr(y,h.h))}function Zt(h,y,b){h.i.set(y,b)}function qa(h){return Zt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Mn(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ha(h,y,b){return typeof h=="string"?(h=encodeURI(h).replace(y,Ac),b&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Ac(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var _l=/[#\/\?@]/g,El=/[#\?:]/g,Sd=/[#\?]/g,Rd=/[#\?@]/g,Hs=/#/g;function Qr(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function Vn(h){h.g||(h.g=new Map,h.h=0,h.i&&wd(h.i,function(y,b){h.add(decodeURIComponent(y.replace(/\+/g," ")),b)}))}n=Qr.prototype,n.add=function(h,y){Vn(this),this.i=null,h=vr(this,h);var b=this.g.get(h);return b||this.g.set(h,b=[]),b.push(y),this.h+=1,this};function Xr(h,y){Vn(h),y=vr(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Wr(h,y){return Vn(h),y=vr(h,y),h.g.has(y)}n.forEach=function(h,y){Vn(this),this.g.forEach(function(b,w){b.forEach(function(j){h.call(y,j,w,this)},this)},this)},n.na=function(){Vn(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),b=[];for(let w=0;w<y.length;w++){const j=h[w];for(let X=0;X<j.length;X++)b.push(y[w])}return b},n.V=function(h){Vn(this);let y=[];if(typeof h=="string")Wr(this,h)&&(y=y.concat(this.g.get(vr(this,h))));else{h=Array.from(this.g.values());for(let b=0;b<h.length;b++)y=y.concat(h[b])}return y},n.set=function(h,y){return Vn(this),this.i=null,h=vr(this,h),Wr(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},n.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function Tl(h,y,b){Xr(h,y),0<b.length&&(h.i=null,h.g.set(vr(h,y),C(b)),h.h+=b.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var b=0;b<y.length;b++){var w=y[b];const X=encodeURIComponent(String(w)),ct=this.V(w);for(w=0;w<ct.length;w++){var j=X;ct[w]!==""&&(j+="="+encodeURIComponent(String(ct[w]))),h.push(j)}}return this.i=h.join("&")};function vr(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function wc(h,y){y&&!h.j&&(Vn(h),h.i=null,h.g.forEach(function(b,w){var j=w.toLowerCase();w!=j&&(Xr(this,w),Tl(this,j,b))},h)),h.j=y}function Ga(h,y){const b=new Pn;if(d.Image){const w=new Image;w.onload=k(Ln,b,"TestLoadImage: loaded",!0,y,w),w.onerror=k(Ln,b,"TestLoadImage: error",!1,y,w),w.onabort=k(Ln,b,"TestLoadImage: abort",!1,y,w),w.ontimeout=k(Ln,b,"TestLoadImage: timeout",!1,y,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else y(!1)}function Wn(h,y){const b=new Pn,w=new AbortController,j=setTimeout(()=>{w.abort(),Ln(b,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:w.signal}).then(X=>{clearTimeout(j),X.ok?Ln(b,"TestPingServer: ok",!0,y):Ln(b,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(j),Ln(b,"TestPingServer: error",!1,y)})}function Ln(h,y,b,w,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),w(b)}catch{}}function $a(){this.g=new La}function br(h,y,b){const w=b||"";try{bl(h,function(j,X){let ct=j;g(j)&&(ct=Qn(j)),y.push(w+X+"="+encodeURIComponent(ct))})}catch(j){throw y.push(w+"type="+encodeURIComponent("_badmap")),j}}function Mi(h){this.l=h.Ub||null,this.j=h.eb||!1}x(Mi,cl),Mi.prototype.g=function(){return new Zr(this.l,this.j)},Mi.prototype.i=function(h){return function(){return h}}({});function Zr(h,y){me.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Zr,me),n=Zr.prototype,n.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,Er(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_r(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Al(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Al(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?_r(this):Er(this),this.readyState==3&&Al(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,_r(this))},n.Qa=function(h){this.g&&(this.response=h,_r(this))},n.ga=function(){this.g&&_r(this)};function _r(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Er(h)}n.setRequestHeader=function(h,y){this.u.append(h,y)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var b=y.next();!b.done;)b=b.value,h.push(b[0]+": "+b[1]),b=y.next();return h.join(`\r
`)};function Er(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function wl(h){let y="";return mt(h,function(b,w){y+=w,y+=":",y+=b,y+=`\r
`}),y}function Le(h,y,b){t:{for(w in b){var w=!1;break t}w=!0}w||(b=wl(b),typeof h=="string"?b!=null&&encodeURIComponent(String(b)):Zt(h,y,b))}function Yt(h){me.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Yt,me);var Gs=/^https?$/i,Ya=["POST","PUT"];n=Yt.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,y,b,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mr.g(),this.v=this.o?hl(this.o):hl(mr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(X){Sc(this,X);return}if(h=b||"",b=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var j in w)b.set(j,w[j]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const X of w.keys())b.set(X,w.get(X));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(b.keys()).find(X=>X.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ya,y,void 0))||w||j||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[X,ct]of b)this.g.setRequestHeader(X,ct);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ka(this),this.u=!0,this.g.send(h),this.u=!1}catch(X){Sc(this,X)}};function Sc(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,$s(h),Tr(h)}function $s(h){h.A||(h.A=!0,Qt(h,"complete"),Qt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Qt(this,"complete"),Qt(this,"abort"),Tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),Yt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ys(this):this.bb())},n.bb=function(){Ys(this)};function Ys(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Un(h)!=4||h.Z()!=2)){if(h.u&&Un(h)==4)Je(h.Ea,0,h);else if(Qt(h,"readystatechange"),Un(h)==4){h.h=!1;try{const ct=h.Z();t:switch(ct){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var b;if(!(b=y)){var w;if(w=ct===0){var j=String(h.D).match(Ba)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),w=!Gs.test(j?j.toLowerCase():"")}b=w}if(b)Qt(h,"complete"),Qt(h,"success");else{h.m=6;try{var X=2<Un(h)?h.g.statusText:""}catch{X=""}h.l=X+" ["+h.Z()+"]",$s(h)}}finally{Tr(h)}}}}function Tr(h,y){if(h.g){Ka(h);const b=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Qt(h,"ready");try{b.onreadystatechange=w}catch{}}}function Ka(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Un(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Ls(y)}};function Rc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function xd(h){const y={};h=(h.g&&2<=Un(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(Q(h[w]))continue;var b=L(h[w]);const j=b[0];if(b=b[1],typeof b!="string")continue;b=b.trim();const X=y[j]||[];y[j]=X,X.push(b)}D(y,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qa(h,y,b){return b&&b.internalChannelParams&&b.internalChannelParams[h]||y}function Ks(h){this.Aa=0,this.i=[],this.j=new Pn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qa("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qa("baseRetryDelayMs",5e3,h),this.cb=Qa("retryDelaySeedMs",1e4,h),this.Wa=Qa("forwardChannelMaxRetries",2,h),this.wa=Qa("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Yr(h&&h.concurrentRequestLimit),this.Da=new $a,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ks.prototype,n.la=8,n.G=1,n.connect=function(h,y,b,w){ue(0),this.W=h,this.H=y||{},b&&w!==void 0&&(this.H.OSID=b,this.H.OAID=w),this.F=this.X,this.I=Dc(this,null,this.W),Xs(this)};function Sl(h){if(xc(h),h.G==3){var y=h.U++,b=En(h.I);if(Zt(b,"SID",h.K),Zt(b,"RID",y),Zt(b,"TYPE","terminate"),Xa(h,b),y=new ln(h,h.j,y),y.L=2,y.v=qa(En(b)),b=!1,d.navigator&&d.navigator.sendBeacon)try{b=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!b&&d.Image&&(new Image().src=y.v,b=!0),b||(y.g=Pc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),za(y)}Nc(h)}function Qs(h){h.g&&(Wa(h),h.g.cancel(),h.g=null)}function xc(h){Qs(h),h.u&&(d.clearTimeout(h.u),h.u=null),Ws(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Xs(h){if(!js(h.h)&&!h.s){h.s=!0;var y=h.Ga;ot||N(),ut||(ot(),ut=!0),Rt.add(y,h),h.B=0}}function Id(h,y){return Bs(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ae(E(h.Ga,h,y),Il(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new ln(this,this.j,h);let X=this.o;if(this.S&&(X?(X=S(X),M(X,this.S)):X=this.S),this.m!==null||this.O||(j.H=X,X=null),this.P)t:{for(var y=0,b=0;b<this.i.length;b++){e:{var w=this.i[b];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(y+=w,4096<y){y=b;break t}if(y===4096||b===this.i.length-1){y=b+1;break t}}y=1e3}else y=1e3;y=Ic(this,j,y),b=En(this.I),Zt(b,"RID",h),Zt(b,"CVER",22),this.D&&Zt(b,"X-HTTP-Session-Id",this.D),Xa(this,b),X&&(this.O?y="headers="+encodeURIComponent(String(wl(X)))+"&"+y:this.m&&Le(b,this.m,X)),Fs(this.h,j),this.Ua&&Zt(b,"TYPE","init"),this.P?(Zt(b,"$req",y),Zt(b,"SID","null"),j.T=!0,Xn(j,b,null)):Xn(j,b,y),this.G=2}}else this.G==3&&(h?Rl(this,h):this.i.length==0||js(this.h)||Rl(this))};function Rl(h,y){var b;y?b=y.l:b=h.U++;const w=En(h.I);Zt(w,"SID",h.K),Zt(w,"RID",b),Zt(w,"AID",h.T),Xa(h,w),h.m&&h.o&&Le(w,h.m,h.o),b=new ln(h,h.j,b,h.B+1),h.m===null&&(b.H=h.o),y&&(h.i=y.D.concat(h.i)),y=Ic(h,b,1e3),b.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Fs(h.h,b),Xn(b,w,y)}function Xa(h,y){h.H&&mt(h.H,function(b,w){Zt(y,w,b)}),h.l&&bl({},function(b,w){Zt(y,w,b)})}function Ic(h,y,b){b=Math.min(h.i.length,b);var w=h.l?E(h.l.Na,h.l,h):null;t:{var j=h.i;let X=-1;for(;;){const ct=["count="+b];X==-1?0<b?(X=j[0].g,ct.push("ofs="+X)):X=0:ct.push("ofs="+X);let jt=!0;for(let ke=0;ke<b;ke++){let Bt=j[ke].g;const Ue=j[ke].map;if(Bt-=X,0>Bt)X=Math.max(0,j[ke].g-100),jt=!1;else try{br(Ue,ct,"req"+Bt+"_")}catch{w&&w(Ue)}}if(jt){w=ct.join("&");break t}}}return h=h.i.splice(0,b),y.D=h,w}function Cc(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;ot||N(),ut||(ot(),ut=!0),Rt.add(y,h),h.v=0}}function xl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ae(E(h.Fa,h),Il(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Oc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ae(E(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ue(10),Qs(this),Oc(this))};function Wa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Oc(h){h.g=new ln(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=En(h.qa);Zt(y,"RID","rpc"),Zt(y,"SID",h.K),Zt(y,"AID",h.T),Zt(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&Zt(y,"TO",h.ja),Zt(y,"TYPE","xmlhttp"),Xa(h,y),h.m&&h.o&&Le(y,h.m,h.o),h.L&&(h.g.I=h.L);var b=h.g;h=h.ia,b.L=1,b.v=qa(En(y)),b.m=null,b.P=!0,$r(b,h)}n.Za=function(){this.C!=null&&(this.C=null,Qs(this),xl(this),ue(19))};function Ws(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function kc(h,y){var b=null;if(h.g==y){Ws(h),Wa(h),h.g=null;var w=2}else if(yl(h.h,y))b=y.D,un(h.h,y),w=1;else return;if(h.G!=0){if(y.o)if(w==1){b=y.m?y.m.length:0,y=Date.now()-y.F;var j=h.B;w=Ci(),Qt(w,new Oe(w,b)),Xs(h)}else Cc(h);else if(j=y.s,j==3||j==0&&0<y.X||!(w==1&&Id(h,y)||w==2&&xl(h)))switch(b&&0<b.length&&(y=h.h,y.i=y.i.concat(b)),j){case 1:Jr(h,5);break;case 4:Jr(h,10);break;case 3:Jr(h,6);break;default:Jr(h,2)}}}function Il(h,y){let b=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(b*=2),b*y}function Jr(h,y){if(h.j.info("Error code "+y),y==2){var b=E(h.fb,h),w=h.Xa;const j=!w;w=new we(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Fa(w,"https"),qa(w),j?Ga(w.toString(),b):Wn(w.toString(),b)}else ue(2);h.G=0,h.l&&h.l.sa(y),Nc(h),xc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ue(2)):(this.j.info("Failed to ping google.com"),ue(1))};function Nc(h){if(h.G=0,h.ka=[],h.l){const y=vl(h.h);(y.length!=0||h.i.length!=0)&&(P(h.ka,y),P(h.ka,h.i),h.h.i.length=0,C(h.i),h.i.length=0),h.l.ra()}}function Dc(h,y,b){var w=b instanceof we?En(b):new we(b);if(w.g!="")y&&(w.g=y+"."+w.g),Pi(w,w.s);else{var j=d.location;w=j.protocol,y=y?y+"."+j.hostname:j.hostname,j=+j.port;var X=new we(null);w&&Fa(X,w),y&&(X.g=y),j&&Pi(X,j),b&&(X.l=b),w=X}return b=h.D,y=h.ya,b&&y&&Zt(w,b,y),Zt(w,"VER",h.la),Xa(h,w),w}function Pc(h,y,b){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new Yt(new Mi({eb:b})):new Yt(h.pa),y.Ha(h.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mc(){}n=Mc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zs(){}Zs.prototype.g=function(h,y){return new cn(h,y)};function cn(h,y){me.call(this),this.g=new Ks(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!Q(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!Q(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Ar(this)}x(cn,me),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Sl(this.g)},cn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var b={};b.__data__=h,h=b}else this.u&&(b={},b.__data__=Qn(h),h=b);y.i.push(new Tc(y.Ya++,h)),y.G==3&&Xs(y)},cn.prototype.N=function(){this.g.l=null,delete this.j,Sl(this.g),delete this.g,cn.aa.N.call(this)};function Vc(h){Hr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){t:{for(const b in y){h=b;break t}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}x(Vc,Hr);function Lc(){dl.call(this),this.status=1}x(Lc,dl);function Ar(h){this.g=h}x(Ar,Mc),Ar.prototype.ua=function(){Qt(this.g,"a")},Ar.prototype.ta=function(h){Qt(this.g,new Vc(h))},Ar.prototype.sa=function(h){Qt(this.g,new Lc)},Ar.prototype.ra=function(){Qt(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,FA=function(){return new Zs},BA=function(){return Ci()},jA=pr,lg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ni.NO_ERROR=0,Ni.TIMEOUT=8,Ni.HTTP_ERROR=6,ef=Ni,Gr.COMPLETE="complete",zA=Gr,fl.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",me.prototype.listen=me.prototype.K,Eu=fl,Yt.prototype.listenOnce=Yt.prototype.L,Yt.prototype.getLastError=Yt.prototype.Ka,Yt.prototype.getLastErrorCode=Yt.prototype.Ba,Yt.prototype.getStatus=Yt.prototype.Z,Yt.prototype.getResponseJson=Yt.prototype.Oa,Yt.prototype.getResponseText=Yt.prototype.oa,Yt.prototype.send=Yt.prototype.ea,Yt.prototype.setWithCredentials=Yt.prototype.Ha,UA=Yt}).apply(typeof jh<"u"?jh:typeof self<"u"?self:typeof window<"u"?window:{});const A1="@firebase/firestore",w1="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Ff("@firebase/firestore");function Co(){return Es.logLevel}function ft(n,...t){if(Es.logLevel<=Ut.DEBUG){const e=t.map(fy);Es.debug(`Firestore (${Wo}): ${n}`,...e)}}function Ti(n,...t){if(Es.logLevel<=Ut.ERROR){const e=t.map(fy);Es.error(`Firestore (${Wo}): ${n}`,...e)}}function Fo(n,...t){if(Es.logLevel<=Ut.WARN){const e=t.map(fy);Es.warn(`Firestore (${Wo}): ${n}`,...e)}}function fy(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,qA(n,i,e)}function qA(n,t,e){let i=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw Ti(i),new Error(i)}function Kt(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||qA(t,s,i)}function Ct(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dt extends Kn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(rn.UNAUTHENTICATED))}shutdown(){}}class Zk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Jk{constructor(t){this.t=t,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Kt(this.o===void 0,42304);let i=this.i;const s=p=>this.i!==i?(i=this.i,e(p)):Promise.resolve();let l=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vi,t.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const p=l;t.enqueueRetryable(async()=>{await p.promise,await s(this.currentUser)})},d=p=>{ft("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ft("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vi)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(ft("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Kt(typeof i.accessToken=="string",31837,{l:i}),new HA(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Kt(t===null||typeof t=="string",2055,{h:t}),new rn(t)}}class tN{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eN{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new tN(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class S1{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nN{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,On(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Kt(this.o===void 0,3512);const i=l=>{l.error!=null&&ft("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ft("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(l.token):Promise.resolve()};this.o=l=>{t.enqueueRetryable(()=>i(l))};const s=l=>{ft("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>s(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?s(l):ft("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new S1(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Kt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new S1(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=rN(40);for(let l=0;l<s.length;++l)i.length<20&&s[l]<e&&(i+=t.charAt(s[l]%62))}return i}}function Dt(n,t){return n<t?-1:n>t?1:0}function ug(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return Dt(i,s);{const l=GA(),c=iN(l.encode(R1(n,e)),l.encode(R1(t,e)));return c!==0?c:Dt(i,s)}}e+=i>65535?2:1}return Dt(n.length,t.length)}function R1(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function iN(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return Dt(n[e],t[e]);return Dt(n.length,t.length)}function qo(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=-62135596800,I1=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(t){return Te.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*I1);return new Te(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new dt(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new dt(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<x1)throw new dt(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new dt(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/I1}_compareTo(t){return this.seconds===t.seconds?Dt(this.nanoseconds,t.nanoseconds):Dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-x1;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{static fromTimestamp(t){return new It(t)}static min(){return new It(new Te(0,0))}static max(){return new It(new Te(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="__name__";class Or{constructor(t,e,i){e===void 0?e=0:e>t.length&&St(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&St(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Or.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Or?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const l=Or.compareSegments(t.get(s),e.get(s));if(l!==0)return l}return Dt(t.length,e.length)}static compareSegments(t,e){const i=Or.isNumericId(t),s=Or.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?Or.extractNumericId(t).compare(Or.extractNumericId(e)):ug(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return da.fromString(t.substring(4,t.length-2))}}class ae extends Or{construct(t,e,i){return new ae(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new dt(rt.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new ae(e)}static emptyPath(){return new ae([])}}const aN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Or{construct(t,e,i){return new Xe(t,e,i)}static isValidIdentifier(t){return aN.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===C1}static keyField(){return new Xe([C1])}static fromServerFormat(t){const e=[];let i="",s=0;const l=()=>{if(i.length===0)throw new dt(rt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let c=!1;for(;s<t.length;){const d=t[s];if(d==="\\"){if(s+1===t.length)throw new dt(rt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[s+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new dt(rt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=p,s+=2}else d==="`"?(c=!c,s++):d!=="."||c?(i+=d,s++):(l(),s++)}if(l(),c)throw new dt(rt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Xe(e)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.path=t}static fromPath(t){return new _t(ae.fromString(t))}static fromName(t){return new _t(ae.fromString(t).popFirst(5))}static empty(){return new _t(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ae.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ae.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _t(new ae(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=-1;function sN(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=It.fromTimestamp(i===1e9?new Te(e+1,0):new Te(e,i));return new ga(s,_t.empty(),t)}function oN(n){return new ga(n.readTime,n.key,ju)}class ga{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new ga(It.min(),_t.empty(),ju)}static max(){return new ga(It.max(),_t.empty(),ju)}}function lN(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=_t.comparator(n.documentKey,t.documentKey),e!==0?e:Dt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n){if(n.code!==rt.FAILED_PRECONDITION||n.message!==uN)throw n;ft("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&St(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new nt((i,s)=>{this.nextCallback=l=>{this.wrapSuccess(t,l).next(i,s)},this.catchCallback=l=>{this.wrapFailure(e,l).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof nt?e:nt.resolve(e)}catch(e){return nt.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):nt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):nt.reject(e)}static resolve(t){return new nt((e,i)=>{e(t)})}static reject(t){return new nt((e,i)=>{i(t)})}static waitFor(t){return new nt((e,i)=>{let s=0,l=0,c=!1;t.forEach(d=>{++s,d.next(()=>{++l,c&&l===s&&e()},p=>i(p))}),c=!0,l===s&&e()})}static or(t){let e=nt.resolve(!1);for(const i of t)e=e.next(s=>s?nt.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,l)=>{i.push(e.call(this,s,l))}),this.waitFor(i)}static mapArray(t,e){return new nt((i,s)=>{const l=t.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;e(t[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>s(v))}})}static doWhile(t,e){return new nt((i,s)=>{const l=()=>{t()===!0?e().next(()=>{l()},s):i()};l()})}}function hN(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Jo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>e.writeSequenceNumber(i))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Qf.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=-1;function Xf(n){return n==null}function wf(n){return n===0&&1/n==-1/0}function fN(n){return typeof n=="number"&&Number.isInteger(n)&&!wf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="";function dN(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=O1(t)),t=pN(n.get(e),t);return O1(t)}function pN(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const l=n.charAt(s);switch(l){case"\0":e+="";break;case YA:e+="";break;default:e+=l}}return e}function O1(n){return n+YA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ks(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function KA(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.comparator=t,this.root=e||Qe.EMPTY}insert(t,e){return new pe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(t){return new pe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bh(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bh(this.root,t,this.comparator,!0)}}class Bh{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let l=1;for(;!t.isEmpty();)if(l=e?i(t.key,e):1,e&&s&&(l*=-1),l<0)t=this.isReverse?t.left:t.right;else{if(l===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qe{constructor(t,e,i,s,l){this.key=t,this.value=e,this.color=i??Qe.RED,this.left=s??Qe.EMPTY,this.right=l??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,l){return new Qe(t??this.key,e??this.value,i??this.color,s??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const l=i(t,s.key);return s=l<0?s.copy(null,null,null,s.left.insert(t,e,i),null):l===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw St(43730,{key:this.key,value:this.value});if(this.right.isRed())throw St(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw St(27949);return t+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw St(57766)}get value(){throw St(16141)}get color(){throw St(16727)}get left(){throw St(29726)}get right(){throw St(36894)}copy(t,e,i,s,l){return this}insert(t,e,i){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.comparator=t,this.data=new pe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new N1(this.data.getIterator())}getIteratorFrom(t){return new N1(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,l=i.getNext().key;if(this.comparator(s,l)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Me(this.comparator);return e.data=t,e}}class N1{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.fields=t,t.sort(Xe.comparator)}static empty(){return new ar([])}unionWith(t){let e=new Me(Xe.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new ar(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return qo(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new QA("Invalid base64 string: "+l):l}}(t);return new Ze(e)}static fromUint8Array(t){const e=function(s){let l="";for(let c=0;c<s.length;++c)l+=String.fromCharCode(s[c]);return l}(t);return new Ze(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const mN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ya(n){if(Kt(!!n,39018),typeof n=="string"){let t=0;const e=mN.exec(n);if(Kt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function va(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="server_timestamp",WA="__type__",ZA="__previous_value__",JA="__local_write_time__";function py(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[WA])===null||e===void 0?void 0:e.stringValue)===XA}function Wf(n){const t=n.mapValue.fields[ZA];return py(t)?Wf(t):t}function Bu(n){const t=ya(n.mapValue.fields[JA].timestampValue);return new Te(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(t,e,i,s,l,c,d,p,g,v){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const Sf="(default)";class Fu{constructor(t,e){this.projectId=t,this.database=e||Sf}static empty(){return new Fu("","")}get isDefaultDatabase(){return this.database===Sf}isEqual(t){return t instanceof Fu&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="__type__",yN="__max__",Fh={mapValue:{}},ew="__vector__",Rf="value";function ba(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?py(n)?4:bN(n)?9007199254740991:vN(n)?10:11:St(28295,{value:n})}function jr(n,t){if(n===t)return!0;const e=ba(n);if(e!==ba(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Bu(n).isEqual(Bu(t));case 3:return function(s,l){if(typeof s.timestampValue=="string"&&typeof l.timestampValue=="string"&&s.timestampValue.length===l.timestampValue.length)return s.timestampValue===l.timestampValue;const c=ya(s.timestampValue),d=ya(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,l){return va(s.bytesValue).isEqual(va(l.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,l){return Ee(s.geoPointValue.latitude)===Ee(l.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(l.geoPointValue.longitude)}(n,t);case 2:return function(s,l){if("integerValue"in s&&"integerValue"in l)return Ee(s.integerValue)===Ee(l.integerValue);if("doubleValue"in s&&"doubleValue"in l){const c=Ee(s.doubleValue),d=Ee(l.doubleValue);return c===d?wf(c)===wf(d):isNaN(c)&&isNaN(d)}return!1}(n,t);case 9:return qo(n.arrayValue.values||[],t.arrayValue.values||[],jr);case 10:case 11:return function(s,l){const c=s.mapValue.fields||{},d=l.mapValue.fields||{};if(k1(c)!==k1(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!jr(c[p],d[p])))return!1;return!0}(n,t);default:return St(52216,{left:n})}}function qu(n,t){return(n.values||[]).find(e=>jr(e,t))!==void 0}function Ho(n,t){if(n===t)return 0;const e=ba(n),i=ba(t);if(e!==i)return Dt(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Dt(n.booleanValue,t.booleanValue);case 2:return function(l,c){const d=Ee(l.integerValue||l.doubleValue),p=Ee(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,t);case 3:return D1(n.timestampValue,t.timestampValue);case 4:return D1(Bu(n),Bu(t));case 5:return ug(n.stringValue,t.stringValue);case 6:return function(l,c){const d=va(l),p=va(c);return d.compareTo(p)}(n.bytesValue,t.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=Dt(d[g],p[g]);if(v!==0)return v}return Dt(d.length,p.length)}(n.referenceValue,t.referenceValue);case 8:return function(l,c){const d=Dt(Ee(l.latitude),Ee(c.latitude));return d!==0?d:Dt(Ee(l.longitude),Ee(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return P1(n.arrayValue,t.arrayValue);case 10:return function(l,c){var d,p,g,v;const A=l.fields||{},E=c.fields||{},k=(d=A[Rf])===null||d===void 0?void 0:d.arrayValue,x=(p=E[Rf])===null||p===void 0?void 0:p.arrayValue,C=Dt(((g=k==null?void 0:k.values)===null||g===void 0?void 0:g.length)||0,((v=x==null?void 0:x.values)===null||v===void 0?void 0:v.length)||0);return C!==0?C:P1(k,x)}(n.mapValue,t.mapValue);case 11:return function(l,c){if(l===Fh.mapValue&&c===Fh.mapValue)return 0;if(l===Fh.mapValue)return 1;if(c===Fh.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let A=0;A<p.length&&A<v.length;++A){const E=ug(p[A],v[A]);if(E!==0)return E;const k=Ho(d[p[A]],g[v[A]]);if(k!==0)return k}return Dt(p.length,v.length)}(n.mapValue,t.mapValue);default:throw St(23264,{Pe:e})}}function D1(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Dt(n,t);const e=ya(n),i=ya(t),s=Dt(e.seconds,i.seconds);return s!==0?s:Dt(e.nanos,i.nanos)}function P1(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const l=Ho(e[s],i[s]);if(l)return l}return Dt(e.length,i.length)}function Go(n){return cg(n)}function cg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ya(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return va(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return _t.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const l of e.values||[])s?s=!1:i+=",",i+=cg(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",l=!0;for(const c of i)l?l=!1:s+=",",s+=`${c}:${cg(e.fields[c])}`;return s+"}"}(n.mapValue):St(61005,{value:n})}function nf(n){switch(ba(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Wf(n);return t?16+nf(t):16;case 5:return 2*n.stringValue.length;case 6:return va(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,l)=>s+nf(l),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return ks(i.fields,(l,c)=>{s+=l.length+nf(c)}),s}(n.mapValue);default:throw St(13486,{value:n})}}function M1(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function hg(n){return!!n&&"integerValue"in n}function my(n){return!!n&&"arrayValue"in n}function V1(n){return!!n&&"nullValue"in n}function L1(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rf(n){return!!n&&"mapValue"in n}function vN(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[tw])===null||e===void 0?void 0:e.stringValue)===ew}function Ou(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ks(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Ou(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ou(n.arrayValue.values[e]);return t}return Object.assign({},n)}function bN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.value=t}static empty(){return new $n({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!rf(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ou(e)}setAll(t){let e=Xe.emptyPath(),i={},s=[];t.forEach((c,d)=>{if(!e.isImmediateParentOf(d)){const p=this.getFieldsMap(e);this.applyChanges(p,i,s),i={},s=[],e=d.popLast()}c?i[d.lastSegment()]=Ou(c):s.push(d.lastSegment())});const l=this.getFieldsMap(e);this.applyChanges(l,i,s)}delete(t){const e=this.field(t.popLast());rf(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];rf(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){ks(e,(s,l)=>t[s]=l);for(const s of i)delete t[s]}clone(){return new $n(Ou(this.value))}}function nw(n){const t=[];return ks(n.fields,(e,i)=>{const s=new Xe([e]);if(rf(i)){const l=nw(i.mapValue).fields;if(l.length===0)t.push(s);else for(const c of l)t.push(s.child(c))}else t.push(s)}),new ar(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e,i,s,l,c,d){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(t){return new an(t,0,It.min(),It.min(),It.min(),$n.empty(),0)}static newFoundDocument(t,e,i,s){return new an(t,1,e,It.min(),i,s,0)}static newNoDocument(t,e){return new an(t,2,e,It.min(),It.min(),$n.empty(),0)}static newUnknownDocument(t,e){return new an(t,3,e,It.min(),It.min(),$n.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(It.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$n.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=It.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof an&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e){this.position=t,this.inclusive=e}}function U1(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const l=t[s],c=n.position[s];if(l.field.isKeyField()?i=_t.comparator(_t.fromName(c.referenceValue),e.key):i=Ho(c,e.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function z1(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!jr(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,e="asc"){this.field=t,this.dir=e}}function _N(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{}class Ce extends rw{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new TN(t,e,i):e==="array-contains"?new SN(t,i):e==="in"?new RN(t,i):e==="not-in"?new xN(t,i):e==="array-contains-any"?new IN(t,i):new Ce(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new AN(t,i):new wN(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ho(e,this.value)):e!==null&&ba(this.value)===ba(e)&&this.matchesComparison(Ho(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return St(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends rw{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new ur(t,e)}matches(t){return iw(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function iw(n){return n.op==="and"}function aw(n){return EN(n)&&iw(n)}function EN(n){for(const t of n.filters)if(t instanceof ur)return!1;return!0}function fg(n){if(n instanceof Ce)return n.field.canonicalString()+n.op.toString()+Go(n.value);if(aw(n))return n.filters.map(t=>fg(t)).join(",");{const t=n.filters.map(e=>fg(e)).join(",");return`${n.op}(${t})`}}function sw(n,t){return n instanceof Ce?function(i,s){return s instanceof Ce&&i.op===s.op&&i.field.isEqual(s.field)&&jr(i.value,s.value)}(n,t):n instanceof ur?function(i,s){return s instanceof ur&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((l,c,d)=>l&&sw(c,s.filters[d]),!0):!1}(n,t):void St(19439)}function ow(n){return n instanceof Ce?function(e){return`${e.field.canonicalString()} ${e.op} ${Go(e.value)}`}(n):n instanceof ur?function(e){return e.op.toString()+" {"+e.getFilters().map(ow).join(" ,")+"}"}(n):"Filter"}class TN extends Ce{constructor(t,e,i){super(t,e,i),this.key=_t.fromName(i.referenceValue)}matches(t){const e=_t.comparator(t.key,this.key);return this.matchesComparison(e)}}class AN extends Ce{constructor(t,e){super(t,"in",e),this.keys=lw("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wN extends Ce{constructor(t,e){super(t,"not-in",e),this.keys=lw("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function lw(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>_t.fromName(i.referenceValue))}class SN extends Ce{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return my(e)&&qu(e.arrayValue,this.value)}}class RN extends Ce{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&qu(this.value.arrayValue,e)}}class xN extends Ce{constructor(t,e){super(t,"not-in",e)}matches(t){if(qu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!qu(this.value.arrayValue,e)}}class IN extends Ce{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!my(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>qu(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(t,e=null,i=[],s=[],l=null,c=null,d=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function j1(n,t=null,e=[],i=[],s=null,l=null,c=null){return new CN(n,t,e,i,s,l,c)}function gy(n){const t=Ct(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>fg(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Xf(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>Go(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>Go(i)).join(",")),t.Ie=e}return t.Ie}function yy(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!_N(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!sw(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!z1(n.startAt,t.startAt)&&z1(n.endAt,t.endAt)}function dg(n){return _t.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e=null,i=[],s=[],l=null,c="F",d=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ON(n,t,e,i,s,l,c,d){return new ic(n,t,e,i,s,l,c,d)}function vy(n){return new ic(n)}function B1(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uw(n){return n.collectionGroup!==null}function ku(n){const t=Ct(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const l of t.explicitOrderBy)t.Ee.push(l),e.add(l.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Me(Xe.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(t).forEach(l=>{e.has(l.canonicalString())||l.isKeyField()||t.Ee.push(new If(l,i))}),e.has(Xe.keyField().canonicalString())||t.Ee.push(new If(Xe.keyField(),i))}return t.Ee}function Vr(n){const t=Ct(n);return t.de||(t.de=kN(t,ku(n))),t.de}function kN(n,t){if(n.limitType==="F")return j1(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const l=s.dir==="desc"?"asc":"desc";return new If(s.field,l)});const e=n.endAt?new xf(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new xf(n.startAt.position,n.startAt.inclusive):null;return j1(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function pg(n,t){const e=n.filters.concat([t]);return new ic(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function mg(n,t,e){return new ic(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Zf(n,t){return yy(Vr(n),Vr(t))&&n.limitType===t.limitType}function cw(n){return`${gy(Vr(n))}|lt:${n.limitType}`}function Oo(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>ow(s)).join(", ")}]`),Xf(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>Go(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>Go(s)).join(",")),`Target(${i})`}(Vr(n))}; limitType=${n.limitType})`}function Jf(n,t){return t.isFoundDocument()&&function(i,s){const l=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):_t.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,t)&&function(i,s){for(const l of ku(i))if(!l.field.isKeyField()&&s.data.field(l.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const l of i.filters)if(!l.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(c,d,p){const g=U1(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,ku(i),s)||i.endAt&&!function(c,d,p){const g=U1(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,ku(i),s))}(n,t)}function NN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hw(n){return(t,e)=>{let i=!1;for(const s of ku(n)){const l=DN(s,t,e);if(l!==0)return l;i=i||s.field.isKeyField()}return 0}}function DN(n,t,e){const i=n.field.isKeyField()?_t.comparator(t.key,e.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Ho(p,g):St(42886)}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return St(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,l]of i)if(this.equalsFn(s,t))return l}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return void(s[l]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ks(this.inner,(e,i)=>{for(const[s,l]of i)t(s,l)})}isEmpty(){return KA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=new pe(_t.comparator);function Ai(){return PN}const fw=new pe(_t.comparator);function Tu(...n){let t=fw;for(const e of n)t=t.insert(e.key,e);return t}function dw(n){let t=fw;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function ms(){return Nu()}function pw(){return Nu()}function Nu(){return new Ns(n=>n.toString(),(n,t)=>n.isEqual(t))}const MN=new pe(_t.comparator),VN=new Me(_t.comparator);function zt(...n){let t=VN;for(const e of n)t=t.add(e);return t}const LN=new Me(Dt);function UN(){return LN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wf(t)?"-0":t}}function mw(n){return{integerValue:""+n}}function zN(n,t){return fN(t)?mw(t):by(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this._=void 0}}function jN(n,t,e){return n instanceof Cf?function(s,l){const c={fields:{[WA]:{stringValue:XA},[JA]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return l&&py(l)&&(l=Wf(l)),l&&(c.fields[ZA]=l),{mapValue:c}}(e,t):n instanceof Hu?yw(n,t):n instanceof Gu?vw(n,t):function(s,l){const c=gw(s,l),d=F1(c)+F1(s.Re);return hg(c)&&hg(s.Re)?mw(d):by(s.serializer,d)}(n,t)}function BN(n,t,e){return n instanceof Hu?yw(n,t):n instanceof Gu?vw(n,t):e}function gw(n,t){return n instanceof Of?function(i){return hg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(t)?t:{integerValue:0}:null}class Cf extends td{}class Hu extends td{constructor(t){super(),this.elements=t}}function yw(n,t){const e=bw(t);for(const i of n.elements)e.some(s=>jr(s,i))||e.push(i);return{arrayValue:{values:e}}}class Gu extends td{constructor(t){super(),this.elements=t}}function vw(n,t){let e=bw(t);for(const i of n.elements)e=e.filter(s=>!jr(s,i));return{arrayValue:{values:e}}}class Of extends td{constructor(t,e){super(),this.serializer=t,this.Re=e}}function F1(n){return Ee(n.integerValue||n.doubleValue)}function bw(n){return my(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function FN(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Hu&&s instanceof Hu||i instanceof Gu&&s instanceof Gu?qo(i.elements,s.elements,jr):i instanceof Of&&s instanceof Of?jr(i.Re,s.Re):i instanceof Cf&&s instanceof Cf}(n.transform,t.transform)}class qN{constructor(t,e){this.version=t,this.transformResults=e}}class Lr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lr}static exists(t){return new Lr(void 0,t)}static updateTime(t){return new Lr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function af(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ed{}function _w(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Tw(n.key,Lr.none()):new ac(n.key,n.data,Lr.none());{const e=n.data,i=$n.empty();let s=new Me(Xe.comparator);for(let l of t.fields)if(!s.has(l)){let c=e.field(l);c===null&&l.length>1&&(l=l.popLast(),c=e.field(l)),c===null?i.delete(l):i.set(l,c),s=s.add(l)}return new Ds(n.key,i,new ar(s.toArray()),Lr.none())}}function HN(n,t,e){n instanceof ac?function(s,l,c){const d=s.value.clone(),p=H1(s.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,t,e):n instanceof Ds?function(s,l,c){if(!af(s.precondition,l))return void l.convertToUnknownDocument(c.version);const d=H1(s.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Ew(s)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,t,e):function(s,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function Du(n,t,e,i){return n instanceof ac?function(l,c,d,p){if(!af(l.precondition,c))return d;const g=l.value.clone(),v=G1(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,t,e,i):n instanceof Ds?function(l,c,d,p){if(!af(l.precondition,c))return d;const g=G1(l.fieldTransforms,p,c),v=c.data;return v.setAll(Ew(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(A=>A.field))}(n,t,e,i):function(l,c,d){return af(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,t,e)}function GN(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),l=gw(i.transform,s||null);l!=null&&(e===null&&(e=$n.empty()),e.set(i.field,l))}return e||null}function q1(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&qo(i,s,(l,c)=>FN(l,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ac extends ed{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ds extends ed{constructor(t,e,i,s,l=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Ew(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function H1(n,t,e){const i=new Map;Kt(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const l=n[s],c=l.transform,d=t.data.field(l.field);i.set(l.field,BN(c,d,e[s]))}return i}function G1(n,t,e){const i=new Map;for(const s of n){const l=s.transform,c=e.data.field(s.field);i.set(s.field,jN(l,c,t))}return i}class Tw extends ed{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $N extends ed{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const l=this.mutations[s];l.key.isEqual(t.key)&&HN(l,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Du(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Du(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=pw();return this.mutations.forEach(s=>{const l=t.get(s.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=e.has(s.key)?null:d;const p=_w(c,d);p!==null&&i.set(s.key,p),c.isValidDocument()||c.convertToNoDocument(It.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),zt())}isEqual(t){return this.batchId===t.batchId&&qo(this.mutations,t.mutations,(e,i)=>q1(e,i))&&qo(this.baseMutations,t.baseMutations,(e,i)=>q1(e,i))}}class _y{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){Kt(t.mutations.length===i.length,58842,{fe:t.mutations.length,ge:i.length});let s=function(){return MN}();const l=t.mutations;for(let c=0;c<l.length;c++)s=s.insert(l[c].key,i[c].version);return new _y(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,qt;function XN(n){switch(n){case rt.OK:return St(64938);case rt.CANCELLED:case rt.UNKNOWN:case rt.DEADLINE_EXCEEDED:case rt.RESOURCE_EXHAUSTED:case rt.INTERNAL:case rt.UNAVAILABLE:case rt.UNAUTHENTICATED:return!1;case rt.INVALID_ARGUMENT:case rt.NOT_FOUND:case rt.ALREADY_EXISTS:case rt.PERMISSION_DENIED:case rt.FAILED_PRECONDITION:case rt.ABORTED:case rt.OUT_OF_RANGE:case rt.UNIMPLEMENTED:case rt.DATA_LOSS:return!0;default:return St(15467,{code:n})}}function Aw(n){if(n===void 0)return Ti("GRPC error has no .code"),rt.UNKNOWN;switch(n){case xe.OK:return rt.OK;case xe.CANCELLED:return rt.CANCELLED;case xe.UNKNOWN:return rt.UNKNOWN;case xe.DEADLINE_EXCEEDED:return rt.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return rt.RESOURCE_EXHAUSTED;case xe.INTERNAL:return rt.INTERNAL;case xe.UNAVAILABLE:return rt.UNAVAILABLE;case xe.UNAUTHENTICATED:return rt.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return rt.INVALID_ARGUMENT;case xe.NOT_FOUND:return rt.NOT_FOUND;case xe.ALREADY_EXISTS:return rt.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return rt.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return rt.FAILED_PRECONDITION;case xe.ABORTED:return rt.ABORTED;case xe.OUT_OF_RANGE:return rt.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return rt.UNIMPLEMENTED;case xe.DATA_LOSS:return rt.DATA_LOSS;default:return St(39323,{code:n})}}(qt=xe||(xe={}))[qt.OK=0]="OK",qt[qt.CANCELLED=1]="CANCELLED",qt[qt.UNKNOWN=2]="UNKNOWN",qt[qt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qt[qt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qt[qt.NOT_FOUND=5]="NOT_FOUND",qt[qt.ALREADY_EXISTS=6]="ALREADY_EXISTS",qt[qt.PERMISSION_DENIED=7]="PERMISSION_DENIED",qt[qt.UNAUTHENTICATED=16]="UNAUTHENTICATED",qt[qt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qt[qt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qt[qt.ABORTED=10]="ABORTED",qt[qt.OUT_OF_RANGE=11]="OUT_OF_RANGE",qt[qt.UNIMPLEMENTED=12]="UNIMPLEMENTED",qt[qt.INTERNAL=13]="INTERNAL",qt[qt.UNAVAILABLE=14]="UNAVAILABLE",qt[qt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new da([4294967295,4294967295],0);function $1(n){const t=GA().encode(n),e=new LA;return e.update(t),new Uint8Array(e.digest())}function Y1(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),l=t.getUint32(12,!0);return[new da([e,i],0),new da([s,l],0)]}class Ey{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Au(`Invalid padding: ${e}`);if(i<0)throw new Au(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Au(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Au(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=da.fromNumber(this.pe)}we(t,e,i){let s=t.add(e.multiply(da.fromNumber(i)));return s.compare(WN)===1&&(s=new da([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=$1(t),[i,s]=Y1(e);for(let l=0;l<this.hashCount;l++){const c=this.we(i,s,l);if(!this.be(c))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,l=new Uint8Array(Math.ceil(t/8)),c=new Ey(l,s,e);return i.forEach(d=>c.insert(d)),c}insert(t){if(this.pe===0)return;const e=$1(t),[i,s]=Y1(e);for(let l=0;l<this.hashCount;l++){const c=this.we(i,s,l);this.Se(c)}}Se(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Au extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e,i,s,l){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,sc.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new nd(It.min(),s,new pe(Dt),Ai(),zt())}}class sc{constructor(t,e,i,s,l){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new sc(i,e,zt(),zt(),zt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e,i,s){this.De=t,this.removedTargetIds=e,this.key=i,this.ve=s}}class ww{constructor(t,e){this.targetId=t,this.Ce=e}}class Sw{constructor(t,e,i=Ze.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class K1{constructor(){this.Fe=0,this.Me=Q1(),this.xe=Ze.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=zt(),e=zt(),i=zt();return this.Me.forEach((s,l)=>{switch(l){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:St(38017,{changeType:l})}}),new sc(this.xe,this.Oe,t,e,i)}Qe(){this.Ne=!1,this.Me=Q1()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Kt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class ZN{constructor(t){this.ze=t,this.je=new Map,this.He=Ai(),this.Je=qh(),this.Ye=qh(),this.Ze=new pe(Dt)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const i=this.rt(e);switch(t.state){case 0:this.it(e)&&i.ke(t.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(t.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(e);break;case 3:this.it(e)&&(i.Ge(),i.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),i.ke(t.resumeToken));break;default:St(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((i,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,i=t.Ce.count,s=this._t(e);if(s){const l=s.target;if(dg(l))if(i===0){const c=new _t(l.path);this.tt(e,c,an.newNoDocument(c,It.min()))}else Kt(i===1,20013,{expectedCount:i});else{const c=this.ut(e);if(c!==i){const d=this.ct(t),p=d?this.lt(d,t,c):1;if(p!==0){this.st(e);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,g)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:l=0}=e;let c,d;try{c=va(i).toUint8Array()}catch(p){if(p instanceof QA)return Fo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Ey(c,s,l)}catch(p){return Fo(p instanceof Au?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(t,e,i){return e.Ce.count===i-this.Tt(t,e.targetId)?0:2}Tt(t,e){const i=this.ze.getRemoteKeysForTarget(e);let s=0;return i.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;t.mightContain(d)||(this.tt(e,l,null),s++)}),s}It(t){const e=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&dg(d.target)){const p=new _t(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,an.newNoDocument(p,t))}l.Le&&(e.set(c,l.qe()),l.Qe())}});let i=zt();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.He.forEach((l,c)=>c.setReadTime(t));const s=new nd(t,e,this.Ze,this.He,i);return this.He=Ai(),this.Je=qh(),this.Ye=qh(),this.Ze=new pe(Dt),s}et(t,e){if(!this.it(t))return;const i=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,i),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,i){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),i&&(this.He=this.He.insert(e,i))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new K1,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new Me(Dt),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new Me(Dt),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||ft("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new K1),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function qh(){return new pe(_t.comparator)}function Q1(){return new pe(_t.comparator)}const JN={asc:"ASCENDING",desc:"DESCENDING"},tD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eD={and:"AND",or:"OR"};class nD{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gg(n,t){return n.useProto3Json||Xf(t)?t:{value:t}}function kf(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rw(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function rD(n,t){return kf(n,t.toTimestamp())}function Ur(n){return Kt(!!n,49232),It.fromTimestamp(function(e){const i=ya(e);return new Te(i.seconds,i.nanos)}(n))}function Ty(n,t){return yg(n,t).canonicalString()}function yg(n,t){const e=function(s){return new ae(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function xw(n){const t=ae.fromString(n);return Kt(Nw(t),10190,{key:t.toString()}),t}function vg(n,t){return Ty(n.databaseId,t.path)}function Vm(n,t){const e=xw(t);if(e.get(1)!==n.databaseId.projectId)throw new dt(rt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new dt(rt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new _t(Cw(e))}function Iw(n,t){return Ty(n.databaseId,t)}function iD(n){const t=xw(n);return t.length===4?ae.emptyPath():Cw(t)}function bg(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Cw(n){return Kt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function X1(n,t,e){return{name:vg(n,t),fields:e.value.mapValue.fields}}function aD(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:St(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(Kt(v===void 0||typeof v=="string",58123),Ze.fromBase64String(v||"")):(Kt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ze.fromUint8Array(v||new Uint8Array))}(n,t.targetChange.resumeToken),c=t.targetChange.cause,d=c&&function(g){const v=g.code===void 0?rt.UNKNOWN:Aw(g.code);return new dt(v,g.message||"")}(c);e=new Sw(i,s,l,d||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Vm(n,i.document.name),l=Ur(i.document.updateTime),c=i.document.createTime?Ur(i.document.createTime):It.min(),d=new $n({mapValue:{fields:i.document.fields}}),p=an.newFoundDocument(s,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];e=new sf(g,v,p.key,p)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Vm(n,i.document),l=i.readTime?Ur(i.readTime):It.min(),c=an.newNoDocument(s,l),d=i.removedTargetIds||[];e=new sf([],d,c.key,c)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Vm(n,i.document),l=i.removedTargetIds||[];e=new sf([],l,s,null)}else{if(!("filter"in t))return St(11601,{Vt:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:l}=i,c=new QN(s,l),d=i.targetId;e=new ww(d,c)}}return e}function sD(n,t){let e;if(t instanceof ac)e={update:X1(n,t.key,t.value)};else if(t instanceof Tw)e={delete:vg(n,t.key)};else if(t instanceof Ds)e={update:X1(n,t.key,t.data),updateMask:mD(t.fieldMask)};else{if(!(t instanceof $N))return St(16599,{ft:t.type});e={verify:vg(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Cf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Hu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Gu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Of)return{fieldPath:c.field.canonicalString(),increment:d.Re};throw St(20930,{transform:c.transform})}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,l){return l.updateTime!==void 0?{updateTime:rD(s,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:St(27497)}(n,t.precondition)),e}function oD(n,t){return n&&n.length>0?(Kt(t!==void 0,14353),n.map(e=>function(s,l){let c=s.updateTime?Ur(s.updateTime):Ur(l);return c.isEqual(It.min())&&(c=Ur(l)),new qN(c,s.transformResults||[])}(e,t))):[]}function lD(n,t){return{documents:[Iw(n,t.path)]}}function uD(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Iw(n,s);const l=function(g){if(g.length!==0)return kw(ur.create(g,"and"))}(t.filters);l&&(e.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(E){return{field:ko(E.field),direction:fD(E.dir)}}(v))}(t.orderBy);c&&(e.structuredQuery.orderBy=c);const d=gg(n,t.limit);return d!==null&&(e.structuredQuery.limit=d),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{gt:e,parent:s}}function cD(n){let t=iD(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){Kt(i===1,65062);const v=e.from[0];v.allDescendants?s=v.collectionId:t=t.child(v.collectionId)}let l=[];e.where&&(l=function(A){const E=Ow(A);return E instanceof ur&&aw(E)?E.getFilters():[E]}(e.where));let c=[];e.orderBy&&(c=function(A){return A.map(E=>function(x){return new If(No(x.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(E))}(e.orderBy));let d=null;e.limit&&(d=function(A){let E;return E=typeof A=="object"?A.value:A,Xf(E)?null:E}(e.limit));let p=null;e.startAt&&(p=function(A){const E=!!A.before,k=A.values||[];return new xf(k,E)}(e.startAt));let g=null;return e.endAt&&(g=function(A){const E=!A.before,k=A.values||[];return new xf(k,E)}(e.endAt)),ON(t,s,c,l,d,"F",p,g)}function hD(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return St(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ow(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=No(e.unaryFilter.field);return Ce.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=No(e.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=No(e.unaryFilter.field);return Ce.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=No(e.unaryFilter.field);return Ce.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return St(61313);default:return St(60726)}}(n):n.fieldFilter!==void 0?function(e){return Ce.create(No(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return St(58110);default:return St(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ur.create(e.compositeFilter.filters.map(i=>Ow(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return St(1026)}}(e.compositeFilter.op))}(n):St(30097,{filter:n})}function fD(n){return JN[n]}function dD(n){return tD[n]}function pD(n){return eD[n]}function ko(n){return{fieldPath:n.canonicalString()}}function No(n){return Xe.fromServerFormat(n.fieldPath)}function kw(n){return n instanceof Ce?function(e){if(e.op==="=="){if(L1(e.value))return{unaryFilter:{field:ko(e.field),op:"IS_NAN"}};if(V1(e.value))return{unaryFilter:{field:ko(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(L1(e.value))return{unaryFilter:{field:ko(e.field),op:"IS_NOT_NAN"}};if(V1(e.value))return{unaryFilter:{field:ko(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ko(e.field),op:dD(e.op),value:e.value}}}(n):n instanceof ur?function(e){const i=e.getFilters().map(s=>kw(s));return i.length===1?i[0]:{compositeFilter:{op:pD(e.op),filters:i}}}(n):St(54877,{filter:n})}function mD(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Nw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,i,s,l=It.min(),c=It.min(),d=Ze.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(t){return new ca(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ca(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ca(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ca(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(t){this.wt=t}}function yD(n){const t=cD({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mg(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(){this.Cn=new bD}addToCollectionParentIndex(t,e){return this.Cn.add(e),nt.resolve()}getCollectionParents(t,e){return nt.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return nt.resolve()}deleteFieldIndex(t,e){return nt.resolve()}deleteAllFieldIndexes(t){return nt.resolve()}createTargetIndexes(t,e){return nt.resolve()}getDocumentsMatchingTarget(t,e){return nt.resolve(null)}getIndexType(t,e){return nt.resolve(0)}getFieldIndexes(t,e){return nt.resolve([])}getNextCollectionGroupToUpdate(t){return nt.resolve(null)}getMinOffset(t,e){return nt.resolve(ga.min())}getMinOffsetFromCollectionGroup(t,e){return nt.resolve(ga.min())}updateCollectionGroup(t,e,i){return nt.resolve()}updateIndexEntries(t,e){return nt.resolve()}}class bD{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new Me(ae.comparator),l=!s.has(i);return this.index[e]=s.add(i),l}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new Me(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dw=41943040;class gn{static withCacheSize(t){return new gn(t,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(Dw,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new $o(0)}static lr(){return new $o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="LruGarbageCollector",_D=1048576;function J1([n,t],[e,i]){const s=Dt(n,e);return s===0?Dt(t,i):s}class ED{constructor(t){this.Er=t,this.buffer=new Me(J1),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();J1(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class TD{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){ft(Z1,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Jo(e)?ft(Z1,"Ignoring IndexedDB error during garbage collection: ",e):await Zo(e)}await this.mr(3e5)})}}class AD{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(i=>Math.floor(e/100*i))}nthSequenceNumber(t,e){if(e===0)return nt.resolve(Qf.le);const i=new ED(e);return this.gr.forEachTarget(t,s=>i.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>i.Rr(s))).next(()=>i.maxValue)}removeTargets(t,e,i){return this.gr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(ft("LruGarbageCollector","Garbage collection skipped; disabled"),nt.resolve(W1)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(ft("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),W1):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let i,s,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ft("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),s=this.params.maximumSequenceNumbersToCollect):s=A,c=Date.now(),this.nthSequenceNumber(t,s))).next(A=>(i=A,d=Date.now(),this.removeTargets(t,i,e))).next(A=>(l=A,p=Date.now(),this.removeOrphanedDocuments(t,i))).next(A=>(g=Date.now(),Co()<=Ut.DEBUG&&ft("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${s} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${A} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),nt.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:l,documentsRemoved:A})))}}function wD(n,t){return new AD(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.changes=new Ns(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,an.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?nt.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Du(i.mutation,s,ar.empty(),Te.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,zt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=zt()){const s=ms();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(l=>{let c=Tu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const i=ms();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,zt()))}populateOverlays(t,e,i){const s=[];return i.forEach(l=>{e.has(l)||s.push(l)}),this.documentOverlayCache.getOverlays(t,s).next(l=>{l.forEach((c,d)=>{e.set(c,d)})})}computeViews(t,e,i,s){let l=Ai();const c=Nu(),d=function(){return Nu()}();return e.forEach((p,g)=>{const v=i.get(g.key);s.has(g.key)&&(v===void 0||v.mutation instanceof Ds)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Du(v.mutation,g,v.mutation.getFieldMask(),Te.now())):c.set(g.key,ar.empty())}),this.recalculateAndSaveOverlays(t,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),e.forEach((g,v)=>{var A;return d.set(g,new RD(v,(A=c.get(g))!==null&&A!==void 0?A:null))}),d))}recalculateAndSaveOverlays(t,e){const i=Nu();let s=new pe((c,d)=>c-d),l=zt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=e.get(p);if(g===null)return;let v=i.get(p)||ar.empty();v=d.applyToLocalView(g,v),i.set(p,v);const A=(s.get(d.batchId)||zt()).add(p);s=s.insert(d.batchId,A)})}).next(()=>{const c=[],d=s.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,A=pw();v.forEach(E=>{if(!l.has(E)){const k=_w(e.get(E),i.get(E));k!==null&&A.set(E,k),l=l.add(E)}}),c.push(this.documentOverlayCache.saveOverlays(t,g,A))}return nt.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(c){return _t.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):uw(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(l=>{const c=s-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-l.size):nt.resolve(ms());let d=ju,p=l;return c.next(g=>nt.forEach(g,(v,A)=>(d<A.largestBatchId&&(d=A.largestBatchId),l.get(v)?nt.resolve():this.remoteDocumentCache.getEntry(t,v).next(E=>{p=p.insert(v,E)}))).next(()=>this.populateOverlays(t,g,l)).next(()=>this.computeViews(t,p,g,zt())).next(v=>({batchId:d,changes:dw(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new _t(e)).next(i=>{let s=Tu();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const l=e.collectionGroup;let c=Tu();return this.indexManager.getCollectionParents(t,l).next(d=>nt.forEach(d,p=>{const g=function(A,E){return new ic(E,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,p.child(l));return this.getDocumentsMatchingCollectionQuery(t,g,i,s).next(v=>{v.forEach((A,E)=>{c=c.insert(A,E)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,i,s){let l;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,l,s))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,an.newInvalidDocument(v)))});let d=Tu();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&Du(v.mutation,g,ar.empty(),Te.now()),Jf(e,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return nt.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ur(s.createTime)}}(e)),nt.resolve()}getNamedQuery(t,e){return nt.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:yD(s.bundledQuery),readTime:Ur(s.readTime)}}(e)),nt.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.overlays=new pe(_t.comparator),this.Qr=new Map}getOverlay(t,e){return nt.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ms();return nt.forEach(e,s=>this.getOverlay(t,s).next(l=>{l!==null&&i.set(s,l)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,l)=>{this.St(t,e,l)}),nt.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Qr.get(i);return s!==void 0&&(s.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(i)),nt.resolve()}getOverlaysForCollection(t,e,i){const s=ms(),l=e.length+1,c=new _t(e.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&s.set(p.getKey(),p)}return nt.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let l=new pe((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=ms(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=ms(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=s)););return nt.resolve(d)}St(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const c=this.Qr.get(s.largestBatchId).delete(i.key);this.Qr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new KN(e,i));let l=this.Qr.get(e);l===void 0&&(l=zt(),this.Qr.set(e,l)),this.Qr.set(e,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(t){return nt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,nt.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.$r=new Me(Fe.Ur),this.Kr=new Me(Fe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const i=new Fe(t,e);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.zr(new Fe(t,e))}jr(t,e){t.forEach(i=>this.removeReference(i,e))}Hr(t){const e=new _t(new ae([])),i=new Fe(e,t),s=new Fe(e,t+1),l=[];return this.Kr.forEachInRange([i,s],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new _t(new ae([])),i=new Fe(e,t),s=new Fe(e,t+1);let l=zt();return this.Kr.forEachInRange([i,s],c=>{l=l.add(c.key)}),l}containsKey(t){const e=new Fe(t,0),i=this.$r.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Fe{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return _t.comparator(t.key,e.key)||Dt(t.Zr,e.Zr)}static Wr(t,e){return Dt(t.Zr,e.Zr)||_t.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new Me(Fe.Ur)}checkEmpty(t){return nt.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new YN(l,e,i,s);this.mutationQueue.push(c);for(const d of s)this.Xr=this.Xr.add(new Fe(d.key,l)),this.indexManager.addToCollectionParentIndex(t,d.key.path.popLast());return nt.resolve(c)}lookupMutationBatch(t,e){return nt.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.ti(i),l=s<0?0:s;return nt.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return nt.resolve(this.mutationQueue.length===0?dy:this.nr-1)}getAllMutationBatches(t){return nt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Fe(e,0),s=new Fe(e,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([i,s],c=>{const d=this.ei(c.Zr);l.push(d)}),nt.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new Me(Dt);return e.forEach(s=>{const l=new Fe(s,0),c=new Fe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],d=>{i=i.add(d.Zr)})}),nt.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let l=i;_t.isDocumentKey(l)||(l=l.child(""));const c=new Fe(new _t(l),0);let d=new Me(Dt);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(d=d.add(p.Zr)),!0)},c),nt.resolve(this.ni(d))}ni(t){const e=[];return t.forEach(i=>{const s=this.ei(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Kt(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return nt.forEach(e.mutations,s=>{const l=new Fe(s.key,e.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=i})}sr(t){}containsKey(t,e){const i=new Fe(e,0),s=this.Xr.firstAfterOrEqual(i);return nt.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,nt.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(t){this.ii=t,this.docs=function(){return new pe(_t.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),l=s?s.size:0,c=this.ii(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return nt.resolve(i?i.document.mutableCopy():an.newInvalidDocument(e))}getEntries(t,e){let i=Ai();return e.forEach(s=>{const l=this.docs.get(s);i=i.insert(s,l?l.document.mutableCopy():an.newInvalidDocument(s))}),nt.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let l=Ai();const c=e.path,d=new _t(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||lN(oN(v),i)<=0||(s.has(v.key)||Jf(e,v))&&(l=l.insert(v.key,v.mutableCopy()))}return nt.resolve(l)}getAllFromCollectionGroup(t,e,i,s){St(9500)}si(t,e){return nt.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new DD(this)}getSize(t){return nt.resolve(this.size)}}class DD extends SD{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(i)}),nt.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(t){this.persistence=t,this.oi=new Ns(e=>gy(e),yy),this.lastRemoteSnapshotVersion=It.min(),this.highestTargetId=0,this._i=0,this.ai=new Ay,this.targetCount=0,this.ui=$o.cr()}forEachTarget(t,e){return this.oi.forEach((i,s)=>e(s)),nt.resolve()}getLastRemoteSnapshotVersion(t){return nt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return nt.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),nt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this._i&&(this._i=e),nt.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new $o(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,nt.resolve()}updateTargetData(t,e){return this.Tr(e),nt.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,nt.resolve()}removeTargets(t,e,i){let s=0;const l=[];return this.oi.forEach((c,d)=>{d.sequenceNumber<=e&&i.get(d.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(t,d.targetId)),s++)}),nt.waitFor(l).next(()=>s)}getTargetCount(t){return nt.resolve(this.targetCount)}getTargetData(t,e){const i=this.oi.get(e)||null;return nt.resolve(i)}addMatchingKeys(t,e,i){return this.ai.Gr(e,i),nt.resolve()}removeMatchingKeys(t,e,i){this.ai.jr(e,i);const s=this.persistence.referenceDelegate,l=[];return s&&e.forEach(c=>{l.push(s.markPotentiallyOrphaned(t,c))}),nt.waitFor(l)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),nt.resolve()}getMatchingKeysForTargetId(t,e){const i=this.ai.Yr(e);return nt.resolve(i)}containsKey(t,e){return nt.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t,e){this.ci={},this.overlays={},this.li=new Qf(0),this.hi=!1,this.hi=!0,this.Pi=new OD,this.referenceDelegate=t(this),this.Ti=new PD(this),this.indexManager=new vD,this.remoteDocumentCache=function(s){return new ND(s)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new gD(e),this.Ei=new ID(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new CD,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ci[t.toKey()];return i||(i=new kD(e,this.referenceDelegate),this.ci[t.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,i){ft("MemoryPersistence","Starting transaction:",t);const s=new MD(this.li.next());return this.referenceDelegate.di(),i(s).next(l=>this.referenceDelegate.Ai(s).next(()=>l)).toPromise().then(l=>(s.raiseOnCommittedEvent(),l))}Ri(t,e){return nt.or(Object.values(this.ci).map(i=>()=>i.containsKey(t,e)))}}class MD extends cN{constructor(t){super(),this.currentSequenceNumber=t}}class wy{constructor(t){this.persistence=t,this.Vi=new Ay,this.mi=null}static fi(t){return new wy(t)}get gi(){if(this.mi)return this.mi;throw St(60996)}addReference(t,e,i){return this.Vi.addReference(i,e),this.gi.delete(i.toString()),nt.resolve()}removeReference(t,e,i){return this.Vi.removeReference(i,e),this.gi.add(i.toString()),nt.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),nt.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(l=>this.gi.add(l.toString()))}).next(()=>i.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nt.forEach(this.gi,i=>{const s=_t.fromPath(i);return this.pi(t,s).next(l=>{l||e.removeEntry(s,It.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(i=>{i?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return nt.or([()=>nt.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Nf{constructor(t,e){this.persistence=t,this.yi=new Ns(i=>dN(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=wD(this,e)}static fi(t,e){return new Nf(t,e)}di(){}Ai(t){return nt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>e.next(s=>i+s))}br(t){let e=0;return this.yr(t,i=>{e++}).next(()=>e)}yr(t,e){return nt.forEach(this.yi,(i,s)=>this.Dr(t,i,s).next(l=>l?nt.resolve():e(s)))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),l=s.newChangeBuffer();return s.si(t,c=>this.Dr(t,c,e).next(d=>{d||(i++,l.removeEntry(c,It.min()))})).next(()=>l.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),nt.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.yi.set(i,t.currentSequenceNumber),nt.resolve()}removeReference(t,e,i){return this.yi.set(i,t.currentSequenceNumber),nt.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),nt.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=nf(t.data.value)),e}Dr(t,e,i){return nt.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return nt.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.ds=i,this.As=s}static Rs(t,e){let i=zt(),s=zt();for(const l of e.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:s=s.add(l.doc.key)}return new Sy(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Ex()?8:hN(sn())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,i,s){const l={result:null};return this.ws(t,e).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.bs(t,e,s,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new VD;return this.Ss(t,e,c).next(d=>{if(l.result=d,this.fs)return this.Ds(t,e,c,d.size)})}).next(()=>l.result)}Ds(t,e,i,s){return i.documentReadCount<this.gs?(Co()<=Ut.DEBUG&&ft("QueryEngine","SDK will not create cache indexes for query:",Oo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),nt.resolve()):(Co()<=Ut.DEBUG&&ft("QueryEngine","Query:",Oo(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ps*s?(Co()<=Ut.DEBUG&&ft("QueryEngine","The SDK decides to create cache indexes for query:",Oo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vr(e))):nt.resolve())}ws(t,e){if(B1(e))return nt.resolve(null);let i=Vr(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=mg(e,null,"F"),i=Vr(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(l=>{const c=zt(...l);return this.ys.getDocuments(t,c).next(d=>this.indexManager.getMinOffset(t,i).next(p=>{const g=this.vs(e,d);return this.Cs(e,g,c,p.readTime)?this.ws(t,mg(e,null,"F")):this.Fs(t,g,e,p)}))})))}bs(t,e,i,s){return B1(e)||s.isEqual(It.min())?nt.resolve(null):this.ys.getDocuments(t,i).next(l=>{const c=this.vs(e,l);return this.Cs(e,c,i,s)?nt.resolve(null):(Co()<=Ut.DEBUG&&ft("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oo(e)),this.Fs(t,c,e,sN(s,ju)).next(d=>d))})}vs(t,e){let i=new Me(hw(t));return e.forEach((s,l)=>{Jf(t,l)&&(i=i.add(l))}),i}Cs(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const l=t.limitType==="F"?e.last():e.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(s)>0)}Ss(t,e,i){return Co()<=Ut.DEBUG&&ft("QueryEngine","Using full collection scan to execute query:",Oo(e)),this.ys.getDocumentsMatchingQuery(t,e,ga.min(),i)}Fs(t,e,i,s){return this.ys.getDocumentsMatchingQuery(t,i,s).next(l=>(e.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="LocalStore",UD=3e8;class zD{constructor(t,e,i,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new pe(Dt),this.Os=new Ns(l=>gy(l),yy),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(i)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xD(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function jD(n,t,e,i){return new zD(n,t,e,i)}async function Mw(n,t){const e=Ct(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(l=>(s=l,e.Ls(t),e.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=zt();for(const g of s){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return e.localDocuments.getDocuments(i,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:d}))})})}function BD(n,t){const e=Ct(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),l=e.Bs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const A=g.batch,E=A.keys();let k=nt.resolve();return E.forEach(x=>{k=k.next(()=>v.getEntry(p,x)).next(C=>{const P=g.docVersions.get(x);Kt(P!==null,48541),C.version.compareTo(P)<0&&(A.applyToRemoteDocument(C,g),C.isValidDocument()&&(C.setReadTime(g.commitVersion),v.addEntry(C)))})}),k.next(()=>d.mutationQueue.removeMutationBatch(p,A))}(e,i,t,l).next(()=>l.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=zt();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Vw(n){const t=Ct(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function FD(n,t){const e=Ct(n),i=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const d=[];t.targetChanges.forEach((v,A)=>{const E=s.get(A);if(!E)return;d.push(e.Ti.removeMatchingKeys(l,v.removedDocuments,A).next(()=>e.Ti.addMatchingKeys(l,v.addedDocuments,A)));let k=E.withSequenceNumber(l.currentSequenceNumber);t.targetMismatches.get(A)!==null?k=k.withResumeToken(Ze.EMPTY_BYTE_STRING,It.min()).withLastLimboFreeSnapshotVersion(It.min()):v.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(v.resumeToken,i)),s=s.insert(A,k),function(C,P,Y){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=UD?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(E,k,v)&&d.push(e.Ti.updateTargetData(l,k))});let p=Ai(),g=zt();if(t.documentUpdates.forEach(v=>{t.resolvedLimboDocuments.has(v)&&d.push(e.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(qD(l,c,t.documentUpdates).next(v=>{p=v.qs,g=v.Qs})),!i.isEqual(It.min())){const v=e.Ti.getLastRemoteSnapshotVersion(l).next(A=>e.Ti.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return nt.waitFor(d).next(()=>c.apply(l)).next(()=>e.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(e.xs=s,l))}function qD(n,t,e){let i=zt(),s=zt();return e.forEach(l=>i=i.add(l)),t.getEntries(n,i).next(l=>{let c=Ai();return e.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),p.isNoDocument()&&p.version.isEqual(It.min())?(t.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),c=c.insert(d,p)):ft(Ry,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:s}})}function HD(n,t){const e=Ct(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=dy),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function GD(n,t){const e=Ct(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return e.Ti.getTargetData(i,t).next(l=>l?(s=l,nt.resolve(s)):e.Ti.allocateTargetId(i).next(c=>(s=new ca(t,c,"TargetPurposeListen",i.currentSequenceNumber),e.Ti.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=e.xs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(i.targetId,i),e.Os.set(t,i.targetId)),i})}async function _g(n,t,e){const i=Ct(n),s=i.xs.get(t),l=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!Jo(c))throw c;ft(Ry,`Failed to update sequence numbers for target ${t}: ${c}`)}i.xs=i.xs.remove(t),i.Os.delete(s.target)}function tE(n,t,e){const i=Ct(n);let s=It.min(),l=zt();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const A=Ct(p),E=A.Os.get(v);return E!==void 0?nt.resolve(A.xs.get(E)):A.Ti.getTargetData(g,v)}(i,c,Vr(t)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,i.Ti.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Ms.getDocumentsMatchingQuery(c,t,e?s:It.min(),e?l:zt())).next(d=>($D(i,NN(t),d),{documents:d,$s:l})))}function $D(n,t,e){let i=n.Ns.get(t)||It.min();e.forEach((s,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Ns.set(t,i)}class eE{constructor(){this.activeTargetIds=UN()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class YD{constructor(){this.xo=new eE,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,i){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new eE,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="ConnectivityMonitor";class rE{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ft(nE,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){ft(nE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh=null;function Eg(){return Hh===null?Hh=function(){return 268435456+Math.round(2147483648*Math.random())}():Hh++,"0x"+Hh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="RestConnection",QD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class XD{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${i}/databases/${s}`,this.Go=this.databaseId.database===Sf?`project_id=${i}`:`project_id=${i}&database_id=${s}`}zo(t,e,i,s,l){const c=Eg(),d=this.jo(t,e.toUriEncodedString());ft(Lm,`Sending RPC '${t}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,s,l);const{host:g}=new URL(d),v=xs(g);return this.Jo(t,d,p,i,v).then(A=>(ft(Lm,`Received RPC '${t}' ${c}: `,A),A),A=>{throw Fo(Lm,`RPC '${t}' ${c} failed with error: `,A,"url: ",d,"request:",i),A})}Yo(t,e,i,s,l,c){return this.zo(t,e,i,s,l)}Ho(t,e,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,l)=>t[l]=s),i&&i.headers.forEach((s,l)=>t[l]=s)}jo(t,e){const i=QD[t];return`${this.Ko}/v1/${e}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="WebChannelConnection";class ZD extends XD{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,i,s,l){const c=Eg();return new Promise((d,p)=>{const g=new UA;g.setWithCredentials(!0),g.listenOnce(zA.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case ef.NO_ERROR:const A=g.getResponseJson();ft(nn,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(A)),d(A);break;case ef.TIMEOUT:ft(nn,`RPC '${t}' ${c} timed out`),p(new dt(rt.DEADLINE_EXCEEDED,"Request time out"));break;case ef.HTTP_ERROR:const E=g.getStatus();if(ft(nn,`RPC '${t}' ${c} failed with status:`,E,"response text:",g.getResponseText()),E>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const x=k==null?void 0:k.error;if(x&&x.status&&x.message){const C=function(Y){const Q=Y.toLowerCase().replace(/_/g,"-");return Object.values(rt).indexOf(Q)>=0?Q:rt.UNKNOWN}(x.status);p(new dt(C,x.message))}else p(new dt(rt.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new dt(rt.UNAVAILABLE,"Connection failed."));break;default:St(9055,{h_:t,streamId:c,P_:g.getLastErrorCode(),T_:g.getLastError()})}}finally{ft(nn,`RPC '${t}' ${c} completed.`)}});const v=JSON.stringify(s);ft(nn,`RPC '${t}' ${c} sending request:`,s),g.send(e,"POST",v,i,15)})}I_(t,e,i){const s=Eg(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=FA(),d=BA(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,e,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ft(nn,`Creating RPC '${t}' stream ${s}: ${v}`,p);const A=c.createWebChannel(v,p);this.E_(A);let E=!1,k=!1;const x=new WD({Zo:P=>{k?ft(nn,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(E||(ft(nn,`Opening RPC '${t}' stream ${s} transport.`),A.open(),E=!0),ft(nn,`RPC '${t}' stream ${s} sending:`,P),A.send(P))},Xo:()=>A.close()}),C=(P,Y,Q)=>{P.listen(Y,W=>{try{Q(W)}catch(at){setTimeout(()=>{throw at},0)}})};return C(A,Eu.EventType.OPEN,()=>{k||(ft(nn,`RPC '${t}' stream ${s} transport opened.`),x.__())}),C(A,Eu.EventType.CLOSE,()=>{k||(k=!0,ft(nn,`RPC '${t}' stream ${s} transport closed`),x.u_(),this.d_(A))}),C(A,Eu.EventType.ERROR,P=>{k||(k=!0,Fo(nn,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),x.u_(new dt(rt.UNAVAILABLE,"The operation could not be completed")))}),C(A,Eu.EventType.MESSAGE,P=>{var Y;if(!k){const Q=P.data[0];Kt(!!Q,16349);const W=Q,at=(W==null?void 0:W.error)||((Y=W[0])===null||Y===void 0?void 0:Y.error);if(at){ft(nn,`RPC '${t}' stream ${s} received error:`,at);const st=at.status;let mt=function(R){const M=xe[R];if(M!==void 0)return Aw(M)}(st),D=at.message;mt===void 0&&(mt=rt.INTERNAL,D="Unknown error status: "+st+" with message "+at.message),k=!0,x.u_(new dt(mt,D)),A.close()}else ft(nn,`RPC '${t}' stream ${s} received:`,Q),x.c_(Q)}}),C(d,jA.STAT_EVENT,P=>{P.stat===lg.PROXY?ft(nn,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===lg.NOPROXY&&ft(nn,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.a_()},0),x}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function Um(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){return new nD(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t,e,i=1e3,s=1.5,l=6e4){this.xi=t,this.timerId=e,this.A_=i,this.R_=s,this.V_=l,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),i=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-i);s>0&&ft("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="PersistentStream";class Uw{constructor(t,e,i,s,l,c,d,p){this.xi=t,this.S_=i,this.D_=s,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Lw(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===rt.RESOURCE_EXHAUSTED?(Ti(e.toString()),Ti("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===rt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.v_===e&&this.z_(i,s)},i=>{t(()=>{const s=new dt(rt.UNKNOWN,"Fetching auth token failed: "+i.message);return this.j_(s)})})}z_(t,e){const i=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{i(()=>this.j_(s))}),this.stream.onMessage(s=>{i(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return ft(iE,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(ft(iE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JD extends Uw{constructor(t,e,i,s,l,c){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,c),this.serializer=l}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=aD(this.serializer,t),i=function(l){if(!("targetChange"in l))return It.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?It.min():c.readTime?Ur(c.readTime):It.min()}(t);return this.listener.Y_(e,i)}Z_(t){const e={};e.database=bg(this.serializer),e.addTarget=function(l,c){let d;const p=c.target;if(d=dg(p)?{documents:lD(l,p)}:{query:uD(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Rw(l,c.resumeToken);const g=gg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(It.min())>0){d.readTime=kf(l,c.snapshotVersion.toTimestamp());const g=gg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,t);const i=hD(this.serializer,t);i&&(e.labels=i),this.Q_(e)}X_(t){const e={};e.database=bg(this.serializer),e.removeTarget=t,this.Q_(e)}}class tP extends Uw{constructor(t,e,i,s,l,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,c),this.serializer=l}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return Kt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Kt(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){Kt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=oD(t.writeResults,t.commitTime),i=Ur(t.commitTime);return this.listener.ra(i,e)}ia(){const t={};t.database=bg(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>sD(this.serializer,i))};this.Q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{}class nP extends eP{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new dt(rt.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,i,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(t,yg(e,i),s,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new dt(rt.UNKNOWN,l.toString())})}Yo(t,e,i,s,l){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Yo(t,yg(e,i),s,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new dt(rt.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class rP{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Ti(e),this.ua=!1):ft("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="RemoteStore";class iP{constructor(t,e,i,s,l){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=l,this.Ra.No(c=>{i.enqueueAndForget(async()=>{Ps(this)&&(ft(Ts,"Restarting streams for network reachability change."),await async function(p){const g=Ct(p);g.da.add(4),await oc(g),g.Va.set("Unknown"),g.da.delete(4),await id(g)}(this))})}),this.Va=new rP(i,s)}}async function id(n){if(Ps(n))for(const t of n.Aa)await t(!0)}async function oc(n){for(const t of n.Aa)await t(!1)}function zw(n,t){const e=Ct(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),Oy(e)?Cy(e):tl(e).N_()&&Iy(e,t))}function xy(n,t){const e=Ct(n),i=tl(e);e.Ea.delete(t),i.N_()&&jw(e,t),e.Ea.size===0&&(i.N_()?i.k_():Ps(e)&&e.Va.set("Unknown"))}function Iy(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(It.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}tl(n).Z_(t)}function jw(n,t){n.ma.Ke(t),tl(n).X_(t)}function Cy(n){n.ma=new ZN({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),tl(n).start(),n.Va.ca()}function Oy(n){return Ps(n)&&!tl(n).O_()&&n.Ea.size>0}function Ps(n){return Ct(n).da.size===0}function Bw(n){n.ma=void 0}async function aP(n){n.Va.set("Online")}async function sP(n){n.Ea.forEach((t,e)=>{Iy(n,t)})}async function oP(n,t){Bw(n),Oy(n)?(n.Va.Pa(t),Cy(n)):n.Va.set("Unknown")}async function lP(n,t,e){if(n.Va.set("Online"),t instanceof Sw&&t.state===2&&t.cause)try{await async function(s,l){const c=l.cause;for(const d of l.targetIds)s.Ea.has(d)&&(await s.remoteSyncer.rejectListen(d,c),s.Ea.delete(d),s.ma.removeTarget(d))}(n,t)}catch(i){ft(Ts,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Df(n,i)}else if(t instanceof sf?n.ma.Xe(t):t instanceof ww?n.ma.ot(t):n.ma.nt(t),!e.isEqual(It.min()))try{const i=await Vw(n.localStore);e.compareTo(i)>=0&&await function(l,c){const d=l.ma.It(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ea.get(g);v&&l.Ea.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ea.get(p);if(!v)return;l.Ea.set(p,v.withResumeToken(Ze.EMPTY_BYTE_STRING,v.snapshotVersion)),jw(l,p);const A=new ca(v.target,p,g,v.sequenceNumber);Iy(l,A)}),l.remoteSyncer.applyRemoteEvent(d)}(n,e)}catch(i){ft(Ts,"Failed to raise snapshot:",i),await Df(n,i)}}async function Df(n,t,e){if(!Jo(t))throw t;n.da.add(1),await oc(n),n.Va.set("Offline"),e||(e=()=>Vw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ft(Ts,"Retrying IndexedDB access"),await e(),n.da.delete(1),await id(n)})}function Fw(n,t){return t().catch(e=>Df(n,e,t))}async function ad(n){const t=Ct(n),e=_a(t);let i=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:dy;for(;uP(t);)try{const s=await HD(t.localStore,i);if(s===null){t.Ia.length===0&&e.k_();break}i=s.batchId,cP(t,s)}catch(s){await Df(t,s)}qw(t)&&Hw(t)}function uP(n){return Ps(n)&&n.Ia.length<10}function cP(n,t){n.Ia.push(t);const e=_a(n);e.N_()&&e.ea&&e.ta(t.mutations)}function qw(n){return Ps(n)&&!_a(n).O_()&&n.Ia.length>0}function Hw(n){_a(n).start()}async function hP(n){_a(n).ia()}async function fP(n){const t=_a(n);for(const e of n.Ia)t.ta(e.mutations)}async function dP(n,t,e){const i=n.Ia.shift(),s=_y.from(i,t,e);await Fw(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ad(n)}async function pP(n,t){t&&_a(n).ea&&await async function(i,s){if(function(c){return XN(c)&&c!==rt.ABORTED}(s.code)){const l=i.Ia.shift();_a(i).L_(),await Fw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,s)),await ad(i)}}(n,t),qw(n)&&Hw(n)}async function aE(n,t){const e=Ct(n);e.asyncQueue.verifyOperationInProgress(),ft(Ts,"RemoteStore received new credentials");const i=Ps(e);e.da.add(3),await oc(e),i&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await id(e)}async function mP(n,t){const e=Ct(n);t?(e.da.delete(2),await id(e)):t||(e.da.add(2),await oc(e),e.Va.set("Unknown"))}function tl(n){return n.fa||(n.fa=function(e,i,s){const l=Ct(e);return l.oa(),new JD(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(n.datastore,n.asyncQueue,{e_:aP.bind(null,n),n_:sP.bind(null,n),i_:oP.bind(null,n),Y_:lP.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),Oy(n)?Cy(n):n.Va.set("Unknown")):(await n.fa.stop(),Bw(n))})),n.fa}function _a(n){return n.ga||(n.ga=function(e,i,s){const l=Ct(e);return l.oa(),new tP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:hP.bind(null,n),i_:pP.bind(null,n),na:fP.bind(null,n),ra:dP.bind(null,n)}),n.Aa.push(async t=>{t?(n.ga.L_(),await ad(n)):(await n.ga.stop(),n.Ia.length>0&&(ft(Ts,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t,e,i,s,l){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=l,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,l){const c=Date.now()+i,d=new ky(t,e,c,s,l);return d.start(i),d}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new dt(rt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ny(n,t){if(Ti("AsyncQueue",`${t}: ${n}`),Jo(n))return new dt(rt.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{static emptySet(t){return new jo(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||_t.comparator(e.key,i.key):(e,i)=>_t.comparator(e.key,i.key),this.keyedMap=Tu(),this.sortedSet=new pe(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof jo)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,l=i.getNext().key;if(!s.isEqual(l))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new jo;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.pa=new pe(_t.comparator)}track(t){const e=t.doc.key,i=this.pa.get(e);i?t.type!==0&&i.type===3?this.pa=this.pa.insert(e,t):t.type===3&&i.type!==1?this.pa=this.pa.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.pa=this.pa.remove(e):t.type===1&&i.type===2?this.pa=this.pa.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):St(63341,{Vt:t,ya:i}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,i)=>{t.push(i)}),t}}class Yo{constructor(t,e,i,s,l,c,d,p,g){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,e,i,s,l){const c=[];return e.forEach(d=>{c.push({type:0,doc:d})}),new Yo(t,e,jo.emptySet(e),c,i,s,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class yP{constructor(){this.queries=oE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,i){const s=Ct(e),l=s.queries;s.queries=oE(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new dt(rt.ABORTED,"Firestore shutting down"))}}function oE(){return new Ns(n=>cw(n),Zf)}async function Gw(n,t){const e=Ct(n);let i=3;const s=t.query;let l=e.queries.get(s);l?!l.Da()&&t.va()&&(i=2):(l=new gP,i=t.va()?0:1);try{switch(i){case 0:l.ba=await e.onListen(s,!0);break;case 1:l.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(c){const d=Ny(c,`Initialization of query '${Oo(t.query)}' failed`);return void t.onError(d)}e.queries.set(s,l),l.Sa.push(t),t.Fa(e.onlineState),l.ba&&t.Ma(l.ba)&&Dy(e)}async function $w(n,t){const e=Ct(n),i=t.query;let s=3;const l=e.queries.get(i);if(l){const c=l.Sa.indexOf(t);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?s=t.va()?0:1:!l.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function vP(n,t){const e=Ct(n);let i=!1;for(const s of t){const l=s.query,c=e.queries.get(l);if(c){for(const d of c.Sa)d.Ma(s)&&(i=!0);c.ba=s}}i&&Dy(e)}function bP(n,t,e){const i=Ct(n),s=i.queries.get(t);if(s)for(const l of s.Sa)l.onError(e);i.queries.delete(t)}function Dy(n){n.Ca.forEach(t=>{t.next()})}var Tg,lE;(lE=Tg||(Tg={})).xa="default",lE.Cache="cache";class Yw{constructor(t,e,i){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=i||{}}Ma(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new Yo(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const i=e!=="Offline";return(!this.options.Qa||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=Yo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Tg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(t){this.key=t}}class Qw{constructor(t){this.key=t}}class _P{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=zt(),this.mutatedKeys=zt(),this.Za=hw(t),this.Xa=new jo(this.Za)}get eu(){return this.Ha}tu(t,e){const i=e?e.nu:new sE,s=e?e.Xa:this.Xa;let l=e?e.mutatedKeys:this.mutatedKeys,c=s,d=!1;const p=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((v,A)=>{const E=s.get(v),k=Jf(this.query,A)?A:null,x=!!E&&this.mutatedKeys.has(E.key),C=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let P=!1;E&&k?E.data.isEqual(k.data)?x!==C&&(i.track({type:3,doc:k}),P=!0):this.ru(E,k)||(i.track({type:2,doc:k}),P=!0,(p&&this.Za(k,p)>0||g&&this.Za(k,g)<0)&&(d=!0)):!E&&k?(i.track({type:0,doc:k}),P=!0):E&&!k&&(i.track({type:1,doc:E}),P=!0,(p||g)&&(d=!0)),P&&(k?(c=c.add(k),l=C?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{Xa:c,nu:i,Cs:d,mutatedKeys:l}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const l=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const c=t.nu.wa();c.sort((v,A)=>function(k,x){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return St(20277,{Vt:P})}};return C(k)-C(x)}(v.type,A.type)||this.Za(v.doc,A.doc)),this.iu(i),s=s!=null&&s;const d=e&&!s?this.su():[],p=this.Ya.size===0&&this.current&&!s?1:0,g=p!==this.Ja;return this.Ja=p,c.length!==0||g?{snapshot:new Yo(this.query,t.Xa,l,c,t.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),ou:d}:{ou:d}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new sE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=zt(),this.Xa.forEach(i=>{this._u(i.key)&&(this.Ya=this.Ya.add(i.key))});const e=[];return t.forEach(i=>{this.Ya.has(i)||e.push(new Qw(i))}),this.Ya.forEach(i=>{t.has(i)||e.push(new Kw(i))}),e}au(t){this.Ha=t.$s,this.Ya=zt();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return Yo.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Py="SyncEngine";class EP{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class TP{constructor(t){this.key=t,this.cu=!1}}class AP{constructor(t,e,i,s,l,c){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new Ns(d=>cw(d),Zf),this.Pu=new Map,this.Tu=new Set,this.Iu=new pe(_t.comparator),this.Eu=new Map,this.du=new Ay,this.Au={},this.Ru=new Map,this.Vu=$o.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function wP(n,t,e=!0){const i=eS(n);let s;const l=i.hu.get(t);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),s=l.view.uu()):s=await Xw(i,t,e,!0),s}async function SP(n,t){const e=eS(n);await Xw(e,t,!0,!1)}async function Xw(n,t,e,i){const s=await GD(n.localStore,Vr(t)),l=s.targetId,c=n.sharedClientState.addLocalQueryTarget(l,e);let d;return i&&(d=await RP(n,t,l,c==="current",s.resumeToken)),n.isPrimaryClient&&e&&zw(n.remoteStore,s),d}async function RP(n,t,e,i,s){n.fu=(A,E,k)=>async function(C,P,Y,Q){let W=P.view.tu(Y);W.Cs&&(W=await tE(C.localStore,P.query,!1).then(({documents:D})=>P.view.tu(D,W)));const at=Q&&Q.targetChanges.get(P.targetId),st=Q&&Q.targetMismatches.get(P.targetId)!=null,mt=P.view.applyChanges(W,C.isPrimaryClient,at,st);return cE(C,P.targetId,mt.ou),mt.snapshot}(n,A,E,k);const l=await tE(n.localStore,t,!0),c=new _P(t,l.$s),d=c.tu(l.documents),p=sc.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),g=c.applyChanges(d,n.isPrimaryClient,p);cE(n,e,g.ou);const v=new EP(t,e,c);return n.hu.set(t,v),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),g.snapshot}async function xP(n,t,e){const i=Ct(n),s=i.hu.get(t),l=i.Pu.get(s.targetId);if(l.length>1)return i.Pu.set(s.targetId,l.filter(c=>!Zf(c,t))),void i.hu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await _g(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),e&&xy(i.remoteStore,s.targetId),Ag(i,s.targetId)}).catch(Zo)):(Ag(i,s.targetId),await _g(i.localStore,s.targetId,!0))}async function IP(n,t){const e=Ct(n),i=e.hu.get(t),s=e.Pu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),xy(e.remoteStore,i.targetId))}async function CP(n,t,e){const i=VP(n);try{const s=await function(c,d){const p=Ct(c),g=Te.now(),v=d.reduce((k,x)=>k.add(x.key),zt());let A,E;return p.persistence.runTransaction("Locally write mutations","readwrite",k=>{let x=Ai(),C=zt();return p.Bs.getEntries(k,v).next(P=>{x=P,x.forEach((Y,Q)=>{Q.isValidDocument()||(C=C.add(Y))})}).next(()=>p.localDocuments.getOverlayedDocuments(k,x)).next(P=>{A=P;const Y=[];for(const Q of d){const W=GN(Q,A.get(Q.key).overlayedDocument);W!=null&&Y.push(new Ds(Q.key,W,nw(W.value.mapValue),Lr.exists(!0)))}return p.mutationQueue.addMutationBatch(k,g,Y,d)}).next(P=>{E=P;const Y=P.applyToLocalDocumentSet(A,C);return p.documentOverlayCache.saveOverlays(k,P.batchId,Y)})}).then(()=>({batchId:E.batchId,changes:dw(A)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(c,d,p){let g=c.Au[c.currentUser.toKey()];g||(g=new pe(Dt)),g=g.insert(d,p),c.Au[c.currentUser.toKey()]=g}(i,s.batchId,e),await lc(i,s.changes),await ad(i.remoteStore)}catch(s){const l=Ny(s,"Failed to persist write");e.reject(l)}}async function Ww(n,t){const e=Ct(n);try{const i=await FD(e.localStore,t);t.targetChanges.forEach((s,l)=>{const c=e.Eu.get(l);c&&(Kt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?c.cu=!0:s.modifiedDocuments.size>0?Kt(c.cu,14607):s.removedDocuments.size>0&&(Kt(c.cu,42227),c.cu=!1))}),await lc(e,i,t)}catch(i){await Zo(i)}}function uE(n,t,e){const i=Ct(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.hu.forEach((l,c)=>{const d=c.view.Fa(t);d.snapshot&&s.push(d.snapshot)}),function(c,d){const p=Ct(c);p.onlineState=d;let g=!1;p.queries.forEach((v,A)=>{for(const E of A.Sa)E.Fa(d)&&(g=!0)}),g&&Dy(p)}(i.eventManager,t),s.length&&i.lu.Y_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function OP(n,t,e){const i=Ct(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Eu.get(t),l=s&&s.key;if(l){let c=new pe(_t.comparator);c=c.insert(l,an.newNoDocument(l,It.min()));const d=zt().add(l),p=new nd(It.min(),new Map,new pe(Dt),c,d);await Ww(i,p),i.Iu=i.Iu.remove(l),i.Eu.delete(t),My(i)}else await _g(i.localStore,t,!1).then(()=>Ag(i,t,e)).catch(Zo)}async function kP(n,t){const e=Ct(n),i=t.batch.batchId;try{const s=await BD(e.localStore,t);Jw(e,i,null),Zw(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await lc(e,s)}catch(s){await Zo(s)}}async function NP(n,t,e){const i=Ct(n);try{const s=await function(c,d){const p=Ct(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(A=>(Kt(A!==null,37113),v=A.keys(),p.mutationQueue.removeMutationBatch(g,A))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,t);Jw(i,t,e),Zw(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await lc(i,s)}catch(s){await Zo(s)}}function Zw(n,t){(n.Ru.get(t)||[]).forEach(e=>{e.resolve()}),n.Ru.delete(t)}function Jw(n,t,e){const i=Ct(n);let s=i.Au[i.currentUser.toKey()];if(s){const l=s.get(t);l&&(e?l.reject(e):l.resolve(),s=s.remove(t)),i.Au[i.currentUser.toKey()]=s}}function Ag(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Pu.get(t))n.hu.delete(i),e&&n.lu.gu(i,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(i=>{n.du.containsKey(i)||tS(n,i)})}function tS(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(xy(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),My(n))}function cE(n,t,e){for(const i of e)i instanceof Kw?(n.du.addReference(i.key,t),DP(n,i)):i instanceof Qw?(ft(Py,"Document no longer in limbo: "+i.key),n.du.removeReference(i.key,t),n.du.containsKey(i.key)||tS(n,i.key)):St(19791,{pu:i})}function DP(n,t){const e=t.key,i=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(i)||(ft(Py,"New document in limbo: "+e),n.Tu.add(i),My(n))}function My(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new _t(ae.fromString(t)),i=n.Vu.next();n.Eu.set(i,new TP(e)),n.Iu=n.Iu.insert(e,i),zw(n.remoteStore,new ca(Vr(vy(e.path)),i,"TargetPurposeLimboResolution",Qf.le))}}async function lc(n,t,e){const i=Ct(n),s=[],l=[],c=[];i.hu.isEmpty()||(i.hu.forEach((d,p)=>{c.push(i.fu(p,t,e).then(g=>{var v;if((g||e)&&i.isPrimaryClient){const A=g?!g.fromCache:(v=e==null?void 0:e.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,A?"current":"not-current")}if(g){s.push(g);const A=Sy.Rs(p.targetId,g);l.push(A)}}))}),await Promise.all(c),i.lu.Y_(s),await async function(p,g){const v=Ct(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>nt.forEach(g,E=>nt.forEach(E.ds,k=>v.persistence.referenceDelegate.addReference(A,E.targetId,k)).next(()=>nt.forEach(E.As,k=>v.persistence.referenceDelegate.removeReference(A,E.targetId,k)))))}catch(A){if(!Jo(A))throw A;ft(Ry,"Failed to update sequence numbers: "+A)}for(const A of g){const E=A.targetId;if(!A.fromCache){const k=v.xs.get(E),x=k.snapshotVersion,C=k.withLastLimboFreeSnapshotVersion(x);v.xs=v.xs.insert(E,C)}}}(i.localStore,l))}async function PP(n,t){const e=Ct(n);if(!e.currentUser.isEqual(t)){ft(Py,"User change. New user:",t.toKey());const i=await Mw(e.localStore,t);e.currentUser=t,function(l,c){l.Ru.forEach(d=>{d.forEach(p=>{p.reject(new dt(rt.CANCELLED,c))})}),l.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await lc(e,i.ks)}}function MP(n,t){const e=Ct(n),i=e.Eu.get(t);if(i&&i.cu)return zt().add(i.key);{let s=zt();const l=e.Pu.get(t);if(!l)return s;for(const c of l){const d=e.hu.get(c);s=s.unionWith(d.view.eu)}return s}}function eS(n){const t=Ct(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ww.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=MP.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=OP.bind(null,t),t.lu.Y_=vP.bind(null,t.eventManager),t.lu.gu=bP.bind(null,t.eventManager),t}function VP(n){const t=Ct(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kP.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=NP.bind(null,t),t}class Pf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rd(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return jD(this.persistence,new LD,t.initialUser,this.serializer)}Su(t){return new Pw(wy.fi,this.serializer)}bu(t){return new YD}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pf.provider={build:()=>new Pf};class LP extends Pf{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){Kt(this.persistence.referenceDelegate instanceof Nf,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new TD(i,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new Pw(i=>Nf.fi(i,e),this.serializer)}}class wg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>uE(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=PP.bind(null,this.syncEngine),await mP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new yP}()}createDatastore(t){const e=rd(t.databaseInfo.databaseId),i=function(l){return new ZD(l)}(t.databaseInfo);return function(l,c,d,p){return new nP(l,c,d,p)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,l,c,d){return new iP(i,s,l,c,d)}(this.localStore,this.datastore,t.asyncQueue,e=>uE(this.syncEngine,e,0),function(){return rE.C()?new rE:new KD}())}createSyncEngine(t,e){return function(s,l,c,d,p,g,v){const A=new AP(s,l,c,d,p,g);return v&&(A.mu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const l=Ct(s);ft(Ts,"RemoteStore shutting down."),l.da.add(5),await oc(l),l.Ra.shutdown(),l.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}wg.provider={build:()=>new wg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Ti("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="FirestoreClient";class UP{constructor(t,e,i,s,l){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=rn.UNAUTHENTICATED,this.clientId=$A.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ft(Ea,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ft(Ea,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ny(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function zm(n,t){n.asyncQueue.verifyOperationInProgress(),ft(Ea,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Mw(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function hE(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zP(n);ft(Ea,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>aE(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>aE(t.remoteStore,s)),n._onlineComponents=t}async function zP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ft(Ea,"Using user provided OfflineComponentProvider");try{await zm(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===rt.FAILED_PRECONDITION||s.code===rt.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Fo("Error using user provided cache. Falling back to memory cache: "+e),await zm(n,new Pf)}}else ft(Ea,"Using default OfflineComponentProvider"),await zm(n,new LP(void 0));return n._offlineComponents}async function rS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ft(Ea,"Using user provided OnlineComponentProvider"),await hE(n,n._uninitializedComponentsProvider._online)):(ft(Ea,"Using default OnlineComponentProvider"),await hE(n,new wg))),n._onlineComponents}function jP(n){return rS(n).then(t=>t.syncEngine)}async function iS(n){const t=await rS(n),e=t.eventManager;return e.onListen=wP.bind(null,t.syncEngine),e.onUnlisten=xP.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=SP.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=IP.bind(null,t.syncEngine),e}function BP(n,t,e={}){const i=new vi;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new nS({next:E=>{v.xu(),c.enqueueAndForget(()=>$w(l,A));const k=E.docs.has(d);!k&&E.fromCache?g.reject(new dt(rt.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&E.fromCache&&p&&p.source==="server"?g.reject(new dt(rt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(E)},error:E=>g.reject(E)}),A=new Yw(vy(d.path),v,{includeMetadataChanges:!0,Qa:!0});return Gw(l,A)}(await iS(n),n.asyncQueue,t,e,i)),i.promise}function FP(n,t,e={}){const i=new vi;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new nS({next:E=>{v.xu(),c.enqueueAndForget(()=>$w(l,A)),E.fromCache&&p.source==="server"?g.reject(new dt(rt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(E)},error:E=>g.reject(E)}),A=new Yw(d,v,{includeMetadataChanges:!0,Qa:!0});return Gw(l,A)}(await iS(n),n.asyncQueue,t,e,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(n,t,e){if(!e)throw new dt(rt.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function qP(n,t,e,i){if(t===!0&&i===!0)throw new dt(rt.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function dE(n){if(!_t.isDocumentKey(n))throw new dt(rt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pE(n){if(_t.isDocumentKey(n))throw new dt(rt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":St(12329,{type:typeof n})}function Ta(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new dt(rt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=sd(n);throw new dt(rt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="firestore.googleapis.com",mE=!0;class gE{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new dt(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oS,this.ssl=mE}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:mE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Dw;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_D)throw new dt(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qP("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aS((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new dt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new dt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new dt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class od{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new dt(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new dt(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Wk;switch(i.type){case"firstParty":return new eN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new dt(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=fE.get(e);i&&(ft("ComponentProvider","Removing Datastore"),fE.delete(e),i.terminate())}(this),Promise.resolve()}}function HP(n,t,e,i={}){var s;n=Ta(n,od);const l=xs(t),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${t}:${e}`;l&&(Qg(`https://${p}`),Xg("Firestore",!0)),c.host!==oS&&c.host!==p&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!ma(g,d)&&(n._setSettings(g),i.mockUserToken)){let v,A;if(typeof i.mockUserToken=="string")v=i.mockUserToken,A=rn.MOCK_USER;else{v=TT(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new dt(rt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new rn(E)}n._authCredentials=new Zk(new HA(v,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new el(this.firestore,t,this._query)}}class bn{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pa(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bn(this.firestore,t,this._key)}}class pa extends el{constructor(t,e,i){super(t,e,vy(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bn(this.firestore,null,new _t(t))}withConverter(t){return new pa(this.firestore,t,this._path)}}function As(n,t,...e){if(n=We(n),sS("collection","path",t),n instanceof od){const i=ae.fromString(t,...e);return pE(i),new pa(n,null,i)}{if(!(n instanceof bn||n instanceof pa))throw new dt(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ae.fromString(t,...e));return pE(i),new pa(n.firestore,null,i)}}function Pu(n,t,...e){if(n=We(n),arguments.length===1&&(t=$A.newId()),sS("doc","path",t),n instanceof od){const i=ae.fromString(t,...e);return dE(i),new bn(n,null,new _t(i))}{if(!(n instanceof bn||n instanceof pa))throw new dt(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ae.fromString(t,...e));return dE(i),new bn(n.firestore,n instanceof pa?n.converter:null,new _t(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="AsyncQueue";class vE{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Lw(this,"async_queue_retry"),this.rc=()=>{const i=Um();i&&ft(yE,"Visibility state changed to "+i.visibilityState),this.x_.b_()},this.sc=t;const e=Um();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=Um();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new vi;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!Jo(t))throw t;ft(yE,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(i=>{throw this.Xu=i,this.ec=!1,Ti("INTERNAL UNHANDLED ERROR: ",bE(i)),i}).then(i=>(this.ec=!1,i))));return this.sc=e,e}enqueueAfterDelay(t,e,i){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=ky.createAndSchedule(this,t,e,i,l=>this.uc(l));return this.Zu.push(s),s}oc(){this.Xu&&St(47125,{cc:bE(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function bE(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class uc extends od{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new vE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vE(t),this._firestoreClient=void 0,await t}}}function GP(n,t){const e=typeof n=="object"?n:qf(),i=typeof n=="string"?n:Sf,s=Ra(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const l=bT("firestore");l&&HP(s,...l)}return s}function Vy(n){if(n._terminated)throw new dt(rt.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$P(n),n._firestoreClient}function $P(n){var t,e,i;const s=n._freezeSettings(),l=function(d,p,g,v){return new gN(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,aS(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new UP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ko(Ze.fromBase64String(t))}catch(e){throw new dt(rt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ko(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new dt(rt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new dt(rt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new dt(rt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Dt(this._lat,t._lat)||Dt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==s[l])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=/^__.*__$/;class KP{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Ds(t,this.data,this.fieldMask,e,this.fieldTransforms):new ac(t,this.data,e,this.fieldTransforms)}}function uS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw St(40011,{Ic:n})}}class jy{constructor(t,e,i,s,l,c){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,l===void 0&&this.Ec(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new jy(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:i,Rc:!1});return s.Vc(t),s}mc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:i,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return Mf(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(uS(this.Ic)&&YP.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class QP{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||rd(t)}bc(t,e,i,s=!1){return new jy({Ic:t,methodName:e,wc:i,path:Xe.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function By(n){const t=n._freezeSettings(),e=rd(n._databaseId);return new QP(n._databaseId,!!t.ignoreUndefinedProperties,e)}function cS(n,t,e,i,s,l={}){const c=n.bc(l.merge||l.mergeFields?2:0,t,e,s);dS("Data must be an object, but it was:",c,i);const d=hS(i,c);let p,g;if(l.merge)p=new ar(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const A of l.mergeFields){const E=WP(t,A,e);if(!c.contains(E))throw new dt(rt.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);JP(v,E)||v.push(E)}p=new ar(v),g=c.fieldTransforms.filter(A=>p.covers(A.field))}else p=null,g=c.fieldTransforms;return new KP(new $n(d),p,g)}function XP(n,t,e,i=!1){return Fy(e,n.bc(i?4:3,t))}function Fy(n,t){if(fS(n=We(n)))return dS("Unsupported field value:",t,n),hS(n,t);if(n instanceof lS)return function(i,s){if(!uS(s.Ic))throw s.gc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(s);l&&s.fieldTransforms.push(l)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(i,s){const l=[];let c=0;for(const d of i){let p=Fy(d,s.fc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,t)}return function(i,s){if((i=We(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return zN(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Te.fromDate(i);return{timestampValue:kf(s.serializer,l)}}if(i instanceof Te){const l=new Te(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:kf(s.serializer,l)}}if(i instanceof Uy)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ko)return{bytesValue:Rw(s.serializer,i._byteString)};if(i instanceof bn){const l=s.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw s.gc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ty(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof zy)return function(c,d){return{mapValue:{fields:{[tw]:{stringValue:ew},[Rf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.gc("VectorValues must only contain numeric values.");return by(d.serializer,g)})}}}}}}(i,s);throw s.gc(`Unsupported field value: ${sd(i)}`)}(n,t)}function hS(n,t){const e={};return KA(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ks(n,(i,s)=>{const l=Fy(s,t.Ac(i));l!=null&&(e[i]=l)}),{mapValue:{fields:e}}}function fS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Te||n instanceof Uy||n instanceof Ko||n instanceof bn||n instanceof lS||n instanceof zy)}function dS(n,t,e){if(!fS(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=sd(e);throw i==="an object"?t.gc(n+" a custom object"):t.gc(n+" "+i)}}function WP(n,t,e){if((t=We(t))instanceof Ly)return t._internalPath;if(typeof t=="string")return pS(n,t);throw Mf("Field path arguments must be of type string or ",n,!1,void 0,e)}const ZP=new RegExp("[~\\*/\\[\\]]");function pS(n,t,e){if(t.search(ZP)>=0)throw Mf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ly(...t.split("."))._internalPath}catch{throw Mf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Mf(n,t,e,i,s){const l=i&&!i.isEmpty(),c=s!==void 0;let d=`Function ${t}() called with invalid data`;e&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${s}`),p+=")"),new dt(rt.INVALID_ARGUMENT,d+n+p)}function JP(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(t,e,i,s,l){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new t4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qy("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class t4 extends mS{data(){return super.data()}}function qy(n,t){return typeof t=="string"?pS(n,t):t instanceof Ly?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new dt(rt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hy{}class n4 extends Hy{}function $u(n,t,...e){let i=[];t instanceof Hy&&i.push(t),i=i.concat(e),function(l){const c=l.filter(p=>p instanceof Gy).length,d=l.filter(p=>p instanceof ld).length;if(c>1||c>0&&d>0)throw new dt(rt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class ld extends n4{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new ld(t,e,i)}_apply(t){const e=this._parse(t);return gS(t._query,e),new el(t.firestore,t.converter,pg(t._query,e))}_parse(t){const e=By(t.firestore);return function(l,c,d,p,g,v,A){let E;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new dt(rt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){EE(A,v);const x=[];for(const C of A)x.push(_E(p,l,C));E={arrayValue:{values:x}}}else E=_E(p,l,A)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||EE(A,v),E=XP(d,c,A,v==="in"||v==="not-in");return Ce.create(g,v,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Yu(n,t,e){const i=t,s=qy("where",n);return ld._create(s,i,e)}class Gy extends Hy{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Gy(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:ur.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,l){let c=s;const d=l.getFlattenedFilters();for(const p of d)gS(c,p),c=pg(c,p)}(t._query,e),new el(t.firestore,t.converter,pg(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function _E(n,t,e){if(typeof(e=We(e))=="string"){if(e==="")throw new dt(rt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uw(t)&&e.indexOf("/")!==-1)throw new dt(rt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(ae.fromString(e));if(!_t.isDocumentKey(i))throw new dt(rt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return M1(n,new _t(i))}if(e instanceof bn)return M1(n,e._key);throw new dt(rt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sd(e)}.`)}function EE(n,t){if(!Array.isArray(n)||n.length===0)throw new dt(rt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function gS(n,t){const e=function(s,l){for(const c of s)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new dt(rt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new dt(rt.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class r4{convertValue(t,e="none"){switch(ba(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ee(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(va(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw St(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return ks(t,(s,l)=>{i[s]=this.convertValue(l,e)}),i}convertVectorValue(t){var e,i,s;const l=(s=(i=(e=t.fields)===null||e===void 0?void 0:e[Rf].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(c=>Ee(c.doubleValue));return new zy(l)}convertGeoPoint(t){return new Uy(Ee(t.latitude),Ee(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Wf(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Bu(t));default:return null}}convertTimestamp(t){const e=ya(t);return new Te(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=ae.fromString(t);Kt(Nw(i),9688,{name:t});const s=new Fu(i.get(1),i.get(3)),l=new _t(i.popFirst(5));return s.isEqual(e)||Ti(`Document ${l} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vS extends mS{constructor(t,e,i,s,l,c){super(t,e,i,s,c),this._firestore=t,this._firestoreImpl=t,this.metadata=l}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new of(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(qy("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class of extends vS{data(t={}){return super.data(t)}}class i4{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new wu(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new of(this._firestore,this._userDataWriter,i.key,i,new wu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new dt(rt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,l){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(d=>{const p=new of(s._firestore,s._userDataWriter,d.doc.key,d.doc,new wu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new of(s._firestore,s._userDataWriter,d.doc.key,d.doc,new wu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:a4(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function a4(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return St(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n){n=Ta(n,bn);const t=Ta(n.firestore,uc);return BP(Vy(t),n._key).then(e=>o4(t,n,e))}class bS extends r4{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ko(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bn(this.firestore,null,e)}}function Ku(n){n=Ta(n,el);const t=Ta(n.firestore,uc),e=Vy(t),i=new bS(t);return e4(n._query),FP(e,n._query).then(s=>new i4(t,i,n,s))}function s4(n,t,e){n=Ta(n,bn);const i=Ta(n.firestore,uc),s=yS(n.converter,t,e);return ES(i,[cS(By(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Lr.none())])}function _S(n,t){const e=Ta(n.firestore,uc),i=Pu(n),s=yS(n.converter,t);return ES(e,[cS(By(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Lr.exists(!1))]).then(()=>i)}function ES(n,t){return function(i,s){const l=new vi;return i.asyncQueue.enqueueAndForget(async()=>CP(await jP(i),s,l)),l.promise}(Vy(n),t)}function o4(n,t,e){const i=e.docs.get(t._key),s=new bS(n);return new vS(n,s,t._key,i,new wu(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Wo=s})(Cs),or(new Yn("firestore",(i,{instanceIdentifier:s,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new uc(new Jk(i.getProvider("auth-internal")),new nN(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new dt(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fu(g.options.projectId,v)}(c,s),c);return l=Object.assign({useFetchStreams:e},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),yn(A1,w1,t),yn(A1,w1,"esm2017")})();const l4={apiKey:"AIzaSyBudG1TMfN0mHYZRjPP_snA_Eh7GyiWlgQ",authDomain:"brokeless-bbd6c.firebaseapp.com",projectId:"brokeless-bbd6c",storageBucket:"brokeless-bbd6c.firebasestorage.app",messagingSenderId:"933024633896",appId:"1:933024633896:web:6a2fd84ea444753de9911d",measurementId:"G-SQWCZV52M7"},ud=CT(l4);iO(ud);const qe=_k(ud),nr=GP(ud);Yk(ud);const TS=Ie.createContext();function ws(){return q.useContext(TS)}function u4({children:n}){const[t,e]=q.useState(),[i,s]=q.useState(!0);function l(g,v){return a5(qe,g,v)}function c(g,v){return s5(qe,g,v)}function d(){return qe.signOut()}q.useEffect(()=>u5(qe,v=>{s(!1),e(v)}),[]);const p={currentUser:t,signup:l,login:c,logout:d};return G.jsx(TS.Provider,{value:p,children:!i&&n})}var yu={},TE;function c4(){if(TE)return yu;TE=1,Object.defineProperty(yu,"__esModule",{value:!0}),yu.parse=c,yu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,e=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,l=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function c(E,k){const x=new l,C=E.length;if(C<2)return x;const P=(k==null?void 0:k.decode)||v;let Y=0;do{const Q=E.indexOf("=",Y);if(Q===-1)break;const W=E.indexOf(";",Y),at=W===-1?C:W;if(Q>at){Y=E.lastIndexOf(";",Q-1)+1;continue}const st=d(E,Y,Q),mt=p(E,Q,st),D=E.slice(st,mt);if(x[D]===void 0){let S=d(E,Q+1,at),R=p(E,at,S);const M=P(E.slice(S,R));x[D]=M}Y=at+1}while(Y<C);return x}function d(E,k,x){do{const C=E.charCodeAt(k);if(C!==32&&C!==9)return k}while(++k<x);return x}function p(E,k,x){for(;k>x;){const C=E.charCodeAt(--k);if(C!==32&&C!==9)return k+1}return x}function g(E,k,x){const C=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(E))throw new TypeError(`argument name is invalid: ${E}`);const P=C(k);if(!t.test(P))throw new TypeError(`argument val is invalid: ${k}`);let Y=E+"="+P;if(!x)return Y;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);Y+="; Max-Age="+x.maxAge}if(x.domain){if(!e.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);Y+="; Domain="+x.domain}if(x.path){if(!i.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);Y+="; Path="+x.path}if(x.expires){if(!A(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);Y+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(Y+="; HttpOnly"),x.secure&&(Y+="; Secure"),x.partitioned&&(Y+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return Y}function v(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function A(E){return s.call(E)==="[object Date]"}return yu}c4();var AE="popstate";function h4(n={}){function t(i,s){let{pathname:l,search:c,hash:d}=i.location;return Rg("",{pathname:l,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function e(i,s){return typeof s=="string"?s:Qu(s)}return d4(t,e,null,n)}function fe(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function cr(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function f4(){return Math.random().toString(36).substring(2,10)}function wE(n,t){return{usr:n.state,key:n.key,idx:t}}function Rg(n,t,e=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?nl(t):t,state:e,key:t&&t.key||i||f4()}}function Qu({pathname:n="/",search:t="",hash:e=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),e&&e!=="#"&&(n+=e.charAt(0)==="#"?e:"#"+e),n}function nl(n){let t={};if(n){let e=n.indexOf("#");e>=0&&(t.hash=n.substring(e),n=n.substring(0,e));let i=n.indexOf("?");i>=0&&(t.search=n.substring(i),n=n.substring(0,i)),n&&(t.pathname=n)}return t}function d4(n,t,e,i={}){let{window:s=document.defaultView,v5Compat:l=!1}=i,c=s.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function A(){d="POP";let P=v(),Y=P==null?null:P-g;g=P,p&&p({action:d,location:C.location,delta:Y})}function E(P,Y){d="PUSH";let Q=Rg(C.location,P,Y);g=v()+1;let W=wE(Q,g),at=C.createHref(Q);try{c.pushState(W,"",at)}catch(st){if(st instanceof DOMException&&st.name==="DataCloneError")throw st;s.location.assign(at)}l&&p&&p({action:d,location:C.location,delta:1})}function k(P,Y){d="REPLACE";let Q=Rg(C.location,P,Y);g=v();let W=wE(Q,g),at=C.createHref(Q);c.replaceState(W,"",at),l&&p&&p({action:d,location:C.location,delta:0})}function x(P){return p4(P)}let C={get action(){return d},get location(){return n(s,c)},listen(P){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(AE,A),p=P,()=>{s.removeEventListener(AE,A),p=null}},createHref(P){return t(s,P)},createURL:x,encodeLocation(P){let Y=x(P);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:E,replace:k,go(P){return c.go(P)}};return C}function p4(n,t=!1){let e="http://localhost";typeof window<"u"&&(e=window.location.origin!=="null"?window.location.origin:window.location.href),fe(e,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:Qu(n);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=e+i),new URL(i,e)}function AS(n,t,e="/"){return m4(n,t,e,!1)}function m4(n,t,e,i){let s=typeof t=="string"?nl(t):t,l=wi(s.pathname||"/",e);if(l==null)return null;let c=wS(n);g4(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=x4(l);d=S4(c[p],g,i)}return d}function wS(n,t=[],e=[],i=""){let s=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(fe(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=bi([i,p.relativePath]),v=e.concat(p);l.children&&l.children.length>0&&(fe(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),wS(l.children,t,v,g)),!(l.path==null&&!l.index)&&t.push({path:g,score:A4(g,l.index),routesMeta:v})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,c);else for(let p of SS(l.path))s(l,c,p)}),t}function SS(n){let t=n.split("/");if(t.length===0)return[];let[e,...i]=t,s=e.endsWith("?"),l=e.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let c=SS(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),s&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function g4(n){n.sort((t,e)=>t.score!==e.score?e.score-t.score:w4(t.routesMeta.map(i=>i.childrenIndex),e.routesMeta.map(i=>i.childrenIndex)))}var y4=/^:[\w-]+$/,v4=3,b4=2,_4=1,E4=10,T4=-2,SE=n=>n==="*";function A4(n,t){let e=n.split("/"),i=e.length;return e.some(SE)&&(i+=T4),t&&(i+=b4),e.filter(s=>!SE(s)).reduce((s,l)=>s+(y4.test(l)?v4:l===""?_4:E4),i)}function w4(n,t){return n.length===t.length&&n.slice(0,-1).every((i,s)=>i===t[s])?n[n.length-1]-t[t.length-1]:0}function S4(n,t,e=!1){let{routesMeta:i}=n,s={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?t:t.slice(l.length)||"/",A=Vf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),E=p.route;if(!A&&g&&e&&!i[i.length-1].route.index&&(A=Vf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!A)return null;Object.assign(s,A.params),c.push({params:s,pathname:bi([l,A.pathname]),pathnameBase:k4(bi([l,A.pathnameBase])),route:E}),A.pathnameBase!=="/"&&(l=bi([l,A.pathnameBase]))}return c}function Vf(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[e,i]=R4(n.path,n.caseSensitive,n.end),s=t.match(e);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:A},E)=>{if(v==="*"){let x=d[E]||"";c=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const k=d[E];return A&&!k?g[v]=void 0:g[v]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function R4(n,t=!1,e=!0){cr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):e?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function x4(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function wi(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let e=t.endsWith("/")?t.length-1:t.length,i=n.charAt(e);return i&&i!=="/"?null:n.slice(e)||"/"}function I4(n,t="/"){let{pathname:e,search:i="",hash:s=""}=typeof n=="string"?nl(n):n;return{pathname:e?e.startsWith("/")?e:C4(e,t):t,search:N4(i),hash:D4(s)}}function C4(n,t){let e=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?e.length>1&&e.pop():s!=="."&&e.push(s)}),e.length>1?e.join("/"):"/"}function jm(n,t,e,i){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${e}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function O4(n){return n.filter((t,e)=>e===0||t.route.path&&t.route.path.length>0)}function $y(n){let t=O4(n);return t.map((e,i)=>i===t.length-1?e.pathname:e.pathnameBase)}function Yy(n,t,e,i=!1){let s;typeof n=="string"?s=nl(n):(s={...n},fe(!s.pathname||!s.pathname.includes("?"),jm("?","pathname","search",s)),fe(!s.pathname||!s.pathname.includes("#"),jm("#","pathname","hash",s)),fe(!s.search||!s.search.includes("#"),jm("#","search","hash",s)));let l=n===""||s.pathname==="",c=l?"/":s.pathname,d;if(c==null)d=e;else{let A=t.length-1;if(!i&&c.startsWith("..")){let E=c.split("/");for(;E[0]==="..";)E.shift(),A-=1;s.pathname=E.join("/")}d=A>=0?t[A]:"/"}let p=I4(s,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&e.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var bi=n=>n.join("/").replace(/\/\/+/g,"/"),k4=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),N4=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,D4=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function P4(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var RS=["POST","PUT","PATCH","DELETE"];new Set(RS);var M4=["GET",...RS];new Set(M4);var rl=q.createContext(null);rl.displayName="DataRouter";var cd=q.createContext(null);cd.displayName="DataRouterState";var xS=q.createContext({isTransitioning:!1});xS.displayName="ViewTransition";var V4=q.createContext(new Map);V4.displayName="Fetchers";var L4=q.createContext(null);L4.displayName="Await";var hr=q.createContext(null);hr.displayName="Navigation";var cc=q.createContext(null);cc.displayName="Location";var fr=q.createContext({outlet:null,matches:[],isDataRoute:!1});fr.displayName="Route";var Ky=q.createContext(null);Ky.displayName="RouteError";function U4(n,{relative:t}={}){fe(il(),"useHref() may be used only in the context of a <Router> component.");let{basename:e,navigator:i}=q.useContext(hr),{hash:s,pathname:l,search:c}=hc(n,{relative:t}),d=l;return e!=="/"&&(d=l==="/"?e:bi([e,l])),i.createHref({pathname:d,search:c,hash:s})}function il(){return q.useContext(cc)!=null}function Ca(){return fe(il(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(cc).location}var IS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function CS(n){q.useContext(hr).static||q.useLayoutEffect(n)}function al(){let{isDataRoute:n}=q.useContext(fr);return n?J4():z4()}function z4(){fe(il(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(rl),{basename:t,navigator:e}=q.useContext(hr),{matches:i}=q.useContext(fr),{pathname:s}=Ca(),l=JSON.stringify($y(i)),c=q.useRef(!1);return CS(()=>{c.current=!0}),q.useCallback((p,g={})=>{if(cr(c.current,IS),!c.current)return;if(typeof p=="number"){e.go(p);return}let v=Yy(p,JSON.parse(l),s,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:bi([t,v.pathname])),(g.replace?e.replace:e.push)(v,g.state,g)},[t,e,l,s,n])}var j4=q.createContext(null);function B4(n){let t=q.useContext(fr).outlet;return t&&q.createElement(j4.Provider,{value:n},t)}function hc(n,{relative:t}={}){let{matches:e}=q.useContext(fr),{pathname:i}=Ca(),s=JSON.stringify($y(e));return q.useMemo(()=>Yy(n,JSON.parse(s),i,t==="path"),[n,s,i,t])}function F4(n,t){return OS(n,t)}function OS(n,t,e,i){var Y;fe(il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=q.useContext(hr),{matches:l}=q.useContext(fr),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let Q=v&&v.path||"";kS(p,!v||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let A=Ca(),E;if(t){let Q=typeof t=="string"?nl(t):t;fe(g==="/"||((Y=Q.pathname)==null?void 0:Y.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),E=Q}else E=A;let k=E.pathname||"/",x=k;if(g!=="/"){let Q=g.replace(/^\//,"").split("/");x="/"+k.replace(/^\//,"").split("/").slice(Q.length).join("/")}let C=AS(n,{pathname:x});cr(v||C!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),cr(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=Y4(C&&C.map(Q=>Object.assign({},Q,{params:Object.assign({},d,Q.params),pathname:bi([g,s.encodeLocation?s.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?g:bi([g,s.encodeLocation?s.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),l,e,i);return t&&P?q.createElement(cc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},P):P}function q4(){let n=Z4(),t=P4(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),e=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:l},"ErrorBoundary")," or"," ",q.createElement("code",{style:l},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),e?q.createElement("pre",{style:s},e):null,c)}var H4=q.createElement(q4,null),G4=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?q.createElement(fr.Provider,{value:this.props.routeContext},q.createElement(Ky.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $4({routeContext:n,match:t,children:e}){let i=q.useContext(rl);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(fr.Provider,{value:n},e)}function Y4(n,t=[],e=null,i=null){if(n==null){if(!e)return null;if(e.errors)n=e.matches;else if(t.length===0&&!e.initialized&&e.matches.length>0)n=e.matches;else return null}let s=n,l=e==null?void 0:e.errors;if(l!=null){let p=s.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);fe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(e)for(let p=0;p<s.length;p++){let g=s[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:A}=e,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!A||A[g.route.id]===void 0);if(g.route.lazy||E){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,g,v)=>{let A,E=!1,k=null,x=null;e&&(A=l&&g.route.id?l[g.route.id]:void 0,k=g.route.errorElement||H4,c&&(d<0&&v===0?(kS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):d===v&&(E=!0,x=g.route.hydrateFallbackElement||null)));let C=t.concat(s.slice(0,v+1)),P=()=>{let Y;return A?Y=k:E?Y=x:g.route.Component?Y=q.createElement(g.route.Component,null):g.route.element?Y=g.route.element:Y=p,q.createElement($4,{match:g,routeContext:{outlet:p,matches:C,isDataRoute:e!=null},children:Y})};return e&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?q.createElement(G4,{location:e.location,revalidation:e.revalidation,component:k,error:A,children:P(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):P()},null)}function Qy(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function K4(n){let t=q.useContext(rl);return fe(t,Qy(n)),t}function Q4(n){let t=q.useContext(cd);return fe(t,Qy(n)),t}function X4(n){let t=q.useContext(fr);return fe(t,Qy(n)),t}function Xy(n){let t=X4(n),e=t.matches[t.matches.length-1];return fe(e.route.id,`${n} can only be used on routes that contain a unique "id"`),e.route.id}function W4(){return Xy("useRouteId")}function Z4(){var i;let n=q.useContext(Ky),t=Q4("useRouteError"),e=Xy("useRouteError");return n!==void 0?n:(i=t.errors)==null?void 0:i[e]}function J4(){let{router:n}=K4("useNavigate"),t=Xy("useNavigate"),e=q.useRef(!1);return CS(()=>{e.current=!0}),q.useCallback(async(s,l={})=>{cr(e.current,IS),e.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:t,...l}))},[n,t])}var RE={};function kS(n,t,e){!t&&!RE[n]&&(RE[n]=!0,cr(!1,e))}q.memo(tM);function tM({routes:n,future:t,state:e}){return OS(n,void 0,e,t)}function eM({to:n,replace:t,state:e,relative:i}){fe(il(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=q.useContext(hr);cr(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=q.useContext(fr),{pathname:c}=Ca(),d=al(),p=Yy(n,$y(l),c,i==="path"),g=JSON.stringify(p);return q.useEffect(()=>{d(JSON.parse(g),{replace:t,state:e,relative:i})},[d,g,i,t,e]),null}function nM(n){return B4(n.context)}function Do(n){fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rM({basename:n="/",children:t=null,location:e,navigationType:i="POP",navigator:s,static:l=!1}){fe(!il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:c,navigator:s,static:l,future:{}}),[c,s,l]);typeof e=="string"&&(e=nl(e));let{pathname:p="/",search:g="",hash:v="",state:A=null,key:E="default"}=e,k=q.useMemo(()=>{let x=wi(p,c);return x==null?null:{location:{pathname:x,search:g,hash:v,state:A,key:E},navigationType:i}},[c,p,g,v,A,E,i]);return cr(k!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:q.createElement(hr.Provider,{value:d},q.createElement(cc.Provider,{children:t,value:k}))}function iM({children:n,location:t}){return F4(xg(n),t)}function xg(n,t=[]){let e=[];return q.Children.forEach(n,(i,s)=>{if(!q.isValidElement(i))return;let l=[...t,s];if(i.type===q.Fragment){e.push.apply(e,xg(i.props.children,l));return}fe(i.type===Do,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),fe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=xg(i.props.children,l)),e.push(c)}),e}var lf="get",uf="application/x-www-form-urlencoded";function hd(n){return n!=null&&typeof n.tagName=="string"}function aM(n){return hd(n)&&n.tagName.toLowerCase()==="button"}function sM(n){return hd(n)&&n.tagName.toLowerCase()==="form"}function oM(n){return hd(n)&&n.tagName.toLowerCase()==="input"}function lM(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function uM(n,t){return n.button===0&&(!t||t==="_self")&&!lM(n)}var Gh=null;function cM(){if(Gh===null)try{new FormData(document.createElement("form"),0),Gh=!1}catch{Gh=!0}return Gh}var hM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bm(n){return n!=null&&!hM.has(n)?(cr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uf}"`),null):n}function fM(n,t){let e,i,s,l,c;if(sM(n)){let d=n.getAttribute("action");i=d?wi(d,t):null,e=n.getAttribute("method")||lf,s=Bm(n.getAttribute("enctype"))||uf,l=new FormData(n)}else if(aM(n)||oM(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?wi(p,t):null,e=n.getAttribute("formmethod")||d.getAttribute("method")||lf,s=Bm(n.getAttribute("formenctype"))||Bm(d.getAttribute("enctype"))||uf,l=new FormData(d,n),!cM()){let{name:g,type:v,value:A}=n;if(v==="image"){let E=g?`${g}.`:"";l.append(`${E}x`,"0"),l.append(`${E}y`,"0")}else g&&l.append(g,A)}}else{if(hd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');e=lf,i=null,s=uf,c=n}return l&&s==="text/plain"&&(c=l,l=void 0),{action:i,method:e.toLowerCase(),encType:s,formData:l,body:c}}function Wy(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}async function dM(n,t){if(n.id in t)return t[n.id];try{let e=await import(n.module);return t[n.id]=e,e}catch(e){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(e),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pM(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function mM(n,t,e){let i=await Promise.all(n.map(async s=>{let l=t.routes[s.route.id];if(l){let c=await dM(l,e);return c.links?c.links():[]}return[]}));return bM(i.flat(1).filter(pM).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function xE(n,t,e,i,s,l){let c=(p,g)=>e[g]?p.route.id!==e[g].route.id:!0,d=(p,g)=>{var v;return e[g].pathname!==p.pathname||((v=e[g].route.path)==null?void 0:v.endsWith("*"))&&e[g].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?t.filter((p,g)=>{var A;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let E=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((A=e[0])==null?void 0:A.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function gM(n,t,{includeHydrateFallback:e}={}){return yM(n.map(i=>{let s=t.routes[i.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),e&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function yM(n){return[...new Set(n)]}function vM(n){let t={},e=Object.keys(n).sort();for(let i of e)t[i]=n[i];return t}function bM(n,t){let e=new Set;return new Set(t),n.reduce((i,s)=>{let l=JSON.stringify(vM(s));return e.has(l)||(e.add(l),i.push({key:l,link:s})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _M=new Set([100,101,204,205]);function EM(n,t){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":t&&wi(e.pathname,t)==="/"?e.pathname=`${t.replace(/\/$/,"")}/_root.data`:e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function NS(){let n=q.useContext(rl);return Wy(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function TM(){let n=q.useContext(cd);return Wy(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Zy=q.createContext(void 0);Zy.displayName="FrameworkContext";function DS(){let n=q.useContext(Zy);return Wy(n,"You must render this element inside a <HydratedRouter> element"),n}function AM(n,t){let e=q.useContext(Zy),[i,s]=q.useState(!1),[l,c]=q.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:A}=t,E=q.useRef(null);q.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let C=Y=>{Y.forEach(Q=>{c(Q.isIntersecting)})},P=new IntersectionObserver(C,{threshold:.5});return E.current&&P.observe(E.current),()=>{P.disconnect()}}},[n]),q.useEffect(()=>{if(i){let C=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(C)}}},[i]);let k=()=>{s(!0)},x=()=>{s(!1),c(!1)};return e?n!=="intent"?[l,E,{}]:[l,E,{onFocus:vu(d,k),onBlur:vu(p,x),onMouseEnter:vu(g,k),onMouseLeave:vu(v,x),onTouchStart:vu(A,k)}]:[!1,E,{}]}function vu(n,t){return e=>{n&&n(e),e.defaultPrevented||t(e)}}function wM({page:n,...t}){let{router:e}=NS(),i=q.useMemo(()=>AS(e.routes,n,e.basename),[e.routes,n,e.basename]);return i?q.createElement(RM,{page:n,matches:i,...t}):null}function SM(n){let{manifest:t,routeModules:e}=DS(),[i,s]=q.useState([]);return q.useEffect(()=>{let l=!1;return mM(n,t,e).then(c=>{l||s(c)}),()=>{l=!0}},[n,t,e]),i}function RM({page:n,matches:t,...e}){let i=Ca(),{manifest:s,routeModules:l}=DS(),{basename:c}=NS(),{loaderData:d,matches:p}=TM(),g=q.useMemo(()=>xE(n,t,p,s,i,"data"),[n,t,p,s,i]),v=q.useMemo(()=>xE(n,t,p,s,i,"assets"),[n,t,p,s,i]),A=q.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,C=!1;if(t.forEach(Y=>{var W;let Q=s.routes[Y.route.id];!Q||!Q.hasLoader||(!g.some(at=>at.route.id===Y.route.id)&&Y.route.id in d&&((W=l[Y.route.id])!=null&&W.shouldRevalidate)||Q.hasClientLoader?C=!0:x.add(Y.route.id))}),x.size===0)return[];let P=EM(n,c);return C&&x.size>0&&P.searchParams.set("_routes",t.filter(Y=>x.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[P.pathname+P.search]},[c,d,i,s,g,t,n,l]),E=q.useMemo(()=>gM(v,s),[v,s]),k=SM(v);return q.createElement(q.Fragment,null,A.map(x=>q.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...e})),E.map(x=>q.createElement("link",{key:x,rel:"modulepreload",href:x,...e})),k.map(({key:x,link:C})=>q.createElement("link",{key:x,...C})))}function xM(...n){return t=>{n.forEach(e=>{typeof e=="function"?e(t):e!=null&&(e.current=t)})}}var PS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PS&&(window.__reactRouterVersion="7.6.1")}catch{}function IM({basename:n,children:t,window:e}){let i=q.useRef();i.current==null&&(i.current=h4({window:e,v5Compat:!0}));let s=i.current,[l,c]=q.useState({action:s.action,location:s.location}),d=q.useCallback(p=>{q.startTransition(()=>c(p))},[c]);return q.useLayoutEffect(()=>s.listen(d),[s,d]),q.createElement(rM,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:s})}var MS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fd=q.forwardRef(function({onClick:t,discover:e="render",prefetch:i="none",relative:s,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:A,...E},k){let{basename:x}=q.useContext(hr),C=typeof g=="string"&&MS.test(g),P,Y=!1;if(typeof g=="string"&&C&&(P=g,PS))try{let R=new URL(window.location.href),M=g.startsWith("//")?new URL(R.protocol+g):new URL(g),L=wi(M.pathname,x);M.origin===R.origin&&L!=null?g=L+M.search+M.hash:Y=!0}catch{cr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=U4(g,{relative:s}),[W,at,st]=AM(i,E),mt=NM(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:s,viewTransition:A});function D(R){t&&t(R),R.defaultPrevented||mt(R)}let S=q.createElement("a",{...E,...st,href:P||Q,onClick:Y||l?t:D,ref:xM(k,at),target:p,"data-discover":!C&&e==="render"?"true":void 0});return W&&!C?q.createElement(q.Fragment,null,S,q.createElement(wM,{page:Q})):S});fd.displayName="Link";var CM=q.forwardRef(function({"aria-current":t="page",caseSensitive:e=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let A=hc(c,{relative:g.relative}),E=Ca(),k=q.useContext(cd),{navigator:x,basename:C}=q.useContext(hr),P=k!=null&&LM(A)&&d===!0,Y=x.encodeLocation?x.encodeLocation(A).pathname:A.pathname,Q=E.pathname,W=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;e||(Q=Q.toLowerCase(),W=W?W.toLowerCase():null,Y=Y.toLowerCase()),W&&C&&(W=wi(W,C)||W);const at=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let st=Q===Y||!s&&Q.startsWith(Y)&&Q.charAt(at)==="/",mt=W!=null&&(W===Y||!s&&W.startsWith(Y)&&W.charAt(Y.length)==="/"),D={isActive:st,isPending:mt,isTransitioning:P},S=st?t:void 0,R;typeof i=="function"?R=i(D):R=[i,st?"active":null,mt?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(D):l;return q.createElement(fd,{...g,"aria-current":S,className:R,ref:v,style:M,to:c,viewTransition:d},typeof p=="function"?p(D):p)});CM.displayName="NavLink";var OM=q.forwardRef(({discover:n="render",fetcherKey:t,navigate:e,reloadDocument:i,replace:s,state:l,method:c=lf,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:A,...E},k)=>{let x=MM(),C=VM(d,{relative:g}),P=c.toLowerCase()==="get"?"get":"post",Y=typeof d=="string"&&MS.test(d),Q=W=>{if(p&&p(W),W.defaultPrevented)return;W.preventDefault();let at=W.nativeEvent.submitter,st=(at==null?void 0:at.getAttribute("formmethod"))||c;x(at||W.currentTarget,{fetcherKey:t,method:st,navigate:e,replace:s,state:l,relative:g,preventScrollReset:v,viewTransition:A})};return q.createElement("form",{ref:k,method:P,action:C,onSubmit:i?p:Q,...E,"data-discover":!Y&&n==="render"?"true":void 0})});OM.displayName="Form";function kM(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function VS(n){let t=q.useContext(rl);return fe(t,kM(n)),t}function NM(n,{target:t,replace:e,state:i,preventScrollReset:s,relative:l,viewTransition:c}={}){let d=al(),p=Ca(),g=hc(n,{relative:l});return q.useCallback(v=>{if(uM(v,t)){v.preventDefault();let A=e!==void 0?e:Qu(p)===Qu(g);d(n,{replace:A,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[p,d,g,e,i,t,n,s,l,c])}var DM=0,PM=()=>`__${String(++DM)}__`;function MM(){let{router:n}=VS("useSubmit"),{basename:t}=q.useContext(hr),e=W4();return q.useCallback(async(i,s={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=fM(i,t);if(s.navigate===!1){let v=s.fetcherKey||PM();await n.fetch(v,e,s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:g,formMethod:s.method||c,formEncType:s.encType||d,flushSync:s.flushSync})}else await n.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:g,formMethod:s.method||c,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:e,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,t,e])}function VM(n,{relative:t}={}){let{basename:e}=q.useContext(hr),i=q.useContext(fr);fe(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),l={...hc(n||".",{relative:t})},c=Ca();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(A=>A).forEach(A=>d.append("index",A));let v=d.toString();l.search=v?`?${v}`:""}}return(!n||n===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),e!=="/"&&(l.pathname=l.pathname==="/"?e:bi([e,l.pathname])),Qu(l)}function LM(n,t={}){let e=q.useContext(xS);fe(e!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=VS("useViewTransitionState"),s=hc(n,{relative:t.relative});if(!e.isTransitioning)return!1;let l=wi(e.currentLocation.pathname,i)||e.currentLocation.pathname,c=wi(e.nextLocation.pathname,i)||e.nextLocation.pathname;return Vf(s.pathname,c)!=null||Vf(s.pathname,l)!=null}[..._M];function UM(){const n=q.useRef(),t=q.useRef(),{login:e}=ws(),[i,s]=q.useState(!1),[l,c]=q.useState(""),d=al();async function p(g){g.preventDefault();try{c(""),s(!0),await e(n.current.value,t.current.value),d("/dashboard")}catch(v){console.error("Signup error:",v),c("FAILED TO SIGN IN")}}return G.jsxs("form",{className:"login-container ",onSubmit:p,children:[G.jsx("h1",{className:"login-tittle",children:"BROKELESS"}),G.jsx("h2",{className:"login-name",children:"EMAIL"}),G.jsx("input",{className:"login-name-input",type:"email",placeholder:"admin",required:!0,ref:n}),G.jsx("h2",{className:"login-password",children:"PASSWORD"}),G.jsx("input",{className:"login-password-input",type:"password",placeholder:"admin",required:!0,ref:t}),G.jsx("button",{disabled:i,className:"login-submit_btn",type:"submit",children:"LOGIN"}),G.jsxs("div",{children:["NEED AN ACCOUNT ",G.jsx(fd,{to:"/sign-up",children:"SIGN UP"})," "]}),l&&G.jsx("p",{className:"",children:l})]})}const Jy=async()=>{var i;const n=(i=qe.currentUser)==null?void 0:i.uid;if(!n)return null;const t=Pu(nr,"users",n),e=await Sg(t);return e.exists()?e.data():null};function zM({onSubmit:n}){var x;const[t,e]=q.useState(""),[i,s]=q.useState(""),[l,c]=q.useState(""),[d,p]=q.useState(null),g=async C=>{C.preventDefault();try{const P=await _S(As(nr,"expense"),{type:t,price:parseFloat(i),label:l,createdAt:new Date,uid:qe.currentUser.uid,email:qe.currentUser.email});console.log("Expense added with ID:",P.id)}catch(P){console.error("Error adding expense:",P)}n()};function v(C){e(C.target.value)}function A(C){s(C.target.value)}function E(C){c(C.target.value)}q.useEffect(()=>{(async()=>{const P=await Jy();P&&p(P)})()},[]);const k=((x=d==null?void 0:d.categories)==null?void 0:x.split(","))||[];return G.jsxs("div",{className:"transaction ",children:[G.jsx("h1",{className:"transaction-tittle",children:"NEW TRANSACTION"}),G.jsxs("form",{className:"transaction-form",action:"",onSubmit:g,children:[G.jsxs("div",{className:"transaction-field-1",children:[G.jsx("button",{className:`transaction-field-btn ${t==="expense"?"active":""}`,type:"button",onClick:()=>e("expense"),onChange:v,children:"Expense"}),G.jsx("button",{className:`transaction-field-btn ${t==="income"?"active":""}`,type:"button",onClick:()=>e("income"),onChange:v,children:"Income"})]}),G.jsxs("div",{className:"transaction-field",children:[G.jsx("h3",{className:"transaction-field-text",children:"PRICE"}),G.jsx("input",{value:i,onChange:A,className:"transaction-field-input",name:"amount",type:"number",min:0,step:1})]}),G.jsxs("div",{className:"transaction-field",children:[G.jsx("h3",{className:"transaction-field-text",children:"LABEL"}),G.jsx("input",{list:"category-options",className:"transaction-field-input",name:"label",type:"text",value:l,onChange:E}),G.jsx("datalist",{id:"category-options",children:k.map(C=>G.jsx("option",{value:C},C))})]}),G.jsx("button",{className:"transaction-field-btn-submit",type:"submit",children:"SUBMIT"})]})]})}function jM({transactions:n}){const[t,e]=q.useState([]),{currentUser:i}=ws();q.useEffect(()=>{(async()=>{if(i)try{const p=$u(As(nr,"expense"),Yu("uid","==",i.uid)),v=(await Ku(p)).docs.map(A=>{const E=A.data();return{id:A.id,...E}});e(v)}catch(p){console.error("Error fetching expenses:",p)}})()},[i]);const[s,l]=q.useState(null);q.useEffect(()=>{(async()=>{const p=await Jy();p&&l(p)})()},[]);let c="";return(s==null?void 0:s.currency)==="EUR"?c="€":(s==null?void 0:s.currency)==="USD"?c="$":(s==null?void 0:s.currency)==="GBP"&&(c="£"),G.jsxs("div",{className:"transaction-list",children:[G.jsx("h2",{className:"transaction-list-title",children:"Your Transactions"}),t.length===0?G.jsx("p",{className:"transaction-list-title",children:"No transactions found."}):G.jsx("ul",{className:"transaction-list-items",children:n.map(d=>{var p;return G.jsxs("li",{className:`transaction-item ${d.type}`,children:[G.jsx("span",{className:"transaction-type",children:d.type.toUpperCase()}),G.jsx("span",{className:"transaction-label",children:d.label}),G.jsxs("span",{className:"transaction-amount",children:[d.type==="expense"?"-":"+"," ",c,d.price]}),G.jsx("span",{className:"transaction-date",children:(p=d.createdAt)==null?void 0:p.toDate().toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})})]},d.id)})})]})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function BM(n,t,e){return(t=qM(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function IE(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,i)}return e}function it(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?IE(Object(e),!0).forEach(function(i){BM(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):IE(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}function FM(n,t){if(typeof n!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function qM(n){var t=FM(n,"string");return typeof t=="symbol"?t:t+""}const CE=()=>{};let tv={},LS={},US=null,zS={mark:CE,measure:CE};try{typeof window<"u"&&(tv=window),typeof document<"u"&&(LS=document),typeof MutationObserver<"u"&&(US=MutationObserver),typeof performance<"u"&&(zS=performance)}catch{}const{userAgent:OE=""}=tv.navigator||{},Aa=tv,se=LS,kE=US,$h=zS;Aa.document;const xi=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",jS=~OE.indexOf("MSIE")||~OE.indexOf("Trident/");var HM=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,GM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,BS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},$M={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},FS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],on="classic",dd="duotone",YM="sharp",KM="sharp-duotone",qS=[on,dd,YM,KM],QM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},XM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},WM=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ZM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},JM=["fak","fa-kit","fakd","fa-kit-duotone"],NE={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},t6=["kit"],e6={kit:{"fa-kit":"fak"}},n6=["fak","fakd"],r6={kit:{fak:"fa-kit"}},DE={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Yh={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},i6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],a6=["fak","fa-kit","fakd","fa-kit-duotone"],s6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},o6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},l6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ig={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},u6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Cg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...i6,...u6],c6=["solid","regular","light","thin","duotone","brands"],HS=[1,2,3,4,5,6,7,8,9,10],h6=HS.concat([11,12,13,14,15,16,17,18,19,20]),f6=[...Object.keys(l6),...c6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yh.GROUP,Yh.SWAP_OPACITY,Yh.PRIMARY,Yh.SECONDARY].concat(HS.map(n=>"".concat(n,"x"))).concat(h6.map(n=>"w-".concat(n))),d6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Si="___FONT_AWESOME___",Og=16,GS="fa",$S="svg-inline--fa",Ss="data-fa-i2svg",kg="data-fa-pseudo-element",p6="data-fa-pseudo-element-pending",ev="data-prefix",nv="data-icon",PE="fontawesome-i2svg",m6="async",g6=["HTML","HEAD","STYLE","SCRIPT"],YS=(()=>{try{return!0}catch{return!1}})();function fc(n){return new Proxy(n,{get(t,e){return e in t?t[e]:t[on]}})}const KS=it({},BS);KS[on]=it(it(it(it({},{"fa-duotone":"duotone"}),BS[on]),NE.kit),NE["kit-duotone"]);const y6=fc(KS),Ng=it({},ZM);Ng[on]=it(it(it(it({},{duotone:"fad"}),Ng[on]),DE.kit),DE["kit-duotone"]);const ME=fc(Ng),Dg=it({},Ig);Dg[on]=it(it({},Dg[on]),r6.kit);const rv=fc(Dg),Pg=it({},o6);Pg[on]=it(it({},Pg[on]),e6.kit);fc(Pg);const v6=HM,QS="fa-layers-text",b6=GM,_6=it({},QM);fc(_6);const E6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fm=$M,T6=[...t6,...f6],Mu=Aa.FontAwesomeConfig||{};function A6(n){var t=se.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function w6(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}se&&typeof se.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[e,i]=t;const s=w6(A6(e));s!=null&&(Mu[i]=s)});const XS={styleDefault:"solid",familyDefault:on,cssPrefix:GS,replacementClass:$S,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Mu.familyPrefix&&(Mu.cssPrefix=Mu.familyPrefix);const Qo=it(it({},XS),Mu);Qo.autoReplaceSvg||(Qo.observeMutations=!1);const gt={};Object.keys(XS).forEach(n=>{Object.defineProperty(gt,n,{enumerable:!0,set:function(t){Qo[n]=t,Vu.forEach(e=>e(gt))},get:function(){return Qo[n]}})});Object.defineProperty(gt,"familyPrefix",{enumerable:!0,set:function(n){Qo.cssPrefix=n,Vu.forEach(t=>t(gt))},get:function(){return Qo.cssPrefix}});Aa.FontAwesomeConfig=gt;const Vu=[];function S6(n){return Vu.push(n),()=>{Vu.splice(Vu.indexOf(n),1)}}const ia=Og,Nr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function R6(n){if(!n||!xi)return;const t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;const e=se.head.childNodes;let i=null;for(let s=e.length-1;s>-1;s--){const l=e[s],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(i=l)}return se.head.insertBefore(t,i),n}const x6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xu(){let n=12,t="";for(;n-- >0;)t+=x6[Math.random()*62|0];return t}function sl(n){const t=[];for(let e=(n||[]).length>>>0;e--;)t[e]=n[e];return t}function iv(n){return n.classList?sl(n.classList):(n.getAttribute("class")||"").split(" ").filter(t=>t)}function WS(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I6(n){return Object.keys(n||{}).reduce((t,e)=>t+"".concat(e,'="').concat(WS(n[e]),'" '),"").trim()}function pd(n){return Object.keys(n||{}).reduce((t,e)=>t+"".concat(e,": ").concat(n[e].trim(),";"),"")}function av(n){return n.size!==Nr.size||n.x!==Nr.x||n.y!==Nr.y||n.rotate!==Nr.rotate||n.flipX||n.flipY}function C6(n){let{transform:t,containerWidth:e,iconWidth:i}=n;const s={transform:"translate(".concat(e/2," 256)")},l="translate(".concat(t.x*32,", ").concat(t.y*32,") "),c="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),d="rotate(".concat(t.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:p,path:g}}function O6(n){let{transform:t,width:e=Og,height:i=Og,startCentered:s=!1}=n,l="";return s&&jS?l+="translate(".concat(t.x/ia-e/2,"em, ").concat(t.y/ia-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ia,"em), calc(-50% + ").concat(t.y/ia,"em)) "):l+="translate(".concat(t.x/ia,"em, ").concat(t.y/ia,"em) "),l+="scale(".concat(t.size/ia*(t.flipX?-1:1),", ").concat(t.size/ia*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var k6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function ZS(){const n=GS,t=$S,e=gt.cssPrefix,i=gt.replacementClass;let s=k6;if(e!==n||i!==t){const l=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(t),"g");s=s.replace(l,".".concat(e,"-")).replace(c,"--".concat(e,"-")).replace(d,".".concat(i))}return s}let VE=!1;function qm(){gt.autoAddCss&&!VE&&(R6(ZS()),VE=!0)}var N6={mixout(){return{dom:{css:ZS,insertCss:qm}}},hooks(){return{beforeDOMElementCreation(){qm()},beforeI2svg(){qm()}}}};const Ri=Aa||{};Ri[Si]||(Ri[Si]={});Ri[Si].styles||(Ri[Si].styles={});Ri[Si].hooks||(Ri[Si].hooks={});Ri[Si].shims||(Ri[Si].shims=[]);var Dr=Ri[Si];const JS=[],t2=function(){se.removeEventListener("DOMContentLoaded",t2),Lf=1,JS.map(n=>n())};let Lf=!1;xi&&(Lf=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Lf||se.addEventListener("DOMContentLoaded",t2));function D6(n){xi&&(Lf?setTimeout(n,0):JS.push(n))}function dc(n){const{tag:t,attributes:e={},children:i=[]}=n;return typeof n=="string"?WS(n):"<".concat(t," ").concat(I6(e),">").concat(i.map(dc).join(""),"</").concat(t,">")}function LE(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}var Hm=function(t,e,i,s){var l=Object.keys(t),c=l.length,d=e,p,g,v;for(i===void 0?(p=1,v=t[l[0]]):(p=0,v=i);p<c;p++)g=l[p],v=d(v,t[g],g,t);return v};function P6(n){const t=[];let e=0;const i=n.length;for(;e<i;){const s=n.charCodeAt(e++);if(s>=55296&&s<=56319&&e<i){const l=n.charCodeAt(e++);(l&64512)==56320?t.push(((s&1023)<<10)+(l&1023)+65536):(t.push(s),e--)}else t.push(s)}return t}function Mg(n){const t=P6(n);return t.length===1?t[0].toString(16):null}function M6(n,t){const e=n.length;let i=n.charCodeAt(t),s;return i>=55296&&i<=56319&&e>t+1&&(s=n.charCodeAt(t+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function UE(n){return Object.keys(n).reduce((t,e)=>{const i=n[e];return!!i.icon?t[i.iconName]=i.icon:t[e]=i,t},{})}function Vg(n,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=e,s=UE(t);typeof Dr.hooks.addPack=="function"&&!i?Dr.hooks.addPack(n,UE(t)):Dr.styles[n]=it(it({},Dr.styles[n]||{}),s),n==="fas"&&Vg("fa",t)}const{styles:Wu,shims:V6}=Dr,e2=Object.keys(rv),L6=e2.reduce((n,t)=>(n[t]=Object.keys(rv[t]),n),{});let sv=null,n2={},r2={},i2={},a2={},s2={};function U6(n){return~T6.indexOf(n)}function z6(n,t){const e=t.split("-"),i=e[0],s=e.slice(1).join("-");return i===n&&s!==""&&!U6(s)?s:null}const o2=()=>{const n=i=>Hm(Wu,(s,l,c)=>(s[c]=Hm(l,i,{}),s),{});n2=n((i,s,l)=>(s[3]&&(i[s[3]]=l),s[2]&&s[2].filter(d=>typeof d=="number").forEach(d=>{i[d.toString(16)]=l}),i)),r2=n((i,s,l)=>(i[l]=l,s[2]&&s[2].filter(d=>typeof d=="string").forEach(d=>{i[d]=l}),i)),s2=n((i,s,l)=>{const c=s[2];return i[l]=l,c.forEach(d=>{i[d]=l}),i});const t="far"in Wu||gt.autoFetchSvg,e=Hm(V6,(i,s)=>{const l=s[0];let c=s[1];const d=s[2];return c==="far"&&!t&&(c="fas"),typeof l=="string"&&(i.names[l]={prefix:c,iconName:d}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:c,iconName:d}),i},{names:{},unicodes:{}});i2=e.names,a2=e.unicodes,sv=md(gt.styleDefault,{family:gt.familyDefault})};S6(n=>{sv=md(n.styleDefault,{family:gt.familyDefault})});o2();function ov(n,t){return(n2[n]||{})[t]}function j6(n,t){return(r2[n]||{})[t]}function gs(n,t){return(s2[n]||{})[t]}function l2(n){return i2[n]||{prefix:null,iconName:null}}function B6(n){const t=a2[n],e=ov("fas",n);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function wa(){return sv}const u2=()=>({prefix:null,iconName:null,rest:[]});function F6(n){let t=on;const e=e2.reduce((i,s)=>(i[s]="".concat(gt.cssPrefix,"-").concat(s),i),{});return qS.forEach(i=>{(n.includes(e[i])||n.some(s=>L6[i].includes(s)))&&(t=i)}),t}function md(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:e=on}=t,i=y6[e][n];if(e===dd&&!n)return"fad";const s=ME[e][n]||ME[e][i],l=n in Dr.styles?n:null;return s||l||null}function q6(n){let t=[],e=null;return n.forEach(i=>{const s=z6(gt.cssPrefix,i);s?e=s:i&&t.push(i)}),{iconName:e,rest:t}}function zE(n){return n.sort().filter((t,e,i)=>i.indexOf(t)===e)}function gd(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:e=!1}=t;let i=null;const s=Cg.concat(a6),l=zE(n.filter(A=>s.includes(A))),c=zE(n.filter(A=>!Cg.includes(A))),d=l.filter(A=>(i=A,!FS.includes(A))),[p=null]=d,g=F6(l),v=it(it({},q6(c)),{},{prefix:md(p,{family:g})});return it(it(it({},v),Y6({values:n,family:g,styles:Wu,config:gt,canonical:v,givenPrefix:i})),H6(e,i,v))}function H6(n,t,e){let{prefix:i,iconName:s}=e;if(n||!i||!s)return{prefix:i,iconName:s};const l=t==="fa"?l2(s):{},c=gs(i,s);return s=l.iconName||c||s,i=l.prefix||i,i==="far"&&!Wu.far&&Wu.fas&&!gt.autoFetchSvg&&(i="fas"),{prefix:i,iconName:s}}const G6=qS.filter(n=>n!==on||n!==dd),$6=Object.keys(Ig).filter(n=>n!==on).map(n=>Object.keys(Ig[n])).flat();function Y6(n){const{values:t,family:e,canonical:i,givenPrefix:s="",styles:l={},config:c={}}=n,d=e===dd,p=t.includes("fa-duotone")||t.includes("fad"),g=c.familyDefault==="duotone",v=i.prefix==="fad"||i.prefix==="fa-duotone";if(!d&&(p||g||v)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&G6.includes(e)&&(Object.keys(l).find(E=>$6.includes(E))||c.autoFetchSvg)){const E=WM.get(e).defaultShortPrefixId;i.prefix=E,i.iconName=gs(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||s==="fa")&&(i.prefix=wa()||"fas"),i}class K6{constructor(){this.definitions={}}add(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];const s=e.reduce(this._pullDefinitions,{});Object.keys(s).forEach(l=>{this.definitions[l]=it(it({},this.definitions[l]||{}),s[l]),Vg(l,s[l]);const c=rv[on][l];c&&Vg(c,s[l]),o2()})}reset(){this.definitions={}}_pullDefinitions(t,e){const i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(s=>{const{prefix:l,iconName:c,icon:d}=i[s],p=d[2];t[l]||(t[l]={}),p.length>0&&p.forEach(g=>{typeof g=="string"&&(t[l][g]=d)}),t[l][c]=d}),t}}let jE=[],Mo={};const Bo={},Q6=Object.keys(Bo);function X6(n,t){let{mixoutsTo:e}=t;return jE=n,Mo={},Object.keys(Bo).forEach(i=>{Q6.indexOf(i)===-1&&delete Bo[i]}),jE.forEach(i=>{const s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(l=>{typeof s[l]=="function"&&(e[l]=s[l]),typeof s[l]=="object"&&Object.keys(s[l]).forEach(c=>{e[l]||(e[l]={}),e[l][c]=s[l][c]})}),i.hooks){const l=i.hooks();Object.keys(l).forEach(c=>{Mo[c]||(Mo[c]=[]),Mo[c].push(l[c])})}i.provides&&i.provides(Bo)}),e}function Lg(n,t){for(var e=arguments.length,i=new Array(e>2?e-2:0),s=2;s<e;s++)i[s-2]=arguments[s];return(Mo[n]||[]).forEach(c=>{t=c.apply(null,[t,...i])}),t}function Rs(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];(Mo[n]||[]).forEach(l=>{l.apply(null,e)})}function Sa(){const n=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bo[n]?Bo[n].apply(null,t):void 0}function Ug(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:t}=n;const e=n.prefix||wa();if(t)return t=gs(e,t)||t,LE(c2.definitions,e,t)||LE(Dr.styles,e,t)}const c2=new K6,W6=()=>{gt.autoReplaceSvg=!1,gt.observeMutations=!1,Rs("noAuto")},Z6={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xi?(Rs("beforeI2svg",n),Sa("pseudoElements2svg",n),Sa("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=n;gt.autoReplaceSvg===!1&&(gt.autoReplaceSvg=!0),gt.observeMutations=!0,D6(()=>{t3({autoReplaceSvgRoot:t}),Rs("watch",n)})}},J6={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:gs(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=md(n[0]);return{prefix:e,iconName:gs(e,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(gt.cssPrefix,"-"))>-1||n.match(v6))){const t=gd(n.split(" "),{skipLookups:!0});return{prefix:t.prefix||wa(),iconName:gs(t.prefix,t.iconName)||t.iconName}}if(typeof n=="string"){const t=wa();return{prefix:t,iconName:gs(t,n)||n}}}},Nn={noAuto:W6,config:gt,dom:Z6,parse:J6,library:c2,findIconDefinition:Ug,toHtml:dc},t3=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=se}=n;(Object.keys(Dr.styles).length>0||gt.autoFetchSvg)&&xi&&gt.autoReplaceSvg&&Nn.dom.i2svg({node:t})};function yd(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(e=>dc(e))}}),Object.defineProperty(n,"node",{get:function(){if(!xi)return;const e=se.createElement("div");return e.innerHTML=n.html,e.children}}),n}function e3(n){let{children:t,main:e,mask:i,attributes:s,styles:l,transform:c}=n;if(av(c)&&e.found&&!i.found){const{width:d,height:p}=e,g={x:d/p/2,y:.5};s.style=pd(it(it({},l),{},{"transform-origin":"".concat(g.x+c.x/16,"em ").concat(g.y+c.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function n3(n){let{prefix:t,iconName:e,children:i,attributes:s,symbol:l}=n;const c=l===!0?"".concat(t,"-").concat(gt.cssPrefix,"-").concat(e):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:it(it({},s),{},{id:c}),children:i}]}]}function lv(n){const{icons:{main:t,mask:e},prefix:i,iconName:s,transform:l,symbol:c,title:d,maskId:p,titleId:g,extra:v,watchable:A=!1}=n,{width:E,height:k}=e.found?e:t,x=n6.includes(i),C=[gt.replacementClass,s?"".concat(gt.cssPrefix,"-").concat(s):""].filter(st=>v.classes.indexOf(st)===-1).filter(st=>st!==""||!!st).concat(v.classes).join(" ");let P={children:[],attributes:it(it({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:C,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})};const Y=x&&!~v.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};A&&(P.attributes[Ss]=""),d&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(g||Xu())},children:[d]}),delete P.attributes.title);const Q=it(it({},P),{},{prefix:i,iconName:s,main:t,mask:e,maskId:p,transform:l,symbol:c,styles:it(it({},Y),v.styles)}),{children:W,attributes:at}=e.found&&t.found?Sa("generateAbstractMask",Q)||{children:[],attributes:{}}:Sa("generateAbstractIcon",Q)||{children:[],attributes:{}};return Q.children=W,Q.attributes=at,c?n3(Q):e3(Q)}function BE(n){const{content:t,width:e,height:i,transform:s,title:l,extra:c,watchable:d=!1}=n,p=it(it(it({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});d&&(p[Ss]="");const g=it({},c.styles);av(s)&&(g.transform=O6({transform:s,startCentered:!0,width:e,height:i}),g["-webkit-transform"]=g.transform);const v=pd(g);v.length>0&&(p.style=v);const A=[];return A.push({tag:"span",attributes:p,children:[t]}),l&&A.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),A}function r3(n){const{content:t,title:e,extra:i}=n,s=it(it(it({},i.attributes),e?{title:e}:{}),{},{class:i.classes.join(" ")}),l=pd(i.styles);l.length>0&&(s.style=l);const c=[];return c.push({tag:"span",attributes:s,children:[t]}),e&&c.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),c}const{styles:Gm}=Dr;function zg(n){const t=n[0],e=n[1],[i]=n.slice(4);let s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(gt.cssPrefix,"-").concat(Fm.GROUP)},children:[{tag:"path",attributes:{class:"".concat(gt.cssPrefix,"-").concat(Fm.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(gt.cssPrefix,"-").concat(Fm.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:e,icon:s}}const i3={found:!1,width:512,height:512};function a3(n,t){!YS&&!gt.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function jg(n,t){let e=t;return t==="fa"&&gt.styleDefault!==null&&(t=wa()),new Promise((i,s)=>{if(e==="fa"){const l=l2(n)||{};n=l.iconName||n,t=l.prefix||t}if(n&&t&&Gm[t]&&Gm[t][n]){const l=Gm[t][n];return i(zg(l))}a3(n,t),i(it(it({},i3),{},{icon:gt.showMissingIcons&&n?Sa("missingIconAbstract")||{}:{}}))})}const FE=()=>{},Bg=gt.measurePerformance&&$h&&$h.mark&&$h.measure?$h:{mark:FE,measure:FE},Su='FA "6.7.2"',s3=n=>(Bg.mark("".concat(Su," ").concat(n," begins")),()=>h2(n)),h2=n=>{Bg.mark("".concat(Su," ").concat(n," ends")),Bg.measure("".concat(Su," ").concat(n),"".concat(Su," ").concat(n," begins"),"".concat(Su," ").concat(n," ends"))};var uv={begin:s3,end:h2};const cf=()=>{};function qE(n){return typeof(n.getAttribute?n.getAttribute(Ss):null)=="string"}function o3(n){const t=n.getAttribute?n.getAttribute(ev):null,e=n.getAttribute?n.getAttribute(nv):null;return t&&e}function l3(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(gt.replacementClass)}function u3(){return gt.autoReplaceSvg===!0?hf.replace:hf[gt.autoReplaceSvg]||hf.replace}function c3(n){return se.createElementNS("http://www.w3.org/2000/svg",n)}function h3(n){return se.createElement(n)}function f2(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:e=n.tag==="svg"?c3:h3}=t;if(typeof n=="string")return se.createTextNode(n);const i=e(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){i.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){i.appendChild(f2(l,{ceFn:e}))}),i}function f3(n){let t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const hf={replace:function(n){const t=n[0];if(t.parentNode)if(n[1].forEach(e=>{t.parentNode.insertBefore(f2(e),t)}),t.getAttribute(Ss)===null&&gt.keepOriginalSource){let e=se.createComment(f3(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(n){const t=n[0],e=n[1];if(~iv(t).indexOf(gt.replacementClass))return hf.replace(n);const i=new RegExp("".concat(gt.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){const l=e[0].attributes.class.split(" ").reduce((c,d)=>(d===gt.replacementClass||d.match(i)?c.toSvg.push(d):c.toNode.push(d),c),{toNode:[],toSvg:[]});e[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",l.toNode.join(" "))}const s=e.map(l=>dc(l)).join(`
`);t.setAttribute(Ss,""),t.innerHTML=s}};function HE(n){n()}function d2(n,t){const e=typeof t=="function"?t:cf;if(n.length===0)e();else{let i=HE;gt.mutateApproach===m6&&(i=Aa.requestAnimationFrame||HE),i(()=>{const s=u3(),l=uv.begin("mutate");n.map(s),l(),e()})}}let cv=!1;function p2(){cv=!0}function Fg(){cv=!1}let Uf=null;function GE(n){if(!kE||!gt.observeMutations)return;const{treeCallback:t=cf,nodeCallback:e=cf,pseudoElementsCallback:i=cf,observeMutationsRoot:s=se}=n;Uf=new kE(l=>{if(cv)return;const c=wa();sl(l).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!qE(d.addedNodes[0])&&(gt.searchPseudoElements&&i(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&gt.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&qE(d.target)&&~E6.indexOf(d.attributeName))if(d.attributeName==="class"&&o3(d.target)){const{prefix:p,iconName:g}=gd(iv(d.target));d.target.setAttribute(ev,p||c),g&&d.target.setAttribute(nv,g)}else l3(d.target)&&e(d.target)})}),xi&&Uf.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function d3(){Uf&&Uf.disconnect()}function p3(n){const t=n.getAttribute("style");let e=[];return t&&(e=t.split(";").reduce((i,s)=>{const l=s.split(":"),c=l[0],d=l.slice(1);return c&&d.length>0&&(i[c]=d.join(":").trim()),i},{})),e}function m3(n){const t=n.getAttribute("data-prefix"),e=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let s=gd(iv(n));return s.prefix||(s.prefix=wa()),t&&e&&(s.prefix=t,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=j6(s.prefix,n.innerText)||ov(s.prefix,Mg(n.innerText))),!s.iconName&&gt.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=n.firstChild.data)),s}function g3(n){const t=sl(n.attributes).reduce((s,l)=>(s.name!=="class"&&s.name!=="style"&&(s[l.name]=l.value),s),{}),e=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return gt.autoA11y&&(e?t["aria-labelledby"]="".concat(gt.replacementClass,"-title-").concat(i||Xu()):(t["aria-hidden"]="true",t.focusable="false")),t}function y3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Nr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $E(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:e,prefix:i,rest:s}=m3(n),l=g3(n),c=Lg("parseNodeAttributes",{},n);let d=t.styleParser?p3(n):[];return it({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:Nr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:d,attributes:l}},c)}const{styles:v3}=Dr;function m2(n){const t=gt.autoReplaceSvg==="nest"?$E(n,{styleParser:!1}):$E(n);return~t.extra.classes.indexOf(QS)?Sa("generateLayersText",n,t):Sa("generateSvgReplacementMutation",n,t)}function b3(){return[...JM,...Cg]}function YE(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xi)return Promise.resolve();const e=se.documentElement.classList,i=v=>e.add("".concat(PE,"-").concat(v)),s=v=>e.remove("".concat(PE,"-").concat(v)),l=gt.autoFetchSvg?b3():FS.concat(Object.keys(v3));l.includes("fa")||l.push("fa");const c=[".".concat(QS,":not([").concat(Ss,"])")].concat(l.map(v=>".".concat(v,":not([").concat(Ss,"])"))).join(", ");if(c.length===0)return Promise.resolve();let d=[];try{d=sl(n.querySelectorAll(c))}catch{}if(d.length>0)i("pending"),s("complete");else return Promise.resolve();const p=uv.begin("onTree"),g=d.reduce((v,A)=>{try{const E=m2(A);E&&v.push(E)}catch(E){YS||E.name==="MissingIcon"&&console.error(E)}return v},[]);return new Promise((v,A)=>{Promise.all(g).then(E=>{d2(E,()=>{i("active"),i("complete"),s("pending"),typeof t=="function"&&t(),p(),v()})}).catch(E=>{p(),A(E)})})}function _3(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;m2(n).then(e=>{e&&d2([e],t)})}function E3(n){return function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(t||{}).icon?t:Ug(t||{});let{mask:s}=e;return s&&(s=(s||{}).icon?s:Ug(s||{})),n(i,it(it({},e),{},{mask:s}))}}const T3=function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=Nr,symbol:i=!1,mask:s=null,maskId:l=null,title:c=null,titleId:d=null,classes:p=[],attributes:g={},styles:v={}}=t;if(!n)return;const{prefix:A,iconName:E,icon:k}=n;return yd(it({type:"icon"},n),()=>(Rs("beforeDOMElementCreation",{iconDefinition:n,params:t}),gt.autoA11y&&(c?g["aria-labelledby"]="".concat(gt.replacementClass,"-title-").concat(d||Xu()):(g["aria-hidden"]="true",g.focusable="false")),lv({icons:{main:zg(k),mask:s?zg(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:E,transform:it(it({},Nr),e),symbol:i,title:c,maskId:l,titleId:d,extra:{attributes:g,styles:v,classes:p}})))};var A3={mixout(){return{icon:E3(T3)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=YE,n.nodeCallback=_3,n}}},provides(n){n.i2svg=function(t){const{node:e=se,callback:i=()=>{}}=t;return YE(e,i)},n.generateSvgReplacementMutation=function(t,e){const{iconName:i,title:s,titleId:l,prefix:c,transform:d,symbol:p,mask:g,maskId:v,extra:A}=e;return new Promise((E,k)=>{Promise.all([jg(i,c),g.iconName?jg(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[C,P]=x;E([t,lv({icons:{main:C,mask:P},prefix:c,iconName:i,transform:d,symbol:p,maskId:v,title:s,titleId:l,extra:A,watchable:!0})])}).catch(k)})},n.generateAbstractIcon=function(t){let{children:e,attributes:i,main:s,transform:l,styles:c}=t;const d=pd(c);d.length>0&&(i.style=d);let p;return av(l)&&(p=Sa("generateAbstractTransformGrouping",{main:s,transform:l,containerWidth:s.width,iconWidth:s.width})),e.push(p||s.icon),{children:e,attributes:i}}}},w3={mixout(){return{layer(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:e=[]}=t;return yd({type:"layer"},()=>{Rs("beforeDOMElementCreation",{assembler:n,params:t});let i=[];return n(s=>{Array.isArray(s)?s.map(l=>{i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(gt.cssPrefix,"-layers"),...e].join(" ")},children:i}]})}}}},S3={mixout(){return{counter(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:e=null,classes:i=[],attributes:s={},styles:l={}}=t;return yd({type:"counter",content:n},()=>(Rs("beforeDOMElementCreation",{content:n,params:t}),r3({content:n.toString(),title:e,extra:{attributes:s,styles:l,classes:["".concat(gt.cssPrefix,"-layers-counter"),...i]}})))}}}},R3={mixout(){return{text(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=Nr,title:i=null,classes:s=[],attributes:l={},styles:c={}}=t;return yd({type:"text",content:n},()=>(Rs("beforeDOMElementCreation",{content:n,params:t}),BE({content:n,transform:it(it({},Nr),e),title:i,extra:{attributes:l,styles:c,classes:["".concat(gt.cssPrefix,"-layers-text"),...s]}})))}}},provides(n){n.generateLayersText=function(t,e){const{title:i,transform:s,extra:l}=e;let c=null,d=null;if(jS){const p=parseInt(getComputedStyle(t).fontSize,10),g=t.getBoundingClientRect();c=g.width/p,d=g.height/p}return gt.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([t,BE({content:t.innerHTML,width:c,height:d,transform:s,title:i,extra:l,watchable:!0})])}}};const x3=new RegExp('"',"ug"),KE=[1105920,1112319],QE=it(it(it(it({},{FontAwesome:{normal:"fas",400:"fas"}}),XM),d6),s6),qg=Object.keys(QE).reduce((n,t)=>(n[t.toLowerCase()]=QE[t],n),{}),I3=Object.keys(qg).reduce((n,t)=>{const e=qg[t];return n[t]=e[900]||[...Object.entries(e)][0][1],n},{});function C3(n){const t=n.replace(x3,""),e=M6(t,0),i=e>=KE[0]&&e<=KE[1],s=t.length===2?t[0]===t[1]:!1;return{value:Mg(s?t[0]:t),isSecondary:i||s}}function O3(n,t){const e=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),s=isNaN(i)?"normal":i;return(qg[e]||{})[s]||I3[e]}function XE(n,t){const e="".concat(p6).concat(t.replace(":","-"));return new Promise((i,s)=>{if(n.getAttribute(e)!==null)return i();const c=sl(n.children).filter(E=>E.getAttribute(kg)===t)[0],d=Aa.getComputedStyle(n,t),p=d.getPropertyValue("font-family"),g=p.match(b6),v=d.getPropertyValue("font-weight"),A=d.getPropertyValue("content");if(c&&!g)return n.removeChild(c),i();if(g&&A!=="none"&&A!==""){const E=d.getPropertyValue("content");let k=O3(p,v);const{value:x,isSecondary:C}=C3(E),P=g[0].startsWith("FontAwesome");let Y=ov(k,x),Q=Y;if(P){const W=B6(x);W.iconName&&W.prefix&&(Y=W.iconName,k=W.prefix)}if(Y&&!C&&(!c||c.getAttribute(ev)!==k||c.getAttribute(nv)!==Q)){n.setAttribute(e,Q),c&&n.removeChild(c);const W=y3(),{extra:at}=W;at.attributes[kg]=t,jg(Y,k).then(st=>{const mt=lv(it(it({},W),{},{icons:{main:st,mask:u2()},prefix:k,iconName:Q,extra:at,watchable:!0})),D=se.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?n.insertBefore(D,n.firstChild):n.appendChild(D),D.outerHTML=mt.map(S=>dc(S)).join(`
`),n.removeAttribute(e),i()}).catch(s)}else i()}else i()})}function k3(n){return Promise.all([XE(n,"::before"),XE(n,"::after")])}function N3(n){return n.parentNode!==document.head&&!~g6.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(kg)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function WE(n){if(xi)return new Promise((t,e)=>{const i=sl(n.querySelectorAll("*")).filter(N3).map(k3),s=uv.begin("searchPseudoElements");p2(),Promise.all(i).then(()=>{s(),Fg(),t()}).catch(()=>{s(),Fg(),e()})})}var D3={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=WE,n}}},provides(n){n.pseudoElements2svg=function(t){const{node:e=se}=t;gt.searchPseudoElements&&WE(e)}}};let ZE=!1;var P3={mixout(){return{dom:{unwatch(){p2(),ZE=!0}}}},hooks(){return{bootstrap(){GE(Lg("mutationObserverCallbacks",{}))},noAuto(){d3()},watch(n){const{observeMutationsRoot:t}=n;ZE?Fg():GE(Lg("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const JE=n=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((e,i)=>{const s=i.toLowerCase().split("-"),l=s[0];let c=s.slice(1).join("-");if(l&&c==="h")return e.flipX=!0,e;if(l&&c==="v")return e.flipY=!0,e;if(c=parseFloat(c),isNaN(c))return e;switch(l){case"grow":e.size=e.size+c;break;case"shrink":e.size=e.size-c;break;case"left":e.x=e.x-c;break;case"right":e.x=e.x+c;break;case"up":e.y=e.y-c;break;case"down":e.y=e.y+c;break;case"rotate":e.rotate=e.rotate+c;break}return e},t)};var M3={mixout(){return{parse:{transform:n=>JE(n)}}},hooks(){return{parseNodeAttributes(n,t){const e=t.getAttribute("data-fa-transform");return e&&(n.transform=JE(e)),n}}},provides(n){n.generateAbstractTransformGrouping=function(t){let{main:e,transform:i,containerWidth:s,iconWidth:l}=t;const c={transform:"translate(".concat(s/2," 256)")},d="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),g="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(d," ").concat(p," ").concat(g)},A={transform:"translate(".concat(l/2*-1," -256)")},E={outer:c,inner:v,path:A};return{tag:"g",attributes:it({},E.outer),children:[{tag:"g",attributes:it({},E.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:it(it({},e.icon.attributes),E.path)}]}]}}}};const $m={x:0,y:0,width:"100%",height:"100%"};function tT(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function V3(n){return n.tag==="g"?n.children:[n]}var L3={hooks(){return{parseNodeAttributes(n,t){const e=t.getAttribute("data-fa-mask"),i=e?gd(e.split(" ").map(s=>s.trim())):u2();return i.prefix||(i.prefix=wa()),n.mask=i,n.maskId=t.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(t){let{children:e,attributes:i,main:s,mask:l,maskId:c,transform:d}=t;const{width:p,icon:g}=s,{width:v,icon:A}=l,E=C6({transform:d,containerWidth:v,iconWidth:p}),k={tag:"rect",attributes:it(it({},$m),{},{fill:"white"})},x=g.children?{children:g.children.map(tT)}:{},C={tag:"g",attributes:it({},E.inner),children:[tT(it({tag:g.tag,attributes:it(it({},g.attributes),E.path)},x))]},P={tag:"g",attributes:it({},E.outer),children:[C]},Y="mask-".concat(c||Xu()),Q="clip-".concat(c||Xu()),W={tag:"mask",attributes:it(it({},$m),{},{id:Y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,P]},at={tag:"defs",children:[{tag:"clipPath",attributes:{id:Q},children:V3(A)},W]};return e.push(at,{tag:"rect",attributes:it({fill:"currentColor","clip-path":"url(#".concat(Q,")"),mask:"url(#".concat(Y,")")},$m)}),{children:e,attributes:i}}}},U3={provides(n){let t=!1;Aa.matchMedia&&(t=Aa.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const e=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:it(it({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=it(it({},s),{},{attributeName:"opacity"}),c={tag:"circle",attributes:it(it({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||c.children.push({tag:"animate",attributes:it(it({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:it(it({},l),{},{values:"1;0;1;1;0;1;"})}),e.push(c),e.push({tag:"path",attributes:it(it({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:it(it({},l),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:it(it({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:it(it({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},z3={hooks(){return{parseNodeAttributes(n,t){const e=t.getAttribute("data-fa-symbol"),i=e===null?!1:e===""?!0:e;return n.symbol=i,n}}}},j3=[N6,A3,w3,S3,R3,D3,P3,M3,L3,U3,z3];X6(j3,{mixoutsTo:Nn});Nn.noAuto;Nn.config;Nn.library;Nn.dom;const Hg=Nn.parse;Nn.findIconDefinition;Nn.toHtml;const B3=Nn.icon;Nn.layer;Nn.text;Nn.counter;var Ym={exports:{}},Km,eT;function F3(){if(eT)return Km;eT=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Km=n,Km}var Qm,nT;function q3(){if(nT)return Qm;nT=1;var n=F3();function t(){}function e(){}return e.resetWarningCache=t,Qm=function(){function i(c,d,p,g,v,A){if(A!==n){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}i.isRequired=i;function s(){return i}var l={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:s,element:i,elementType:i,instanceOf:s,node:i,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:e,resetWarningCache:t};return l.PropTypes=l,l},Qm}var rT;function H3(){return rT||(rT=1,Ym.exports=q3()()),Ym.exports}var G3=H3();const Lt=pT(G3);function iT(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,i)}return e}function kr(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?iT(Object(e),!0).forEach(function(i){Vo(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):iT(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}function zf(n){"@babel/helpers - typeof";return zf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zf(n)}function Vo(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function $3(n,t){if(n==null)return{};var e={},i=Object.keys(n),s,l;for(l=0;l<i.length;l++)s=i[l],!(t.indexOf(s)>=0)&&(e[s]=n[s]);return e}function Y3(n,t){if(n==null)return{};var e=$3(n,t),i,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(s=0;s<l.length;s++)i=l[s],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(e[i]=n[i])}return e}function Gg(n){return K3(n)||Q3(n)||X3(n)||W3()}function K3(n){if(Array.isArray(n))return $g(n)}function Q3(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function X3(n,t){if(n){if(typeof n=="string")return $g(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $g(n,t)}}function $g(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function W3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z3(n){var t,e=n.beat,i=n.fade,s=n.beatFade,l=n.bounce,c=n.shake,d=n.flash,p=n.spin,g=n.spinPulse,v=n.spinReverse,A=n.pulse,E=n.fixedWidth,k=n.inverse,x=n.border,C=n.listItem,P=n.flip,Y=n.size,Q=n.rotation,W=n.pull,at=(t={"fa-beat":e,"fa-fade":i,"fa-beat-fade":s,"fa-bounce":l,"fa-shake":c,"fa-flash":d,"fa-spin":p,"fa-spin-reverse":v,"fa-spin-pulse":g,"fa-pulse":A,"fa-fw":E,"fa-inverse":k,"fa-border":x,"fa-li":C,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},Vo(t,"fa-".concat(Y),typeof Y<"u"&&Y!==null),Vo(t,"fa-rotate-".concat(Q),typeof Q<"u"&&Q!==null&&Q!==0),Vo(t,"fa-pull-".concat(W),typeof W<"u"&&W!==null),Vo(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(at).map(function(st){return at[st]?st:null}).filter(function(st){return st})}function J3(n){return n=n-0,n===n}function g2(n){return J3(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(t,e){return e?e.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var t9=["style"];function e9(n){return n.charAt(0).toUpperCase()+n.slice(1)}function n9(n){return n.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,e){var i=e.indexOf(":"),s=g2(e.slice(0,i)),l=e.slice(i+1).trim();return s.startsWith("webkit")?t[e9(s)]=l:t[s]=l,t},{})}function y2(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(p){return y2(n,p)}),s=Object.keys(t.attributes||{}).reduce(function(p,g){var v=t.attributes[g];switch(g){case"class":p.attrs.className=v,delete t.attributes.class;break;case"style":p.attrs.style=n9(v);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=v:p.attrs[g2(g)]=v}return p},{attrs:{}}),l=e.style,c=l===void 0?{}:l,d=Y3(e,t9);return s.attrs.style=kr(kr({},s.attrs.style),c),n.apply(void 0,[t.tag,kr(kr({},s.attrs),d)].concat(Gg(i)))}var v2=!1;try{v2=!0}catch{}function r9(){if(!v2&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function aT(n){if(n&&zf(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Hg.icon)return Hg.icon(n);if(n===null)return null;if(n&&zf(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Xm(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Vo({},n,t):{}}var sT={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Zu=Ie.forwardRef(function(n,t){var e=kr(kr({},sT),n),i=e.icon,s=e.mask,l=e.symbol,c=e.className,d=e.title,p=e.titleId,g=e.maskId,v=aT(i),A=Xm("classes",[].concat(Gg(Z3(e)),Gg((c||"").split(" ")))),E=Xm("transform",typeof e.transform=="string"?Hg.transform(e.transform):e.transform),k=Xm("mask",aT(s)),x=B3(v,kr(kr(kr(kr({},A),E),k),{},{symbol:l,title:d,titleId:p,maskId:g}));if(!x)return r9("Could not find icon",v),null;var C=x.abstract,P={ref:t};return Object.keys(e).forEach(function(Y){sT.hasOwnProperty(Y)||(P[Y]=e[Y])}),i9(C[0],P)});Zu.displayName="FontAwesomeIcon";Zu.propTypes={beat:Lt.bool,border:Lt.bool,beatFade:Lt.bool,bounce:Lt.bool,className:Lt.string,fade:Lt.bool,flash:Lt.bool,mask:Lt.oneOfType([Lt.object,Lt.array,Lt.string]),maskId:Lt.string,fixedWidth:Lt.bool,inverse:Lt.bool,flip:Lt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Lt.oneOfType([Lt.object,Lt.array,Lt.string]),listItem:Lt.bool,pull:Lt.oneOf(["right","left"]),pulse:Lt.bool,rotation:Lt.oneOf([0,90,180,270]),shake:Lt.bool,size:Lt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Lt.bool,spinPulse:Lt.bool,spinReverse:Lt.bool,symbol:Lt.oneOfType([Lt.bool,Lt.string]),title:Lt.string,titleId:Lt.string,transform:Lt.oneOfType([Lt.string,Lt.object]),swapOpacity:Lt.bool};var i9=y2.bind(null,Ie.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const a9={prefix:"fas",iconName:"gauge",icon:[512,512,["dashboard","gauge-med","tachometer-alt-average"],"f624","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},oT={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]};function s9({onSalaryChange:n}){const[t,e]=q.useState(""),i=l=>{const c=Number(l.target.value);e(c)},s=async()=>{if(!t||isNaN(t))return;const l={monthlySalary:Number(t),createdAt:Te.now(),uid:qe.currentUser.uid,email:qe.currentUser.email};try{const c=await _S(As(nr,"monthly_salary"),{monthlySalary:Number(t),createdAt:Te.now(),uid:qe.currentUser.uid,email:qe.currentUser.email});console.log("Monthly Salary added:",c.id),n&&n(d=>[...d,l])}catch(c){console.error("Error adding Monthly Salary:",c)}};return G.jsx("input",{className:"month-input",type:"number",name:"Month",value:t,onChange:i,onBlur:s,min:0})}function o9(){const[n,t]=q.useState(!1),[e,i]=q.useState(!1),[s,l]=q.useState([]),[c,d]=q.useState([]),{currentUser:p}=ws(),g=async()=>{if(!p)return;const ut=$u(As(nr,"expense"),Yu("uid","==",p.uid)),N=(await Ku(ut)).docs.map(Z=>({id:Z.id,...Z.data()}));d(N)};q.useEffect(()=>{g()},[p]);const v=async()=>{if(!p)return;const ut=$u(As(nr,"monthly_salary"),Yu("uid","==",p.uid)),N=(await Ku(ut)).docs.map(Z=>({id:Z.id,...Z.data()}));l(N)};q.useEffect(()=>{v()},[p]);const A=s.filter(ut=>ut.uid===p.uid).sort((ut,Rt)=>Rt.createdAt.toMillis()-ut.createdAt.toMillis())[0],E=(A==null?void 0:A.monthlySalary)||0,k=c.filter(ut=>ut.type==="income"&&ut.price!==void 0),x=c.filter(ut=>ut.type==="expense"&&ut.price!==void 0),C=k.reduce((ut,Rt)=>ut+Rt.price,0),P=x.reduce((ut,Rt)=>ut+Rt.price,0),Y=C-P,Q=E,W=Q*.5,at=Q*.3,st=Q*.2,{logout:mt}=ws(),[D,S]=q.useState(""),R=al();async function M(){S("");try{await mt(),R("/")}catch{S("FAILED TO LOGOUT")}}function L(){R("/settings")}const[U,O]=q.useState(null);q.useEffect(()=>{(async()=>{const Rt=await Jy();Rt&&O(Rt)})()},[]);let oe=new Date().toLocaleTimeString();const[ne,H]=q.useState(oe);return setInterval(()=>{oe=new Date().toLocaleTimeString(),H(oe)}),G.jsxs("div",{className:"dashboard-container",children:[G.jsxs("nav",{className:"nav-bar",children:[G.jsx("div",{className:"nav-bar-left",children:G.jsx("h1",{className:"nav-bar-tittle",children:"BROKLESS"})}),G.jsx("h1",{children:ne}),G.jsxs("div",{className:"nav-bar-right",children:[G.jsx("button",{varient:"link",className:"nav-bar-settings",onClick:L,children:U!=null&&U.image?U.image&&G.jsx("img",{className:"nav-bar-settings-icon",src:U.image,alt:`${U.name}'s profile`,style:{width:"50px",height:"50px",borderRadius:"50%",objectFit:"cover",margin:"auto"}}):G.jsx(Zu,{className:"nav-bar-settings-icon",icon:oT})}),G.jsxs("button",{variant:"link",onClick:M,className:"nav-bar-logout",children:["LOG OUT"," "]})]})]}),G.jsxs("div",{className:"main-info",children:[G.jsxs("div",{className:"main-info-row",children:[G.jsxs("div",{className:"main-info-column",children:[G.jsx("h2",{className:"main-info-tittle",children:"INCOME "}),G.jsxs("h2",{className:"main-info-subtitle",children:[C," EUR "]})]}),G.jsxs("div",{className:"main-info-column",children:[G.jsx("h2",{className:"main-info-tittle",children:"BALANCE "}),G.jsxs("h2",{className:"main-info-subtitle",children:[Y," EUR "]})]}),G.jsxs("div",{className:"main-info-column",children:[G.jsx("h2",{className:"main-info-tittle",children:"EXPENSE "}),G.jsxs("h2",{className:"main-info-subtitle",children:[P," EUR "]})]})]}),G.jsxs("div",{className:"main-info-month-box",children:[G.jsx("h2",{className:"main-info-month-tittle",children:"THIS MONTH"}),G.jsx("button",{className:"main-info-month-btn",onClick:()=>i(!e),children:G.jsx(Zu,{className:"main-info-month-icon",icon:oT})})]}),G.jsx("div",{className:"main-info-month-box-2",children:e?G.jsx(s9,{onSalaryChange:l,className:"monthly-input"}):null}),G.jsxs("div",{className:"main-info-row ",children:[G.jsxs("div",{className:"main-info-column",children:[G.jsx("h2",{className:"main-info-tittle",children:"WANTS "}),G.jsxs("h2",{className:"main-info-subtitle",children:[at," EUR "]})]}),G.jsxs("div",{className:"main-info-column",children:[G.jsx("h2",{className:"main-info-tittle",children:"NEEDS "}),G.jsxs("h2",{className:"main-info-subtitle",children:[W," EUR "]}),G.jsx("progress",{max:Q,value:W})]}),G.jsxs("div",{className:"main-info-column",children:[G.jsx("h2",{className:"main-info-tittle",children:"SAVINGS"}),G.jsxs("h2",{className:"main-info-subtitle",children:[st," EUR "]})]})]})]}),G.jsxs("div",{className:"spendings",children:[G.jsxs("div",{className:"spendings-header",children:[G.jsx("button",{className:"spendings-header-add-container-space",children:"+"}),G.jsx("h2",{className:"spendings-header-tittle",children:"SPENDINGS"}),G.jsxs("div",{className:"spendings-header-add-container",children:[G.jsx("button",{className:"spendings-header-add",onClick:()=>t(!n),children:"+"}),n?G.jsx(zM,{onSubmit:()=>{g(),t(!1)}}):null]})]}),G.jsx(jM,{transactions:c})]})]})}function l9(){const n=q.useRef(),t=q.useRef(),{signup:e}=ws(),[i,s]=q.useState(!1),[l,c]=q.useState(""),d=al();async function p(g){g.preventDefault();try{c(""),s(!0),await e(n.current.value,t.current.value),d("/dashboard")}catch(v){console.login("Signup error:",v),c("FAILED TO SIGN UP")}}return G.jsxs("form",{className:"login-container ",onSubmit:p,children:[G.jsx("h1",{className:"login-tittle",children:"BROKELESS"}),G.jsx("h2",{className:"login-name",children:"EMAIL"}),G.jsx("input",{className:"login-name-input",type:"email",placeholder:"admin",required:!0,ref:n}),G.jsx("h2",{className:"login-password",children:"PASSWORD"}),G.jsx("input",{className:"login-password-input",type:"password",placeholder:"admin",required:!0,ref:t}),G.jsx("button",{disabled:i,className:"login-submit_btn",type:"submit",children:"SIGN UP"}),G.jsxs("div",{children:["HAVE AN ACCOUNT? ",G.jsx(fd,{to:"/",children:"LOGIN"})," "]}),l&&G.jsx("p",{className:"",children:l})]})}function u9(){const{currentUser:n}=ws();return n?G.jsx(nM,{}):G.jsx(eM,{to:"/"})}function Ve(n,t){t===void 0&&(t={});var e=t.insertAt;if(n&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}}Ve(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var fn=function(){return fn=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var s in t=arguments[e])Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s]);return n},fn.apply(this,arguments)};function jf(n){return jf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jf(n)}var c9=/^\s+/,h9=/\s+$/;function vt(n,t){if(t=t||{},(n=n||"")instanceof vt)return n;if(!(this instanceof vt))return new vt(n,t);var e=function(i){var s={r:0,g:0,b:0},l=1,c=null,d=null,p=null,g=!1,v=!1;typeof i=="string"&&(i=function(x){x=x.replace(c9,"").replace(h9,"").toLowerCase();var C,P=!1;if(Yg[x])x=Yg[x],P=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(C=er.rgb.exec(x))?{r:C[1],g:C[2],b:C[3]}:(C=er.rgba.exec(x))?{r:C[1],g:C[2],b:C[3],a:C[4]}:(C=er.hsl.exec(x))?{h:C[1],s:C[2],l:C[3]}:(C=er.hsla.exec(x))?{h:C[1],s:C[2],l:C[3],a:C[4]}:(C=er.hsv.exec(x))?{h:C[1],s:C[2],v:C[3]}:(C=er.hsva.exec(x))?{h:C[1],s:C[2],v:C[3],a:C[4]}:(C=er.hex8.exec(x))?{r:Cn(C[1]),g:Cn(C[2]),b:Cn(C[3]),a:dT(C[4]),format:P?"name":"hex8"}:(C=er.hex6.exec(x))?{r:Cn(C[1]),g:Cn(C[2]),b:Cn(C[3]),format:P?"name":"hex"}:(C=er.hex4.exec(x))?{r:Cn(C[1]+""+C[1]),g:Cn(C[2]+""+C[2]),b:Cn(C[3]+""+C[3]),a:dT(C[4]+""+C[4]),format:P?"name":"hex8"}:(C=er.hex3.exec(x))?{r:Cn(C[1]+""+C[1]),g:Cn(C[2]+""+C[2]),b:Cn(C[3]+""+C[3]),format:P?"name":"hex"}:!1}(i)),jf(i)=="object"&&(pi(i.r)&&pi(i.g)&&pi(i.b)?(A=i.r,E=i.g,k=i.b,s={r:255*he(A,255),g:255*he(E,255),b:255*he(k,255)},g=!0,v=String(i.r).substr(-1)==="%"?"prgb":"rgb"):pi(i.h)&&pi(i.s)&&pi(i.v)?(c=Ru(i.s),d=Ru(i.v),s=function(x,C,P){x=6*he(x,360),C=he(C,100),P=he(P,100);var Y=Math.floor(x),Q=x-Y,W=P*(1-C),at=P*(1-Q*C),st=P*(1-(1-Q)*C),mt=Y%6,D=[P,at,W,W,st,P][mt],S=[st,P,P,at,W,W][mt],R=[W,W,st,P,P,at][mt];return{r:255*D,g:255*S,b:255*R}}(i.h,c,d),g=!0,v="hsv"):pi(i.h)&&pi(i.s)&&pi(i.l)&&(c=Ru(i.s),p=Ru(i.l),s=function(x,C,P){var Y,Q,W;function at(D,S,R){return R<0&&(R+=1),R>1&&(R-=1),R<1/6?D+6*(S-D)*R:R<.5?S:R<2/3?D+(S-D)*(2/3-R)*6:D}if(x=he(x,360),C=he(C,100),P=he(P,100),C===0)Y=Q=W=P;else{var st=P<.5?P*(1+C):P+C-P*C,mt=2*P-st;Y=at(mt,st,x+1/3),Q=at(mt,st,x),W=at(mt,st,x-1/3)}return{r:255*Y,g:255*Q,b:255*W}}(i.h,c,p),g=!0,v="hsl"),i.hasOwnProperty("a")&&(l=i.a));var A,E,k;return l=b2(l),{ok:g,format:i.format||v,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:l}}(n);this._originalInput=n,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||e.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=e.ok}function lT(n,t,e){n=he(n,255),t=he(t,255),e=he(e,255);var i,s,l=Math.max(n,t,e),c=Math.min(n,t,e),d=(l+c)/2;if(l==c)i=s=0;else{var p=l-c;switch(s=d>.5?p/(2-l-c):p/(l+c),l){case n:i=(t-e)/p+(t<e?6:0);break;case t:i=(e-n)/p+2;break;case e:i=(n-t)/p+4}i/=6}return{h:i,s,l:d}}function uT(n,t,e){n=he(n,255),t=he(t,255),e=he(e,255);var i,s,l=Math.max(n,t,e),c=Math.min(n,t,e),d=l,p=l-c;if(s=l===0?0:p/l,l==c)i=0;else{switch(l){case n:i=(t-e)/p+(t<e?6:0);break;case t:i=(e-n)/p+2;break;case e:i=(n-t)/p+4}i/=6}return{h:i,s,v:d}}function cT(n,t,e,i){var s=[sr(Math.round(n).toString(16)),sr(Math.round(t).toString(16)),sr(Math.round(e).toString(16))];return i&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function hT(n,t,e,i){return[sr(_2(i)),sr(Math.round(n).toString(16)),sr(Math.round(t).toString(16)),sr(Math.round(e).toString(16))].join("")}function f9(n,t){t=t===0?0:t||10;var e=vt(n).toHsl();return e.s-=t/100,e.s=vd(e.s),vt(e)}function d9(n,t){t=t===0?0:t||10;var e=vt(n).toHsl();return e.s+=t/100,e.s=vd(e.s),vt(e)}function p9(n){return vt(n).desaturate(100)}function m9(n,t){t=t===0?0:t||10;var e=vt(n).toHsl();return e.l+=t/100,e.l=vd(e.l),vt(e)}function g9(n,t){t=t===0?0:t||10;var e=vt(n).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),vt(e)}function y9(n,t){t=t===0?0:t||10;var e=vt(n).toHsl();return e.l-=t/100,e.l=vd(e.l),vt(e)}function v9(n,t){var e=vt(n).toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,vt(e)}function b9(n){var t=vt(n).toHsl();return t.h=(t.h+180)%360,vt(t)}function fT(n,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var e=vt(n).toHsl(),i=[vt(n)],s=360/t,l=1;l<t;l++)i.push(vt({h:(e.h+l*s)%360,s:e.s,l:e.l}));return i}function _9(n){var t=vt(n).toHsl(),e=t.h;return[vt(n),vt({h:(e+72)%360,s:t.s,l:t.l}),vt({h:(e+216)%360,s:t.s,l:t.l})]}function E9(n,t,e){t=t||6,e=e||30;var i=vt(n).toHsl(),s=360/e,l=[vt(n)];for(i.h=(i.h-(s*t>>1)+720)%360;--t;)i.h=(i.h+s)%360,l.push(vt(i));return l}function T9(n,t){t=t||6;for(var e=vt(n).toHsv(),i=e.h,s=e.s,l=e.v,c=[],d=1/t;t--;)c.push(vt({h:i,s,v:l})),l=(l+d)%1;return c}vt.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,t,e,i=this.toRgb();return n=i.r/255,t=i.g/255,e=i.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},setAlpha:function(n){return this._a=b2(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=uT(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=uT(this._r,this._g,this._b),t=Math.round(360*n.h),e=Math.round(100*n.s),i=Math.round(100*n.v);return this._a==1?"hsv("+t+", "+e+"%, "+i+"%)":"hsva("+t+", "+e+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var n=lT(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=lT(this._r,this._g,this._b),t=Math.round(360*n.h),e=Math.round(100*n.s),i=Math.round(100*n.l);return this._a==1?"hsl("+t+", "+e+"%, "+i+"%)":"hsla("+t+", "+e+"%, "+i+"%, "+this._roundA+")"},toHex:function(n){return cT(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(t,e,i,s,l){var c=[sr(Math.round(t).toString(16)),sr(Math.round(e).toString(16)),sr(Math.round(i).toString(16)),sr(_2(s))];return l&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)&&c[3].charAt(0)==c[3].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*he(this._r,255))+"%",g:Math.round(100*he(this._g,255))+"%",b:Math.round(100*he(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*he(this._r,255))+"%, "+Math.round(100*he(this._g,255))+"%, "+Math.round(100*he(this._b,255))+"%)":"rgba("+Math.round(100*he(this._r,255))+"%, "+Math.round(100*he(this._g,255))+"%, "+Math.round(100*he(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(A9[cT(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var t="#"+hT(this._r,this._g,this._b,this._a),e=t,i=this._gradientType?"GradientType = 1, ":"";if(n){var s=vt(n);e="#"+hT(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+t+",endColorstr="+e+")"},toString:function(n){var t=!!n;n=n||this._format;var e=!1,i=this._a<1&&this._a>=0;return t||!i||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(e=this.toRgbString()),n==="prgb"&&(e=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(e=this.toHexString()),n==="hex3"&&(e=this.toHexString(!0)),n==="hex4"&&(e=this.toHex8String(!0)),n==="hex8"&&(e=this.toHex8String()),n==="name"&&(e=this.toName()),n==="hsl"&&(e=this.toHslString()),n==="hsv"&&(e=this.toHsvString()),e||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return vt(this.toString())},_applyModification:function(n,t){var e=n.apply(null,[this].concat([].slice.call(t)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(m9,arguments)},brighten:function(){return this._applyModification(g9,arguments)},darken:function(){return this._applyModification(y9,arguments)},desaturate:function(){return this._applyModification(f9,arguments)},saturate:function(){return this._applyModification(d9,arguments)},greyscale:function(){return this._applyModification(p9,arguments)},spin:function(){return this._applyModification(v9,arguments)},_applyCombination:function(n,t){return n.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(E9,arguments)},complement:function(){return this._applyCombination(b9,arguments)},monochromatic:function(){return this._applyCombination(T9,arguments)},splitcomplement:function(){return this._applyCombination(_9,arguments)},triad:function(){return this._applyCombination(fT,[3])},tetrad:function(){return this._applyCombination(fT,[4])}},vt.fromRatio=function(n,t){if(jf(n)=="object"){var e={};for(var i in n)n.hasOwnProperty(i)&&(e[i]=i==="a"?n[i]:Ru(n[i]));n=e}return vt(n,t)},vt.equals=function(n,t){return!(!n||!t)&&vt(n).toRgbString()==vt(t).toRgbString()},vt.random=function(){return vt.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},vt.mix=function(n,t,e){e=e===0?0:e||50;var i=vt(n).toRgb(),s=vt(t).toRgb(),l=e/100;return vt({r:(s.r-i.r)*l+i.r,g:(s.g-i.g)*l+i.g,b:(s.b-i.b)*l+i.b,a:(s.a-i.a)*l+i.a})},vt.readability=function(n,t){var e=vt(n),i=vt(t);return(Math.max(e.getLuminance(),i.getLuminance())+.05)/(Math.min(e.getLuminance(),i.getLuminance())+.05)},vt.isReadable=function(n,t,e){var i,s,l=vt.readability(n,t);switch(s=!1,(i=function(c){var d,p;return d=((c=c||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(c.size||"small").toLowerCase(),d!=="AA"&&d!=="AAA"&&(d="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:d,size:p}}(e)).level+i.size){case"AAsmall":case"AAAlarge":s=l>=4.5;break;case"AAlarge":s=l>=3;break;case"AAAsmall":s=l>=7}return s},vt.mostReadable=function(n,t,e){var i,s,l,c,d=null,p=0;s=(e=e||{}).includeFallbackColors,l=e.level,c=e.size;for(var g=0;g<t.length;g++)(i=vt.readability(n,t[g]))>p&&(p=i,d=vt(t[g]));return vt.isReadable(n,d,{level:l,size:c})||!s?d:(e.includeFallbackColors=!1,vt.mostReadable(n,["#fff","#000"],e))};var Yg=vt.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},A9=vt.hexNames=function(n){var t={};for(var e in n)n.hasOwnProperty(e)&&(t[n[e]]=e);return t}(Yg);function b2(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function he(n,t){(function(i){return typeof i=="string"&&i.indexOf(".")!=-1&&parseFloat(i)===1})(n)&&(n="100%");var e=function(i){return typeof i=="string"&&i.indexOf("%")!=-1}(n);return n=Math.min(t,Math.max(0,parseFloat(n))),e&&(n=parseInt(n*t,10)/100),Math.abs(n-t)<1e-6?1:n%t/parseFloat(t)}function vd(n){return Math.min(1,Math.max(0,n))}function Cn(n){return parseInt(n,16)}function sr(n){return n.length==1?"0"+n:""+n}function Ru(n){return n<=1&&(n=100*n+"%"),n}function _2(n){return Math.round(255*parseFloat(n)).toString(16)}function dT(n){return Cn(n)/255}var aa,Kh,Qh,er=(Kh="[\\s|\\(]+("+(aa="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+aa+")[,|\\s]+("+aa+")\\s*\\)?",Qh="[\\s|\\(]+("+aa+")[,|\\s]+("+aa+")[,|\\s]+("+aa+")[,|\\s]+("+aa+")\\s*\\)?",{CSS_UNIT:new RegExp(aa),rgb:new RegExp("rgb"+Kh),rgba:new RegExp("rgba"+Qh),hsl:new RegExp("hsl"+Kh),hsla:new RegExp("hsla"+Qh),hsv:new RegExp("hsv"+Kh),hsva:new RegExp("hsva"+Qh),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function pi(n){return!!er.CSS_UNIT.exec(n)}var E2=function(n,t){var e=(typeof n=="string"?parseInt(n):n)||0;if(e>=-5&&e<=5){var i=e,s=parseFloat(t),l=s+i*(s/5)*-1;return(l==0||l<=Number.EPSILON)&&(l=.1),{animationPeriod:l+"s"}}return{animationPeriod:t}},T2=function(n,t){var e=n||{},i="";switch(t){case"small":i="12px";break;case"medium":i="16px";break;case"large":i="20px";break;default:i=void 0}var s={};if(e.fontSize){var l=e.fontSize;s=function(c,d){var p={};for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.indexOf(g)<0&&(p[g]=c[g]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(g=Object.getOwnPropertySymbols(c);v<g.length;v++)d.indexOf(g[v])<0&&Object.prototype.propertyIsEnumerable.call(c,g[v])&&(p[g[v]]=c[g[v]])}return p}(e,["fontSize"]),i=l}return{fontSize:i,styles:s}},w9={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},A2=function(n){var t=n.className,e=n.text,i=n.textColor,s=n.staticText,l=n.style;return e?Ie.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:fn(fn(fn({},s&&w9),i&&{color:i,mixBlendMode:"unset"}),l&&l)},typeof e=="string"&&e.length?e:"loading"):null},hv="rgb(50, 205, 50)";function w2(n,t){if(t===void 0&&(t=0),n.length===0)throw new Error("Input array cannot be empty!");var e=[];return function i(s,l){return l===void 0&&(l=0),e.push.apply(e,s),e.length<l&&i(e,l),e.slice(0,l)}(n,t)}Ve(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);vt(hv).toRgb();Array.from({length:4},function(n,t){return"--atom-phase".concat(t+1,"-rgb")});Ve(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--commet-phase".concat(t+1,"-color")});Ve(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--OP-annulus-phase".concat(t+1,"-color")});function Wm(n){return n&&n.Math===Math&&n}Ve(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Wm(typeof window=="object"&&window)||Wm(typeof self=="object"&&self)||Wm(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(n,t){return"--OP-dotted-phase".concat(t+1,"-color")});Ve(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--OP-spokes-phase".concat(t+1,"-color")});Ve(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(n,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")});Ve(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]});Ve(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--four-square-phase".concat(t+1,"-color")});Ve(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--mosaic-phase".concat(t+1,"-color")});Ve(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);var Io=Array.from({length:4},function(n,t){return"--riple-phase".concat(t+1,"-color")}),S9=function(n){var t,e=T2(n==null?void 0:n.style,n==null?void 0:n.size),i=e.styles,s=e.fontSize,l=n==null?void 0:n.easing,c=E2(n==null?void 0:n.speedPlus,"1s").animationPeriod,d=function(p){var g={};if(p instanceof Array){for(var v=w2(p,Io.length),A=0;A<v.length&&!(A>=4);A++)g[Io[A]]=v[A];return g}try{if(typeof p!="string")throw new Error("Color String expected");for(var E=0;E<Io.length;E++)g[Io[E]]=p}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p)," received in <Riple /> indicator cannot be processed. Using default instead!")),E=0;E<Io.length;E++)g[Io[E]]=hv}return g}((t=n==null?void 0:n.color)!==null&&t!==void 0?t:"");return Ie.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:fn(fn(fn(fn(fn({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),d),i),role:"status","aria-live":"polite","aria-label":"Loading"},Ie.createElement("span",{className:"rli-d-i-b riple-indicator"},Ie.createElement("span",{className:"rli-d-i-b riple"}),Ie.createElement("span",{className:"rli-d-i-b riple"}),Ie.createElement(A2,{className:"riple-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))};Ve(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--TD-pulsate-phase".concat(t+1,"-color")});Ve(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});Ve(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--TD-bob-phase".concat(t+1,"-color")});Ve(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--TD-bounce-phase".concat(t+1,"-color")});Ve(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--shape-phase".concat(t+1,"-color")});Ve(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);var Xh=Array.from({length:4},function(n,t){return"--trophySpin-phase".concat(t+1,"-color")}),R9=function(n){var t,e=T2(n==null?void 0:n.style,n==null?void 0:n.size),i=e.styles,s=e.fontSize,l=n==null?void 0:n.easing,c=E2(n==null?void 0:n.speedPlus,"2.5s").animationPeriod,d=function(p){var g={},v=Xh.length;if(p instanceof Array){for(var A=w2(p,v),E=0;E<A.length&&!(E>=4);E++)g[Xh[E]]=A[E];return g}try{if(typeof p!="string")throw new Error("Color String expected");for(var k=0;k<v;k++)g[Xh[k]]=p}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p)," received in <TrophySpin /> indicator cannot be processed. Using default instead!")),k=0;k<v;k++)g[Xh[k]]=hv}return g}((t=n==null?void 0:n.color)!==null&&t!==void 0?t:"");return Ie.createElement("span",{className:"rli-d-i-b trophy-spin-rli-bounding-box",style:fn(fn(fn(fn(fn({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),d),i),role:"status","aria-live":"polite","aria-label":"Loading"},Ie.createElement("span",{className:"rli-d-i-b trophy-spin-indicator"},Ie.createElement("span",{className:"blade"}),Ie.createElement("span",{className:"blade"}),Ie.createElement("span",{className:"blade"}),Ie.createElement("span",{className:"blade"}),Ie.createElement("span",{className:"blade"}),Ie.createElement("span",{className:"blade"}),Ie.createElement("span",{className:"blade"}),Ie.createElement("span",{className:"blade"})),Ie.createElement(A2,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};Ve(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--slab-phase".concat(t+1,"-color")});Ve(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--life-line-phase".concat(t+1,"-color")});const x9=()=>{var oe,ne;const[n,t]=q.useState(""),e=al(),{logout:i}=ws();function s(){e("/dashboard")}async function l(){t("");try{await i(),e("/")}catch{t("FAILED TO LOGOUT")}}const[c,d]=q.useState(""),[p,g]=q.useState(""),[v,A]=q.useState(""),[E,k]=q.useState(""),[x,C]=q.useState(""),[P,Y]=q.useState(""),[Q,W]=q.useState(""),[at,st]=q.useState(""),[mt,D]=q.useState(""),[S,R]=q.useState(!1),M=async H=>{if(H.preventDefault(),!/^[a-zA-Z]+(,[a-zA-Z]+)*$/.test(Q)){alert("Categories must be comma-separated words with no spaces.");return}try{const ot=await s4(Pu(nr,"users",qe.currentUser.uid),{name:c,surname:p,profession:v,image:E,rate:x,currency:P,categories:Q,email:at,password:mt,uid:qe.currentUser.uid},{merge:!0});console.log("User data updated successfully.")}catch(ot){console.error("Error updating user data:",ot)}};q.useEffect(()=>{(async()=>{var N;const ot=(N=qe.currentUser)==null?void 0:N.uid;if(!ot){console.warn("No user logged in");return}console.log("Looking for user doc at: users/"+ot);const ut=Pu(nr,"users",qe.currentUser.uid),Rt=await Sg(ut);if(Rt.exists()){const Z=Rt.data();console.log("Fetched user data:",Z),d(Z.name||""),g(Z.surname||""),A(Z.profession||""),C(Z.rate||""),Y(Z.currency||""),W(Z.categories||""),st(Z.email||""),D(""),k(Z.image||"")}else console.warn("No user data found")})()},[]);const L=async()=>{var ot;const H=(ot=qe.currentUser)==null?void 0:ot.uid;if(!H)return alert("User not logged in.");try{const ut=await Sg(Pu(nr,"users",H)),Rt=ut.exists()?ut.data():{},Z=(await Ku($u(As(nr,"expense"),Yu("uid","==",H)))).docs.map(Ht=>({id:Ht.id,...Ht.data()})),lt=(await Ku($u(As(nr,"monthly_salary"),Yu("uid","==",H)))).docs.map(Ht=>({id:Ht.id,...Ht.data()})),bt={profile:Rt,expenses:Z,monthly_salary:lt},kt=new Blob([JSON.stringify(bt,null,2)],{type:"application/json"}),At=URL.createObjectURL(kt),le=document.createElement("a");le.href=At,le.download=`user-data-${H}.json`,document.body.appendChild(le),le.click(),le.remove(),URL.revokeObjectURL(At),console.log(" Download started")}catch(ut){console.error(" Failed to download user data:",ut),alert("Failed to export data.")}},U="dev4olqf5",O=async H=>{const ot=H.target.files[0];if(!ot)return;R(!0);const ut=new FormData;ut.append("file",ot),ut.append("upload_preset","upload_image_cloudinary"),ut.append("cloud_name",U);const N=await(await fetch(`https://api.cloudinary.com/v1_1/${U}/image/upload`,{method:"POST",body:ut})).json();console.log("Cloudinary return JSSON:",N.url),k(N.url),console.log(ot),R(!1)};return G.jsxs("div",{children:[G.jsxs("nav",{className:"nav-bar",children:[G.jsx("div",{children:G.jsx("h1",{className:"nav-bar-tittle",children:"BROKLESS"})}),G.jsxs("div",{className:"nav-bar-right",children:[G.jsx("button",{varient:"link",className:"nav-bar-settings",onClick:s,children:G.jsx(Zu,{className:"nav-bar-settings-icon",icon:a9})}),G.jsxs("button",{variant:"link",onClick:l,className:"nav-bar-logout",children:["LOG OUT"," "]})]})]}),G.jsx("div",{className:"settings-container",children:G.jsxs("form",{className:"settings-form",onSubmit:M,children:[G.jsx("h1",{className:"settings-title",children:"PROFILE INFORMATION"}),G.jsx("label",{className:"settings-subtitle",children:"NAME"}),G.jsx("input",{type:"text",value:c,onChange:H=>d(H.target.value)}),G.jsx("label",{className:"settings-subtitle",children:"SURNAME"}),G.jsx("input",{type:"text",onChange:H=>g(H.target.value),value:p}),G.jsx("label",{className:"settings-subtitle",children:"PROFESSION"}),G.jsx("input",{type:"text",onChange:H=>A(H.target.value),value:v}),G.jsx("label",{className:"settings-subtitle",children:"PROFILE IMAGE "}),G.jsxs("div",{className:"upload-image",children:[G.jsx("input",{type:"file",onChange:O}),S?G.jsx(R9,{color:"#ff0000",size:"small",text:"Loading",textColor:"#000000"}):G.jsx(S9,{color:"#000000",size:"medium",text:"Upload ",textColor:"#000000"})]}),G.jsx("label",{className:"settings-subtitle-finance",children:"PAYMENT RATE"}),G.jsxs("div",{className:"radio-group",children:[G.jsxs("label",{children:[G.jsx("input",{type:"radio",name:"paymentRate",value:"hourly",checked:x==="hourly",onChange:H=>C(H.target.value)})," ","STEADY JOB"]}),G.jsxs("label",{children:[G.jsx("input",{type:"radio",name:"paymentRate",value:"project",checked:x==="project",onChange:H=>C(H.target.value)}),"FREELANCER"]})]}),G.jsx("label",{className:"settings-subtitle-finance",children:"CURRENCY OF CHOICE"}),G.jsxs("div",{className:"radio-group",children:[G.jsxs("label",{children:[G.jsx("input",{type:"radio",name:"currency",value:"EUR",checked:P==="EUR",onChange:H=>Y(H.target.value)}),"EUR €"]}),G.jsxs("label",{children:[G.jsx("input",{type:"radio",name:"currency",value:"USD",checked:P==="USD",onChange:H=>Y(H.target.value)}),"USD $"]}),G.jsxs("label",{children:[G.jsx("input",{type:"radio",name:"currency",value:"GBP",checked:P==="GBP",onChange:H=>Y(H.target.value)}),"GBP £"]})]}),G.jsx("label",{className:"settings-subtitle",htmlFor:"categories",children:"CUSTOM CATEGORIES"}),G.jsx("input",{id:"categories",type:"text",value:Q,onChange:H=>W(H.target.value.replace(/\s+/g,"")),pattern:"^[a-zA-Z]+(,[a-zA-Z]+)*$",title:"Enter words separated by commas with no spaces (e.g. coffee,gym,books)",placeholder:"e.g. coffee,gym,books",className:"settings-input"}),G.jsx("label",{className:"settings-subtitle",children:"EMAIL"}),G.jsx("input",{type:"text",value:at||((oe=qe.currentUser)==null?void 0:oe.email),onChange:H=>st(H.target.value)}),G.jsx("label",{className:"settings-subtitle",children:"PASSWORD"}),G.jsx("input",{type:"password",placeholder:((ne=qe.currentUser)==null?void 0:ne.password)||"Enter new password",onChange:H=>D(H.target.value)}),G.jsx("button",{type:"submit",children:"SUBMIT"}),G.jsxs("button",{type:"button",onClick:L,children:["EXPORT ALL DATA"," "]})]})})]})};function I9(){return G.jsx(G.Fragment,{children:G.jsx("div",{children:G.jsx("main",{className:"main-content",children:G.jsx(u4,{children:G.jsxs(iM,{children:[G.jsx(Do,{path:"/",element:G.jsx(UM,{})}),G.jsx(Do,{path:"/sign-up",element:G.jsx(l9,{})}),G.jsxs(Do,{element:G.jsx(u9,{}),children:[G.jsx(Do,{path:"/dashboard",element:G.jsx(o9,{})}),G.jsx(Do,{path:"/settings",element:G.jsx(x9,{})})]})]})})})})})}ix.createRoot(document.getElementById("root")).render(G.jsx(q.StrictMode,{children:G.jsx(IM,{children:G.jsx(I9,{})})}));
