if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About.2fc91541.css",revision:null},{url:"assets/About.446f6d80.js",revision:null},{url:"assets/Approve.223fa6e5.js",revision:null},{url:"assets/Article.5038ea60.css",revision:null},{url:"assets/Article.680881a2.js",revision:null},{url:"assets/Channel.8ff7ccd3.js",revision:null},{url:"assets/index.2a364648.css",revision:null},{url:"assets/index.beb05444.js",revision:null},{url:"assets/Login.f1f0d903.js",revision:null},{url:"assets/Setup.5a420748.css",revision:null},{url:"assets/Setup.9542343b.js",revision:null},{url:"assets/VChip.3d5fda60.css",revision:null},{url:"assets/VChip.772c1bc6.js",revision:null},{url:"assets/VLayout.23845a1e.js",revision:null},{url:"assets/VLayout.d471d4f2.css",revision:null},{url:"assets/VTextField.36eee5d2.css",revision:null},{url:"assets/VTextField.84e918a1.js",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"80d86e239e7978a7bcf9d2701ee07726"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
