(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function z(){}const ve=e=>e;function Mi(e,t){for(const n in t)e[n]=t[n];return e}function Pa(e){return e()}function fo(){return Object.create(null)}function vt(e){e.forEach(Pa)}function we(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function wl(e){return Object.keys(e).length===0}function El(e,...t){if(e==null)return z;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Fa(e,t,n){e.$$.on_destroy.push(El(t,n))}function po(e){return e==null?"":e}function _l(e){return e&&we(e.destroy)?e.destroy:z}function mo(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const $a=typeof window<"u";let Ln=$a?()=>window.performance.now():()=>Date.now(),dr=$a?e=>requestAnimationFrame(e):z;const xe=new Set;function Va(e){xe.forEach(t=>{t.c(e)||(xe.delete(t),t.f())}),xe.size!==0&&dr(Va)}function Pn(e){let t;return xe.size===0&&dr(Va),{promise:new Promise(n=>{xe.add(t={c:e,f:n})}),abort(){xe.delete(t)}}}function R(e,t){e.appendChild(t)}function Ua(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Tl(e){const t=x("style");return Sl(Ua(e),t),t.sheet}function Sl(e,t){return R(e.head||e,t),t.sheet}function $(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function Il(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function Cl(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Mt(e){return document.createTextNode(e)}function H(){return Mt(" ")}function Ls(){return Mt("")}function _t(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function C(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function bl(e){return Array.from(e.childNodes)}function de(e,t){t=""+t,e.data!==t&&(e.data=t)}function go(e,t){e.value=t==null?"":t}function Al(e,t,n,s){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function Dt(e,t,n){e.classList[n?"add":"remove"](t)}function Dl(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,s,t),i}class kl{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=Cl(n.nodeName):this.e=x(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)$(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(P)}}function yo(e,t){return new e(t)}const ms=new Map;let gs=0;function Nl(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Rl(e,t){const n={stylesheet:Tl(t),rules:{}};return ms.set(e,n),n}function gn(e,t,n,s,i,r,o,a=0){const c=16.666/s;let u=`{
`;for(let g=0;g<=1;g+=c){const E=t+(n-t)*r(g);u+=g*100+`%{${o(E,1-E)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Nl(l)}_${a}`,f=Ua(e),{stylesheet:d,rules:p}=ms.get(f)||Rl(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${s}ms linear ${i}ms 1 both`,gs+=1,h}function yn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(e.style.animation=s.join(", "),gs-=i,gs||Ml())}function Ml(){dr(()=>{gs||(ms.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&P(t)}),ms.clear())})}function xl(e,t,n,s){if(!t)return z;const i=e.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return z;const{delay:r=0,duration:o=300,easing:a=ve,start:c=Ln()+r,end:u=c+o,tick:l=z,css:h}=n(e,{from:t,to:i},s);let f=!0,d=!1,p;function m(){h&&(p=gn(e,0,1,o,r,a,h)),r||(d=!0)}function g(){h&&yn(e,p),f=!1}return Pn(E=>{if(!d&&E>=c&&(d=!0),d&&E>=u&&(l(1,0),g()),!f)return!1;if(d){const M=E-c,I=0+1*a(M/o);l(I,1-I)}return!0}),m(),l(0,1),g}function Ol(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,i=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,Ba(e,i)}}function Ba(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),i=s.transform==="none"?"":s.transform;e.style.transform=`${i} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let vn;function ln(e){vn=e}function ja(){if(!vn)throw new Error("Function called outside component initialization");return vn}function Ll(e){ja().$$.on_mount.push(e)}function Pl(e){ja().$$.on_destroy.push(e)}const ke=[],ys=[];let Oe=[];const xi=[],Fl=Promise.resolve();let Oi=!1;function $l(){Oi||(Oi=!0,Fl.then(qa))}function Xt(e){Oe.push(e)}function Vl(e){xi.push(e)}const mi=new Set;let be=0;function qa(){if(be!==0)return;const e=vn;do{try{for(;be<ke.length;){const t=ke[be];be++,ln(t),Ul(t.$$)}}catch(t){throw ke.length=0,be=0,t}for(ln(null),ke.length=0,be=0;ys.length;)ys.pop()();for(let t=0;t<Oe.length;t+=1){const n=Oe[t];mi.has(n)||(mi.add(n),n())}Oe.length=0}while(ke.length);for(;xi.length;)xi.pop()();Oi=!1,mi.clear(),ln(e)}function Ul(e){if(e.fragment!==null){e.update(),vt(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Xt)}}function Bl(e){const t=[],n=[];Oe.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),Oe=t}let en;function pr(){return en||(en=Promise.resolve(),en.then(()=>{en=null})),en}function he(e,t,n){e.dispatchEvent(Dl(`${t?"intro":"outro"}${n}`))}const ls=new Set;let kt;function Fn(){kt={r:0,c:[],p:kt}}function $n(){kt.r||vt(kt.c),kt=kt.p}function J(e,t){e&&e.i&&(ls.delete(e),e.i(t))}function ht(e,t,n,s){if(e&&e.o){if(ls.has(e))return;ls.add(e),kt.c.push(()=>{ls.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const mr={duration:0};function jl(e,t,n){const s={direction:"in"};let i=t(e,n,s),r=!1,o,a,c=0;function u(){o&&yn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=ve,tick:m=z,css:g}=i||mr;g&&(o=gn(e,0,1,d,f,p,g,c++)),m(0,1);const E=Ln()+f,M=E+d;a&&a.abort(),r=!0,Xt(()=>he(e,!0,"start")),a=Pn(I=>{if(r){if(I>=M)return m(1,0),he(e,!0,"end"),u(),r=!1;if(I>=E){const A=p((I-E)/d);m(A,1-A)}}return r})}let h=!1;return{start(){h||(h=!0,yn(e),we(i)?(i=i(s),pr().then(l)):l())},invalidate(){h=!1},end(){r&&(u(),r=!1)}}}function ql(e,t,n){const s={direction:"out"};let i=t(e,n,s),r=!0,o;const a=kt;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=ve,tick:f=z,css:d}=i||mr;d&&(o=gn(e,1,0,l,u,h,d));const p=Ln()+u,m=p+l;Xt(()=>he(e,!1,"start")),Pn(g=>{if(r){if(g>=m)return f(0,1),he(e,!1,"end"),--a.r||vt(a.c),!1;if(g>=p){const E=h((g-p)/l);f(1-E,E)}}return r})}return we(i)?pr().then(()=>{i=i(s),c()}):c(),{end(u){u&&i.tick&&i.tick(1,0),r&&(o&&yn(e,o),r=!1)}}}function vo(e,t,n,s){const i={direction:"both"};let r=t(e,n,i),o=s?0:1,a=null,c=null,u=null;function l(){u&&yn(e,u)}function h(d,p){const m=d.b-o;return p*=Math.abs(m),{a:o,b:d.b,d:m,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:m=300,easing:g=ve,tick:E=z,css:M}=r||mr,I={start:Ln()+p,b:d};d||(I.group=kt,kt.r+=1),a||c?c=I:(M&&(l(),u=gn(e,o,d,m,p,g,M)),d&&E(0,1),a=h(I,m),Xt(()=>he(e,d,"start")),Pn(A=>{if(c&&A>c.start&&(a=h(c,m),c=null,he(e,a.b,"start"),M&&(l(),u=gn(e,o,a.b,a.duration,0,g,r.css))),a){if(A>=a.end)E(o=a.b,1-o),he(e,a.b,"end"),c||(a.b?l():--a.group.r||vt(a.group.c)),a=null;else if(A>=a.start){const W=A-a.start;o=a.a+a.d*g(W/a.duration),E(o,1-o)}}return!!(a||c)}))}return{run(d){we(r)?pr().then(()=>{r=r(i),f(d)}):f(d)},end(){l(),a=c=null}}}function zl(e,t){ht(e,1,1,()=>{t.delete(e.key)})}function Hl(e,t){e.f(),zl(e,t)}function Kl(e,t,n,s,i,r,o,a,c,u,l,h){let f=e.length,d=r.length,p=f;const m={};for(;p--;)m[e[p].key]=p;const g=[],E=new Map,M=new Map,I=[];for(p=d;p--;){const Q=h(i,r,p),St=n(Q);let wt=o.get(St);wt?s&&I.push(()=>wt.p(Q,t)):(wt=u(St,Q),wt.c()),E.set(St,g[p]=wt),St in m&&M.set(St,Math.abs(p-m[St]))}const A=new Set,W=new Set;function re(Q){J(Q,1),Q.m(a,l),o.set(Q.key,Q),l=Q.first,d--}for(;f&&d;){const Q=g[d-1],St=e[f-1],wt=Q.key,ts=St.key;Q===St?(l=Q.first,f--,d--):E.has(ts)?!o.has(wt)||A.has(wt)?re(Q):W.has(ts)?f--:M.get(wt)>M.get(ts)?(W.add(wt),re(Q)):(A.add(ts),f--):(c(St,o),f--)}for(;f--;){const Q=e[f];E.has(Q.key)||c(Q,o)}for(;d;)re(g[d-1]);return vt(I),g}function Gl(e,t){const n={},s={},i={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Ql(e){return typeof e=="object"&&e!==null?e:{}}function Wl(e,t,n){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function Jt(e){e&&e.c()}function $t(e,t,n,s){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),s||Xt(()=>{const o=e.$$.on_mount.map(Pa).filter(we);e.$$.on_destroy?e.$$.on_destroy.push(...o):vt(o),e.$$.on_mount=[]}),r.forEach(Xt)}function Vt(e,t){const n=e.$$;n.fragment!==null&&(Bl(n.after_update),vt(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Yl(e,t){e.$$.dirty[0]===-1&&(ke.push(e),$l(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,s,i,r,o,a=[-1]){const c=vn;ln(e);const u=e.$$={fragment:null,ctx:[],props:r,update:z,not_equal:i,bound:fo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:fo(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&i(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&Yl(e,h)),f}):[],u.update(),l=!0,vt(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=bl(t.target);u.fragment&&u.fragment.l(h),h.forEach(P)}else u.fragment&&u.fragment.c();t.intro&&J(e.$$.fragment),$t(e,t.target,t.anchor,t.customElement),qa()}ln(c)}class _e{$destroy(){Vt(this,1),this.$destroy=z}$on(t,n){if(!we(n))return z;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!wl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
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
 */const za=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Xl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(za(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new Jl;const f=r<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Jl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zl=function(e){const t=za(e);return Ha.encodeByteArray(t,!0)},vs=function(e){return Zl(e).replace(/\./g,"")},th=function(e){try{return Ha.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function eh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nh=()=>eh().__FIREBASE_DEFAULTS__,sh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ih=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&th(e[1]);return t&&JSON.parse(t)},Ka=()=>{try{return nh()||sh()||ih()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rh=e=>{var t,n;return(n=(t=Ka())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},oh=e=>{const t=rh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Ga=()=>{var e;return(e=Ka())===null||e===void 0?void 0:e.config};/**
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
 */class ah{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function ch(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[vs(JSON.stringify(n)),vs(JSON.stringify(o)),a].join(".")}function uh(){try{return typeof indexedDB=="object"}catch{return!1}}function lh(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const hh="FirebaseError";class We extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=hh,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qa.prototype.create)}}class Qa{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?fh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new We(i,a,s)}}function fh(e,t){return e.replace(dh,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const dh=/\{\$([^}]+)}/g;function Li(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(wo(r)&&wo(o)){if(!Li(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function wo(e){return e!==null&&typeof e=="object"}/**
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
 */function Ut(e){return e&&e._delegate?e._delegate:e}class wn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const oe="[DEFAULT]";/**
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
 */class ph{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ah;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(gh(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mh(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mh(e){return e===oe?void 0:e}function gh(e){return e.instantiationMode==="EAGER"}/**
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
 */class yh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ph(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const vh={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},wh=V.INFO,Eh={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},_h=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Eh[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wa{constructor(t){this.name=t,this._logLevel=wh,this._logHandler=_h,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Th=(e,t)=>t.some(n=>e instanceof n);let Eo,_o;function Sh(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ih(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ya=new WeakMap,Pi=new WeakMap,Xa=new WeakMap,gi=new WeakMap,gr=new WeakMap;function Ch(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Kt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ya.set(n,e)}).catch(()=>{}),gr.set(t,e),t}function bh(e){if(Pi.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Pi.set(e,t)}let Fi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Pi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xa.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ah(e){Fi=e(Fi)}function Dh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(yi(this),t,...n);return Xa.set(s,t.sort?t.sort():[t]),Kt(s)}:Ih().includes(e)?function(...t){return e.apply(yi(this),t),Kt(Ya.get(this))}:function(...t){return Kt(e.apply(yi(this),t))}}function kh(e){return typeof e=="function"?Dh(e):(e instanceof IDBTransaction&&bh(e),Th(e,Sh())?new Proxy(e,Fi):e)}function Kt(e){if(e instanceof IDBRequest)return Ch(e);if(gi.has(e))return gi.get(e);const t=kh(e);return t!==e&&(gi.set(e,t),gr.set(t,e)),t}const yi=e=>gr.get(e);function Nh(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Kt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Kt(o.result),c.oldVersion,c.newVersion,Kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Rh=["get","getKey","getAll","getAllKeys","count"],Mh=["put","add","delete","clear"],vi=new Map;function To(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(vi.get(t))return vi.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Mh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Rh.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return vi.set(t,r),r}Ah(e=>({...e,get:(t,n,s)=>To(t,n)||e.get(t,n,s),has:(t,n)=>!!To(t,n)||e.has(t,n)}));/**
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
 */class xh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Oh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Oh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $i="@firebase/app",So="0.9.13";/**
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
 */const pe=new Wa("@firebase/app"),Lh="@firebase/app-compat",Ph="@firebase/analytics-compat",Fh="@firebase/analytics",$h="@firebase/app-check-compat",Vh="@firebase/app-check",Uh="@firebase/auth",Bh="@firebase/auth-compat",jh="@firebase/database",qh="@firebase/database-compat",zh="@firebase/functions",Hh="@firebase/functions-compat",Kh="@firebase/installations",Gh="@firebase/installations-compat",Qh="@firebase/messaging",Wh="@firebase/messaging-compat",Yh="@firebase/performance",Xh="@firebase/performance-compat",Jh="@firebase/remote-config",Zh="@firebase/remote-config-compat",tf="@firebase/storage",ef="@firebase/storage-compat",nf="@firebase/firestore",sf="@firebase/firestore-compat",rf="firebase",of="9.23.0";/**
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
 */const Vi="[DEFAULT]",af={[$i]:"fire-core",[Lh]:"fire-core-compat",[Fh]:"fire-analytics",[Ph]:"fire-analytics-compat",[Vh]:"fire-app-check",[$h]:"fire-app-check-compat",[Uh]:"fire-auth",[Bh]:"fire-auth-compat",[jh]:"fire-rtdb",[qh]:"fire-rtdb-compat",[zh]:"fire-fn",[Hh]:"fire-fn-compat",[Kh]:"fire-iid",[Gh]:"fire-iid-compat",[Qh]:"fire-fcm",[Wh]:"fire-fcm-compat",[Yh]:"fire-perf",[Xh]:"fire-perf-compat",[Jh]:"fire-rc",[Zh]:"fire-rc-compat",[tf]:"fire-gcs",[ef]:"fire-gcs-compat",[nf]:"fire-fst",[sf]:"fire-fst-compat","fire-js":"fire-js",[rf]:"fire-js-all"};/**
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
 */const ws=new Map,Ui=new Map;function cf(e,t){try{e.container.addComponent(t)}catch(n){pe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Es(e){const t=e.name;if(Ui.has(t))return pe.debug(`There were multiple attempts to register component ${t}.`),!1;Ui.set(t,e);for(const n of ws.values())cf(n,e);return!0}function uf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const lf={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new Qa("app","Firebase",lf);/**
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
 */class hf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const ff=of;function Ja(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Vi,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=Ga()),!n)throw Gt.create("no-options");const r=ws.get(i);if(r){if(Li(n,r.options)&&Li(s,r.config))return r;throw Gt.create("duplicate-app",{appName:i})}const o=new yh(i);for(const c of Ui.values())o.addComponent(c);const a=new hf(n,s,o);return ws.set(i,a),a}function df(e=Vi){const t=ws.get(e);if(!t&&e===Vi&&Ga())return Ja();if(!t)throw Gt.create("no-app",{appName:e});return t}function Le(e,t,n){var s;let i=(s=af[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pe.warn(a.join(" "));return}Es(new wn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const pf="firebase-heartbeat-database",mf=1,En="firebase-heartbeat-store";let wi=null;function Za(){return wi||(wi=Nh(pf,mf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(En)}}}).catch(e=>{throw Gt.create("idb-open",{originalErrorMessage:e.message})})),wi}async function gf(e){try{return await(await Za()).transaction(En).objectStore(En).get(tc(e))}catch(t){if(t instanceof We)pe.warn(t.message);else{const n=Gt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pe.warn(n.message)}}}async function Io(e,t){try{const s=(await Za()).transaction(En,"readwrite");await s.objectStore(En).put(t,tc(e)),await s.done}catch(n){if(n instanceof We)pe.warn(n.message);else{const s=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(s.message)}}}function tc(e){return`${e.name}!${e.options.appId}`}/**
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
 */const yf=1024,vf=30*24*60*60*1e3;class wf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _f(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=vf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Co(),{heartbeatsToSend:n,unsentEntries:s}=Ef(this._heartbeatsCache.heartbeats),i=vs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Co(){return new Date().toISOString().substring(0,10)}function Ef(e,t=yf){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),bo(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bo(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _f{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uh()?lh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bo(e){return vs(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Tf(e){Es(new wn("platform-logger",t=>new xh(t),"PRIVATE")),Es(new wn("heartbeat",t=>new wf(t),"PRIVATE")),Le($i,So,e),Le($i,So,"esm2017"),Le("fire-js","")}Tf("");var Sf="firebase",If="9.23.0";/**
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
 */Le(Sf,If,"app");var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,yr=yr||{},D=Cf||self;function Ps(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Vn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function bf(e){return Object.prototype.hasOwnProperty.call(e,Ei)&&e[Ei]||(e[Ei]=++Af)}var Ei="closure_uid_"+(1e9*Math.random()>>>0),Af=0;function Df(e,t,n){return e.call.apply(e.bind,arguments)}function kf(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ft(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=Df:ft=kf,ft.apply(null,arguments)}function es(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function st(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function se(){this.s=this.s,this.o=this.o}var Nf=0;se.prototype.s=!1;se.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nf!=0)&&bf(this)};se.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ec=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function vr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ao(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ps(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function dt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Rf=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{D.addEventListener("test",()=>{},t),D.removeEventListener("test",()=>{},t)}catch{}return e}();function _n(e){return/^[\s\xa0]*$/.test(e)}function Fs(){var e=D.navigator;return e&&(e=e.userAgent)?e:""}function At(e){return Fs().indexOf(e)!=-1}function wr(e){return wr[" "](e),e}wr[" "]=function(){};function Mf(e,t){var n=Id;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var xf=At("Opera"),Ue=At("Trident")||At("MSIE"),nc=At("Edge"),Bi=nc||Ue,sc=At("Gecko")&&!(Fs().toLowerCase().indexOf("webkit")!=-1&&!At("Edge"))&&!(At("Trident")||At("MSIE"))&&!At("Edge"),Of=Fs().toLowerCase().indexOf("webkit")!=-1&&!At("Edge");function ic(){var e=D.document;return e?e.documentMode:void 0}var ji;t:{var _i="",Ti=function(){var e=Fs();if(sc)return/rv:([^\);]+)(\)|;)/.exec(e);if(nc)return/Edge\/([\d\.]+)/.exec(e);if(Ue)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Of)return/WebKit\/(\S+)/.exec(e);if(xf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ti&&(_i=Ti?Ti[1]:""),Ue){var Si=ic();if(Si!=null&&Si>parseFloat(_i)){ji=String(Si);break t}}ji=_i}var qi;if(D.document&&Ue){var Do=ic();qi=Do||parseInt(ji,10)||void 0}else qi=void 0;var Lf=qi;function Tn(e,t){if(dt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(sc){t:{try{wr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Pf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Tn.$.h.call(this)}}st(Tn,dt);var Pf={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),Ff=0;function $f(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++Ff,this.fa=this.ia=!1}function $s(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Er(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Vf(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function rc(e){const t={};for(const n in e)t[n]=e[n];return t}const ko="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oc(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<ko.length;r++)n=ko[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Vs(e){this.src=e,this.g={},this.h=0}Vs.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Hi(e,t,s,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new $f(t,this.src,r,!!s,i),t.ia=n,e.push(t)),t};function zi(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=ec(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&($s(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Hi(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),Ii={};function ac(e,t,n,s,i){if(s&&s.once)return uc(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)ac(e,t[r],n,s,i);return null}return n=Ir(n),e&&e[Un]?e.O(t,n,Vn(s)?!!s.capture:!!s,i):cc(e,t,n,!1,s,i)}function cc(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Vn(i)?!!i.capture:!!i,a=Sr(e);if(a||(e[_r]=a=new Vs(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Uf(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Rf||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(hc(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Uf(){function e(n){return t.call(e.src,e.listener,n)}const t=Bf;return e}function uc(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)uc(e,t[r],n,s,i);return null}return n=Ir(n),e&&e[Un]?e.P(t,n,Vn(s)?!!s.capture:!!s,i):cc(e,t,n,!0,s,i)}function lc(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)lc(e,t[r],n,s,i);else s=Vn(s)?!!s.capture:!!s,n=Ir(n),e&&e[Un]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Hi(r,n,s,i),-1<n&&($s(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Sr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hi(t,n,s,i)),(n=-1<e?t[e]:null)&&Tr(n))}function Tr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Un])zi(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(hc(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Sr(t))?(zi(n,e),n.h==0&&(n.src=null,t[_r]=null)):$s(e)}}}function hc(e){return e in Ii?Ii[e]:Ii[e]="on"+e}function Bf(e,t){if(e.fa)e=!0;else{t=new Tn(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Tr(e),e=n.call(s,t)}return e}function Sr(e){return e=e[_r],e instanceof Vs?e:null}var Ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ir(e){return typeof e=="function"?e:(e[Ci]||(e[Ci]=function(t){return e.handleEvent(t)}),e[Ci])}function nt(){se.call(this),this.i=new Vs(this),this.S=this,this.J=null}st(nt,se);nt.prototype[Un]=!0;nt.prototype.removeEventListener=function(e,t,n,s){lc(this,e,t,n,s)};function ot(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new dt(t,e);else if(t instanceof dt)t.target=t.target||e;else{var i=t;t=new dt(s,e),oc(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=ns(o,s,!0,t)&&i}if(o=t.g=e,i=ns(o,s,!0,t)&&i,i=ns(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=ns(o,s,!1,t)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)$s(n[s]);delete e.g[t],e.h--}}this.J=null};nt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};nt.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ns(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&zi(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Cr=D.JSON.stringify;class jf{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function qf(){var e=br;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class zf{constructor(){this.h=this.g=null}add(t,n){const s=fc.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var fc=new jf(()=>new Hf,e=>e.reset());class Hf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kf(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Gf(e){D.setTimeout(()=>{throw e},0)}let Sn,In=!1,br=new zf,dc=()=>{const e=D.Promise.resolve(void 0);Sn=()=>{e.then(Qf)}};var Qf=()=>{for(var e;e=qf();){try{e.h.call(e.g)}catch(n){Gf(n)}var t=fc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}In=!1};function Us(e,t){nt.call(this),this.h=e||1,this.g=t||D,this.j=ft(this.qb,this),this.l=Date.now()}st(Us,nt);w=Us.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(Ar(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ar(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}w.N=function(){Us.$.N.call(this),Ar(this),delete this.g};function Dr(e,t,n){if(typeof e=="function")n&&(e=ft(e,n));else if(e&&typeof e.handleEvent=="function")e=ft(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(e,t||0)}function pc(e){e.g=Dr(()=>{e.g=null,e.i&&(e.i=!1,pc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Wf extends se{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:pc(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(e){se.call(this),this.h=e,this.g={}}st(Cn,se);var No=[];function mc(e,t,n,s){Array.isArray(n)||(n&&(No[0]=n.toString()),n=No);for(var i=0;i<n.length;i++){var r=ac(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function gc(e){Er(e.g,function(t,n){this.g.hasOwnProperty(n)&&Tr(t)},e),e.g={}}Cn.prototype.N=function(){Cn.$.N.call(this),gc(this)};Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bs(){this.g=!0}Bs.prototype.Ea=function(){this.g=!1};function Yf(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Xf(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Me(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Zf(e,n)+(s?" "+s:"")})}function Jf(e,t){e.info(function(){return"TIMEOUT: "+t})}Bs.prototype.info=function(){};function Zf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cr(n)}catch{return t}}var Te={},Ro=null;function js(){return Ro=Ro||new nt}Te.Ta="serverreachability";function yc(e){dt.call(this,Te.Ta,e)}st(yc,dt);function bn(e){const t=js();ot(t,new yc(t))}Te.STAT_EVENT="statevent";function vc(e,t){dt.call(this,Te.STAT_EVENT,e),this.stat=t}st(vc,dt);function gt(e){const t=js();ot(t,new vc(t,e))}Te.Ua="timingevent";function wc(e,t){dt.call(this,Te.Ua,e),this.size=t}st(wc,dt);function Bn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){e()},t)}var qs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ec={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function kr(){}kr.prototype.h=null;function Mo(e){return e.h||(e.h=e.i())}function _c(){}var jn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nr(){dt.call(this,"d")}st(Nr,dt);function Rr(){dt.call(this,"c")}st(Rr,dt);var Ki;function zs(){}st(zs,kr);zs.prototype.g=function(){return new XMLHttpRequest};zs.prototype.i=function(){return{}};Ki=new zs;function qn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Cn(this),this.P=td,e=Bi?125:void 0,this.V=new Us(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Tc}function Tc(){this.i=null,this.g="",this.h=!1}var td=45e3,Gi={},_s={};w=qn.prototype;w.setTimeout=function(e){this.P=e};function Qi(e,t,n){e.L=1,e.v=Ks(Bt(t)),e.s=n,e.S=!0,Sc(e,null)}function Sc(e,t){e.G=Date.now(),zn(e),e.A=Bt(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Rc(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Tc,e.g=Jc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Wf(ft(e.Pa,e,e.g),e.O)),mc(e.U,e.g,"readystatechange",e.nb),t=e.I?rc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),bn(),Yf(e.j,e.u,e.A,e.m,e.W,e.s)}w.nb=function(e){e=e.target;const t=this.M;t&&Nt(e)==3?t.l():this.Pa(e)};w.Pa=function(e){try{if(e==this.g)t:{const l=Nt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Bi||this.g&&(this.h.h||this.g.ja()||Po(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?bn(3):bn(2)),Hs(this);var n=this.g.da();this.ca=n;e:if(Ic(this)){var s=Po(this.g);e="";var i=s.length,r=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ae(this),hn(this);var o="";break e}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Xf(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_n(a)){var u=a;break e}}u=null}if(n=u)Me(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wi(this,n);else{this.i=!1,this.o=3,gt(12),ae(this),hn(this);break t}}this.S?(Cc(this,l,o),Bi&&this.i&&l==3&&(mc(this.U,this.V,"tick",this.mb),this.V.start())):(Me(this.j,this.m,o,null),Wi(this,o)),l==4&&ae(this),this.i&&!this.J&&(l==4?Qc(this.l,this):(this.i=!1,zn(this)))}else _d(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),ae(this),hn(this)}}}catch{}finally{}};function Ic(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Cc(e,t,n){let s=!0,i;for(;!e.J&&e.C<n.length;)if(i=ed(e,n),i==_s){t==4&&(e.o=4,gt(14),s=!1),Me(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Gi){e.o=4,gt(15),Me(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Me(e.j,e.m,i,null),Wi(e,i);Ic(e)&&i!=_s&&i!=Gi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,gt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fr(t),t.M=!0,gt(11))):(Me(e.j,e.m,n,"[Invalid Chunked Response]"),ae(e),hn(e))}w.mb=function(){if(this.g){var e=Nt(this.g),t=this.g.ja();this.C<t.length&&(Hs(this),Cc(this,e,t),this.i&&e!=4&&zn(this))}};function ed(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?_s:(n=Number(t.substring(n,s)),isNaN(n)?Gi:(s+=1,s+n>t.length?_s:(t=t.slice(s,s+n),e.C=s+n,t)))}w.cancel=function(){this.J=!0,ae(this)};function zn(e){e.Y=Date.now()+e.P,bc(e,e.P)}function bc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Bn(ft(e.lb,e),t)}function Hs(e){e.B&&(D.clearTimeout(e.B),e.B=null)}w.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Jf(this.j,this.A),this.L!=2&&(bn(),gt(17)),ae(this),this.o=2,hn(this)):bc(this,this.Y-e)};function hn(e){e.l.H==0||e.J||Qc(e.l,e)}function ae(e){Hs(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ar(e.V),gc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Wi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Yi(n.i,e))){if(!e.K&&Yi(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Is(n),Ws(n);else break t;Pr(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bn(ft(n.ib,n),6e3));if(1>=Oc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ce(n,11)}else if((e.K||n.g==e)&&Is(n),!_n(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Mr(r,r.h),r.h=null))}if(s.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,B(s.I,s.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=Xc(s,s.J?s.pa:null,s.Y),o.K){Lc(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Hs(a),zn(a)),s.g=o}else Kc(s);0<n.j.length&&Ys(n)}else u[0]!="stop"&&u[0]!="close"||ce(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ce(n,7):Lr(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}bn(4)}catch{}}function nd(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ps(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function sd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ps(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ac(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ps(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=sd(e),s=nd(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Dc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function id(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fe(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof fe){this.h=e.h,Ts(this,e.j),this.s=e.s,this.g=e.g,Ss(this,e.m),this.l=e.l;var t=e.i,n=new An;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xo(this,n),this.o=e.o}else e&&(t=String(e).match(Dc))?(this.h=!1,Ts(this,t[1]||"",!0),this.s=rn(t[2]||""),this.g=rn(t[3]||"",!0),Ss(this,t[4]),this.l=rn(t[5]||"",!0),xo(this,t[6]||"",!0),this.o=rn(t[7]||"")):(this.h=!1,this.i=new An(null,this.h))}fe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(on(t,Oo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(on(t,Oo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(on(n,n.charAt(0)=="/"?ad:od,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",on(n,ud)),e.join("")};function Bt(e){return new fe(e)}function Ts(e,t,n){e.j=n?rn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ss(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xo(e,t,n){t instanceof An?(e.i=t,ld(e.i,e.h)):(n||(t=on(t,cd)),e.i=new An(t,e.h))}function B(e,t,n){e.i.set(t,n)}function Ks(e){return B(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function on(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,rd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oo=/[#\/\?@]/g,od=/[#\?:]/g,ad=/[#\?]/g,cd=/[#\?@]/g,ud=/#/g;function An(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ie(e){e.g||(e.g=new Map,e.h=0,e.i&&id(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=An.prototype;w.add=function(e,t){ie(this),this.i=null,e=Ye(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function kc(e,t){ie(e),t=Ye(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Nc(e,t){return ie(e),t=Ye(e,t),e.g.has(t)}w.forEach=function(e,t){ie(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};w.ta=function(){ie(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};w.Z=function(e){ie(this);let t=[];if(typeof e=="string")Nc(this,e)&&(t=t.concat(this.g.get(Ye(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};w.set=function(e,t){return ie(this),this.i=null,e=Ye(this,e),Nc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Rc(e,t,n){kc(e,t),0<n.length&&(e.i=null,e.g.set(Ye(e,t),vr(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Ye(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ld(e,t){t&&!e.j&&(ie(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(kc(this,s),Rc(this,i,n))},e)),e.j=t}var hd=class{constructor(e,t){this.g=e,this.map=t}};function Mc(e){this.l=e||fd,D.PerformanceNavigationTiming?(e=D.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fd=10;function xc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Oc(e){return e.h?1:e.g?e.g.size:0}function Yi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Mr(e,t){e.g?e.g.add(t):e.h=t}function Lc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Mc.prototype.cancel=function(){if(this.i=Pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Pc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return vr(e.i)}var dd=class{stringify(e){return D.JSON.stringify(e,void 0)}parse(e){return D.JSON.parse(e,void 0)}};function pd(){this.g=new dd}function md(e,t,n){const s=n||"";try{Ac(e,function(i,r){let o=i;Vn(i)&&(o=Cr(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function gd(e,t){const n=new Bs;if(D.Image){const s=new Image;s.onload=es(ss,n,s,"TestLoadImage: loaded",!0,t),s.onerror=es(ss,n,s,"TestLoadImage: error",!1,t),s.onabort=es(ss,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=es(ss,n,s,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ss(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Hn(e){this.l=e.fc||null,this.j=e.ob||!1}st(Hn,kr);Hn.prototype.g=function(){return new Gs(this.l,this.j)};Hn.prototype.i=function(e){return function(){return e}}({});function Gs(e,t){nt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=xr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(Gs,nt);var xr=0;w=Gs.prototype;w.open=function(e,t){if(this.readyState!=xr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Dn(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||D).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=xr};w.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Fc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}w.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Kn(this):Dn(this),this.readyState==3&&Fc(this)}};w.Za=function(e){this.g&&(this.response=this.responseText=e,Kn(this))};w.Ya=function(e){this.g&&(this.response=e,Kn(this))};w.ka=function(){this.g&&Kn(this)};function Kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Dn(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Dn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yd=D.JSON.parse;function G(e){nt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=$c,this.L=this.M=!1}st(G,nt);var $c="",vd=/^https?$/i,wd=["POST","PUT"];w=G.prototype;w.Oa=function(e){this.M=e};w.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ki.g(),this.C=this.u?Mo(this.u):Mo(Ki),this.g.onreadystatechange=ft(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Lo(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=D.FormData&&e instanceof D.FormData,!(0<=ec(wd,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bc(this),0<this.B&&((this.L=Ed(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.ua,this)):this.A=Dr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Lo(this,r)}};function Ed(e){return Ue&&typeof e.timeout=="number"&&e.ontimeout!==void 0}w.ua=function(){typeof yr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function Lo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vc(e),Qs(e)}function Vc(e){e.F||(e.F=!0,ot(e,"complete"),ot(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ot(this,"complete"),ot(this,"abort"),Qs(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qs(this,!0)),G.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?Uc(this):this.kb())};w.kb=function(){Uc(this)};function Uc(e){if(e.h&&typeof yr<"u"&&(!e.C[1]||Nt(e)!=4||e.da()!=2)){if(e.v&&Nt(e)==4)Dr(e.La,0,e);else if(ot(e,"readystatechange"),Nt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var i=String(e.I).match(Dc)[1]||null;!i&&D.self&&D.self.location&&(i=D.self.location.protocol.slice(0,-1)),s=!vd.test(i?i.toLowerCase():"")}n=s}if(n)ot(e,"complete"),ot(e,"success");else{e.m=6;try{var r=2<Nt(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",Vc(e)}}finally{Qs(e)}}}}function Qs(e,t){if(e.g){Bc(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ot(e,"ready");try{n.onreadystatechange=s}catch{}}}function Bc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(D.clearTimeout(e.A),e.A=null)}w.isActive=function(){return!!this.g};function Nt(e){return e.g?e.g.readyState:0}w.da=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),yd(t)}};function Po(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case $c:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function _d(e){const t={};e=(e.g&&2<=Nt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(_n(e[s]))continue;var n=Kf(e[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[i]||[];t[i]=r,r.push(n)}Vf(t,function(s){return s.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jc(e){let t="";return Er(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Or(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=jc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):B(e,t,n))}function nn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function qc(e){this.Ga=0,this.j=[],this.l=new Bs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nn("baseRetryDelayMs",5e3,e),this.hb=nn("retryDelaySeedMs",1e4,e),this.eb=nn("forwardChannelMaxRetries",2,e),this.xa=nn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Mc(e&&e.concurrentRequestLimit),this.Ja=new pd,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=qc.prototype;w.ra=8;w.H=1;function Lr(e){if(zc(e),e.H==3){var t=e.W++,n=Bt(e.I);if(B(n,"SID",e.K),B(n,"RID",t),B(n,"TYPE","terminate"),Gn(e,n),t=new qn(e,e.l,t),t.L=2,t.v=Ks(Bt(n)),n=!1,D.navigator&&D.navigator.sendBeacon)try{n=D.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&D.Image&&(new Image().src=t.v,n=!0),n||(t.g=Jc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),zn(t)}Yc(e)}function Ws(e){e.g&&(Fr(e),e.g.cancel(),e.g=null)}function zc(e){Ws(e),e.u&&(D.clearTimeout(e.u),e.u=null),Is(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&D.clearTimeout(e.m),e.m=null)}function Ys(e){if(!xc(e.i)&&!e.m){e.m=!0;var t=e.Na;Sn||dc(),In||(Sn(),In=!0),br.add(t,e),e.C=0}}function Td(e,t){return Oc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Bn(ft(e.Na,e,t),Wc(e,e.C)),e.C++,!0)}w.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new qn(this,this.l,e);let r=this.s;if(this.U&&(r?(r=rc(r),oc(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Hc(this,i,t),n=Bt(this.I),B(n,"RID",e),B(n,"CVER",22),this.F&&B(n,"X-HTTP-Session-Id",this.F),Gn(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(jc(r)))+"&"+t:this.o&&Or(n,this.o,r)),Mr(this.i,i),this.bb&&B(n,"TYPE","init"),this.P?(B(n,"$req",t),B(n,"SID","null"),i.aa=!0,Qi(i,n,null)):Qi(i,n,t),this.H=2}}else this.H==3&&(e?Fo(this,e):this.j.length==0||xc(this.i)||Fo(this))};function Fo(e,t){var n;t?n=t.m:n=e.W++;const s=Bt(e.I);B(s,"SID",e.K),B(s,"RID",n),B(s,"AID",e.V),Gn(e,s),e.o&&e.s&&Or(s,e.o,e.s),n=new qn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Hc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Mr(e.i,n),Qi(n,s,t)}function Gn(e,t){e.na&&Er(e.na,function(n,s){B(t,s,n)}),e.h&&Ac({},function(n,s){B(t,s,n)})}function Hc(e,t,n){n=Math.min(e.j.length,n);var s=e.h?ft(e.h.Va,e.h,e):null;t:{var i=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=r,0>u)r=Math.max(0,i[c].g-100),a=!1;else try{md(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function Kc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Sn||dc(),In||(Sn(),In=!0),br.add(t,e),e.A=0}}function Pr(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Bn(ft(e.Ma,e),Wc(e,e.A)),e.A++,!0)}w.Ma=function(){if(this.u=null,Gc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Bn(ft(this.jb,this),e)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Ws(this),Gc(this))};function Fr(e){e.B!=null&&(D.clearTimeout(e.B),e.B=null)}function Gc(e){e.g=new qn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Bt(e.wa);B(t,"RID","rpc"),B(t,"SID",e.K),B(t,"AID",e.V),B(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&B(t,"TO",e.qa),B(t,"TYPE","xmlhttp"),Gn(e,t),e.o&&e.s&&Or(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ks(Bt(t)),n.s=null,n.S=!0,Sc(n,e)}w.ib=function(){this.v!=null&&(this.v=null,Ws(this),Pr(this),gt(19))};function Is(e){e.v!=null&&(D.clearTimeout(e.v),e.v=null)}function Qc(e,t){var n=null;if(e.g==t){Is(e),Fr(e),e.g=null;var s=2}else if(Yi(e.i,t))n=t.F,Lc(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;s=js(),ot(s,new wc(s,n)),Ys(e)}else Kc(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(s==1&&Td(e,t)||s==2&&Pr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ce(e,5);break;case 4:ce(e,10);break;case 3:ce(e,6);break;default:ce(e,2)}}}function Wc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ce(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=ft(e.pb,e);n||(n=new fe("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Ts(n,"https"),Ks(n)),gd(n.toString(),s)}else gt(2);e.H=0,e.h&&e.h.za(t),Yc(e),zc(e)}w.pb=function(e){e?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function Yc(e){if(e.H=0,e.ma=[],e.h){const t=Pc(e.i);(t.length!=0||e.j.length!=0)&&(Ao(e.ma,t),Ao(e.ma,e.j),e.i.i.length=0,vr(e.j),e.j.length=0),e.h.ya()}}function Xc(e,t,n){var s=n instanceof fe?Bt(n):new fe(n);if(s.g!="")t&&(s.g=t+"."+s.g),Ss(s,s.m);else{var i=D.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new fe(null);s&&Ts(r,s),t&&(r.g=t),i&&Ss(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&B(s,n,t),B(s,"VER",e.ra),Gn(e,s),s}function Jc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new G(new Hn({ob:!0})):new G(e.va),t.Oa(e.J),t}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zc(){}w=Zc.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function Cs(){if(Ue&&!(10<=Number(Lf)))throw Error("Environmental error: no available transport.")}Cs.prototype.g=function(e,t){return new Tt(e,t)};function Tt(e,t){nt.call(this),this.g=new qc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!_n(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_n(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xe(this)}st(Tt,nt);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Xc(e,null,e.Y),Ys(e)};Tt.prototype.close=function(){Lr(this.g)};Tt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Cr(e),e=n);t.j.push(new hd(t.fb++,e)),t.H==3&&Ys(t)};Tt.prototype.N=function(){this.g.h=null,delete this.j,Lr(this.g),delete this.g,Tt.$.N.call(this)};function tu(e){Nr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}st(tu,Nr);function eu(){Rr.call(this),this.status=1}st(eu,Rr);function Xe(e){this.g=e}st(Xe,Zc);Xe.prototype.Ba=function(){ot(this.g,"a")};Xe.prototype.Aa=function(e){ot(this.g,new tu(e))};Xe.prototype.za=function(e){ot(this.g,new eu)};Xe.prototype.ya=function(){ot(this.g,"b")};function Sd(){this.blockSize=-1}function bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}st(bt,Sd);bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bi(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],o=t+(r^n&(i^r))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(n^i))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^r)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~r))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}bt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=n;)bi(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){bi(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){bi(this,s),i=0;break}}this.h=i,this.i+=t};bt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function U(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=e[i]|0;s&&r==t||(n[i]=r,s=!1)}this.g=n}var Id={};function $r(e){return-128<=e&&128>e?Mf(e,function(t){return new U([t|0],0>t?-1:0)}):new U([e|0],0>e?-1:0)}function Rt(e){if(isNaN(e)||!isFinite(e))return Pe;if(0>e)return rt(Rt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Xi;return new U(t,0)}function nu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return rt(nu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rt(Math.pow(t,8)),s=Pe,i=0;i<e.length;i+=8){var r=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+r),t);8>r?(r=Rt(Math.pow(t,r)),s=s.R(r).add(Rt(o))):(s=s.R(n),s=s.add(Rt(o)))}return s}var Xi=4294967296,Pe=$r(0),Ji=$r(1),$o=$r(16777216);w=U.prototype;w.ea=function(){if(It(this))return-rt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Xi+s)*t,t*=Xi}return e};w.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Pt(this))return"0";if(It(this))return"-"+rt(this).toString(e);for(var t=Rt(Math.pow(e,6)),n=this,s="";;){var i=As(n,t).g;n=bs(n,i.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Pt(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};w.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Pt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function It(e){return e.h==-1}w.X=function(e){return e=bs(this,e),It(e)?-1:Pt(e)?0:1};function rt(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new U(n,~e.h).add(Ji)}w.abs=function(){return It(this)?rt(this):this};w.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(e.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new U(n,n[n.length-1]&-2147483648?-1:0)};function bs(e,t){return e.add(rt(t))}w.R=function(e){if(Pt(this)||Pt(e))return Pe;if(It(this))return It(e)?rt(this).R(rt(e)):rt(rt(this).R(e));if(It(e))return rt(this.R(rt(e)));if(0>this.X($o)&&0>e.X($o))return Rt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*s+2*i]+=o*c,is(n,2*s+2*i),n[2*s+2*i+1]+=r*c,is(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,is(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,is(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new U(n,0)};function is(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function sn(e,t){this.g=e,this.h=t}function As(e,t){if(Pt(t))throw Error("division by zero");if(Pt(e))return new sn(Pe,Pe);if(It(e))return t=As(rt(e),t),new sn(rt(t.g),rt(t.h));if(It(t))return t=As(e,rt(t)),new sn(rt(t.g),t.h);if(30<e.g.length){if(It(e)||It(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ji,s=t;0>=s.X(e);)n=Vo(n),s=Vo(s);var i=Ae(n,1),r=Ae(s,1);for(s=Ae(s,2),n=Ae(n,2);!Pt(s);){var o=r.add(s);0>=o.X(e)&&(i=i.add(n),r=o),s=Ae(s,1),n=Ae(n,1)}return t=bs(e,i.R(t)),new sn(i,t)}for(i=Pe;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Rt(n),o=r.R(t);It(o)||0<o.X(e);)n-=s,r=Rt(n),o=r.R(t);Pt(r)&&(r=Ji),i=i.add(r),e=bs(e,o)}return new sn(i,e)}w.gb=function(e){return As(this,e).h};w.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new U(n,this.h&e.h)};w.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new U(n,this.h|e.h)};w.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new U(n,this.h^e.h)};function Vo(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new U(n,e.h)}function Ae(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new U(i,e.h)}Cs.prototype.createWebChannel=Cs.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;qs.NO_ERROR=0;qs.TIMEOUT=8;qs.HTTP_ERROR=6;Ec.COMPLETE="complete";_c.EventType=jn;jn.OPEN="a";jn.CLOSE="b";jn.ERROR="c";jn.MESSAGE="d";nt.prototype.listen=nt.prototype.O;G.prototype.listenOnce=G.prototype.P;G.prototype.getLastError=G.prototype.Sa;G.prototype.getLastErrorCode=G.prototype.Ia;G.prototype.getStatus=G.prototype.da;G.prototype.getResponseJson=G.prototype.Wa;G.prototype.getResponseText=G.prototype.ja;G.prototype.send=G.prototype.ha;G.prototype.setWithCredentials=G.prototype.Oa;bt.prototype.digest=bt.prototype.l;bt.prototype.reset=bt.prototype.reset;bt.prototype.update=bt.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Rt;U.fromString=nu;var Cd=function(){return new Cs},bd=function(){return js()},Ai=qs,Ad=Ec,Dd=Te,Uo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},kd=Hn,rs=_c,Nd=G,Rd=bt,Fe=U;const Bo="@firebase/firestore";/**
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
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let Je="9.23.0";/**
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
 */const me=new Wa("@firebase/firestore");function jo(){return me.logLevel}function _(e,...t){if(me.logLevel<=V.DEBUG){const n=t.map(Vr);me.debug(`Firestore (${Je}): ${e}`,...n)}}function jt(e,...t){if(me.logLevel<=V.ERROR){const n=t.map(Vr);me.error(`Firestore (${Je}): ${e}`,...n)}}function Be(e,...t){if(me.logLevel<=V.WARN){const n=t.map(Vr);me.warn(`Firestore (${Je}): ${e}`,...n)}}function Vr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function b(e="Unexpected state"){const t=`FIRESTORE (${Je}) INTERNAL ASSERTION FAILED: `+e;throw jt(t),new Error(t)}function j(e,t){e||b()}function N(e,t){return e}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends We{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class su{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Md{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class xd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Od{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Qt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Qt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(j(typeof s.accessToken=="string"),new su(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return j(t===null||typeof t=="string"),new ct(t)}}class Ld{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Pd{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ld(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $d{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(j(typeof n.token=="string"),this.T=n.token,new Fd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Vd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class iu{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Vd(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function F(e,t){return e<t?-1:e>t?1:0}function je(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class tt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new T(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new T(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new tt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new tt(0,0))}static max(){return new k(new tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kn{constructor(t,n,s){n===void 0?n=0:n>t.length&&b(),s===void 0?s=t.length-n:s>t.length-n&&b(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return kn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof kn?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class q extends kn{construct(t,n,s){return new q(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new T(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new q(n)}static emptyPath(){return new q([])}}const Ud=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends kn{construct(t,n,s){return new lt(t,n,s)}static isValidIdentifier(t){return Ud.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new T(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new T(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new T(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new T(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class S{constructor(t){this.path=t}static fromPath(t){return new S(q.fromString(t))}static fromName(t){return new S(q.fromString(t).popFirst(5))}static empty(){return new S(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return q.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new S(new q(t.slice()))}}function Bd(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=k.fromTimestamp(s===1e9?new tt(n+1,0):new tt(n,s));return new Zt(i,S.empty(),t)}function jd(e){return new Zt(e.readTime,e.key,-1)}class Zt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Zt(k.min(),S.empty(),-1)}static max(){return new Zt(k.max(),S.empty(),-1)}}function qd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=S.comparator(e.documentKey,t.documentKey),n!==0?n:F(e.largestBatchId,t.largestBatchId))}/**
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
 */const zd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Qn(e){if(e.code!==y.FAILED_PRECONDITION||e.message!==zd)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new v((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):v.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):v.reject(n)}static resolve(t){return new v((n,s)=>{n(t)})}static reject(t){return new v((n,s)=>{s(t)})}static waitFor(t){return new v((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=v.resolve(!1);for(const s of t)n=n.next(i=>i?v.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new v((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(t,n){return new v((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Wn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Ur{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Ur.ct=-1;function Xs(e){return e==null}function Ds(e){return e===0&&1/e==-1/0}function Kd(e){return typeof e=="number"&&Number.isInteger(e)&&!Ds(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function qo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Se(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ru(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class K{constructor(t,n){this.comparator=t,this.root=n||it.EMPTY}insert(t,n){return new K(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new K(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new os(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new os(this.root,t,this.comparator,!1)}getReverseIterator(){return new os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new os(this.root,t,this.comparator,!0)}}class os{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:it.RED,this.left=i!=null?i:it.EMPTY,this.right=r!=null?r:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new it(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return it.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,s,i){return this}insert(e,t,n){return new it(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(t){this.comparator=t,this.data=new K(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zo(this.data.getIterator())}getIteratorFrom(t){return new zo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new pt(this.comparator);return n.data=t,n}}class zo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Ct([])}unionWith(t){let n=new pt(lt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ou extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ou("Invalid base64 string: "+i):i}}(t);return new mt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Gd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(e){if(j(!!e),typeof e=="string"){let t=0;const n=Gd.exec(e);if(j(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:X(e.seconds),nanos:X(e.nanos)}}function X(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ge(e){return typeof e=="string"?mt.fromBase64String(e):mt.fromUint8Array(e)}/**
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
 */function Br(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jr(e){const t=e.mapValue.fields.__previous_value__;return Br(t)?jr(t):t}function Nn(e){const t=te(e.mapValue.fields.__local_write_time__.timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class Qd{constructor(t,n,s,i,r,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Rn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Rn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const as={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ye(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Br(e)?4:Wd(e)?9007199254740991:10:b()}function Ot(e,t){if(e===t)return!0;const n=ye(e);if(n!==ye(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Nn(e).isEqual(Nn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=te(s.timestampValue),o=te(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ge(s.bytesValue).isEqual(ge(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return X(s.geoPointValue.latitude)===X(i.geoPointValue.latitude)&&X(s.geoPointValue.longitude)===X(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return X(s.integerValue)===X(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=X(s.doubleValue),o=X(i.doubleValue);return r===o?Ds(r)===Ds(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return je(e.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(qo(r)!==qo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ot(r[a],o[a])))return!1;return!0}(e,t);default:return b()}}function Mn(e,t){return(e.values||[]).find(n=>Ot(n,t))!==void 0}function qe(e,t){if(e===t)return 0;const n=ye(e),s=ye(t);if(n!==s)return F(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=X(i.integerValue||i.doubleValue),a=X(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ho(e.timestampValue,t.timestampValue);case 4:return Ho(Nn(e),Nn(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(i,r){const o=ge(i),a=ge(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=F(o[c],a[c]);if(u!==0)return u}return F(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=F(X(i.latitude),X(r.latitude));return o!==0?o:F(X(i.longitude),X(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=qe(o[c],a[c]);if(u)return u}return F(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===as.mapValue&&r===as.mapValue)return 0;if(i===as.mapValue)return 1;if(r===as.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=F(a[l],u[l]);if(h!==0)return h;const f=qe(o[a[l]],c[u[l]]);if(f!==0)return f}return F(a.length,u.length)}(e.mapValue,t.mapValue);default:throw b()}}function Ho(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return F(e,t);const n=te(e),s=te(t),i=F(n.seconds,s.seconds);return i!==0?i:F(n.nanos,s.nanos)}function ze(e){return Zi(e)}function Zi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=te(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ge(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,S.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Zi(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Zi(s.fields[a])}`;return r+"}"}(e.mapValue):b();var t,n}function tr(e){return!!e&&"integerValue"in e}function qr(e){return!!e&&"arrayValue"in e}function Ko(e){return!!e&&"nullValue"in e}function Go(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function hs(e){return!!e&&"mapValue"in e}function fn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Se(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=fn(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=fn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Wd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!hs(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=fn(n)}setAll(t){let n=lt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=fn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());hs(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];hs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Se(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new Et(fn(this.value))}}function au(e){const t=[];return Se(e.fields,(n,s)=>{const i=new lt([n]);if(hs(s)){const r=au(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Ct(t)}/**
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
 */class ut{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ut(t,0,k.min(),k.min(),k.min(),Et.empty(),0)}static newFoundDocument(t,n,s,i){return new ut(t,1,n,k.min(),s,i,0)}static newNoDocument(t,n){return new ut(t,2,n,k.min(),k.min(),Et.empty(),0)}static newUnknownDocument(t,n){return new ut(t,3,n,k.min(),k.min(),Et.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ks{constructor(t,n){this.position=t,this.inclusive=n}}function Qo(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=S.comparator(S.fromName(o.referenceValue),n.key):s=qe(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ot(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class dn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Yd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class cu{}class Z extends cu{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Jd(t,n,s):n==="array-contains"?new ep(t,s):n==="in"?new np(t,s):n==="not-in"?new sp(t,s):n==="array-contains-any"?new ip(t,s):new Z(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Zd(t,s):new tp(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qe(n,this.value)):n!==null&&ye(this.value)===ye(n)&&this.matchesComparison(qe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lt extends cu{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new Lt(t,n)}matches(t){return uu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function uu(e){return e.op==="and"}function lu(e){return Xd(e)&&uu(e)}function Xd(e){for(const t of e.filters)if(t instanceof Lt)return!1;return!0}function er(e){if(e instanceof Z)return e.field.canonicalString()+e.op.toString()+ze(e.value);if(lu(e))return e.filters.map(t=>er(t)).join(",");{const t=e.filters.map(n=>er(n)).join(",");return`${e.op}(${t})`}}function hu(e,t){return e instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.field.isEqual(s.field)&&Ot(n.value,s.value)}(e,t):e instanceof Lt?function(n,s){return s instanceof Lt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&hu(r,s.filters[o]),!0):!1}(e,t):void b()}function fu(e){return e instanceof Z?function(t){return`${t.field.canonicalString()} ${t.op} ${ze(t.value)}`}(e):e instanceof Lt?function(t){return t.op.toString()+" {"+t.getFilters().map(fu).join(" ,")+"}"}(e):"Filter"}class Jd extends Z{constructor(t,n,s){super(t,n,s),this.key=S.fromName(s.referenceValue)}matches(t){const n=S.comparator(t.key,this.key);return this.matchesComparison(n)}}class Zd extends Z{constructor(t,n){super(t,"in",n),this.keys=du("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class tp extends Z{constructor(t,n){super(t,"not-in",n),this.keys=du("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function du(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>S.fromName(s.referenceValue))}class ep extends Z{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return qr(n)&&Mn(n.arrayValue,this.value)}}class np extends Z{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Mn(this.value.arrayValue,n)}}class sp extends Z{constructor(t,n){super(t,"not-in",n)}matches(t){if(Mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Mn(this.value.arrayValue,n)}}class ip extends Z{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!qr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Mn(this.value.arrayValue,s))}}/**
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
 */class rp{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Yo(e,t=null,n=[],s=[],i=null,r=null,o=null){return new rp(e,t,n,s,i,r,o)}function zr(e){const t=N(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>er(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ze(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ze(s)).join(",")),t.dt=n}return t.dt}function Hr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Yd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!hu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wo(e.startAt,t.startAt)&&Wo(e.endAt,t.endAt)}function nr(e){return S.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Js{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function op(e,t,n,s,i,r,o,a){return new Js(e,t,n,s,i,r,o,a)}function Zs(e){return new Js(e)}function Xo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ap(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function cp(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function up(e){return e.collectionGroup!==null}function $e(e){const t=N(e);if(t.wt===null){t.wt=[];const n=cp(t),s=ap(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new dn(n)),t.wt.push(new dn(lt.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new dn(lt.keyField(),r))}}}return t.wt}function qt(e){const t=N(e);if(!t._t)if(t.limitType==="F")t._t=Yo(t.path,t.collectionGroup,$e(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of $e(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new dn(r.field,o))}const s=t.endAt?new ks(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ks(t.startAt.position,t.startAt.inclusive):null;t._t=Yo(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function sr(e,t,n){return new Js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ti(e,t){return Hr(qt(e),qt(t))&&e.limitType===t.limitType}function pu(e){return`${zr(qt(e))}|lt:${e.limitType}`}function ir(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>fu(s)).join(", ")}]`),Xs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ze(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ze(s)).join(",")),`Target(${n})`}(qt(e))}; limitType=${e.limitType})`}function ei(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):S.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of $e(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Qo(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,$e(n),s)||n.endAt&&!function(i,r,o){const a=Qo(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,$e(n),s))}(e,t)}function lp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function mu(e){return(t,n)=>{let s=!1;for(const i of $e(e)){const r=hp(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function hp(e,t,n){const s=e.field.isKeyField()?S.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?qe(a,c):b()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
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
 */class Ze{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ru(this.inner)}size(){return this.innerSize}}/**
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
 */const fp=new K(S.comparator);function zt(){return fp}const gu=new K(S.comparator);function an(...e){let t=gu;for(const n of e)t=t.insert(n.key,n);return t}function yu(e){let t=gu;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function ue(){return pn()}function vu(){return pn()}function pn(){return new Ze(e=>e.toString(),(e,t)=>e.isEqual(t))}const dp=new K(S.comparator),pp=new pt(S.comparator);function O(...e){let t=pp;for(const n of e)t=t.add(n);return t}const mp=new pt(F);function gp(){return mp}/**
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
 */function wu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ds(t)?"-0":t}}function Eu(e){return{integerValue:""+e}}function yp(e,t){return Kd(t)?Eu(t):wu(e,t)}/**
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
 */class ni{constructor(){this._=void 0}}function vp(e,t,n){return e instanceof Ns?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Br(i)&&(i=jr(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof He?Tu(e,t):e instanceof xn?Su(e,t):function(s,i){const r=_u(s,i),o=Jo(r)+Jo(s.gt);return tr(r)&&tr(s.gt)?Eu(o):wu(s.serializer,o)}(e,t)}function wp(e,t,n){return e instanceof He?Tu(e,t):e instanceof xn?Su(e,t):n}function _u(e,t){return e instanceof Rs?tr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ns extends ni{}class He extends ni{constructor(t){super(),this.elements=t}}function Tu(e,t){const n=Iu(t);for(const s of e.elements)n.some(i=>Ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class xn extends ni{constructor(t){super(),this.elements=t}}function Su(e,t){let n=Iu(t);for(const s of e.elements)n=n.filter(i=>!Ot(i,s));return{arrayValue:{values:n}}}class Rs extends ni{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Jo(e){return X(e.integerValue||e.doubleValue)}function Iu(e){return qr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class Ep{constructor(t,n){this.field=t,this.transform=n}}function _p(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof He&&s instanceof He||n instanceof xn&&s instanceof xn?je(n.elements,s.elements,Ot):n instanceof Rs&&s instanceof Rs?Ot(n.gt,s.gt):n instanceof Ns&&s instanceof Ns}(e.transform,t.transform)}class Tp{constructor(t,n){this.version=t,this.transformResults=n}}class Ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fs(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class si{}function Cu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Au(e.key,Ft.none()):new ii(e.key,e.data,Ft.none());{const n=e.data,s=Et.empty();let i=new pt(lt.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ie(e.key,s,new Ct(i.toArray()),Ft.none())}}function Sp(e,t,n){e instanceof ii?function(s,i,r){const o=s.value.clone(),a=ta(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ie?function(s,i,r){if(!fs(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ta(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(bu(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function mn(e,t,n,s){return e instanceof ii?function(i,r,o,a){if(!fs(i.precondition,r))return o;const c=i.value.clone(),u=ea(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ie?function(i,r,o,a){if(!fs(i.precondition,r))return o;const c=ea(i.fieldTransforms,a,r),u=r.data;return u.setAll(bu(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(i,r,o){return fs(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Ip(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=_u(s.transform,i||null);r!=null&&(n===null&&(n=Et.empty()),n.set(s.field,r))}return n||null}function Zo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&je(n,s,(i,r)=>_p(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ii extends si{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ie extends si{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function bu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function ta(e,t,n){const s=new Map;j(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,wp(o,a,n[i]))}return s}function ea(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,vp(r,o,t))}return s}class Au extends si{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cp extends si{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bp{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Sp(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=mn(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=mn(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=vu();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Cu(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(k.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),O())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,(n,s)=>Zo(n,s))&&je(this.baseMutations,t.baseMutations,(n,s)=>Zo(n,s))}}class Kr{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){j(t.mutations.length===s.length);let i=dp;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Kr(t,n,s,i)}}/**
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
 */class Ap{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Dp{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Y,L;function kp(e){switch(e){default:return b();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Du(e){if(e===void 0)return jt("GRPC error has no .code"),y.UNKNOWN;switch(e){case Y.OK:return y.OK;case Y.CANCELLED:return y.CANCELLED;case Y.UNKNOWN:return y.UNKNOWN;case Y.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case Y.INTERNAL:return y.INTERNAL;case Y.UNAVAILABLE:return y.UNAVAILABLE;case Y.UNAUTHENTICATED:return y.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case Y.NOT_FOUND:return y.NOT_FOUND;case Y.ALREADY_EXISTS:return y.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return y.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case Y.ABORTED:return y.ABORTED;case Y.OUT_OF_RANGE:return y.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return y.UNIMPLEMENTED;case Y.DATA_LOSS:return y.DATA_LOSS;default:return b()}}(L=Y||(Y={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Gr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return cs}static getOrCreateInstance(){return cs===null&&(cs=new Gr),cs}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let cs=null;/**
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
 */function Np(){return new TextEncoder}/**
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
 */const Rp=new Fe([4294967295,4294967295],0);function na(e){const t=Np().encode(e),n=new Rd;return n.update(t),new Uint8Array(n.digest())}function sa(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Fe([n,s],0),new Fe([i,r],0)]}class Qr{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new cn(`Invalid padding: ${n}`);if(s<0)throw new cn(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new cn(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new cn(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=Fe.fromNumber(this.It)}Et(t,n,s){let i=t.add(n.multiply(Fe.fromNumber(s)));return i.compare(Rp)===1&&(i=new Fe([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=na(t),[s,i]=sa(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(t,n,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Qr(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=na(t),[s,i]=sa(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ri{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Yn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new ri(k.min(),i,new K(F),zt(),O())}}class Yn{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Yn(s,n,O(),O(),O())}}/**
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
 */class ds{constructor(t,n,s,i){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=i}}class ku{constructor(t,n){this.targetId=t,this.Vt=n}}class Nu{constructor(t,n,s=mt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ia{constructor(){this.St=0,this.Dt=oa(),this.Ct=mt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=O(),n=O(),s=O();return this.Dt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:b()}}),new Yn(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=oa()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Mp{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=zt(),this.zt=ra(),this.Wt=new K(F)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:b()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(t){var n;const s=t.targetId,i=t.Vt.count,r=this.se(s);if(r){const o=r.target;if(nr(o))if(i===0){const a=new S(o.path);this.Yt(s,a,ut.newNoDocument(a,k.min()))}else j(i===1);else{const a=this.ie(s);if(a!==i){const c=this.re(t,a);if(c!==0){this.ee(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(n=Gr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var f,d,p,m,g,E;const M={localCacheCount:l,existenceFilterCount:h.count},I=h.unchangedNames;return I&&(M.bloomFilter={applied:u===0,hashCount:(f=I==null?void 0:I.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(p=(d=I==null?void 0:I.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(E=(g=I==null?void 0:I.bits)===null||g===void 0?void 0:g.padding)!==null&&E!==void 0?E:0}),M}(c,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:i}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=ge(r).toUint8Array()}catch(l){if(l instanceof ou)return Be("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Qr(c,o,a)}catch(l){return Be(l instanceof cn?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==n-this.oe(t.targetId,u)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(t,r,null),i++)}),i}ce(t){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&nr(a.target)){const c=new S(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ut.newNoDocument(c,t))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=O();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(t));const i=new ri(t,n,this.Wt,this.jt,s);return this.jt=zt(),this.zt=ra(),this.Wt=new K(F),i}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const i=this.Zt(t);this.ae(t,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new ia,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new pt(F),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new ia),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function ra(){return new K(S.comparator)}function oa(){return new K(S.comparator)}const xp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Op=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lp=(()=>({and:"AND",or:"OR"}))();class Pp{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function rr(e,t){return e.useProto3Json||Xs(t)?t:{value:t}}function Ms(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ru(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Fp(e,t){return Ms(e,t.toTimestamp())}function xt(e){return j(!!e),k.fromTimestamp(function(t){const n=te(t);return new tt(n.seconds,n.nanos)}(e))}function Wr(e,t){return function(n){return new q(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Mu(e){const t=q.fromString(e);return j(Pu(t)),t}function or(e,t){return Wr(e.databaseId,t.path)}function Di(e,t){const n=Mu(t);if(n.get(1)!==e.databaseId.projectId)throw new T(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new S(xu(n))}function ar(e,t){return Wr(e.databaseId,t)}function $p(e){const t=Mu(e);return t.length===4?q.emptyPath():xu(t)}function cr(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xu(e){return j(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function aa(e,t,n){return{name:or(e,t),fields:n.value.mapValue.fields}}function Vp(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(j(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(j(u===void 0||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:Du(c.code);return new T(u,c.message||"")}(o);n=new Nu(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Di(e,s.document.name),r=xt(s.document.updateTime),o=s.document.createTime?xt(s.document.createTime):k.min(),a=new Et({mapValue:{fields:s.document.fields}}),c=ut.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new ds(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Di(e,s.document),r=s.readTime?xt(s.readTime):k.min(),o=ut.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ds([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Di(e,s.document),r=s.removedTargetIds||[];n=new ds([],r,i,null)}else{if(!("filter"in t))return b();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Dp(i,r),a=s.targetId;n=new ku(a,o)}}return n}function Up(e,t){let n;if(t instanceof ii)n={update:aa(e,t.key,t.value)};else if(t instanceof Au)n={delete:or(e,t.key)};else if(t instanceof Ie)n={update:aa(e,t.key,t.data),updateMask:Wp(t.fieldMask)};else{if(!(t instanceof Cp))return b();n={verify:or(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ns)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof He)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rs)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw b()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Fp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(e,t.precondition)),n}function Bp(e,t){return e&&e.length>0?(j(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?xt(s.updateTime):xt(i);return r.isEqual(k.min())&&(r=xt(i)),new Tp(r,s.transformResults||[])}(n,t))):[]}function jp(e,t){return{documents:[ar(e,t.path)]}}function qp(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ar(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ar(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Lu(Lt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ne(l.field),direction:Kp(l.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=rr(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function zp(e){let t=$p(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){j(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=Ou(l);return h instanceof Lt&&lu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new dn(Re(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Xs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new ks(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new ks(f,h)}(n.endAt)),op(t,i,o,r,a,"F",c,u)}function Hp(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ou(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Re(t.unaryFilter.field);return Z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Re(t.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Re(t.unaryFilter.field);return Z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Re(t.unaryFilter.field);return Z.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(e):e.fieldFilter!==void 0?function(t){return Z.create(Re(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Lt.create(t.compositeFilter.filters.map(n=>Ou(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(t.compositeFilter.op))}(e):b()}function Kp(e){return xp[e]}function Gp(e){return Op[e]}function Qp(e){return Lp[e]}function Ne(e){return{fieldPath:e.canonicalString()}}function Re(e){return lt.fromServerFormat(e.fieldPath)}function Lu(e){return e instanceof Z?function(t){if(t.op==="=="){if(Go(t.value))return{unaryFilter:{field:Ne(t.field),op:"IS_NAN"}};if(Ko(t.value))return{unaryFilter:{field:Ne(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Go(t.value))return{unaryFilter:{field:Ne(t.field),op:"IS_NOT_NAN"}};if(Ko(t.value))return{unaryFilter:{field:Ne(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ne(t.field),op:Gp(t.op),value:t.value}}}(e):e instanceof Lt?function(t){const n=t.getFilters().map(s=>Lu(s));return n.length===1?n[0]:{compositeFilter:{op:Qp(t.op),filters:n}}}(e):b()}function Wp(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Pu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Ht{constructor(t,n,s,i,r=k.min(),o=k.min(),a=mt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Yp{constructor(t){this.fe=t}}function Xp(e){const t=zp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?sr(t,t.limit,"L"):t}/**
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
 */class Jp{constructor(){this.rn=new Zp}addToCollectionParentIndex(t,n){return this.rn.add(n),v.resolve()}getCollectionParents(t,n){return v.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return v.resolve()}deleteFieldIndex(t,n){return v.resolve()}getDocumentsMatchingTarget(t,n){return v.resolve(null)}getIndexType(t,n){return v.resolve(0)}getFieldIndexes(t,n){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,n){return v.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,n){return v.resolve(Zt.min())}updateCollectionGroup(t,n,s){return v.resolve()}updateIndexEntries(t,n){return v.resolve()}}class Zp{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new pt(q.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new pt(q.comparator)).toArray()}}/**
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
 */class Ke{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Ke(0)}static Mn(){return new Ke(-1)}}/**
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
 */class tm{constructor(){this.changes=new Ze(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?v.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class em{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class nm{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&mn(s.mutation,i,Ct.empty(),tt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,O()).next(()=>s))}getLocalViewOfDocuments(t,n,s=O()){const i=ue();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=an();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=ue();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,O()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=zt();const o=pn(),a=pn();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Ie)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),mn(l.mutation,u,l.mutation.getFieldMask(),tt.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new em(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=pn();let i=new K((o,a)=>o-a),r=O();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ct.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||O()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=vu();l.forEach(f=>{if(!r.has(f)){const d=Cu(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return v.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return S.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):up(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):v.resolve(ue());let a=-1,c=r;return o.next(u=>v.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?v.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,O())).next(l=>({batchId:a,changes:yu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new S(n)).next(s=>{let i=an();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=an();return this.indexManager.getCollectionParents(t,i).next(o=>v.forEach(o,a=>{const c=function(u,l){return new Js(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ut.newInvalidDocument(u)))});let o=an();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&mn(u.mutation,c,Ct.empty(),tt.now()),ei(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class sm{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return v.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:xt(s.createTime)}),v.resolve()}getNamedQuery(t,n){return v.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Xp(s.bundledQuery),readTime:xt(s.readTime)}}(n)),v.resolve()}}/**
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
 */class im{constructor(){this.overlays=new K(S.comparator),this.ls=new Map}getOverlay(t,n){return v.resolve(this.overlays.get(n))}getOverlays(t,n){const s=ue();return v.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.we(t,n,r)}),v.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),v.resolve()}getOverlaysForCollection(t,n,s){const i=ue(),r=n.length+1,o=new S(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return v.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new K((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=ue(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ue(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return v.resolve(a)}we(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ap(n,s));let r=this.ls.get(n);r===void 0&&(r=O(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
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
 */class Yr{constructor(){this.fs=new pt(et.ds),this.ws=new pt(et._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new et(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new et(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new S(new q([])),s=new et(n,t),i=new et(n,t+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new S(new q([])),s=new et(n,t),i=new et(n,t+1);let r=O();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new et(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class et{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return S.comparator(t.key,n.key)||F(t.As,n.As)}static _s(t,n){return F(t.As,n.As)||S.comparator(t.key,n.key)}}/**
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
 */class rm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new pt(et.ds)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bp(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new et(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(t,n){return v.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return v.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),v.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new pt(F);return n.forEach(i=>{const r=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),v.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;S.isDocumentKey(r)||(r=r.child(""));const o=new et(new S(r),0);let a=new pt(F);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),v.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){j(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return v.forEach(n.mutations,i=>{const r=new et(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new et(n,0),i=this.Rs.firstAfterOrEqual(s);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class om{constructor(t){this.Ds=t,this.docs=new K(S.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return v.resolve(s?s.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(t,n){let s=zt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ut.newInvalidDocument(i))}),v.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=zt();const o=n.path,a=new S(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qd(jd(l),s)<=0||(i.has(l.key)||ei(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return v.resolve(r)}getAllFromCollectionGroup(t,n,s,i){b()}Cs(t,n){return v.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new am(this)}getSize(t){return v.resolve(this.size)}}class am extends tm{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(t,i)):this.os.removeEntry(s)}),v.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
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
 */class cm{constructor(t){this.persistence=t,this.xs=new Ze(n=>zr(n),Hr),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Yr,this.targetCount=0,this.Ms=Ke.kn()}forEachTarget(t,n){return this.xs.forEach((s,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),v.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new Ke(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,v.resolve()}updateTargetData(t,n){return this.Fn(n),v.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),v.waitFor(r).next(()=>i)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return v.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),v.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),v.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),v.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return v.resolve(s)}containsKey(t,n){return v.resolve(this.ks.containsKey(n))}}/**
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
 */class um{constructor(t,n){this.$s={},this.overlays={},this.Os=new Ur(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new cm(this),this.indexManager=new Jp,this.remoteDocumentCache=function(s){return new om(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Yp(n),this.qs=new sm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new im,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new rm(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){_("MemoryPersistence","Starting transaction:",t);const i=new lm(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(t,n){return v.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class lm extends Hd{constructor(t){super(),this.currentSequenceNumber=t}}class Xr{constructor(t){this.persistence=t,this.Qs=new Yr,this.js=null}static zs(t){return new Xr(t)}get Ws(){if(this.js)return this.js;throw b()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),v.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),v.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),v.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ws,s=>{const i=S.fromPath(s);return this.Hs(t,i).next(r=>{r||n.removeEntry(i,k.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return v.or([()=>v.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
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
 */class Jr{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(t,n){let s=O(),i=O();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Jr(t,n.fromCache,s,i)}}/**
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
 */class hm{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ki(t,n).next(r=>r||this.Gi(t,n,i,s)).next(r=>r||this.Qi(t,n))}Ki(t,n){if(Xo(n))return v.resolve(null);let s=qt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sr(n,null,"F"),s=qt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=O(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.ji(n,a);return this.zi(n,u,o,c.readTime)?this.Ki(t,sr(n,null,"F")):this.Wi(t,u,n,c)}))})))}Gi(t,n,s,i){return Xo(n)||i.isEqual(k.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(t,n):(jo()<=V.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ir(n)),this.Wi(t,o,n,Bd(i,-1)))})}ji(t,n){let s=new pt(mu(t));return n.forEach((i,r)=>{ei(t,r)&&(s=s.add(r))}),s}zi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,n){return jo()<=V.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ir(n)),this.Ui.getDocumentsMatchingQuery(t,n,Zt.min())}Wi(t,n,s,i){return this.Ui.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class fm{constructor(t,n,s,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new K(F),this.Yi=new Ze(r=>zr(r),Hr),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nm(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function dm(e,t,n,s){return new fm(e,t,n,s)}async function Fu(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=O();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function pm(e,t){const n=N(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=v.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);j(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=O();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function $u(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function mm(e,t){const n=N(e),s=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,l.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(mt.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),i=i.insert(h,d),function(p,m,g){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,d,l)&&a.push(n.Bs.updateTargetData(r,d))});let c=zt(),u=O();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(gm(r,o,t.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!s.isEqual(k.min())){const l=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return v.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Ji=i,r))}function gm(e,t,n){let s=O(),i=O();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=zt();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(k.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function ym(e,t){const n=N(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function vm(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,t).next(r=>r?(i=r,v.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Ht(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function ur(e,t,n){const s=N(e),i=s.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function ca(e,t,n){const s=N(e);let i=k.min(),r=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=N(a),h=l.Yi.get(u);return h!==void 0?v.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(s,o,qt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?i:k.min(),n?r:O())).next(a=>(wm(s,lp(t),a),{documents:a,ir:r})))}function wm(e,t,n){let s=e.Xi.get(t)||k.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Xi.set(t,s)}class ua{constructor(){this.activeTargetIds=gp()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Em{constructor(){this.Hr=new ua,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new ua,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class _m{Yr(t){}shutdown(){}}/**
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
 */class la{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let us=null;function ki(){return us===null?us=268435456+Math.round(2147483648*Math.random()):us++,"0x"+us.toString(16)}/**
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
 */const Tm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sm{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
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
 */const at="WebChannelConnection";class Im extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,i,r){const o=ki(),a=this.To(t,n);_("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.Eo(c,i,r),this.Ao(t,a,c,s).then(u=>(_("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw Be("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}vo(t,n,s,i,r,o){return this.Io(t,n,s,i,r)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Je,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}To(t,n){const s=Tm[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,i){const r=ki();return new Promise((o,a)=>{const c=new Nd;c.setWithCredentials(!0),c.listenOnce(Ad.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ai.NO_ERROR:const l=c.getResponseJson();_(at,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(l)),o(l);break;case Ai.TIMEOUT:_(at,`RPC '${t}' ${r} timed out`),a(new T(y.DEADLINE_EXCEEDED,"Request time out"));break;case Ai.HTTP_ERROR:const h=c.getStatus();if(_(at,`RPC '${t}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(g)>=0?g:y.UNKNOWN}(d.status);a(new T(p,d.message))}else a(new T(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new T(y.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{_(at,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);_(at,`RPC '${t}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}Ro(t,n,s){const i=ki(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Cd(),a=bd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new kd({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=r.join("");_(at,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,d=!1;const p=new Sm({ro:g=>{d?_(at,`Not sending because RPC '${t}' stream ${i} is closed:`,g):(f||(_(at,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),_(at,`RPC '${t}' stream ${i} sending:`,g),h.send(g))},oo:()=>h.close()}),m=(g,E,M)=>{g.listen(E,I=>{try{M(I)}catch(A){setTimeout(()=>{throw A},0)}})};return m(h,rs.EventType.OPEN,()=>{d||_(at,`RPC '${t}' stream ${i} transport opened.`)}),m(h,rs.EventType.CLOSE,()=>{d||(d=!0,_(at,`RPC '${t}' stream ${i} transport closed`),p.wo())}),m(h,rs.EventType.ERROR,g=>{d||(d=!0,Be(at,`RPC '${t}' stream ${i} transport errored:`,g),p.wo(new T(y.UNAVAILABLE,"The operation could not be completed")))}),m(h,rs.EventType.MESSAGE,g=>{var E;if(!d){const M=g.data[0];j(!!M);const I=M,A=I.error||((E=I[0])===null||E===void 0?void 0:E.error);if(A){_(at,`RPC '${t}' stream ${i} received error:`,A);const W=A.status;let re=function(St){const wt=Y[St];if(wt!==void 0)return Du(wt)}(W),Q=A.message;re===void 0&&(re=y.INTERNAL,Q="Unknown error status: "+W+" with message "+A.message),d=!0,p.wo(new T(re,Q)),h.close()}else _(at,`RPC '${t}' stream ${i} received:`,M),p._o(M)}}),m(a,Dd.STAT_EVENT,g=>{g.stat===Uo.PROXY?_(at,`RPC '${t}' stream ${i} detected buffering proxy`):g.stat===Uo.NOPROXY&&_(at,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function Ni(){return typeof document<"u"?document:null}/**
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
 */function oi(e){return new Pp(e,!0)}/**
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
 */class Vu{constructor(t,n,s=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Uu{constructor(t,n,s,i,r,o,a,c){this.ii=t,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Vu(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(jt(n.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{t(()=>{const i=new T(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cm extends Uu{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=Vp(this.serializer,t),s=function(i){if(!("targetChange"in i))return k.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?k.min():r.readTime?xt(r.readTime):k.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=cr(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=nr(a)?{documents:jp(i,a)}:{query:qp(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Ru(i,r.resumeToken);const c=rr(i,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(k.min())>0){o.readTime=Ms(i,r.snapshotVersion.toTimestamp());const c=rr(i,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,t);const s=Hp(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=cr(this.serializer),n.removeTarget=t,this.Wo(n)}}class bm extends Uu{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(j(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Bp(t.writeResults,t.commitTime),s=xt(t.commitTime);return this.listener.cu(s,n)}return j(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=cr(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Up(this.serializer,s))};this.Wo(n)}}/**
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
 */class Am extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new T(y.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(y.UNKNOWN,i.toString())})}vo(t,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(y.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Dm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(jt(n),this.mu=!1):_("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class km{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ce(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.vu.add(4),await Xn(c),c.bu.set("Unknown"),c.vu.delete(4),await ai(c)}(this))})}),this.bu=new Dm(s,i)}}async function ai(e){if(Ce(e))for(const t of e.Ru)await t(!0)}async function Xn(e){for(const t of e.Ru)await t(!1)}function Bu(e,t){const n=N(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),eo(n)?to(n):tn(n).Ko()&&Zr(n,t))}function ju(e,t){const n=N(e),s=tn(n);n.Au.delete(t),s.Ko()&&qu(n,t),n.Au.size===0&&(s.Ko()?s.jo():Ce(n)&&n.bu.set("Unknown"))}function Zr(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(k.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}tn(e).su(t)}function qu(e,t){e.Vu.qt(t),tn(e).iu(t)}function to(e){e.Vu=new Mp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),tn(e).start(),e.bu.gu()}function eo(e){return Ce(e)&&!tn(e).Uo()&&e.Au.size>0}function Ce(e){return N(e).vu.size===0}function zu(e){e.Vu=void 0}async function Nm(e){e.Au.forEach((t,n)=>{Zr(e,t)})}async function Rm(e,t){zu(e),eo(e)?(e.bu.Iu(t),to(e)):e.bu.set("Unknown")}async function Mm(e,t,n){if(e.bu.set("Online"),t instanceof Nu&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await xs(e,s)}else if(t instanceof ds?e.Vu.Ht(t):t instanceof ku?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(k.min()))try{const s=await $u(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(mt.EMPTY_BYTE_STRING,u.snapshotVersion)),qu(i,a);const l=new Ht(u.target,a,c,u.sequenceNumber);Zr(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){_("RemoteStore","Failed to raise snapshot:",s),await xs(e,s)}}async function xs(e,t,n){if(!Wn(t))throw t;e.vu.add(1),await Xn(e),e.bu.set("Offline"),n||(n=()=>$u(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ai(e)})}function Hu(e,t){return t().catch(n=>xs(e,n,t))}async function ci(e){const t=N(e),n=ee(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;xm(t);)try{const i=await ym(t.localStore,s);if(i===null){t.Eu.length===0&&n.jo();break}s=i.batchId,Om(t,i)}catch(i){await xs(t,i)}Ku(t)&&Gu(t)}function xm(e){return Ce(e)&&e.Eu.length<10}function Om(e,t){e.Eu.push(t);const n=ee(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Ku(e){return Ce(e)&&!ee(e).Uo()&&e.Eu.length>0}function Gu(e){ee(e).start()}async function Lm(e){ee(e).hu()}async function Pm(e){const t=ee(e);for(const n of e.Eu)t.uu(n.mutations)}async function Fm(e,t,n){const s=e.Eu.shift(),i=Kr.from(s,t,n);await Hu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ci(e)}async function $m(e,t){t&&ee(e).ou&&await async function(n,s){if(i=s.code,kp(i)&&i!==y.ABORTED){const r=n.Eu.shift();ee(n).Qo(),await Hu(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ci(n)}var i}(e,t),Ku(e)&&Gu(e)}async function ha(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const s=Ce(n);n.vu.add(3),await Xn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ai(n)}async function Vm(e,t){const n=N(e);t?(n.vu.delete(2),await ai(n)):t||(n.vu.add(2),await Xn(n),n.bu.set("Unknown"))}function tn(e){return e.Su||(e.Su=function(t,n,s){const i=N(t);return i.fu(),new Cm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Nm.bind(null,e),ao:Rm.bind(null,e),nu:Mm.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),eo(e)?to(e):e.bu.set("Unknown")):(await e.Su.stop(),zu(e))})),e.Su}function ee(e){return e.Du||(e.Du=function(t,n,s){const i=N(t);return i.fu(),new bm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Lm.bind(null,e),ao:$m.bind(null,e),au:Pm.bind(null,e),cu:Fm.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await ci(e)):(await e.Du.stop(),e.Eu.length>0&&(_("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
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
 */class no{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new no(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function so(e,t){if(jt("AsyncQueue",`${t}: ${e}`),Wn(e))return new T(y.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Ve{constructor(t){this.comparator=t?(n,s)=>t(n,s)||S.comparator(n.key,s.key):(n,s)=>S.comparator(n.key,s.key),this.keyedMap=an(),this.sortedSet=new K(this.comparator)}static emptySet(t){return new Ve(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ve;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class fa{constructor(){this.Cu=new K(S.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):b():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ge{constructor(t,n,s,i,r,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ge(t,n,Ve.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ti(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Um{constructor(){this.Nu=void 0,this.listeners=[]}}class Bm{constructor(){this.queries=new Ze(t=>pu(t),ti),this.onlineState="Unknown",this.ku=new Set}}async function Qu(e,t){const n=N(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Um),i)try{r.Nu=await n.onListen(s)}catch(o){const a=so(o,`Initialization of query '${ir(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&io(n)}async function Wu(e,t){const n=N(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function jm(e,t){const n=N(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&io(n)}function qm(e,t,n){const s=N(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function io(e){e.ku.forEach(t=>{t.next()})}class Yu{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ge(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=Ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
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
 */class Xu{constructor(t){this.key=t}}class Ju{constructor(t){this.key=t}}class zm{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=O(),this.mutatedKeys=O(),this.tc=mu(t),this.ec=new Ve(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new fa,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const f=i.get(l),d=ei(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(s.track({type:3,doc:d}),g=!0):this.rc(f,d)||(s.track({type:2,doc:d}),g=!0,(c&&this.tc(d,c)>0||u&&this.tc(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),g=!0):f&&!d&&(s.track({type:1,doc:f}),g=!0,(c||u)&&(a=!0)),g&&(d?(o=o.add(d),r=m?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const r=t.ic.xu();r.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return d(h)-d(f)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new Ge(this.query,t.ec,i,r,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new fa,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=O(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new Ju(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new Xu(s))}),n}hc(t){this.Yu=t.ir,this.Zu=O();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return Ge.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Hm{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Km{constructor(t){this.key=t,this.fc=!1}}class Gm{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ze(a=>pu(a),ti),this._c=new Map,this.mc=new Set,this.gc=new K(S.comparator),this.yc=new Map,this.Ic=new Yr,this.Tc={},this.Ec=new Map,this.Ac=Ke.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Qm(e,t){const n=ig(e);let s,i;const r=n.wc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await vm(n.localStore,qt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Wm(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&Bu(n.remoteStore,o)}return i}async function Wm(e,t,n,s,i){e.Rc=(h,f,d)=>async function(p,m,g,E){let M=m.view.sc(g);M.zi&&(M=await ca(p.localStore,m.query,!1).then(({documents:W})=>m.view.sc(W,M)));const I=E&&E.targetChanges.get(m.targetId),A=m.view.applyChanges(M,p.isPrimaryClient,I);return pa(p,m.targetId,A.cc),A.snapshot}(e,h,f,d);const r=await ca(e.localStore,t,!0),o=new zm(t,r.ir),a=o.sc(r.documents),c=Yn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);pa(e,n,u.cc);const l=new Hm(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function Ym(e,t){const n=N(e),s=n.wc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!ti(r,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ur(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ju(n.remoteStore,s.targetId),lr(n,s.targetId)}).catch(Qn)):(lr(n,s.targetId),await ur(n.localStore,s.targetId,!0))}async function Xm(e,t,n){const s=rg(e);try{const i=await function(r,o){const a=N(r),c=tt.now(),u=o.reduce((f,d)=>f.add(d.key),O());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=zt(),p=O();return a.Zi.getEntries(f,u).next(m=>{d=m,d.forEach((g,E)=>{E.isValidDocument()||(p=p.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const g=[];for(const E of o){const M=Ip(E,l.get(E.key).overlayedDocument);M!=null&&g.push(new Ie(E.key,M,au(M.value.mapValue),Ft.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,g,o)}).next(m=>{h=m;const g=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,g)})}).then(()=>({batchId:h.batchId,changes:yu(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new K(F)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Jn(s,i.changes),await ci(s.remoteStore)}catch(i){const r=so(i,"Failed to persist write");n.reject(r)}}async function Zu(e,t){const n=N(e);try{const s=await mm(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?j(o.fc):i.removedDocuments.size>0&&(j(o.fc),o.fc=!1))}),await Jn(n,s,t)}catch(s){await Qn(s)}}function da(e,t,n){const s=N(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&io(a)}(s.eventManager,t),i.length&&s.dc.nu(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Jm(e,t,n){const s=N(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.yc.get(t),r=i&&i.key;if(r){let o=new K(S.comparator);o=o.insert(r,ut.newNoDocument(r,k.min()));const a=O().add(r),c=new ri(k.min(),new Map,new K(F),o,a);await Zu(s,c),s.gc=s.gc.remove(r),s.yc.delete(t),ro(s)}else await ur(s.localStore,t,!1).then(()=>lr(s,t,n)).catch(Qn)}async function Zm(e,t){const n=N(e),s=t.batch.batchId;try{const i=await pm(n.localStore,t);el(n,s,null),tl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Jn(n,i)}catch(i){await Qn(i)}}async function tg(e,t,n){const s=N(e);try{const i=await function(r,o){const a=N(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(j(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);el(s,t,n),tl(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Jn(s,i)}catch(i){await Qn(i)}}function tl(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function el(e,t,n){const s=N(e);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.Tc[s.currentUser.toKey()]=i}}function lr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||nl(e,s)})}function nl(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(ju(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),ro(e))}function pa(e,t,n){for(const s of n)s instanceof Xu?(e.Ic.addReference(s.key,t),eg(e,s)):s instanceof Ju?(_("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||nl(e,s.key)):b()}function eg(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(_("SyncEngine","New document in limbo: "+n),e.mc.add(s),ro(e))}function ro(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new S(q.fromString(t)),s=e.Ac.next();e.yc.set(s,new Km(n)),e.gc=e.gc.insert(n,s),Bu(e.remoteStore,new Ht(qt(Zs(n.path)),s,"TargetPurposeLimboResolution",Ur.ct))}}async function Jn(e,t,n){const s=N(e),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Jr.Li(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,c){const u=N(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>v.forEach(c,h=>v.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>v.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Wn(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ji.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.Ji=u.Ji.insert(h,p)}}}(s.localStore,r))}async function ng(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const s=await Fu(n.localStore,t);n.currentUser=t,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new T(y.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Jn(n,s.er)}}function sg(e,t){const n=N(e),s=n.yc.get(t);if(s&&s.fc)return O().add(s.key);{let i=O();const r=n._c.get(t);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function ig(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jm.bind(null,t),t.dc.nu=jm.bind(null,t.eventManager),t.dc.Pc=qm.bind(null,t.eventManager),t}function rg(e){const t=N(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Zm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tg.bind(null,t),t}class ma{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=oi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return dm(this.persistence,new hm,t.initialUser,this.serializer)}createPersistence(t){return new um(Xr.zs,this.serializer)}createSharedClientState(t){return new Em}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class og{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>da(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ng.bind(null,this.syncEngine),await Vm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Bm}createDatastore(t){const n=oi(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Im(i));var i;return function(r,o,a,c){return new Am(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>da(this.syncEngine,a,0),o=la.D()?new la:new _m,new km(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const l=new Gm(s,i,r,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);_("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Xn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class sl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class ag{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=iu.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{_("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(_("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=so(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ri(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Fu(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ga(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ug(e);_("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>ha(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>ha(t.remoteStore,r)),e._onlineComponents=t}function cg(e){return e.name==="FirebaseError"?e.code===y.FAILED_PRECONDITION||e.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function ug(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ri(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!cg(n))throw n;Be("Error using user provided cache. Falling back to memory cache: "+n),await Ri(e,new ma)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Ri(e,new ma);return e._offlineComponents}async function il(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await ga(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await ga(e,new og))),e._onlineComponents}function lg(e){return il(e).then(t=>t.syncEngine)}async function hr(e){const t=await il(e),n=t.eventManager;return n.onListen=Qm.bind(null,t.syncEngine),n.onUnlisten=Ym.bind(null,t.syncEngine),n}function hg(e,t,n={}){const s=new Qt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new sl({next:h=>{r.enqueueAndForget(()=>Wu(i,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new T(y.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new T(y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Yu(Zs(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Qu(i,l)}(await hr(e),e.asyncQueue,t,n,s)),s.promise}/**
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
 */function rl(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const ya=new Map;/**
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
 */function ol(e,t,n){if(!n)throw new T(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fg(e,t,n,s){if(t===!0&&s===!0)throw new T(y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function va(e){if(!S.isDocumentKey(e))throw new T(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function wa(e){if(S.isDocumentKey(e))throw new T(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":b()}function Wt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oo(e);throw new T(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ea{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new T(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rl((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class ui{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ea({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ea(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Md;switch(n.type){case"firstParty":return new Pd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ya.get(t);n&&(_("ComponentProvider","Removing Datastore"),ya.delete(t),n.terminate())}(this),Promise.resolve()}}function dg(e,t,n,s={}){var i;const r=(e=Wt(e,ui))._getSettings(),o=`${t}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ct.MOCK_USER;else{a=ch(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new T(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(u)}e._authCredentials=new xd(new su(a,c))}}/**
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
 */class yt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class li{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new li(this.firestore,t,this._query)}}class Yt extends li{constructor(t,n,s){super(t,n,Zs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new S(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function pg(e,t,...n){if(e=Ut(e),ol("collection","path",t),e instanceof ui){const s=q.fromString(t,...n);return wa(s),new Yt(e,null,s)}{if(!(e instanceof yt||e instanceof Yt))throw new T(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(q.fromString(t,...n));return wa(s),new Yt(e.firestore,null,s)}}function mg(e,t,...n){if(e=Ut(e),arguments.length===1&&(t=iu.A()),ol("doc","path",t),e instanceof ui){const s=q.fromString(t,...n);return va(s),new yt(e,null,new S(s))}{if(!(e instanceof yt||e instanceof Yt))throw new T(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(q.fromString(t,...n));return va(s),new yt(e.firestore,e instanceof Yt?e.converter:null,new S(s))}}/**
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
 */class gg{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Vu(this,"async_queue_retry"),this.Xc=()=>{const n=Ni();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=Ni();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=Ni();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Qt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Wn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw jt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=no.createAndSchedule(this,t,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&b()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}function _a(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class On extends ui{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new gg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||al(this),this._firestoreClient.terminate()}}function yg(e,t){const n=typeof e=="object"?e:df(),s=typeof e=="string"?e:t||"(default)",i=uf(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=oh("firestore");r&&dg(i,...r)}return i}function ao(e){return e._firestoreClient||al(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function al(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,c,u){return new Qd(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,rl(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new ag(e._authCredentials,e._appCheckCredentials,e._queue,r),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Qe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qe(mt.fromBase64String(t))}catch(n){throw new T(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qe(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class hi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new T(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class fi{constructor(t){this._methodName=t}}/**
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
 */class co{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new T(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new T(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}}/**
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
 */const vg=/^__.*__$/;class cl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ie(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function ul(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class di{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new di(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.fa(t),i}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Os(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(ul(this.ca)&&vg.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class wg{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||oi(t)}ya(t,n,s,i=!1){return new di({ca:t,methodName:n,ga:s,path:lt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eg(e){const t=e._freezeSettings(),n=oi(e._databaseId);return new wg(e._databaseId,!!t.ignoreUndefinedProperties,n)}class pi extends fi{_toFieldTransform(t){if(t.ca!==2)throw t.ca===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof pi}}function _g(e,t,n){return new di({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Tg extends fi{constructor(t,n){super(t),this.pa=n}_toFieldTransform(t){const n=_g(this,t,!0),s=this.pa.map(r=>Zn(r,n)),i=new He(s);return new Ep(t.path,i)}isEqual(t){return this===t}}function Sg(e,t,n,s){const i=e.ya(1,t,n);hl("Data must be an object, but it was:",i,s);const r=[],o=Et.empty();Se(s,(c,u)=>{const l=uo(t,c,n);u=Ut(u);const h=i.da(l);if(u instanceof pi)r.push(l);else{const f=Zn(u,h);f!=null&&(r.push(l),o.set(l,f))}});const a=new Ct(r);return new cl(o,a,i.fieldTransforms)}function Ig(e,t,n,s,i,r){const o=e.ya(1,t,n),a=[Ta(t,s,n)],c=[i];if(r.length%2!=0)throw new T(y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Ta(t,r[f])),c.push(r[f+1]);const u=[],l=Et.empty();for(let f=a.length-1;f>=0;--f)if(!Ag(u,a[f])){const d=a[f];let p=c[f];p=Ut(p);const m=o.da(d);if(p instanceof pi)u.push(d);else{const g=Zn(p,m);g!=null&&(u.push(d),l.set(d,g))}}const h=new Ct(u);return new cl(l,h,o.fieldTransforms)}function Zn(e,t){if(ll(e=Ut(e)))return hl("Unsupported field value:",t,e),Cg(e,t);if(e instanceof fi)return function(n,s){if(!ul(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Zn(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=Ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=tt.fromDate(n);return{timestampValue:Ms(s.serializer,i)}}if(n instanceof tt){const i=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ms(s.serializer,i)}}if(n instanceof co)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qe)return{bytesValue:Ru(s.serializer,n._byteString)};if(n instanceof yt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${oo(n)}`)}(e,t)}function Cg(e,t){const n={};return ru(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(e,(s,i)=>{const r=Zn(i,t.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function ll(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof tt||e instanceof co||e instanceof Qe||e instanceof yt||e instanceof fi)}function hl(e,t,n){if(!ll(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=oo(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function Ta(e,t,n){if((t=Ut(t))instanceof hi)return t._internalPath;if(typeof t=="string")return uo(e,t);throw Os("Field path arguments must be of type string or ",e,!1,void 0,n)}const bg=new RegExp("[~\\*/\\[\\]]");function uo(e,t,n){if(t.search(bg)>=0)throw Os(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hi(...t.split("."))._internalPath}catch{throw Os(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Os(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new T(y.INVALID_ARGUMENT,a+e+c)}function Ag(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class fl{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(dl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dg extends fl{data(){return super.data()}}function dl(e,t){return typeof t=="string"?uo(e,t):t instanceof hi?t._internalPath:t._delegate._internalPath}/**
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
 */function kg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new T(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ng{convertValue(t,n="none"){switch(ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return X(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw b()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Se(t,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new co(X(t.latitude),X(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=jr(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Nn(t));default:return null}}convertTimestamp(t){const n=te(t);return new tt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=q.fromString(t);j(Pu(s));const i=new Rn(s.get(1),s.get(3)),r=new S(s.popFirst(5));return i.isEqual(n)||jt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class un{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pl extends fl{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(dl("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ps extends pl{data(t={}){return super.data(t)}}class Rg{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new un(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new ps(this._firestore,this._userDataWriter,s.key,s,new un(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ps(s._firestore,s._userDataWriter,o.doc.key,o.doc,new un(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ps(s._firestore,s._userDataWriter,o.doc.key,o.doc,new un(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Mg(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
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
 */function xg(e){e=Wt(e,yt);const t=Wt(e.firestore,On);return hg(ao(t),e._key).then(n=>gl(t,e,n))}class ml extends Ng{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function Og(e,t,n,...s){e=Wt(e,yt);const i=Wt(e.firestore,On),r=Eg(i);let o;return o=typeof(t=Ut(t))=="string"||t instanceof hi?Ig(r,"updateDoc",e._key,t,n,s):Sg(r,"updateDoc",e._key,t),Pg(i,[o.toMutation(e._key,Ft.exists(!0))])}function Lg(e,...t){var n,s,i;e=Ut(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||_a(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(_a(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(e instanceof yt)u=Wt(e.firestore,On),l=Zs(e._key.path),c={next:h=>{t[o]&&t[o](gl(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Wt(e,li);u=Wt(h.firestore,On),l=h._query;const f=new ml(u);c={next:d=>{t[o]&&t[o](new Rg(u,f,h,d))},error:t[o+1],complete:t[o+2]},kg(e._query)}return function(h,f,d,p){const m=new sl(p),g=new Yu(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>Qu(await hr(h),g)),()=>{m.Dc(),h.asyncQueue.enqueueAndForget(async()=>Wu(await hr(h),g))}}(ao(u),l,a,c)}function Pg(e,t){return function(n,s){const i=new Qt;return n.asyncQueue.enqueueAndForget(async()=>Xm(await lg(n),s,i)),i.promise}(ao(e),t)}function gl(e,t,n){const s=n.docs.get(t._key),i=new ml(e);return new pl(e,i,t._key,s,new un(n.hasPendingWrites,n.fromCache),t.converter)}function Fg(...e){return new Tg("arrayUnion",e)}(function(e,t=!0){(function(n){Je=n})(ff),Es(new wn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new On(new Od(n.getProvider("auth-internal")),new $d(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Le(Bo,"3.13.0",e),Le(Bo,"3.13.0","esm2017")})();const $g={apiKey:"AIzaSyCDqpSA_-xEwVkbj-EBwPHNYiSvJO6ULOY",authDomain:"wedding-photos-challenge.firebaseapp.com",projectId:"wedding-photos-challenge",storageBucket:"wedding-photos-challenge.appspot.com",messagingSenderId:"1095306889273",appId:"1:1095306889273:web:2f1ac74abc6fb029f1a5e8",measurementId:"G-3V15Z3EV3R"},Vg=Ja($g),Sa=yg(Vg);function lo(e){const t=e-1;return t*t*t+1}function Ia(e){return--e*e*e*e*e+1}function Ug(e,{delay:t=0,duration:n=400,easing:s=ve}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Bg(e,{delay:t=0,duration:n=400,easing:s=lo,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o),[h,f]=mo(i),[d,p]=mo(r);return{delay:t,duration:n,easing:s,css:(m,g)=>`
			transform: ${u} translate(${(1-m)*h}${f}, ${(1-m)*d}${p});
			opacity: ${c-l*g}`}}function Ca(e,{delay:t=0,duration:n=400,easing:s=lo,start:i=0,opacity:r=0}={}){const o=getComputedStyle(e),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-i,l=a*(1-r);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} scale(${1-u*f});
			opacity: ${a-l*f}
		`}}function jg(e,{from:t,to:n},s={}){const i=getComputedStyle(e),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=lo}=s;return{delay:l,duration:we(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const m=p*c,g=p*u,E=d+p*t.width/n.width,M=d+p*t.height/n.height;return`transform: ${r} translate(${m}px, ${g}px) scale(${E}, ${M});`}}}const De=[];function ho(e,t=z){let n;const s=new Set;function i(a){if(ne(e,a)&&(e=a,n)){const c=!De.length;for(const u of s)u[1](),De.push(u,e);if(c){for(let u=0;u<De.length;u+=2)De[u][0](De[u+1]);De.length=0}}}function r(a){i(a(e))}function o(a,c=z){const u=[a,c];return s.add(u),s.size===1&&(n=t(i)||z),a(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const qg={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},zg=()=>{const{subscribe:e,update:t}=ho([]);let n=0;const s={},i=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...i(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...qg,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(i(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=i(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},le=zg();function ba(e){return Object.prototype.toString.call(e)==="[object Date]"}function fr(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((i,r)=>fr(e[r],i));return i=>s.map(r=>r(i))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ba(e)&&ba(t)){e=e.getTime(),t=t.getTime();const r=t-e;return o=>new Date(e+o*r)}const s=Object.keys(t),i={};return s.forEach(r=>{i[r]=fr(e[r],t[r])}),r=>{const o={};return s.forEach(a=>{o[a]=i[a](r)}),o}}if(n==="number"){const s=t-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${n} values`)}function Hg(e,t={}){const n=ho(e);let s,i=e;function r(o,a){if(e==null)return n.set(e=o),Promise.resolve();i=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=ve,interpolate:d=fr}=Mi(Mi({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=i),Promise.resolve();const p=Ln()+l;let m;return s=Pn(g=>{if(g<p)return!0;u||(m=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const E=g-p;return E>h?(n.set(e=o),!1):(n.set(e=m(f(E/h))),!0)}),s.promise}return{set:r,update:(o,a)=>r(o(i,e),a),subscribe:n.subscribe}}function Kg(e){let t,n=e[0].msg+"",s;return{c(){t=new kl(!1),s=Ls(),t.a=s},m(i,r){t.m(n,i,r),$(i,s,r)},p(i,r){r&1&&n!==(n=i[0].msg+"")&&t.p(n)},i:z,o:z,d(i){i&&P(s),i&&t.d()}}}function Gg(e){let t,n,s;const i=[e[2]];var r=e[0].component.src;function o(a){let c={};for(let u=0;u<i.length;u+=1)c=Mi(c,i[u]);return{props:c}}return r&&(t=yo(r,o())),{c(){t&&Jt(t.$$.fragment),n=Ls()},m(a,c){t&&$t(t,a,c),$(a,n,c),s=!0},p(a,c){const u=c&4?Gl(i,[Ql(a[2])]):{};if(c&1&&r!==(r=a[0].component.src)){if(t){Fn();const l=t;ht(l.$$.fragment,1,0,()=>{Vt(l,1)}),$n()}r?(t=yo(r,o()),Jt(t.$$.fragment),J(t.$$.fragment,1),$t(t,n.parentNode,n)):t=null}else r&&t.$set(u)},i(a){s||(t&&J(t.$$.fragment,a),s=!0)},o(a){t&&ht(t.$$.fragment,a),s=!1},d(a){a&&P(n),t&&Vt(t,a)}}}function Aa(e){let t,n,s;return{c(){t=x("div"),C(t,"class","_toastBtn pe svelte-l65oht"),C(t,"role","button"),C(t,"tabindex","0")},m(i,r){$(i,t,r),n||(s=[_t(t,"click",e[4]),_t(t,"keydown",e[8])],n=!0)},p:z,d(i){i&&P(t),n=!1,vt(s)}}}function Qg(e){let t,n,s,i,r,o,a,c,u,l;const h=[Gg,Kg],f=[];function d(m,g){return m[0].component?0:1}s=d(e),i=f[s]=h[s](e);let p=e[0].dismissable&&Aa(e);return{c(){t=x("div"),n=x("div"),i.c(),r=H(),p&&p.c(),o=H(),a=x("progress"),C(n,"role","status"),C(n,"class","_toastMsg svelte-l65oht"),Dt(n,"pe",e[0].component),C(a,"class","_toastBar svelte-l65oht"),a.value=e[1],C(t,"class","_toastItem svelte-l65oht"),Dt(t,"pe",e[0].pausable)},m(m,g){$(m,t,g),R(t,n),f[s].m(n,null),R(t,r),p&&p.m(t,null),R(t,o),R(t,a),c=!0,u||(l=[_t(t,"mouseenter",e[9]),_t(t,"mouseleave",e[6])],u=!0)},p(m,[g]){let E=s;s=d(m),s===E?f[s].p(m,g):(Fn(),ht(f[E],1,1,()=>{f[E]=null}),$n(),i=f[s],i?i.p(m,g):(i=f[s]=h[s](m),i.c()),J(i,1),i.m(n,null)),(!c||g&1)&&Dt(n,"pe",m[0].component),m[0].dismissable?p?p.p(m,g):(p=Aa(m),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||g&2)&&(a.value=m[1]),(!c||g&1)&&Dt(t,"pe",m[0].pausable)},i(m){c||(J(i),c=!0)},o(m){ht(i),c=!1},d(m){m&&P(t),f[s].d(),p&&p.d(),u=!1,vt(l)}}}function Wg(e,t,n){let s,{item:i}=t;const r=Hg(i.initial,{duration:i.duration,easing:ve});Fa(e,r,I=>n(1,s=I));const o=()=>le.pop(i.id),a=()=>{(s===1||s===0)&&o()};let c=i.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(r.set(s,{duration:0}),l=!0)},f=()=>{if(l){const I=i.duration,A=I-I*((s-u)/(c-u));r.set(c,{duration:A}).then(a),l=!1}};let d={};const p=(I,A="undefined")=>typeof I===A;let m;Ll((I=document)=>{if(p(I.hidden))return;const A=()=>I.hidden?h():f(),W="visibilitychange";I.addEventListener(W,A),m=()=>I.removeEventListener(W,A),A()}),Pl(()=>{p(i.onpop,"function")&&i.onpop(i.id),m&&m()});const E=I=>{I instanceof KeyboardEvent&&["Enter"," "].includes(I.key)&&o()},M=()=>{i.pausable&&h()};return e.$$set=I=>{"item"in I&&n(0,i=I.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(i.progress)||n(0,i.next=i.progress,i)),e.$$.dirty&131&&c!==i.next&&(n(7,c=i.next),u=s,l=!1,r.set(c).then(a)),e.$$.dirty&1&&i.component){const{props:I={},sendIdTo:A}=i.component;n(2,d={...I,...A&&{[A]:i.id}})}},[i,s,d,r,o,h,f,c,E,M]}class Yg extends _e{constructor(t){super(),Ee(this,t,Wg,Qg,ne,{item:0})}}function Da(e,t,n){const s=e.slice();return s[5]=t[n],s}function ka(e,t){let n,s,i,r,o,a,c,u,l=z,h;return s=new Yg({props:{item:t[5]}}),{key:e,first:null,c(){n=x("li"),Jt(s.$$.fragment),i=H(),C(n,"class",r=po(t[5].classes.join(" "))+" svelte-yh90az"),C(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){$(f,n,d),$t(s,n,null),R(n,i),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&r!==(r=po(t[5].classes.join(" "))+" svelte-yh90az"))&&C(n,"class",r),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&C(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){Ol(n),l(),Ba(n,u)},a(){l(),l=xl(n,u,jg,{duration:200})},i(f){h||(J(s.$$.fragment,f),Xt(()=>{!h||(c&&c.end(1),a=jl(n,Bg,t[5].intro),a.start())}),h=!0)},o(f){ht(s.$$.fragment,f),a&&a.invalidate(),c=ql(n,Ug,{}),h=!1},d(f){f&&P(n),Vt(s),f&&c&&c.end()}}}function Xg(e){let t,n=[],s=new Map,i,r=e[0];const o=a=>a[5].id;for(let a=0;a<r.length;a+=1){let c=Da(e,r,a),u=o(c);s.set(u,n[a]=ka(u,c))}return{c(){t=x("ul");for(let a=0;a<n.length;a+=1)n[a].c();C(t,"class","_toastContainer svelte-yh90az")},m(a,c){$(a,t,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);i=!0},p(a,[c]){if(c&3){r=a[0],Fn();for(let u=0;u<n.length;u+=1)n[u].r();n=Kl(n,c,o,1,a,r,s,t,Hl,ka,null,Da);for(let u=0;u<n.length;u+=1)n[u].a();$n()}},i(a){if(!i){for(let c=0;c<r.length;c+=1)J(n[c]);i=!0}},o(a){for(let c=0;c<n.length;c+=1)ht(n[c]);i=!1},d(a){a&&P(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function Jg(e,t,n){let s;Fa(e,le,c=>n(4,s=c));let{options:i={}}=t,{target:r="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,i=c.options),"target"in c&&n(3,r=c.target)},e.$$.update=()=>{e.$$.dirty&12&&le._init(r,i),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===r))},[o,a,i,r,s]}class Zg extends _e{constructor(t){super(),Ee(this,t,Jg,Xg,ne,{options:2,target:3})}}function ty(e){const t=n=>{e&&!e.contains(n.target)&&!n.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function Na(e,t,n){const s=e.slice();return s[7]=t[n],s}function Ra(e){let t,n,s,i,r,o,a,c,u,l=e[2],h=[];for(let f=0;f<l.length;f+=1)h[f]=Ma(Na(e,l,f));return{c(){t=x("table"),n=x("caption"),n.textContent="Leaderboard",s=H(),i=x("tr"),i.innerHTML=`<th class="svelte-10fnw22">Name</th> 
            <th class="svelte-10fnw22">Challenges Completed</th>`,r=H();for(let f=0;f<h.length;f+=1)h[f].c();C(n,"class","svelte-10fnw22"),C(i,"class","svelte-10fnw22"),C(t,"class","leaderboard svelte-10fnw22")},m(f,d){$(f,t,d),R(t,n),R(t,s),R(t,i),R(t,r);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(t,null);a=!0,c||(u=[_l(ty.call(null,t)),_t(t,"click_outside",e[3])],c=!0)},p(f,d){if(e=f,d&4){l=e[2];let p;for(p=0;p<l.length;p+=1){const m=Na(e,l,p);h[p]?h[p].p(m,d):(h[p]=Ma(m),h[p].c(),h[p].m(t,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=l.length}},i(f){a||(Xt(()=>{!a||(o||(o=vo(t,Ca,{duration:250,opacity:.5,easing:Ia},!0)),o.run(1))}),a=!0)},o(f){o||(o=vo(t,Ca,{duration:250,opacity:.5,easing:Ia},!1)),o.run(0),a=!1},d(f){f&&P(t),Il(h,f),f&&o&&o.end(),c=!1,vt(u)}}}function Ma(e){let t,n,s=e[7].name+"",i,r,o,a=e[7].challenges_completed+"",c,u;return{c(){t=x("tr"),n=x("td"),i=Mt(s),r=H(),o=x("td"),c=Mt(a),u=H(),C(n,"class","leaderboard-name svelte-10fnw22"),C(o,"class","svelte-10fnw22"),C(t,"class","svelte-10fnw22")},m(l,h){$(l,t,h),R(t,n),R(n,i),R(t,r),R(t,o),R(o,c),R(t,u)},p(l,h){h&4&&s!==(s=l[7].name+"")&&de(i,s),h&4&&a!==(a=l[7].challenges_completed+"")&&de(c,a)},d(l){l&&P(t)}}}function ey(e){let t,n,s,i,r,o,a=e[0]&&Ra(e);return{c(){t=x("div"),t.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-10fnw22"/>',n=H(),a&&a.c(),s=Ls(),C(t,"class","icon svelte-10fnw22")},m(c,u){$(c,t,u),e[6](t),$(c,n,u),a&&a.m(c,u),$(c,s,u),i=!0,r||(o=_t(t,"click",e[3]),r=!0)},p(c,[u]){c[0]?a?(a.p(c,u),u&1&&J(a,1)):(a=Ra(c),a.c(),J(a,1),a.m(s.parentNode,s)):a&&(Fn(),ht(a,1,1,()=>{a=null}),$n())},i(c){i||(J(a),i=!0)},o(c){ht(a),i=!1},d(c){c&&P(t),e[6](null),c&&P(n),a&&a.d(c),c&&P(s),r=!1,o()}}}function ny(e,t,n){let s,{challengeList:i=[]}=t,r={},o=!1,a;function c(){n(0,o=!o),o?n(1,a.style["pointer-events"]="none",a):n(1,a.style["pointer-events"]="all",a)}function u(l){ys[l?"unshift":"push"](()=>{a=l,n(1,a)})}return e.$$set=l=>{"challengeList"in l&&n(4,i=l.challengeList)},e.$$.update=()=>{e.$$.dirty&48&&(n(5,r={}),i.forEach(l=>{l.completed.forEach(h=>{r[h]?n(5,r[h]++,r):n(5,r[h]=1,r)})})),e.$$.dirty&32&&n(2,s=Object.keys(r).map(l=>({name:l,challenges_completed:r[l]})).sort((l,h)=>h.challenges_completed-l.challenges_completed))},[o,a,s,c,i,r,u]}class sy extends _e{constructor(t){super(),Ee(this,t,ny,ey,ne,{challengeList:4})}}function iy(e){let t,n,s,i;return{c(){t=x("p"),n=Mt(e[1]),s=Mt("/"),i=Mt(e[0]),C(t,"id","complete-box"),C(t,"class","card-back svelte-12e28jr"),Dt(t,"done",e[2])},m(r,o){$(r,t,o),R(t,n),R(t,s),R(t,i)},p(r,[o]){o&2&&de(n,r[1]),o&1&&de(i,r[0]),o&4&&Dt(t,"done",r[2])},i:z,o:z,d(r){r&&P(t)}}}function ry(e,t,n){let s,{total:i}=t,{completed:r}=t;return e.$$set=o=>{"total"in o&&n(0,i=o.total),"completed"in o&&n(1,r=o.completed)},e.$$.update=()=>{e.$$.dirty&3&&n(2,s=r===i)},[i,r,s]}class oy extends _e{constructor(t){super(),Ee(this,t,ry,iy,ne,{total:0,completed:1})}}function ay(e){let t,n,s,i,r=e[1].name+"",o,a,c,u,l,h=(e[1].completed.length>0?e[1].completed.join(", "):"Not completed by anyone yet!")+"",f,d,p,m,g,E,M,I;return{c(){t=x("div"),n=x("h2"),n.textContent="Take a photo of...",s=H(),i=x("h1"),o=Mt(r),a=H(),c=x("h2"),c.textContent="Completed by:",u=H(),l=x("h3"),f=Mt(h),d=H(),p=x("div"),m=x("button"),m.innerHTML="<span>\u{1F503}</span>",g=H(),E=x("button"),E.innerHTML="<span>\u2705</span>",C(i,"class","challenge svelte-41iupe"),C(l,"class","svelte-41iupe"),Dt(l,"completers",e[1].completed.length>0),C(t,"class","challenge-block svelte-41iupe"),C(m,"class","svelte-41iupe"),C(E,"class","svelte-41iupe"),C(p,"class","buttons svelte-41iupe")},m(A,W){$(A,t,W),R(t,n),R(t,s),R(t,i),R(i,o),R(t,a),R(t,c),R(t,u),R(t,l),R(l,f),$(A,d,W),$(A,p,W),R(p,m),R(p,g),R(p,E),M||(I=[_t(m,"click",e[4]),_t(E,"click",e[5])],M=!0)},p(A,W){W&2&&r!==(r=A[1].name+"")&&de(o,r),W&2&&h!==(h=(A[1].completed.length>0?A[1].completed.join(", "):"Not completed by anyone yet!")+"")&&de(f,h),W&2&&Dt(l,"completers",A[1].completed.length>0)},d(A){A&&P(t),A&&P(d),A&&P(p),M=!1,vt(I)}}}function cy(e){let t,n,s,i,r,o,a,c,u;return{c(){t=x("h1"),t.textContent="\u{1F389} All challenges completed! \u{1F389}",n=H(),s=x("h2"),s.textContent="Submit your best picture from the game below:",i=H(),r=x("input"),o=H(),a=x("button"),a.innerHTML="<span>\u{1F4F7}</span>",C(t,"class","no-margins svelte-41iupe"),C(r,"type","file"),C(r,"id","fileInput"),C(r,"accept","image/*"),Al(r,"display","none"),C(a,"class","svelte-41iupe")},m(l,h){$(l,t,h),$(l,n,h),$(l,s,h),$(l,i,h),$(l,r,h),$(l,o,h),$(l,a,h),c||(u=[_t(r,"change",e[6]),_t(a,"click",ly)],c=!0)},p:z,d(l){l&&P(t),l&&P(n),l&&P(s),l&&P(i),l&&P(r),l&&P(o),l&&P(a),c=!1,vt(u)}}}function uy(e){let t,n,s,i,r,o,a;t=new oy({props:{total:e[2].length,completed:e[3]}}),s=new sy({props:{challengeList:e[2]}});function c(h,f){if(h[3]==h[2].length)return cy;if(h[1]&&h[1].name&&h[1].completed)return ay}let u=c(e),l=u&&u(e);return{c(){Jt(t.$$.fragment),n=H(),Jt(s.$$.fragment),i=H(),r=x("div"),o=x("div"),l&&l.c(),C(o,"class","heading card-back svelte-41iupe"),Dt(o,"green",e[1].completed.includes(e[0])),C(r,"class","container svelte-41iupe")},m(h,f){$t(t,h,f),$(h,n,f),$t(s,h,f),$(h,i,f),$(h,r,f),R(r,o),l&&l.m(o,null),a=!0},p(h,[f]){const d={};f&4&&(d.total=h[2].length),f&8&&(d.completed=h[3]),t.$set(d);const p={};f&4&&(p.challengeList=h[2]),s.$set(p),u===(u=c(h))&&l?l.p(h,f):(l&&l.d(1),l=u&&u(h),l&&(l.c(),l.m(o,null))),(!a||f&3)&&Dt(o,"green",h[1].completed.includes(h[0]))},i(h){a||(J(t.$$.fragment,h),J(s.$$.fragment,h),a=!0)},o(h){ht(t.$$.fragment,h),ht(s.$$.fragment,h),a=!1},d(h){Vt(t,h),h&&P(n),Vt(s,h),h&&P(i),h&&P(r),l&&l.d()}}}let xa="halloween";function ly(){document.getElementById("fileInput").click()}function hy(e,t,n){let{name:s}=t,i={id:"",name:"Loading...",completed:[]},r=[],o=0,a=null;async function c(){const p="https://discord.com/api/webhooks/1299761910199091360/EOkwoBXqGSZDM1f5PgM1zXhxcyMrDFPAnerH9rIbbsAyK8jGqmkE1sUglH-iFjvBQiNt",m={content:"Team "+s.charAt(0).toUpperCase()+s.slice(1)+" has completed all challenges!"};try{await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})}catch(g){console.error("Error sending Discord notification:",g)}}async function u(){const p="https://discord.com/api/webhooks/1299761910199091360/EOkwoBXqGSZDM1f5PgM1zXhxcyMrDFPAnerH9rIbbsAyK8jGqmkE1sUglH-iFjvBQiNt",m={content:"Team "+s.charAt(0).toUpperCase()+s.slice(1)+" has sent a picture!"},g=new FormData;g.append("payload_json",JSON.stringify(m)),a&&g.append("file",a);try{await fetch(p,{method:"POST",body:g})}catch(E){console.error("Error sending picture to Discord:",E)}}const l=pg(Sa,xa);Lg(l,p=>{n(3,o=0),n(2,r=[]),p.forEach(m=>{r.push({id:m.id,name:m.data().name,completed:m.data().completed}),i&&i.id&&i.id==m.id&&n(1,i={id:m.id,name:m.data().name,completed:m.data().completed}),m.data().completed.includes(s)&&n(3,o+=1)}),(!i||i.name=="Loading...")&&h(),o===r.length&&c()});function h(){const p=r.filter(g=>!g.completed.includes(s)&&g.id!==i.id);if(p.length===0){console.warn("No uncompleted and unique challenges available.");return}const m=Math.floor(Math.random()*p.length);n(1,i=p[m])}async function f(){if(confirm("Mark this challenge as completed?")){if(i.completed.includes(s)){le.push("\u{1F6A7} Challenge already completed!");return}try{const p=mg(Sa,xa,i.id);(await xg(p)).exists()?await Og(p,{completed:Fg(s)}).then(()=>{le.push("\u2705 Challenge completed!"),h()}):le.push("\u{1F6A8} Unable to complete challenge, try again or refresh!")}catch{le.push("\u{1F6A8} Unable to complete challenge, try again or refresh!")}}}function d(p){a=p.target.files[0],u()}return e.$$set=p=>{"name"in p&&n(0,s=p.name)},[s,i,r,o,h,f,d]}class fy extends _e{constructor(t){super(),Ee(this,t,hy,uy,ne,{name:0})}}const yl=(e,t)=>{const n=c=>JSON.stringify(c,null,2),s=JSON.parse;localStorage.getItem(e)===null&&localStorage.setItem(e,n(t));const i=s(localStorage.getItem(e)),{subscribe:r,set:o,update:a}=ho(i);return{subscribe:r,set:c=>(localStorage.setItem(e,n(c)),o(c)),update:a}},vl="",Oa=yl("pc-name",vl);yl("pc-tutorial",vl);function dy(e){let t,n,s,i,r,o,a,c,u;return{c(){t=x("div"),n=x("div"),s=x("label"),s.innerHTML='What&#39;s your team name? <span class="subtitle svelte-1bsenj1"><br/>Make sure it&#39;s unique!</span>',i=H(),r=x("input"),o=H(),a=x("button"),a.textContent="Let's go!",C(s,"for","name-input"),C(s,"class","svelte-1bsenj1"),C(r,"id","name-input"),C(r,"placeholder","Type your team name here!"),C(r,"type","text"),C(r,"class","svelte-1bsenj1"),C(a,"class","svelte-1bsenj1"),C(n,"class","card-back"),C(t,"id","name-container"),C(t,"class","svelte-1bsenj1")},m(l,h){$(l,t,h),R(t,n),R(n,s),R(n,i),R(n,r),go(r,e[1]),R(n,o),R(n,a),c||(u=[_t(r,"input",e[4]),_t(a,"click",e[2])],c=!0)},p(l,h){h&2&&r.value!==l[1]&&go(r,l[1])},d(l){l&&P(t),c=!1,vt(u)}}}function py(e){let t,n,s,i,r,o;return{c(){t=x("p"),n=Mt(e[0]),s=H(),i=x("span"),i.textContent="Change",C(i,"class","svelte-1bsenj1"),C(t,"id","logged-in"),C(t,"class","card-back svelte-1bsenj1")},m(a,c){$(a,t,c),R(t,n),R(t,s),R(t,i),r||(o=_t(i,"click",e[3]),r=!0)},p(a,c){c&1&&de(n,a[0])},d(a){a&&P(t),r=!1,o()}}}function my(e){let t;function n(r,o){return r[0]!=""?py:dy}let s=n(e),i=s(e);return{c(){i.c(),t=Ls()},m(r,o){i.m(r,o),$(r,t,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(t.parentNode,t)))},i:z,o:z,d(r){i.d(r),r&&P(t)}}}function gy(e,t,n){let{nameVal:s}=t;Oa.subscribe(c=>{n(0,s=c)});let i="";function r(){n(1,i=i.toLowerCase()),Oa.set(i)}function o(){n(1,i=""),r()}function a(){i=this.value,n(1,i)}return e.$$set=c=>{"nameVal"in c&&n(0,s=c.nameVal)},[s,i,r,o,a]}class yy extends _e{constructor(t){super(),Ee(this,t,gy,my,ne,{nameVal:0})}}function La(e){let t,n;return t=new fy({props:{name:e[0]}}),{c(){Jt(t.$$.fragment)},m(s,i){$t(t,s,i),n=!0},p(s,i){const r={};i&1&&(r.name=s[0]),t.$set(r)},i(s){n||(J(t.$$.fragment,s),n=!0)},o(s){ht(t.$$.fragment,s),n=!1},d(s){Vt(t,s)}}}function vy(e){let t,n,s,i,r,o;function a(l){e[1](l)}let c={};e[0]!==void 0&&(c.nameVal=e[0]),t=new yy({props:c}),ys.push(()=>Wl(t,"nameVal",a));let u=e[0]!=""&&La(e);return r=new Zg({}),{c(){Jt(t.$$.fragment),s=H(),u&&u.c(),i=H(),Jt(r.$$.fragment)},m(l,h){$t(t,l,h),$(l,s,h),u&&u.m(l,h),$(l,i,h),$t(r,l,h),o=!0},p(l,[h]){const f={};!n&&h&1&&(n=!0,f.nameVal=l[0],Vl(()=>n=!1)),t.$set(f),l[0]!=""?u?(u.p(l,h),h&1&&J(u,1)):(u=La(l),u.c(),J(u,1),u.m(i.parentNode,i)):u&&(Fn(),ht(u,1,1,()=>{u=null}),$n())},i(l){o||(J(t.$$.fragment,l),J(u),J(r.$$.fragment,l),o=!0)},o(l){ht(t.$$.fragment,l),ht(u),ht(r.$$.fragment,l),o=!1},d(l){Vt(t,l),l&&P(s),u&&u.d(l),l&&P(i),Vt(r,l)}}}function wy(e,t,n){let s="";function i(r){s=r,n(0,s)}return[s,i]}class Ey extends _e{constructor(t){super(),Ee(this,t,wy,vy,ne,{})}}new Ey({target:document.getElementById("app")});
