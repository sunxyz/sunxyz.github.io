import{_ as F,u as E,s as I,a as q,aQ as R,m as A,b as H,S as J,r as w,o as d,c as u,d as t,w as s,V as z,F as h,L as k,A as S,O as K,br as M,j as r,t as a,J as y,aV as W,N as L,U as G,e as c,G as O,E as T,z as m,H as f,h as V,I as p,bs as Q,bt as v,g as N,bu as j,Q as C,bv as B,B as U}from"./index.083ec206.js";import{g as P,c as X,u as Y,V as Z,a as $,b as ee}from"./VTable.e773b219.js";import{V as te}from"./VSnackbar.53c88688.js";import{b as se}from"./VTextField.f4c66508.js";const{setBar:le}=E(),ie={data(){return{items:[{text:"\u8BA2\u9605\u8BBE\u7F6E",icon:"mdi:mdi-rss"},{text:"\u63A8\u9001\u8BBE\u7F6E",icon:"mdi:mdi-send"},{text:"\u5FEB\u6377\u952E0",icon:"mdi:mdi-keyboard-settings"}],item:{},slider:{min:0,max:20},tip:{show:!1,msg:void 0},loading:!1,btnLoading:!1,settings:{itemsLimit:0,itemsTheme:0,email:"",follows:[]}}},setup(){const{token:o}=I(q()),{reloadFollow:n}=R(),{mobile:b}=A(),{t:i}=H();function l(g){return i("settings."+g)}return{mobile:b,token:o,reloadFollow:n,st:l,t:i}},components:{Skeleton:J},methods:{async initData(){this.loading=!0,await this.loadData(),this.loading=!1},async loadData(){let o=await P();o.follows.forEach(n=>{n.sort_copy=n.sort,n.folderName_copy=n.folderName}),this.settings=o},async save(o){this.btnLoading=!0,o=="rss"?await this.changeFollows():await this.update(),this.btnLoading=!1},async changeFollows(){try{let o=this.settings.follows.filter(n=>n.sort_copy!=n.sort||n.folderName_copy!=n.folderName);o.length&&(await X(o),this.tip.show=!0,this.tip.msg=this.t("successTip"),this.loadData(),this.reloadFollow())}catch(o){console.log(o),this.tip.show=!0,this.tip.msg=this.t("errorTip")}},async update(){try{let o={itemsLimit:this.settings.itemsLimit,itemsTheme:this.settings.itemsTheme,enabledNewsletterSend:this.settings.enabledNewsletterSend};await Y(o),this.tip.show=!0,this.tip.msg=this.t("successTip"),this.loadData()}catch{this.tip.show=!0,this.tip.msg=this.t("errorTip")}},show(o){this.item=o}},mounted(){le(this.st("appbar"),"mdi:mdi-cog-outline"),this.token&&this.initData(),this.items=[{id:"newsletter",text:"pushSeting",icon:"mdi:mdi-email"},{id:"rss",text:"rssSeting",icon:"mdi:mdi-rss"},{id:"keyborad",text:"quickKeyboard",icon:"mdi:mdi-keyboard-settings"}],this.item=this.items[0]}},ne={class:"flex pr-4"},ae=["textContent"],oe=["href"],de=["onUpdate:modelValue"],re=["onUpdate:modelValue"],me={key:1,class:"my-6 mx-auto text-center"},ue=r(" 7:00-12:00 "),ce=["innerHTML"];function he(o,n,b,i,l,g){const D=w("router-link"),x=w("skeleton");return d(),u(h,null,[t(z,{dense:""},{default:s(()=>[t(k,{xl:3,lg:4,md:6,sm:12,cols:12},{default:s(()=>[t(S,{class:"text"},{default:s(()=>[t(K,null,{default:s(()=>[t(M,null,{default:s(()=>[r(a(i.st("title")),1)]),_:1}),(d(!0),u(h,null,y(l.items,(e,_)=>(d(),c(L,{key:_,value:i.st(e.text),onClick:fe=>g.show(e)},{prepend:s(()=>[t(T,{icon:e.icon},null,8,["icon"])]),default:s(()=>[t(j,{textContent:a(i.st(e.text))},null,8,["textContent"])]),_:2},1032,["value","onClick"]))),128)),t(W),t(L,{"prepend-icon":"far fa-circle-question",title:i.st("feedback"),target:"_blank",href:"https://docs.qq.com/sheet/DSFhscEJ0cEFKWW9W?tab=BB08J2"},null,8,["title"])]),_:1})]),_:1})]),_:1}),t(G,{name:"list"},{default:s(()=>[l.item.text?(d(),c(k,{key:0,xl:9,lg:8,md:6,sm:12,cols:12},{default:s(()=>[t(S,{class:"py-3"},{default:s(()=>[t(O,{class:"mb-3"},{default:s(()=>[t(T,{icon:l.item.icon,class:"mr-3"},null,8,["icon"]),r(" "+a(i.st(l.item.text)),1)]),_:1}),l.item.id=="rss"?(d(),u(h,{key:0},[m("div",ne,[t(f,null,{default:s(()=>[r(a(i.st("rssSubTitle")),1)]),_:1}),t(V,{color:"primary",to:"/setup",variant:"outlined",title:i.st("rssAddBtn"),size:"small","prepend-icon":"fas fa-plus"},{default:s(()=>[r(a(i.st("rssAddBtn")),1)]),_:1},8,["title"])]),t(p,null,{default:s(()=>[l.settings.follows.length?(d(),c(Z,{key:0,"fixed-header":"",height:"calc(100vh - 280px)"},{default:s(()=>[m("thead",null,[m("tr",null,[(d(!0),u(h,null,y(JSON.parse(decodeURI(i.st("rssTableCols"))),e=>(d(),u("th",{class:"text-left",key:e,textContent:a(e)},null,8,ae))),128))])]),m("tbody",null,[(d(!0),u(h,null,y(l.settings.follows,e=>(d(),u("tr",{key:e.name},[m("td",null,a(e.channelName),1),m("td",null,[m("a",{target:"_blank",href:e.rssUrl,title:"\u67E5\u770Brss"},a(e.rssUrl),9,oe)]),m("td",null,[C(m("input",{type:"text","onUpdate:modelValue":_=>e.sort=_,class:U(["item-sort",{"item-change":e.sort!=e.sort_copy}])},null,10,de),[[B,e.sort]])]),m("td",null,[C(m("input",{type:"text","onUpdate:modelValue":_=>e.folderName=_,class:U(["item-sort",{"item-change":e.folderName!=e.folderName_copy}])},null,10,re),[[B,e.folderName]])])]))),128))])]),_:1})):(d(),u("div",me,[t(D,{to:"/setup"},{default:s(()=>[r(a(i.st("rssEmptyTip")),1)]),_:1})]))]),_:1}),l.loading?(d(),c(x,{key:1,class:"ma-3",width:"64px",height:"36px"})):(d(),c(V,{key:0,loading:l.btnLoading,class:"ma-3",color:"primary",onClick:n[0]||(n[0]=e=>g.save("rss")),disabled:i.token?l.settings.follows.filter(e=>e.sort_copy!=e.sort||e.folderName_copy!=e.folderName).length==0:!0},{default:s(()=>[r(a(i.token?i.st("comfirmBtn"):i.st("noLoginBtn")),1)]),_:1},8,["loading","disabled"]))],64)):l.item.id=="newsletter"?(d(),u(h,{key:1},[t(f,null,{default:s(()=>[r(a(i.st("pushEmail")),1)]),_:1}),t(p,{class:"px-6"},{default:s(()=>[r(a(l.settings.email),1)]),_:1}),t(f,null,{default:s(()=>[r(a(i.st("pushTime")),1)]),_:1}),t(p,{class:"px-6"},{default:s(()=>[ue]),_:1}),t(f,null,{default:s(()=>[r(a(i.st("pushView")),1)]),_:1}),t(p,null,{default:s(()=>[t(Q,{modelValue:l.settings.itemsTheme,"onUpdate:modelValue":n[1]||(n[1]=e=>l.settings.itemsTheme=e)},{default:s(()=>[t(v,{label:i.st("pushViewSimple"),value:0},null,8,["label"]),t(v,{label:i.st("pushViewDetails"),value:1},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),t(f,null,{default:s(()=>[r(a(i.st("pushLimit")),1)]),_:1}),t(p,null,{default:s(()=>[t($,{modelValue:l.settings.itemsLimit,"onUpdate:modelValue":n[3]||(n[3]=e=>l.settings.itemsLimit=e),class:"align-center",max:l.slider.max,min:l.slider.min,step:1,"hide-details":""},{append:s(()=>[t(se,{modelValue:l.settings.itemsLimit,"onUpdate:modelValue":n[2]||(n[2]=e=>l.settings.itemsLimit=e),"hide-details":"","single-line":"",density:"compact",type:"number",style:{width:"70px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"])]),_:1}),t(f,null,{default:s(()=>[r(a(i.st("pushEnabled")),1)]),_:1}),t(p,{class:"px-6"},{default:s(()=>[t(ee,{modelValue:l.settings.enabledNewsletterSend,"onUpdate:modelValue":n[4]||(n[4]=e=>l.settings.enabledNewsletterSend=e),"hide-details":"",inset:""},null,8,["modelValue"])]),_:1}),l.loading?(d(),c(x,{key:1,class:"ma-3",width:"64px",height:"36px"})):(d(),c(V,{key:0,loading:l.btnLoading,class:"ma-3",color:"primary",disabled:!i.token,onClick:g.save},{default:s(()=>[r(a(i.token?i.st("comfirmBtn"):i.st("noLoginBtn")),1)]),_:1},8,["loading","disabled","onClick"]))],64)):l.item.id=="keyborad"?(d(),u("div",{key:2,class:"pa-3 text-h",innerHTML:i.st("quickKeyboardHtml")},null,8,ce)):N("",!0)]),_:1})]),_:1})):N("",!0)]),_:1})]),_:1}),t(te,{location:"top",timeout:5e3,modelValue:l.tip.show,"onUpdate:modelValue":n[5]||(n[5]=e=>l.tip.show=e)},{default:s(()=>[r(a(l.tip.msg),1)]),_:1},8,["modelValue"])],64)}const Ve=F(ie,[["render",he],["__scopeId","data-v-b157148a"]]);export{Ve as default};
