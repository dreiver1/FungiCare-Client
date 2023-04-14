import{Q as M}from"./Ripple.c89757c9.js";import{c as C,h as F,d as P,a as j}from"./render.8b5823bc.js";import{f as n,h as g,e as q,t as V,k as d,n as O,i as S,l as R,j as T,u as U,_ as K,d as A,o as D,c as E,w,a as u,C as x,r as G}from"./index.fc438c0c.js";import{Q}from"./QBtn.db568181.js";import{b as N,Q as J,a as W}from"./QLayout.9c94d7f7.js";import"./dom.ac998a7b.js";import"./use-router-link.7b7e7673.js";var X=C({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:h}){const f=n(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>g("div",{class:f.value},F(h.default))}}),Y=C({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:h}){const f=n(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:f.value,role:"toolbar"},F(h.default))}}),Z=C({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:h,emit:f}){const{proxy:{$q:m}}=T(),e=S(R,q);if(e===q)return console.error("QHeader needs to be child of QLayout"),q;const r=V(parseInt(t.heightHint,10)),l=V(!0),p=n(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||m.platform.is.ios&&e.isContainer.value===!0),b=n(()=>{if(t.modelValue!==!0)return 0;if(p.value===!0)return l.value===!0?r.value:0;const a=r.value-e.scroll.value.position;return a>0?a:0}),z=n(()=>t.modelValue!==!0||p.value===!0&&l.value!==!0),B=n(()=>t.modelValue===!0&&z.value===!0&&t.reveal===!0),H=n(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(z.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),$=n(()=>{const a=e.rows.value.top,v={};return a[0]==="l"&&e.left.space===!0&&(v[m.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),a[2]==="r"&&e.right.space===!0&&(v[m.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),v});function s(a,v){e.update("header",a,v)}function y(a,v){a.value!==v&&(a.value=v)}function i({height:a}){y(r,a),s("size",a)}function _(a){B.value===!0&&y(l,!0),f("focusin",a)}d(()=>t.modelValue,a=>{s("space",a),y(l,!0),e.animate()}),d(b,a=>{s("offset",a)}),d(()=>t.reveal,a=>{a===!1&&y(l,t.modelValue)}),d(l,a=>{e.animate(),f("reveal",a)}),d(e.scroll,a=>{t.reveal===!0&&y(l,a.direction==="up"||a.position<=t.revealOffset||a.position-a.inflectionPoint<100)});const k={};return e.instances.header=k,t.modelValue===!0&&s("size",r.value),s("space",t.modelValue),s("offset",b.value),O(()=>{e.instances.header===k&&(e.instances.header=void 0,s("size",0),s("offset",0),s("space",!1))}),()=>{const a=P(h.default,[]);return t.elevated===!0&&a.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(g(N,{debounce:0,onResize:i})),g("header",{class:H.value,style:$.value,onFocusin:_},a)}}}),ee=C({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:h,emit:f}){const{proxy:{$q:m}}=T(),e=S(R,q);if(e===q)return console.error("QFooter needs to be child of QLayout"),q;const r=V(parseInt(t.heightHint,10)),l=V(!0),p=V(U.value===!0||e.isContainer.value===!0?0:window.innerHeight),b=n(()=>t.reveal===!0||e.view.value.indexOf("F")>-1||m.platform.is.ios&&e.isContainer.value===!0),z=n(()=>e.isContainer.value===!0?e.containerHeight.value:p.value),B=n(()=>{if(t.modelValue!==!0)return 0;if(b.value===!0)return l.value===!0?r.value:0;const o=e.scroll.value.position+z.value+r.value-e.height.value;return o>0?o:0}),H=n(()=>t.modelValue!==!0||b.value===!0&&l.value!==!0),$=n(()=>t.modelValue===!0&&H.value===!0&&t.reveal===!0),s=n(()=>"q-footer q-layout__section--marginal "+(b.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(H.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(b.value!==!0?" hidden":""):"")),y=n(()=>{const o=e.rows.value.bottom,c={};return o[0]==="l"&&e.left.space===!0&&(c[m.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),o[2]==="r"&&e.right.space===!0&&(c[m.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),c});function i(o,c){e.update("footer",o,c)}function _(o,c){o.value!==c&&(o.value=c)}function k({height:o}){_(r,o),i("size",o)}function a(){if(t.reveal!==!0)return;const{direction:o,position:c,inflectionPoint:I}=e.scroll.value;_(l,o==="up"||c-I<100||e.height.value-z.value-c-r.value<300)}function v(o){$.value===!0&&_(l,!0),f("focusin",o)}d(()=>t.modelValue,o=>{i("space",o),_(l,!0),e.animate()}),d(B,o=>{i("offset",o)}),d(()=>t.reveal,o=>{o===!1&&_(l,t.modelValue)}),d(l,o=>{e.animate(),f("reveal",o)}),d([r,e.scroll,e.height],a),d(()=>m.screen.height,o=>{e.isContainer.value!==!0&&_(p,o)});const L={};return e.instances.footer=L,t.modelValue===!0&&i("size",r.value),i("space",t.modelValue),i("offset",B.value),O(()=>{e.instances.footer===L&&(e.instances.footer=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const o=j(h.default,[g(N,{debounce:0,onResize:k})]);return t.elevated===!0&&o.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g("footer",{class:s.value,style:y.value,onFocusin:v},o)}}});const te=A({name:"MainLayout",components:{},props:{page:{type:String}},setup(){return{}}}),ae={class:"q-ma-md"},oe={class:"row justify-evenly"};function le(t,h,f,m,e,r){const l=G("router-view");return D(),E(J,{view:"lHh Lpr lFf"},{default:w(()=>[u(Z,{class:"text-white bg-transparent"},{default:w(()=>[u(Y,null,{default:w(()=>[u(X,{class:"q-ma-lg"},{default:w(()=>[u(M,{name:"arrow_back_ios",size:"xl"})]),_:1}),x("div",ae,[u(Q,{icon:"settings",unelevated:"",size:"lg","text-color":"white",to:{name:"configuracoes"}})])]),_:1})]),_:1}),u(W,null,{default:w(()=>[u(l)]),_:1}),u(ee,{class:"bg-white text-black q-py-md"},{default:w(()=>[x("div",oe,[x("div",null,[u(Q,{icon:"account_box",unelevated:"",size:"lg","text-color":"black",to:{name:"home"}})]),x("div",null,[u(Q,{icon:"folder",unelevated:"",size:"lg","text-color":"black",to:{name:"home"}})]),x("div",null,[u(Q,{icon:"search",unelevated:"",size:"lg","text-color":"black",to:{name:"home"}})]),x("div",null,[u(Q,{icon:"perm_identity",unelevated:"",size:"lg","text-color":"black",to:{name:"perfil"}})])])]),_:1})]),_:1})}var fe=K(te,[["render",le]]);export{fe as default};