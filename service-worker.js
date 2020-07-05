/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b0616740f84681db3fb2c440efdafd77"
  },
  {
    "url": "about.html",
    "revision": "eabd24973e66e77eebb60bc94a07bfd0"
  },
  {
    "url": "assets/css/0.styles.08a0540f.css",
    "revision": "3f1cf95f285c5d73fc435b716670412d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.986af9d6.js",
    "revision": "8d07197e0e8ffe74ab8db0680dd8ed31"
  },
  {
    "url": "assets/js/11.82c79195.js",
    "revision": "bd40161cab96cdc632e5e08714c5933c"
  },
  {
    "url": "assets/js/12.174cd1b1.js",
    "revision": "fc980735064040ceabc8e2ef0878f7bb"
  },
  {
    "url": "assets/js/13.d83d87e7.js",
    "revision": "c447adb79fbb58bf3b682f9230e201c4"
  },
  {
    "url": "assets/js/14.20db2c2e.js",
    "revision": "f7154cd3a2fedb6c22b2746b7b5392e8"
  },
  {
    "url": "assets/js/15.2d278adf.js",
    "revision": "969ec4734b992124e9f621a39f31c53b"
  },
  {
    "url": "assets/js/16.9759059d.js",
    "revision": "9e662ff2d19be0fa9b43e352c43b4926"
  },
  {
    "url": "assets/js/17.23774980.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.1a89581b.js",
    "revision": "8ee614d4c81f4cdda1ebecf6b61c7a34"
  },
  {
    "url": "assets/js/19.6247161d.js",
    "revision": "4f1807d0dc6e3c755ff9f9842d1dbc34"
  },
  {
    "url": "assets/js/2.c8e318ee.js",
    "revision": "e1f218e12637a8884888842fc51279d9"
  },
  {
    "url": "assets/js/20.c46fab6a.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.60b9ae66.js",
    "revision": "f4db68e2e477a011c035eafabfac3eaa"
  },
  {
    "url": "assets/js/22.3b48eab1.js",
    "revision": "6e930c27f8ee76525cd6111ee8136a51"
  },
  {
    "url": "assets/js/23.ee93132b.js",
    "revision": "00c38376d9c112d482f5017208c510c4"
  },
  {
    "url": "assets/js/24.485409c5.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.e4ea53f1.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.efbed168.js",
    "revision": "f8297d743b6af929f87707f17e0d01ed"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.636665fe.js",
    "revision": "a4ead256bede2f71f22b73488497aed5"
  },
  {
    "url": "assets/js/4.b3719a29.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.09d06dfa.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.a2b0b332.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.917805ff.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.1b223ebc.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.4146a8b9.js",
    "revision": "09b907282e07dbffd561a5bba3b8a95d"
  },
  {
    "url": "demo.html",
    "revision": "30d527477499305fc1516fe4deea40bf"
  },
  {
    "url": "en/about.html",
    "revision": "9a1583db855033152a2dfa33a89d5952"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "3aab5622b9928656304bba844278fb96"
  },
  {
    "url": "en/guide/config.html",
    "revision": "e8243be98a2414e584ed1aaeea32ef41"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "7fb7fdf1e24fca8558fc0996c6672e97"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "f4d930bc004d51a689252666c02cf313"
  },
  {
    "url": "en/guide/index.html",
    "revision": "0571432fad10f1d8b5040d39f5d35d6a"
  },
  {
    "url": "en/guide/page.html",
    "revision": "0ba46a10041be07c6dc923a64c022524"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "13d77582cf42ae38dd882a9f30b95b1b"
  },
  {
    "url": "en/index.html",
    "revision": "bbf950232a1e500fd644cfce98043223"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "786fc2fdc7036b75bf4fc3d4b4937549"
  },
  {
    "url": "guide/config.html",
    "revision": "aeecd2be399255510b5e9c2fe8b2ad6e"
  },
  {
    "url": "guide/faq.html",
    "revision": "34f793be1eeab78dec47ccaf5ba1bc14"
  },
  {
    "url": "guide/icon.html",
    "revision": "7c01b2da8666ce9377e22a98c1c487fc"
  },
  {
    "url": "guide/index.html",
    "revision": "cfaabe557c9a46142de58e38ea62c6b8"
  },
  {
    "url": "guide/migrate.html",
    "revision": "e86c6ba62a2b112820a272c4af5d6cac"
  },
  {
    "url": "guide/page.html",
    "revision": "5217e49b3c5db5b27b13ea115279f1e6"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "e995d6af35585ec574c4cb48840549e0"
  },
  {
    "url": "index.html",
    "revision": "e632e81d08040d445f02736139306068"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
