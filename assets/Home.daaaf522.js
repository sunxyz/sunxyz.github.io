import{_ as l,u as m,i,f as c,r as h,o as e,c as u,a as p,b as o,w as r,V as f,d as n,F as w,e as _,g}from"./index.33ba065c.js";import{f as N}from"./Reader.f9e8a934.js";import{_ as x,u as B}from"./IndexView.16d0d16b.js";import"./VSnackbar.5d8c895c.js";const{setBar:L}=m(),V={data:()=>({data:[],params:{page:0,size:20},isLast:!0,loading:!0}),components:{IndexView:x},setup(){const a=i("currentViewName"),t=i("sortName");return{viewName:a,sortName:t}},mounted(){B(window,document.documentElement,()=>{this.loadMore()}),this.initData()},computed:{hideLoadMoreBtn(){return this.viewName=="column-view"}},methods:{async initData(){let a="\u9996\u9875",t="mdi:mdi-home";this.params.source=void 0,this.$route.fullPath=="/"?this.params.source="HOME":this.$route.fullPath=="/explore"?(this.params.source="EXPLORE",a="\u63A2\u7D22",t="mdi:mdi-compass"):(a="\u6536\u85CF",t="mdi:mdi-star"),this.params.sort=void 0,this.sortName&&this.$route.fullPath!="/star"&&(this.params.sort=this.sortName+",desc"),L(a,t),this.params.page=0,this.data=await this.loadData()},async loadData(){this.loading=!0;let a=this.$route.fullPath.includes("star")?await N(this.params):await c(this.params);return this.loading=!1,this.isLast=a.last,a.content},async loadMore(){this.isLast||(this.params.page+=1,this.data=[...this.data,...await this.loadData()])}},watch:{$route(){this.data=[],this.loading=!0,this.initData()},sortName(){this.data=[],this.loading=!0,this.initData()}}},$=g(" \u52A0\u8F7D\u66F4\u591A ");function k(a,t,D,M,v,s){const d=h("index-view");return e(),u(w,null,[p(d,{data:a.data,"load-more":s.loadMore,loading:a.loading,"is-last":a.isLast,xl:3,lg:3,md:4,sm:6,xs:12},null,8,["data","load-more","loading","is-last"]),s.hideLoadMoreBtn?n("",!0):(e(),o(f,{key:0,class:"ma-3"},{default:r(()=>[a.isLast?n("",!0):(e(),o(_,{key:0,class:"mx-auto",onClick:s.loadMore},{default:r(()=>[$]),_:1},8,["onClick"]))]),_:1}))],64)}const A=l(V,[["render",k]]);export{A as default};
