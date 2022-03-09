import{d as z,f as L,r as i,a3 as V,a4 as $,a5 as T,a6 as H,x as K,y as M,G as O,a7 as P,a8 as Z,z as q,B as J,I as Q,H as W,o as h,A as F,w as e,j as t,a as r,t as c,u as l,a9 as X,k as m,c as Y,l as ee,F as te,aa as S,E as le}from"./vendor.ad3f0798.js";import{_ as k}from"./CopyButton.f4b75276.js";/* empty css                  */import{_ as ae,u as oe}from"./index.af750cf4.js";const se={class:"title"},ne={class:"card-header"},ue=m("asoul.info/"),re={class:"card-header"},ce=z({setup(ie){const w=oe(),{t:n}=L({messages:{zh:{title:"\u77ED\u94FE",generate:"\u751F\u6210\u77ED\u94FE",submit:"\u63D0\u4EA4",url_input:"\u8F93\u5165\u94FE\u63A5",slug_input:"\u53EF\u4EE5\u7559\u7A7A",createSuccess:"\u77ED\u94FE\u521B\u5EFA\u6210\u529F",example:"\u793A\u4F8B",go:"\u8DF3\u8F6C"},en:{title:"Shorty",generate:"Generate short link",submit:"Submit",url_input:"Enter link",slug_input:"Can be empty",createSuccess:"Short link created successfully",example:"Example",go:"Go"}}}),d=i(""),o=i(""),p=i(!1),_=i("https://"),A=V(()=>!(/^https?:\/\/.{3,}/.test(_.value+d.value)&&(!o.value.length||/^[a-zA-Z0-9]{3,}$/.test(o.value))));function B(){p.value=!0,fetch("https://shorty.asoul.info/create",{method:"post",body:new URLSearchParams({url:_.value+d.value,slug:o.value}),mode:"cors"}).then(u=>u.json()).then(u=>{if(p.value=!1,u.message){S({message:u.message,type:"error"});return}o.value=u.slug,le({title:n("createSuccess"),message:"Url: asoul.info/"+o.value,position:"bottom-right",onClick:()=>{window.open("http://asoul.info/"+o.value)}})}).catch(u=>{p.value=!1,S({message:u.message,type:"error"})})}const g=Reflect.ownKeys(w.fans),f=i(g[0]),v=V(()=>"asoul.info/"+f.value);return(u,s)=>{const E=$,C=T,b=H,U=K,D=M,x=O,G=P,R=Z,j=q,I=J,y=Q,N=W;return h(),F(y,{justify:"center"},{default:e(()=>[t(N,{md:17,sm:19,xs:24},{default:e(()=>[r("div",se,[r("span",null,c(l(n)("title")),1)]),t(x,{class:"info-box",shadow:"hover"},{header:e(()=>[r("div",ne,[r("span",null,c(l(n)("generate")),1),t(k,{content:"asoul.info/"+o.value,disabled:o.value.length==0},null,8,["content","disabled"])])]),default:e(()=>[t(D,{class:"generate-box",direction:"vertical"},{default:e(()=>[t(b,{modelValue:d.value,"onUpdate:modelValue":s[1]||(s[1]=a=>d.value=a),placeholder:l(n)("url_input"),"suffix-icon":l(X),clearable:""},{prepend:e(()=>[t(C,{class:"prefix-select",modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=a=>_.value=a),placeholder:"Select"},{default:e(()=>[t(E,{label:"https://",value:"https://"}),t(E,{label:"http://",value:"http://"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue","placeholder","suffix-icon"]),t(b,{modelValue:o.value,"onUpdate:modelValue":s[2]||(s[2]=a=>o.value=a),placeholder:l(n)("slug_input"),minlength:"3",maxlength:"9","show-word-limit":"",clearable:""},{prepend:e(()=>[ue]),_:1},8,["modelValue","placeholder"]),t(U,{onClick:s[3]||(s[3]=a=>B()),loading:p.value,disabled:l(A),type:"primary",round:""},{default:e(()=>[m(c(l(n)("submit")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),t(x,{class:"info-box",shadow:"hover"},{header:e(()=>[r("div",re,[r("span",null,c(l(n)("example")),1),t(k,{content:l(v)},null,8,["content"])])]),default:e(()=>[t(y,{justify:"space-around"},{default:e(()=>[t(R,{class:"radio-box",modelValue:f.value,"onUpdate:modelValue":s[4]||(s[4]=a=>f.value=a)},{default:e(()=>[(h(!0),Y(te,null,ee(l(g),a=>(h(),F(G,{label:a},{default:e(()=>[m(c(a),1)]),_:2},1032,["label"]))),256))]),_:1},8,["modelValue"]),t(I,{content:l(v),placement:"top"},{default:e(()=>[t(j,{href:"http://"+l(v),underline:!1,target:"_blank",type:"primary"},{default:e(()=>[m(c(l(n)("go")),1)]),_:1},8,["href"])]),_:1},8,["content"])]),_:1})]),_:1})]),_:1})]),_:1})}}});var fe=ae(ce,[["__scopeId","data-v-3066916a"]]);export{fe as default};
