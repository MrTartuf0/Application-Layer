import{J as m,ap as b,I as a,d as u,Y as S,b as $,c as I,n as w,p as P,i as C,e as x,k as f,a1 as E,r as D,N as c}from"./entry.2dcd02d7.js";import j from"./ComponentPlaygroundData.f8c9d0dd.js";import"./TabsHeader.cc019484.js";import"./ComponentPlaygroundProps.57e9c182.js";import"./ProseH4.3a9ecd69.js";import"./ProseCodeInline.50fdec88.js";import"./Badge.678a888d.js";import"./slot.49bcc73a.js";import"./node.676c5e99.js";import"./ProseP.d4f29d01.js";import"./ComponentPlaygroundSlots.vue.f3c5df9b.js";import"./ComponentPlaygroundTokens.vue.de02d38f.js";async function z(e){const n=m(e);{const{data:o}=await b(`nuxt-component-meta${n?`-${n}`:""}`,()=>$fetch(`/api/component-meta${n?`/${n}`:""}`));return a(()=>o.value)}}const B=e=>(P("data-v-cde6baee"),e=e(),C(),e),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),k=[N],V=u({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const n=a(()=>((t=s)=>t.top)()),o=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),i=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),y=a(()=>((t=s)=>`blur(${t.blur})`)()),h=a(()=>((t=s)=>{var p,d,_;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(_=t==null?void 0:t.colors)==null?void 0:_[2]} 98.48%)`})()),s=e,{$pinceau:v}=S(s,void 0,{_cCN_top:n,_eih_insetInlineStart:o,_IfB_insetInlineEnd:r,_SsE_zIndex:i,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,p)=>($(),I("div",{class:w(["ellipsis",[m(v)]])},k,2))}});const q=f(V,[["__scopeId","data-v-cde6baee"]]),A=u({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const n=a(()=>E(e.component)),o=D({...e.props}),r=await z(e.component);return{as:n,formProps:o,componentData:r}},render(e){const n=Object.entries(this.$slots).reduce((o,[r,i])=>{if(r.startsWith("component-")){const l=r.replace("component-","");o[l]=i}return o},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...n})]),c(j,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":o=>e.formProps=o})])}});const Q=f(A,[["__scopeId","data-v-51227037"]]);export{Q as default};
