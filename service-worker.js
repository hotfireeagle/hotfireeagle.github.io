/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/10/13/hello-world/index.html","338023c80fa2a95db8970eb7de67d4d3"],["2018/10/13/文本换行/index.html","39ae9c2b9a86ac6773694aad766c15f7"],["2018/10/15/css实现轮播/index.html","7495c60ed755691ca2641753c0244077"],["2018/10/15/puppeteer-API备忘/index.html","5a74c9eedd091b6304a43b40a6f9bb4a"],["2018/10/17/DOM操作/index.html","324422e25da23467d3235fe073aada78"],["2018/10/18/rust语法备忘/index.html","17869f89d5a5f3771bc177a8a7373d06"],["2018/10/18/typeORM学习/index.html","4361201497b6d89dbdc279576b36ca9b"],["2018/10/25/typescript知识点/index.html","97a7cfe816ba909e6a34af75d488d2e6"],["2018/10/25/小程序思考/index.html","a094fa03dfe66df2d9d57d0fe1f27a1a"],["2018/10/29/angular指令/index.html","abe6f73205add0ba108371c249558a5e"],["2018/10/31/css动画/index.html","1117593410e7128eaf8983f8ca88cb2f"],["2018/10/31/css布局/index.html","08e41f7340b7140f3fb2ad4709820314"],["2018/11/01/angular生命周期/index.html","42801a8e7ee6e1e41fe61b9f80b4ba22"],["2018/11/01/angular组件交互/index.html","fd1164372b9656746d02593633152d41"],["2018/11/02/angular模板语法/index.html","12975e15f059a1e7efe083dda4237f34"],["2018/11/03/mysql命令行/index.html","1047ffee6a6854d2fcee29d961336a0a"],["2018/11/04/css知识点/index.html","5970d1176c0758c784132ed4e1991e84"],["2018/11/14/nest学习/index.html","6ffc7e7438e5f8eb0ffb1863307e66f9"],["2018/11/18/js注意点/index.html","2b97a3365f48a17b9839e84948203bb1"],["2018/11/21/工作bug总结/index.html","785c8edffe1668ef03c7690e50b45e73"],["2018/11/22/mongodb学习/index.html","d58a27c0c7d35a9844d4df8ff706dc31"],["2018/11/26/react坑/index.html","e11d2c2bff365cf6c8efa8f818ce1146"],["2018/11/27/typescript实践/index.html","44b94a7ace488f527bb3dadc4c0703b9"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","742957f0e0abb6b6cd611c3312d6e907"],["2018/12/01/vue学习/index.html","133f1e1ca18bedad541fbe215dd8a03e"],["2018/12/07/nodejs the right way 一/index.html","dbe60b82137e2c3b6bf2ce3c08f5ea3d"],["2018/12/07/react生态基本使用笔记/index.html","c36ca1a81fbee79da4ede5de54e29880"],["2018/12/11/rn基础一/index.html","e0ff11c85acb2ab0319fe53fcb7da2a4"],["2018/12/11/函数式一/index.html","d72d1cbd676308dc0c15c38f51a54af3"],["2018/12/12/nodejs之process/index.html","a21dcf924cf9314d2404d4a50de755d5"],["2018/12/12/node事件循环/index.html","316ed1108db9e49f424d1206abf38b88"],["2018/12/13/elasticsearch/index.html","457abc3aaeef7a1d3a8e34e9cdef351b"],["2018/12/13/express/index.html","f94b1113a99d4ddda10911bd7a1d4b74"],["2018/12/18/小程序性能优化/index.html","a94ea3fd89f181931f65eeb571508320"],["2018/12/20/express2之database/index.html","1da9e24dc47c54a5762e5991e846c220"],["2018/12/26/flutter学习1/index.html","fa209cadec81834164f044b7e86d7f59"],["2018/12/27/flutter之包管理/index.html","fce3c52f2cd87d793b5b181a9a5cd04d"],["2018/12/28/express测试/index.html","de3d7319e586df9b6e6336e4b1d7093e"],["2018/12/28/flutter之widget基础/index.html","6f4ce914782866071b11acb58d3656bd"],["2018/12/29/Express值请求体中间件解析/index.html","519310c34357e960e58247f37fe8a1be"],["2019/01/02/express开发小结/index.html","b750b876464bcc8779454a537201c2ae"],["2019/01/05/dart基础1/index.html","5fea77448ff19d0b21b3122d5e742a5f"],["2019/01/05/dart基础2/index.html","12a8b56c444a24cd0d9b27a8338b364a"],["2019/01/07/dart基础3/index.html","9623793fa0ccbeb8466148ae4cfa3346"],["2019/01/07/express学习/index.html","8d98abfc24a16910ca1c0429056f7031"],["2019/01/09/Flutter之文本/index.html","442d7113a4e2a93bc3182b5cc0b37f6f"],["2019/01/11/Flutter之按钮/index.html","8acc95ad31d6a9dc333d8ab2d78c2fd2"],["2019/01/11/flutter之图片和icon/index.html","88b18f652d09c0acd7627647bf90056e"],["2019/01/14/next-js学习/index.html","fc6fdb1542fac5291f40cc694e3375ea"],["2019/01/15/flutter之弹性布局Flex/index.html","292b47a5e97b0208076dd5245305edfa"],["2019/01/15/flutter线性布局/index.html","a503c72860078694bc2d3b97f9616360"],["2019/01/15/rust2/index.html","7da2229ea97c6ad83ef4e11e98546edb"],["2019/01/20/express-ts上手记1/index.html","5ca17a1005cfcc69602a040206f58b96"],["2019/01/21/react遇上typescript/index.html","74e6c20706328408426969f910d22ed6"],["2019/01/26/新点总结/index.html","22aca824206852efaf66a7ac4ecaddbc"],["2019/02/11/angular架构概览/index.html","d676e302f9811343d9af6eaa15695081"],["2019/03/28/promise相关/index.html","45cb17ed218466bdc2ea27b47600bf9f"],["2019/03/28/实现一个sleep方法/index.html","6c4c53852e2948d5b8658532e3eb81e4"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","bbe9356b1f4495cb036677ecab4962e3"],["2019/04/02/证书可信任/index.html","834355696bee859f209f279290bcb1ab"],["2019/04/09/从一道题目谈谈跨域/index.html","500084ec6cea43bbb162c15e49b17dc7"],["2019/04/18/关于滚动吸顶/index.html","33cfe2c6c9eb294e6eff7edf5f0fd938"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","26d21167b351a6bf24a94c3679a37eb1"],["2019/04/23/深入理解padding/index.html","81ed96f86d4d3d6c1c271e1b7411a51f"],["archives/2018/10/index.html","c360d12e50e2e08791e88b7f3d72b0a3"],["archives/2018/10/page/2/index.html","096155caee3adbafad1e0df066cac835"],["archives/2018/11/index.html","a769d44f671d2b81cb1fd36084a8cea5"],["archives/2018/11/page/2/index.html","ebaa1d813289660cd25e9d691cebdfeb"],["archives/2018/12/index.html","b6bfc46dd238a93e1805156c27d814c4"],["archives/2018/12/page/2/index.html","b611d3f2ba331f0756083e9ade597c9a"],["archives/2018/index.html","f556857690e602d80d332427f926ac66"],["archives/2018/page/2/index.html","b8e788ea07b90ae4439c31329671dc38"],["archives/2018/page/3/index.html","687a6e173922c8da90b474c626f7f0ba"],["archives/2018/page/4/index.html","f56a96bc06ea77fa13bb2fc00d8cfa9e"],["archives/2019/01/index.html","1da356e4fab662b056ffe4bb0190a899"],["archives/2019/01/page/2/index.html","fe4230decbe1bf0809a8394cabf417ea"],["archives/2019/02/index.html","473c47a3d7ef673b2419c4046fbe24a8"],["archives/2019/03/index.html","714d1925565a3061e0803f63bdb35dbc"],["archives/2019/04/index.html","230e3ddeedd26eaf6dde24e764811eb1"],["archives/2019/index.html","09cfca676e4b75f3d3b2ce2e6bb82d71"],["archives/2019/page/2/index.html","f5f8b4396dd15309b877a8ec8f6dfd01"],["archives/2019/page/3/index.html","2c8ec6e6c2e6fc86dd2c9818708d43a3"],["archives/index.html","2c282b366a453bb7471f2aa8531d4587"],["archives/page/2/index.html","864e6ab740140e2134da0a5e2378b6ea"],["archives/page/3/index.html","2fa6f5744aed6f78273a78ecd8274a04"],["archives/page/4/index.html","b7fff816566ff71cacb4b58f6c0b71c6"],["archives/page/5/index.html","f044c26fffbab458005e79bbf47dfb9e"],["archives/page/6/index.html","ee73dfc4b46fbb71ea7e5e98aa317421"],["archives/page/7/index.html","12684c3057d6120194d3be35245ce69d"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","c83bda37ed0852ef91bf8adacce63cf0"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","211161f37d476b4c9417578d1bd6ae61"],["page/3/index.html","fad4032470dbc931632ac7d2eac0460d"],["page/4/index.html","cf5aa18838a1aff632438b5d3bf8c078"],["page/5/index.html","1bd5924fb359a520491f5d7ab0ec17f2"],["page/6/index.html","635ae23142502daab35d86e2b8a1ea89"],["page/7/index.html","909ef5aa5a83c9be3cebc98ebaf2018c"],["sw.js","a14d58797af68b41212d8d8feccee42c"],["tags/JS/index.html","169d876db8e97ea05114470c5c97f010"],["tags/ReactNative/index.html","642e104ff30ab0d9d4419b131952c69f"],["tags/Rust/index.html","559d08ccc10a346e4039e74895dd2b3c"],["tags/angular/index.html","66a79f08161df2db71200e2e3969d69d"],["tags/css/index.html","f9de017710515686001c2f250ea7e493"],["tags/dart/index.html","08fbd0f002aa6bd6254f84b894ddb9e8"],["tags/express/index.html","7de57a5f121e44acb701dbc7182459dd"],["tags/flutter/index.html","bd0f2727a6f3642de42151da20dc8994"],["tags/https/index.html","cce337248b10cf3e2712302adfeceeb3"],["tags/javascript/index.html","e78385bcd1db93d7384b5bfd2f7cc21b"],["tags/mongodb/index.html","0768ac9b74f9f66f340e63d7ac038f76"],["tags/mysql/index.html","f6836ab7b39422b4af7d674d52881edd"],["tags/nest/index.html","25a9d2e0c428256686376eb5937b51ca"],["tags/nestjs/index.html","ee79701da6a68af61293ae297571d9e1"],["tags/next-js/index.html","de20a231ebe4ebbb9bf7fbb322673445"],["tags/node/index.html","37361bb9b09d9bcec94686fb3a470c86"],["tags/nodejs/index.html","86f7dcc604e5ce0c74ffc84de79b8579"],["tags/puppeteer/index.html","1f76ddab937edb13b0a3a8c91caad085"],["tags/react/index.html","f11afb36e64cb850f4453f1f3e359b32"],["tags/typeORM/index.html","2db03646eb57909a731f9440fa09e631"],["tags/typescript/index.html","7ecbd0f2b02cde0c601bc461714defe8"],["tags/web/index.html","4a8078dc11365d11c5ae8f4a73e841a8"],["tags/work/index.html","8b86e618d3a7927c5240b565411a4a70"],["tags/wxProgram/index.html","41dd23dd2dbe3db9dbd04ec2bdd8ca82"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







