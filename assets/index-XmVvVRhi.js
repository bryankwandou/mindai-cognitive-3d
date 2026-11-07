(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=i(s);fetch(s.href,u)}})();function US(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Lp={exports:{}},lu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function HT(){if(ay)return lu;ay=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,s,u){var f=null;if(u!==void 0&&(f=""+u),s.key!==void 0&&(f=""+s.key),"key"in s){u={};for(var h in s)h!=="key"&&(u[h]=s[h])}else u=s;return s=u.ref,{$$typeof:l,type:a,key:f,ref:s!==void 0?s:null,props:u}}return lu.Fragment=t,lu.jsx=i,lu.jsxs=i,lu}var ry;function VT(){return ry||(ry=1,Lp.exports=HT()),Lp.exports}var Tt=VT(),Op={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function GT(){if(sy)return ie;sy=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),M=Symbol.iterator;function T(O){return O===null||typeof O!="object"?null:(O=M&&O[M]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function U(O,X,mt){this.props=O,this.context=X,this.refs=x,this.updater=mt||E}U.prototype.isReactComponent={},U.prototype.setState=function(O,X){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,X,"setState")},U.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function w(){}w.prototype=U.prototype;function b(O,X,mt){this.props=O,this.context=X,this.refs=x,this.updater=mt||E}var P=b.prototype=new w;P.constructor=b,y(P,U.prototype),P.isPureReactComponent=!0;var B=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function C(O,X,mt){var ct=mt.ref;return{$$typeof:l,type:O,key:X,ref:ct!==void 0?ct:null,props:mt}}function H(O,X){return C(O.type,X,O.props)}function tt(O){return typeof O=="object"&&O!==null&&O.$$typeof===l}function J(O){var X={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(mt){return X[mt]})}var rt=/\/+/g;function st(O,X){return typeof O=="object"&&O!==null&&O.key!=null?J(""+O.key):X.toString(36)}function G(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(X){O.status==="pending"&&(O.status="fulfilled",O.value=X)},function(X){O.status==="pending"&&(O.status="rejected",O.reason=X)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function $(O,X,mt,ct,bt){var Ct=typeof O;(Ct==="undefined"||Ct==="boolean")&&(O=null);var wt=!1;if(O===null)wt=!0;else switch(Ct){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(O.$$typeof){case l:case t:wt=!0;break;case _:return wt=O._init,$(wt(O._payload),X,mt,ct,bt)}}if(wt)return bt=bt(O),wt=ct===""?"."+st(O,0):ct,B(bt)?(mt="",wt!=null&&(mt=wt.replace(rt,"$&/")+"/"),$(bt,X,mt,"",function(Ae){return Ae})):bt!=null&&(tt(bt)&&(bt=H(bt,mt+(bt.key==null||O&&O.key===bt.key?"":(""+bt.key).replace(rt,"$&/")+"/")+wt)),X.push(bt)),1;wt=0;var St=ct===""?".":ct+":";if(B(O))for(var At=0;At<O.length;At++)ct=O[At],Ct=St+st(ct,At),wt+=$(ct,X,mt,Ct,bt);else if(At=T(O),typeof At=="function")for(O=At.call(O),At=0;!(ct=O.next()).done;)ct=ct.value,Ct=St+st(ct,At++),wt+=$(ct,X,mt,Ct,bt);else if(Ct==="object"){if(typeof O.then=="function")return $(G(O),X,mt,ct,bt);throw X=String(O),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return wt}function Y(O,X,mt){if(O==null)return O;var ct=[],bt=0;return $(O,ct,"","",function(Ct){return X.call(mt,Ct,bt++)}),ct}function vt(O){if(O._status===-1){var X=O._result,mt=X();mt.then(function(ct){(O._status===0||O._status===-1)&&(O._status=1,O._result=ct,mt.status===void 0&&(mt.status="fulfilled",mt.value=ct))},function(ct){(O._status===0||O._status===-1)&&(O._status=2,O._result=ct,mt.status===void 0&&(mt.status="rejected",mt.reason=ct))}),O._status===-1&&(O._status=0,O._result=mt)}if(O._status===1)return O._result.default;throw O._result}var xt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function zt(O){var X=z.T,mt={};mt.types=X!==null?X.types:null,z.T=mt;try{var ct=O(),bt=z.S;bt!==null&&bt(mt,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(N,xt)}catch(Ct){xt(Ct)}finally{X!==null&&mt.types!==null&&(X.types=mt.types),z.T=X}}function Zt(O){var X=z.T;if(X!==null){var mt=X.types;mt===null?X.types=[O]:mt.indexOf(O)===-1&&mt.push(O)}else zt(Zt.bind(null,O))}var fe={map:Y,forEach:function(O,X,mt){Y(O,function(){X.apply(this,arguments)},mt)},count:function(O){var X=0;return Y(O,function(){X++}),X},toArray:function(O){return Y(O,function(X){return X})||[]},only:function(O){if(!tt(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ie.Activity=g,ie.Children=fe,ie.Component=U,ie.Fragment=i,ie.Profiler=s,ie.PureComponent=b,ie.StrictMode=a,ie.Suspense=p,ie.ViewTransition=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ie.addTransitionType=Zt,ie.cache=function(O){return function(){return O.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(O,X,mt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ct=y({},O.props),bt=O.key;if(X!=null)for(Ct in X.key!==void 0&&(bt=""+X.key),X)!R.call(X,Ct)||Ct==="key"||Ct==="__self"||Ct==="__source"||Ct==="ref"&&X.ref===void 0||(ct[Ct]=X[Ct]);var Ct=arguments.length-2;if(Ct===1)ct.children=mt;else if(1<Ct){for(var wt=Array(Ct),St=0;St<Ct;St++)wt[St]=arguments[St+2];ct.children=wt}return C(O.type,bt,ct)},ie.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ie.createElement=function(O,X,mt){var ct,bt={},Ct=null;if(X!=null)for(ct in X.key!==void 0&&(Ct=""+X.key),X)R.call(X,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(bt[ct]=X[ct]);var wt=arguments.length-2;if(wt===1)bt.children=mt;else if(1<wt){for(var St=Array(wt),At=0;At<wt;At++)St[At]=arguments[At+2];bt.children=St}if(O&&O.defaultProps)for(ct in wt=O.defaultProps,wt)bt[ct]===void 0&&(bt[ct]=wt[ct]);return C(O,Ct,bt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(O){return{$$typeof:h,render:O}},ie.isValidElement=tt,ie.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:vt}},ie.memo=function(O,X){return{$$typeof:m,type:O,compare:X===void 0?null:X}},ie.startTransition=zt,ie.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ie.use=function(O){return z.H.use(O)},ie.useActionState=function(O,X,mt){return z.H.useActionState(O,X,mt)},ie.useCallback=function(O,X){return z.H.useCallback(O,X)},ie.useContext=function(O){return z.H.useContext(O)},ie.useDebugValue=function(){},ie.useDeferredValue=function(O,X){return z.H.useDeferredValue(O,X)},ie.useEffect=function(O,X){return z.H.useEffect(O,X)},ie.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ie.useId=function(){return z.H.useId()},ie.useImperativeHandle=function(O,X,mt){return z.H.useImperativeHandle(O,X,mt)},ie.useInsertionEffect=function(O,X){return z.H.useInsertionEffect(O,X)},ie.useLayoutEffect=function(O,X){return z.H.useLayoutEffect(O,X)},ie.useMemo=function(O,X){return z.H.useMemo(O,X)},ie.useOptimistic=function(O,X){return z.H.useOptimistic(O,X)},ie.useReducer=function(O,X,mt){return z.H.useReducer(O,X,mt)},ie.useRef=function(O){return z.H.useRef(O)},ie.useState=function(O){return z.H.useState(O)},ie.useSyncExternalStore=function(O,X,mt){return z.H.useSyncExternalStore(O,X,mt)},ie.useTransition=function(){return z.H.useTransition()},ie.version="19.3.1",ie}var oy;function M_(){return oy||(oy=1,Op.exports=GT()),Op.exports}var Kn=M_();const kT=US(Kn);var Pp={exports:{}},uu={},zp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function XT(){return ly||(ly=1,(function(l){function t(G,$){var Y=G.length;G.push($);t:for(;0<Y;){var vt=Y-1>>>1,xt=G[vt];if(0<s(xt,$))G[vt]=$,G[Y]=xt,Y=vt;else break t}}function i(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var $=G[0],Y=G.pop();if(Y!==$){G[0]=Y;t:for(var vt=0,xt=G.length,zt=xt>>>1;vt<zt;){var Zt=2*(vt+1)-1,fe=G[Zt],O=Zt+1,X=G[O];if(0>s(fe,Y))O<xt&&0>s(X,fe)?(G[vt]=X,G[O]=Y,vt=O):(G[vt]=fe,G[Zt]=Y,vt=Zt);else if(O<xt&&0>s(X,Y))G[vt]=X,G[O]=Y,vt=O;else break t}}return $}function s(G,$){var Y=G.sortIndex-$.sortIndex;return Y!==0?Y:G.id-$.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();l.unstable_now=function(){return f.now()-h}}var p=[],m=[],_=1,g=null,v=3,M=!1,T=!1,E=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function b(G){for(var $=i(m);$!==null;){if($.callback===null)a(m);else if($.startTime<=G)a(m),$.sortIndex=$.expirationTime,t(p,$);else break;$=i(m)}}function P(G){if(E=!1,b(G),!T)if(i(p)!==null)T=!0,B||(B=!0,tt());else{var $=i(m);$!==null&&st(P,$.startTime-G)}}var B=!1,N=-1,z=5,R=-1;function C(){return y?!0:!(l.unstable_now()-R<z)}function H(){if(y=!1,B){var G=l.unstable_now();R=G;var $=!0;try{t:{T=!1,E&&(E=!1,U(N),N=-1),M=!0;var Y=v;try{e:{for(b(G),g=i(p);g!==null&&!(g.expirationTime>G&&C());){var vt=g.callback;if(typeof vt=="function"){g.callback=null,v=g.priorityLevel;var xt=vt(g.expirationTime<=G);if(G=l.unstable_now(),typeof xt=="function"){g.callback=xt,b(G),$=!0;break e}g===i(p)&&a(p),b(G)}else a(p);g=i(p)}if(g!==null)$=!0;else{var zt=i(m);zt!==null&&st(P,zt.startTime-G),$=!1}}break t}finally{g=null,v=Y,M=!1}$=void 0}}finally{$?tt():B=!1}}}var tt;if(typeof w=="function")tt=function(){w(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,rt=J.port2;J.port1.onmessage=H,tt=function(){rt.postMessage(null)}}else tt=function(){x(H,0)};function st(G,$){N=x(function(){G(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(G){G.callback=null},l.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<G?Math.floor(1e3/G):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(G){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var Y=v;v=$;try{return G()}finally{v=Y}},l.unstable_requestPaint=function(){y=!0},l.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Y=v;v=G;try{return $()}finally{v=Y}},l.unstable_scheduleCallback=function(G,$,Y){var vt=l.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?vt+Y:vt):Y=vt,G){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=Y+xt,G={id:_++,callback:$,priorityLevel:G,startTime:Y,expirationTime:xt,sortIndex:-1},Y>vt?(G.sortIndex=Y,t(m,G),i(p)===null&&G===i(m)&&(E?(U(N),N=-1):E=!0,st(P,Y-vt))):(G.sortIndex=xt,t(p,G),T||M||(T=!0,B||(B=!0,tt()))),G},l.unstable_shouldYield=C,l.unstable_wrapCallback=function(G){var $=v;return function(){var Y=v;v=$;try{return G.apply(this,arguments)}finally{v=Y}}}})(Ip)),Ip}var uy;function qT(){return uy||(uy=1,zp.exports=XT()),zp.exports}var Bp={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function YT(){if(cy)return Ln;cy=1;var l=M_();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function h(_,g,v){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:M==null?null:M===f?f:""+M,children:_,containerInfo:g,implementation:v}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ln.browser=function(_){return{$$typeof:u,_reason:_}},Ln.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return h(_,g,null,v)},Ln.flushSync=function(_){var g=p.T,v=a.p;try{if(p.T=null,a.p=2,_)return _()}finally{p.T=g,a.p=v,a.d.f()}},Ln.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(_,g))},Ln.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},Ln.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,M=m(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,E=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:T,fetchPriority:E}):v==="script"&&a.d.X(_,{crossOrigin:M,integrity:T,fetchPriority:E,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ln.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);a.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&a.d.M(_)},Ln.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,M=m(v,g.crossOrigin);a.d.L(_,v,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ln.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);a.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else a.d.m(_)},Ln.requestFormReset=function(_){a.d.r(_)},Ln.unstable_batchedUpdates=function(_,g){return _(g)},Ln.useFormState=function(_,g,v){return p.H.useFormState(_,g,v)},Ln.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var fy;function WT(){if(fy)return Bp.exports;fy=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Bp.exports=YT(),Bp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function jT(){if(hy)return uu;hy=1;var l=qT(),t=M_(),i=WT();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,r=n;r&&!r.alternate;)n=r,(n.flags&4098)!==0&&(e=n.return),r=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return p(c),e;if(d===o)return p(c),n;d=d.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=d;else{for(var S=!1,A=c.child;A;){if(A===r){S=!0,r=c,o=d;break}if(A===o){S=!0,o=c,r=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===r){S=!0,r=d,o=c;break}if(A===o){S=!0,o=d,r=c;break}A=A.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function g(e,n,r,o,c,d){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&r(e,o,c,d)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,r,o,c,d))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],r=v(e);return r===null||E(n,e,r.child,{foundSelf:!1}),n}function E(e,n,r,o){for(;r!==null;){if(r===n)o.foundSelf=!0;else if(r.tag===5||r.tag===27||r.tag===6){if(o.foundSelf)return e[1]=r,!0;e[0]=r}else if((r.tag!==22||r.memoizedState===null)&&E(e,n,r.child,o))return!0;r=r.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(a(559))}}var x=null,U=null;function w(e,n,r){return e===r?!0:e===n?(x=e,!0):!1}function b(e,n,r){return e===r?(U=e,!1):e===n?(U!==null&&(x=e),!0):!1}function P(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function B(e,n,r){for(var o=0,c=e;c;c=r(c))o++;c=0;for(var d=n;d;d=r(d))c++;for(;0<o-c;)e=r(e),o--;for(;0<c-o;)n=r(n),c--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=r(e),n=r(n)}return null}var N=Object.assign,z=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),rt=Symbol.for("react.consumer"),st=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),Zt=Symbol.for("react.legacy_hidden"),fe=Symbol.for("react.memo_cache_sentinel"),O=Symbol.for("react.view_transition"),X=Symbol.for("react.recoverable"),mt=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var bt=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case J:return"Profiler";case tt:return"StrictMode";case $:return"Suspense";case Y:return"SuspenseList";case zt:return"Activity";case O:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case st:return e.displayName||"Context";case rt:return(e._context.displayName||"Context")+".Consumer";case G:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vt:return n=e.displayName||null,n!==null?n:Ct(e.type)||"Memo";case xt:n=e._payload,e=e._init;try{return Ct(e(n))}catch{}}return null}var wt=Array.isArray,St=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ae={pending:!1,data:null,method:null,action:null},Z=[],mn=-1;function ae(e){return{current:e}}function $t(e){0>mn||(e.current=Z[mn],Z[mn]=null,mn--)}function Dt(e,n){mn++,Z[mn]=e.current,e.current=n}var xe=ae(null),Qt=ae(null),I=ae(null),D=ae(null);function it(e,n){switch(Dt(I,n),Dt(Qt,e),Dt(xe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?dx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=dx(n),e=px(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$t(xe),Dt(xe,e)}function _t(){$t(xe),$t(Qt),$t(I)}function yt(e){var n=e.memoizedState;n!==null&&(Do._currentValue=n.memoizedState,Dt(D,e)),n=xe.current;var r=px(n,e.type);n!==r&&(Dt(Qt,e),Dt(xe,r))}function pt(e){Qt.current===e&&($t(xe),$t(Qt)),D.current===e&&($t(D),Do._currentValue=Ae)}var Wt,Nt;function It(e){if(Wt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",Nt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+e+Nt}var _e=!1;function Mt(e,n){if(!e||_e)return"";_e=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(Rt){var q=Rt}Reflect.construct(e,[],dt)}else{try{dt.call()}catch(Rt){q=Rt}dt=!1;try{var nt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),dt=!0,new e}finally{dt&&(nt!==void 0?Object.defineProperty(e.prototype,"props",nt):delete e.prototype.props)}}}else{try{throw Error()}catch(Rt){q=Rt}(dt=e())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(Rt){if(Rt&&q&&typeof Rt.stack=="string")return[Rt.stack,q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var F=S.split(`
`),j=A.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===j.length)for(o=F.length-1,c=j.length-1;1<=o&&0<=c&&F[o]!==j[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==j[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==j[c]){var at=`
`+F[o].replace(" at new "," at ");return e.displayName&&at.includes("<anonymous>")&&(at=at.replace("<anonymous>",e.displayName)),at}while(1<=o&&0<=c);break}}}finally{_e=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?It(r):""}function Gt(e,n){switch(e.tag){case 26:case 27:case 5:return It(e.type);case 16:return It("Lazy");case 13:return e.child!==n&&n!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return Mt(e.type,!1);case 11:return Mt(e.type.render,!1);case 1:return Mt(e.type,!0);case 31:return It("Activity");case 30:return It("ViewTransition");default:return""}}function te(e){try{var n="",r=null;do n+=Gt(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ne=Object.prototype.hasOwnProperty,Vt=l.unstable_scheduleCallback,me=l.unstable_cancelCallback,oe=l.unstable_shouldYield,Ie=l.unstable_requestPaint,k=l.unstable_now,Lt=l.unstable_getCurrentPriorityLevel,ft=l.unstable_ImmediatePriority,gt=l.unstable_UserBlockingPriority,Ot=l.unstable_NormalPriority,Ft=l.unstable_LowPriority,re=l.unstable_IdlePriority,je=l.log,Sn=l.unstable_setDisableYieldValue,Me=null,We=null;function Mn(e){if(typeof je=="function"&&Sn(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Me,e)}catch{}}var Pn=Math.clz32?Math.clz32:gl,Gu=Math.log,Ca=Math.LN2;function gl(e){return e>>>=0,e===0?32:31-(Gu(e)/Ca|0)|0}var ns=256,is=262144,wa=4194304;function oa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Da(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?c=oa(o):(S&=A,S!==0?c=oa(S):r||(r=A&~e,r!==0&&(c=oa(r))))):(A=o&~d,A!==0?c=oa(A):S!==0?c=oa(S):r||(r=o&~e,r!==0&&(c=oa(r)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:c}function lr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function vl(e,n){(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var o=31-Pn(r),c=1<<o;n|=e[o],r&=~c}return n}function lh(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ku(){var e=wa;return wa<<=1,(wa&62914560)===0&&(wa=4194304),e}function xl(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function L(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function K(e,n,r,o,c,d){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,j=e.hiddenUpdates;for(r=S&~r;0<r;){var at=31-Pn(r),dt=1<<at;A[at]=0,F[at]=-1;var q=j[at];if(q!==null)for(j[at]=null,at=0;at<q.length;at++){var nt=q[at];nt!==null&&(nt.lane&=-536870913)}r&=~dt}o!==0&&ot(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function ot(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pn(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function lt(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Pn(r),c=1<<o;c&n|e[o]&n&&(e[o]|=n),r&=~c}}function Q(e,n){var r=n&-n;return r=(r&42)!==0?1:Et(r),(r&(e.suspendedLanes|n))!==0?0:r}function Et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qt(){var e=At.p;return e!==0?e:(e=window.event,e===void 0?32:Qx(e.type))}function Yt(e,n){var r=At.p;try{return At.p=e,n()}finally{At.p=r}}var Jt=Math.random().toString(36).slice(2),jt="__reactFiber$"+Jt,Bt="__reactProps$"+Jt,de="__reactContainer$"+Jt,Le="__reactEvents$"+Jt,Ge="__reactListeners$"+Jt,zn="__reactHandles$"+Jt,Re="__reactResources$"+Jt,Xt="__reactMarker$"+Jt,Qn="__reactLoad$"+Jt;function Ee(e){delete e[jt],delete e[Bt],delete e[Ge],delete e[zn]}function _n(e){var n;if(n=e[jt])return n;for(var r=e.parentNode;r;){if(n=r[de]||r[jt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Ux(e);e!==null;){if(r=e[jt])return r;e=Ux(e)}return n}e=r,r=e.parentNode}return null}function di(e){if(e=e[jt]||e[de]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function gn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Li(e){var n=e[Re];return n||(n=e[Re]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function se(e){e[Xt]=!0}function pi(e){e[Qn]=void 0}var ur=new Set,kn={};function In(e,n){Xn(e,n),Xn(e+"Capture",n)}function Xn(e,n){for(kn[e]=n,e=0;e<n.length;e++)ur.add(n[e])}var Xu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Q_={},J_={};function rE(e){return ne.call(J_,e)?!0:ne.call(Q_,e)?!1:Xu.test(e)?J_[e]=!0:(Q_[e]=!0,!1)}var we=!1;function $_(){var e=we;return we=!1,e}function qu(e,n,r){if(rE(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,r)}}function Yu(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,r)}}function Ua(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,o)}}function mi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function t0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sE(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function uh(e){if(!e._valueTracker){var n=t0(e)?"checked":"value";e._valueTracker=sE(e,n,""+e[n])}}function e0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=t0(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}var oE=/[\n"\\]/g;function Oi(e){return e.replace(oE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ch(e,n,r,o,c,d,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+mi(n)):e.value!==""+mi(n)&&(e.value=""+mi(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?S==="number"&&e.value==n?fh(e,mi(e.value)):fh(e,mi(n)):r!=null?fh(e,mi(r)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+mi(A):e.removeAttribute("name")}function n0(e,n,r,o,c,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){uh(e);return}r=r!=null?""+mi(r):"",n=n!=null?""+mi(n):r,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),uh(e)}function fh(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Ws(e,n,r,o){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+mi(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function i0(e,n,r){if(n!=null&&(n=""+mi(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+mi(r):""}function a0(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(wt(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=mi(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),uh(e)}function js(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var lE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function r0(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||lE.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function s0(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",we=!0);for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&(r0(e,c,o),we=!0)}else for(var d in n)n.hasOwnProperty(d)&&r0(e,d,n[d])}function hh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wu(e){return cE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var dh=null;function ph(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function o0(e){var n=di(e);if(n&&(e=n.stateNode)){var r=e[Bt]||null;t:switch(e=n.stateNode,n.type){case"input":if(ch(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Oi(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var c=o[Bt]||null;if(!c)throw Error(a(90));ch(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&e0(o)}break t;case"textarea":i0(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&Ws(e,!!r.multiple,n,!1)}}}var mh=!1;function l0(e,n,r){if(mh)return e(n,r);mh=!0;try{var o=e(n);return o}finally{if(mh=!1,(Zs!==null||Ks!==null)&&(Wc(),Zs&&(n=Zs,e=Ks,Ks=Zs=null,o0(n),e)))for(n=0;n<e.length;n++)o0(e[n])}}function yl(e,n){var r=e.stateNode;if(r===null)return null;var o=r[Bt]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=!1;if(Na)try{var Sl={};Object.defineProperty(Sl,"passive",{get:function(){_h=!0}}),window.addEventListener("test",Sl,Sl),window.removeEventListener("test",Sl,Sl)}catch{_h=!1}var cr=null,gh=null,ju=null;function u0(){if(ju)return ju;var e,n=gh,r=n.length,o,c="value"in cr?cr.value:cr.textContent,d=c.length;for(e=0;e<r&&n[e]===c[e];e++);var S=r-e;for(o=1;o<=S&&n[r-o]===c[d-o];o++);return ju=c.slice(e,1<o?1-o:void 0)}function Zu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ku(){return!0}function c0(){return!1}function qn(e){function n(r,o,c,d,S){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ku:c0,this.isPropagationStopped=c0,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ku)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ku)},persist:function(){},isPersistent:Ku}),n}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=qn(fr),Ml=N({},fr,{view:0,detail:0}),fE=qn(Ml),vh,xh,El,Ju=N({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(vh=e.screenX-El.screenX,xh=e.screenY-El.screenY):xh=vh=0,El=e),vh)},movementY:function(e){return"movementY"in e?e.movementY:xh}}),f0=qn(Ju),hE=N({},Ju,{dataTransfer:0}),dE=qn(hE),pE=N({},Ml,{relatedTarget:0}),yh=qn(pE),mE=N({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),_E=qn(mE),gE=N({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vE=qn(gE),xE=N({},fr,{data:0}),h0=qn(xE),yE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ME={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ME[e])?!!n[e]:!1}function Sh(){return EE}var TE=N({},Ml,{key:function(e){if(e.key){var n=yE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?SE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(e){return e.type==="keypress"?Zu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bE=qn(TE),AE=N({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d0=qn(AE),RE=N({},fr,{submitter:0}),CE=qn(RE),wE=N({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),DE=qn(wE),UE=N({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=qn(UE),LE=N({},Ju,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),OE=qn(LE),PE=N({},fr,{newState:0,oldState:0,source:0}),zE=qn(PE),IE=[9,13,27,32],Mh=Na&&"CompositionEvent"in window,Tl=null;Na&&"documentMode"in document&&(Tl=document.documentMode);var BE=Na&&"TextEvent"in window&&!Tl,p0=Na&&(!Mh||Tl&&8<Tl&&11>=Tl),m0=" ",_0=!1;function g0(e,n){switch(e){case"keyup":return IE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function FE(e,n){switch(e){case"compositionend":return v0(n);case"keypress":return n.which!==32?null:(_0=!0,m0);case"textInput":return e=n.data,e===m0&&_0?null:e;default:return null}}function HE(e,n){if(Qs)return e==="compositionend"||!Mh&&g0(e,n)?(e=u0(),ju=gh=cr=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return p0&&n.locale!=="ko"?null:n.data;default:return null}}var VE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!VE[e.type]:n==="textarea"}function y0(e,n,r,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=$c(n,"onChange"),0<n.length&&(r=new Qu("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var bl=null,Al=null;function GE(e){ox(e,0)}function $u(e){var n=gn(e);if(e0(n))return e}function S0(e,n){if(e==="change")return n}var M0=!1;if(Na){var Eh;if(Na){var Th="oninput"in document;if(!Th){var E0=document.createElement("div");E0.setAttribute("oninput","return;"),Th=typeof E0.oninput=="function"}Eh=Th}else Eh=!1;M0=Eh&&(!document.documentMode||9<document.documentMode)}function T0(){bl&&(bl.detachEvent("onpropertychange",b0),Al=bl=null)}function b0(e){if(e.propertyName==="value"&&$u(Al)){var n=[];y0(n,Al,e,ph(e)),l0(GE,n)}}function kE(e,n,r){e==="focusin"?(T0(),bl=n,Al=r,bl.attachEvent("onpropertychange",b0)):e==="focusout"&&T0()}function XE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $u(Al)}function qE(e,n){if(e==="click")return $u(n)}function YE(e,n){if(e==="input"||e==="change")return $u(n)}function WE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _i=typeof Object.is=="function"?Object.is:WE;function Rl(e,n){if(_i(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!ne.call(n,c)||!_i(e[c],n[c]))return!1}return!0}function bh(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function A0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function R0(e,n){var r=A0(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=A0(r)}}function C0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?C0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function w0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bh(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=bh(e.document)}return n}function Ah(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var jE=Na&&"documentMode"in document&&11>=document.documentMode,Js=null,Rh=null,Cl=null,Ch=!1;function D0(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ch||Js==null||Js!==bh(o)||(o=Js,"selectionStart"in o&&Ah(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Cl&&Rl(Cl,o)||(Cl=o,o=$c(Rh,"onSelect"),0<o.length&&(n=new Qu("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Js)))}function as(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var $s={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},wh={},U0={};Na&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function rs(e){if(wh[e])return wh[e];if(!$s[e])return e;var n=$s[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in U0)return wh[e]=n[r];return e}var N0=rs("animationend"),L0=rs("animationiteration"),O0=rs("animationstart"),ZE=rs("transitionrun"),KE=rs("transitionstart"),QE=rs("transitioncancel"),P0=rs("transitionend"),z0=new Map,Dh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dh.push("scrollEnd");function Zi(e,n){z0.set(e,n),In(n,[e])}var JE=0;function La(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=$i.identifierPrefix;var r=JE++;return e="_"+e+"t_"+r.toString(32)+"_",n.autoName=e}function I0(e){if(e==null||typeof e=="string")return e;var n=null,r=yo;if(r!==null)for(var o=0;o<r.length;o++){var c=e[r[o]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function Oa(e,n){return e=I0(e),n=I0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var tc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pi=[],to=0,Uh=0;function ec(){for(var e=to,n=Uh=to=0;n<e;){var r=Pi[n];Pi[n++]=null;var o=Pi[n];Pi[n++]=null;var c=Pi[n];Pi[n++]=null;var d=Pi[n];if(Pi[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}d!==0&&B0(r,c,d)}}function nc(e,n,r,o){Pi[to++]=e,Pi[to++]=n,Pi[to++]=r,Pi[to++]=o,Uh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nh(e,n,r,o){return nc(e,n,r,o),ic(e)}function ss(e,n){return nc(e,null,null,n),ic(e)}function B0(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var c=!1,d=e.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-Pn(r),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=r|536870912),d):null}function ic(e){if(50<Kl)throw Kl=0,Yc=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var eo={};function $E(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,r,o){return new $E(e,n,r,o)}function Lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pa(e,n){var r=e.alternate;return r===null?(r=Jn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&1206910976,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function F0(e,n){e.flags&=1206910978;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ac(e,n,r,o,c,d){var S=0;if(o=e,typeof o=="function")Lh(o)&&(S=1);else if(typeof o=="string")S=RT(e,r,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case zt:return e=Jn(31,r,n,c),e.elementType=zt,e.lanes=d,e;case H:return os(r.children,c,d,n);case tt:S=8,c|=24;break;case J:return e=Jn(12,r,n,c|2),e.elementType=J,e.lanes=d,e;case $:return e=Jn(13,r,n,c),e.elementType=$,e.lanes=d,e;case Y:return e=Jn(19,r,n,c),e.elementType=Y,e.lanes=d,e;case Zt:case O:return e=c|32,e=Jn(30,r,n,e),e.elementType=O,e.lanes=d,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case st:S=10;break t;case rt:S=9;break t;case G:S=11;break t;case vt:S=14;break t;case xt:S=16,o=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Jn(S,r,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function os(e,n,r,o){return e=Jn(7,e,o,n),e.lanes=r,e}function Oh(e,n,r){return e=Jn(6,e,null,n),e.lanes=r,e}function H0(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Ph(e,n,r){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var V0=new WeakMap;function zi(e,n){if(typeof e=="object"&&e!==null){var r=V0.get(e);return r!==void 0?r:(n={value:e,source:n,stack:te(n)},V0.set(e,n),n)}return{value:e,source:n,stack:te(n)}}var no=[],io=0,rc=null,wl=0,Ii=[],Bi=0,hr=null,ua=1,ca="";function za(e,n){no[io++]=wl,no[io++]=rc,rc=e,wl=n}function G0(e,n,r){Ii[Bi++]=ua,Ii[Bi++]=ca,Ii[Bi++]=hr,hr=e;var o=ua;e=ca;var c=32-Pn(o)-1;o&=~(1<<c),r+=1;var d=32-Pn(n)+c;if(30<d){var S=c-c%5;d=(o&(1<<S)-1).toString(32),o>>=S,c-=S,ua=1<<32-Pn(n)+c|r<<c|o,ca=d+e}else ua=1<<d|r<<c|o,ca=e}function sc(e){e.return!==null&&(za(e,1),G0(e,1,0))}function zh(e){for(;e===rc;)rc=no[--io],no[io]=null,wl=no[--io],no[io]=null;for(;e===hr;)hr=Ii[--Bi],Ii[Bi]=null,ca=Ii[--Bi],Ii[Bi]=null,ua=Ii[--Bi],Ii[Bi]=null}function k0(e,n){Ii[Bi++]=ua,Ii[Bi++]=ca,Ii[Bi++]=hr,ua=n.id,ca=n.overflow,hr=e}var En=null,qe=null,pe=!1,dr=null,Fi=!1,Ih=Error(a(519));function pr(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Dl(zi(n,e)),Ih}function X0(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[jt]=e,n[Bt]=o,r){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(r=0;r<Jl.length;r++)ve(Jl[r],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),n0(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),a0(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||fx(n.textContent,r)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||pr(e,!0)}function oc(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:En=En.return}}function ao(e){if(e!==En)return!1;if(!pe)return oc(e),pe=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||dp(e.type,e.memoizedProps)),r=!r),r&&qe&&pr(e),oc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));qe=Dx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));qe=Dx(e)}else n===27?(n=qe,Dr(e.type)?(e=Mp,Mp=null,qe=e):qe=n):qe=En?Vi(e.stateNode.nextSibling):null;return!0}function ls(){qe=En=null,pe=!1}function Bh(){var e=dr;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),dr=null),e}function Dl(e){dr===null?dr=[e]:dr.push(e)}var Fh=ae(null),us=null,Ia=null;function mr(e,n,r){Dt(Fh,n._currentValue),n._currentValue=r}function Ba(e){e._currentValue=Fh.current,$t(Fh)}function lc(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Hh(e,n,r,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=c;for(var F=0;F<n.length;F++)if(A.context===n[F]){d.lanes|=r,A=d.alternate,A!==null&&(A.lanes|=r),lc(d.return,r,e),o||(S=null);break t}d=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(a(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),lc(S,r,e),S=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=r,S=c.alternate,S!==null&&(S.lanes|=r),lc(c.return,r,e),S=c.child,S=S!==null?S.sibling:null):S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function cs(e,n,r,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=c.type;_i(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===D.current){if(S=c.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}c=c.return}return e!==null&&Hh(n,e,r,o),n.flags|=262144,e!==null}function uc(e){for(e=e.firstContext;e!==null;){if(!_i(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fs(e){us=e,Ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return q0(us,e)}function cc(e,n){return us===null&&fs(e),q0(e,n)}function q0(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ia===null){if(e===null)throw Error(a(308));Ia=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ia=Ia.next=n;return r}var t1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},e1=l.unstable_scheduleCallback,n1=l.unstable_NormalPriority,ln={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vh(){return{controller:new t1,data:new Map,refCount:0}}function Ul(e){e.refCount--,e.refCount===0&&e1(n1,function(){e.controller.abort()})}function Y0(e,n){if((e.pendingLanes&4194048)!==0){var r=e.transitionTypes;for(r===null&&(r=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];r.indexOf(o)===-1&&r.push(o)}}}var Nl=null;function i1(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Ll=null,Gh=0,hs=0,ro=null;function a1(e,n){if(Ll===null){var r=Ll=[];Gh=0,hs=ap(),ro={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Gh++,n.then(W0,W0),n}function W0(){if(--Gh===0&&(Nl=null,Ll!==null)){ro!==null&&(ro.status="fulfilled");var e=Ll;Ll=null,hs=0,ro=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function r1(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var j0=St.S;St.S=function(e,n){if(Hv=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&a1(e,n),Nl!==null)for(var r=To;r!==null;)Y0(r,Nl),r=r.next;if(r=e.types,r!==null){for(var o=To;o!==null;)Y0(o,r),o=o.next;if(hs!==0){o=Nl,o===null&&(o=Nl=[]);for(var c=0;c<r.length;c++){var d=r[c];o.indexOf(d)===-1&&o.push(d)}}}j0!==null&&j0(e,n)};var ds=ae(null);function kh(){var e=ds.current;return e!==null?e:ke.pooledCache}function fc(e,n){n===null?Dt(ds,ds.current):Dt(ds,n.pool)}function Z0(){var e=kh();return e===null?null:{parent:ln._currentValue,pool:e}}var so=Error(a(460)),Xh=Error(a(474)),hc=Error(a(542)),dc={then:function(){}};function K0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Q0(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(la,la),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$0(e),e===void 0&&!("reason"in n)?Error(a(600)):e;default:if(typeof n.status=="string")n.then(la,la);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$0(e),e}throw ms=n,so}}function ps(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ms=r,so):r}}var ms=null;function J0(){if(ms===null)throw Error(a(459));var e=ms;return ms=null,e}function $0(e){if(e===so||e===hc)throw Error(a(483))}var oo=null,Ol=0;function pc(e){var n=Ol;return Ol+=1,oo===null&&(oo=[]),Q0(oo,e,n)}function _r(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function mc(e,n){throw n.$$typeof===z?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tg(e){function n(W,V){if(e){var et=W.deletions;et===null?(W.deletions=[V],W.flags|=16):et.push(V)}}function r(W,V){if(!e)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function o(W){for(var V=new Map;W!==null;)W.key===null?V.set(W.index,W):V.set(W.key,W),W=W.sibling;return V}function c(W,V){return W=Pa(W,V),W.index=0,W.sibling=null,W}function d(W,V,et){return W.index=et,e?(et=W.alternate,et!==null?(et=et.index,et<V?(W.flags|=2,V):et):(W.flags|=134217730,V)):(W.flags|=1048576,V)}function S(W){return e&&W.alternate===null&&(W.flags|=134217730),W}function A(W,V,et,ht){return V===null||V.tag!==6?(V=Oh(et,W.mode,ht),V.return=W,V):(V=c(V,et),V.return=W,V)}function F(W,V,et,ht){var Ht=et.type;return Ht===H?(W=at(W,V,et.props.children,ht,et.key),_r(W,et),W):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===xt&&ps(Ht)===V.type)?(V=c(V,et.props),_r(V,et),V.return=W,V):(V=ac(et.type,et.key,et.props,null,W.mode,ht),_r(V,et),V.return=W,V)}function j(W,V,et,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=Ph(et,W.mode,ht),V.return=W,V):(V=c(V,et.children||[]),V.return=W,V)}function at(W,V,et,ht,Ht){return V===null||V.tag!==7?(V=os(et,W.mode,ht,Ht),V.return=W,V):(V=c(V,et),V.return=W,V)}function dt(W,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Oh(""+V,W.mode,et),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case R:return et=ac(V.type,V.key,V.props,null,W.mode,et),_r(et,V),et.return=W,et;case C:return V=Ph(V,W.mode,et),V.return=W,V;case xt:return V=ps(V),dt(W,V,et)}if(wt(V)||ct(V))return V=os(V,W.mode,et,null),V.return=W,V;if(typeof V.then=="function")return dt(W,pc(V),et);if(V.$$typeof===st)return dt(W,cc(W,V),et);mc(W,V)}return null}function q(W,V,et,ht){var Ht=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Ht!==null?null:A(W,V,""+et,ht);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case R:return et.key===Ht?F(W,V,et,ht):null;case C:return et.key===Ht?j(W,V,et,ht):null;case xt:return et=ps(et),q(W,V,et,ht)}if(wt(et)||ct(et))return Ht!==null?null:at(W,V,et,ht,null);if(typeof et.then=="function")return q(W,V,pc(et),ht);if(et.$$typeof===st)return q(W,V,cc(W,et),ht);mc(W,et)}return null}function nt(W,V,et,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(et)||null,A(V,W,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case R:return W=W.get(ht.key===null?et:ht.key)||null,F(V,W,ht,Ht);case C:return W=W.get(ht.key===null?et:ht.key)||null,j(V,W,ht,Ht);case xt:return ht=ps(ht),nt(W,V,et,ht,Ht)}if(wt(ht)||ct(ht))return W=W.get(et)||null,at(V,W,ht,Ht,null);if(typeof ht.then=="function")return nt(W,V,et,pc(ht),Ht);if(ht.$$typeof===st)return nt(W,V,et,cc(V,ht),Ht);mc(V,ht)}return null}function Rt(W,V,et,ht){for(var Ht=null,Se=null,Kt=V,ee=V=0,fn=null;Kt!==null&&ee<et.length;ee++){Kt.index>ee?(fn=Kt,Kt=null):fn=Kt.sibling;var be=q(W,Kt,et[ee],ht);if(be===null){Kt===null&&(Kt=fn);break}e&&Kt&&be.alternate===null&&n(W,Kt),V=d(be,V,ee),Se===null?Ht=be:Se.sibling=be,Se=be,Kt=fn}if(ee===et.length)return r(W,Kt),pe&&za(W,ee),Ht;if(Kt===null){for(;ee<et.length;ee++)Kt=dt(W,et[ee],ht),Kt!==null&&(V=d(Kt,V,ee),Se===null?Ht=Kt:Se.sibling=Kt,Se=Kt);return pe&&za(W,ee),Ht}for(Kt=o(Kt);ee<et.length;ee++)fn=nt(Kt,W,ee,et[ee],ht),fn!==null&&(e&&(be=fn.alternate,be!==null&&Kt.delete(be.key===null?ee:be.key)),V=d(fn,V,ee),Se===null?Ht=fn:Se.sibling=fn,Se=fn);return e&&Kt.forEach(function(Pr){return n(W,Pr)}),pe&&za(W,ee),Ht}function kt(W,V,et,ht){if(et==null)throw Error(a(151));for(var Ht=null,Se=null,Kt=V,ee=V=0,fn=null,be=et.next();Kt!==null&&!be.done;ee++,be=et.next()){Kt.index>ee?(fn=Kt,Kt=null):fn=Kt.sibling;var Pr=q(W,Kt,be.value,ht);if(Pr===null){Kt===null&&(Kt=fn);break}e&&Kt&&Pr.alternate===null&&n(W,Kt),V=d(Pr,V,ee),Se===null?Ht=Pr:Se.sibling=Pr,Se=Pr,Kt=fn}if(be.done)return r(W,Kt),pe&&za(W,ee),Ht;if(Kt===null){for(;!be.done;ee++,be=et.next())be=dt(W,be.value,ht),be!==null&&(V=d(be,V,ee),Se===null?Ht=be:Se.sibling=be,Se=be);return pe&&za(W,ee),Ht}for(Kt=o(Kt);!be.done;ee++,be=et.next())be=nt(Kt,W,ee,be.value,ht),be!==null&&(e&&(fn=be.alternate,fn!==null&&Kt.delete(fn.key===null?ee:fn.key)),V=d(be,V,ee),Se===null?Ht=be:Se.sibling=be,Se=be);return e&&Kt.forEach(function(FT){return n(W,FT)}),pe&&za(W,ee),Ht}function ue(W,V,et,ht){if(typeof et=="object"&&et!==null&&et.type===H&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case R:t:{for(var Ht=et.key;V!==null;){if(V.key===Ht){if(Ht=et.type,Ht===H){if(V.tag===7){r(W,V.sibling),ht=c(V,et.props.children),_r(ht,et),ht.return=W,W=ht;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===xt&&ps(Ht)===V.type){r(W,V.sibling),ht=c(V,et.props),_r(ht,et),ht.return=W,W=ht;break t}r(W,V);break}else n(W,V);V=V.sibling}et.type===H?(ht=os(et.props.children,W.mode,ht,et.key),_r(ht,et),ht.return=W,W=ht):(ht=ac(et.type,et.key,et.props,null,W.mode,ht),_r(ht,et),ht.return=W,W=ht)}return S(W);case C:t:{for(Ht=et.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){r(W,V.sibling),ht=c(V,et.children||[]),ht.return=W,W=ht;break t}else{r(W,V);break}else n(W,V);V=V.sibling}ht=Ph(et,W.mode,ht),ht.return=W,W=ht}return S(W);case xt:return et=ps(et),ue(W,V,et,ht)}if(wt(et))return Rt(W,V,et,ht);if(ct(et)){if(Ht=ct(et),typeof Ht!="function")throw Error(a(150));return et=Ht.call(et),kt(W,V,et,ht)}if(typeof et.then=="function")return ue(W,V,pc(et),ht);if(et.$$typeof===st)return ue(W,V,cc(W,et),ht);mc(W,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(r(W,V.sibling),ht=c(V,et),ht.return=W,W=ht):(r(W,V),ht=Oh(et,W.mode,ht),ht.return=W,W=ht),S(W)):r(W,V)}return function(W,V,et,ht){try{Ol=0;var Ht=ue(W,V,et,ht);return oo=null,Ht}catch(Kt){if(Kt===so||Kt===hc)throw Kt;var Se=Jn(29,Kt,null,W.mode);return Se.lanes=ht,Se.return=W,Se}finally{}}}var _s=tg(!0),eg=tg(!1),gr=!1;function qh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xr(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ic(e),B0(e,null,r),n}return nc(e,o,n,r),ic(e)}function Pl(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,lt(e,r)}}function Wh(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?c=d=n:d=d.next=n}else c=d=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var jh=!1;function zl(){if(jh){var e=ro;if(e!==null)throw e}}function Il(e,n,r,o){jh=!1;var c=e.updateQueue;gr=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var F=A,j=F.next;F.next=null,S===null?d=j:S.next=j,S=F;var at=e.alternate;at!==null&&(at=at.updateQueue,A=at.lastBaseUpdate,A!==S&&(A===null?at.firstBaseUpdate=j:A.next=j,at.lastBaseUpdate=F))}if(d!==null){var dt=c.baseState;S=0,at=j=F=null,A=d;do{var q=A.lane&-536870913,nt=q!==A.lane;if(nt?(ye&q)===q:(o&q)===q){q!==0&&q===hs&&(jh=!0),at!==null&&(at=at.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Rt=e,kt=A;q=n;var ue=r;switch(kt.tag){case 1:if(Rt=kt.payload,typeof Rt=="function"){dt=Rt.call(ue,dt,q);break t}dt=Rt;break t;case 3:Rt.flags=Rt.flags&-65537|128;case 0:if(Rt=kt.payload,q=typeof Rt=="function"?Rt.call(ue,dt,q):Rt,q==null)break t;dt=N({},dt,q);break t;case 2:gr=!0}}q=A.callback,q!==null&&(e.flags|=64,nt&&(e.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[q]:nt.push(q))}else nt={lane:q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},at===null?(j=at=nt,F=dt):at=at.next=nt,S|=q;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;nt=A,A=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);at===null&&(F=dt),c.baseState=F,c.firstBaseUpdate=j,c.lastBaseUpdate=at,d===null&&(c.shared.lanes=0),Ar|=S,e.lanes=S,e.memoizedState=dt}}function ng(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function ig(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)ng(r[e],n)}var yr=ae(null),_c=ae(0);function ag(e,n){e=ka,Dt(_c,e),Dt(yr,n),ka=e|n.baseLanes}function Zh(){Dt(_c,ka),Dt(yr,yr.current)}function Kh(){ka=_c.current,$t(yr),$t(_c)}var wn=ae(null),Bn=null;function Sr(e){var n=e.alternate;Dt(Dn,Dn.current&1),Dt(wn,e),Bn===null&&(n===null||yr.current!==null||n.memoizedState!==null)&&(Bn=e)}function Qh(e){Dt(Dn,Dn.current),Dt(wn,e),Bn===null&&(Bn=e)}function rg(e){e.tag===22?(Dt(Dn,Dn.current),Dt(wn,e),Bn===null&&(Bn=e)):Mr()}function Mr(){Dt(Dn,Dn.current),Dt(wn,wn.current)}function gi(e){$t(wn),Bn===e&&(Bn=null),$t(Dn)}var Dn=ae(0);function Bl(e,n){Dt(wn,wn.current),Dt(Dn,n)}function Jh(e){$t(Dn),$t(wn),Bn===e&&(Bn=null)}function gc(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||yp(r)||Sp(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fa=0,le=null,Be=null,un=null,vc=!1,lo=!1,gs=!1,xc=0,Fl=0,uo=null,s1=0;function en(){throw Error(a(321))}function $h(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!_i(e[r],n[r]))return!1;return!0}function td(e,n,r,o,c,d){return Fa=d,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,St.H=e===null||e.memoizedState===null?Gg:kg,gs=!1,d=r(o,c),gs=!1,lo&&(d=og(n,r,o,c)),sg(e),d}function sg(e){St.H=Ac;var n=Be!==null&&Be.next!==null;if(Fa=0,un=Be=le=null,vc=!1,Fl=0,uo=null,n)throw Error(a(300));e===null||cn||(e=e.dependencies,e!==null&&uc(e)&&(cn=!0))}function og(e,n,r,o){le=e;var c=0;do{if(lo&&(uo=null),Fl=0,lo=!1,25<=c)throw Error(a(301));if(c+=1,un=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}St.H=p1,d=n(r,o)}while(lo);return d}function o1(){var e=St.H,n=e.useState()[0];return n=typeof n.then=="function"?Hl(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(le.flags|=1024),n}function ed(){var e=xc!==0;return xc=0,e}function nd(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function id(e){if(vc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vc=!1}Fa=0,un=Be=le=null,lo=!1,Fl=xc=0,uo=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?le.memoizedState=un=e:un=un.next=e,un}function rn(){if(Be===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=un===null?le.memoizedState:un.next;if(n!==null)un=n,Be=e;else{if(e===null)throw le.alternate===null?Error(a(467)):Error(a(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},un===null?le.memoizedState=un=e:un=un.next=e}return un}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(e){var n=Fl;return Fl+=1,uo===null&&(uo=[]),e=Q0(uo,e,n),n=le,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,St.H=n===null||n.memoizedState===null?Gg:kg),e}function Sc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hl(e);if(e.$$typeof===X)return;if(e.$$typeof===st)return Cn(e)}throw Error(a(438,String(e)))}function ad(e){var n=null,r=le.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=yc(),le.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=fe;return n.index++,r}function Ha(e,n){return typeof n=="function"?n(e):n}function Mc(e){var n=rn();return rd(n,Be,e)}function rd(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var A=S=null,F=null,j=n,at=!1;do{var dt=j.lane&-536870913;if(dt!==j.lane?(ye&dt)===dt:(Fa&dt)===dt){var q=j.revertLane;if(q===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),dt===hs&&(at=!0);else if((Fa&q)===q){j=j.next,q===hs&&(at=!0);continue}else dt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},F===null?(A=F=dt,S=d):F=F.next=dt,le.lanes|=q,Ar|=q;dt=j.action,gs&&r(d,dt),d=j.hasEagerState?j.eagerState:r(d,dt)}else q={lane:dt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},F===null?(A=F=q,S=d):F=F.next=q,le.lanes|=dt,Ar|=dt;j=j.next}while(j!==null&&j!==n);if(F===null?S=d:F.next=A,!_i(d,e.memoizedState)&&(cn=!0,at&&(r=ro,r!==null)))throw r;e.memoizedState=d,e.baseState=S,e.baseQueue=F,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sd(e){var n=rn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,d=n.memoizedState;if(c!==null){r.pending=null;var S=c=c.next;do d=e(d,S.action),S=S.next;while(S!==c);_i(d,n.memoizedState)||(cn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function lg(e,n,r){var o=le,c=rn(),d=pe;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var S=!_i((Be||c).memoizedState,r);if(S&&(c.memoizedState=r,cn=!0),c=c.queue,ud(fg.bind(null,o,c,e),[e]),e=c.getSnapshot!==n||S||un!==null&&(un.memoizedState.tag&1)!==0,co(e?9:8,{destroy:void 0},cg.bind(null,o,c,r,n),null),e){if(o.flags|=2048,ke===null)throw Error(a(349));d||(Fa&127)!==0||ug(o,n,r)}return r}function ug(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=le.updateQueue,n===null?(n=yc(),le.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function cg(e,n,r,o){n.value=r,n.getSnapshot=o,hg(n)&&dg(e)}function fg(e,n,r){return r(function(){hg(n)&&dg(e)})}function hg(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!_i(e,r)}catch{return!0}}function dg(e){var n=ss(e,2);n!==null&&ni(n,e,2)}function od(e){var n=Yn();if(typeof e=="function"){var r=e;if(e=r(),gs){Mn(!0);try{r()}finally{Mn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:e},n}function pg(e,n,r,o){return e.baseState=r,rd(e,Be,typeof o=="function"?o:Ha)}function l1(e,n,r,o,c){if(bc(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};St.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,mg(n,d)):(d.next=r.next,n.pending=r.next=d)}}function mg(e,n){var r=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=St.T,S={};S.types=d!==null?d.types:null,St.T=S;try{var A=r(c,o),F=St.S;F!==null&&F(S,A),_g(e,n,A)}catch(j){ld(e,n,j)}finally{d!==null&&S.types!==null&&(d.types=S.types),St.T=d}}else try{d=r(c,o),_g(e,n,d)}catch(j){ld(e,n,j)}}function _g(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){gg(e,n,o)},function(o){return ld(e,n,o)}):gg(e,n,r)}function gg(e,n,r){n.status="fulfilled",n.value=r,vg(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,mg(e,r)))}function ld(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,vg(n),n=n.next;while(n!==o)}e.action=null}function vg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function xg(e,n){return n}function yg(e,n){if(pe){var r=ke.formState;if(r!==null){t:{var o=le;if(pe){if(qe){e:{for(var c=qe,d=Fi;c.nodeType!==8;){if(!d){c=null;break e}if(c=Vi(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){qe=Vi(c.nextSibling),o=c.data==="F!";break t}}pr(o)}o=!1}o&&(n=r[0])}}return r=Yn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:n},r.queue=o,r=Fg.bind(null,le,o),o.dispatch=r,o=od(!1),d=pd.bind(null,le,!1,o.queue),o=Yn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,r=l1.bind(null,le,c,d,r),c.dispatch=r,o.memoizedState=e,[n,r,!1]}function Sg(e){var n=rn();return Mg(n,Be,e)}function Mg(e,n,r){if(n=rd(e,n,xg)[0],e=Mc(Ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Hl(n)}catch(S){throw S===so?hc:S}else o=n;n=rn();var c=n.queue,d=c.dispatch;return r!==n.memoizedState&&(le.flags|=2048,co(9,{destroy:void 0},u1.bind(null,c,r),null)),[o,d,e]}function u1(e,n){e.action=n}function Eg(e){var n=rn(),r=Be;if(r!==null)return Mg(n,r,e);rn(),n=n.memoizedState,r=rn();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function co(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=yc(),le.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function Tg(){return rn().memoizedState}function Ec(e,n,r,o){var c=Yn();le.flags|=e,c.memoizedState=co(1|n,{destroy:void 0},r,o===void 0?null:o)}function Tc(e,n,r,o){var c=rn();o=o===void 0?null:o;var d=c.memoizedState.inst;Be!==null&&o!==null&&$h(o,Be.memoizedState.deps)?c.memoizedState=co(n,d,r,o):(le.flags|=e,c.memoizedState=co(1|n,d,r,o))}function bg(e,n){Ec(8390656,8,e,n)}function ud(e,n){Tc(2048,8,e,n)}function c1(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=yc(),le.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function Ag(e){var n=rn().memoizedState;return c1({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Rg(e,n){return Tc(4,2,e,n)}function Cg(e,n){return Tc(4,4,e,n)}function wg(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dg(e,n,r){r=r!=null?r.concat([e]):null,Tc(4,4,wg.bind(null,n,e),r)}function cd(){}function Ug(e,n){var r=rn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&$h(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function Ng(e,n){var r=rn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&$h(n,o[1]))return o[0];if(o=e(),gs){Mn(!0);try{e()}finally{Mn(!1)}}return r.memoizedState=[o,n],o}function fd(e,n,r){return r===void 0||(Fa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=Gv(),le.lanes|=e,Ar|=e,r)}function Lg(e,n,r,o){return _i(r,n)?r:yr.current!==null?(e=fd(e,r,o),_i(e,n)||(cn=!0),e):(Fa&106)===0||(Fa&1073741824)!==0&&(ye&261930)===0?(cn=!0,e.memoizedState=r):(e=Gv(),le.lanes|=e,Ar|=e,n)}function Og(e,n,r,o,c){var d=At.p;At.p=d!==0&&8>d?d:8;var S=St.T,A={};A.types=S!==null?S.types:null,St.T=A,pd(e,!1,n,r);try{var F=c(),j=St.S;if(j!==null&&j(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var at=r1(F,o);Vl(e,n,at,Si(e))}else Vl(e,n,o,Si(e))}catch(dt){Vl(e,n,{then:function(){},status:"rejected",reason:dt},Si())}finally{At.p=d,S!==null&&A.types!==null&&(S.types=A.types),St.T=S}}function f1(){}function hd(e,n,r,o){if(e.tag!==5)throw Error(a(476));var c=Pg(e).queue;Og(e,c,n,Ae,r===null?f1:function(){return zg(e),r(o)})}function Pg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Ae,baseState:Ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:Ae},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function zg(e){var n=Pg(e);n.next===null&&(n=e.alternate.memoizedState),Vl(e,n.next.queue,{},Si())}function dd(){return Cn(Do)}function Ig(){return rn().memoizedState}function Bg(){return rn().memoizedState}function h1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Si();e=vr(r);var o=xr(n,e,r);o!==null&&(ni(o,n,r),Pl(o,n,r)),n={cache:Vh()},e.payload=n;return}n=n.return}}function d1(e,n,r){var o=Si();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bc(e)?Hg(n,r):(r=Nh(e,n,r,o),r!==null&&(ni(r,e,o),Vg(r,n,o)))}function Fg(e,n,r){var o=Si();Vl(e,n,r,o)}function Vl(e,n,r,o){var c={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(bc(e))Hg(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,r);if(c.hasEagerState=!0,c.eagerState=A,_i(A,S))return nc(e,n,c,0),ke===null&&ec(),!1}catch{}finally{}if(r=Nh(e,n,c,o),r!==null)return ni(r,e,o),Vg(r,n,o),!0}return!1}function pd(e,n,r,o){if(o={lane:2,revertLane:ap(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bc(e)){if(n)throw Error(a(479))}else n=Nh(e,r,o,2),n!==null&&ni(n,e,2)}function bc(e){var n=e.alternate;return e===le||n!==null&&n===le}function Hg(e,n){lo=vc=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Vg(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,lt(e,r)}}var Ac={readContext:Cn,use:Sc,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},Gg={readContext:Cn,use:Sc,useCallback:function(e,n){return Yn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:bg,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Ec(4194308,4,wg.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Ec(4194308,4,e,n)},useInsertionEffect:function(e,n){Ec(4,2,e,n)},useMemo:function(e,n){var r=Yn();n=n===void 0?null:n;var o=e();if(gs){Mn(!0);try{e()}finally{Mn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Yn();if(r!==void 0){var c=r(n);if(gs){Mn(!0);try{r(n)}finally{Mn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=d1.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Yn();return e={current:e},n.memoizedState=e},useState:function(e){e=od(e);var n=e.queue,r=Fg.bind(null,le,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:cd,useDeferredValue:function(e,n){var r=Yn();return fd(r,e,n)},useTransition:function(){var e=od(!1);return e=Og.bind(null,le,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=le,c=Yn();if(pe){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),ke===null)throw Error(a(349));(ye&127)!==0||ug(o,n,r)}c.memoizedState=r;var d={value:r,getSnapshot:n};return c.queue=d,bg(fg.bind(null,o,d,e),[e]),o.flags|=2048,co(9,{destroy:void 0},cg.bind(null,o,d,r,n),null),r},useId:function(){var e=Yn(),n=ke.identifierPrefix;if(pe){var r=ca,o=ua;r=(o&~(1<<32-Pn(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=xc++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=s1++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:dd,useFormState:yg,useActionState:yg,useOptimistic:function(e){var n=Yn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=pd.bind(null,le,!0,r),r.dispatch=n,[e,n]},useMemoCache:ad,useCacheRefresh:function(){return Yn().memoizedState=h1.bind(null,le)},useEffectEvent:function(e){var n=Yn(),r={impl:e};return n.memoizedState=r,function(){if((De&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},kg={readContext:Cn,use:Sc,useCallback:Ug,useContext:Cn,useEffect:ud,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ng,useReducer:Mc,useRef:Tg,useState:function(){return Mc(Ha)},useDebugValue:cd,useDeferredValue:function(e,n){var r=rn();return Lg(r,Be.memoizedState,e,n)},useTransition:function(){var e=Mc(Ha)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Hl(e),n]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:dd,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,n){var r=rn();return pg(r,Be,e,n)},useMemoCache:ad,useCacheRefresh:Bg,useEffectEvent:Ag},p1={readContext:Cn,use:Sc,useCallback:Ug,useContext:Cn,useEffect:ud,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ng,useReducer:sd,useRef:Tg,useState:function(){return sd(Ha)},useDebugValue:cd,useDeferredValue:function(e,n){var r=rn();return Be===null?fd(r,e,n):Lg(r,Be.memoizedState,e,n)},useTransition:function(){var e=sd(Ha)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Hl(e),n]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:dd,useFormState:Eg,useActionState:Eg,useOptimistic:function(e,n){var r=rn();return Be!==null?pg(r,Be,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:ad,useCacheRefresh:Bg,useEffectEvent:Ag};function md(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:N({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var _d={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=Si(),c=vr(o);c.payload=n,r!=null&&(c.callback=r),n=xr(e,c,o),n!==null&&(ni(n,e,o),Pl(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=Si(),c=vr(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=xr(e,c,o),n!==null&&(ni(n,e,o),Pl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Si(),o=vr(r);o.tag=2,n!=null&&(o.callback=n),n=xr(e,o,r),n!==null&&(ni(n,e,r),Pl(n,e,r))}};function Xg(e,n,r,o,c,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!Rl(r,o)||!Rl(c,d):!0}function qg(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&_d.enqueueReplaceState(n,n.state,null)}function vs(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=N({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}function Yg(e){tc(e)}function Wg(e){console.error(e)}function jg(e){tc(e)}function Rc(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Zg(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function gd(e,n,r){return r=vr(r),r.tag=3,r.payload={element:null},r.callback=function(){Rc(e,n)},r}function Kg(e){return e=vr(e),e.tag=3,e}function Qg(e,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){Zg(n,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Zg(n,r,o),typeof c!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function m1(e,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&cs(n,r,c,!0),r=wn.current,r!==null){switch(r.tag){case 31:case 13:case 19:return Bn===null?jc():r.alternate===null&&nn===0&&(nn=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===dc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),ep(e,o,c)),!1;case 22:return r.flags|=65536,o===dc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),ep(e,o,c)),!1}throw Error(a(435,r.tag))}return ep(e,o,c),jc(),!1}if(pe)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Ih&&(e=Error(a(422),{cause:o}),Dl(zi(e,r)))):(o!==Ih&&(n=Error(a(423),{cause:o}),Dl(zi(n,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=zi(o,r),c=gd(e.stateNode,o,c),Wh(e,c),nn!==4&&(nn=2)),!1;var d=Error(a(520),{cause:o});if(d=zi(d,r),Zl===null?Zl=[d]:Zl.push(d),nn!==4&&(nn=2),n===null)return!0;o=zi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=gd(r.stateNode,o,e),Wh(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Rr===null||!Rr.has(d))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Kg(c),Qg(c,e,r,o),Wh(r,c),!1;break;case 22:if(r.memoizedState!==null)return r.flags|=65536,!1}r=r.return}while(r!==null);return!1}var vd=Error(a(461)),cn=!1;function vn(e,n,r,o){n.child=e===null?eg(n,null,r,o):_s(n,e.child,r,o)}function Jg(e,n,r,o,c){r=r.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return fs(n),o=td(e,n,r,S,d,c),A=ed(),e!==null&&!cn?(nd(e,n,c),Va(e,n,c)):(pe&&A&&sc(n),n.flags|=1,vn(e,n,o,c),n.child)}function $g(e,n,r,o,c){if(e===null){var d=r.type;return typeof d=="function"&&!Lh(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,tv(e,n,d,o,c)):(e=ac(r.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Ad(e,c)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:Rl,r(S,o)&&e.ref===n.ref)return Va(e,n,c)}return n.flags|=1,e=Pa(d,o),e.ref=n.ref,e.return=n,n.child=e}function tv(e,n,r,o,c){if(e!==null){var d=e.memoizedProps;if(Rl(d,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=d,Ad(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Va(e,n,c)}return xd(e,n,r,o,c)}function ev(e,n,r,o){var c=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return nv(e,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fc(n,d!==null?d.cachePool:null),d!==null?ag(n,d):Zh(),rg(n);else return o=n.lanes=536870912,nv(e,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(fc(n,d.cachePool),ag(n,d),Mr(),n.memoizedState=null):(e!==null&&fc(n,null),Zh(),Mr());return vn(e,n,c,r),n.child}function Gl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function nv(e,n,r,o,c){var d=kh();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&fc(n,null),Zh(),rg(n),e!==null&&cs(e,n,o,!0),n.childLanes=c,null}function Cc(e,n){return n=wc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function iv(e,n,r){return _s(n,e.child,null,r),e=Cc(n,n.pendingProps),e.flags|=2,gi(n),n.memoizedState=null,e}function _1(e,n,r){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(pe){if(o.mode==="hidden")return e=Cc(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Gl(null,e);if(Qh(n),(e=qe)?(e=wx(e,Fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:hr!==null?{id:ua,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},r=H0(e),r.return=n,n.child=r,En=n,qe=null)):e=null,e===null)throw pr(n);return n.lanes=536870912,null}return Cc(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(Qh(n),c)if(n.flags&256)n.flags&=-257,n=iv(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(cn||cs(e,n,r,!1),c=(r&e.childLanes)!==0,cn||c){if(yr.current===null){if(o=ke,o!==null&&(S=Q(o,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,ss(e,S),ni(o,e,S),vd;jc()}n=iv(e,n,r)}else e=d.treeContext,qe=Vi(S.nextSibling),En=n,pe=!0,dr=null,Fi=!1,e!==null&&k0(n,e),n=Cc(n,o),n.flags|=134221824;return n}return e=Pa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function fo(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function xd(e,n,r,o,c){return fs(n),r=td(e,n,r,o,void 0,c),o=ed(),e!==null&&!cn?(nd(e,n,c),Va(e,n,c)):(pe&&o&&sc(n),n.flags|=1,vn(e,n,r,c),n.child)}function av(e,n,r,o,c,d){return fs(n),n.updateQueue=null,r=og(n,o,r,c),sg(e),o=ed(),e!==null&&!cn?(nd(e,n,d),Va(e,n,d)):(pe&&o&&sc(n),n.flags|=1,vn(e,n,r,d),n.child)}function rv(e,n,r,o,c){if(fs(n),n.stateNode===null){var d=eo,S=r.contextType;typeof S=="object"&&S!==null&&(d=Cn(S)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=_d,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},qh(n),S=r.contextType,d.context=typeof S=="object"&&S!==null?Cn(S):eo,d.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(md(n,r,S,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&_d.enqueueReplaceState(d,d.state,null),Il(n,o,d,c),zl(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,F=vs(r,A);d.props=F;var j=d.context,at=r.contextType;S=eo,typeof at=="object"&&at!==null&&(S=Cn(at));var dt=r.getDerivedStateFromProps;at=typeof dt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,at||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||j!==S)&&qg(n,d,o,S),gr=!1;var q=n.memoizedState;d.state=q,Il(n,o,d,c),zl(),j=n.memoizedState,A||q!==j||gr?(typeof dt=="function"&&(md(n,r,dt,o),j=n.memoizedState),(F=gr||Xg(n,r,F,o,q,j,S))?(at||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=j),d.props=o,d.state=j,d.context=S,o=F):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Yh(e,n),S=n.memoizedProps,at=vs(r,S),d.props=at,dt=n.pendingProps,q=d.context,j=r.contextType,F=eo,typeof j=="object"&&j!==null&&(F=Cn(j)),A=r.getDerivedStateFromProps,(j=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==dt||q!==F)&&qg(n,d,o,F),gr=!1,q=n.memoizedState,d.state=q,Il(n,o,d,c),zl();var nt=n.memoizedState;S!==dt||q!==nt||gr||e!==null&&e.dependencies!==null&&uc(e.dependencies)?(typeof A=="function"&&(md(n,r,A,o),nt=n.memoizedState),(at=gr||Xg(n,r,at,o,q,nt,F)||e!==null&&e.dependencies!==null&&uc(e.dependencies))?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,nt,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,nt,F)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=nt),d.props=o,d.state=nt,d.context=F,o=at):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,fo(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=_s(n,e.child,null,c),n.child=_s(n,null,r,c)):vn(e,n,r,c),n.memoizedState=d.state,e=n.child):e=Va(e,n,c),e}function sv(e,n,r,o){return ls(),n.flags|=256,vn(e,n,r,o),n.child}var yd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sd(e){return{baseLanes:e,cachePool:Z0()}}function Md(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=yi),e}function ov(e,n,r){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(Dn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(pe){if(c?Sr(n):Mr(),(e=qe)?(e=wx(e,Fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:hr!==null?{id:ua,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},r=H0(e),r.return=n,n.child=r,En=n,qe=null)):e=null,e===null)throw pr(n);return Sp(e)?n.lanes=32:n.lanes=536870912,null}return d=o.children,o=o.fallback,c?(Mr(),c=n.mode,d=wc({mode:"hidden",children:d},c),o=os(o,c,r,null),d.return=n,o.return=n,d.sibling=o,n.child=d,o=n.child,o.memoizedState=Sd(r),o.childLanes=Md(e,S,r),n.memoizedState=yd,Gl(null,o)):(Sr(n),Ed(n,d))}var A=e.memoizedState;if(A!==null){var F=A.dehydrated;if(F!==null)return g1(e,n,d,S,o,F,A,r)}return c?(Mr(),c=o.fallback,d=n.mode,A=e.child,F=A.sibling,o=Pa(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&1206910976,F!==null?c=Pa(F,c):(c=os(c,d,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,Gl(null,o),o=n.child,c=e.child.memoizedState,c===null?c=Sd(r):(d=c.cachePool,d!==null?(A=ln._currentValue,d=d.parent!==A?{parent:A,pool:A}:d):d=Z0(),c={baseLanes:c.baseLanes|r,cachePool:d}),o.memoizedState=c,o.childLanes=Md(e,S,r),n.memoizedState=yd,Gl(e.child,o)):(Sr(n),r=e.child,e=r.sibling,r=Pa(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=r,n.memoizedState=null,r)}function Ed(e,n){return n=wc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wc(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Dc(e,n,r){return _s(n,e.child,null,r),e=Ed(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function g1(e,n,r,o,c,d,S,A){if(r)return n.flags&256?(Sr(n),n.flags&=-257,Dc(e,n,A)):n.memoizedState!==null?(Mr(),n.child=e.child,n.flags|=128,null):(Mr(),d=c.fallback,S=n.mode,c=wc({mode:"visible",children:c.children},S),d=os(d,S,A,null),d.flags|=2,c.return=n,d.return=n,c.sibling=d,n.child=c,_s(n,e.child,null,A),c=n.child,c.memoizedState=Sd(A),c.childLanes=Md(e,o,A),n.memoizedState=yd,Gl(null,c));if(Sr(n),Sp(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var F=o.dgst;return o=F,o!==""&&(c=Error(a(419)),c.stack="",c.digest=o,Dl({value:c,source:null,stack:null})),Dc(e,n,A)}if(cn||cs(e,n,A,!1),o=(A&e.childLanes)!==0,cn||o){if(yr.current!==null)return Dc(e,n,A);if(o=ke,o!==null&&(c=Q(o,A),c!==0&&c!==S.retryLane))throw S.retryLane=c,ss(e,c),ni(o,e,c),vd;return yp(d)||jc(),Dc(e,n,A)}return yp(d)?(n.flags|=192,n.child=e.child,null):(e=S.treeContext,qe=Vi(d.nextSibling),En=n,pe=!0,dr=null,Fi=!1,e!==null&&k0(n,e),n=Ed(n,c.children),n.flags|=134221824,n)}function lv(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),lc(e.return,n,r)}function uv(e){for(var n=null;e!==null;){var r=e.alternate;r!==null&&gc(r)===null&&(n=e),e=e.sibling}return n}function Uc(e,n,r,o,c,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=c,S.treeForkCount=d)}function Td(e){var n=e.child;for(e.child=null;n!==null;){var r=n.sibling;n.sibling=e.child,e.child=n,n=r}}function bd(e,n,r){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var S=Dn.current;if(n.flags&128)return Bl(n,S),null;var A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,Bl(n,S),c==="backwards"&&e!==null?(Td(e),vn(e,n,o,r),Td(e)):vn(e,n,o,r),o=pe?wl:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lv(e,r,n);else if(e.tag===19)lv(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":r=uv(n.child),r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null,Td(n)),Uc(n,!0,c,null,d,o);break;case"unstable_legacy-backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gc(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}Uc(n,!0,r,null,d,o);break;case"together":Uc(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:r=uv(n.child),r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Uc(n,!1,c,r,d,o)}return n.child}function cv(e,n,r){var o=n.pendingProps;return mr(n,n.type,o.value),vn(e,n,o.children,r),n.child}function Va(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Ar|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(cs(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Pa(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Pa(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Ad(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&uc(e)))}function v1(e,n,r){switch(n.tag){case 3:it(n,n.stateNode.containerInfo),mr(n,ln,e.memoizedState.cache),ls();break;case 27:case 5:yt(n);break;case 4:it(n,n.stateNode.containerInfo);break;case 10:mr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qh(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Sr(n),n.flags|=128,null;o=cs(e,n,r,!1);var c=n.child.childLanes;return o||(r&c)!==0?ov(e,n,r):(Sr(n),e=Va(e,n,r),e!==null?e.sibling:null)}Sr(n);break;case 19:if(n.flags&128)return bd(e,n,r);if(c=(e.flags&128)!==0,o=(r&n.childLanes)!==0,o||(cs(e,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return bd(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Bl(n,Dn.current),o)break;return null;case 22:return n.lanes=0,ev(e,n,r,n.pendingProps);case 24:mr(n,ln,e.memoizedState.cache)}return Va(e,n,r)}function fv(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ad(e,r)&&(n.flags&128)===0)return cn=!1,v1(e,n,r);cn=(e.flags&131072)!==0}else cn=!1,pe&&(n.flags&1048576)!==0&&G0(n,wl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ps(n.elementType),n.type=e,typeof e=="function")Lh(e)?(o=vs(e,o),n.tag=1,n=rv(null,n,e,o,r)):(n.tag=0,n=xd(null,n,e,o,r));else{if(e!=null){var c=e.$$typeof;if(c===G){n.tag=11,n=Jg(null,n,e,o,r);break t}else if(c===vt){n.tag=14,n=$g(null,n,e,o,r);break t}else if(c===st){n.tag=10,n.type=e,n=cv(null,n,r);break t}}throw n=Ct(e)||e,Error(a(306,n,""))}}return n;case 0:return xd(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=vs(o,n.pendingProps),rv(e,n,o,c,r);case 3:t:{if(it(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Yh(e,n),Il(n,o,null,r);var S=n.memoizedState;if(o=S.cache,mr(n,ln,o),o!==d.cache&&Hh(n,[ln],r,!0),zl(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=sv(e,n,o,r);break t}else if(o!==c){c=zi(Error(a(424)),n),Dl(c),n=sv(e,n,o,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=Vi(e.firstChild),En=n,pe=!0,dr=null,Fi=!0,r=eg(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|134221824,r=r.sibling}else{if(ls(),o===c){n=Va(e,n,r);break t}vn(e,n,o,r)}n=n.child}return n;case 26:return fo(e,n),e===null?(r=zx(n.type,null,n.pendingProps,null))?n.memoizedState=r:pe||(n.stateNode=mx(n.type,n.pendingProps,I.current,n)):n.memoizedState=zx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return yt(n),e===null&&pe&&(o=n.stateNode=Nx(n.type,n.pendingProps,I.current),En=n,Fi=!0,c=qe,Dr(n.type)?(Mp=c,qe=Vi(o.firstChild)):qe=c),vn(e,n,n.pendingProps.children,r),fo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&pe&&((c=o=qe)&&(o=hT(o,n.type,n.pendingProps,Fi),o!==null?(n.stateNode=o,En=n,qe=Vi(o.firstChild),Fi=!1,c=!0):c=!1),c||pr(n)),yt(n),c=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,dp(c,d)?o=null:S!==null&&dp(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=td(e,n,o1,null,null,r),Do._currentValue=c),fo(e,n),vn(e,n,o,r),n.child;case 6:return e===null&&pe&&((e=r=qe)&&(r=dT(r,n.pendingProps,Fi),r!==null?(n.stateNode=r,En=n,qe=null,e=!0):e=!1),e||pr(n)),null;case 13:return ov(e,n,r);case 4:return it(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=_s(n,null,o,r):vn(e,n,o,r),n.child;case 11:return Jg(e,n,n.type,n.pendingProps,r);case 7:return o=n.pendingProps,fo(e,n),vn(e,n,o,r),n.child;case 8:return vn(e,n,n.pendingProps.children,r),n.child;case 12:return vn(e,n,n.pendingProps.children,r),n.child;case 10:return cv(e,n,r);case 9:return c=n.type._context,o=n.pendingProps.children,fs(n),c=Cn(c),o=o(c),n.flags|=1,vn(e,n,o,r),n.child;case 14:return $g(e,n,n.type,n.pendingProps,r);case 15:return tv(e,n,n.type,n.pendingProps,r);case 19:return bd(e,n,r);case 31:return _1(e,n,r);case 22:return ev(e,n,r,n.pendingProps);case 24:return fs(n),o=Cn(ln),e===null?(c=kh(),c===null&&(c=ke,d=Vh(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=r),c=d),n.memoizedState={parent:o,cache:c},qh(n),mr(n,ln,c)):((e.lanes&r)!==0&&(Yh(e,n),Il(n,null,null,r),zl()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),mr(n,ln,o)):(o=d.cache,mr(n,ln,o),o!==c.cache&&Hh(n,[ln],r,!0))),vn(e,n,n.pendingProps.children,r),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:pe&&sc(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:fo(e,n),vn(e,n,o.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Ga(e){e.flags|=4}function Rd(e,n,r,o,c){var d;if((d=(e.mode&32)!==0)&&(d=r===null?Hx(n,o):Hx(n,o)&&(o.src!==r.src||o.srcSet!==r.srcSet)),d){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Yv())e.flags|=8192;else throw ms=dc,Xh}else e.flags&=-16777217}function hv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vx(n))if(Yv())e.flags|=8192;else throw ms=dc,Xh}function Nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ku():536870912,e.lanes|=n,go|=n)}function kl(e,n){if(!pe)switch(e.tailMode){case"visible":break;case"collapsed":for(var r=e.tail,o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&1206910976,o|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function x1(e,n,r){var o=n.pendingProps;switch(zh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ba(ln),_t(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(n)?Ga(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bh())),Ye(n),null;case 26:var c=n.type,d=n.memoizedState;return e===null?(Ga(n),d!==null?(Ye(n),hv(n,d)):(Ye(n),Rd(n,c,null,o,r))):d?d!==e.memoizedState?(Ga(n),Ye(n),hv(n,d)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ga(n),Ye(n),Rd(n,c,e,o,r)),null;case 27:if(pt(n),r=I.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ye(n),n.subtreeFlags&=-33554433,null}e=xe.current,ao(n)?X0(n):(e=Nx(c,o,r),n.stateNode=e,Ga(n))}return Ye(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ye(n),n.subtreeFlags&=-33554433,null}if(d=xe.current,ao(n))X0(n);else{var S=tu(I.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}d[jt]=n,d[Bt]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(Nn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ga(n)}}return Ye(n),n.subtreeFlags&=-33554433,Rd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=I.current,ao(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,c=En,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[jt]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||fx(e.nodeValue,r)),e||pr(n,!0)}else e=tu(e).createTextNode(o),e[jt]=n,n.stateNode=e}return Ye(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=ao(n),r!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[jt]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else r=Bh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ao(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[jt]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),c=!1}else c=Bh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Nc(n,n.updateQueue),Ye(n),null);case 4:return _t(),e===null&&lp(n.stateNode.containerInfo),n.flags|=67108864,Ye(n),null;case 10:return Ba(n.type),Ye(n),null;case 19:if(Jh(n),o=n.memoizedState,o===null)return Ye(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)kl(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=gc(e),d!==null){for(n.flags|=128,kl(o,!1),e=d.updateQueue,n.updateQueue=e,Nc(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)F0(r,e),r=r.sibling;return Bl(n,Dn.current&1|2),pe&&za(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&k()>Xc&&(n.flags|=128,c=!0,kl(o,!1),n.lanes=4194304)}else{if(!c)if(e=gc(d),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Nc(n,e),kl(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!d.alternate&&!pe)return Ye(n),null}else 2*k()-o.renderingStartTime>Xc&&r!==536870912&&(n.flags|=128,c=!0,kl(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}if(o.tail!==null){e=o.tail;t:{for(r=e;r!==null;){if(r.alternate!==null){r=!1;break t}r=r.sibling}r=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=k(),e.sibling=null,d=Dn.current,d=c?d&1|2:d&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!r||pe?Bl(n,d):(r=d,Dt(wn,n),Dt(Dn,r),Bn===null&&(Bn=n)),pe&&za(n,o.treeForkCount),e}return Ye(n),null;case 22:case 23:return gi(n),Kh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),r=n.updateQueue,r!==null&&Nc(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&$t(ds),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ba(ln),Ye(n),null;case 25:return null;case 30:return n.flags|=33554432,Ye(n),null}throw Error(a(156,n.tag))}function y1(e,n){switch(zh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ba(ln),_t(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(a(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Jh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return _t(),null;case 10:return Ba(n.type),null;case 22:case 23:return gi(n),Kh(),e!==null&&$t(ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ba(ln),null;case 25:return null;default:return null}}function dv(e,n){switch(zh(n),n.tag){case 3:Ba(ln),_t();break;case 26:case 27:case 5:pt(n);break;case 4:_t();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:Jh(n);break;case 10:Ba(n.type);break;case 22:case 23:gi(n),Kh(),e!==null&&$t(ds);break;case 24:Ba(ln)}}function Xl(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){o=void 0;var d=r.create,S=r.inst;o=d(),S.destroy=o}r=r.next}while(r!==c)}}catch(A){Pe(n,n.return,A)}}function Er(e,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var F=r,j=A;try{j()}catch(at){Pe(c,F,at)}}}o=o.next}while(o!==d)}}catch(at){Pe(n,n.return,at)}}function pv(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{ig(n,r)}catch(o){Pe(e,e.return,o)}}}function mv(e,n,r){r.props=vs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Pe(e,n,o)}}function fa(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var c=e.stateNode,d=La(e.memoizedProps,c);(c.ref===null||c.ref.name!==d)&&(c.ref=Mx(d)),o=c.ref;break;case 7:if(e.stateNode===null){var S=new Mi(e);g(e.child,!1,cT,S,void 0,void 0),e.stateNode=S}o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(A){Pe(e,n,A)}}function Un(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Pe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Pe(e,n,c)}else r.current=null}function Lc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var r=0;r<n.length;r++)Cx(e.stateNode,n[r])}function _v(e){for(var n=e.return;n!==null&&(wd(n)&&Cx(e.stateNode,n.stateNode),!Cd(n));)n=n.return}function ql(e){for(var n=e.return;n!==null&&(wd(n)&&fT(e.stateNode,n.stateNode),!Cd(n));)n=n.return}function Cd(e){return e.tag===5||e.tag===3||e.tag===27}function wd(e){return e&&e.tag===7&&e.stateNode!==null}function Dd(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Pe(e,e.return,c)}}function Ud(e,n,r){try{var o=e.stateNode;Y1(o,e.type,r,n),o[Bt]=n}catch(c){Pe(e,e.return,c)}}function gv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dr(e.type)||e.tag===4}function Nd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||gv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ld(e,n,r,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(c,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(c),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=la)),Lc(e,o),we=!0;else if(c!==4&&(c===27&&(Lc(e,o),o=null,Dr(e.type)&&(r=e.stateNode,n=null)),e=e.child,e!==null))for(Ld(e,n,r,o),e=e.sibling;e!==null;)Ld(e,n,r,o),e=e.sibling}function Oc(e,n,r,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?r.insertBefore(c,n):r.appendChild(c),Lc(e,o),we=!0;else if(c!==4&&(c===27&&(Lc(e,o),o=null,Dr(e.type)&&(r=e.stateNode)),e=e.child,e!==null))for(Oc(e,n,r,o),e=e.sibling;e!==null;)Oc(e,n,r,o),e=e.sibling}function vv(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Nn(n,o,r),n[jt]=e,n[Bt]=r}catch(d){Pe(e,e.return,d)}}var Pc=!1,vi=null;function xv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Pc=!0)}var ha=null;function yv(){var e=ha;return ha=null,e}var $n=0;function ho(e,n,r,o,c){return $n=0,Sv(e.child,n,r,o,c)}function Sv(e,n,r,o,c){for(var d=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(o!==null){var A=_p(S);o.push(A),A.view&&(d=!0)}else d||_p(S).view&&(d=!0);Pc=!0,yx(S,$n===0?n:n+"_"+$n,r),$n++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Sv(e.child,n,r,o,c)&&(d=!0));e=e.sibling}return d}function da(e,n){for(;e!==null;)e.tag===5?Sx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||da(e.child,n)),e=e.sibling}function zc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(zc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(a(544));var r=n.name;n=Oa(n.default,n.share),n!=="none"&&(ho(e,r,n,null,!1)||da(e.child,!1))}e=e.sibling}}function Od(e,n){if(e.tag===30){var r=e.stateNode,o=e.memoizedProps,c=La(o,r),d=Oa(o.default,r.paired?o.share:o.enter);d!=="none"?ho(e,c,d,null,!1)?(zc(e),r.paired||n||So(e,o.onEnter)):da(e.child,!1):zc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Od(e,n),e=e.sibling;else zc(e)}function Pd(e){if(vi!==null&&vi.size!==0){var n=vi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var r=e.memoizedProps,o=r.name;if(o!=null&&o!=="auto"){var c=n.get(o);if(c!==void 0){var d=Oa(r.default,r.share);if(d!=="none"&&(ho(e,o,d,null,!1)?(d=e.stateNode,c.paired=d,d.paired=c,So(e,r.onShare)):da(e.child,!1)),n.delete(o),n.size===0)break}}}Pd(e)}e=e.sibling}}}function zd(e){if(e.tag===30){var n=e.memoizedProps,r=La(n,e.stateNode),o=vi!==null?vi.get(r):void 0,c=Oa(n.default,o!==void 0?n.share:n.exit);c!=="none"&&(ho(e,r,c,null,!1)?o!==void 0?(c=e.stateNode,o.paired=c,c.paired=o,vi.delete(r),So(e,n.onShare)):So(e,n.onExit):da(e.child,!1)),vi!==null&&Pd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)zd(e),e=e.sibling;else vi!==null&&Pd(e)}function Mv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=La(n,e.stateNode);n=Oa(n.default,n.update),e.flags&=-5,n!=="none"&&ho(e,r,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Mv(e);e=e.sibling}}function Id(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,da(e.child,!1))}Id(e)}e=e.sibling}}function Ic(e){if(e.tag===30)e.stateNode.paired=null,da(e.child,!1),Id(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ic(e),e=e.sibling;else Id(e)}function Ev(e){for(e=e.child;e!==null;)e.tag===30?da(e.child,!1):(e.subtreeFlags&33554432)!==0&&Ev(e),e=e.sibling}function Bd(e,n,r,o,c,d,S){for(var A=!1;n!==null;){if(n.tag===5){var F=n.stateNode;if(d!==null&&$n<d.length){var j=d[$n],at=_p(F);(j.view||at.view)&&(A=!0);var dt;if(dt=(e.flags&4)===0)if(at.clip)dt=!0;else{dt=j.rect;var q=at.rect;dt=dt.y!==q.y||dt.x!==q.x||dt.height!==q.height||dt.width!==q.width}dt&&(e.flags|=4),at.abs?at=!j.abs:(j=j.rect,at=at.rect,at=j.height!==at.height||j.width!==at.width),at&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&yx(F,$n===0?r:r+"_"+$n,c),A&&(e.flags&4)!==0||(ha===null&&(ha=[]),ha.push(F,$n===0?o:o+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?e.flags|=n.flags&32:Bd(e,n.child,r,o,c,d,S)&&(A=!0));n=n.sibling}return A}function Tv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var r=e.memoizedProps,o=e.stateNode,c=La(r,o),d=Oa(r.default,r.update),S;S=e.memoizedState,e.memoizedState=null,o=e;var A=e.child;$n=0,c=Bd(o,A,c,c,d,S,!1),(e.flags&4)!==0&&c&&So(e,r.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Tv(e);e=e.sibling}}var Tn=!1,Ue=!1,pa=!1,Fd=!1,bv=typeof WeakSet=="function"?WeakSet:Set,bn=null,ma=!1,Yl=!1,Bc=!1,Hd=!1;function S1(e,n,r){if(e=e.containerInfo,fp=Uo,e=w0(e),Ah(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{o.nodeType,S.nodeType}catch{o=null;break t}var A=0,F=-1,j=-1,at=0,dt=0,q=e,nt=null;e:for(;;){for(var Rt;q!==o||d!==0&&q.nodeType!==3||(F=A+d),q!==S||c!==0&&q.nodeType!==3||(j=A+c),q.nodeType===3&&(A+=q.nodeValue.length),(Rt=q.firstChild)!==null;)nt=q,q=Rt;for(;;){if(q===e)break e;if(nt===o&&++at===d&&(F=A),nt===S&&++dt===c&&(j=A),(Rt=q.nextSibling)!==null)break;q=nt,nt=q.parentNode}q=Rt}o=F===-1||j===-1?null:{start:F,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(hp={focusedElem:e,selectionRange:o},Uo=!1,r=(r&335544064)===r,bn=n,n=r?9270:1024;bn!==null;){if(e=bn,r&&(o=e.deletions,o!==null))for(d=0;d<o.length;d++)r&&zd(o[d]);if(e.alternate===null&&(e.flags&2)!==0)r&&xv(e),Fc(r);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&r&&zd(o),Fc(r);continue}else if(o!==null&&o.memoizedState!==null){r&&xv(e),Fc(r);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,bn=o):(r&&Mv(e),Fc(r))}}vi=null}function Fc(e){for(;bn!==null;){var n=bn,r=e,o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&o!==null){r=void 0,c=o.memoizedProps,o=o.memoizedState;var d=n.stateNode;try{var S=vs(n.type,c);r=d.getSnapshotBeforeUpdate(S,o),d.__reactInternalSnapshotBeforeUpdate=r}catch(A){Pe(n,n.return,A)}}break;case 3:if((c&1024)!==0){if(o=n.stateNode.containerInfo,r=o.nodeType,r===9)xp(o);else if(r===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":xp(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&o!==null&&(r=La(o.memoizedProps,o.stateNode),c=n.memoizedProps,c=Oa(c.default,c.update),c!=="none"&&ho(o,r,c,o.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(a(163))}if(o=n.sibling,o!==null){o.return=n.return,bn=o;break}bn=n.return}}function Av(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:_a(e,r),o&4&&Xl(5,r);break;case 1:if(_a(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(S){Pe(r,r.return,S)}else{var c=vs(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Pe(r,r.return,S)}}o&64&&pv(r),o&512&&fa(r,r.return);break;case 3:if(_a(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{ig(e,n)}catch(S){Pe(r,r.return,S)}}break;case 27:n===null&&o&4&&vv(r);case 26:case 5:_a(e,r),n===null&&o&4&&Dd(r),o&512&&fa(r,r.return);break;case 12:_a(e,r);break;case 31:_a(e,r),o&4&&Dv(e,r);break;case 13:_a(e,r),o&4&&Uv(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=L1.bind(null,r),pT(e,r))));break;case 22:if(o=r.memoizedState!==null||Tn,!o){var d=n!==null&&n.memoizedState!==null||Ue;n=Tn,c=Ue,Tn=o,(Ue=d)&&!c?(o=2,(r.subtreeFlags&8772)!==0&&(o|=1),Ji(e,r,o)):_a(e,r),Tn=n,Ue=c}break;case 30:_a(e,r),o&512&&fa(r,r.return);break;case 7:o&512&&fa(r,r.return);default:_a(e,r)}}function Vd(e,n){for(e=e.child;e!==null;)Rv(e,n),e=e.sibling}function Rv(e,n){switch(e.tag){case 5:case 26:try{var r=e.stateNode;if(n){var o=r.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var c=e.stateNode,d=e.memoizedProps.style,S=d!=null&&d.hasOwnProperty("display")?d.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(F){Pe(e,e.return,F)}Gd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,we=!0}catch(F){Pe(e,e.return,F)}break;case 18:try{var A=e.stateNode;n?xx(A,!0):xx(e.stateNode,!1)}catch(F){Pe(e,e.return,F)}break;case 22:case 23:e.memoizedState===null&&Vd(e,n);break;default:Vd(e,n)}}function Gd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var r=e,o=n;switch(r.tag){case 4:Rv(r,o);break t;case 22:r.memoizedState===null&&Gd(r,o);break t;default:Gd(r,o)}}e=e.sibling}}function Cv(e){var n=e.alternate;n!==null&&(e.alternate=null,Cv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ee(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,ti=!1;function Ki(e,n,r){for(r=r.child;r!==null;)wv(e,n,r),r=r.sibling}function wv(e,n,r){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Me,r)}catch{}switch(r.tag){case 26:Ue||Un(r,n),Ki(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&!Ue&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ue||Un(r,n),ql(r);var o=Ze,c=ti;Dr(r.type)&&(Ze=r.stateNode,ti=!1),Ki(e,n,r),Lx(r.stateNode,r.type,r.memoizedProps),Ze=o,ti=c;break;case 5:Ue||Un(r,n),ql(r);case 6:if(r.tag===6&&ql(r),o=Ze,c=ti,Ze=null,Ki(e,n,r),Ze=o,ti=c,Ze!==null)if(ti)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(r.stateNode),we=!0}catch(d){Pe(r,n,d)}else try{Ze.removeChild(r.stateNode),we=!0}catch(d){Pe(r,n,d)}break;case 18:Ze!==null&&(ti?(e=Ze,vx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),No(e)):vx(Ze,r.stateNode));break;case 4:o=Ze,c=ti,Ze=r.stateNode.containerInfo,ti=!0,Ki(e,n,r),Ze=o,ti=c;break;case 0:case 11:case 14:case 15:Er(2,r,n),Ue||Er(4,r,n),Ki(e,n,r);break;case 1:Ue||(Un(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&mv(r,n,o)),Ki(e,n,r);break;case 21:Ki(e,n,r);break;case 22:Ue=(o=Ue)||r.memoizedState!==null,Ki(e,n,r),Ue=o;break;case 30:Un(r,n),Ki(e,n,r);break;case 7:Ue||Un(r,n),Ki(e,n,r);break;default:Ki(e,n,r)}}function Dv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{No(e)}catch(r){Pe(n,n.return,r)}}}function Uv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(r){Pe(n,n.return,r)}}function M1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bv),n;default:throw Error(a(435,e.tag))}}function Hc(e,n){var r=M1(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var c=O1.bind(null,e,o);o.then(c,c)}})}function Wn(e,n,r){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],S=e,A=n,F=A;t:for(;F!==null;){switch(F.tag){case 27:if(Dr(F.type)){Ze=F.stateNode,ti=!1;break t}break;case 5:Ze=F.stateNode,ti=!1;break t;case 3:case 4:Ze=F.stateNode.containerInfo,ti=!0;break t}F=F.return}if(Ze===null)throw Error(a(160));wv(S,A,d),Ze=null,ti=!1,S=d.alternate,S!==null&&(S.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nv(n,e,r),n=n.sibling}var Qi=null;function Nv(e,n,r){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var d=0;d<o.length;d++){var S=o[d];S.ref.impl=S.nextImpl}Wn(n,e,r),jn(e),c&4&&(Er(3,e,e.return),Xl(3,e),Er(5,e,e.return));break;case 1:Wn(n,e,r),jn(e),c&512&&(Ue||o===null||Un(o,o.return)),c&64&&Tn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?n:r.concat(n))));break;case 26:if(d=Qi,Wn(n,e,r),jn(e),c&512&&(Ue||o===null||Un(o,o.return)),c&4)if(c=o!==null?o.memoizedState:null,r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null)if(Tn)e.stateNode=mx(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,r=e.memoizedProps,c=d.ownerDocument||d;e:switch(n){case"title":o=c.getElementsByTagName("title")[0],(!o||o[Xt]||o[jt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=c.createElement(n),c.head.insertBefore(o,c.querySelector("head > title"))),Nn(o,n,r),o[jt]=e,se(o),n=o;break t;case"link":if(d=Fx("link","href",c).get(n+(r.href||""))){for(S=0;S<d.length;S++)if(o=d[S],o.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&o.getAttribute("rel")===(r.rel==null?null:r.rel)&&o.getAttribute("title")===(r.title==null?null:r.title)&&o.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){d.splice(S,1);break e}}o=c.createElement(n),Nn(o,n,r),c.head.appendChild(o);break;case"meta":if(d=Fx("meta","content",c).get(n+(r.content||""))){for(S=0;S<d.length;S++)if(o=d[S],o.getAttribute("content")===(r.content==null?null:""+r.content)&&o.getAttribute("name")===(r.name==null?null:r.name)&&o.getAttribute("property")===(r.property==null?null:r.property)&&o.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&o.getAttribute("charset")===(r.charSet==null?null:r.charSet)){d.splice(S,1);break e}}o=c.createElement(n),Nn(o,n,r),c.head.appendChild(o);break;default:throw Error(a(468,n))}o[jt]=e,se(o),n=o}e.stateNode=n}else Tn||Ap(d,e.type,e.stateNode);else e.stateNode=Bx(d,r,e.memoizedProps);else c!==r?(c===null?(n=o.stateNode,n===null||Ue||n.parentNode.removeChild(n)):c.count--,r===null?Tn||Ap(d,e.type,e.stateNode):Bx(d,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Ud(e,e.memoizedProps,o.memoizedProps);break;case 27:Wn(n,e,r),jn(e),c&512&&(Ue||o===null||Un(o,o.return)),o!==null&&c&4&&Ud(e,e.memoizedProps,o.memoizedProps);break;case 5:if(d=pa,pa=!1,Wn(n,e,r),pa=d,jn(e),c&512&&(Ue||o===null||Un(o,o.return)),e.flags&32){n=e.stateNode;try{js(n,""),we=!0}catch(at){Pe(e,e.return,at)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Ud(e,n,o!==null?o.memoizedProps:n)),c&1024&&(Fd=!0);break;case 6:if(Wn(n,e,r),jn(e),c&4){if(e.stateNode===null)throw Error(a(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n,we=!0}catch(at){Pe(e,e.return,at)}}break;case 3:if(we=!1,ef=null,d=Qi,Qi=eu(n.containerInfo),Wn(n,e,r),Qi=d,jn(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{No(n.containerInfo)}catch(at){Pe(e,e.return,at)}Fd&&(Fd=!1,Lv(e)),we=!1;break;case 4:c=pa,pa=Tn,o=$_(),d=Qi,Qi=eu(e.stateNode.containerInfo),Wn(n,e,r),jn(e),Qi=d,we&&Yl&&(Bc=!0),we=o,pa=c;break;case 12:Wn(n,e,r),jn(e);break;case 31:Wn(n,e,r),jn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 13:Wn(n,e,r),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(kc=k()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 22:d=e.memoizedState!==null,S=o!==null&&o.memoizedState!==null;var A=Tn,F=Ue,j=pa;Tn=A||d,pa=j||d,Ue=F||S,Wn(n,e,r),Ue=F,pa=j,Tn=A,jn(e),c&8192&&(n=e.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,!d||o===null||S||Tn||Ue||(n=S||Ue,r=Tn,o=Ue,Tn=d||Tn,Ue=n,Tr(e,2),Tn=r,Ue=o),!d&&pa||Vd(e,d)),c&4&&(n=e.updateQueue,n!==null&&(r=n.retryQueue,r!==null&&(n.retryQueue=null,Hc(e,r))));break;case 19:Wn(n,e,r),jn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 30:c&512&&(Ue||o===null||Un(o,o.return)),c=$_(),d=Yl,S=(r&335544064)===r,A=e.memoizedProps,Yl=S&&Oa(A.default,A.update)!=="none",Wn(n,e,r),jn(e),S&&o!==null&&we&&(e.flags|=4),Yl=d,we=c;break;case 21:break;case 7:c&512&&(Ue||o===null||Un(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:Wn(n,e,r),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(gv(o)){r=o;break}o=o.return}o=null;for(var c=e.return;c!==null;){if(wd(c)){var d=c.stateNode;o===null?o=[d]:o.push(d)}if(Cd(c))break;c=c.return}var S=o;if(r==null)throw Error(a(160));switch(r.tag){case 27:var A=r.stateNode,F=Nd(e);Oc(e,F,A,S);break;case 5:var j=r.stateNode;r.flags&32&&(js(j,""),r.flags&=-33);var at=Nd(e);Oc(e,at,j,S);break;case 3:case 4:var dt=r.stateNode.containerInfo,q=Nd(e);Ld(e,q,dt,S);break;default:throw Error(a(161))}}catch(nt){Pe(e,e.return,nt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Lv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Uo=!0,n.reset(),Uo=!1),e=e.sibling}}function po(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Ov(n,e),n=n.sibling;else Tv(n)}function Ov(e,n){var r=e.alternate;if(r===null)Od(e,!1);else switch(e.tag){case 3:if(Hd=ma=!1,yv(),po(n,e),!ma&&!Bc){if(e=ha,e!==null)for(var o=0;o<e.length;o+=3){r=e[o];var c=e[o+1];Sx(r,e[o+2]),r=r.ownerDocument.documentElement,r!==null&&r.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hd=!0}ha=null;break;case 5:po(n,e);break;case 4:o=ma,ma=!1,po(n,e),ma&&(Bc=!0),ma=o;break;case 22:e.memoizedState===null&&(r.memoizedState!==null?Od(e,!1):po(n,e));break;case 30:o=ma,c=yv(),ma=!1,po(n,e),ma&&(e.flags|=4);var d=e.memoizedProps,S=e.stateNode;n=La(d,S),S=La(r.memoizedProps,S);var A=Oa(d.default,d.update);A==="none"?n=!1:(d=r.memoizedState,r.memoizedState=null,r=e.child,$n=0,n=Bd(e,r,n,S,A,d,!0),$n!==(d===null?0:d.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(So(e,e.memoizedProps.onUpdate),ha=c):c!==null&&(c.push.apply(c,ha),ha=c),ma=(e.flags&32)!==0?!0:o;break;default:po(n,e)}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Av(e,n.alternate,n),n=n.sibling}function Tr(e,n){for(e=e.child;e!==null;){var r=e,o=n;switch(r.tag){case 0:case 11:case 14:case 15:Er(4,r,r.return),Tr(r,o);break;case 1:Un(r,r.return);var c=r.stateNode;typeof c.componentWillUnmount=="function"&&mv(r,r.return,c),Tr(r,o);break;case 27:(o&2)!==0&&Lx(r.stateNode,r.type,r.memoizedProps);case 5:Un(r,r.return),r.tag!==5&&r.tag!==27||ql(r),Tr(r,o);break;case 6:ql(r);break;case 26:Un(r,r.return),c=r.stateNode,r.memoizedState!==null||c===null||Ue||c.parentNode.removeChild(c),Tr(r,o);break;case 22:r.memoizedState===null&&Tr(r,o);break;case 30:Un(r,r.return),Tr(r,o);break;case 7:Un(r,r.return);default:Tr(r,o)}e=e.sibling}}function Ji(e,n,r){for(r=(n.subtreeFlags&8772)!==0?r:r&-2,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,S=d.flags,A=(r&1)!==0;switch(d.tag){case 0:case 11:case 15:Ji(c,d,r),Xl(4,d);break;case 1:if(Ji(c,d,r),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(at){Pe(o,o.return,at)}if(o=d,c=o.updateQueue,c!==null){var F=o.stateNode;try{var j=c.shared.hiddenCallbacks;if(j!==null)for(c.shared.hiddenCallbacks=null,c=0;c<j.length;c++)ng(j[c],F)}catch(at){Pe(o,o.return,at)}}A&&S&64&&pv(d),fa(d,d.return);break;case 27:(r&2)!==0&&vv(d);case 5:d.tag!==5&&d.tag!==27||_v(d),Ji(c,d,r),A&&o===null&&S&4&&Dd(d),fa(d,d.return);break;case 6:_v(d);break;case 26:F=d.stateNode,d.memoizedState!==null||F===null||Tn||Ap(eu(F.ownerDocument),d.type,F),Ji(c,d,r),A&&o===null&&S&4&&Dd(d),fa(d,d.return);break;case 12:Ji(c,d,r);break;case 31:Ji(c,d,r),A&&S&4&&Dv(c,d);break;case 13:Ji(c,d,r),A&&S&4&&Uv(c,d);break;case 22:d.memoizedState===null&&Ji(c,d,r),fa(d,d.return);break;case 30:Ji(c,d,r),fa(d,d.return);break;case 7:fa(d,d.return);default:Ji(c,d,r)}n=n.sibling}}function kd(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Ul(r))}function Xd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ul(e))}function Hi(e,n,r,o){var c=(r&335544064)===r;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Pv(e,n,r,o),n=n.sibling;else c&&Ev(n)}function Pv(e,n,r,o){var c=(r&335544064)===r;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ic(n);var d=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(e,n,r,o),d&2048&&Xl(9,n);break;case 1:Hi(e,n,r,o);break;case 3:Hi(e,n,r,o),c&&Hd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),d&2048&&(d=null,n.alternate!==null&&(d=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==d&&(n.refCount++,d!=null&&Ul(d)));break;case 12:if(d&2048){Hi(e,n,r,o),d=n.stateNode;try{var S=n.memoizedProps,A=S.id,F=S.onPostCommit;typeof F=="function"&&F(A,n.alternate===null?"mount":"update",d.passiveEffectDuration,-0)}catch(j){Pe(n,n.return,j)}}else Hi(e,n,r,o);break;case 31:Hi(e,n,r,o);break;case 13:Hi(e,n,r,o);break;case 23:break;case 22:S=n.stateNode,A=n.alternate,n.memoizedState!==null?(c&&A!==null&&A.memoizedState===null&&Ic(A),S._visibility&2?Hi(e,n,r,o):Wl(e,n)):(c&&A!==null&&A.memoizedState!==null&&Ic(n),S._visibility&2?Hi(e,n,r,o):(S._visibility|=2,mo(e,n,r,o,(n.subtreeFlags&10256)!==0||!1))),d&2048&&kd(A,n);break;case 24:Hi(e,n,r,o),d&2048&&Xd(n.alternate,n);break;case 30:c&&(d=n.alternate,d!==null&&(da(d.child,!0),da(n.child,!0))),Hi(e,n,r,o);break;default:Hi(e,n,r,o)}}function mo(e,n,r,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,A=r,F=o,j=S.flags;switch(S.tag){case 0:case 11:case 15:mo(d,S,A,F,c),Xl(8,S);break;case 23:break;case 22:var at=S.stateNode;S.memoizedState!==null?at._visibility&2?mo(d,S,A,F,c):Wl(d,S):(at._visibility|=2,mo(d,S,A,F,c)),c&&j&2048&&kd(S.alternate,S);break;case 24:mo(d,S,A,F,c),c&&j&2048&&Xd(S.alternate,S);break;default:mo(d,S,A,F,c)}n=n.sibling}}function Wl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,c=o.flags;switch(o.tag){case 22:Wl(r,o),c&2048&&kd(o.alternate,o);break;case 24:Wl(r,o),c&2048&&Xd(o.alternate,o);break;default:Wl(r,o)}n=n.sibling}}var xs=8192;function ys(e,n,r){if(e.subtreeFlags&xs)for(e=e.child;e!==null;)zv(e,n,r),e=e.sibling}function zv(e,n,r){switch(e.tag){case 26:ys(e,n,r),e.flags&xs&&(e.memoizedState!==null?CT(r,Qi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&kx(r,e)));break;case 5:ys(e,n,r),e.flags&xs&&(e=e.stateNode,(n&335544128)===n&&kx(r,e));break;case 3:case 4:var o=Qi;Qi=eu(e.stateNode.containerInfo),ys(e,n,r),Qi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=xs,xs=16777216,ys(e,n,r),xs=o):ys(e,n,r));break;case 30:if((e.flags&xs)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var c=e.stateNode;c.paired=null,vi===null&&(vi=new Map),vi.set(o,c)}ys(e,n,r);break;default:ys(e,n,r)}}function Iv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];bn=o,Fv(o,e)}Iv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bv(e),e=e.sibling}function Bv(e){switch(e.tag){case 0:case 11:case 15:jl(e),e.flags&2048&&Er(9,e,e.return);break;case 3:jl(e);break;case 12:jl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vc(e)):jl(e);break;default:jl(e)}}function Vc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];bn=o,Fv(o,e)}Iv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Er(8,n,n.return),Vc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Vc(n));break;default:Vc(n)}e=e.sibling}}function Fv(e,n){for(;bn!==null;){var r=bn;switch(r.tag){case 0:case 11:case 15:Er(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ul(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,bn=o;else t:for(r=e;bn!==null;){o=bn;var c=o.sibling,d=o.return;if(Cv(o),o===r){bn=null;break t}if(c!==null){c.return=d,bn=c;break t}bn=d}}}var E1={getCacheForType:function(e){var n=Cn(ln),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return Cn(ln).controller.signal}},T1=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,ge=null,ye=0,Oe=0,xi=null,br=!1,_o=!1,qd=!1,ka=0,nn=0,Ar=0,Ss=0,Gc=0,yi=0,go=0,Zl=null,ei=null,Yd=!1,kc=0,Hv=0,Xc=1/0,qc=null,Rr=null,Qe=0,$i=null,Ms=null,ga=0,Wd=0,jd=null,Vv=null,vo=null,xo=null,yo=null,Kl=0,Yc=null;function Si(){return(De&2)!==0&&ye!==0?ye&-ye:St.T!==null?ap():qt()}function Gv(){if(yi===0)if((ye&536870912)===0||pe){var e=is;is<<=1,(is&3932160)===0&&(is=262144),yi=e}else yi=536870912;return e=wn.current,e!==null&&(e.flags|=32),yi}function So(e,n){if(n!=null){var r=e.stateNode,o=r.ref;o===null&&(o=r.ref=Mx(La(e.memoizedProps,r))),xo===null&&(xo=[]),xo.push(n.bind(null,o))}}function ni(e,n,r){(e===ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(Mo(e,0),Cr(e,ye,yi,!1)),L(e,r),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(Ss|=r),nn===4&&Cr(e,ye,yi,!1)),va(e))}function kv(e,n,r){if((De&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||lr(e,n),c=o?R1(e,n):Kd(e,n,!0),d=o;do{if(c===0){_o&&!o&&Cr(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!b1(r)){c=Kd(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=Zl;var F=A.current.memoizedState.isDehydrated;if(F&&(Mo(A,S).flags|=256),S=Kd(A,S,!1),S!==2&&S!==6){if(qd&&!F){A.errorRecoveryDisabledLanes|=d,Ss|=d,c=4;break t}d=ei,ei=c,d!==null&&(ei===null?ei=d:ei.push.apply(ei,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){Mo(e,0),Cr(e,n,0,!0);break}t:{switch(o=e,d=c,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Cr(o,n,yi,!br);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=kc+300-k(),10<c)){if(Cr(o,n,yi,!br),Da(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=mp(Xv.bind(null,o,r,ei,qc,Yd,n,yi,Ss,go,br,d,"Throttled",-0,0),c);break t}Xv(o,r,ei,qc,Yd,n,yi,Ss,go,br,d,null,-0,0)}}break}while(!0);va(e)}function Xv(e,n,r,o,c,d,S,A,F,j,at,dt,q,nt){e.timeoutHandle=-1;var Rt=n.subtreeFlags,kt=(d&335544064)===d;if(dt=null,(kt||Rt&8192||(Rt&16785408)===16785408)&&(dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},vi=null,zv(n,d,dt),kt&&(Rt=dt,kt=e.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Rt.count++,Rt.waitingForViewTransition=!0,Rt=au.bind(Rt),kt.finished.then(Rt,Rt))),Rt=(d&62914560)===d?kc-k():(d&4194048)===d?Hv-k():0,Rt=wT(dt,Rt),Rt!==null)){ga=d,e.cancelPendingCommit=Rt(Jv.bind(null,e,n,d,r,o,c,S,A,F,j,at,dt,null,q,nt)),Cr(e,d,S,!j);return}Jv(e,n,d,r,o,c,S,A,F,j,at,dt)}function b1(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],d=c.getSnapshot;c=c.value;try{if(!_i(d(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Cr(e,n,r,o){n=vl(e,n),n&=~Gc,n&=~Ss,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-Pn(c),S=1<<d;o[d]=-1,c&=~S}r!==0&&ot(e,r,n)}function Wc(){return(De&6)===0?(Ql(0),!1):!0}function Zd(){if(ge!==null){if(Oe===0)var e=ge.return;else e=ge,Ia=us=null,id(e),oo=null,Ol=0,e=ge;for(;e!==null;)dv(e.alternate,e),e=e.return;ge=null}}function Mo(e,n){var r=e.timeoutHandle;return r!==-1&&(e.timeoutHandle=-1,Z1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),ga=0,Zd(),ke=e,ge=r=Pa(e.current,null),ye=n,Oe=0,xi=null,br=!1,_o=lr(e,n),qd=!1,go=yi=Gc=Ss=Ar=nn=0,ei=Zl=null,Yd=!1,ka=vl(e,n),ec(),r}function qv(e,n){le=null,St.H=Ac,n===so||n===hc?(n=J0(),Oe=3):n===Xh?(n=J0(),Oe=4):Oe=n===vd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,xi=n,ge===null&&(nn=1,Rc(e,zi(n,e.current)))}function Yv(){var e=wn.current;return e===null?!0:(ye&4194048)===ye?Bn===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Bn:!1}function Wv(){var e=St.H;return St.H=Ac,e===null?Ac:e}function jv(){var e=St.A;return St.A=E1,e}function jc(){nn=4,br||(ye&4194048)!==ye&&wn.current!==null||(_o=!0),(Ar&134217727)===0&&(Ss&134217727)===0||ke===null||Cr(ke,ye,yi,!1)}function Kd(e,n,r){var o=De;De|=2;var c=Wv(),d=jv();(ke!==e||ye!==n)&&(qc=null,Mo(e,n)),n=!1;var S=nn;t:do try{if(Oe!==0&&ge!==null){var A=ge,F=xi;switch(Oe){case 8:Zd(),S=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var j=Oe;if(Oe=0,xi=null,Eo(e,A,F,j),r&&_o){S=0;break t}break;default:j=Oe,Oe=0,xi=null,Eo(e,A,F,j)}}A1(),S=nn;break}catch(at){qv(e,at)}while(!0);return n&&e.shellSuspendCounter++,Ia=us=null,De=o,St.H=c,St.A=d,ge===null&&(ke=null,ye=0,ec()),S}function A1(){for(;ge!==null;)Zv(ge)}function R1(e,n){var r=De;De|=2;var o=Wv(),c=jv();ke!==e||ye!==n?(qc=null,Xc=k()+500,Mo(e,n)):_o=lr(e,n);t:do try{if(Oe!==0&&ge!==null){n=ge;var d=xi;e:switch(Oe){case 1:Oe=0,xi=null,Eo(e,n,d,1);break;case 2:case 9:if(K0(d)){Oe=0,xi=null,Kv(n);break}n=function(){Oe!==2&&Oe!==9||ke!==e||(Oe=7),va(e)},d.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:K0(d)?(Oe=0,xi=null,Kv(n)):(Oe=0,xi=null,Eo(e,n,d,7));break;case 5:var S=null;switch(ge.tag){case 26:S=ge.memoizedState;case 5:case 27:var A=ge;if(S?Vx(S):A.stateNode.complete){Oe=0,xi=null;var F=A.sibling;if(F!==null)ge=F;else{var j=A.return;j!==null?(ge=j,Zc(j)):ge=null}break e}}Oe=0,xi=null,Eo(e,n,d,5);break;case 6:Oe=0,xi=null,Eo(e,n,d,6);break;case 8:Zd(),nn=6;break t;default:throw Error(a(462))}}C1();break}catch(at){qv(e,at)}while(!0);return Ia=us=null,St.H=o,St.A=c,De=r,ge!==null?0:(ke=null,ye=0,ec(),nn)}function C1(){for(;ge!==null&&!oe();)Zv(ge)}function Zv(e){var n=fv(e.alternate,e,ka);e.memoizedProps=e.pendingProps,n===null?Zc(e):ge=n}function Kv(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=av(r,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=av(r,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:id(n);var o=n;o===En&&(pe?(oc(o),o.tag===5&&o.stateNode!=null&&(qe=o.stateNode)):(oc(o),pe=!0));default:dv(r,n),n=ge=F0(n,ka),n=fv(r,n,ka)}e.memoizedProps=e.pendingProps,n===null?Zc(e):ge=n}function Eo(e,n,r,o){Ia=us=null,id(n),oo=null,Ol=0;var c=n.return;try{if(m1(e,c,n,r,ye)){nn=1,Rc(e,zi(r,e.current)),ge=null;return}}catch(d){if(c!==null)throw ge=c,d;nn=1,Rc(e,zi(r,e.current)),ge=null;return}n.flags&32768?(pe||o===1?e=!0:_o||(ye&536870912)!==0?e=!1:(br=e=!0,(o===2||o===9||o===3||o===6)&&(o=wn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qv(n,e)):Zc(n)}function Zc(e){var n=e;do{if((n.flags&32768)!==0){Qv(n,br);return}e=n.return;var r=x1(n.alternate,n,ka);if(r!==null){ge=r;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);nn===0&&(nn=5)}function Qv(e,n){do{var r=y1(e.alternate,e);if(r!==null){r.flags&=32767,ge=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=r}while(e!==null);nn=6,ge=null}function Jv(e,n,r,o,c,d,S,A,F,j,at,dt){e.cancelPendingCommit=null;do Kc();while(Qe!==0);if((De&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));e===ke&&(ge=ke=null,ye=0),Ms=n,$i=e,ga=r,jd=c,Vv=o,w1(e,n,r,S,A,F,dt)}}function w1(e,n,r,o,c,d,S){var A=n.lanes|n.childLanes;if(Wd=A,A|=Uh,K(e,r,A,o,c,d),xo=null,(r&335544064)===r?(yo=i1(e),o=10262):(yo=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,P1(Ot,function(){return tp(),null})):(e.callbackNode=null,e.callbackPriority=0),Pc=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=St.T,St.T=null,c=At.p,At.p=2,d=De,De|=4;try{S1(e,n,r)}finally{De=d,At.p=c,St.T=o}}Qe=1,Pc?vo=eT(S,e.containerInfo,yo,Qd,Jd,U1,$d,tp,D1):(Qd(),Jd(),$d())}function D1(e){if(Qe!==0){var n=$i.onRecoverableError;n(e,{componentStack:null})}}function U1(){Qe===3&&(Qe=0,Ov(Ms,$i),Qe=4)}function Qd(){if(Qe===1){Qe=0;var e=$i,n=Ms,r=ga,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=St.T,St.T=null;var c=At.p;At.p=2;var d=De;De|=4;try{Yl=Bc=!1,Nv(n,e,r),r=hp;var S=w0(e.containerInfo),A=r.focusedElem,F=r.selectionRange;if(S!==A&&A&&A.ownerDocument&&C0(A.ownerDocument.documentElement,A)){if(F!==null&&Ah(A)){var j=F.start,at=F.end;if(at===void 0&&(at=j),"selectionStart"in A)A.selectionStart=j,A.selectionEnd=Math.min(at,A.value.length);else{var dt=A.ownerDocument||document,q=dt&&dt.defaultView||window;if(q.getSelection){var nt=q.getSelection(),Rt=A.textContent.length,kt=Math.min(F.start,Rt),ue=F.end===void 0?kt:Math.min(F.end,Rt);!nt.extend&&kt>ue&&(S=ue,ue=kt,kt=S);var W=R0(A,kt),V=R0(A,ue);if(W&&V&&(nt.rangeCount!==1||nt.anchorNode!==W.node||nt.anchorOffset!==W.offset||nt.focusNode!==V.node||nt.focusOffset!==V.offset)){var et=dt.createRange();et.setStart(W.node,W.offset),nt.removeAllRanges(),kt>ue?(nt.addRange(et),nt.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),nt.addRange(et))}}}}for(dt=[],nt=A;nt=nt.parentNode;)nt.nodeType===1&&dt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<dt.length;A++){var ht=dt[A];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Uo=!!fp,hp=fp=null}finally{De=d,At.p=c,St.T=o}}e.current=n,Qe=2}}function Jd(){if(Qe===2){Qe=0;var e=$i,n=Ms,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=St.T,St.T=null;var o=At.p;At.p=2;var c=De;De|=4;try{Av(e,n.alternate,n)}finally{De=c,At.p=o,St.T=r}}Qe=3}}function $d(){if(Qe===4||Qe===3){Qe=0;var e=vo;vo=null,Ie();var n=$i,r=Ms,o=ga,c=Vv,d=(o&335544064)===o?10262:10256;if((r.subtreeFlags&d)!==0||(r.flags&d)!==0?Qe=5:(Qe=0,Ms=$i=null,$v(n,n.pendingLanes)),d=n.pendingLanes,d===0&&(Rr=null),Pt(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Me,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=St.T,d=At.p,At.p=2,St.T=null;try{for(var S=n.onRecoverableError,A=0;A<c.length;A++){var F=c[A];S(F.value,{componentStack:F.stack})}}finally{St.T=r,At.p=d}}if(c=xo,S=yo,yo=null,c!==null&&(xo=null,S===null&&(S=[]),e!==null))for(F=0;F<c.length;F++)r=(0,c[F])(S),r!==void 0&&e.finished.finally(r);(ga&3)!==0&&Kc(),va(n),d=n.pendingLanes,(o&261930)!==0&&(d&42)!==0?n===Yc?Kl++:(Kl=0,Yc=n):(Kl=0,Yc=null),Ql(0)}}function $v(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ul(n)))}function Kc(){return vo!==null&&(vo.skipTransition(),vo=null),Qd(),Jd(),$d(),tp()}function tp(){if(Qe!==5)return!1;var e=$i,n=Wd;Wd=0;var r=Pt(ga),o=St.T,c=At.p;try{At.p=32>r?32:r,St.T=null,r=jd,jd=null;var d=$i,S=ga;if(Qe=0,Ms=$i=null,ga=0,(De&6)!==0)throw Error(a(331));var A=De;if(De|=4,Bv(d.current),Pv(d,d.current,S,r),De=A,Ql(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Me,d)}catch{}return!0}finally{At.p=c,St.T=o,$v(e,n)}}function tx(e,n,r){n=zi(r,n),n=gd(e.stateNode,n,2),e=xr(e,n,2),e!==null&&(L(e,2),va(e))}function Pe(e,n,r){if(e.tag===3)tx(e,e,r);else for(;n!==null;){if(n.tag===3){tx(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Rr===null||!Rr.has(o))){e=zi(r,e),r=Kg(2),o=xr(n,r,2),o!==null&&(Qg(r,o,n,e),L(o,2),va(o));break}}n=n.return}}function ep(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new T1;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(qd=!0,c.add(r),e=N1.bind(null,e,n,r),n.then(e,e))}function N1(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ke===e&&(ye&r)===r&&((nn===4||nn===3&&(ye&62914560)===ye&&300>k()-kc)&&(De&2)===0?Mo(e,0):Gc|=r,go===ye&&(go=0)),va(e)}function ex(e,n){n===0&&(n=ku()),e=ss(e,n),e!==null&&(L(e,n),va(e))}function L1(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),ex(e,r)}function O1(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),ex(e,r)}function P1(e,n){return Vt(e,n)}var To=null,bo=null,np=!1,Qc=!1,ip=!1,wr=0;function va(e){e!==bo&&e.next===null&&(bo===null?To=bo=e:bo=bo.next=e),Qc=!0,np||(np=!0,I1())}function Ql(e,n){if(!ip&&Qc){ip=!0;do for(var r=!1,o=To;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Pn(42|e)+1)-1,d&=c&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,rx(o,d))}else d=ye,d=Da(o,o===ke?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||lr(o,d)||(r=!0,rx(o,d));o=o.next}while(r);ip=!1}}function z1(){nx()}function nx(){Qc=np=!1;var e=0;wr!==0&&j1()&&(e=wr);for(var n=k(),r=null,o=To;o!==null;){var c=o.next,d=ix(o,n);d===0?(o.next=null,r===null?To=c:r.next=c,c===null&&(bo=r)):(r=o,(e!==0||(d&3)!==0)&&(Qc=!0)),o=c}Qe!==0&&Qe!==5||Ql(e),wr!==0&&(wr=0)}function ix(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Pn(d),A=1<<S,F=c[S];F===-1?((A&r)===0||(A&o)!==0)&&(c[S]=lh(A,n)):F<=n&&(e.expiredLanes|=A),d&=~A}if(n=ke,r=ye,r=Da(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&me(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||lr(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&me(o),Pt(r)){case 2:case 8:r=gt;break;case 32:r=Ot;break;case 268435456:r=re;break;default:r=Ot}return o=ax.bind(null,e),r=Vt(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&me(o),e.callbackPriority=2,e.callbackNode=null,2}function ax(e,n){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Kc()&&e.callbackNode!==r)return null;var o=ye;return o=Da(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(kv(e,o,n),ix(e,k()),e.callbackNode!=null&&e.callbackNode===r?ax.bind(null,e):null)}function rx(e,n){if(Kc())return null;kv(e,n,!0)}function I1(){K1(function(){(De&6)!==0?Vt(ft,z1):nx()})}function ap(){if(wr===0){var e=hs;e===0&&(e=ns,ns<<=1,(ns&261888)===0&&(ns=256)),wr=e}return wr}function sx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wu(e)}function B1(e,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var d=sx((c[Bt]||null).action),S=o.submitter;S&&(n=(n=S[Bt]||null)?sx(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new Qu("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wr!==0){var F=new FormData(c,S);hd(r,{pending:!0,data:F,method:c.method,action:d},null,F)}}else typeof d=="function"&&(A.preventDefault(),F=new FormData(c,S),hd(r,{pending:!0,data:F,method:c.method,action:d},d,F))},currentTarget:c}]})}}for(var rp=0;rp<Dh.length;rp++){var sp=Dh[rp],F1=sp.toLowerCase(),H1=sp[0].toUpperCase()+sp.slice(1);Zi(F1,"on"+H1)}Zi(N0,"onAnimationEnd"),Zi(L0,"onAnimationIteration"),Zi(O0,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(ZE,"onTransitionRun"),Zi(KE,"onTransitionStart"),Zi(QE,"onTransitionCancel"),Zi(P0,"onTransitionEnd"),Xn("onMouseEnter",["mouseout","mouseover"]),Xn("onMouseLeave",["mouseout","mouseover"]),Xn("onPointerEnter",["pointerout","pointerover"]),Xn("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));function ox(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],F=A.instance,j=A.currentTarget;if(A=A.listener,F!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=j;try{d(c)}catch(at){tc(at)}c.currentTarget=null,d=F}else for(S=0;S<o.length;S++){if(A=o[S],F=A.instance,j=A.currentTarget,A=A.listener,F!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=j;try{d(c)}catch(at){tc(at)}c.currentTarget=null,d=F}}}}function ve(e,n){var r=n[Le];r===void 0&&(r=n[Le]=new Set);var o=e+"__bubble";r.has(o)||(lx(n,e,2,!1),r.add(o))}function op(e,n,r){var o=0;n&&(o|=4),lx(r,e,o,n)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function lp(e){if(!e[Jc]){e[Jc]=!0,ur.forEach(function(r){r!=="selectionchange"&&(V1.has(r)||op(r,!1,e),op(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jc]||(n[Jc]=!0,op("selectionchange",!1,n))}}function lx(e,n,r,o){switch(Qx(n)){case 2:var c=LT;break;case 8:c=OT;break;default:c=Cp}r=c.bind(null,n,r,e),c=void 0,!_h||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function up(e,n,r,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=_n(A),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){o=d=S;continue t}A=A.parentNode}}o=o.return}l0(function(){var j=d,at=ph(r),dt=[];t:{var q=z0.get(e);if(q!==void 0){var nt=Qu,Rt=e;switch(e){case"keypress":if(Zu(r)===0)break t;case"keydown":case"keyup":nt=bE;break;case"focusin":Rt="focus",nt=yh;break;case"focusout":Rt="blur",nt=yh;break;case"beforeblur":case"afterblur":nt=yh;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=f0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=dE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=DE;break;case N0:case L0:case O0:nt=_E;break;case P0:nt=NE;break;case"scroll":case"scrollend":nt=fE;break;case"wheel":nt=OE;break;case"copy":case"cut":case"paste":nt=vE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=d0;break;case"submit":nt=CE;break;case"toggle":case"beforetoggle":nt=zE}var kt=(n&4)!==0,ue=!kt&&(e==="scroll"||e==="scrollend"),W=kt?q!==null?q+"Capture":null:q;kt=[];for(var V=j,et;V!==null;){var ht=V;if(et=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||et===null||W===null||(ht=yl(V,W),ht!=null&&kt.push($l(V,ht,et))),ue)break;V=V.return}0<kt.length&&(q=new nt(q,Rt,null,r,at),dt.push({event:q,listeners:kt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",nt&&r!==dh&&(Rt=r.relatedTarget||r.fromElement)&&(_n(Rt)||Rt[de]))break t;(q||nt)&&(Rt=at.window===at?at:(nt=at.ownerDocument)?nt.defaultView||nt.parentWindow:window,q?(nt=r.relatedTarget||r.toElement,q=j,nt=nt?_n(nt):null,nt!==null&&(ue=u(nt),kt=nt.tag,nt!==ue||kt!==5&&kt!==27&&kt!==6)&&(nt=null)):(q=null,nt=j),q!==nt&&(kt=f0,ht="onMouseLeave",W="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(kt=d0,ht="onPointerLeave",W="onPointerEnter",V="pointer"),ue=q==null?Rt:gn(q),et=nt==null?Rt:gn(nt),Rt=new kt(ht,V+"leave",q,r,at),Rt.target=ue,Rt.relatedTarget=et,ht=null,_n(at)===j&&(kt=new kt(W,V+"enter",nt,r,at),kt.target=et,kt.relatedTarget=ue,ht=kt),ue=ht,kt=q&&nt?B(q,nt,G1):null,q!==null&&ux(dt,Rt,q,kt,!1),nt!==null&&ue!==null&&ux(dt,ue,nt,kt,!0)))}t:{if(q=j?gn(j):window,nt=q.nodeName&&q.nodeName.toLowerCase(),nt==="select"||nt==="input"&&q.type==="file")var Ht=S0;else if(x0(q))if(M0)Ht=YE;else{Ht=XE;var Se=kE}else nt=q.nodeName,!nt||nt.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?j&&hh(j.elementType)&&(Ht=S0):Ht=qE;if(Ht&&(Ht=Ht(e,j))){y0(dt,Ht,r,at);break t}Se&&Se(e,q,j)}switch(Se=j?gn(j):window,e){case"focusin":(x0(Se)||Se.contentEditable==="true")&&(Js=Se,Rh=j,Cl=null);break;case"focusout":Cl=Rh=Js=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,D0(dt,r,at);break;case"selectionchange":if(jE)break;case"keydown":case"keyup":D0(dt,r,at)}var Kt;if(Mh)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Qs?g0(e,r)&&(ee="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ee="onCompositionStart");ee&&(p0&&r.locale!=="ko"&&(Qs||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Qs&&(Kt=u0()):(cr=at,gh="value"in cr?cr.value:cr.textContent,Qs=!0)),Se=$c(j,ee),0<Se.length&&(ee=new h0(ee,e,null,r,at),dt.push({event:ee,listeners:Se}),Kt?ee.data=Kt:(Kt=v0(r),Kt!==null&&(ee.data=Kt)))),(Kt=BE?FE(e,r):HE(e,r))&&(ee=$c(j,"onBeforeInput"),0<ee.length&&(Se=new h0("onBeforeInput","beforeinput",null,r,at),dt.push({event:Se,listeners:ee}),Se.data=Kt)),B1(dt,e,j,r,at)}ox(dt,n)})}function $l(e,n,r){return{instance:e,listener:n,currentTarget:r}}function $c(e,n){for(var r=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=yl(e,r),c!=null&&o.unshift($l(e,c,d)),c=yl(e,n),c!=null&&o.push($l(e,c,d))),e.tag===3)return o;e=e.return}return[]}function G1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ux(e,n,r,o,c){for(var d=n._reactName,S=[];r!==null&&r!==o;){var A=r,F=A.alternate,j=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||j===null||(F=j,c?(j=yl(r,d),j!=null&&S.unshift($l(r,j,F))):c||(j=yl(r,d),j!=null&&S.push($l(r,j,F)))),r=r.return}S.length!==0&&e.push({event:n,listeners:S})}var k1=/\r\n?/g,X1=/\u0000|\uFFFD/g;function cx(e){return(typeof e=="string"?e:""+e).replace(k1,`
`).replace(X1,"")}function fx(e,n){return n=cx(n),cx(e)===n}function ze(e,n,r,o,c,d){switch(r){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||js(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&js(e,""+o);else return;break;case"className":Yu(e,"class",o);break;case"tabIndex":Yu(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yu(e,r,o);break;case"style":s0(e,o,d);return;case"data":if(n!=="object"){Yu(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Wu(o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&ze(e,n,"name",c.name,c,null),ze(e,n,"formEncType",c.formEncType,c,null),ze(e,n,"formMethod",c.formMethod,c,null),ze(e,n,"formTarget",c.formTarget,c,null)):(ze(e,n,"encType",c.encType,c,null),ze(e,n,"method",c.method,c,null),ze(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Wu(o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=la);return;case"onScroll":o!=null&&ve("scroll",e);return;case"onScrollEnd":o!=null&&ve("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));(d!=null?d.__html:void 0)!==r&&(e.innerHTML=r)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Wu(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),qu(e,"popover",o);break;case"xlinkActuate":Ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ua(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ua(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ua(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ua(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qu(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")r=uE.get(r)||r,qu(e,r,o);else return}we=!0}function cp(e,n,r,o,c,d){switch(r){case"style":s0(e,o,d);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));(d!=null?d.__html:void 0)!==r&&(e.innerHTML=r)}}break;case"children":if(typeof o=="string")js(e,o);else if(typeof o=="number"||typeof o=="bigint")js(e,""+o);else return;break;case"onScroll":o!=null&&ve("scroll",e);return;case"onScrollEnd":o!=null&&ve("scrollend",e);return;case"onClick":o!=null&&(e.onclick=la);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!kn.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),d=r.slice(2,c?r.length-7:void 0),n=e[Bt]||null,n=n!=null?n[r]:null,typeof n=="function"&&e.removeEventListener(d,n,c),typeof o=="function")){typeof n!="function"&&n!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(d,o,c);break t}we=!0,r in e?e[r]=o:o===!0?e.setAttribute(r,""):qu(e,r,o)}return}we=!0}function Nn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ze(e,n,d,S,r,null)}}c&&ze(e,n,"srcSet",r.srcSet,r,null),o&&ze(e,n,"src",r.src,r,null);return;case"input":ve("invalid",e);var A=d=S=c=null,F=null,j=null;for(o in r)if(r.hasOwnProperty(o)){var at=r[o];if(at!=null)switch(o){case"name":c=at;break;case"type":S=at;break;case"checked":F=at;break;case"defaultChecked":j=at;break;case"value":d=at;break;case"defaultValue":A=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,n));break;default:ze(e,n,o,at,r,null)}}n0(e,d,A,F,j,S,c,!1);return;case"select":ve("invalid",e),o=S=d=null;for(c in r)if(r.hasOwnProperty(c)&&(A=r[c],A!=null))switch(c){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:ze(e,n,c,A,r,null)}n=d,r=S,e.multiple=!!o,n!=null?Ws(e,!!o,n,!1):r!=null&&Ws(e,!!o,r,!0);return;case"textarea":ve("invalid",e),d=c=o=null;for(S in r)if(r.hasOwnProperty(S)&&(A=r[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ze(e,n,S,A,r,null)}a0(e,o,c,d);return;case"option":for(F in r)if(r.hasOwnProperty(F)&&(o=r[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,F,o,r,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Jl.length;o++)ve(Jl[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in r)if(r.hasOwnProperty(j)&&(o=r[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ze(e,n,j,o,r,null)}return;default:if(hh(n)){for(at in r)r.hasOwnProperty(at)&&(o=r[at],o!==void 0&&cp(e,n,at,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&ze(e,n,A,o,r,null))}var q1={};function Y1(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,A=null,F=null,j=null,at=null;for(nt in r){var dt=r[nt];if(r.hasOwnProperty(nt)&&dt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":F=dt;default:o.hasOwnProperty(nt)||ze(e,n,nt,null,o,dt)}}for(var q in o){var nt=o[q];if(dt=r[q],o.hasOwnProperty(q)&&(nt!=null||dt!=null))switch(q){case"type":nt!==dt&&(we=!0),d=nt;break;case"name":nt!==dt&&(we=!0),c=nt;break;case"checked":nt!==dt&&(we=!0),j=nt;break;case"defaultChecked":nt!==dt&&(we=!0),at=nt;break;case"value":nt!==dt&&(we=!0),S=nt;break;case"defaultValue":nt!==dt&&(we=!0),A=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(a(137,n));break;default:nt!==dt&&ze(e,n,q,nt,o,dt)}}ch(e,S,A,F,j,at,d,c);return;case"select":nt=S=A=q=null;for(d in r)if(F=r[d],r.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":nt=F;default:o.hasOwnProperty(d)||ze(e,n,d,null,o,F)}for(c in o)if(d=o[c],F=r[c],o.hasOwnProperty(c)&&(d!=null||F!=null))switch(c){case"value":d!==F&&(we=!0),q=d;break;case"defaultValue":d!==F&&(we=!0),A=d;break;case"multiple":d!==F&&(we=!0),S=d;default:d!==F&&ze(e,n,c,d,o,F)}n=A,r=S,o=nt,q!=null?Ws(e,!!r,q,!1):!!o!=!!r&&(n!=null?Ws(e,!!r,n,!0):Ws(e,!!r,r?[]:"",!1));return;case"textarea":nt=q=null;for(A in r)if(c=r[A],r.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ze(e,n,A,null,o,c)}for(S in o)if(c=o[S],d=r[S],o.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":c!==d&&(we=!0),q=c;break;case"defaultValue":c!==d&&(we=!0),nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==d&&ze(e,n,S,c,o,d)}i0(e,q,nt);return;case"option":for(var Rt in r)if(q=r[Rt],r.hasOwnProperty(Rt)&&q!=null&&!o.hasOwnProperty(Rt))switch(Rt){case"selected":e.selected=!1;break;default:ze(e,n,Rt,null,o,q)}for(F in o)if(q=o[F],nt=r[F],o.hasOwnProperty(F)&&q!==nt&&(q!=null||nt!=null))switch(F){case"selected":q!==nt&&(we=!0),e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:ze(e,n,F,q,o,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in r)q=r[kt],r.hasOwnProperty(kt)&&q!=null&&!o.hasOwnProperty(kt)&&ze(e,n,kt,null,o,q);for(j in o)if(q=o[j],nt=r[j],o.hasOwnProperty(j)&&q!==nt&&(q!=null||nt!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,n));break;default:ze(e,n,j,q,o,nt)}return;default:if(hh(n)){for(var ue in r)q=r[ue],r.hasOwnProperty(ue)&&q!==void 0&&!o.hasOwnProperty(ue)&&cp(e,n,ue,void 0,o,q);for(at in o)q=o[at],nt=r[at],!o.hasOwnProperty(at)||q===nt||q===void 0&&nt===void 0||cp(e,n,at,q,o,nt);return}}for(var W in r)q=r[W],r.hasOwnProperty(W)&&q!=null&&!o.hasOwnProperty(W)&&ze(e,n,W,null,o,q);for(dt in o)q=o[dt],nt=r[dt],!o.hasOwnProperty(dt)||q===nt||q==null&&nt==null||ze(e,n,dt,q,o,nt)}function hx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function W1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var c=r[o],d=c.transferSize,S=c.initiatorType,A=c.duration;if(d&&A&&hx(S)){for(S=0,A=c.responseEnd,o+=1;o<r.length;o++){var F=r[o],j=F.startTime;if(j>A)break;var at=F.transferSize,dt=F.initiatorType;at&&hx(dt)&&(F=F.responseEnd,S+=at*(F<A?1:(A-j)/(F-j)))}if(--o,n+=8*(d+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fp=null,hp=null;function tu(e){return e.nodeType===9?e:e.ownerDocument}function dx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function px(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function mx(e,n,r,o){return r=tu(r).createElement(e),r[jt]=o,r[Bt]=n,Nn(r,e,n),se(r),r}function dp(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pp=null;function j1(){var e=window.event;return e&&e.type==="popstate"?e===pp?!1:(pp=e,!0):(pp=null,!1)}var mp=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,_x=typeof Promise=="function"?Promise:void 0,gx=typeof requestAnimationFrame=="function"?requestAnimationFrame:mp,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof _x<"u"?function(e){return _x.resolve(null).then(e).catch(Q1)}:mp;function Q1(e){setTimeout(function(){throw e})}function Dr(e){return e==="head"}function vx(e,n){var r=n,o=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(c),No(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Ep(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ep(r);for(var d=r.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[Xt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&Ep(e.ownerDocument.body);r=c}while(r);No(n)}function xx(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function yx(e,n,r){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,r!=null&&(e.style.viewTransitionClass=r),r=getComputedStyle(e),r.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var c=o=0;c<n.length;c++){var d=n[c];0<d.width&&0<d.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+r.paddingTop,e.marginBottom="-"+r.paddingBottom)}}function Sx(e,n){e=e.style,n=n.style;var r=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=r==null||typeof r=="boolean"?"":(""+r).trim(),r=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=r==null||typeof r=="boolean"?"":(""+r).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(r=n.display,e.display=r==null||typeof r=="boolean"?"":r,r=n.margin,r!=null?e.margin=r:(r=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=r==null||typeof r=="boolean"?"":r,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function J1(e,n,r){return r=r.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=r.innerHeight&&e.left<=r.innerWidth}}function _p(e){var n=e.getBoundingClientRect(),r=getComputedStyle(e);return J1(n,r,e)}function $1(e){return e.documentElement.clientHeight}function tT(e){this.addEventListener("load",e),this.addEventListener("error",e)}function eT(e,n,r,o,c,d,S,A,F){var j=n.nodeType===9?n:n.ownerDocument;try{var at=j.startViewTransition({update:function(){var q=j.defaultView,nt=q.navigation&&q.navigation.transition,Rt=j.fonts.status;o();var kt=[];if(Rt==="loaded"&&($1(j),j.fonts.status==="loading"&&kt.push(j.fonts.ready)),Rt=kt.length,e!==null)for(var ue=e.suspenseyImages,W=0,V=0;V<ue.length;V++){var et=ue[V];if(!et.complete){var ht=et.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<q.innerHeight&&ht.left<q.innerWidth){if(W+=Gx(et),W>nf){kt.length=Rt;break}et=new Promise(tT.bind(et)),kt.push(et)}}}if(0<kt.length)return q=Promise.race([Promise.all(kt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(c,c),(nt?Promise.allSettled([nt.finished,q]):q).then(d,d);if(c(),nt)return nt.finished.then(d,d);d()},types:r});j.__reactViewTransition=at;var dt=[];return at.ready.then(function(){for(var q=j.documentElement.getAnimations({subtree:!0}),nt=0;nt<q.length;nt++){var Rt=q[nt],kt=Rt.effect,ue=kt.pseudoElement;if(ue!=null&&ue.startsWith("::view-transition")){dt.push(Rt),Rt=kt.getKeyframes();for(var W=ue=void 0,V=!0,et=0;et<Rt.length;et++){var ht=Rt[et],Ht=ht.width;if(ue===void 0)ue=Ht;else if(ue!==Ht){V=!1;break}if(Ht=ht.height,W===void 0)W=Ht;else if(W!==Ht){V=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}V&&ue!==void 0&&W!==void 0&&(kt.setKeyframes(Rt),V=getComputedStyle(kt.target,kt.pseudoElement),V.width!==ue||V.height!==W)&&(V=Rt[0],V.width=ue,V.height=W,V=Rt[Rt.length-1],V.width=ue,V.height=W,kt.setKeyframes(Rt))}}S()},function(q){j.__reactViewTransition===at&&(j.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&F(q)}finally{o(),c(),S()}}),at.finished.finally(function(){for(var q=0;q<dt.length;q++)dt[q].cancel();j.__reactViewTransition===at&&(j.__reactViewTransition=null),A()}),at}catch{return o(),c(),S(),null}}function Es(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Es.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Es.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,r=e.getAnimations({subtree:!0}),o=[],c=0;c<r.length;c++){var d=r[c].effect;d!==null&&d.target===e&&d.pseudoElement===n&&o.push(r[c])}return o},Es.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Mx(e){return{name:e,group:new Es("group",e),imagePair:new Es("image-pair",e),old:new Es("old",e),new:new Es("new",e)}}function Mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Mi.prototype.addEventListener=function(e,n,r){var o=null,c=null;if(!(r!=null&&typeof r!="boolean"&&(o=r.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var d=this._eventListeners;if(Tx(d,e,n,r)===-1){var S=this,A=n;r!=null&&typeof r!="boolean"&&r.once===!0&&(A=function(F){S.removeEventListener(e,n,r),typeof n=="function"?n.call(this,F):n.handleEvent(F)}),o!==null&&(c=S.removeEventListener.bind(S,e,n,r),o.addEventListener("abort",c,{once:!0}),c=o.removeEventListener.bind(o,"abort",c)),o=Ao(r),d.push({type:e,listener:n,optionsOrUseCapture:r,attachedListener:A,cleanup:c}),g(this._fragmentFiber.child,!1,nT,e,A,o)}this._eventListeners=d}};function nT(e,n,r,o){return y(e).addEventListener(n,r,o),!1}Mi.prototype.removeEventListener=function(e,n,r){var o=this._eventListeners;if(o!==null&&(n=Tx(o,e,n,r),n!==-1)){var c=o[n];r=c.attachedListener;var d=c.cleanup;c=Ao(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,iT,e,r,c),o.splice(n,1),d!==null&&d()}};function iT(e,n,r,o){return y(e).removeEventListener(n,r,o),!1}function Ao(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ex(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Tx(e,n,r,o){if(e.length===0)return-1;o=Ex(o);for(var c=0;c<e.length;c++){var d=e[c];if(d.type===n&&d.listener===r&&Ex(d.optionsOrUseCapture)===o)return c}return-1}Mi.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=y(n);var r=this._eventListeners;if(r!==null&&0<r.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(r)for(var c=0;c<r.length;c++){var d=r[c];o.addEventListener(d.type,d.attachedListener,Ao(d.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),r)for(c=0;c<r.length;c++)d=r[c],o.removeEventListener(d.type,d.attachedListener,Ao(d.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},Mi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,bx,e,void 0,void 0)};function bx(e,n){return e.tag===6?!1:(e=y(e),mT(e,n))}Mi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,gp,n,void 0,void 0);for(var r=n.length-1;0<=r&&!bx(n[r],e);r--);};function gp(e,n){return n.push(e),!1}Mi.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=y(e),e=tu(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,aT,e,void 0,void 0))};function aT(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,rT,e,void 0,void 0)};function rT(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}Mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,sT,e,void 0,void 0);for(var r=n=0;r<ta.length;r++){var o=ta[r];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):ta[n++]=o}ta.length=n}};function sT(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var ta=[],vp=!1;function oT(e,n,r){ta.push({fragmentInstance:e,observer:n,instance:r}),vp||(vp=!0,_T(function(){vp=!1;var o=ta;ta=[];for(var c=0;c<o.length;c++){var d=o[c];d.observer.unobserve(d.instance)}}))}Mi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,lT,e,void 0,void 0),e};function lT(e,n){if(e.tag===6){e=e.stateNode;var r=e.ownerDocument.createRange();r.selectNodeContents(e),n.push.apply(n,r.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}Mi.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},Mi.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var r=[];g(this._fragmentFiber.child,!1,gp,r,void 0,void 0);var o=y(n);if(r.length===0){if(r=o,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(r=n)}n=this._fragmentFiber;var c=o=r.compareDocumentPosition(e);return r===e?c=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(r=T(n)[1],r===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=y(r).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(r[0]),c=y(r[r.length-1]);var d=M(this._fragmentFiber)?n.parentElement:o;if(d==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=d.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,d=d.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(e),A=c.compareDocumentPosition(e),F=S&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=o&&d&&S&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||d&&c===e||F||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!d&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||uT(n,this._fragmentFiber,r[0],r[r.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function uT(e,n,r,o,c){var d=_n(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(r=!!d)t:{for(;d!==null;){if(d.tag===7&&(d===n||d.alternate===n)){r=!0;break t}d=d.return}r=!1}return r}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(d===null)return d=c.ownerDocument,c===d||c===d.documentElement||c===d.body;t:{for(d=n,n=v(n);d!==null;){if(!(d.tag!==5&&d.tag!==3&&d.tag!==27||d!==n&&d.alternate!==n)){d=!0;break t}d=d.return}d=!1}return d}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!d)&&!(n=d===r)&&(n=B(r,d,P),n===null?n=!1:(g(n,!0,w,d,r),d=x,x=null,n=d!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!d)&&!(n=d===o)&&(n=B(o,d,P),n===null?n=!1:(g(n,!0,b,d,o),d=x,U=x=null,n=d!==null)),n):!1}function Ax(e,n){var r=e.ownerDocument.createRange();r.selectNodeContents(e),e=r.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(a(566));var n=[];g(this._fragmentFiber.child,!1,gp,n,void 0,void 0);var r=e!==!1;if(n.length===0){var o=T(this._fragmentFiber);if(o=r?o[1]||o[0]||v(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=y(o),Ax(e,r);return}if(o=y(o),o.nodeType!==9){if(o.nodeType===11){r="host"in o?o.host:null,r!==null&&r.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=r?n.length-1:0;o!==(r?-1:n.length);){var c=n[o];c.tag===6?(c=y(c),Ax(c,r)):y(c).scrollIntoView(e),o+=r?-1:1}};function cT(e,n){return e=y(e),Rx(e,n),!1}function Rx(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Cx(e,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];e.addEventListener(c.type,c.attachedListener,Ao(c.optionsOrUseCapture))}e.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(d){for(var S=0,A=0;A<ta.length;A++){var F=ta[A];(F.fragmentInstance!==n||F.observer!==d||F.instance!==e)&&(ta[S++]=F)}ta.length=S,d.observe(e)}),Rx(e,n))}function fT(e,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];e.removeEventListener(c.type,c.attachedListener,Ao(c.optionsOrUseCapture))}e.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(d){typeof d.rootMargin=="string"?oT(n,d,e):d.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function xp(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":xp(r),Ee(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function hT(e,n,r,o){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Xt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Vi(e.nextSibling),e===null)break}return null}function dT(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Vi(e.nextSibling),e===null))return null;return e}function wx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vi(e.nextSibling),e===null))return null;return e}function yp(e){return e.data==="$?"||e.data==="$~"}function Sp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pT(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Mp=null;function Dx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return Vi(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function Ux(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function mT(e,n){function r(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",r,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",r,!0)}return o}function _T(e){gx(function(){gx(function(n){return e(n)})})}function Nx(e,n,r){switch(n=tu(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Lx(e,n,r){for(var o in r){var c=r[o];r.hasOwnProperty(o)&&c!=null&&ze(e,n,o,null,q1,c)}r.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===la&&(e.onclick=null),Ee(e)}function Ep(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ee(e)}var Gi=new Map,Ox=new Set;function eu(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Xa=At.d;At.d={f:gT,r:vT,D:xT,C:yT,L:ST,m:MT,X:TT,S:ET,M:bT};function gT(){var e=Xa.f(),n=Wc();return e||n}function vT(e){var n=di(e);n!==null&&n.tag===5&&n.type==="form"?zg(n):Xa.r(e)}var Ro=typeof document>"u"?null:document;function Px(e,n,r){var o=Ro;if(o&&typeof n=="string"&&n){var c=Oi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),Ox.has(c)||(Ox.add(c),e={rel:e,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Nn(n,"link",e),se(n),o.head.appendChild(n)))}}function xT(e){Xa.D(e),Px("dns-prefetch",e,null)}function yT(e,n){Xa.C(e,n),Px("preconnect",e,n)}function ST(e,n,r){Xa.L(e,n,r);var o=Ro;if(o&&e&&n){var c='link[rel="preload"][as="'+Oi(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Oi(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Oi(r.imageSizes)+'"]')):c+='[href="'+Oi(e)+'"]';var d=c;switch(n){case"style":d=Co(e);break;case"script":d=wo(e)}if(!(Gi.has(d)||(e=N({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Gi.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(nu(d))||n==="script"&&o.querySelector(iu(d))))){var S=o.createElement("link");Nn(S,"link",e),n==="style"&&(S[Qn]=!0,S.onload=S.onerror=function(){pi(S)}),se(S),o.head.appendChild(S)}}}function MT(e,n){Xa.m(e,n);var r=Ro;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Oi(o)+'"][href="'+Oi(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=wo(e)}if(!Gi.has(d)&&(e=N({rel:"modulepreload",href:e},n),Gi.set(d,e),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(iu(d)))return}o=r.createElement("link"),Nn(o,"link",e),se(o),r.head.appendChild(o)}}}function ET(e,n,r){Xa.S(e,n,r);var o=Ro;if(o&&e){var c=Li(o).hoistableStyles,d=Co(e);n=n||"default";var S=c.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(nu(d)))A.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Gi.get(d))&&Tp(e,r);var F=S=o.createElement("link");se(F),Nn(F,"link",e),F._p=new Promise(function(j,at){F.onload=j,F.onerror=at}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,tf(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(d,S)}}}function TT(e,n){Xa.X(e,n);var r=Ro;if(r&&e){var o=Li(r).hoistableScripts,c=wo(e),d=o.get(c);d||(d=r.querySelector(iu(c)),d||(e=N({src:e,async:!0},n),(n=Gi.get(c))&&bp(e,n),d=r.createElement("script"),se(d),Nn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function bT(e,n){Xa.M(e,n);var r=Ro;if(r&&e){var o=Li(r).hoistableScripts,c=wo(e),d=o.get(c);d||(d=r.querySelector(iu(c)),d||(e=N({src:e,async:!0,type:"module"},n),(n=Gi.get(c))&&bp(e,n),d=r.createElement("script"),se(d),Nn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function zx(e,n,r,o){var c=(c=I.current)?eu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(r=Co(r.href),n=Li(c).hoistableStyles,o=n.get(r),o||(o={type:"style",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Co(r.href);var d=Li(c).hoistableStyles,S=d.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=c.querySelector(nu(e)))?d._p||(S.instance=d,S.state.loading=5):(d=Gi.get(e),d||(d={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Gi.set(e,d)),AT(c,e,d,S.state))),n&&o===null)throw Error(a(528,""));return S}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(r=wo(r),n=Li(c).hoistableScripts,o=n.get(r),o||(o={type:"script",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Co(e){return'href="'+Oi(e)+'"'}function nu(e){return'link[rel="stylesheet"]['+e+"]"}function Ix(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function AT(e,n,r,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Qn]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Qn]=!0,n.onload=n.onerror=pi.bind(null,n),Nn(n,"link",r),se(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function wo(e){return'[src="'+Oi(e)+'"]'}function iu(e){return"script[async]"+e}function Bx(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Oi(r.href)+'"]');if(o)return n.instance=o,se(o),o;var c=N({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),se(o),Nn(o,"style",c),tf(o,r.precedence,e),n.instance=o;case"stylesheet":c=Co(r.href);var d=e.querySelector(nu(c));if(d)return n.state.loading|=4,n.instance=d,se(d),d;o=Ix(r),(c=Gi.get(c))&&Tp(o,c),d=(e.ownerDocument||e).createElement("link"),se(d);var S=d;return S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),Nn(d,"link",o),n.state.loading|=4,tf(d,r.precedence,e),n.instance=d;case"script":return d=wo(r.src),(c=e.querySelector(iu(d)))?(n.instance=c,se(c),c):(o=r,(c=Gi.get(d))&&(o=N({},r),bp(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),se(c),Nn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tf(o,r.precedence,e));return n.instance}function tf(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Tp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ef=null;function Fx(e,n,r){if(ef===null){var o=new Map,c=ef=new Map;c.set(r,o)}else c=ef,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var d=r[c];if(!(d[Xt]||d[jt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function Ap(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function RT(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hx(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Vx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function kx(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Gx(n),e.suspenseyImages.push(n)),e=DT.bind(e),n.decode().then(e,e))}function CT(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var c=Co(o.href),d=n.querySelector(nu(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=au.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,se(d);return}d=n.ownerDocument||n,o=Ix(o),(c=Gi.get(c))&&Tp(o,c),d=d.createElement("link"),se(d);var S=d;S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),Nn(d,"link",o),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=au.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var nf=0;function wT(e,n){return e.stylesheets&&e.count===0&&rf(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&rf(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&nf===0&&(nf=62500*W1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rf(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>nf?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Xx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)rf(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function au(){this.count--,Xx(this)}function DT(){this.imgCount--,Xx(this)}var af=null;function rf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,af=new Map,n.forEach(UT,e),af=null,au.call(e))}function UT(e,n){if(!(n.state.loading&4)){var r=af.get(e);if(r)var o=r.get(null);else{r=new Map,af.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),d=r.get(S)||o,d===o&&r.set(null,c),r.set(S,c),this.count++,o=au.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Do={$$typeof:st,Provider:null,Consumer:null,_currentValue:Ae,_currentValue2:Ae,_threadCount:0};function NT(e,n,r,o,c,d,S,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.hiddenUpdates=xl(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.transitionTypes=null,this.incompleteTransitions=new Map}function qx(e,n,r,o,c,d,S,A,F,j,at,dt){return e=new NT(e,n,r,S,F,j,at,dt,A),n=1,d===!0&&(n|=24),d=Jn(3,null,null,n),e.current=d,d.stateNode=e,n=Vh(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},qh(d),e}function Yx(e){return e?(e=eo,e):eo}function Wx(e,n,r,o,c,d){c=Yx(c),o.context===null?o.context=c:o.pendingContext=c,o=vr(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=xr(e,o,n),r!==null&&(ni(r,e,n),Pl(r,e,n))}function jx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Rp(e,n){jx(e,n),(e=e.alternate)&&jx(e,n)}function Zx(e){if(e.tag===13||e.tag===31){var n=ss(e,67108864);n!==null&&ni(n,e,67108864),Rp(e,67108864)}}function Kx(e){if(e.tag===13||e.tag===31){var n=Si();n=Et(n);var r=ss(e,n);r!==null&&ni(r,e,n),Rp(e,n)}}var Uo=!0;function LT(e,n,r,o){var c=St.T;St.T=null;var d=At.p;try{At.p=2,Cp(e,n,r,o)}finally{At.p=d,St.T=c}}function OT(e,n,r,o){var c=St.T;St.T=null;var d=At.p;try{At.p=8,Cp(e,n,r,o)}finally{At.p=d,St.T=c}}function Cp(e,n,r,o){if(Uo){var c=wp(o);if(c===null)up(e,n,o,sf,r),Jx(e,o);else if(zT(c,e,n,r,o))o.stopPropagation();else if(Jx(e,o),n&4&&-1<PT.indexOf(e)){for(;c!==null;){var d=di(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=oa(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var F=1<<31-Pn(S);A.entanglements[1]|=F,S&=~F}va(d),(De&6)===0&&(Xc=k()+500,Ql(0))}}break;case 31:case 13:A=ss(d,2),A!==null&&ni(A,d,2),Wc(),Rp(d,2)}if(d=wp(o),d===null&&up(e,n,o,sf,r),d===c)break;c=d}c!==null&&o.stopPropagation()}else up(e,n,o,null,r)}}function wp(e){return e=ph(e),Dp(e)}var sf=null;function Dp(e){if(sf=null,e=_n(e),e!==null){var n=u(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return sf=e,null}function Qx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case ft:return 2;case gt:return 8;case Ot:case Ft:return 32;case re:return 268435456;default:return 32}default:return 32}}var Up=!1,Ur=null,Nr=null,Lr=null,ru=new Map,su=new Map,Or=[],PT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jx(e,n){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":ru.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":su.delete(n.pointerId)}}function ou(e,n,r,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=di(n),n!==null&&Zx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function zT(e,n,r,o,c){switch(n){case"focusin":return Ur=ou(Ur,e,n,r,o,c),!0;case"dragenter":return Nr=ou(Nr,e,n,r,o,c),!0;case"mouseover":return Lr=ou(Lr,e,n,r,o,c),!0;case"pointerover":var d=c.pointerId;return ru.set(d,ou(ru.get(d)||null,e,n,r,o,c)),!0;case"gotpointercapture":return d=c.pointerId,su.set(d,ou(su.get(d)||null,e,n,r,o,c)),!0}return!1}function $x(e){var n=_n(e.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,Yt(e.priority,function(){Kx(r)});return}}else if(n===31){if(n=h(r),n!==null){e.blockedOn=n,Yt(e.priority,function(){Kx(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function of(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=wp(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);dh=o,r.target.dispatchEvent(o),dh=null}else return n=di(r),n!==null&&Zx(n),e.blockedOn=r,!1;n.shift()}return!0}function ty(e,n,r){of(e)&&r.delete(n)}function IT(){Up=!1,Ur!==null&&of(Ur)&&(Ur=null),Nr!==null&&of(Nr)&&(Nr=null),Lr!==null&&of(Lr)&&(Lr=null),ru.forEach(ty),su.forEach(ty)}function lf(e,n){e.blockedOn===n&&(e.blockedOn=null,Up||(Up=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,IT)))}var uf=null;function ey(e){uf!==e&&(uf=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){uf===e&&(uf=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Dp(o||r)===null)continue;break}var d=di(r);d!==null&&(e.splice(n,3),n-=3,hd(d,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function No(e){function n(F){return lf(F,e)}Ur!==null&&lf(Ur,e),Nr!==null&&lf(Nr,e),Lr!==null&&lf(Lr,e),ru.forEach(n),su.forEach(n);for(var r=0;r<Or.length;r++){var o=Or[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Or.length&&(r=Or[0],r.blockedOn===null);)$x(r),r.blockedOn===null&&Or.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],d=r[o+1],S=c[Bt]||null;if(typeof d=="function")S||ey(r);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[Bt]||null)A=S.formAction;else if(Dp(c)!==null)continue}else A=S.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),ey(r)}}}function ny(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Np(e){this._internalRoot=e}cf.prototype.render=Np.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=Si();Wx(r,o,e,n,null,null)},cf.prototype.unmount=Np.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wx(e.current,2,null,e,null,null),Wc(),n[de]=null}};function cf(e){this._internalRoot=e}cf.prototype.unstable_scheduleHydration=function(e){if(e){var n=qt();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Or.length&&n!==0&&n<Or[r].priority;r++);Or.splice(r,0,e),r===0&&$x(e)}};var iy=t.version;if(iy!=="19.3.1")throw Error(a(527,iy,"19.3.1"));At.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var BT={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:St,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ff=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ff.isDisabled&&ff.supportsFiber)try{Me=ff.inject(BT),We=ff}catch{}}return uu.createRoot=function(e,n){if(!s(e))throw Error(a(299));var r=!1,o="",c=Yg,d=Wg,S=jg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=qx(e,1,!1,null,null,r,o,null,c,d,S,ny),e[de]=n.current,lp(e),new Np(n)},uu.hydrateRoot=function(e,n,r){if(!s(e))throw Error(a(299));var o=!1,c="",d=Yg,S=Wg,A=jg,F=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(F=r.formState)),n=qx(e,1,!0,n,r??null,o,c,F,d,S,A,ny),n.context=Yx(null),r=n.current,o=Si(),o=Et(o),c=vr(o),c.callback=null,xr(r,c,o),r=o,n.current.lanes=r,L(n,r),va(n),e[de]=n.current,lp(e),new cf(n)},uu.version="19.3.1",uu}var dy;function ZT(){if(dy)return Pp.exports;dy=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Pp.exports=jT(),Pp.exports}var KT=ZT();const QT=US(KT);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const E_="170",JT=0,py=1,$T=2,NS=1,tb=2,Ka=3,Kr=0,si=1,$a=2,Yr=0,Qo=1,my=2,_y=3,gy=4,eb=5,Ps=100,nb=101,ib=102,ab=103,rb=104,sb=200,ob=201,lb=202,ub=203,Em=204,Tm=205,cb=206,fb=207,hb=208,db=209,pb=210,mb=211,_b=212,gb=213,vb=214,bm=0,Am=1,Rm=2,il=3,Cm=4,wm=5,Dm=6,Um=7,LS=0,xb=1,yb=2,Wr=0,Sb=1,Mb=2,Eb=3,Tb=4,bb=5,Ab=6,Rb=7,OS=300,al=301,rl=302,Nm=303,Lm=304,th=306,Om=1e3,Is=1001,Pm=1002,sa=1003,Cb=1004,hf=1005,Ma=1006,Fp=1007,Bs=1008,ir=1009,PS=1010,zS=1011,Au=1012,T_=1013,Xs=1014,tr=1015,zu=1016,b_=1017,A_=1018,sl=1020,IS=35902,BS=1021,FS=1022,ra=1023,HS=1024,VS=1025,Jo=1026,ol=1027,GS=1028,R_=1029,kS=1030,C_=1031,w_=1033,Of=33776,Pf=33777,zf=33778,If=33779,zm=35840,Im=35841,Bm=35842,Fm=35843,Hm=36196,Vm=37492,Gm=37496,km=37808,Xm=37809,qm=37810,Ym=37811,Wm=37812,jm=37813,Zm=37814,Km=37815,Qm=37816,Jm=37817,$m=37818,t_=37819,e_=37820,n_=37821,Bf=36492,i_=36494,a_=36495,XS=36283,r_=36284,s_=36285,o_=36286,wb=3200,Db=3201,Ub=0,Nb=1,Gr="",qi="srgb",pl="srgb-linear",eh="linear",Fe="srgb",Lo=7680,vy=519,Lb=512,Ob=513,Pb=514,qS=515,zb=516,Ib=517,Bb=518,Fb=519,xy=35044,yy="300 es",er=2e3,kf=2001;class ml{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const u=s.indexOf(i);u!==-1&&s.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,f=s.length;u<f;u++)s[u].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hp=Math.PI/180,l_=180/Math.PI;function Iu(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[l&255]+Fn[l>>8&255]+Fn[l>>16&255]+Fn[l>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function ai(l,t,i){return Math.max(t,Math.min(i,l))}function Hb(l,t){return(l%t+t)%t}function Vp(l,t,i){return(1-i)*l+i*t}function cu(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function ii(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(t=0,i=0){Ne.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,s=t.elements;return this.x=s[0]*i+s[3]*a+s[6],this.y=s[1]*i+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(ai(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),s=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*s+t.x,this.y=u*s+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,a,s,u,f,h,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,s,u,f,h,p,m)}set(t,i,a,s,u,f,h,p,m){const _=this.elements;return _[0]=t,_[1]=s,_[2]=h,_[3]=i,_[4]=u,_[5]=p,_[6]=a,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,s=i.elements,u=this.elements,f=a[0],h=a[3],p=a[6],m=a[1],_=a[4],g=a[7],v=a[2],M=a[5],T=a[8],E=s[0],y=s[3],x=s[6],U=s[1],w=s[4],b=s[7],P=s[2],B=s[5],N=s[8];return u[0]=f*E+h*U+p*P,u[3]=f*y+h*w+p*B,u[6]=f*x+h*b+p*N,u[1]=m*E+_*U+g*P,u[4]=m*y+_*w+g*B,u[7]=m*x+_*b+g*N,u[2]=v*E+M*U+T*P,u[5]=v*y+M*w+T*B,u[8]=v*x+M*b+T*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8];return i*f*_-i*h*m-a*u*_+a*h*p+s*u*m-s*f*p}invert(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8],g=_*f-h*m,v=h*p-_*u,M=m*u-f*p,T=i*g+a*v+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=g*E,t[1]=(s*m-_*a)*E,t[2]=(h*a-s*f)*E,t[3]=v*E,t[4]=(_*i-s*p)*E,t[5]=(s*u-h*i)*E,t[6]=M*E,t[7]=(a*p-m*i)*E,t[8]=(f*i-a*u)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,s,u,f,h){const p=Math.cos(u),m=Math.sin(u);return this.set(a*p,a*m,-a*(p*f+m*h)+f+t,-s*m,s*p,-s*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Gp.makeScale(t,i)),this}rotate(t){return this.premultiply(Gp.makeRotation(-t)),this}translate(t,i){return this.premultiply(Gp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let s=0;s<9;s++)if(i[s]!==a[s])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gp=new ce;function YS(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function Xf(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Vb(){const l=Xf("canvas");return l.style.display="block",l}const Sy={};function gu(l){l in Sy||(Sy[l]=!0,console.warn(l))}function Gb(l,t,i){return new Promise(function(a,s){function u(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:s();break;case l.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:a()}}setTimeout(u,i)})}function kb(l){const t=l.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xb(l){const t=l.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ce={enabled:!0,workingColorSpace:pl,spaces:{},convert:function(l,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===Fe&&(l.r=nr(l.r),l.g=nr(l.g),l.b=nr(l.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(l.applyMatrix3(this.spaces[t].toXYZ),l.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Fe&&(l.r=$o(l.r),l.g=$o(l.g),l.b=$o(l.b))),l},fromWorkingColorSpace:function(l,t){return this.convert(l,this.workingColorSpace,t)},toWorkingColorSpace:function(l,t){return this.convert(l,t,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Gr?eh:this.spaces[l].transfer},getLuminanceCoefficients:function(l,t=this.workingColorSpace){return l.fromArray(this.spaces[t].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,t,i){return l.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}};function nr(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function $o(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const My=[.64,.33,.3,.6,.15,.06],Ey=[.2126,.7152,.0722],Ty=[.3127,.329],by=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ay=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ce.define({[pl]:{primaries:My,whitePoint:Ty,transfer:eh,toXYZ:by,fromXYZ:Ay,luminanceCoefficients:Ey,workingColorSpaceConfig:{unpackColorSpace:qi},outputColorSpaceConfig:{drawingBufferColorSpace:qi}},[qi]:{primaries:My,whitePoint:Ty,transfer:Fe,toXYZ:by,fromXYZ:Ay,luminanceCoefficients:Ey,outputColorSpaceConfig:{drawingBufferColorSpace:qi}}});let Oo;class qb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Oo===void 0&&(Oo=Xf("canvas")),Oo.width=t.width,Oo.height=t.height;const a=Oo.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Oo}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xf("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let f=0;f<u.length;f++)u[f]=nr(u[f]/255)*255;return a.putImageData(s,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(nr(i[a]/255)*255):i[a]=nr(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yb=0;class WS{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Iu(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let f=0,h=s.length;f<h;f++)s[f].isDataTexture?u.push(kp(s[f].image)):u.push(kp(s[f]))}else u=kp(s);a.url=u}return i||(t.images[this.uuid]=a),a}}function kp(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?qb.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wb=0;class oi extends ml{constructor(t=oi.DEFAULT_IMAGE,i=oi.DEFAULT_MAPPING,a=Is,s=Is,u=Ma,f=Bs,h=ra,p=ir,m=oi.DEFAULT_ANISOTROPY,_=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Iu(),this.name="",this.source=new WS(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==OS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Om:t.x=t.x-Math.floor(t.x);break;case Is:t.x=t.x<0?0:1;break;case Pm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Om:t.y=t.y-Math.floor(t.y);break;case Is:t.y=t.y<0?0:1;break;case Pm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=OS;oi.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,a=0,s=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,s){return this.x=t,this.y=i,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,s=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*s+f[12]*u,this.y=f[1]*i+f[5]*a+f[9]*s+f[13]*u,this.z=f[2]*i+f[6]*a+f[10]*s+f[14]*u,this.w=f[3]*i+f[7]*a+f[11]*s+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,s,u;const p=t.elements,m=p[0],_=p[4],g=p[8],v=p[1],M=p[5],T=p[9],E=p[2],y=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-E)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+E)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(m+1)/2,b=(M+1)/2,P=(x+1)/2,B=(_+v)/4,N=(g+E)/4,z=(T+y)/4;return w>b&&w>P?w<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(w),s=B/a,u=N/a):b>P?b<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(b),a=B/s,u=z/s):P<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(P),a=N/u,s=z/u),this.set(a,s,u,i),this}let U=Math.sqrt((y-T)*(y-T)+(g-E)*(g-E)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(g-E)/U,this.z=(v-_)/U,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jb extends ml{constructor(t=1,i=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const s={width:t,height:i,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ma,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const u=new oi(s,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);u.flipY=!1,u.generateMipmaps=a.generateMipmaps,u.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=i,this.textures[s].image.depth=a;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let a=0,s=t.textures.length;a<s;a++)this.textures[a]=t.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new WS(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qs extends jb{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class jS extends oi{constructor(t=null,i=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:s},this.magFilter=sa,this.minFilter=sa,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zb extends oi{constructor(t=null,i=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:s},this.magFilter=sa,this.minFilter=sa,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bu{constructor(t=0,i=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=s}static slerpFlat(t,i,a,s,u,f,h){let p=a[s+0],m=a[s+1],_=a[s+2],g=a[s+3];const v=u[f+0],M=u[f+1],T=u[f+2],E=u[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g;return}if(h===1){t[i+0]=v,t[i+1]=M,t[i+2]=T,t[i+3]=E;return}if(g!==E||p!==v||m!==M||_!==T){let y=1-h;const x=p*v+m*M+_*T+g*E,U=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const P=Math.sqrt(w),B=Math.atan2(P,x*U);y=Math.sin(y*B)/P,h=Math.sin(h*B)/P}const b=h*U;if(p=p*y+v*b,m=m*y+M*b,_=_*y+T*b,g=g*y+E*b,y===1-h){const P=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=P,m*=P,_*=P,g*=P}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,a,s,u,f){const h=a[s],p=a[s+1],m=a[s+2],_=a[s+3],g=u[f],v=u[f+1],M=u[f+2],T=u[f+3];return t[i]=h*T+_*g+p*M-m*v,t[i+1]=p*T+_*v+m*g-h*M,t[i+2]=m*T+_*M+h*v-p*g,t[i+3]=_*T-h*g-p*v-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,s){return this._x=t,this._y=i,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,s=t._y,u=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(a/2),_=h(s/2),g=h(u/2),v=p(a/2),M=p(s/2),T=p(u/2);switch(f){case"XYZ":this._x=v*_*g+m*M*T,this._y=m*M*g-v*_*T,this._z=m*_*T+v*M*g,this._w=m*_*g-v*M*T;break;case"YXZ":this._x=v*_*g+m*M*T,this._y=m*M*g-v*_*T,this._z=m*_*T-v*M*g,this._w=m*_*g+v*M*T;break;case"ZXY":this._x=v*_*g-m*M*T,this._y=m*M*g+v*_*T,this._z=m*_*T+v*M*g,this._w=m*_*g-v*M*T;break;case"ZYX":this._x=v*_*g-m*M*T,this._y=m*M*g+v*_*T,this._z=m*_*T-v*M*g,this._w=m*_*g+v*M*T;break;case"YZX":this._x=v*_*g+m*M*T,this._y=m*M*g+v*_*T,this._z=m*_*T-v*M*g,this._w=m*_*g-v*M*T;break;case"XZY":this._x=v*_*g-m*M*T,this._y=m*M*g-v*_*T,this._z=m*_*T+v*M*g,this._w=m*_*g+v*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],s=i[4],u=i[8],f=i[1],h=i[5],p=i[9],m=i[2],_=i[6],g=i[10],v=a+h+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(f-s)*M}else if(a>h&&a>g){const M=2*Math.sqrt(1+a-h-g);this._w=(_-p)/M,this._x=.25*M,this._y=(s+f)/M,this._z=(u+m)/M}else if(h>g){const M=2*Math.sqrt(1+h-a-g);this._w=(u-m)/M,this._x=(s+f)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+g-a-h);this._w=(f-s)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ai(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,i/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,s=t._y,u=t._z,f=t._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=a*_+f*h+s*m-u*p,this._y=s*_+f*p+u*h-a*m,this._z=u*_+f*m+a*p-s*h,this._w=f*_-a*h-s*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,s=this._y,u=this._z,f=this._w;let h=f*t._w+a*t._x+s*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=s,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*a+i*this._x,this._y=M*s+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,h),g=Math.sin((1-i)*_)/m,v=Math.sin(i*_)/m;return this._w=f*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=u*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,i=0,a=0){ut.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ry.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ry.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*i+u[3]*a+u[6]*s,this.y=u[1]*i+u[4]*a+u[7]*s,this.z=u[2]*i+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,s=this.z,u=t.elements,f=1/(u[3]*i+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*i+u[4]*a+u[8]*s+u[12])*f,this.y=(u[1]*i+u[5]*a+u[9]*s+u[13])*f,this.z=(u[2]*i+u[6]*a+u[10]*s+u[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,s=this.z,u=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*s-h*a),_=2*(h*i-u*s),g=2*(u*a-f*i);return this.x=i+p*m+f*g-h*_,this.y=a+p*_+h*m-u*g,this.z=s+p*g+u*_-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*i+u[4]*a+u[8]*s,this.y=u[1]*i+u[5]*a+u[9]*s,this.z=u[2]*i+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,s=t.y,u=t.z,f=i.x,h=i.y,p=i.z;return this.x=s*p-u*h,this.y=u*f-a*p,this.z=a*h-s*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Xp.copy(this).projectOnVector(t),this.sub(Xp)}reflect(t){return this.sub(Xp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(ai(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return i*i+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const s=Math.sin(i)*t;return this.x=s*Math.sin(a),this.y=Math.cos(i)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=s,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xp=new ut,Ry=new Bu;class Fu{constructor(t=new ut(1/0,1/0,1/0),i=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(ea.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(ea.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=ea.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,ea):ea.fromBufferAttribute(u,f),ea.applyMatrix4(t.matrixWorld),this.expandByPoint(ea);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),df.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),df.copy(a.boundingBox)),df.applyMatrix4(t.matrixWorld),this.union(df)}const s=t.children;for(let u=0,f=s.length;u<f;u++)this.expandByObject(s[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ea),ea.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fu),pf.subVectors(this.max,fu),Po.subVectors(t.a,fu),zo.subVectors(t.b,fu),Io.subVectors(t.c,fu),zr.subVectors(zo,Po),Ir.subVectors(Io,zo),Ts.subVectors(Po,Io);let i=[0,-zr.z,zr.y,0,-Ir.z,Ir.y,0,-Ts.z,Ts.y,zr.z,0,-zr.x,Ir.z,0,-Ir.x,Ts.z,0,-Ts.x,-zr.y,zr.x,0,-Ir.y,Ir.x,0,-Ts.y,Ts.x,0];return!qp(i,Po,zo,Io,pf)||(i=[1,0,0,0,1,0,0,0,1],!qp(i,Po,zo,Io,pf))?!1:(mf.crossVectors(zr,Ir),i=[mf.x,mf.y,mf.z],qp(i,Po,zo,Io,pf))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ea).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ea).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qa=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],ea=new ut,df=new Fu,Po=new ut,zo=new ut,Io=new ut,zr=new ut,Ir=new ut,Ts=new ut,fu=new ut,pf=new ut,mf=new ut,bs=new ut;function qp(l,t,i,a,s){for(let u=0,f=l.length-3;u<=f;u+=3){bs.fromArray(l,u);const h=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),p=t.dot(bs),m=i.dot(bs),_=a.dot(bs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const Kb=new Fu,hu=new ut,Yp=new ut;class D_{constructor(t=new ut,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):Kb.setFromPoints(t).getCenter(a);let s=0;for(let u=0,f=t.length;u<f;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hu.subVectors(t,this.center);const i=hu.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),s=(a-this.radius)*.5;this.center.addScaledVector(hu,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hu.copy(t.center).add(Yp)),this.expandByPoint(hu.copy(t.center).sub(Yp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ya=new ut,Wp=new ut,_f=new ut,Br=new ut,jp=new ut,gf=new ut,Zp=new ut;class Qb{constructor(t=new ut,i=new ut(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ya.copy(this.origin).addScaledVector(this.direction,i),Ya.distanceToSquared(t))}distanceSqToSegment(t,i,a,s){Wp.copy(t).add(i).multiplyScalar(.5),_f.copy(i).sub(t).normalize(),Br.copy(this.origin).sub(Wp);const u=t.distanceTo(i)*.5,f=-this.direction.dot(_f),h=Br.dot(this.direction),p=-Br.dot(_f),m=Br.lengthSq(),_=Math.abs(1-f*f);let g,v,M,T;if(_>0)if(g=f*p-h,v=f*h-p,T=u*_,g>=0)if(v>=-T)if(v<=T){const E=1/_;g*=E,v*=E,M=g*(g+f*v+2*h)+v*(f*g+v+2*p)+m}else v=u,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*p)+m;else v=-u,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*p)+m;else v<=-T?(g=Math.max(0,-(-f*u+h)),v=g>0?-u:Math.min(Math.max(-u,-p),u),M=-g*g+v*(v+2*p)+m):v<=T?(g=0,v=Math.min(Math.max(-u,-p),u),M=v*(v+2*p)+m):(g=Math.max(0,-(f*u+h)),v=g>0?u:Math.min(Math.max(-u,-p),u),M=-g*g+v*(v+2*p)+m);else v=f>0?-u:u,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Wp).addScaledVector(_f,v),M}intersectSphere(t,i){Ya.subVectors(t.center,this.origin);const a=Ya.dot(this.direction),s=Ya.dot(Ya)-a*a,u=t.radius*t.radius;if(s>u)return null;const f=Math.sqrt(u-s),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,s,u,f,h,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(a=(t.min.x-v.x)*m,s=(t.max.x-v.x)*m):(a=(t.max.x-v.x)*m,s=(t.min.x-v.x)*m),_>=0?(u=(t.min.y-v.y)*_,f=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,f=(t.min.y-v.y)*_),a>f||u>s||((u>a||isNaN(a))&&(a=u),(f<s||isNaN(s))&&(s=f),g>=0?(h=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(h=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||h>s)||((h>a||a!==a)&&(a=h),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,i)}intersectsBox(t){return this.intersectBox(t,Ya)!==null}intersectTriangle(t,i,a,s,u){jp.subVectors(i,t),gf.subVectors(a,t),Zp.crossVectors(jp,gf);let f=this.direction.dot(Zp),h;if(f>0){if(s)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Br.subVectors(this.origin,t);const p=h*this.direction.dot(gf.crossVectors(Br,gf));if(p<0)return null;const m=h*this.direction.dot(jp.cross(Br));if(m<0||p+m>f)return null;const _=-h*Br.dot(Zp);return _<0?null:this.at(_/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(t,i,a,s,u,f,h,p,m,_,g,v,M,T,E,y){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,s,u,f,h,p,m,_,g,v,M,T,E,y)}set(t,i,a,s,u,f,h,p,m,_,g,v,M,T,E,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=a,x[12]=s,x[1]=u,x[5]=f,x[9]=h,x[13]=p,x[2]=m,x[6]=_,x[10]=g,x[14]=v,x[3]=M,x[7]=T,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,s=1/Bo.setFromMatrixColumn(t,0).length(),u=1/Bo.setFromMatrixColumn(t,1).length(),f=1/Bo.setFromMatrixColumn(t,2).length();return i[0]=a[0]*s,i[1]=a[1]*s,i[2]=a[2]*s,i[3]=0,i[4]=a[4]*u,i[5]=a[5]*u,i[6]=a[6]*u,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,s=t.y,u=t.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(s),m=Math.sin(s),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=f*_,M=f*g,T=h*_,E=h*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=M+T*m,i[5]=v-E*m,i[9]=-h*p,i[2]=E-v*m,i[6]=T+M*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*_,M=p*g,T=m*_,E=m*g;i[0]=v+E*h,i[4]=T*h-M,i[8]=f*m,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=M*h-T,i[6]=E+v*h,i[10]=f*p}else if(t.order==="ZXY"){const v=p*_,M=p*g,T=m*_,E=m*g;i[0]=v-E*h,i[4]=-f*g,i[8]=T+M*h,i[1]=M+T*h,i[5]=f*_,i[9]=E-v*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const v=f*_,M=f*g,T=h*_,E=h*g;i[0]=p*_,i[4]=T*m-M,i[8]=v*m+E,i[1]=p*g,i[5]=E*m+v,i[9]=M*m-T,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,M=f*m,T=h*p,E=h*m;i[0]=p*_,i[4]=E-v*g,i[8]=T*g+M,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-m*_,i[6]=M*g+T,i[10]=v-E*g}else if(t.order==="XZY"){const v=f*p,M=f*m,T=h*p,E=h*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=v*g+E,i[5]=f*_,i[9]=M*g-T,i[2]=T*g-M,i[6]=h*_,i[10]=E*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jb,t,$b)}lookAt(t,i,a){const s=this.elements;return Ei.subVectors(t,i),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Fr.crossVectors(a,Ei),Fr.lengthSq()===0&&(Math.abs(a.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Fr.crossVectors(a,Ei)),Fr.normalize(),vf.crossVectors(Ei,Fr),s[0]=Fr.x,s[4]=vf.x,s[8]=Ei.x,s[1]=Fr.y,s[5]=vf.y,s[9]=Ei.y,s[2]=Fr.z,s[6]=vf.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,s=i.elements,u=this.elements,f=a[0],h=a[4],p=a[8],m=a[12],_=a[1],g=a[5],v=a[9],M=a[13],T=a[2],E=a[6],y=a[10],x=a[14],U=a[3],w=a[7],b=a[11],P=a[15],B=s[0],N=s[4],z=s[8],R=s[12],C=s[1],H=s[5],tt=s[9],J=s[13],rt=s[2],st=s[6],G=s[10],$=s[14],Y=s[3],vt=s[7],xt=s[11],zt=s[15];return u[0]=f*B+h*C+p*rt+m*Y,u[4]=f*N+h*H+p*st+m*vt,u[8]=f*z+h*tt+p*G+m*xt,u[12]=f*R+h*J+p*$+m*zt,u[1]=_*B+g*C+v*rt+M*Y,u[5]=_*N+g*H+v*st+M*vt,u[9]=_*z+g*tt+v*G+M*xt,u[13]=_*R+g*J+v*$+M*zt,u[2]=T*B+E*C+y*rt+x*Y,u[6]=T*N+E*H+y*st+x*vt,u[10]=T*z+E*tt+y*G+x*xt,u[14]=T*R+E*J+y*$+x*zt,u[3]=U*B+w*C+b*rt+P*Y,u[7]=U*N+w*H+b*st+P*vt,u[11]=U*z+w*tt+b*G+P*xt,u[15]=U*R+w*J+b*$+P*zt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],s=t[8],u=t[12],f=t[1],h=t[5],p=t[9],m=t[13],_=t[2],g=t[6],v=t[10],M=t[14],T=t[3],E=t[7],y=t[11],x=t[15];return T*(+u*p*g-s*m*g-u*h*v+a*m*v+s*h*M-a*p*M)+E*(+i*p*M-i*m*v+u*f*v-s*f*M+s*m*_-u*p*_)+y*(+i*m*g-i*h*M-u*f*g+a*f*M+u*h*_-a*m*_)+x*(-s*h*_-i*p*g+i*h*v+s*f*g-a*f*v+a*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=i,s[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8],g=t[9],v=t[10],M=t[11],T=t[12],E=t[13],y=t[14],x=t[15],U=g*y*m-E*v*m+E*p*M-h*y*M-g*p*x+h*v*x,w=T*v*m-_*y*m-T*p*M+f*y*M+_*p*x-f*v*x,b=_*E*m-T*g*m+T*h*M-f*E*M-_*h*x+f*g*x,P=T*g*p-_*E*p-T*h*v+f*E*v+_*h*y-f*g*y,B=i*U+a*w+s*b+u*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return t[0]=U*N,t[1]=(E*v*u-g*y*u-E*s*M+a*y*M+g*s*x-a*v*x)*N,t[2]=(h*y*u-E*p*u+E*s*m-a*y*m-h*s*x+a*p*x)*N,t[3]=(g*p*u-h*v*u-g*s*m+a*v*m+h*s*M-a*p*M)*N,t[4]=w*N,t[5]=(_*y*u-T*v*u+T*s*M-i*y*M-_*s*x+i*v*x)*N,t[6]=(T*p*u-f*y*u-T*s*m+i*y*m+f*s*x-i*p*x)*N,t[7]=(f*v*u-_*p*u+_*s*m-i*v*m-f*s*M+i*p*M)*N,t[8]=b*N,t[9]=(T*g*u-_*E*u-T*a*M+i*E*M+_*a*x-i*g*x)*N,t[10]=(f*E*u-T*h*u+T*a*m-i*E*m-f*a*x+i*h*x)*N,t[11]=(_*h*u-f*g*u-_*a*m+i*g*m+f*a*M-i*h*M)*N,t[12]=P*N,t[13]=(_*E*s-T*g*s+T*a*v-i*E*v-_*a*y+i*g*y)*N,t[14]=(T*h*s-f*E*s-T*a*p+i*E*p+f*a*y-i*h*y)*N,t[15]=(f*g*s-_*h*s+_*a*p-i*g*p-f*a*v+i*h*v)*N,this}scale(t){const i=this.elements,a=t.x,s=t.y,u=t.z;return i[0]*=a,i[4]*=s,i[8]*=u,i[1]*=a,i[5]*=s,i[9]*=u,i[2]*=a,i[6]*=s,i[10]*=u,i[3]*=a,i[7]*=s,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,s))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),s=Math.sin(i),u=1-a,f=t.x,h=t.y,p=t.z,m=u*f,_=u*h;return this.set(m*f+a,m*h-s*p,m*p+s*h,0,m*h+s*p,_*h+a,_*p-s*f,0,m*p-s*h,_*p+s*f,u*p*p+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,s,u,f){return this.set(1,a,u,0,t,1,f,0,i,s,1,0,0,0,0,1),this}compose(t,i,a){const s=this.elements,u=i._x,f=i._y,h=i._z,p=i._w,m=u+u,_=f+f,g=h+h,v=u*m,M=u*_,T=u*g,E=f*_,y=f*g,x=h*g,U=p*m,w=p*_,b=p*g,P=a.x,B=a.y,N=a.z;return s[0]=(1-(E+x))*P,s[1]=(M+b)*P,s[2]=(T-w)*P,s[3]=0,s[4]=(M-b)*B,s[5]=(1-(v+x))*B,s[6]=(y+U)*B,s[7]=0,s[8]=(T+w)*N,s[9]=(y-U)*N,s[10]=(1-(v+E))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,i,a){const s=this.elements;let u=Bo.set(s[0],s[1],s[2]).length();const f=Bo.set(s[4],s[5],s[6]).length(),h=Bo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(u=-u),t.x=s[12],t.y=s[13],t.z=s[14],na.copy(this);const m=1/u,_=1/f,g=1/h;return na.elements[0]*=m,na.elements[1]*=m,na.elements[2]*=m,na.elements[4]*=_,na.elements[5]*=_,na.elements[6]*=_,na.elements[8]*=g,na.elements[9]*=g,na.elements[10]*=g,i.setFromRotationMatrix(na),a.x=u,a.y=f,a.z=h,this}makePerspective(t,i,a,s,u,f,h=er){const p=this.elements,m=2*u/(i-t),_=2*u/(a-s),g=(i+t)/(i-t),v=(a+s)/(a-s);let M,T;if(h===er)M=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(h===kf)M=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,s,u,f,h=er){const p=this.elements,m=1/(i-t),_=1/(a-s),g=1/(f-u),v=(i+t)*m,M=(a+s)*_;let T,E;if(h===er)T=(f+u)*g,E=-2*g;else if(h===kf)T=u*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=E,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let s=0;s<16;s++)if(i[s]!==a[s])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const Bo=new ut,na=new pn,Jb=new ut(0,0,0),$b=new ut(1,1,1),Fr=new ut,vf=new ut,Ei=new ut,Cy=new pn,wy=new Bu;class ar{constructor(t=0,i=0,a=0,s=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,s=this._order){return this._x=t,this._y=i,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const s=t.elements,u=s[0],f=s[4],h=s[8],p=s[1],m=s[5],_=s[9],g=s[2],v=s[6],M=s[10];switch(i){case"XYZ":this._y=Math.asin(ai(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ai(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(ai(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ai(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ai(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-ai(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return Cy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cy,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return wy.setFromEuler(this),this.setFromQuaternion(wy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class ZS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tA=0;const Dy=new ut,Fo=new Bu,Wa=new pn,xf=new ut,du=new ut,eA=new ut,nA=new Bu,Uy=new ut(1,0,0),Ny=new ut(0,1,0),Ly=new ut(0,0,1),Oy={type:"added"},iA={type:"removed"},Ho={type:"childadded",child:null},Kp={type:"childremoved",child:null};class wi extends ml{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=Iu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wi.DEFAULT_UP.clone();const t=new ut,i=new ar,a=new Bu,s=new ut(1,1,1);function u(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pn},normalMatrix:{value:new ce}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=wi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ZS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Fo.setFromAxisAngle(t,i),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(t,i){return Fo.setFromAxisAngle(t,i),this.quaternion.premultiply(Fo),this}rotateX(t){return this.rotateOnAxis(Uy,t)}rotateY(t){return this.rotateOnAxis(Ny,t)}rotateZ(t){return this.rotateOnAxis(Ly,t)}translateOnAxis(t,i){return Dy.copy(t).applyQuaternion(this.quaternion),this.position.add(Dy.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Uy,t)}translateY(t){return this.translateOnAxis(Ny,t)}translateZ(t){return this.translateOnAxis(Ly,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?xf.copy(t):xf.set(t,i,a);const s=this.parent;this.updateWorldMatrix(!0,!1),du.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(du,xf,this.up):Wa.lookAt(xf,du,this.up),this.quaternion.setFromRotationMatrix(Wa),s&&(Wa.extractRotation(s.matrixWorld),Fo.setFromRotationMatrix(Wa),this.quaternion.premultiply(Fo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oy),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(iA),Kp.child=t,this.dispatchEvent(Kp),Kp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oy),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,s=this.children.length;a<s;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const s=this.children;for(let u=0,f=s.length;u<f;u++)s[u].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(du,t,eA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(du,nA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const s=this.children;for(let u=0,f=s.length;u<f;u++)s[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));s.material=h}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];s.animations.push(u(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),_=f(t.images),g=f(t.shapes),v=f(t.skeletons),M=f(t.animations),T=f(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),M.length>0&&(a.animations=M),T.length>0&&(a.nodes=T)}return a.object=s,a;function f(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}wi.DEFAULT_UP=new ut(0,1,0);wi.DEFAULT_MATRIX_AUTO_UPDATE=!0;wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ia=new ut,ja=new ut,Qp=new ut,Za=new ut,Vo=new ut,Go=new ut,Py=new ut,Jp=new ut,$p=new ut,tm=new ut,em=new on,nm=new on,im=new on;class aa{constructor(t=new ut,i=new ut,a=new ut){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,s){s.subVectors(a,i),ia.subVectors(t,i),s.cross(ia);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,i,a,s,u){ia.subVectors(s,i),ja.subVectors(a,i),Qp.subVectors(t,i);const f=ia.dot(ia),h=ia.dot(ja),p=ia.dot(Qp),m=ja.dot(ja),_=ja.dot(Qp),g=f*m-h*h;if(g===0)return u.set(0,0,0),null;const v=1/g,M=(m*p-h*_)*v,T=(f*_-h*p)*v;return u.set(1-M-T,T,M)}static containsPoint(t,i,a,s){return this.getBarycoord(t,i,a,s,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(t,i,a,s,u,f,h,p){return this.getBarycoord(t,i,a,s,Za)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Za.x),p.addScaledVector(f,Za.y),p.addScaledVector(h,Za.z),p)}static getInterpolatedAttribute(t,i,a,s,u,f){return em.setScalar(0),nm.setScalar(0),im.setScalar(0),em.fromBufferAttribute(t,i),nm.fromBufferAttribute(t,a),im.fromBufferAttribute(t,s),f.setScalar(0),f.addScaledVector(em,u.x),f.addScaledVector(nm,u.y),f.addScaledVector(im,u.z),f}static isFrontFacing(t,i,a,s){return ia.subVectors(a,i),ja.subVectors(t,i),ia.cross(ja).dot(s)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,s){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,i,a,s){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ia.subVectors(this.c,this.b),ja.subVectors(this.a,this.b),ia.cross(ja).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return aa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return aa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,s,u){return aa.getInterpolation(t,this.a,this.b,this.c,i,a,s,u)}containsPoint(t){return aa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return aa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,s=this.b,u=this.c;let f,h;Vo.subVectors(s,a),Go.subVectors(u,a),Jp.subVectors(t,a);const p=Vo.dot(Jp),m=Go.dot(Jp);if(p<=0&&m<=0)return i.copy(a);$p.subVectors(t,s);const _=Vo.dot($p),g=Go.dot($p);if(_>=0&&g<=_)return i.copy(s);const v=p*g-_*m;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),i.copy(a).addScaledVector(Vo,f);tm.subVectors(t,u);const M=Vo.dot(tm),T=Go.dot(tm);if(T>=0&&M<=T)return i.copy(u);const E=M*m-p*T;if(E<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(a).addScaledVector(Go,h);const y=_*T-M*g;if(y<=0&&g-_>=0&&M-T>=0)return Py.subVectors(u,s),h=(g-_)/(g-_+(M-T)),i.copy(s).addScaledVector(Py,h);const x=1/(y+E+v);return f=E*x,h=v*x,i.copy(a).addScaledVector(Vo,f).addScaledVector(Go,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const KS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},yf={h:0,s:0,l:0};function am(l,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(t-l)*6*i:i<1/2?t:i<2/3?l+(t-l)*6*(2/3-i):l}class Ve{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=qi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,a,s=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=a,Ce.toWorkingColorSpace(this,s),this}setHSL(t,i,a,s=Ce.workingColorSpace){if(t=Hb(t,1),i=ai(i,0,1),a=ai(a,0,1),i===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+i):a+i-a*i,f=2*a-u;this.r=am(f,u,t+1/3),this.g=am(f,u,t),this.b=am(f,u,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,i=qi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=s[1],h=s[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=qi){const a=KS[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}copyLinearToSRGB(t){return this.r=$o(t.r),this.g=$o(t.g),this.b=$o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qi){return Ce.fromWorkingColorSpace(Hn.copy(this),t),Math.round(ai(Hn.r*255,0,255))*65536+Math.round(ai(Hn.g*255,0,255))*256+Math.round(ai(Hn.b*255,0,255))}getHexString(t=qi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Hn.copy(this),i);const a=Hn.r,s=Hn.g,u=Hn.b,f=Math.max(a,s,u),h=Math.min(a,s,u);let p,m;const _=(h+f)/2;if(h===f)p=0,m=0;else{const g=f-h;switch(m=_<=.5?g/(f+h):g/(2-f-h),f){case a:p=(s-u)/g+(s<u?6:0);break;case s:p=(u-a)/g+2;break;case u:p=(a-s)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Hn.copy(this),i),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=qi){Ce.fromWorkingColorSpace(Hn.copy(this),t);const i=Hn.r,a=Hn.g,s=Hn.b;return t!==qi?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,i,a){return this.getHSL(Hr),this.setHSL(Hr.h+t,Hr.s+i,Hr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Hr),t.getHSL(yf);const a=Vp(Hr.h,yf.h,i),s=Vp(Hr.s,yf.s,i),u=Vp(Hr.l,yf.l,i);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*i+u[3]*a+u[6]*s,this.g=u[1]*i+u[4]*a+u[7]*s,this.b=u[2]*i+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ve;Ve.NAMES=KS;let aA=0;class nh extends ml{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=Iu(),this.name="",this.blending=Qo,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Em,this.blendDst=Tm,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Qo&&(a.blending=this.blending),this.side!==Kr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Em&&(a.blendSrc=this.blendSrc),this.blendDst!==Tm&&(a.blendDst=this.blendDst),this.blendEquation!==Ps&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vy&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Lo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Lo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}if(i){const u=s(t.textures),f=s(t.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const s=i.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=i[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class QS extends nh{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=LS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new ut,Sf=new Ne;class ba{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=xy,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=i.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Sf.fromBufferAttribute(this,i),Sf.applyMatrix3(t),this.setXY(i,Sf.x,Sf.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=cu(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=ii(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=cu(i,this.array)),i}setX(t,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=cu(i,this.array)),i}setY(t,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=cu(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=cu(i,this.array)),i}setW(t,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=ii(i,this.array),a=ii(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,s){return t*=this.itemSize,this.normalized&&(i=ii(i,this.array),a=ii(a,this.array),s=ii(s,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,i,a,s,u){return t*=this.itemSize,this.normalized&&(i=ii(i,this.array),a=ii(a,this.array),s=ii(s,this.array),u=ii(u,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xy&&(t.usage=this.usage),t}}class JS extends ba{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class $S extends ba{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class Aa extends ba{constructor(t,i,a){super(new Float32Array(t),i,a)}}let rA=0;const ki=new pn,rm=new wi,ko=new ut,Ti=new Fu,pu=new Fu,An=new ut;class ts extends ml{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=Iu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(YS(t)?$S:JS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ce().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ki.makeRotationFromQuaternion(t),this.applyMatrix4(ki),this}rotateX(t){return ki.makeRotationX(t),this.applyMatrix4(ki),this}rotateY(t){return ki.makeRotationY(t),this.applyMatrix4(ki),this}rotateZ(t){return ki.makeRotationZ(t),this.applyMatrix4(ki),this}translate(t,i,a){return ki.makeTranslation(t,i,a),this.applyMatrix4(ki),this}scale(t,i,a){return ki.makeScale(t,i,a),this.applyMatrix4(ki),this}lookAt(t){return rm.lookAt(t),rm.updateMatrix(),this.applyMatrix4(rm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let s=0,u=t.length;s<u;s++){const f=t[s];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Aa(a,3))}else{for(let a=0,s=i.count;a<s;a++){const u=t[a];i.setXYZ(a,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,s=i.length;a<s;a++){const u=i[a];Ti.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new D_);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const a=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];pu.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(Ti.min,pu.min),Ti.expandByPoint(An),An.addVectors(Ti.max,pu.max),Ti.expandByPoint(An)):(Ti.expandByPoint(pu.min),Ti.expandByPoint(pu.max))}Ti.getCenter(a);let s=0;for(let u=0,f=t.count;u<f;u++)An.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(An));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)An.fromBufferAttribute(h,m),p&&(ko.fromBufferAttribute(t,m),An.add(ko)),s=Math.max(s,a.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,s=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ba(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let z=0;z<a.count;z++)h[z]=new ut,p[z]=new ut;const m=new ut,_=new ut,g=new ut,v=new Ne,M=new Ne,T=new Ne,E=new ut,y=new ut;function x(z,R,C){m.fromBufferAttribute(a,z),_.fromBufferAttribute(a,R),g.fromBufferAttribute(a,C),v.fromBufferAttribute(u,z),M.fromBufferAttribute(u,R),T.fromBufferAttribute(u,C),_.sub(m),g.sub(m),M.sub(v),T.sub(v);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(E.copy(_).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(H),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(H),h[z].add(E),h[R].add(E),h[C].add(E),p[z].add(y),p[R].add(y),p[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let z=0,R=U.length;z<R;++z){const C=U[z],H=C.start,tt=C.count;for(let J=H,rt=H+tt;J<rt;J+=3)x(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const w=new ut,b=new ut,P=new ut,B=new ut;function N(z){P.fromBufferAttribute(s,z),B.copy(P);const R=h[z];w.copy(R),w.sub(P.multiplyScalar(P.dot(R))).normalize(),b.crossVectors(B,R);const H=b.dot(p[z])<0?-1:1;f.setXYZW(z,w.x,w.y,w.z,H)}for(let z=0,R=U.length;z<R;++z){const C=U[z],H=C.start,tt=C.count;for(let J=H,rt=H+tt;J<rt;J+=3)N(t.getX(J+0)),N(t.getX(J+1)),N(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ba(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let v=0,M=a.count;v<M;v++)a.setXYZ(v,0,0,0);const s=new ut,u=new ut,f=new ut,h=new ut,p=new ut,m=new ut,_=new ut,g=new ut;if(t)for(let v=0,M=t.count;v<M;v+=3){const T=t.getX(v+0),E=t.getX(v+1),y=t.getX(v+2);s.fromBufferAttribute(i,T),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),_.subVectors(f,u),g.subVectors(s,u),_.cross(g),h.fromBufferAttribute(a,T),p.fromBufferAttribute(a,E),m.fromBufferAttribute(a,y),h.add(_),p.add(_),m.add(_),a.setXYZ(T,h.x,h.y,h.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,M=i.count;v<M;v+=3)s.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,u),g.subVectors(s,u),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)An.fromBufferAttribute(t,i),An.normalize(),t.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function t(h,p){const m=h.array,_=h.itemSize,g=h.normalized,v=new m.constructor(p.length*_);let M=0,T=0;for(let E=0,y=p.length;E<y;E++){h.isInterleavedBufferAttribute?M=p[E]*h.data.stride+h.offset:M=p[E]*_;for(let x=0;x<_;x++)v[T++]=m[M++]}return new ba(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ts,a=this.index.array,s=this.attributes;for(const h in s){const p=s[h],m=t(p,a);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let _=0,g=m.length;_<g;_++){const v=m[_],M=t(v,a);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const s={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,v=m.length;g<v;g++){const M=m[g];_.push(M.toJSON(t.data))}_.length>0&&(s[p]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(i));const s=t.attributes;for(const m in s){const _=s[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],g=u[m];for(let v=0,M=g.length;v<M;v++)_.push(g[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,_=f.length;m<_;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zy=new pn,As=new Qb,Mf=new D_,Iy=new ut,Ef=new ut,Tf=new ut,bf=new ut,sm=new ut,Af=new ut,By=new ut,Rf=new ut;class Ea extends wi{constructor(t=new ts,i=new QS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const s=i[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=s.length;u<f;u++){const h=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(s,t);const h=this.morphTargetInfluences;if(u&&h){Af.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=h[p],g=u[p];_!==0&&(sm.fromBufferAttribute(g,t),f?Af.addScaledVector(sm,_):Af.addScaledVector(sm.sub(i),_))}i.add(Af)}return i}raycast(t,i){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Mf.copy(a.boundingSphere),Mf.applyMatrix4(u),As.copy(t.ray).recast(t.near),!(Mf.containsPoint(As.origin)===!1&&(As.intersectSphere(Mf,Iy)===null||As.origin.distanceToSquared(Iy)>(t.far-t.near)**2))&&(zy.copy(u).invert(),As.copy(t.ray).applyMatrix4(zy),!(a.boundingBox!==null&&As.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,As)))}_computeIntersections(t,i,a){let s;const u=this.geometry,f=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,E=v.length;T<E;T++){const y=v[T],x=f[y.materialIndex],U=Math.max(y.start,M.start),w=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let b=U,P=w;b<P;b+=3){const B=h.getX(b),N=h.getX(b+1),z=h.getX(b+2);s=Cf(this,x,t,a,m,_,g,B,N,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,i.push(s))}}else{const T=Math.max(0,M.start),E=Math.min(h.count,M.start+M.count);for(let y=T,x=E;y<x;y+=3){const U=h.getX(y),w=h.getX(y+1),b=h.getX(y+2);s=Cf(this,f,t,a,m,_,g,U,w,b),s&&(s.faceIndex=Math.floor(y/3),i.push(s))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,E=v.length;T<E;T++){const y=v[T],x=f[y.materialIndex],U=Math.max(y.start,M.start),w=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let b=U,P=w;b<P;b+=3){const B=b,N=b+1,z=b+2;s=Cf(this,x,t,a,m,_,g,B,N,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,i.push(s))}}else{const T=Math.max(0,M.start),E=Math.min(p.count,M.start+M.count);for(let y=T,x=E;y<x;y+=3){const U=y,w=y+1,b=y+2;s=Cf(this,f,t,a,m,_,g,U,w,b),s&&(s.faceIndex=Math.floor(y/3),i.push(s))}}}}function sA(l,t,i,a,s,u,f,h){let p;if(t.side===si?p=a.intersectTriangle(f,u,s,!0,h):p=a.intersectTriangle(s,u,f,t.side===Kr,h),p===null)return null;Rf.copy(h),Rf.applyMatrix4(l.matrixWorld);const m=i.ray.origin.distanceTo(Rf);return m<i.near||m>i.far?null:{distance:m,point:Rf.clone(),object:l}}function Cf(l,t,i,a,s,u,f,h,p,m){l.getVertexPosition(h,Ef),l.getVertexPosition(p,Tf),l.getVertexPosition(m,bf);const _=sA(l,t,i,a,Ef,Tf,bf,By);if(_){const g=new ut;aa.getBarycoord(By,Ef,Tf,bf,g),s&&(_.uv=aa.getInterpolatedAttribute(s,h,p,m,g,new Ne)),u&&(_.uv1=aa.getInterpolatedAttribute(u,h,p,m,g,new Ne)),f&&(_.normal=aa.getInterpolatedAttribute(f,h,p,m,g,new ut),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new ut,materialIndex:0};aa.getNormal(Ef,Tf,bf,v.normal),_.face=v,_.barycoord=g}return _}class Hu extends ts{constructor(t=1,i=1,a=1,s=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:s,heightSegments:u,depthSegments:f};const h=this;s=Math.floor(s),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],g=[];let v=0,M=0;T("z","y","x",-1,-1,a,i,t,f,u,0),T("z","y","x",1,-1,a,i,-t,f,u,1),T("x","z","y",1,1,t,a,i,s,f,2),T("x","z","y",1,-1,t,a,-i,s,f,3),T("x","y","z",1,-1,t,i,a,s,u,4),T("x","y","z",-1,-1,t,i,-a,s,u,5),this.setIndex(p),this.setAttribute("position",new Aa(m,3)),this.setAttribute("normal",new Aa(_,3)),this.setAttribute("uv",new Aa(g,2));function T(E,y,x,U,w,b,P,B,N,z,R){const C=b/N,H=P/z,tt=b/2,J=P/2,rt=B/2,st=N+1,G=z+1;let $=0,Y=0;const vt=new ut;for(let xt=0;xt<G;xt++){const zt=xt*H-J;for(let Zt=0;Zt<st;Zt++){const fe=Zt*C-tt;vt[E]=fe*U,vt[y]=zt*w,vt[x]=rt,m.push(vt.x,vt.y,vt.z),vt[E]=0,vt[y]=0,vt[x]=B>0?1:-1,_.push(vt.x,vt.y,vt.z),g.push(Zt/N),g.push(1-xt/z),$+=1}}for(let xt=0;xt<z;xt++)for(let zt=0;zt<N;zt++){const Zt=v+zt+st*xt,fe=v+zt+st*(xt+1),O=v+(zt+1)+st*(xt+1),X=v+(zt+1)+st*xt;p.push(Zt,fe,X),p.push(fe,O,X),Y+=6}h.addGroup(M,Y,R),M+=Y,v+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ll(l){const t={};for(const i in l){t[i]={};for(const a in l[i]){const s=l[i][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=s.clone():Array.isArray(s)?t[i][a]=s.slice():t[i][a]=s}}return t}function Zn(l){const t={};for(let i=0;i<l.length;i++){const a=ll(l[i]);for(const s in a)t[s]=a[s]}return t}function oA(l){const t=[];for(let i=0;i<l.length;i++)t.push(l[i].clone());return t}function tM(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const lA={clone:ll,merge:Zn};var uA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends nh{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uA,this.fragmentShader=cA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ll(t.uniforms),this.uniformsGroups=oA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const f=this.uniforms[s].value;f&&f.isTexture?i.uniforms[s]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[s]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[s]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[s]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[s]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[s]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[s]={type:"m4",value:f.toArray()}:i.uniforms[s]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class eM extends wi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=er}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new ut,Fy=new Ne,Hy=new Ne;class Yi extends eM{constructor(t=50,i=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=l_*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return l_*2*Math.atan(Math.tan(Hp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-t/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Vr.x,Vr.y).multiplyScalar(-t/Vr.z)}getViewSize(t,i){return this.getViewBounds(t,Fy,Hy),i.subVectors(Hy,Fy)}setViewOffset(t,i,a,s,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Hp*.5*this.fov)/this.zoom,a=2*i,s=this.aspect*a,u=-.5*s;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*s/p,i-=f.offsetY*a/m,s*=f.width/p,a*=f.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,i,i-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Xo=-90,qo=1;class fA extends wi{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yi(Xo,qo,t,i);s.layers=this.layers,this.add(s);const u=new Yi(Xo,qo,t,i);u.layers=this.layers,this.add(u);const f=new Yi(Xo,qo,t,i);f.layers=this.layers,this.add(f);const h=new Yi(Xo,qo,t,i);h.layers=this.layers,this.add(h);const p=new Yi(Xo,qo,t,i);p.layers=this.layers,this.add(p);const m=new Yi(Xo,qo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,s,u,f,h,p]=i;for(const m of i)this.remove(m);if(t===er)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===kf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,p,m,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(i,u),t.setRenderTarget(a,1,s),t.render(i,f),t.setRenderTarget(a,2,s),t.render(i,h),t.setRenderTarget(a,3,s),t.render(i,p),t.setRenderTarget(a,4,s),t.render(i,m),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,s),t.render(i,_),t.setRenderTarget(g,v,M),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class nM extends oi{constructor(t,i,a,s,u,f,h,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:al,super(t,i,a,s,u,f,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hA extends qs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new nM(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ma}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hu(5,5,5),u=new rr({name:"CubemapFromEquirect",uniforms:ll(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:si,blending:Yr});u.uniforms.tEquirect.value=i;const f=new Ea(s,u),h=i.minFilter;return i.minFilter===Bs&&(i.minFilter=Ma),new fA(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,a,s){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,s);t.setRenderTarget(u)}}const om=new ut,dA=new ut,pA=new ce;class Ns{constructor(t=new ut(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,s){return this.normal.set(t,i,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const s=om.subVectors(a,i).cross(dA.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(om),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:i.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||pA.getNormalMatrix(t),s=this.coplanarPoint(om).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new D_,wf=new ut;class iM{constructor(t=new Ns,i=new Ns,a=new Ns,s=new Ns,u=new Ns,f=new Ns){this.planes=[t,i,a,s,u,f]}set(t,i,a,s,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(a),h[3].copy(s),h[4].copy(u),h[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=er){const a=this.planes,s=t.elements,u=s[0],f=s[1],h=s[2],p=s[3],m=s[4],_=s[5],g=s[6],v=s[7],M=s[8],T=s[9],E=s[10],y=s[11],x=s[12],U=s[13],w=s[14],b=s[15];if(a[0].setComponents(p-u,v-m,y-M,b-x).normalize(),a[1].setComponents(p+u,v+m,y+M,b+x).normalize(),a[2].setComponents(p+f,v+_,y+T,b+U).normalize(),a[3].setComponents(p-f,v-_,y-T,b-U).normalize(),a[4].setComponents(p-h,v-g,y-E,b-w).normalize(),i===er)a[5].setComponents(p+h,v+g,y+E,b+w).normalize();else if(i===kf)a[5].setComponents(h,g,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const s=i[a];if(wf.x=s.normal.x>0?t.max.x:t.min.x,wf.y=s.normal.y>0?t.max.y:t.min.y,wf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function aM(){let l=null,t=!1,i=null,a=null;function s(u,f){i(u,f),a=l.requestAnimationFrame(s)}return{start:function(){t!==!0&&i!==null&&(a=l.requestAnimationFrame(s),t=!0)},stop:function(){l.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){l=u}}}function mA(l){const t=new WeakMap;function i(h,p){const m=h.array,_=h.usage,g=m.byteLength,v=l.createBuffer();l.bindBuffer(p,v),l.bufferData(p,m,_),h.onUploadCallback();let M;if(m instanceof Float32Array)M=l.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=l.HALF_FLOAT:M=l.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=l.SHORT;else if(m instanceof Uint32Array)M=l.UNSIGNED_INT;else if(m instanceof Int32Array)M=l.INT;else if(m instanceof Int8Array)M=l.BYTE;else if(m instanceof Uint8Array)M=l.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function a(h,p,m){const _=p.array,g=p.updateRanges;if(l.bindBuffer(m,h),g.length===0)l.bufferSubData(m,0,_);else{g.sort((M,T)=>M.start-T.start);let v=0;for(let M=1;M<g.length;M++){const T=g[v],E=g[M];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++v,g[v]=E)}g.length=v+1;for(let M=0,T=g.length;M<T;M++){const E=g[M];l.bufferSubData(m,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(l.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:s,remove:u,update:f}}class ih extends ts{constructor(t=1,i=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:s};const u=t/2,f=i/2,h=Math.floor(a),p=Math.floor(s),m=h+1,_=p+1,g=t/h,v=i/p,M=[],T=[],E=[],y=[];for(let x=0;x<_;x++){const U=x*v-f;for(let w=0;w<m;w++){const b=w*g-u;T.push(b,-U,0),E.push(0,0,1),y.push(w/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<h;U++){const w=U+m*x,b=U+m*(x+1),P=U+1+m*(x+1),B=U+1+m*x;M.push(w,b,B),M.push(b,P,B)}this.setIndex(M),this.setAttribute("position",new Aa(T,3)),this.setAttribute("normal",new Aa(E,3)),this.setAttribute("uv",new Aa(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.width,t.height,t.widthSegments,t.heightSegments)}}var _A=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gA=`#ifdef USE_ALPHAHASH
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
#endif`,vA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MA=`#ifdef USE_AOMAP
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
#endif`,EA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TA=`#ifdef USE_BATCHING
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
#endif`,bA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wA=`#ifdef USE_IRIDESCENCE
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
#endif`,DA=`#ifdef USE_BUMPMAP
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
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FA=`#define PI 3.141592653589793
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
} // validated`,HA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VA=`vec3 transformedNormal = objectNormal;
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
#endif`,GA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YA="gl_FragColor = linearToOutputTexel( gl_FragColor );",WA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jA=`#ifdef USE_ENVMAP
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
#endif`,ZA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KA=`#ifdef USE_ENVMAP
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
#endif`,QA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JA=`#ifdef USE_ENVMAP
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
#endif`,$A=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iR=`#ifdef USE_GRADIENTMAP
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
}`,aR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oR=`uniform bool receiveShadow;
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
#endif`,lR=`#ifdef USE_ENVMAP
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
#endif`,uR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dR=`PhysicalMaterial material;
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
#endif`,pR=`struct PhysicalMaterial {
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
}`,mR=`
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
#endif`,_R=`#if defined( RE_IndirectDiffuse )
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
#endif`,gR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ER=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bR=`#if defined( USE_POINTS_UV )
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
#endif`,AR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UR=`#ifdef USE_MORPHTARGETS
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
#endif`,NR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BR=`#ifdef USE_NORMALMAP
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
#endif`,FR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$R=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t2=`float getShadowMask() {
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
}`,e2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n2=`#ifdef USE_SKINNING
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
#endif`,i2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,r2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u2=`#ifdef USE_TRANSMISSION
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
#endif`,c2=`#ifdef USE_TRANSMISSION
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
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_2=`uniform sampler2D t2D;
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`#include <common>
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
}`,M2=`#if DEPTH_PACKING == 3200
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
}`,E2=`#define DISTANCE
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
}`,T2=`#define DISTANCE
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
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`uniform float scale;
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
}`,C2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,D2=`uniform vec3 diffuse;
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
}`,U2=`#define LAMBERT
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
}`,N2=`#define LAMBERT
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
}`,L2=`#define MATCAP
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
}`,O2=`#define MATCAP
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
}`,P2=`#define NORMAL
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
}`,z2=`#define NORMAL
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
}`,I2=`#define PHONG
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
}`,B2=`#define PHONG
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
}`,F2=`#define STANDARD
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
}`,H2=`#define STANDARD
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
}`,V2=`#define TOON
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
}`,G2=`#define TOON
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
}`,k2=`uniform float size;
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
}`,X2=`uniform vec3 diffuse;
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
}`,q2=`#include <common>
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
}`,Y2=`uniform vec3 color;
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
}`,W2=`uniform float rotation;
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
}`,j2=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:_A,alphahash_pars_fragment:gA,alphamap_fragment:vA,alphamap_pars_fragment:xA,alphatest_fragment:yA,alphatest_pars_fragment:SA,aomap_fragment:MA,aomap_pars_fragment:EA,batching_pars_vertex:TA,batching_vertex:bA,begin_vertex:AA,beginnormal_vertex:RA,bsdfs:CA,iridescence_fragment:wA,bumpmap_pars_fragment:DA,clipping_planes_fragment:UA,clipping_planes_pars_fragment:NA,clipping_planes_pars_vertex:LA,clipping_planes_vertex:OA,color_fragment:PA,color_pars_fragment:zA,color_pars_vertex:IA,color_vertex:BA,common:FA,cube_uv_reflection_fragment:HA,defaultnormal_vertex:VA,displacementmap_pars_vertex:GA,displacementmap_vertex:kA,emissivemap_fragment:XA,emissivemap_pars_fragment:qA,colorspace_fragment:YA,colorspace_pars_fragment:WA,envmap_fragment:jA,envmap_common_pars_fragment:ZA,envmap_pars_fragment:KA,envmap_pars_vertex:QA,envmap_physical_pars_fragment:lR,envmap_vertex:JA,fog_vertex:$A,fog_pars_vertex:tR,fog_fragment:eR,fog_pars_fragment:nR,gradientmap_pars_fragment:iR,lightmap_pars_fragment:aR,lights_lambert_fragment:rR,lights_lambert_pars_fragment:sR,lights_pars_begin:oR,lights_toon_fragment:uR,lights_toon_pars_fragment:cR,lights_phong_fragment:fR,lights_phong_pars_fragment:hR,lights_physical_fragment:dR,lights_physical_pars_fragment:pR,lights_fragment_begin:mR,lights_fragment_maps:_R,lights_fragment_end:gR,logdepthbuf_fragment:vR,logdepthbuf_pars_fragment:xR,logdepthbuf_pars_vertex:yR,logdepthbuf_vertex:SR,map_fragment:MR,map_pars_fragment:ER,map_particle_fragment:TR,map_particle_pars_fragment:bR,metalnessmap_fragment:AR,metalnessmap_pars_fragment:RR,morphinstance_vertex:CR,morphcolor_vertex:wR,morphnormal_vertex:DR,morphtarget_pars_vertex:UR,morphtarget_vertex:NR,normal_fragment_begin:LR,normal_fragment_maps:OR,normal_pars_fragment:PR,normal_pars_vertex:zR,normal_vertex:IR,normalmap_pars_fragment:BR,clearcoat_normal_fragment_begin:FR,clearcoat_normal_fragment_maps:HR,clearcoat_pars_fragment:VR,iridescence_pars_fragment:GR,opaque_fragment:kR,packing:XR,premultiplied_alpha_fragment:qR,project_vertex:YR,dithering_fragment:WR,dithering_pars_fragment:jR,roughnessmap_fragment:ZR,roughnessmap_pars_fragment:KR,shadowmap_pars_fragment:QR,shadowmap_pars_vertex:JR,shadowmap_vertex:$R,shadowmask_pars_fragment:t2,skinbase_vertex:e2,skinning_pars_vertex:n2,skinning_vertex:i2,skinnormal_vertex:a2,specularmap_fragment:r2,specularmap_pars_fragment:s2,tonemapping_fragment:o2,tonemapping_pars_fragment:l2,transmission_fragment:u2,transmission_pars_fragment:c2,uv_pars_fragment:f2,uv_pars_vertex:h2,uv_vertex:d2,worldpos_vertex:p2,background_vert:m2,background_frag:_2,backgroundCube_vert:g2,backgroundCube_frag:v2,cube_vert:x2,cube_frag:y2,depth_vert:S2,depth_frag:M2,distanceRGBA_vert:E2,distanceRGBA_frag:T2,equirect_vert:b2,equirect_frag:A2,linedashed_vert:R2,linedashed_frag:C2,meshbasic_vert:w2,meshbasic_frag:D2,meshlambert_vert:U2,meshlambert_frag:N2,meshmatcap_vert:L2,meshmatcap_frag:O2,meshnormal_vert:P2,meshnormal_frag:z2,meshphong_vert:I2,meshphong_frag:B2,meshphysical_vert:F2,meshphysical_frag:H2,meshtoon_vert:V2,meshtoon_frag:G2,points_vert:k2,points_frag:X2,shadow_vert:q2,shadow_frag:Y2,sprite_vert:W2,sprite_frag:j2},Ut={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ya={basic:{uniforms:Zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ve(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Zn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Zn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ve(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Zn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Zn([Ut.points,Ut.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Zn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Zn([Ut.common,Ut.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Zn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Zn([Ut.sprite,Ut.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Zn([Ut.common,Ut.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Zn([Ut.lights,Ut.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ya.physical={uniforms:Zn([ya.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Df={r:0,b:0,g:0},Cs=new ar,Z2=new pn;function K2(l,t,i,a,s,u,f){const h=new Ve(0);let p=u===!0?0:1,m,_,g=null,v=0,M=null;function T(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function E(U){let w=!1;const b=T(U);b===null?x(h,p):b&&b.isColor&&(x(b,1),w=!0);const P=l.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(l.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function y(U,w){const b=T(w);b&&(b.isCubeTexture||b.mapping===th)?(_===void 0&&(_=new Ea(new Hu(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:ll(ya.backgroundCube.uniforms),vertexShader:ya.backgroundCube.vertexShader,fragmentShader:ya.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,B,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),Cs.copy(w.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),_.material.uniforms.envMap.value=b,_.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(Cs)),_.material.toneMapped=Ce.getTransfer(b.colorSpace)!==Fe,(g!==b||v!==b.version||M!==l.toneMapping)&&(_.material.needsUpdate=!0,g=b,v=b.version,M=l.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new Ea(new ih(2,2),new rr({name:"BackgroundMaterial",uniforms:ll(ya.background.uniforms),vertexShader:ya.background.vertexShader,fragmentShader:ya.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(b.colorSpace)!==Fe,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||v!==b.version||M!==l.toneMapping)&&(m.material.needsUpdate=!0,g=b,v=b.version,M=l.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,w){U.getRGB(Df,tM(l)),a.buffers.color.setClear(Df.r,Df.g,Df.b,w,f)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),p=w,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(h,p)},render:E,addToRenderList:y}}function Q2(l,t){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),a={},s=v(null);let u=s,f=!1;function h(C,H,tt,J,rt){let st=!1;const G=g(J,tt,H);u!==G&&(u=G,m(u.object)),st=M(C,J,tt,rt),st&&T(C,J,tt,rt),rt!==null&&t.update(rt,l.ELEMENT_ARRAY_BUFFER),(st||f)&&(f=!1,b(C,H,tt,J),rt!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function p(){return l.createVertexArray()}function m(C){return l.bindVertexArray(C)}function _(C){return l.deleteVertexArray(C)}function g(C,H,tt){const J=tt.wireframe===!0;let rt=a[C.id];rt===void 0&&(rt={},a[C.id]=rt);let st=rt[H.id];st===void 0&&(st={},rt[H.id]=st);let G=st[J];return G===void 0&&(G=v(p()),st[J]=G),G}function v(C){const H=[],tt=[],J=[];for(let rt=0;rt<i;rt++)H[rt]=0,tt[rt]=0,J[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:tt,attributeDivisors:J,object:C,attributes:{},index:null}}function M(C,H,tt,J){const rt=u.attributes,st=H.attributes;let G=0;const $=tt.getAttributes();for(const Y in $)if($[Y].location>=0){const xt=rt[Y];let zt=st[Y];if(zt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(zt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(zt=C.instanceColor)),xt===void 0||xt.attribute!==zt||zt&&xt.data!==zt.data)return!0;G++}return u.attributesNum!==G||u.index!==J}function T(C,H,tt,J){const rt={},st=H.attributes;let G=0;const $=tt.getAttributes();for(const Y in $)if($[Y].location>=0){let xt=st[Y];xt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor));const zt={};zt.attribute=xt,xt&&xt.data&&(zt.data=xt.data),rt[Y]=zt,G++}u.attributes=rt,u.attributesNum=G,u.index=J}function E(){const C=u.newAttributes;for(let H=0,tt=C.length;H<tt;H++)C[H]=0}function y(C){x(C,0)}function x(C,H){const tt=u.newAttributes,J=u.enabledAttributes,rt=u.attributeDivisors;tt[C]=1,J[C]===0&&(l.enableVertexAttribArray(C),J[C]=1),rt[C]!==H&&(l.vertexAttribDivisor(C,H),rt[C]=H)}function U(){const C=u.newAttributes,H=u.enabledAttributes;for(let tt=0,J=H.length;tt<J;tt++)H[tt]!==C[tt]&&(l.disableVertexAttribArray(tt),H[tt]=0)}function w(C,H,tt,J,rt,st,G){G===!0?l.vertexAttribIPointer(C,H,tt,rt,st):l.vertexAttribPointer(C,H,tt,J,rt,st)}function b(C,H,tt,J){E();const rt=J.attributes,st=tt.getAttributes(),G=H.defaultAttributeValues;for(const $ in st){const Y=st[$];if(Y.location>=0){let vt=rt[$];if(vt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const xt=vt.normalized,zt=vt.itemSize,Zt=t.get(vt);if(Zt===void 0)continue;const fe=Zt.buffer,O=Zt.type,X=Zt.bytesPerElement,mt=O===l.INT||O===l.UNSIGNED_INT||vt.gpuType===T_;if(vt.isInterleavedBufferAttribute){const ct=vt.data,bt=ct.stride,Ct=vt.offset;if(ct.isInstancedInterleavedBuffer){for(let wt=0;wt<Y.locationSize;wt++)x(Y.location+wt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let wt=0;wt<Y.locationSize;wt++)y(Y.location+wt);l.bindBuffer(l.ARRAY_BUFFER,fe);for(let wt=0;wt<Y.locationSize;wt++)w(Y.location+wt,zt/Y.locationSize,O,xt,bt*X,(Ct+zt/Y.locationSize*wt)*X,mt)}else{if(vt.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)x(Y.location+ct,vt.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ct=0;ct<Y.locationSize;ct++)y(Y.location+ct);l.bindBuffer(l.ARRAY_BUFFER,fe);for(let ct=0;ct<Y.locationSize;ct++)w(Y.location+ct,zt/Y.locationSize,O,xt,zt*X,zt/Y.locationSize*ct*X,mt)}}else if(G!==void 0){const xt=G[$];if(xt!==void 0)switch(xt.length){case 2:l.vertexAttrib2fv(Y.location,xt);break;case 3:l.vertexAttrib3fv(Y.location,xt);break;case 4:l.vertexAttrib4fv(Y.location,xt);break;default:l.vertexAttrib1fv(Y.location,xt)}}}}U()}function P(){z();for(const C in a){const H=a[C];for(const tt in H){const J=H[tt];for(const rt in J)_(J[rt].object),delete J[rt];delete H[tt]}delete a[C]}}function B(C){if(a[C.id]===void 0)return;const H=a[C.id];for(const tt in H){const J=H[tt];for(const rt in J)_(J[rt].object),delete J[rt];delete H[tt]}delete a[C.id]}function N(C){for(const H in a){const tt=a[H];if(tt[C.id]===void 0)continue;const J=tt[C.id];for(const rt in J)_(J[rt].object),delete J[rt];delete tt[C.id]}}function z(){R(),f=!0,u!==s&&(u=s,m(u.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:z,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:y,disableUnusedAttributes:U}}function J2(l,t,i){let a;function s(m){a=m}function u(m,_){l.drawArrays(a,m,_),i.update(_,a,1)}function f(m,_,g){g!==0&&(l.drawArraysInstanced(a,m,_,g),i.update(_,a,g))}function h(m,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T];i.update(M,a,1)}function p(m,_,g,v){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)f(m[T],_[T],v[T]);else{M.multiDrawArraysInstancedWEBGL(a,m,0,_,0,v,0,g);let T=0;for(let E=0;E<g;E++)T+=_[E]*v[E];i.update(T,a,1)}}this.setMode=s,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function $2(l,t,i,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=l.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function f(N){return!(N!==ra&&a.convert(N)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const z=N===zu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==ir&&a.convert(N)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==tr&&!z)}function p(N){if(N==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),T=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_TEXTURE_SIZE),y=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),x=l.getParameter(l.MAX_VERTEX_ATTRIBS),U=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),w=l.getParameter(l.MAX_VARYING_VECTORS),b=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),P=T>0,B=l.getParameter(l.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:P,maxSamples:B}}function tC(l){const t=this;let i=null,a=0,s=!1,u=!1;const f=new Ns,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||a!==0||s;return s=v,a=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,M){const T=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,x=l.get(g);if(!s||T===null||T.length===0||u&&!y)u?_(null):m();else{const U=u?0:a,w=U*4;let b=x.clippingState||null;p.value=b,b=_(T,v,w,M);for(let P=0;P!==w;++P)b[P]=i[P];x.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,M,T){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=p.value,T!==!0||y===null){const x=M+E*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let w=0,b=M;w!==E;++w,b+=4)f.copy(g[w]).applyMatrix4(U,h),f.normal.toArray(y,b),y[b+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function eC(l){let t=new WeakMap;function i(f,h){return h===Nm?f.mapping=al:h===Lm&&(f.mapping=rl),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===Nm||h===Lm)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new hA(p.height);return m.fromEquirectangularTexture(l,f),t.set(f,m),f.addEventListener("dispose",s),i(m.texture,f.mapping)}else return null}}return f}function s(f){const h=f.target;h.removeEventListener("dispose",s);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}class nC extends eM{constructor(t=-1,i=1,a=1,s=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=s,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,s,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,f=a+t,h=s+i,p=s-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const jo=4,Vy=[.125,.215,.35,.446,.526,.582],zs=20,lm=new nC,Gy=new Ve;let um=null,cm=0,fm=0,hm=!1;const Ls=(1+Math.sqrt(5))/2,Yo=1/Ls,ky=[new ut(-Ls,Yo,0),new ut(Ls,Yo,0),new ut(-Yo,0,Ls),new ut(Yo,0,Ls),new ut(0,Ls,-Yo),new ut(0,Ls,Yo),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)];class Xy{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,s=100){um=this._renderer.getRenderTarget(),cm=this._renderer.getActiveCubeFace(),fm=this._renderer.getActiveMipmapLevel(),hm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,a,s,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(um,cm,fm),this._renderer.xr.enabled=hm,t.scissorTest=!1,Uf(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===al||t.mapping===rl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),um=this._renderer.getRenderTarget(),cm=this._renderer.getActiveCubeFace(),fm=this._renderer.getActiveMipmapLevel(),hm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Ma,minFilter:Ma,generateMipmaps:!1,type:zu,format:ra,colorSpace:pl,depthBuffer:!1},s=qy(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qy(t,i,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iC(u)),this._blurMaterial=aC(u,t,i)}return s}_compileMaterial(t){const i=new Ea(this._lodPlanes[0],t);this._renderer.compile(i,lm)}_sceneToCubeUV(t,i,a,s){const h=new Yi(90,1,i,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,v=_.toneMapping;_.getClearColor(Gy),_.toneMapping=Wr,_.autoClear=!1;const M=new QS({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),T=new Ea(new Hu,M);let E=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,E=!0):(M.color.copy(Gy),E=!0);for(let x=0;x<6;x++){const U=x%3;U===0?(h.up.set(0,p[x],0),h.lookAt(m[x],0,0)):U===1?(h.up.set(0,0,p[x]),h.lookAt(0,m[x],0)):(h.up.set(0,p[x],0),h.lookAt(0,0,m[x]));const w=this._cubeSize;Uf(s,U*w,x>2?w:0,w,w),_.setRenderTarget(s),E&&_.render(T,h),_.render(t,h)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=v,_.autoClear=g,t.background=y}_textureToCubeUV(t,i){const a=this._renderer,s=t.mapping===al||t.mapping===rl;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yy());const u=s?this._cubemapMaterial:this._equirectMaterial,f=new Ea(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Uf(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,lm)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const s=this._lodPlanes.length;for(let u=1;u<s;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=ky[(s-u-1)%ky.length];this._blur(t,u-1,u,f,h)}i.autoClear=a}_blur(t,i,a,s,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,s,"latitudinal",u),this._halfBlur(f,t,a,a,s,"longitudinal",u)}_halfBlur(t,i,a,s,u,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Ea(this._lodPlanes[s],m),v=m.uniforms,M=this._sizeLods[a]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*zs-1),E=u/T,y=isFinite(u)?1+Math.floor(_*E):zs;y>zs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${zs}`);const x=[];let U=0;for(let N=0;N<zs;++N){const z=N/E,R=Math.exp(-z*z/2);x.push(R),N===0?U+=R:N<y&&(U+=2*R)}for(let N=0;N<x.length;N++)x[N]=x[N]/U;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:w}=this;v.dTheta.value=T,v.mipInt.value=w-a;const b=this._sizeLods[s],P=3*b*(s>w-jo?s-w+jo:0),B=4*(this._cubeSize-b);Uf(i,P,B,3*b,2*b),p.setRenderTarget(i),p.render(g,lm)}}function iC(l){const t=[],i=[],a=[];let s=l;const u=l-jo+1+Vy.length;for(let f=0;f<u;f++){const h=Math.pow(2,s);i.push(h);let p=1/h;f>l-jo?p=Vy[f-l+jo-1]:f===0&&(p=0),a.push(p);const m=1/(h-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,T=6,E=3,y=2,x=1,U=new Float32Array(E*T*M),w=new Float32Array(y*T*M),b=new Float32Array(x*T*M);for(let B=0;B<M;B++){const N=B%3*2/3-1,z=B>2?0:-1,R=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];U.set(R,E*T*B),w.set(v,y*T*B);const C=[B,B,B,B,B,B];b.set(C,x*T*B)}const P=new ts;P.setAttribute("position",new ba(U,E)),P.setAttribute("uv",new ba(w,y)),P.setAttribute("faceIndex",new ba(b,x)),t.push(P),s>jo&&s--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function qy(l,t,i){const a=new qs(l,t,i);return a.texture.mapping=th,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Uf(l,t,i,a,s){l.viewport.set(t,i,a,s),l.scissor.set(t,i,a,s)}function aC(l,t,i){const a=new Float32Array(zs),s=new ut(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:U_(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Yy(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:U_(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Wy(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:U_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function U_(){return`

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
	`}function rC(l){let t=new WeakMap,i=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===Nm||p===Lm,_=p===al||p===rl;if(m||_){let g=t.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Xy(l)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return m&&M&&M.height>0||_&&M&&s(M)?(i===null&&(i=new Xy(l)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function s(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function sC(l){const t={};function i(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=l.getExtension(a)}return t[a]=s,s}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const s=i(a);return s===null&&gu("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function oC(l,t,i,a){const s={},u=new WeakMap;function f(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);for(const T in v.morphAttributes){const E=v.morphAttributes[T];for(let y=0,x=E.length;y<x;y++)t.remove(E[y])}v.removeEventListener("dispose",f),delete s[v.id];const M=u.get(v);M&&(t.remove(M),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return s[v.id]===!0||(v.addEventListener("dispose",f),s[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const T in v)t.update(v[T],l.ARRAY_BUFFER);const M=g.morphAttributes;for(const T in M){const E=M[T];for(let y=0,x=E.length;y<x;y++)t.update(E[y],l.ARRAY_BUFFER)}}function m(g){const v=[],M=g.index,T=g.attributes.position;let E=0;if(M!==null){const U=M.array;E=M.version;for(let w=0,b=U.length;w<b;w+=3){const P=U[w+0],B=U[w+1],N=U[w+2];v.push(P,B,B,N,N,P)}}else if(T!==void 0){const U=T.array;E=T.version;for(let w=0,b=U.length/3-1;w<b;w+=3){const P=w+0,B=w+1,N=w+2;v.push(P,B,B,N,N,P)}}else return;const y=new(YS(v)?$S:JS)(v,1);y.version=E;const x=u.get(g);x&&t.remove(x),u.set(g,y)}function _(g){const v=u.get(g);if(v){const M=g.index;M!==null&&v.version<M.version&&m(g)}else m(g);return u.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function lC(l,t,i){let a;function s(v){a=v}let u,f;function h(v){u=v.type,f=v.bytesPerElement}function p(v,M){l.drawElements(a,M,u,v*f),i.update(M,a,1)}function m(v,M,T){T!==0&&(l.drawElementsInstanced(a,M,u,v*f,T),i.update(M,a,T))}function _(v,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,M,0,u,v,0,T);let y=0;for(let x=0;x<T;x++)y+=M[x];i.update(y,a,1)}function g(v,M,T,E){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)m(v[x]/f,M[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(a,M,0,u,v,0,E,0,T);let x=0;for(let U=0;U<T;U++)x+=M[U]*E[U];i.update(x,a,1)}}this.setMode=s,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function uC(l){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,h){switch(i.calls++,f){case l.TRIANGLES:i.triangles+=h*(u/3);break;case l.LINES:i.lines+=h*(u/2);break;case l.LINE_STRIP:i.lines+=h*(u-1);break;case l.LINE_LOOP:i.lines+=h*u;break;case l.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:s,update:a}}function cC(l,t,i){const a=new WeakMap,s=new on;function u(f,h,p){const m=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(h);if(v===void 0||v.count!==g){let C=function(){z.dispose(),a.delete(h),h.removeEventListener("dispose",C)};var M=C;v!==void 0&&v.texture.dispose();const T=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let b=0;T===!0&&(b=1),E===!0&&(b=2),y===!0&&(b=3);let P=h.attributes.position.count*b,B=1;P>t.maxTextureSize&&(B=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const N=new Float32Array(P*B*4*g),z=new jS(N,P,B,g);z.type=tr,z.needsUpdate=!0;const R=b*4;for(let H=0;H<g;H++){const tt=x[H],J=U[H],rt=w[H],st=P*B*4*H;for(let G=0;G<tt.count;G++){const $=G*R;T===!0&&(s.fromBufferAttribute(tt,G),N[st+$+0]=s.x,N[st+$+1]=s.y,N[st+$+2]=s.z,N[st+$+3]=0),E===!0&&(s.fromBufferAttribute(J,G),N[st+$+4]=s.x,N[st+$+5]=s.y,N[st+$+6]=s.z,N[st+$+7]=0),y===!0&&(s.fromBufferAttribute(rt,G),N[st+$+8]=s.x,N[st+$+9]=s.y,N[st+$+10]=s.z,N[st+$+11]=rt.itemSize===4?s.w:1)}}v={count:g,texture:z,size:new Ne(P,B)},a.set(h,v),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(l,"morphTexture",f.morphTexture,i);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const E=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(l,"morphTargetBaseInfluence",E),p.getUniforms().setValue(l,"morphTargetInfluences",m)}p.getUniforms().setValue(l,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:u}}function fC(l,t,i,a){let s=new WeakMap;function u(p){const m=a.render.frame,_=p.geometry,g=t.get(p,_);if(s.get(g)!==m&&(t.update(g),s.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),s.get(p)!==m&&(i.update(p.instanceMatrix,l.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,l.ARRAY_BUFFER),s.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==m&&(v.update(),s.set(v,m))}return g}function f(){s=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}class rM extends oi{constructor(t,i,a,s,u,f,h,p,m,_=Jo){if(_!==Jo&&_!==ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&_===Jo&&(a=Xs),a===void 0&&_===ol&&(a=sl),super(null,s,u,f,h,p,_,a,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:sa,this.minFilter=p!==void 0?p:sa,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const sM=new oi,jy=new rM(1,1),oM=new jS,lM=new Zb,uM=new nM,Zy=[],Ky=[],Qy=new Float32Array(16),Jy=new Float32Array(9),$y=new Float32Array(4);function _l(l,t,i){const a=l[0];if(a<=0||a>0)return l;const s=t*i;let u=Zy[s];if(u===void 0&&(u=new Float32Array(s),Zy[s]=u),t!==0){a.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=i,l[f].toArray(u,h)}return u}function xn(l,t){if(l.length!==t.length)return!1;for(let i=0,a=l.length;i<a;i++)if(l[i]!==t[i])return!1;return!0}function yn(l,t){for(let i=0,a=t.length;i<a;i++)l[i]=t[i]}function ah(l,t){let i=Ky[t];i===void 0&&(i=new Int32Array(t),Ky[t]=i);for(let a=0;a!==t;++a)i[a]=l.allocateTextureUnit();return i}function hC(l,t){const i=this.cache;i[0]!==t&&(l.uniform1f(this.addr,t),i[0]=t)}function dC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;l.uniform2fv(this.addr,t),yn(i,t)}}function pC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;l.uniform3fv(this.addr,t),yn(i,t)}}function mC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;l.uniform4fv(this.addr,t),yn(i,t)}}function _C(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(xn(i,t))return;l.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,a))return;$y.set(a),l.uniformMatrix2fv(this.addr,!1,$y),yn(i,a)}}function gC(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(xn(i,t))return;l.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,a))return;Jy.set(a),l.uniformMatrix3fv(this.addr,!1,Jy),yn(i,a)}}function vC(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(xn(i,t))return;l.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,a))return;Qy.set(a),l.uniformMatrix4fv(this.addr,!1,Qy),yn(i,a)}}function xC(l,t){const i=this.cache;i[0]!==t&&(l.uniform1i(this.addr,t),i[0]=t)}function yC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;l.uniform2iv(this.addr,t),yn(i,t)}}function SC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;l.uniform3iv(this.addr,t),yn(i,t)}}function MC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;l.uniform4iv(this.addr,t),yn(i,t)}}function EC(l,t){const i=this.cache;i[0]!==t&&(l.uniform1ui(this.addr,t),i[0]=t)}function TC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;l.uniform2uiv(this.addr,t),yn(i,t)}}function bC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;l.uniform3uiv(this.addr,t),yn(i,t)}}function AC(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;l.uniform4uiv(this.addr,t),yn(i,t)}}function RC(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s);let u;this.type===l.SAMPLER_2D_SHADOW?(jy.compareFunction=qS,u=jy):u=sM,i.setTexture2D(t||u,s)}function CC(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTexture3D(t||lM,s)}function wC(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTextureCube(t||uM,s)}function DC(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTexture2DArray(t||oM,s)}function UC(l){switch(l){case 5126:return hC;case 35664:return dC;case 35665:return pC;case 35666:return mC;case 35674:return _C;case 35675:return gC;case 35676:return vC;case 5124:case 35670:return xC;case 35667:case 35671:return yC;case 35668:case 35672:return SC;case 35669:case 35673:return MC;case 5125:return EC;case 36294:return TC;case 36295:return bC;case 36296:return AC;case 35678:case 36198:case 36298:case 36306:case 35682:return RC;case 35679:case 36299:case 36307:return CC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return DC}}function NC(l,t){l.uniform1fv(this.addr,t)}function LC(l,t){const i=_l(t,this.size,2);l.uniform2fv(this.addr,i)}function OC(l,t){const i=_l(t,this.size,3);l.uniform3fv(this.addr,i)}function PC(l,t){const i=_l(t,this.size,4);l.uniform4fv(this.addr,i)}function zC(l,t){const i=_l(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function IC(l,t){const i=_l(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function BC(l,t){const i=_l(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function FC(l,t){l.uniform1iv(this.addr,t)}function HC(l,t){l.uniform2iv(this.addr,t)}function VC(l,t){l.uniform3iv(this.addr,t)}function GC(l,t){l.uniform4iv(this.addr,t)}function kC(l,t){l.uniform1uiv(this.addr,t)}function XC(l,t){l.uniform2uiv(this.addr,t)}function qC(l,t){l.uniform3uiv(this.addr,t)}function YC(l,t){l.uniform4uiv(this.addr,t)}function WC(l,t,i){const a=this.cache,s=t.length,u=ah(i,s);xn(a,u)||(l.uniform1iv(this.addr,u),yn(a,u));for(let f=0;f!==s;++f)i.setTexture2D(t[f]||sM,u[f])}function jC(l,t,i){const a=this.cache,s=t.length,u=ah(i,s);xn(a,u)||(l.uniform1iv(this.addr,u),yn(a,u));for(let f=0;f!==s;++f)i.setTexture3D(t[f]||lM,u[f])}function ZC(l,t,i){const a=this.cache,s=t.length,u=ah(i,s);xn(a,u)||(l.uniform1iv(this.addr,u),yn(a,u));for(let f=0;f!==s;++f)i.setTextureCube(t[f]||uM,u[f])}function KC(l,t,i){const a=this.cache,s=t.length,u=ah(i,s);xn(a,u)||(l.uniform1iv(this.addr,u),yn(a,u));for(let f=0;f!==s;++f)i.setTexture2DArray(t[f]||oM,u[f])}function QC(l){switch(l){case 5126:return NC;case 35664:return LC;case 35665:return OC;case 35666:return PC;case 35674:return zC;case 35675:return IC;case 35676:return BC;case 5124:case 35670:return FC;case 35667:case 35671:return HC;case 35668:case 35672:return VC;case 35669:case 35673:return GC;case 5125:return kC;case 36294:return XC;case 36295:return qC;case 36296:return YC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return jC;case 35680:case 36300:case 36308:case 36293:return ZC;case 36289:case 36303:case 36311:case 36292:return KC}}class JC{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=UC(i.type)}}class $C{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=QC(i.type)}}class tw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const s=this.seq;for(let u=0,f=s.length;u!==f;++u){const h=s[u];h.setValue(t,i[h.id],a)}}}const dm=/(\w+)(\])?(\[|\.)?/g;function tS(l,t){l.seq.push(t),l.map[t.id]=t}function ew(l,t,i){const a=l.name,s=a.length;for(dm.lastIndex=0;;){const u=dm.exec(a),f=dm.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===s){tS(i,m===void 0?new JC(h,l,t):new $C(h,l,t));break}else{let g=i.map[h];g===void 0&&(g=new tw(h),tS(i,g)),i=g}}}class Ff{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const u=t.getActiveUniform(i,s),f=t.getUniformLocation(i,u.name);ew(u,f,this)}}setValue(t,i,a,s){const u=this.map[i];u!==void 0&&u.setValue(t,a,s)}setOptional(t,i,a){const s=i[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,i,a,s){for(let u=0,f=i.length;u!==f;++u){const h=i[u],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,s)}}static seqWithValue(t,i){const a=[];for(let s=0,u=t.length;s!==u;++s){const f=t[s];f.id in i&&a.push(f)}return a}}function eS(l,t,i){const a=l.createShader(t);return l.shaderSource(a,i),l.compileShader(a),a}const nw=37297;let iw=0;function aw(l,t){const i=l.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=s;f<u;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const nS=new ce;function rw(l){Ce._getMatrix(nS,Ce.workingColorSpace,l);const t=`mat3( ${nS.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(l)){case eh:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function iS(l,t,i){const a=l.getShaderParameter(t,l.COMPILE_STATUS),s=l.getShaderInfoLog(t).trim();if(a&&s==="")return"";const u=/ERROR: 0:(\d+)/.exec(s);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+s+`

`+aw(l.getShaderSource(t),f)}else return s}function sw(l,t){const i=rw(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ow(l,t){let i;switch(t){case Sb:i="Linear";break;case Mb:i="Reinhard";break;case Eb:i="Cineon";break;case Tb:i="ACESFilmic";break;case Ab:i="AgX";break;case Rb:i="Neutral";break;case bb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nf=new ut;function lw(){Ce.getLuminanceCoefficients(Nf);const l=Nf.x.toFixed(4),t=Nf.y.toFixed(4),i=Nf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vu).join(`
`)}function cw(l){const t=[];for(const i in l){const a=l[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function fw(l,t){const i={},a=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=l.getActiveAttrib(t,s),f=u.name;let h=1;u.type===l.FLOAT_MAT2&&(h=2),u.type===l.FLOAT_MAT3&&(h=3),u.type===l.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:l.getAttribLocation(t,f),locationSize:h}}return i}function vu(l){return l!==""}function aS(l,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rS(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function u_(l){return l.replace(hw,pw)}const dw=new Map;function pw(l,t){let i=he[t];if(i===void 0){const a=dw.get(t);if(a!==void 0)i=he[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return u_(i)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sS(l){return l.replace(mw,_w)}function _w(l,t,i,a){let s="";for(let u=parseInt(t);u<parseInt(i);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function oS(l){let t=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gw(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===NS?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===tb?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Ka&&(t="SHADOWMAP_TYPE_VSM"),t}function vw(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case al:case rl:t="ENVMAP_TYPE_CUBE";break;case th:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xw(l){let t="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case rl:t="ENVMAP_MODE_REFRACTION";break}return t}function yw(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case LS:t="ENVMAP_BLENDING_MULTIPLY";break;case xb:t="ENVMAP_BLENDING_MIX";break;case yb:t="ENVMAP_BLENDING_ADD";break}return t}function Sw(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function Mw(l,t,i,a){const s=l.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=gw(i),m=vw(i),_=xw(i),g=yw(i),v=Sw(i),M=uw(i),T=cw(u),E=s.createProgram();let y,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vu).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vu).join(`
`),x.length>0&&(x+=`
`)):(y=[oS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vu).join(`
`),x=[oS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wr?"#define TONE_MAPPING":"",i.toneMapping!==Wr?he.tonemapping_pars_fragment:"",i.toneMapping!==Wr?ow("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,sw("linearToOutputTexel",i.outputColorSpace),lw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vu).join(`
`)),f=u_(f),f=aS(f,i),f=rS(f,i),h=u_(h),h=aS(h,i),h=rS(h,i),f=sS(f),h=sS(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===yy?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=U+y+f,b=U+x+h,P=eS(s,s.VERTEX_SHADER,w),B=eS(s,s.FRAGMENT_SHADER,b);s.attachShader(E,P),s.attachShader(E,B),i.index0AttributeName!==void 0?s.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function N(H){if(l.debug.checkShaderErrors){const tt=s.getProgramInfoLog(E).trim(),J=s.getShaderInfoLog(P).trim(),rt=s.getShaderInfoLog(B).trim();let st=!0,G=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(st=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(s,E,P,B);else{const $=iS(s,P,"vertex"),Y=iS(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+tt+`
`+$+`
`+Y)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(J===""||rt==="")&&(G=!1);G&&(H.diagnostics={runnable:st,programLog:tt,vertexShader:{log:J,prefix:y},fragmentShader:{log:rt,prefix:x}})}s.deleteShader(P),s.deleteShader(B),z=new Ff(s,E),R=fw(s,E)}let z;this.getUniforms=function(){return z===void 0&&N(this),z};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(E,nw)),C},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=iw++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=B,this}let Ew=0;class Tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(i),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(s)===!1&&(f.add(s),s.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new bw(t),i.set(t,a)),a}}class bw{constructor(t){this.id=Ew++,this.code=t,this.usedTimes=0}}function Aw(l,t,i,a,s,u,f){const h=new ZS,p=new Tw,m=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let M=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return m.add(R),R===0?"uv":`uv${R}`}function y(R,C,H,tt,J){const rt=tt.fog,st=J.geometry,G=R.isMeshStandardMaterial?tt.environment:null,$=(R.isMeshStandardMaterial?i:t).get(R.envMap||G),Y=$&&$.mapping===th?$.image.height:null,vt=T[R.type];R.precision!==null&&(M=s.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const xt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,zt=xt!==void 0?xt.length:0;let Zt=0;st.morphAttributes.position!==void 0&&(Zt=1),st.morphAttributes.normal!==void 0&&(Zt=2),st.morphAttributes.color!==void 0&&(Zt=3);let fe,O,X,mt;if(vt){const Me=ya[vt];fe=Me.vertexShader,O=Me.fragmentShader}else fe=R.vertexShader,O=R.fragmentShader,p.update(R),X=p.getVertexShaderID(R),mt=p.getFragmentShaderID(R);const ct=l.getRenderTarget(),bt=l.state.buffers.depth.getReversed(),Ct=J.isInstancedMesh===!0,wt=J.isBatchedMesh===!0,St=!!R.map,At=!!R.matcap,Ae=!!$,Z=!!R.aoMap,mn=!!R.lightMap,ae=!!R.bumpMap,$t=!!R.normalMap,Dt=!!R.displacementMap,xe=!!R.emissiveMap,Qt=!!R.metalnessMap,I=!!R.roughnessMap,D=R.anisotropy>0,it=R.clearcoat>0,_t=R.dispersion>0,yt=R.iridescence>0,pt=R.sheen>0,Wt=R.transmission>0,Nt=D&&!!R.anisotropyMap,It=it&&!!R.clearcoatMap,_e=it&&!!R.clearcoatNormalMap,Mt=it&&!!R.clearcoatRoughnessMap,Gt=yt&&!!R.iridescenceMap,te=yt&&!!R.iridescenceThicknessMap,ne=pt&&!!R.sheenColorMap,Vt=pt&&!!R.sheenRoughnessMap,me=!!R.specularMap,oe=!!R.specularColorMap,Ie=!!R.specularIntensityMap,k=Wt&&!!R.transmissionMap,Lt=Wt&&!!R.thicknessMap,ft=!!R.gradientMap,gt=!!R.alphaMap,Ot=R.alphaTest>0,Ft=!!R.alphaHash,re=!!R.extensions;let je=Wr;R.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(je=l.toneMapping);const Sn={shaderID:vt,shaderType:R.type,shaderName:R.name,vertexShader:fe,fragmentShader:O,defines:R.defines,customVertexShaderID:X,customFragmentShaderID:mt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:wt,batchingColor:wt&&J._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&J.instanceColor!==null,instancingMorph:Ct&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ct===null?l.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:pl,alphaToCoverage:!!R.alphaToCoverage,map:St,matcap:At,envMap:Ae,envMapMode:Ae&&$.mapping,envMapCubeUVHeight:Y,aoMap:Z,lightMap:mn,bumpMap:ae,normalMap:$t,displacementMap:v&&Dt,emissiveMap:xe,normalMapObjectSpace:$t&&R.normalMapType===Nb,normalMapTangentSpace:$t&&R.normalMapType===Ub,metalnessMap:Qt,roughnessMap:I,anisotropy:D,anisotropyMap:Nt,clearcoat:it,clearcoatMap:It,clearcoatNormalMap:_e,clearcoatRoughnessMap:Mt,dispersion:_t,iridescence:yt,iridescenceMap:Gt,iridescenceThicknessMap:te,sheen:pt,sheenColorMap:ne,sheenRoughnessMap:Vt,specularMap:me,specularColorMap:oe,specularIntensityMap:Ie,transmission:Wt,transmissionMap:k,thicknessMap:Lt,gradientMap:ft,opaque:R.transparent===!1&&R.blending===Qo&&R.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ot,alphaHash:Ft,combine:R.combine,mapUv:St&&E(R.map.channel),aoMapUv:Z&&E(R.aoMap.channel),lightMapUv:mn&&E(R.lightMap.channel),bumpMapUv:ae&&E(R.bumpMap.channel),normalMapUv:$t&&E(R.normalMap.channel),displacementMapUv:Dt&&E(R.displacementMap.channel),emissiveMapUv:xe&&E(R.emissiveMap.channel),metalnessMapUv:Qt&&E(R.metalnessMap.channel),roughnessMapUv:I&&E(R.roughnessMap.channel),anisotropyMapUv:Nt&&E(R.anisotropyMap.channel),clearcoatMapUv:It&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:_e&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:te&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&E(R.sheenRoughnessMap.channel),specularMapUv:me&&E(R.specularMap.channel),specularColorMapUv:oe&&E(R.specularColorMap.channel),specularIntensityMapUv:Ie&&E(R.specularIntensityMap.channel),transmissionMapUv:k&&E(R.transmissionMap.channel),thicknessMapUv:Lt&&E(R.thicknessMap.channel),alphaMapUv:gt&&E(R.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&($t||D),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!st.attributes.uv&&(St||gt),fog:!!rt,useFog:R.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:bt,skinning:J.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Zt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:l.shadowMap.enabled&&H.length>0,shadowMapType:l.shadowMap.type,toneMapping:je,decodeVideoTexture:St&&R.map.isVideoTexture===!0&&Ce.getTransfer(R.map.colorSpace)===Fe,decodeVideoTextureEmissive:xe&&R.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(R.emissiveMap.colorSpace)===Fe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===$a,flipSided:R.side===si,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:re&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&R.extensions.multiDraw===!0||wt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Sn.vertexUv1s=m.has(1),Sn.vertexUv2s=m.has(2),Sn.vertexUv3s=m.has(3),m.clear(),Sn}function x(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)C.push(H),C.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(U(C,R),w(C,R),C.push(l.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function U(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function w(R,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),R.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),R.push(h.mask)}function b(R){const C=T[R.type];let H;if(C){const tt=ya[C];H=lA.clone(tt.uniforms)}else H=R.uniforms;return H}function P(R,C){let H;for(let tt=0,J=_.length;tt<J;tt++){const rt=_[tt];if(rt.cacheKey===C){H=rt,++H.usedTimes;break}}return H===void 0&&(H=new Mw(l,C,R,u),_.push(H)),H}function B(R){if(--R.usedTimes===0){const C=_.indexOf(R);_[C]=_[_.length-1],_.pop(),R.destroy()}}function N(R){p.remove(R)}function z(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:b,acquireProgram:P,releaseProgram:B,releaseShaderCache:N,programs:_,dispose:z}}function Rw(){let l=new WeakMap;function t(f){return l.has(f)}function i(f){let h=l.get(f);return h===void 0&&(h={},l.set(f,h)),h}function a(f){l.delete(f)}function s(f,h,p){l.get(f)[h]=p}function u(){l=new WeakMap}return{has:t,get:i,remove:a,update:s,dispose:u}}function Cw(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function lS(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function uS(){const l=[];let t=0;const i=[],a=[],s=[];function u(){t=0,i.length=0,a.length=0,s.length=0}function f(g,v,M,T,E,y){let x=l[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:M,groupOrder:T,renderOrder:g.renderOrder,z:E,group:y},l[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=M,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=E,x.group=y),t++,x}function h(g,v,M,T,E,y){const x=f(g,v,M,T,E,y);M.transmission>0?a.push(x):M.transparent===!0?s.push(x):i.push(x)}function p(g,v,M,T,E,y){const x=f(g,v,M,T,E,y);M.transmission>0?a.unshift(x):M.transparent===!0?s.unshift(x):i.unshift(x)}function m(g,v){i.length>1&&i.sort(g||Cw),a.length>1&&a.sort(v||lS),s.length>1&&s.sort(v||lS)}function _(){for(let g=t,v=l.length;g<v;g++){const M=l[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:a,transparent:s,init:u,push:h,unshift:p,finish:_,sort:m}}function ww(){let l=new WeakMap;function t(a,s){const u=l.get(a);let f;return u===void 0?(f=new uS,l.set(a,[f])):s>=u.length?(f=new uS,u.push(f)):f=u[s],f}function i(){l=new WeakMap}return{get:t,dispose:i}}function Dw(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ut,color:new Ve};break;case"SpotLight":i={position:new ut,direction:new ut,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ut,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ut,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":i={color:new Ve,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return l[t.id]=i,i}}}function Uw(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=i,i}}}let Nw=0;function Lw(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function Ow(l){const t=new Dw,i=Uw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new ut);const s=new ut,u=new pn,f=new pn;function h(m){let _=0,g=0,v=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let M=0,T=0,E=0,y=0,x=0,U=0,w=0,b=0,P=0,B=0,N=0;m.sort(Lw);for(let R=0,C=m.length;R<C;R++){const H=m[R],tt=H.color,J=H.intensity,rt=H.distance,st=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=tt.r*J,g+=tt.g*J,v+=tt.b*J;else if(H.isLightProbe){for(let G=0;G<9;G++)a.probe[G].addScaledVector(H.sh.coefficients[G],J);N++}else if(H.isDirectionalLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,Y=i.get(H);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,a.directionalShadow[M]=Y,a.directionalShadowMap[M]=st,a.directionalShadowMatrix[M]=H.shadow.matrix,U++}a.directional[M]=G,M++}else if(H.isSpotLight){const G=t.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy(tt).multiplyScalar(J),G.distance=rt,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,a.spot[E]=G;const $=H.shadow;if(H.map&&(a.spotLightMap[P]=H.map,P++,$.updateMatrices(H),H.castShadow&&B++),a.spotLightMatrix[E]=$.matrix,H.castShadow){const Y=i.get(H);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,a.spotShadow[E]=Y,a.spotShadowMap[E]=st,b++}E++}else if(H.isRectAreaLight){const G=t.get(H);G.color.copy(tt).multiplyScalar(J),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),a.rectArea[y]=G,y++}else if(H.isPointLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),G.distance=H.distance,G.decay=H.decay,H.castShadow){const $=H.shadow,Y=i.get(H);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,a.pointShadow[T]=Y,a.pointShadowMap[T]=st,a.pointShadowMatrix[T]=H.shadow.matrix,w++}a.point[T]=G,T++}else if(H.isHemisphereLight){const G=t.get(H);G.skyColor.copy(H.color).multiplyScalar(J),G.groundColor.copy(H.groundColor).multiplyScalar(J),a.hemi[x]=G,x++}}y>0&&(l.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ut.LTC_FLOAT_1,a.rectAreaLTC2=Ut.LTC_FLOAT_2):(a.rectAreaLTC1=Ut.LTC_HALF_1,a.rectAreaLTC2=Ut.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const z=a.hash;(z.directionalLength!==M||z.pointLength!==T||z.spotLength!==E||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==U||z.numPointShadows!==w||z.numSpotShadows!==b||z.numSpotMaps!==P||z.numLightProbes!==N)&&(a.directional.length=M,a.spot.length=E,a.rectArea.length=y,a.point.length=T,a.hemi.length=x,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=b,a.spotShadowMap.length=b,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=b+P-B,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=N,z.directionalLength=M,z.pointLength=T,z.spotLength=E,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=U,z.numPointShadows=w,z.numSpotShadows=b,z.numSpotMaps=P,z.numLightProbes=N,a.version=Nw++)}function p(m,_){let g=0,v=0,M=0,T=0,E=0;const y=_.matrixWorldInverse;for(let x=0,U=m.length;x<U;x++){const w=m[x];if(w.isDirectionalLight){const b=a.directional[g];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),g++}else if(w.isSpotLight){const b=a.spot[M];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),M++}else if(w.isRectAreaLight){const b=a.rectArea[T];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),f.identity(),u.copy(w.matrixWorld),u.premultiply(y),f.extractRotation(u),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),T++}else if(w.isPointLight){const b=a.point[v];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),v++}else if(w.isHemisphereLight){const b=a.hemi[E];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(y),E++}}}return{setup:h,setupView:p,state:a}}function cS(l){const t=new Ow(l),i=[],a=[];function s(_){m.camera=_,i.length=0,a.length=0}function u(_){i.push(_)}function f(_){a.push(_)}function h(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function Pw(l){let t=new WeakMap;function i(s,u=0){const f=t.get(s);let h;return f===void 0?(h=new cS(l),t.set(s,[h])):u>=f.length?(h=new cS(l),f.push(h)):h=f[u],h}function a(){t=new WeakMap}return{get:i,dispose:a}}class zw extends nh{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Iw extends nh{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
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
}`;function Hw(l,t,i){let a=new iM;const s=new Ne,u=new Ne,f=new on,h=new zw({depthPacking:Db}),p=new Iw,m={},_=i.maxTextureSize,g={[Kr]:si,[si]:Kr,[$a]:$a},v=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Bw,fragmentShader:Fw}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const T=new ts;T.setAttribute("position",new ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ea(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=NS;let x=this.type;this.render=function(B,N,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const R=l.getRenderTarget(),C=l.getActiveCubeFace(),H=l.getActiveMipmapLevel(),tt=l.state;tt.setBlending(Yr),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const J=x!==Ka&&this.type===Ka,rt=x===Ka&&this.type!==Ka;for(let st=0,G=B.length;st<G;st++){const $=B[st],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const vt=Y.getFrameExtents();if(s.multiply(vt),u.copy(Y.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/vt.x),s.x=u.x*vt.x,Y.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/vt.y),s.y=u.y*vt.y,Y.mapSize.y=u.y)),Y.map===null||J===!0||rt===!0){const zt=this.type!==Ka?{minFilter:sa,magFilter:sa}:{};Y.map!==null&&Y.map.dispose(),Y.map=new qs(s.x,s.y,zt),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}l.setRenderTarget(Y.map),l.clear();const xt=Y.getViewportCount();for(let zt=0;zt<xt;zt++){const Zt=Y.getViewport(zt);f.set(u.x*Zt.x,u.y*Zt.y,u.x*Zt.z,u.y*Zt.w),tt.viewport(f),Y.updateMatrices($,zt),a=Y.getFrustum(),b(N,z,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Ka&&U(Y,z),Y.needsUpdate=!1}x=this.type,y.needsUpdate=!1,l.setRenderTarget(R,C,H)};function U(B,N){const z=t.update(E);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new qs(s.x,s.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,l.setRenderTarget(B.mapPass),l.clear(),l.renderBufferDirect(N,null,z,v,E,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,l.setRenderTarget(B.map),l.clear(),l.renderBufferDirect(N,null,z,M,E,null)}function w(B,N,z,R){let C=null;const H=z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)C=H;else if(C=z.isPointLight===!0?p:h,l.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const tt=C.uuid,J=N.uuid;let rt=m[tt];rt===void 0&&(rt={},m[tt]=rt);let st=rt[J];st===void 0&&(st=C.clone(),rt[J]=st,N.addEventListener("dispose",P)),C=st}if(C.visible=N.visible,C.wireframe=N.wireframe,R===Ka?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:g[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const tt=l.properties.get(C);tt.light=z}return C}function b(B,N,z,R,C){if(B.visible===!1)return;if(B.layers.test(N.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Ka)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,B.matrixWorld);const J=t.update(B),rt=B.material;if(Array.isArray(rt)){const st=J.groups;for(let G=0,$=st.length;G<$;G++){const Y=st[G],vt=rt[Y.materialIndex];if(vt&&vt.visible){const xt=w(B,vt,R,C);B.onBeforeShadow(l,B,N,z,J,xt,Y),l.renderBufferDirect(z,null,J,xt,B,Y),B.onAfterShadow(l,B,N,z,J,xt,Y)}}}else if(rt.visible){const st=w(B,rt,R,C);B.onBeforeShadow(l,B,N,z,J,st,null),l.renderBufferDirect(z,null,J,st,B,null),B.onAfterShadow(l,B,N,z,J,st,null)}}const tt=B.children;for(let J=0,rt=tt.length;J<rt;J++)b(tt[J],N,z,R,C)}function P(B){B.target.removeEventListener("dispose",P);for(const z in m){const R=m[z],C=B.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const Vw={[bm]:Am,[Rm]:Dm,[Cm]:Um,[il]:wm,[Am]:bm,[Dm]:Rm,[Um]:Cm,[wm]:il};function Gw(l,t){function i(){let k=!1;const Lt=new on;let ft=null;const gt=new on(0,0,0,0);return{setMask:function(Ot){ft!==Ot&&!k&&(l.colorMask(Ot,Ot,Ot,Ot),ft=Ot)},setLocked:function(Ot){k=Ot},setClear:function(Ot,Ft,re,je,Sn){Sn===!0&&(Ot*=je,Ft*=je,re*=je),Lt.set(Ot,Ft,re,je),gt.equals(Lt)===!1&&(l.clearColor(Ot,Ft,re,je),gt.copy(Lt))},reset:function(){k=!1,ft=null,gt.set(-1,0,0,0)}}}function a(){let k=!1,Lt=!1,ft=null,gt=null,Ot=null;return{setReversed:function(Ft){if(Lt!==Ft){const re=t.get("EXT_clip_control");Lt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const je=Ot;Ot=null,this.setClear(je)}Lt=Ft},getReversed:function(){return Lt},setTest:function(Ft){Ft?ct(l.DEPTH_TEST):bt(l.DEPTH_TEST)},setMask:function(Ft){ft!==Ft&&!k&&(l.depthMask(Ft),ft=Ft)},setFunc:function(Ft){if(Lt&&(Ft=Vw[Ft]),gt!==Ft){switch(Ft){case bm:l.depthFunc(l.NEVER);break;case Am:l.depthFunc(l.ALWAYS);break;case Rm:l.depthFunc(l.LESS);break;case il:l.depthFunc(l.LEQUAL);break;case Cm:l.depthFunc(l.EQUAL);break;case wm:l.depthFunc(l.GEQUAL);break;case Dm:l.depthFunc(l.GREATER);break;case Um:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}gt=Ft}},setLocked:function(Ft){k=Ft},setClear:function(Ft){Ot!==Ft&&(Lt&&(Ft=1-Ft),l.clearDepth(Ft),Ot=Ft)},reset:function(){k=!1,ft=null,gt=null,Ot=null,Lt=!1}}}function s(){let k=!1,Lt=null,ft=null,gt=null,Ot=null,Ft=null,re=null,je=null,Sn=null;return{setTest:function(Me){k||(Me?ct(l.STENCIL_TEST):bt(l.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!k&&(l.stencilMask(Me),Lt=Me)},setFunc:function(Me,We,Mn){(ft!==Me||gt!==We||Ot!==Mn)&&(l.stencilFunc(Me,We,Mn),ft=Me,gt=We,Ot=Mn)},setOp:function(Me,We,Mn){(Ft!==Me||re!==We||je!==Mn)&&(l.stencilOp(Me,We,Mn),Ft=Me,re=We,je=Mn)},setLocked:function(Me){k=Me},setClear:function(Me){Sn!==Me&&(l.clearStencil(Me),Sn=Me)},reset:function(){k=!1,Lt=null,ft=null,gt=null,Ot=null,Ft=null,re=null,je=null,Sn=null}}}const u=new i,f=new a,h=new s,p=new WeakMap,m=new WeakMap;let _={},g={},v=new WeakMap,M=[],T=null,E=!1,y=null,x=null,U=null,w=null,b=null,P=null,B=null,N=new Ve(0,0,0),z=0,R=!1,C=null,H=null,tt=null,J=null,rt=null;const st=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const Y=l.getParameter(l.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=$>=2);let vt=null,xt={};const zt=l.getParameter(l.SCISSOR_BOX),Zt=l.getParameter(l.VIEWPORT),fe=new on().fromArray(zt),O=new on().fromArray(Zt);function X(k,Lt,ft,gt){const Ot=new Uint8Array(4),Ft=l.createTexture();l.bindTexture(k,Ft),l.texParameteri(k,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(k,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let re=0;re<ft;re++)k===l.TEXTURE_3D||k===l.TEXTURE_2D_ARRAY?l.texImage3D(Lt,0,l.RGBA,1,1,gt,0,l.RGBA,l.UNSIGNED_BYTE,Ot):l.texImage2D(Lt+re,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Ot);return Ft}const mt={};mt[l.TEXTURE_2D]=X(l.TEXTURE_2D,l.TEXTURE_2D,1),mt[l.TEXTURE_CUBE_MAP]=X(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[l.TEXTURE_2D_ARRAY]=X(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),mt[l.TEXTURE_3D]=X(l.TEXTURE_3D,l.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ct(l.DEPTH_TEST),f.setFunc(il),ae(!1),$t(py),ct(l.CULL_FACE),Z(Yr);function ct(k){_[k]!==!0&&(l.enable(k),_[k]=!0)}function bt(k){_[k]!==!1&&(l.disable(k),_[k]=!1)}function Ct(k,Lt){return g[k]!==Lt?(l.bindFramebuffer(k,Lt),g[k]=Lt,k===l.DRAW_FRAMEBUFFER&&(g[l.FRAMEBUFFER]=Lt),k===l.FRAMEBUFFER&&(g[l.DRAW_FRAMEBUFFER]=Lt),!0):!1}function wt(k,Lt){let ft=M,gt=!1;if(k){ft=v.get(Lt),ft===void 0&&(ft=[],v.set(Lt,ft));const Ot=k.textures;if(ft.length!==Ot.length||ft[0]!==l.COLOR_ATTACHMENT0){for(let Ft=0,re=Ot.length;Ft<re;Ft++)ft[Ft]=l.COLOR_ATTACHMENT0+Ft;ft.length=Ot.length,gt=!0}}else ft[0]!==l.BACK&&(ft[0]=l.BACK,gt=!0);gt&&l.drawBuffers(ft)}function St(k){return T!==k?(l.useProgram(k),T=k,!0):!1}const At={[Ps]:l.FUNC_ADD,[nb]:l.FUNC_SUBTRACT,[ib]:l.FUNC_REVERSE_SUBTRACT};At[ab]=l.MIN,At[rb]=l.MAX;const Ae={[sb]:l.ZERO,[ob]:l.ONE,[lb]:l.SRC_COLOR,[Em]:l.SRC_ALPHA,[pb]:l.SRC_ALPHA_SATURATE,[hb]:l.DST_COLOR,[cb]:l.DST_ALPHA,[ub]:l.ONE_MINUS_SRC_COLOR,[Tm]:l.ONE_MINUS_SRC_ALPHA,[db]:l.ONE_MINUS_DST_COLOR,[fb]:l.ONE_MINUS_DST_ALPHA,[mb]:l.CONSTANT_COLOR,[_b]:l.ONE_MINUS_CONSTANT_COLOR,[gb]:l.CONSTANT_ALPHA,[vb]:l.ONE_MINUS_CONSTANT_ALPHA};function Z(k,Lt,ft,gt,Ot,Ft,re,je,Sn,Me){if(k===Yr){E===!0&&(bt(l.BLEND),E=!1);return}if(E===!1&&(ct(l.BLEND),E=!0),k!==eb){if(k!==y||Me!==R){if((x!==Ps||b!==Ps)&&(l.blendEquation(l.FUNC_ADD),x=Ps,b=Ps),Me)switch(k){case Qo:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case my:l.blendFunc(l.ONE,l.ONE);break;case _y:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case gy:l.blendFuncSeparate(l.ZERO,l.SRC_COLOR,l.ZERO,l.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Qo:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case my:l.blendFunc(l.SRC_ALPHA,l.ONE);break;case _y:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case gy:l.blendFunc(l.ZERO,l.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}U=null,w=null,P=null,B=null,N.set(0,0,0),z=0,y=k,R=Me}return}Ot=Ot||Lt,Ft=Ft||ft,re=re||gt,(Lt!==x||Ot!==b)&&(l.blendEquationSeparate(At[Lt],At[Ot]),x=Lt,b=Ot),(ft!==U||gt!==w||Ft!==P||re!==B)&&(l.blendFuncSeparate(Ae[ft],Ae[gt],Ae[Ft],Ae[re]),U=ft,w=gt,P=Ft,B=re),(je.equals(N)===!1||Sn!==z)&&(l.blendColor(je.r,je.g,je.b,Sn),N.copy(je),z=Sn),y=k,R=!1}function mn(k,Lt){k.side===$a?bt(l.CULL_FACE):ct(l.CULL_FACE);let ft=k.side===si;Lt&&(ft=!ft),ae(ft),k.blending===Qo&&k.transparent===!1?Z(Yr):Z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const gt=k.stencilWrite;h.setTest(gt),gt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(l.SAMPLE_ALPHA_TO_COVERAGE):bt(l.SAMPLE_ALPHA_TO_COVERAGE)}function ae(k){C!==k&&(k?l.frontFace(l.CW):l.frontFace(l.CCW),C=k)}function $t(k){k!==JT?(ct(l.CULL_FACE),k!==H&&(k===py?l.cullFace(l.BACK):k===$T?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):bt(l.CULL_FACE),H=k}function Dt(k){k!==tt&&(G&&l.lineWidth(k),tt=k)}function xe(k,Lt,ft){k?(ct(l.POLYGON_OFFSET_FILL),(J!==Lt||rt!==ft)&&(l.polygonOffset(Lt,ft),J=Lt,rt=ft)):bt(l.POLYGON_OFFSET_FILL)}function Qt(k){k?ct(l.SCISSOR_TEST):bt(l.SCISSOR_TEST)}function I(k){k===void 0&&(k=l.TEXTURE0+st-1),vt!==k&&(l.activeTexture(k),vt=k)}function D(k,Lt,ft){ft===void 0&&(vt===null?ft=l.TEXTURE0+st-1:ft=vt);let gt=xt[ft];gt===void 0&&(gt={type:void 0,texture:void 0},xt[ft]=gt),(gt.type!==k||gt.texture!==Lt)&&(vt!==ft&&(l.activeTexture(ft),vt=ft),l.bindTexture(k,Lt||mt[k]),gt.type=k,gt.texture=Lt)}function it(){const k=xt[vt];k!==void 0&&k.type!==void 0&&(l.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{l.compressedTexImage2D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{l.compressedTexImage3D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{l.texSubImage2D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{l.texSubImage3D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{l.texStorage2D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{l.texStorage3D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{l.texImage2D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{l.texImage3D.apply(l,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(k){fe.equals(k)===!1&&(l.scissor(k.x,k.y,k.z,k.w),fe.copy(k))}function Vt(k){O.equals(k)===!1&&(l.viewport(k.x,k.y,k.z,k.w),O.copy(k))}function me(k,Lt){let ft=m.get(Lt);ft===void 0&&(ft=new WeakMap,m.set(Lt,ft));let gt=ft.get(k);gt===void 0&&(gt=l.getUniformBlockIndex(Lt,k.name),ft.set(k,gt))}function oe(k,Lt){const gt=m.get(Lt).get(k);p.get(Lt)!==gt&&(l.uniformBlockBinding(Lt,gt,k.__bindingPointIndex),p.set(Lt,gt))}function Ie(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),f.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),_={},vt=null,xt={},g={},v=new WeakMap,M=[],T=null,E=!1,y=null,x=null,U=null,w=null,b=null,P=null,B=null,N=new Ve(0,0,0),z=0,R=!1,C=null,H=null,tt=null,J=null,rt=null,fe.set(0,0,l.canvas.width,l.canvas.height),O.set(0,0,l.canvas.width,l.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:ct,disable:bt,bindFramebuffer:Ct,drawBuffers:wt,useProgram:St,setBlending:Z,setMaterial:mn,setFlipSided:ae,setCullFace:$t,setLineWidth:Dt,setPolygonOffset:xe,setScissorTest:Qt,activeTexture:I,bindTexture:D,unbindTexture:it,compressedTexImage2D:_t,compressedTexImage3D:yt,texImage2D:Gt,texImage3D:te,updateUBOMapping:me,uniformBlockBinding:oe,texStorage2D:_e,texStorage3D:Mt,texSubImage2D:pt,texSubImage3D:Wt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:It,scissor:ne,viewport:Vt,reset:Ie}}function fS(l,t,i,a){const s=kw(a);switch(i){case BS:return l*t;case HS:return l*t;case VS:return l*t*2;case GS:return l*t/s.components*s.byteLength;case R_:return l*t/s.components*s.byteLength;case kS:return l*t*2/s.components*s.byteLength;case C_:return l*t*2/s.components*s.byteLength;case FS:return l*t*3/s.components*s.byteLength;case ra:return l*t*4/s.components*s.byteLength;case w_:return l*t*4/s.components*s.byteLength;case Of:case Pf:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case zf:case If:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Im:case Fm:return Math.max(l,16)*Math.max(t,8)/4;case zm:case Bm:return Math.max(l,8)*Math.max(t,8)/2;case Hm:case Vm:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Gm:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case km:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Xm:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case qm:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case Ym:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case Wm:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case jm:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case Zm:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case Km:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case Qm:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case Jm:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case $m:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case t_:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case e_:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case n_:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case Bf:case i_:case a_:return Math.ceil(l/4)*Math.ceil(t/4)*16;case XS:case r_:return Math.ceil(l/4)*Math.ceil(t/4)*8;case s_:case o_:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kw(l){switch(l){case ir:case PS:return{byteLength:1,components:1};case Au:case zS:case zu:return{byteLength:2,components:1};case b_:case A_:return{byteLength:2,components:4};case Xs:case T_:case tr:return{byteLength:4,components:1};case IS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}function Xw(l,t,i,a,s,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ne,_=new WeakMap;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,D){return M?new OffscreenCanvas(I,D):Xf("canvas")}function E(I,D,it){let _t=1;const yt=Qt(I);if((yt.width>it||yt.height>it)&&(_t=it/Math.max(yt.width,yt.height)),_t<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(_t*yt.width),Wt=Math.floor(_t*yt.height);g===void 0&&(g=T(pt,Wt));const Nt=D?T(pt,Wt):g;return Nt.width=pt,Nt.height=Wt,Nt.getContext("2d").drawImage(I,0,0,pt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Wt+")."),Nt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){l.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?l.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function w(I,D,it,_t,yt=!1){if(I!==null){if(l[I]!==void 0)return l[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt=D;if(D===l.RED&&(it===l.FLOAT&&(pt=l.R32F),it===l.HALF_FLOAT&&(pt=l.R16F),it===l.UNSIGNED_BYTE&&(pt=l.R8)),D===l.RED_INTEGER&&(it===l.UNSIGNED_BYTE&&(pt=l.R8UI),it===l.UNSIGNED_SHORT&&(pt=l.R16UI),it===l.UNSIGNED_INT&&(pt=l.R32UI),it===l.BYTE&&(pt=l.R8I),it===l.SHORT&&(pt=l.R16I),it===l.INT&&(pt=l.R32I)),D===l.RG&&(it===l.FLOAT&&(pt=l.RG32F),it===l.HALF_FLOAT&&(pt=l.RG16F),it===l.UNSIGNED_BYTE&&(pt=l.RG8)),D===l.RG_INTEGER&&(it===l.UNSIGNED_BYTE&&(pt=l.RG8UI),it===l.UNSIGNED_SHORT&&(pt=l.RG16UI),it===l.UNSIGNED_INT&&(pt=l.RG32UI),it===l.BYTE&&(pt=l.RG8I),it===l.SHORT&&(pt=l.RG16I),it===l.INT&&(pt=l.RG32I)),D===l.RGB_INTEGER&&(it===l.UNSIGNED_BYTE&&(pt=l.RGB8UI),it===l.UNSIGNED_SHORT&&(pt=l.RGB16UI),it===l.UNSIGNED_INT&&(pt=l.RGB32UI),it===l.BYTE&&(pt=l.RGB8I),it===l.SHORT&&(pt=l.RGB16I),it===l.INT&&(pt=l.RGB32I)),D===l.RGBA_INTEGER&&(it===l.UNSIGNED_BYTE&&(pt=l.RGBA8UI),it===l.UNSIGNED_SHORT&&(pt=l.RGBA16UI),it===l.UNSIGNED_INT&&(pt=l.RGBA32UI),it===l.BYTE&&(pt=l.RGBA8I),it===l.SHORT&&(pt=l.RGBA16I),it===l.INT&&(pt=l.RGBA32I)),D===l.RGB&&it===l.UNSIGNED_INT_5_9_9_9_REV&&(pt=l.RGB9_E5),D===l.RGBA){const Wt=yt?eh:Ce.getTransfer(_t);it===l.FLOAT&&(pt=l.RGBA32F),it===l.HALF_FLOAT&&(pt=l.RGBA16F),it===l.UNSIGNED_BYTE&&(pt=Wt===Fe?l.SRGB8_ALPHA8:l.RGBA8),it===l.UNSIGNED_SHORT_4_4_4_4&&(pt=l.RGBA4),it===l.UNSIGNED_SHORT_5_5_5_1&&(pt=l.RGB5_A1)}return(pt===l.R16F||pt===l.R32F||pt===l.RG16F||pt===l.RG32F||pt===l.RGBA16F||pt===l.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function b(I,D){let it;return I?D===null||D===Xs||D===sl?it=l.DEPTH24_STENCIL8:D===tr?it=l.DEPTH32F_STENCIL8:D===Au&&(it=l.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Xs||D===sl?it=l.DEPTH_COMPONENT24:D===tr?it=l.DEPTH_COMPONENT32F:D===Au&&(it=l.DEPTH_COMPONENT16),it}function P(I,D){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==sa&&I.minFilter!==Ma?Math.log2(Math.max(D.width,D.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?D.mipmaps.length:1}function B(I){const D=I.target;D.removeEventListener("dispose",B),z(D),D.isVideoTexture&&_.delete(D)}function N(I){const D=I.target;D.removeEventListener("dispose",N),C(D)}function z(I){const D=a.get(I);if(D.__webglInit===void 0)return;const it=I.source,_t=v.get(it);if(_t){const yt=_t[D.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&R(I),Object.keys(_t).length===0&&v.delete(it)}a.remove(I)}function R(I){const D=a.get(I);l.deleteTexture(D.__webglTexture);const it=I.source,_t=v.get(it);delete _t[D.__cacheKey],f.memory.textures--}function C(I){const D=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(D.__webglFramebuffer[_t]))for(let yt=0;yt<D.__webglFramebuffer[_t].length;yt++)l.deleteFramebuffer(D.__webglFramebuffer[_t][yt]);else l.deleteFramebuffer(D.__webglFramebuffer[_t]);D.__webglDepthbuffer&&l.deleteRenderbuffer(D.__webglDepthbuffer[_t])}else{if(Array.isArray(D.__webglFramebuffer))for(let _t=0;_t<D.__webglFramebuffer.length;_t++)l.deleteFramebuffer(D.__webglFramebuffer[_t]);else l.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&l.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&l.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let _t=0;_t<D.__webglColorRenderbuffer.length;_t++)D.__webglColorRenderbuffer[_t]&&l.deleteRenderbuffer(D.__webglColorRenderbuffer[_t]);D.__webglDepthRenderbuffer&&l.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const it=I.textures;for(let _t=0,yt=it.length;_t<yt;_t++){const pt=a.get(it[_t]);pt.__webglTexture&&(l.deleteTexture(pt.__webglTexture),f.memory.textures--),a.remove(it[_t])}a.remove(I)}let H=0;function tt(){H=0}function J(){const I=H;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function rt(I){const D=[];return D.push(I.wrapS),D.push(I.wrapT),D.push(I.wrapR||0),D.push(I.magFilter),D.push(I.minFilter),D.push(I.anisotropy),D.push(I.internalFormat),D.push(I.format),D.push(I.type),D.push(I.generateMipmaps),D.push(I.premultiplyAlpha),D.push(I.flipY),D.push(I.unpackAlignment),D.push(I.colorSpace),D.join()}function st(I,D){const it=a.get(I);if(I.isVideoTexture&&Dt(I),I.isRenderTargetTexture===!1&&I.version>0&&it.__version!==I.version){const _t=I.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(it,I,D);return}}i.bindTexture(l.TEXTURE_2D,it.__webglTexture,l.TEXTURE0+D)}function G(I,D){const it=a.get(I);if(I.version>0&&it.__version!==I.version){O(it,I,D);return}i.bindTexture(l.TEXTURE_2D_ARRAY,it.__webglTexture,l.TEXTURE0+D)}function $(I,D){const it=a.get(I);if(I.version>0&&it.__version!==I.version){O(it,I,D);return}i.bindTexture(l.TEXTURE_3D,it.__webglTexture,l.TEXTURE0+D)}function Y(I,D){const it=a.get(I);if(I.version>0&&it.__version!==I.version){X(it,I,D);return}i.bindTexture(l.TEXTURE_CUBE_MAP,it.__webglTexture,l.TEXTURE0+D)}const vt={[Om]:l.REPEAT,[Is]:l.CLAMP_TO_EDGE,[Pm]:l.MIRRORED_REPEAT},xt={[sa]:l.NEAREST,[Cb]:l.NEAREST_MIPMAP_NEAREST,[hf]:l.NEAREST_MIPMAP_LINEAR,[Ma]:l.LINEAR,[Fp]:l.LINEAR_MIPMAP_NEAREST,[Bs]:l.LINEAR_MIPMAP_LINEAR},zt={[Lb]:l.NEVER,[Fb]:l.ALWAYS,[Ob]:l.LESS,[qS]:l.LEQUAL,[Pb]:l.EQUAL,[Bb]:l.GEQUAL,[zb]:l.GREATER,[Ib]:l.NOTEQUAL};function Zt(I,D){if(D.type===tr&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Ma||D.magFilter===Fp||D.magFilter===hf||D.magFilter===Bs||D.minFilter===Ma||D.minFilter===Fp||D.minFilter===hf||D.minFilter===Bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(I,l.TEXTURE_WRAP_S,vt[D.wrapS]),l.texParameteri(I,l.TEXTURE_WRAP_T,vt[D.wrapT]),(I===l.TEXTURE_3D||I===l.TEXTURE_2D_ARRAY)&&l.texParameteri(I,l.TEXTURE_WRAP_R,vt[D.wrapR]),l.texParameteri(I,l.TEXTURE_MAG_FILTER,xt[D.magFilter]),l.texParameteri(I,l.TEXTURE_MIN_FILTER,xt[D.minFilter]),D.compareFunction&&(l.texParameteri(I,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(I,l.TEXTURE_COMPARE_FUNC,zt[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===sa||D.minFilter!==hf&&D.minFilter!==Bs||D.type===tr&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||a.get(D).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");l.texParameterf(I,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),a.get(D).__currentAnisotropy=D.anisotropy}}}function fe(I,D){let it=!1;I.__webglInit===void 0&&(I.__webglInit=!0,D.addEventListener("dispose",B));const _t=D.source;let yt=v.get(_t);yt===void 0&&(yt={},v.set(_t,yt));const pt=rt(D);if(pt!==I.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:l.createTexture(),usedTimes:0},f.memory.textures++,it=!0),yt[pt].usedTimes++;const Wt=yt[I.__cacheKey];Wt!==void 0&&(yt[I.__cacheKey].usedTimes--,Wt.usedTimes===0&&R(D)),I.__cacheKey=pt,I.__webglTexture=yt[pt].texture}return it}function O(I,D,it){let _t=l.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(_t=l.TEXTURE_2D_ARRAY),D.isData3DTexture&&(_t=l.TEXTURE_3D);const yt=fe(I,D),pt=D.source;i.bindTexture(_t,I.__webglTexture,l.TEXTURE0+it);const Wt=a.get(pt);if(pt.version!==Wt.__version||yt===!0){i.activeTexture(l.TEXTURE0+it);const Nt=Ce.getPrimaries(Ce.workingColorSpace),It=D.colorSpace===Gr?null:Ce.getPrimaries(D.colorSpace),_e=D.colorSpace===Gr||Nt===It?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,D.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,D.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Mt=E(D.image,!1,s.maxTextureSize);Mt=xe(D,Mt);const Gt=u.convert(D.format,D.colorSpace),te=u.convert(D.type);let ne=w(D.internalFormat,Gt,te,D.colorSpace,D.isVideoTexture);Zt(_t,D);let Vt;const me=D.mipmaps,oe=D.isVideoTexture!==!0,Ie=Wt.__version===void 0||yt===!0,k=pt.dataReady,Lt=P(D,Mt);if(D.isDepthTexture)ne=b(D.format===ol,D.type),Ie&&(oe?i.texStorage2D(l.TEXTURE_2D,1,ne,Mt.width,Mt.height):i.texImage2D(l.TEXTURE_2D,0,ne,Mt.width,Mt.height,0,Gt,te,null));else if(D.isDataTexture)if(me.length>0){oe&&Ie&&i.texStorage2D(l.TEXTURE_2D,Lt,ne,me[0].width,me[0].height);for(let ft=0,gt=me.length;ft<gt;ft++)Vt=me[ft],oe?k&&i.texSubImage2D(l.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Gt,te,Vt.data):i.texImage2D(l.TEXTURE_2D,ft,ne,Vt.width,Vt.height,0,Gt,te,Vt.data);D.generateMipmaps=!1}else oe?(Ie&&i.texStorage2D(l.TEXTURE_2D,Lt,ne,Mt.width,Mt.height),k&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Gt,te,Mt.data)):i.texImage2D(l.TEXTURE_2D,0,ne,Mt.width,Mt.height,0,Gt,te,Mt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){oe&&Ie&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Lt,ne,me[0].width,me[0].height,Mt.depth);for(let ft=0,gt=me.length;ft<gt;ft++)if(Vt=me[ft],D.format!==ra)if(Gt!==null)if(oe){if(k)if(D.layerUpdates.size>0){const Ot=fS(Vt.width,Vt.height,D.format,D.type);for(const Ft of D.layerUpdates){const re=Vt.data.subarray(Ft*Ot/Vt.data.BYTES_PER_ELEMENT,(Ft+1)*Ot/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,ft,0,0,Ft,Vt.width,Vt.height,1,Gt,re)}D.clearLayerUpdates()}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,ft,0,0,0,Vt.width,Vt.height,Mt.depth,Gt,Vt.data)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,ft,ne,Vt.width,Vt.height,Mt.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?k&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,ft,0,0,0,Vt.width,Vt.height,Mt.depth,Gt,te,Vt.data):i.texImage3D(l.TEXTURE_2D_ARRAY,ft,ne,Vt.width,Vt.height,Mt.depth,0,Gt,te,Vt.data)}else{oe&&Ie&&i.texStorage2D(l.TEXTURE_2D,Lt,ne,me[0].width,me[0].height);for(let ft=0,gt=me.length;ft<gt;ft++)Vt=me[ft],D.format!==ra?Gt!==null?oe?k&&i.compressedTexSubImage2D(l.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Gt,Vt.data):i.compressedTexImage2D(l.TEXTURE_2D,ft,ne,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?k&&i.texSubImage2D(l.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Gt,te,Vt.data):i.texImage2D(l.TEXTURE_2D,ft,ne,Vt.width,Vt.height,0,Gt,te,Vt.data)}else if(D.isDataArrayTexture)if(oe){if(Ie&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Lt,ne,Mt.width,Mt.height,Mt.depth),k)if(D.layerUpdates.size>0){const ft=fS(Mt.width,Mt.height,D.format,D.type);for(const gt of D.layerUpdates){const Ot=Mt.data.subarray(gt*ft/Mt.data.BYTES_PER_ELEMENT,(gt+1)*ft/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,Gt,te,Ot)}D.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,te,Mt.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,ne,Mt.width,Mt.height,Mt.depth,0,Gt,te,Mt.data);else if(D.isData3DTexture)oe?(Ie&&i.texStorage3D(l.TEXTURE_3D,Lt,ne,Mt.width,Mt.height,Mt.depth),k&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,te,Mt.data)):i.texImage3D(l.TEXTURE_3D,0,ne,Mt.width,Mt.height,Mt.depth,0,Gt,te,Mt.data);else if(D.isFramebufferTexture){if(Ie)if(oe)i.texStorage2D(l.TEXTURE_2D,Lt,ne,Mt.width,Mt.height);else{let ft=Mt.width,gt=Mt.height;for(let Ot=0;Ot<Lt;Ot++)i.texImage2D(l.TEXTURE_2D,Ot,ne,ft,gt,0,Gt,te,null),ft>>=1,gt>>=1}}else if(me.length>0){if(oe&&Ie){const ft=Qt(me[0]);i.texStorage2D(l.TEXTURE_2D,Lt,ne,ft.width,ft.height)}for(let ft=0,gt=me.length;ft<gt;ft++)Vt=me[ft],oe?k&&i.texSubImage2D(l.TEXTURE_2D,ft,0,0,Gt,te,Vt):i.texImage2D(l.TEXTURE_2D,ft,ne,Gt,te,Vt);D.generateMipmaps=!1}else if(oe){if(Ie){const ft=Qt(Mt);i.texStorage2D(l.TEXTURE_2D,Lt,ne,ft.width,ft.height)}k&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Gt,te,Mt)}else i.texImage2D(l.TEXTURE_2D,0,ne,Gt,te,Mt);y(D)&&x(_t),Wt.__version=pt.version,D.onUpdate&&D.onUpdate(D)}I.__version=D.version}function X(I,D,it){if(D.image.length!==6)return;const _t=fe(I,D),yt=D.source;i.bindTexture(l.TEXTURE_CUBE_MAP,I.__webglTexture,l.TEXTURE0+it);const pt=a.get(yt);if(yt.version!==pt.__version||_t===!0){i.activeTexture(l.TEXTURE0+it);const Wt=Ce.getPrimaries(Ce.workingColorSpace),Nt=D.colorSpace===Gr?null:Ce.getPrimaries(D.colorSpace),It=D.colorSpace===Gr||Wt===Nt?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,D.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,D.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const _e=D.isCompressedTexture||D.image[0].isCompressedTexture,Mt=D.image[0]&&D.image[0].isDataTexture,Gt=[];for(let gt=0;gt<6;gt++)!_e&&!Mt?Gt[gt]=E(D.image[gt],!0,s.maxCubemapSize):Gt[gt]=Mt?D.image[gt].image:D.image[gt],Gt[gt]=xe(D,Gt[gt]);const te=Gt[0],ne=u.convert(D.format,D.colorSpace),Vt=u.convert(D.type),me=w(D.internalFormat,ne,Vt,D.colorSpace),oe=D.isVideoTexture!==!0,Ie=pt.__version===void 0||_t===!0,k=yt.dataReady;let Lt=P(D,te);Zt(l.TEXTURE_CUBE_MAP,D);let ft;if(_e){oe&&Ie&&i.texStorage2D(l.TEXTURE_CUBE_MAP,Lt,me,te.width,te.height);for(let gt=0;gt<6;gt++){ft=Gt[gt].mipmaps;for(let Ot=0;Ot<ft.length;Ot++){const Ft=ft[Ot];D.format!==ra?ne!==null?oe?k&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,0,0,Ft.width,Ft.height,ne,Ft.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,me,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?k&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,0,0,Ft.width,Ft.height,ne,Vt,Ft.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,me,Ft.width,Ft.height,0,ne,Vt,Ft.data)}}}else{if(ft=D.mipmaps,oe&&Ie){ft.length>0&&Lt++;const gt=Qt(Gt[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,Lt,me,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){oe?k&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt[gt].width,Gt[gt].height,ne,Vt,Gt[gt].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,me,Gt[gt].width,Gt[gt].height,0,ne,Vt,Gt[gt].data);for(let Ot=0;Ot<ft.length;Ot++){const re=ft[Ot].image[gt].image;oe?k&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,0,0,re.width,re.height,ne,Vt,re.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,me,re.width,re.height,0,ne,Vt,re.data)}}else{oe?k&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ne,Vt,Gt[gt]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,me,ne,Vt,Gt[gt]);for(let Ot=0;Ot<ft.length;Ot++){const Ft=ft[Ot];oe?k&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,0,0,ne,Vt,Ft.image[gt]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,me,ne,Vt,Ft.image[gt])}}}y(D)&&x(l.TEXTURE_CUBE_MAP),pt.__version=yt.version,D.onUpdate&&D.onUpdate(D)}I.__version=D.version}function mt(I,D,it,_t,yt,pt){const Wt=u.convert(it.format,it.colorSpace),Nt=u.convert(it.type),It=w(it.internalFormat,Wt,Nt,it.colorSpace),_e=a.get(D),Mt=a.get(it);if(Mt.__renderTarget=D,!_e.__hasExternalTextures){const Gt=Math.max(1,D.width>>pt),te=Math.max(1,D.height>>pt);yt===l.TEXTURE_3D||yt===l.TEXTURE_2D_ARRAY?i.texImage3D(yt,pt,It,Gt,te,D.depth,0,Wt,Nt,null):i.texImage2D(yt,pt,It,Gt,te,0,Wt,Nt,null)}i.bindFramebuffer(l.FRAMEBUFFER,I),$t(D)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,_t,yt,Mt.__webglTexture,0,ae(D)):(yt===l.TEXTURE_2D||yt>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,_t,yt,Mt.__webglTexture,pt),i.bindFramebuffer(l.FRAMEBUFFER,null)}function ct(I,D,it){if(l.bindRenderbuffer(l.RENDERBUFFER,I),D.depthBuffer){const _t=D.depthTexture,yt=_t&&_t.isDepthTexture?_t.type:null,pt=b(D.stencilBuffer,yt),Wt=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Nt=ae(D);$t(D)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Nt,pt,D.width,D.height):it?l.renderbufferStorageMultisample(l.RENDERBUFFER,Nt,pt,D.width,D.height):l.renderbufferStorage(l.RENDERBUFFER,pt,D.width,D.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,Wt,l.RENDERBUFFER,I)}else{const _t=D.textures;for(let yt=0;yt<_t.length;yt++){const pt=_t[yt],Wt=u.convert(pt.format,pt.colorSpace),Nt=u.convert(pt.type),It=w(pt.internalFormat,Wt,Nt,pt.colorSpace),_e=ae(D);it&&$t(D)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,_e,It,D.width,D.height):$t(D)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,_e,It,D.width,D.height):l.renderbufferStorage(l.RENDERBUFFER,It,D.width,D.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function bt(I,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(l.FRAMEBUFFER,I),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=a.get(D.depthTexture);_t.__renderTarget=D,(!_t.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),st(D.depthTexture,0);const yt=_t.__webglTexture,pt=ae(D);if(D.depthTexture.format===Jo)$t(D)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,yt,0,pt):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,yt,0);else if(D.depthTexture.format===ol)$t(D)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,yt,0,pt):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Ct(I){const D=a.get(I),it=I.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==I.depthTexture){const _t=I.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),_t){const yt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,_t.removeEventListener("dispose",yt)};_t.addEventListener("dispose",yt),D.__depthDisposeCallback=yt}D.__boundDepthTexture=_t}if(I.depthTexture&&!D.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");bt(D.__webglFramebuffer,I)}else if(it){D.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(l.FRAMEBUFFER,D.__webglFramebuffer[_t]),D.__webglDepthbuffer[_t]===void 0)D.__webglDepthbuffer[_t]=l.createRenderbuffer(),ct(D.__webglDepthbuffer[_t],I,!1);else{const yt=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,pt=D.__webglDepthbuffer[_t];l.bindRenderbuffer(l.RENDERBUFFER,pt),l.framebufferRenderbuffer(l.FRAMEBUFFER,yt,l.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(l.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=l.createRenderbuffer(),ct(D.__webglDepthbuffer,I,!1);else{const _t=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,yt=D.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,yt),l.framebufferRenderbuffer(l.FRAMEBUFFER,_t,l.RENDERBUFFER,yt)}i.bindFramebuffer(l.FRAMEBUFFER,null)}function wt(I,D,it){const _t=a.get(I);D!==void 0&&mt(_t.__webglFramebuffer,I,I.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),it!==void 0&&Ct(I)}function St(I){const D=I.texture,it=a.get(I),_t=a.get(D);I.addEventListener("dispose",N);const yt=I.textures,pt=I.isWebGLCubeRenderTarget===!0,Wt=yt.length>1;if(Wt||(_t.__webglTexture===void 0&&(_t.__webglTexture=l.createTexture()),_t.__version=D.version,f.memory.textures++),pt){it.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(D.mipmaps&&D.mipmaps.length>0){it.__webglFramebuffer[Nt]=[];for(let It=0;It<D.mipmaps.length;It++)it.__webglFramebuffer[Nt][It]=l.createFramebuffer()}else it.__webglFramebuffer[Nt]=l.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){it.__webglFramebuffer=[];for(let Nt=0;Nt<D.mipmaps.length;Nt++)it.__webglFramebuffer[Nt]=l.createFramebuffer()}else it.__webglFramebuffer=l.createFramebuffer();if(Wt)for(let Nt=0,It=yt.length;Nt<It;Nt++){const _e=a.get(yt[Nt]);_e.__webglTexture===void 0&&(_e.__webglTexture=l.createTexture(),f.memory.textures++)}if(I.samples>0&&$t(I)===!1){it.__webglMultisampledFramebuffer=l.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Nt=0;Nt<yt.length;Nt++){const It=yt[Nt];it.__webglColorRenderbuffer[Nt]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,it.__webglColorRenderbuffer[Nt]);const _e=u.convert(It.format,It.colorSpace),Mt=u.convert(It.type),Gt=w(It.internalFormat,_e,Mt,It.colorSpace,I.isXRRenderTarget===!0),te=ae(I);l.renderbufferStorageMultisample(l.RENDERBUFFER,te,Gt,I.width,I.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Nt,l.RENDERBUFFER,it.__webglColorRenderbuffer[Nt])}l.bindRenderbuffer(l.RENDERBUFFER,null),I.depthBuffer&&(it.__webglDepthRenderbuffer=l.createRenderbuffer(),ct(it.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(pt){i.bindTexture(l.TEXTURE_CUBE_MAP,_t.__webglTexture),Zt(l.TEXTURE_CUBE_MAP,D);for(let Nt=0;Nt<6;Nt++)if(D.mipmaps&&D.mipmaps.length>0)for(let It=0;It<D.mipmaps.length;It++)mt(it.__webglFramebuffer[Nt][It],I,D,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,It);else mt(it.__webglFramebuffer[Nt],I,D,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);y(D)&&x(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Nt=0,It=yt.length;Nt<It;Nt++){const _e=yt[Nt],Mt=a.get(_e);i.bindTexture(l.TEXTURE_2D,Mt.__webglTexture),Zt(l.TEXTURE_2D,_e),mt(it.__webglFramebuffer,I,_e,l.COLOR_ATTACHMENT0+Nt,l.TEXTURE_2D,0),y(_e)&&x(l.TEXTURE_2D)}i.unbindTexture()}else{let Nt=l.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Nt=I.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(Nt,_t.__webglTexture),Zt(Nt,D),D.mipmaps&&D.mipmaps.length>0)for(let It=0;It<D.mipmaps.length;It++)mt(it.__webglFramebuffer[It],I,D,l.COLOR_ATTACHMENT0,Nt,It);else mt(it.__webglFramebuffer,I,D,l.COLOR_ATTACHMENT0,Nt,0);y(D)&&x(Nt),i.unbindTexture()}I.depthBuffer&&Ct(I)}function At(I){const D=I.textures;for(let it=0,_t=D.length;it<_t;it++){const yt=D[it];if(y(yt)){const pt=U(I),Wt=a.get(yt).__webglTexture;i.bindTexture(pt,Wt),x(pt),i.unbindTexture()}}}const Ae=[],Z=[];function mn(I){if(I.samples>0){if($t(I)===!1){const D=I.textures,it=I.width,_t=I.height;let yt=l.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Wt=a.get(I),Nt=D.length>1;if(Nt)for(let It=0;It<D.length;It++)i.bindFramebuffer(l.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+It,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,Wt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+It,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let It=0;It<D.length;It++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(yt|=l.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(yt|=l.STENCIL_BUFFER_BIT)),Nt){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,Wt.__webglColorRenderbuffer[It]);const _e=a.get(D[It]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,_e,0)}l.blitFramebuffer(0,0,it,_t,0,0,it,_t,yt,l.NEAREST),p===!0&&(Ae.length=0,Z.length=0,Ae.push(l.COLOR_ATTACHMENT0+It),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ae.push(pt),Z.push(pt),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Z)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Nt)for(let It=0;It<D.length;It++){i.bindFramebuffer(l.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+It,l.RENDERBUFFER,Wt.__webglColorRenderbuffer[It]);const _e=a.get(D[It]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,Wt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+It,l.TEXTURE_2D,_e,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const D=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[D])}}}function ae(I){return Math.min(s.maxSamples,I.samples)}function $t(I){const D=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Dt(I){const D=f.render.frame;_.get(I)!==D&&(_.set(I,D),I.update())}function xe(I,D){const it=I.colorSpace,_t=I.format,yt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||it!==pl&&it!==Gr&&(Ce.getTransfer(it)===Fe?(_t!==ra||yt!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),D}function Qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=tt,this.setTexture2D=st,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=wt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=$t}function qw(l,t){function i(a,s=Gr){let u;const f=Ce.getTransfer(s);if(a===ir)return l.UNSIGNED_BYTE;if(a===b_)return l.UNSIGNED_SHORT_4_4_4_4;if(a===A_)return l.UNSIGNED_SHORT_5_5_5_1;if(a===IS)return l.UNSIGNED_INT_5_9_9_9_REV;if(a===PS)return l.BYTE;if(a===zS)return l.SHORT;if(a===Au)return l.UNSIGNED_SHORT;if(a===T_)return l.INT;if(a===Xs)return l.UNSIGNED_INT;if(a===tr)return l.FLOAT;if(a===zu)return l.HALF_FLOAT;if(a===BS)return l.ALPHA;if(a===FS)return l.RGB;if(a===ra)return l.RGBA;if(a===HS)return l.LUMINANCE;if(a===VS)return l.LUMINANCE_ALPHA;if(a===Jo)return l.DEPTH_COMPONENT;if(a===ol)return l.DEPTH_STENCIL;if(a===GS)return l.RED;if(a===R_)return l.RED_INTEGER;if(a===kS)return l.RG;if(a===C_)return l.RG_INTEGER;if(a===w_)return l.RGBA_INTEGER;if(a===Of||a===Pf||a===zf||a===If)if(f===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Of)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Pf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===zf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===If)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Of)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Pf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===zf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===If)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zm||a===Im||a===Bm||a===Fm)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===zm)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Im)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Bm)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Fm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Hm||a===Vm||a===Gm)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Hm||a===Vm)return f===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Gm)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===km||a===Xm||a===qm||a===Ym||a===Wm||a===jm||a===Zm||a===Km||a===Qm||a===Jm||a===$m||a===t_||a===e_||a===n_)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===km)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xm)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===qm)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ym)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Wm)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===jm)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Zm)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Km)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Qm)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Jm)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===$m)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===t_)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===e_)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===n_)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Bf||a===i_||a===a_)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===Bf)return f===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===i_)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===a_)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===XS||a===r_||a===s_||a===o_)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Bf)return u.COMPRESSED_RED_RGTC1_EXT;if(a===r_)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===s_)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===o_)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===sl?l.UNSIGNED_INT_24_8:l[a]!==void 0?l[a]:null}return{convert:i}}class Yw extends Yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xu extends wi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ww={type:"move"};class pm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let s=null,u=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const E of t.hand.values()){const y=i.getJointPose(E,a),x=this._getHandJoint(m,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=_.position.distanceTo(g.position),M=.02,T=.005;m.inputState.pinching&&v>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(s=i.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ww)))}return h!==null&&(h.visible=s!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new xu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}const jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zw=`
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

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,a){if(this.texture===null){const s=new oi,u=t.properties.get(s);u.__webglTexture=i.texture,(i.depthNear!=a.depthNear||i.depthFar!=a.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new rr({vertexShader:jw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ea(new ih(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qw extends ml{constructor(t,i){super();const a=this;let s=null,u=1,f=null,h="local-floor",p=1,m=null,_=null,g=null,v=null,M=null,T=null;const E=new Kw,y=i.getContextAttributes();let x=null,U=null;const w=[],b=[],P=new Ne;let B=null;const N=new Yi;N.viewport=new on;const z=new Yi;z.viewport=new on;const R=[N,z],C=new Yw;let H=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let X=w[O];return X===void 0&&(X=new pm,w[O]=X),X.getTargetRaySpace()},this.getControllerGrip=function(O){let X=w[O];return X===void 0&&(X=new pm,w[O]=X),X.getGripSpace()},this.getHand=function(O){let X=w[O];return X===void 0&&(X=new pm,w[O]=X),X.getHandSpace()};function J(O){const X=b.indexOf(O.inputSource);if(X===-1)return;const mt=w[X];mt!==void 0&&(mt.update(O.inputSource,O.frame,m||f),mt.dispatchEvent({type:O.type,data:O.inputSource}))}function rt(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",st);for(let O=0;O<w.length;O++){const X=b[O];X!==null&&(b[O]=null,w[O].disconnect(X))}H=null,tt=null,E.reset(),t.setRenderTarget(x),M=null,v=null,g=null,s=null,U=null,fe.stop(),a.isPresenting=!1,t.setPixelRatio(B),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){u=O,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){h=O,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(O){m=O},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",st),y.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const X={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(s,i,X),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new qs(M.framebufferWidth,M.framebufferHeight,{format:ra,type:ir,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let X=null,mt=null,ct=null;y.depth&&(ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,X=y.stencil?ol:Jo,mt=y.stencil?sl:Xs);const bt={colorFormat:i.RGBA8,depthFormat:ct,scaleFactor:u};g=new XRWebGLBinding(s,i),v=g.createProjectionLayer(bt),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new qs(v.textureWidth,v.textureHeight,{format:ra,type:ir,depthTexture:new rM(v.textureWidth,v.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await s.requestReferenceSpace(h),fe.setContext(s),fe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function st(O){for(let X=0;X<O.removed.length;X++){const mt=O.removed[X],ct=b.indexOf(mt);ct>=0&&(b[ct]=null,w[ct].disconnect(mt))}for(let X=0;X<O.added.length;X++){const mt=O.added[X];let ct=b.indexOf(mt);if(ct===-1){for(let Ct=0;Ct<w.length;Ct++)if(Ct>=b.length){b.push(mt),ct=Ct;break}else if(b[Ct]===null){b[Ct]=mt,ct=Ct;break}if(ct===-1)break}const bt=w[ct];bt&&bt.connect(mt)}}const G=new ut,$=new ut;function Y(O,X,mt){G.setFromMatrixPosition(X.matrixWorld),$.setFromMatrixPosition(mt.matrixWorld);const ct=G.distanceTo($),bt=X.projectionMatrix.elements,Ct=mt.projectionMatrix.elements,wt=bt[14]/(bt[10]-1),St=bt[14]/(bt[10]+1),At=(bt[9]+1)/bt[5],Ae=(bt[9]-1)/bt[5],Z=(bt[8]-1)/bt[0],mn=(Ct[8]+1)/Ct[0],ae=wt*Z,$t=wt*mn,Dt=ct/(-Z+mn),xe=Dt*-Z;if(X.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(xe),O.translateZ(Dt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),bt[10]===-1)O.projectionMatrix.copy(X.projectionMatrix),O.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const Qt=wt+Dt,I=St+Dt,D=ae-xe,it=$t+(ct-xe),_t=At*St/I*Qt,yt=Ae*St/I*Qt;O.projectionMatrix.makePerspective(D,it,_t,yt,Qt,I),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function vt(O,X){X===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(X.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let X=O.near,mt=O.far;E.texture!==null&&(E.depthNear>0&&(X=E.depthNear),E.depthFar>0&&(mt=E.depthFar)),C.near=z.near=N.near=X,C.far=z.far=N.far=mt,(H!==C.near||tt!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,tt=C.far),N.layers.mask=O.layers.mask|2,z.layers.mask=O.layers.mask|4,C.layers.mask=N.layers.mask|z.layers.mask;const ct=O.parent,bt=C.cameras;vt(C,ct);for(let Ct=0;Ct<bt.length;Ct++)vt(bt[Ct],ct);bt.length===2?Y(C,N,z):C.projectionMatrix.copy(N.projectionMatrix),xt(O,C,ct)};function xt(O,X,mt){mt===null?O.matrix.copy(X.matrixWorld):(O.matrix.copy(mt.matrixWorld),O.matrix.invert(),O.matrix.multiply(X.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(X.projectionMatrix),O.projectionMatrixInverse.copy(X.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=l_*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(O){p=O,v!==null&&(v.fixedFoveation=O),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=O)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let zt=null;function Zt(O,X){if(_=X.getViewerPose(m||f),T=X,_!==null){const mt=_.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let ct=!1;mt.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let Ct=0;Ct<mt.length;Ct++){const wt=mt[Ct];let St=null;if(M!==null)St=M.getViewport(wt);else{const Ae=g.getViewSubImage(v,wt);St=Ae.viewport,Ct===0&&(t.setRenderTargetTextures(U,Ae.colorTexture,v.ignoreDepthValues?void 0:Ae.depthStencilTexture),t.setRenderTarget(U))}let At=R[Ct];At===void 0&&(At=new Yi,At.layers.enable(Ct),At.viewport=new on,R[Ct]=At),At.matrix.fromArray(wt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(wt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(St.x,St.y,St.width,St.height),Ct===0&&(C.matrix.copy(At.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(At)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Ct=g.getDepthInformation(mt[0]);Ct&&Ct.isValid&&Ct.texture&&E.init(t,Ct,s.renderState)}}for(let mt=0;mt<w.length;mt++){const ct=b[mt],bt=w[mt];ct!==null&&bt!==void 0&&bt.update(ct,X,m||f)}zt&&zt(O,X),X.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:X}),T=null}const fe=new aM;fe.setAnimationLoop(Zt),this.setAnimationLoop=function(O){zt=O},this.dispose=function(){}}}const ws=new ar,Jw=new pn;function $w(l,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,tM(l)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,U,w,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),g(y,x)):x.isMeshPhongMaterial?(u(y,x),_(y,x)):x.isMeshStandardMaterial?(u(y,x),v(y,x),x.isMeshPhysicalMaterial&&M(y,x,b)):x.isMeshMatcapMaterial?(u(y,x),T(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),E(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,U,w):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===si&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===si&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=t.get(x),w=U.envMap,b=U.envMapRotation;w&&(y.envMap.value=w,ws.copy(b),ws.x*=-1,ws.y*=-1,ws.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),y.envMapRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(ws)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,U,w){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=w*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===si&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const U=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function t3(l,t,i,a){let s={},u={},f=[];const h=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,w){const b=w.program;a.uniformBlockBinding(U,b)}function m(U,w){let b=s[U.id];b===void 0&&(T(U),b=_(U),s[U.id]=b,U.addEventListener("dispose",y));const P=w.program;a.updateUBOMapping(U,P);const B=t.render.frame;u[U.id]!==B&&(v(U),u[U.id]=B)}function _(U){const w=g();U.__bindingPointIndex=w;const b=l.createBuffer(),P=U.__size,B=U.usage;return l.bindBuffer(l.UNIFORM_BUFFER,b),l.bufferData(l.UNIFORM_BUFFER,P,B),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,w,b),b}function g(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const w=s[U.id],b=U.uniforms,P=U.__cache;l.bindBuffer(l.UNIFORM_BUFFER,w);for(let B=0,N=b.length;B<N;B++){const z=Array.isArray(b[B])?b[B]:[b[B]];for(let R=0,C=z.length;R<C;R++){const H=z[R];if(M(H,B,R,P)===!0){const tt=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let rt=0;for(let st=0;st<J.length;st++){const G=J[st],$=E(G);typeof G=="number"||typeof G=="boolean"?(H.__data[0]=G,l.bufferSubData(l.UNIFORM_BUFFER,tt+rt,H.__data)):G.isMatrix3?(H.__data[0]=G.elements[0],H.__data[1]=G.elements[1],H.__data[2]=G.elements[2],H.__data[3]=0,H.__data[4]=G.elements[3],H.__data[5]=G.elements[4],H.__data[6]=G.elements[5],H.__data[7]=0,H.__data[8]=G.elements[6],H.__data[9]=G.elements[7],H.__data[10]=G.elements[8],H.__data[11]=0):(G.toArray(H.__data,rt),rt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,tt,H.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function M(U,w,b,P){const B=U.value,N=w+"_"+b;if(P[N]===void 0)return typeof B=="number"||typeof B=="boolean"?P[N]=B:P[N]=B.clone(),!0;{const z=P[N];if(typeof B=="number"||typeof B=="boolean"){if(z!==B)return P[N]=B,!0}else if(z.equals(B)===!1)return z.copy(B),!0}return!1}function T(U){const w=U.uniforms;let b=0;const P=16;for(let N=0,z=w.length;N<z;N++){const R=Array.isArray(w[N])?w[N]:[w[N]];for(let C=0,H=R.length;C<H;C++){const tt=R[C],J=Array.isArray(tt.value)?tt.value:[tt.value];for(let rt=0,st=J.length;rt<st;rt++){const G=J[rt],$=E(G),Y=b%P,vt=Y%$.boundary,xt=Y+vt;b+=vt,xt!==0&&P-xt<$.storage&&(b+=P-xt),tt.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=b,b+=$.storage}}}const B=b%P;return B>0&&(b+=P-B),U.__size=b,U.__cache={},this}function E(U){const w={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(w.boundary=4,w.storage=4):U.isVector2?(w.boundary=8,w.storage=8):U.isVector3||U.isColor?(w.boundary=16,w.storage=12):U.isVector4?(w.boundary=16,w.storage=16):U.isMatrix3?(w.boundary=48,w.storage=48):U.isMatrix4?(w.boundary=64,w.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),w}function y(U){const w=U.target;w.removeEventListener("dispose",y);const b=f.indexOf(w.__bindingPointIndex);f.splice(b,1),l.deleteBuffer(s[w.id]),delete s[w.id],delete u[w.id]}function x(){for(const U in s)l.deleteBuffer(s[U]);f=[],s={},u={}}return{bind:p,update:m,dispose:x}}class e3{constructor(t={}){const{canvas:i=Vb(),context:a=null,depth:s=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=f;const T=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const U=[],w=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qi,this.toneMapping=Wr,this.toneMappingExposure=1;const b=this;let P=!1,B=0,N=0,z=null,R=-1,C=null;const H=new on,tt=new on;let J=null;const rt=new Ve(0);let st=0,G=i.width,$=i.height,Y=1,vt=null,xt=null;const zt=new on(0,0,G,$),Zt=new on(0,0,G,$);let fe=!1;const O=new iM;let X=!1,mt=!1;const ct=new pn,bt=new pn,Ct=new ut,wt=new on,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Ae(){return z===null?Y:1}let Z=a;function mn(L,K){return i.getContext(L,K)}try{const L={alpha:!0,depth:s,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${E_}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Ft,!1),Z===null){const K="webgl2";if(Z=mn(K,L),Z===null)throw mn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ae,$t,Dt,xe,Qt,I,D,it,_t,yt,pt,Wt,Nt,It,_e,Mt,Gt,te,ne,Vt,me,oe,Ie,k;function Lt(){ae=new sC(Z),ae.init(),oe=new qw(Z,ae),$t=new $2(Z,ae,t,oe),Dt=new Gw(Z,ae),$t.reverseDepthBuffer&&v&&Dt.buffers.depth.setReversed(!0),xe=new uC(Z),Qt=new Rw,I=new Xw(Z,ae,Dt,Qt,$t,oe,xe),D=new eC(b),it=new rC(b),_t=new mA(Z),Ie=new Q2(Z,_t),yt=new oC(Z,_t,xe,Ie),pt=new fC(Z,yt,_t,xe),ne=new cC(Z,$t,I),Mt=new tC(Qt),Wt=new Aw(b,D,it,ae,$t,Ie,Mt),Nt=new $w(b,Qt),It=new ww,_e=new Pw(ae),te=new K2(b,D,it,Dt,pt,M,p),Gt=new Hw(b,pt,$t),k=new t3(Z,xe,$t,Dt),Vt=new J2(Z,ae,xe),me=new lC(Z,ae,xe),xe.programs=Wt.programs,b.capabilities=$t,b.extensions=ae,b.properties=Qt,b.renderLists=It,b.shadowMap=Gt,b.state=Dt,b.info=xe}Lt();const ft=new Qw(b,Z);this.xr=ft,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const L=ae.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ae.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(G,$,!1))},this.getSize=function(L){return L.set(G,$)},this.setSize=function(L,K,ot=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=L,$=K,i.width=Math.floor(L*Y),i.height=Math.floor(K*Y),ot===!0&&(i.style.width=L+"px",i.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(G*Y,$*Y).floor()},this.setDrawingBufferSize=function(L,K,ot){G=L,$=K,Y=ot,i.width=Math.floor(L*ot),i.height=Math.floor(K*ot),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(H)},this.getViewport=function(L){return L.copy(zt)},this.setViewport=function(L,K,ot,lt){L.isVector4?zt.set(L.x,L.y,L.z,L.w):zt.set(L,K,ot,lt),Dt.viewport(H.copy(zt).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(Zt)},this.setScissor=function(L,K,ot,lt){L.isVector4?Zt.set(L.x,L.y,L.z,L.w):Zt.set(L,K,ot,lt),Dt.scissor(tt.copy(Zt).multiplyScalar(Y).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(L){Dt.setScissorTest(fe=L)},this.setOpaqueSort=function(L){vt=L},this.setTransparentSort=function(L){xt=L},this.getClearColor=function(L){return L.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(L=!0,K=!0,ot=!0){let lt=0;if(L){let Q=!1;if(z!==null){const Et=z.texture.format;Q=Et===w_||Et===C_||Et===R_}if(Q){const Et=z.texture.type,Pt=Et===ir||Et===Xs||Et===Au||Et===sl||Et===b_||Et===A_,qt=te.getClearColor(),Yt=te.getClearAlpha(),Jt=qt.r,jt=qt.g,Bt=qt.b;Pt?(T[0]=Jt,T[1]=jt,T[2]=Bt,T[3]=Yt,Z.clearBufferuiv(Z.COLOR,0,T)):(E[0]=Jt,E[1]=jt,E[2]=Bt,E[3]=Yt,Z.clearBufferiv(Z.COLOR,0,E))}else lt|=Z.COLOR_BUFFER_BIT}K&&(lt|=Z.DEPTH_BUFFER_BIT),ot&&(lt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Ft,!1),It.dispose(),_e.dispose(),Qt.dispose(),D.dispose(),it.dispose(),pt.dispose(),Ie.dispose(),k.dispose(),Wt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Pn),ft.removeEventListener("sessionend",Gu),Ca.stop()};function gt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const L=xe.autoReset,K=Gt.enabled,ot=Gt.autoUpdate,lt=Gt.needsUpdate,Q=Gt.type;Lt(),xe.autoReset=L,Gt.enabled=K,Gt.autoUpdate=ot,Gt.needsUpdate=lt,Gt.type=Q}function Ft(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function re(L){const K=L.target;K.removeEventListener("dispose",re),je(K)}function je(L){Sn(L),Qt.remove(L)}function Sn(L){const K=Qt.get(L).programs;K!==void 0&&(K.forEach(function(ot){Wt.releaseProgram(ot)}),L.isShaderMaterial&&Wt.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,ot,lt,Q,Et){K===null&&(K=St);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,qt=lh(L,K,ot,lt,Q);Dt.setMaterial(lt,Pt);let Yt=ot.index,Jt=1;if(lt.wireframe===!0){if(Yt=yt.getWireframeAttribute(ot),Yt===void 0)return;Jt=2}const jt=ot.drawRange,Bt=ot.attributes.position;let de=jt.start*Jt,Le=(jt.start+jt.count)*Jt;Et!==null&&(de=Math.max(de,Et.start*Jt),Le=Math.min(Le,(Et.start+Et.count)*Jt)),Yt!==null?(de=Math.max(de,0),Le=Math.min(Le,Yt.count)):Bt!=null&&(de=Math.max(de,0),Le=Math.min(Le,Bt.count));const Ge=Le-de;if(Ge<0||Ge===1/0)return;Ie.setup(Q,lt,qt,ot,Yt);let zn,Re=Vt;if(Yt!==null&&(zn=_t.get(Yt),Re=me,Re.setIndex(zn)),Q.isMesh)lt.wireframe===!0?(Dt.setLineWidth(lt.wireframeLinewidth*Ae()),Re.setMode(Z.LINES)):Re.setMode(Z.TRIANGLES);else if(Q.isLine){let Xt=lt.linewidth;Xt===void 0&&(Xt=1),Dt.setLineWidth(Xt*Ae()),Q.isLineSegments?Re.setMode(Z.LINES):Q.isLineLoop?Re.setMode(Z.LINE_LOOP):Re.setMode(Z.LINE_STRIP)}else Q.isPoints?Re.setMode(Z.POINTS):Q.isSprite&&Re.setMode(Z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Xt=Q._multiDrawStarts,Qn=Q._multiDrawCounts,Ee=Q._multiDrawCount,_n=Yt?_t.get(Yt).bytesPerElement:1,di=Qt.get(lt).currentProgram.getUniforms();for(let gn=0;gn<Ee;gn++)di.setValue(Z,"_gl_DrawID",gn),Re.render(Xt[gn]/_n,Qn[gn])}else if(Q.isInstancedMesh)Re.renderInstances(de,Ge,Q.count);else if(ot.isInstancedBufferGeometry){const Xt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Qn=Math.min(ot.instanceCount,Xt);Re.renderInstances(de,Ge,Qn)}else Re.render(de,Ge)};function Me(L,K,ot){L.transparent===!0&&L.side===$a&&L.forceSinglePass===!1?(L.side=si,L.needsUpdate=!0,Da(L,K,ot),L.side=Kr,L.needsUpdate=!0,Da(L,K,ot),L.side=$a):Da(L,K,ot)}this.compile=function(L,K,ot=null){ot===null&&(ot=L),x=_e.get(ot),x.init(K),w.push(x),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),L!==ot&&L.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const lt=new Set;return L.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const qt=Et[Pt];Me(qt,ot,Q),lt.add(qt)}else Me(Et,ot,Q),lt.add(Et)}),w.pop(),x=null,lt},this.compileAsync=function(L,K,ot=null){const lt=this.compile(L,K,ot);return new Promise(Q=>{function Et(){if(lt.forEach(function(Pt){Qt.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){Q(L);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let We=null;function Mn(L){We&&We(L)}function Pn(){Ca.stop()}function Gu(){Ca.start()}const Ca=new aM;Ca.setAnimationLoop(Mn),typeof self<"u"&&Ca.setContext(self),this.setAnimationLoop=function(L){We=L,ft.setAnimationLoop(L),L===null?Ca.stop():Ca.start()},ft.addEventListener("sessionstart",Pn),ft.addEventListener("sessionend",Gu),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(K),K=ft.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,K,z),x=_e.get(L,w.length),x.init(K),w.push(x),bt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),O.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,X=Mt.init(this.clippingPlanes,mt),y=It.get(L,U.length),y.init(),U.push(y),ft.enabled===!0&&ft.isPresenting===!0){const Et=b.xr.getDepthSensingMesh();Et!==null&&gl(Et,K,-1/0,b.sortObjects)}gl(L,K,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(vt,xt),At=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,At&&te.addToRenderList(y,L),this.info.render.frame++,X===!0&&Mt.beginShadows();const ot=x.state.shadowsArray;Gt.render(ot,L,K),X===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,Q=y.transmissive;if(x.setupLights(),K.isArrayCamera){const Et=K.cameras;if(Q.length>0)for(let Pt=0,qt=Et.length;Pt<qt;Pt++){const Yt=Et[Pt];is(lt,Q,L,Yt)}At&&te.render(L);for(let Pt=0,qt=Et.length;Pt<qt;Pt++){const Yt=Et[Pt];ns(y,L,Yt,Yt.viewport)}}else Q.length>0&&is(lt,Q,L,K),At&&te.render(L),ns(y,L,K);z!==null&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),L.isScene===!0&&L.onAfterRender(b,L,K),Ie.resetDefaultState(),R=-1,C=null,w.pop(),w.length>0?(x=w[w.length-1],X===!0&&Mt.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function gl(L,K,ot,lt){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)ot=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||O.intersectsSprite(L)){lt&&wt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(bt);const Pt=pt.update(L),qt=L.material;qt.visible&&y.push(L,Pt,qt,ot,wt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||O.intersectsObject(L))){const Pt=pt.update(L),qt=L.material;if(lt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),wt.copy(L.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),wt.copy(Pt.boundingSphere.center)),wt.applyMatrix4(L.matrixWorld).applyMatrix4(bt)),Array.isArray(qt)){const Yt=Pt.groups;for(let Jt=0,jt=Yt.length;Jt<jt;Jt++){const Bt=Yt[Jt],de=qt[Bt.materialIndex];de&&de.visible&&y.push(L,Pt,de,ot,wt.z,Bt)}}else qt.visible&&y.push(L,Pt,qt,ot,wt.z,null)}}const Et=L.children;for(let Pt=0,qt=Et.length;Pt<qt;Pt++)gl(Et[Pt],K,ot,lt)}function ns(L,K,ot,lt){const Q=L.opaque,Et=L.transmissive,Pt=L.transparent;x.setupLightsView(ot),X===!0&&Mt.setGlobalState(b.clippingPlanes,ot),lt&&Dt.viewport(H.copy(lt)),Q.length>0&&wa(Q,K,ot),Et.length>0&&wa(Et,K,ot),Pt.length>0&&wa(Pt,K,ot),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function is(L,K,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new qs(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?zu:ir,minFilter:Bs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Et=x.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||H;Et.setSize(Pt.z,Pt.w);const qt=b.getRenderTarget();b.setRenderTarget(Et),b.getClearColor(rt),st=b.getClearAlpha(),st<1&&b.setClearColor(16777215,.5),b.clear(),At&&te.render(ot);const Yt=b.toneMapping;b.toneMapping=Wr;const Jt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),X===!0&&Mt.setGlobalState(b.clippingPlanes,lt),wa(L,ot,lt),I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Bt=0,de=K.length;Bt<de;Bt++){const Le=K[Bt],Ge=Le.object,zn=Le.geometry,Re=Le.material,Xt=Le.group;if(Re.side===$a&&Ge.layers.test(lt.layers)){const Qn=Re.side;Re.side=si,Re.needsUpdate=!0,oa(Ge,ot,lt,zn,Re,Xt),Re.side=Qn,Re.needsUpdate=!0,jt=!0}}jt===!0&&(I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et))}b.setRenderTarget(qt),b.setClearColor(rt,st),Jt!==void 0&&(lt.viewport=Jt),b.toneMapping=Yt}function wa(L,K,ot){const lt=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Et=L.length;Q<Et;Q++){const Pt=L[Q],qt=Pt.object,Yt=Pt.geometry,Jt=lt===null?Pt.material:lt,jt=Pt.group;qt.layers.test(ot.layers)&&oa(qt,K,ot,Yt,Jt,jt)}}function oa(L,K,ot,lt,Q,Et){L.onBeforeRender(b,K,ot,lt,Q,Et),L.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(b,K,ot,lt,L,Et),Q.transparent===!0&&Q.side===$a&&Q.forceSinglePass===!1?(Q.side=si,Q.needsUpdate=!0,b.renderBufferDirect(ot,K,lt,Q,L,Et),Q.side=Kr,Q.needsUpdate=!0,b.renderBufferDirect(ot,K,lt,Q,L,Et),Q.side=$a):b.renderBufferDirect(ot,K,lt,Q,L,Et),L.onAfterRender(b,K,ot,lt,Q,Et)}function Da(L,K,ot){K.isScene!==!0&&(K=St);const lt=Qt.get(L),Q=x.state.lights,Et=x.state.shadowsArray,Pt=Q.state.version,qt=Wt.getParameters(L,Q.state,Et,K,ot),Yt=Wt.getProgramCacheKey(qt);let Jt=lt.programs;lt.environment=L.isMeshStandardMaterial?K.environment:null,lt.fog=K.fog,lt.envMap=(L.isMeshStandardMaterial?it:D).get(L.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&L.envMap===null?K.environmentRotation:L.envMapRotation,Jt===void 0&&(L.addEventListener("dispose",re),Jt=new Map,lt.programs=Jt);let jt=Jt.get(Yt);if(jt!==void 0){if(lt.currentProgram===jt&&lt.lightsStateVersion===Pt)return vl(L,qt),jt}else qt.uniforms=Wt.getUniforms(L),L.onBeforeCompile(qt,b),jt=Wt.acquireProgram(qt,Yt),Jt.set(Yt,jt),lt.uniforms=qt.uniforms;const Bt=lt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Bt.clippingPlanes=Mt.uniform),vl(L,qt),lt.needsLights=xl(L),lt.lightsStateVersion=Pt,lt.needsLights&&(Bt.ambientLightColor.value=Q.state.ambient,Bt.lightProbe.value=Q.state.probe,Bt.directionalLights.value=Q.state.directional,Bt.directionalLightShadows.value=Q.state.directionalShadow,Bt.spotLights.value=Q.state.spot,Bt.spotLightShadows.value=Q.state.spotShadow,Bt.rectAreaLights.value=Q.state.rectArea,Bt.ltc_1.value=Q.state.rectAreaLTC1,Bt.ltc_2.value=Q.state.rectAreaLTC2,Bt.pointLights.value=Q.state.point,Bt.pointLightShadows.value=Q.state.pointShadow,Bt.hemisphereLights.value=Q.state.hemi,Bt.directionalShadowMap.value=Q.state.directionalShadowMap,Bt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Bt.spotShadowMap.value=Q.state.spotShadowMap,Bt.spotLightMatrix.value=Q.state.spotLightMatrix,Bt.spotLightMap.value=Q.state.spotLightMap,Bt.pointShadowMap.value=Q.state.pointShadowMap,Bt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=jt,lt.uniformsList=null,jt}function lr(L){if(L.uniformsList===null){const K=L.currentProgram.getUniforms();L.uniformsList=Ff.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function vl(L,K){const ot=Qt.get(L);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function lh(L,K,ot,lt,Q){K.isScene!==!0&&(K=St),I.resetTextureUnits();const Et=K.fog,Pt=lt.isMeshStandardMaterial?K.environment:null,qt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:pl,Yt=(lt.isMeshStandardMaterial?it:D).get(lt.envMap||Pt),Jt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,jt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Bt=!!ot.morphAttributes.position,de=!!ot.morphAttributes.normal,Le=!!ot.morphAttributes.color;let Ge=Wr;lt.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ge=b.toneMapping);const zn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Re=zn!==void 0?zn.length:0,Xt=Qt.get(lt),Qn=x.state.lights;if(X===!0&&(mt===!0||L!==C)){const kn=L===C&&lt.id===R;Mt.setState(lt,L,kn)}let Ee=!1;lt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Qn.state.version||Xt.outputColorSpace!==qt||Q.isBatchedMesh&&Xt.batching===!1||!Q.isBatchedMesh&&Xt.batching===!0||Q.isBatchedMesh&&Xt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xt.instancingMorph===!1&&Q.morphTexture!==null||Xt.envMap!==Yt||lt.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Mt.numPlanes||Xt.numIntersection!==Mt.numIntersection)||Xt.vertexAlphas!==Jt||Xt.vertexTangents!==jt||Xt.morphTargets!==Bt||Xt.morphNormals!==de||Xt.morphColors!==Le||Xt.toneMapping!==Ge||Xt.morphTargetsCount!==Re)&&(Ee=!0):(Ee=!0,Xt.__version=lt.version);let _n=Xt.currentProgram;Ee===!0&&(_n=Da(lt,K,Q));let di=!1,gn=!1,Li=!1;const se=_n.getUniforms(),pi=Xt.uniforms;if(Dt.useProgram(_n.program)&&(di=!0,gn=!0,Li=!0),lt.id!==R&&(R=lt.id,gn=!0),di||C!==L){Dt.buffers.depth.getReversed()?(ct.copy(L.projectionMatrix),kb(ct),Xb(ct),se.setValue(Z,"projectionMatrix",ct)):se.setValue(Z,"projectionMatrix",L.projectionMatrix),se.setValue(Z,"viewMatrix",L.matrixWorldInverse);const In=se.map.cameraPosition;In!==void 0&&In.setValue(Z,Ct.setFromMatrixPosition(L.matrixWorld)),$t.logarithmicDepthBuffer&&se.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&se.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,gn=!0,Li=!0)}if(Q.isSkinnedMesh){se.setOptional(Z,Q,"bindMatrix"),se.setOptional(Z,Q,"bindMatrixInverse");const kn=Q.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),se.setValue(Z,"boneTexture",kn.boneTexture,I))}Q.isBatchedMesh&&(se.setOptional(Z,Q,"batchingTexture"),se.setValue(Z,"batchingTexture",Q._matricesTexture,I),se.setOptional(Z,Q,"batchingIdTexture"),se.setValue(Z,"batchingIdTexture",Q._indirectTexture,I),se.setOptional(Z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&se.setValue(Z,"batchingColorTexture",Q._colorsTexture,I));const ur=ot.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&ne.update(Q,ot,_n),(gn||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,se.setValue(Z,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(pi.envMap.value=Yt,pi.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&K.environment!==null&&(pi.envMapIntensity.value=K.environmentIntensity),gn&&(se.setValue(Z,"toneMappingExposure",b.toneMappingExposure),Xt.needsLights&&ku(pi,Li),Et&&lt.fog===!0&&Nt.refreshFogUniforms(pi,Et),Nt.refreshMaterialUniforms(pi,lt,Y,$,x.state.transmissionRenderTarget[L.id]),Ff.upload(Z,lr(Xt),pi,I)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ff.upload(Z,lr(Xt),pi,I),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&se.setValue(Z,"center",Q.center),se.setValue(Z,"modelViewMatrix",Q.modelViewMatrix),se.setValue(Z,"normalMatrix",Q.normalMatrix),se.setValue(Z,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const kn=lt.uniformsGroups;for(let In=0,Xn=kn.length;In<Xn;In++){const Xu=kn[In];k.update(Xu,_n),k.bind(Xu,_n)}}return _n}function ku(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function xl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(L,K,ot){Qt.get(L.texture).__webglTexture=K,Qt.get(L.depthTexture).__webglTexture=ot;const lt=Qt.get(L);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=ot===void 0,lt.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,K){const ot=Qt.get(L);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(L,K=0,ot=0){z=L,B=K,N=ot;let lt=!0,Q=null,Et=!1,Pt=!1;if(L){const Yt=Qt.get(L);if(Yt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(Z.FRAMEBUFFER,null),lt=!1;else if(Yt.__webglFramebuffer===void 0)I.setupRenderTarget(L);else if(Yt.__hasExternalTextures)I.rebindTextures(L,Qt.get(L.texture).__webglTexture,Qt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Bt=L.depthTexture;if(Yt.__boundDepthTexture!==Bt){if(Bt!==null&&Qt.has(Bt)&&(L.width!==Bt.image.width||L.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(L)}}const Jt=L.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);const jt=Qt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(jt[K])?Q=jt[K][ot]:Q=jt[K],Et=!0):L.samples>0&&I.useMultisampledRTT(L)===!1?Q=Qt.get(L).__webglMultisampledFramebuffer:Array.isArray(jt)?Q=jt[ot]:Q=jt,H.copy(L.viewport),tt.copy(L.scissor),J=L.scissorTest}else H.copy(zt).multiplyScalar(Y).floor(),tt.copy(Zt).multiplyScalar(Y).floor(),J=fe;if(Dt.bindFramebuffer(Z.FRAMEBUFFER,Q)&&lt&&Dt.drawBuffers(L,Q),Dt.viewport(H),Dt.scissor(tt),Dt.setScissorTest(J),Et){const Yt=Qt.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Yt.__webglTexture,ot)}else if(Pt){const Yt=Qt.get(L.texture),Jt=K||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Yt.__webglTexture,ot||0,Jt)}R=-1},this.readRenderTargetPixels=function(L,K,ot,lt,Q,Et,Pt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Qt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pt!==void 0&&(qt=qt[Pt]),qt){Dt.bindFramebuffer(Z.FRAMEBUFFER,qt);try{const Yt=L.texture,Jt=Yt.format,jt=Yt.type;if(!$t.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-lt&&ot>=0&&ot<=L.height-Q&&Z.readPixels(K,ot,lt,Q,oe.convert(Jt),oe.convert(jt),Et)}finally{const Yt=z!==null?Qt.get(z).__webglFramebuffer:null;Dt.bindFramebuffer(Z.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(L,K,ot,lt,Q,Et,Pt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Qt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pt!==void 0&&(qt=qt[Pt]),qt){const Yt=L.texture,Jt=Yt.format,jt=Yt.type;if(!$t.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=L.width-lt&&ot>=0&&ot<=L.height-Q){Dt.bindFramebuffer(Z.FRAMEBUFFER,qt);const Bt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Bt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Et.byteLength,Z.STREAM_READ),Z.readPixels(K,ot,lt,Q,oe.convert(Jt),oe.convert(jt),0);const de=z!==null?Qt.get(z).__webglFramebuffer:null;Dt.bindFramebuffer(Z.FRAMEBUFFER,de);const Le=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Gb(Z,Le,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Bt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Et),Z.deleteBuffer(Bt),Z.deleteSync(Le),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,K=null,ot=0){L.isTexture!==!0&&(gu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,L=arguments[1]);const lt=Math.pow(2,-ot),Q=Math.floor(L.image.width*lt),Et=Math.floor(L.image.height*lt),Pt=K!==null?K.x:0,qt=K!==null?K.y:0;I.setTexture2D(L,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ot,0,0,Pt,qt,Q,Et),Dt.unbindTexture()},this.copyTextureToTexture=function(L,K,ot=null,lt=null,Q=0){L.isTexture!==!0&&(gu("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,L=arguments[1],K=arguments[2],Q=arguments[3]||0,ot=null);let Et,Pt,qt,Yt,Jt,jt,Bt,de,Le;const Ge=L.isCompressedTexture?L.mipmaps[Q]:L.image;ot!==null?(Et=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,qt=ot.isBox3?ot.max.z-ot.min.z:1,Yt=ot.min.x,Jt=ot.min.y,jt=ot.isBox3?ot.min.z:0):(Et=Ge.width,Pt=Ge.height,qt=Ge.depth||1,Yt=0,Jt=0,jt=0),lt!==null?(Bt=lt.x,de=lt.y,Le=lt.z):(Bt=0,de=0,Le=0);const zn=oe.convert(K.format),Re=oe.convert(K.type);let Xt;K.isData3DTexture?(I.setTexture3D(K,0),Xt=Z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(I.setTexture2DArray(K,0),Xt=Z.TEXTURE_2D_ARRAY):(I.setTexture2D(K,0),Xt=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);const Qn=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ee=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),_n=Z.getParameter(Z.UNPACK_SKIP_PIXELS),di=Z.getParameter(Z.UNPACK_SKIP_ROWS),gn=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Ge.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ge.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Yt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Jt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,jt);const Li=L.isDataArrayTexture||L.isData3DTexture,se=K.isDataArrayTexture||K.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const pi=Qt.get(L),ur=Qt.get(K),kn=Qt.get(pi.__renderTarget),In=Qt.get(ur.__renderTarget);Dt.bindFramebuffer(Z.READ_FRAMEBUFFER,kn.__webglFramebuffer),Dt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Xn=0;Xn<qt;Xn++)Li&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Qt.get(L).__webglTexture,Q,jt+Xn),L.isDepthTexture?(se&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Qt.get(K).__webglTexture,Q,Le+Xn),Z.blitFramebuffer(Yt,Jt,Et,Pt,Bt,de,Et,Pt,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):se?Z.copyTexSubImage3D(Xt,Q,Bt,de,Le+Xn,Yt,Jt,Et,Pt):Z.copyTexSubImage2D(Xt,Q,Bt,de,Le+Xn,Yt,Jt,Et,Pt);Dt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else se?L.isDataTexture||L.isData3DTexture?Z.texSubImage3D(Xt,Q,Bt,de,Le,Et,Pt,qt,zn,Re,Ge.data):K.isCompressedArrayTexture?Z.compressedTexSubImage3D(Xt,Q,Bt,de,Le,Et,Pt,qt,zn,Ge.data):Z.texSubImage3D(Xt,Q,Bt,de,Le,Et,Pt,qt,zn,Re,Ge):L.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Q,Bt,de,Et,Pt,zn,Re,Ge.data):L.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Q,Bt,de,Ge.width,Ge.height,zn,Ge.data):Z.texSubImage2D(Z.TEXTURE_2D,Q,Bt,de,Et,Pt,zn,Re,Ge);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Qn),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ee),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,_n),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,di),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,gn),Q===0&&K.generateMipmaps&&Z.generateMipmap(Xt),Dt.unbindTexture()},this.copyTextureToTexture3D=function(L,K,ot=null,lt=null,Q=0){return L.isTexture!==!0&&(gu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,lt=arguments[1]||null,L=arguments[2],K=arguments[3],Q=arguments[4]||0),gu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,K,ot,lt,Q)},this.initRenderTarget=function(L){Qt.get(L).__webglFramebuffer===void 0&&I.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),Dt.unbindTexture()},this.resetState=function(){B=0,N=0,z=null,Dt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}class n3 extends wi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class N_ extends ts{constructor(t=1,i=1,a=1,s=32,u=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:s,heightSegments:u,openEnded:f,thetaStart:h,thetaLength:p};const m=this;s=Math.floor(s),u=Math.floor(u);const _=[],g=[],v=[],M=[];let T=0;const E=[],y=a/2;let x=0;U(),f===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(_),this.setAttribute("position",new Aa(g,3)),this.setAttribute("normal",new Aa(v,3)),this.setAttribute("uv",new Aa(M,2));function U(){const b=new ut,P=new ut;let B=0;const N=(i-t)/a;for(let z=0;z<=u;z++){const R=[],C=z/u,H=C*(i-t)+t;for(let tt=0;tt<=s;tt++){const J=tt/s,rt=J*p+h,st=Math.sin(rt),G=Math.cos(rt);P.x=H*st,P.y=-C*a+y,P.z=H*G,g.push(P.x,P.y,P.z),b.set(st,N,G).normalize(),v.push(b.x,b.y,b.z),M.push(J,1-C),R.push(T++)}E.push(R)}for(let z=0;z<s;z++)for(let R=0;R<u;R++){const C=E[R][z],H=E[R+1][z],tt=E[R+1][z+1],J=E[R][z+1];(t>0||R!==0)&&(_.push(C,H,J),B+=3),(i>0||R!==u-1)&&(_.push(H,tt,J),B+=3)}m.addGroup(x,B,0),x+=B}function w(b){const P=T,B=new Ne,N=new ut;let z=0;const R=b===!0?t:i,C=b===!0?1:-1;for(let tt=1;tt<=s;tt++)g.push(0,y*C,0),v.push(0,C,0),M.push(.5,.5),T++;const H=T;for(let tt=0;tt<=s;tt++){const rt=tt/s*p+h,st=Math.cos(rt),G=Math.sin(rt);N.x=R*G,N.y=y*C,N.z=R*st,g.push(N.x,N.y,N.z),v.push(0,C,0),B.x=st*.5+.5,B.y=G*.5*C+.5,M.push(B.x,B.y),T++}for(let tt=0;tt<s;tt++){const J=P+tt,rt=H+tt;b===!0?_.push(rt,rt+1,J):_.push(rt+1,rt,J),z+=3}m.addGroup(x,z,b===!0?1:2),x+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new N_(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class i3{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hS(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=hS();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function hS(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:E_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=E_);function Qa(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function cM(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ru={duration:.5,overwrite:!1,delay:0},L_,On,Ke,Wi=1e8,He=1/Wi,c_=Math.PI*2,a3=c_/4,r3=0,fM=Math.sqrt,s3=Math.cos,o3=Math.sin,Rn=function(t){return typeof t=="string"},an=function(t){return typeof t=="function"},sr=function(t){return typeof t=="number"},O_=function(t){return typeof t>"u"},Ra=function(t){return typeof t=="object"},li=function(t){return t!==!1},P_=function(){return typeof window<"u"},Lf=function(t){return an(t)||Rn(t)},hM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gn=Array.isArray,l3=/random\([^)]+\)/g,u3=/,\s*/g,dS=/(?:-?\.?\d|\.)+/gi,dM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mm=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pM=/[+-]=-?[.\d]+/,c3=/[^,'"\[\]\s]+/gi,f3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$e,xa,f_,z_,Ui={},qf={},mM,_M=function(t){return(qf=ul(t,Ui))&&hi},I_=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},Cu=function(t,i){return!i&&console.warn(t)},gM=function(t,i){return t&&(Ui[t]=i)&&qf&&(qf[t]=i)||Ui},wu=function(){return 0},h3={suppressEvents:!0,isStart:!0,kill:!1},Hf={suppressEvents:!0,kill:!1},d3={suppressEvents:!0},B_={},jr=[],h_={},vM,bi={},_m={},pS=30,Vf=[],F_="",H_=function(t){var i=t[0],a,s;if(Ra(i)||an(i)||(t=[t]),!(a=(i._gsap||{}).harness)){for(s=Vf.length;s--&&!Vf[s].targetTest(i););a=Vf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new HM(t[s],a)))||t.splice(s,1);return t},Hs=function(t){return t._gsap||H_(ji(t))[0]._gsap},xM=function(t,i,a){return(a=t[i])&&an(a)?t[i]():O_(a)&&t.getAttribute&&t.getAttribute(i)||a},ui=function(t,i){return(t=t.split(",")).forEach(i)||t},sn=function(t){return Math.round(t*1e5)/1e5||0},Je=function(t){return Math.round(t*1e7)/1e7||0},tl=function(t,i){var a=i.charAt(0),s=parseFloat(i.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},p3=function(t,i){for(var a=i.length,s=0;t.indexOf(i[s])<0&&++s<a;);return s<a},Yf=function(){var t=jr.length,i=jr.slice(0),a,s;for(h_={},jr.length=0,a=0;a<t;a++)s=i[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},V_=function(t){return!!(t._initted||t._startAt||t.add)},yM=function(t,i,a,s){jr.length&&!On&&Yf(),t.render(i,a,!!(On&&i<0&&V_(t))),jr.length&&!On&&Yf()},SM=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(c3).length<2?i:Rn(t)?t.trim():t},MM=function(t){return t},Ni=function(t,i){for(var a in i)a in t||(t[a]=i[a]);return t},m3=function(t){return function(i,a){for(var s in a)s in i||s==="duration"&&t||s==="ease"||(i[s]=a[s])}},ul=function(t,i){for(var a in i)t[a]=i[a];return t},mS=function l(t,i){for(var a in i)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Ra(i[a])?l(t[a]||(t[a]={}),i[a]):i[a]);return t},Wf=function(t,i){var a={},s;for(s in t)s in i||(a[s]=t[s]);return a},Eu=function(t){var i=t.parent||$e,a=t.keyframes?m3(Gn(t.keyframes)):Ni;if(li(t.inherit))for(;i;)a(t,i.vars.defaults),i=i.parent||i._dp;return t},_3=function(t,i){for(var a=t.length,s=a===i.length;s&&a--&&t[a]===i[a];);return a<0},EM=function(t,i,a,s,u){var f=t[s],h;if(u)for(h=i[u];f&&f[u]>h;)f=f._prev;return f?(i._next=f._next,f._next=i):(i._next=t[a],t[a]=i),i._next?i._next._prev=i:t[s]=i,i._prev=f,i.parent=i._dp=t,i},rh=function(t,i,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=i._prev,f=i._next;u?u._next=f:t[a]===i&&(t[a]=f),f?f._prev=u:t[s]===i&&(t[s]=u),i._next=i._prev=i.parent=null},Qr=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vs=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},g3=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},d_=function(t,i,a,s){return t._startAt&&(On?t._startAt.revert(Hf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,s))},v3=function l(t){return!t||t._ts&&l(t.parent)},_S=function(t){return t._repeat?cl(t._tTime,t=t.duration()+t._rDelay)*t:0},cl=function(t,i){var a=Math.floor(t=Je(t/i));return t&&a===t?a-1:a},jf=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},sh=function(t){return t._end=Je(t._start+(t._tDur/Math.abs(t._ts||t._rts||He)||0))},oh=function(t,i){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=Je(a._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),sh(t),a._dirty||Vs(a,t)),t},TM=function(t,i){var a;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(a=jf(t.rawTime(),i),(!i._dur||Vu(0,i.totalDuration(),a)-i._tTime>He)&&i.render(a,!0)),Vs(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-He}},Sa=function(t,i,a,s){return i.parent&&Qr(i),i._start=Je((sr(a)?a:!a&&Zf(i)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:a||t!==$e?Xi(t,a,i):t._time)+i._delay),i._end=Je(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),EM(t,i,"_first","_last",t._sort?"_start":0),Zf(i)||(t._recent=i),s||TM(t,i),t._ts<0&&oh(t,t._tTime),t},bM=function(t,i){return(Ui.ScrollTrigger||I_("scrollTrigger",i))&&Ui.ScrollTrigger.create(i,t)},AM=function(t,i,a,s,u){if(k_(t,i,u),!t._initted)return 1;if(!a&&t._pt&&!On&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&vM!==Ai.frame)return jr.push(t),t._lazy=[u,s],1},x3=function l(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||l(i))},Zf=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},y3=function(t,i,a,s){var u=t.ratio,f=i<0||!i&&(!t._start&&x3(t)&&!(!t._initted&&Zf(t))||(t._ts<0||t._dp._ts<0)&&!Zf(t))?0:1,h=t._rDelay,p=0,m,_,g;if(h&&t._repeat&&(p=Vu(0,t._tDur,i),_=cl(p,h),t._yoyo&&_&1&&(f=1-f),_!==cl(t._tTime,h)&&(u=1-f,t.vars.repeatRefresh&&t._initted&&t.invalidate())),f!==u||On||s||t._zTime===He||!i&&t._zTime){if(!t._initted&&AM(t,i,s,a,p))return;for(g=t._zTime,t._zTime=i||(a?He:0),a||(a=i&&!g),t.ratio=f,t._from&&(f=1-f),t._time=0,t._tTime=p,m=t._pt;m;)m.r(f,m.d),m=m._next;i<0&&d_(t,i,a,!0),t._onUpdate&&!a&&Ri(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Ri(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===f&&(f&&Qr(t,1),!a&&!On&&(Ri(t,f?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},S3=function(t,i,a){var s;if(a>i)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>i)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<i)return s;s=s._prev}},fl=function(t,i,a,s){var u=t._repeat,f=Je(i)||0,h=t._tTime/t._tDur;return h&&!s&&(t._time*=f/t._dur),t._dur=f,t._tDur=u?u<0?1e10:Je(f*(u+1)+t._rDelay*u):f,h>0&&!s&&oh(t,t._tTime=t._tDur*h),t.parent&&sh(t),a||Vs(t.parent,t),t},gS=function(t){return t instanceof ri?Vs(t):fl(t,t._dur)},M3={_start:0,endTime:wu,totalDuration:wu},Xi=function l(t,i,a){var s=t.labels,u=t._recent||M3,f=t.duration()>=Wi?u.endTime(!1):t._dur,h,p,m;return Rn(i)&&(isNaN(i)||i in s)?(p=i.charAt(0),m=i.substr(-1)==="%",h=i.indexOf("="),p==="<"||p===">"?(h>=0&&(i=i.replace(/=/,"")),(p==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(i.substr(1))||0)*(m?(h<0?u:a).totalDuration()/100:1)):h<0?(i in s||(s[i]=f),s[i]):(p=parseFloat(i.charAt(h-1)+i.substr(h+1)),m&&a&&(p=p/100*(Gn(a)?a[0]:a).totalDuration()),h>1?l(t,i.substr(0,h-1),a)+p:f+p)):i==null?f:+i},Tu=function(t,i,a){var s=sr(i[1]),u=(s?2:1)+(t<2?0:1),f=i[u],h,p;if(s&&(f.duration=i[1]),f.parent=a,t){for(h=f,p=a;p&&!("immediateRender"in h);)h=p.vars.defaults||{},p=li(p.vars.inherit)&&p.parent;f.immediateRender=li(h.immediateRender),t<2?f.runBackwards=1:f.startAt=i[u-1]}return new dn(i[0],f,i[u+1])},es=function(t,i){return t||t===0?i(t):i},Vu=function(t,i,a){return a<t?t:a>i?i:a},Vn=function(t,i){return!Rn(t)||!(i=f3.exec(t))?"":i[1]},E3=function(t,i,a){return es(a,function(s){return Vu(t,i,s)})},p_=[].slice,RM=function(t,i){return t&&Ra(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&Ra(t[0]))&&!t.nodeType&&t!==xa},T3=function(t,i,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return Rn(s)&&!i||RM(s,1)?(u=a).push.apply(u,ji(s)):a.push(s)})||a},ji=function(t,i,a){return Ke&&!i&&Ke.selector?Ke.selector(t):Rn(t)&&!a&&(f_||!hl())?p_.call((i||z_).querySelectorAll(t),0):Gn(t)?T3(t,a):RM(t)?p_.call(t,0):t?[t]:[]},m_=function(t){return t=ji(t)[0]||Cu("Invalid scope")||{},function(i){var a=t.current||t.nativeElement||t;return ji(i,a.querySelectorAll?a:a===t?Cu("Invalid scope")||z_.createElement("div"):t)}},CM=function(t){return t.sort(function(){return .5-Math.random()})},wM=function(t){if(an(t))return t;var i=Ra(t)?t:{each:t},a=Gs(i.ease),s=i.from||0,u=parseFloat(i.base)||0,f={},h=s>0&&s<1,p=isNaN(s)||h,m=i.axis,_=s,g=s;return Rn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!h&&p&&(_=s[0],g=s[1]),function(v,M,T){var E=(T||i).length,y=f[E],x,U,w,b,P,B,N,z,R;if(!y){if(R=i.grid==="auto"?0:(i.grid||[1,Wi])[1],!R){for(N=-Wi;N<(N=T[R++].getBoundingClientRect().left)&&R<E;);R<E&&R--}for(y=f[E]=[],x=p?Math.min(R,E)*_-.5:s%R,U=R===Wi?0:p?E*g/R-.5:s/R|0,N=0,z=Wi,B=0;B<E;B++)w=B%R-x,b=U-(B/R|0),y[B]=P=m?Math.abs(m==="y"?b:w):fM(w*w+b*b),P>N&&(N=P),P<z&&(z=P);s==="random"&&CM(y),y.max=N-z,y.min=z,y.v=E=(parseFloat(i.amount)||parseFloat(i.each)*(R>E?E-1:m?m==="y"?E/R:R:Math.max(R,E/R))||0)*(s==="edges"?-1:1),y.b=E<0?u-E:u,y.u=Vn(i.amount||i.each)||0,a=a&&E<0?I3(a):a}return E=(y[v]-y.min)/y.max||0,Je(y.b+(a?a(E):E)*y.v)+y.u}},__=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=Je(Math.round(parseFloat(a)/t)*t*i);return(s-s%1)/i+(sr(a)?0:Vn(a))}},DM=function(t,i){var a=Gn(t),s,u;return!a&&Ra(t)&&(s=a=t.radius||Wi,t.values?(t=ji(t.values),(u=!sr(t[0]))&&(s*=s)):t=__(t.increment)),es(i,a?an(t)?function(f){return u=t(f),Math.abs(u-f)<=s?u:f}:function(f){for(var h=parseFloat(u?f.x:f),p=parseFloat(u?f.y:0),m=Wi,_=0,g=t.length,v,M;g--;)u?(v=t[g].x-h,M=t[g].y-p,v=v*v+M*M):v=Math.abs(t[g]-h),v<m&&(m=v,_=g);return _=!s||m<=s?t[_]:f,u||_===f||sr(f)?_:_+Vn(f)}:__(t))},UM=function(t,i,a,s){return es(Gn(t)?!i:a===!0?!!(a=0):!s,function(){return Gn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(i-t+a*.99))/a)*a*s)/s})},b3=function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return function(s){return i.reduce(function(u,f){return f(u)},s)}},A3=function(t,i){return function(a){return t(parseFloat(a))+(i||Vn(a))}},R3=function(t,i,a){return LM(t,i,0,1,a)},NM=function(t,i,a){return es(a,function(s){return t[~~i(s)]})},C3=function l(t,i,a){var s=i-t;return Gn(t)?NM(t,l(0,t.length),i):es(a,function(u){return(s+(u-t)%s)%s+t})},w3=function l(t,i,a){var s=i-t,u=s*2;return Gn(t)?NM(t,l(0,t.length-1),i):es(a,function(f){return f=(u+(f-t)%u)%u||0,t+(f>s?u-f:f)})},Du=function(t){return t.replace(l3,function(i){var a=i.indexOf("[")+1,s=i.substring(a||7,a?i.indexOf("]"):i.length-1).split(u3);return UM(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},LM=function(t,i,a,s,u){var f=i-t,h=s-a;return es(u,function(p){return a+((p-t)/f*h||0)})},D3=function l(t,i,a,s){var u=isNaN(t+i)?0:function(M){return(1-M)*t+M*i};if(!u){var f=Rn(t),h={},p,m,_,g,v;if(a===!0&&(s=1)&&(a=null),f)t={p:t},i={p:i};else if(Gn(t)&&!Gn(i)){for(_=[],g=t.length,v=g-2,m=1;m<g;m++)_.push(l(t[m-1],t[m]));g--,u=function(T){T*=g;var E=Math.min(v,~~T);return _[E](T-E)},a=i}else s||(t=ul(Gn(t)?[]:{},t));if(!_){for(p in i)G_.call(h,t,p,"get",i[p]);u=function(T){return Y_(T,h)||(f?t.p:t)}}}return es(a,u)},vS=function(t,i,a){var s=t.labels,u=Wi,f,h,p;for(f in s)h=s[f]-i,h<0==!!a&&h&&u>(h=Math.abs(h))&&(p=f,u=h);return p},Ri=function(t,i,a){var s=t.vars,u=s[i],f=Ke,h=t._ctx,p,m,_;if(u)return p=s[i+"Params"],m=s.callbackScope||t,a&&jr.length&&Yf(),h&&(Ke=h),_=p?u.apply(m,p):u.call(m),Ke=f,_},yu=function(t){return Qr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!On),t.progress()<1&&Ri(t,"onInterrupt"),t},Ko,OM=[],PM=function(t){if(t)if(t=!t.name&&t.default||t,P_()||t.headless){var i=t.name,a=an(t),s=i&&!a&&t.init?function(){this._props=[]}:t,u={init:wu,render:Y_,add:G_,kill:W3,modifier:Y3,rawVars:0},f={targetTest:0,get:0,getSetter:q_,aliases:{},register:0};if(hl(),t!==s){if(bi[i])return;Ni(s,Ni(Wf(t,u),f)),ul(s.prototype,ul(u,Wf(t,f))),bi[s.prop=i]=s,t.targetTest&&(Vf.push(s),B_[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}gM(i,s),t.register&&t.register(hi,s,ci)}else OM.push(t)},Xe=255,Su={aqua:[0,Xe,Xe],lime:[0,Xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xe],navy:[0,0,128],white:[Xe,Xe,Xe],olive:[128,128,0],yellow:[Xe,Xe,0],orange:[Xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xe,0,0],pink:[Xe,192,203],cyan:[0,Xe,Xe],transparent:[Xe,Xe,Xe,0]},gm=function(t,i,a){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(a-i)*t*6:t<.5?a:t*3<2?i+(a-i)*(2/3-t)*6:i)*Xe+.5|0},zM=function(t,i,a){var s=t?sr(t)?[t>>16,t>>8&Xe,t&Xe]:0:Su.black,u,f,h,p,m,_,g,v,M,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Su[t])s=Su[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),f=t.charAt(2),h=t.charAt(3),t="#"+u+u+f+f+h+h+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Xe,s&Xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Xe,t&Xe]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match(dS),!i)p=+s[0]%360/360,m=+s[1]/100,_=+s[2]/100,f=_<=.5?_*(m+1):_+m-_*m,u=_*2-f,s.length>3&&(s[3]*=1),s[0]=gm(p+1/3,u,f),s[1]=gm(p,u,f),s[2]=gm(p-1/3,u,f);else if(~t.indexOf("="))return s=t.match(dM),a&&s.length<4&&(s[3]=1),s}else s=t.match(dS)||Su.transparent;s=s.map(Number)}return i&&!T&&(u=s[0]/Xe,f=s[1]/Xe,h=s[2]/Xe,g=Math.max(u,f,h),v=Math.min(u,f,h),_=(g+v)/2,g===v?p=m=0:(M=g-v,m=_>.5?M/(2-g-v):M/(g+v),p=g===u?(f-h)/M+(f<h?6:0):g===f?(h-u)/M+2:(u-f)/M+4,p*=60),s[0]=~~(p+.5),s[1]=~~(m*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},IM=function(t){var i=[],a=[],s=-1;return t.split(Zr).forEach(function(u){var f=u.match(Zo)||[];i.push.apply(i,f),a.push(s+=f.length+1)}),i.c=a,i},xS=function(t,i,a){var s="",u=(t+s).match(Zr),f=i?"hsla(":"rgba(",h=0,p,m,_,g;if(!u)return t;if(u=u.map(function(v){return(v=zM(v,i,1))&&f+(i?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=IM(t),p=a.c,p.join(s)!==_.c.join(s)))for(m=t.replace(Zr,"1").split(Zo),g=m.length-1;h<g;h++)s+=m[h]+(~p.indexOf(h)?u.shift()||f+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!m)for(m=t.split(Zr),g=m.length-1;h<g;h++)s+=m[h]+u[h];return s+m[g]},Zr=(function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Su)l+="|"+t+"\\b";return new RegExp(l+")","gi")})(),U3=/hsl[a]?\(/,BM=function(t){var i=t.join(" "),a;if(Zr.lastIndex=0,Zr.test(i))return a=U3.test(i),t[1]=xS(t[1],a),t[0]=xS(t[0],a,IM(t[1])),!0},Uu,Ai=(function(){var l=Date.now,t=500,i=33,a=l(),s=a,u=1e3/240,f=u,h=[],p,m,_,g,v,M,T=function E(y){var x=l()-s,U=y===!0,w,b,P,B;if((x>t||x<0)&&(a+=x-i),s+=x,P=s-a,w=P-f,(w>0||U)&&(B=++g.frame,v=P-g.time*1e3,g.time=P=P/1e3,f+=w+(w>=u?0:u-w),b=1),U||(p=m(E)),b)for(M=0;M<h.length;M++)h[M](P,v,B,y)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){mM&&(!f_&&P_()&&(xa=f_=window,z_=xa.document||{},Ui.gsap=hi,(xa.gsapVersions||(xa.gsapVersions=[])).push(hi.version),_M(qf||xa.GreenSockGlobals||!xa.gsap&&xa||{}),OM.forEach(PM)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),m=_||function(y){return setTimeout(y,f-g.time*1e3+1|0)},Uu=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Uu=0,m=wu},lagSmoothing:function(y,x){t=y||1/0,i=Math.min(x||33,t)},fps:function(y){u=1e3/(y||240),f=g.time*1e3+u},add:function(y,x,U){var w=x?function(b,P,B,N){y(b,P,B,N),g.remove(w)}:y;return g.remove(y),h[U?"unshift":"push"](w),hl(),w},remove:function(y,x){~(x=h.indexOf(y))&&h.splice(x,1)&&M>=x&&M--},_listeners:h},g})(),hl=function(){return!Uu&&Ai.wake()},Te={},N3=/^[\d.\-M][\d.\-,\s]/,L3=/["']/g,O3=function(t){for(var i={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,f=a.length,h,p,m;u<f;u++)p=a[u],h=u!==f-1?p.lastIndexOf(","):p.length,m=p.substr(0,h),i[s]=isNaN(m)?m.replace(L3,"").trim():+m,s=p.substr(h+1).trim();return i},P3=function(t){var i=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",i);return t.substring(i,~s&&s<a?t.indexOf(")",a+1):a)},z3=function(t){var i=(t+"").split("("),a=Te[i[0]];return a&&i.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[O3(i[1])]:P3(t).split(",").map(SM)):Te._CE&&N3.test(t)?Te._CE("",t):a},I3=function(t){return function(i){return 1-t(1-i)}},Gs=function(t,i){return t&&(an(t)?t:Te[t]||z3(t))||i},Ys=function(t,i,a,s){a===void 0&&(a=function(p){return 1-i(1-p)}),s===void 0&&(s=function(p){return p<.5?i(p*2)/2:1-i((1-p)*2)/2});var u={easeIn:i,easeOut:a,easeInOut:s},f;return ui(t,function(h){Te[h]=Ui[h]=u,Te[f=h.toLowerCase()]=a;for(var p in u)Te[f+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Te[h+"."+p]=u[p]}),u},FM=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},vm=function l(t,i,a){var s=i>=1?i:1,u=(a||(t?.3:.45))/(i<1?i:1),f=u/c_*(Math.asin(1/s)||0),h=function(_){return _===1?1:s*Math.pow(2,-10*_)*o3((_-f)*u)+1},p=t==="out"?h:t==="in"?function(m){return 1-h(1-m)}:FM(h);return u=c_/u,p.config=function(m,_){return l(t,m,_)},p},xm=function l(t,i){i===void 0&&(i=1.70158);var a=function(f){return f?--f*f*((i+1)*f+i)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:FM(a);return s.config=function(u){return l(t,u)},s};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var i=t<5?t+1:t;Ys(l+",Power"+(i-1),t?function(a){return Math.pow(a,i)}:function(a){return a},function(a){return 1-Math.pow(1-a,i)},function(a){return a<.5?Math.pow(a*2,i)/2:1-Math.pow((1-a)*2,i)/2})});Te.Linear.easeNone=Te.none=Te.Linear.easeIn;Ys("Elastic",vm("in"),vm("out"),vm());(function(l,t){var i=1/t,a=2*i,s=2.5*i,u=function(h){return h<i?l*h*h:h<a?l*Math.pow(h-1.5/t,2)+.75:h<s?l*(h-=2.25/t)*h+.9375:l*Math.pow(h-2.625/t,2)+.984375};Ys("Bounce",function(f){return 1-u(1-f)},u)})(7.5625,2.75);Ys("Expo",function(l){return Math.pow(2,10*(l-1))*l+l*l*l*l*l*l*(1-l)});Ys("Circ",function(l){return-(fM(1-l*l)-1)});Ys("Sine",function(l){return l===1?1:-s3(l*a3)+1});Ys("Back",xm("in"),xm("out"),xm());Te.SteppedEase=Te.steps=Ui.SteppedEase={config:function(t,i){t===void 0&&(t=1);var a=1/t,s=t+(i?0:1),u=i?1:0,f=1-He;return function(h){return((s*Vu(0,f,h)|0)+u)*a}}};Ru.ease=Te["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return F_+=l+","+l+"Params,"});var HM=function(t,i){this.id=r3++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:xM,this.set=i?i.getSetter:q_},Nu=(function(){function l(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,fl(this,+i.duration,1,1),this.data=i.data,Ke&&(this._ctx=Ke,Ke.data.push(this)),Uu||Ai.wake()}var t=l.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,fl(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(hl(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(oh(this,a),!u._dp||u.parent||TM(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&Sa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===He||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),yM(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+_S(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+_S(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?cl(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-He?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?jf(this.parent._time,this):this._tTime,f=this._rts<0;this._rts=+a||0,this._ts=this._ps||a===-He?0:this._rts;var h=this.totalDuration();return(f!==this._rts<0||u>0&&u<h)&&this.totalTime(Vu(-Math.abs(this._delay),h,u),s!==!1),sh(this),g3(this)},t.paused=function(a){if(!arguments.length)return this._ps;if(this._ps!==a)if(this._ps=a,a)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{hl(),this._ts=this._rts;var s=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,u=this.progress()===1&&Math.abs(this._zTime)!==He,f;if(u)for(this._tTime-=He,f=this._first;f;){if(!f._dur&&f._zTime<0&&f._ts&&f._start<=s+He){u=!1;break}f=f._next}this.totalTime(s,u)}return this},t.startTime=function(a){if(arguments.length){this._start=Je(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Sa(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(li(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=d3);var s=On;return On=a,V_(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),On=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,gS(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,gS(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Xi(this,a),li(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,li(s)),this._dur||(this._zTime=-He),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-He:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-He,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-He)},t.eventCallback=function(a,s,u){var f=this.vars;return arguments.length>1?(s?(f[a]=s,u&&(f[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete f[a],this):f[a]},t.then=function(a){var s=this,u=s._prom;return new Promise(function(f){var h=an(a)?a:MM,p=function(){var _=s.then;s.then=null,u&&u(),an(h)&&(h=h(s))&&(h.then||h===s)&&(s.then=_),f(h),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){yu(this)},l})();Ni(Nu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-He,_prom:0,_ps:!1,_rts:1});var ri=(function(l){cM(t,l);function t(a,s){var u;return a===void 0&&(a={}),u=l.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=li(a.sortChildren),$e&&Sa(a.parent||$e,Qa(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&bM(Qa(u),a.scrollTrigger),u}var i=t.prototype;return i.to=function(s,u,f){return Tu(0,arguments,this),this},i.from=function(s,u,f){return Tu(1,arguments,this),this},i.fromTo=function(s,u,f,h){return Tu(2,arguments,this),this},i.set=function(s,u,f){return u.duration=0,u.parent=this,Eu(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new dn(s,u,Xi(this,f),1),this},i.call=function(s,u,f){return Sa(this,dn.delayedCall(0,s,u),f)},i.staggerTo=function(s,u,f,h,p,m,_){return f.duration=u,f.stagger=f.stagger||h,f.onComplete=m,f.onCompleteParams=_,f.parent=this,new dn(s,f,Xi(this,p)),this},i.staggerFrom=function(s,u,f,h,p,m,_){return f.runBackwards=1,Eu(f).immediateRender=li(f.immediateRender),this.staggerTo(s,u,f,h,p,m,_)},i.staggerFromTo=function(s,u,f,h,p,m,_,g){return h.startAt=f,Eu(h).immediateRender=li(h.immediateRender),this.staggerTo(s,u,h,p,m,_,g)},i.render=function(s,u,f){var h=this._time,p=this._dirty?this.totalDuration():this._tDur,m=this._dur,_=s<=0?0:Je(s),g=this._zTime<0!=s<0&&(this._initted||!m),v,M,T,E,y,x,U,w,b,P,B,N;if(this!==$e&&_>p&&s>=0&&(_=p),_!==this._tTime||f||g){if(h!==this._time&&m&&(_+=this._time-h,s+=this._time-h),v=_,b=this._start,w=this._ts,x=!w,g&&(m||(h=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(B=this._yoyo,y=m+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,u,f);if(v=Je(_%y),_===p?(E=this._repeat,v=m):(P=Je(_/y),E=~~P,E&&E===P&&(v=m,E--),v>m&&(v=m)),P=cl(this._tTime,y),!h&&this._tTime&&P!==E&&this._tTime-P*y-this._dur<=0&&(P=E),B&&E&1&&(v=m-v,N=1),E!==P&&!this._lock){var z=B&&P&1,R=z===(B&&E&1);if(E<P&&(z=!z),h=z?0:_%m?m:_,this._lock=1,this.render(h||(N?0:Je(E*y)),u,!m)._lock=0,this._tTime=_,!u&&this.parent&&Ri(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,P=E),h&&h!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,p=this._tDur,R&&(this._lock=2,h=z?m:-1e-4,this.render(h,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(U=S3(this,Je(h),Je(v)),U&&(_-=v-(v=U._start))),this._tTime=_,this._time=v,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,h=0),!h&&_&&m&&!u&&!P&&(Ri(this,"onStart"),this._tTime!==_))return this;if(v>=h&&s>=0)for(M=this._first;M;){if(T=M._next,(M._act||v>=M._start)&&M._ts&&U!==M){if(M.parent!==this)return this.render(s,u,f);if(M.render(M._ts>0?(v-M._start)*M._ts:(M._dirty?M.totalDuration():M._tDur)+(v-M._start)*M._ts,u,f),v!==this._time||!this._ts&&!x){U=0,T&&(_+=this._zTime=-He);break}}M=T}else{M=this._last;for(var C=s<0?s:v;M;){if(T=M._prev,(M._act||C<=M._end)&&M._ts&&U!==M){if(M.parent!==this)return this.render(s,u,f);if(M.render(M._ts>0?(C-M._start)*M._ts:(M._dirty?M.totalDuration():M._tDur)+(C-M._start)*M._ts,u,f||On&&V_(M)),v!==this._time||!this._ts&&!x){U=0,T&&(_+=this._zTime=C?-He:He);break}}M=T}}if(U&&!u&&(this.pause(),U.render(v>=h?0:-He)._zTime=v>=h?1:-1,this._ts))return this._start=b,sh(this),this.render(s,u,f);this._onUpdate&&!u&&Ri(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&h)&&(b===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!m)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Qr(this,1),!u&&!(s<0&&!h)&&(_||h||!p)&&(Ri(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(s,u){var f=this;if(sr(u)||(u=Xi(this,u,s)),!(s instanceof Nu)){if(Gn(s))return s.forEach(function(h){return f.add(h,u)}),this;if(Rn(s))return this.addLabel(s,u);if(an(s))s=dn.delayedCall(0,s);else return this}return this!==s?Sa(this,s,u):this},i.getChildren=function(s,u,f,h){s===void 0&&(s=!0),u===void 0&&(u=!0),f===void 0&&(f=!0),h===void 0&&(h=-Wi);for(var p=[],m=this._first;m;)m._start>=h&&(m instanceof dn?u&&p.push(m):(f&&p.push(m),s&&p.push.apply(p,m.getChildren(!0,u,f)))),m=m._next;return p},i.getById=function(s){for(var u=this.getChildren(1,1,1),f=u.length;f--;)if(u[f].vars.id===s)return u[f]},i.remove=function(s){return Rn(s)?this.removeLabel(s):an(s)?this.killTweensOf(s):(s.parent===this&&rh(this,s),s===this._recent&&(this._recent=this._last),Vs(this))},i.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Je(Ai.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),l.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},i.addLabel=function(s,u){return this.labels[s]=Xi(this,u),this},i.removeLabel=function(s){return delete this.labels[s],this},i.addPause=function(s,u,f){var h=dn.delayedCall(0,u||wu,f);return h.data="isPause",this._hasPause=1,Sa(this,h,Xi(this,s))},i.removePause=function(s){var u=this._first;for(s=Xi(this,s);u;)u._start===s&&u.data==="isPause"&&Qr(u),u=u._next},i.killTweensOf=function(s,u,f){for(var h=this.getTweensOf(s,f),p=h.length;p--;)kr!==h[p]&&h[p].kill(s,u);return this},i.getTweensOf=function(s,u){for(var f=[],h=ji(s),p=this._first,m=sr(u),_;p;)p instanceof dn?p3(p._targets,h)&&(m?(!kr||p._initted&&p._ts)&&p.globalTime(0)<=u&&p.globalTime(p.totalDuration())>u:!u||p.isActive())&&f.push(p):(_=p.getTweensOf(h,u)).length&&f.push.apply(f,_),p=p._next;return f},i.tweenTo=function(s,u){u=u||{};var f=this,h=Xi(f,s),p=u,m=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,M,T=dn.to(f,Ni({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:h,overwrite:"auto",duration:u.duration||Math.abs((h-(m&&"time"in m?m.time:f._time))/f.timeScale())||He,onStart:function(){if(f.pause(),!M){var y=u.duration||Math.abs((h-(m&&"time"in m?m.time:f._time))/f.timeScale());T._dur!==y&&fl(T,y,0,1).render(T._time,!0,!0),M=1}_&&_.apply(T,g||[])}},u));return v?T.render(0):T},i.tweenFromTo=function(s,u,f){return this.tweenTo(u,Ni({startAt:{time:Xi(this,s)}},f))},i.recent=function(){return this._recent},i.nextLabel=function(s){return s===void 0&&(s=this._time),vS(this,Xi(this,s))},i.previousLabel=function(s){return s===void 0&&(s=this._time),vS(this,Xi(this,s),1)},i.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+He)},i.shiftChildren=function(s,u,f){f===void 0&&(f=0);var h=this._first,p=this.labels,m;for(s=Je(s);h;)h._start>=f&&(h._start+=s,h._end+=s),h=h._next;if(u)for(m in p)p[m]>=f&&(p[m]+=s);return Vs(this)},i.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return l.prototype.invalidate.call(this,s)},i.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,f;u;)f=u._next,this.remove(u),u=f;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Vs(this)},i.totalDuration=function(s){var u=0,f=this,h=f._last,p=Wi,m,_,g;if(arguments.length)return f.timeScale((f._repeat<0?f.duration():f.totalDuration())/(f.reversed()?-s:s));if(f._dirty){for(g=f.parent;h;)m=h._prev,h._dirty&&h.totalDuration(),_=h._start,_>p&&f._sort&&h._ts&&!f._lock?(f._lock=1,Sa(f,h,_-h._delay,1)._lock=0):p=_,_<0&&h._ts&&(u-=_,(!g&&!f._dp||g&&g.smoothChildTiming)&&(f._start+=Je(_/f._ts),f._time-=_,f._tTime-=_),f.shiftChildren(-_,!1,-1/0),p=0),h._end>u&&h._ts&&(u=h._end),h=m;fl(f,f===$e&&f._time>u?f._time:u,1,1),f._dirty=0}return f._tDur},t.updateRoot=function(s){if($e._ts&&(yM($e,jf(s,$e)),vM=Ai.frame),Ai.frame>=pS){pS+=Di.autoSleep||120;var u=$e._first;if((!u||!u._ts)&&Di.autoSleep&&Ai._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||Ai.sleep()}}},t})(Nu);Ni(ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var B3=function(t,i,a,s,u,f,h){var p=new ci(this._pt,t,i,0,1,qM,null,u),m=0,_=0,g,v,M,T,E,y,x,U;for(p.b=a,p.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=Du(s)),f&&(U=[a,s],f(U,t,i),a=U[0],s=U[1]),v=a.match(mm)||[];g=mm.exec(s);)T=g[0],E=s.substring(m,g.index),M?M=(M+1)%5:E.substr(-5)==="rgba("&&(M=1),T!==v[_++]&&(y=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:E||_===1?E:",",s:y,c:T.charAt(1)==="="?tl(y,T)-y:parseFloat(T)-y,m:M&&M<4?Math.round:0},m=mm.lastIndex);return p.c=m<s.length?s.substring(m,s.length):"",p.fp=h,(pM.test(s)||x)&&(p.e=0),this._pt=p,p},G_=function(t,i,a,s,u,f,h,p,m,_){an(s)&&(s=s(u||0,t,f));var g=t[i],v=a!=="get"?a:an(g)?m?t[i.indexOf("set")||!an(t["get"+i.substr(3)])?i:"get"+i.substr(3)](m):t[i]():g,M=an(g)?m?k3:kM:X_,T;if(Rn(s)&&(~s.indexOf("random(")&&(s=Du(s)),s.charAt(1)==="="&&(T=tl(v,s)+(Vn(v)||0),(T||T===0)&&(s=T))),!_||v!==s||g_)return!isNaN(v*s)&&s!==""?(T=new ci(this._pt,t,i,+v||0,s-(v||0),typeof g=="boolean"?q3:XM,0,M),m&&(T.fp=m),h&&T.modifier(h,this,t),this._pt=T):(!g&&!(i in t)&&I_(i,s),B3.call(this,t,i,v,s,M,p||Di.stringFilter,m))},F3=function(t,i,a,s,u){if(an(t)&&(t=bu(t,u,i,a,s)),!Ra(t)||t.style&&t.nodeType||Gn(t)||hM(t))return Rn(t)?bu(t,u,i,a,s):t;var f={},h;for(h in t)f[h]=bu(t[h],u,i,a,s);return f},VM=function(t,i,a,s,u,f){var h,p,m,_;if(bi[t]&&(h=new bi[t]).init(u,h.rawVars?i[t]:F3(i[t],s,u,f,a),a,s,f)!==!1&&(a._pt=p=new ci(a._pt,u,t,0,1,h.render,h,0,h.priority),a!==Ko))for(m=a._ptLookup[a._targets.indexOf(u)],_=h._props.length;_--;)m[h._props[_]]=p;return h},kr,g_,k_=function l(t,i,a){var s=t.vars,u=s.ease,f=s.startAt,h=s.immediateRender,p=s.lazy,m=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,M=s.autoRevert,T=t._dur,E=t._startAt,y=t._targets,x=t.parent,U=x&&x.data==="nested"?x.vars.targets:y,w=t._overwrite==="auto"&&!L_,b=t.timeline,P=s.easeReverse||g,B,N,z,R,C,H,tt,J,rt,st,G,$,Y;if(b&&(!v||!u)&&(u="none"),t._ease=Gs(u,Ru.ease),t._rEase=P&&(Gs(P)||t._ease),t._from=!b&&!!s.runBackwards,t._from&&(t.ratio=1),!b||v&&!s.stagger){if(J=y[0]?Hs(y[0]).harness:0,$=J&&s[J.prop],B=Wf(s,B_),E&&(E._zTime<0&&E.progress(1),i<0&&_&&h&&!M?E.render(-1,!0):E.revert(_&&T?Hf:h3),E._lazy=0),f){if(Qr(t._startAt=dn.set(y,Ni({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!E&&li(p),startAt:null,delay:0,onUpdate:m&&function(){return Ri(t,"onUpdate")},stagger:0},f))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(On||!h&&!M)&&t._startAt.revert(Hf),h&&T&&i<=0&&a<=0){i&&(t._zTime=i);return}}else if(_&&T&&!E){if(i&&(h=!1),z=Ni({overwrite:!1,data:"isFromStart",lazy:h&&!E&&li(p),immediateRender:h,stagger:0,parent:x},B),$&&(z[J.prop]=$),Qr(t._startAt=dn.set(y,z)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(On?t._startAt.revert(Hf):t._startAt.render(-1,!0)),t._zTime=i,!h)l(t._startAt,He,He);else if(!i)return}for(t._pt=t._ptCache=0,p=T&&li(p)||p&&!T,N=0;N<y.length;N++){if(C=y[N],tt=C._gsap||H_(y)[N]._gsap,t._ptLookup[N]=st={},h_[tt.id]&&jr.length&&Yf(),G=U===y?N:U.indexOf(C),J&&(rt=new J).init(C,$||B,t,G,U)!==!1&&(t._pt=R=new ci(t._pt,C,rt.name,0,1,rt.render,rt,0,rt.priority),rt._props.forEach(function(vt){st[vt]=R}),rt.priority&&(H=1)),!J||$)for(z in B)bi[z]&&(rt=VM(z,B,t,G,C,U))?rt.priority&&(H=1):st[z]=R=G_.call(t,C,z,"get",B[z],G,U,0,s.stringFilter);t._op&&t._op[N]&&t.kill(C,t._op[N]),w&&t._pt&&(kr=t,$e.killTweensOf(C,st,t.globalTime(i)),Y=!t.parent,kr=0),t._pt&&p&&(h_[tt.id]=1)}H&&YM(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!Y,v&&i<=0&&b.render(Wi,!0,!0)},H3=function(t,i,a,s,u,f,h,p){var m=(t._pt&&t._ptCache||(t._ptCache={}))[i],_,g,v,M;if(!m)for(m=t._ptCache[i]=[],v=t._ptLookup,M=t._targets.length;M--;){if(_=v[M][i],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==i&&_.fp!==i;)_=_._next;if(!_)return g_=1,t.vars[i]="+=0",k_(t,h),g_=0,p?Cu(i+" not eligible for reset. Try splitting into individual properties"):1;m.push(_)}for(M=m.length;M--;)g=m[M],_=g._pt||g,_.s=(s||s===0)&&!u?s:_.s+(s||0)+f*_.c,_.c=a-_.s,g.e&&(g.e=sn(a)+Vn(g.e)),g.b&&(g.b=_.s+Vn(g.b))},V3=function(t,i){var a=t[0]?Hs(t[0]).harness:0,s=a&&a.aliases,u,f,h,p;if(!s)return i;u=ul({},i);for(f in s)if(f in u)for(p=s[f].split(","),h=p.length;h--;)u[p[h]]=u[f];return u},G3=function(t,i,a,s){var u=i.ease||s||"power1.inOut",f,h;if(Gn(i))h=a[t]||(a[t]=[]),i.forEach(function(p,m){return h.push({t:m/(i.length-1)*100,v:p,e:u})});else for(f in i)h=a[f]||(a[f]=[]),f==="ease"||h.push({t:parseFloat(t),v:i[f],e:u})},bu=function(t,i,a,s,u){return an(t)?t.call(i,a,s,u):Rn(t)&&~t.indexOf("random(")?Du(t):t},Kf=F_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",GM={};ui(Kf+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return GM[l]=1});Kf=Kf.split(",");var dn=(function(l){cM(t,l);function t(a,s,u,f){var h;typeof s=="number"&&(u.duration=s,s=u,u=null),h=l.call(this,f?s:Eu(s))||this;var p=h.vars,m=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,M=p.overwrite,T=p.keyframes,E=p.defaults,y=p.scrollTrigger,x=s.parent||$e,U=(Gn(a)||hM(a)?sr(a[0]):"length"in s)?[a]:ji(a),w,b,P,B,N,z,R,C;if(h._targets=U.length?H_(U):Cu("GSAP target "+a+" not found. https://gsap.com",!Di.nullTargetWarn)||[],h._ptLookup=[],h._overwrite=M,T||v||Lf(m)||Lf(_)){s=h.vars;var H=s.easeReverse||s.yoyoEase;if(w=h.timeline=new ri({data:"nested",defaults:E||{},targets:x&&x.data==="nested"?x.vars.targets:U}),w.kill(),w.parent=w._dp=Qa(h),w._start=0,v||Lf(m)||Lf(_)){if(B=U.length,R=v&&wM(v),Ra(v))for(N in v)~Kf.indexOf(N)&&(C||(C={}),C[N]=v[N]);for(b=0;b<B;b++)P=Wf(s,GM),P.stagger=0,H&&(P.easeReverse=H),C&&ul(P,C),z=U[b],P.duration=+bu(m,Qa(h),b,z,U),P.delay=(+bu(_,Qa(h),b,z,U)||0)-h._delay,!v&&B===1&&P.delay&&(h._delay=_=P.delay,h._start+=_,P.delay=0),w.to(z,P,R?R(b,z,U):0),w._ease=Te.none;w.duration()?m=_=0:h.timeline=0}else if(T){Eu(Ni(w.vars.defaults,{ease:"none"})),w._ease=Gs(T.ease||s.ease||"none");var tt=0,J,rt,st;if(Gn(T))T.forEach(function(G){return w.to(U,G,">")}),w.duration();else{P={};for(N in T)N==="ease"||N==="easeEach"||G3(N,T[N],P,T.easeEach);for(N in P)for(J=P[N].sort(function(G,$){return G.t-$.t}),tt=0,b=0;b<J.length;b++)rt=J[b],st={ease:rt.e,duration:(rt.t-(b?J[b-1].t:0))/100*m},st[N]=rt.v,w.to(U,st,tt),tt+=st.duration;w.duration()<m&&w.to({},{duration:m-w.duration()})}}m||h.duration(m=w.duration())}else h.timeline=0;return M===!0&&!L_&&(kr=Qa(h),$e.killTweensOf(U),kr=0),Sa(x,Qa(h),u),s.reversed&&h.reverse(),s.paused&&h.paused(!0),(g||!m&&!T&&h._start===Je(x._time)&&li(g)&&v3(Qa(h))&&x.data!=="nested")&&(h._tTime=-He,h.render(Math.max(0,-_)||0)),y&&bM(Qa(h),y),h}var i=t.prototype;return i.render=function(s,u,f){var h=this._time,p=this._tDur,m=this._dur,_=s<0,g=s>p-He&&!_?p:s<He?0:s,v,M,T,E,y,x,U,w;if(!m)y3(this,s,u,f);else if(g!==this._tTime||!s||f||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,w=this.timeline,this._repeat){if(E=m+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+s,u,f);if(v=Je(g%E),g===p?(T=this._repeat,v=m):(y=Je(g/E),T=~~y,T&&T===y?(v=m,T--):v>m&&(v=m)),x=this._yoyo&&T&1,x&&(v=m-v),y=cl(this._tTime,E),v===h&&!f&&this._initted&&T===y)return this._tTime=g,this;T!==y&&this.vars.repeatRefresh&&!x&&!this._lock&&v!==E&&this._initted&&(this._lock=f=1,this.render(Je(E*T),!0).invalidate()._lock=0)}if(!this._initted){if(AM(this,_?s:v,f,u,g))return this._tTime=0,this;if(h!==this._time&&!(f&&this.vars.repeatRefresh&&T!==y))return this;if(m!==this._dur)return this.render(s,u,f)}if(this._rEase){var b=v<h;if(b!==this._inv){var P=b?h:m-h;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=h,this._invRecip=P?(b?-1:1)/P:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=U=this._invRatio+this._invScale*this._invEase((v-this._invTime)*this._invRecip)}else this.ratio=U=this._ease(v/m);if(this._from&&(this.ratio=U=1-U),this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),!h&&g&&!u&&!y&&(Ri(this,"onStart"),this._tTime!==g))return this;for(M=this._pt;M;)M.r(U,M.d),M=M._next;w&&w.render(s<0?s:w._dur*w._ease(v/this._dur),u,f)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&d_(this,s,u,f),Ri(this,"onUpdate")),this._repeat&&T!==y&&this.vars.onRepeat&&!u&&this.parent&&Ri(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&d_(this,s,!0,!0),(s||!m)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Qr(this,1),!u&&!(_&&!h)&&(g||h||x)&&(Ri(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),l.prototype.invalidate.call(this,s)},i.resetTo=function(s,u,f,h,p){Uu||Ai.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||k_(this,m),_=this._ease(m/this._dur),H3(this,s,u,f,h,_,m,p)?this.resetTo(s,u,f,h,1):(oh(this,0),this.parent||EM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?yu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!On),this;if(this.timeline){var f=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,kr&&kr.vars.overwrite!==!0)._first||yu(this),this.parent&&f!==this.timeline.totalDuration()&&fl(this,this._dur*this.timeline._tDur/f,0,1),this}var h=this._targets,p=s?ji(s):h,m=this._ptLookup,_=this._pt,g,v,M,T,E,y,x;if((!u||u==="all")&&_3(h,p))return u==="all"&&(this._pt=0),yu(this);for(g=this._op=this._op||[],u!=="all"&&(Rn(u)&&(E={},ui(u,function(U){return E[U]=1}),u=E),u=V3(h,u)),x=h.length;x--;)if(~p.indexOf(h[x])){v=m[x],u==="all"?(g[x]=u,T=v,M={}):(M=g[x]=g[x]||{},T=u);for(E in T)y=v&&v[E],y&&((!("kill"in y.d)||y.d.kill(E)===!0)&&rh(this,y,"_pt"),delete v[E]),M!=="all"&&(M[E]=1)}return this._initted&&!this._pt&&_&&yu(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return Tu(1,arguments)},t.delayedCall=function(s,u,f,h){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:f,onReverseCompleteParams:f,callbackScope:h})},t.fromTo=function(s,u,f){return Tu(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,f){return $e.killTweensOf(s,u,f)},t})(Nu);Ni(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(l){dn[l]=function(){var t=new ri,i=p_.call(arguments,0);return i.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,i)}});var X_=function(t,i,a){return t[i]=a},kM=function(t,i,a){return t[i](a)},k3=function(t,i,a,s){return t[i](s.fp,a)},X3=function(t,i,a){return t.setAttribute(i,a)},q_=function(t,i){return an(t[i])?kM:O_(t[i])&&t.setAttribute?X3:X_},XM=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},q3=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},qM=function(t,i){var a=i._pt,s="";if(!t&&i.b)s=i.b;else if(t===1&&i.e)s=i.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=i.c}i.set(i.t,i.p,s,i)},Y_=function(t,i){for(var a=i._pt;a;)a.r(t,a.d),a=a._next},Y3=function(t,i,a,s){for(var u=this._pt,f;u;)f=u._next,u.p===s&&u.modifier(t,i,a),u=f},W3=function(t){for(var i=this._pt,a,s;i;)s=i._next,i.p===t&&!i.op||i.op===t?rh(this,i,"_pt"):i.dep||(a=1),i=s;return!a},j3=function(t,i,a,s){s.mSet(t,i,s.m.call(s.tween,a,s.mt),s)},YM=function(t){for(var i=t._pt,a,s,u,f;i;){for(a=i._next,s=u;s&&s.pr>i.pr;)s=s._next;(i._prev=s?s._prev:f)?i._prev._next=i:u=i,(i._next=s)?s._prev=i:f=i,i=a}t._pt=u},ci=(function(){function l(i,a,s,u,f,h,p,m,_){this.t=a,this.s=u,this.c=f,this.p=s,this.r=h||XM,this.d=p||this,this.set=m||X_,this.pr=_||0,this._next=i,i&&(i._prev=this)}var t=l.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=j3,this.m=a,this.mt=u,this.tween=s},l})();ui(F_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(l){return B_[l]=1});Ui.TweenMax=Ui.TweenLite=dn;Ui.TimelineLite=Ui.TimelineMax=ri;$e=new ri({sortChildren:!1,defaults:Ru,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Di.stringFilter=BM;var ks=[],Gf={},Z3=[],yS=0,K3=0,ym=function(t){return(Gf[t]||Z3).map(function(i){return i()})},Lu=function(){var t=Date.now(),i=[];t-yS>2&&(ym("matchMediaInit"),ks.forEach(function(a){var s=a.queries,u=a.conditions,f,h,p,m;for(h in s)f=xa.matchMedia(s[h]).matches,f&&(p=1),f!==u[h]&&(u[h]=f,m=1);m&&(a.revert(),p&&i.push(a))}),ym("matchMediaRevert"),i.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),yS=t,ym("matchMedia"))},WM=(function(){function l(i,a){this.selector=a&&m_(a),this.data=[],this._r=[],this.isReverted=!1,this.id=K3++,i&&this.add(i)}var t=l.prototype;return t.add=function(a,s,u){an(a)&&(u=s,s=a,a=an);var f=this,h=function(){var m=Ke,_=f.selector,g;return m&&m!==f&&m.data.push(f),u&&(f.selector=m_(u)),Ke=f,g=s.apply(f,arguments),an(g)&&f._r.push(g),Ke=m,f.selector=_,f.isReverted=!1,g};return f.last=h,a===an?h(f,function(p){return f.add(null,p)}):a?f[a]=h:h},t.ignore=function(a){var s=Ke;Ke=null,a(this),Ke=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof l?a.push.apply(a,s.getTweens()):s instanceof dn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var h=u.getTweens(),p=u.data.length,m;p--;)m=u.data[p],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(_){return h.splice(h.indexOf(_),1)}));for(h.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=u.data.length;p--;)m=u.data[p],m instanceof ri?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof dn)&&m.revert&&m.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(h){return h.kill&&h.kill()}),this.clear(),s){for(var f=ks.length;f--;)ks[f].id===this.id&&ks.splice(f,1);this._mqs&&this._mqs.forEach(function(h){return h.removeListener?h.removeListener(Lu):h.removeEventListener("change",Lu)}),this._mqs=null}},t.revert=function(a){this.kill(a||{})},l})(),Q3=(function(){function l(i){this.contexts=[],this.scope=i,Ke&&Ke.data.push(this)}var t=l.prototype;return t.add=function(a,s,u){Ra(a)||(a={matches:a});var f=new WM(0,u||this.scope),h=f.conditions={},p,m,_;Ke&&!f.selector&&(f.selector=Ke.selector),this.contexts.push(f),s=f.add("onMatch",s),f.queries=a;for(m in a)m==="all"?_=1:(p=xa.matchMedia(a[m]),p&&(ks.indexOf(f)<0&&ks.push(f),(h[m]=p.matches)&&(_=1),p.addListener?p.addListener(Lu):p.addEventListener("change",Lu),(f._mqs||(f._mqs=[])).push(p)));return _&&s(f,function(g){return f.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},l})(),Qf={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];i.forEach(function(s){return PM(s)})},timeline:function(t){return new ri(t)},getTweensOf:function(t,i){return $e.getTweensOf(t,i)},getProperty:function(t,i,a,s){Rn(t)&&(t=ji(t)[0]);var u=Hs(t||{}).get,f=a?MM:SM;return a==="native"&&(a=""),t&&(i?f((bi[i]&&bi[i].get||u)(t,i,a,s)):function(h,p,m){return f((bi[h]&&bi[h].get||u)(t,h,p,m))})},quickSetter:function(t,i,a){if(t=ji(t),t.length>1){var s=t.map(function(_){return hi.quickSetter(_,i,a)}),u=s.length;return function(_){for(var g=u;g--;)s[g](_)}}t=t[0]||{};var f=bi[i],h=Hs(t),p=h.harness&&(h.harness.aliases||{})[i]||i,m=f?function(_){var g=new f;Ko._pt=0,g.init(t,a?_+a:_,Ko,0,[t]),g.render(1,g),Ko._pt&&Y_(1,Ko)}:h.set(t,p);return f?m:function(_){return m(t,p,a?_+a:_,h,1)}},quickTo:function(t,i,a){var s,u=hi.to(t,Ni((s={},s[i]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),f=function(p,m,_){return u.resetTo(i,p,m,_)};return f.tween=u,f},isTweening:function(t){return $e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gs(t.ease,Ru.ease)),mS(Ru,t||{})},config:function(t){return mS(Di,t||{})},registerEffect:function(t){var i=t.name,a=t.effect,s=t.plugins,u=t.defaults,f=t.extendTimeline;(s||"").split(",").forEach(function(h){return h&&!bi[h]&&!Ui[h]&&Cu(i+" effect requires "+h+" plugin.")}),_m[i]=function(h,p,m){return a(ji(h),Ni(p||{},u),m)},f&&(ri.prototype[i]=function(h,p,m){return this.add(_m[i](h,Ra(p)?p:(m=p)&&{},this),m)})},registerEase:function(t,i){Te[t]=Gs(i)},parseEase:function(t,i){return arguments.length?Gs(t,i):Te},getById:function(t){return $e.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var a=new ri(t),s,u;for(a.smoothChildTiming=li(t.smoothChildTiming),$e.remove(a),a._dp=0,a._time=a._tTime=$e._time,s=$e._first;s;)u=s._next,(i||!(!s._dur&&s instanceof dn&&s.vars.onComplete===s._targets[0]))&&Sa(a,s,s._start-s._delay),s=u;return Sa($e,a,0),a},context:function(t,i){return t?new WM(t,i):Ke},matchMedia:function(t){return new Q3(t)},matchMediaRefresh:function(){return ks.forEach(function(t){var i=t.conditions,a,s;for(s in i)i[s]&&(i[s]=!1,a=1);a&&t.revert()})||Lu()},addEventListener:function(t,i){var a=Gf[t]||(Gf[t]=[]);~a.indexOf(i)||a.push(i)},removeEventListener:function(t,i){var a=Gf[t],s=a&&a.indexOf(i);s>=0&&a.splice(s,1)},utils:{wrap:C3,wrapYoyo:w3,distribute:wM,random:UM,snap:DM,normalize:R3,getUnit:Vn,clamp:E3,splitColor:zM,toArray:ji,selector:m_,mapRange:LM,pipe:b3,unitize:A3,interpolate:D3,shuffle:CM},install:_M,effects:_m,ticker:Ai,updateRoot:ri.updateRoot,plugins:bi,globalTimeline:$e,core:{PropTween:ci,globals:gM,Tween:dn,Timeline:ri,Animation:Nu,getCache:Hs,_removeLinkedListItem:rh,reverting:function(){return On},context:function(t){return t&&Ke&&(Ke.data.push(t),t._ctx=Ke),Ke},suppressOverwrites:function(t){return L_=t}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return Qf[l]=dn[l]});Ai.add(ri.updateRoot);Ko=Qf.to({},{duration:0});var J3=function(t,i){for(var a=t._pt;a&&a.p!==i&&a.op!==i&&a.fp!==i;)a=a._next;return a},$3=function(t,i){var a=t._targets,s,u,f;for(s in i)for(u=a.length;u--;)f=t._ptLookup[u][s],f&&(f=f.d)&&(f._pt&&(f=J3(f,s)),f&&f.modifier&&f.modifier(i[s],t,a[u],s))},Sm=function(t,i){return{name:t,headless:1,rawVars:1,init:function(s,u,f){f._onInit=function(h){var p,m;if(Rn(u)&&(p={},ui(u,function(_){return p[_]=1}),u=p),i){p={};for(m in u)p[m]=i(u[m]);u=p}$3(h,u)}}}},hi=Qf.registerPlugin({name:"attr",init:function(t,i,a,s,u){var f,h,p;this.tween=a;for(f in i)p=t.getAttribute(f)||"",h=this.add(t,"setAttribute",(p||0)+"",i[f],s,u,0,0,f),h.op=f,h.b=p,this._props.push(f)},render:function(t,i){for(var a=i._pt;a;)On?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,i){for(var a=i.length;a--;)this.add(t,a,t[a]||0,i[a],0,0,0,0,0,1)}},Sm("roundProps",__),Sm("modifiers"),Sm("snap",DM))||Qf;dn.version=ri.version=hi.version="3.15.1";mM=1;P_()&&hl();Te.Power0;Te.Power1;Te.Power2;Te.Power3;Te.Power4;Te.Linear;Te.Quad;Te.Cubic;Te.Quart;Te.Quint;Te.Strong;Te.Elastic;Te.Back;Te.SteppedEase;Te.Bounce;Te.Sine;Te.Expo;Te.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var SS,Xr,el,W_,Fs,MS,j_,tD=function(){return typeof window<"u"},or={},Os=180/Math.PI,nl=Math.PI/180,Wo=Math.atan2,ES=1e8,Z_=/([A-Z])/g,eD=/(left|right|width|margin|padding|x)/i,nD=/[\s,\(]\S/,Ta={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},v_=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},iD=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},aD=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},rD=function(t,i){return i.set(i.t,i.p,t===1?i.e:t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},sD=function(t,i){var a=i.s+i.c*t;i.set(i.t,i.p,~~(a+(a<0?-.5:.5))+i.u,i)},jM=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},ZM=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},oD=function(t,i,a){return t.style[i]=a},lD=function(t,i,a){return t.style.setProperty(i,a)},uD=function(t,i,a){return t._gsap[i]=a},cD=function(t,i,a){return t._gsap.scaleX=t._gsap.scaleY=a},fD=function(t,i,a,s,u){var f=t._gsap;f.scaleX=f.scaleY=a,f.renderTransform(u,f)},hD=function(t,i,a,s,u){var f=t._gsap;f[i]=a,f.renderTransform(u,f)},tn="transform",fi=tn+"Origin",dD=function l(t,i){var a=this,s=this.target,u=s.style,f=s._gsap;if(t in or&&u){if(this.tfm=this.tfm||{},t!=="transform")t=Ta[t]||t,~t.indexOf(",")?t.split(",").forEach(function(h){return a.tfm[h]=Ja(s,h)}):this.tfm[t]=f.x?f[t]:Ja(s,t),t===fi&&(this.tfm.zOrigin=f.zOrigin);else return Ta.transform.split(",").forEach(function(h){return l.call(a,h,i)});if(this.props.indexOf(tn)>=0)return;f.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(fi,i,"")),t=tn}(u||i)&&this.props.push(t,i,u[t])},KM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},pD=function(){var t=this.props,i=this.target,a=i.style,s=i._gsap,u,f;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?i[t[u]](t[u+2]):i[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(Z_,"-$1").toLowerCase());if(this.tfm){for(f in this.tfm)s[f]=this.tfm[f];s.svg&&(s.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),u=j_(),(!u||!u.isStart)&&!a[tn]&&(KM(a),s.zOrigin&&a[fi]&&(a[fi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},QM=function(t,i){var a={target:t,props:[],revert:pD,save:dD};return t._gsap||hi.core.getCache(t),i&&t.style&&t.nodeType&&i.split(",").forEach(function(s){return a.save(s)}),a},JM,x_=function(t,i){var a=Xr.createElementNS?Xr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xr.createElement(t);return a&&a.style?a:Xr.createElement(t)},Ci=function l(t,i,a){var s=getComputedStyle(t);return s[i]||s.getPropertyValue(i.replace(Z_,"-$1").toLowerCase())||s.getPropertyValue(i)||!a&&l(t,dl(i)||i,1)||""},TS="O,Moz,ms,Ms,Webkit".split(","),dl=function(t,i,a){var s=i||Fs,u=s.style,f=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);f--&&!(TS[f]+t in u););return f<0?null:(f===3?"ms":f>=0?TS[f]:"")+t},y_=function(){tD()&&window.document&&(SS=window,Xr=SS.document,el=Xr.documentElement,Fs=x_("div")||{style:{}},x_("div"),tn=dl(tn),fi=tn+"Origin",Fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",JM=!!dl("perspective"),j_=hi.core.reverting,W_=1)},bS=function(t){var i=t.ownerSVGElement,a=x_("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),el.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),el.removeChild(a),u},AS=function(t,i){for(var a=i.length;a--;)if(t.hasAttribute(i[a]))return t.getAttribute(i[a])},$M=function(t){var i,a;try{i=t.getBBox()}catch{i=bS(t),a=1}return i&&(i.width||i.height)||a||(i=bS(t)),i&&!i.width&&!i.x&&!i.y?{x:+AS(t,["x","cx","x1"])||0,y:+AS(t,["y","cy","y1"])||0,width:0,height:0}:i},tE=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&$M(t))},Jr=function(t,i){if(i){var a=t.style,s;i in or&&i!==fi&&(i=tn),a.removeProperty?(s=i.substr(0,2),(s==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),a.removeProperty(s==="--"?i:i.replace(Z_,"-$1").toLowerCase())):a.removeAttribute(i)}},qr=function(t,i,a,s,u,f){var h=new ci(t._pt,i,a,0,1,f?ZM:jM);return t._pt=h,h.b=s,h.e=u,t._props.push(a),h},RS={deg:1,rad:1,turn:1},mD={grid:1,flex:1},$r=function l(t,i,a,s){var u=parseFloat(a)||0,f=(a+"").trim().substr((u+"").length)||"px",h=Fs.style,p=eD.test(i),m=t.tagName.toLowerCase()==="svg",_=(m?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",M=s==="%",T,E,y,x;if(s===f||!u||RS[s]||RS[f])return u;if(f!=="px"&&!v&&(u=l(t,i,a,"px")),x=t.getCTM&&tE(t),(M||f==="%")&&(or[i]||~i.indexOf("adius")))return T=x?t.getBBox()[p?"width":"height"]:t[_],sn(M?u/T*g:u/100*T);if(h[p?"width":"height"]=g+(v?f:s),E=s!=="rem"&&~i.indexOf("adius")||s==="em"&&t.appendChild&&!m?t:t.parentNode,x&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Xr||!E.appendChild)&&(E=Xr.body),y=E._gsap,y&&M&&y.width&&p&&y.time===Ai.time&&!y.uncache)return sn(u/y.width*g);if(M&&(i==="height"||i==="width")){var U=t.style[i];t.style[i]=g+s,T=t[_],U?t.style[i]=U:Jr(t,i)}else(M||f==="%")&&!mD[Ci(E,"display")]&&(h.position=Ci(t,"position")),E===t&&(h.position="static"),E.appendChild(Fs),T=Fs[_],E.removeChild(Fs),h.position="absolute";return p&&M&&(y=Hs(E),y.time=Ai.time,y.width=E[_]),sn(v?T*u/g:T&&u?g/T*u:0)},Ja=function(t,i,a,s){var u;return W_||y_(),i in Ta&&i!=="transform"&&(i=Ta[i],~i.indexOf(",")&&(i=i.split(",")[0])),or[i]&&i!=="transform"?(u=Pu(t,s),u=i!=="transformOrigin"?u[i]:u.svg?u.origin:$f(Ci(t,fi))+" "+u.zOrigin+"px"):(u=t.style[i],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=Jf[i]&&Jf[i](t,i,a)||Ci(t,i)||xM(t,i)||(i==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?$r(t,i,u,a)+a:u},_D=function(t,i,a,s){if(!a||a==="none"){var u=dl(i,t,1),f=u&&Ci(t,u,1);f&&f!==a?(i=u,a=f):i==="borderColor"&&(a=Ci(t,"borderTopColor"))}var h=new ci(this._pt,t.style,i,0,1,qM),p=0,m=0,_,g,v,M,T,E,y,x,U,w,b,P;if(h.b=a,h.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ci(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(E=t.style[i],t.style[i]=s,s=Ci(t,i)||s,E?t.style[i]=E:Jr(t,i)),_=[a,s],BM(_),a=_[0],s=_[1],v=a.match(Zo)||[],P=s.match(Zo)||[],P.length){for(;g=Zo.exec(s);)y=g[0],U=s.substring(p,g.index),T?T=(T+1)%5:(U.substr(-5)==="rgba("||U.substr(-5)==="hsla(")&&(T=1),y!==(E=v[m++]||"")&&(M=parseFloat(E)||0,b=E.substr((M+"").length),y.charAt(1)==="="&&(y=tl(M,y)+b),x=parseFloat(y),w=y.substr((x+"").length),p=Zo.lastIndex-w.length,w||(w=w||Di.units[i]||b,p===s.length&&(s+=w,h.e+=w)),b!==w&&(M=$r(t,i,E,w)||0),h._pt={_next:h._pt,p:U||m===1?U:",",s:M,c:x-M,m:T&&T<4||i==="zIndex"?Math.round:0});h.c=p<s.length?s.substring(p,s.length):""}else h.r=i==="display"&&s==="none"?ZM:jM;return pM.test(s)&&(h.e=0),this._pt=h,h},CS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gD=function(t){var i=t.split(" "),a=i[0],s=i[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),i[0]=CS[a]||a,i[1]=CS[s]||s,i.join(" ")},vD=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var a=i.t,s=a.style,u=i.u,f=a._gsap,h,p,m;if(u==="all"||u===!0)s.cssText="",p=1;else for(u=u.split(","),m=u.length;--m>-1;)h=u[m],or[h]&&(p=1,h=h==="transformOrigin"?fi:tn),Jr(a,h);p&&(Jr(a,tn),f&&(f.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Pu(a,1),f.uncache=1,KM(s)))}},Jf={clearProps:function(t,i,a,s,u){if(u.data!=="isFromStart"){var f=t._pt=new ci(t._pt,i,a,0,0,vD);return f.u=s,f.pr=-10,f.tween=u,t._props.push(a),1}}},Ou=[1,0,0,1,0,0],eE={},nE=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wS=function(t){var i=Ci(t,tn);return nE(i)?Ou:i.substr(7).match(dM).map(sn)},K_=function(t,i){var a=t._gsap||Hs(t),s=t.style,u=wS(t),f,h,p,m;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,u=[p.a,p.b,p.c,p.d,p.e,p.f],u.join(",")==="1,0,0,1,0,0"?Ou:u):(u===Ou&&!t.offsetParent&&t!==el&&!a.svg&&(p=s.display,s.display="block",f=t.parentNode,(!f||!t.offsetParent&&!t.getBoundingClientRect().width)&&(m=1,h=t.nextElementSibling,el.appendChild(t)),u=wS(t),p?s.display=p:Jr(t,"display"),m&&(h?f.insertBefore(t,h):f?f.appendChild(t):el.removeChild(t))),i&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},S_=function(t,i,a,s,u,f){var h=t._gsap,p=u||K_(t,!0),m=h.xOrigin||0,_=h.yOrigin||0,g=h.xOffset||0,v=h.yOffset||0,M=p[0],T=p[1],E=p[2],y=p[3],x=p[4],U=p[5],w=i.split(" "),b=parseFloat(w[0])||0,P=parseFloat(w[1])||0,B,N,z,R;a?p!==Ou&&(N=M*y-T*E)&&(z=b*(y/N)+P*(-E/N)+(E*U-y*x)/N,R=b*(-T/N)+P*(M/N)-(M*U-T*x)/N,b=z,P=R):(B=$M(t),b=B.x+(~w[0].indexOf("%")?b/100*B.width:b),P=B.y+(~(w[1]||w[0]).indexOf("%")?P/100*B.height:P)),s||s!==!1&&h.smooth?(x=b-m,U=P-_,h.xOffset=g+(x*M+U*E)-x,h.yOffset=v+(x*T+U*y)-U):h.xOffset=h.yOffset=0,h.xOrigin=b,h.yOrigin=P,h.smooth=!!s,h.origin=i,h.originIsAbsolute=!!a,t.style[fi]="0px 0px",f&&(qr(f,h,"xOrigin",m,b),qr(f,h,"yOrigin",_,P),qr(f,h,"xOffset",g,h.xOffset),qr(f,h,"yOffset",v,h.yOffset)),t.setAttribute("data-svg-origin",b+" "+P)},Pu=function(t,i){var a=t._gsap||new HM(t);if("x"in a&&!i&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,f="px",h="deg",p=getComputedStyle(t),m=Ci(t,fi)||"0",_,g,v,M,T,E,y,x,U,w,b,P,B,N,z,R,C,H,tt,J,rt,st,G,$,Y,vt,xt,zt,Zt,fe,O,X;return _=g=v=E=y=x=U=w=b=0,M=T=1,a.svg=!!(t.getCTM&&tE(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[tn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[tn]!=="none"?p[tn]:"")),s.scale=s.rotate=s.translate="none"),N=K_(t,a.svg),a.svg&&(a.uncache?(Y=t.getBBox(),m=a.xOrigin-Y.x+"px "+(a.yOrigin-Y.y)+"px",$=""):$=!i&&t.getAttribute("data-svg-origin"),S_(t,$||m,!!$||a.originIsAbsolute,a.smooth!==!1,N)),P=a.xOrigin||0,B=a.yOrigin||0,N!==Ou&&(H=N[0],tt=N[1],J=N[2],rt=N[3],_=st=N[4],g=G=N[5],N.length===6?(M=Math.sqrt(H*H+tt*tt),T=Math.sqrt(rt*rt+J*J),E=H||tt?Wo(tt,H)*Os:0,U=J||rt?Wo(J,rt)*Os+E:0,U&&(T*=Math.abs(Math.cos(U*nl))),a.svg&&(_-=P-(P*H+B*J),g-=B-(P*tt+B*rt))):(X=N[6],fe=N[7],xt=N[8],zt=N[9],Zt=N[10],O=N[11],_=N[12],g=N[13],v=N[14],z=Wo(X,Zt),y=z*Os,z&&(R=Math.cos(-z),C=Math.sin(-z),$=st*R+xt*C,Y=G*R+zt*C,vt=X*R+Zt*C,xt=st*-C+xt*R,zt=G*-C+zt*R,Zt=X*-C+Zt*R,O=fe*-C+O*R,st=$,G=Y,X=vt),z=Wo(-J,Zt),x=z*Os,z&&(R=Math.cos(-z),C=Math.sin(-z),$=H*R-xt*C,Y=tt*R-zt*C,vt=J*R-Zt*C,O=rt*C+O*R,H=$,tt=Y,J=vt),z=Wo(tt,H),E=z*Os,z&&(R=Math.cos(z),C=Math.sin(z),$=H*R+tt*C,Y=st*R+G*C,tt=tt*R-H*C,G=G*R-st*C,H=$,st=Y),y&&Math.abs(y)+Math.abs(E)>359.9&&(y=E=0,x=180-x),M=sn(Math.sqrt(H*H+tt*tt+J*J)),T=sn(Math.sqrt(G*G+X*X)),z=Wo(st,G),U=Math.abs(z)>2e-4?z*Os:0,b=O?1/(O<0?-O:O):0),a.svg&&($=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!nE(Ci(t,tn)),$&&t.setAttribute("transform",$))),Math.abs(U)>90&&Math.abs(U)<270&&(u?(M*=-1,U+=E<=0?180:-180,E+=E<=0?180:-180):(T*=-1,U+=U<=0?180:-180)),i=i||a.uncache,a.x=_-((a.xPercent=_&&(!i&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+f,a.y=g-((a.yPercent=g&&(!i&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+f,a.z=v+f,a.scaleX=sn(M),a.scaleY=sn(T),a.rotation=sn(E)+h,a.rotationX=sn(y)+h,a.rotationY=sn(x)+h,a.skewX=U+h,a.skewY=w+h,a.transformPerspective=b+f,(a.zOrigin=parseFloat(m.split(" ")[2])||!i&&a.zOrigin||0)&&(s[fi]=$f(m)),a.xOffset=a.yOffset=0,a.force3D=Di.force3D,a.renderTransform=a.svg?yD:JM?iE:xD,a.uncache=0,a},$f=function(t){return(t=t.split(" "))[0]+" "+t[1]},Mm=function(t,i,a){var s=Vn(i);return sn(parseFloat(i)+parseFloat($r(t,"x",a+"px",s)))+s},xD=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,iE(t,i)},Ds="0deg",mu="0px",Us=") ",iE=function(t,i){var a=i||this,s=a.xPercent,u=a.yPercent,f=a.x,h=a.y,p=a.z,m=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,M=a.skewY,T=a.scaleX,E=a.scaleY,y=a.transformPerspective,x=a.force3D,U=a.target,w=a.zOrigin,b="",P=x==="auto"&&t&&t!==1||x===!0;if(w&&(g!==Ds||_!==Ds)){var B=parseFloat(_)*nl,N=Math.sin(B),z=Math.cos(B),R;B=parseFloat(g)*nl,R=Math.cos(B),f=Mm(U,f,N*R*-w),h=Mm(U,h,-Math.sin(B)*-w),p=Mm(U,p,z*R*-w+w)}y!==mu&&(b+="perspective("+y+Us),(s||u)&&(b+="translate("+s+"%, "+u+"%) "),(P||f!==mu||h!==mu||p!==mu)&&(b+=p!==mu||P?"translate3d("+f+", "+h+", "+p+") ":"translate("+f+", "+h+Us),m!==Ds&&(b+="rotate("+m+Us),_!==Ds&&(b+="rotateY("+_+Us),g!==Ds&&(b+="rotateX("+g+Us),(v!==Ds||M!==Ds)&&(b+="skew("+v+", "+M+Us),(T!==1||E!==1)&&(b+="scale("+T+", "+E+Us),U.style[tn]=b||"translate(0, 0)"},yD=function(t,i){var a=i||this,s=a.xPercent,u=a.yPercent,f=a.x,h=a.y,p=a.rotation,m=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,M=a.target,T=a.xOrigin,E=a.yOrigin,y=a.xOffset,x=a.yOffset,U=a.forceCSS,w=parseFloat(f),b=parseFloat(h),P,B,N,z,R;p=parseFloat(p),m=parseFloat(m),_=parseFloat(_),_&&(_=parseFloat(_),m+=_,p+=_),p||m?(p*=nl,m*=nl,P=Math.cos(p)*g,B=Math.sin(p)*g,N=Math.sin(p-m)*-v,z=Math.cos(p-m)*v,m&&(_*=nl,R=Math.tan(m-_),R=Math.sqrt(1+R*R),N*=R,z*=R,_&&(R=Math.tan(_),R=Math.sqrt(1+R*R),P*=R,B*=R)),P=sn(P),B=sn(B),N=sn(N),z=sn(z)):(P=g,z=v,B=N=0),(w&&!~(f+"").indexOf("px")||b&&!~(h+"").indexOf("px"))&&(w=$r(M,"x",f,"px"),b=$r(M,"y",h,"px")),(T||E||y||x)&&(w=sn(w+T-(T*P+E*N)+y),b=sn(b+E-(T*B+E*z)+x)),(s||u)&&(R=M.getBBox(),w=sn(w+s/100*R.width),b=sn(b+u/100*R.height)),R="matrix("+P+","+B+","+N+","+z+","+w+","+b+")",M.setAttribute("transform",R),U&&(M.style[tn]=R)},SD=function(t,i,a,s,u){var f=360,h=Rn(u),p=parseFloat(u)*(h&&~u.indexOf("rad")?Os:1),m=p-s,_=s+m+"deg",g,v;return h&&(g=u.split("_")[1],g==="short"&&(m%=f,m!==m%(f/2)&&(m+=m<0?f:-f)),g==="cw"&&m<0?m=(m+f*ES)%f-~~(m/f)*f:g==="ccw"&&m>0&&(m=(m-f*ES)%f-~~(m/f)*f)),t._pt=v=new ci(t._pt,i,a,s,m,iD),v.e=_,v.u="deg",t._props.push(a),v},DS=function(t,i){for(var a in i)t[a]=i[a];return t},MD=function(t,i,a){var s=DS({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",f=a.style,h,p,m,_,g,v,M,T;s.svg?(m=a.getAttribute("transform"),a.setAttribute("transform",""),f[tn]=i,h=Pu(a,1),Jr(a,tn),a.setAttribute("transform",m)):(m=getComputedStyle(a)[tn],f[tn]=i,h=Pu(a,1),f[tn]=m);for(p in or)m=s[p],_=h[p],m!==_&&u.indexOf(p)<0&&(M=Vn(m),T=Vn(_),g=M!==T?$r(a,p,m,T):parseFloat(m),v=parseFloat(_),t._pt=new ci(t._pt,h,p,g,v-g,v_),t._pt.u=T||0,t._props.push(p));DS(h,s)};ui("padding,margin,Width,Radius",function(l,t){var i="Top",a="Right",s="Bottom",u="Left",f=(t<3?[i,a,s,u]:[i+u,i+a,s+a,s+u]).map(function(h){return t<2?l+h:"border"+h+l});Jf[t>1?"border"+l:l]=function(h,p,m,_,g){var v,M;if(arguments.length<4)return v=f.map(function(T){return Ja(h,T,m)}),M=v.join(" "),M.split(v[0]).length===5?v[0]:M;v=(_+"").split(" "),M={},f.forEach(function(T,E){return M[T]=v[E]=v[E]||v[(E-1)/2|0]}),h.init(p,M,g)}});var aE={name:"css",register:y_,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,a,s,u){var f=this._props,h=t.style,p=a.vars.startAt,m,_,g,v,M,T,E,y,x,U,w,b,P,B,N,z,R;W_||y_(),this.styles=this.styles||QM(t),z=this.styles.props,this.tween=a;for(E in i)if(E!=="autoRound"&&(_=i[E],!(bi[E]&&VM(E,i,a,s,t,u)))){if(M=typeof _,T=Jf[E],M==="function"&&(_=_.call(a,s,t,u),M=typeof _),M==="string"&&~_.indexOf("random(")&&(_=Du(_)),T)T(this,t,E,_,a)&&(N=1);else if(E.substr(0,2)==="--")m=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Zr.lastIndex=0,Zr.test(m)||(y=Vn(m),x=Vn(_),x?y!==x&&(m=$r(t,E,m,x)+x):y&&(_+=y)),this.add(h,"setProperty",m,_,s,u,0,0,E),f.push(E),z.push(E,0,h[E]);else if(M!=="undefined"){if(p&&E in p?(m=typeof p[E]=="function"?p[E].call(a,s,t,u):p[E],Rn(m)&&~m.indexOf("random(")&&(m=Du(m)),Vn(m+"")||m==="auto"||(m+=Di.units[E]||Vn(Ja(t,E))||""),(m+"").charAt(1)==="="&&(m=Ja(t,E))):m=Ja(t,E),v=parseFloat(m),U=M==="string"&&_.charAt(1)==="="&&_.substr(0,2),U&&(_=_.substr(2)),g=parseFloat(_),E in Ta&&(E==="autoAlpha"&&(v===1&&Ja(t,"visibility")==="hidden"&&g&&(v=0),z.push("visibility",0,h.visibility),qr(this,h,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),E!=="scale"&&E!=="transform"&&(E=Ta[E],~E.indexOf(",")&&(E=E.split(",")[0]))),w=E in or,w){if(this.styles.save(E),R=_,M==="string"&&_.substring(0,6)==="var(--"){if(_=Ci(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=_,_=Ci(t,"perspective"),C?t.style.perspective=C:Jr(t,"perspective")}g=parseFloat(_)}if(b||(P=t._gsap,P.renderTransform&&!i.parseTransform||Pu(t,i.parseTransform),B=i.smoothOrigin!==!1&&P.smooth,b=this._pt=new ci(this._pt,h,tn,0,1,P.renderTransform,P,0,-1),b.dep=1),E==="scale")this._pt=new ci(this._pt,P,"scaleY",P.scaleY,(U?tl(P.scaleY,U+g):g)-P.scaleY||0,v_),this._pt.u=0,f.push("scaleY",E),E+="X";else if(E==="transformOrigin"){z.push(fi,0,h[fi]),_=gD(_),P.svg?S_(t,_,0,B,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==P.zOrigin&&qr(this,P,"zOrigin",P.zOrigin,x),qr(this,h,E,$f(m),$f(_)));continue}else if(E==="svgOrigin"){S_(t,_,1,B,0,this);continue}else if(E in eE){SD(this,P,E,v,U?tl(v,U+_):_);continue}else if(E==="smoothOrigin"){qr(this,P,"smooth",P.smooth,_);continue}else if(E==="force3D"){P[E]=_;continue}else if(E==="transform"){MD(this,_,t);continue}}else E in h||(E=dl(E)||E);if(w||(g||g===0)&&(v||v===0)&&!nD.test(_)&&E in h)y=(m+"").substr((v+"").length),g||(g=0),x=Vn(_)||(E in Di.units?Di.units[E]:y),y!==x&&(v=$r(t,E,m,x)),this._pt=new ci(this._pt,w?P:h,E,v,(U?tl(v,U+g):g)-v,!w&&(x==="px"||E==="zIndex")&&i.autoRound!==!1?sD:v_),this._pt.u=x||0,w&&R!==_?(this._pt.b=m,this._pt.e=R,this._pt.r=rD):y!==x&&x!=="%"&&(this._pt.b=m,this._pt.r=aD);else if(E in h)_D.call(this,t,E,m,U?U+_:_);else if(E in t)this.add(t,E,m||t[E],U?U+_:_,s,u);else if(E!=="parseTransform"){I_(E,_);continue}w||(E in h?z.push(E,0,h[E]):typeof t[E]=="function"?z.push(E,2,t[E]()):z.push(E,1,m||t[E])),f.push(E)}}N&&YM(this)},render:function(t,i){if(i.tween._time||!j_())for(var a=i._pt;a;)a.r(t,a.d),a=a._next;else i.styles.revert()},get:Ja,aliases:Ta,getSetter:function(t,i,a){var s=Ta[i];return s&&s.indexOf(",")<0&&(i=s),i in or&&i!==fi&&(t._gsap.x||Ja(t,"x"))?a&&MS===a?i==="scale"?cD:uD:(MS=a||{})&&(i==="scale"?fD:hD):t.style&&!O_(t.style[i])?oD:~i.indexOf("-")?lD:q_(t,i)},core:{_removeProperty:Jr,_getMatrix:K_}};hi.utils.checkPrefix=dl;hi.core.getStyleSaver=QM;(function(l,t,i,a){var s=ui(l+","+t+","+i,function(u){or[u]=1});ui(t,function(u){Di.units[u]="deg",eE[u]=1}),Ta[s[13]]=l+","+t,ui(a,function(u){var f=u.split(":");Ta[f[1]]=s[f[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){Di.units[l]="px"});hi.registerPlugin(aE);var Mu=hi.registerPlugin(aE)||hi;Mu.core.Tween;const ED=`
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec3 vViewPosition;
  varying vec3 vLocalPos;
  varying vec2 vUv;

  uniform float uTime;
  uniform float uPulse;

  // Simplex-like 3D wave displacement for subtle living cortical breath
  float waveField(vec3 p, float t) {
    return sin(p.x * 5.2 + t * 1.4) * cos(p.y * 4.8 - t * 1.1) * sin(p.z * 5.0 + t * 0.9);
  }

  void main() {
    vUv = uv;
    vLocalPos = position;

    float microRipple = waveField(position, uTime) * (0.008 + uPulse * 0.018);
    vec3 displaced = position + normal * microRipple;

    vec4 worldPos = modelMatrix * vec4(displaced, 1.0);
    vWorldPosition = worldPos.xyz;

    vec4 mvPosition = viewMatrix * worldPos;
    vViewPosition = -mvPosition.xyz;
    vNormal = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * mvPosition;
  }
`,TD=`
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec3 vViewPosition;
  varying vec3 vLocalPos;
  varying vec2 vUv;

  uniform float uTime;
  uniform float uMode;
  uniform float uPulse;
  uniform float uIntensity;
  uniform vec2 uPointer;

  // Smooth 3D procedural organic turbulence for neural plasma veins
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise3D(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(
        mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x),
        f.y
      ),
      mix(
        mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x),
        f.y
      ),
      f.z
    );
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.52;
    for (int i = 0; i < 4; i++) {
      v += a * noise3D(p);
      p = p * 2.08 + vec3(0.4, -0.3, 0.5);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewPosition);
    vec3 P = vLocalPos;

    // Fresnel rim dispersion
    float NoV = clamp(dot(N, V), 0.0, 1.0);
    float fresnel = pow(1.0 - NoV, 2.35);

    // Organic neural flow coordinates
    vec3 flowCoord = P * 2.15 + vec3(
      sin(uTime * 0.35 + uPointer.x * 0.8) * 0.45,
      cos(uTime * 0.28 + uPointer.y * 0.8) * 0.45,
      uTime * 0.22
    );
    float n1 = fbm(flowCoord);
    float n2 = fbm(flowCoord * 1.85 + vec3(n1 * 1.7));

    // Fine cortical vein ridges (bright white-cyan synaptic filaments)
    float veinPattern = pow(1.0 - abs(sin((P.y * 5.5 + n2 * 4.8 - uTime * 0.45) * 3.14159)), 7.0);

    // Base spectral palette matching Viktor Oddy's MindAI reference bust:
    // Deep electric cyan (#00E8FF), vivid royal blue (#284CFF), luminous magenta-violet (#E11DFF / #8C28FF),
    // and fiery solar orange/gold (#FF5500 / #FFE600) in thermal cortical hotspots.
    vec3 colCyan = vec3(0.0, 0.93, 1.0);
    vec3 colBlue = vec3(0.18, 0.34, 0.98);
    vec3 colViolet = vec3(0.58, 0.18, 0.96);
    vec3 colMagenta = vec3(1.0, 0.14, 0.68);
    vec3 colOrange = vec3(1.0, 0.32, 0.02);
    vec3 colYellow = vec3(1.0, 0.94, 0.28);

    // Shift palette subtly based on active mode (Vision=0, Lifestyle=1, Mind=2)
    if (uMode > 0.5 && uMode < 1.5) {
      colCyan = vec3(0.05, 0.98, 0.82);
      colMagenta = vec3(1.0, 0.28, 0.55);
    } else if (uMode >= 1.5) {
      colViolet = vec3(0.45, 0.12, 1.0);
      colOrange = vec3(1.0, 0.48, 0.05);
    }

    // Spatial anatomical thermal zones (matching the exact hotspots on forehead, temple, eye, cheek, and left clavicle)
    float hotspotForehead = exp(-length(P - vec3(-0.22, 0.98, 0.55)) * 2.6);
    float hotspotTemple = exp(-length(P - vec3(0.32, 0.72, 0.45)) * 2.3);
    float hotspotEyeBridge = exp(-length(P - vec3(0.05, 0.42, 0.78)) * 3.1);
    float hotspotClavicle = exp(-length(P - vec3(0.65, -1.65, 0.35)) * 2.2);
    float hotspotShoulderRight = exp(-length(P - vec3(-0.82, -1.78, 0.22)) * 2.5);

    float thermalHeat = clamp(
      (hotspotForehead * 1.15 + hotspotTemple * 0.95 + hotspotEyeBridge * 0.9 + hotspotClavicle * 1.2 + hotspotShoulderRight * 0.75)
      + (n2 - 0.48) * 0.75 + uPulse * 0.35,
      0.0,
      1.0
    );

    // Base cool-to-warm iridescent blend
    vec3 baseSpectrum = mix(colCyan, colBlue, smoothstep(0.15, 0.55, n1));
    baseSpectrum = mix(baseSpectrum, colViolet, smoothstep(0.32, 0.75, n2 + fresnel * 0.35));
    baseSpectrum = mix(baseSpectrum, colMagenta, smoothstep(0.45, 0.82, thermalHeat + n1 * 0.25));
    baseSpectrum = mix(baseSpectrum, colOrange, smoothstep(0.62, 0.88, thermalHeat));
    baseSpectrum = mix(baseSpectrum, colYellow, smoothstep(0.78, 0.98, thermalHeat));

    // Cyan-blue neck & jaw cool subsurface channel
    float neckCoolMask = smoothstep(0.35, -0.95, P.y) * (1.0 - hotspotClavicle * 0.85);
    baseSpectrum = mix(baseSpectrum, mix(colCyan, colViolet, n2 * 0.65), neckCoolMask * 0.55);

    // High-gloss studio key light & rim specular reflections (creating the sculpted porcelain/liquid-glass look)
    vec3 L1 = normalize(vec3(-0.55, 0.65, 0.85));
    vec3 L2 = normalize(vec3(0.75, 0.35, 0.55));
    vec3 H1 = normalize(L1 + V);
    vec3 H2 = normalize(L2 + V);

    float spec1 = pow(max(dot(N, H1), 0.0), 42.0);
    float spec2 = pow(max(dot(N, H2), 0.0), 24.0);
    float diffuse = max(dot(N, L1), 0.0) * 0.45 + 0.62;

    vec3 color = baseSpectrum * diffuse * uIntensity;

    // Add luminous cortical veins and Fresnel iridescent glaze
    color += mix(colCyan, vec3(1.0, 0.96, 1.0), 0.65) * veinPattern * (0.45 + uPulse * 0.4);
    color += mix(colCyan, colMagenta, sin(P.y * 3.0 + uTime) * 0.5 + 0.5) * fresnel * 0.68;
    color += vec3(1.0, 0.98, 1.0) * (spec1 * 0.88 + spec2 * 0.42);

    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
  }
`;function bD(){const i=new N_(1,1,3.9,180,180,!1),a=i.attributes.position,s=(u,f,h,p)=>Math.exp(-(u*u)/(2*h*h)-f*f/(2*p*p));for(let u=0;u<a.count;u++){const f=a.getX(u),h=a.getY(u),p=a.getZ(u),m=Math.atan2(f,p),_=Math.abs(m),g=(h+1.95)/3.9;let v=.5,M=.5,T=0,E=0;if(g<.25){const wt=g/.25,St=Math.pow(1-wt,.68);v=.37+St*1.28,M=.35+St*.42,T=-Math.abs(Math.sin(m))*St*.34}else if(g<.43){const wt=(g-.25)/.18,St=1-Math.sin(wt*Math.PI)*.08;v=.37*St,M=.39*St,E=(wt-.2)*.11}else{const wt=(g-.43)/.57,St=Math.sin(Math.pow(wt,.78)*Math.PI);if(v=.66*St+.015,M=.78*St+.015,_>1.35){const Z=Math.sin(Math.min(1,wt*1.15)*Math.PI);M+=Z*.14}const At=Math.max(0,1-wt/.34),Ae=Math.max(0,Math.cos(m*.85));M+=At*Math.pow(Ae,1.8)*.16,v-=At*.12,E=.09}const y=Math.sin(m),x=Math.cos(m);let U=y*v,w=h+T,b=x*M+E;const P=s(m,w-.46,.15,.22)*.155,B=s(m,w-.26,.12,.085)*.195,N=(s(m-.12,w-.22,.065,.055)+s(m+.12,w-.22,.065,.055))*.065,z=-s(m,w-.12,.07,.04)*.025,R=(s(m-.32,w-.67,.24,.065)+s(m+.32,w-.67,.24,.065)+s(m,w-.66,.14,.055)*.7)*.075,C=-s(m-.34,w-.53,.19,.095)*.095,H=-s(m+.34,w-.53,.19,.095)*.095,tt=s(m-.33,w-.53,.105,.048)*.072,J=s(m+.33,w-.53,.105,.048)*.072,rt=-(s(m-.33,w-.53,.11,.012)+s(m+.33,w-.53,.11,.012))*.018,st=(s(m-.58,w-.31,.26,.14)+s(m+.58,w-.31,.26,.14))*.088,G=-(s(m-.52,w-.02,.22,.13)+s(m+.52,w-.02,.22,.13))*.045,$=s(m,w-.04,.21,.038)*.082,Y=-s(m,w-.005,.23,.012)*.038,vt=s(m,w+.045,.19,.042)*.086,xt=-s(m,w+.11,.2,.035)*.035,zt=s(m,w+.21,.22,.085)*.11,Zt=(s(m-.88,w+.08,.22,.12)+s(m+.88,w+.08,.22,.12))*.055,fe=s(m-1.52,w-.36,.13,.2)*.115-s(m-1.48,w-.36,.06,.11)*.055,O=s(m+1.52,w-.36,.13,.2)*.115-s(m+1.48,w-.36,.06,.11)*.055,X=s(m-.42-(w+.8)*.35,w+.88,.16,.38)*.048,mt=s(m+.42+(w+.8)*.35,w+.88,.16,.38)*.048,ct=-s(m,w+1.22,.18,.12)*.065,bt=(s(m-.55,w+1.38,.38,.075)+s(m+.55,w+1.38,.38,.075))*.068,Ct=P+B+N+z+R+C+H+tt+J+rt+st+G+$+Y+vt+xt+zt+Zt+fe+O+X+mt+ct+bt;U+=y*Ct,b+=x*Ct,a.setXYZ(u,U,w,b)}return i.computeVertexNormals(),i}const AD=({mode:l,neuralPulse:t,shaderIntensity:i,compactLayout:a})=>{const s=Kn.useRef(null),u=Kn.useRef(null),f=Kn.useRef(null);return Kn.useEffect(()=>{const h=s.current;if(!h)return;const p=h.clientWidth||window.innerWidth,m=h.clientHeight||window.innerHeight,_=new n3,g=new Yi(30,p/m,.1,100);g.position.set(0,.12,6.2);const v=new e3({antialias:!0,alpha:!0,powerPreference:"high-performance"});v.setSize(p,m),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.innerHTML="",h.appendChild(v.domElement);const M={uTime:{value:0},uMode:{value:0},uPulse:{value:0},uIntensity:{value:1.05},uPointer:{value:new Ne(0,0)}};f.current=M;const T=bD(),E=new rr({vertexShader:ED,fragmentShader:TD,uniforms:M}),y=new Ea(T,E),x=new xu;x.add(y),x.rotation.y=-.44,x.rotation.x=.03,x.position.set(.18,-.34,0),u.current=x,_.add(x);const U=new Ne(0,0),w=z=>{const R=z.clientX/window.innerWidth*2-1,C=-(z.clientY/window.innerHeight)*2+1;U.set(R,C)};window.addEventListener("mousemove",w);const b=new i3;let P=0;const B=()=>{P=requestAnimationFrame(B);const z=b.getElapsedTime();if(M.uTime.value=z,M.uPointer.value.lerp(U,.06),u.current){const C=(a?-.26:-.44)+U.x*.16+Math.sin(z*.55)*.035,H=.03-U.y*.08+Math.cos(z*.45)*.02;u.current.rotation.y+=(C-u.current.rotation.y)*.06,u.current.rotation.x+=(H-u.current.rotation.x)*.06}v.render(_,g)};B();const N=()=>{if(!h)return;const z=h.clientWidth,R=h.clientHeight;g.aspect=z/R,g.updateProjectionMatrix(),v.setSize(z,R)};return window.addEventListener("resize",N),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("resize",N),cancelAnimationFrame(P),v.dispose()}},[]),Kn.useEffect(()=>{if(!f.current||!u.current)return;const h={Vision:0,Lifestyle:1,Mind:2};Mu.to(f.current.uMode,{value:h[l],duration:.9,ease:"power2.out"}),Mu.to(f.current.uIntensity,{value:i,duration:.5,ease:"power2.out"}),t>0&&Mu.fromTo(f.current.uPulse,{value:1.2},{value:0,duration:2.2,ease:"power3.out"}),Mu.to(u.current.position,{x:a?.05:.18,y:a?-.58:-.34,duration:.9,ease:"power3.out"})},[l,t,i,a]),Tt.jsx("div",{ref:s,className:"w-full h-full"})},_u={Experience:{title:"Multimodal Neural Synthesis",tag:"EXPERIENCE LAYER",summary:"MindAI translates visual intuition, spoken intent, and spatial gestures into real-time generative workflows with sub-12ms cognitive latency.",metrics:[{label:"Synaptic Frame Rate",value:"120 Hz"},{label:"Context Window",value:"2.4M Tokens"}]},Pricing:{title:"Adaptive Cognitive Tiers",tag:"COMPUTE ALLOCATION",summary:"Dedicated neural processing clusters scale elastically from solo creative studios to enterprise research laboratories.",metrics:[{label:"Studio Core",value:"$38 / mo"},{label:"Dedicated Cortex",value:"Custom SLA"}]},FAQ:{title:"System Architecture Answers",tag:"TECHNICAL FAQ",summary:"Zero-retention private weights ensure your proprietary visual and cognitive embeddings remain encrypted inside your local enclave.",metrics:[{label:"Enclave Isolation",value:"SOC2 + ISO"},{label:"Zero Data Training",value:"Verified"}]},Resources:{title:"Cognitive Model Benchmarks",tag:"RESEARCH LIBRARY",summary:"Explore interactive shader kernels, cross-modal attention maps, and spatial reasoning datasets curated by the MindAI research group.",metrics:[{label:"Vision-Mind Score",value:"98.4%"},{label:"Open Kernels",value:"42 Modules"}]},Support:{title:"24/7 Neural Engineering Desk",tag:"LIVE TELEMETRY SUPPORT",summary:"Direct access to systems engineers for custom pipeline integration, WebGL/WebGPU viewport tuning, and low-latency API routing.",metrics:[{label:"Median Response",value:"4 Minutes"},{label:"Global Uptime",value:"99.98%"}]},Doc:{title:"SDK & Cognitive Protocol",tag:"DEVELOPER DOCS",summary:"Stream real-time semantic vectors directly into Three.js, React, or native spatial computing runtimes with a three-line initialization.",metrics:[{label:"SDK Version",value:"v4.2 Stable"},{label:"Transport",value:"gRPC / WebRTC"}]}},RD={Vision:{headlineTop:"Where Your Mind",headlineMain:"Meets the ",headlineBold:"Impossible",bodyPrefix:"MindAI is a new way to interact with technology a ",bodyBold:"cognitive",bodySuffix:" system that understands your vision."},Lifestyle:{headlineTop:"Where Daily Flow",headlineMain:"Becomes ",headlineBold:"Effortless",bodyPrefix:"Ambient intelligence that adapts to your rhythm through a ",bodyBold:"cognitive",bodySuffix:" companion built for calm clarity."},Mind:{headlineTop:"Where Deep Thought",headlineMain:"Unlocks ",headlineBold:"Discovery",bodyPrefix:"Expand complex reasoning and spatial synthesis with a ",bodyBold:"cognitive",bodySuffix:" architecture that thinks alongside you."}},CD=()=>{const[l,t]=Kn.useState("Vision"),[i,a]=Kn.useState(!1),[s,u]=Kn.useState(!1),[f,h]=Kn.useState(1.06),[p,m]=Kn.useState(!1),[_,g]=Kn.useState(null),[v,M]=Kn.useState(""),[T,E]=Kn.useState(0),[y,x]=Kn.useState(null),U=()=>{const P=!i;a(P),document.documentElement.setAttribute("data-theme",P?"dark":"light")},w=P=>{P.preventDefault();const B=v.trim()||`Synthesize ${l.toLowerCase()} topology`;E(N=>N+1),x(`Cognitive Cortex [${l} Mode]: Synthesizing "${B}" across 128k multimodal attention nodes.`),M("")},b=RD[l];return Tt.jsxs("div",{className:`relative w-screen h-screen overflow-hidden select-none transition-colors duration-500 ${i?"bg-[#0D0B12] text-[#F5F2F7]":"bg-gradient-to-b from-[#F6F1F4] via-[#F2EDF1] to-[#ECE6EC] text-[#18151C]"}`,children:[Tt.jsx("div",{className:"absolute inset-0 z-10",children:Tt.jsx(AD,{mode:l,neuralPulse:T,shaderIntensity:f,compactLayout:s})}),Tt.jsxs("header",{className:"relative z-30 flex items-start justify-between px-7 sm:px-11 pt-7",children:[Tt.jsx("div",{className:"flex items-start gap-8 sm:gap-12",children:s?Tt.jsxs("button",{type:"button",onClick:()=>u(!1),"aria-label":"Expand Navigation Columns",className:`w-10 h-10 rounded-full border flex flex-col items-center justify-center gap-1 cursor-pointer transition ${i?"border-white/25 hover:bg-white/10":"border-black/20 hover:bg-black/5"}`,children:[Tt.jsx("span",{className:"w-3.5 h-[1.5px] bg-current"}),Tt.jsx("span",{className:"w-3.5 h-[1.5px] bg-current"})]}):Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("nav",{"aria-label":"Primary Navigation",className:"flex flex-col gap-1 text-[13.5px] leading-[1.45]",children:["Experience","Pricing","FAQ"].map(P=>Tt.jsx("button",{type:"button",onClick:()=>g(P),className:"text-left hover:opacity-65 transition cursor-pointer font-normal",children:P},P))}),Tt.jsx("nav",{"aria-label":"Secondary Navigation",className:"flex flex-col gap-1 text-[13.5px] leading-[1.45]",children:["Resources","Support","Doc"].map(P=>Tt.jsx("button",{type:"button",onClick:()=>g(P),className:"text-left hover:opacity-65 transition cursor-pointer font-normal",children:P},P))})]})}),Tt.jsx("button",{type:"button",onClick:()=>{E(P=>P+1),x(null)},"aria-label":"MindAI Core Monogram",className:"absolute left-1/2 -translate-x-1/2 top-7 cursor-pointer hover:scale-105 transition-transform",children:Tt.jsxs("svg",{width:"44",height:"26",viewBox:"0 0 46 28",fill:"none",children:[Tt.jsx("rect",{x:"1.5",y:"1.5",width:"43",height:"25",rx:"12.5",stroke:"currentColor",strokeWidth:"2.4"}),Tt.jsx("path",{d:"M21 7.2H14.2C10.3 7.2 7.2 10.2 7.2 14C7.2 17.8 10.3 20.8 14.2 20.8H19.5V14.2H14.5",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"}),Tt.jsx("path",{d:"M24.5 7.2H31.8C35.7 7.2 38.8 10.2 38.8 14C38.8 17.8 35.7 20.8 31.8 20.8H24.5V7.2Z",stroke:"currentColor",strokeWidth:"2.4",strokeLinejoin:"round"})]})}),Tt.jsxs("div",{className:"flex items-center gap-4",children:[Tt.jsx("button",{type:"button",onClick:U,"aria-label":"Toggle Dark and Light Mode",title:"Toggle Dark / Light Spectrum",className:"w-8 h-8 flex items-center justify-center hover:opacity-70 transition cursor-pointer",children:Tt.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:Tt.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),Tt.jsx("button",{type:"button",onClick:()=>u(P=>!P),"aria-label":"Toggle Centered Editorial Layout",title:"Switch Split / Centered Editorial Layout",className:`w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer shadow-md ${i?"bg-white text-[#0D0B12]":"bg-[#0E0D12] text-white"}`,children:Tt.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-current"})})]})]}),s?Tt.jsx("div",{className:"relative z-20 flex flex-col items-center text-center mt-8 px-6 pointer-events-none",children:Tt.jsxs("div",{className:"max-w-lg text-left",children:[Tt.jsxs("h1",{className:"text-[36px] sm:text-[44px] leading-[1.14] tracking-[-0.025em] font-light",children:[Tt.jsx("span",{className:"block",children:b.headlineTop}),Tt.jsxs("span",{className:"block",children:[b.headlineMain,Tt.jsx("strong",{className:"font-semibold",children:b.headlineBold})]})]}),Tt.jsxs("p",{className:"mt-4 text-[14.5px] leading-[1.55] opacity-85 max-w-md font-normal",children:[b.bodyPrefix,Tt.jsx("strong",{className:"font-semibold",children:b.bodyBold}),b.bodySuffix]})]})}):Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("div",{className:"absolute left-7 sm:left-11 top-[51%] -translate-y-1/2 z-20 max-w-md pointer-events-none",children:Tt.jsxs("h1",{className:"text-[38px] sm:text-[48px] leading-[1.15] tracking-[-0.025em] font-light",children:[Tt.jsx("span",{className:"block",children:b.headlineTop}),Tt.jsxs("span",{className:"block",children:[b.headlineMain,Tt.jsx("strong",{className:"font-semibold",children:b.headlineBold})]})]})}),Tt.jsx("div",{className:"absolute right-8 sm:right-14 top-[69%] -translate-y-1/2 z-20 max-w-[270px] pointer-events-none",children:Tt.jsxs("p",{className:"text-[13.5px] leading-[1.55] font-normal opacity-90",children:[b.bodyPrefix,Tt.jsx("strong",{className:"font-semibold",children:b.bodyBold}),b.bodySuffix]})})]}),y&&Tt.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-24 z-30 bg-[#1B1922]/90 backdrop-blur-xl text-white px-5 py-2.5 rounded-full text-xs border border-white/15 shadow-xl flex items-center gap-3 max-w-lg",children:[Tt.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00F0FF] animate-ping shrink-0"}),Tt.jsx("span",{className:"truncate",children:y}),Tt.jsx("button",{type:"button",onClick:()=>x(null),className:"text-white/60 hover:text-white ml-2 cursor-pointer",children:"Dismiss"})]}),Tt.jsxs("footer",{className:"absolute inset-x-0 bottom-5 px-7 sm:px-10 z-30 flex items-center justify-between",children:[Tt.jsxs("div",{className:"relative",children:[Tt.jsx("button",{type:"button",onClick:()=>m(P=>!P),"aria-label":"Adjust Iridescent Shader Intensity",className:`w-10 h-10 rounded-full border flex items-center justify-center transition cursor-pointer ${i?"border-white/25 hover:bg-white/10":"border-black/20 hover:bg-black/5"}`,children:Tt.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[Tt.jsx("circle",{cx:"12",cy:"12",r:"4"}),Tt.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]})}),p&&Tt.jsxs("div",{className:"absolute left-0 bottom-13 bg-[#1E1C26]/95 backdrop-blur-xl text-white p-4 rounded-2xl w-64 border border-white/15 shadow-2xl",children:[Tt.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold mb-2",children:[Tt.jsx("span",{children:"Thermal Iridescence"}),Tt.jsxs("span",{className:"text-[#00F0FF]",children:[Math.round(f*100),"%"]})]}),Tt.jsx("input",{type:"range",min:"0.7",max:"1.45",step:"0.05",value:f,onChange:P=>h(parseFloat(P.target.value)),className:"w-full accent-[#FF1E9A] cursor-pointer"}),Tt.jsx("button",{type:"button",onClick:()=>E(P=>P+1),className:"mt-3 w-full py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium cursor-pointer transition",children:"Trigger Synaptic Surge"})]})]}),Tt.jsxs("form",{onSubmit:w,className:"bg-[#26252D]/82 backdrop-blur-xl text-white rounded-full px-4 py-3 flex items-center justify-between gap-3 w-[280px] sm:w-[310px] shadow-2xl border border-white/15",children:[Tt.jsx("button",{type:"button",onClick:()=>E(P=>P+1),"aria-label":"Synthesize Neural Field",className:"text-white/70 hover:text-white transition cursor-pointer shrink-0",children:Tt.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[Tt.jsx("circle",{cx:"12",cy:"12",r:"10"}),Tt.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),Tt.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),Tt.jsx("input",{type:"text",value:v,onChange:P=>M(P.target.value),"aria-label":"Enter cognitive command",className:"bg-transparent text-[13px] text-white placeholder:text-white/60 focus:outline-none w-full text-center font-normal",placeholder:"Work with MindAI"}),Tt.jsx("button",{type:"submit","aria-label":"Voice or Submit Command",className:"text-white/75 hover:text-white transition cursor-pointer shrink-0",children:Tt.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[Tt.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}),Tt.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),Tt.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"})]})})]}),Tt.jsx("div",{className:"flex items-center gap-2",role:"group","aria-label":"Cognitive Spectrum Modes",children:["Vision","Lifestyle","Mind"].map(P=>{const B=l===P;return Tt.jsx("button",{type:"button",onClick:()=>{t(P),E(N=>N+1)},className:`px-4 py-1.5 rounded-full text-[12px] font-medium transition cursor-pointer border ${B?i?"bg-white text-[#0D0B12] border-white":"bg-[#18151C] text-white border-[#18151C]":i?"border-white/35 text-white/85 hover:border-white":"border-black/35 text-[#18151C]/85 hover:border-black"}`,children:P},P)})})]}),_&&_u[_]&&Tt.jsx("div",{className:"absolute inset-0 z-40 bg-black/35 backdrop-blur-sm flex items-center justify-center p-4",children:Tt.jsxs("div",{className:"bg-[#181520] text-white rounded-3xl p-7 max-w-md w-full border border-white/15 shadow-2xl",children:[Tt.jsxs("div",{className:"flex items-center justify-between",children:[Tt.jsx("span",{className:"text-[11px] font-semibold tracking-widest text-[#00F0FF]",children:_u[_].tag}),Tt.jsx("button",{type:"button",onClick:()=>g(null),className:"text-xs text-white/60 hover:text-white px-2.5 py-1 rounded-full bg-white/10 cursor-pointer",children:"Close"})]}),Tt.jsx("h2",{className:"text-2xl font-semibold mt-2",children:_u[_].title}),Tt.jsx("p",{className:"text-sm text-white/75 leading-relaxed mt-3",children:_u[_].summary}),Tt.jsx("div",{className:"grid grid-cols-2 gap-3 mt-6",children:_u[_].metrics.map(P=>Tt.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/5 border border-white/10",children:[Tt.jsx("div",{className:"text-xs text-white/55",children:P.label}),Tt.jsx("div",{className:"text-base font-semibold text-[#FF88E8] mt-1",children:P.value})]},P.label))})]})})]})};QT.createRoot(document.getElementById("root")).render(Tt.jsx(kT.StrictMode,{children:Tt.jsx(CD,{})}));
