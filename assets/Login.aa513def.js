import{a as B,g as F}from"./auth.73fdfa45.js";import{_ as S,u as I,m as L,a as N,r as m,b as U,o as f,c as D,d as a,w as t,V as E,F as G,e as M,f as R,g as j,h as q,i as z,j as A,k as y,t as h,l as w,n as W,p as H,q as x,s as J,v as K,x as p}from"./index.06b7ce89.js";import{V as O}from"./VLayout.b66aa045.js";import{V as P}from"./VTextField.59df4de6.js";const Q={setup(){const V=I(),{setToken:o,setUser:_,initFollow:e}=L(),{follows:u}=N();console.log(u);const s=m(void 0),l=U({show:!1,text:void 0}),n=m(!1),i=m(void 0);let v="";async function g(){if(n.value=!0,s.value)try{v=await B({email:s.value}),i.value="\u8BA4\u8BC1\u4E2D...... \u8BF7\u6CE8\u610F\u67E5\u6536\u90AE\u4EF6\u8BA4\u8BC1",k(),n.value=!1}catch{l.text="\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5!",l.show=!0,n.value=!1}else l.text="\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1\u5730\u5740",l.show=!0,n.value=!1}function k(){async function d(){let c=await F({key:v});clearInterval(r),i.value="\u8BA4\u8BC1\u6210\u529F\uFF0C\u5373\u5C06\u8DF3\u8F6C\u9996\u9875",T(c,()=>{setTimeout(()=>{V.push("/")},3e3)})}let r=setInterval(d,5e3);setTimeout(()=>{clearInterval(r),i.value="\u8BA4\u8BC1\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",setTimeout(()=>{i.value=void 0},3e3)},6e4)}async function T(d,r){o(d),_({username:s.value}),u.value.forEach(async C=>{try{await J({id:C.id})}catch(b){console.error(b)}});let c=await K();e(c),r()}return{email:s,tip:l,loading:n,authText:i,login:g}}},X=p("div",{style:{display:"flex","align-items":"end"}},[p("div",{class:"mr-6"},"WebFollow"),p("small",null,"\u767B\u9646")],-1),Y=x("\u8BF7\u767B\u9646"),Z=x(" \u767B\u9646 ");function $(V,o,_,e,u,s){return f(),D(G,null,[a(O,null,{default:t(()=>[a(M,{color:"indigo",density:"prominent"},{default:t(()=>[a(R,{class:"mx-auto","max-width":"1024px"},{default:t(()=>[a(j,{class:"mt-6"},{default:t(()=>[X]),_:1})]),_:1})]),_:1}),a(q,null,{default:t(()=>[a(z,null,{default:t(()=>[a(A,{"max-width":"480px",class:"mx-auto",style:{"margin-top":"-36px","z-index":"10000"}},{default:t(()=>[e.authText?(f(),y(w,{key:0,textContent:h(e.authText),class:"my-12 text-align"},null,8,["textContent"])):(f(),y(w,{key:1},{default:t(()=>[a(W,{class:"mt-3"},{default:t(()=>[Y]),_:1}),a(P,{"hide-details":"auto",label:"\u90AE\u7BB1\u5730\u5740",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1\u5730\u5740",type:"email",class:"my-4",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=l=>e.email=l)},null,8,["modelValue"]),a(H,{block:"",color:"indigo",loading:e.loading,onClick:e.login},{default:t(()=>[Z]),_:1},8,["loading","onClick"])]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1}),a(E,{modelValue:e.tip.show,"onUpdate:modelValue":o[1]||(o[1]=l=>e.tip.show=l)},{default:t(()=>[x(h(e.tip.text),1)]),_:1},8,["modelValue"])],64)}const oe=S(Q,[["render",$]]);export{oe as default};
