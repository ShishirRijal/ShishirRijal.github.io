'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ad948625956d07febe677b24de37e39b",
".git/config": "78451280ea859203bc1332af422992ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "344223b7e461d865cd89ce7e29cdd44e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1d3c622c7a93815381199330adfe6b14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9e39f573dfff8545aed48947b8f1ed8",
".git/logs/refs/heads/main": "d3675aaa84b5c96c8a0802264a12e2ec",
".git/logs/refs/remotes/origin/main": "c226dd8e9e9cf27981eb35b77801ecf3",
".git/objects/01/013a26148455fb810b0cfb3114f453b0c5e0ae": "dbbfc43820b751f4666ff8398d3bb2d9",
".git/objects/07/bedb38807cfb2c7f1c042ff565540e2654d8b1": "519cea2c41e98fca2bc26d90a9726382",
".git/objects/07/e878c2b1644c080b484a78da1589f2bee7e034": "d74b18771a25b48d58e6d001a4dbd681",
".git/objects/0a/d25ef304a6f9dc06d247eb6b4f60354b83aba8": "e964d41f610e3f09f5b01dbaefcf9ffd",
".git/objects/0e/d91aed70c219451afa5d86d8148626a63632ea": "7b6074e88e11d947eae0a164069eb669",
".git/objects/10/73fa573c53bf1df21eae34e980dd180a9cc210": "31c3df9983a69501dde673409e746c92",
".git/objects/10/d09f59ef5e3bdbe9f549f59620b51af0af0412": "20c8a826f14e70d2b1a9dad644e9b02f",
".git/objects/12/757e9b25caa5adf10a05e2fadf9ae1489956d4": "6c82f58048eb2eb1b4ac3218fdcba51a",
".git/objects/14/689ed2c259f6c76ea3e2e12507b3c151c9b7b0": "de198eb1f8cd09d46cee8076b5e81537",
".git/objects/14/78dda7cd6a4295810aac99f5115e21b9a72f7d": "b4e069ede647bb59972af7dd17b93b2b",
".git/objects/16/7494e6435f38be767aa6ef0582474d82e02fda": "9c073f2c3b9c31009edb64520af31d52",
".git/objects/17/5af357c6f8c92fd7a178a191f785b04ebc490e": "ca13c69ef375dff836f5a9277cf3e837",
".git/objects/19/4d807df7d41cde7558315423d1ace3ecfad64a": "4616c3680a820eeba9a6ad3a9a96d74b",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/2ce5f52e25dec39b27bc8ba118b404e1d61dc4": "821748122cf36cb1a936b35a5a3dcc8a",
".git/objects/1d/de6211c8f30be766c01dd52605102061f0ed67": "3d8df711f4896f7f86a04d30d2195efb",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/23/5dcb26ef881fb2124e14dc006f84de337c1fc8": "ab43946e61ccb6d41b0e2468a3b59e8a",
".git/objects/25/d668c932a582c12c923211f1856287bcef3ebf": "b1dd4e205d65e1822384940ed960b343",
".git/objects/2a/26ec77764b5b10b37f05c3263c3893394500f5": "6ddf3c72d94cee99128755600b223c22",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/c597ba12a7bc8566d7821dab46a001ff7b53ad": "01c63299f058d0824807188131f1f8d2",
".git/objects/2f/e0ae0f28a3e16f7d182e241cdd1116c11526d8": "ac3bf4a8c27d8a46a1f7b2a1fefd399f",
".git/objects/33/09d25150e893ca8fd449be0bdac752110e3978": "698e91caac369d283feba0214cbc1dee",
".git/objects/35/c55c135f5caaeb474cde713da4151210b7fe7f": "94b5f2a4253944350bd7bda3b9e43fd7",
".git/objects/3e/4d55529a2d99fb1ea43f4485d42619df965751": "5a9d5a1fe185d89022e24c813152bf82",
".git/objects/3f/61eeccd44dc8a003f4b0ad4fff166c8b7a0b0d": "bbf4c9fd0d2573f4711607946e152f02",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/3864878cc8891f61d59b72b949e8a19a57c7fd": "902e2969c815571ae31dd242c040e0aa",
".git/objects/44/b1512092aec0d25b6e4533265d6e1b3b88c087": "1e5024c2d62a2df199f908cf2b7bba0e",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/4b/77dcccaaab296521866ee23ebf18aab0eb7dd5": "a8f8b1a7d3a739fbe4fec871c035c2ed",
".git/objects/50/b03964158e1e7b2c29b208c387781e74c37951": "4fc36cdb5da3b99888a5eb2f3ef4a4bf",
".git/objects/53/fcc6c1ce3181594f12b9d0edbfde100ea6b640": "ff14d96c80b64daea77abfa272e10fef",
".git/objects/59/2d42b3d48a802ed994fef376e524663e1fa75a": "42191ed4a8cf6b220d07dcd0b5f8ba98",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/68/f9cad5bc10bb087849d7a632e88622ed5e4d61": "9c19d44c6b222b27138ae57f9904231c",
".git/objects/6e/8ed77a904dff702fea1f92daccc3324e948a80": "e395b9cb4d0c82e61560023cecad1530",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/73/8740dd6182b9033491edbe57e9c72387fe692b": "41b8331eb7593b96c2bdfafbc8256b64",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/5524608a40860ba4346eefcd04ba8ec91ce1d9": "6e63ebf0180aa74ee1315548d87867ae",
".git/objects/81/0dae8030361c80a88128c83b168211d4d3d4f1": "99ea52e8a50d9bef23ba29cb929ae65b",
".git/objects/84/0855134412a3c6123e49801af1a5acb32b46f3": "b6bc117245d922d48a4673b40ed65ca7",
".git/objects/85/07e8a7b2c6f4ef833d4eee4f9bf65cb0d8171b": "778abbfd05750626a43c6f1a578e410f",
".git/objects/8a/2641d732b7a532f3af34b97943666a3004e3c1": "e216c1212684aa22cfd85276f17169fd",
".git/objects/8b/c169404c2f2b1143e7f791aa57ca48cbd7f1f8": "6176dbf2f489f83601261eeb5fa707a8",
".git/objects/92/3648391148177c3d16f149f0f0b16a2df61289": "d9c716a0b1b22445b7c5d47ef65953ae",
".git/objects/93/175bd0c634981edf11c22c340f0ba55cfe3921": "2059d98c8210c1e88e0ea4110af4252e",
".git/objects/93/675a3f25d44f65276623ddda71893797a32f9d": "fe0969108c9abc340766584459ecc8b1",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/599969eb3b10b5b6373c58cc8de2f47a5a2643": "3a76090a0d311d21bf435e50676e63b8",
".git/objects/9c/08daaf1155a76a59b4dce4cf9e5b0be9efa775": "3d9ab5408962c49aaaf75fcf1ad42934",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9d/400e51b8d043e79c80c904b6a3818dea651075": "5db864d816e04c0dec82fda8f379243d",
".git/objects/9e/eb1223b5f4b198e2c62c153d3e71ad080f7993": "c26d555e020878d7e74bfa107c616198",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/e9287cc913ae0026e448def1c54895b71bb219": "cff1629f672e4c451717f29d64ff34f2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/a29724265ba54e72ff37e729a44c6afb7c3679": "e99a490f7e7483e44ae6554e5ae44ff0",
".git/objects/b7/5c74a6f4fd5decfb9dca491fb26d6ecd079761": "95e03645a895313ffefcc36e599666a7",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bd/dd75310c0ac4e3e144d9f58ca720fe3399064e": "1a994fcfe8edb6599ee7e56f602c9bb7",
".git/objects/bf/51c2ad27cd90a29354642c186c0deaa9f44035": "5df01696dfba74d1570d3ad434487f22",
".git/objects/bf/77ccb42c0e7d9b3602b51d293d12b6c27186c8": "99d3b8f830096108620fcf8a8c621293",
".git/objects/bf/a28dd6e767469f9aec82889bc0159d8bd29bf2": "86a7aa3b2acaf4078c2c71c6d2c19329",
".git/objects/c4/10177d9a164c141781288bfb16b1aecada3a7e": "f227e430637d7321b8c81cb06fa30463",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c7/fcc4a1f7e8934bc087b9dc2fcd736f2fee9c52": "c5c0b3237bb152df3c7382d76c40f4c1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/42922411ed78bfa41c407d2e69667e773937db": "8f4a299de75d6b22f63ff79fe1a5e95a",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d7/221b640d8c565401eb339c2f8db8781bb0105f": "3f953aba181947e0ce4ad08de9c86350",
".git/objects/d9/0f16e0f27fc4da7645759cd388136283dd5abe": "43651e10e2a219f998c72a25e49d34a4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/750ee8f04253212e8f239ccb457f37d1fc3048": "d4f69d05a9fd2feca5516935360b0a89",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/314dcfabcdbcc0497a47b374bc5c3180eb72cf": "a390ed06fcaa53bafc3850e7573ac887",
".git/objects/e7/6840047d4ad4d5c703bc7c72ecea64be91474e": "c8526914f70385192a95933e505809b9",
".git/objects/e7/d564b849a90ff0ad103bc3a955b908d1e94fb1": "951766af26745cb3071b9602eb286888",
".git/objects/ed/d636438fa53a58435e4eab422f3cf164fc3ca2": "4f95ceaec51994f91d48218a63437b54",
".git/objects/f1/25cb746a95e105fd83ae8340341bde7b3a1ecf": "9f1b97d7b9fd5953fcc2f9fb2f09dcfc",
".git/objects/f1/5844a19da6653f47b16919357cc75a562a9e2e": "15b343d00c6ee982fa648384d31c4ac6",
".git/objects/f6/4b8e24dc9757ab8124f758f3d2514be3f076ec": "c19cc2c9724c051b7d3f27465d8aab43",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/ORIG_HEAD": "cb61b76ad5437cb631c07cb6442740e6",
".git/refs/heads/main": "6add6cc9cc6dbadb9bc16b86cf49e2de",
".git/refs/remotes/origin/main": "6add6cc9cc6dbadb9bc16b86cf49e2de",
"assets/AssetManifest.json": "48e073eb533fe2d11994158f8e7bafcc",
"assets/assets/fonts/Oswald-Bold.ttf": "452bfeb5bf78e71cc3cd6e720ac24bd4",
"assets/assets/fonts/Oswald-Light.ttf": "6ee38c23e5466cb24e844b1c345d610d",
"assets/assets/fonts/Oswald-Medium.ttf": "14cf874b374ca47427bbceb4b2373c3a",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/love_calculator.jpg": "fc251b7c7e91463e75bd277e47ec40e4",
"assets/assets/images/real_estate.jpg": "dc1291bc5951c22fbacb0dd4666693eb",
"assets/assets/images/shishir.png": "b96d17dadd927c13e0b30fad6591349a",
"assets/assets/images/tick.json": "51b999225476edb882b55e2b4655e76f",
"assets/FontManifest.json": "d94313928c098a8c367b76d41065aa19",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c91e0a5373ae1c3167597a994dd6749d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon-32x32.png": "a52fdb7a8ac6ebbb14b95c22c9114fa7",
"favicon.ico": "9ad62804550bec4676d9450f0afc2e4c",
"favicon.png": "4bf3d4cfa3fd44b76d18c0b26b89ce1c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "695371323cbc7158ca98056ff77bda61",
"icons/Icon-512.png": "adffe52aef0b15654f33b0b02ae09cf7",
"index.html": "2b25a584a9a98d83dd8323d3f2136ddf",
"/": "2b25a584a9a98d83dd8323d3f2136ddf",
"main.dart.js": "6c3b5ee01ffb9c5738b106cd4dd1a515",
"manifest.json": "36f940daa3459872fe5c376faf09f66e",
"README.md": "1238ca338c12fceeee4b79f76cc9bff2",
"version.json": "43301b7f5019a16526c827edd6e1762b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
