if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let l={};const o=e=>i(e,c),f={module:{uri:c},exports:l,require:o};s[c]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"3c3f60f1d2d5424558c05c973cd045db"},{url:"assets/Dynamic.843f1447.js",revision:null},{url:"assets/Dynamic.b24a8725.css",revision:null},{url:"assets/index.63e8394a.css",revision:null},{url:"assets/index.bcca5cbe.js",revision:null},{url:"assets/RSSHub.2ba3a750.js",revision:null},{url:"assets/RSSHub.8f5e35a9.css",revision:null},{url:"assets/scrollbar.bb92d807.css",revision:null},{url:"assets/vendor.412f3cc9.css",revision:null},{url:"assets/vendor.5d3a6b7a.js",revision:null},{url:"index.html",revision:"0a7f2ed42d9c2ac02fe8b65f92cf1ee6"},{url:"404.html",revision:"3c3f60f1d2d5424558c05c973cd045db"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"favicon.ico",revision:"4eef7cd3f65dc33ac2b311871b46f345"},{url:"browserconfig.xml",revision:"a96040011ceb50cbe526c9eaf0c202cb"},{url:"img/favicon.svg",revision:"64419fc1b69af0e979b83fc0b7443cc9"},{url:"img/favicon_404.ico",revision:"1cbf71ea6ee5f9889a6212e7be5c4bc7"},{url:"img/favicon-16x16.png",revision:"e01f4b64dc9b4561a1164d1ae477f24d"},{url:"img/favicon-32x32.png",revision:"b3aef39a84feee483f6e26932c1f5b4c"},{url:"img/mstile-150x150.png",revision:"25eb55d0f791f326b0812d89d7f3b6d9"},{url:"img/apple-touch-icon.png",revision:"d2a48f052d14e31691a744e8d6893140"},{url:"img/pwa-192x192.png",revision:"511ce1fc5d154f6ce88c670c1597322e"},{url:"img/pwa-512x512.png",revision:"179e1d6ffced1be6678927793b99b5ff"},{url:"manifest.webmanifest",revision:"b001977330df8f927de4fb93bdb02ed8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
