import{d as i,$ as d,r as m,a0 as p,o as f,c as v,k as _,m as V,K as b,u as h,F as B,a as S}from"./vendor.3ad92fda.js";/* empty css                     */import{u as k}from"./index.e50b7d47.js";const x=S("div",null,"RSS\u8BA2\u9605\u5730\u5740",-1),E=i({setup(y){const l=k();let e,s;const n=d(()=>"https://rss.asoul.info/"+a.value[0]+"/"+a.value[1]),a=m(["bilibili","official"]),t=[];for(e in l.dynamics){const o=[];for(s in l.dynamics[e])o.push({value:s,label:s});t.push({value:e,label:e,children:o})}return(o,r)=>{const u=p;return f(),v(B,null,[x,_(u,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=c=>a.value=c),options:t},null,8,["modelValue"]),V(" "+b(h(n)),1)],64)}}});export{E as default};
