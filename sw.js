if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About.464c79a7.css",revision:null},{url:"assets/About.e41b1eaa.js",revision:null},{url:"assets/Approve.6fe1a9a0.js",revision:null},{url:"assets/Article.b1d3ca22.css",revision:null},{url:"assets/Article.d466e835.js",revision:null},{url:"assets/Channel.2ef6fdcb.css",revision:null},{url:"assets/Channel.b22be990.js",revision:null},{url:"assets/index.1b2498f8.css",revision:null},{url:"assets/index.e7d006d4.js",revision:null},{url:"assets/Login.b50ed4a9.js",revision:null},{url:"assets/Rss2NewLetter.79f4e3b1.css",revision:null},{url:"assets/Rss2NewLetter.df380b29.js",revision:null},{url:"assets/Setup.25fd78fd.js",revision:null},{url:"assets/Setup.59e1f1a7.css",revision:null},{url:"assets/VChip.3d5fda60.css",revision:null},{url:"assets/VChip.449addd3.js",revision:null},{url:"assets/VLayout.d471d4f2.css",revision:null},{url:"assets/VLayout.eae27969.js",revision:null},{url:"assets/VTable.7ad69ace.css",revision:null},{url:"assets/VTable.9a06161f.js",revision:null},{url:"assets/VTextField.cfba6459.css",revision:null},{url:"assets/VTextField.d836dd72.js",revision:null},{url:"assets/VWindowItem.612d063a.js",revision:null},{url:"assets/VWindowItem.de61928e.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"8c6f9c93384dab4ddd8923ffceebe88c"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
