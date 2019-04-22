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

var precacheConfig = [["2018/10/13/hello-world/index.html","b74ffd965fcbc1c3c5ac7911a5875002"],["2018/10/13/文本换行/index.html","9b1487beed033b5eaac453690fb4c4d5"],["2018/10/15/css实现轮播/index.html","51063556041078bac6089b0d5b38aaca"],["2018/10/15/puppeteer-API备忘/index.html","9936e6d84bf56c32605ac6ed017fead3"],["2018/10/17/DOM操作/index.html","3c6ecbc2e58cf976c0bd6d11090ce6fb"],["2018/10/18/rust语法备忘/index.html","ab752ea9edf16de076bb61a56161d0dd"],["2018/10/18/typeORM学习/index.html","c34540ae3cb1ac2de7bd3e406af86a42"],["2018/10/25/typescript知识点/index.html","3ce34031ee6e493c73a00cf0154a454d"],["2018/10/25/小程序思考/index.html","cc1efec80c399894e4ece19fdd1b6501"],["2018/10/29/angular指令/index.html","e315518024dfe2eb4b5f00195c9622ab"],["2018/10/31/css动画/index.html","57fcc2b0974630c6b08a8415bbc1217b"],["2018/10/31/css布局/index.html","741dac88d81ed78f40ae277791a4b5c3"],["2018/11/01/angular生命周期/index.html","43927cb1bc75f686c6603c9c3fc564a7"],["2018/11/01/angular组件交互/index.html","a75718f7a797d10cb82220878aa5de4e"],["2018/11/02/angular模板语法/index.html","1a44a2d6aea4ca5e55e3856a9b912de8"],["2018/11/03/mysql命令行/index.html","ecd5bdbca804b17b6fcfede4f923c516"],["2018/11/04/css知识点/index.html","8eac1c68ef6d333db537dca28a22e86e"],["2018/11/14/nest学习/index.html","57c5d21ed30d87a2da93e530e2b9a1dd"],["2018/11/18/js注意点/index.html","0e05d746c46c3b959b85f970f3604fc8"],["2018/11/21/工作bug总结/index.html","f821e9a05a8164ccc415fdf7e6ac5b70"],["2018/11/22/mongodb学习/index.html","36801d5bb73500eb711bc61a9f6ad1b8"],["2018/11/26/react坑/index.html","66de1e1c79006c99252385bd1f2a2769"],["2018/11/27/typescript实践/index.html","7e073bdc583bd9a09a9c67610bd4de1c"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","5100076e59af18fb3c57e282b5b94e6d"],["2018/12/01/vue学习/index.html","62f184f753bd0b4b4d0c55bc3d540337"],["2018/12/07/nodejs the right way 一/index.html","bd195f8fd13aab5751ea447ccc753b8e"],["2018/12/07/react生态基本使用笔记/index.html","84a4c9facafa578394f1ece7a5238a2b"],["2018/12/11/rn基础一/index.html","ff57ba4462bdde04f182adf8177de1eb"],["2018/12/11/函数式一/index.html","43f2820bc80c47a3af8de22f4e529d79"],["2018/12/12/nodejs之process/index.html","5c3e831f6bab17a4a68316fde87e59d1"],["2018/12/12/node事件循环/index.html","a34bd0c15334ef97eb84830b46401046"],["2018/12/13/elasticsearch/index.html","19c28e012f52f0cd50de15e5ace06b0a"],["2018/12/13/express/index.html","065798c10f0f37b3ac5f8e51695aa2b1"],["2018/12/18/小程序性能优化/index.html","9b4377ef93b802e1d14735d6587d9139"],["2018/12/20/express2之database/index.html","c3ce6b8b9a547f9417f7422f32b5710c"],["2018/12/26/flutter学习1/index.html","3723b7d82612d793a61a1b8ca9366866"],["2018/12/27/flutter之包管理/index.html","7def65d998bb98385c3d652aa48fa569"],["2018/12/28/express测试/index.html","3c34d8550831623902b1c1ebb1155025"],["2018/12/28/flutter之widget基础/index.html","203df62c7dafdf4652c609e9a407f5a5"],["2018/12/29/Express值请求体中间件解析/index.html","2ebc6d5d3112f883f0d4e79ad92ee7d5"],["2019/01/02/express开发小结/index.html","6faa8b18f75b522991559e074c4e1fa1"],["2019/01/05/dart基础1/index.html","69a6e640da65a47b86f8124d02d96bcc"],["2019/01/05/dart基础2/index.html","672a4354629c16a4248f48f6fc9cf073"],["2019/01/07/dart基础3/index.html","992381af799901f09016358ce493ca35"],["2019/01/07/express学习/index.html","2aa5169d97a3003ade5a0144ebbae081"],["2019/01/09/Flutter之文本/index.html","3d29a5a35dcff0a90a87f05e16af05be"],["2019/01/11/Flutter之按钮/index.html","28e48f49b9692c9361755cdbd7c9bf77"],["2019/01/11/flutter之图片和icon/index.html","e263ad9386b240a1155270a03cbb6691"],["2019/01/14/next-js学习/index.html","4f7af0fd446fef283044aec724d00d2a"],["2019/01/15/flutter之弹性布局Flex/index.html","bcb54eb74d04c0e0fc921297709b3248"],["2019/01/15/flutter线性布局/index.html","8212f8a05041cc2fe0facbabe47bbbe3"],["2019/01/15/rust2/index.html","6b8b29912fbd17780d197549a7683128"],["2019/01/20/express-ts上手记1/index.html","f18322c35c267550733e56cc5bce6c9b"],["2019/01/21/react遇上typescript/index.html","2a2160c6dcf55cb8733aae740ae89a5c"],["2019/01/26/新点总结/index.html","22dc504680d9daf6a56a1a2ad7b09b7a"],["2019/02/11/angular架构概览/index.html","a8841db6c2b0d2d3bf775c229837b777"],["2019/03/28/promise相关/index.html","c009767c15784fd0e2ec6204b0bdb2ce"],["2019/03/28/实现一个sleep方法/index.html","31c193c6d8c09ae1be39820e7db30081"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","33983015d05b406914d3858869f7d4b3"],["2019/04/02/证书可信任/index.html","c8c911407a1edf46142676649ca7817c"],["2019/04/09/从一道题目谈谈跨域/index.html","a7622ea269f44f033deab782a047464f"],["2019/04/18/关于滚动吸顶/index.html","f98769161aff0f8d4df2ec075fee982a"],["2019/04/22/rust/index.html","c99e9b8866da330d57f13ab08265ecb9"],["archives/2018/10/index.html","381e3bf390347d01c5e7832fed3caa45"],["archives/2018/10/page/2/index.html","3d308a627876644c0576c1239f568cd5"],["archives/2018/11/index.html","fdfebc146df58f7e059a8c2f2b394bb6"],["archives/2018/11/page/2/index.html","6d6d14fa4e9936028b9f71ed122d54ba"],["archives/2018/12/index.html","098ace2133576130aeb70b7ad40e94b5"],["archives/2018/12/page/2/index.html","cf8d0e84f4d6f9fa6e5c7478edbd7841"],["archives/2018/index.html","77b172f2adba086f5493297089eae13f"],["archives/2018/page/2/index.html","de8f67abd82ec647d9af777a53b681d3"],["archives/2018/page/3/index.html","ea9b2b35f66bcb2c40da9b2b8cbc2e20"],["archives/2018/page/4/index.html","d64e1ee71fa4f09e12199c633f30a256"],["archives/2019/01/index.html","f40a54062ab6a72edb63ff4009073aa0"],["archives/2019/01/page/2/index.html","899c5960509184caccef01f78ba049ab"],["archives/2019/02/index.html","64638b5ba866a1ffcb6bcf33b0d6e0b7"],["archives/2019/03/index.html","eb3d57b06a266c7d316fd22823d28a6c"],["archives/2019/04/index.html","6a3e0dcc72f380293381368a36bd5559"],["archives/2019/index.html","bccb4f329e861cde66be97fb753c16f0"],["archives/2019/page/2/index.html","3d4e21650101cbf265823707be3bc9b4"],["archives/2019/page/3/index.html","72eaec85fff331120216c9275b0ab597"],["archives/index.html","eb326a1946f81a1207cf6e061a22a6d3"],["archives/page/2/index.html","6553d71979e03da1da5c7fa941cd53c1"],["archives/page/3/index.html","1a28f6219d1be029773a686ddda8552d"],["archives/page/4/index.html","06c2b2e0fb5ce96d862a4f68aa834550"],["archives/page/5/index.html","ec42b64becf549154ab201105e32a764"],["archives/page/6/index.html","deb36158064886404062187cdeca57fb"],["archives/page/7/index.html","fed4e11ec9965fd6c7ce872014571c59"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","f4e39343efc885c1909c51a42a06dbaa"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","d28be603778e69af3c2620225d45831b"],["page/3/index.html","2e546a3d065cf40fc44af4a7964ccf28"],["page/4/index.html","bcaedd960b3c89e1aef98563f8935f61"],["page/5/index.html","85dea485c33f560920f393c370c3cecd"],["page/6/index.html","d8c41166edc50cf0156402de4b18d104"],["page/7/index.html","b008e654ee4d0ea6e508bdcd6eb5dbc9"],["sw.js","d50dd35334ba1139c1bb5c1b246e3d1d"],["tags/JS/index.html","5ea60e1dc8d8765b92e6de271d2df254"],["tags/ReactNative/index.html","9a9647f7ff91c1ece818e776a991129c"],["tags/Rust/index.html","5784a6ef1d68bb5d1da94a039b59081a"],["tags/angular/index.html","c4cf396460d49fbeb444480b2bea2876"],["tags/css/index.html","05d0180ac6245754a6a6faac51cbe665"],["tags/dart/index.html","5603b8a689a81b5ec6d6f5a6d65f502f"],["tags/express/index.html","4e881ef17e9e8be6f3e17831f95777ea"],["tags/flutter/index.html","c22d31ba1e7859813933c113fe6559f2"],["tags/https/index.html","8b959883d4a83aa921abebe27dac5b59"],["tags/javascript/index.html","3197733575c119b94beb6bd96f117a8f"],["tags/mongodb/index.html","9325c154d4866720f3744efad11ff931"],["tags/mysql/index.html","d99269405bb5a970cb0de54a592d6d5d"],["tags/nest/index.html","67c66a6f05d557e83c0c613735b600b4"],["tags/nestjs/index.html","fb10cf9ac53a2f27974e61a702df99e3"],["tags/next-js/index.html","9d2d56dbea9c9685aea09dab4aad2c2c"],["tags/node/index.html","7ddcc83afe6df4224c87bb58e4ffaddf"],["tags/nodejs/index.html","2c04bd0b1b831095c438a3e04b36472c"],["tags/puppeteer/index.html","8ed7d9f493a3acf7b03a91cc32a07f16"],["tags/react/index.html","0fda51548f635e59f4a72204294a214f"],["tags/typeORM/index.html","5cb89521e4b4ffa749e2344250b45906"],["tags/typescript/index.html","4ce9ce493c312e0884d63c25d20027f5"],["tags/web/index.html","a690e9f95c2096948c753d36aba6d9ea"],["tags/work/index.html","212b076534b15cd68d0c2230f5327e58"],["tags/wxProgram/index.html","69f37f2acecaf0f3eaa28c59a8f2cdf7"]];
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







