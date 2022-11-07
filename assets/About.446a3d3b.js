import{_ as T,S as L,r as g,o as n,c as u,a as t,w as e,V,F as c,x as w,v as d,A as C,y as D,C as r,G as f,b as m,e as y,D as h,bz as U,bA as b,g as i,B as p,P as B,bB as F,E as I,aY as z,aZ as A}from"./index.4cdd1b9e.js";import{m as N,g as R,c as E,u as G,V as W,a as M}from"./VTable.1df5ae92.js";import{V as P}from"./VSnackbar.81679a30.js";import{V as Y,c as x,b as Z,a as j}from"./VWindowItem.011b0906.js";import{b as q}from"./VTextField.3a52b878.js";const H={data(){return{tab:"\u4F18\u5148\u7EA7",items:["\u4F18\u5148\u7EA7","\u63A8\u9001\u8BBE\u7F6E"],slider:{min:0,max:20},tip:{show:!1,msg:void 0},loading:!1,btnLoading:!1,settings:{itemsLimit:0,itemsTheme:0,email:"",follows:[]}}},components:{Skeleton:L},methods:{...N(["reloadFollow"]),async initData(){this.loading=!0,await this.loadData(),this.loading=!1},async loadData(){let o=await R();o.follows.forEach(a=>a.sort_copy=a.sort),this.settings=o},async save(){this.btnLoading=!0,this.tab=="\u4F18\u5148\u7EA7"?await this.changeFollowsSort():await this.update(),this.btnLoading=!1},async changeFollowsSort(){try{let o=this.settings.follows.filter(a=>a.sort_copy!=a.sort);o.length&&(await E(o),this.tip.show=!0,this.tip.msg="\u64CD\u4F5C\u6210\u529F",this.loadData(),this.reloadFollow())}catch{this.tip.show=!0,this.tip.msg="\u64CD\u4F5C\u5931\u8D25"}},async update(){try{let o={itemsLimit:this.settings.itemsLimit,itemsTheme:this.settings.itemsTheme};await G(o),this.tip.show=!0,this.tip.msg="\u64CD\u4F5C\u6210\u529F",this.loadData()}catch{this.tip.show=!0,this.tip.msg="\u64CD\u4F5C\u5931\u8D25"}}},mounted(){this.initData()}},J=o=>(z("data-v-74b5eacf"),o=o(),A(),o),K={class:"mt-6 mx-auto",style:{"max-width":"1210px"}},O=i("far fa-paper-plane"),Q=i(" RSS2Newsletter"),X=i("\u5B9A\u5236\u5C5E\u4E8E\u4F60\u7684\u4E13\u5C5E\u4FE1\u606F \u5C11\u5373\u662F\u591A "),$={class:"flex pr-4"},tt=i("\u7BA1\u7406\u8BA2\u9605\u6E90\u4F18\u5148\u7EA7(\u70B9\u51FB\u4F18\u5148\u7EA7\u7F16\u8F91\u5373\u53EF) "),et=i("\u6DFB\u52A0\u8BA2\u9605\u6E90"),st=J(()=>d("thead",null,[d("tr",null,[d("th",{class:"text-left"},"\u540D\u79F0"),d("th",{class:"text-left"},"\u4F18\u5148\u7EA7")])],-1)),lt=["onUpdate:modelValue"],at={key:1,class:"my-6 mx-auto text-center"},ot=i("\u7A7A\u7A7A\u5982\u4E5F\uFF0C\u5FEB\u53BB\u8BA2\u9605\u5427"),it=i("\u5448\u73B0\u5F62\u5F0F "),nt=i("\u63A8\u9001\u6570\u91CF\u4E0A\u9650 "),dt=i("\u63A8\u9001\u90AE\u7BB1 "),ut=i(" \u4FDD\u5B58 ");function mt(o,a,rt,ht,l,v){const k=g("router-link"),_=g("skeleton");return n(),u(c,null,[t(V,{class:"w-row"},{default:e(()=>[t(w,{width:"100%"},{default:e(()=>[d("div",K,[t(C,null,{default:e(()=>[t(D,{size:"small",class:"mr-2"},{default:e(()=>[O]),_:1}),Q]),_:1}),t(r,null,{default:e(()=>[X]),_:1}),t(Y,{modelValue:l.tab,"onUpdate:modelValue":a[0]||(a[0]=s=>l.tab=s),class:"mt-3",grow:""},{default:e(()=>[(n(!0),u(c,null,f(l.items,s=>(n(),m(j,{key:s,value:s},{default:e(()=>[i(p(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])]),_:1})]),_:1}),t(V,{class:"w-row mt-8"},{default:e(()=>[t(w,{"max-width":"1210",class:"mx-auto auto-size"},{default:e(()=>[l.loading?(n(),m(h,{key:1,style:{"min-height":"60vh"}},{default:e(()=>[t(_,{class:"mt-3",width:"20%",height:"1em"}),(n(),u(c,null,f(6,s=>t(_,{class:"mt-6",width:"100%",height:"1.2em",key:s})),64))]),_:1})):(n(),m(Z,{key:0,modelValue:l.tab,"onUpdate:modelValue":a[4]||(a[4]=s=>l.tab=s),style:{"min-height":"60vh"}},{default:e(()=>[t(x,{value:"\u4F18\u5148\u7EA7"},{default:e(()=>[d("div",$,[t(r,{class:"mt-6"},{default:e(()=>[tt]),_:1}),t(y,{color:"indigo",to:"/setup",variant:"outlined",title:"\u6DFB\u52A0\u66F4\u591A",size:"small","prepend-icon":"fas fa-plus"},{default:e(()=>[et]),_:1})]),t(h,null,{default:e(()=>[l.settings.follows.length?(n(),m(W,{key:0,"fixed-header":"",height:"50vh"},{default:e(()=>[st,d("tbody",null,[(n(!0),u(c,null,f(l.settings.follows,s=>(n(),u("tr",{key:s.name},[d("td",null,p(s.channelName),1),d("td",null,[B(d("input",{type:"text","onUpdate:modelValue":S=>s.sort=S,class:I(["item-sort",{"item-change":s.sort!=s.sort_copy}])},null,10,lt),[[F,s.sort]])])]))),128))])]),_:1})):(n(),u("div",at,[t(k,{to:"/setup"},{default:e(()=>[ot]),_:1})]))]),_:1})]),_:1}),t(x,{value:"\u63A8\u9001\u8BBE\u7F6E"},{default:e(()=>[t(r,{class:"mt-6"},{default:e(()=>[it]),_:1}),t(h,null,{default:e(()=>[t(U,{modelValue:l.settings.itemsTheme,"onUpdate:modelValue":a[1]||(a[1]=s=>l.settings.itemsTheme=s)},{default:e(()=>[t(b,{label:"\u6458\u8981\u6A21\u5F0F",value:0}),t(b,{label:"\u8BE6\u60C5\u6A21\u5F0F",value:1})]),_:1},8,["modelValue"])]),_:1}),t(r,null,{default:e(()=>[nt]),_:1}),t(h,null,{default:e(()=>[t(M,{modelValue:l.settings.itemsLimit,"onUpdate:modelValue":a[3]||(a[3]=s=>l.settings.itemsLimit=s),class:"align-center",max:l.slider.max,min:l.slider.min,step:1,"hide-details":""},{append:e(()=>[t(q,{modelValue:l.settings.itemsLimit,"onUpdate:modelValue":a[2]||(a[2]=s=>l.settings.itemsLimit=s),"hide-details":"","single-line":"",density:"compact",type:"number",style:{width:"70px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"])]),_:1}),t(r,null,{default:e(()=>[dt]),_:1}),t(h,{class:"px-6"},{default:e(()=>[i(p(l.settings.email),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])),l.loading?(n(),m(_,{key:3,class:"ma-3",width:"64px",height:"36px"})):(n(),m(y,{key:2,loading:l.btnLoading,class:"ma-3",color:"indigo",onClick:v.save},{default:e(()=>[ut]),_:1},8,["loading","onClick"]))]),_:1})]),_:1}),t(P,{location:"top",timeout:5e3,modelValue:l.tip.show,"onUpdate:modelValue":a[5]||(a[5]=s=>l.tip.show=s)},{default:e(()=>[i(p(l.tip.msg),1)]),_:1},8,["modelValue"])],64)}const Vt=T(H,[["render",mt],["__scopeId","data-v-74b5eacf"]]);export{Vt as default};
