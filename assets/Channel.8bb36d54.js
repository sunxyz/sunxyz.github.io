import{_ as x,s as V,v as k,x as y,y as b,z as D,A as T,o as d,B as p,c as a,w as e,V as h,e as c,n as F,F as g,C as v,r as m,j as f,q as n,D as s,E as B,k as r,b as u,G as L,a as _,H as N,f as I,g as M,h as S,l as H,i as R,I as $}from"./index.eda5bb45.js";import{V as C}from"./VChip.88d5564e.js";const j={props:["id"],data:()=>({channel:{},data:[],params:{page:0,size:20},isLast:!0,item:{},dialog:!1}),mounted(){this.initData()},methods:{...V(["follow","unFollow"]),toggleFollow(){let t=this.channel;this.isFollowed?this.unFollow(t):this.follow(t)},async initData(){this.params.page=0,this.channel=await k(this.id),this.data=await this.loadData()},async loadData(){let t=await y(this.id,this.params);return this.isLast=t.last,t.content},async loadMore(){this.params.page+=1,this.data=[...this.data,...await this.loadData()]},async openRead(t){this.item=await b(t),this.dialog=!0}},computed:{...D(["follows"]),followText(){return this.isFollowed?"\u5DF2\u8BA2\u9605":"\u8BA2\u9605"},isFollowed(){return this.follows.filter(t=>t.id==this.id).length>0}},watch:{id(t){this.initData()}}},z={style:{"max-width":"1024px"},class:"mx-auto pb-3 pt-3"},A=n("\u6700\u8FD1\u66F4\u65B0 "),E=n(" \u52A0\u8F7D\u66F4\u591A "),q=n("mdi-close"),G=["textContent"],O=["href"],U=n(" \u5173\u95ED ");function J(t,o,K,P,Q,i){const w=T("entry-card");return d(),p(g,null,[a(h,{justify:"space-around"},{default:e(()=>[a(c,{width:"100%"},{default:e(()=>[a(v,{src:"https://images2.alphacoders.com/642/642540.png",class:"text-white align-end",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",cover:"",height:"200px"}),m("div",z,[a(f,null,{default:e(()=>[n(s(t.channel.name),1)]),_:1}),a(B,null,{default:e(()=>[a(C,{class:"mr-4"},{default:e(()=>[n(s(t.channel.type),1)]),_:1}),a(C,null,{default:e(()=>[n(s(t.channel.link),1)]),_:1})]),_:1}),a(r,null,{default:e(()=>[a(u,{color:"indigo",dark:"",textContent:s(i.followText),onClick:i.toggleFollow},null,8,["textContent","onClick"])]),_:1})])]),_:1})]),_:1}),a(c,{"max-width":"1024",class:"mx-auto"},{default:e(()=>[a(f,{class:"mb-2"},{default:e(()=>[A]),_:1}),a(r,null,{default:e(()=>[a(h,{dense:""},{default:e(()=>[(d(!0),p(g,null,L(t.data,l=>(d(),_($,{key:l.id,md:4,sm:6,xs:12},{default:e(()=>[a(w,{"img-src":l.thumbnail,title:l.title,"channel-name":l.channelName,"pub-date":l.pubDate,"channel-id":l.channelId,onClick:W=>i.openRead(l.id)},{default:e(()=>[a(r,{textContent:s(l.summary)},null,8,["textContent"])]),_:2},1032,["img-src","title","channel-name","pub-date","channel-id","onClick"])]),_:2},1024))),128))]),_:1}),a(h,{class:"ma-3"},{default:e(()=>[t.isLast?N("",!0):(d(),_(u,{key:0,class:"mx-auto",onClick:i.loadMore},{default:e(()=>[E]),_:1},8,["onClick"]))]),_:1})]),_:1})]),_:1}),a(F,{modelValue:t.dialog,"onUpdate:modelValue":o[2]||(o[2]=l=>t.dialog=l),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{default:e(()=>[a(c,null,{default:e(()=>[a(I,{dark:""},{default:e(()=>[a(u,{icon:"",dark:"",onClick:o[0]||(o[0]=l=>t.dialog=!1)},{default:e(()=>[a(M,null,{default:e(()=>[q]),_:1})]),_:1}),a(S,{textContent:s(t.item.channelName)},null,8,["textContent"])]),_:1}),a(f,{style:{"max-width":"860px"},class:"mx-auto"},{default:e(()=>[m("span",{class:"text-h5",style:{float:"left"},textContent:s(t.item.title)},null,8,G)]),_:1}),m("a",{href:t.item.link,target:"_balnk",style:{"max-width":"860px"},class:"mx-auto"},"\u67E5\u770B\u539F\u6587",8,O),a(r,{style:{"max-width":"860px"},class:"mx-auto",innerHTML:t.item.description},null,8,["innerHTML"]),a(H,null,{default:e(()=>[a(R),a(u,{text:"",onClick:o[1]||(o[1]=l=>t.dialog=!1)},{default:e(()=>[U]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Z=x(j,[["render",J]]);export{Z as default};
