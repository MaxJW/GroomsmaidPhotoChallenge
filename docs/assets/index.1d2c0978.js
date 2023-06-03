(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function H(){}const pe=e=>e;function Mi(e,t){for(const n in t)e[n]=t[n];return e}function $a(e){return e()}function po(){return Object.create(null)}function Et(e){e.forEach($a)}function ge(e){return typeof e=="function"}function me(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function El(e){return Object.keys(e).length===0}function _l(e,...t){if(e==null)return H;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Fa(e,t,n){e.$$.on_destroy.push(_l(t,n))}function gs(e){return e==null?"":e}function Tl(e){return e&&ge(e.destroy)?e.destroy:H}function go(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Va=typeof window<"u";let On=Va?()=>window.performance.now():()=>Date.now(),pr=Va?e=>requestAnimationFrame(e):H;const De=new Set;function Ua(e){De.forEach(t=>{t.c(e)||(De.delete(t),t.f())}),De.size!==0&&pr(Ua)}function Ln(e){let t;return De.size===0&&pr(Ua),{promise:new Promise(n=>{De.add(t={c:e,f:n})}),abort(){De.delete(t)}}}function k(e,t){e.appendChild(t)}function Ba(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Sl(e){const t=$("style");return Il(Ba(e),t),t.sheet}function Il(e,t){return k(e.head||e,t),t.sheet}function W(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function Cl(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function bl(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ce(e){return document.createTextNode(e)}function X(){return ce(" ")}function Ps(){return ce("")}function Ct(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function N(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Al(e){return Array.from(e.childNodes)}function pn(e,t){t=""+t,e.data!==t&&(e.data=t)}function mo(e,t){e.value=t==null?"":t}function ts(e,t,n){e.classList[n?"add":"remove"](t)}function Dl(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,s,t),i}class kl{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=bl(n.nodeName):this.e=$(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)W(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(q)}}function yo(e,t){return new e(t)}const ms=new Map;let ys=0;function Nl(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function xl(e,t){const n={stylesheet:Sl(t),rules:{}};return ms.set(e,n),n}function gn(e,t,n,s,i,r,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const S=t+(n-t)*r(v);u+=v*100+`%{${o(S,1-S)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Nl(l)}_${a}`,f=Ba(e),{stylesheet:d,rules:p}=ms.get(f)||xl(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${s}ms linear ${i}ms 1 both`,ys+=1,h}function mn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(e.style.animation=s.join(", "),ys-=i,ys||Rl())}function Rl(){pr(()=>{ys||(ms.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&q(t)}),ms.clear())})}function Ml(e,t,n,s){if(!t)return H;const i=e.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return H;const{delay:r=0,duration:o=300,easing:a=pe,start:c=On()+r,end:u=c+o,tick:l=H,css:h}=n(e,{from:t,to:i},s);let f=!0,d=!1,p;function g(){h&&(p=gn(e,0,1,o,r,a,h)),r||(d=!0)}function v(){h&&mn(e,p),f=!1}return Ln(S=>{if(!d&&S>=c&&(d=!0),d&&S>=u&&(l(1,0),v()),!f)return!1;if(d){const R=S-c,I=0+1*a(R/o);l(I,1-I)}return!0}),g(),l(0,1),v}function Ol(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,i=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,ja(e,i)}}function ja(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),i=s.transform==="none"?"":s.transform;e.style.transform=`${i} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let yn;function cn(e){yn=e}function qa(){if(!yn)throw new Error("Function called outside component initialization");return yn}function Ll(e){qa().$$.on_mount.push(e)}function Pl(e){qa().$$.on_destroy.push(e)}const Ie=[],vs=[];let ke=[];const Oi=[],$l=Promise.resolve();let Li=!1;function Fl(){Li||(Li=!0,$l.then(za))}function Gt(e){ke.push(e)}function Vl(e){Oi.push(e)}const mi=new Set;let _e=0;function za(){if(_e!==0)return;const e=yn;do{try{for(;_e<Ie.length;){const t=Ie[_e];_e++,cn(t),Ul(t.$$)}}catch(t){throw Ie.length=0,_e=0,t}for(cn(null),Ie.length=0,_e=0;vs.length;)vs.pop()();for(let t=0;t<ke.length;t+=1){const n=ke[t];mi.has(n)||(mi.add(n),n())}ke.length=0}while(Ie.length);for(;Oi.length;)Oi.pop()();Li=!1,mi.clear(),cn(e)}function Ul(e){if(e.fragment!==null){e.update(),Et(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Gt)}}function Bl(e){const t=[],n=[];ke.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),ke=t}let Ze;function gr(){return Ze||(Ze=Promise.resolve(),Ze.then(()=>{Ze=null})),Ze}function oe(e,t,n){e.dispatchEvent(Dl(`${t?"intro":"outro"}${n}`))}const ls=new Set;let Dt;function Pn(){Dt={r:0,c:[],p:Dt}}function $n(){Dt.r||Et(Dt.c),Dt=Dt.p}function tt(e,t){e&&e.i&&(ls.delete(e),e.i(t))}function pt(e,t,n,s){if(e&&e.o){if(ls.has(e))return;ls.add(e),Dt.c.push(()=>{ls.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const mr={duration:0};function jl(e,t,n){const s={direction:"in"};let i=t(e,n,s),r=!1,o,a,c=0;function u(){o&&mn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=pe,tick:g=H,css:v}=i||mr;v&&(o=gn(e,0,1,d,f,p,v,c++)),g(0,1);const S=On()+f,R=S+d;a&&a.abort(),r=!0,Gt(()=>oe(e,!0,"start")),a=Ln(I=>{if(r){if(I>=R)return g(1,0),oe(e,!0,"end"),u(),r=!1;if(I>=S){const O=p((I-S)/d);g(O,1-O)}}return r})}let h=!1;return{start(){h||(h=!0,mn(e),ge(i)?(i=i(s),gr().then(l)):l())},invalidate(){h=!1},end(){r&&(u(),r=!1)}}}function ql(e,t,n){const s={direction:"out"};let i=t(e,n,s),r=!0,o;const a=Dt;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=pe,tick:f=H,css:d}=i||mr;d&&(o=gn(e,1,0,l,u,h,d));const p=On()+u,g=p+l;Gt(()=>oe(e,!1,"start")),Ln(v=>{if(r){if(v>=g)return f(0,1),oe(e,!1,"end"),--a.r||Et(a.c),!1;if(v>=p){const S=h((v-p)/l);f(1-S,S)}}return r})}return ge(i)?gr().then(()=>{i=i(s),c()}):c(),{end(u){u&&i.tick&&i.tick(1,0),r&&(o&&mn(e,o),r=!1)}}}function vo(e,t,n,s){const i={direction:"both"};let r=t(e,n,i),o=s?0:1,a=null,c=null,u=null;function l(){u&&mn(e,u)}function h(d,p){const g=d.b-o;return p*=Math.abs(g),{a:o,b:d.b,d:g,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:g=300,easing:v=pe,tick:S=H,css:R}=r||mr,I={start:On()+p,b:d};d||(I.group=Dt,Dt.r+=1),a||c?c=I:(R&&(l(),u=gn(e,o,d,g,p,v,R)),d&&S(0,1),a=h(I,g),Gt(()=>oe(e,d,"start")),Ln(O=>{if(c&&O>c.start&&(a=h(c,g),c=null,oe(e,a.b,"start"),R&&(l(),u=gn(e,o,a.b,a.duration,0,v,r.css))),a){if(O>=a.end)S(o=a.b,1-o),oe(e,a.b,"end"),c||(a.b?l():--a.group.r||Et(a.group.c)),a=null;else if(O>=a.start){const _t=O-a.start;o=a.a+a.d*v(_t/a.duration),S(o,1-o)}}return!!(a||c)}))}return{run(d){ge(r)?gr().then(()=>{r=r(i),f(d)}):f(d)},end(){l(),a=c=null}}}function zl(e,t){pt(e,1,1,()=>{t.delete(e.key)})}function Kl(e,t){e.f(),zl(e,t)}function Hl(e,t,n,s,i,r,o,a,c,u,l,h){let f=e.length,d=r.length,p=f;const g={};for(;p--;)g[e[p].key]=p;const v=[],S=new Map,R=new Map,I=[];for(p=d;p--;){const K=h(i,r,p),Tt=n(K);let yt=o.get(Tt);yt?s&&I.push(()=>yt.p(K,t)):(yt=u(Tt,K),yt.c()),S.set(Tt,v[p]=yt),Tt in g&&R.set(Tt,Math.abs(p-g[Tt]))}const O=new Set,_t=new Set;function ee(K){tt(K,1),K.m(a,l),o.set(K.key,K),l=K.first,d--}for(;f&&d;){const K=v[d-1],Tt=e[f-1],yt=K.key,Zn=Tt.key;K===Tt?(l=K.first,f--,d--):S.has(Zn)?!o.has(yt)||O.has(yt)?ee(K):_t.has(Zn)?f--:R.get(yt)>R.get(Zn)?(_t.add(yt),ee(K)):(O.add(Zn),f--):(c(Tt,o),f--)}for(;f--;){const K=e[f];S.has(K.key)||c(K,o)}for(;d;)ee(v[d-1]);return Et(I),v}function Gl(e,t){const n={},s={},i={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Ql(e){return typeof e=="object"&&e!==null?e:{}}function Wl(e,t,n){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function ue(e){e&&e.c()}function Qt(e,t,n,s){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),s||Gt(()=>{const o=e.$$.on_mount.map($a).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...o):Et(o),e.$$.on_mount=[]}),r.forEach(Gt)}function Wt(e,t){const n=e.$$;n.fragment!==null&&(Bl(n.after_update),Et(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Yl(e,t){e.$$.dirty[0]===-1&&(Ie.push(e),Fl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ke(e,t,n,s,i,r,o,a=[-1]){const c=yn;cn(e);const u=e.$$={fragment:null,ctx:[],props:r,update:H,not_equal:i,bound:po(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:po(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&i(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&Yl(e,h)),f}):[],u.update(),l=!0,Et(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=Al(t.target);u.fragment&&u.fragment.l(h),h.forEach(q)}else u.fragment&&u.fragment.c();t.intro&&tt(e.$$.fragment),Qt(e,t.target,t.anchor,t.customElement),za()}cn(c)}class He{$destroy(){Wt(this,1),this.$destroy=H}$on(t,n){if(!ge(n))return H;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!El(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ka=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Xl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ka(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new Jl;const f=r<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Jl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zl=function(e){const t=Ka(e);return Ha.encodeByteArray(t,!0)},ws=function(e){return Zl(e).replace(/\./g,"")},th=function(e){try{return Ha.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const nh=()=>eh().__FIREBASE_DEFAULTS__,sh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ih=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&th(e[1]);return t&&JSON.parse(t)},Ga=()=>{try{return nh()||sh()||ih()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rh=e=>{var t,n;return(n=(t=Ga())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},oh=e=>{const t=rh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Qa=()=>{var e;return(e=Ga())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ch(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ws(JSON.stringify(n)),ws(JSON.stringify(o)),a].join(".")}function uh(){try{return typeof indexedDB=="object"}catch{return!1}}function lh(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="FirebaseError";class Ge extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=hh,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?fh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ge(i,a,s)}}function fh(e,t){return e.replace(dh,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const dh=/\{\$([^}]+)}/g;function Pi(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(wo(r)&&wo(o)){if(!Pi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function wo(e){return e!==null&&typeof e=="object"}/**
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
 */function Pt(e){return e&&e._delegate?e._delegate:e}class vn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ne="[DEFAULT]";/**
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
 */class ph{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ah;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mh(t))try{this.getOrInitializeService({instanceIdentifier:ne})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ne){return this.instances.has(t)}getOptions(t=ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gh(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ne){return this.component?this.component.multipleInstances?t:ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gh(e){return e===ne?void 0:e}function mh(e){return e.instantiationMode==="EAGER"}/**
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
 */var P;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(P||(P={}));const vh={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},wh=P.INFO,Eh={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},_h=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Eh[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ya{constructor(t){this.name=t,this._logLevel=wh,this._logHandler=_h,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in P))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...t),this._logHandler(this,P.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...t),this._logHandler(this,P.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,P.INFO,...t),this._logHandler(this,P.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,P.WARN,...t),this._logHandler(this,P.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...t),this._logHandler(this,P.ERROR,...t)}}const Th=(e,t)=>t.some(n=>e instanceof n);let Eo,_o;function Sh(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ih(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,$i=new WeakMap,Ja=new WeakMap,yi=new WeakMap,yr=new WeakMap;function Ch(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(jt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Xa.set(n,e)}).catch(()=>{}),yr.set(t,e),t}function bh(e){if($i.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});$i.set(e,t)}let Fi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $i.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ja.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ah(e){Fi=e(Fi)}function Dh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(vi(this),t,...n);return Ja.set(s,t.sort?t.sort():[t]),jt(s)}:Ih().includes(e)?function(...t){return e.apply(vi(this),t),jt(Xa.get(this))}:function(...t){return jt(e.apply(vi(this),t))}}function kh(e){return typeof e=="function"?Dh(e):(e instanceof IDBTransaction&&bh(e),Th(e,Sh())?new Proxy(e,Fi):e)}function jt(e){if(e instanceof IDBRequest)return Ch(e);if(yi.has(e))return yi.get(e);const t=kh(e);return t!==e&&(yi.set(e,t),yr.set(t,e)),t}const vi=e=>yr.get(e);function Nh(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=jt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xh=["get","getKey","getAll","getAllKeys","count"],Rh=["put","add","delete","clear"],wi=new Map;function To(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(wi.get(t))return wi.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Rh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xh.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return wi.set(t,r),r}Ah(e=>({...e,get:(t,n,s)=>To(t,n)||e.get(t,n,s),has:(t,n)=>!!To(t,n)||e.has(t,n)}));/**
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
 */class Mh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Oh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Oh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vi="@firebase/app",So="0.9.11";/**
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
 */const le=new Ya("@firebase/app"),Lh="@firebase/app-compat",Ph="@firebase/analytics-compat",$h="@firebase/analytics",Fh="@firebase/app-check-compat",Vh="@firebase/app-check",Uh="@firebase/auth",Bh="@firebase/auth-compat",jh="@firebase/database",qh="@firebase/database-compat",zh="@firebase/functions",Kh="@firebase/functions-compat",Hh="@firebase/installations",Gh="@firebase/installations-compat",Qh="@firebase/messaging",Wh="@firebase/messaging-compat",Yh="@firebase/performance",Xh="@firebase/performance-compat",Jh="@firebase/remote-config",Zh="@firebase/remote-config-compat",tf="@firebase/storage",ef="@firebase/storage-compat",nf="@firebase/firestore",sf="@firebase/firestore-compat",rf="firebase",of="9.22.1";/**
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
 */const Ui="[DEFAULT]",af={[Vi]:"fire-core",[Lh]:"fire-core-compat",[$h]:"fire-analytics",[Ph]:"fire-analytics-compat",[Vh]:"fire-app-check",[Fh]:"fire-app-check-compat",[Uh]:"fire-auth",[Bh]:"fire-auth-compat",[jh]:"fire-rtdb",[qh]:"fire-rtdb-compat",[zh]:"fire-fn",[Kh]:"fire-fn-compat",[Hh]:"fire-iid",[Gh]:"fire-iid-compat",[Qh]:"fire-fcm",[Wh]:"fire-fcm-compat",[Yh]:"fire-perf",[Xh]:"fire-perf-compat",[Jh]:"fire-rc",[Zh]:"fire-rc-compat",[tf]:"fire-gcs",[ef]:"fire-gcs-compat",[nf]:"fire-fst",[sf]:"fire-fst-compat","fire-js":"fire-js",[rf]:"fire-js-all"};/**
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
 */const Es=new Map,Bi=new Map;function cf(e,t){try{e.container.addComponent(t)}catch(n){le.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _s(e){const t=e.name;if(Bi.has(t))return le.debug(`There were multiple attempts to register component ${t}.`),!1;Bi.set(t,e);for(const n of Es.values())cf(n,e);return!0}function uf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const lf={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qt=new Wa("app","Firebase",lf);/**
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
 */class hf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const ff=of;function Za(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Ui,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=Qa()),!n)throw qt.create("no-options");const r=Es.get(i);if(r){if(Pi(n,r.options)&&Pi(s,r.config))return r;throw qt.create("duplicate-app",{appName:i})}const o=new yh(i);for(const c of Bi.values())o.addComponent(c);const a=new hf(n,s,o);return Es.set(i,a),a}function df(e=Ui){const t=Es.get(e);if(!t&&e===Ui&&Qa())return Za();if(!t)throw qt.create("no-app",{appName:e});return t}function Ne(e,t,n){var s;let i=(s=af[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),le.warn(a.join(" "));return}_s(new vn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const pf="firebase-heartbeat-database",gf=1,wn="firebase-heartbeat-store";let Ei=null;function tc(){return Ei||(Ei=Nh(pf,gf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wn)}}}).catch(e=>{throw qt.create("idb-open",{originalErrorMessage:e.message})})),Ei}async function mf(e){try{return await(await tc()).transaction(wn).objectStore(wn).get(ec(e))}catch(t){if(t instanceof Ge)le.warn(t.message);else{const n=qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});le.warn(n.message)}}}async function Io(e,t){try{const s=(await tc()).transaction(wn,"readwrite");await s.objectStore(wn).put(t,ec(e)),await s.done}catch(n){if(n instanceof Ge)le.warn(n.message);else{const s=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});le.warn(s.message)}}}function ec(e){return`${e.name}!${e.options.appId}`}/**
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
 */const yf=1024,vf=30*24*60*60*1e3;class wf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _f(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=vf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Co(),{heartbeatsToSend:n,unsentEntries:s}=Ef(this._heartbeatsCache.heartbeats),i=ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Co(){return new Date().toISOString().substring(0,10)}function Ef(e,t=yf){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),bo(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bo(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _f{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uh()?lh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bo(e){return ws(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Tf(e){_s(new vn("platform-logger",t=>new Mh(t),"PRIVATE")),_s(new vn("heartbeat",t=>new wf(t),"PRIVATE")),Ne(Vi,So,e),Ne(Vi,So,"esm2017"),Ne("fire-js","")}Tf("");var Sf="firebase",If="9.22.1";/**
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
 */Ne(Sf,If,"app");var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,vr=vr||{},b=Cf||self;function $s(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Fn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function bf(e){return Object.prototype.hasOwnProperty.call(e,_i)&&e[_i]||(e[_i]=++Af)}var _i="closure_uid_"+(1e9*Math.random()>>>0),Af=0;function Df(e,t,n){return e.call.apply(e.bind,arguments)}function kf(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function lt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=Df:lt=kf,lt.apply(null,arguments)}function es(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function nt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Zt(){this.s=this.s,this.o=this.o}var Nf=0;Zt.prototype.s=!1;Zt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nf!=0)&&bf(this)};Zt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function wr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ao(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if($s(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function ht(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var xf=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{b.addEventListener("test",()=>{},t),b.removeEventListener("test",()=>{},t)}catch{}return e}();function En(e){return/^[\s\xa0]*$/.test(e)}function Fs(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function At(e){return Fs().indexOf(e)!=-1}function Er(e){return Er[" "](e),e}Er[" "]=function(){};function Rf(e,t){var n=Id;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Mf=At("Opera"),Pe=At("Trident")||At("MSIE"),sc=At("Edge"),ji=sc||Pe,ic=At("Gecko")&&!(Fs().toLowerCase().indexOf("webkit")!=-1&&!At("Edge"))&&!(At("Trident")||At("MSIE"))&&!At("Edge"),Of=Fs().toLowerCase().indexOf("webkit")!=-1&&!At("Edge");function rc(){var e=b.document;return e?e.documentMode:void 0}var qi;t:{var Ti="",Si=function(){var e=Fs();if(ic)return/rv:([^\);]+)(\)|;)/.exec(e);if(sc)return/Edge\/([\d\.]+)/.exec(e);if(Pe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Of)return/WebKit\/(\S+)/.exec(e);if(Mf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Si&&(Ti=Si?Si[1]:""),Pe){var Ii=rc();if(Ii!=null&&Ii>parseFloat(Ti)){qi=String(Ii);break t}}qi=Ti}var zi;if(b.document&&Pe){var Do=rc();zi=Do||parseInt(qi,10)||void 0}else zi=void 0;var Lf=zi;function _n(e,t){if(ht.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ic){t:{try{Er(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Pf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&_n.$.h.call(this)}}nt(_n,ht);var Pf={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),$f=0;function Ff(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++$f,this.fa=this.ia=!1}function Vs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function _r(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Vf(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function oc(e){const t={};for(const n in e)t[n]=e[n];return t}const ko="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ac(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<ko.length;r++)n=ko[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Us(e){this.src=e,this.g={},this.h=0}Us.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Hi(e,t,s,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Ff(t,this.src,r,!!s,i),t.ia=n,e.push(t)),t};function Ki(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=nc(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Vs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Hi(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}var Tr="closure_lm_"+(1e6*Math.random()|0),Ci={};function cc(e,t,n,s,i){if(s&&s.once)return lc(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)cc(e,t[r],n,s,i);return null}return n=Cr(n),e&&e[Vn]?e.O(t,n,Fn(s)?!!s.capture:!!s,i):uc(e,t,n,!1,s,i)}function uc(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Fn(i)?!!i.capture:!!i,a=Ir(e);if(a||(e[Tr]=a=new Us(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Uf(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)xf||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(fc(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Uf(){function e(n){return t.call(e.src,e.listener,n)}const t=Bf;return e}function lc(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)lc(e,t[r],n,s,i);return null}return n=Cr(n),e&&e[Vn]?e.P(t,n,Fn(s)?!!s.capture:!!s,i):uc(e,t,n,!0,s,i)}function hc(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)hc(e,t[r],n,s,i);else s=Fn(s)?!!s.capture:!!s,n=Cr(n),e&&e[Vn]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Hi(r,n,s,i),-1<n&&(Vs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ir(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hi(t,n,s,i)),(n=-1<e?t[e]:null)&&Sr(n))}function Sr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Vn])Ki(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(fc(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ir(t))?(Ki(n,e),n.h==0&&(n.src=null,t[Tr]=null)):Vs(e)}}}function fc(e){return e in Ci?Ci[e]:Ci[e]="on"+e}function Bf(e,t){if(e.fa)e=!0;else{t=new _n(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Sr(e),e=n.call(s,t)}return e}function Ir(e){return e=e[Tr],e instanceof Us?e:null}var bi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cr(e){return typeof e=="function"?e:(e[bi]||(e[bi]=function(t){return e.handleEvent(t)}),e[bi])}function et(){Zt.call(this),this.i=new Us(this),this.S=this,this.J=null}nt(et,Zt);et.prototype[Vn]=!0;et.prototype.removeEventListener=function(e,t,n,s){hc(this,e,t,n,s)};function rt(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new ht(t,e);else if(t instanceof ht)t.target=t.target||e;else{var i=t;t=new ht(s,e),ac(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=ns(o,s,!0,t)&&i}if(o=t.g=e,i=ns(o,s,!0,t)&&i,i=ns(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=ns(o,s,!1,t)&&i}et.prototype.N=function(){if(et.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Vs(n[s]);delete e.g[t],e.h--}}this.J=null};et.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};et.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ns(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ki(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var br=b.JSON.stringify;class jf{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function qf(){var e=Ar;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class zf{constructor(){this.h=this.g=null}add(t,n){const s=dc.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var dc=new jf(()=>new Kf,e=>e.reset());class Kf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Hf(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Gf(e){b.setTimeout(()=>{throw e},0)}let Tn,Sn=!1,Ar=new zf,pc=()=>{const e=b.Promise.resolve(void 0);Tn=()=>{e.then(Qf)}};var Qf=()=>{for(var e;e=qf();){try{e.h.call(e.g)}catch(n){Gf(n)}var t=dc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Sn=!1};function Bs(e,t){et.call(this),this.h=e||1,this.g=t||b,this.j=lt(this.qb,this),this.l=Date.now()}nt(Bs,et);w=Bs.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(Dr(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}w.N=function(){Bs.$.N.call(this),Dr(this),delete this.g};function kr(e,t,n){if(typeof e=="function")n&&(e=lt(e,n));else if(e&&typeof e.handleEvent=="function")e=lt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}function gc(e){e.g=kr(()=>{e.g=null,e.i&&(e.i=!1,gc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Wf extends Zt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:gc(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(e){Zt.call(this),this.h=e,this.g={}}nt(In,Zt);var No=[];function mc(e,t,n,s){Array.isArray(n)||(n&&(No[0]=n.toString()),n=No);for(var i=0;i<n.length;i++){var r=cc(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function yc(e){_r(e.g,function(t,n){this.g.hasOwnProperty(n)&&Sr(t)},e),e.g={}}In.prototype.N=function(){In.$.N.call(this),yc(this)};In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function js(){this.g=!0}js.prototype.Ea=function(){this.g=!1};function Yf(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Xf(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Ae(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Zf(e,n)+(s?" "+s:"")})}function Jf(e,t){e.info(function(){return"TIMEOUT: "+t})}js.prototype.info=function(){};function Zf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return br(n)}catch{return t}}var ye={},xo=null;function qs(){return xo=xo||new et}ye.Ta="serverreachability";function vc(e){ht.call(this,ye.Ta,e)}nt(vc,ht);function Cn(e){const t=qs();rt(t,new vc(t))}ye.STAT_EVENT="statevent";function wc(e,t){ht.call(this,ye.STAT_EVENT,e),this.stat=t}nt(wc,ht);function gt(e){const t=qs();rt(t,new wc(t,e))}ye.Ua="timingevent";function Ec(e,t){ht.call(this,ye.Ua,e),this.size=t}nt(Ec,ht);function Un(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}var zs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_c={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Nr(){}Nr.prototype.h=null;function Ro(e){return e.h||(e.h=e.i())}function Tc(){}var Bn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xr(){ht.call(this,"d")}nt(xr,ht);function Rr(){ht.call(this,"c")}nt(Rr,ht);var Gi;function Ks(){}nt(Ks,Nr);Ks.prototype.g=function(){return new XMLHttpRequest};Ks.prototype.i=function(){return{}};Gi=new Ks;function jn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new In(this),this.P=td,e=ji?125:void 0,this.V=new Bs(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Sc}function Sc(){this.i=null,this.g="",this.h=!1}var td=45e3,Qi={},Ts={};w=jn.prototype;w.setTimeout=function(e){this.P=e};function Wi(e,t,n){e.L=1,e.v=Gs($t(t)),e.s=n,e.S=!0,Ic(e,null)}function Ic(e,t){e.G=Date.now(),qn(e),e.A=$t(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Rc(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Sc,e.g=Zc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Wf(lt(e.Pa,e,e.g),e.O)),mc(e.U,e.g,"readystatechange",e.nb),t=e.I?oc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Cn(),Yf(e.j,e.u,e.A,e.m,e.W,e.s)}w.nb=function(e){e=e.target;const t=this.M;t&&kt(e)==3?t.l():this.Pa(e)};w.Pa=function(e){try{if(e==this.g)t:{const l=kt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ji||this.g&&(this.h.h||this.g.ja()||Po(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Cn(3):Cn(2)),Hs(this);var n=this.g.da();this.ca=n;e:if(Cc(this)){var s=Po(this.g);e="";var i=s.length,r=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),un(this);var o="";break e}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Xf(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!En(a)){var u=a;break e}}u=null}if(n=u)Ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yi(this,n);else{this.i=!1,this.o=3,gt(12),se(this),un(this);break t}}this.S?(bc(this,l,o),ji&&this.i&&l==3&&(mc(this.U,this.V,"tick",this.mb),this.V.start())):(Ae(this.j,this.m,o,null),Yi(this,o)),l==4&&se(this),this.i&&!this.J&&(l==4?Wc(this.l,this):(this.i=!1,qn(this)))}else _d(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),se(this),un(this)}}}catch{}finally{}};function Cc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function bc(e,t,n){let s=!0,i;for(;!e.J&&e.C<n.length;)if(i=ed(e,n),i==Ts){t==4&&(e.o=4,gt(14),s=!1),Ae(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Qi){e.o=4,gt(15),Ae(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Ae(e.j,e.m,i,null),Yi(e,i);Cc(e)&&i!=Ts&&i!=Qi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,gt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fr(t),t.M=!0,gt(11))):(Ae(e.j,e.m,n,"[Invalid Chunked Response]"),se(e),un(e))}w.mb=function(){if(this.g){var e=kt(this.g),t=this.g.ja();this.C<t.length&&(Hs(this),bc(this,e,t),this.i&&e!=4&&qn(this))}};function ed(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ts:(n=Number(t.substring(n,s)),isNaN(n)?Qi:(s+=1,s+n>t.length?Ts:(t=t.slice(s,s+n),e.C=s+n,t)))}w.cancel=function(){this.J=!0,se(this)};function qn(e){e.Y=Date.now()+e.P,Ac(e,e.P)}function Ac(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Un(lt(e.lb,e),t)}function Hs(e){e.B&&(b.clearTimeout(e.B),e.B=null)}w.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Jf(this.j,this.A),this.L!=2&&(Cn(),gt(17)),se(this),this.o=2,un(this)):Ac(this,this.Y-e)};function un(e){e.l.H==0||e.J||Wc(e.l,e)}function se(e){Hs(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Dr(e.V),yc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Yi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Xi(n.i,e))){if(!e.K&&Xi(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Cs(n),Ys(n);else break t;$r(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Un(lt(n.ib,n),6e3));if(1>=Lc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ie(n,11)}else if((e.K||n.g==e)&&Cs(n),!En(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Mr(r,r.h),r.h=null))}if(s.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,V(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=Jc(s,s.J?s.pa:null,s.Y),o.K){Pc(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Hs(a),qn(a)),s.g=o}else Gc(s);0<n.j.length&&Xs(n)}else u[0]!="stop"&&u[0]!="close"||ie(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ie(n,7):Pr(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Cn(4)}catch{}}function nd(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if($s(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function sd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if($s(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Dc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if($s(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=sd(e),s=nd(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function id(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ae(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ae){this.h=e.h,Ss(this,e.j),this.s=e.s,this.g=e.g,Is(this,e.m),this.l=e.l;var t=e.i,n=new bn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Mo(this,n),this.o=e.o}else e&&(t=String(e).match(kc))?(this.h=!1,Ss(this,t[1]||"",!0),this.s=nn(t[2]||""),this.g=nn(t[3]||"",!0),Is(this,t[4]),this.l=nn(t[5]||"",!0),Mo(this,t[6]||"",!0),this.o=nn(t[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}ae.prototype.toString=function(){var e=[],t=this.j;t&&e.push(sn(t,Oo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(sn(t,Oo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(sn(n,n.charAt(0)=="/"?ad:od,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",sn(n,ud)),e.join("")};function $t(e){return new ae(e)}function Ss(e,t,n){e.j=n?nn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Is(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mo(e,t,n){t instanceof bn?(e.i=t,ld(e.i,e.h)):(n||(t=sn(t,cd)),e.i=new bn(t,e.h))}function V(e,t,n){e.i.set(t,n)}function Gs(e){return V(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function sn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,rd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oo=/[#\/\?@]/g,od=/[#\?:]/g,ad=/[#\?]/g,cd=/[#\?@]/g,ud=/#/g;function bn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function te(e){e.g||(e.g=new Map,e.h=0,e.i&&id(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=bn.prototype;w.add=function(e,t){te(this),this.i=null,e=Qe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Nc(e,t){te(e),t=Qe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function xc(e,t){return te(e),t=Qe(e,t),e.g.has(t)}w.forEach=function(e,t){te(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};w.ta=function(){te(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};w.Z=function(e){te(this);let t=[];if(typeof e=="string")xc(this,e)&&(t=t.concat(this.g.get(Qe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};w.set=function(e,t){return te(this),this.i=null,e=Qe(this,e),xc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Rc(e,t,n){Nc(e,t),0<n.length&&(e.i=null,e.g.set(Qe(e,t),wr(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Qe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ld(e,t){t&&!e.j&&(te(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Nc(this,s),Rc(this,i,n))},e)),e.j=t}var hd=class{constructor(e,t){this.g=e,this.map=t}};function Mc(e){this.l=e||fd,b.PerformanceNavigationTiming?(e=b.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fd=10;function Oc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Lc(e){return e.h?1:e.g?e.g.size:0}function Xi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Mr(e,t){e.g?e.g.add(t):e.h=t}function Pc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Mc.prototype.cancel=function(){if(this.i=$c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function $c(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return wr(e.i)}var dd=class{stringify(e){return b.JSON.stringify(e,void 0)}parse(e){return b.JSON.parse(e,void 0)}};function pd(){this.g=new dd}function gd(e,t,n){const s=n||"";try{Dc(e,function(i,r){let o=i;Fn(i)&&(o=br(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function md(e,t){const n=new js;if(b.Image){const s=new Image;s.onload=es(ss,n,s,"TestLoadImage: loaded",!0,t),s.onerror=es(ss,n,s,"TestLoadImage: error",!1,t),s.onabort=es(ss,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=es(ss,n,s,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ss(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function zn(e){this.l=e.fc||null,this.j=e.ob||!1}nt(zn,Nr);zn.prototype.g=function(){return new Qs(this.l,this.j)};zn.prototype.i=function(e){return function(){return e}}({});function Qs(e,t){et.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Or,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Qs,et);var Or=0;w=Qs.prototype;w.open=function(e,t){if(this.readyState!=Or)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=Or};w.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Fc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}w.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Kn(this):An(this),this.readyState==3&&Fc(this)}};w.Za=function(e){this.g&&(this.response=this.responseText=e,Kn(this))};w.Ya=function(e){this.g&&(this.response=e,Kn(this))};w.ka=function(){this.g&&Kn(this)};function Kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yd=b.JSON.parse;function z(e){et.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vc,this.L=this.M=!1}nt(z,et);var Vc="",vd=/^https?$/i,wd=["POST","PUT"];w=z.prototype;w.Oa=function(e){this.M=e};w.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gi.g(),this.C=this.u?Ro(this.u):Ro(Gi),this.g.onreadystatechange=lt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Lo(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=b.FormData&&e instanceof b.FormData,!(0<=nc(wd,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jc(this),0<this.B&&((this.L=Ed(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.ua,this)):this.A=kr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Lo(this,r)}};function Ed(e){return Pe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}w.ua=function(){typeof vr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Lo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Uc(e),Ws(e)}function Uc(e){e.F||(e.F=!0,rt(e,"complete"),rt(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,rt(this,"complete"),rt(this,"abort"),Ws(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ws(this,!0)),z.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?Bc(this):this.kb())};w.kb=function(){Bc(this)};function Bc(e){if(e.h&&typeof vr<"u"&&(!e.C[1]||kt(e)!=4||e.da()!=2)){if(e.v&&kt(e)==4)kr(e.La,0,e);else if(rt(e,"readystatechange"),kt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var i=String(e.I).match(kc)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),s=!vd.test(i?i.toLowerCase():"")}n=s}if(n)rt(e,"complete"),rt(e,"success");else{e.m=6;try{var r=2<kt(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",Uc(e)}}finally{Ws(e)}}}}function Ws(e,t){if(e.g){jc(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||rt(e,"ready");try{n.onreadystatechange=s}catch{}}}function jc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}w.isActive=function(){return!!this.g};function kt(e){return e.g?e.g.readyState:0}w.da=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),yd(t)}};function Po(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Vc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function _d(e){const t={};e=(e.g&&2<=kt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(En(e[s]))continue;var n=Hf(e[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[i]||[];t[i]=r,r.push(n)}Vf(t,function(s){return s.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qc(e){let t="";return _r(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Lr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=qc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):V(e,t,n))}function tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zc(e){this.Ga=0,this.j=[],this.l=new js,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=tn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=tn("baseRetryDelayMs",5e3,e),this.hb=tn("retryDelaySeedMs",1e4,e),this.eb=tn("forwardChannelMaxRetries",2,e),this.xa=tn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Mc(e&&e.concurrentRequestLimit),this.Ja=new pd,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=zc.prototype;w.ra=8;w.H=1;function Pr(e){if(Kc(e),e.H==3){var t=e.W++,n=$t(e.I);if(V(n,"SID",e.K),V(n,"RID",t),V(n,"TYPE","terminate"),Hn(e,n),t=new jn(e,e.l,t),t.L=2,t.v=Gs($t(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&b.Image&&(new Image().src=t.v,n=!0),n||(t.g=Zc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),qn(t)}Xc(e)}function Ys(e){e.g&&(Fr(e),e.g.cancel(),e.g=null)}function Kc(e){Ys(e),e.u&&(b.clearTimeout(e.u),e.u=null),Cs(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&b.clearTimeout(e.m),e.m=null)}function Xs(e){if(!Oc(e.i)&&!e.m){e.m=!0;var t=e.Na;Tn||pc(),Sn||(Tn(),Sn=!0),Ar.add(t,e),e.C=0}}function Td(e,t){return Lc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Un(lt(e.Na,e,t),Yc(e,e.C)),e.C++,!0)}w.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new jn(this,this.l,e);let r=this.s;if(this.U&&(r?(r=oc(r),ac(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Hc(this,i,t),n=$t(this.I),V(n,"RID",e),V(n,"CVER",22),this.F&&V(n,"X-HTTP-Session-Id",this.F),Hn(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(qc(r)))+"&"+t:this.o&&Lr(n,this.o,r)),Mr(this.i,i),this.bb&&V(n,"TYPE","init"),this.P?(V(n,"$req",t),V(n,"SID","null"),i.aa=!0,Wi(i,n,null)):Wi(i,n,t),this.H=2}}else this.H==3&&(e?$o(this,e):this.j.length==0||Oc(this.i)||$o(this))};function $o(e,t){var n;t?n=t.m:n=e.W++;const s=$t(e.I);V(s,"SID",e.K),V(s,"RID",n),V(s,"AID",e.V),Hn(e,s),e.o&&e.s&&Lr(s,e.o,e.s),n=new jn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Hc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Mr(e.i,n),Wi(n,s,t)}function Hn(e,t){e.na&&_r(e.na,function(n,s){V(t,s,n)}),e.h&&Dc({},function(n,s){V(t,s,n)})}function Hc(e,t,n){n=Math.min(e.j.length,n);var s=e.h?lt(e.h.Va,e.h,e):null;t:{var i=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=r,0>u)r=Math.max(0,i[c].g-100),a=!1;else try{gd(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function Gc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Tn||pc(),Sn||(Tn(),Sn=!0),Ar.add(t,e),e.A=0}}function $r(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Un(lt(e.Ma,e),Yc(e,e.A)),e.A++,!0)}w.Ma=function(){if(this.u=null,Qc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Un(lt(this.jb,this),e)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Ys(this),Qc(this))};function Fr(e){e.B!=null&&(b.clearTimeout(e.B),e.B=null)}function Qc(e){e.g=new jn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);V(t,"RID","rpc"),V(t,"SID",e.K),V(t,"AID",e.V),V(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&V(t,"TO",e.qa),V(t,"TYPE","xmlhttp"),Hn(e,t),e.o&&e.s&&Lr(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Gs($t(t)),n.s=null,n.S=!0,Ic(n,e)}w.ib=function(){this.v!=null&&(this.v=null,Ys(this),$r(this),gt(19))};function Cs(e){e.v!=null&&(b.clearTimeout(e.v),e.v=null)}function Wc(e,t){var n=null;if(e.g==t){Cs(e),Fr(e),e.g=null;var s=2}else if(Xi(e.i,t))n=t.F,Pc(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;s=qs(),rt(s,new Ec(s,n)),Xs(e)}else Gc(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(s==1&&Td(e,t)||s==2&&$r(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ie(e,5);break;case 4:ie(e,10);break;case 3:ie(e,6);break;default:ie(e,2)}}}function Yc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ie(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=lt(e.pb,e);n||(n=new ae("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Ss(n,"https"),Gs(n)),md(n.toString(),s)}else gt(2);e.H=0,e.h&&e.h.za(t),Xc(e),Kc(e)}w.pb=function(e){e?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function Xc(e){if(e.H=0,e.ma=[],e.h){const t=$c(e.i);(t.length!=0||e.j.length!=0)&&(Ao(e.ma,t),Ao(e.ma,e.j),e.i.i.length=0,wr(e.j),e.j.length=0),e.h.ya()}}function Jc(e,t,n){var s=n instanceof ae?$t(n):new ae(n);if(s.g!="")t&&(s.g=t+"."+s.g),Is(s,s.m);else{var i=b.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new ae(null);s&&Ss(r,s),t&&(r.g=t),i&&Is(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&V(s,n,t),V(s,"VER",e.ra),Hn(e,s),s}function Zc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new z(new zn({ob:!0})):new z(e.va),t.Oa(e.J),t}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function tu(){}w=tu.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function bs(){if(Pe&&!(10<=Number(Lf)))throw Error("Environmental error: no available transport.")}bs.prototype.g=function(e,t){return new wt(e,t)};function wt(e,t){et.call(this),this.g=new zc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!En(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!En(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new We(this)}nt(wt,et);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Jc(e,null,e.Y),Xs(e)};wt.prototype.close=function(){Pr(this.g)};wt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=br(e),e=n);t.j.push(new hd(t.fb++,e)),t.H==3&&Xs(t)};wt.prototype.N=function(){this.g.h=null,delete this.j,Pr(this.g),delete this.g,wt.$.N.call(this)};function eu(e){xr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}nt(eu,xr);function nu(){Rr.call(this),this.status=1}nt(nu,Rr);function We(e){this.g=e}nt(We,tu);We.prototype.Ba=function(){rt(this.g,"a")};We.prototype.Aa=function(e){rt(this.g,new eu(e))};We.prototype.za=function(e){rt(this.g,new nu)};We.prototype.ya=function(){rt(this.g,"b")};function Sd(){this.blockSize=-1}function bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(bt,Sd);bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ai(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],o=t+(r^n&(i^r))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(n^i))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^r)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~r))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}bt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=n;)Ai(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){Ai(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){Ai(this,s),i=0;break}}this.h=i,this.i+=t};bt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function F(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=e[i]|0;s&&r==t||(n[i]=r,s=!1)}this.g=n}var Id={};function Vr(e){return-128<=e&&128>e?Rf(e,function(t){return new F([t|0],0>t?-1:0)}):new F([e|0],0>e?-1:0)}function Nt(e){if(isNaN(e)||!isFinite(e))return xe;if(0>e)return it(Nt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Ji;return new F(t,0)}function su(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return it(su(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Nt(Math.pow(t,8)),s=xe,i=0;i<e.length;i+=8){var r=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+r),t);8>r?(r=Nt(Math.pow(t,r)),s=s.R(r).add(Nt(o))):(s=s.R(n),s=s.add(Nt(o)))}return s}var Ji=4294967296,xe=Vr(0),Zi=Vr(1),Fo=Vr(16777216);w=F.prototype;w.ea=function(){if(St(this))return-it(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Ji+s)*t,t*=Ji}return e};w.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ot(this))return"0";if(St(this))return"-"+it(this).toString(e);for(var t=Nt(Math.pow(e,6)),n=this,s="";;){var i=Ds(n,t).g;n=As(n,i.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ot(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};w.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ot(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function St(e){return e.h==-1}w.X=function(e){return e=As(this,e),St(e)?-1:Ot(e)?0:1};function it(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new F(n,~e.h).add(Zi)}w.abs=function(){return St(this)?it(this):this};w.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(e.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new F(n,n[n.length-1]&-2147483648?-1:0)};function As(e,t){return e.add(it(t))}w.R=function(e){if(Ot(this)||Ot(e))return xe;if(St(this))return St(e)?it(this).R(it(e)):it(it(this).R(e));if(St(e))return it(this.R(it(e)));if(0>this.X(Fo)&&0>e.X(Fo))return Nt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*s+2*i]+=o*c,is(n,2*s+2*i),n[2*s+2*i+1]+=r*c,is(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,is(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,is(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new F(n,0)};function is(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function en(e,t){this.g=e,this.h=t}function Ds(e,t){if(Ot(t))throw Error("division by zero");if(Ot(e))return new en(xe,xe);if(St(e))return t=Ds(it(e),t),new en(it(t.g),it(t.h));if(St(t))return t=Ds(e,it(t)),new en(it(t.g),t.h);if(30<e.g.length){if(St(e)||St(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Zi,s=t;0>=s.X(e);)n=Vo(n),s=Vo(s);var i=Te(n,1),r=Te(s,1);for(s=Te(s,2),n=Te(n,2);!Ot(s);){var o=r.add(s);0>=o.X(e)&&(i=i.add(n),r=o),s=Te(s,1),n=Te(n,1)}return t=As(e,i.R(t)),new en(i,t)}for(i=xe;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Nt(n),o=r.R(t);St(o)||0<o.X(e);)n-=s,r=Nt(n),o=r.R(t);Ot(r)&&(r=Zi),i=i.add(r),e=As(e,o)}return new en(i,e)}w.gb=function(e){return Ds(this,e).h};w.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new F(n,this.h&e.h)};w.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new F(n,this.h|e.h)};w.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new F(n,this.h^e.h)};function Vo(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new F(n,e.h)}function Te(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new F(i,e.h)}bs.prototype.createWebChannel=bs.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;zs.NO_ERROR=0;zs.TIMEOUT=8;zs.HTTP_ERROR=6;_c.COMPLETE="complete";Tc.EventType=Bn;Bn.OPEN="a";Bn.CLOSE="b";Bn.ERROR="c";Bn.MESSAGE="d";et.prototype.listen=et.prototype.O;z.prototype.listenOnce=z.prototype.P;z.prototype.getLastError=z.prototype.Sa;z.prototype.getLastErrorCode=z.prototype.Ia;z.prototype.getStatus=z.prototype.da;z.prototype.getResponseJson=z.prototype.Wa;z.prototype.getResponseText=z.prototype.ja;z.prototype.send=z.prototype.ha;z.prototype.setWithCredentials=z.prototype.Oa;bt.prototype.digest=bt.prototype.l;bt.prototype.reset=bt.prototype.reset;bt.prototype.update=bt.prototype.j;F.prototype.add=F.prototype.add;F.prototype.multiply=F.prototype.R;F.prototype.modulo=F.prototype.gb;F.prototype.compare=F.prototype.X;F.prototype.toNumber=F.prototype.ea;F.prototype.toString=F.prototype.toString;F.prototype.getBits=F.prototype.D;F.fromNumber=Nt;F.fromString=su;var Cd=function(){return new bs},bd=function(){return qs()},Di=zs,Ad=_c,Dd=ye,Uo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},kd=zn,rs=Tc,Nd=z,xd=bt,Re=F;const Bo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Ya("@firebase/firestore");function jo(){return he.logLevel}function E(e,...t){if(he.logLevel<=P.DEBUG){const n=t.map(Ur);he.debug(`Firestore (${Ye}): ${e}`,...n)}}function Ft(e,...t){if(he.logLevel<=P.ERROR){const n=t.map(Ur);he.error(`Firestore (${Ye}): ${e}`,...n)}}function $e(e,...t){if(he.logLevel<=P.WARN){const n=t.map(Ur);he.warn(`Firestore (${Ye}): ${e}`,...n)}}function Ur(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function C(e="Unexpected state"){const t=`FIRESTORE (${Ye}) INTERNAL ASSERTION FAILED: `+e;throw Ft(t),new Error(t)}function U(e,t){e||C()}function D(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Ge{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class Md{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Od{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(U(typeof s.accessToken=="string"),new iu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new at(t)}}class Ld{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=at.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Pd{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ld(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $d{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fd{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(U(typeof n.token=="string"),this.T=n.token,new $d(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class ru{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Vd(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function L(e,t){return e<t?-1:e>t?1:0}function Fe(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new J(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new J(0,0))}static max(){return new A(new J(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n,s){n===void 0?n=0:n>t.length&&C(),s===void 0?s=t.length-n:s>t.length-n&&C(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Dn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Dn?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class B extends Dn{construct(t,n,s){return new B(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new _(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new B(n)}static emptyPath(){return new B([])}}const Ud=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Dn{construct(t,n,s){return new ut(t,n,s)}static isValidIdentifier(t){return Ud.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new _(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new _(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(B.fromString(t))}static fromName(t){return new T(B.fromString(t).popFirst(5))}static empty(){return new T(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&B.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return B.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new B(t.slice()))}}function Bd(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=A.fromTimestamp(s===1e9?new J(n+1,0):new J(n,s));return new Yt(i,T.empty(),t)}function jd(e){return new Yt(e.readTime,e.key,-1)}class Yt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Yt(A.min(),T.empty(),-1)}static max(){return new Yt(A.max(),T.empty(),-1)}}function qd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:L(e.largestBatchId,t.largestBatchId))}/**
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
 */const zd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==zd)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):y.reject(n)}static resolve(t){return new y((n,s)=>{n(t)})}static reject(t){return new y((n,s)=>{s(t)})}static waitFor(t){return new y((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=y.resolve(!1);for(const s of t)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new y((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(t,n){return new y((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Qn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Br{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Br.ct=-1;function Js(e){return e==null}function ks(e){return e===0&&1/e==-1/0}function Hd(e){return typeof e=="number"&&Number.isInteger(e)&&!ks(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ve(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ou(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n){this.comparator=t,this.root=n||st.EMPTY}insert(t,n){return new j(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new j(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new os(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new os(this.root,t,this.comparator,!1)}getReverseIterator(){return new os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new os(this.root,t,this.comparator,!0)}}class os{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:st.RED,this.left=i!=null?i:st.EMPTY,this.right=r!=null?r:st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new st(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return st.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const t=this.left.check();if(t!==this.right.check())throw C();return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,n,s,i){return this}insert(e,t,n){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.comparator=t,this.data=new j(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zo(this.data.getIterator())}getIteratorFrom(t){return new zo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ft(this.comparator);return n.data=t,n}}class zo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new It([])}unionWith(t){let n=new ft(ut.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new It(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class au extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new au("Invalid base64 string: "+i):i}}(t);return new dt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new dt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Gd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(e){if(U(!!e),typeof e=="string"){let t=0;const n=Gd.exec(e);if(U(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Q(e.seconds),nanos:Q(e.nanos)}}function Q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function fe(e){return typeof e=="string"?dt.fromBase64String(e):dt.fromUint8Array(e)}/**
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
 */function jr(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qr(e){const t=e.mapValue.fields.__previous_value__;return jr(t)?qr(t):t}function kn(e){const t=Xt(e.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n,s,i,r,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Nn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Nn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const as={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?jr(e)?4:Wd(e)?9007199254740991:10:C()}function Rt(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return kn(e).isEqual(kn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Xt(s.timestampValue),o=Xt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return fe(s.bytesValue).isEqual(fe(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Q(s.geoPointValue.latitude)===Q(i.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Q(s.integerValue)===Q(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Q(s.doubleValue),o=Q(i.doubleValue);return r===o?ks(r)===ks(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Fe(e.arrayValue.values||[],t.arrayValue.values||[],Rt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(qo(r)!==qo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Rt(r[a],o[a])))return!1;return!0}(e,t);default:return C()}}function xn(e,t){return(e.values||[]).find(n=>Rt(n,t))!==void 0}function Ve(e,t){if(e===t)return 0;const n=de(e),s=de(t);if(n!==s)return L(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=Q(i.integerValue||i.doubleValue),a=Q(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ko(e.timestampValue,t.timestampValue);case 4:return Ko(kn(e),kn(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(i,r){const o=fe(i),a=fe(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=L(o[c],a[c]);if(u!==0)return u}return L(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=L(Q(i.latitude),Q(r.latitude));return o!==0?o:L(Q(i.longitude),Q(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ve(o[c],a[c]);if(u)return u}return L(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===as.mapValue&&r===as.mapValue)return 0;if(i===as.mapValue)return 1;if(r===as.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=L(a[l],u[l]);if(h!==0)return h;const f=Ve(o[a[l]],c[u[l]]);if(f!==0)return f}return L(a.length,u.length)}(e.mapValue,t.mapValue);default:throw C()}}function Ko(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return L(e,t);const n=Xt(e),s=Xt(t),i=L(n.seconds,s.seconds);return i!==0?i:L(n.nanos,s.nanos)}function Ue(e){return tr(e)}function tr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Xt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?fe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=tr(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${tr(s.fields[a])}`;return r+"}"}(e.mapValue):C();var t,n}function er(e){return!!e&&"integerValue"in e}function zr(e){return!!e&&"arrayValue"in e}function Ho(e){return!!e&&"nullValue"in e}function Go(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function hs(e){return!!e&&"mapValue"in e}function ln(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ve(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ln(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ln(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Wd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!hs(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ln(n)}setAll(t){let n=ut.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ln(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());hs(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Rt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];hs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){ve(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new vt(ln(this.value))}}function cu(e){const t=[];return ve(e.fields,(n,s)=>{const i=new ut([n]);if(hs(s)){const r=cu(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ct(t,0,A.min(),A.min(),A.min(),vt.empty(),0)}static newFoundDocument(t,n,s,i){return new ct(t,1,n,A.min(),s,i,0)}static newNoDocument(t,n){return new ct(t,2,n,A.min(),A.min(),vt.empty(),0)}static newUnknownDocument(t,n){return new ct(t,3,n,A.min(),A.min(),vt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ns{constructor(t,n){this.position=t,this.inclusive=n}}function Qo(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=Ve(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Rt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class hn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Yd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class uu{}class Y extends uu{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Jd(t,n,s):n==="array-contains"?new ep(t,s):n==="in"?new np(t,s):n==="not-in"?new sp(t,s):n==="array-contains-any"?new ip(t,s):new Y(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Zd(t,s):new tp(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ve(n,this.value)):n!==null&&de(this.value)===de(n)&&this.matchesComparison(Ve(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mt extends uu{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new Mt(t,n)}matches(t){return lu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function lu(e){return e.op==="and"}function hu(e){return Xd(e)&&lu(e)}function Xd(e){for(const t of e.filters)if(t instanceof Mt)return!1;return!0}function nr(e){if(e instanceof Y)return e.field.canonicalString()+e.op.toString()+Ue(e.value);if(hu(e))return e.filters.map(t=>nr(t)).join(",");{const t=e.filters.map(n=>nr(n)).join(",");return`${e.op}(${t})`}}function fu(e,t){return e instanceof Y?function(n,s){return s instanceof Y&&n.op===s.op&&n.field.isEqual(s.field)&&Rt(n.value,s.value)}(e,t):e instanceof Mt?function(n,s){return s instanceof Mt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&fu(r,s.filters[o]),!0):!1}(e,t):void C()}function du(e){return e instanceof Y?function(t){return`${t.field.canonicalString()} ${t.op} ${Ue(t.value)}`}(e):e instanceof Mt?function(t){return t.op.toString()+" {"+t.getFilters().map(du).join(" ,")+"}"}(e):"Filter"}class Jd extends Y{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class Zd extends Y{constructor(t,n){super(t,"in",n),this.keys=pu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class tp extends Y{constructor(t,n){super(t,"not-in",n),this.keys=pu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function pu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class ep extends Y{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return zr(n)&&xn(n.arrayValue,this.value)}}class np extends Y{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&xn(this.value.arrayValue,n)}}class sp extends Y{constructor(t,n){super(t,"not-in",n)}matches(t){if(xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!xn(this.value.arrayValue,n)}}class ip extends Y{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!zr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xn(this.value.arrayValue,s))}}/**
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
 */class rp{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Yo(e,t=null,n=[],s=[],i=null,r=null,o=null){return new rp(e,t,n,s,i,r,o)}function Kr(e){const t=D(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>nr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Js(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ue(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ue(s)).join(",")),t.dt=n}return t.dt}function Hr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Yd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!fu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wo(e.startAt,t.startAt)&&Wo(e.endAt,t.endAt)}function sr(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function op(e,t,n,s,i,r,o,a){return new Zs(e,t,n,s,i,r,o,a)}function ti(e){return new Zs(e)}function Xo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ap(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function cp(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function up(e){return e.collectionGroup!==null}function Me(e){const t=D(e);if(t.wt===null){t.wt=[];const n=cp(t),s=ap(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new hn(n)),t.wt.push(new hn(ut.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new hn(ut.keyField(),r))}}}return t.wt}function Vt(e){const t=D(e);if(!t._t)if(t.limitType==="F")t._t=Yo(t.path,t.collectionGroup,Me(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Me(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new hn(r.field,o))}const s=t.endAt?new Ns(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Ns(t.startAt.position,t.startAt.inclusive):null;t._t=Yo(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function ir(e,t,n){return new Zs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ei(e,t){return Hr(Vt(e),Vt(t))&&e.limitType===t.limitType}function gu(e){return`${Kr(Vt(e))}|lt:${e.limitType}`}function rr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>du(s)).join(", ")}]`),Js(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ue(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ue(s)).join(",")),`Target(${n})`}(Vt(e))}; limitType=${e.limitType})`}function ni(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):T.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Me(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Qo(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Me(n),s)||n.endAt&&!function(i,r,o){const a=Qo(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Me(n),s))}(e,t)}function lp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function mu(e){return(t,n)=>{let s=!1;for(const i of Me(e)){const r=hp(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function hp(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ve(a,c):C()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return C()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ve(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ou(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new j(T.comparator);function Ut(){return fp}const yu=new j(T.comparator);function rn(...e){let t=yu;for(const n of e)t=t.insert(n.key,n);return t}function vu(e){let t=yu;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function re(){return fn()}function wu(){return fn()}function fn(){return new Xe(e=>e.toString(),(e,t)=>e.isEqual(t))}const dp=new j(T.comparator),pp=new ft(T.comparator);function x(...e){let t=pp;for(const n of e)t=t.add(n);return t}const gp=new ft(L);function mp(){return gp}/**
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
 */function Eu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ks(t)?"-0":t}}function _u(e){return{integerValue:""+e}}function yp(e,t){return Hd(t)?_u(t):Eu(e,t)}/**
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
 */class si{constructor(){this._=void 0}}function vp(e,t,n){return e instanceof xs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&jr(i)&&(i=qr(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Be?Su(e,t):e instanceof Rn?Iu(e,t):function(s,i){const r=Tu(s,i),o=Jo(r)+Jo(s.gt);return er(r)&&er(s.gt)?_u(o):Eu(s.serializer,o)}(e,t)}function wp(e,t,n){return e instanceof Be?Su(e,t):e instanceof Rn?Iu(e,t):n}function Tu(e,t){return e instanceof Rs?er(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class xs extends si{}class Be extends si{constructor(t){super(),this.elements=t}}function Su(e,t){const n=Cu(t);for(const s of e.elements)n.some(i=>Rt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Rn extends si{constructor(t){super(),this.elements=t}}function Iu(e,t){let n=Cu(t);for(const s of e.elements)n=n.filter(i=>!Rt(i,s));return{arrayValue:{values:n}}}class Rs extends si{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Jo(e){return Q(e.integerValue||e.doubleValue)}function Cu(e){return zr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,n){this.field=t,this.transform=n}}function _p(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Be&&s instanceof Be||n instanceof Rn&&s instanceof Rn?Fe(n.elements,s.elements,Rt):n instanceof Rs&&s instanceof Rs?Rt(n.gt,s.gt):n instanceof xs&&s instanceof xs}(e.transform,t.transform)}class Tp{constructor(t,n){this.version=t,this.transformResults=n}}class Lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fs(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ii{}function bu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Du(e.key,Lt.none()):new ri(e.key,e.data,Lt.none());{const n=e.data,s=vt.empty();let i=new ft(ut.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new we(e.key,s,new It(i.toArray()),Lt.none())}}function Sp(e,t,n){e instanceof ri?function(s,i,r){const o=s.value.clone(),a=ta(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof we?function(s,i,r){if(!fs(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ta(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Au(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function dn(e,t,n,s){return e instanceof ri?function(i,r,o,a){if(!fs(i.precondition,r))return o;const c=i.value.clone(),u=ea(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof we?function(i,r,o,a){if(!fs(i.precondition,r))return o;const c=ea(i.fieldTransforms,a,r),u=r.data;return u.setAll(Au(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(i,r,o){return fs(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Ip(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Tu(s.transform,i||null);r!=null&&(n===null&&(n=vt.empty()),n.set(s.field,r))}return n||null}function Zo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Fe(n,s,(i,r)=>_p(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ri extends ii{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class we extends ii{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Au(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function ta(e,t,n){const s=new Map;U(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,wp(o,a,n[i]))}return s}function ea(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,vp(r,o,t))}return s}class Du extends ii{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cp extends ii{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Sp(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=dn(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=dn(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=wu();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=bu(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),x())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(n,s)=>Zo(n,s))&&Fe(this.baseMutations,t.baseMutations,(n,s)=>Zo(n,s))}}class Gr{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){U(t.mutations.length===s.length);let i=dp;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Gr(t,n,s,i)}}/**
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
 */var G,M;function kp(e){switch(e){default:return C();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function ku(e){if(e===void 0)return Ft("GRPC error has no .code"),m.UNKNOWN;switch(e){case G.OK:return m.OK;case G.CANCELLED:return m.CANCELLED;case G.UNKNOWN:return m.UNKNOWN;case G.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case G.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case G.INTERNAL:return m.INTERNAL;case G.UNAVAILABLE:return m.UNAVAILABLE;case G.UNAUTHENTICATED:return m.UNAUTHENTICATED;case G.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case G.NOT_FOUND:return m.NOT_FOUND;case G.ALREADY_EXISTS:return m.ALREADY_EXISTS;case G.PERMISSION_DENIED:return m.PERMISSION_DENIED;case G.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case G.ABORTED:return m.ABORTED;case G.OUT_OF_RANGE:return m.OUT_OF_RANGE;case G.UNIMPLEMENTED:return m.UNIMPLEMENTED;case G.DATA_LOSS:return m.DATA_LOSS;default:return C()}}(M=G||(G={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Qr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return cs}static getOrCreateInstance(){return cs===null&&(cs=new Qr),cs}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let cs=null;/**
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
 */const xp=new Re([4294967295,4294967295],0);function na(e){const t=Np().encode(e),n=new xd;return n.update(t),new Uint8Array(n.digest())}function sa(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Re([n,s],0),new Re([i,r],0)]}class Wr{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new on(`Invalid padding: ${n}`);if(s<0)throw new on(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new on(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new on(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=Re.fromNumber(this.It)}Et(t,n,s){let i=t.add(n.multiply(Re.fromNumber(s)));return i.compare(xp)===1&&(i=new Re([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=na(t),[s,i]=sa(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(t,n,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Wr(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=na(t),[s,i]=sa(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class on extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Wn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new oi(A.min(),i,new j(L),Ut(),x())}}class Wn{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Wn(s,n,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n,s,i){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=i}}class Nu{constructor(t,n){this.targetId=t,this.Vt=n}}class xu{constructor(t,n,s=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ia{constructor(){this.St=0,this.Dt=oa(),this.Ct=dt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=x(),n=x(),s=x();return this.Dt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:C()}}),new Wn(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=oa()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Rp{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Ut(),this.zt=ra(),this.Wt=new j(L)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:C()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(t){var n;const s=t.targetId,i=t.Vt.count,r=this.se(s);if(r){const o=r.target;if(sr(o))if(i===0){const a=new T(o.path);this.Yt(s,a,ct.newNoDocument(a,A.min()))}else U(i===1);else{const a=this.ie(s);if(a!==i){const c=this.re(t,a);if(c!==0){this.ee(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(n=Qr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var f,d,p,g,v,S;const R={localCacheCount:l,existenceFilterCount:h.count},I=h.unchangedNames;return I&&(R.bloomFilter={applied:u===0,hashCount:(f=I==null?void 0:I.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(g=(p=(d=I==null?void 0:I.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&g!==void 0?g:0,padding:(S=(v=I==null?void 0:I.bits)===null||v===void 0?void 0:v.padding)!==null&&S!==void 0?S:0}),R}(c,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:i}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=fe(r).toUint8Array()}catch(l){if(l instanceof au)return $e("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Wr(c,o,a)}catch(l){return $e(l instanceof on?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==n-this.oe(t.targetId,u)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(t,r,null),i++)}),i}ce(t){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&sr(a.target)){const c=new T(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ct.newNoDocument(c,t))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=x();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(t));const i=new oi(t,n,this.Wt,this.jt,s);return this.jt=Ut(),this.zt=ra(),this.Wt=new j(L),i}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const i=this.Zt(t);this.ae(t,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new ia,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new ft(L),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new ia),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function ra(){return new j(T.comparator)}function oa(){return new j(T.comparator)}const Mp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Op=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lp=(()=>({and:"AND",or:"OR"}))();class Pp{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function or(e,t){return e.useProto3Json||Js(t)?t:{value:t}}function Ms(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ru(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function $p(e,t){return Ms(e,t.toTimestamp())}function xt(e){return U(!!e),A.fromTimestamp(function(t){const n=Xt(t);return new J(n.seconds,n.nanos)}(e))}function Yr(e,t){return function(n){return new B(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Mu(e){const t=B.fromString(e);return U($u(t)),t}function ar(e,t){return Yr(e.databaseId,t.path)}function ki(e,t){const n=Mu(t);if(n.get(1)!==e.databaseId.projectId)throw new _(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(Ou(n))}function cr(e,t){return Yr(e.databaseId,t)}function Fp(e){const t=Mu(e);return t.length===4?B.emptyPath():Ou(t)}function ur(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ou(e){return U(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function aa(e,t,n){return{name:ar(e,t),fields:n.value.mapValue.fields}}function Vp(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(U(u===void 0||typeof u=="string"),dt.fromBase64String(u||"")):(U(u===void 0||u instanceof Uint8Array),dt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:ku(c.code);return new _(u,c.message||"")}(o);n=new xu(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=ki(e,s.document.name),r=xt(s.document.updateTime),o=s.document.createTime?xt(s.document.createTime):A.min(),a=new vt({mapValue:{fields:s.document.fields}}),c=ct.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new ds(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=ki(e,s.document),r=s.readTime?xt(s.readTime):A.min(),o=ct.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ds([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=ki(e,s.document),r=s.removedTargetIds||[];n=new ds([],r,i,null)}else{if(!("filter"in t))return C();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Dp(i,r),a=s.targetId;n=new Nu(a,o)}}return n}function Up(e,t){let n;if(t instanceof ri)n={update:aa(e,t.key,t.value)};else if(t instanceof Du)n={delete:ar(e,t.key)};else if(t instanceof we)n={update:aa(e,t.key,t.data),updateMask:Wp(t.fieldMask)};else{if(!(t instanceof Cp))return C();n={verify:ar(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof xs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Be)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Rn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rs)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw C()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$p(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:C()}(e,t.precondition)),n}function Bp(e,t){return e&&e.length>0?(U(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?xt(s.updateTime):xt(i);return r.isEqual(A.min())&&(r=xt(i)),new Tp(r,s.transformResults||[])}(n,t))):[]}function jp(e,t){return{documents:[cr(e,t.path)]}}function qp(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=cr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=cr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Pu(Mt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ce(l.field),direction:Hp(l.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=or(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function zp(e){let t=Fp(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){U(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=Lu(l);return h instanceof Mt&&hu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new hn(be(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Js(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Ns(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Ns(f,h)}(n.endAt)),op(t,i,o,r,a,"F",c,u)}function Kp(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Lu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=be(t.unaryFilter.field);return Y.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=be(t.unaryFilter.field);return Y.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=be(t.unaryFilter.field);return Y.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=be(t.unaryFilter.field);return Y.create(r,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(e):e.fieldFilter!==void 0?function(t){return Y.create(be(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Mt.create(t.compositeFilter.filters.map(n=>Lu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op))}(e):C()}function Hp(e){return Mp[e]}function Gp(e){return Op[e]}function Qp(e){return Lp[e]}function Ce(e){return{fieldPath:e.canonicalString()}}function be(e){return ut.fromServerFormat(e.fieldPath)}function Pu(e){return e instanceof Y?function(t){if(t.op==="=="){if(Go(t.value))return{unaryFilter:{field:Ce(t.field),op:"IS_NAN"}};if(Ho(t.value))return{unaryFilter:{field:Ce(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Go(t.value))return{unaryFilter:{field:Ce(t.field),op:"IS_NOT_NAN"}};if(Ho(t.value))return{unaryFilter:{field:Ce(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ce(t.field),op:Gp(t.op),value:t.value}}}(e):e instanceof Mt?function(t){const n=t.getFilters().map(s=>Pu(s));return n.length===1?n[0]:{compositeFilter:{op:Qp(t.op),filters:n}}}(e):C()}function Wp(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function $u(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,n,s,i,r=A.min(),o=A.min(),a=dt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(t){this.fe=t}}function Xp(e){const t=zp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ir(t,t.limit,"L"):t}/**
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
 */class Jp{constructor(){this.rn=new Zp}addToCollectionParentIndex(t,n){return this.rn.add(n),y.resolve()}getCollectionParents(t,n){return y.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return y.resolve()}deleteFieldIndex(t,n){return y.resolve()}getDocumentsMatchingTarget(t,n){return y.resolve(null)}getIndexType(t,n){return y.resolve(0)}getFieldIndexes(t,n){return y.resolve([])}getNextCollectionGroupToUpdate(t){return y.resolve(null)}getMinOffset(t,n){return y.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,n){return y.resolve(Yt.min())}updateCollectionGroup(t,n,s){return y.resolve()}updateIndexEntries(t,n){return y.resolve()}}class Zp{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new ft(B.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new ft(B.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new je(0)}static Mn(){return new je(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.changes=new Xe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ct.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eg{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&dn(s.mutation,i,It.empty(),J.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,x()).next(()=>s))}getLocalViewOfDocuments(t,n,s=x()){const i=re();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=rn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=re();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,x()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=Ut();const o=fn(),a=fn();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof we)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),dn(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new eg(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=fn();let i=new j((o,a)=>o-a),r=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||It.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||x()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=wu();l.forEach(f=>{if(!r.has(f)){const d=bu(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):up(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):y.resolve(re());let a=-1,c=r;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?y.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,x())).next(l=>({batchId:a,changes:vu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(s=>{let i=rn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=rn();return this.indexManager.getCollectionParents(t,i).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Zs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ct.newInvalidDocument(u)))});let o=rn();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&dn(u.mutation,c,It.empty(),J.now()),ni(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class sg{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return y.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:xt(s.createTime)}),y.resolve()}getNamedQuery(t,n){return y.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Xp(s.bundledQuery),readTime:xt(s.readTime)}}(n)),y.resolve()}}/**
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
 */class ig{constructor(){this.overlays=new j(T.comparator),this.ls=new Map}getOverlay(t,n){return y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=re();return y.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.we(t,n,r)}),y.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),y.resolve()}getOverlaysForCollection(t,n,s){const i=re(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return y.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new j((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=re(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=re(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return y.resolve(a)}we(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ap(n,s));let r=this.ls.get(n);r===void 0&&(r=x(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.fs=new ft(Z.ds),this.ws=new ft(Z._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new Z(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new Z(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new T(new B([])),s=new Z(n,t),i=new Z(n,t+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new T(new B([])),s=new Z(n,t),i=new Z(n,t+1);let r=x();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new Z(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Z{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return T.comparator(t.key,n.key)||L(t.As,n.As)}static _s(t,n){return L(t.As,n.As)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ft(Z.ds)}checkEmpty(t){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bp(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Z(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(t,n){return y.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Z(n,0),i=new Z(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new ft(L);return n.forEach(i=>{const r=new Z(i,0),o=new Z(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),y.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new Z(new T(r),0);let a=new ft(L);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),y.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){U(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return y.forEach(n.mutations,i=>{const r=new Z(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new Z(n,0),i=this.Rs.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,y.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t){this.Ds=t,this.docs=new j(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(t,n){let s=Ut();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ct.newInvalidDocument(i))}),y.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=Ut();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qd(jd(l),s)<=0||(i.has(l.key)||ni(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return y.resolve(r)}getAllFromCollectionGroup(t,n,s,i){C()}Cs(t,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new ag(this)}getSize(t){return y.resolve(this.size)}}class ag extends tg{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(t,i)):this.os.removeEntry(s)}),y.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t){this.persistence=t,this.xs=new Xe(n=>Kr(n),Hr),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Xr,this.targetCount=0,this.Ms=je.kn()}forEachTarget(t,n){return this.xs.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(t){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return y.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),y.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new je(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,y.resolve()}updateTargetData(t,n){return this.Fn(n),y.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(t){return y.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return y.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),y.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return y.resolve(s)}containsKey(t,n){return y.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,n){this.$s={},this.overlays={},this.Os=new Br(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new cg(this),this.indexManager=new Jp,this.remoteDocumentCache=function(s){return new og(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Yp(n),this.qs=new sg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ig,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new rg(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){E("MemoryPersistence","Starting transaction:",t);const i=new lg(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(t,n){return y.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class lg extends Kd{constructor(t){super(),this.currentSequenceNumber=t}}class Jr{constructor(t){this.persistence=t,this.Qs=new Xr,this.js=null}static zs(t){return new Jr(t)}get Ws(){if(this.js)return this.js;throw C()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),y.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),y.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),y.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Ws,s=>{const i=T.fromPath(s);return this.Hs(t,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return y.or([()=>y.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(t,n){let s=x(),i=x();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Zr(t,n.fromCache,s,i)}}/**
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
 */class hg{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ki(t,n).next(r=>r||this.Gi(t,n,i,s)).next(r=>r||this.Qi(t,n))}Ki(t,n){if(Xo(n))return y.resolve(null);let s=Vt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ir(n,null,"F"),s=Vt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=x(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.ji(n,a);return this.zi(n,u,o,c.readTime)?this.Ki(t,ir(n,null,"F")):this.Wi(t,u,n,c)}))})))}Gi(t,n,s,i){return Xo(n)||i.isEqual(A.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(t,n):(jo()<=P.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rr(n)),this.Wi(t,o,n,Bd(i,-1)))})}ji(t,n){let s=new ft(mu(t));return n.forEach((i,r)=>{ni(t,r)&&(s=s.add(r))}),s}zi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,n){return jo()<=P.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",rr(n)),this.Ui.getDocumentsMatchingQuery(t,n,Yt.min())}Wi(t,n,s,i){return this.Ui.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class fg{constructor(t,n,s,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new j(L),this.Yi=new Xe(r=>Kr(r),Hr),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ng(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function dg(e,t,n,s){return new fg(e,t,n,s)}async function Fu(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=x();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function pg(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=y.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const g=c.docVersions.get(d);U(g!==null),p.version.compareTo(g)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=x();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Vu(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function gg(e,t){const n=D(e),s=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,l.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(dt.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),i=i.insert(h,d),function(p,g,v){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Bs.updateTargetData(r,d))});let c=Ut(),u=x();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(mg(r,o,t.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!s.isEqual(A.min())){const l=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Ji=i,r))}function mg(e,t,n){let s=x(),i=x();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=Ut();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function yg(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function vg(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,t).next(r=>r?(i=r,y.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Bt(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function lr(e,t,n){const s=D(e),i=s.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function ca(e,t,n){const s=D(e);let i=A.min(),r=x();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=D(a),h=l.Yi.get(u);return h!==void 0?y.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(s,o,Vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?i:A.min(),n?r:x())).next(a=>(wg(s,lp(t),a),{documents:a,ir:r})))}function wg(e,t,n){let s=e.Xi.get(t)||A.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Xi.set(t,s)}class ua{constructor(){this.activeTargetIds=mp()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Eg{constructor(){this.Hr=new ua,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new ua,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class _g{Yr(t){}shutdown(){}}/**
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
 */class la{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let us=null;function Ni(){return us===null?us=268435456+Math.round(2147483648*Math.random()):us++,"0x"+us.toString(16)}/**
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
 */const Tg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class Ig extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,i,r){const o=Ni(),a=this.To(t,n);E("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.Eo(c,i,r),this.Ao(t,a,c,s).then(u=>(E("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw $e("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}vo(t,n,s,i,r,o){return this.Io(t,n,s,i,r)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ye,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}To(t,n){const s=Tg[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,i){const r=Ni();return new Promise((o,a)=>{const c=new Nd;c.setWithCredentials(!0),c.listenOnce(Ad.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Di.NO_ERROR:const l=c.getResponseJson();E(ot,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(l)),o(l);break;case Di.TIMEOUT:E(ot,`RPC '${t}' ${r} timed out`),a(new _(m.DEADLINE_EXCEEDED,"Request time out"));break;case Di.HTTP_ERROR:const h=c.getStatus();if(E(ot,`RPC '${t}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(v)>=0?v:m.UNKNOWN}(d.status);a(new _(p,d.message))}else a(new _(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(m.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{E(ot,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);E(ot,`RPC '${t}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}Ro(t,n,s){const i=Ni(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Cd(),a=bd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new kd({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=r.join("");E(ot,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,d=!1;const p=new Sg({ro:v=>{d?E(ot,`Not sending because RPC '${t}' stream ${i} is closed:`,v):(f||(E(ot,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),E(ot,`RPC '${t}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),g=(v,S,R)=>{v.listen(S,I=>{try{R(I)}catch(O){setTimeout(()=>{throw O},0)}})};return g(h,rs.EventType.OPEN,()=>{d||E(ot,`RPC '${t}' stream ${i} transport opened.`)}),g(h,rs.EventType.CLOSE,()=>{d||(d=!0,E(ot,`RPC '${t}' stream ${i} transport closed`),p.wo())}),g(h,rs.EventType.ERROR,v=>{d||(d=!0,$e(ot,`RPC '${t}' stream ${i} transport errored:`,v),p.wo(new _(m.UNAVAILABLE,"The operation could not be completed")))}),g(h,rs.EventType.MESSAGE,v=>{var S;if(!d){const R=v.data[0];U(!!R);const I=R,O=I.error||((S=I[0])===null||S===void 0?void 0:S.error);if(O){E(ot,`RPC '${t}' stream ${i} received error:`,O);const _t=O.status;let ee=function(Tt){const yt=G[Tt];if(yt!==void 0)return ku(yt)}(_t),K=O.message;ee===void 0&&(ee=m.INTERNAL,K="Unknown error status: "+_t+" with message "+O.message),d=!0,p.wo(new _(ee,K)),h.close()}else E(ot,`RPC '${t}' stream ${i} received:`,R),p._o(R)}}),g(a,Dd.STAT_EVENT,v=>{v.stat===Uo.PROXY?E(ot,`RPC '${t}' stream ${i} detected buffering proxy`):v.stat===Uo.NOPROXY&&E(ot,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function xi(){return typeof document<"u"?document:null}/**
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
 */function ai(e){return new Pp(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t,n,s=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,n,s,i,r,o,a,c){this.ii=t,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Uu(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Ft(n.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{t(()=>{const i=new _(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cg extends Bu{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=Vp(this.serializer,t),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?xt(r.readTime):A.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=ur(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=sr(a)?{documents:jp(i,a)}:{query:qp(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Ru(i,r.resumeToken);const c=or(i,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(A.min())>0){o.readTime=Ms(i,r.snapshotVersion.toTimestamp());const c=or(i,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,t);const s=Kp(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=ur(this.serializer),n.removeTarget=t,this.Wo(n)}}class bg extends Bu{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(U(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Bp(t.writeResults,t.commitTime),s=xt(t.commitTime);return this.listener.cu(s,n)}return U(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=ur(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Up(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new _(m.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(m.UNKNOWN,i.toString())})}vo(t,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(m.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Dg{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ft(n),this.mu=!1):E("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ee(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.vu.add(4),await Yn(c),c.bu.set("Unknown"),c.vu.delete(4),await ci(c)}(this))})}),this.bu=new Dg(s,i)}}async function ci(e){if(Ee(e))for(const t of e.Ru)await t(!0)}async function Yn(e){for(const t of e.Ru)await t(!1)}function ju(e,t){const n=D(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),no(n)?eo(n):Je(n).Ko()&&to(n,t))}function qu(e,t){const n=D(e),s=Je(n);n.Au.delete(t),s.Ko()&&zu(n,t),n.Au.size===0&&(s.Ko()?s.jo():Ee(n)&&n.bu.set("Unknown"))}function to(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(A.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Je(e).su(t)}function zu(e,t){e.Vu.qt(t),Je(e).iu(t)}function eo(e){e.Vu=new Rp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Je(e).start(),e.bu.gu()}function no(e){return Ee(e)&&!Je(e).Uo()&&e.Au.size>0}function Ee(e){return D(e).vu.size===0}function Ku(e){e.Vu=void 0}async function Ng(e){e.Au.forEach((t,n)=>{to(e,t)})}async function xg(e,t){Ku(e),no(e)?(e.bu.Iu(t),eo(e)):e.bu.set("Unknown")}async function Rg(e,t,n){if(e.bu.set("Online"),t instanceof xu&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Os(e,s)}else if(t instanceof ds?e.Vu.Ht(t):t instanceof Nu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(A.min()))try{const s=await Vu(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(dt.EMPTY_BYTE_STRING,u.snapshotVersion)),zu(i,a);const l=new Bt(u.target,a,c,u.sequenceNumber);to(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await Os(e,s)}}async function Os(e,t,n){if(!Qn(t))throw t;e.vu.add(1),await Yn(e),e.bu.set("Offline"),n||(n=()=>Vu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ci(e)})}function Hu(e,t){return t().catch(n=>Os(e,n,t))}async function ui(e){const t=D(e),n=Jt(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Mg(t);)try{const i=await yg(t.localStore,s);if(i===null){t.Eu.length===0&&n.jo();break}s=i.batchId,Og(t,i)}catch(i){await Os(t,i)}Gu(t)&&Qu(t)}function Mg(e){return Ee(e)&&e.Eu.length<10}function Og(e,t){e.Eu.push(t);const n=Jt(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Gu(e){return Ee(e)&&!Jt(e).Uo()&&e.Eu.length>0}function Qu(e){Jt(e).start()}async function Lg(e){Jt(e).hu()}async function Pg(e){const t=Jt(e);for(const n of e.Eu)t.uu(n.mutations)}async function $g(e,t,n){const s=e.Eu.shift(),i=Gr.from(s,t,n);await Hu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ui(e)}async function Fg(e,t){t&&Jt(e).ou&&await async function(n,s){if(i=s.code,kp(i)&&i!==m.ABORTED){const r=n.Eu.shift();Jt(n).Qo(),await Hu(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ui(n)}var i}(e,t),Gu(e)&&Qu(e)}async function ha(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=Ee(n);n.vu.add(3),await Yn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ci(n)}async function Vg(e,t){const n=D(e);t?(n.vu.delete(2),await ci(n)):t||(n.vu.add(2),await Yn(n),n.bu.set("Unknown"))}function Je(e){return e.Su||(e.Su=function(t,n,s){const i=D(t);return i.fu(),new Cg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Ng.bind(null,e),ao:xg.bind(null,e),nu:Rg.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),no(e)?eo(e):e.bu.set("Unknown")):(await e.Su.stop(),Ku(e))})),e.Su}function Jt(e){return e.Du||(e.Du=function(t,n,s){const i=D(t);return i.fu(),new bg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Lg.bind(null,e),ao:Fg.bind(null,e),au:Pg.bind(null,e),cu:$g.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await ui(e)):(await e.Du.stop(),e.Eu.length>0&&(E("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new so(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function io(e,t){if(Ft("AsyncQueue",`${t}: ${e}`),Qn(e))return new _(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.comparator=t?(n,s)=>t(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=rn(),this.sortedSet=new j(this.comparator)}static emptySet(t){return new Oe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Oe;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this.Cu=new j(T.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):C():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class qe{constructor(t,n,s,i,r,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qe(t,n,Oe.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ei(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.Nu=void 0,this.listeners=[]}}class Bg{constructor(){this.queries=new Xe(t=>gu(t),ei),this.onlineState="Unknown",this.ku=new Set}}async function Wu(e,t){const n=D(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ug),i)try{r.Nu=await n.onListen(s)}catch(o){const a=io(o,`Initialization of query '${rr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&ro(n)}async function Yu(e,t){const n=D(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function jg(e,t){const n=D(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&ro(n)}function qg(e,t,n){const s=D(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ro(e){e.ku.forEach(t=>{t.next()})}class Xu{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new qe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this.key=t}}class Zu{constructor(t){this.key=t}}class zg{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=x(),this.mutatedKeys=x(),this.tc=mu(t),this.ec=new Oe(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new fa,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const f=i.get(l),d=ni(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(s.track({type:3,doc:d}),v=!0):this.rc(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.tc(d,c)>0||u&&this.tc(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),r=g?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const r=t.ic.xu();r.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return d(h)-d(f)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new qe(this.query,t.ec,i,r,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new fa,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=x(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new Zu(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new Ju(s))}),n}hc(t){this.Yu=t.ir,this.Zu=x();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return qe.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Kg{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Hg{constructor(t){this.key=t,this.fc=!1}}class Gg{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Xe(a=>gu(a),ei),this._c=new Map,this.mc=new Set,this.gc=new j(T.comparator),this.yc=new Map,this.Ic=new Xr,this.Tc={},this.Ec=new Map,this.Ac=je.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Qg(e,t){const n=im(e);let s,i;const r=n.wc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await vg(n.localStore,Vt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Wg(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&ju(n.remoteStore,o)}return i}async function Wg(e,t,n,s,i){e.Rc=(h,f,d)=>async function(p,g,v,S){let R=g.view.sc(v);R.zi&&(R=await ca(p.localStore,g.query,!1).then(({documents:_t})=>g.view.sc(_t,R)));const I=S&&S.targetChanges.get(g.targetId),O=g.view.applyChanges(R,p.isPrimaryClient,I);return pa(p,g.targetId,O.cc),O.snapshot}(e,h,f,d);const r=await ca(e.localStore,t,!0),o=new zg(t,r.ir),a=o.sc(r.documents),c=Wn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);pa(e,n,u.cc);const l=new Kg(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function Yg(e,t){const n=D(e),s=n.wc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!ei(r,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await lr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),qu(n.remoteStore,s.targetId),hr(n,s.targetId)}).catch(Gn)):(hr(n,s.targetId),await lr(n.localStore,s.targetId,!0))}async function Xg(e,t,n){const s=rm(e);try{const i=await function(r,o){const a=D(r),c=J.now(),u=o.reduce((f,d)=>f.add(d.key),x());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Ut(),p=x();return a.Zi.getEntries(f,u).next(g=>{d=g,d.forEach((v,S)=>{S.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(g=>{l=g;const v=[];for(const S of o){const R=Ip(S,l.get(S.key).overlayedDocument);R!=null&&v.push(new we(S.key,R,cu(R.value.mapValue),Lt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(g=>{h=g;const v=g.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,g.batchId,v)})}).then(()=>({batchId:h.batchId,changes:vu(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new j(L)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Xn(s,i.changes),await ui(s.remoteStore)}catch(i){const r=io(i,"Failed to persist write");n.reject(r)}}async function tl(e,t){const n=D(e);try{const s=await gg(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?U(o.fc):i.removedDocuments.size>0&&(U(o.fc),o.fc=!1))}),await Xn(n,s,t)}catch(s){await Gn(s)}}function da(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&ro(a)}(s.eventManager,t),i.length&&s.dc.nu(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Jg(e,t,n){const s=D(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.yc.get(t),r=i&&i.key;if(r){let o=new j(T.comparator);o=o.insert(r,ct.newNoDocument(r,A.min()));const a=x().add(r),c=new oi(A.min(),new Map,new j(L),o,a);await tl(s,c),s.gc=s.gc.remove(r),s.yc.delete(t),oo(s)}else await lr(s.localStore,t,!1).then(()=>hr(s,t,n)).catch(Gn)}async function Zg(e,t){const n=D(e),s=t.batch.batchId;try{const i=await pg(n.localStore,t);nl(n,s,null),el(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xn(n,i)}catch(i){await Gn(i)}}async function tm(e,t,n){const s=D(e);try{const i=await function(r,o){const a=D(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(U(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);nl(s,t,n),el(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Xn(s,i)}catch(i){await Gn(i)}}function el(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function nl(e,t,n){const s=D(e);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.Tc[s.currentUser.toKey()]=i}}function hr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||sl(e,s)})}function sl(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(qu(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),oo(e))}function pa(e,t,n){for(const s of n)s instanceof Ju?(e.Ic.addReference(s.key,t),em(e,s)):s instanceof Zu?(E("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||sl(e,s.key)):C()}function em(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(E("SyncEngine","New document in limbo: "+n),e.mc.add(s),oo(e))}function oo(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new T(B.fromString(t)),s=e.Ac.next();e.yc.set(s,new Hg(n)),e.gc=e.gc.insert(n,s),ju(e.remoteStore,new Bt(Vt(ti(n.path)),s,"TargetPurposeLimboResolution",Br.ct))}}async function Xn(e,t,n){const s=D(e),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Zr.Li(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,c){const u=D(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>y.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Qn(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ji.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.Ji=u.Ji.insert(h,p)}}}(s.localStore,r))}async function nm(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const s=await Fu(n.localStore,t);n.currentUser=t,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new _(m.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Xn(n,s.er)}}function sm(e,t){const n=D(e),s=n.yc.get(t);if(s&&s.fc)return x().add(s.key);{let i=x();const r=n._c.get(t);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function im(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=tl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jg.bind(null,t),t.dc.nu=jg.bind(null,t.eventManager),t.dc.Pc=qg.bind(null,t.eventManager),t}function rm(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Zg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tm.bind(null,t),t}class ga{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ai(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return dg(this.persistence,new hg,t.initialUser,this.serializer)}createPersistence(t){return new ug(Jr.zs,this.serializer)}createSharedClientState(t){return new Eg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class om{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>da(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=nm.bind(null,this.syncEngine),await Vg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Bg}createDatastore(t){const n=ai(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Ig(i));var i;return function(r,o,a,c){return new Ag(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>da(this.syncEngine,a,0),o=la.D()?new la:new _g,new kg(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const l=new Gg(s,i,r,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);E("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Yn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class il{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=ru.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{E("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(E("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=io(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ri(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Fu(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ma(e,t){e.asyncQueue.verifyOperationInProgress();const n=await um(e);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>ha(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>ha(t.remoteStore,r)),e._onlineComponents=t}function cm(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function um(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ri(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!cm(n))throw n;$e("Error using user provided cache. Falling back to memory cache: "+n),await Ri(e,new ga)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await Ri(e,new ga);return e._offlineComponents}async function rl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await ma(e,e._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await ma(e,new om))),e._onlineComponents}function lm(e){return rl(e).then(t=>t.syncEngine)}async function fr(e){const t=await rl(e),n=t.eventManager;return n.onListen=Qg.bind(null,t.syncEngine),n.onUnlisten=Yg.bind(null,t.syncEngine),n}function hm(e,t,n={}){const s=new zt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new il({next:h=>{r.enqueueAndForget(()=>Yu(i,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new _(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new _(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Xu(ti(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Wu(i,l)}(await fr(e),e.asyncQueue,t,n,s)),s.promise}/**
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
 */function ol(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */function al(e,t,n){if(!n)throw new _(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fm(e,t,n,s){if(t===!0&&s===!0)throw new _(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function va(e){if(!T.isDocumentKey(e))throw new _(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function wa(e){if(T.isDocumentKey(e))throw new _(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ao(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":C()}function Kt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ao(e);throw new _(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ea{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new _(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ol((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new _(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new _(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new _(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class li{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ea({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ea(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Rd;switch(n.type){case"firstParty":return new Pd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ya.get(t);n&&(E("ComponentProvider","Removing Datastore"),ya.delete(t),n.terminate())}(this),Promise.resolve()}}function dm(e,t,n,s={}){var i;const r=(e=Kt(e,li))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&$e("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=at.MOCK_USER;else{o=ch(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new at(c)}e._authCredentials=new Md(new iu(o,a))}}/**
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
 */class mt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class hi{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new hi(this.firestore,t,this._query)}}class Ht extends hi{constructor(t,n,s){super(t,n,ti(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new T(t))}withConverter(t){return new Ht(this.firestore,t,this._path)}}function pm(e,t,...n){if(e=Pt(e),al("collection","path",t),e instanceof li){const s=B.fromString(t,...n);return wa(s),new Ht(e,null,s)}{if(!(e instanceof mt||e instanceof Ht))throw new _(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(B.fromString(t,...n));return wa(s),new Ht(e.firestore,null,s)}}function gm(e,t,...n){if(e=Pt(e),arguments.length===1&&(t=ru.A()),al("doc","path",t),e instanceof li){const s=B.fromString(t,...n);return va(s),new mt(e,null,new T(s))}{if(!(e instanceof mt||e instanceof Ht))throw new _(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(B.fromString(t,...n));return va(s),new mt(e.firestore,e instanceof Ht?e.converter:null,new T(s))}}/**
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
 */class mm{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Uu(this,"async_queue_retry"),this.Xc=()=>{const n=xi();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=xi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=xi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new zt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Qn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ft("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=so.createAndSchedule(this,t,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&C()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}function _a(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Mn extends li{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new mm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cl(this),this._firestoreClient.terminate()}}function ym(e,t){const n=typeof e=="object"?e:df(),s=typeof e=="string"?e:t||"(default)",i=uf(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=oh("firestore");r&&dm(i,...r)}return i}function co(e){return e._firestoreClient||cl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function cl(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,c,u){return new Qd(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ol(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new am(e._authCredentials,e._appCheckCredentials,e._queue,r),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ze{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ze(dt.fromBase64String(t))}catch(n){throw new _(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ze(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class fi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class di{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=/^__.*__$/;class ul{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new we(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function ll(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class pi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new pi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.fa(t),i}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Ls(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(ll(this.ca)&&vm.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class wm{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ai(t)}ya(t,n,s,i=!1){return new pi({ca:t,methodName:n,ga:s,path:ut.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Em(e){const t=e._freezeSettings(),n=ai(e._databaseId);return new wm(e._databaseId,!!t.ignoreUndefinedProperties,n)}class gi extends di{_toFieldTransform(t){if(t.ca!==2)throw t.ca===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gi}}function _m(e,t,n){return new pi({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Tm extends di{constructor(t,n){super(t),this.pa=n}_toFieldTransform(t){const n=_m(this,t,!0),s=this.pa.map(r=>Jn(r,n)),i=new Be(s);return new Ep(t.path,i)}isEqual(t){return this===t}}function Sm(e,t,n,s){const i=e.ya(1,t,n);fl("Data must be an object, but it was:",i,s);const r=[],o=vt.empty();ve(s,(c,u)=>{const l=lo(t,c,n);u=Pt(u);const h=i.da(l);if(u instanceof gi)r.push(l);else{const f=Jn(u,h);f!=null&&(r.push(l),o.set(l,f))}});const a=new It(r);return new ul(o,a,i.fieldTransforms)}function Im(e,t,n,s,i,r){const o=e.ya(1,t,n),a=[Ta(t,s,n)],c=[i];if(r.length%2!=0)throw new _(m.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Ta(t,r[f])),c.push(r[f+1]);const u=[],l=vt.empty();for(let f=a.length-1;f>=0;--f)if(!Am(u,a[f])){const d=a[f];let p=c[f];p=Pt(p);const g=o.da(d);if(p instanceof gi)u.push(d);else{const v=Jn(p,g);v!=null&&(u.push(d),l.set(d,v))}}const h=new It(u);return new ul(l,h,o.fieldTransforms)}function Jn(e,t){if(hl(e=Pt(e)))return fl("Unsupported field value:",t,e),Cm(e,t);if(e instanceof di)return function(n,s){if(!ll(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Jn(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=Pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=J.fromDate(n);return{timestampValue:Ms(s.serializer,i)}}if(n instanceof J){const i=new J(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ms(s.serializer,i)}}if(n instanceof uo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ze)return{bytesValue:Ru(s.serializer,n._byteString)};if(n instanceof mt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ao(n)}`)}(e,t)}function Cm(e,t){const n={};return ou(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(e,(s,i)=>{const r=Jn(i,t.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function hl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof J||e instanceof uo||e instanceof ze||e instanceof mt||e instanceof di)}function fl(e,t,n){if(!hl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ao(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function Ta(e,t,n){if((t=Pt(t))instanceof fi)return t._internalPath;if(typeof t=="string")return lo(e,t);throw Ls("Field path arguments must be of type string or ",e,!1,void 0,n)}const bm=new RegExp("[~\\*/\\[\\]]");function lo(e,t,n){if(t.search(bm)>=0)throw Ls(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new fi(...t.split("."))._internalPath}catch{throw Ls(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ls(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new _(m.INVALID_ARGUMENT,a+e+c)}function Am(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class dl{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(pl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dm extends dl{data(){return super.data()}}function pl(e,t){return typeof t=="string"?lo(e,t):t instanceof fi?t._internalPath:t._delegate._internalPath}/**
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
 */function km(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new _(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nm{convertValue(t,n="none"){switch(de(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw C()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return ve(t,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new uo(Q(t.latitude),Q(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=qr(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kn(t));default:return null}}convertTimestamp(t){const n=Xt(t);return new J(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=B.fromString(t);U($u(s));const i=new Nn(s.get(1),s.get(3)),r=new T(s.popFirst(5));return i.isEqual(n)||Ft(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class an{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gl extends dl{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(pl("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ps extends gl{data(t={}){return super.data(t)}}class xm{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new an(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new ps(this._firestore,this._userDataWriter,s.key,s,new an(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ps(s._firestore,s._userDataWriter,o.doc.key,o.doc,new an(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ps(s._firestore,s._userDataWriter,o.doc.key,o.doc,new an(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Rm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}/**
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
 */function Mm(e){e=Kt(e,mt);const t=Kt(e.firestore,Mn);return hm(co(t),e._key).then(n=>yl(t,e,n))}class ml extends Nm{constructor(t){super(),this.firestore=t}convertBytes(t){return new ze(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function Om(e,t,n,...s){e=Kt(e,mt);const i=Kt(e.firestore,Mn),r=Em(i);let o;return o=typeof(t=Pt(t))=="string"||t instanceof fi?Im(r,"updateDoc",e._key,t,n,s):Sm(r,"updateDoc",e._key,t),Pm(i,[o.toMutation(e._key,Lt.exists(!0))])}function Lm(e,...t){var n,s,i;e=Pt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||_a(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(_a(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(e instanceof mt)u=Kt(e.firestore,Mn),l=ti(e._key.path),c={next:h=>{t[o]&&t[o](yl(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Kt(e,hi);u=Kt(h.firestore,Mn),l=h._query;const f=new ml(u);c={next:d=>{t[o]&&t[o](new xm(u,f,h,d))},error:t[o+1],complete:t[o+2]},km(e._query)}return function(h,f,d,p){const g=new il(p),v=new Xu(f,g,d);return h.asyncQueue.enqueueAndForget(async()=>Wu(await fr(h),v)),()=>{g.Dc(),h.asyncQueue.enqueueAndForget(async()=>Yu(await fr(h),v))}}(co(u),l,a,c)}function Pm(e,t){return function(n,s){const i=new zt;return n.asyncQueue.enqueueAndForget(async()=>Xg(await lm(n),s,i)),i.promise}(co(e),t)}function yl(e,t,n){const s=n.docs.get(t._key),i=new ml(e);return new gl(e,i,t._key,s,new an(n.hasPendingWrites,n.fromCache),t.converter)}function $m(...e){return new Tm("arrayUnion",e)}(function(e,t=!0){(function(n){Ye=n})(ff),_s(new vn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Mn(new Od(n.getProvider("auth-internal")),new Fd(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ne(Bo,"3.12.1",e),Ne(Bo,"3.12.1","esm2017")})();const Fm={apiKey:"AIzaSyCDqpSA_-xEwVkbj-EBwPHNYiSvJO6ULOY",authDomain:"wedding-photos-challenge.firebaseapp.com",projectId:"wedding-photos-challenge",storageBucket:"wedding-photos-challenge.appspot.com",messagingSenderId:"1095306889273",appId:"1:1095306889273:web:2f1ac74abc6fb029f1a5e8",measurementId:"G-3V15Z3EV3R"},Vm=Za(Fm),Sa=ym(Vm);function ho(e){const t=e-1;return t*t*t+1}function Ia(e){return--e*e*e*e*e+1}function Um(e,{delay:t=0,duration:n=400,easing:s=pe}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Bm(e,{delay:t=0,duration:n=400,easing:s=ho,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o),[h,f]=go(i),[d,p]=go(r);return{delay:t,duration:n,easing:s,css:(g,v)=>`
			transform: ${u} translate(${(1-g)*h}${f}, ${(1-g)*d}${p});
			opacity: ${c-l*v}`}}function Ca(e,{delay:t=0,duration:n=400,easing:s=ho,start:i=0,opacity:r=0}={}){const o=getComputedStyle(e),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-i,l=a*(1-r);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} scale(${1-u*f});
			opacity: ${a-l*f}
		`}}function jm(e,{from:t,to:n},s={}){const i=getComputedStyle(e),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=ho}=s;return{delay:l,duration:ge(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const g=p*c,v=p*u,S=d+p*t.width/n.width,R=d+p*t.height/n.height;return`transform: ${r} translate(${g}px, ${v}px) scale(${S}, ${R});`}}}const Se=[];function fo(e,t=H){let n;const s=new Set;function i(a){if(me(e,a)&&(e=a,n)){const c=!Se.length;for(const u of s)u[1](),Se.push(u,e);if(c){for(let u=0;u<Se.length;u+=2)Se[u][0](Se[u+1]);Se.length=0}}}function r(a){i(a(e))}function o(a,c=H){const u=[a,c];return s.add(u),s.size===1&&(n=t(i)||H),a(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const qm={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},zm=()=>{const{subscribe:e,update:t}=fo([]);let n=0;const s={},i=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...i(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...qm,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(i(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=i(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},Le=zm();function ba(e){return Object.prototype.toString.call(e)==="[object Date]"}function dr(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((i,r)=>dr(e[r],i));return i=>s.map(r=>r(i))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ba(e)&&ba(t)){e=e.getTime(),t=t.getTime();const r=t-e;return o=>new Date(e+o*r)}const s=Object.keys(t),i={};return s.forEach(r=>{i[r]=dr(e[r],t[r])}),r=>{const o={};return s.forEach(a=>{o[a]=i[a](r)}),o}}if(n==="number"){const s=t-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${n} values`)}function Km(e,t={}){const n=fo(e);let s,i=e;function r(o,a){if(e==null)return n.set(e=o),Promise.resolve();i=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=pe,interpolate:d=dr}=Mi(Mi({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=i),Promise.resolve();const p=On()+l;let g;return s=Ln(v=>{if(v<p)return!0;u||(g=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const S=v-p;return S>h?(n.set(e=o),!1):(n.set(e=g(f(S/h))),!0)}),s.promise}return{set:r,update:(o,a)=>r(o(i,e),a),subscribe:n.subscribe}}function Hm(e){let t,n=e[0].msg+"",s;return{c(){t=new kl(!1),s=Ps(),t.a=s},m(i,r){t.m(n,i,r),W(i,s,r)},p(i,r){r&1&&n!==(n=i[0].msg+"")&&t.p(n)},i:H,o:H,d(i){i&&q(s),i&&t.d()}}}function Gm(e){let t,n,s;const i=[e[2]];var r=e[0].component.src;function o(a){let c={};for(let u=0;u<i.length;u+=1)c=Mi(c,i[u]);return{props:c}}return r&&(t=yo(r,o())),{c(){t&&ue(t.$$.fragment),n=Ps()},m(a,c){t&&Qt(t,a,c),W(a,n,c),s=!0},p(a,c){const u=c&4?Gl(i,[Ql(a[2])]):{};if(c&1&&r!==(r=a[0].component.src)){if(t){Pn();const l=t;pt(l.$$.fragment,1,0,()=>{Wt(l,1)}),$n()}r?(t=yo(r,o()),ue(t.$$.fragment),tt(t.$$.fragment,1),Qt(t,n.parentNode,n)):t=null}else r&&t.$set(u)},i(a){s||(t&&tt(t.$$.fragment,a),s=!0)},o(a){t&&pt(t.$$.fragment,a),s=!1},d(a){a&&q(n),t&&Wt(t,a)}}}function Aa(e){let t,n,s;return{c(){t=$("div"),N(t,"class","_toastBtn pe svelte-l65oht"),N(t,"role","button"),N(t,"tabindex","0")},m(i,r){W(i,t,r),n||(s=[Ct(t,"click",e[4]),Ct(t,"keydown",e[8])],n=!0)},p:H,d(i){i&&q(t),n=!1,Et(s)}}}function Qm(e){let t,n,s,i,r,o,a,c,u,l;const h=[Gm,Hm],f=[];function d(g,v){return g[0].component?0:1}s=d(e),i=f[s]=h[s](e);let p=e[0].dismissable&&Aa(e);return{c(){t=$("div"),n=$("div"),i.c(),r=X(),p&&p.c(),o=X(),a=$("progress"),N(n,"role","status"),N(n,"class","_toastMsg svelte-l65oht"),ts(n,"pe",e[0].component),N(a,"class","_toastBar svelte-l65oht"),a.value=e[1],N(t,"class","_toastItem svelte-l65oht"),ts(t,"pe",e[0].pausable)},m(g,v){W(g,t,v),k(t,n),f[s].m(n,null),k(t,r),p&&p.m(t,null),k(t,o),k(t,a),c=!0,u||(l=[Ct(t,"mouseenter",e[9]),Ct(t,"mouseleave",e[6])],u=!0)},p(g,[v]){let S=s;s=d(g),s===S?f[s].p(g,v):(Pn(),pt(f[S],1,1,()=>{f[S]=null}),$n(),i=f[s],i?i.p(g,v):(i=f[s]=h[s](g),i.c()),tt(i,1),i.m(n,null)),(!c||v&1)&&ts(n,"pe",g[0].component),g[0].dismissable?p?p.p(g,v):(p=Aa(g),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||v&2)&&(a.value=g[1]),(!c||v&1)&&ts(t,"pe",g[0].pausable)},i(g){c||(tt(i),c=!0)},o(g){pt(i),c=!1},d(g){g&&q(t),f[s].d(),p&&p.d(),u=!1,Et(l)}}}function Wm(e,t,n){let s,{item:i}=t;const r=Km(i.initial,{duration:i.duration,easing:pe});Fa(e,r,I=>n(1,s=I));const o=()=>Le.pop(i.id),a=()=>{(s===1||s===0)&&o()};let c=i.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(r.set(s,{duration:0}),l=!0)},f=()=>{if(l){const I=i.duration,O=I-I*((s-u)/(c-u));r.set(c,{duration:O}).then(a),l=!1}};let d={};const p=(I,O="undefined")=>typeof I===O;let g;Ll((I=document)=>{if(p(I.hidden))return;const O=()=>I.hidden?h():f(),_t="visibilitychange";I.addEventListener(_t,O),g=()=>I.removeEventListener(_t,O),O()}),Pl(()=>{p(i.onpop,"function")&&i.onpop(i.id),g&&g()});const S=I=>{I instanceof KeyboardEvent&&["Enter"," "].includes(I.key)&&o()},R=()=>{i.pausable&&h()};return e.$$set=I=>{"item"in I&&n(0,i=I.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(i.progress)||n(0,i.next=i.progress,i)),e.$$.dirty&131&&c!==i.next&&(n(7,c=i.next),u=s,l=!1,r.set(c).then(a)),e.$$.dirty&1&&i.component){const{props:I={},sendIdTo:O}=i.component;n(2,d={...I,...O&&{[O]:i.id}})}},[i,s,d,r,o,h,f,c,S,R]}class Ym extends He{constructor(t){super(),Ke(this,t,Wm,Qm,me,{item:0})}}function Da(e,t,n){const s=e.slice();return s[5]=t[n],s}function ka(e,t){let n,s,i,r,o,a,c,u,l=H,h;return s=new Ym({props:{item:t[5]}}),{key:e,first:null,c(){n=$("li"),ue(s.$$.fragment),i=X(),N(n,"class",r=gs(t[5].classes.join(" "))+" svelte-yh90az"),N(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){W(f,n,d),Qt(s,n,null),k(n,i),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&r!==(r=gs(t[5].classes.join(" "))+" svelte-yh90az"))&&N(n,"class",r),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&N(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){Ol(n),l(),ja(n,u)},a(){l(),l=Ml(n,u,jm,{duration:200})},i(f){h||(tt(s.$$.fragment,f),Gt(()=>{!h||(c&&c.end(1),a=jl(n,Bm,t[5].intro),a.start())}),h=!0)},o(f){pt(s.$$.fragment,f),a&&a.invalidate(),c=ql(n,Um,{}),h=!1},d(f){f&&q(n),Wt(s),f&&c&&c.end()}}}function Xm(e){let t,n=[],s=new Map,i,r=e[0];const o=a=>a[5].id;for(let a=0;a<r.length;a+=1){let c=Da(e,r,a),u=o(c);s.set(u,n[a]=ka(u,c))}return{c(){t=$("ul");for(let a=0;a<n.length;a+=1)n[a].c();N(t,"class","_toastContainer svelte-yh90az")},m(a,c){W(a,t,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);i=!0},p(a,[c]){if(c&3){r=a[0],Pn();for(let u=0;u<n.length;u+=1)n[u].r();n=Hl(n,c,o,1,a,r,s,t,Kl,ka,null,Da);for(let u=0;u<n.length;u+=1)n[u].a();$n()}},i(a){if(!i){for(let c=0;c<r.length;c+=1)tt(n[c]);i=!0}},o(a){for(let c=0;c<n.length;c+=1)pt(n[c]);i=!1},d(a){a&&q(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function Jm(e,t,n){let s;Fa(e,Le,c=>n(4,s=c));let{options:i={}}=t,{target:r="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,i=c.options),"target"in c&&n(3,r=c.target)},e.$$.update=()=>{e.$$.dirty&12&&Le._init(r,i),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===r))},[o,a,i,r,s]}class Zm extends He{constructor(t){super(),Ke(this,t,Jm,Xm,me,{options:2,target:3})}}function ty(e){const t=n=>{e&&!e.contains(n.target)&&!n.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function Na(e,t,n){const s=e.slice();return s[7]=t[n],s}function xa(e){let t,n,s,i,r,o,a,c,u,l=e[2],h=[];for(let f=0;f<l.length;f+=1)h[f]=Ra(Na(e,l,f));return{c(){t=$("table"),n=$("caption"),n.textContent="Leaderboard",s=X(),i=$("tr"),i.innerHTML=`<th class="svelte-i10xo1">Name</th> 
            <th class="svelte-i10xo1">Challenges Completed</th>`,r=X();for(let f=0;f<h.length;f+=1)h[f].c();N(n,"class","svelte-i10xo1"),N(i,"class","svelte-i10xo1"),N(t,"class","leaderboard svelte-i10xo1")},m(f,d){W(f,t,d),k(t,n),k(t,s),k(t,i),k(t,r);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(t,null);a=!0,c||(u=[Tl(ty.call(null,t)),Ct(t,"click_outside",e[3])],c=!0)},p(f,d){if(e=f,d&4){l=e[2];let p;for(p=0;p<l.length;p+=1){const g=Na(e,l,p);h[p]?h[p].p(g,d):(h[p]=Ra(g),h[p].c(),h[p].m(t,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=l.length}},i(f){a||(Gt(()=>{!a||(o||(o=vo(t,Ca,{duration:250,opacity:.5,easing:Ia},!0)),o.run(1))}),a=!0)},o(f){o||(o=vo(t,Ca,{duration:250,opacity:.5,easing:Ia},!1)),o.run(0),a=!1},d(f){f&&q(t),Cl(h,f),f&&o&&o.end(),c=!1,Et(u)}}}function Ra(e){let t,n,s=e[7].name+"",i,r,o,a=e[7].challenges_completed+"",c,u;return{c(){t=$("tr"),n=$("td"),i=ce(s),r=X(),o=$("td"),c=ce(a),u=X(),N(n,"class","leaderboard-name svelte-i10xo1"),N(o,"class","svelte-i10xo1"),N(t,"class","svelte-i10xo1")},m(l,h){W(l,t,h),k(t,n),k(n,i),k(t,r),k(t,o),k(o,c),k(t,u)},p(l,h){h&4&&s!==(s=l[7].name+"")&&pn(i,s),h&4&&a!==(a=l[7].challenges_completed+"")&&pn(c,a)},d(l){l&&q(t)}}}function ey(e){let t,n,s,i,r,o,a=e[0]&&xa(e);return{c(){t=$("div"),t.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-i10xo1"/>',n=X(),a&&a.c(),s=Ps(),N(t,"class","icon svelte-i10xo1")},m(c,u){W(c,t,u),e[6](t),W(c,n,u),a&&a.m(c,u),W(c,s,u),i=!0,r||(o=Ct(t,"click",e[3]),r=!0)},p(c,[u]){c[0]?a?(a.p(c,u),u&1&&tt(a,1)):(a=xa(c),a.c(),tt(a,1),a.m(s.parentNode,s)):a&&(Pn(),pt(a,1,1,()=>{a=null}),$n())},i(c){i||(tt(a),i=!0)},o(c){pt(a),i=!1},d(c){c&&q(t),e[6](null),c&&q(n),a&&a.d(c),c&&q(s),r=!1,o()}}}function ny(e,t,n){let s,{challengeList:i=[]}=t,r={},o=!1,a;function c(){n(0,o=!o),o?n(1,a.style["pointer-events"]="none",a):n(1,a.style["pointer-events"]="all",a)}function u(l){vs[l?"unshift":"push"](()=>{a=l,n(1,a)})}return e.$$set=l=>{"challengeList"in l&&n(4,i=l.challengeList)},e.$$.update=()=>{e.$$.dirty&48&&(n(5,r={}),i.forEach(l=>{l.completed.forEach(h=>{r[h]?n(5,r[h]++,r):n(5,r[h]=1,r)})})),e.$$.dirty&32&&n(2,s=Object.keys(r).map(l=>({name:l,challenges_completed:r[l]})).sort((l,h)=>h.challenges_completed-l.challenges_completed))},[o,a,s,c,i,r,u]}class sy extends He{constructor(t){super(),Ke(this,t,ny,ey,me,{challengeList:4})}}function Ma(e){let t,n,s,i,r=e[0].name+"",o,a,c,u,l,h=(e[0].completed.length>0?e[0].completed.join(", "):"Not completed by any teams yet!")+"",f,d;return{c(){t=$("div"),n=$("h2"),n.textContent="Take a photo...",s=X(),i=$("h1"),o=ce(r),a=X(),c=$("h3"),c.textContent="Completed by:",u=X(),l=$("h2"),f=ce(h),N(i,"class","challenge svelte-1wsnha1"),N(l,"class",d=gs(e[0].completed.length>0?"completers":"")+" svelte-1wsnha1"),N(t,"class","challenge-block svelte-1wsnha1")},m(p,g){W(p,t,g),k(t,n),k(t,s),k(t,i),k(i,o),k(t,a),k(t,c),k(t,u),k(t,l),k(l,f)},p(p,g){g&1&&r!==(r=p[0].name+"")&&pn(o,r),g&1&&h!==(h=(p[0].completed.length>0?p[0].completed.join(", "):"Not completed by any teams yet!")+"")&&pn(f,h),g&1&&d!==(d=gs(p[0].completed.length>0?"completers":"")+" svelte-1wsnha1")&&N(l,"class",d)},d(p){p&&q(t)}}}function iy(e){let t,n,s,i,r,o,a,c,u,l,h;t=new sy({props:{challengeList:e[1]}});let f=e[0]&&e[0].name&&e[0].completed&&Ma(e);return{c(){ue(t.$$.fragment),n=X(),s=$("div"),i=$("div"),f&&f.c(),r=X(),o=$("button"),o.textContent="\u{1F503} New Challenge",a=X(),c=$("button"),c.textContent="\u2705 Complete Challenge",N(i,"class","heading svelte-1wsnha1"),N(s,"class","container svelte-1wsnha1")},m(d,p){Qt(t,d,p),W(d,n,p),W(d,s,p),k(s,i),f&&f.m(i,null),k(i,r),k(i,o),k(i,a),k(i,c),u=!0,l||(h=[Ct(o,"click",e[2]),Ct(c,"click",e[3])],l=!0)},p(d,[p]){const g={};p&2&&(g.challengeList=d[1]),t.$set(g),d[0]&&d[0].name&&d[0].completed?f?f.p(d,p):(f=Ma(d),f.c(),f.m(i,r)):f&&(f.d(1),f=null)},i(d){u||(tt(t.$$.fragment,d),u=!0)},o(d){pt(t.$$.fragment,d),u=!1},d(d){Wt(t,d),d&&q(n),d&&q(s),f&&f.d(),l=!1,Et(h)}}}let Oa="groomsmaid";function ry(e,t,n){let{name:s}=t,i={id:"",name:"Loading...",completed:[]},r=[],o=[],a=6;const c=pm(Sa,Oa);Lm(c,h=>{n(1,r=[]),h.forEach(f=>{r.push({id:f.id,name:f.data().name,completed:f.data().completed}),i&&i.id&&i.id==f.id&&n(0,i={id:f.id,name:f.data().name,completed:f.data().completed})}),(!i||i.name=="Loading...")&&u(),a>=r.length&&(a=r.length-1)});function u(){let h=i;for(;i.id==h.id||o.includes(i.id);)n(0,i=r[Math.floor(Math.random()*r.length)]);o.push(i.id),o.length>a&&o.shift()}async function l(){if(i.completed.includes(s)){Le.push("\u{1F6A7} Challenge already completed!");return}const h=gm(Sa,Oa,i.id);(await Mm(h)).exists()?await Om(h,{completed:$m(s)}).then(()=>{Le.push("\u2705 Challenge completed!")}):Le.push("\u{1F6A8} Unable to complete challenge, try again or refresh!")}return e.$$set=h=>{"name"in h&&n(4,s=h.name)},[i,r,u,l,s]}class oy extends He{constructor(t){super(),Ke(this,t,ry,iy,me,{name:4})}}const vl=(e,t)=>{const n=c=>JSON.stringify(c,null,2),s=JSON.parse;localStorage.getItem(e)===null&&localStorage.setItem(e,n(t));const i=s(localStorage.getItem(e)),{subscribe:r,set:o,update:a}=fo(i);return{subscribe:r,set:c=>(localStorage.setItem(e,n(c)),o(c)),update:a}},wl="",La=vl("pc-name",wl);vl("pc-tutorial",wl);function ay(e){let t,n,s,i,r,o,a,c;return{c(){t=$("div"),n=$("label"),n.textContent="What's your team name?",s=X(),i=$("input"),r=X(),o=$("button"),o.textContent="Let's go!",N(n,"for","name-input"),N(n,"class","svelte-e2ktyq"),N(i,"id","name-input"),N(i,"type","text"),N(i,"class","svelte-e2ktyq"),N(o,"class","svelte-e2ktyq"),N(t,"id","name-container"),N(t,"class","svelte-e2ktyq")},m(u,l){W(u,t,l),k(t,n),k(t,s),k(t,i),mo(i,e[1]),k(t,r),k(t,o),a||(c=[Ct(i,"input",e[4]),Ct(o,"click",e[2])],a=!0)},p(u,l){l&2&&i.value!==u[1]&&mo(i,u[1])},d(u){u&&q(t),a=!1,Et(c)}}}function cy(e){let t,n,s,i,r,o;return{c(){t=$("p"),n=ce(e[0]),s=X(),i=$("span"),i.textContent="Change",N(i,"class","svelte-e2ktyq"),N(t,"id","logged-in"),N(t,"class","svelte-e2ktyq")},m(a,c){W(a,t,c),k(t,n),k(t,s),k(t,i),r||(o=Ct(i,"click",e[3]),r=!0)},p(a,c){c&1&&pn(n,a[0])},d(a){a&&q(t),r=!1,o()}}}function uy(e){let t;function n(r,o){return r[0]!=""?cy:ay}let s=n(e),i=s(e);return{c(){i.c(),t=Ps()},m(r,o){i.m(r,o),W(r,t,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(t.parentNode,t)))},i:H,o:H,d(r){i.d(r),r&&q(t)}}}function ly(e,t,n){let{nameVal:s}=t;La.subscribe(c=>{n(0,s=c)});let i="Team ";function r(){n(1,i=i.toLowerCase()),La.set(i)}function o(){n(1,i=""),r()}function a(){i=this.value,n(1,i)}return e.$$set=c=>{"nameVal"in c&&n(0,s=c.nameVal)},[s,i,r,o,a]}class hy extends He{constructor(t){super(),Ke(this,t,ly,uy,me,{nameVal:0})}}function Pa(e){let t,n;return t=new oy({props:{name:e[0]}}),{c(){ue(t.$$.fragment)},m(s,i){Qt(t,s,i),n=!0},p(s,i){const r={};i&1&&(r.name=s[0]),t.$set(r)},i(s){n||(tt(t.$$.fragment,s),n=!0)},o(s){pt(t.$$.fragment,s),n=!1},d(s){Wt(t,s)}}}function fy(e){let t,n,s,i,r,o;function a(l){e[1](l)}let c={};e[0]!==void 0&&(c.nameVal=e[0]),t=new hy({props:c}),vs.push(()=>Wl(t,"nameVal",a));let u=e[0]!=""&&Pa(e);return r=new Zm({}),{c(){ue(t.$$.fragment),s=X(),u&&u.c(),i=X(),ue(r.$$.fragment)},m(l,h){Qt(t,l,h),W(l,s,h),u&&u.m(l,h),W(l,i,h),Qt(r,l,h),o=!0},p(l,[h]){const f={};!n&&h&1&&(n=!0,f.nameVal=l[0],Vl(()=>n=!1)),t.$set(f),l[0]!=""?u?(u.p(l,h),h&1&&tt(u,1)):(u=Pa(l),u.c(),tt(u,1),u.m(i.parentNode,i)):u&&(Pn(),pt(u,1,1,()=>{u=null}),$n())},i(l){o||(tt(t.$$.fragment,l),tt(u),tt(r.$$.fragment,l),o=!0)},o(l){pt(t.$$.fragment,l),pt(u),pt(r.$$.fragment,l),o=!1},d(l){Wt(t,l),l&&q(s),u&&u.d(l),l&&q(i),Wt(r,l)}}}function dy(e,t,n){let s="";function i(r){s=r,n(0,s)}return[s,i]}class py extends He{constructor(t){super(),Ke(this,t,dy,fy,me,{})}}new py({target:document.getElementById("app")});
