(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function q(){}const ve=e=>e;function Ri(e,t){for(const n in t)e[n]=t[n];return e}function $a(e){return e()}function fo(){return Object.create(null)}function Et(e){e.forEach($a)}function we(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function El(e){return Object.keys(e).length===0}function _l(e,...t){if(e==null)return q;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Fa(e,t,n){e.$$.on_destroy.push(_l(t,n))}function po(e){return e==null?"":e}function Tl(e){return e&&we(e.destroy)?e.destroy:q}function go(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Va=typeof window<"u";let Ln=Va?()=>window.performance.now():()=>Date.now(),dr=Va?e=>requestAnimationFrame(e):q;const Me=new Set;function Ua(e){Me.forEach(t=>{t.c(e)||(Me.delete(t),t.f())}),Me.size!==0&&dr(Ua)}function Pn(e){let t;return Me.size===0&&dr(Ua),{promise:new Promise(n=>{Me.add(t={c:e,f:n})}),abort(){Me.delete(t)}}}function D(e,t){e.appendChild(t)}function Ba(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Sl(e){const t=O("style");return Il(Ba(e),t),t.sheet}function Il(e,t){return D(e.head||e,t),t.sheet}function H(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function Cl(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function bl(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function xt(e){return document.createTextNode(e)}function Y(){return xt(" ")}function Ls(){return xt("")}function Ct(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Al(e){return Array.from(e.childNodes)}function de(e,t){t=""+t,e.data!==t&&(e.data=t)}function mo(e,t){e.value=t==null?"":t}function zt(e,t,n){e.classList[n?"add":"remove"](t)}function Dl(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,s,t),i}class kl{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=bl(n.nodeName):this.e=O(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)H(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(j)}}function yo(e,t){return new e(t)}const gs=new Map;let ms=0;function Nl(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function xl(e,t){const n={stylesheet:Sl(t),rules:{}};return gs.set(e,n),n}function mn(e,t,n,s,i,r,o,a=0){const c=16.666/s;let u=`{
`;for(let g=0;g<=1;g+=c){const E=t+(n-t)*r(g);u+=g*100+`%{${o(E,1-E)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Nl(l)}_${a}`,f=Ba(e),{stylesheet:d,rules:p}=gs.get(f)||xl(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${s}ms linear ${i}ms 1 both`,ms+=1,h}function yn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(e.style.animation=s.join(", "),ms-=i,ms||Rl())}function Rl(){dr(()=>{ms||(gs.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&j(t)}),gs.clear())})}function Ml(e,t,n,s){if(!t)return q;const i=e.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return q;const{delay:r=0,duration:o=300,easing:a=ve,start:c=Ln()+r,end:u=c+o,tick:l=q,css:h}=n(e,{from:t,to:i},s);let f=!0,d=!1,p;function m(){h&&(p=mn(e,0,1,o,r,a,h)),r||(d=!0)}function g(){h&&yn(e,p),f=!1}return Pn(E=>{if(!d&&E>=c&&(d=!0),d&&E>=u&&(l(1,0),g()),!f)return!1;if(d){const x=E-c,I=0+1*a(x/o);l(I,1-I)}return!0}),m(),l(0,1),g}function Ol(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,i=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,ja(e,i)}}function ja(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),i=s.transform==="none"?"":s.transform;e.style.transform=`${i} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let vn;function ln(e){vn=e}function qa(){if(!vn)throw new Error("Function called outside component initialization");return vn}function Ll(e){qa().$$.on_mount.push(e)}function Pl(e){qa().$$.on_destroy.push(e)}const ke=[],ys=[];let Oe=[];const Mi=[],$l=Promise.resolve();let Oi=!1;function Fl(){Oi||(Oi=!0,$l.then(za))}function Xt(e){Oe.push(e)}function Vl(e){Mi.push(e)}const gi=new Set;let be=0;function za(){if(be!==0)return;const e=vn;do{try{for(;be<ke.length;){const t=ke[be];be++,ln(t),Ul(t.$$)}}catch(t){throw ke.length=0,be=0,t}for(ln(null),ke.length=0,be=0;ys.length;)ys.pop()();for(let t=0;t<Oe.length;t+=1){const n=Oe[t];gi.has(n)||(gi.add(n),n())}Oe.length=0}while(ke.length);for(;Mi.length;)Mi.pop()();Oi=!1,gi.clear(),ln(e)}function Ul(e){if(e.fragment!==null){e.update(),Et(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Xt)}}function Bl(e){const t=[],n=[];Oe.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),Oe=t}let en;function pr(){return en||(en=Promise.resolve(),en.then(()=>{en=null})),en}function he(e,t,n){e.dispatchEvent(Dl(`${t?"intro":"outro"}${n}`))}const ls=new Set;let Dt;function $n(){Dt={r:0,c:[],p:Dt}}function Fn(){Dt.r||Et(Dt.c),Dt=Dt.p}function X(e,t){e&&e.i&&(ls.delete(e),e.i(t))}function lt(e,t,n,s){if(e&&e.o){if(ls.has(e))return;ls.add(e),Dt.c.push(()=>{ls.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const gr={duration:0};function jl(e,t,n){const s={direction:"in"};let i=t(e,n,s),r=!1,o,a,c=0;function u(){o&&yn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=ve,tick:m=q,css:g}=i||gr;g&&(o=mn(e,0,1,d,f,p,g,c++)),m(0,1);const E=Ln()+f,x=E+d;a&&a.abort(),r=!0,Xt(()=>he(e,!0,"start")),a=Pn(I=>{if(r){if(I>=x)return m(1,0),he(e,!0,"end"),u(),r=!1;if(I>=E){const L=p((I-E)/d);m(L,1-L)}}return r})}let h=!1;return{start(){h||(h=!0,yn(e),we(i)?(i=i(s),pr().then(l)):l())},invalidate(){h=!1},end(){r&&(u(),r=!1)}}}function ql(e,t,n){const s={direction:"out"};let i=t(e,n,s),r=!0,o;const a=Dt;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=ve,tick:f=q,css:d}=i||gr;d&&(o=mn(e,1,0,l,u,h,d));const p=Ln()+u,m=p+l;Xt(()=>he(e,!1,"start")),Pn(g=>{if(r){if(g>=m)return f(0,1),he(e,!1,"end"),--a.r||Et(a.c),!1;if(g>=p){const E=h((g-p)/l);f(1-E,E)}}return r})}return we(i)?pr().then(()=>{i=i(s),c()}):c(),{end(u){u&&i.tick&&i.tick(1,0),r&&(o&&yn(e,o),r=!1)}}}function vo(e,t,n,s){const i={direction:"both"};let r=t(e,n,i),o=s?0:1,a=null,c=null,u=null;function l(){u&&yn(e,u)}function h(d,p){const m=d.b-o;return p*=Math.abs(m),{a:o,b:d.b,d:m,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:m=300,easing:g=ve,tick:E=q,css:x}=r||gr,I={start:Ln()+p,b:d};d||(I.group=Dt,Dt.r+=1),a||c?c=I:(x&&(l(),u=mn(e,o,d,m,p,g,x)),d&&E(0,1),a=h(I,m),Xt(()=>he(e,d,"start")),Pn(L=>{if(c&&L>c.start&&(a=h(c,m),c=null,he(e,a.b,"start"),x&&(l(),u=mn(e,o,a.b,a.duration,0,g,r.css))),a){if(L>=a.end)E(o=a.b,1-o),he(e,a.b,"end"),c||(a.b?l():--a.group.r||Et(a.group.c)),a=null;else if(L>=a.start){const _t=L-a.start;o=a.a+a.d*g(_t/a.duration),E(o,1-o)}}return!!(a||c)}))}return{run(d){we(r)?pr().then(()=>{r=r(i),f(d)}):f(d)},end(){l(),a=c=null}}}function zl(e,t){lt(e,1,1,()=>{t.delete(e.key)})}function Hl(e,t){e.f(),zl(e,t)}function Kl(e,t,n,s,i,r,o,a,c,u,l,h){let f=e.length,d=r.length,p=f;const m={};for(;p--;)m[e[p].key]=p;const g=[],E=new Map,x=new Map,I=[];for(p=d;p--;){const G=h(i,r,p),Tt=n(G);let yt=o.get(Tt);yt?s&&I.push(()=>yt.p(G,t)):(yt=u(Tt,G),yt.c()),E.set(Tt,g[p]=yt),Tt in m&&x.set(Tt,Math.abs(p-m[Tt]))}const L=new Set,_t=new Set;function re(G){X(G,1),G.m(a,l),o.set(G.key,G),l=G.first,d--}for(;f&&d;){const G=g[d-1],Tt=e[f-1],yt=G.key,ts=Tt.key;G===Tt?(l=G.first,f--,d--):E.has(ts)?!o.has(yt)||L.has(yt)?re(G):_t.has(ts)?f--:x.get(yt)>x.get(ts)?(_t.add(yt),re(G)):(L.add(ts),f--):(c(Tt,o),f--)}for(;f--;){const G=e[f];E.has(G.key)||c(G,o)}for(;d;)re(g[d-1]);return Et(I),g}function Gl(e,t){const n={},s={},i={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Ql(e){return typeof e=="object"&&e!==null?e:{}}function Wl(e,t,n){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function Jt(e){e&&e.c()}function $t(e,t,n,s){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),s||Xt(()=>{const o=e.$$.on_mount.map($a).filter(we);e.$$.on_destroy?e.$$.on_destroy.push(...o):Et(o),e.$$.on_mount=[]}),r.forEach(Xt)}function Ft(e,t){const n=e.$$;n.fragment!==null&&(Bl(n.after_update),Et(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Yl(e,t){e.$$.dirty[0]===-1&&(ke.push(e),Fl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,s,i,r,o,a=[-1]){const c=vn;ln(e);const u=e.$$={fragment:null,ctx:[],props:r,update:q,not_equal:i,bound:fo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:fo(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&i(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&Yl(e,h)),f}):[],u.update(),l=!0,Et(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=Al(t.target);u.fragment&&u.fragment.l(h),h.forEach(j)}else u.fragment&&u.fragment.c();t.intro&&X(e.$$.fragment),$t(e,t.target,t.anchor,t.customElement),za()}ln(c)}class _e{$destroy(){Ft(this,1),this.$destroy=q}$on(t,n){if(!we(n))return q;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!El(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ha=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Xl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ha(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new Jl;const f=r<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Jl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zl=function(e){const t=Ha(e);return Ka.encodeByteArray(t,!0)},vs=function(e){return Zl(e).replace(/\./g,"")},th=function(e){try{return Ka.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const hh="FirebaseError";class We extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=hh,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?fh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new We(i,a,s)}}function fh(e,t){return e.replace(dh,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const dh=/\{\$([^}]+)}/g;function Li(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(wo(r)&&wo(o)){if(!Li(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function wo(e){return e!==null&&typeof e=="object"}/**
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
 */function Vt(e){return e&&e._delegate?e._delegate:e}class wn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class ph{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ah;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mh(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gh(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gh(e){return e===oe?void 0:e}function mh(e){return e.instantiationMode==="EAGER"}/**
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
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const vh={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},wh=$.INFO,Eh={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},_h=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Eh[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ya{constructor(t){this.name=t,this._logLevel=wh,this._logHandler=_h,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Th=(e,t)=>t.some(n=>e instanceof n);let Eo,_o;function Sh(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ih(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,Pi=new WeakMap,Ja=new WeakMap,mi=new WeakMap,mr=new WeakMap;function Ch(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Kt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Xa.set(n,e)}).catch(()=>{}),mr.set(t,e),t}function bh(e){if(Pi.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Pi.set(e,t)}let $i={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Pi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ja.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ah(e){$i=e($i)}function Dh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(yi(this),t,...n);return Ja.set(s,t.sort?t.sort():[t]),Kt(s)}:Ih().includes(e)?function(...t){return e.apply(yi(this),t),Kt(Xa.get(this))}:function(...t){return Kt(e.apply(yi(this),t))}}function kh(e){return typeof e=="function"?Dh(e):(e instanceof IDBTransaction&&bh(e),Th(e,Sh())?new Proxy(e,$i):e)}function Kt(e){if(e instanceof IDBRequest)return Ch(e);if(mi.has(e))return mi.get(e);const t=kh(e);return t!==e&&(mi.set(e,t),mr.set(t,e)),t}const yi=e=>mr.get(e);function Nh(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Kt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Kt(o.result),c.oldVersion,c.newVersion,Kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xh=["get","getKey","getAll","getAllKeys","count"],Rh=["put","add","delete","clear"],vi=new Map;function To(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(vi.get(t))return vi.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Rh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xh.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return vi.set(t,r),r}Ah(e=>({...e,get:(t,n,s)=>To(t,n)||e.get(t,n,s),has:(t,n)=>!!To(t,n)||e.has(t,n)}));/**
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
 */class Mh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Oh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Oh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fi="@firebase/app",So="0.9.13";/**
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
 */const pe=new Ya("@firebase/app"),Lh="@firebase/app-compat",Ph="@firebase/analytics-compat",$h="@firebase/analytics",Fh="@firebase/app-check-compat",Vh="@firebase/app-check",Uh="@firebase/auth",Bh="@firebase/auth-compat",jh="@firebase/database",qh="@firebase/database-compat",zh="@firebase/functions",Hh="@firebase/functions-compat",Kh="@firebase/installations",Gh="@firebase/installations-compat",Qh="@firebase/messaging",Wh="@firebase/messaging-compat",Yh="@firebase/performance",Xh="@firebase/performance-compat",Jh="@firebase/remote-config",Zh="@firebase/remote-config-compat",tf="@firebase/storage",ef="@firebase/storage-compat",nf="@firebase/firestore",sf="@firebase/firestore-compat",rf="firebase",of="9.23.0";/**
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
 */const Vi="[DEFAULT]",af={[Fi]:"fire-core",[Lh]:"fire-core-compat",[$h]:"fire-analytics",[Ph]:"fire-analytics-compat",[Vh]:"fire-app-check",[Fh]:"fire-app-check-compat",[Uh]:"fire-auth",[Bh]:"fire-auth-compat",[jh]:"fire-rtdb",[qh]:"fire-rtdb-compat",[zh]:"fire-fn",[Hh]:"fire-fn-compat",[Kh]:"fire-iid",[Gh]:"fire-iid-compat",[Qh]:"fire-fcm",[Wh]:"fire-fcm-compat",[Yh]:"fire-perf",[Xh]:"fire-perf-compat",[Jh]:"fire-rc",[Zh]:"fire-rc-compat",[tf]:"fire-gcs",[ef]:"fire-gcs-compat",[nf]:"fire-fst",[sf]:"fire-fst-compat","fire-js":"fire-js",[rf]:"fire-js-all"};/**
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
 */const lf={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new Wa("app","Firebase",lf);/**
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
 */const ff=of;function Za(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Vi,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=Qa()),!n)throw Gt.create("no-options");const r=ws.get(i);if(r){if(Li(n,r.options)&&Li(s,r.config))return r;throw Gt.create("duplicate-app",{appName:i})}const o=new yh(i);for(const c of Ui.values())o.addComponent(c);const a=new hf(n,s,o);return ws.set(i,a),a}function df(e=Vi){const t=ws.get(e);if(!t&&e===Vi&&Qa())return Za();if(!t)throw Gt.create("no-app",{appName:e});return t}function Le(e,t,n){var s;let i=(s=af[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pe.warn(a.join(" "));return}Es(new wn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const pf="firebase-heartbeat-database",gf=1,En="firebase-heartbeat-store";let wi=null;function tc(){return wi||(wi=Nh(pf,gf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(En)}}}).catch(e=>{throw Gt.create("idb-open",{originalErrorMessage:e.message})})),wi}async function mf(e){try{return await(await tc()).transaction(En).objectStore(En).get(ec(e))}catch(t){if(t instanceof We)pe.warn(t.message);else{const n=Gt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pe.warn(n.message)}}}async function Io(e,t){try{const s=(await tc()).transaction(En,"readwrite");await s.objectStore(En).put(t,ec(e)),await s.done}catch(n){if(n instanceof We)pe.warn(n.message);else{const s=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(s.message)}}}function ec(e){return`${e.name}!${e.options.appId}`}/**
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
 */const yf=1024,vf=30*24*60*60*1e3;class wf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _f(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=vf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Co(),{heartbeatsToSend:n,unsentEntries:s}=Ef(this._heartbeatsCache.heartbeats),i=vs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Co(){return new Date().toISOString().substring(0,10)}function Ef(e,t=yf){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),bo(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bo(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _f{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uh()?lh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bo(e){return vs(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Tf(e){Es(new wn("platform-logger",t=>new Mh(t),"PRIVATE")),Es(new wn("heartbeat",t=>new wf(t),"PRIVATE")),Le(Fi,So,e),Le(Fi,So,"esm2017"),Le("fire-js","")}Tf("");var Sf="firebase",If="9.23.0";/**
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
 */Le(Sf,If,"app");var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,yr=yr||{},b=Cf||self;function Ps(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Vn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function bf(e){return Object.prototype.hasOwnProperty.call(e,Ei)&&e[Ei]||(e[Ei]=++Af)}var Ei="closure_uid_"+(1e9*Math.random()>>>0),Af=0;function Df(e,t,n){return e.call.apply(e.bind,arguments)}function kf(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ht(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=Df:ht=kf,ht.apply(null,arguments)}function es(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function nt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function se(){this.s=this.s,this.o=this.o}var Nf=0;se.prototype.s=!1;se.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nf!=0)&&bf(this)};se.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function vr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ao(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ps(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function ft(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var xf=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{b.addEventListener("test",()=>{},t),b.removeEventListener("test",()=>{},t)}catch{}return e}();function _n(e){return/^[\s\xa0]*$/.test(e)}function $s(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function At(e){return $s().indexOf(e)!=-1}function wr(e){return wr[" "](e),e}wr[" "]=function(){};function Rf(e,t){var n=Id;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Mf=At("Opera"),Ue=At("Trident")||At("MSIE"),sc=At("Edge"),Bi=sc||Ue,ic=At("Gecko")&&!($s().toLowerCase().indexOf("webkit")!=-1&&!At("Edge"))&&!(At("Trident")||At("MSIE"))&&!At("Edge"),Of=$s().toLowerCase().indexOf("webkit")!=-1&&!At("Edge");function rc(){var e=b.document;return e?e.documentMode:void 0}var ji;t:{var _i="",Ti=function(){var e=$s();if(ic)return/rv:([^\);]+)(\)|;)/.exec(e);if(sc)return/Edge\/([\d\.]+)/.exec(e);if(Ue)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Of)return/WebKit\/(\S+)/.exec(e);if(Mf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ti&&(_i=Ti?Ti[1]:""),Ue){var Si=rc();if(Si!=null&&Si>parseFloat(_i)){ji=String(Si);break t}}ji=_i}var qi;if(b.document&&Ue){var Do=rc();qi=Do||parseInt(ji,10)||void 0}else qi=void 0;var Lf=qi;function Tn(e,t){if(ft.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ic){t:{try{wr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Pf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Tn.$.h.call(this)}}nt(Tn,ft);var Pf={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),$f=0;function Ff(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++$f,this.fa=this.ia=!1}function Fs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Er(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Vf(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function oc(e){const t={};for(const n in e)t[n]=e[n];return t}const ko="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ac(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<ko.length;r++)n=ko[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Vs(e){this.src=e,this.g={},this.h=0}Vs.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Hi(e,t,s,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Ff(t,this.src,r,!!s,i),t.ia=n,e.push(t)),t};function zi(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=nc(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Fs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Hi(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),Ii={};function cc(e,t,n,s,i){if(s&&s.once)return lc(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)cc(e,t[r],n,s,i);return null}return n=Ir(n),e&&e[Un]?e.O(t,n,Vn(s)?!!s.capture:!!s,i):uc(e,t,n,!1,s,i)}function uc(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Vn(i)?!!i.capture:!!i,a=Sr(e);if(a||(e[_r]=a=new Vs(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Uf(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)xf||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(fc(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Uf(){function e(n){return t.call(e.src,e.listener,n)}const t=Bf;return e}function lc(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)lc(e,t[r],n,s,i);return null}return n=Ir(n),e&&e[Un]?e.P(t,n,Vn(s)?!!s.capture:!!s,i):uc(e,t,n,!0,s,i)}function hc(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)hc(e,t[r],n,s,i);else s=Vn(s)?!!s.capture:!!s,n=Ir(n),e&&e[Un]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Hi(r,n,s,i),-1<n&&(Fs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Sr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hi(t,n,s,i)),(n=-1<e?t[e]:null)&&Tr(n))}function Tr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Un])zi(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(fc(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Sr(t))?(zi(n,e),n.h==0&&(n.src=null,t[_r]=null)):Fs(e)}}}function fc(e){return e in Ii?Ii[e]:Ii[e]="on"+e}function Bf(e,t){if(e.fa)e=!0;else{t=new Tn(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Tr(e),e=n.call(s,t)}return e}function Sr(e){return e=e[_r],e instanceof Vs?e:null}var Ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ir(e){return typeof e=="function"?e:(e[Ci]||(e[Ci]=function(t){return e.handleEvent(t)}),e[Ci])}function et(){se.call(this),this.i=new Vs(this),this.S=this,this.J=null}nt(et,se);et.prototype[Un]=!0;et.prototype.removeEventListener=function(e,t,n,s){hc(this,e,t,n,s)};function rt(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new ft(t,e);else if(t instanceof ft)t.target=t.target||e;else{var i=t;t=new ft(s,e),ac(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=ns(o,s,!0,t)&&i}if(o=t.g=e,i=ns(o,s,!0,t)&&i,i=ns(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=ns(o,s,!1,t)&&i}et.prototype.N=function(){if(et.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Fs(n[s]);delete e.g[t],e.h--}}this.J=null};et.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};et.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ns(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&zi(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Cr=b.JSON.stringify;class jf{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function qf(){var e=br;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class zf{constructor(){this.h=this.g=null}add(t,n){const s=dc.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var dc=new jf(()=>new Hf,e=>e.reset());class Hf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kf(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Gf(e){b.setTimeout(()=>{throw e},0)}let Sn,In=!1,br=new zf,pc=()=>{const e=b.Promise.resolve(void 0);Sn=()=>{e.then(Qf)}};var Qf=()=>{for(var e;e=qf();){try{e.h.call(e.g)}catch(n){Gf(n)}var t=dc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}In=!1};function Us(e,t){et.call(this),this.h=e||1,this.g=t||b,this.j=ht(this.qb,this),this.l=Date.now()}nt(Us,et);w=Us.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(Ar(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ar(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}w.N=function(){Us.$.N.call(this),Ar(this),delete this.g};function Dr(e,t,n){if(typeof e=="function")n&&(e=ht(e,n));else if(e&&typeof e.handleEvent=="function")e=ht(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}function gc(e){e.g=Dr(()=>{e.g=null,e.i&&(e.i=!1,gc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Wf extends se{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:gc(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(e){se.call(this),this.h=e,this.g={}}nt(Cn,se);var No=[];function mc(e,t,n,s){Array.isArray(n)||(n&&(No[0]=n.toString()),n=No);for(var i=0;i<n.length;i++){var r=cc(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function yc(e){Er(e.g,function(t,n){this.g.hasOwnProperty(n)&&Tr(t)},e),e.g={}}Cn.prototype.N=function(){Cn.$.N.call(this),yc(this)};Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bs(){this.g=!0}Bs.prototype.Ea=function(){this.g=!1};function Yf(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Xf(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Re(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Zf(e,n)+(s?" "+s:"")})}function Jf(e,t){e.info(function(){return"TIMEOUT: "+t})}Bs.prototype.info=function(){};function Zf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cr(n)}catch{return t}}var Te={},xo=null;function js(){return xo=xo||new et}Te.Ta="serverreachability";function vc(e){ft.call(this,Te.Ta,e)}nt(vc,ft);function bn(e){const t=js();rt(t,new vc(t))}Te.STAT_EVENT="statevent";function wc(e,t){ft.call(this,Te.STAT_EVENT,e),this.stat=t}nt(wc,ft);function gt(e){const t=js();rt(t,new wc(t,e))}Te.Ua="timingevent";function Ec(e,t){ft.call(this,Te.Ua,e),this.size=t}nt(Ec,ft);function Bn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}var qs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_c={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function kr(){}kr.prototype.h=null;function Ro(e){return e.h||(e.h=e.i())}function Tc(){}var jn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nr(){ft.call(this,"d")}nt(Nr,ft);function xr(){ft.call(this,"c")}nt(xr,ft);var Ki;function zs(){}nt(zs,kr);zs.prototype.g=function(){return new XMLHttpRequest};zs.prototype.i=function(){return{}};Ki=new zs;function qn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Cn(this),this.P=td,e=Bi?125:void 0,this.V=new Us(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Sc}function Sc(){this.i=null,this.g="",this.h=!1}var td=45e3,Gi={},_s={};w=qn.prototype;w.setTimeout=function(e){this.P=e};function Qi(e,t,n){e.L=1,e.v=Ks(Ut(t)),e.s=n,e.S=!0,Ic(e,null)}function Ic(e,t){e.G=Date.now(),zn(e),e.A=Ut(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Rc(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Sc,e.g=Zc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Wf(ht(e.Pa,e,e.g),e.O)),mc(e.U,e.g,"readystatechange",e.nb),t=e.I?oc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),bn(),Yf(e.j,e.u,e.A,e.m,e.W,e.s)}w.nb=function(e){e=e.target;const t=this.M;t&&kt(e)==3?t.l():this.Pa(e)};w.Pa=function(e){try{if(e==this.g)t:{const l=kt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Bi||this.g&&(this.h.h||this.g.ja()||Po(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?bn(3):bn(2)),Hs(this);var n=this.g.da();this.ca=n;e:if(Cc(this)){var s=Po(this.g);e="";var i=s.length,r=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ae(this),hn(this);var o="";break e}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Xf(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_n(a)){var u=a;break e}}u=null}if(n=u)Re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wi(this,n);else{this.i=!1,this.o=3,gt(12),ae(this),hn(this);break t}}this.S?(bc(this,l,o),Bi&&this.i&&l==3&&(mc(this.U,this.V,"tick",this.mb),this.V.start())):(Re(this.j,this.m,o,null),Wi(this,o)),l==4&&ae(this),this.i&&!this.J&&(l==4?Wc(this.l,this):(this.i=!1,zn(this)))}else _d(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),ae(this),hn(this)}}}catch{}finally{}};function Cc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function bc(e,t,n){let s=!0,i;for(;!e.J&&e.C<n.length;)if(i=ed(e,n),i==_s){t==4&&(e.o=4,gt(14),s=!1),Re(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Gi){e.o=4,gt(15),Re(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Re(e.j,e.m,i,null),Wi(e,i);Cc(e)&&i!=_s&&i!=Gi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,gt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$r(t),t.M=!0,gt(11))):(Re(e.j,e.m,n,"[Invalid Chunked Response]"),ae(e),hn(e))}w.mb=function(){if(this.g){var e=kt(this.g),t=this.g.ja();this.C<t.length&&(Hs(this),bc(this,e,t),this.i&&e!=4&&zn(this))}};function ed(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?_s:(n=Number(t.substring(n,s)),isNaN(n)?Gi:(s+=1,s+n>t.length?_s:(t=t.slice(s,s+n),e.C=s+n,t)))}w.cancel=function(){this.J=!0,ae(this)};function zn(e){e.Y=Date.now()+e.P,Ac(e,e.P)}function Ac(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Bn(ht(e.lb,e),t)}function Hs(e){e.B&&(b.clearTimeout(e.B),e.B=null)}w.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Jf(this.j,this.A),this.L!=2&&(bn(),gt(17)),ae(this),this.o=2,hn(this)):Ac(this,this.Y-e)};function hn(e){e.l.H==0||e.J||Wc(e.l,e)}function ae(e){Hs(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ar(e.V),yc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Wi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Yi(n.i,e))){if(!e.K&&Yi(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Is(n),Ws(n);else break t;Pr(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bn(ht(n.ib,n),6e3));if(1>=Lc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ce(n,11)}else if((e.K||n.g==e)&&Is(n),!_n(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Rr(r,r.h),r.h=null))}if(s.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,V(s.I,s.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=Jc(s,s.J?s.pa:null,s.Y),o.K){Pc(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Hs(a),zn(a)),s.g=o}else Gc(s);0<n.j.length&&Ys(n)}else u[0]!="stop"&&u[0]!="close"||ce(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ce(n,7):Lr(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}bn(4)}catch{}}function nd(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ps(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function sd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ps(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Dc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ps(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=sd(e),s=nd(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function id(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fe(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof fe){this.h=e.h,Ts(this,e.j),this.s=e.s,this.g=e.g,Ss(this,e.m),this.l=e.l;var t=e.i,n=new An;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Mo(this,n),this.o=e.o}else e&&(t=String(e).match(kc))?(this.h=!1,Ts(this,t[1]||"",!0),this.s=rn(t[2]||""),this.g=rn(t[3]||"",!0),Ss(this,t[4]),this.l=rn(t[5]||"",!0),Mo(this,t[6]||"",!0),this.o=rn(t[7]||"")):(this.h=!1,this.i=new An(null,this.h))}fe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(on(t,Oo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(on(t,Oo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(on(n,n.charAt(0)=="/"?ad:od,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",on(n,ud)),e.join("")};function Ut(e){return new fe(e)}function Ts(e,t,n){e.j=n?rn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ss(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mo(e,t,n){t instanceof An?(e.i=t,ld(e.i,e.h)):(n||(t=on(t,cd)),e.i=new An(t,e.h))}function V(e,t,n){e.i.set(t,n)}function Ks(e){return V(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function on(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,rd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oo=/[#\/\?@]/g,od=/[#\?:]/g,ad=/[#\?]/g,cd=/[#\?@]/g,ud=/#/g;function An(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ie(e){e.g||(e.g=new Map,e.h=0,e.i&&id(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=An.prototype;w.add=function(e,t){ie(this),this.i=null,e=Ye(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Nc(e,t){ie(e),t=Ye(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function xc(e,t){return ie(e),t=Ye(e,t),e.g.has(t)}w.forEach=function(e,t){ie(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};w.ta=function(){ie(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};w.Z=function(e){ie(this);let t=[];if(typeof e=="string")xc(this,e)&&(t=t.concat(this.g.get(Ye(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};w.set=function(e,t){return ie(this),this.i=null,e=Ye(this,e),xc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Rc(e,t,n){Nc(e,t),0<n.length&&(e.i=null,e.g.set(Ye(e,t),vr(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Ye(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ld(e,t){t&&!e.j&&(ie(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Nc(this,s),Rc(this,i,n))},e)),e.j=t}var hd=class{constructor(e,t){this.g=e,this.map=t}};function Mc(e){this.l=e||fd,b.PerformanceNavigationTiming?(e=b.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fd=10;function Oc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Lc(e){return e.h?1:e.g?e.g.size:0}function Yi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Rr(e,t){e.g?e.g.add(t):e.h=t}function Pc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Mc.prototype.cancel=function(){if(this.i=$c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function $c(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return vr(e.i)}var dd=class{stringify(e){return b.JSON.stringify(e,void 0)}parse(e){return b.JSON.parse(e,void 0)}};function pd(){this.g=new dd}function gd(e,t,n){const s=n||"";try{Dc(e,function(i,r){let o=i;Vn(i)&&(o=Cr(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function md(e,t){const n=new Bs;if(b.Image){const s=new Image;s.onload=es(ss,n,s,"TestLoadImage: loaded",!0,t),s.onerror=es(ss,n,s,"TestLoadImage: error",!1,t),s.onabort=es(ss,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=es(ss,n,s,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ss(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Hn(e){this.l=e.fc||null,this.j=e.ob||!1}nt(Hn,kr);Hn.prototype.g=function(){return new Gs(this.l,this.j)};Hn.prototype.i=function(e){return function(){return e}}({});function Gs(e,t){et.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Mr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Gs,et);var Mr=0;w=Gs.prototype;w.open=function(e,t){if(this.readyState!=Mr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Dn(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=Mr};w.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Fc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}w.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Kn(this):Dn(this),this.readyState==3&&Fc(this)}};w.Za=function(e){this.g&&(this.response=this.responseText=e,Kn(this))};w.Ya=function(e){this.g&&(this.response=e,Kn(this))};w.ka=function(){this.g&&Kn(this)};function Kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Dn(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Dn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yd=b.JSON.parse;function K(e){et.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vc,this.L=this.M=!1}nt(K,et);var Vc="",vd=/^https?$/i,wd=["POST","PUT"];w=K.prototype;w.Oa=function(e){this.M=e};w.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ki.g(),this.C=this.u?Ro(this.u):Ro(Ki),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Lo(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=b.FormData&&e instanceof b.FormData,!(0<=nc(wd,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jc(this),0<this.B&&((this.L=Ed(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=Dr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Lo(this,r)}};function Ed(e){return Ue&&typeof e.timeout=="number"&&e.ontimeout!==void 0}w.ua=function(){typeof yr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Lo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Uc(e),Qs(e)}function Uc(e){e.F||(e.F=!0,rt(e,"complete"),rt(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,rt(this,"complete"),rt(this,"abort"),Qs(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qs(this,!0)),K.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?Bc(this):this.kb())};w.kb=function(){Bc(this)};function Bc(e){if(e.h&&typeof yr<"u"&&(!e.C[1]||kt(e)!=4||e.da()!=2)){if(e.v&&kt(e)==4)Dr(e.La,0,e);else if(rt(e,"readystatechange"),kt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var i=String(e.I).match(kc)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),s=!vd.test(i?i.toLowerCase():"")}n=s}if(n)rt(e,"complete"),rt(e,"success");else{e.m=6;try{var r=2<kt(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",Uc(e)}}finally{Qs(e)}}}}function Qs(e,t){if(e.g){jc(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||rt(e,"ready");try{n.onreadystatechange=s}catch{}}}function jc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}w.isActive=function(){return!!this.g};function kt(e){return e.g?e.g.readyState:0}w.da=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),yd(t)}};function Po(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Vc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function _d(e){const t={};e=(e.g&&2<=kt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(_n(e[s]))continue;var n=Kf(e[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[i]||[];t[i]=r,r.push(n)}Vf(t,function(s){return s.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qc(e){let t="";return Er(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Or(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=qc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):V(e,t,n))}function nn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zc(e){this.Ga=0,this.j=[],this.l=new Bs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nn("baseRetryDelayMs",5e3,e),this.hb=nn("retryDelaySeedMs",1e4,e),this.eb=nn("forwardChannelMaxRetries",2,e),this.xa=nn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Mc(e&&e.concurrentRequestLimit),this.Ja=new pd,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=zc.prototype;w.ra=8;w.H=1;function Lr(e){if(Hc(e),e.H==3){var t=e.W++,n=Ut(e.I);if(V(n,"SID",e.K),V(n,"RID",t),V(n,"TYPE","terminate"),Gn(e,n),t=new qn(e,e.l,t),t.L=2,t.v=Ks(Ut(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&b.Image&&(new Image().src=t.v,n=!0),n||(t.g=Zc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),zn(t)}Xc(e)}function Ws(e){e.g&&($r(e),e.g.cancel(),e.g=null)}function Hc(e){Ws(e),e.u&&(b.clearTimeout(e.u),e.u=null),Is(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&b.clearTimeout(e.m),e.m=null)}function Ys(e){if(!Oc(e.i)&&!e.m){e.m=!0;var t=e.Na;Sn||pc(),In||(Sn(),In=!0),br.add(t,e),e.C=0}}function Td(e,t){return Lc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Bn(ht(e.Na,e,t),Yc(e,e.C)),e.C++,!0)}w.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new qn(this,this.l,e);let r=this.s;if(this.U&&(r?(r=oc(r),ac(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Kc(this,i,t),n=Ut(this.I),V(n,"RID",e),V(n,"CVER",22),this.F&&V(n,"X-HTTP-Session-Id",this.F),Gn(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(qc(r)))+"&"+t:this.o&&Or(n,this.o,r)),Rr(this.i,i),this.bb&&V(n,"TYPE","init"),this.P?(V(n,"$req",t),V(n,"SID","null"),i.aa=!0,Qi(i,n,null)):Qi(i,n,t),this.H=2}}else this.H==3&&(e?$o(this,e):this.j.length==0||Oc(this.i)||$o(this))};function $o(e,t){var n;t?n=t.m:n=e.W++;const s=Ut(e.I);V(s,"SID",e.K),V(s,"RID",n),V(s,"AID",e.V),Gn(e,s),e.o&&e.s&&Or(s,e.o,e.s),n=new qn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Kc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Rr(e.i,n),Qi(n,s,t)}function Gn(e,t){e.na&&Er(e.na,function(n,s){V(t,s,n)}),e.h&&Dc({},function(n,s){V(t,s,n)})}function Kc(e,t,n){n=Math.min(e.j.length,n);var s=e.h?ht(e.h.Va,e.h,e):null;t:{var i=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=r,0>u)r=Math.max(0,i[c].g-100),a=!1;else try{gd(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function Gc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Sn||pc(),In||(Sn(),In=!0),br.add(t,e),e.A=0}}function Pr(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Bn(ht(e.Ma,e),Yc(e,e.A)),e.A++,!0)}w.Ma=function(){if(this.u=null,Qc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Bn(ht(this.jb,this),e)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Ws(this),Qc(this))};function $r(e){e.B!=null&&(b.clearTimeout(e.B),e.B=null)}function Qc(e){e.g=new qn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ut(e.wa);V(t,"RID","rpc"),V(t,"SID",e.K),V(t,"AID",e.V),V(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&V(t,"TO",e.qa),V(t,"TYPE","xmlhttp"),Gn(e,t),e.o&&e.s&&Or(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ks(Ut(t)),n.s=null,n.S=!0,Ic(n,e)}w.ib=function(){this.v!=null&&(this.v=null,Ws(this),Pr(this),gt(19))};function Is(e){e.v!=null&&(b.clearTimeout(e.v),e.v=null)}function Wc(e,t){var n=null;if(e.g==t){Is(e),$r(e),e.g=null;var s=2}else if(Yi(e.i,t))n=t.F,Pc(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;s=js(),rt(s,new Ec(s,n)),Ys(e)}else Gc(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(s==1&&Td(e,t)||s==2&&Pr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ce(e,5);break;case 4:ce(e,10);break;case 3:ce(e,6);break;default:ce(e,2)}}}function Yc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ce(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=ht(e.pb,e);n||(n=new fe("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Ts(n,"https"),Ks(n)),md(n.toString(),s)}else gt(2);e.H=0,e.h&&e.h.za(t),Xc(e),Hc(e)}w.pb=function(e){e?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function Xc(e){if(e.H=0,e.ma=[],e.h){const t=$c(e.i);(t.length!=0||e.j.length!=0)&&(Ao(e.ma,t),Ao(e.ma,e.j),e.i.i.length=0,vr(e.j),e.j.length=0),e.h.ya()}}function Jc(e,t,n){var s=n instanceof fe?Ut(n):new fe(n);if(s.g!="")t&&(s.g=t+"."+s.g),Ss(s,s.m);else{var i=b.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new fe(null);s&&Ts(r,s),t&&(r.g=t),i&&Ss(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&V(s,n,t),V(s,"VER",e.ra),Gn(e,s),s}function Zc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new K(new Hn({ob:!0})):new K(e.va),t.Oa(e.J),t}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function tu(){}w=tu.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function Cs(){if(Ue&&!(10<=Number(Lf)))throw Error("Environmental error: no available transport.")}Cs.prototype.g=function(e,t){return new wt(e,t)};function wt(e,t){et.call(this),this.g=new zc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!_n(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_n(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xe(this)}nt(wt,et);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Jc(e,null,e.Y),Ys(e)};wt.prototype.close=function(){Lr(this.g)};wt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Cr(e),e=n);t.j.push(new hd(t.fb++,e)),t.H==3&&Ys(t)};wt.prototype.N=function(){this.g.h=null,delete this.j,Lr(this.g),delete this.g,wt.$.N.call(this)};function eu(e){Nr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}nt(eu,Nr);function nu(){xr.call(this),this.status=1}nt(nu,xr);function Xe(e){this.g=e}nt(Xe,tu);Xe.prototype.Ba=function(){rt(this.g,"a")};Xe.prototype.Aa=function(e){rt(this.g,new eu(e))};Xe.prototype.za=function(e){rt(this.g,new nu)};Xe.prototype.ya=function(){rt(this.g,"b")};function Sd(){this.blockSize=-1}function bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(bt,Sd);bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bi(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],o=t+(r^n&(i^r))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(n^i))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^r)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~r))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}bt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=n;)bi(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){bi(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){bi(this,s),i=0;break}}this.h=i,this.i+=t};bt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function F(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=e[i]|0;s&&r==t||(n[i]=r,s=!1)}this.g=n}var Id={};function Fr(e){return-128<=e&&128>e?Rf(e,function(t){return new F([t|0],0>t?-1:0)}):new F([e|0],0>e?-1:0)}function Nt(e){if(isNaN(e)||!isFinite(e))return Pe;if(0>e)return it(Nt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Xi;return new F(t,0)}function su(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return it(su(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Nt(Math.pow(t,8)),s=Pe,i=0;i<e.length;i+=8){var r=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+r),t);8>r?(r=Nt(Math.pow(t,r)),s=s.R(r).add(Nt(o))):(s=s.R(n),s=s.add(Nt(o)))}return s}var Xi=4294967296,Pe=Fr(0),Ji=Fr(1),Fo=Fr(16777216);w=F.prototype;w.ea=function(){if(St(this))return-it(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Xi+s)*t,t*=Xi}return e};w.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Lt(this))return"0";if(St(this))return"-"+it(this).toString(e);for(var t=Nt(Math.pow(e,6)),n=this,s="";;){var i=As(n,t).g;n=bs(n,i.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Lt(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};w.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Lt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function St(e){return e.h==-1}w.X=function(e){return e=bs(this,e),St(e)?-1:Lt(e)?0:1};function it(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new F(n,~e.h).add(Ji)}w.abs=function(){return St(this)?it(this):this};w.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(e.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new F(n,n[n.length-1]&-2147483648?-1:0)};function bs(e,t){return e.add(it(t))}w.R=function(e){if(Lt(this)||Lt(e))return Pe;if(St(this))return St(e)?it(this).R(it(e)):it(it(this).R(e));if(St(e))return it(this.R(it(e)));if(0>this.X(Fo)&&0>e.X(Fo))return Nt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*s+2*i]+=o*c,is(n,2*s+2*i),n[2*s+2*i+1]+=r*c,is(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,is(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,is(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new F(n,0)};function is(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function sn(e,t){this.g=e,this.h=t}function As(e,t){if(Lt(t))throw Error("division by zero");if(Lt(e))return new sn(Pe,Pe);if(St(e))return t=As(it(e),t),new sn(it(t.g),it(t.h));if(St(t))return t=As(e,it(t)),new sn(it(t.g),t.h);if(30<e.g.length){if(St(e)||St(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ji,s=t;0>=s.X(e);)n=Vo(n),s=Vo(s);var i=Ae(n,1),r=Ae(s,1);for(s=Ae(s,2),n=Ae(n,2);!Lt(s);){var o=r.add(s);0>=o.X(e)&&(i=i.add(n),r=o),s=Ae(s,1),n=Ae(n,1)}return t=bs(e,i.R(t)),new sn(i,t)}for(i=Pe;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Nt(n),o=r.R(t);St(o)||0<o.X(e);)n-=s,r=Nt(n),o=r.R(t);Lt(r)&&(r=Ji),i=i.add(r),e=bs(e,o)}return new sn(i,e)}w.gb=function(e){return As(this,e).h};w.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new F(n,this.h&e.h)};w.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new F(n,this.h|e.h)};w.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new F(n,this.h^e.h)};function Vo(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new F(n,e.h)}function Ae(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new F(i,e.h)}Cs.prototype.createWebChannel=Cs.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;qs.NO_ERROR=0;qs.TIMEOUT=8;qs.HTTP_ERROR=6;_c.COMPLETE="complete";Tc.EventType=jn;jn.OPEN="a";jn.CLOSE="b";jn.ERROR="c";jn.MESSAGE="d";et.prototype.listen=et.prototype.O;K.prototype.listenOnce=K.prototype.P;K.prototype.getLastError=K.prototype.Sa;K.prototype.getLastErrorCode=K.prototype.Ia;K.prototype.getStatus=K.prototype.da;K.prototype.getResponseJson=K.prototype.Wa;K.prototype.getResponseText=K.prototype.ja;K.prototype.send=K.prototype.ha;K.prototype.setWithCredentials=K.prototype.Oa;bt.prototype.digest=bt.prototype.l;bt.prototype.reset=bt.prototype.reset;bt.prototype.update=bt.prototype.j;F.prototype.add=F.prototype.add;F.prototype.multiply=F.prototype.R;F.prototype.modulo=F.prototype.gb;F.prototype.compare=F.prototype.X;F.prototype.toNumber=F.prototype.ea;F.prototype.toString=F.prototype.toString;F.prototype.getBits=F.prototype.D;F.fromNumber=Nt;F.fromString=su;var Cd=function(){return new Cs},bd=function(){return js()},Ai=qs,Ad=_c,Dd=Te,Uo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},kd=Hn,rs=Tc,Nd=K,xd=bt,$e=F;const Bo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ge=new Ya("@firebase/firestore");function jo(){return ge.logLevel}function _(e,...t){if(ge.logLevel<=$.DEBUG){const n=t.map(Vr);ge.debug(`Firestore (${Je}): ${e}`,...n)}}function Bt(e,...t){if(ge.logLevel<=$.ERROR){const n=t.map(Vr);ge.error(`Firestore (${Je}): ${e}`,...n)}}function Be(e,...t){if(ge.logLevel<=$.WARN){const n=t.map(Vr);ge.warn(`Firestore (${Je}): ${e}`,...n)}}function Vr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function C(e="Unexpected state"){const t=`FIRESTORE (${Je}) INTERNAL ASSERTION FAILED: `+e;throw Bt(t),new Error(t)}function U(e,t){e||C()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class Md{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Od{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Qt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Qt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(U(typeof s.accessToken=="string"),new iu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new at(t)}}class Ld{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=at.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Pd{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ld(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $d{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fd{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(U(typeof n.token=="string"),this.T=n.token,new $d(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class ru{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Vd(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function P(e,t){return e<t?-1:e>t?1:0}function je(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new T(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new T(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Z(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new Z(0,0))}static max(){return new A(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n,s){n===void 0?n=0:n>t.length&&C(),s===void 0?s=t.length-n:s>t.length-n&&C(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return kn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof kn?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class B extends kn{construct(t,n,s){return new B(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new T(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new B(n)}static emptyPath(){return new B([])}}const Ud=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends kn{construct(t,n,s){return new ut(t,n,s)}static isValidIdentifier(t){return Ud.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new T(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new T(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new T(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new T(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.path=t}static fromPath(t){return new S(B.fromString(t))}static fromName(t){return new S(B.fromString(t).popFirst(5))}static empty(){return new S(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&B.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return B.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new S(new B(t.slice()))}}function Bd(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=A.fromTimestamp(s===1e9?new Z(n+1,0):new Z(n,s));return new Zt(i,S.empty(),t)}function jd(e){return new Zt(e.readTime,e.key,-1)}class Zt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Zt(A.min(),S.empty(),-1)}static max(){return new Zt(A.max(),S.empty(),-1)}}function qd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=S.comparator(e.documentKey,t.documentKey),n!==0?n:P(e.largestBatchId,t.largestBatchId))}/**
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
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new v((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):v.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):v.reject(n)}static resolve(t){return new v((n,s)=>{n(t)})}static reject(t){return new v((n,s)=>{s(t)})}static waitFor(t){return new v((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=v.resolve(!1);for(const s of t)n=n.next(i=>i?v.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new v((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(t,n){return new v((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Wn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */function qo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Se(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ou(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,n){this.comparator=t,this.root=n||st.EMPTY}insert(t,n){return new z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new os(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new os(this.root,t,this.comparator,!1)}getReverseIterator(){return new os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new os(this.root,t,this.comparator,!0)}}class os{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:st.RED,this.left=i!=null?i:st.EMPTY,this.right=r!=null?r:st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new st(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return st.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const t=this.left.check();if(t!==this.right.check())throw C();return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,n,s,i){return this}insert(e,t,n){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.comparator=t,this.data=new z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zo(this.data.getIterator())}getIteratorFrom(t){return new zo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new dt(this.comparator);return n.data=t,n}}class zo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new It([])}unionWith(t){let n=new dt(ut.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new It(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new au("Invalid base64 string: "+i):i}}(t);return new pt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new pt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Gd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(e){if(U(!!e),typeof e=="string"){let t=0;const n=Gd.exec(e);if(U(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:W(e.seconds),nanos:W(e.nanos)}}function W(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function me(e){return typeof e=="string"?pt.fromBase64String(e):pt.fromUint8Array(e)}/**
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
 */function Br(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jr(e){const t=e.mapValue.fields.__previous_value__;return Br(t)?jr(t):t}function Nn(e){const t=te(e.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n,s,i,r,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class xn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const as={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ye(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Br(e)?4:Wd(e)?9007199254740991:10:C()}function Mt(e,t){if(e===t)return!0;const n=ye(e);if(n!==ye(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Nn(e).isEqual(Nn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=te(s.timestampValue),o=te(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return me(s.bytesValue).isEqual(me(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return W(s.geoPointValue.latitude)===W(i.geoPointValue.latitude)&&W(s.geoPointValue.longitude)===W(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return W(s.integerValue)===W(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=W(s.doubleValue),o=W(i.doubleValue);return r===o?Ds(r)===Ds(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return je(e.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(qo(r)!==qo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Mt(r[a],o[a])))return!1;return!0}(e,t);default:return C()}}function Rn(e,t){return(e.values||[]).find(n=>Mt(n,t))!==void 0}function qe(e,t){if(e===t)return 0;const n=ye(e),s=ye(t);if(n!==s)return P(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=W(i.integerValue||i.doubleValue),a=W(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ho(e.timestampValue,t.timestampValue);case 4:return Ho(Nn(e),Nn(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(i,r){const o=me(i),a=me(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=P(o[c],a[c]);if(u!==0)return u}return P(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=P(W(i.latitude),W(r.latitude));return o!==0?o:P(W(i.longitude),W(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=qe(o[c],a[c]);if(u)return u}return P(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===as.mapValue&&r===as.mapValue)return 0;if(i===as.mapValue)return 1;if(r===as.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=P(a[l],u[l]);if(h!==0)return h;const f=qe(o[a[l]],c[u[l]]);if(f!==0)return f}return P(a.length,u.length)}(e.mapValue,t.mapValue);default:throw C()}}function Ho(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return P(e,t);const n=te(e),s=te(t),i=P(n.seconds,s.seconds);return i!==0?i:P(n.nanos,s.nanos)}function ze(e){return Zi(e)}function Zi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=te(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?me(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,S.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Zi(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Zi(s.fields[a])}`;return r+"}"}(e.mapValue):C();var t,n}function tr(e){return!!e&&"integerValue"in e}function qr(e){return!!e&&"arrayValue"in e}function Ko(e){return!!e&&"nullValue"in e}function Go(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function hs(e){return!!e&&"mapValue"in e}function fn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Se(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=fn(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=fn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Wd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!hs(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=fn(n)}setAll(t){let n=ut.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=fn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());hs(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];hs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Se(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new vt(fn(this.value))}}function cu(e){const t=[];return Se(e.fields,(n,s)=>{const i=new ut([n]);if(hs(s)){const r=cu(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ks{constructor(t,n){this.position=t,this.inclusive=n}}function Qo(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=S.comparator(S.fromName(o.referenceValue),n.key):s=qe(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Mt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class uu{}class J extends uu{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Jd(t,n,s):n==="array-contains"?new ep(t,s):n==="in"?new np(t,s):n==="not-in"?new sp(t,s):n==="array-contains-any"?new ip(t,s):new J(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Zd(t,s):new tp(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qe(n,this.value)):n!==null&&ye(this.value)===ye(n)&&this.matchesComparison(qe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ot extends uu{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new Ot(t,n)}matches(t){return lu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function lu(e){return e.op==="and"}function hu(e){return Xd(e)&&lu(e)}function Xd(e){for(const t of e.filters)if(t instanceof Ot)return!1;return!0}function er(e){if(e instanceof J)return e.field.canonicalString()+e.op.toString()+ze(e.value);if(hu(e))return e.filters.map(t=>er(t)).join(",");{const t=e.filters.map(n=>er(n)).join(",");return`${e.op}(${t})`}}function fu(e,t){return e instanceof J?function(n,s){return s instanceof J&&n.op===s.op&&n.field.isEqual(s.field)&&Mt(n.value,s.value)}(e,t):e instanceof Ot?function(n,s){return s instanceof Ot&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&fu(r,s.filters[o]),!0):!1}(e,t):void C()}function du(e){return e instanceof J?function(t){return`${t.field.canonicalString()} ${t.op} ${ze(t.value)}`}(e):e instanceof Ot?function(t){return t.op.toString()+" {"+t.getFilters().map(du).join(" ,")+"}"}(e):"Filter"}class Jd extends J{constructor(t,n,s){super(t,n,s),this.key=S.fromName(s.referenceValue)}matches(t){const n=S.comparator(t.key,this.key);return this.matchesComparison(n)}}class Zd extends J{constructor(t,n){super(t,"in",n),this.keys=pu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class tp extends J{constructor(t,n){super(t,"not-in",n),this.keys=pu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function pu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>S.fromName(s.referenceValue))}class ep extends J{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return qr(n)&&Rn(n.arrayValue,this.value)}}class np extends J{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Rn(this.value.arrayValue,n)}}class sp extends J{constructor(t,n){super(t,"not-in",n)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Rn(this.value.arrayValue,n)}}class ip extends J{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!qr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Rn(this.value.arrayValue,s))}}/**
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
 */class rp{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Yo(e,t=null,n=[],s=[],i=null,r=null,o=null){return new rp(e,t,n,s,i,r,o)}function zr(e){const t=N(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>er(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ze(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ze(s)).join(",")),t.dt=n}return t.dt}function Hr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Yd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!fu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wo(e.startAt,t.startAt)&&Wo(e.endAt,t.endAt)}function nr(e){return S.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function op(e,t,n,s,i,r,o,a){return new Js(e,t,n,s,i,r,o,a)}function Zs(e){return new Js(e)}function Xo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ap(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function cp(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function up(e){return e.collectionGroup!==null}function Fe(e){const t=N(e);if(t.wt===null){t.wt=[];const n=cp(t),s=ap(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new dn(n)),t.wt.push(new dn(ut.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new dn(ut.keyField(),r))}}}return t.wt}function jt(e){const t=N(e);if(!t._t)if(t.limitType==="F")t._t=Yo(t.path,t.collectionGroup,Fe(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Fe(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new dn(r.field,o))}const s=t.endAt?new ks(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ks(t.startAt.position,t.startAt.inclusive):null;t._t=Yo(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function sr(e,t,n){return new Js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ti(e,t){return Hr(jt(e),jt(t))&&e.limitType===t.limitType}function gu(e){return`${zr(jt(e))}|lt:${e.limitType}`}function ir(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>du(s)).join(", ")}]`),Xs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ze(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ze(s)).join(",")),`Target(${n})`}(jt(e))}; limitType=${e.limitType})`}function ei(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):S.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Fe(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Qo(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Fe(n),s)||n.endAt&&!function(i,r,o){const a=Qo(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Fe(n),s))}(e,t)}function lp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function mu(e){return(t,n)=>{let s=!1;for(const i of Fe(e)){const r=hp(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function hp(e,t,n){const s=e.field.isKeyField()?S.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?qe(a,c):C()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return C()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ou(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new z(S.comparator);function qt(){return fp}const yu=new z(S.comparator);function an(...e){let t=yu;for(const n of e)t=t.insert(n.key,n);return t}function vu(e){let t=yu;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function ue(){return pn()}function wu(){return pn()}function pn(){return new Ze(e=>e.toString(),(e,t)=>e.isEqual(t))}const dp=new z(S.comparator),pp=new dt(S.comparator);function R(...e){let t=pp;for(const n of e)t=t.add(n);return t}const gp=new dt(P);function mp(){return gp}/**
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
 */function Eu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ds(t)?"-0":t}}function _u(e){return{integerValue:""+e}}function yp(e,t){return Kd(t)?_u(t):Eu(e,t)}/**
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
 */class ni{constructor(){this._=void 0}}function vp(e,t,n){return e instanceof Ns?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Br(i)&&(i=jr(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof He?Su(e,t):e instanceof Mn?Iu(e,t):function(s,i){const r=Tu(s,i),o=Jo(r)+Jo(s.gt);return tr(r)&&tr(s.gt)?_u(o):Eu(s.serializer,o)}(e,t)}function wp(e,t,n){return e instanceof He?Su(e,t):e instanceof Mn?Iu(e,t):n}function Tu(e,t){return e instanceof xs?tr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ns extends ni{}class He extends ni{constructor(t){super(),this.elements=t}}function Su(e,t){const n=Cu(t);for(const s of e.elements)n.some(i=>Mt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Mn extends ni{constructor(t){super(),this.elements=t}}function Iu(e,t){let n=Cu(t);for(const s of e.elements)n=n.filter(i=>!Mt(i,s));return{arrayValue:{values:n}}}class xs extends ni{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Jo(e){return W(e.integerValue||e.doubleValue)}function Cu(e){return qr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,n){this.field=t,this.transform=n}}function _p(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof He&&s instanceof He||n instanceof Mn&&s instanceof Mn?je(n.elements,s.elements,Mt):n instanceof xs&&s instanceof xs?Mt(n.gt,s.gt):n instanceof Ns&&s instanceof Ns}(e.transform,t.transform)}class Tp{constructor(t,n){this.version=t,this.transformResults=n}}class Pt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fs(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class si{}function bu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Du(e.key,Pt.none()):new ii(e.key,e.data,Pt.none());{const n=e.data,s=vt.empty();let i=new dt(ut.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ie(e.key,s,new It(i.toArray()),Pt.none())}}function Sp(e,t,n){e instanceof ii?function(s,i,r){const o=s.value.clone(),a=ta(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ie?function(s,i,r){if(!fs(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ta(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Au(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function gn(e,t,n,s){return e instanceof ii?function(i,r,o,a){if(!fs(i.precondition,r))return o;const c=i.value.clone(),u=ea(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ie?function(i,r,o,a){if(!fs(i.precondition,r))return o;const c=ea(i.fieldTransforms,a,r),u=r.data;return u.setAll(Au(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(i,r,o){return fs(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Ip(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Tu(s.transform,i||null);r!=null&&(n===null&&(n=vt.empty()),n.set(s.field,r))}return n||null}function Zo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&je(n,s,(i,r)=>_p(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ii extends si{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ie extends si{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Au(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function ta(e,t,n){const s=new Map;U(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,wp(o,a,n[i]))}return s}function ea(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,vp(r,o,t))}return s}class Du extends si{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cp extends si{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Sp(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=gn(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=gn(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=wu();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=bu(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,(n,s)=>Zo(n,s))&&je(this.baseMutations,t.baseMutations,(n,s)=>Zo(n,s))}}class Kr{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){U(t.mutations.length===s.length);let i=dp;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Kr(t,n,s,i)}}/**
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
 */var Q,M;function kp(e){switch(e){default:return C();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function ku(e){if(e===void 0)return Bt("GRPC error has no .code"),y.UNKNOWN;switch(e){case Q.OK:return y.OK;case Q.CANCELLED:return y.CANCELLED;case Q.UNKNOWN:return y.UNKNOWN;case Q.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case Q.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case Q.INTERNAL:return y.INTERNAL;case Q.UNAVAILABLE:return y.UNAVAILABLE;case Q.UNAUTHENTICATED:return y.UNAUTHENTICATED;case Q.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case Q.NOT_FOUND:return y.NOT_FOUND;case Q.ALREADY_EXISTS:return y.ALREADY_EXISTS;case Q.PERMISSION_DENIED:return y.PERMISSION_DENIED;case Q.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case Q.ABORTED:return y.ABORTED;case Q.OUT_OF_RANGE:return y.OUT_OF_RANGE;case Q.UNIMPLEMENTED:return y.UNIMPLEMENTED;case Q.DATA_LOSS:return y.DATA_LOSS;default:return C()}}(M=Q||(Q={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const xp=new $e([4294967295,4294967295],0);function na(e){const t=Np().encode(e),n=new xd;return n.update(t),new Uint8Array(n.digest())}function sa(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new $e([n,s],0),new $e([i,r],0)]}class Qr{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new cn(`Invalid padding: ${n}`);if(s<0)throw new cn(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new cn(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new cn(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=$e.fromNumber(this.It)}Et(t,n,s){let i=t.add(n.multiply($e.fromNumber(s)));return i.compare(xp)===1&&(i=new $e([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=na(t),[s,i]=sa(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(t,n,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Qr(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=na(t),[s,i]=sa(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Yn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new ri(A.min(),i,new z(P),qt(),R())}}class Yn{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Yn(s,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n,s,i){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=i}}class Nu{constructor(t,n){this.targetId=t,this.Vt=n}}class xu{constructor(t,n,s=pt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ia{constructor(){this.St=0,this.Dt=oa(),this.Ct=pt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=R(),n=R(),s=R();return this.Dt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:C()}}),new Yn(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=oa()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Rp{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=qt(),this.zt=ra(),this.Wt=new z(P)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:C()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(t){var n;const s=t.targetId,i=t.Vt.count,r=this.se(s);if(r){const o=r.target;if(nr(o))if(i===0){const a=new S(o.path);this.Yt(s,a,ct.newNoDocument(a,A.min()))}else U(i===1);else{const a=this.ie(s);if(a!==i){const c=this.re(t,a);if(c!==0){this.ee(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(n=Gr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var f,d,p,m,g,E;const x={localCacheCount:l,existenceFilterCount:h.count},I=h.unchangedNames;return I&&(x.bloomFilter={applied:u===0,hashCount:(f=I==null?void 0:I.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(p=(d=I==null?void 0:I.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(E=(g=I==null?void 0:I.bits)===null||g===void 0?void 0:g.padding)!==null&&E!==void 0?E:0}),x}(c,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:i}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=me(r).toUint8Array()}catch(l){if(l instanceof au)return Be("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Qr(c,o,a)}catch(l){return Be(l instanceof cn?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==n-this.oe(t.targetId,u)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(t,r,null),i++)}),i}ce(t){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&nr(a.target)){const c=new S(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ct.newNoDocument(c,t))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=R();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(t));const i=new ri(t,n,this.Wt,this.jt,s);return this.jt=qt(),this.zt=ra(),this.Wt=new z(P),i}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const i=this.Zt(t);this.ae(t,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new ia,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new dt(P),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new ia),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function ra(){return new z(S.comparator)}function oa(){return new z(S.comparator)}const Mp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Op=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lp=(()=>({and:"AND",or:"OR"}))();class Pp{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function rr(e,t){return e.useProto3Json||Xs(t)?t:{value:t}}function Rs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ru(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function $p(e,t){return Rs(e,t.toTimestamp())}function Rt(e){return U(!!e),A.fromTimestamp(function(t){const n=te(t);return new Z(n.seconds,n.nanos)}(e))}function Wr(e,t){return function(n){return new B(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Mu(e){const t=B.fromString(e);return U($u(t)),t}function or(e,t){return Wr(e.databaseId,t.path)}function Di(e,t){const n=Mu(t);if(n.get(1)!==e.databaseId.projectId)throw new T(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new S(Ou(n))}function ar(e,t){return Wr(e.databaseId,t)}function Fp(e){const t=Mu(e);return t.length===4?B.emptyPath():Ou(t)}function cr(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ou(e){return U(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function aa(e,t,n){return{name:or(e,t),fields:n.value.mapValue.fields}}function Vp(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(U(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(U(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:ku(c.code);return new T(u,c.message||"")}(o);n=new xu(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Di(e,s.document.name),r=Rt(s.document.updateTime),o=s.document.createTime?Rt(s.document.createTime):A.min(),a=new vt({mapValue:{fields:s.document.fields}}),c=ct.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new ds(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Di(e,s.document),r=s.readTime?Rt(s.readTime):A.min(),o=ct.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ds([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Di(e,s.document),r=s.removedTargetIds||[];n=new ds([],r,i,null)}else{if(!("filter"in t))return C();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Dp(i,r),a=s.targetId;n=new Nu(a,o)}}return n}function Up(e,t){let n;if(t instanceof ii)n={update:aa(e,t.key,t.value)};else if(t instanceof Du)n={delete:or(e,t.key)};else if(t instanceof Ie)n={update:aa(e,t.key,t.data),updateMask:Wp(t.fieldMask)};else{if(!(t instanceof Cp))return C();n={verify:or(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ns)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof He)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xs)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw C()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$p(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:C()}(e,t.precondition)),n}function Bp(e,t){return e&&e.length>0?(U(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?Rt(s.updateTime):Rt(i);return r.isEqual(A.min())&&(r=Rt(i)),new Tp(r,s.transformResults||[])}(n,t))):[]}function jp(e,t){return{documents:[ar(e,t.path)]}}function qp(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ar(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ar(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Pu(Ot.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ne(l.field),direction:Kp(l.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=rr(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function zp(e){let t=Fp(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){U(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=Lu(l);return h instanceof Ot&&hu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new dn(xe(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Xs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new ks(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new ks(f,h)}(n.endAt)),op(t,i,o,r,a,"F",c,u)}function Hp(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Lu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=xe(t.unaryFilter.field);return J.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=xe(t.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xe(t.unaryFilter.field);return J.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=xe(t.unaryFilter.field);return J.create(r,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(e):e.fieldFilter!==void 0?function(t){return J.create(xe(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Ot.create(t.compositeFilter.filters.map(n=>Lu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op))}(e):C()}function Kp(e){return Mp[e]}function Gp(e){return Op[e]}function Qp(e){return Lp[e]}function Ne(e){return{fieldPath:e.canonicalString()}}function xe(e){return ut.fromServerFormat(e.fieldPath)}function Pu(e){return e instanceof J?function(t){if(t.op==="=="){if(Go(t.value))return{unaryFilter:{field:Ne(t.field),op:"IS_NAN"}};if(Ko(t.value))return{unaryFilter:{field:Ne(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Go(t.value))return{unaryFilter:{field:Ne(t.field),op:"IS_NOT_NAN"}};if(Ko(t.value))return{unaryFilter:{field:Ne(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ne(t.field),op:Gp(t.op),value:t.value}}}(e):e instanceof Ot?function(t){const n=t.getFilters().map(s=>Pu(s));return n.length===1?n[0]:{compositeFilter:{op:Qp(t.op),filters:n}}}(e):C()}function Wp(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function $u(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n,s,i,r=A.min(),o=A.min(),a=pt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jp{constructor(){this.rn=new Zp}addToCollectionParentIndex(t,n){return this.rn.add(n),v.resolve()}getCollectionParents(t,n){return v.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return v.resolve()}deleteFieldIndex(t,n){return v.resolve()}getDocumentsMatchingTarget(t,n){return v.resolve(null)}getIndexType(t,n){return v.resolve(0)}getFieldIndexes(t,n){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,n){return v.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,n){return v.resolve(Zt.min())}updateCollectionGroup(t,n,s){return v.resolve()}updateIndexEntries(t,n){return v.resolve()}}class Zp{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new dt(B.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new dt(B.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tg{constructor(){this.changes=new Ze(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ct.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?v.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ng{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&gn(s.mutation,i,It.empty(),Z.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,R()).next(()=>s))}getLocalViewOfDocuments(t,n,s=R()){const i=ue();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=an();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=ue();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,R()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=qt();const o=pn(),a=pn();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Ie)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),gn(l.mutation,u,l.mutation.getFieldMask(),Z.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new eg(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=pn();let i=new z((o,a)=>o-a),r=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||It.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||R()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=wu();l.forEach(f=>{if(!r.has(f)){const d=bu(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return v.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return S.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):up(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):v.resolve(ue());let a=-1,c=r;return o.next(u=>v.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?v.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,R())).next(l=>({batchId:a,changes:vu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new S(n)).next(s=>{let i=an();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=an();return this.indexManager.getCollectionParents(t,i).next(o=>v.forEach(o,a=>{const c=function(u,l){return new Js(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ct.newInvalidDocument(u)))});let o=an();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&gn(u.mutation,c,It.empty(),Z.now()),ei(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class sg{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return v.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Rt(s.createTime)}),v.resolve()}getNamedQuery(t,n){return v.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Xp(s.bundledQuery),readTime:Rt(s.readTime)}}(n)),v.resolve()}}/**
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
 */class ig{constructor(){this.overlays=new z(S.comparator),this.ls=new Map}getOverlay(t,n){return v.resolve(this.overlays.get(n))}getOverlays(t,n){const s=ue();return v.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.we(t,n,r)}),v.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),v.resolve()}getOverlaysForCollection(t,n,s){const i=ue(),r=n.length+1,o=new S(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return v.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new z((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=ue(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ue(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return v.resolve(a)}we(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ap(n,s));let r=this.ls.get(n);r===void 0&&(r=R(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.fs=new dt(tt.ds),this.ws=new dt(tt._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new tt(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new tt(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new S(new B([])),s=new tt(n,t),i=new tt(n,t+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new S(new B([])),s=new tt(n,t),i=new tt(n,t+1);let r=R();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new tt(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class tt{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return S.comparator(t.key,n.key)||P(t.As,n.As)}static _s(t,n){return P(t.As,n.As)||S.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new dt(tt.ds)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bp(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new tt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(t,n){return v.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return v.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),v.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new dt(P);return n.forEach(i=>{const r=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),v.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;S.isDocumentKey(r)||(r=r.child(""));const o=new tt(new S(r),0);let a=new dt(P);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),v.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){U(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return v.forEach(n.mutations,i=>{const r=new tt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new tt(n,0),i=this.Rs.firstAfterOrEqual(s);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t){this.Ds=t,this.docs=new z(S.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return v.resolve(s?s.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(t,n){let s=qt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ct.newInvalidDocument(i))}),v.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=qt();const o=n.path,a=new S(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qd(jd(l),s)<=0||(i.has(l.key)||ei(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return v.resolve(r)}getAllFromCollectionGroup(t,n,s,i){C()}Cs(t,n){return v.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new ag(this)}getSize(t){return v.resolve(this.size)}}class ag extends tg{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(t,i)):this.os.removeEntry(s)}),v.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t){this.persistence=t,this.xs=new Ze(n=>zr(n),Hr),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Yr,this.targetCount=0,this.Ms=Ke.kn()}forEachTarget(t,n){return this.xs.forEach((s,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),v.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new Ke(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,v.resolve()}updateTargetData(t,n){return this.Fn(n),v.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),v.waitFor(r).next(()=>i)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return v.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),v.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),v.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),v.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return v.resolve(s)}containsKey(t,n){return v.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,n){this.$s={},this.overlays={},this.Os=new Ur(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new cg(this),this.indexManager=new Jp,this.remoteDocumentCache=function(s){return new og(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Yp(n),this.qs=new sg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ig,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new rg(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){_("MemoryPersistence","Starting transaction:",t);const i=new lg(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(t,n){return v.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class lg extends Hd{constructor(t){super(),this.currentSequenceNumber=t}}class Xr{constructor(t){this.persistence=t,this.Qs=new Yr,this.js=null}static zs(t){return new Xr(t)}get Ws(){if(this.js)return this.js;throw C()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),v.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),v.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),v.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ws,s=>{const i=S.fromPath(s);return this.Hs(t,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return v.or([()=>v.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(t,n){let s=R(),i=R();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Jr(t,n.fromCache,s,i)}}/**
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
 */class hg{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ki(t,n).next(r=>r||this.Gi(t,n,i,s)).next(r=>r||this.Qi(t,n))}Ki(t,n){if(Xo(n))return v.resolve(null);let s=jt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sr(n,null,"F"),s=jt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=R(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.ji(n,a);return this.zi(n,u,o,c.readTime)?this.Ki(t,sr(n,null,"F")):this.Wi(t,u,n,c)}))})))}Gi(t,n,s,i){return Xo(n)||i.isEqual(A.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(t,n):(jo()<=$.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ir(n)),this.Wi(t,o,n,Bd(i,-1)))})}ji(t,n){let s=new dt(mu(t));return n.forEach((i,r)=>{ei(t,r)&&(s=s.add(r))}),s}zi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,n){return jo()<=$.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ir(n)),this.Ui.getDocumentsMatchingQuery(t,n,Zt.min())}Wi(t,n,s,i){return this.Ui.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class fg{constructor(t,n,s,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new z(P),this.Yi=new Ze(r=>zr(r),Hr),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ng(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function dg(e,t,n,s){return new fg(e,t,n,s)}async function Fu(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=R();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function pg(e,t){const n=N(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=v.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);U(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Vu(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function gg(e,t){const n=N(e),s=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,l.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(pt.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),i=i.insert(h,d),function(p,m,g){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,d,l)&&a.push(n.Bs.updateTargetData(r,d))});let c=qt(),u=R();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(mg(r,o,t.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!s.isEqual(A.min())){const l=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return v.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Ji=i,r))}function mg(e,t,n){let s=R(),i=R();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=qt();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function yg(e,t){const n=N(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function vg(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,t).next(r=>r?(i=r,v.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Ht(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function ur(e,t,n){const s=N(e),i=s.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function ca(e,t,n){const s=N(e);let i=A.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=N(a),h=l.Yi.get(u);return h!==void 0?v.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(s,o,jt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?i:A.min(),n?r:R())).next(a=>(wg(s,lp(t),a),{documents:a,ir:r})))}function wg(e,t,n){let s=e.Xi.get(t)||A.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Xi.set(t,s)}class ua{constructor(){this.activeTargetIds=mp()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Eg{constructor(){this.Hr=new ua,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new ua,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */const ot="WebChannelConnection";class Ig extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,i,r){const o=ki(),a=this.To(t,n);_("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.Eo(c,i,r),this.Ao(t,a,c,s).then(u=>(_("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw Be("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}vo(t,n,s,i,r,o){return this.Io(t,n,s,i,r)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Je,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}To(t,n){const s=Tg[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,i){const r=ki();return new Promise((o,a)=>{const c=new Nd;c.setWithCredentials(!0),c.listenOnce(Ad.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ai.NO_ERROR:const l=c.getResponseJson();_(ot,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(l)),o(l);break;case Ai.TIMEOUT:_(ot,`RPC '${t}' ${r} timed out`),a(new T(y.DEADLINE_EXCEEDED,"Request time out"));break;case Ai.HTTP_ERROR:const h=c.getStatus();if(_(ot,`RPC '${t}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(g)>=0?g:y.UNKNOWN}(d.status);a(new T(p,d.message))}else a(new T(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new T(y.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{_(ot,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);_(ot,`RPC '${t}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}Ro(t,n,s){const i=ki(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Cd(),a=bd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new kd({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=r.join("");_(ot,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,d=!1;const p=new Sg({ro:g=>{d?_(ot,`Not sending because RPC '${t}' stream ${i} is closed:`,g):(f||(_(ot,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),_(ot,`RPC '${t}' stream ${i} sending:`,g),h.send(g))},oo:()=>h.close()}),m=(g,E,x)=>{g.listen(E,I=>{try{x(I)}catch(L){setTimeout(()=>{throw L},0)}})};return m(h,rs.EventType.OPEN,()=>{d||_(ot,`RPC '${t}' stream ${i} transport opened.`)}),m(h,rs.EventType.CLOSE,()=>{d||(d=!0,_(ot,`RPC '${t}' stream ${i} transport closed`),p.wo())}),m(h,rs.EventType.ERROR,g=>{d||(d=!0,Be(ot,`RPC '${t}' stream ${i} transport errored:`,g),p.wo(new T(y.UNAVAILABLE,"The operation could not be completed")))}),m(h,rs.EventType.MESSAGE,g=>{var E;if(!d){const x=g.data[0];U(!!x);const I=x,L=I.error||((E=I[0])===null||E===void 0?void 0:E.error);if(L){_(ot,`RPC '${t}' stream ${i} received error:`,L);const _t=L.status;let re=function(Tt){const yt=Q[Tt];if(yt!==void 0)return ku(yt)}(_t),G=L.message;re===void 0&&(re=y.INTERNAL,G="Unknown error status: "+_t+" with message "+L.message),d=!0,p.wo(new T(re,G)),h.close()}else _(ot,`RPC '${t}' stream ${i} received:`,x),p._o(x)}}),m(a,Dd.STAT_EVENT,g=>{g.stat===Uo.PROXY?_(ot,`RPC '${t}' stream ${i} detected buffering proxy`):g.stat===Uo.NOPROXY&&_(ot,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function Ni(){return typeof document<"u"?document:null}/**
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
 */class Uu{constructor(t,n,s=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,n,s,i,r,o,a,c){this.ii=t,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Uu(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Bt(n.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{t(()=>{const i=new T(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cg extends Bu{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=Vp(this.serializer,t),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?Rt(r.readTime):A.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=cr(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=nr(a)?{documents:jp(i,a)}:{query:qp(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Ru(i,r.resumeToken);const c=rr(i,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(A.min())>0){o.readTime=Rs(i,r.snapshotVersion.toTimestamp());const c=rr(i,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,t);const s=Hp(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=cr(this.serializer),n.removeTarget=t,this.Wo(n)}}class bg extends Bu{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(U(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Bp(t.writeResults,t.commitTime),s=Rt(t.commitTime);return this.listener.cu(s,n)}return U(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=cr(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Up(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new T(y.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(y.UNKNOWN,i.toString())})}vo(t,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(y.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Dg{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Bt(n),this.mu=!1):_("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ce(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.vu.add(4),await Xn(c),c.bu.set("Unknown"),c.vu.delete(4),await ai(c)}(this))})}),this.bu=new Dg(s,i)}}async function ai(e){if(Ce(e))for(const t of e.Ru)await t(!0)}async function Xn(e){for(const t of e.Ru)await t(!1)}function ju(e,t){const n=N(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),eo(n)?to(n):tn(n).Ko()&&Zr(n,t))}function qu(e,t){const n=N(e),s=tn(n);n.Au.delete(t),s.Ko()&&zu(n,t),n.Au.size===0&&(s.Ko()?s.jo():Ce(n)&&n.bu.set("Unknown"))}function Zr(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(A.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}tn(e).su(t)}function zu(e,t){e.Vu.qt(t),tn(e).iu(t)}function to(e){e.Vu=new Rp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),tn(e).start(),e.bu.gu()}function eo(e){return Ce(e)&&!tn(e).Uo()&&e.Au.size>0}function Ce(e){return N(e).vu.size===0}function Hu(e){e.Vu=void 0}async function Ng(e){e.Au.forEach((t,n)=>{Zr(e,t)})}async function xg(e,t){Hu(e),eo(e)?(e.bu.Iu(t),to(e)):e.bu.set("Unknown")}async function Rg(e,t,n){if(e.bu.set("Online"),t instanceof xu&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ms(e,s)}else if(t instanceof ds?e.Vu.Ht(t):t instanceof Nu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(A.min()))try{const s=await Vu(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),zu(i,a);const l=new Ht(u.target,a,c,u.sequenceNumber);Zr(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){_("RemoteStore","Failed to raise snapshot:",s),await Ms(e,s)}}async function Ms(e,t,n){if(!Wn(t))throw t;e.vu.add(1),await Xn(e),e.bu.set("Offline"),n||(n=()=>Vu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ai(e)})}function Ku(e,t){return t().catch(n=>Ms(e,n,t))}async function ci(e){const t=N(e),n=ee(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Mg(t);)try{const i=await yg(t.localStore,s);if(i===null){t.Eu.length===0&&n.jo();break}s=i.batchId,Og(t,i)}catch(i){await Ms(t,i)}Gu(t)&&Qu(t)}function Mg(e){return Ce(e)&&e.Eu.length<10}function Og(e,t){e.Eu.push(t);const n=ee(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Gu(e){return Ce(e)&&!ee(e).Uo()&&e.Eu.length>0}function Qu(e){ee(e).start()}async function Lg(e){ee(e).hu()}async function Pg(e){const t=ee(e);for(const n of e.Eu)t.uu(n.mutations)}async function $g(e,t,n){const s=e.Eu.shift(),i=Kr.from(s,t,n);await Ku(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ci(e)}async function Fg(e,t){t&&ee(e).ou&&await async function(n,s){if(i=s.code,kp(i)&&i!==y.ABORTED){const r=n.Eu.shift();ee(n).Qo(),await Ku(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ci(n)}var i}(e,t),Gu(e)&&Qu(e)}async function ha(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const s=Ce(n);n.vu.add(3),await Xn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ai(n)}async function Vg(e,t){const n=N(e);t?(n.vu.delete(2),await ai(n)):t||(n.vu.add(2),await Xn(n),n.bu.set("Unknown"))}function tn(e){return e.Su||(e.Su=function(t,n,s){const i=N(t);return i.fu(),new Cg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Ng.bind(null,e),ao:xg.bind(null,e),nu:Rg.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),eo(e)?to(e):e.bu.set("Unknown")):(await e.Su.stop(),Hu(e))})),e.Su}function ee(e){return e.Du||(e.Du=function(t,n,s){const i=N(t);return i.fu(),new bg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Lg.bind(null,e),ao:Fg.bind(null,e),au:Pg.bind(null,e),cu:$g.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await ci(e)):(await e.Du.stop(),e.Eu.length>0&&(_("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new no(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function so(e,t){if(Bt("AsyncQueue",`${t}: ${e}`),Wn(e))return new T(y.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.comparator=t?(n,s)=>t(n,s)||S.comparator(n.key,s.key):(n,s)=>S.comparator(n.key,s.key),this.keyedMap=an(),this.sortedSet=new z(this.comparator)}static emptySet(t){return new Ve(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class fa{constructor(){this.Cu=new z(S.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):C():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ge{constructor(t,n,s,i,r,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ge(t,n,Ve.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ti(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.Nu=void 0,this.listeners=[]}}class Bg{constructor(){this.queries=new Ze(t=>gu(t),ti),this.onlineState="Unknown",this.ku=new Set}}async function Wu(e,t){const n=N(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ug),i)try{r.Nu=await n.onListen(s)}catch(o){const a=so(o,`Initialization of query '${ir(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&io(n)}async function Yu(e,t){const n=N(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function jg(e,t){const n=N(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&io(n)}function qg(e,t,n){const s=N(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function io(e){e.ku.forEach(t=>{t.next()})}class Xu{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ge(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=Ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this.key=t}}class Zu{constructor(t){this.key=t}}class zg{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=R(),this.mutatedKeys=R(),this.tc=mu(t),this.ec=new Ve(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new fa,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const f=i.get(l),d=ei(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(s.track({type:3,doc:d}),g=!0):this.rc(f,d)||(s.track({type:2,doc:d}),g=!0,(c&&this.tc(d,c)>0||u&&this.tc(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),g=!0):f&&!d&&(s.track({type:1,doc:f}),g=!0,(c||u)&&(a=!0)),g&&(d?(o=o.add(d),r=m?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const r=t.ic.xu();r.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return d(h)-d(f)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new Ge(this.query,t.ec,i,r,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new fa,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=R(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new Zu(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new Ju(s))}),n}hc(t){this.Yu=t.ir,this.Zu=R();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return Ge.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Hg{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Kg{constructor(t){this.key=t,this.fc=!1}}class Gg{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ze(a=>gu(a),ti),this._c=new Map,this.mc=new Set,this.gc=new z(S.comparator),this.yc=new Map,this.Ic=new Yr,this.Tc={},this.Ec=new Map,this.Ac=Ke.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Qg(e,t){const n=im(e);let s,i;const r=n.wc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await vg(n.localStore,jt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Wg(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&ju(n.remoteStore,o)}return i}async function Wg(e,t,n,s,i){e.Rc=(h,f,d)=>async function(p,m,g,E){let x=m.view.sc(g);x.zi&&(x=await ca(p.localStore,m.query,!1).then(({documents:_t})=>m.view.sc(_t,x)));const I=E&&E.targetChanges.get(m.targetId),L=m.view.applyChanges(x,p.isPrimaryClient,I);return pa(p,m.targetId,L.cc),L.snapshot}(e,h,f,d);const r=await ca(e.localStore,t,!0),o=new zg(t,r.ir),a=o.sc(r.documents),c=Yn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);pa(e,n,u.cc);const l=new Hg(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function Yg(e,t){const n=N(e),s=n.wc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!ti(r,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ur(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),qu(n.remoteStore,s.targetId),lr(n,s.targetId)}).catch(Qn)):(lr(n,s.targetId),await ur(n.localStore,s.targetId,!0))}async function Xg(e,t,n){const s=rm(e);try{const i=await function(r,o){const a=N(r),c=Z.now(),u=o.reduce((f,d)=>f.add(d.key),R());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=qt(),p=R();return a.Zi.getEntries(f,u).next(m=>{d=m,d.forEach((g,E)=>{E.isValidDocument()||(p=p.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const g=[];for(const E of o){const x=Ip(E,l.get(E.key).overlayedDocument);x!=null&&g.push(new Ie(E.key,x,cu(x.value.mapValue),Pt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,g,o)}).next(m=>{h=m;const g=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,g)})}).then(()=>({batchId:h.batchId,changes:vu(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new z(P)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Jn(s,i.changes),await ci(s.remoteStore)}catch(i){const r=so(i,"Failed to persist write");n.reject(r)}}async function tl(e,t){const n=N(e);try{const s=await gg(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?U(o.fc):i.removedDocuments.size>0&&(U(o.fc),o.fc=!1))}),await Jn(n,s,t)}catch(s){await Qn(s)}}function da(e,t,n){const s=N(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&io(a)}(s.eventManager,t),i.length&&s.dc.nu(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Jg(e,t,n){const s=N(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.yc.get(t),r=i&&i.key;if(r){let o=new z(S.comparator);o=o.insert(r,ct.newNoDocument(r,A.min()));const a=R().add(r),c=new ri(A.min(),new Map,new z(P),o,a);await tl(s,c),s.gc=s.gc.remove(r),s.yc.delete(t),ro(s)}else await ur(s.localStore,t,!1).then(()=>lr(s,t,n)).catch(Qn)}async function Zg(e,t){const n=N(e),s=t.batch.batchId;try{const i=await pg(n.localStore,t);nl(n,s,null),el(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Jn(n,i)}catch(i){await Qn(i)}}async function tm(e,t,n){const s=N(e);try{const i=await function(r,o){const a=N(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(U(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);nl(s,t,n),el(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Jn(s,i)}catch(i){await Qn(i)}}function el(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function nl(e,t,n){const s=N(e);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.Tc[s.currentUser.toKey()]=i}}function lr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||sl(e,s)})}function sl(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(qu(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),ro(e))}function pa(e,t,n){for(const s of n)s instanceof Ju?(e.Ic.addReference(s.key,t),em(e,s)):s instanceof Zu?(_("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||sl(e,s.key)):C()}function em(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(_("SyncEngine","New document in limbo: "+n),e.mc.add(s),ro(e))}function ro(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new S(B.fromString(t)),s=e.Ac.next();e.yc.set(s,new Kg(n)),e.gc=e.gc.insert(n,s),ju(e.remoteStore,new Ht(jt(Zs(n.path)),s,"TargetPurposeLimboResolution",Ur.ct))}}async function Jn(e,t,n){const s=N(e),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Jr.Li(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,c){const u=N(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>v.forEach(c,h=>v.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>v.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Wn(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ji.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.Ji=u.Ji.insert(h,p)}}}(s.localStore,r))}async function nm(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const s=await Fu(n.localStore,t);n.currentUser=t,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new T(y.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Jn(n,s.er)}}function sm(e,t){const n=N(e),s=n.yc.get(t);if(s&&s.fc)return R().add(s.key);{let i=R();const r=n._c.get(t);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function im(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=tl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jg.bind(null,t),t.dc.nu=jg.bind(null,t.eventManager),t.dc.Pc=qg.bind(null,t.eventManager),t}function rm(e){const t=N(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Zg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tm.bind(null,t),t}class ga{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=oi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return dg(this.persistence,new hg,t.initialUser,this.serializer)}createPersistence(t){return new ug(Xr.zs,this.serializer)}createSharedClientState(t){return new Eg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class om{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>da(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=nm.bind(null,this.syncEngine),await Vg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Bg}createDatastore(t){const n=oi(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Ig(i));var i;return function(r,o,a,c){return new Ag(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>da(this.syncEngine,a,0),o=la.D()?new la:new _g,new kg(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const l=new Gg(s,i,r,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);_("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Xn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class il{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=ru.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{_("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(_("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=so(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function xi(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Fu(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ma(e,t){e.asyncQueue.verifyOperationInProgress();const n=await um(e);_("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>ha(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>ha(t.remoteStore,r)),e._onlineComponents=t}function cm(e){return e.name==="FirebaseError"?e.code===y.FAILED_PRECONDITION||e.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function um(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await xi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!cm(n))throw n;Be("Error using user provided cache. Falling back to memory cache: "+n),await xi(e,new ga)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await xi(e,new ga);return e._offlineComponents}async function rl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await ma(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await ma(e,new om))),e._onlineComponents}function lm(e){return rl(e).then(t=>t.syncEngine)}async function hr(e){const t=await rl(e),n=t.eventManager;return n.onListen=Qg.bind(null,t.syncEngine),n.onUnlisten=Yg.bind(null,t.syncEngine),n}function hm(e,t,n={}){const s=new Qt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new il({next:h=>{r.enqueueAndForget(()=>Yu(i,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new T(y.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new T(y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Xu(Zs(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Wu(i,l)}(await hr(e),e.asyncQueue,t,n,s)),s.promise}/**
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
 */function al(e,t,n){if(!n)throw new T(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fm(e,t,n,s){if(t===!0&&s===!0)throw new T(y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function va(e){if(!S.isDocumentKey(e))throw new T(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function wa(e){if(S.isDocumentKey(e))throw new T(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":C()}function Wt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oo(e);throw new T(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ea{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new T(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ol((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class ui{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ea({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ea(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Rd;switch(n.type){case"firstParty":return new Pd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ya.get(t);n&&(_("ComponentProvider","Removing Datastore"),ya.delete(t),n.terminate())}(this),Promise.resolve()}}function dm(e,t,n,s={}){var i;const r=(e=Wt(e,ui))._getSettings(),o=`${t}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=at.MOCK_USER;else{a=ch(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new T(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new at(u)}e._authCredentials=new Md(new iu(a,c))}}/**
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
 */class mt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class li{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new li(this.firestore,t,this._query)}}class Yt extends li{constructor(t,n,s){super(t,n,Zs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new S(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function pm(e,t,...n){if(e=Vt(e),al("collection","path",t),e instanceof ui){const s=B.fromString(t,...n);return wa(s),new Yt(e,null,s)}{if(!(e instanceof mt||e instanceof Yt))throw new T(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(B.fromString(t,...n));return wa(s),new Yt(e.firestore,null,s)}}function gm(e,t,...n){if(e=Vt(e),arguments.length===1&&(t=ru.A()),al("doc","path",t),e instanceof ui){const s=B.fromString(t,...n);return va(s),new mt(e,null,new S(s))}{if(!(e instanceof mt||e instanceof Yt))throw new T(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(B.fromString(t,...n));return va(s),new mt(e.firestore,e instanceof Yt?e.converter:null,new S(s))}}/**
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
 */class mm{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Uu(this,"async_queue_retry"),this.Xc=()=>{const n=Ni();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=Ni();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=Ni();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Qt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Wn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Bt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=no.createAndSchedule(this,t,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&C()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}function _a(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class On extends ui{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new mm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cl(this),this._firestoreClient.terminate()}}function ym(e,t){const n=typeof e=="object"?e:df(),s=typeof e=="string"?e:t||"(default)",i=uf(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=oh("firestore");r&&dm(i,...r)}return i}function ao(e){return e._firestoreClient||cl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function cl(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,c,u){return new Qd(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ol(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new am(e._authCredentials,e._appCheckCredentials,e._queue,r),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Qe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qe(pt.fromBase64String(t))}catch(n){throw new T(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qe(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class hi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new T(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class co{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new T(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new T(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=/^__.*__$/;class ul{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ie(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function ll(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class di{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new di(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.fa(t),i}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Os(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(ll(this.ca)&&vm.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class wm{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||oi(t)}ya(t,n,s,i=!1){return new di({ca:t,methodName:n,ga:s,path:ut.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Em(e){const t=e._freezeSettings(),n=oi(e._databaseId);return new wm(e._databaseId,!!t.ignoreUndefinedProperties,n)}class pi extends fi{_toFieldTransform(t){if(t.ca!==2)throw t.ca===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof pi}}function _m(e,t,n){return new di({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Tm extends fi{constructor(t,n){super(t),this.pa=n}_toFieldTransform(t){const n=_m(this,t,!0),s=this.pa.map(r=>Zn(r,n)),i=new He(s);return new Ep(t.path,i)}isEqual(t){return this===t}}function Sm(e,t,n,s){const i=e.ya(1,t,n);fl("Data must be an object, but it was:",i,s);const r=[],o=vt.empty();Se(s,(c,u)=>{const l=uo(t,c,n);u=Vt(u);const h=i.da(l);if(u instanceof pi)r.push(l);else{const f=Zn(u,h);f!=null&&(r.push(l),o.set(l,f))}});const a=new It(r);return new ul(o,a,i.fieldTransforms)}function Im(e,t,n,s,i,r){const o=e.ya(1,t,n),a=[Ta(t,s,n)],c=[i];if(r.length%2!=0)throw new T(y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Ta(t,r[f])),c.push(r[f+1]);const u=[],l=vt.empty();for(let f=a.length-1;f>=0;--f)if(!Am(u,a[f])){const d=a[f];let p=c[f];p=Vt(p);const m=o.da(d);if(p instanceof pi)u.push(d);else{const g=Zn(p,m);g!=null&&(u.push(d),l.set(d,g))}}const h=new It(u);return new ul(l,h,o.fieldTransforms)}function Zn(e,t){if(hl(e=Vt(e)))return fl("Unsupported field value:",t,e),Cm(e,t);if(e instanceof fi)return function(n,s){if(!ll(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Zn(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=Vt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Z.fromDate(n);return{timestampValue:Rs(s.serializer,i)}}if(n instanceof Z){const i=new Z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Rs(s.serializer,i)}}if(n instanceof co)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qe)return{bytesValue:Ru(s.serializer,n._byteString)};if(n instanceof mt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${oo(n)}`)}(e,t)}function Cm(e,t){const n={};return ou(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(e,(s,i)=>{const r=Zn(i,t.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function hl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Z||e instanceof co||e instanceof Qe||e instanceof mt||e instanceof fi)}function fl(e,t,n){if(!hl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=oo(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function Ta(e,t,n){if((t=Vt(t))instanceof hi)return t._internalPath;if(typeof t=="string")return uo(e,t);throw Os("Field path arguments must be of type string or ",e,!1,void 0,n)}const bm=new RegExp("[~\\*/\\[\\]]");function uo(e,t,n){if(t.search(bm)>=0)throw Os(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hi(...t.split("."))._internalPath}catch{throw Os(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Os(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new T(y.INVALID_ARGUMENT,a+e+c)}function Am(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class dl{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(pl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dm extends dl{data(){return super.data()}}function pl(e,t){return typeof t=="string"?uo(e,t):t instanceof hi?t._internalPath:t._delegate._internalPath}/**
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
 */function km(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new T(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nm{convertValue(t,n="none"){switch(ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(me(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw C()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Se(t,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new co(W(t.latitude),W(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=jr(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Nn(t));default:return null}}convertTimestamp(t){const n=te(t);return new Z(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=B.fromString(t);U($u(s));const i=new xn(s.get(1),s.get(3)),r=new S(s.popFirst(5));return i.isEqual(n)||Bt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class un{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gl extends dl{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(pl("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ps extends gl{data(t={}){return super.data(t)}}class xm{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new un(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new ps(this._firestore,this._userDataWriter,s.key,s,new un(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ps(s._firestore,s._userDataWriter,o.doc.key,o.doc,new un(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ps(s._firestore,s._userDataWriter,o.doc.key,o.doc,new un(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Rm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}/**
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
 */function Mm(e){e=Wt(e,mt);const t=Wt(e.firestore,On);return hm(ao(t),e._key).then(n=>yl(t,e,n))}class ml extends Nm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function Om(e,t,n,...s){e=Wt(e,mt);const i=Wt(e.firestore,On),r=Em(i);let o;return o=typeof(t=Vt(t))=="string"||t instanceof hi?Im(r,"updateDoc",e._key,t,n,s):Sm(r,"updateDoc",e._key,t),Pm(i,[o.toMutation(e._key,Pt.exists(!0))])}function Lm(e,...t){var n,s,i;e=Vt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||_a(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(_a(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(e instanceof mt)u=Wt(e.firestore,On),l=Zs(e._key.path),c={next:h=>{t[o]&&t[o](yl(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Wt(e,li);u=Wt(h.firestore,On),l=h._query;const f=new ml(u);c={next:d=>{t[o]&&t[o](new xm(u,f,h,d))},error:t[o+1],complete:t[o+2]},km(e._query)}return function(h,f,d,p){const m=new il(p),g=new Xu(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>Wu(await hr(h),g)),()=>{m.Dc(),h.asyncQueue.enqueueAndForget(async()=>Yu(await hr(h),g))}}(ao(u),l,a,c)}function Pm(e,t){return function(n,s){const i=new Qt;return n.asyncQueue.enqueueAndForget(async()=>Xg(await lm(n),s,i)),i.promise}(ao(e),t)}function yl(e,t,n){const s=n.docs.get(t._key),i=new ml(e);return new gl(e,i,t._key,s,new un(n.hasPendingWrites,n.fromCache),t.converter)}function $m(...e){return new Tm("arrayUnion",e)}(function(e,t=!0){(function(n){Je=n})(ff),Es(new wn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new On(new Od(n.getProvider("auth-internal")),new Fd(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Le(Bo,"3.13.0",e),Le(Bo,"3.13.0","esm2017")})();const Fm={apiKey:"AIzaSyCDqpSA_-xEwVkbj-EBwPHNYiSvJO6ULOY",authDomain:"wedding-photos-challenge.firebaseapp.com",projectId:"wedding-photos-challenge",storageBucket:"wedding-photos-challenge.appspot.com",messagingSenderId:"1095306889273",appId:"1:1095306889273:web:2f1ac74abc6fb029f1a5e8",measurementId:"G-3V15Z3EV3R"},Vm=Za(Fm),Sa=ym(Vm);function lo(e){const t=e-1;return t*t*t+1}function Ia(e){return--e*e*e*e*e+1}function Um(e,{delay:t=0,duration:n=400,easing:s=ve}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Bm(e,{delay:t=0,duration:n=400,easing:s=lo,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o),[h,f]=go(i),[d,p]=go(r);return{delay:t,duration:n,easing:s,css:(m,g)=>`
			transform: ${u} translate(${(1-m)*h}${f}, ${(1-m)*d}${p});
			opacity: ${c-l*g}`}}function Ca(e,{delay:t=0,duration:n=400,easing:s=lo,start:i=0,opacity:r=0}={}){const o=getComputedStyle(e),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-i,l=a*(1-r);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} scale(${1-u*f});
			opacity: ${a-l*f}
		`}}function jm(e,{from:t,to:n},s={}){const i=getComputedStyle(e),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=lo}=s;return{delay:l,duration:we(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const m=p*c,g=p*u,E=d+p*t.width/n.width,x=d+p*t.height/n.height;return`transform: ${r} translate(${m}px, ${g}px) scale(${E}, ${x});`}}}const De=[];function ho(e,t=q){let n;const s=new Set;function i(a){if(ne(e,a)&&(e=a,n)){const c=!De.length;for(const u of s)u[1](),De.push(u,e);if(c){for(let u=0;u<De.length;u+=2)De[u][0](De[u+1]);De.length=0}}}function r(a){i(a(e))}function o(a,c=q){const u=[a,c];return s.add(u),s.size===1&&(n=t(i)||q),a(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const qm={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},zm=()=>{const{subscribe:e,update:t}=ho([]);let n=0;const s={},i=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...i(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...qm,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(i(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=i(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},le=zm();function ba(e){return Object.prototype.toString.call(e)==="[object Date]"}function fr(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((i,r)=>fr(e[r],i));return i=>s.map(r=>r(i))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ba(e)&&ba(t)){e=e.getTime(),t=t.getTime();const r=t-e;return o=>new Date(e+o*r)}const s=Object.keys(t),i={};return s.forEach(r=>{i[r]=fr(e[r],t[r])}),r=>{const o={};return s.forEach(a=>{o[a]=i[a](r)}),o}}if(n==="number"){const s=t-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${n} values`)}function Hm(e,t={}){const n=ho(e);let s,i=e;function r(o,a){if(e==null)return n.set(e=o),Promise.resolve();i=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=ve,interpolate:d=fr}=Ri(Ri({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=i),Promise.resolve();const p=Ln()+l;let m;return s=Pn(g=>{if(g<p)return!0;u||(m=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const E=g-p;return E>h?(n.set(e=o),!1):(n.set(e=m(f(E/h))),!0)}),s.promise}return{set:r,update:(o,a)=>r(o(i,e),a),subscribe:n.subscribe}}function Km(e){let t,n=e[0].msg+"",s;return{c(){t=new kl(!1),s=Ls(),t.a=s},m(i,r){t.m(n,i,r),H(i,s,r)},p(i,r){r&1&&n!==(n=i[0].msg+"")&&t.p(n)},i:q,o:q,d(i){i&&j(s),i&&t.d()}}}function Gm(e){let t,n,s;const i=[e[2]];var r=e[0].component.src;function o(a){let c={};for(let u=0;u<i.length;u+=1)c=Ri(c,i[u]);return{props:c}}return r&&(t=yo(r,o())),{c(){t&&Jt(t.$$.fragment),n=Ls()},m(a,c){t&&$t(t,a,c),H(a,n,c),s=!0},p(a,c){const u=c&4?Gl(i,[Ql(a[2])]):{};if(c&1&&r!==(r=a[0].component.src)){if(t){$n();const l=t;lt(l.$$.fragment,1,0,()=>{Ft(l,1)}),Fn()}r?(t=yo(r,o()),Jt(t.$$.fragment),X(t.$$.fragment,1),$t(t,n.parentNode,n)):t=null}else r&&t.$set(u)},i(a){s||(t&&X(t.$$.fragment,a),s=!0)},o(a){t&&lt(t.$$.fragment,a),s=!1},d(a){a&&j(n),t&&Ft(t,a)}}}function Aa(e){let t,n,s;return{c(){t=O("div"),k(t,"class","_toastBtn pe svelte-l65oht"),k(t,"role","button"),k(t,"tabindex","0")},m(i,r){H(i,t,r),n||(s=[Ct(t,"click",e[4]),Ct(t,"keydown",e[8])],n=!0)},p:q,d(i){i&&j(t),n=!1,Et(s)}}}function Qm(e){let t,n,s,i,r,o,a,c,u,l;const h=[Gm,Km],f=[];function d(m,g){return m[0].component?0:1}s=d(e),i=f[s]=h[s](e);let p=e[0].dismissable&&Aa(e);return{c(){t=O("div"),n=O("div"),i.c(),r=Y(),p&&p.c(),o=Y(),a=O("progress"),k(n,"role","status"),k(n,"class","_toastMsg svelte-l65oht"),zt(n,"pe",e[0].component),k(a,"class","_toastBar svelte-l65oht"),a.value=e[1],k(t,"class","_toastItem svelte-l65oht"),zt(t,"pe",e[0].pausable)},m(m,g){H(m,t,g),D(t,n),f[s].m(n,null),D(t,r),p&&p.m(t,null),D(t,o),D(t,a),c=!0,u||(l=[Ct(t,"mouseenter",e[9]),Ct(t,"mouseleave",e[6])],u=!0)},p(m,[g]){let E=s;s=d(m),s===E?f[s].p(m,g):($n(),lt(f[E],1,1,()=>{f[E]=null}),Fn(),i=f[s],i?i.p(m,g):(i=f[s]=h[s](m),i.c()),X(i,1),i.m(n,null)),(!c||g&1)&&zt(n,"pe",m[0].component),m[0].dismissable?p?p.p(m,g):(p=Aa(m),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||g&2)&&(a.value=m[1]),(!c||g&1)&&zt(t,"pe",m[0].pausable)},i(m){c||(X(i),c=!0)},o(m){lt(i),c=!1},d(m){m&&j(t),f[s].d(),p&&p.d(),u=!1,Et(l)}}}function Wm(e,t,n){let s,{item:i}=t;const r=Hm(i.initial,{duration:i.duration,easing:ve});Fa(e,r,I=>n(1,s=I));const o=()=>le.pop(i.id),a=()=>{(s===1||s===0)&&o()};let c=i.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(r.set(s,{duration:0}),l=!0)},f=()=>{if(l){const I=i.duration,L=I-I*((s-u)/(c-u));r.set(c,{duration:L}).then(a),l=!1}};let d={};const p=(I,L="undefined")=>typeof I===L;let m;Ll((I=document)=>{if(p(I.hidden))return;const L=()=>I.hidden?h():f(),_t="visibilitychange";I.addEventListener(_t,L),m=()=>I.removeEventListener(_t,L),L()}),Pl(()=>{p(i.onpop,"function")&&i.onpop(i.id),m&&m()});const E=I=>{I instanceof KeyboardEvent&&["Enter"," "].includes(I.key)&&o()},x=()=>{i.pausable&&h()};return e.$$set=I=>{"item"in I&&n(0,i=I.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(i.progress)||n(0,i.next=i.progress,i)),e.$$.dirty&131&&c!==i.next&&(n(7,c=i.next),u=s,l=!1,r.set(c).then(a)),e.$$.dirty&1&&i.component){const{props:I={},sendIdTo:L}=i.component;n(2,d={...I,...L&&{[L]:i.id}})}},[i,s,d,r,o,h,f,c,E,x]}class Ym extends _e{constructor(t){super(),Ee(this,t,Wm,Qm,ne,{item:0})}}function Da(e,t,n){const s=e.slice();return s[5]=t[n],s}function ka(e,t){let n,s,i,r,o,a,c,u,l=q,h;return s=new Ym({props:{item:t[5]}}),{key:e,first:null,c(){n=O("li"),Jt(s.$$.fragment),i=Y(),k(n,"class",r=po(t[5].classes.join(" "))+" svelte-yh90az"),k(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){H(f,n,d),$t(s,n,null),D(n,i),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&r!==(r=po(t[5].classes.join(" "))+" svelte-yh90az"))&&k(n,"class",r),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&k(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){Ol(n),l(),ja(n,u)},a(){l(),l=Ml(n,u,jm,{duration:200})},i(f){h||(X(s.$$.fragment,f),Xt(()=>{!h||(c&&c.end(1),a=jl(n,Bm,t[5].intro),a.start())}),h=!0)},o(f){lt(s.$$.fragment,f),a&&a.invalidate(),c=ql(n,Um,{}),h=!1},d(f){f&&j(n),Ft(s),f&&c&&c.end()}}}function Xm(e){let t,n=[],s=new Map,i,r=e[0];const o=a=>a[5].id;for(let a=0;a<r.length;a+=1){let c=Da(e,r,a),u=o(c);s.set(u,n[a]=ka(u,c))}return{c(){t=O("ul");for(let a=0;a<n.length;a+=1)n[a].c();k(t,"class","_toastContainer svelte-yh90az")},m(a,c){H(a,t,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);i=!0},p(a,[c]){if(c&3){r=a[0],$n();for(let u=0;u<n.length;u+=1)n[u].r();n=Kl(n,c,o,1,a,r,s,t,Hl,ka,null,Da);for(let u=0;u<n.length;u+=1)n[u].a();Fn()}},i(a){if(!i){for(let c=0;c<r.length;c+=1)X(n[c]);i=!0}},o(a){for(let c=0;c<n.length;c+=1)lt(n[c]);i=!1},d(a){a&&j(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function Jm(e,t,n){let s;Fa(e,le,c=>n(4,s=c));let{options:i={}}=t,{target:r="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,i=c.options),"target"in c&&n(3,r=c.target)},e.$$.update=()=>{e.$$.dirty&12&&le._init(r,i),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===r))},[o,a,i,r,s]}class Zm extends _e{constructor(t){super(),Ee(this,t,Jm,Xm,ne,{options:2,target:3})}}function ty(e){const t=n=>{e&&!e.contains(n.target)&&!n.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function Na(e,t,n){const s=e.slice();return s[7]=t[n],s}function xa(e){let t,n,s,i,r,o,a,c,u,l=e[2],h=[];for(let f=0;f<l.length;f+=1)h[f]=Ra(Na(e,l,f));return{c(){t=O("table"),n=O("caption"),n.textContent="Leaderboard",s=Y(),i=O("tr"),i.innerHTML=`<th class="svelte-pu99uf">Name</th> 
            <th class="svelte-pu99uf">Challenges Completed</th>`,r=Y();for(let f=0;f<h.length;f+=1)h[f].c();k(n,"class","svelte-pu99uf"),k(i,"class","svelte-pu99uf"),k(t,"class","leaderboard svelte-pu99uf")},m(f,d){H(f,t,d),D(t,n),D(t,s),D(t,i),D(t,r);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(t,null);a=!0,c||(u=[Tl(ty.call(null,t)),Ct(t,"click_outside",e[3])],c=!0)},p(f,d){if(e=f,d&4){l=e[2];let p;for(p=0;p<l.length;p+=1){const m=Na(e,l,p);h[p]?h[p].p(m,d):(h[p]=Ra(m),h[p].c(),h[p].m(t,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=l.length}},i(f){a||(Xt(()=>{!a||(o||(o=vo(t,Ca,{duration:250,opacity:.5,easing:Ia},!0)),o.run(1))}),a=!0)},o(f){o||(o=vo(t,Ca,{duration:250,opacity:.5,easing:Ia},!1)),o.run(0),a=!1},d(f){f&&j(t),Cl(h,f),f&&o&&o.end(),c=!1,Et(u)}}}function Ra(e){let t,n,s=e[7].name+"",i,r,o,a=e[7].challenges_completed+"",c,u;return{c(){t=O("tr"),n=O("td"),i=xt(s),r=Y(),o=O("td"),c=xt(a),u=Y(),k(n,"class","leaderboard-name svelte-pu99uf"),k(o,"class","svelte-pu99uf"),k(t,"class","svelte-pu99uf")},m(l,h){H(l,t,h),D(t,n),D(n,i),D(t,r),D(t,o),D(o,c),D(t,u)},p(l,h){h&4&&s!==(s=l[7].name+"")&&de(i,s),h&4&&a!==(a=l[7].challenges_completed+"")&&de(c,a)},d(l){l&&j(t)}}}function ey(e){let t,n,s,i,r,o,a=e[0]&&xa(e);return{c(){t=O("div"),t.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-pu99uf"/>',n=Y(),a&&a.c(),s=Ls(),k(t,"class","icon svelte-pu99uf")},m(c,u){H(c,t,u),e[6](t),H(c,n,u),a&&a.m(c,u),H(c,s,u),i=!0,r||(o=Ct(t,"click",e[3]),r=!0)},p(c,[u]){c[0]?a?(a.p(c,u),u&1&&X(a,1)):(a=xa(c),a.c(),X(a,1),a.m(s.parentNode,s)):a&&($n(),lt(a,1,1,()=>{a=null}),Fn())},i(c){i||(X(a),i=!0)},o(c){lt(a),i=!1},d(c){c&&j(t),e[6](null),c&&j(n),a&&a.d(c),c&&j(s),r=!1,o()}}}function ny(e,t,n){let s,{challengeList:i=[]}=t,r={},o=!1,a;function c(){n(0,o=!o),o?n(1,a.style["pointer-events"]="none",a):n(1,a.style["pointer-events"]="all",a)}function u(l){ys[l?"unshift":"push"](()=>{a=l,n(1,a)})}return e.$$set=l=>{"challengeList"in l&&n(4,i=l.challengeList)},e.$$.update=()=>{e.$$.dirty&48&&(n(5,r={}),i.forEach(l=>{l.completed.forEach(h=>{r[h]?n(5,r[h]++,r):n(5,r[h]=1,r)})})),e.$$.dirty&32&&n(2,s=Object.keys(r).map(l=>({name:l,challenges_completed:r[l]})).sort((l,h)=>h.challenges_completed-l.challenges_completed))},[o,a,s,c,i,r,u]}class sy extends _e{constructor(t){super(),Ee(this,t,ny,ey,ne,{challengeList:4})}}function iy(e){let t,n,s,i;return{c(){t=O("p"),n=xt(e[1]),s=xt("/"),i=xt(e[0]),k(t,"id","complete-box"),k(t,"class","card-back svelte-7h3phk")},m(r,o){H(r,t,o),D(t,n),D(t,s),D(t,i)},p(r,[o]){o&2&&de(n,r[1]),o&1&&de(i,r[0])},i:q,o:q,d(r){r&&j(t)}}}function ry(e,t,n){let{total:s}=t,{completed:i}=t;return e.$$set=r=>{"total"in r&&n(0,s=r.total),"completed"in r&&n(1,i=r.completed)},[s,i]}class oy extends _e{constructor(t){super(),Ee(this,t,ry,iy,ne,{total:0,completed:1})}}function Ma(e){let t,n,s,i,r=e[1].name+"",o,a,c,u,l,h=(e[1].completed.length>0?e[1].completed.join(", "):"Not completed by anyone yet!")+"",f;return{c(){t=O("div"),n=O("h2"),n.textContent="Take a photo...",s=Y(),i=O("h1"),o=xt(r),a=Y(),c=O("h2"),c.textContent="Completed by:",u=Y(),l=O("h3"),f=xt(h),k(i,"class","challenge svelte-17ixlkb"),k(l,"class","svelte-17ixlkb"),zt(l,"completers",e[1].completed.length>0),k(t,"class","challenge-block svelte-17ixlkb")},m(d,p){H(d,t,p),D(t,n),D(t,s),D(t,i),D(i,o),D(t,a),D(t,c),D(t,u),D(t,l),D(l,f)},p(d,p){p&2&&r!==(r=d[1].name+"")&&de(o,r),p&2&&h!==(h=(d[1].completed.length>0?d[1].completed.join(", "):"Not completed by anyone yet!")+"")&&de(f,h),p&2&&zt(l,"completers",d[1].completed.length>0)},d(d){d&&j(t)}}}function ay(e){let t,n,s,i,r,o,a,c,u,l,h,f,d,p;t=new oy({props:{total:e[2].length,completed:e[3]}}),s=new sy({props:{challengeList:e[2]}});let m=e[1]&&e[1].name&&e[1].completed&&Ma(e);return{c(){Jt(t.$$.fragment),n=Y(),Jt(s.$$.fragment),i=Y(),r=O("div"),o=O("div"),m&&m.c(),a=Y(),c=O("div"),u=O("button"),u.innerHTML="<span>\u{1F503}</span>",l=Y(),h=O("button"),h.innerHTML="<span>\u2705</span>",k(u,"class","svelte-17ixlkb"),k(h,"class","svelte-17ixlkb"),k(c,"class","buttons svelte-17ixlkb"),k(o,"class","heading card-back svelte-17ixlkb"),zt(o,"green",e[1].completed.includes(e[0])),k(r,"class","container svelte-17ixlkb")},m(g,E){$t(t,g,E),H(g,n,E),$t(s,g,E),H(g,i,E),H(g,r,E),D(r,o),m&&m.m(o,null),D(o,a),D(o,c),D(c,u),D(c,l),D(c,h),f=!0,d||(p=[Ct(u,"click",e[4]),Ct(h,"click",e[5])],d=!0)},p(g,[E]){const x={};E&4&&(x.total=g[2].length),E&8&&(x.completed=g[3]),t.$set(x);const I={};E&4&&(I.challengeList=g[2]),s.$set(I),g[1]&&g[1].name&&g[1].completed?m?m.p(g,E):(m=Ma(g),m.c(),m.m(o,a)):m&&(m.d(1),m=null),(!f||E&3)&&zt(o,"green",g[1].completed.includes(g[0]))},i(g){f||(X(t.$$.fragment,g),X(s.$$.fragment,g),f=!0)},o(g){lt(t.$$.fragment,g),lt(s.$$.fragment,g),f=!1},d(g){Ft(t,g),g&&j(n),Ft(s,g),g&&j(i),g&&j(r),m&&m.d(),d=!1,Et(p)}}}let Oa="halloween";function cy(e,t,n){let{name:s}=t,i={id:"",name:"Loading...",completed:[]},r=[],o=0,a=[],c=6;const u=pm(Sa,Oa);Lm(u,f=>{n(3,o=0),n(2,r=[]),f.forEach(d=>{r.push({id:d.id,name:d.data().name,completed:d.data().completed}),i&&i.id&&i.id==d.id&&n(1,i={id:d.id,name:d.data().name,completed:d.data().completed}),d.data().completed.includes(s)&&n(3,o+=1)}),(!i||i.name=="Loading...")&&l(),c>=r.length&&(c=r.length-1)});function l(){let f=i;for(;i.id==f.id||a.includes(i.id);)n(1,i=r[Math.floor(Math.random()*r.length)]);a.push(i.id),a.length>c&&a.shift()}async function h(){if(confirm("Mark this challenge as completed?")){if(i.completed.includes(s)){le.push("\u{1F6A7} Challenge already completed!");return}try{const f=gm(Sa,Oa,i.id);(await Mm(f)).exists()?await Om(f,{completed:$m(s)}).then(()=>{le.push("\u2705 Challenge completed!"),l()}):le.push("\u{1F6A8} Unable to complete challenge, try again or refresh!")}catch{le.push("\u{1F6A8} Unable to complete challenge, try again or refresh!")}}}return e.$$set=f=>{"name"in f&&n(0,s=f.name)},[s,i,r,o,l,h]}class uy extends _e{constructor(t){super(),Ee(this,t,cy,ay,ne,{name:0})}}const vl=(e,t)=>{const n=c=>JSON.stringify(c,null,2),s=JSON.parse;localStorage.getItem(e)===null&&localStorage.setItem(e,n(t));const i=s(localStorage.getItem(e)),{subscribe:r,set:o,update:a}=ho(i);return{subscribe:r,set:c=>(localStorage.setItem(e,n(c)),o(c)),update:a}},wl="",La=vl("pc-name",wl);vl("pc-tutorial",wl);function ly(e){let t,n,s,i,r,o,a,c,u;return{c(){t=O("div"),n=O("div"),s=O("label"),s.innerHTML='What&#39;s your team name? <span class="subtitle svelte-1bsenj1"><br/>Make sure it&#39;s unique!</span>',i=Y(),r=O("input"),o=Y(),a=O("button"),a.textContent="Let's go!",k(s,"for","name-input"),k(s,"class","svelte-1bsenj1"),k(r,"id","name-input"),k(r,"placeholder","Type your team name here!"),k(r,"type","text"),k(r,"class","svelte-1bsenj1"),k(a,"class","svelte-1bsenj1"),k(n,"class","card-back"),k(t,"id","name-container"),k(t,"class","svelte-1bsenj1")},m(l,h){H(l,t,h),D(t,n),D(n,s),D(n,i),D(n,r),mo(r,e[1]),D(n,o),D(n,a),c||(u=[Ct(r,"input",e[4]),Ct(a,"click",e[2])],c=!0)},p(l,h){h&2&&r.value!==l[1]&&mo(r,l[1])},d(l){l&&j(t),c=!1,Et(u)}}}function hy(e){let t,n,s,i,r,o;return{c(){t=O("p"),n=xt(e[0]),s=Y(),i=O("span"),i.textContent="Change",k(i,"class","svelte-1bsenj1"),k(t,"id","logged-in"),k(t,"class","card-back svelte-1bsenj1")},m(a,c){H(a,t,c),D(t,n),D(t,s),D(t,i),r||(o=Ct(i,"click",e[3]),r=!0)},p(a,c){c&1&&de(n,a[0])},d(a){a&&j(t),r=!1,o()}}}function fy(e){let t;function n(r,o){return r[0]!=""?hy:ly}let s=n(e),i=s(e);return{c(){i.c(),t=Ls()},m(r,o){i.m(r,o),H(r,t,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(t.parentNode,t)))},i:q,o:q,d(r){i.d(r),r&&j(t)}}}function dy(e,t,n){let{nameVal:s}=t;La.subscribe(c=>{n(0,s=c)});let i="";function r(){n(1,i=i.toLowerCase()),La.set(i)}function o(){n(1,i=""),r()}function a(){i=this.value,n(1,i)}return e.$$set=c=>{"nameVal"in c&&n(0,s=c.nameVal)},[s,i,r,o,a]}class py extends _e{constructor(t){super(),Ee(this,t,dy,fy,ne,{nameVal:0})}}function Pa(e){let t,n;return t=new uy({props:{name:e[0]}}),{c(){Jt(t.$$.fragment)},m(s,i){$t(t,s,i),n=!0},p(s,i){const r={};i&1&&(r.name=s[0]),t.$set(r)},i(s){n||(X(t.$$.fragment,s),n=!0)},o(s){lt(t.$$.fragment,s),n=!1},d(s){Ft(t,s)}}}function gy(e){let t,n,s,i,r,o;function a(l){e[1](l)}let c={};e[0]!==void 0&&(c.nameVal=e[0]),t=new py({props:c}),ys.push(()=>Wl(t,"nameVal",a));let u=e[0]!=""&&Pa(e);return r=new Zm({}),{c(){Jt(t.$$.fragment),s=Y(),u&&u.c(),i=Y(),Jt(r.$$.fragment)},m(l,h){$t(t,l,h),H(l,s,h),u&&u.m(l,h),H(l,i,h),$t(r,l,h),o=!0},p(l,[h]){const f={};!n&&h&1&&(n=!0,f.nameVal=l[0],Vl(()=>n=!1)),t.$set(f),l[0]!=""?u?(u.p(l,h),h&1&&X(u,1)):(u=Pa(l),u.c(),X(u,1),u.m(i.parentNode,i)):u&&($n(),lt(u,1,1,()=>{u=null}),Fn())},i(l){o||(X(t.$$.fragment,l),X(u),X(r.$$.fragment,l),o=!0)},o(l){lt(t.$$.fragment,l),lt(u),lt(r.$$.fragment,l),o=!1},d(l){Ft(t,l),l&&j(s),u&&u.d(l),l&&j(i),Ft(r,l)}}}function my(e,t,n){let s="";function i(r){s=r,n(0,s)}return[s,i]}class yy extends _e{constructor(t){super(),Ee(this,t,my,gy,ne,{})}}new yy({target:document.getElementById("app")});
