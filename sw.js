if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"994e075269ed09af2b42d35f22208d61"},{url:"assets/About.f5ea4bd9.js",revision:null},{url:"assets/Approve.ca72f6e0.js",revision:null},{url:"assets/Article.10812b4a.js",revision:null},{url:"assets/Channel.4308ea83.css",revision:null},{url:"assets/Channel.a64d88e1.js",revision:null},{url:"assets/Home.b485305a.js",revision:null},{url:"assets/index.61bd2be4.js",revision:null},{url:"assets/index.770d7748.css",revision:null},{url:"assets/IndexView.5b1db1e2.js",revision:null},{url:"assets/IndexView.8faeaea2.css",revision:null},{url:"assets/Login.be2360fc.js",revision:null},{url:"assets/Reader.040aca54.js",revision:null},{url:"assets/Reader.2631de1e.css",revision:null},{url:"assets/Rss2NewLetter.9970ec32.css",revision:null},{url:"assets/Rss2NewLetter.9e78cfeb.js",revision:null},{url:"assets/Settings.4ec13a65.js",revision:null},{url:"assets/Settings.8840596a.css",revision:null},{url:"assets/Setup.3843eb74.css",revision:null},{url:"assets/Setup.f3340f31.js",revision:null},{url:"assets/VChip.83394375.css",revision:null},{url:"assets/VChip.d75b0f0e.js",revision:null},{url:"assets/VLayout.0aae14cf.js",revision:null},{url:"assets/VLayout.529df013.css",revision:null},{url:"assets/VSnackbar.0371c504.js",revision:null},{url:"assets/VSnackbar.e02ab79b.css",revision:null},{url:"assets/VTable.b207768e.js",revision:null},{url:"assets/VTable.e0e53970.css",revision:null},{url:"assets/VTextField.dc7f9d52.js",revision:null},{url:"assets/VTextField.e139ec62.css",revision:null},{url:"assets/VWindowItem.796fea28.js",revision:null},{url:"assets/VWindowItem.ed72681f.css",revision:null},{url:"assets/Welcome.3ede08c3.css",revision:null},{url:"assets/Welcome.eb4f9aa1.js",revision:null},{url:"index.html",revision:"ac927b32030a5d1f8973df738e57824a"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
