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

var precacheConfig = [["2018/10/13/hello-world/index.html","96646fee485f54631e57808941946df0"],["2018/10/13/文本换行/index.html","ca1a070c684e4b4a017bbeeb9e4b0489"],["2018/10/15/css实现轮播/index.html","28b15ccd4f029dae1e4074675c3a6835"],["2018/10/15/puppeteer-API备忘/index.html","be08de80a048acf4dc2a4d0d744a31eb"],["2018/10/17/DOM操作/index.html","1adb788d54f38af91342f76d07cba39d"],["2018/10/18/rust语法备忘/index.html","cbfb7fabc4807da1c4066b93f034f5c4"],["2018/10/18/typeORM学习/index.html","e837d9587330e03cc1ec84eee02251c5"],["2018/10/25/typescript知识点/index.html","1f52c180be8ee359aa6b804b81b47f84"],["2018/10/25/小程序思考/index.html","ba2599a15ff5f1bc0f7566fd9cdefd13"],["2018/10/29/angular指令/index.html","35f6fa9c2c3adc337d52d8e2b3664b9d"],["2018/10/31/css动画/index.html","11cc292c22b4f5747568068115835eeb"],["2018/10/31/css布局/index.html","a7885b0cc2a73f2876950d5f68535c3a"],["2018/11/01/angular生命周期/index.html","bc4d6a2b179683cdafd5dc2d0a42aea3"],["2018/11/01/angular组件交互/index.html","eb912570d75093518fe854c977d5abac"],["2018/11/02/angular模板语法/index.html","01d6d2cdda9f7eb30b85fc5bdaa4cd5c"],["2018/11/03/mysql命令行/index.html","12b8190beaeb114b19b6dd046ab3a6f5"],["2018/11/04/css知识点/index.html","8f8535466f45ab3f8c271c3ec511f98f"],["2018/11/14/nest学习/index.html","7a098222286d7b93a2d06707080bc4b6"],["2018/11/18/js注意点/index.html","b1c3fb329d27efd309c53d52f2f1df0b"],["2018/11/21/工作bug总结/index.html","ac228fdae128d9604f87215e90118793"],["2018/11/22/mongodb学习/index.html","a96fae9f3875b7260f7a1fe230200b18"],["2018/11/26/react坑/index.html","77e60fc9bcca343b2e5318a1fe24d59d"],["2018/11/27/typescript实践/index.html","59c0bc8391e9c39cf901b7bab94bf2ed"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","53b5cd5304c7b9e003625966e7a27eb2"],["2018/12/01/vue学习/index.html","98c6cc92e03aed6a9575e67ee1ead6c1"],["2018/12/07/nodejs the right way 一/index.html","1e3ebd2990e0ac76540cdeef175a17b1"],["2018/12/07/react生态基本使用笔记/index.html","dcbedf4bf37f869f5f8cf14e44c6da51"],["2018/12/11/rn基础一/index.html","d746cf3f8de0ae6ef9e729ed6ce50d59"],["2018/12/11/函数式一/index.html","4b641f1eb6ba1161b3717768f6246553"],["2018/12/12/nodejs之process/index.html","0e9cde46b977729e1cab7a00b8093e98"],["2018/12/12/node事件循环/index.html","74b40fb86333b7f5dc316d47fcd4ad59"],["2018/12/13/elasticsearch/index.html","80a1608d6ac53b7e433e3398ea4a322b"],["2018/12/13/express/index.html","0fe2a2554f3c0dde0b4f6c2e1acb6ab3"],["2018/12/18/小程序性能优化/index.html","6d69ba25cb916e14b421498b33fb94e3"],["2018/12/20/express2之database/index.html","15cb344c192417ee092f7a9257de0764"],["2018/12/26/flutter学习1/index.html","4af8e6aef1f29454e5cac752024eaa82"],["2018/12/27/flutter之包管理/index.html","01501fc513e4bfb97873d49bcaee2fb1"],["2018/12/28/express测试/index.html","d3cc508c2589e25831eaab5f3a27661d"],["2018/12/28/flutter之widget基础/index.html","460d937c0f99400969755dab60fd6e42"],["2018/12/29/Express值请求体中间件解析/index.html","3cebb4f24ccbd1ba310c550a6c84b121"],["2019/01/02/express开发小结/index.html","25766021bdca28bf572c887990636dcf"],["2019/01/05/dart基础1/index.html","7c12be5295e216495e414344bd288852"],["2019/01/05/dart基础2/index.html","36a18e748735a6192bd1300e7b6bf7b2"],["2019/01/07/dart基础3/index.html","5af990229c332c29c163350900e1c190"],["2019/01/07/express学习/index.html","71b6972bb9fcbc0c85f9a1c01637cca4"],["2019/01/09/Flutter之文本/index.html","6ede52b8c3ce37dcf7ebcce53c051291"],["2019/01/11/Flutter之按钮/index.html","0d5c1667e373bf28a7355c765cc6fc4a"],["2019/01/11/flutter之图片和icon/index.html","6a41f77eb4123ddea1a87ba0b0bd2711"],["2019/01/14/next-js学习/index.html","3018f2cc983d220c2d377b0b1693498d"],["2019/01/15/flutter之弹性布局Flex/index.html","f4b3a339a7571f3657ce4f1d03ceba49"],["2019/01/15/flutter线性布局/index.html","bf516ed391e0476638ed75a199330275"],["2019/01/15/rust2/index.html","d4f8eb047614c69da7186e7e7d144f57"],["2019/01/20/express-ts上手记1/index.html","dfb61612a963b0a1a2294eecd445308d"],["2019/01/21/react遇上typescript/index.html","deff9c8a5fd8ef62586a6170c751f6e3"],["2019/01/26/新点总结/index.html","f0c43e8d1fe87724a73d4f05331a757f"],["2019/02/11/angular架构概览/index.html","18ffa28205f3497ad59ed1d87edad123"],["2019/03/28/promise相关/index.html","20692d0fccbbeb65a2168cd9c58533da"],["2019/03/28/实现一个sleep方法/index.html","38244a3fc04ca3877c35d459dc9bf91b"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","54480e4d2d8d7b4239c0474872dabdd0"],["2019/04/02/证书可信任/index.html","21a42b96ba5018430d274490d7869996"],["2019/04/09/从一道题目谈谈跨域/index.html","5078eb8005004ef6cb9c3aebf9616bb7"],["2019/04/18/关于滚动吸顶/index.html","57d7f0f72029cb258617b0d2ab82daff"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","c5dcfcadd60db405221adde75dea2aa4"],["2019/04/23/深入理解padding/index.html","61b8659401ef6ff43f293c1668a5c3f4"],["2019/04/24/css题目/index.html","271bd1412967d8e40ec13d1c4e36892b"],["2019/04/24/js题目/index.html","c41a29d487db5bd37ac831b5c241ba67"],["2019/04/25/好吧-EventLoop/index.html","2cc952fffbb2c8749d7bcce5155f3e80"],["2019/04/26/轮播图实现/index.html","83a89edb360676dd5a3362ea0cb217a9"],["2019/04/27/深入理解margin/index.html","9d37f824769eabdeb302394aa6de1bbf"],["2019/05/07/FirstPaint/index.html","cae0190d3e6c1c03abed15e7c0cd3514"],["archives/2018/10/index.html","91a82df58d1931a10fb354cbf906d69b"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","58ed2d528ef7f516544de5af0b49c42e"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","b7dedc84fab04d0c022a81465aa990c6"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","deca0f64cc4f026f982d8e9bb26f75bd"],["archives/2018/page/2/index.html","e9c178e20048256db12082a40b354350"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","7dbac3b1ca489399fdf4c37cd72ce981"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","3bd824456f69e0863052cfc8798d5aa7"],["archives/2019/03/index.html","62af672f52e5d2cd0500bebb824a25fe"],["archives/2019/04/index.html","9a1174a5240de0a9309a6d390f9496ae"],["archives/2019/05/index.html","acafab152640acf6ef7888542f164127"],["archives/2019/index.html","2813c28763e2e58fba2d405a76484100"],["archives/2019/page/2/index.html","8da24a2bfb28d2da88b5b3a8c542ee4f"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","fc3771f0878a9f129752f5ae5cec6bc2"],["archives/page/2/index.html","78b40018ee3a06b056dfb57188b8d9c4"],["archives/page/3/index.html","2390873557b71bb753274d8fc6d6432c"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","978d52e21a4ab9590e9eb38cfaaca431"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","e634b808a7ced4ac24c00e2aaee2296b"],["page/3/index.html","9ef64dd70a19cadfc7f763b247ff6e7f"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","ee8a681275d2762b270d286702a65081"],["tags/JS/index.html","89f4f8444423f4b04804691536aa444b"],["tags/ReactNative/index.html","3ccc0681f018b7a6c6345b90be0c64d4"],["tags/Rust/index.html","2591efa5812f8b62fb3d3eec0b678779"],["tags/angular/index.html","60abef8ee04277de1339dc54c4af0fd3"],["tags/css/index.html","3402db0af5ff5c2c6a1a10771a9e4654"],["tags/dart/index.html","015feb7043d23a373db8cba7f59ce730"],["tags/express/index.html","05cee23dcc9816f925bd2ddac84e9bfa"],["tags/flutter/index.html","f798c056d9685e25ed9e7018200b85af"],["tags/https/index.html","b911d42d3954d6efa3313aa6a985821f"],["tags/javascript/index.html","d7659c430586fb35086ee4562889b036"],["tags/mongodb/index.html","456cc23837ad3a57f2ff3f04cba5db7a"],["tags/mysql/index.html","3d1a82f511d54b61e4a31aff881a9ac4"],["tags/nest/index.html","040b2851f3ca7ef1172a6c469f251b6a"],["tags/nestjs/index.html","caf2cb0b08b2f4280c9c148b94fd89d2"],["tags/next-js/index.html","f6e232111d4609c0a5764ac6923bd969"],["tags/node/index.html","b773fcc4b31fb350cb7b055cd6080df9"],["tags/nodejs/index.html","f28695738d1c8a5383d2f164f21b46d7"],["tags/puppeteer/index.html","fab11c791bc5c9acff786e8e888d0554"],["tags/react/index.html","aa1e2e9aea7e7ddec20e932bf996260e"],["tags/typeORM/index.html","adb27234d79bc2251cc375bb26be867a"],["tags/typescript/index.html","9fc5c39c9d6c60380e899bdfc417148b"],["tags/web/index.html","f05d7267a5d920ac6f60804d98670c35"],["tags/work/index.html","8dd724f2ce19d7fae061fec366ecd48f"],["tags/wxProgram/index.html","f79dedde7ced6ef73d5d8fa85662f9ae"],["tags/效果/index.html","3fdcf1cbc69a971dad08eda165aa3d4b"]];
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







