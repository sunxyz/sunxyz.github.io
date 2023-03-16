import{_ as M,r as $,o as l,c as m,d as a,w as s,F as x,N as C,e as g,O as B,P as I,g as w,V as D,t as v,Q as H,q as A,S as F,C as i,H as z,j as P,R as N,T as j,x as V,U as Q,W as X,X as Y,D as G,Y as S,Z,i as J,v as T,p as K,A as O,B as E,G as p,$ as ee}from"./index.a9db3e24.js";import{R as L}from"./Reader.a7a68769.js";const te={props:{loadMore:{type:Function,default:()=>()=>{}},data:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},showReader:{type:Boolean,default:!1},isLast:{type:Boolean,default:!1}},emits:["click-item-read","update:showReader"],methods:{openRead(t){this.$emit("click-item-read",t)}}},le={key:0,class:"text-align pa-3"};function ae(t,r,o,n,b,f){const y=$("entry-card"),h=$("entry-card-skeleton"),d=$("c-dialog");return l(),m(x,null,[a(D,{dense:""},{default:s(()=>[(l(!0),m(x,null,C(o.data,e=>(l(),g(I,B({key:e.id},t.$attrs),{default:s(()=>[a(y,{"img-src":e.thumbnail,"channel-icon":e.channelIcon,title:e.title,"channel-name":e.channelName,"pub-date":e.pubDate,"channel-id":e.channelId,onClick:R=>f.openRead(e.id)},null,8,["img-src","channel-icon","title","channel-name","pub-date","channel-id","onClick"])]),_:2},1040))),128)),o.loading?(l(),m(x,{key:0},C(20,e=>a(I,B({key:e},t.$attrs),{default:s(()=>[a(h)]),_:2},1040)),64)):w("",!0)]),_:1}),!o.loading&&o.isLast?(l(),m("div",le,v(t.$vuetify.locale.t("notMoreBtn")),1)):w("",!0),a(d,{"model-value":o.showReader,"onUpdate:modelValue":r[0]||(r[0]=e=>t.$emits("update:showReader",e))},{default:s(()=>[H(t.$slots,"default")]),_:3},8,["model-value"])],64)}const ne=M(te,[["render",ae]]);const oe={props:{loadMore:{type:Function,default:()=>()=>{}},data:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},showReader:{type:Boolean,default:!1},isLast:{type:Boolean,default:!1}},emits:["click-item-read","update:showReader"],setup(){const{mobile:t}=A();return{mobile:t}},components:{Skeleton:F},computed:{isChannel(){return this.$route.fullPath.indexOf("channel")>0}},methods:{openRead(t){this.$emit("click-item-read",t)},log(t){console.log(t),this.openRead(t.id)}}},se={class:"grid-2-between"},de={class:"grid-2"},ie=["onClick"],re={class:"text-ellipsis mr-3 title"},ue={style:{"max-width":"600px",display:"inline-block"},class:"text-ellipsis"},ce={key:0,style:{"font-size":"0.75em"}},he={class:"flex"},_e={key:0,class:"text-center pa-3"};function fe(t,r,o,n,b,f){const y=$("router-link"),h=$("skeleton"),d=$("c-dialog");return l(),m("div",null,[a(j,{density:"compact"},{default:s(()=>[(l(!0),m(x,null,C(o.data,e=>(l(),g(N,{key:e.id,value:e.id,onClick:R=>f.openRead(e.id)},{default:s(()=>[i("div",se,[i("div",de,[f.isChannel?w("",!0):(l(),g(y,{key:0,tabindex:"-1",style:z([{display:"inline-block","font-size":"0.75em"},{width:n.mobile?"80px":"150px"}]),class:"text-ellipsis",title:e.channelName,to:"/channel/"+e.channelId},{default:s(()=>[P(v(e.channelName),1)]),_:2},1032,["style","title","to"])),i("div",{class:"grid-2 hover",onClick:R=>f.openRead(e.id)},[i("div",re,v(e.title),1),i("small",ue,v(e.summary),1)],8,ie)]),n.mobile?w("",!0):(l(),m("small",ce,v(e.pubDate),1))])]),_:2},1032,["value","onClick"]))),128)),o.loading?(l(),m(x,{key:0},C(20,e=>a(N,{key:e,value:e},{default:s(()=>[i("div",he,[a(h,{height:"0.8em",width:"70%"}),a(h,{height:"0.8em",width:"50px"})])]),_:2},1032,["value"])),64)):w("",!0)]),_:1}),!o.loading&&o.isLast?(l(),m("div",_e,v(t.$vuetify.locale.t("notMoreBtn")),1)):w("",!0),a(d,{"model-value":o.showReader,"onUpdate:modelValue":r[0]||(r[0]=e=>t.$emits("update:showReader",e))},{default:s(()=>[H(t.$slots,"default",{},void 0,!0)]),_:3},8,["model-value"])])}const me=M(oe,[["render",fe],["__scopeId","data-v-01ac3a26"]]);function pe(t,r,o=()=>{}){r=r||t;let n=!0;const b=V(0),f=V(0),y=V(0),h=V(!1);return Q(t,"scroll",d=>{if(b.value=r.scrollTop,f.value=r.scrollHeight,y.value=r.clientHeight,n){let e=r.scrollTop+r.clientHeight+120>r.scrollHeight;e&&o(),h.value=e,n=!1}setTimeout(()=>{h.value=!1,n=!0},300)}),{scrollTop:b,scrollHeight:f,clientHeight:y,isScrollBottom:h}}const ye={props:{loadMore:{type:Function,default:()=>()=>{}},data:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},showReader:{type:Boolean,default:!1},isLast:{type:Boolean,default:!1}},emits:["click-item-read"],setup(){const{mobile:t}=A();return{mobile:t}},data:()=>({channelRefHeight:0}),mounted(){pe(this.$refs.listRef.$el,null,this.loadMore),this.mobile||setTimeout(()=>{this.$refs.channelRef.clientHeight&&(this.channelRefHeight=this.$refs.channelRef.clientHeight)},1e3)},components:{Skeleton:F},computed:{maxHeight(){return"calc(100vh - "+(this.channelRefHeight+70)+"px)"},isChannel(){return this.$route.fullPath.indexOf("channel")>0}},watch:{$route(){this.$refs.listRef.$el.scrollTop=0}},methods:{async openRead(t){this.$emit("click-item-read",t)}}},ve={ref:"channelRef"},ge=["onClick"],ke={style:{}},we=["textContent"],$e=["textContent"],xe={class:"flex"},Re={key:1},Ce=["textContent"],be={class:"item"},Ve={class:"flex"},Be={key:1,class:"text-center pa-3"},Ie={class:"box"};function He(t,r,o,n,b,f){const y=$("router-link"),h=$("skeleton");return l(),g(D,{dense:""},{default:s(()=>[X(a(I,{xl:3,lg:4,md:6,sm:12},{default:s(()=>[a(G,null,{default:s(()=>[i("div",ve,[H(t.$slots,"channel",{},void 0,!0)],512),a(j,{"select-strategy":"independent",ref:"listRef",variant:"text",class:"over-y",style:z({maxHeight:f.maxHeight}),density:"compact"},{default:s(()=>[(l(!0),m(x,null,C(o.data,d=>(l(),g(N,{class:"py-2",key:d.id,value:"article/"+d.id,onClick:e=>f.openRead(d.id)},{default:s(()=>[i("div",{class:"item",onClick:e=>f.openRead(d.id)},[a(S,{src:d.thumbnail?d.thumbnail:"/card-thumb.jpg",class:"white--text align-end",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"80px",cover:""},null,8,["src"]),i("div",ke,[i("div",{textContent:v(d.title),style:{"font-size":"0.9em"}},null,8,we),i("small",{style:{display:"block"},textContent:v(d.summary)},null,8,$e),i("div",xe,[f.isChannel?(l(),m("span",Re)):(l(),g(y,{key:0,tabindex:"-1",style:{"font-size":"0.8em"},class:"text-ellipsis",to:"/channel/"+d.channelId},{default:s(()=>[P(v(d.channelName),1)]),_:2},1032,["to"])),i("small",{textContent:v(d.pubDate)},null,8,Ce)])])],8,ge)]),_:2},1032,["value","onClick"]))),128)),o.loading?(l(),m(x,{key:0},C(20,d=>a(N,{class:"py-2",key:d},{default:s(()=>[i("div",be,[a(S,{class:"white--text align-end",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"80px",cover:""}),i("div",null,[a(h,{height:"0.8em",width:"calc(1oo% - 100px)"}),a(h,{height:"0.7em",width:"calc(1oo% - 100px)"}),i("div",Ve,[a(h,{height:"0.6em",width:"100px"}),a(h,{height:"0.6em",width:"50px"})])])])]),_:2},1024)),64)):w("",!0),!o.loading&&o.isLast?(l(),m("div",Be,v(t.$vuetify.locale.t("notMoreBtn")),1)):w("",!0)]),_:1},8,["style"])]),_:3})]),_:3},512),[[Y,!(n.mobile&&o.showReader)]]),a(Z,{name:"list"},{default:s(()=>[o.showReader?(l(),g(I,{key:0,xl:9,lg:8,md:6,sm:12},{default:s(()=>[i("div",Ie,[H(t.$slots,"default",{},void 0,!0)])]),_:3})):w("",!0)]),_:3})]),_:3})}const Le=M(ye,[["render",He],["__scopeId","data-v-7742abe2"]]);const Ne={props:{loadMore:{type:Function,default:()=>()=>{}},data:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},showReader:{type:Boolean,default:!1},isLast:{type:Boolean,default:!1}},emits:["click-item-read","update:showReader"],setup(){const{mobile:t}=A();return{mobile:t}},components:{Skeleton:F},compute:{isChannel(){return this.$route.fullPath.indexOf("channel")>0}},methods:{openRead(t){this.$emit("click-item-read",t)},log(t){console.log(t),this.openRead(t.id)}}},Me={class:"art"},Ue=["src","title"],Te=["title"],De=["textContent","title","onClick"],Ae=["href","title"],Fe={style:{"font-size":"0.75em"}},Se={class:"art"},Oe={key:0,class:"text-center pa-3"};function ze(t,r,o,n,b,f){const y=$("router-link"),h=$("skeleton"),d=$("c-dialog");return l(),m("div",null,[a(G,{class:"py-2",flat:""},{default:s(()=>[a(D,{dense:""},{default:s(()=>[(l(!0),m(x,null,C(o.data,e=>(l(),g(I,B({key:e.id},t.$attrs),{default:s(()=>[i("article",Me,[e.channelIcon?(l(),g(y,{key:0,to:"/channel/"+e.channelId},{default:s(()=>[i("img",{class:"icon",src:e.channelIcon,title:e.channelName},null,8,Ue)]),_:2},1032,["to"])):(l(),m("span",{key:1,title:e.channelName},"#",8,Te)),i("span",{class:"title",textContent:v(e.title),title:e.channelName+" \u300A"+e.title+"\u300B",onClick:R=>f.openRead(e.id)},null,8,De),i("a",{href:e.link,target:"_blank",title:e.channelName+" \u300A"+e.title+"\u300B"},[i("small",Fe,v(e.pubDate),1)],8,Ae)])]),_:2},1040))),128)),o.loading?(l(),m(x,{key:0},C(20,e=>a(I,B({key:e},t.$attrs),{default:s(()=>[i("article",Se,[a(h,{height:"1.2em",width:"100%"}),a(h,{height:"1em",width:"100%"}),a(h,{height:"0.8em",width:"36px"})])]),_:2},1040)),64)):w("",!0)]),_:1})]),_:1}),!o.loading&&o.isLast?(l(),m("div",Oe,v(t.$vuetify.locale.t("notMoreBtn")),1)):w("",!0),a(d,{"model-value":o.showReader,"onUpdate:modelValue":r[0]||(r[0]=e=>t.$emits("update:showReader",e))},{default:s(()=>[H(t.$slots,"default",{},void 0,!0)]),_:3},8,["model-value"])])}const Pe=M(Ne,[["render",ze],["__scopeId","data-v-48b27e26"]]),je={style:{display:"none"}},Ge=["href","textContent"],Qe={__name:"IndexView",props:["loadMore","data","loading","isLast"],setup(t){const r=t,o=J("currentViewName"),n=V({}),b=V(void 0),f=r.loadMore,y=T(()=>r.data),h=T(()=>r.loading),d=T(()=>r.isLast),e=K();O(n,_=>{_.id&&(e.pushHash("/article/"+_.id),document.title=(_.title||"")+" | WebFollow")}),O(b,_=>{R(_)});async function R(_){n.value=await ee(_),n.value.id=_}const W=_=>{let u=n.value.id,c=_.length;for(let k=0;k<c;k++)if(_[k].id==u&&k>0)return _[k-1].id;return null};function q(_){let u=n.value.id,c=_.length;for(let k=0;k<c;k++){let U=_[k];if(U.id==u&&k+3>c&&f(),U.id==u&&k+1<c)return _[k+1].id}return null}return E(async _=>{let u;_.detail=="up"?u=W(y.value):_.detail=="down"&&(u=q(y.value)),u&&R(u)}),(_,u)=>(l(),m(x,null,[i("ul",je,[(l(!0),m(x,null,C(p(y),c=>(l(),m("li",{key:c.id},[i("a",{href:"/article/"+c.id,textContent:v(c.title)},null,8,Ge)]))),128))]),p(o)=="cards-view"?(l(),g(ne,B({key:0,loadMore:p(f),data:p(y),loading:p(h)},_.$attrs,{"is-last":p(d),"show-reader":n.value.id,"onUpdate:show-reader":u[1]||(u[1]=c=>n.value.id=c),onClickItemRead:R}),{default:s(()=>[a(L,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=c=>n.value=c),"ctrl-style":"position:fixed"},null,8,["modelValue"])]),_:1},16,["loadMore","data","loading","is-last","show-reader"])):p(o)=="title-only-view"?(l(),g(me,{key:1,"load-more":p(f),data:p(y),loading:p(h),"is-last":p(d),"show-reader":n.value.id,"onUpdate:show-reader":u[3]||(u[3]=c=>n.value.id=c),onClickItemRead:R},{default:s(()=>[a(L,{modelValue:n.value,"onUpdate:modelValue":u[2]||(u[2]=c=>n.value=c),"ctrl-style":"position:fixed"},null,8,["modelValue"])]),_:1},8,["load-more","data","loading","is-last","show-reader"])):p(o)=="geek-view"?(l(),g(Pe,B({key:2},_.$attrs,{"load-more":p(f),data:p(y),loading:p(h),"is-last":p(d),"show-reader":n.value.id,"onUpdate:show-reader":u[5]||(u[5]=c=>n.value.id=c),onClickItemRead:R}),{default:s(()=>[a(L,{modelValue:n.value,"onUpdate:modelValue":u[4]||(u[4]=c=>n.value=c),"ctrl-style":"position:fixed"},null,8,["modelValue"])]),_:1},16,["load-more","data","loading","is-last","show-reader"])):(l(),g(Le,{key:3,"load-more":p(f),data:p(y),loading:p(h),"show-reader":n.value.id,"is-last":p(d),onClickItemRead:R},{default:s(()=>[a(L,{modelValue:n.value,"onUpdate:modelValue":u[6]||(u[6]=c=>n.value=c),"over-y":!0},null,8,["modelValue"])]),_:1},8,["load-more","data","loading","show-reader","is-last"]))],64))}};export{Qe as _,pe as u};
