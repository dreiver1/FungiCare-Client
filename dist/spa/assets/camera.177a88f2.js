import{Q as l}from"./QBtn.db568181.js";import{Q as h,a as d}from"./QPage.df9214f8.js";import{_ as p,d as g,o as r,c as s,w as i,C as n,a as m}from"./index.fc438c0c.js";import"./Ripple.c89757c9.js";import"./render.8b5823bc.js";import"./dom.ac998a7b.js";import"./use-router-link.7b7e7673.js";const f=g({name:"IndexPage",data(){return{enableCamera:!1,cameraStart:!1,imageCapture:null,track:null}},mounted(){navigator.mediaDevices.getUserMedia&&(this.enableCamera=!0)},methods:{useCamera(){navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{this.cameraStart=!0,this.$refs.videoplay.srcObject=e,this.track=e.getVideoTracks()[0],this.imageCapture=new ImageCapture(this.track)})},takePhoto(){this.imageCapture.takePhoto().then(e=>{createImageBitmap(e);const o=new FileReader;o.readAsDataURL(e),o.onloadend=()=>{const t=document.querySelector("video"),a=document.querySelector("canvas");a.width=t.videoWidth,a.height=t.videoHeight,a.getContext("2d").drawImage(t,0,0,a.width,a.height);const c=a.toDataURL("image/png");localStorage.setItem("imageData",c),this.$router.push("/resultado")}}).catch(e=>console.log(e))}}}),v={autoplay:"",ref:"videoplay",style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","object-fit":"cover"}},_={class:"canvas",style:{display:"none"}},C={ref:"imgTakePhoto"};function k(e,o,t,a,u,c){return r(),s(h,{class:"flex justify-center col-12"},{default:i(()=>[n("video",v,null,512),m(d,{class:"self-end"},{default:i(()=>[m(d,{class:"column justify-between col-12"},{default:i(()=>[e.cameraStart?(r(),s(l,{key:1,label:"Tirar Foto",color:"primary",icon:"camera",onClick:e.takePhoto},null,8,["onClick"])):(r(),s(l,{key:0,label:"Acessar Camera",color:"primary",icon:"camera",disable:!e.enableCamera,onClick:e.useCamera},null,8,["disable","onClick"]))]),_:1})]),_:1}),n("div",_,[n("canvas",C,null,512)])]),_:1})}var B=p(f,[["render",k]]);export{B as default};