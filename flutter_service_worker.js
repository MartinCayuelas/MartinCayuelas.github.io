'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "6ea433be98f20474b7932e0bf911c1aa",
"/": "6ea433be98f20474b7932e0bf911c1aa",
"styles.css": "edb417a27240ac3f7c8487d165508dab",
"main.dart.js": "0e657950c7c62d85b4ce320b8a82ecd1",
"favicon.png": "cbc5b3ad6863283992b87bff28107242",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bdd8b18452b2f857665b014bfefe8406",
".git/config": "980d197880f4b42d68c8c38a73ea79d0",
".git/objects/68/2b1923e7b398ee023ce1c8c6e5088866d7e4c2": "3a308a899682472fd78446ba2985041d",
".git/objects/03/57b0baf3935b53ced14245165fb78910cfdf07": "94f0d13d4edc5d876c21d6266277ad6b",
".git/objects/9e/7edef9b3dbb892a40ffb4dc6a0e6951808e031": "ab5580b5970de64d355cc7b4d9fc3f73",
".git/objects/04/cd97a13dcabcc38cb1c57224237b2e09dadeef": "858eb8264717d642d6dead155d9801fe",
".git/objects/3d/e3a9a3b57fdc9cd5bf67c25593673baf8e9717": "c23e85215a6cc1e3ac1681ddafd50dd5",
".git/objects/0b/0758d307881f3205489b881cf6a9594567595f": "a0db0cdbce5754e2c5069e7b8c3a3115",
".git/objects/94/836e312de94c0ca7f850807179c4c3ed39c0f6": "0dd4ac9164a372e6f70048741b4e0761",
".git/objects/33/dcb0b2ef8c5cd74a19044512da134e92d763a8": "7b17af88ead0741277e75706192b9b00",
".git/objects/02/d9bfb200ba45101556bb54338d0a0a8b6f2b83": "2e3f9850f0c8466c5c5e54007a9d3799",
".git/objects/a3/4498444aeb35a5662605930122a6fe057a13c2": "17c26c6a38dba30312edd4267f1837a0",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "572376f3cf39c4d9adde50cc523f5dbf",
".git/objects/d9/c5cc292715fe3fddd44b6d9da29d382ed328cb": "77a7b5abb71c65f1cfd95edf641a4d3a",
".git/objects/df/09713f9d419ef91dcf928cc4de15a8b8286d8d": "2d9476cdb8c3bee382cfacd6cf954041",
".git/objects/d6/7d69dbe44521d45858ff759e351b7187b60d3c": "62e2cae726910514d71de60f4472d088",
".git/objects/d8/a5c99cfa2e61f6c9ee6218e40b3cadcb5d8dc5": "161f16466beef172405b6ece23a8f7e7",
".git/objects/ab/340fa1ea03e435e1514341d6b2da28704006a4": "c61facf2340929ce49c1420660fce6ca",
".git/objects/c0/436ed0f8538f98bada4cf484b3224500f2e9a9": "a42c737657dcadea92269b0c56a333fb",
".git/objects/ca/6bf1b4db87820efb2bd9c0981a29d179487d3d": "d11459d04d010b9e93e0613fb3e95c44",
".git/objects/ca/1ceee6cf2392398053c235494e7fcf71409876": "5ee86c3bb6686d1db524a43407d2ee44",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "d157d937d67e57140873a505d3a156f4",
".git/objects/fb/2f823e9fc48fc1aec257fd8462e0debccbbfbf": "db47af90f5d60f15b45290123c99d77a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "6358728b0f5f1027eeb127e5833b5abb",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "b1cc93357b191f704fd17ed63e1ba45e",
".git/objects/87/4f202a8b67c6c1b881151adf529ef44ee7d3c3": "404e9f60287164a09b17c998e58c9476",
".git/objects/28/9039b977ab76160d0200103a083bb4a2eaf418": "b25ceb4a746a5309b086bf2040d9aca9",
".git/objects/8f/97d501ececb434dd1060c432246efcc7fbaa6e": "4dfe50d98175b1f453e52f54cdf96053",
".git/objects/4c/efac27a58bf075b159ccf057b4fe5908946320": "dda2067b1b6381e525392ff16307d4a9",
".git/objects/4d/483724ddd6c36f266b73c3d86db770aa49b7d6": "44e3711735134f28e8c656f5157813f5",
".git/objects/44/4f4257a0f2ea730cb8efc7abf1ec83e3e1dad0": "156cda3d382ac83a4e44697b5a185ffd",
".git/objects/2f/44edee036103050d64a6fdeae3c01856289a99": "ba6df4eae53c56222397b906bf333e59",
".git/objects/43/fd0d8813f084d1827ec00ed60ea9421fae7fcb": "4b47738955b54742a9cee50ba824a831",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/c0851352ad2c2d472f6b23cda2f0cca937be3a": "9186439c00a38fe61aba4da92a5ab757",
".git/objects/38/9d90e2e28e20dca84ca4d6cb337effd956df45": "0ecfbcefc16a431a9746f2dc9763550d",
".git/objects/9a/e8829e1b0c2c1fa251553e1dea11d17bde900c": "7c88dc16429bd0807687a286314ec26e",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "d4c404e01e66d8f32979c6717687c0f2",
".git/objects/5d/a4fe67bce07aa2ca9a56c2ce55f81792b75a3d": "abbdbaf40ae6a2279b82fb22ec5b174b",
".git/objects/96/1765fa50427c201701304b4056b33a2cd220e2": "9f5c25e486272597a603b2fe76058cf2",
".git/objects/98/e40135b2172740528b163d83d96d399b4c47da": "49a99b8182e076202b5bf5c5408b5cbc",
".git/objects/3f/b3f5246b2a5225bdbb31e0889a1693c3d48836": "f4c8a43aae441c9a4dbc0184c38a92db",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "bda9dfddb5d9adffe2b639ef997cdc25",
".git/objects/52/7f8ee9c4484c6298d06c37787b400869baaa58": "dc3b68e109dbfee7b3a3e83e0fbbf732",
".git/objects/0f/1f6abd7112f962db2eeb2d6b86bf7f57afe541": "4b64e776a52a08f2c701d9e62329780a",
".git/objects/d4/8193791c04438413ae02fb0222bb310ea08ff9": "6524065576e3885c9f95d290cd13d471",
".git/objects/b6/5afb2b6ba530d9b6a20c697d00411f2742fc4a": "ee2218c35443b5b7d6820a89171a06c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/11f1f328dc207ec27f189c2b5003d4676ccb4f": "4c2ba57d7deb3df3d96fb3da2cb3efcc",
".git/objects/a8/5f2f5676b88139066f418ab438ba6ab1df6431": "bb4269db88e21fc67b36fbd251102638",
".git/objects/de/e1752294c7f3a98a184b5663285c37e184e933": "077a501e250a641bc807a8d2879948d9",
".git/objects/b0/cc74f15e9bd72ea93be7fd302af0ef5c7d5a66": "4f95591a28e01a86a829b5b6f57ac896",
".git/objects/ea/62ba8638884e6cc9a03ad39cbe476cc94e77c6": "a48a253cf752c7211af8e7f9bd09a22c",
".git/objects/f7/4d2fdce0752b1ca4e7222f1f492dafb57fc64a": "8aaabd458da6b16afd556c0be9336d86",
".git/objects/fa/a6c7df0e2f39135b81d4c3578185d4dc82cd42": "e0754680c6abcf0dc43075944a27b321",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/79/465c80c60f5cfc49a2260e291fe48ff5d1f27b": "cc35ff843662674415d06c93c98e2f0b",
".git/objects/77/a9ea842bbaffee7a1b9cb043609a8eae2f55ad": "d050ce1af64874b072c3ae6e6575f50a",
".git/objects/70/af65a50a74d95f47e5b81434c15a96a6ebd25d": "f0c5a076ef6427a324160ce7912abf83",
".git/objects/4a/f38e0f7e912a31865bfb3ceceeb84ecaebbfb6": "e9a6db577d01957870c6a192f29501e2",
".git/objects/8d/96c9df97ce42c5656a114d4eb5015a45cfd952": "ba45ebf924dd41c448eb12af0d0f375b",
".git/objects/15/8b57a8c56adcb556b4126acb03f363f3b96ad2": "664a978c5aa8de3a7dd0394b1563c58c",
".git/objects/1d/2c5f609ea489116105556b911d942dacc35d35": "85fabd53daa16e5b9717f987a715844e",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "71eed62aa06902e6ffb47101e201a08c",
".git/objects/13/3d7c1c4283d70c7e54be373c19a6301f55001f": "e985c2a529f2b3f270c3bedd9ef2bca3",
".git/objects/13/0d929d00817b76c0d0238713a8e1eed74846b9": "e354a8eff7f07a3a14a5e97406478978",
".git/objects/7f/1db80bf51f6651bb1d3271683add8c2b1a6ea9": "f1946662930edc4e3d4be9fbe79e04b3",
".git/objects/22/ecf80e1ad59b72013f20d561cb7be87401fa3b": "d51c1c8f168275f64c651789b7011036",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ab6ced1c1e46c47abe1077c47844740",
".git/logs/refs/heads/master": "4ab6ced1c1e46c47abe1077c47844740",
".git/logs/refs/remotes/origin/master": "3dc4b8727c544748228bbc0961b4a52e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "0f326e391b4a35fa3f6aa90ef1cd41d3",
".git/refs/remotes/origin/master": "0f326e391b4a35fa3f6aa90ef1cd41d3",
".git/index": "feb7e1f35e80607a9ec799de7c138d19",
".git/COMMIT_EDITMSG": "d5ba9edfa00496cbf7010ab032ef5ac4",
"assets/AssetManifest.json": "28a50ff3533ef5d70f2c9a0f7ff08154",
"assets/NOTICES": "e5e6d09b952ee0afc7098219def4fdba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/loadingImage.png": "edbfcee583619bf6f6146a7a7eaaaa79",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/images/flutter.png": "4282554fe7a617d7fc4974724ba3e5b7",
"assets/assets/images/logoPerso.png": "edbfcee583619bf6f6146a7a7eaaaa79"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
