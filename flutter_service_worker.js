'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2dc57d1a74eb5c7f35c26b9bc7242fbf",
".git/config": "7500cbc521f78f073bb4d7da50a249c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "22debe1fa712ce148068ab3463b9c47a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16201ebca0bd47604afbc48093ffc140",
".git/logs/refs/heads/master": "16201ebca0bd47604afbc48093ffc140",
".git/logs/refs/remotes/origin/master": "e2fc86b65a47beae0a038f762dd9e541",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1c/a6fc7e6581cf3c769577ce16a713fa5d5a04be": "631434d1d9c58ee61d318c1b33b1b9a5",
".git/objects/23/ed2b87f1e96afec79a9cbe8f71582d038da73c": "8c7c1bc34ae1c7d537efd92d6c3ede6f",
".git/objects/25/407fd83d553ae445b745d987465d74a78abc68": "5a2ca52dee4f19508c07026fabd328a0",
".git/objects/35/93b00f3276e635499fff66950ab5c815d5f7b2": "ee96265d91c763b3e25d1580d2287a13",
".git/objects/3f/aefa4f5453d9318d347d1cd32588a7292f25e9": "f998b8cc55ab243aad13559064b0dbbd",
".git/objects/40/aaad63d6e9e2be02a5760f2981a03d537c9356": "d03a2d9401d4848188cf579ba7be0893",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/59/7d20fe85b3da984bad5f59669d3df717079c84": "d1175219afc7de4e6fdc933e4cd5bc7d",
".git/objects/5a/ab8cf9c0126a01f6cbf5c25d89d90eb8d726c3": "de3459a3d1d3877039641aafa21060f4",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/69/7caea53577fc33b9c46ab0a62d4b98021237de": "e4dbb25b5e575fe751c6ffb302e11110",
".git/objects/6e/a800340aa431d3488368ee9c656c1c17f2ea18": "47ee8c1d92817f4fb37f941d1530043f",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/88465bd507ff08f2d018271345abc6af66b714": "4528d9d8b9bc134e7da81f8a6ad97df1",
".git/objects/81/e8e89235f66fae25cc2b88a19b058c47392081": "526a4cd541e21def3cf58a821f00d192",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/94/c21624631f3e3aeb99bb9ba680796536f185d5": "a6c5111aab08b51da7af8367132d5a55",
".git/objects/99/fb06e80e8c8b7739d7b4fda88c4b8a673c7c44": "03d778a247118442f0ea92db91f3c0d1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a6/d4eb7bbf8b50bc96d92b671c29590f4d94c7f4": "377822a00be7142029ccb7e106cb401e",
".git/objects/a7/c20ff863c01c1c2d01323aea53c6f8e0cf40ce": "07fea6ab13f1bd17bf6bebe8b1961a73",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/b5/b9a14a4ed7f71d9f56b109e0fcd5a17b60fb8d": "2d96c668e89283434bf6488c3ccc9a60",
".git/objects/bc/0b6674c8f75971c8ede82f8b7fdfb24ae2e723": "d24610e6b328d3dc0190a5e20a46def1",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/c3/8c3f3bea5deb67b735865564a37675b1415245": "0ac84a755fbe934472e667f8a7f14801",
".git/objects/c3/f2c27f01aa3cbd37aa6b59abee625f12d583b4": "2021c976a7398c08a4b47f39dbf0f494",
".git/objects/c5/4d101b8273e6d394550b2a2b5d115ebaa030f3": "d78f111fabe24950e8a5859a56edf451",
".git/objects/c6/35599715d37fc3ed9fcb3c0d757b2ecdcaa19e": "b5191514d5cbb491e1054f6da635cc95",
".git/objects/cb/a769d8395a847c62c54c8abd507031b54982a6": "7067618077441aab5a776eef8d57a646",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d3/cb6dc4470fbd0245eba69f7728f6486baff39a": "ebc51a2db9c50835bf01fb86adfabd48",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/d9/0bbae05d6067ab2aa7fdc78a1ae1a6d0f4e898": "c1c6ddcf51eed87c9504b7652480f577",
".git/objects/de/8304914a1b87c882bb188625465392936ac095": "3e3bfc0f9a6561abc52f961630824dd2",
".git/objects/e2/c05f909c81ac72ec9ac81d056609b0e1c31e5a": "8d01da67713f2a872239f69e40ddc2e0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/eb848c79fd6f137f620a5c1ad241c17385e64f": "dfec2391e669340b90d2ac626a2e4270",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/f8/04e44559c1d8cbc97b7cc090a3eab00bfd0263": "0e140c159eb020a7a86795dbc1b75d51",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/fb/550e4596c9903293f563e95d8ee68739244a2d": "bd1b0fb4669bb44f997f61c0bea3b9f6",
".git/refs/heads/master": "aa7fa70ee1e49b20cc9b172b4221bf0f",
".git/refs/remotes/origin/master": "aa7fa70ee1e49b20cc9b172b4221bf0f",
"assets/AssetManifest.json": "9088155ea7724a4731f04a7b77bf834c",
"assets/FontManifest.json": "33b66cdd917e70b511b6942e346316b7",
"assets/fonts/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MontserratAlternates-Bold.ttf": "858597948628fafd5ba6d71a820cf7f6",
"assets/images/aboutme.png": "dee7fe0dd657061ce837f4617894707d",
"assets/images/CV.jpg": "be36eb35d4c55bbb057189e246ab9c80",
"assets/images/me.png": "d157af6a2fd3a7182cdf7fa1a800a396",
"assets/images/Pratiksha-2.jpeg": "417e0096d2ead0d5b79f2a67115436ea",
"assets/images/pratiksha.jpg": "3cba9b73ce6001cabd1ba1d7201e1fd1",
"assets/images/project1.jpg": "55da6f9609b5ed4db8982b93738e93c8",
"assets/images/project2.png": "9ab82f9528905e7668e396285a76b0ed",
"assets/images/project3.jpg": "c81cb9ecbcfeaa355be672ada28c0d10",
"assets/images/project4.jpg": "01cf6da3d4b6d1f277587beaf0e1b1d7",
"assets/images/project5.jpg": "852abee6a8d11af1f1457974bf7b8060",
"assets/images/project6.jpg": "7c1b9fcec199e42930e01dfd7cd976e4",
"assets/images/project7.jpg": "7a26981885287269de5a9ac145d2a16b",
"assets/NOTICES": "c5b56dfa05e46a371fccde57632edb71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "060b5e6a5e8721c0567a68ddbc814eca",
"icons/Icon-192.png": "c930f881dfeca550b13b28ca6d4d6e57",
"icons/Icon-512.png": "29e814304fd7cf43aee3a1d382997bbf",
"index.html": "6e1284bcc03e5b07b984eca4ee38d1cf",
"/": "6e1284bcc03e5b07b984eca4ee38d1cf",
"main.dart.js": "a4b59965e49f808f062a36b0fe8df3e8",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
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
  self.skipWaiting();
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
