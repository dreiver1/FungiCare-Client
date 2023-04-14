import{k as B,m as le,n as z,i as ue,O as ie,j as D,t as g,f as a,P as ae,F as se,Q as de,L as fe,v as ce,R as ve,S as pe,u as me,h as i,M as F,T as ge}from"./index.fc438c0c.js";import{Q as J}from"./Ripple.c89757c9.js";import{a as be}from"./QBtn.db568181.js";import{u as he,b as ye}from"./QPage.df9214f8.js";import{h as E}from"./render.8b5823bc.js";function Ce({validate:e,resetValidation:o,requiresQForm:r}){const t=ue(ie,!1);if(t!==!1){const{props:d,proxy:s}=D();Object.assign(s,{validate:e,resetValidation:o}),B(()=>d.disable,n=>{n===!0?(typeof o=="function"&&o(),t.unbindComponent(s)):t.bindComponent(s)}),le(()=>{d.disable!==!0&&t.bindComponent(s)}),z(()=>{d.disable!==!0&&t.unbindComponent(s)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const W=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,X=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Y=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,$=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,I=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,T={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>W.test(e),hexaColor:e=>X.test(e),hexOrHexaColor:e=>Y.test(e),rgbColor:e=>$.test(e),rgbaColor:e=>I.test(e),rgbOrRgbaColor:e=>$.test(e)||I.test(e),hexOrRgbColor:e=>W.test(e)||$.test(e),hexaOrRgbaColor:e=>X.test(e)||I.test(e),anyColor:e=>Y.test(e)||$.test(e)||I.test(e)},qe=[!0,!1,"ondemand"],xe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>qe.includes(e)}};function _e(e,o){const{props:r,proxy:t}=D(),d=g(!1),s=g(null),n=g(null);Ce({validate:C,resetValidation:_});let v=0,y;const A=a(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length>0),b=a(()=>r.disable!==!0&&A.value===!0),x=a(()=>r.error===!0||d.value===!0),O=a(()=>typeof r.errorMessage=="string"&&r.errorMessage.length>0?r.errorMessage:s.value);B(()=>r.modelValue,()=>{V()}),B(()=>r.reactiveRules,h=>{h===!0?y===void 0&&(y=B(()=>r.rules,()=>{V(!0)})):y!==void 0&&(y(),y=void 0)},{immediate:!0}),B(e,h=>{h===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,b.value===!0&&r.lazyRules!=="ondemand"&&o.value===!1&&w())});function _(){v++,o.value=!1,n.value=null,d.value=!1,s.value=null,w.cancel()}function C(h=r.modelValue){if(b.value!==!0)return!0;const S=++v,M=o.value!==!0?()=>{n.value=!0}:()=>{},q=(c,p)=>{c===!0&&M(),d.value=c,s.value=p||null,o.value=!1},R=[];for(let c=0;c<r.rules.length;c++){const p=r.rules[c];let m;if(typeof p=="function"?m=p(h,T):typeof p=="string"&&T[p]!==void 0&&(m=T[p](h)),m===!1||typeof m=="string")return q(!0,m),!1;m!==!0&&m!==void 0&&R.push(m)}return R.length===0?(q(!1),!0):(o.value=!0,Promise.all(R).then(c=>{if(c===void 0||Array.isArray(c)===!1||c.length===0)return S===v&&q(!1),!0;const p=c.find(m=>m===!1||typeof m=="string");return S===v&&q(p!==void 0,p),p===void 0},c=>(S===v&&(console.error(c),q(!0)),!1)))}function V(h){b.value===!0&&r.lazyRules!=="ondemand"&&(n.value===!0||r.lazyRules!==!0&&h!==!0)&&w()}const w=ae(C,0);return z(()=>{y!==void 0&&y(),w.cancel()}),Object.assign(t,{resetValidation:_,validate:C}),se(t,"hasError",()=>x.value),{isDirtyModel:n,hasRules:A,hasError:x,errorMessage:O,validate:C,resetValidation:_}}const ee=/^on[A-Z]/;function we(e,o){const r={listeners:g({}),attributes:g({})};function t(){const d={},s={};for(const n in e)n!=="class"&&n!=="style"&&ee.test(n)===!1&&(d[n]=e[n]);for(const n in o.props)ee.test(n)===!0&&(s[n]=o.props[n]);r.attributes.value=d,r.listeners.value=s}return de(t),t(),r}let U,P=0;const f=new Array(256);for(let e=0;e<256;e++)f[e]=(e+256).toString(16).substring(1);const Se=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const r=new Uint8Array(o);return e.getRandomValues(r),r}}return o=>{const r=[];for(let t=o;t>0;t--)r.push(Math.floor(Math.random()*256));return r}})(),oe=4096;function Re(){(U===void 0||P+16>oe)&&(P=0,U=Se(oe));const e=Array.prototype.slice.call(U,P,P+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f[e[0]]+f[e[1]]+f[e[2]]+f[e[3]]+"-"+f[e[4]]+f[e[5]]+"-"+f[e[6]]+f[e[7]]+"-"+f[e[8]]+f[e[9]]+"-"+f[e[10]]+f[e[11]]+f[e[12]]+f[e[13]]+f[e[14]]+f[e[15]]}let j=[],Be=[];function Fe(e){Be.length===0?e():j.push(e)}function Ae(e){j=j.filter(o=>o!==e)}function L(e){return e===void 0?`f_${Re()}`:e}function Ve(e){return e!=null&&(""+e).length>0}const De={...he,...xe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Oe=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Me(){const{props:e,attrs:o,proxy:r,vnode:t}=D();return{isDark:ye(e,r.$q),editable:a(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:we(o,t),targetUid:g(L(e.for)),rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function Te(e){const{props:o,emit:r,slots:t,attrs:d,proxy:s}=D(),{$q:n}=s;let v=null;e.hasValue===void 0&&(e.hasValue=a(()=>Ve(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{r("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:H,onFocusout:Q}),Object.assign(e,{clearValue:N,onControlFocusin:H,onControlFocusout:Q,focus:p}),e.computedCounter===void 0&&(e.computedCounter=a(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,u=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:y,hasRules:A,hasError:b,errorMessage:x,resetValidation:O}=_e(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?a(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):a(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=a(()=>o.bottomSlots===!0||o.hint!==void 0||A.value===!0||o.counter===!0||o.error!==null),V=a(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),w=a(()=>`q-field row no-wrap items-start q-field--${V.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(b.value===!0?" q-field--error":"")+(b.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),h=a(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(b.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),S=a(()=>o.labelSlot===!0||o.label!==void 0),M=a(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&b.value!==!0?` text-${o.labelColor}`:"")),q=a(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=a(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});B(()=>o.for,l=>{e.targetUid.value=L(l)});function c(){const l=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(l===null||l.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==l&&u.focus({preventScroll:!0}))}function p(){Fe(c)}function m(){Ae(c);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function H(l){v!==null&&(clearTimeout(v),v=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",l))}function Q(l,u){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",l)),u!==void 0&&u())})}function N(l){fe(l),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),r("clear",o.modelValue),ce(()=>{O(),n.platform.is.mobile!==!0&&(y.value=!1)})}function te(){const l=[];return t.prepend!==void 0&&l.push(i("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:F},t.prepend())),l.push(i("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},re())),b.value===!0&&o.noErrorIcon===!1&&l.push(k("error",[i(J,{name:n.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(k("inner-loading-append",t.loading!==void 0?t.loading():[i(be,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(k("inner-clearable-append",[i(J,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:N})])),t.append!==void 0&&l.push(i("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:F},t.append())),e.getInnerAppend!==void 0&&l.push(k("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function re(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(i("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):t.rawControl!==void 0?l.push(t.rawControl()):t.control!==void 0&&l.push(i("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},t.control(q.value))),S.value===!0&&l.push(i("div",{class:M.value},E(t.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(i("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(E(t.default))}function ne(){let l,u;b.value===!0?x.value!==null?(l=[i("div",{role:"alert"},x.value)],u=`q--slot-error-${x.value}`):(l=E(t.error),u="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[i("div",o.hint)],u=`q--slot-hint-${o.hint}`):(l=E(t.hint),u="q--slot-hint"));const K=o.counter===!0||t.counter!==void 0;if(o.hideBottomSpace===!0&&K===!1&&l===void 0)return;const G=i("div",{key:u,class:"q-field__messages col"},l);return i("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:F},[o.hideBottomSpace===!0?G:i(ge,{name:"q-transition--field-message"},()=>G),K===!0?i("div",{class:"q-field__counter"},t.counter!==void 0?t.counter():e.computedCounter.value):null])}function k(l,u){return u===null?null:i("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let Z=!1;return ve(()=>{Z=!0}),pe(()=>{Z===!0&&o.autofocus===!0&&s.focus()}),le(()=>{me.value===!0&&o.for===void 0&&(e.targetUid.value=L()),o.autofocus===!0&&s.focus()}),z(()=>{v!==null&&clearTimeout(v)}),Object.assign(s,{focus:p,blur:m}),function(){const u=e.getControl===void 0&&t.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return i("label",{ref:e.rootRef,class:[w.value,d.class],style:d.style,...u},[t.before!==void 0?i("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:F},t.before()):null,i("div",{class:"q-field__inner relative-position col self-stretch"},[i("div",{ref:e.controlRef,class:h.value,tabindex:-1,...e.controlEvents},te()),C.value===!0?ne():null]),t.after!==void 0?i("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:F},t.after()):null])}}const Ue={name:String};function je(e={}){return(o,r,t)=>{o[r](i("input",{class:"hidden"+(t||""),...e.value}))}}function Le(e){return a(()=>e.name||e.for)}function ze(e,o){function r(){const t=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach(s=>{d.items.add(s)}),{files:d.files}}catch{return{files:void 0}}}return o===!0?a(()=>{if(e.type==="file")return r()}):a(r)}export{Ue as a,Oe as b,Le as c,ze as d,Me as e,Te as f,Fe as g,Ve as h,je as i,De as u};