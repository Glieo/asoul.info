if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let c={};const o=e=>i(e,l),t={module:{uri:l},exports:c,require:o};s[l]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"a7373ab4c2ffe52e822b4234e3934693"},{url:"assets/Dynamic.9114cfda.js",revision:null},{url:"assets/Dynamic.ebc500fe.css",revision:null},{url:"assets/el-scrollbar.82bf623d.css",revision:null},{url:"assets/index.2dfd288f.css",revision:null},{url:"assets/index.9c44d24a.js",revision:null},{url:"assets/RSSHub.4ce65a62.js",revision:null},{url:"assets/RSSHub.76917041.css",revision:null},{url:"assets/vendor.250c3e1e.css",revision:null},{url:"assets/vendor.f17ed88c.js",revision:null},{url:"index.html",revision:"25e8fee2d34f2382e26abbe779f578c9"},{url:"favicon.svg",revision:"64419fc1b69af0e979b83fc0b7443cc9"},{url:"favicon.ico",revision:"4eef7cd3f65dc33ac2b311871b46f345"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"d2a48f052d14e31691a744e8d6893140"},{url:"pwa-192x192.png",revision:"511ce1fc5d154f6ce88c670c1597322e"},{url:"pwa-512x512.png",revision:"179e1d6ffced1be6678927793b99b5ff"},{url:"manifest.webmanifest",revision:"ad8f96935635d52ba07cb8ec442d4fc4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
