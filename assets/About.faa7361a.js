import{_ as o,m as l,l as f,f as c,g as h,r,o as n,c as d,w as p,V as u,a as x}from"./index.6fb9f537.js";const m={data:()=>({folders:[{title:"\u962E\u4E00\u5CF0\u7684\u7F51\u7EDC\u65E5\u5FD7"},{title:"Recipes"},{title:"Work"}],channel:{id:"xx",title:"cvcxvxcvcx"},items:[{id:"xvxvcx",title:"sfsfsfsfsdfd"},{id:"xvxvcx",title:"sfsfsfsfsdfd"},{id:"xvxvcx",title:"sfsfsfsfsdfd"}],tab:null,data:[],showTip:!1,tipMsg:void 0,rssUrl:void 0}),mounted(){this.initData()},methods:{...l(["follow"]),go(a){this.$router.push(a)},async initData(){let a=await f(),t={};for(let s of a){let e=t[s.type];e||(e=[],t[s.type]=e),e.push(s)}this.data=[];for(let s in t)this.data.push({type:s,items:t[s],checks:[]})},ok(){let a=[];this.data.forEach(t=>{let s={};t.items.forEach(e=>{s[e.id]=e}),t.checks.forEach(e=>{a.push(s[e])})}),a.forEach(t=>this.follow(t)),this.tipMsg="\u8BA2\u9605\u6210\u529F , \u5373\u5C06\u8DF3\u8F6C\u9996\u9875...",this.showTip=!0,setTimeout(()=>{this.$router.push("/")},2e3)},async followRss(){if(this.rssUrl){let a=await c({rssUrl:this.rssUrl}),t=await h(a);this.follow(t),this.showTip=!0,this.tipMsg="\u8BA2\u9605\u6210\u529F"}else this.showTip=!0,this.tipMsg="\u64CD\u4F5C\u5931\u8D25"}}};function w(a,t,s,e,_,v){const i=r("b-channel-light");return n(),d(u,{"max-width":"860",class:"mx-auto",flat:""},{default:p(()=>[x(i,{id:"8f52364ea1cf42dfc9f7810f811c29d4"})]),_:1})}const k=o(m,[["render",w]]);export{k as default};
