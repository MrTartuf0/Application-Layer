import{l as f,a2 as c,_ as v,d as g,aw as d,H as l,m as h,U as _,aq as w,a4 as y,M as r,D as C}from"./entry.zLfrHaHE.js";import{q as P,w as m,e as $,s as N,j}from"./query.Rj2DKAoW.js";import{u as T}from"./preview.2fDDFfqa.js";const D=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=P(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${$(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(N())return(await v(()=>import("./client-db.XbySMVIM.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:j(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=_();return{navigation:n}}const{data:s}=await w(`content-navigation-${c(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),Q=E;export{Q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.XbySMVIM.js","./entry.zLfrHaHE.js","./entry.Ajyc1SzI.css","./slugify.HFDkDgYK.js","./query.Rj2DKAoW.js","./preview.2fDDFfqa.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}