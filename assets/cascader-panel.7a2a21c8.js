var $e=Object.defineProperty,we=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var oe=(e,n,a)=>n in e?$e(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,j=(e,n)=>{for(var a in n||(n={}))Se.call(n,a)&&oe(e,a,n[a]);if(le)for(var a of le(n))Ve.call(n,a)&&oe(e,a,n[a]);return e},ie=(e,n)=>we(e,Le(n));import{E as Me,i as R,s as De}from"./scrollbar.dab498dd.js";import{q as U,av as xe,I as y,Q as V,O as ke,x as Pe,aw as Te,D as ye,ax as Ne,ay as He,az as Ce,A as C,_ as ee,G as _,T as O,J as H,X as de,K as F,s as K,as as ne,V as be,aA as Ie,aB as Ae,y as z,aC as Oe,au as Ee,at as ze,R as ce,aD as Be,aE as W,a3 as re,aF as Fe,aG as ue,N as Ke,aH as qe,U as he,aI as pe,a1 as Re,a8 as Ue,d as X,aJ as Ze,o as je,aK as fe,aL as Ge,n as Je,i as Xe,E as T,aM as Q,aN as Qe,aO as ve}from"./index.75df098d.js";const We=U({name:"Check"}),Ye={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},en=ke("path",{fill:"currentColor",d:"M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z"},null,-1),nn=[en];function an(e,n,a,t,s,o){return y(),V("svg",Ye,nn)}var tn=xe(We,[["render",an]]),sn=U({name:"NodeContent",render(){const{node:e,panel:n}=this.$parent,{data:a,label:t}=e,{renderLabelFn:s}=n;return Pe("span",{class:"el-cascader-node__label"},s?s({node:e,data:a}):t)}});const ae=Symbol(),ln=U({name:"ElCascaderNode",components:{ElCheckbox:Te,ElRadio:Me,NodeContent:sn,ElIcon:ye,Check:tn,Loading:Ne,ArrowRight:He},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:n}){const a=Ce(ae),t=C(()=>a.isHoverMenu),s=C(()=>a.config.multiple),o=C(()=>a.config.checkStrictly),c=C(()=>{var h;return(h=a.checkedNodes[0])==null?void 0:h.uid}),i=C(()=>e.node.isDisabled),u=C(()=>e.node.isLeaf),f=C(()=>o.value&&!u.value||!i.value),m=C(()=>M(a.expandingNode)),k=C(()=>o.value&&a.checkedNodes.some(M)),M=h=>{var E;const{level:P,uid:J}=e.node;return((E=h==null?void 0:h.pathNodes[P-1])==null?void 0:E.uid)===J},N=()=>{m.value||a.expandNode(e.node)},I=h=>{const{node:E}=e;h!==E.checked&&a.handleCheckChange(E,h)},$=()=>{a.lazyLoad(e.node,()=>{u.value||N()})},D=h=>{!t.value||(x(),!u.value&&n("expand",h))},x=()=>{const{node:h}=e;!f.value||h.loading||(h.loaded?N():$())},A=()=>{t.value&&!u.value||(u.value&&!i.value&&!o.value&&!s.value?w(!0):x())},B=h=>{o.value?(I(h),e.node.loaded&&N()):w(h)},w=h=>{e.node.loaded?(I(h),!o.value&&N()):$()};return{panel:a,isHoverMenu:t,multiple:s,checkStrictly:o,checkedNodeId:c,isDisabled:i,isLeaf:u,expandable:f,inExpandingPath:m,inCheckedPath:k,handleHoverExpand:D,handleExpand:x,handleClick:A,handleCheck:w,handleSelectCheck:B}}}),on=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],dn=ke("span",null,null,-1);function cn(e,n,a,t,s,o){const c=_("el-checkbox"),i=_("el-radio"),u=_("check"),f=_("el-icon"),m=_("node-content"),k=_("loading"),M=_("arrow-right");return y(),V("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:be(["el-cascader-node",e.checkStrictly&&"is-selectable",e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path",e.node.checked&&"is-active",!e.expandable&&"is-disabled"]),onMouseenter:n[2]||(n[2]=(...N)=>e.handleHoverExpand&&e.handleHoverExpand(...N)),onFocus:n[3]||(n[3]=(...N)=>e.handleHoverExpand&&e.handleHoverExpand(...N)),onClick:n[4]||(n[4]=(...N)=>e.handleClick&&e.handleClick(...N))},[O(" prefix "),e.multiple?(y(),H(c,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:n[0]||(n[0]=de(()=>{},["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(y(),H(i,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:n[1]||(n[1]=de(()=>{},["stop"]))},{default:F(()=>[O(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),dn]),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(y(),H(f,{key:2,class:"el-cascader-node__prefix"},{default:F(()=>[K(u)]),_:1})):O("v-if",!0),O(" content "),K(m),O(" postfix "),e.isLeaf?O("v-if",!0):(y(),V(ne,{key:3},[e.node.loading?(y(),H(f,{key:0,class:"is-loading el-cascader-node__postfix"},{default:F(()=>[K(k)]),_:1})):(y(),H(f,{key:1,class:"arrow-right el-cascader-node__postfix"},{default:F(()=>[K(M)]),_:1}))],2112))],42,on)}var rn=ee(ln,[["render",cn]]);const un=U({name:"ElCascaderMenu",components:{Loading:Ne,ElIcon:ye,ElScrollbar:Ie,ElCascaderNode:rn},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const n=Be(),{t:a}=Ae(),t=Oe();let s=null,o=null;const c=Ce(ae),i=z(null),u=C(()=>!e.nodes.length),f=C(()=>!c.initialLoaded),m=C(()=>`cascader-menu-${t}-${e.index}`),k=$=>{s=$.target},M=$=>{if(!(!c.isHoverMenu||!s||!i.value))if(s.contains($.target)){N();const D=n.vnode.el,{left:x}=D.getBoundingClientRect(),{offsetWidth:A,offsetHeight:B}=D,w=$.clientX-x,h=s.offsetTop,E=h+s.offsetHeight;i.value.innerHTML=`
          <path style="pointer-events: auto;" fill="transparent" d="M${w} ${h} L${A} 0 V${h} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${w} ${E} L${A} ${B} V${E} Z" />
        `}else o||(o=window.setTimeout(I,c.config.hoverThreshold))},N=()=>{!o||(clearTimeout(o),o=null)},I=()=>{!i.value||(i.value.innerHTML="",N())};return{panel:c,hoverZone:i,isEmpty:u,isLoading:f,menuId:m,t:a,handleExpand:k,handleMouseMove:M,clearHoverZone:I}}}),hn={key:0,class:"el-cascader-menu__empty-text"},pn={key:1,class:"el-cascader-menu__empty-text"},fn={key:2,ref:"hoverZone",class:"el-cascader-menu__hover-zone"};function vn(e,n,a,t,s,o){const c=_("el-cascader-node"),i=_("loading"),u=_("el-icon"),f=_("el-scrollbar");return y(),H(f,{key:e.menuId,tag:"ul",role:"menu",class:"el-cascader-menu","wrap-class":"el-cascader-menu__wrap","view-class":["el-cascader-menu__list",e.isEmpty&&"is-empty"],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:F(()=>{var m;return[(y(!0),V(ne,null,Ee(e.nodes,k=>(y(),H(c,{key:k.uid,node:k,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"]))),128)),e.isLoading?(y(),V("div",hn,[K(u,{size:"14",class:"is-loading"},{default:F(()=>[K(i)]),_:1}),ze(" "+ce(e.t("el.cascader.loading")),1)])):e.isEmpty?(y(),V("div",pn,ce(e.t("el.cascader.noData")),1)):(m=e.panel)!=null&&m.isHoverMenu?(y(),V("svg",fn,null,512)):O("v-if",!0)]}),_:1},8,["view-class","onMousemove","onMouseleave"])}var mn=ee(un,[["render",vn]]),te=(e=>(e.CLICK="click",e.HOVER="hover",e))(te||{});let gn=0;const kn=e=>{const n=[e];let{parent:a}=e;for(;a;)n.unshift(a),a=a.parent;return n};class q{constructor(n,a,t,s=!1){this.data=n,this.config=a,this.parent=t,this.root=s,this.uid=gn++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:o,label:c,children:i}=a,u=n[i],f=kn(this);this.level=s?0:t?t.level+1:1,this.value=n[o],this.label=n[c],this.pathNodes=f,this.pathValues=f.map(m=>m.value),this.pathLabels=f.map(m=>m.label),this.childrenData=u,this.children=(u||[]).map(m=>new q(m,a,this)),this.loaded=!a.lazy||this.isLeaf||!W(u)}get isDisabled(){const{data:n,parent:a,config:t}=this,{disabled:s,checkStrictly:o}=t;return(re(s)?s(n,this):!!n[s])||!o&&(a==null?void 0:a.isDisabled)}get isLeaf(){const{data:n,config:a,childrenData:t,loaded:s}=this,{lazy:o,leaf:c}=a,i=re(c)?c(n,this):n[c];return Fe(i)?o&&!s?!1:!(Array.isArray(t)&&t.length):!!i}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(n){const{childrenData:a,children:t}=this,s=new q(n,this.config,this);return Array.isArray(a)?a.push(n):this.childrenData=[n],t.push(s),s}calcText(n,a){const t=n?this.pathLabels.join(a):this.label;return this.text=t,t}broadcast(n,...a){const t=`onParent${ue(n)}`;this.children.forEach(s=>{s&&(s.broadcast(n,...a),s[t]&&s[t](...a))})}emit(n,...a){const{parent:t}=this,s=`onChild${ue(n)}`;t&&(t[s]&&t[s](...a),t.emit(n,...a))}onParentCheck(n){this.isDisabled||this.setCheckState(n)}onChildCheck(){const{children:n}=this,a=n.filter(s=>!s.isDisabled),t=a.length?a.every(s=>s.checked):!1;this.setCheckState(t)}setCheckState(n){const a=this.children.length,t=this.children.reduce((s,o)=>{const c=o.checked?1:o.indeterminate?.5:0;return s+c},0);this.checked=this.loaded&&this.children.every(s=>s.loaded&&s.checked)&&n,this.indeterminate=this.loaded&&t!==a&&t>0}doCheck(n){if(this.checked===n)return;const{checkStrictly:a,multiple:t}=this.config;a||!t?this.checked=n:(this.broadcast("check",n),this.setCheckState(n),this.emit("check"))}}const Y=(e,n)=>e.reduce((a,t)=>(t.isLeaf?a.push(t):(!n&&a.push(t),a=a.concat(Y(t.children,n))),a),[]);class me{constructor(n,a){this.config=a;const t=(n||[]).map(s=>new q(s,this.config));this.nodes=t,this.allNodes=Y(t,!1),this.leafNodes=Y(t,!0)}getNodes(){return this.nodes}getFlattedNodes(n){return n?this.leafNodes:this.allNodes}appendNode(n,a){const t=a?a.appendChild(n):new q(n,this.config);a||this.nodes.push(t),this.allNodes.push(t),t.isLeaf&&this.leafNodes.push(t)}appendNodes(n,a){n.forEach(t=>this.appendNode(t,a))}getNodeByValue(n,a=!1){return!n&&n!==0?null:this.getFlattedNodes(a).filter(s=>R(s.value,n)||R(s.pathValues,n))[0]||null}getSameNode(n){return n&&this.getFlattedNodes(!1).filter(({value:t,level:s})=>R(n.value,t)&&n.level===s)[0]||null}}const yn={modelValue:[Number,String,Array],options:{type:Array,default:()=>[]},props:{type:Object,default:()=>({})}},Nn={expandTrigger:te.CLICK,multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:Ke,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},Cn=e=>C(()=>j(j({},Nn),e.props)),ge=e=>{if(!e)return 0;const n=e.id.split("-");return Number(n[n.length-2])},bn=e=>{if(!e)return;const n=e.querySelector("input");n?n.click():qe(e)&&e.click()},En=(e,n)=>{const a=n.slice(0),t=a.map(o=>o.uid),s=e.reduce((o,c)=>{const i=t.indexOf(c.uid);return i>-1&&(o.push(c),a.splice(i,1),t.splice(i,1)),o},[]);return s.push(...a),s},_n=U({name:"ElCascaderPanel",components:{ElCascaderMenu:mn},props:ie(j({},yn),{border:{type:Boolean,default:!0},renderLabel:Function}),emits:[he,pe,"close","expand-change"],setup(e,{emit:n,slots:a}){let t=!1;const s=Cn(e);let o=null;const c=z(!0),i=z([]),u=z(null),f=z([]),m=z(null),k=z([]),M=C(()=>s.value.expandTrigger===te.HOVER),N=C(()=>e.renderLabel||a.default),I=()=>{const{options:l}=e,d=s.value;t=!1,o=new me(l,d),f.value=[o.getNodes()],d.lazy&&W(e.options)?(c.value=!1,$(void 0,r=>{r&&(o=new me(r,d),f.value=[o.getNodes()]),c.value=!0,P(!1,!0)})):P(!1,!0)},$=(l,d)=>{const r=s.value;l=l||new q({},r,void 0,!0),l.loading=!0;const p=v=>{const g=l,L=g.root?null:g;v&&(o==null||o.appendNodes(v,L)),g.loading=!1,g.loaded=!0,g.childrenData=g.childrenData||[],d&&d(v)};r.lazyLoad(l,p)},D=(l,d)=>{var r;const{level:p}=l,v=f.value.slice(0,p);let g;l.isLeaf?g=l.pathNodes[p-2]:(g=l,v.push(l.children)),((r=m.value)==null?void 0:r.uid)!==(g==null?void 0:g.uid)&&(m.value=l,f.value=v,!d&&n("expand-change",(l==null?void 0:l.pathValues)||[]))},x=(l,d,r=!0)=>{const{checkStrictly:p,multiple:v}=s.value,g=k.value[0];t=!0,!v&&(g==null||g.doCheck(!1)),l.doCheck(d),E(),r&&!v&&!p&&n("close"),!r&&!v&&!p&&A(l)},A=l=>{!l||(l=l.parent,A(l),l&&D(l))},B=l=>o==null?void 0:o.getFlattedNodes(l),w=l=>{var d;return(d=B(l))==null?void 0:d.filter(r=>r.checked!==!1)},h=()=>{k.value.forEach(l=>l.doCheck(!1)),E()},E=()=>{var l;const{checkStrictly:d,multiple:r}=s.value,p=k.value,v=w(!d),g=En(p,v),L=g.map(b=>b.valueByOption);k.value=g,u.value=r?L:(l=L[0])!=null?l:null},P=(l=!1,d=!1)=>{const{modelValue:r}=e,{lazy:p,multiple:v,checkStrictly:g}=s.value,L=!g;if(!(!c.value||t||!d&&R(r,u.value)))if(p&&!l){const Z=fe(Ge(ve(r))).map(S=>o==null?void 0:o.getNodeByValue(S)).filter(S=>!!S&&!S.loaded&&!S.loading);Z.length?Z.forEach(S=>{$(S,()=>P(!1,d))}):P(!0,d)}else{const b=v?ve(r):[r],Z=fe(b.map(S=>o==null?void 0:o.getNodeByValue(S,L)));J(Z,!1),u.value=r}},J=(l,d=!0)=>{const{checkStrictly:r}=s.value,p=k.value,v=l.filter(b=>!!b&&(r||b.isLeaf)),g=o==null?void 0:o.getSameNode(m.value),L=d&&g||v[0];L?L.pathNodes.forEach(b=>D(b,!0)):m.value=null,p.forEach(b=>b.doCheck(!1)),v.forEach(b=>b.doCheck(!0)),k.value=v,Je(se)},se=()=>{!Xe||i.value.forEach(l=>{const d=l==null?void 0:l.$el;if(d){const r=d.querySelector(".el-scrollbar__wrap"),p=d.querySelector(".el-cascader-node.is-active")||d.querySelector(".el-cascader-node.in-active-path");De(r,p)}})},_e=l=>{const d=l.target,{code:r}=l;switch(r){case T.up:case T.down:{l.preventDefault();const p=r===T.up?-1:1;Q(Qe(d,p,'.el-cascader-node[tabindex="-1"]'));break}case T.left:{l.preventDefault();const p=i.value[ge(d)-1],v=p==null?void 0:p.$el.querySelector('.el-cascader-node[aria-expanded="true"]');Q(v);break}case T.right:{l.preventDefault();const p=i.value[ge(d)+1],v=p==null?void 0:p.$el.querySelector('.el-cascader-node[tabindex="-1"]');Q(v);break}case T.enter:bn(d);break;case T.esc:case T.tab:n("close");break}};return Re(ae,Ue({config:s,expandingNode:m,checkedNodes:k,isHoverMenu:M,initialLoaded:c,renderLabelFn:N,lazyLoad:$,expandNode:D,handleCheckChange:x})),X([s,()=>e.options],I,{deep:!0,immediate:!0}),X(()=>e.modelValue,()=>{t=!1,P()}),X(u,l=>{R(l,e.modelValue)||(n(he,l),n(pe,l))}),Ze(()=>i.value=[]),je(()=>!W(e.modelValue)&&P()),{menuList:i,menus:f,checkedNodes:k,handleKeyDown:_e,handleCheckChange:x,getFlattedNodes:B,getCheckedNodes:w,clearCheckedNodes:h,calculateCheckedValue:E,scrollToExpandingNode:se}}});function $n(e,n,a,t,s,o){const c=_("el-cascader-menu");return y(),V("div",{class:be(["el-cascader-panel",e.border&&"is-bordered"]),onKeydown:n[0]||(n[0]=(...i)=>e.handleKeyDown&&e.handleKeyDown(...i))},[(y(!0),V(ne,null,Ee(e.menus,(i,u)=>(y(),H(c,{key:u,ref_for:!0,ref:f=>e.menuList[u]=f,index:u,nodes:i},null,8,["index","nodes"]))),128))],34)}var G=ee(_n,[["render",$n]]);G.install=e=>{e.component(G.name,G)};const wn=G,Mn=wn;export{yn as C,Mn as E,wn as _,tn as c};
