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

var precacheConfig = [["2018/10/13/hello-world/index.html","83935222f9aa614eba93bc6e2d4bedf8"],["2018/10/13/文本换行/index.html","17f560b7e6169baccc5492c28f75a61d"],["2018/10/15/css实现轮播/index.html","ad2c7d4b18eae857a5eff6f77e91d3c8"],["2018/10/15/puppeteer-API备忘/index.html","80bae5078f795021593e43852b83f1d4"],["2018/10/17/DOM操作/index.html","2f8a664bf119918f403e6bb81fe3277d"],["2018/10/18/rust语法备忘/index.html","b72b80480b1cc78e6d42ef29d37690b8"],["2018/10/18/typeORM学习/index.html","cc380156c17f83d3627b59760b8779e7"],["2018/10/25/typescript知识点/index.html","26c2ecde74f6ca3ba53ba7a866821599"],["2018/10/25/小程序思考/index.html","a6f9526ecf98844f4dc08176647e1da0"],["2018/10/29/angular指令/index.html","6b26f5481de8d1ab1e020e9348cfcf13"],["2018/10/31/css动画/index.html","d95febd0e0dbe2dfa6c5bb368dd76cf4"],["2018/10/31/css布局/index.html","5e89193a75d0c9f309cda4e484c87a54"],["2018/11/01/angular生命周期/index.html","9f2f454fc15233cb214ecd44127c217e"],["2018/11/01/angular组件交互/index.html","c701032f5723080649188bd6ddd07d99"],["2018/11/02/angular模板语法/index.html","c36de1476c43d91165831c5a57ec2fb7"],["2018/11/03/mysql命令行/index.html","3eff93fe1abe0056e7e64ee98024139f"],["2018/11/04/css知识点/index.html","f404cf7e88c953b353222bf258070e03"],["2018/11/14/nest学习/index.html","f84d7fdfd8ed641351c8a17a8a7e3f84"],["2018/11/18/js注意点/index.html","573b3c73960e1da3f71b4d2b56a00671"],["2018/11/21/工作bug总结/index.html","2b690b4c11f6d9bae898cd741ca4fd95"],["2018/11/22/mongodb学习/index.html","300460ab7a8a08764a88554203ec0d29"],["2018/11/26/react坑/index.html","eef5c8a67c2de4ca197ea8949686c7ba"],["2018/11/27/typescript实践/index.html","b6f0c02e7cceff2efca7475ca94e7ccc"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","f3f5b265f8b9675ed9d9d7dc92689481"],["2018/12/01/vue学习/index.html","825ea6f9dcee8a7dfec1744926d3915c"],["2018/12/07/nodejs the right way 一/index.html","ef6760ac67d456a493ee86ad578101a3"],["2018/12/07/react生态基本使用笔记/index.html","f82a6581093d67349c011c73c9c32312"],["2018/12/11/rn基础一/index.html","8e7ed3c9598f3bc4a9ce9782c03d3aba"],["2018/12/11/函数式一/index.html","c306b4d602c7f9f8c393d5a92c47a9f0"],["2018/12/12/nodejs之process/index.html","963f3fa1da01379f09f15f4bc57c517d"],["2018/12/12/node事件循环/index.html","d77d5c6a56d169df8afb8341366baf23"],["2018/12/13/elasticsearch/index.html","179db8b528c3509d5e4cdb65a6f0e55d"],["2018/12/13/express/index.html","66e22b4e05dcc9875ad7db6e9fb749f6"],["2018/12/18/小程序性能优化/index.html","9d01eb7d7cd74fa37cdafda31e0af892"],["2018/12/20/express2之database/index.html","480686de97400a6a29a63dfc7af63d07"],["2018/12/26/flutter学习1/index.html","254517b6dbe91829dafabb30c19ea67b"],["2018/12/27/flutter之包管理/index.html","64082380d36e14ac7aece0f84473985c"],["2018/12/28/express测试/index.html","93050330b62264d27c28b30b75961fa1"],["2018/12/28/flutter之widget基础/index.html","3743d70dcc8a6d9b21d184c4661c09e0"],["2018/12/29/Express值请求体中间件解析/index.html","8b59c6742f7694af05c998619f9691fe"],["2019/01/02/express开发小结/index.html","bf3f39872607a29b539b50e604b24ea8"],["2019/01/05/dart基础1/index.html","d2b531933e63762fba438a0df8a5c793"],["2019/01/05/dart基础2/index.html","057e77037458c0e73588ce113e0eb5e7"],["2019/01/07/dart基础3/index.html","b38b856288e5ff9208efc63582b0f088"],["2019/01/07/express学习/index.html","929212fafb3b9b1c2026e0de9d5fa432"],["2019/01/09/Flutter之文本/index.html","6c62e9d0f9b230f44cefbbf616ac1da2"],["2019/01/11/Flutter之按钮/index.html","21aaf61ad755bfd9a02bb832bdf15a26"],["2019/01/11/flutter之图片和icon/index.html","fe01c310279e27f52411dc4a9a806a5d"],["2019/01/14/next-js学习/index.html","29c4fdcfe4ce49ecaae4539d0c419307"],["2019/01/15/flutter之弹性布局Flex/index.html","a67d597a89fe68b739dc6709b2b1df9c"],["2019/01/15/flutter线性布局/index.html","cf370a78c7253103bc1eca21a042602e"],["2019/01/15/rust2/index.html","d3c32400f79da7f311f18e298fcc13d1"],["2019/01/20/express-ts上手记1/index.html","9b5b612e281b3354013880e6c9e42310"],["2019/01/21/react遇上typescript/index.html","157adc7919e7d09b93e51308f4b95a87"],["2019/01/26/新点总结/index.html","0e0a83ec16e09e6f005dfdef747e0306"],["2019/02/11/angular架构概览/index.html","32ea7358a497b25ab184811ed35ea38c"],["2019/03/28/promise相关/index.html","75c5fa6ae168d7072967e3849bd68708"],["2019/03/28/实现一个sleep方法/index.html","1b0e40f55d7bb4c7f716bdc7706ebde0"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","e5fd43c632e517f201610bdafea1181d"],["2019/04/02/证书可信任/index.html","2b43f8f8c30b3cb1f5e5ffb6fa91a127"],["2019/04/09/从一道题目谈谈跨域/index.html","220d4b9ee06b1100243a62dce901afbf"],["2019/04/18/关于滚动吸顶/index.html","cb83a819ddf24388d254ec0ca6d40482"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","5c6932c372283e902d89646e6c85c07f"],["2019/04/23/深入理解padding/index.html","01940a79d4b373fc21cc38014745ff16"],["2019/04/24/css题目/index.html","f01dc61ab6f7ac2b219a7b5b80b02175"],["2019/04/24/js题目/index.html","e5341d878abbda06c3bc98ccf01b455d"],["2019/04/25/好吧-EventLoop/index.html","89a09e64c2d680f99ff6a2e4aed3ac49"],["2019/04/26/轮播图实现/index.html","3000e3f485f864ce9a822042fe087ca7"],["2019/04/27/深入理解margin/index.html","8c9298f6042ce88d5075d3346d9c0f80"],["2019/05/07/FirstPaint/index.html","0e23cad230b3e88489385972572d5cf4"],["archives/2018/10/index.html","3608bd43d2aa515987812fcc186a8b76"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","b6ef4adbea202e920f341f0cb458a74b"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","71ec7d1ee9e1a215f47e92150ccd12d0"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","5120e196f8788454fc259e82b76e2256"],["archives/2018/page/2/index.html","e5f50ceec9e5fb3990eb01bbfcc9a90c"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","b5be43ff100d10436b1c4f2618302dae"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","7deccda00cfce6e5b9fd4bdfbc08ff12"],["archives/2019/03/index.html","a3a60054a29e3a7e8f03f84ef85e103b"],["archives/2019/04/index.html","d43d9501918cf5f8e47b30e7d3222161"],["archives/2019/05/index.html","96e81adb659af9f42d5f68efe821153b"],["archives/2019/index.html","f7b06b4df90614118e08cf6b02177894"],["archives/2019/page/2/index.html","4b62b771d53acecd22768bf6675ca251"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","dbf8a34cb2413201d8f2296ea278ad51"],["archives/page/2/index.html","3ef6d0d6ef5742aff6367ba975e2a18c"],["archives/page/3/index.html","c79fb41f6aeb7fc573ecdf6e2fde260e"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","b563dd00b698615f08ef513873499cd0"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","b79fd49a16d020a6cbf4b40070b2143e"],["page/3/index.html","cebf8faf60b05f9d6b7bbf219f7cb148"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","7675158c0f3c987159557672f33c0bce"],["tags/JS/index.html","ac8e450c6858ef6baccff960a1a12f83"],["tags/ReactNative/index.html","b6ce8c3f4446bb94901bad0748f5f18f"],["tags/Rust/index.html","c42fb2d474475099f696ed444ea4b91f"],["tags/angular/index.html","d443498c89be85802e6dcab0bbda38ad"],["tags/css/index.html","96de139fba8fd7244e53040104ee50e4"],["tags/dart/index.html","5f08650ebcd936d00074748b0e63835a"],["tags/express/index.html","1299027fd19bdba1e24648b0fe6378e4"],["tags/flutter/index.html","22f6735e986006eacd2fcb5f9635c0ff"],["tags/https/index.html","a4e963b6fd6c211fe8a56d4bfa5a0816"],["tags/javascript/index.html","01abcfb2f579185c2ab063d0debab999"],["tags/mongodb/index.html","727f1afe389053c0cd3ab846e4cb13fa"],["tags/mysql/index.html","182ba7c560ce96d57ec33b4f06e56c4e"],["tags/nest/index.html","ad158d2929fd727e5b263c23ce60ebc0"],["tags/nestjs/index.html","ff5d19f4073f4717f82b61d33e6b0418"],["tags/next-js/index.html","e7af75618fc0fd2307ed9809dc6fb470"],["tags/node/index.html","4ae8e063cef6c99cb9811d11fb0a5a47"],["tags/nodejs/index.html","351b8770641f83808a527af8fb4e663a"],["tags/puppeteer/index.html","eee81ca342c8b5e8d984925fa3168805"],["tags/react/index.html","9f1f56f26f4573ad15321d8e90983b2c"],["tags/typeORM/index.html","70fed84c78a42bde6baedaecd55aad8a"],["tags/typescript/index.html","62f50f5e8c9f468f0bac835e42ba3cfd"],["tags/web/index.html","f53b99e06c93c321d62c7c63567feaaa"],["tags/work/index.html","aa22b19406568978a946eb2824039045"],["tags/wxProgram/index.html","ac0ee951febc9c1323a588031064f6e2"],["tags/效果/index.html","eb43706634b5650ba5ee681cb1a4382a"]];
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







