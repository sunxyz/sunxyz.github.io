if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>i(e,r),u={module:{uri:r},exports:o,require:t};s[r]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About.3a723da0.js",revision:null},{url:"assets/Channel.18305c06.js",revision:null},{url:"assets/index.65fa29aa.js",revision:null},{url:"assets/index.6efdc6c0.css",revision:null},{url:"assets/Setup.25ac29ae.js",revision:null},{url:"assets/Setup.689c9b7f.css",revision:null},{url:"assets/VChip.3d5fda60.css",revision:null},{url:"assets/VChip.4c33c3fb.js",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"b6b57cd7bc42d0688155ea802b88328f"},{url:"favicon.ico",revision:"b433ff779a5f2c4e8adcad748bd2e704"},{url:"logo.svg",revision:"45947051174b076461ec0e4380421ac3"},{url:"manifest.webmanifest",revision:"d025600e9b3f166ffcdee59b8c3c2ffb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
