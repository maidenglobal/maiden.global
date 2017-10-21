"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","47f6e903769832be2dadbe87eba51355"],["/static/css/main.cc2b4be7.css","ccbc1851a8e80df3cb3aac2943aee17c"],["/static/js/main.b7d2557e.js","b3caf9039746ca512d624511d962b8ea"],["/static/media/01.d33a2e4d.PNG","d33a2e4d0bff24d7d4354076309aa795"],["/static/media/02.8955ce4e.PNG","8955ce4ef6a7e314b233bbd2139f4a08"],["/static/media/03.c0bf19f1.PNG","c0bf19f11c0c8be1bfcc163eae6fd503"],["/static/media/04.f11cbed6.PNG","f11cbed60469bca0ff27a6b856e10746"],["/static/media/05.485d928e.PNG","485d928ec35dc5d2fd846f55ec9e133f"],["/static/media/06.2c38209f.PNG","2c38209fdf5cc452e733eeefc78d133a"],["/static/media/07.d0d1be8c.PNG","d0d1be8ca534ba201c1994b0ba074638"],["/static/media/08.a919d380.PNG","a919d38068af07b6d051c05b5be45cf1"],["/static/media/09.a89febfa.PNG","a89febfa77c66350c16d5a3e7e4ebabe"],["/static/media/10.536c8b58.PNG","536c8b58a0d5efc6ff7df3272216d8b0"],["/static/media/11.702a5f33.PNG","702a5f33f2ad80c9dceff4fff8272f8a"],["/static/media/12.35d9abf9.PNG","35d9abf99b7454f3cb6c49bb18196b90"],["/static/media/logo.c68887ed.png","c68887ed968b7c7b44d8cf02d952d769"],["/static/media/raine.79e16ece.jpg","79e16ecefc28e8fb43cd160018b70e7b"],["/static/media/shira.9157b66b.jpg","9157b66b0239bcf8b54a1f9252a6b8e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});