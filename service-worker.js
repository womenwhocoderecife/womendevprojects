"use strict";var precacheConfig=[["/womendevprojects/index.html","1dfecbfaaf3824aa56fb78c6d07153fd"],["/womendevprojects/static/css/main.46c3713d.css","97f7f7864f0c0a203e7f6f85625717d7"],["/womendevprojects/static/js/main.63614d67.js","0a9b45bf8126b57bb7fbf1166ae4b35a"],["/womendevprojects/static/media/banner.c71b3e37.png","c71b3e37f2bb8c6fcb6d250ef0fa3858"],["/womendevprojects/static/media/contact.228c2a1d.jpg","228c2a1dfcc61b9aadd3f05082c80597"],["/womendevprojects/static/media/github.51a7adde.svg","51a7addef71f07edaba991938766e10a"],["/womendevprojects/static/media/group.90f18e46.svg","90f18e460de4540d74d9a9fdb3286c5b"],["/womendevprojects/static/media/instagram.8a903bf9.svg","8a903bf93168ab06cd858e29018668f4"],["/womendevprojects/static/media/linkedin.291633af.svg","291633afab4f673dae3cc9670f687fbe"],["/womendevprojects/static/media/logo-wwcode.fc885ce9.png","fc885ce9fefee2ef21be1d5bfe2b92db"],["/womendevprojects/static/media/logo.6f535371.png","6f535371c873f64a181a2c2838e6d7f0"],["/womendevprojects/static/media/projects.933b26ba.jpeg","933b26baccecc1bf445c6e9666bc3de4"],["/womendevprojects/static/media/projects2.484058ac.jpg","484058ac44eef990fabe3a739a46153e"],["/womendevprojects/static/media/projects3.9e650b0b.jpg","9e650b0b7c6f4b00effd7195a3aeb941"],["/womendevprojects/static/media/rocket.04c509f2.svg","04c509f23436f0524ff42788ae05a4a3"],["/womendevprojects/static/media/statistic.58cad1fa.png","58cad1fa6f594d876afad4d56e540fff"],["/womendevprojects/static/media/tag.467368b6.svg","467368b6d22212a01aa01da2ceea4094"],["/womendevprojects/static/media/twitter.aa529f88.svg","aa529f88ff6fe6c3c301d73f9866e67a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/womendevprojects/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});