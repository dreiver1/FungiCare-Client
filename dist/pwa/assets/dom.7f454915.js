import{z as c,d as a,h as f,A as s,B as d}from"./index.2c93a13b.js";const h=n=>c(a(n)),m=n=>c(n);function p(n,t){return n!==void 0&&n()||t}function y(n,t){if(n!==void 0){const e=n();if(e!=null)return e.slice()}return t}function g(n,t){return n!==void 0?t.concat(n()):t}function l(n,t){return n===void 0?t:t!==void 0?t.concat(n()):n()}function S(n,t,e,r,i,u){t.key=r+i;const o=f(n,t,e);return i===!0?s(o,u()):o}function D(n,t){const e=n.style;for(const r in t)e[r]=t[r]}function k(n){if(n==null)return;if(typeof n=="string")try{return document.querySelector(n)||void 0}catch{return}const t=d(n);if(t)return t.$el||t}export{D as a,g as b,h as c,m as d,y as e,S as f,k as g,p as h,l as i};
