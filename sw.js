if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About.debb64ce.js",revision:null},{url:"assets/Approve.20b3afb8.js",revision:null},{url:"assets/Article.2ac61c1b.js",revision:null},{url:"assets/Article.5038ea60.css",revision:null},{url:"assets/Channel.2ef6fdcb.css",revision:null},{url:"assets/Channel.f5164e8f.js",revision:null},{url:"assets/index.05156ed9.css",revision:null},{url:"assets/index.f457be90.js",revision:null},{url:"assets/Login.fd1263b7.js",revision:null},{url:"assets/Setup.83d82f76.js",revision:null},{url:"assets/Setup.a5c3bc52.css",revision:null},{url:"assets/VChip.3d5fda60.css",revision:null},{url:"assets/VChip.8e45a984.js",revision:null},{url:"assets/VLayout.819d80fd.js",revision:null},{url:"assets/VLayout.d471d4f2.css",revision:null},{url:"assets/VTabs.40306301.js",revision:null},{url:"assets/VTabs.5a420748.css",revision:null},{url:"assets/VTextField.75d89ed8.js",revision:null},{url:"assets/VTextField.cfba6459.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"ca1a331a25f1c1fc6a158d9a1384993a"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
