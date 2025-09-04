'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "26c41346afd66bce2b78f9f8ba8913a0",
"index.html": "9ab522c5479188983d0441ad811f29a2",
"/": "9ab522c5479188983d0441ad811f29a2",
"main.dart.js": "28d22e0c7115b9df4ba6908fd1c37ac3",
"version.json": "57d9c83a2a4ea977b16d1cd577a6016b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "513c0dd49e6e4cac3bf62964a257a539",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "c2d43e32437337f7034c9b579a1ef777",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/logs/refs/remotes/origin/master": "93f29a1b3af6e201356201d383ff1089",
".git/logs/refs/heads/master": "087d4cb6bc24eb0ad33532ef92908f6b",
".git/logs/HEAD": "087d4cb6bc24eb0ad33532ef92908f6b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/04/03658ff0112aded4e0ae614120e6733f086bf3": "6ccfa4350e62a4322e17cc0a65753a0d",
".git/objects/4d/e2f5c938c2cb05ad07a838bd47edd6af015592": "f34522c6d6865a3f8d6ee26814599652",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "31299a304c14aab94382bc5c25340899",
".git/objects/db/824408962ec933e0b1c450bc7d40492ac4275c": "5cfad3d3a78017183ec8349527d6000e",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "e27c9cd0a77a9a4a981674b81a66db4c",
".git/objects/66/6377f137579cc187d59235eb95f239e7b93d92": "7a7e539a43c2db412c2758570f3d03a7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/de/aa4aaeb313c7b68a6794bba4fe31ab3a89ba77": "ee465ff8c9032b4012a0d9514cf6713a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "aa71138ce548c21c80b5225845cbacb1",
".git/objects/10/46bcb507e2ba6eb5319720b2c0fcb69b7f1125": "4ac41187a1a7167a88f5ddfbf0c60938",
".git/objects/b3/d1db88dbc05fa9f3eeae9bc7834b753f915af4": "68fa4aca2658e7ab06c62ed6b473c725",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "e575a1560308c6646cde077e074242f1",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "aa248fbf7bb1d394559bfcb1162b8075",
".git/objects/3f/dd5693cca8ff5431ffd22fca72078d964e03d4": "a0ca2e29561d1dd72abeaea3219bdde4",
".git/objects/f7/6ea8b12edff9faa74191bcf918e2ee191c057e": "4cf71013597ac16ee44782094dc1fbd3",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "07e81c3cddd0d7ab9ecbc1e383a2ae98",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "206dcac9a8a50fd5a0b614c1afdb7b98",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "d857a66d09b23a31ac4d920adcbbaabd",
".git/objects/87/c93d5fe8ce813b902afb1e71d9e0422b2fd8a3": "dbc866dfd5be50b844e42d416c6a3ddd",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "c8dd26d8be979e7b62b479b8dd2631b6",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "faba846b8dd722cb7ada4096cc380cbc",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "ded2d5a9080c3068931948be8de3a99d",
".git/objects/b2/c45d3729289b18d6b7e74c7c8e51a13af54f4c": "065571d3be456d85021228fe5edfbd4b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "2824e73a43621b912bde31c6932a711f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "131eb29f9c2e892454609edcf3c20f9e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/a5/933a5a31c93dfc63d3d63e865192b69b7ffdf2": "c62227b9d15227ed15cb0448844d21b9",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "d7a40a7470708108427aa9607d5f9e52",
".git/index": "a274ac23bc5d028429a5dac232b95092",
".git/refs/remotes/origin/master": "caf4179462aeb21467cc06a952f54c53",
".git/refs/heads/master": "caf4179462aeb21467cc06a952f54c53",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"icons/Icon-512.png": "71f77e44dc8afa02a1f5097964671970",
"icons/Icon-192.png": "513c0dd49e6e4cac3bf62964a257a539",
"icons/Icon-maskable-192.png": "513c0dd49e6e4cac3bf62964a257a539",
"icons/Icon-maskable-512.png": "71f77e44dc8afa02a1f5097964671970",
"manifest.json": "ca4b271de7838606423b6600a2ed2d43"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
