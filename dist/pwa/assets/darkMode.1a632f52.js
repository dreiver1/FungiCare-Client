import{Q as n}from"./QBtn.bcc10a31.js";import{u as s}from"./use-quasar.98ef5ed8.js";import{d,t,m as u,_ as c,o as i,c as k}from"./index.2c93a13b.js";const m=d({name:"darkMode",setup(){const a=s();var e=t(!1);let o=t("light_mode");const l=()=>{e=t(!e.value),a.dark.set(e.value),e.value==!0?o.value="dark_mode":o.value="light_mode",a.localStorage.set("darkMode",e.value)};return u(()=>{let r=a.localStorage.getItem("darkMode");e.value=r,a.dark.set(e.value),e.value==!0?o.value="dark_mode":o.value="light_mode"}),{darkMode:e,onClick:l,inputId:o}}});function p(a,e,o,l,r,v){return i(),k(n,{color:"","text-color":"black",flat:"",dense:"",size:"xl",onClick:a.onClick,icon:a.inputId},null,8,["onClick","icon"])}var M=c(m,[["render",p]]);export{M as D};
