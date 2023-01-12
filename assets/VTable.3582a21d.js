import{j as Z,bc as fe,a0 as he,av as ke,aW as ge,n as s,aq as N,p as O,bw as ye,b6 as pe,a_ as le,ai as j,ar as Se,i as se,a$ as we,aa as H,b4 as I,aB as Ce,b as n,Q as ae,aF as _e,bx as Ve,R as xe,by as Te,a9 as Fe,b3 as ne,bf as $e,aI as oe,a4 as G,bh as ie,aM as re,F as Pe,bb as ze,K as J,aN as ue,bz as Me,bg as Le,bj as Be,aL as Re,bA as Ne,bB as De,bl as Ae,bC as Ee,au as Ie,al as Ue,am as qe,an as Ke,aA as Oe}from"./index.d851babc.js";function Je(e){return Z.get("/i/settings",{params:e})}function Ze(e){return Z.patch("/i/settings/items-sort",e)}function et(e){return Z.patch("/i/settings/",e)}const ee=Symbol.for("vuetify:v-slider");function je(e,l,a){const u=a==="vertical",i=l.getBoundingClientRect(),k="touches"in e?e.touches[0]:e;return u?k.clientY-(i.top+i.height/2):k.clientX-(i.left+i.width/2)}function He(e,l){return"touches"in e&&e.touches.length?e.touches[0][l]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][l]:e[l]}const We=fe({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...he(),...ke({elevation:2})},"slider"),Xe=e=>{let{props:l,handleSliderMouseUp:a,handleMouseMove:u,getActiveThumb:i}=e;const{isRtl:k}=ge(),y=s(()=>k.value!==l.reverse),V=s(()=>{let t=k.value?"rtl":"ltr";return l.reverse&&(t=t==="rtl"?"ltr":"rtl"),t}),d=s(()=>parseFloat(l.min)),S=s(()=>parseFloat(l.max)),g=s(()=>l.step>0?parseFloat(l.step):0),$=s(()=>{const t=g.value.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}),L=s(()=>parseInt(l.thumbSize,10)),w=s(()=>parseInt(l.tickSize,10)),p=s(()=>parseInt(l.trackSize,10)),C=s(()=>(S.value-d.value)/g.value),R=N(l,"disabled"),D=s(()=>l.direction==="vertical"),P=s(()=>{var t;return l.error||l.disabled?void 0:(t=l.thumbColor)!=null?t:l.color}),r=s(()=>{var t;return l.error||l.disabled?void 0:(t=l.trackColor)!=null?t:l.color}),z=s(()=>{var t;return l.error||l.disabled?void 0:(t=l.trackFillColor)!=null?t:l.color}),x=O(!1),o=O(0),m=O(),c=O();function T(t){if(g.value<=0)return t;const h=le(t,d.value,S.value),q=d.value%g.value,Y=Math.round((h-q)/g.value)*g.value+q;return parseFloat(Math.min(Y,S.value).toFixed($.value))}function M(t){var h;const q=l.direction==="vertical",Y=q?"top":"left",de=q?"height":"width",ce=q?"clientY":"clientX",{[Y]:ve,[de]:me}=(h=m.value)==null?void 0:h.$el.getBoundingClientRect(),be=He(t,ce);let Q=Math.min(Math.max((be-ve-o.value)/me,0),1)||0;return(q||y.value)&&(Q=1-Q),T(d.value+Q*(S.value-d.value))}let _=!1;const b=t=>{_||(o.value=0,a(M(t))),x.value=!1,_=!1,o.value=0},A=t=>{c.value=i(t),c.value&&(c.value.focus(),x.value=!0,c.value.contains(t.target)?(_=!0,o.value=je(t,c.value,l.direction)):(o.value=0,u(M(t))))},F={passive:!0,capture:!0};function E(t){_=!0,u(M(t))}function v(t){t.stopPropagation(),t.preventDefault(),b(t),window.removeEventListener("mousemove",E,F),window.removeEventListener("mouseup",v)}function f(t){var h;b(t),window.removeEventListener("touchmove",E,F),(h=t.target)==null||h.removeEventListener("touchend",f)}function U(t){var h;A(t),window.addEventListener("touchmove",E,F),(h=t.target)==null||h.addEventListener("touchend",f,{passive:!1})}function K(t){t.preventDefault(),A(t),window.addEventListener("mousemove",E,F),window.addEventListener("mouseup",v,{passive:!1})}const B=t=>{const h=(t-d.value)/(S.value-d.value)*100;return le(isNaN(h)?0:h,0,100)},W=s(()=>l.ticks?Array.isArray(l.ticks)?l.ticks.map(t=>({value:t,position:B(t),label:t.toString()})):Object.keys(l.ticks).map(t=>({value:parseFloat(t),position:B(parseFloat(t)),label:l.ticks[t]})):C.value!==1/0?ye(C.value+1).map(t=>{const h=d.value+t*g.value;return{value:h,position:B(h)}}):[]),X=s(()=>W.value.some(t=>{let{label:h}=t;return!!h})),te={activeThumbRef:c,color:N(l,"color"),decimals:$,disabled:R,direction:N(l,"direction"),elevation:N(l,"elevation"),hasLabels:X,horizontalDirection:V,isReversed:y,min:d,max:S,mousePressed:x,numTicks:C,onSliderMousedown:K,onSliderTouchstart:U,parsedTicks:W,parseMouseMove:M,position:B,readonly:N(l,"readonly"),rounded:N(l,"rounded"),roundValue:T,showTicks:N(l,"showTicks"),startOffset:o,step:g,thumbSize:L,thumbColor:P,thumbLabel:N(l,"thumbLabel"),ticks:N(l,"ticks"),tickSize:w,trackColor:r,trackContainerRef:m,trackFillColor:z,trackSize:p,vertical:D};return pe(ee,te),te},Ye=j({name:"VSliderThumb",directives:{Ripple:Se},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0}},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a,emit:u}=l;const i=se(ee);if(!i)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:k,step:y,vertical:V,disabled:d,thumbSize:S,thumbLabel:g,direction:$,readonly:L,elevation:w,isReversed:p,horizontalDirection:C,mousePressed:R,decimals:D}=i,{textColorClasses:P,textColorStyles:r}=we(k),{pageup:z,pagedown:x,end:o,home:m,left:c,right:T,down:M,up:_}=Te,b=[z,x,o,m,c,T,M,_],A=s(()=>y.value?[1,2,3]:[1,5,10]);function F(v,f){if(!b.includes(v.key))return;v.preventDefault();const U=y.value||.1,K=(e.max-e.min)/U;if([c,T,M,_].includes(v.key)){const W=(p.value?[c,_]:[T,_]).includes(v.key)?1:-1,X=v.shiftKey?2:v.ctrlKey?1:0;f=f+W*U*A.value[X]}else if(v.key===m)f=e.min;else if(v.key===o)f=e.max;else{const B=v.key===x?1:-1;f=f-B*U*(K>100?K/10:10)}return Math.max(e.min,Math.min(e.max,f))}function E(v){const f=F(v,e.modelValue);f!=null&&u("update:modelValue",f)}return H(()=>{var v;const f=I(V.value?100-e.position:e.position,"%"),U=V.value?"block":"inline",{elevationClasses:K}=Ce(s(()=>d.value?void 0:w.value));return n("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&R.value}],style:{[`inset-${U}-start`]:`calc(${f} - var(--v-slider-thumb-size) / 2)`,"--v-slider-thumb-size":I(S.value),direction:V.value?void 0:C.value},role:"slider",tabindex:d.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":L.value,"aria-orientation":$.value,onKeydown:L.value?void 0:E},[n("div",{class:["v-slider-thumb__surface",P.value,K.value],style:{...r.value}},null),ae(n("div",{class:["v-slider-thumb__ripple",P.value],style:r.value},null),[[_e("ripple"),!0,null,{circle:!0,center:!0}]]),n(Ve,{origin:"bottom center"},{default:()=>{var B;return[ae(n("div",{class:"v-slider-thumb__label-container"},[n("div",{class:["v-slider-thumb__label"]},[n("div",null,[(B=(v=a["thumb-label"])==null?void 0:v.call(a,{modelValue:e.modelValue}))!=null?B:e.modelValue.toFixed(y.value?D.value:1)])])]),[[xe,g.value&&e.focused||g.value==="always"]])]}})])}),{}}});const Qe=j({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0}},emits:{},setup(e,l){let{slots:a}=l;const u=se(ee);if(!u)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:i,horizontalDirection:k,parsedTicks:y,rounded:V,showTicks:d,tickSize:S,trackColor:g,trackFillColor:$,trackSize:L,vertical:w,min:p,max:C}=u,{roundedClasses:R}=Fe(V),{backgroundColorClasses:D,backgroundColorStyles:P}=ne($),{backgroundColorClasses:r,backgroundColorStyles:z}=ne(g),x=s(()=>`inset-${w.value?"block-end":"inline-start"}`),o=s(()=>w.value?"height":"width"),m=s(()=>({[x.value]:"0%",[o.value]:"100%"})),c=s(()=>e.stop-e.start),T=s(()=>({[x.value]:I(e.start,"%"),[o.value]:I(c.value,"%")})),M=s(()=>(w.value?y.value.slice().reverse():y.value).map((b,A)=>{var f;var F;const E=w.value?"bottom":"margin-inline-start",v=b.value!==p.value&&b.value!==C.value?I(b.position,"%"):void 0;return n("div",{key:b.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":b.position>=e.start&&b.position<=e.stop,"v-slider-track__tick--first":b.value===p.value,"v-slider-track__tick--last":b.value===C.value}],style:{[E]:v}},[(b.label||a["tick-label"])&&n("div",{class:"v-slider-track__tick-label"},[(f=(F=a["tick-label"])==null?void 0:F.call(a,{tick:b,index:A}))!=null?f:b.label])])}));return H(()=>n("div",{class:["v-slider-track",R.value],style:{"--v-slider-track-size":I(L.value),"--v-slider-tick-size":I(S.value),direction:w.value?void 0:k.value}},[n("div",{class:["v-slider-track__background",r.value,{"v-slider-track__background--opacity":!!i.value||!$.value}],style:{...m.value,...z.value}},null),n("div",{class:["v-slider-track__fill",D.value],style:{...T.value,...P.value}},null),d.value&&n("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":d.value==="always"}]},[M.value])])),{}}}),tt=j({name:"VSlider",props:{...$e(),...We(),...oe(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const u=O(),{min:i,max:k,mousePressed:y,roundValue:V,onSliderMousedown:d,onSliderTouchstart:S,trackContainerRef:g,position:$,hasLabels:L,readonly:w}=Xe({props:e,handleSliderMouseUp:r=>p.value=V(r),handleMouseMove:r=>p.value=V(r),getActiveThumb:()=>{var r;return(r=u.value)==null?void 0:r.$el}}),p=G(e,"modelValue",void 0,r=>{const z=typeof r=="string"?parseFloat(r):r==null?i.value:r;return V(z)}),{isFocused:C,focus:R,blur:D}=ie(e),P=s(()=>$(p.value));return H(()=>{const[r,z]=re(e),x=!!(e.label||a.label||a.prepend);return n(ue,J({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||L.value,"v-slider--focused":C.value,"v-slider--pressed":y.value,"v-slider--disabled":e.disabled}]},r,{focused:C.value}),{...a,prepend:x?o=>{var T;var m,c;return n(Pe,null,[((T=(m=a.label)==null?void 0:m.call(a,o))!=null?T:e.label)?n(ze,{class:"v-slider__label",text:e.label},null):void 0,(c=a.prepend)==null?void 0:c.call(a,o)])}:void 0,default:o=>{let{id:m}=o;return n("div",{class:"v-slider__container",onMousedown:w.value?void 0:d,onTouchstartPassive:w.value?void 0:S},[n("input",{id:m.value,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:p.value},null),n(Qe,{ref:g,start:0,stop:P.value},{"tick-label":a["tick-label"]}),n(Ye,{ref:u,focused:C.value,min:i.value,max:k.value,modelValue:p.value,"onUpdate:modelValue":c=>p.value=c,position:P.value,elevation:e.elevation,onFocus:R,onBlur:D},{"thumb-label":a["thumb-label"]})])}})}),{}}});const lt=j({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...oe(),...Me()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,l){let{attrs:a,slots:u}=l;const i=G(e,"indeterminate"),k=G(e,"modelValue"),{loaderClasses:y}=Le(e),{isFocused:V,focus:d,blur:S}=ie(e),g=s(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),$=Be(),L=s(()=>e.id||`switch-${$}`);function w(){i.value&&(i.value=!1)}return H(()=>{const[p,C]=Re(a),[R,D]=re(e),[P,r]=Ne(e),z=O();function x(){var o,m;(o=z.value)==null||(m=o.input)==null||m.click()}return n(ue,J({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":i.value},y.value]},p,R,{id:L.value,focused:V.value}),{...u,default:o=>{let{id:m,isDisabled:c,isReadonly:T,isValid:M}=o;return n(De,J({ref:z},P,{modelValue:k.value,"onUpdate:modelValue":[_=>k.value=_,w],id:m.value,type:"checkbox","aria-checked":i.value?"mixed":void 0,disabled:c.value,readonly:T.value,onFocus:d,onBlur:S},C),{...u,default:()=>n("div",{class:"v-switch__track",onClick:x},null),input:_=>{let{textColorClasses:b,textColorStyles:A}=_;return n("div",{class:["v-switch__thumb",b.value],style:A.value},[e.loading&&n(Ae,{name:"v-switch",active:!0,color:M.value===!1?void 0:g.value},{default:F=>u.loader?u.loader(F):n(Ee,{active:F.isActive,color:F.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});const at=j({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Ie(),...Ue(),...qe()},setup(e,l){let{slots:a}=l;const{themeClasses:u}=Ke(e),{densityClasses:i}=Oe(e);return H(()=>{var k,y;return n(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},u.value,i.value]},{default:()=>[(k=a.top)==null?void 0:k.call(a),a.default&&n("div",{class:"v-table__wrapper",style:{height:I(e.height)}},[n("table",null,[a.default()])]),(y=a.bottom)==null?void 0:y.call(a)]})}),{}}});export{at as V,tt as a,lt as b,Ze as c,Je as g,et as u};
