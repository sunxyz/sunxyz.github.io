if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"994e075269ed09af2b42d35f22208d61"},{url:"assets/About.8b017fd6.js",revision:null},{url:"assets/Approve.77b19dbf.js",revision:null},{url:"assets/Article.381fa29b.js",revision:null},{url:"assets/Channel.4308ea83.css",revision:null},{url:"assets/Channel.f85cc433.js",revision:null},{url:"assets/Home.c6886e61.js",revision:null},{url:"assets/index.deb1dec6.js",revision:null},{url:"assets/index.e915ee60.css",revision:null},{url:"assets/IndexView.405bdbc4.css",revision:null},{url:"assets/IndexView.eb3fa83c.js",revision:null},{url:"assets/Login.9907c538.js",revision:null},{url:"assets/Reader.2631de1e.css",revision:null},{url:"assets/Reader.f4ba70e7.js",revision:null},{url:"assets/Rss2NewLetter.65a0a6dc.js",revision:null},{url:"assets/Rss2NewLetter.9970ec32.css",revision:null},{url:"assets/Settings.8840596a.css",revision:null},{url:"assets/Settings.948d897e.js",revision:null},{url:"assets/Setup.3843eb74.css",revision:null},{url:"assets/Setup.9a114abb.js",revision:null},{url:"assets/VChip.83394375.css",revision:null},{url:"assets/VChip.ca49341e.js",revision:null},{url:"assets/VLayout.529df013.css",revision:null},{url:"assets/VLayout.8eec15dc.js",revision:null},{url:"assets/VSnackbar.9fab0690.js",revision:null},{url:"assets/VSnackbar.e02ab79b.css",revision:null},{url:"assets/VTable.6468bdec.js",revision:null},{url:"assets/VTable.e0e53970.css",revision:null},{url:"assets/VTextField.d7aa4b67.js",revision:null},{url:"assets/VTextField.e139ec62.css",revision:null},{url:"assets/VWindowItem.ec25d762.js",revision:null},{url:"assets/VWindowItem.ed72681f.css",revision:null},{url:"assets/Welcome.04e42365.js",revision:null},{url:"assets/Welcome.3ede08c3.css",revision:null},{url:"index.html",revision:"7c47ec0cb587a3e2ba224331354229e8"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
