var F=Object.defineProperty,N=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&b(e,n,t[n]);if(_)for(var n of _(t))C.call(t,n)&&b(e,n,t[n]);return e},g=(e,t)=>N(e,V(t));import{r as h,o as D,t as y,a as f,c as v,w as c,b as $,d as i,e as r,f as k,g as O,F as P,h as R,i as B}from"./vendor.1c7cb6e8.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};E();var w=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};function S(e){$.get("/get").then(t=>{console.log(t.data),e.tableData=t.data.data})}const U={setup(){const e=h({tableData:[]});return D(()=>{S(e)}),d({},y(e))}};function I(e,t,n,s,o,a){const l=i("el-table-column"),u=i("el-table");return f(),v(u,{data:e.tableData,style:{width:"100%"}},{default:c(()=>[r(l,{prop:"date",label:"Date",width:"180"}),r(l,{prop:"name",label:"Name",width:"180"}),r(l,{prop:"address",label:"Address"})]),_:1},8,["data"])}var M=w(U,[["render",I]]);function Q(e){console.log(e.name)}const T={setup(){const e=h({form:{name:"zhangsan"}});return g(d({},y(e)),{onSubmit:Q})}},q=k("Create"),z=k("Cancel");function K(e,t,n,s,o,a){const l=i("el-input"),u=i("el-form-item"),m=i("el-button"),x=i("el-form");return f(),v(x,{ref:"formRef",model:e.form,"label-width":"120px"},{default:c(()=>[r(u,{label:"Activity name"},{default:c(()=>[r(l,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=p=>e.form.name=p)},null,8,["modelValue"])]),_:1}),r(u,null,{default:c(()=>[r(m,{type:"primary",onClick:t[1]||(t[1]=p=>s.onSubmit(e.form))},{default:c(()=>[q]),_:1}),r(m,null,{default:c(()=>[z]),_:1})]),_:1})]),_:1},8,["model"])}var j=w(T,[["render",K]]);const G={setup(e){return(t,n)=>(f(),O(P,null,[r(j),r(M)],64))}};$.defaults.baseURL={}.VITE_APP_URL;const L=R(G);L.use(B);L.mount("#app");
