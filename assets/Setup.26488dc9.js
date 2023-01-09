import{ah as le,ai as Be,aj as Pe,ak as fe,al as pe,a0 as he,am as me,an as Te,ao as Fe,ap as Q,a9 as ve,a as l,aq as Re,ar as X,as as Le,at as ze,au as $e,av as Ae,$ as De,aw as Oe,ax as Me,ay as Ue,a7 as Ge,az as qe,aA as Ee,a8 as Ne,aB as He,a3 as be,aC as Ke,aD as We,P as ne,aE as je,ac as Je,ad as q,aF as Qe,C as v,Q as Xe,aG as ie,aH as Ye,aI as Ze,aJ as xe,m as I,aK as oe,n as E,aL as el,aM as ll,J as Y,F as _,aN as al,aa as tl,aO as ue,aP as sl,_ as nl,u as il,aQ as ol,aR as ul,aS as dl,aT as rl,W as cl,r as Z,o as S,c as N,w as t,V as x,y as ee,x as ae,D as B,G as V,H as C,aU as H,e as z,I as de,aV as fl,d as pl,g as o,E as re,b as ce,aW as hl,aX as ml}from"./index.4ba22a0a.js";import{R as vl}from"./Reader.f7066894.js";import{V as bl}from"./VSnackbar.9855e680.js";import{V as gl,a as $,b as yl,c as A}from"./VWindowItem.ff46327d.js";import{m as Vl,f as kl,V as Cl,a as _l,b as K}from"./VTextField.f4ffdc48.js";const ge=Symbol.for("vuetify:v-chip-group"),wl=le({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Be},...Pe({selectedClass:"v-chip--selected"}),...fe(),...pe(),...he({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:d}=a;const{themeClasses:p}=me(e),{isSelected:i,select:r,next:c,prev:b,selected:g}=Te(e,ge);return Fe({VChip:{color:Q(e,"color"),filter:Q(e,"filter"),variant:Q(e,"variant")}}),ve(()=>{var s;return l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},p.value]},{default:()=>[(s=d.default)==null?void 0:s.call(d,{isSelected:i,select:r,next:c,prev:b,selected:g.value})]})}),{}}}),ye=le({name:"VChip",directives:{Ripple:Re},props:{activeClass:String,appendAvatar:String,appendIcon:X,closable:Boolean,closeIcon:{type:X,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:X,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...Le(),...ze(),...$e(),...Ae(),...De(),...Oe(),...Me(),...fe({tag:"span"}),...pe(),...he({variant:"tonal"})},emits:{"click:close":e=>!0,"update:active":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,a){let{attrs:d,emit:p,slots:i}=a;const{borderClasses:r}=Ue(e),{colorClasses:c,colorStyles:b,variantClasses:g}=Ge(e),{densityClasses:s}=qe(e),{elevationClasses:P}=Ee(e),{roundedClasses:W}=Ne(e),{sizeClasses:D}=He(e),{themeClasses:O}=me(e),m=be(e,"modelValue"),n=Ke(e,ge,!1),T=We(e,d);function F(w){m.value=!1,p("click:close",w)}return()=>{var w;const M=T.isLink.value?"a":e.tag,j=!!(i.append||e.appendIcon||e.appendAvatar),u=!!(i.close||e.closable),f=!!(i.filter||e.filter)&&n,h=!!(i.prepend||e.prependIcon||e.prependAvatar),y=!n||n.isSelected.value,R=!e.disabled&&(!!n||T.isClickable.value||e.link),J=e.link?e.link:n==null?void 0:n.toggle;return m.value&&ne(l(M,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":R,"v-chip--filter":f,"v-chip--pill":e.pill},O.value,r.value,y?c.value:void 0,s.value,P.value,W.value,D.value,g.value,n==null?void 0:n.selectedClass.value],style:[y?b.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:T.href.value,onClick:R&&J},{default:()=>{var U;return[Je(R,"v-chip"),f&&l(q,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[l(Qe,null,{default:()=>[ne(l("div",{class:"v-chip__filter"},[i.filter?i.filter():l(v,null,null)]),[[Xe,n.isSelected.value]])]})]}),h&&l(q,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[i.prepend?l("div",{class:"v-chip__prepend"},[i.prepend()]):e.prependAvatar?l(ie,{start:!0},null):e.prependIcon?l(v,{start:!0},null):void 0]}),(U=(w=i.default)==null?void 0:w.call(i,{isSelected:n==null?void 0:n.isSelected.value,selectedClass:n==null?void 0:n.selectedClass.value,select:n==null?void 0:n.select,toggle:n==null?void 0:n.toggle,value:n==null?void 0:n.value.value,disabled:e.disabled}))!=null?U:e.text,j&&l(q,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[i.append?l("div",{class:"v-chip__append"},[i.append()]):e.appendAvatar?l(ie,{end:!0},null):e.appendIcon?l(v,{end:!0},null):void 0]}),u&&l(q,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[l("div",{class:"v-chip__close",onClick:F},[i.close?i.close():l(v,null,null)])]})]}}),[[je("ripple"),R&&e.ripple,null]])}}});const Il=le({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...Ye({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>Ze(e).every(a=>a!=null&&typeof a=="object")},...Vl({clearable:!0})},emits:{"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:d,emit:p,slots:i}=a;const{t:r}=xe(),c=be(e,"modelValue"),b=I(()=>typeof e.showSize!="boolean"?e.showSize:void 0),g=I(()=>{var u;return((u=c.value)!=null?u:[]).reduce((f,h)=>{let{size:y=0}=h;return f+y},0)}),s=I(()=>oe(g.value,b.value)),P=I(()=>{var u;return((u=c.value)!=null?u:[]).map(f=>{const{name:h="",size:y=0}=f;return e.showSize?`${h} (${oe(y,b.value)})`:h})}),W=I(()=>{var h;var u;const f=(h=(u=c.value)==null?void 0:u.length)!=null?h:0;return e.showSize?r(e.counterSizeString,f,s.value):r(e.counterString,f)}),D=E(),O=E(),m=E(!1),n=E(),T=I(()=>e.messages.length?e.messages:e.persistentHint?e.hint:"");function F(){if(n.value!==document.activeElement){var u;(u=n.value)==null||u.focus()}m.value||(m.value=!0)}function w(u){ue(e["onClick:prepend"],u),M(u)}function M(u){var f;(f=n.value)==null||f.click(),p("click:control",u)}function j(u){u.stopPropagation(),F(),sl(()=>{c.value=[],n!=null&&n.value&&(n.value.value=""),ue(e["onClick:clear"],u)})}return ve(()=>{const u=!!(i.counter||e.counter),f=!!(u||i.details),[h,y]=el(d),[{modelValue:R,...J}]=ll(e),[U]=kl(e);return l(al,Y({ref:D,modelValue:c.value,"onUpdate:modelValue":L=>c.value=L,class:"v-file-input","onClick:prepend":w,"onClick:append":e["onClick:append"]},h,J,{focused:m.value,messages:T.value}),{...i,default:L=>{let{isDisabled:G,isDirty:te,isReadonly:ke,isValid:Ce}=L;return l(Cl,Y({ref:O,"prepend-icon":e.prependIcon,"onClick:control":M,"onClick:clear":j,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},U,{active:te.value||m.value,dirty:te.value,focused:m.value,error:Ce.value===!1}),{...i,default:_e=>{let{props:{class:we,...Ie}}=_e;return l(_,null,[l("input",Y({ref:n,type:"file",readonly:ke.value,disabled:G.value,multiple:e.multiple,name:e.name,onClick:k=>{k.stopPropagation(),F()},onChange:k=>{var se;if(!k.target)return;const Se=k.target;c.value=[...(se=Se.files)!=null?se:[]]},onFocus:F,onBlur:()=>m.value=!1},Ie,y),null),l("div",{class:we},[c.value.length>0&&(i.selection?i.selection({fileNames:P.value,totalBytes:g.value,totalBytesReadable:s.value}):e.chips?P.value.map(k=>l(ye,{key:k,size:"small",color:e.color},{default:()=>[k]})):P.value.join(", "))])])}})},details:f?L=>{var G;return l(_,null,[(G=i.details)==null?void 0:G.call(i,L),u&&l(_,null,[l("span",null,null),l(_l,{active:!!c.value.length,value:W.value},i.counter)])])}:void 0})}),tl({},D,O,n)}}),{setBar:Sl}=il(),{reloadFollow:Bl}=ol(),Pl={data:()=>({tab:null,data:[],chanTypeCheck:"",showTip:!1,tipMsg:void 0,search:void 0,submitLoading:!1,channels:[],files:void 0,dialog:!1,item:{}}),components:{Reader:vl},async mounted(){Sl("\u8BA2\u9605","mdi:mdi-plus"),await this.initData(),this.$route.query.chanType?this.chanTypeCheck=this.$route.query.chanType:this.$route.query.q&&(this.search=this.$route.query.q,this.searchRss(this.search))},methods:{go(e){this.$router.push(e)},async initData(){let e=await ul(),a={};for(let d of e){let p=a[d.type];p||(p=[],a[d.type]=p),p.push(d)}this.data=[];for(let d in a)this.data.push({type:d,items:a[d]})},async searchRss(e){if(e=e||this.search,this.search){this.submitLoading=!0;try{this.$router.replace("/setup?q="+e),console.log(e);let a=await dl({search:e});this.chanTypeCheck=void 0,setTimeout(()=>{this.channels=a.map(d=>({id:d}))},300)}catch(a){this.showTip=!0,this.tipMsg=a.response.data.message}this.submitLoading=!1}else this.showTip=!0,this.tipMsg="\u8BF7\u8F93\u5165rss\u5730\u5740\u8BA2\u9605"},async importOpml(){if(this.files&&this.files.length){try{this.submitLoading=!0,await rl(this.files[0]),Bl(),this.showTip=!0,this.tipMsg="\u5BFC\u5165\u6210\u529F"}catch{this.showTip=!0,this.tipMsg="\u5BFC\u5165\u5931\u8D25\u8BF7\u68C0\u67E5\u6587\u4EF6"}this.submitLoading=!1}else this.showTip=!0,this.tipMsg="\u8BF7\u9009\u62E9opml\u6587\u4EF6"},async openRead(e){this.item=await cl(e),this.item.id=e}},watch:{chanTypeCheck(e){let a=this.data.filter(d=>d.type==e);e&&this.$router.replace("/setup?chanType="+e),this.channels=a.length?a[0].items:[]}}},Ve=e=>(hl("data-v-3ae5ad18"),e=e(),ml(),e),Tl={class:"mt-8 mx-auto",style:{"max-width":"1210px"}},Fl=o("\u627E\u5230\u6700\u4F73\u4FE1\u606F\u6E90"),Rl=o("\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u67E5\u627E\u7F51\u7AD9\u6458\u8981\u3001B\u7AD9\u7528\u6237\u3001\u5FAE\u535A\u7528\u6237\u3001\u77E5\u4E4E\u7528\u6237\uFF0C\u5BFC\u5165\u8BA2\u9605\u6E90"),Ll=o(" fas fa-rss"),zl=o("fab fa-bilibili"),$l=o("fab fa-weibo"),Al=o("fab fa-zhihu"),Dl=o("far fa-file-lines"),Ol=o("rss\u8BA2\u9605"),Ml=o("\u53D1\u73B0\u66F4\u591A\u8BA2\u9605\u6E90 "),Ul=Ve(()=>ae("a",{href:"https://docs.rsshub.app/",class:"mx-2"},"rsshub",-1)),Gl=Ve(()=>ae("a",{href:"https://rss-source.com/"},"rss-source",-1)),ql=o(" \u641C\u7D22 "),El=o("\u5173\u6CE8\u54D4\u54E9\u54D4\u54E9\u7528\u6237"),Nl=o("\u5C0F\u52A9\u624B\uFF1A\u70B9\u51FB\u7528\u6237\u5934\u50CF\u4F1A\u8BBF\u95EEhttp://space.bilibili.com/xxx?xvsfds \u5176\u4E2D\u7684xxx\u5C31\u662F\u7528\u6237id"),Hl=o(" \u641C\u7D22 "),Kl=o("\u5173\u6CE8\u5FAE\u535A"),Wl=o("\u5C0F\u52A9\u624B\uFF1A@\u52A0\u7528\u6237id\u662F\u5173\u6CE8\u7528\u6237#\u52A0\u5173\u952E\u8BCDid\u662F\u5173\u6CE8\u5173\u952E\u8BCD"),jl=o(" \u641C\u7D22 "),Jl=o("\u5173\u6CE8\u77E5\u4E4E"),Ql=o("\u5C0F\u52A9\u624B\uFF1A@\u52A0\u7528\u6237id\u662F\u5173\u6CE8\u7528\u6237#\u52A0\u8BDD\u9898id\u662F\u5173\u6CE8\u8BDD\u9898"),Xl=o(" \u641C\u7D22 "),Yl=o("\u5BFC\u5165 OPML \u6587\u4EF6"),Zl=o("\u5C0F\u52A9\u624B\uFF1A\u5BFC\u5165\u5DF2\u6709 OPML \u6587\u4EF6"),xl=o(" \u5BFC\u5165 "),ea=o("\u8BD5\u8BD5\u8BA2\u9605\u4E0D\u540C\u7C7B\u578B\u7684\u5185\u5BB9\u5427"),la=o("\u641C\u7D22\u7ED3\u679C");function aa(e,a,d,p,i,r){const c=Z("b-channel-light"),b=Z("reader"),g=Z("c-dialog");return S(),N(_,null,[l(x,{class:"w-row"},{default:t(()=>[l(ee,{width:"100%"},{default:t(()=>[ae("div",Tl,[l(B,null,{default:t(()=>[Fl]),_:1}),l(V,null,{default:t(()=>[Rl]),_:1}),l(gl,{modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=s=>e.tab=s),class:"mt-3"},{default:t(()=>[l($,{value:"rssFollow"},{default:t(()=>[l(v,{title:"rss\u5730\u5740\u8BA2\u9605"},{default:t(()=>[Ll]),_:1})]),_:1}),l($,{value:"biLiBiLiFollow"},{default:t(()=>[l(v,{title:"\u5173\u6CE8\u54D4\u54E9\u54D4\u54E9\u7528\u6237\u52A8\u6001"},{default:t(()=>[zl]),_:1})]),_:1}),l($,{value:"weiBoFollow"},{default:t(()=>[l(v,{title:"\u5173\u6CE8\u5FAE\u535A\u52A8\u6001"},{default:t(()=>[$l]),_:1})]),_:1}),l($,{value:"zhiHuFollow"},{default:t(()=>[l(v,{title:"\u5173\u6CE8\u77E5\u4E4E\u52A8\u6001"},{default:t(()=>[Al]),_:1})]),_:1}),l($,{value:"fileFollow"},{default:t(()=>[l(v,{title:"\u5BFC\u5165OPML\u8BA2\u9605\u6E90"},{default:t(()=>[Dl]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1}),l(x,{class:"w-row mt-6"},{default:t(()=>[l(ee,{"max-width":"1210",class:"mx-auto auto-size"},{default:t(()=>[l(yl,{modelValue:e.tab,"onUpdate:modelValue":a[14]||(a[14]=s=>e.tab=s)},{default:t(()=>[l(A,{value:"rssFollow"},{default:t(()=>[l(B,{class:"my-3"},{default:t(()=>[Ol]),_:1}),l(V,null,{default:t(()=>[Ml,Ul,Gl]),_:1}),l(C,null,{default:t(()=>[l(K,{flat:"","hide-details":"",label:"\u8BF7\u8F93\u5165rss\u5730\u5740\u8BA2\u9605","prepend-inner-icon":"fa-solid fa-rss","solo-inverted":"",clearable:!0,modelValue:e.search,"onUpdate:modelValue":a[1]||(a[1]=s=>e.search=s),onKeyup:a[2]||(a[2]=H(s=>r.searchRss(e.search),["enter"]))},null,8,["modelValue"]),l(z,{class:"mt-4",block:"",loading:e.submitLoading,disabled:e.submitLoading,color:"indigo",rounded:"pill",onClick:a[3]||(a[3]=s=>r.searchRss(e.search))},{default:t(()=>[ql]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),l(A,{value:"biLiBiLiFollow"},{default:t(()=>[l(B,{class:"my-3"},{default:t(()=>[El]),_:1}),l(V,null,{default:t(()=>[Nl]),_:1}),l(C,null,{default:t(()=>[l(K,{flat:"","hide-details":"",label:"\u5173\u6CE8\u60A8\u6700\u559C\u7231\u7684\u7528\u6237\uFF0C\u8BF7\u8F93\u5165\u7528\u6237id","prepend-inner-icon":"fa-brands fa-bilibili","solo-inverted":"",clearable:!0,modelValue:e.search,"onUpdate:modelValue":a[4]||(a[4]=s=>e.search=s),onKeyup:a[5]||(a[5]=H(s=>r.searchRss("https://rsshub.app/bilibili/user/dynamic/"+e.search),["enter"]))},null,8,["modelValue"]),l(z,{class:"mt-4",block:"",loading:e.submitLoading,disabled:e.submitLoading,color:"indigo",rounded:"pill",onClick:a[6]||(a[6]=s=>r.searchRss("https://rsshub.app/bilibili/user/dynamic/"+e.search))},{default:t(()=>[Hl]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),l(A,{value:"weiBoFollow"},{default:t(()=>[l(B,{class:"my-3"},{default:t(()=>[Kl]),_:1}),l(V,null,{default:t(()=>[Wl]),_:1}),l(C,null,{default:t(()=>[l(K,{flat:"","hide-details":"",label:"\u5173\u6CE8\u60A8\u6700\u559C\u7231\u7684@\u7528\u6237\u6216#\u5173\u952E\u8BCD","prepend-inner-icon":"fa-brands fa-weibo","solo-inverted":"",clearable:!0,modelValue:e.search,"onUpdate:modelValue":a[7]||(a[7]=s=>e.search=s),onKeyup:a[8]||(a[8]=H(s=>r.searchRss("https://rsshub.app/weibo/"+(e.search.indexOf("#")==0?"keyword/":"user/")+e.search.substr(1,e.search.length)),["enter"]))},null,8,["modelValue"]),l(z,{class:"mt-4",block:"",loading:e.submitLoading,disabled:e.submitLoading,color:"indigo",rounded:"pill",onClick:a[9]||(a[9]=s=>r.searchRss("https://rsshub.app/weibo/"+(e.search.indexOf("#")==0?"keyword/":"user/")+e.search.substr(1,e.search.length)))},{default:t(()=>[jl]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),l(A,{value:"zhiHuFollow"},{default:t(()=>[l(B,{class:"my-3"},{default:t(()=>[Jl]),_:1}),l(V,null,{default:t(()=>[Ql]),_:1}),l(C,null,{default:t(()=>[l(K,{flat:"","hide-details":"",label:"\u5173\u6CE8\u60A8\u6700\u559C\u7231\u7684@\u7528\u6237\u6216#\u8BDD\u9898","prepend-inner-icon":"fa-brands fa-zhihu","solo-inverted":"",clearable:!0,modelValue:e.search,"onUpdate:modelValue":a[10]||(a[10]=s=>e.search=s),onKeyup:a[11]||(a[11]=H(s=>r.searchRss("https://rsshub.app/zhihu/"+(e.search.indexOf("#")==0?"topic/":"people/activities/")+e.search.substr(1,e.search.length)),["enter"]))},null,8,["modelValue"]),l(z,{class:"mt-4",block:"",loading:e.submitLoading,disabled:e.submitLoading,color:"indigo",rounded:"pill",onClick:a[12]||(a[12]=s=>r.searchRss("https://rsshub.app/zhihu/"+(e.search.indexOf("#")==0?"topic/":"people/activities/")+e.search.substr(1,e.search.length)))},{default:t(()=>[Xl]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),l(A,{value:"fileFollow"},{default:t(()=>[l(B,{class:"my-3"},{default:t(()=>[Yl]),_:1}),l(V,null,{default:t(()=>[Zl]),_:1}),l(C,null,{default:t(()=>[l(Il,{"prepend-icon":"far fa-file-lines",modelValue:e.files,"onUpdate:modelValue":a[13]||(a[13]=s=>e.files=s),label:"OPML \u6587\u4EF6",style:{height:"56px"}},null,8,["modelValue"]),l(z,{class:"mt-4",block:"",loading:e.submitLoading,disabled:e.submitLoading,color:"indigo",rounded:"pill",onClick:r.importOpml},{default:t(()=>[xl]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(x,{class:"mt-6"},{default:t(()=>[l(ee,{"max-width":"1210",class:"mx-auto auto-size"},{default:t(()=>[l(V,{class:"mt-4"},{default:t(()=>[ea]),_:1}),l(C,null,{default:t(()=>[l(wl,{modelValue:e.chanTypeCheck,"onUpdate:modelValue":a[15]||(a[15]=s=>e.chanTypeCheck=s),column:""},{default:t(()=>[(S(!0),N(_,null,de(e.data,s=>(S(),ce(ye,{key:s.type,value:s.type,filter:"",outlined:""},{default:t(()=>[o(re(s.type),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e.channels.length?(S(),N(_,{key:0},[l(fl),l(V,{class:"mt-4 mb-3"},{default:t(()=>[la]),_:1}),l(C,null,{default:t(()=>[(S(!0),N(_,null,de(e.channels,s=>(S(),ce(c,{key:s.id,id:s.id,onClick:r.openRead},null,8,["id","onClick"]))),128))]),_:1})],64)):pl("",!0)]),_:1})]),_:1}),l(bl,{location:"top",timeout:5e3,modelValue:e.showTip,"onUpdate:modelValue":a[16]||(a[16]=s=>e.showTip=s)},{default:t(()=>[o(re(e.tipMsg),1)]),_:1},8,["modelValue"]),l(g,{"model-value":e.item.id!=null},{default:t(()=>[l(b,{modelValue:e.item,"onUpdate:modelValue":a[17]||(a[17]=s=>e.item=s),"ctrl-style":"position:fixed"},null,8,["modelValue"])]),_:1},8,["model-value"])],64)}const ua=nl(Pl,[["render",aa],["__scopeId","data-v-3ae5ad18"]]);export{ua as default};
