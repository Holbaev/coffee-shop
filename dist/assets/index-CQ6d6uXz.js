(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pu(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ce={},os=[],Ht=()=>{},Dv=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gu=t=>t.startsWith("onUpdate:"),ut=Object.assign,mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ov=Object.prototype.hasOwnProperty,he=(t,e)=>Ov.call(t,e),Y=Array.isArray,as=t=>Sa(t)==="[object Map]",Np=t=>Sa(t)==="[object Set]",ee=t=>typeof t=="function",Ye=t=>typeof t=="string",Ms=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Dp=t=>(Pe(t)||ee(t))&&ee(t.then)&&ee(t.catch),Op=Object.prototype.toString,Sa=t=>Op.call(t),Vv=t=>Sa(t).slice(8,-1),Vp=t=>Sa(t)==="[object Object]",_u=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xv=/-(\w)/g,yn=Ca(t=>t.replace(xv,(e,n)=>n?n.toUpperCase():"")),Lv=/\B([A-Z])/g,Us=Ca(t=>t.replace(Lv,"-$1").toLowerCase()),Ra=Ca(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nc=Ca(t=>t?`on${Ra(t)}`:""),ir=(t,e)=>!Object.is(t,e),Vo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ul=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let od;const xp=()=>od||(od=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yu(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?Bv(r):yu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||Pe(t))return t}const Mv=/;(?![^(]*\))/g,Uv=/:([^]+)/,Fv=/\/\*[^]*?\*\//g;function Bv(t){const e={};return t.replace(Fv,"").split(Mv).forEach(n=>{if(n){const r=n.split(Uv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _s(t){let e="";if(Ye(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=_s(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qv=pu(jv);function Lp(t){return!!t||t===""}const Pt=t=>Ye(t)?t:t==null?"":Y(t)||Pe(t)&&(t.toString===Op||!ee(t.toString))?JSON.stringify(t,Mp,2):String(t),Mp=(t,e)=>e&&e.__v_isRef?Mp(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Dc(r,i)+" =>"]=s,n),{})}:Np(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Dc(n))}:Ms(e)?Dc(e):Pe(e)&&!Y(e)&&!Vp(e)?String(e):e,Dc=(t,e="")=>{var n;return Ms(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Hv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function zv(t,e=Wt){e&&e.active&&e.effects.push(t)}function $v(){return Wt}let Sr;class vu{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,zv(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,qr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Kv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Hr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=tr,n=Sr;try{return tr=!0,Sr=this,this._runnings++,ad(this),this.fn()}finally{cd(this),this._runnings--,Sr=n,tr=e}}stop(){var e;this.active&&(ad(this),cd(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Kv(t){return t.value}function ad(t){t._trackId++,t._depsLength=0}function cd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Up(t.deps[e],t);t.deps.length=t._depsLength}}function Up(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let tr=!0,hl=0;const Fp=[];function qr(){Fp.push(tr),tr=!1}function Hr(){const t=Fp.pop();tr=t===void 0?!0:t}function Eu(){hl++}function Au(){for(hl--;!hl&&dl.length;)dl.shift()()}function Bp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Up(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const dl=[];function jp(t,e,n){Eu();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&dl.push(r.scheduler)))}Au()}const qp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},fl=new WeakMap,Cr=Symbol(""),pl=Symbol("");function kt(t,e,n){if(tr&&Sr){let r=fl.get(t);r||fl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qp(()=>r.delete(n))),Bp(Sr,s)}}function kn(t,e,n,r,s,i){const o=fl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Ms(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?_u(n)&&a.push(o.get("length")):(a.push(o.get(Cr)),as(t)&&a.push(o.get(pl)));break;case"delete":Y(t)||(a.push(o.get(Cr)),as(t)&&a.push(o.get(pl)));break;case"set":as(t)&&a.push(o.get(Cr));break}Eu();for(const c of a)c&&jp(c,4);Au()}const Wv=pu("__proto__,__v_isRef,__isVue"),Hp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ms)),ld=Gv();function Gv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)kt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qr(),Eu();const r=te(this)[e].apply(this,n);return Au(),Hr(),r}}),t}function Qv(t){const e=te(this);return kt(e,"has",t),e.hasOwnProperty(t)}class zp{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cE:Gp:i?Wp:Kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Y(e);if(!s){if(o&&he(ld,n))return Reflect.get(ld,n,r);if(n==="hasOwnProperty")return Qv}const a=Reflect.get(e,n,r);return(Ms(n)?Hp.has(n):Wv(n))||(s||kt(e,"get",n),i)?a:Nt(a)?o&&_u(n)?a:a.value:Pe(a)?s?Yp(a):et(a):a}}class $p extends zp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=ys(i);if(!Yo(r)&&!ys(r)&&(i=te(i),r=te(r)),!Y(e)&&Nt(i)&&!Nt(r))return c?!1:(i.value=r,!0)}const o=Y(e)&&_u(n)?Number(n)<e.length:he(e,n),a=Reflect.set(e,n,r,s);return e===te(s)&&(o?ir(r,i)&&kn(e,"set",n,r):kn(e,"add",n,r)),a}deleteProperty(e,n){const r=he(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&kn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ms(n)||!Hp.has(n))&&kt(e,"has",n),r}ownKeys(e){return kt(e,"iterate",Y(e)?"length":Cr),Reflect.ownKeys(e)}}class Yv extends zp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xv=new $p,Jv=new Yv,Zv=new $p(!0),wu=t=>t,ba=t=>Reflect.getPrototypeOf(t);function _o(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(ir(e,i)&&kt(s,"get",e),kt(s,"get",i));const{has:o}=ba(s),a=r?wu:n?Su:wi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function yo(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(ir(t,s)&&kt(r,"has",t),kt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function vo(t,e=!1){return t=t.__v_raw,!e&&kt(te(t),"iterate",Cr),Reflect.get(t,"size",t)}function ud(t){t=te(t);const e=te(this);return ba(e).has.call(e,t)||(e.add(t),kn(e,"add",t,t)),this}function hd(t,e){e=te(e);const n=te(this),{has:r,get:s}=ba(n);let i=r.call(n,t);i||(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ir(e,o)&&kn(n,"set",t,e):kn(n,"add",t,e),this}function dd(t){const e=te(this),{has:n,get:r}=ba(e);let s=n.call(e,t);s||(t=te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&kn(e,"delete",t,void 0),i}function fd(){const t=te(this),e=t.size!==0,n=t.clear();return e&&kn(t,"clear",void 0,void 0),n}function Eo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),c=e?wu:t?Su:wi;return!t&&kt(a,"iterate",Cr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ao(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=as(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?wu:e?Su:wi;return!e&&kt(i,"iterate",c?pl:Cr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function qn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function eE(){const t={get(i){return _o(this,i)},get size(){return vo(this)},has:yo,add:ud,set:hd,delete:dd,clear:fd,forEach:Eo(!1,!1)},e={get(i){return _o(this,i,!1,!0)},get size(){return vo(this)},has:yo,add:ud,set:hd,delete:dd,clear:fd,forEach:Eo(!1,!0)},n={get(i){return _o(this,i,!0)},get size(){return vo(this,!0)},has(i){return yo.call(this,i,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:Eo(!0,!1)},r={get(i){return _o(this,i,!0,!0)},get size(){return vo(this,!0)},has(i){return yo.call(this,i,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:Eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ao(i,!1,!1),n[i]=Ao(i,!0,!1),e[i]=Ao(i,!1,!0),r[i]=Ao(i,!0,!0)}),[t,n,e,r]}const[tE,nE,rE,sE]=eE();function Tu(t,e){const n=e?t?sE:rE:t?nE:tE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(he(n,s)&&s in r?n:r,s,i)}const iE={get:Tu(!1,!1)},oE={get:Tu(!1,!0)},aE={get:Tu(!0,!1)},Kp=new WeakMap,Wp=new WeakMap,Gp=new WeakMap,cE=new WeakMap;function lE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uE(t){return t.__v_skip||!Object.isExtensible(t)?0:lE(Vv(t))}function et(t){return ys(t)?t:Iu(t,!1,Xv,iE,Kp)}function Qp(t){return Iu(t,!1,Zv,oE,Wp)}function Yp(t){return Iu(t,!0,Jv,aE,Gp)}function Iu(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=uE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function cs(t){return ys(t)?cs(t.__v_raw):!!(t&&t.__v_isReactive)}function ys(t){return!!(t&&t.__v_isReadonly)}function Yo(t){return!!(t&&t.__v_isShallow)}function Xp(t){return cs(t)||ys(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Jp(t){return Object.isExtensible(t)&&Qo(t,"__v_skip",!0),t}const wi=t=>Pe(t)?et(t):t,Su=t=>Pe(t)?Yp(t):t;class Zp{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new vu(()=>e(this._value),()=>xo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return(!e._cacheable||e.effect.dirty)&&ir(e._value,e._value=e.effect.run())&&xo(e,4),eg(e),e.effect._dirtyLevel>=2&&xo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function hE(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=Ht):(r=t.get,s=t.set),new Zp(r,s,i||!s,n)}function eg(t){var e;tr&&Sr&&(t=te(t),Bp(Sr,(e=t.dep)!=null?e:t.dep=qp(()=>t.dep=void 0,t instanceof Zp?t:void 0)))}function xo(t,e=4,n){t=te(t);const r=t.dep;r&&jp(r,e)}function Nt(t){return!!(t&&t.__v_isRef===!0)}function me(t){return tg(t,!1)}function dE(t){return tg(t,!0)}function tg(t,e){return Nt(t)?t:new fE(t,e)}class fE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:wi(e)}get value(){return eg(this),this._value}set value(e){const n=this.__v_isShallow||Yo(e)||ys(e);e=n?e:te(e),ir(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wi(e),xo(this,4))}}function Rr(t){return Nt(t)?t.value:t}const pE={get:(t,e,n)=>Rr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Nt(s)&&!Nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ng(t){return cs(t)?t:new Proxy(t,pE)}/**
* @vue/runtime-core v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Pa(i,e,n)}return s}function Qt(t,e,n,r){if(ee(t)){const i=nr(t,e,n,r);return i&&Dp(i)&&i.catch(o=>{Pa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}function Pa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){nr(c,null,10,[t,o,a]);return}}gE(t,n,s,r)}function gE(t,e,n,r=!0){console.error(t)}let Ti=!1,gl=!1;const gt=[];let sn=0;const ls=[];let $n=null,yr=0;const rg=Promise.resolve();let Cu=null;function zi(t){const e=Cu||rg;return t?e.then(this?t.bind(this):t):e}function mE(t){let e=sn+1,n=gt.length;for(;e<n;){const r=e+n>>>1,s=gt[r],i=Ii(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ru(t){(!gt.length||!gt.includes(t,Ti&&t.allowRecurse?sn+1:sn))&&(t.id==null?gt.push(t):gt.splice(mE(t.id),0,t),sg())}function sg(){!Ti&&!gl&&(gl=!0,Cu=rg.then(og))}function _E(t){const e=gt.indexOf(t);e>sn&&gt.splice(e,1)}function yE(t){Y(t)?ls.push(...t):(!$n||!$n.includes(t,t.allowRecurse?yr+1:yr))&&ls.push(t),sg()}function pd(t,e,n=Ti?sn+1:0){for(;n<gt.length;n++){const r=gt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;gt.splice(n,1),n--,r()}}}function ig(t){if(ls.length){const e=[...new Set(ls)].sort((n,r)=>Ii(n)-Ii(r));if(ls.length=0,$n){$n.push(...e);return}for($n=e,yr=0;yr<$n.length;yr++)$n[yr]();$n=null,yr=0}}const Ii=t=>t.id==null?1/0:t.id,vE=(t,e)=>{const n=Ii(t)-Ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function og(t){gl=!1,Ti=!0,gt.sort(vE);try{for(sn=0;sn<gt.length;sn++){const e=gt[sn];e&&e.active!==!1&&nr(e,null,14)}}finally{sn=0,gt.length=0,ig(),Ti=!1,Cu=null,(gt.length||ls.length)&&og()}}function EE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ce;d&&(s=n.map(g=>Ye(g)?g.trim():g)),h&&(s=n.map(ul))}let a,c=r[a=Nc(e)]||r[a=Nc(yn(e))];!c&&i&&(c=r[a=Nc(Us(e))]),c&&Qt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qt(l,t,6,s)}}function ag(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=ag(l,e,!0);u&&(a=!0,ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Pe(t)&&r.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):ut(o,i),Pe(t)&&r.set(t,o),o)}function ka(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Us(e))||he(t,e))}let Ze=null,Na=null;function Xo(t){const e=Ze;return Ze=t,Na=t&&t.type.__scopeId||null,e}function Zt(t){Na=t}function en(){Na=null}function We(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sd(-1);const i=Xo(e);let o;try{o=t(...s)}finally{Xo(i),r._d&&Sd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:w}=t;let E,C;const b=Xo(t);try{if(n.shapeFlag&4){const M=s||r,Z=M;E=rn(u.call(Z,M,h,i,g,d,y)),C=c}else{const M=e;E=rn(M.length>1?M(i,{attrs:c,slots:a,emit:l}):M(i,null)),C=e.props?c:AE(c)}}catch(M){ui.length=0,Pa(M,t,1),E=q(vs)}let N=E;if(C&&w!==!1){const M=Object.keys(C),{shapeFlag:Z}=N;M.length&&Z&7&&(o&&M.some(gu)&&(C=wE(C,o)),N=Dn(N,C))}return n.dirs&&(N=Dn(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),E=N,Xo(b),E}const AE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},wE=(t,e)=>{const n={};for(const r in t)(!gu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function TE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?gd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ka(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?gd(r,o,l):!0:!!o;return!1}function gd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ka(n,i))return!0}return!1}function IE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cg="components";function Ue(t,e){return CE(cg,t,!0,e)||t}const SE=Symbol.for("v-ndc");function CE(t,e,n=!0,r=!1){const s=Ze||mt;if(s){const i=s.type;if(t===cg){const a=v1(i,!1);if(a&&(a===e||a===yn(e)||a===Ra(yn(e))))return i}const o=md(s[t]||i[t],e)||md(s.appContext[t],e);return!o&&r?i:o}}function md(t,e){return t&&(t[e]||t[yn(e)]||t[Ra(yn(e))])}const RE=t=>t.__isSuspense;function bE(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):yE(t)}const PE=Symbol.for("v-scx"),kE=()=>Te(PE);function Lo(t,e){return bu(t,null,e)}const wo={};function br(t,e,n){return bu(t,e,n)}function bu(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ce){if(e&&i){const B=e;e=(...fe)=>{B(...fe),Z()}}const c=mt,l=B=>r===!0?B:Er(B,r===!1?1:void 0);let u,h=!1,d=!1;if(Nt(t)?(u=()=>t.value,h=Yo(t)):cs(t)?(u=()=>l(t),h=!0):Y(t)?(d=!0,h=t.some(B=>cs(B)||Yo(B)),u=()=>t.map(B=>{if(Nt(B))return B.value;if(cs(B))return l(B);if(ee(B))return nr(B,c,2)})):ee(t)?e?u=()=>nr(t,c,2):u=()=>(g&&g(),Qt(t,c,3,[y])):u=Ht,e&&r){const B=u;u=()=>Er(B())}let g,y=B=>{g=N.onStop=()=>{nr(B,c,4),g=N.onStop=void 0}},w;if(Ma)if(y=Ht,e?n&&Qt(e,c,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const B=kE();w=B.__watcherHandles||(B.__watcherHandles=[])}else return Ht;let E=d?new Array(t.length).fill(wo):wo;const C=()=>{if(!(!N.active||!N.dirty))if(e){const B=N.run();(r||h||(d?B.some((fe,ke)=>ir(fe,E[ke])):ir(B,E)))&&(g&&g(),Qt(e,c,3,[B,E===wo?void 0:d&&E[0]===wo?[]:E,y]),E=B)}else N.run()};C.allowRecurse=!!e;let b;s==="sync"?b=C:s==="post"?b=()=>Rt(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),b=()=>Ru(C));const N=new vu(u,Ht,b),M=$v(),Z=()=>{N.stop(),M&&mu(M.effects,N)};return e?n?C():E=N.run():s==="post"?Rt(N.run.bind(N),c&&c.suspense):N.run(),w&&w.push(Z),Z}function NE(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?lg(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Ki(this),a=bu(s,i.bind(r),n);return o(),a}function lg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Er(t,e,n=0,r){if(!Pe(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Nt(t))Er(t.value,e,n,r);else if(Y(t))for(let s=0;s<t.length;s++)Er(t[s],e,n,r);else if(Np(t)||as(t))t.forEach(s=>{Er(s,e,n,r)});else if(Vp(t))for(const s in t)Er(t[s],e,n,r);return t}function un(t,e){if(Ze===null)return t;const n=Ua(Ze)||Ze.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Ce]=e[s];i&&(ee(i)&&(i={mounted:i,updated:i}),i.deep&&Er(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(qr(),Qt(c,n,8,[t.el,a,t,e]),Hr())}}/*! #__NO_SIDE_EFFECTS__ */function Ln(t,e){return ee(t)?ut({name:t.name},e,{setup:t}):t}const ai=t=>!!t.type.__asyncLoader,ug=t=>t.type.__isKeepAlive;function DE(t,e){hg(t,"a",e)}function OE(t,e){hg(t,"da",e)}function hg(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Da(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ug(s.parent.vnode)&&VE(r,e,n,s),s=s.parent}}function VE(t,e,n,r){const s=Da(e,t,r,!0);$i(()=>{mu(r[e],s)},n)}function Da(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qr();const a=Ki(n),c=Qt(e,n,t,o);return a(),Hr(),c});return r?s.unshift(i):s.push(i),i}}const Mn=t=>(e,n=mt)=>(!Ma||t==="sp")&&Da(t,(...r)=>e(...r),n),xE=Mn("bm"),Oa=Mn("m"),LE=Mn("bu"),ME=Mn("u"),UE=Mn("bum"),$i=Mn("um"),FE=Mn("sp"),BE=Mn("rtg"),jE=Mn("rtc");function qE(t,e=mt){Da("ec",t,e)}function Va(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||Ye(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function HE(t,e,n={},r,s){if(Ze.isCE||Ze.parent&&ai(Ze.parent)&&Ze.parent.isCE)return e!=="default"&&(n.name=e),q("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),re();const o=i&&dg(i(n)),a=Dr(it,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function dg(t){return t.some(e=>Es(e)?!(e.type===vs||e.type===it&&!dg(e.children)):!0)?t:null}const ml=t=>t?Ig(t)?Ua(t)||t.proxy:ml(t.parent):null,ci=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ml(t.parent),$root:t=>ml(t.root),$emit:t=>t.emit,$options:t=>Pu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ru(t.update)}),$nextTick:t=>t.n||(t.n=zi.bind(t.proxy)),$watch:t=>NE.bind(t)}),Vc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&he(t,e),zE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vc(r,e))return o[e]=1,r[e];if(s!==Ce&&he(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&he(l,e))return o[e]=3,i[e];if(n!==Ce&&he(n,e))return o[e]=4,n[e];_l&&(o[e]=0)}}const u=ci[e];let h,d;if(u)return e==="$attrs"&&kt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&he(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,he(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vc(s,e)?(s[e]=n,!0):r!==Ce&&he(r,e)?(r[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&he(t,o)||Vc(e,o)||(a=i[0])&&he(a,o)||he(r,o)||he(ci,o)||he(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _d(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _l=!0;function $E(t){const e=Pu(t),n=t.proxy,r=t.ctx;_l=!1,e.beforeCreate&&yd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:w,deactivated:E,beforeDestroy:C,beforeUnmount:b,destroyed:N,unmounted:M,render:Z,renderTracked:B,renderTriggered:fe,errorCaptured:ke,serverPrefetch:Se,expose:Fe,inheritAttrs:Dt,components:Et,directives:At,filters:Sn}=e;if(l&&KE(l,r,null),o)for(const pe in o){const ue=o[pe];ee(ue)&&(r[pe]=ue.bind(n))}if(s){const pe=s.call(n,n);Pe(pe)&&(t.data=et(pe))}if(_l=!0,i)for(const pe in i){const ue=i[pe],jt=ee(ue)?ue.bind(n,n):ee(ue.get)?ue.get.bind(n,n):Ht,zt=!ee(ue)&&ee(ue.set)?ue.set.bind(n):Ht,Ot=ve({get:jt,set:zt});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:De=>Ot.value=De})}if(a)for(const pe in a)fg(a[pe],r,n,pe);if(c){const pe=ee(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ue=>{xt(ue,pe[ue])})}u&&yd(u,t,"c");function Be(pe,ue){Y(ue)?ue.forEach(jt=>pe(jt.bind(n))):ue&&pe(ue.bind(n))}if(Be(xE,h),Be(Oa,d),Be(LE,g),Be(ME,y),Be(DE,w),Be(OE,E),Be(qE,ke),Be(jE,B),Be(BE,fe),Be(UE,b),Be($i,M),Be(FE,Se),Y(Fe))if(Fe.length){const pe=t.exposed||(t.exposed={});Fe.forEach(ue=>{Object.defineProperty(pe,ue,{get:()=>n[ue],set:jt=>n[ue]=jt})})}else t.exposed||(t.exposed={});Z&&t.render===Ht&&(t.render=Z),Dt!=null&&(t.inheritAttrs=Dt),Et&&(t.components=Et),At&&(t.directives=At)}function KE(t,e,n=Ht){Y(t)&&(t=yl(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=Te(s.from||r,s.default,!0):i=Te(s.from||r):i=Te(s),Nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function yd(t,e,n){Qt(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fg(t,e,n,r){const s=r.includes(".")?lg(n,r):()=>n[r];if(Ye(t)){const i=e[t];ee(i)&&br(s,i)}else if(ee(t))br(s,t.bind(n));else if(Pe(t))if(Y(t))t.forEach(i=>fg(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&br(s,i,t)}}function Pu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Jo(c,l,o,!0)),Jo(c,e,o)),Pe(e)&&i.set(e,c),c}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=WE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const WE={data:vd,props:Ed,emits:Ed,methods:Zs,computed:Zs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Zs,directives:Zs,watch:QE,provide:vd,inject:GE};function vd(t,e){return e?t?function(){return ut(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function GE(t,e){return Zs(yl(t),yl(e))}function yl(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?ut(Object.create(null),t,e):e}function Ed(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:ut(Object.create(null),_d(t),_d(e??{})):e}function QE(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function pg(){return{app:null,config:{isNativeTag:Dv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let YE=0;function XE(t,e){return function(r,s=null){ee(r)||(r=ut({},r)),s!=null&&!Pe(s)&&(s=null);const i=pg(),o=new WeakSet;let a=!1;const c=i.app={_uid:YE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:A1,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=q(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ua(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=li;li=c;try{return l()}finally{li=u}}};return c}}let li=null;function xt(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function Te(t,e,n=!1){const r=mt||Ze;if(r||li){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:li._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r&&r.proxy):e}}function JE(t,e,n,r=!1){const s={},i={};Qo(i,La,1),t.propsDefaults=Object.create(null),gg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ZE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ka(t.emitsOptions,d))continue;const g=e[d];if(c)if(he(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const y=yn(d);s[y]=vl(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{gg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!he(e,h)&&((u=Us(h))===h||!he(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=vl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!he(e,h))&&(delete i[h],l=!0)}l&&kn(t,"set","$attrs")}function gg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oi(c))continue;const l=e[c];let u;s&&he(s,u=yn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ka(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=te(n),l=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=vl(s,c,h,l[h],t,!he(l,h))}}return o}function vl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ee(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Ki(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Us(n))&&(r=!0))}return r}function mg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[d,g]=mg(h,e,!0);ut(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Pe(t)&&r.set(t,os),os;if(Y(i))for(let u=0;u<i.length;u++){const h=yn(i[u]);Ad(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=yn(u);if(Ad(h)){const d=i[u],g=o[h]=Y(d)||ee(d)?{type:d}:ut({},d);if(g){const y=Id(Boolean,g.type),w=Id(String,g.type);g[0]=y>-1,g[1]=w<0||y<w,(y>-1||he(g,"default"))&&a.push(h)}}}const l=[o,a];return Pe(t)&&r.set(t,l),l}function Ad(t){return t[0]!=="$"&&!oi(t)}function wd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Td(t,e){return wd(t)===wd(e)}function Id(t,e){return Y(e)?e.findIndex(n=>Td(n,t)):ee(e)&&Td(e,t)?0:-1}const _g=t=>t[0]==="_"||t==="$stable",ku=t=>Y(t)?t.map(rn):[rn(t)],e1=(t,e,n)=>{if(e._n)return e;const r=We((...s)=>ku(e(...s)),n);return r._c=!1,r},yg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_g(s))continue;const i=t[s];if(ee(i))e[s]=e1(s,i,r);else if(i!=null){const o=ku(i);e[s]=()=>o}}},vg=(t,e)=>{const n=ku(e);t.slots.default=()=>n},t1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),Qo(e,"_",n)):yg(e,t.slots={})}else t.slots={},e&&vg(t,e);Qo(t.slots,La,1)},n1=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ut(s,e),!n&&a===1&&delete s._):(i=!e.$stable,yg(e,s)),o=e}else e&&(vg(t,e),o={default:1});if(i)for(const a in s)!_g(a)&&o[a]==null&&delete s[a]};function El(t,e,n,r,s=!1){if(Y(t)){t.forEach((d,g)=>El(d,e&&(Y(e)?e[g]:e),n,r,s));return}if(ai(r)&&!s)return;const i=r.shapeFlag&4?Ua(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ye(l)?(u[l]=null,he(h,l)&&(h[l]=null)):Nt(l)&&(l.value=null)),ee(c))nr(c,a,12,[o,u]);else{const d=Ye(c),g=Nt(c);if(d||g){const y=()=>{if(t.f){const w=d?he(h,c)?h[c]:u[c]:c.value;s?Y(w)&&mu(w,i):Y(w)?w.includes(i)||w.push(i):d?(u[c]=[i],he(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,he(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Rt(y,n)):y()}}}const Rt=bE;function r1(t){return s1(t)}function s1(t,e){const n=xp();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ht,insertStaticContent:y}=t,w=(p,f,_,v=null,A=null,k=null,O=void 0,P=null,D=!!f.dynamicChildren)=>{if(p===f)return;p&&!Ws(p,f)&&(v=T(p),De(p,A,k,!0),p=null),f.patchFlag===-2&&(D=!1,f.dynamicChildren=null);const{type:S,ref:F,shapeFlag:$}=f;switch(S){case xa:E(p,f,_,v);break;case vs:C(p,f,_,v);break;case Mo:p==null&&b(f,_,v,O);break;case it:Et(p,f,_,v,A,k,O,P,D);break;default:$&1?Z(p,f,_,v,A,k,O,P,D):$&6?At(p,f,_,v,A,k,O,P,D):($&64||$&128)&&S.process(p,f,_,v,A,k,O,P,D,j)}F!=null&&A&&El(F,p&&p.ref,k,f||p,!f)},E=(p,f,_,v)=>{if(p==null)r(f.el=a(f.children),_,v);else{const A=f.el=p.el;f.children!==p.children&&l(A,f.children)}},C=(p,f,_,v)=>{p==null?r(f.el=c(f.children||""),_,v):f.el=p.el},b=(p,f,_,v)=>{[p.el,p.anchor]=y(p.children,f,_,v,p.el,p.anchor)},N=({el:p,anchor:f},_,v)=>{let A;for(;p&&p!==f;)A=d(p),r(p,_,v),p=A;r(f,_,v)},M=({el:p,anchor:f})=>{let _;for(;p&&p!==f;)_=d(p),s(p),p=_;s(f)},Z=(p,f,_,v,A,k,O,P,D)=>{f.type==="svg"?O="svg":f.type==="math"&&(O="mathml"),p==null?B(f,_,v,A,k,O,P,D):Se(p,f,A,k,O,P,D)},B=(p,f,_,v,A,k,O,P)=>{let D,S;const{props:F,shapeFlag:$,transition:z,dirs:X}=p;if(D=p.el=o(p.type,k,F&&F.is,F),$&8?u(D,p.children):$&16&&ke(p.children,D,null,v,A,xc(p,k),O,P),X&&gr(p,null,v,"created"),fe(D,p,p.scopeId,O,v),F){for(const we in F)we!=="value"&&!oi(we)&&i(D,we,null,F[we],k,p.children,v,A,Ke);"value"in F&&i(D,"value",null,F.value,k),(S=F.onVnodeBeforeMount)&&nn(S,v,p)}X&&gr(p,null,v,"beforeMount");const ie=i1(A,z);ie&&z.beforeEnter(D),r(D,f,_),((S=F&&F.onVnodeMounted)||ie||X)&&Rt(()=>{S&&nn(S,v,p),ie&&z.enter(D),X&&gr(p,null,v,"mounted")},A)},fe=(p,f,_,v,A)=>{if(_&&g(p,_),v)for(let k=0;k<v.length;k++)g(p,v[k]);if(A){let k=A.subTree;if(f===k){const O=A.vnode;fe(p,O,O.scopeId,O.slotScopeIds,A.parent)}}},ke=(p,f,_,v,A,k,O,P,D=0)=>{for(let S=D;S<p.length;S++){const F=p[S]=P?Kn(p[S]):rn(p[S]);w(null,F,f,_,v,A,k,O,P)}},Se=(p,f,_,v,A,k,O)=>{const P=f.el=p.el;let{patchFlag:D,dynamicChildren:S,dirs:F}=f;D|=p.patchFlag&16;const $=p.props||Ce,z=f.props||Ce;let X;if(_&&mr(_,!1),(X=z.onVnodeBeforeUpdate)&&nn(X,_,f,p),F&&gr(f,p,_,"beforeUpdate"),_&&mr(_,!0),S?Fe(p.dynamicChildren,S,P,_,v,xc(f,A),k):O||ue(p,f,P,null,_,v,xc(f,A),k,!1),D>0){if(D&16)Dt(P,f,$,z,_,v,A);else if(D&2&&$.class!==z.class&&i(P,"class",null,z.class,A),D&4&&i(P,"style",$.style,z.style,A),D&8){const ie=f.dynamicProps;for(let we=0;we<ie.length;we++){const be=ie[we],Xe=$[be],Kt=z[be];(Kt!==Xe||be==="value")&&i(P,be,Xe,Kt,A,p.children,_,v,Ke)}}D&1&&p.children!==f.children&&u(P,f.children)}else!O&&S==null&&Dt(P,f,$,z,_,v,A);((X=z.onVnodeUpdated)||F)&&Rt(()=>{X&&nn(X,_,f,p),F&&gr(f,p,_,"updated")},v)},Fe=(p,f,_,v,A,k,O)=>{for(let P=0;P<f.length;P++){const D=p[P],S=f[P],F=D.el&&(D.type===it||!Ws(D,S)||D.shapeFlag&70)?h(D.el):_;w(D,S,F,null,v,A,k,O,!0)}},Dt=(p,f,_,v,A,k,O)=>{if(_!==v){if(_!==Ce)for(const P in _)!oi(P)&&!(P in v)&&i(p,P,_[P],null,O,f.children,A,k,Ke);for(const P in v){if(oi(P))continue;const D=v[P],S=_[P];D!==S&&P!=="value"&&i(p,P,S,D,O,f.children,A,k,Ke)}"value"in v&&i(p,"value",_.value,v.value,O)}},Et=(p,f,_,v,A,k,O,P,D)=>{const S=f.el=p?p.el:a(""),F=f.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:z,slotScopeIds:X}=f;X&&(P=P?P.concat(X):X),p==null?(r(S,_,v),r(F,_,v),ke(f.children||[],_,F,A,k,O,P,D)):$>0&&$&64&&z&&p.dynamicChildren?(Fe(p.dynamicChildren,z,_,A,k,O,P),(f.key!=null||A&&f===A.subTree)&&Eg(p,f,!0)):ue(p,f,_,F,A,k,O,P,D)},At=(p,f,_,v,A,k,O,P,D)=>{f.slotScopeIds=P,p==null?f.shapeFlag&512?A.ctx.activate(f,_,v,O,D):Sn(f,_,v,A,k,O,D):Bn(p,f,D)},Sn=(p,f,_,v,A,k,O)=>{const P=p.component=p1(p,v,A);if(ug(p)&&(P.ctx.renderer=j),g1(P),P.asyncDep){if(A&&A.registerDep(P,Be),!p.el){const D=P.subTree=q(vs);C(null,D,f,_)}}else Be(P,p,f,_,A,k,O)},Bn=(p,f,_)=>{const v=f.component=p.component;if(TE(p,f,_))if(v.asyncDep&&!v.asyncResolved){pe(v,f,_);return}else v.next=f,_E(v.update),v.effect.dirty=!0,v.update();else f.el=p.el,v.vnode=f},Be=(p,f,_,v,A,k,O)=>{const P=()=>{if(p.isMounted){let{next:F,bu:$,u:z,parent:X,vnode:ie}=p;{const Yr=Ag(p);if(Yr){F&&(F.el=ie.el,pe(p,F,O)),Yr.asyncDep.then(()=>{p.isUnmounted||P()});return}}let we=F,be;mr(p,!1),F?(F.el=ie.el,pe(p,F,O)):F=ie,$&&Vo($),(be=F.props&&F.props.onVnodeBeforeUpdate)&&nn(be,X,F,ie),mr(p,!0);const Xe=Oc(p),Kt=p.subTree;p.subTree=Xe,w(Kt,Xe,h(Kt.el),T(Kt),p,A,k),F.el=Xe.el,we===null&&IE(p,Xe.el),z&&Rt(z,A),(be=F.props&&F.props.onVnodeUpdated)&&Rt(()=>nn(be,X,F,ie),A)}else{let F;const{el:$,props:z}=f,{bm:X,m:ie,parent:we}=p,be=ai(f);if(mr(p,!1),X&&Vo(X),!be&&(F=z&&z.onVnodeBeforeMount)&&nn(F,we,f),mr(p,!0),$&&Ae){const Xe=()=>{p.subTree=Oc(p),Ae($,p.subTree,p,A,null)};be?f.type.__asyncLoader().then(()=>!p.isUnmounted&&Xe()):Xe()}else{const Xe=p.subTree=Oc(p);w(null,Xe,_,v,p,A,k),f.el=Xe.el}if(ie&&Rt(ie,A),!be&&(F=z&&z.onVnodeMounted)){const Xe=f;Rt(()=>nn(F,we,Xe),A)}(f.shapeFlag&256||we&&ai(we.vnode)&&we.vnode.shapeFlag&256)&&p.a&&Rt(p.a,A),p.isMounted=!0,f=_=v=null}},D=p.effect=new vu(P,Ht,()=>Ru(S),p.scope),S=p.update=()=>{D.dirty&&D.run()};S.id=p.uid,mr(p,!0),S()},pe=(p,f,_)=>{f.component=p;const v=p.vnode.props;p.vnode=f,p.next=null,ZE(p,f.props,v,_),n1(p,f.children,_),qr(),pd(p),Hr()},ue=(p,f,_,v,A,k,O,P,D=!1)=>{const S=p&&p.children,F=p?p.shapeFlag:0,$=f.children,{patchFlag:z,shapeFlag:X}=f;if(z>0){if(z&128){zt(S,$,_,v,A,k,O,P,D);return}else if(z&256){jt(S,$,_,v,A,k,O,P,D);return}}X&8?(F&16&&Ke(S,A,k),$!==S&&u(_,$)):F&16?X&16?zt(S,$,_,v,A,k,O,P,D):Ke(S,A,k,!0):(F&8&&u(_,""),X&16&&ke($,_,v,A,k,O,P,D))},jt=(p,f,_,v,A,k,O,P,D)=>{p=p||os,f=f||os;const S=p.length,F=f.length,$=Math.min(S,F);let z;for(z=0;z<$;z++){const X=f[z]=D?Kn(f[z]):rn(f[z]);w(p[z],X,_,null,A,k,O,P,D)}S>F?Ke(p,A,k,!0,!1,$):ke(f,_,v,A,k,O,P,D,$)},zt=(p,f,_,v,A,k,O,P,D)=>{let S=0;const F=f.length;let $=p.length-1,z=F-1;for(;S<=$&&S<=z;){const X=p[S],ie=f[S]=D?Kn(f[S]):rn(f[S]);if(Ws(X,ie))w(X,ie,_,null,A,k,O,P,D);else break;S++}for(;S<=$&&S<=z;){const X=p[$],ie=f[z]=D?Kn(f[z]):rn(f[z]);if(Ws(X,ie))w(X,ie,_,null,A,k,O,P,D);else break;$--,z--}if(S>$){if(S<=z){const X=z+1,ie=X<F?f[X].el:v;for(;S<=z;)w(null,f[S]=D?Kn(f[S]):rn(f[S]),_,ie,A,k,O,P,D),S++}}else if(S>z)for(;S<=$;)De(p[S],A,k,!0),S++;else{const X=S,ie=S,we=new Map;for(S=ie;S<=z;S++){const Vt=f[S]=D?Kn(f[S]):rn(f[S]);Vt.key!=null&&we.set(Vt.key,S)}let be,Xe=0;const Kt=z-ie+1;let Yr=!1,rd=0;const Ks=new Array(Kt);for(S=0;S<Kt;S++)Ks[S]=0;for(S=X;S<=$;S++){const Vt=p[S];if(Xe>=Kt){De(Vt,A,k,!0);continue}let tn;if(Vt.key!=null)tn=we.get(Vt.key);else for(be=ie;be<=z;be++)if(Ks[be-ie]===0&&Ws(Vt,f[be])){tn=be;break}tn===void 0?De(Vt,A,k,!0):(Ks[tn-ie]=S+1,tn>=rd?rd=tn:Yr=!0,w(Vt,f[tn],_,null,A,k,O,P,D),Xe++)}const sd=Yr?o1(Ks):os;for(be=sd.length-1,S=Kt-1;S>=0;S--){const Vt=ie+S,tn=f[Vt],id=Vt+1<F?f[Vt+1].el:v;Ks[S]===0?w(null,tn,_,id,A,k,O,P,D):Yr&&(be<0||S!==sd[be]?Ot(tn,_,id,2):be--)}}},Ot=(p,f,_,v,A=null)=>{const{el:k,type:O,transition:P,children:D,shapeFlag:S}=p;if(S&6){Ot(p.component.subTree,f,_,v);return}if(S&128){p.suspense.move(f,_,v);return}if(S&64){O.move(p,f,_,j);return}if(O===it){r(k,f,_);for(let $=0;$<D.length;$++)Ot(D[$],f,_,v);r(p.anchor,f,_);return}if(O===Mo){N(p,f,_);return}if(v!==2&&S&1&&P)if(v===0)P.beforeEnter(k),r(k,f,_),Rt(()=>P.enter(k),A);else{const{leave:$,delayLeave:z,afterLeave:X}=P,ie=()=>r(k,f,_),we=()=>{$(k,()=>{ie(),X&&X()})};z?z(k,ie,we):we()}else r(k,f,_)},De=(p,f,_,v=!1,A=!1)=>{const{type:k,props:O,ref:P,children:D,dynamicChildren:S,shapeFlag:F,patchFlag:$,dirs:z}=p;if(P!=null&&El(P,null,_,p,!0),F&256){f.ctx.deactivate(p);return}const X=F&1&&z,ie=!ai(p);let we;if(ie&&(we=O&&O.onVnodeBeforeUnmount)&&nn(we,f,p),F&6)jn(p.component,_,v);else{if(F&128){p.suspense.unmount(_,v);return}X&&gr(p,null,f,"beforeUnmount"),F&64?p.type.remove(p,f,_,A,j,v):S&&(k!==it||$>0&&$&64)?Ke(S,f,_,!1,!0):(k===it&&$&384||!A&&F&16)&&Ke(D,f,_),v&&Ct(p)}(ie&&(we=O&&O.onVnodeUnmounted)||X)&&Rt(()=>{we&&nn(we,f,p),X&&gr(p,null,f,"unmounted")},_)},Ct=p=>{const{type:f,el:_,anchor:v,transition:A}=p;if(f===it){$t(_,v);return}if(f===Mo){M(p);return}const k=()=>{s(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:O,delayLeave:P}=A,D=()=>O(_,k);P?P(p.el,k,D):D()}else k()},$t=(p,f)=>{let _;for(;p!==f;)_=d(p),s(p),p=_;s(f)},jn=(p,f,_)=>{const{bum:v,scope:A,update:k,subTree:O,um:P}=p;v&&Vo(v),A.stop(),k&&(k.active=!1,De(O,p,f,_)),P&&Rt(P,f),Rt(()=>{p.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ke=(p,f,_,v=!1,A=!1,k=0)=>{for(let O=k;O<p.length;O++)De(p[O],f,_,v,A)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let U=!1;const V=(p,f,_)=>{p==null?f._vnode&&De(f._vnode,null,null,!0):w(f._vnode||null,p,f,null,null,null,_),U||(U=!0,pd(),ig(),U=!1),f._vnode=p},j={p:w,um:De,m:Ot,r:Ct,mt:Sn,mc:ke,pc:ue,pbc:Fe,n:T,o:t};let ce,Ae;return e&&([ce,Ae]=e(j)),{render:V,hydrate:ce,createApp:XE(V,ce)}}function xc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function i1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Eg(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Kn(s[i]),a.el=o.el),n||Eg(o,a)),a.type===xa&&(a.el=o.el)}}function o1(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ag(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ag(e)}const a1=t=>t.__isTeleport,it=Symbol.for("v-fgt"),xa=Symbol.for("v-txt"),vs=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),ui=[];let Gt=null;function re(t=!1){ui.push(Gt=t?null:[])}function c1(){ui.pop(),Gt=ui[ui.length-1]||null}let Si=1;function Sd(t){Si+=t}function wg(t){return t.dynamicChildren=Si>0?Gt||os:null,c1(),Si>0&&Gt&&Gt.push(t),t}function de(t,e,n,r,s,i){return wg(m(t,e,n,r,s,i,!0))}function Dr(t,e,n,r,s){return wg(q(t,e,n,r,s,!0))}function Es(t){return t?t.__v_isVNode===!0:!1}function Ws(t,e){return t.type===e.type&&t.key===e.key}const La="__vInternal",Tg=({key:t})=>t??null,Uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Nt(t)||ee(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,r=0,s=null,i=t===it?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tg(e),ref:e&&Uo(e),scopeId:Na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return a?(Nu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),Si>0&&!o&&Gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Gt.push(c),c}const q=l1;function l1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===SE)&&(t=vs),Es(t)){const a=Dn(t,e,!0);return n&&Nu(a,n),Si>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag|=-2,a}if(E1(t)&&(t=t.__vccOpts),e){e=u1(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=_s(a)),Pe(c)&&(Xp(c)&&!Y(c)&&(c=ut({},c)),e.style=yu(c))}const o=Ye(t)?1:RE(t)?128:a1(t)?64:Pe(t)?4:ee(t)?2:0;return m(t,e,n,r,s,o,i,!0)}function u1(t){return t?Xp(t)||La in t?ut({},t):t:null}function Dn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Un(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Tg(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(Uo(e)):[s,Uo(e)]:Uo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dn(t.ssContent),ssFallback:t.ssFallback&&Dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Jr(t=" ",e=0){return q(xa,null,t,e)}function h1(t,e){const n=q(Mo,null,t);return n.staticCount=e,n}function rn(t){return t==null||typeof t=="boolean"?q(vs):Y(t)?q(it,null,t.slice()):typeof t=="object"?Kn(t):q(xa,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dn(t)}function Nu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Nu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(La in e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[Jr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Un(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_s([e.class,r.class]));else if(s==="style")e.style=yu([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function nn(t,e,n,r=null){Qt(t,e,7,[n,r])}const d1=pg();let f1=0;function p1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||d1,i={uid:f1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mg(r,s),emitsOptions:ag(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=EE.bind(null,i),t.ce&&t.ce(i),i}let mt=null,Zo,Al;{const t=xp(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zo=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),Al=e("__VUE_SSR_SETTERS__",n=>Ma=n)}const Ki=t=>{const e=mt;return Zo(t),t.scope.on(),()=>{t.scope.off(),Zo(e)}},Cd=()=>{mt&&mt.scope.off(),Zo(null)};function Ig(t){return t.vnode.shapeFlag&4}let Ma=!1;function g1(t,e=!1){e&&Al(e);const{props:n,children:r}=t.vnode,s=Ig(t);JE(t,n,s,e),t1(t,r);const i=s?m1(t,e):void 0;return e&&Al(!1),i}function m1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Jp(new Proxy(t.ctx,zE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?y1(t):null,i=Ki(t);qr();const o=nr(r,t,0,[t.props,s]);if(Hr(),i(),Dp(o)){if(o.then(Cd,Cd),e)return o.then(a=>{Rd(t,a,e)}).catch(a=>{Pa(a,t,0)});t.asyncDep=o}else Rd(t,o,e)}else Sg(t,e)}function Rd(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=ng(e)),Sg(t,n)}let bd;function Sg(t,e,n){const r=t.type;if(!t.render){if(!e&&bd&&!r.render){const s=r.template||Pu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ut(ut({isCustomElement:i,delimiters:a},o),c);r.render=bd(s,l)}}t.render=r.render||Ht}{const s=Ki(t);qr();try{$E(t)}finally{Hr(),s()}}}function _1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return kt(t,"get","$attrs"),e[n]}}))}function y1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return _1(t)},slots:t.slots,emit:t.emit,expose:e}}function Ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ng(Jp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ci)return ci[n](t)},has(e,n){return n in e||n in ci}}))}function v1(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function E1(t){return ee(t)&&"__vccOpts"in t}const ve=(t,e)=>hE(t,e,Ma);function Ve(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!Y(e)?Es(e)?q(t,null,[e]):q(t,e):q(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Es(n)&&(n=[n]),q(t,e,n))}const A1="3.4.18";/**
* @vue/runtime-dom v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const w1="http://www.w3.org/2000/svg",T1="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Pd=Wn&&Wn.createElement("template"),I1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Wn.createElementNS(w1,t):e==="mathml"?Wn.createElementNS(T1,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Pd.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},S1=Symbol("_vtc");function C1(t,e,n){const r=t[S1];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const kd=Symbol("_vod"),R1=Symbol(""),b1=/(^|;)\s*display\s*:/;function P1(t,e,n){const r=t.style,s=Ye(n),i=r.display;let o=!1;if(n&&!s){if(e&&!Ye(e))for(const a in e)n[a]==null&&wl(r,a,"");for(const a in n)a==="display"&&(o=!0),wl(r,a,n[a])}else if(s){if(e!==n){const a=r[R1];a&&(n+=";"+a),r.cssText=n,o=b1.test(n)}}else e&&t.removeAttribute("style");kd in t&&(t[kd]=o?r.display:"",r.display=i)}const Nd=/\s*!important$/;function wl(t,e,n){if(Y(n))n.forEach(r=>wl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=k1(t,e);Nd.test(n)?t.setProperty(Us(r),n.replace(Nd,""),"important"):t[r]=n}}const Dd=["Webkit","Moz","ms"],Lc={};function k1(t,e){const n=Lc[e];if(n)return n;let r=yn(e);if(r!=="filter"&&r in t)return Lc[e]=r;r=Ra(r);for(let s=0;s<Dd.length;s++){const i=Dd[s]+r;if(i in t)return Lc[e]=i}return e}const Od="http://www.w3.org/1999/xlink";function N1(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Od,e.slice(6,e.length)):t.setAttributeNS(Od,e,n);else{const i=qv(e);n==null||i&&!Lp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function D1(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Zr(t,e,n,r){t.addEventListener(e,n,r)}function O1(t,e,n,r){t.removeEventListener(e,n,r)}const Vd=Symbol("_vei");function V1(t,e,n,r,s=null){const i=t[Vd]||(t[Vd]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=x1(e);if(r){const l=i[e]=U1(r,s);Zr(t,a,l,c)}else o&&(O1(t,a,o,c),i[e]=void 0)}}const xd=/(?:Once|Passive|Capture)$/;function x1(t){let e;if(xd.test(t)){e={};let r;for(;r=t.match(xd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Us(t.slice(2)),e]}let Mc=0;const L1=Promise.resolve(),M1=()=>Mc||(L1.then(()=>Mc=0),Mc=Date.now());function U1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(F1(r,n.value),e,5,[r])};return n.value=t,n.attached=M1(),n}function F1(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ld=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,B1=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?C1(t,r,l):e==="style"?P1(t,n,r):Ia(e)?gu(e)||V1(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):j1(t,e,r,l))?D1(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),N1(t,e,r,l))};function j1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ld(e)&&ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ld(e)&&Ye(n)?!1:e in t}const Md=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>Vo(e,n):e};function q1(t){t.target.composing=!0}function Ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Uc=Symbol("_assign"),hn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Uc]=Md(s);const i=r||s.props&&s.props.type==="number";Zr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ul(a)),t[Uc](a)}),n&&Zr(t,"change",()=>{t.value=t.value.trim()}),e||(Zr(t,"compositionstart",q1),Zr(t,"compositionend",Ud),Zr(t,"change",Ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Uc]=Md(i),t.composing)return;const o=s||t.type==="number"?ul(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},H1=ut({patchProp:B1},I1);let Fd;function z1(){return Fd||(Fd=r1(H1))}const Cg=(...t)=>{const e=z1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=K1(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,$1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function $1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function K1(t){return Ye(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof window<"u";function W1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Fc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Yt(s)?s.map(t):t(s)}return n}const hi=()=>{},Yt=Array.isArray,G1=/\/$/,Q1=t=>t.replace(G1,"");function Bc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Z1(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Y1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function X1(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&Rg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!J1(t[n],e[n]))return!1;return!0}function J1(t,e){return Yt(t)?jd(t,e):Yt(e)?jd(e,t):t===e}function jd(t,e){return Yt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Z1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ci;(function(t){t.pop="pop",t.push="push"})(Ci||(Ci={}));var di;(function(t){t.back="back",t.forward="forward",t.unknown=""})(di||(di={}));function eA(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Q1(t)}const tA=/^[^#]+#/;function nA(t,e){return t.replace(tA,"#")+e}function rA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function sA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qd(t,e){return(history.state?history.state.position-e:-1)+t}const Tl=new Map;function iA(t,e){Tl.set(t,e)}function oA(t){const e=Tl.get(t);return Tl.delete(t),e}let aA=()=>location.protocol+"//"+location.host;function bg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Bd(c,"")}return Bd(n,t)+r+s}function cA(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=bg(t,location),y=n.value,w=e.value;let E=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}E=w?d.position-w.position:0}else r(g);s.forEach(C=>{C(n.value,y,{delta:E,type:Ci.pop,direction:E?E>0?di.forward:di.back:di.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:Fa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Hd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fa():null}}function lA(t){const{history:e,location:n}=window,r={value:bg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:aA()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ye({},e.state,Hd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ye({},s.value,e.state,{forward:c,scroll:Fa()});i(u.current,u,!0);const h=ye({},Hd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function uA(t){t=eA(t);const e=lA(t),n=cA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ye({location:"",base:t,go:r,createHref:nA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),uA(t)}function dA(t){return typeof t=="string"||t&&typeof t=="object"}function Pg(t){return typeof t=="string"||typeof t=="symbol"}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},kg=Symbol("");var zd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zd||(zd={}));function ws(t,e){return ye(new Error,{type:t,[kg]:!0},e)}function Cn(t,e){return t instanceof Error&&kg in t&&(e==null||!!(t.type&e))}const $d="[^/]+?",fA={sensitive:!1,strict:!1,start:!0,end:!0},pA=/[.+*?^${}()[\]/\\]/g;function gA(t,e){const n=ye({},fA,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(pA,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:w,optional:E,regexp:C}=d;i.push({name:y,repeatable:w,optional:E});const b=C||$d;if(b!==$d){g+=10;try{new RegExp(`(${b})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${y}" (${b}): `+M.message)}}let N=w?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(N=E&&l.length<2?`(?:/${N})`:"/"+N),E&&(N+="?"),s+=N,g+=20,E&&(g+=-8),w&&(g+=-20),b===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:w,optional:E}=g,C=y in l?l[y]:"";if(Yt(C)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const b=Yt(C)?C.join("/"):C;if(!b)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function mA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function _A(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Kd(r))return 1;if(Kd(s))return-1}return s.length-r.length}function Kd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yA={type:0,value:""},vA=/[a-zA-Z0-9_]/;function EA(t){if(!t)return[[]];if(t==="/")return[[yA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:vA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function AA(t,e,n){const r=gA(EA(t.path),n),s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wA(t,e){const n=[],r=new Map;e=Qd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,y=TA(u);y.aliasOf=d&&d.record;const w=Qd(e,u),E=[y];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of N)E.push(ye({},y,{components:d?d.record.components:y.components,path:M,aliasOf:d?d.record:y}))}let C,b;for(const N of E){const{path:M}=N;if(h&&M[0]!=="/"){const Z=h.record.path,B=Z[Z.length-1]==="/"?"":"/";N.path=h.record.path+(M&&B+M)}if(C=AA(N,h,w),d?d.alias.push(C):(b=b||C,b!==C&&b.alias.push(C),g&&u.name&&!Gd(C)&&o(u.name)),y.children){const Z=y.children;for(let B=0;B<Z.length;B++)i(Z[B],C,d&&d.children[B])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return b?()=>{o(b)}:hi}function o(u){if(Pg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&_A(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ng(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Gd(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},y,w;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ws(1,{location:u});w=d.record.name,g=ye(Wd(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Wd(u.params,d.keys.map(b=>b.name))),y=d.stringify(g)}else if("path"in u)y=u.path,d=n.find(b=>b.re.test(y)),d&&(g=d.parse(y),w=d.record.name);else{if(d=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw ws(1,{location:u,currentLocation:h});w=d.record.name,g=ye({},h.params,u.params),y=d.stringify(g)}const E=[];let C=d;for(;C;)E.unshift(C.record),C=C.parent;return{name:w,path:y,params:g,matched:E,meta:SA(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Wd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function TA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:IA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function IA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function SA(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Qd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ng(t,e){return e.children.some(n=>n===t||Ng(t,n))}const Dg=/#/g,CA=/&/g,RA=/\//g,bA=/=/g,PA=/\?/g,Og=/\+/g,kA=/%5B/g,NA=/%5D/g,Vg=/%5E/g,DA=/%60/g,xg=/%7B/g,OA=/%7C/g,Lg=/%7D/g,VA=/%20/g;function Du(t){return encodeURI(""+t).replace(OA,"|").replace(kA,"[").replace(NA,"]")}function xA(t){return Du(t).replace(xg,"{").replace(Lg,"}").replace(Vg,"^")}function Il(t){return Du(t).replace(Og,"%2B").replace(VA,"+").replace(Dg,"%23").replace(CA,"%26").replace(DA,"`").replace(xg,"{").replace(Lg,"}").replace(Vg,"^")}function LA(t){return Il(t).replace(bA,"%3D")}function MA(t){return Du(t).replace(Dg,"%23").replace(PA,"%3F")}function UA(t){return t==null?"":MA(t).replace(RA,"%2F")}function ea(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function FA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Og," "),o=i.indexOf("="),a=ea(o<0?i:i.slice(0,o)),c=o<0?null:ea(i.slice(o+1));if(a in e){let l=e[a];Yt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yd(t){let e="";for(let n in t){const r=t[n];if(n=LA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(r)?r.map(i=>i&&Il(i)):[r&&Il(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jA=Symbol(""),Xd=Symbol(""),Ou=Symbol(""),Mg=Symbol(""),Sl=Symbol("");function Gs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ws(4,{from:n,to:e})):h instanceof Error?a(h):dA(h)?a(ws(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function jc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(qA(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Gn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=W1(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Gn(d,n,r,i,o)()}))}}return s}function qA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jd(t){const e=Te(Ou),n=Te(Mg),r=ve(()=>e.resolve(Rr(t.to))),s=ve(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(As.bind(null,u));if(d>-1)return d;const g=Zd(c[l-2]);return l>1&&Zd(u)===g&&h[h.length-1].path!==g?h.findIndex(As.bind(null,c[l-2])):d}),i=ve(()=>s.value>-1&&KA(n.params,r.value.params)),o=ve(()=>s.value>-1&&s.value===n.matched.length-1&&Rg(n.params,r.value.params));function a(c={}){return $A(c)?e[Rr(t.replace)?"replace":"push"](Rr(t.to)).catch(hi):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const HA=Ln({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jd,setup(t,{slots:e}){const n=et(Jd(t)),{options:r}=Te(Ou),s=ve(()=>({[ef(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ef(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ve("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zA=HA;function $A(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function KA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Yt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ef=(t,e,n)=>t??e??n,WA=Ln({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Te(Sl),s=ve(()=>t.route||r.value),i=Te(Xd,0),o=ve(()=>{let l=Rr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ve(()=>s.value.matched[o.value]);xt(Xd,ve(()=>o.value+1)),xt(jA,a),xt(Sl,s);const c=me();return br(()=>[c.value,a.value,t.name],([l,u,h],[d,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!As(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return tf(n.default,{Component:d,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,E=Ve(d,ye({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return tf(n.default,{Component:E,route:l})||E}}});function tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ug=WA;function GA(t){const e=wA(t.routes,t),n=t.parseQuery||FA,r=t.stringifyQuery||Yd,s=t.history,i=Gs(),o=Gs(),a=Gs(),c=dE(Hn);let l=Hn;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fc.bind(null,T=>""+T),h=Fc.bind(null,UA),d=Fc.bind(null,ea);function g(T,U){let V,j;return Pg(T)?(V=e.getRecordMatcher(T),j=U):j=T,e.addRoute(j,V)}function y(T){const U=e.getRecordMatcher(T);U&&e.removeRoute(U)}function w(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function C(T,U){if(U=ye({},U||c.value),typeof T=="string"){const f=Bc(n,T,U.path),_=e.resolve({path:f.path},U),v=s.createHref(f.fullPath);return ye(f,_,{params:d(_.params),hash:ea(f.hash),redirectedFrom:void 0,href:v})}let V;if("path"in T)V=ye({},T,{path:Bc(n,T.path,U.path).path});else{const f=ye({},T.params);for(const _ in f)f[_]==null&&delete f[_];V=ye({},T,{params:h(f)}),U.params=h(U.params)}const j=e.resolve(V,U),ce=T.hash||"";j.params=u(d(j.params));const Ae=Y1(r,ye({},T,{hash:xA(ce),path:j.path})),p=s.createHref(Ae);return ye({fullPath:Ae,hash:ce,query:r===Yd?BA(T.query):T.query||{}},j,{redirectedFrom:void 0,href:p})}function b(T){return typeof T=="string"?Bc(n,T,c.value.path):ye({},T)}function N(T,U){if(l!==T)return ws(8,{from:U,to:T})}function M(T){return fe(T)}function Z(T){return M(ye(b(T),{replace:!0}))}function B(T){const U=T.matched[T.matched.length-1];if(U&&U.redirect){const{redirect:V}=U;let j=typeof V=="function"?V(T):V;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=b(j):{path:j},j.params={}),ye({query:T.query,hash:T.hash,params:"path"in j?{}:T.params},j)}}function fe(T,U){const V=l=C(T),j=c.value,ce=T.state,Ae=T.force,p=T.replace===!0,f=B(V);if(f)return fe(ye(b(f),{state:typeof f=="object"?ye({},ce,f.state):ce,force:Ae,replace:p}),U||V);const _=V;_.redirectedFrom=U;let v;return!Ae&&X1(r,j,V)&&(v=ws(16,{to:_,from:j}),Ot(j,j,!0,!1)),(v?Promise.resolve(v):Fe(_,j)).catch(A=>Cn(A)?Cn(A,2)?A:zt(A):ue(A,_,j)).then(A=>{if(A){if(Cn(A,2))return fe(ye({replace:p},b(A.to),{state:typeof A.to=="object"?ye({},ce,A.to.state):ce,force:Ae}),U||_)}else A=Et(_,j,!0,p,ce);return Dt(_,j,A),A})}function ke(T,U){const V=N(T,U);return V?Promise.reject(V):Promise.resolve()}function Se(T){const U=$t.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(T):T()}function Fe(T,U){let V;const[j,ce,Ae]=QA(T,U);V=jc(j.reverse(),"beforeRouteLeave",T,U);for(const f of j)f.leaveGuards.forEach(_=>{V.push(Gn(_,T,U))});const p=ke.bind(null,T,U);return V.push(p),Ke(V).then(()=>{V=[];for(const f of i.list())V.push(Gn(f,T,U));return V.push(p),Ke(V)}).then(()=>{V=jc(ce,"beforeRouteUpdate",T,U);for(const f of ce)f.updateGuards.forEach(_=>{V.push(Gn(_,T,U))});return V.push(p),Ke(V)}).then(()=>{V=[];for(const f of Ae)if(f.beforeEnter)if(Yt(f.beforeEnter))for(const _ of f.beforeEnter)V.push(Gn(_,T,U));else V.push(Gn(f.beforeEnter,T,U));return V.push(p),Ke(V)}).then(()=>(T.matched.forEach(f=>f.enterCallbacks={}),V=jc(Ae,"beforeRouteEnter",T,U),V.push(p),Ke(V))).then(()=>{V=[];for(const f of o.list())V.push(Gn(f,T,U));return V.push(p),Ke(V)}).catch(f=>Cn(f,8)?f:Promise.reject(f))}function Dt(T,U,V){a.list().forEach(j=>Se(()=>j(T,U,V)))}function Et(T,U,V,j,ce){const Ae=N(T,U);if(Ae)return Ae;const p=U===Hn,f=es?history.state:{};V&&(j||p?s.replace(T.fullPath,ye({scroll:p&&f&&f.scroll},ce)):s.push(T.fullPath,ce)),c.value=T,Ot(T,U,V,p),zt()}let At;function Sn(){At||(At=s.listen((T,U,V)=>{if(!jn.listening)return;const j=C(T),ce=B(j);if(ce){fe(ye(ce,{replace:!0}),j).catch(hi);return}l=j;const Ae=c.value;es&&iA(qd(Ae.fullPath,V.delta),Fa()),Fe(j,Ae).catch(p=>Cn(p,12)?p:Cn(p,2)?(fe(p.to,j).then(f=>{Cn(f,20)&&!V.delta&&V.type===Ci.pop&&s.go(-1,!1)}).catch(hi),Promise.reject()):(V.delta&&s.go(-V.delta,!1),ue(p,j,Ae))).then(p=>{p=p||Et(j,Ae,!1),p&&(V.delta&&!Cn(p,8)?s.go(-V.delta,!1):V.type===Ci.pop&&Cn(p,20)&&s.go(-1,!1)),Dt(j,Ae,p)}).catch(hi)}))}let Bn=Gs(),Be=Gs(),pe;function ue(T,U,V){zt(T);const j=Be.list();return j.length?j.forEach(ce=>ce(T,U,V)):console.error(T),Promise.reject(T)}function jt(){return pe&&c.value!==Hn?Promise.resolve():new Promise((T,U)=>{Bn.add([T,U])})}function zt(T){return pe||(pe=!T,Sn(),Bn.list().forEach(([U,V])=>T?V(T):U()),Bn.reset()),T}function Ot(T,U,V,j){const{scrollBehavior:ce}=t;if(!es||!ce)return Promise.resolve();const Ae=!V&&oA(qd(T.fullPath,0))||(j||!V)&&history.state&&history.state.scroll||null;return zi().then(()=>ce(T,U,Ae)).then(p=>p&&sA(p)).catch(p=>ue(p,T,U))}const De=T=>s.go(T);let Ct;const $t=new Set,jn={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:E,getRoutes:w,resolve:C,options:t,push:M,replace:Z,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Be.add,isReady:jt,install(T){const U=this;T.component("RouterLink",zA),T.component("RouterView",Ug),T.config.globalProperties.$router=U,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Rr(c)}),es&&!Ct&&c.value===Hn&&(Ct=!0,M(s.location).catch(ce=>{}));const V={};for(const ce in Hn)Object.defineProperty(V,ce,{get:()=>c.value[ce],enumerable:!0});T.provide(Ou,U),T.provide(Mg,Qp(V)),T.provide(Sl,c);const j=T.unmount;$t.add(T),T.unmount=function(){$t.delete(T),$t.size<1&&(l=Hn,At&&At(),At=null,c.value=Hn,Ct=!1,pe=!1),j()}}};function Ke(T){return T.reduce((U,V)=>U.then(()=>Se(V)),Promise.resolve())}return jn}function QA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>As(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>As(l,c))||s.push(c))}return[n,r,s]}const YA={class:"app"},XA={__name:"App",setup(t){return(e,n)=>(re(),de("div",YA,[q(Rr(Ug))]))}};/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const qe={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},nf={itemsToShow:{default:qe.itemsToShow,type:Number},itemsToScroll:{default:qe.itemsToScroll,type:Number},wrapAround:{default:qe.wrapAround,type:Boolean},throttle:{default:qe.throttle,type:Number},snapAlign:{default:qe.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:qe.transition,type:Number},breakpoints:{default:qe.breakpoints,type:Object},autoplay:{default:qe.autoplay,type:Number},pauseAutoplayOnHover:{default:qe.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:qe.mouseDrag,type:Boolean},touchDrag:{default:qe.touchDrag,type:Boolean},dir:{default:qe.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:qe.i18n,type:Object},settings:{default(){return{}},type:Object}};function JA({config:t,slidesCount:e}){const{snapAlign:n,wrapAround:r,itemsToShow:s=1}=t;if(r)return Math.max(e-1,0);let i;switch(n){case"start":i=e-s;break;case"end":i=e-1;break;case"center":case"center-odd":i=e-Math.ceil((s-.5)/2);break;case"center-even":i=e-Math.ceil(s/2);break;default:i=0;break}return Math.max(i,0)}function ZA({config:t,slidesCount:e}){const{wrapAround:n,snapAlign:r,itemsToShow:s=1}=t;let i=0;if(n||s>e)return i;switch(r){case"start":i=0;break;case"end":i=s-1;break;case"center":case"center-odd":i=Math.floor((s-1)/2);break;case"center-even":i=Math.floor((s-2)/2);break;default:i=0;break}return i}function Cl({val:t,max:e,min:n}){return e<n?t:Math.min(Math.max(t,n),e)}function e0({config:t,currentSlide:e,slidesCount:n}){const{snapAlign:r,wrapAround:s,itemsToShow:i=1}=t;let o=e;switch(r){case"center":case"center-odd":o-=(i-1)/2;break;case"center-even":o-=(i-2)/2;break;case"end":o-=i-1;break}return s?o:Cl({val:o,max:n-i,min:0})}function Fg(t){return t?t.reduce((e,n)=>{var r;return n.type===it?[...e,...Fg(n.children)]:((r=n.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...e,n]:e},[]):[]}function ta({val:t,max:e,min:n=0}){return t>e?ta({val:t-(e+1),max:e,min:n}):t<n?ta({val:t+(e+1),max:e,min:n}):t}function t0(t,e){let n;return e?function(...r){const s=this;n||(t.apply(s,r),n=!0,setTimeout(()=>n=!1,e))}:t}function n0(t,e){let n;return function(...r){n&&clearTimeout(n),n=setTimeout(()=>{t(...r),n=null},e)}}function Bg(t="",e={}){return Object.entries(e).reduce((n,[r,s])=>n.replace(`{${r}}`,String(s)),t)}var r0=Ln({name:"ARIA",setup(){const t=Te("config",et(Object.assign({},qe))),e=Te("currentSlide",me(0)),n=Te("slidesCount",me(0));return()=>Ve("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Bg(t.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:n.value}))}}),s0=Ln({name:"Carousel",props:nf,setup(t,{slots:e,emit:n,expose:r}){var s;const i=me(null),o=me([]),a=me(0),c=me(0),l=et(Object.assign({},qe));let u=Object.assign({},qe),h;const d=me((s=t.modelValue)!==null&&s!==void 0?s:0),g=me(0),y=me(0),w=me(0),E=me(0);let C,b;xt("config",l),xt("slidesCount",c),xt("currentSlide",d),xt("maxSlide",w),xt("minSlide",E),xt("slideWidth",a);function N(){h=Object.assign({},t.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),t),{i18n:Object.assign(Object.assign({},u.i18n),t.i18n),breakpoints:void 0}),Z(u)}function M(){if(!h||!Object.keys(h).length)return;const f=Object.keys(h).map(v=>Number(v)).sort((v,A)=>+A-+v);let _=Object.assign({},u);f.some(v=>{const A=window.matchMedia(`(min-width: ${v}px)`).matches;return A&&(_=Object.assign(Object.assign({},_),h[v])),A}),Z(_)}function Z(f){Object.entries(f).forEach(([_,v])=>l[_]=v)}const B=n0(()=>{M(),fe()},16);function fe(){if(!i.value)return;const f=i.value.getBoundingClientRect();a.value=f.width/l.itemsToShow}function ke(){c.value<=0||(y.value=Math.ceil((c.value-1)/2),w.value=JA({config:l,slidesCount:c.value}),E.value=ZA({config:l,slidesCount:c.value}),l.wrapAround||(d.value=Cl({val:d.value,max:w.value,min:E.value})))}Oa(()=>{zi(()=>fe()),setTimeout(()=>fe(),1e3),M(),zt(),window.addEventListener("resize",B,{passive:!0}),n("init")}),$i(()=>{b&&clearTimeout(b),C&&clearInterval(C),window.removeEventListener("resize",B,{passive:!0})});let Se=!1;const Fe={x:0,y:0},Dt={x:0,y:0},Et=et({x:0,y:0}),At=me(!1),Sn=me(!1),Bn=()=>{At.value=!0},Be=()=>{At.value=!1};function pe(f){["INPUT","TEXTAREA","SELECT"].includes(f.target.tagName)||(Se=f.type==="touchstart",Se||f.preventDefault(),!(!Se&&f.button!==0||De.value)&&(Fe.x=Se?f.touches[0].clientX:f.clientX,Fe.y=Se?f.touches[0].clientY:f.clientY,document.addEventListener(Se?"touchmove":"mousemove",ue,!0),document.addEventListener(Se?"touchend":"mouseup",jt,!0)))}const ue=t0(f=>{Sn.value=!0,Dt.x=Se?f.touches[0].clientX:f.clientX,Dt.y=Se?f.touches[0].clientY:f.clientY;const _=Dt.x-Fe.x,v=Dt.y-Fe.y;Et.y=v,Et.x=_},l.throttle);function jt(){const f=l.dir==="rtl"?-1:1,_=Math.sign(Et.x)*.4,v=Math.round(Et.x/a.value+_)*f;if(v&&!Se){const A=k=>{k.stopPropagation(),window.removeEventListener("click",A,!0)};window.addEventListener("click",A,!0)}Ct(d.value-v),Et.x=0,Et.y=0,Sn.value=!1,document.removeEventListener(Se?"touchmove":"mousemove",ue,!0),document.removeEventListener(Se?"touchend":"mouseup",jt,!0)}function zt(){!l.autoplay||l.autoplay<=0||(C=setInterval(()=>{l.pauseAutoplayOnHover&&At.value||$t()},l.autoplay))}function Ot(){C&&(clearInterval(C),C=null),zt()}const De=me(!1);function Ct(f){const _=l.wrapAround?f:Cl({val:f,max:w.value,min:E.value});d.value===_||De.value||(n("slide-start",{slidingToIndex:f,currentSlideIndex:d.value,prevSlideIndex:g.value,slidesCount:c.value}),De.value=!0,g.value=d.value,d.value=_,b=setTimeout(()=>{if(l.wrapAround){const v=ta({val:_,max:w.value,min:0});v!==d.value&&(d.value=v,n("loop",{currentSlideIndex:d.value,slidingToIndex:f}))}n("update:modelValue",d.value),n("slide-end",{currentSlideIndex:d.value,prevSlideIndex:g.value,slidesCount:c.value}),De.value=!1,Ot()},l.transition))}function $t(){Ct(d.value+l.itemsToScroll)}function jn(){Ct(d.value-l.itemsToScroll)}const Ke={slideTo:Ct,next:$t,prev:jn};xt("nav",Ke),xt("isSliding",De);const T=ve(()=>e0({config:l,currentSlide:d.value,slidesCount:c.value}));xt("slidesToScroll",T);const U=ve(()=>{const f=l.dir==="rtl"?-1:1,_=T.value*a.value*f;return{transform:`translateX(${Et.x-_}px)`,transition:`${De.value?l.transition:0}ms`,margin:l.wrapAround?`0 -${c.value*a.value}px`:"",width:"100%"}});function V(){N(),M(),ke(),fe(),Ot()}Object.keys(nf).forEach(f=>{["modelValue"].includes(f)||br(()=>t[f],V)}),br(()=>t.modelValue,f=>{f!==d.value&&Ct(Number(f))}),br(c,ke),n("before-init"),N();const j={config:l,slidesCount:c,slideWidth:a,next:$t,prev:jn,slideTo:Ct,currentSlide:d,maxSlide:w,minSlide:E,middleSlide:y};r({updateBreakpointsConfigs:M,updateSlidesData:ke,updateSlideWidth:fe,initDefaultConfigs:N,restartCarousel:V,slideTo:Ct,next:$t,prev:jn,nav:Ke,data:j});const ce=e.default||e.slides,Ae=e.addons,p=et(j);return()=>{const f=Fg(ce==null?void 0:ce(p)),_=(Ae==null?void 0:Ae(p))||[];f.forEach((O,P)=>O.props.index=P);let v=f;if(l.wrapAround){const O=f.map((D,S)=>Dn(D,{index:-f.length+S,isClone:!0,key:`clone-before-${S}`})),P=f.map((D,S)=>Dn(D,{index:f.length+S,isClone:!0,key:`clone-after-${S}`}));v=[...O,...f,...P]}o.value=f,c.value=Math.max(f.length,1);const A=Ve("ol",{class:"carousel__track",style:U.value,onMousedownCapture:l.mouseDrag?pe:null,onTouchstartPassiveCapture:l.touchDrag?pe:null},v),k=Ve("div",{class:"carousel__viewport"},A);return Ve("section",{ref:i,class:{carousel:!0,"is-sliding":De.value,"is-dragging":Sn.value,"is-hover":At.value,"carousel--rtl":l.dir==="rtl"},dir:l.dir,"aria-label":l.i18n.ariaGallery,tabindex:"0",onMouseenter:Bn,onMouseleave:Be},[k,_,Ve(r0)])}}}),Rl;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(Rl||(Rl={}));const i0={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function o0(t){return t in Rl}const bl=t=>{const e=Te("config",et(Object.assign({},qe))),n=String(t.name),r=`icon${n.charAt(0).toUpperCase()+n.slice(1)}`;if(!n||typeof n!="string"||!o0(n))return;const s=i0[n],i=Ve("path",{d:s}),o=e.i18n[r]||t.title||n,a=Ve("title",o);return Ve("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":o},[a,i])};bl.props={name:String,title:String};const a0=(t,{slots:e,attrs:n})=>{const{next:r,prev:s}=e||{},i=Te("config",et(Object.assign({},qe))),o=Te("maxSlide",me(1)),a=Te("minSlide",me(1)),c=Te("currentSlide",me(1)),l=Te("nav",{}),{dir:u,wrapAround:h,i18n:d}=i,g=u==="rtl",y=Ve("button",{type:"button",class:["carousel__prev",!h&&c.value<=a.value&&"carousel__prev--disabled",n==null?void 0:n.class],"aria-label":d.ariaPreviousSlide,onClick:l.prev},(s==null?void 0:s())||Ve(bl,{name:g?"arrowRight":"arrowLeft"})),w=Ve("button",{type:"button",class:["carousel__next",!h&&c.value>=o.value&&"carousel__next--disabled",n==null?void 0:n.class],"aria-label":d.ariaNextSlide,onClick:l.next},(r==null?void 0:r())||Ve(bl,{name:g?"arrowLeft":"arrowRight"}));return[y,w]},c0=()=>{const t=Te("config",et(Object.assign({},qe))),e=Te("maxSlide",me(1)),n=Te("minSlide",me(1)),r=Te("currentSlide",me(1)),s=Te("nav",{}),i=a=>ta({val:r.value,max:e.value,min:0})===a,o=[];for(let a=n.value;a<e.value+1;a++){const c=Ve("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(a)},"aria-label":Bg(t.i18n.ariaNavigateToSlide,{slideNumber:a+1}),onClick:()=>s.slideTo(a)}),l=Ve("li",{class:"carousel__pagination-item",key:a},c);o.push(l)}return Ve("ol",{class:"carousel__pagination"},o)};var l0=Ln({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:e}){const n=Te("config",et(Object.assign({},qe))),r=Te("currentSlide",me(0)),s=Te("slidesToScroll",me(0)),i=Te("isSliding",me(!1)),o=()=>t.index===r.value,a=()=>t.index===r.value-1,c=()=>t.index===r.value+1,l=()=>{const u=Math.floor(s.value),h=Math.ceil(s.value+n.itemsToShow-1);return t.index>=u&&t.index<=h};return()=>{var u;return Ve("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":l(),"carousel__slide--active":o(),"carousel__slide--prev":a(),"carousel__slide--next":c(),"carousel__slide--sliding":i.value},"aria-hidden":!l()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}}),rf={};/**
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
 */const jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},u0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):u0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new h0;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class h0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d0=function(t){const e=jg(t);return qg.encodeByteArray(e,!0)},na=function(t){return d0(t).replace(/\./g,"")},Hg=function(t){try{return qg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function f0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const p0=()=>f0().__FIREBASE_DEFAULTS__,g0=()=>{if(typeof process>"u"||typeof rf>"u")return;const t=rf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},m0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hg(t[1]);return e&&JSON.parse(e)},Ba=()=>{try{return p0()||g0()||m0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zg=t=>{var e,n;return(n=(e=Ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$g=t=>{const e=zg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kg=()=>{var t;return(t=Ba())===null||t===void 0?void 0:t.config},Wg=t=>{var e;return(e=Ba())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Gg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[na(JSON.stringify(n)),na(JSON.stringify(o)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function v0(){var t;const e=(t=Ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function E0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function A0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w0(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T0(){return!v0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qg(){try{return typeof indexedDB=="object"}catch{return!1}}function I0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const S0="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=S0,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?C0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,a,r)}}function C0(t,e){return t.replace(R0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const R0=/\{\$([^}]+)}/g;function b0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ts(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sf(i)&&sf(o)){if(!Ts(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sf(t){return t!==null&&typeof t=="object"}/**
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
 */function Gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function P0(t,e){const n=new k0(t,e);return n.subscribe.bind(n)}class k0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");N0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qc),s.error===void 0&&(s.error=qc),s.complete===void 0&&(s.complete=qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _r="[DEFAULT]";/**
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
 */class D0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V0(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:O0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function O0(t){return t===_r?void 0:t}function V0(t){return t.instantiationMode==="EAGER"}/**
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
 */class x0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new D0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const L0={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},M0=ae.INFO,U0={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},F0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=U0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=M0,this._logHandler=F0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const B0=(t,e)=>e.some(n=>t instanceof n);let of,af;function j0(){return of||(of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q0(){return af||(af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,Pl=new WeakMap,Xg=new WeakMap,Hc=new WeakMap,xu=new WeakMap;function H0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yg.set(n,t)}).catch(()=>{}),xu.set(e,t),e}function z0(t){if(Pl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pl.set(t,e)}let kl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $0(t){kl=t(kl)}function K0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zc(this),e,...n);return Xg.set(r,e.sort?e.sort():[e]),rr(r)}:q0().includes(t)?function(...e){return t.apply(zc(this),e),rr(Yg.get(this))}:function(...e){return rr(t.apply(zc(this),e))}}function W0(t){return typeof t=="function"?K0(t):(t instanceof IDBTransaction&&z0(t),B0(t,j0())?new Proxy(t,kl):t)}function rr(t){if(t instanceof IDBRequest)return H0(t);if(Hc.has(t))return Hc.get(t);const e=W0(t);return e!==t&&(Hc.set(t,e),xu.set(e,t)),e}const zc=t=>xu.get(t);function G0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=rr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(rr(o.result),c.oldVersion,c.newVersion,rr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Q0=["get","getKey","getAll","getAllKeys","count"],Y0=["put","add","delete","clear"],$c=new Map;function cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Y0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Q0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return $c.set(e,i),i}$0(t=>({...t,get:(e,n,r)=>cf(e,n)||t.get(e,n,r),has:(e,n)=>!!cf(e,n)||t.has(e,n)}));/**
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
 */class X0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nl="@firebase/app",lf="0.9.27";/**
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
 */const Or=new Vu("@firebase/app"),Z0="@firebase/app-compat",ew="@firebase/analytics-compat",tw="@firebase/analytics",nw="@firebase/app-check-compat",rw="@firebase/app-check",sw="@firebase/auth",iw="@firebase/auth-compat",ow="@firebase/database",aw="@firebase/database-compat",cw="@firebase/functions",lw="@firebase/functions-compat",uw="@firebase/installations",hw="@firebase/installations-compat",dw="@firebase/messaging",fw="@firebase/messaging-compat",pw="@firebase/performance",gw="@firebase/performance-compat",mw="@firebase/remote-config",_w="@firebase/remote-config-compat",yw="@firebase/storage",vw="@firebase/storage-compat",Ew="@firebase/firestore",Aw="@firebase/firestore-compat",ww="firebase",Tw="10.8.0";/**
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
 */const Dl="[DEFAULT]",Iw={[Nl]:"fire-core",[Z0]:"fire-core-compat",[tw]:"fire-analytics",[ew]:"fire-analytics-compat",[rw]:"fire-app-check",[nw]:"fire-app-check-compat",[sw]:"fire-auth",[iw]:"fire-auth-compat",[ow]:"fire-rtdb",[aw]:"fire-rtdb-compat",[cw]:"fire-fn",[lw]:"fire-fn-compat",[uw]:"fire-iid",[hw]:"fire-iid-compat",[dw]:"fire-fcm",[fw]:"fire-fcm-compat",[pw]:"fire-perf",[gw]:"fire-perf-compat",[mw]:"fire-rc",[_w]:"fire-rc-compat",[yw]:"fire-gcs",[vw]:"fire-gcs-compat",[Ew]:"fire-fst",[Aw]:"fire-fst-compat","fire-js":"fire-js",[ww]:"fire-js-all"};/**
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
 */const ra=new Map,Ol=new Map;function Sw(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Ol.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;Ol.set(e,t);for(const n of ra.values())Sw(n,t);return!0}function ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new Wi("app","Firebase",Cw);/**
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
 */class Rw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=Tw;function Jg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(n||(n=Kg()),!n)throw sr.create("no-options");const i=ra.get(s);if(i){if(Ts(n,i.options)&&Ts(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const o=new x0(s);for(const c of Ol.values())o.addComponent(c);const a=new Rw(n,r,o);return ra.set(s,a),a}function Lu(t=Dl){const e=ra.get(t);if(!e&&t===Dl&&Kg())return Jg();if(!e)throw sr.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let s=(r=Iw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(a.join(" "));return}Vr(new or(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bw="firebase-heartbeat-database",Pw=1,Ri="firebase-heartbeat-store";let Kc=null;function Zg(){return Kc||(Kc=G0(bw,Pw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function kw(t){try{const n=(await Zg()).transaction(Ri),r=await n.objectStore(Ri).get(em(t));return await n.done,r}catch(e){if(e instanceof Tn)Or.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(n.message)}}}async function uf(t,e){try{const r=(await Zg()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,em(t)),await r.done}catch(n){if(n instanceof Tn)Or.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Or.warn(r.message)}}}function em(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Nw=1024,Dw=30*24*60*60*1e3;class Ow{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Dw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hf(),{heartbeatsToSend:r,unsentEntries:s}=Vw(this._heartbeatsCache.heartbeats),i=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hf(){return new Date().toISOString().substring(0,10)}function Vw(t,e=Nw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),df(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),df(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qg()?I0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function df(t){return na(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lw(t){Vr(new or("platform-logger",e=>new X0(e),"PRIVATE")),Vr(new or("heartbeat",e=>new Ow(e),"PRIVATE")),dn(Nl,lf,t),dn(Nl,lf,"esm2017"),dn("fire-js","")}Lw("");var Mw="firebase",Uw="10.8.0";/**
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
 */dn(Mw,Uw,"app");var Fw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Mu=Mu||{},G=Fw||self;function qa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Bw(t){return Object.prototype.hasOwnProperty.call(t,Wc)&&t[Wc]||(t[Wc]=++jw)}var Wc="closure_uid_"+(1e9*Math.random()>>>0),jw=0;function qw(t,e,n){return t.call.apply(t.bind,arguments)}function Hw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=qw:_t=Hw,_t.apply(null,arguments)}function To(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ur(){this.s=this.s,this.o=this.o}var zw=0;ur.prototype.s=!1;ur.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zw!=0)&&Bw(this)};ur.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Uu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ff(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var $w=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};G.addEventListener("test",n,e),G.removeEventListener("test",n,e)}catch{}return t}();function bi(t){return/^[\s\xa0]*$/.test(t)}function Ha(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function on(t){return Ha().indexOf(t)!=-1}function Fu(t){return Fu[" "](t),t}Fu[" "]=function(){};function Kw(t,e){var n=UT;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Ww=on("Opera"),Is=on("Trident")||on("MSIE"),nm=on("Edge"),Vl=nm||Is,rm=on("Gecko")&&!(Ha().toLowerCase().indexOf("webkit")!=-1&&!on("Edge"))&&!(on("Trident")||on("MSIE"))&&!on("Edge"),Gw=Ha().toLowerCase().indexOf("webkit")!=-1&&!on("Edge");function sm(){var t=G.document;return t?t.documentMode:void 0}var xl;e:{var Gc="",Qc=function(){var t=Ha();if(rm)return/rv:([^\);]+)(\)|;)/.exec(t);if(nm)return/Edge\/([\d\.]+)/.exec(t);if(Is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Gw)return/WebKit\/(\S+)/.exec(t);if(Ww)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qc&&(Gc=Qc?Qc[1]:""),Is){var Yc=sm();if(Yc!=null&&Yc>parseFloat(Gc)){xl=String(Yc);break e}}xl=Gc}var Ll;if(G.document&&Is){var pf=sm();Ll=pf||parseInt(xl,10)||void 0}else Ll=void 0;var Qw=Ll;function Pi(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rm){e:{try{Fu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Yw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pi.$.h.call(this)}}nt(Pi,yt);var Yw={2:"touch",3:"pen",4:"mouse"};Pi.prototype.h=function(){Pi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yi="closure_listenable_"+(1e6*Math.random()|0),Xw=0;function Jw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Xw,this.fa=this.ia=!1}function za(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Zw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function im(t){const e={};for(const n in t)e[n]=t[n];return e}const gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function om(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<gf.length;i++)n=gf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $a(t){this.src=t,this.g={},this.h=0}$a.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ul(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Jw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ml(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=tm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(za(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ul(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var ju="closure_lm_"+(1e6*Math.random()|0),Xc={};function am(t,e,n,r,s){if(r&&r.once)return lm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)am(t,e[i],n,r,s);return null}return n=zu(n),t&&t[Yi]?t.O(e,n,Qi(r)?!!r.capture:!!r,s):cm(t,e,n,!1,r,s)}function cm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Qi(s)?!!s.capture:!!s,a=Hu(t);if(a||(t[ju]=a=new $a(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=eT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)$w||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(hm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eT(){function t(n){return e.call(t.src,t.listener,n)}const e=tT;return t}function lm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)lm(t,e[i],n,r,s);return null}return n=zu(n),t&&t[Yi]?t.P(e,n,Qi(r)?!!r.capture:!!r,s):cm(t,e,n,!0,r,s)}function um(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)um(t,e[i],n,r,s);else r=Qi(r)?!!r.capture:!!r,n=zu(n),t&&t[Yi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ul(i,n,r,s),-1<n&&(za(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ul(e,n,r,s)),(n=-1<t?e[t]:null)&&qu(n))}function qu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Yi])Ml(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hu(e))?(Ml(n,t),n.h==0&&(n.src=null,e[ju]=null)):za(t)}}}function hm(t){return t in Xc?Xc[t]:Xc[t]="on"+t}function tT(t,e){if(t.fa)t=!0;else{e=new Pi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&qu(t),t=n.call(r,e)}return t}function Hu(t){return t=t[ju],t instanceof $a?t:null}var Jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function zu(t){return typeof t=="function"?t:(t[Jc]||(t[Jc]=function(e){return t.handleEvent(e)}),t[Jc])}function tt(){ur.call(this),this.i=new $a(this),this.S=this,this.J=null}nt(tt,ur);tt.prototype[Yi]=!0;tt.prototype.removeEventListener=function(t,e,n,r){um(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var s=e;e=new yt(r,t),om(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Io(o,r,!0,e)&&s}if(o=e.g=t,s=Io(o,r,!0,e)&&s,s=Io(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Io(o,r,!1,e)&&s}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)za(n[r]);delete t.g[e],t.h--}}this.J=null};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Io(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ml(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var $u=G.JSON.stringify;class nT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function rT(){var t=Ku;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sT{constructor(){this.h=this.g=null}add(e,n){const r=dm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dm=new nT(()=>new iT,t=>t.reset());class iT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function aT(t){G.setTimeout(()=>{throw t},0)}let ki,Ni=!1,Ku=new sT,fm=()=>{const t=G.Promise.resolve(void 0);ki=()=>{t.then(cT)}};var cT=()=>{for(var t;t=rT();){try{t.h.call(t.g)}catch(n){aT(n)}var e=dm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ni=!1};function Ka(t,e){tt.call(this),this.h=t||1,this.g=e||G,this.j=_t(this.qb,this),this.l=Date.now()}nt(Ka,tt);L=Ka.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(Wu(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Ka.$.N.call(this),Wu(this),delete this.g};function Gu(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function pm(t){t.g=Gu(()=>{t.g=null,t.i&&(t.i=!1,pm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lT extends ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pm(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(t){ur.call(this),this.h=t,this.g={}}nt(Di,ur);var mf=[];function gm(t,e,n,r){Array.isArray(n)||(n&&(mf[0]=n.toString()),n=mf);for(var s=0;s<n.length;s++){var i=am(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function mm(t){Bu(t.g,function(e,n){this.g.hasOwnProperty(n)&&qu(e)},t),t.g={}}Di.prototype.N=function(){Di.$.N.call(this),mm(this)};Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wa(){this.g=!0}Wa.prototype.Ea=function(){this.g=!1};function uT(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function hT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ss(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fT(t,n)+(r?" "+r:"")})}function dT(t,e){t.info(function(){return"TIMEOUT: "+e})}Wa.prototype.info=function(){};function fT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $u(n)}catch{return e}}var $r={},_f=null;function Ga(){return _f=_f||new tt}$r.Ta="serverreachability";function _m(t){yt.call(this,$r.Ta,t)}nt(_m,yt);function Oi(t){const e=Ga();ct(e,new _m(e))}$r.STAT_EVENT="statevent";function ym(t,e){yt.call(this,$r.STAT_EVENT,t),this.stat=e}nt(ym,yt);function It(t){const e=Ga();ct(e,new ym(e,t))}$r.Ua="timingevent";function vm(t,e){yt.call(this,$r.Ua,t),this.size=e}nt(vm,yt);function Xi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Em={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qu(){}Qu.prototype.h=null;function yf(t){return t.h||(t.h=t.i())}function Am(){}var Ji={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yu(){yt.call(this,"d")}nt(Yu,yt);function Xu(){yt.call(this,"c")}nt(Xu,yt);var Fl;function Ya(){}nt(Ya,Qu);Ya.prototype.g=function(){return new XMLHttpRequest};Ya.prototype.i=function(){return{}};Fl=new Ya;function Zi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Di(this),this.P=pT,t=Vl?125:void 0,this.V=new Ka(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wm}function wm(){this.i=null,this.g="",this.h=!1}var pT=45e3,Tm={},Bl={};L=Zi.prototype;L.setTimeout=function(t){this.P=t};function jl(t,e,n){t.L=1,t.A=Ja(On(e)),t.u=n,t.S=!0,Im(t,null)}function Im(t,e){t.G=Date.now(),eo(t),t.B=On(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Dm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new wm,t.g=Zm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new lT(_t(t.Pa,t,t.g),t.O)),gm(t.U,t.g,"readystatechange",t.nb),e=t.I?im(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Oi(),uT(t.j,t.v,t.B,t.m,t.W,t.u)}L.nb=function(t){t=t.target;const e=this.M;e&&an(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=an(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Vl||this.g&&(this.h.h||this.g.ja()||wf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Oi(3):Oi(2)),Xa(this);var n=this.g.da();this.ca=n;t:if(Sm(this)){var r=wf(this.g);t="";var s=r.length,i=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),fi(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,hT(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bi(a)){var l=a;break t}}l=null}if(n=l)ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ql(this,n);else{this.i=!1,this.s=3,It(12),Ar(this),fi(this);break e}}this.S?(Cm(this,u,o),Vl&&this.i&&u==3&&(gm(this.U,this.V,"tick",this.mb),this.V.start())):(ss(this.j,this.m,o,null),ql(this,o)),u==4&&Ar(this),this.i&&!this.J&&(u==4?Qm(this.l,this):(this.i=!1,eo(this)))}else xT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Ar(this),fi(this)}}}catch{}finally{}};function Sm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Cm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=gT(t,n),s==Bl){e==4&&(t.s=4,It(14),r=!1),ss(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Tm){t.s=4,It(15),ss(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ss(t.j,t.m,s,null),ql(t,s);Sm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,It(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),rh(e),e.M=!0,It(11))):(ss(t.j,t.m,n,"[Invalid Chunked Response]"),Ar(t),fi(t))}L.mb=function(){if(this.g){var t=an(this.g),e=this.g.ja();this.o<e.length&&(Xa(this),Cm(this,t,e),this.i&&t!=4&&eo(this))}};function gT(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Bl:(n=Number(e.substring(n,r)),isNaN(n)?Tm:(r+=1,r+n>e.length?Bl:(e=e.slice(r,r+n),t.o=r+n,e)))}L.cancel=function(){this.J=!0,Ar(this)};function eo(t){t.Y=Date.now()+t.P,Rm(t,t.P)}function Rm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Xi(_t(t.lb,t),e)}function Xa(t){t.C&&(G.clearTimeout(t.C),t.C=null)}L.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(dT(this.j,this.B),this.L!=2&&(Oi(),It(17)),Ar(this),this.s=2,fi(this)):Rm(this,this.Y-t)};function fi(t){t.l.H==0||t.J||Qm(t.l,t)}function Ar(t){Xa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wu(t.V),mm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ql(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Hl(n.i,t))){if(!t.K&&Hl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)oa(n),nc(n);else break e;nh(n),It(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xi(_t(n.ib,n),6e3));if(1>=xm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else wr(n,11)}else if((t.K||n.g==t)&&oa(n),!bi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ju(i,i.h),i.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Re(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Jm(r,r.J?r.pa:null,r.Y),o.K){Lm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Xa(a),eo(a)),r.g=o}else Wm(r);0<n.j.length&&rc(n)}else l[0]!="stop"&&l[0]!="close"||wr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?wr(n,7):th(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Oi(4)}catch{}}function mT(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function _T(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function bm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_T(t),r=mT(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Pm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Pr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pr){this.h=t.h,sa(this,t.j),this.s=t.s,this.g=t.g,ia(this,t.m),this.l=t.l;var e=t.i,n=new Vi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vf(this,n),this.o=t.o}else t&&(e=String(t).match(Pm))?(this.h=!1,sa(this,e[1]||"",!0),this.s=ni(e[2]||""),this.g=ni(e[3]||"",!0),ia(this,e[4]),this.l=ni(e[5]||"",!0),vf(this,e[6]||"",!0),this.o=ni(e[7]||"")):(this.h=!1,this.i=new Vi(null,this.h))}Pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ri(e,Ef,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ri(e,Ef,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ri(n,n.charAt(0)=="/"?AT:ET,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ri(n,TT)),t.join("")};function On(t){return new Pr(t)}function sa(t,e,n){t.j=n?ni(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ia(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vf(t,e,n){e instanceof Vi?(t.i=e,IT(t.i,t.h)):(n||(e=ri(e,wT)),t.i=new Vi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Ja(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ni(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ri(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ef=/[#\/\?@]/g,ET=/[#\?:]/g,AT=/[#\?]/g,wT=/[#\?@]/g,TT=/#/g;function Vi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hr(t){t.g||(t.g=new Map,t.h=0,t.i&&yT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Vi.prototype;L.add=function(t,e){hr(this),this.i=null,t=Fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function km(t,e){hr(t),e=Fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Nm(t,e){return hr(t),e=Fs(t,e),t.g.has(e)}L.forEach=function(t,e){hr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};L.ta=function(){hr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};L.Z=function(t){hr(this);let e=[];if(typeof t=="string")Nm(this,t)&&(e=e.concat(this.g.get(Fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return hr(this),this.i=null,t=Fs(this,t),Nm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Dm(t,e,n){km(t,e),0<n.length&&(t.i=null,t.g.set(Fs(t,e),Uu(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function IT(t,e){e&&!t.j&&(hr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(km(this,r),Dm(this,s,n))},t)),t.j=e}var ST=class{constructor(t,e){this.g=t,this.map=e}};function Om(t){this.l=t||CT,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CT=10;function Vm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xm(t){return t.h?1:t.g?t.g.size:0}function Hl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ju(t,e){t.g?t.g.add(e):t.h=e}function Lm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Om.prototype.cancel=function(){if(this.i=Mm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Uu(t.i)}var RT=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function bT(){this.g=new RT}function PT(t,e,n){const r=n||"";try{bm(t,function(s,i){let o=s;Qi(s)&&(o=$u(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function kT(t,e){const n=new Wa;if(G.Image){const r=new Image;r.onload=To(So,n,r,"TestLoadImage: loaded",!0,e),r.onerror=To(So,n,r,"TestLoadImage: error",!1,e),r.onabort=To(So,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=To(So,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function So(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Za(t){this.l=t.ec||null,this.j=t.ob||!1}nt(Za,Qu);Za.prototype.g=function(){return new ec(this.l,this.j)};Za.prototype.i=function(t){return function(){return t}}({});function ec(t,e){tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Zu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(ec,tt);var Zu=0;L=ec.prototype;L.open=function(t,e){if(this.readyState!=Zu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xi(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,to(this)),this.readyState=Zu};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Um(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Um(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?to(this):xi(this),this.readyState==3&&Um(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,to(this))};L.Ya=function(t){this.g&&(this.response=t,to(this))};L.ka=function(){this.g&&to(this)};function to(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xi(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NT=G.JSON.parse;function xe(t){tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fm,this.L=this.M=!1}nt(xe,tt);var Fm="",DT=/^https?$/i,OT=["POST","PUT"];L=xe.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fl.g(),this.C=this.u?yf(this.u):yf(Fl),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Af(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=tm(OT,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{qm(this),0<this.B&&((this.L=VT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=Gu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Af(this,i)}};function VT(t){return Is&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Mu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function Af(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bm(t),tc(t)}function Bm(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),tc(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tc(this,!0)),xe.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?jm(this):this.kb())};L.kb=function(){jm(this)};function jm(t){if(t.h&&typeof Mu<"u"&&(!t.C[1]||an(t)!=4||t.da()!=2)){if(t.v&&an(t)==4)Gu(t.La,0,t);else if(ct(t,"readystatechange"),an(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Pm)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!DT.test(s?s.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var i=2<an(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Bm(t)}}finally{tc(t)}}}}function tc(t,e){if(t.g){qm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function qm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function an(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NT(e)}};function wf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Fm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function xT(t){const e={};t=(t.g&&2<=an(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(bi(t[r]))continue;var n=oT(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Zw(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hm(t){let e="";return Bu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function eh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Hm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zm(t){this.Ga=0,this.j=[],this.l=new Wa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qs("baseRetryDelayMs",5e3,t),this.hb=Qs("retryDelaySeedMs",1e4,t),this.eb=Qs("forwardChannelMaxRetries",2,t),this.xa=Qs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Om(t&&t.concurrentRequestLimit),this.Ja=new bT,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=zm.prototype;L.ra=8;L.H=1;function th(t){if($m(t),t.H==3){var e=t.W++,n=On(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),no(t,n),e=new Zi(t,t.l,e),e.L=2,e.A=Ja(On(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.A,n=!0),n||(e.g=Zm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),eo(e)}Xm(t)}function nc(t){t.g&&(rh(t),t.g.cancel(),t.g=null)}function $m(t){nc(t),t.u&&(G.clearTimeout(t.u),t.u=null),oa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function rc(t){if(!Vm(t.i)&&!t.m){t.m=!0;var e=t.Na;ki||fm(),Ni||(ki(),Ni=!0),Ku.add(e,t),t.C=0}}function LT(t,e){return xm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xi(_t(t.Na,t,e),Ym(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Zi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=im(i),om(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Km(this,s,e),n=On(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),no(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Hm(i)))+"&"+e:this.o&&eh(n,this.o,i)),Ju(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,jl(s,n,null)):jl(s,n,e),this.H=2}}else this.H==3&&(t?Tf(this,t):this.j.length==0||Vm(this.i)||Tf(this))};function Tf(t,e){var n;e?n=e.m:n=t.W++;const r=On(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),no(t,r),t.o&&t.s&&eh(r,t.o,t.s),n=new Zi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Km(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ju(t.i,n),jl(n,r,e)}function no(t,e){t.na&&Bu(t.na,function(n,r){Re(e,r,n)}),t.h&&bm({},function(n,r){Re(e,r,n)})}function Km(t,e,n){n=Math.min(t.j.length,n);var r=t.h?_t(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{PT(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Wm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ki||fm(),Ni||(ki(),Ni=!0),Ku.add(e,t),t.A=0}}function nh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xi(_t(t.Ma,t),Ym(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,Gm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xi(_t(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),nc(this),Gm(this))};function rh(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Gm(t){t.g=new Zi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=On(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),no(t,e),t.o&&t.s&&eh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ja(On(e)),n.u=null,n.S=!0,Im(n,t)}L.ib=function(){this.v!=null&&(this.v=null,nc(this),nh(this),It(19))};function oa(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Qm(t,e){var n=null;if(t.g==e){oa(t),rh(t),t.g=null;var r=2}else if(Hl(t.i,e))n=e.F,Lm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ga(),ct(r,new vm(r,n)),rc(t)}else Wm(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&LT(t,e)||r==2&&nh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:wr(t,5);break;case 4:wr(t,10);break;case 3:wr(t,6);break;default:wr(t,2)}}}function Ym(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function wr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=_t(t.pb,t);n||(n=new Pr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||sa(n,"https"),Ja(n)),kT(n.toString(),r)}else It(2);t.H=0,t.h&&t.h.za(e),Xm(t),$m(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function Xm(t){if(t.H=0,t.ma=[],t.h){const e=Mm(t.i);(e.length!=0||t.j.length!=0)&&(ff(t.ma,e),ff(t.ma,t.j),t.i.i.length=0,Uu(t.j),t.j.length=0),t.h.ya()}}function Jm(t,e,n){var r=n instanceof Pr?On(n):new Pr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ia(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Pr(null);r&&sa(i,r),e&&(i.g=e),s&&ia(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),no(t,r),r}function Zm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new xe(new Za({ob:n})):new xe(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function e_(){}L=e_.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function aa(){if(Is&&!(10<=Number(Qw)))throw Error("Environmental error: no available transport.")}aa.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){tt.call(this),this.g=new zm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!bi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bs(this)}nt(Bt,tt);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Jm(t,null,t.Y),rc(t)};Bt.prototype.close=function(){th(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$u(t),t=n);e.j.push(new ST(e.fb++,t)),e.H==3&&rc(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,th(this.g),delete this.g,Bt.$.N.call(this)};function t_(t){Yu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(t_,Yu);function n_(){Xu.call(this),this.status=1}nt(n_,Xu);function Bs(t){this.g=t}nt(Bs,e_);Bs.prototype.Ba=function(){ct(this.g,"a")};Bs.prototype.Aa=function(t){ct(this.g,new t_(t))};Bs.prototype.za=function(t){ct(this.g,new n_)};Bs.prototype.ya=function(){ct(this.g,"b")};function MT(){this.blockSize=-1}function Xt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(Xt,MT);Xt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Zc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Xt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Zc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Zc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Zc(this,r),s=0;break}}this.h=s,this.i+=e};Xt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var UT={};function sh(t){return-128<=t&&128>t?Kw(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function cn(t){if(isNaN(t)||!isFinite(t))return us;if(0>t)return ot(cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=zl;return new Ee(e,0)}function r_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ot(r_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=cn(Math.pow(e,8)),r=us,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=cn(Math.pow(e,i)),r=r.R(i).add(cn(o))):(r=r.R(n),r=r.add(cn(o)))}return r}var zl=4294967296,us=sh(0),$l=sh(1),If=sh(16777216);L=Ee.prototype;L.ea=function(){if(qt(this))return-ot(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:zl+r)*e,e*=zl}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Rn(this))return"0";if(qt(this))return"-"+ot(this).toString(t);for(var e=cn(Math.pow(t,6)),n=this,r="";;){var s=la(n,e).g;n=ca(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Rn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function qt(t){return t.h==-1}L.X=function(t){return t=ca(this,t),qt(t)?-1:Rn(t)?0:1};function ot(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add($l)}L.abs=function(){return qt(this)?ot(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function ca(t,e){return t.add(ot(e))}L.R=function(t){if(Rn(this)||Rn(t))return us;if(qt(this))return qt(t)?ot(this).R(ot(t)):ot(ot(this).R(t));if(qt(t))return ot(this.R(ot(t)));if(0>this.X(If)&&0>t.X(If))return cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Co(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Co(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Co(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Co(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function Co(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ys(t,e){this.g=t,this.h=e}function la(t,e){if(Rn(e))throw Error("division by zero");if(Rn(t))return new Ys(us,us);if(qt(t))return e=la(ot(t),e),new Ys(ot(e.g),ot(e.h));if(qt(e))return e=la(t,ot(e)),new Ys(ot(e.g),e.h);if(30<t.g.length){if(qt(t)||qt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$l,r=e;0>=r.X(t);)n=Sf(n),r=Sf(r);var s=Xr(n,1),i=Xr(r,1);for(r=Xr(r,2),n=Xr(n,2);!Rn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Xr(r,1),n=Xr(n,1)}return e=ca(t,s.R(e)),new Ys(s,e)}for(s=us;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=cn(n),o=i.R(e);qt(o)||0<o.X(t);)n-=r,i=cn(n),o=i.R(e);Rn(i)&&(i=$l),s=s.add(i),t=ca(t,o)}return new Ys(s,t)}L.gb=function(t){return la(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function Sf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function Xr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}aa.prototype.createWebChannel=aa.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Qa.NO_ERROR=0;Qa.TIMEOUT=8;Qa.HTTP_ERROR=6;Em.COMPLETE="complete";Am.EventType=Ji;Ji.OPEN="a";Ji.CLOSE="b";Ji.ERROR="c";Ji.MESSAGE="d";tt.prototype.listen=tt.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;Xt.prototype.digest=Xt.prototype.l;Xt.prototype.reset=Xt.prototype.reset;Xt.prototype.update=Xt.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=cn;Ee.fromString=r_;var FT=function(){return new aa},BT=function(){return Ga()},el=Qa,jT=Em,qT=$r,Cf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ro=Am,HT=xe,zT=Xt,hs=Ee;const Rf="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let js="10.8.0";/**
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
 */const xr=new Vu("@firebase/firestore");function Xs(){return xr.logLevel}function x(t,...e){if(xr.logLevel<=ae.DEBUG){const n=e.map(ih);xr.debug(`Firestore (${js}): ${t}`,...n)}}function vn(t,...e){if(xr.logLevel<=ae.ERROR){const n=e.map(ih);xr.error(`Firestore (${js}): ${t}`,...n)}}function Ss(t,...e){if(xr.logLevel<=ae.WARN){const n=e.map(ih);xr.warn(`Firestore (${js}): ${t}`,...n)}}function ih(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function Ie(t,e){t||Q()}function ne(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class s_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class KT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WT{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new s_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new ft(e)}}class GT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new GT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new YT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class i_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=JT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Cs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Qe(0,0))}static max(){return new J(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Li{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Li.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Li?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Li{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const ZT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Li{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return ZT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Oe.fromString(e))}static fromName(e){return new K(Oe.fromString(e).popFirst(5))}static empty(){return new K(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Oe(e.slice()))}}function eI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new ar(s,K.empty(),e)}function tI(t){return new ar(t.readTime,t.key,-1)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(J.min(),K.empty(),-1)}static max(){return new ar(J.max(),K.empty(),-1)}}function nI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const rI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ro(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==rI)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(s=>s?I.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new I((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new I((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class oh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Nn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new pi(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=ah(r.target.error);this.V.reject(new pi(e,s))}}static open(e,n,r,s){try{return new oh(n,e.transaction(s,r))}catch(i){throw new pi(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new oI(n)}}class Tr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Tr.S(ze())===12.2&&vn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),vr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Qg())return!1;if(Tr.C())return!0;const e=ze(),n=Tr.S(e),r=0<n&&n<10,s=Tr.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new pi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new H(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new H(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new pi(e,o))},s.onupgradeneeded=i=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=oh.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),I.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class iI{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return vr(this.k.delete())}}class pi extends H{constructor(e,n){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function so(t){return t.name==="IndexedDbTransactionError"}class oI{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(x("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),vr(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),vr(this.store.add(e))}get(e){return vr(this.store.get(e)).next(n=>(n===void 0&&(n=null),x("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),vr(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),vr(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new I((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new I((r,s)=>{n.onerror=i=>{const o=ah(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new I((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new iI(a),l=n(a.primaryKey,a.value,c);if(l instanceof I){const u=l.catch(h=>(c.done(),I.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function vr(t){return new I((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=ah(r.target.error);n(s)}})}let bf=!1;function ah(t){const e=Tr.S(ze());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new H("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bf||(bf=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class ch{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ch._e=-1;function sc(t){return t==null}function ua(t){return t===0&&1/t==-1/0}function aI(t){return typeof t=="number"&&Number.isInteger(t)&&!ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function o_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new lt(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class a_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new a_("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const cI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=cI.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
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
 */function lh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uh(t){const e=t.mapValue.fields.__previous_value__;return lh(e)?uh(e):e}function Mi(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class lI{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ui&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lh(t)?4:uI(t)?9007199254740991:10:Q()}function En(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cr(s.timestampValue),a=cr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Lr(s.bytesValue).isEqual(Lr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),a=He(i.doubleValue);return o===a?ua(o)===ua(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Pf(o)!==Pf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!En(o[c],a[c])))return!1;return!0}(t,e);default:return Q()}}function Fi(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=He(i.integerValue||i.doubleValue),c=He(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Nf(t.timestampValue,e.timestampValue);case 4:return Nf(Mi(t),Mi(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Lr(i),c=Lr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ge(a[l],c[l]);if(u!==0)return u}return ge(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(He(i.latitude),He(o.latitude));return a!==0?a:ge(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Rs(a[l],c[l]);if(u)return u}return ge(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Po.mapValue&&o===Po.mapValue)return 0;if(i===Po.mapValue)return 1;if(o===Po.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ge(c[h],u[h]);if(d!==0)return d;const g=Rs(a[c[h]],l[u[h]]);if(g!==0)return g}return ge(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Nf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=cr(t),r=cr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function bs(t){return Kl(t)}function Kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Kl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Kl(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function Wl(t){return!!t&&"integerValue"in t}function hh(t){return!!t&&"arrayValue"in t}function Df(t){return!!t&&"nullValue"in t}function Of(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fo(t){return!!t&&"mapValue"in t}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=gi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(gi(this.value))}}function c_(t){const e=[];return Kr(t.fields,(n,r)=>{const s=new at([n]);if(Fo(r)){const i=c_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
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
 */class pt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,J.min(),J.min(),J.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,J.min(),J.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,J.min(),J.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ha{constructor(e,n){this.position=e,this.inclusive=n}}function Vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class da{constructor(e,n="asc"){this.field=e,this.dir=n}}function hI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class l_{}class Ge extends l_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fI(e,n,r):n==="array-contains"?new mI(e,r):n==="in"?new _I(e,r):n==="not-in"?new yI(e,r):n==="array-contains-any"?new vI(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pI(e,r):new gI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends l_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new An(e,n)}matches(e){return u_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function u_(t){return t.op==="and"}function h_(t){return dI(t)&&u_(t)}function dI(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function Gl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(h_(t))return t.filters.map(e=>Gl(e)).join(",");{const e=t.filters.map(n=>Gl(n)).join(",");return`${t.op}(${e})`}}function d_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof An?function(r,s){return s instanceof An&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&d_(o,s.filters[a]),!0):!1}(t,e):void Q()}function f_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${bs(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(f_).join(" ,")+"}"}(t):"Filter"}class fI extends Ge{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class pI extends Ge{constructor(e,n){super(e,"in",n),this.keys=p_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gI extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=p_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function p_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class mI extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hh(n)&&Fi(n.arrayValue,this.value)}}class _I extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fi(this.value.arrayValue,n)}}class yI extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fi(this.value.arrayValue,n)}}class vI extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fi(this.value.arrayValue,r))}}/**
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
 */class EI{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Lf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new EI(t,e,n,r,s,i,o)}function dh(t){const e=ne(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bs(r)).join(",")),e.ce=n}return e.ce}function fh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!d_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xf(t.startAt,e.startAt)&&xf(t.endAt,e.endAt)}function Ql(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ic{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function AI(t,e,n,r,s,i,o,a){return new ic(t,e,n,r,s,i,o,a)}function ph(t){return new ic(t)}function Mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wI(t){return t.collectionGroup!==null}function mi(t){const e=ne(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new da(i,r))}),n.has(at.keyField().canonicalString())||e.le.push(new da(at.keyField(),r))}return e.le}function fn(t){const e=ne(t);return e.he||(e.he=TI(e,mi(t))),e.he}function TI(t,e){if(t.limitType==="F")return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new da(s.field,i)});const n=t.endAt?new ha(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ha(t.startAt.position,t.startAt.inclusive):null;return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yl(t,e,n){return new ic(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return fh(fn(t),fn(e))&&t.limitType===e.limitType}function g_(t){return`${dh(fn(t))}|lt:${t.limitType}`}function ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>f_(s)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bs(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function ac(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of mi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Vf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,mi(r),s)||r.endAt&&!function(o,a,c){const l=Vf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,mi(r),s))}(t,e)}function II(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function m_(t){return(e,n)=>{let r=!1;for(const s of mi(t)){const i=SI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function SI(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Rs(c,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return o_(this.inner)}size(){return this.innerSize}}/**
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
 */const CI=new Ne(K.comparator);function Vn(){return CI}const __=new Ne(K.comparator);function si(...t){let e=__;for(const n of t)e=e.insert(n.key,n);return e}function y_(t){let e=__;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return _i()}function v_(){return _i()}function _i(){return new qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const RI=new Ne(K.comparator),bI=new lt(K.comparator);function oe(...t){let e=bI;for(const n of t)e=e.add(n);return e}const PI=new lt(ge);function kI(){return PI}/**
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
 */function E_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function A_(t){return{integerValue:""+t}}function NI(t,e){return aI(e)?A_(e):E_(t,e)}/**
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
 */class cc{constructor(){this._=void 0}}function DI(t,e,n){return t instanceof fa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lh(i)&&(i=uh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ps?T_(t,e):t instanceof ks?I_(t,e):function(s,i){const o=w_(s,i),a=Uf(o)+Uf(s.Ie);return Wl(o)&&Wl(s.Ie)?A_(a):E_(s.serializer,a)}(t,e)}function OI(t,e,n){return t instanceof Ps?T_(t,e):t instanceof ks?I_(t,e):n}function w_(t,e){return t instanceof pa?function(r){return Wl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fa extends cc{}class Ps extends cc{constructor(e){super(),this.elements=e}}function T_(t,e){const n=S_(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class ks extends cc{constructor(e){super(),this.elements=e}}function I_(t,e){let n=S_(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class pa extends cc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Uf(t){return He(t.integerValue||t.doubleValue)}function S_(t){return hh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class C_{constructor(e,n){this.field=e,this.transform=n}}function VI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ps&&s instanceof Ps||r instanceof ks&&s instanceof ks?Cs(r.elements,s.elements,En):r instanceof pa&&s instanceof pa?En(r.Ie,s.Ie):r instanceof fa&&s instanceof fa}(t.transform,e.transform)}class xI{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function R_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new P_(t.key,pn.none()):new io(t.key,t.data,pn.none());{const n=t.data,r=bt.empty();let s=new lt(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new dr(t.key,r,new Mt(s.toArray()),pn.none())}}function LI(t,e,n){t instanceof io?function(s,i,o){const a=s.value.clone(),c=Bf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(s,i,o){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Bf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(b_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yi(t,e,n,r){return t instanceof io?function(i,o,a,c){if(!Bo(i.precondition,o))return a;const l=i.value.clone(),u=jf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(i,o,a,c){if(!Bo(i.precondition,o))return a;const l=jf(i.fieldTransforms,c,o),u=o.data;return u.setAll(b_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function MI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=w_(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function Ff(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cs(r,s,(i,o)=>VI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class io extends lc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends lc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function b_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bf(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,OI(o,a,n[s]))}return r}function jf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,DI(i,o,e))}return r}class P_ extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UI extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&LI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=v_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=R_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,r)=>Ff(n,r))&&Cs(this.baseMutations,e.baseMutations,(n,r)=>Ff(n,r))}}class gh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return RI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gh(e,n,r,s)}}/**
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
 */class BI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,le;function qI(t){switch(t){default:return Q();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function k_(t){if(t===void 0)return vn("GRPC error has no .code"),R.UNKNOWN;switch(t){case je.OK:return R.OK;case je.CANCELLED:return R.CANCELLED;case je.UNKNOWN:return R.UNKNOWN;case je.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case je.INTERNAL:return R.INTERNAL;case je.UNAVAILABLE:return R.UNAVAILABLE;case je.UNAUTHENTICATED:return R.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case je.NOT_FOUND:return R.NOT_FOUND;case je.ALREADY_EXISTS:return R.ALREADY_EXISTS;case je.PERMISSION_DENIED:return R.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case je.ABORTED:return R.ABORTED;case je.OUT_OF_RANGE:return R.OUT_OF_RANGE;case je.UNIMPLEMENTED:return R.UNIMPLEMENTED;case je.DATA_LOSS:return R.DATA_LOSS;default:return Q()}}(le=je||(je={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function HI(){return new TextEncoder}/**
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
 */const zI=new hs([4294967295,4294967295],0);function qf(t){const e=HI().encode(t),n=new zT;return n.update(e),new Uint8Array(n.digest())}function Hf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hs([n,r],0),new hs([s,i],0)]}class mh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ii(`Invalid padding: ${n}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ii(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=hs.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(hs.fromNumber(r)));return s.compare(zI)===1&&(s=new hs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=qf(e),[r,s]=Hf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=qf(e),[r,s]=Hf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,oo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uc(J.min(),s,new Ne(ge),Vn(),oe())}}class oo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oo(r,n,oe(),oe(),oe())}}/**
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
 */class jo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class N_{constructor(e,n){this.targetId=e,this.fe=n}}class D_{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zf{constructor(){this.ge=0,this.pe=Kf(),this.ye=vt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=oe(),n=oe(),r=oe();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new oo(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Kf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ie(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class $I{constructor(e){this.Le=e,this.ke=new Map,this.qe=Vn(),this.Qe=$f(),this.Ke=new Ne(ge)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ql(i))if(r===0){const o=new K(i.path);this.We(n,o,pt.newNoDocument(o,J.min()))}else Ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Lr(r).toUint8Array()}catch(c){if(c instanceof a_)return Ss("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new mh(o,s,i)}catch(c){return Ss(c instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ql(a.target)){const c=new K(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,pt.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=oe();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new uc(e,n,this.Ke,this.qe,r);return this.qe=Vn(),this.Qe=$f(),this.Ke=new Ne(ge),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new zf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new lt(ge),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new zf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $f(){return new Ne(K.comparator)}function Kf(){return new Ne(K.comparator)}const KI={asc:"ASCENDING",desc:"DESCENDING"},WI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GI={and:"AND",or:"OR"};class QI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xl(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YI(t,e){return ga(t,e.toTimestamp())}function gn(t){return Ie(!!t),J.fromTimestamp(function(n){const r=cr(n);return new Qe(r.seconds,r.nanos)}(t))}function _h(t,e){return Jl(t,e).canonicalString()}function Jl(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function V_(t){const e=Oe.fromString(t);return Ie(F_(e)),e}function Zl(t,e){return _h(t.databaseId,e.path)}function tl(t,e){const n=V_(e);if(n.get(1)!==t.databaseId.projectId)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(L_(n))}function x_(t,e){return _h(t.databaseId,e)}function XI(t){const e=V_(t);return e.length===4?Oe.emptyPath():L_(e)}function eu(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L_(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wf(t,e,n){return{name:Zl(t,e),fields:n.value.mapValue.fields}}function JI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ie(u===void 0||typeof u=="string"),vt.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:k_(l.code);return new H(u,l.message||"")}(o);n=new D_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tl(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):J.min(),a=new bt({mapValue:{fields:r.document.fields}}),c=pt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new jo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tl(t,r.document),i=r.readTime?gn(r.readTime):J.min(),o=pt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tl(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jI(s,i),a=r.targetId;n=new N_(a,o)}}return n}function ZI(t,e){let n;if(e instanceof io)n={update:Wf(t,e.key,e.value)};else if(e instanceof P_)n={delete:Zl(t,e.key)};else if(e instanceof dr)n={update:Wf(t,e.key,e.data),updateMask:cS(e.fieldMask)};else{if(!(e instanceof UI))return Q();n={verify:Zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ps)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ks)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pa)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:YI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function eS(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(J.min())&&(o=gn(i)),new xI(o,s.transformResults||[])}(n,e))):[]}function tS(t,e){return{documents:[x_(t,e.path)]}}function nS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=x_(t,s);const i=function(l){if(l.length!==0)return U_(An.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:ns(d.field),direction:iS(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Xl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function rS(t){let e=XI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=M_(h);return d instanceof An&&h_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new da(rs(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,sc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,g=h.values||[];return new ha(g,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,g=h.values||[];return new ha(g,d)}(n.endAt)),AI(e,s,o,i,a,"F",c,l)}function sS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function M_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=rs(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rs(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rs(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rs(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>M_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function iS(t){return KI[t]}function oS(t){return WI[t]}function aS(t){return GI[t]}function ns(t){return{fieldPath:t.canonicalString()}}function rs(t){return at.fromServerFormat(t.fieldPath)}function U_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Of(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NAN"}};if(Df(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Of(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NAN"}};if(Df(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(n.field),op:oS(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(s=>U_(s));return r.length===1?r[0]:{compositeFilter:{op:aS(n.op),filters:r}}}(t):Q()}function cS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function F_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=J.min(),o=J.min(),a=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lS{constructor(e){this.ct=e}}function uS(t){const e=rS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yl(e,e.limit,"L"):e}/**
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
 */class hS{constructor(){this._n=new dS}addToCollectionParentIndex(e,n){return this._n.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(ar.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class dS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(Oe.comparator)).toArray()}}/**
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
 */class Ns{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ns(0)}static Bn(){return new Ns(-1)}}/**
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
 */class fS{constructor(){this.changes=new qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&yi(r.mutation,s,Mt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=Ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=si();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Vn();const o=_i(),a=function(){return _i()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof dr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),yi(u.mutation,l,u.mutation.getFieldMask(),Qe.now())):o.set(l.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new pS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_i();let s=new Ne((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Mt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=v_();u.forEach(d=>{if(!i.has(d)){const g=R_(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):I.resolve(Ir());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:y_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=si();return this.indexManager.getCollectionParents(e,i).next(a=>I.forEach(a,c=>{const l=function(h,d){return new ic(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,pt.newInvalidDocument(u)))});let a=si();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&yi(u.mutation,l,Mt.empty(),Qe.now()),ac(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class mS{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:uS(s.bundledQuery),readTime:gn(s.readTime)}}(n)),I.resolve()}}/**
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
 */class _S{constructor(){this.overlays=new Ne(K.comparator),this.hr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return I.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const s=Ir(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return I.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Ir(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ir(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return I.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BI(n,r));let i=this.hr.get(n);i===void 0&&(i=oe(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class yh{constructor(){this.Pr=new lt(Je.Ir),this.Tr=new lt(Je.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Je(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new Oe([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new Oe([])),r=new Je(n,e),s=new Je(n,e+1);let i=oe();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||ge(e.pr,n.pr)}static Er(e,n){return ge(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
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
 */class yS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new lt(Je.Ir)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FI(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(ge);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Je(new K(i),0);let a=new lt(ge);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Je(n,0),s=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vS{constructor(e){this.vr=e,this.docs=function(){return new Ne(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||nI(tI(u),r)<=0||(s.has(u.key)||ac(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}Fr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ES(this)}getSize(e){return I.resolve(this.size)}}class ES extends fS{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class AS{constructor(e){this.persistence=e,this.Mr=new qs(n=>dh(n),fh),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new yh,this.targetCount=0,this.Br=Ns.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.qn(n),I.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),I.waitFor(i).next(()=>s)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Nr.containsKey(n))}}/**
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
 */class wS{constructor(e,n){this.Lr={},this.overlays={},this.kr=new ch(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new AS(this),this.indexManager=new hS,this.remoteDocumentCache=function(s){return new vS(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new lS(n),this.$r=new mS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _S,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new yS(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const s=new TS(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class TS extends sI{constructor(e){super(),this.currentSequenceNumber=e}}class vh{constructor(e){this.persistence=e,this.zr=new yh,this.jr=null}static Hr(e){return new vh(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{const s=K.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Eh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eh(e,n.fromCache,r,s)}}/**
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
 */class IS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SS{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return T0()?8:Tr.v(ze())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new IS;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Xs()<=ae.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(Xs()<=ae.DEBUG&&x("QueryEngine","Query:",ts(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Xs()<=ae.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):I.resolve())}ji(e,n){if(Mf(n))return I.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yl(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,Yl(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Mf(n)||s.isEqual(J.min())?I.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?I.resolve(null):(Xs()<=ae.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ts(n)),this.es(e,o,n,eI(s,-1)).next(a=>a))})}Zi(e,n){let r=new lt(m_(e));return n.forEach((s,i)=>{ac(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Xs()<=ae.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",ts(n)),this.zi.getDocumentsMatchingQuery(e,n,ar.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class CS{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Ne(ge),this.rs=new qs(i=>dh(i),fh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gS(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function RS(t,e,n,r){return new CS(t,e,n,r)}async function B_(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=oe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function bS(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let g=I.resolve();return d.forEach(y=>{g=g.next(()=>u.getEntry(c,y)).next(w=>{const E=l.docVersions.get(y);Ie(E!==null),w.version.compareTo(E)<0&&(h.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=oe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function j_(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function PS(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(vt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(w,E,C){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=Vn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(kS(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(J.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function kS(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function NS(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DS(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,I.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function tu(t,e,n){const r=ne(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!so(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Gf(t,e,n){const r=ne(t);let s=J.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ne(c),d=h.rs.get(u);return d!==void 0?I.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,fn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:oe())).next(a=>(OS(r,II(e),a),{documents:a,hs:i})))}function OS(t,e,n){let r=t.ss.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Qf{constructor(){this.activeTargetIds=kI()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VS{constructor(){this.no=new Qf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Qf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xS{io(e){}shutdown(){}}/**
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
 */class Yf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ko=null;function nl(){return ko===null?ko=function(){return 268435456+Math.round(2147483648*Math.random())}():ko++,"0x"+ko.toString(16)}/**
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
 */const LS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class MS{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const dt="WebChannelConnection";class US extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=nl(),c=this.bo(n,r.toUriEncodedString());x("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(x("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ss("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+js}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=LS[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=nl();return new Promise((o,a)=>{const c=new HT;c.setWithCredentials(!0),c.listenOnce(jT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case el.NO_ERROR:const u=c.getResponseJson();x(dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case el.TIMEOUT:x(dt,`RPC '${e}' ${i} timed out`),a(new H(R.DEADLINE_EXCEEDED,"Request time out"));break;case el.HTTP_ERROR:const h=c.getStatus();if(x(dt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const y=function(E){const C=E.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(C)>=0?C:R.UNKNOWN}(g.status);a(new H(y,g.message))}else a(new H(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(R.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{x(dt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);x(dt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=nl(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FT(),a=BT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");x(dt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const y=new MS({lo:E=>{g?x(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(x(dt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),x(dt,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},ho:()=>h.close()}),w=(E,C,b)=>{E.listen(C,N=>{try{b(N)}catch(M){setTimeout(()=>{throw M},0)}})};return w(h,Ro.EventType.OPEN,()=>{g||x(dt,`RPC '${e}' stream ${s} transport opened.`)}),w(h,Ro.EventType.CLOSE,()=>{g||(g=!0,x(dt,`RPC '${e}' stream ${s} transport closed`),y.Vo())}),w(h,Ro.EventType.ERROR,E=>{g||(g=!0,Ss(dt,`RPC '${e}' stream ${s} transport errored:`,E),y.Vo(new H(R.UNAVAILABLE,"The operation could not be completed")))}),w(h,Ro.EventType.MESSAGE,E=>{var C;if(!g){const b=E.data[0];Ie(!!b);const N=b,M=N.error||((C=N[0])===null||C===void 0?void 0:C.error);if(M){x(dt,`RPC '${e}' stream ${s} received error:`,M);const Z=M.status;let B=function(Se){const Fe=je[Se];if(Fe!==void 0)return k_(Fe)}(Z),fe=M.message;B===void 0&&(B=R.INTERNAL,fe="Unknown error status: "+Z+" with message "+M.message),g=!0,y.Vo(new H(B,fe)),h.close()}else x(dt,`RPC '${e}' stream ${s} received:`,b),y.mo(b)}}),w(a,qT.STAT_EVENT,E=>{E.stat===Cf.PROXY?x(dt,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===Cf.NOPROXY&&x(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function rl(){return typeof document<"u"?document:null}/**
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
 */function hc(t){return new QI(t,!0)}/**
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
 */class q_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class H_{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new q_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new H(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FS extends H_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=JI(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?gn(o.readTime):J.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=eu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ql(c)?{documents:tS(i,c)}:{query:nS(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=O_(i,o.resumeToken);const l=Xl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ga(i,o.snapshotVersion.toTimestamp());const l=Xl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=sS(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=eu(this.serializer),n.removeTarget=e,this.t_(n)}}class BS extends H_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=eS(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.T_(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=eu(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZI(this.serializer,r))};this.t_(n)}}/**
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
 */class jS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Jl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(R.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Jl(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(R.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class qS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(vn(n),this.g_=!1):x("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class HS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ne(c);l.v_.add(4),await ao(l),l.x_.set("Unknown"),l.v_.delete(4),await dc(l)}(this))})}),this.x_=new qS(r,s)}}async function dc(t){if(Wr(t))for(const e of t.F_)await e(!0)}async function ao(t){for(const e of t.F_)await e(!1)}function z_(t,e){const n=ne(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Th(n)?wh(n):Hs(n).Jo()&&Ah(n,e))}function $_(t,e){const n=ne(t),r=Hs(n);n.C_.delete(e),r.Jo()&&K_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Wr(n)&&n.x_.set("Unknown"))}function Ah(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hs(t).c_(e)}function K_(t,e){t.O_.Oe(e),Hs(t).l_(e)}function wh(t){t.O_=new $I({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Hs(t).start(),t.x_.p_()}function Th(t){return Wr(t)&&!Hs(t).Ho()&&t.C_.size>0}function Wr(t){return ne(t).v_.size===0}function W_(t){t.O_=void 0}async function zS(t){t.C_.forEach((e,n)=>{Ah(t,e)})}async function $S(t,e){W_(t),Th(t)?(t.x_.S_(e),wh(t)):t.x_.set("Unknown")}async function KS(t,e,n){if(t.x_.set("Online"),e instanceof D_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ma(t,r)}else if(e instanceof jo?t.O_.$e(e):e instanceof N_?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(J.min()))try{const r=await j_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(vt.EMPTY_BYTE_STRING,u.snapshotVersion)),K_(i,c);const h=new er(u.target,c,l,u.sequenceNumber);Ah(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await ma(t,r)}}async function ma(t,e,n){if(!so(e))throw e;t.v_.add(1),await ao(t),t.x_.set("Offline"),n||(n=()=>j_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await dc(t)})}function G_(t,e){return e().catch(n=>ma(t,n,e))}async function fc(t){const e=ne(t),n=lr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;WS(e);)try{const s=await NS(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,GS(e,s)}catch(s){await ma(e,s)}Q_(e)&&Y_(e)}function WS(t){return Wr(t)&&t.D_.length<10}function GS(t,e){t.D_.push(e);const n=lr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Q_(t){return Wr(t)&&!lr(t).Ho()&&t.D_.length>0}function Y_(t){lr(t).start()}async function QS(t){lr(t).d_()}async function YS(t){const e=lr(t);for(const n of t.D_)e.I_(n.mutations)}async function XS(t,e,n){const r=t.D_.shift(),s=gh.from(r,e,n);await G_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fc(t)}async function JS(t,e){e&&lr(t).P_&&await async function(r,s){if(function(o){return qI(o)&&o!==R.ABORTED}(s.code)){const i=r.D_.shift();lr(r).Zo(),await G_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fc(r)}}(t,e),Q_(t)&&Y_(t)}async function Xf(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.v_.add(3),await ao(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await dc(n)}async function ZS(t,e){const n=ne(t);e?(n.v_.delete(2),await dc(n)):e||(n.v_.add(2),await ao(n),n.x_.set("Unknown"))}function Hs(t){return t.N_||(t.N_=function(n,r,s){const i=ne(n);return i.R_(),new FS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:zS.bind(null,t),To:$S.bind(null,t),u_:KS.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Th(t)?wh(t):t.x_.set("Unknown")):(await t.N_.stop(),W_(t))})),t.N_}function lr(t){return t.B_||(t.B_=function(n,r,s){const i=ne(n);return i.R_(),new BS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:QS.bind(null,t),To:JS.bind(null,t),E_:YS.bind(null,t),T_:XS.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await fc(t)):(await t.B_.stop(),t.D_.length>0&&(x("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class Ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ih(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sh(t,e){if(vn("AsyncQueue",`${e}: ${t}`),so(t))return new H(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=si(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Jf{constructor(){this.L_=new Ne(K.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):Q():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ds{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ds(e,n,ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class eC{constructor(){this.q_=void 0,this.Q_=[]}}class tC{constructor(){this.queries=new qs(e=>g_(e),oc),this.onlineState="Unknown",this.K_=new Set}}async function nC(t,e){const n=ne(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new eC),s)try{i.q_=await n.onListen(r)}catch(o){const a=Sh(o,`Initialization of query '${ts(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Q_.push(e),e.U_(n.onlineState),i.q_&&e.W_(i.q_)&&Ch(n)}async function rC(t,e){const n=ne(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function sC(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Ch(n)}function iC(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function Ch(t){t.K_.forEach(e=>{e.next()})}class oC{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class X_{constructor(e){this.key=e}}class J_{constructor(e){this.key=e}}class aC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=oe(),this.mutatedKeys=oe(),this.ua=m_(e),this.ca=new ds(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Jf,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=ac(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?y!==w&&(r.track({type:3,doc:g}),E=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),E=!0,(c&&this.ua(g,c)>0||l&&this.ua(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(g?(o=o.add(g),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((u,h)=>function(g,y){const w=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return w(g)-w(y)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,l=c!==this._a;return this._a=c,o.length!==0||l?{snapshot:new Ds(this.query,e.ca,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Jf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=oe(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new J_(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new X_(r))}),n}Ra(e){this.oa=e.hs,this.aa=oe();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Ds.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class cC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lC{constructor(e){this.key=e,this.ma=!1}}class uC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new qs(a=>g_(a),oc),this.pa=new Map,this.ya=new Set,this.wa=new Ne(K.comparator),this.Sa=new Map,this.ba=new yh,this.Da={},this.Ca=new Map,this.va=Ns.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function hC(t,e){const n=AC(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await DS(n.localStore,fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await dC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&z_(n.remoteStore,o)}return s}async function dC(t,e,n,r,s){t.Ma=(h,d,g)=>async function(w,E,C,b){let N=E.view.ha(C);N.Xi&&(N=await Gf(w.localStore,E.query,!1).then(({documents:fe})=>E.view.ha(fe,N)));const M=b&&b.targetChanges.get(E.targetId),Z=b&&b.targetMismatches.get(E.targetId)!=null,B=E.view.applyChanges(N,w.isPrimaryClient,M,Z);return ep(w,E.targetId,B.da),B.snapshot}(t,h,d,g);const i=await Gf(t.localStore,e,!0),o=new aC(e,i.hs),a=o.ha(i.documents),c=oo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);ep(t,n,l.da);const u=new cC(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function fC(t,e){const n=ne(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!oc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await tu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$_(n.remoteStore,r.targetId),nu(n,r.targetId)}).catch(ro)):(nu(n,r.targetId),await tu(n.localStore,r.targetId,!0))}async function pC(t,e,n){const r=wC(t);try{const s=await function(o,a){const c=ne(o),l=Qe.now(),u=a.reduce((g,y)=>g.add(y.key),oe());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=Vn(),w=oe();return c.os.getEntries(g,u).next(E=>{y=E,y.forEach((C,b)=>{b.isValidDocument()||(w=w.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,y)).next(E=>{h=E;const C=[];for(const b of a){const N=MI(b,h.get(b.key).overlayedDocument);N!=null&&C.push(new dr(b.key,N,c_(N.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,C,a)}).next(E=>{d=E;const C=E.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(g,E.batchId,C)})}).then(()=>({batchId:d.batchId,changes:y_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Ne(ge)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await co(r,s.changes),await fc(r.remoteStore)}catch(s){const i=Sh(s,"Failed to persist write");n.reject(i)}}async function Z_(t,e){const n=ne(t);try{const r=await PS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Ie(o.ma):s.removedDocuments.size>0&&(Ie(o.ma),o.ma=!1))}),await co(n,r,e)}catch(r){await ro(r)}}function Zf(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ne(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(l=!0)}),l&&Ch(c)}(r.eventManager,e),s.length&&r.fa.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gC(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Ne(K.comparator);o=o.insert(i,pt.newNoDocument(i,J.min()));const a=oe().add(i),c=new uc(J.min(),new Map,new Ne(ge),o,a);await Z_(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Rh(r)}else await tu(r.localStore,e,!1).then(()=>nu(r,e,n)).catch(ro)}async function mC(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await bS(n.localStore,e);ty(n,r,null),ey(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await co(n,s)}catch(s){await ro(s)}}async function _C(t,e,n){const r=ne(t);try{const s=await function(o,a){const c=ne(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ie(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);ty(r,e,n),ey(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await co(r,s)}catch(s){await ro(s)}}function ey(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function ty(t,e,n){const r=ne(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function nu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||ny(t,r)})}function ny(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&($_(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Rh(t))}function ep(t,e,n){for(const r of n)r instanceof X_?(t.ba.addReference(r.key,e),yC(t,r)):r instanceof J_?(x("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||ny(t,r.key)):Q()}function yC(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(x("SyncEngine","New document in limbo: "+n),t.ya.add(r),Rh(t))}function Rh(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new K(Oe.fromString(e)),r=t.va.next();t.Sa.set(r,new lC(n)),t.wa=t.wa.insert(n,r),z_(t.remoteStore,new er(fn(ph(n.path)),r,"TargetPurposeLimboResolution",ch._e))}}async function co(t,e,n){const r=ne(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Eh.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,l){const u=ne(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(l,d=>I.forEach(d.qi,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>I.forEach(d.Qi,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!so(h))throw h;x("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const g=u.ns.get(d),y=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(y);u.ns=u.ns.insert(d,w)}}}(r.localStore,i))}async function vC(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await B_(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new H(R.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await co(n,r.us)}}function EC(t,e){const n=ne(t),r=n.Sa.get(e);if(r&&r.ma)return oe().add(r.key);{let s=oe();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function AC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gC.bind(null,e),e.fa.u_=sC.bind(null,e.eventManager),e.fa.xa=iC.bind(null,e.eventManager),e}function wC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_C.bind(null,e),e}class tp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return RS(this.persistence,new SS,e.initialUser,this.serializer)}createPersistence(e){return new wS(vh.Hr,this.serializer)}createSharedClientState(e){return new VS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vC.bind(null,this.syncEngine),await ZS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tC}()}createDatastore(e){const n=hc(e.databaseInfo.databaseId),r=function(i){return new US(i)}(e.databaseInfo);return function(i,o,a,c){return new jS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new HS(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Zf(this.syncEngine,n,0),function(){return Yf.D()?new Yf:new xS}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new uC(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ne(r);x("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await ao(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class IC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class SC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=i_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sl(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await B_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function np(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RC(t);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Xf(e.remoteStore,s)),t._onlineComponents=e}function CC(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function RC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await sl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!CC(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await sl(t,new tp)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await sl(t,new tp);return t._offlineComponents}async function ry(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await np(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await np(t,new TC))),t._onlineComponents}function bC(t){return ry(t).then(e=>e.syncEngine)}async function PC(t){const e=await ry(t),n=e.eventManager;return n.onListen=hC.bind(null,e.syncEngine),n.onUnlisten=fC.bind(null,e.syncEngine),n}function kC(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new IC({next:d=>{o.enqueueAndForget(()=>rC(i,h));const g=d.docs.has(a);!g&&d.fromCache?l.reject(new H(R.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&c&&c.source==="server"?l.reject(new H(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new oC(ph(a.path),u,{includeMetadataChanges:!0,Z_:!0});return nC(i,h)}(await PC(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function sy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rp=new Map;/**
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
 */function NC(t,e,n){if(!n)throw new H(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DC(t,e,n,r){if(e===!0&&r===!0)throw new H(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sp(t){if(!K.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bh(t);throw new H(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ip{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ph{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ip(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $T;switch(r.type){case"firstParty":return new QT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rp.get(n);r&&(x("ComponentProvider","Removing Datastore"),rp.delete(n),r.terminate())}(this),Promise.resolve()}}function OC(t,e,n,r={}){var s;const i=(t=Ur(t,Ph))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ft.MOCK_USER;else{a=Gg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new H(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ft(l)}t._authCredentials=new KT(new s_(a,c))}}/**
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
 */class kh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kh(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class Bi extends kh{constructor(e,n,r){super(e,n,ph(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new K(e))}withConverter(e){return new Bi(this.firestore,e,this._path)}}function iy(t,e,...n){if(t=$e(t),arguments.length===1&&(e=i_.newId()),NC("doc","path",e),t instanceof Ph){const r=Oe.fromString(e,...n);return sp(r),new Ft(t,null,new K(r))}{if(!(t instanceof Ft||t instanceof Bi))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return sp(r),new Ft(t.firestore,t instanceof Bi?t.converter:null,new K(r))}}/**
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
 */class VC{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new q_(this,"async_queue_retry"),this._u=()=>{const n=rl();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=rl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=rl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Nn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!so(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const s=Ih.createAndSchedule(this,e,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&Q()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class pc extends Ph{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new VC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ay(this),this._firestoreClient.terminate()}}function xC(t,e){const n=typeof t=="object"?t:Lu(),r=typeof t=="string"?t:e||"(default)",s=ja(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$g("firestore");i&&OC(s,...i)}return s}function oy(t){return t._firestoreClient||ay(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ay(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new lI(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,sy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new SC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(vt.fromBase64String(e))}catch(n){throw new H(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lo{constructor(e){this._methodName=e}}/**
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
 */class Nh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const LC=/^__.*__$/;class MC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new io(e,this.data,n,this.fieldTransforms)}}class cy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ly(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class mc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new mc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.mu(e),s}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return _a(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(ly(this.du)&&LC.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class UC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hc(e)}Su(e,n,r,s=!1){return new mc({du:e,methodName:n,wu:r,path:at.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uy(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new UC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FC(t,e,n,r,s,i={}){const o=t.Su(i.merge||i.mergeFields?2:0,e,n,s);Vh("Data must be an object, but it was:",o,r);const a=dy(r,o);let c,l;if(i.merge)c=new Mt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=ru(e,h,n);if(!o.contains(d))throw new H(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);py(u,d)||u.push(d)}c=new Mt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new MC(new bt(a),c,l)}class _c extends lo{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _c}}function hy(t,e,n){return new mc({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Dh extends lo{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=hy(this,e,!0),r=this.bu.map(i=>zs(i,n)),s=new Ps(r);return new C_(e.path,s)}isEqual(e){return e instanceof Dh&&Ts(this.bu,e.bu)}}class Oh extends lo{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=hy(this,e,!0),r=this.bu.map(i=>zs(i,n)),s=new ks(r);return new C_(e.path,s)}isEqual(e){return e instanceof Oh&&Ts(this.bu,e.bu)}}function BC(t,e,n,r){const s=t.Su(1,e,n);Vh("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();Kr(r,(c,l)=>{const u=xh(e,c,n);l=$e(l);const h=s.fu(u);if(l instanceof _c)i.push(u);else{const d=zs(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Mt(i);return new cy(o,a,s.fieldTransforms)}function jC(t,e,n,r,s,i){const o=t.Su(1,e,n),a=[ru(e,r,n)],c=[s];if(i.length%2!=0)throw new H(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ru(e,i[d])),c.push(i[d+1]);const l=[],u=bt.empty();for(let d=a.length-1;d>=0;--d)if(!py(l,a[d])){const g=a[d];let y=c[d];y=$e(y);const w=o.fu(g);if(y instanceof _c)l.push(g);else{const E=zs(y,w);E!=null&&(l.push(g),u.set(g,E))}}const h=new Mt(l);return new cy(u,h,o.fieldTransforms)}function zs(t,e){if(fy(t=$e(t)))return Vh("Unsupported field value:",e,t),dy(t,e);if(t instanceof lo)return function(r,s){if(!ly(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=zs(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:ga(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ga(s.serializer,i)}}if(r instanceof Nh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Os)return{bytesValue:O_(s.serializer,r._byteString)};if(r instanceof Ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_h(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${bh(r)}`)}(t,e)}function dy(t,e){const n={};return o_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,(r,s)=>{const i=zs(s,e.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Nh||t instanceof Os||t instanceof Ft||t instanceof lo)}function Vh(t,e,n){if(!fy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=bh(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function ru(t,e,n){if((e=$e(e))instanceof gc)return e._internalPath;if(typeof e=="string")return xh(t,e);throw _a("Field path arguments must be of type string or ",t,!1,void 0,n)}const qC=new RegExp("[~\\*/\\[\\]]");function xh(t,e,n){if(e.search(qC)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gc(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new H(R.INVALID_ARGUMENT,a+t+c)}function py(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class gy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(my("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HC extends gy{data(){return super.data()}}function my(t,e){return typeof e=="string"?xh(t,e):e instanceof gc?e._internalPath:e._delegate._internalPath}class zC{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Nh(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mi(e));default:return null}}convertTimestamp(e){const n=cr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Ie(F_(r));const s=new Ui(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function $C(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class KC{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _y extends gy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new WC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(my("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class WC extends _y{data(e={}){return super.data(e)}}/**
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
 */function yy(t){t=Ur(t,Ft);const e=Ur(t.firestore,pc);return kC(oy(e),t._key).then(n=>YC(e,t,n))}class GC extends zC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function QC(t,e,n){t=Ur(t,Ft);const r=Ur(t.firestore,pc),s=$C(t.converter,e,n);return vy(r,[FC(uy(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,pn.none())])}function Lh(t,e,n,...r){t=Ur(t,Ft);const s=Ur(t.firestore,pc),i=uy(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof gc?jC(i,"updateDoc",t._key,e,n,r):BC(i,"updateDoc",t._key,e),vy(s,[o.toMutation(t._key,pn.exists(!0))])}function vy(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>pC(await bC(r),s,i)),i.promise}(oy(t),e)}function YC(t,e,n){const r=n.docs.get(e._key),s=new GC(t);return new _y(t,s,e._key,r,new KC(n.hasPendingWrites,n.fromCache),e.converter)}function Ey(...t){return new Dh("arrayUnion",t)}function XC(...t){return new Oh("arrayRemove",t)}(function(e,n=!0){(function(s){js=s})(zr),Vr(new or("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new pc(new WT(r.getProvider("auth-internal")),new XT(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new H(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ui(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),dn(Rf,"4.4.2",e),dn(Rf,"4.4.2","esm2017")})();/**
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
 */const Ay="firebasestorage.googleapis.com",wy="storageBucket",JC=2*60*1e3,ZC=10*60*1e3;/**
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
 */class Me extends Tn{constructor(e,n,r=0){super(il(e),`Firebase Storage: ${n} (${il(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return il(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function il(t){return"storage/"+t}function Mh(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(Le.UNKNOWN,t)}function eR(t){return new Me(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tR(t){return new Me(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(Le.UNAUTHENTICATED,t)}function rR(){return new Me(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sR(t){return new Me(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function iR(){return new Me(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oR(){return new Me(Le.CANCELED,"User canceled the upload/download.")}function aR(t){return new Me(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function cR(t){return new Me(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lR(){return new Me(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wy+"' property when initializing the app?")}function uR(){return new Me(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hR(){return new Me(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dR(t){return new Me(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function su(t){return new Me(Le.INVALID_ARGUMENT,t)}function Ty(){return new Me(Le.APP_DELETED,"The Firebase app was deleted.")}function fR(t){return new Me(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vi(t,e){return new Me(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Js(t){throw new Me(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw cR(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},w=n===Ay?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",C=new RegExp(`^https?://${w}/${s}/${E}`,"i"),N=[{regex:a,indices:c,postModify:i},{regex:g,indices:y,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<N.length;M++){const Z=N[M],B=Z.regex.exec(e);if(B){const fe=B[Z.indices.bucket];let ke=B[Z.indices.path];ke||(ke=""),r=new Ut(fe,ke),Z.postModify(r);break}}if(r==null)throw aR(e);return r}}class pR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function gR(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(g,c())},E)}function d(){i&&clearTimeout(i)}function g(E,...C){if(l){d();return}if(E){d(),u.call(null,E,...C);return}if(c()||o){d(),u.call(null,E,...C);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let y=!1;function w(E){y||(y=!0,d(),!l&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function mR(t){t(!1)}/**
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
 */function _R(t){return t!==void 0}function yR(t){return typeof t=="object"&&!Array.isArray(t)}function Uh(t){return typeof t=="string"||t instanceof String}function op(t){return Fh()&&t instanceof Blob}function Fh(){return typeof Blob<"u"}function ap(t,e,n,r){if(r<e)throw su(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw su(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Bh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Iy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var kr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(kr||(kr={}));/**
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
 */function vR(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class ER{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new No(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===kr.NO_ERROR,c=i.getStatus();if(!a||vR(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===kr.ABORT;r(!1,new No(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new No(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());_R(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Mh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ty():oR();o(c)}else{const c=iR();o(c)}};this.canceled_?n(!1,new No(!1,null,!0)):this.backoffId_=gR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class No{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function AR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function IR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function SR(t,e,n,r,s,i,o=!0){const a=Iy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return TR(l,e),AR(l,n),wR(l,i),IR(l,r),new ER(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function CR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function RR(...t){const e=CR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Fh())return new Blob(t);throw new Me(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function PR(t){if(typeof atob>"u")throw dR("base-64");return atob(t)}/**
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
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ol{constructor(e,n){this.data=e,this.contentType=n||null}}function kR(t,e){switch(t){case ln.RAW:return new ol(Sy(e));case ln.BASE64:case ln.BASE64URL:return new ol(Cy(t,e));case ln.DATA_URL:return new ol(DR(e),OR(e))}throw Mh()}function Sy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function NR(t){let e;try{e=decodeURIComponent(t)}catch{throw vi(ln.DATA_URL,"Malformed data URL.")}return Sy(e)}function Cy(t,e){switch(t){case ln.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw vi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw vi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=PR(e)}catch(s){throw s.message.includes("polyfill")?s:vi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ry{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vi(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=VR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DR(t){const e=new Ry(t);return e.base64?Cy(ln.BASE64,e.rest):NR(e.rest)}function OR(t){return new Ry(t).contentType}function VR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Qn{constructor(e,n){let r=0,s="";op(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(op(this.data_)){const r=this.data_,s=bR(r,e,n);return s===null?null:new Qn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qn(r,!0)}}static getBlob(...e){if(Fh()){const n=e.map(r=>r instanceof Qn?r.data_:r);return new Qn(RR.apply(null,n))}else{const n=e.map(o=>Uh(o)?kR(ln.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Qn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function by(t){let e;try{e=JSON.parse(t)}catch{return null}return yR(e)?e:null}/**
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
 */function xR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function LR(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Py(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function MR(t,e){return e}class wt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||MR}}let Do=null;function UR(t){return!Uh(t)||t.length<2?t:Py(t)}function ky(){if(Do)return Do;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return UR(o)}const n=new wt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new wt("size");return s.xform=r,t.push(s),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),Do=t,Do}function FR(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ut(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function BR(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return FR(r,t),r}function Ny(t,e,n){const r=by(e);return r===null?null:BR(t,r,n)}function jR(t,e,n,r){const s=by(e);if(s===null||!Uh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),g=Bh(d,n,r),y=Iy({alt:"media",token:l});return g+y})[0]}function qR(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Dy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Oy(t){if(!t)throw Mh()}function HR(t,e){function n(r,s){const i=Ny(t,s,e);return Oy(i!==null),i}return n}function zR(t,e){function n(r,s){const i=Ny(t,s,e);return Oy(i!==null),jR(i,s,t.host,t._protocol)}return n}function Vy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=rR():s=nR():n.getStatus()===402?s=tR(t.bucket):n.getStatus()===403?s=sR(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function $R(t){const e=Vy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=eR(t.path)),i.serverResponse=s.serverResponse,i}return n}function KR(t,e,n){const r=e.fullServerUrl(),s=Bh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Dy(s,i,zR(t,n),o);return a.errorHandler=$R(e),a}function WR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function GR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=WR(null,e)),r}function QR(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let M=0;M<2;M++)N=N+Math.random().toString().slice(2);return N}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=GR(e,r,s),u=qR(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",g=Qn.getBlob(h,r,d);if(g===null)throw uR();const y={name:l.fullPath},w=Bh(i,t.host,t._protocol),E="POST",C=t.maxUploadRetryTime,b=new Dy(w,E,HR(t,n),C);return b.urlParams=y,b.headers=o,b.body=g.uploadData(),b.errorHandler=Vy(e),b}class YR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=kr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=kr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=kr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XR extends YR{initXhr(){this.xhr_.responseType="text"}}function xy(){return new XR}/**
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
 */class Fr{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fr(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Py(this._location.path)}get storage(){return this._service}get parent(){const e=xR(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Fr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fR(e)}}function JR(t,e,n){t._throwIfRoot("uploadBytes");const r=QR(t.storage,t._location,ky(),new Qn(e,!0),n);return t.storage.makeRequestWithTokens(r,xy).then(s=>({metadata:s,ref:t}))}function ZR(t){t._throwIfRoot("getDownloadURL");const e=KR(t.storage,t._location,ky());return t.storage.makeRequestWithTokens(e,xy).then(n=>{if(n===null)throw hR();return n})}function eb(t,e){const n=LR(t._location.path,e),r=new Ut(t._location.bucket,n);return new Fr(t.storage,r)}/**
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
 */function tb(t){return/^[A-Za-z]+:\/\//.test(t)}function nb(t,e){return new Fr(t,e)}function Ly(t,e){if(t instanceof jh){const n=t;if(n._bucket==null)throw lR();const r=new Fr(n,n._bucket);return e!=null?Ly(r,e):r}else return e!==void 0?eb(t,e):t}function rb(t,e){if(e&&tb(e)){if(t instanceof jh)return nb(t,e);throw su("To use ref(service, url), the first argument must be a Storage instance.")}else return Ly(t,e)}function cp(t,e){const n=e==null?void 0:e[wy];return n==null?null:Ut.makeFromBucketSpec(n,t)}function sb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Gg(s,t.app.options.projectId))}class jh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ay,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JC,this._maxUploadRetryTime=ZC,this._requests=new Set,s!=null?this._bucket=Ut.makeFromBucketSpec(s,this._host):this._bucket=cp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=cp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ap("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ap("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new pR(Ty());{const o=SR(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const lp="@firebase/storage",up="0.12.1";/**
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
 */const My="storage";function ib(t,e,n){return t=$e(t),JR(t,e,n)}function ob(t){return t=$e(t),ZR(t)}function ab(t,e){return t=$e(t),rb(t,e)}function cb(t=Lu(),e){t=$e(t);const r=ja(t,My).getImmediate({identifier:e}),s=$g("storage");return s&&lb(r,...s),r}function lb(t,e,n,r={}){sb(t,e,n,r)}function ub(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new jh(n,r,s,e,zr)}function hb(){Vr(new or(My,ub,"PUBLIC").setMultipleInstances(!0)),dn(lp,up,""),dn(lp,up,"esm2017")}hb();function qh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const db=Uy,Fy=new Wi("auth","Firebase",Uy());/**
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
 */const ya=new Vu("@firebase/auth");function fb(t,...e){ya.logLevel<=ae.WARN&&ya.warn(`Auth (${zr}): ${t}`,...e)}function qo(t,...e){ya.logLevel<=ae.ERROR&&ya.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Hh(t,...e)}function mn(t,...e){return Hh(t,...e)}function pb(t,e,n){const r=Object.assign(Object.assign({},db()),{[e]:n});return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function Hh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fy.create(t,...e)}function W(t,e,...n){if(!t)throw Hh(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qo(e),new Error(e)}function xn(t,e){t||bn(e)}/**
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
 */function iu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gb(){return hp()==="http:"||hp()==="https:"}function hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gb()||E0()||"connection"in navigator)?navigator.onLine:!0}function _b(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=y0()||A0()}get(){return mb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zh(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class By{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vb=new uo(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fn(t,e,n,r,s={}){return jy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),By.fetch()(qy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function jy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yb),e);try{const s=new Ab(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Oo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw pb(t,u,l);Jt(t,u)}}catch(s){if(s instanceof Tn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function ho(t,e,n,r,s={}){const i=await Fn(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zh(t.config,s):`${t.config.apiScheme}://${s}`}function Eb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ab{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),vb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mn(t,e,r);return s.customData._tokenResponse=n,s}function dp(t){return t!==void 0&&t.enterprise!==void 0}class wb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Eb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Tb(t,e){return Fn(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
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
 */async function Ib(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function Sb(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cb(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=$h(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ei(al(s.auth_time)),issuedAtTime:Ei(al(s.iat)),expirationTime:Ei(al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function al(t){return Number(t)*1e3}function $h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hg(n);return s?JSON.parse(s):(qo("Failed to decode base64 JWT payload"),null)}catch(s){return qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rb(t){const e=$h(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&bb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Pb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function va(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vs(t,Sb(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Db(i.providerUserInfo):[],a=Nb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function kb(t){const e=$e(t);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Db(t){return t.map(e=>{var{providerId:n}=e,r=qh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ob(t,e){const n=await jy(t,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",By.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vb(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
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
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ob(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ji;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function zn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cb(this,e)}reload(){return kb(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vs(this,Ib(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:M,isAnonymous:Z,providerData:B,stsTokenManager:fe}=n;W(N&&fe,e,"internal-error");const ke=ji.fromJSON(this.name,fe);W(typeof N=="string",e,"internal-error"),zn(h,e.name),zn(d,e.name),W(typeof M=="boolean",e,"internal-error"),W(typeof Z=="boolean",e,"internal-error"),zn(g,e.name),zn(y,e.name),zn(w,e.name),zn(E,e.name),zn(C,e.name),zn(b,e.name);const Se=new Nr({uid:N,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:Z,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:ke,createdAt:C,lastLoginAt:b});return B&&Array.isArray(B)&&(Se.providerData=B.map(Fe=>Object.assign({},Fe))),E&&(Se._redirectEventId=E),Se}static async _fromIdTokenResponse(e,n,r=!1){const s=new ji;s.updateFromServerResponse(n);const i=new Nr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await va(i),i}}/**
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
 */const fp=new Map;function Pn(t){xn(t instanceof Function,"Expected a class definition");let e=fp.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fp.set(t,e),e)}/**
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
 */class zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zy.type="NONE";const pp=zy;/**
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
 */function Ho(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Pn(pp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Pn(pp);const o=Ho(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Nr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fs(i,e,r))}}/**
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
 */function gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($y(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qy(e))return"Blackberry";if(Yy(e))return"Webos";if(Kh(e))return"Safari";if((e.includes("chrome/")||Ky(e))&&!e.includes("edge/"))return"Chrome";if(Gy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $y(t=ze()){return/firefox\//i.test(t)}function Kh(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ky(t=ze()){return/crios\//i.test(t)}function Wy(t=ze()){return/iemobile/i.test(t)}function Gy(t=ze()){return/android/i.test(t)}function Qy(t=ze()){return/blackberry/i.test(t)}function Yy(t=ze()){return/webos/i.test(t)}function yc(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xb(t=ze()){var e;return yc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lb(){return w0()&&document.documentMode===10}function Xy(t=ze()){return yc(t)||Gy(t)||Yy(t)||Qy(t)||/windows phone/i.test(t)||Wy(t)}function Mb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jy(t,e=[]){let n;switch(t){case"Browser":n=gp(ze());break;case"Worker":n=`${gp(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class Ub{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Fb(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
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
 */const Bb=6;class jb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Bb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mp(this),this.idTokenSubscription=new mp(this),this.beforeStateQueue=new Ub(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_b()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fb(this),n=new jb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gr(t){return $e(t)}class mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=P0(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hb(t){vc=t}function Zy(t){return vc.loadJS(t)}function zb(){return vc.recaptchaEnterpriseScript}function $b(){return vc.gapiScript}function Kb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Wb="recaptcha-enterprise",Gb="NO_RECAPTCHA";class Qb{constructor(e){this.type=Wb,this.auth=Gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Tb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new wb(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;dp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Gb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&dp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=zb();c.length!==0&&(c+=a),Zy(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _p(t,e,n,r=!1){const s=new Qb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ou(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _p(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _p(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Yb(t,e){const n=ja(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ts(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function Xb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jb(t,e,n){const r=Gr(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ev(e),{host:o,port:a}=Zb(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||eP()}function ev(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zb(t){const e=ev(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yp(o)}}}function yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function tP(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nP(t,e){return ho(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}/**
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
 */async function rP(t,e){return ho(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function sP(t,e){return ho(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
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
 */class qi extends Wh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new qi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ou(e,n,"signInWithPassword",nP);case"emailLink":return rP(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ou(e,r,"signUpPassword",tP);case"emailLink":return sP(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ps(t,e){return ho(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
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
 */const iP="http://localhost";class Br extends Wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:iP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
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
 */function oP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aP(t){const e=ei(ti(t)).link,n=e?ei(ti(e)).deep_link_id:null,r=ei(ti(t)).deep_link_id;return(r?ei(ti(r)).link:null)||r||n||e||t}class Gh{constructor(e){var n,r,s,i,o,a;const c=ei(ti(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=oP((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aP(e);try{return new Gh(n)}catch{return null}}}/**
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
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return qi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gh.parseLink(n);return W(r,"argument-error"),qi._fromEmailAndCode(e,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fo extends tv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends fo{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Jn extends fo{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends fo{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function cP(t,e){return ho(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
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
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nr._fromIdTokenResponse(e,r,s),o=vp(r);return new jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vp(r);return new jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ea extends Tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ea(e,n,r,s)}}function nv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(t,i,e,r):i})}async function lP(t,e,n=!1){const r=await Vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
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
 */async function uP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Vs(t,nv(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=$h(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
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
 */async function rv(t,e,n=!1){const r="signIn",s=await nv(t,r,e),i=await jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function hP(t,e){return rv(Gr(t),e)}/**
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
 */async function sv(t){const e=Gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dP(t,e,n){const r=Gr(t),o=await ou(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&sv(t),c}),a=await jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function fP(t,e,n){return hP($e(t),$s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sv(t),r})}/**
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
 */async function pP(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$e(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vs(r,pP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function mP(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function _P(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function yP(t){return $e(t).signOut()}const Aa="__sak";/**
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
 */class iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vP(){const t=ze();return Kh(t)||yc(t)}const EP=1e3,AP=10;class ov extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vP()&&Mb(),this.fallbackToPolling=Xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Lb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ov.type="LOCAL";const wP=ov;/**
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
 */class av extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}av.type="SESSION";const cv=av;/**
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
 */function TP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await TP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ec.receivers=[];/**
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
 */function Qh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function SP(t){_n().location.href=t}/**
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
 */function lv(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function CP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bP(){return lv()?self:null}/**
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
 */const uv="firebaseLocalStorageDb",PP=1,wa="firebaseLocalStorage",hv="fbase_key";class po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ac(t,e){return t.transaction([wa],e?"readwrite":"readonly").objectStore(wa)}function kP(){const t=indexedDB.deleteDatabase(uv);return new po(t).toPromise()}function au(){const t=indexedDB.open(uv,PP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wa,{keyPath:hv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wa)?e(r):(r.close(),await kP(),e(await au()))})})}async function Ep(t,e,n){const r=Ac(t,!0).put({[hv]:e,value:n});return new po(r).toPromise()}async function NP(t,e){const n=Ac(t,!1).get(e),r=await new po(n).toPromise();return r===void 0?null:r.value}function Ap(t,e){const n=Ac(t,!0).delete(e);return new po(n).toPromise()}const DP=800,OP=3;class dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await au(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ec._getInstance(bP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CP(),!this.activeServiceWorker)return;this.sender=new IP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await au();return await Ep(e,Aa,"1"),await Ap(e,Aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ac(s,!1).getAll();return new po(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dv.type="LOCAL";const VP=dv;new uo(3e4,6e4);/**
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
 */function xP(t,e){return e?Pn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yh extends Wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LP(t){return rv(t.auth,new Yh(t),t.bypassAuthState)}function MP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),uP(n,new Yh(t),t.bypassAuthState)}async function UP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),lP(n,new Yh(t),t.bypassAuthState)}/**
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
 */class fv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return MP;default:Jt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FP=new uo(2e3,1e4);class is extends fv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FP.get())};e()}}is.currentPopupAction=null;/**
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
 */const BP="pendingRedirect",zo=new Map;class jP extends fv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zo.get(this.auth._key());if(!e){try{const r=await qP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zo.set(this.auth._key(),e)}return this.bypassAuthState||zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qP(t,e){const n=$P(e),r=zP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function HP(t,e){zo.set(t._key(),e)}function zP(t){return Pn(t._redirectPersistence)}function $P(t){return Ho(BP,t.config.apiKey,t.name)}async function KP(t,e,n=!1){const r=Gr(t),s=xP(r,e),o=await new jP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const WP=10*60*1e3;class GP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WP&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pv(t);default:return!1}}/**
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
 */async function YP(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const XP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JP=/^https?/;async function ZP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YP(t);for(const n of e)try{if(e2(n))return}catch{}Jt(t,"unauthorized-domain")}function e2(t){const e=iu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JP.test(n))return!1;if(XP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const t2=new uo(3e4,6e4);function Tp(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function n2(t){return new Promise((e,n)=>{var r,s,i;function o(){Tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tp(),n(mn(t,"network-request-failed"))},timeout:t2.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const a=Kb("iframefcb");return _n()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},Zy(`${$b()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw $o=null,e})}let $o=null;function r2(t){return $o=$o||n2(t),$o}/**
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
 */const s2=new uo(5e3,15e3),i2="__/auth/iframe",o2="emulator/auth/iframe",a2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},c2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l2(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zh(e,o2):`https://${t.config.authDomain}/${i2}`,r={apiKey:e.apiKey,appName:t.name,v:zr},s=c2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gi(r).slice(1)}`}async function u2(t){const e=await r2(t),n=_n().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:l2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=_n().setTimeout(()=>{i(o)},s2.get());function c(){_n().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const h2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d2=500,f2=600,p2="_blank",g2="http://localhost";class Ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m2(t,e,n,r=d2,s=f2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},h2),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ze().toLowerCase();n&&(a=Ky(l)?p2:n),$y(l)&&(e=e||g2,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(xb(l)&&a!=="_self")return _2(e||"",a),new Ip(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Ip(h)}function _2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const y2="__/auth/handler",v2="emulator/auth/handler",E2=encodeURIComponent("fac");async function Sp(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:s};if(e instanceof tv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",b0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof fo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${E2}=${encodeURIComponent(c)}`:"";return`${A2(t)}?${Gi(a).slice(1)}${l}`}function A2({config:t}){return t.emulator?zh(t,v2):`https://${t.authDomain}/${y2}`}/**
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
 */const cl="webStorageSupport";class w2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=KP,this._overrideRedirectResult=HP}async _openPopup(e,n,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sp(e,n,r,iu(),s);return m2(e,o,Qh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sp(e,n,r,iu(),s);return SP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await u2(e),r=new GP(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cl,{type:cl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cl];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xy()||Kh()||yc()}}const T2=w2;var Cp="@firebase/auth",Rp="1.6.0";/**
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
 */class I2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function C2(t){Vr(new or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jy(t)},l=new qb(r,s,i,c);return Xb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new or("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(r=>new I2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Cp,Rp,S2(t)),dn(Cp,Rp,"esm2017")}/**
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
 */const R2=5*60,b2=Wg("authIdTokenMaxAge")||R2;let bp=null;const P2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>b2)return;const s=n==null?void 0:n.token;bp!==s&&(bp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function k2(t=Lu()){const e=ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yb(t,{popupRedirectResolver:T2,persistence:[VP,wP,cv]}),r=Wg("authTokenSyncURL");if(r){const i=P2(r);_P(n,i,()=>i(n.currentUser)),mP(n,o=>i(o))}const s=zg("auth");return s&&Jb(n,`http://${s}`),n}function N2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Hb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",N2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});C2("Browser");const D2={apiKey:"AIzaSyDCfmAXXloyz9ULommkSTV_koUusflh8hY",authDomain:"coffee-shop-ebff0.firebaseapp.com",databaseURL:"https://coffee-shop-ebff0-default-rtdb.firebaseio.com",projectId:"coffee-shop-ebff0",storageBucket:"coffee-shop-ebff0.appspot.com",messagingSenderId:"37142999955",appId:"1:37142999955:web:759741e8d5938d1bc8ae66",measurementId:"G-BTVWRCF9RW"},gv=Jg(D2),mv=xC(gv),O2=cb(gv),gs=k2(),Xh=iy(mv,"products","LmOPNffvTfe94RmAXUMK"),Jh=async()=>{const t=await yy(Xh);return t.exists?t.data():null},_v=async t=>await QC(Xh,{products:t}),V2=async t=>await Lh(Xh,{products:Ey(t)}),ht=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},x2={components:{Carousel:s0,Slide:l0,Pagination:c0,Navigation:a0},data(){return{info:[]}},methods:{async getData(){try{const t=await Jh();this.info=t}catch(t){console.log(t)}}},mounted(){this.getData()}},L2={class:"slide"},M2={class:"slide_image"},U2=["src"],F2={class:"slide_content"},B2={class:"slide_title"},j2={class:"slide_text"},q2={class:"slide_price"};function H2(t,e,n,r,s,i){const o=Ue("slide"),a=Ue("navigation"),c=Ue("pagination"),l=Ue("carousel");return re(),Dr(l,{"items-to-show":1.5,"wrap-around":!0,autoplay:"3000"},{addons:We(()=>[q(a),q(c)]),default:We(()=>[(re(!0),de(it,null,Va(s.info.products,u=>(re(),Dr(o,{key:u.id},{default:We(()=>[m("div",L2,[m("div",M2,[m("img",{src:u.image,alt:"",class:"slide_img"},null,8,U2)]),m("div",F2,[m("h3",B2,Pt(u.name),1),m("p",j2,Pt(u.description),1),m("p",q2,Pt(u.price),1)])])]),_:2},1024))),128))]),_:1})}const z2=ht(x2,[["render",H2],["__scopeId","data-v-c33021f1"]]),$2={data(){return{}},methods:{}},K2={class:"footer"},W2=h1('<div class="footer_head" data-v-3fd137e0><h3 class="head_title" data-v-3fd137e0>Coffee Shop</h3><p class="head_text" data-v-3fd137e0>one Stop | one Heart | one Cup</p></div><div class="footer_btns" data-v-3fd137e0><button class="btn" data-v-3fd137e0>our Company</button><button class="btn" data-v-3fd137e0>our Coffee</button><button class="btn" data-v-3fd137e0>our Pastry</button></div><p class="foot_text" data-v-3fd137e0>@ 2023 All Rights Reserved</p>',3),G2=[W2];function Q2(t,e,n,r,s,i){return re(),de("div",K2,G2)}const Y2=ht($2,[["render",Q2],["__scopeId","data-v-3fd137e0"]]),X2=async(t,e,n)=>(await dP(gs,t,e),await gP(gs.currentUser,{displayName:n}),gs.currentUser.providerData),J2=async(t,e)=>(await fP(gs,t,e),gs.currentUser.providerData),Z2=async()=>{await yP(gs)},go={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},xs={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},St={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ek={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},yv={dangerouslyHTMLString:!1,multiple:!0,position:go.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},tk={rtl:!1,newestOnTop:!1,toastClassName:""},vv={...yv,...tk};({...yv,type:St.DEFAULT});var _e=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(_e||{}),cu=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(cu||{});const nk={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},rk={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},sk={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},ik={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},Pp="Toastify--animate Toastify__none-enter";function Ev(t,e=!1){var n;let r=nk;if(!t||typeof t=="string")switch(t){case"flip":r=ik;break;case"zoom":r=sk;break;case"slide":r=rk;break}else r=t;if(e)r.enter=Pp;else if(r.enter===Pp){const s=(n=r.exit.split("__")[1])==null?void 0:n.split("-")[0];r.enter="Toastify--animate Toastify__".concat(s,"-enter")}return r}function ok(t){return t.containerId||String(t.position)}const wc="will-unmount";function ak(t=go.TOP_RIGHT){return!!document.querySelector(".".concat(_e.CSS_NAMESPACE,"__toast-container--").concat(t))}function ck(t=go.TOP_RIGHT){return"".concat(_e.CSS_NAMESPACE,"__toast-container--").concat(t)}function lk(t,e,n=!1){const r=["".concat(_e.CSS_NAMESPACE,"__toast-container"),"".concat(_e.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(_e.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return ms(e)?e({position:t,rtl:n,defaultClassName:r}):"".concat(r," ").concat(e||"")}function uk(t){var e;const{position:n,containerClassName:r,rtl:s=!1,style:i={}}=t,o=_e.CSS_NAMESPACE,a=ck(n),c=document.querySelector(".".concat(o)),l=document.querySelector(".".concat(a)),u=!!l&&!((e=l.className)!=null&&e.includes(wc)),h=c||document.createElement("div"),d=document.createElement("div");d.className=lk(n,r,s),d.dataset.testid="".concat(_e.CSS_NAMESPACE,"__toast-container--").concat(n),d.id=ok(t);for(const g in i)if(Object.prototype.hasOwnProperty.call(i,g)){const y=i[g];d.style[g]=y}return c||(h.className=_e.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(d),d}function lu(t){var e,n,r;const s=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(s);i&&i.removeEventListener("animationend",lu,!1);try{Hi[s].unmount(),(r=document.getElementById(s))==null||r.remove(),delete Hi[s],delete rt[s]}catch{}}const Hi=et({});function hk(t,e){const n=document.getElementById(String(e));n&&(Hi[n.id]=t)}function uu(t,e=!0){const n=String(t);if(!Hi[n])return;const r=document.getElementById(n);r&&r.classList.add(wc),e?(fk(t),r&&r.addEventListener("animationend",lu,!1)):lu(n),wn.items=wn.items.filter(s=>s.containerId!==t)}function dk(t){for(const e in Hi)uu(e,t);wn.items=[]}function Av(t,e){const n=document.getElementById(t.toastId);if(n){let r=t;r={...r,...Ev(r.transition)};const s=r.appendPosition?"".concat(r.exit,"--").concat(r.position):r.exit;n.className+=" ".concat(s),e&&e(n)}}function fk(t){for(const e in rt)if(e===t)for(const n of rt[e]||[])Av(n)}function pk(t){const e=Ls().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function Zh(t){return document.getElementById(t)}function gk(t){const e=Zh(t.containerId);return e&&e.classList.contains(wc)}function kp(t){var e;const n=Es(t.content)?te(t.content.props):null;return n??te((e=t.data)!=null?e:{})}function mk(t){return t?wn.items.filter(e=>e.containerId===t).length>0:wn.items.length>0}function _k(){if(wn.items.length>0){const t=wn.items.shift();Ko(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const rt=et({}),wn=et({items:[]});function Ls(){const t=te(rt);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function yk(t){return Ls().find(e=>e.toastId===t)}function Ko(t,e={}){if(gk(e)){const n=Zh(e.containerId);n&&n.addEventListener("animationend",hu.bind(null,t,e),!1)}else hu(t,e)}function hu(t,e={}){const n=Zh(e.containerId);n&&n.removeEventListener("animationend",hu.bind(null,t,e),!1);const r=rt[e.containerId]||[],s=r.length>0;if(!s&&!ak(e.position)){const i=uk(e),o=Cg(Mk,e);o.mount(i),hk(o,i.id)}s&&!e.updateId&&(e.position=r[0].position),zi(()=>{e.updateId?Lt.update(e):Lt.add(t,e)})}const Lt={add(t,e){const{containerId:n=""}=e;n&&(rt[n]=rt[n]||[],rt[n].find(r=>r.toastId===e.toastId)||setTimeout(()=>{var r,s;e.newestOnTop?(r=rt[n])==null||r.unshift(e):(s=rt[n])==null||s.push(e),e.onOpen&&e.onOpen(kp(e))},e.delay||0))},remove(t){if(t){const e=pk(t);if(e){const n=rt[e];let r=n.find(s=>s.toastId===t);rt[e]=n.filter(s=>s.toastId!==t),!rt[e].length&&!mk(e)&&uu(e,!1),_k(),zi(()=>{r!=null&&r.onClose&&(r.onClose(kp(r)),r=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){rt[e]=rt[e]||[];const n=rt[e].find(i=>i.toastId===t.toastId),r=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,s={...t,disabledEnterTransition:!r,updateId:void 0};Lt.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{se(s.content,s)},t.delay||0)}},clear(t,e=!0){t?uu(t,e):dk(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,r=document.getElementById(n);r&&(r.removeEventListener("animationend",Lt.dismissCallback,!1),setTimeout(()=>{Lt.remove(n)}))},dismiss(t){if(t){const e=Ls();for(const n of e)if(n.toastId===t){Av(n,r=>{r.addEventListener("animationend",Lt.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=Ls();for(const n of e)if(n.toastId===t){const r=document.getElementById(t);r&&(r.remove(),r.removeEventListener("animationend",Lt.dismissCallback,!1),Lt.remove(t));break}}}},wv=et({}),Ta=et({});function Tv(){return Math.random().toString(36).substring(2,9)}function vk(t){return typeof t=="number"&&!isNaN(t)}function du(t){return typeof t=="string"}function ms(t){return typeof t=="function"}function Tc(...t){return Un(...t)}function Wo(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function Ek(t={}){wv["".concat(_e.CSS_NAMESPACE,"-default-options")]=t}function Ak(){return wv["".concat(_e.CSS_NAMESPACE,"-default-options")]||vv}function wk(){return document.documentElement.classList.contains("dark")?"dark":"light"}var Go=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(Go||{});const Iv={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:go.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:xs.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:St.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},Tk={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:St.DEFAULT},theme:{type:String,required:!1,default:xs.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},Ik=Ln({name:"ProgressBar",props:Tk,setup(t,{attrs:e}){const n=me(),r=ve(()=>t.hide?"true":"false"),s=ve(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=ve(()=>["".concat(_e.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(_e.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(_e.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(_e.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(_e.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(_e.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),o=ve(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=ve(()=>t.controlledProgress?null:c),u=ve(()=>t.controlledProgress?c:null);return Lo(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>q("div",{ref:n,role:"progressbar","aria-hidden":r.value,"aria-label":"notification timer",class:o.value,style:s.value},null)}}),Sk=Ln({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:xs.AUTO},type:{type:String,required:!1,default:xs.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>q("button",{class:"".concat(_e.CSS_NAMESPACE,"__close-button ").concat(_e.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[q("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[q("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Ic=({theme:t,type:e,path:n,...r})=>q("svg",Un({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},r),[q("path",{d:n},null)]);function Ck(t){return q(Ic,Un(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Rk(t){return q(Ic,Un(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function bk(t){return q(Ic,Un(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function Pk(t){return q(Ic,Un(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function kk(){return q("div",{class:"".concat(_e.CSS_NAMESPACE,"__spinner")},null)}const fu={info:Rk,warning:Ck,success:bk,error:Pk,spinner:kk},Nk=t=>t in fu;function Dk({theme:t,type:e,isLoading:n,icon:r}){let s;const i={theme:t,type:e};return n?s=fu.spinner():r===!1?s=void 0:Wo(r)?s=te(r):ms(r)?s=r(i):Es(r)?s=Dn(r,i):du(r)||vk(r)?s=r:Nk(e)&&(s=fu[e](i)),s}const Ok=()=>{};function Vk(t,e,n=_e.COLLAPSE_DURATION){const{scrollHeight:r,style:s}=t,i=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,i)})})}function xk(t){const e=me(!1),n=me(!1),r=me(!1),s=me(Go.Enter),i=et({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||_e.COLLAPSE_DURATION}),o=i.done||Ok,a=ve(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),c=ve(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),l=ve(()=>t.pauseOnHover?{onMouseenter:E,onMouseleave:w}:{});function u(){const b=a.value.split(" ");d().addEventListener(cu.ENTRANCE_ANIMATION_END,w,{once:!0});const N=Z=>{const B=d();Z.target===B&&(B.dispatchEvent(new Event(cu.ENTRANCE_ANIMATION_END)),B.removeEventListener("animationend",N),B.removeEventListener("animationcancel",N),s.value===Go.Enter&&Z.type!=="animationcancel"&&B.classList.remove(...b))},M=()=>{const Z=d();Z.classList.add(...b),Z.addEventListener("animationend",N),Z.addEventListener("animationcancel",N)};t.pauseOnFocusLoss&&g(),M()}function h(){if(!d())return;const b=()=>{const M=d();M.removeEventListener("animationend",b),i.collapse?Vk(M,o,i.collapseDuration):o()},N=()=>{const M=d();s.value=Go.Exit,M&&(M.className+=" ".concat(c.value),M.addEventListener("animationend",b))};n.value||(r.value?b():setTimeout(N))}function d(){return t.toastRef.value}function g(){document.hasFocus()||E(),window.addEventListener("focus",w),window.addEventListener("blur",E)}function y(){window.removeEventListener("focus",w),window.removeEventListener("blur",E)}function w(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function E(){e.value=!1}function C(b){b&&(b.stopPropagation(),b.preventDefault()),n.value=!1}return Lo(h),Lo(()=>{const b=Ls();n.value=b.findIndex(N=>N.toastId===i.toastId)>-1}),Lo(()=>{t.isLoading!==void 0&&(t.loading.value?E():w())}),Oa(u),$i(()=>{t.pauseOnFocusLoss&&y()}),{isIn:n,isRunning:e,hideToast:C,eventHandlers:l}}const Lk=Ln({name:"ToastItem",inheritAttrs:!1,props:Iv,setup(t){const e=me(),n=ve(()=>!!t.isLoading),r=ve(()=>t.progress!==void 0&&t.progress!==null),s=ve(()=>Dk(t)),i=ve(()=>["".concat(_e.CSS_NAMESPACE,"__toast"),"".concat(_e.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(_e.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(_e.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=xk({toastRef:e,loading:n,done:()=>{Lt.remove(t.toastId)},...Ev(t.transition,t.disabledEnterTransition),...t});return()=>q("div",Un({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[q("div",{role:t.role,"data-testid":"toast-body",class:"".concat(_e.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[s.value!=null&&q("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(_e.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(_e.CSS_NAMESPACE,"--animate-icon ").concat(_e.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[Wo(s.value)?Ve(te(s.value),{theme:t.theme,type:t.type}):ms(s.value)?s.value({theme:t.theme,type:t.type}):s.value]),q("div",{"data-testid":"toast-content"},[Wo(t.content)?Ve(te(t.content),{toastProps:te(t),closeToast:c,data:t.data}):ms(t.content)?t.content({toastProps:te(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?Ve("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&q(Sk,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),Wo(t.closeButton)?Ve(te(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):ms(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,q(Ik,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:r.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let Ai=0;function Sv(){typeof window>"u"||(Ai&&window.cancelAnimationFrame(Ai),Ai=window.requestAnimationFrame(Sv),Ta.lastUrl!==window.location.href&&(Ta.lastUrl=window.location.href,Lt.clear()))}const Mk=Ln({name:"ToastifyContainer",inheritAttrs:!1,props:Iv,setup(t){const e=ve(()=>t.containerId),n=ve(()=>rt[e.value]||[]),r=ve(()=>n.value.filter(s=>s.position===t.position));return Oa(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Sv)}),$i(()=>{typeof window<"u"&&Ai&&(window.cancelAnimationFrame(Ai),Ta.lastUrl="")}),()=>q(it,null,[r.value.map(s=>{const{toastId:i=""}=s;return q(Lk,Un({key:i},s),null)})])}});let ll=!1;function Cv(){const t=[];return Ls().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(wc)&&t.push(e)}),t}function Uk(t){const e=Cv().length,n=t??0;return n>0&&e+wn.items.length>=n}function Fk(t){Uk(t.limit)&&!t.updateId&&wn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function pr(t,e,n={}){if(ll)return;n=Tc(Ak(),{type:e},te(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Tv()),n={...n,content:t,containerId:n.containerId||String(n.position)};const r=Number(n==null?void 0:n.progress);return r<0&&(n.progress=0),r>1&&(n.progress=1),n.theme==="auto"&&(n.theme=wk()),Fk(n),Ta.lastUrl=window.location.href,n.multiple?wn.items.length?n.updateId&&Ko(t,n):Ko(t,n):(ll=!0,se.clearAll(void 0,!1),setTimeout(()=>{Ko(t,n)},0),setTimeout(()=>{ll=!1},390)),n.toastId}const se=(t,e)=>pr(t,St.DEFAULT,e);se.info=(t,e)=>pr(t,St.DEFAULT,{...e,type:St.INFO});se.error=(t,e)=>pr(t,St.DEFAULT,{...e,type:St.ERROR});se.warning=(t,e)=>pr(t,St.DEFAULT,{...e,type:St.WARNING});se.warn=se.warning;se.success=(t,e)=>pr(t,St.DEFAULT,{...e,type:St.SUCCESS});se.loading=(t,e)=>pr(t,St.DEFAULT,Tc(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));se.dark=(t,e)=>pr(t,St.DEFAULT,Tc(e,{theme:xs.DARK}));se.remove=t=>{t?Lt.dismiss(t):Lt.clear()};se.clearAll=(t,e)=>{Lt.clear(t,e)};se.isActive=t=>{let e=!1;return e=Cv().findIndex(n=>n.toastId===t)>-1,e};se.update=(t,e={})=>{setTimeout(()=>{const n=yk(t);if(n){const r=te(n),{content:s}=r,i={...r,...e,toastId:e.toastId||t,updateId:Tv()},o=i.render||s;delete i.render,pr(o,i.type,i)}},0)};se.done=t=>{se.update(t,{isLoading:!1,progress:1})};se.promise=Bk;function Bk(t,{pending:e,error:n,success:r},s){var i,o,a;let c;const l={...s||{},autoClose:!1};e&&(c=du(e)?se.loading(e,l):se.loading(e.render,{...l,...e}));const u={autoClose:(i=s==null?void 0:s.autoClose)!=null?i:!0,closeOnClick:(o=s==null?void 0:s.closeOnClick)!=null?o:!0,closeButton:(a=s==null?void 0:s.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},h=(g,y,w)=>{if(y==null){se.remove(c);return}const E={type:g,...u,...s,data:w},C=du(y)?{render:y}:y;return c?se.update(c,{...E,...C,isLoading:!1}):se(C.render,{...E,...C,isLoading:!1}),w},d=ms(t)?t():t;return d.then(g=>{h("success",r,g)}).catch(g=>{h("error",n,g)}),d}se.POSITION=go;se.THEME=xs;se.TYPE=St;se.TRANSITIONS=ek;const jk={install(t,e={}){qk(e)}};typeof window<"u"&&(window.Vue3Toastify=jk);function qk(t={}){const e=Tc(vv,t);Ek(e)}const ed=iy(mv,"cart","T0lLrCQnaznaWDfUN9Oj"),Rv=async()=>{const t=await yy(ed);return t.exists?t.data():null},Hk=async t=>await Lh(ed,{cart:Ey(t)}),zk=async t=>await Lh(ed,{cart:XC(t)}),$k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAC/SURBVDiNjdJNTgJBEIbhDsqOq3kHD+HOAxAXBhNWxsDEvxgCV3HDGhOvQML+cQPDUPZ0z7fsqvetVHcn3OIHjxilSnCFJ2xxk/DrnGVJcoQ/O/3fCXOXaXKSDAzTU+E1FL5wHeD30LNoB5UkVThMiZIVPqpwRTIMDpK3DNzk4D5b7nxS6L+YHi+sm7XO6wyBl5l11hgPgRcY9VzsppWU4DAgL8FzKLzo/8r/Vkw41OCCZJ9wjx0eSnCQzI7M3R8/UWONHB9I1AAAAABJRU5ErkJggg==",Kk={data(){return{}},props:{closeCart:{type:Function},cart:{type:Array},getData:{type:Function},products:{type:Array}},methods:{async deleteData(t){var e,n;try{(e=this.products)==null||e.forEach(i=>{i.id===t&&(i.status=!1)}),await _v(this.products);const r=(n=this.cart.cart)==null?void 0:n.filter(i=>i.id===t),s=await zk(r[0]);se.success("Продукт успешно убран.",{autoClose:1e3}),this.getData()}catch(r){console.log(r)}},goToPap(){this.$router.push({path:"/checkout/"})}}},td=t=>(Zt("data-v-0e6e221d"),t=t(),en(),t),Wk={class:"cart_wrapper"},Gk={class:"cart_head"},Qk=td(()=>m("h3",{class:"cart__title"},"Cart",-1)),Yk=td(()=>m("img",{src:$k,alt:""},null,-1)),Xk=[Yk],Jk={class:"cart_overflow"},Zk={key:0,class:"empty_array"},eN=td(()=>m("p",{class:"empty_text"},"You don't have products",-1)),tN=[eN],nN={key:1,class:"cart_cards"},rN={class:"cart_item"},sN={class:"cart_image"},iN=["src"],oN={class:"cart_qauntity"},aN={class:"cart_content"},cN={class:"cart_title"},lN={class:"cart_price"},uN=["onClick"],hN={class:"cart_total_price"},dN={class:"price_text"};function fN(t,e,n,r,s,i){var o,a;return re(),de("div",Wk,[m("div",Gk,[Qk,m("button",{class:"cart_close",onClick:e[0]||(e[0]=(...c)=>n.closeCart&&n.closeCart(...c))},Xk)]),m("div",Jk,[((o=n.cart.cart)==null?void 0:o.length)===0?(re(),de("div",Zk,tN)):(re(),de("div",nN,[(re(!0),de(it,null,Va(n.cart.cart,c=>(re(),de("div",{key:c.id},[m("div",rN,[m("div",sN,[m("img",{src:c.image,alt:"",class:"cart_img"},null,8,iN),m("p",oN,Pt(c.quantity),1)]),m("div",aN,[m("h3",cN,Pt(c.name),1),m("p",lN,Pt(c.price)+"$",1),m("button",{class:"delete_btn",onClick:l=>i.deleteData(c.id)}," remove ",8,uN)])])]))),128))]))]),m("div",hN,[m("p",dN," Total: "+Pt((a=n.cart.cart)==null?void 0:a.reduce((c,l)=>c+l.price*l.quantity,0))+"$ ",1),m("button",{class:"price_btn",onClick:e[1]||(e[1]=(...c)=>i.goToPap&&i.goToPap(...c))},"Go to pay")])])}const bv=ht(Kk,[["render",fN],["__scopeId","data-v-0e6e221d"]]),pN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEOSURBVEiJtZVBTkIxEIb/MeLOvXoUQuISSQyX8DDIIdxwDkkkLj0AKxaokPgSr8DHgpdIni0zr3n8myaT6f912k4rOQKugCmwJa4dsAKGnr+A5xbGTa0jgE2d3G/Ex0DlESwAQJLMzBrxjaQ7b/6lW4L0lom75pKUrACYS7qW9GhmVSaHCCCpoy1cArdOzkl5gCykS0ASEgYAi2DuRwngInounSqxkCVwU1JBBPDPvEtA0rwNINfJrzo02jjXaFFF3qKFJJnZfbOCrgC5xy4EOPs1jQC2kgQMzgWY1eO7e/1KxOFPnvD3s7XRt3vIJ8BeFZWkp1J/AV+JFf8CL8AQ6BWb14AR8An81KYPKdM9CoARnCXxuWQAAAAASUVORK5CYII=",gN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADzSURBVEiJ7ZMxasMwGEY/hUJ6iszFIV4KOUA69CItPVFbcohAxmYwbinukDUnaKbStdBM8csiQ3BcWZK9NQ8M5rf0vV+SJZ3pCjAFVsCPfV6A677CE2DHKb/AVR+CZUN4xaIPwbdD8OWTMejcRUfBh+NbUb0ABfAebPc95KoYLLCT//xNgbcGeX48/6JNYIxZS7qN6q4vXFvkXAGQSnqQNJM0suWtpEzS3BizsbXX0I4ugWegdNyDEngChjHhuSO4ThYksZ2H8ugbngL7CMEemDRl1m/yfUPNh4GkOx9BEhFeMW4dAdwA24gt+gRmHZr7zxwAYlz2kvIKvDwAAAAASUVORK5CYII=",mN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEASURBVEiJ1dU9TsNAFEXhNwioqBFIrARBAQ0RUlgWsAhoWEcqIA2ihzrggkhsgY+CP8sM8thxCk5leTz3zPh5/ALHeNKNCudYjzZ6hNc5KxG0Mce4MWfvaydt+QlaVxFRpZR2mguLiEgppSEEv4JKBSsl4SVggjtsNgeKyATe4DqT84DthQUZYZ1vSe8a5ASNW48RcdhLgGlE7BZMu+9b5LfSB5f9ig6WWeSt3ECxAFPcZgQ/4THgScYkIjYi4iSlNB9c8BeD/Sr+lwD7n5et/WC1Q2iuVlclE6vST7XGM04V9uSxj7bY6Rx0AmsY4RKvmfzZQoKM7AgXeMEMo75575iCkbuSh1LZAAAAAElFTkSuQmCC",_N={data(){return{isMenuOpen:!1,registered:""}},components:{ProductCart:bv},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},async logOut(){try{await Z2(),localStorage.removeItem("token"),se.success("Вы вышли из системы.",{autoClose:1e3}),setTimeout(()=>{window.location.reload()},1100)}catch(t){console.log(t)}}},mounted(){this.registered=localStorage.getItem("token")}},In=t=>(Zt("data-v-7dd564f8"),t=t(),en(),t),yN={class:"header"},vN=In(()=>m("h3",{class:"header_title"},"Coffee Shop",-1)),EN={class:"header_menu"},AN={class:"box"},wN=In(()=>m("samp",null,null,-1)),TN=In(()=>m("samp",null,null,-1)),IN=In(()=>m("samp",null,null,-1)),SN=[wN,TN,IN],CN={key:0,class:"mobile_register"},RN={key:1,class:"mobile_register"},bN={key:0,class:"register_links"},PN=In(()=>m("img",{src:pN,alt:"",class:"register_img"},null,-1)),kN=In(()=>m("p",{class:"link_text"},"Log in",-1)),NN=In(()=>m("img",{src:gN,alt:"",class:"register_img"},null,-1)),DN=In(()=>m("p",{class:"link_text"},"Sign up",-1)),ON={key:1,class:"logout"},VN=In(()=>m("img",{src:mN,alt:"",class:"logout_img"},null,-1)),xN=In(()=>m("p",{class:"link_text"},"Log out",-1)),LN=[VN,xN];function MN(t,e,n,r,s,i){const o=Ue("RouterLink");return re(),de("div",yN,[vN,m("div",EN,[m("div",AN,[m("div",{id:"hamburger",class:_s({hamburger:!0,close:s.isMenuOpen}),onClick:e[0]||(e[0]=(...a)=>i.toggleMenu&&i.toggleMenu(...a))},SN,2)]),m("ul",{class:_s({menu_list:!0,"now-active":s.isMenuOpen})},[q(o,{class:"menu_item",to:"/"},{default:We(()=>[Jr("Home")]),_:1}),q(o,{class:"menu_item",to:"/products/"},{default:We(()=>[Jr("Products")]),_:1}),q(o,{class:"menu_item",to:"/checkout/"},{default:We(()=>[Jr("Checkout")]),_:1}),s.registered?(re(),de("div",RN,[m("button",{class:"mobile_btn",onClick:e[1]||(e[1]=(...a)=>i.logOut&&i.logOut(...a))},"Log out")])):(re(),de("div",CN,[q(o,{class:"menu_item",to:"/login/"},{default:We(()=>[Jr("Log in")]),_:1}),q(o,{class:"menu_item",to:"/signup/"},{default:We(()=>[Jr("Sign up")]),_:1})]))],2)]),s.registered?(re(),de("div",ON,[m("button",{class:"logout_btn",onClick:e[2]||(e[2]=(...a)=>i.logOut&&i.logOut(...a))},LN)])):(re(),de("div",bN,[q(o,{class:"register_link",to:"/login/"},{default:We(()=>[PN,kN]),_:1}),q(o,{class:"register_link",to:"/signup/"},{default:We(()=>[NN,DN]),_:1})]))])}const UN=ht(_N,[["render",MN],["__scopeId","data-v-7dd564f8"]]),FN={components:{HeaderVue:UN,FooterVue:Y2},data(){return{}},methods:{}},BN={class:"layout"},jN={class:"layout_header"},qN={class:"layout_content"},HN={class:"layout_footer"};function zN(t,e,n,r,s,i){const o=Ue("HeaderVue"),a=Ue("FooterVue");return re(),de("div",null,[m("div",BN,[m("div",jN,[q(o)]),m("div",qN,[HE(t.$slots,"default",{},void 0,!0)]),m("div",HN,[q(a)])])])}const Sc=ht(FN,[["render",zN],["__scopeId","data-v-25601667"]]),$N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAYAAABxyNlsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAY4SURBVHgB5ZzrcdtGEMf/zuS7lQq4rsBKBUY6UCoIXUHUgagKrFQgqoKwAzEVWK6AqwpMV+BwB3eDFYTD424PBKDfDOaWODzulnuLvQfwDvOGWvIu3NYXdpsZ72DLGmWFpVLva3kUOCe0HxiuoBT2p+0PTJT1afs58+0ahlhZLp22R5ceT9sPlXd0WxNteQJH5g099/60Fa4sv8PYPaRyg+rfX2N+FKjK/4gJQagKtsd8ucMEDWSLqlCE+SIPzu8o6/Ed4z1IgxSoFHuP+bNGVZ8vSCT1gXZAZa0fkPYgaAu72vIo4pxVyzlX6vfepUcn/4MBDFWuhCofUcWylyqPVUGOSv6sfn+BcbgzMoP0NeRg75OG8udp2zl5Er6sxnNLnhiFdIbI/R7UOn9Ff+pW+hwojI5bn1ApVhBFF2jmXDFvFxuUoWZWCsw7lo1lg8ho6BfEMbWmPUmGKJeV/JaUe0QksZb7lohW7pAHWk66hhYpMq/ruqse5xIiiVXuX6ftE5oLE4IwfwiZQrFj7SaE+VMfHvWsVP43J0tIuccAhir3FlWcKgUgJ/+njgn5KEYY7rhv7HhwV35beaR+otDPOANrLGM0rAlfrw0SSIkW6m5iKZCSoyMFIUW5T0omLAdSMiOBFOWykgnL5GyWK/jBmxWWAymZkUCqcg8uvcRyICUzErCyXMJy8B2hJJcgpCrXP9S6emdz4qNLGYmkKnep4ZjwA4lYWa6wFL/r63FAIqmjYqxk7RYI7VgM8vR1RYxybYXnDmV0cxG4jpfXKGeCxYBkeirZB/flGuU/+3Mmm6eIPP8KEcRaboFp+djQ6JawU7JY4QOqsrcN7KxQDVJFWW2scvXNpLDccAwHzuWWa8bO/vZFrr/ueawcV6jzRkPcgm8ySwnB6iTXMTZa0P/kUpVLSo6y3FjlLjEEq0MuZUQSq1zG60Lkxk8WjtVS/Dsdz4gkxS34pkLIhyjyBuVqb1lndnDpV+Rf9WM2xhADo3T2O+SB0B1L6yWs1viF0Hc4AztUFbSG8FKxdVn/FiXk8Psm82ix+HcIYpaVtiHNUStPQqI1Xi8C1KHSAba+mBruNyq6cgQ7bvBSsULoj9RlSF5mryjUdQucgStVAKtmqa1Wu5tHhN8WeoR9h8akblazv1bKlUqRk2/Vfj9u8L7hHH3cNWwgJTMimdq6hUt17W3DvajhnD2qWNSyBdXvPZhU5VrP/voplm+1/Xo6qWg4b187PxVyKSOB1JkI/4DJYTGaLSoLum84zjrQ98YS3TsTUpXrLczqQfJbYL9fBCgQwr7VqhwmvbNU5bJLCTYV882/yc1IOLZ38t9onlaysmByKSMBK+UKFspll1LgerfqXoXa731tUjNWTMJyrcOxnZKbmj4r2SugQGVpW6RDgfuNjlSw3ptKxXcKmt62pIb7fYVtF7iAUe/MYlFIWwwag276/yI8Zc8ou8q+xTzAxueaxLhWeMvZwY4tXg7KXDbsf6wdY8Wk5ge3sK+gVMr/aU3KzDmmu8Hr9Q5nQ0KkHEOPwgbtg+V72A+Wb2FvLNGskWfo0UMolbxHGZ1IKn9ogTy0jcANwuINytzT7IxxZwNMYlzB4t1f61j33JBLGYlYKJcxzkzwWHjLZSRi9da6H8xeYd6QkhmJWCnXu4a5uwVScrLPtfokALuUkI8LxC2YDp1X37+q/WYkYq1cP8HItfwuxXgI04GRiLVyBcK8H2ziDh5gwNCPtoUQq5TAnlCOrepYUR52rI7Vgz11GGHa8tqu2ZW/QflxDsFKH9kgnHm1ykC2yNTdzfEBIVYyYfqYTEY2kevrTHN64dqsu1snl3J9E5tD3EsuZRiT23LPPtjcg9lZLruUMG1IyQxjcitXIEwXUjLDmFzKXdowZBS5lJtjBWQOSMkMY3K6hTmM8ZKSGcbkUq7gx3gJ04VcyshATuW2LaqbCtl6Z0JO5bJLCW+UMZTbdyz3HHxwaZY1CmMoVyBMk9m6hanHuqZTOk3k/Ky2jnU/IVyBJ4Q/fEy1Y5tcjPxueoWKeu4DzrwONxZG98d59Drcix7H59iytKzcH4QXq+wKxcRqL1BZL6O/j/bTSCG4x/49XrowM8aYMyo68hkzbZZd/A8L/UgIKiJ2rQAAAABJRU5ErkJggg==",KN="/assets/пончик-Dx3atK3R.png",WN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5zSURBVHgB7V0/bBzFHp5zIv4IITuUUOAISlD8JKADOw3Q+dIFGp9pkKCIjd1EAuUigShIsF1ASc4VdDgFeqJKDM0TFDiCEpRzAXoVcURBHgq5N994f8d3k9m92Z25u73zftLJ5727vdv55vf/N7M15YFOszmjHnlkTtVqdTU1Na8PzerHjKoQAwf6safu3buh/16vra/v+HyolvWiIezRR89pwlZURdSw0FadTkv99dd27fz5dtqbUonrfPTRijp27IKqCBsVQODF2tpay/Wik7jO5csbiZRVGDU6nU1N3qp9+D7iNGlXNGkNVaE80KpTk7fMh6Z6Xj+UtIaqUC5oTgw3fEie6Bca+g1XVIXyotNZ1ZK3iaeGuM6HH86qBx+8pg7d/ArlxYEWrpO11dWDQ1X5wANLqiJtHDCj4z3jNB5K3Mcf31QVceMCI3VTnUuX6qoibZwwo+7enZvSKawFVWG8cOxYHTbulKowbpgHcXOqwrhhFsRVucjxw8xxVaEvDv78U+3fumX+MmYfe0w9eeKEGgUq4hwAQdvff6+u//KLuv7zz/cRxph5+GE198QTqvH882r+qacMmcNATcdwHVXBYFcT1fz6a0NWUYDAC6+8MnACK+I0tr75xhDmkqxZrQoXnn5azT3+uJrW0iUQ1bn366/mcXDnTs/nVl56yRA4Q5+JiSNNHCSs8fnnqv377z3HF7TKqz/zjFp89lkvybmoSQfxNvDZa2+9NRDpO5LEgajVnR2189NPPceh5pb0AxLmC0jrys5OzzmgattaIgGQ9uXysrGDMXHkiIOU1T/7rEctFrVLcGAgsYILL7+smq++as59Rn8HnBsA6vKHtbWokjeljhCg0hY++aRLGuwWVNmV117LPaiway7SAJxfJE7+P/3pp5neaV4cCeIwYMt6kNkOrbz4ovphfT2XWhRA1Z658k/NmUnDayBJ7ObMQw91j1902MGimHjiZLa3tFoDMJCQso0zZ1QRyPmEGFvS+LWl555TN997z3imwKa2hyGhBmOiiZOBhFoDMIBFpUwAp0aIgeeZRhrUcOv11419gyoWxJK6iSbOJu3a228HOQiQWpFcnG+jXu++BkLs7xJgoiDEACQbE4qJJQ6SEZM020bx+XAcapC/yw684bUKYkjdRBLnGkgmDYSefP998/D19HBOtmtyPkmTAcZ+pkwQlrq9334L9jAnjrh+A4nYS2wRHiKVWcD7WEWyB8khwaZWnVlSLbYVpF21gv+8mCji+g0kBgxZDpntkBwfR2X5iy+6z5uWyhMpRHix9MILmedZ1M6MwGfCZGGiiLPVmWsgJa5iNz4Lu+RMQNXJOaHuWAoveJwLaS+xfaEOysTU42yPj0mBhOFhkr6J4+Cbteegnb1IpLS678lRBcBvgLRxZqUISkGclEjYYJ/ScVCekojt8Qk4k7Hzxhs96qof8BmWNkkUY4KIZJvEdB8VyUB8Z8pAyfUWLfuMhDj8YGTVEdPIRbiA2YnBMiUW/Ui7SHsg2a7BPnXLNp18+XSeDKivuY6zm+8Dvobb40KcKadcvap2fvzR+/1GUvT7cYEg0M7ic3xlbA0N5BalmPAa6mt5INl9/iy8wbRJ4oNYhdWhEAeJ4tiKATIgVZA8qY/BQ1O1mhl0OAFyDrFjXIbB4HZzgzSQOMbfx+rTB7t03joRzufMK20xMXDiJJOe5v4ij4dZCOkQ4jC7xU0XO2M8xsSgt5JGHjgFLG0NsjVpAbMvWt99132OCcG/BVgYYmOQCwMNB0DWfflCnZlvJAMB3E7s23SKCsHggBBk2a+cPdvNtEvMJuSAaJa2NA/T+7cnko7Pi1OynZwT4GvIg1g1uYERJ6RxJj00Mw8CcQ52FARLNJA8OJyZ9wVnVPj3ikaAhsjjSTL4tz0ZILEDIU7Uo/xI2KwvtSsuhrmfitnPiHFwDsRT6OOYpWZUeI/dyraWEEgnpLvIRLmRSBsg+UUms54jpLAh6j7USRkIcSxpIM2naHky5+yDw2DykKQ6T1NbAqSzqHRzVuNUoibFwzTfHUCckI94LgTRiWOnAD/ORRrPtpvJe7mV226XS4NkQoQ82KXVHa+NeTIh9k26lIGrFMLMF5wQnGQolcRhwJvk5UE9ujBtBaEAX4gvceZ7LPLglITWu1xSIWTO5czoMHZJakNsPRCVOB6wZka72wm6cOkA5vxhXs+Lc5DmuwPayDG48v0cknS1SEB/ZI8KLouqxCxlFzzL6+IfzdIlRO+Rc+ALaTwVsLOSBxxvzieOictZKQL2SksjcVuUUejngqepRVFNOFZk0DEYEioUbYfj7maRLpezkhcstSHkC6IQZwe8/WYTiBPpYm+N1VDRQqNJhRVsh7MzIzLBXM5KXvDEDvFKBVGI48FveubvXNI1TzOxaGk/pB2Or0MyI/htQmaICy+S3M+M+CIKcZwK8s3As1TuysBQhTiktF+0HY5JFpefVWc9Z3VBwGWnUNsmCCaO1Us9o2Zmgx0UV3CLY/s5wgIbedvhuBrA5RqO3xYLqjie2LEqCsHEsceVR3dj5gnJLbowzjny8bzIK3Vp1QCROKjJItUA7lkpUr9LQzBxIR6X046QunTV7/LAV+rSnCvWBK7Etg96VvRErN8FExficbHquUoxjovQIrClLi3EsBMHruNF0lxZLRWhCCcuIGkqa6sBXKQMLBMamr5ih2LboXrtNjvx+NJsni/sODJ2tTyIuBhJUxlYaSACYi6SYJvp6nXhNjvOrTYDBx3XElKB74dg4gRFA9Nz2nawTet2GUdaJGHSSynqkisZkCpuvwtxKPB5XrtQpALfD0HEccGzqMThc2L4s6TOtzPMBVaXYkvtSkbaRMkrbbaKTKuQhCJarjKkvmRLnUgBdw6jra9ov4bdsy9NsgKuZNhSmFfa7NWqsXdbEJRi7QBIw0UC0soH4KJDk8YABl8mBuIyXlXKizWypNAHy9y8pLXFIFSkoDSLPlbm53uKoWJjeHeekDXU3DvCeUNerJEmhT7ApGLvtEiTUh6UarUOX6zU00zS+OzZ7vGirQk2CfbKUZbCvOsBeGehGKtffRCNuBj9gmn1NDgXkk5D3FVEZXJWx17waK9gzaMiQTgvpIQzMoxG2SDiuMEnVqOnXU+TAB+Oiits8AV3kRm1nPyPoLxpeYE+Ay+7LAjhMhkG5YzYiCZxeRp8smDX00Q1YjDZgcmrMl2TzN4dCCrZZ+DxuX9dvtyzoGSYpAFBxLG3Fro0lpGWObEdmKKTRbYrZGcEk6LhYdegVkGafPcoSAOCJa7brx+4wtKG7ai4juexdaz+MBF4by2fZcXIXWKXBlar2DkILfGjWPwRTJwkic2+xZHUJYDBkEw9ZrdkPFgaOTGdB23aX7kfaSAMJGPzNt6fa2Nxsbtz0CgQTByXO2KqS+Ac1cA2d3e7zzlxvBVQs0sjTVJvQhjHjrJ4BWp7lAheH8etZrBHiwX7MlyQ2lyLNraGxCE8kBQYvLoi2XtspYHzIN/Ke54g3HAF+bhOfE+snpFQBBMnDkpo0TMNSwlxAFx3aXkAoRIWCKFZsB0Z7Hey0sczhUrEeSH5ZSFMECUckIo1ZmtMOwewTUOqylVs9Wnl2/d0nkAW1CFCAyymRFxXNtKAKEuJMYgSiEI6Yld7MXBSSwNJsm+ySDoI5UqCCz21Q+1QSW+LeWiyppO28FEuD86DKMTJIIjaik0ciBI3HOcX50TUJdQgJD1rhSerSpBcRinKgyiqkht8Yu3HyIAUiCRwgyrnH7kjywX+TcMOlgeBaCkvtjnbAf2QaZAkM8eL7NH2C0UkQRCyvq1MiEacHRi3IzspLunilFuWlPP67UmQNiBqPe5cyrZJAgxe0cUcadLlk3JjNRpjiVMZEJU4BLRZSWBkInCzhiLFUJYu15q6rJQbq+75MXdKBNEr4OyWL1PJBJBBhidYJFVlr1cD2H2/5chblmk3oJiIThykjksyTBCT2ixQxeY1dQJ2NFwJZ1bZRXcDKiMG0nNiE8QL36V/pKFLInnh8ganMzxEI220A16MBYVlwUCI47Y6uUGQAMXKWx980N3/hLcR7Acmzie1xj2SzchJgVFjYF1ekDpRbfbGMUIASIOzggKlT1E0T/xlL52aJGkDBtqex/t3wSGxyZlONrYGoFJPU7EyFHaP5KRhoMTZe4+AHCYPQTte7wbRSbU5pDgK2G3kkyZtwMAbYkEON7Ta5MELNTfFo83UUCezQwnA5TXepmO3k/b1kDbyccFQOpnhkNjksVqEZKL2Je13gKufxLXXI6vWzW+/9bpdyiRgaC3oIM/c6DWRLFGLnNVA/8fNd981NgnvtZ0RV1qLieN8ZZG7MI4Thrp2AGrT3mMSDanoU9ylxHFab4dIXM8u6BaZpg1c2816xN6XMuKYnt1NNUSYhYzokOp0umT9948/jGqE9J2QqrTD9T//1Vfqzt27hvj/6b/4/z/7+93Xcfzfb7459kVSH4z0rsSQODghriKo7OJgiqiaEI7LXMA6NyyZmoRamw9KcTtp2Cbevt4XprFHq8Qit4Ied5TqPuCSyd9Nbt1iNmhLNiIVyAYyyMogPjsqEmZjLG7gDgKPmkT1Q6lWpKahIu1+gLgDVWHccADi2qrCuOEGiNtVFcYNe1Pq77/D77BQYbi4d+/6lDp+fE9Vdm6c0K6tr+9M1VZXD3T6aUtVGA90Otv4cxgOTE1tqkrqxgFtzVULTwxxidRdVBXKDc2R5qqNp90AvLa2BqmrVGZ5saU5ask/NfvVzqVLLS2OS6pCmbBde+edBh+4L+WlPRa8oZK88mDLJg1w5ir1G1e0PkV7VltVGBXgd6waLhyoZX2ys7Exq4O9hqrVoDpnVYVh4DA8056+cRpTUFOe0CTW9QkX9NM5/TilHzOqQgyAHPRfXNcCgizWXhZhgv8Da9r7MTsbklwAAAAASUVORK5CYII=",GN="/assets/Mask Group-DAjzaf2n.png",QN={components:{LayoutVue:Sc,SliderVue:z2},data(){return{}},methods:{goToPap(){this.$router.push({path:"/products/"})}}},Cc=t=>(Zt("data-v-bf5b057c"),t=t(),en(),t),YN={class:"main"},XN={class:"poster"},JN=Cc(()=>m("h3",{class:"poster_title"},"Незабываемый вкус и прекрасное место.",-1)),ZN=Cc(()=>m("div",{class:"benefit"},[m("h3",{class:"benefit_title"},"Что ты можешь у нас найти?"),m("div",{class:"benefit_cards"},[m("div",{class:"benefit_card"},[m("div",{class:"card_image"},[m("div",{class:"background_yellow"},[m("img",{class:"card_img",src:$N,alt:""})])]),m("div",null,[m("h3",{class:"card_title"},"Карта напитков"),m("p",{class:"card_text"}," Большой выбор вкусного кофе и натурального чая ")])]),m("div",{class:"benefit_card"},[m("div",{class:"card_image"},[m("img",{class:"card_img",src:KN,alt:""})]),m("div",null,[m("h3",{class:"card_title"},"Свежая выпечка"),m("p",{class:"card_text"},"Воздушные пончики, круассаны и сендвичи")])]),m("div",{class:"benefit_card"},[m("div",{class:"card_image"},[m("img",{class:"card_img",src:WN,alt:""})]),m("div",null,[m("h3",{class:"card_title"},"Кофе домой"),m("p",{class:"card_text"}," Кофейные зерна от лучших итальянских производителей ")])])])],-1)),eD={class:"slider"},tD=Cc(()=>m("h3",{class:"slider_title"},"Наши продукты",-1)),nD=Cc(()=>m("div",{class:"about"},[m("div",{class:"about_content"},[m("h3",{class:"about_title"},"О нас"),m("p",{class:"about_text"}," Наша маленькая, но уютная и известная всему городу, кофейня в центре г. Бендеры готова радовать вас вкусными горячими напитками и воздушной выпечкой каждый день. В нашем меню вы можете найти напитки на любой вкус и на любую погоду. Внашей кофейне каждый найдет то, что по душе именно ему, ведь наша основная задача добавить приятных ощущений и капельку теплоты в ваш день ")]),m("div",{class:"about_image"},[m("img",{src:GN,alt:"",class:"about_img"})])],-1));function rD(t,e,n,r,s,i){const o=Ue("SliderVue"),a=Ue("LayoutVue");return re(),Dr(a,null,{default:We(()=>[m("div",YN,[m("div",XN,[JN,m("button",{class:"shop_btn",onClick:e[0]||(e[0]=(...c)=>i.goToPap&&i.goToPap(...c))},"Shop All Products >")]),ZN,m("div",eD,[tD,q(o)]),nD])]),_:1})}const sD=ht(QN,[["render",rD],["__scopeId","data-v-bf5b057c"]]),iD={data(){return{data:null,quantity:1}},props:{product:Object,getData:Function,products:Array},methods:{async postData(t){var e;try{(e=this.products)==null||e.forEach(r=>{r.id===t&&(r.status=!0)}),await _v(this.products),this.product.quantity=this.quantity;const n=await Hk(this.product);se.success("Продукт успешно добавлен.",{autoClose:1e3}),this.quantity=1,this.getData()}catch(n){console.log(n)}}},created(){}},Pv=t=>(Zt("data-v-c256b442"),t=t(),en(),t),oD={class:"products_card"},aD={class:"card_image"},cD=["src"],lD={class:"card_content"},uD={class:"card_title"},hD={class:"card_text"},dD={class:"card_flex"},fD={class:"card_price"},pD={key:0,class:"successed"},gD=Pv(()=>m("p",{class:"successed_text"},"Product added successfully.",-1)),mD=[gD],_D={key:1,class:"quantity_box"},yD=Pv(()=>m("p",{class:"quantity_text"},"Quantity:",-1));function vD(t,e,n,r,s,i){return re(),de("div",oD,[m("div",aD,[m("img",{src:n.product.image,alt:"",class:"card_img"},null,8,cD)]),m("div",lD,[m("h3",uD,Pt(n.product.name),1),m("p",hD,Pt(n.product.description),1),m("div",dD,[m("p",fD,Pt(n.product.price)+"$",1),n.product.status?(re(),de("div",pD,mD)):(re(),de("div",_D,[yD,un(m("input",{class:"quantity_input",type:"number","onUpdate:modelValue":e[0]||(e[0]=o=>s.quantity=o),min:"1",max:"10"},null,512),[[hn,s.quantity]]),m("button",{class:"card_btn",onClick:e[1]||(e[1]=o=>i.postData(n.product.id))}," Make an order > ")]))])])])}const ED=ht(iD,[["render",vD],["__scopeId","data-v-c256b442"]]),AD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAINSURBVFiF7Za/ahRRFMZ/Z9kF12K1UBJFKwn4AIIvYF5BSWUaRbAIafIC6W2FLQUtEqwUAoIWSjaLFiGgIigIIgRN1oAQF8yaz2LPrMPN/DPMrAT8YBjmnN8957szlzsX/usvJKkhaVbS6YTcSc81qjSwoKHmEnJznluoqnld0idJ+5IuJuSnJP2S9LmStyDpms/wUQbz2JmrVRjoePErGcy0M6tlN7/khV9Lshx2w9nLZRp44EVvFGBvOnu/rOZnJf2U1JN0vADflLTlY87l8bUCHm4DDeCumf3Ig82sD7R9zK1cXtJ5YBqoJ+T7wARwBvgObBYwjPMt578AzQRmADxB0gelqw0gaSaDSdOMj21nMO9rwLGMmaz4/cDOV0DRmJUMpomk5QyHbyQtHWL2kZa8RpqWTdI8cOcQMyxD8zWgyK7VB9YABfGPfsUlZ/sF6naiX+xuzqtcBJD0Iohf8Cuu584u5tTcldSomdke8CrHac/v2wnxXgobxkO9NLO9aCMq9+dRTKvwZyfs/AMDndDA/hibC+iODJjZDvBujAbemtm3kQHXONfBqFfcQNY6aPn9REK8lcKG8bjWDkQ0PFSmaVvSQw0PnXF1Ja0HsYGGW/BORr2pqK8FJjaByQznZeirmU1ED+GBpFtxcwjWWmjg6RgMPIs/hJ+gDlwHTlXUfAu4Z2aDiuofQf0GWYrQM0u6bskAAAAASUVORK5CYII=",wD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJOSURBVHgBxZdNUsIwFMdfCzPASr0BnsDewHICvYGyBIYZPAHlBMowwMAGPYF4AnsD8QTWE8iCBQs+/D+mwVCTUNpB/zMlH036S16S94JFMdTtdh0k/BS5vF6vp3gm9XrdpwSydC/6/X4RSQMfv7Es61TVhuF4N0a2ValUAkoD7fV6DSRNHUwjD+BWnIY70NFodDqfz++RvZXreUZIXjCI6Wq14rxj2/YFheaW2o0LhUIZmhqYlJULUSAgE3zorlqt+qrOWAKXxyrgaH+Nb7B1SmTQdqaDwaCJWXjSuzbM1aAYAtxD0hRlfKdVq9U8IzTcNB9xO8UBQ+e6zWXzD0zoSXXBoUAWAB4SX6rSWmkDxVpcSnWxdqBG27581HhjqhrZ4WYohuUAI36khEJfH7BPzvNxm81mjhKK9SuKAvLvlF6+yGQyGTWUpLOGsxdQSmGmgZRXm5f+QQwNpPIJpRSstZ0dezBNmx+TwhzXlFLySVgulxNlG/6Bg/8Szn2xWJSShqzhcOgA9MZ59tdwn2eqduKcPomKbDbbpITCgLd9w5BHWij0EEYSlouzezCYfTc7fKmqZYSyj0SHtlTvHQKOBgv23aagvhNPAXpF4kpVAUxW1q1xp9Nxw+VwI6+MAV0VxJ8VHwnw+JjBxsXxseBdiiVxSC8tWHldUYSpOOLlmUb6KcHGi1kY8q72XMx45z+INVQM+BdYC40MwGVTCl/KnoavMvl8fqK6D+0Dx4ImkQl8NKgJfFSoCowTUD46VAbzPsjlciX6K/G/BnFn+gbUdi58DNlytwAAAABJRU5ErkJggg==",TD={components:{ProductCard:ED,ProductCart:bv},data(){return{info:[],filteredData:[],searchValue:"",showCart:!1,cart:[]}},methods:{async getProducts(){try{const t=await Jh();this.info=t}catch(t){console.log(t)}},async getData(){try{const t=await Rv();this.cart=t}catch(t){console.log(t)}},toggleCart(){this.showCart=!this.showCart},filteredProducts(){return this.info.products?this.info.products.filter(t=>t.name.toLowerCase().includes(this.searchValue.toLowerCase())):[]}},mounted(){this.getProducts(),this.filteredProducts(),this.getData()}},mo=t=>(Zt("data-v-a3d15a67"),t=t(),en(),t),ID={class:"product_block"},SD={class:"cart"},CD=mo(()=>m("img",{src:AD,alt:""},null,-1)),RD={class:"cart_qauntity"},bD={class:"products_head"},PD=mo(()=>m("h3",{class:"products_title"},"Our products",-1)),kD={class:"search_form"},ND=mo(()=>m("button",{class:"form_btn"},[m("img",{src:wD,alt:"",class:"form_img"})],-1)),DD=mo(()=>m("div",{class:"filters"},[m("button",{class:"filterbtn"},"Coffee"),m("button",{class:"filterbtn"},"Tea"),m("button",{class:"filterbtn"},"Сocktail")],-1)),OD={key:0,class:"empty_message"},VD=mo(()=>m("p",{class:"message_text"},"У вас нет продуктов.",-1)),xD=[VD],LD={key:1,class:"products_cards"},MD={class:"product_card"};function UD(t,e,n,r,s,i){var c,l;const o=Ue("ProductCart"),a=Ue("ProductCard");return re(),de("div",ID,[m("div",SD,[m("button",{class:"logout_btn_cart",onClick:e[0]||(e[0]=(...u)=>i.toggleCart&&i.toggleCart(...u))},[CD,m("p",RD,Pt((c=s.cart.cart)==null?void 0:c.length),1)])]),m("div",{class:_s({cart_sidebar:!0,show:s.showCart})},[q(o,{closeCart:i.toggleCart,cart:s.cart,getData:i.getData,products:s.info.products},null,8,["closeCart","cart","getData","products"])],2),m("div",bD,[PD,m("div",kD,[un(m("input",{type:"search",class:"form_input",placeholder:"Search product",onInput:e[1]||(e[1]=u=>i.filteredProducts()),"onUpdate:modelValue":e[2]||(e[2]=u=>s.searchValue=u)},null,544),[[hn,s.searchValue]]),ND]),DD]),((l=s.info.products)==null?void 0:l.length)===0?(re(),de("div",OD,xD)):(re(),de("div",LD,[(re(!0),de(it,null,Va(i.filteredProducts(),u=>(re(),de("div",{key:u.id},[m("div",MD,[q(a,{product:u,getData:i.getData,products:s.info.products},null,8,["product","getData","products"])])]))),128))]))])}const FD=ht(TD,[["render",UD],["__scopeId","data-v-a3d15a67"]]),BD={components:{Layout:Sc,ProductsList:FD},data(){return{}},methods:{}},jD={class:"products"};function qD(t,e,n,r,s,i){const o=Ue("ProductsList"),a=Ue("Layout");return re(),Dr(a,null,{default:We(()=>[m("div",jD,[q(o)])]),_:1})}const HD=ht(BD,[["render",qD],["__scopeId","data-v-35c18d49"]]),zD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAABFCAYAAABnhSugAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8WSURBVHgB7Z0LcFTVGcf/d3cTIAYIyDOEx1IQEtQkQgIBxAQYq4CgDBWtD8DH2Bl1BDptx+k44GNsa20BdUYrtYAvrLYFpBXk/RBBngkQEgyPhIRAIEAg2UCy2Xv7nXPu7t7NC/Jodkm/H5zs7rmPvbmb//m+833fvauhmTAMox89pFJLoHYPtShLYximbnLNlkEtndoWTdNy0QxoaAIkaiHel6jNpNYPDMM0F7nUVlFb2BSxN0rgJOxUepgHZbEZhvnfspTaq40ReoMEbrrhC6g9CIZhWpqlaKDQbTe6Iol7Nj0cAIubYYLFTGqbSYszb3SDG7LgtENhtWeDYZhQQczN51xvpXoFbgbRNkNFxhmGCS1ExD2NhF5S1wp1CpzFzTA3BfWKvD6Bi/k2i5thQp90EnhibQsctXWac24WdwMoPHsec3+5gp7pMMA0BhuduckPxOPR6clkehxgbpgEodna5uQ1zqIZoeOAWgO5XFKG77bn0F+pEDhLvDFohoH4hJ5gGsVs0m4eiXyhtTMgTWbmueeBYZibkXmmhn1Uz4PPB5ecMszNigiML7B2+ARuKn8GGIa5mXnQLCWXWC34fDAM0xrwTbOlwNl6M0yrItWsY/FF0Tlq3kTCwxxIHh4NTaMBU2vSVbj/t4iz1jumg8xB8BlsMkLT8+V5JLWfBAfXmoRheKDrBmw2/vNsPAadQ43OoZ0GSj6HTSSXzqFTM93zk2CaCGW/DZHLBeu7kcj6ARK2xiewuXAKFz0VTDOgSfec/zYbDwu72UkVQTYuSWWY1kmCEHg8mJajOatYjXr6jeusc0M7Nq6zDpfkhjj3CBfdCaZFMOQ83SOf1+eMGoZOK9hgq+OCCwMeyFW8ezWU1OwUnBK9uuGWCzVDkwsozkLTB0eNwJXoN1Bl6ZAb0aYU7DJstD4FDTWxz1pu/GOImnvR/I61IbanY9O0MA6ShQZRIsjGw3BLQeL+y4cbsWf/CRWQ02raQSGL4cMH4OkZY2C3O8weq1h05OYW4Y03V0LXbHJrIbFwh4Z3F82Ew2HHiy/+DS53lRIsERXZDm+//QiJtY3cXghRJ4F+tz0bK1fvxw97TuLihWsod12DI9yOmN5RcPbpjAkT4vHAhARERETU+FWuVbjw/gebkJl1Ru5LHju93fjUWDw6/W45QDFBp4SvyWtJyBo+8+w9SD7YD9u+P4kV/9qNnJzL1C+suhKjEOvaddm4dMGFX829l3TSFlZjqOseLPt0J9asywnY9dQHEuWAUFBYjBVfZ0G3qYi+GDxGpzhpr0pwHo8bWVmFmPubL5CZeQ7VfQlPhQfHj12gdhFbt/6IqZOH1fqr/O73a7F4yTba2h7Qf7XcwCPTx3C4LDSI4mG2RTFgJ1c5IX4AXvhFGjavfxnvLZqG6B4d4He4xQ8bli8/IG1zoFJkD/6z5rD5Wi0UFvSFF9NocRWyyaIaXmWbxMVF02u73P5kbjEen/kRibsYga63BnMSYb6PgSFD+sBmry5VD1zlV7FiVTqt46jx+x3OPC2OCExowAJvUTRpxTVyX+22cDkvnjI5GV989qzlg1DKPF98GWfPlqK6A79hSxYKT18OWPfukQNx28Ae0i3evfcErAknYblHJPcn0XtQ4a7Ew4+8S/suh3VyYOh2ct9JrvZwU5tyFk4DQy95rAHQ3OLzz3fgwkUXaguyFZ934cSJYnAALjRgFz3I2Gw29O/fDYNie5DrfMayAEjPOIXo6E7mfFYJ8ssvf5BiFVZeVX4ZePyxJNP+akg/UBCwfw8tj4vtJpev+WYfzp53S/nKwYbm4tG9IvHWm1ORnHwb2rVtAxfNw9MPncDGTUfItY+TgTYrVVUefPDhdviCCAHQcEKOwuYtGXA60+h3CwMTXFjgIYBGVn3UcGeAwCmGjawfiyjQ5Z3j6igquoR1647C77fb0KNHBCZRIEwMArrHg6zsooB9d+8Sid4xXaVN37v/rF/cUOPG00+OQOqY2+m5ep/27SNI2AMwasQgM/IeeKzr1mei6FyZKW4Dbdo6pPW/elVF44Xu96UXYhZPwkMCdtFDAF2vQuLQmACnVqSpjh8r8nm6InX27YZMssh6QN+kiXcoN5rWP1VQhEuXygP2PTi2u7L9JMJyVwUCJvW0YA0F9C67XDLCD19ChQJ7wvpWm/9XUYDuq3/uoei9Du80IG10LE0PugS8Z0Z6nhygmODDAg8BhCs74b67EBnpMF1vleE6dKgQfjV78OmneyyDgEbuciVmPTFSWVP6n3XkvO9KNhFoE3pNjI9Wq9PA0L9/BwTMjelNdh84hfHj/4hln2ynVXSZG/fmwjVLik5kvPPzz+Hb9YdVfl2G4zRMnjwEE++Ph3U0KDxTjitXXGCCDws8JLAhPCwco1IGijIVs8+D/IJilJdfk6/2p+fj8JHTvvVFocl9P70D/Zzd4P0Yd+4+CV8E2xC9diQnDaABJJy07MD06SPRsWM7efdSuQpZYhuJ9UyRCy+/sgojRr9Gc+9D5Oq7Ub08QhMDzOe7lGVXPYiifd1Lx3DXUKeZLlPbuCurkHnkLJjgwwIPIUYkOVWKS6LB7XEg57iYl3vw5wXrfNVhag0bHpueLFNVclAgwWcczqN+u7m1DR7DjdjB3dTatN+ut3bEwj9NQ5WhLLV/MLHJfRcWllEK7a/4w9vfqGo6C2IasWr1EYsDoGP0qL5oE9YGcYOiaV8eGgTM97bp5H0UgAk+LPAQInFoHzPTLQtO5bPDh/JxurAYO3bl+SrTxIfWo3t7jBun5t/C2Oq6G8eOnofVBY/u2YGCcF3NVzbZxtM2/1j+HHr3bi/n+QolZjG4iGKZ997fisWLt5pW3JCPIrhWWFgCf75ew0NThslrtzt0iEBMTBS8t4s26H0OZuaBCT4s8BAi/s5oRN4Sbr4S1lBH9tEirKXIudtNQTDNFCL1PzVzuFnKqqbgR7LzUVJyzb8zssBxg3vKunUrNhoQRqXEYue2Vyg99iB69+yk5tuGNShmYMF76yllViZr1cXg8cVXB1QE3jyGrrdGYOzYOHks4jjvSuhL4QO/1T+QkW8OEFz0EkxY4CFEmD0cI1N+Yr5S1jOLBP7Jsu+lYL3Ws0vnjnjiiRS/i02rZh09R66xBl/xCv0bOqxPLTXhNjkiiMDe4z8fjfXrX8CMx0bCo7l9Ihfu/ZVSN3JyimR13PETRdKCq7dX63TtGoHPPtmFJR/twJIlO1Ba5oJmuQjtVF4ZykpLud4lyHAePMRIonz4+g0014UqZNm9O08Ws3jzzsI1Ths7EO0jO/gKTYSh3LgxSwre6+KLZfHxfWRwTBWle8teLYKn/shbovD665OxYcsRFBRcsRyJjvKrlTSuGHjnnW3yG1us2x7JPovfvv61Gng079TBZt6VRd3CSszDU0YO4oRZEGELHkKIwpLhSWR1LRdw6IZhyUAp0T81czSsV5mJaPheSndZP06jysCQuGhZRCMCZhs3H0SZq7zaO6p7nxUVlVKO3A1rqkuMC716dcL5i+VYuz6dou1tAo9VBPcMZe2F5RfNqHYd+cHMQvAtboILW/AQQojtzjgnbqF8uKu0shZt6JTX7ovbZY24f+EZsrynCy7LgJeX/gM6kysfSQa2inLS5Xj6ub8jIkLDmDGDkHB7DLnYkTKddTLvAj5bvgeXSq7C62MLscYO7oo+vaOw9OPvKVXnqeHpe3Ph1XotWQAgM7MQ7KMHFxZ4SKEhLMxB6bI+ZHF/RE0HS8OsJ5PMubafzKyzsNkDryAbPFgUuNjlNeMZhwpxzX0V7hI7/r06A6tXpwcUzGjVnnvIa3jjtSnS+i9evNMUtxK0nQaWX88dB0+1YxBbrlmbiYyDBb7BZ+++k9J70DQ7mODAAg81SBvJyU5s2pwTYPvE3Lp9ZBtMmDTMnPf6RbN33zG/iyyi3EYYRbVFgYtDTtAP01xYFrdoXie69tsbCusrLn5Z+NYUpCTfhl17cpB/usR3BIKhSf3w/PNpJPp2NbaPaBuJg/Re3mr3gvxLKC2tQMeOfNFJsOA5eAgycvgANfc2U1De67Mn3h+LiPCwAIsoUlEHM0+pEldNfXWxrldi3FgVjRd7Ka+ooPSYN83mjZQblmeqUm3EsGis/PI5PDwthf4yDCz7eDd5AJXwp7oMTJuaWKdFjh18K/yXoVKCTgtDFqXvmODBt2wKMcSHUVlxFWvkTR0sQiIBJg3vi17R3QLXp/7Nm7IprVVh9uiwOzRMmphoXsutyxrzSyUlSN9/BpnZBTh3rgylLpfMiXftEgWnMwopKYPRO6azvAeb18VevXovPFWaP4JPKbPUtCHoFHULagueuUpdWEMBObstAsqfcCMpoR9i+nUHExxY4CGK4U94qdem3xvoXBu1bin+65pKW6kedf24Jt13zdy3oW6S6N2n5r9FROD+A9Nj/v7absTokVVs/vifbrrrPAcPFixwhmnFiGG4BAzDtEqEwC+DYZjWSK4Q+CUwDNMayRMC3wqGYVoj6ULg6WAYpjWSzt8P3kyoVIT6hhKD668bhWZ4bw9tA3+1WbPglKeRRJ5LD33BNBp5t1OPRxWU8RVUjcKjVcHQbXDYxBdDcBV1E8nVNM3pPYtLqc0D02g8FfnQDz9rXnfNdzFpFGS8PdE/gz36GTBNZpX44RX4QrDAm4RRVQYUb4as/GKBNwqD3B8jagSg8RSnGRCaVvWGZMpFscsWMAzTGlhKms4VT6wFxa+CYZjWgE/LPoGT4rfQw0owDHMz47PeguqXBM0B16YzzM1KLqp54gECN5XPrjrD3Jy8arXeghrJRlphoVn88hKYG0aztQXa9Ze3PdI4it44xDXrYZ25iqBxLCLtLq3eWee5JJEfoIcEMAwT6qSTuBNrW1DfPdnSwHXqDBPqCI2m1bWwXm+IrHgUPYjqDbbkDBN6SHGbdSy1Uu9dVcWGpulfBIZhQgkx506sT9yCG7ptMu1kNj3MggrDMwwTPISg55iavC4NClia0fX51GaAYZiWRhSizameCquPBn3xgdgxtZn01EltGRiGaQnEXZfEXPuhhohb0KSUo2nRhaswhVo/MAzTXORBXca98Hrz7PpotpoCU+ypUBF30cRrvokEw9SPEO9l83ELVGR8S0MtdV38Fy4Ah5J5FwegAAAAAElFTkSuQmCC",$D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAABFCAYAAABnhSugAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5kSURBVHgB7Z0LcFTlFcfPPvKCkPeDPCDvhKch8lAMbRIqiggKahUfFLRaLcMgOq3WsS1B1DqOLaCtU1s7Q62dcUaLtVZEpRKs1gcICY8QMI9NdrObhLwT8s5uv3P37uZ+9+5uXpu9C3N+Mx93773fvRsC//ud75zznasBL2Gz2VLZppC1RawVsBYhaQRBuMcgtjLWSlkr0Wg0BvACGpgETNQo3kdZ28JaKhAE4S0MrL3H2t7JiH1CAmfCLmSbnWAfsQmCmFr2s7ZrIkIfl8BFM3wPa+uBIAhfsx/GKXTtWDsyce9gm5NA4iYItdjC2hGmxS1jvWBMIzi7IY7aO4AgCH8B5+aPjdbJo8BFJ9oRsHvGCYLwL9DjXsSE3u6ug1uBk7gJ4rLAo8g9CRzn2yTuSdLX1wsfHPwcamuVv3+bbRh8hdUqfCP4Gq1G4/xfptHoAHe1Wh2kpETD2puvA70+AIhJU8oEnufqhEuB05zbOzQ0NMOmzXug3twGhJJZyVHw+p+3s20cEJPG5Zxc4UUXPXQkbi/wzO43SNweMJpa4amnXwfCK+wQI10cnMDFOPdOICZNe3srlHxWCYRnTpwwgdlyEQivsFPUsBP5CF4MlHLqFfr6rECMDeuw730DVyjoGN8jPeAUuKj8zUB4Bat1Umn+BDFR1oup5ALSEbwYCK9ho0GJUA/nNFuPf9Do7Rtefu4jWLaoATRaGwsX8U8A575N4zKY1dYeAjdu3Aj+RlDgMDx4bykLfVmFkMywTQsH/p0DlqZQIFSjEPNYMDauFw+Q19wHZKe3QVDQ0Ci9XA/9lqbp4I9kpbcKApfy7sFsIFQHNV3sMNFvBWJKiQjvg/jYSzBR6i1h4I/ExfB/p+5LAWBppNHbDxAscr1onqcC4VVsVj5LLWlmF9SawvEMM2dHRunkhC4hu8t5HTPRTZZQbh/n858cTQV/JH+ZkdsvvxAr/MyE6qSittFELwRiyjl7PhbWb7mDO4bz18//9Qbo9SMhtVPnYmHL9nXOfRR/VEQPBAZYIZE9JPDhoNPZYHiYCZ956tFbPzCohZa2ac5rEuIugVZndc7r6y0zFKKbPm1QsCp0bO48NKyF9o5g6Om1p40GBw9BRFg/6Nk9QOIrwO/Ch43VqoXGi/YpQ+qsTu6+tcYw5/0D2d9PK14/zL6joyuInI++pRAFTvnmKpGR2saJG2mUOKcS47vhDy8cYiLqGPVeKOKND6+H7p5AeOu1dyFsRr/z3PU/vJt7ACAvFR+Ga682O/effLYIPi5Jhx/fUwaP/OiE4ueS0smEWrDhPuHzrERe4O2dwfDHFw/BNVfXK67Dh8KDj9/MLJQZQPiERTgHzwVCFaIi+hTH/vtNsvPzqy98NCZxI0nM1J+X0wzpKe2cuHFUlosbwYeHlJq6SLhpZRVse+C4R3EjBmO4sMVROja6hzt3163nXIobQR/EA/eUAeEzClDgaUCoQlZ6i+KYqd5u4s4I7YeUWe0wHgYGdJA2m7+myqAsajtj+gAbebuc+2h619SFw6IFjTAW6hvsI/CCuU2Kc9KHiyv6+nRA+IwINNFTgFCFvIVKQRnq7IJcktvAHW9pC4FT5SMOrJCQIVi+mB8pjeYwuGaxmTt2vipa8R1z2UgvjcObzDNgaEgLmWn8wpjjZTMFc1yelXfggxxhOz+HzyEfZv0c83gEI/rBQcOcRXCmIhYInxGhB0I1MlL40baGibudCQrJzuBH9xOnZsITu1c693PnNXECx/AUPgRwXi8FHwpyslnsWkq1MUIQ4fzsZu74b17Oh+pa92Xt02fz04fjpQnwyBM38fd4+gisLqoe+S42FSB8RsSYiy4S3gU9zAnxXdwxNJMdyIX61YlEbj8+jp9Dn62wr6lOTeZF5zCnpcxO4vucOhsHKew6aRIOetbtYT33oFdfSvn5GEUf6c+J1ke1gd6D4UtI4CqBAtbIwsWVhpHRLU7mvKo18mKTm9NnmLimhQwqjptdCFzep6Iymn0fn7BSx8JdGIpzBz6gZifxHvRjZQmKfqmSPvWNoSykR3NwX0ImukqkuXCgVYkCD2eOqiyZCPOvMUFOpt20xtj1yhUG7jya0vaHBh9oXlVQLcStcfR05IsvmMPPnZuaQyF/WR13DIV43x2nhWsRjF/jnY+dTBR+zqy0VoiO7OWuabzIZ7ClJHdCpCRSUGMg89zXkMBV4qr5Sg+0I/yUwkJj01gISsr9d50CT6ApLg9ZIY8/fMzjdb19esEUf2QzL/o5WS1Ck7P96RsEgUdH8eJ2ZdKnyh5iZeVUmsnXkImuEvL//Oh9/q46SvgcysJY4wETR84zMzs9ZfSwmtHMm+zlF2KYB13D/AHdMBZaO4KFbWYa76gzMP+B3KSXh+zOfaf06BNTCwlcJZJm8oKqrIl0hsBOn4tzOXd2RWd3ILzw8nXQ16+Hz76cDa3twS77DbIw2If/yYA7H7oNqiSecce04B/vzxn1uzATrVJ8CKXJEnC+PT1T0R9HdGlqanPLNCB8i8Zmo+zgqcBkbIIb1hS7Pf+D79Vwi04wF/xY6YinHL3PWWxOHRiIMWT7+nGpU86eF66BUuYBx7XiDtCzjWGwAL09jxz7YF804XGUR9B7j/PwyPA+IS6NC0SQvIUNwvxfq1V+H9LVHQRfi978ZXlmCA+zz6/xO/BBUVOn9JAvybUw7/ywcL//fZMMVhcLUT7+sBiSqbLqlEACnyJGEzgxAgl86iAnmx+y+sZcKPj+QjCZWuHDj76Bnzy42nkOR+N3DpRAraEZVl1/NYSFBbPR0eHptkJ3dzd8WlIBDQ0jJvSczBYozDdAXEwP88DbV6O5w7FiDOkf0MHz+/Kd53BkL1heC9cuNkNQ4JBwH42bSBqO6jgnb+8Mgnfen0sLTFSCBO6H3LZ+MaxYsQS2P/oiZGfOhFvWXcedN5kq4dVXHmXidj2nXbf2DNx936vC56XMlP5d8WHmuBuE8VJj5E3uJ7d9CXfecg7Gy+qiGti0bR1cpDm4zyEnmx+Sl5cDf3vzIBz+1ABZmcmK81t/eo9bcSO5uQsgMz1OmE/v/vlnExI30igpE7V2VeWExI3Ex3ZDEbMgCN9DAvczwsMDobWtF1770yfCfkZmlKIPvttrNAYGe2H5UhNz1k28TFTZ2ZF58S03XIDJgHFywveQie5npKXGw9ZtrzCR25ddLl0ylzvf0GCBo0e/5Y7FxUVDUdFy577VOgz19Z2wZqUyLn7o03To7deL/TQeyyt9fDTd+Tk5kc87b2qeDl8cT+JqROL8HlPlMlLaYH4Ov3DFZPbPmnJXOiRwP+PMmTo22tlFFxGuh8hIPjnk4KGT8NJvD3LH1q5ZyAncYDALSzez0niBN7eGwFPPF8F4CQ4aUiTCvP9JJvz+L0tc9v/Z1q84gWNoDEtWEb6H7CY/Y0iSDZaWppx/m4zNimNpafxKs+pq+5pwebaZp6WfnrhqrvLdYXUm9yOyPIPN3BAKl3roNcFqQCO4HzMrWSmiGoNS4HPn8Flkp0/XCos85Ku9Tle4jzVv3HAWHrq31Pk+aVyWcvv9twuFEue7qNxy7GSC23slyOb9RjLPVYME7scUFPDl8oaGBsBotCj6odddSsUFi7C+W845F+u1HeQzh5y0RhyOuB1i8Ql5Wmp/vw4sTa7j2phHL68jV02ryFSDTHQ/JiGBF2RNDb5qlx8dQ6frmeedN70t5osw24XAmzzEobMzeHMe8+EdJMkKO1QaosAdWMZJvmSVVpGpBwncj8EkFykWS5eiT2Qkb/729/eAoa4F5mUpTfmqWtcjKWalyQtMlF+wO/cCAqzMg86b+uisc/szyx4UwvfSCK4aZKL7KdFRITA4NAhdXaLDymaD0jJlLNpU3wpvv3MYli2dDzqdDioqDMLyT0xPlYLrvlcXVTkLKKJnW6uxLyqJj1WuIzeIWWxY2AFTXKXodTbYsOa8PaXVMVhr7C9QXLHMxPXFFx5IS1ERvgUFjv+DqFCWn9HS2gvLV/xy1H4osp27DrBPB7jj8oKIIcFD8KvHvoCx4ohbR0cpxY+vK5K/ssgd1XXh9CojFUETfWyV9YnLipBp4ysaIQXLKJeLxRlwSelkKPmCqnKriAEF3gaE19Fo1S0ueGSCwkJT/rl9+Wwub5+9HS9NhPaOIJgIlTVR8MbbC4FQjVr8VzwK9H6yK45n96wQ3hOGc2h8cSHOj6UFJhwILzBkJjS+FQULNrz13jy4UDXiJTc3hsKOX6+ChzedhPCwkWIQrhgW8837WBjt6xNJ8CYTd08fuXlUpBR/+6VAXHHgG0me35sP3qDsbDxs/cVqIC47SvGRWwIEQVyJlGg1Go2BfagFwqtoyHFMqIsBte1IdNkPhFfRaKnUHaEq7+EfDoHvBcKr6ChHcMxo6Hc1FQiaFn61bCjHZJcSILxGbGw0LFyQDIRnMjJiICmRctW9zH5x6s3lou8CwmuwXzA8t3sTxMZQoUF3YEXYZ4rvBsLrOLXMuYJsNtu7bLMeCK9hsTTDm38/Ar29PUDYwfTaAL0WNm++CZKSYoDwKjh63+/YkQs8lW1OAuWmE8TliIG1Iod5jnDuDfEEmeoEcXmySypuROG/ZB3Q+7YPCIK4nNjHtLtfftBtOgYz19FUpxx1gvB/Spm481yd8BSBxPq6lKdOEP4NatRtLWyPCZVsFEdn2xGgkZwg/BFB3GIei0s85hDhheLQT3NygvAvcM6d50ncyJiSBNlNdrANxtYMQBCEmqCgHxM1OSrjWvMkxsmLWdsMBEH4mn+CXdyGsV4wrjR/vDFrW9jHNNb+CgRB+AKsuoRz7Q3jETcyqVXL4oiOpsKtrKUCQRDeAms07Gdt72jzbE94rSyBKPZCsHvcseE+ldQkCM+geDvEbQnYPeMl4x2p3fF/QVX5HxNLKuoAAAAASUVORK5CYII=",KD="/assets/pay-3-D5zaUMCx.png",WD={components:{LayoutVue:Sc},data(){return{info:[]}},methods:{async getData(){try{const t=await Rv();this.info=t}catch(t){console.log(t)}},goToPap(){this.$router.push({path:"/products/"})}},mounted(){this.getData()}},Qr=t=>(Zt("data-v-0911e399"),t=t(),en(),t),GD={class:"checkout"},QD={class:"checkout_head"},YD={class:"checkout_cart"},XD=Qr(()=>m("h3",{class:"cart_title"},"Shopping Cart",-1)),JD={class:"table_wrapper"},ZD={class:"cart_table"},eO=Qr(()=>m("div",{class:"table_head"},[m("div",{class:"head_item"},[m("p",{class:"head_text"},"Product")]),m("div",{class:"head_item"},[m("p",{class:"head_text"},"Quality")]),m("div",{class:"head_item"},[m("p",{class:"head_text"},"Total Price")])],-1)),tO=Qr(()=>m("hr",{color:"#000"},null,-1)),nO={key:0,class:"empty_array"},rO=Qr(()=>m("p",{class:"empty_text"},"У вас нет продуктов",-1)),sO=[rO],iO={key:1},oO={class:"body_track"},aO={class:"body_item cart_flex"},cO=["src"],lO=Qr(()=>m("h3",{class:"card_title"},"Coffee",-1)),uO={class:"body_item cart_quality"},hO={class:"index"},dO={class:"body_item cart_flex"},fO={class:"cart_price"},pO=Qr(()=>m("hr",{color:"#000",width:"100%"},null,-1)),gO={class:"cart_total"},mO={class:"total_price"},_O=Qr(()=>m("div",{class:"checkout_pay"},[m("h3",{class:"pay_title"},"Pay By"),m("div",{class:"pay_flex"},[m("button",{class:"pay_btn"},[m("img",{src:zD,alt:"",class:"pay_img"})]),m("button",{class:"pay_btn"},[m("img",{src:$D,alt:"",class:"pay_img"})]),m("button",{class:"pay_btn"},[m("img",{src:KD,alt:"",class:"pay_img"})])])],-1)),yO={class:"checkout_back"};function vO(t,e,n,r,s,i){const o=Ue("LayoutVue");return re(),Dr(o,null,{default:We(()=>{var a,c;return[m("div",GD,[m("div",QD,[m("div",YD,[XD,m("div",JD,[m("div",ZD,[eO,tO,((a=s.info.cart)==null?void 0:a.length)===0?(re(),de("div",nO,sO)):(re(),de("div",iO,[(re(!0),de(it,null,Va(s.info.cart,l=>(re(),de("div",{class:"table_body",key:l.id},[m("div",oO,[m("div",aO,[m("img",{src:l.image,alt:"",class:"cart_img"},null,8,cO),lO]),m("div",uO,[m("p",hO,Pt(l.quantity),1)]),m("div",dO,[m("p",fO,Pt(l.price)+"$",1)])]),pO]))),128))]))])]),m("div",gO,[m("p",mO,"Total: "+Pt((c=s.info.cart)==null?void 0:c.reduce((l,u)=>l+u.price*u.quantity,0))+"$",1)])]),_O]),m("div",yO,[m("button",{class:"back_btn",onClick:e[0]||(e[0]=(...l)=>i.goToPap&&i.goToPap(...l))},"Back to Order")])])]}),_:1})}const EO=ht(WD,[["render",vO],["__scopeId","data-v-0911e399"]]),AO={components:{Layout:Sc},data(){return{title:"",price:"",file:null,uploadValue:0,image:"",description:"",info:[]}},methods:{async submitForm(){var e;const t={id:((e=this.info.products)==null?void 0:e.length)+1,name:this.title,description:this.description,price:Number(this.price),image:this.image,status:!1};try{const n=await V2(t);se.success("Вы успешно создали продукт.",{autoClose:1e3}),this.getProducts(),this.title="",this.price="",this.description="",this.image=""}catch(n){console.log(n)}},async getProducts(){try{const t=await Jh();this.info=t}catch(t){console.log(t)}},handleFileChange(t){this.file=t.target.files[0],this.uploud()},uploud(){const t=ab(O2,`${this.file.name}`);ib(t,this.file).then(e=>{console.log("Файл успешно загружен!"),this.uploadValue=100,ob(e.ref).then(n=>{this.image=n,console.log(this.image)})}).catch(e=>{console.error("Ошибка при загрузке файла:",e.message)})}},mounted(){this.getProducts()}},Rc=t=>(Zt("data-v-34a20244"),t=t(),en(),t),wO={class:"form"},TO={class:"form_flex"},IO=Rc(()=>m("label",{class:"form_label",for:"title"},"Product title",-1)),SO={class:"form_flex"},CO=Rc(()=>m("label",{class:"form_label",for:"description"},"Product description",-1)),RO={class:"form_flex"},bO=Rc(()=>m("label",{class:"form_label",for:"price"},"Product price",-1)),PO={class:"form_flex"},kO=Rc(()=>m("label",{class:"form_label",for:"file"},"Product photo",-1));function NO(t,e,n,r,s,i){const o=Ue("Layout");return re(),Dr(o,null,{default:We(()=>[m("div",wO,[m("div",TO,[IO,un(m("input",{class:"form_input","onUpdate:modelValue":e[0]||(e[0]=a=>s.title=a),type:"text",id:"title",placeholder:"Title"},null,512),[[hn,s.title]])]),m("div",SO,[CO,un(m("input",{class:"form_input","onUpdate:modelValue":e[1]||(e[1]=a=>s.description=a),type:"text",id:"description",placeholder:"Description"},null,512),[[hn,s.description]])]),m("div",RO,[bO,un(m("input",{class:"form_input","onUpdate:modelValue":e[2]||(e[2]=a=>s.price=a),type:"number",id:"price",min:"0",placeholder:"0.00"},null,512),[[hn,s.price]])]),m("div",PO,[kO,m("input",{class:"upload_input",onChange:e[3]||(e[3]=(...a)=>i.handleFileChange&&i.handleFileChange(...a)),type:"file",id:"file"},null,32)]),m("button",{class:"form_btn",onClick:e[4]||(e[4]=(...a)=>i.submitForm&&i.submitForm(...a))},"Send")])]),_:1})}const DO=ht(AO,[["render",NO],["__scopeId","data-v-34a20244"]]),OO={data(){return{username:"",email:"",password:""}},mounted(){},methods:{async signUp(){if(this.username=="")se.warning("Напишите свое имя.",{autoClose:1e3});else if(this.password=="")se.warning("Напишите свой пароль.",{autoClose:1e3});else if(this.email=="")se.warning("Напишите свою почту.",{autoClose:1e3});else try{const t=await X2(this.email,this.password,this.username);localStorage.setItem("token",t.uid),se.success("Вы успешно прошли регистрацию.",{autoClose:1e3}),setTimeout(()=>{this.$router.push({path:"/"})},1100)}catch(t){t.code==="auth/email-already-in-use"?se.warning("Такой пользователь уже есть.",{autoClose:1e3}):console.log(t.message)}}}},bc=t=>(Zt("data-v-d8b1be07"),t=t(),en(),t),VO={class:"form"},xO=bc(()=>m("h3",{class:"form_title"},"Create Account",-1)),LO={class:"form_inputs"},MO={class:"form_box"},UO=bc(()=>m("div",{class:"box_img"},[m("svg",{width:"26",height:"29",viewBox:"0 0 26 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[m("path",{d:"M13 14.5C17.1031 14.5 20.4286 11.2545 20.4286 7.25C20.4286 3.24551 17.1031 0 13 0C8.89688 0 5.57143 3.24551 5.57143 7.25C5.57143 11.2545 8.89688 14.5 13 14.5ZM18.2 16.3125H17.2308C15.9424 16.8902 14.5089 17.2188 13 17.2188C11.4911 17.2188 10.0634 16.8902 8.7692 16.3125H7.8C3.49375 16.3125 0 19.7223 0 23.925V26.2812C0 27.7822 1.24777 29 2.78571 29H23.2143C24.7522 29 26 27.7822 26 26.2812V23.925C26 19.7223 22.5063 16.3125 18.2 16.3125Z",fill:"black"})])],-1)),FO={class:"form_box"},BO=bc(()=>m("div",{class:"box_img"},[m("svg",{width:"31",height:"22",viewBox:"0 0 31 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[m("path",{d:"M25.7083 0.333328H5.29163C4.1313 0.333328 3.01851 0.754756 2.19803 1.5049C1.37756 2.25505 0.916626 3.27246 0.916626 4.33333V17.6667C0.916626 18.7275 1.37756 19.7449 2.19803 20.4951C3.01851 21.2452 4.1313 21.6667 5.29163 21.6667H25.7083C26.8686 21.6667 27.9814 21.2452 28.8019 20.4951C29.6224 19.7449 30.0833 18.7275 30.0833 17.6667V4.33333C30.0833 3.27246 29.6224 2.25505 28.8019 1.5049C27.9814 0.754756 26.8686 0.333328 25.7083 0.333328V0.333328ZM25.1104 2.99999L16.5354 10.84C16.3998 10.965 16.2385 11.0642 16.0608 11.1318C15.8831 11.1995 15.6925 11.2344 15.5 11.2344C15.3074 11.2344 15.1168 11.1995 14.9391 11.1318C14.7614 11.0642 14.6001 10.965 14.4645 10.84L5.88954 2.99999H25.1104ZM27.1666 17.6667C27.1666 18.0203 27.013 18.3594 26.7395 18.6095C26.466 18.8595 26.0951 19 25.7083 19H5.29163C4.90485 19 4.53392 18.8595 4.26043 18.6095C3.98694 18.3594 3.83329 18.0203 3.83329 17.6667V4.87999L12.4083 12.72C13.2286 13.4691 14.3406 13.8898 15.5 13.8898C16.6593 13.8898 17.7713 13.4691 18.5916 12.72L27.1666 4.87999V17.6667Z",fill:"black"})])],-1)),jO={class:"form_box"},qO=bc(()=>m("div",{class:"box_img"},[m("svg",{width:"39",height:"34",viewBox:"0 0 39 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[m("path",{d:"M19.5 18.4167C19.0053 18.4116 18.5206 18.5388 18.1113 18.7812C17.702 19.0235 17.3877 19.3694 17.2107 19.7721C17.0337 20.1749 17.0025 20.6153 17.1212 21.034C17.24 21.4528 17.5031 21.8297 17.875 22.1142V24.0833C17.875 24.4591 18.0462 24.8194 18.351 25.0851C18.6557 25.3507 19.069 25.5 19.5 25.5C19.931 25.5 20.3443 25.3507 20.649 25.0851C20.9538 24.8194 21.125 24.4591 21.125 24.0833V22.1142C21.4969 21.8297 21.76 21.4528 21.8788 21.034C21.9975 20.6153 21.9663 20.1749 21.7893 19.7721C21.6123 19.3694 21.298 19.0235 20.8887 18.7812C20.4794 18.5388 19.9947 18.4116 19.5 18.4167ZM27.625 12.75V9.91667C27.625 8.03805 26.769 6.23638 25.2452 4.908C23.7215 3.57961 21.6549 2.83334 19.5 2.83334C17.3451 2.83334 15.2785 3.57961 13.7548 4.908C12.231 6.23638 11.375 8.03805 11.375 9.91667V12.75C10.0821 12.75 8.84209 13.1978 7.92785 13.9948C7.01361 14.7918 6.5 15.8728 6.5 17V26.9167C6.5 28.0438 7.01361 29.1248 7.92785 29.9219C8.84209 30.7189 10.0821 31.1667 11.375 31.1667H27.625C28.9179 31.1667 30.1579 30.7189 31.0721 29.9219C31.9864 29.1248 32.5 28.0438 32.5 26.9167V17C32.5 15.8728 31.9864 14.7918 31.0721 13.9948C30.1579 13.1978 28.9179 12.75 27.625 12.75ZM14.625 9.91667C14.625 8.7895 15.1386 7.7085 16.0529 6.91147C16.9671 6.11444 18.2071 5.66667 19.5 5.66667C20.7929 5.66667 22.0329 6.11444 22.9471 6.91147C23.8614 7.7085 24.375 8.7895 24.375 9.91667V12.75H14.625V9.91667ZM29.25 26.9167C29.25 27.2924 29.0788 27.6527 28.774 27.9184C28.4693 28.1841 28.056 28.3333 27.625 28.3333H11.375C10.944 28.3333 10.5307 28.1841 10.226 27.9184C9.92121 27.6527 9.75 27.2924 9.75 26.9167V17C9.75 16.6243 9.92121 16.2639 10.226 15.9983C10.5307 15.7326 10.944 15.5833 11.375 15.5833H27.625C28.056 15.5833 28.4693 15.7326 28.774 15.9983C29.0788 16.2639 29.25 16.6243 29.25 17V26.9167Z",fill:"black"})])],-1));function HO(t,e,n,r,s,i){return re(),de("div",VO,[xO,m("div",LO,[m("div",MO,[UO,un(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.username=o),class:"form_input",placeholder:"Name"},null,512),[[hn,s.username]])]),m("div",FO,[BO,un(m("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=o=>s.email=o),class:"form_input",placeholder:"Email"},null,512),[[hn,s.email]])]),m("div",jO,[qO,un(m("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=o=>s.password=o),class:"form_input",placeholder:"Password"},null,512),[[hn,s.password]])])]),m("button",{class:"form_btn",onClick:e[3]||(e[3]=(...o)=>i.signUp&&i.signUp(...o))},"SIGN UP")])}const zO=ht(OO,[["render",HO],["__scopeId","data-v-d8b1be07"]]),kv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJ/SURBVFiF7VZBS1RRGD3fzJuHi0x0E1FtHDCIalco5qJcVdCmSFq1KFwopD+hpe4S2gRtI3QTSLmxXSDUIiIRdFG0EKKoSTDi9s59nhYzg8/nzPhmcIrAAx8PvnO/75x77/d4DzjAP4a1WqgoOg9gEoAAzFgYvtnBe38d0sh2QlsApiwM37WqmRS/I/K3SFWCiqLx1JonCb4cUTSR7pVrSljKi5yC2WMAYYIKYPZQ3j+SFDTTM/NiSV3w/imAy4l0qfLsqSwahffHJN0CmalvphOQc0V4v5QSX0Mc9yOO+wGsJfJX4f0SzE7siwGRg8jnlwCcSqQXEQQDyOV6kMv1IAjOAXiR4E8DGMpioLF4FN1NDZsq91yQ9yMif4l08v52dT52Dd4eQ1hbuHYzKoruSTKR90VupfgZSTlF0ajIqGUDkjpFzqeKSyKHJR0S+azBLhckdYkcEvm1aQNyrihyJVW4Kuf65FyvyOWGR1yONTl3Us71iVxNcStyrre2ODko8kuqYFFSt8gLNbhG8V3kJUmHRT5Pcd9EXsw+bI3utHFUZ6bePI1Xdz5dgxyTFOw51VlieyNjIpnip0zkewBnKofxA8BNBMFbeD8HYHjPqc2GVwiCG/D+LIA5AN2V/LLJuV7k869htoE4vgYpRhAsQCruk3gZZh/g/RUAW8jn5wEcQRwPGABIOg5gw8x+KoomYPZgX8WrkCYtDGckdQLoMrP1oGzO1tsiWAdmtglgE2jyc9wOtGpgGnFc3BHAdCuNmvp5SKBkHR0fkwmRpXqLG+G/vYIDA2014Nqot6v37regUJgFOQizo3XbmH2qmZNe1q2RPqNQmM1o9AB/D38AwtBzw1/co7MAAAAASUVORK5CYII=",$O={name:"CoffeeShopSignup",data(){return{}},components:{SignupForm:zO},mounted(){},methods:{}},Pc=t=>(Zt("data-v-6b44ad17"),t=t(),en(),t),KO={class:"signup"},WO=Pc(()=>m("img",{src:kv,alt:""},null,-1)),GO={class:"signup_content"},QO=Pc(()=>m("h3",{class:"signup_title"},"Selamat Datang Kembali!",-1)),YO=Pc(()=>m("p",{class:"signup_text"}," Untuk tetap berhubungan dengan saya Silakan login dengan informasi personal anda ",-1)),XO=Pc(()=>m("button",{class:"signup_btn"},"SIGN IN",-1)),JO={class:"signup_form"};function ZO(t,e,n,r,s,i){const o=Ue("RouterLink"),a=Ue("SignupForm");return re(),de("div",KO,[q(o,{class:"home_link",to:"/"},{default:We(()=>[WO]),_:1}),m("div",GO,[QO,YO,q(o,{to:"/login/"},{default:We(()=>[XO]),_:1})]),m("div",JO,[q(a)])])}const eV=ht($O,[["render",ZO],["__scopeId","data-v-6b44ad17"]]),tV={name:"CoffeeShopSignupPage",data(){return{}},components:{Signup:eV},mounted(){},methods:{}},nV={class:"signip_wrapper"};function rV(t,e,n,r,s,i){const o=Ue("Signup");return re(),de("div",nV,[q(o)])}const sV=ht(tV,[["render",rV],["__scopeId","data-v-e8f658b0"]]),iV={name:"CoffeeShopLoginForm",data(){return{email:"",password:""}},mounted(){},methods:{async login(){if(this.password=="")se.warning("Напишите свой пароль.",{autoClose:1e3});else if(this.email=="")se.warning("Напишите свою почту.",{autoClose:1e3});else try{const t=await J2(this.email,this.password);se.success("Вы успешно вошли в систему.",{autoClose:1e3}),localStorage.setItem("token",t.uid),setTimeout(()=>{this.$router.push({path:"/"})},1100)}catch(t){t.code==="auth/invalid-email"?se.warning("Неправильная почта или пароль.",{autoClose:1e3}):console.log(t.message)}}}},nd=t=>(Zt("data-v-bbccb135"),t=t(),en(),t),oV={class:"form"},aV=nd(()=>m("h3",{class:"form_title"},"Sign in",-1)),cV={class:"form_inputs"},lV={class:"form_box"},uV=nd(()=>m("div",{class:"box_img"},[m("svg",{width:"31",height:"22",viewBox:"0 0 31 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[m("path",{d:"M25.7083 0.333328H5.29163C4.1313 0.333328 3.01851 0.754756 2.19803 1.5049C1.37756 2.25505 0.916626 3.27246 0.916626 4.33333V17.6667C0.916626 18.7275 1.37756 19.7449 2.19803 20.4951C3.01851 21.2452 4.1313 21.6667 5.29163 21.6667H25.7083C26.8686 21.6667 27.9814 21.2452 28.8019 20.4951C29.6224 19.7449 30.0833 18.7275 30.0833 17.6667V4.33333C30.0833 3.27246 29.6224 2.25505 28.8019 1.5049C27.9814 0.754756 26.8686 0.333328 25.7083 0.333328V0.333328ZM25.1104 2.99999L16.5354 10.84C16.3998 10.965 16.2385 11.0642 16.0608 11.1318C15.8831 11.1995 15.6925 11.2344 15.5 11.2344C15.3074 11.2344 15.1168 11.1995 14.9391 11.1318C14.7614 11.0642 14.6001 10.965 14.4645 10.84L5.88954 2.99999H25.1104ZM27.1666 17.6667C27.1666 18.0203 27.013 18.3594 26.7395 18.6095C26.466 18.8595 26.0951 19 25.7083 19H5.29163C4.90485 19 4.53392 18.8595 4.26043 18.6095C3.98694 18.3594 3.83329 18.0203 3.83329 17.6667V4.87999L12.4083 12.72C13.2286 13.4691 14.3406 13.8898 15.5 13.8898C16.6593 13.8898 17.7713 13.4691 18.5916 12.72L27.1666 4.87999V17.6667Z",fill:"black"})])],-1)),hV={class:"form_box"},dV=nd(()=>m("div",{class:"box_img"},[m("svg",{width:"39",height:"34",viewBox:"0 0 39 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[m("path",{d:"M19.5 18.4167C19.0053 18.4116 18.5206 18.5388 18.1113 18.7812C17.702 19.0235 17.3877 19.3694 17.2107 19.7721C17.0337 20.1749 17.0025 20.6153 17.1212 21.034C17.24 21.4528 17.5031 21.8297 17.875 22.1142V24.0833C17.875 24.4591 18.0462 24.8194 18.351 25.0851C18.6557 25.3507 19.069 25.5 19.5 25.5C19.931 25.5 20.3443 25.3507 20.649 25.0851C20.9538 24.8194 21.125 24.4591 21.125 24.0833V22.1142C21.4969 21.8297 21.76 21.4528 21.8788 21.034C21.9975 20.6153 21.9663 20.1749 21.7893 19.7721C21.6123 19.3694 21.298 19.0235 20.8887 18.7812C20.4794 18.5388 19.9947 18.4116 19.5 18.4167ZM27.625 12.75V9.91667C27.625 8.03805 26.769 6.23638 25.2452 4.908C23.7215 3.57961 21.6549 2.83334 19.5 2.83334C17.3451 2.83334 15.2785 3.57961 13.7548 4.908C12.231 6.23638 11.375 8.03805 11.375 9.91667V12.75C10.0821 12.75 8.84209 13.1978 7.92785 13.9948C7.01361 14.7918 6.5 15.8728 6.5 17V26.9167C6.5 28.0438 7.01361 29.1248 7.92785 29.9219C8.84209 30.7189 10.0821 31.1667 11.375 31.1667H27.625C28.9179 31.1667 30.1579 30.7189 31.0721 29.9219C31.9864 29.1248 32.5 28.0438 32.5 26.9167V17C32.5 15.8728 31.9864 14.7918 31.0721 13.9948C30.1579 13.1978 28.9179 12.75 27.625 12.75ZM14.625 9.91667C14.625 8.7895 15.1386 7.7085 16.0529 6.91147C16.9671 6.11444 18.2071 5.66667 19.5 5.66667C20.7929 5.66667 22.0329 6.11444 22.9471 6.91147C23.8614 7.7085 24.375 8.7895 24.375 9.91667V12.75H14.625V9.91667ZM29.25 26.9167C29.25 27.2924 29.0788 27.6527 28.774 27.9184C28.4693 28.1841 28.056 28.3333 27.625 28.3333H11.375C10.944 28.3333 10.5307 28.1841 10.226 27.9184C9.92121 27.6527 9.75 27.2924 9.75 26.9167V17C9.75 16.6243 9.92121 16.2639 10.226 15.9983C10.5307 15.7326 10.944 15.5833 11.375 15.5833H27.625C28.056 15.5833 28.4693 15.7326 28.774 15.9983C29.0788 16.2639 29.25 16.6243 29.25 17V26.9167Z",fill:"black"})])],-1));function fV(t,e,n,r,s,i){return re(),de("div",oV,[aV,m("div",cV,[m("div",lV,[uV,un(m("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),class:"form_input",placeholder:"Email"},null,512),[[hn,s.email]])]),m("div",hV,[dV,un(m("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),class:"form_input",placeholder:"Password"},null,512),[[hn,s.password]])])]),m("button",{class:"form_btn",onClick:e[2]||(e[2]=(...o)=>i.login&&i.login(...o))},"SIGN IN")])}const pV=ht(iV,[["render",fV],["__scopeId","data-v-bbccb135"]]),gV={name:"CoffeeShopLogin",data(){return{}},mounted(){},methods:{},components:{LoginForm:pV}},kc=t=>(Zt("data-v-64d4973d"),t=t(),en(),t),mV={class:"login"},_V=kc(()=>m("img",{src:kv,alt:""},null,-1)),yV={class:"login_content"},vV=kc(()=>m("h3",{class:"login_title"},"Hallo, Teman !",-1)),EV=kc(()=>m("p",{class:"login_text"}," Masukan Informasi detail Anda dan Mulai Berpetualang Bersama Saya ",-1)),AV=kc(()=>m("button",{class:"login_btn"},"SIGN UP",-1)),wV={class:"login_form"};function TV(t,e,n,r,s,i){const o=Ue("RouterLink"),a=Ue("LoginForm");return re(),de("div",mV,[q(o,{class:"home_link",to:"/"},{default:We(()=>[_V]),_:1}),m("div",yV,[vV,EV,q(o,{to:"/signup/"},{default:We(()=>[AV]),_:1})]),m("div",wV,[q(a)])])}const IV=ht(gV,[["render",TV],["__scopeId","data-v-64d4973d"]]),SV={name:"CoffeeShopLoginPage",data(){return{}},mounted(){},methods:{},components:{Loginvue:IV}},CV={class:"login_wrapper"};function RV(t,e,n,r,s,i){const o=Ue("Loginvue");return re(),de("div",CV,[q(o)])}const bV=ht(SV,[["render",RV],["__scopeId","data-v-0c42eac8"]]),PV=[{path:"/",name:"Home",component:sD},{path:"/products/",name:"Products",component:HD},{path:"/checkout/",name:"Checkout",component:EO},{path:"/create/",name:"Create",component:DO},{path:"/signup/",name:"signup",component:sV},{path:"/login/",name:"login",component:bV}],kV=GA({history:hA(),routes:PV}),Nv=Cg(XA);Nv.use(kV);Nv.mount("#app");
