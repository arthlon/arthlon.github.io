'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27251731fc4df3f86c7fae3e0ee08ca8",
".git/config": "e615628ddd55b9121005a21e8b1f8220",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bc26845f5e71f15b6295b4e84dbb2f29",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db1b063c3d8546f9a972d33f387690a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b9148e69d6c21a6ea6b461fd4e47109b",
".git/logs/refs/heads/main": "b9148e69d6c21a6ea6b461fd4e47109b",
".git/logs/refs/remotes/origin/main": "b538f2e8f893bbcbed2d20a3e31d7042",
".git/objects/03/8b03b9648778030f23ba00e8f68a09e47ba175": "c32978c7addc813322a0c4c07d51c566",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/8c058eacadecb6acfe37371e5f4dd4535891e4": "9c5dfcafe33aede4f01c3c3143445d3f",
".git/objects/0b/77339e09c907000a83581fe0acace451529f29": "fe7568a7b1aed918837f2412089b25c6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/0f3eb8b6d6f80780526cc9091fad8912a3b940": "9b6a6d9732ec74a3f2b9a1d2dc7dfa0b",
".git/objects/10/471a93853e90177d7bc29693141ee0c8191f5d": "bdf0c8488a22cafde86a7f0e6554e721",
".git/objects/11/7563e519df5e95a3be585f0aebac3d66ad1c1a": "8cfdd9010c20b45e87a264959b69acf3",
".git/objects/13/a8040f7350cf269480031ad82962b340777cd6": "06c32509cc67a2b2ec827e22dd7a917b",
".git/objects/18/39429eb527bfc6dcaf96568e20dd3a4710838b": "b38a03581b393f7be533e3bda439a89c",
".git/objects/19/b31ec275e1f1a3f9be389613be77531c3b860a": "0c3ca15c4a7beee8388899ce2a8aafe4",
".git/objects/1a/03e3b2132ba68a85dad25c8810d0e8220a7123": "2f11064e0068fe8a1c0a4bf908396ffe",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1c/72169b56539777cfdffea2d176afefa0944fd3": "58e60d1b6aad2b40e0ea32ab5e3261d7",
".git/objects/1c/cfd36ebf15cbf8f09c79d975f3da55b9d9000d": "227b53aac289ab0dd63687bec89aba7d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/0d51c17ad63664d4489116c4808f4f3e6b56ff": "c638888d19cafb7b19f2225517de1054",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2a/074a411d692e0309c630bc568ac89671471fd0": "7701043c5d9c164859d76402ef22f924",
".git/objects/2d/8212384682d8b1b2b5221f61787d4db27d1769": "be958781365d80f3232cc5343f5a04d2",
".git/objects/2e/00e98eb183962dc07d94dbdb423656d574eaf7": "278ed7c781b15e1936064824df15a91a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/00b3bccd177c2f47be0cf375bfd08683bed493": "d3c94859bc0867ae93bf1675167425b9",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/40/a53e5a9a2ae9202ab61b25da8d302dbeeb263c": "81bb96aa20a83871471d1f93d379fb36",
".git/objects/41/4dc11285b83aa7fa566ef3bab9c6f010bc0ea4": "215e82ea9c549c4c5b96a46cb5f078ef",
".git/objects/41/8f34ea788e7bc1a301a8d675686f15b4ec12e8": "3f46153dbb83473c8f583c2c7de2b861",
".git/objects/41/bfc6ce461dd7768b9012a8b351c8f5479e56e1": "cc6a14c2b373f155655b489cfe6bfd64",
".git/objects/42/ae6fc7bd0a3368ef4d626e01f31af992fcf516": "d1ec062042f1f27d14f9fc440bedc9e4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/17040591ea07e4a43081adafee467c03118213": "57e41e8df9baa6ac9fad9ed96c411284",
".git/objects/49/08fc4d11947e243fb5447d9b29b49e9865751e": "f54bf7b4656f91146ed1dd9b55211903",
".git/objects/4d/2a5f21f08d030f17fe80d569e25a8f762b522e": "b1e4044532e012f1ce5e31f0a8c55f01",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5b/7f6ffe08601a53e9c9b70168e51c6f34fc7421": "e60487fb22f1a6626e9598cea19fd96e",
".git/objects/5e/d48d206e232864c6f67aa577b587db9374b862": "92fb37e9f44100600798de9f68c0550e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6b/5740c649965c4655ef969fb093f0b9fa98bea7": "1b8bb940a27487653237c7b6ece704c5",
".git/objects/6f/5c09892223eda7b50abe7d23a0c7c188864a07": "c828db642be71395071e7050309f5d3e",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/aabb2e4cf7f29758a27ab9522cbe1620bc2757": "1db723dbd3e41c836f279efdb53ce755",
".git/objects/72/d71b5f940da70efd231da50abe249b253fc6bf": "ca2dc1327a454c76328c4768d6b298aa",
".git/objects/73/e8794d5ead281b9c2c4e5ab37c79cb0599594f": "f01a142e2f113acae2c3fb1f1084267b",
".git/objects/79/6d4d29c0a3a182a196bb4f4fd5c835d0683e47": "a274bbef30a739f0fcde25917f579827",
".git/objects/7b/dc28420b8417bad7ff0dec87cd63b021d8c33e": "1250ba4ced7af893248e5b9eb1f24cf7",
".git/objects/7c/1cc79603c6c04e08fa80ac4a35fd448180acf7": "c67ad4adb2b180477b608518ced6cd68",
".git/objects/81/1bbba30ccf4876afa7490530a80a8ad33fc37d": "6c4ba80a7d558eaef42bca6849190c97",
".git/objects/83/134c427cca91bc71613816d0c8d6950ad4b2db": "508fea38b9c96cbbf93f1c32ca651332",
".git/objects/84/0ce531c2824ed4b77ddbe45dd22a009410a7bc": "01f6453e2105c8092496dfef759d1792",
".git/objects/85/8f79ffa1404f5dfbcf468e05bae5e4a85f1561": "259e4e72623d1180a54ed37e7437a8da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/229def2e57095e4d3d4081b2fc4b768038636f": "90370f57a0bce40ab0bc31b8c60963d6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/96/75726bc5b1fbaed7bfe9186373fee22478b9f1": "a3bdeabfb429567fe70ffb2bff307f71",
".git/objects/99/bfbf55e86958e6647a11ea6031dbd744be5a14": "1372ded3519cc82a09456a1b4a23284e",
".git/objects/9c/be066b4f3c5453dc267d648ebb00555af2a9e7": "4b85bad6bb13c683c6d74d44a5116505",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a5/54caee7adebe344f48d28988518aa30d8a671b": "5451577980a1a8d251609c21630957c3",
".git/objects/ab/34e9157391bbd0d56cabdf05f95d64c996257b": "b43bb0e05694fd76b441e836898378fc",
".git/objects/ac/24b172df2f37fc94774a5f675e621a20fab788": "74bd6acc1f0090cbe1e8cf44768a939b",
".git/objects/ac/321ee1916fada0078a8169ded6427c8fa61923": "bc55341967eb07e003c60c6f4fabbc78",
".git/objects/ad/29aa8dbef2e773e53ecbc7cda464589869e065": "cce958f74dfc18aa16bd6cd9df5e0683",
".git/objects/ad/46dc0b617d6545351c33fc6729bd6c2d15e6b7": "023087fe5ae61aeb5919fe9b99762f9a",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/3bb04f168e450442180371e541768d2c098ade": "ee62a9727a08a0c76d4af01c995d1245",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/27c2d5cf8adad96ac3a76ad66ad4b8c561e178": "45a6292639441471c4adad501b797607",
".git/objects/b3/88779d5d101227b4503244237253be3ecf4338": "c797b187856287addb5f68b5b8d56a27",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/d15e841bb9bb49b0b497af4d54dbbeacfdf67f": "8898fe0346f728531c8b79480cfa4123",
".git/objects/bc/e1601a31b9f2d19491bba6011f3f73f51c914b": "7a9f916cf13b3ce5308667a2b275cf60",
".git/objects/be/85f62c83d180b40506e144a7f9a2b48541b6db": "b0a658d43c91e1599faea6fca3fd143f",
".git/objects/be/f67ed738bf26583c409f4a4384c413c245bfaa": "2558747fdfb619b4c98cd6c1b17259b0",
".git/objects/c6/4ce8122eb2f47d1e84774f0e7c1ac5ca39d1e7": "7c00e3c08c4cff740901302e2c90af68",
".git/objects/c6/5e91ebc308acd63e229977e503f04eeecb05bc": "1e9963d967920e0b754c1190d29574f6",
".git/objects/ca/9fb4f4182a114f09a37ae781c943f8cbcffc6f": "f021760329c8da9745a5e697fa0c4f31",
".git/objects/cb/4c6a0813747f5cba247d71d37f5bf70f2bf8f2": "76fe5fa1f6f23c1d285cb1b7431701ef",
".git/objects/cd/e031fb5917a6b88373103a4e4fbcdb7113f35e": "03956bc38835fbc6c673512a2863a33d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/bc3a82ddc0958cd5e69c1dfcbbbe61812a369c": "38f9913f8493c637f16b56ee96b09f05",
".git/objects/e0/9fb61c9285210828713ab582361bc39fca9b5d": "f4228e9743662ab2c93786b816a30c7d",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e6/2d626f7e1c9158dbe23b791bc1d57b36a76e76": "b6cd9f74766d10b0aaf0036c1e8ba3d5",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/dc93b402dd4d14ccbf1e6d104d996bdb7c4dfe": "219b249dd01339ca12dcdbc507439d9b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/4124e37e8db15e14c36dcfd9b8b09dfaab1423": "85f988031bcc86dfeb9344d7bd9062fc",
".git/objects/fd/52a7fde15c155958322b2a0b2e50f3dcf7897c": "7c53a37761a64361900dd67ba9147f59",
".git/ORIG_HEAD": "504f4c414cc399bf4fa7c23fcdb46cfb",
".git/refs/heads/main": "504f4c414cc399bf4fa7c23fcdb46cfb",
".git/refs/remotes/origin/main": "504f4c414cc399bf4fa7c23fcdb46cfb",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/img/gamificacao_png.png": "00328f34f223b1fd00846cb712d7367b",
"assets/logo/logo_2_jpeg.jpg": "404c223c9f3bec332e95a3b1b03e06fa",
"assets/logo/logo_png.png": "1aa56003c301a2041d7bcfce353347db",
"assets/NOTICES": "7ea7b7f0eada215645a1c17b89fc7bd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "6be90267b2c36d76f8e8a2ed8796e460",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "22daf13137d72997094b314ae0754b49",
"icons/Icon-512.png": "f567ad3649c5a6eae5061df93479892a",
"icons/Icon-maskable-192.png": "95e617b8d98a9a84380810830ff13366",
"icons/Icon-maskable-512.png": "269b42dd3a9209d921f6491feeba6628",
"index.html": "13386e7156262ff58437913d9fc4a29f",
"/": "13386e7156262ff58437913d9fc4a29f",
"main.dart.js": "9758becf86357eb31922f2cda657da62",
"manifest.json": "7dd605e42d31e3987af7c8278c9e84ed",
"version.json": "5a6ed37148376f14bf75ecd86e3bbd5d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
