import{_,ax as C,ay as k,az as x,aA as v,aB as V,aC as y,aD as b,o as i,c as d,d as e,w as t,aE as f,i as h,aF as D,v as s,f as r,t as n,n as c,l as w,k as g,p as m,aG as F,aH as N}from"./index.3d06d085.js";import{V as p}from"./VChip.0d2a1be5.js";const T={inject:["viewName"],props:["id"],data:()=>({channel:{id:void 0,name:void 0},data:[],params:{page:0,size:20},isLast:!0,loading:!0}),components:{IndexView:C},mounted(){k(window,document.documentElement,()=>{this.loadMore()}),this.initData()},methods:{...x(["follow","unFollow"]),toggleFollow(){let a=this.channel;this.isFollowed?this.unFollow(a):this.follow(a)},async initData(){this.channel.id=encodeURIComponent(this.id),this.channel.name="\u52A0\u8F7D\u4E2D...",this.data=[],this.params.page=0,this.channel=await v(this.id),this.data=await this.loadData()},async loadData(){this.loading=!0;let a=await V(this.id,this.params);return this.isLast=a.last,this.loading=!1,a.content},async loadMore(){this.isLast||(this.params.page+=1,this.data=[...this.data,...await this.loadData()])}},computed:{...y(["follows"]),followText(){return this.isFollowed?"\u5DF2\u8BA2\u9605":"\u8BA2\u9605"},isFollowed(){let a=encodeURIComponent(this.id);return this.follows.filter(o=>(console.log(o.id,a),o.id==a)).length>0},showChannel(){return this.viewName.value!="column-view"}},watch:{id(a){this.initData()}}},z={key:0},B={style:{"max-width":"1024px"},class:"mx-auto pb-3 pt-3"},I=["href"],M=["href"],L=m("\u6700\u8FD1\u66F4\u65B0 "),S={key:0,class:"ma-3 mx-auto",style:{"text-align":"center"}},j=m(" \u52A0\u8F7D\u66F4\u591A "),E={key:1},R=["href"];function A(a,o,U,G,H,l){const u=b("index-view");return l.showChannel?(i(),d("div",z,[e(f,{justify:"space-around"},{default:t(()=>[e(h,{width:"100%"},{default:t(()=>[e(D,{src:"https://images4.alphacoders.com/121/1217454.jpg",class:"text-white align-end",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",cover:"",height:"200px"}),s("div",B,[e(r,{class:"flex"},{default:t(()=>[s("a",{href:a.channel.link,target:"_blank"},n(a.channel.name),9,I),e(c,{size:"small",color:"indigo",dark:"",textContent:n(l.followText),onClick:l.toggleFollow},null,8,["textContent","onClick"])]),_:1}),e(w,{textContent:n(a.channel.description)},null,8,["textContent"]),e(g,{class:"pt-1"},{default:t(()=>[e(p,{class:"mr-3 mt-3"},{default:t(()=>[m(n(a.channel.type),1)]),_:1}),e(p,{class:"mt-3"},{default:t(()=>[s("a",{href:a.channel.link,target:"_blank"},n(a.channel.link),9,M)]),_:1})]),_:1})])]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(h,{"max-width":"1024",class:"mx-auto auto-size"},{default:t(()=>[e(r,{class:"mb-2"},{default:t(()=>[L]),_:1}),e(g,null,{default:t(()=>[e(u,{data:a.data,"load-more":l.loadMore,loading:a.loading,md:4,sm:6,xs:12},null,8,["data","load-more","loading"]),a.isLast?F("",!0):(i(),d("div",S,[e(c,{onClick:l.loadMore},{default:t(()=>[j]),_:1},8,["onClick"])]))]),_:1})]),_:1})]),_:1})])):(i(),d("div",E,[e(u,{data:a.data,"load-more":l.loadMore,loading:a.loading,md:4,sm:6,xs:12},{default:t(()=>[e(h,{flat:""},{default:t(()=>[e(r,{class:"flex"},{default:t(()=>[s("a",{href:a.channel.link},n(a.channel.name),9,R),e(c,{size:"small",color:"indigo",dark:"",textContent:n(l.followText),onClick:l.toggleFollow},null,8,["textContent","onClick"])]),_:1}),e(w,{textContent:n(a.channel.description),title:a.channel.description,class:"mb-3"},null,8,["textContent","title"]),e(N)]),_:1})]),_:1},8,["data","load-more","loading"])]))}const K=_(T,[["render",A]]);export{K as default};
