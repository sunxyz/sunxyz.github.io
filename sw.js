if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About.3706c116.js",revision:null},{url:"assets/About.464c79a7.css",revision:null},{url:"assets/Approve.f85e73b6.js",revision:null},{url:"assets/Article.1fbb26b3.js",revision:null},{url:"assets/Channel.009fe887.js",revision:null},{url:"assets/Channel.bd7bb084.css",revision:null},{url:"assets/Home.ed5887f6.js",revision:null},{url:"assets/index.12b58c3a.js",revision:null},{url:"assets/index.a812da07.css",revision:null},{url:"assets/IndexView.55e98b74.js",revision:null},{url:"assets/IndexView.d3cb6833.css",revision:null},{url:"assets/Login.52180a87.js",revision:null},{url:"assets/Reader.640d1256.css",revision:null},{url:"assets/Reader.ba13f537.js",revision:null},{url:"assets/Rss2NewLetter.7e2333a1.css",revision:null},{url:"assets/Rss2NewLetter.ce633b66.js",revision:null},{url:"assets/Setup.b5f97cb3.js",revision:null},{url:"assets/Setup.ee4a95b3.css",revision:null},{url:"assets/VLayout.3f460062.js",revision:null},{url:"assets/VLayout.529df013.css",revision:null},{url:"assets/VSnackbar.12f61b93.js",revision:null},{url:"assets/VSnackbar.e02ab79b.css",revision:null},{url:"assets/VTable.09701fd1.css",revision:null},{url:"assets/VTable.75a9baf9.js",revision:null},{url:"assets/VTextField.e139ec62.css",revision:null},{url:"assets/VTextField.ed6ffd1e.js",revision:null},{url:"assets/VWindowItem.ee2d9743.js",revision:null},{url:"assets/VWindowItem.f3cb39f8.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"2e1969f2ed6fac6d62ebaa9b1d796601"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
