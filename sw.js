if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About.464c79a7.css",revision:null},{url:"assets/About.b9b21008.js",revision:null},{url:"assets/Approve.78eb6a03.js",revision:null},{url:"assets/Article.eb5c355c.js",revision:null},{url:"assets/Channel.bd7bb084.css",revision:null},{url:"assets/Channel.c6ea1cdb.js",revision:null},{url:"assets/Home.c245f4b9.js",revision:null},{url:"assets/index.38308ce9.js",revision:null},{url:"assets/index.bd726051.css",revision:null},{url:"assets/IndexView.c2b5f9f7.js",revision:null},{url:"assets/IndexView.d1240741.css",revision:null},{url:"assets/Login.4103770f.js",revision:null},{url:"assets/Reader.9a1115d9.js",revision:null},{url:"assets/Reader.a4d2143d.css",revision:null},{url:"assets/Rss2NewLetter.1e33a477.css",revision:null},{url:"assets/Rss2NewLetter.626e070b.js",revision:null},{url:"assets/Setup.ee4a95b3.css",revision:null},{url:"assets/Setup.fd5c950f.js",revision:null},{url:"assets/VLayout.529df013.css",revision:null},{url:"assets/VLayout.ab904e52.js",revision:null},{url:"assets/VSnackbar.91c21feb.js",revision:null},{url:"assets/VSnackbar.e02ab79b.css",revision:null},{url:"assets/VTable.09701fd1.css",revision:null},{url:"assets/VTable.ebebee74.js",revision:null},{url:"assets/VTextField.b478e2fa.js",revision:null},{url:"assets/VTextField.e139ec62.css",revision:null},{url:"assets/VWindowItem.1c169f5f.js",revision:null},{url:"assets/VWindowItem.f3cb39f8.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"5c96309b812a33d39ae1fa3e2db50f7b"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
