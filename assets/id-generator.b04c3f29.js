import{c as je,h as Le,v as Yl,g as Qi,i as Jl,j as ei,u as Zl,k as ec,a as tc,f as Wi,l as nc,m as sc,n as rc,o as Yn,p as ic}from"./QBtn.64cc4707.js";import{c as M,h as P,g as Re,k as nt,Z as Xi,w as fe,o as Cn,l as Oe,s as He,m as it,B as an,_ as oc,$ as Ts,r as J,N as pa,a0 as ac,a as uc,a1 as ya,a2 as lc,a3 as ti,a4 as cc,a5 as va,j as hc,x as Gt,Y as Tr,a6 as dc,y as Yi,D as fc,a7 as Ji,b as mc,a8 as gc}from"./index.f4050aec.js";const Cs={dark:{type:Boolean,default:null}};function Ss(t,e){return M(()=>t.dark===null?e.dark.isActive:t.dark)}var ny=je({name:"QList",props:{...Cs,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Re(),s=Ss(t,n.proxy.$q),r=M(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>P(t.tag,{class:r.value},Le(e.default))}});function pc(t,e,n){let s;function r(){s!==void 0&&(Xi.remove(s),s=void 0)}return nt(()=>{t.value===!0&&r()}),{removeFromHistory:r,addToHistory(){s={condition:()=>n.value===!0,handler:e},Xi.add(s)}}}const yc={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},vc=["beforeShow","show","beforeHide","hide"];function wc({showing:t,canShow:e,hideOnRouteChange:n,handleShow:s,handleHide:r,processOnMount:i}){const o=Re(),{props:a,emit:u,proxy:l}=o;let c;function h(S){t.value===!0?v(S):f(S)}function f(S){if(a.disable===!0||S!==void 0&&S.qAnchorHandled===!0||e!==void 0&&e(S)!==!0)return;const I=a["onUpdate:modelValue"]!==void 0;I===!0&&(u("update:modelValue",!0),c=S,Oe(()=>{c===S&&(c=void 0)})),(a.modelValue===null||I===!1)&&d(S)}function d(S){t.value!==!0&&(t.value=!0,u("beforeShow",S),s!==void 0?s(S):u("show",S))}function v(S){if(a.disable===!0)return;const I=a["onUpdate:modelValue"]!==void 0;I===!0&&(u("update:modelValue",!1),c=S,Oe(()=>{c===S&&(c=void 0)})),(a.modelValue===null||I===!1)&&T(S)}function T(S){t.value!==!1&&(t.value=!1,u("beforeHide",S),r!==void 0?r(S):u("hide",S))}function C(S){a.disable===!0&&S===!0?a["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):S===!0!==t.value&&(S===!0?d:T)(c)}fe(()=>a.modelValue,C),n!==void 0&&Yl(o)===!0&&fe(()=>l.$route.fullPath,()=>{n.value===!0&&t.value===!0&&v()}),i===!0&&Cn(()=>{C(a.modelValue)});const U={show:f,hide:v,toggle:h};return Object.assign(l,U),U}const Ec=[null,document,document.body,document.scrollingElement,document.documentElement];function sy(t,e){let n=Jl(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return Ec.includes(n)?window:n}function bc(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Tc(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let Bn;function ry(){if(Bn!==void 0)return Bn;const t=document.createElement("p"),e=document.createElement("div");Qi(t,{width:"100%",height:"200px"}),Qi(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let s=t.offsetWidth;return n===s&&(s=e.clientWidth),e.remove(),Bn=n-s,Bn}function Cc(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}let Qt=0,tr,nr,Xt,sr=!1,Zi,eo,to,ot=null;function Sc(t){Ic(t)&&an(t)}function Ic(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=oc(t),n=t.shiftKey&&!t.deltaX,s=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),r=n||s?t.deltaY:t.deltaX;for(let i=0;i<e.length;i++){const o=e[i];if(Cc(o,s))return s?r<0&&o.scrollTop===0?!0:r>0&&o.scrollTop+o.clientHeight===o.scrollHeight:r<0&&o.scrollLeft===0?!0:r>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function no(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function qn(t){sr!==!0&&(sr=!0,requestAnimationFrame(()=>{sr=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:s}=document.scrollingElement;(Xt===void 0||e!==window.innerHeight)&&(Xt=n-e,document.scrollingElement.scrollTop=s),s>Xt&&(document.scrollingElement.scrollTop-=Math.ceil((s-Xt)/8))}))}function so(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:s,overflowX:r}=window.getComputedStyle(e);tr=Tc(window),nr=bc(window),Zi=e.style.left,eo=e.style.top,to=window.location.href,e.style.left=`-${tr}px`,e.style.top=`-${nr}px`,r!=="hidden"&&(r==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),s!=="hidden"&&(s==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,He.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",qn,it.passiveCapture),window.visualViewport.addEventListener("scroll",qn,it.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",no,it.passiveCapture))}He.is.desktop===!0&&He.is.mac===!0&&window[`${t}EventListener`]("wheel",Sc,it.notPassive),t==="remove"&&(He.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",qn,it.passiveCapture),window.visualViewport.removeEventListener("scroll",qn,it.passiveCapture)):window.removeEventListener("scroll",no,it.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=Zi,e.style.top=eo,window.location.href===to&&window.scrollTo(tr,nr),Xt=void 0)}function kc(t){let e="add";if(t===!0){if(Qt++,ot!==null){clearTimeout(ot),ot=null;return}if(Qt>1)return}else{if(Qt===0||(Qt--,Qt>0))return;if(e="remove",He.is.ios===!0&&He.is.nativeMobile===!0){ot!==null&&clearTimeout(ot),ot=setTimeout(()=>{so(e),ot=null},100);return}}so(e)}function Ac(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,kc(e))}}}function Dc(){let t=null;const e=Re();function n(){t!==null&&(clearTimeout(t),t=null)}return Ts(n),nt(n),{removeTimeout:n,registerTimeout(s,r){n(),ei(e)===!1&&(t=setTimeout(s,r))}}}var iy=je({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=M(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>P("div",{class:n.value},Le(e.default))}}),oy=je({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:e}){const n=M(()=>parseInt(t.lines,10)),s=M(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),r=M(()=>t.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>P("div",{style:r.value,class:s.value},Le(e.default))}}),ay=je({name:"QItem",props:{...Cs,...Zl,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:s}}=Re(),r=Ss(t,s),{hasLink:i,linkAttrs:o,linkClass:a,linkTag:u,navigateOnClick:l}=ec(),c=J(null),h=J(null),f=M(()=>t.clickable===!0||i.value===!0||t.tag==="label"),d=M(()=>t.disable!==!0&&f.value===!0),v=M(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(i.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),T=M(()=>{if(t.insetLevel===void 0)return null;const I=s.lang.rtl===!0?"Right":"Left";return{["padding"+I]:16+t.insetLevel*56+"px"}});function C(I){d.value===!0&&(h.value!==null&&(I.qKeyEvent!==!0&&document.activeElement===c.value?h.value.focus():document.activeElement===h.value&&c.value.focus()),l(I))}function U(I){if(d.value===!0&&pa(I,13)===!0){an(I),I.qKeyEvent=!0;const q=new MouseEvent("click",I);q.qKeyEvent=!0,c.value.dispatchEvent(q)}n("keyup",I)}function S(){const I=tc(e.default,[]);return d.value===!0&&I.unshift(P("div",{class:"q-focus-helper",tabindex:-1,ref:h})),I}return()=>{const I={ref:c,class:v.value,style:T.value,role:"listitem",onClick:C,onKeyup:U};return d.value===!0?(I.tabindex=t.tabindex||"0",Object.assign(I,o.value)):f.value===!0&&(I["aria-disabled"]="true"),P(u.value,I,S())}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_c=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,u=r+2<t.length,l=u?t[r+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;u||(d=64,o||(f=64)),s.push(n[c],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_c(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},xc=function(t){const e=wa(t);return Ea.encodeByteArray(e,!0)},ss=function(t){return xc(t).replace(/\./g,"")},Nc=function(t){try{return Ea.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rc(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mc=()=>Rc().__FIREBASE_DEFAULTS__,Lc=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Oc=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nc(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return Mc()||Lc()||Oc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fc=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vc=t=>{const e=Fc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Pc=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function qc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ss(JSON.stringify(n)),ss(JSON.stringify(o)),a].join(".")}function Uc(){try{return typeof indexedDB=="object"}catch{return!1}}function $c(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="FirebaseError";class qt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=jc,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Hc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new qt(r,a,s)}}function Hc(t,e){return t.replace(Kc,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Kc=/\{\$([^}]+)}/g;function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ro(i)&&ro(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ro(t){return t!==null&&typeof t=="object"}/**
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
 */function xt(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const at="[DEFAULT]";/**
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
 */class zc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qc(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gc(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gc(t){return t===at?void 0:t}function Qc(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Xc={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Yc=Q.INFO,Jc={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Zc=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Jc[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=Yc,this._logHandler=Zc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const eh=(t,e)=>e.some(n=>t instanceof n);let io,oo;function th(){return io||(io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nh(){return oo||(oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sa=new WeakMap,Sr=new WeakMap,Ia=new WeakMap,rr=new WeakMap,ni=new WeakMap;function sh(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xe(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sa.set(n,t)}).catch(()=>{}),ni.set(e,t),e}function rh(t){if(Sr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sr.set(t,e)}let Ir={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ia.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ih(t){Ir=t(Ir)}function oh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ir(this),e,...n);return Ia.set(s,e.sort?e.sort():[e]),Xe(s)}:nh().includes(t)?function(...e){return t.apply(ir(this),e),Xe(Sa.get(this))}:function(...e){return Xe(t.apply(ir(this),e))}}function ah(t){return typeof t=="function"?oh(t):(t instanceof IDBTransaction&&rh(t),eh(t,th())?new Proxy(t,Ir):t)}function Xe(t){if(t instanceof IDBRequest)return sh(t);if(rr.has(t))return rr.get(t);const e=ah(t);return e!==t&&(rr.set(t,e),ni.set(e,t)),e}const ir=t=>ni.get(t);function uh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Xe(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Xe(o.result),u.oldVersion,u.newVersion,Xe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const lh=["get","getKey","getAll","getAllKeys","count"],ch=["put","add","delete","clear"],or=new Map;function ao(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(or.get(e))return or.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ch.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||lh.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let l=u.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&u.done]))[0]};return or.set(e,i),i}ih(t=>({...t,get:(e,n,s)=>ao(e,n)||t.get(e,n,s),has:(e,n)=>!!ao(e,n)||t.has(e,n)}));/**
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
 */class hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kr="@firebase/app",uo="0.9.3";/**
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
 */const vt=new Ca("@firebase/app"),fh="@firebase/app-compat",mh="@firebase/analytics-compat",gh="@firebase/analytics",ph="@firebase/app-check-compat",yh="@firebase/app-check",vh="@firebase/auth",wh="@firebase/auth-compat",Eh="@firebase/database",bh="@firebase/database-compat",Th="@firebase/functions",Ch="@firebase/functions-compat",Sh="@firebase/installations",Ih="@firebase/installations-compat",kh="@firebase/messaging",Ah="@firebase/messaging-compat",Dh="@firebase/performance",_h="@firebase/performance-compat",xh="@firebase/remote-config",Nh="@firebase/remote-config-compat",Rh="@firebase/storage",Mh="@firebase/storage-compat",Lh="@firebase/firestore",Oh="@firebase/firestore-compat",Fh="firebase",Vh="9.17.1";/**
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
 */const Ar="[DEFAULT]",Ph={[kr]:"fire-core",[fh]:"fire-core-compat",[gh]:"fire-analytics",[mh]:"fire-analytics-compat",[yh]:"fire-app-check",[ph]:"fire-app-check-compat",[vh]:"fire-auth",[wh]:"fire-auth-compat",[Eh]:"fire-rtdb",[bh]:"fire-rtdb-compat",[Th]:"fire-fn",[Ch]:"fire-fn-compat",[Sh]:"fire-iid",[Ih]:"fire-iid-compat",[kh]:"fire-fcm",[Ah]:"fire-fcm-compat",[Dh]:"fire-perf",[_h]:"fire-perf-compat",[xh]:"fire-rc",[Nh]:"fire-rc-compat",[Rh]:"fire-gcs",[Mh]:"fire-gcs-compat",[Lh]:"fire-fst",[Oh]:"fire-fst-compat","fire-js":"fire-js",[Fh]:"fire-js-all"};/**
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
 */const rs=new Map,Dr=new Map;function Bh(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Dr.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,t);for(const n of rs.values())Bh(n,t);return!0}function qh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Uh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ye=new Ta("app","Firebase",Uh);/**
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
 */class $h{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
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
 */const jh=Vh;function ka(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ar,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ye.create("bad-app-name",{appName:String(r)});if(n||(n=Pc()),!n)throw Ye.create("no-options");const i=rs.get(r);if(i){if(Cr(n,i.options)&&Cr(s,i.config))return i;throw Ye.create("duplicate-app",{appName:r})}const o=new Wc(r);for(const u of Dr.values())o.addComponent(u);const a=new $h(n,s,o);return rs.set(r,a),a}function Hh(t=Ar){const e=rs.get(t);if(!e&&t===Ar)return ka();if(!e)throw Ye.create("no-app",{appName:t});return e}function At(t,e,n){var s;let r=(s=Ph[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(a.join(" "));return}is(new un(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Kh="firebase-heartbeat-database",zh=1,ln="firebase-heartbeat-store";let ar=null;function Aa(){return ar||(ar=uh(Kh,zh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ln)}}}).catch(t=>{throw Ye.create("idb-open",{originalErrorMessage:t.message})})),ar}async function Gh(t){try{return(await Aa()).transaction(ln).objectStore(ln).get(Da(t))}catch(e){if(e instanceof qt)vt.warn(e.message);else{const n=Ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(n.message)}}}async function lo(t,e){try{const s=(await Aa()).transaction(ln,"readwrite");return await s.objectStore(ln).put(e,Da(t)),s.done}catch(n){if(n instanceof qt)vt.warn(n.message);else{const s=Ye.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vt.warn(s.message)}}}function Da(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qh=1024,Wh=30*24*60*60*1e3;class Xh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Wh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=co(),{heartbeatsToSend:n,unsentEntries:s}=Yh(this._heartbeatsCache.heartbeats),r=ss(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function co(){return new Date().toISOString().substring(0,10)}function Yh(t,e=Qh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ho(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ho(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Jh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uc()?$c().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ho(t){return ss(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Zh(t){is(new un("platform-logger",e=>new hh(e),"PRIVATE")),is(new un("heartbeat",e=>new Xh(e),"PRIVATE")),At(kr,uo,t),At(kr,uo,"esm2017"),At("fire-js","")}Zh("");var ed=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},k,si=si||{},F=ed||self;function os(){}function Is(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Sn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function td(t){return Object.prototype.hasOwnProperty.call(t,ur)&&t[ur]||(t[ur]=++nd)}var ur="closure_uid_"+(1e9*Math.random()>>>0),nd=0;function sd(t,e,n){return t.call.apply(t.bind,arguments)}function rd(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=sd:ke=rd,ke.apply(null,arguments)}function Un(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function st(){this.s=this.s,this.o=this.o}var id=0;st.prototype.s=!1;st.prototype.na=function(){!this.s&&(this.s=!0,this.M(),id!=0)&&td(this)};st.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _a=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ri(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function fo(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Is(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ae(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var od=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",os,e),F.removeEventListener("test",os,e)}catch{}return t}();function as(t){return/^[\s\xa0]*$/.test(t)}var mo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lr(t,e){return t<e?-1:t>e?1:0}function ks(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Pe(t){return ks().indexOf(t)!=-1}function ii(t){return ii[" "](t),t}ii[" "]=os;function ad(t){var e=cd;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ud=Pe("Opera"),Nt=Pe("Trident")||Pe("MSIE"),xa=Pe("Edge"),_r=xa||Nt,Na=Pe("Gecko")&&!(ks().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge"))&&!(Pe("Trident")||Pe("MSIE"))&&!Pe("Edge"),ld=ks().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge");function Ra(){var t=F.document;return t?t.documentMode:void 0}var us;e:{var cr="",hr=function(){var t=ks();if(Na)return/rv:([^\);]+)(\)|;)/.exec(t);if(xa)return/Edge\/([\d\.]+)/.exec(t);if(Nt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ld)return/WebKit\/(\S+)/.exec(t);if(ud)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hr&&(cr=hr?hr[1]:""),Nt){var dr=Ra();if(dr!=null&&dr>parseFloat(cr)){us=String(dr);break e}}us=cr}var cd={};function hd(){return ad(function(){let t=0;const e=mo(String(us)).split("."),n=mo("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=lr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||lr(r[2].length==0,i[2].length==0)||lr(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var xr;if(F.document&&Nt){var go=Ra();xr=go||parseInt(us,10)||void 0}else xr=void 0;var dd=xr;function cn(t,e){if(Ae.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Na){e:{try{ii(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fd[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cn.X.h.call(this)}}ve(cn,Ae);var fd={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var In="closure_listenable_"+(1e6*Math.random()|0),md=0;function gd(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++md,this.ba=this.ea=!1}function As(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function oi(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ma(t){const e={};for(const n in t)e[n]=t[n];return e}const po="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<po.length;i++)n=po[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ds(t){this.src=t,this.g={},this.h=0}Ds.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Rr(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new gd(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Nr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=_a(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(As(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rr(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ai="closure_lm_"+(1e6*Math.random()|0),fr={};function Oa(t,e,n,s,r){if(s&&s.once)return Va(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Oa(t,e[i],n,s,r);return null}return n=ci(n),t&&t[In]?t.N(e,n,Sn(s)?!!s.capture:!!s,r):Fa(t,e,n,!1,s,r)}function Fa(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Sn(r)?!!r.capture:!!r,a=li(t);if(a||(t[ai]=a=new Ds(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=pd(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)od||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ba(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pd(){function t(n){return e.call(t.src,t.listener,n)}const e=yd;return t}function Va(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Va(t,e[i],n,s,r);return null}return n=ci(n),t&&t[In]?t.O(e,n,Sn(s)?!!s.capture:!!s,r):Fa(t,e,n,!0,s,r)}function Pa(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Pa(t,e[i],n,s,r);else s=Sn(s)?!!s.capture:!!s,n=ci(n),t&&t[In]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Rr(i,n,s,r),-1<n&&(As(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=li(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rr(e,n,s,r)),(n=-1<t?e[t]:null)&&ui(n))}function ui(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[In])Nr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ba(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=li(e))?(Nr(n,t),n.h==0&&(n.src=null,e[ai]=null)):As(t)}}}function Ba(t){return t in fr?fr[t]:fr[t]="on"+t}function yd(t,e){if(t.ba)t=!0;else{e=new cn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ui(t),t=n.call(s,e)}return t}function li(t){return t=t[ai],t instanceof Ds?t:null}var mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ci(t){return typeof t=="function"?t:(t[mr]||(t[mr]=function(e){return t.handleEvent(e)}),t[mr])}function me(){st.call(this),this.i=new Ds(this),this.P=this,this.I=null}ve(me,st);me.prototype[In]=!0;me.prototype.removeEventListener=function(t,e,n,s){Pa(this,t,e,n,s)};function ye(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ae(e,t);else if(e instanceof Ae)e.target=e.target||t;else{var r=e;e=new Ae(s,t),La(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=$n(o,s,!0,e)&&r}if(o=e.g=t,r=$n(o,s,!0,e)&&r,r=$n(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=$n(o,s,!1,e)&&r}me.prototype.M=function(){if(me.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)As(n[s]);delete t.g[e],t.h--}}this.I=null};me.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function $n(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Nr(t.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var hi=F.JSON.stringify;function vd(){var t=$a;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wd{constructor(){this.h=this.g=null}add(e,n){const s=qa.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var qa=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ed,t=>t.reset());class Ed{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bd(t){F.setTimeout(()=>{throw t},0)}function Ua(t,e){Mr||Td(),Lr||(Mr(),Lr=!0),$a.add(t,e)}var Mr;function Td(){var t=F.Promise.resolve(void 0);Mr=function(){t.then(Cd)}}var Lr=!1,$a=new wd;function Cd(){for(var t;t=vd();){try{t.h.call(t.g)}catch(n){bd(n)}var e=qa;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lr=!1}function _s(t,e){me.call(this),this.h=t||1,this.g=e||F,this.j=ke(this.lb,this),this.l=Date.now()}ve(_s,me);k=_s.prototype;k.ca=!1;k.R=null;k.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ye(this,"tick"),this.ca&&(di(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function di(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}k.M=function(){_s.X.M.call(this),di(this),delete this.g};function fi(t,e,n){if(typeof t=="function")n&&(t=ke(t,n));else if(t&&typeof t.handleEvent=="function")t=ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function ja(t){t.g=fi(()=>{t.g=null,t.i&&(t.i=!1,ja(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Sd extends st{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ja(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hn(t){st.call(this),this.h=t,this.g={}}ve(hn,st);var yo=[];function Ha(t,e,n,s){Array.isArray(n)||(n&&(yo[0]=n.toString()),n=yo);for(var r=0;r<n.length;r++){var i=Oa(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ka(t){oi(t.g,function(e,n){this.g.hasOwnProperty(n)&&ui(e)},t),t.g={}}hn.prototype.M=function(){hn.X.M.call(this),Ka(this)};hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xs(){this.g=!0}xs.prototype.Aa=function(){this.g=!1};function Id(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function kd(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function kt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Dd(t,n)+(s?" "+s:"")})}function Ad(t,e){t.info(function(){return"TIMEOUT: "+e})}xs.prototype.info=function(){};function Dd(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return hi(n)}catch{return e}}var bt={},vo=null;function Ns(){return vo=vo||new me}bt.Pa="serverreachability";function za(t){Ae.call(this,bt.Pa,t)}ve(za,Ae);function dn(t){const e=Ns();ye(e,new za(e))}bt.STAT_EVENT="statevent";function Ga(t,e){Ae.call(this,bt.STAT_EVENT,t),this.stat=e}ve(Ga,Ae);function _e(t){const e=Ns();ye(e,new Ga(e,t))}bt.Qa="timingevent";function Qa(t,e){Ae.call(this,bt.Qa,t),this.size=e}ve(Qa,Ae);function kn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Rs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wa={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function mi(){}mi.prototype.h=null;function wo(t){return t.h||(t.h=t.i())}function Xa(){}var An={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function gi(){Ae.call(this,"d")}ve(gi,Ae);function pi(){Ae.call(this,"c")}ve(pi,Ae);var Or;function Ms(){}ve(Ms,mi);Ms.prototype.g=function(){return new XMLHttpRequest};Ms.prototype.i=function(){return{}};Or=new Ms;function Dn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new hn(this),this.O=_d,t=_r?125:void 0,this.T=new _s(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ya}function Ya(){this.i=null,this.g="",this.h=!1}var _d=45e3,Fr={},ls={};k=Dn.prototype;k.setTimeout=function(t){this.O=t};function Vr(t,e,n){t.K=1,t.v=Os(ze(e)),t.s=n,t.P=!0,Ja(t,null)}function Ja(t,e){t.F=Date.now(),_n(t),t.A=ze(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ou(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ya,t.g=Au(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Sd(ke(t.La,t,t.g),t.N)),Ha(t.S,t.g,"readystatechange",t.ib),e=t.H?Ma(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),dn(),Id(t.j,t.u,t.A,t.m,t.U,t.s)}k.ib=function(t){t=t.target;const e=this.L;e&&Ke(t)==3?e.l():this.La(t)};k.La=function(t){try{if(t==this.g)e:{const c=Ke(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||_r||this.g&&(this.h.h||this.g.fa()||Co(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?dn(3):dn(2)),Ls(this);var n=this.g.aa();this.Y=n;t:if(Za(this)){var s=Co(this.g);t="";var r=s.length,i=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ut(this),tn(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kd(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!as(a)){var l=a;break t}}l=null}if(n=l)kt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pr(this,n);else{this.i=!1,this.o=3,_e(12),ut(this),tn(this);break e}}this.P?(eu(this,c,o),_r&&this.i&&c==3&&(Ha(this.S,this.T,"tick",this.hb),this.T.start())):(kt(this.j,this.m,o,null),Pr(this,o)),c==4&&ut(this),this.i&&!this.I&&(c==4?Cu(this.l,this):(this.i=!1,_n(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_e(12)):(this.o=0,_e(13)),ut(this),tn(this)}}}catch{}finally{}};function Za(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function eu(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=xd(t,n),r==ls){e==4&&(t.o=4,_e(14),s=!1),kt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Fr){t.o=4,_e(15),kt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else kt(t.j,t.m,r,null),Pr(t,r);Za(t)&&r!=ls&&r!=Fr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_e(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ci(e),e.K=!0,_e(11))):(kt(t.j,t.m,n,"[Invalid Chunked Response]"),ut(t),tn(t))}k.hb=function(){if(this.g){var t=Ke(this.g),e=this.g.fa();this.C<e.length&&(Ls(this),eu(this,t,e),this.i&&t!=4&&_n(this))}};function xd(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ls:(n=Number(e.substring(n,s)),isNaN(n)?Fr:(s+=1,s+n>e.length?ls:(e=e.substr(s,n),t.C=s+n,e)))}k.cancel=function(){this.I=!0,ut(this)};function _n(t){t.V=Date.now()+t.O,tu(t,t.O)}function tu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=kn(ke(t.gb,t),e)}function Ls(t){t.B&&(F.clearTimeout(t.B),t.B=null)}k.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Ad(this.j,this.A),this.K!=2&&(dn(),_e(17)),ut(this),this.o=2,tn(this)):tu(this,this.V-t)};function tn(t){t.l.G==0||t.I||Cu(t.l,t)}function ut(t){Ls(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,di(t.T),Ka(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Br(n.h,t))){if(!t.J&&Br(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ds(n),Ps(n);else break e;Ti(n),_e(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=kn(ke(n.cb,n),6e3));if(1>=lu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else lt(n,11)}else if((t.J||n.g==t)&&ds(n),!as(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(yi(i,i.h),i.h=null))}if(s.D){const T=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,Z(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ku(s,s.H?s.ka:null,s.V),o.J){cu(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(Ls(a),_n(a)),s.g=o}else bu(s);0<n.i.length&&Bs(n)}else l[0]!="stop"&&l[0]!="close"||lt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?lt(n,7):bi(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}dn(4)}catch{}}function Nd(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Is(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Rd(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Is(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function nu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Is(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Rd(t),s=Nd(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Md(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function dt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof dt){this.h=e!==void 0?e:t.h,cs(this,t.j),this.s=t.s,this.g=t.g,hs(this,t.m),this.l=t.l,e=t.i;var n=new fn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Eo(this,n),this.o=t.o}else t&&(n=String(t).match(su))?(this.h=!!e,cs(this,n[1]||"",!0),this.s=Yt(n[2]||""),this.g=Yt(n[3]||"",!0),hs(this,n[4]),this.l=Yt(n[5]||"",!0),Eo(this,n[6]||"",!0),this.o=Yt(n[7]||"")):(this.h=!!e,this.i=new fn(null,this.h))}dt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jt(e,bo,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jt(e,bo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jt(n,n.charAt(0)=="/"?Fd:Od,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jt(n,Pd)),t.join("")};function ze(t){return new dt(t)}function cs(t,e,n){t.j=n?Yt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Eo(t,e,n){e instanceof fn?(t.i=e,Bd(t.i,t.h)):(n||(e=Jt(e,Vd)),t.i=new fn(e,t.h))}function Z(t,e,n){t.i.set(e,n)}function Os(t){return Z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ld),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ld(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bo=/[#\/\?@]/g,Od=/[#\?:]/g,Fd=/[#\?]/g,Vd=/[#\?@]/g,Pd=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rt(t){t.g||(t.g=new Map,t.h=0,t.i&&Md(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=fn.prototype;k.add=function(t,e){rt(this),this.i=null,t=Ut(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ru(t,e){rt(t),e=Ut(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function iu(t,e){return rt(t),e=Ut(t,e),t.g.has(e)}k.forEach=function(t,e){rt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};k.oa=function(){rt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};k.W=function(t){rt(this);let e=[];if(typeof t=="string")iu(this,t)&&(e=e.concat(this.g.get(Ut(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return rt(this),this.i=null,t=Ut(this,t),iu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ou(t,e,n){ru(t,e),0<n.length&&(t.i=null,t.g.set(Ut(t,e),ri(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ut(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bd(t,e){e&&!t.j&&(rt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ru(this,s),ou(this,r,n))},t)),t.j=e}var qd=class{constructor(t,e){this.h=t,this.g=e}};function au(t){this.l=t||Ud,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ud=10;function uu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lu(t){return t.h?1:t.g?t.g.size:0}function Br(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yi(t,e){t.g?t.g.add(e):t.h=e}function cu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}au.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ri(t.i)}function vi(){}vi.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};vi.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function $d(){this.g=new vi}function jd(t,e,n){const s=n||"";try{nu(t,function(r,i){let o=r;Sn(r)&&(o=hi(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Hd(t,e){const n=new xs;if(F.Image){const s=new Image;s.onload=Un(jn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Un(jn,n,s,"TestLoadImage: error",!1,e),s.onabort=Un(jn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Un(jn,n,s,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function jn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function xn(t){this.l=t.ac||null,this.j=t.jb||!1}ve(xn,mi);xn.prototype.g=function(){return new Fs(this.l,this.j)};xn.prototype.i=function(t){return function(){return t}}({});function Fs(t,e){me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ve(Fs,me);var wi=0;k=Fs.prototype;k.open=function(t,e){if(this.readyState!=wi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,mn(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=wi};k.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mn(this)),this.g&&(this.readyState=3,mn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;du(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function du(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}k.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nn(this):mn(this),this.readyState==3&&du(this)}};k.Va=function(t){this.g&&(this.response=this.responseText=t,Nn(this))};k.Ua=function(t){this.g&&(this.response=t,Nn(this))};k.ga=function(){this.g&&Nn(this)};function Nn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,mn(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Kd=F.JSON.parse;function te(t){me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fu,this.K=this.L=!1}ve(te,me);var fu="",zd=/^https?$/i,Gd=["POST","PUT"];k=te.prototype;k.Ka=function(t){this.L=t};k.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Or.g(),this.C=this.u?wo(this.u):wo(Or),this.g.onreadystatechange=ke(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){To(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=F.FormData&&t instanceof F.FormData,!(0<=_a(Gd,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pu(this),0<this.B&&((this.K=Qd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.qa,this)):this.A=fi(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){To(this,i)}};function Qd(t){return Nt&&hd()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.qa=function(){typeof si!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))};function To(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mu(t),Vs(t)}function mu(t){t.D||(t.D=!0,ye(t,"complete"),ye(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ye(this,"complete"),ye(this,"abort"),Vs(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vs(this,!0)),te.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?gu(this):this.fb())};k.fb=function(){gu(this)};function gu(t){if(t.h&&typeof si!="undefined"&&(!t.C[1]||Ke(t)!=4||t.aa()!=2)){if(t.v&&Ke(t)==4)fi(t.Ha,0,t);else if(ye(t,"readystatechange"),Ke(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(su)[1]||null;if(!r&&F.self&&F.self.location){var i=F.self.location.protocol;r=i.substr(0,i.length-1)}s=!zd.test(r?r.toLowerCase():"")}n=s}if(n)ye(t,"complete"),ye(t,"success");else{t.m=6;try{var o=2<Ke(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",mu(t)}}finally{Vs(t)}}}}function Vs(t,e){if(t.g){pu(t);const n=t.g,s=t.C[0]?os:null;t.g=null,t.C=null,e||ye(t,"ready");try{n.onreadystatechange=s}catch{}}}function pu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function Ke(t){return t.g?t.g.readyState:0}k.aa=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Kd(e)}};function Co(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yu(t){let e="";return oi(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ei(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=yu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Z(t,e,n))}function Wt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vu(t){this.Ca=0,this.i=[],this.j=new xs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Wt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Wt("baseRetryDelayMs",5e3,t),this.bb=Wt("retryDelaySeedMs",1e4,t),this.$a=Wt("forwardChannelMaxRetries",2,t),this.ta=Wt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new au(t&&t.concurrentRequestLimit),this.Fa=new $d,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=vu.prototype;k.ma=8;k.G=1;function bi(t){if(wu(t),t.G==3){var e=t.U++,n=ze(t.F);Z(n,"SID",t.I),Z(n,"RID",e),Z(n,"TYPE","terminate"),Rn(t,n),e=new Dn(t,t.j,e,void 0),e.K=2,e.v=Os(ze(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=Au(e.l,null),e.g.da(e.v)),e.F=Date.now(),_n(e)}Iu(t)}function Ps(t){t.g&&(Ci(t),t.g.cancel(),t.g=null)}function wu(t){Ps(t),t.u&&(F.clearTimeout(t.u),t.u=null),ds(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Bs(t){uu(t.h)||t.m||(t.m=!0,Ua(t.Ja,t),t.C=0)}function Wd(t,e){return lu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=kn(ke(t.Ja,t,e),Su(t,t.C)),t.C++,!0)}k.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Dn(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ma(i),La(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Eu(this,r,e),n=ze(this.F),Z(n,"RID",t),Z(n,"CVER",22),this.D&&Z(n,"X-HTTP-Session-Id",this.D),Rn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(yu(i)))+"&"+e:this.o&&Ei(n,this.o,i)),yi(this.h,r),this.Ya&&Z(n,"TYPE","init"),this.O?(Z(n,"$req",e),Z(n,"SID","null"),r.Z=!0,Vr(r,n,null)):Vr(r,n,e),this.G=2}}else this.G==3&&(t?So(this,t):this.i.length==0||uu(this.h)||So(this))};function So(t,e){var n;e?n=e.m:n=t.U++;const s=ze(t.F);Z(s,"SID",t.I),Z(s,"RID",n),Z(s,"AID",t.T),Rn(t,s),t.o&&t.s&&Ei(s,t.o,t.s),n=new Dn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Eu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yi(t.h,n),Vr(n,s,e)}function Rn(t,e){t.ia&&oi(t.ia,function(n,s){Z(e,s,n)}),t.l&&nu({},function(n,s){Z(e,s,n)})}function Eu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ke(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let l=r[u].h;const c=r[u].g;if(l-=i,0>l)i=Math.max(0,r[u].h-100),a=!1;else try{jd(c,o,"req"+l+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function bu(t){t.g||t.u||(t.Z=1,Ua(t.Ia,t),t.A=0)}function Ti(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=kn(ke(t.Ia,t),Su(t,t.A)),t.A++,!0)}k.Ia=function(){if(this.u=null,Tu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=kn(ke(this.eb,this),t)}};k.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,_e(10),Ps(this),Tu(this))};function Ci(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function Tu(t){t.g=new Dn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ze(t.sa);Z(e,"RID","rpc"),Z(e,"SID",t.I),Z(e,"CI",t.L?"0":"1"),Z(e,"AID",t.T),Z(e,"TYPE","xmlhttp"),Rn(t,e),t.o&&t.s&&Ei(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Os(ze(e)),n.s=null,n.P=!0,Ja(n,t)}k.cb=function(){this.v!=null&&(this.v=null,Ps(this),Ti(this),_e(19))};function ds(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function Cu(t,e){var n=null;if(t.g==e){ds(t),Ci(t),t.g=null;var s=2}else if(Br(t.h,e))n=e.D,cu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ns(),ye(s,new Qa(s,n)),Bs(t)}else bu(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Wd(t,e)||s==2&&Ti(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:lt(t,5);break;case 4:lt(t,10);break;case 3:lt(t,6);break;default:lt(t,2)}}}function Su(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function lt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ke(t.kb,t);n||(n=new dt("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||cs(n,"https"),Os(n)),Hd(n.toString(),s)}else _e(2);t.G=0,t.l&&t.l.va(e),Iu(t),wu(t)}k.kb=function(t){t?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function Iu(t){if(t.G=0,t.la=[],t.l){const e=hu(t.h);(e.length!=0||t.i.length!=0)&&(fo(t.la,e),fo(t.la,t.i),t.h.i.length=0,ri(t.i),t.i.length=0),t.l.ua()}}function ku(t,e,n){var s=n instanceof dt?ze(n):new dt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),hs(s,s.m);else{var r=F.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new dt(null,void 0);s&&cs(i,s),e&&(i.g=e),r&&hs(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Z(s,n,e),Z(s,"VER",t.ma),Rn(t,s),s}function Au(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new te(new xn({jb:!0})):new te(t.ra),e.Ka(t.H),e}function Du(){}k=Du.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Ra=function(){};function fs(){if(Nt&&!(10<=Number(dd)))throw Error("Environmental error: no available transport.")}fs.prototype.g=function(t,e){return new Ne(t,e)};function Ne(t,e){me.call(this),this.g=new vu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!as(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!as(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $t(this)}ve(Ne,me);Ne.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;_e(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ku(t,null,t.V),Bs(t)};Ne.prototype.close=function(){bi(this.g)};Ne.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hi(t),t=n);e.i.push(new qd(e.ab++,t)),e.G==3&&Bs(e)};Ne.prototype.M=function(){this.g.l=null,delete this.j,bi(this.g),delete this.g,Ne.X.M.call(this)};function _u(t){gi.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ve(_u,gi);function xu(){pi.call(this),this.status=1}ve(xu,pi);function $t(t){this.g=t}ve($t,Du);$t.prototype.xa=function(){ye(this.g,"a")};$t.prototype.wa=function(t){ye(this.g,new _u(t))};$t.prototype.va=function(t){ye(this.g,new xu)};$t.prototype.ua=function(){ye(this.g,"b")};fs.prototype.createWebChannel=fs.prototype.g;Ne.prototype.send=Ne.prototype.u;Ne.prototype.open=Ne.prototype.m;Ne.prototype.close=Ne.prototype.close;Rs.NO_ERROR=0;Rs.TIMEOUT=8;Rs.HTTP_ERROR=6;Wa.COMPLETE="complete";Xa.EventType=An;An.OPEN="a";An.CLOSE="b";An.ERROR="c";An.MESSAGE="d";me.prototype.listen=me.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.Oa;te.prototype.getLastErrorCode=te.prototype.Ea;te.prototype.getStatus=te.prototype.aa;te.prototype.getResponseJson=te.prototype.Sa;te.prototype.getResponseText=te.prototype.fa;te.prototype.send=te.prototype.da;te.prototype.setWithCredentials=te.prototype.Ka;var Xd=function(){return new fs},Yd=function(){return Ns()},gr=Rs,Jd=Wa,Zd=bt,Io={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ef=xn,Hn=Xa,tf=te;const ko="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Ca("@firebase/firestore");function Ao(){return wt.logLevel}function D(t,...e){if(wt.logLevel<=Q.DEBUG){const n=e.map(Si);wt.debug(`Firestore (${jt}): ${t}`,...n)}}function Ge(t,...e){if(wt.logLevel<=Q.ERROR){const n=e.map(Si);wt.error(`Firestore (${jt}): ${t}`,...n)}}function qr(t,...e){if(wt.logLevel<=Q.WARN){const n=e.map(Si);wt.warn(`Firestore (${jt}): ${t}`,...n)}}function Si(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${jt}) INTERNAL ASSERTION FAILED: `+t;throw Ge(e),new Error(e)}function Y(t,e){t||O()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ce.UNAUTHENTICATED))}shutdown(){}}class sf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rf{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ft,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ft)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Y(typeof s.accessToken=="string"),new Nu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ce(e)}}class of{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Y(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class af{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new of(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lf{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.A=n.token,new uf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=cf(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function W(t,e){return t<e?-1:t>e?1:0}function Rt(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new ue(0,0))}static max(){return new V(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,s){n===void 0?n=0:n>e.length&&O(),s===void 0?s=e.length-n:s>e.length-n&&O(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends gn{construct(e,n,s){return new ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new R(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const hf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends gn{construct(e,n,s){return new Ie(e,n,s)}static isValidIdentifier(e){return hf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new R(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new R(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new R(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new R(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(n)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ee.fromString(e))}static fromName(e){return new N(ee.fromString(e).popFirst(5))}static empty(){return new N(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ee(e.slice()))}}function df(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=V.fromTimestamp(s===1e9?new ue(n+1,0):new ue(n,s));return new Ze(r,N.empty(),e)}function ff(t){return new Ze(t.readTime,t.key,-1)}class Ze{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ze(V.min(),N.empty(),-1)}static max(){return new Ze(V.max(),N.empty(),-1)}}function mf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==gf)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,s)=>{n(e)})}static reject(e){return new g((n,s)=>{s(e)})}static waitFor(e){return new g((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(e){let n=g.resolve(!1);for(const s of e)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new g((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===i&&s(o)},c=>r(c))}})}static doWhile(e,n){return new g((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ln(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ii{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ii.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,s,r,i,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class pn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ht(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){return t==null}function ms(t){return t===0&&1/t==-1/0}function vf(t){return typeof t=="number"&&Number.isInteger(t)&&!ms(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new De(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new De(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const wf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function et(t){if(Y(!!t),typeof t=="string"){let e=0;const n=wf.exec(t);if(Y(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ie(t.seconds),nanos:ie(t.nanos)}}function ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mt(t){return typeof t=="string"?De.fromBase64String(t):De.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ou(t){const e=t.mapValue.fields.__previous_value__;return Lu(e)?Ou(e):e}function yn(t){const e=et(t.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lu(t)?4:Ef(t)?9007199254740991:10:O()}function Ue(t,e){if(t===e)return!0;const n=Et(t);if(n!==Et(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yn(t).isEqual(yn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=et(s.timestampValue),o=et(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Mt(s.bytesValue).isEqual(Mt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ie(s.geoPointValue.latitude)===ie(r.geoPointValue.latitude)&&ie(s.geoPointValue.longitude)===ie(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ie(s.integerValue)===ie(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ie(s.doubleValue),o=ie(r.doubleValue);return i===o?ms(i)===ms(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rt(t.arrayValue.values||[],e.arrayValue.values||[],Ue);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Do(i)!==Do(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ue(i[a],o[a])))return!1;return!0}(t,e);default:return O()}}function vn(t,e){return(t.values||[]).find(n=>Ue(n,e))!==void 0}function Lt(t,e){if(t===e)return 0;const n=Et(t),s=Et(e);if(n!==s)return W(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ie(r.integerValue||r.doubleValue),a=ie(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _o(t.timestampValue,e.timestampValue);case 4:return _o(yn(t),yn(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Mt(r),a=Mt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=W(o[u],a[u]);if(l!==0)return l}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=W(ie(r.latitude),ie(i.latitude));return o!==0?o:W(ie(r.longitude),ie(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Lt(o[u],a[u]);if(l)return l}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Kn.mapValue&&i===Kn.mapValue)return 0;if(r===Kn.mapValue)return 1;if(i===Kn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=W(a[c],l[c]);if(h!==0)return h;const f=Lt(o[a[c]],u[l[c]]);if(f!==0)return f}return W(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function _o(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=et(t),s=et(e),r=W(n.seconds,s.seconds);return r!==0?r:W(n.nanos,s.nanos)}function Ot(t){return Ur(t)}function Ur(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=et(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,N.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ur(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ur(s.fields[a])}`;return i+"}"}(t.mapValue):O();var e,n}function $r(t){return!!t&&"integerValue"in t}function ki(t){return!!t&&"arrayValue"in t}function xo(t){return!!t&&"nullValue"in t}function No(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jn(t){return!!t&&"mapValue"in t}function nn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ht(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=nn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ef(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gs{constructor(e,n){this.position=e,this.inclusive=n}}function Ro(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=N.comparator(N.fromName(o.referenceValue),n.key):s=Lt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mo(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ue(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fu{}class ae extends Fu{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Tf(e,n,s):n==="array-contains"?new If(e,s):n==="in"?new kf(e,s):n==="not-in"?new Af(e,s):n==="array-contains-any"?new Df(e,s):new ae(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Cf(e,s):new Sf(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Lt(n,this.value)):n!==null&&Et(this.value)===Et(n)&&this.matchesComparison(Lt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $e extends Fu{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new $e(e,n)}matches(e){return Vu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Vu(t){return t.op==="and"}function Pu(t){return bf(t)&&Vu(t)}function bf(t){for(const e of t.filters)if(e instanceof $e)return!1;return!0}function jr(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+Ot(t.value);if(Pu(t))return t.filters.map(e=>jr(e)).join(",");{const e=t.filters.map(n=>jr(n)).join(",");return`${t.op}(${e})`}}function Bu(t,e){return t instanceof ae?function(n,s){return s instanceof ae&&n.op===s.op&&n.field.isEqual(s.field)&&Ue(n.value,s.value)}(t,e):t instanceof $e?function(n,s){return s instanceof $e&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Bu(i,s.filters[o]),!0):!1}(t,e):void O()}function qu(t){return t instanceof ae?function(e){return`${e.field.canonicalString()} ${e.op} ${Ot(e.value)}`}(t):t instanceof $e?function(e){return e.op.toString()+" {"+e.getFilters().map(qu).join(" ,")+"}"}(t):"Filter"}class Tf extends ae{constructor(e,n,s){super(e,n,s),this.key=N.fromName(s.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class Cf extends ae{constructor(e,n){super(e,"in",n),this.keys=Uu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sf extends ae{constructor(e,n){super(e,"not-in",n),this.keys=Uu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Uu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>N.fromName(s.referenceValue))}class If extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ki(n)&&vn(n.arrayValue,this.value)}}class kf extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vn(this.value.arrayValue,n)}}class Af extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vn(this.value.arrayValue,n)}}class Df extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ki(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>vn(this.value.arrayValue,s))}}/**
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
 */class sn{constructor(e,n="asc"){this.field=e,this.dir=n}}function _f(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||pe.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zn(this.root,e,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zn(this.root,e,this.comparator,!0)}}class zn{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:pe.RED,this.left=r!=null?r:pe.EMPTY,this.right=i!=null?i:pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new pe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return pe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,r){return this}insert(t,e,n){return new pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lo(this.data.getIterator())}getIteratorFrom(e){return new Lo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new le(this.comparator);return n.data=e,n}}class Lo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new Fe([])}unionWith(e){let n=new le(Ie.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Fe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Jn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=nn(n)}setAll(e){let n=Ie.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=nn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Jn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ue(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Jn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ht(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Me(nn(this.value))}}function $u(t){const e=[];return Ht(t.fields,(n,s)=>{const r=new Ie([n]);if(Jn(s)){const i=$u(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Se(e,0,V.min(),V.min(),V.min(),Me.empty(),0)}static newFoundDocument(e,n,s,r){return new Se(e,1,n,V.min(),s,r,0)}static newNoDocument(e,n){return new Se(e,2,n,V.min(),V.min(),Me.empty(),0)}static newUnknownDocument(e,n){return new Se(e,3,n,V.min(),V.min(),Me.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xf{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Oo(t,e=null,n=[],s=[],r=null,i=null,o=null){return new xf(t,e,n,s,r,i,o)}function Ai(t){const e=B(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>jr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),qs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ot(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ot(s)).join(",")),e.ft=n}return e.ft}function Di(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_f(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mo(t.startAt,e.startAt)&&Mo(t.endAt,e.endAt)}function Hr(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Nf(t,e,n,s,r,i,o,a){return new Us(t,e,n,s,r,i,o,a)}function _i(t){return new Us(t)}function Fo(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Rf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Mf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Lf(t){return t.collectionGroup!==null}function Dt(t){const e=B(t);if(e.dt===null){e.dt=[];const n=Mf(e),s=Rf(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new sn(n)),e.dt.push(new sn(Ie.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new sn(Ie.keyField(),i))}}}return e.dt}function Qe(t){const e=B(t);if(!e._t)if(e.limitType==="F")e._t=Oo(e.path,e.collectionGroup,Dt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Dt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new sn(i.field,o))}const s=e.endAt?new gs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new gs(e.startAt.position,e.startAt.inclusive):null;e._t=Oo(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Kr(t,e,n){return new Us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $s(t,e){return Di(Qe(t),Qe(e))&&t.limitType===e.limitType}function ju(t){return`${Ai(Qe(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>qu(s)).join(", ")}]`),qs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ot(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ot(s)).join(",")),`Target(${n})`}(Qe(t))}; limitType=${t.limitType})`}function js(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):N.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Dt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ro(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Dt(n),s)||n.endAt&&!function(r,i,o){const a=Ro(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Dt(n),s))}(t,e)}function Of(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hu(t){return(e,n)=>{let s=!1;for(const r of Dt(t)){const i=Ff(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ff(t,e,n){const s=t.field.isKeyField()?N.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?Lt(a,u):O()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ms(e)?"-0":e}}function zu(t){return{integerValue:""+t}}function Vf(t,e){return vf(e)?zu(e):Ku(t,e)}/**
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
 */class Hs{constructor(){this._=void 0}}function Pf(t,e,n){return t instanceof ps?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof wn?Qu(t,e):t instanceof En?Wu(t,e):function(s,r){const i=Gu(s,r),o=Vo(i)+Vo(s.gt);return $r(i)&&$r(s.gt)?zu(o):Ku(s.yt,o)}(t,e)}function Bf(t,e,n){return t instanceof wn?Qu(t,e):t instanceof En?Wu(t,e):n}function Gu(t,e){return t instanceof ys?$r(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ps extends Hs{}class wn extends Hs{constructor(e){super(),this.elements=e}}function Qu(t,e){const n=Xu(e);for(const s of t.elements)n.some(r=>Ue(r,s))||n.push(s);return{arrayValue:{values:n}}}class En extends Hs{constructor(e){super(),this.elements=e}}function Wu(t,e){let n=Xu(e);for(const s of t.elements)n=n.filter(r=>!Ue(r,s));return{arrayValue:{values:n}}}class ys extends Hs{constructor(e,n){super(),this.yt=e,this.gt=n}}function Vo(t){return ie(t.integerValue||t.doubleValue)}function Xu(t){return ki(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qf(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof wn&&s instanceof wn||n instanceof En&&s instanceof En?Rt(n.elements,s.elements,Ue):n instanceof ys&&s instanceof ys?Ue(n.gt,s.gt):n instanceof ps&&s instanceof ps}(t.transform,e.transform)}class Uf{constructor(e,n){this.version=e,this.transformResults=n}}class Be{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ks{}function Yu(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xi(t.key,Be.none()):new On(t.key,t.data,Be.none());{const n=t.data,s=Me.empty();let r=new le(Ie.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Tt(t.key,s,new Fe(r.toArray()),Be.none())}}function $f(t,e,n){t instanceof On?function(s,r,i){const o=s.value.clone(),a=Bo(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Tt?function(s,r,i){if(!Zn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bo(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ju(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function rn(t,e,n,s){return t instanceof On?function(r,i,o,a){if(!Zn(r.precondition,i))return o;const u=r.value.clone(),l=qo(r.fieldTransforms,a,i);return u.setAll(l),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Tt?function(r,i,o,a){if(!Zn(r.precondition,i))return o;const u=qo(r.fieldTransforms,a,i),l=i.data;return l.setAll(Ju(r)),l.setAll(u),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(r,i,o){return Zn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function jf(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Gu(s.transform,r||null);i!=null&&(n===null&&(n=Me.empty()),n.set(s.field,i))}return n||null}function Po(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rt(n,s,(r,i)=>qf(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class On extends Ks{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tt extends Ks{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ju(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bo(t,e,n){const s=new Map;Y(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Bf(o,a,n[r]))}return s}function qo(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Pf(i,o,e))}return s}class xi extends Ks{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hf extends Ks{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re,K;function zf(t){switch(t){default:return O();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Zu(t){if(t===void 0)return Ge("GRPC error has no .code"),p.UNKNOWN;switch(t){case re.OK:return p.OK;case re.CANCELLED:return p.CANCELLED;case re.UNKNOWN:return p.UNKNOWN;case re.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case re.INTERNAL:return p.INTERNAL;case re.UNAVAILABLE:return p.UNAVAILABLE;case re.UNAUTHENTICATED:return p.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case re.NOT_FOUND:return p.NOT_FOUND;case re.ALREADY_EXISTS:return p.ALREADY_EXISTS;case re.PERMISSION_DENIED:return p.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case re.ABORTED:return p.ABORTED;case re.OUT_OF_RANGE:return p.OUT_OF_RANGE;case re.UNIMPLEMENTED:return p.UNIMPLEMENTED;case re.DATA_LOSS:return p.DATA_LOSS;default:return O()}}(K=re||(re={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ht(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Mu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=new ce(N.comparator);function We(){return Gf}const el=new ce(N.comparator);function Zt(...t){let e=el;for(const n of t)e=e.insert(n.key,n);return e}function tl(t){let e=el;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ct(){return on()}function nl(){return on()}function on(){return new Kt(t=>t.toString(),(t,e)=>t.isEqual(e))}const Qf=new ce(N.comparator),Wf=new le(N.comparator);function j(...t){let e=Wf;for(const n of t)e=e.add(n);return e}const Xf=new le(W);function sl(){return Xf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Fn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new zs(V.min(),r,sl(),We(),j())}}class Fn{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Fn(s,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class rl{constructor(e,n){this.targetId=e,this.Et=n}}class il{constructor(e,n,s=De.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Uo{constructor(){this.At=0,this.Rt=jo(),this.bt=De.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=j(),n=j(),s=j();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:O()}}),new Fn(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=jo()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Yf{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=We(),this.qt=$o(),this.Ut=new le(W)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Hr(i))if(s===0){const o=new N(i.path);this.Qt(n,o,Se.newNoDocument(o,V.min()))}else Y(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Hr(a.target)){const u=new N(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,Se.newNoDocument(u,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=j();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new zs(e,n,this.Ut,this.Lt,s);return this.Lt=We(),this.qt=$o(),this.Ut=new le(W),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Uo,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new le(W),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Uo),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function $o(){return new ce(N.comparator)}function jo(){return new ce(N.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),em=(()=>({and:"AND",or:"OR"}))();class tm{constructor(e,n){this.databaseId=e,this.wt=n}}function vs(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ol(t,e){return t.wt?e.toBase64():e.toUint8Array()}function nm(t,e){return vs(t,e.toTimestamp())}function qe(t){return Y(!!t),V.fromTimestamp(function(e){const n=et(e);return new ue(n.seconds,n.nanos)}(t))}function Ni(t,e){return function(n){return new ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function al(t){const e=ee.fromString(t);return Y(hl(e)),e}function Gr(t,e){return Ni(t.databaseId,e.path)}function pr(t,e){const n=al(e);if(n.get(1)!==t.databaseId.projectId)throw new R(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(ul(n))}function Qr(t,e){return Ni(t.databaseId,e)}function sm(t){const e=al(t);return e.length===4?ee.emptyPath():ul(e)}function Wr(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ul(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ho(t,e,n){return{name:Gr(t,e),fields:n.value.mapValue.fields}}function rm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,l){return u.wt?(Y(l===void 0||typeof l=="string"),De.fromBase64String(l||"")):(Y(l===void 0||l instanceof Uint8Array),De.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:Zu(u.code);return new R(l,u.message||"")}(o);n=new il(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=pr(t,s.document.name),i=qe(s.document.updateTime),o=s.document.createTime?qe(s.document.createTime):V.min(),a=new Me({mapValue:{fields:s.document.fields}}),u=Se.newFoundDocument(r,i,o,a),l=s.targetIds||[],c=s.removedTargetIds||[];n=new es(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=pr(t,s.document),i=s.readTime?qe(s.readTime):V.min(),o=Se.newNoDocument(r,i),a=s.removedTargetIds||[];n=new es([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=pr(t,s.document),i=s.removedTargetIds||[];n=new es([],i,r,null)}else{if(!("filter"in e))return O();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Kf(r),o=s.targetId;n=new rl(o,i)}}return n}function im(t,e){let n;if(e instanceof On)n={update:Ho(t,e.key,e.value)};else if(e instanceof xi)n={delete:Gr(t,e.key)};else if(e instanceof Tt)n={update:Ho(t,e.key,e.data),updateMask:mm(e.fieldMask)};else{if(!(e instanceof Hf))return O();n={verify:Gr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ps)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof wn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof En)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ys)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw O()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:nm(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:O()}(t,e.precondition)),n}function om(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?qe(s.updateTime):qe(r);return i.isEqual(V.min())&&(i=qe(r)),new Uf(i,s.transformResults||[])}(n,e))):[]}function am(t,e){return{documents:[Qr(t,e.path)]}}function um(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Qr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length!==0)return cl($e.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:St(c.field),direction:hm(c.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(u,l){return u.wt||qs(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function lm(t){let e=sm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Y(s===1);const c=n.from[0];c.allDescendants?r=c.collectionId:e=e.child(c.collectionId)}let i=[];n.where&&(i=function(c){const h=ll(c);return h instanceof $e&&Pu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new sn(It(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,qs(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,f=c.values||[];return new gs(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,f=c.values||[];return new gs(f,h)}(n.endAt)),Nf(e,r,o,i,a,"F",u,l)}function cm(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ll(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=It(e.unaryFilter.field);return ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=It(e.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=It(e.unaryFilter.field);return ae.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=It(e.unaryFilter.field);return ae.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return ae.create(It(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return $e.create(e.compositeFilter.filters.map(n=>ll(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function hm(t){return Jf[t]}function dm(t){return Zf[t]}function fm(t){return em[t]}function St(t){return{fieldPath:t.canonicalString()}}function It(t){return Ie.fromServerFormat(t.fieldPath)}function cl(t){return t instanceof ae?function(e){if(e.op==="=="){if(No(e.value))return{unaryFilter:{field:St(e.field),op:"IS_NAN"}};if(xo(e.value))return{unaryFilter:{field:St(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(No(e.value))return{unaryFilter:{field:St(e.field),op:"IS_NOT_NAN"}};if(xo(e.value))return{unaryFilter:{field:St(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:St(e.field),op:dm(e.op),value:e.value}}}(t):t instanceof $e?function(e){const n=e.getFilters().map(s=>cl(s));return n.length===1?n[0]:{compositeFilter:{op:fm(e.op),filters:n}}}(t):O()}function mm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&$f(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=rn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=rn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=nl();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const u=Yu(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(V.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&Rt(this.mutations,e.mutations,(n,s)=>Po(n,s))&&Rt(this.baseMutations,e.baseMutations,(n,s)=>Po(n,s))}}class Ri{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Y(e.mutations.length===s.length);let r=Qf;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ri(e,n,s,r)}}/**
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
 */class pm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mt{constructor(e,n,s,r,i=V.min(),o=V.min(),a=De.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.ie=e}}function vm(t){const e=lm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kr(e,e.limit,"L"):e}/**
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
 */class wm{constructor(){this.Je=new Em}addToCollectionParentIndex(e,n){return this.Je.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return g.resolve()}deleteFieldIndex(e,n){return g.resolve()}getDocumentsMatchingTarget(e,n){return g.resolve(null)}getIndexType(e,n){return g.resolve(0)}getFieldIndexes(e,n){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,n){return g.resolve(Ze.min())}getMinOffsetFromCollectionGroup(e,n){return g.resolve(Ze.min())}updateCollectionGroup(e,n,s){return g.resolve()}updateIndexEntries(e,n){return g.resolve()}}class Em{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new le(ee.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new le(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ft(0)}static vn(){return new Ft(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.changes=new Kt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&rn(s.mutation,r,Fe.empty(),ue.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,j()).next(()=>s))}getLocalViewOfDocuments(e,n,s=j()){const r=ct();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Zt();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ct();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,j()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=We();const o=on(),a=on();return n.forEach((u,l)=>{const c=s.get(l.key);r.has(l.key)&&(c===void 0||c.mutation instanceof Tt)?i=i.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),rn(c.mutation,l,c.mutation.getFieldMask(),ue.now())):o.set(l.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Tm(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=on();let r=new ce((o,a)=>o-a),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=s.get(u)||Fe.empty();c=a.applyToLocalView(l,c),s.set(u,c);const h=(r.get(a.batchId)||j()).add(u);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=nl();c.forEach(f=>{if(!i.has(f)){const d=Yu(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):g.resolve(ct());let a=-1,u=i;return o.next(l=>g.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?g.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,u,l,j())).next(c=>({batchId:a,changes:tl(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(s=>{let r=Zt();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Zt();return this.indexManager.getCollectionParents(e,r).next(o=>g.forEach(o,a=>{const u=function(l,c){return new Us(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(l=>{l.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,Se.newInvalidDocument(l)))});let o=Zt();return i.forEach((a,u)=>{const l=r.get(a);l!==void 0&&rn(l.mutation,u,Fe.empty(),ue.now()),js(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:qe(s.createTime)}),g.resolve()}getNamedQuery(e,n){return g.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:vm(s.bundledQuery),readTime:qe(s.readTime)}}(n)),g.resolve()}}/**
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
 */class Im{constructor(){this.overlays=new ce(N.comparator),this.es=new Map}getOverlay(e,n){return g.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ct();return g.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),g.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(e,n,s){const r=ct(),i=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return g.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ce((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let c=i.get(l.largestBatchId);c===null&&(c=ct(),i=i.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=ct(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=r)););return g.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new pm(n,s));let i=this.es.get(n);i===void 0&&(i=j(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.ns=new le(de.ss),this.rs=new le(de.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new de(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new de(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new N(new ee([])),s=new de(n,e),r=new de(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new N(new ee([])),s=new de(n,e),r=new de(n,e+1);let i=j();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new de(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class de{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return N.comparator(e.key,n.key)||W(e._s,n._s)}static os(e,n){return W(e._s,n._s)||N.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new le(de.ss)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gm(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new de(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new de(n,0),r=new de(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new le(W);return n.forEach(r=>{const i=new de(r,0),o=new de(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;N.isDocumentKey(i)||(i=i.child(""));const o=new de(new N(i),0);let a=new le(W);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(u._s)),!0)},o),g.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Y(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(n.mutations,r=>{const i=new de(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new de(n,0),r=this.gs.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.Es=e,this.docs=new ce(N.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():Se.newInvalidDocument(n))}getEntries(e,n){let s=We();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Se.newInvalidDocument(r))}),g.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=We();const o=n.path,a=new N(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||mf(ff(c),s)<=0||(r.has(c.key)||js(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(e,n,s,r){O()}As(e,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Dm(this)}getSize(e){return g.resolve(this.size)}}class Dm extends bm{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),g.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.persistence=e,this.Rs=new Kt(n=>Ai(n),Di),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Mi,this.targetCount=0,this.vs=Ft.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),g.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ft(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.Dn(n),g.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return g.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),g.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return g.resolve(s)}containsKey(e,n){return g.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ii(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new _m(this),this.indexManager=new wm,this.remoteDocumentCache=function(s){return new Am(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new ym(n),this.Ns=new Sm(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Im,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new km(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){D("MemoryPersistence","Starting transaction:",e);const r=new Nm(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Nm extends pf{constructor(e){super(),this.currentSequenceNumber=e}}class Li{constructor(e){this.persistence=e,this.Fs=new Mi,this.$s=null}static Bs(e){return new Li(e)}get Ls(){if(this.$s)return this.$s;throw O()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),g.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const r=N.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,V.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=j(),r=j();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Oi(e,n.fromCache,s,r)}}/**
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
 */class Rm{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Fo(n))return g.resolve(null);let s=Qe(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Kr(n,null,"F"),s=Qe(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=j(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,Kr(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,s,r){return Fo(n)||r.isEqual(V.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Ao()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zr(n)),this.Bi(e,o,n,df(r,-1)))})}Fi(e,n){let s=new le(Hu(e));return n.forEach((r,i)=>{js(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Ao()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",zr(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ze.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new ce(W),this.Ui=new Kt(i=>Ai(i),Di),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cm(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Lm(t,e,n,s){return new Mm(t,e,n,s)}async function dl(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=j();for(const l of r){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of i){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Om(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let f=g.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(v=>{const T=u.docVersions.get(d);Y(T!==null),v.version.compareTo(T)<0&&(c.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=j();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function fl(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Fm(t,e){const n=B(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,c.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(De.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,s)),r=r.insert(h,d),function(v,T,C){return v.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,d,c)&&a.push(n.Cs.updateTargetData(i,d))});let u=We(),l=j();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(Vm(i,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!s.isEqual(V.min())){const c=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(c)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(n.qi=r,i))}function Vm(t,e,n){let s=j(),r=j();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=We();return n.forEach((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(V.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:r}})}function Pm(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Bm(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,g.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new mt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Xr(t,e,n){const s=B(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ln(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Ko(t,e,n){const s=B(t);let r=V.min(),i=j();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=B(a),h=c.Ui.get(l);return h!==void 0?g.resolve(c.qi.get(h)):c.Cs.getTargetData(u,l)}(s,o,Qe(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:V.min(),n?i:j())).next(a=>(qm(s,Of(e),a),{documents:a,Hi:i})))}function qm(t,e,n){let s=t.Ki.get(e)||V.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class zo{constructor(){this.activeTargetIds=sl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Um{constructor(){this.Lr=new zo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new zo,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $m{Ur(e){}shutdown(){}}/**
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
 */class Go{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);D("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(u=>(D("RestConnection","Received: ",u),u),u=>{throw qr("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+jt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=jm[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new tf;a.setWithCredentials(!0),a.listenOnce(Jd.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case gr.NO_ERROR:const l=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(l)),i(l);break;case gr.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new R(p.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(T)>=0?T:p.UNKNOWN}(f.status);o(new R(d,f.message))}else o(new R(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new R(p.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(r);a.send(n,"POST",u,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Xd(),o=Yd(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ef({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=r.join("");D("Connection","Creating WebChannel: "+u,a);const l=i.createWebChannel(u,a);let c=!1,h=!1;const f=new Hm({Hr:v=>{h?D("Connection","Not sending because WebChannel is closed:",v):(c||(D("Connection","Opening WebChannel transport."),l.open(),c=!0),D("Connection","WebChannel sending:",v),l.send(v))},Jr:()=>l.close()}),d=(v,T,C)=>{v.listen(T,U=>{try{C(U)}catch(S){setTimeout(()=>{throw S},0)}})};return d(l,Hn.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),d(l,Hn.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),f.io())}),d(l,Hn.EventType.ERROR,v=>{h||(h=!0,qr("Connection","WebChannel transport errored:",v),f.io(new R(p.UNAVAILABLE,"The operation could not be completed")))}),d(l,Hn.EventType.MESSAGE,v=>{var T;if(!h){const C=v.data[0];Y(!!C);const U=C,S=U.error||((T=U[0])===null||T===void 0?void 0:T.error);if(S){D("Connection","WebChannel received error:",S);const I=S.status;let q=function(m){const w=re[m];if(w!==void 0)return Zu(w)}(I),H=S.message;q===void 0&&(q=p.INTERNAL,H="Unknown error status: "+I+" with message "+S.message),h=!0,f.io(new R(q,H)),l.close()}else D("Connection","WebChannel received:",C),f.ro(C)}}),d(o,Zd.STAT_EVENT,v=>{v.stat===Io.PROXY?D("Connection","Detected buffering proxy"):v.stat===Io.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function yr(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){return new tm(t,!0)}class ml{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&D("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s,r,i,o,a,u){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ml(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Ge(n.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new R(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zm extends gl{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=rm(this.yt,e),s=function(r){if(!("targetChange"in r))return V.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?V.min():i.readTime?qe(i.readTime):V.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Wr(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Hr(a)?{documents:am(r,a)}:{query:um(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ol(r,i.resumeToken):i.snapshotVersion.compareTo(V.min())>0&&(o.readTime=vs(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=cm(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Wr(this.yt),n.removeTarget=e,this.Bo(n)}}class Gm extends gl{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=om(e.writeResults,e.commitTime),s=qe(e.commitTime);return this.listener.Zo(s,n)}return Y(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Wr(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>im(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new R(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(p.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(p.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Wm{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ge(n),this.ou=!1):D("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Ct(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=B(a);u._u.add(4),await Vn(u),u.gu.set("Unknown"),u._u.delete(4),await Qs(u)}(this))})}),this.gu=new Wm(s,r)}}async function Qs(t){if(Ct(t))for(const e of t.wu)await e(!0)}async function Vn(t){for(const e of t.wu)await e(!1)}function pl(t,e){const n=B(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Pi(n)?Vi(n):zt(n).ko()&&Fi(n,e))}function yl(t,e){const n=B(t),s=zt(n);n.du.delete(e),s.ko()&&vl(n,e),n.du.size===0&&(s.ko()?s.Fo():Ct(n)&&n.gu.set("Unknown"))}function Fi(t,e){t.yu.Ot(e.targetId),zt(t).zo(e)}function vl(t,e){t.yu.Ot(e),zt(t).Ho(e)}function Vi(t){t.yu=new Yf({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),zt(t).start(),t.gu.uu()}function Pi(t){return Ct(t)&&!zt(t).No()&&t.du.size>0}function Ct(t){return B(t)._u.size===0}function wl(t){t.yu=void 0}async function Ym(t){t.du.forEach((e,n)=>{Fi(t,e)})}async function Jm(t,e){wl(t),Pi(t)?(t.gu.hu(e),Vi(t)):t.gu.set("Unknown")}async function Zm(t,e,n){if(t.gu.set("Online"),e instanceof il&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ws(t,s)}else if(e instanceof es?t.yu.Kt(e):e instanceof rl?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(V.min()))try{const s=await fl(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(u);l&&r.du.set(u,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=r.du.get(a);if(!u)return;r.du.set(a,u.withResumeToken(De.EMPTY_BYTE_STRING,u.snapshotVersion)),vl(r,a);const l=new mt(u.target,a,1,u.sequenceNumber);Fi(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){D("RemoteStore","Failed to raise snapshot:",s),await ws(t,s)}}async function ws(t,e,n){if(!Ln(e))throw e;t._u.add(1),await Vn(t),t.gu.set("Offline"),n||(n=()=>fl(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Qs(t)})}function El(t,e){return e().catch(n=>ws(t,n,e))}async function Ws(t){const e=B(t),n=tt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;eg(e);)try{const r=await Pm(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,tg(e,r)}catch(r){await ws(e,r)}bl(e)&&Tl(e)}function eg(t){return Ct(t)&&t.fu.length<10}function tg(t,e){t.fu.push(e);const n=tt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function bl(t){return Ct(t)&&!tt(t).No()&&t.fu.length>0}function Tl(t){tt(t).start()}async function ng(t){tt(t).eu()}async function sg(t){const e=tt(t);for(const n of t.fu)e.Xo(n.mutations)}async function rg(t,e,n){const s=t.fu.shift(),r=Ri.from(s,e,n);await El(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ws(t)}async function ig(t,e){e&&tt(t).Yo&&await async function(n,s){if(r=s.code,zf(r)&&r!==p.ABORTED){const i=n.fu.shift();tt(n).Mo(),await El(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ws(n)}var r}(t,e),bl(t)&&Tl(t)}async function Qo(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const s=Ct(n);n._u.add(3),await Vn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Qs(n)}async function og(t,e){const n=B(t);e?(n._u.delete(2),await Qs(n)):e||(n._u.add(2),await Vn(n),n.gu.set("Unknown"))}function zt(t){return t.pu||(t.pu=function(e,n,s){const r=B(e);return r.su(),new zm(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Ym.bind(null,t),Zr:Jm.bind(null,t),Wo:Zm.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Pi(t)?Vi(t):t.gu.set("Unknown")):(await t.pu.stop(),wl(t))})),t.pu}function tt(t){return t.Iu||(t.Iu=function(e,n,s){const r=B(e);return r.su(),new Gm(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:ng.bind(null,t),Zr:ig.bind(null,t),tu:sg.bind(null,t),Zo:rg.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ws(t)):(await t.Iu.stop(),t.fu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Bi(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qi(t,e){if(Ge("AsyncQueue",`${e}: ${t}`),Ln(t))return new R(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e?(n,s)=>e(n,s)||N.comparator(n.key,s.key):(n,s)=>N.comparator(n.key,s.key),this.keyedMap=Zt(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new _t(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new _t;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.Tu=new ce(N.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):O():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vt{constructor(e,n,s,r,i,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vt(e,n,_t.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$s(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.Au=void 0,this.listeners=[]}}class ug{constructor(){this.queries=new Kt(e=>ju(e),$s),this.onlineState="Unknown",this.Ru=new Set}}async function lg(t,e){const n=B(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ag),r)try{i.Au=await n.onListen(s)}catch(o){const a=qi(o,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ui(n)}async function cg(t,e){const n=B(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function hg(t,e){const n=B(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ui(n)}function dg(t,e,n){const s=B(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ui(t){t.Ru.forEach(e=>{e.next()})}class fg{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Vt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Vt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.key=e}}class Sl{constructor(e){this.key=e}}class mg{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=j(),this.mutatedKeys=j(),this.Gu=Hu(e),this.Qu=new _t(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Wo,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((c,h)=>{const f=r.get(c),d=js(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),T=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let C=!1;f&&d?f.data.isEqual(d.data)?v!==T&&(s.track({type:3,doc:d}),C=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),C=!0,(u&&this.Gu(d,u)>0||l&&this.Gu(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),C=!0):f&&!d&&(s.track({type:1,doc:f}),C=!0,(u||l)&&(a=!0)),C&&(d?(o=o.add(d),i=T?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),s.track({type:1,doc:c})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,c)=>function(h,f){const d=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return d(h)-d(f)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,i.length!==0||u?{snapshot:new Vt(this.query,e.Qu,r,i,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Wo,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=j(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Sl(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Cl(s))}),n}tc(e){this.qu=e.Hi,this.Ku=j();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Vt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class gg{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class pg{constructor(e){this.key=e,this.nc=!1}}class yg{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Kt(a=>ju(a),$s),this.rc=new Map,this.oc=new Set,this.uc=new ce(N.comparator),this.cc=new Map,this.ac=new Mi,this.hc={},this.lc=new Map,this.fc=Ft.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function vg(t,e){const n=Dg(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Bm(n.localStore,Qe(e));n.isPrimaryClient&&pl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await wg(n,e,s,a==="current",o.resumeToken)}return r}async function wg(t,e,n,s,r){t._c=(h,f,d)=>async function(v,T,C,U){let S=T.view.Wu(C);S.$i&&(S=await Ko(v.localStore,T.query,!1).then(({documents:H})=>T.view.Wu(H,S)));const I=U&&U.targetChanges.get(T.targetId),q=T.view.applyChanges(S,v.isPrimaryClient,I);return Yo(v,T.targetId,q.Xu),q.snapshot}(t,h,f,d);const i=await Ko(t.localStore,e,!0),o=new mg(e,i.Hi),a=o.Wu(i.documents),u=Fn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,u);Yo(t,n,l.Xu);const c=new gg(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Eg(t,e){const n=B(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!$s(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Xr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),yl(n.remoteStore,s.targetId),Yr(n,s.targetId)}).catch(Mn)):(Yr(n,s.targetId),await Xr(n.localStore,s.targetId,!0))}async function bg(t,e,n){const s=_g(t);try{const r=await function(i,o){const a=B(i),u=ue.now(),l=o.reduce((f,d)=>f.add(d.key),j());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=We(),v=j();return a.Gi.getEntries(f,l).next(T=>{d=T,d.forEach((C,U)=>{U.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(T=>{c=T;const C=[];for(const U of o){const S=jf(U,c.get(U.key).overlayedDocument);S!=null&&C.push(new Tt(U.key,S,$u(S.value.mapValue),Be.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,C,o)}).next(T=>{h=T;const C=T.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(f,T.batchId,C)})}).then(()=>({batchId:h.batchId,changes:tl(c)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.hc[i.currentUser.toKey()];u||(u=new ce(W)),u=u.insert(o,a),i.hc[i.currentUser.toKey()]=u}(s,r.batchId,n),await Pn(s,r.changes),await Ws(s.remoteStore)}catch(r){const i=qi(r,"Failed to persist write");n.reject(i)}}async function Il(t,e){const n=B(t);try{const s=await Fm(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Y(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Y(o.nc):r.removedDocuments.size>0&&(Y(o.nc),o.nc=!1))}),await Pn(n,s,e)}catch(s){await Mn(s)}}function Xo(t,e,n){const s=B(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=B(i);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&Ui(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Tg(t,e,n){const s=B(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new ce(N.comparator);o=o.insert(i,Se.newNoDocument(i,V.min()));const a=j().add(i),u=new zs(V.min(),new Map,new le(W),o,a);await Il(s,u),s.uc=s.uc.remove(i),s.cc.delete(e),$i(s)}else await Xr(s.localStore,e,!1).then(()=>Yr(s,e,n)).catch(Mn)}async function Cg(t,e){const n=B(t),s=e.batch.batchId;try{const r=await Om(n.localStore,e);Al(n,s,null),kl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pn(n,r)}catch(r){await Mn(r)}}async function Sg(t,e,n){const s=B(t);try{const r=await function(i,o){const a=B(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(Y(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(s.localStore,e);Al(s,e,n),kl(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Pn(s,r)}catch(r){await Mn(r)}}function kl(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Al(t,e,n){const s=B(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Yr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Dl(t,s)})}function Dl(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(yl(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),$i(t))}function Yo(t,e,n){for(const s of n)s instanceof Cl?(t.ac.addReference(s.key,e),Ig(t,s)):s instanceof Sl?(D("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Dl(t,s.key)):O()}function Ig(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(D("SyncEngine","New document in limbo: "+n),t.oc.add(s),$i(t))}function $i(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new N(ee.fromString(e)),s=t.fc.next();t.cc.set(s,new pg(n)),t.uc=t.uc.insert(n,s),pl(t.remoteStore,new mt(Qe(_i(n.path)),s,2,Ii.at))}}async function Pn(t,e,n){const s=B(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const c=Oi.Ci(u.targetId,l);i.push(c)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,u){const l=B(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>g.forEach(u,h=>g.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>g.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Ln(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const f=l.qi.get(h),d=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(d);l.qi=l.qi.insert(h,v)}}}(s.localStore,i))}async function kg(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const s=await dl(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new R(p.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Pn(n,s.ji)}}function Ag(t,e){const n=B(t),s=n.cc.get(e);if(s&&s.nc)return j().add(s.key);{let r=j();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Dg(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Il.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ag.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Tg.bind(null,e),e.sc.Wo=hg.bind(null,e.eventManager),e.sc.wc=dg.bind(null,e.eventManager),e}function _g(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sg.bind(null,e),e}class xg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Gs(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Lm(this.persistence,new Rm,e.initialUser,this.yt)}yc(e){return new xm(Li.Bs,this.yt)}gc(e){return new Um}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ng{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kg.bind(null,this.syncEngine),await og(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ug}createDatastore(e){const n=Gs(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Km(r));var r;return function(i,o,a,u){return new Qm(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Xo(this.syncEngine,a,0),o=Go.C()?new Go:new $m,new Xm(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,u,l){const c=new yg(s,r,i,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);D("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Vn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t,e,n){if(!n)throw new R(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rg(t,e,n,s){if(e===!0&&s===!0)throw new R(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jo(t){if(!N.isDocumentKey(t))throw new R(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zo(t){if(N.isDocumentKey(t))throw new R(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ji(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ji(t);throw new R(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Map;class ta{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Rg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ta({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ta(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nf;switch(n.type){case"gapi":const s=n.client;return new af(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ea.get(e);n&&(D("ComponentProvider","Removing Datastore"),ea.delete(e),n.terminate())}(this),Promise.resolve()}}function Mg(t,e,n,s={}){var r;const i=(t=gt(t,Xs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&qr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ce.MOCK_USER;else{o=qc(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new R(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ce(u)}t._authCredentials=new sf(new Nu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Je(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class Ys{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ys(this.firestore,e,this._query)}}class Je extends Ys{constructor(e,n,s){super(e,n,_i(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new N(e))}withConverter(e){return new Je(this.firestore,e,this._path)}}function Lg(t,e,...n){if(t=xt(t),_l("collection","path",e),t instanceof Xs){const s=ee.fromString(e,...n);return Zo(s),new Je(t,null,s)}{if(!(t instanceof xe||t instanceof Je))throw new R(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ee.fromString(e,...n));return Zo(s),new Je(t.firestore,null,s)}}function na(t,e,...n){if(t=xt(t),arguments.length===1&&(e=Ru.R()),_l("doc","path",e),t instanceof Xs){const s=ee.fromString(e,...n);return Jo(s),new xe(t,null,new N(s))}{if(!(t instanceof xe||t instanceof Je))throw new R(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ee.fromString(e,...n));return Jo(s),new xe(t.firestore,t instanceof Je?t.converter:null,new N(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Og{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ce.UNAUTHENTICATED,this.clientId=Ru.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{D("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(D("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=qi(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vg(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await dl(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Pg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bg(t);D("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Qo(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qo(e.remoteStore,i)),t.onlineComponents=e}async function Bg(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await Vg(t,new xg)),t.offlineComponents}async function xl(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await Pg(t,new Ng)),t.onlineComponents}function qg(t){return xl(t).then(e=>e.syncEngine)}async function sa(t){const e=await xl(t),n=e.eventManager;return n.onListen=vg.bind(null,e.syncEngine),n.onUnlisten=Eg.bind(null,e.syncEngine),n}class Ug{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ml(this,"async_queue_retry"),this.Wc=()=>{const n=yr();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=yr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ft;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ln(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ge("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Bi.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&O()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function ra(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class bn extends Xs{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Ug,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rl(this),this._firestoreClient.terminate()}}function $g(t,e){const n=typeof t=="object"?t:Hh(),s=typeof t=="string"?t:e||"(default)",r=qh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Vc("firestore");i&&Mg(r,...i)}return r}function Nl(t){return t._firestoreClient||Rl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rl(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new yf(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Fg(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(De.fromBase64String(e))}catch(n){throw new R(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=/^__.*__$/;class Hg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Tt(e,this.data,this.fieldMask,n,this.fieldTransforms):new On(e,this.data,n,this.fieldTransforms)}}function Ll(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class zi{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new zi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Es(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ll(this.sa)&&jg.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Kg{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Gs(e)}da(e,n,s,r=!1){return new zi({sa:e,methodName:n,fa:s,path:Ie.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function zg(t){const e=t._freezeSettings(),n=Gs(t._databaseId);return new Kg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Gg(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Pl("Data must be an object, but it was:",o,s);const a=Fl(s,o);let u,l;if(i.merge)u=new Fe(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const f=Qg(e,h,n);if(!o.contains(f))throw new R(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Xg(c,f)||c.push(f)}u=new Fe(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Hg(new Me(a),u,l)}function Ol(t,e){if(Vl(t=xt(t)))return Pl("Unsupported field value:",e,t),Fl(t,e);if(t instanceof Ml)return function(n,s){if(!Ll(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ol(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vf(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ue.fromDate(n);return{timestampValue:vs(s.yt,r)}}if(n instanceof ue){const r=new ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vs(s.yt,r)}}if(n instanceof Ki)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pt)return{bytesValue:ol(s.yt,n._byteString)};if(n instanceof xe){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ni(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ji(n)}`)}(t,e)}function Fl(t,e){const n={};return Mu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ht(t,(s,r)=>{const i=Ol(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Vl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ue||t instanceof Ki||t instanceof Pt||t instanceof xe||t instanceof Ml)}function Pl(t,e,n){if(!Vl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ji(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Qg(t,e,n){if((e=xt(e))instanceof Hi)return e._internalPath;if(typeof e=="string")return Bl(t,e);throw Es("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wg=new RegExp("[~\\*/\\[\\]]");function Bl(t,e,n){if(e.search(Wg)>=0)throw Es(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hi(...e.split("."))._internalPath}catch{throw Es(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Es(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new R(p.INVALID_ARGUMENT,a+t+u)}function Xg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ul("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Yg extends ql{data(){return super.data()}}function Ul(t,e){return typeof e=="string"?Bl(t,e):e instanceof Hi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zg{convertValue(e,n="none"){switch(Et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const s={};return Ht(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ki(ie(e.latitude),ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ou(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(yn(e));default:return null}}convertTimestamp(e){const n=et(e);return new ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ee.fromString(e);Y(hl(s));const r=new pn(s.get(1),s.get(3)),i=new N(s.popFirst(5));return r.isEqual(n)||Ge(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $l extends ql{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ul("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ts extends $l{data(e={}){return super.data(e)}}class tp{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new en(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ts(this._firestore,this._userDataWriter,s.key,s,new en(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ts(s._firestore,s._userDataWriter,o.doc.key,o.doc,new en(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ts(s._firestore,s._userDataWriter,o.doc.key,o.doc,new en(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:np(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function np(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class jl extends Zg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function sp(t,e,n){t=gt(t,xe);const s=gt(t.firestore,bn),r=ep(t.converter,e,n);return Hl(s,[Gg(zg(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Be.none())])}function rp(t){return Hl(gt(t.firestore,bn),[new xi(t._key,Be.none())])}function ip(t,...e){var n,s,r;t=xt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ra(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ra(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let u,l,c;if(t instanceof xe)l=gt(t.firestore,bn),c=_i(t._key.path),u={next:h=>{e[o]&&e[o](op(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=gt(t,Ys);l=gt(h.firestore,bn),c=h._query;const f=new jl(l);u={next:d=>{e[o]&&e[o](new tp(l,f,h,d))},error:e[o+1],complete:e[o+2]},Jg(t._query)}return function(h,f,d,v){const T=new Og(v),C=new fg(f,T,d);return h.asyncQueue.enqueueAndForget(async()=>lg(await sa(h),C)),()=>{T.bc(),h.asyncQueue.enqueueAndForget(async()=>cg(await sa(h),C))}}(Nl(l),c,a,u)}function Hl(t,e){return function(n,s){const r=new ft;return n.asyncQueue.enqueueAndForget(async()=>bg(await qg(n),s,r)),r.promise}(Nl(t),e)}function op(t,e,n){const s=n.docs.get(e._key),r=new jl(t);return new $l(t,r,e._key,s,new en(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){jt=n})(jh),is(new un("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new bn(new rf(n.getProvider("auth-internal")),new lf(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pn(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),At(ko,"3.8.3",t),At(ko,"3.8.3","esm2017")})();var ap="firebase",up="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(ap,up,"app");const lp={apiKey:"AIzaSyBbjyRWTrC1w4X7dAGNBMqSkz_YUh8mK0w",authDomain:"todo-36098.firebaseapp.com",projectId:"todo-36098",storageBucket:"todo-36098.appspot.com",messagingSenderId:"331789891603",appId:"1:331789891603:web:9f002d4f2421b3fa32e7e6",measurementId:"G-WTKEJGHXT3",databaseURL:"https://todo-36098-default-rtdb.firebaseio.com/"},cp=ka(lp),vr=$g(cp);function hp(t){function e(r){ip(Lg(vr,t),i=>{const o=i.docs.map(a=>a.data());r(o)})}function n(r,i){sp(na(vr,t,r),i)}function s(r){rp(na(vr,t,r))}return{read:e,write:n,remove:s}}const dp="folders",wr=hp(dp),fp=()=>{function t(s){wr.read(s)}function e(s){wr.write(s.id,s)}function n(s){wr.remove(s)}return{readFolders:t,writeFolder:e,deleteFolder:n}},uy=ac("todo",()=>{const t=fp(),e=J([]),n=J("");s();function s(){t.readFolders(a=>{e.value=a,o(n.value)})}function r(a){t.writeFolder(a),o(a.id)}function i(a){t.deleteFolder(a),o(n.value==a?"":n.value)}function o(a){a===""?n.value=e.value[0].id:n.value=a}return{folders:e,currentFolderId:n,addFolder:r,deleteFolder:i,openFolder:o}});var ly=je({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=M(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>P(t.tag,{class:n.value},Le(e.default))}});function mp({validate:t,resetValidation:e,requiresQForm:n}){const s=uc(ya,!1);if(s!==!1){const{props:r,proxy:i}=Re();Object.assign(i,{validate:t,resetValidation:e}),fe(()=>r.disable,o=>{o===!0?(typeof e=="function"&&e(),s.unbindComponent(i)):s.bindComponent(i)}),Cn(()=>{r.disable!==!0&&s.bindComponent(i)}),nt(()=>{r.disable!==!0&&s.unbindComponent(i)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const ia=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,oa=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,aa=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Gn=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Qn=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Er={date:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),time:t=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),fulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),timeOrFulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),email:t=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),hexColor:t=>ia.test(t),hexaColor:t=>oa.test(t),hexOrHexaColor:t=>aa.test(t),rgbColor:t=>Gn.test(t),rgbaColor:t=>Qn.test(t),rgbOrRgbaColor:t=>Gn.test(t)||Qn.test(t),hexOrRgbColor:t=>ia.test(t)||Gn.test(t),hexaOrRgbaColor:t=>oa.test(t)||Qn.test(t),anyColor:t=>aa.test(t)||Gn.test(t)||Qn.test(t)},gp=[!0,!1,"ondemand"],pp={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:t=>gp.includes(t)}};function yp(t,e){const{props:n,proxy:s}=Re(),r=J(!1),i=J(null),o=J(null);mp({validate:v,resetValidation:d});let a=0,u;const l=M(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),c=M(()=>n.disable!==!0&&l.value===!0),h=M(()=>n.error===!0||r.value===!0),f=M(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:i.value);fe(()=>n.modelValue,()=>{T()}),fe(()=>n.reactiveRules,U=>{U===!0?u===void 0&&(u=fe(()=>n.rules,()=>{T(!0)})):u!==void 0&&(u(),u=void 0)},{immediate:!0}),fe(t,U=>{U===!0?o.value===null&&(o.value=!1):o.value===!1&&(o.value=!0,c.value===!0&&n.lazyRules!=="ondemand"&&e.value===!1&&C())});function d(){a++,e.value=!1,o.value=null,r.value=!1,i.value=null,C.cancel()}function v(U=n.modelValue){if(c.value!==!0)return!0;const S=++a,I=e.value!==!0?()=>{o.value=!0}:()=>{},q=(m,w)=>{m===!0&&I(),r.value=m,i.value=w||null,e.value=!1},H=[];for(let m=0;m<n.rules.length;m++){const w=n.rules[m];let b;if(typeof w=="function"?b=w(U,Er):typeof w=="string"&&Er[w]!==void 0&&(b=Er[w](U)),b===!1||typeof b=="string")return q(!0,b),!1;b!==!0&&b!==void 0&&H.push(b)}return H.length===0?(q(!1),!0):(e.value=!0,Promise.all(H).then(m=>{if(m===void 0||Array.isArray(m)===!1||m.length===0)return S===a&&q(!1),!0;const w=m.find(b=>b===!1||typeof b=="string");return S===a&&q(w!==void 0,w),w===void 0},m=>(S===a&&(console.error(m),q(!0)),!1)))}function T(U){c.value===!0&&n.lazyRules!=="ondemand"&&(o.value===!0||n.lazyRules!==!0&&U!==!0)&&C()}const C=lc(v,0);return nt(()=>{u!==void 0&&u(),C.cancel()}),Object.assign(s,{resetValidation:d,validate:v}),ti(s,"hasError",()=>h.value),{isDirtyModel:o,hasRules:l,hasError:h,errorMessage:f,validate:v,resetValidation:d}}const ua=/^on[A-Z]/;function vp(t,e){const n={listeners:J({}),attributes:J({})};function s(){const r={},i={};for(const o in t)o!=="class"&&o!=="style"&&ua.test(o)===!1&&(r[o]=t[o]);for(const o in e.props)ua.test(o)===!0&&(i[o]=e.props[o]);n.attributes.value=r,n.listeners.value=i}return cc(s),s(),n}let br,Wn=0;const ge=new Array(256);for(let t=0;t<256;t++)ge[t]=(t+256).toString(16).substring(1);const wp=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return e=>{const n=[];for(let s=e;s>0;s--)n.push(Math.floor(Math.random()*256));return n}})(),la=4096;function Ep(){(br===void 0||Wn+16>la)&&(Wn=0,br=wp(la));const t=Array.prototype.slice.call(br,Wn,Wn+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,ge[t[0]]+ge[t[1]]+ge[t[2]]+ge[t[3]]+"-"+ge[t[4]]+ge[t[5]]+"-"+ge[t[6]]+ge[t[7]]+"-"+ge[t[8]]+ge[t[9]]+"-"+ge[t[10]]+ge[t[11]]+ge[t[12]]+ge[t[13]]+ge[t[14]]+ge[t[15]]}let ht=[],Tn=[];function Kl(t){Tn=Tn.filter(e=>e!==t)}function bp(t){Kl(t),Tn.push(t)}function ca(t){Kl(t),Tn.length===0&&ht.length>0&&(ht[ht.length-1](),ht=[])}function Js(t){Tn.length===0?t():ht.push(t)}function Tp(t){ht=ht.filter(e=>e!==t)}function Jr(t){return t===void 0?`f_${Ep()}`:t}function Zr(t){return t!=null&&(""+t).length>0}const Cp={...Cs,...pp,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Sp=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ip(){const{props:t,attrs:e,proxy:n,vnode:s}=Re();return{isDark:Ss(t,n.$q),editable:M(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:J(!1),focused:J(!1),hasPopupOpen:!1,splitAttrs:vp(e,s),targetUid:J(Jr(t.for)),rootRef:J(null),targetRef:J(null),controlRef:J(null)}}function kp(t){const{props:e,emit:n,slots:s,attrs:r,proxy:i}=Re(),{$q:o}=i;let a=null;t.hasValue===void 0&&(t.hasValue=M(()=>Zr(e.modelValue))),t.emitValue===void 0&&(t.emitValue=y=>{n("update:modelValue",y)}),t.controlEvents===void 0&&(t.controlEvents={onFocusin:_,onFocusout:x}),Object.assign(t,{clearValue:A,onControlFocusin:_,onControlFocusout:x,focus:w}),t.computedCounter===void 0&&(t.computedCounter=M(()=>{if(e.counter!==!1){const y=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,L=e.maxlength!==void 0?e.maxlength:e.maxValues;return y+(L!==void 0?" / "+L:"")}}));const{isDirtyModel:u,hasRules:l,hasError:c,errorMessage:h,resetValidation:f}=yp(t.focused,t.innerLoading),d=t.floatingLabel!==void 0?M(()=>e.stackLabel===!0||t.focused.value===!0||t.floatingLabel.value===!0):M(()=>e.stackLabel===!0||t.focused.value===!0||t.hasValue.value===!0),v=M(()=>e.bottomSlots===!0||e.hint!==void 0||l.value===!0||e.counter===!0||e.error!==null),T=M(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),C=M(()=>`q-field row no-wrap items-start q-field--${T.value}`+(t.fieldClass!==void 0?` ${t.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(d.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(t.isDark.value===!0?" q-field--dark":"")+(t.getControl===void 0?" q-field--auto-height":"")+(t.focused.value===!0?" q-field--focused":"")+(c.value===!0?" q-field--error":"")+(c.value===!0||t.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&v.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),U=M(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(c.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length>0&&t.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),S=M(()=>e.labelSlot===!0||e.label!==void 0),I=M(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&c.value!==!0?` text-${e.labelColor}`:"")),q=M(()=>({id:t.targetUid.value,editable:t.editable.value,focused:t.focused.value,floatingLabel:d.value,modelValue:e.modelValue,emitValue:t.emitValue})),H=M(()=>{const y={for:t.targetUid.value};return e.disable===!0?y["aria-disabled"]="true":e.readonly===!0&&(y["aria-readonly"]="true"),y});fe(()=>e.for,y=>{t.targetUid.value=Jr(y)});function m(){const y=document.activeElement;let L=t.targetRef!==void 0&&t.targetRef.value;L&&(y===null||y.id!==t.targetUid.value)&&(L.hasAttribute("tabindex")===!0||(L=L.querySelector("[tabindex]")),L&&L!==y&&L.focus({preventScroll:!0}))}function w(){Js(m)}function b(){Tp(m);const y=document.activeElement;y!==null&&t.rootRef.value.contains(y)&&y.blur()}function _(y){a!==null&&(clearTimeout(a),a=null),t.editable.value===!0&&t.focused.value===!1&&(t.focused.value=!0,n("focus",y))}function x(y,L){a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,!(document.hasFocus()===!0&&(t.hasPopupOpen===!0||t.controlRef===void 0||t.controlRef.value===null||t.controlRef.value.contains(document.activeElement)!==!1))&&(t.focused.value===!0&&(t.focused.value=!1,n("blur",y)),L!==void 0&&L())})}function A(y){an(y),o.platform.is.mobile!==!0?(t.targetRef!==void 0&&t.targetRef.value||t.rootRef.value).focus():t.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(t.inputRef.value.value=null),n("update:modelValue",null),n("clear",e.modelValue),Oe(()=>{f(),o.platform.is.mobile!==!0&&(u.value=!1)})}function G(){const y=[];return s.prepend!==void 0&&y.push(P("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Gt},s.prepend())),y.push(P("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},$())),c.value===!0&&e.noErrorIcon===!1&&y.push(we("error",[P(Wi,{name:o.iconSet.field.error,color:"negative"})])),e.loading===!0||t.innerLoading.value===!0?y.push(we("inner-loading-append",s.loading!==void 0?s.loading():[P(nc,{color:e.color})])):e.clearable===!0&&t.hasValue.value===!0&&t.editable.value===!0&&y.push(we("inner-clearable-append",[P(Wi,{class:"q-field__focusable-action",tag:"button",name:e.clearIcon||o.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:A})])),s.append!==void 0&&y.push(P("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Gt},s.append())),t.getInnerAppend!==void 0&&y.push(we("inner-append",t.getInnerAppend())),t.getControlChild!==void 0&&y.push(t.getControlChild()),y}function $(){const y=[];return e.prefix!==void 0&&e.prefix!==null&&y.push(P("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),t.getShadowControl!==void 0&&t.hasShadow.value===!0&&y.push(t.getShadowControl()),t.getControl!==void 0?y.push(t.getControl()):s.rawControl!==void 0?y.push(s.rawControl()):s.control!==void 0&&y.push(P("div",{ref:t.targetRef,class:"q-field__native row",tabindex:-1,...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},s.control(q.value))),S.value===!0&&y.push(P("div",{class:I.value},Le(s.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&y.push(P("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),y.concat(Le(s.default))}function X(){let y,L;c.value===!0?h.value!==null?(y=[P("div",{role:"alert"},h.value)],L=`q--slot-error-${h.value}`):(y=Le(s.error),L="q--slot-error"):(e.hideHint!==!0||t.focused.value===!0)&&(e.hint!==void 0?(y=[P("div",e.hint)],L=`q--slot-hint-${e.hint}`):(y=Le(s.hint),L="q--slot-hint"));const he=e.counter===!0||s.counter!==void 0;if(e.hideBottomSpace===!0&&he===!1&&y===void 0)return;const be=P("div",{key:L,class:"q-field__messages col"},y);return P("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale"),onClick:Gt},[e.hideBottomSpace===!0?be:P(Tr,{name:"q-transition--field-message"},()=>be),he===!0?P("div",{class:"q-field__counter"},s.counter!==void 0?s.counter():t.computedCounter.value):null])}function we(y,L){return L===null?null:P("div",{key:y,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},L)}let Ee=!1;return Ts(()=>{Ee=!0}),va(()=>{Ee===!0&&e.autofocus===!0&&i.focus()}),Cn(()=>{hc.value===!0&&e.for===void 0&&(t.targetUid.value=Jr()),e.autofocus===!0&&i.focus()}),nt(()=>{a!==null&&clearTimeout(a)}),Object.assign(i,{focus:w,blur:b}),function(){const L=t.getControl===void 0&&s.control===void 0?{...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...H.value}:H.value;return P("label",{ref:t.rootRef,class:[C.value,r.class],style:r.style,...L},[s.before!==void 0?P("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Gt},s.before()):null,P("div",{class:"q-field__inner relative-position col self-stretch"},[P("div",{ref:t.controlRef,class:U.value,tabindex:-1,...t.controlEvents},G()),v.value===!0?X():null]),s.after!==void 0?P("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Gt},s.after()):null])}}const ha={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},bs={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleLowerCase()}},zl=Object.keys(bs);zl.forEach(t=>{bs[t].regex=new RegExp(bs[t].pattern)});const Ap=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+zl.join("")+"])|(.)","g"),da=/[.*+?^${}()|[\]\\]/g,oe=String.fromCharCode(1),Dp={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function _p(t,e,n,s){let r,i,o,a;const u=J(null),l=J(h());function c(){return t.autogrow===!0||["textarea","text","search","url","tel","password"].includes(t.type)}fe(()=>t.type+t.autogrow,d),fe(()=>t.mask,m=>{if(m!==void 0)v(l.value,!0);else{const w=q(l.value);d(),t.modelValue!==w&&e("update:modelValue",w)}}),fe(()=>t.fillMask+t.reverseFillMask,()=>{u.value===!0&&v(l.value,!0)}),fe(()=>t.unmaskedValue,()=>{u.value===!0&&v(l.value)});function h(){if(d(),u.value===!0){const m=S(q(t.modelValue));return t.fillMask!==!1?H(m):m}return t.modelValue}function f(m){if(m<r.length)return r.slice(-m);let w="",b=r;const _=b.indexOf(oe);if(_>-1){for(let x=m-b.length;x>0;x--)w+=oe;b=b.slice(0,_)+w+b.slice(_)}return b}function d(){if(u.value=t.mask!==void 0&&t.mask.length>0&&c(),u.value===!1){a=void 0,r="",i="";return}const m=ha[t.mask]===void 0?t.mask:ha[t.mask],w=typeof t.fillMask=="string"&&t.fillMask.length>0?t.fillMask.slice(0,1):"_",b=w.replace(da,"\\$&"),_=[],x=[],A=[];let G=t.reverseFillMask===!0,$="",X="";m.replace(Ap,(L,he,be,E,ne)=>{if(E!==void 0){const se=bs[E];A.push(se),X=se.negate,G===!0&&(x.push("(?:"+X+"+)?("+se.pattern+"+)?(?:"+X+"+)?("+se.pattern+"+)?"),G=!1),x.push("(?:"+X+"+)?("+se.pattern+")?")}else if(be!==void 0)$="\\"+(be==="\\"?"":be),A.push(be),_.push("([^"+$+"]+)?"+$+"?");else{const se=he!==void 0?he:ne;$=se==="\\"?"\\\\\\\\":se.replace(da,"\\\\$&"),A.push(se),_.push("([^"+$+"]+)?"+$+"?")}});const we=new RegExp("^"+_.join("")+"("+($===""?".":"[^"+$+"]")+"+)?"+($===""?"":"["+$+"]*")+"$"),Ee=x.length-1,y=x.map((L,he)=>he===0&&t.reverseFillMask===!0?new RegExp("^"+b+"*"+L):he===Ee?new RegExp("^"+L+"("+(X===""?".":X)+"+)?"+(t.reverseFillMask===!0?"$":b+"*")):new RegExp("^"+L));o=A,a=L=>{const he=we.exec(t.reverseFillMask===!0?L:L.slice(0,A.length));he!==null&&(L=he.slice(1).join(""));const be=[],E=y.length;for(let ne=0,se=L;ne<E;ne++){const Ve=y[ne].exec(se);if(Ve===null)break;se=se.slice(Ve.shift().length),be.push(...Ve)}return be.length>0?be.join(""):L},r=A.map(L=>typeof L=="string"?L:oe).join(""),i=r.split(oe).join(w)}function v(m,w,b){const _=s.value,x=_.selectionEnd,A=_.value.length-x,G=q(m);w===!0&&d();const $=S(G),X=t.fillMask!==!1?H($):$,we=l.value!==X;_.value!==X&&(_.value=X),we===!0&&(l.value=X),document.activeElement===_&&Oe(()=>{if(X===i){const y=t.reverseFillMask===!0?i.length:0;_.setSelectionRange(y,y,"forward");return}if(b==="insertFromPaste"&&t.reverseFillMask!==!0){const y=x-1;C.right(_,y,y);return}if(["deleteContentBackward","deleteContentForward"].indexOf(b)>-1){const y=t.reverseFillMask===!0?x===0?X.length>$.length?1:0:Math.max(0,X.length-(X===i?0:Math.min($.length,A)+1))+1:x;_.setSelectionRange(y,y,"forward");return}if(t.reverseFillMask===!0)if(we===!0){const y=Math.max(0,X.length-(X===i?0:Math.min($.length,A+1)));y===1&&x===1?_.setSelectionRange(y,y,"forward"):C.rightReverse(_,y,y)}else{const y=X.length-A;_.setSelectionRange(y,y,"backward")}else if(we===!0){const y=Math.max(0,r.indexOf(oe),Math.min($.length,x)-1);C.right(_,y,y)}else{const y=x-1;C.right(_,y,y)}});const Ee=t.unmaskedValue===!0?q(X):X;String(t.modelValue)!==Ee&&n(Ee,!0)}function T(m,w,b){const _=S(q(m.value));w=Math.max(0,r.indexOf(oe),Math.min(_.length,w)),m.setSelectionRange(w,b,"forward")}const C={left(m,w,b,_){const x=r.slice(w-1).indexOf(oe)===-1;let A=Math.max(0,w-1);for(;A>=0;A--)if(r[A]===oe){w=A,x===!0&&w++;break}if(A<0&&r[w]!==void 0&&r[w]!==oe)return C.right(m,0,0);w>=0&&m.setSelectionRange(w,_===!0?b:w,"backward")},right(m,w,b,_){const x=m.value.length;let A=Math.min(x,b+1);for(;A<=x;A++)if(r[A]===oe){b=A;break}else r[A-1]===oe&&(b=A);if(A>x&&r[b-1]!==void 0&&r[b-1]!==oe)return C.left(m,x,x);m.setSelectionRange(_?w:b,b,"forward")},leftReverse(m,w,b,_){const x=f(m.value.length);let A=Math.max(0,w-1);for(;A>=0;A--)if(x[A-1]===oe){w=A;break}else if(x[A]===oe&&(w=A,A===0))break;if(A<0&&x[w]!==void 0&&x[w]!==oe)return C.rightReverse(m,0,0);w>=0&&m.setSelectionRange(w,_===!0?b:w,"backward")},rightReverse(m,w,b,_){const x=m.value.length,A=f(x),G=A.slice(0,b+1).indexOf(oe)===-1;let $=Math.min(x,b+1);for(;$<=x;$++)if(A[$-1]===oe){b=$,b>0&&G===!0&&b--;break}if($>x&&A[b-1]!==void 0&&A[b-1]!==oe)return C.leftReverse(m,x,x);m.setSelectionRange(_===!0?w:b,b,"forward")}};function U(m){if(e("keydown",m),dc(m)===!0)return;const w=s.value,b=w.selectionStart,_=w.selectionEnd;if(m.keyCode===37||m.keyCode===39){const x=C[(m.keyCode===39?"right":"left")+(t.reverseFillMask===!0?"Reverse":"")];m.preventDefault(),x(w,b,_,m.shiftKey)}else m.keyCode===8&&t.reverseFillMask!==!0&&b===_?C.left(w,b,_,!0):m.keyCode===46&&t.reverseFillMask===!0&&b===_&&C.rightReverse(w,b,_,!0)}function S(m){if(m==null||m==="")return"";if(t.reverseFillMask===!0)return I(m);const w=o;let b=0,_="";for(let x=0;x<w.length;x++){const A=m[b],G=w[x];if(typeof G=="string")_+=G,A===G&&b++;else if(A!==void 0&&G.regex.test(A))_+=G.transform!==void 0?G.transform(A):A,b++;else return _}return _}function I(m){const w=o,b=r.indexOf(oe);let _=m.length-1,x="";for(let A=w.length-1;A>=0&&_>-1;A--){const G=w[A];let $=m[_];if(typeof G=="string")x=G+x,$===G&&_--;else if($!==void 0&&G.regex.test($))do x=(G.transform!==void 0?G.transform($):$)+x,_--,$=m[_];while(b===A&&$!==void 0&&G.regex.test($));else return x}return x}function q(m){return typeof m!="string"||a===void 0?typeof m=="number"?a(""+m):m:a(m)}function H(m){return i.length-m.length<=0?m:t.reverseFillMask===!0&&m.length>0?i.slice(0,-m.length)+m:m+i.slice(m.length)}return{innerValue:l,hasMask:u,moveCursorForPaste:T,updateMaskValue:v,onMaskedKeydown:U}}const xp={name:String};function cy(t={}){return(e,n,s)=>{e[n](P("input",{class:"hidden"+(s||""),...t.value}))}}function Np(t){return M(()=>t.name||t.for)}function Rp(t,e){function n(){const s=t.modelValue;try{const r="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(i=>{r.items.add(i)}),{files:r.files}}catch{return{files:void 0}}}return e===!0?M(()=>{if(t.type==="file")return n()}):M(n)}const Mp=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Lp=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Op=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Fp=/[a-z0-9_ -]$/i;function Vp(t){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,t(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(He.is.firefox===!0?Fp.test(n.data)===!1:Mp.test(n.data)===!0||Lp.test(n.data)===!0||Op.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var hy=je({name:"QInput",inheritAttrs:!1,props:{...Cp,...Dp,...xp,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Sp,"paste","change","keydown","animationend"],setup(t,{emit:e,attrs:n}){const{proxy:s}=Re(),{$q:r}=s,i={};let o=NaN,a,u,l=null,c;const h=J(null),f=Np(t),{innerValue:d,hasMask:v,moveCursorForPaste:T,updateMaskValue:C,onMaskedKeydown:U}=_p(t,e,we,h),S=Rp(t,!0),I=M(()=>Zr(d.value)),q=Vp($),H=Ip(),m=M(()=>t.type==="textarea"||t.autogrow===!0),w=M(()=>m.value===!0||["text","search","url","tel","password"].includes(t.type)),b=M(()=>{const E={...H.splitAttrs.listeners.value,onInput:$,onPaste:G,onChange:y,onBlur:L,onFocus:Yi};return E.onCompositionstart=E.onCompositionupdate=E.onCompositionend=q,v.value===!0&&(E.onKeydown=U),t.autogrow===!0&&(E.onAnimationend=X),E}),_=M(()=>{const E={tabindex:0,"data-autofocus":t.autofocus===!0||void 0,rows:t.type==="textarea"?6:void 0,"aria-label":t.label,name:f.value,...H.splitAttrs.attributes.value,id:H.targetUid.value,maxlength:t.maxlength,disabled:t.disable===!0,readonly:t.readonly===!0};return m.value===!1&&(E.type=t.type),t.autogrow===!0&&(E.rows=1),E});fe(()=>t.type,()=>{h.value&&(h.value.value=t.modelValue)}),fe(()=>t.modelValue,E=>{if(v.value===!0){if(u===!0&&(u=!1,String(E)===o))return;C(E)}else d.value!==E&&(d.value=E,t.type==="number"&&i.hasOwnProperty("value")===!0&&(a===!0?a=!1:delete i.value));t.autogrow===!0&&Oe(Ee)}),fe(()=>t.autogrow,E=>{E===!0?Oe(Ee):h.value!==null&&n.rows>0&&(h.value.style.height="auto")}),fe(()=>t.dense,()=>{t.autogrow===!0&&Oe(Ee)});function x(){Js(()=>{const E=document.activeElement;h.value!==null&&h.value!==E&&(E===null||E.id!==H.targetUid.value)&&h.value.focus({preventScroll:!0})})}function A(){h.value!==null&&h.value.select()}function G(E){if(v.value===!0&&t.reverseFillMask!==!0){const ne=E.target;T(ne,ne.selectionStart,ne.selectionEnd)}e("paste",E)}function $(E){if(!E||!E.target)return;if(t.type==="file"){e("update:modelValue",E.target.files);return}const ne=E.target.value;if(E.target.qComposing===!0){i.value=ne;return}if(v.value===!0)C(ne,!1,E.inputType);else if(we(ne),w.value===!0&&E.target===document.activeElement){const{selectionStart:se,selectionEnd:Ve}=E.target;se!==void 0&&Ve!==void 0&&Oe(()=>{E.target===document.activeElement&&ne.indexOf(E.target.value)===0&&E.target.setSelectionRange(se,Ve)})}t.autogrow===!0&&Ee()}function X(E){e("animationend",E),Ee()}function we(E,ne){c=()=>{l=null,t.type!=="number"&&i.hasOwnProperty("value")===!0&&delete i.value,t.modelValue!==E&&o!==E&&(o=E,ne===!0&&(u=!0),e("update:modelValue",E),Oe(()=>{o===E&&(o=NaN)})),c=void 0},t.type==="number"&&(a=!0,i.value=E),t.debounce!==void 0?(l!==null&&clearTimeout(l),i.value=E,l=setTimeout(c,t.debounce)):c()}function Ee(){requestAnimationFrame(()=>{const E=h.value;if(E!==null){const ne=E.parentNode.style,{overflow:se}=E.style;r.platform.is.firefox!==!0&&(E.style.overflow="hidden"),ne.marginBottom=E.scrollHeight-1+"px",E.style.height="1px",E.style.height=E.scrollHeight+"px",E.style.overflow=se,ne.marginBottom=""}})}function y(E){q(E),l!==null&&(clearTimeout(l),l=null),c!==void 0&&c(),e("change",E.target.value)}function L(E){E!==void 0&&Yi(E),l!==null&&(clearTimeout(l),l=null),c!==void 0&&c(),a=!1,u=!1,delete i.value,t.type!=="file"&&setTimeout(()=>{h.value!==null&&(h.value.value=d.value!==void 0?d.value:"")})}function he(){return i.hasOwnProperty("value")===!0?i.value:d.value!==void 0?d.value:""}nt(()=>{L()}),Cn(()=>{t.autogrow===!0&&Ee()}),Object.assign(H,{innerValue:d,fieldClass:M(()=>`q-${m.value===!0?"textarea":"input"}`+(t.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:M(()=>t.type!=="file"&&typeof t.shadowText=="string"&&t.shadowText.length>0),inputRef:h,emitValue:we,hasValue:I,floatingLabel:M(()=>I.value===!0||Zr(t.displayValue)),getControl:()=>P(m.value===!0?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",t.inputClass],style:t.inputStyle,..._.value,...b.value,...t.type!=="file"?{value:he()}:S.value}),getShadowControl:()=>P("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(m.value===!0?"":" text-no-wrap")},[P("span",{class:"invisible"},he()),P("span",t.shadowText)])});const be=kp(H);return Object.assign(s,{focus:x,select:A,getNativeElement:()=>h.value}),ti(s,"nativeEl",()=>h.value),be}}),dy=je({name:"QCardActions",props:{...sc,vertical:Boolean},setup(t,{slots:e}){const n=rc(t),s=M(()=>`q-card__actions ${n.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>P("div",{class:s.value},Le(e.default))}}),fy=je({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:e,emit:n}){const s=Re(),r=J(null);let i=0;const o=[];function a(d){const v=typeof d=="boolean"?d:t.noErrorFocus!==!0,T=++i,C=(I,q)=>{n("validation"+(I===!0?"Success":"Error"),q)},U=I=>{const q=I.validate();return typeof q.then=="function"?q.then(H=>({valid:H,comp:I}),H=>({valid:!1,comp:I,err:H})):Promise.resolve({valid:q,comp:I})};return(t.greedy===!0?Promise.all(o.map(U)).then(I=>I.filter(q=>q.valid!==!0)):o.reduce((I,q)=>I.then(()=>U(q).then(H=>{if(H.valid===!1)return Promise.reject(H)})),Promise.resolve()).catch(I=>[I])).then(I=>{if(I===void 0||I.length===0)return T===i&&C(!0),!0;if(T===i){const{comp:q,err:H}=I[0];if(H!==void 0&&console.error(H),C(!1,q),v===!0){const m=I.find(({comp:w})=>typeof w.focus=="function"&&ei(w.$)===!1);m!==void 0&&m.comp.focus()}}return!1})}function u(){i++,o.forEach(d=>{typeof d.resetValidation=="function"&&d.resetValidation()})}function l(d){d!==void 0&&an(d);const v=i+1;a().then(T=>{v===i&&T===!0&&(t.onSubmit!==void 0?n("submit",d):d!==void 0&&d.target!==void 0&&typeof d.target.submit=="function"&&d.target.submit())})}function c(d){d!==void 0&&an(d),n("reset"),Oe(()=>{u(),t.autofocus===!0&&t.noResetFocus!==!0&&h()})}function h(){Js(()=>{if(r.value===null)return;const d=r.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||r.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||r.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(r.value.querySelectorAll("[tabindex]"),v=>v.tabIndex>-1);d!=null&&d.focus({preventScroll:!0})})}fc(ya,{bindComponent(d){o.push(d)},unbindComponent(d){const v=o.indexOf(d);v>-1&&o.splice(v,1)}});let f=!1;return Ts(()=>{f=!0}),va(()=>{f===!0&&t.autofocus===!0&&h()}),Cn(()=>{t.autofocus===!0&&h()}),Object.assign(s.proxy,{validate:a,resetValidation:u,submit:l,reset:c,focus:h,getValidationComponents:()=>o}),()=>P("form",{class:"q-form",ref:r,onSubmit:l,onReset:c},Le(e.default))}}),my=je({name:"QCard",props:{...Cs,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Re(),s=Ss(t,n),r=M(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>P(t.tag,{class:r.value},Le(e.default))}});function Pp(){let t;const e=Re();function n(){t=void 0}return Ts(n),nt(n),{removeTick:n,registerTick(s){t=s,Oe(()=>{t===s&&(ei(e)===!1&&t(),t=void 0)})}}}const Bp={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function qp(t,e=()=>{},n=()=>{}){return{transitionProps:M(()=>{const s=`q-transition--${t.transitionShow||e()}`,r=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${s}-enter-from`,enterActiveClass:`${s}-enter-active`,enterToClass:`${s}-enter-to`,leaveFromClass:`${r}-leave-from`,leaveActiveClass:`${r}-leave-active`,leaveToClass:`${r}-leave-to`}}),transitionStyle:M(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}let Up=1,$p=document.body;function jp(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${Up++}`:t,Ji.globalNodes!==void 0){const s=Ji.globalNodes.class;s!==void 0&&(n.className=s)}return $p.appendChild(n),n}function Hp(t){t.remove()}const ns=[];function gy(t){return ns.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function Kp(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return Yn(t)}else if(t.__qPortal===!0){const n=Yn(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=Yn(t)}while(t!=null)}function py(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=Kp(t,e);continue}t.hide(e)}t=Yn(t)}}function zp(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Gp(t,e,n,s){const r=J(!1),i=J(!1);let o=null;const a={},u=s==="dialog"&&zp(t);function l(h){if(h===!0){ca(a),i.value=!0;return}i.value=!1,r.value===!1&&(u===!1&&o===null&&(o=jp(!1,s)),r.value=!0,ns.push(t.proxy),bp(a))}function c(h){if(i.value=!1,h!==!0)return;ca(a),r.value=!1;const f=ns.indexOf(t.proxy);f!==-1&&ns.splice(f,1),o!==null&&(Hp(o),o=null)}return mc(()=>{c(!0)}),t.proxy.__qPortal=!0,ti(t.proxy,"contentEl",()=>e.value),{showPortal:l,hidePortal:c,portalIsActive:r,portalIsAccessible:i,renderPortal:()=>u===!0?n():r.value===!0?[P(gc,{to:o},n())]:void 0}}const pt=[];let Bt;function Qp(t){Bt=t.keyCode===27}function Wp(){Bt===!0&&(Bt=!1)}function Xp(t){Bt===!0&&(Bt=!1,pa(t,27)===!0&&pt[pt.length-1](t))}function Gl(t){window[t]("keydown",Qp),window[t]("blur",Wp),window[t]("keyup",Xp),Bt=!1}function Yp(t){He.is.desktop===!0&&(pt.push(t),pt.length===1&&Gl("addEventListener"))}function fa(t){const e=pt.indexOf(t);e>-1&&(pt.splice(e,1),pt.length===0&&Gl("removeEventListener"))}const yt=[];function Ql(t){yt[yt.length-1](t)}function Jp(t){He.is.desktop===!0&&(yt.push(t),yt.length===1&&document.body.addEventListener("focusin",Ql))}function ma(t){const e=yt.indexOf(t);e>-1&&(yt.splice(e,1),yt.length===0&&document.body.removeEventListener("focusin",Ql))}let Xn=0;const Zp={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ga={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var yy=je({name:"QDialog",inheritAttrs:!1,props:{...yc,...Bp,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...vc,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:s}){const r=Re(),{proxy:{$q:i}}=r,o=J(null),a=J(!1),u=J(!1);let l=null,c=null,h,f;const d=M(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:v}=Ac(),{registerTimeout:T}=Dc(),{registerTick:C,removeTick:U}=Pp(),{transitionProps:S,transitionStyle:I}=qp(t,()=>ga[t.position][0],()=>ga[t.position][1]),{showPortal:q,hidePortal:H,portalIsAccessible:m,renderPortal:w}=Gp(r,o,Xl,"dialog"),{hide:b}=wc({showing:a,hideOnRouteChange:d,handleShow:we,handleHide:Ee,processOnMount:!0}),{addToHistory:_,removeFromHistory:x}=pc(a,b,d),A=M(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${Zp[t.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),G=M(()=>a.value===!0&&t.seamless!==!0),$=M(()=>t.autoClose===!0?{onClick:ne}:{}),X=M(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${G.value===!0?"modal":"seamless"}`,s.class]);fe(()=>t.maximized,z=>{a.value===!0&&E(z)}),fe(G,z=>{v(z),z===!0?(Jp(Ve),Yp(he)):(ma(Ve),fa(he))});function we(z){_(),c=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,E(t.maximized),q(),u.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(y)):U(),T(()=>{if(r.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:Te,bottom:Zs}=document.activeElement.getBoundingClientRect(),{innerHeight:Gi}=window,er=window.visualViewport!==void 0?window.visualViewport.height:Gi;Te>0&&Zs>er/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-er,Zs>=Gi?1/0:Math.ceil(document.scrollingElement.scrollTop+Zs-er/2))),document.activeElement.scrollIntoView()}f=!0,o.value.click(),f=!1}q(!0),u.value=!1,n("show",z)},t.transitionDuration)}function Ee(z){U(),x(),be(!0),u.value=!0,H(),c!==null&&(((z&&z.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),T(()=>{H(!0),u.value=!1,n("hide",z)},t.transitionDuration)}function y(z){Js(()=>{let Te=o.value;Te===null||Te.contains(document.activeElement)===!0||(Te=(z!==""?Te.querySelector(z):null)||Te.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||Te.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||Te.querySelector("[autofocus], [data-autofocus]")||Te,Te.focus({preventScroll:!0}))})}function L(z){z&&typeof z.focus=="function"?z.focus({preventScroll:!0}):y(),n("shake");const Te=o.value;Te!==null&&(Te.classList.remove("q-animate--scale"),Te.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,o.value!==null&&(Te.classList.remove("q-animate--scale"),y())},170))}function he(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&L():(n("escapeKey"),b()))}function be(z){l!==null&&(clearTimeout(l),l=null),(z===!0||a.value===!0)&&(E(!1),t.seamless!==!0&&(v(!1),ma(Ve),fa(he))),z!==!0&&(c=null)}function E(z){z===!0?h!==!0&&(Xn<1&&document.body.classList.add("q-body--dialog"),Xn++,h=!0):h===!0&&(Xn<2&&document.body.classList.remove("q-body--dialog"),Xn--,h=!1)}function ne(z){f!==!0&&(b(z),n("click",z))}function se(z){t.persistent!==!0&&t.noBackdropDismiss!==!0?b(z):t.noShake!==!0&&L(z.relatedTarget)}function Ve(z){t.allowFocusOutside!==!0&&m.value===!0&&ic(o.value,z.target)!==!0&&y('[tabindex]:not([tabindex="-1"])')}Object.assign(r.proxy,{focus:y,shake:L,__updateRefocusTarget(z){c=z||null}}),nt(be);const Wl=i.platform.is.ios===!0||i.platform.is.safari?"onClick":"onFocusin";function Xl(){return P("div",{role:"dialog","aria-modal":G.value===!0?"true":"false",...s,class:X.value},[P(Tr,{name:"q-transition--fade",appear:!0},()=>G.value===!0?P("div",{class:"q-dialog__backdrop fixed-full",style:I.value,"aria-hidden":"true",tabindex:-1,[Wl]:se}):null),P(Tr,S.value,()=>a.value===!0?P("div",{ref:o,class:A.value,style:I.value,tabindex:-1,...$.value},Le(e.default)):null)])}return w}});const vy=()=>{const t="ID",e=Date.now(),n=Math.floor(Math.random()*1e4);return`${t}${e}${n}`};export{cy as A,hp as B,oy as Q,Cs as a,vc as b,Ss as c,Dc as d,wc as e,pc as f,Ac as g,sy as h,bc as i,Tc as j,ry as k,uy as l,my as m,fy as n,ly as o,hy as p,dy as q,yy as r,vy as s,gy as t,yc as u,py as v,iy as w,ay as x,ny as y,xp as z};
