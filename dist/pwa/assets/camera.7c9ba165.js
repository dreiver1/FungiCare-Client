import{Q as d}from"./QBtn.bcc10a31.js";import{Q as m,a as c}from"./QPage.b5184e3d.js";import{_ as u,d as h,o as p,c as g,w as s,C as r,a as i}from"./index.2c93a13b.js";import"./use-router-link.4c8f73aa.js";import"./dom.7f454915.js";const f=h({name:"IndexPage",data(){return{enableCamera:!1,imageCapture:null,track:null}},mounted(){navigator.mediaDevices.getUserMedia&&(this.enableCamera=!0,this.useCamera())},methods:{useCamera(){navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{this.cameraStart=!0,this.$refs.videoplay.srcObject=e,this.track=e.getVideoTracks()[0],this.imageCapture=new ImageCapture(this.track)})},takePhoto(){this.imageCapture.takePhoto().then(e=>{createImageBitmap(e);const o=new FileReader;o.readAsDataURL(e),o.onloadend=()=>{const a=document.querySelector("video"),t=document.querySelector("canvas");t.width=a.videoWidth,t.height=a.videoHeight,t.getContext("2d").drawImage(a,0,0,t.width,t.height);const n=t.toDataURL("image/png");localStorage.setItem("imageData",n),this.$router.push("/resultado")}}).catch(e=>console.log(e))}}}),_={autoplay:"",ref:"videoplay",style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","object-fit":"cover"}},v={class:"canvas",style:{display:"none"}},C={ref:"imgTakePhoto"};function y(e,o,a,t,l,n){return p(),g(m,{class:"flex justify-center col-12"},{default:s(()=>[r("video",_,null,512),i(c,{class:"self-end"},{default:s(()=>[i(c,{class:"column justify-between col-12"},{default:s(()=>[i(d,{label:"Tirar Foto",color:"primary",icon:"camera",onClick:e.takePhoto},null,8,["onClick"])]),_:1})]),_:1}),r("div",v,[r("canvas",C,null,512)])]),_:1})}var $=u(f,[["render",y]]);export{$ as default};