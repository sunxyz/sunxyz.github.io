if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(n.map((s=>a[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About.c0281ae4.js",revision:null},{url:"assets/About.f80a4145.css",revision:null},{url:"assets/Approve.73bbc42b.js",revision:null},{url:"assets/Article.2911353b.js",revision:null},{url:"assets/Channel.7b451659.js",revision:null},{url:"assets/Channel.9b9df701.css",revision:null},{url:"assets/Home.5aec5822.js",revision:null},{url:"assets/index.87c619b5.css",revision:null},{url:"assets/index.cc393014.js",revision:null},{url:"assets/IndexView.270716db.js",revision:null},{url:"assets/IndexView.68e3a427.css",revision:null},{url:"assets/Login.4da56c96.js",revision:null},{url:"assets/Reader.03142411.css",revision:null},{url:"assets/Reader.8c3bac47.js",revision:null},{url:"assets/Rss2NewLetter.74acb7e9.js",revision:null},{url:"assets/Rss2NewLetter.7f714424.css",revision:null},{url:"assets/Settings.0ad6a316.css",revision:null},{url:"assets/Settings.12e65a77.js",revision:null},{url:"assets/Setup.35da69a4.js",revision:null},{url:"assets/Setup.ee4a95b3.css",revision:null},{url:"assets/VLayout.529df013.css",revision:null},{url:"assets/VLayout.c1100865.js",revision:null},{url:"assets/VSnackbar.387a140e.js",revision:null},{url:"assets/VSnackbar.e02ab79b.css",revision:null},{url:"assets/VTable.4ea9ff9b.css",revision:null},{url:"assets/VTable.c921ba97.js",revision:null},{url:"assets/VTextField.6a1e95a7.js",revision:null},{url:"assets/VTextField.e139ec62.css",revision:null},{url:"assets/VWindowItem.d29149d5.js",revision:null},{url:"assets/VWindowItem.f3cb39f8.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"a6b2d7714c8e5025b2bae1ca22a4c1e3"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
