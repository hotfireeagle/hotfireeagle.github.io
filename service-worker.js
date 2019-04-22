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

var precacheConfig = [["2018/10/13/hello-world/index.html","b9dae3c40d0183115690f18bf9ffc773"],["2018/10/13/文本换行/index.html","30e0b9b017f090339788ea58af1ec7af"],["2018/10/15/css实现轮播/index.html","c10952a5ec9e689a0f14744bcf0923eb"],["2018/10/15/puppeteer-API备忘/index.html","3f992dc84510bfd98d57f0f6b28b8e7e"],["2018/10/17/DOM操作/index.html","92763d14bee4b0004241ac2f360ef003"],["2018/10/18/rust语法备忘/index.html","0c4b759eb127a9d472f1a44527525f82"],["2018/10/18/typeORM学习/index.html","a8efc96c54c7b1a1093369e0a1e4ffae"],["2018/10/25/typescript知识点/index.html","f01ef8a3aa88b5e5d9384a84b13c9f39"],["2018/10/25/小程序思考/index.html","9edfe416c1ab621039ea1dad4b82c8f9"],["2018/10/29/angular指令/index.html","c98fccefb493a6bd78d83120081147f3"],["2018/10/31/css动画/index.html","e57da48c49dde6f3666179810b5692e6"],["2018/10/31/css布局/index.html","d3743a7af4f21a8e97f6bc8bfbaf5cdb"],["2018/11/01/angular生命周期/index.html","8a4f33ae99ddeb0343762246219d2e0d"],["2018/11/01/angular组件交互/index.html","aa8c65df93f64efdc90eee9d631500ce"],["2018/11/02/angular模板语法/index.html","b443d2334581e435610bd1a952495fd4"],["2018/11/03/mysql命令行/index.html","a6718037112c4c2e1e5acda250cf9f78"],["2018/11/04/css知识点/index.html","27465e4c6da144ea68a1322e9510d1cc"],["2018/11/14/nest学习/index.html","227810ee84ef40d9d926d5f7e6598657"],["2018/11/18/js注意点/index.html","5f1e670928e13e04fecab50c131d2786"],["2018/11/21/工作bug总结/index.html","c01bf922cb6601aba9a16b64971270bb"],["2018/11/22/mongodb学习/index.html","f92c63d8c7ee4cb7cc8b6749f5b644ba"],["2018/11/26/react坑/index.html","81d0c84f688a4551903d17f3d3ea7d7e"],["2018/11/27/typescript实践/index.html","6d209159a9af79d4745c6dc310bf79f8"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","c80788110de4dcca7343928aff6d45b8"],["2018/12/01/vue学习/index.html","c5cc82d4a142c3bf8d86681ba6436d70"],["2018/12/07/nodejs the right way 一/index.html","911f794643c9665a19406cbded47d1eb"],["2018/12/07/react生态基本使用笔记/index.html","e6dab939b9f417d92fa6bdcc2c97e509"],["2018/12/11/rn基础一/index.html","e264e0d1e49b46eb881442d8d8d89299"],["2018/12/11/函数式一/index.html","0e8c34e3f50d30dc559dd3657ac8d188"],["2018/12/12/nodejs之process/index.html","baa646f7ee2659752b6d2d80f8aaed36"],["2018/12/12/node事件循环/index.html","4f020bbad6593d16476bcc66a60960ac"],["2018/12/13/elasticsearch/index.html","ae85bfe3cd26649abb84094efe0f9010"],["2018/12/13/express/index.html","f9b053ba808379138e1b0d0078e8aaca"],["2018/12/18/小程序性能优化/index.html","105bc6027af1145a23b0af08ae2584a9"],["2018/12/20/express2之database/index.html","97925458bc46caaa4b081b7d32cf331d"],["2018/12/26/flutter学习1/index.html","5dfcfd0c158901c6dccee4a5005a4eda"],["2018/12/27/flutter之包管理/index.html","f21c5e2538975c88d1a35617e3a5688e"],["2018/12/28/express测试/index.html","5446a0de08be2b14f0be93653e398d72"],["2018/12/28/flutter之widget基础/index.html","e6d1889554bc0781c7e76ab4eaa68d17"],["2018/12/29/Express值请求体中间件解析/index.html","28c9e375cab898f69958ab5a1c38f636"],["2019/01/02/express开发小结/index.html","f302f53cee5b49a9d64970b0084cf5f5"],["2019/01/05/dart基础1/index.html","7713ecec43001bf4da8ff2e6c2f267ef"],["2019/01/05/dart基础2/index.html","83b556fd5dd3459c51ef8b059a72085d"],["2019/01/07/dart基础3/index.html","1818462ab1f4c6c1dc9c164f1eae8a25"],["2019/01/07/express学习/index.html","6d40c69f609a51a047b481eb42dcd2b5"],["2019/01/09/Flutter之文本/index.html","f596712f4b8083efaf259a0c60b62d55"],["2019/01/11/Flutter之按钮/index.html","9cf1448b05516ade71fef7fe6e32e981"],["2019/01/11/flutter之图片和icon/index.html","2fc3fbc26ec17239a346cabcf5502d17"],["2019/01/14/next-js学习/index.html","f041cb56e60b28c0031068374c73c49d"],["2019/01/15/flutter之弹性布局Flex/index.html","825a74aca953ea5df0a4ccae97ef56b9"],["2019/01/15/flutter线性布局/index.html","ce32786fd30e6ab1333c692b8ec1537e"],["2019/01/15/rust2/index.html","2a9b58a386418b1d41896fb03478971a"],["2019/01/20/express-ts上手记1/index.html","172b9bf9fb6ead15e3b71f5946033415"],["2019/01/21/react遇上typescript/index.html","750f066cb8578ae7e558ba6a74a1851c"],["2019/01/26/新点总结/index.html","3de5c22251a9ac745da76377d095a6ce"],["2019/02/11/angular架构概览/index.html","c400fdaa3fdc31d837c03e0a88eb218b"],["2019/03/28/promise相关/index.html","abb9b732bdfcd6dfe84edcd7df6ed4a8"],["2019/03/28/实现一个sleep方法/index.html","a64937c681423fab36b82ffce0c0124a"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","b226d8f1dd7d7116ac128c86f15c3a8b"],["2019/04/02/证书可信任/index.html","4b09c02f16ca0c532ad3a5b5bf4d4b2e"],["2019/04/09/从一道题目谈谈跨域/index.html","d617e089fc07811721d45f45006fd742"],["2019/04/18/关于滚动吸顶/index.html","b2ca558984828529f5647dcfd9258dc0"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["archives/2018/10/index.html","99b79639e9cbb951834e8376ede8456f"],["archives/2018/10/page/2/index.html","2d909e1c6e0238886229ed5728a60dd3"],["archives/2018/11/index.html","24b35d76f64a278c792901012171732a"],["archives/2018/11/page/2/index.html","dcffddcdad93fec0774b1adb5b8e5a1e"],["archives/2018/12/index.html","cb9fd83086cdde896e01553b1160de27"],["archives/2018/12/page/2/index.html","a55b4e01030bab81edb76208614b3200"],["archives/2018/index.html","9a75b243fa01dc347033875c8b3bbeef"],["archives/2018/page/2/index.html","2fb57e15ed149d9503629f6e6706efa8"],["archives/2018/page/3/index.html","1252617ce3e83a7a66399fd30e52b6db"],["archives/2018/page/4/index.html","9295d5d9d87750968ff142d3555af5d7"],["archives/2019/01/index.html","48612df935442578147863e207d67f89"],["archives/2019/01/page/2/index.html","a9ccd2b7059be5b2b66760c6d8278bd3"],["archives/2019/02/index.html","af35cf41a9e8b58c4a6e2d4d02990e9e"],["archives/2019/03/index.html","024e4207d7f5d3f775d23eebc7497cb2"],["archives/2019/04/index.html","353907c776c5d4d980c039cf0b79a666"],["archives/2019/index.html","f68242fa493b48e8c08dffa8b7e1874c"],["archives/2019/page/2/index.html","2a5391994a85e72ad88f69f092e3d81f"],["archives/2019/page/3/index.html","b4971f4df78862974a5c7badb2f64d43"],["archives/index.html","132e06f874f3407c0661628fb3c46a6f"],["archives/page/2/index.html","7107b7f38d40cd2c7062b7d3a93a70dd"],["archives/page/3/index.html","4bca592ccfc26f895091ea1e893082a4"],["archives/page/4/index.html","67de63c6809517ee33631af0a459c1cc"],["archives/page/5/index.html","994e446897e0a873f2b703bca65a5d27"],["archives/page/6/index.html","2334caa77abcd745d166121a43b1623f"],["archives/page/7/index.html","6e0f230baa7823e906b62508d43d0948"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","665429ae3ea108bf19b28f1dd97a6662"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","455e3726cadc37edde2fe33c1a88fd90"],["page/3/index.html","5bf77453520aef78614b718210ec9cbe"],["page/4/index.html","986e4dfad753253ddc18d5bf7894b0bc"],["page/5/index.html","9de96affda404c72b74ac2c3382584eb"],["page/6/index.html","38404519a0e5445f90c9acef42d29d50"],["page/7/index.html","f23cb72552da131f697e8e7152b2e302"],["sw.js","3c978048b52756c6f374e1a9751c13c7"],["tags/JS/index.html","ee164af0891cee575cf4180ed1b6ddae"],["tags/ReactNative/index.html","5d77e9e6dbfd189f6bffcb07b197db77"],["tags/Rust/index.html","addd538dc711a76c6c1fa39e471a4560"],["tags/angular/index.html","cd0222e5a2edd4806de3d1aa09d71387"],["tags/css/index.html","3ca6115768a6b7d6b2aae8b35515550c"],["tags/dart/index.html","c7ae2b6c64cf761b94572408e3e6a130"],["tags/express/index.html","da36e160c9e7a9586f23442b4b6d0c8b"],["tags/flutter/index.html","0ab1cb013dbbfc4fb1bc7d90123d2e46"],["tags/https/index.html","067f2c8844a32db5094a9b6e6f1a5696"],["tags/javascript/index.html","527a10cd74af6fcd717c89408244bef3"],["tags/mongodb/index.html","79e0ad45001f44fe0284df8537d3c209"],["tags/mysql/index.html","5587003b99dac6dfa076ab872ff36070"],["tags/nest/index.html","5921d903a383984899cefcaa4d459e82"],["tags/nestjs/index.html","a85537e79a6bfbb2e21ca49afd2f2c75"],["tags/next-js/index.html","7a955cc9ac78274ad8ee1323691065d6"],["tags/node/index.html","d2443c1ab029c4d2b33d552d2b5d95af"],["tags/nodejs/index.html","9f510b02a650745ef23cca71e9c18739"],["tags/puppeteer/index.html","dd5114e93d51384286c84c67f44403ac"],["tags/react/index.html","290af24c2e7ef1a5d31b702b9cf656ff"],["tags/typeORM/index.html","d7a08e8e7d9490b5a710d3297704489b"],["tags/typescript/index.html","c9beb943becf7952b13bc5e2d11dc922"],["tags/web/index.html","b79d99a0907dc290c54fe1341abc013e"],["tags/work/index.html","b745fce03c7875a834b4d335c2a03afb"],["tags/wxProgram/index.html","435fe078eed11cfc6844bb7c34a40348"]];
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







