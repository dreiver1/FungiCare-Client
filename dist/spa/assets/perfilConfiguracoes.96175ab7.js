import{a as S,b,Q as c,R as d}from"./Ripple.c89757c9.js";import{c as p,f as C}from"./render.8b5823bc.js";import{f as y,h as m,_ as Q,d as q,o as i,c as n,w as e,C as f,a,V as o,A as u,W as z}from"./index.fc438c0c.js";import{Q as h,a as s,b as l}from"./QList.253d28db.js";import{Q as k,a as r}from"./QPage.df9214f8.js";import"./dom.ac998a7b.js";import"./use-router-link.7b7e7673.js";var A=p({name:"QAvatar",props:{...S,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:_}){const w=b(t),g=y(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),x=y(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const v=t.icon!==void 0?[m(c,{name:t.icon})]:void 0;return m("div",{class:g.value,style:w.value},[m("div",{class:"q-avatar__content row flex-center overflow-hidden",style:x.value},C(_.default,v))])}}});const $=z(),B=q({name:"minhaConta",data(){return{goTo:_=>{$.push({name:_})}}}}),I={class:"flex flex-center"},V={class:"row col-12"},j={class:"row flex-center"},L={class:"row flex-center"},N={class:"row flex-center q-mb-lx"};function R(t,_,w,g,x,v){return i(),n(k,{class:"q-col-gutter-y-lg"},{default:e(()=>[f("div",I,[f("div",V,[a(A,{size:"100px","font-size":"52px",color:"white","text-color":"primary",icon:"directions"})])]),f("div",j,[a(r,{class:"col-10 bg-white column justify-center items-center lista",style:{"min-height":"25%","max-height":"35%"}},{default:e(()=>[a(h,{separator:"",class:"col-8",style:{width:"100%"}},{default:e(()=>[a(s,{header:""},{default:e(()=>[o("Login")]),_:1}),u((i(),n(r,{clickable:""},{default:e(()=>[a(l,null,{default:e(()=>[a(s,null,{default:e(()=>[o("Username: Ci**caso24")]),_:1})]),_:1}),a(l,{side:""},{default:e(()=>[a(c,{name:"arrow_forward_ios"})]),_:1})]),_:1})),[[d]]),u((i(),n(r,{clickable:""},{default:e(()=>[a(l,null,{default:e(()=>[a(s,{class:"text-secondary"},{default:e(()=>[o("Alterar nome de usu\xE1rio")]),_:1})]),_:1}),a(l,{side:""},{default:e(()=>[a(c,{name:"arrow_forward_ios"})]),_:1})]),_:1})),[[d]])]),_:1})]),_:1})]),f("div",L,[a(r,{class:"col-10 bg-white column justify-center items-center lista",style:{"min-height":"25%","max-height":"35%"}},{default:e(()=>[a(h,{separator:"",class:"col-8",style:{width:"100%"}},{default:e(()=>[a(s,{header:""},{default:e(()=>[o("E-mail")]),_:1}),u((i(),n(r,{clickable:""},{default:e(()=>[a(l,null,{default:e(()=>[a(s,null,{default:e(()=>[o("Username: Ci*******@gmail.com")]),_:1})]),_:1}),a(l,{side:""},{default:e(()=>[a(c,{name:"arrow_forward_ios"})]),_:1})]),_:1})),[[d]]),u((i(),n(r,{clickable:""},{default:e(()=>[a(l,null,{default:e(()=>[a(s,{class:"text-secondary"},{default:e(()=>[o("Alterar e-mail")]),_:1})]),_:1}),a(l,{side:""},{default:e(()=>[a(c,{name:"arrow_forward_ios"})]),_:1})]),_:1})),[[d]])]),_:1})]),_:1})]),f("div",N,[a(r,{class:"col-10 bg-white column justify-center items-center lista",style:{"min-height":"25%","max-height":"35%"}},{default:e(()=>[a(h,{separator:"",class:"col-8",style:{width:"100%"}},{default:e(()=>[a(s,{header:""},{default:e(()=>[o("Senha")]),_:1}),u((i(),n(r,{clickable:""},{default:e(()=>[a(l,null,{default:e(()=>[a(s,{class:"text-secondary"},{default:e(()=>[o("Alterar pergunta de seguran\xE7a")]),_:1})]),_:1}),a(l,{side:""},{default:e(()=>[a(c,{name:"arrow_forward_ios"})]),_:1})]),_:1})),[[d]]),u((i(),n(r,{clickable:""},{default:e(()=>[a(l,null,{default:e(()=>[a(s,{class:"text-secondary"},{default:e(()=>[o("Alterar senha")]),_:1})]),_:1}),a(l,{side:""},{default:e(()=>[a(c,{name:"arrow_forward_ios"})]),_:1})]),_:1})),[[d]])]),_:1})]),_:1})])]),_:1})}var F=Q(B,[["render",R]]);export{F as default};