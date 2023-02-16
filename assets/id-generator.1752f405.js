import{c as Se,h as me,v as al,g as ps,i as cl,j as Ni,u as ul,k as dl,a as hl,f as ms,l as fl,m as _l,n as pl,o as ln,p as ml}from"./QBtn.8b3a51d6.js";import{c as R,h as A,g as pe,k as qe,Z as gs,w as se,o as $t,l as ye,s as Te,m as Ve,B as Nt,_ as gl,$ as kn,r as G,N as Sr,a0 as vl,a as yl,a1 as Ir,a2 as Cl,a3 as Ai,a4 as bl,a5 as Tr,j as El,x as yt,Y as li,a6 as wl,y as vs,D as Sl,a7 as ys,b as Il,a8 as Tl}from"./index.d3a5d516.js";const xn={dark:{type:Boolean,default:null}};function Rn(t,e){return R(()=>t.dark===null?e.dark.isActive:t.dark)}var Sf=Se({name:"QList",props:{...xn,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=pe(),i=Rn(t,n.proxy.$q),s=R(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>A(t.tag,{class:s.value},me(e.default))}});function kl(t,e,n){let i;function s(){i!==void 0&&(gs.remove(i),i=void 0)}return qe(()=>{t.value===!0&&s()}),{removeFromHistory:s,addToHistory(){i={condition:()=>n.value===!0,handler:e},gs.add(i)}}}const xl={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Rl=["beforeShow","show","beforeHide","hide"];function Nl({showing:t,canShow:e,hideOnRouteChange:n,handleShow:i,handleHide:s,processOnMount:r}){const o=pe(),{props:l,emit:a,proxy:c}=o;let d;function u(x){t.value===!0?p(x):h(x)}function h(x){if(l.disable===!0||x!==void 0&&x.qAnchorHandled===!0||e!==void 0&&e(x)!==!0)return;const b=l["onUpdate:modelValue"]!==void 0;b===!0&&(a("update:modelValue",!0),d=x,ye(()=>{d===x&&(d=void 0)})),(l.modelValue===null||b===!1)&&f(x)}function f(x){t.value!==!0&&(t.value=!0,a("beforeShow",x),i!==void 0?i(x):a("show",x))}function p(x){if(l.disable===!0)return;const b=l["onUpdate:modelValue"]!==void 0;b===!0&&(a("update:modelValue",!1),d=x,ye(()=>{d===x&&(d=void 0)})),(l.modelValue===null||b===!1)&&I(x)}function I(x){t.value!==!1&&(t.value=!1,a("beforeHide",x),s!==void 0?s(x):a("hide",x))}function k(x){l.disable===!0&&x===!0?l["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):x===!0!==t.value&&(x===!0?f:I)(d)}se(()=>l.modelValue,k),n!==void 0&&al(o)===!0&&se(()=>c.$route.fullPath,()=>{n.value===!0&&t.value===!0&&p()}),r===!0&&$t(()=>{k(l.modelValue)});const L={show:h,hide:p,toggle:u};return Object.assign(c,L),L}const Al=[null,document,document.body,document.scrollingElement,document.documentElement];function If(t,e){let n=cl(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return Al.includes(n)?window:n}function Pl(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Dl(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let Jt;function Tf(){if(Jt!==void 0)return Jt;const t=document.createElement("p"),e=document.createElement("div");ps(t,{width:"100%",height:"200px"}),ps(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let i=t.offsetWidth;return n===i&&(i=e.clientWidth),e.remove(),Jt=n-i,Jt}function Ml(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}let Ct=0,Hn,zn,It,jn=!1,Cs,bs,Es,We=null;function Ol(t){Fl(t)&&Nt(t)}function Fl(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=gl(t),n=t.shiftKey&&!t.deltaX,i=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),s=n||i?t.deltaY:t.deltaX;for(let r=0;r<e.length;r++){const o=e[r];if(Ml(o,i))return i?s<0&&o.scrollTop===0?!0:s>0&&o.scrollTop+o.clientHeight===o.scrollHeight:s<0&&o.scrollLeft===0?!0:s>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function ws(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Zt(t){jn!==!0&&(jn=!0,requestAnimationFrame(()=>{jn=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:i}=document.scrollingElement;(It===void 0||e!==window.innerHeight)&&(It=n-e,document.scrollingElement.scrollTop=i),i>It&&(document.scrollingElement.scrollTop-=Math.ceil((i-It)/8))}))}function Ss(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:i,overflowX:s}=window.getComputedStyle(e);Hn=Dl(window),zn=Pl(window),Cs=e.style.left,bs=e.style.top,Es=window.location.href,e.style.left=`-${Hn}px`,e.style.top=`-${zn}px`,s!=="hidden"&&(s==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,Te.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Zt,Ve.passiveCapture),window.visualViewport.addEventListener("scroll",Zt,Ve.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ws,Ve.passiveCapture))}Te.is.desktop===!0&&Te.is.mac===!0&&window[`${t}EventListener`]("wheel",Ol,Ve.notPassive),t==="remove"&&(Te.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Zt,Ve.passiveCapture),window.visualViewport.removeEventListener("scroll",Zt,Ve.passiveCapture)):window.removeEventListener("scroll",ws,Ve.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=Cs,e.style.top=bs,window.location.href===Es&&window.scrollTo(Hn,zn),It=void 0)}function Ll(t){let e="add";if(t===!0){if(Ct++,We!==null){clearTimeout(We),We=null;return}if(Ct>1)return}else{if(Ct===0||(Ct--,Ct>0))return;if(e="remove",Te.is.ios===!0&&Te.is.nativeMobile===!0){We!==null&&clearTimeout(We),We=setTimeout(()=>{Ss(e),We=null},100);return}}Ss(e)}function Bl(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,Ll(e))}}}function ql(){let t=null;const e=pe();function n(){t!==null&&(clearTimeout(t),t=null)}return kn(n),qe(n),{removeTimeout:n,registerTimeout(i,s){n(),Ni(e)===!1&&(t=setTimeout(i,s))}}}var kf=Se({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=R(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>A("div",{class:n.value},me(e.default))}}),xf=Se({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:e}){const n=R(()=>parseInt(t.lines,10)),i=R(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),s=R(()=>t.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>A("div",{style:s.value,class:i.value},me(e.default))}}),Rf=Se({name:"QItem",props:{...xn,...ul,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:i}}=pe(),s=Rn(t,i),{hasLink:r,linkAttrs:o,linkClass:l,linkTag:a,navigateOnClick:c}=dl(),d=G(null),u=G(null),h=R(()=>t.clickable===!0||r.value===!0||t.tag==="label"),f=R(()=>t.disable!==!0&&h.value===!0),p=R(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(s.value===!0?" q-item--dark":"")+(r.value===!0&&t.active===null?l.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),I=R(()=>{if(t.insetLevel===void 0)return null;const b=i.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+t.insetLevel*56+"px"}});function k(b){f.value===!0&&(u.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===d.value?u.value.focus():document.activeElement===u.value&&d.value.focus()),c(b))}function L(b){if(f.value===!0&&Sr(b,13)===!0){Nt(b),b.qKeyEvent=!0;const O=new MouseEvent("click",b);O.qKeyEvent=!0,d.value.dispatchEvent(O)}n("keyup",b)}function x(){const b=hl(e.default,[]);return f.value===!0&&b.unshift(A("div",{class:"q-focus-helper",tabindex:-1,ref:u})),b}return()=>{const b={ref:d,class:p.value,style:I.value,role:"listitem",onClick:k,onKeyup:L};return f.value===!0?(b.tabindex=t.tabindex||"0",Object.assign(b,o.value)):h.value===!0&&(b["aria-disabled"]="true"),A(a.value,b,x())}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(t,e){if(!t)throw _t(e)},_t=function(t){return new Error("Firebase Database ("+kr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Vl=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,d=r>>2,u=(r&3)<<4|l>>4;let h=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(h=64)),i.push(n[d],n[u],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||u==null)throw Error();const h=r<<2|l>>4;if(i.push(h),c!==64){const f=l<<4&240|c>>2;if(i.push(f),u!==64){const p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Rr=function(t){const e=xr(t);return Pi.encodeByteArray(e,!0)},cn=function(t){return Rr(t).replace(/\./g,"")},ai=function(t){try{return Pi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){return Nr(void 0,t)}function Nr(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ul(n)||(t[n]=Nr(t[n],e[n]));return t}function Ul(t){return t!=="__proto__"}/**
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
 */function $l(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hl=()=>$l().__FIREBASE_DEFAULTS__,zl=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jl=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ai(t[1]);return e&&JSON.parse(e)},Ar=()=>{try{return Hl()||zl()||jl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gl=t=>{var e,n;return(n=(e=Ar())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kl=t=>{const e=Gl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ql=()=>{var t;return(t=Ar())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Yl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[cn(JSON.stringify(n)),cn(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pr(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xl())}function Jl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dr(){return kr.NODE_ADMIN===!0}function Zl(){try{return typeof indexedDB=="object"}catch{return!1}}function ea(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="FirebaseError";class zt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ta,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?na(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new zt(s,l,i)}}function na(t,e){return t.replace(ia,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ia=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return JSON.parse(t)}function ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=At(ai(r[0])||""),n=At(ai(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},sa=function(t){const e=Or(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ra=function(t){const e=Or(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Is(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function un(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ci(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Ts(r)&&Ts(o)){if(!ci(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ts(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),d=1518500249):(c=r^o^l,d=1859775393):u<60?(c=r&o|l&(r|o),d=2400959708):(c=r^o^l,d=3395469782);const h=(s<<5|s>>>27)+c+a+d+i[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Nn(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,g(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},An=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class Pt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ue="[DEFAULT]";/**
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
 */class ca{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ht;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(da(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ua(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ua(t){return t===Ue?void 0:t}function da(t){return t.instantiationMode==="EAGER"}/**
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
 */class ha{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ca(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const fa={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},_a=z.INFO,pa={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},ma=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=pa[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fr{constructor(e){this.name=e,this._logLevel=_a,this._logHandler=ma,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const ga=(t,e)=>e.some(n=>t instanceof n);let ks,xs;function va(){return ks||(ks=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ya(){return xs||(xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lr=new WeakMap,ui=new WeakMap,Br=new WeakMap,Gn=new WeakMap,Di=new WeakMap;function Ca(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Pe(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lr.set(n,t)}).catch(()=>{}),Di.set(e,t),e}function ba(t){if(ui.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ui.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Br.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ea(t){di=t(di)}function wa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Kn(this),e,...n);return Br.set(i,e.sort?e.sort():[e]),Pe(i)}:ya().includes(t)?function(...e){return t.apply(Kn(this),e),Pe(Lr.get(this))}:function(...e){return Pe(t.apply(Kn(this),e))}}function Sa(t){return typeof t=="function"?wa(t):(t instanceof IDBTransaction&&ba(t),ga(t,va())?new Proxy(t,di):t)}function Pe(t){if(t instanceof IDBRequest)return Ca(t);if(Gn.has(t))return Gn.get(t);const e=Sa(t);return e!==t&&(Gn.set(t,e),Di.set(e,t)),e}const Kn=t=>Di.get(t);function Ia(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=Pe(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Pe(o.result),a.oldVersion,a.newVersion,Pe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const Ta=["get","getKey","getAll","getAllKeys","count"],ka=["put","add","delete","clear"],Qn=new Map;function Rs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qn.get(e))return Qn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ka.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ta.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Qn.set(e,r),r}Ea(t=>({...t,get:(e,n,i)=>Rs(e,n)||t.get(e,n,i),has:(e,n)=>!!Rs(e,n)||t.has(e,n)}));/**
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
 */class xa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ra(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ra(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Ns="0.9.3";/**
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
 */const Qe=new Fr("@firebase/app"),Na="@firebase/app-compat",Aa="@firebase/analytics-compat",Pa="@firebase/analytics",Da="@firebase/app-check-compat",Ma="@firebase/app-check",Oa="@firebase/auth",Fa="@firebase/auth-compat",La="@firebase/database",Ba="@firebase/database-compat",qa="@firebase/functions",Va="@firebase/functions-compat",Wa="@firebase/installations",Ua="@firebase/installations-compat",$a="@firebase/messaging",Ha="@firebase/messaging-compat",za="@firebase/performance",ja="@firebase/performance-compat",Ga="@firebase/remote-config",Ka="@firebase/remote-config-compat",Qa="@firebase/storage",Ya="@firebase/storage-compat",Xa="@firebase/firestore",Ja="@firebase/firestore-compat",Za="firebase",ec="9.17.1";/**
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
 */const fi="[DEFAULT]",tc={[hi]:"fire-core",[Na]:"fire-core-compat",[Pa]:"fire-analytics",[Aa]:"fire-analytics-compat",[Ma]:"fire-app-check",[Da]:"fire-app-check-compat",[Oa]:"fire-auth",[Fa]:"fire-auth-compat",[La]:"fire-rtdb",[Ba]:"fire-rtdb-compat",[qa]:"fire-fn",[Va]:"fire-fn-compat",[Wa]:"fire-iid",[Ua]:"fire-iid-compat",[$a]:"fire-fcm",[Ha]:"fire-fcm-compat",[za]:"fire-perf",[ja]:"fire-perf-compat",[Ga]:"fire-rc",[Ka]:"fire-rc-compat",[Qa]:"fire-gcs",[Ya]:"fire-gcs-compat",[Xa]:"fire-fst",[Ja]:"fire-fst-compat","fire-js":"fire-js",[Za]:"fire-js-all"};/**
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
 */const dn=new Map,_i=new Map;function nc(t,e){try{t.container.addComponent(e)}catch(n){Qe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(_i.has(e))return Qe.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,t);for(const n of dn.values())nc(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const sc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},De=new Mr("app","Firebase",sc);/**
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
 */class rc{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const oc=ec;function qr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:fi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw De.create("bad-app-name",{appName:String(s)});if(n||(n=Ql()),!n)throw De.create("no-options");const r=dn.get(s);if(r){if(ci(n,r.options)&&ci(i,r.config))return r;throw De.create("duplicate-app",{appName:s})}const o=new ha(s);for(const a of _i.values())o.addComponent(a);const l=new rc(n,i,o);return dn.set(s,l),l}function lc(t=fi){const e=dn.get(t);if(!e&&t===fi)return qr();if(!e)throw De.create("no-app",{appName:t});return e}function it(t,e,n){var i;let s=(i=tc[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qe.warn(l.join(" "));return}hn(new Pt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ac="firebase-heartbeat-database",cc=1,Dt="firebase-heartbeat-store";let Yn=null;function Vr(){return Yn||(Yn=Ia(ac,cc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dt)}}}).catch(t=>{throw De.create("idb-open",{originalErrorMessage:t.message})})),Yn}async function uc(t){try{return(await Vr()).transaction(Dt).objectStore(Dt).get(Wr(t))}catch(e){if(e instanceof zt)Qe.warn(e.message);else{const n=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qe.warn(n.message)}}}async function As(t,e){try{const i=(await Vr()).transaction(Dt,"readwrite");return await i.objectStore(Dt).put(e,Wr(t)),i.done}catch(n){if(n instanceof zt)Qe.warn(n.message);else{const i=De.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qe.warn(i.message)}}}function Wr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dc=1024,hc=30*24*60*60*1e3;class fc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pc(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ps();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=hc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ps(),{heartbeatsToSend:n,unsentEntries:i}=_c(this._heartbeatsCache.heartbeats),s=cn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ps(){return new Date().toISOString().substring(0,10)}function _c(t,e=dc){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ds(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ds(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class pc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zl()?ea().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return As(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return As(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ds(t){return cn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mc(t){hn(new Pt("platform-logger",e=>new xa(e),"PRIVATE")),hn(new Pt("heartbeat",e=>new fc(e),"PRIVATE")),it(hi,Ns,t),it(hi,Ns,"esm2017"),it("fire-js","")}mc("");var gc="firebase",vc="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(gc,vc,"app");const Ms="@firebase/database",Os="0.14.3";/**
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
 */let Ur="";function yc(t){Ur=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:At(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Cc(e)}}catch{}return new bc},He=$r("localStorage"),pi=$r("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Fr("@firebase/database"),Ec=function(){let t=1;return function(){return t++}}(),Hr=function(t){const e=aa(t),n=new la;n.update(e);const i=n.digest();return Pi.encodeByteArray(i)},jt=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=jt.apply(null,i):typeof i=="object"?e+=ee(i):e+=i,e+=" "}return e};let je=null,Fs=!0;const wc=function(t,e){g(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(st.logLevel=z.VERBOSE,je=st.log.bind(st),e&&pi.set("logging_enabled",!0)):typeof t=="function"?je=t:(je=null,pi.remove("logging_enabled"))},oe=function(...t){if(Fs===!0&&(Fs=!1,je===null&&pi.get("logging_enabled")===!0&&wc(!0)),je){const e=jt.apply(null,t);je(e)}},Gt=function(t){return function(...e){oe(t,...e)}},mi=function(...t){const e="FIREBASE INTERNAL ERROR: "+jt(...t);st.error(e)},Re=function(...t){const e=`FIREBASE FATAL ERROR: ${jt(...t)}`;throw st.error(e),new Error(e)},fe=function(...t){const e="FIREBASE WARNING: "+jt(...t);st.warn(e)},Sc=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ic=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},at="[MIN_NAME]",Ye="[MAX_NAME]",Ze=function(t,e){if(t===e)return 0;if(t===at||e===Ye)return-1;if(e===at||t===Ye)return 1;{const n=Ls(t),i=Ls(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Tc=function(t,e){return t===e?0:t<e?-1:1},bt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ee(e))},Oi=function(t){if(typeof t!="object"||t===null)return ee(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ee(e[i]),n+=":",n+=Oi(t[e[i]]);return n+="}",n},zr=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function le(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jr=function(t){g(!Mi(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},kc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Rc(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Nc=new RegExp("^-?(0*)\\d{1,10}$"),Ac=-2147483648,Pc=2147483647,Ls=function(t){if(Nc.test(t)){const e=Number(t);if(e>=Ac&&e<=Pc)return e}return null},mt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Dc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Mc{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fe(e)}}class rt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="5",Gr="v",Kr="s",Qr="r",Yr="f",Xr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jr="ls",Zr="p",gi="ac",eo="websocket",to="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,i,s,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=He.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&He.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Fc(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function io(t,e,n){g(typeof e=="string","typeof type must == string"),g(typeof n=="object","typeof params must == object");let i;if(e===eo)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===to)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fc(t)&&(n.ns=t.namespace);const s=[];return le(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.counters_={}}incrementCounter(e,n=1){Ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={},Jn={};function Li(t){const e=t.toString();return Xn[e]||(Xn[e]=new Lc),Xn[e]}function Bc(t,e){const n=t.toString();return Jn[n]||(Jn[n]=e()),Jn[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&mt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="start",Vc="close",Wc="pLPCommand",Uc="pRTLPCB",so="id",ro="pw",oo="ser",$c="cb",Hc="seg",zc="ts",jc="d",Gc="dframe",lo=1870,ao=30,Kc=lo-ao,Qc=25e3,Yc=3e4;class nt{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gt(e),this.stats_=Li(n),this.urlFn=a=>(this.appCheckToken&&(a[gi]=this.appCheckToken),io(n,to,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Yc)),Ic(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bi((...r)=>{const[o,l,a,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bs)this.id=l,this.password=a;else if(o===Vc)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Bs]="t",i[oo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$c]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Gr]=Fi,this.transportSessionId&&(i[Kr]=this.transportSessionId),this.lastSessionId&&(i[Jr]=this.lastSessionId),this.applicationId&&(i[Zr]=this.applicationId),this.appCheckToken&&(i[gi]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Xr.test(location.hostname)&&(i[Qr]=Yr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nt.forceAllow_=!0}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){return nt.forceAllow_?!0:!nt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!kc()&&!xc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Rr(n),s=zr(i,Kc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Gc]="t",i[so]=e,i[ro]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bi{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ec(),window[Wc+this.uniqueCallbackIdentifier]=e,window[Uc+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bi.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){oe("frame writing exception"),l.stack&&oe(l.stack),oe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||oe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[so]=this.myID,e[ro]=this.myPW,e[oo]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ao+i.length<=lo;){const o=this.pendingSegs.shift();i=i+"&"+Hc+s+"="+o.seg+"&"+zc+s+"="+o.ts+"&"+jc+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Qc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=16384,Jc=45e3;let fn=null;typeof MozWebSocket!="undefined"?fn=MozWebSocket:typeof WebSocket!="undefined"&&(fn=WebSocket);class Ce{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gt(this.connId),this.stats_=Li(n),this.connURL=Ce.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Gr]=Fi,typeof location!="undefined"&&location.hostname&&Xr.test(location.hostname)&&(o[Qr]=Yr),n&&(o[Kr]=n),i&&(o[Jr]=i),s&&(o[gi]=s),r&&(o[Zr]=r),io(e,eo,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,He.set("previous_websocket_failure",!0);try{let i;Dr(),this.mySock=new fn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&fn!==null&&!Ce.forceDisallow_}static previouslyFailed(){return He.isInMemoryStorage||He.get("previous_websocket_failure")===!0}markConnectionHealthy(){He.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=At(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=zr(n,Xc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Jc))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ce.responsesRequiredToBeHealthy=2;Ce.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nt,Ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ce&&Ce.isAvailable();let i=n&&!Ce.previouslyFailed();if(e.webSocketOnly&&(n||fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ce];else{const s=this.transports_=[];for(const r of Mt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Mt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=6e4,eu=5e3,tu=10*1024,nu=100*1024,Zn="t",qs="d",iu="s",Vs="r",su="e",Ws="o",Us="a",$s="n",Hs="p",ru="h";class ou{constructor(e,n,i,s,r,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gt("c:"+this.id+":"),this.transportManager_=new Mt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Tt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zn in e){const n=e[Zn];n===Us?this.upgradeIfSecondaryHealthy_():n===Vs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ws&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bt("t",e),i=bt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Us,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$s,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bt("t",e),i=bt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bt(Zn,e);if(qs in e){const i=e[qs];if(n===ru){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===$s){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iu?this.onConnectionShutdown_(i):n===Vs?this.onReset_(i):n===su?mi("Server Error: "+i):n===Ws?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fi!==i&&fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Tt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Zc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(He.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends uo{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Pr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _n}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=32,js=768;class U{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new U("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fe(t){return t.pieces_.length-t.pieceNum_}function j(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new U(t.pieces_,e)}function qi(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lu(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ot(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ho(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new U(e,0)}function K(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof U)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new U(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function he(t,e){const n=F(t),i=F(e);if(n===null)return e;if(n===i)return he(j(t),j(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function au(t,e){const n=Ot(t,0),i=Ot(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=Ze(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function fo(t,e){if(Fe(t)!==Fe(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ge(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Fe(t)>Fe(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class cu{constructor(e,n){this.errorPrefix_=n,this.parts_=Ot(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=An(this.parts_[i]);_o(this)}}function uu(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=An(e),_o(t)}function du(t){const e=t.parts_.pop();t.byteLength_-=An(e),t.parts_.length>0&&(t.byteLength_-=1)}function _o(t){if(t.byteLength_>js)throw new Error(t.errorPrefix_+"has a key path longer than "+js+" bytes ("+t.byteLength_+").");if(t.parts_.length>zs)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zs+") or object contains a cycle "+$e(t))}function $e(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends uo{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Vi}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=1e3,hu=60*5*1e3,Gs=30*1e3,fu=1.3,_u=3e4,pu="server_kill",Ks=3;class xe extends co{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xe.nextPersistentConnectionId_++,this.log_=Gt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Et,this.maxReconnectDelay_=hu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Dr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_n.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ee(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Ht,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;xe.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ie(e,"w")){const i=lt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ra(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sa(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mi("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Et,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Et,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_u&&(this.reconnectDelay_=Et),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+xe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(u){g(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?oe("getToken() completed but was canceled"):(oe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,l=new ou(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{fe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(pu)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&fe(u),a())}}}interrupt(e){oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Is(this.interruptReasons_)&&(this.reconnectDelay_=Et,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Oi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new U(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){oe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ks&&(this.reconnectDelay_=Gs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){oe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ks&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ur.replace(/\./g,"-")]=1,Pr()?e["framework.cordova"]=1:Jl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_n.getInstance().currentlyOnline();return Is(this.interruptReasons_)&&e}}xe.nextPersistentConnectionId_=0;xe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new D(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new D(at,e),s=new D(at,n);return this.compare(i,s)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en;class po extends Pn{static get __EMPTY_NODE(){return en}static set __EMPTY_NODE(e){en=e}compare(e,n){return Ze(e.name,n.name)}isDefinedOn(e){throw _t("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return D.MIN}maxPost(){return new D(Ye,en)}makePost(e,n){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,en)}toString(){return".key"}}const ot=new po;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:ie.RED,this.left=s!=null?s:_e.EMPTY_NODE,this.right=r!=null?r:_e.EMPTY_NODE}copy(e,n,i,s,r){return new ie(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return _e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return _e.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class mu{copy(e,n,i,s,r){return this}insert(e,n,i){return new ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _e{constructor(e,n=_e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new _e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tn(this.root_,null,this.comparator_,!0,e)}}_e.EMPTY_NODE=new mu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){return Ze(t.name,e.name)}function Wi(t,e){return Ze(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi;function vu(t){vi=t}const mo=function(t){return typeof t=="number"?"number:"+jr(t):"string:"+t},go=function(t){if(t.isLeafNode()){const e=t.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ie(e,".sv"),"Priority must be a string or number.")}else g(t===vi||t.isEmpty(),"priority of unexpected type.");g(t===vi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;class ne{constructor(e,n=ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),go(this.priorityNode_)}static set __childrenNodeConstructor(e){Qs=e}static get __childrenNodeConstructor(){return Qs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:F(e)===".priority"?this.priorityNode_:ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=F(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||Fe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(j(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mo(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jr(this.value_):e+=this.value_,this.lazyHash_=Hr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ne.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ne.VALUE_TYPE_ORDER.indexOf(n),r=ne.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+n),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo,yo;function yu(t){vo=t}function Cu(t){yo=t}class bu extends Pn{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ze(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return D.MIN}maxPost(){return new D(Ye,new ne("[PRIORITY-POST]",yo))}makePost(e,n){const i=vo(e);return new D(n,new ne("[PRIORITY-POST]",i))}toString(){return".priority"}}const Q=new bu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=Math.log(2);class wu{constructor(e){const n=r=>parseInt(Math.log(r)/Eu,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pn=function(t,e,n,i){t.sort(e);const s=function(a,c){const d=c-a;let u,h;if(d===0)return null;if(d===1)return u=t[a],h=n?n(u):u,new ie(h,u.node,ie.BLACK,null,null);{const f=parseInt(d/2,10)+a,p=s(a,f),I=s(f+1,c);return u=t[f],h=n?n(u):u,new ie(h,u.node,ie.BLACK,p,I)}},r=function(a){let c=null,d=null,u=t.length;const h=function(p,I){const k=u-p,L=u;u-=p;const x=s(k+1,L),b=t[k],O=n?n(b):b;f(new ie(O,b.node,I,null,x))},f=function(p){c?(c.left=p,c=p):(d=p,c=p)};for(let p=0;p<a.count;++p){const I=a.nextBitIsOne(),k=Math.pow(2,a.count-(p+1));I?h(k,ie.BLACK):(h(k,ie.BLACK),h(k,ie.RED))}return d},o=new wu(t.length),l=r(o);return new _e(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei;const tt={};class ke{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return g(tt&&Q,"ChildrenNode.ts has not been loaded"),ei=ei||new ke({".priority":tt},{".priority":Q}),ei}get(e){const n=lt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _e?n:null}hasIndex(e){return Ie(this.indexSet_,e.toString())}addIndex(e,n){g(e!==ot,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(D.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=pn(i,e.getCompare()):l=tt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new ke(d,c)}addToIndexes(e,n){const i=un(this.indexes_,(s,r)=>{const o=lt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===tt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(D.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),pn(l,o.getCompare())}else return tt;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new D(e.name,l))),a.insert(e,e.node)}});return new ke(i,this.indexSet_)}removeFromIndexes(e,n){const i=un(this.indexes_,s=>{if(s===tt)return s;{const r=n.get(e.name);return r?s.remove(new D(e.name,r)):s}});return new ke(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wt;class T{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&go(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wt||(wt=new T(new _e(Wi),null,ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wt}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wt:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(j(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(g(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new D(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?wt:this.priorityNode_;return new T(s,o,r)}}updateChild(e,n){const i=F(e);if(i===null)return n;{g(F(e)!==".priority"||Fe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(j(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Q,(o,l)=>{n[o]=l.val(e),i++,r&&T.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mo(this.getPriority().val())+":"),this.forEachChild(Q,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Hr(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new D(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new D(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new D(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Kt?-1:0}withIndex(e){if(e===ot||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ot||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Q),s=n.getIterator(Q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ot?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Su extends T{constructor(){super(new _e(Wi),T.EMPTY_NODE,ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const Kt=new Su;Object.defineProperties(D,{MIN:{value:new D(at,T.EMPTY_NODE)},MAX:{value:new D(Ye,Kt)}});po.__EMPTY_NODE=T.EMPTY_NODE;ne.__childrenNodeConstructor=T;vu(Kt);Cu(Kt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=!0;function Z(t,e=null){if(t===null)return T.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ne(n,Z(e))}if(!(t instanceof Array)&&Iu){const n=[];let i=!1;if(le(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Z(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new D(o,a)))}}),n.length===0)return T.EMPTY_NODE;const r=pn(n,gu,o=>o.name,Wi);if(i){const o=pn(n,Q.getCompare());return new T(r,Z(e),new ke({".priority":o},{".priority":Q}))}else return new T(r,Z(e),ke.Default)}else{let n=T.EMPTY_NODE;return le(t,(i,s)=>{if(Ie(t,i)&&i.substring(0,1)!=="."){const r=Z(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Z(e))}}yu(Z);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends Pn{constructor(e){super(),this.indexPath_=e,g(!M(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ze(e.name,n.name):r}makePost(e,n){const i=Z(e),s=T.EMPTY_NODE.updateChild(this.indexPath_,i);return new D(n,s)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,Kt);return new D(Ye,e)}toString(){return Ot(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Pn{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ze(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,n){const i=Z(e);return new D(n,i)}toString(){return".value"}}const xu=new ku;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){return{type:"value",snapshotNode:t}}function ct(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ft(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Lt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ru(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Ft(n,l)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ct(n,i)):o.trackChildChange(Lt(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Q,(s,r)=>{n.hasChild(s)||i.trackChildChange(Ft(s,r))}),n.isLeafNode()||n.forEachChild(Q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Lt(s,r,o))}else i.trackChildChange(ct(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.indexedFilter_=new Ui(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bt.getStartPost_(e),this.endPost_=Bt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new D(n,i))||(i=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=T.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(T.EMPTY_NODE);const r=this;return n.forEachChild(Q,(o,l)=>{r.matches(new D(o,l))||(s=s.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Bt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new D(n,i))||(i=T.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(T.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,f)=>u(f,h)}else o=this.index_.getCompare();const l=e;g(l.numChildren()===this.limit_,"");const a=new D(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,a);if(d&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Lt(n,i,u)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Ft(n,u));const I=l.updateImmediateChild(n,T.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(ct(h.name,h.node)),I.updateImmediateChild(h.name,h.node)):I}}else return i.isEmpty()?e:d&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ft(c.name,c.node)),r.trackChildChange(ct(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,T.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:at}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ye}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Q}copy(){const e=new $i;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Au(t){return t.loadsAllData()?new Ui(t.getIndex()):t.hasLimit()?new Nu(t):new Bt(t)}function Ys(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Q?n="$priority":t.index_===xu?n="$value":t.index_===ot?n="$key":(g(t.index_ instanceof Tu,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ee(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=ee(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+ee(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=ee(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Xs(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Q&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends co{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Gt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=mn.getListenId_(e,i),l={};this.listens_[o]=l;const a=Ys(e._queryParams);this.restRequest_(r+".json",a,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),lt(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=mn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ys(e._queryParams),i=e._path.toString(),s=new Ht;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oa(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=At(l.responseText)}catch{fe("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&fe("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return{value:null,children:new Map}}function bo(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=F(e);t.children.has(i)||t.children.set(i,gn());const s=t.children.get(i);e=j(e),bo(s,e,n)}}function yi(t,e,n){t.value!==null?n(e,t.value):Du(t,(i,s)=>{const r=new U(e.toString()+"/"+i);yi(s,r,n)})}function Du(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&le(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=10*1e3,Ou=30*1e3,Fu=5*60*1e3;class Lu{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Mu(e);const i=Js+(Ou-Js)*Math.random();Tt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;le(e,(s,r)=>{r>0&&Ie(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Tt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Fu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(be||(be={}));function Hi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ji(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=be.ACK_USER_WRITE,this.source=Hi()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new U(e));return new vn(q(),n,this.revert)}}else return g(F(this.path)===e,"operationForChild called for unrelated child."),new vn(j(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.source=e,this.path=n,this.type=be.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new qt(this.source,q()):new qt(this.source,j(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=be.OVERWRITE}operationForChild(e){return M(this.path)?new Xe(this.source,q(),this.snap.getImmediateChild(e)):new Xe(this.source,j(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=be.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new U(e));return n.isEmpty()?null:n.value?new Xe(this.source,q(),n.value):new ut(this.source,q(),n)}else return g(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ut(this.source,j(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qu(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ru(o.childName,o.snapshotNode))}),St(t,s,"child_removed",e,i,n),St(t,s,"child_added",e,i,n),St(t,s,"child_moved",r,i,n),St(t,s,"child_changed",e,i,n),St(t,s,"value",e,i,n),s}function St(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>Wu(t,l,a)),o.forEach(l=>{const a=Vu(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Vu(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Wu(t,e,n){if(e.childName==null||n.childName==null)throw _t("Should only compare child_ events.");const i=new D(e.childName,e.snapshotNode),s=new D(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){return{eventCache:t,serverCache:e}}function kt(t,e,n,i){return Dn(new Le(e,n,i),t.serverCache)}function Eo(t,e,n,i){return Dn(t.eventCache,new Le(e,n,i))}function yn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Je(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;const Uu=()=>(ti||(ti=new _e(Tc)),ti);class H{constructor(e,n=Uu()){this.value=e,this.children=n}static fromObject(e){let n=new H(null);return le(e,(i,s)=>{n=n.set(new U(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(M(e))return null;{const i=F(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(j(e),n);return r!=null?{path:K(new U(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=F(e),i=this.children.get(n);return i!==null?i.subtree(j(e)):new H(null)}}set(e,n){if(M(e))return new H(n,this.children);{const i=F(e),r=(this.children.get(i)||new H(null)).set(j(e),n),o=this.children.insert(i,r);return new H(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const n=F(e),i=this.children.get(n);if(i){const s=i.remove(j(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new H(null):new H(this.value,r)}else return this}}get(e){if(M(e))return this.value;{const n=F(e),i=this.children.get(n);return i?i.get(j(e)):null}}setTree(e,n){if(M(e))return n;{const i=F(e),r=(this.children.get(i)||new H(null)).setTree(j(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new H(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(K(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(M(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(j(e),K(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,i){if(M(e))return this;{this.value&&i(n,this.value);const s=F(e),r=this.children.get(s);return r?r.foreachOnPath_(j(e),K(n,s),i):new H(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(K(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.writeTree_=e}static empty(){return new Ee(new H(null))}}function xt(t,e,n){if(M(e))return new Ee(new H(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=he(s,e);return r=r.updateChild(o,n),new Ee(t.writeTree_.set(s,r))}else{const s=new H(n),r=t.writeTree_.setTree(e,s);return new Ee(r)}}}function Ci(t,e,n){let i=t;return le(n,(s,r)=>{i=xt(i,K(e,s),r)}),i}function Zs(t,e){if(M(e))return Ee.empty();{const n=t.writeTree_.setTree(e,new H(null));return new Ee(n)}}function bi(t,e){return et(t,e)!=null}function et(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(he(n.path,e)):null}function er(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Q,(i,s)=>{e.push(new D(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new D(i,s.value))}),e}function Me(t,e){if(M(e))return t;{const n=et(t,e);return n!=null?new Ee(new H(n)):new Ee(t.writeTree_.subtree(e))}}function Ei(t){return t.writeTree_.isEmpty()}function dt(t,e){return wo(q(),t.writeTree_,e)}function wo(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=wo(K(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(K(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return ko(e,t)}function $u(t,e,n,i,s){g(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=xt(t.visibleWrites,e,n)),t.lastWriteId=i}function Hu(t,e,n,i){g(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Ci(t.visibleWrites,e,n),t.lastWriteId=i}function zu(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function ju(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);g(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Gu(l,i.path)?s=!1:ge(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Ku(t),!0;if(i.snap)t.visibleWrites=Zs(t.visibleWrites,i.path);else{const l=i.children;le(l,a=>{t.visibleWrites=Zs(t.visibleWrites,K(i.path,a))})}return!0}else return!1}function Gu(t,e){if(t.snap)return ge(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ge(K(t.path,n),e))return!0;return!1}function Ku(t){t.visibleWrites=So(t.allWrites,Qu,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Qu(t){return t.visible}function So(t,e,n){let i=Ee.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)ge(n,o)?(l=he(n,o),i=xt(i,l,r.snap)):ge(o,n)&&(l=he(o,n),i=xt(i,q(),r.snap.getChild(l)));else if(r.children){if(ge(n,o))l=he(n,o),i=Ci(i,l,r.children);else if(ge(o,n))if(l=he(o,n),M(l))i=Ci(i,q(),r.children);else{const a=lt(r.children,F(l));if(a){const c=a.getChild(j(l));i=xt(i,q(),c)}}}else throw _t("WriteRecord should have .snap or .children")}}return i}function Io(t,e,n,i,s){if(!i&&!s){const r=et(t.visibleWrites,e);if(r!=null)return r;{const o=Me(t.visibleWrites,e);if(Ei(o))return n;if(n==null&&!bi(o,q()))return null;{const l=n||T.EMPTY_NODE;return dt(o,l)}}}else{const r=Me(t.visibleWrites,e);if(!s&&Ei(r))return n;if(!s&&n==null&&!bi(r,q()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ge(c.path,e)||ge(e,c.path))},l=So(t.allWrites,o,e),a=n||T.EMPTY_NODE;return dt(l,a)}}}function Yu(t,e,n){let i=T.EMPTY_NODE;const s=et(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Me(t.visibleWrites,e);return n.forEachChild(Q,(o,l)=>{const a=dt(Me(r,new U(o)),l);i=i.updateImmediateChild(o,a)}),er(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Me(t.visibleWrites,e);return er(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Xu(t,e,n,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=K(e,n);if(bi(t.visibleWrites,r))return null;{const o=Me(t.visibleWrites,r);return Ei(o)?s.getChild(n):dt(o,s.getChild(n))}}function Ju(t,e,n,i){const s=K(e,n),r=et(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Me(t.visibleWrites,s);return dt(o,i.getNode().getImmediateChild(n))}else return null}function Zu(t,e){return et(t.visibleWrites,e)}function ed(t,e,n,i,s,r,o){let l;const a=Me(t.visibleWrites,e),c=et(a,q());if(c!=null)l=c;else if(n!=null)l=dt(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],u=o.getCompare(),h=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let f=h.getNext();for(;f&&d.length<s;)u(f,i)!==0&&d.push(f),f=h.getNext();return d}else return[]}function td(){return{visibleWrites:Ee.empty(),allWrites:[],lastWriteId:-1}}function Cn(t,e,n,i){return Io(t.writeTree,t.treePath,e,n,i)}function Gi(t,e){return Yu(t.writeTree,t.treePath,e)}function tr(t,e,n,i){return Xu(t.writeTree,t.treePath,e,n,i)}function bn(t,e){return Zu(t.writeTree,K(t.treePath,e))}function nd(t,e,n,i,s,r){return ed(t.writeTree,t.treePath,e,n,i,s,r)}function Ki(t,e,n){return Ju(t.writeTree,t.treePath,e,n)}function To(t,e){return ko(K(t.treePath,e),t.writeTree)}function ko(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;g(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Lt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ft(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,ct(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Lt(i,e.snapshotNode,s.oldSnap));else throw _t("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const xo=new sd;class Qi{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Le(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ki(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Je(this.viewCache_),r=nd(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){return{filter:t}}function od(t,e){g(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ld(t,e,n,i,s){const r=new id;let o,l;if(n.type===be.OVERWRITE){const c=n;c.source.fromUser?o=wi(t,e,c.path,c.snap,i,s,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!M(c.path),o=En(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===be.MERGE){const c=n;c.source.fromUser?o=cd(t,e,c.path,c.children,i,s,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Si(t,e,c.path,c.children,i,s,l,r))}else if(n.type===be.ACK_USER_WRITE){const c=n;c.revert?o=hd(t,e,c.path,i,s,r):o=ud(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===be.LISTEN_COMPLETE)o=dd(t,e,n.path,i,r);else throw _t("Unknown operation type: "+n.type);const a=r.getChanges();return ad(e,o,a),{viewCache:o,changes:a}}function ad(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=yn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Co(yn(e)))}}function Ro(t,e,n,i,s,r){const o=e.eventCache;if(bn(i,n)!=null)return e;{let l,a;if(M(n))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Je(e),d=c instanceof T?c:T.EMPTY_NODE,u=Gi(i,d);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Cn(i,Je(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(n);if(c===".priority"){g(Fe(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const u=tr(i,n,d,a);u!=null?l=t.filter.updatePriority(d,u):l=o.getNode()}else{const d=j(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=tr(i,n,o.getNode(),a);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=Ki(i,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,d,s,r):l=o.getNode()}}return kt(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function En(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(M(n))c=d.updateFullNode(a.getNode(),i,null);else if(d.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(n,i);c=d.updateFullNode(a.getNode(),f,null)}else{const f=F(n);if(!a.isCompleteForPath(n)&&Fe(n)>1)return e;const p=j(n),k=a.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=d.updatePriority(a.getNode(),k):c=d.updateChild(a.getNode(),f,k,p,xo,null)}const u=Eo(e,c,a.isFullyInitialized()||M(n),d.filtersNodes()),h=new Qi(s,u,r);return Ro(t,u,n,s,h,l)}function wi(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const d=new Qi(s,e,r);if(M(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=kt(e,c,!0,t.filter.filtersNodes());else{const u=F(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=kt(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=j(n),f=l.getNode().getImmediateChild(u);let p;if(M(h))p=i;else{const I=d.getCompleteChild(u);I!=null?qi(h)===".priority"&&I.getChild(ho(h)).isEmpty()?p=I:p=I.updateChild(h,i):p=T.EMPTY_NODE}if(f.equals(p))a=e;else{const I=t.filter.updateChild(l.getNode(),u,p,h,d,o);a=kt(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function nr(t,e){return t.eventCache.isCompleteForChild(e)}function cd(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const d=K(n,a);nr(e,F(d))&&(l=wi(t,l,d,c,s,r,o))}),i.foreach((a,c)=>{const d=K(n,a);nr(e,F(d))||(l=wi(t,l,d,c,s,r,o))}),l}function ir(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Si(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;M(n)?c=i:c=new H(null).setTree(n,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=ir(t,f,h);a=En(t,a,new U(u),p,s,r,o,l)}}),c.children.inorderTraversal((u,h)=>{const f=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),I=ir(t,p,h);a=En(t,a,new U(u),I,s,r,o,l)}}),a}function ud(t,e,n,i,s,r,o){if(bn(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return En(t,e,n,a.getNode().getChild(n),s,r,l,o);if(M(n)){let c=new H(null);return a.getNode().forEachChild(ot,(d,u)=>{c=c.set(new U(d),u)}),Si(t,e,n,c,s,r,l,o)}else return e}else{let c=new H(null);return i.foreach((d,u)=>{const h=K(n,d);a.isCompleteForPath(h)&&(c=c.set(d,a.getNode().getChild(h)))}),Si(t,e,n,c,s,r,l,o)}}function dd(t,e,n,i,s){const r=e.serverCache,o=Eo(e,r.getNode(),r.isFullyInitialized()||M(n),r.isFiltered());return Ro(t,o,n,i,xo,s)}function hd(t,e,n,i,s,r){let o;if(bn(i,n)!=null)return e;{const l=new Qi(i,e,s),a=e.eventCache.getNode();let c;if(M(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Cn(i,Je(e));else{const u=e.serverCache.getNode();g(u instanceof T,"serverChildren would be complete if leaf node"),d=Gi(i,u)}d=d,c=t.filter.updateFullNode(a,d,r)}else{const d=F(n);let u=Ki(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=a.getImmediateChild(d)),u!=null?c=t.filter.updateChild(a,d,u,j(n),l,r):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,T.EMPTY_NODE,j(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cn(i,Je(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||bn(i,q())!=null,kt(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ui(i.getIndex()),r=Au(i);this.processor_=rd(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(T.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(T.EMPTY_NODE,l.getNode(),null),d=new Le(a,o.isFullyInitialized(),s.filtersNodes()),u=new Le(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Dn(u,d),this.eventGenerator_=new Bu(this.query_)}get query(){return this.query_}}function _d(t){return t.viewCache_.serverCache.getNode()}function pd(t){return yn(t.viewCache_)}function md(t,e){const n=Je(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function sr(t){return t.eventRegistrations_.length===0}function gd(t,e){t.eventRegistrations_.push(e)}function rr(t,e,n){const i=[];if(n){g(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function or(t,e,n,i){e.type===be.MERGE&&e.source.queryId!==null&&(g(Je(t.viewCache_),"We should always have a full cache before handling merges"),g(yn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=ld(t.processor_,s,e,n,i);return od(t.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,No(t,r.changes,r.viewCache.eventCache.getNode(),null)}function vd(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Q,(r,o)=>{i.push(ct(r,o))}),n.isFullyInitialized()&&i.push(Co(n.getNode())),No(t,i,n.getNode(),e)}function No(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return qu(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn;class Ao{constructor(){this.views=new Map}}function yd(t){g(!wn,"__referenceConstructor has already been defined"),wn=t}function Cd(){return g(wn,"Reference.ts has not been loaded"),wn}function bd(t){return t.views.size===0}function Yi(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),or(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(or(o,e,n,i));return r}}function Po(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Cn(n,s?i:null),a=!1;l?a=!0:i instanceof T?(l=Gi(n,i),a=!1):(l=T.EMPTY_NODE,a=!1);const c=Dn(new Le(l,a,!1),new Le(i,s,!1));return new fd(e,c)}return o}function Ed(t,e,n,i,s,r){const o=Po(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gd(o,n),vd(o,n)}function wd(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=Be(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(rr(c,n,i)),sr(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(rr(a,n,i)),sr(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Be(t)&&r.push(new(Cd())(e._repo,e._path)),{removed:r,events:o}}function Do(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Oe(t,e){let n=null;for(const i of t.views.values())n=n||md(i,e);return n}function Mo(t,e){if(e._queryParams.loadsAllData())return On(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Oo(t,e){return Mo(t,e)!=null}function Be(t){return On(t)!=null}function On(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn;function Sd(t){g(!Sn,"__referenceConstructor has already been defined"),Sn=t}function Id(){return g(Sn,"Reference.ts has not been loaded"),Sn}let Td=1;class lr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=td(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fo(t,e,n,i,s){return $u(t.pendingWriteTree_,e,n,i,s),s?gt(t,new Xe(Hi(),e,n)):[]}function kd(t,e,n,i){Hu(t.pendingWriteTree_,e,n,i);const s=H.fromObject(n);return gt(t,new ut(Hi(),e,s))}function Ae(t,e,n=!1){const i=zu(t.pendingWriteTree_,e);if(ju(t.pendingWriteTree_,e)){let r=new H(null);return i.snap!=null?r=r.set(q(),!0):le(i.children,o=>{r=r.set(new U(o),!0)}),gt(t,new vn(i.path,r,n))}else return[]}function Qt(t,e,n){return gt(t,new Xe(zi(),e,n))}function xd(t,e,n){const i=H.fromObject(n);return gt(t,new ut(zi(),e,i))}function Rd(t,e){return gt(t,new qt(zi(),e))}function Nd(t,e,n){const i=Ji(t,n);if(i){const s=Zi(i),r=s.path,o=s.queryId,l=he(r,e),a=new qt(ji(o),l);return es(t,r,a)}else return[]}function Lo(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Oo(o,e))){const a=wd(o,e,n,i);bd(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,f)=>Be(f));if(d&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Md(h);for(let p=0;p<f.length;++p){const I=f[p],k=I.query,L=Wo(t,I);t.listenProvider_.startListening(Rt(k),Vt(t,k),L.hashFn,L.onComplete)}}}!u&&c.length>0&&!i&&(d?t.listenProvider_.stopListening(Rt(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(Fn(h));t.listenProvider_.stopListening(Rt(h),f)}))}Od(t,c)}return l}function Bo(t,e,n,i){const s=Ji(t,i);if(s!=null){const r=Zi(s),o=r.path,l=r.queryId,a=he(o,e),c=new Xe(ji(l),a,n);return es(t,o,c)}else return[]}function Ad(t,e,n,i){const s=Ji(t,i);if(s){const r=Zi(s),o=r.path,l=r.queryId,a=he(o,e),c=H.fromObject(n),d=new ut(ji(l),a,c);return es(t,o,d)}else return[]}function Pd(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=he(h,s);r=r||Oe(f,p),o=o||Be(f)});let l=t.syncPointTree_.get(s);l?(o=o||Be(l),r=r||Oe(l,q())):(l=new Ao,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=T.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,p)=>{const I=Oe(p,q());I&&(r=r.updateImmediateChild(f,I))}));const c=Oo(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=Fn(e);g(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Fd();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const d=Mn(t.pendingWriteTree_,s);let u=Ed(l,e,n,d,r,a);if(!c&&!o&&!i){const h=Mo(l,e);u=u.concat(Ld(t,e,h))}return u}function Xi(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=he(o,e),c=Oe(l,a);if(c)return c});return Io(s,e,r,n,!0)}function Dd(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=he(c,n);i=i||Oe(d,u)});let s=t.syncPointTree_.get(n);s?i=i||Oe(s,q()):(s=new Ao,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Le(i,!0,!1):null,l=Mn(t.pendingWriteTree_,e._path),a=Po(s,e,l,r?o.getNode():T.EMPTY_NODE,r);return pd(a)}function gt(t,e){return qo(e,t.syncPointTree_,null,Mn(t.pendingWriteTree_,q()))}function qo(t,e,n,i){if(M(t.path))return Vo(t,e,n,i);{const s=e.get(q());n==null&&s!=null&&(n=Oe(s,q()));let r=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=To(i,o);r=r.concat(qo(l,a,c,d))}return s&&(r=r.concat(Yi(s,t,i,n))),r}}function Vo(t,e,n,i){const s=e.get(q());n==null&&s!=null&&(n=Oe(s,q()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=To(i,o),d=t.operationForChild(o);d&&(r=r.concat(Vo(d,l,a,c)))}),s&&(r=r.concat(Yi(s,t,i,n))),r}function Wo(t,e){const n=e.query,i=Vt(t,n);return{hashFn:()=>(_d(e)||T.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Nd(t,n._path,i):Rd(t,n._path);{const r=Rc(s,n);return Lo(t,n,null,r)}}}}function Vt(t,e){const n=Fn(e);return t.queryToTagMap.get(n)}function Fn(t){return t._path.toString()+"$"+t._queryIdentifier}function Ji(t,e){return t.tagToQueryMap.get(e)}function Zi(t){const e=t.indexOf("$");return g(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new U(t.substr(0,e))}}function es(t,e,n){const i=t.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=Mn(t.pendingWriteTree_,e);return Yi(i,n,s,null)}function Md(t){return t.fold((e,n,i)=>{if(n&&Be(n))return[On(n)];{let s=[];return n&&(s=Do(n)),le(i,(r,o)=>{s=s.concat(o)}),s}})}function Rt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Id())(t._repo,t._path):t}function Od(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Fn(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Fd(){return Td++}function Ld(t,e,n){const i=e._path,s=Vt(t,e),r=Wo(t,n),o=t.listenProvider_.startListening(Rt(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)g(!Be(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,u)=>{if(!M(c)&&d&&Be(d))return[On(d).query];{let h=[];return d&&(h=h.concat(Do(d).map(f=>f.query))),le(u,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(Rt(d),Vt(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ts(n)}node(){return this.node_}}class ns{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=K(this.path_,e);return new ns(this.syncTree_,n)}node(){return Xi(this.syncTree_,this.path_)}}const Bd=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ar=function(t,e,n){if(!t||typeof t!="object")return t;if(g(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qd(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Vd(t[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qd=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:g(!1,"Unexpected server value: "+t)}},Vd=function(t,e,n){t.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Uo=function(t,e,n,i){return is(e,new ns(n,t),i)},$o=function(t,e,n){return is(t,new ts(e),n)};function is(t,e,n){const i=t.getPriority().val(),s=ar(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ar(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new ne(l,Z(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ne(s))),o.forEachChild(Q,(l,a)=>{const c=is(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function rs(t,e){let n=e instanceof U?e:new U(e),i=t,s=F(n);for(;s!==null;){const r=lt(i.node.children,s)||{children:{},childCount:0};i=new ss(s,i,r),n=j(n),s=F(n)}return i}function vt(t){return t.node.value}function Ho(t,e){t.node.value=e,Ii(t)}function zo(t){return t.node.childCount>0}function Wd(t){return vt(t)===void 0&&!zo(t)}function Ln(t,e){le(t.node.children,(n,i)=>{e(new ss(n,t,i))})}function jo(t,e,n,i){n&&!i&&e(t),Ln(t,s=>{jo(s,e,!0,i)}),n&&i&&e(t)}function Ud(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Yt(t){return new U(t.parent===null?t.name:Yt(t.parent)+"/"+t.name)}function Ii(t){t.parent!==null&&$d(t.parent,t.name,t)}function $d(t,e,n){const i=Wd(n),s=Ie(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Ii(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ii(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=/[\[\].#$\/\u0000-\u001F\u007F]/,zd=/[\[\].#$\u0000-\u001F\u007F]/,ni=10*1024*1024,os=function(t){return typeof t=="string"&&t.length!==0&&!Hd.test(t)},Go=function(t){return typeof t=="string"&&t.length!==0&&!zd.test(t)},jd=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Go(t)},Gd=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Mi(t)||t&&typeof t=="object"&&Ie(t,".sv")},Kd=function(t,e,n,i){i&&e===void 0||Bn(Nn(t,"value"),e,n)},Bn=function(t,e,n){const i=n instanceof U?new cu(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$e(i));if(typeof e=="function")throw new Error(t+"contains a function "+$e(i)+" with contents = "+e.toString());if(Mi(e))throw new Error(t+"contains "+e.toString()+" "+$e(i));if(typeof e=="string"&&e.length>ni/3&&An(e)>ni)throw new Error(t+"contains a string greater than "+ni+" utf8 bytes "+$e(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(le(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!os(o)))throw new Error(t+" contains an invalid key ("+o+") "+$e(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uu(i,o),Bn(t,l,i),du(i)}),s&&r)throw new Error(t+' contains ".value" child '+$e(i)+" in addition to actual children.")}},Qd=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Ot(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!os(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(au);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&ge(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Yd=function(t,e,n,i){if(i&&e===void 0)return;const s=Nn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];le(e,(o,l)=>{const a=new U(o);if(Bn(s,l,K(n,a)),qi(a)===".priority"&&!Gd(l))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Qd(s,r)},Ko=function(t,e,n,i){if(!(i&&n===void 0)&&!Go(n))throw new Error(Nn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Xd=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ko(t,e,n,i)},Qo=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Jd=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!os(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!jd(n))throw new Error(Nn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ls(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!fo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function ve(t,e,n){ls(t,n),eh(t,i=>ge(i,e)||ge(e,i))}function eh(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(th(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function th(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();je&&oe("event: "+n.toString()),mt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="repo_interrupt",ih=25;class sh{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gn(),this.transactionQueueTree_=new ss,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rh(t,e,n){if(t.stats_=Li(t.repoInfo_),t.forceRestClient_||Dc())t.server_=new mn(t.repoInfo_,(i,s,r,o)=>{cr(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ur(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new xe(t.repoInfo_,e,(i,s,r,o)=>{cr(t,i,s,r,o)},i=>{ur(t,i)},i=>{lh(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Bc(t.repoInfo_,()=>new Lu(t.stats_,t.server_)),t.infoData_=new Pu,t.infoSyncTree_=new lr({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=Qt(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),as(t,"connected",!1),t.serverSyncTree_=new lr({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);ve(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function oh(t){const n=t.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function qn(t){return Bd({timestamp:oh(t)})}function cr(t,e,n,i,s){t.dataUpdateCount++;const r=new U(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=un(n,c=>Z(c));o=Ad(t.serverSyncTree_,r,a,s)}else{const a=Z(n);o=Bo(t.serverSyncTree_,r,a,s)}else if(i){const a=un(n,c=>Z(c));o=xd(t.serverSyncTree_,r,a)}else{const a=Z(n);o=Qt(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ht(t,r)),ve(t.eventQueue_,l,o)}function ur(t,e){as(t,"connected",e),e===!1&&dh(t)}function lh(t,e){le(e,(n,i)=>{as(t,n,i)})}function as(t,e,n){const i=new U("/.info/"+e),s=Z(n);t.infoData_.updateSnapshot(i,s);const r=Qt(t.infoSyncTree_,i,s);ve(t.eventQueue_,i,r)}function cs(t){return t.nextWriteId_++}function ah(t,e,n){const i=Dd(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=Z(s).withIndex(e._queryParams.getIndex());Pd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Qt(t.serverSyncTree_,e._path,r);else{const l=Vt(t.serverSyncTree_,e);o=Bo(t.serverSyncTree_,e._path,r,l)}return ve(t.eventQueue_,e._path,o),Lo(t.serverSyncTree_,e,n,null,!0),r},s=>(Xt(t,"get for query "+ee(e)+" failed: "+s),Promise.reject(new Error(s))))}function ch(t,e,n,i,s){Xt(t,"set",{path:e.toString(),value:n,priority:i});const r=qn(t),o=Z(n,i),l=Xi(t.serverSyncTree_,e),a=$o(o,l,r),c=cs(t),d=Fo(t.serverSyncTree_,e,a,c,!0);ls(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||fe("set at "+e+" failed: "+h);const I=Ae(t.serverSyncTree_,c,!p);ve(t.eventQueue_,e,I),Ti(t,s,h,f)});const u=ds(t,e);ht(t,u),ve(t.eventQueue_,u,[])}function uh(t,e,n,i){Xt(t,"update",{path:e.toString(),value:n});let s=!0;const r=qn(t),o={};if(le(n,(l,a)=>{s=!1,o[l]=Uo(K(e,l),Z(a),t.serverSyncTree_,r)}),s)oe("update() called with empty data.  Don't do anything."),Ti(t,i,"ok",void 0);else{const l=cs(t),a=kd(t.serverSyncTree_,e,o,l);ls(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||fe("update at "+e+" failed: "+c);const h=Ae(t.serverSyncTree_,l,!u),f=h.length>0?ht(t,e):e;ve(t.eventQueue_,f,h),Ti(t,i,c,d)}),le(n,c=>{const d=ds(t,K(e,c));ht(t,d)}),ve(t.eventQueue_,e,[])}}function dh(t){Xt(t,"onDisconnectEvents");const e=qn(t),n=gn();yi(t.onDisconnect_,q(),(s,r)=>{const o=Uo(s,r,t.serverSyncTree_,e);bo(n,s,o)});let i=[];yi(n,q(),(s,r)=>{i=i.concat(Qt(t.serverSyncTree_,s,r));const o=ds(t,s);ht(t,o)}),t.onDisconnect_=gn(),ve(t.eventQueue_,q(),i)}function hh(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nh)}function Xt(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),oe(n,...e)}function Ti(t,e,n,i){e&&mt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Yo(t,e,n){return Xi(t.serverSyncTree_,e,n)||T.EMPTY_NODE}function us(t,e=t.transactionQueueTree_){if(e||Vn(t,e),vt(e)){const n=Jo(t,e);g(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&fh(t,Yt(e),n)}else zo(e)&&Ln(e,n=>{us(t,n)})}function fh(t,e,n){const i=n.map(c=>c.currentWriteId),s=Yo(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];g(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=he(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Xt(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Ae(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Vn(t,rs(t.transactionQueueTree_,e)),us(t,t.transactionQueueTree_),ve(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)mt(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{fe("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}ht(t,e)}},o)}function ht(t,e){const n=Xo(t,e),i=Yt(n),s=Jo(t,n);return _h(t,s,i),i}function _h(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=he(n,a.path);let d=!1,u;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,u=a.abortReason,s=s.concat(Ae(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ih)d=!0,u="maxretry",s=s.concat(Ae(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Yo(t,a.path,o);a.currentInputSnapshot=h;const f=e[l].update(h.val());if(f!==void 0){Bn("transaction failed: Data returned ",f,a.path);let p=Z(f);typeof f=="object"&&f!=null&&Ie(f,".priority")||(p=p.updatePriority(h.getPriority()));const k=a.currentWriteId,L=qn(t),x=$o(p,h,L);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=x,a.currentWriteId=cs(t),o.splice(o.indexOf(k),1),s=s.concat(Fo(t.serverSyncTree_,a.path,x,a.currentWriteId,a.applyLocally)),s=s.concat(Ae(t.serverSyncTree_,k,!0))}else d=!0,u="nodata",s=s.concat(Ae(t.serverSyncTree_,a.currentWriteId,!0))}ve(t.eventQueue_,n,s),s=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(u),!1,null))))}Vn(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)mt(i[l]);us(t,t.transactionQueueTree_)}function Xo(t,e){let n,i=t.transactionQueueTree_;for(n=F(e);n!==null&&vt(i)===void 0;)i=rs(i,n),e=j(e),n=F(e);return i}function Jo(t,e){const n=[];return Zo(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Zo(t,e,n){const i=vt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ln(e,s=>{Zo(t,s,n)})}function Vn(t,e){const n=vt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Ho(e,n.length>0?n:void 0)}Ln(e,i=>{Vn(t,i)})}function ds(t,e){const n=Yt(Xo(t,e)),i=rs(t.transactionQueueTree_,e);return Ud(i,s=>{ii(t,s)}),ii(t,i),jo(i,s=>{ii(t,s)}),n}function ii(t,e){const n=vt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(g(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ae(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ho(e,void 0):n.length=r+1,ve(t.eventQueue_,Yt(e),s);for(let o=0;o<i.length;o++)mt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function mh(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const dr=function(t,e){const n=gh(t),i=n.namespace;n.domain==="firebase.com"&&Re(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Re("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Sc();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new no(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new U(n.pathString)}},gh=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(s=ph(t.substring(d,u)));const h=mh(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ee(this.snapshot.exportVal())}}class yh{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:qi(this._path)}get ref(){return new Ne(this._repo,this._path)}get _queryIdentifier(){const e=Xs(this._queryParams),n=Oi(e);return n==="{}"?"default":n}get _queryObject(){return Xs(this._queryParams)}isEqual(e){if(e=pt(e),!(e instanceof hs))return!1;const n=this._repo===e._repo,i=fo(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+lu(this._path)}}class Ne extends hs{constructor(e,n){super(e,n,new $i,!1)}get parent(){const e=ho(this._path);return e===null?null:new Ne(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new U(e),i=In(this.ref,e);return new Wt(this._node.getChild(n),i,Q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Wt(s,In(this.ref,i),Q)))}hasChild(e){const n=new U(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function si(t,e){return t=pt(t),t._checkNotDeleted("ref"),e!==void 0?In(t._root,e):t._root}function In(t,e){return t=pt(t),F(t._path)===null?Xd("child","path",e,!1):Ko("child","path",e,!1),new Ne(t._repo,K(t._path,e))}function bh(t){return Qo("remove",t._path),el(t,null)}function el(t,e){t=pt(t),Qo("set",t._path),Kd("set",e,t._path,!1);const n=new Ht;return ch(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Nf(t,e){Yd("update",e,t._path,!1);const n=new Ht;return uh(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Eh(t){t=pt(t);const e=new Ch(()=>{}),n=new fs(e);return ah(t._repo,t,n).then(i=>new Wt(i,new Ne(t._repo,t._path),t._queryParams.getIndex()))}class fs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new vh("value",this,new Wt(e.snapshotNode,new Ne(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yh(this,e,n):null}matches(e){return e instanceof fs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}yd(Ne);Sd(Ne);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="FIREBASE_DATABASE_EMULATOR_HOST",ki={};let Sh=!1;function Ih(t,e,n,i){t.repoInfo_=new no(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function Th(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Re("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),oe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dr(r,s),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[wh]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=dr(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const d=s&&a?new rt(rt.OWNER):new Oc(t.name,t.options,e);Jd("Invalid Firebase Database URL",o),M(o.path)||Re("Database URL must point to the root of a Firebase Database (not including a child path).");const u=xh(l,t,d,new Mc(t.name,n));return new Rh(u,t)}function kh(t,e){const n=ki[e];(!n||n[t.key]!==t)&&Re(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hh(t),delete n[t.key]}function xh(t,e,n,i){let s=ki[e.name];s||(s={},ki[e.name]=s);let r=s[t.toURLString()];return r&&Re("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sh(t,Sh,n,i),s[t.toURLString()]=r,r}class Rh{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ne(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Re("Cannot call "+e+" on a deleted database.")}}function tl(t=lc(),e){const n=ic(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Kl("database");i&&Nh(n,...i)}return n}function Nh(t,e,n,i={}){t=pt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Re("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Re('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new rt(rt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Yl(i.mockUserToken,t.app.options.projectId);r=new rt(o)}Ih(s,e,n,r)}/**
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
 */function Ah(t){yc(oc),hn(new Pt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Th(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),it(Ms,Os,t),it(Ms,Os,"esm2017")}xe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ah();const Ph={apiKey:"AIzaSyBbjyRWTrC1w4X7dAGNBMqSkz_YUh8mK0w",authDomain:"todo-36098.firebaseapp.com",projectId:"todo-36098",storageBucket:"todo-36098.appspot.com",messagingSenderId:"331789891603",appId:"1:331789891603:web:9f002d4f2421b3fa32e7e6",measurementId:"G-WTKEJGHXT3",databaseURL:"https://todo-36098-default-rtdb.firebaseio.com/"},Dh=qr(Ph),hr=tl(Dh),Mh=()=>{async function t(){const i=si(tl()),s=await Eh(In(i,"folders"));return Object.values(s.val()).map(r=>r)}function e(i){const s=si(hr,`folders/${i.id}`);el(s,i)}function n(i){const s=si(hr,`folders/${i}`);bh(s)}return{readFolders:t,writeFolder:e,removeFolder:n}},Af=vl("todo",()=>{const t=Mh(),e=G([]),n=G("");i();async function i(){e.value=await t.readFolders(),n.value=e.value[0].id}function s(l){e.value.push(l),t.writeFolder(l)}function r(l){e.value.splice(e.value.findIndex(a=>a.id===l),1),t.removeFolder(l),n.value=e.value[0].id}function o(l){n.value=l}return{folders:e,currentFolderId:n,addFolder:s,deleteFolder:r,openFolder:o}});var Pf=Se({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=R(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>A(t.tag,{class:n.value},me(e.default))}});function Oh({validate:t,resetValidation:e,requiresQForm:n}){const i=yl(Ir,!1);if(i!==!1){const{props:s,proxy:r}=pe();Object.assign(r,{validate:t,resetValidation:e}),se(()=>s.disable,o=>{o===!0?(typeof e=="function"&&e(),i.unbindComponent(r)):i.bindComponent(r)}),$t(()=>{s.disable!==!0&&i.bindComponent(r)}),qe(()=>{s.disable!==!0&&i.unbindComponent(r)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const fr=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,_r=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,pr=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,nn=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,sn=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ri={date:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),time:t=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),fulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),timeOrFulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),email:t=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),hexColor:t=>fr.test(t),hexaColor:t=>_r.test(t),hexOrHexaColor:t=>pr.test(t),rgbColor:t=>nn.test(t),rgbaColor:t=>sn.test(t),rgbOrRgbaColor:t=>nn.test(t)||sn.test(t),hexOrRgbColor:t=>fr.test(t)||nn.test(t),hexaOrRgbaColor:t=>_r.test(t)||sn.test(t),anyColor:t=>pr.test(t)||nn.test(t)||sn.test(t)},Fh=[!0,!1,"ondemand"],Lh={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:t=>Fh.includes(t)}};function Bh(t,e){const{props:n,proxy:i}=pe(),s=G(!1),r=G(null),o=G(null);Oh({validate:p,resetValidation:f});let l=0,a;const c=R(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),d=R(()=>n.disable!==!0&&c.value===!0),u=R(()=>n.error===!0||s.value===!0),h=R(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:r.value);se(()=>n.modelValue,()=>{I()}),se(()=>n.reactiveRules,L=>{L===!0?a===void 0&&(a=se(()=>n.rules,()=>{I(!0)})):a!==void 0&&(a(),a=void 0)},{immediate:!0}),se(t,L=>{L===!0?o.value===null&&(o.value=!1):o.value===!1&&(o.value=!0,d.value===!0&&n.lazyRules!=="ondemand"&&e.value===!1&&k())});function f(){l++,e.value=!1,o.value=null,s.value=!1,r.value=null,k.cancel()}function p(L=n.modelValue){if(d.value!==!0)return!0;const x=++l,b=e.value!==!0?()=>{o.value=!0}:()=>{},O=(_,v)=>{_===!0&&b(),s.value=_,r.value=v||null,e.value=!1},W=[];for(let _=0;_<n.rules.length;_++){const v=n.rules[_];let C;if(typeof v=="function"?C=v(L,ri):typeof v=="string"&&ri[v]!==void 0&&(C=ri[v](L)),C===!1||typeof C=="string")return O(!0,C),!1;C!==!0&&C!==void 0&&W.push(C)}return W.length===0?(O(!1),!0):(e.value=!0,Promise.all(W).then(_=>{if(_===void 0||Array.isArray(_)===!1||_.length===0)return x===l&&O(!1),!0;const v=_.find(C=>C===!1||typeof C=="string");return x===l&&O(v!==void 0,v),v===void 0},_=>(x===l&&(console.error(_),O(!0)),!1)))}function I(L){d.value===!0&&n.lazyRules!=="ondemand"&&(o.value===!0||n.lazyRules!==!0&&L!==!0)&&k()}const k=Cl(p,0);return qe(()=>{a!==void 0&&a(),k.cancel()}),Object.assign(i,{resetValidation:f,validate:p}),Ai(i,"hasError",()=>u.value),{isDirtyModel:o,hasRules:c,hasError:u,errorMessage:h,validate:p,resetValidation:f}}const mr=/^on[A-Z]/;function qh(t,e){const n={listeners:G({}),attributes:G({})};function i(){const s={},r={};for(const o in t)o!=="class"&&o!=="style"&&mr.test(o)===!1&&(s[o]=t[o]);for(const o in e.props)mr.test(o)===!0&&(r[o]=e.props[o]);n.attributes.value=s,n.listeners.value=r}return bl(i),i(),n}let oi,rn=0;const re=new Array(256);for(let t=0;t<256;t++)re[t]=(t+256).toString(16).substring(1);const Vh=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return e=>{const n=[];for(let i=e;i>0;i--)n.push(Math.floor(Math.random()*256));return n}})(),gr=4096;function Wh(){(oi===void 0||rn+16>gr)&&(rn=0,oi=Vh(gr));const t=Array.prototype.slice.call(oi,rn,rn+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,re[t[0]]+re[t[1]]+re[t[2]]+re[t[3]]+"-"+re[t[4]]+re[t[5]]+"-"+re[t[6]]+re[t[7]]+"-"+re[t[8]]+re[t[9]]+"-"+re[t[10]]+re[t[11]]+re[t[12]]+re[t[13]]+re[t[14]]+re[t[15]]}let ze=[],Ut=[];function nl(t){Ut=Ut.filter(e=>e!==t)}function Uh(t){nl(t),Ut.push(t)}function vr(t){nl(t),Ut.length===0&&ze.length>0&&(ze[ze.length-1](),ze=[])}function Wn(t){Ut.length===0?t():ze.push(t)}function $h(t){ze=ze.filter(e=>e!==t)}function xi(t){return t===void 0?`f_${Wh()}`:t}function Ri(t){return t!=null&&(""+t).length>0}const Hh={...xn,...Lh,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},zh=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function jh(){const{props:t,attrs:e,proxy:n,vnode:i}=pe();return{isDark:Rn(t,n.$q),editable:R(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:G(!1),focused:G(!1),hasPopupOpen:!1,splitAttrs:qh(e,i),targetUid:G(xi(t.for)),rootRef:G(null),targetRef:G(null),controlRef:G(null)}}function Gh(t){const{props:e,emit:n,slots:i,attrs:s,proxy:r}=pe(),{$q:o}=r;let l=null;t.hasValue===void 0&&(t.hasValue=R(()=>Ri(e.modelValue))),t.emitValue===void 0&&(t.emitValue=m=>{n("update:modelValue",m)}),t.controlEvents===void 0&&(t.controlEvents={onFocusin:w,onFocusout:S}),Object.assign(t,{clearValue:E,onControlFocusin:w,onControlFocusout:S,focus:v}),t.computedCounter===void 0&&(t.computedCounter=R(()=>{if(e.counter!==!1){const m=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,N=e.maxlength!==void 0?e.maxlength:e.maxValues;return m+(N!==void 0?" / "+N:"")}}));const{isDirtyModel:a,hasRules:c,hasError:d,errorMessage:u,resetValidation:h}=Bh(t.focused,t.innerLoading),f=t.floatingLabel!==void 0?R(()=>e.stackLabel===!0||t.focused.value===!0||t.floatingLabel.value===!0):R(()=>e.stackLabel===!0||t.focused.value===!0||t.hasValue.value===!0),p=R(()=>e.bottomSlots===!0||e.hint!==void 0||c.value===!0||e.counter===!0||e.error!==null),I=R(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),k=R(()=>`q-field row no-wrap items-start q-field--${I.value}`+(t.fieldClass!==void 0?` ${t.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(f.value===!0?" q-field--float":"")+(x.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(t.isDark.value===!0?" q-field--dark":"")+(t.getControl===void 0?" q-field--auto-height":"")+(t.focused.value===!0?" q-field--focused":"")+(d.value===!0?" q-field--error":"")+(d.value===!0||t.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&p.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),L=R(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(d.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length>0&&t.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),x=R(()=>e.labelSlot===!0||e.label!==void 0),b=R(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&d.value!==!0?` text-${e.labelColor}`:"")),O=R(()=>({id:t.targetUid.value,editable:t.editable.value,focused:t.focused.value,floatingLabel:f.value,modelValue:e.modelValue,emitValue:t.emitValue})),W=R(()=>{const m={for:t.targetUid.value};return e.disable===!0?m["aria-disabled"]="true":e.readonly===!0&&(m["aria-readonly"]="true"),m});se(()=>e.for,m=>{t.targetUid.value=xi(m)});function _(){const m=document.activeElement;let N=t.targetRef!==void 0&&t.targetRef.value;N&&(m===null||m.id!==t.targetUid.value)&&(N.hasAttribute("tabindex")===!0||(N=N.querySelector("[tabindex]")),N&&N!==m&&N.focus({preventScroll:!0}))}function v(){Wn(_)}function C(){$h(_);const m=document.activeElement;m!==null&&t.rootRef.value.contains(m)&&m.blur()}function w(m){l!==null&&(clearTimeout(l),l=null),t.editable.value===!0&&t.focused.value===!1&&(t.focused.value=!0,n("focus",m))}function S(m,N){l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,!(document.hasFocus()===!0&&(t.hasPopupOpen===!0||t.controlRef===void 0||t.controlRef.value===null||t.controlRef.value.contains(document.activeElement)!==!1))&&(t.focused.value===!0&&(t.focused.value=!1,n("blur",m)),N!==void 0&&N())})}function E(m){Nt(m),o.platform.is.mobile!==!0?(t.targetRef!==void 0&&t.targetRef.value||t.rootRef.value).focus():t.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(t.inputRef.value.value=null),n("update:modelValue",null),n("clear",e.modelValue),ye(()=>{h(),o.platform.is.mobile!==!0&&(a.value=!1)})}function V(){const m=[];return i.prepend!==void 0&&m.push(A("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:yt},i.prepend())),m.push(A("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},P())),d.value===!0&&e.noErrorIcon===!1&&m.push(ae("error",[A(ms,{name:o.iconSet.field.error,color:"negative"})])),e.loading===!0||t.innerLoading.value===!0?m.push(ae("inner-loading-append",i.loading!==void 0?i.loading():[A(fl,{color:e.color})])):e.clearable===!0&&t.hasValue.value===!0&&t.editable.value===!0&&m.push(ae("inner-clearable-append",[A(ms,{class:"q-field__focusable-action",tag:"button",name:e.clearIcon||o.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:E})])),i.append!==void 0&&m.push(A("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:yt},i.append())),t.getInnerAppend!==void 0&&m.push(ae("inner-append",t.getInnerAppend())),t.getControlChild!==void 0&&m.push(t.getControlChild()),m}function P(){const m=[];return e.prefix!==void 0&&e.prefix!==null&&m.push(A("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),t.getShadowControl!==void 0&&t.hasShadow.value===!0&&m.push(t.getShadowControl()),t.getControl!==void 0?m.push(t.getControl()):i.rawControl!==void 0?m.push(i.rawControl()):i.control!==void 0&&m.push(A("div",{ref:t.targetRef,class:"q-field__native row",tabindex:-1,...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},i.control(O.value))),x.value===!0&&m.push(A("div",{class:b.value},me(i.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&m.push(A("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),m.concat(me(i.default))}function $(){let m,N;d.value===!0?u.value!==null?(m=[A("div",{role:"alert"},u.value)],N=`q--slot-error-${u.value}`):(m=me(i.error),N="q--slot-error"):(e.hideHint!==!0||t.focused.value===!0)&&(e.hint!==void 0?(m=[A("div",e.hint)],N=`q--slot-hint-${e.hint}`):(m=me(i.hint),N="q--slot-hint"));const te=e.counter===!0||i.counter!==void 0;if(e.hideBottomSpace===!0&&te===!1&&m===void 0)return;const ue=A("div",{key:N,class:"q-field__messages col"},m);return A("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale"),onClick:yt},[e.hideBottomSpace===!0?ue:A(li,{name:"q-transition--field-message"},()=>ue),te===!0?A("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():t.computedCounter.value):null])}function ae(m,N){return N===null?null:A("div",{key:m,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},N)}let ce=!1;return kn(()=>{ce=!0}),Tr(()=>{ce===!0&&e.autofocus===!0&&r.focus()}),$t(()=>{El.value===!0&&e.for===void 0&&(t.targetUid.value=xi()),e.autofocus===!0&&r.focus()}),qe(()=>{l!==null&&clearTimeout(l)}),Object.assign(r,{focus:v,blur:C}),function(){const N=t.getControl===void 0&&i.control===void 0?{...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...W.value}:W.value;return A("label",{ref:t.rootRef,class:[k.value,s.class],style:s.style,...N},[i.before!==void 0?A("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:yt},i.before()):null,A("div",{class:"q-field__inner relative-position col self-stretch"},[A("div",{ref:t.controlRef,class:L.value,tabindex:-1,...t.controlEvents},V()),p.value===!0?$():null]),i.after!==void 0?A("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:yt},i.after()):null])}}const yr={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},Tn={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleLowerCase()}},il=Object.keys(Tn);il.forEach(t=>{Tn[t].regex=new RegExp(Tn[t].pattern)});const Kh=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+il.join("")+"])|(.)","g"),Cr=/[.*+?^${}()|[\]\\]/g,J=String.fromCharCode(1),Qh={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Yh(t,e,n,i){let s,r,o,l;const a=G(null),c=G(u());function d(){return t.autogrow===!0||["textarea","text","search","url","tel","password"].includes(t.type)}se(()=>t.type+t.autogrow,f),se(()=>t.mask,_=>{if(_!==void 0)p(c.value,!0);else{const v=O(c.value);f(),t.modelValue!==v&&e("update:modelValue",v)}}),se(()=>t.fillMask+t.reverseFillMask,()=>{a.value===!0&&p(c.value,!0)}),se(()=>t.unmaskedValue,()=>{a.value===!0&&p(c.value)});function u(){if(f(),a.value===!0){const _=x(O(t.modelValue));return t.fillMask!==!1?W(_):_}return t.modelValue}function h(_){if(_<s.length)return s.slice(-_);let v="",C=s;const w=C.indexOf(J);if(w>-1){for(let S=_-C.length;S>0;S--)v+=J;C=C.slice(0,w)+v+C.slice(w)}return C}function f(){if(a.value=t.mask!==void 0&&t.mask.length>0&&d(),a.value===!1){l=void 0,s="",r="";return}const _=yr[t.mask]===void 0?t.mask:yr[t.mask],v=typeof t.fillMask=="string"&&t.fillMask.length>0?t.fillMask.slice(0,1):"_",C=v.replace(Cr,"\\$&"),w=[],S=[],E=[];let V=t.reverseFillMask===!0,P="",$="";_.replace(Kh,(N,te,ue,y,Y)=>{if(y!==void 0){const X=Tn[y];E.push(X),$=X.negate,V===!0&&(S.push("(?:"+$+"+)?("+X.pattern+"+)?(?:"+$+"+)?("+X.pattern+"+)?"),V=!1),S.push("(?:"+$+"+)?("+X.pattern+")?")}else if(ue!==void 0)P="\\"+(ue==="\\"?"":ue),E.push(ue),w.push("([^"+P+"]+)?"+P+"?");else{const X=te!==void 0?te:Y;P=X==="\\"?"\\\\\\\\":X.replace(Cr,"\\\\$&"),E.push(X),w.push("([^"+P+"]+)?"+P+"?")}});const ae=new RegExp("^"+w.join("")+"("+(P===""?".":"[^"+P+"]")+"+)?"+(P===""?"":"["+P+"]*")+"$"),ce=S.length-1,m=S.map((N,te)=>te===0&&t.reverseFillMask===!0?new RegExp("^"+C+"*"+N):te===ce?new RegExp("^"+N+"("+($===""?".":$)+"+)?"+(t.reverseFillMask===!0?"$":C+"*")):new RegExp("^"+N));o=E,l=N=>{const te=ae.exec(t.reverseFillMask===!0?N:N.slice(0,E.length));te!==null&&(N=te.slice(1).join(""));const ue=[],y=m.length;for(let Y=0,X=N;Y<y;Y++){const we=m[Y].exec(X);if(we===null)break;X=X.slice(we.shift().length),ue.push(...we)}return ue.length>0?ue.join(""):N},s=E.map(N=>typeof N=="string"?N:J).join(""),r=s.split(J).join(v)}function p(_,v,C){const w=i.value,S=w.selectionEnd,E=w.value.length-S,V=O(_);v===!0&&f();const P=x(V),$=t.fillMask!==!1?W(P):P,ae=c.value!==$;w.value!==$&&(w.value=$),ae===!0&&(c.value=$),document.activeElement===w&&ye(()=>{if($===r){const m=t.reverseFillMask===!0?r.length:0;w.setSelectionRange(m,m,"forward");return}if(C==="insertFromPaste"&&t.reverseFillMask!==!0){const m=S-1;k.right(w,m,m);return}if(["deleteContentBackward","deleteContentForward"].indexOf(C)>-1){const m=t.reverseFillMask===!0?S===0?$.length>P.length?1:0:Math.max(0,$.length-($===r?0:Math.min(P.length,E)+1))+1:S;w.setSelectionRange(m,m,"forward");return}if(t.reverseFillMask===!0)if(ae===!0){const m=Math.max(0,$.length-($===r?0:Math.min(P.length,E+1)));m===1&&S===1?w.setSelectionRange(m,m,"forward"):k.rightReverse(w,m,m)}else{const m=$.length-E;w.setSelectionRange(m,m,"backward")}else if(ae===!0){const m=Math.max(0,s.indexOf(J),Math.min(P.length,S)-1);k.right(w,m,m)}else{const m=S-1;k.right(w,m,m)}});const ce=t.unmaskedValue===!0?O($):$;String(t.modelValue)!==ce&&n(ce,!0)}function I(_,v,C){const w=x(O(_.value));v=Math.max(0,s.indexOf(J),Math.min(w.length,v)),_.setSelectionRange(v,C,"forward")}const k={left(_,v,C,w){const S=s.slice(v-1).indexOf(J)===-1;let E=Math.max(0,v-1);for(;E>=0;E--)if(s[E]===J){v=E,S===!0&&v++;break}if(E<0&&s[v]!==void 0&&s[v]!==J)return k.right(_,0,0);v>=0&&_.setSelectionRange(v,w===!0?C:v,"backward")},right(_,v,C,w){const S=_.value.length;let E=Math.min(S,C+1);for(;E<=S;E++)if(s[E]===J){C=E;break}else s[E-1]===J&&(C=E);if(E>S&&s[C-1]!==void 0&&s[C-1]!==J)return k.left(_,S,S);_.setSelectionRange(w?v:C,C,"forward")},leftReverse(_,v,C,w){const S=h(_.value.length);let E=Math.max(0,v-1);for(;E>=0;E--)if(S[E-1]===J){v=E;break}else if(S[E]===J&&(v=E,E===0))break;if(E<0&&S[v]!==void 0&&S[v]!==J)return k.rightReverse(_,0,0);v>=0&&_.setSelectionRange(v,w===!0?C:v,"backward")},rightReverse(_,v,C,w){const S=_.value.length,E=h(S),V=E.slice(0,C+1).indexOf(J)===-1;let P=Math.min(S,C+1);for(;P<=S;P++)if(E[P-1]===J){C=P,C>0&&V===!0&&C--;break}if(P>S&&E[C-1]!==void 0&&E[C-1]!==J)return k.leftReverse(_,S,S);_.setSelectionRange(w===!0?v:C,C,"forward")}};function L(_){if(e("keydown",_),wl(_)===!0)return;const v=i.value,C=v.selectionStart,w=v.selectionEnd;if(_.keyCode===37||_.keyCode===39){const S=k[(_.keyCode===39?"right":"left")+(t.reverseFillMask===!0?"Reverse":"")];_.preventDefault(),S(v,C,w,_.shiftKey)}else _.keyCode===8&&t.reverseFillMask!==!0&&C===w?k.left(v,C,w,!0):_.keyCode===46&&t.reverseFillMask===!0&&C===w&&k.rightReverse(v,C,w,!0)}function x(_){if(_==null||_==="")return"";if(t.reverseFillMask===!0)return b(_);const v=o;let C=0,w="";for(let S=0;S<v.length;S++){const E=_[C],V=v[S];if(typeof V=="string")w+=V,E===V&&C++;else if(E!==void 0&&V.regex.test(E))w+=V.transform!==void 0?V.transform(E):E,C++;else return w}return w}function b(_){const v=o,C=s.indexOf(J);let w=_.length-1,S="";for(let E=v.length-1;E>=0&&w>-1;E--){const V=v[E];let P=_[w];if(typeof V=="string")S=V+S,P===V&&w--;else if(P!==void 0&&V.regex.test(P))do S=(V.transform!==void 0?V.transform(P):P)+S,w--,P=_[w];while(C===E&&P!==void 0&&V.regex.test(P));else return S}return S}function O(_){return typeof _!="string"||l===void 0?typeof _=="number"?l(""+_):_:l(_)}function W(_){return r.length-_.length<=0?_:t.reverseFillMask===!0&&_.length>0?r.slice(0,-_.length)+_:_+r.slice(_.length)}return{innerValue:c,hasMask:a,moveCursorForPaste:I,updateMaskValue:p,onMaskedKeydown:L}}const Xh={name:String};function Df(t={}){return(e,n,i)=>{e[n](A("input",{class:"hidden"+(i||""),...t.value}))}}function Jh(t){return R(()=>t.name||t.for)}function Zh(t,e){function n(){const i=t.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(r=>{s.items.add(r)}),{files:s.files}}catch{return{files:void 0}}}return e===!0?R(()=>{if(t.type==="file")return n()}):R(n)}const ef=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,tf=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,nf=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,sf=/[a-z0-9_ -]$/i;function rf(t){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,t(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(Te.is.firefox===!0?sf.test(n.data)===!1:ef.test(n.data)===!0||tf.test(n.data)===!0||nf.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var Mf=Se({name:"QInput",inheritAttrs:!1,props:{...Hh,...Qh,...Xh,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...zh,"paste","change","keydown","animationend"],setup(t,{emit:e,attrs:n}){const{proxy:i}=pe(),{$q:s}=i,r={};let o=NaN,l,a,c=null,d;const u=G(null),h=Jh(t),{innerValue:f,hasMask:p,moveCursorForPaste:I,updateMaskValue:k,onMaskedKeydown:L}=Yh(t,e,ae,u),x=Zh(t,!0),b=R(()=>Ri(f.value)),O=rf(P),W=jh(),_=R(()=>t.type==="textarea"||t.autogrow===!0),v=R(()=>_.value===!0||["text","search","url","tel","password"].includes(t.type)),C=R(()=>{const y={...W.splitAttrs.listeners.value,onInput:P,onPaste:V,onChange:m,onBlur:N,onFocus:vs};return y.onCompositionstart=y.onCompositionupdate=y.onCompositionend=O,p.value===!0&&(y.onKeydown=L),t.autogrow===!0&&(y.onAnimationend=$),y}),w=R(()=>{const y={tabindex:0,"data-autofocus":t.autofocus===!0||void 0,rows:t.type==="textarea"?6:void 0,"aria-label":t.label,name:h.value,...W.splitAttrs.attributes.value,id:W.targetUid.value,maxlength:t.maxlength,disabled:t.disable===!0,readonly:t.readonly===!0};return _.value===!1&&(y.type=t.type),t.autogrow===!0&&(y.rows=1),y});se(()=>t.type,()=>{u.value&&(u.value.value=t.modelValue)}),se(()=>t.modelValue,y=>{if(p.value===!0){if(a===!0&&(a=!1,String(y)===o))return;k(y)}else f.value!==y&&(f.value=y,t.type==="number"&&r.hasOwnProperty("value")===!0&&(l===!0?l=!1:delete r.value));t.autogrow===!0&&ye(ce)}),se(()=>t.autogrow,y=>{y===!0?ye(ce):u.value!==null&&n.rows>0&&(u.value.style.height="auto")}),se(()=>t.dense,()=>{t.autogrow===!0&&ye(ce)});function S(){Wn(()=>{const y=document.activeElement;u.value!==null&&u.value!==y&&(y===null||y.id!==W.targetUid.value)&&u.value.focus({preventScroll:!0})})}function E(){u.value!==null&&u.value.select()}function V(y){if(p.value===!0&&t.reverseFillMask!==!0){const Y=y.target;I(Y,Y.selectionStart,Y.selectionEnd)}e("paste",y)}function P(y){if(!y||!y.target)return;if(t.type==="file"){e("update:modelValue",y.target.files);return}const Y=y.target.value;if(y.target.qComposing===!0){r.value=Y;return}if(p.value===!0)k(Y,!1,y.inputType);else if(ae(Y),v.value===!0&&y.target===document.activeElement){const{selectionStart:X,selectionEnd:we}=y.target;X!==void 0&&we!==void 0&&ye(()=>{y.target===document.activeElement&&Y.indexOf(y.target.value)===0&&y.target.setSelectionRange(X,we)})}t.autogrow===!0&&ce()}function $(y){e("animationend",y),ce()}function ae(y,Y){d=()=>{c=null,t.type!=="number"&&r.hasOwnProperty("value")===!0&&delete r.value,t.modelValue!==y&&o!==y&&(o=y,Y===!0&&(a=!0),e("update:modelValue",y),ye(()=>{o===y&&(o=NaN)})),d=void 0},t.type==="number"&&(l=!0,r.value=y),t.debounce!==void 0?(c!==null&&clearTimeout(c),r.value=y,c=setTimeout(d,t.debounce)):d()}function ce(){requestAnimationFrame(()=>{const y=u.value;if(y!==null){const Y=y.parentNode.style,{overflow:X}=y.style;s.platform.is.firefox!==!0&&(y.style.overflow="hidden"),Y.marginBottom=y.scrollHeight-1+"px",y.style.height="1px",y.style.height=y.scrollHeight+"px",y.style.overflow=X,Y.marginBottom=""}})}function m(y){O(y),c!==null&&(clearTimeout(c),c=null),d!==void 0&&d(),e("change",y.target.value)}function N(y){y!==void 0&&vs(y),c!==null&&(clearTimeout(c),c=null),d!==void 0&&d(),l=!1,a=!1,delete r.value,t.type!=="file"&&setTimeout(()=>{u.value!==null&&(u.value.value=f.value!==void 0?f.value:"")})}function te(){return r.hasOwnProperty("value")===!0?r.value:f.value!==void 0?f.value:""}qe(()=>{N()}),$t(()=>{t.autogrow===!0&&ce()}),Object.assign(W,{innerValue:f,fieldClass:R(()=>`q-${_.value===!0?"textarea":"input"}`+(t.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:R(()=>t.type!=="file"&&typeof t.shadowText=="string"&&t.shadowText.length>0),inputRef:u,emitValue:ae,hasValue:b,floatingLabel:R(()=>b.value===!0||Ri(t.displayValue)),getControl:()=>A(_.value===!0?"textarea":"input",{ref:u,class:["q-field__native q-placeholder",t.inputClass],style:t.inputStyle,...w.value,...C.value,...t.type!=="file"?{value:te()}:x.value}),getShadowControl:()=>A("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(_.value===!0?"":" text-no-wrap")},[A("span",{class:"invisible"},te()),A("span",t.shadowText)])});const ue=Gh(W);return Object.assign(i,{focus:S,select:E,getNativeElement:()=>u.value}),Ai(i,"nativeEl",()=>u.value),ue}}),Of=Se({name:"QCardActions",props:{..._l,vertical:Boolean},setup(t,{slots:e}){const n=pl(t),i=R(()=>`q-card__actions ${n.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>A("div",{class:i.value},me(e.default))}}),Ff=Se({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:e,emit:n}){const i=pe(),s=G(null);let r=0;const o=[];function l(f){const p=typeof f=="boolean"?f:t.noErrorFocus!==!0,I=++r,k=(b,O)=>{n("validation"+(b===!0?"Success":"Error"),O)},L=b=>{const O=b.validate();return typeof O.then=="function"?O.then(W=>({valid:W,comp:b}),W=>({valid:!1,comp:b,err:W})):Promise.resolve({valid:O,comp:b})};return(t.greedy===!0?Promise.all(o.map(L)).then(b=>b.filter(O=>O.valid!==!0)):o.reduce((b,O)=>b.then(()=>L(O).then(W=>{if(W.valid===!1)return Promise.reject(W)})),Promise.resolve()).catch(b=>[b])).then(b=>{if(b===void 0||b.length===0)return I===r&&k(!0),!0;if(I===r){const{comp:O,err:W}=b[0];if(W!==void 0&&console.error(W),k(!1,O),p===!0){const _=b.find(({comp:v})=>typeof v.focus=="function"&&Ni(v.$)===!1);_!==void 0&&_.comp.focus()}}return!1})}function a(){r++,o.forEach(f=>{typeof f.resetValidation=="function"&&f.resetValidation()})}function c(f){f!==void 0&&Nt(f);const p=r+1;l().then(I=>{p===r&&I===!0&&(t.onSubmit!==void 0?n("submit",f):f!==void 0&&f.target!==void 0&&typeof f.target.submit=="function"&&f.target.submit())})}function d(f){f!==void 0&&Nt(f),n("reset"),ye(()=>{a(),t.autofocus===!0&&t.noResetFocus!==!0&&u()})}function u(){Wn(()=>{if(s.value===null)return;const f=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),p=>p.tabIndex>-1);f!=null&&f.focus({preventScroll:!0})})}Sl(Ir,{bindComponent(f){o.push(f)},unbindComponent(f){const p=o.indexOf(f);p>-1&&o.splice(p,1)}});let h=!1;return kn(()=>{h=!0}),Tr(()=>{h===!0&&t.autofocus===!0&&u()}),$t(()=>{t.autofocus===!0&&u()}),Object.assign(i.proxy,{validate:l,resetValidation:a,submit:c,reset:d,focus:u,getValidationComponents:()=>o}),()=>A("form",{class:"q-form",ref:s,onSubmit:c,onReset:d},me(e.default))}}),Lf=Se({name:"QCard",props:{...xn,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=pe(),i=Rn(t,n),s=R(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>A(t.tag,{class:s.value},me(e.default))}});function of(){let t;const e=pe();function n(){t=void 0}return kn(n),qe(n),{removeTick:n,registerTick(i){t=i,ye(()=>{t===i&&(Ni(e)===!1&&t(),t=void 0)})}}}const lf={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function af(t,e=()=>{},n=()=>{}){return{transitionProps:R(()=>{const i=`q-transition--${t.transitionShow||e()}`,s=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${s}-leave-from`,leaveActiveClass:`${s}-leave-active`,leaveToClass:`${s}-leave-to`}}),transitionStyle:R(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}let cf=1,uf=document.body;function df(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${cf++}`:t,ys.globalNodes!==void 0){const i=ys.globalNodes.class;i!==void 0&&(n.className=i)}return uf.appendChild(n),n}function hf(t){t.remove()}const an=[];function Bf(t){return an.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function ff(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return ln(t)}else if(t.__qPortal===!0){const n=ln(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=ln(t)}while(t!=null)}function qf(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=ff(t,e);continue}t.hide(e)}t=ln(t)}}function _f(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function pf(t,e,n,i){const s=G(!1),r=G(!1);let o=null;const l={},a=i==="dialog"&&_f(t);function c(u){if(u===!0){vr(l),r.value=!0;return}r.value=!1,s.value===!1&&(a===!1&&o===null&&(o=df(!1,i)),s.value=!0,an.push(t.proxy),Uh(l))}function d(u){if(r.value=!1,u!==!0)return;vr(l),s.value=!1;const h=an.indexOf(t.proxy);h!==-1&&an.splice(h,1),o!==null&&(hf(o),o=null)}return Il(()=>{d(!0)}),t.proxy.__qPortal=!0,Ai(t.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:d,portalIsActive:s,portalIsAccessible:r,renderPortal:()=>a===!0?n():s.value===!0?[A(Tl,{to:o},n())]:void 0}}const Ge=[];let ft;function mf(t){ft=t.keyCode===27}function gf(){ft===!0&&(ft=!1)}function vf(t){ft===!0&&(ft=!1,Sr(t,27)===!0&&Ge[Ge.length-1](t))}function sl(t){window[t]("keydown",mf),window[t]("blur",gf),window[t]("keyup",vf),ft=!1}function yf(t){Te.is.desktop===!0&&(Ge.push(t),Ge.length===1&&sl("addEventListener"))}function br(t){const e=Ge.indexOf(t);e>-1&&(Ge.splice(e,1),Ge.length===0&&sl("removeEventListener"))}const Ke=[];function rl(t){Ke[Ke.length-1](t)}function Cf(t){Te.is.desktop===!0&&(Ke.push(t),Ke.length===1&&document.body.addEventListener("focusin",rl))}function Er(t){const e=Ke.indexOf(t);e>-1&&(Ke.splice(e,1),Ke.length===0&&document.body.removeEventListener("focusin",rl))}let on=0;const bf={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},wr={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Vf=Se({name:"QDialog",inheritAttrs:!1,props:{...xl,...lf,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...Rl,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:i}){const s=pe(),{proxy:{$q:r}}=s,o=G(null),l=G(!1),a=G(!1);let c=null,d=null,u,h;const f=R(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:p}=Bl(),{registerTimeout:I}=ql(),{registerTick:k,removeTick:L}=of(),{transitionProps:x,transitionStyle:b}=af(t,()=>wr[t.position][0],()=>wr[t.position][1]),{showPortal:O,hidePortal:W,portalIsAccessible:_,renderPortal:v}=pf(s,o,ll,"dialog"),{hide:C}=Nl({showing:l,hideOnRouteChange:f,handleShow:ae,handleHide:ce,processOnMount:!0}),{addToHistory:w,removeFromHistory:S}=kl(l,C,f),E=R(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${bf[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),V=R(()=>l.value===!0&&t.seamless!==!0),P=R(()=>t.autoClose===!0?{onClick:Y}:{}),$=R(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${V.value===!0?"modal":"seamless"}`,i.class]);se(()=>t.maximized,B=>{l.value===!0&&y(B)}),se(V,B=>{p(B),B===!0?(Cf(we),yf(te)):(Er(we),br(te))});function ae(B){w(),d=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,y(t.maximized),O(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),k(m)):L(),I(()=>{if(s.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:de,bottom:Un}=document.activeElement.getBoundingClientRect(),{innerHeight:_s}=window,$n=window.visualViewport!==void 0?window.visualViewport.height:_s;de>0&&Un>$n/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-$n,Un>=_s?1/0:Math.ceil(document.scrollingElement.scrollTop+Un-$n/2))),document.activeElement.scrollIntoView()}h=!0,o.value.click(),h=!1}O(!0),a.value=!1,n("show",B)},t.transitionDuration)}function ce(B){L(),S(),ue(!0),a.value=!0,W(),d!==null&&(((B&&B.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),I(()=>{W(!0),a.value=!1,n("hide",B)},t.transitionDuration)}function m(B){Wn(()=>{let de=o.value;de===null||de.contains(document.activeElement)===!0||(de=(B!==""?de.querySelector(B):null)||de.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||de.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||de.querySelector("[autofocus], [data-autofocus]")||de,de.focus({preventScroll:!0}))})}function N(B){B&&typeof B.focus=="function"?B.focus({preventScroll:!0}):m(),n("shake");const de=o.value;de!==null&&(de.classList.remove("q-animate--scale"),de.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,o.value!==null&&(de.classList.remove("q-animate--scale"),m())},170))}function te(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&N():(n("escapeKey"),C()))}function ue(B){c!==null&&(clearTimeout(c),c=null),(B===!0||l.value===!0)&&(y(!1),t.seamless!==!0&&(p(!1),Er(we),br(te))),B!==!0&&(d=null)}function y(B){B===!0?u!==!0&&(on<1&&document.body.classList.add("q-body--dialog"),on++,u=!0):u===!0&&(on<2&&document.body.classList.remove("q-body--dialog"),on--,u=!1)}function Y(B){h!==!0&&(C(B),n("click",B))}function X(B){t.persistent!==!0&&t.noBackdropDismiss!==!0?C(B):t.noShake!==!0&&N(B.relatedTarget)}function we(B){t.allowFocusOutside!==!0&&_.value===!0&&ml(o.value,B.target)!==!0&&m('[tabindex]:not([tabindex="-1"])')}Object.assign(s.proxy,{focus:m,shake:N,__updateRefocusTarget(B){d=B||null}}),qe(ue);const ol=r.platform.is.ios===!0||r.platform.is.safari?"onClick":"onFocusin";function ll(){return A("div",{role:"dialog","aria-modal":V.value===!0?"true":"false",...i,class:$.value},[A(li,{name:"q-transition--fade",appear:!0},()=>V.value===!0?A("div",{class:"q-dialog__backdrop fixed-full",style:b.value,"aria-hidden":"true",tabindex:-1,[ol]:X}):null),A(li,x.value,()=>l.value===!0?A("div",{ref:o,class:E.value,style:b.value,tabindex:-1,...P.value},me(e.default)):null)])}return v}});const Wf=()=>{const t="ID",e=Date.now(),n=Math.floor(Math.random()*1e4);return`${t}${e}${n}`};export{Df as A,si as B,tl as C,Eh as D,In as E,hr as F,el as G,bh as H,Nf as I,xf as Q,xn as a,Rl as b,Rn as c,ql as d,Nl as e,kl as f,Bl as g,If as h,Pl as i,Dl as j,Tf as k,Af as l,Lf as m,Ff as n,Pf as o,Mf as p,Of as q,Vf as r,Wf as s,Bf as t,xl as u,qf as v,kf as w,Rf as x,Sf as y,Xh as z};
