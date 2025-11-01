var fh=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var jv=fh((qv,Os)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Se(){}const wl=t=>t;function ae(t,e){for(const n in e)t[n]=e[n];return t}function El(t){return t()}function Xo(){return Object.create(null)}function gt(t){t.forEach(El)}function Yi(t){return typeof t=="function"}function qe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function dh(t){return Object.keys(t).length===0}function $t(t,e,n,s){if(t){const r=_l(t,e,n,s);return t[0](r)}}function _l(t,e,n,s){return t[1]&&s?ae(n.ctx.slice(),t[1](s(e))):n.ctx}function Ft(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function xt(t,e,n,s,r,i){if(r){const o=_l(e,n,s,i);t.p(o,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Be(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Jo(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function Zo(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const Tl=typeof window<"u";let gh=Tl?()=>window.performance.now():()=>Date.now(),Xi=Tl?t=>requestAnimationFrame(t):Se;const yn=new Set;function Cl(t){yn.forEach(e=>{e.c(t)||(yn.delete(e),e.f())}),yn.size!==0&&Xi(Cl)}function mh(t){let e;return yn.size===0&&Xi(Cl),{promise:new Promise(n=>{yn.add(e={c:t,f:n})}),abort(){yn.delete(e)}}}function T(t,e){t.appendChild(e)}function bl(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ph(t){const e=S("style");return yh(bl(t),e),e.sheet}function yh(t,e){return T(t.head||t,e),e.sheet}function ie(t,e,n){t.insertBefore(e,n||null)}function ne(t){t.parentNode&&t.parentNode.removeChild(t)}function vh(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function Ze(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function it(t){return document.createTextNode(t)}function se(){return it(" ")}function ys(){return it("")}function vt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qs(t,e){for(const n in e)w(t,n,e[n])}function wh(t){return Array.from(t.childNodes)}function Rt(t,e){e=""+e,t.data!==e&&(t.data=e)}function ea(t,e){t.value=e==null?"":e}function ta(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function tt(t,e,n){t.classList[n?"add":"remove"](e)}function Eh(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}const Ys=new Map;let Xs=0;function _h(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Th(t,e){const n={stylesheet:ph(e),rules:{}};return Ys.set(t,n),n}function na(t,e,n,s,r,i,o,a=0){const l=16.666/s;let c=`{
`;for(let y=0;y<=1;y+=l){const C=e+(n-e)*i(y);c+=y*100+`%{${o(C,1-C)}}
`}const u=c+`100% {${o(n,1-n)}}
}`,d=`__svelte_${_h(u)}_${a}`,h=bl(t),{stylesheet:f,rules:m}=Ys.get(h)||Th(h,t);m[d]||(m[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${d} ${s}ms linear ${r}ms 1 both`,Xs+=1,d}function Ch(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),Xs-=r,Xs||bh())}function bh(){Xi(()=>{Xs||(Ys.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ne(e)}),Ys.clear())})}let es;function Wn(t){es=t}function Ih(){if(!es)throw new Error("Function called outside component initialization");return es}function Sh(t){Ih().$$.on_destroy.push(t)}const hn=[],Js=[];let vn=[];const yi=[],kh=Promise.resolve();let vi=!1;function Ah(){vi||(vi=!0,kh.then(Il))}function Yt(t){vn.push(t)}function Dh(t){yi.push(t)}const Xr=new Set;let ln=0;function Il(){if(ln!==0)return;const t=es;do{try{for(;ln<hn.length;){const e=hn[ln];ln++,Wn(e),Nh(e.$$)}}catch(e){throw hn.length=0,ln=0,e}for(Wn(null),hn.length=0,ln=0;Js.length;)Js.pop()();for(let e=0;e<vn.length;e+=1){const n=vn[e];Xr.has(n)||(Xr.add(n),n())}vn.length=0}while(hn.length);for(;yi.length;)yi.pop()();vi=!1,Xr.clear(),Wn(t)}function Nh(t){if(t.fragment!==null){t.update(),gt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Yt)}}function Mh(t){const e=[],n=[];vn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),vn=e}let Bn;function Rh(){return Bn||(Bn=Promise.resolve(),Bn.then(()=>{Bn=null})),Bn}function Jr(t,e,n){t.dispatchEvent(Eh(`${e?"intro":"outro"}${n}`))}const qs=new Set;let pt;function Bt(){pt={r:0,c:[],p:pt}}function Ut(){pt.r||gt(pt.c),pt=pt.p}function M(t,e){t&&t.i&&(qs.delete(t),t.i(e))}function $(t,e,n,s){if(t&&t.o){if(qs.has(t))return;qs.add(t),pt.c.push(()=>{qs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Oh={duration:0};function gn(t,e,n,s){const r={direction:"both"};let i=e(t,n,r),o=s?0:1,a=null,l=null,c=null;function u(){c&&Ch(t,c)}function d(f,m){const v=f.b-o;return m*=Math.abs(v),{a:o,b:f.b,d:v,duration:m,start:f.start,end:f.start+m,group:f.group}}function h(f){const{delay:m=0,duration:v=300,easing:y=wl,tick:C=Se,css:R}=i||Oh,O={start:gh()+m,b:f};f||(O.group=pt,pt.r+=1),a||l?l=O:(R&&(u(),c=na(t,o,f,v,m,y,R)),f&&C(0,1),a=d(O,v),Yt(()=>Jr(t,f,"start")),mh(U=>{if(l&&U>l.start&&(a=d(l,v),l=null,Jr(t,a.b,"start"),R&&(u(),c=na(t,o,a.b,a.duration,0,y,i.css))),a){if(U>=a.end)C(o=a.b,1-o),Jr(t,a.b,"end"),l||(a.b?u():--a.group.r||gt(a.group.c)),a=null;else if(U>=a.start){const ee=U-a.start;o=a.a+a.d*y(ee/a.duration),C(o,1-o)}}return!!(a||l)}))}return{run(f){Yi(i)?Rh().then(()=>{i=i(r),h(f)}):h(f)},end(){u(),a=l=null}}}function Lh(t,e){$(t,1,1,()=>{e.delete(t.key)})}function Ph(t,e,n,s,r,i,o,a,l,c,u,d){let h=t.length,f=i.length,m=h;const v={};for(;m--;)v[t[m].key]=m;const y=[],C=new Map,R=new Map,O=[];for(m=f;m--;){const K=d(r,i,m),k=n(K);let L=o.get(k);L?s&&O.push(()=>L.p(K,e)):(L=c(k,K),L.c()),C.set(k,y[m]=L),k in v&&R.set(k,Math.abs(m-v[k]))}const U=new Set,ee=new Set;function Y(K){M(K,1),K.m(a,u),o.set(K.key,K),u=K.first,f--}for(;h&&f;){const K=y[f-1],k=t[h-1],L=K.key,z=k.key;K===k?(u=K.first,h--,f--):C.has(z)?!o.has(L)||U.has(L)?Y(K):ee.has(z)?h--:R.get(L)>R.get(z)?(ee.add(L),Y(K)):(U.add(z),h--):(l(k,o),h--)}for(;h--;){const K=t[h];C.has(K.key)||l(K,o)}for(;f;)Y(y[f-1]);return gt(O),y}function It(t,e){const n={},s={},r={$$scope:1};let i=t.length;for(;i--;){const o=t[i],a=e[i];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)r[l]||(n[l]=a[l],r[l]=1);t[i]=a}else for(const l in o)r[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function tn(t){return typeof t=="object"&&t!==null?t:{}}function $h(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ge(t){t&&t.c()}function fe(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||Yt(()=>{const o=t.$$.on_mount.map(El).filter(Yi);t.$$.on_destroy?t.$$.on_destroy.push(...o):gt(o),t.$$.on_mount=[]}),i.forEach(Yt)}function de(t,e){const n=t.$$;n.fragment!==null&&(Mh(n.after_update),gt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Fh(t,e){t.$$.dirty[0]===-1&&(hn.push(t),Ah(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xe(t,e,n,s,r,i,o,a=[-1]){const l=es;Wn(t);const c=t.$$={fragment:null,ctx:[],props:i,update:Se,not_equal:r,bound:Xo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Xo(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(d,h,...f)=>{const m=f.length?f[0]:h;return c.ctx&&r(c.ctx[d],c.ctx[d]=m)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](m),u&&Fh(t,d)),h}):[],c.update(),u=!0,gt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=wh(e.target);c.fragment&&c.fragment.l(d),d.forEach(ne)}else c.fragment&&c.fragment.c();e.intro&&M(t.$$.fragment),fe(t,e.target,e.anchor,e.customElement),Il()}Wn(l)}class Je{$destroy(){de(this,1),this.$destroy=Se}$on(e,n){if(!Yi(n))return Se;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!dh(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const Sl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},xh=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(n[u],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||d==null)throw new Vh;const h=i<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bh=function(t){const e=Sl(t);return kl.encodeByteArray(e,!0)},Zs=function(t){return Bh(t).replace(/\./g,"")},Uh=function(t){try{return kl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zh=()=>jh().__FIREBASE_DEFAULTS__,qh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uh(t[1]);return e&&JSON.parse(e)},Al=()=>{try{return zh()||qh()||Hh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kh=t=>{var e,n;return(n=(e=Al())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gh=t=>{const e=Kh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Dl=()=>{var t;return(t=Al())===null||t===void 0?void 0:t.config};/**
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
 */class Wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Qh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zs(JSON.stringify(n)),Zs(JSON.stringify(o)),a].join(".")}function Yh(){try{return typeof indexedDB=="object"}catch{return!1}}function Xh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Jh="FirebaseError";class On extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jh,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}}class Nl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Zh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new On(r,a,s)}}function Zh(t,e){return t.replace(ef,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ef=/\{\$([^}]+)}/g;function wi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(sa(i)&&sa(o)){if(!wi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function sa(t){return t!==null&&typeof t=="object"}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class tf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Wh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sf(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nf(t){return t===Ht?void 0:t}function sf(t){return t.instantiationMode==="EAGER"}/**
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
 */class rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const of={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},af=te.INFO,lf={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},cf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=lf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=af,this._logHandler=cf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?of[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const uf=(t,e)=>e.some(n=>t instanceof n);let ra,ia;function hf(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ff(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rl=new WeakMap,Ei=new WeakMap,Ol=new WeakMap,Zr=new WeakMap,Ji=new WeakMap;function df(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rl.set(n,t)}).catch(()=>{}),Ji.set(e,t),e}function gf(t){if(Ei.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ei.set(t,e)}let _i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ei.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ol.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mf(t){_i=t(_i)}function pf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ei(this),e,...n);return Ol.set(s,e.sort?e.sort():[e]),kt(s)}:ff().includes(t)?function(...e){return t.apply(ei(this),e),kt(Rl.get(this))}:function(...e){return kt(t.apply(ei(this),e))}}function yf(t){return typeof t=="function"?pf(t):(t instanceof IDBTransaction&&gf(t),uf(t,hf())?new Proxy(t,_i):t)}function kt(t){if(t instanceof IDBRequest)return df(t);if(Zr.has(t))return Zr.get(t);const e=yf(t);return e!==t&&(Zr.set(t,e),Ji.set(e,t)),e}const ei=t=>Ji.get(t);function vf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=kt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(kt(o.result),l.oldVersion,l.newVersion,kt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wf=["get","getKey","getAll","getAllKeys","count"],Ef=["put","add","delete","clear"],ti=new Map;function oa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ti.get(e))return ti.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ef.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wf.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ti.set(e,i),i}mf(t=>({...t,get:(e,n,s)=>oa(e,n)||t.get(e,n,s),has:(e,n)=>!!oa(e,n)||t.has(e,n)}));/**
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
 */class _f{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ti="@firebase/app",aa="0.9.13";/**
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
 */const Xt=new Ml("@firebase/app"),Cf="@firebase/app-compat",bf="@firebase/analytics-compat",If="@firebase/analytics",Sf="@firebase/app-check-compat",kf="@firebase/app-check",Af="@firebase/auth",Df="@firebase/auth-compat",Nf="@firebase/database",Mf="@firebase/database-compat",Rf="@firebase/functions",Of="@firebase/functions-compat",Lf="@firebase/installations",Pf="@firebase/installations-compat",$f="@firebase/messaging",Ff="@firebase/messaging-compat",xf="@firebase/performance",Vf="@firebase/performance-compat",Bf="@firebase/remote-config",Uf="@firebase/remote-config-compat",jf="@firebase/storage",zf="@firebase/storage-compat",qf="@firebase/firestore",Hf="@firebase/firestore-compat",Kf="firebase",Gf="9.23.0";/**
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
 */const Ci="[DEFAULT]",Wf={[Ti]:"fire-core",[Cf]:"fire-core-compat",[If]:"fire-analytics",[bf]:"fire-analytics-compat",[kf]:"fire-app-check",[Sf]:"fire-app-check-compat",[Af]:"fire-auth",[Df]:"fire-auth-compat",[Nf]:"fire-rtdb",[Mf]:"fire-rtdb-compat",[Rf]:"fire-fn",[Of]:"fire-fn-compat",[Lf]:"fire-iid",[Pf]:"fire-iid-compat",[$f]:"fire-fcm",[Ff]:"fire-fcm-compat",[xf]:"fire-perf",[Vf]:"fire-perf-compat",[Bf]:"fire-rc",[Uf]:"fire-rc-compat",[jf]:"fire-gcs",[zf]:"fire-gcs-compat",[qf]:"fire-fst",[Hf]:"fire-fst-compat","fire-js":"fire-js",[Kf]:"fire-js-all"};/**
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
 */const er=new Map,bi=new Map;function Qf(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(bi.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;bi.set(e,t);for(const n of er.values())Qf(n,t);return!0}function Yf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Xf={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new Nl("app","Firebase",Xf);/**
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
 */class Jf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const Zf=Gf;function Ll(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ci,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw At.create("bad-app-name",{appName:String(r)});if(n||(n=Dl()),!n)throw At.create("no-options");const i=er.get(r);if(i){if(wi(n,i.options)&&wi(s,i.config))return i;throw At.create("duplicate-app",{appName:r})}const o=new rf(r);for(const l of bi.values())o.addComponent(l);const a=new Jf(n,s,o);return er.set(r,a),a}function ed(t=Ci){const e=er.get(t);if(!e&&t===Ci&&Dl())return Ll();if(!e)throw At.create("no-app",{appName:t});return e}function wn(t,e,n){var s;let r=(s=Wf[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}tr(new ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const td="firebase-heartbeat-database",nd=1,ns="firebase-heartbeat-store";let ni=null;function Pl(){return ni||(ni=vf(td,nd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ns)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),ni}async function sd(t){try{return await(await Pl()).transaction(ns).objectStore(ns).get($l(t))}catch(e){if(e instanceof On)Xt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function la(t,e){try{const s=(await Pl()).transaction(ns,"readwrite");await s.objectStore(ns).put(e,$l(t)),await s.done}catch(n){if(n instanceof On)Xt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(s.message)}}}function $l(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rd=1024,id=30*24*60*60*1e3;class od{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ld(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ca();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=id}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ca(),{heartbeatsToSend:n,unsentEntries:s}=ad(this._heartbeatsCache.heartbeats),r=Zs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ca(){return new Date().toISOString().substring(0,10)}function ad(t,e=rd){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ua(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ua(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ld{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yh()?Xh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ua(t){return Zs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cd(t){tr(new ts("platform-logger",e=>new _f(e),"PRIVATE")),tr(new ts("heartbeat",e=>new od(e),"PRIVATE")),wn(Ti,aa,t),wn(Ti,aa,"esm2017"),wn("fire-js","")}cd("");var ud="firebase",hd="9.23.0";/**
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
 */wn(ud,hd,"app");var fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Zi=Zi||{},V=fd||self;function yr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dd(t){return Object.prototype.hasOwnProperty.call(t,si)&&t[si]||(t[si]=++gd)}var si="closure_uid_"+(1e9*Math.random()>>>0),gd=0;function md(t,e,n){return t.call.apply(t.bind,arguments)}function pd(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=md:Fe=pd,Fe.apply(null,arguments)}function Ps(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function jt(){this.s=this.s,this.o=this.o}var yd=0;jt.prototype.s=!1;jt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yd!=0)&&dd(this)};jt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function eo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ha(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(yr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var vd=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",()=>{},e),V.removeEventListener("test",()=>{},e)}catch{}return t}();function ss(t){return/^[\s\xa0]*$/.test(t)}function vr(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function lt(t){return vr().indexOf(t)!=-1}function to(t){return to[" "](t),t}to[" "]=function(){};function wd(t,e){var n=hg;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Ed=lt("Opera"),bn=lt("Trident")||lt("MSIE"),xl=lt("Edge"),Ii=xl||bn,Vl=lt("Gecko")&&!(vr().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge"))&&!(lt("Trident")||lt("MSIE"))&&!lt("Edge"),_d=vr().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge");function Bl(){var t=V.document;return t?t.documentMode:void 0}var Si;e:{var ri="",ii=function(){var t=vr();if(Vl)return/rv:([^\);]+)(\)|;)/.exec(t);if(xl)return/Edge\/([\d\.]+)/.exec(t);if(bn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_d)return/WebKit\/(\S+)/.exec(t);if(Ed)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ii&&(ri=ii?ii[1]:""),bn){var oi=Bl();if(oi!=null&&oi>parseFloat(ri)){Si=String(oi);break e}}Si=ri}var ki;if(V.document&&bn){var fa=Bl();ki=fa||parseInt(Si,10)||void 0}else ki=void 0;var Td=ki;function rs(t,e){if(xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vl){e:{try{to(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Cd[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rs.$.h.call(this)}}Ae(rs,xe);var Cd={2:"touch",3:"pen",4:"mouse"};rs.prototype.h=function(){rs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ws="closure_listenable_"+(1e6*Math.random()|0),bd=0;function Id(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++bd,this.fa=this.ia=!1}function wr(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function no(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Sd(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ul(t){const e={};for(const n in t)e[n]=t[n];return e}const da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jl(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<da.length;i++)n=da[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Er(t){this.src=t,this.g={},this.h=0}Er.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Di(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Id(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Ai(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Fl(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(wr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Di(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var so="closure_lm_"+(1e6*Math.random()|0),ai={};function zl(t,e,n,s,r){if(s&&s.once)return Hl(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)zl(t,e[i],n,s,r);return null}return n=oo(n),t&&t[ws]?t.O(e,n,vs(s)?!!s.capture:!!s,r):ql(t,e,n,!1,s,r)}function ql(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=vs(r)?!!r.capture:!!r,a=io(t);if(a||(t[so]=a=new Er(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=kd(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)vd||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Gl(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kd(){function t(n){return e.call(t.src,t.listener,n)}const e=Ad;return t}function Hl(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hl(t,e[i],n,s,r);return null}return n=oo(n),t&&t[ws]?t.P(e,n,vs(s)?!!s.capture:!!s,r):ql(t,e,n,!0,s,r)}function Kl(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Kl(t,e[i],n,s,r);else s=vs(s)?!!s.capture:!!s,n=oo(n),t&&t[ws]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Di(i,n,s,r),-1<n&&(wr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=io(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Di(e,n,s,r)),(n=-1<t?e[t]:null)&&ro(n))}function ro(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ws])Ai(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Gl(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=io(e))?(Ai(n,t),n.h==0&&(n.src=null,e[so]=null)):wr(t)}}}function Gl(t){return t in ai?ai[t]:ai[t]="on"+t}function Ad(t,e){if(t.fa)t=!0;else{e=new rs(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ro(t),t=n.call(s,e)}return t}function io(t){return t=t[so],t instanceof Er?t:null}var li="__closure_events_fn_"+(1e9*Math.random()>>>0);function oo(t){return typeof t=="function"?t:(t[li]||(t[li]=function(e){return t.handleEvent(e)}),t[li])}function ke(){jt.call(this),this.i=new Er(this),this.S=this,this.J=null}Ae(ke,jt);ke.prototype[ws]=!0;ke.prototype.removeEventListener=function(t,e,n,s){Kl(this,t,e,n,s)};function Re(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new xe(e,t);else if(e instanceof xe)e.target=e.target||t;else{var r=e;e=new xe(s,t),jl(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=$s(o,s,!0,e)&&r}if(o=e.g=t,r=$s(o,s,!0,e)&&r,r=$s(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=$s(o,s,!1,e)&&r}ke.prototype.N=function(){if(ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)wr(n[s]);delete t.g[e],t.h--}}this.J=null};ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ke.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function $s(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ai(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var ao=V.JSON.stringify;class Dd{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Nd(){var t=lo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Md{constructor(){this.h=this.g=null}add(e,n){const s=Wl.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Wl=new Dd(()=>new Rd,t=>t.reset());class Rd{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Od(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ld(t){V.setTimeout(()=>{throw t},0)}let is,os=!1,lo=new Md,Ql=()=>{const t=V.Promise.resolve(void 0);is=()=>{t.then(Pd)}};var Pd=()=>{for(var t;t=Nd();){try{t.h.call(t.g)}catch(n){Ld(n)}var e=Wl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}os=!1};function _r(t,e){ke.call(this),this.h=t||1,this.g=e||V,this.j=Fe(this.qb,this),this.l=Date.now()}Ae(_r,ke);b=_r.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Re(this,"tick"),this.ga&&(co(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function co(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}b.N=function(){_r.$.N.call(this),co(this),delete this.g};function uo(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function Yl(t){t.g=uo(()=>{t.g=null,t.i&&(t.i=!1,Yl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $d extends jt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yl(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(t){jt.call(this),this.h=t,this.g={}}Ae(as,jt);var ga=[];function Xl(t,e,n,s){Array.isArray(n)||(n&&(ga[0]=n.toString()),n=ga);for(var r=0;r<n.length;r++){var i=zl(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Jl(t){no(t.g,function(e,n){this.g.hasOwnProperty(n)&&ro(e)},t),t.g={}}as.prototype.N=function(){as.$.N.call(this),Jl(this)};as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tr(){this.g=!0}Tr.prototype.Ea=function(){this.g=!1};function Fd(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function xd(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function mn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Bd(t,n)+(s?" "+s:"")})}function Vd(t,e){t.info(function(){return"TIMEOUT: "+e})}Tr.prototype.info=function(){};function Bd(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ao(n)}catch{return e}}var nn={},ma=null;function Cr(){return ma=ma||new ke}nn.Ta="serverreachability";function Zl(t){xe.call(this,nn.Ta,t)}Ae(Zl,xe);function ls(t){const e=Cr();Re(e,new Zl(e))}nn.STAT_EVENT="statevent";function ec(t,e){xe.call(this,nn.STAT_EVENT,t),this.stat=e}Ae(ec,xe);function ze(t){const e=Cr();Re(e,new ec(e,t))}nn.Ua="timingevent";function tc(t,e){xe.call(this,nn.Ua,t),this.size=e}Ae(tc,xe);function Es(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var br={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ho(){}ho.prototype.h=null;function pa(t){return t.h||(t.h=t.i())}function sc(){}var _s={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fo(){xe.call(this,"d")}Ae(fo,xe);function go(){xe.call(this,"c")}Ae(go,xe);var Ni;function Ir(){}Ae(Ir,ho);Ir.prototype.g=function(){return new XMLHttpRequest};Ir.prototype.i=function(){return{}};Ni=new Ir;function Ts(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new as(this),this.P=Ud,t=Ii?125:void 0,this.V=new _r(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new rc}function rc(){this.i=null,this.g="",this.h=!1}var Ud=45e3,Mi={},nr={};b=Ts.prototype;b.setTimeout=function(t){this.P=t};function Ri(t,e,n){t.L=1,t.v=kr(_t(e)),t.s=n,t.S=!0,ic(t,null)}function ic(t,e){t.G=Date.now(),Cs(t),t.A=_t(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),dc(n.i,"t",s),t.C=0,n=t.l.J,t.h=new rc,t.g=Lc(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $d(Fe(t.Pa,t,t.g),t.O)),Xl(t.U,t.g,"readystatechange",t.nb),e=t.I?Ul(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ls(),Fd(t.j,t.u,t.A,t.m,t.W,t.s)}b.nb=function(t){t=t.target;const e=this.M;e&&ct(t)==3?e.l():this.Pa(t)};b.Pa=function(t){try{if(t==this.g)e:{const u=ct(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||Ii||this.g&&(this.h.h||this.g.ja()||Ea(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?ls(3):ls(2)),Sr(this);var n=this.g.da();this.ca=n;t:if(oc(this)){var s=Ea(this.g);t="";var r=s.length,i=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),Qn(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xd(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ss(a)){var c=a;break t}}c=null}if(n=c)mn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oi(this,n);else{this.i=!1,this.o=3,ze(12),Kt(this),Qn(this);break e}}this.S?(ac(this,u,o),Ii&&this.i&&u==3&&(Xl(this.U,this.V,"tick",this.mb),this.V.start())):(mn(this.j,this.m,o,null),Oi(this,o)),u==4&&Kt(this),this.i&&!this.J&&(u==4?Nc(this.l,this):(this.i=!1,Cs(this)))}else lg(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),Kt(this),Qn(this)}}}catch{}finally{}};function oc(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ac(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=jd(t,n),r==nr){e==4&&(t.o=4,ze(14),s=!1),mn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Mi){t.o=4,ze(15),mn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else mn(t.j,t.m,r,null),Oi(t,r);oc(t)&&r!=nr&&r!=Mi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eo(e),e.M=!0,ze(11))):(mn(t.j,t.m,n,"[Invalid Chunked Response]"),Kt(t),Qn(t))}b.mb=function(){if(this.g){var t=ct(this.g),e=this.g.ja();this.C<e.length&&(Sr(this),ac(this,t,e),this.i&&t!=4&&Cs(this))}};function jd(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?nr:(n=Number(e.substring(n,s)),isNaN(n)?Mi:(s+=1,s+n>e.length?nr:(e=e.slice(s,s+n),t.C=s+n,e)))}b.cancel=function(){this.J=!0,Kt(this)};function Cs(t){t.Y=Date.now()+t.P,lc(t,t.P)}function lc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Es(Fe(t.lb,t),e)}function Sr(t){t.B&&(V.clearTimeout(t.B),t.B=null)}b.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Vd(this.j,this.A),this.L!=2&&(ls(),ze(17)),Kt(this),this.o=2,Qn(this)):lc(this,this.Y-t)};function Qn(t){t.l.H==0||t.J||Nc(t.l,t)}function Kt(t){Sr(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,co(t.V),Jl(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Oi(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Li(n.i,t))){if(!t.K&&Li(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ir(n),Nr(n);else break e;wo(n),ze(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Es(Fe(n.ib,n),6e3));if(1>=pc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Gt(n,11)}else if((t.K||n.g==t)&&ir(n),!ss(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(mo(i,i.h),i.h=null))}if(s.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,ce(s.I,s.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Oc(s,s.J?s.pa:null,s.Y),o.K){yc(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Sr(a),Cs(a)),s.g=o}else Ac(s);0<n.j.length&&Mr(n)}else c[0]!="stop"&&c[0]!="close"||Gt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Gt(n,7):vo(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ls(4)}catch{}}function zd(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function qd(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function cc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qd(t),s=zd(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var uc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hd(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Qt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qt){this.h=t.h,sr(this,t.j),this.s=t.s,this.g=t.g,rr(this,t.m),this.l=t.l;var e=t.i,n=new cs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ya(this,n),this.o=t.o}else t&&(e=String(t).match(uc))?(this.h=!1,sr(this,e[1]||"",!0),this.s=zn(e[2]||""),this.g=zn(e[3]||"",!0),rr(this,e[4]),this.l=zn(e[5]||"",!0),ya(this,e[6]||"",!0),this.o=zn(e[7]||"")):(this.h=!1,this.i=new cs(null,this.h))}Qt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qn(e,va,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qn(e,va,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qn(n,n.charAt(0)=="/"?Wd:Gd,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qn(n,Yd)),t.join("")};function _t(t){return new Qt(t)}function sr(t,e,n){t.j=n?zn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ya(t,e,n){e instanceof cs?(t.i=e,Xd(t.i,t.h)):(n||(e=qn(e,Qd)),t.i=new cs(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function kr(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Kd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Kd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var va=/[#\/\?@]/g,Gd=/[#\?:]/g,Wd=/[#\?]/g,Qd=/[#\?@]/g,Yd=/#/g;function cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zt(t){t.g||(t.g=new Map,t.h=0,t.i&&Hd(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=cs.prototype;b.add=function(t,e){zt(this),this.i=null,t=Ln(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hc(t,e){zt(t),e=Ln(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fc(t,e){return zt(t),e=Ln(t,e),t.g.has(e)}b.forEach=function(t,e){zt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};b.ta=function(){zt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};b.Z=function(t){zt(this);let e=[];if(typeof t=="string")fc(this,t)&&(e=e.concat(this.g.get(Ln(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return zt(this),this.i=null,t=Ln(this,t),fc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function dc(t,e,n){hc(t,e),0<n.length&&(t.i=null,t.g.set(Ln(t,e),eo(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ln(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Xd(t,e){e&&!t.j&&(zt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(hc(this,s),dc(this,r,n))},t)),t.j=e}var Jd=class{constructor(t,e){this.g=t,this.map=e}};function gc(t){this.l=t||Zd,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zd=10;function mc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pc(t){return t.h?1:t.g?t.g.size:0}function Li(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mo(t,e){t.g?t.g.add(e):t.h=e}function yc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}gc.prototype.cancel=function(){if(this.i=vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vc(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return eo(t.i)}var eg=class{stringify(t){return V.JSON.stringify(t,void 0)}parse(t){return V.JSON.parse(t,void 0)}};function tg(){this.g=new eg}function ng(t,e,n){const s=n||"";try{cc(t,function(r,i){let o=r;vs(r)&&(o=ao(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function sg(t,e){const n=new Tr;if(V.Image){const s=new Image;s.onload=Ps(Fs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ps(Fs,n,s,"TestLoadImage: error",!1,e),s.onabort=Ps(Fs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ps(Fs,n,s,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Fs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function bs(t){this.l=t.fc||null,this.j=t.ob||!1}Ae(bs,ho);bs.prototype.g=function(){return new Ar(this.l,this.j)};bs.prototype.i=function(t){return function(){return t}}({});function Ar(t,e){ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=po,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(Ar,ke);var po=0;b=Ar.prototype;b.open=function(t,e){if(this.readyState!=po)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,us(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=po};b.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wc(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function wc(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}b.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Is(this):us(this),this.readyState==3&&wc(this)}};b.Za=function(t){this.g&&(this.response=this.responseText=t,Is(this))};b.Ya=function(t){this.g&&(this.response=t,Is(this))};b.ka=function(){this.g&&Is(this)};function Is(t){t.readyState=4,t.l=null,t.j=null,t.A=null,us(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var rg=V.JSON.parse;function ve(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ec,this.L=this.M=!1}Ae(ve,ke);var Ec="",ig=/^https?$/i,og=["POST","PUT"];b=ve.prototype;b.Oa=function(t){this.M=t};b.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ni.g(),this.C=this.u?pa(this.u):pa(Ni),this.g.onreadystatechange=Fe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){wa(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=V.FormData&&t instanceof V.FormData,!(0<=Fl(og,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Cc(this),0<this.B&&((this.L=ag(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.ua,this)):this.A=uo(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){wa(this,i)}};function ag(t){return bn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.ua=function(){typeof Zi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function wa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_c(t),Dr(t)}function _c(t){t.F||(t.F=!0,Re(t,"complete"),Re(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),Dr(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dr(this,!0)),ve.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?Tc(this):this.kb())};b.kb=function(){Tc(this)};function Tc(t){if(t.h&&typeof Zi<"u"&&(!t.C[1]||ct(t)!=4||t.da()!=2)){if(t.v&&ct(t)==4)uo(t.La,0,t);else if(Re(t,"readystatechange"),ct(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(uc)[1]||null;!r&&V.self&&V.self.location&&(r=V.self.location.protocol.slice(0,-1)),s=!ig.test(r?r.toLowerCase():"")}n=s}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var i=2<ct(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",_c(t)}}finally{Dr(t)}}}}function Dr(t,e){if(t.g){Cc(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=s}catch{}}}function Cc(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}b.isActive=function(){return!!this.g};function ct(t){return t.g?t.g.readyState:0}b.da=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),rg(e)}};function Ea(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ec:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function lg(t){const e={};t=(t.g&&2<=ct(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(ss(t[s]))continue;var n=Od(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}Sd(e,function(s){return s.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bc(t){let e="";return no(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function yo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=bc(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function Un(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ic(t){this.Ga=0,this.j=[],this.l=new Tr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Un("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Un("baseRetryDelayMs",5e3,t),this.hb=Un("retryDelaySeedMs",1e4,t),this.eb=Un("forwardChannelMaxRetries",2,t),this.xa=Un("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new gc(t&&t.concurrentRequestLimit),this.Ja=new tg,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=Ic.prototype;b.ra=8;b.H=1;function vo(t){if(Sc(t),t.H==3){var e=t.W++,n=_t(t.I);if(ce(n,"SID",t.K),ce(n,"RID",e),ce(n,"TYPE","terminate"),Ss(t,n),e=new Ts(t,t.l,e),e.L=2,e.v=kr(_t(n)),n=!1,V.navigator&&V.navigator.sendBeacon)try{n=V.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lc(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Cs(e)}Rc(t)}function Nr(t){t.g&&(Eo(t),t.g.cancel(),t.g=null)}function Sc(t){Nr(t),t.u&&(V.clearTimeout(t.u),t.u=null),ir(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Mr(t){if(!mc(t.i)&&!t.m){t.m=!0;var e=t.Na;is||Ql(),os||(is(),os=!0),lo.add(e,t),t.C=0}}function cg(t,e){return pc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Es(Fe(t.Na,t,e),Mc(t,t.C)),t.C++,!0)}b.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ts(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Ul(i),jl(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=kc(this,r,e),n=_t(this.I),ce(n,"RID",t),ce(n,"CVER",22),this.F&&ce(n,"X-HTTP-Session-Id",this.F),Ss(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(bc(i)))+"&"+e:this.o&&yo(n,this.o,i)),mo(this.i,r),this.bb&&ce(n,"TYPE","init"),this.P?(ce(n,"$req",e),ce(n,"SID","null"),r.aa=!0,Ri(r,n,null)):Ri(r,n,e),this.H=2}}else this.H==3&&(t?_a(this,t):this.j.length==0||mc(this.i)||_a(this))};function _a(t,e){var n;e?n=e.m:n=t.W++;const s=_t(t.I);ce(s,"SID",t.K),ce(s,"RID",n),ce(s,"AID",t.V),Ss(t,s),t.o&&t.s&&yo(s,t.o,t.s),n=new Ts(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=kc(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mo(t.i,n),Ri(n,s,e)}function Ss(t,e){t.na&&no(t.na,function(n,s){ce(e,s,n)}),t.h&&cc({},function(n,s){ce(e,s,n)})}function kc(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Fe(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{ng(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Ac(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;is||Ql(),os||(is(),os=!0),lo.add(e,t),t.A=0}}function wo(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Es(Fe(t.Ma,t),Mc(t,t.A)),t.A++,!0)}b.Ma=function(){if(this.u=null,Dc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Es(Fe(this.jb,this),t)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ze(10),Nr(this),Dc(this))};function Eo(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function Dc(t){t.g=new Ts(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_t(t.wa);ce(e,"RID","rpc"),ce(e,"SID",t.K),ce(e,"AID",t.V),ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ce(e,"TO",t.qa),ce(e,"TYPE","xmlhttp"),Ss(t,e),t.o&&t.s&&yo(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=kr(_t(e)),n.s=null,n.S=!0,ic(n,t)}b.ib=function(){this.v!=null&&(this.v=null,Nr(this),wo(this),ze(19))};function ir(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function Nc(t,e){var n=null;if(t.g==e){ir(t),Eo(t),t.g=null;var s=2}else if(Li(t.i,e))n=e.F,yc(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Cr(),Re(s,new tc(s,n)),Mr(t)}else Ac(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&cg(t,e)||s==2&&wo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Gt(t,5);break;case 4:Gt(t,10);break;case 3:Gt(t,6);break;default:Gt(t,2)}}}function Mc(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Gt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Fe(t.pb,t);n||(n=new Qt("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||sr(n,"https"),kr(n)),sg(n.toString(),s)}else ze(2);t.H=0,t.h&&t.h.za(e),Rc(t),Sc(t)}b.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ze(2)):(this.l.info("Failed to ping google.com"),ze(1))};function Rc(t){if(t.H=0,t.ma=[],t.h){const e=vc(t.i);(e.length!=0||t.j.length!=0)&&(ha(t.ma,e),ha(t.ma,t.j),t.i.i.length=0,eo(t.j),t.j.length=0),t.h.ya()}}function Oc(t,e,n){var s=n instanceof Qt?_t(n):new Qt(n);if(s.g!="")e&&(s.g=e+"."+s.g),rr(s,s.m);else{var r=V.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Qt(null);s&&sr(i,s),e&&(i.g=e),r&&rr(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&ce(s,n,e),ce(s,"VER",t.ra),Ss(t,s),s}function Lc(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ve(new bs({ob:!0})):new ve(t.va),e.Oa(t.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function Pc(){}b=Pc.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function or(){if(bn&&!(10<=Number(Td)))throw Error("Environmental error: no available transport.")}or.prototype.g=function(t,e){return new Ye(t,e)};function Ye(t,e){ke.call(this),this.g=new Ic(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ss(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ss(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pn(this)}Ae(Ye,ke);Ye.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Oc(t,null,t.Y),Mr(t)};Ye.prototype.close=function(){vo(this.g)};Ye.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ao(t),t=n);e.j.push(new Jd(e.fb++,t)),e.H==3&&Mr(e)};Ye.prototype.N=function(){this.g.h=null,delete this.j,vo(this.g),delete this.g,Ye.$.N.call(this)};function $c(t){fo.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae($c,fo);function Fc(){go.call(this),this.status=1}Ae(Fc,go);function Pn(t){this.g=t}Ae(Pn,Pc);Pn.prototype.Ba=function(){Re(this.g,"a")};Pn.prototype.Aa=function(t){Re(this.g,new $c(t))};Pn.prototype.za=function(t){Re(this.g,new Fc)};Pn.prototype.ya=function(){Re(this.g,"b")};function ug(){this.blockSize=-1}function ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ae(ot,ug);ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ci(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}ot.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)ci(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){ci(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){ci(this,s),r=0;break}}this.h=r,this.i+=e};ot.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function re(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var hg={};function _o(t){return-128<=t&&128>t?wd(t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function ut(t){if(isNaN(t)||!isFinite(t))return En;if(0>t)return Me(ut(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Pi;return new re(e,0)}function xc(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(xc(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ut(Math.pow(e,8)),s=En,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=ut(Math.pow(e,i)),s=s.R(i).add(ut(o))):(s=s.R(n),s=s.add(ut(o)))}return s}var Pi=4294967296,En=_o(0),$i=_o(1),Ta=_o(16777216);b=re.prototype;b.ea=function(){if(et(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Pi+s)*e,e*=Pi}return t};b.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(yt(this))return"0";if(et(this))return"-"+Me(this).toString(t);for(var e=ut(Math.pow(t,6)),n=this,s="";;){var r=lr(n,e).g;n=ar(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,yt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};b.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function yt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function et(t){return t.h==-1}b.X=function(t){return t=ar(this,t),et(t)?-1:yt(t)?0:1};function Me(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new re(n,~t.h).add($i)}b.abs=function(){return et(this)?Me(this):this};b.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new re(n,n[n.length-1]&-2147483648?-1:0)};function ar(t,e){return t.add(Me(e))}b.R=function(t){if(yt(this)||yt(t))return En;if(et(this))return et(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(et(t))return Me(this.R(Me(t)));if(0>this.X(Ta)&&0>t.X(Ta))return ut(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,xs(n,2*s+2*r),n[2*s+2*r+1]+=i*l,xs(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,xs(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,xs(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new re(n,0)};function xs(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function jn(t,e){this.g=t,this.h=e}function lr(t,e){if(yt(e))throw Error("division by zero");if(yt(t))return new jn(En,En);if(et(t))return e=lr(Me(t),e),new jn(Me(e.g),Me(e.h));if(et(e))return e=lr(t,Me(e)),new jn(Me(e.g),e.h);if(30<t.g.length){if(et(t)||et(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$i,s=e;0>=s.X(t);)n=Ca(n),s=Ca(s);var r=cn(n,1),i=cn(s,1);for(s=cn(s,2),n=cn(n,2);!yt(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=cn(s,1),n=cn(n,1)}return e=ar(t,r.R(e)),new jn(r,e)}for(r=En;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=ut(n),o=i.R(e);et(o)||0<o.X(t);)n-=s,i=ut(n),o=i.R(e);yt(i)&&(i=$i),r=r.add(i),t=ar(t,o)}return new jn(r,t)}b.gb=function(t){return lr(this,t).h};b.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new re(n,this.h&t.h)};b.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new re(n,this.h|t.h)};b.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new re(n,this.h^t.h)};function Ca(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new re(n,t.h)}function cn(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new re(r,t.h)}or.prototype.createWebChannel=or.prototype.g;Ye.prototype.send=Ye.prototype.u;Ye.prototype.open=Ye.prototype.m;Ye.prototype.close=Ye.prototype.close;br.NO_ERROR=0;br.TIMEOUT=8;br.HTTP_ERROR=6;nc.COMPLETE="complete";sc.EventType=_s;_s.OPEN="a";_s.CLOSE="b";_s.ERROR="c";_s.MESSAGE="d";ke.prototype.listen=ke.prototype.O;ve.prototype.listenOnce=ve.prototype.P;ve.prototype.getLastError=ve.prototype.Sa;ve.prototype.getLastErrorCode=ve.prototype.Ia;ve.prototype.getStatus=ve.prototype.da;ve.prototype.getResponseJson=ve.prototype.Wa;ve.prototype.getResponseText=ve.prototype.ja;ve.prototype.send=ve.prototype.ha;ve.prototype.setWithCredentials=ve.prototype.Oa;ot.prototype.digest=ot.prototype.l;ot.prototype.reset=ot.prototype.reset;ot.prototype.update=ot.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=ut;re.fromString=xc;var fg=function(){return new or},dg=function(){return Cr()},ui=br,gg=nc,mg=nn,ba={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pg=bs,Vs=sc,yg=ve,vg=ot,_n=re;const Ia="@firebase/firestore";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let $n="9.23.0";/**
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
 */const Jt=new Ml("@firebase/firestore");function Sa(){return Jt.logLevel}function I(t,...e){if(Jt.logLevel<=te.DEBUG){const n=e.map(To);Jt.debug(`Firestore (${$n}): ${t}`,...n)}}function Tt(t,...e){if(Jt.logLevel<=te.ERROR){const n=e.map(To);Jt.error(`Firestore (${$n}): ${t}`,...n)}}function In(t,...e){if(Jt.logLevel<=te.WARN){const n=e.map(To);Jt.warn(`Firestore (${$n}): ${t}`,...n)}}function To(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${$n}) INTERNAL ASSERTION FAILED: `+t;throw Tt(e),new Error(e)}function ue(t,e){t||F()}function j(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class Eg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _g{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ue(typeof s.accessToken=="string"),new Vc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Le(e)}}class Tg{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Cg{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Tg(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ig{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,I("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.T=n.token,new bg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Sg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Bc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Sg(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Z(t,e){return t<e?-1:t>e?1:0}function Sn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new be(0,0))}static max(){return new B(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hs{constructor(e,n,s){n===void 0?n=0:n>e.length&&F(),s===void 0?s=e.length-n:s>e.length-n&&F(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return hs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends hs{construct(e,n,s){return new he(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new he(n)}static emptyPath(){return new he([])}}const kg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends hs{construct(e,n,s){return new $e(e,n,s)}static isValidIdentifier(e){return kg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new A(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new A(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(he.fromString(e))}static fromName(e){return new N(he.fromString(e).popFirst(5))}static empty(){return new N(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new he(e.slice()))}}function Ag(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=B.fromTimestamp(s===1e9?new be(n+1,0):new be(n,s));return new Ot(r,N.empty(),e)}function Dg(t){return new Ot(t.readTime,t.key,-1)}class Ot{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ot(B.min(),N.empty(),-1)}static max(){return new Ot(B.max(),N.empty(),-1)}}function Ng(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const Mg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ks(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Mg)throw t;I("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,s)=>{n(e)})}static reject(e){return new _((n,s)=>{s(e)})}static waitFor(e){return new _((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=_.resolve(!1);for(const s of e)n=n.next(r=>r?_.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new _((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new _((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function As(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Co{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Co.ct=-1;function Rr(t){return t==null}function cr(t){return t===0&&1/t==-1/0}function Og(t){return typeof t=="number"&&Number.isInteger(t)&&!cr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ka(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Uc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class me{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bs(this.root,e,this.comparator,!0)}}class Bs{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ne.RED,this.left=r!=null?r:Ne.EMPTY,this.right=i!=null?i:Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ne(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ne.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Aa(this.data.getIterator())}getIteratorFrom(e){return new Aa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Aa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new rt([])}unionWith(e){let n=new Ve($e.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Sn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class jc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new jc("Invalid base64 string: "+r):r}}(e);return new Ue(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const Lg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(t){if(ue(!!t),typeof t=="string"){let e=0;const n=Lg.exec(t);if(ue(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zt(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
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
 */function bo(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Io(t){const e=t.mapValue.fields.__previous_value__;return bo(e)?Io(e):e}function fs(t){const e=Lt(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class Pg{constructor(e,n,s,r,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ds{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ds("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ds&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Us={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function en(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bo(t)?4:$g(t)?9007199254740991:10:F()}function ft(t,e){if(t===e)return!0;const n=en(t);if(n!==en(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fs(t).isEqual(fs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Lt(s.timestampValue),o=Lt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Zt(s.bytesValue).isEqual(Zt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Te(s.geoPointValue.latitude)===Te(r.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Te(s.integerValue)===Te(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Te(s.doubleValue),o=Te(r.doubleValue);return i===o?cr(i)===cr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Sn(t.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ka(i)!==ka(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ft(i[a],o[a])))return!1;return!0}(t,e);default:return F()}}function gs(t,e){return(t.values||[]).find(n=>ft(n,e))!==void 0}function kn(t,e){if(t===e)return 0;const n=en(t),s=en(e);if(n!==s)return Z(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Te(r.integerValue||r.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Da(t.timestampValue,e.timestampValue);case 4:return Da(fs(t),fs(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Zt(r),a=Zt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Z(o[l],a[l]);if(c!==0)return c}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Z(Te(r.latitude),Te(i.latitude));return o!==0?o:Z(Te(r.longitude),Te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=kn(o[l],a[l]);if(c)return c}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Us.mapValue&&i===Us.mapValue)return 0;if(r===Us.mapValue)return 1;if(i===Us.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=Z(a[u],c[u]);if(d!==0)return d;const h=kn(o[a[u]],l[c[u]]);if(h!==0)return h}return Z(a.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function Da(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Lt(t),s=Lt(e),r=Z(n.seconds,s.seconds);return r!==0?r:Z(n.nanos,s.nanos)}function An(t){return Fi(t)}function Fi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Lt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,N.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Fi(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Fi(s.fields[a])}`;return i+"}"}(t.mapValue):F();var e,n}function xi(t){return!!t&&"integerValue"in t}function So(t){return!!t&&"arrayValue"in t}function Na(t){return!!t&&"nullValue"in t}function Ma(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hs(t){return!!t&&"mapValue"in t}function Yn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $g(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Hs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yn(n)}setAll(e){let n=$e.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Yn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Hs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Hs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){sn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Qe(Yn(this.value))}}function zc(t){const e=[];return sn(t.fields,(n,s)=>{const r=new $e([n]);if(Hs(s)){const i=zc(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new rt(e)}/**
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
 */class Pe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,B.min(),B.min(),B.min(),Qe.empty(),0)}static newFoundDocument(e,n,s,r){return new Pe(e,1,n,B.min(),s,r,0)}static newNoDocument(e,n){return new Pe(e,2,n,B.min(),B.min(),Qe.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,B.min(),B.min(),Qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ur{constructor(e,n){this.position=e,this.inclusive=n}}function Ra(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=N.comparator(N.fromName(o.referenceValue),n.key):s=kn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oa(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ft(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qc{}class Ce extends qc{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Vg(e,n,s):n==="array-contains"?new jg(e,s):n==="in"?new zg(e,s):n==="not-in"?new qg(e,s):n==="array-contains-any"?new Hg(e,s):new Ce(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Bg(e,s):new Ug(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(kn(n,this.value)):n!==null&&en(this.value)===en(n)&&this.matchesComparison(kn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dt extends qc{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new dt(e,n)}matches(e){return Hc(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Hc(t){return t.op==="and"}function Kc(t){return xg(t)&&Hc(t)}function xg(t){for(const e of t.filters)if(e instanceof dt)return!1;return!0}function Vi(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+An(t.value);if(Kc(t))return t.filters.map(e=>Vi(e)).join(",");{const e=t.filters.map(n=>Vi(n)).join(",");return`${t.op}(${e})`}}function Gc(t,e){return t instanceof Ce?function(n,s){return s instanceof Ce&&n.op===s.op&&n.field.isEqual(s.field)&&ft(n.value,s.value)}(t,e):t instanceof dt?function(n,s){return s instanceof dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Gc(i,s.filters[o]),!0):!1}(t,e):void F()}function Wc(t){return t instanceof Ce?function(e){return`${e.field.canonicalString()} ${e.op} ${An(e.value)}`}(t):t instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(Wc).join(" ,")+"}"}(t):"Filter"}class Vg extends Ce{constructor(e,n,s){super(e,n,s),this.key=N.fromName(s.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class Bg extends Ce{constructor(e,n){super(e,"in",n),this.keys=Qc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ug extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=Qc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>N.fromName(s.referenceValue))}class jg extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return So(n)&&gs(n.arrayValue,this.value)}}class zg extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gs(this.value.arrayValue,n)}}class qg extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gs(this.value.arrayValue,n)}}class Hg extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!So(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>gs(this.value.arrayValue,s))}}/**
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
 */class Kg{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function La(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Kg(t,e,n,s,r,i,o)}function ko(t){const e=j(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Vi(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Rr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>An(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>An(s)).join(",")),e.dt=n}return e.dt}function Ao(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oa(t.startAt,e.startAt)&&Oa(t.endAt,e.endAt)}function Bi(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Or{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function Gg(t,e,n,s,r,i,o,a){return new Or(t,e,n,s,r,i,o,a)}function Lr(t){return new Or(t)}function Pa(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Qg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Yg(t){return t.collectionGroup!==null}function Tn(t){const e=j(t);if(e.wt===null){e.wt=[];const n=Qg(e),s=Wg(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Xn(n)),e.wt.push(new Xn($e.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xn($e.keyField(),i))}}}return e.wt}function Ct(t){const e=j(t);if(!e._t)if(e.limitType==="F")e._t=La(e.path,e.collectionGroup,Tn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Tn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Xn(i.field,o))}const s=e.endAt?new ur(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ur(e.startAt.position,e.startAt.inclusive):null;e._t=La(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Ui(t,e,n){return new Or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pr(t,e){return Ao(Ct(t),Ct(e))&&t.limitType===e.limitType}function Yc(t){return`${ko(Ct(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Wc(s)).join(", ")}]`),Rr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>An(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>An(s)).join(",")),`Target(${n})`}(Ct(t))}; limitType=${t.limitType})`}function $r(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):N.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Tn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ra(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Tn(n),s)||n.endAt&&!function(r,i,o){const a=Ra(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Tn(n),s))}(t,e)}function Xg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xc(t){return(e,n)=>{let s=!1;for(const r of Tn(t)){const i=Jg(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Jg(t,e,n){const s=t.field.isKeyField()?N.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?kn(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
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
 */class Fn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Uc(this.inner)}size(){return this.innerSize}}/**
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
 */const Zg=new me(N.comparator);function bt(){return Zg}const Jc=new me(N.comparator);function Hn(...t){let e=Jc;for(const n of t)e=e.insert(n.key,n);return e}function Zc(t){let e=Jc;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Wt(){return Jn()}function eu(){return Jn()}function Jn(){return new Fn(t=>t.toString(),(t,e)=>t.isEqual(e))}const em=new me(N.comparator),tm=new Ve(N.comparator);function Q(...t){let e=tm;for(const n of t)e=e.add(n);return e}const nm=new Ve(Z);function sm(){return nm}/**
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
 */function tu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(e)?"-0":e}}function nu(t){return{integerValue:""+t}}function rm(t,e){return Og(e)?nu(e):tu(t,e)}/**
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
 */class Fr{constructor(){this._=void 0}}function im(t,e,n){return t instanceof hr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&bo(r)&&(r=Io(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Dn?ru(t,e):t instanceof ms?iu(t,e):function(s,r){const i=su(s,r),o=$a(i)+$a(s.gt);return xi(i)&&xi(s.gt)?nu(o):tu(s.serializer,o)}(t,e)}function om(t,e,n){return t instanceof Dn?ru(t,e):t instanceof ms?iu(t,e):n}function su(t,e){return t instanceof fr?xi(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class hr extends Fr{}class Dn extends Fr{constructor(e){super(),this.elements=e}}function ru(t,e){const n=ou(e);for(const s of t.elements)n.some(r=>ft(r,s))||n.push(s);return{arrayValue:{values:n}}}class ms extends Fr{constructor(e){super(),this.elements=e}}function iu(t,e){let n=ou(e);for(const s of t.elements)n=n.filter(r=>!ft(r,s));return{arrayValue:{values:n}}}class fr extends Fr{constructor(e,n){super(),this.serializer=e,this.gt=n}}function $a(t){return Te(t.integerValue||t.doubleValue)}function ou(t){return So(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class am{constructor(e,n){this.field=e,this.transform=n}}function lm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Dn&&s instanceof Dn||n instanceof ms&&s instanceof ms?Sn(n.elements,s.elements,ft):n instanceof fr&&s instanceof fr?ft(n.gt,s.gt):n instanceof hr&&s instanceof hr}(t.transform,e.transform)}class cm{constructor(e,n){this.version=e,this.transformResults=n}}class wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ks(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xr{}function au(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cu(t.key,wt.none()):new Vr(t.key,t.data,wt.none());{const n=t.data,s=Qe.empty();let r=new Ve($e.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rn(t.key,s,new rt(r.toArray()),wt.none())}}function um(t,e,n){t instanceof Vr?function(s,r,i){const o=s.value.clone(),a=xa(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rn?function(s,r,i){if(!Ks(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=xa(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(lu(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Zn(t,e,n,s){return t instanceof Vr?function(r,i,o,a){if(!Ks(r.precondition,i))return o;const l=r.value.clone(),c=Va(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof rn?function(r,i,o,a){if(!Ks(r.precondition,i))return o;const l=Va(r.fieldTransforms,a,i),c=i.data;return c.setAll(lu(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ks(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function hm(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=su(s.transform,r||null);i!=null&&(n===null&&(n=Qe.empty()),n.set(s.field,i))}return n||null}function Fa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Sn(n,s,(r,i)=>lm(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vr extends xr{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rn extends xr{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lu(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function xa(t,e,n){const s=new Map;ue(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,om(o,a,n[r]))}return s}function Va(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,im(i,o,e))}return s}class cu extends xr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fm extends xr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dm{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&um(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=eu();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=au(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Sn(this.mutations,e.mutations,(n,s)=>Fa(n,s))&&Sn(this.baseMutations,e.baseMutations,(n,s)=>Fa(n,s))}}class Do{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ue(e.mutations.length===s.length);let r=em;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Do(e,n,s,r)}}/**
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
 */class gm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mm{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var _e,X;function pm(t){switch(t){default:return F();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function uu(t){if(t===void 0)return Tt("GRPC error has no .code"),E.UNKNOWN;switch(t){case _e.OK:return E.OK;case _e.CANCELLED:return E.CANCELLED;case _e.UNKNOWN:return E.UNKNOWN;case _e.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case _e.INTERNAL:return E.INTERNAL;case _e.UNAVAILABLE:return E.UNAVAILABLE;case _e.UNAUTHENTICATED:return E.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case _e.NOT_FOUND:return E.NOT_FOUND;case _e.ALREADY_EXISTS:return E.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return E.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case _e.ABORTED:return E.ABORTED;case _e.OUT_OF_RANGE:return E.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return E.UNIMPLEMENTED;case _e.DATA_LOSS:return E.DATA_LOSS;default:return F()}}(X=_e||(_e={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class No{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return js}static getOrCreateInstance(){return js===null&&(js=new No),js}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let js=null;/**
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
 */function ym(){return new TextEncoder}/**
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
 */const vm=new _n([4294967295,4294967295],0);function Ba(t){const e=ym().encode(t),n=new vg;return n.update(e),new Uint8Array(n.digest())}function Ua(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _n([n,s],0),new _n([r,i],0)]}class Mo{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Kn(`Invalid padding: ${n}`);if(s<0)throw new Kn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Kn(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Kn(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=_n.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(_n.fromNumber(s)));return r.compare(vm)===1&&(r=new _n([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Ba(e),[s,r]=Ua(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mo(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Ba(e),[s,r]=Ua(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Br{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ds.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Br(B.min(),r,new me(Z),bt(),Q())}}class Ds{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ds(s,n,Q(),Q(),Q())}}/**
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
 */class Gs{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class hu{constructor(e,n){this.targetId=e,this.Vt=n}}class fu{constructor(e,n,s=Ue.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ja{constructor(){this.St=0,this.Dt=qa(),this.Ct=Ue.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Q(),n=Q(),s=Q();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:F()}}),new Ds(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=qa()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class wm{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=bt(),this.zt=za(),this.Wt=new me(Z)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Bi(o))if(r===0){const a=new N(o.path);this.Yt(s,a,Pe.newNoDocument(a,B.min()))}else ue(r===1);else{const a=this.ie(s);if(a!==r){const l=this.re(e,a);if(l!==0){this.ee(s);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=No.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,d){var h,f,m,v,y,C;const R={localCacheCount:u,existenceFilterCount:d.count},O=d.unchangedNames;return O&&(R.bloomFilter={applied:c===0,hashCount:(h=O==null?void 0:O.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(v=(m=(f=O==null?void 0:O.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(C=(y=O==null?void 0:O.bits)===null||y===void 0?void 0:y.padding)!==null&&C!==void 0?C:0}),R}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=Zt(i).toUint8Array()}catch(u){if(u instanceof jc)return In("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new Mo(l,o,a)}catch(u){return In(u instanceof Kn?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:r!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Bi(a.target)){const l=new N(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Pe.newNoDocument(l,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=Q();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Br(e,n,this.Wt,this.jt,s);return this.jt=bt(),this.zt=za(),this.Wt=new me(Z),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new ja,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ve(Z),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||I("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ja),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function za(){return new me(N.comparator)}function qa(){return new me(N.comparator)}const Em=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_m=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Tm=(()=>({and:"AND",or:"OR"}))();class Cm{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zi(t,e){return t.useProto3Json||Rr(e)?e:{value:e}}function dr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function du(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bm(t,e){return dr(t,e.toTimestamp())}function ht(t){return ue(!!t),B.fromTimestamp(function(e){const n=Lt(e);return new be(n.seconds,n.nanos)}(t))}function Ro(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function gu(t){const e=he.fromString(t);return ue(vu(e)),e}function qi(t,e){return Ro(t.databaseId,e.path)}function hi(t,e){const n=gu(e);if(n.get(1)!==t.databaseId.projectId)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(mu(n))}function Hi(t,e){return Ro(t.databaseId,e)}function Im(t){const e=gu(t);return e.length===4?he.emptyPath():mu(e)}function Ki(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mu(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ha(t,e,n){return{name:qi(t,e),fields:n.value.mapValue.fields}}function Sm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(ue(c===void 0||typeof c=="string"),Ue.fromBase64String(c||"")):(ue(c===void 0||c instanceof Uint8Array),Ue.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?E.UNKNOWN:uu(l.code);return new A(c,l.message||"")}(o);n=new fu(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=hi(t,s.document.name),i=ht(s.document.updateTime),o=s.document.createTime?ht(s.document.createTime):B.min(),a=new Qe({mapValue:{fields:s.document.fields}}),l=Pe.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Gs(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=hi(t,s.document),i=s.readTime?ht(s.readTime):B.min(),o=Pe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Gs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=hi(t,s.document),i=s.removedTargetIds||[];n=new Gs([],i,r,null)}else{if(!("filter"in e))return F();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new mm(r,i),a=s.targetId;n=new hu(a,o)}}return n}function km(t,e){let n;if(e instanceof Vr)n={update:Ha(t,e.key,e.value)};else if(e instanceof cu)n={delete:qi(t,e.key)};else if(e instanceof rn)n={update:Ha(t,e.key,e.data),updateMask:$m(e.fieldMask)};else{if(!(e instanceof fm))return F();n={verify:qi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof hr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Dn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ms)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fr)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw F()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:bm(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(t,e.precondition)),n}function Am(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?ht(s.updateTime):ht(r);return i.isEqual(B.min())&&(i=ht(r)),new cm(i,s.transformResults||[])}(n,e))):[]}function Dm(t,e){return{documents:[Hi(t,e.path)]}}function Nm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Hi(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hi(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return yu(dt.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:fn(u.field),direction:Om(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=zi(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Mm(t){let e=Im(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ue(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const d=pu(u);return d instanceof dt&&Kc(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new Xn(dn(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Rr(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,h=u.values||[];return new ur(h,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,h=u.values||[];return new ur(h,d)}(n.endAt)),Gg(e,r,o,i,a,"F",l,c)}function Rm(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pu(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=dn(e.unaryFilter.field);return Ce.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=dn(e.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=dn(e.unaryFilter.field);return Ce.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=dn(e.unaryFilter.field);return Ce.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return Ce.create(dn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return dt.create(e.compositeFilter.filters.map(n=>pu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function Om(t){return Em[t]}function Lm(t){return _m[t]}function Pm(t){return Tm[t]}function fn(t){return{fieldPath:t.canonicalString()}}function dn(t){return $e.fromServerFormat(t.fieldPath)}function yu(t){return t instanceof Ce?function(e){if(e.op==="=="){if(Ma(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NAN"}};if(Na(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ma(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NAN"}};if(Na(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(e.field),op:Lm(e.op),value:e.value}}}(t):t instanceof dt?function(e){const n=e.getFilters().map(s=>yu(s));return n.length===1?n[0]:{compositeFilter:{op:Pm(e.op),filters:n}}}(t):F()}function $m(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class St{constructor(e,n,s,r,i=B.min(),o=B.min(),a=Ue.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Fm{constructor(e){this.fe=e}}function xm(t){const e=Mm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ui(e,e.limit,"L"):e}/**
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
 */class Vm{constructor(){this.rn=new Bm}addToCollectionParentIndex(e,n){return this.rn.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Ot.min())}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class Bm{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ve(he.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(he.comparator)).toArray()}}/**
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
 */class Nn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Nn(0)}static Mn(){return new Nn(-1)}}/**
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
 */class Um{constructor(){this.changes=new Fn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zm{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Zn(s.mutation,r,rt.empty(),be.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Q()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Q()){const r=Wt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Hn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Wt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Q()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=bt();const o=Jn(),a=Jn();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof rn)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Zn(u.mutation,c,u.mutation.getFieldMask(),be.now())):o.set(c.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new jm(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Jn();let r=new me((o,a)=>o-a),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||rt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const d=(r.get(a.batchId)||Q()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=eu();u.forEach(h=>{if(!i.has(h)){const f=au(n.get(h),s.get(h));f!==null&&d.set(h,f),i=i.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):_.resolve(Wt());let a=-1,l=i;return o.next(c=>_.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{l=l.insert(u,h)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Q())).next(u=>({batchId:a,changes:Zc(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(s=>{let r=Hn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Hn();return this.indexManager.getCollectionParents(e,r).next(o=>_.forEach(o,a=>{const l=function(c,u){return new Or(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Pe.newInvalidDocument(c)))});let o=Hn();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Zn(c.mutation,l,rt.empty(),be.now()),$r(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class qm{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return _.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:xm(s.bundledQuery),readTime:ht(s.readTime)}}(n)),_.resolve()}}/**
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
 */class Hm{constructor(){this.overlays=new me(N.comparator),this.ls=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Wt();return _.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const r=Wt(),i=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return _.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new me((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Wt(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Wt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return _.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gm(n,s));let i=this.ls.get(n);i===void 0&&(i=Q(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class Oo{constructor(){this.fs=new Ve(Ie.ds),this.ws=new Ve(Ie._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Ie(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new N(new he([])),s=new Ie(n,e),r=new Ie(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new N(new he([])),s=new Ie(n,e),r=new Ie(n,e+1);let i=Q();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ie(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return N.comparator(e.key,n.key)||Z(e.As,n.As)}static _s(e,n){return Z(e.As,n.As)||N.comparator(e.key,n.key)}}/**
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
 */class Km{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ve(Ie.ds)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dm(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),r=new Ie(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ve(Z);return n.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),_.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;N.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new N(i),0);let a=new Ve(Z);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.As)),!0)},o),_.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ue(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return _.forEach(n.mutations,r=>{const i=new Ie(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Ie(n,0),r=this.Rs.firstAfterOrEqual(s);return _.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Gm{constructor(e){this.Ds=e,this.docs=new me(N.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let s=bt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),_.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=bt();const o=n.path,a=new N(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ng(Dg(u),s)<=0||(r.has(u.key)||$r(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,s,r){F()}Cs(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Wm(this)}getSize(e){return _.resolve(this.size)}}class Wm extends Um{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class Qm{constructor(e){this.persistence=e,this.xs=new Fn(n=>ko(n),Ao),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Oo,this.targetCount=0,this.Ms=Nn.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),_.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Nn(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Fn(n),_.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),_.waitFor(i).next(()=>r)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.ks.containsKey(n))}}/**
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
 */class Ym{constructor(e,n){this.$s={},this.overlays={},this.Os=new Co(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Qm(this),this.indexManager=new Vm,this.remoteDocumentCache=function(s){return new Gm(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Fm(n),this.qs=new qm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new Km(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){I("MemoryPersistence","Starting transaction:",e);const r=new Xm(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return _.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class Xm extends Rg{constructor(e){super(),this.currentSequenceNumber=e}}class Lo{constructor(e){this.persistence=e,this.Qs=new Oo,this.js=null}static zs(e){return new Lo(e)}get Ws(){if(this.js)return this.js;throw F()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),_.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,s=>{const r=N.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,B.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return _.or([()=>_.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Po{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=Q(),r=Q();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Po(e,n.fromCache,s,r)}}/**
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
 */class Jm{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Pa(n))return _.resolve(null);let s=Ct(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ui(n,null,"F"),s=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Q(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,Ui(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,s,r){return Pa(n)||r.isEqual(B.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Sa()<=te.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ji(n)),this.Wi(e,o,n,Ag(r,-1)))})}ji(e,n){let s=new Ve(Xc(e));return n.forEach((r,i)=>{$r(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Sa()<=te.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",ji(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ot.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Zm{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new me(Z),this.Yi=new Fn(i=>ko(i),Ao),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zm(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function ep(t,e,n,s){return new Zm(t,e,n,s)}async function wu(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=Q();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function tp(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,d=u.keys();let h=_.resolve();return d.forEach(f=>{h=h.next(()=>c.getEntry(a,f)).next(m=>{const v=l.docVersions.get(f);ue(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Eu(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function np(t,e){const n=j(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,d)=>{const h=r.get(d);if(!h)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,d)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(Ue.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(d,f),function(m,v,y){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,f,u)&&a.push(n.Bs.updateTargetData(i,f))});let l=bt(),c=Q();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(sp(i,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!s.isEqual(B.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(d=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ji=r,i))}function sp(t,e,n){let s=Q(),r=Q();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=bt();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):I("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:r}})}function rp(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ip(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,_.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new St(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Gi(t,e,n){const s=j(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!As(o))throw o;I("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Ka(t,e,n){const s=j(t);let r=B.min(),i=Q();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=j(a),d=u.Yi.get(c);return d!==void 0?_.resolve(u.Ji.get(d)):u.Bs.getTargetData(l,c)}(s,o,Ct(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:B.min(),n?i:Q())).next(a=>(op(s,Xg(e),a),{documents:a,ir:i})))}function op(t,e,n){let s=t.Xi.get(e)||B.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Ga{constructor(){this.activeTargetIds=sm()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ap{constructor(){this.Hr=new Ga,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ga,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lp{Yr(e){}shutdown(){}}/**
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
 */class Wa{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zs=null;function fi(){return zs===null?zs=268435456+Math.round(2147483648*Math.random()):zs++,"0x"+zs.toString(16)}/**
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
 */const cp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class up{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Oe="WebChannelConnection";class hp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=fi(),a=this.To(e,n);I("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.Eo(l,r,i),this.Ao(e,a,l,s).then(c=>(I("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw In("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+$n,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=cp[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=fi();return new Promise((o,a)=>{const l=new yg;l.setWithCredentials(!0),l.listenOnce(gg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ui.NO_ERROR:const u=l.getResponseJson();I(Oe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ui.TIMEOUT:I(Oe,`RPC '${e}' ${i} timed out`),a(new A(E.DEADLINE_EXCEEDED,"Request time out"));break;case ui.HTTP_ERROR:const d=l.getStatus();if(I(Oe,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const m=function(v){const y=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(f.status);a(new A(m,f.message))}else a(new A(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(E.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{I(Oe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);I(Oe,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const r=fi(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fg(),a=dg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new pg({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");I(Oe,`Creating RPC '${e}' stream ${r}: ${u}`,l);const d=o.createWebChannel(u,l);let h=!1,f=!1;const m=new up({ro:y=>{f?I(Oe,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(I(Oe,`Opening RPC '${e}' stream ${r} transport.`),d.open(),h=!0),I(Oe,`RPC '${e}' stream ${r} sending:`,y),d.send(y))},oo:()=>d.close()}),v=(y,C,R)=>{y.listen(C,O=>{try{R(O)}catch(U){setTimeout(()=>{throw U},0)}})};return v(d,Vs.EventType.OPEN,()=>{f||I(Oe,`RPC '${e}' stream ${r} transport opened.`)}),v(d,Vs.EventType.CLOSE,()=>{f||(f=!0,I(Oe,`RPC '${e}' stream ${r} transport closed`),m.wo())}),v(d,Vs.EventType.ERROR,y=>{f||(f=!0,In(Oe,`RPC '${e}' stream ${r} transport errored:`,y),m.wo(new A(E.UNAVAILABLE,"The operation could not be completed")))}),v(d,Vs.EventType.MESSAGE,y=>{var C;if(!f){const R=y.data[0];ue(!!R);const O=R,U=O.error||((C=O[0])===null||C===void 0?void 0:C.error);if(U){I(Oe,`RPC '${e}' stream ${r} received error:`,U);const ee=U.status;let Y=function(k){const L=_e[k];if(L!==void 0)return uu(L)}(ee),K=U.message;Y===void 0&&(Y=E.INTERNAL,K="Unknown error status: "+ee+" with message "+U.message),f=!0,m.wo(new A(Y,K)),d.close()}else I(Oe,`RPC '${e}' stream ${r} received:`,R),m._o(R)}}),v(a,mg.STAT_EVENT,y=>{y.stat===ba.PROXY?I(Oe,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===ba.NOPROXY&&I(Oe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}function di(){return typeof document<"u"?document:null}/**
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
 */function Ur(t){return new Cm(t,!0)}/**
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
 */class _u{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&I("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Tu{constructor(e,n,s,r,i,o,a,l){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new _u(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Tt(n.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new A(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fp extends Tu{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=Sm(this.serializer,e),s=function(r){if(!("targetChange"in r))return B.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?B.min():i.readTime?ht(i.readTime):B.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Ki(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Bi(a)?{documents:Dm(r,a)}:{query:Nm(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=du(r,i.resumeToken);const l=zi(r,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(B.min())>0){o.readTime=dr(r,i.snapshotVersion.toTimestamp());const l=zi(r,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=Rm(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Ki(this.serializer),n.removeTarget=e,this.Wo(n)}}class dp extends Tu{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Am(e.writeResults,e.commitTime),s=ht(e.commitTime);return this.listener.cu(s,n)}return ue(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ki(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>km(this.serializer,s))};this.Wo(n)}}/**
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
 */class gp extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(E.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(E.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class mp{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Tt(n),this.mu=!1):I("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class pp{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{on(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l.vu.add(4),await Ns(l),l.bu.set("Unknown"),l.vu.delete(4),await jr(l)}(this))})}),this.bu=new mp(s,r)}}async function jr(t){if(on(t))for(const e of t.Ru)await e(!0)}async function Ns(t){for(const e of t.Ru)await e(!1)}function Cu(t,e){const n=j(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),xo(n)?Fo(n):xn(n).Ko()&&$o(n,e))}function bu(t,e){const n=j(t),s=xn(n);n.Au.delete(e),s.Ko()&&Iu(n,e),n.Au.size===0&&(s.Ko()?s.jo():on(n)&&n.bu.set("Unknown"))}function $o(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xn(t).su(e)}function Iu(t,e){t.Vu.qt(e),xn(t).iu(e)}function Fo(t){t.Vu=new wm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),xn(t).start(),t.bu.gu()}function xo(t){return on(t)&&!xn(t).Uo()&&t.Au.size>0}function on(t){return j(t).vu.size===0}function Su(t){t.Vu=void 0}async function yp(t){t.Au.forEach((e,n)=>{$o(t,e)})}async function vp(t,e){Su(t),xo(t)?(t.bu.Iu(e),Fo(t)):t.bu.set("Unknown")}async function wp(t,e,n){if(t.bu.set("Online"),e instanceof fu&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){I("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await gr(t,s)}else if(e instanceof Gs?t.Vu.Ht(e):e instanceof hu?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(B.min()))try{const s=await Eu(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(l);c&&r.Au.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(Ue.EMPTY_BYTE_STRING,c.snapshotVersion)),Iu(r,a);const u=new St(c.target,a,l,c.sequenceNumber);$o(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){I("RemoteStore","Failed to raise snapshot:",s),await gr(t,s)}}async function gr(t,e,n){if(!As(e))throw e;t.vu.add(1),await Ns(t),t.bu.set("Offline"),n||(n=()=>Eu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await jr(t)})}function ku(t,e){return e().catch(n=>gr(t,n,e))}async function zr(t){const e=j(t),n=Pt(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Ep(e);)try{const r=await rp(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,_p(e,r)}catch(r){await gr(e,r)}Au(e)&&Du(e)}function Ep(t){return on(t)&&t.Eu.length<10}function _p(t,e){t.Eu.push(e);const n=Pt(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Au(t){return on(t)&&!Pt(t).Uo()&&t.Eu.length>0}function Du(t){Pt(t).start()}async function Tp(t){Pt(t).hu()}async function Cp(t){const e=Pt(t);for(const n of t.Eu)e.uu(n.mutations)}async function bp(t,e,n){const s=t.Eu.shift(),r=Do.from(s,e,n);await ku(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await zr(t)}async function Ip(t,e){e&&Pt(t).ou&&await async function(n,s){if(r=s.code,pm(r)&&r!==E.ABORTED){const i=n.Eu.shift();Pt(n).Qo(),await ku(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await zr(n)}var r}(t,e),Au(t)&&Du(t)}async function Qa(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const s=on(n);n.vu.add(3),await Ns(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await jr(n)}async function Sp(t,e){const n=j(t);e?(n.vu.delete(2),await jr(n)):e||(n.vu.add(2),await Ns(n),n.bu.set("Unknown"))}function xn(t){return t.Su||(t.Su=function(e,n,s){const r=j(e);return r.fu(),new fp(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:yp.bind(null,t),ao:vp.bind(null,t),nu:wp.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),xo(t)?Fo(t):t.bu.set("Unknown")):(await t.Su.stop(),Su(t))})),t.Su}function Pt(t){return t.Du||(t.Du=function(e,n,s){const r=j(e);return r.fu(),new dp(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:Tp.bind(null,t),ao:Ip.bind(null,t),au:Cp.bind(null,t),cu:bp.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await zr(t)):(await t.Du.stop(),t.Eu.length>0&&(I("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Vo{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Vo(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bo(t,e){if(Tt("AsyncQueue",`${e}: ${t}`),As(t))return new A(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Cn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||N.comparator(n.key,s.key):(n,s)=>N.comparator(n.key,s.key),this.keyedMap=Hn(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new Cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Cn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Ya{constructor(){this.Cu=new me(N.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):F():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Mn{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mn(e,n,Cn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class kp{constructor(){this.Nu=void 0,this.listeners=[]}}class Ap{constructor(){this.queries=new Fn(e=>Yc(e),Pr),this.onlineState="Unknown",this.ku=new Set}}async function Nu(t,e){const n=j(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new kp),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Bo(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Uo(n)}async function Mu(t,e){const n=j(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Dp(t,e){const n=j(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Uo(n)}function Np(t,e,n){const s=j(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Uo(t){t.ku.forEach(e=>{e.next()})}class Ru{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Mn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Ou{constructor(e){this.key=e}}class Lu{constructor(e){this.key=e}}class Mp{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Q(),this.mutatedKeys=Q(),this.tc=Xc(e),this.ec=new Cn(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Ya,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,d)=>{const h=r.get(u),f=$r(this.query,d)?d:null,m=!!h&&this.mutatedKeys.has(h.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;h&&f?h.data.isEqual(f.data)?m!==v&&(s.track({type:3,doc:f}),y=!0):this.rc(h,f)||(s.track({type:2,doc:f}),y=!0,(l&&this.tc(f,l)>0||c&&this.tc(f,c)<0)&&(a=!0)):!h&&f?(s.track({type:0,doc:f}),y=!0):h&&!f&&(s.track({type:1,doc:h}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((c,u)=>function(d,h){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return f(d)-f(h)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,i.length!==0||l?{snapshot:new Mn(this.query,e.ec,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ya,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Q(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Lu(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Ou(s))}),n}hc(e){this.Yu=e.ir,this.Zu=Q();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Mn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Rp{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Op{constructor(e){this.key=e,this.fc=!1}}class Lp{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Fn(a=>Yc(a),Pr),this._c=new Map,this.mc=new Set,this.gc=new me(N.comparator),this.yc=new Map,this.Ic=new Oo,this.Tc={},this.Ec=new Map,this.Ac=Nn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Pp(t,e){const n=Hp(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await ip(n.localStore,Ct(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await $p(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Cu(n.remoteStore,o)}return r}async function $p(t,e,n,s,r){t.Rc=(d,h,f)=>async function(m,v,y,C){let R=v.view.sc(y);R.zi&&(R=await Ka(m.localStore,v.query,!1).then(({documents:ee})=>v.view.sc(ee,R)));const O=C&&C.targetChanges.get(v.targetId),U=v.view.applyChanges(R,m.isPrimaryClient,O);return Ja(m,v.targetId,U.cc),U.snapshot}(t,d,h,f);const i=await Ka(t.localStore,e,!0),o=new Mp(e,i.ir),a=o.sc(i.documents),l=Ds.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Ja(t,n,c.cc);const u=new Rp(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function Fp(t,e){const n=j(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Pr(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Gi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),bu(n.remoteStore,s.targetId),Wi(n,s.targetId)}).catch(ks)):(Wi(n,s.targetId),await Gi(n.localStore,s.targetId,!0))}async function xp(t,e,n){const s=Kp(t);try{const r=await function(i,o){const a=j(i),l=be.now(),c=o.reduce((h,f)=>h.add(f.key),Q());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=bt(),m=Q();return a.Zi.getEntries(h,c).next(v=>{f=v,f.forEach((y,C)=>{C.isValidDocument()||(m=m.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(v=>{u=v;const y=[];for(const C of o){const R=hm(C,u.get(C.key).overlayedDocument);R!=null&&y.push(new rn(C.key,R,zc(R.value.mapValue),wt.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,y,o)}).next(v=>{d=v;const y=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(h,v.batchId,y)})}).then(()=>({batchId:d.batchId,changes:Zc(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.Tc[i.currentUser.toKey()];l||(l=new me(Z)),l=l.insert(o,a),i.Tc[i.currentUser.toKey()]=l}(s,r.batchId,n),await Ms(s,r.changes),await zr(s.remoteStore)}catch(r){const i=Bo(r,"Failed to persist write");n.reject(i)}}async function Pu(t,e){const n=j(t);try{const s=await np(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(ue(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?ue(o.fc):r.removedDocuments.size>0&&(ue(o.fc),o.fc=!1))}),await Ms(n,s,e)}catch(s){await ks(s)}}function Xa(t,e,n){const s=j(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=j(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.Mu(o)&&(l=!0)}),l&&Uo(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Vp(t,e,n){const s=j(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new me(N.comparator);o=o.insert(i,Pe.newNoDocument(i,B.min()));const a=Q().add(i),l=new Br(B.min(),new Map,new me(Z),o,a);await Pu(s,l),s.gc=s.gc.remove(i),s.yc.delete(e),jo(s)}else await Gi(s.localStore,e,!1).then(()=>Wi(s,e,n)).catch(ks)}async function Bp(t,e){const n=j(t),s=e.batch.batchId;try{const r=await tp(n.localStore,e);Fu(n,s,null),$u(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ms(n,r)}catch(r){await ks(r)}}async function Up(t,e,n){const s=j(t);try{const r=await function(i,o){const a=j(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ue(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Fu(s,e,n),$u(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ms(s,r)}catch(r){await ks(r)}}function $u(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Fu(t,e,n){const s=j(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function Wi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||xu(t,s)})}function xu(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(bu(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),jo(t))}function Ja(t,e,n){for(const s of n)s instanceof Ou?(t.Ic.addReference(s.key,e),jp(t,s)):s instanceof Lu?(I("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||xu(t,s.key)):F()}function jp(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(I("SyncEngine","New document in limbo: "+n),t.mc.add(s),jo(t))}function jo(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new N(he.fromString(e)),s=t.Ac.next();t.yc.set(s,new Op(n)),t.gc=t.gc.insert(n,s),Cu(t.remoteStore,new St(Ct(Lr(n.path)),s,"TargetPurposeLimboResolution",Co.ct))}}async function Ms(t,e,n){const s=j(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Po.Li(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,l){const c=j(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(l,d=>_.forEach(d.Fi,h=>c.persistence.referenceDelegate.addReference(u,d.targetId,h)).next(()=>_.forEach(d.Bi,h=>c.persistence.referenceDelegate.removeReference(u,d.targetId,h)))))}catch(u){if(!As(u))throw u;I("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const h=c.Ji.get(d),f=h.snapshotVersion,m=h.withLastLimboFreeSnapshotVersion(f);c.Ji=c.Ji.insert(d,m)}}}(s.localStore,i))}async function zp(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){I("SyncEngine","User change. New user:",e.toKey());const s=await wu(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new A(E.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ms(n,s.er)}}function qp(t,e){const n=j(t),s=n.yc.get(e);if(s&&s.fc)return Q().add(s.key);{let r=Q();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function Hp(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vp.bind(null,e),e.dc.nu=Dp.bind(null,e.eventManager),e.dc.Pc=Np.bind(null,e.eventManager),e}function Kp(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Up.bind(null,e),e}class Za{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ur(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ep(this.persistence,new Jm,e.initialUser,this.serializer)}createPersistence(e){return new Ym(Lo.zs,this.serializer)}createSharedClientState(e){return new ap}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xa(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zp.bind(null,this.syncEngine),await Sp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ap}createDatastore(e){const n=Ur(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new hp(r));var r;return function(i,o,a,l){return new gp(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Xa(this.syncEngine,a,0),o=Wa.D()?new Wa:new lp,new pp(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,c){const u=new Lp(s,r,i,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);I("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ns(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Vu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Tt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Wp{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=Bc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{I("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(I("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Bo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gi(t,e){t.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await wu(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function el(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yp(t);I("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Qa(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qa(e.remoteStore,i)),t._onlineComponents=e}function Qp(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Yp(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await gi(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Qp(n))throw n;In("Error using user provided cache. Falling back to memory cache: "+n),await gi(t,new Za)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await gi(t,new Za);return t._offlineComponents}async function Bu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await el(t,t._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await el(t,new Gp))),t._onlineComponents}function Xp(t){return Bu(t).then(e=>e.syncEngine)}async function Qi(t){const e=await Bu(t),n=e.eventManager;return n.onListen=Pp.bind(null,e.syncEngine),n.onUnlisten=Fp.bind(null,e.syncEngine),n}function Jp(t,e,n={}){const s=new Dt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,l){const c=new Vu({next:d=>{i.enqueueAndForget(()=>Mu(r,u));const h=d.docs.has(o);!h&&d.fromCache?l.reject(new A(E.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?l.reject(new A(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new Ru(Lr(o.path),c,{includeMetadataChanges:!0,Ku:!0});return Nu(r,u)}(await Qi(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function Uu(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const tl=new Map;/**
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
 */function ju(t,e,n){if(!n)throw new A(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zp(t,e,n,s){if(e===!0&&s===!0)throw new A(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nl(t){if(!N.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sl(t){if(N.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Nt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zo(t);throw new A(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class rl{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new A(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uu((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class qr{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wg;switch(n.type){case"firstParty":return new Cg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=tl.get(e);n&&(I("ComponentProvider","Removing Datastore"),tl.delete(e),n.terminate())}(this),Promise.resolve()}}function ey(t,e,n,s={}){var r;const i=(t=Nt(t,qr))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&In("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Le.MOCK_USER;else{a=Qh(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new A(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Le(c)}t._authCredentials=new Eg(new Vc(a,l))}}/**
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
 */class Ke{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class Hr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class Mt extends Hr{constructor(e,n,s){super(e,n,Lr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new N(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function ty(t,e,...n){if(t=Et(t),ju("collection","path",e),t instanceof qr){const s=he.fromString(e,...n);return sl(s),new Mt(t,null,s)}{if(!(t instanceof Ke||t instanceof Mt))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(he.fromString(e,...n));return sl(s),new Mt(t.firestore,null,s)}}function ny(t,e,...n){if(t=Et(t),arguments.length===1&&(e=Bc.A()),ju("doc","path",e),t instanceof qr){const s=he.fromString(e,...n);return nl(s),new Ke(t,null,new N(s))}{if(!(t instanceof Ke||t instanceof Mt))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(he.fromString(e,...n));return nl(s),new Ke(t.firestore,t instanceof Mt?t.converter:null,new N(s))}}/**
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
 */class sy{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new _u(this,"async_queue_retry"),this.Xc=()=>{const n=di();n&&I("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=di();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=di();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Dt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!As(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Tt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Vo.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&F()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function il(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ps extends qr{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new sy,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zu(this),this._firestoreClient.terminate()}}function ry(t,e){const n=typeof t=="object"?t:ed(),s=typeof t=="string"?t:e||"(default)",r=Yf(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Gh("firestore");i&&ey(r,...i)}return r}function qo(t){return t._firestoreClient||zu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zu(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,l,c){return new Pg(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Uu(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Wp(t._authCredentials,t._appCheckCredentials,t._queue,i),((n=r.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=r.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(Ue.fromBase64String(e))}catch(n){throw new A(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rn(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Kr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Gr{constructor(e){this._methodName=e}}/**
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
 */class Ho{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */const iy=/^__.*__$/;class qu{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new rn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Hu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Wr{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Wr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return mr(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Hu(this.ca)&&iy.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class oy{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ur(e)}ya(e,n,s,r=!1){return new Wr({ca:e,methodName:n,ga:s,path:$e.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ay(t){const e=t._freezeSettings(),n=Ur(t._databaseId);return new oy(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Qr extends Gr{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qr}}function ly(t,e,n){return new Wr({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class cy extends Gr{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=ly(this,e,!0),s=this.pa.map(i=>Rs(i,n)),r=new Dn(s);return new am(e.path,r)}isEqual(e){return this===e}}function uy(t,e,n,s){const r=t.ya(1,e,n);Gu("Data must be an object, but it was:",r,s);const i=[],o=Qe.empty();sn(s,(l,c)=>{const u=Ko(e,l,n);c=Et(c);const d=r.da(u);if(c instanceof Qr)i.push(u);else{const h=Rs(c,d);h!=null&&(i.push(u),o.set(u,h))}});const a=new rt(i);return new qu(o,a,r.fieldTransforms)}function hy(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[ol(e,s,n)],l=[r];if(i.length%2!=0)throw new A(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<i.length;h+=2)a.push(ol(e,i[h])),l.push(i[h+1]);const c=[],u=Qe.empty();for(let h=a.length-1;h>=0;--h)if(!gy(c,a[h])){const f=a[h];let m=l[h];m=Et(m);const v=o.da(f);if(m instanceof Qr)c.push(f);else{const y=Rs(m,v);y!=null&&(c.push(f),u.set(f,y))}}const d=new rt(c);return new qu(u,d,o.fieldTransforms)}function Rs(t,e){if(Ku(t=Et(t)))return Gu("Unsupported field value:",e,t),fy(t,e);if(t instanceof Gr)return function(n,s){if(!Hu(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Rs(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rm(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=be.fromDate(n);return{timestampValue:dr(s.serializer,r)}}if(n instanceof be){const r=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:dr(s.serializer,r)}}if(n instanceof Ho)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Rn)return{bytesValue:du(s.serializer,n._byteString)};if(n instanceof Ke){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ro(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${zo(n)}`)}(t,e)}function fy(t,e){const n={};return Uc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sn(t,(s,r)=>{const i=Rs(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ku(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Ho||t instanceof Rn||t instanceof Ke||t instanceof Gr)}function Gu(t,e,n){if(!Ku(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=zo(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function ol(t,e,n){if((e=Et(e))instanceof Kr)return e._internalPath;if(typeof e=="string")return Ko(t,e);throw mr("Field path arguments must be of type string or ",t,!1,void 0,n)}const dy=new RegExp("[~\\*/\\[\\]]");function Ko(t,e,n){if(e.search(dy)>=0)throw mr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kr(...e.split("."))._internalPath}catch{throw mr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new A(E.INVALID_ARGUMENT,a+t+l)}function gy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Wu{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new my(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class my extends Wu{data(){return super.data()}}function Qu(t,e){return typeof e=="string"?Ko(t,e):e instanceof Kr?e._internalPath:e._delegate._internalPath}/**
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
 */function py(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yy{convertValue(e,n="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return sn(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ho(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Io(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const n=Lt(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=he.fromString(e);ue(vu(s));const r=new ds(s.get(1),s.get(3)),i=new N(s.popFirst(5));return r.isEqual(n)||Tt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Gn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yu extends Wu{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ws extends Yu{data(e={}){return super.data(e)}}class vy{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Gn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ws(this._firestore,this._userDataWriter,s.key,s,new Gn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ws(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ws(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:wy(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function Ey(t){t=Nt(t,Ke);const e=Nt(t.firestore,ps);return Jp(qo(e),t._key).then(n=>Ju(e,t,n))}class Xu extends yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function _y(t,e,n,...s){t=Nt(t,Ke);const r=Nt(t.firestore,ps),i=ay(r);let o;return o=typeof(e=Et(e))=="string"||e instanceof Kr?hy(i,"updateDoc",t._key,e,n,s):uy(i,"updateDoc",t._key,e),Cy(r,[o.toMutation(t._key,wt.exists(!0))])}function Ty(t,...e){var n,s,r;t=Et(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||il(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(il(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let l,c,u;if(t instanceof Ke)c=Nt(t.firestore,ps),u=Lr(t._key.path),l={next:d=>{e[o]&&e[o](Ju(c,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Nt(t,Hr);c=Nt(d.firestore,ps),u=d._query;const h=new Xu(c);l={next:f=>{e[o]&&e[o](new vy(c,h,d,f))},error:e[o+1],complete:e[o+2]},py(t._query)}return function(d,h,f,m){const v=new Vu(m),y=new Ru(h,v,f);return d.asyncQueue.enqueueAndForget(async()=>Nu(await Qi(d),y)),()=>{v.Dc(),d.asyncQueue.enqueueAndForget(async()=>Mu(await Qi(d),y))}}(qo(c),u,a,l)}function Cy(t,e){return function(n,s){const r=new Dt;return n.asyncQueue.enqueueAndForget(async()=>xp(await Xp(n),s,r)),r.promise}(qo(t),e)}function Ju(t,e,n){const s=n.docs.get(e._key),r=new Xu(t);return new Yu(t,r,e._key,s,new Gn(n.hasPendingWrites,n.fromCache),e.converter)}function by(...t){return new cy("arrayUnion",t)}(function(t,e=!0){(function(n){$n=n})(Zf),tr(new ts("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ps(new _g(n.getProvider("auth-internal")),new Ig(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ds(a.options.projectId,l)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),wn(Ia,"3.13.0",t),wn(Ia,"3.13.0","esm2017")})();const Iy={apiKey:"AIzaSyCDqpSA_-xEwVkbj-EBwPHNYiSvJO6ULOY",authDomain:"wedding-photos-challenge.firebaseapp.com",projectId:"wedding-photos-challenge",storageBucket:"wedding-photos-challenge.appspot.com",messagingSenderId:"1095306889273",appId:"1:1095306889273:web:2f1ac74abc6fb029f1a5e8",measurementId:"G-3V15Z3EV3R"},Sy=Ll(Iy),al=ry(Sy);var Os={};(function t(e,n,s,r){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var p=new OffscreenCanvas(1,1),g=p.getContext("2d");g.fillRect(0,0,1,1);var D=p.transferToImageBitmap();g.createPattern(D,"no-repeat")}catch{return!1}return!0}();function l(){}function c(p){var g=n.exports.Promise,D=g!==void 0?g:e.Promise;return typeof D=="function"?new D(p):(p(l,l),null)}var u=function(p,g){return{transform:function(D){if(p)return D;if(g.has(D))return g.get(D);var x=new OffscreenCanvas(D.width,D.height),q=x.getContext("2d");return q.drawImage(D,0,0),g.set(D,x),x},clear:function(){g.clear()}}}(a,new Map),d=function(){var p=Math.floor(16.666666666666668),g,D,x={},q=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(g=function(H){var G=Math.random();return x[G]=requestAnimationFrame(function P(W){q===W||q+p-1<W?(q=W,delete x[G],H()):x[G]=requestAnimationFrame(P)}),G},D=function(H){x[H]&&cancelAnimationFrame(x[H])}):(g=function(H){return setTimeout(H,p)},D=function(H){return clearTimeout(H)}),{frame:g,cancel:D}}(),h=function(){var p,g,D={};function x(q){function H(G,P){q.postMessage({options:G||{},callback:P})}q.init=function(P){var W=P.transferControlToOffscreen();q.postMessage({canvas:W},[W])},q.fire=function(P,W,oe){if(g)return H(P,null),g;var pe=Math.random().toString(36).slice(2);return g=c(function(le){function ye(De){De.data.callback===pe&&(delete D[pe],q.removeEventListener("message",ye),g=null,u.clear(),oe(),le())}q.addEventListener("message",ye),H(P,pe),D[pe]=ye.bind(null,{data:{callback:pe}})}),g},q.reset=function(){q.postMessage({reset:!0});for(var P in D)D[P](),delete D[P]}}return function(){if(p)return p;if(!s&&i){var q=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{p=new Worker(URL.createObjectURL(new Blob([q])))}catch(H){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",H),null}x(p)}return p}}(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function m(p,g){return g?g(p):p}function v(p){return p!=null}function y(p,g,D){return m(p&&v(p[g])?p[g]:f[g],D)}function C(p){return p<0?0:Math.floor(p)}function R(p,g){return Math.floor(Math.random()*(g-p))+p}function O(p){return parseInt(p,16)}function U(p){return p.map(ee)}function ee(p){var g=String(p).replace(/[^0-9a-f]/gi,"");return g.length<6&&(g=g[0]+g[0]+g[1]+g[1]+g[2]+g[2]),{r:O(g.substring(0,2)),g:O(g.substring(2,4)),b:O(g.substring(4,6))}}function Y(p){var g=y(p,"origin",Object);return g.x=y(g,"x",Number),g.y=y(g,"y",Number),g}function K(p){p.width=document.documentElement.clientWidth,p.height=document.documentElement.clientHeight}function k(p){var g=p.getBoundingClientRect();p.width=g.width,p.height=g.height}function L(p){var g=document.createElement("canvas");return g.style.position="fixed",g.style.top="0px",g.style.left="0px",g.style.pointerEvents="none",g.style.zIndex=p,g}function z(p,g,D,x,q,H,G,P,W){p.save(),p.translate(g,D),p.rotate(H),p.scale(x,q),p.arc(0,0,1,G,P,W),p.restore()}function je(p){var g=p.angle*(Math.PI/180),D=p.spread*(Math.PI/180);return{x:p.x,y:p.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:p.startVelocity*.5+Math.random()*p.startVelocity,angle2D:-g+(.5*D-Math.random()*D),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:p.color,shape:p.shape,tick:0,totalTicks:p.ticks,decay:p.decay,drift:p.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:p.gravity*3,ovalScalar:.6,scalar:p.scalar,flat:p.flat}}function Vn(p,g){g.x+=Math.cos(g.angle2D)*g.velocity+g.drift,g.y+=Math.sin(g.angle2D)*g.velocity+g.gravity,g.velocity*=g.decay,g.flat?(g.wobble=0,g.wobbleX=g.x+10*g.scalar,g.wobbleY=g.y+10*g.scalar,g.tiltSin=0,g.tiltCos=0,g.random=1):(g.wobble+=g.wobbleSpeed,g.wobbleX=g.x+10*g.scalar*Math.cos(g.wobble),g.wobbleY=g.y+10*g.scalar*Math.sin(g.wobble),g.tiltAngle+=.1,g.tiltSin=Math.sin(g.tiltAngle),g.tiltCos=Math.cos(g.tiltAngle),g.random=Math.random()+2);var D=g.tick++/g.totalTicks,x=g.x+g.random*g.tiltCos,q=g.y+g.random*g.tiltSin,H=g.wobbleX+g.random*g.tiltCos,G=g.wobbleY+g.random*g.tiltSin;if(p.fillStyle="rgba("+g.color.r+", "+g.color.g+", "+g.color.b+", "+(1-D)+")",p.beginPath(),o&&g.shape.type==="path"&&typeof g.shape.path=="string"&&Array.isArray(g.shape.matrix))p.fill(th(g.shape.path,g.shape.matrix,g.x,g.y,Math.abs(H-x)*.1,Math.abs(G-q)*.1,Math.PI/10*g.wobble));else if(g.shape.type==="bitmap"){var P=Math.PI/10*g.wobble,W=Math.abs(H-x)*.1,oe=Math.abs(G-q)*.1,pe=g.shape.bitmap.width*g.scalar,le=g.shape.bitmap.height*g.scalar,ye=new DOMMatrix([Math.cos(P)*W,Math.sin(P)*W,-Math.sin(P)*oe,Math.cos(P)*oe,g.x,g.y]);ye.multiplySelf(new DOMMatrix(g.shape.matrix));var De=p.createPattern(u.transform(g.shape.bitmap),"no-repeat");De.setTransform(ye),p.globalAlpha=1-D,p.fillStyle=De,p.fillRect(g.x-pe/2,g.y-le/2,pe,le),p.globalAlpha=1}else if(g.shape==="circle")p.ellipse?p.ellipse(g.x,g.y,Math.abs(H-x)*g.ovalScalar,Math.abs(G-q)*g.ovalScalar,Math.PI/10*g.wobble,0,2*Math.PI):z(p,g.x,g.y,Math.abs(H-x)*g.ovalScalar,Math.abs(G-q)*g.ovalScalar,Math.PI/10*g.wobble,0,2*Math.PI);else if(g.shape==="star")for(var J=Math.PI/2*3,He=4*g.scalar,nt=8*g.scalar,st=g.x,mt=g.y,qt=5,at=Math.PI/qt;qt--;)st=g.x+Math.cos(J)*nt,mt=g.y+Math.sin(J)*nt,p.lineTo(st,mt),J+=at,st=g.x+Math.cos(J)*He,mt=g.y+Math.sin(J)*He,p.lineTo(st,mt),J+=at;else p.moveTo(Math.floor(g.x),Math.floor(g.y)),p.lineTo(Math.floor(g.wobbleX),Math.floor(q)),p.lineTo(Math.floor(H),Math.floor(G)),p.lineTo(Math.floor(x),Math.floor(g.wobbleY));return p.closePath(),p.fill(),g.tick<g.totalTicks}function Ge(p,g,D,x,q){var H=g.slice(),G=p.getContext("2d"),P,W,oe=c(function(pe){function le(){P=W=null,G.clearRect(0,0,x.width,x.height),u.clear(),q(),pe()}function ye(){s&&!(x.width===r.width&&x.height===r.height)&&(x.width=p.width=r.width,x.height=p.height=r.height),!x.width&&!x.height&&(D(p),x.width=p.width,x.height=p.height),G.clearRect(0,0,x.width,x.height),H=H.filter(function(De){return Vn(G,De)}),H.length?P=d.frame(ye):le()}P=d.frame(ye),W=le});return{addFettis:function(pe){return H=H.concat(pe),oe},canvas:p,promise:oe,reset:function(){P&&d.cancel(P),W&&W()}}}function we(p,g){var D=!p,x=!!y(g||{},"resize"),q=!1,H=y(g,"disableForReducedMotion",Boolean),G=i&&!!y(g||{},"useWorker"),P=G?h():null,W=D?K:k,oe=p&&P?!!p.__confetti_initialized:!1,pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,le;function ye(J,He,nt){for(var st=y(J,"particleCount",C),mt=y(J,"angle",Number),qt=y(J,"spread",Number),at=y(J,"startVelocity",Number),rh=y(J,"decay",Number),ih=y(J,"gravity",Number),oh=y(J,"drift",Number),Go=y(J,"colors",U),ah=y(J,"ticks",Number),Wo=y(J,"shapes"),lh=y(J,"scalar"),ch=!!y(J,"flat"),Qo=Y(J),Yo=st,Yr=[],uh=p.width*Qo.x,hh=p.height*Qo.y;Yo--;)Yr.push(je({x:uh,y:hh,angle:mt,spread:qt,startVelocity:at,color:Go[Yo%Go.length],shape:Wo[R(0,Wo.length)],ticks:ah,decay:rh,gravity:ih,drift:oh,scalar:lh,flat:ch}));return le?le.addFettis(Yr):(le=Ge(p,Yr,W,He,nt),le.promise)}function De(J){var He=H||y(J,"disableForReducedMotion",Boolean),nt=y(J,"zIndex",Number);if(He&&pe)return c(function(at){at()});D&&le?p=le.canvas:D&&!p&&(p=L(nt),document.body.appendChild(p)),x&&!oe&&W(p);var st={width:p.width,height:p.height};P&&!oe&&P.init(p),oe=!0,P&&(p.__confetti_initialized=!0);function mt(){if(P){var at={getBoundingClientRect:function(){if(!D)return p.getBoundingClientRect()}};W(at),P.postMessage({resize:{width:at.width,height:at.height}});return}st.width=st.height=null}function qt(){le=null,x&&(q=!1,e.removeEventListener("resize",mt)),D&&p&&(document.body.contains(p)&&document.body.removeChild(p),p=null,oe=!1)}return x&&!q&&(q=!0,e.addEventListener("resize",mt,!1)),P?P.fire(J,st,qt):ye(J,st,qt)}return De.reset=function(){P&&P.reset(),le&&le.reset()},De}var Ee;function We(){return Ee||(Ee=we(null,{useWorker:!0,resize:!0})),Ee}function th(p,g,D,x,q,H,G){var P=new Path2D(p),W=new Path2D;W.addPath(P,new DOMMatrix(g));var oe=new Path2D;return oe.addPath(W,new DOMMatrix([Math.cos(G)*q,Math.sin(G)*q,-Math.sin(G)*H,Math.cos(G)*H,D,x])),oe}function nh(p){if(!o)throw new Error("path confetti are not supported in this browser");var g,D;typeof p=="string"?g=p:(g=p.path,D=p.matrix);var x=new Path2D(g),q=document.createElement("canvas"),H=q.getContext("2d");if(!D){for(var G=1e3,P=G,W=G,oe=0,pe=0,le,ye,De=0;De<G;De+=2)for(var J=0;J<G;J+=2)H.isPointInPath(x,De,J,"nonzero")&&(P=Math.min(P,De),W=Math.min(W,J),oe=Math.max(oe,De),pe=Math.max(pe,J));le=oe-P,ye=pe-W;var He=10,nt=Math.min(He/le,He/ye);D=[nt,0,0,nt,-Math.round(le/2+P)*nt,-Math.round(ye/2+W)*nt]}return{type:"path",path:g,matrix:D}}function sh(p){var g,D=1,x="#000000",q='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof p=="string"?g=p:(g=p.text,D="scalar"in p?p.scalar:D,q="fontFamily"in p?p.fontFamily:q,x="color"in p?p.color:x);var H=10*D,G=""+H+"px "+q,P=new OffscreenCanvas(H,H),W=P.getContext("2d");W.font=G;var oe=W.measureText(g),pe=Math.ceil(oe.actualBoundingBoxRight+oe.actualBoundingBoxLeft),le=Math.ceil(oe.actualBoundingBoxAscent+oe.actualBoundingBoxDescent),ye=2,De=oe.actualBoundingBoxLeft+ye,J=oe.actualBoundingBoxAscent+ye;pe+=ye+ye,le+=ye+ye,P=new OffscreenCanvas(pe,le),W=P.getContext("2d"),W.font=G,W.fillStyle=x,W.fillText(g,De,J);var He=1/D;return{type:"bitmap",bitmap:P.transferToImageBitmap(),matrix:[He,0,0,He,-pe*He/2,-le*He/2]}}n.exports=function(){return We().apply(this,arguments)},n.exports.reset=function(){We().reset()},n.exports.create=we,n.exports.shapeFromPath=nh,n.exports.shapeFromText=sh})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Os,!1);const ky=Os.exports;Os.exports.create;function Ay(t){const e=t-1;return e*e*e+1}function pn(t){return--t*t*t*t*t+1}function ll(t,{delay:e=0,duration:n=400,easing:s=wl}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:i=>`opacity: ${i*r}`}}function pr(t,{delay:e=0,duration:n=400,easing:s=Ay,x:r=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[d,h]=Zo(r),[f,m]=Zo(i);return{delay:e,duration:n,easing:s,css:(v,y)=>`
			transform: ${c} translate(${(1-v)*d}${h}, ${(1-v)*f}${m});
			opacity: ${l-u*y}`}}/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},cl=Dy;function ul(t,e,n){const s=t.slice();return s[11]=e[n][0],s[12]=e[n][1],s}function mi(t){let e,n=[t[12]],s={};for(let r=0;r<n.length;r+=1)s=ae(s,n[r]);return{c(){e=Ze(t[11]),Qs(e,s)},m(r,i){ie(r,e,i)},p(r,i){Qs(e,s=It(n,[i&32&&r[12]]))},d(r){r&&ne(e)}}}function hl(t){let e=t[11],n,s=t[11]&&mi(t);return{c(){s&&s.c(),n=ys()},m(r,i){s&&s.m(r,i),ie(r,n,i)},p(r,i){r[11]?e?qe(e,r[11])?(s.d(1),s=mi(r),e=r[11],s.c(),s.m(n.parentNode,n)):s.p(r,i):(s=mi(r),e=r[11],s.c(),s.m(n.parentNode,n)):e&&(s.d(1),s=null,e=r[11])},d(r){r&&ne(n),s&&s.d(r)}}}function Ny(t){let e,n,s,r,i,o=t[5],a=[];for(let h=0;h<o.length;h+=1)a[h]=hl(ul(t,o,h));const l=t[10].default,c=$t(l,t,t[9],null);let u=[cl,t[7],{width:t[2]},{height:t[2]},{stroke:t[1]},{"stroke-width":s=t[4]?Number(t[3])*24/Number(t[2]):t[3]},{class:r=t[6]("lucide-icon","lucide",t[0]?`lucide-${t[0]}`:"",t[8].class)}],d={};for(let h=0;h<u.length;h+=1)d=ae(d,u[h]);return{c(){e=Ze("svg");for(let h=0;h<a.length;h+=1)a[h].c();n=ys(),c&&c.c(),Qs(e,d)},m(h,f){ie(h,e,f);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(e,null);T(e,n),c&&c.m(e,null),i=!0},p(h,[f]){if(f&32){o=h[5];let m;for(m=0;m<o.length;m+=1){const v=ul(h,o,m);a[m]?a[m].p(v,f):(a[m]=hl(v),a[m].c(),a[m].m(e,n))}for(;m<a.length;m+=1)a[m].d(1);a.length=o.length}c&&c.p&&(!i||f&512)&&xt(c,l,h,h[9],i?Ft(l,h[9],f,null):Vt(h[9]),null),Qs(e,d=It(u,[cl,f&128&&h[7],(!i||f&4)&&{width:h[2]},(!i||f&4)&&{height:h[2]},(!i||f&2)&&{stroke:h[1]},(!i||f&28&&s!==(s=h[4]?Number(h[3])*24/Number(h[2]):h[3]))&&{"stroke-width":s},(!i||f&257&&r!==(r=h[6]("lucide-icon","lucide",h[0]?`lucide-${h[0]}`:"",h[8].class)))&&{class:r}]))},i(h){i||(M(c,h),i=!0)},o(h){$(c,h),i=!1},d(h){h&&ne(e),vh(a,h),c&&c.d(h)}}}function My(t,e,n){const s=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let r=Jo(e,s),{$$slots:i={},$$scope:o}=e,{name:a=void 0}=e,{color:l="currentColor"}=e,{size:c=24}=e,{strokeWidth:u=2}=e,{absoluteStrokeWidth:d=!1}=e,{iconNode:h=[]}=e;const f=(...m)=>m.filter((v,y,C)=>Boolean(v)&&C.indexOf(v)===y).join(" ");return t.$$set=m=>{n(8,e=ae(ae({},e),Be(m))),n(7,r=Jo(e,s)),"name"in m&&n(0,a=m.name),"color"in m&&n(1,l=m.color),"size"in m&&n(2,c=m.size),"strokeWidth"in m&&n(3,u=m.strokeWidth),"absoluteStrokeWidth"in m&&n(4,d=m.absoluteStrokeWidth),"iconNode"in m&&n(5,h=m.iconNode),"$$scope"in m&&n(9,o=m.$$scope)},e=Be(e),[a,l,c,u,d,h,f,r,e,o,i]}class Ry extends Je{constructor(e){super(),Xe(this,e,My,Ny,qe,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const an=Ry;function Oy(t){let e;const n=t[2].default,s=$t(n,t,t[3],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&8)&&xt(s,n,r,r[3],e?Ft(n,r[3],i,null):Vt(r[3]),null)},i(r){e||(M(s,r),e=!0)},o(r){$(s,r),e=!1},d(r){s&&s.d(r)}}}function Ly(t){let e,n;const s=[{name:"circle-check"},t[1],{iconNode:t[0]}];let r={$$slots:{default:[Oy]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=ae(r,s[i]);return e=new an({props:r}),{c(){ge(e.$$.fragment)},m(i,o){fe(e,i,o),n=!0},p(i,[o]){const a=o&3?It(s,[s[0],o&2&&tn(i[1]),o&1&&{iconNode:i[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){de(e,i)}}}function Py(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];return t.$$set=o=>{n(1,e=ae(ae({},e),Be(o))),"$$scope"in o&&n(3,r=o.$$scope)},e=Be(e),[i,e,s,r]}class $y extends Je{constructor(e){super(),Xe(this,e,Py,Ly,qe,{})}}const Zu=$y;function Fy(t){let e;const n=t[2].default,s=$t(n,t,t[3],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&8)&&xt(s,n,r,r[3],e?Ft(n,r[3],i,null):Vt(r[3]),null)},i(r){e||(M(s,r),e=!0)},o(r){$(s,r),e=!1},d(r){s&&s.d(r)}}}function xy(t){let e,n;const s=[{name:"ghost"},t[1],{iconNode:t[0]}];let r={$$slots:{default:[Fy]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=ae(r,s[i]);return e=new an({props:r}),{c(){ge(e.$$.fragment)},m(i,o){fe(e,i,o),n=!0},p(i,[o]){const a=o&3?It(s,[s[0],o&2&&tn(i[1]),o&1&&{iconNode:i[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){de(e,i)}}}function Vy(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]];return t.$$set=o=>{n(1,e=ae(ae({},e),Be(o))),"$$scope"in o&&n(3,r=o.$$scope)},e=Be(e),[i,e,s,r]}class By extends Je{constructor(e){super(),Xe(this,e,Vy,xy,qe,{})}}const Uy=By;function jy(t){let e;const n=t[2].default,s=$t(n,t,t[3],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&8)&&xt(s,n,r,r[3],e?Ft(n,r[3],i,null):Vt(r[3]),null)},i(r){e||(M(s,r),e=!0)},o(r){$(s,r),e=!1},d(r){s&&s.d(r)}}}function zy(t){let e,n;const s=[{name:"party-popper"},t[1],{iconNode:t[0]}];let r={$$slots:{default:[jy]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=ae(r,s[i]);return e=new an({props:r}),{c(){ge(e.$$.fragment)},m(i,o){fe(e,i,o),n=!0},p(i,[o]){const a=o&3?It(s,[s[0],o&2&&tn(i[1]),o&1&&{iconNode:i[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){de(e,i)}}}function qy(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]];return t.$$set=o=>{n(1,e=ae(ae({},e),Be(o))),"$$scope"in o&&n(3,r=o.$$scope)},e=Be(e),[i,e,s,r]}class Hy extends Je{constructor(e){super(),Xe(this,e,qy,zy,qe,{})}}const Ky=Hy;function Gy(t){let e;const n=t[2].default,s=$t(n,t,t[3],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&8)&&xt(s,n,r,r[3],e?Ft(n,r[3],i,null):Vt(r[3]),null)},i(r){e||(M(s,r),e=!0)},o(r){$(s,r),e=!1},d(r){s&&s.d(r)}}}function Wy(t){let e,n;const s=[{name:"refresh-cw"},t[1],{iconNode:t[0]}];let r={$$slots:{default:[Gy]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=ae(r,s[i]);return e=new an({props:r}),{c(){ge(e.$$.fragment)},m(i,o){fe(e,i,o),n=!0},p(i,[o]){const a=o&3?It(s,[s[0],o&2&&tn(i[1]),o&1&&{iconNode:i[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){de(e,i)}}}function Qy(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];return t.$$set=o=>{n(1,e=ae(ae({},e),Be(o))),"$$scope"in o&&n(3,r=o.$$scope)},e=Be(e),[i,e,s,r]}class Yy extends Je{constructor(e){super(),Xe(this,e,Qy,Wy,qe,{})}}const Xy=Yy;function Jy(t){let e;const n=t[2].default,s=$t(n,t,t[3],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&8)&&xt(s,n,r,r[3],e?Ft(n,r[3],i,null):Vt(r[3]),null)},i(r){e||(M(s,r),e=!0)},o(r){$(s,r),e=!1},d(r){s&&s.d(r)}}}function Zy(t){let e,n;const s=[{name:"trophy"},t[1],{iconNode:t[0]}];let r={$$slots:{default:[Jy]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=ae(r,s[i]);return e=new an({props:r}),{c(){ge(e.$$.fragment)},m(i,o){fe(e,i,o),n=!0},p(i,[o]){const a=o&3?It(s,[s[0],o&2&&tn(i[1]),o&1&&{iconNode:i[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){de(e,i)}}}function ev(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6"}]];return t.$$set=o=>{n(1,e=ae(ae({},e),Be(o))),"$$scope"in o&&n(3,r=o.$$scope)},e=Be(e),[i,e,s,r]}class tv extends Je{constructor(e){super(),Xe(this,e,ev,Zy,qe,{})}}const Ls=tv;function nv(t){let e;const n=t[2].default,s=$t(n,t,t[3],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&8)&&xt(s,n,r,r[3],e?Ft(n,r[3],i,null):Vt(r[3]),null)},i(r){e||(M(s,r),e=!0)},o(r){$(s,r),e=!1},d(r){s&&s.d(r)}}}function sv(t){let e,n;const s=[{name:"users"},t[1],{iconNode:t[0]}];let r={$$slots:{default:[nv]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=ae(r,s[i]);return e=new an({props:r}),{c(){ge(e.$$.fragment)},m(i,o){fe(e,i,o),n=!0},p(i,[o]){const a=o&3?It(s,[s[0],o&2&&tn(i[1]),o&1&&{iconNode:i[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){de(e,i)}}}function rv(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];return t.$$set=o=>{n(1,e=ae(ae({},e),Be(o))),"$$scope"in o&&n(3,r=o.$$scope)},e=Be(e),[i,e,s,r]}class iv extends Je{constructor(e){super(),Xe(this,e,rv,sv,qe,{})}}const ov=iv;function av(t){let e;const n=t[2].default,s=$t(n,t,t[3],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&8)&&xt(s,n,r,r[3],e?Ft(n,r[3],i,null):Vt(r[3]),null)},i(r){e||(M(s,r),e=!0)},o(r){$(s,r),e=!1},d(r){s&&s.d(r)}}}function lv(t){let e,n;const s=[{name:"x"},t[1],{iconNode:t[0]}];let r={$$slots:{default:[av]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=ae(r,s[i]);return e=new an({props:r}),{c(){ge(e.$$.fragment)},m(i,o){fe(e,i,o),n=!0},p(i,[o]){const a=o&3?It(s,[s[0],o&2&&tn(i[1]),o&1&&{iconNode:i[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){de(e,i)}}}function cv(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];return t.$$set=o=>{n(1,e=ae(ae({},e),Be(o))),"$$scope"in o&&n(3,r=o.$$scope)},e=Be(e),[i,e,s,r]}class uv extends Je{constructor(e){super(),Xe(this,e,cv,lv,qe,{})}}const hv=uv;function fl(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function dl(t){let e,n,s,r,i,o,a,l,c,u,d,h,f,m,v,y,C,R,O,U;a=new Ls({props:{size:28,color:"var(--dark-purple)"}}),h=new hv({props:{size:20}});const ee=[dv,fv],Y=[];function K(k,L){return k[2].length===0?0:1}return v=K(t),y=Y[v]=ee[v](t),{c(){e=S("div"),s=se(),r=S("div"),i=S("div"),o=S("div"),ge(a.$$.fragment),l=se(),c=S("h2"),c.textContent="Leaderboard",u=se(),d=S("button"),ge(h.$$.fragment),f=se(),m=S("div"),y.c(),w(e,"class","leaderboard-overlay svelte-w15ack"),w(c,"class","svelte-w15ack"),w(o,"class","header-content svelte-w15ack"),w(d,"class","close-btn svelte-w15ack"),w(d,"title","Close"),w(i,"class","leaderboard-header svelte-w15ack"),w(m,"class","leaderboard-content svelte-w15ack"),w(r,"class","leaderboard-container svelte-w15ack")},m(k,L){ie(k,e,L),ie(k,s,L),ie(k,r,L),T(r,i),T(i,o),fe(a,o,null),T(o,l),T(o,c),T(i,u),T(i,d),fe(h,d,null),T(r,f),T(r,m),Y[v].m(m,null),R=!0,O||(U=[vt(e,"click",t[3]),vt(d,"click",t[3])],O=!0)},p(k,L){t=k;let z=v;v=K(t),v===z?Y[v].p(t,L):(Bt(),$(Y[z],1,1,()=>{Y[z]=null}),Ut(),y=Y[v],y?y.p(t,L):(y=Y[v]=ee[v](t),y.c()),M(y,1),y.m(m,null))},i(k){R||(Yt(()=>{!R||(n||(n=gn(e,ll,{duration:200,easing:pn},!0)),n.run(1))}),M(a.$$.fragment,k),M(h.$$.fragment,k),M(y),Yt(()=>{!R||(C||(C=gn(r,pr,{y:20,duration:300,easing:pn},!0)),C.run(1))}),R=!0)},o(k){n||(n=gn(e,ll,{duration:200,easing:pn},!1)),n.run(0),$(a.$$.fragment,k),$(h.$$.fragment,k),$(y),C||(C=gn(r,pr,{y:20,duration:300,easing:pn},!1)),C.run(0),R=!1},d(k){k&&ne(e),k&&n&&n.end(),k&&ne(s),k&&ne(r),de(a),de(h),Y[v].d(),k&&C&&C.end(),O=!1,gt(U)}}}function fv(t){let e,n=[],s=new Map,r,i=t[2];const o=a=>a[7].name;for(let a=0;a<i.length;a+=1){let l=fl(t,i,a),c=o(l);s.set(c,n[a]=gl(c,l))}return{c(){e=S("div");for(let a=0;a<n.length;a+=1)n[a].c();w(e,"class","leaderboard-list svelte-w15ack")},m(a,l){ie(a,e,l);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);r=!0},p(a,l){l&4&&(i=a[2],Bt(),n=Ph(n,l,o,1,a,i,s,e,Lh,gl,null,fl),Ut())},i(a){if(!r){for(let l=0;l<i.length;l+=1)M(n[l]);r=!0}},o(a){for(let l=0;l<n.length;l+=1)$(n[l]);r=!1},d(a){a&&ne(e);for(let l=0;l<n.length;l+=1)n[l].d()}}}function dv(t){let e;return{c(){e=S("div"),e.innerHTML=`<p class="svelte-w15ack">No completions yet!</p> 
                    <p class="subtext svelte-w15ack">Complete challenges to appear on the leaderboard</p>`,w(e,"class","empty-state svelte-w15ack")},m(n,s){ie(n,e,s)},p:Se,i:Se,o:Se,d(n){n&&ne(e)}}}function gv(t){let e,n=t[9]+1+"",s;return{c(){e=S("span"),s=it(n),w(e,"class","rank-number svelte-w15ack")},m(r,i){ie(r,e,i),T(e,s)},p(r,i){i&4&&n!==(n=r[9]+1+"")&&Rt(s,n)},i:Se,o:Se,d(r){r&&ne(e)}}}function mv(t){let e,n;return e=new Ls({props:{size:24,color:"var(--orange-dark)"}}),{c(){ge(e.$$.fragment)},m(s,r){fe(e,s,r),n=!0},p:Se,i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function pv(t){let e,n;return e=new Ls({props:{size:24,color:"var(--purple-light)"}}),{c(){ge(e.$$.fragment)},m(s,r){fe(e,s,r),n=!0},p:Se,i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function yv(t){let e,n;return e=new Ls({props:{size:24,color:"var(--orange-primary)"}}),{c(){ge(e.$$.fragment)},m(s,r){fe(e,s,r),n=!0},p:Se,i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function gl(t,e){let n,s,r,i,o,a,l,c=e[7].name+"",u,d,h,f,m=e[7].challenges_completed+"",v,y,C,R,O,U;const ee=[yv,pv,mv,gv],Y=[];function K(k,L){return k[9]===0?0:k[9]===1?1:k[9]===2?2:3}return r=K(e),i=Y[r]=ee[r](e),{key:t,first:null,c(){n=S("div"),s=S("div"),i.c(),o=se(),a=S("div"),l=S("span"),u=it(c),d=se(),h=S("div"),f=S("span"),v=it(m),y=se(),C=S("span"),C.textContent="challenges",R=se(),w(s,"class","rank svelte-w15ack"),ta(s,"color",ml(e[9])),w(l,"class","player-name svelte-w15ack"),w(a,"class","player-info svelte-w15ack"),w(f,"class","score-value svelte-w15ack"),w(C,"class","score-label svelte-w15ack"),w(h,"class","score svelte-w15ack"),w(n,"class","leaderboard-item svelte-w15ack"),tt(n,"top-three",e[9]<3),this.first=n},m(k,L){ie(k,n,L),T(n,s),Y[r].m(s,null),T(n,o),T(n,a),T(a,l),T(l,u),T(n,d),T(n,h),T(h,f),T(f,v),T(h,y),T(h,C),T(n,R),U=!0},p(k,L){e=k;let z=r;r=K(e),r===z?Y[r].p(e,L):(Bt(),$(Y[z],1,1,()=>{Y[z]=null}),Ut(),i=Y[r],i?i.p(e,L):(i=Y[r]=ee[r](e),i.c()),M(i,1),i.m(s,null)),(!U||L&4)&&ta(s,"color",ml(e[9])),(!U||L&4)&&c!==(c=e[7].name+"")&&Rt(u,c),(!U||L&4)&&m!==(m=e[7].challenges_completed+"")&&Rt(v,m),(!U||L&4)&&tt(n,"top-three",e[9]<3)},i(k){U||(M(i),Yt(()=>{!U||(O||(O=gn(n,pr,{y:20,duration:300,delay:e[9]*50,easing:pn},!0)),O.run(1))}),U=!0)},o(k){$(i),O||(O=gn(n,pr,{y:20,duration:300,delay:e[9]*50,easing:pn},!1)),O.run(0),U=!1},d(k){k&&ne(n),Y[r].d(),k&&O&&O.end()}}}function vv(t){let e,n,s,r,i,o,a;n=new Ls({props:{size:24}});let l=t[0]&&dl(t);return{c(){e=S("div"),ge(n.$$.fragment),s=se(),l&&l.c(),r=ys(),w(e,"class","icon svelte-w15ack"),tt(e,"active",t[0])},m(c,u){ie(c,e,u),fe(n,e,null),t[6](e),ie(c,s,u),l&&l.m(c,u),ie(c,r,u),i=!0,o||(a=vt(e,"click",t[3]),o=!0)},p(c,[u]){(!i||u&1)&&tt(e,"active",c[0]),c[0]?l?(l.p(c,u),u&1&&M(l,1)):(l=dl(c),l.c(),M(l,1),l.m(r.parentNode,r)):l&&(Bt(),$(l,1,1,()=>{l=null}),Ut())},i(c){i||(M(n.$$.fragment,c),M(l),i=!0)},o(c){$(n.$$.fragment,c),$(l),i=!1},d(c){c&&ne(e),de(n),t[6](null),c&&ne(s),l&&l.d(c),c&&ne(r),o=!1,a()}}}function ml(t){return t===0?"var(--orange-primary)":t===1?"var(--purple-light)":t===2?"var(--orange-dark)":"var(--text-dark)"}function wv(t,e,n){let s,{challengeList:r=[]}=e,i={},o=!1,a;function l(){n(0,o=!o),o?n(1,a.style["pointer-events"]="none",a):n(1,a.style["pointer-events"]="all",a)}function c(u){Js[u?"unshift":"push"](()=>{a=u,n(1,a)})}return t.$$set=u=>{"challengeList"in u&&n(4,r=u.challengeList)},t.$$.update=()=>{t.$$.dirty&48&&(n(5,i={}),r.forEach(u=>{u.completed.forEach(d=>{i[d]?n(5,i[d]++,i):n(5,i[d]=1,i)})})),t.$$.dirty&32&&n(2,s=Object.keys(i).map(u=>({name:u,challenges_completed:i[u]})).sort((u,d)=>d.challenges_completed-u.challenges_completed))},[o,a,s,l,r,i,c]}class Ev extends Je{constructor(e){super(),Xe(this,e,wv,vv,qe,{challengeList:4})}}function pl(t){let e,n;return e=new Zu({props:{size:16,color:"var(--green-success)"}}),{c(){ge(e.$$.fragment)},m(s,r){fe(e,s,r),n=!0},i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function _v(t){let e,n,s,r,i,o,a,l,c,u,d,h,f,m,v,y,C,R,O,U,ee,Y,K,k,L,z,je,Vn,Ge,we=t[2]&&pl();return{c(){e=S("div"),n=S("div"),s=S("div"),we&&we.c(),r=se(),i=S("span"),i.textContent="Progress",o=se(),a=S("div"),l=Ze("svg"),c=Ze("defs"),u=Ze("linearGradient"),d=Ze("stop"),h=Ze("stop"),f=Ze("linearGradient"),m=Ze("stop"),v=Ze("stop"),y=Ze("circle"),C=Ze("circle"),U=se(),ee=S("div"),Y=S("span"),K=it(t[1]),k=se(),L=S("span"),L.textContent="/",z=se(),je=S("span"),Vn=it(t[0]),w(i,"class","progress-label svelte-12svejg"),w(s,"class","progress-header svelte-12svejg"),w(d,"offset","0%"),w(d,"stop-color","var(--orange-light)"),w(h,"offset","100%"),w(h,"stop-color","var(--orange-primary)"),w(u,"id","progressGradient"),w(u,"x1","0%"),w(u,"y1","0%"),w(u,"x2","100%"),w(u,"y2","100%"),w(m,"offset","0%"),w(m,"stop-color","var(--green-success)"),w(v,"offset","100%"),w(v,"stop-color","#90D490"),w(f,"id","progressGradientDone"),w(f,"x1","0%"),w(f,"y1","0%"),w(f,"x2","100%"),w(f,"y2","100%"),w(y,"class","progress-bg svelte-12svejg"),w(y,"cx","50"),w(y,"cy","50"),w(y,"r","42"),w(y,"fill","none"),w(y,"stroke","rgba(255, 179, 102, 0.2)"),w(y,"stroke-width","8"),w(C,"class","progress-circle svelte-12svejg"),w(C,"cx","50"),w(C,"cy","50"),w(C,"r","42"),w(C,"fill","none"),w(C,"stroke",R=`url(#${t[3]})`),w(C,"stroke-width","8"),w(C,"stroke-linecap","round"),w(C,"stroke-dasharray",t[4]),w(C,"stroke-dashoffset",O=t[4]-t[4]*t[5]/100),w(C,"transform","rotate(-90 50 50)"),tt(C,"done",t[2]),w(l,"class","radial-progress svelte-12svejg"),w(l,"viewBox","0 0 100 100"),w(Y,"class","completed-number svelte-12svejg"),w(L,"class","divider svelte-12svejg"),w(je,"class","total-number svelte-12svejg"),w(ee,"class","progress-numbers svelte-12svejg"),w(a,"class","radial-progress-wrapper svelte-12svejg"),w(n,"class","radial-progress-container svelte-12svejg"),w(e,"id","complete-box"),w(e,"class","card-back svelte-12svejg"),tt(e,"done",t[2])},m(Ee,We){ie(Ee,e,We),T(e,n),T(n,s),we&&we.m(s,null),T(s,r),T(s,i),T(n,o),T(n,a),T(a,l),T(l,c),T(c,u),T(u,d),T(u,h),T(c,f),T(f,m),T(f,v),T(l,y),T(l,C),T(a,U),T(a,ee),T(ee,Y),T(Y,K),T(ee,k),T(ee,L),T(ee,z),T(ee,je),T(je,Vn),Ge=!0},p(Ee,[We]){Ee[2]?we?We&4&&M(we,1):(we=pl(),we.c(),M(we,1),we.m(s,r)):we&&(Bt(),$(we,1,1,()=>{we=null}),Ut()),(!Ge||We&8&&R!==(R=`url(#${Ee[3]})`))&&w(C,"stroke",R),(!Ge||We&16)&&w(C,"stroke-dasharray",Ee[4]),(!Ge||We&48&&O!==(O=Ee[4]-Ee[4]*Ee[5]/100))&&w(C,"stroke-dashoffset",O),(!Ge||We&4)&&tt(C,"done",Ee[2]),(!Ge||We&2)&&Rt(K,Ee[1]),(!Ge||We&1)&&Rt(Vn,Ee[0]),(!Ge||We&4)&&tt(e,"done",Ee[2])},i(Ee){Ge||(M(we),Ge=!0)},o(Ee){$(we),Ge=!1},d(Ee){Ee&&ne(e),we&&we.d()}}}function Tv(t,e,n){let s,r,i,o,{total:a}=e,{completed:l}=e;return t.$$set=c=>{"total"in c&&n(0,a=c.total),"completed"in c&&n(1,l=c.completed)},t.$$.update=()=>{t.$$.dirty&3&&n(2,s=l===a),t.$$.dirty&3&&n(5,r=a>0?Math.round(l/a*100):0),t.$$.dirty&4&&n(3,o=s?"progressGradientDone":"progressGradient")},n(4,i=2*Math.PI*42),[a,l,s,o,i,r]}class Cv extends Je{constructor(e){super(),Xe(this,e,Tv,_v,qe,{total:0,completed:1})}}function bv(t){let e,n,s,r,i,o=t[1].name+"",a,l,c,u,d,h,f,m,v,y,C,R,O,U,ee,Y;function K(z,je){return z[1].completed.length>0?kv:Sv}let k=K(t),L=k(t);return y=new Xy({props:{size:24}}),O=new Zu({props:{size:24}}),{c(){e=S("div"),n=S("h2"),n.textContent="Take a photo of...",s=se(),r=S("div"),i=S("h1"),a=it(o),l=se(),c=S("div"),u=S("h3"),u.textContent="Completed by:",d=se(),h=S("div"),L.c(),f=se(),m=S("div"),v=S("button"),ge(y.$$.fragment),C=se(),R=S("button"),ge(O.$$.fragment),w(n,"class","prompt svelte-1cg9f6i"),w(i,"class","challenge svelte-1cg9f6i"),w(r,"class","challenge-card svelte-1cg9f6i"),w(u,"class","completers-label svelte-1cg9f6i"),w(h,"class","completers svelte-1cg9f6i"),tt(h,"has-completers",t[1].completed.length>0),w(c,"class","completers-section svelte-1cg9f6i"),w(e,"class","challenge-block svelte-1cg9f6i"),w(v,"class","action-btn refresh-btn svelte-1cg9f6i"),w(v,"title","New Challenge"),w(R,"class","action-btn complete-btn svelte-1cg9f6i"),w(R,"title","Complete Challenge"),w(m,"class","buttons svelte-1cg9f6i")},m(z,je){ie(z,e,je),T(e,n),T(e,s),T(e,r),T(r,i),T(i,a),T(e,l),T(e,c),T(c,u),T(c,d),T(c,h),L.m(h,null),ie(z,f,je),ie(z,m,je),T(m,v),fe(y,v,null),T(m,C),T(m,R),fe(O,R,null),U=!0,ee||(Y=[vt(v,"click",t[4]),vt(R,"click",t[5])],ee=!0)},p(z,je){(!U||je&2)&&o!==(o=z[1].name+"")&&Rt(a,o),k===(k=K(z))&&L?L.p(z,je):(L.d(1),L=k(z),L&&(L.c(),L.m(h,null))),(!U||je&2)&&tt(h,"has-completers",z[1].completed.length>0)},i(z){U||(M(y.$$.fragment,z),M(O.$$.fragment,z),U=!0)},o(z){$(y.$$.fragment,z),$(O.$$.fragment,z),U=!1},d(z){z&&ne(e),L.d(),z&&ne(f),z&&ne(m),de(y),de(O),ee=!1,gt(Y)}}}function Iv(t){let e,n,s,r,i,o,a,l;return s=new Ky({props:{size:64,color:"var(--orange-primary)"}}),{c(){e=S("div"),n=S("div"),ge(s.$$.fragment),r=se(),i=S("h1"),i.textContent="All challenges completed!",o=se(),a=S("h2"),a.textContent="Submit your best picture from the game below",w(n,"class","icon-large svelte-1cg9f6i"),w(i,"class","svelte-1cg9f6i"),w(a,"class","svelte-1cg9f6i"),w(e,"class","completion-celebration svelte-1cg9f6i")},m(c,u){ie(c,e,u),T(e,n),fe(s,n,null),T(e,r),T(e,i),T(e,o),T(e,a),l=!0},p:Se,i(c){l||(M(s.$$.fragment,c),l=!0)},o(c){$(s.$$.fragment,c),l=!1},d(c){c&&ne(e),de(s)}}}function Sv(t){let e;return{c(){e=S("span"),e.textContent="Not completed by anyone yet!",w(e,"class","no-completers svelte-1cg9f6i")},m(n,s){ie(n,e,s)},p:Se,d(n){n&&ne(e)}}}function kv(t){let e,n=t[1].completed.join(", ")+"",s;return{c(){e=S("span"),s=it(n),w(e,"class","completer-list svelte-1cg9f6i")},m(r,i){ie(r,e,i),T(e,s)},p(r,i){i&2&&n!==(n=r[1].completed.join(", ")+"")&&Rt(s,n)},d(r){r&&ne(e)}}}function Av(t){let e,n,s,r,i,o,a,l,c;e=new Cv({props:{total:t[2].length,completed:t[3]}}),s=new Ev({props:{challengeList:t[2]}});const u=[Iv,bv],d=[];function h(f,m){return f[3]==f[2].length?0:f[1]&&f[1].name&&f[1].completed?1:-1}return~(a=h(t))&&(l=d[a]=u[a](t)),{c(){ge(e.$$.fragment),n=se(),ge(s.$$.fragment),r=se(),i=S("div"),o=S("div"),l&&l.c(),w(o,"class","heading card-back svelte-1cg9f6i"),tt(o,"completed",t[1].completed.includes(t[0])),w(i,"class","container svelte-1cg9f6i")},m(f,m){fe(e,f,m),ie(f,n,m),fe(s,f,m),ie(f,r,m),ie(f,i,m),T(i,o),~a&&d[a].m(o,null),c=!0},p(f,[m]){const v={};m&4&&(v.total=f[2].length),m&8&&(v.completed=f[3]),e.$set(v);const y={};m&4&&(y.challengeList=f[2]),s.$set(y);let C=a;a=h(f),a===C?~a&&d[a].p(f,m):(l&&(Bt(),$(d[C],1,1,()=>{d[C]=null}),Ut()),~a?(l=d[a],l?l.p(f,m):(l=d[a]=u[a](f),l.c()),M(l,1),l.m(o,null)):l=null),(!c||m&3)&&tt(o,"completed",f[1].completed.includes(f[0]))},i(f){c||(M(e.$$.fragment,f),M(s.$$.fragment,f),M(l),c=!0)},o(f){$(e.$$.fragment,f),$(s.$$.fragment,f),$(l),c=!1},d(f){de(e,f),f&&ne(n),de(s,f),f&&ne(r),f&&ne(i),~a&&d[a].d()}}}let yl="halloween";function Dv(t,e,n){let{name:s}=e,r={id:"",name:"Loading...",completed:[]},i=[],o=0;const a=ty(al,yl),l=Ty(a,h=>{n(3,o=0),n(2,i=[]),h.forEach(f=>{const m=f.data(),v=Array.isArray(m.completed)?m.completed:[],y={id:f.id,name:m.name||"Unnamed Challenge",completed:v};i.push(y),r&&r.id&&r.id==f.id&&n(1,r=y),v.includes(s)&&n(3,o+=1)}),(!r||r.name=="Loading...")&&c()},h=>{console.error("Error in Firestore snapshot:",h),alert("Error loading challenges. Please refresh the page!")});Sh(()=>{l&&l()});function c(){const h=i.filter(m=>!m.completed.includes(s)&&m.id!==r.id);if(h.length===0){console.warn("No uncompleted and unique challenges available.");return}const f=Math.floor(Math.random()*h.length);n(1,r=h[f])}function u(){const f={origin:{y:.7},colors:["#FFB366","#4A4A7A","#FFD4A6","#6B6B9E","#B8E6B8","#FFB3D1"],shapes:["square","circle"]};function m(v,y){ky({...f,...y,particleCount:Math.floor(200*v)})}m(.25,{spread:26,startVelocity:55}),m(.2,{spread:60}),m(.35,{spread:100,decay:.91,scalar:.8}),m(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),m(.1,{spread:120,startVelocity:45})}async function d(){var h;if(confirm("Mark this challenge as completed?")){if(!r||!r.id){alert("No challenge selected!");return}if(r.completed.includes(s)){alert("Challenge already completed!");return}try{const f=ny(al,yl,r.id),m=await Ey(f);if(!m.exists()){alert("Challenge not found in database. Please refresh and try again!");return}const v=m.data().completed||[];if(v.includes(s)){alert("Challenge already completed by you!"),n(1,r={id:r.id,name:r.name,completed:v});return}await _y(f,{completed:by(s)}),u(),c()}catch(f){console.error("Error completing challenge:",f),f.code==="permission-denied"?alert("Permission denied. Please check your access!"):f.code==="unavailable"||((h=f.message)==null?void 0:h.includes("network"))?alert("Network error. Please check your connection and try again!"):alert("Unable to complete challenge. Please try again or refresh!")}}}return t.$$set=h=>{"name"in h&&n(0,s=h.name)},[s,r,i,o,c,d]}class Nv extends Je{constructor(e){super(),Xe(this,e,Dv,Av,qe,{name:0})}}const un=[];function Mv(t,e=Se){let n;const s=new Set;function r(a){if(qe(t,a)&&(t=a,n)){const l=!un.length;for(const c of s)c[1](),un.push(c,t);if(l){for(let c=0;c<un.length;c+=2)un[c][0](un[c+1]);un.length=0}}}function i(a){r(a(t))}function o(a,l=Se){const c=[a,l];return s.add(c),s.size===1&&(n=e(r)||Se),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const eh=(t,e)=>{const n=l=>JSON.stringify(l,null,2),s=l=>{try{return JSON.parse(l)}catch(c){return console.error(`Error parsing localStorage key "${t}":`,c),localStorage.setItem(t,n(e)),e}};localStorage.getItem(t)===null&&localStorage.setItem(t,n(e));const r=s(localStorage.getItem(t)),{subscribe:i,set:o,update:a}=Mv(r);return{subscribe:i,set:l=>{try{return localStorage.setItem(t,n(l)),o(l)}catch(c){return console.error(`Error saving to localStorage key "${t}":`,c),o(l)}},update:a}},Rv="",Ov=!1,pi=eh("pc-name",Rv);eh("pc-tutorial",Ov);function Lv(t){let e,n,s,r,i,o,a,l,c,u,d,h,f,m,v;return r=new Uy({props:{size:48,color:"var(--orange-primary)"}}),{c(){e=S("div"),n=S("div"),s=S("div"),ge(r.$$.fragment),i=se(),o=S("label"),o.innerHTML=`What&#39;s your team name?
                <span class="subtitle svelte-1f4i5n5">Make sure it&#39;s unique!</span>`,a=se(),l=S("input"),c=se(),u=S("button"),d=it("Let's go!"),w(s,"class","icon-wrapper svelte-1f4i5n5"),w(o,"for","name-input"),w(o,"class","svelte-1f4i5n5"),w(l,"id","name-input"),w(l,"placeholder","Type your team name here..."),w(l,"type","text"),w(l,"autocomplete","off"),w(l,"class","svelte-1f4i5n5"),u.disabled=h=!t[1].trim(),w(u,"class","svelte-1f4i5n5"),w(n,"class","card-back svelte-1f4i5n5"),w(e,"id","name-container"),w(e,"class","svelte-1f4i5n5")},m(y,C){ie(y,e,C),T(e,n),T(n,s),fe(r,s,null),T(n,i),T(n,o),T(n,a),T(n,l),ea(l,t[1]),T(n,c),T(n,u),T(u,d),f=!0,m||(v=[vt(l,"input",t[5]),vt(l,"keydown",t[4]),vt(u,"click",t[2])],m=!0)},p(y,C){C&2&&l.value!==y[1]&&ea(l,y[1]),(!f||C&2&&h!==(h=!y[1].trim()))&&(u.disabled=h)},i(y){f||(M(r.$$.fragment,y),f=!0)},o(y){$(r.$$.fragment,y),f=!1},d(y){y&&ne(e),de(r),m=!1,gt(v)}}}function Pv(t){let e,n,s,r,i,o,a,l,c,u,d;return s=new ov({props:{size:20,color:"var(--dark-purple)"}}),{c(){e=S("div"),n=S("div"),ge(s.$$.fragment),r=se(),i=S("span"),o=it(t[0]),a=se(),l=S("button"),l.textContent="Change",w(i,"class","username svelte-1f4i5n5"),w(n,"class","user-info svelte-1f4i5n5"),w(l,"class","change-btn svelte-1f4i5n5"),w(e,"id","logged-in"),w(e,"class","card-back svelte-1f4i5n5")},m(h,f){ie(h,e,f),T(e,n),fe(s,n,null),T(n,r),T(n,i),T(i,o),T(e,a),T(e,l),c=!0,u||(d=vt(l,"click",t[3]),u=!0)},p(h,f){(!c||f&1)&&Rt(o,h[0])},i(h){c||(M(s.$$.fragment,h),c=!0)},o(h){$(s.$$.fragment,h),c=!1},d(h){h&&ne(e),de(s),u=!1,d()}}}function $v(t){let e,n,s,r;const i=[Pv,Lv],o=[];function a(l,c){return l[0]!=""?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=ys()},m(l,c){o[e].m(l,c),ie(l,s,c),r=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(Bt(),$(o[u],1,1,()=>{o[u]=null}),Ut(),n=o[e],n?n.p(l,c):(n=o[e]=i[e](l),n.c()),M(n,1),n.m(s.parentNode,s))},i(l){r||(M(n),r=!0)},o(l){$(n),r=!1},d(l){o[e].d(l),l&&ne(s)}}}function Fv(t,e,n){let{nameVal:s}=e;pi.subscribe(c=>{n(0,s=c)});let r="";function i(){n(1,r=r.toLowerCase().trim()),r&&pi.set(r)}function o(){n(1,r=""),pi.set("")}function a(c){c.key==="Enter"&&i()}function l(){r=this.value,n(1,r)}return t.$$set=c=>{"nameVal"in c&&n(0,s=c.nameVal)},[s,r,i,o,a,l]}class xv extends Je{constructor(e){super(),Xe(this,e,Fv,$v,qe,{nameVal:0})}}function vl(t){let e,n;return e=new Nv({props:{name:t[0]}}),{c(){ge(e.$$.fragment)},m(s,r){fe(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[0]),e.$set(i)},i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function Vv(t){let e,n,s,r,i;function o(c){t[1](c)}let a={};t[0]!==void 0&&(a.nameVal=t[0]),e=new xv({props:a}),Js.push(()=>$h(e,"nameVal",o));let l=t[0]!=""&&vl(t);return{c(){ge(e.$$.fragment),s=se(),l&&l.c(),r=ys()},m(c,u){fe(e,c,u),ie(c,s,u),l&&l.m(c,u),ie(c,r,u),i=!0},p(c,[u]){const d={};!n&&u&1&&(n=!0,d.nameVal=c[0],Dh(()=>n=!1)),e.$set(d),c[0]!=""?l?(l.p(c,u),u&1&&M(l,1)):(l=vl(c),l.c(),M(l,1),l.m(r.parentNode,r)):l&&(Bt(),$(l,1,1,()=>{l=null}),Ut())},i(c){i||(M(e.$$.fragment,c),M(l),i=!0)},o(c){$(e.$$.fragment,c),$(l),i=!1},d(c){de(e,c),c&&ne(s),l&&l.d(c),c&&ne(r)}}}function Bv(t,e,n){let s="";function r(i){s=i,n(0,s)}return[s,r]}class Uv extends Je{constructor(e){super(),Xe(this,e,Bv,Vv,qe,{})}}new Uv({target:document.getElementById("app")})});export default jv();
