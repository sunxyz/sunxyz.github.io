import{R as r}from"./Reader.2d5362c8.js";import{_ as s,u as n,X as i,ag as l,r as c,o as d,d as p,e as m}from"./index.d851babc.js";import"./VSnackbar.bf87abd4.js";const{setChannel:u}=n(),h={props:["id"],data(){return{article:{}}},components:{Reader:r},watch:{id(){this.loadData()}},methods:{async loadData(){this.article=await i(this.id),this.article.id=this.id,u(await l(this.article.channelId))}},mounted(){this.loadData()}};function _(f,t,C,V,e,g){const a=c("reader");return e.article.id?(d(),p(a,{key:0,modelValue:e.article,"onUpdate:modelValue":t[0]||(t[0]=o=>e.article=o),"over-y":!0},null,8,["modelValue"])):m("",!0)}const y=s(h,[["render",_]]);export{y as default};
