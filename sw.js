if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About.23165220.js",revision:null},{url:"assets/Approve.22bbbf5f.js",revision:null},{url:"assets/Article.44f8f63f.js",revision:null},{url:"assets/Channel.4f01ca52.css",revision:null},{url:"assets/Channel.ac2ab646.js",revision:null},{url:"assets/Home.baa54b92.js",revision:null},{url:"assets/index.4c6e4018.css",revision:null},{url:"assets/index.da991dec.js",revision:null},{url:"assets/IndexView.a018cb0b.js",revision:null},{url:"assets/IndexView.f9377010.css",revision:null},{url:"assets/Login.d8a059eb.js",revision:null},{url:"assets/Reader.051dac63.js",revision:null},{url:"assets/Reader.478b68c9.css",revision:null},{url:"assets/Rss2NewLetter.9970ec32.css",revision:null},{url:"assets/Rss2NewLetter.db4c3c65.js",revision:null},{url:"assets/Settings.61748bbc.js",revision:null},{url:"assets/Settings.71fb7622.css",revision:null},{url:"assets/Setup.3843eb74.css",revision:null},{url:"assets/Setup.714edf76.js",revision:null},{url:"assets/VChip.83394375.css",revision:null},{url:"assets/VChip.f1ef7669.js",revision:null},{url:"assets/VLayout.529df013.css",revision:null},{url:"assets/VLayout.a43c5a00.js",revision:null},{url:"assets/VSnackbar.11b46981.js",revision:null},{url:"assets/VSnackbar.e02ab79b.css",revision:null},{url:"assets/VTable.75e697ea.js",revision:null},{url:"assets/VTable.e0e53970.css",revision:null},{url:"assets/VTextField.bddcb21a.js",revision:null},{url:"assets/VTextField.e139ec62.css",revision:null},{url:"assets/VWindowItem.09e3a4ef.js",revision:null},{url:"assets/VWindowItem.ed72681f.css",revision:null},{url:"assets/Welcome.74f2b08e.css",revision:null},{url:"assets/Welcome.ef440464.js",revision:null},{url:"index.html",revision:"87d90003ed5b7438d6b08cfabb5942fc"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
