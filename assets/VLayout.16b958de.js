import{h as a,ah as i,bL as y,bM as c,a9 as f,a as d}from"./index.536df348.js";function v(t){return a.post("/auth",null,{params:t})}function L(t){return a.post("/auth/login",null,{params:t})}function h(t){return a.post("/auth/approve",null,{params:t})}const V=i({name:"VLayout",props:y(),setup(t,s){let{slots:e}=s;const{layoutClasses:u,layoutStyles:l,getLayoutItem:n,items:r,layoutRef:p}=c(t);return f(()=>{var o;return d("div",{ref:p,class:u.value,style:l.value},[(o=e.default)==null?void 0:o.call(e)])}),{getLayoutItem:n,items:r}}});export{V,v as a,h as b,L as l};
