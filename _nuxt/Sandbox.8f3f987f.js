import f from"./TabsHeader.cc019484.js";import{d as x,aq as g,r as n,o as h,b as r,c as l,X as S,J as d,f as y,k}from"./entry.2dcd02d7.js";const $={class:"sandbox"},w=["src"],B={key:2},C=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,p=g(),o={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${p.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${p.value}`},u=Object.keys(o).map(t=>({label:t})),c=n(-1),b=n(),s=n(""),a=n(""),_=t=>{a.value=t,s.value=e.src||o[a.value](),localStorage.setItem("docus_sandbox",t)},m=t=>{c.value=t,_(u[t].label)};return h(()=>{a.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||o[a.value](),c.value=Object.keys(o).indexOf(a.value)}),(t,I)=>{const v=f;return r(),l("div",$,[i.src?y("",!0):(r(),S(v,{key:0,ref_key:"tabs",ref:b,"active-tab-index":d(c),tabs:d(u),"onUpdate:activeTabIndex":m},null,8,["active-tab-index","tabs"])),d(s)?(r(),l("iframe",{key:1,src:d(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}});const O=k(C,[["__scopeId","data-v-601abd84"]]);export{O as default};
